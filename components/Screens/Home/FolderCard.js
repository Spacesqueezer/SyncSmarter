import React, { useState } from "react";
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  TouchableOpacityComponent,
} from "react-native";
import * as FileSystem from "expo-file-system";
import {
  cutAlias,
  decodeContentPath,
} from "../../../code/path_names_functions";

const FolderCard = ({ folderData }) => {
  const [selectedFolder, setSelectedFolder] = useState("not set");
  const [alias, setAlias] = useState("not set");

  const pickFolder = async () => {
    try {
      const permission =
        await FileSystem.StorageAccessFramework.requestDirectoryPermissionsAsync();
      console.log("permission", permission);
      if (permission.granted) {
        console.log("Пользователь предоставил разрешение");
        const folderPath = decodeContentPath(permission.directoryUri);
        console.log("folderPath: ", folderPath);
        const folderAlias = cutAlias(folderPath);
        console.log("folderAlias: ", folderAlias);
        setAlias(folderAlias);
        setSelectedFolder(folderPath);
      } else {
        console.log("Пользователь не предоставил разрешение");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const test_function = async () => {
    console.log("Test function");
    try {
      const files =
        await FileSystem.StorageAccessFramework.readDirectoryAsync(
          selectedFolder,
        );
      console.log("files: ", files);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <TouchableOpacity style={styles.container} onPress={pickFolder}>
      <Text style={styles.alias} numberOfLines={1}>
        {alias}
      </Text>
      <Text>{selectedFolder}</Text>
      <TouchableOpacity
        style={styles.test_button}
        onPress={test_function}
      ></TouchableOpacity>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 200,
    backgroundColor: "#25b920",
    alignItems: "center",
    justifyContent: "center",
  },
  alias: {
    fontSize: 24,
    fontWeight: "bold",
  },
  test_button: {
    backgroundColor: "blue",
    width: 200,
    aspectRatio: 2,
  },
});

export default FolderCard;

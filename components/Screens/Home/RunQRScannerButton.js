import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";

const RunQrScannerButton = ({ onPress }) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => onPress()}
    ></TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 100,
    aspectRatio: 1,
    borderRadius: 10,
    backgroundColor: "#b22a2a",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default RunQrScannerButton;

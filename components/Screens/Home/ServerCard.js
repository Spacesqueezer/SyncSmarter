import React from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";

const ServerCard = ({ servAddress }) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => {
        console.log(servAddress);
      }}
    >
      <Text>{servAddress}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 100,
    backgroundColor: "#dcc110",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default ServerCard;

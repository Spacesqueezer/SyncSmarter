import React from "react";
import { View } from "react-native";
import RunQrScannerButton from "./RunQRScannerButton";

const HomeScreen = ({ navigation }) => {
  const handlePress = () => {
    console.log("handlePress");
    navigation.navigate("QRScanner");
  };
  return (
    <View>
      <RunQrScannerButton onPress={() => handlePress()} />
    </View>
  );
};

export default HomeScreen;

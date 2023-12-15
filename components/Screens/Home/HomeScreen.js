import React, { useState, useEffect } from "react";
import { View } from "react-native";
import RunQrScannerButton from "./RunQRScannerButton";
import ServerCard from "./ServerCard";
import { getData } from "../../../code/save_load_functions";

const HomeScreen = ({ navigation }) => {
  const [serverAddress, setServerAddress] = useState("not set");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const address = await getData("serverAddress");
        console.log('Загруженный адрес: ', address);
        if (!address) {
          return;
        }
        setServerAddress(address);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []); // Пустой массив зависимостей означает, что эффект выполняется только при монтировании

  const handlePress = () => {
    console.log("handlePress");
    navigation.navigate("QRScanner");
  };

  return (
    <View>
      <ServerCard servAddress={serverAddress} />
      <RunQrScannerButton onPress={handlePress} />
    </View>
  );
};

export default HomeScreen;

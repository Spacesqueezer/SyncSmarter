import React, { useEffect, useState } from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import establishWebSocketConnection from "../../../code/connection_functions";

const ServerCard = ({ servAddress }) => {
  const [isConnectionOpened, setIsConnectionOpened] = useState(false);
  const [websocket, setWebsocket] = useState(null);

  useEffect(() => {
    console.log("useEffect");
    console.log("servAddress", servAddress);

    // Проверяем, что servAddress существует и не пуст
    if (servAddress.startsWith("ws://") || servAddress.startsWith("wss://")) {
      // Перед установкой соединения проверяем, что это не пустой адрес
      establishWebSocketConnection(servAddress)
        .then((ws) => {
          console.log("ws", ws);
          setWebsocket(ws);
          setIsConnectionOpened(true); // Устанавливаем флаг соединения при успешном подключении

          // Слушаем события открытия и закрытия вебсокета
          ws.addEventListener("open", () => {
            setIsConnectionOpened(true);
          });

          ws.addEventListener("close", () => {
            setIsConnectionOpened(false);
          });
        })
        .catch((error) => {
          console.error("WebSocket connection error:", error);
          setIsConnectionOpened(false);
        });
    }
  }, [servAddress]);

  return (
    <TouchableOpacity
      style={[
        styles.container,
        { backgroundColor: isConnectionOpened ? "green" : "red" },
      ]}
      onPress={() => {
        websocket.send('websocket');
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
    alignItems: "center",
    justifyContent: "center",
  },
});

export default ServerCard;

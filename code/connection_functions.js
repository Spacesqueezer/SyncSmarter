// WebSocketConnection.js
import { WebSocket as HermesWebSocket } from "react-native-websocket";

const establishWebSocketConnection = async (
  serverAddress,
  onMessage = () => {},
  onClose = () => {},
  onOpen = () => {},
) => {
  try {
    const ws =
      typeof HermesWebSocket !== "undefined"
        ? new HermesWebSocket(serverAddress)
        : new WebSocket(serverAddress);

    // Добавляем обработчик события при открытии соединения
    ws.onopen = async () => {
      await ws.send("Hello, server!"); // Ждем, пока сообщение отправится
      onOpen();
    };

    // Добавляем обработчик события при получении сообщения
    ws.onmessage = (event) => {
      onMessage(event.data);
    };

    // Добавляем обработчик события при закрытии соединения
    ws.onclose = (event) => {
      onClose(event.reason);
    };

    return ws;
  } catch (error) {
    console.error("WebSocket connection error:", error);
    return null;
  }
};

export default establishWebSocketConnection;

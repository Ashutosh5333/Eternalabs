import { useEffect, useState } from "react";
import { socket } from "@/lib/websocketMock";

export function useWebsocketStatus() {
  const [status, setStatus] = useState<
    "connecting" | "online" | "offline" | "reconnecting"
  >("connecting");

  useEffect(() => {
    const unsub = socket.onStatus(setStatus);
    return () => unsub();
  }, []);

  return status;
}

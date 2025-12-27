"use client";

import { useWebsocketStatus } from "@/modules/tokens/hooks/useWebsocketStatus";
import { cn } from "@/modules/tokens/utils/cn";


export default function WebsocketBadge() {
  const status = useWebsocketStatus();

  //  console.log("WebsocketBadge status========>",status)

  const label =
    status === "online"
      ? "🟢 Live"
      : status === "reconnecting"
      ? "🟠 Reconnecting…"
      : status === "offline"
      ? "🔴 Offline"
      : "🟡 Connecting…";

  return (
    <div
      className={cn(
        "px-2 py-[3px] rounded-md text-xs font-medium ",
        status === "online" && "bg-green-500/10 text-green-400 border-green-500/30",
        status === "connecting" && "bg-yellow-500/10 text-yellow-400 border-yellow-500/30",
        status === "reconnecting" && "bg-orange-500/10 text-orange-400 border-orange-500/30",
        status === "offline" && "bg-red-500/10 text-red-400 border-red-500/30"
      )}
    >
      {label} 
      
    </div>
  );
}

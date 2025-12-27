export default function ConnectionBadge({ status }: { status: string }) {
    const color =
      status === "online"
        ? "bg-green-500"
        : status === "connecting"
        ? "bg-yellow-400"
        : "bg-red-500";
  
    const text =
      status === "online"
        ? "Live"
        : status === "connecting"
        ? "Syncing..."
        : "Disconnected";
  
    return (
      <div className="flex items-center gap-2 text-sm text-white/80">
        <span className={`w-2.5 h-2.5 rounded-full ${color}`} />
        {text}
      </div>
    );
  }
  
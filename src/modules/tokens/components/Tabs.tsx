
"use client";
import { memo } from "react";

interface Props {
  active: string;
  setActive: (v: string) => void;
}

export default memo(function Tabs({ active, setActive }: Props) {
  const items = [
    { key: "all", label: "All" },
    { key: "new", label: "New Pairs" },
    { key: "final", label: "Final Stretch" },
    { key: "migrated", label: "Migrated" }
  ];

  return (
    <div className="flex gap-1 sm:gap-3 mb-3">
      {items.map(i => (
        <button
          key={i.key}
          onClick={() => setActive(i.key)}
          className={`px-3 py-1 rounded-md text-xs sm:text-sm transition
          ${active === i.key ? "bg-blue-600 text-white" : "bg-gray-800 text-gray-400"}`}
        >
          {i.label}
        </button>
      ))}
    </div>
  );
});

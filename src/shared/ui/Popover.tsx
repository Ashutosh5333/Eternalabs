"use client";
import { useState } from "react";

export default function Popover({
  trigger,
  children
}: {
  trigger: React.ReactNode;
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative inline-block">
      <div onClick={() => setOpen(!open)}>
        {trigger}
      </div>

      {open && (
        <div className="
          absolute z-50 mt-2 p-3 rounded-xl
          bg-gray-900 border border-gray-700
          shadow-lg w-64
        ">
          {children}
        </div>
      )}
    </div>
  );
}

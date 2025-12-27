"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

export default function HoverCard({
  trigger,
  children,
}: {
  trigger: React.ReactNode;
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);
  const [coords, setCoords] = useState({ top: 0, left: 0 });
  const [showAbove, setShowAbove] = useState(false);

  const triggerRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open && triggerRef.current) {
      const rect = triggerRef.current.getBoundingClientRect();

      const cardHeight = cardRef.current?.offsetHeight ?? 260;
      const spaceBelow = window.innerHeight - rect.bottom;
      const offset = 10;

      // 🔥 Flip card if not enough space below
      if (spaceBelow < cardHeight) {
        setShowAbove(true);
        setCoords({
          top: rect.top - cardHeight - offset,
          left: rect.left,
        });
      } else {
        setShowAbove(false);
        setCoords({
          top: rect.bottom + offset,
          left: rect.left,
        });
      }
    }
  }, [open]);

  return (
    <>
      <div
        ref={triggerRef}
        className="inline-block relative"
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
      >
        {trigger}
      </div>

      {open &&
        createPortal(
          <div
            ref={cardRef}
            style={{
              position: "fixed",
              top: coords.top,
              left: coords.left,
            }}
            className={`
              z-[999999]
              w-[330px]
              bg-[#0B0E14]
              border border-white/10
              rounded-xl
              shadow-[0_20px_60px_rgba(0,0,0,.9)]
              backdrop-blur-md
              transition-transform duration-150
              ${
                showAbove
                  ? "origin-bottom animate-in slide-in-from-bottom"
                  : "origin-top animate-in slide-in-from-top"
              }
            `}
          >
            {children}
          </div>,
          document.body
        )}
    </>
  );
}

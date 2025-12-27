"use client";
import { ReactNode, useState } from "react";

interface Props {
  text: string;
  children: ReactNode;
  side?: "top" | "bottom" | "left" | "right";
  align?: "center" | "start" | "end";
  delayDuration?: number;
}

export default function Tooltip({
  text,
  children,
  side = "top",
  align = "center",
  delayDuration = 60,
}: Props) {
  const [show, setShow] = useState(false);
  let timer: any;

  const onEnter = () => {
    timer = setTimeout(() => setShow(true), delayDuration);
  };

  const onLeave = () => {
    clearTimeout(timer);
    setShow(false);
  };

  const sideStyles = {
    top: "bottom-full mb-2",
    bottom: "top-full mt-2",
    left: "right-full mr-2",
    right: "left-full ml-2",
  }[side];

  const alignStyles =
    align === "center"
      ? "left-1/2 -translate-x-1/2"
      : align === "start"
      ? "left-0"
      : "right-0";

  return (
    <div
      className="relative inline-flex"
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
    >
      {children}

      {show && (
        <div
          className={`
            absolute ${sideStyles} ${alignStyles}
            text-[11px]
            px-2 py-1 rounded-md
            bg-[#0B0E14]/95
            border border-white/10
            shadow-[0_10px_40px_rgba(0,0,0,.9)]
            backdrop-blur
            text-white
            whitespace-nowrap
            z-[9999]
            animate-in fade-in zoom-in-95
          `}
        >
          {text}
        </div>
      )}
    </div>
  );
}

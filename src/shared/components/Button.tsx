"use client";

import clsx from "clsx";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;

  glowColor?: string;
  bg?: string;
  hoverBg?: string;
}

export default function Button({
  children,
  onClick,
  className = "",
  glowColor = "#2F6FFF",
  bg = "#2F6FFF",
  hoverBg = "#3F7BFF",
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={clsx(
        `
        px-3 py-[3px]
        rounded-full
        transition-all
        text-xs font-medium text-black
      `,
        className
      )}
      style={{
        background: bg,
        boxShadow: `0 0 12px ${glowColor}55`,
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLButtonElement).style.background = hoverBg;
        (
          e.currentTarget as HTMLButtonElement
        ).style.boxShadow = `0 0 18px ${glowColor}88`;
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLButtonElement).style.background = bg;
        (
          e.currentTarget as HTMLButtonElement
        ).style.boxShadow = `0 0 12px ${glowColor}55`;
      }}
    >
      {children}
    </button>
  );
}

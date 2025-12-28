"use client";
import { memo, useMemo } from "react";

export default memo(function TokenSparkline({
  points,
  up,
}: {
  points: number[];
  up: boolean;
}) {
  if (!points?.length)
    return <div className="w-20 sm:w-[70px] max-sm:w-[60px] h-6" />;

  const width = 90;
  const height = 26;

  const max = Math.max(...points);
  const min = Math.min(...points);
  const range = max - min || 1;

  const normalized = useMemo(
    () => points.map((p) => ((p - min) / range) * (height - 4)),
    [points, min, range]
  );

  const step = width / (points.length - 1);

  let d = `M 0 ${height - normalized[0]}`;
  normalized.forEach((y, i) => {
    if (!i) return;
    const x = i * step;
    const px = (i - 1) * step;
    const py = height - normalized[i - 1];
    d += ` Q ${px} ${py}, ${x} ${height - y}`;
  });

  const color = up ? "#2BCB51" : "#E14C63";
  const gradientId = `spark-${Math.random()}`;

  const isMobile = typeof window !== "undefined" && window.innerWidth < 640;

  if (isMobile) {
    return (
      <svg width={width} height={height}>
        <path d={d} stroke={color} strokeWidth="2" fill="none" />
      </svg>
    );
  }

  return (
    <svg
      width={width}
      height={height}
      className="
        transition-transform
        sm:scale-[.95]
        max-sm:scale-[.90]
      "
    >
      <defs>
        <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={color} stopOpacity="0.45" />
          <stop offset="100%" stopColor={color} stopOpacity="0" />
        </linearGradient>
      </defs>

      <path
        d={`${d} L ${width} ${height} L 0 ${height} Z`}
        fill={`url(#${gradientId})`}
      />

      <path
        d={d}
        stroke={color}
        strokeWidth="2"
        fill="none"
        style={{
          transition: "d 0.25s ease, stroke 0.25s ease",
        }}
      />
    </svg>
  );
});


export default function TokenSkeleton() {
  return (
    <div className="animate-pulse space-y-2">
      {Array.from({ length: 20 }).map((_, i) => (
        <div key={i} className="grid grid-cols-7 gap-3 px-3 py-4" style={{ animationDelay: `${i * 120}ms` }}>
          {Array.from({ length: 7 }).map((_, j) => (
            <div key={j} className="h-4 bg-gray-700 rounded" />
          ))}
        </div>
      ))}
    </div>
  );
}

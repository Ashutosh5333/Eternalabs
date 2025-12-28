"use client";

export default function DataTableRow({
  columns,
  data,
  renderCell,
  rowClass = ""
}: {
  columns: any[];
  data: any;
  renderCell: (key: string, row: any) => React.ReactNode;
  rowClass?: string;
}) {
  return (
    <tr className={`border border-border hover:bg-surfaceLight 
    transition hover:cursor-pointer ${rowClass}`}>
      {columns.map((col) => (
        <td
          key={col.key}
          className="px-2 py-2"
          style={{ width: col.width }}
          align={col.align || (col.center ? "center" : "left")}
        >
          {renderCell(col.key, data)}
        </td>
      ))}
    </tr>
  );
}

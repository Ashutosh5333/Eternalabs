"use client";

import DataTableRow from "./DataTableRow";

export default function DataTableBody({
  rows,
  columns,
  renderCell
}: {
  rows: any[];
  columns: any[];
  renderCell: (key: string, row: any) => React.ReactNode;
}) {
  return (
    <tbody className="gap-32">
      {rows.map((row) => (
        <DataTableRow
          key={row.id}
          data={row}
          columns={columns}
          renderCell={renderCell}
        />
      ))}
    </tbody>
  );
}

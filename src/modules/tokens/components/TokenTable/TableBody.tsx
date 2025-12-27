"use client";

import { memo } from "react";
import { tokenColumns } from "./tokenColumns";
import DataTableBody from "@/shared/datatable/DataTableBody";
import { Token } from "../../types/token";

interface Props {
  tokens: Token[];
  tab: string;
  sortField: string;
  dir: "asc" | "desc";
  renderCell: (key: string, token: Token) => React.ReactNode;
}

export default memo(function TableBody({
  tokens,
  tab,
  sortField,
  dir,
  renderCell
}: Props) {
  const filtered =
    tab === "all" ? tokens : tokens.filter((t) => t.status === tab);

  const sorted = [...filtered].sort((a, b) => {
    const valA = (a as any)[sortField];
    const valB = (b as any)[sortField];

    if (valA < valB) return dir === "asc" ? -1 : 1;
    if (valA > valB) return dir === "asc" ? 1 : -1;
    return 0;
  });

  return (
    <DataTableBody
      rows={sorted}
      columns={tokenColumns}
      renderCell={renderCell}
    />
  );
});

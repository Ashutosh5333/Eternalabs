"use client";
import { memo, useState, useMemo } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import Tabs from "./Tabs";
import TableHeader from "./TableHeader";
import TokenSkeleton from "./TokenSkeleton";
import { useTokenData } from "../hooks/useTokenData";
import { useWebsocketPriceStream } from "../hooks/useWebsocketPriceStream";
import { renderTokenCell } from "./TokenTable/TokenRowRenderer";
import { tokenColumns } from "./TokenTable/tokenColumns";
import DataTableBody from "@/shared/datatable/DataTableBody";

function TokenTableComponent() {
  const { isLoading, isError } = useTokenData();
  const tokens = useSelector((s: RootState) => s.tokens.data);

  const ids = useMemo(() => tokens?.map((t) => t.id) ?? [], [tokens]);

  useWebsocketPriceStream(ids);

  const [tab, setTab] = useState("all");
  const [sortField, setSortField] = useState("marketCap");
  const [dir, setDir] = useState<"asc" | "desc">("desc");

  const onSort = (f: any) => {
    if (sortField === f) setDir(dir === "asc" ? "desc" : "asc");
    else setSortField(f);
  };

  if (isLoading) return <TokenSkeleton />;
  if (isError) return <div className="text-red-500">Error loading</div>;

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
    <div>
      <Tabs active={tab} setActive={setTab} />

      <div className="overflow-x-auto">
        <div className="relative min-w-[1100px]">
          <table className="w-full table-fixed border border-separate border-black border-spacing-0 gap-20">
            <thead className="sticky top-0 z-20 bg-surface border border-border">
              <TableHeader
                sortField={sortField}
                sortDir={dir}
                onSort={onSort}
              />
            </thead>

            <DataTableBody
              rows={sorted}
              columns={tokenColumns}
              renderCell={renderTokenCell}
            />
          </table>
        </div>
      </div>
    </div>
  );
}

export default memo(TokenTableComponent);

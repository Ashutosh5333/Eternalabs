import { memo } from "react";

interface Props {
  sortField: any;
  sortDir: "asc" | "desc";
  onSort: (field: any) => void;
}

export default memo(function TableHeader({
  sortField,
  sortDir,
  onSort,
}: Props) {
  const SortIcon = ({ field }: { field: any }) => (
    <span className="ml-1 text-gray-400">
      {sortField === field ? (sortDir === "asc" ? "↑" : "↓") : ""}
    </span>
  );

  return (
    <tr className="text-gray-400 text-xs sm:text-sm  border border-border">
      <th className="text-left px-2 py-2 font-normal w-[260px] ">Pair Info</th>

      <th className="w-[110px]"></th>

      <th
        onClick={() => onSort("marketCap")}
        className="cursor-pointer px-2 py-2 font-normal text-left w-[130px]"
      >
        Market Cap{" "}
        {sortField === "marketCap" && (sortDir === "asc" ? "↑" : "↓")}
      </th>

      <th
        onClick={() => onSort("liquidity")}
        className="cursor-pointer px-2 py-2 font-normal text-left w-[130px]"
      >
        Liquidity {sortField === "liquidity" && (sortDir === "asc" ? "↑" : "↓")}
      </th>

      <th
        onClick={() => onSort("volume")}
        className="cursor-pointer px-2 py-2 font-normal text-left w-[130px]"
      >
        Volume {sortField === "volume" && (sortDir === "asc" ? "↑" : "↓")}
      </th>

      <th
        onClick={() => onSort("txns")}
        className="cursor-pointer px-2 py-2 font-normal text-left w-[90px]"
      >
        TXNS {sortField === "txns" && (sortDir === "asc" ? "↑" : "↓")}
      </th>

      <th
        onClick={() => onSort("priceChange")}
        className="cursor-pointer px-2 py-2 font-normal text-left w-[150px]"
      >
        Token Info{" "}
        {sortField === "priceChange" && (sortDir === "asc" ? "↑" : "↓")}
      </th>

      <th className="text-right px-2 py-2 font-normal w-[100px]">Action</th>
    </tr>
  );
});

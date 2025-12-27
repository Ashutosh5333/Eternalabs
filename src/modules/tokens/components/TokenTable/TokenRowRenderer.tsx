import TokenSparkline from "../TokenSparkline";
import { Token } from "../../types/token";
import Button from "@/shared/components/Button";
import TokenInfoCell from "../TokenInfoCell";
import PairCell from "../cells/PairCell";
import { cn } from "../../utils/cn";

export function renderTokenCell(key: string, data: Token) {
  const up = data.priceChange >= 0;

  switch (key) {
    case "pair":
      return <PairCell data={data} />;

    case "spark":
      return data.sparkline ? (
        <TokenSparkline points={data.sparkline} up={up} />
      ) : (
        <div className="w-20 h-6" />
      );

    case "market":
      return (
        <div className="flex flex-col font-medium">
          <span className="text-white/90 text-[11px] sm:text-[13px]">
            ${(data.marketCap / 1000).toFixed(1)}K
          </span>

          <span
            className={cn(
              "flex items-center gap-1 text-[11px] sm:text-[13px]",
              up ? "text-green-400" : "text-red-400",
              data.__flash === "up" && "animate-flashUp",
              data.__flash === "down" && "animate-flashDown"
            )}
          >
            {up ? "▲" : "▼"} {Math.abs(data.priceChange).toFixed(2)}%
          </span>
        </div>
      );

    case "liquidity":
      return (
        <span className="text-white/90 text-[13px] font-medium">
          ${(data.liquidity / 1000).toFixed(1)}K
        </span>
      );

    case "volume":
      return (
        <span
          className={cn(
            "text-white/90 text-[13px] font-medium",
            data.__flash === "up" && "animate-flashUp",
            data.__flash === "down" && "animate-flashDown"
          )}
        >
          ${(data.volume / 1000).toFixed(1)}K
        </span>
      );

    case "txns":
      return (
        <div className="flex flex-col leading-tight">
          <span
            className={cn(
              "text-white/90 font-medium text-[11px] sm:text-[13px]",
              data.__flash === "up" && "animate-flashUp",
              data.__flash === "down" && "animate-flashDown"
            )}
          >
            {data.txnsBuy + data.txnsSell}
          </span>

          <span className="text-[9px] sm:text-[11px]">
            <span className="text-green-400 mr-1">{data.txnsBuy}</span> /
            <span className="text-red-400 ml-1">{data.txnsSell}</span>
          </span>
        </div>
      );

    case "tokenInfo":
      return <TokenInfoCell data={data} />;

    case "action":
      return <Button>Buy</Button>;

    default:
      return null;
  }
}

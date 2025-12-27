"use client";
import Image from "next/image";
import {
  Users,
  Globe,
  Eye,
  Search,
  TrendingUp,
  TrendingDown,
  Activity,
} from "lucide-react";
import Tooltip from "@/shared/ui/Tooltip";
import HoverCard from "@/shared/ui/HoverCard";
import { Token } from "../../types/token";

export default function PairCell({ data }: { data: Token }) {
  const BadgeIcon =
    data.priceChange > 10 ? (
      <TrendingUp size={9} className="text-green-400" />
    ) : data.priceChange < -10 ? (
      <TrendingDown size={9} className="text-red-400" />
    ) : (
      <Activity size={9} className="text-yellow-400" />
    );

  return (
    <div className="flex items-center gap-2 sm:gap-3 md:gap-4 min-w-0">
      <HoverCard
        trigger={
          <div
            className={`
              relative shrink-0 rounded-lg p-[2px]
              sm:p-[3px] md:p-[4px]
              ${
                data.priceChange > 10 &&
                "bg-[#2AFF6A]/50 shadow-[0_0_10px_#2AFF6A60]"
              }
              ${
                data.priceChange < -10 &&
                "bg-[#FF4D6D]/50 shadow-[0_0_10px_#FF4D6D60]"
              }
              ${
                data.priceChange <= 10 &&
                data.priceChange >= -10 &&
                "bg-[#FFD058]/40 shadow-[0_0_10px_#FFD05860]"
              }
            `}
          >
            <Image
              src={data.icon}
              alt={data.name}
              width={38}
              height={38}
              className="
                rounded-lg border border-white/10 object-cover
                sm:w-[46px] sm:h-[46px]
                md:w-[54px] md:h-[54px]
              "
            />

            <div
              className="
                absolute -bottom-[3px] -right-[3px]
                w-[11px] h-[11px]
                sm:w-[13px] sm:h-[13px]
                md:w-[15px] md:h-[15px]
                rounded-full bg-[#1C1F2B]
                border border-white/20 flex items-center justify-center
              "
            >
              {BadgeIcon}
            </div>
          </div>
        }
      >
        {/* ================= Hover Popup ================= */}
        <div className="p-3 sm:p-4 md:p-5 w-[180px] sm:w-[220px] md:w-[260px]">
          <img
            src={data.icon}
            className="
              rounded-lg mb-2
              w-[70px] h-[70px]
              sm:w-[95px] sm:h-[95px]
              md:w-[120px] md:h-[120px]
              object-cover border border-white/10
              mx-auto
            "
          />

          <div className="flex justify-between mb-1 text-xs sm:text-sm">
            <span className="font-semibold truncate">{data.name}</span>
            <span className="text-gray-400">{data.symbol}</span>
          </div>

          <p className="text-[10px] sm:text-xs text-gray-400">
            Business on Blockchain
          </p>

          <div className="mt-2 text-[10px] sm:text-xs text-gray-400">
            Joined {data.age} ago
          </div>

          <button
            className="
              mt-2 w-full text-[10px] sm:text-sm
              bg-[#1d9bf0] hover:bg-[#1888d4]
              rounded-lg py-1 transition
            "
          >
            View Profile
          </button>
        </div>
      </HoverCard>

      {/* ================= RIGHT TEXT ================= */}
      <div className="flex flex-col min-w-0">
        {/* NAME */}
        <div className="flex items-center gap-1 sm:gap-1.5 min-w-0">
          <span
            className="
              font-medium truncate text-white/90
              text-[10px] sm:text-[12px] md:text-[13px]
              max-w-[90px] sm:max-w-[130px] md:max-w-[160px]
            "
          >
            {data.name}
          </span>

          <span
            className="
              text-white/55
              text-[9px] sm:text-[11px] md:text-[12px]
            "
          >
            {data.symbol}
          </span>

          <span
            className="
              w-3 h-3 sm:w-4 sm:h-4
              rounded-full bg-[#2B2B36]
              text-[8px] sm:text-[9px]
              text-white/70 flex items-center justify-center
            "
          >
            ✔
          </span>
        </div>

        {/* META */}
        <div
          className="
            flex items-center gap-2 sm:gap-3 text-white/45
            text-[9px] sm:text-[10px] md:text-[11px]
          "
        >
          <span className="text-green-600">{data.age}</span>

          <div className="flex items-center gap-1.5 sm:gap-2">
            <Tooltip text="Community">
              <Users size={12} className="text-blue-400" />
            </Tooltip>

            <Tooltip text="Official Website">
              <Globe size={12} />
            </Tooltip>

            <Tooltip text="Explorer">
              <Search size={12} />
            </Tooltip>

            <Tooltip text="People watching">
              <span className="flex items-center gap-1">
                <Eye size={12} />
                {Math.floor(Math.random() * 400)}
              </span>
            </Tooltip>
          </div>
        </div>
      </div>
    </div>
  );
}
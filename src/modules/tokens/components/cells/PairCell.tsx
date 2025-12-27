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
      <TrendingUp size={10} className="text-green-400" />
    ) : data.priceChange < -10 ? (
      <TrendingDown size={10} className="text-red-400" />
    ) : (
      <Activity size={10} className="text-yellow-400" />
    );

  return (
    <div className="flex items-center gap-2.5 min-w-0">

      {/* =============== IMAGE + HOVERCARD =============== */}
      <HoverCard
        trigger={
          <div
            className={`
              relative shrink-0 rounded-lg p-[2px] animate-axiomGlow
              ${
                data.priceChange > 10 &&
                "bg-[#2AFF6A]/50 shadow-[0_0_14px_#2AFF6A90]"
              }
              ${
                data.priceChange < -10 &&
                "bg-[#FF4D6D]/50 shadow-[0_0_14px_#FF4D6D90]"
              }
              ${
                data.priceChange <= 10 &&
                data.priceChange >= -10 &&
                "bg-[#FFD058]/40 shadow-[0_0_14px_#FFD05890]"
              }
            `}
          >
            <Image
              src={data.icon}
              alt={data.name}
              width={60}
              height={60}
              className="
                rounded-lg border border-white/10 object-cover
                sm:w-[50px] sm:h-[50px]
                max-sm:w-[38px] max-sm:h-[38px]
              "
            />

            <div
              className="
                absolute -bottom-[4px] -right-[4px]
                w-[16px] h-[16px]
                max-sm:w-[12px] max-sm:h-[12px]
                rounded-full bg-[#1C1F2B]
                border border-white/20 flex items-center justify-center
              "
            >
              {BadgeIcon}
            </div>
          </div>
        }
      >
        {/* Hover popup */}
        <div className="p-3">
          <img src={data.icon} className="w-full rounded-lg mb-2" />

          <div className="flex justify-between mb-1">
            <span className="font-semibold">{data.name}</span>
            <span className="text-xs text-gray-400">{data.symbol}</span>
          </div>

          <p className="text-xs text-gray-400">Business on Blockchain</p>

          <div className="mt-2 text-xs text-gray-400">
            Joined {data.age} ago
          </div>

          <button
            className="mt-2 w-full text-sm bg-[#1d9bf0] hover:bg-[#1888d4]
              rounded-lg py-1 transition"
          >
            View Profile
          </button>
        </div>
      </HoverCard>

      {/* =============== RIGHT TEXT STACK =============== */}
      <div className="flex flex-col min-w-0">

        {/* NAME AREA */}
        <div className="flex items-center gap-1.5 min-w-0">
          <span className="
            font-medium truncate text-white/90
            text-[13px]
            sm:text-[12px]
            max-sm:text-[10px]
            max-w-[160px]
            max-sm:max-w-[90px]
          ">
            {data.name}
          </span>

          <span className="
            text-white/55
            text-[12px]
            sm:text-[11px]
            max-sm:text-[9px]
          ">
            {data.symbol}
          </span>

          <span
            className="
              w-4 h-4
              max-sm:w-3 max-sm:h-3
              rounded-full bg-[#2B2B36] text-[9px]
              text-white/70 flex items-center justify-center
            "
          >
            ✔
          </span>
        </div>

        {/* META INFO */}
        <div className="
          flex items-center gap-3 text-white/45
          text-[11px]
          sm:text-[10px]
          max-sm:text-[9px]
        ">
          <span className="text-green-600">{data.age}</span>

          <div className="flex items-center gap-2">

            <Tooltip text="Community">
              <Users size={14} className="text-blue-400 max-sm:w-3 max-sm:h-3" />
            </Tooltip>

            <Tooltip text="Official Website">
              <Globe size={14} className="text-white max-sm:w-3 max-sm:h-3" />
            </Tooltip>

            <Tooltip text="Explorer">
              <Search size={14} className="text-white max-sm:w-3 max-sm:h-3" />
            </Tooltip>

            <Tooltip text="People watching">
              <span className="flex items-center gap-1">
                <Eye size={14} className="text-white max-sm:w-3 max-sm:h-3" />
                {Math.floor(Math.random() * 400)}
              </span>
            </Tooltip>

          </div>
        </div>

      </div>
    </div>
  );
}


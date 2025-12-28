"use client";
import { memo, useMemo } from "react";
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
import dynamic from "next/dynamic";
const Tooltip = dynamic(() => import("@/shared/ui/Tooltip"), { ssr: false });
import HoverCard from "@/shared/ui/HoverCard";
import { Token } from "../../types/token";

function PairCellComponent({ data }: { data: Token }) {
  const BadgeIcon =
    data.priceChange > 10 ? (
      <TrendingUp size={10} className="text-green-400" />
    ) : data.priceChange < -10 ? (
      <TrendingDown size={10} className="text-red-400" />
    ) : (
      <Activity size={10} className="text-yellow-400" />
    );

    const watchers = useMemo(() => Math.floor(Math.random() * 400), []);


  const ImageBlock = (
    <div
      className={`
        relative shrink-0 rounded-lg p-[2px]
        md:animate-axiomGlow
        ${data.priceChange > 10 && "bg-[#2AFF6A]/40 shadow-sm"}
        ${data.priceChange < -10 && "bg-[#FF4D6D]/40 shadow-sm"}
        ${
          data.priceChange <= 10 &&
          data.priceChange >= -10 &&
          "bg-[#FFD058]/30 shadow-sm"
        }
      `}
    >
      <Image
        src={data.icon}
        alt={data.name}
        width={54}
        height={54}
        loading="lazy"
        sizes="(max-width: 640px) 40px, 54px"
        className="
          rounded-lg border border-white/10 object-cover
          sm:w-[44px] sm:h-[44px]
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
  );

  return (
    <div className="flex items-center gap-2.5 min-w-0">
      {/* Desktop hover → HoverCard | Mobile → normal */}
      <div className="hidden sm:block">
      {typeof window !== "undefined" && window.innerWidth > 640 && (
        <HoverCard trigger={ImageBlock}>
          <div className="p-3">
            <Image
              src={data.icon}
              alt={data.name}
              width={300}
              height={300}
              className="w-full rounded-lg mb-2 object-cover"
              loading="lazy"
              priority={false}
            />

            <div className="flex justify-between mb-1">
              <span className="font-semibold">{data.name}</span>
              <span className="text-xs text-gray-400">{data.symbol}</span>
            </div>
            <p className="text-xs text-gray-400">Business on Blockchain</p>
            <div className="mt-2 text-xs text-gray-400">
              Joined {data.age} ago
            </div>
            <button className="mt-2 w-full text-sm bg-[#1d9bf0] hover:bg-[#1888d4] rounded-lg py-1 transition">
              View Profile
            </button>
          </div>
        </HoverCard>
      )}
      </div>

      {/* Mobile → no hover */}
      <div className="sm:hidden">{ImageBlock}</div>

      {/* RIGHT */}
      <div className="flex flex-col min-w-0">
        <div className="flex items-center gap-1.5 min-w-0">
          <span className="font-medium truncate text-white/90 text-[13px] sm:text-[12px] max-sm:text-[10px] max-w-[160px] max-sm:max-w-[90px]">
            {data.name}
          </span>

          <span className="text-white/55 text-[12px] sm:text-[11px] max-sm:text-[9px]">
            {data.symbol}
          </span>

          <span className="w-4 h-4 max-sm:w-3 max-sm:h-3 rounded-full bg-[#2B2B36] text-[9px] text-white/70 flex items-center justify-center">
            ✔
          </span>
        </div>

        <div className="flex items-center gap-3 text-white/45 text-[11px] sm:text-[10px] max-sm:text-[9px]">
          <span className="text-green-600">{data.age}</span>

          <div className="flex items-center gap-2">
            <Tooltip text="Community">
              <Users
                size={14}
                className="text-blue-400 max-sm:w-3 max-sm:h-3"
              />
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
                {watchers}
              </span>
            </Tooltip>
          </div>
        </div>
      </div>
    </div>
  );
}

export default memo(PairCellComponent);

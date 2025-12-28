"use client";
import {
  Users,
  Ghost,
  ChefHat,
  Network,
  Shield,
  CandlestickChart,
} from "lucide-react";
import Tooltip from "@/shared/ui/Tooltip";
import { Token } from "../types/token";

export default function TokenInfoCell({ data }: { data: Token }) {
  return (
    <div
      className="
        w-[130px] sm:w-[140px] max-sm:w-[130px]
        bg-[#0B0E14]
        rounded-md
        px-1 py-1.1
        shadow-[0_15px_35px_rgba(0,0,0,0.9)]
        text-[11px] max-sm:text-[9.5px]
        leading-tight
        shrink-0
        pointer-events-auto
      "
    >
      <div className="grid grid-cols-[1fr_auto] gap-x-2">
        {/* LEFT STACK */}

        <div className="flex flex-col gap-1">
          {/* ----- Row 1 ----- */}

          <div className="flex gap-2">
            <ChipRed label="Whale Risk">
              <Users size={11} />
              {Math.abs(data.priceChange).toFixed(2)}%
            </ChipRed>

            <ChipGreen label="Holder Trust">
              <Ghost size={11} />
              {data.tokenInfo.v1}%
            </ChipGreen>
          </div>

          {/* ----- Row 2 ----- */}

          <div className="flex gap-2">
            <ChipGreen label="Liquidity Safety">
              <ChefHat size={11} />
              {data.tokenInfo.v2}%
            </ChipGreen>

            {data.tokenInfo.v3 >= 20 ? (
              <ChipRed label="Bot / High Risk">
                <Network size={11} />
                {data.tokenInfo.v3}%
              </ChipRed>
            ) : (
              <ChipGreen label="Healthy Activity">
                <Network size={11} />
                {data.tokenInfo.v3}%
              </ChipGreen>
            )}
          </div>

          {/* ----- Row 3 ----- */}

          {data.tokenInfo.paid ? (
            <ChipGreen label="Verified Listing">
              <Shield size={11} />
              Paid
            </ChipGreen>
          ) : (
            <ChipRed label="Unverified Listing">
              <Shield size={11} />
              Unpaid
            </ChipRed>
          )}
        </div>



        <div className="flex flex-col gap-1 translate-y-[6px] text-white/85">
          <Stat label="Users Watching">
            <Users size={11} /> {Math.floor(Math.random() * 200) + 20}
          </Stat>

          <Stat label="Trading Activity">
            <CandlestickChart size={11} />{" "}
            {Math.floor(Math.random() * 150) + 20}
          </Stat>
        </div>
      </div>
    </div>
  );
}

function ChipGreen({ label, children }: any) {
  return (
    <Tooltip text={label}>
      <div
        className="
        flex items-center gap-1 px-1 py-[2px] rounded-md
        bg-green-500/10 border border-green-500/40 text-green-400
        shadow-[0_6px_20px_rgba(0,0,0,0.35)]
        max-sm:px-1 max-sm:py-[2px]
      "
      >
        {children}
      </div>
    </Tooltip>
  );
}

function ChipRed({ label, children }: any) {
  return (
    <Tooltip text={label}>
      <div
        className="
        flex items-center gap-1 px-1 py-[2px] rounded-md
        bg-red-500/10 border border-red-500/40 text-red-400
        shadow-[0_6px_20px_rgba(0,0,0,0.35)]
        max-sm:px-1 max-sm:py-[2px]
      "
      >
        {children}
      </div>
    </Tooltip>
  );
}

function Stat({ label, children }: any) {
  return (
    <Tooltip text={label} side="left">
      <div
        className="
        flex items-center gap-1.5 px-1 py-[2px] rounded-md
        bg-white/5 border border-white/15 text-white/85
        shadow-[0_10px_30px_rgba(0,0,0,0.45)]
        max-sm:px-1 max-sm:py-[2px]
      "
      >
        {children}
      </div>
    </Tooltip>
  );
}

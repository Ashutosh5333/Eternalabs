import { Token } from "../types/token";
import { useQuery } from "@tanstack/react-query";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { setTokens } from "../store/tokens.slice";

function generateTokens(): Token[] {
  const count = 15;
  const statuses = ["new", "final", "migrated"];

  const logoMap: Record<string, string> = {
    BTC: "https://assets.coingecko.com/coins/images/1/large/bitcoin.png",
    ETH: "https://assets.coingecko.com/coins/images/279/large/ethereum.png",
    SOL: "https://assets.coingecko.com/coins/images/4128/large/solana.png",
    USDT: "https://assets.coingecko.com/coins/images/325/large/Tether-logo.png",
    DOGE: "https://assets.coingecko.com/coins/images/5/large/dogecoin.png",
  };

  return Array.from({ length: count }).map((_, i) => {
    const up = Math.random() > 0.5;

    const symbol =
      i % 5 === 0
        ? "BTC"
        : i % 5 === 1
        ? "ETH"
        : i % 5 === 2
        ? "SOL"
        : `TK${i + 1}`;

    return {
      id: (i + 1).toString(),
      name: `Token ${i + 1}`,
      symbol,
      age: `${Math.floor(Math.random() * 50) + 3}m`,
      status: statuses[Math.floor(Math.random() * statuses.length)],
      marketCap: Math.floor(Math.random() * 1500000) + 5000,
      liquidity: Math.floor(Math.random() * 900000) + 8000,
      volume: Math.floor(Math.random() * 400000) + 5000,
      txnsBuy: Math.floor(Math.random() * 300),
      txnsSell: Math.floor(Math.random() * 300),
      tokenInfo: {
        v1: Number((Math.random() * 30).toFixed(2)),
        v2: Number((Math.random() * 30).toFixed(2)),
        v3: Number((Math.random() * 30).toFixed(2)),
        paid: Math.random() > 0.5,
      },
      priceChange: up ? Math.random() * 30 : -Math.random() * 30,
      sparkline: Array.from({ length: 20 }).map(() => Math.random() * 10),

      // ✅ Crypto / trading themed icons
      icon:
        logoMap[symbol] ??
        `https://loremflickr.com/64/64/crypto,trading,bitcoin?lock=${i + 1}`,
    };
  });
}

export function useTokenData() {
  const dispatch = useDispatch();

  const query = useQuery<Token[]>({
    queryKey: ["tokens"],
    queryFn: async () => generateTokens(),
  });

  useEffect(() => {
    if (query.data) dispatch(setTokens(query.data));
  }, [query.data, dispatch]);

  return query;
}

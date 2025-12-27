
export interface Token {
  status: string;
  id: string;
  name: string;
  symbol: string;
  age: string;           
  marketCap: number;
  liquidity: number;
  volume: number;
  txnsBuy: number;
  txnsSell: number;
  tokenInfo: {
    v1: number;
    v2: number;
    v3: number;
    paid: boolean;
  };
  priceChange: number;
  sparkline: number[];
  icon: string;
  __flash?: "up" | "down";
}

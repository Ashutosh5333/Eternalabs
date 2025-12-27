import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Token } from "../types/token";
import { smoothTransition } from "../utils/smoothValue";

interface TokensState {
  data: Token[];
}

const initialState: TokensState = {
  data: [],
};

export const tokensSlice = createSlice({
  name: "tokens",
  initialState,
  reducers: {
    setTokens: (state, action: PayloadAction<Token[]>) => {
      state.data = action.payload;
    },

    updateTokenPrice: (
      state,
      action: PayloadAction<{
        id: string;
        priceChange: number;
        volumeDelta?: number;
        txnsBuy?: number;
        txnsSell?: number;
      }>
    ) => {
      const t = state.data.find((x) => x.id === action.payload.id);
      if (!t) return;

      
      t.priceChange = t.priceChange
        ? Number(
            smoothTransition(t.priceChange, action.payload.priceChange).toFixed(
              2
            )
          )
        : action.payload.priceChange;

        
      t.__flash = t.priceChange >= 0 ? "up" : "down";

      
      if (action.payload.volumeDelta)
        t.volume = Math.max(0, t.volume + action.payload.volumeDelta);

      
      t.txnsBuy += action.payload.txnsBuy ?? 0;
      t.txnsSell += action.payload.txnsSell ?? 0;

      
      if (t.sparkline?.length) {
        const last = t.sparkline[t.sparkline.length - 1];
        const next = last + t.priceChange / 50; 

        t.sparkline.push(next);
        if (t.sparkline.length > 20) t.sparkline.shift();
      }
    },
  },
});

export const { setTokens, updateTokenPrice } = tokensSlice.actions;
export default tokensSlice.reducer;

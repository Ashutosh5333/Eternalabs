
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Token } from "../types/token";

interface TokensState {
  data: Token[];
}

const initialState: TokensState = {
  data: []
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
      const t = state.data.find(x => x.id === action.payload.id);
      if (!t) return;

      // ---------- Price ----------
      t.priceChange = action.payload.priceChange;

      // ---------- Volume ----------
      if (action.payload.volumeDelta)
        t.volume = Math.max(0, t.volume + action.payload.volumeDelta);

      // ---------- TXNS ----------
      if (action.payload.txnsBuy)
        t.txnsBuy += action.payload.txnsBuy;

      if (action.payload.txnsSell)
        t.txnsSell += action.payload.txnsSell;

      // ---------- Sparkline (Dex style) ----------
      
      if (t.sparkline?.length) {
        t.sparkline.push(
          t.sparkline[t.sparkline.length - 1] +
            (Math.random() * 2 - 1) // smooth wobble
        );

        if (t.sparkline.length > 20)
          t.sparkline.shift();
      }
    }
  }
});

export const { setTokens, updateTokenPrice } = tokensSlice.actions;
export default tokensSlice.reducer;



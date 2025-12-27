
import { useEffect } from "react";
import { socket } from "@/lib/websocketMock";
import { useDispatch } from "react-redux";
import { updateTokenPrice } from "../store/tokens.slice";

export function useWebsocketPriceStream(tokenIds: string[]) {
  const dispatch = useDispatch();

  useEffect(() => {
    if (!tokenIds?.length) return;

    socket.setTokenIds(tokenIds);

    const unsubscribe = socket.subscribe((data) => {
      dispatch(updateTokenPrice(data));
    });

    return () => unsubscribe();
  }, [tokenIds]);
}

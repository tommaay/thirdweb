import { useConnect } from "@thirdweb-dev/react-core";
import { useCallback } from "react";
import { BloctoAdditionalOptions } from "../../../wallet/wallets/blocto/bloctoWallet";

export function useBloctoWallet() {
  const connect = useConnect();
  return useCallback(
    async (options?: { chainId?: number } & BloctoAdditionalOptions) => {
      const { bloctoWallet } = await import(
        "../../../wallet/wallets/blocto/bloctoWallet"
      );
      return connect(
        bloctoWallet({
          appId: options?.appId,
        }),
        options,
      );
    },
    [connect],
  );
}

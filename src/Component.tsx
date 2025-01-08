import React, { useEffect } from "react";
import { usePrivy, useSolanaWallets } from "@privy-io/react-auth";

function ChildComponent() {
  const { createWallet, wallets, ready } = useSolanaWallets();
  const { authenticated, login, ready: privyReady } = usePrivy();

  useEffect(() => {
    if (authenticated && wallets.length === 0) {
      createWallet();
    }
  }, [authenticated, createWallet, wallets]);

  return (
    <div>
      <button onClick={() => login()}>Login</button>
      <div>useSolanaWallets ready: {ready ? "true" : "false"}</div>
      <div>usePrivy Ready: {privyReady ? "true" : "false"}</div>
      <div>
        wallets:{" "}
        {wallets.length ? wallets.map((wallet) => wallet.address) : "none"}
      </div>
    </div>
  );
}

export default ChildComponent;

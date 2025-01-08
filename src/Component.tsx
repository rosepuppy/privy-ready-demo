import { usePrivy, useSolanaWallets } from "@privy-io/react-auth";
import React from "react";

function ChildComponent() {
  const { ready, wallets } = useSolanaWallets();
  const { login, ready: privyReady } = usePrivy();

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

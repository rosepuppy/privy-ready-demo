import { usePrivy, useSolanaWallets } from "@privy-io/react-auth";
import React from "react";

function ChildComponent() {
  const { ready, wallets } = useSolanaWallets();
  const { login } = usePrivy();

  return (
    <div>
      <button onClick={() => login()}>Login</button>
      <div>ready: {ready ? "true" : "false"}</div>
      <div>
        wallets:{" "}
        {wallets.length ? wallets.map((wallet) => wallet.address) : "none"}
      </div>
    </div>
  );
}

export default ChildComponent;

import React, { useEffect } from "react";
import { usePrivy, useSolanaWallets } from "@privy-io/react-auth";

function ChildComponent() {
  const { createWallet, wallets, ready } = useSolanaWallets();
  const { authenticated, login, ready: privyReady } = usePrivy();

  useEffect(() => {
    console.log("authenticated", authenticated);
    console.log("wallets", wallets);
    console.log("ready", ready);
    console.log("privyReady", privyReady);
    if (authenticated && wallets.length === 0) {
      createWallet().catch((error) => {
        console.error("Error creating wallet", error);
      });
    }
  }, [authenticated, createWallet, wallets, ready]);

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

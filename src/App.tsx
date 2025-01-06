import React from "react";
import "./App.css";
import ChildComponent from "./Component";
import { PrivyProvider } from "@privy-io/react-auth";

function App() {
  return (
    <PrivyProvider
      appId={"cm4h9lfx101219avgt89vri65"}
      config={{
        loginMethods: ["telegram", "twitter"],
        appearance: {
          theme: "light",
          accentColor: "#676FFF",
        },
      }}
    >
      <div className="App">
        <ChildComponent />
      </div>
    </PrivyProvider>
  );
}

export default App;

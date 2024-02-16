import React , {useContext}from "react";
import { userContext } from "./context";

export default function Content() {
  let use = useContext(userContext);

  const contentStyle = {
    backgroundColor: "#ddd",
    textAlign: "center",
    margin: 10,
    padding: 10,
  };
  return (
    <div style={contentStyle}>
      Hello {use}
    </div>
  );
}

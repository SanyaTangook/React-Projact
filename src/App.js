import React from "react";
import { userContext } from "./compoents/context";
import Content2 from "./compoents/context-content2";
import Header2 from "./compoents/context-header2";

function App() {
  let [user, setUser] = React.useState("");
  return (
    <>
      <userContext.Provider value={[user, setUser]}>
        <Header2 />
        <Content2 />
      </userContext.Provider>
    </>
  );
}

export default App;

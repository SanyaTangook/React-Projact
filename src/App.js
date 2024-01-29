import React from "react";
import { userContext } from "./compoents/context";
import Content from "./compoents/context-content";
function App() {
  return (
    <>
      <userContext.Provider value={"Tom Jerry"}>
        <Content />
      </userContext.Provider>
    </>
  );
}

export default App;

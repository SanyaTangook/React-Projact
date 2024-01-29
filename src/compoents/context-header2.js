import React from "react";
import { userContext } from "./context";

export default class Header2 extends React.Component {
  static contextType = userContext;
  render() {
    let [use, setUse] = this.context;
    
    const headerStyle = {
      backgroundColor: "#cee",
      textAlign: "center",
      padding: 5,
    };
    const onClikSignout = (event) => {
      event.preventDefault();
      setUse("");
    };
    const onClikSignin = (event) => {
      event.preventDefault();
      setUse("Tom Jerry");
    };
    return (
      <div style={headerStyle}>
        <a href="#">Home </a> &nbsp; -&nbsp;
        <a href="#">Product </a> &nbsp; -&nbsp;
        <a href="#">Content Us </a> &nbsp; -&nbsp;&nbsp;
        {
        (use) 
        ? 
          <span>
            [{use}&nbsp;:&nbsp;
            <a href="#" onClick={onClikSignout}>SignOut</a>]
            </span>
        : (
          <span>
            [
            <a href="#" onClick={onClikSignin}>SignIn</a>
            ]
          </span>
        )}
      </div>
    )
  }
}


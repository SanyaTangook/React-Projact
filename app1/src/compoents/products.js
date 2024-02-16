import React from "react";
import "./products.css";

export default class Products extends React.Component {
  data = [
    ["Ract", 500],
    ["Ract Native", 650],
    ["Node.js", 450],
    ["MongoDB", 300],
    ["Experss.js", 650],
  ]
  render() {
    return (
      <table border="1">
        <tr>
          <th>ราคา</th>
          <th>ราคา</th>
        </tr>
        {this.data.map((d) => {
          return (
            <tr>
              <td>{d[0]}</td>
              <td>{d[1]}</td>
            </tr>
          );
        })}
      </table>
    );
  }
}

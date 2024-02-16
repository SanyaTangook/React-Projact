import React from "react";
import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";

import "./navlink.css";
import Products from "./products";
import Home from "./home";
import { member } from "./member";

export default function router3() {
  return (
    <BrowserRouter>
      <nav className="nav">
        <NavLink
          to="./"
          className={({ isActive }) => (isActive ? "active_menu" : "menu")}
          style={({ isActive }) => {
            return { fontWeight: isActive ? "bold" : "" };
          }}
        >Home</NavLink>-&nbsp;
        <NavLink
          to="/products"
          className={({ isActive }) => (isActive ? "active_menu" : "menu")}
        >Products</NavLink>-&nbsp;
        <NavLink
          to="/member"
          className={({ isActive }) => (isActive ? "active_menu" : "menu")}
        >
          member
        </NavLink>
        -&nbsp;
        <NavLink
          to="/contact"
          className={({ isActive }) => (isActive ? "active_menu" : "menu")}
        >
          Contact us
        </NavLink>
      </nav>
      <Routes style={{ margin: "20px" }}>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/member" Component={member} />
        <Route
          path="Contact"
          element={<div style={{ textAlign: "center" }}>Contact Page</div>}
        />
        <Route path="/*" element={<h1 style={{ textAlign: "center" }}> Error 404 Not Found </h1>} />
      </Routes>
    </BrowserRouter>
  );
}


import { createElement } from "react";
import HeaderNavbar from "./HeaderNavbar/HeaderNavbar";

import "./Header.css";

const headerButton = createElement("button", null, "Header button");

export default function Header() {
  return (
    <>
      <HeaderNavbar />
      <div className="header-slogan">
        <h1 className="header-title">Site slogan</h1>
        {/* createElement("h1", {className: "header-title"}, "Site slogan") */}
        <h2>Site sub slogan</h2>
        <h3 data-target="sub page">Site sub sub slogan</h3>
        <label htmlFor="user-name">User name</label>
        <input id="user-name" placeholder="Name" />
        {headerButton}
      </div>
    </>
  );
}

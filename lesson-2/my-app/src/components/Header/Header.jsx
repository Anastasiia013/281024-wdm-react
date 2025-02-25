import HeaderNavbar from "./HeaderNavbar/HeaderNavbar";

import "./Header.css";

export default function Header() {
  return (
    <>
      <HeaderNavbar />
      <div className="header-slogan">
        <h1 className="header-title">Site slogan</h1>
        <h2>Site sub slogan</h2>
      </div>
    </>
  );
};



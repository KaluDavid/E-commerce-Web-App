import React from "react";
import img from "./img/logo.png";


export function Header() {
  return (
    <>
      <header>
        <img src={img} alt="" />
        <nav>
          <ul>
            <li>Collections</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </nav>
      </header>
    </>
  );
}

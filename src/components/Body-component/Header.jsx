import React from "react";
import img from "./img/pink_cart-removebg-preview.png";
import "./body-styles/header.scss";

export function Header() {
  return (
    <>
      <header>
        <div>
          <img src={img} alt="E Shop Logo" /> <h1>E - Shop</h1>
        </div>

        <nav>
          <a href="">Collections</a>
          <a href="">About</a>
          <a href="">Contact</a>
        </nav>
      </header>
    </>
  );
}

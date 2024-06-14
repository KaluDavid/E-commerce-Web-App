import React from "react";
import { Price } from "./Price";
import { Ratings } from "./Ratings";
import img1 from "./img/camera.jpg";
import img2 from "./img/headphone 2.jpg";
import "./productStyle/product.scss";

export function Product({ name, price, ratings, img }) {
  return (
    <>
      <section className="product">
        <div className="namePrice">
          {img} <br />
          <br />
          <img src={img1} alt="" />
          {name}
          <Price amount={price} />
        </div>

        <div>
          <Ratings productRates={ratings} />
        </div>
      </section>
    </>
  );
}

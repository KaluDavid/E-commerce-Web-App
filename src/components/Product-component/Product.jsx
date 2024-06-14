import React from "react";
import { Price } from "./Price";
import { Ratings } from "./Ratings";
import img1 from "./img/camera.jpg";
import img2 from "./img/headphone 2.jpg";
import "./productStyle/product.scss";

export function Product({ name, price, ratings }) {
  return (
    <>
      <div>{name}</div>

      <div>
        <Price amount={price} />
      </div>

      <div>
        <Ratings productRates={ratings} />
      </div>
    </>
  );
}

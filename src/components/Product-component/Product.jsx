import React from "react";
import { Price } from "./Price";
import { Ratings } from "./Ratings";
import "./productStyle/product.scss";

export function Product({ name, price, ratings, img }) {
  return (
    <>
      <section className="product">
        <div className="namePrice">
          <img src={img} alt="" />
          <br />

          {name}
          <Price amount={price} />
        </div>

        <div>
          <Ratings ratings={ratings} />
        </div>
      </section>
    </>
  );
}

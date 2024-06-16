import React from "react";
import { Price } from "./Price";
import { Ratings } from "./Ratings";
import "./productStyle/product.scss";
import PropTypes from "prop-types";

export function Product({ name, price, ratings, img }) {
  return (
    <>
      <div className="product-card">
        <img src={img} alt="" />

        <span>{name}</span>

        <Price amount={price} />

        <div>
          <Ratings ratings={ratings} />
        </div>
      </div>
    </>
  );
}

Product.propTypes = {
  name: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
};

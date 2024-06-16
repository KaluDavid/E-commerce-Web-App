import React from "react";
import { Price } from "./Price";
import { Ratings } from "./Ratings";
import "./productStyle/product.scss";
import PropTypes from "prop-types";

export function Product({ name, price, ratings, img }) {
  return (
    <>
      <section className="prod">
        <div className="namePrice">
          <img src={img} alt="" />

          <span>{name}</span>

          <Price amount={price} />

          <em>
            <Ratings ratings={ratings} />
          </em>
        </div>

        <div></div>
      </section>
    </>
  );
}

Product.propTypes = {
  name: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
};

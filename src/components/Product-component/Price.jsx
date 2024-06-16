import React from "react";
import "./productStyle/product.scss";
import PropTypes from "prop-types"

export function Price({ amount }) {
  return (
    <>
      <div className="price"> Prices: {amount}</div>
    </>
  );
}

Price.propTypes ={
  amount: PropTypes.number.isRequired
}

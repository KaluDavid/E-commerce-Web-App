import React from "react";
import { Product } from "./Product";
import ProductContent from "./Product.json";

export function ProductList() {
  return (
    <>
      {ProductContent.map((content) => {
        return <Product key={content.id} content={content} />
      })}
    </>
  );
}

import React from "react";
import { Product } from "./Product";
import ProductContent from "./Product.json";
import { Price } from "./Price";

export function ProductList() {
  return (
    <>
      {ProductContent.map((content) => {
        return (
          <Product
            key={content.id}
            name={content.name}
            price={content.price}
            ratings={content.ratings}
            img={content.img}
          />
        );
      })}
    </>
  );
}

import React from "react";
import { Product } from "./Product";
import { Ratings } from "./Ratings";
import { Price } from "./Price";
import ProductContent from "./Product.json";

export function ProductList() {
  return (
    <>
      {ProductContent.map((content) => {
        if (content.ratings) {
          return <div key={content.id}>{content.name}</div>;
        }
      })}
    </>
  );
}

import React from "react";
import { Product } from "./Product";
import { ProductContent } from "./ProductJson";
import { Price } from "./Price";
import "./productStyle/product.scss";


export function ProductList() {
  return (
    <>
      <div className="product">
        {ProductContent.map((content) => {
          return (
            <Product
              key={content.id}
              name={content.name}
              price={content.price}
              ratings={content.ratings}
              img={content.image}
            />
          );
        })}
      </div>
    </>
  );
}

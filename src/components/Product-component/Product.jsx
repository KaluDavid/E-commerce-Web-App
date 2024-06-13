import React from "react";
import { Price } from "./Price";
import { Ratings } from "./Ratings";

export function Product({ content }) {
  if (!content.ratings) {
    return <Ratings />;
  }
}

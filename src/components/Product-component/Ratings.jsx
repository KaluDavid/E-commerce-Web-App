import React from "react";

export function Ratings({ ratings }) {
  // if (!ratings) {
  //   return null;
  // }

  return ratings
    ? ratings.map((rates, index) => (
        <div key={index}>
          <em>
            <b>Rating: </b>
            {rates.rating} <br />
            <b>Review: </b>
            {rates.review}{" "}
          </em>
        </div>
      ))
    : null;
}

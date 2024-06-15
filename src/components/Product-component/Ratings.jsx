import React from "react";

export function Ratings({ ratings }) {
  if (!ratings) {
    return <div>Loading ratings...</div>;
  }

  return ratings.map((rates) => {
    <div key={rates}>
      <span>My rates {rates} </span>
    </div>;
    console.log(rates);
  });
}

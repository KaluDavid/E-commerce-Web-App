import React from "react";
import PropTypes from "prop-types";

export function Ratings({ ratings }) {
  if (!ratings) {
    return null;
  }

  return (
    <>
      {ratings.map((rates, index) => (
        <div key={index}>
          <em>
            <b>Rating: </b>
            {rates.rating} <br />
            <b>Review: </b>
            {rates.review}
          </em>
        </div>
      ))}
    </>
  );
}

Ratings.propTypes = {
  ratings: PropTypes.arrayOf(
    PropTypes.shape({
      review: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
    })
  ),
};

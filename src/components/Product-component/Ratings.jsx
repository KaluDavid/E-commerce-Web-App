import React from "react";
import PropTypes from "prop-types";

export function Ratings({ ratings }) {
  if (!ratings) {
    return null;
  }

  return (
    <>
      {ratings.map((rates, index) => (
        <div key={index} className="ratings">
          <div>
            <p>Rating: </p>

            <em>{rates.rating}</em>
          </div>
          <div>
            <p>Review: </p>
            <em>{rates.review}</em>
          </div>
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

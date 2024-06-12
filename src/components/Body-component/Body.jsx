import React from "react";
import CoverVideo from "./img/cover video.mp4";
import "./body-styles/body.scss";

export function Main() {
  return (
    <>
      <main>
        <video loop autoPlay muted>
          <source src={CoverVideo} />
          Your browser does not support the video tag.
        </video>
        <div>

        </div>
      
          <h1>
            We Offer <br /> Quality Products 🛍️
          </h1>
        
      </main>
    </>
  );
}

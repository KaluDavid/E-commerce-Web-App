import React from "react";
import CoverVideo from "./img/cover video.mp4";
export function Main() {
  return (
    <>
      <main>
        <video loop autoPlay>
          <source src={CoverVideo} />
          Your browser does not support the video tag.
        </video>
      </main>
    </>
  );
}

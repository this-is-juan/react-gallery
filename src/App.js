import "./styles.css";
import React, { useState } from "react";
import cabbage from "./assets/image1.jpeg";
import mango from "./assets/image2.jpeg";
import fig from "./assets/image3.jpeg";
import gaze from "./assets/image4.jpeg";
import peach from "./assets/image5.jpeg";
import avocado from "./assets/image6.jpeg";

const images = [cabbage, mango, fig, gaze, peach, avocado];

const App = () => {
  const [currentImage, setcurrentImage] = useState(0);

  const handleClick = () => {
    const length = images.length - 1;

    setcurrentImage((currentImage) =>
      currentImage < length ? currentImage + 1 : 0
    );
  };

  return (
    <section>
      <header>
        <h1>Petricor</h1>
        <h2>A photo gallery built on React</h2>
      </header>
      <figure>
        <figcaption>
          {currentImage + 1} / {images.length}
        </figcaption>
        <img alt="" src={images[currentImage]} onClick={handleClick} />
      </figure>
    </section>
  );
};

export default App;

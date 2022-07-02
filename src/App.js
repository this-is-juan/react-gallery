import "./styles.css";
import React from "react";
import cabbage from "./assets/image1.jpeg";
import mango from "./assets/image2.jpeg";
import fig from "./assets/image3.jpeg";
import gaze from "./assets/image4.jpeg";
import peach from "./assets/image5.jpeg";
import avocado from "./assets/image6.jpeg";

const images = [cabbage, mango, fig, gaze, peach, avocado];

const App = () => {
  return (
    <div className="App">
      <div className="title">
        <h1>Petricor</h1>
        <h2>A photo gallery built on React</h2>
      </div>
      <div className="image-gallery">
        <img alt="" src={images[2]} />
      </div>
    </div>
  );
};

export default App;

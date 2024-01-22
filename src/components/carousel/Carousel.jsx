import "./carousel.scss";
import frame1 from "../../assets/frame1.png";
import frame2 from "../../assets/frame2.png";
import frame3 from "../../assets/frame3.png";
import { useState } from "react";

const Carousel = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [frame1, frame2, frame3];

  const changeImage = (index) => {
    setCurrentImage(index);
  };
  return (
    <div className="carousel-container">
      <img src={images[currentImage]} alt={`image ${currentImage + 1}`} />
      <div className="carousel-text">
        <p>Welcome to Agriculture Farm</p>
        <h1>Agriculture & Eco Farming</h1>
        <p>
          There are many of passages of Lorem ipsum, but the major have suffered
          alteration in some form.
        </p>
      </div>
      <div className="carousel-buttons">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => changeImage(index)}
            className={index === currentImage ? "active" : ""}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Carousel;

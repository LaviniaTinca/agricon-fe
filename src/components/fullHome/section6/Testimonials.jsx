import { useState } from "react";
import "./testimonials.scss";
import frame1 from "../../../assets/testimonials/frame1.png";
import frame2 from "../../../assets/testimonials/frame2.png";
import frame3 from "../../../assets/testimonials/frame3.png";
import star from "../../../assets/testimonials/star.png";
import { data } from "../../../utils/data/dummyData";

const Testimonials = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [frame1, frame2, frame3];

  const changeImage = (index) => {
    setCurrentImage(index);
  };

  return (
    <div className="testimonials">
      <img src={images[currentImage]} alt={`image ${currentImage + 1}`} />
      <div className="container">
        <div className="upper-container">
          <div className="carousel-text">
            <h3 id="vertical-text">TESTIMONIALS</h3>
          </div>
          <div className="carousel-details">
            <div className="flex">
              {[...Array(5)].map((_, index) => (
                <img key={index} src={star} alt="star" />
              ))}
            </div>
            <h3>
              This is due to their excellent service, competitive pricing and
              customer support. It’s throughly refresing to get such a personal
              touch. Duis aute lorem ipsum is simply free text irure dolor in
              reprehenderit in esse nulla pariatur.
            </h3>
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
        <div className="bottom-container">
          <div className="image-wrapper">
            {data.map((record, index) => (
              <img
                src={data[index].image}
                key={index}
                onClick={() => changeImage(index)}
                className={index === currentImage ? "active" : ""}
              />
            ))}
          </div>

          <h3>{data[currentImage].name}</h3>
          <p>{data[currentImage].role}</p>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;

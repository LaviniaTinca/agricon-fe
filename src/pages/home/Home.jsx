import "./home.scss";
import stroke from "../../assets/stroke-line.png";
// import strokeOrange1 from "../../assets/stroke-orange1.png";
import box1 from "../../assets/section1-box1.png";
import box2 from "../../assets/section1-box2.png";
import box3 from "../../assets/section1-box3.png";
import Carousel from "../../components/carousel/Carousel";
import stroke2 from "../../assets/stroke2.png";
import section2mill from "../../assets/section2-mill.png";
import s2hicking from "../../assets/s2hicking.png";
import s2leaf from "../../assets/s2leaf.png";
import logoimg from "../../assets/logoimg.png";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="hero-container">
        <div className="component">
          <Carousel />
        </div>
        <img className="component" src={stroke} alt="stroke line" />
      </div>

      {/* section1 */}
      <section className="section1">
        <div className="color">
          <div className="color2">
            {/* <img src={strokeOrange1} alt="stroke line" /> */}
          </div>
          <div className="boxes-container">
            <div className="box">
              <img src={box1} alt="carrot image" />
              <div className="title-box">
                <p>Agriculture Leader</p>
              </div>
            </div>
            <div className="box">
              {" "}
              <img src={box2} alt="sunflower" />
              <div className="title-box">
                <p>Quality Standards</p>
              </div>
            </div>
            <div className="box">
              <img src={box3} alt="tractor" />
              <div className="title-box">
                <p>Organic Seeds</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* section2 */}
      <section className="section2">
        <div className="component body">
          <div className="body-content">
            <img className="left" src={section2mill} alt="mill" />
            <div className="right">
              <div className="logo-text">
                <img src={logoimg} alt="logoimg" />
                <h3>WELCOME TO AGRICON</h3>
              </div>
              <div className="title">
                <h2>Better Agriculture for Better Future</h2>
              </div>
              <p className="p1">
                We have 30 years of agriculture & eco farming experience
                globally
              </p>
              <p className="p2">
                There are many variations of passages of lorem ipsum available
                but the majority have suffered alteration in some form by
                injected humor or random word which do not look even.
              </p>
              <div>
                <hr />
                <div className="types">
                  <div className="types-content">
                    <img src={s2hicking} alt="hicking" />
                    <p>Professional Farmers</p>
                  </div>
                  <div className="types-content">
                    <img src={s2leaf} alt="leaf" />
                    <p>Organic & Eco Solutions</p>
                  </div>
                </div>
                <hr />
              </div>
              <Link to="#">
                <button>Discover More</button>
              </Link>
            </div>
          </div>
        </div>
        <div className="component">
          <img src={stroke2} alt="stroke2" />
        </div>
      </section>
    </>
  );
};

export default Home;

import "./header.scss";
import facebook from "../../assets/facebook.png";
import twitter from "../../assets/twitter.png";
import pinterest from "../../assets/pinterest.png";
import photo from "../../assets/photo.png";
import email from "../../assets/email.png";
import clock from "../../assets/clock.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="header">
        <div className="socials">
          <Link to="https://www.facebook.com/" target="_blank">
            <img src={facebook} alt="facebook icon" />
          </Link>
          <Link to="https://www.twitter.com/" target="_blank">
            <img src={twitter} alt="twitter icon" />
          </Link>
          <Link to="https://www.pinterest.com/" target="_blank">
            <img src={pinterest} alt="pinterest icon" />
          </Link>

          <img src={photo} alt="photo icon" />
        </div>

        <p>Welcome to Agriculture</p>
        <div className="box">
          <img src={email} alt="email icon" />
          <p>needhelp@company.com</p>
        </div>
        <div className="box">
          <img src={clock} alt="clock icon" />
          <p>Mon -Sat 8:00 - 6:30, Sunday - CLOSED</p>
        </div>
      </div>
    </>
  );
};

export default Header;

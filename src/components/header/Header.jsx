import "./header.scss";
import facebook from "../../assets/facebook.svg";
import twitter from "../../assets/twitter.svg";
import pinterest from "../../assets/pinterest.svg";
import linkedin from "../../assets/linkedin.svg";

const Header = () => {
  return (
    <>
      <div className="header">
        <div className="socials">
          <img src={facebook} alt="facebook icon" />
          <img src={twitter} alt="twitter icon" />
          <img src={pinterest} alt="pinterest icon" />
          <img src={linkedin} alt="linkedin icon" />
        </div>
      </div>
    </>
  );
};

export default Header;

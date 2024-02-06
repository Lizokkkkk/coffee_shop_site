import "./about-it.css";
import aboutItImg from "./about-it-img/about-it.jpg";
import beansLogoBlack from "./about-it-img/beansLogoBlack.svg";

const AboutIt = () => {
  return (
    <div className="about-it">
      <img src={aboutItImg} alt="coffee" className="about-it-img" />
      <div className="about-it-info">
        <h1 className="about-it-header">About it</h1>
        <img src={beansLogoBlack} alt="beans" />
        <div className="about-it-text">
          <p className="about-it-country">
            <span>Country: </span> Brasil
          </p>
          <p className="about-it-description">
            <span>Description: </span>Lorem ipsum dolor sit amet, consectetur
            <br />
            adipiscing elit, sed do eiusmod tempor incididunt ut labore <br />
            et dolore magna aliqua. Ut enim ad minim veniam, quis <br />
            nostrud exercitation ullamco laboris nisi ut aliquip ex ea <br />
            commodo consequat.
          </p>
          <p className="about-it-price">
            <span>Price: </span> 16.99$
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutIt;

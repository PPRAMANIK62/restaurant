/* eslint-disable jsx-a11y/anchor-is-valid */
import hero from "../../images/hero.png";
import "./header.css";

function Header() {
  return (
    <section className="home" id="home">
      <div className="home-text">
        <h1>
          Meet, <span>Eat &</span> <p> Enjoy The True </p> Taste
        </h1>
        <a href="#" className="btn">
          Explore Menu<i className="bx bxs-right-arrow"></i>
        </a>
        <a href="#" className="btn2">
          Order Now
        </a>
      </div>

      <div className="home-img">
        <img src={hero} alt="home-img" />
      </div>
    </section>
  );
}

export default Header;

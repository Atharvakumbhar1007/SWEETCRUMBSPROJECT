import "./Hero.css";
import { Link } from "react-router-dom";
import heroImage from "../assets/images/hero.jpg";

function Hero() {
  return (
    <section
      className="hero"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,.5), rgba(0,0,0,.5)), url(${heroImage})`,
      }}
    >
      <div className="hero-content">

        <h1>Welcome to Sweet Crumbs</h1>

        <p>
          Fresh Cakes, Pastries, Breads and Drinks
          made with love every single day.
        </p>

        <Link to="/menu">
          <button className="hero-btn">
            Explore Menu
          </button>
        </Link>

      </div>

    </section>
  );
}

export default Hero;
import "./Hero.css";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="hero">

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
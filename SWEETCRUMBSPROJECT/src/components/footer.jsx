import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">

      <h2>Sweet Crumbs Bakery</h2>

      <p>
        Freshly baked every day with love 
      </p>

      <div className="footer-details">

        <div>
          <h3>Opening Hours</h3>

          <p>Monday - Saturday</p>

          <p>9:00 AM - 8:00 PM</p>
        </div>

        <div>
          <h3>Contact</h3>

          <p>+91 9876543210</p>

          <p>sweetcrumbs@gmail.com</p>
        </div>

      </div>

      <p className="copyright">
        © 2026 Sweet Crumbs. All Rights Reserved.
      </p>

    </footer>
  );
}

export default Footer;
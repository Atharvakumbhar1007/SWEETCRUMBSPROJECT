import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Navbar />

      <h1>Sweet Crumbs Bakery</h1>

      <h3>Freshly baked with love</h3>

      <h2>Featured Items</h2>

      <div>
        <p>Chocolate Cake</p>
        <p>Croissant</p>
        <p>Cold Coffee</p>
      </div>

      <Footer />
    </>
  );
}

export default Home;
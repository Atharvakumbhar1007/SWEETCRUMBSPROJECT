import { useEffect, useState } from "react";
import menuItems from "../data/menuItems";
import MenuCard from "../components/MenuCard";
import CategoryFilter from "../components/CategoryFilter";
import "./Menu.css";

function Menu({ addToOrder }) {

  const [items, setItems] = useState([]);
  const [activeCategory, setActiveCategory] = useState("All");

  useEffect(() => {
    setItems(menuItems);
  }, []);

  const filteredItems =
    activeCategory === "All"
      ? items
      : items.filter(
          (item) => item.category === activeCategory
        );

  return (
    <div className="menu-page">

      <h1>Our Menu</h1>

      <CategoryFilter
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
      />

      <div className="menu-grid">

        {filteredItems.map((item) => (
          <MenuCard
            key={item.id}
            item={item}
            addToOrder={addToOrder}
          />
        ))}

      </div>

    </div>
  );
}

export default Menu;
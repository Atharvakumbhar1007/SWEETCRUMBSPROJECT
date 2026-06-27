import { memo } from "react";
import "./MenuCard.css";

function MenuCard({ item, addToOrder }) {
  return (
    <div className="menu-card">

      <img
        src={item.image}
        alt={item.name}
      />

      <div className="menu-content">

        <h3>{item.name}</h3>

        <p className="category">
          {item.category}
        </p>

        <p className="description">
          {item.description}
        </p>

        <h4>₹ {item.price}</h4>

        <button
          onClick={() => addToOrder(item)}
        >
          Add to Pre-Order
        </button>

      </div>

    </div>
  );
}

export default memo(MenuCard);
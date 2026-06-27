import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Menu from "./pages/Menu";
import PreOrder from "./pages/PreOrder";
import Confirmation from "./pages/Confirmation";

import "./App.css";

function App() {

  const [order, setOrder] = useState([]);
  const [customerName, setCustomerName] = useState("");

  const addToOrder = (item) => {
    const existing = order.find((i) => i.id === item.id);

    if (existing) {
      setOrder(
        order.map((i) =>
          i.id === item.id
            ? { ...i, quantity: i.quantity + 1 }
            : i
        )
      );
    } else {
      setOrder([...order, { ...item, quantity: 1 }]);
    }
  };

  const increaseQty = (id) => {
    setOrder(
      order.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const decreaseQty = (id) => {
    setOrder(
      order
        .map((item) =>
          item.id === id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const clearOrder = () => {
    setOrder([]);
    setCustomerName("");
  };

  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/menu"
          element={<Menu addToOrder={addToOrder} />}
        />

        <Route
          path="/preorder"
          element={
            <PreOrder
              order={order}
              increaseQty={increaseQty}
              decreaseQty={decreaseQty}
              setCustomerName={setCustomerName}
            />
          }
        />

        <Route
          path="/confirmation"
          element={
            <Confirmation
              order={order}
              customerName={customerName}
              clearOrder={clearOrder}
            />
          }
        />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
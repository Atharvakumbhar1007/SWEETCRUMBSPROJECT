import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import OrderSummary from "../components/OrderSummary";
import "./PreOrder.css";

function PreOrder({
  order,
  increaseQty,
  decreaseQty,
  setCustomerName
}) {
  const navigate = useNavigate();

  const nameRef = useRef();

  useEffect(() => {
    nameRef.current.focus();
  }, []);

  const [form, setForm] = useState({
    name: "",
    phone: "",
    pickup: "",
    note: ""
  });

  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      form.name.trim() === "" ||
      form.phone.trim() === ""
    ) {
      setError("Name and Phone are required.");
      return;
    }

    if (order.length === 0) {
      setError("Please add at least one item.");
      return;
    }

    setCustomerName(form.name);

    navigate("/confirmation");
  };

  return (
    <div className="preorder-page">

      <div className="form-section">

        <h1>Pre-Order Form</h1>

        {error && <p className="error">{error}</p>}

        <form onSubmit={handleSubmit}>

          <input
            ref={nameRef}
            type="text"
            placeholder="Name"
            value={form.name}
            onChange={(e) =>
              setForm({
                ...form,
                name: e.target.value
              })
            }
          />

          <input
            type="text"
            placeholder="Phone"
            value={form.phone}
            onChange={(e) =>
              setForm({
                ...form,
                phone: e.target.value
              })
            }
          />

          <input
            type="date"
            value={form.pickup}
            onChange={(e) =>
              setForm({
                ...form,
                pickup: e.target.value
              })
            }
          />

          <textarea
            placeholder="Note"
            value={form.note}
            onChange={(e) =>
              setForm({
                ...form,
                note: e.target.value
              })
            }
          />

          <button type="submit">
            Place Order
          </button>

        </form>

      </div>

      <OrderSummary
        order={order}
        increaseQty={increaseQty}
        decreaseQty={decreaseQty}
      />

    </div>
  );
}

export default PreOrder;
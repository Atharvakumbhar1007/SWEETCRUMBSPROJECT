import { useNavigate } from "react-router-dom";
import "./Confirmation.css";

function Confirmation({
  customerName,
  order,
  clearOrder
}) {

  const navigate = useNavigate();

  const startOver = () => {
    clearOrder();
    navigate("/menu");
  };

  return (

<div className="confirmation">

<h1>
Thank You {customerName}!
</h1>

<p>
Your order has been placed successfully.
</p>

<h2>Order Summary</h2>

<ul>

{
order.map((item)=>(

<li key={item.id}>

{item.name} × {item.quantity}

</li>

))
}

</ul>

<button onClick={startOver}>
Start Over
</button>

</div>

  );
}

export default Confirmation;
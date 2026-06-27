import "./OrderSummary.css";

function OrderSummary({
  order,
  increaseQty,
  decreaseQty
}) {

  const total = order.reduce(
    (sum, item) =>
      sum + item.price * item.quantity,
    0
  );

  return (

<div className="summary">

<h2>Your Order</h2>

{
order.length===0
?

<p>No items added.</p>

:

<>

{
order.map((item)=>(

<div
className="summary-item"
key={item.id}
>

<div>

<h4>{item.name}</h4>

<p>
₹ {item.price}
</p>

</div>

<div className="quantity">

<button
onClick={()=>
decreaseQty(item.id)
}
>
-
</button>

<span>
{item.quantity}
</span>

<button
onClick={()=>
increaseQty(item.id)
}
>
+
</button>

</div>

</div>

))
}

<h3 className="total">

Total : ₹ {total}

</h3>

</>

}

</div>

  );
}

export default OrderSummary;
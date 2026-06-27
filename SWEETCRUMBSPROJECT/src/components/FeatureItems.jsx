import "./FeaturedItems.css";

function FeaturedItems() {

  const items = [

    {
      id:1,
      name:"Chocolate Cake",
      price:650,
      image:"https://images.unsplash.com/photo-1578985545062-69928b1d9587"
    },

    {
      id:2,
      name:"Strawberry Pastry",
      price:120,
      image:"https://images.unsplash.com/photo-1464306076886-da185f6a9d05"
    },

    {
      id:3,
      name:"Garlic Bread",
      price:180,
      image:"https://images.unsplash.com/photo-1509440159596-0249088772ff"
    }

  ];

  return (

<section className="featured">

<h2>Featured Items</h2>

<div className="featured-container">

{
items.map((item)=>(

<div className="featured-card" key={item.id}>

<img src={item.image} alt={item.name}/>

<h3>{item.name}</h3>

<p>₹ {item.price}</p>

</div>

))
}

</div>

</section>

  );
}

export default FeaturedItems;
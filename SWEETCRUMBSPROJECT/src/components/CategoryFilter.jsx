import "./CategoryFilter.css";

function CategoryFilter({ activeCategory, setActiveCategory }) {

  const categories = [
    "All",
    "Cakes",
    "Pastries",
    "Breads",
    "Drinks"
  ];

  return (

<div className="filter-container">

{
categories.map((category)=>(

<button

key={category}

className={
activeCategory===category
? "active"
: ""
}

onClick={()=>
setActiveCategory(category)
}

>

{category}

</button>

))
}

</div>

  );
}

export default CategoryFilter;
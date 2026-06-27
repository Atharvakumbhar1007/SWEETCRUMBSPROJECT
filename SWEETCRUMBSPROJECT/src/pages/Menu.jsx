const [items,setItems] = useState([]);

const [filter,setFilter] = useState("All");

useEffect(()=>{
 setItems(menuItems);
},[]);

const filteredItems =
filter==="All"
? items
: items.filter(
item=>item.category===filter
);

<button onClick={()=>setFilter("All")}>
All
</button>

<button onClick={()=>setFilter("Cakes")}>
Cakes
</button>

<button onClick={()=>setFilter("Pastries")}>
Pastries
</button>

<button onClick={()=>setFilter("Breads")}>
Breads
</button>

<button onClick={()=>setFilter("Drinks")}>
Drinks
</button>
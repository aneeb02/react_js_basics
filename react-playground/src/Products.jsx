import React from "react";
import { useState } from "react";
const products = [
  { title: "Cabbage", id: 1, isFruit: false, color:'green' },
  { title: "Garlic", id: 2, isFruit: false, color:'yellow' },
  { title: "Apple", id: 3, isFruit: true, color:'red' },
];

// const Products = () => {
//   const [count, setCount] = useState(0);

//   function handleClick() {
//     setCount(count + 1);
//   }

//   const listItems = products.map((product) => (
//     <li
//       key={product.id}
//       style={{
//         color: product.isFruit ? "red" : "yellow",
//       }}
//       onClick={handleClick}
//     >
//       {product.title} Clicked {count} times
//     </li>
//   ));
//   return <ul>{listItems}</ul>;
// };

// giving each item its own state

function ProductItem({ product, position, onItemClick }) {
  const [count, setCount] = useState(0);
  
  function handleClick(){
    setCount(count+1);
    onItemClick();
  }
  return (
    <li onClick={handleClick}>
      #{position}: {product.title} clicked {count} times
    </li>
  );
}

function Products() {
  const [clicks, setClicks] = useState(0);
  return (
      <>
        <p>Total Clicks: {clicks}</p>
        <ul>
          {products.map((product, index) => (
            <ProductItem 
              key={product.id} 
              product={product} 
              position={index+1} 
              onItemClick={() => setClicks(clicks+1)} 
            />
          ))}
        </ul>
      </>
  );
}
export default Products;
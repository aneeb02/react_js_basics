import React from "react";
import { useState } from "react";
const products = [
  { title: "Cabbage", id: 1, isFruit: false },
  { title: "Garlic", id: 2, isFruit: false },
  { title: "Apple", id: 3, isFruit: true },
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

function ProductItem({ product }) {
  const [count, setCount] = useState(0);
  return (
    <li onClick={() => setCount(count + 1)}>
      {product.title} clicked {count} times
    </li>
  );
}

function Products() {
  return (
    <ul>
      {products.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </ul>
  );
}

export default Products;
import React from 'react'
import { useState } from 'react';
const products = [
    { title: 'Cabbage', id: 1, isFruit: false },
    { title: 'Garlic', id: 2, isFruit: false },
    { title: 'Apple', id: 3, isFruit: true },
  ];

const Products = () => {

    const [count, setCount] = useState(0);


    function handleClick() {
        setCount(count+1);
    }
  
    const listItems = products.map(product =>
        <li 
            key={product.id}
            style={{
                color: product.isFruit ? 'red': 'yellow'
            }}
            onClick={handleClick}
        >
            {product.title} Clicked {count} times
        </li>
   )
    return (
        <ul>{listItems}</ul>
  )
}




export default Products
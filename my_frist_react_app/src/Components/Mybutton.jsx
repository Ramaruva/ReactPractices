import React, { useState } from 'react'

const Mybutton = () => {
  const [count,setCount] = useState(0);
  const products =[
    { title: 'Cabbage', id: 1 },
    { title: 'Garlic', id: 2 },
    { title: 'Apple', id: 3 },
  ]
  const listItems = products.map(product=>
    <li key={product.id}>
       {product.title}
    </li>
  );
  const handleclick= (e)=>{
     console.log(e)
     setCount(count+1);
  }
  return (
    <>
    hllo
    <ul >{listItems}</ul>
    <button onClick={handleclick}>clicked {count}</button>
    </>
    //sample example here for git 
  )
}

export default Mybutton

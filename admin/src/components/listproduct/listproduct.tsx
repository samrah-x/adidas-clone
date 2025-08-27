import { RxCross2 } from 'react-icons/rx';
import './listproduct.css'
import React, { useEffect, useState } from 'react'

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  tab: string;
  tag: string;
}


const ListProduct = () => {

  const [allProducts, setAllProducts] = useState<Product[]>([]);

  const fetchInfo = async() => {
    await fetch('http://localhost:4000/allproducts')
    .then((res) => res.json())
    .then((data)=>{setAllProducts(data)});
  }

  useEffect(()=>{
    fetchInfo();
  },[])

  const removeProduct = async(id: Number) =>{
    await fetch('http://localhost:4000/removeproduct', {
      method:'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body:JSON.stringify({id:id})
    })
    await fetchInfo();
  }

  return (
    <div className='listproduct'>
        <h1>All Products List</h1>
        <div className="listproduct-format-main">
          <p>Product</p>
          <p>Title</p>
          <p>Price</p>
          <p>Category</p>
          <p>Tab</p>
          <p>Tag</p>
          <p>Remove</p>
        </div>
        <div className="listproducts-allproducts">
          <hr/>
          {allProducts.map((product, index)=>{
            return <div key={index} className="listproduct-format-main listproduct-format">
              <img src={product.image} alt="" className="listproduct-img" />
              <p>{product.name}</p>
              <p>${product.price}</p>
              <p>{product.category}</p>
              <p>{product.tab}</p>
              <p>{product.tag}</p>
              <RxCross2 onClick={()=>removeProduct(product.id)} className="remove" size={24} />
            </div>
          })}
        </div>
    </div>
  )
}

export default ListProduct
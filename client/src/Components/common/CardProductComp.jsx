import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import productsApi from '../../api/modules/products.api';

function CardProductComp() {
  
  let {productId} = useParams();
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const getList = async () => {
      const { response } = await productsApi.getProductById(productId);   
      if (response) setProduct(response);
    };   
    getList();
    
  }, []);
  return (
    <div>
      <img src={product.photoUrl} alt=''/>
      <br></br>
      {product.name}
      <br></br>
      {product.description}
      <br></br>
      {product.name}
      <br></br>
      Stock: {product.stock}
      <br></br>
      Price: {product.price}
      <br></br>
      Discount: {product.discount ? product.discount : 'This product no have discount'}
    </div>
  )
}

export default CardProductComp
import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import ProductComponent from './ProductComponent';
import { setProducts } from '../redux/actions/productActions';

const ProductListing = () => {
  const [loader, setLoader] = useState(true);
    const products = useSelector((state)=>state);
    const dispatch = useDispatch();
    const fetchProducts = async()=>{
      setLoader(true);
      try{
        const response = await axios.get('https://fakestoreapi.com/products');
        if(response.data){
          setLoader(false);
          dispatch(setProducts(response.data));
        }
      }catch(err){
       console.log(err);
      }

    }
    useEffect(()=>{
 fetchProducts();
 console.log(products);
    }, [])
  return (
    <div>
      <ProductComponent 
    loader={loader}  
    />
    </div>
  )
}

export default ProductListing
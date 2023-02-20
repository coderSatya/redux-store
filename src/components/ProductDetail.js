import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { selectedProduct, removeSelectedProduct } from '../redux/actions/productActions';

const ProductDetail = () => {
  const product = useSelector((state)=>state.product);
  const [loader, setLoader] = useState(true);
  const {image, title, price, category, description} = product;
  const {productId} = useParams();
 const dispatch = useDispatch();

  const fetchProductDetail = async()=>{
    setLoader(true);
      try{
        const response = await axios.get(`https://fakestoreapi.com/products/${productId}`);
        if(response.data){
          setLoader(false);
          console.log(response, 'response');
          dispatch(selectedProduct(response.data))
        }   
      }catch(err){
        console.log(err);
      } 
  }
  useEffect(()=>{
     if(productId && productId!==""){
      fetchProductDetail();
     }
     return ()=>{
      dispatch(removeSelectedProduct());
     }
  },[productId]);
  return (
    <div>
       {loader && <div className="spinner-border text-primary loader" role="status"></div>}
      <div className='container'>
        <div className='row'>
          <div className='col'>
          <div className="border">
            <img className='image' src={image} alt="pic"/>
            <h5 className='title'>{title}</h5>
            <h3>{category}</h3>
            <h4>${price}</h4>
            </div>
             
          </div>

        </div>

      </div>
    </div>
  )
}

export default ProductDetail;
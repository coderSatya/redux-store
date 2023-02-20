import React, {useEffect, useState} from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
// import { useHistory } from 'react-router-dom';
import { unstable_HistoryRouter } from 'react-router-dom';
import './Style.css'

const ProductComponent = ({loader}) => {
  // const history = unstable_HistoryRouter ();
     const products = useSelector((state)=>state.allProducts.products)
     console.log(products);
  //   const handleClick = ()=>{
  //  history.push('/');
  //   }
  return (
  <>
  <h1 className='heading'>Mens Store</h1>
  <div className="container">
 {loader && <div className="spinner-border text-primary loader" role="status">
</div>}
{/* <button onClick={handleClick}>Back</button> */}
   <div className="row">
          {products.map((product)=>{
             const {id, title, category, image, price} = product;
           return(
            <div className="col-4">
              <Link to={`/product/${id}`}>
            <div key={id} className="border">
            <img className='image' src={image} alt="pic"/>
            <h5 className='title'>{title}</h5>
            <h3>{category}</h3>
            <h4>${price}</h4>
            </div>
            </Link>
            </div>
           );
          })}
          </div>
          </div>
  </>
  )
}

export default ProductComponent
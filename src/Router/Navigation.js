import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ProductDetail from '../components/ProductDetail';
import ProductListing from '../components/ProductListing';
import Error from '../components/Error';

const Navigation = () => {
  return (
    <div>
        <Routes>
        <Route exact path="/" element={<ProductListing />}/>
        <Route exact path="/product/:productId" element={<ProductDetail />}/>
        <Route path="*" element={Error}/>
        </Routes>
    </div>
  )
}

export default Navigation;
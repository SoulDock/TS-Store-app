import React, { useState } from 'react';
import { useProducts } from './hooks/productsHook';
import {Product} from './components/Product';

// components
import Loader from './components/Loader';
import LoaderError from './components/LoaderError';

import Modal from './components/Modal';
//=

function App() {
  const {loading, products, error} = useProducts();

  return (
    <div className='container mx-auto max-w-2xl pt-5'>
      { loading && <Loader/> }
      { error && <LoaderError error={error}/> }
      { products.map(product => <Product product={product} key={product.id}/>) }
      <Modal/>
    </div>
  );
}

export default App; 
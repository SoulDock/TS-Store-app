import React, { useState } from 'react'
import { IProduct } from '../models'


interface ProductProps {
  product: IProduct
}

export function Product({product} :ProductProps) {
  const [details, setDetails] = useState(false)

  const buttonClassName = details ? 'bg-yellow-400 hover:bg-yellow-500' : 'bg-blue-500 hover:bg-blue-700';
  const buttonClasses = ['text-white font-bold py-2 px-4 rounded mt-2', buttonClassName]

  return (
    <div className='border py-2 px-2 rounded flex flex-col items-center mb-2'>
      <img className='w-1/6' src={product.image} alt={product.title} />
      {product.title}
      <span className='font-bold'>{product.price}</span>
      {details && <div>{product.description}</div>}
      <button className={buttonClasses.join(' ')} 
        onClick={()=> setDetails(prev => !prev)}>
        {details ? 'Hide Details' : 'Show details'}
      </button>
      </div>
  )
}


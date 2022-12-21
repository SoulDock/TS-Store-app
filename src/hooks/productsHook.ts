import React, { useEffect, useState } from 'react';
import axios, { Axios, AxiosError } from 'axios'
import { IProduct } from '../models';

export function useProducts(){
    const [products, setProducts] = useState<IProduct[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('')
    async function fetchProducts() {
        try {
        const response = await axios.get<IProduct[]>('https://fakestoreapi.com/products?limit=5');
        setProducts(response.data)
        setLoading(false)
        } catch (e: unknown) {
        const error = e as AxiosError
        setLoading(false)
        setError(error.message)
        }
    }  
    useEffect(()=>{
        fetchProducts()
    },[])

    return{products, error, loading}
}
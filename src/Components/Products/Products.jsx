import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Product from '../Product/Product';


const Products = () => {
    
    const data = useLoaderData();
    const { category } = useParams()    
    const [products, setProducts] = useState ([])

    useEffect(()=>{
        if(category){
            const filteredByCategory =[...data].filter(
                product=>product.category === category)
            setProducts(filteredByCategory);
        }
        else{
            setProducts(data);
        }
        
    },[category, data]);

    return (
    <>
    <div className='grid grid-cols-1 md:grid-cols-4 gap-4'>
        <div className='col-span-1 flex justify-center md:justify-start'>
            <button>Show All</button>
        </div>

        <div className='col-span-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
            {
                products.map(product=><Product key={product.id} product={product}>

                </Product>)
            }
        </div>
    </div>
    </>
    );
};

export default Products;
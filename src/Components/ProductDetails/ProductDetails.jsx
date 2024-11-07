import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { addToCartList } from '../Utilities';




const ProductDetails = () => {

    const data = useLoaderData();
    const {product_id} = useParams();
    const[productDetail, setProductDetail] = useState({})
    


    useEffect(()=>{
        const singleData = data.find(product => product.product_id === parseInt(product_id))
        setProductDetail(singleData)
        
    },[data, product_id])

    const {product_image,product_title,price,description,specification,availability,rating}
    = productDetail;

    const handleAddToCart = (product_id) =>{
        addToCartList (product_id)
    }
    

    return (
        <>
        <section className='container mx-auto bg-[#9538E2] h-[310px]'>
            <h1 className='text-white text-3xl font-bold text-center py-6'>Product Details</h1>
            <p className='text-white text-center'>Explore the latest gadgets that will take your experience to the next level. From smart <br /> devices to the coolest accessories, we have it all!</p>
        </section>
        <div className='container mx-auto py-10'>
                
                <div className='relative w-full max-w-[500px] h-[200px] 
                md:max-w-[700px] md:h-[300px]
                lg:max-w-[1000px] lg:h-[500px]
                mx-auto -mt-[200px] bg-gray-100 rounded-lg'>

                <div className='container mx-auto'>
                    <div className='flex gap-6'>
                        <img src={product_image} className='w-1/2 py-24 rounded-xl shadow-xl' alt={product_title}></img>
                        <div className='flex-1'>
                            <h2 className='font-bold py-5 text-2xl'>{product_title}</h2>
                            <p className='font-semibold py-2 text-lg'>Price: ${price}</p>
                            <button 
                            className={`btn btn-xs ${availability ? 'bg-lime-300' : 'bg-red-400'}`}>
                                {availability ? 'In Stock' : 'Out Of Stock'}
                            </button>
                            <p className='py-2'>{description}</p>
                            <h2 className='py-2 font-bold'>Specification:<span className='px-2 font-light'>{specification}</span></h2>
                            <h2 className='font-bold py-2 mb-4'>Rating:<span className='px-2 font-light'>{rating}</span></h2>
                            <div className='space-x-4'>
                            <button 
                            onClick={() => handleAddToCart(product_id)}
                             className='btn btn-primary rounded-full'>Add To Cart</button>
                             <button className='btn btn-primary rounded-full'>Wish List</button>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        
        </>
    );
};

export default ProductDetails;
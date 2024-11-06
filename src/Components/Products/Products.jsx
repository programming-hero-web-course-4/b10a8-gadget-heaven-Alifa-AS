import React, { useEffect, useState } from 'react';
import { useLoaderData, useNavigate, useParams } from 'react-router-dom';
import Product from '../Product/Product';


const Products = () => {
    
    const data = useLoaderData();
    const { category } = useParams()    
    const [products, setProducts] = useState ([]);
    const[activeCategory, setActiveCategory] = useState(category || 'All');
    const navigate = useNavigate();
    const [categoryData, setCategoryData] = useState([]);
    
    useEffect(()=>{
        if(category){
            const filteredByCategory =[...data].filter(
                product=>product.category === category)
            setProducts(filteredByCategory);
            setActiveCategory(category);
        }
        else{
            setProducts(data);
            setActiveCategory('All');
            
        }
        
    },[category, data]);

    useEffect(()=>{
        fetch('/categories.json')
        .then(res => res.json())
        .then(data => setCategoryData(data))
    },[])

    const handleCategoryClick = (selectedCategory) => {
        if(selectedCategory === 'All'){
            setProducts(data);
            navigate('/')
        }
        else{
            const filteredProducts = data.filter(product => product.category === selectedCategory)
            setProducts(filteredProducts);
            navigate(`/category/${selectedCategory}`)
        }
        setActiveCategory(selectedCategory);
    };      

    return (
    <>
    <div className='grid grid-cols-1 md:grid-cols-4 gap-4'>
        <div className='col-span-1 flex flex-col justify-center md:justify-start'>
           
            {
                categoryData.map((cat, index) => (
                    <button key={index}
                    className={`btn ${activeCategory === cat.category ? 'btn-primary' : 'btn-outline'}`}
                    onClick={() => handleCategoryClick(cat.category)}>
                        {cat.category}</button>
                ))
            }
        </div>

        <div className='col-span-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
            {
                products.map(product => (
                <Product key={product.product_id} 
                product={product} />
              ))
            }
        </div>
    </div>
    </>
    );
};

export default Products;
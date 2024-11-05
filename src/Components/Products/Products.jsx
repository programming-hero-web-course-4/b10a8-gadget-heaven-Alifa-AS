import React from 'react';
import { useParams } from 'react-router-dom';

const Products = () => {

    const { category } = useParams()
    console.log(category)

    return (
        <div>
            <h2>All Products.....{category}</h2>
        </div>
    );
};

export default Products;
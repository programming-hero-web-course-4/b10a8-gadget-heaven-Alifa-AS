import React from 'react';
import Banner from '../Banner/Banner';
import Statistics from '../Statistics/Statistics';
import Heading from '../Heading/Heading';
import { Outlet, useLoaderData } from 'react-router-dom';
import Categories from '../Categories/Categories';
import Products from '../Products/Products';

const Home = () => {
 
    const categories = useLoaderData();
    console.log(categories)

    return (
        <div>
            <Banner/>
            <Heading title={'Explore Cutting-Edge Gadgets'}  />
            {/* category section */}
            <Categories categories={categories} />
            
            <Outlet />
            <Statistics/>
        </div>
    );
};

export default Home;
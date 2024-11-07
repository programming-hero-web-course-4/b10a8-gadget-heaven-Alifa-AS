import React from 'react';



const Dashboard = () => {


    return (
        <>
        <section className='container mx-auto bg-[#9538E2] h-[250px]'>
            <h1 className='text-white text-3xl font-bold text-center py-10'>Dashboard</h1>
            <p className='text-white text-center'>Explore the latest gadgets that will take your experience to the next level. From smart <br /> devices to the coolest accessories, we have it all!</p>
            <div className='text-center py-5 space-x-4'>
                <button className='btn btn-outline'>Cart</button>
                <button className='btn btn-outline'>Wish</button>
            </div>
        </section>
        <div className='flex justify-between py-10 lg:px-24'>
            <div><h1 className='text-2xl font-semibold'>Cart</h1></div>
            <div className='space-x-4 flex items-center'>
                <h2 className='font-semibold'>Total Cost: </h2>
                <button className='btn'>Short by Price</button>
                <button className='btn'>purchase</button>
            </div>
        </div>
        <div>
            
        </div>
        </>
    );
};

export default Dashboard;
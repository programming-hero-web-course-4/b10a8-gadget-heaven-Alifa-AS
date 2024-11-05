import React from 'react';
import bannerImg from '../../assets/banner.jpg'

const Banner = () => {
    return (
        <div className='container mx-auto'>
                <div className="relative bg-[#9538E2] min-h-[475px] 
                flex flex-col items-center text-center pt-8 px-2">
                
                    <h1 className='text-white text-2xl lg:text-4xl font-bold pb-2'>Upgrade Your Tech Accessorize with
                         <br /> Gadget Heaven Accessories</h1>
                    <p className='text-white py-6 text-sm lg:w-1/2 md:w-2/3 w-3/4'>Explore the latest gadgets that will take your experience to the next level. 
                    From smart devices to the coolest accessories, we have it all!</p>
                    <button className='btn py-2'>Shop Now</button>
                 </div>
                <div className='relative w-full max-w-[500px] h-[200px] 
                md:max-w-[700px] md:h-[300px]
                lg:max-w-[1000px] lg:h-[400px]
                mx-auto -mt-[200px]'>
                    <img className='w-full h-full object-cover rounded-lg border-4 border-white' src={bannerImg} alt="" />
                </div>
            </div>
            
    );
};

export default Banner;

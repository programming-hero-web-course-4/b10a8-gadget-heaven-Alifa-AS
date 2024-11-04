import React from 'react';

const Banner = () => {
    return (
        <div className='container mx-auto'>
                <div className="relative bg-[#9538E2] min-h-[400px] 
                flex flex-col items-center text-center pt-8">
                
                    <h1 className='text-white text-4xl font-bold'>hello</h1>
                    <p className='text-white mt-2'>text</p>
                    <button className='btn mt-4'>click</button>
                 </div>
                <div className='relative w-full max-w-[500px] h-[200px] 
                md:max-w-[700px] md:h-[300px]
                lg:max-w-[1000px] lg:h-[400px]
                mx-auto -mt-[200px]'>
                    <img className='w-full h-full object-cover rounded-lg border-4 border-white' src="/src/assets/banner.jpg" alt="" />
                </div>
            </div>
            
    );
};

export default Banner;

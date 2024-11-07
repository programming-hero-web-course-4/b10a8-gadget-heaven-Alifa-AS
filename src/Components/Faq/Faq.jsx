import React from 'react';

const Faq = () => {
    return (
        <>
          <section className='container mx-auto bg-[#9538E2] h-[250px] mb-12'>
            <h1 className='text-white text-3xl font-bold text-center py-10'>Frequently Asked</h1>
            <p className='text-white text-center'>Explore the latest gadgets that will take your experience to the next level. From smart <br /> devices to the coolest accessories, we have it all!</p>
          </section>

            <div className="collapse collapse-plus bg-base-200">
                <input type="radio" name="my-accordion-3" defaultChecked />
                <div className="collapse-title text-xl font-medium">Why choose us?</div>
                <div className="collapse-content">
                    <p>We provide you the best product with huge discounts.</p>
                </div>
                </div>
                <div className="collapse collapse-plus bg-base-200">
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title text-xl font-medium">Payment options and flexibility</div>
                <div className="collapse-content">
                    <p>You can pay by using bkash, card and Dollar also</p>
                </div>
                </div>
                <div className="collapse collapse-plus bg-base-200">
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title text-xl font-medium">Pricing and discounts</div>
                <div className="collapse-content">
                    <p>10% discount running everyday upto thousand products</p>
                </div>
                </div>
        </>
    );
};

export default Faq;
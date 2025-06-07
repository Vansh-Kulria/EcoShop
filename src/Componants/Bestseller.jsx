import React from 'react'
import './Bestseller.css'

const Bestseller = () => {
    return (
        <div>
            <div className='h-25 flex justify-center items-center'>
                BEST SELLERS
            </div>

            <div>
                <div className='border-top p-15 bg-[#DCFFCC] '>
                <div className='flex flex-wrap justify-center'>
                    <img className='h-3' src="/Ecoshop.png" alt="" />
                </div>

                <div className='flex justify-between'>


                    <div className="bg-[url('/flower.png')] bg-contain bg-no-repeat flex justify-center items-center w-72">

                        <img
                        className='w-50'
                        src="product1.png" alt="" />
                    </div>

                    <div className='flex flex-col gap w-[44%] mr-25'>

                        <div className='productname  text-center '>
                            Saffron Sandal Shine
                        </div>

                        <div className='productdisc text-center'>
                            Refreshing & Skin Brightening Shower Gel With Saffron & Sandal Extract (All Skin Types) - 200ml
                        </div>

                        <div className='productprice'>
                            ₹595 <span className='text-[#46B635]'>(value ₹995)</span>
                        </div>

                        <div className='btn flex gap-4 mt-10'>
                            <button className='bg-[#46B635] text-white rounded-lg text-2xl pl-8 pr-8 '>
                                Add to Cart
                            </button>

                            <button className='bg-white text-[#46B635] 
                            border-2 border-[#46B635]  rounded-lg text-2xl pl-8 pr-8 '>
                                View Product
                            </button>
                        </div>
                    </div>
                </div>

            </div>
            <div className='border-top p-15 bg-[#DCFFCC] '>
                <div className='flex flex-wrap justify-center'>
                    <img className='h-3' src="/Ecoshop.png" alt="" />
                </div>

                <div className='flex justify-between'>


                    <div className="bg-[url('/flower.png')] bg-contain bg-no-repeat flex justify-center items-center w-72">

                        <img
                        className='w-50'
                        src="product2.png" alt="" />
                    </div>

                    <div className='flex flex-col gap w-[44%] mr-30'>

                        <div className='productname  text-center '>
                            Daily Detox the Natural Way
                        </div>

                        <div className='productdisc text-center'>
                            Neem Tablets (60pcs). Good for daily detox.
                        </div>

                        <div className='productprice'>
                            ₹155 <span className='text-[#46B635]'>(value ₹399) </span>
                        </div>

                        <div className='btn flex gap-4 mt-10'>
                            <button className='bg-[#46B635] text-white rounded-lg text-2xl pl-8 pr-8 '>
                                Add to Cart
                            </button>

                            <button className='bg-white text-[#46B635] 
                            border-2 border-[#46B635]  rounded-lg text-2xl pl-8 pr-8 '>
                                View Product
                            </button>
                        </div>
                    </div>
                </div>

            </div>
            </div>
            
        </div>
    )
}

export default Bestseller

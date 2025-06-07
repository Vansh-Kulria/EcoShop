import React from 'react'
import './Navbar.css'


const Navbar = () => {

    return (
        <div className= 'sticky' >
            <div className='flex justify-between '>
                <div className='flex items-center '>
                    <img
                        className='h-30'
                        src="/edad4c9614ba14853cf7aa1274abfea886ced56f.png" alt="" />

                    <img
                        className='h-10'
                        src="/fd97fedb65b4eb5555312943b64391f959c14c34.png" alt="" />
                </div>
                <div className='flex flex-col justify-between'>
                    <div className='flex gap-8 list text-[10px] p-2 '>
                        <div className='flex gap-1'>
                            <span>BODY CARE</span>
                            <img
                                className='h-5'
                                src="/downarrow.png" alt="" />
                        </div>
                        <div className='flex gap-1'>
                            <span>ORGANIC FOOD</span>
                            <img
                                className='h-5'
                                src="/downarrow.png" alt="" />
                        </div>
                        <div className='flex gap-1'>
                            <span>BAMBOO PRODUCTS</span>
                            <img
                                className='h-5'
                                src="/downarrow.png" alt="" />
                        </div>
                        <div className='flex gap-1'>
                            <span>About Us</span>
                            <img
                                className='h-5'
                                src="/downarrow.png" alt="" />

                        </div>
                    </div>


                    <div className='flex gap-4 text-sm justify-end items-end mr-2 mb-2'>

                    <div
                        className='flex gap-2 items-center'>
                        <img
                            className='h-3'
                            src="/category.webp" alt="" />
                        <span>Catogary</span>
                    </div>
                    <div
                        className='flex gap-2 items-center'>
                        <img
                            className='h-3'
                            src="/cart.webp" alt="" />
                        <span>Cart</span>
                    </div>
                    <div
                        className='flex gap-2 items-center'>
                        <img
                            className='h-3'
                            src="/user.webp" alt="" />
                        <span>Account</span>
                            </div>
                    </div>
                </div>

            </div>



        </div>
    )
}

export default Navbar

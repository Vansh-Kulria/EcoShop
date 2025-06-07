import React from 'react'
import './main.css'
const Main = () => {
    return (
        <div>
            <div className="bg-[url('/hero.jpg')] bg-cover bg-center h-110 bg-no-repeat
            flex text-white items-center justify-between p-5">
                <div
                    className='ltext w-[35%]'>

                    Nature’s Pharmacy at Your Doorstep


                </div>


                <div className='flex flex-col gap-5 w-[50%]  items-center'>

                    <div
                        className='rtext '>

                        Embrace a sustainable lifestyle with our eco-friendly herbal products. From biodegradable packaging to responsibly sourced ingredients, we ensure that every step of our process is kind to both you and the planet.

                    </div>

                    <button className= 'shop-btn bg-white text-green-400 rounded-3xl p-2 w-fit hover:bg-gray-100 pr-6 pl-6 '>
                        Shop Now
                    </button>
                </div>


            </div>
        </div>
    )
}

export default Main

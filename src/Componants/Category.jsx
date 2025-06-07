import React from 'react'

const Category = () => {
    return (
        <div>
            <div className='flex justify-center mt-15' >
                <div className='flex items-center w-180 border-2 border-[#46B635] rounded-4xl'>
                    <img className= 'h-9 ml-5' src="/search.png" alt="" />
                    Search For Products...
                </div>
            
            </div>

            <div className='mt-15 text-center'>
                SHOP BY CATEGORY
            </div>

            <div>
                <div>
                    <div>
                        <img src="/Img-1.png" alt="" />
                    </div>

                    <div>
                        <div>
                            BODY CARE
                        </div>

                        <div>
                            Nourish your skin with nature’s finest. Pure, organic ingredients for a radiant you.
                        </div>

                        <button>
                            EXPLORE NOW
                        </button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Category

import React from 'react'

const FeaturedSection = () => {
    return (
        <div className='flex flex-col'>
           
            <div className="w-full lg:w-auto px-[0px] md:px-[48px]">
            <h1 className='text-start font-semibold py-3 text-[23px]'>Featured</h1>
                <img src="/img3.png" alt="banner" className="xl:w-full lg:w-auto object-cover h-full m-auto" />
            </div>
            <div className='w-full py-4 md:py-10'>
                <h1 className='text-center font-bold text-[36px] md:text-[56px] text-[#111111]'>STEP INTO WHAT FEELS GOOD</h1>
                <p className='text-center text-[#111111]'>Cause everyone should know the feeling of running in that perfect pair.</p>
                <div className='flex justify-center mt-5'>
                    <button className='px-[22px] py-[8px] bg-[#111111] text-white rounded-full'>Find Your Shoe</button>
                </div>

            </div>

        </div>
    )
}

export default FeaturedSection
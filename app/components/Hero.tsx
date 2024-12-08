import React from 'react'

const Hero = () => {
  return (
    <div className='flex flex-col'>
      <div className='w-full bg-[#F5F5F5] py-[10px]'>
        <h1 className='text-center font-semibold'>Hello Nike App</h1>
        <p className='text-center'>Download the app to access everything Nike. <span className='font-semibold underline'>Get Your Great</span></p>
      </div>
      <div className="w-full lg:w-auto px-[0px] md:px-[48px]">
        <img src="/img1.png" alt="banner" className="xl:w-full lg:w-auto object-cover h-full m-auto" />
      </div>
      <div className='w-full py-4 md:py-10'>
        <h1 className='text-center font-semibold text-[20px] text-[#111111]'>First Look</h1>
        <h1 className='text-center font-bold text-[36px] md:text-[56px] text-[#111111]'>Nike Air Max Pulse</h1>
        <p className='text-center text-[#111111]'>Extreme comfort. Hyper durable. Max volume. Introducing the Air Max Pulse <br />
          —designed to push you past your limits and help you go to the max.</p>
        <div className='flex justify-center space-x-2 mt-5'>
          <button className='px-[22px] py-[8px] bg-[#111111] text-white rounded-full'>Notify Me</button>
          <button className='px-[22px] py-[8px] bg-[#111111] text-white rounded-full'>Shop Air Max</button>
        </div>

      </div>

    </div>
  )
}

export default Hero
import React from 'react'

const Product2 = () => {
  return (
    <div className='w-[49%] h-[100vh] relative'>
      <div className='w-full h-full bg-orange-400'>
        <img src="" alt="" className='w-full h-full object-cover object-center'/>
      </div>

      <div className='absolute bottom-10 left-10 font-Helvetica text-white'>
        <p>Express Yourself Style</p>
        <h2 className='text-[24px]'>The Spotlisght is all yours</h2>
        <div className='flex gap-x-5 mt-5'>
          <button className='px-5 py-2 bg-white text-black rounded-full'>Shop teh look</button>
          <button className='px-5 py-2 bg-white text-black rounded-full'>Shop teh look</button>
        </div>
      </div>
    </div>
  )
}

export default Product2
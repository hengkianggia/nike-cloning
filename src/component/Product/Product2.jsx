import React from 'react'

const Product2 = ({p,title,button}) => {
  return (
    <div className='w-[49%] h-[120vh] relative'>
      <div className='w-full h-full bg-orange-400'>
        <img src="" alt="" className='w-full h-full object-cover object-center'/>
      </div>

      <div className='absolute bottom-10 left-10 font-Helvetica text-white'>
        <p>{p}</p>
        <h2 className='text-[24px]'>{title}</h2>
        <div className='flex gap-x-5 mt-5'>
          <button className='px-5 py-2 bg-white text-black rounded-full'>{button}</button>
          <button className='px-5 py-2 bg-white text-black rounded-full'></button>
        </div>
      </div>
    </div>
  )
}

export default Product2
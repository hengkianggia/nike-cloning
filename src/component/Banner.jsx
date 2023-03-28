import React from 'react'
import Button from './UI/Button'

const Banner = ({title, desc, button}) => {
  return (
    <div className='w-full px-14 mt-20 grid place-items-start'>
      <div className='font-Helvetica space-y-5 text-white bg-red-400 w-full py-14 px-10'>
        <h1 className='text-[56px] font-bold'>{title}</h1>
        <p>{desc}</p>
        <Button teks={button} className={'bg-white text-black'}/>
      </div>
    </div>
  )
}

export default Banner
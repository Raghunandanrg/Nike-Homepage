import React from 'react'
import { star } from '../assets/icons'

const ReviewCard = ({imgURL,customerName,rating,feedback}) => {
  return (
    <div className='flex justify-center items-center flex-col'>
        <img src={imgURL} alt='customer' className='rounded-full object-cover w-[120px] h-[120px]'/>
        <p className='mt-6 max-w-sm text-center info-text'>{feedback}</p>
        <div className='flex mt-3 justify-center items-center gap-2.5'>
            <img src={star} width={24} height={24} className='object-contain m-0'/>
            <p className='text-xl font-montserrat text-slate-grey '>({rating})</p>
            </div>
            <h3 className=' font-palanquin text-center font-bold text-2xl py-8'>{customerName}</h3>

    </div>
  )
}

export default ReviewCard
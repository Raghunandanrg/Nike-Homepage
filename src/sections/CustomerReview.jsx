import React from 'react'
import { reviews } from '../constants'
import ReviewCard from '../components/ReviewCard'
const CustomerReview = () => {
  return (
    <section className=' max-container '>
      <h3 className=' font-palanquin text-center text-4xl font-bold py-5'>What our customer <span className='text-coral-red'>say? </span></h3>
      <p  className='info-text m-auto mt-4 max-w-lg text-center'>Here what people talk aboout us, The experience and satisfaction😎</p>
      <div className='mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14 '>
    {reviews.map((review)=>(
      <ReviewCard key={review.customerName} {...review} />
    ))}
      </div>
    </section>
  )
}

export default CustomerReview
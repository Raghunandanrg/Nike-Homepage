import React from 'react'
import Button from '../components/Button'
import { offer } from '../assets/images'
import { arrowRight } from '../assets/icons'
const SpecialOffer = () => {
  return (
    <section className='flex juxtify-wrap items-center max-xl:flex-col-reverse gap-10 max-container'>
      <div className='flex-1 '>
        <img src={offer} height={687} width={773} className='object-contain w-full  ' />
      </div>
      <div className='flex flex-1 flex-col '>

        <h2 className='font-palanquin text-4xl capatilize lg:max-w-lg font-bold'>
         Special
          <span className='text-coral-red'> Offer </span>        </h2>
        <p className='mt-4 lg:max-w-lg info-text'>
          Nike Tech has always been engineered to the exact specifications of championship athletes. Now it's time for a new standard of relaxed comfort for a new generation of athlete, banded together to change sport for good by being themselves on and off the clock. This is #NikeTech 😈
        </p>
        <p className='mt-6 lg:max-w-lg info-text'> We are alaways there for your comfort shoes</p>
        <div className='mt-11 flex flex-wrap gap-4'>
          <Button label='Shop now' iconURL={arrowRight} />
          <Button label='Know more' iconURL={arrowRight} />
        </div>
        </div>
    </section>
  )
}

export default SpecialOffer
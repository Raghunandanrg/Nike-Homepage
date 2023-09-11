import React from 'react'
import Button from "../components/Button";
import {shoe8} from "../assets/images";

const SuperQuality = () => {
  return (
    <section id="about-us" className="flex justify-between item-center max-lg:flex-col gap-10 w-full max-container">
      <div className='flex flex-1 flex-col '>

        <h2 className='font-palanquin text-4xl capatilize lg:max-w-lg font-bold'>
          We provide you
          <span className='text-coral-red'> Super </span>
          <span className='text-coral-red '>Quality</span> Shoes
        </h2>
        <p className='mt-4 lg:max-w-lg info-text'>
          Nike Tech has always been engineered to the exact specifications of championship athletes. Now it's time for a new standard of relaxed comfort for a new generation of athlete, banded together to change sport for good by being themselves on and off the clock. This is #NikeTech 😈
        </p>
        <p className='mt-6 lg:max-w-lg info-text'> We are alaways there for your comfort shoes</p>
        <div className='mt-11 '>
          <Button label='View Detailss' />
        </div>
      </div>
      <div className='flex-1 justify-center items-center'>
      <img src={shoe8} width={570} height={522} className='object-container'/>

      </div>
    </section>
  )
}


export default SuperQuality
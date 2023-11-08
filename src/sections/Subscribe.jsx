import React from 'react'
import Button from '../components/Button'
const Subscribe = () => {
  return (
    <section className='max-container flex justify-center items-center max-lg:flex-col gap-10' id='contact-us'>
      <h3 className='text-4xl leading-[68px] lg:max-w-md font-palanquin font-bold'>
        Sign Up for Newsletter and<span className='text-coral-red'> Updates </span>
      </h3>
      <div className='lg:max-w-[40%] w-full flex items-center justify-center gap-5 p-2.5 sm:border sm:border-slate-gray rounded-full'>
        <input type='text' placeholder='subscribeUs@nike.com' className='input '/>
        <div className='flex max-sm:justift-end items-center max-sm:w-full'>
          <Button label="Sign-Up"/>
        </div>
      </div>
    </section>
  )
}

export default Subscribe
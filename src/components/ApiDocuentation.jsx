import React from 'react'

const ApiDocuentation = () => {
  return (
    <section className="w-[95%] h-screen p-6 md:p-10 pt-8 flex flex-col items-start justify-between">
        <h3 className='lg:text-6xl md:text-4xl text-3xl font-millik lg:max-w-[50%]  text-textBlack'>
        Well documented and easy-to-use <span className='text-primaryPink'>APIs</span> for 
        <span className="text-primaryPink">
        developers
        </span>
        </h3>

        <p className='lg:max-w-[50%] font-thin'>
        We have done the core payments integrations and abstractions, 
        so your team can easily integrate with our APIs and access
         multiple payment functionalities.
        </p>

        <ul className='circleList  list-none'>
    <li>Quick transfers</li>
    <li>Initiate one-time and recurring payments</li>
    <li>Payment verification</li>
    <li>Instant virtual cards creation</li>
    <li>Customer verification</li>
</ul>



        <button className="primaryButtonColor md:w-[12rem] w-[9rem] md:h-[4rem] h-[3.5rem]"> 
            Read the Api Docs
        </button>
    </section>
  )
}

export default ApiDocuentation;
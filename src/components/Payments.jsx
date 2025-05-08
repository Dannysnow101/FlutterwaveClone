import React from 'react'
import paymentImage from "/images/checkout.png"


const PaymentsOptions = () => {
    return (
  <div className="w-[95%] h-[screen] flex gap-[5rem] items-center justify-center flex-wrap">

<article className="flex flex-col gap-[1rem]  md:w-[20rem] w-[95%]  justify-center">
    <h2 className='text-4xl'>Online Checkout</h2>
    <p className='font-normal max-w-[90%] ' >Our online checkout features our 
    smart payment ordering system, incredible speed, and beautiful
     simplicity. It's designed to grow your  revenue and provide the best
      payment experience to your customers.</p>
    <button className="primaryButtonColor w-[8rem] h-[3rem]">Get started</button>
</article>



<article className='w-[20rem] overflow-hidden object-cover items-center justify-center shadow-xl'>
    <img src={paymentImage} className='max-w[100%]  object-cover' alt="" />
    </article>

<article className="flex flex-col gap-4  w-[20rem] h-[35rem] justify-center" >
   
   
    <div className="flex flex-col gap-4">
        <h2 className="text-xl  font-bold ">Accept payments</h2>
        <p>Easily receive money from anyone,<br/>
         anywhere in the world via our<br/>
          multitude of secure payment<br/> methods.</p>
        <button className="flex gap-2 text-primaryOrange items-center ">
            <p className='font-semibold' >Learn More</p>
            <svg width="10" height="10" viewBox="0 0 10 15" 
            fill="none" xmlns="http://www.w3.org/2000/svg" 
            className="fill-primaryOrange">
                <path d="M9.692 8.12608L1.74813 14.7865C1.54551 14.9319 1.28487 15.008 1.0183 14.9993C0.751731 14.9907 0.498863 14.8981 0.310228 14.7399C0.121594 14.5817 0.0110864 14.3697 0.000789915 14.1462C-0.00950656 13.9227 0.0811663 13.7042 0.254688 13.5343L7.44653 7.5L0.254688 1.46569C0.0811663 1.2958 -0.00950656 1.07728 0.000789915 0.853776C0.0110864 0.630275 0.121594 0.418262 0.310228 0.260105C0.498863 0.101948 0.751731 0.00929518 1.0183 0.000662293C1.28487 -0.00797059 1.54551 0.068052 1.74813 0.213538L9.692 6.87392C9.88927 7.04031 10 7.26539 10 7.5C10 7.73461 9.88927 7.95969 9.692 8.12608Z">
                </path></svg>
        </button>
    </div>


    <div className="flex flex-col gap-4">
        <h2 className="text-xl  font-bold ">Transfers (Payout)</h2>
        <p>Make single or bulk transfers to<br/>
         bank accounts from your<br/> Flutterwave dashboard.</p>
        
        <button className="flex gap-2 text-primaryOrange  items-center">
            <p className='font-semibold' >Learn More</p>
            <svg width="10" height="10" viewBox="0 0 10 15" 
            fill="none" xmlns="http://www.w3.org/2000/svg" 
            className="fill-primaryOrange">
                <path d="M9.692 8.12608L1.74813 14.7865C1.54551 14.9319 1.28487 15.008 1.0183 14.9993C0.751731 14.9907 0.498863 14.8981 0.310228 14.7399C0.121594 14.5817 0.0110864 14.3697 0.000789915 14.1462C-0.00950656 13.9227 0.0811663 13.7042 0.254688 13.5343L7.44653 7.5L0.254688 1.46569C0.0811663 1.2958 -0.00950656 1.07728 0.000789915 0.853776C0.0110864 0.630275 0.121594 0.418262 0.310228 0.260105C0.498863 0.101948 0.751731 0.00929518 1.0183 0.000662293C1.28487 -0.00797059 1.54551 0.068052 1.74813 0.213538L9.692 6.87392C9.88927 7.04031 10 7.26539 10 7.5C10 7.73461 9.88927 7.95969 9.692 8.12608Z">
                </path></svg>
        </button>
    </div>
</article>
  </div>
    )
  }


const Payments = () => {
  return (
    <section className='w-full pt-8 p-4 md:p-8 relative  mt-0 lg:mt-[55rem] flex flex-col gap-24  justify-center '>


    <h2 className="lg:text-7xl md:text-6xl text-4xl  max-w-[90%] font-millik lg:max-w-[60%]">
    Endless payment possibilities <span className="text-primaryOrange">
    for enterprises
    </span>
    </h2>


    <PaymentsOptions/>
    </section>
  )
}

export default Payments
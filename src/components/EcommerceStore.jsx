import React from 'react'
import storeWomanRight from "/images/storeWoman.webp"
import creatorImage from "/images/creator.webp"





const EcommerceStoreLeft = () => {
    return (
      <article className='flex flex-col gap-2 items-center xl:absolute xl:bottom-[2rem] xl:left-[-5rem]' >
      <img src={creatorImage} alt="creatorImage" />
      <h5 className=' text-1xl'  >
      A platform for you, whether you’re a big business or a <span className='text-primaryGreen'> solo artist.</span>
      </h5>
      </article>
    )
  }

  const EcommerceStoreRight = () => {
    return (
      <div className='flex xl:justify-between items-center relative flex-wrap w-full gap-8 '>


<article className="xl:h-[25rem] gap-4 w-[18rem] mb-0 xl:mb-[25rem] flex flex-col">
<h5 className="text-3xl font-semibold">
Store
</h5>
<p className='
leading-[2rem]
tracking-[0.1rem]'  >
Create a free ecommerce website and start selling worldwide with just a few clicks.
</p>
<button className="primaryButtonColor font-semibold  w-[9rem] h-[3rem]">
Start selling
</button>
</article>


      <div className="flex flex-col gap-6 items-center">
<div className="md:w-[40rem] md:h-[45rem] w-full overflow-hidden flex items-center justify-center object-cover">
<img src={storeWomanRight} className='object-cover' alt="open a store with flutterwave" />
</div>

            <article className="flex flex-col gap-2  xl:w-[20rem] xl:h-[35rem] justify-center" >

   <div className="flex flex-col gap-4">
       <h2 className="text-3xl  font-bold ">Invoices</h2>
       <p>Generate professional invoices for<br/> 
       your customers and get paid from<br/>
        anywhere.</p>
       <button className="flex gap-2 text-primaryOrange items-center ">
           <p className='font-semibold' >Get Started</p>
           <svg width="10" height="10" viewBox="0 0 10 15" 
           fill="none" xmlns="http://www.w3.org/2000/svg" 
           className="fill-primaryOrange">
               <path d="M9.692 8.12608L1.74813 14.7865C1.54551 14.9319 1.28487 15.008 1.0183 14.9993C0.751731 14.9907 0.498863 14.8981 0.310228 14.7399C0.121594 14.5817 0.0110864 14.3697 0.000789915 14.1462C-0.00950656 13.9227 0.0811663 13.7042 0.254688 13.5343L7.44653 7.5L0.254688 1.46569C0.0811663 1.2958 -0.00950656 1.07728 0.000789915 0.853776C0.0110864 0.630275 0.121594 0.418262 0.310228 0.260105C0.498863 0.101948 0.751731 0.00929518 1.0183 0.000662293C1.28487 -0.00797059 1.54551 0.068052 1.74813 0.213538L9.692 6.87392C9.88927 7.04031 10 7.26539 10 7.5C10 7.73461 9.88927 7.95969 9.692 8.12608Z">
               </path></svg>
       </button>
   </div>


   <div className="flex flex-col gap-4">
       <h2 className="text-3xl  font-bold ">Payment links</h2>
       <p>Receive one-off or recurring payments<br/> 
       from anyone, anywhere, via your <br/>
       unique payment link..</p>
       
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


      </div>
    )
  }


const EcommerceStore = () => {
  return (
    <section className='bg-fadedGrey w-full items-center flex flex-col gap-[4rem] p-4 pt-8'>

<h2 className="lg:text-7xl md:text-5xl text-3xl font-millik md:max-w-[50%] self-start">
Endless payment possibilities for every <span className='text-primaryGreen'>
Small Business.
</span>
</h2>

<div className="lg:w-[85%] w-[90%] relative">
<EcommerceStoreRight/>
<EcommerceStoreLeft/>
</div>

<div className="w-[95%] flex flex-col gap-8 items-start justify-center">
<h4 className="lg:text-7xl 
lg:leading-[6rem]
md:leading-[3rem]
md:tracking-[0.1rem]
md:text-4xl
text-2xl
">

Let’s play to our strengths,<br/>
 shall we? You focus on bringing <br/>
your amazing ideas to life and <br/>
we focus on providing all the<br/>
<span className='text-primaryGreen'> commerce tools </span> you need.
</h4>

<button className="primaryButtonColor w-[10rem] h-[4rem]">
    Okay, let's go!
</button>
</div>

    </section>
  )
}

export default EcommerceStore
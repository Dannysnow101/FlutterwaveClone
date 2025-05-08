import React from 'react'
import heroWomanRight from "/images/heroWomanRight.webp"
import heroWomanLeft from "/images/heroWomanLeft.webp"

import piggyvest from "/images/piggyvest.svg"
import mtn from "/images/mtn.svg"
import microsoft from "/images/microsoft.svg"
import chipper from "/images/chipper.svg"
import airPeace from "/images/air-peace.svg"
import uber from "/images/uber.svg"
import wise from "/images/wise.svg"




const HeroText = () =>{
    return (
    <div className="xl:w-[80%] md:w-[95%] w-full px-4  md:p-0   lg:h-screen">
          <article className='flex flex-col lg:gap-8 lg:mt-4 m-0 gap-[1rem]'>

            <h1 className='text-primaryOrange font-millik  max-w-[70%] text-4xl md:text-8xl' >
            Endless possibilities <br/>
            <span className='text-textBlack'> for all</span>
            </h1>
            <p className="lg:text-lg text-sm  lg:max-w-[60%] font-[450] 
            font-Moderat-Bold lg:leading-[2rem] leading-[1rem] lg:w-[70%] w-[100%] lg:tracking-widest text-textBlack">
            Unlocking boundless payment opportunities for enterprises,<br/>
             individuals, small businesses, emerging markets, and startups<br/>
              alike.
            </p>
            <div className="flex md:gap-6  gap-3">
            <button className='primaryButtonColor md:w-[12rem]  md:h-[3.5rem] w-[10rem] h-[3.5rem]'>  Create Free acoount</button>
            <button className='secondaryButtonColor  md:w-[9rem]  md:h-[3.5rem] w-[8rem] h-[3.5rem]' > contact sales </button>
            </div>
        </article>
    </div>

      )
}


const TrustText =() =>{
  
    return(
        <article className='relative w-[95%] flex flex-col h-fit items-start lg:gap-6 gap-4'>
   
    <h4 className='font-semibold text-xl'>
   We are Trusted by <span className="font-bold">1 million+</span> businesses & <span className="font-bold">2 million+</span> individuals
    </h4>


    <div className="flex flex-wrap md:gap-4 gap-2" >
<img className='lg:w-[10rem] w-[5rem]' src={uber} alt="uber image" />
<img className='lg:w-[10rem] w-[5rem]' src={mtn} alt="mtn image" />
<img className='lg:w-[10rem] w-[5rem]' src={chipper} alt="chipper image" />
<img className='lg:w-[10rem] w-[5rem]' src={piggyvest} alt="piggyvest image" />
<img className='lg:w-[10rem] w-[5rem]' src={wise} alt="wise image" />
<img className='lg:w-[10rem] w-[5rem]' src={microsoft} alt="microsoft image" />
<img className='lg:w-[10rem] w-[5rem]' src={airPeace} alt="airPeace image" />
    </div>
</article>
    )
}

const HeroRight = () => {
    return (
      <section className='relative flex items-center flex-col mt-4'>
        
         <figure className='lg:absolute lg:top-[-25rem] lg:right-0 lg:w-[40%] 
         flex items-start justify-end
          w-[95%] relative'>

         <img src={heroWomanRight} alt="heroWomanRight" className='max-w-[100%] object-cover' />
        <figcaption className='absolute bottom-4 left-4' >
        <h5 className='font-Moderat text-textWhite text-2xl shadow-sm' >E25 Dresses</h5>
        </figcaption>
        </figure>


<div className="
lg:w-screen lg:absolute lg:h-screen
h-[20rem] 
         w-[95%] relative 
flex items-center justify-center lg:top-[25rem]">
<TrustText/>

</div>

      </section>
    )
  }
  

  const HeroLeft = () => {
    return (
      <section className='relative 
       w-screen flex flex-col items-center
        justify-center gap-[1.5rem] mt-4' >
         
         <figure className='lg:absolute lg:top-[1rem] lg:w-[55%] object-cover lg:left-0 flex
           flex-col items-center justify-center
         w-[95%] relative  left-0 right-0'>
         <img src={heroWomanLeft} alt="heroWomanLeft" className='max-w-[100%] object-cover' />
        <figcaption className='absolute bottom-4 right-2' >
        <h5 className='font-Moderat text-textWhite text-2xl shadow-sm' >SweetPOD</h5>
        </figcaption>
        </figure>

<div className="
lg:absolute lg:max-w-[50%] 
md:top-[10rem] 
lg:top-[25rem] 
lg:right-0 
top-0
relative 
flex items-center
 max-w-[95%]
justify-center">
<p className='
leading-[1.5rem]
font-normal
lg:max-w-[50%] text-textBlack'>
        Send money home to loved ones, sell 
        online as a small business, process global
         payments as an enterprise, build financial 
         products as a startup. With Flutterwave, 
         the question isn't what's possible—it is:
          what isn't?
        </p>
</div>

      </section>
    )
  }
  


const Hero = () => {
  return (
    <main className='flex flex-col items-center relative w-full justify-start  gap-2 lg:gap-[10rem]' >
        <HeroText/>
        <div className="flex flex-col relative">
        <HeroLeft/>
        <HeroRight/>
        </div>
    </main>
  )
}



export default Hero
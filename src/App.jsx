import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Payments from './components/Payments'
import EcommerceStore from './components/EcommerceStore'
import EndlessPaymentPosibilities from './components/EndlessPaymentPosibilities'
import ApiDocuentation from './components/ApiDocuentation'
import GlobalReach from './components/GlobalReach'

const App = () => {
  return (
<main className="flex flex-col w-screen items-start justify-center pt-4 gap-12">
          <Header/>
          <Hero/>
          <Payments/>
          <EcommerceStore/>
          <EndlessPaymentPosibilities/>
          <ApiDocuentation/>
          <GlobalReach/>
       

<div className="w-full flex items-center justify-center">
<div className="flex flex-col bg-textBlack shadow-3xl gap-8 lg:w-[75%] w-[90%] pt-10 pb-10 pl-8 p-5 rounded-lg mt-[10rem] mb-[10rem]">
  <h4 className="text-4xl  text-textWhite text-semibold font-millik">Ready to get started?</h4>
  <p className="text-normal text-lg text-textWhite   font-Moderat">Create an account and instantly start accepting payments, selling your<br/>
     beautiful products online and building financial tools.</p>

     <button className="flex items-center font-Moderat text-textWhite gap-4">
      <p className="text-normal">Learn More</p>
      <svg width="10" height="10" viewBox="0 0 10 15" 
           fill="none" xmlns="http://www.w3.org/2000/svg" 
           className="fill-textWhite">
               <path d="M9.692 8.12608L1.74813 14.7865C1.54551 14.9319 1.28487 15.008 1.0183 14.9993C0.751731 14.9907 0.498863 14.8981 0.310228 14.7399C0.121594 14.5817 0.0110864 14.3697 0.000789915 14.1462C-0.00950656 13.9227 0.0811663 13.7042 0.254688 13.5343L7.44653 7.5L0.254688 1.46569C0.0811663 1.2958 -0.00950656 1.07728 0.000789915 0.853776C0.0110864 0.630275 0.121594 0.418262 0.310228 0.260105C0.498863 0.101948 0.751731 0.00929518 1.0183 0.000662293C1.28487 -0.00797059 1.54551 0.068052 1.74813 0.213538L9.692 6.87392C9.88927 7.04031 10 7.26539 10 7.5C10 7.73461 9.88927 7.95969 9.692 8.12608Z">
               </path></svg>
     </button>
</div>
</div>



<div className="w-full h-24 bg-textBlack flex items-center justify-center">
  <h5 className="text-2xl text-fadedGrey">You have reached the end 🧍‍♂️</h5>
</div>

</main>

  )
}

export default App
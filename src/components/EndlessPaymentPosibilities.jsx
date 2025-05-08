import React from 'react'

const ArticleCards = () =>{

function moveCards(id, offsetPosition) {
    const element = document.getElementById(id);
    console.log(element,"is moving")
    element.style.left = offsetPosition
}


function resetCards(id, originalPosition) {
    const element = document.getElementById(id);
    console.log(element,"is going back moving")
   
    if (element) {
        element.style.left = originalPosition;
    }
}


    return(

        <div className="flex flex-wrap w-[90%] items-center justify-center gap-[2rem] relative ">
       
           <article
             onMouseOver={() => moveCards("secondArticle", '40%')}  
             onMouseOut={() => resetCards("secondArticle", '30%')}  
           
           id='firstArticle' className="cursor-pointer w-[32rem] rounded-lg lg:absolute left-0 z-10 text-textWhite bg-[#363636] min-h-[18rem] shadow-3xl p-4 pt-10 flex items-start flex-col justify-start gap-4 
           transition-all ease-in-out duration-500">
                <h3 className="md:text-4xl text-2xl font-semibold">Send money to loved ones</h3>
                <p className='font-normal md:text-xl text-sm'>
                Experience the convenience and security of Send, 
                enabling you to effortlessly and securely transfer 
                funds to your beloved ones residing overseas. Begin 
                sharing financial support with the ones who hold
                 significance in your life right <span className="decoration-solid">
                    here
                 </span>
                </p>
            </article>
            <article id='secondArticle' 

            
onMouseOver={() => moveCards("thirdArticle", '75%')}  
onMouseOut={() => resetCards("thirdArticle", '60%')}  
            
            className="cursor-pointer w-[32rem] rounded-lg lg:absolute z-20 left-[30%] text-textWhite bg-[#363636] min-h-[18rem] shadow-3xl p-4 pt-10 flex items-start flex-col justify-start gap-4
            transition-all ease-in-out duration-500">
                <h3 className="md:text-4xl text-2xl font-semibold">Shop online</h3>
                <p>Explore a world of possibilities as you Discover, Shop, and 
                have your purchases conveniently delivered from your 
                cherished online businesses. Embark on a secure shopping 
                journey and relish the joy of acquiring great items from
                amazing small businesses, right <span className="decoration-solid">
                here</span></p>
            </article>
            <article id='thirdArticle'  className="cursor-pointer w-[32rem] rounded-lg lg:absolute left-[60%] z-30 text-textWhite bg-[#363636] min-h-[18rem] shadow-3xl p-4 pt-10 flex items-start flex-col justify-start gap-4
            transition-all ease-in-out duration-500">
                <h3 className="md:text-4xl text-2xl font-semibold">Find events and Buy tickets</h3>
                <p className='font-normal md:text-xl text-sm'>
                Browse upcoming events and secure your ticket on
                 our Afritickets platform <span className="decoration-solid">
                    here
                 </span>
                </p>
            </article>
           </div>

    )
}

const EndlessPaymentPossobilities = () => {
  return (
    <section className='w-full lg:h-[150vh] overflow-hidden bg-bgBlack flex flex-col items-center gap-[4rem] p-4 pt-[5rem]  relative  justify-start'>

        <h3 className='font-millik text-textWhite max-w-[90%] md:text-4xl text-2xl lg:text-7xl text-center lg:max-w-[50%]'>
        Endless payment possibilities for every <span className='text-primaryPink'>
        individual
        </span>
        </h3>

        <h6 className='lg:max-w-[50%] max-w-[95%] text-textWhite md:text-2xl text-lg mb-[8rem] text-center' > 
        Flutterwave offers a host of seamless products for individuals,
         ensuring smooth transactions and efficient money management.
        </h6>

<ArticleCards/>
 
    </section>
  )
}

export default EndlessPaymentPossobilities
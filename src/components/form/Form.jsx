import Image from 'next/image'
import React from 'react'

// ===== Images 
import Review1 from "media/home/review1.png"
import Review2 from "media/home/review2.png"
import Review3 from "media/home/review3.png"
import { Star } from 'heroicons-react'

// Images 
import HandAnimation from "media/animations/hand-animation.gif"

const Form = () => {
    return (
        <>
            <section className={`lg:pt-[70px]`}>
                <div className="px-5 lg:max-w-7xl mx-auto">
                    <div className="form bg-[#F5090B] rounded-xl px-4 md:px-6 py-4">
                        <h2 className='text-[18px] md:text-[25px] font-sans font-bold leading-[25px] md:leading-[60px] text-white'>🔥 Special Offer on Video Animation and So Much More! </h2>
                        <p className='text-[13px] md:text-[16px] lg:text-[18px] font-sans text-white'>🌟 Embrace this juncture and vivify your narrative through impeccable craftsmanship, alongside an all-inclusive suite of <br /> video animation and 3D animation services.</p>
                        <form action="javascript:;" className='pt-5'>
                            <div className="lg:flex flex-wrap lg:justify-center items-center gap-3">
                                <div className="name">
                                    <input type="text" placeholder='Name' className='bg-white shadow-sm shadow-white rounded-[5px] h-[45px] text-center font-sans w-full lg:w-[285px] focus:outline-none text-black mb-[15px] lg:mb-0' />
                                </div>
                                <div className="phone-number">
                                    <input type="number" placeholder='Phone Number' className='bg-white shadow-sm shadow-white rounded-[5px] h-[45px] text-center font-sans w-full lg:w-[285px] focus:outline-none text-black mb-[15px] lg:mb-0' />
                                </div>
                                <div className="email">
                                    <input type="email" placeholder='Email' className='bg-white shadow-sm shadow-white rounded-[5px] h-[45px] text-center font-sans w-full lg:w-[285px] focus:outline-none text-black mb-[15px] lg:mb-0' />
                                </div>
                                <button className='w-full lg:w-[285px] h-[45px] bg-gradient-to-r from-[#363636] to-[#000000] poppins rounded-[5px] font-semibold text-white relative'>
                                    <Image src={HandAnimation} alt='Cloud Studios Inc' className='absolute top-[-104px] left-0 right-0 mx-auto lg:block hidden' />
                                    <span>Claim</span>
                                </button>
                            </div>
                        </form>
                    </div>
                    <div className="flex flex-wrap gap-6 lg:gap-0 justify-center items-center lg:justify-between py-[30px] md:py-[60px] px-[50px]">
                        <div className='flex items-center gap-x-4'>
                            <div className="img">
                                <Image src={Review1} alt='Review' />
                            </div>
                            <div className="txt">
                                <div className="review flex items-center justify-center gap-x-1 pb-[2px]">
                                    <Star className='text-[16px] w-[24px] h-[24px] text-[#FFD62B]' />
                                    <Star className='text-[16px] w-[24px] h-[24px] text-[#FFD62B]' />
                                    <Star className='text-[16px] w-[24px] h-[24px] text-[#FFD62B]' />
                                    <Star className='text-[16px] w-[24px] h-[24px] text-[#FFD62B]' />
                                    <Star className='text-[16px] w-[24px] h-[24px] text-[#FFD62B]' />
                                </div>
                                <p className='text-black text-[10px] xl:text-[14px] poppins text-center leading-[14px] xl:leading-[18px]'><strong> 4.8 out of 5</strong> (review rating) <br />
                                    Over 1,200+ reviews</p>
                            </div>
                        </div>
                        <div className='flex  items-center gap-x-4'>
                            <div className="img">
                                <Image src={Review2} alt='Review' />
                            </div>
                            <div className="txt">
                                <p className='text-black text-[10px] xl:text-[14px] poppins font-semibold leading-[14px] xl:leading-[18px] pb-2'>HIGH PERFORMER</p>
                                <p className='text-black text-[10px] xl:text-[14px] poppins font-semibold leading-[14px] xl:leading-[18px]'>Top Video Making Company</p>
                            </div>
                        </div>
                        <div className='flex items-center gap-x-4'>
                            <div className="img">
                                <Image src={Review3} alt='Review' />
                            </div>
                            <div className="txt">
                                <p className='text-black text-[10px] xl:text-[14px] poppins font-semibold leading-[14px] xl:leading-[18px] pb-2'>IN TOP 3 BEST RATED</p>
                                <p className='text-black text-[10px] xl:text-[14px] poppins font-semibold leading-[14px] xl:leading-[18px]'>Video Making & Editing Company</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Form

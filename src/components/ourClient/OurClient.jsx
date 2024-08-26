"use client"

import React from 'react'
import Image from 'next/image'
import { Star } from 'heroicons-react';

//   Import Slick Slider
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// // ===== Images
import ClientImage from "media/home/client.png"
import Client1 from "media/home/client1.png"
import Client2 from "media/home/client2.png"

const OurClient = () => {

    // Slider Start
    const ClientSlider = {
        dots: false,
        arrows: true,
        infinite: false,
        autoplay: false,
        autoplaySpeed: 5000,
        speed: 3000,
        slidesToShow: 1.3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    arrows: false,
                }
            },
            {
                breakpoint: 567,
                settings: {
                    slidesToShow: 1,
                    arrows: false,
                }
            }
        ]
    };

    return (
        <>
            <section className="py-[30px] md:py-[70px] bg-[#FF2D4B] relative sm:before:absolute sm:before:content-[''] sm:before:h-full sm:before:w-[111px] 3xl:before:w-[145px] sm:before:right-0 sm:before:top-0 lg:before:bg-[#ff2d4c73] sm:before:z-50 lg:h-full">
                <div className="px-5 lg:max-w-7xl mx-auto">
                    <div className="grid grid-cols-12 items-center">
                        <div className="col-span-12">
                            <h2 className='text-[30px] sm:text-[45px] md:text-[50px] leading-tight font-bold font-sans text-center text-white mb-3'>See What the People Are Saying About Us!</h2>
                            <p className='text-[13px] lg:text-[16px] leading-[21px] font-sans text-center text-white mx-auto mb-10'>he power of video – unleashed!</p>
                        </div>
                        <div className="col-span-4 lg:col-span-8">
                            <Image src={ClientImage} alt='Clients' className='mt-[-57px] lg:mt-0 lg:mb-[-70px] lg:block hidden' />
                        </div>
                        <div className="col-span-12 lg:col-span-4">
                            <Slider {...ClientSlider} className='clientSlider lg:w-7/12 xl:w-5/12 bottom-[7%] md:bottom-[33%] lg:bottom-[19%] right-0 mt-[25px] lg:mt-0'>
                                <div className="slide px-4 lg:px-12">
                                    <div className="client">
                                        <Image src={Client1} width={69} height={69} alt='Clients' />
                                        <h3 className='text-[20px] md:text-[30px] text-white font-bold poppins'>Navarro</h3>
                                    </div>
                                    <div className="reviews flex items-center gap-x-1">
                                        <Star className='text-[15px] text-[#EE8526] w-[20px] h-[20px]' />
                                        <Star className='text-[15px] text-[#EE8526] w-[20px] h-[20px]' />
                                        <Star className='text-[15px] text-[#EE8526] w-[20px] h-[20px]' />
                                        <Star className='text-[15px] text-[#EE8526] w-[20px] h-[20px]' />
                                        <Star className='text-[15px] text-[#EE8526] w-[20px] h-[20px]' />
                                    </div>
                                    <p className='text-[13px] lg:text-[16px] text-white font-sans leading-tight lg:leading-[30px] pt-2'>OMG, Explainer Videos LLC is fire! 🔥 They get our vibe and make videos that are so lit, they're practically viral already. My friends are obsessed with the explainer video they made for our brand. It's like, the coolest thing ever.</p>
                                </div>
                                <div className="slide px-4 lg:px-12">
                                    <div className="client">
                                        <Image src={Client2} width={69} height={69} alt='Clients' />
                                        <h3 className='text-[20px] md:text-[30px] text-white font-bold poppins'>Mitchell</h3>
                                    </div>
                                    <div className="reviews flex items-center gap-x-1">
                                        <Star className='text-[15px] text-[#EE8526] w-[20px] h-[20px]' />
                                        <Star className='text-[15px] text-[#EE8526] w-[20px] h-[20px]' />
                                        <Star className='text-[15px] text-[#EE8526] w-[20px] h-[20px]' />
                                        <Star className='text-[15px] text-[#EE8526] w-[20px] h-[20px]' />
                                        <Star className='text-[15px] text-[#EE8526] w-[20px] h-[20px]' />
                                    </div>
                                    <p className='text-[13px] lg:text-[16px] text-white font-sans leading-tight lg:leading-[30px] pt-2'>Explainer Videos LLC is a breath of fresh air! They're creative, collaborative, and understand how to connect with our target audience. We were blown away by their attention to detail and their ability to translate our brand's message into a visually compelling story.</p>
                                </div>
                                <div className="slide px-4 lg:px-12">
                                    <div className="client">
                                        <Image src={Client1} width={69} height={69} alt='Clients' />
                                        <h3 className='text-[20px] md:text-[30px] text-white font-bold poppins'>Hank</h3>
                                    </div>
                                    <div className="reviews flex items-center gap-x-1">
                                        <Star className='text-[15px] text-[#EE8526] w-[20px] h-[20px]' />
                                        <Star className='text-[15px] text-[#EE8526] w-[20px] h-[20px]' />
                                        <Star className='text-[15px] text-[#EE8526] w-[20px] h-[20px]' />
                                        <Star className='text-[15px] text-[#EE8526] w-[20px] h-[20px]' />
                                        <Star className='text-[15px] text-[#EE8526] w-[20px] h-[20px]' />
                                    </div>
                                    <p className='text-[13px] lg:text-[16px] text-white font-sans leading-tight lg:leading-[30px] pt-2'>Explainer Videos LLC is a smart choice for any brand looking to make a lasting impression. They're professional, reliable, and deliver high-quality results. We were impressed by their ability to simplify complex concepts and make them engaging for a broad audience.</p>
                                </div>
                                <div className="slide px-4 lg:px-12">
                                    <div className="client">
                                        <Image src={Client1} width={69} height={69} alt='Clients' />
                                        <h3 className='text-[20px] md:text-[30px] text-white font-bold poppins'>Rose</h3>
                                    </div>
                                    <div className="reviews flex items-center gap-x-1">
                                        <Star className='text-[15px] text-[#EE8526] w-[20px] h-[20px]' />
                                        <Star className='text-[15px] text-[#EE8526] w-[20px] h-[20px]' />
                                        <Star className='text-[15px] text-[#EE8526] w-[20px] h-[20px]' />
                                        <Star className='text-[15px] text-[#EE8526] w-[20px] h-[20px]' />
                                        <Star className='text-[15px] text-[#EE8526] w-[20px] h-[20px]' />
                                    </div>
                                    <p className='text-[13px] lg:text-[16px] text-white font-sans leading-tight lg:leading-[30px] pt-2'>Explainer Videos LLC is a refreshing change from those flashy, over-the-top agencies. They're straightforward, professional, and get the job done right. We were pleased with the clarity and effectiveness of their explainer videos. They helped us communicate our message in a way that resonated with our audience.</p>
                                </div>
                                <div className="slide px-4 lg:px-12">
                                    <div className="client">
                                        <Image src={Client1} width={69} height={69} alt='Clients' />
                                        <h3 className='text-[20px] md:text-[30px] text-white font-bold poppins'>Nance </h3>
                                    </div>
                                    <div className="reviews flex items-center gap-x-1">
                                        <Star className='text-[15px] text-[#EE8526] w-[20px] h-[20px]' />
                                        <Star className='text-[15px] text-[#EE8526] w-[20px] h-[20px]' />
                                        <Star className='text-[15px] text-[#EE8526] w-[20px] h-[20px]' />
                                        <Star className='text-[15px] text-[#EE8526] w-[20px] h-[20px]' />
                                        <Star className='text-[15px] text-[#EE8526] w-[20px] h-[20px]' />
                                    </div>
                                    <p className='text-[13px] lg:text-[16px] text-white font-sans leading-tight lg:leading-[30px] pt-2'>Explainer Videos LLC is a game-changer for our industry. Their understanding of our target market and their ability to create engaging content that drives results is unparalleled. We've seen a significant increase in engagement and conversions since partnering with Explainer Videos LLC.</p>
                                </div>
                                <div className="slide px-4 lg:px-12">
                                    <div className="client">
                                        <Image src={Client1} width={69} height={69} alt='Clients' />
                                        <h3 className='text-[20px] md:text-[30px] text-white font-bold poppins'>Jonah </h3>
                                    </div>
                                    <div className="reviews flex items-center gap-x-1">
                                        <Star className='text-[15px] text-[#EE8526] w-[20px] h-[20px]' />
                                        <Star className='text-[15px] text-[#EE8526] w-[20px] h-[20px]' />
                                        <Star className='text-[15px] text-[#EE8526] w-[20px] h-[20px]' />
                                        <Star className='text-[15px] text-[#EE8526] w-[20px] h-[20px]' />
                                        <Star className='text-[15px] text-[#EE8526] w-[20px] h-[20px]' />
                                    </div>
                                    <p className='text-[13px] lg:text-[16px] text-white font-sans leading-tight lg:leading-[30px] pt-2'>Explainer Videos LLC is the coolest video production company ever. They're totally on point with the latest trends and know how to make a statement. Their work is so creative and innovative, it's like they're from another planet. We're obsessed.</p>
                                </div>
                            </Slider>
                        </div>
                    </div>
                </div>
            </section >
        </>
    )
}

export default OurClient

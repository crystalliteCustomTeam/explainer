import React from 'react'
import { Star } from 'heroicons-react'
import Image from 'next/image';

// ====== Images 
import PartiOne from "media/home/banner1.png"
import PartiTwo from "media/home/banner2.png"
import PartiThree from "media/home/banner-3.png"
import PartiFour from "media/home/banner-4.png"

// ===== Video 
const banVideo = [
    [
        "https://player.vimeo.com/progressive_redirect/playback/913401765/rendition/1080p/file.mp4?loc=external&log_user=0&signature=e204ee64eae124e8132a001ea8e6081354f808be093857e5fde05c5b63cacc96",
    ]
];

const Banner = () => {
    return (
        <>
            <section className='py-[30px] md:py-[70px] relative'>
                <Image src={PartiTwo} alt='Particle' height={625} width={517} className='animation absolute 3xl:right-[137px] right-0 bottom-[-38px] 3xl:bottom-[-20px] 3xl:w-3/12 w-4/12 lg:block hidden' />
                <Image src={PartiFour} alt='Particle' className=' absolute right-0 bottom-[-45%] lg:bottom-0 w-[9%] lg:block hidden' />
                <div className="px-5 lg:max-w-7xl mx-auto relative">
                    <Image src={PartiOne} alt='Particle One' className='animationUpDown absolute left-[40px] bottom-[-70px] w-[23%] z-20 lg:block hidden' />
                    <div className="flex items-center justify-center" data-aos="zoom-in" data-wow-duration="3s">
                        <div className="reviews flex items-center justify-center gap-x-1">
                            <Star className='text-[#FFD62B] text-[22px] w-[22px] h-[22px]' />
                            <Star className='text-[#FFD62B] text-[22px] w-[22px] h-[22px]' />
                            <Star className='text-[#FFD62B] text-[22px] w-[22px] h-[22px]' />
                            <Star className='text-[#FFD62B] text-[22px] w-[22px] h-[22px]' />
                            <Star className='text-[#FFD62B] text-[22px] w-[22px] h-[22px]' />
                        </div>
                        <div className="content">
                            <p className='text-[13px] sm:text-[16px] text-black font-sans ms-2'><strong>4.8 out of 5</strong> (review rating) Over 1,200+ reviews</p>
                        </div>
                    </div>
                    <h1 className='text-[30px] sm:text-[35px] lg:text-[45px] font-bold text-black font-sans text-center leading-[35px] sm:leading-[45px] lg:leading-[55px] pt-2 md:pt-4 pb-2 md:pb-5' data-aos="fade-up" data-wow-duration="3s">Boost Sales with 3D Animation Services. <br className='md:block hidden' />
                        Instantaneously Forge Explainer Videos!</h1>
                    <p className='text-center text-[13px] sm:text-[16px] font-sans text-black leading-[19px] pb-6' data-aos="fade-up" data-wow-duration="3s">Our repertoire spans the spectrum from 2D animation services to 3D animation services, with the timeless allure<br /> of whiteboard animation bringing your visions to life.</p>
                    <div className="video w-full lg:w-6/12 mx-auto">
                        {banVideo.map((item, index) => (
                            <div key={index}>
                                <video className={`rounded-2xl shadow-2xl w-full h-full`} loop={true} muted="muted" autoPlay={true} src={item}></video>
                            </div>
                        ))}
                    </div>
                </div>
                <Image src={PartiThree} alt='Particle' className='absolute left-0 bottom-[-28%] lg:bottom-[-11%] w-[7%] lg:block hidden' />
            </section>
        </>
    )
}

export default Banner

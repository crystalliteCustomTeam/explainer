import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Assisted = () => {
    const banVideo = [
        [
            "https://player.vimeo.com/progressive_redirect/playback/913404582/rendition/720p/file.mp4?loc=external&log_user=0&signature=fb7ea9f370c1d99717d02f8e809c585e0668181fdd1411f3d4322da785685a8a",
        ]
    ];
    return (
        <>
            <section className='bg-[#00C6F9] py-[30px] md:py-[70px] relative'>
                <div className="px-5 lg:max-w-7xl mx-auto">
                    <div className="grid grid-cols-12">
                        <div className="col-span-12 lg:col-span-7">
                            <div className="lg:py-[70px] xl:py-[120px] relative z-50">
                                <h2 className='text-[25px] sm:text-[40px] lg:text-[50px] leading-tight md:leading-[40px] lg:leading-[55px] font-bold font-sans mb-3 text-white'>Our Video Animation Services Are Unlike Any Other!</h2>
                                <p className='text-[13px] sm:text-[16px] font-sans leading-[20px] mb-3 text-white'>At Cloud Studios Inc, our adept animators specializing in video production have played a pivotal role in propelling numerous multinational firms to success. As a vanguard in the dominion of animated explainer video production, we distinguish ourselves by crafting animated videos of superior quality that engage and astonish your audience. Our team at Cloud Studios Inc is propelled by a zealous commitment to forging not only exceptionally creative but also intellectually invigorating custom explainer videos, thereby ensuring your enterprise is thrust into the limelight it rightfully commands.</p>
                                <p className='text-[13px] sm:text-[16px] font-sans leading-[20px] mb-3 text-white'>In the art of distilling complex meanings and concepts into accessible clarity, our animated video production epitomizes the pinnacle of expertise and capability. Our animation firm, fortified with an experienced cadre of experts in the domains of 3D, 2D, and whiteboard video animation, caters to a worldwide clientele. We masterfully integrate avant-garde methodologies to produce visually striking videos. Spanning the spectrum from whiteboard animation to 2D and 3D animation services.</p>

                                <div className="btn mt-8">
                                    <Link href="javascript:;" class="text-[16px] font-semibold leading-[25px] text-white bg-[#FF2D4B] dropShadow rounded-[5px] w-full sm:w-[320px] h-[44px] poppins flex items-center justify-center" >Make an Animation</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-12 lg:col-span-5">
                            {banVideo.map((item, index) => (
                                <div key={index}>
                                    <video className='lg:absolute right-0 h-full top-0' loop={true} muted="muted" autoPlay src={item}></video>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Assisted

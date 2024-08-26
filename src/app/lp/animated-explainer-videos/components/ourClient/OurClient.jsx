"use client"
import React, { useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link';
// Import Slick Slider
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// Fancybox
import { Fancybox as NativeFancybox } from "@fancyapps/ui"
import "@fancyapps/ui/dist/fancybox/fancybox.css"
// Images
import PlayIcon from "media/infinity-studio-lp-2/play.png"
import AwardBg from "media/infinity-studio-lp-2/awardwinning-bg.png"
import googleReview from "media/explainer-videos/googleReview.PNG"
import clutchReview from "media/explainer-videos/clutchReview.PNG"
import review from "media/explainer-videos/review.png"
import icon2 from "media/infinity-studio-lp-new/stars.png";
import client1 from "media/test/client1.png";
import client2 from "media/test/client2.png";
import client3 from "media/test/client3.png";
import client4 from "media/test/client4.png";
import client5 from "media/test/client5.png";
import client6 from "media/test/client6.png";
import client7 from "media/test/client7.png";

const OurClient = () => {
    const testiContentNew2 = [
        {
            stars: icon2,
            name: 'Syvlvia David',
            badges: googleReview,
            para: `It was a fantastic experience. Their team was attentive and professional and the 3D video they created has become an enviable part of our event planning business, helping us stand out from the competition.`,
            video: "https://player.vimeo.com/progressive_redirect/playback/950045737/rendition/1080p/file.mp4?loc=external&log_user=0&signature=85c3341b0d68f65b218956e9081d46bef4408f2e74e83148f4d3a83e34b79daf",
            thumbnail: client1.src,
        },
        {
            stars: icon2,
            name: 'Emily Margolis',
            badges: clutchReview,
            para: `We recently just finished our first animation video with Explainer Videos LLC and we have nothing but great things to say about this company. They were excellent in communication and responded to all our queries. Their project manager Phil Johnson kept us updated with the progress. We received a top-quality animated video within the deadline. `,
            video: "https://player.vimeo.com/progressive_redirect/playback/950045464/rendition/720p/file.mp4?loc=external&log_user=0&signature=06fddc742a45b3eff983a4e5a207a5ff2d1ae71a328b1c14056b1bcc152a9800",
            thumbnail: client2.src,
        },
        {
            stars: icon2,
            name: 'Helen Brooks',
            badges: review,
            para: `I had a 60-second corporate 2D animated video created by Explainer Videos LLC. Their attention to detail and the quality of work was exceptional. The video effectively communicated our message. Chris and his team made the whole process quick and easy for me. `,
            video: "https://player.vimeo.com/progressive_redirect/playback/950045568/rendition/1080p/file.mp4?loc=external&log_user=0&signature=6ed32074656bcaa25e810119398883ade800b3fd2c5eed96b1eff541e57f5bca",
            thumbnail: client4.src,
        },
        {
            stars: icon2,
            name: 'Edd Lockwood',
            badges: googleReview,
            para: `Working with Explainer Videos LLC is awesome. They understood my idea and delivered an exceptional series of animated videos for my campaign. I got favorable comments from a lot of people about the work they delivered. Appreciate their quick response time and quality work.`,
            video: "https://player.vimeo.com/progressive_redirect/playback/950045397/rendition/1080p/file.mp4?loc=external&log_user=0&signature=5eb15a8721a49d21ead978545b43276c59608470ad55c3677e62e1fe88d8edfc",
            thumbnail: client5.src,
        },
        {
            stars: icon2,
            name: 'Matt Evans',
            badges: clutchReview,
            para: `Their team delivered a fantastic 2D animated video well before the deadline. Highly recommend working with them on animated videos.`,
            video: "https://player.vimeo.com/progressive_redirect/playback/950045706/rendition/1080p/file.mp4?loc=external&log_user=0&signature=2b0144629d6bc9649580afa809527d09e6528f656a1c76a1b59408367879c24e",
            thumbnail: client6.src,
        },
        {
            stars: icon2,
            name: 'Mathew',
            badges: review,
            para: `I needed an animated video about a mobile and Chris and his team delivered an informative and engaging video. Their team accommodated all my concerns and delivered it within the deadline.`,
            video: "https://player.vimeo.com/progressive_redirect/playback/950045615/rendition/720p/file.mp4?loc=external&log_user=0&signature=8256b0e38317771b8db2d8959dc6d54ee41dd6c7a847875437dde63ea45333f2",
            thumbnail: client7.src,
        },
        {
            stars: icon2,
            name: 'Gary Wilson',
            badges: googleReview,
            para: `I worked with Phil and his team and all I have to say is that the visuals they created were stunning. Their professionalism and expertise really made it a stress-free experience. `,
            video: "https://player.vimeo.com/progressive_redirect/playback/950045528/rendition/720p/file.mp4?loc=external&log_user=0&signature=88472fd594409a630523ae139ad0cb0c10556198290ca3f6e4e79c61eec6e8ff",
            thumbnail: client3.src,
        },
    ]
    const clientReadSlider = {
        dots: false,
        arrows: true,
        infinite: false,
        autoplay: true,
        autoplaySpeed: 2500,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1099,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    };
    // ======== FancyBox
    function Fancybox(props) {
        const containerRef = useRef(null);
        useEffect(() => {
            const container = containerRef.current;
            const delegate = props.delegate || "[datafancybox]";
            const options = props.options || {};
            NativeFancybox.bind(container, delegate, options);
            return () => {
                NativeFancybox.unbind(container);
                NativeFancybox.close();
            };
        }, [props.delegate, props.options]);
        return <div ref={containerRef}>{props.children}</div>;
    }
    // video code start
    const handleVideoPlay = (e) => {
        const video = e.currentTarget.querySelector('video');
        video.play();
    };
    const handleVideoPause = (e) => {
        const video = e.currentTarget.querySelector('video');
        video.pause();
    };
    return (
        <section className='pt-[50px] lg:py-[90px] bg-white relative'>
            <Image src={AwardBg} alt='Inifnity Animation' fill={true} className='z-[1] object-cover object-center' />
            <div className="px-5 lg:max-w-7xl mx-auto">
                <div className="grid grid-cols-12 items-center relative z-10">
                    <div className="col-span-12 sm:col-span-6 lg:col-span-4">
                        <h2 className='text-black poppins text-[25px] md:text-[30px] xl:text-[35px] font-semibold leading-[35px] md:leading-[45px] lg:leading-[50px] text-center sm:text-left mb-5 sm:mb-2'>Let’s Hear What <span className='text-[#F5090B]'>Our Clients</span> Have To Say</h2>
                    </div>
                    <div className="hidden lg:block lg:col-span-3"></div>
                    <div className="col-span-12 sm:col-span-6 lg:col-span-5">
                        <div className="flex items-center justify-between sm:justify-end gap-x-4 lg:gap-x-12 border-b-[3px] border-[#DFDFDF] pb-3">
                            <div className="w-[20%] sm:w-[30%] relative lg:after:content-[''] lg:after:absolute lg:after:top-0 lg:after:right-[-27px] lg:after:h-full lg:after:w-[3px] lg:after:bg-[#DFDFDF]">
                                <Image src={googleReview} alt='Explainer Videos LLC' />
                            </div>
                            <div className="w-[20%] sm:w-[30%] relative lg:after:content-[''] lg:after:absolute lg:after:top-0 lg:after:right-[-27px] lg:after:h-full lg:after:w-[3px] lg:after:bg-[#DFDFDF]">
                                <Image src={clutchReview} alt='Explainer Videos LLC' />
                            </div>
                            <div className='w-[20%] sm:w-[30%]'>
                                <Image src={review} alt='Explainer Videos LLC' />
                            </div>
                        </div>
                        <p className='text-black text-[14px] xl:text-[17px] leading-[25px] lg:leading-[27px] text-center italic poppins pt-2'>"See what our clients say about our exceptional service!"</p>
                    </div>
                </div>
                <div className="grid grid-cols-12 items-center relative z-10">
                    <div className="col-span-12 ">
                        <Slider {...clientReadSlider} className='clientReadSliderlp w-full h-full absolute bottom-[-10px] lg:bottom-[-85px] pt-16'>
                            {testiContentNew2.map((testimonial, index) => (
                                <div className="px-1 sm:px-4" key={index}>
                                    <Fancybox options={{ Carousel: { infinite: false } }} >
                                        <div className='grid grid-cols-12 gap-y-10 gap-x-1 md:gap-x-4 items-center lg:mb-[70px]'>
                                            <div className="col-span-12 lg:col-span-5">
                                                <div className=' box-testi '>
                                                    <div className=' flex justify-center items-center  overlay-div-testi'>
                                                        <Image
                                                            src={testimonial.thumbnail}
                                                            alt="Explainer Videos LLC"
                                                            className='rounded-[30px]'
                                                            width={1521} height={954} />
                                                        <div className="overlay-testi rounded-[30px] w-[100px] sm:w-[150px] h-ful">
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-span-12 lg:col-span-7">
                                                <div className='pe-[15px]'>
                                                    <div className="client ms-[15px]">
                                                        <div className="flex items-center justify-end gap-x-5">
                                                            <Image src={testimonial.badges} alt="Explainer Videos LLC" className='w-[20%]' />
                                                        </div>
                                                        <div className="mt-3 lg:mt-5">
                                                            <p className="text-black text-[11px] sm:text-[13px] xl:text-[15px] leading-[24px] xl:leading-[30px] lg:w-11/12 ml-auto poppins mb-0 lg:mb-10 text-right">
                                                                {testimonial.para}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Fancybox>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default OurClient

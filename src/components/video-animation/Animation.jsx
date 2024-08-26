"use client"
import React, { useEffect, useRef } from 'react'
import Image from 'next/image';
import Link from 'next/link';
//=====
import { Fancybox as NativeFancybox } from "@fancyapps/ui"
import "@fancyapps/ui/dist/fancybox/fancybox.css"
//===== Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { register } from "swiper/element/bundle";
// ==== Import Css
import styles from "./Animation.module.css"
// ==== Images Start
import Slide1 from "media/explainer-videos/animate1.png"
import Slide2 from "media/explainer-videos/animate2.png"
import Slide3 from "media/explainer-videos/animate3.jpg"
import Slide4 from "media/explainer-videos/animate4.jpg"
import Slide5 from "media/explainer-videos/animate5.jpg"
import Slide6 from "media/thumbnails/whiteboard/img01.jpg"
import Slide7 from "media/thumbnails/motion-graphics/img03.jpg"
import Arrow from "media/explainer-videos/slide-arrow.png"
import VideoIco from "media/play2.png"

const Animation = () => {
    const swiperRef = useRef(null);
    useEffect(() => {
        register();
        const params = {
            grabCursor: true,
            centeredSlides: true,
            loop: true,
            slidesPerView: typeof window !== 'undefined' && window.innerWidth >= 767 ? "2" : "1",
            navigation: true,
            autoHeight: true,
            coverflowEffect: {
                rotate: -20,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: false,
            },
            injectStyles: [
                `
                .swiper-3d .swiper-slide-shadow-left,
                .swiper-3d .swiper-slide-shadow-right {
                background-image: inherit !important;
                }

                .slider {
                position: relative;
                height: 100%;
                }

                .swiper-slide {
                overflow: hidden;
                }

                .swiper-slide img {
                object-fit: cover;
                }

                .arrow.arrow-left {
                left: 0;
                }

                .arrow.arrow-right {
                right: 0;
                }

                .swiper-pagination-bullets.swiper-pagination-horizontal {
                position: absolute !important;
                bottom: -60px !important;
                top: inherit !important;
                left: 50% !important;
                right: 50% !important;
                margin-left: 37px !important;
                width: 8% !important;
                /* background: black !important; */
                transform: translateX(-50%) !important;
                }

                .swiper {
                overflow: visible !important;
                }

                .swiper-pagination-bullet-active {
                background: #f5090b !important;
                width: 30px !important;
                border-radius: 30px !important;
                }

                .swiper-button-prev {
                    left: 45% !important;
                    right: inherit !important;
                }

                .swiper-button-next {
                left: inherit !important;
                right: 45% !important;
                }

                .swiper-button-prev,
                .swiper-button-next {
                top: inherit !important;
                bottom: -81px !important;
                }

                .swiper-button-prev:after {
                content: url(/explainer-videos/swiper-left-arr.png) !important;
                }

                .swiper-button-next:after {
                content: url(/explainer-videos/swiper-right-arrow.png) !important;
                }

                .swiper-slide{
                border-radius: 45px !important;
                }

                @media screen and (max-width: 850px) {
                    .swiper-button-prev {
                        left: 43% !important;
                        right: inherit !important;
                    }

                    .swiper-button-next {
                    left: inherit !important;
                    right: 43% !important;
                    }

                    .swiper-button-prev,
                    .swiper-button-next {
                        top: inherit !important;
                        bottom: -60px !important;
                    }
                }

                @media screen and (max-width: 650px) {
                    .swiper-button-prev {
                        left: 35% !important;
                        right: inherit !important;
                    }

                    .swiper-button-next {
                        left: inherit !important;
                        right: 35% !important;
                    }
                }
              `,
            ],
        };
        // Assign it to swiper element
        Object.assign(swiperRef.current, params);
        // initialize swiper
        swiperRef.current.initialize();
    }, []);

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
        });

        return <div ref={containerRef}>{props.children}</div>;
    }
    // Chat Code
    const handleChatOpen = (e) => {
        e.preventDefault();
        if (typeof $zopim !== 'undefined' && $zopim.livechat && $zopim.livechat.window) {
            $zopim.livechat.window.show();
        }
    };
    return (
        <>
            <section className='pt-[40px] pb-[75px] lg:pt-[70px] lg:pb-[175px] relative overflow-hidden bg-white'>
                <div className="px-4 sm:px-8 lg:max-w-7xl mx-auto">
                    <div className="grid grid-cols-12">
                        <div className="col-span-12">
                            <div className="content">
                                <h2 className='text-black poppins text-[25px] md:text-[30px] lg:text-[35px] font-semibold leading-[35px] md:leading-[45px] lg:leading-[50px] text-center mb-2'>Video Animation That <span className='text-[#FF0000]'>Converts Like A Glove!</span></h2>
                                <p className='text-black text-[13px] lg:text-[16px] font-sans text-center'>We know video animation like no one else from 2d animation to high-end Infographics.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="slider mt-4 sm:mt-7 lg:mt-12 px-4 xl:px-0 h-[200%]">
                    <swiper-container ref={swiperRef} init={false}
                        effect={'coverflow'}
                        className="videoExplainerSlider"
                    >
                        <swiper-slide className='relative pt-4'>
                            <div>
                                <Image src={Slide5} alt='Slide' className='rounded-[20px] w-full relative top-0 left-0' />
                                <div className="absolute bottom-0 left-0 w-full h-full flex items-start justify-end flex-col bg-gradient-to-t from-black/100 to-black/20 rounded-[20px] px-[20px] pb-[20px] md:px-[25px] md:pb-[25px] xl:px-[40px] xl:pb-[40px]">
                                    <h3 className="text-white text-[20px] lg:text-[24px] xl:text-[26px] font-sans font-[400] lg:pb-1 xl:pb-2">2D Animation Service</h3>
                                    <p className='text-white md:text-[15px] xl:text-[17px] font-sans leading-[20px] xl:leading-[22px] lg:w-11/12 pr-2 overflow-y-scroll h-[40px] xl:h-[45px] hidden lg:block'>Breathe life into your brand with captivating 2D animation. Our enchanting visuals leave a lasting impression, with 78% of consumers reporting enhanced memorability. Explainer Videos LLC: Where artistry meets animation, elevating your brand's story.</p>
                                    <div className="btn w-max ms-auto">
                                        <button onClick={handleChatOpen} className='flex items-center gap-x-3 mt-4 h-[35px] lg:h-[40px] xl:h-[45px] w-max px-3 text-[12px] md:text-[14px] xl:text-[16px] font-medium poppins tracking-wider bg-[#FF2D4B] text-white rounded-[5px] shadow-3xl duration-700 transition-all hover:duration-700 hover:transition-all'>Make an Animation
                                            <Image src={Arrow} className='w-[10px] h-[10px] object-contain' alt='Arrow' width={8} height={9} />
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <Fancybox options={{
                                Carousel: {
                                    infinite: false,
                                },
                            }}>
                                <div>
                                    <Link
                                        href="https://player.vimeo.com/progressive_redirect/playback/907829397/rendition/1080p/file.mp4?loc=external&signature=90d3e6d4b05f56ed61129b5031be09b724259666750b41882f54bf99b3e2314e" datafancybox="gallery">
                                        <Image src={VideoIco} alt='video-icon' className={`${styles.play} absolute translate-x-[-50%] translate-y-[-50%] w-[50px] xl:w-[60px]`} />
                                    </Link>
                                </div>
                            </Fancybox>
                        </swiper-slide>
                        <swiper-slide className='relative pt-4'>
                            <div>
                                <Image src={Slide1} alt='Slide' className='rounded-[20px] w-full relative top-0 left-0' />
                                <div className="absolute bottom-0 left-0 w-full h-full flex items-start justify-end flex-col bg-gradient-to-t from-black/100 to-black/20 rounded-[20px] px-[20px] pb-[20px] md:px-[25px] md:pb-[25px] xl:px-[40px] xl:pb-[40px]">
                                    <h3 className="text-white text-[20px] lg:text-[24px] xl:text-[26px] font-sans font-[400] lg:pb-1 xl:pb-2">3D Animation Services</h3>
                                    <p className='text-white md:text-[15px] xl:text-[17px] font-sans leading-[20px] xl:leading-[22px] lg:w-11/12 pr-2 overflow-y-scroll h-[40px] xl:h-[45px] hidden lg:block'>Immerse your audience in a world of dimensional design. Our 3D wizardry creates experiences that resonate, with 65% of marketers noting increased engagement. Explainer Videos LLC: Transforming your vision into three-dimensional brand brilliance.</p>
                                    <div className="btn w-max ms-auto relative z-50">
                                        <button onClick={handleChatOpen} className='flex items-center gap-x-3 mt-4 h-[35px] lg:h-[40px] xl:h-[45px] w-max px-3 text-[12px] md:text-[14px] xl:text-[16px] font-medium poppins tracking-wider bg-[#FF2D4B] text-white rounded-[5px] shadow-3xl duration-700 transition-all hover:duration-700 hover:transition-all'>Make an Animation
                                            <Image src={Arrow} className='w-[10px] h-[10px] object-contain' alt='Arrow' width={8} height={9} />
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <Fancybox options={{
                                Carousel: {
                                    infinite: false,
                                },
                            }}>
                                <div>
                                    <Link href="https://player.vimeo.com/progressive_redirect/playback/947422905/rendition/1080p/file.mp4?loc=external&signature=f56596bad42e22dfbb5dcf417293fe4f92f3fc7e84a9464be5c8f07f903eaa05" datafancybox="gallery">
                                        <Image src={VideoIco} alt='video-icon' className={`${styles.play} absolute translate-x-[-50%] translate-y-[-50%] w-[50px] xl:w-[60px]`} />
                                    </Link>
                                </div>
                            </Fancybox>
                        </swiper-slide>
                        <swiper-slide className='relative pt-4'>
                            <div>
                                <Image src={Slide2} alt='Slide' className='rounded-[20px] w-full relative top-0 left-0' />
                                <div className="absolute bottom-0 left-0 w-full h-full flex items-start justify-end flex-col bg-gradient-to-t from-black/100 to-black/20 rounded-[20px] px-[20px] pb-[20px] md:px-[25px] md:pb-[25px] xl:px-[40px] xl:pb-[40px]">
                                    <h3 className="text-white text-[20px] lg:text-[24px] xl:text-[26px] font-sans font-[400] lg:pb-1 xl:pb-2">Promotional Videos</h3>
                                    <p className='text-white md:text-[15px] xl:text-[17px] font-sans leading-[20px] xl:leading-[22px] lg:w-11/12 pr-2 overflow-y-scroll h-[40px] xl:h-[45px] hidden lg:block'>Ignite excitement and drive conversions with our engaging promo videos. 76% of businesses report increased sales through video marketing. Explainer Videos LLC: Crafting viral-worthy content that captivates and converts.</p>
                                    <div className="btn w-max ms-auto">
                                        <button onClick={handleChatOpen} className='flex items-center gap-x-3 mt-4 h-[35px] lg:h-[40px] xl:h-[45px] w-max px-3 text-[12px] md:text-[14px] xl:text-[16px] font-medium poppins tracking-wider bg-[#FF2D4B] text-white rounded-[5px] shadow-3xl duration-700 transition-all hover:duration-700 hover:transition-all'>Make an Animation
                                            <Image src={Arrow} className='w-[10px] h-[10px] object-contain' alt='Arrow' width={8} height={9} />
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <Fancybox options={{
                                Carousel: {
                                    infinite: false,
                                },
                            }}>
                                <div>
                                    <Link href="https://player.vimeo.com/progressive_redirect/playback/957421481/rendition/1080p/file.mp4?loc=external&signature=2200951cfd824565a3f569c81e997b1f7c5ad0a443debd2bc4d73ff7a3b0f27b" datafancybox="gallery">
                                        <Image src={VideoIco} alt='video-icon' className={`${styles.play} absolute translate-x-[-50%] translate-y-[-50%] w-[50px] xl:w-[60px]`} />
                                    </Link>
                                </div>
                            </Fancybox>
                        </swiper-slide>
                        <swiper-slide className='relative pt-4'>
                            <div>
                                <Image src={Slide3} alt='Slide' className='rounded-[20px] w-full relative top-0 left-0' />
                                <div className="absolute bottom-0 left-0 w-full h-full flex items-start justify-end flex-col bg-gradient-to-t from-black/100 to-black/20 rounded-[20px] px-[20px] pb-[20px] md:px-[25px] md:pb-[25px] xl:px-[40px] xl:pb-[40px]">
                                    <h3 className="text-white text-[20px] lg:text-[24px] xl:text-[26px] font-sans font-[400] lg:pb-1 xl:pb-2">Explainer Videos</h3>
                                    <p className='text-white md:text-[15px] xl:text-[17px] font-sans leading-[20px] xl:leading-[22px] lg:w-11/12 pr-2 overflow-y-scroll h-[40px] xl:h-[45px] hidden lg:block'>Simplify the complex and inform your audience with clarity. 98% of viewers better grasp products after watching explainers. Explainer Videos LLC: Turning intricate ideas into easily digestible, engaging content.</p>
                                    <div className="btn w-max ms-auto">
                                        <button onClick={handleChatOpen} className='flex items-center gap-x-3 mt-4 h-[35px] lg:h-[40px] xl:h-[45px] w-max px-3 text-[12px] md:text-[14px] xl:text-[16px] font-medium poppins tracking-wider bg-[#FF2D4B] text-white rounded-[5px] shadow-3xl duration-700 transition-all hover:duration-700 hover:transition-all'>Make an Animation
                                            <Image src={Arrow} className='w-[10px] h-[10px] object-contain' alt='Arrow' width={8} height={9} />
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <Fancybox options={{
                                Carousel: {
                                    infinite: false,
                                },
                            }}>
                                <div>
                                    <Link href="https://player.vimeo.com/progressive_redirect/playback/923043536/rendition/1080p/file.mp4?loc=external&signature=65ba4de21993e2ab518a0dbad0e015b2bd960e70967b63241c8509cc1f8c5390" datafancybox="gallery">
                                        <Image src={VideoIco} alt='video-icon' className={`${styles.play} absolute translate-x-[-50%] translate-y-[-50%] w-[50px] xl:w-[60px]`} />
                                    </Link>
                                </div>
                            </Fancybox>
                        </swiper-slide>
                        <swiper-slide className='relative pt-4'>
                            <div>
                                <Image src={Slide4} alt='Slide' className='rounded-[20px] w-full relative top-0 left-0' />
                                <div className="absolute bottom-0 left-0 w-full h-full flex items-start justify-end flex-col bg-gradient-to-t from-black/100 to-black/20 rounded-[20px] px-[20px] pb-[20px] md:px-[25px] md:pb-[25px] xl:px-[40px] xl:pb-[40px]">
                                    <h3 className="text-white text-[20px] lg:text-[24px] xl:text-[26px] font-sans font-[400] lg:pb-1 xl:pb-2">Whiteboard Animation</h3>
                                    Capture attention with dynamic illustrations that bring your message to life. 72% of consumers prefer whiteboard videos for product education. Explainer Videos LLC: Where artistic prowess meets seamless storytelling.<p className='text-white md:text-[15px] xl:text-[17px] font-sans leading-[20px] xl:leading-[22px] lg:w-11/12 pr-2 overflow-y-scroll h-[40px] xl:h-[45px] hidden lg:block'>Oborderur 3D animation services are not just visuals; they're an immersive experience that propels your brand into the future. Our skilled team of 3D artists and visionaries transform concepts into living, breathing narratives that captivate audiences.</p>
                                    <div className="btn w-max ms-auto">
                                        <button onClick={handleChatOpen} className='flex items-center gap-x-3 mt-4 h-[35px] lg:h-[40px] xl:h-[45px] w-max px-3 text-[12px] md:text-[14px] xl:text-[16px] font-medium poppins tracking-wider bg-[#FF2D4B] text-white rounded-[5px] shadow-3xl duration-700 transition-all hover:duration-700 hover:transition-all'>Make an Animation
                                            <Image src={Arrow} className='w-[10px] h-[10px] object-contain' alt='Arrow' width={8} height={9} />
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <Fancybox options={{
                                Carousel: {
                                    infinite: false,
                                },
                            }}>
                                <div>
                                    <Link
                                        href="https://player.vimeo.com/progressive_redirect/playback/911728642/rendition/1080p/file.mp4?loc=external&signature=44469d3d3ef50562def357cdf05ef68b8d9eb1f6c874c98d4b7a6772c4b7f173" datafancybox="gallery">
                                        <Image src={VideoIco} alt='video-icon' className={`${styles.play} absolute translate-x-[-50%] translate-y-[-50%] w-[50px] xl:w-[60px]`} />
                                    </Link>
                                </div>
                            </Fancybox>
                        </swiper-slide>
                        <swiper-slide className='relative pt-4'>
                            <div>
                                <Image src={Slide6} alt='Slide' className='rounded-[20px] w-full relative top-0 left-0' />
                                <div className="absolute bottom-0 left-0 w-full h-full flex items-start justify-end flex-col bg-gradient-to-t from-black/100 to-black/20 rounded-[20px] px-[20px] pb-[20px] md:px-[25px] md:pb-[25px] xl:px-[40px] xl:pb-[40px]">
                                    <h3 className="text-white text-[20px] lg:text-[24px] xl:text-[26px] font-sans font-[400] lg:pb-1 xl:pb-2">Infographics Design</h3>
                                    <p className='text-white md:text-[15px] xl:text-[17px] font-sans leading-[20px] xl:leading-[22px] lg:w-11/12 pr-2 overflow-y-scroll h-[40px] xl:h-[45px] hidden lg:block'>Transform raw data into visually stunning stories. Infographics boost information retention by 40%. Explainer Videos LLC: Elevating your data into eye-catching, memorable visual experiences.</p>
                                    <div className="btn w-max ms-auto">
                                        <button onClick={handleChatOpen} className='flex items-center gap-x-3 mt-4 h-[35px] lg:h-[40px] xl:h-[45px] w-max px-3 text-[12px] md:text-[14px] xl:text-[16px] font-medium poppins tracking-wider bg-[#FF2D4B] text-white rounded-[5px] shadow-3xl duration-700 transition-all hover:duration-700 hover:transition-all'>Make an Animation
                                            <Image src={Arrow} className='w-[10px] h-[10px] object-contain' alt='Arrow' width={8} height={9} />
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <Fancybox options={{
                                Carousel: {
                                    infinite: false,
                                },
                            }}>
                                <div>
                                    <Link
                                        href="https://player.vimeo.com/progressive_redirect/playback/906229275/rendition/1080p/file.mp4?loc=external&signature=6cce77a47f5927d9a30e5a8c79efd00b539f963952705e6d3ee7565e9c1ccd7e" datafancybox="gallery">
                                        <Image src={VideoIco} alt='video-icon' className={`${styles.play} absolute translate-x-[-50%] translate-y-[-50%] w-[50px] xl:w-[60px]`} />
                                    </Link>
                                </div>
                            </Fancybox>
                        </swiper-slide>
                        <swiper-slide className='relative pt-4'>
                            <div>
                                <Image src={Slide7} alt='Slide' className='rounded-[20px] w-full relative top-0 left-0' />
                                <div className="absolute bottom-0 left-0 w-full h-full flex items-start justify-end flex-col bg-gradient-to-t from-black/100 to-black/20 rounded-[20px] px-[20px] pb-[20px] md:px-[25px] md:pb-[25px] xl:px-[40px] xl:pb-[40px]">
                                    <h3 className="text-white text-[20px] lg:text-[24px] xl:text-[26px] font-sans font-[400] lg:pb-1 xl:pb-2">Logo Animation</h3>
                                    <p className='text-white md:text-[15px] xl:text-[17px] font-sans leading-[20px] xl:leading-[22px] lg:w-11/12 pr-2 overflow-y-scroll h-[40px] xl:h-[45px] hidden lg:block'>Breathe dynamism into your brand identity with our mesmerizing logo animations. 87% of consumers find animated logos more memorable. Explainer Videos LLC: Turning your static mark into a living, breathing brand champion.</p>
                                    <div className="btn w-max ms-auto">
                                        <button onClick={handleChatOpen} className='flex items-center gap-x-3 mt-4 h-[35px] lg:h-[40px] xl:h-[45px] w-max px-3 text-[12px] md:text-[14px] xl:text-[16px] font-medium poppins tracking-wider bg-[#FF2D4B] text-white rounded-[5px] shadow-3xl duration-700 transition-all hover:duration-700 hover:transition-all'>Make an Animation
                                            <Image src={Arrow} className='w-[10px] h-[10px] object-contain' alt='Arrow' width={8} height={9} />
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <Fancybox options={{
                                Carousel: {
                                    infinite: false,
                                },
                            }}>
                                <div>
                                    <Link
                                        href="https://player.vimeo.com/progressive_redirect/playback/907667817/rendition/1080p/file.mp4?loc=external&signature=62f4e51f50389dad04d8d6658c50e99198503d3ca6d458ef27bac708f6bb7feb" datafancybox="gallery">
                                        <Image src={VideoIco} alt='video-icon' className={`${styles.play} absolute translate-x-[-50%] translate-y-[-50%] w-[50px] xl:w-[60px]`} />
                                    </Link>
                                </div>
                            </Fancybox>
                        </swiper-slide>
                    </swiper-container>
                </div>
            </section>
        </>
    )
}

export default Animation

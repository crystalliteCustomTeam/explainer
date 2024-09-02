"use client"
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Fancybox as NativeFancybox } from "@fancyapps/ui"
import "@fancyapps/ui/dist/fancybox/fancybox.css"
// Import Css
import styles from "./PortFolio.module.css"
// icons
import PlayIcon from "media/infinity-studio/play2.png"
import usePopup from '@/app/configs/store/Popup'

const Portfolio = ({ content }) => {
    const { popup, togglePopup } = usePopup();
    const popupHandle = () => {
        togglePopup(popup);
    }
    const { title, para, tabInfo, tabContents } = content;
    //========= tabs =========
    const [activeTab, setActiveTab] = useState(0);
    const handleTabClick = (index) => {
        setActiveTab(index);
    };
    //========= fancy box =========
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

    //========= video code start =========
    const handleVideoPlay = (e) => {
        const video = e.currentTarget.querySelector('video');
        video.play();
    };
    const handleVideoPause = (e) => {
        const video = e.currentTarget.querySelector('video');
        video.pause();
    };

    return (
        <>
            <section className={` ${styles.portfolioSection} w-full flex items-center justify-startbg-[#fff]`}>
                <div className="px-4 sm:px-8 lg:max-w-7xl mx-auto">
                    <div className='flex items-center justify-around'>
                        <div className='w-full text-center'>
                            <h2>{title}</h2>
                            <p>{para}</p>
                        </div>
                    </div>
                    <div className={`mt-8 md:mt-[35px]`}>
                        <ul className="flex flex-wrap justify-center text-sm font-medium text-center gap-3 md:gap-5 mx-auto">
                            {tabInfo.map((tab, index) => (
                                <li key={index}
                                    className={`w-max px-[10px] lg:px-[25px] h-[30px] lg:h-[40px] flex items-center justify-center text-[12px] lg:text-[14px] font-normal poppins border rounded-[27px] cursor-pointer hover:bg-[#000] hover:text-white hover:duration-700 duration-700 ease-in-out ${activeTab === index ? 'bg-[#000] text-white' : 'bg-[#2c5dcf] text-white'}`}
                                    onClick={() => handleTabClick(index)}>
                                    {tab.label}
                                </li>
                            ))}
                        </ul>
                        <div className="tabs-content pt-5 md:pt-8">
                            {tabContents[activeTab] && (
                                <Fancybox options={{
                                    Carousel: {
                                        infinite: false,
                                    },
                                }}>

                                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-8'>
                                        {tabContents[activeTab].map((item, index) => (
                                            <Link key={index} href={item.video} datafancybox="gallery" className={`${styles.shadow} w-full h-full group`}>
                                                <div className="overlay relative ">
                                                    <Image src={item.thumbnail} alt="Explainer Videos LLC" />
                                                    <div className="bg-slate-700/75 h-full w-full 
                                                   absolute left-[0%] top-[0%] 
                                                    flex items-center justify-center ">
                                                        <Image src={PlayIcon} alt='Play-icon' className={`${styles.animi} brightness-200 invert-0 w-[75px]`} />
                                                    </div>
                                                </div>
                                            </Link>
                                        ))}
                                    </div>
                                </Fancybox>
                            )}
                        </div>
                        <div className="mt-10 w-max mx-auto">
                            <button onClick={popupHandle} className='flex items-center text-[14px] xl:text-[16px] text-white font-medium poppins ml-[10px] py-[12px] px-[10px] xl:px-[20px] tracking-[.3px] border rounded-[27px] cursor-pointer leading-[20px] duration-700 transition-all bg-[#2c5dcf] hover:bg-[#000] hover:duration-700 hover:transition-all'>
                                Get Started
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Portfolio
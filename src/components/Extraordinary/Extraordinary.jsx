"use client"

import Link from 'next/link'
import React from 'react'
// 
import AnimationOne from "media/extraordinary-two.gif"
import AnimationTwo from "media/extraordinary-one.gif"
import Image from 'next/image';

const Extraordinary = () => {
    const handleChatOpen = (e) => {
        e.preventDefault();
        // if (typeof $zopim !== 'undefined' && $zopim.livechat && $zopim.livechat.window) {
        //     $zopim.livechat.window.show();
        // }
        if (typeof window !== "undefined" && window.LiveChatWidget) {
            parent.LC_API.open_chat_window(); return false; // Open the LiveChat widget
        }
    };

    return (
        <>
            <section className='pt-[30px] md:pt-[70px] relative bg-[#fbfbfb]'>
                <div className="px-5 lg:max-w-7xl mx-auto">
                    <div className="grid grid-cols-12">
                        <div className="col-span-12">
                            <h2 className='text-[30px] md:text-[40px] lg:text-[55px] leading-tight font-bold font-sans text-center text-black mb-3'>Let’s Get Started And Create Magic!</h2>
                            <p className='text-[13px] sm:text-[17px] leading-[21px] font-sans text-center text-black lg:w-9/12 mx-auto mb-10'>Attention spans are short, time is money – embrace the power of video animation and explainer videos to propel your business and brand to new heights of conversion and engagement.</p>
                            <div className="flex flex-wrap items-center justify-center gap-3">
                                <div className="btns">
                                    <button className="text-[16px] font-semibold leading-[25px] text-white bg-[#FF2D4B] dropShadow rounded-[5px] w-[318px] h-[44px] poppins flex items-center justify-center" onClick={handleChatOpen}>Make an Animation</button>
                                </div>
                                <div className="btns">
                                    <button className="text-[16px] font-semibold leading-[25px] text-white bg-black rounded-[5px] w-[318px] md:w-[214px] h-[44px] shadow-2xl poppins flex items-center justify-center" onClick={handleChatOpen}>Live Chat</button>
                                </div>
                                <div className="flex items-center justify-between gap-x-4 mt-[48px] lg:mt-0">
                                    <Image src={AnimationOne} alt='Explainer Videos LLC' width={550} height={550} className='w-5/12 lg:w-5/12' />
                                    <Image src={AnimationTwo} alt='Explainer Videos LLC' width={550} height={550} className='lg:mb-[-110px] relative z-0 w-5/12 lg:w-5/12' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Extraordinary

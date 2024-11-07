import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Assisted = () => {
    // Chat Code
    const handleChatOpen = (e) => {
        e.preventDefault();
        // if (typeof $zopim !== 'undefined' && $zopim.livechat && $zopim.livechat.window) {
        //     $zopim.livechat.window.show();
        // }
        if (typeof window !== "undefined" && window.LiveChatWidget) {
            parent.LC_API.open_chat_window(); return false; // Open the LiveChat widget
        }
    };
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
                                <h2 className='text-[25px] sm:text-[40px] lg:text-[50px] leading-tight md:leading-[40px] lg:leading-[55px] font-bold font-sans mb-3 text-white'>We Were Born To Do Video Animation & Storytelling!</h2>
                                <p className='text-[13px] sm:text-[16px] font-sans leading-[20px] mb-3 text-white'>Whether it's a single animated video or a whole suite of video content, it all starts with that one spark. At Explainer Videos LLC, we know your brand like the back of our hand, and we're leading the game of video animation and always turning your brand’s vision into reality through dynamic collaboration.</p>
                                <p className='text-[13px] sm:text-[16px] font-sans leading-[20px] mb-3 text-white'>As tech-savvy video aficionados, we bring your brand story to life with cinematically powerful animations. From animated explainers that immerse your audience to hybrid animation and 3D rendering that showcase your brand’s personality – we're your one-stop solution for delivering video experiences that pack a punch. Dive into our creative playground, where imagination thrives.</p>

                                <div className="btn mt-8">
                                    <button onClick={handleChatOpen} className="text-[16px] font-semibold leading-[25px] text-white bg-[#FF2D4B] dropShadow rounded-[5px] w-full sm:w-[320px] h-[44px] poppins flex items-center justify-center" >Make an Animation</button>
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
            </section >
        </>
    )
}

export default Assisted

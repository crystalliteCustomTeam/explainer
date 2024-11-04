"use client"
import logo from "media/logo.webp";
import Image from "next/image";
import styles from "./header.module.css"
import Link from "next/link";
import { PiWechatLogoFill } from "react-icons/pi";
import { BiSolidPhoneCall } from "react-icons/bi";


const HeaderLP = () => {
    // Chat Code
    const handleChatOpen = (e) => {
        e.preventDefault();
        // if (typeof $zopim !== 'undefined' && $zopim.livechat && $zopim.livechat.window) {
        //     $zopim.livechat.window.show();
        // }
        if (window.LiveChatWidget) {
            window.LiveChatWidget.call('maximize'); // Opens the LiveChat widget
        }
    };
    return (
        <section className={styles.headerSection}>
            <div className="xs:px-4 sm:px-8 lg:max-w-7xl mx-auto py-[15px]">
                <div className="grid grid-cols-2 items-center justify-between max-w-[1260px] lg:mx-auto">
                    <div className="my-auto">
                        <div className="logo">
                            <Image priority src={logo} alt='logo' width={150} height={40} />
                        </div>
                    </div>
                    <div className="my-auto text-right flex items-end justify-end">
                        <button onClick={handleChatOpen} className={`${styles.button} text-[15px] sm:text-[18px] py-3 px-6 max-w-[150px] me-2 hidden md:block`} >Chat Now</button>
                        <Link href="tel:1-833-666-6684" className={`${styles.button} text-[15px] sm:text-[18px] py-3 px-6 hidden md:block`}>1-833-666-6684</Link>
                        <button onClick={handleChatOpen} className={`${styles.IconButton} py-3 me-4 block md:hidden`} ><PiWechatLogoFill size={30} /></button>
                        <Link href="tel:1-833-666-6684" className={`${styles.IconButton}  py-3 me-4 block md:hidden`}><BiSolidPhoneCall size={30} /></Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeaderLP
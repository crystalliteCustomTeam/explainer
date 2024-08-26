"use client"
import React, { useEffect, useState } from "react"
import { usePathname } from "next/navigation"
import { PopupProvider } from "./configs/store/Popup"
import AOS from 'aos';
import 'aos/dist/aos.css';

import Footer from "@/components/Footer/Footer"
import Header from "@/components/Header/Header"
import Popup from "@/components/popup/Popup"

const ConditionalLayout = ({ children }) => {
    const pathname = usePathname();
    const [popup, setPopup] = useState(false);

    const togglePopup = () => {
        setPopup(prev => !prev);
    }

    useEffect(() => {
        setPopup(false);
        const timer = setTimeout(() => {
            setPopup(true);
        }, 5000);

        return () => clearTimeout(timer);
    }, [pathname]);

    useEffect(() => {
        AOS.init({
            duration: 800,
            once: false,
        })
    }, [])

    return (
        <PopupProvider value={{ popup, togglePopup }}>
            <Popup />
            {pathname !== "/lp/explainer-video-animation" && pathname !== "/lp/animated-explainer-videos" && (
                <Header />
            )}
            {children}
            {pathname !== "/lp/explainer-video-animation" && pathname !== "/lp/animated-explainer-videos" && (
                <Footer />
            )}
        </PopupProvider>
    )
}

export default ConditionalLayout

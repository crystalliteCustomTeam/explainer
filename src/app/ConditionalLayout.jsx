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
        setPopup(true);
        const timer = setTimeout(() => {
            setPopup(false);
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
        {(pathname !== "/lp/explainer-video-animation" &&
          pathname !== "/lp/animated-explainer-videos" &&
          pathname !== "/lp/2D-animation-offer" &&
          pathname !== "/lp/custom-explainer-videos" &&
          pathname !== "/explainer-animated-videos") && (
            <Header />
        )}
        {children}
        {(pathname !== "/lp/explainer-video-animation" &&
          pathname !== "/lp/animated-explainer-videos" &&
          pathname !== "/lp/2D-animation-offer" &&
          pathname !== "/lp/custom-explainer-videos" &&
          pathname !== "/explainer-animated-videos") && (
            <Footer />
        )}
    </PopupProvider>
    )
}

export default ConditionalLayout

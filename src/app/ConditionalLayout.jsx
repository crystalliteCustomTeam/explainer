"use client"
import React, { useEffect, useState } from "react"
import { usePathname } from "next/navigation"
import { PopupProvider } from "./configs/store/Popup"
import AOS from 'aos';
import 'aos/dist/aos.css';
//
import Footer from "@/components/Footer/Footer"
import Header from "@/components/Header/Header"

const ConditionalLayout = ({ children }) => {
    const pathname = usePathname();
    const [popup, setPopup] = useState(true)
    const togglePopup = (e) => {
        setPopup(!e)
    }


    useEffect(() => {
        AOS.init({
            duration: 800,
            once: false,
        })
    }, [])
    return (
        <PopupProvider value={{ popup, togglePopup }}>
            <Header />
            {children}
            <Footer />
        </PopupProvider>
    )
}

export default ConditionalLayout
"use client"
import { Col, Row, Container } from 'react-bootstrap'
import styles from "./footer.module.css"
import FormContact from '../from/from'
import Image from 'next/image'
import IconEmail from "media/2D-animation-offer/footer-icon-1.png"
import IconPhone from "media/2D-animation-offer/footer-icon-2.png"
import IconLoc from "media/2D-animation-offer/footer-icon-3.webp"
import Link from 'next/link'
import usePopup from '@/app/configs/store/Popup'



const FooterLP = () => {
    const { popup, togglePopup } = usePopup();
    const popupHandle = () => {
        togglePopup(popup);
    }
    return (
        <>
            <section className={styles.footerSection}>
                <div className="container">
                    <div className='h-100 max-w-[1260px] mx-auto grid grid-cols-1 lg:grid-cols-2 items-center justify-between'>
                        <div className='flex flex-col items-center pb-5 lg:pb-0 '>
                            <FormContact footer="yes" />
                        </div>
                        <div className='z-10'>
                            <h2>Looking for an excellent Business idea?</h2>
                            <p>Give us a call or drop by anytime, we endeavour to answer all
                                enquiries within 24 hours on business days.</p>
                            <div className={styles.btnStart} onClick={popupHandle}>
                                Get Started
                            </div>
                            <div className={styles.infoContact}>
                                <div className={styles.imgInfo}>
                                    <Image src={IconLoc} alt="Email Address" />
                                </div>
                                <div className={styles.imgTxt}>
                                    Location
                                    <a href='https://maps.app.goo.gl/p2Vac7NxSYA7NU5L7' target='_blank'>222 S Figueroa St, Los Angeles, CA 90012, United States</a>
                                    <a href='https://maps.app.goo.gl/dJw3jHDkZRiSwPe6A' target='_blank'>110 Spadina Ave. Suite 500, Toronto, ON M5V 2K4, Canada</a>
                                </div>
                            </div>
                            <div className={styles.infoContact}>
                                <div className={styles.imgInfo}>
                                    <Image src={IconEmail} alt="Email Address" />
                                </div>
                                <div className={styles.imgTxt}>
                                    Email Address
                                    <a href='mailto:queries@explainervideosllc.com' target='_blank'>queries@explainervideosllc.com</a>
                                </div>
                            </div>
                            <div className={styles.infoContact}>
                                <div className={styles.imgInfo}>
                                    <Image src={IconPhone} alt="Email Address" />
                                </div>
                                <div className={styles.imgTxt}>
                                    Call Now
                                    <a href='tel:1-833-666-6684' >1-833-666-6684</a>
                                </div>
                            </div>

                        </div>
                        <div className={styles.footerGif}>
                            <video className="hero__video" id="header-vid" playsInline autoPlay muted loop>
                                <source src={'/videos/footerVideo.mp4'} type="video/mp4" />
                            </video>
                        </div>
                    </div>
                </div>
            </section>
            <section className={styles.copyRight}>
                <div className="container">
                    <div className='max-w-[1260px] m-auto grid grid-cols-1 lg:grid-cols-2 py-[15px]'>
                        <div className=' text-center md:text-left ' style={{ fontFamily: 'montserrat, sans-serif' }}>
                            <p>© Copyright 2024 - Explainer Videos LLC</p>
                        </div>
                        <div className='text-center md:text-right '>
                            <Link href="/terms-and-conditions" style={{ fontFamily: 'montserrat, sans-serif' }}>Terms and Conditions</Link>
                            <Link href="/privacy-policy" style={{ fontFamily: 'montserrat, sans-serif' }}>Privacy Policy</Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default FooterLP
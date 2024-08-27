"use client"
import { Col, Row, Container } from 'react-bootstrap'
import styles from "./footer.module.css"
import FormContact from '../from/from'
import Image from 'next/image'
import IconEmail from "media/2D-animation-offer/footer-icon-1.png"
import IconPhone from "media/2D-animation-offer/footer-icon-2.png"
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
                <Container >
                    <Row >
                        <Col lg={5} >
                            <FormContact footer="yes" />
                        </Col>
                        <Col lg={6} >
                            <h2>Looking for an excellent Business idea?</h2>
                            <p>Give us a call or drop by anytime, we endeavour to answer all
                                enquiries within 24 hours on business days.</p>
                            <div className={styles.btnStart} onClick={popupHandle}>
                                Get Started
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
                                    <a href='tel:1-833-666-6684' target='_blank'>1-833-666-6684</a>
                                </div>
                            </div>
                            <div className={styles.footerGif}>
                                <video className="hero__video" id="header-vid" playsInline autoPlay muted loop>
                                    <source src={'https://www.tenfoldanimations.com/2D-animation-offer/images/jump.webm'} type="video/webm" />
                                </video>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className={styles.copyRight}>
                <Container className='h-100'>
                    <Row className='h-100'>
                        <Col md={6} className='my-auto'>
                            <p>© Copyright 2024 - Explainer Videos LLC</p>
                        </Col>
                        <Col md={6} className='my-auto text-end'>
                            <Link href="/terms-and-conditions">Terms and Conditions</Link>
                            <Link href="/privacy-policy">Privacy Policy</Link>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default FooterLP
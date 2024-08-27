
"use client"
import styles from "./pricing.module.css"
import { Col, Container, Row } from "react-bootstrap"
import usePopup from '@/app/configs/store/Popup'

const Arrow = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
    </svg>
);


const PricingLP = () => {
    const { popup, togglePopup } = usePopup();
    const popupHandle = () => {
        togglePopup(popup);
    }

    const handleChatOpen = (e) => {
        e.preventDefault();
        if (typeof $zopim !== 'undefined' && $zopim.livechat && $zopim.livechat.window) {
            $zopim.livechat.window.show();
        }
    };


    return (
        <section className={styles.pricingSection} >
            <Container>
                <Row>
                    <Col md={10} lg={6} className="m-auto text-center">
                        <h2>Our Afforable Pricing</h2>
                        <p>Providing exceptional pricing with amazing custom animated video packages. Choose a fantastic animated video package below to best suit your business and budget. Boost your business with ny animation studio now.</p>
                    </Col>
                </Row>
                <Row className="mt-4">
                    <Col md={4} className="my-auto">
                        <div className={styles.pricingBox}>
                            <h3>Video Basic</h3>
                            <p>Text &amp; Image Compilation</p>
                            <div className={styles.amountBox}>
                                <h2>$165 </h2>
                                <strike>$499</strike>
                            </div>
                            <ul className={styles.listBox}>
                                <li><Arrow />60 Sec Duration</li>
                                <li><Arrow />Script Writing</li>
                                <li><Arrow />Custom Artwork</li>
                                <li><Arrow />Background Music</li>
                                <li><Arrow />HD Format Video</li>
                                <li><Arrow />Dedicated Support</li>
                            </ul>
                            <div className={styles.priceBtn}>
                                <div className={styles.sameBtn} onClick={popupHandle}>Get Started</div>
                                <div className={styles.sameBtn} onClick={handleChatOpen}>Live Chat</div>
                            </div>
                        </div>
                    </Col>
                    <Col md={4} className="my-auto">
                        <div className={styles.pricingBox}>
                            <h3>Video Plus</h3>
                            <p>Whitebaord or Motion Graphics Animation</p>
                            <div className={styles.amountBox}>
                                <h2>$499 </h2>
                                <strike>$999</strike>
                            </div>
                            <ul className={styles.listBox}>
                                <li><Arrow />60 Sec Duration</li>
                                <li><Arrow />Script Writing</li>
                                <li><Arrow />Professional Voice-over & SFX</li>
                                <li><Arrow />Hand-drawn Illustrations</li>
                                <li><Arrow />Unlimited Revisions</li>
                                <li><Arrow />HD Format Video</li>
                                <li><Arrow />Dedicated Support</li>
                            </ul>
                            <div className={styles.priceBtn}>
                                <div className={styles.sameBtn} onClick={popupHandle}>Get Started</div>
                                <div className={styles.sameBtn} onClick={handleChatOpen} >Live Chat</div>
                            </div>
                        </div>
                    </Col>
                    <Col md={4} className="my-auto">
                        <div className={styles.pricingBox}>
                            <h3>Video Classic</h3>
                            <p>Ultimate 2D Animation</p>
                            <div className={styles.amountBox}>
                                <h2>$799 </h2>
                                <strike>$1599</strike>
                            </div>
                            <ul className={styles.listBox}>
                                <li><Arrow />60 Sec Duration</li>
                                <li><Arrow />Script Writing</li>
                                <li><Arrow />Professional Voice-over & SFX</li>
                                <li><Arrow />Custom 2D Character Illustration</li>
                                <li><Arrow />Unlimited Revisions</li>
                                <li><Arrow />HD Format Video</li>
                                <li><Arrow />Dedicated Support</li>
                            </ul>
                            <div className={styles.priceBtn}>
                                <div className={styles.sameBtn} onClick={popupHandle}>Get Started</div>
                                <div className={styles.sameBtn} onClick={handleChatOpen} >Live Chat</div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section >
    )
}

export default PricingLP
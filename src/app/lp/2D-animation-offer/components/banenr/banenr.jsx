"use client"
import styles from "./banner.module.css"
import BgImg from "media/2D-animation-offer/newbglp.webp";
import { Col, Container, Row } from "react-bootstrap"
import FormContact from "../from/from";
import usePopup from '@/app/configs/store/Popup'

const BanenrLP = () => {
    const { popup, togglePopup } = usePopup();
    const popupHandle = () => {
        togglePopup(popup);
    }
    return (
        <section className={styles.bannerSection} style={{ backgroundImage: `url(${BgImg.src})` }}>
            <Container className="h-100">
                <Row className="h-100">
                    <Col md={6} className="my-auto">
                        <h1>Share Your <br /><span>Exciting Story </span> with <br /> 2D Animated Videos</h1>
                        <ul>
                            <li>Self-explanatory Animations</li>
                            <li>High-End Graphics</li>
                            <li> Engaging and interactive features</li>
                            <li> Cost-friendly animation packages</li>
                        </ul>
                        <div className={styles.conmanCTA} onClick={popupHandle}>
                            Start Your Project
                        </div>
                    </Col>
                    <Col md={6} className="my-auto text-right">
                        <FormContact />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default BanenrLP
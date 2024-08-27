"use client"
import styles from "./benefits.module.css"
import { Col, Container, Row } from "react-bootstrap"
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import Image from "next/image"

const BenefitsLP = ({ slides }) => {
    const [emblaRef] = useEmblaCarousel({ loop: true, }, [
        Autoplay()
    ])
    return (
        <section className={styles.benifitSection} >
            <Container>
                <Row>
                    <Col md={6} className="m-auto text-center">
                        <h2>Benefits of 2D Animations</h2>
                        <p>2D animation videos differ from others in that it uses relatable characters and a narrative framework to communicate a message, making the video more psychologically and emotionally attractive.</p>
                    </Col>
                </Row>
            </Container>
            <Container fluid className="p-0">
                <Row>
                    <Col>
                        <div className={styles.embla}>
                            <div className={styles.embla__viewport} ref={emblaRef}>
                                <div className={styles.embla__container}>
                                    {slides.map((item, index) => (
                                        <div className={styles.embla__slide} key={index}>
                                            <div className={styles.benifitBox}>
                                                <div className={styles.imgBox}>
                                                    <Image src={item.icon} alt="icons" width={89} height={89} />
                                                </div>
                                                <h2>{item.tit}</h2>
                                                <p>{item.txt}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section >
    )
}

export default BenefitsLP
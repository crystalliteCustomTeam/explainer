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
            <div className="container">
                <div className="m-auto text-center pb-5">
                    <h2>Benefits of Explainer Videos</h2>
                    <p>Explainer videos differ from others in that it uses relatable characters and a <br className="hidden md:block" /> narrative framework to communicate a message, making the video more <br className="hidden md:block" /> psychologically and emotionally attractive.</p>
                </div>
            </div>
            <div className="grid grid-cols-1" >
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
            </div>

        </section >
    )
}

export default BenefitsLP
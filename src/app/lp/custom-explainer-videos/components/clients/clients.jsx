"use client"
import Image from 'next/image'
import useEmblaCarousel from 'embla-carousel-react'
import styles from "./clients.module.css"
import Autoplay from 'embla-carousel-autoplay'

const ClientSlider = ({ logos }) => {
    const [emblaRef] = useEmblaCarousel([Autoplay({ playOnInit: false, delay: 3000 })]);
    return (
        <section className={styles.embla}>
            <div className={styles.embla__viewport} ref={emblaRef}>
                <div className={styles.embla__container}>
                    {logos.map((item, index) => (
                        <div className={styles.embla__slide} key={index}>
                            <Image src={item.src} alt={item.alt} width={209} height={67} />
                        </div>
                    ))}
                </div>
            </div>
        </section >
    )
}

export default ClientSlider
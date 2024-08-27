"use client"
import { useState, useEffect } from 'react'
import styles from "./testimonails.module.css"
import Boy from "media/2D-animation-offer/test/boy.png"
import Girl from "media/2D-animation-offer/test/girl.png"
import Image from 'next/image'

const Partner = () => {
    const [partnerIndex, setPartnerIndex] = useState(0);

    const Items = [
        {
            tit: (<>Rick <span>Jonas</span></>),
            icon: Boy.src,
            txt: "I was in search of a professional video animation company. I came across Ny Animation Studio via Google. I run a marketing agency in Chicago. For testing them, I ordered one 2D video. Their animators did a great job, and I was impressed with their work. Now, they are giving me five 2D animated videos. Their head of animation is a professional guy and keeps me updated on a daily basis.",
        },
        {
            tit: (<>Elizabeth <span>Smith</span></>),
            icon: Girl.src,
            txt: "The editing of our tutorials on how to make the best use of our DIY items is done by Tenfold Animations Videos. I find the video quality superb. There is a finesse in their work which many cannot give even after multiple revisions.",
        },
        {
            tit: (<>Randy <span>Obrein</span></>),
            icon: Boy.src,
            txt: "We hired Tenfold Animations to create a cartoon video for our products. We wanted to advertise our work uniquely and creatively. They made this happen. We are delighted with their work. Thank you!",
        },
        {
            tit: (<>Emily <span>Clarke</span></>),
            icon: Girl.src,
            txt: "A true professional-no fuss, hassle-free cooperation—Tenfold Animations Team quickly understands your needs and gets straight to it. Quality of work is excellent. Highly recommended.",
        },

    ];

    useEffect(() => {
        const partnerInterval = setInterval(() => {
            setPartnerIndex((prevIndex) => (prevIndex + 1) % Items.length);
        }, 3000);

        return () => {
            clearInterval(partnerInterval)
        };
    }, [Items.length]);

    return (
        <div className={styles.marketingPartnerBox}>
            <div className={styles.marketingBoxItem}>
                <div className={styles.boxIcon}>
                    {Items.map((item, index) => (
                        <div
                            key={index}
                            className={`${styles.mainBox} ${index === partnerIndex ? styles.show : styles.hide}`}
                        >
                            <p>{item.txt}</p>
                            <div className={styles.iconContent}>
                                <div className={styles.iconBox}>
                                    <Image src={item.icon} alt="icons" width={60} height={60} />
                                </div>
                                <div className={styles.titBox}>
                                    {item.tit}
                                </div>
                            </div>

                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Partner;

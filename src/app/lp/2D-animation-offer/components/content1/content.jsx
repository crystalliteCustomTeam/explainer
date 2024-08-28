 "use client"
import IMG from "media/2D-animation-offer/story-img-2.gif"
import styles from "./content.module.css"
import { Col, Container, Row } from "react-bootstrap"
import Image from "next/image"
import usePopup from "@/app/configs/store/Popup"

const ContentLP1 = () => {
    const { popup, togglePopup } = usePopup();
    const popupHandle = () => {
        togglePopup(popup);
    }
    return (
        <section className={styles.contentSection} >
            <div className="px-4 sm:px-8 lg:max-w-7xl mx-auto">
                <div className="h-100 max-w-[1260px] mx-auto grid grid-cols-1 lg:grid-cols-2 items-center justify-between">
                    <div className="m-auto text-center">
                        <Image src={IMG.src} alt="Storytelling" width={555} height={416} />
                    </div>
                    <div className="my-auto ps-1">
                        <h2>Delight Your Audience With Our 2D Animation Services</h2>
                        <p>As a reliable 2D video animation agency, we have handpicked a team of experts who know how to design and know creativity better than anybody else in the town. From introducing your brand through a video to demonstrating the products, our animators do it all to take your brand to the sky heights.</p>
                        <p>We take your brand to the heights of success through our expert techniques and exceptional design skills to render the best animated video production services to help your brand attain its goals quickly and efficiently.</p>
                        <div className={styles.conmanCTA} onClick={popupHandle}>
                            Start Your Project
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContentLP1
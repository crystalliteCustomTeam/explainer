"use client"
import IMG from "media/2D-animation-offer/story-img-1.gif"
import styles from "./content.module.css"
import { Col, Container, Row } from "react-bootstrap"
import Image from "next/image"
import usePopup from '@/app/configs/store/Popup'

const ContentLP = () => {
    const { popup, togglePopup } = usePopup();
    const popupHandle = () => {
        togglePopup(popup);
    }
    return (
        <section className={styles.contentSection} >
            <div className="px-4 sm:px-8 lg:max-w-7xl mx-auto">
                <div className="h-100 max-w-[1260px] mx-auto grid grid-cols-1 lg:grid-cols-2 items-center justify-between"  >
                    <div className="my-auto">
                        <h2>A Storytelling <br />2D Animation Company</h2>
                        <p>With our 2D animated video production services, you can convey your message in a
                            compelling way that
                            convinces the audience to convert into a customer. The custom videos we create don't
                            just attract, but
                            they also retain attention. Moreover, our 2D video experts are always on the lookout
                            to go to a
                            greater extent and do something unique.
                        </p>
                        <p>
                            Explainer Videos LLC hires expert 2D animators with great expertise in gaining
                            customers' confidence and
                            satisfying the clients to the utmost satisfaction. Our 2D video animation team's
                            intellect serves you
                            with the best-animated video production services to bring great designs revival that
                            matter and
                            animation that adds life to the story.
                        </p>
                        <div className={styles.conmanCTA} onClick={popupHandle} >
                            Start Your Project
                        </div>
                    </div>
                    <div className="m-auto text-center">
                        <Image src={IMG.src} alt="Storytelling" width={555} height={416} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContentLP
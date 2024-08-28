"use client"
import styles from "./banner.module.css"
import BgImg from "media/2D-animation-offer/newbglp.webp";
import FormContact from "../from/from";
import usePopup from '@/app/configs/store/Popup'

const BanenrLP = () => {
    const { popup, togglePopup } = usePopup();
    const popupHandle = () => {
        togglePopup(popup);
    }
    return (
        <section className={`${styles.bannerSection} pt-[120px] pb-[90px]`} style={{ backgroundImage: `url(${BgImg.src})` }}>
            <div className="px-4 sm:px-8 lg:max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-between max-w-[1260px] mx-auto">
                    <div className="my-auto">
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
                    </div>
                    <div className="my-auto text-right flex flex-col justify-center items-center md:items-end  py-4 md:py-auto">
                        <FormContact />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default BanenrLP
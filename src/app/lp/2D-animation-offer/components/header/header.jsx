import logo from "media/logo.webp";
import Image from "next/image";
import styles from "./header.module.css"
import Link from "next/link";



const HeaderLP = () => {
    return (
        <section className={styles.headerSection}>
            <div className="xs:px-4 sm:px-8 lg:max-w-7xl mx-auto py-[15px]">
                <div className="grid grid-cols-2 items-center justify-between max-w-[1260px] lg:mx-auto">
                    <div className="my-auto">
                        <div className="logo">
                            <Image priority src={logo} alt='logo' width={150} height={40} />
                        </div>
                    </div>
                    <div className="my-auto text-right">
                        <Link href="tel:1-833-666-6684" className={`${styles.button} text-[15px] sm:text-[18px] py-3 px-6`}>1-833-666-6684</Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeaderLP
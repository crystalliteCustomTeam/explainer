import { Container, Row, Col } from "react-bootstrap"
import styles from "./testimonails.module.css"
import Partner from "./partner"

const TestimonailsLP = () => {
    return (
        <section className={styles.testimonailSection} >
            <div className="px-4 sm:px-8 lg:max-w-7xl mx-auto">
                <div className="max-w-[1260px] mx-auto grid grid-cols-1 lg:grid-cols-6  items-center justify-between">
                    <div className="my-auto lg:col-span-2">
                        <h2>What Our Valuable
                            Clients Say</h2>
                        <p>We have proudly served an awesome client base by delivering comprehensive design solutions. Our clients' feedback and appreciation will explain it all.</p>
                    </div>
                    <div className="my-auto lg:col-span-4">
                        <Partner />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TestimonailsLP
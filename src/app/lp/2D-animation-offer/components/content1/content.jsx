import IMG from "media/2D-animation-offer/story-img-2.gif"
import styles from "./content.module.css"
import { Col, Container, Row } from "react-bootstrap"
import Image from "next/image"

const ContentLP1 = () => {
    return (
        <section className={styles.contentSection} >
            <Container className="h-100">
                <Row className="h-100">
                    <Col md={6} className="m-auto text-center">
                        <Image src={IMG.src} alt="Storytelling" width={555} height={416} />
                    </Col>
                    <Col md={6} className="my-auto">
                        <h2>Delight Your Audience With Our 2D Animation Services</h2>
                        <p>As a reliable 2D video animation agency, we have handpicked a team of experts who know how to design and know creativity better than anybody else in the town. From introducing your brand through a video to demonstrating the products, our animators do it all to take your brand to the sky heights.</p>
                        <p>We take your brand to the heights of success through our expert techniques and exceptional design skills to render the best animated video production services to help your brand attain its goals quickly and efficiently.</p>
                        <div className={styles.conmanCTA}>
                            Start Your Project
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default ContentLP1
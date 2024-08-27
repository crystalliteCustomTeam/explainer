import { Container, Row, Col } from "react-bootstrap"
import styles from "./testimonails.module.css"
import Partner from "./partner"

const TestimonailsLP = () => {
    return (
        <section className={styles.testimonailSection} >
            <Container>
                <Row >
                    <Col md={4} className="my-auto">
                        <h2>What Our Valuable
                            Clients Say</h2>
                        <p>We have proudly served an awesome client base by delivering comprehensive design solutions. Our clients' feedback and appreciation will explain it all.</p>
                    </Col>
                    <Col md={8} className="my-auto">
                        <Partner />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default TestimonailsLP
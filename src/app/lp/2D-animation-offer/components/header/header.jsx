import { Col, Container, Row } from "react-bootstrap"
import logo from "media/logo.webp";
import Image from "next/image";
import styles from "./header.module.css"



const HeaderLP = () => {
    return (
        <section className={styles.headerSection}>
            <Container className="h-100">
                <Row className="h-100">
                    <Col md={6} className="my-auto">
                        <div className="logo">
                            <Image priority src={logo} alt='logo' width={150} height={40} />
                        </div>
                    </Col>
                    <Col md={6} className="my-auto text-right">
                        <a href="tel:1-833-666-6684" target="_blank" className={styles.button}>1-833-666-6684</a>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default HeaderLP
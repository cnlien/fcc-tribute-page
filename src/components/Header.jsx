import React from 'react';

import {
    Container,
    Row,
    Col
} from 'reactstrap';

// STYLES
import '../styles/Header.scss'

const Header = () => {

    return(
        <div className="main-header">
            <Container fluid="lg">
                <Row>
                    <Col class="info">
                        <h1>Dr. Norman Borlaug</h1>
                        <h4 id="title">The man who saved a billion lives</h4>
                    </Col>
                </Row>
                <Row>
                    <Col id="img-div">
                        <img src="https://c2.staticflickr.com/4/3689/10613180113_fdf7bcd316_b.jpg" id="image" alt="Doctor Norman Borlaug" />
                        <p id="img-caption">Dr. Norman Borlaug, third from the left, trains biologists in Mexico on how to increase wheat yields - part of his life-long war on hunger.</p>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Header
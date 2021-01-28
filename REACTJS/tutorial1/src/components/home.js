import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import Slide from './widgets/Slide'

function Home({ companyname, webdevclass, mathSum }) {
    return (
        <div>
            <Slide />
            <Row>
                <Container fluid={true}>
                    <Col md="3">
                        Sidebar
                </Col>
                    <Col md="9">
                        Blog Listing
                        {console.log(companyname)}
                        {
                            webdevclass.map((obj, index) => (
                                <p>{obj.title}</p>
                            ))
                        }
                        {console.log(mathSum(5,6))}
                    </Col>
                </Container>

            </Row>
        </div>
    )
}

export default Home

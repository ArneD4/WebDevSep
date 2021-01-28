import React, { Component } from 'react'
import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import '../style.css'
let users = [];


export default class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            email: '',
            address: '',
            city: '',
            zip: ''
        }

    }



    inputHandler = (e) => {

        this.setState({
            username: e.target.parentElement.Username.value,
            email: e.target.parentElement.Email.value,
            address: e.target.parentElement.Address.value,
            city: e.target.parentElement.City.value,
            zip: e.target.parentElement.Zip.value
        }
        
        )
    }



    render() {
        return (
            <div>
                <h1>User Register Form</h1>
                <Form>
                    <Row form>
                        <Col md={6}>
                            <FormGroup>
                                <Label for="Password">Username</Label>
                                <Input type="username" name="username" id="Username" placeholder="username placeholder" />
                            </FormGroup>
                        </Col>
                        <Col md={6}>
                            <FormGroup>
                                <Label for="Email">Email</Label>
                                <Input type="email" name="email" id="Email" placeholder="with a placeholder" />
                            </FormGroup>
                        </Col>
                    </Row>

                    <Row form>
                        <Col md={6}>
                            <FormGroup>
                                <Label for="City">Address</Label>
                                <Input type="text" name="address" id="Address" />
                            </FormGroup>
                        </Col>
                        <Col md={4}>
                            <FormGroup>
                                <Label for="State">City</Label>
                                <Input type="text" name="city" id="City" />
                            </FormGroup>
                        </Col>
                        <Col md={2}>
                            <FormGroup>
                                <Label for="Zip">Zip</Label>
                                <Input type="text" name="zip" id="Zip" />
                            </FormGroup>
                        </Col>
                    </Row>
                    {/* <FormGroup check>
                        <Input type="checkbox" name="check" id="Check" value=""/>
                        <Label for="Check" check>Check me out</Label>
                    </FormGroup> */}
                    <Button onClick={this.inputHandler}>Sign in</Button>
                </Form>
                <hr/>
                <br></br>
                <p>{this.state.username}</p>
                <p>{this.state.email}</p>
                <p>{this.state.city + " " + this.state.address + " " + this.state.zip}</p>






            </div>
        )
    }
}

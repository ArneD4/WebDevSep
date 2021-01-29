import React, { Component } from 'react'
import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Checked, isChecked } from './Checked'
import '../style.css'



export default class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            firstName: '',
            lastName: '',
            username: '',
            email: '',
            confemail:'',
            password: '',
            confpassword:'',
            check: false

        }

    }

    onChange = e => {
        this.setState({ check: e.target.checked })
    }

    inputHandler = (e) => {
        if (this.state.check === true) {
            if(this.email === this.confemail){
                console.log('mail ok')
            }

            // this.setState({
            //     firstName: e.target.parentElement.firstName.value,
            //     lastName: e.target.parentElement.lastName.value,
            //     username: e.target.parentElement.Username.value,
            //     email: e.target.parentElement.Email.value,
            //     confemail:e.target.parentElement.confEmail.value,
            //     password: e.target.parentElement.Password.value,
            //     confpassword:e.target.parentElement.confPassword.value,

            // })
        } else {
            alert('please check the box')
        }

    }



    render() {
        const { isChecked } = this.state.check
        return (
            <div>
                <h1>User Registration Form</h1>
                <Form>
                    <Row from>
                        <Col md={4}>
                            <FormGroup>
                                <Label for="firstName">First Name</Label>
                                <Input type="text" name="firstName" id="firstName" />
                            </FormGroup>
                        </Col>
                        <Col md={4}>
                            <FormGroup>
                                <Label for="lastName">Last Name</Label>
                                <Input type="text" name="lastName" id="lastName" />
                            </FormGroup>
                        </Col>
                        <Col md={4}>
                            <FormGroup>
                                <Label for="Username">Username</Label>
                                <Input type="text" name="username" id="Username" placeholder="username placeholder" />
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row form>
                        <Col md={6}>
                            <FormGroup>
                                <Label for="Email">Email</Label>
                                <Input type="email" name="email" id="Email" placeholder="" />
                            </FormGroup>
                        </Col>
                        <Col md={6}>
                            <FormGroup>
                                <Label for="confEmail">Confirm Email</Label>
                                <Input type="email" name="confemail" id="confEmail" placeholder="" />
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row form>
                        <Col md={6}>
                            <FormGroup>
                                <Label for="Password">Password</Label>
                                <Input type="password" name="password" id="Password" placeholder="" />
                            </FormGroup>
                        </Col>
                        <Col md={6}>
                            <FormGroup>
                                <Label for="confPassword">Confirm Password</Label>
                                <Input type="password" name="confpassword" id="confPassword" placeholder="" />
                            </FormGroup>
                        </Col>
                    </Row>
                    <FormGroup check>
                        <Label for="chb" check>
                            <Input type="checkbox" className="form-check d-inline" id="chb" required checked={isChecked}
                                onChange={this.onChange} />
                        Accept</Label>
                    </FormGroup>
                    <Button onClick={this.inputHandler}>Save</Button>
                </Form>
                <hr />
                <br></br>
                <p>{this.state.firstName}</p>
                <p>{this.state.lastName}</p>
                <p>{this.state.username}</p>
                <p>{this.state.email}</p>
                <p>{this.state.password}</p>
                







            </div>
        )
    }
}

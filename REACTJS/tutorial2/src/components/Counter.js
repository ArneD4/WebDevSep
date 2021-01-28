import React, { Component } from 'react'
import {Container,Row,Col,Button,Input} from 'reactstrap'

export default class Counter extends Component {
    constructor(props){
        super(props)
        this.state={
            count:0
        }
        //this.Increace = this.Increace.bind(this) ===>only if you don't use arrow funtion vvv
    }



    Increace=()=>{
        console.log("Increase Function and non-arrow func")
        this.setState({
            count:this.state.count+1
        })
    }

    Decrease=()=>{
        if(this.state.count <= 0){
            this.setState({
                count:0
            })}
            else{
                this.setState({
            count:this.state.count-1
        })}
        }
   

    render(){
        return (
            <div>
                <Container>
                    <Row>
                        <Col>
                        <h1>
                            {this.props.projectname}
                        </h1>
                        <p className="lead font-weight-bold text-danger">
                            Count: {this.state.count}
                        </p>
                        <hr/>
                        <Button className="mr-1" onClick={this.Increace} color="danger">+</Button>
                        <Button onClick={this.Decrease} color="dark">-</Button>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

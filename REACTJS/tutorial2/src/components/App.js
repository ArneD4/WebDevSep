import React, { Component } from 'react'
//import ChildComponnent from './ChildComponnent'
import Counter from './Counter'
import {Container,Row,Col,Button,Input,Label} from 'reactstrap'


class App extends Component {
    constructor(props){
        super(props)
        this.state={
            username:'Arne',
            password:'1234',
            age:12,
            scores:[1,2,3,4,5],
            nesteObj: {
                test:[1,2]
            },
            myFunction:()=>console.log('test'),
            comment: ''
        }
    }

    // contactFormValues ={
    //     p:v,
    //     fullname:"Michel Jack",
    //     age:30
    // }


TestFunction = () =>{
    console.log('hello world')
    this.setState({
        username:'Oguz',
        age:this.state.age +1
    })
    console.log(this.state.username)
}


inputHandler=(e)=>{
    console.log(e.target.value)
    this.setState({
        comment:e.target.value
    })
}

    render() {
        return (
            <div>
                {/* {console.log(this.props)}
                <ChildComponnent/>
                {console.log(this.state)}
                {this.state.myFunction()}
                <a href="#" onClick={this.TestFunction}>Click me</a> */}
                <Counter projectname="Counter Project V1.0"/>
                <hr/>
                <Input type="text" className="bg-primary text-white"onChange={this.inputHandler}/>
                <p className="lead">
                    {this.state.comment}
                </p>
                <Label>fullname:</Label>
                <Input type="text" className="bg-primary text-white"onChange={this.inputHandler}/>
                <Label>age:</Label>
                <Input type="text" className="bg-primary text-white"onChange={this.inputHandler}/>
                <Label>email:</Label>
                <Input type="text" className="bg-primary text-white"onChange={this.inputHandler}/>
               <Button>Send Message</Button>
            </div>
        )
    }
}

export default App
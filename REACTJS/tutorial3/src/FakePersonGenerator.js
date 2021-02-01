import React, { Component } from 'react'
import {Container} from 'reactstrap'
/*
npm install reactstrap bootstrap faker
*/




class FakePersonGenerator extends Component {


    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(json => console.log(json))
    }

    componentWillUnmount(){
        console.log('unmount')
    }

    render() {
        return (
            <div>
                <Container>
                    <h1>Fake User Data</h1>
                    {console.log(this.props.fakepeople)}
                    {
                        this.props.fakepeople.map((people,index)=>(
                            <p className="lead">NAME: <b>{people.name}</b><br/>
                            USERNAME: <b>{people.username}</b>
                            {/* <img src={people.avatar}></img> */}
                            </p>
                           
                        ))
                    }
                </Container>
            </div>
        )
    }
}

export default FakePersonGenerator
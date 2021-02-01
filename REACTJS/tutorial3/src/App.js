import React, { Component } from 'react'
import FakePersonGenerator from './FakePersonGenerator'
import Faker from 'faker'
import { Button, Input } from 'reactstrap'


export default class App extends Component {
  
  state = {
    people: [],
    blogposts: []
  };



  FakePerson = (howmany) => { // howmany = 19
    // function param
    
    let people = this.state.people;
    for (let index = 0; index < howmany; index++) {
      let name = Faker.name.findName()
      let username = Faker.internet.userName()
      let avatar = Faker.internet.avatar();
      let obj = {
        name: name,
        username: username,
        avatar: avatar
      }
      //  console.log(obj)
      people.push(obj)
    }

    this.setState({
      people: people
    })
  }

  render() {
    return (
      <div>
        <Input type="number" id="howmany" />
        <Button onClick={()=>this.FakePerson(document.getElementById('howmany').value)}>Generate Fake Data</Button>
        <FakePersonGenerator fakepeople={this.state.people}/>
      </div>
    )
  }
}
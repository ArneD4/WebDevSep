import React from 'react'
import Header from './components/header'
import Home from './components/home'
import Footer from './components/footer'

let number = 10
let studentNames = ['Mikail','Priya','Suzan','Adnan']
let myDB = [
    {
        id:1,
        title:'Lorem',
        body:'Ipsum'
    },
    {
        id:2,
        title:'Lorem1',
        body:'Ipsum'
    },
    {
        id:3,
        title:'Lorem2',
        body:'Ipsum'
    }
]

function sum(a,b){
    return a+b
}

export const App = () => {
    return (
        <div class="fluid">
            <div class="container" >
            <Header/>
            <Home companyname='intecbrussel' webdevclass={myDB} mathSum={sum}/>
            {console.log(number)}
            {console.log(studentNames)}
            {
                studentNames.map((student,index)=>(
                    <p className="lead" key={index}>{student}</p>
                ))
            }
            {/* {
                myDB.map((obj,index)=>(
                    <p>{obj.title}</p>
                ))
            } */}
            <Footer/>
            </div>
        </div>
    )
}

export default App

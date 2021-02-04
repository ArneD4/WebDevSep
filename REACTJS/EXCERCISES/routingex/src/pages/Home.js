import React from 'react'
import { nikeAir } from "../data";

function Home() {
    return (
        <div>
            {nikeAir.map((item,i)=>{
                return(
                    <img src={item.image} alt='hi'></img>
                )
            })}
        </div>
    )
}

export default Home

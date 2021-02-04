import React, { useState } from 'react'
import { ArticleDetail } from "./ArticleDetail";
import { Link, Route } from 'react-router-dom'
import { nikeAir } from "../data";


function Blog({data}) {
    const [state, setState] = useState({
        post: {}
    })


    const fetchSingle = async (id)=>{
        let res = nikeAir[id]
        let data = await res;
       // console.log(data)
        setState({
            post:data
        })
    }

    return (
        <div>
            {data.map((item, i) => {
                return (
                    <Link onClick={()=>fetchSingle(item.id)}   key={i} to={`/blog/${item.name}`} style={{ 'display': 'block' }}>{item.name}</Link>
                )
            })}
            <Route path='/blog/:id' render={() => <ArticleDetail single={state.post} />} />

        </div>
    )
}

export default Blog

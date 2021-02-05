import React from "react";
import { useParams } from 'react-router-dom'


export const ArticleDetail = ({single}) => {

  return (
    <>
      <div className="stock-container">
                  <div >
                    {console.log(single)}
                      <h3>{single.name}</h3>
                      <p>{single.year}</p>
                      <img src={`img${single.id}.jpg`} alt="hi"></img>
                      <p>{single.body}</p>
                  </div>
      </div>
    </>
  );
};
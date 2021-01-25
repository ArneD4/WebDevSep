const fetch = require('node-fetch')
let shoes ={ "data" : [
     {
         "name": "Air Max 1",
         "year": 1987,
         "image" : "img/img1.jpg"
     },
     {
         "name": "Air Max Light",
         "year": 1989,
         "image" : "img/img2.jpg"
     },
     {
         "name": "Air Max 90",
         "year": 1990,
         "image" : "img/img3.jpg"
     },
     {
         "name": "Air Max 180",
         "year": 1991,
         "image" : "img/img4.jpg"
     },
     {
         "name": "Air Max 93",
         "year": 1993,
         "image" : "img/img5.jpg"
     },
     {
         "name": "Air Max 95",
         "year": 1995,
         "image" : "img/img6.jpg"
     },
     {
         "name": "Air Max 97",
         "year": 1997,
         "image" : "img/img7.jpg"
     },
     {
         "name": "Air Max Plus Tuned",
         "year": 1998,
         "image" : "img/img8.jpg"
     },
     {
         "name": "Air Max 360",
         "year": 2006,
         "image" : "img/img9.jpg"
     },
     {
         "name": "Air VaporMax",
         "year": 2017,
         "image" : "img/img10.jpg"
     },
     {
         "name": "Air Max 270",
         "year": 2018,
         "image" : "img/img11.jpg"
     },
     {
         "name": "Air Max 720",
         "year": 2019,
         "image" : "img/img12.jpg"
     }
     ]}
console.log(shoes.data.year)
     const getData = (req,res)=>{
          res.render('blogs',{shoes:shoes})

      }
module.exports = {getData}
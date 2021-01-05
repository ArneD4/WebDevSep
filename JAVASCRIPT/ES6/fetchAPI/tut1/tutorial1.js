let response = document.querySelector('.return');

const api = "https://jsonplaceholder.typicode.com/users"

fetch(api)
//converted data into json format
.then(intec=>intec.json())
.then(data=>data.filter((e)=>{
    //extracted the specific data by cityname
    return e.address.city == 'McKenziehaven'
}))
.then(lastupdated=>{
    // here we have the last filtered data. Ready to print
    console.log(lastupdated)
})

/*
retrieve data from users api endpoint

parse response data as json format

filter this data by city 'McKenziehaven'

and the nprint data in the last method
*/
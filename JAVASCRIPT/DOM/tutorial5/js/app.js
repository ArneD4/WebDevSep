// selectors

//var firstname = document.querySelector('.firstname')//one by one ==> not efficient

// var inputs = document.querySelectorAll('input');

// var firstname = inputs[0] //first element in input object is firstname

// console.log(firstname.placeholder)

var [firstname, lastname, email, street, city, zipcode,birthdate,phone,pass,confirm_pass,term] = document.querySelectorAll('input'); // 

var [country,gender,country_code] = document.querySelectorAll('select');

var submitBtn = document.querySelector('button');

let formDatas=[]

submitBtn.addEventListener('click',function(e){

    if(term.checked == true){
        console.log('accepted')
        let formObj = {
            firstname:firstname.value,
            lastname:lastname.value,
            email:email.value,
            street:street.value,
            city:city.value,
            country:country.selectedOptions[0].value,
            zipcode:zipcode.value,
            gender:gender.selectedOptions[0].value,
            phone:country_code.selectedOptions[0].value + phone.value, //(countrycode) + (given phonenumber)
            password:pass.value,
            confirm:confirm_pass.value
        }
        console.log(formObj)
        let temp = formDatas
        temp.push(formObj) //update
        formDatas = temp; //updated array with new obj
    }else{
        console.log('not accepted')
    }
    console.log(formDatas)
    e.preventDefault();

});
// function myArray(){
//     return ['name1','name2','name3']
// }

// var [n1,n2,n3] = myArray();

// console.log(n2)


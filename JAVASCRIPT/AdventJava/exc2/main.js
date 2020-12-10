"use strict";

//console.log(data[1])
let correctPass = 0;

for(let i=0;i<data.length;i++){
    let count = 0;
    let min = 0;
    let max = 0;
    let input = [];
    let temp = [];
    let userPass = [];
    let checkPass = [];
    let check = [];
    let amount = [];
    let letter = [];
    let amountLetters;

    input = data[i]//single lines of data
    temp = input.split(":")// single lines split on the :
        checkPass = temp[0]//get first of two after split => check part
        userPass = temp[1]//=>password part
    check = checkPass.split(" ")// get letters and amounts
         amount = check[0]//how many times the letter can occur
         letter = check[1]// what letter
    amount = amount.replace("-",":")
    amount = amount.split(":")
        min = amount[0];
        max = amount[1];
    userPass =  [...userPass]
    
    for(let x=0;x<userPass.length;x++){
        if(userPass[x]=== letter){
          count++
            }
    }
    console.log(count,userPass)

    
       if(count<=max && count>=min){
                correctPass++
                 //console.log('this input is correct',input)
                 console.log(count,min,max,letter,input)
                     
     }
}
console.log('the amount of correct passwords',correctPass)

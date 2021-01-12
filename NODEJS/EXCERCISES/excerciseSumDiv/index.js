// import nodejs modules
const SumModule = require('./customModule/Sum')
const DivisionModule = require('./customModule/Division')
const {a,b,c,sum,division} = require('./customModule/manyFunctions')

// use here
SumModule(5,4)
DivisionModule(12,3)
a()
b()
c()
sum(10,10)
division(20,4)
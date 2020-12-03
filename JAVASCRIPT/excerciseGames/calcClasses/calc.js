// calc project with Classes

//new calc
// Calc.protoype.newCalc = function(num1,math,num2){
//     let tempObj = {
//         x:num1,
//         math:math,
//         y:num2
//     }
//     console.log(tempObj)

// }

function Math(x,y){
    this.x = x,
    this.y = y
}



Math.prototype.Sum = function(x,y){
   let result = this.x + this.y
    console.log(result)
}
Math.prototype.Abs = function(x,y){
   let result = this.x - this.y
    console.log(result)
}
Math.prototype.Mult = function(x,y){
   let result = this.x * this.y
    console.log(result)
}
Math.prototype.Div = function(x,y){
   let result = this.x / this.y
    console.log(result)
}



let calc1 = new Math(3,4)
calc1.Sum();
calc1.Abs();
calc1.Mult();
calc1.Div();

// // Math.property.Min = function(x,y,z){
// //     let result = x - y;
// //     console.log(result)
// // }

// // Math.prototype.Division = function(x,y,z){
// //     let result = x / y;
// //     console.log(result)
// // }

// // Math.prototype.Multiply = function(x,y,z){
// //     let result = x * y;
// //     console.log(result)
// // }


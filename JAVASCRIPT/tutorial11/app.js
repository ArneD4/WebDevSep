// var person = {
//     firstName: "Arne",
//     lastName: "Defoor",
//     id : 420369,
//     fullName : function() {
//         return this.firstName + " " + this.lastName;
//     }
// }

const placeOrder= {
    type:"pizza margherrita",
    price:15,
    tax:1.21,
    extra: "olives",
    valuta: "euro",
    order:function(){
    console.log(`You orderd ${this.type} with ${this.extra}`) 
    } 



    ,
    totalPrice: function(){
    console.log(
   `the price is ${this.price} ${this.valuta}, the price with tax is ${this.price*this.tax}. You orderd: ${this.type} with ${this.extra}`
    )
    
    },
    pizzaLife: function(x){
    console.log("You know... " + x )
    console.log(this.price*this.tax +" is a good deal for a very nice pizza, but " + this.price/5 +" "+ this.valuta +" that would be a cheap pizza")
    
    }
   }
   //functies aanroepen:
   placeOrder.order();
   placeOrder.totalPrice();
   placeOrder.pizzaLife(" pizza4life ");//parameter doorgeven
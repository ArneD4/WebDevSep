let item = {
    name: "keyboard",
    type: "Yamaha",
    model: "XC10",
    price: 950,
    inStock:true,
    showItem:function(){
        console.log('this shows the item')
    },
    ratings: {
        musicians: 4,
        experts: 3.5,
        amateurs: 5,
        Beethoven: 1.5,
    }
}


let print = `Your Order: ${item.type}  ${item.model}  ${item.name} 
the average rating of this product is: ${(item.ratings.musicians+item.ratings.experts+item.ratings.amateurs+item.ratings.Beethoven) / 4}
Is the item avaible? ${item.inStock}
The item costs £${item.price}
`


item.showItem();





// // let avg = `the average rating of this product is: ${(item.ratings.musicians+item.ratings.experts+item.ratings.amateurs+item.ratings.Beethoven) / 4}`


console.log(print)


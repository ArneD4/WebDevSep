// MAP

let keyName='Intecbrussel'
let value = {
    a:1,
    b:2
}
const myFunc = ()=>console.log('hello map!')

//init map
let DataCollection = new Map(); //map
let test = [1,2,3]

// set method
DataCollection.set('key1','intecbrussel')
DataCollection.set(keyName,value)
DataCollection.set('myFunction',myFunc)
DataCollection.set('obj1',{x:6,y:7})
DataCollection.set('firstname','Jack')
DataCollection.set(true,false)
DataCollection.set('age',29)
DataCollection.set('myArray',[1,2,3])
DataCollection.set(test,[3,2,2])

// get method
let getResult;

getResult = DataCollection.get(keyName)
getResult = DataCollection.get('obj1')
getResult = DataCollection.get('myFunction')
getReslut = DataCollection.get(true)
getResult = DataCollection.get('myArray')
getResult = DataCollection.get('[1,2,3]')
//getResult()

// has(keyName)

getResult = DataCollection.has(keyName)
getResult = DataCollection.has('WebDeveloper') //False
getResult = DataCollection.has(test)
//
let DataCollection1 = new Map([['Player','Jack'],['score',100]]);
//
DataCollection.forEach((value,key,MapItself)=>console.log(`Key:${key} Value:${value}`))
//
console.log('_____')
for (let [key,value] of DataCollection.entries()){
    console.log(`${key} ${value}`)
}

console.log(DataCollection)
console.log(DataCollection1)
console.log(getResult)


//SET  ==>

let SetCollection = new Set();

SetCollection.add(100)
SetCollection.add(100)
SetCollection.add('intecbrussel')
SetCollection.add('intecbrussel')
SetCollection.add(true)
SetCollection.add(true)
SetCollection.add([55,66,77])
SetCollection.add({x:1,y:2,z:3})

let SetCollectionResult;
//size method
SetCollectionResult = SetCollection.size;

SetCollectionResult = SetCollection.delete('intecbrussel')

//has => does value exist?
SetCollectionResult = SetCollection.has(1000) //false 1000 is not in the collection

//clear()
//SetCollection.clear()

//ForEach
SetCollection.forEach(value =>console.log(value))

// console.log('SetCollectionResult => ',SetCollectionResult)
// console.log(typeof SetCollection)
// console.log(SetCollection)

let iterator = SetCollection.values();

console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
// console.log(SetCollection.values())

// for(value of SetCollection){
//     console.log(value)
// }

while(iterator.next().done !=true){
    console.log(iterator.next())
}

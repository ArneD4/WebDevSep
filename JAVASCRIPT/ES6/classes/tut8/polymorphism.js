class Animal {
// baseclass or mainclass
    makeSound(){
        console.log('Animal sound')
    }
}

class Cat extends Animal {
    makeSound(){
        console.log('Meow meow')
    }
}

class Dog extends Animal {
    makeSound(){
        console.log('Waf Waf')
    }
}

let a = new Animal
a.makeSound()

////


class Person {
    constructor(name,age){
        this.name = name
        this.age = age
    }

    print(){
        let output = `name: ${this.name}\nage: ${this.age}`
        console.log(output)
    }
}

class Student extends Person {
    constructor(name,age,course){
        super(name,age)
        this.course=course
    }

    print(){
        let output = `name: ${this.name}\nage: ${this.age}\ncourse: ${this.course}`
        console.log(output)
    }
}

//let st1 = new Person('Arne',25);
let st1 = new Student('Arne',25,'WebDev');
st1.print()

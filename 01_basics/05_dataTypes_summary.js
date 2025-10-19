// const id = undefined;

// const id; both are same

const id = Symbol('123')

const anotherId = Symbol('123')

console.log(id === anotherId)
console.log(typeof id)

const bigNumber = 345677434343454546667n
console.log(typeof bigNumber)

//Arrays

const heroes = ["shaktiman","Iron Man","Hulk"]
console.log(heroes)
console.log(typeof heroes)

//Object

let myObj = {
    name: "gaurav",

    age: 50
}

//function
const myFunction = function(){
    console.log("Hello World")
}
myFunction()
console.log(typeof myFunction)

const outsideTemp = null
console.log(typeof outsideTemp)

//********************Memory********************
//Stack (Primitive)
//Heap (Non-Primitive)

let name = "gaurav"
let anotherName = name 
anotherName = "saurabh"
console.log(name)
console.log(anotherName)

/* It will print gaurav and saurabh because anotherName
will store the copy of name in stack */

let userOne ={
    email:"user@google.com",
    upi:"user@ybl"
}

let userTwo = userOne

userTwo.email = "gaurav@google.com"
console.log(userOne.email)
console.log(userTwo.email)

/*both will print the same value because they will point
the same reference in memory in heap if we change the one
value both will be changed*/  





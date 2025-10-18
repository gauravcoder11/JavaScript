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


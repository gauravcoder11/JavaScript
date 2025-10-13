// let score = 300

// console.log(typeof score)
// console.log(typeof(score))

// let total = "30ab"

// let valueInNumber = Number(total)

// console.log(typeof valueInNumber)
// console.log(valueInNumber)

// let check1 = null

// let conversion = Number(check1)
// console.log(typeof(conversion))
// console.log(conversion)

// let check2 = undefined

// let conversion2 = Number(check2)
// console.log(typeof(conversion2))
// console.log(conversion2)

// let check3 = "22ab"

// let conversion3 = Number(check3)
// console.log(typeof(conversion3))
// console.log(conversion3)

// let check4 = true

// let conversion4 = Number(check4)
// console.log(typeof(conversion4))
// console.log(conversion4)

//After conversion result will be
//"33" => 33
//"33ab" => NaN
//true => 1; false => 0


//Boolean conversion
let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn)

let a =""

let conv = Boolean(a)
// console.log(conv)

let b ="Gaurav"

let conv2 = Boolean(b)
// console.log(conv2)

let c = undefined

let conv3 = Boolean(c)
// console.log(conv3)

//1 => true; 0 => false;
//"" => false;
//"gaurav" => true
//null => false
//undefined => false;

//String Conversion

let someNumber = 33
let stringNumber = String(someNumber)
// console.log(stringNumber)
// console.log(typeof(stringNumber))

//********************************Operations ***********************************

let value = 3
let negValue = -value

console.log(negValue)

//** exponentiation operator
console.log(2**3)

let str1 = "hello"
let str2 = " gaurav"
let str3 = str1+str2
console.log(str3)


console.log(1+"2")
console.log("1"+2+2)
console.log(1+2+"2")

console.log(true)
console.log(+true)
console.log(+"")

let x = 3;
const y = x++;
console.log(x,y);

// x is 4; y is 3

let x2 = 3n;
const y2 = x2++;
console.log(x2,y2);

// x2 is 4n; y2 is 3n
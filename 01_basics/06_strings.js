const name = "gaurav"
const age = 21

console.log(name +age+" value")

console.log(`My name is ${name} and my age ${age}`)

const str1 = new String('String')
console.log(str1[0])

console.log(str1.__proto__)
console.log(str1.charAt(3))
console.log(str1.toUpperCase)
console.log(str1.toUpperCase())
console.log(str1.indexOf('t'))

const newString = str1.substring(0,4)
console.log(newString)

const str2 = "       gaurav      "
console.log(str2.trim())

const str3 = "gaurav_pathak_20"
console.log(str3.split('_'))
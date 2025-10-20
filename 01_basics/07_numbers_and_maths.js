const balance = new Number(100)
console.log(balance)

console.log(balance.toString())
console.log(balance.toString().length)

const x =100
console.log(x.toString())
console.log(x.toFixed(2))

const y = 123.876
console.log(y.toPrecision(3))

const hundreds = 100000000
console.log(hundreds.toLocaleString('en-IN'))

//******************Maths*******************

console.log(Math)
console.log(Math.abs(-4))
console.log(Math.abs(4))
console.log(Math.round(4.5))
console.log(Math.round(4.6))
console.log(Math.round(4.4))
console.log(Math.abs(4.5))

console.log(Math.min(2,3,6,5,1))
console.log(Math.max(2,3,6,5,1))

const min =10;
const max = 20
console.log(Math.floor(Math.random()*(max-min+1)+min))

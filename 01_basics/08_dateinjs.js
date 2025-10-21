let date = new Date()
console.log(date)
console.log(date.toString())
console.log(date.toISOString())
console.log(date.toDateString())
console.log(date.toLocaleString())

let myTimeStamp = Date.now()
console.log(myTimeStamp)
//milisecond to second after dividing by 1000
console.log(Math.floor(myTimeStamp/1000))


let newDate = new Date()
console.log(newDate)
console.log(newDate.getDate())
console.log(newDate.getDay())
console.log(newDate.getMonth())
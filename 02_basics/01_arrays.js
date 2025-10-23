
const anotherArr = new Array(5,6,7,8,9)
// console.log(anotherArr)

const myArr2 = ["gaurav",'shyam','raghav','ashish','ayush']
// console.log(myArr2)

//Array Methods

const myArr = [1,2,3,4]
myArr.push(5)
console.log(myArr)
myArr.pop() //this will remove the last element of an array
myArr.unshift(10)
//it will add element in array at starting but this is
//a time consuming operation because we need to shift
//every element of an array
console.log(myArr)

const myArr3 = [8,9,3,4,5,6]
// console.log(myArr3.shift())
//.shift() remove element from starting
console.log(myArr3)
console.log(myArr3.includes(9))
console.log(myArr3.includes(19))
//.includes(element) return boolean values

console.log(myArr3.indexOf(9))

const newArr = myArr3.join()
console.log(newArr)
console.log(typeof newArr)


console.log("A",myArr3)
const nArr = myArr3.slice(1,4)
console.log(nArr)

//slice() method 
const newArr2 = [3,4,5,2,5,6,7,8]
console.log(newArr2.slice(1,3))

//splice() method
const newArr3 =[3,4,5,7,3,2,6,8,9,7]
//Removing elements using splice()
let removed = newArr3.splice(2,3)
console.log(removed)
console.log(newArr3)

//Adding elements using splice()
let a = [10,20,30]
a.splice(1,0,50,100)
console.log(a)

//Replacing element using splice()
let b =[1,2,4,5,7,8,4,2,1,3]
b.splice(2,3,10,20,30)
console.log(b)

//using negative index
//this will remove the element from last
let c =[2,3,4,5,6,7,6]
c.splice(-2,1)
//-2 means second element from last 
console.log(c)
const marvel_heroes =["Iron-Man","Thor","Hulk"]

const dc_heroes =["superman","batman","flash"]

// marvel_heroes.push(dc_heroes) 
// console.log(marvel_heroes)
// console.log(marvel_heroes[3][1])

const allHeroes =marvel_heroes.concat(dc_heroes)
console.log(allHeroes)


//*******(...) spread operator use in js********
//1.merging array using spread operator
const all_new_heroes = [...marvel_heroes,...dc_heroes]
console.log(all_new_heroes)

//2.copying an array using spread operator
let a=[1,2,3]
let b = [...a]
console.log(a)
console.log(a===b)

//3.Passing array elements as function arguments
function sum(x,y,z){
    return x+y+z
}
let nums =[10,20,30]
//by using spread operator every element of array
//works as a single element
console.log(sum(...nums))

//4.copying or merging objects
let obj1 ={name:'gaurav',age:21}
let obj2 = {city:'Delhi'}

let merged = {...obj1,...obj2}
console.log(merged)

//*************** (...)Rest Operator ***************

//1.Rest in function parameters
function show(...args){
    console.log(args)
}
show(1,2,3,4)

//2.Rest in array destructuring
let[first,second,...rest] =[10,20,30,40,50,30,60,30]
console.log(first)
console.log(second)
console.log(rest)

//3.Rest in object destructuring 
let user ={name:"gaurav",age:21,city:"Pune"}
let{name,...details} = user
console.log(name)
console.log(details)

//flat() function
const another_Array = [1,2,3,4,[5,7,8,9],9,[34,5,[6,7,8]]]

const another_real_Array = another_Array.flat(Infinity)
console.log(another_real_Array)

console.log(Array.isArray("gaurav"))
console.log(Array.from("gaurav"))
console.log(Array.from({name:"gaurav"}))

let score1 =100
let score2 =200
let score3 =300

console.log(Array.of(score1,score2,score3))





// const { useEffect } = require("react");

const mySym = Symbol("key-1")
let user ={
    name:"gaurav",
    [mySym]:"mykey1",
    "full_name":"gaurav kumar",
    age:21,
    email:"abc@gmail.com",
    phone_no:"87654321",
    isLoggedIn: false,
    loggedInDay:["Monday","Thursday"]
}
console.log(user.name);
console.log(user.full_name)
console.log(user["email"])
console.log(user["full_name"])

user.email = "xyz@gmail.com"
console.log(user.email)
//freeze is used for freezing obkect so we cant change it
// Object.freeze(user)
user.email = "fgh@gmail.com"
//now the value will be same because we freeze it so value that we changed above
//will not  be changed
console.log(user)
user.greeting = function(){
    console.log("Hello User")
}
user.greeting2 = function(){
    console.log(`Hello User ${this.name}`)
}

user.greeting()
user.greeting2()

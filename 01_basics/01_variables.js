const accountId = 14435;
let accountEmail = "gaurav@gmail.com"
var accountPass = "12345"

accountCity = "Mumbai";
// accountId = 2
console.log(accountId)
accountEmail = "abc@gmail.com"

accountCity = "Bengaluru";

console.log(accountEmail)

let accountState
console.table([accountEmail,accountId,accountPass,accountCity,accountState])

/*
 Prefer not to use var
 because of issue in block scope and functional scope
 */
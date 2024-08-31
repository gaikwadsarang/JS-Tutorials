// Primitive 

// 7 types : String, Number, Boolean, null, undefined, bigInt, symbol

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol("123")

const bigNumber = 121334354365654546567554n

// Reference (Non-primitive)

//Arrays, Objects, Functions

const heroes = ["shaktiman", "naagraj", "doga"]
let Obj = {
    name: "sarang",
    age: 22
}

const myFunction= function() {
    console.log("hello World");
}

// console.log(typeof heroes);

// Memory
// Stack(Primitive), Heap(non-primitive)

let myYoutubename = "sarangGaikwad"
let anotherName = myYoutubename
anotherName = "djBravo"

// console.log(myYoutubename);

// console.log(anotherName);

let userOne = {
    email: "123@gmail.com",
    upi: "userh@ybl"
}

let usertwo = userOne

usertwo.email = "user@gmail.com"

console.log(userOne.email);
console.log(usertwo.email);







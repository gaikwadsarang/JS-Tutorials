// let myName = "sarang     "
// let myChannel = "chai    "

// console.log(myName.trueLength);


let myHeroes = ["thor", "spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`spidy power is ${this.spiderman}`);
    }
}
 
Object.prototype.sarang = function(){
    console.log(`sarang is present in all object`);
}

Array.prototype.heySarang = function(){
    console.log(`hey Sarang`);
}
// myHeroes.sarang()
// heroPower.sarang()
// myHeroes.heySarang()
// heroPower.heySarang()

// inheritance

const user = {
    name: "sarang",
    email: "12@gmail.com"
}
const teacher = {
    makeVideo: true,
}
const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssigment: "Js Assignment",
    fullTime: true,
    __proto__: TeachingSupport
}

teacher.__proto__ = user

// modern syntax

Object.setPrototypeOf(TeachingSupport, teacher)

let anotherUserName = "sarang     "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    // console.log(`${this.name}`);
    console.log(`True length is : ${this.trim().length}`);
}
anotherUserName.trueLength()
"sarangg".trueLength()
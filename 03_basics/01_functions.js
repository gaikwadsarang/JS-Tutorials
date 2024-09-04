
function sayMyName() {
    console.log("S");
console.log("A");
console.log("R");
console.log("A");
console.log("N");
console.log("G");
}

// sayMyName()

// function addTwoNumbers(num1, num2) {
// console.log(num1 + num2)
// }
function addTwoNumbers(num1, num2) {
    // let result = num1 + num2
    // return result

    return num1 + num2
}
    
const result = addTwoNumbers(3, 4)

// console.log(result);


function loginUserMessage(username = "sam") {
    if (!username) {
        
console.log("please enter username");
return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("sarang"))
// console.log(loginUserMessage())

function calculateCartPrice(...num1) { // Rest operator
return num1
}

// console.log(calculateCartPrice(200, 400, 500, 2000));


const user = {
    username: "sarang",
    price: 99
}

function handelObject(anyobject) {
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handelObject(user)
handelObject({
    username: "sam",
    price: 299
})

const myNewArray = [200, 300, 400, 600]

function returnSecondVAlue(getArray) {
    return getArray[1]
}

// console.log(returnSecondVAlue(myNewArray));
console.log(returnSecondVAlue([200, 300, 400, 600]));

// for of 

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
   // console.log(num);
}

const greetings = "hello world!"
for (const greet of greetings) {
    if (greet == " ") {
        //console.log("empty");
        //break
    }
    //console.log(`each char is ${greet}`)
    
}

// Maps
// used to store unique value in key value pair in fcfs manner
const map = new Map()
map.set('IN', "India")
map.set('USA', "United states of america")
map.set('Fr', "France")

// console.log(map);

for (const [key, value] of map) {
    console.log(key, "-", value);
    
}

const mtObject = {
    'game1': 'NSf',
    'game2': 'spiderman'
}

// for (const [key, value] of myObject) {
//     console.log(key, "-", value);
    
// }

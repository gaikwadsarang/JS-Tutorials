// var c = 300
let a= 300
if (true) {
    let a = 10
    const b = 20
    // console.log("inner: ", a);
    
}

// console.log(a);
// console.log(b);
// console.log(c);


function one () {
    const username = "sarang"

    function two () {
        const website = "yutube"
        console.log(username);
        
    }
    // console.log(website);

    two()
}
// one()

if (true) {
    const username = "sarang"
    if (username === "sarang") {
        const website = " youtube"
        // console.log(username + website);
        
    }
    // console.log(website);
    
}
// console.log(username);


// Interesting 
console.log(addone(5))
function addone(num) {
    return num +1 
}



// addTwo(5)
const addTwo = function(num) {
    return num + 2
}

addTwo(5)


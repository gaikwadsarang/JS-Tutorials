const myNums = [1, 2, 3]

// const myTotal = myNums.reduce(function (acc, curval) {
//     console.log(`acc: ${acc} and curval: ${curval}`);
    
//     return acc + curval
// }, 0)

const myTotal = myNums.reduce( (acc, curval) => {
    return acc + curval
}, 0)

console.log(myTotal);

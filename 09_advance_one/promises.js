const promiseOne = new Promise(function(resolve, reject){
    //Do An Async task
    //DB calls, cryptography , network
    setTimeout(function(){
        console.log(`Async task is completed`);
        resolve()
    }, 1000)
})

promiseOne.then(function(){
    console.log("Promise consumed");  
})

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log(`Asyn await 2`);
        resolve()
    }, 1000)
}).then(function(){
    console.log("Async 2 resolved");
})

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(() => {
        resolve({username: "sarang", email: "sarang@gamil.com"})
    }, 1000);
})

promiseThree.then((user) => {
console.log(user);
})

const promiseFour = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = true
        if(!error) {
            resolve({username: "sadaa", passwaord: "123"})
        }else {
            reject('ERROR: something went wrong')
        }
    }, 1000);
})

promiseFour
.then((user) => {
    console.log(user);
    return user.username
})
.then((username) => {
console.log(username);
})
.catch((error) => {
    console.log(error);   
})
.finally(() => {
    console.log("finally done");
})

const promiseFive = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = false
        if(!error) {
            resolve({username: "javascript", passwaord: "123"})
        }else {
            reject('ERROR: javascript went wrong')
        }
    }, 1000);
});

async function consumePromiseFive(){
const resopnse = await promiseFive
console.log(resopnse);

}
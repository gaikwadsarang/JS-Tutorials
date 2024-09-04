const user = {
    username: "sarang",
    price: 99,

    welcomeMessage: function() {
        console.log(`${this.username}, welcome to website`);
        console.log(this);
        
    }

}

// user.welcomeMessage()

// user.username = "sam"
// user.welcomeMessage()

// console.log(this);

// function chai() {
//     let username = "sarang"
//     console.log(this.username);   
// }

// chai()

// const chai = function () {
//     let username = "sarang"
//     console.log(this.username);   
// }

// const chai = () => {
//     let username = "sarang"
//    console.log(this); 
// }
// chai()
function SetUSername(username) {
    this.username = username
    console.log("called");

}

function createUser(username, email, password) {
    SetUSername.call(this, username)
    this.email = email
    this.password = password
}

const chai = new createUser("chai", "12@gmail.com", "123")

console.log(chai);

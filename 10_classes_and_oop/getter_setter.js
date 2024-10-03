class User {
    constructor(email, password) {
        this.email = email;
        this.password = password
    }
    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value
    }
    get password(){
        return `${this._password}sarang`
    }
    set password(value){
        this._password = value.toUpperCase()
    }
}

const sarang = new User("sarang@.com", "abc")
console.log(sarang.email);

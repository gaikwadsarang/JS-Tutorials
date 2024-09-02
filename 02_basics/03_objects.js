// singleton

// object literals

mySym = Symbol("key1")

const JsUser = {
    name: "sarang",
    "full Name": "Sarang Gaikwad",
    [mySym]: "mykey1",
    age: 21,
    location: "aurangabad",
    email: "sarang@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["monday", "tuesday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full Name"]);
// console.log(JsUser[mySym]);


JsUser.email = "sarang123@gmail.com"
Object.freeze(JsUser)
// console.log(JsUser);


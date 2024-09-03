// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "sarang@gmail.com",
    fullname: {
        userFullame: {
            firstname: "sarang",
            lastname: "gaikwad"
        }
    }
}

// console.log(regularUser.fullname.userFullame.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

// const obj3 = {obj1, obj2}
// const obj3 = Object.assign({}, obj1, obj2)

const obj3 = {...obj1, ...obj2}
// console.log(obj3);


const users= []

// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));


const course = {
    coursename: "js",
    price: "000",
    teacher: "bravo"
}

// course.teacher

const {teacher} = course

// console.log(teacher);

{
    
}




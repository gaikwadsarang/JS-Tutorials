// Immediately Invoked function Expressions (IIFE)

(function chai() {
    //named IIFE
    console.log(`DB CONNECTED`);
    
})();

( (name) => {
console.log(`BW CONNECTED TWO ${name}`);

}) ("sarang");
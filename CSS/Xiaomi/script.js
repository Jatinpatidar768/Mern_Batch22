// pure function


// function add(a, b) {
//   return a + b;
// }
// console.log(add(3,8));
// console.log(add(3,8));


// impure function
// let age = 10;
// function impureFunction() {
//     console.log(age++, ' = its a impure Function');

// }
// impureFunction();
// impureFunction();
// impureFunction();



// let count = 0;

// function increment() {
//   count++;
//   return count;
// }

// console.log(increment());
// console.log(increment());


// *callback function->
// esa function jo kisi dusri function kee calling par as an argument pass hota hai to us argument vale function ko callback function bola jata hai*/

//Noob
function callback(){
    console.log("this is callback function ")
}

function higherOrderFunction(callback){
   
    console.log("This is higher order function bcs its taking other function as a parameter")
    callbacks();
}
// console.log(callback);
higherOrderFunction(callback);




 




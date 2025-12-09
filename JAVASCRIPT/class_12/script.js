// array method
// 1.push()
// 2.pop()
// 3.shift()
// 4.unshift()
// 5.splice()

//  splice method most imp for interview
// arry.splice(insert,delete,update) tino kam ek sath kar sakte hai
// insert=index Value
// delete=delete Element
// update=insert element


// let arry=[10,20,30,40,50,60]
// arry.splice(1,1,66);
// console.log(arry);

// array method and sting homw work




// slice method:
// array ka sab part delete karna hai called slice and original me change nhi hota hai
// let arr=[3,5,7,9,13];
// console.log(arr);

// let subpart = arr.slice(2,5)
// console.log(subpart);



// map and filter; original array modify nhi hoga
// map: array ke each element per operation karana hai to map and element ka use karta hai, index ka use nhi karta
// use in add to card map method
// let arr=[1,2,3,4];
// let newarray=arr.map((ek)=>ek+5);
// console.log(arr);
// console.log(newarray);

// filter: esme filter lagta hai baki sabhi value ko print karega
// let arr=[1,2,3,4];
// let newarray=arr.filter((ek)=>ek>1);
// console.log(arr);
// console.log(newarray);


// find method: first matching single element sirf  ek hi value print karega after check operation
// let arr=[1,2,3,4];
// let newarray=arr.find((ek)=>ek>2);
// console.log(arr);
// console.log(newarray);

// some method: only first matching number and return value is true/false.
// * .some() stops early once it finds a match
// * It does not change the original array.
// Works like the opposite of .every().


// let arr=[1,4,3,6];
// let sum=arr.some((ek)=>ek>3);
// console.log(arr);
// console.log(sum);


// every,reducer,join,flat

// every method:
// he .every() method checks whether all elements in an array satisfy a condition.
// It returns:
// true → if every element passes the test
// false → if any element fails
// .every() stops early as soon as any element returns false.
// It does not modify the original array.
// Opposite of .some()
// .some() → at least one true
// .every() → all true




// let arr=[2,2,3,3];
// let sum=arr.every((ek)=>ek>=2);
// console.log(arr);
// console.log(sum);


// flat method ,join,reduce
let arr=[1,[2,[3,4]]];
let sum=arr.flat(2);
console.log(sum);





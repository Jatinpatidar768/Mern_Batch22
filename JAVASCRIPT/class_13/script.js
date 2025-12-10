// ternary operator: use of sort calculation and ans provide in the form of yes or no
// let age=10;
// let adult=age>18? "adult":"below";
// console.log(adult);





// destructuring:array and object
// let a=[1,2,3,4];
// let [g,b,c,d]=a;
// console.log(a);



// currying:

// its normal function
// function add(a,b) {
//   return a + b;
// }
// console.log(add(2,3));




// it is currying function
// function add(a) {
// return function(b)
// {
//   return a + b;
// }
// }
// console.log(add(2)(3));











// this keyword:default window object
// 1.use case

// let a="jatib";
// console.log(this);



// use case 2
// function data(){
//     console.log("variable");  
     
// }
//   console.log(this);




// use case 3
// let ob1={
//      id:102,
//      bame:"var",
//      print:function(){
//         console.log(this.id);
//         // console.log(this);
        
        
    //  }
// }
// ob1.print();


// use case4:arrow function
// let data=()=>{
    
//        console.log(this);
// }
// data()




// shallow copy
    //   const ob1={
    //     bid:101,
    //     bname:"eixte",
    //     companyname:{
    //         name:"jsj",
    //         rename:10000
    //     },

    //   }    
      
    //   const ob2=ob1;
    //   console.log(ob1);
    //     ob1.bid=5000;
    //    console.log(ob2);
      
    




// deep copy:
// const ob1={
//     id:101,
//     namw:'jatin',
//     info:{
//         name1:"pat",
//         rename:1
//     },
//     address:"c21"
// }



// const ob2=JSON.parse(JSON.stringify(ob1));
// console.log(ob2);
// ob2.id=500;
// console.log(ob1);
// ob1.info.name1="kya";


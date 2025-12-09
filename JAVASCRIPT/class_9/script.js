// let rev=0;
// let num=325;
// while(num!=0){
//     rem=num%10;
//     rev=rev*10+rem;
//     num= Math.floor(num/10)
// }
// console.log(rev);



// let rev=0;
// let num=101010101015;
// let jat=num;
// while(num>0){
//     rem=num%10;
//     rev=rev*10+rem;
//     num= Math.floor(num/10)
// }

// if(jat==rev){
//     console.log("number is palindrom");
    
// }
// else{
//     console.log("number is not palindrom");
    
// }






// let num= 12346;
// let count=0;
// while(num !=0)
// {
//    num =Math.floor (num/10);
//    count ++;
// }
// console.log(`The number contains ${count} digits `);




// let rev=0;
// let num=142;
// let n=num;
// while(num!=0){
//     rem=num%10;
//     rev=rev*10+rem;
//     num= Math.floor(num/10)
  
// }
//   if(n%3==0){
//       console.log(rev  + "is divisible of 3");
      
//     }
//     else{
//       console.log(rev + "is not divisible by 3");
      
//     }
// console.log(rev);



// let n=4567;
// let sum=0;
// while(n>0){
//   sum+=n%10;
//    n = Math.floor(n / 10);

// }
// console.log(sum);



// let n=432;
// let sum=1;
// while(n>0){
//   sum*=n%10;
//    n = Math.floor(n / 10);

// }
// console.log(sum);



// let n=683;
// let value=0;
// while(n>0){
//   let digit=n%10;
//   if(digit>value){
//     value=digit;
//   }
//     n = Math.floor(n / 10);
// }
// console.log("largest number is"+value);




let n=974123456788;
let value=9;
while(n>0){
  let digit=n%10;
  if(digit<value){
    value=digit;
  }
    n = Math.floor(n / 10);
}
console.log("smallest number is"+value);



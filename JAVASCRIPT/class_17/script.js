

// // import and export: we use variable ,function , class and all in other file.first define export jo variable use karna hai or jis file me use karna hai vha import
// 2 type export
// 1.Name: use of name help of{}in import file and use multiple time in one file
// 2.default:without {} and use onlu one time in one file
export  let a=90;
//   export let b=60;
//  let z=a+b;
// console.log(z);
// console.log(a);





// // set time out and interval

// set time out: delay any task for a second and mili seond
// setTimeout(()=>{
//     console.log("jatin");
    
// },1000)


// // interval: repet again and again after few seconds
// setInterval(()=>{
//     console.log("jatin");
    
// },1000)







// // event loop:
// console.log("jatin"); // first print because its syncronos js
// setTimeout(()=>{
//     console.log("patt");
    
// });
// Promise= new Promise((res,rej)=>res("what"));// third print because is a higher proirity
// Promise.then(e=>console.log(e));
// console.log("ji");  // second print because its syncronos js




// Dom in js: DOM is a programming interface for HTML & XML.
// It represents the webpage as a tree of nodes (objects).
// JavaScript uses DOM to read, modify, add, or delete elements

// // method 
// 1.getElementById() : select only one same element/tag
// 2.getElementsByClassName(): select all same classes and return html colletion
// 3.getElementsByTagName(): all same tag ko acces karna ho return html colletion
// 4.querySelector(): return node list and select only first matching element
// 4.querySelectorAl():


// // 1.html collection and 
// // 2.node list 

// // both are aray like object means object me array ki kuch property ko use karta hai ex. indexing and .length

// let elem = document.getElementById('head-1')
// console.log(elem);
// console.log(elem.length)  //not working in the case of id
// console.log(elem[2])

// let multiParagraph = document.getElementsByClassName('para')
// console.log(multiParagraph)
// console.log(multiParagraph.length)
// console.log(multiParagraph[2])

// let tagName = document.getElementsByTagName('p')
// console.log(tagName.length)
// console.log(tagName[5])

// let firstMachingElement = document.querySelector('.para')
// console.log(firstMachingElement)

// let allElement = document.querySelectorAll('.para')
// console.log(allElement)




// // element ke contain ko access karna 2type
// // 1.textContent: contain nikalna ho ,jesa code likhenge vesa hi dikhai dega including space and all and html ke jesa dikhana ho
// // 2. innerText: ui ke hisab se dikhana ho 
// // 3. innerhtml: slow and unsafe

// let elem = document.getElementById('head-1')
// console.log(elem.textContent)

// let elem = document.getElementById('head-1')
// console.log(elem.innerHTML)

// let elem = document.getElementById('head-1')
// elem.textContent = 'dabba'
// console.log(elem.textContent)
// console.log(elem.innerText)

// // how to access attribute:
// 1.get attribute: print one  attribute
// 2.set attribute: add attribute without change in html

// let elem = document.getElementById('head-1')
// console.log(elem.getAttribute('id'))

// let paragrapg = document.getElementsByTagName('p')
// console.log(paragrapg)
// paragrapg[4].setAttribute('class','para-2')




// // creating ands remove child
// let  div = document.createElement("p")
// div.textContent = "Hello"

// document.body.appendChild(div)
// document.body.removeChild(div)
// div.remove()


// // Styling with DOM
// let elem = document.getElementById('head-1')
// elem.style.color="red";
// console.log(elem.innerHTML)



// // event handling in dom
// jat.addEventListener("click", () => {
//   console.log("Clicked")
// })



// setTimeout(() => {
//   console.log("Timeout");

//   Promise.resolve().then(() => {
//     console.log("Promise inside timeout");
//   });

// });



// // Event Delegation?:Event delegation is a technique where you attach one event listener to a parent element instead of adding listeners to each child element.


// const menu = document.getElementById("menu");

// menu.addEventListener("click", function (event) {
//   if (event.target.tagName === "LI") {
//     console.log("Clicked:", event.target.textContent);
//   }
// });




// What is defer?defer is an HTML attribute used in the <script> tag that tells the browser:
// Download the JavaScript file in parallel, but execute it only after the HTML is fully parsed.
// withoyt defer is null because JS runs before HTML is loaded.
// best use dom script
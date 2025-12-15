

// set time out and interval

// set time out: delay any task for a second and mili seond
// setTimeout(()=>{
//     console.log("jatin");
    
// },1000)


// interval: repet again and again after few seconds
// setInterval(()=>{
//     console.log("jatin");
    
// },1000)







// event loop:
// console.log("jatin"); // first print because its syncronos js
// setTimeout(()=>{
//     console.log("patt");
    
// });
// Promise= new Promise((res,rej)=>res("what"));// third print because is a higher proirity
// Promise.then(e=>console.log(e));
// console.log("ji");  // second print because its syncronos js




// Dom in js: presantation of tree structure
// method 
// 1.getElementById()
// 2.getElementsByClassName()
// 3.getElementsByTagName()
// 4.querySelector()
// 4.querySelectorAl()


// let elem = document.getElementById('head-1')
// console.log(elem)

// let multiParagraph = document.getElementsByClassName('para')
// // console.log(multiParagraph)
// console.log(multiParagraph.length)
// console.log(multiParagraph[2])

// let tagName = document.getElementsByTagName('p')
// console.log(tagName.length)
// console.log(tagName[2])

// let firstMachingElement = document.querySelector('.para')
// console.log(firstMachingElement)

// let allElement = document.querySelectorAll('.para')
// console.log(allElement)




// let elem = document.getElementById('head-1')
// console.log(elem.textContent)

// let elem = document.getElementById('head-1')
// // elem.textContent = 'dabba'
// console.log(elem.textContent)
// console.log(elem.innerText)

// let elem = document.getElementById('head-1')
// console.log(elem.getAttribute('id'))

let paragrapg = document.getElementsByTagName('p')
console.log(paragrapg)
paragrapg[0].setAttribute('class','para-6')



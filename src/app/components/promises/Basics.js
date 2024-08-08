"use client";

const Basics = () => {
  //Create Promise
//   let promise = new Promise((resolve, reject) => {
//         setTimeout(()=>{
//             let success = true
//             if (success) {
//                 resolve("Success");
//               } else {
//                 reject("Failed");
//               }
//         },5000)

//       });

//         setInterval(() => {
//             console.log(promise, "promise");
//         }, 3000);

//     let success = 12;
//     if (success) {
//       resolve("Success");
//     } else {
//       reject("Failed");
//     }
//   })
//   console.log(promise,'promise')

//   using promise
//   promise.then((m) => console.log(m)).catch((error) => console.log(error));



  //Handling Multiple Promises - Promise.all
//   let promise1 = Promise.resolve(3)
//   let promise2 = new Promise((resolve)=>setTimeout(()=>{
//     resolve('Success')
//   },5000))

// setInterval(()=>{
//    Promise.all([promise1,promise2])
//    .then((message)=>console.log(message))
//    .catch(error=>console.log(error))
    
// },10000)

//Handling Multiple Promise - Promise.race
// let promise1 =   new Promise(resolve=>setTimeout(resolve,500,'Promise1'))
// let promise2 = new Promise(resolve=>setTimeout(resolve,1000,'Promise2'))
// Promise.race([promise1,promise2])
// .then((message)=>console.log(message))

//Async/Await 
// const fetchData = async()=>{
//     try{
//         const response = await fetch('https://api.example.com/data')
//         let data =  await response.json()
//         console.log(data)
//     }catch(error){
//         console.log(error.message)
//     }

// }
// fetchData()

  
};

export default Basics;

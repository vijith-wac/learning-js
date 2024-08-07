'use client'
const FunCombining =()=>{

    //object destructuring
    const printPerson = ({name,age})=>{
        console.log(`Name is ${name} and age is ${age}`)
    }
    const person = {name:'John', age:20}
    printPerson(person)

    //Array Destructuring

    const printArr=([first,...rest])=>{
        console.log(first,'arr')
        console.log(...rest,'rest')
    }
    const arr = [2,3,5]
    printArr(arr)
}

export default FunCombining
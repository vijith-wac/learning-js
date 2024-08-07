'use client'
const BasicMethods = ()=>{
    const arr = [1,2,3]
    console.log(arr, 'actual')
    arr.push(4)
    console.log(arr,'push 4')
    arr.pop()
    console.log(arr, 'pop')
    arr.shift()
    console.log(arr, 'shift')
    arr.unshift(5)
    console.log(arr, 'unshift 5')
}

export default BasicMethods
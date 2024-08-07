'use client'
const DestructuringArray = () => {
    //Array Destructure
    const arr= [1,2,3]
    const [one,two] = arr
    console.log({one,two})
    
    //Skipping Item
    const[first,,third] = arr
    console.log({first,third}, 'skip')

    //Default values
    const arr1 = [1,5]
    const[o,t=2]= arr1
    console.log({o,t},'default')

    //Rest element
    const rest = [1,2,3,4,5]
    const [f,...r] = rest
    console.log({f,r})

    
    
};

export default DestructuringArray
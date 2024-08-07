'use client'
const ObjectDestructuring = ()=>{
    //Basic
    const obj = {name:'John', age:25}
    const {name, age} = obj
    console.log(name,age , 'basic')

    //Renaming Variable
    const {name:fullName, age:userAge} = obj
    console.log({fullName,userAge}, 'Rename')

    //Default Values
    const obj2 = {name1:'John'}
    const{name1,age1=20} = obj2
    console.log({name1,age1},'default age')


    //nested destructuring
    const obj3 = { name2: 'John', address: { city: 'New York', zip: '10001' } }
    const {name2,address:{city,zip}} = obj3
    console.log({name})
    console.log({city})
    console.log({zip})

    //Rest properties
    const obj4 = { name3: 'John', city: 'New York', zip: '10001'  }
    const {name3,...rest} = obj4
    console.log({name3,rest}) 
}


export default ObjectDestructuring
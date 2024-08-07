'use client'
const AdvancedConcepts = ()=>{
    let person ={
        fName :'John',
        age : 20
    }
    console.log({...person},'rest')



//Json Methods
//json.stringyfy()

let personNew = {name:'John', age:20}
let json = JSON.stringify(personNew)
console.log(json,'json stringify')

//json.parse()
let personStringify = '{"name":"John","age":30}';
let personParse = JSON.parse(personStringify)
console.log(personParse,'Person Parse')


}

export default AdvancedConcepts
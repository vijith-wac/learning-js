'use client'
const BasicConcepts = ()=>{
 //Creation way 1
 const obj1 = { name:'John', age:20}
 console.log(obj1)

 //Creation way 2
 const obj2 = new Object()
 obj2.name ='John'
 obj2.age = 25
 console.log(obj2,'new object()')

//Accessing the property way 1 dot notation
console.log(obj1.name)

//Accessing the property way 2 bracket notation
console.log(obj1['name'])

//Adding the property
obj1.course = "CS"
console.log(obj1, 'adding the course property')

//Deleting the propery
delete obj1.course
console.log(obj1,'Course Deleted')

}





export default BasicConcepts
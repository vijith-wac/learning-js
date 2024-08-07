"use client";
const IntermediateConcepts = () => {
  //Methods
  //Adding Methods
  let person = {
    name: "John",
    age: 20,
    greet: function () {
      console.log("Hello my name is " + this.name);
    },
  };
  person.greet();

  //ES6 Method
  let personNew = {
    name: "John",
    age: 20,
    greet() {
      console.log("Hello my name is " + this.name, "Es6");
    },
  };
  personNew.greet();

  //this keyword
  let personThis = {
    name: "John",
    greet() {
      console.log(this, "this");
    },
  };
  personThis.greet();

  //Objects Methods
  console.log(Object.keys(person), "keys method");
  console.log(Object.values(person), "Values method");
  console.log(Object.entries(person), "Entries");

  const targetObj = { a: 1, b: 4 };
  const sourceObj = { b: 2, c: 3 };
  Object.assign(targetObj, sourceObj);
  console.log(targetObj, "assign method");

  //Freeze
  let objFreeze = {
    name: "John",
  };
  Object.freeze(objFreeze);
  //   objFreeze.name = "Smith"
//   objFreeze.age = 10
  console.log(objFreeze, "Freeze");

  //Seal
  let objSeal = {
    name:'John'
  }
  Object.seal(objSeal)
  objSeal.name='Smith'
//   objSeal.age = 20
  console.log(objSeal,'seal object')
  


};

export default IntermediateConcepts;

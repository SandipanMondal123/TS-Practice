//educative.io/answers/how-to-execute-the-typescript-file-using-the-command-line -> how to run typescript in different ways


import {another} from './structures';

class Person {
    name: string
    age: number
    constructor(){
      this.name = "Sandy"
      this.age = 20
    }
    static greeting(name:string): string {
      name = name;
      return name;
    }
    
    greeting(name:string): string {
      this.name = name;
      return this.name;
    }
 }
 
 // motor vehicle object
 class Motor extends Person{
   make: string = ''
   model: string = ''
   color: string = ''
  
   
   constructor(){
    super();
    
   }

   allInfo = () => {
    let check = new Person()
    console.log(check);
    return `${this.name} is ${this.age} years old and has a ${this.color} ${this.make} ${this.model}`;
   }

 }
 
 // create a new instance of each
 const person1 = new Person()
 const motor1 = new Motor()
 //const person2: Motor = new Person()

 // warning Property 'age' does not exist on type 'Motor'
let newName: string = person1.greeting('John Doe');

let li = [1,2,3,4,5,6,7]

const newLI = li.filter(num => {
  return num > 4
})
console.log(newLI)

console.log(newName, person1.age)
console.log(motor1.allInfo())
let change: another = new another()

console.log(Person.greeting('HELLO'));
console.log(person1.greeting('hello'));

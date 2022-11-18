//educative.io/answers/how-to-execute-the-typescript-file-using-the-command-line -> how to run typescript in different ways


import {another} from './structures';

class Person {
    //A instace variable, if it is not declared, is automatically public 
    name: string
    age: number
    constructor(){
      this.name = "Sandy"
      this.age = 20
      console.log("went here")
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
  
   constructor(make: string, mode: string, color: string){
    super();
    this.make = make
    this.model = mode
    this.color = color
   }

   allInfo = () => {
    let check = new Person()
    console.log(check);
    return `${this.name} is ${this.age} years old and has a ${this.color} ${this.make} ${this.model}`;
   }

 }
 
 // create a new instance of each
 const person1 = new Person()
 const motor1 = new Motor("BMW", "3-Series", "Blueish Green")
 
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


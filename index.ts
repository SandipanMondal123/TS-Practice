//educative.io/answers/how-to-execute-the-typescript-file-using-the-command-line -> how to run typescript in different ways


class Person {
    //A instace variable, if it is not declared, is automatically public 
    name: string = ''
    age: number = 0

    function greeting(name: string): string{
        this.name = name;
        return this.name;
    }
 }
 
 // motor vehicle object
 class Motor {
   make: string = ''
   model: string = ''
   color: string = ''
 }
 
 // create a new instance of each
 const person1 = new Person()
 const motor1 = new Motor()
 
 // warning Property 'age' does not exist on type 'Motor'
let newName = person1.greeting('John Doe');

console.log(newName)
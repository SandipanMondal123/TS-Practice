//educative.io/answers/how-to-execute-the-typescript-file-using-the-command-line -> how to run typescript in different ways
var Person = /** @class */ (function () {
    function Person() {
        //A instace variable, if it is not declared, is automatically public
        this.name = '';
    }
    return Person;
}());
// motor vehicle object
var Motor = /** @class */ (function () {
    function Motor() {
        this.make = '';
        this.model = '';
        this.color = '';
    }
    return Motor;
}());
// create a new instance of each
var person1 = new Person();
var motor1 = new Motor();
// warning Property 'age' does not exist on type 'Motor'
console.log(person1.age);

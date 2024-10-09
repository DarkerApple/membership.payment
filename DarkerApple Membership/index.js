// Comment (//)

//let
let Name = 'Ryan';
console.log(Name) ;

//cannot be a reserved keyword
// Should be meaningful
//Cannot start with a number (1name)
//Cannot contain a space or hyphen (-)
//Are Case-sensitive

//const
const interestRate = 0.3;

//Primitive/Value Types

let string = 'Ryan'; //String Literal
let num = 12; //Number Literal
let bloolean = false; //Boolean Literal
let Undefined = undefined; 
let notSelected = null;

//JavaScript is <em>Dynamic Script<em>

//Reference Types

//Object
let person = {
    name: 'DarkerApple',
    password: 20120528
};

    // Dot Notation
    person.name = 'Ryan';

    //Bracket Notation: In Bracket Notation, user can select notation unlike dot notation like below
    let selection = 'name'
    person[selection] = 'AppleGreenRyan';

console.log(person);
console.log(person.name);

//arrays
let selectedColors = ['red', 'blue'];
selectedColors[2] = 'green';
console.log(selectedColors);
console.log(selectedColors[0]);
console.log(selectedColors.length);

//fuctions (Performing a task)
function greet(firstName, lastName) {
    console.log('Hello ' + firstName + ' ' + lastName);
}

greet('Ryan', 'Jung');

//types of functions (Calculating a value)
function square(number) {
    return number * number;
}

let squaredNumber = square(2);
console.log(squaredNumber);

//How to round, ceil, floor, trunc, and etc... a number
let x = 3.14
let y = 3.1
let z = 3
x = Math.round(x)
x = Math.ceil(x)
x = Math.trunc(x)
x = Math.pow(x)
x = Math.sqrt(x)
x = Math.log(x)
x = Math.sin(x)
x = Math.cos(x)
x = Math.tan(x)
x = Math.abs(x)
x = Math.sign(x)

let max;
max = Math.max(x, y, z)

let min;
min = Math.min(x, y, z)
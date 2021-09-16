// Primitives: number, string, boolean
// More complex types: arrays, objects
// Function types, parameters

//Primitives

let age: number;

age = 12;

let userName: string;

userName = 'Max';

let isInstructor: boolean;

isInstructor = true;

// More complex types

let hobbies: string[];

hobbies = ['Sports', 'Chess', 'Cooking'];

type Person = {
    name: string,
    age: number
};

let person: Person;

person = {
    name: 'Max',
    age: 32
};

let people: Person [];

people = [{name: 'Max', age: 32}, {name: 'Adam', age: 32}];
console.log(people);

// Type inference

let course: string | number = 'React - The complete guide';

course = 12345;

// Function & Types

function add(a: number, b: number): number {
    return a + b;
}

function printoutput(value: any) {
    console.log(value);
}

// Generics

function insertAtBeginning<T>(array: T[],value: T){
    const newArray = [value,...array];
    return newArray;
}

const demoArray = [1,2,3];

const updatedArray = insertAtBeginning(demoArray,-1); // [-1,1,2,3]

// updatedArray.split('');

class Student {
    // private firstName: string;
    // private lastName: string;
    // private age: number;
    // private courses: string[];

    constructor(private firstName: string,
                private lastLame: string,
                private age: number,
                private courses: string[]){}

    enroll(courseName: string){
        this.courses.push((courseName));
    }

    listCourses(){
        return this.courses.slice();
    }
}

const student = new Student('Adam','Falk',32, ['Math','English']);
student.enroll('Science');
student.listCourses();


// student.courses => Angular, React




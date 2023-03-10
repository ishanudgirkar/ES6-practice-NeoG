//Q1 Create an object person with two properties, "name" and "age" and then updates the "age" property to a new value. 
// Initial age should be 30.

const person = { name: `Ishan`, age: 30 };

person.age = 35;

console.log(person.age);

//Q2 Write a function that takes an object car and returns true if the car is a sports car (i.e. has a horsepower
// property greater than or equal to 300)

const isSportsCar = (car) => car.horsepower >= 300;

const car1 = { make: "Porsche", model: "911", horsepower: 450 };
const car2 = { make: "Toyota", model: "Camry", horsepower: 200 };

console.log(isSportsCar(car1));
console.log(isSportsCar(car2));


//Q3 Write a function that takes an object person and a number num as arguments and returns true if the person's age 
//plus num is greater than 21. Otherwise, it should return false.

const isEligible = (person, num) => person.age + num > 21;

const person1 = { name: "Ajay", age: 20 };
console.log(isEligible(person1, 1));
console.log(isEligible(person1, 2));

//Q4 Write a function that takes an object blog and returns true if the blog has more than 1000 views 
//(i.e. has a views property greater than 1000)

const getViews = (blog) => blog.views > 1000;

const blog1 = {
  title: "How to Learn JavaScript",
  author: "John Doe",
  views: 1430
};
const blog2 = {
  title: "10 Reasons to Start a Blog",
  author: "Jane Smith",
  views: 500
};
console.log(getViews(blog1));
console.log(getViews(blog2));


//Q5 Swap the values of two variables using array destructuring.

const arr = [1, 2];
const [b, a] = arr;

console.log(a);
console.log(b);

//Q6 Convert this function into ES6 with least amount of characters.

/*
function add(a = 30, b = 0) {
    return a + b;
  }

console.log(add(2, 3));

*/

const add = (a = 30, b = 0) => a + b;

console.log(add(45,5));
// console.log(add(,));

//Q7 Write an ES6 function combineObjects with least amount of characters which merges two objects into one.

const combineObjects = ({ a, b }, { c, d }) => ({ a, b, c, d });
// const combineObjects = ({ a, b } , { c, d }) => ({a:a,b:b,c:c,d:d});

const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const combinedObj = combineObjects(obj1, obj2);
console.log(combinedObj);


//Q8 8. Convert the function getData, into an ES6 function with last amount of characters.  // Hint: Destructuring


const getData = ({ name, address: { city } }) => {
    console.log(name);
    console.log(city);
  };
  
  const person = {
    name: "John Doe",
    address: {
      city: "New York",
      state: "NY"
    }
  };
  getData(person);
  


//Q9 Write a function that takes a string as input and returns the string in all uppercase letters.


const stringToUpperCase = (str) => {
    let newstr = "";
    for (let i = 0; i < str.length; i++) {
      newstr += String.fromCharCode(str.charCodeAt(i) - 32);
    }
    return newstr;
  };
  
  console.log(stringToUpperCase("ishan"));


//Q10 Write a function that takes two strings as input and concatenates them together.

// const concatenateStrings = (str1, str2) => str1 + str2;

const concatenateStrings = (str1, str2) => {
    let newstr = "";
    for (let i = 0; i < str1.length; i++) {
      newstr += str1.charAt(i);
      // newstr[i] = str1.charAt(i);
    }
    for (let i = 0; i < str2.length; i++) {
      newstr += str2.charAt(i);
    }
    return newstr;
  };
  
  console.log(concatenateStrings("hello", "world"));


//Q11 Write a function that takes an array and returns the last element in the array.

const lastElement = arr => arr[arr.length-1]
// console.log(lastElement([1, 2, 3, 4, 5])); 

// const lastElement = ([...rest , l]) => l  *rest must be used at last
console.log(lastElement([1, 2, 3, 4, 5]));


//Q12 Write a function that takes an array and returns the first element of the array.

const firstElement = ([a, ...rest]) => a;

console.log(firstElement([1, 2, 3, 4, 5]));

//Q13 Write a function that takes an array and a number and returns the sum of first element and the number.


const sumFirstElement = (arr, num) => arr[0] + num;

console.log(sumFirstElement([1, 2, 3], 5));


//Q14 Write a function that takes an array and returns the sum of first and last element.

const sumFirstAndLast = (arr) => arr[0] + arr[arr.length - 1];

console.log(sumFirstAndLast([1, 2, 3, 4, 8]));


//Q15 Write a function that takes an object representing a person's information (name, age, occupation) and
// returns a template literal that includes the person's name and age in a sentence.

const personInfo = (person) => `${person.name} is ${person.age} years old`;
// const personInfo = (person) => `${person.name is person.age years old}`;
const personfirst = { name: "John", age: 25, occupation: "Software Engineer" };
const personsecond = { name: "Jane", age: 45, occupation: "Data Analyst" };
console.log(personInfo(personfirst));
console.log(personInfo(personsecond));


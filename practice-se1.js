//Q1 Write a function that takes a user's age and determines if they are old enough to vote (age 18 or older).

const isEligibleToVote = (num) => num >= 18;

console.log(isEligibleToVote(20));

//Q2 Write a function that takes two numbers as input and determines which one is greater.

const isGreater = (a, b) =>
  a > b ? `${a} is greater than ${b}` : `${b} is greater than ${a}`;

console.log(isGreater(3, 4));
console.log(isGreater(10, 5));

//Q3 Write a function that takes a number as input and determines if it is positive or negative.

const checkNum = (num) => (num >= 0 ? `positive number` : `negative number`);

console.log(checkNum(-8));
console.log(checkNum(22));

//Q4 Write a function that takes a number as input and determines if it is even or odd.

const isEvenOdd = (num) => (num % 2 === 0 ? `Even number` : `odd number`);
console.log(isEvenOdd(8));
console.log(isEvenOdd(5));

//Q5 Write a function that takes a string as input and determines if it contains the letter 'a' or ‘A’.

const checkForAlphabetA = (str) => {
  for (let i = 0; i < str.length; i++) {
    if (str.charCodeAt(i) === 65 || str.charCodeAt(i) === 97) {
      return `Includes A`;
    }
  }
  return `Does not includes A`;
};

console.log(checkForAlphabetA("Jane"));
console.log(checkForAlphabetA("Jeep"));

//Q6 Write a function that takes a string as input and determines if it is longer than 5 characters.

const checkLength = (str) => {
  if (str.length >= 5) {
    return `more than 5 charecters`;
  } else {
    return `less than 5 charecters`;
  }
};

console.log(checkLength("Jeep"));
console.log(checkLength("Programming"));

//Q7 Write a function that takes a number as input and determines if it is between 1 and 10.


const isBetweenOneAndTen = (num) => num >= 1 && num <= 10;

console.log(isBetweenOneAndTen(5));
console.log(isBetweenOneAndTen(15));
console.log(isBetweenOneAndTen(10));
console.log(isBetweenOneAndTen(11));



//Q8 Write a function that takes a string as input and determines if it contains the word "hello".

const isHelloPresent = (str) =>
  `${str.toUpperCase().includes(`HELLO`) ? true : false}`;

console.log(isHelloPresent("Hello World"));
console.log(isHelloPresent("World"));



//Q9 Write a function that takes a number as input and determines if it is a multiple of 3.

const isMultipleOfThree = (num) => num % 3 === 0;

console.log(isMultipleOfThree(5));
console.log(isMultipleOfThree(9));


//Q10 Write a function which takes in a number as input and returns it after multiplying by 10.

const multiplyByTen = num => num*10

console.log(multiplyByTen(40)) 


//Q11 Console individual values of the product object using object destructuring.

const product = {
  title: "iPhone",
  price: 5999,
  description: "The iPhone is a smartphone developed by Apple"
};

const { title, price, description } = product;

console.log(title);
console.log(price);
console.log(description);

//Q12 Create an object book with properties title, author, and pages. 
// Create a function getBookDetails that takes a book object as a parameter and returns if the book has more than 100 pages.

const book = { title: "wake up", author: "john terry", pages: 98 };

const getBookDetails = (book) => book.pages >= 100;

console.log(getBookDetails(book));

//Q13 Create a function changeOccupation that takes an object person and a string newOccupation as parameters, and changes 
// the occupation property of the person object to the newOccupation. Log the person object to the console before and after calling the function.

const person = { name: "Ishan", age: 23, occupation: "student" };

const changeOccupation = (person, str) => {
  person.occupation = str;
  console.log(person);
};

console.log(person);
changeOccupation(person, "Web developer");


//Q14 Given an array numbers containing the numbers 1, 2, and 3. Use array destructuring to log each number to the console.

const numbers = [1, 2, 3];

const [a, b, c] = numbers;

console.log(a);
console.log(b);
console.log(c);


//Q15 Convert the given function into ES6 with least amount of characters.

    
  /*
    	function defaultParamsFunc(a, b, c) {
        if (c === undefined) {
            c = 4;
        }
        return a * b * c;
    	};
    	console.log(defaultParamsFunc(3, 1)); // 12
    	console.log(defaultParamsFunc(3, 10)); // 120

*/
    


const defaultParamsFunc = (a, b, c = 4) => a * b * c;

console.log(defaultParamsFunc(3, 1));
console.log(defaultParamsFunc(3, 10));
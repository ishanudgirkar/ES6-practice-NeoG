// Q1 Write an ES6 function that accepts an array of integers and returns the maximum element in the array.

const getMaxElement = arr => {
    let maxElement = Number.NEGATIVE_INFINITY;
    for(let i = 0 ; i < arr.length ; i++){
     if(arr[i] > arr[i+1] && arr[i] > maxElement){
         maxElement = arr[i]
     }
    }
    return maxElement

}

let array = [4,78,8,3,6,0,12,34]
console.log(getMaxElement(array))

// Q2 Write an ES6 function that takes an array of numbers and returns the average of all the numbers. Avoid using in-built methods.
 
const calculateAverage = arr => {
    let sum = 0 ;
    for(let i = 0 ; i < arr.length ; i++){
      sum += arr[i]
   }
   return sum / arr.length
}

console.log(calculateAverage([1, 2, 3, 4, 5]));

// Q3 write an ES6 function that takes an array of numbers and converts even numbers to odd numbers by adding 1 to that number.
const convertEvenToOdd = arr => {
    for(let i = 0 ; i < arr.length ; i++){
     if(arr[i] % 2 === 0){
     arr[i] = arr[i] + 1
  }
 }
 return arr
}

var numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(convertEvenToOdd(numArr));

//Q4 write an ES6 function that takes an array of words and returns an array with all its elements whose length is greater than 5.

const filterWords = arr => {
    let arr1 =[]
    for (let i = 0; i < arr.length;i++){
      if(arr[i].length > 5){
      arr1.push(arr[i])
  }
 }
 return arr1
}


var words = ["eat", "sleep", "code", "repeat", "neog", "community"];
console.log(filterWords(words)) // ["repeat", "community"]

//Q5 Write an ES6 function that takes an array of strings and returns a new array with each string capitalized.

const capitalizeWords = arr => {
    let arr1 = []
    for (let i = 0; i < arr.length;i++){
        arr1.push(arr[i].toUpperCase())
    }
    return arr1
}

console.log(capitalizeWords(["eat", "sleep", "code", "repeat"]))
// ["EAT", "SLEEP", "CODE", "REPEAT"]

//Q 6 Write an ES6 function that takes an array of objects and a property name and returns a new array with
 // only the values of that property. Avoid using in-built methods.


 const getValues = (arr,str) => {
    let ans =[]
    let output 
    for (let i = 0; i < arr.length;i++){
        if(arr[i][str]){
        ans.push(arr[i][str])
        output = ans
    }else{
      output = `Element does not exists`
    }
    }
    return output

 }

 console.log(
    getValues(
      [
        { name: "John", age: 21 },
        { name: "Mary", age: 22 },
        { name: "Peter", age: 23 },
      ],
      "name"
    )
  ); // ["John", "Mary", "Peter"]
  console.log(
   getValues(
     [
       { name: "John", age: 21 },
       { name: "Mary", age: 22 },
       { name: "Peter", age: 23 },
     ],
     "grade"
   )
 );

// Q7 Write an ES6 function that takes the users' details and returns the data with team ID. Avoid using in-built methods.

const podAndTeamAllocation = obj => ({...obj, teamID:Math.random()*1000000})
const userData = { firstName : "John", lastName: "Dee" }
console.log(podAndTeamAllocation(userData))
// {firstName: 'John', lastName: 'Dee', teamId: 667543}

//Q8 Write an ES6 function which checks if a student already has a team. If team is not given then add them to team
 // “A” and return the object else do nothing and return the same object. Avoid using in-built methods.


 const checkForTeam = obj => 
     obj.team ? obj : {...obj,team:"A"}
   //   obj.team ? obj : (obj.team = "A")


   // studentData.team ? studentData : { ...studentData, team: "A" };


 console.log(checkForTeam({firstName: 'Penn', lastName: 'Ma'}))
// {firstName: 'Penn', lastName: 'Ma', team: A}

console.log(checkForTeam({firstName: 'John', lastName: 'Dee', team: "B"}))
// {firstName: 'John', lastName: 'Dee', team: B}

console.log(checkForTeam({firstName: 'Priya', lastName: 'Raj'}))
// {firstName: 'Priya', lastName: 'Raj', team: A}


//Q9 Destructure the following code to get the desired outputs.

const book = { 
    title: 'JavaScript: The Definitive Guide',  
    authors: [{name: 'David Flanagan', age: 49 }, { name: 'Yukihiro Matsumoto', age: 57 }],  
    publisher: {name: 'O\'Reilly Media', location: 'CA'}
};

// const {title,authors:[{author1,age1},{author2,age2}],publisher:{publisherName,location}} = book
const {title,authors:[{name:author1},{name:author2}],publisher:{name:publisherName}} = book



console.log(title); // JavaScript: The Definitive Guide
console.log(author1); // David Flanagan 
console.log(author2); // Yukihiro Matsumoto
console.log(publisherName); // O'Reilly Media

//Q10 Write an ES6 function that takes an array of objects and returns the sum of all ages.

const sumOfAges = arr => {
    let sum = 0;
    for(let i = 0 ; i < arr.length ; i++){
        sum += arr[i].age

    }
    return sum
}

var array = [
	{
		name: "Jay",
		age: 60
	},
	{
		name: "Gloria",
		age: 36
	},
	{
		name: "Manny",
		age: 16
	},
	{
		name: "Joe",
		age: 9
	}
];

console.log(sumOfAges(array)); // 121
// // 1 have js call down number month.

const date = new Date();

const month = date.getMonth(); 

// add 1 to number month bc it starts with 0

const newMonth = month + 1;

// have js call down number date

const numberDate = date.getDate();

// have js call down number year

const year = date.getFullYear();

// // print it all together using console.log and seperate with "/" as a string

const test1 = newMonth + "/" + numberDate + "/" + year;

console.log(test1)

// //2 number to string:  set a const and have it equal a number.  Use toString() method to convert the number to string.  

const num = 15;

num.toString();

//3 string to number:  use parseint

const numString = (stringParamater) => parseInt(stringParamater);

numString("5");

// // 4 console.log typeOf


// //5  Create a function that has 2 paramaters, each representing a different number.  withing the {} of that function (or whatever the new syntax version of that is) tell the funtion to add the first paramater with the second one.  

const addTwoNumbers = (num1, num2) => num1 + num2;

addTwoNumbers(44, 58);

// 6  write an if statement with two conditions, seperated by '&&'

const example1 = 5;
const example2 = 8;

if(example1 && example2){
   console.log(22)
}

//7  do the same as above, but replace '&&' with '||'

const example3 = null;
const example4 = 5;

if(example3 || example4){
  console.log("hi")
};

//8  same as number 6, but use the ! to indicate the program should run when the thing after the '=' is not true

const example5 = 5;
const example6 = 6;

if(example5 != example6){
  console.log("howdy")
};
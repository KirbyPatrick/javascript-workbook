
//write a function that returns the sum of two numbers if both arguments are numbers 
const numberSum=(num1, num2)=> {
    console.log(isNaN('hello'), isNaN('5'))
    if(num1 && num2 && !isNaN(num1) && !isNaN(num2)){
    console.log('both are nums')
    return Number(num1) + Number(num2)
  }
  }
  
  console.log(numberSum(10,12))



//write a function that returns 'both are true' if both arguments are true.  creat a function stored in a const.  set two paramaters and then write a block of code compairing the truthyness of them with an if statement.  console log the results.  


const bothAreTrue=(arg1, arg2)=>{
    if(arg1 && arg2){
      console.log(102);
    }
  }
  
  console.log(bothAreTrue(11,'whats up'))


  


// //write a function that takes 3 paramaters and if all 3 parameters are strings, return true.  Do this via an if statment. 

const stringTest=(paramater1, paramater2, paramater3)=>{
    if (typeof paramater1 == "string" && typeof paramater2 == "string" && typeof paramater3 == "string"){
      return true;
    }
  };
  
  stringTest("hi", "yes", "no");
  
  

// //write a switch statement that evaluates a variable month and for each of the 12 months,returns the number of days in that month.  Group the months in the switch statment by how many days they have and seperate each group with a break.  

const daysInMonths=(month)=>{
    switch(month){
      case 'January':
      case 'March':
      case 'May':
      case 'July':
      case 'August':
      case 'October':
      case 'December':
    
      return 31;
        break
    
      case 'April':
      case 'June':
      case 'September':
      case 'November':
    
      return 30;
      break;
    
      case 'February':
      return 28;
      break;
    }
    }
    
    console.log(daysInMonths('February'))
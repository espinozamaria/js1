// var button = document.querySelector('button');
// button.addEventListener('click', function(event) {
//     alert('Button has been clicked~!');
// });

// var div = document.querySelector('div');
// div.addEventListener('mouseenter', function(event) {
//     div.style.backgroundColor = "purple";
// });

// var h1 = document.querySelector('h1');
// // h1.addEventListener('click', function(event) {
// //     h1.style.color = "pink";
// // });

// // Nedd to add event listener for the document  
// document.addEventListener('keyup', function(event) {
//     h1.style.color = "pink";
// });

// document.addEventListener('click', function(event) {
//     var anchor = document.createElement('aTag');
//     var href = document.createAttribute('href');
//     href.value = "https://google.com";
//     anchor.setAttribute(href);
// });





// // Day 4 Take Home

// var todos = [];
// var todoOne = prompt('Enter Todo 1 ');
// var todoTwo = prompt('Enter Todo 2 ');
// var todoThree = prompt('Enter Todo 3 ');
// todos.push(todoOne, todoTwo, todoThree);

// var todosWithDays = [];
// for(let i=0;i< todos.length;i++)
// {
//   var due = prompt(`What day do you want to get ${todos[i]} done?`, 'Please use this format: day/month/year');
//   due = new Date(due);
//   todosWithDays.push([todos[i], due]);
// }
// console.log('todoswithdays', todosWithDays);
// //Using a WHILE loop, find the task that will take the longest and log it to the console.
// var now = new Date().getTime();
// let i =0;
// let sortedWithIndices = [];
// while(i<todosWithDays.length)
// {
//   console.log('todosWithDays[i][1]',todosWithDays[i][1].getTime()); 
//   let oneDay = 24 * 60 *24* 1000;
//   var diffDays = Math.round((todosWithDays[i][1].getTime() - now)/oneDay);
//   sortedWithIndices.push([diffDays, todosWithDays[i]]);
//   i++;
// }
// sortedWithIndices.sort();
// // console.log(sortedWithIndices);
// // Which will take the longest?
// console.log(`The one that takes the longest is: ${sortedWithIndices[sortedWithIndices.length - 1][1]} will take the longest`);

// //Using a DO WHILE loop, add the string 'done' to all the tasks other than the one that will take the longest
// let n = 0;
// do {
//    if( n!= sortedWithIndices.length - 1)
//    {
//      sortedWithIndices[n][1].push('done');
//    }
//    n++;
// }
// while(n < sortedWithIndices.length);

// //Finally, alert all the tasks that are marked done in the todo array.
// let alertArr = [];
// for(let i = 0; i<sortedWithIndices.length; i++)
// {
//   if(sortedWithIndices[i][1].indexOf('done') !==  -1) {
//     alertArr.push(sortedWithIndices[i][1]);
//   }  
// }


// // Functions
// // Functions with arugments 
// // Arguments can be defined somewhere in the outer scope of the function
// var argument1 = "cheese";
// var argument2 = "string cheese";


// function myFunction(parameter1, parameter2) {  // This is a function declaration, not a function call
//   //If you nottice, parameter1 and parameter2 are nowhere defined in the overall scope, not here in this local scope.
//   // This is because in this function declration, you need a temporaray value name, and these temp values will be replaced with different variables
//   // whenever the function is called! 
//   // See below for an example of the use of this function
//   console.log(`${parameter1} is better than ${parameter2} .... or not `);
//     // paraameter1 and parameter2 will be replaced by whatever is used in palsce of these two temporary variables
// }

// myFunction(argument1, argument2); // This is a function call
// // This statement will replace the temp values we ssaw in the functiond declaration(argument1, argument2) by the ones inside this paramters
// // in this case, argument1 will take the place of parameter1 and argument2 will take the place of parameter2

// // Note:  functions are NOT hoisted, UNLESSSSS... 
// // 
// //
// var thisFunctionIsHoisted = function oistedFunction(param1, param2) { 
//   console.log(`${parameter1} is better than ${parameter2} .... or not `);
// }
// //
// //


// // Recursive functions
// // 
// // A function that makes a call to itself
// // 
// function callMyself(number) { // For whatever number you pass into number
//   if(number!==0) { // As long as the number is not 0
//     number --; // decrease the number
//     callMyself(number); // Notice it is calling itself here again
//   }
//   else { // if the num is less than zero ... 
//     return;
//   }
  
// }

// Writing a fat arrow function of the same thing as above
(number) => {
  if(number != 0) {
    number --;
    console.log(number);
  }
  else {
    return;
  }
}

function dogAge(age) {
  parseInt(age);
  if(isNaN(age)) {
    dogAge(prompt('Enter a real number!', '10'));
  }
  return age *= 7; // or alert(age *=7);
}

let dogAgeVal =  prompt('Enter your dogs age: ');

alert(dogAge(dogAgeVal));


function lifetimeSupply(age, amount) {
  
}

prompt('Enter the amount of product you use per day')
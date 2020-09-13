//SECTION 1: PROGRAMMING FUNDAMENTALS


//             Common Programming Principles

//1) DRY
//This principle is basically saying don't repeat yourself.


//2) KISS
//Always try to keep your code simple. It also helps with fewer bugs and easier to motify.


// 3) Avoid creating a YAGNI
//Unless you need to add functionality, dont. YAGNI = You arent going to need it.


// 4)Do the simplest thing that could possibly work
//Before you start, ask yourself "what is the easiet way to go about this?""


// 5) Don't make me think
//Try your best to make your work easy to read and easy to understood with minimal effort. 


// 6) Write code for the maintainer
//Always remember that there is a chance someone else or yourself will need to maintain your code. Therefore, make it easy to maintain! Help your future self and others by writing good comments.


// 7) Single responsibility principle
//This principle is saying that a component of code (such as class, id or function) performs a single well defined task.


// 8) Avoid premature optimization
//Before making a better or easier version of your code, make sure it is working! No point of enhancing a broken code.  


// 9) Separation of concerns
// Try not to overlap different areas of your code. It is much better to address each section separately.I think an example of this would be making separate files for css, html and javascript even though they will be working together to create a final product. By having separate files, it is much easier to maintain, share or remove pieces of code.


//    QUESTION: Which ones surprise you (if any)?
// One programming principle that stood out to me was "write code for the maintainer". This principle was something I didn't really think about, but now that I am aware, I see its importance. You don't want to be known as the person with the bad code manners.

//    QUESTION: Which one is currently giving you the most struggle?
//I would say the principle that I am struggling with the most is the separation of concerns, I think its a bit difficult to separate all the information in a way that it makes sense... update: I did go back and re-read the definition. I believe an example of this would creating separate files for HTML, CSS and Javascript. I originally thought it meant separate different codes within 1 file.




//PART 1:                    Commenting Code


//Comment each line of this code and describe what it is doing. Feel free to run this code and add console.logs to help you figure it out:

// const f =           f delclated as a variable 
// l => {               l is the function within that variable
//  let es = 0, p = 0, c = 1, n = 0    let es p c and n are variables given a value that may change.
//     while (c <= l) {      while loop is saying that while (c (1) is less than or 
//       n = c + p;                      equal to l) than execute the following. 
//       [c, p] = [n, c]
//       es += (c % 2 === 0) ? c : 0
//     }
//     return es
//   }
  
//   console.log(f(55))


//    I didn't really understand this function, so I tried replacing each var with their value.


//   const f = 
// l => {
//     let es = 0, p = 0, c = 1, n = 0
//     while (1 <= l) {
//       0 = 1 + 0;
//       [1, 0] = [0, 1]
//       0 += (1 % 2 === 0) ? 1 : 0
//     }
//     return 0
//   }
  
//   console.log(f(55))


// The question mark ? is an alternative to an if statement best used in the case where one of two values will be assigned to a variable based on a conditional statement.



//PART 2:


// At first we may strive for the shortest code possible. But we really should be striving for readable code that is easy to maintain. Compare the same solution with more semantic variable names (feel free to use this one to help you figure out what is happening in this function:

// const f2 = (limit) => {
//   let evenSum = 0;
//   let previous = 0;
//   let current = 1;
//   while (current <= limit) {
//     let next = current + previous;
//     previous = current;
//     current = next;
//     if (current % 2 === 0) {  //if the current number is divisible by 2, then 
//       evenSum += current;
//     }
//   }
//   return evenSum;
// }

//console.log(f2(55)) // shows 44.


// next = current number + previous numbers. Example of this below.

// ? = 1 + 0      
// 2 = 1 + 1
// 3 = 2 + 1
// 5  = 3 + 2
// 8  = 5 + 3
// 13 = 8 + 5
// 21 = 13 + 8
// 34 = 21 + 13
// 55  = 34 + 21

// This function is basically a fibonacci sequence with a limit of 55. Once we hit our limit (55), only add the numbers that are divisible by 2. The sum of those numbers (2, 8, 34) is the variable evenSum (44). Personally,  I would have named this function, fibonacciSequence. In addition, I would have used the following variable names: previousNum, CurrentNum, nextNum, evenSumNum, numLimit.


//QUESTION: If you started a new job and your project was to expand the functionality of this function by allowing a second argument and then based on that second argument, returning the sum of even or odd numbers, which code would you rather start working with f or f2?

//ANSWER:  If I started a new job and I was asked to expand this function, I would prefer to start working with code f2. Although, the code itself is a bit longer, it is a lot eaasier to read and understand. Code f used single letters as variables, which blended with the numbers and made it confusing to understand.



//QUESTION: Finally, the 'shorter' code style doesn't use semi-colons, except for the fourth line. Remove this semi-colon! Run the code, is this semi-colon necessary?

//ANSWER:  If I remove the semi-colon the code does not run. Yes, it is necessary in order to end that argument. 



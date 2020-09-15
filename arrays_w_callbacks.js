const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0]

const panagram = ['The', 'quick', 'brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'dog']


//Determine if every number is greater than or equal to 0

//The instructions arent very clear. Am I supposed to be explaining what each iterator does?

nums.every() // method checks if all elements in an array pass a test 

 for (let i=0; i<nums.length; i++) {
   if (nums>=0) {
     console.log(true)
   }
 }


//determine if every word shorter than 8 characters

 for (let i=0; i<panagram.length; i++){
    if (panagram.length < 8){
     console.log(true)
    }
 }


//filter the array for numbers less than 4

nums.filter () //creates a new array with all elements that pass the test implemented by the provided function.


const result = nums.filter(numbers=>numbers>4)

//filter words that have an even length
const result = panagram.filter(words=>panagram.length%2)



nums.find() // returns the value of the first element in an array that pass a test (provided as a function).

//Find the first value divisible by 5

const find = ()=> {
  for (let i=0; i=nums.length; i++){
    if (nums/5) {
      return(nums) //or maybe nums.index?
    }
  }
}

//find the first word that is longer than 5 characters

const find = panagram.find(element=>element)
//i think i know how to write a function that returns all the words that are longer than 5, but idk how to find the first match.

nums.findIndex() //method returns the index of the first element in the array that satisfies the provided testing function.

//find the index of the first number that is divisible by 3

const divisible = (nums)=>nums / 3;
console.log(nums.findIndex(divisible));

//find the index of the first word that is less than 2 characters long

const short = (word) =>panagram.length>2;

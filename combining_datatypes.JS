//                      Section 2 Combining Datatypes


// Create an object, called crayonBox, that has a property that is an array. The array should have the names of some crayons. Log one of the elements of that array.

const crayonBox = {
  names:  ["Brick Red", "Chestnut", "Sunset Orange", "Tangerine"] 
}

//how to access Brick red
crayonBox.names[0] 
console.log(crayonBox.names[0]); //another way to console log it.

//Create an object bottle that has a property that is an object: cap. cap can have properties like material: 'metal' or 'plastic', color: blue or white etc. Log one of the properties of that inner object.

const bottle = { 
    cap: {material: ["metal", "plastic"], color:["blue", "white"]} 
}

//how to access white.
bottle.cap.color[1]


//Create an array called receipt that has at least one object in it. The inner objects should be items that have a name and a price. Log one of the properties of that inner object.

const receipt =[
    {name: "toothpaste", price: 3, },
    {name: "toilet Paper", price: 5},
    {name:"milk", price: 4},
    {name:"candy", price:1}
];

//how to access toilet paper
console.log(receipt[1].name)



//Create an array called apartmentBuilding that has an array as one of its elements, the inner array should be the names of the tenants. Log one of the elements of the inner array.

const apartmentBuilding = [
    {floor:30, complaints:"no"},
    {names: ["tim", "tom", "billy", "bob"]}
];

//how to find bob
console.log(apartmentBuilding[1].names[3])


// ANOTHER WAY
const apartmentBuilding = [
    {floor:30, complaints:"no"},
    ["tim", "tom", "billy", "bob"]
];

//how to find bob this way
apartmentBuilding[1][3];



//              Combine objects, arrays, and functions more than one level deep

//Create a function knit that returns an object that has the following kinds of properties item: scarf, size : 6ft etc. Log a value of that object (hint: call the function and then call a property on the return value).

// const knit = ()=>{
//     if (item==="scarf"){
//         while(size=6){
//             return object;
//         }
//     } 
// }

//not sure if that works...I think we need a for loop

let objectList = [
    { object: "clothing", item: "scarf", size: 6 },
    { object: "shoes", item: "heels", size: 5 },
    { object: "accesories", item: "necklace", size: 4 },
  ];

const knit = ()=> {
    for (let i = 0; i < objectList.length; i++) {
        if (objectList[i].size === 6 && objectList[i].item === "scarf") {
        console.log(objectList[i]);
        }
    }
    }
       

console.log(knit())
    
// I really hope that is correct, because that took me two hours :)


//actually I went back and reviewed the notes. Another way to do this would be:

const knit = ()=>{
    return {
        object:{item:"scarf", size:6}
    }
};

knit().object;



//Create a function crayonSelector that returns an object that has an array (you can reuse your crayonBox object). Log one of the elements of that array.

const crayonBox = {
    names: ["Brick Red", "Chestnut", "Sunset Orange", "Tangerine"],
  };
  
  const crayonSelector = () => {
    return {
      crayonBox,
    };
  };
  
  //how to find brick red
  crayonSelector().crayonBox.names[0];
  





  //Create a function powerButton that returns a function called options - options should console.log a simple message like select a song. Call that inner function

  const powerButton = ()=> {
    return options = () => {
        console.log("don't cry for me argentina")
    }
  };

  powerButton()();


  //                   Model a Vending Machine Model a vending machine


//Make an array of snacks (make 3 snacks). snacks are objects that have a name and a price
 
const vendingMachine = {
    snacks:[{name:"doritos", price:1}, {name:"ice cream", price:3}, {name:"m&Ms", price:2}]
  }


//   a vending machine has a function vend that allows user to enter the array position (a number) of the snack and then that snack will be returned 

  const vend = ()=>{
    return {
        vendingMachine
    }
};


//hmmm I am craving ice cream!! 
vend().vendingMachine.snacks[1];



//                   CALLBACKS


//Make a function add that takes two arguments (numbers) and sums them together
const numSum = (num1, num2 ) => {
    return num1+num2;
}

numSum(1,2);

//Make a function subtract that takes two arguments (numbers) and subtracts them

const subtract = (num1, num2) => {
    return num1 - num2;
}

subtract(10,8)

//Make a function multiply that takes two arguments and multiplies them

const multiply = (num1, num2) => {
    return num1 * num2;
}

multiply(5,5)


//Make a function divide that takes two arguments and divides them

const divide = (num1, num2) => {
    return num1 / num2 ;
}

divide(10,2)



//Make a function calculate that takes three arguments. Assume the two arguments are a number ie num1, num2 and a function called operates (a callback). Make it so that when calculate is invoked, the callback "operates" on the numbers and returns the value.
//Call calculate 4 times, each time using one of the operation functions you wrote

const calculate = (num1,num2, operates) => {
    return operates()(num1,num2);
}
console.log(calculate(1,1,sum));
console.log(calculate(2,2,multiply));
console.log(calculate(10,2,divide));
console.log(calculate(4,1,subtract));


//Clean up this code, so that it works and has function definitions in the correct place

//before

bar();
const bar = () => {
    console.log('bar here');
}
foo();

const foo = () => {
    console.log('foo here');
}

//after 

const bar = () => {
    console.log('bar here');
}
bar();

const foo = () => {
    console.log('foo here');
}
foo();




//What is meant by the error(s) this produces?

//before
foo();

const foo = ()=>{
    console.log('hi');
}


//After


const foo =  ()=>{
    console.log('hi');
}

foo();

//there are a couple things that are causing an error, the main one is that foo doesnt have an = sign next to it. Therefore const foo isnt defined. Also, foo (); is being invoked before the function. Therefore, when the computer runs it, foo is being invokved beefore it has a value.
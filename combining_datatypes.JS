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

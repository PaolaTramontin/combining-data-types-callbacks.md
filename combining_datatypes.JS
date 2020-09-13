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




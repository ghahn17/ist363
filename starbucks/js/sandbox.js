//console.log("sandbix is wokring");
const cars = [ 
{
    name:"Ford",
    price: 20000
},
{
    name:"Chevy",
    price: 25000
},
{
    name:"BMW",
    price: 30000
},
{
    name:"Audi",
    price: 35000
},
{
    name:"Ferrari",
    price: 40000
},
] // end of cars array 

const filteredCars = cars.filter( (car) => {
    return car.price > 25000;

}); // end of filter method 

console.log({filteredCars}); 
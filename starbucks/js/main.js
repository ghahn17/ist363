// console.log("js has been loaded");
// variables, methods, and functions 
// 1. variables 
const myName = "Gillian Hahn"; 
console.log(myName);

const myAge = 21;
const myCity = "Boston";
console.log(myCity);
// back tic above 'tab' key `` cash line curly brace = need syntax in front of variable 
const introduction = `Hi, my name is ${myName}, I am ${myAge} years old and I live in ${myCity}`;
console.log(introduction);

// 2. methods 
const menuBtn = document.getElementById("menuBtn");
const overlay = document.getElementById("overlay")
console.log(menuBtn); 

// "event name", callback function 
menuBtn.addEventListener("click",function(){
    //console.log("menu button has been clicked")
    overlay.classList.add("active");
}); // end of menuBtn click event 

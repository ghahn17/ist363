// console.log("js has been loaded");
// variables, methods, and functions 
// 1. variables 
const myName = "Gillian Hahn"; 
//console.log(myName);

const myAge = 21;
const myCity = "Boston";
//console.log(myCity);
// back tic above 'tab' key `` cash line curly brace = need syntax in front of variable 
const introduction = `Hi, my name is ${myName}, I am ${myAge} years old and I live in ${myCity}`;
//console.log(introduction);

// 2. methods 
const menuBtn = document.getElementById("menuBtn");
const closeBtn = document.getElementById("closeBtn");
const overlay = document.getElementById("overlay") ;
const coffeeList=document.getElementById("coffeeList");
const ascendingBtn= document.getElementById("ascendingBtn");
const descendingBtn= document.getElementById("descendingBtn");
//console.log(menuBtn); 

// "event name", callback function 
menuBtn.addEventListener("click",function(){
    //console.log("menu button has been clicked")
    overlay.classList.add("active");
}); // end of menuBtn click event 

closeBtn.addEventListener("click",function(){
    overlay.classList.remove("active");
})
// end of closeBtn event 

//ascending Btn event 

function purgeList() {
    coffeeList.innerHTML = "";
}
function sortList(sortDirection){
    console.log({sortDirection});

}

ascendingBtn.addEventListener("click",function(){
    console.log("ascending button has been clicked");
    purgeList();
    sortList("ascending");
});
// descending Btn remove event 
descendingBtn.addEventListener("click",function(){
    console.log("descending button has been clicked");
    purgeList();
    sortList("descending");
});
// arrays and objects 

// basic variables=
const coffeeName = "Mocha"; 
const coffeeHeadline = document.createElement("h2"); 
coffeeHeadline.textContent = coffeeName; 
// document.body.appendChild(coffeeHeadline); 

// objects 
const coffee = {
    name: "Mocha",
    price: 3.99,
    description: "This is a delicious cup of coffee."
}; 

//console.log(coffee.description);

const coffeeObjHeadline = document.createElement("h2");
coffeeObjHeadline.textContent = coffee.name; 
//document.body.appendChild(coffeeObjHeadline); 

// basic array 
// const basicCoffees= ["mocha","latte", "espresso"];
// loop over the objects in the array 
// basicCoffees.forEach(function(basicCoffee){

// });      end of basic coffees forEach method 
// arrays 
// const coffees = ["Mocha", "Latte", "Espresso"];
// curly braces = objects , brackets = arrays. 
// const coffees =[ 
//     { 
//         name: "Mocha",
//         price: 3.99,
//         description: "This is a delicious cup of coffee.",
//         image: { 
//             fileName: "coffee.jpg",
//             width: 630,
//             height: 630,
//             altText: "A cup of coffee."
//         }
//     },
//     {
//         name: "Latte",
//         price: 3.99,
//         description: "This is a delicious cup of coffee.",
//         image: { 
//             fileName: "coffee.jpg",
//             width: 630,
//             height: 630,
//             altText: "A cup of coffee."
//         }
//     },
//     {
//         name: "Espresso",
//         price: 3.99,
//         description: "This is a delicious cup of coffee.",
//         image: { 
//             fileName: "coffee.jpg",
//             width: 630,
//             height: 630,
//             altText: "A cup of coffee."
//         }
//     }, 
// ] 
// this is an array of objects 
//console.log(coffees[1]);

// [...beatles].(sort); clones the og array and creates a fresh one that is sorted 

function buildTextElement (element, className,content) {
    const newElement= document.createElement(element);
    newElement.classList.add(className);
    newElement.textContent = content; 
    return newElement
}
const sortedCoffees = [...coffees].sort(function(a,b){
if (a.title < b.title) {
    return -1;
}
if (a.title > b.title) {
    return 1
}
if (a.title < b.title) {
    return 0
}
}); //sort method end 

// preserves the original so you can still see the non-sorted 

sortedCoffees.forEach(function(coffee) {
//1. deconstruct the coffee object 
    const {title,price,description, image} = coffee;

//2. create html elements 
    const coffeeArticle = document.createElement("article")
    coffeeArticle.classList.add("coffee-item");

    const coffeeImage = document.createElement("img")
    coffeeImage.src=  `images/${image.fileName}`; 
    coffeeImage.width = image.width;
    coffeeImage.width = image.height;
    coffeeImage.alt = image.altText; 

    // const coffeeTitle = coffee;
    //const coffeeTitle = document.createElement("h2");
    //coffeeTitle.classList.add("coffee-title");
   // coffeeName.textContent = title;

    const coffeeTitle = buildTextElement("h2","coffee-title",title);
   
    // const coffeePrice = document.createElement("h3");
    // coffeePrice.classList.add("coffee-price");
    // coffeePrice.textContent= `$${price}`;

    const coffeePrice= buildTextElement ("h3", "coffee-price",`$${price}` )

    // const coffeeDescription = document.createElement("p");
    // coffeeDescription.classList.add("coffee-description");
    // coffeeDescription.textContent= description;

    const coffeeDescription= buildTextElement("p","coffee_description",description)

//3. append the elements to the parent article 
    coffeeArticle.appendChild(coffeeImage);
    coffeeArticle.appendChild(coffeeTitle);
    coffeeArticle.appendChild(coffeePrice);
    coffeeArticle.appendChild(coffeeDescription); 
//4.append the article to the body 
    coffeeList.appendChild(coffeeArticle)
}); 
// end of coffees forEach method 

// following video 1 

// 1. learn how to write an arrow function 
// old function 
// function calculateAverage (a,b) {
//     const result = (a+b) / 2;
//     return result;
// }
// arrow function syntax 
const calculateAverage = (a,b) => {
    return (a+b) / 2; 
}
console.log(calculateAverage(4,27));

const addTen = (num) => {
   return  num + 10;   
}
// when you only have one paramter you can remove parantheses, when you only have one line of return code your can remove 'return' and the curly braces 

console.log(addTen(36));

// 2. review forEach array method 
// const beatles = ["Paul", "George", "Ringo", "John"];
//console.log({beatles});
// beatles.forEach ((beatle) => {
//     console.log({beatle});
// });

// 3. Review sort array method 
// beatles.sort();
// console.log({beatles}); 

// make a clone of beatles because you dont want to modify orignial 
// const sortedBeatles  = [...beatles].sort((a,b)=> {
//     console.log({a,b});
//     // -1,0,1
//     if (a < b) {
//         return -1 
//     }
// }); // sort method end 

// console.log({sortedBeatles});

const beatles = [
    {
        name:"Paul",
        age: 78
    }, 
    {
        name:"George",
        age: 75
    }, 
    {
        name:"Ringo",
        age: 80
    }, 
    {
        name:"John",
        age: 40
    }
];
const sortedBeatlesByAge = [...beatles].sort((a,b)=> {
    if (a.age < b.age)  {
        return -1;
    }
});
console.log({sortedBeatlesByAge});


//4. Finish the sort functionality 

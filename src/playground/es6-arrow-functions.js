// const square = function(x){
//   return x * x;
// }

// console.log(square(8));

// es6 arrow functions always anonymous
// const squareArrow = (x) => {
//   return x * x;
// };


// const squareArrow = (x) => x * x; //same as above. Implicitely returned

// console.log(squareArrow(5));

// Challenge - Use arrow functions
// getFirstName('Mike Smith') -> "Mike"
// Create regular arrow function
// Create arrow function using shorthand syntax

const getFirstName = (name) => {
    return name.split(' ')[0];
};

const shortHand = (name) => name.split(' ')[0];

console.log(getFirstName('Mike Smith'));

console.log(shortHand('Cam Jordan'));
// named export isAdult(18) -> true if adult otherwise false
// canDrink(21) -> true if 21 and over otherwise false
// import isAdult and canDrink, use both to print to console

export const isAdult = (x) => {
  if(x >= 18)
    return true;
  else
    return false;
};

export const canDrink = (x) => x >= 21;


// setting up default export function

export default (x) => x >= 65;
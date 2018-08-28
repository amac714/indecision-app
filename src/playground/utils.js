console.log('utils.js is running');

export const square = (x) => x*x;   //1 way to export named 
export const add = (a, b) => a+b;

//const subtract = (a, b) => a - b;

// export default subtract; //1 way to export default variable

export default (a, b) => a - b;   //2nd way to export default

// export { square, add, subtract as default }; //2nd way to export named variale


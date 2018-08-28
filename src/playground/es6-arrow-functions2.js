// arguments object - no longer bound with arrow functions

const add = (a, b) => {
  // console.log(arguments);
  return a + b;
};

console.log(add(55, 1, 100));


// this keyword - no longer bound

const user = {
  name: 'Alan',
  cities: ['Huntington Beach', 'Westminster', 'Anaheim'],
  printPlacesLived() { //don't need to use function keyword due to es6 syntax
   
    return this.cities.map((city) => this.name + ' has lived in ' + city);

    // this.cities.forEach(function (city) {
    //   //don't work because this is not bound to this specific func
    //   console.log(this.name + ' has live in ' + city);
    // });

    //using arrow function does not bound own this value
    // this.cities.forEach((city) => {
    //   console.log(this.name + ' has live in ' + city);
    // });
  }
};

console.log(user.printPlacesLived());
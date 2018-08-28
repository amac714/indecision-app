var nameVar = 'Andrew';
var nameVar = 'Mike';
console.log('nameVar', nameVar);


// let - can be re-assigned, cannot be redefined
let nameLet = 'Jen';
nameLet = 'Megan';
console.log('nameLet', nameLet);


// const - cannot be re-assigned, or redefined
const nameConst = 'Frank';
console.log('nameConst', nameConst);

// Block scoping - cannot access let or const outside of block they were defined in

var fullName = 'Alan Macabuhay';
let lastName;
if(fullName){
  const firstName = fullName.split(' ')[0];
  lastName = fullName.split(' ')[1];
  console.log('FirstName', firstName);
}

// cannot access const variable here due to block scoping
//console.log(firstName);
console.log('lastName', lastName);
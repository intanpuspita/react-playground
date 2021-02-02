// using var, it can be redefined by variable with the same name
var myName = 'Wilson';
var myName = 'Mike';
console.log(myName);

// using let, it can be reassigned, but cannot be redefined
let yourName = 'Hadid';
yourName = 'Gigi';
console.log(yourName);

// using const, it cannot be reassigned and redefined
const herName = 'Lily';
console.log(herName);

// Block scoping
// const and let cannot be accessed outside block of code where they defined
var fullName = 'Albus Dumbledore';
let firstName;

if(fullName) {
    firstName = fullName.split(' ')[0];
    console.log(firstName);
}

const getFirstName = (fullname) => fullname.split(' ')[0];
console.log(getFirstName(fullName));
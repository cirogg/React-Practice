var nameVar = 'Ciro';
console.log('nameVar', nameVar);


let nameLet = 'CiroGG';
nameLet = 'Lelo'
console.log('nameLet', nameLet);

const nameConst = 'Ciro Const';
console.log('nameConst', nameConst);


// function getPetName(){
//     const petName = 'Alf';
//     return petName;
// }

// const petName = getPetName();
// console.log(petName);

//Block scoping

var fullName = 'Lelo Gonzalez';
let firstName = undefined;

if (fullName) {
    firstName = fullName.split(' ')[0];
    console.log(firstName);
}

console.log(firstName);
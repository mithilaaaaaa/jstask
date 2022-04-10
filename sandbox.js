//function declaration
function greet() {
    console.log('helo there')
}

greet();

// function expressions
const speak = function() {
    console.log('good day!')
};
speak();

//arguments and parameters

const speak = function(name) {
    console.log('good day ${name}')
};
speak('mario')

// passing different parameter/arguments
const speak = function(name, time) {
    console.log('good ${time} ${name}')
};
speak('mario', 'morning');

// give this parameters some different values
const speak = function(name = 'luigi', time = 'night') {
    console.log('good ${time} ${name}')
};
speak();

//returning values
const calcArea = function(radius) {
    return 3.14 * radius ** 2;
};
const area = calcArea(5);
console.log(area);

//regular function
const calcArea = function(radius) {
    return 3.14 * radius ** 2;
};

//arrow function
const calcarea = radius => 3.14 * radius ** 2;
//two parameters we have to use parenthesis

const area = calcArea(5);
console.log('area is :', area);

//practise arrow function
const greet = function() {
    return 'hello,world';
};
const greet = () => 'hello,world';
const result = greet();
console.log(result);

// practise arrow function 
const bill = function(products, taxs) {
    let total = 0;
    for (let i = 0; i < products.length; i++) {
        total += products[i] + products[i] * taxs;
    }
    return total;
}
const bill = (products, taxs) => {
    let total = 0;
    for (let i = 0; i < products.length; i++) {
        total += products[i] + products[i] * taxs;
    }
    return total;
};

console.log(bill([10, 15, 30], 0.2));

//method and function 
const name = 'shaun'

//function 
const greet = () => 'hello';
let resultOne = greet();
console.log(resultOne);



// method
let resultTwo = name.toUpperCase();
console.log(resultTwo);

// callbacks & foreach
const myFunc = (callbackFunc) => {
    //do something
    let value = 50;
    callbackFunc(value);
};
myFunc(value => {
    //do something
    console.log(value);
});
// foreach
let people = ['mario', 'luigi', 'ryu', 'shaun', 'chun-li'];

people.forEach(person => {
    console.log(person)
});
//using index in second argument in arrow function

let people = ['mario', 'luigi', 'ryu', 'shaun', 'chun-li'];

people.forEach(person, index) => {
console.log(index, person)
});
// callbacks and foreach together 
let people = ['mario', 'luigi', 'ryu', 'shaun', 'chun-li'];

const logPerson = (person, index) => {

    console.log('${index} - hello $ {person}');
};
people.forEach(logPerson);


// get a reference to the 'ul'
const ul = document.querySelector('.people');

const people = ['mario', 'luigi', 'ryu', 'shaun', 'chun-li'];

let html = ' ';
people.forEach(person => {
    // create html template
    html += '<li style="color: purple">${person}</li>';
});

console.log(html);
ul.innerHTML = html
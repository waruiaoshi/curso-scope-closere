// variables

var a; //declaramos
var b = 'b' // declaramos y asignamos
b = 'bb' // reasignación
var a = 'aa' // redeclaración


//global scope
var fruit = 'Apple';


function bestFruit() {
    console.log(fruit);
}

bestFruit();

function countries() {
    country= 'colombia'; //global ojo !!
    console.log(country);

}

countries();
console.log(country);


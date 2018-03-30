//let greet= 'Worldwide';
//alert(greet);
//greet = 'Goodbye';
//alert(greet);

// String
//const someName = 'Jon';

// Number
//const age = 42.5;

// Boolean
//const married = true; // false

// undefined
//const notDefined = undefined;

// null
//const empty = null;

//Object
//const someObj = {};

// Symbol - унікальний незмінний 
//const someSym = Symbol();

//const user = prompt('Enter your name');
//document.write('Hello ' + user);
//document.write('<br>');

/*const result = parseFloat(prompt('Enter Example'));
const example = addOne();
document.write('Next year you will be ' + nextAge);

function addOne(arg) {
    const result = arg + 1;
    return result;
   }
function checkAge(age) {
    if ( (age >= 18) && (age <= 70) )
    {
       return 'Adult';
    } 
      else if (age > 70) {
        return 'Old';
    } else 
    {
         return 'Child';
    }
}
const exm = parseFloat(prompt('Your qestion'));
const anvExm = resOne(exm);
document.write('Your answer is' + anvExm);
document.write('Yous are' + checkAge(exm));

function resOne(arg) {
    const result = arg + 2
    return result;
}
function checkAge(exm) {
    if ( (exm >= 18) && (exm <= 70) ) {
       return 'Adult';
    }  else if (exm > 70) {
        return 'Old';
    }  else {
       return 'Child';
    }
}*/

const a = parseFloat(prompt('Enter a'));
const b = parseFloat(prompt('Enter b'));
const c = parseFloat(prompt('Enter c'));

const result = solveQu(a, b, c);
document.write (result);

function solveQu(a, b, c){
    const d = calcDis(a, b, c)
    if (d > 0){
    const x1=((- b +  d) / (2 * a))    
    const x2=((- b - d) / (2 * a))
        
   
return 'x1=' + x1 + '<bd> x2=</bd>' + x2;
    }  
function calcDis(a, b, c){
    return (b*b) - 4*(a*c)
}
}
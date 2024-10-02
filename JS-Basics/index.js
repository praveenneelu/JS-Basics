// Write a function for fizzbuzz algorithm.
// Divisible by 3 => Fizz
// Divisible by 3 => Buzz
// Divisible by both 3 & 5 => FizzBuzz
// Not Divisible by 3 or 5 => input
// Not a number => 'Not a number'

const output = fizzbuzz(25);
console.log(output);

function fizzbuzz(input) {
    
    if(typeof(input) !== 'number') {
        return NaN;
    }

    if( (input % 3 ===0) && (input % 5 === 0) ) {
        return 'FizzBuzz';
    }

    if( input % 3 === 0 ) {
        return 'Fizz';
    }

    if( input %5 === 0 ) {
        return 'Buzz';
    } 
    
    
        return input;
}

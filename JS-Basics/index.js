// EX - 3 Except.

const numbers = [1,2,3,4,5,6,7];
console.log(except(numbers, [1,2]));

function except(array, excluded) {
    const output = [];
    for(let element of array) {
        if( !excluded.includes(element) ) {
            output.push(element);
        }
    }
    return output;
}

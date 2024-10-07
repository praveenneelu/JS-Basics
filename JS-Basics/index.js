// EX - 1 Array from Range.

let values = arrayFromRange(1, 9);

console.log(values);

function arrayFromRange(min, max) {
    const output = [];
    for (let i  = min; i <= max; i++) {
        output.push(i);
    }
    return output;

}

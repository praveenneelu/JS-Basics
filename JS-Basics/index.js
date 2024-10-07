// EX - 6 Get Max.

const numbers = [1,2,8,4,5];

const max = getMax(numbers);

console.log(max);

function getMax(array) {
    if (array.length === 0) {
        return undefined;
    }
    return array.reduce((a,b) => (a > b) ? a : b);
}

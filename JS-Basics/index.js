// EX - 5 count occurences.

const numbers = [1,2,3,4,5,1];

const count = countOccurences(numbers, -1);

console.log(count);

function countOccurences(array, searchElement) {

return array.reduce((accumulator, current) => {
    const occurence = (current === searchElement) ? 1 : 0;
    console.log(accumulator , current, searchElement);
    return accumulator + occurence;
}, 0);
}

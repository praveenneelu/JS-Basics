// EX - 3 error handling.
try {
    const numbers = [1,2,3,4,5,1];
    const count = countOccurences(null, 1);
    console.log(count);    
} catch (e) {
    console.log(e.message);   
}

function countOccurences(array, searchElement) {

if(!Array.isArray(array)) {
    throw new Error('Invalid array.');
}

    return array.reduce((accumulator, current) => {
        const occurence = (current === searchElement) ? 1 : 0;
        console.log(accumulator , current, searchElement);
        return accumulator + occurence;
    }, 0);
}

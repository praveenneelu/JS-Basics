// EX-4 - Even and Odd Numbers.
showNumbers(12);

function showNumbers(limit) {
    
    for(let i = 0; i<=limit; i++) {
        const message = (i % 2 == 0) ? 'EVEN' : 'ODD';
        console.log(i, message)
    }
}

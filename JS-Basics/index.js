setTimeout(() => {
    console.log('First');
}, 0);

const promise = fetch('www/udemy.com/vishwas');
promise.then(value => {
    console.log('Promise value is', value);
});

// Simulate non-blocking delay (for 3 seconds)
console.log('second');

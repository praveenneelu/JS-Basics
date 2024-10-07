// EX - 7 Movie ratings.

const movies = [
    {title: 'a', year: 2018, rating: 4.5},
    {title: 'b', year: 2019, rating: 4},
    {title: 'c', year: 2017, rating: 3.5},
    {title: 'd', year: 2018, rating: 4},

];

const titles = movies
    .filter(m => m.year === 2018 && m.rating >= 4) 
    .sort((a,b) => a.rating - b.rating)
    .reverse()
    .map(m => m.title);

    console.log(titles);
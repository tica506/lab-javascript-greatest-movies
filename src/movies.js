// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

function getAllDirectors(moviesArray) {
    const directors = moviesArray.map(movie => movie.director);
    return [...new Set(directors)]; // Removes duplicates
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    return moviesArray.filter(movie => movie.director === 'Steven Spielberg' && movie.genre.includes('Drama')).length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (moviesArray.length === 0) return 0;
    const totalScore = moviesArray.reduce((sum, movie) => sum + (movie.score || 0), 0);
    return parseFloat((totalScore / moviesArray.length).toFixed(2));
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    const dramaMovies = moviesArray.filter(movie => movie.genre.includes('Drama'));
    return scoresAverage(dramaMovies);
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    return [...moviesArray].sort((a, b) => {
        if (a.year === b.year) {
            return a.title.localeCompare(b.title);
        }
        return a.year - b.year;
    });
}
// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    return moviesArray.map(movie => movie.title).sort((a, b) => a.localeCompare(b)).slice(0, 20);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
    return moviesArray.map(movie => {
        let duration = 0;
        const timeParts = movie.duration.split(' ');
        for (let part of timeParts) {
            if (part.includes('h')) {
                duration += parseInt(part) * 60;
            } else if (part.includes('min')) {
                duration += parseInt(part);
            }
        }
        return { ...movie, duration };
    });
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
    if (moviesArray.length === 0) return null;

    const scoresByYear = moviesArray.reduce((acc, movie) => {
        if (!acc[movie.year]) acc[movie.year] = [];
        acc[movie.year].push(movie.score);
        return acc;
    }, {});

    let bestYear = null;
    let bestAvgScore = 0;

    for (let year in scoresByYear) {
        const avgScore = scoresByYear[year].reduce((sum, score) => sum + score, 0) / scoresByYear[year].length;
        if (avgScore > bestAvgScore || (avgScore === bestAvgScore && year < bestYear)) {
            bestYear = year;
            bestAvgScore = avgScore;
        }
    }

    return `The best year was ${bestYear} with an average score of ${bestAvgScore}`;
}
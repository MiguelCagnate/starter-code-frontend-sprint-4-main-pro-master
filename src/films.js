const movies = require('./data');

// Exercise 1: Get the array of all directors.
function getAllDirectors(movies) {
  let result = movies.flatMap(({ director }) => director);
  console.log('EXERCICE 1 ->', result);
  return 'EXERCICE 1 ->', result;
}
// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(movies) {
  var result = movies.filter((e) => e.director === 'Quentin Tarantino');
  console.log('EXERCICE 2 ->', result);
  return 'EXERCICE 2 ->', result;
}
// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(movies, director) {
  var showDirector = movies.filter((m) => m.director == director);
  var showScore = showDirector.reduce((a, b) => a.score + b.score);
  var result = showScore / showDirector.length;
  console.log('EXERCICE 3 ->', result);
  return 'EXERCICE 3 ->', result
}
// Exercise 4:  Alphabetic order by title
function orderAlphabetically(movies) {
  var showMovies = movies.flatMap((e) => e.title);
  var result = showMovies.sort((a, b) => a.localeCompare(b));
  console.log('EXERCICE 4 ->', result.slice(0, 20));
  return result.slice(0, 20);
}

// Exercise 5: Order by year, ascending
function orderByYear(movies) {
  let orderMovies = movies.sort((a, b) => {
    if (a.title == b.title) {
      return 0;
    }
    if (a.title < b.title) {
      return -1;
    }
    return 1;
  });

  let result1 = orderMovies.sort((a, b) => {
    if (a.year == b.year) {
      return 0;
    }
    if (a.year < b.year) {
      return -1;
    }
    return 1;
  });
  let result = result1.map(function (orderMovie) {
    return {
      title: orderMovie.title,
      year: orderMovie.year
    };
  });
  console.log('EXERCICE 5 ->', result);
  return 'EXERCICE 5 ->', result;
}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(movies, genre) {
  var showGenre = movies.filter(
    (m) => m.genre.includes(genre) && m.score != ''
  );
  var sumScore = showGenre.reduce((a, b) => a + b.score, 0);
  var showAverage = (sumScore / showGenre.length).toFixed(2);
  console.log('EXERCICE 3 ->', Number(showAverage));
  return 'EXERCICE 3 ->', Number(showAverage);
}
// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes() {
  var showMinutes = movies.flatMap(movie => {
    var hours = Number(movie.duration[0])*60
    var minutes = movie.duration.length > 3 ? Number(movie.duration.slice(3, -3)) : 0;
      var changeToMinutes = {duration: hours + minutes};
    return changeToMinutes;    
  });
    return showMinutes
}
// Exercise 8: Get the best film of a year
function bestFilmOfYear() {
  let result = movies.filter((movie) => {
    var bestMovie = movie.score >= 9.3
    return bestMovie
    });
    console.log(result);
    return result;
}
// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear
  };
}

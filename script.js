const movies = [
  {
    title: "Inception",
    year: 2010,
    rating: 8.8,
    genre: ["Action", "Sci-Fi"],
    director: "Christopher Nolan",
  },
  {
    title: "The Dark Knight",
    year: 2008,
    rating: 9.0,
    genre: ["Action", "Crime", "Drama"],
    director: "Christopher Nolan",
  },
  {
    title: "Pulp Fiction",
    year: 1994,
    rating: 8.9,
    genre: ["Crime", "Drama"],
    director: "Quentin Tarantino",
  },
  {
    title: "The Matrix",
    year: 1999,
    rating: 8.7,
    genre: ["Action", "Sci-Fi"],
    director: "Lana Wachowski, Lilly Wachowski",
  },
  {
    title: "Fight Club",
    year: 1999,
    rating: 8.8,
    genre: ["Drama"],
    director: "David Fincher",
  },
];

//1 - Create an array of movie titles.
const titles = movies.map((movie) => movie.title);
console.log(titles);

const moviesHigher_5_8 = movies.filter((movie) => movie.rating > 8.5);
console.log(moviesHigher_5_8);

//3 - Sort the movies by rating in decending order.
const sorted_movies = movies.sort((a, b) => b.rating - a.rating);
console.log(sorted_movies);

//4 - Create an array of movies released after  2000.
const moviesAfter_2000 = movies.filter((movie) => movie.year > 2000);
console.log(moviesAfter_2000);

//5 - Sort the movies asc
const sortedMovies = movies.sort((a, b) => a.year - b.year);
console.log(sortedMovies);

//6 - Create an object that counts the number of movies of each genre.
const genreCount = movies.reduce((acc, movie) => {
  movie.genre.forEach((genre) => {
    acc[genre] = (acc[genre] || 0) + 1;
  });
  return acc;
}, {});
console.log(genreCount);

//7 - Check if all movies have a rating higher than 7.
const higherthan7 = movies.every((movie) => movie.rating > 7);
console.log("Are all movies rated >7", higherthan7);

const avgrating =
  movies.reduce((acc, movie) => acc + movie.rating, 0) / (movies.length || 1); // || 1 just in case the array is empty
console.log("average :", avgrating);

const title_Rating = movies.map((movie) => {
  return { title: movie.title, rating: movie.rating };
});
console.log(title_Rating);

//10 - Check if there is at least one movie in the "Sci-Fi" .
const has_SciFi = movies.some((movie) => {
  return movie.genre.includes("Sci-Fi");
});
console.log("Is there at least one movie in the Sci-Fi genre?", has_SciFi);

//11 - Check if there is at least one movie directed by "Quentin Tarantino".
const directed_bytarantino = movies.some((movie) => {
  return movie.director === "Quentin Tarantino";
});
console.log(" directed by tarantino?", directed_bytarantino);

//12 - Check if all movies relivesd 1990.
const relised_movies = movies.every((movie) => {
  movie.year > 1990;
});
console.log(" movies released after 1990 :", relised_movies);

//13 -  titles of all movies directed by "Christopher Nolan" having rating higher than 8.5 (DSC).
const nolan_movies = movies
  .filter((movie) => movie.director === "Christopher Nolan")
  .filter((movie) => movie.rating > 8.5)
  .sort((a, b) => b.rating - a.rating)
  .map((movie) => movie.title);

console.log("Nolan special movies:", nolan_movies);

//14 - Calculate the average rating of drama movies released before the year 2000.
const avgDrama_bg200 =
  movies
    .filter((movie) => movie.year < 2000)
    .filter((movie) => movie.genre.includes("Drama"))
    .reduce((acc, movie) => acc + movie.rating, 0) / movies.length || 1; // || 1 just in case the array is empty
console.log("average rating of drama movies before 2000:", avgDrama_bg200);

//15 - Create an array of movie titles for movies with a rating higher than 8.5, sorted by their release year.
const hotTitles_sortedByYear = movies
  .filter((movie) => movie.rating > 8.5)
  .sort((a, b) => a.year - b.year)
  .map((movie) => movie.title);
console.log(hotTitles_sortedByYear);

//16 - Find the number of genres covered by movies with a rating higher than 8.8
const Hot_moviesgnr = movies
  .filter((movie) => movie.rating > 8.8)
  .map((movie) => movie.genre)
  .reduce((acc, genres) => acc.concat(genres), [])
  .reduce((uniqueGenres, genre) => {
    return uniqueGenres.includes(genre)
      ? uniqueGenres
      : uniqueGenres.concat(genre);
  }, []).length;
console.log("number of genres  hot movies", Hot_moviesgnr);

//17 - is at least one movie is rated > 9.
const goatedMovie = movies.some((movie) => movie.rating > 9);
console.log("is there a  movie >9?", goatedMovie);

//18 - check if all movies directed by "Christopher nolan" have a rating higher than 8.5

const areAllNolanMovieGood = movies
  .filter((movie) => movie.director === "Christopher Nolan")
  .every((movie) => movie.rating > 8.5);
console.log("are all Nolan movies rated >8.5", areAllNolanMovieGood);

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
    director: "David Fincher",
  },
];

// 1. Array of movie titles
const titles = movies.map((m) => m.title);

// 2. Movies with rating > 8.5
const highRated = movies.filter((m) => m.rating > 8.5);

// 3. Movies sorted by rating (desc)
const sortedByRating = [...movies].sort((a, b) => b.rating - a.rating);

// 4. Movies released after 2000
const post2000 = movies.filter((m) => m.year > 2000);

// 5. Movies sorted by year (asc)
const sortedByYear = [...movies].sort((a, b) => a.year - b.year);

// 6. Genre count
const genreCount = {};
movies.forEach((m) =>
  m.genre.forEach((g) => (genreCount[g] = (genreCount[g] || 0) + 1))
);

// 7. All movies rating > 7
const allAbove7 = movies.every((m) => m.rating > 7);

// 8. Average rating
const avgRating = movies.reduce((sum, m) => sum + m.rating, 0) / movies.length;

// 9. Array with only title and rating
const titleAndRating = movies.map((m) => ({
  title: m.title,
  rating: m.rating,
}));

// 10. At least one Sci-Fi movie
const hasSciFi = movies.some((m) => m.genre.includes("Sci-Fi"));

// 11. At least one by Quentin Tarantino
const hasTarantino = movies.some((m) =>
  m.director.includes("Quentin Tarantino")
);

// 12. All released after 1990
const allAfter1990 = movies.every((m) => m.year > 1990);

// 13. Nolan movies with rating > 8.5, sorted by rating (desc)
const nolanHighRated = movies
  .filter((m) => m.director.includes("Christopher Nolan") && m.rating > 8.5)
  .sort((a, b) => b.rating - a.rating)
  .map((m) => m.title);

// 14. Avg rating of Drama movies before 2000
const dramaBefore2000 = movies.filter(
  (m) => m.year < 2000 && m.genre.includes("Drama")
);
const avgDramaBefore2000 =
  dramaBefore2000.reduce((sum, m) => sum + m.rating, 0) /
  dramaBefore2000.length;

// 15. Titles of movies with rating > 8.5, sorted by year
const highRatedTitlesByYear = movies
  .filter((m) => m.rating > 8.5)
  .sort((a, b) => a.year - b.year)
  .map((m) => m.title);

// 16. Total genres of movies with rating > 8.8
const genresAbove88 = new Set(
  movies.filter((m) => m.rating > 8.8).flatMap((m) => m.genre)
);
const totalGenresAbove88 = genresAbove88.size;

// 17. At least one movie with rating > 9
const hasAbove9 = movies.some((m) => m.rating > 9);

// 18. All Christopher Nolan movies rating > 8.5
const allNolanAbove85 = movies
  .filter((m) => m.director.includes("Christopher Nolan"))
  .every((m) => m.rating > 8.5);
console.log("titles:", titles);
console.log("highRated:", highRated);
console.log("sortedByRating:", sortedByRating);
console.log("post2000:", post2000);
console.log("sortedByYear:", sortedByYear);
console.log("genreCount:", genreCount);
console.log("allAbove7:", allAbove7);
console.log("avgRating:", avgRating);
console.log("titleAndRating:", titleAndRating);
console.log("hasSciFi:", hasSciFi);
console.log("hasTarantino:", hasTarantino);
console.log("allAfter1990:", allAfter1990);
console.log("nolanHighRated:", nolanHighRated);
console.log("avgDramaBefore2000:", avgDramaBefore2000);
console.log("highRatedTitlesByYear:", highRatedTitlesByYear);
console.log("totalGenresAbove88:", totalGenresAbove88);
console.log("hasAbove9:", hasAbove9);
console.log("allNolanAbove85:", allNolanAbove85);

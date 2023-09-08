// fetch("fetch.json")
//     .then(response => response.json())
//     .then(data => showData(data))
//     // .catch(error => console.error("Error fetching data:", error));

// function showData(data) {
//     const moviesListDiv = document.getElementById("movies-list");

//     for (let i = 0; i < data.moviedata.length; i++) {
//          const movieDiv = document.createElement("div");
//         movieDiv.textContent = data.moviedata[i];
//         console.log(moviedata)
//         moviesListDiv.appendChild(movieDiv);
//     }
// }

// Fetch the JSON data
fetch('fetch.json')
  .then(response => response.json())
  .then(data => {
    const movieListElement = document.getElementById('movieList');

   
    data.moviedata.forEach(movie => {
      const movieContainer = document.createElement('div');
      movieContainer.classList.add('movie-container');

      const titleElement = document.createElement('h2');
      titleElement.textContent = movie.title;

      const yearElement = document.createElement('p');
      yearElement.textContent = `Year: ${movie.year}`;

      const genresElement = document.createElement('p');
      genresElement.textContent = `Genres: ${movie.genres.join(', ')}`;

      const imdbRatingElement = document.createElement('p');
      imdbRatingElement.textContent = `IMDb Rating: ${movie.imdbRating}`;

      const storylineElement = document.createElement('p');
      storylineElement.textContent = `Storyline: ${movie.storyline}`;

      const posterElement = document.createElement('img');
      posterElement.src = movie.posterurl;
      posterElement.alt = `${movie.title} Poster`;
      posterElement.classList.add('movie-poster');

      movieContainer.appendChild(titleElement);
      movieContainer.appendChild(yearElement);
      movieContainer.appendChild(genresElement);
      movieContainer.appendChild(imdbRatingElement);
      movieContainer.appendChild(storylineElement);
      movieContainer.appendChild(posterElement);

      movieListElement.appendChild(movieContainer);
    });
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });

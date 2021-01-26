const API = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const IMAGE_API = "https://image.tmdb.org/t/p/w500";
const SEARCHAPI = "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

const Body = document.getElementById('main');
const search = document.getElementById('searchMovie');

function getMovies(link) {
    fetch(link)
        .then((res) => res.json())
        .then((date) => {
            console.log(date);
            showMovies(date);
        })
}

search.addEventListener('input', (movie) => {
    const searchValue = document.getElementById('searchMovie').value.trim();
    if (searchValue) {
        getMovies(SEARCHAPI + searchValue);
        console.log(searchValue);
    }
    if(searchValue.length <1){
        getMovies(API);
    }
});

function showMovies(movies) {
    Body.innerHTML=''

    movies.results.forEach((movie) => {
        //img
        const img = document.createElement('img');
        img.src = IMAGE_API + movie.poster_path;
        img.id = "poster";
        //movie body
        const movieBody = document.createElement('div');
        movieBody.id = "movie";
        //title
        const title = document.createElement('h2');
        title.innerHTML = movie.title;
        title.id = "title";
        //vote avrage
        const vote = document.createElement('span');
        vote.innerHTML = movie.vote_average;
        vote.id = "voteAvrage"
        //vote and title container
        const container = document.createElement('div');
        container.id = "container";
        //overview
        const overview = document.createElement('div');
        overview.id = "overview";
        overview.innerHTML = movie.overview;
        //apend
        Body.appendChild(movieBody);
        movieBody.appendChild(img);
        movieBody.appendChild(container);
        container.appendChild(title);
        container.appendChild(vote);
        movieBody.appendChild(overview);
    })
}

getMovies(API);
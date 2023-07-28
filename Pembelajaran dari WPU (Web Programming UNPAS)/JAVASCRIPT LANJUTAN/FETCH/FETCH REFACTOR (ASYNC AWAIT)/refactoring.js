// IMPLEMENTASI FETCH DENGAN REFACTORING FUNTION
const tombolSearch = document.querySelector(".search-button");

tombolSearch.addEventListener("click", async function() {
    const kolomPencarian = document.querySelector(".input-keyword");

    const movies = await getMovies(kolomPencarian.value);
    updateUI(movies);
});

// Event Binding
document.addEventListener("click", async function(e) {
    if (e.target.classList.contains("modal-detail-button")) {
        const detail = await getDetail(e.target.dataset.imdbid);
        updateDetail(detail);
    }
});

function getDetail(isiDetail) {
    return fetch("http://www.omdbapi.com/?apikey=f268da81&i=" + isiDetail)
        .then((e) => e.json())
        .then((e) => e);
}

function getMovies(keyword) {
    return fetch("http://www.omdbapi.com/?apikey=f268da81&s=" + keyword)
        .then((e) => e.json())
        .then((e) => e.Search);
}

function updateDetail(detailFilm) {
    const isiModal = document.querySelector(".modal-body");
    isiModal.innerHTML = showDetail(detailFilm);
}

function updateUI(movies) {
    let cards = "";
    movies.forEach((m) => (cards += showCards(m)));
    const movieContainer = document.querySelector(".movie-container");
    movieContainer.innerHTML = cards;
}

function showCards(m) {
    return `<div class="col-md-4 my-3">
    <div class="card">
        <img src="${m.Poster}" class="card-img-top gambar-movie" alt="" />
        <div class="card-body">
            <h5 class="card-title">${m.Title}</h5>
            <h6 class="card-subtitle mb-2 text-muted">${m.Year}</h6>
            <a href="#" class="modal-detail-button btn btn-primary" data-bs-toggle="modal" data-bs-target="#movieDetailModal" data-imdbid="${m.imdbID}">Show Details</a>
        </div>
    </div>
    </div>`;
}

function showDetail(detailFilm) {
    return `<div class="container-fluid">
    <div class="row">
        <div class="col-md-3">
            <img src="${detailFilm.Poster}" alt="" class="img-fluid" />
        </div>
        <div class="col-md">
            <ul class="list-group">
                <li class="list-group-item">
                    <h4>${detailFilm.Title} (${detailFilm.Year})</h4>
                </li>
                <li class="list-group-item"><strong>Director: </strong>${detailFilm.Director}</li>
                <li class="list-group-item"><strong>Actors:</strong> ${detailFilm.Actors}</li>
                <li class="list-group-item"><strong>Writer: </strong>${detailFilm.Writer}</li>
                <li class="list-group-item"><strong>Plot: </strong><br />${detailFilm.Plot}</li>
            </ul>
        </div>
    </div>
</div>`;
}
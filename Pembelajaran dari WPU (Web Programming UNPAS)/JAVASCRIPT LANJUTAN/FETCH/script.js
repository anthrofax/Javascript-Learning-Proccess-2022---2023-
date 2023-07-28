// $(".search-button").on("click", function() {
//     $.ajax({
//         url: "http://www.omdbapi.com/?apikey=f268da81&s=" + $(".input-keyword").val(),
//         success: (results) => {
//             const movies = results.Search;
//             let cards = "";
//             movies.forEach((m) => {
//                 cards += showCards(m);
//             });
//             $(".movie-container").html(cards);

//             // ketika tombol diklik
//             $(".tombolDetail").on("click", function() {
//                 $.ajax({
//                     url: "http://www.omdbapi.com/?apikey=f268da81&i=" + $(this).data("imdbid"),
//                     success: (m) => {
//                         const movieDetail = showDetail(m);
//                         $(".modal-body").html(movieDetail);
//                     },
//                     error: (e) => {
//                         console.log(e.responseText);
//                     },
//                 });
//             });
//         },
//         error: (e) => {
//             console.log(e.responseText);
//         },
//     });
// });

// MENGGUNAKAN VANILLA JAVASCRIPT (DENGAN FETCH)
const tombolSearch = document.querySelector(".search-button");
const kolomKetik = document.querySelector(".input-keyword");
const modalDetailButton = document.querySelector(".gambar-movie");

tombolSearch.addEventListener("click", function() {
    const tampungLink = fetch("http://www.omdbapi.com/?apikey=f268da81&s=" + kolomKetik.value);

    tampungLink
        .then((e) => e.json())
        .then((e) => {
            let cards = "";

            e.Search.forEach((m) => (cards += showCards(m)));
            const movieContainer = document.querySelector(".movie-container");
            movieContainer.innerHTML = cards;

            // Ketika tombol detail diklik
            const modalDetailButton = document.querySelectorAll(".modal-detail-button");
            modalDetailButton.forEach((e) => {
                e.addEventListener("click", function() {
                    const isiBody = document.querySelector(".modal-body");
                    let tampilanDetailModal = "";

                    fetch("http://www.omdbapi.com/?apikey=f268da81&i=" + e.dataset.imdbid)
                        .then((e) => e.json())
                        .then((detailFilm) => {
                            isiBody.innerHTML = showDetail(detailFilm);
                        });
                });
            });
        });
});

// Ketika tombol detail diklik
if (modalDetailButton) {
    modalDetailButton.addEventListener("click", function() {
        console.log(this);
    });
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
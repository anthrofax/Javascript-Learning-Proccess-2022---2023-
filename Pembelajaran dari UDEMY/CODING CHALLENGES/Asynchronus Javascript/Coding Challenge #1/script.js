"use strict";

const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");

const renderData = function (data, className = "") {
  const html = `<article class="country ${className}">
    <img class="country__img" src="${data.flags.png}" />
    <div class="country__data">
      <h3 class="country__name">${data.name["common"]}</h3>
      <h4 class="country__region">${data.region}</h4>
      <p class="country__row"><span>👫</span>${data.population}</p>
      <p class="country__row"><span>🗣️</span>${data.languages[`${Object.keys(data.languages)[0]}`]}</p>
      <p class="country__row"><span>💰</span>${data.currencies[`${Object.keys(data.currencies)[0]}`].name}</p>
    </div>
  </article>`;

  countriesContainer.insertAdjacentHTML("beforeend", html);
  //   countriesContainer.style.opacity = '1';
};

const renderError = function (msg) {
  countriesContainer.insertAdjacentText("beforeend", msg);
};

// Coding Challange #1

const whereAmI = function (lat, lng) {
  fetch(`https://geocode.xyz/${lat}, ${lng}?json=1`)
    .then((response) => {
      console.log(response);
      if (!response.ok) throw new Error("Kamu mereload halaman page terlalu cepat!");
      return response.json();
    })
    .then((data) => {
      console.log(data);

      if (data.distance.includes("Throttled!")) throw new Error("Oooopss..");
      return fetch(`https://restcountries.com/v3.1/name/${data.country}`);
    })
    .then((response) => {
      return response.json();
    })
    .then((countryData) => {
      console.log(countryData[0]);
      renderData(countryData[0]);

      const neighbour = countryData[0]?.borders?.[0];

      if (!neighbour) throw new Error(`Negara ${countryData[0].name.common} tidak memiliki negara tetangga.`);

      return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`);
    })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      renderData(data[0], "neighbour");
    })
    .catch((error) => alert(`Masalah : ${error.message}. Coba lagi!`))
    .finally(() => {
      countriesContainer.style.opacity = "1";
    });
};

// navigator.geolocation.getCurrentPosition(currentLoc => {
//   whereAmI(currentLoc.coords.latitude, currentLoc.coords.longitude);
// });

// TEST DATA
// - Coordinates 1: 52.508, 13.381 (Latitude, Longitude)
// - Coordinates 2: 19.037, 72.873
// - Coordinates 3: -33.933, 18.474

whereAmI(19.037, 72.873);

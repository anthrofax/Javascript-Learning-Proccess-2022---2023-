'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

// Asynchronus adalah cara pengeksekusian kode yang dilakukan di latar belakang yang tidak memblokir pengeksekusian kode di baris selanjutnya pada jalur utama meskipun tugas asynchronus di latar belakang tersebut belum selesai.

// Ajax adalah panggilan yang dilakukan yang memungkinkan kita untuk berkomunikasi dengan remote web server secara dinamis, dengan melakukan panggilan AJAX kita bisa melakukan saling bertukar data seperti permintaan dan penerimaan data satu sama lain.

// API adalah sebuah perangkat lunak yang dapat digunakan oleh perangkat lunak lain dengan begitu aplikasi dapat berinteraksi satu sama lain.

const renderData = function (data, className = '') {
  const html = `<article class="country ${className}">
    <img class="country__img" src="${data.flags.png}" />
    <div class="country__data">
      <h3 class="country__name">${data.name['common']}</h3>
      <h4 class="country__region">${data.region}</h4>
      <p class="country__row"><span>👫</span>${data.population}</p>
      <p class="country__row"><span>🗣️</span>${
        data.languages[`${Object.keys(data.languages)[0]}`]
      }</p>
      <p class="country__row"><span>💰</span>${
        data.currencies[`${Object.keys(data.currencies)[0]}`].name
      }</p>
    </div>
  </article>`;

  countriesContainer.insertAdjacentHTML('beforeend', html);
  //   countriesContainer.style.opacity = '1';
};

const renderError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
};

// Cara Lama
/*
const makeCountry = function (negara) {
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.com/v3.1/name/${negara}`);
  request.send();

  request.addEventListener('load', function () {
    const [countryData] = JSON.parse(this.responseText);
    console.log(countryData);

    renderData(countryData);

    const [neighbour] = countryData.borders;

    const request2 = new XMLHttpRequest();
    request2.open('GET', `https://restcountries.com/v3.1/alpha/${neighbour}`);
    request2.send();

    request2.addEventListener('load', function () {
      const [neighbourData] = JSON.parse(this.responseText);

      renderData(neighbourData, 'neighbour');
    });
  });
};
*/

// Jika kita melakukan pemanggilan AJAX, urutan print data negara nya tidak terjamin sama dengan urutan permintaan request (Permintaan yang datanya diterima lebih dahulu yang akan ditampilkan data negaranya)

// Dengan penulisan code di atas (Cara lama), akan memberikan callback hell dalam penulisannya karena kita perlu menuliskan callback di dalam callback jika ingin menampilkan data dari response AJAX CALL dengan urutan yang kita mau (Yang dalam hal ini urutan berdasarkan negara tetangga)
// makeCountry('indonesia');

// Untuk mengatasi hal tersebut, kita bisa menggunakan fitur Javascript yang baru, yaitu Promises. Dengan Promises, kita bisa melakukan chaining jika ingin urutan print berdasarkan yang kita mau

// Definisi Promise
/*
Promise merupakan objek yang dijadikan tempat untuk value yang akan datang di kemudian waktu dari operasi asynchronus, atau dengan kata lain promise adalah container untuk menampung value dari masa depan
*/

// Cara baru menggunakan Fetch API & Promise

const getJSON = function (url, errorMsg = 'Ada yang tidak beres') {
  return fetch(url).then(response => {
    if (!response.ok) throw new Error(errorMsg);

    return response.json();
  });
};

const makeCountry = function (negara) {
  getJSON(
    `https://restcountries.com/v3.1/name/${negara}`,
    'Negara tidak ditemukan!'
  )
    .then(data => {
      renderData(data[0]);
      console.log(data[0]);
      const neighbour = data[0]?.borders?.[0];

      if (!neighbour)
        throw new Error(
          `Negara ${data[0].name.common} tidak memiliki negara tetangga.`
        );

      return getJSON(
        `https://restcountries.com/v3.1/alpha/${neighbour}`,
        'Negara tidak ditemukan!'
      );
    })
    .then(neighbourData => renderData(neighbourData[0], 'neighbour'))
    .catch(err => {
      console.error(`${err} 📛📛📛`);
      renderError(`Ada yang tidak beres 📛📛📛, ${err.message}. Coba lagi!`);
    })
    .finally(() => {
      countriesContainer.style.opacity = '1';
    });
};

btn.addEventListener('click', makeCountry.bind(this, 'usa'));

// Bisa dilihat, dengan menggunakan cara baru (Fetch & Promise), kita tidak perlu menggunakan addEventListener beserta callback dan memungkinkan kita untuk melakukan chaining setiap kita mendapatkan promise dari proses asynchronus task. Dengan begitu, kita bisa menghindari callback hell pada penulisan code kita.

// Coding Challange #1
/*
const whereAmI = function (lat, lng) {
  fetch(`https://geocode.xyz/${lat}, ${lng}?json=1`)
    .then(response => {
      console.log(response);
      if (!response.ok)
        throw new Error('Kamu mereload halaman page terlalu cepat!');
      return response.json();
    })
    .then(data => {
      console.log(data);

      if (data.distance.includes('Throttled!')) throw new Error('Oooopss..');
      return fetch(`https://restcountries.com/v3.1/name/${data.country}`);
    })
    .then(response => {
      return response.json();
    })
    .then(countryData => {
      console.log(countryData[0]);
      renderData(countryData[0]);

      const neighbour = countryData[0]?.borders?.[0];

      if (!neighbour)
        throw new Error(
          `Negara ${countryData[0].name.common} tidak memiliki negara tetangga.`
        );

      return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`);
    })
    .then(response => {
      return response.json();
    })
    .then(data => {
      renderData(data[0], 'neighbour');
    })
    .catch(error => alert(`Masalah : ${error.message}. Coba lagi!`))
    .finally(() => {
      countriesContainer.style.opacity = '1';
    });
};

// navigator.geolocation.getCurrentPosition(currentLoc => {
//   whereAmI(currentLoc.coords.latitude, currentLoc.coords.longitude);
// });


// TEST DATA
// - Coordinates 1: 52.508, 13.381 (Latitude, Longitude)
// - Coordinates 2: 19.037, 72.873
// - Coordinates 3: -33.933, 18.474


whereAmI(52.508, 13.381);
*/

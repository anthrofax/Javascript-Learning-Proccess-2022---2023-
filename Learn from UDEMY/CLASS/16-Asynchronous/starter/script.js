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
  countriesContainer.style.opacity = '1';
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

// Buat whereAmI function dengan async await
const getlocation = function () {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

const whereAmI = async function () {
  try {
    const curLocation = await getlocation();
    const { latitude: lat, longitude: lng } = curLocation.coords;

    const geoReverseResponse = await fetch(
      `https://geocode.xyz/${lat}, ${lng}?json=1`
    );

    const myCurLocInfo = await geoReverseResponse.json();

    if (!myCurLocInfo.country)
      throw new Error('Anda mereload page terlalu cepat, coba sekali lagi!');

    const countryInfoResponse = await fetch(
      `https://restcountries.com/v3.1/name/${myCurLocInfo.country}`
    );
    const myCountryInfo = await countryInfoResponse.json();

    renderData(myCountryInfo[0]);
    countriesContainer.style.opacity = '1';

    const neighbourInfoResponse = await fetch(
      `https://restcountries.com/v3.1/alpha/${myCountryInfo[0]?.borders?.[0]}`
    );

    const neighbourInfo = await neighbourInfoResponse.json();

    renderData(neighbourInfo[0], 'neighbour');

    return `I am in ${myCurLocInfo.city} right now, ${myCurLocInfo.country}.`;
  } catch (err) {
    renderError(`${err.message}!!!!!!!`);

    // Rethrow the error. (Untuk mengatur promise value pada async function menjadi reject)
    throw err;
  }
};

// Sub Challenge, merubah penulisan mixed async await dengan consuming promise with then ke penulisan ke penggunakan async await saja tanpa harus mencampur dengan then promise consume (menggunakan IIFE)
// whereAmI()
//   .then(city => console.log(`2: ${city}`))
//   .catch(err => console.error(`2: ${err.message} 💥`))
//   .finally(() => console.log('3: Finished getting location'));

// Done Challenge :
console.log('1: Will get a location.');

(async function () {
  try {
    const city = await whereAmI();
    console.log(city);
  } catch (err) {
    console.error(`2: ${err}`);
  }
  console.log('3: Finished getting location.');
})();

// Running Promises in Parallel (Using Promise.all combinator)
const get3Countries = async function (c1, c2, c3) {
  try {
    // const [data1] = await getJSON(
    //   `https://restcountries.eu/rest/v2/name/${c1}`
    // );
    // const [data2] = await getJSON(
    //   `https://restcountries.eu/rest/v2/name/${c2}`
    // );
    // const [data3] = await getJSON(
    //   `https://restcountries.eu/rest/v2/name/${c3}`
    // );
    // console.log([data1.capital, data2.capital, data3.capital]);

    const data = await Promise.all([
      getJSON(`https://restcountries.eu/rest/v2/name/${c1}`),
      getJSON(`https://restcountries.eu/rest/v2/name/${c2}`),
      getJSON(`https://restcountries.eu/rest/v2/name/${c3}`),
    ]);
    console.log(data.map(d => d[0].capital));
  } catch (err) {
    console.error(err);
  }
};
get3Countries('portugal', 'canada', 'tanzania');

// Other Promise Combinators: race, allSettled and any
// Promise.race
(async function () {
  const res = await Promise.race([
    getJSON(`https://restcountries.eu/rest/v2/name/italy`),
    getJSON(`https://restcountries.eu/rest/v2/name/egypt`),
    getJSON(`https://restcountries.eu/rest/v2/name/mexico`),
  ]);
  console.log(res[0]);
})();

const timeout = function (sec) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error('Request took too long!'));
    }, sec * 1000);
  });
};

Promise.race([
  getJSON(`https://restcountries.eu/rest/v2/name/tanzania`),
  timeout(5),
])
  .then(res => console.log(res[0]))
  .catch(err => console.error(err));

// Promise.allSettled
Promise.allSettled([
  Promise.resolve('Success'),
  Promise.reject('ERROR'),
  Promise.resolve('Another success'),
]).then(res => console.log(res));

Promise.all([
  Promise.resolve('Success'),
  Promise.reject('ERROR'),
  Promise.resolve('Another success'),
])
  .then(res => console.log(res))
  .catch(err => console.error(err));

// Promise.any [ES2021]
Promise.any([
  Promise.resolve('Success'),
  Promise.reject('ERROR'),
  Promise.resolve('Another success'),
])
  .then(res => console.log(res))
  .catch(err => console.error(err));

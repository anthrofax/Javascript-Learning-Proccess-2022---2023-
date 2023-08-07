// // Tanpa Async Await
// const coba = new Promise((resolve) => {
//     setTimeout(() => {
//         resolve("Selesai!");
//     }, 2000);
// });

// coba.then(() => console.log(coba));

// Dengan Async Await
function cobaPromise() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Selesai!");
        }, 2000);
    });
}

function cobaAsync() {
    const coba = cobaPromise();
    console.log(coba);
}

cobaAsync();

// // Melakukan Error Handling
// function cobaPromise() {
//     return new Promise((resolve, reject) => {
//         const waktu = 3000;
//         if (waktu < 5000) {
//             setTimeout(() => {
//                 resolve("Selesai!");
//             }, waktu);
//         } else {
//             reject("Kelamaan!");
//         }
//     });
// }

// // const coba = cobaPromise();
// // coba.then(() => console.log(coba)).catch(() => console.log(coba));

// // Memanggil Promise dengan function Async Await (Tanpa then/catch)
// async function cobaAsync() {
//     try {
//         const coba = await cobaPromise();
//         console.log(coba);
//     } catch (err) {
//         console.error(err);
//     }
// }

// cobaAsync();
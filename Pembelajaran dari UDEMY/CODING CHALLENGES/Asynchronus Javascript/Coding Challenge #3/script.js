const createImage = function (imgPath) {
  return new Promise(function (resolve, reject) {
    const image = document.createElement("img");
    image.src = imgPath;

    image.addEventListener("load", function () {
      image.setAttribute("width", "100%");
      image.classList.add("images");
      document.querySelector(".images").append(image);
      resolve(image);
    });

    image.addEventListener("error", function () {
      reject(new Error("Gambar tidak berhasil ditemukan"));
    });
  });
};

const wait = function (second, resolveValue = "") {
  return new Promise(function (resolve) {
    let i = 1;

    const intervalID = setInterval(() => {
      console.log(i++);
    }, 1000);

    setTimeout(function () {
      clearInterval(intervalID);
      resolve(resolveValue);
    }, second * 1000);
  });
};

const loadNPause = async function () {
  try {
    const imageElement = await createImage("img/img-1.jpg");
    const stillImageElement = await wait(2, imageElement);

    stillImageElement.style.display = "none";

    const imageElement2 = await createImage("img/img-3.jpg");
    const stillImageElement2 = await wait(2, imageElement2);

    stillImageElement2.style.display = "none";
  } catch (err) {
    console.error(`${err.message} 💥`);
  }
};

// loadNPause();

// Part 2
// My Work (Using chat GPT):
// const imgArr = ["img/img-1.jpg", "img/img-2.jpg", "img/img-3.jpg"];

// const loadAll = async function (imagePaths) {
//   try {
//     const imgs = await Promise.all(imagePaths.map((path) => createImage(path)));

//     imgs.forEach((img) => {
//       img.classList.add("parallel");
//     });
//   } catch (err) {
//     console.error(err.message);
//   }
// };

// loadAll(imgArr);

// Jonas' result
const loadAll = async function (imgArr) {
  try {
    const imgs = imgArr.map(async (img) => await createImage(img));
    const imgsEl = await Promise.all(imgs);
    console.log(imgsEl);
    imgsEl.forEach((img) => img.classList.add("parallel"));
  } catch (err) {
    console.error(err);
  }
};
loadAll(["img/img-1.jpg", "img/img-2.jpg", "img/img-3.jpg"]);

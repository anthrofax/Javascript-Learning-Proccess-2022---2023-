const createImage = function (imgPath) {
  return new Promise(function (resolve, reject) {
    const image = document.createElement("img");
    image.src = imgPath;

    image.addEventListener("load", function () {
      image.setAttribute("width", "100%");
      document.body.append(image);
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

createImage("img/img-1.jpg")
  .then((imageElement) => {
    return wait(2, imageElement);
  })
  .then((imageElement) => {
    imageElement.style.display = "none";

    return createImage("img/img-3.jpg");
  })
  .then((image2Element) => {
    return wait(2, image2Element);
  })
  .then((image2Element) => {
    image2Element.style.display = "none";
  })
  .catch((error) => console.error(error.message));

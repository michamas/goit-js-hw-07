import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector(".gallery");

// create gallery of divs with imgs from galleryItems
const createGallery = () => {
  for (let i = 0; i < galleryItems.length; i++) {
    let galleryDiv = document.createElement("div");

    let galleryLink = document.createElement("a");
    galleryLink.classList.add("gallery__item");
    galleryLink.href = galleryItems[i].original;

    let galleryImg = document.createElement("img");
    galleryImg.classList.add("gallery__image");
    galleryImg.src = galleryItems[i].preview;
    galleryImg.alt = galleryItems[i].description;

    gallery.append(galleryDiv);
    galleryDiv.append(galleryLink);
    galleryLink.append(galleryImg);
  }
  console.log("I've created a gallery of small imgs");
};
//execute function
createGallery();

//handling click - works if you click only on a picture
// creates img by basicLightbox function "create"

function clickImg(e) {
  //   if (e.target.nodeName !== "IMG") {
  //     return;
  //   }
  const instance = new SimpleLightbox("img");
  // `<img src = ${e.target.dataset.source}>`

  instance.show();
  console.log(e.target.alt);
}

// document.addEventListener("keydown", function closeImg(event) {
//   if (event.key === "Escape") {
//     instance.close();
//     console.log("pressed ESC");
//     document.removeEventListener("keydown", closeImg);
//   }
// });

gallery.addEventListener("click", clickImg);
console.log(galleryItems);

import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");

// create gallery of divs with imgs from galleryItems
const createGallery = () => {
  for (let i = 0; i < galleryItems.length; i++) {
    let galleryDiv = document.createElement("div");
    galleryDiv.classList.add("gallery__item");

    let galleryLink = document.createElement("a");
    galleryLink.classList.add("gallery__link");
    // galleryLink.href = galleryItems[i].original;

    let galleryImg = document.createElement("img");
    galleryImg.classList.add("gallery__image");
    galleryImg.src = galleryItems[i].preview;
    galleryImg.dataset.source = galleryItems[i].original;
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
  if (e.target.classList.contains("gallery__image")) {
    const instance = basicLightbox.create(
      `<img src = ${e.target.dataset.source}>`
    );

    /*
add in the end :,
      ,{ closable: false }

*/
    // e.preventDefault;
    console.log(e.target.alt);
    instance.show();
  }
}
/*
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    instance.close();
    console.log("pressed ESC");
  }
});
*/
gallery.addEventListener("click", clickImg);

console.log(galleryItems);

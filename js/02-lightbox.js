import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector(".gallery");

// create gallery of divs with imgs from galleryItems
const createGallery = () => {
  for (let i = 0; i < galleryItems.length; i++) {
    let galleryLink = document.createElement("a");
    galleryLink.classList.add("gallery__item");
    galleryLink.href = galleryItems[i].original;

    let galleryImg = document.createElement("img");
    galleryImg.classList.add("gallery__image");
    galleryImg.src = galleryItems[i].preview;
    galleryImg.alt = galleryItems[i].description;

    gallery.append(galleryLink);
    galleryLink.append(galleryImg);
  }
  console.log("I've created a gallery of small imgs");
};
//execute function
createGallery();

// point to SimpleLightbox which elements we want to handle
const lightbox = new SimpleLightbox(".gallery .gallery__item");
lightbox.on("enableKeyboard.simplelightbox", function () {});

console.log(galleryItems);

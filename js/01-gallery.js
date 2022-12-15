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
    galleryLink.href = galleryItems[i].original;

    let galleryImg = document.createElement("img");
    galleryImg.classList.add("gallery__image");
    galleryImg.src = galleryItems[i].preview;
    galleryImg.alt = galleryItems[i].description;

    gallery.append(galleryDiv);
    galleryDiv.append(galleryLink);
    galleryLink.append(galleryImg);
  }
  console.log("I've created a gallery of imgs' previews");
};
createGallery(); //execute function

//div.gallery listener -

console.log(galleryItems);

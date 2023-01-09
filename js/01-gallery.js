import { galleryItems } from './gallery-items.js';
// Change code below this line
const gallery = document.querySelector('.gallery');
const markup = galleryItems.reduce((acc, {original, preview, description}) => acc + `<div class="gallery__item">
<a class = "gallery__link" href="${original}"><img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}"/></a></div>`, '');
gallery.insertAdjacentHTML('afterbegin', markup);

gallery.addEventListener('click', clickHandler);
function clickHandler (event) {
event.preventDefault();
const modalWindowImage = event.target.dataset.source; 
const instance = basicLightbox.create(`<img src="${modalWindowImage}"/>`);
instance.show();
};
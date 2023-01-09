import { galleryItems } from './gallery-items.js';
// Change code below this line
const gallery = document.querySelector('.gallery');
const markup = galleryItems.reduce((acc, {original, preview, description}) => acc + `<a class="gallery__item" href="${original}">
<img class="gallery__image" src="${preview}" alt="${description}"/></a>`,'');
gallery.insertAdjacentHTML('afterbegin', markup);

gallery.addEventListener('click', clickHandler);
function clickHandler (event) {
event.preventDefault();
const modalWindowImage = event.target.alt;
let instance = new SimpleLightbox('gallery');
instance.on(`show.instance`);
console.log(modalWindowImage);
console.log(gallery);
console.log(instance);
};
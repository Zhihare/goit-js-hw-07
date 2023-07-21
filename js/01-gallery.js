import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const containerGallery = document.querySelector(".gallery");
containerGallery.addEventListener("click", openOriginalImg);

const markup = galleryItems.reduce((acc, { preview, original, description }) =>
    acc +
    `
 <li>
   <img src="${preview}" alt="${description}" data-source="${original}" loading="lazy" width="350">
 </li>
 `,
    ""
);

containerGallery.insertAdjacentHTML('beforeend', markup);

const instance = basicLightbox.create(`
    <img  width="1280" height="600">
`)

function openOriginalImg(e) {

    e.preventDefault();
    const datasetSource = e.target.dataset.source;
    if (!datasetSource) return;
    instance.element().querySelector('img').src = datasetSource;
    instance.show();
    console.dir(e);
};
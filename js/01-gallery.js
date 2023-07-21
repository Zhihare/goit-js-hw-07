import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const containerGallery = document.querySelector(".gallery");
containerGallery.addEventListener("click", openOriginalImg);

const markup = galleryItems.reduce((acc, { preview, original, description }) =>
    acc +
    `
 <li class="gallery__item">
  <a class="gallery__link" href="${original}">
   <img  class="gallery__image"
    src="${preview}"
     alt="${description}" 
     data-source="${original}" loading="lazy" width="350">
     </a>
 </li>
 `,
    ""
);

containerGallery.insertAdjacentHTML('beforeend', markup);

const instance = basicLightbox.create(`
    <img  width="1280" height="600">
`,
    {
        onShow: (instance) => {
            window.addEventListener('keydown', onEscKeyPress);
        },
        onClose: (instance) => {
            window.removeEventListener('keydown', onEscKeyPress);
        },
    }
);

function openOriginalImg(e) {

    e.preventDefault();
    const datasetSource = e.target.dataset.source;
    if (!datasetSource) return;
    instance.element().querySelector('img').src = datasetSource;
    instance.show();
    //   console.dir(e);
};

function onEscKeyPress(e) {
    if (e.code !== 'Escape') return;
    instance.close();
}

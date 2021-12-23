// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const options = {
	captions: true,
	captionDelay: 250,
	captionsData: "alt",
};

const galleryRefs = document.querySelector('.gallery');

(function createMarkup() {
  const itemMarkup = galleryItems
    .map(({ preview, original, description }) => {
      return `
    <div class="gallery__item">
        <a class="gallery__link" href="${original}">
            <img
                class="gallery__image"
                src="${preview}"
                data-source="${original}"
                alt="${description}"
            />
        </a>
    </div>
    `;
    })
    .join("");
  galleryRefs.insertAdjacentHTML("beforeend", itemMarkup);
})();

new SimpleLightbox('.gallery a', options);

console.log(galleryItems);

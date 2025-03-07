import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const lightbox = new SimpleLightbox('.gallery a', {
  captions: true,
  captionsData: 'alt',
  captionDelay: 250,
});
const gallery = document.querySelector('.gallery');

export function showGallery(images) {
  const galleryMarkup = images
    .map(
      ({
        largeImageURL,
        webformatURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) =>
        `<li class="gallery-item">
        <a class="gallery-link" href="${largeImageURL}">
          <img
            class="gallery-image"
            src="${webformatURL}"
            alt="${tags}"
          />
        </a>
        <ul class="image-info">
          <li>
            <h5>Likes</h5>
            <p>${likes}</p>
          </li>
          <li>
            <h5>Views</h5>
            <p>${views}</p>
          </li>
          <li>
            <h5>Comments</h5>
            <p>${comments}</p></p>
          </li>
          <li>
            <h5>Downloads</h5>
            <p>${downloads}</p>
          </li>
        </ul>
      </li>`
    )
    .join('');

  gallery.insertAdjacentHTML('beforeend', galleryMarkup);

  lightbox.refresh();
}

export function clearGallery() {
  gallery.innerHTML = '';
}

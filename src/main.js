import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { getImages } from './js/pixabay-api';
import { showGallery, clearGallery } from './js/render-functions';

const refs = {
  searchForm: document.querySelector('#search-form'),
  searchInput: document.querySelector('#search-input'),
  gallery: document.querySelector('.gallery'),
  jsLoader: document.querySelector('.js-loader'),
  loadBtn: document.querySelector('.load-btn'),
};

let searchName = '';
let page = 1;
let perPage = 40;
let totalHits = 0;

refs.searchForm.addEventListener('submit', handleSubmit);
refs.loadBtn.addEventListener('click', handleLoadMore);

async function handleSubmit(e) {
  e.preventDefault();
  clearGallery();
  page = 1;
  totalHits = 0;
  hideLoadBtn();

  searchName = e.target.elements.query.value.trim();

  if (!searchName) {
    warningMsg('Please fill in the field!');
    return;
  }

  showLoader();

  try {
    const data = await getImages(searchName, page, perPage);
    totalHits = data.totalHits;

    if (!data.hits.length) {
      errorMsg(
        'Sorry, there are no images matching your search query. Please try again!'
      );
      return;
    }

    showGallery(data.hits);
    if (page * perPage < totalHits) {
      showLoadBtn();
    }
  } catch (error) {
    console.error('Error fetching images:', error);
    errorMsg('Something went wrong. Please try again.');
  } finally {
    hideLoader();
  }
}

async function handleLoadMore() {
  page += 1;
  showLoader();

  try {
    const data = await getImages(searchName, page, perPage);
    showGallery(data.hits);
    scrollGallery();

    if (page * perPage >= totalHits) {
      hideLoadBtn();
      warningMsg("We're sorry, but you've reached the end of search results.");
    }
  } catch (error) {
    console.error('Error fetching more images:', error);
    errorMsg('Something went wrong while loading more images.');
  } finally {
    hideLoader();
  }
}

function showLoader() {
  refs.jsLoader.innerHTML = '<span class="loader"></span>';
}

function hideLoader() {
  refs.jsLoader.textContent = '';
}

function showLoadBtn() {
  refs.loadBtn.classList.remove('hidden');
}

function hideLoadBtn() {
  refs.loadBtn.classList.add('hidden');
}

function scrollGallery() {
  const images = refs.gallery.children;
  if (images.length > 1) {
    const { height } = images[0].getBoundingClientRect();
    window.scrollBy({
      top: height * 2,
      behavior: 'smooth',
    });
  }
}

function warningMsg(message) {
  iziToast.warning({
    messageColor: '#fff',
    backgroundColor: '#6c8cff',
    theme: 'dark',
    position: 'topRight',

    message,
  });
}

function errorMsg(message) {
  iziToast.error({
    messageColor: '#fff',
    backgroundColor: '#ef4040',
    theme: 'dark',
    position: 'topRight',
    message,
  });
}

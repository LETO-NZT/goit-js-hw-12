import { fetchImages } from './js/pixabay-api';
import { renderImages, clearGallery, showLoader, hideLoader } from './js/render-functions.js';
import iziToast from 'izitoast'; 

function init() {
  const form = document.querySelector(".form");
  const input = document.querySelector("input[name='search-input']");
  const loadMoreBtn = document.querySelector(".load-more");

  if (!form || !input) {
    console.error("Не найдены необходимые элементы формы.");
    return;
  }

  let currentPage = 1;
  let currentQuery = '';
  const perPage = 15;
  let totalHits = 0;

  form.addEventListener("submit", async event => {
    event.preventDefault();
    currentQuery = input.value.trim();
    currentPage = 1;

    if (!currentQuery) {
      iziToast.warning({
        message: "Please enter a search query!",
        position: "topRight",
      });
      return;
    }

    clearGallery();
    hideLoadMoreBtn();
    showLoader();

    try {
      const response = await fetchImages(currentQuery, currentPage, perPage);
      const images = response.images;
      totalHits = response.total;

      if (!images.length) {
        iziToast.error({
          message: "Sorry, there are no images matching your search query. Please try again!",
          position: "topRight",
        });
        return;
      }

      renderImages(images);

      if (totalHits > perPage) {
        showLoadMoreBtn();
      }
    } catch (error) {
      iziToast.error({
        message: "Something went wrong. Please try again later.",
        position: "topRight",
      });
    } finally {
      hideLoader();
      input.value = "";
    }
  });

  loadMoreBtn.addEventListener("click", async () => {
    currentPage += 1;
    showLoader(true);

    try {
      const response = await fetchImages(currentQuery, currentPage, perPage);
      const images = response.images;

      renderImages(images);
      smoothScroll();

      const imagesLoaded = currentPage * perPage;
      if (imagesLoaded >= totalHits) {
        iziToast.info({
          message: "We're sorry, but you've reached the end of search results.",
          position: "topRight",
        });
        hideLoadMoreBtn();
      }
    } catch (error) {
      iziToast.error({
        message: "Error loading more images.",
        position: "topRight",
      });
    } finally {
      hideLoader();
    }
  });

  function showLoadMoreBtn() {
    loadMoreBtn.hidden = false;
  }

  function hideLoadMoreBtn() {
    loadMoreBtn.hidden = true;
  }

  function smoothScroll() {
    const { height: cardHeight } = document
      .querySelector(".gallery")
      .firstElementChild.getBoundingClientRect();

    window.scrollBy({
      top: cardHeight * 2,
      behavior: "smooth",
    });
  }
}


init();

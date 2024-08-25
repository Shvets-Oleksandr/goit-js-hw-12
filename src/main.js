'use strict'

import { createGalleryCardTemplate } from "./js/render-functions.js";
import { fetchImg } from "./js/pixabay-api.js";

import iziToast from "izitoast";
import SimpleLightbox from "simplelightbox";


const searchForm = document.querySelector('.js-search-form');
const galleryEl = document.querySelector('.js-gallery');
const loaderEl = document.querySelector('.js-loader');


let lightbox;

const onSearchFormSubmit = (event) => {
    event.preventDefault();

    galleryEl.innerHTML = '';

    loaderEl.classList.remove('is-hidden');

    const searchValue = searchForm.elements.search.value;

     if (!searchValue) {
        iziToast.error({
            title: 'Error',
            message: 'Please enter a search query.',
            position: "topRight",
        });
        loaderEl.classList.add('is-hidden');
        return;
    }

    fetchImg(searchValue)
    .then(data => {

            if (data.hits.length === 0) {
                iziToast.error({
                    title: 'Error',
                    message: 'Sorry, there are no images matching your search query. Please try again!',
                    position: "topRight",
                });
            loaderEl.classList.add('is-hidden');;
            searchForm.reset()
            return; 
        }
            const galleryImgTemplate = data.hits.map(cardDetais => createGalleryCardTemplate(cardDetais)).join('');
            loaderEl.classList.add('is-hidden');;
            galleryEl.innerHTML = galleryImgTemplate;
           

            if (!lightbox) {
                lightbox = new SimpleLightbox('.gallery a', {
                    captionsData: 'alt',
                    captionDelay: 150,
                });

            } else {

                lightbox.refresh();
            }

        })
        .catch(error => {
            iziToast.error({
                title: 'Error',
                message: 'The server is not responding or does not exist',
                position: "topRight",
            });
            loaderEl.classList.add('is-hidden');;
        });

}
searchForm.addEventListener('submit', onSearchFormSubmit);
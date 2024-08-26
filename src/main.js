'use strict'

import { createGalleryCardTemplate } from "./js/render-functions.js";
import { axiosImg } from "./js/pixabay-api.js";

import iziToast from "izitoast";
import SimpleLightbox from "simplelightbox";


const searchForm = document.querySelector('.js-search-form');
const galleryEl = document.querySelector('.js-gallery');
const loaderEl = document.querySelector('.js-loader');
const loadMoreBtnEl = document.querySelector('.js-load-more-button');


let curentPage = 33;
let searchValue = '';
let lightbox;

const onSearchFormSubmit = async (event) => {

    try {
        event.preventDefault();

        galleryEl.innerHTML = '';

        loaderEl.classList.remove('is-hidden');

        searchValue = searchForm.elements.search.value;

        curentPage = 1;
        
        if (!searchValue) {
            
            iziToast.error({
                title: 'Error',
                message: 'Please enter a search query.',
                position: 'topRight',
            });

            loaderEl.classList.add('is-hidden');
            return;
        }

        const response = await axiosImg(searchValue, curentPage);
        
        if (response.data.hits.length === 0) {
            iziToast.error({
                title: 'Error',
                message: 'Sorry, there are no images matching your search query. Please try again!',
                position: 'topRight',
            });
            loaderEl.classList.add('is-hidden');
            searchForm.reset();
            return;
        }

        const galleryImgTemplate = response.data.hits.map(cardDetais => createGalleryCardTemplate(cardDetais)).join('');

        loaderEl.classList.add('is-hidden');

        galleryEl.innerHTML = galleryImgTemplate;

        loadMoreBtnEl.classList.remove('is-hidden');
           

        if (!lightbox) {
            lightbox = new SimpleLightbox('.gallery a', {
                captionsData: 'alt',
                captionDelay: 150,
            });

        } else {
            lightbox.refresh();
        }
        

    } catch (error) {

        const statusCode = error.response ? error.response.status : 'No response from server';

        iziToast.error({
            title: 'Error',
            message: `Status Code: ${statusCode} - ${error.message}`,
            position: 'topRight',
        });

        loaderEl.classList.add('is-hidden');
    };
    
}


const onLoadMoreBtnClick = async (event) => {

    try {

        curentPage++;

        loaderEl.classList.remove('is-hidden');

        loadMoreBtnEl.classList.add('is-hidden');

        const response = await axiosImg(searchValue, curentPage);

        const galleryImgTemplate = response.data.hits.map(cardDetais => createGalleryCardTemplate(cardDetais)).join('');

        loaderEl.classList.add('is-hidden');

        galleryEl.insertAdjacentHTML('beforeend', galleryImgTemplate);

        lightbox.refresh();

        loadMoreBtnEl.classList.remove('is-hidden');


        if (curentPage >= response.data.totalHits) {
            loadMoreBtnEl.classList.add('is-hidden');
            iziToast.info({
                message: "We're sorry, but you've reached the end of search results.",
                position: 'topRight',
            });
        }

    } catch (error) {
        const statusCode = error.response ? error.response.status : 'No response from server';

        iziToast.error({
            title: 'Error',
            message: `Status Code: ${statusCode} - ${error.message}`,
            position: 'topRight',
        });

        loaderEl.classList.add('is-hidden');
        
    }
    
};

searchForm.addEventListener('submit', onSearchFormSubmit);
loadMoreBtnEl.addEventListener('click', onLoadMoreBtnClick);
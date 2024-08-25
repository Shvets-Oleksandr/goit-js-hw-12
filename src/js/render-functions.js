'use strict'

export const createGalleryCardTemplate = (cardInfo) => {
    return `
    <li class="gallery-item">
        <a href="${cardInfo.largeImageURL}">
            <img src="${cardInfo.webformatURL}"
                alt="${cardInfo.tags}"
                width="360"
                height="152"
            />
        </a>

        <ul class="img-statistics">
            <li class="img-statistics-item">
                <h3 class="img-statistics-item-title">Likes</h3>
                <p class="img-statistics-item-value">${cardInfo.likes}</p>
            </li>
            <li class="img-statistics-item">
                <h3 class="img-statistics-item-title">Views</h3>
                <p class="img-statistics-item-value">${cardInfo.views}</p>
            </li>
            <li class="img-statistics-item">
                <h3 class="img-statistics-item-title">Comments</h3>
                <p class="img-statistics-item-value">${cardInfo.comments}</p>
            </li>
            <li class="img-statistics-item">
                <h3 class="img-statistics-item-title">Downloads</h3>
                <p class="img-statistics-item-value">${cardInfo.downloads}</p>
            </li>
        </ul>
    </li>
    `;
}
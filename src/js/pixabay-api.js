'use strict'

const baseUrl ='https://pixabay.com';

export const fetchImg = (searchQuery) => {

    const urlParams = new URLSearchParams ({
        q: searchQuery,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        key: '45444033-7a199cc8ba7e30bdfbfaa3141',

    })

    return fetch(`${baseUrl}/api/?${urlParams}`)
     .then(response => {
            if (!response.ok) {
                throw new Error(response.status);
            }
            return response.json();
        })
}


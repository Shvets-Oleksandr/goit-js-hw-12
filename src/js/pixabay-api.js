'use strict'

import axios from 'axios';

axios.defaults.baseURL ='https://pixabay.com/api/';

export const axiosImg = (searchQuery, page) => {

    const axiosParams = {
        params: {
            q: searchQuery,
            image_type: 'photo',
            orientation: 'horizontal',
            safesearch: true,
            page: page,
            per_page: 15,
            key: '45444033-7a199cc8ba7e30bdfbfaa3141',
        },
    }

    return axios.get('', axiosParams);
};


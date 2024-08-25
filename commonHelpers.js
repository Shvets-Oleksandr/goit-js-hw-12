import{i as c,S as u}from"./assets/vendor-f33cd494.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function i(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(e){if(e.ep)return;e.ep=!0;const s=i(e);fetch(e.href,s)}})();const d=t=>`
    <li class="gallery-item">
        <a href="${t.largeImageURL}">
            <img src="${t.webformatURL}"
                alt="${t.tags}"
                width="360"
                height="152"
            />
        </a>

        <ul class="img-statistics">
            <li class="img-statistics-item">
                <h3 class="img-statistics-item-title">Likes</h3>
                <p class="img-statistics-item-value">${t.likes}</p>
            </li>
            <li class="img-statistics-item">
                <h3 class="img-statistics-item-title">Views</h3>
                <p class="img-statistics-item-value">${t.views}</p>
            </li>
            <li class="img-statistics-item">
                <h3 class="img-statistics-item-title">Comments</h3>
                <p class="img-statistics-item-value">${t.comments}</p>
            </li>
            <li class="img-statistics-item">
                <h3 class="img-statistics-item-title">Downloads</h3>
                <p class="img-statistics-item-value">${t.downloads}</p>
            </li>
        </ul>
    </li>
    `,g="https://pixabay.com",p=t=>{const r=new URLSearchParams({q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,key:"45444033-7a199cc8ba7e30bdfbfaa3141"});return fetch(`${g}/api/?${r}`).then(i=>{if(!i.ok)throw new Error(i.status);return i.json()})},m=document.querySelector(".js-search-form"),h=document.querySelector(".js-gallery"),a=document.querySelector(".js-loader");let n;const f=t=>{t.preventDefault(),h.innerHTML="",a.classList.remove("is-hidden");const r=m.elements.search.value;if(!r){c.error({title:"Error",message:"Please enter a search query.",position:"topRight"}),a.classList.add("is-hidden");return}p(r).then(i=>{if(i.hits.length===0){c.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),a.classList.add("is-hidden"),m.reset();return}const o=i.hits.map(e=>d(e)).join("");a.classList.add("is-hidden"),h.innerHTML=o,n?n.refresh():n=new u(".gallery a",{captionsData:"alt",captionDelay:150})}).catch(i=>{c.error({title:"Error",message:"The server is not responding or does not exist",position:"topRight"}),a.classList.add("is-hidden")})};m.addEventListener("submit",f);
//# sourceMappingURL=commonHelpers.js.map

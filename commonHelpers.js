import{a as d,i as c,S as g}from"./assets/vendor-KI8m5ffe.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const i of e)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function r(e){const i={};return e.integrity&&(i.integrity=e.integrity),e.referrerPolicy&&(i.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?i.credentials="include":e.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(e){if(e.ep)return;e.ep=!0;const i=r(e);fetch(e.href,i)}})();const h=t=>`
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
    `;d.defaults.baseURL="https://pixabay.com/api/";const p=t=>{const s={params:{q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,key:"45444033-7a199cc8ba7e30bdfbfaa3141"}};return d.get("",s)},m=document.querySelector(".js-search-form"),u=document.querySelector(".js-gallery"),a=document.querySelector(".js-loader");let n;const f=async t=>{try{t.preventDefault(),u.innerHTML="",a.classList.remove("is-hidden");const s=m.elements.search.value;if(!s){c.error({title:"Error",message:"Please enter a search query.",position:"topRight"}),a.classList.add("is-hidden");return}const r=await p(s);if(r.data.hits.length===0){c.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),a.classList.add("is-hidden"),m.reset();return}const o=r.data.hits.map(e=>h(e)).join("");a.classList.add("is-hidden"),u.innerHTML=o,n?n.refresh():n=new g(".gallery a",{captionsData:"alt",captionDelay:150})}catch(s){const r=s.response?s.response.status:"No response from server";c.error({title:"Error",message:`Status Code: ${r} - ${s.message}`,position:"topRight"}),a.classList.add("is-hidden")}};m.addEventListener("submit",f);
//# sourceMappingURL=commonHelpers.js.map

import{a as g,i as l,S as L}from"./assets/vendor-KI8m5ffe.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const u of r.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&o(u)}).observe(document,{childList:!0,subtree:!0});function i(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(s){if(s.ep)return;s.ep=!0;const r=i(s);fetch(s.href,r)}})();const f=t=>`
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
    `;g.defaults.baseURL="https://pixabay.com/api/";const y=(t,e)=>{const i={params:{q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,page:e,per_page:15,key:"45444033-7a199cc8ba7e30bdfbfaa3141"}};return g.get("",i)},h=document.querySelector(".js-search-form"),p=document.querySelector(".js-gallery"),a=document.querySelector(".js-loader"),c=document.querySelector(".js-load-more-button");let n=33,d="",m;const v=async t=>{try{if(t.preventDefault(),p.innerHTML="",a.classList.remove("is-hidden"),d=h.elements.search.value,n=1,!d){l.error({title:"Error",message:"Please enter a search query.",position:"topRight"}),a.classList.add("is-hidden");return}const e=await y(d,n);if(e.data.hits.length===0){l.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),a.classList.add("is-hidden"),h.reset();return}const i=e.data.hits.map(o=>f(o)).join("");a.classList.add("is-hidden"),p.innerHTML=i,c.classList.remove("is-hidden"),m?m.refresh():m=new L(".gallery a",{captionsData:"alt",captionDelay:150})}catch(e){const i=e.response?e.response.status:"No response from server";l.error({title:"Error",message:`Status Code: ${i} - ${e.message}`,position:"topRight"}),a.classList.add("is-hidden")}},b=async t=>{try{n++,a.classList.remove("is-hidden"),c.classList.add("is-hidden");const e=await y(d,n),i=e.data.hits.map(o=>f(o)).join("");a.classList.add("is-hidden"),p.insertAdjacentHTML("beforeend",i),m.refresh(),c.classList.remove("is-hidden"),n>=e.data.totalHits&&(c.classList.add("is-hidden"),l.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"}))}catch(e){const i=e.response?e.response.status:"No response from server";l.error({title:"Error",message:`Status Code: ${i} - ${e.message}`,position:"topRight"}),a.classList.add("is-hidden")}};h.addEventListener("submit",v);c.addEventListener("click",b);
//# sourceMappingURL=commonHelpers.js.map

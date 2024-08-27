import{a as f,i as o,S}from"./assets/vendor-KI8m5ffe.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))c(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const u of r.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&c(u)}).observe(document,{childList:!0,subtree:!0});function i(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function c(t){if(t.ep)return;t.ep=!0;const r=i(t);fetch(t.href,r)}})();const L=s=>`
    <li class="gallery-item">
        <a href="${s.largeImageURL}">
            <img src="${s.webformatURL}"
                alt="${s.tags}"
                width="360"
                height="152"
            />
        </a>

        <ul class="img-statistics">
            <li class="img-statistics-item">
                <h3 class="img-statistics-item-title">Likes</h3>
                <p class="img-statistics-item-value">${s.likes}</p>
            </li>
            <li class="img-statistics-item">
                <h3 class="img-statistics-item-title">Views</h3>
                <p class="img-statistics-item-value">${s.views}</p>
            </li>
            <li class="img-statistics-item">
                <h3 class="img-statistics-item-title">Comments</h3>
                <p class="img-statistics-item-value">${s.comments}</p>
            </li>
            <li class="img-statistics-item">
                <h3 class="img-statistics-item-title">Downloads</h3>
                <p class="img-statistics-item-value">${s.downloads}</p>
            </li>
        </ul>
    </li>
    `;f.defaults.baseURL="https://pixabay.com/api/";const v=(s,e)=>{const i={params:{q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,page:e,per_page:15,key:"45444033-7a199cc8ba7e30bdfbfaa3141"}};return f.get("",i)},g=document.querySelector(".js-search-form"),d=document.querySelector(".js-gallery"),a=document.querySelector(".js-loader"),l=document.querySelector(".js-load-more-button");let n=33,m="",h,b=0,p=1,y=15;const C=async s=>{try{if(s.preventDefault(),d.innerHTML="",a.classList.remove("is-hidden"),m=g.elements.search.value,n=1,!m){o.error({title:"Error",message:"Please enter a search query.",position:"topRight"}),a.classList.add("is-hidden");return}const e=await v(m,n);if(e.data.hits.length===0){o.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),a.classList.add("is-hidden"),g.reset();return}y=e.data.hits.length,p=Math.ceil(e.data.totalHits/y);const i=e.data.hits.map(t=>L(t)).join("");a.classList.add("is-hidden"),d.innerHTML=i,b=d.querySelector("li").getBoundingClientRect().height,n===p?(l.classList.add("is-hidden"),o.info({message:"This is the maximum search result for your query.",position:"bottomCenter"})):l.classList.remove("is-hidden"),h?h.refresh():h=new S(".gallery a",{captionsData:"alt",captionDelay:150})}catch(e){const i=e.response?e.response.status:"No response from server";o.error({title:"Error",message:`Status Code: ${i} - ${e.message}`,position:"topRight"}),a.classList.add("is-hidden")}},E=async s=>{try{n++,a.classList.remove("is-hidden"),l.classList.add("is-hidden");const i=(await v(m,n)).data.hits.map(c=>L(c)).join("");a.classList.add("is-hidden"),d.insertAdjacentHTML("beforeend",i),h.refresh(),scrollBy({top:b*2,behavior:"smooth"}),l.classList.remove("is-hidden"),n>=p&&(l.classList.add("is-hidden"),o.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"}))}catch(e){const i=e.response?e.response.status:"No response from server";o.error({title:"Error",message:`Status Code: ${i} - ${e.message}`,position:"topRight"}),a.classList.add("is-hidden")}};g.addEventListener("submit",C);l.addEventListener("click",E);
//# sourceMappingURL=commonHelpers.js.map

import{a as f,i as l,S}from"./assets/vendor-KI8m5ffe.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const u of r.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&o(u)}).observe(document,{childList:!0,subtree:!0});function i(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(s){if(s.ep)return;s.ep=!0;const r=i(s);fetch(s.href,r)}})();const L=t=>`
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
    `;f.defaults.baseURL="https://pixabay.com/api/";const v=async(t,e)=>{const i={params:{q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,page:e,per_page:15,key:"45444033-7a199cc8ba7e30bdfbfaa3141"}};return await f.get("",i)},g=document.querySelector(".js-search-form"),d=document.querySelector(".js-gallery"),a=document.querySelector(".js-loader"),n=document.querySelector(".js-load-more-button");let c=1,m="",h,b=0,p=1,y=15;const C=async t=>{try{if(t.preventDefault(),d.innerHTML="",a.classList.remove("is-hidden"),m=g.elements.search.value,c=1,!m){l.error({title:"Error",message:"Please enter a search query.",position:"topRight"}),a.classList.add("is-hidden");return}const e=await v(m,c);if(e.data.hits.length===0){l.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),a.classList.add("is-hidden"),g.reset();return}y=e.data.hits.length,p=Math.ceil(e.data.totalHits/y);const i=e.data.hits.map(s=>L(s)).join("");a.classList.add("is-hidden"),d.innerHTML=i,b=d.querySelector("li").getBoundingClientRect().height,c===p?(n.classList.add("is-hidden"),l.info({message:"This is the maximum search result for your query.",position:"bottomCenter"})):n.classList.remove("is-hidden"),h?h.refresh():h=new S(".gallery a",{captionsData:"alt",captionDelay:150})}catch(e){const i=e.response?e.response.status:"No response from server";l.error({title:"Error",message:`Status Code: ${i} - ${e.message}`,position:"topRight"}),a.classList.add("is-hidden")}},E=async t=>{try{c++,a.classList.remove("is-hidden"),n.classList.add("is-hidden");const i=(await v(m,c)).data.hits.map(o=>L(o)).join("");a.classList.add("is-hidden"),d.insertAdjacentHTML("beforeend",i),h.refresh(),scrollBy({top:b*2,behavior:"smooth"}),n.classList.remove("is-hidden"),c>=p&&(n.classList.add("is-hidden"),l.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"}))}catch(e){const i=e.response?e.response.status:"No response from server";l.error({title:"Error",message:`Status Code: ${i} - ${e.message}`,position:"topRight"}),a.classList.add("is-hidden")}};g.addEventListener("submit",C);n.addEventListener("click",E);
//# sourceMappingURL=commonHelpers.js.map

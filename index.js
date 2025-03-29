import{a as w,S as v,i as l}from"./assets/vendor-BBSqv8W6.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&t(s)}).observe(document,{childList:!0,subtree:!0});function a(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function t(e){if(e.ep)return;e.ep=!0;const r=a(e);fetch(e.href,r)}})();const E="49580419-995b76e467c7e33d07d0013ac",S="https://pixabay.com/api/";async function h(o,n=1,a=15){try{console.log(`Fetching images: query=${o}, page=${n}, perPage=${a}`);const t=await w.get(S,{params:{key:E,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,page:n,per_page:a}});if(!t.data||!t.data.hits)throw new Error("Invalid API response");return console.log(`Fetched ${t.data.hits.length} images.`),{images:t.data.hits,total:t.data.totalHits}}catch(t){throw console.error("Error fetching images:",t.message),t}}const p=document.querySelector(".gallery"),i=document.querySelector(".loader");p||console.error("Error: '.gallery' element not found!");i||console.error("Error: '.loader' element not found!");let P=new v(".gallery a",{captionsData:"alt",captionDelay:250});function y(o=!1){i&&(o?i.classList.add("loader--under-button"):i.classList.remove("loader--under-button"),i.style.display="block")}function b(){i&&(i.style.display="none")}function $(){p.innerHTML=""}function L(o){if(!o||o.length===0){l.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}const n=o.map(({webformatURL:a,largeImageURL:t,tags:e,likes:r,views:s,comments:m,downloads:u})=>{const g=e.split(", ").slice(0,3).join(", ");return`
      <li class="gallery-item">
        <a href="${t}" class="gallery-link" data-caption="${g}">
          <img src="${a}" alt="${g}" loading="lazy" class="gallery-image">
        </a>
        <div class="info">
          <p><b>Likes</b> ${r}</p>
          <p><b>Views</b> ${s}</p>
          <p><b>Comments</b> ${m}</p>
          <p><b>Downloads</b> ${u}</p>
        </div>
      </li>`}).join("");p.insertAdjacentHTML("beforeend",n),P.refresh()}function q(){const o=document.querySelector(".form"),n=document.getElementById("search-input"),a=document.querySelector(".load-more");if(!o||!n){console.error("Не найдены необходимые элементы формы.");return}let t=1,e="";const r=15;let s=0;o.addEventListener("submit",async c=>{if(c.preventDefault(),e=n.value.trim(),t=1,!e){l.warning({message:"Please enter a search query!",position:"topRight"});return}$(),u(),y();try{const d=await h(e,t,r),f=d.images;if(s=d.total,!f.length){l.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}L(f),s>r&&m()}catch{l.error({message:"Something went wrong. Please try again later.",position:"topRight"})}finally{b(),n.value=""}}),a.addEventListener("click",async()=>{t+=1,y(!0);try{const d=(await h(e,t,r)).images;L(d),g(),t*r>=s&&(l.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"}),u())}catch{l.error({message:"Error loading more images.",position:"topRight"})}finally{b()}});function m(){a.hidden=!1}function u(){a.hidden=!0}function g(){const{height:c}=document.querySelector(".gallery").firstElementChild.getBoundingClientRect();window.scrollBy({top:c*2,behavior:"smooth"})}}document.addEventListener("DOMContentLoaded",q);
//# sourceMappingURL=index.js.map

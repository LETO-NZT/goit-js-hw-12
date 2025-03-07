import{a as v,S as B,i as h}from"./assets/vendor-D9tHNiur.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function i(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(t){if(t.ep)return;t.ep=!0;const o=i(t);fetch(t.href,o)}})();const M=v.create({baseURL:"https://pixabay.com/api",params:{key:"49097244-8862dd375f26540a0b3f58369",image_type:"photo",orientation:"horizontal",safesearch:!0}});async function g(e,r,i){return(await M.get("/",{params:{q:e,page:r,per_page:i}})).data}const P=new B(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250}),m=document.querySelector(".gallery");function p(e){const r=e.map(({largeImageURL:i,webformatURL:s,tags:t,likes:o,views:l,comments:S,downloads:q})=>`<li class="gallery-item">
        <a class="gallery-link" href="${i}">
          <img
            class="gallery-image"
            src="${s}"
            alt="${t}"
          />
        </a>
        <ul class="image-info">
          <li>
            <h5>Likes</h5>
            <p>${o}</p>
          </li>
          <li>
            <h5>Views</h5>
            <p>${l}</p>
          </li>
          <li>
            <h5>Comments</h5>
            <p>${S}</p></p>
          </li>
          <li>
            <h5>Downloads</h5>
            <p>${q}</p>
          </li>
        </ul>
      </li>`).join("");m.insertAdjacentHTML("beforeend",r),P.refresh()}function C(){m.innerHTML=""}const a={searchForm:document.querySelector("#search-form"),searchInput:document.querySelector("#search-input"),gallery:document.querySelector(".gallery"),jsLoader:document.querySelector(".js-loader"),loadBtn:document.querySelector(".load-btn")};let c="",n=1,u=40,d=0;a.searchForm.addEventListener("submit",$);a.loadBtn.addEventListener("click",j);async function $(e){if(e.preventDefault(),C(),n=1,d=0,w(),c=e.target.elements.query.value.trim(),!c){b("Please fill in the field!");return}y();try{const r=await g(c,n,u);if(d=r.totalHits,!r.hits.length){f("Sorry, there are no images matching your search query. Please try again!");return}p(r.hits),n*u<d&&O()}catch(r){console.error("Error fetching images:",r),f("Something went wrong. Please try again.")}finally{L()}}async function j(){n+=1,y();try{const e=await g(c,n,u);p(e.hits),x(),n*u>=d&&(w(),b("We're sorry, but you've reached the end of search results."))}catch(e){console.error("Error fetching more images:",e),f("Something went wrong while loading more images.")}finally{L()}}function y(){a.jsLoader.innerHTML='<span class="loader"></span>'}function L(){a.jsLoader.textContent=""}function O(){a.loadBtn.classList.remove("hidden")}function w(){a.loadBtn.classList.add("hidden")}function x(){const e=a.gallery.children;if(e.length>1){const{height:r}=e[0].getBoundingClientRect();window.scrollBy({top:r*2,behavior:"smooth"})}}function b(e){h.warning({messageColor:"#fff",backgroundColor:"#6c8cff",theme:"dark",position:"topRight",message:e})}function f(e){h.error({messageColor:"#fff",backgroundColor:"#ef4040",theme:"dark",position:"topRight",message:e})}
//# sourceMappingURL=index.js.map

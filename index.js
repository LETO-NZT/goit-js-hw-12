import{a as w,S,i as l}from"./assets/vendor-KnZd4sWe.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function i(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(e){if(e.ep)return;e.ep=!0;const o=i(e);fetch(e.href,o)}})();const q="49053882-7e244883c6f1c912e1433ba1a",E="https://pixabay.com/api/";async function g(t,r=1,i=40){const a={key:q,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,page:r,per_page:i};try{return(await w.get(E,{params:a})).data}catch(e){throw new Error(`An error occurred: ${e.message}`)}}const y=document.querySelector(".gallery");let n=null;function h(t){const r=t.map(({webformatURL:i,largeImageURL:a,tags:e,likes:o,views:c,comments:b,downloads:v})=>`
            <li class="gallery-item">
                    <a href="${a}" class="gallery">
                    <img class="gallery-image" src="${i}" alt="${e}">
                    </a>
                

                <div class="info">
                    <p><b>Likes:</b> ${o}</p>
                    <p><b>Views:</b> ${c}</p>
                    <p><b>Comments:</b> ${b}</p>
                    <p><b>Downloads:</b> ${v}</p>
                </div>
            </li>
        `).join("");y.insertAdjacentHTML("beforeend",r),n?n.refresh():n=new S(".gallery a")}function P(){y.innerHTML="",n&&(n.destroy(),n=null)}const $=document.querySelector(".form"),A=document.querySelector(".gallery"),s=Array.from(document.querySelectorAll("button")).find(t=>t.textContent.trim()==="Load More");s&&s.addEventListener("click",()=>{console.log("Load More clicked")});const f=document.querySelector(".loader");let d=1,u="",p=0;const m=40;$.addEventListener("submit",async t=>{if(t.preventDefault(),u=t.target.searchQuery.value.trim(),d=1,!u){l.warning({message:"Please enter a search query!"});return}P(),s.classList.add("hidden"),f.classList.remove("hidden");try{const r=await g(u,d,m);if(p=r.totalHits,r.hits.length===0){l.error({message:"Sorry, there are no images matching your search query. Please try again!"});return}h(r.hits),L(r)}catch(r){l.error({message:r.message})}finally{f.classList.add("hidden")}});s.addEventListener("click",async()=>{d++,f.classList.remove("hidden"),s.classList.add("hidden");try{const t=await g(u,d,m);h(t.hits),L(t),M()}catch(t){l.error({message:t.message})}finally{f.classList.add("hidden")}});function L(t){d*m>=p?(l.info({message:"End of results"}),s.classList.add("hidden")):s.classList.remove("hidden")}function M(){const t=A.firstElementChild;if(t){const{height:r}=t.getBoundingClientRect();window.scrollBy({top:r*2,behavior:"smooth"})}}
//# sourceMappingURL=index.js.map

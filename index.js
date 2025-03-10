import{a as w,S,i as c}from"./assets/vendor-KnZd4sWe.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function i(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(e){if(e.ep)return;e.ep=!0;const s=i(e);fetch(e.href,s)}})();const q="49053882-7e244883c6f1c912e1433ba1a",E="https://pixabay.com/api/";async function g(t,r=1,i=40){const a={key:q,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,page:r,per_page:i};try{return(await w.get(E,{params:a})).data}catch(e){throw new Error(`An error occurred: ${e.message}`)}}const y=document.querySelector(".gallery");let n=null;function h(t){const r=t.map(({webformatURL:i,largeImageURL:a,tags:e,likes:s,views:l,comments:b,downloads:v})=>`
            <li class="gallery-item">
                    <a href="${a}" class="gallery">
                    <img class="gallery-image" src="${i}" alt="${e}">
                    </a>
                

                <div class="info">
                    <p><b>Likes:</b> ${s}</p>
                    <p><b>Views:</b> ${l}</p>
                    <p><b>Comments:</b> ${b}</p>
                    <p><b>Downloads:</b> ${v}</p>
                </div>
            </li>
        `).join("");y.insertAdjacentHTML("beforeend",r),n?n.refresh():n=new S(".gallery a")}function P(){y.innerHTML="",n&&(n.destroy(),n=null)}const $=document.querySelector(".form"),A=document.querySelector(".gallery"),o=Array.from(document.querySelectorAll("button")).find(t=>t.textContent.trim()==="Load More");o&&(o.classList.add("load-more","visible"),o.addEventListener("click",()=>{console.log("Load More clicked")}));const m=document.querySelector(".loader");let d=1,u="",p=0;const f=40;$.addEventListener("submit",async t=>{if(t.preventDefault(),u=t.target.searchQuery.value.trim(),d=1,!u){c.warning({message:"Please enter a search query!"});return}P(),o.classList.add("hidden"),m.classList.remove("hidden");try{const r=await g(u,d,f);if(p=r.totalHits,r.hits.length===0){c.error({message:"Sorry, there are no images matching your search query. Please try again!"});return}h(r.hits),L(r)}catch(r){c.error({message:r.message})}finally{m.classList.add("hidden")}});o.addEventListener("click",async()=>{d++,m.classList.remove("hidden"),o.classList.add("hidden");try{const t=await g(u,d,f);h(t.hits),L(t),M()}catch(t){c.error({message:t.message})}finally{m.classList.add("hidden")}});function L(t){d*f>=p?(c.info({message:"End of results"}),o.classList.add("hidden")):o.classList.remove("hidden")}function M(){const t=A.firstElementChild;if(t){const{height:r}=t.getBoundingClientRect();window.scrollBy({top:r*2,behavior:"smooth"})}}
//# sourceMappingURL=index.js.map

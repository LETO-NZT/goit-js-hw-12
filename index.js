import{a as v,S as q,i as l}from"./assets/vendor-KnZd4sWe.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function n(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(e){if(e.ep)return;e.ep=!0;const o=n(e);fetch(e.href,o)}})();const E="49053882-7e244883c6f1c912e1433ba1a",P="https://pixabay.com/api/";async function g(t,r=1,n=15){const s={key:E,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,page:r,per_page:n};try{return(await v.get(P,{params:s})).data}catch(e){throw new Error(`An error occurred: ${e.message}`)}}const h=document.querySelector(".gallery");let a=null;function p(t){const r=t.map(({webformatURL:n,largeImageURL:s,tags:e,likes:o,views:i,comments:w,downloads:S})=>`
            <li class="gallery-item">
                    <a href="${s}" class="gallery">
                    <img class="gallery-image" src="${n}" alt="${e}">
                    </a>
                

                <div class="info">
                    <p><b>Likes:</b> ${o}</p>
                    <p><b>Views:</b> ${i}</p>
                    <p><b>Comments:</b> ${w}</p>
                    <p><b>Downloads:</b> ${S}</p>
                </div>
            </li>
        `).join("");h.insertAdjacentHTML("beforeend",r),a?a.refresh():a=new q(".gallery a")}function $(){h.innerHTML="",a&&(a.destroy(),a=null)}const A=document.querySelector(".form"),M=document.querySelector(".gallery"),m=document.querySelector(".loader");let c=1,u="",L=0;const f=15,y=Array.from(document.querySelectorAll("button")).find(t=>t.textContent.trim()==="Load More");y&&y.classList.add("load-more","hidden");const d=document.querySelector(".load-more");A.addEventListener("submit",async t=>{if(t.preventDefault(),u=t.target.searchQuery.value.trim(),c=1,!u){l.warning({message:"Please enter a search query!"});return}$(),d.classList.add("hidden"),m.classList.remove("hidden"),setTimeout(async()=>{try{const r=await g(u,c,f);if(L=r.totalHits,r.hits.length===0){l.error({message:"Sorry, there are no images matching your search query. Please try again!"});return}p(r.hits),b(r)}catch(r){l.error({message:r.message})}finally{m.classList.add("hidden")}},0)});d.addEventListener("click",()=>{c++,m.classList.remove("hidden"),d.classList.add("hidden"),setTimeout(async()=>{try{const t=await g(u,c,f);p(t.hits),b(t),O()}catch(t){l.error({message:t.message})}finally{m.classList.add("hidden")}},0)});function b(t){c*f>=L?(l.info({message:"End of results"}),d.classList.add("hidden")):d.classList.remove("hidden")}function O(){const t=M.firstElementChild;if(t){const{height:r}=t.getBoundingClientRect();window.scrollBy({top:r*2,behavior:"smooth"})}}
//# sourceMappingURL=index.js.map

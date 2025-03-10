import{a as v,S,i as c}from"./assets/vendor-KnZd4sWe.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function n(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(e){if(e.ep)return;e.ep=!0;const s=n(e);fetch(e.href,s)}})();const q="49053882-7e244883c6f1c912e1433ba1a",P="https://pixabay.com/api/";async function y(t,r=1,n=40){const o={key:q,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,page:r,per_page:n};try{return(await v.get(P,{params:o})).data}catch(e){throw new Error(`An error occurred: ${e.message}`)}}const g=document.querySelector(".gallery");let a=null;function h(t){const r=t.map(({webformatURL:n,largeImageURL:o,tags:e,likes:s,views:i,comments:b,downloads:w})=>`
            <li class="gallery-item">
                    <a href="${o}" class="gallery">
                    <img class="gallery-image" src="${n}" alt="${e}">
                    </a>
                

                <div class="info">
                    <p><b>Likes:</b> ${s}</p>
                    <p><b>Views:</b> ${i}</p>
                    <p><b>Comments:</b> ${b}</p>
                    <p><b>Downloads:</b> ${w}</p>
                </div>
            </li>
        `).join("");g.insertAdjacentHTML("beforeend",r),a?a.refresh():a=new S(".gallery a")}function $(){g.innerHTML="",a&&(a.destroy(),a=null)}const E=document.querySelector(".form"),A=document.querySelector(".gallery"),l=Array.from(document.querySelectorAll("button")).find(t=>t.textContent.trim()==="Load More"),m=document.querySelector(".loader");let d=1,u="",p=0;const f=40;E.addEventListener("submit",async t=>{if(t.preventDefault(),u=t.target.searchQuery.value.trim(),d=1,!u){c.warning({message:"Please enter a search query!"});return}$(),l.classList.add("hidden"),m.classList.remove("hidden");try{const r=await y(u,d,f);if(p=r.totalHits,r.hits.length===0){c.error({message:"Sorry, there are no images matching your search query. Please try again!"});return}h(r.hits),L(r)}catch(r){c.error({message:r.message})}finally{m.classList.add("hidden")}});l.addEventListener("click",async()=>{d++,m.classList.remove("hidden"),l.classList.add("hidden");try{const t=await y(u,d,f);h(t.hits),L(t),M()}catch(t){c.error({message:t.message})}finally{m.classList.add("hidden")}});function L(t){d*f>=p?(c.info({message:"End of results"}),l.classList.add("hidden")):l.classList.remove("hidden")}function M(){const t=A.firstElementChild;if(t){const{height:r}=t.getBoundingClientRect();window.scrollBy({top:r*2,behavior:"smooth"})}}
//# sourceMappingURL=index.js.map

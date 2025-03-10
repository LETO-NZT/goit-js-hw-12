import{a as w,S,i as l}from"./assets/vendor-KnZd4sWe.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function i(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(e){if(e.ep)return;e.ep=!0;const s=i(e);fetch(e.href,s)}})();const q="49053882-7e244883c6f1c912e1433ba1a",E="https://pixabay.com/api/";async function g(r,t=1,i=40){const a={key:q,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,page:t,per_page:i};try{return(await w.get(E,{params:a})).data}catch(e){throw new Error(`An error occurred: ${e.message}`)}}const y=document.querySelector(".gallery");let n=null;function h(r){const t=r.map(({webformatURL:i,largeImageURL:a,tags:e,likes:s,views:c,comments:b,downloads:v})=>`
            <li class="gallery-item">
                    <a href="${a}" class="gallery">
                    <img class="gallery-image" src="${i}" alt="${e}">
                    </a>
                

                <div class="info">
                    <p><b>Likes:</b> ${s}</p>
                    <p><b>Views:</b> ${c}</p>
                    <p><b>Comments:</b> ${b}</p>
                    <p><b>Downloads:</b> ${v}</p>
                </div>
            </li>
        `).join("");y.insertAdjacentHTML("beforeend",t),n?n.refresh():n=new S(".gallery a")}function P(){y.innerHTML="",n&&(n.destroy(),n=null)}const $=document.querySelector(".form"),M=document.querySelector(".gallery"),o=document.querySelector(".load-more");o&&o.addEventListener("click",()=>{console.log("Load More clicked")});const m=document.querySelector(".loader");let d=1,u="",p=0;const f=40;$.addEventListener("submit",async r=>{if(r.preventDefault(),u=r.target.searchQuery.value.trim(),d=1,!u){l.warning({message:"Please enter a search query!"});return}P(),o.classList.add("hidden"),m.classList.remove("hidden");try{const t=await g(u,d,f);if(p=t.totalHits,t.hits.length===0){l.error({message:"Sorry, there are no images matching your search query. Please try again!"});return}h(t.hits),L(t)}catch(t){l.error({message:t.message})}finally{m.classList.add("hidden")}});o.addEventListener("click",async()=>{d++,m.classList.remove("hidden"),o.classList.add("hidden");try{const r=await g(u,d,f);h(r.hits),L(r),O()}catch(r){l.error({message:r.message})}finally{m.classList.add("hidden")}});function L(r){d*f>=p?(l.info({message:"End of results"}),o.classList.add("hidden")):o.classList.remove("hidden")}function O(){const r=M.firstElementChild;if(r){const{height:t}=r.getBoundingClientRect();window.scrollBy({top:t*2,behavior:"smooth"})}}
//# sourceMappingURL=index.js.map

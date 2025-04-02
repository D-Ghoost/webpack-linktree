(()=>{"use strict";const e={name:"Nicolás Torres López",nickname:"D-Ghoost",imageProfile:"./img/profile.jpg",description:"Desarrollador apasionado con experiencia en React, Node.js, Angular y Flutter.",social:[],links:[{id:"github",name:"GitHub Profile",url:"https://github.com/D-Ghoost",username:"D-Ghoost"},{id:"linkedin",name:"LinkedIn",url:"https://www.linkedin.com/in/nicolas-4torres/",username:"nicolas-4torres"},{id:"resume",name:"Download Resume",emonji:"📄"}],footer:"© "+(new Date).getFullYear()+" Nicolás Torres López • Developer"};console.log("Hello via Bun!");const o=document.querySelector(".profile-img"),n=document.querySelector(".bio"),t=document.querySelector(".links"),r=document.querySelector("footer");(()=>{o?.setAttribute("src",e?.imageProfile);let i=e?.links?.map((e=>"resume"!==e.id?`<a href="${e.url}" class="link ${e.id}" target="_blank">${e.name}<span>${e.emonji??""}</span></a>`:`<button class="link ${e.id}">${e.name}<span>${e.emonji??""}</span></button>`)).join(""),s=document.createElement("p");s.innerText=e?.footer,n&&(n.innerText=e.description),t&&(t.innerHTML=i),r&&r.appendChild(s)})();const i=document.querySelector(".link.resume"),s=document.querySelector("dialog");if(i){i.addEventListener("click",(()=>{s?.showModal()}));const e=document.querySelector(".close-dialog");e?.addEventListener("click",(()=>{s?.close()}));const o=document.querySelector(".resume-lang__es"),n=document.querySelector(".resume-lang__en");o?.addEventListener("click",(()=>l("ES"))),n?.addEventListener("click",(()=>l("EN")))}function l(e){const o="ES"===e?"/docs/CV_NicolasTorresL_ES.pdf":"/docs/CV_NicolasTorresL_EN.pdf",n=document.createElement("a");n.setAttribute("href",o),n.setAttribute("download",`CV_NicolasTorresL_${e}.pdf`),n.click(),s?.close()}})();
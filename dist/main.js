(()=>{"use strict";let e=[];class t{constructor(e,t,n,o){this.title=e,this.description=t,this.dueDate=n,this.priority=o}}const n=()=>{const t=document.querySelector(".task-display");t.replaceChildren();for(let n=0;n<e.length;n++){const o=document.createElement("div");o.classList.add("task"),o.style.backgroundColor="#e2e8f0",o.innerHTML=`\n        <div class="complete"></div>\n        <div class="task-info">\n            <div class="title">${e[n].title}</div>\n            <div class="description">${e[n].description}</div>\n        </div>\n        <div class="date">${e[n].dueDate}</div>\n        `,t.appendChild(o)}document.querySelectorAll(".complete").forEach((function(t,o){t.addEventListener("click",(function(){e.splice(o,1),n()}))}))};let o=[];class c{constructor(e){this.title=e}}const r=document.querySelector(".new-todo");let l=!0;r.addEventListener("click",(function(){l?(document.querySelector("#new-todo-form").style.display="flex",l=!1):(document.querySelector("#new-todo-form").style.display="none",l=!0)})),document.querySelector("#new-todo-form").addEventListener("submit",(function(o){o.preventDefault(),(()=>{document.querySelector("#new-todo-form").style.display="none";let o=document.querySelector("#title").value,c=document.querySelector("#description").value,r=document.querySelector("#due-date").value;""===r&&(r="No Date");let l=document.querySelector("#priority").value,i=new t(o,c,r,l);e.push(i),n()})()}));const i=document.querySelector(".new-project");let d=!0;i.addEventListener("click",(function(){d?(document.querySelector("#new-project-form").style.display="flex",d=!1):(document.querySelector("#new-project-form").style.display="none",d=!0)})),document.querySelector("#new-project-form").addEventListener("submit",(function(e){e.preventDefault(),(()=>{document.querySelector("#new-project-form").style.display="none";let e=document.querySelector("#project-title").value,t=new c(e);o.push(t),(()=>{const e=document.querySelector(".project-display");e.replaceChildren();for(let t=0;t<o.length;t++){const n=document.createElement("div");n.classList.add("project"),n.style.backgroundColor="#e2e8f0",n.innerHTML=`\n        <div class="title">${o[t].title}</div>\n        `,e.appendChild(n)}document.querySelectorAll(".project").forEach((function(e,t){e.addEventListener("click",(function(){document.querySelector(".current-page").innerHTML=`${o[t].title}`}))}))})()})()})),document.querySelector(".home-button").addEventListener("click",(function(){document.querySelector(".current-page").innerHTML="Home"})),window.history.replaceState&&window.history.replaceState(null,null,window.location.href)})();
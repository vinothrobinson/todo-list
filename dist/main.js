(()=>{"use strict";let e=[];class t{constructor(e,t,o,n){this.title=e,this.description=t,this.dueDate=o,this.priority=n}}let o=[];class n{constructor(e){this.title=e}}const l=document.querySelector(".new-todo");let r=!0;l.addEventListener("click",(function(){r?(document.querySelector("#new-todo-form").style.display="flex",r=!1):(document.querySelector("#new-todo-form").style.display="none",r=!0)})),document.querySelector("#new-todo-form").addEventListener("submit",(function(o){o.preventDefault(),(()=>{document.querySelector("#new-todo-form").style.display="none";let o=document.querySelector("#title").value,n=document.querySelector("#description").value,l=document.querySelector("#due-date").value;""===l&&(l="No Date");let r=document.querySelector("#priority").value,c=new t(o,n,l,r);e.push(c),(()=>{const t=document.querySelector(".task-display");t.replaceChildren();for(let o=0;o<e.length;o++){const n=document.createElement("div");n.classList.add("task"),n.style.backgroundColor="#e2e8f0",n.innerHTML=`\n        <div class="complete"></div>\n        <div class="task-info">\n            <div class="title">${e[o].title}</div>\n            <div class="description">${e[o].description}</div>\n        </div>\n        <div class="date">${e[o].dueDate}</div>\n        `,t.appendChild(n)}})()})()}));const c=document.querySelector(".new-project");let d=!0;c.addEventListener("click",(function(){d?(document.querySelector("#new-project-form").style.display="flex",d=!1):(document.querySelector("#new-project-form").style.display="none",d=!0)})),document.querySelector("#new-project-form").addEventListener("submit",(function(e){e.preventDefault(),(()=>{document.querySelector("#new-project-form").style.display="none";let e=document.querySelector("#project-title").value,t=new n(e);o.push(t),(()=>{const e=document.querySelector(".project-display");e.replaceChildren();for(let t=0;t<o.length;t++){const n=document.createElement("div");n.classList.add("project"),n.style.backgroundColor="#e2e8f0",n.innerHTML=`\n        <div class="title">${o[t].title}</div>\n        `,e.appendChild(n)}})()})()})),window.history.replaceState&&window.history.replaceState(null,null,window.location.href)})();
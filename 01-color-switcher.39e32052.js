const e=document.querySelector("body"),t=document.querySelector("button[data-start]"),d=document.querySelector("button[data-stop]");d.disabled=!0;let o=0;t.addEventListener("click",(()=>{o=setInterval(a,1e3),t.disabled=!0,d.disabled=!1})),d.addEventListener("click",(()=>{clearTimeout(o),t.disabled=!1,d.disabled=!0}));const a=()=>{e.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`};
//# sourceMappingURL=01-color-switcher.39e32052.js.map

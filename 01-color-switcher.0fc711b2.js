!function(){var t=document.querySelector("body"),e=document.querySelector("button[data-start]"),o=document.querySelector("button[data-stop]");o.disabled=!0;var a=0;e.addEventListener("click",(function(){a=setInterval(d,1e3),e.disabled=!0,o.disabled=!1})),o.addEventListener("click",(function(){clearTimeout(a),e.disabled=!1,o.disabled=!0}));var d=function(){t.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16))}}();
//# sourceMappingURL=01-color-switcher.0fc711b2.js.map
(function(window){var svgSprite='<svg><symbol id="icon-search" viewBox="0 0 1024 1024"><path d="M976.682667 919.936l-176.085333-176.170667c61.397333-74.112 98.432-169.258667 98.432-272.896C898.986667 234.752 707.285333 42.666667 471.722667 42.666667 236.117333 42.666667 44.416 234.752 44.416 470.826667s191.701333 428.074667 427.306667 428.074667c101.461333 0 194.688-35.797333 268.117333-95.189333l176.512 176.554667L976.682667 919.936zM86.186667 470.826667c0-213.034667 172.928-386.346667 385.536-386.346667 212.522667 0 385.621333 173.312 385.621333 386.346667 0 212.992-173.098667 386.304-385.621333 386.304C259.114667 857.130667 86.186667 683.818667 86.186667 470.826667z"  ></path></symbol><symbol id="icon-gift" viewBox="0 0 1024 1024"><path d="M551.583 460.004V234.757c-11.54-1.119-22.695-2.38-32.213-3.924v-0.414H517.344l0.022 0.015H519.352v0.422h-1.605l-0.007-0.007c-0.048 0.045-0.408 0.37-0.772 0.37-12.321 1.6-27.445 3.538-44.532 5.14v223.668H8.333V280.482c0-28.241 22.61-50.87 50.92-50.87h211.509c-56.804-11.886-99.414-36.178-100.978-81.037-1.6-52.845 58.051-138.27 145.146-118.777 89.906 20.207 152.724 89.763 200.839 149.352C564.302 118.4 633.088 40.12 726.914 27.776c78.406-9.926 143.21 68.351 134.853 119.998-7.13 45.262-50.518 69.917-105.804 81.82h208.782c28.267 0 50.922 22.626 50.922 50.866v179.545H551.583v-0.001zM324.506 76.642c-43.39-17.093-68.806 1.24-87.097 31.431-9.952 17.048-20.65 39.723-4.785 56.388 41.743 42.926 156.263 39.763 233.067 31.775-36.222-45.217-80.748-95.728-141.185-119.594z m474.424 87.464c29.824-38.164-28.628-117.618-91.464-88.25-60.076 28.238-103.401 74.277-140.78 119.6 32.168 2.805 64.803 3.54 97.032 1.98 39.383-1.599 112.158-4.36 135.212-33.33zM475.602 997.084H97.39c-25.46 0-46.153-20.627-46.153-46.46V496.21h424.365v500.875z m497.12-46.461c0 25.857-20.67 46.459-46.153 46.459H548.398V496.209h424.324v454.414z"  ></path></symbol></svg>';var script=function(){var scripts=document.getElementsByTagName("script");return scripts[scripts.length-1]}();var shouldInjectCss=script.getAttribute("data-injectcss");var ready=function(fn){if(document.addEventListener){if(~["complete","loaded","interactive"].indexOf(document.readyState)){setTimeout(fn,0)}else{var loadFn=function(){document.removeEventListener("DOMContentLoaded",loadFn,false);fn()};document.addEventListener("DOMContentLoaded",loadFn,false)}}else if(document.attachEvent){IEContentLoaded(window,fn)}function IEContentLoaded(w,fn){var d=w.document,done=false,init=function(){if(!done){done=true;fn()}};var polling=function(){try{d.documentElement.doScroll("left")}catch(e){setTimeout(polling,50);return}init()};polling();d.onreadystatechange=function(){if(d.readyState=="complete"){d.onreadystatechange=null;init()}}}};var before=function(el,target){target.parentNode.insertBefore(el,target)};var prepend=function(el,target){if(target.firstChild){before(el,target.firstChild)}else{target.appendChild(el)}};function appendSvg(){var div,svg;div=document.createElement("div");div.innerHTML=svgSprite;svgSprite=null;svg=div.getElementsByTagName("svg")[0];if(svg){svg.setAttribute("aria-hidden","true");svg.style.position="absolute";svg.style.width=0;svg.style.height=0;svg.style.overflow="hidden";prepend(svg,document.body)}}if(shouldInjectCss&&!window.__iconfont__svg__cssinject__){window.__iconfont__svg__cssinject__=true;try{document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")}catch(e){console&&console.log(e)}}ready(appendSvg)})(window)
var TicTacToeApp;(()=>{"use strict";var e,t,r,n,a,o,i,l,u,s,d,f,c,h,p,v,m,g,y={9677:(e,t,r)=>{var n={"./TicTacToe":()=>Promise.all([r.e(416),r.e(68),r.e(712)]).then((()=>()=>r(3712)))},a=(e,t)=>(r.R=t,t=r.o(n,e)?n[e]():Promise.resolve().then((()=>{throw new Error('Module "'+e+'" does not exist in container.')})),r.R=void 0,t),o=(e,t)=>{if(r.S){var n="default",a=r.S[n];if(a&&a!==e)throw new Error("Container initialization failed as it has already been initialized with a different share scope");return r.S[n]=e,r.I(n,t)}};r.d(t,{get:()=>a,init:()=>o})}},b={};function k(e){var t=b[e];if(void 0!==t)return t.exports;var r=b[e]={exports:{}};return y[e](r,r.exports,k),r.exports}k.m=y,k.c=b,k.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return k.d(t,{a:t}),t},k.d=(e,t)=>{for(var r in t)k.o(t,r)&&!k.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},k.f={},k.e=e=>Promise.all(Object.keys(k.f).reduce(((t,r)=>(k.f[r](e,t),t)),[])),k.u=e=>e+".tictactoe.js",k.miniCssF=e=>"style.e58bfc8bd457478ac6c7.css",k.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),e={},t="tic-tac-toe:",k.l=(r,n,a,o)=>{if(e[r])e[r].push(n);else{var i,l;if(void 0!==a)for(var u=document.getElementsByTagName("script"),s=0;s<u.length;s++){var d=u[s];if(d.getAttribute("src")==r||d.getAttribute("data-webpack")==t+a){i=d;break}}i||(l=!0,(i=document.createElement("script")).charset="utf-8",i.timeout=120,k.nc&&i.setAttribute("nonce",k.nc),i.setAttribute("data-webpack",t+a),i.src=r),e[r]=[n];var f=(t,n)=>{i.onerror=i.onload=null,clearTimeout(c);var a=e[r];if(delete e[r],i.parentNode&&i.parentNode.removeChild(i),a&&a.forEach((e=>e(n))),t)return t(n)},c=setTimeout(f.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=f.bind(null,i.onerror),i.onload=f.bind(null,i.onload),l&&document.head.appendChild(i)}},k.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{k.S={};var e={},t={};k.I=(r,n)=>{n||(n=[]);var a=t[r];if(a||(a=t[r]={}),!(n.indexOf(a)>=0)){if(n.push(a),e[r])return e[r];k.o(k.S,r)||(k.S[r]={});var o=k.S[r],i="tic-tac-toe",l=(e,t,r,n)=>{var a=o[e]=o[e]||{},l=a[t];(!l||!l.loaded&&(!n!=!l.eager?n:i>l.from))&&(a[t]={get:r,from:i,eager:!!n})},u=[];return"default"===r&&(l("classnames","2.3.2",(()=>k.e(184).then((()=>()=>k(4184))))),l("react-dom","18.2.0",(()=>Promise.all([k.e(935),k.e(416)]).then((()=>()=>k(3935))))),l("react-modal","3.16.1",(()=>Promise.all([k.e(253),k.e(416),k.e(51)]).then((()=>()=>k(3253))))),l("react","18.2.0",(()=>k.e(294).then((()=>()=>k(7294)))))),e[r]=u.length?Promise.all(u).then((()=>e[r]=1)):1}}})(),k.p="https://deniskodak.github.io/tictaktoe/",r=e=>{var t=e=>e.split(".").map((e=>+e==e?+e:e)),r=/^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),n=r[1]?t(r[1]):[];return r[2]&&(n.length++,n.push.apply(n,t(r[2]))),r[3]&&(n.push([]),n.push.apply(n,t(r[3]))),n},n=(e,t)=>{e=r(e),t=r(t);for(var n=0;;){if(n>=e.length)return n<t.length&&"u"!=(typeof t[n])[0];var a=e[n],o=(typeof a)[0];if(n>=t.length)return"u"==o;var i=t[n],l=(typeof i)[0];if(o!=l)return"o"==o&&"n"==l||"s"==l||"u"==o;if("o"!=o&&"u"!=o&&a!=i)return a<i;n++}},a=e=>{var t=e[0],r="";if(1===e.length)return"*";if(t+.5){r+=0==t?">=":-1==t?"<":1==t?"^":2==t?"~":t>0?"=":"!=";for(var n=1,o=1;o<e.length;o++)n--,r+="u"==(typeof(l=e[o]))[0]?"-":(n>0?".":"")+(n=2,l);return r}var i=[];for(o=1;o<e.length;o++){var l=e[o];i.push(0===l?"not("+u()+")":1===l?"("+u()+" || "+u()+")":2===l?i.pop()+" "+i.pop():a(l))}return u();function u(){return i.pop().replace(/^\((.+)\)$/,"$1")}},o=(e,t)=>{if(0 in e){t=r(t);var n=e[0],a=n<0;a&&(n=-n-1);for(var i=0,l=1,u=!0;;l++,i++){var s,d,f=l<e.length?(typeof e[l])[0]:"";if(i>=t.length||"o"==(d=(typeof(s=t[i]))[0]))return!u||("u"==f?l>n&&!a:""==f!=a);if("u"==d){if(!u||"u"!=f)return!1}else if(u)if(f==d)if(l<=n){if(s!=e[l])return!1}else{if(a?s>e[l]:s<e[l])return!1;s!=e[l]&&(u=!1)}else if("s"!=f&&"n"!=f){if(a||l<=n)return!1;u=!1,l--}else{if(l<=n||d<f!=a)return!1;u=!1}else"s"!=f&&"n"!=f&&(u=!1,l--)}}var c=[],h=c.pop.bind(c);for(i=1;i<e.length;i++){var p=e[i];c.push(1==p?h()|h():2==p?h()&h():p?o(p,t):!h())}return!!h()},i=(e,t)=>{var r=e[t];return Object.keys(r).reduce(((e,t)=>!e||!r[e].loaded&&n(e,t)?t:e),0)},l=(e,t,r,n)=>"Unsatisfied version "+r+" from "+(r&&e[t][r].from)+" of shared singleton module "+t+" (required "+a(n)+")",u=(e,t,r,n)=>{var a=i(e,r);return o(n,a)||d(l(e,r,a,n)),f(e[r][a])},s=(e,t,r)=>{var a=e[t];return(t=Object.keys(a).reduce(((e,t)=>!o(r,t)||e&&!n(e,t)?e:t),0))&&a[t]},d=e=>{"undefined"!=typeof console&&console.warn&&console.warn(e)},f=e=>(e.loaded=1,e.get()),h=(c=e=>function(t,r,n,a){var o=k.I(t);return o&&o.then?o.then(e.bind(e,t,k.S[t],r,n,a)):e(t,k.S[t],r,n,a)})(((e,t,r,n,a)=>t&&k.o(t,r)?u(t,0,r,n):a())),p=c(((e,t,r,n,a)=>{var o=t&&k.o(t,r)&&s(t,r,n);return o?f(o):a()})),v={},m={8416:()=>h("default","react",[1,18,2,0],(()=>k.e(294).then((()=>()=>k(7294))))),1051:()=>h("default","react-dom",[1,18,2,0],(()=>k.e(935).then((()=>()=>k(3935))))),7101:()=>p("default","classnames",[1,2,3,2],(()=>k.e(184).then((()=>()=>k(4184))))),1831:()=>p("default","react-modal",[1,3,16,1],(()=>Promise.all([k.e(253),k.e(51)]).then((()=>()=>k(3253)))))},g={51:[1051],68:[7101,1831],416:[8416]},k.f.consumes=(e,t)=>{k.o(g,e)&&g[e].forEach((e=>{if(k.o(v,e))return t.push(v[e]);var r=t=>{v[e]=0,k.m[e]=r=>{delete k.c[e],r.exports=t()}},n=t=>{delete v[e],k.m[e]=r=>{throw delete k.c[e],t}};try{var a=m[e]();a.then?t.push(v[e]=a.then(r).catch(n)):r(a)}catch(e){n(e)}}))},(()=>{if("undefined"!=typeof document){var e={188:0};k.f.miniCss=(t,r)=>{e[t]?r.push(e[t]):0!==e[t]&&{712:1}[t]&&r.push(e[t]=(e=>new Promise(((t,r)=>{var n=k.miniCssF(e),a=k.p+n;if(((e,t)=>{for(var r=document.getElementsByTagName("link"),n=0;n<r.length;n++){var a=(i=r[n]).getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(a===e||a===t))return i}var o=document.getElementsByTagName("style");for(n=0;n<o.length;n++){var i;if((a=(i=o[n]).getAttribute("data-href"))===e||a===t)return i}})(n,a))return t();((e,t,r,n,a)=>{var o=document.createElement("link");o.rel="stylesheet",o.type="text/css",o.onerror=o.onload=r=>{if(o.onerror=o.onload=null,"load"===r.type)n();else{var i=r&&("load"===r.type?"missing":r.type),l=r&&r.target&&r.target.href||t,u=new Error("Loading CSS chunk "+e+" failed.\n("+l+")");u.code="CSS_CHUNK_LOAD_FAILED",u.type=i,u.request=l,o.parentNode&&o.parentNode.removeChild(o),a(u)}},o.href=t,document.head.appendChild(o)})(e,a,0,t,r)})))(t).then((()=>{e[t]=0}),(r=>{throw delete e[t],r})))}}})(),(()=>{var e={188:0};k.f.j=(t,r)=>{var n=k.o(e,t)?e[t]:void 0;if(0!==n)if(n)r.push(n[2]);else if(/^(416|51|68)$/.test(t))e[t]=0;else{var a=new Promise(((r,a)=>n=e[t]=[r,a]));r.push(n[2]=a);var o=k.p+k.u(t),i=new Error;k.l(o,(r=>{if(k.o(e,t)&&(0!==(n=e[t])&&(e[t]=void 0),n)){var a=r&&("load"===r.type?"missing":r.type),o=r&&r.target&&r.target.src;i.message="Loading chunk "+t+" failed.\n("+a+": "+o+")",i.name="ChunkLoadError",i.type=a,i.request=o,n[1](i)}}),"chunk-"+t,t)}};var t=(t,r)=>{var n,a,[o,i,l]=r,u=0;if(o.some((t=>0!==e[t]))){for(n in i)k.o(i,n)&&(k.m[n]=i[n]);l&&l(k)}for(t&&t(r);u<o.length;u++)a=o[u],k.o(e,a)&&e[a]&&e[a][0](),e[a]=0},r=self.webpackChunktic_tac_toe=self.webpackChunktic_tac_toe||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();var w=k(9677);TicTacToeApp=w})();
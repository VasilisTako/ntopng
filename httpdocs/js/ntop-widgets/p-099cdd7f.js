let e,t,n=!1;const l="undefined"!=typeof window?window:{},o=l.document||{head:{}},s={t:0,l:"",jmp:e=>e(),raf:e=>requestAnimationFrame(e),ael:(e,t,n,l)=>e.addEventListener(t,n,l),rel:(e,t,n,l)=>e.removeEventListener(t,n,l),ce:(e,t)=>new CustomEvent(e,t)},r=e=>Promise.resolve(e),c=(()=>{try{return new CSSStyleSheet,!0}catch(e){}return!1})(),i=new WeakMap,a=e=>"sc-"+e.o,u={},f=e=>"object"==(e=typeof e)||"function"===e,$=(e,t,...n)=>{let l=null,o=!1,s=!1,r=[];const c=t=>{for(let n=0;n<t.length;n++)l=t[n],Array.isArray(l)?c(l):null!=l&&"boolean"!=typeof l&&((o="function"!=typeof e&&!f(l))&&(l+=""),o&&s?r[r.length-1].i+=l:r.push(o?d(null,l):l),s=o)};if(c(n),t){const e=t.className||t.class;e&&(t.class="object"!=typeof e?e:Object.keys(e).filter((t=>e[t])).join(" "))}const i=d(e,null);return i.u=t,r.length>0&&(i.$=r),i},d=(e,t)=>({t:0,p:e,i:t,m:null,$:null,u:null}),p={},m=(e,t,n,l)=>{if(n!==l)if(t.toLowerCase(),"class"===t){const t=e.classList,o=h(n),s=h(l);t.remove(...o.filter((e=>e&&!s.includes(e)))),t.add(...s.filter((e=>e&&!o.includes(e))))}else if("style"===t){for(const t in n)l&&null!=l[t]||(t.includes("-")?e.style.removeProperty(t):e.style[t]="");for(const t in l)n&&l[t]===n[t]||(t.includes("-")?e.style.setProperty(t,l[t]):e.style[t]=l[t])}},y=/\s/,h=e=>e?e.split(y):[],w=(e,t,n,l)=>{const o=11===t.m.nodeType&&t.m.host?t.m.host:t.m,s=e&&e.u||u,r=t.u||u;for(l in s)l in r||m(o,l,s[l],void 0);for(l in r)m(o,l,s[l],r[l])},b=(t,n,l)=>{let s,r,c=n.$[l],i=0;if(null!==c.i)s=c.m=o.createTextNode(c.i);else if(s=c.m=o.createElement(c.p),w(null,c),null!=e&&s["s-si"]!==e&&s.classList.add(s["s-si"]=e),c.$)for(i=0;i<c.$.length;++i)r=b(t,c,i),r&&s.appendChild(r);return s},g=(e,n,l,o,s,r)=>{let c,i=e;for(i.shadowRoot&&i.tagName===t&&(i=i.shadowRoot);s<=r;++s)o[s]&&(c=b(null,l,s),c&&(o[s].m=c,i.insertBefore(c,n)))},j=(e,t,n,l)=>{for(;t<=n;++t)(l=e[t])&&l.m.remove()},S=(e,t)=>e.p===t.p,v=(e,t)=>{const n=t.m=e.m,l=e.$,o=t.$,s=t.i;null===s?("slot"===t.p||w(e,t),null!==l&&null!==o?((e,t,n,l)=>{let o,s=0,r=0,c=t.length-1,i=t[0],a=t[c],u=l.length-1,f=l[0],$=l[u];for(;s<=c&&r<=u;)null==i?i=t[++s]:null==a?a=t[--c]:null==f?f=l[++r]:null==$?$=l[--u]:S(i,f)?(v(i,f),i=t[++s],f=l[++r]):S(a,$)?(v(a,$),a=t[--c],$=l[--u]):S(i,$)?(v(i,$),e.insertBefore(i.m,a.m.nextSibling),i=t[++s],$=l[--u]):S(a,f)?(v(a,f),e.insertBefore(a.m,i.m),a=t[--c],f=l[++r]):(o=b(t&&t[r],n,r),f=l[++r],o&&i.m.parentNode.insertBefore(o,i.m));s>c?g(e,null==l[u+1]?null:l[u+1].m,n,l,r,u):r>u&&j(t,s,c)})(n,l,t,o):null!==o?(null!==e.i&&(n.textContent=""),g(n,null,t,o,0,o.length-1)):null!==l&&j(l,0,l.length-1)):e.i!==s&&(n.data=s)},M=e=>U(e).h,O=(e,t)=>{t&&!e.g&&t["s-p"]&&t["s-p"].push(new Promise((t=>e.g=t)))},k=(e,t)=>{if(e.t|=16,!(4&e.t))return O(e,e.j),X((()=>C(e,t)));e.t|=512},C=(e,t)=>{const n=e.S;let l;return t&&(l=R(n,"componentWillLoad")),T(l,(()=>P(e,n,t)))},P=async(n,l,s)=>{const r=n.h,c=r["s-rc"];s&&(e=>{const t=e.v,n=e.h,l=t.t,s=((e,t)=>{let n=a(t),l=z.get(n);if(e=11===e.nodeType?e:o,l)if("string"==typeof l){let t,s=i.get(e=e.head||e);s||i.set(e,s=new Set),s.has(n)||(t=o.createElement("style"),t.innerHTML=l,e.insertBefore(t,e.querySelector("link")),s&&s.add(n))}else e.adoptedStyleSheets.includes(l)||(e.adoptedStyleSheets=[...e.adoptedStyleSheets,l]);return n})(n.shadowRoot?n.shadowRoot:n.getRootNode(),t);10&l&&(n["s-sc"]=s,n.classList.add(s+"-h"))})(n);((n,l)=>{const o=n.h,s=n.M||d(null,null),r=(e=>e&&e.p===p)(l)?l:$(null,null,l);t=o.tagName,r.p=null,r.t|=4,n.M=r,r.m=s.m=o.shadowRoot||o,e=o["s-sc"],v(s,r)})(n,x(n,l)),c&&(c.map((e=>e())),r["s-rc"]=void 0);{const e=r["s-p"],t=()=>E(n);0===e.length?t():(Promise.all(e).then(t),n.t|=4,e.length=0)}},x=(e,t)=>{try{t=t.render&&t.render(),e.t&=-17,e.t|=2}catch(t){N(t,e.h)}return t},E=e=>{const t=e.h,n=e.j;R(e.S,"componentDidRender"),64&e.t||(e.t|=64,W(t),e.O(t),n||L()),e.k(t),e.g&&(e.g(),e.g=void 0),512&e.t&&Q((()=>k(e,!1))),e.t&=-517},L=()=>{W(o.documentElement),Q((()=>(e=>{const t=s.ce("appload",{detail:{namespace:"ntop-widgets"}});return e.dispatchEvent(t),t})(l)))},R=(e,t,n)=>{if(e&&e[t])try{return e[t](n)}catch(e){N(e)}},T=(e,t)=>e&&e.then?e.then(t):t(),W=e=>e.classList.add("hydrated"),A=(e,t,n)=>{if(t.C){const l=Object.entries(t.C),o=e.prototype;if(l.map((([e,[l]])=>{31&l||2&n&&32&l?Object.defineProperty(o,e,{get(){return((e,t)=>U(this).P.get(t))(0,e)},set(n){((e,t,n,l)=>{const o=U(e),s=o.P.get(t),r=o.t,c=o.S;n=((e,t)=>null==e||f(e)?e:2&t?parseFloat(e):1&t?e+"":e)(n,l.C[t][0]),8&r&&void 0!==s||n===s||(o.P.set(t,n),c&&2==(18&r)&&k(o,!1))})(this,e,n,t)},configurable:!0,enumerable:!0}):1&n&&64&l&&Object.defineProperty(o,e,{value(...t){const n=U(this);return n.L.then((()=>n.S[e](...t)))}})})),1&n){const t=new Map;o.attributeChangedCallback=function(e,n,l){s.jmp((()=>{const n=t.get(e);this[n]=(null!==l||"boolean"!=typeof this[n])&&l}))},e.observedAttributes=l.filter((([e,t])=>15&t[0])).map((([e,n])=>{const l=n[1]||e;return t.set(l,e),l}))}}return e},F=(e,t={})=>{const n=[],r=t.exclude||[],i=l.customElements,u=o.head,f=u.querySelector("meta[charset]"),$=o.createElement("style"),d=[];let p,m=!0;Object.assign(s,t),s.l=new URL(t.resourcesUrl||"./",o.baseURI).href,e.map((e=>e[1].map((t=>{const l={t:t[0],o:t[1],C:t[2],R:t[3]};l.C=t[2];const o=l.o,u=class extends HTMLElement{constructor(e){super(e),D(e=this,l),1&l.t&&e.attachShadow({mode:"open"})}connectedCallback(){p&&(clearTimeout(p),p=null),m?d.push(this):s.jmp((()=>(e=>{if(0==(1&s.t)){const t=U(e),n=t.v,l=()=>{};if(!(1&t.t)){t.t|=1;{let n=e;for(;n=n.parentNode||n.host;)if(n["s-p"]){O(t,t.j=n);break}}n.C&&Object.entries(n.C).map((([t,[n]])=>{if(31&n&&e.hasOwnProperty(t)){const n=e[t];delete e[t],e[t]=n}})),(async(e,t,n,l,o)=>{if(0==(32&t.t)){{if(t.t|=32,(o=_(n)).then){const e=()=>{};o=await o,e()}o.isProxied||(A(o,n,2),o.isProxied=!0);const e=()=>{};t.t|=8;try{new o(t)}catch(e){N(e)}t.t&=-9,e()}if(o.style){let e=o.style;const t=a(n);if(!z.has(t)){const l=()=>{};((e,t,n)=>{let l=z.get(e);c&&n?(l=l||new CSSStyleSheet,l.replace(t)):l=t,z.set(e,l)})(t,e,!!(1&n.t)),l()}}}const s=t.j,r=()=>k(t,!0);s&&s["s-rc"]?s["s-rc"].push(r):r()})(0,t,n)}l()}})(this)))}disconnectedCallback(){s.jmp((()=>{}))}componentOnReady(){return U(this).T}};l.W=e[0],r.includes(o)||i.get(o)||(n.push(o),i.define(o,A(u,l,1)))})))),$.innerHTML=n+"{visibility:hidden}.hydrated{visibility:inherit}",$.setAttribute("data-styles",""),u.insertBefore($,f?f.nextSibling:u.firstChild),m=!1,d.length?d.map((e=>e.connectedCallback())):s.jmp((()=>p=setTimeout(L,30)))},H=new WeakMap,U=e=>H.get(e),q=(e,t)=>H.set(t.S=e,t),D=(e,t)=>{const n={t:0,h:e,v:t,P:new Map};return n.L=new Promise((e=>n.k=e)),n.T=new Promise((e=>n.O=e)),e["s-p"]=[],e["s-rc"]=[],H.set(e,n)},N=(e,t)=>(0,console.error)(e,t),V=new Map,_=e=>{const t=e.o.replace(/-/g,"_"),n=e.W,l=V.get(n);return l?l[t]:import(`./${n}.entry.js`).then((e=>(V.set(n,e),e[t])),N)},z=new Map,B=[],G=[],I=(e,t)=>l=>{e.push(l),n||(n=!0,t&&4&s.t?Q(K):s.raf(K))},J=e=>{for(let t=0;t<e.length;t++)try{e[t](performance.now())}catch(e){N(e)}e.length=0},K=()=>{J(B),J(G),(n=B.length>0)&&s.raf(K)},Q=e=>r().then(e),X=I(G,!0);export{p as H,F as b,M as g,$ as h,r as p,q as r}
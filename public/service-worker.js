if(!self.define){let o,n={};const l=(l,i)=>(l=new URL(l+".js",i).href,n[l]||new Promise((n=>{if("document"in self){const o=document.createElement("script");o.src=l,o.onload=n,document.head.appendChild(o)}else o=l,importScripts(l),n()})).then((()=>{let o=n[l];if(!o)throw new Error(`Module ${l} didn’t register its module`);return o})));self.define=(i,r)=>{const t=o||("document"in self?document.currentScript.src:"")||location.href;if(n[t])return;let f={};const s=o=>l(o,t),e={module:{uri:t},exports:f,require:s};n[t]=Promise.all(i.map((o=>e[o]||s(o)))).then((o=>(r(...o),f)))}}define(["./workbox-2d118ab0"],(function(o){"use strict";o.setCacheNameDetails({prefix:"vuetorrent"}),self.skipWaiting(),o.precacheAndRoute([{url:"css/app.32af7229.css",revision:null},{url:"css/chunk-vendors.e1b5c20a.css",revision:null},{url:"fonts/roboto-latin-100.539f0a96.woff2",revision:null},{url:"fonts/roboto-latin-100.5ba994da.woff",revision:null},{url:"fonts/roboto-latin-100italic.41ba6421.woff2",revision:null},{url:"fonts/roboto-latin-100italic.d61e7e8b.woff",revision:null},{url:"fonts/roboto-latin-300.4d8f8086.woff2",revision:null},{url:"fonts/roboto-latin-300.6c1bc461.woff",revision:null},{url:"fonts/roboto-latin-300italic.3a529751.woff",revision:null},{url:"fonts/roboto-latin-300italic.45164643.woff2",revision:null},{url:"fonts/roboto-latin-400.1e2d4d3a.woff2",revision:null},{url:"fonts/roboto-latin-400.7e4a045b.woff",revision:null},{url:"fonts/roboto-latin-400italic.68431199.woff",revision:null},{url:"fonts/roboto-latin-400italic.bb3c6955.woff2",revision:null},{url:"fonts/roboto-latin-500.1dfbc3db.woff2",revision:null},{url:"fonts/roboto-latin-500.e21fe97f.woff",revision:null},{url:"fonts/roboto-latin-500italic.7543a42b.woff2",revision:null},{url:"fonts/roboto-latin-500italic.aaff6867.woff",revision:null},{url:"fonts/roboto-latin-700.02633003.woff",revision:null},{url:"fonts/roboto-latin-700.12893bfc.woff2",revision:null},{url:"fonts/roboto-latin-700italic.bc7179e0.woff2",revision:null},{url:"fonts/roboto-latin-700italic.e53062e2.woff",revision:null},{url:"fonts/roboto-latin-900.282ba77f.woff2",revision:null},{url:"fonts/roboto-latin-900.4962e810.woff",revision:null},{url:"fonts/roboto-latin-900italic.2394134a.woff",revision:null},{url:"fonts/roboto-latin-900italic.9c1f8084.woff2",revision:null},{url:"fonts/roboto-mono-latin-100.4c13ccf4.woff2",revision:null},{url:"fonts/roboto-mono-latin-100.9315540b.woff",revision:null},{url:"fonts/roboto-mono-latin-100italic.18223399.woff",revision:null},{url:"fonts/roboto-mono-latin-100italic.917e8dd2.woff2",revision:null},{url:"fonts/roboto-mono-latin-200.3003b1bc.woff2",revision:null},{url:"fonts/roboto-mono-latin-200.336e6b02.woff",revision:null},{url:"fonts/roboto-mono-latin-200italic.6048ec8f.woff",revision:null},{url:"fonts/roboto-mono-latin-200italic.c0b606fa.woff2",revision:null},{url:"fonts/roboto-mono-latin-300.5078715d.woff",revision:null},{url:"fonts/roboto-mono-latin-300.ffa06eec.woff2",revision:null},{url:"fonts/roboto-mono-latin-300italic.04ed0b24.woff2",revision:null},{url:"fonts/roboto-mono-latin-300italic.a0a73b90.woff",revision:null},{url:"fonts/roboto-mono-latin-400.5ebb8c5b.woff",revision:null},{url:"fonts/roboto-mono-latin-400.72a36365.woff2",revision:null},{url:"fonts/roboto-mono-latin-400italic.a3e11ae6.woff2",revision:null},{url:"fonts/roboto-mono-latin-400italic.d9bf7627.woff",revision:null},{url:"fonts/roboto-mono-latin-500.e643a7fc.woff",revision:null},{url:"fonts/roboto-mono-latin-500.f7f174b1.woff2",revision:null},{url:"fonts/roboto-mono-latin-500italic.8dcc2966.woff",revision:null},{url:"fonts/roboto-mono-latin-500italic.a7ed1447.woff2",revision:null},{url:"fonts/roboto-mono-latin-600.a4984c32.woff",revision:null},{url:"fonts/roboto-mono-latin-600.cc738341.woff2",revision:null},{url:"fonts/roboto-mono-latin-600italic.99e88587.woff2",revision:null},{url:"fonts/roboto-mono-latin-600italic.9ad16db3.woff",revision:null},{url:"fonts/roboto-mono-latin-700.7921576e.woff",revision:null},{url:"fonts/roboto-mono-latin-700.835b2965.woff2",revision:null},{url:"fonts/roboto-mono-latin-700italic.54ec3d53.woff",revision:null},{url:"fonts/roboto-mono-latin-700italic.b5971629.woff2",revision:null},{url:"icons/android-chrome-192x192.png",revision:"d0419aec44c074ae022a0052821a545d"},{url:"icons/android-chrome-512x512.png",revision:"5e8e59e9954cf4c49d252fdd6e2c1fc1"},{url:"icons/android-chrome-maskable-192x192.png",revision:"577770f3910bcea8b215d408285c283f"},{url:"icons/android-chrome-maskable-512x512.png",revision:"a5c84260cf16b4562102ddf5069d4832"},{url:"icons/apple-touch-icon.png",revision:"998f96b230c37650d3a21c59e90dcc15"},{url:"icons/favicon-16x16.png",revision:"818e575cb13df1e1d852c21e22c93556"},{url:"icons/favicon-32x32.png",revision:"728c786ff66b557a25a8941300acfd43"},{url:"icons/msapplication-icon-144x144.png",revision:"90c0ad433d634194c32b4b0e05103cd3"},{url:"icons/safari-pinned-tab.svg",revision:"2de763e60123a9b2398e4b03c42340a5"},{url:"index.html",revision:"4a9d7096e851942ffa079edb0ef61175"},{url:"js/app.046315dd.js",revision:null},{url:"js/chunk-vendors.e6b35361.js",revision:null},{url:"js/lang-es-js.b96c40a9.js",revision:null},{url:"js/lang-fr-js.d32321d1.js",revision:null},{url:"js/lang-id-js.402fb030.js",revision:null},{url:"js/lang-it-js.d7098e69.js",revision:null},{url:"js/lang-ja-js.e4582588.js",revision:null},{url:"js/lang-nl-js.c51a6dba.js",revision:null},{url:"js/lang-pt-br-js.1decc1fe.js",revision:null},{url:"js/lang-vi-js.c1b8f4ce.js",revision:null},{url:"js/lang-zh-hans-js.cdb6e694.js",revision:null},{url:"js/lang-zh-hant-js.d31917bf.js",revision:null},{url:"manifest.json",revision:"6e8a2492cea9fdb09232239bf3c14191"},{url:"robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map

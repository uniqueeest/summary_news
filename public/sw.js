if(!self.define){let e,s={};const n=(n,a)=>(n=new URL(n+".js",a).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(a,t)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(s[i])return;let c={};const o=e=>n(e,i),r={module:{uri:i},exports:c,require:o};s[i]=Promise.all(a.map((e=>r[e]||o(e)))).then((e=>(t(...e),c)))}}define(["./workbox-1bb06f5e"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/app-build-manifest.json",revision:"7573e1c91463a0de732baeb1f208db0a"},{url:"/_next/static/aA_PgZ1fnNVboQJ9hMXzB/_buildManifest.js",revision:"2ec694eb52ae4f523f265a46bae4d768"},{url:"/_next/static/aA_PgZ1fnNVboQJ9hMXzB/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/23-8bd9d1946ff5607b.js",revision:"aA_PgZ1fnNVboQJ9hMXzB"},{url:"/_next/static/chunks/24-7548979e13e5a730.js",revision:"aA_PgZ1fnNVboQJ9hMXzB"},{url:"/_next/static/chunks/840-5ed94301aac404b0.js",revision:"aA_PgZ1fnNVboQJ9hMXzB"},{url:"/_next/static/chunks/871-36d806875eff9aa8.js",revision:"aA_PgZ1fnNVboQJ9hMXzB"},{url:"/_next/static/chunks/964-f6e3cf70b985f1c6.js",revision:"aA_PgZ1fnNVboQJ9hMXzB"},{url:"/_next/static/chunks/app/(main)/%5Bid%5D/page-32d8a5eac94bebb7.js",revision:"aA_PgZ1fnNVboQJ9hMXzB"},{url:"/_next/static/chunks/app/(main)/page-6fd25c833e421584.js",revision:"aA_PgZ1fnNVboQJ9hMXzB"},{url:"/_next/static/chunks/app/_not-found/page-b59cbbd50b7bf75f.js",revision:"aA_PgZ1fnNVboQJ9hMXzB"},{url:"/_next/static/chunks/app/layout-50be113a9cbb9ca1.js",revision:"aA_PgZ1fnNVboQJ9hMXzB"},{url:"/_next/static/chunks/app/news/%5Bticker%5D/%5Bid%5D/page-c9a56c23ccfcb7df.js",revision:"aA_PgZ1fnNVboQJ9hMXzB"},{url:"/_next/static/chunks/app/news/%5Bticker%5D/page-c09852e55b0c38e0.js",revision:"aA_PgZ1fnNVboQJ9hMXzB"},{url:"/_next/static/chunks/app/search/page-00f95fae8a84a78e.js",revision:"aA_PgZ1fnNVboQJ9hMXzB"},{url:"/_next/static/chunks/fd9d1056-401183a4385fc8c6.js",revision:"aA_PgZ1fnNVboQJ9hMXzB"},{url:"/_next/static/chunks/framework-f66176bb897dc684.js",revision:"aA_PgZ1fnNVboQJ9hMXzB"},{url:"/_next/static/chunks/main-8b7bd730e242fd99.js",revision:"aA_PgZ1fnNVboQJ9hMXzB"},{url:"/_next/static/chunks/main-app-6b86ba97f99234fd.js",revision:"aA_PgZ1fnNVboQJ9hMXzB"},{url:"/_next/static/chunks/pages/_app-6a626577ffa902a4.js",revision:"aA_PgZ1fnNVboQJ9hMXzB"},{url:"/_next/static/chunks/pages/_error-1be831200e60c5c0.js",revision:"aA_PgZ1fnNVboQJ9hMXzB"},{url:"/_next/static/chunks/polyfills-78c92fac7aa8fdd8.js",revision:"79330112775102f91e1010318bae2bd3"},{url:"/_next/static/chunks/webpack-b6065e33adf26a29.js",revision:"aA_PgZ1fnNVboQJ9hMXzB"},{url:"/_next/static/css/bc569d2c72223cf2.css",revision:"bc569d2c72223cf2"},{url:"/_next/static/media/0822b6067e7c0dee-s.woff2",revision:"e639e31d35a7aa5fb0bc336286469c3c"},{url:"/_next/static/media/67354d9f27664b22-s.woff2",revision:"828d8b6c05d4a29e33d11e60773f0f74"},{url:"/_next/static/media/6905431624c34d00-s.p.woff2",revision:"5b3db6889bd28d3ebeef0fe9ae345c4e"},{url:"/icons/go_back.svg",revision:"2157b8f708d33cffdc655dc7e0c2dbbe"},{url:"/icons/icon.png",revision:"3547d9017f87f2668068bd9d70b432e3"},{url:"/icons/search.svg",revision:"f6bcf4fcbff27553055fe9e8b27de158"},{url:"/icons/star.svg",revision:"edb63eb096e3516efe10a64ff75aa113"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:n,state:a})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
"use strict";var precacheConfig=[["/index.html","7a3f7c93931012295d0baca7e58fd3f2"],["/static/css/main.95bb280e.css","db857ee4cba9ab62b0f24d1c02dc2b18"],["/static/js/main.ff5a3b52.js","f222849eed21e483353e9dd8692a5624"],["/static/media/1.5b5f7fa0.png","5b5f7fa07a26b0dd02f87f56b966f428"],["/static/media/2.038469e8.png","038469e844d4f6d0fe2b5017d0c7fea5"],["/static/media/3.f44e72b7.png","f44e72b73f3a7f42da2c6d33c23e42b9"],["/static/media/4.de82eb04.png","de82eb04a26e18d63447c8eb1c15e519"],["/static/media/5.30b0c5df.png","30b0c5df06832f44d0207521ae19f704"],["/static/media/6.65b9a2ad.png","65b9a2adeef1826874b48159e1c6f3ad"],["/static/media/Montserrat-Regular.91696e09.otf","91696e0984cfab74ff344325e5015da5"],["/static/media/Roboto-Bold.c0f1e4a4.woff2","c0f1e4a4fdfb8048c72e86aadb2a247d"],["/static/media/Roboto-Bold.eed9aab5.woff","eed9aab5449cc9c8430d7d258108f602"],["/static/media/Roboto-Light.3c37aa69.woff2","3c37aa69cd77e6a53a067170fa8fe2e9"],["/static/media/Roboto-Light.ea36cd9a.woff","ea36cd9a0e9eee97012a67b8a4570d7b"],["/static/media/Roboto-Medium.1561b424.woff2","1561b424aaef2f704bbd89155b3ce514"],["/static/media/Roboto-Medium.cf4d60bc.woff","cf4d60bc0b1d4b2314085919a00e1724"],["/static/media/Roboto-Regular.3cf6adf6.woff","3cf6adf61054c328b1b0ddcd8f9ce24d"],["/static/media/Roboto-Regular.5136cbe6.woff2","5136cbe62a63604402f2fedb97f246f8"],["/static/media/Roboto-Thin.1f35e6a1.woff2","1f35e6a11d27d2e10d28946d42332dc5"],["/static/media/Roboto-Thin.44b78f14.woff","44b78f142603eb69f593ed4002ed7a4a"],["/static/media/agile.9620a2b8.png","9620a2b83ee8bfa86dee8a813081f32e"],["/static/media/android.3ec99101.png","3ec99101c3d875d6070a4c8290752dfc"],["/static/media/bootstrap_ps.e5748d89.png","e5748d89e66f18bd6f8e0f78bc0ce77b"],["/static/media/c-logo.02877631.png","02877631475220a23fd7d332463b4ec7"],["/static/media/cp-logo.44ee1501.png","44ee15015759c9bfcc4f58c4994cbeb0"],["/static/media/creative.9f22e533.png","9f22e533a3a020fe569b9aa9f8529028"],["/static/media/css_logo.670c0bec.png","670c0bec96ca809688b07d72b8335b15"],["/static/media/database.d1c5eea3.png","d1c5eea38eb3cf13a6eb7044edfd66b5"],["/static/media/github.56aa79c1.png","56aa79c13096e30dc2f09a7d0118c2b2"],["/static/media/html_logo.fc4b15b5.png","fc4b15b53ceeed7a3b9361840d02d316"],["/static/media/javascript_logo.c4cea1c3.png","c4cea1c3f81ffc3ea8df7bda146b5462"],["/static/media/jquery_ajax2.954678da.png","954678dae94ac5ddd21a1d00cc5315e0"],["/static/media/kingston-logo.60e22369.png","60e22369cf44d5234bccb3fd41542981"],["/static/media/lfz-logo.e24d8fa1.png","e24d8fa183be2ee8b15d24099f761f9c"],["/static/media/linkedin.f6eaf68b.jpg","f6eaf68b925e626e37d1815b383e8a1d"],["/static/media/node_php.a44110a4.png","a44110a45893a9120ee361151deb68da"],["/static/media/oop.6c1b20cd.png","6c1b20cd844fe2e30bbd4e54ace1cf53"],["/static/media/redux.59c46753.png","59c467536111a981d904a050d335c2be"],["/static/media/responsive-design.e759a1e3.png","e759a1e372e83660b25b2a4ad2b89d05"],["/static/media/splash.a6e7a60c.png","a6e7a60cc53df05621902267d5b83d68"],["/static/media/vs_code.071dd09f.jpg","071dd09f291210c3333c33a06de78422"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(e){if(!e.redirected)return Promise.resolve(e);return("body"in e?Promise.resolve(e.body):e.blob()).then(function(a){return new Response(a,{headers:e.headers,status:e.status,statusText:e.statusText})})},createCacheKey=function(e,a,t,c){var n=new URL(e);return c&&n.pathname.match(c)||(n.search+=(n.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),n.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return a.every(function(a){return!a.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],c=new URL(a,self.location),n=createCacheKey(c,hashParamName,t,/\.\w{8}\./);return[c.toString(),n]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var c=new Request(t,{credentials:"same-origin"});return fetch(c).then(function(a){if(!a.ok)throw new Error("Request for "+t+" returned a response with status "+a.status);return cleanResponse(a).then(function(a){return e.put(t,a)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(t){return Promise.all(t.map(function(t){if(!a.has(t.url))return e.delete(t)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var a,t=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching),c="index.html";(a=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,c),a=urlsToCacheKeys.has(t));var n="/index.html";!a&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(t=new URL(n,self.location).toString(),a=urlsToCacheKeys.has(t)),a&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(a){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,a),fetch(e.request)}))}});
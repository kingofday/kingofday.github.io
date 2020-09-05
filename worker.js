var CACHE_NAME = 'pharma-pwa';
var urlsToCache = [
  './',
  '/logo.png',
  "./manifest.json",
  { url: '/index.html', revision: '383676' }
];
const apiUrl = 'https://localhost:44328/';
// const apiUrl = 'https://pharma.hillavas.com/api/'

// Install a service worker
self.addEventListener('install', e => {
  // Perform install steps
  e.waitUntil(
    caches.open(CACHE_NAME)
      .then(function (cache) {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

// Cache and return requests
self.addEventListener('fetch', e => {
  alert(e.request.url);
console.log(`url: ${e.request.url}`);
  // console.log('[ServiceWorker] Fetch', e.request.url);
  // if (event.request.mode === 'navigate') {
  //   e.respondWith(caches.match('/index.html'));
  // }
  if (e.request.url.indexOf(apiUrl) === 0)//for api 
  {
    e.respondWith(
      fetch(e.request)
        .then(function (response) {
          return caches.open(CACHE_NAME).then(function (cache) {
            cache.put(e.request.url, response.clone());
            console.log('[ServiceWorker] Fetched&Cached Data');
            return response;
          });
        })
        .catch(function (err) { })
    );
  } else {
    //for shell
    e.respondWith(
      caches.open(CACHE_NAME).then(function (cache) {
        return caches.match(e.request.url).then(function (response) {
          if (response) return response
          return fetch(e.request).then(response => {
            cache.put(e.request.url, response.clone());
            return response;
          });
          // return response || fetch(e.request);
        });

      })
    );
  }
});


  //================================================1
  // e.respondWith(
  //   fetch(e.request)
  //     .then(function (res) {
  //       let resClone = res.clone();
  //       caches.open(CACHE_NAME)
  //         .then(function (cache) {
  //           if (e.request.url.indexof('https') !== -1)
  //             cache.put(e.request, resClone);
  //         });
  //       return res;
  //     })
  //     .catch((err) => {
  //       console.log(e.request.url);
  //       return caches.match(e.request).then((res) => res);
  //     })

  //================================================2
  //   function () {
  //   console.log()
  //   if (event.request.url.indexOf(apiUrl)) {
  //     if (response) {
  //       return response;
  //     }
  //     return fetch(event.request);
  //   }
  // }

  // caches.match(event.request)
  //   .then(function(response) {
  //     // Cache hit - return response
  //     if (response) {
  //       return response;
  //     }
  //     return fetch(event.request);
  //   }
  // )
  //);
//});

// Update a service worker
self.addEventListener('activate', event => {
  var cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
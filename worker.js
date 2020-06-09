var CACHE_NAME = 'pwa-task-manager';
var urlsToCache = [
  '/logo.png'
];
const apiUrl = 'https://localhost:44328/';
// Install a service worker
self.addEventListener('install', event => {
  // Perform install steps
  // event.waitUntil(
  //   caches.open(CACHE_NAME)
  //     .then(function (cache) {
  //       console.log('Opened cache');
  //       return cache.addAll(urlsToCache);
  //     })
  // );
});

// Cache and return requests
self.addEventListener('fetch', e => {
  e.respondWith(
    fetch(e.request)
      .then(function (res) {
        let resClone = res.clone();
        caches.open(CACHE_NAME)
          .then(function (cache) {
            console.log('Opened cache');
            cache.put(e.request, resClone);
          });
        return res;
      })
      .catch((err) => {
        console.log(e.request.url);
        return caches.match(e.request).then((res) => res);
      })

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
  );
});

// Update a service worker
self.addEventListener('activate', event => {
  var cacheWhitelist = ['pwa-task-manager'];
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
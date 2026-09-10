const CACHE_NAME = 'japan-dashboard-v2';
const STATIC_ASSETS = [
  './',
  './index.html',
  './manifest.webmanifest',
  './Japan_Collecting_Masterlist.xlsx'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(STATIC_ASSETS);
    }).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))
      );
    }).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) return cachedResponse;
      return fetch(event.request).then((networkResponse) => {
        if (networkResponse && networkResponse.status === 200 && networkResponse.type === 'basic') {
          const responseToCache = networkResponse.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(event.request, responseToCache));
        }
        return networkResponse;
      }).catch(() => {
        // Offline fallback
      });
    })
  );
});

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'PREFETCH_IMAGES' && Array.isArray(event.data.urls)) {
    caches.open(CACHE_NAME).then((cache) => {
      event.data.urls.forEach((url) => {
        fetch(url, { mode: 'no-cors' }).then((response) => {
          cache.put(url, response);
        }).catch(() => {});
      });
    });
  }
});

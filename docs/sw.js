const CACHE_NAME = 'tictime-v1';
const ASSETS_TO_CACHE = [
  './index.html',
  './css/style.css',
  './js/main.js',
  './manifest.webmanifest'
];

// Install event: cache core assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS_TO_CACHE);
    })
  );
});

// Fetch event: serve from cache if offline, fallback to network
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});

// Minimal service worker for PWA installability
self.addEventListener('install', (e) => {
  self.skipWaiting();
});

self.addEventListener('activate', (e) => {
  e.waitUntil(clients.claim());
});

self.addEventListener('fetch', (e) => {
  // Simple pass-through fetch handler required by Chrome install heuristics
  e.respondWith(fetch(e.request).catch(() => caches.match(e.request)));
});
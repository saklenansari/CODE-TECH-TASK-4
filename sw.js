const CACHE_NAME = "ecommerce-cache-v1";
const assets = [
  "/",
  "/index.html",
  "/styles.css",
  "/app.js",
  "/icon-192.png",
  "/icon-512.png"
];

// Install event
self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(assets);
    })
  );
});

// Fetch event
self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(cacheRes => {
      return cacheRes || fetch(event.request);
    })
  );
});

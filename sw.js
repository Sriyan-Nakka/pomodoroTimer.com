const assets = [
  "./index.html",
  "./script.js",
  "./audio/breakCycleComplete.mp3",
  "./audio/workCycleComplete.wav",
  "./fonts/parkinsans-webfont.woff",
  "./fonts/parkinsans-webfont.woff2",
];
const cacheName = "cacheStaticAssets";

self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(cacheName).then((cache) => {
      cache.addAll(assets);
    })
  );
});

self.addEventListener("fetch", (e) => {
  e.respondWith(
    caches.match(e.request).then((cacheRes) => {
      return cacheRes || fetch(e.request);
    })
  );
});

self.addEventListener("activate", (e) => {
  console.log("service worker activated", e);
});

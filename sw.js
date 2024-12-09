const assets = ['/index.html', '/script.js', '/audio/breakCycleComplete.mp3', '/audio/workCycleComplete.wav', '/fonts/parkinsans-webfont.woff', '/fonts/parkinsans-webfont.woff2'];

self.addEventListener("install", e => {
  e.waitUntil(
    caches.open("static").then(cache => {
      cache.addAll(assets);
    })
  );
});

self.addEventListener("fetch", (e) => {
  console.log(`Intercepting fetch request for: ${e.url}`);
});

self.addEventListener("activate", (e) => {
  console.log("service worker activated", e);
});

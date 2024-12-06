const staticCacheName = "site-static";
const assets = [
  "/",
  "/index.html",
  "/style.css",
  "/script.js",
  "/Audio/workCycleComplete.wav",
  "/Audio/breakCycleComplete.mp3",
  "/Fonts/parkinsans-webfont.woff",
  "/Fonts/parkinsans-webfont.woff2",
];

self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(staticCacheName).then((cache) => {
      console.log("caching...");
      cache.addAll(assets);
    })
  );
});

self.addEventListener("fetch", (e) => {
  console.log(`Intercepting fetch request for: ${request.url}`);
});

self.addEventListener("activate", (e) => {
  console.log("service worker activated");
});

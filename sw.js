self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open("static").then((cache) => {
      return cache.addAll([
        "./index.html",
        "./style.css",
        "./script.js",
        "./Audio/workCycleComplete.wav",
        "./Audio/breakCycleComplete.mp3",
        "./Fonts/parkinsans-webfont.woff",
        "./Fonts/parkinsans-webfont.woff2",
      ]);
    })
  );
});

self.addEventListener("fetch", (e) => {
  console.log(`Intercepting fetch request for: ${request.url}`);
});

self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open("static").then(cache => {
      cache.addAll(['/PomodoroTimer/index.html']);
      cache.addAll(['/PomodoroTimer/script.js']);
      cache.addAll(['/PomodoroTimer/Audio/workCycleComplete.wav']);
      cache.addAll(['/PomodoroTimer/Audio/breakCycleComplete.mp3']);
      cache.addAll(['/PomodoroTimer/Fonts/parkinsans-webfont.woff']);
      cache.addAll(['/PomodoroTimer/Fonts/parkinsans-webfont.woff2']);
    })
  );
});

self.addEventListener("fetch", (e) => {
  console.log(`Intercepting fetch request for: ${e.url}`);
});

self.addEventListener("activate", (e) => {
  console.log("service worker activated", e);
});

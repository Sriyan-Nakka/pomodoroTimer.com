self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open("static").then(cache => {
      cache.add('/PomodoroTimer/index.html');
      cache.add('/PomodoroTimer/script.js');
      cache.add('/PomodoroTimer/Audio/workCycleComplete.wav');
      cache.add('/PomodoroTimer/Audio/breakCycleComplete.mp3');
      cache.add('/PomodoroTimer/Fonts/parkinsans-webfont.woff');
      cache.add('/PomodoroTimer/Fonts/parkinsans-webfont.woff2');
    })
  );
});

self.addEventListener("fetch", (e) => {
  console.log(`Intercepting fetch request for: ${e.url}`);
});

self.addEventListener("activate", (e) => {
  console.log("service worker activated", e);
});

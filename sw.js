self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open("excel-checklist-v1").then((cache) => {
      return cache.addAll([
        "./",
        "./index.html",
        "https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.18.5/xlsx.full.min.js",
        "https://cdn.tailwindcss.com"
      ]);
    })
  );
});

self.addEventListener("fetch", (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request))
  );
});

const CACHE_NAME = 'checklist-cache-v1';
const urlsToCache = [
  './',
  './index.html',
  './manifest.json',
  './harigami.docx',
  'https://cdn.tailwindcss.com',
  'https://cdn.jsdelivr.net/npm/xlsx/dist/xlsx.full.min.js',
  'https://cdn.jsdelivr.net/npm/file-saver@2.0.5/dist/FileSaver.min.js',
  'https://cdn.jsdelivr.net/npm/jszip@3.10.1/dist/jszip.min.js',
  'https://cdn.jsdelivr.net/npm/pizzip@3.1.5/dist/pizzip.min.js',
  'https://cdn.jsdelivr.net/npm/docxtemplater@3.42.2/build/docxtemplater.js'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then(resp => resp || fetch(event.request))
  );
});

const CACHE_NAME = 'thiago-noel-v1.0';
const urlsToCache = [
    './',
    './index.html',
    './apresentacao.html',
    './js/app.js',
    './assets/targets.mind',
    './assets/mascote.mp4',
    './assets/mascote_perfil.jpg',
    'https://cdn.tailwindcss.com',
    'https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap',
    'https://cdn.jsdelivr.net/npm/boxicons@2.1.4/css/boxicons.min.css',
    'https://aframe.io/releases/1.4.2/aframe.min.js',
    'https://cdn.jsdelivr.net/npm/mind-ar@1.2.2/dist/mindar-image-aframe.prod.js'
];

self.addEventListener('install', event => {
  self.skipWaiting(); 
  event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache)));
});

self.addEventListener('activate', event => {
  event.waitUntil(caches.keys().then(keys => Promise.all(keys.map(k => k !== CACHE_NAME ? caches.delete(k) : null))));
  return self.clients.claim();
});

self.addEventListener('fetch', event => {
  event.respondWith(caches.match(event.request).then(res => res || fetch(event.request)));
});

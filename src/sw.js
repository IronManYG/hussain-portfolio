const CACHE_NAME = 'hussain-portfolio-v1';
const ASSETS_TO_CACHE = [
    '/',
    '/index.html',
    '/styles.css',
    '/js/main.js',
    '/js/theme.js',
    '/js/animations.js',
    '/js/menu.js',
    '/js/radar.js',
    '/favicon.svg',
    '/assets/img/hussain.webp',
    '/manifest.json'
];

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            return cache.addAll(ASSETS_TO_CACHE);
        })
    );
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            return response || fetch(event.request);
        })
    );
});

self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.filter((name) => name !== CACHE_NAME)
                          .map((name) => caches.delete(name))
            );
        })
    );
});

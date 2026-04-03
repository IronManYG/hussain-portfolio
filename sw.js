const CACHE_NAME = 'hussain-portfolio-v1';
const ASSETS = [
    'index.html',
    'styles.css',
    'main.js',
    'tailwind-config.js',
    'favicon.svg',
    'assets/img/hussain.JPG',
    'assets/img/og-image.png'
];

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            return cache.addAll(ASSETS);
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

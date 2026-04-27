const CACHE_NAME = 'hussain-portfolio-v2';
const SCOPE_URL = self.registration.scope;
const u = (path) => new URL(path, SCOPE_URL).toString();

const ASSETS_TO_CACHE = [
    u('./'),
    u('index.html'),
    u('styles.css'),
    u('js/main.js'),
    u('js/theme.js'),
    u('js/animations.js'),
    u('js/anime-animations.js'),
    u('js/menu.js'),
    u('js/projects-filter.js'),
    u('favicon.svg'),
    u('assets/img/hussain.webp'),
    u('manifest.json')
];

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => cache.addAll(ASSETS_TO_CACHE).catch(() => {}))
            .then(() => self.skipWaiting())
    );
});

self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys()
            .then((names) => Promise.all(
                names.filter((n) => n !== CACHE_NAME).map((n) => caches.delete(n))
            ))
            .then(() => self.clients.claim())
    );
});

self.addEventListener('fetch', (event) => {
    const req = event.request;
    if (req.method !== 'GET') return;

    const url = new URL(req.url);
    if (url.origin !== self.location.origin) return;

    const dest = req.destination;
    const isAsset = ['style', 'script', 'document'].includes(dest);

    if (isAsset) {
        event.respondWith(
            caches.open(CACHE_NAME).then((cache) =>
                cache.match(req).then((cached) => {
                    const network = fetch(req).then((res) => {
                        if (res && res.ok) cache.put(req, res.clone());
                        return res;
                    }).catch(() => cached);
                    return cached || network;
                })
            )
        );
        return;
    }

    event.respondWith(
        caches.match(req).then((cached) => cached || fetch(req).catch(() => cached))
    );
});

// Self-destruct service worker.
//
// The old caching worker ('hussain-portfolio-v3') was cache-first for HTML,
// so returning visitors could be served the previous deploy after every
// release — and nothing registers a worker anymore. Browsers with the old
// worker installed byte-diff this file on their next visit, install it, and
// it removes itself: clears every cache, unregisters, and reloads open tabs
// so they detach from the worker immediately.
//
// Keep this file deployed for a few releases, then it can be deleted along
// with its passthrough copy in .eleventy.js.

self.addEventListener('install', () => self.skipWaiting());

self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys()
            .then((names) => Promise.all(names.map((n) => caches.delete(n))))
            .then(() => self.registration.unregister())
            .then(() => self.clients.matchAll({ type: 'window' }))
            .then((clients) => clients.forEach((client) => client.navigate(client.url)))
    );
});

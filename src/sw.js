// Self-destruct service worker.
//
// The old caching worker ('hussain-portfolio-v3') was cache-first for HTML,
// so returning visitors could be served the previous deploy after every
// release — and nothing registers a worker anymore. Browsers with the old
// worker installed byte-diff this file on their next visit, install it, and
// it removes itself: clears every cache, unregisters, and reloads open tabs
// so they detach from the worker immediately.
//
// Do NOT delete this file to tidy up — deleting it is what breaks the repair.
// A 404 on a worker script does not unregister the registration: the proposal
// to make 404/410 unregister (w3c/ServiceWorker#204) was closed wontfix, and
// Chrome's "Removing buggy service workers" guide only ever offers deploying a
// replacement worker, never deleting one. This file at this URL is therefore
// the only thing that can still repair a browser holding the old v3 worker.
// Removing it strands those visitors on a stale cached deploy permanently,
// with no signal to us that it happened.
//
// Release count is the wrong metric for retiring it — the swap only fires when
// a visitor actually returns, so what matters is elapsed time, not how many
// deploys shipped. Live since 2026-07-04; revisit around July 2027. It costs
// 1KB and is never fetched by a visitor who has no worker registered.

self.addEventListener('install', () => self.skipWaiting());

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((names) => Promise.all(names.map((n) => caches.delete(n))))
      .then(() => self.registration.unregister())
      .then(() => self.clients.matchAll({ type: 'window' }))
      .then((clients) => clients.forEach((client) => client.navigate(client.url))),
  );
});

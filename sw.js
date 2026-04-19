const CACHE_NAME = "molinarosun-v1";

self.addEventListener("install", event => {
  self.skipWaiting();
});

self.addEventListener("activate", event => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener("fetch", event => {
  // Nessuna cache aggressiva: lasciamo passare tutto.
});

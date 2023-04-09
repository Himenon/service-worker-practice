import { precacheAndRoute } from "workbox-precaching";

declare let self: ServiceWorkerGlobalScope

precacheAndRoute(self.__WB_MANIFEST)

// キャッシュ名
const CACHE_NAME = "my-cache";

const PRE_CACHED_RESOURCES = ["/assets/"];

self.addEventListener("activate", (event) => {
  console.log({
    type: "activate",
    event,
  })
})

self.addEventListener("fetch", (event) => {
  const returnCachedResource = async () => {
      // Open the app's cache.
      const cache = await caches.open(CACHE_NAME);
      // Find the response that was pre-cached during the `install` event.
      const cachedResponse = await cache.match(event.request.url);
  
      if (cachedResponse) {
        // Return the resource.
        return cachedResponse;
      } else {
        // The resource wasn't found in the cache, so fetch it from the network.
        const fetchResponse = await fetch(event.request.url);
        /**
         * ignore "chrome-extension" etc...
         */
        if (event.request.url.startsWith("http")) {
          // Put the response in cache.
          cache.put(event.request.url, fetchResponse.clone());
        }

        // And return the response.
        return fetchResponse;
      }
  }
  event.respondWith(returnCachedResource());
});

self.addEventListener("install", (event) => {
  const preCacheResources = async () => {
    // Open the app's cache.
    const cache = await caches.open(CACHE_NAME);
    // Cache all static resources.
    cache.addAll(PRE_CACHED_RESOURCES);
  }
  event.waitUntil(preCacheResources());
});

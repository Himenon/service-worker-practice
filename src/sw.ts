import { precacheAndRoute } from 'workbox-precaching'

declare let self: ServiceWorkerGlobalScope

precacheAndRoute(self.__WB_MANIFEST)

// キャッシュ名
const CACHE_NAME = "my-cache";

// キャッシュするJavaScriptファイルのパス
const urlsToCache = ["/js/my-script.js"];

console.log("hello");

self.addEventListener("fetch", (event) => {
  console.log("ここですよfetch");
  event.respondWith(
    caches.match(event.request).then((response) => {
      // キャッシュされたJavaScriptファイルが存在する場合、キャッシュから取得
      if (response) {
        return response;
      }

      // キャッシュされていない場合、Webサーバーから取得
      return fetch(event.request).then((response) => {
        // レスポンスが正常な場合、キャッシュに保存
        if (response.status === 200) {
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, response.clone());
          });
        }
        return response;
      });
    })
  );
});

self.addEventListener("install", (event) => {
  console.log("ここですよ");
  // キャッシュを作成
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log("Opened cache");
      return cache.addAll(urlsToCache);
    })
  );
});

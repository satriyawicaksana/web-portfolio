importScripts('https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js');

workbox.routing.registerRoute(
  /\.js$/,
  new workbox.strategies.CacheFirst({
      cacheName: 'js-cache',
      plugins:[
            new workbox.expiration.Plugin({
                maxEntries: 8,
                maxAgeSeconds: 7 * 24 * 60 * 60,
            })
        ]
  })
);
workbox.routing.registerRoute(
  /\.css$/,
    new workbox.strategies.CacheFirst({
        cacheName: 'css-cache',
        plugins:[
            new workbox.expiration.Plugin({
                maxEntries: 1,
                maxAgeSeconds: 7 * 24 * 60 * 60,
            })
        ]
    })
);
workbox.routing.registerRoute(
    /\.(?:jpeg|png|jpg)$/,
    new workbox.strategies.CacheFirst({
        cacheName: 'image-cache',
        plugins:[
            new workbox.expiration.Plugin({
                maxAgeSeconds: 7 * 24 * 60 * 60,
            })
        ]
    })
);
workbox.routing.registerRoute(
    /^https:\/\/fonts\.googleapis\.com/,
    new workbox.strategies.CacheFirst({
        cacheName: 'google-fonts',
        plugins: [
            new workbox.expiration.Plugin({
                maxAgeSeconds: 7 * 24 * 60 * 60,
            })
        ]
    })
);

workbox.core.setCacheNameDetails({
  prefix: 'satriya-web',
  suffix: 'v1',
  precache: 'precache',
  runtime: 'runtime'
});

workbox.precaching.precacheAndRoute([]);

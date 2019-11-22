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

workbox.precaching.precacheAndRoute([
  {
    "url": "css/main.css",
    "revision": "f5230a427515cd17c72b197cb64e092f"
  },
  {
    "url": "icon/144.png",
    "revision": "1665b4175d92f2540c28b3787b8d7618"
  },
  {
    "url": "icon/192.png",
    "revision": "97b5e1c93454e2f9768f95b569846e82"
  },
  {
    "url": "icon/512.png",
    "revision": "3ce73fcfb4553693fa6040ef8f5cdfd7"
  },
  {
    "url": "img/facebook.png",
    "revision": "7b284763dca7f8112bc78b1d375265a1"
  },
  {
    "url": "img/instagram.png",
    "revision": "ae3f333e5bc18fb9a44839fddd01da1e"
  },
  {
    "url": "img/logo-dark.png",
    "revision": "3650af986b2f79f300bb088c88ee48de"
  },
  {
    "url": "img/logo-light.png",
    "revision": "4ceabca5904b45e3839811d690ab895b"
  },
  {
    "url": "img/photo.png",
    "revision": "4efdf34508a9937c36e965b603034a89"
  },
  {
    "url": "img/school.jpg",
    "revision": "bd8cda4adef3eb7ddbbe5ea83a692dfe"
  },
  {
    "url": "img/twitter.png",
    "revision": "5cef6c116078900abe621c703cecab7c"
  },
  {
    "url": "img/work-experience.jpg",
    "revision": "3fbd2257911254d7ffe9ff0ca5de5d13"
  },
  {
    "url": "index.html",
    "revision": "5c85f058f9c7f4ff1c5e268639e4d9ba"
  },
  {
    "url": "script/jquery-3.4.1.min.js",
    "revision": "2f772fed444d5489079f275bd01e26cc"
  },
  {
    "url": "script/script.js",
    "revision": "f4a48a4915f334a42661fa6ef46b58e6"
  },
  {
    "url": "service-worker.js",
    "revision": "22cc3794a6c9964b8aec406b6d937817"
  },
  {
    "url": "workbox-config.js",
    "revision": "3a08d6bd37b8890ec97d9935d943779a"
  }
]);

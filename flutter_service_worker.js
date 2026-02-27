'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "157c31c61f5c07e99b7a8793a5d8390d",
"version.json": "a0da886530067d0c00318540fe3d7fbd",
"index.html": "7f8bd8cb7829e9ff05d0c094a9de3bc0",
"/": "7f8bd8cb7829e9ff05d0c094a9de3bc0",
"main.dart.js": "69cb76360a16f61bee89cfe734641aad",
"flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"og-image.png": "8924eda91bda12456d4fda2f7ccce4a5",
"favicon.png": "87716ba4e01b6b742db9ff07ca36f8f3",
"icons/Icon-192.png": "1eba230c47df5fbddeebb924a1a25120",
"icons/Icon-maskable-192.png": "1eba230c47df5fbddeebb924a1a25120",
"icons/Icon-maskable-512.png": "0ec89e455934008ef805c3ee3a51a052",
"icons/Icon-512.png": "0ec89e455934008ef805c3ee3a51a052",
"manifest.json": "4a684afd79d5f45353569ba317bf499e",
"assets/NOTICES": "5d3af77527ea67e6a35d11bd33cbb497",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "24894a6b1a5859443315eb6d2d9591a2",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "d7d83bd9ee909f8a9b348f56ca7b68c6",
"assets/packages/flutter_dropzone_web/assets/flutter_dropzone.js": "dddc5c70148f56609c3fb6b29929388e",
"assets/packages/wakelock_plus/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"assets/AssetManifest.bin": "f79be4f1642b1624295369bcb95e1739",
"assets/fonts/MaterialIcons-Regular.otf": "d4113275bba67198526cc93dd32c73ab",
"assets/assets/images/prop_signature.png": "b6622c82fdb460707549912dce828521",
"assets/assets/images/line_art_decoration.png": "8edda0da49f73519a7336355bbd4092a",
"assets/assets/images/vargas_logo.png": "78cd905ab72a115a0b7f8b9280ed3ee9",
"assets/assets/images/admin_login_wallpaper.jpg": "8dc2cc287be279871a312083c56d447e",
"assets/assets/images/logo_large.png": "827fc707042ce5fbc4c9858facac9985",
"assets/assets/images/VARGAS_logo_hero_card.png": "3f39a03846cc35352cdb758fac6332e9",
"assets/assets/images/avatar_02.png": "2148c6d5f94611db2459ec5e08d80171",
"assets/assets/images/avatar.png": "508faf0873dfb51d6ca208f17a4979ab",
"assets/assets/images/vargas_logo_gold.png": "2dbf0e5a92eb7ea2a6498501a1f83f00",
"assets/assets/images/bottom_avatar_03.png": "6ee3b327b08d9cfb547caaaae901f81f",
"assets/assets/images/avatar_01.png": "84335a9c3bbcc204089bd315ef68aa13",
"assets/assets/images/bottom_avatar_02.png": "8ff9c0360daa068489dab7fedf81d739",
"assets/assets/images/logo_small.png": "9cbf8d035bfcd6c1d81cd8bbe533e118",
"assets/assets/images/keys_hand.png": "92e4e396130b79f57b5e8c53e2ce1078",
"assets/assets/images/bottom_avatar.png": "b938bea56ca4f5be7c7c6a251701f091",
"assets/assets/images/main_hero_card.jpg": "807d6367f693d9de1a833a2da76caae1",
"assets/assets/icons/star_deep.png": "9a51ef2013527db481a579ec67d7fc8e",
"assets/assets/icons/pavimentacion.png": "dd3578521e9e97b04bbe1d6a6e600562",
"assets/assets/icons/alumbrado.png": "d28eccb744c0189ac27611641e5e08a7",
"assets/assets/icons/electricidad.png": "917e91a53aeca7e302567dd588d7c451",
"assets/assets/icons/x_small_white.png": "6cd08d3dbf7a626b86860a30500e312d",
"assets/assets/icons/drenaje.png": "9ef3b0a196f1a3b75fe49f97d1874f70",
"assets/assets/icons/cloud-computing.png": "1ad30e0ecc24e3755eee36c12739efbc",
"assets/assets/icons/insta_small_white.png": "3b623235a1657a216d0075424d8e5d73",
"assets/assets/icons/escriturado.png": "3c97b8a3fe10001acc067ac860289bb7",
"assets/assets/icons/launcher_icon.png": "4d77fed481bbb5f049b04475f7520be5",
"assets/assets/icons/star.png": "fe420311bab1462302821a99d89f1a2d",
"assets/assets/icons/facebook_small_white.png": "b1fe02fc6eb936cafa355022efc54d07",
"assets/assets/icons/whatsapp.png": "9c0236bff5f4de3721aa5b1452dc7de0",
"assets/assets/icons/agua_potable.png": "d2f70e11146a40c8753c74885e06263e",
"canvaskit/skwasm.js": "8060d46e9a4901ca9991edd3a26be4f0",
"canvaskit/skwasm_heavy.js": "740d43a6b8240ef9e23eed8c48840da4",
"canvaskit/skwasm.js.symbols": "3a4aadf4e8141f284bd524976b1d6bdc",
"canvaskit/canvaskit.js.symbols": "a3c9f77715b642d0437d9c275caba91e",
"canvaskit/skwasm_heavy.js.symbols": "0755b4fb399918388d71b59ad390b055",
"canvaskit/skwasm.wasm": "7e5f3afdd3b0747a1fd4517cea239898",
"canvaskit/chromium/canvaskit.js.symbols": "e2d09f0e434bc118bf67dae526737d07",
"canvaskit/chromium/canvaskit.js": "a80c765aaa8af8645c9fb1aae53f9abf",
"canvaskit/chromium/canvaskit.wasm": "a726e3f75a84fcdf495a15817c63a35d",
"canvaskit/canvaskit.js": "8331fe38e66b3a898c4f37648aaf7ee2",
"canvaskit/canvaskit.wasm": "9b6a7830bf26959b200594729d73538e",
"canvaskit/skwasm_heavy.wasm": "b0be7910760d205ea4e011458df6ee01"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}

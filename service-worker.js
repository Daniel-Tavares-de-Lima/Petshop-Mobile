const CACHE_NAME = 'petshop-v1';
const ASSETS = [
    '/',
    '/index.html',
    '/styles.css',
    '/script.js',
    '/mediaStyles.css',
    '/images/AppIcons/android/mipmap-mdpi/icone.png',
    '/images/AppIcons/android/mipmap-hdpi/icone.png',
    '/images/AppIcons/android/mipmap-xhdpi/icone.png',
    '/images/AppIcons/android/mipmap-xxhdpi/icone.png',
    '/images/AppIcons/android/mipmap-xxxhdpi/icone.png',
    '/images/AppIcons/Assets.xcassets/AppIcon.appiconset/1024.png'
];

// Instalação do Service Worker
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => cache.addAll(ASSETS))
    );
});

// Interceptação de requisições
self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request)
            .then((response) => response || fetch(event.request))
    );
});
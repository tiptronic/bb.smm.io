if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let a=Promise.resolve();return s[e]||(a=new Promise((async a=>{if("document"in self){const s=document.createElement("script");s.src=e,document.head.appendChild(s),s.onload=a}else importScripts(e),a()}))),a.then((()=>{if(!s[e])throw new Error(`Module ${e} didn’t register its module`);return s[e]}))},a=(a,s)=>{Promise.all(a.map(e)).then((e=>s(1===e.length?e[0]:e)))},s={require:Promise.resolve(a)};self.define=(a,c,i)=>{s[a]||(s[a]=Promise.resolve().then((()=>{let s={};const r={uri:location.origin+a.slice(1)};return Promise.all(c.map((a=>{switch(a){case"exports":return s;case"module":return r;default:return e(a)}}))).then((e=>{const a=i(...e);return s.default||(s.default=a),s}))})))}}define("./service-worker.js",["./workbox-543be79b"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/cart.f7-legacy.00f26b7d.js",revision:"1e3308837cf7d4f2557bc6c872ac17af"},{url:"assets/cart.f7.017b307f.css",revision:"015904642f54aa9c56041a2b6f3f5eb5"},{url:"assets/cart.f7.ad459bd2.js",revision:"da436a53ce300002dbe3b3edf44845a4"},{url:"assets/Framework7Icons-Regular.59a82bd9.woff",revision:"f95fa3fa73a2d4866c038124179ff649"},{url:"assets/Framework7Icons-Regular.f19b8090.woff2",revision:"cc68fd79e4340e4dabc7834c6f7f61fa"},{url:"assets/index-legacy.8f0a597a.js",revision:"897f141a3e45191b0ad78c672c135597"},{url:"assets/index.2a4e4004.js",revision:"5570a0479e822fed16f98750d5573520"},{url:"assets/index.648c71e7.css",revision:"f2c71cf025d1fa48b169a612f8507012"},{url:"assets/item.f7-legacy.63f9af75.js",revision:"fd9fdcfbd2ef44e22a6f4c6c260112b3"},{url:"assets/item.f7.1c355995.js",revision:"118dd6febc87b201e5a2464226030abb"},{url:"assets/item.f7.2c867a0f.css",revision:"db0a7c4f37694c0421dd9be1698fccad"},{url:"assets/layers-2x.066daca8.png",revision:"4f0283c6ce28e888000e978e537a6a56"},{url:"assets/layers.1dbbe9d0.png",revision:"a6137456ed160d7606981aa57c559898"},{url:"assets/logo_dark.f96bc666.svg",revision:"08b605cc1c3da993fbcf9ca7c6420a20"},{url:"assets/logo.306e271e.svg",revision:"2cbb1698797737d9d40229d55fa201ed"},{url:"assets/marker-icon.574c3a5c.png",revision:"2273e3d8ad9264b7daa5bdbf8e6b47f8"},{url:"assets/material-icons.75ea7773.woff",revision:"2fe4e4645bd07e2af2f93df3460d0e0b"},{url:"assets/material-icons.ff253fe1.woff2",revision:"38699e69c673ccadce553bcef499b571"},{url:"assets/polyfills-legacy.bfadd6f7.js",revision:"a261689a0c60faaf70fa28bc0be33c19"},{url:"assets/schild_224_h_dark.7ae5215c.png",revision:"d380c22cdaa4676174d66d297aad6f0c"},{url:"assets/schild_224_h.734226a5.jpg",revision:"f1babde358154ddf57b2a3a9e9bc057b"},{url:"assets/schild_placeholder.843c9449.png",revision:"2b6d9e4042945d6393d2780769428f45"},{url:"assets/vendor-legacy.21198b18.js",revision:"ccd226334678e14a8aef31f206c1cac8"},{url:"assets/vendor.f3ceb474.js",revision:"9c53d8932e3598f9e4a74c9d8aee1a13"},{url:"favicon-16x16.png",revision:"50f664869ee6a9db4181067710450a47"},{url:"favicon-32x32.png",revision:"60a4bef900464fb36bf66daac7ed15a7"},{url:"icons/128x128.png",revision:"d706a9e08a43bbf1d0be1c775afb9dd3"},{url:"icons/144x144.png",revision:"8cb63907387877b9943e1864a90d9bf2"},{url:"icons/152x152.png",revision:"cc4ad37427e816c07014056825c499f4"},{url:"icons/192x192.png",revision:"1dfcf2761b99d4ebfcecb5ff387e6e46"},{url:"icons/256x256.png",revision:"8e5e6029c10fc7cdf0547fa4b0d9fd3d"},{url:"icons/512x512.png",revision:"40a90acb83f8c401dbd266f954321839"},{url:"icons/apple-touch-icon.png",revision:"8e5e6029c10fc7cdf0547fa4b0d9fd3d"},{url:"icons/favicon.png",revision:"d706a9e08a43bbf1d0be1c775afb9dd3"},{url:"images/catalog/1.jpg",revision:"9300cd06db82b0f032e9a0c0f73034a3"},{url:"images/catalog/10.jpg",revision:"37d78b9df6fd21434b811ed08296e091"},{url:"images/catalog/2.jpg",revision:"5d8b370842dcb5c284e88d59319d7930"},{url:"images/catalog/3.jpg",revision:"1dcf24c8a9f8075cc442c71451d2c7bc"},{url:"images/catalog/4.jpg",revision:"6e24742432aed06aae1381ebc411673b"},{url:"images/catalog/5.jpg",revision:"def598af5eadb3686946baef98bd1c3f"},{url:"images/catalog/6.jpg",revision:"1ec4327a24e6a0a3040af1d2fbd62daf"},{url:"images/catalog/7.jpg",revision:"ea4fa8737b3c1bb642c22b717f7c279f"},{url:"images/catalog/8.jpg",revision:"5bb0aa613bb0fdcabff66282d0143513"},{url:"images/catalog/9.jpg",revision:"9060a3086f1e1ecb19628fe7f5795abc"},{url:"images/cohrs/1.jpg",revision:"88e15a9cabfc73c3acb84f1f47d47de9"},{url:"images/cohrs/1a.jpg",revision:"ef28101706890567d7fb079f0656facb"},{url:"images/cohrs/1b.jpg",revision:"c8036316f206aac48755c315fb5c71cd"},{url:"images/cohrs/2.jpg",revision:"a7f2dd8fd5125ffe4508d032e2c07e26"},{url:"images/cohrs/2a.jpg",revision:"7274bd3078065e1609caa4cf9459bec2"},{url:"images/cohrs/2b.jpg",revision:"479e5c852e85088d79ab65e90e9a1e8b"},{url:"images/cohrs/3.jpg",revision:"5d4c38e44489533add1ad268915a102e"},{url:"images/cohrslogo_dark.png",revision:"2fa4774f3ded631dfe6c5088002be41b"},{url:"images/cohrslogo.png",revision:"72ace00746a6249ecbc403958b96a5e6"},{url:"images/logo_dark.png",revision:"e5857b87fe4216c56e0c14157aadf812"},{url:"images/logo_dark.svg",revision:"08b605cc1c3da993fbcf9ca7c6420a20"},{url:"images/logo.png",revision:"a8b6513a29bf51dc3ba01696153576cf"},{url:"images/logo.svg",revision:"2cbb1698797737d9d40229d55fa201ed"},{url:"images/onboarding-2.jpg",revision:"e9d6a7a3c4ba838c89d5178a103ba7bc"},{url:"images/onboarding-cups.png",revision:"812b79c32f5997279a722d527742be7a"},{url:"images/onboarding-intro.png",revision:"dff680acd6067eedca9ecb6312a150d4"},{url:"images/onboarding-intro.svg",revision:"60a90ac4eacd4e28eb237a55962cbddb"},{url:"images/rothaus-brau.svg",revision:"5f9c45ad05836d993378d4ee7d779f2d"},{url:"index.html",revision:"6e0b97e7d03a51dcaf2dfccd17af387b"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]})}));
//# sourceMappingURL=service-worker.js.map

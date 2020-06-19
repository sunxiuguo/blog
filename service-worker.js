/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "b7b8c8bd07edd73cfcd3294c86f998b1"
  },
  {
    "url": "assets/css/0.styles.8c46daec.css",
    "revision": "1a839e94f78484750db3b5faadb3e2ac"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.7840874b.js",
    "revision": "25985270293dd57e5e560c7544461bf2"
  },
  {
    "url": "assets/js/100.121c62f5.js",
    "revision": "6967b4f519c3f8d51f34b52818690177"
  },
  {
    "url": "assets/js/101.64f16edf.js",
    "revision": "d5c86789c4d034b29f787c49a7115209"
  },
  {
    "url": "assets/js/102.95eb7556.js",
    "revision": "e28b7d2eb4224b95c7cc2b4a52b4c6b3"
  },
  {
    "url": "assets/js/103.0e02c3cb.js",
    "revision": "1a8f43c354902ab7bb1f98045605c21f"
  },
  {
    "url": "assets/js/104.64230d4e.js",
    "revision": "a189238d4ffcd3b35ccd078e4c11fc9d"
  },
  {
    "url": "assets/js/105.bb7a68e0.js",
    "revision": "f1f4bc1328ec6b11817bac4578b5a6c9"
  },
  {
    "url": "assets/js/106.82033d42.js",
    "revision": "280ad1a78f88239d09cca1cd9fff671c"
  },
  {
    "url": "assets/js/107.914e5858.js",
    "revision": "b9883265ae5c2451434b5343aa1a1aff"
  },
  {
    "url": "assets/js/108.a30653cb.js",
    "revision": "339b9118ad193ab4ba7a8375cec15d7b"
  },
  {
    "url": "assets/js/109.a8f890ce.js",
    "revision": "b31a9114a0fc6c5aafa0b66fd8845a3d"
  },
  {
    "url": "assets/js/11.ac257d6e.js",
    "revision": "4f45513070d7efdea4f8848dda22d0e9"
  },
  {
    "url": "assets/js/110.e8e5b0ab.js",
    "revision": "2d7685e09bbebf737e04cf38bf46d1f7"
  },
  {
    "url": "assets/js/111.4ceea09b.js",
    "revision": "563f2384ed88e2594a0fe3baa7157d46"
  },
  {
    "url": "assets/js/112.c95d0a0c.js",
    "revision": "a4d5aa33250cc83feb911b8b46b9c40e"
  },
  {
    "url": "assets/js/113.857888ea.js",
    "revision": "94237c882ddcae36ecd9562dd36d3298"
  },
  {
    "url": "assets/js/114.e4ae07c7.js",
    "revision": "ca172e050485f4a43090a72cbfcdf9fc"
  },
  {
    "url": "assets/js/115.75f2b807.js",
    "revision": "80dc847d647e1f64068544f3d8e54050"
  },
  {
    "url": "assets/js/116.b82c0bfb.js",
    "revision": "25e1b42225c924593ab61fd952c97478"
  },
  {
    "url": "assets/js/117.dc761476.js",
    "revision": "dea5dc2ff0d232806310998412401cd9"
  },
  {
    "url": "assets/js/118.21dd15eb.js",
    "revision": "dbe58b3b3cb6cb64b3f71320195dcd3b"
  },
  {
    "url": "assets/js/119.27a43da1.js",
    "revision": "98cd18177a3504e1fc91a11836b857ff"
  },
  {
    "url": "assets/js/12.a6e07cb1.js",
    "revision": "4757000bf80676ece6be7e115418b888"
  },
  {
    "url": "assets/js/120.239ffe8b.js",
    "revision": "08d88bb2b9efefd3833035e1154a115a"
  },
  {
    "url": "assets/js/121.156115c7.js",
    "revision": "b1ee6c409c7025bcbef49ac0f641b05a"
  },
  {
    "url": "assets/js/122.3766e467.js",
    "revision": "0fdd90932e6faa53cc746d67a556fd6c"
  },
  {
    "url": "assets/js/123.7ab379cc.js",
    "revision": "e1ed85f7d37c1653e1a563e4c54d805d"
  },
  {
    "url": "assets/js/124.fa26f3ef.js",
    "revision": "5a85352324195cb07e4113d3cadf9735"
  },
  {
    "url": "assets/js/125.221d2c51.js",
    "revision": "632bb3f6dc56327b51e8e973142542ee"
  },
  {
    "url": "assets/js/126.2ff2e107.js",
    "revision": "700ec5bf9275d643866538bfc8152c86"
  },
  {
    "url": "assets/js/127.d4904459.js",
    "revision": "e4ff96d9f561650d2905ee13ab6d7902"
  },
  {
    "url": "assets/js/128.3462c6f7.js",
    "revision": "444c85a81daad5fad8ea1a8de3df54de"
  },
  {
    "url": "assets/js/129.847591e6.js",
    "revision": "bd42e02cb4f27585549cf5615e2ab3db"
  },
  {
    "url": "assets/js/13.a8c6b11b.js",
    "revision": "5fb5f113d3d695eb2fd5d7d4629bb40a"
  },
  {
    "url": "assets/js/130.74689f33.js",
    "revision": "0e576777051c9a532b7c3876e04b99c9"
  },
  {
    "url": "assets/js/131.7deb2d07.js",
    "revision": "252a23dfee37e98e9ac8886a7fcc6454"
  },
  {
    "url": "assets/js/132.47c4545e.js",
    "revision": "6c0c66d1d3d2ce7a301ca138c92bbb9e"
  },
  {
    "url": "assets/js/133.1c4e07be.js",
    "revision": "08bdc094b46073a32f0ff2566956cd04"
  },
  {
    "url": "assets/js/134.dcc0030c.js",
    "revision": "86cc696962616c167a0c7a841fa75ddb"
  },
  {
    "url": "assets/js/135.521389b9.js",
    "revision": "b32eb3fa51b65de95e7874d8831042b2"
  },
  {
    "url": "assets/js/136.e403e841.js",
    "revision": "692f71de00933c62549cf2e6f33984f0"
  },
  {
    "url": "assets/js/137.5103108e.js",
    "revision": "de04de58de4b8f717e0cda8b296e842d"
  },
  {
    "url": "assets/js/138.55b9107b.js",
    "revision": "69e9a65b038d5b9afbf8b1f8a9568064"
  },
  {
    "url": "assets/js/139.5d1746c5.js",
    "revision": "ba5c4bab9ea1e439e289ddec6ea2b1f0"
  },
  {
    "url": "assets/js/14.bb39005e.js",
    "revision": "30235f4a073dcda87932cfcbba9e7575"
  },
  {
    "url": "assets/js/140.8742e3eb.js",
    "revision": "6d2d0921cbd92e460a8391387c546f2a"
  },
  {
    "url": "assets/js/141.5661ec9a.js",
    "revision": "704d965c99d3f639ceaa5018eb5a5939"
  },
  {
    "url": "assets/js/142.44871095.js",
    "revision": "70cafc00d431a19de99a3589812be147"
  },
  {
    "url": "assets/js/143.3ea75964.js",
    "revision": "77d30450e0924639b577caae4c73f6b6"
  },
  {
    "url": "assets/js/144.96969688.js",
    "revision": "025c54a910798e5dd7b615ba5ecbf57f"
  },
  {
    "url": "assets/js/145.f66415bc.js",
    "revision": "8c705207a6b3519d6a1ead5b4af2ac0b"
  },
  {
    "url": "assets/js/146.7bce54a9.js",
    "revision": "24433df4cd5845b335af8eab8119fc36"
  },
  {
    "url": "assets/js/147.60f1e4dd.js",
    "revision": "0b7a1beb40a99adea7dacc70d73b0119"
  },
  {
    "url": "assets/js/148.15dd1885.js",
    "revision": "b72bbed27bb73e82560e451b000d39d6"
  },
  {
    "url": "assets/js/149.38af1de0.js",
    "revision": "eed42dc99234ba17abb1d1808f6a6761"
  },
  {
    "url": "assets/js/15.7113ef47.js",
    "revision": "47838ae8f4651d8f8db89223eaa82bc5"
  },
  {
    "url": "assets/js/150.80fe0c27.js",
    "revision": "bee7312a833575580692a844b40a9bf0"
  },
  {
    "url": "assets/js/151.7d84e079.js",
    "revision": "c463561c77615a5f32778e348d1b7360"
  },
  {
    "url": "assets/js/152.7e2eba95.js",
    "revision": "7c34e8dda8bf710943e104641e5c94c8"
  },
  {
    "url": "assets/js/153.b98584ac.js",
    "revision": "abb2a14e659e6b8817d17eaccef420d0"
  },
  {
    "url": "assets/js/154.ba751953.js",
    "revision": "1ea7e45edc8d053742d15101553c21b5"
  },
  {
    "url": "assets/js/155.e56b983e.js",
    "revision": "2b3dc7f70eaeb8f35440f557bc71eadf"
  },
  {
    "url": "assets/js/156.3bd14e7b.js",
    "revision": "94c2e7b427602a488371aab77c60e465"
  },
  {
    "url": "assets/js/157.93bd8a8e.js",
    "revision": "3ff9520058f100c6e4f18dd8ae34ab8c"
  },
  {
    "url": "assets/js/158.eb78a787.js",
    "revision": "1b4acd49451e435f1ea4370358c8d3f4"
  },
  {
    "url": "assets/js/159.9d421dc2.js",
    "revision": "3b9d2230f5126f2d5e9b0e9ffdbd6cb4"
  },
  {
    "url": "assets/js/16.ac258be7.js",
    "revision": "fbfe40bce0236181ad3803f0bba4553b"
  },
  {
    "url": "assets/js/160.1eda4d88.js",
    "revision": "df3c8330bee58f25157f613604361185"
  },
  {
    "url": "assets/js/161.8368b364.js",
    "revision": "70bf4abf71d1a702bc2ff0bf7d4f4dfd"
  },
  {
    "url": "assets/js/162.0ce0ed1a.js",
    "revision": "d25bef1a2e804fb8a9d7c4693c5a6936"
  },
  {
    "url": "assets/js/163.c87c5933.js",
    "revision": "72f51242ffe180146608c30dee383cc4"
  },
  {
    "url": "assets/js/164.6bd622cd.js",
    "revision": "5bc1303c08894e17a5a565986c8cafd5"
  },
  {
    "url": "assets/js/165.b857bbf6.js",
    "revision": "d278d535db11a1548235e29bfe3d3e13"
  },
  {
    "url": "assets/js/166.6c1a4f8e.js",
    "revision": "141210ede337c4feaf5aead03e5cd2f7"
  },
  {
    "url": "assets/js/167.3b31b961.js",
    "revision": "6c8feb14a0220ccb86f4cf014a47cc72"
  },
  {
    "url": "assets/js/168.fc648a6a.js",
    "revision": "b1e828fd53743fce9a225057eb20762d"
  },
  {
    "url": "assets/js/169.1462974c.js",
    "revision": "0813a4c7502bbbb6b5e5e6e84f452595"
  },
  {
    "url": "assets/js/17.8cc762de.js",
    "revision": "190d2f0f32619498f3c2c0c054d281a3"
  },
  {
    "url": "assets/js/170.161fae48.js",
    "revision": "85e3e5d4f018d408b5f0cf7e1a3b45e2"
  },
  {
    "url": "assets/js/171.2c89e0fd.js",
    "revision": "04c09712d06fe3ef85d3c6cba134d853"
  },
  {
    "url": "assets/js/172.d65587f3.js",
    "revision": "c42071cbaa1a467605352c695470fe94"
  },
  {
    "url": "assets/js/18.485b4cdf.js",
    "revision": "86dbcb016e52af83bda10b44ef4eca19"
  },
  {
    "url": "assets/js/19.43a703c5.js",
    "revision": "5550640137fd8cfb655aca86c261417e"
  },
  {
    "url": "assets/js/2.e1e0c7d5.js",
    "revision": "0a0821711c19c3f33297f843b7d3a5a4"
  },
  {
    "url": "assets/js/20.2913a4af.js",
    "revision": "eb2905917f3fba7c072c220e440ae789"
  },
  {
    "url": "assets/js/21.7ca7b517.js",
    "revision": "65fe061c6a3b5290f331a7e7b14c764b"
  },
  {
    "url": "assets/js/22.727dd5b0.js",
    "revision": "29a546f2caaa7003c81138b795af699c"
  },
  {
    "url": "assets/js/23.68e82a67.js",
    "revision": "6eaebac377f6b95cd754208d4d3b55a8"
  },
  {
    "url": "assets/js/24.41d656e2.js",
    "revision": "02f4a8da9bf7d7b6c7287396c006a0ee"
  },
  {
    "url": "assets/js/25.315f9fc2.js",
    "revision": "cd9c2d27f95e3b410bc6efe0ed20aec6"
  },
  {
    "url": "assets/js/26.4da73a77.js",
    "revision": "67f6d7c6adbadb16ec9a4570d0652451"
  },
  {
    "url": "assets/js/27.1ad7543a.js",
    "revision": "bd3249effec3d1a34d4577520d4c516d"
  },
  {
    "url": "assets/js/28.28dc36e8.js",
    "revision": "ba0165f1e4c3e8170a1dea6a7449f3c6"
  },
  {
    "url": "assets/js/29.d542a18d.js",
    "revision": "41d0858a525d16e72819892630650936"
  },
  {
    "url": "assets/js/3.facfa05b.js",
    "revision": "7f178ff83c54387e92a4b150217366e9"
  },
  {
    "url": "assets/js/30.5913ee80.js",
    "revision": "3af5d8ba12421c584ffb86a97ce4778e"
  },
  {
    "url": "assets/js/31.96c515bc.js",
    "revision": "ca296dac712a3ebf8d24ec0ead8bd90a"
  },
  {
    "url": "assets/js/32.832d2769.js",
    "revision": "fd8e5bd59a5e1511ca8ec4772423872f"
  },
  {
    "url": "assets/js/33.0b5f2b6c.js",
    "revision": "0b29f0701883789ce91766f72dfe8cbc"
  },
  {
    "url": "assets/js/34.f0a43b54.js",
    "revision": "10a764da0fe5b7a81eb85f217dc174c6"
  },
  {
    "url": "assets/js/35.393f5115.js",
    "revision": "38fd1f0d8a27ab9fa2ff4a39683fbaea"
  },
  {
    "url": "assets/js/36.6931f3d3.js",
    "revision": "58991f60ee4a5e7a152ad0ce2b074bbb"
  },
  {
    "url": "assets/js/37.3af59799.js",
    "revision": "8a180a8f07356f406026ef25f4c29be1"
  },
  {
    "url": "assets/js/38.187b03ec.js",
    "revision": "feed8f48896839fb93baaac1f678936a"
  },
  {
    "url": "assets/js/39.ef86e799.js",
    "revision": "40e56a33d86d7469262be478808c31e5"
  },
  {
    "url": "assets/js/4.2c2796bf.js",
    "revision": "a36fefe026dc7f65d42b067760d00e79"
  },
  {
    "url": "assets/js/40.cb569c3b.js",
    "revision": "599cd1de2838d82a8d577191f572a971"
  },
  {
    "url": "assets/js/41.6a2b99f8.js",
    "revision": "4c8b96a72b47c7875e30c30e8d008bf1"
  },
  {
    "url": "assets/js/42.687b56eb.js",
    "revision": "5bdb68e3d9c2043ee4b363317ea58760"
  },
  {
    "url": "assets/js/43.05284af3.js",
    "revision": "1547a125fcf55449f69463e039c2c304"
  },
  {
    "url": "assets/js/44.0b67307e.js",
    "revision": "c33a2664765ccfb743494c030a6dcff0"
  },
  {
    "url": "assets/js/45.7f6ef1f3.js",
    "revision": "74659d864543ea0ab8e0b70527a86fb1"
  },
  {
    "url": "assets/js/46.8249bf7e.js",
    "revision": "f1a51a0f0b35f279d8e21bae5cb3c3bf"
  },
  {
    "url": "assets/js/47.ec5f420e.js",
    "revision": "216c53e070e0b2853d7905c640dfc6ed"
  },
  {
    "url": "assets/js/48.d11a6c13.js",
    "revision": "438edf646305bb7680b3b2b1a8ba6df3"
  },
  {
    "url": "assets/js/49.e6449fe8.js",
    "revision": "5c163733e1a3f5a58c69e4e09e299ad0"
  },
  {
    "url": "assets/js/5.937ae87d.js",
    "revision": "2574ebcd0756ead4d864a97a7ead7328"
  },
  {
    "url": "assets/js/50.915ae3af.js",
    "revision": "3c7fab90f3eecae33f051a5be3d3c0f6"
  },
  {
    "url": "assets/js/51.f88017be.js",
    "revision": "85fddd30098cf76f5ff6092c51b7b8bb"
  },
  {
    "url": "assets/js/52.19883d30.js",
    "revision": "dc158f2c9d3ba961da54e3f57166e527"
  },
  {
    "url": "assets/js/53.fae82d2a.js",
    "revision": "74e644ba44a7eed03d1474341d27ca0c"
  },
  {
    "url": "assets/js/54.45609db2.js",
    "revision": "ceab0df9ef2bb237ff847c4adc1a3db3"
  },
  {
    "url": "assets/js/55.66df9f0e.js",
    "revision": "111aa6dba160d028ce789bd1518de4b3"
  },
  {
    "url": "assets/js/56.db487c07.js",
    "revision": "728e4c88ad460a30973d32a621e7350b"
  },
  {
    "url": "assets/js/57.a32ae9e8.js",
    "revision": "658ebdbe9ec9b40e7d886b7040934509"
  },
  {
    "url": "assets/js/58.c787abec.js",
    "revision": "ad1b84b12b170b366f920b2946af8086"
  },
  {
    "url": "assets/js/59.ee218327.js",
    "revision": "179a99d67a22adc95de7934e8332be1a"
  },
  {
    "url": "assets/js/6.c085291d.js",
    "revision": "8fd2f43355787c4cc592097ce6a361a7"
  },
  {
    "url": "assets/js/60.2bcf90df.js",
    "revision": "377f1f41563f7cc7a0eef232ad035f74"
  },
  {
    "url": "assets/js/61.cb40927a.js",
    "revision": "b1a8001ed6ba712ed586c415ec77d2a7"
  },
  {
    "url": "assets/js/62.6f5dbe75.js",
    "revision": "18da2e07f4776b0645a9511600b950e6"
  },
  {
    "url": "assets/js/63.4e662f41.js",
    "revision": "6037182c890586ca2f86329ad7657bba"
  },
  {
    "url": "assets/js/64.4befdf87.js",
    "revision": "a15c4ac32c59ad193eaaefb2dcdd6c36"
  },
  {
    "url": "assets/js/65.0df2e097.js",
    "revision": "8c689e05a6089d501e1b95faf691661b"
  },
  {
    "url": "assets/js/66.194207b7.js",
    "revision": "c34520e6fde0aac563dd62d39b5ac123"
  },
  {
    "url": "assets/js/67.2f017eb6.js",
    "revision": "ff0cbf9294451dcf1d2b261864b8d0ad"
  },
  {
    "url": "assets/js/68.d7c1c8c6.js",
    "revision": "e6a2b2901acb58ba627122c124464cf9"
  },
  {
    "url": "assets/js/69.0197aa54.js",
    "revision": "9fc4a3e5aa0ff5b07db01d7fe7505d3a"
  },
  {
    "url": "assets/js/7.33994ffb.js",
    "revision": "376b10dadbbe368ef8bc8be12cb9c49e"
  },
  {
    "url": "assets/js/70.c5bd7f06.js",
    "revision": "ecd5e2e6c56ad38e36933fc5c96e328a"
  },
  {
    "url": "assets/js/71.0bb79493.js",
    "revision": "1baeffc518e0ed49e12391047f449a29"
  },
  {
    "url": "assets/js/72.305e2f8e.js",
    "revision": "f91aa0641b8d3feeb16ba628b301a0bc"
  },
  {
    "url": "assets/js/73.cf049b79.js",
    "revision": "b0522fdbf1a7ba14cde7f18ecb0c8338"
  },
  {
    "url": "assets/js/74.f7e435dd.js",
    "revision": "d5ecc19a1c511e2953c6c06f13e6c93d"
  },
  {
    "url": "assets/js/75.e75e90c2.js",
    "revision": "e48004645048db01498e71f09cae1750"
  },
  {
    "url": "assets/js/76.03391a48.js",
    "revision": "813d8ea601fc10b54c996aeddf5488f6"
  },
  {
    "url": "assets/js/77.b6b1f159.js",
    "revision": "aa82ad647ca3e7e74d81e90d6b06e523"
  },
  {
    "url": "assets/js/78.68290187.js",
    "revision": "b6345bcb3e722a42cb610d2dc3dba085"
  },
  {
    "url": "assets/js/79.3f3a989b.js",
    "revision": "963007b4a36b1601e7e13e1b8e90ebf3"
  },
  {
    "url": "assets/js/8.8e0ec08a.js",
    "revision": "53ad078feae05658d43760bfe730206c"
  },
  {
    "url": "assets/js/80.a9997b21.js",
    "revision": "c0b7ab3c71b7000b284e2d98c78e7928"
  },
  {
    "url": "assets/js/81.16b25dd6.js",
    "revision": "240b73ed3dc7102583738abfc0653e2d"
  },
  {
    "url": "assets/js/82.0d4b5429.js",
    "revision": "52551a5c884d15e7aa2fafdcd99958e7"
  },
  {
    "url": "assets/js/83.dd1d56ff.js",
    "revision": "c8bd4e6f2be293ab91fd538bf389430c"
  },
  {
    "url": "assets/js/84.647ed736.js",
    "revision": "7d343630c78c7d0fc0b6b43771fb7d81"
  },
  {
    "url": "assets/js/85.42beef75.js",
    "revision": "bdbd2d1c57ce160f041134abdbff0f19"
  },
  {
    "url": "assets/js/86.71a0ec17.js",
    "revision": "be8b3b228d6bf2f49909298331d9588c"
  },
  {
    "url": "assets/js/87.bfe0afb3.js",
    "revision": "3cea51ad0b349b088c147f933a90cac3"
  },
  {
    "url": "assets/js/88.47b7669f.js",
    "revision": "6fb705b969c6f8e384d5c64102f99537"
  },
  {
    "url": "assets/js/89.728d0788.js",
    "revision": "ca2627a03b515bd975143c5f2d08701c"
  },
  {
    "url": "assets/js/9.34339a8e.js",
    "revision": "3fa549d8ef9a3d70037344584b5e5da0"
  },
  {
    "url": "assets/js/90.6d89e6aa.js",
    "revision": "5ed9ce4819cab7bd36896a7b350071cf"
  },
  {
    "url": "assets/js/91.6a344cf8.js",
    "revision": "03f1347a4e9478821d37c2bc26c0373a"
  },
  {
    "url": "assets/js/92.dfa3fa12.js",
    "revision": "aef76b8d8c65fd95a58efb40650fd1ba"
  },
  {
    "url": "assets/js/93.03d110a3.js",
    "revision": "9b40b9fea799ca816971523c543398de"
  },
  {
    "url": "assets/js/94.3c45c969.js",
    "revision": "5caedfbe4e62961069f15c17c7b50cd2"
  },
  {
    "url": "assets/js/95.2d2088a6.js",
    "revision": "0e75ccfb263c089ce98fb71304a89e53"
  },
  {
    "url": "assets/js/96.bd876d2a.js",
    "revision": "8a7219336cd5e4f80aeb12028eb14996"
  },
  {
    "url": "assets/js/97.2b033676.js",
    "revision": "47b8c3d3d16ba462828a35634e0a4d66"
  },
  {
    "url": "assets/js/98.eb9cfac4.js",
    "revision": "0228be8d865178ec68bc5699065d9d57"
  },
  {
    "url": "assets/js/99.d5daa6b0.js",
    "revision": "bfd16f02da9c9aa5d0dc8c6c2648cab8"
  },
  {
    "url": "assets/js/app.522f64d2.js",
    "revision": "a15feee5c91505bbaa203c0d6bec7d9c"
  },
  {
    "url": "docs/设计模式手册/index.html",
    "revision": "411bf5487bac00cf993f0d696d820c8f"
  },
  {
    "url": "edit-tools.png",
    "revision": "d63c67c78f0f3c86539240d2e1539304"
  },
  {
    "url": "friends/index.html",
    "revision": "787e010e715fc8c1fbec73cd81066a8e"
  },
  {
    "url": "guide/index.html",
    "revision": "6387cf037008b5e84a3823c5f7edf0f1"
  },
  {
    "url": "index.html",
    "revision": "bd523c7d5c1c24facaaa5eff9beaf234"
  },
  {
    "url": "notes/交互设计/love.html",
    "revision": "624f300fcf558d0b7350f34052416596"
  },
  {
    "url": "notes/交互设计/个人主页设计.html",
    "revision": "8fb8135164487d98fd9a0f69ad2d36e1"
  },
  {
    "url": "notes/交互设计/交互设计资料.html",
    "revision": "ad542563f185a7007508954ec0f554ff"
  },
  {
    "url": "notes/待整理.html",
    "revision": "07810105254903a21f7741488f3874af"
  },
  {
    "url": "notes/静态网站/重构选型.html",
    "revision": "bc4851120a8cd93c7d571a57cecdb205"
  },
  {
    "url": "passages/2018-05-23-es-promise/index.html",
    "revision": "78d304e3dd72751c08f605373b69e709"
  },
  {
    "url": "passages/2018-05-29-promise-async-await-order/index.html",
    "revision": "00248f489ea6a151b84b1ad65d5051ac"
  },
  {
    "url": "passages/2018-05-29-scss-fisrt-step/index.html",
    "revision": "3c887c0eed184043d8cde46b14f6cbd5"
  },
  {
    "url": "passages/2018-05-29-scss-more/index.html",
    "revision": "e42058ddafd3af407c82613f795a5bf0"
  },
  {
    "url": "passages/2018-06-05-border-sizing/index.html",
    "revision": "cc7c56e15e76874c54bbcab3ebf9fd58"
  },
  {
    "url": "passages/2018-06-19-batch-edit-log/index.html",
    "revision": "742bad859527f3b818957ca845693cf3"
  },
  {
    "url": "passages/2018-07-29-webpack-demos-introduction/index.html",
    "revision": "cf02bbee71521b5aee543323de2a2dc2"
  },
  {
    "url": "passages/2018-07-30-webpack-pack-js/index.html",
    "revision": "619d12556ca77383f33ea566485bc3a1"
  },
  {
    "url": "passages/2018-07-31-webpack-compile-es6/index.html",
    "revision": "84ece1b2fad33b3aa3a1737dab9ecdaf"
  },
  {
    "url": "passages/2018-08-06-webpack-mutiple-pages/index.html",
    "revision": "d0c7a3e6b2dceead176004bf553d69be"
  },
  {
    "url": "passages/2018-08-08-webpack-spa-split-lazy/index.html",
    "revision": "7df10c78da030058ab3b7987f7a2b4d8"
  },
  {
    "url": "passages/2018-08-17-webpack-css/index.html",
    "revision": "56f9ffb823d876a14d62cd5687f72c6d"
  },
  {
    "url": "passages/2018-08-18-webpack-scss/index.html",
    "revision": "f1d0fbafb803431d705c8b9e67f35710"
  },
  {
    "url": "passages/2018-08-19-websocket-group-chat/index.html",
    "revision": "a1620354606cfad805d2ec049c1eabd6"
  },
  {
    "url": "passages/2018-08-20-canvas-beauty-filter/index.html",
    "revision": "f5cf2989a5cdb54363fd08a615ecdc7c"
  },
  {
    "url": "passages/2018-08-21-momentjs/index.html",
    "revision": "646501ef48c0e330baa9074d04295123"
  },
  {
    "url": "passages/2018-08-26-ssl/index.html",
    "revision": "ceecc55ddfbd6c246f610efb4ae1da15"
  },
  {
    "url": "passages/2018-08-28-webpack-scss-lazy/index.html",
    "revision": "76a139f58c3360a36a2157a8b4e5a105"
  },
  {
    "url": "passages/2018-08-30-canvas-off-screen/index.html",
    "revision": "6b2199a024f1ef0d19a0fcae6162f0a6"
  },
  {
    "url": "passages/2018-09-01-js-tree-shaking/index.html",
    "revision": "00f441f5a5ef387606857e34ac511d68"
  },
  {
    "url": "passages/2018-09-02-css-tree-shaking/index.html",
    "revision": "43d0cdc11cb3d49cad6f07c0da4a3036"
  },
  {
    "url": "passages/2018-09-06-git-tag-and-version/index.html",
    "revision": "66b4d6ed8cfe2444b511db7929bf2f46"
  },
  {
    "url": "passages/2018-09-07-git-stash/index.html",
    "revision": "94bcae7b350e67b9045a7d9101f4d7b6"
  },
  {
    "url": "passages/2018-09-09-mysql-blog-ui/index.html",
    "revision": "17ce4570c7ac821f5d31169149e4caea"
  },
  {
    "url": "passages/2018-09-11-webpack-image/index.html",
    "revision": "0490ae32587769b99a469b74c059aec5"
  },
  {
    "url": "passages/2018-10-03-js-mathjax/index.html",
    "revision": "3712b2c9af33726c8d62e8e1957ef92c"
  },
  {
    "url": "passages/2018-10-09-webpack-chracter-file/index.html",
    "revision": "b661edd71b7719bdd307d7a6ebdf082e"
  },
  {
    "url": "passages/2018-10-09-webpack-js-pacakge/index.html",
    "revision": "60b624e25f261d634df5aa983d3dd4b1"
  },
  {
    "url": "passages/2018-10-17-automatic-html/index.html",
    "revision": "fde2ee3df98b07daf6b4ebb6185c099a"
  },
  {
    "url": "passages/2018-10-18-webpack-clean-and-watch-mode/index.html",
    "revision": "90ead3c48bd78eb17b9c72f98b88eb4a"
  },
  {
    "url": "passages/2018-10-19-webpack-dev-and-prod/index.html",
    "revision": "a3443c9a86ce8b48f1d054ef2869cbf3"
  },
  {
    "url": "passages/2018-10-19-webpack-dev-server/index.html",
    "revision": "c2a93c33d512369845199633daa2c17f"
  },
  {
    "url": "passages/2018-10-23-singleton-pattern/index.html",
    "revision": "243e80a34d2c5e0ea83eb40d373c62ee"
  },
  {
    "url": "passages/2018-10-25-stragegy-pattern/index.html",
    "revision": "257ddd631294b2d35d507eba27ac341e"
  },
  {
    "url": "passages/2018-11-01-proxy-pattern/index.html",
    "revision": "1f6b5d2794c38c9259ffcea8c9764b29"
  },
  {
    "url": "passages/2018-11-06-iter-pattern/index.html",
    "revision": "23415e23fb1a68f9bdc2b7da02b44ff1"
  },
  {
    "url": "passages/2018-11-18-publish-subscribe-pattern/index.html",
    "revision": "e8cf12a9fec1ea1ec8aef78d6d2f0f95"
  },
  {
    "url": "passages/2018-11-25-command-pattern/index.html",
    "revision": "93b647220cec8621fe71a5c4c15072fb"
  },
  {
    "url": "passages/2018-12-08-weekly-share-1/index.html",
    "revision": "49b58e25bdff6522cbfd1bd4f4c6573a"
  },
  {
    "url": "passages/2018-12-12-composite-pattern/index.html",
    "revision": "be331c833e70a79484d68f7809038478"
  },
  {
    "url": "passages/2018-12-16-flyweight-pattern/index.html",
    "revision": "85c2a9f8b002496f05f9948bc5d392ed"
  },
  {
    "url": "passages/2018-12-24-weekly-share-2/index.html",
    "revision": "4e5a44d8a8e7c1b248dbaa230f722c41"
  },
  {
    "url": "passages/2019-01-07-chain-of-responsibility-pattern/index.html",
    "revision": "4b0fa6118afa9e521ff2d13112021f01"
  },
  {
    "url": "passages/2019-01-12-decorator-pattern/index.html",
    "revision": "1347ad4035f0c579720bbd21001192f9"
  },
  {
    "url": "passages/2019-01-16-state-pattern/index.html",
    "revision": "b6b1890b4d2307948404a7c6c37177e8"
  },
  {
    "url": "passages/2019-01-17-adapter-pattern/index.html",
    "revision": "7cd92ee81ddda323ac75854b1ccb99a3"
  },
  {
    "url": "passages/2019-01-19-bridge-pattern/index.html",
    "revision": "9fd5208c65c9da8e66d2406caa217ef0"
  },
  {
    "url": "passages/2019-01-25-interpreter-pattern/index.html",
    "revision": "84f568380b6dcfa39a9ab42384330f63"
  },
  {
    "url": "passages/2019-01-26-memento-pattern/index.html",
    "revision": "e1ce55ecf54aa51164076a3ccba9cadb"
  },
  {
    "url": "passages/2019-01-31-template-pattern/index.html",
    "revision": "73ec724069eb7ed9e3f715661180d5e2"
  },
  {
    "url": "passages/2019-03-15-weekly-share-3/index.html",
    "revision": "c608e121208cd12a504c505c642d8372"
  },
  {
    "url": "passages/2019-03-18-interview-js-code/index.html",
    "revision": "d4e08eca52736583139c9e79c45f72c4"
  },
  {
    "url": "passages/2019-03-19-css3-nth-child/index.html",
    "revision": "96e1a32782042b67a3f00903ecd2a778"
  },
  {
    "url": "passages/2019-03-20-css3-flex/index.html",
    "revision": "d774aa3773e39f5e450ea589ee4f9a73"
  },
  {
    "url": "passages/2019-03-21-js-re/index.html",
    "revision": "c8a1a9d8f824cfa34fe7f57cc3284e58"
  },
  {
    "url": "passages/2019-03-26-javascript-first/index.html",
    "revision": "c0e7480a0a0c59c49f2765b5f8644770"
  },
  {
    "url": "passages/2019-03-27-javascript-second/index.html",
    "revision": "eaa92a7c2d13bf472ace486a46e85da1"
  },
  {
    "url": "passages/2019-03-31-factory-pattern/index.html",
    "revision": "bf541df94f43290cd0d86af7df8a5048"
  },
  {
    "url": "passages/2019-04-01-abstract-factory-pattern/index.html",
    "revision": "fc3c31cc3758c806ad9a821090c71071"
  },
  {
    "url": "passages/2019-04-02-pwa-service-worker/index.html",
    "revision": "3b8dc1ffd2cf6c2adff56f9f25bafa0f"
  },
  {
    "url": "passages/2019-04-08-react-components-communication/index.html",
    "revision": "9978f24aa77e9fa9e7402d1fe5fb9971"
  },
  {
    "url": "passages/2019-04-09-es6/index.html",
    "revision": "7e49b87390b89213fcaadc2e41a45ee2"
  },
  {
    "url": "passages/2019-04-10-html5-drag-drop/index.html",
    "revision": "4ca96a510cbb5652ab72fe6cd023494d"
  },
  {
    "url": "passages/2019-04-15-wechat-h5-login/index.html",
    "revision": "336319b2201ade0fdb4d4693d39d2d01"
  },
  {
    "url": "passages/2019-04-16-axios/index.html",
    "revision": "83761ab8cc53f2a43d49198f5616c3f1"
  },
  {
    "url": "passages/2019-04-23-vemojs/index.html",
    "revision": "d3272a0e028a983e0e456cfb0cd89f24"
  },
  {
    "url": "passages/2019-05-02-node-block-chain/index.html",
    "revision": "03d270db8dfd7ebe4d7332d988532368"
  },
  {
    "url": "passages/2019-05-04-deep-in-jest/index.html",
    "revision": "80cd46c9f8046cba09f60b3eddcd70c3"
  },
  {
    "url": "passages/2019-05-04-jest-base/index.html",
    "revision": "8ff4e233e63d477673298358d2d4040b"
  },
  {
    "url": "passages/2019-05-04-rr/index.html",
    "revision": "a587bfa6abda28f17a35c50b0139b60a"
  },
  {
    "url": "passages/2019-05-07-play-node-shell/index.html",
    "revision": "dd3d0a83ffeeda699bbcd2d1ea35d027"
  },
  {
    "url": "passages/2019-05-15-browser/index.html",
    "revision": "dcc85582af6c6e6843fba0d04eb25a2d"
  },
  {
    "url": "passages/2019-05-15-web-safety/index.html",
    "revision": "8c32090a7480ad4fa0872d3704fd5393"
  },
  {
    "url": "passages/2019-05-17-why-i-stopped-using-sass/index.html",
    "revision": "b8be6d34a053e2c573cabf60d24b7965"
  },
  {
    "url": "passages/2019-05-18-serverless-page-counter/index.html",
    "revision": "59f94f4a58a344e2235c7d010f3e895c"
  },
  {
    "url": "passages/2019-05-25-learn-to-learn/index.html",
    "revision": "a17f8922988fa3666f4364597070d2fd"
  },
  {
    "url": "passages/2019-05-28-professional-js-notes/index.html",
    "revision": "67cf43abaf3085fc3a558774810c2552"
  },
  {
    "url": "passages/2019-06-10-weekly-share/index.html",
    "revision": "30e8d55b77470e0c049de6896fb15d8c"
  },
  {
    "url": "passages/2019-06-18-deep-in-koa/index.html",
    "revision": "50c128c769ee2950fdf15a22c8d14a8e"
  },
  {
    "url": "passages/2019-06-21-deep-in-koa-3/index.html",
    "revision": "5efd8f7e0926400b2f500e6d5fbac597"
  },
  {
    "url": "passages/2019-06-21-deep-in-koa/index.html",
    "revision": "5d16b69d4d72243bed7271d7079b0bf1"
  },
  {
    "url": "passages/2019-06-23-algorithm-offer/index.html",
    "revision": "82fd52a0eb5e62f5ea5f4b530ee42b6f"
  },
  {
    "url": "passages/2019-06-23-array-change-location/index.html",
    "revision": "4e84466e10c8e5770e880324463f00c6"
  },
  {
    "url": "passages/2019-06-23-array-find/index.html",
    "revision": "c5c9de154cbad018ce3c84030d7aebd8"
  },
  {
    "url": "passages/2019-06-23-array-inverse-pair/index.html",
    "revision": "c092ffbab49b72949b8f5f075e2b3e2d"
  },
  {
    "url": "passages/2019-06-23-array-min-numbers/index.html",
    "revision": "93a477b50511f659e07240ae897fe810"
  },
  {
    "url": "passages/2019-06-23-bit-first-one/index.html",
    "revision": "9d3804f204a80433b48428ea2ed49424"
  },
  {
    "url": "passages/2019-06-23-bit-number-of-one-more/index.html",
    "revision": "f7e835086c5779cd45d422c4e7c729b6"
  },
  {
    "url": "passages/2019-06-23-bit-number-of-one/index.html",
    "revision": "e04c662a23a13e7a4d467840818a924e"
  },
  {
    "url": "passages/2019-06-23-find-min-num/index.html",
    "revision": "7be9ed309112cfeb626cf3634bfb5ce6"
  },
  {
    "url": "passages/2019-06-23-find-times-in-sorted/index.html",
    "revision": "c61e8906172022a687ac5c3e86e3e580"
  },
  {
    "url": "passages/2019-06-23-hash-first-no-repeat-char/index.html",
    "revision": "8f87de526b325ffe7835725a9e19d940"
  },
  {
    "url": "passages/2019-06-23-hash-ugly/index.html",
    "revision": "aedff33b5c80d4ad7fb071fb062a233a"
  },
  {
    "url": "passages/2019-06-23-heap-kth-numbers/index.html",
    "revision": "c21166342457e6f0ffcb9b15dec1b111"
  },
  {
    "url": "passages/2019-06-23-list-clone/index.html",
    "revision": "c2ffa0578918192819726d5830c44200"
  },
  {
    "url": "passages/2019-06-23-list-delete-node/index.html",
    "revision": "40c76227b5314c8ef85b2cfc2c836df6"
  },
  {
    "url": "passages/2019-06-23-list-first-same-node/index.html",
    "revision": "74fb7056cd4869de6c2cd59a37a403fe"
  },
  {
    "url": "passages/2019-06-23-list-last-kth-node/index.html",
    "revision": "48b840ac9a1e8d7863feec9be299d4dd"
  },
  {
    "url": "passages/2019-06-23-list-merge/index.html",
    "revision": "32df900075c3ce962d87de16455a980e"
  },
  {
    "url": "passages/2019-06-23-list-print/index.html",
    "revision": "8c5601362028c7e98d45e1c0d0a3d310"
  },
  {
    "url": "passages/2019-06-23-list-reverse/index.html",
    "revision": "9ed294033d826eadc39cad73fb33fc83"
  },
  {
    "url": "passages/2019-06-23-recursive-loop-and-number-is-s/index.html",
    "revision": "0f76dc1f66d84f088230b7ed4fada6ad"
  },
  {
    "url": "passages/2019-06-23-recursive-loop-fibonacci/index.html",
    "revision": "44481695d87c2ecfb614d1d3be98ac42"
  },
  {
    "url": "passages/2019-06-23-recursive-loop-from-one-to-one/index.html",
    "revision": "cd729929ce910026700c3ca9baceeb91"
  },
  {
    "url": "passages/2019-06-23-recursive-loop-joseph-ring/index.html",
    "revision": "0206d169a2b3d1c4a52a9748105fc1d7"
  },
  {
    "url": "passages/2019-06-23-recursive-loop-min-kth/index.html",
    "revision": "18d22919f90775f1e9158e210b9520ce"
  },
  {
    "url": "passages/2019-06-23-recursive-loop-n-probability/index.html",
    "revision": "a9de0b382d0896e9d8ddd364195aa3b3"
  },
  {
    "url": "passages/2019-06-23-recursive-loop-playing-cards/index.html",
    "revision": "42aa9d5891e1b90095bb16c8882bdcd3"
  },
  {
    "url": "passages/2019-06-23-recursive-loop-pow/index.html",
    "revision": "7bbc6c59b30ed8837a42ec9ea41a40e7"
  },
  {
    "url": "passages/2019-06-23-recursive-loop-print-matrix/index.html",
    "revision": "b6489727d2a44c2d443b1b48586836b6"
  },
  {
    "url": "passages/2019-06-23-recursive-loop-s-sequence/index.html",
    "revision": "ec2466000998fc87be019508eda1f1aa"
  },
  {
    "url": "passages/2019-06-23-recursive-loop-times-more-than-half/index.html",
    "revision": "df396e2962c210e88cf5a6b1220d946a"
  },
  {
    "url": "passages/2019-06-23-stack-queue-exchange/index.html",
    "revision": "72295bde0dd1ca58f755003057e6e395"
  },
  {
    "url": "passages/2019-06-23-stack-queue-min-stack/index.html",
    "revision": "277cc51ce86eb8af78fe22cce0f852cd"
  },
  {
    "url": "passages/2019-06-23-stack-queue-push-pop-order/index.html",
    "revision": "bacdcbcbb9ef9b8f3e1e1b0025c2dbee"
  },
  {
    "url": "passages/2019-06-23-str-atoi/index.html",
    "revision": "986a6e86c97a163ad9d3375bf5678809"
  },
  {
    "url": "passages/2019-06-23-str-perm/index.html",
    "revision": "98e094a9718ea567de7114035c94cee7"
  },
  {
    "url": "passages/2019-06-23-str-replace-empty/index.html",
    "revision": "74ed9b3cd047ab1e6d054e9ad4b66fa1"
  },
  {
    "url": "passages/2019-06-23-str-reverse-sentence/index.html",
    "revision": "7163cddea015108d8056cb89f5a0635d"
  },
  {
    "url": "passages/2019-06-23-tree-convert-to-list/index.html",
    "revision": "19c4602ae00d67e5802d4233242c080c"
  },
  {
    "url": "passages/2019-06-23-tree-is-balance/index.html",
    "revision": "8abbad534ec79145c704c430298eeb9d"
  },
  {
    "url": "passages/2019-06-23-tree-level-travel/index.html",
    "revision": "d030fda684983622f133444871ba0f90"
  },
  {
    "url": "passages/2019-06-23-tree-mirror/index.html",
    "revision": "20f59145f5f16fe2837bf99d9efd1893"
  },
  {
    "url": "passages/2019-06-23-tree-path-with-number/index.html",
    "revision": "59bf90d9c94d1a01e26b0d53566ef7d4"
  },
  {
    "url": "passages/2019-06-23-tree-rebuild/index.html",
    "revision": "cd4f4e544a4517eeb2b0d6d476b5e233"
  },
  {
    "url": "passages/2019-06-23-tree-subtree/index.html",
    "revision": "7587e0c5b538d3e300e77ba4eac6422d"
  },
  {
    "url": "passages/2019-06-23-tree-tail-order/index.html",
    "revision": "b411c1a78ff5cf32015967c996b28d9c"
  },
  {
    "url": "passages/2019-07-06-half-year/index.html",
    "revision": "34d39d5bbbabce2297cb649a69c66728"
  },
  {
    "url": "passages/2019-07-12-redis-cache-question/index.html",
    "revision": "aeaa8c63a2bf7fcf55d1543dc5ac21d0"
  },
  {
    "url": "passages/2019-07-15-file-api/index.html",
    "revision": "3e7ee2048a69c7b9512fc3f2f2bb4886"
  },
  {
    "url": "passages/2019-07-16-font-animation/index.html",
    "revision": "ab6ed15b41374f2ba4a1483e28ccdc81"
  },
  {
    "url": "passages/2019-07-22-input-animation/index.html",
    "revision": "598a1759004ea61dcb5a130e909fee7b"
  },
  {
    "url": "passages/2019-07-24-button-animation/index.html",
    "revision": "551fbbfce5f439ae3fe59aab164e88a2"
  },
  {
    "url": "passages/2019-07-25-loader-animation-first/index.html",
    "revision": "18bb70d12362283a6971accae768c10d"
  },
  {
    "url": "passages/2019-07-26-loader-animation-second/index.html",
    "revision": "0cc52e701dfdde676b8728f1b1c3bb3d"
  },
  {
    "url": "passages/2019-08-14-game-gomoku/index.html",
    "revision": "24e8cea03b31bfdeddc4175974818418"
  },
  {
    "url": "passages/2019-08-27-koa-meet-typescript/index.html",
    "revision": "08a9e1bdd1e65230e47426acb3ea4599"
  },
  {
    "url": "passages/2019-08-27-typescript-notes/index.html",
    "revision": "045eaaaa16910f91bba59bd94a17c5cd"
  },
  {
    "url": "passages/2019-09-03-nodejs-watch-file/index.html",
    "revision": "8a0f044586cf625988dd66ed41d03afd"
  },
  {
    "url": "passages/2019-09-04-count-os/index.html",
    "revision": "2c449cbbd54849a2a32788508925a83e"
  },
  {
    "url": "passages/2019-09-04-log-module/index.html",
    "revision": "eba677421fac660c89d22d26e226fdcc"
  },
  {
    "url": "passages/2019-09-07-middleground/index.html",
    "revision": "f9fc9e5f522e423ed63b1704ed902adf"
  },
  {
    "url": "passages/2019-09-11-react-router/index.html",
    "revision": "8f89cccf50cc56fbeed08657fc8c088e"
  },
  {
    "url": "passages/2019-09-11-word-segmentation-and-search/index.html",
    "revision": "3b9521921194c99df336b84e5918d5a5"
  },
  {
    "url": "passages/2019-09-30-mongo-links/index.html",
    "revision": "3d4e7d904534e719b1c27994da1a3407"
  },
  {
    "url": "passages/2019-10-01-mongo-book/index.html",
    "revision": "320fd8347d21871389a6166b6d1821f1"
  },
  {
    "url": "passages/2019-10-02-os-base/index.html",
    "revision": "e9772bec154e29393a712d27694a49f6"
  },
  {
    "url": "passages/2019-10-03-os-logic/index.html",
    "revision": "ffc4b03248adae00e26e9b988f78b2e0"
  },
  {
    "url": "passages/2019-10-03-os-user/index.html",
    "revision": "d8b26c8a6824a80ace9d47cbbc3442ab"
  },
  {
    "url": "passages/2019-10-04-os-process/index.html",
    "revision": "a6eca7c55472d6458fcdb7d2cbb4e307"
  },
  {
    "url": "passages/2019-10-10-mongo-book-advance/index.html",
    "revision": "0ff10e00f6fd28ce29fa6f351a2b294c"
  },
  {
    "url": "passages/2019-10-21-react-hooks/index.html",
    "revision": "181d19ec29c1f16240d4795508607e8a"
  },
  {
    "url": "passages/2019-11-11-wirte-virtual-dom/index.html",
    "revision": "75920ba9feb42f8916b2cd1d126141ac"
  },
  {
    "url": "passages/2019-11-23-promise-methods/index.html",
    "revision": "32de900c58c0deb02e458368d51b8705"
  },
  {
    "url": "passages/2019-11-25-how-insist-on-learning/index.html",
    "revision": "9003dcb1786d8fc0eea8918ac61998e7"
  },
  {
    "url": "passages/2019-11-25-promise-a-plus/index.html",
    "revision": "f0783be73c0e4e4fdc6eeac65ef60b6f"
  },
  {
    "url": "scripts/baidu-analytics.js",
    "revision": "a670158da0f7dde040f4d39a7e632d13"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})

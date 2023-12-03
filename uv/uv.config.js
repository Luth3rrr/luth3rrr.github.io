// This file overwrites the stock UV config.js

self.__uv$config = {
  prefix: "/uv/service/",
  bare: "/bare/",
  encodeUrl: Ultraviolet.codec.xor.encode,
  decodeUrl: Ultraviolet.codec.xor.decode,
  handler: "https://uv.signmyboat.gq/uv/uv.handler.js",
  client: "https://uv.signmyboat.gq/uv/uv.client.js",
  bundle: "https://uv.signmyboat.gq/uv/uv.bundle.js",
  config: "uv/uv.config.js",
  sw: "https://uv.signmyboat.gq/uv/uv.sw.js",
};

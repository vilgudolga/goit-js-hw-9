!function(){function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},t={},i=n.parcelRequired7c6;null==i&&((i=function(e){if(e in o)return o[e].exports;if(e in t){var n=t[e];delete t[e];var i={id:e,exports:{}};return o[e]=i,n.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,n){t[e]=n},n.parcelRequired7c6=i);var r=i("iU1Pc"),u=document.querySelector('input[name="delay"]'),c=document.querySelector('input[name="step"]'),l=document.querySelector('input[name="amount"]');function a(e,n){return new Promise((function(o,t){setTimeout((function(){Math.random()>.3?o({position:e,delay:n}):t({position:e,delay:n})}),n)}))}document.querySelector('button[type="submit"]').addEventListener("click",(function(n){console.log("dziala"),n.preventDefault();var o=Number(u.value),t=Number(c.value),i=Number(l.value);console.log("".concat(o,"  ").concat(i));for(var d=1;d<=i;d++){console.log(d),a(d,o+t*(d-1)).then((function(n){var o=n.position,t=n.delay;e(r).Notify.success("Fulfilled promise ".concat(o," in ").concat(t," ms"))})).catch((function(n){var o=n.position,t=n.delay;e(r).Notify.failure("Rejected promise ".concat(o," in ").concat(t," ms"))}))}}))}();
//# sourceMappingURL=03-promises.49740955.js.map

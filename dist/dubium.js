!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.dubium=t():e.dubium=t()}(window,function(){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}([function(e,t,r){"use strict";e.exports={format:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:null,t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:null;e=e||"DD/MM/YY hh:mm:ss",t=t||new Date;if(e.match(/hh/)){var r=t.getHours();10>r&&(r="0".concat(r)),e=e.replace("hh",r)}else if(e.match(/h/)){var n=t.getHours();12<n?n-=12:0==n&&(n=12),11<n&&(pA="pm"),e=e.replace("h",n)}if(e.match(/mm/)){var o=t.getMinutes();10>o&&(o="0".concat(o)),e=e.replace("mm",o)}if(e.match(/ss/)){var a=t.getSeconds();10>a&&(a="0".concat(a)),e=e.replace("ss",a)}if((e.match(/a/)||e.match(/A/))&&11<t.getHours()&&(e=e.match(/A/)?e.replace("A","PM"):e.replace("a","pm")),e.match(/DD/)){var c=t.getDate();10>c&&(c="0".concat(c)),e=e.replace("DD",c)}if(e.match(/MMMM/)){var u=t.getMonth();e=e.replace("MMMM",dubium.months[u])}else if(e.match(/MMM/)){var l=t.getMonth();e=e.replace("MMM",dubium.months[l].substr(0,3))}else if(e.match(/MM/)){var i=t.getMonth()+1;10>i&&(i="0".concat(i)),e=e.replace("MM",i)}return e.match(/YYYY/)?e=e.replace("YYYY",t.getFullYear()):e.match(/YY/)&&(e=e.replace("YY",(t.getFullYear()+"").substr(2,4))),e}}}])});
//# sourceMappingURL=dubium.js.map
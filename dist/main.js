/*!es6-DOM-closest|mkrause.info|BSD-3-Clause*/"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var _closest=function e(t,o){return t&&t.parentNode&&t.matches?t&&t.matches(o)?t:e(t.parentNode,o):null};!function(){window.Element.prototype.matches||(window.Element.prototype.matches=window.Element.prototype.matchesSelector||window.Element.prototype.mozMatchesSelector||window.Element.prototype.msMatchesSelector||window.Element.prototype.oMatchesSelector||window.Element.prototype.webkitMatchesSelector||function(e){for(var t=(this.document||this.ownerDocument).querySelectorAll(e),o=t.length;0<=--o&&t.item(o)!==this;);return o>-1})}(),exports.closest=_closest;

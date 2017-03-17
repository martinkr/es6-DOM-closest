(function (global, factory) {
	if (typeof define === "function" && define.amd) {
		define(["exports"], factory);
	} else if (typeof exports !== "undefined") {
		factory(exports);
	} else {
		var mod = {
			exports: {}
		};
		factory(mod.exports);
		global.main = mod.exports;
	}
})(this, function (exports) {
	/**
  * @module es6-DOM-closest
  * @description Returns the first element that matches the selector
  * by testing the element itself and traversing up through its ancestors in the DOM tree.
  * A replacement for jQuery's .closest().
  *
  * @author martin krause - info@mkrause.info
  * @version 1.0.1
  * @copyright martin krause - info@mkrause.info
  *
  */
	/*!es6-DOM-closest|mkrause.info|BSD-3-Clause*/

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	var

	/**
  * Ensure we have Element.matches()
  * @return {Void}
  */

	/**
  * Tests if an element matches the selector, walks up the DOM-tree
  * until it's find a match for the selector.
  * @param  {DOM-Node} element  the element to test
  * @param  {String} selector selector to match the element against
  * @return {DOM-Node}
  */
	_closest = function _closest(_x, _x2) {
		var _again = true;

		_function: while (_again) {
			var element = _x,
			    query = _x2;
			_again = false;

			if (!element || !element.parentNode || !element.matches) {
				return null;
			};
			if (element && element.matches(query)) {
				return element;
			} else {
				_x = element.parentNode;
				_x2 = query;
				_again = true;
				continue _function;
			}
		}
	};

	/**
  * Polyfill for Element.matches
  * @return {Void}
  */
	(function () {
		if (!window.Element.prototype.matches) {
			window.Element.prototype.matches = window.Element.prototype.matchesSelector || window.Element.prototype.mozMatchesSelector || window.Element.prototype.msMatchesSelector || window.Element.prototype.oMatchesSelector || window.Element.prototype.webkitMatchesSelector || function (s) {
				var matches = (this.document || this.ownerDocument).querySelectorAll(s),
				    i = matches.length;
				while (--i >= 0 && matches.item(i) !== this) {}
				return i > -1;
			};
		}
	})();

	exports.closest = _closest;
});

/**
 * Tests if an element matches the selector, walks up the DOM-tree
 * until it's find a match for the selector.
 * @param  {DOM-Node} element  the element to test
 * @param  {String} selector selector to match the element against
 * @return {DOM-Node}
 */

//# sourceMappingURL=umd.js.map
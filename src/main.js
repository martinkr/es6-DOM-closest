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

const

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
	_closest =  function _closest(element, query) {
		if(!element || !element.parentNode || !element.matches) { return null};
		return( element && (element.matches(query) ) ? element : ( _closest(element.parentNode, query) ));
	};

	/**
	 * Polyfill for Element.matches
	 * @return {Void}
	 */
	( () => {
		if (!window.Element.prototype.matches) {
			window.Element.prototype.matches =
				window.Element.prototype.matchesSelector ||
				window.Element.prototype.mozMatchesSelector ||
				window.Element.prototype.msMatchesSelector ||
				window.Element.prototype.oMatchesSelector ||
				window.Element.prototype.webkitMatchesSelector ||
				function(s) {
					var matches = (this.document || this.ownerDocument).querySelectorAll(s),
						i = matches.length;
					while (--i >= 0 && matches.item(i) !== this) {}
					return i > -1;
				};
		}
	})()

export {

	/**
	 * Tests if an element matches the selector, walks up the DOM-tree
	 * until it's find a match for the selector.
	 * @param  {DOM-Node} element  the element to test
	 * @param  {String} selector selector to match the element against
	 * @return {DOM-Node}
	 */
	_closest as closest

};






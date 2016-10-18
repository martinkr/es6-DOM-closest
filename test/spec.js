/**
 * @description Spec for es6-DOM-closest
 * Returns the first element that matches the selector
 * by testing the element itself and traversing up through its ancestors in the DOM tree.
 * A replacement for jQuery's .closest().
 *
 * Use $ npm test
 *
 * @author martin krause - info@mkrause.info
 * @version 1.0.0
 * @copyright martin krause - info@mkrause.info
 *
 */
/*eslint-env node, mocha */
/*eslint max-nested-callbacks: [2, 4]*/
/*eslint require: true*/

// import chai: the assertion framework (http://chaijs.com)
import chai from "../node_modules/chai/chai";


// import jsdom: JavaScript implementation of the WHATWG DOM and HTML for basic DOM-testing (https://github.com/tmpvar/jsdom)
import jsdom from  "./../node_modules/jsdom/lib/jsdom";




// chai: setup assertion style and plugins
chai.should();
// chai.expect();


let moduleLocation = "./../src/main.js";
let module;


/**! Root test suite */
describe(`The module "${moduleLocation}"`, () => {

	/**! runs before all tests in this block */
	before(() => {

		// jsdom: setup fake dom (to avoid the karam route)
		global.document = jsdom.jsdom("<!doctype html><html><head><meta charset='utf-8'></head><body><div id='parent'><div id='child-1'><div id='child-2'>Child-2<div id='child-3'></div></div></div></div></body></html>");
		global.window = document.defaultView;
		global.navigator = global.window.navigator;

		module = require(moduleLocation);

	});


	/**! actual tests */

	it("should export `.closest()` ", () => {
 		module.closest.should.be.a("function");
	});

	it("should ensure that there's a `matches()`-function on Element.prototype", () => {
		window.Element.prototype.matches.should.be.a("function");
	});

	it("should return itself if the selector points to the starting node", () => {
		let _start = document.getElementById("child-3");
		let _result = module.closest(_start, "#child-3");
		_result.id.should.equal("child-3");
	});

	it("should return the parent node matched by the selector", () => {
		let _start = document.getElementById("child-3");
		let _result = module.closest(_start, "#parent");
		_result.id.should.equal("parent");
	});

	it("should return the first parent node matched by the selector", () => {
		let _start = document.getElementById("child-3");
		let _result = module.closest(_start, "#parent > div");
		_result.id.should.equal("child-1");
	});

});


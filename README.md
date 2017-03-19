# es6-DOM-closest [![Build Status][ci-img]][ci]

Returns the first element that matches the selector by testing the element itself and traversing up through its ancestors in the DOM tree. A simple replacement for jQuery's .closest().

## Example

```JavaScript
    import DOM from "./node_modules/es6-DOM-closest/dist/main";
    console.log( DOM.closest(document.body, "body") ); // => <body></body>
```

```JavaScript
    import DOM from "./node_modules/es6-DOM-closest/dist/main";
    console.log( DOM.closest(document.body, "body") ); // => <body></body>
```

## Distribution
The files in the ```./dist```- folder are not optimised. They are only for your convenience. Please, run them through your own build-system.

[ci-img]:  https://travis-ci.org/martinkr/postcss-mediaquery-extract.svg
[ci]:      https://travis-ci.org/martinkr/postcss-mediaquery-extract

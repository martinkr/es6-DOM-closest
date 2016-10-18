#es6-DOM-closest

Returns the first element that matches the selector by testing the element itself and traversing up through its ancestors in the DOM tree. A simple replacement for jQuery's .closest().
##Example

```JavaScript
    import DOM from "./node_modules/es6-DOM-closest/dist/main";
    console.log( DOM.closest(document.body, "body") ); // => <body></body>
```

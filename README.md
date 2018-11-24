# built-in-element

[![Build Status](https://travis-ci.com/WebReflection/built-in-element.svg?branch=master)](https://travis-ci.com/WebReflection/built-in-element) ![WebReflection status](https://offline.report/status/webreflection.svg)

## Project moved to [@ungap/custom-elements-builtin](https://github.com/ungap/custom-elements-builtin)

A polyfill for Custom Elements built-in that patches the native registry in Safari and WebKit and it's [compatible with the Custom Elements polyfill](https://github.com/WebReflection/document-register-element).

It doesn't touch Chrome and Firefox 63+ with native support, and it weights less than 1K.

### Caveat

You cannot use the `constructor` in any meaningful way if you want to ensure API consistency.

Create new elements via `document.createElement('button', {is: 'my-button'})` but do not use `new MyButton` or incompatible browsers will throw right away because they made `HTMLButtonElement` and all others not usable as classes.

If you need a reliable entry point to setup your custom builtins use the `connectedCallback` method instead of the `constructor` so you're also sure all attributes are eventually already known and you'll have full control.

Alternatively, use a `WeakSet` to optionally invoke a setup.

```js
const initialized = new WeakSet;
const setup = node => {
  initialized.add(node);
  node.live = true;
};
class MyButton extends HTMLButtonElement {
  connectedCallback() {
    if (!initialized.has(this))
      setup(this);
    // anything else
  }
}
```

You can do the same at the beginning of `attributeChangedCallback`.

### Compatible with ...

Any engine that supports genuine ES2015 syntax and the following features:

  * global `MutationObserver`, `customElements`, and `Promise`
  * `assign`, `create`, `defineProperties`, and `setPrototypeOf` from the `Object`

Alternatively, you can polyfill custom elements upfront and use Babel 7 to target older browsers.

Feel free to live test the [native ES2015 version](https://webreflection.github.io/built-in-element/test/) or the [transpiled one](https://webreflection.github.io/built-in-element/test/es5/), which works down to IE9.

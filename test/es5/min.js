"use strict";function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}function _defineProperty(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){return!t||"object"!==_typeof(t)&&"function"!=typeof t?_assertThisInitialized(e):t}function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_setPrototypeOf(e,t)}function _wrapNativeSuper(e){var t="function"==typeof Map?new Map:void 0;return(_wrapNativeSuper=function(e){if(null===e||!_isNativeFunction(e))return e;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(e))return t.get(e);t.set(e,n)}function n(){return _construct(e,arguments,_getPrototypeOf(this).constructor)}return n.prototype=Object.create(e.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),_setPrototypeOf(n,e)})(e)}function isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}function _construct(e,t,n){return(_construct=isNativeReflectConstruct()?Reflect.construct:function(e,t,n){var r=[null];r.push.apply(r,t);var o=new(Function.bind.apply(e,r));return n&&_setPrototypeOf(o,n.prototype),o}).apply(null,arguments)}function _isNativeFunction(e){return-1!==Function.toString.call(e).indexOf("[native code]")}function _setPrototypeOf(e,t){return(_setPrototypeOf=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function _getPrototypeOf(e){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}
/*! (c) Andrea Giammarchi - ISC */
/*! (c) Andrea Giammarchi - ISC */
!function(e,t){if(!t.get("li-li")){try{var n=function(e){function t(){return _classCallCheck(this,t),_possibleConstructorReturn(this,_getPrototypeOf(t).apply(this,arguments))}return _inherits(t,_wrapNativeSuper(HTMLLIElement)),t}();if(t.define("li-li",n,_defineProperty({},"extends","li")),!/is="li-li"/.test((new n).outerHTML))throw{}}catch(n){var r=Object.assign,o=Object.create,i=Object.defineProperties,u=Object.setPrototypeOf,c=t.define,a=t.get,l=t.upgrade,s=t.whenDefined,f=o(null),p=function(e){for(var t=0,n=e.length;t<n;t++){var r=e[t],o=r.attributeName,i=r.oldValue,u=r.target,c=u.getAttribute(o);"attributeChangedCallback"in u&&(i!=c||null!=c)&&u.attributeChangedCallback(o,i,u.getAttribute(o),null)}},y=function(e){var t=e.getAttribute("is");return t&&(t=t.toLowerCase())in f?f[t]:null},b=function(e,t){var n=t.Class,r=n.observedAttributes||[];if(u(e,n.prototype),r.length){new MutationObserver(p).observe(e,{attributes:!0,attributeFilter:r,attributeOldValue:!0});for(var o=[],i=0,c=r.length;i<c;i++)o.push({attributeName:r[i],oldValue:null,target:e});p(o)}},d=function(e,t){for(var n=e.querySelectorAll("[is]"),r=0,o=n.length;r<o;r++)t(n[r])},v=function e(t){if(1===t.nodeType){d(t,e);var n=y(t);n&&t instanceof n.Class&&"disconnectedCallback"in t&&t.disconnectedCallback()}},h=function e(t){if(1===t.nodeType){d(t,e);var n=y(t);n&&(t instanceof n.Class||b(t,n),"connectedCallback"in t&&t.connectedCallback())}};new MutationObserver(function(e){for(var t=0,n=e.length;t<n;t++){for(var r=e[t],o=r.addedNodes,i=r.removedNodes,u=0,c=o.length;u<c;u++)h(o[u]);for(var a=0,l=i.length;a<l;a++)v(i[j])}}).observe(e,{childList:!0,subtree:!0}),i(t,{define:{value:function(n,o,i){if(n=n.toLowerCase(),i&&"extends"in i){f[n]=r({},i,{Class:o});for(var u=i.extends+'[is="'+n+'"]',a=e.querySelectorAll(u),l=0,s=a.length;l<s;l++)h(a[l])}else c.apply(t,arguments)}},get:{value:function(e){return e in f?f[e].Class:a.call(t,e)}},upgrade:{value:function(e){var n=y(e);!n||e instanceof n.Class?l.call(t,e):b(e,n)}},whenDefined:{value:function(e){return e in f?Promise.resolve():s.call(t,e)}}});var _=e.createElement;i(e,{createElement:{value:function(n,r){var o=_.call(e,n);return r&&"is"in r&&(o.setAttribute("is",r.is),t.upgrade(o)),o}}})}}}(document,customElements),customElements.define("my-button",function(e){function t(){return _classCallCheck(this,t),_possibleConstructorReturn(this,_getPrototypeOf(t).apply(this,arguments))}return _inherits(t,_wrapNativeSuper(HTMLButtonElement)),_createClass(t,[{key:"attributeChangedCallback",value:function(e,t,n,r){this.style.color=n}},{key:"connectedCallback",value:function(){this.addEventListener("click",this)}},{key:"disconnectedCallback",value:function(){this.removeEventListener("click",this)}},{key:"handleEvent",value:function(e){(this.nextElementSibling||this.parentNode.appendChild(document.createElement("div"))).textContent="".concat(e.type," @ ").concat(new Date)}}],[{key:"observedAttributes",get:function(){return["color"]}}]),t}(),{extends:"button"});
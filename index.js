/*! (c) Andrea Giammarchi - ISC */
(function (document, customElements) {'use strict';
  if (customElements.get('li-li'))
    return;
  const EXTENDS = 'extends';
  try {
    class LI extends HTMLLIElement {}
    customElements.define('li-li', LI, {[EXTENDS]: 'li'});
    if (!/is="li-li"/.test((new LI).outerHTML))
      throw {};
  } catch (o_O) {
    const ATTRIBUTE_CHANGED_CALLBACK = 'attributeChangedCallback';
    const CONNECTED_CALLBACK = 'connectedCallback';
    const DISCONNECTED_CALLBACK = 'disconnectedCallback';
    const {assign, create, defineProperties, setPrototypeOf} = Object;
    const {define, get, upgrade, whenDefined} = customElements;
    const registry = create(null);
    const attributeChanged = changes => {
      for (let i = 0, length = changes.length; i < length; i++) {
        const {attributeName, oldValue, target} = changes[i];
        const newValue = target.getAttribute(attributeName);
        if (
          ATTRIBUTE_CHANGED_CALLBACK in target &&
          !(oldValue == newValue && newValue == null)
        )
          target[ATTRIBUTE_CHANGED_CALLBACK](
            attributeName,
            oldValue,
            target.getAttribute(attributeName),
            // TODO: add getAttributeNS if the node is XML
            null
          );
      }
    };
    const getInfo = node => {
      let is = node.getAttribute('is');
      if (is) {
        is = is.toLowerCase();
        if (is in registry)
          return registry[is];
      }
      return null;
    };
    const setup = (node, info) => {
      const {Class} = info;
      const oa = Class.observedAttributes || [];
      setPrototypeOf(node, Class.prototype);
      if (oa.length) {
        new MutationObserver(attributeChanged).observe(
          node,
          {
            attributes: true,
            attributeFilter: oa,
            attributeOldValue: true
          }
        );
        const changes = [];
        for (let i = 0, length = oa.length; i < length; i++)
          changes.push({attributeName: oa[i], oldValue: null, target: node});
        attributeChanged(changes);
      }
    };
    const setupIfNeeded = node => {
      if (node.nodeType !== 1)
        return;
      const info = getInfo(node);
      if (info) {
        if (!(node instanceof info.Class))
          setup(node, info);
        if (CONNECTED_CALLBACK in node)
          node[CONNECTED_CALLBACK]();
      }
    };
    new MutationObserver(changes => {
      for (let i = 0, length = changes.length; i < length; i++) {
        const {addedNodes, removedNodes} = changes[i];
        for (let j = 0, len = addedNodes.length; j < len; j++)
          setupIfNeeded(addedNodes[j]);
        for (let j = 0, len = removedNodes.length; j < len; j++) {
          const node = removedNodes[j];
          if (node.nodeType === 1) {
            const info = getInfo(node);
            if (
              info &&
              node instanceof info.Class &&
              DISCONNECTED_CALLBACK in node
            )
              node[DISCONNECTED_CALLBACK]();
          }
        }
      }
    }).observe(
      document,
      {childList: true, subtree: true}
    );
    defineProperties(
      customElements,
      {
        define: {
          value(name, Class, options) {
            name = name.toLowerCase();
            if (options && EXTENDS in options) {
              // currently options is not used but preserved for the future
              registry[name] = assign({}, options, {Class});
              const query = options[EXTENDS] + '[is="' + name + '"]';
              const changes = document.querySelectorAll(query);
              for (let i = 0, length = changes.length; i < length; i++)
                setupIfNeeded(changes[i]);
            }
            else
              define.apply(customElements, arguments);
          }
        },
        get: {
          value(name) {
            return name in registry ?
              registry[name].Class :
              get.call(customElements, name);
          }
        },
        upgrade: {
          value(node) {
            const info = getInfo(node);
            if (info && !(node instanceof info.Class))
              setup(node, info);
            else
              upgrade.call(customElements, node);
          }
        },
        whenDefined: {
          value(name) {
            return name in registry ?
              Promise.resolve() :
              whenDefined.call(customElements, name);
          }
        }
      }
    );
    const {createElement} = document;
    defineProperties(
      document,
      {
        createElement: {
          value(name, options) {
            const node = createElement.call(document, name);
            if (options && 'is' in options) {
              node.setAttribute('is', options.is);
              customElements.upgrade(node);
            }
            return node;
          }
        }
      }
    );
  }
}(document, customElements));

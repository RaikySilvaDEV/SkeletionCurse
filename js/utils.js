const $ = (selector, scope = document) => scope.querySelector(selector);

const $$ = (selector, scope = document) =>
  Array.from(scope.querySelectorAll(selector));

const createEl = (tag, className, text) => {
  const el = document.createElement(tag);
  if (className) {
    el.className = className;
  }
  if (text !== undefined && text !== null) {
    el.textContent = text;
  }
  return el;
};

window.$ = $;
window.$$ = $$;
window.createEl = createEl;

class t {
  static QUERIES = {
    "mobile-sm": "(max-width: 320px)",
    "mobile-s": "(max-width: 375px)",
    mobile: "(max-width: 425px)",
    tablet: "(min-width: 425px) and (max-width: 768px)",
    desktop: "(min-width: 768px)",
    "desktop-l": "(min-width: 1024px)"
  };
  static get matches() {
    return Object.entries(t.QUERIES).reduce((e, [a, d]) => ({ ...e, [a]: window.matchMedia(d).matches }), {});
  }
  static get isMobile() {
    return window.matchMedia(t.QUERIES.mobile).matches;
  }
  static get isTablet() {
    return window.matchMedia(t.QUERIES.tablet).matches;
  }
  static get isDesktop() {
    return window.matchMedia(t.QUERIES.desktop).matches;
  }
}
Object.entries(t.QUERIES).forEach(([i, e]) => {
  window.matchMedia(e).addEventListener("change", ({ matches: a }) => {
    a ? document.body.classList.add(i) : document.body.classList.remove(i);
  });
});
Object.entries(t.QUERIES).forEach(([i, e]) => {
  window.matchMedia(e).matches && document.body.classList.add(i);
});
export {
  t as Breakpoint
};

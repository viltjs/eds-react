import { m as l, u as t, B as d, k as i, L as p, a as s, G as u } from "./lazy-component.js";
function m({ block: n }) {
  const [e, o] = n.children, r = l(o).map(({ innerHTML: a }, c) => /* @__PURE__ */ t(
    "h1",
    {
      className: "hero-react__title",
      "data-aue-prop": "text",
      "data-aue-label": "Text",
      "data-aue-type": "richtext",
      children: a
    },
    a + c
  ));
  return /* @__PURE__ */ t(i, { children: [
    /* @__PURE__ */ t(d, { children: e }),
    r
  ] });
}
const h = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Hero: m,
  Lazy: p,
  LazyComponent: s
}, Symbol.toStringTag, { value: "Module" }));
function _(n, e) {
  const o = h[n], r = /* @__PURE__ */ t(o, { block: e.cloneNode(!0) });
  e.innerHTML = "", u(r, e);
}
export {
  _ as render
};

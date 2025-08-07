var u = { exports: {} }, r = {};
var i;
function p() {
  if (i) return r;
  i = 1;
  var l = Symbol.for("react.transitional.element"), x = Symbol.for("react.fragment");
  function s(d, e, t) {
    var n = null;
    if (t !== void 0 && (n = "" + t), e.key !== void 0 && (n = "" + e.key), "key" in e) {
      t = {};
      for (var o in e)
        o !== "key" && (t[o] = e[o]);
    } else t = e;
    return e = t.ref, {
      $$typeof: l,
      type: d,
      key: n,
      ref: e !== void 0 ? e : null,
      props: t
    };
  }
  return r.Fragment = x, r.jsx = s, r.jsxs = s, r;
}
var a;
function R() {
  return a || (a = 1, u.exports = p()), u.exports;
}
var c = R();
function m() {
  return /* @__PURE__ */ c.jsx("p", { className: "lazy-component", children: "This component's code took a moment to download." });
}
const v = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: m
}, Symbol.toStringTag, { value: "Module" }));
export {
  v as L,
  c as j
};

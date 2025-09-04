function s(a) {
  return [...a.children].map((t) => [t, ...s(t).flat()]);
}
function c(a) {
  return a.filter((t) => t.tagName !== "DIV");
}
function f(a) {
  return s(a).map(c);
}
function l(a) {
  return f(a).map((t) => ({
    picture: t.find((n) => n.tagName === "PICTURE"),
    sources: t.filter((n) => n.tagName === "SOURCE"),
    img: t.find((n) => n.tagName === "IMG")
  })).filter(({ img: t }) => !!t);
}
const u = ["H1", "H2", "H3", "H4", "H5", "H6", "P", "A", "STRONG", "EM"];
function o(a) {
  return f(a).map((t) => t.filter((n) => u.includes(n.tagName)));
}
function g(a) {
  const t = [], n = [];
  return {
    txts: t,
    imgs: n,
    flat: f(a).map((r) => {
      t.push(r.filter((e) => u.includes(e.tagName)));
      const i = r.find((e) => e.tagName === "IMG");
      return i && n.push({
        picture: r.find((e) => e.tagName === "PICTURE"),
        sources: r.filter((e) => e.tagName === "SOURCE"),
        img: i
      }), r;
    })
  };
}
export {
  l as a,
  o as b,
  f,
  g as i
};

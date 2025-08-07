import { decorateTemplateAndTheme as c, loadSection as d, loadSections as l, loadHeader as r, loadFooter as u, loadCSS as s, decorateButtons as m, decorateIcons as f, decorateSections as w, decorateBlocks as y, waitForFirstImage as h } from "./aem.js";
function S(e, o, t) {
  t || (t = [...e.attributes].map(({ nodeName: a }) => a)), t.forEach((a) => {
    const n = e.getAttribute(a);
    n && (o?.setAttribute(a, n), e.removeAttribute(a));
  });
}
function B(e, o) {
  S(
    e,
    o,
    [...e.attributes].map(({ nodeName: t }) => t).filter((t) => t.startsWith("data-aue-") || t.startsWith("data-richtext-"))
  );
}
async function i() {
  await s(`${window.hlx.codeBasePath}/styles/fonts.css`);
  try {
    window.location.hostname.includes("localhost") || sessionStorage.setItem("fonts-loaded", "true");
  } catch {
  }
}
function g(e) {
  m(e), f(e), w(e), y(e);
}
async function p(e) {
  document.documentElement.lang = "en", c();
  const o = e.querySelector("main");
  o && (g(o), document.body.classList.add("appear"), await d(o.querySelector(".section"), h));
  try {
    (window.innerWidth >= 900 || sessionStorage.getItem("fonts-loaded")) && i();
  } catch {
  }
}
async function I(e) {
  const o = e.querySelector("main");
  await l(o);
  const { hash: t } = window.location, a = t ? e.getElementById(t.substring(1)) : !1;
  t && a && a.scrollIntoView(), r(e.querySelector("header")), u(e.querySelector("footer")), s(`${window.hlx.codeBasePath}/styles/lazy-styles.css`), i();
}
function b() {
  window.setTimeout(() => import("./delayed.js"), 3e3);
}
async function q() {
  await p(document), await I(document), b();
}
q();
export {
  g as decorateMain,
  S as moveAttributes,
  B as moveInstrumentation
};

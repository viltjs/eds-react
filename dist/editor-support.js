import { loadScript as h, loadSections as f, decorateButtons as d, decorateIcons as p, decorateBlock as S, loadBlock as E, decorateSections as b, decorateBlocks as v } from "./aem.js";
import { decorateRichtext as s } from "./editor-support-rte.js";
import { decorateMain as g } from "./scripts.js";
async function k(i) {
  const { detail: a } = i, n = a?.request?.target?.resource || a?.request?.target?.container?.resource || a?.request?.to?.container?.resource;
  if (!n) return !1;
  const l = a?.response?.updates;
  if (!l.length) return !1;
  const { content: m } = l[0];
  if (!m) return !1;
  await h(`${window.hlx.codeBasePath}/dist/dompurify.min.js`);
  const w = window.DOMPurify.sanitize(m, { USE_PROFILES: { html: !0 } }), u = new DOMParser().parseFromString(w, "text/html"), r = document.querySelector(`[data-aue-resource="${n}"]`);
  if (r) {
    if (r.matches("main")) {
      const t = u.querySelector(`[data-aue-resource="${n}"]`);
      return t.style.display = "none", r.insertAdjacentElement("afterend", t), g(t), s(t), await f(t), r.remove(), t.style.display = null, y(t), !0;
    }
    const c = r.parentElement?.closest(".block[data-aue-resource]") || r?.closest(".block[data-aue-resource]");
    if (c) {
      const t = c.getAttribute("data-aue-resource"), e = u.querySelector(`[data-aue-resource="${t}"]`);
      if (e)
        return e.style.display = "none", c.insertAdjacentElement("afterend", e), d(e), p(e), S(e), s(e), await E(e), c.remove(), e.style.display = null, !0;
    } else {
      const t = u.querySelectorAll(`[data-aue-resource="${n}"],[data-richtext-resource="${n}"]`);
      if (t.length) {
        const { parentElement: e } = r;
        if (r.matches(".section")) {
          const [o] = t;
          o.style.display = "none", r.insertAdjacentElement("afterend", o), d(o), p(o), s(o), b(e), v(e), await f(e), r.remove(), o.style.display = null;
        } else
          r.replaceWith(...t), d(e), p(e), s(e);
        return !0;
      }
    }
  }
  return !1;
}
function y(i) {
  [
    "aue:content-patch",
    "aue:content-update",
    "aue:content-add",
    "aue:content-move",
    "aue:content-remove",
    "aue:content-copy"
  ].forEach((a) => i?.addEventListener(a, async (n) => {
    n.stopPropagation(), await k(n) || window.location.reload();
  }));
}
y(document.querySelector("main"));
s();
const q = new MutationObserver(() => s());
q.observe(document, { attributeFilter: ["data-richtext-prop"], subtree: !0 });

function l(t, e) {
  const o = () => window.performance ? window.performance.now() : Date.now() - window.hlx.rum.firstReadTime;
  try {
    if (window.hlx = window.hlx || {}, !window.hlx.rum) {
      l.enhance = () => {
      };
      const n = new URLSearchParams(window.location.search).get("rum"), a = n === "on" && 1 || window.SAMPLE_PAGEVIEWS_AT_RATE === "high" && 10 || window.SAMPLE_PAGEVIEWS_AT_RATE === "low" && 1e3 || 100, i = Math.random().toString(36).slice(-4), r = n !== "off" && Math.random() * a < 1;
      if (window.hlx.rum = {
        weight: a,
        id: i,
        isSelected: r,
        firstReadTime: window.performance ? window.performance.timeOrigin : Date.now(),
        sampleRUM: l,
        queue: [],
        collector: (...d) => window.hlx.rum.queue.push(d)
      }, r) {
        const d = (s) => {
          const c = { source: "undefined error" };
          try {
            c.target = s.toString(), c.source = s.stack.split(`
`).filter((u) => u.match(/https?:\/\//)).shift().replace(/at ([^ ]+) \((.+)\)/, "$1@$2").replace(/ at /, "@").trim();
          } catch {
          }
          return c;
        };
        window.addEventListener("error", ({ error: s }) => {
          const c = d(s);
          l("error", c);
        }), window.addEventListener("unhandledrejection", ({ reason: s }) => {
          let c = {
            source: "Unhandled Rejection",
            target: s || "Unknown"
          };
          s instanceof Error && (c = d(s)), l("error", c);
        }), l.baseURL = l.baseURL || new URL(window.RUM_BASE || "/", new URL("https://rum.hlx.page")), l.collectBaseURL = l.collectBaseURL || l.baseURL, l.sendPing = (s, c, u = {}) => {
          const p = JSON.stringify({
            weight: a,
            id: i,
            referer: window.location.href,
            checkpoint: s,
            t: c,
            ...u
          }), E = window.RUM_PARAMS ? `?${new URLSearchParams(window.RUM_PARAMS).toString()}` : "", { href: y, origin: S } = new URL(
            `.rum/${a}${E}`,
            l.collectBaseURL
          ), A = S === window.location.origin ? new Blob([p], { type: "application/json" }) : p;
          navigator.sendBeacon(y, A), console.debug(`ping:${s}`, u);
        }, l.sendPing("top", o()), l.enhance = () => {
          if (document.querySelector('script[src*="rum-enhancer"]')) return;
          const { enhancerVersion: s, enhancerHash: c } = l.enhancerContext || {}, u = document.createElement("script");
          c && (u.integrity = c, u.setAttribute("crossorigin", "anonymous")), u.src = new URL(
            `.rum/@adobe/helix-rum-enhancer@${s || "^2"}/src/index.js`,
            l.baseURL
          ).href, document.head.appendChild(u);
        }, window.hlx.RUM_MANUAL_ENHANCE || l.enhance();
      }
    }
    window.hlx.rum && window.hlx.rum.isSelected && t && window.hlx.rum.collector(t, e, o()), document.dispatchEvent(new CustomEvent("rum", { detail: { checkpoint: t, data: e } }));
  } catch {
  }
}
function L() {
  window.hlx = window.hlx || {}, window.hlx.RUM_MASK_URL = "full", window.hlx.RUM_MANUAL_ENHANCE = !0, window.hlx.codeBasePath = "", window.hlx.lighthouse = new URLSearchParams(window.location.search).get("lighthouse") === "on";
  const t = document.querySelector('script[src$="/dist/scripts.js"]');
  if (t)
    try {
      const e = new URL(t.src, window.location);
      e.host === window.location.host ? [window.hlx.codeBasePath] = e.pathname.split("/dist/scripts.js") : [window.hlx.codeBasePath] = e.href.split("/dist/scripts.js");
    } catch (e) {
      console.log(e);
    }
}
function x() {
  L(), l.collectBaseURL = window.origin, l();
}
function h(t) {
  return typeof t == "string" ? t.toLowerCase().replace(/[^0-9a-z]/gi, "-").replace(/-+/g, "-").replace(/^-|-$/g, "") : "";
}
function R(t) {
  return h(t).replace(/-([a-z])/g, (e) => e[1].toUpperCase());
}
function N(t) {
  const e = {};
  return t.querySelectorAll(":scope > div").forEach((o) => {
    if (o.children) {
      const n = [...o.children];
      if (n[1]) {
        const a = n[1], i = h(n[0].textContent);
        let r = "";
        if (a.querySelector("a")) {
          const d = [...a.querySelectorAll("a")];
          d.length === 1 ? r = d[0].href : r = d.map((s) => s.href);
        } else if (a.querySelector("img")) {
          const d = [...a.querySelectorAll("img")];
          d.length === 1 ? r = d[0].src : r = d.map((s) => s.src);
        } else if (a.querySelector("p")) {
          const d = [...a.querySelectorAll("p")];
          d.length === 1 ? r = d[0].textContent : r = d.map((s) => s.textContent);
        } else r = o.children[1].textContent;
        e[i] = r;
      }
    }
  }), e;
}
async function U(t) {
  return new Promise((e, o) => {
    if (document.querySelector(`head > link[href="${t}"]`))
      e();
    else {
      const n = document.createElement("link");
      n.rel = "stylesheet", n.href = t, n.onload = e, n.onerror = o, document.head.append(n);
    }
  });
}
async function q(t, e) {
  return new Promise((o, n) => {
    if (document.querySelector(`head > script[src="${t}"]`))
      o();
    else {
      const a = document.createElement("script");
      if (a.src = t, e)
        for (const i in e)
          a.setAttribute(i, e[i]);
      a.onload = o, a.onerror = n, document.head.append(a);
    }
  });
}
function w(t, e = document) {
  const o = t && t.includes(":") ? "property" : "name";
  return [...e.head.querySelectorAll(`meta[${o}="${t}"]`)].map((a) => a.content).join(", ") || "";
}
function B(t, e = "", o = !1, n = [{ media: "(min-width: 600px)", width: "2000" }, { width: "750" }]) {
  const a = new URL(t, window.location.href), i = document.createElement("picture"), { pathname: r } = a, d = r.substring(r.lastIndexOf(".") + 1);
  return n.forEach((s) => {
    const c = document.createElement("source");
    s.media && c.setAttribute("media", s.media), c.setAttribute("type", "image/webp"), c.setAttribute("srcset", `${r}?width=${s.width}&format=webply&optimize=medium`), i.appendChild(c);
  }), n.forEach((s, c) => {
    if (c < n.length - 1) {
      const u = document.createElement("source");
      s.media && u.setAttribute("media", s.media), u.setAttribute("srcset", `${r}?width=${s.width}&format=${d}&optimize=medium`), i.appendChild(u);
    } else {
      const u = document.createElement("img");
      u.setAttribute("loading", o ? "eager" : "lazy"), u.setAttribute("alt", e), i.appendChild(u), u.setAttribute("src", `${r}?width=${s.width}&format=${d}&optimize=medium`);
    }
  }), i;
}
function v() {
  const t = (n, a) => {
    a.split(",").forEach((i) => {
      n.classList.add(h(i.trim()));
    });
  }, e = w("template");
  e && t(document.body, e);
  const o = w("theme");
  o && t(document.body, o);
}
function $(t) {
  const e = [
    "P",
    "PRE",
    "UL",
    "OL",
    "PICTURE",
    "TABLE",
    "H1",
    "H2",
    "H3",
    "H4",
    "H5",
    "H6"
  ], o = (n) => {
    const a = document.createElement("p");
    a.append(...n.childNodes), [...n.attributes].filter(({ nodeName: i }) => i === "class" || i.startsWith("data-aue") || i.startsWith("data-richtext")).forEach(({ nodeName: i, nodeValue: r }) => {
      a.setAttribute(i, r), n.removeAttribute(i);
    }), n.append(a);
  };
  t.querySelectorAll(":scope > div > div").forEach((n) => {
    n.hasChildNodes() && (!!n.firstElementChild && e.some((i) => n.firstElementChild.tagName === i) ? n.firstElementChild.tagName === "PICTURE" && (n.children.length > 1 || n.textContent.trim()) && o(n) : o(n));
  });
}
function P(t) {
  t.querySelectorAll("a").forEach((e) => {
    if (e.title = e.title || e.textContent, e.href !== e.textContent) {
      const o = e.parentElement, n = e.parentElement.parentElement;
      e.querySelector("img") || (o.childNodes.length === 1 && (o.tagName === "P" || o.tagName === "DIV") && (e.className = "button", o.classList.add("button-container")), o.childNodes.length === 1 && o.tagName === "STRONG" && n.childNodes.length === 1 && n.tagName === "P" && (e.className = "button primary", n.classList.add("button-container")), o.childNodes.length === 1 && o.tagName === "EM" && n.childNodes.length === 1 && n.tagName === "P" && (e.className = "button secondary", n.classList.add("button-container")));
    }
  });
}
function C(t, e = "", o = "") {
  const n = Array.from(t.classList).find((i) => i.startsWith("icon-")).substring(5), a = document.createElement("img");
  a.dataset.iconName = n, a.src = `${window.hlx.codeBasePath}${e}/icons/${n}.svg`, a.alt = o, a.loading = "lazy", a.width = 16, a.height = 16, t.append(a);
}
function M(t, e = "") {
  t.querySelectorAll("span.icon").forEach((n) => {
    C(n, e);
  });
}
function _(t) {
  t.querySelectorAll(":scope > div:not([data-section-status])").forEach((e) => {
    const o = [];
    let n = !1;
    [...e.children].forEach((i) => {
      if (i.tagName === "DIV" && i.className || !n) {
        const r = document.createElement("div");
        o.push(r), n = i.tagName !== "DIV" || !i.className, n && r.classList.add("default-content-wrapper");
      }
      o[o.length - 1].append(i);
    }), o.forEach((i) => e.append(i)), e.classList.add("section"), e.dataset.sectionStatus = "initialized", e.style.display = "none";
    const a = e.querySelector("div.section-metadata");
    if (a) {
      const i = N(a);
      Object.keys(i).forEach((r) => {
        r === "style" ? i.style.split(",").filter((s) => s).map((s) => h(s.trim())).forEach((s) => e.classList.add(s)) : e.dataset[R(r)] = i[r];
      }), a.parentNode.remove();
    }
  });
}
function g(t, e) {
  const o = Array.isArray(e) ? e : [[e]], n = document.createElement("div");
  return n.classList.add(t), o.forEach((a) => {
    const i = document.createElement("div");
    a.forEach((r) => {
      const d = document.createElement("div");
      (r.elems ? r.elems : [r]).forEach((c) => {
        c && (typeof c == "string" ? d.innerHTML += c : d.appendChild(c));
      }), i.appendChild(d);
    }), n.appendChild(i);
  }), n;
}
async function m(t) {
  const e = t.dataset.blockStatus;
  if (e !== "loading" && e !== "loaded") {
    t.dataset.blockStatus = "loading";
    const { blockName: o } = t.dataset;
    try {
      const n = U(`${window.hlx.codeBasePath}/blocks/${o}/${o}.css`), a = new Promise((i) => {
        (async () => {
          try {
            const r = await import(`${window.hlx.codeBasePath}/blocks/${o}/${o}.js`);
            r.default && await r.default(t);
          } catch (r) {
            console.log(`failed to load module for ${o}`, r);
          }
          i();
        })();
      });
      await Promise.all([n, a]);
    } catch (n) {
      console.log(`failed to load block ${o}`, n);
    }
    t.dataset.blockStatus = "loaded";
  }
  return t;
}
function f(t) {
  const e = t.classList[0];
  if (e && !t.dataset.blockStatus) {
    t.classList.add("block"), t.dataset.blockName = e, t.dataset.blockStatus = "initialized", $(t), t.parentElement.classList.add(`${e}-wrapper`);
    const n = t.closest(".section");
    n && n.classList.add(`${e}-container`), P(t);
  }
}
function T(t) {
  t.querySelectorAll("div.section > div > div").forEach(f);
}
async function j(t) {
  const e = g("header", "");
  return t.append(e), f(e), m(e);
}
async function z(t) {
  const e = g("footer", "");
  return t.append(e), f(e), m(e);
}
async function H(t) {
  const e = t.querySelector("img");
  await new Promise((o) => {
    e && !e.complete ? (e.setAttribute("loading", "eager"), e.addEventListener("load", o), e.addEventListener("error", o)) : o();
  });
}
async function b(t, e) {
  const o = t.dataset.sectionStatus;
  if (!o || o === "initialized") {
    t.dataset.sectionStatus = "loading";
    const n = [...t.querySelectorAll("div.block")];
    for (let a = 0; a < n.length; a += 1)
      await m(n[a]);
    e && await e(t), t.dataset.sectionStatus = "loaded", t.style.display = null;
  }
}
async function I(t) {
  const e = [...t.querySelectorAll("div.section")];
  for (let o = 0; o < e.length; o += 1)
    await b(e[o]), o === 0 && l.enhance && l.enhance();
}
x();
export {
  g as buildBlock,
  B as createOptimizedPicture,
  f as decorateBlock,
  T as decorateBlocks,
  P as decorateButtons,
  M as decorateIcons,
  _ as decorateSections,
  v as decorateTemplateAndTheme,
  w as getMetadata,
  m as loadBlock,
  U as loadCSS,
  z as loadFooter,
  j as loadHeader,
  q as loadScript,
  b as loadSection,
  I as loadSections,
  N as readBlockConfig,
  l as sampleRUM,
  L as setup,
  R as toCamelCase,
  h as toClassName,
  H as waitForFirstImage,
  $ as wrapTextNodes
};

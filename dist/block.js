import { i as c, f as l, a as o, b as r } from "./block-utils.js";
class m {
  flat;
  txts = [];
  imgs = [];
  constructor(t) {
    const { flat: e, txts: s, imgs: n } = c(t);
    this.flat = e, this.txts = s, this.imgs = n;
  }
  static flat = l;
  static imgs = o;
  static txts = r;
  static css = async (t) => new Promise((e, s) => {
    const n = `${window.hlx.codeBasePath}/blocks/${t}/${t}.css`;
    if (document.querySelector(`head > link[href="${n}"]`))
      e(null);
    else {
      const i = document.createElement("link");
      i.rel = "stylesheet", i.href = n, i.onload = e, i.onerror = s, document.head.append(i);
    }
  });
  static jointxts = (t, e) => {
    if (t?.length) {
      const s = document.createElement(e);
      return s.innerHTML = t.map((n) => n.innerHTML).join("<br />"), s;
    }
    return "";
  };
}
export {
  m as Block
};

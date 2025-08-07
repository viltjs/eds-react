function h(d = document) {
  function c(t) {
    delete t.dataset.richtextResource, delete t.dataset.richtextProp, delete t.dataset.richtextFilter, delete t.dataset.richtextLabel;
  }
  let a;
  for (; a = d.querySelector("[data-richtext-prop]:not(div)"); ) {
    const {
      richtextResource: t,
      richtextProp: r,
      richtextFilter: s,
      richtextLabel: l
    } = a.dataset;
    c(a);
    const n = [];
    let o = a;
    for (; (o = o.nextElementSibling) && (o.dataset.richtextResource === t && o.dataset.richtextProp === r); )
      c(o), n.push(o);
    let i;
    if (t && r)
      i = document.querySelectorAll(`[data-richtext-id="${t}"][data-richtext-prop="${r}"]`);
    else {
      const e = a.closest("[data-aue-resource]");
      if (e)
        i = e.querySelectorAll(`:scope > :not([data-aue-resource]) [data-richtext-prop="${r}"]`);
      else {
        console.warn(`Editable parent not found or richtext property ${r}`);
        return;
      }
    }
    if (i.length)
      console.warn("Found orphan elements of a richtext, that were not consecutive siblings of the first paragraph", i), i.forEach((e) => c(e));
    else {
      const e = document.createElement("div");
      t && (e.dataset.aueResource = t, e.dataset.aueBehavior = "component"), r && (e.dataset.aueProp = r), l && (e.dataset.aueLabel = l), s && (e.dataset.aueFilter = s), e.dataset.aueType = "richtext", a.replaceWith(e), e.append(a, ...n);
    }
  }
}
export {
  h as decorateRichtext
};

async function o(t, e = `${window.hlx.codeBasePath}/${t}.svg`) {
  try {
    const r = await fetch(e);
    if (!r.ok) throw new Error(`HTTP status ${r.status}`);
    return new DOMParser().parseFromString(await r.text(), "image/svg+xml").querySelector("svg");
  } catch (r) {
    console.error(`Error loading SVG ${e}:`, r);
  }
}
export {
  o as loadSVG
};

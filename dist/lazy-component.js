var q, s, Se, x, re, xe, Ce, Ee, Y, J, K, A = {}, He = [], We = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, O = Array.isArray;
function $(e, _) {
  for (var t in _) e[t] = _[t];
  return e;
}
function ee(e) {
  e && e.parentNode && e.parentNode.removeChild(e);
}
function j(e, _, t) {
  var n, r, l, i = {};
  for (l in _) l == "key" ? n = _[l] : l == "ref" ? r = _[l] : i[l] = _[l];
  if (arguments.length > 2 && (i.children = arguments.length > 3 ? q.call(arguments, 2) : t), typeof e == "function" && e.defaultProps != null) for (l in e.defaultProps) i[l] === void 0 && (i[l] = e.defaultProps[l]);
  return W(e, i, n, r, null);
}
function W(e, _, t, n, r) {
  var l = { type: e, props: _, key: t, ref: n, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: r ?? ++Se, __i: -1, __u: 0 };
  return r == null && s.vnode != null && s.vnode(l), l;
}
function H(e) {
  return e.children;
}
function P(e, _) {
  this.props = e, this.context = _;
}
function N(e, _) {
  if (_ == null) return e.__ ? N(e.__, e.__i + 1) : null;
  for (var t; _ < e.__k.length; _++) if ((t = e.__k[_]) != null && t.__e != null) return t.__e;
  return typeof e.type == "function" ? N(e) : null;
}
function Ne(e) {
  var _, t;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, _ = 0; _ < e.__k.length; _++) if ((t = e.__k[_]) != null && t.__e != null) {
      e.__e = e.__c.base = t.__e;
      break;
    }
    return Ne(e);
  }
}
function oe(e) {
  (!e.__d && (e.__d = !0) && x.push(e) && !I.__r++ || re != s.debounceRendering) && ((re = s.debounceRendering) || xe)(I);
}
function I() {
  for (var e, _, t, n, r, l, i, c = 1; x.length; ) x.length > c && x.sort(Ce), e = x.shift(), c = x.length, e.__d && (t = void 0, r = (n = (_ = e).__v).__e, l = [], i = [], _.__P && ((t = $({}, n)).__v = n.__v + 1, s.vnode && s.vnode(t), _e(_.__P, t, n, _.__n, _.__P.namespaceURI, 32 & n.__u ? [r] : null, l, r ?? N(n), !!(32 & n.__u), i), t.__v = n.__v, t.__.__k[t.__i] = t, Ue(l, t, i), t.__e != r && Ne(t)));
  I.__r = 0;
}
function Te(e, _, t, n, r, l, i, c, a, u, p) {
  var o, v, f, m, b, y, h = n && n.__k || He, d = _.length;
  for (a = ze(t, _, h, a, d), o = 0; o < d; o++) (f = t.__k[o]) != null && (v = f.__i == -1 ? A : h[f.__i] || A, f.__i = o, y = _e(e, f, v, r, l, i, c, a, u, p), m = f.__e, f.ref && v.ref != f.ref && (v.ref && te(v.ref, null, f), p.push(f.ref, f.__c || m, f)), b == null && m != null && (b = m), 4 & f.__u || v.__k === f.__k ? a = Le(f, a, e) : typeof f.type == "function" && y !== void 0 ? a = y : m && (a = m.nextSibling), f.__u &= -7);
  return t.__e = b, a;
}
function ze(e, _, t, n, r) {
  var l, i, c, a, u, p = t.length, o = p, v = 0;
  for (e.__k = new Array(r), l = 0; l < r; l++) (i = _[l]) != null && typeof i != "boolean" && typeof i != "function" ? (a = l + v, (i = e.__k[l] = typeof i == "string" || typeof i == "number" || typeof i == "bigint" || i.constructor == String ? W(null, i, null, null, null) : O(i) ? W(H, { children: i }, null, null, null) : i.constructor == null && i.__b > 0 ? W(i.type, i.props, i.key, i.ref ? i.ref : null, i.__v) : i).__ = e, i.__b = e.__b + 1, c = null, (u = i.__i = Be(i, t, a, o)) != -1 && (o--, (c = t[u]) && (c.__u |= 2)), c == null || c.__v == null ? (u == -1 && (r > p ? v-- : r < p && v++), typeof i.type != "function" && (i.__u |= 4)) : u != a && (u == a - 1 ? v-- : u == a + 1 ? v++ : (u > a ? v-- : v++, i.__u |= 4))) : e.__k[l] = null;
  if (o) for (l = 0; l < p; l++) (c = t[l]) != null && (2 & c.__u) == 0 && (c.__e == n && (n = N(c)), Oe(c, c));
  return n;
}
function Le(e, _, t) {
  var n, r;
  if (typeof e.type == "function") {
    for (n = e.__k, r = 0; n && r < n.length; r++) n[r] && (n[r].__ = e, _ = Le(n[r], _, t));
    return _;
  }
  e.__e != _ && (_ && e.type && !t.contains(_) && (_ = N(e)), t.insertBefore(e.__e, _ || null), _ = e.__e);
  do
    _ = _ && _.nextSibling;
  while (_ != null && _.nodeType == 8);
  return _;
}
function V(e, _) {
  return _ = _ || [], e == null || typeof e == "boolean" || (O(e) ? e.some(function(t) {
    V(t, _);
  }) : _.push(e)), _;
}
function Be(e, _, t, n) {
  var r, l, i, c = e.key, a = e.type, u = _[t], p = u != null && (2 & u.__u) == 0;
  if (u === null && e.key == null || p && c == u.key && a == u.type) return t;
  if (n > (p ? 1 : 0)) {
    for (r = t - 1, l = t + 1; r >= 0 || l < _.length; ) if ((u = _[i = r >= 0 ? r-- : l++]) != null && (2 & u.__u) == 0 && c == u.key && a == u.type) return i;
  }
  return -1;
}
function le(e, _, t) {
  _[0] == "-" ? e.setProperty(_, t ?? "") : e[_] = t == null ? "" : typeof t != "number" || We.test(_) ? t : t + "px";
}
function F(e, _, t, n, r) {
  var l, i;
  e: if (_ == "style") if (typeof t == "string") e.style.cssText = t;
  else {
    if (typeof n == "string" && (e.style.cssText = n = ""), n) for (_ in n) t && _ in t || le(e.style, _, "");
    if (t) for (_ in t) n && t[_] == n[_] || le(e.style, _, t[_]);
  }
  else if (_[0] == "o" && _[1] == "n") l = _ != (_ = _.replace(Ee, "$1")), i = _.toLowerCase(), _ = i in e || _ == "onFocusOut" || _ == "onFocusIn" ? i.slice(2) : _.slice(2), e.l || (e.l = {}), e.l[_ + l] = t, t ? n ? t.u = n.u : (t.u = Y, e.addEventListener(_, l ? K : J, l)) : e.removeEventListener(_, l ? K : J, l);
  else {
    if (r == "http://www.w3.org/2000/svg") _ = _.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
    else if (_ != "width" && _ != "height" && _ != "href" && _ != "list" && _ != "form" && _ != "tabIndex" && _ != "download" && _ != "rowSpan" && _ != "colSpan" && _ != "role" && _ != "popover" && _ in e) try {
      e[_] = t ?? "";
      break e;
    } catch {
    }
    typeof t == "function" || (t == null || t === !1 && _[4] != "-" ? e.removeAttribute(_) : e.setAttribute(_, _ == "popover" && t == 1 ? "" : t));
  }
}
function ie(e) {
  return function(_) {
    if (this.l) {
      var t = this.l[_.type + e];
      if (_.t == null) _.t = Y++;
      else if (_.t < t.u) return;
      return t(s.event ? s.event(_) : _);
    }
  };
}
function _e(e, _, t, n, r, l, i, c, a, u) {
  var p, o, v, f, m, b, y, h, d, T, S, M, L, ne, D, U, G, k = _.type;
  if (_.constructor != null) return null;
  128 & t.__u && (a = !!(32 & t.__u), l = [c = _.__e = t.__e]), (p = s.__b) && p(_);
  e: if (typeof k == "function") try {
    if (h = _.props, d = "prototype" in k && k.prototype.render, T = (p = k.contextType) && n[p.__c], S = p ? T ? T.props.value : p.__ : n, t.__c ? y = (o = _.__c = t.__c).__ = o.__E : (d ? _.__c = o = new k(h, S) : (_.__c = o = new P(h, S), o.constructor = k, o.render = Ie), T && T.sub(o), o.props = h, o.state || (o.state = {}), o.context = S, o.__n = n, v = o.__d = !0, o.__h = [], o._sb = []), d && o.__s == null && (o.__s = o.state), d && k.getDerivedStateFromProps != null && (o.__s == o.state && (o.__s = $({}, o.__s)), $(o.__s, k.getDerivedStateFromProps(h, o.__s))), f = o.props, m = o.state, o.__v = _, v) d && k.getDerivedStateFromProps == null && o.componentWillMount != null && o.componentWillMount(), d && o.componentDidMount != null && o.__h.push(o.componentDidMount);
    else {
      if (d && k.getDerivedStateFromProps == null && h !== f && o.componentWillReceiveProps != null && o.componentWillReceiveProps(h, S), !o.__e && o.shouldComponentUpdate != null && o.shouldComponentUpdate(h, o.__s, S) === !1 || _.__v == t.__v) {
        for (_.__v != t.__v && (o.props = h, o.state = o.__s, o.__d = !1), _.__e = t.__e, _.__k = t.__k, _.__k.some(function(E) {
          E && (E.__ = _);
        }), M = 0; M < o._sb.length; M++) o.__h.push(o._sb[M]);
        o._sb = [], o.__h.length && i.push(o);
        break e;
      }
      o.componentWillUpdate != null && o.componentWillUpdate(h, o.__s, S), d && o.componentDidUpdate != null && o.__h.push(function() {
        o.componentDidUpdate(f, m, b);
      });
    }
    if (o.context = S, o.props = h, o.__P = e, o.__e = !1, L = s.__r, ne = 0, d) {
      for (o.state = o.__s, o.__d = !1, L && L(_), p = o.render(o.props, o.state, o.context), D = 0; D < o._sb.length; D++) o.__h.push(o._sb[D]);
      o._sb = [];
    } else do
      o.__d = !1, L && L(_), p = o.render(o.props, o.state, o.context), o.state = o.__s;
    while (o.__d && ++ne < 25);
    o.state = o.__s, o.getChildContext != null && (n = $($({}, n), o.getChildContext())), d && !v && o.getSnapshotBeforeUpdate != null && (b = o.getSnapshotBeforeUpdate(f, m)), U = p, p != null && p.type === H && p.key == null && (U = Ae(p.props.children)), c = Te(e, O(U) ? U : [U], _, t, n, r, l, i, c, a, u), o.base = _.__e, _.__u &= -161, o.__h.length && i.push(o), y && (o.__E = o.__ = null);
  } catch (E) {
    if (_.__v = null, a || l != null) if (E.then) {
      for (_.__u |= a ? 160 : 128; c && c.nodeType == 8 && c.nextSibling; ) c = c.nextSibling;
      l[l.indexOf(c)] = null, _.__e = c;
    } else {
      for (G = l.length; G--; ) ee(l[G]);
      Q(_);
    }
    else _.__e = t.__e, _.__k = t.__k, E.then || Q(_);
    s.__e(E, _, t);
  }
  else l == null && _.__v == t.__v ? (_.__k = t.__k, _.__e = t.__e) : c = _.__e = je(t.__e, _, t, n, r, l, i, a, u);
  return (p = s.diffed) && p(_), 128 & _.__u ? void 0 : c;
}
function Q(e) {
  e && e.__c && (e.__c.__e = !0), e && e.__k && e.__k.forEach(Q);
}
function Ue(e, _, t) {
  for (var n = 0; n < t.length; n++) te(t[n], t[++n], t[++n]);
  s.__c && s.__c(_, e), e.some(function(r) {
    try {
      e = r.__h, r.__h = [], e.some(function(l) {
        l.call(r);
      });
    } catch (l) {
      s.__e(l, r.__v);
    }
  });
}
function Ae(e) {
  return typeof e != "object" || e == null || e.__b && e.__b > 0 ? e : O(e) ? e.map(Ae) : $({}, e);
}
function je(e, _, t, n, r, l, i, c, a) {
  var u, p, o, v, f, m, b, y = t.props, h = _.props, d = _.type;
  if (d == "svg" ? r = "http://www.w3.org/2000/svg" : d == "math" ? r = "http://www.w3.org/1998/Math/MathML" : r || (r = "http://www.w3.org/1999/xhtml"), l != null) {
    for (u = 0; u < l.length; u++) if ((f = l[u]) && "setAttribute" in f == !!d && (d ? f.localName == d : f.nodeType == 3)) {
      e = f, l[u] = null;
      break;
    }
  }
  if (e == null) {
    if (d == null) return document.createTextNode(h);
    e = document.createElementNS(r, d, h.is && h), c && (s.__m && s.__m(_, l), c = !1), l = null;
  }
  if (d == null) y === h || c && e.data == h || (e.data = h);
  else {
    if (l = l && q.call(e.childNodes), y = t.props || A, !c && l != null) for (y = {}, u = 0; u < e.attributes.length; u++) y[(f = e.attributes[u]).name] = f.value;
    for (u in y) if (f = y[u], u != "children") {
      if (u == "dangerouslySetInnerHTML") o = f;
      else if (!(u in h)) {
        if (u == "value" && "defaultValue" in h || u == "checked" && "defaultChecked" in h) continue;
        F(e, u, null, f, r);
      }
    }
    for (u in h) f = h[u], u == "children" ? v = f : u == "dangerouslySetInnerHTML" ? p = f : u == "value" ? m = f : u == "checked" ? b = f : c && typeof f != "function" || y[u] === f || F(e, u, f, y[u], r);
    if (p) c || o && (p.__html == o.__html || p.__html == e.innerHTML) || (e.innerHTML = p.__html), _.__k = [];
    else if (o && (e.innerHTML = ""), Te(_.type == "template" ? e.content : e, O(v) ? v : [v], _, t, n, d == "foreignObject" ? "http://www.w3.org/1999/xhtml" : r, l, i, l ? l[0] : t.__k && N(t, 0), c, a), l != null) for (u = l.length; u--; ) ee(l[u]);
    c || (u = "value", d == "progress" && m == null ? e.removeAttribute("value") : m != null && (m !== e[u] || d == "progress" && !m || d == "option" && m != y[u]) && F(e, u, m, y[u], r), u = "checked", b != null && b != e[u] && F(e, u, b, y[u], r));
  }
  return e;
}
function te(e, _, t) {
  try {
    if (typeof e == "function") {
      var n = typeof e.__u == "function";
      n && e.__u(), n && _ == null || (e.__u = e(_));
    } else e.current = _;
  } catch (r) {
    s.__e(r, t);
  }
}
function Oe(e, _, t) {
  var n, r;
  if (s.unmount && s.unmount(e), (n = e.ref) && (n.current && n.current != e.__e || te(n, null, _)), (n = e.__c) != null) {
    if (n.componentWillUnmount) try {
      n.componentWillUnmount();
    } catch (l) {
      s.__e(l, _);
    }
    n.base = n.__P = null;
  }
  if (n = e.__k) for (r = 0; r < n.length; r++) n[r] && Oe(n[r], _, t || typeof e.type != "function");
  t || ee(e.__e), e.__c = e.__ = e.__e = void 0;
}
function Ie(e, _, t) {
  return this.constructor(e, t);
}
function p_(e, _, t) {
  var n, r, l, i;
  _ == document && (_ = document.documentElement), s.__ && s.__(e, _), r = (n = !1) ? null : _.__k, l = [], i = [], _e(_, e = _.__k = j(H, null, [e]), r || A, A, _.namespaceURI, r ? null : _.firstChild ? q.call(_.childNodes) : null, l, r ? r.__e : _.firstChild, n, i), Ue(l, e, i);
}
q = He.slice, s = { __e: function(e, _, t, n) {
  for (var r, l, i; _ = _.__; ) if ((r = _.__c) && !r.__) try {
    if ((l = r.constructor) && l.getDerivedStateFromError != null && (r.setState(l.getDerivedStateFromError(e)), i = r.__d), r.componentDidCatch != null && (r.componentDidCatch(e, n || {}), i = r.__d), i) return r.__E = r;
  } catch (c) {
    e = c;
  }
  throw e;
} }, Se = 0, P.prototype.setState = function(e, _) {
  var t;
  t = this.__s != null && this.__s != this.state ? this.__s : this.__s = $({}, this.state), typeof e == "function" && (e = e($({}, t), this.props)), e && $(t, e), e != null && this.__v && (_ && this._sb.push(_), oe(this));
}, P.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), oe(this));
}, P.prototype.render = H, x = [], xe = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, Ce = function(e, _) {
  return e.__v.__b - _.__v.__b;
}, I.__r = 0, Ee = /(PointerCapture)$|Capture$/i, Y = 0, J = ie(!1), K = ie(!0);
var Ve = 0;
function C(e, _, t, n, r, l) {
  _ || (_ = {});
  var i, c, a = _;
  if ("ref" in a) for (c in a = {}, _) c == "ref" ? i = _[c] : a[c] = _[c];
  var u = { type: e, props: a, key: t, ref: i, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: --Ve, __i: -1, __u: 0, __source: r, __self: l };
  if (typeof e == "function" && (i = e.defaultProps)) for (c in i) a[c] === void 0 && (a[c] = i[c]);
  return s.vnode && s.vnode(u), u;
}
function qe(e) {
  return e.children[0].children[0];
}
function h_(e) {
  return [...e.children[0].children];
}
function Ge({ children: e }) {
  return /* @__PURE__ */ C("div", { ref: (_) => {
    _?.appendChild(qe(e));
  } });
}
var w, Z, ue, Me = [], g = s, ce = g.__b, ae = g.__r, fe = g.diffed, se = g.__c, pe = g.unmount, he = g.__;
function Ze() {
  for (var e; e = Me.shift(); ) if (e.__P && e.__H) try {
    e.__H.__h.forEach(z), e.__H.__h.forEach(X), e.__H.__h = [];
  } catch (_) {
    e.__H.__h = [], g.__e(_, e.__v);
  }
}
g.__b = function(e) {
  w = null, ce && ce(e);
}, g.__ = function(e, _) {
  e && _.__k && _.__k.__m && (e.__m = _.__k.__m), he && he(e, _);
}, g.__r = function(e) {
  ae && ae(e);
  var _ = (w = e.__c).__H;
  _ && (Z === w ? (_.__h = [], w.__h = [], _.__.forEach(function(t) {
    t.__N && (t.__ = t.__N), t.u = t.__N = void 0;
  })) : (_.__h.forEach(z), _.__h.forEach(X), _.__h = [])), Z = w;
}, g.diffed = function(e) {
  fe && fe(e);
  var _ = e.__c;
  _ && _.__H && (_.__H.__h.length && (Me.push(_) !== 1 && ue === g.requestAnimationFrame || ((ue = g.requestAnimationFrame) || Je)(Ze)), _.__H.__.forEach(function(t) {
    t.u && (t.__H = t.u), t.u = void 0;
  })), Z = w = null;
}, g.__c = function(e, _) {
  _.some(function(t) {
    try {
      t.__h.forEach(z), t.__h = t.__h.filter(function(n) {
        return !n.__ || X(n);
      });
    } catch (n) {
      _.some(function(r) {
        r.__h && (r.__h = []);
      }), _ = [], g.__e(n, t.__v);
    }
  }), se && se(e, _);
}, g.unmount = function(e) {
  pe && pe(e);
  var _, t = e.__c;
  t && t.__H && (t.__H.__.forEach(function(n) {
    try {
      z(n);
    } catch (r) {
      _ = r;
    }
  }), t.__H = void 0, _ && g.__e(_, t.__v));
};
var de = typeof requestAnimationFrame == "function";
function Je(e) {
  var _, t = function() {
    clearTimeout(n), de && cancelAnimationFrame(_), setTimeout(e);
  }, n = setTimeout(t, 35);
  de && (_ = requestAnimationFrame(t));
}
function z(e) {
  var _ = w, t = e.__c;
  typeof t == "function" && (e.__c = void 0, t()), w = _;
}
function X(e) {
  var _ = w;
  e.__c = e.__(), w = _;
}
function Ke(e, _) {
  for (var t in _) e[t] = _[t];
  return e;
}
function ve(e, _) {
  for (var t in e) if (t !== "__source" && !(t in _)) return !0;
  for (var n in _) if (n !== "__source" && e[n] !== _[n]) return !0;
  return !1;
}
function me(e, _) {
  this.props = e, this.context = _;
}
(me.prototype = new P()).isPureReactComponent = !0, me.prototype.shouldComponentUpdate = function(e, _) {
  return ve(this.props, e) || ve(this.state, _);
};
var ye = s.__b;
s.__b = function(e) {
  e.type && e.type.__f && e.ref && (e.props.ref = e.ref, e.ref = null), ye && ye(e);
};
var Qe = s.__e;
s.__e = function(e, _, t, n) {
  if (e.then) {
    for (var r, l = _; l = l.__; ) if ((r = l.__c) && r.__c) return _.__e == null && (_.__e = t.__e, _.__k = t.__k), r.__c(e, _);
  }
  Qe(e, _, t, n);
};
var ge = s.unmount;
function De(e, _, t) {
  return e && (e.__c && e.__c.__H && (e.__c.__H.__.forEach(function(n) {
    typeof n.__c == "function" && n.__c();
  }), e.__c.__H = null), (e = Ke({}, e)).__c != null && (e.__c.__P === t && (e.__c.__P = _), e.__c.__e = !0, e.__c = null), e.__k = e.__k && e.__k.map(function(n) {
    return De(n, _, t);
  })), e;
}
function Fe(e, _, t) {
  return e && t && (e.__v = null, e.__k = e.__k && e.__k.map(function(n) {
    return Fe(n, _, t);
  }), e.__c && e.__c.__P === _ && (e.__e && t.appendChild(e.__e), e.__c.__e = !0, e.__c.__P = t)), e;
}
function B() {
  this.__u = 0, this.o = null, this.__b = null;
}
function Re(e) {
  var _ = e.__.__c;
  return _ && _.__a && _.__a(e);
}
function Xe(e) {
  var _, t, n;
  function r(l) {
    if (_ || (_ = e()).then(function(i) {
      t = i.default || i;
    }, function(i) {
      n = i;
    }), n) throw n;
    if (!t) throw _;
    return j(t, l);
  }
  return r.displayName = "Lazy", r.__f = !0, r;
}
function R() {
  this.i = null, this.l = null;
}
s.unmount = function(e) {
  var _ = e.__c;
  _ && _.__R && _.__R(), _ && 32 & e.__u && (e.type = null), ge && ge(e);
}, (B.prototype = new P()).__c = function(e, _) {
  var t = _.__c, n = this;
  n.o == null && (n.o = []), n.o.push(t);
  var r = Re(n.__v), l = !1, i = function() {
    l || (l = !0, t.__R = null, r ? r(c) : c());
  };
  t.__R = i;
  var c = function() {
    if (!--n.__u) {
      if (n.state.__a) {
        var a = n.state.__a;
        n.__v.__k[0] = Fe(a, a.__c.__P, a.__c.__O);
      }
      var u;
      for (n.setState({ __a: n.__b = null }); u = n.o.pop(); ) u.forceUpdate();
    }
  };
  n.__u++ || 32 & _.__u || n.setState({ __a: n.__b = n.__v.__k[0] }), e.then(i, i);
}, B.prototype.componentWillUnmount = function() {
  this.o = [];
}, B.prototype.render = function(e, _) {
  if (this.__b) {
    if (this.__v.__k) {
      var t = document.createElement("div"), n = this.__v.__k[0].__c;
      this.__v.__k[0] = De(this.__b, t, n.__O = n.__P);
    }
    this.__b = null;
  }
  var r = _.__a && j(H, null, e.fallback);
  return r && (r.__u &= -33), [j(H, null, _.__a ? null : e.children), r];
};
var be = function(e, _, t) {
  if (++t[1] === t[0] && e.l.delete(_), e.props.revealOrder && (e.props.revealOrder[0] !== "t" || !e.l.size)) for (t = e.i; t; ) {
    for (; t.length > 3; ) t.pop()();
    if (t[1] < t[0]) break;
    e.i = t = t[2];
  }
};
(R.prototype = new P()).__a = function(e) {
  var _ = this, t = Re(_.__v), n = _.l.get(e);
  return n[0]++, function(r) {
    var l = function() {
      _.props.revealOrder ? (n.push(r), be(_, e, n)) : r();
    };
    t ? t(l) : l();
  };
}, R.prototype.render = function(e) {
  this.i = null, this.l = /* @__PURE__ */ new Map();
  var _ = V(e.children);
  e.revealOrder && e.revealOrder[0] === "b" && _.reverse();
  for (var t = _.length; t--; ) this.l.set(_[t], this.i = [1, 0, this.i]);
  return e.children;
}, R.prototype.componentDidUpdate = R.prototype.componentDidMount = function() {
  var e = this;
  this.l.forEach(function(_, t) {
    be(e, t, _);
  });
};
var Ye = typeof Symbol < "u" && Symbol.for && Symbol.for("react.element") || 60103, e_ = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/, __ = /^on(Ani|Tra|Tou|BeforeInp|Compo)/, t_ = /[A-Z0-9]/g, n_ = typeof document < "u", r_ = function(e) {
  return (typeof Symbol < "u" && typeof Symbol() == "symbol" ? /fil|che|rad/ : /fil|che|ra/).test(e);
};
P.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function(e) {
  Object.defineProperty(P.prototype, e, { configurable: !0, get: function() {
    return this["UNSAFE_" + e];
  }, set: function(_) {
    Object.defineProperty(this, e, { configurable: !0, writable: !0, value: _ });
  } });
});
var ke = s.event;
function o_() {
}
function l_() {
  return this.cancelBubble;
}
function i_() {
  return this.defaultPrevented;
}
s.event = function(e) {
  return ke && (e = ke(e)), e.persist = o_, e.isPropagationStopped = l_, e.isDefaultPrevented = i_, e.nativeEvent = e;
};
var u_ = { enumerable: !1, configurable: !0, get: function() {
  return this.class;
} }, we = s.vnode;
s.vnode = function(e) {
  typeof e.type == "string" && function(_) {
    var t = _.props, n = _.type, r = {}, l = n.indexOf("-") === -1;
    for (var i in t) {
      var c = t[i];
      if (!(i === "value" && "defaultValue" in t && c == null || n_ && i === "children" && n === "noscript" || i === "class" || i === "className")) {
        var a = i.toLowerCase();
        i === "defaultValue" && "value" in t && t.value == null ? i = "value" : i === "download" && c === !0 ? c = "" : a === "translate" && c === "no" ? c = !1 : a[0] === "o" && a[1] === "n" ? a === "ondoubleclick" ? i = "ondblclick" : a !== "onchange" || n !== "input" && n !== "textarea" || r_(t.type) ? a === "onfocus" ? i = "onfocusin" : a === "onblur" ? i = "onfocusout" : __.test(i) && (i = a) : a = i = "oninput" : l && e_.test(i) ? i = i.replace(t_, "-$&").toLowerCase() : c === null && (c = void 0), a === "oninput" && r[i = a] && (i = "oninputCapture"), r[i] = c;
      }
    }
    n == "select" && r.multiple && Array.isArray(r.value) && (r.value = V(t.children).forEach(function(u) {
      u.props.selected = r.value.indexOf(u.props.value) != -1;
    })), n == "select" && r.defaultValue != null && (r.value = V(t.children).forEach(function(u) {
      u.props.selected = r.multiple ? r.defaultValue.indexOf(u.props.value) != -1 : r.defaultValue == u.props.value;
    })), t.class && !t.className ? (r.class = t.class, Object.defineProperty(r, "className", u_)) : (t.className && !t.class || t.class && t.className) && (r.class = r.className = t.className), _.props = r;
  }(e), e.$$typeof = Ye, we && we(e);
};
var $e = s.__r;
s.__r = function(e) {
  $e && $e(e), e.__c;
};
var Pe = s.diffed;
s.diffed = function(e) {
  Pe && Pe(e);
  var _ = e.props, t = e.__e;
  t != null && e.type === "textarea" && "value" in _ && _.value !== t.value && (t.value = _.value == null ? "" : _.value);
};
const c_ = (e) => new Promise((_) => setTimeout(_, e)), a_ = Xe(() => c_(3e3).then(() => Promise.resolve().then(() => s_)));
function d_({ block: e }) {
  return /* @__PURE__ */ C(B, { fallback: /* @__PURE__ */ C("p", { children: "Loading Lazy Component..." }), children: /* @__PURE__ */ C(a_, { block: e }) });
}
function f_({ block: e }) {
  return /* @__PURE__ */ C("div", { className: "bg-green-500 p-2", children: [
    /* @__PURE__ */ C(Ge, { children: e }),
    /* @__PURE__ */ C("p", { children: "background color is processed from tailwind" })
  ] });
}
const s_ = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: f_
}, Symbol.toStringTag, { value: "Module" }));
export {
  Ge as B,
  p_ as G,
  a_ as L,
  d_ as a,
  H as k,
  h_ as m,
  C as u
};

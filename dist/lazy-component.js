var O = { exports: {} }, m = {};
var z;
function rt() {
  if (z) return m;
  z = 1;
  var p = Symbol.for("react.transitional.element"), a = Symbol.for("react.fragment");
  function C(j, l, _) {
    var d = null;
    if (_ !== void 0 && (d = "" + _), l.key !== void 0 && (d = "" + l.key), "key" in l) {
      _ = {};
      for (var R in l)
        R !== "key" && (_[R] = l[R]);
    } else _ = l;
    return l = _.ref, {
      $$typeof: p,
      type: j,
      key: d,
      ref: l !== void 0 ? l : null,
      props: _
    };
  }
  return m.Fragment = a, m.jsx = C, m.jsxs = C, m;
}
var D;
function nt() {
  return D || (D = 1, O.exports = rt()), O.exports;
}
var T = nt(), g = { exports: {} }, o = {};
var J;
function ot() {
  if (J) return o;
  J = 1;
  var p = Symbol.for("react.transitional.element"), a = Symbol.for("react.portal"), C = Symbol.for("react.fragment"), j = Symbol.for("react.strict_mode"), l = Symbol.for("react.profiler"), _ = Symbol.for("react.consumer"), d = Symbol.for("react.context"), R = Symbol.for("react.forward_ref"), W = Symbol.for("react.suspense"), Q = Symbol.for("react.memo"), $ = Symbol.for("react.lazy"), H = Symbol.iterator;
  function X(t) {
    return t === null || typeof t != "object" ? null : (t = H && t[H] || t["@@iterator"], typeof t == "function" ? t : null);
  }
  var L = {
    isMounted: function() {
      return !1;
    },
    enqueueForceUpdate: function() {
    },
    enqueueReplaceState: function() {
    },
    enqueueSetState: function() {
    }
  }, k = Object.assign, M = {};
  function v(t, e, r) {
    this.props = t, this.context = e, this.refs = M, this.updater = r || L;
  }
  v.prototype.isReactComponent = {}, v.prototype.setState = function(t, e) {
    if (typeof t != "object" && typeof t != "function" && t != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, t, e, "setState");
  }, v.prototype.forceUpdate = function(t) {
    this.updater.enqueueForceUpdate(this, t, "forceUpdate");
  };
  function N() {
  }
  N.prototype = v.prototype;
  function x(t, e, r) {
    this.props = t, this.context = e, this.refs = M, this.updater = r || L;
  }
  var S = x.prototype = new N();
  S.constructor = x, k(S, v.prototype), S.isPureReactComponent = !0;
  var Y = Array.isArray, i = { H: null, A: null, T: null, S: null, V: null }, q = Object.prototype.hasOwnProperty;
  function w(t, e, r, n, s, f) {
    return r = f.ref, {
      $$typeof: p,
      type: t,
      key: e,
      ref: r !== void 0 ? r : null,
      props: f
    };
  }
  function Z(t, e) {
    return w(
      t.type,
      e,
      void 0,
      void 0,
      void 0,
      t.props
    );
  }
  function A(t) {
    return typeof t == "object" && t !== null && t.$$typeof === p;
  }
  function K(t) {
    var e = { "=": "=0", ":": "=2" };
    return "$" + t.replace(/[=:]/g, function(r) {
      return e[r];
    });
  }
  var I = /\/+/g;
  function P(t, e) {
    return typeof t == "object" && t !== null && t.key != null ? K("" + t.key) : e.toString(36);
  }
  function U() {
  }
  function V(t) {
    switch (t.status) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw t.reason;
      default:
        switch (typeof t.status == "string" ? t.then(U, U) : (t.status = "pending", t.then(
          function(e) {
            t.status === "pending" && (t.status = "fulfilled", t.value = e);
          },
          function(e) {
            t.status === "pending" && (t.status = "rejected", t.reason = e);
          }
        )), t.status) {
          case "fulfilled":
            return t.value;
          case "rejected":
            throw t.reason;
        }
    }
    throw t;
  }
  function y(t, e, r, n, s) {
    var f = typeof t;
    (f === "undefined" || f === "boolean") && (t = null);
    var u = !1;
    if (t === null) u = !0;
    else
      switch (f) {
        case "bigint":
        case "string":
        case "number":
          u = !0;
          break;
        case "object":
          switch (t.$$typeof) {
            case p:
            case a:
              u = !0;
              break;
            case $:
              return u = t._init, y(
                u(t._payload),
                e,
                r,
                n,
                s
              );
          }
      }
    if (u)
      return s = s(t), u = n === "" ? "." + P(t, 0) : n, Y(s) ? (r = "", u != null && (r = u.replace(I, "$&/") + "/"), y(s, e, r, "", function(et) {
        return et;
      })) : s != null && (A(s) && (s = Z(
        s,
        r + (s.key == null || t && t.key === s.key ? "" : ("" + s.key).replace(
          I,
          "$&/"
        ) + "/") + u
      )), e.push(s)), 1;
    u = 0;
    var E = n === "" ? "." : n + ":";
    if (Y(t))
      for (var c = 0; c < t.length; c++)
        n = t[c], f = E + P(n, c), u += y(
          n,
          e,
          r,
          f,
          s
        );
    else if (c = X(t), typeof c == "function")
      for (t = c.call(t), c = 0; !(n = t.next()).done; )
        n = n.value, f = E + P(n, c++), u += y(
          n,
          e,
          r,
          f,
          s
        );
    else if (f === "object") {
      if (typeof t.then == "function")
        return y(
          V(t),
          e,
          r,
          n,
          s
        );
      throw e = String(t), Error(
        "Objects are not valid as a React child (found: " + (e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return u;
  }
  function h(t, e, r) {
    if (t == null) return t;
    var n = [], s = 0;
    return y(t, n, "", "", function(f) {
      return e.call(r, f, s++);
    }), n;
  }
  function F(t) {
    if (t._status === -1) {
      var e = t._result;
      e = e(), e.then(
        function(r) {
          (t._status === 0 || t._status === -1) && (t._status = 1, t._result = r);
        },
        function(r) {
          (t._status === 0 || t._status === -1) && (t._status = 2, t._result = r);
        }
      ), t._status === -1 && (t._status = 0, t._result = e);
    }
    if (t._status === 1) return t._result.default;
    throw t._result;
  }
  var b = typeof reportError == "function" ? reportError : function(t) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var e = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof t == "object" && t !== null && typeof t.message == "string" ? String(t.message) : String(t),
        error: t
      });
      if (!window.dispatchEvent(e)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", t);
      return;
    }
    console.error(t);
  };
  function tt() {
  }
  return o.Children = {
    map: h,
    forEach: function(t, e, r) {
      h(
        t,
        function() {
          e.apply(this, arguments);
        },
        r
      );
    },
    count: function(t) {
      var e = 0;
      return h(t, function() {
        e++;
      }), e;
    },
    toArray: function(t) {
      return h(t, function(e) {
        return e;
      }) || [];
    },
    only: function(t) {
      if (!A(t))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return t;
    }
  }, o.Component = v, o.Fragment = C, o.Profiler = l, o.PureComponent = x, o.StrictMode = j, o.Suspense = W, o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = i, o.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(t) {
      return i.H.useMemoCache(t);
    }
  }, o.cache = function(t) {
    return function() {
      return t.apply(null, arguments);
    };
  }, o.cloneElement = function(t, e, r) {
    if (t == null)
      throw Error(
        "The argument must be a React element, but you passed " + t + "."
      );
    var n = k({}, t.props), s = t.key, f = void 0;
    if (e != null)
      for (u in e.ref !== void 0 && (f = void 0), e.key !== void 0 && (s = "" + e.key), e)
        !q.call(e, u) || u === "key" || u === "__self" || u === "__source" || u === "ref" && e.ref === void 0 || (n[u] = e[u]);
    var u = arguments.length - 2;
    if (u === 1) n.children = r;
    else if (1 < u) {
      for (var E = Array(u), c = 0; c < u; c++)
        E[c] = arguments[c + 2];
      n.children = E;
    }
    return w(t.type, s, void 0, void 0, f, n);
  }, o.createContext = function(t) {
    return t = {
      $$typeof: d,
      _currentValue: t,
      _currentValue2: t,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, t.Provider = t, t.Consumer = {
      $$typeof: _,
      _context: t
    }, t;
  }, o.createElement = function(t, e, r) {
    var n, s = {}, f = null;
    if (e != null)
      for (n in e.key !== void 0 && (f = "" + e.key), e)
        q.call(e, n) && n !== "key" && n !== "__self" && n !== "__source" && (s[n] = e[n]);
    var u = arguments.length - 2;
    if (u === 1) s.children = r;
    else if (1 < u) {
      for (var E = Array(u), c = 0; c < u; c++)
        E[c] = arguments[c + 2];
      s.children = E;
    }
    if (t && t.defaultProps)
      for (n in u = t.defaultProps, u)
        s[n] === void 0 && (s[n] = u[n]);
    return w(t, f, void 0, void 0, null, s);
  }, o.createRef = function() {
    return { current: null };
  }, o.forwardRef = function(t) {
    return { $$typeof: R, render: t };
  }, o.isValidElement = A, o.lazy = function(t) {
    return {
      $$typeof: $,
      _payload: { _status: -1, _result: t },
      _init: F
    };
  }, o.memo = function(t, e) {
    return {
      $$typeof: Q,
      type: t,
      compare: e === void 0 ? null : e
    };
  }, o.startTransition = function(t) {
    var e = i.T, r = {};
    i.T = r;
    try {
      var n = t(), s = i.S;
      s !== null && s(r, n), typeof n == "object" && n !== null && typeof n.then == "function" && n.then(tt, b);
    } catch (f) {
      b(f);
    } finally {
      i.T = e;
    }
  }, o.unstable_useCacheRefresh = function() {
    return i.H.useCacheRefresh();
  }, o.use = function(t) {
    return i.H.use(t);
  }, o.useActionState = function(t, e, r) {
    return i.H.useActionState(t, e, r);
  }, o.useCallback = function(t, e) {
    return i.H.useCallback(t, e);
  }, o.useContext = function(t) {
    return i.H.useContext(t);
  }, o.useDebugValue = function() {
  }, o.useDeferredValue = function(t, e) {
    return i.H.useDeferredValue(t, e);
  }, o.useEffect = function(t, e, r) {
    var n = i.H;
    if (typeof r == "function")
      throw Error(
        "useEffect CRUD overload is not enabled in this build of React."
      );
    return n.useEffect(t, e);
  }, o.useId = function() {
    return i.H.useId();
  }, o.useImperativeHandle = function(t, e, r) {
    return i.H.useImperativeHandle(t, e, r);
  }, o.useInsertionEffect = function(t, e) {
    return i.H.useInsertionEffect(t, e);
  }, o.useLayoutEffect = function(t, e) {
    return i.H.useLayoutEffect(t, e);
  }, o.useMemo = function(t, e) {
    return i.H.useMemo(t, e);
  }, o.useOptimistic = function(t, e) {
    return i.H.useOptimistic(t, e);
  }, o.useReducer = function(t, e, r) {
    return i.H.useReducer(t, e, r);
  }, o.useRef = function(t) {
    return i.H.useRef(t);
  }, o.useState = function(t) {
    return i.H.useState(t);
  }, o.useSyncExternalStore = function(t, e, r) {
    return i.H.useSyncExternalStore(
      t,
      e,
      r
    );
  }, o.useTransition = function() {
    return i.H.useTransition();
  }, o.version = "19.1.1", o;
}
var B;
function ut() {
  return B || (B = 1, g.exports = ot()), g.exports;
}
function st({ children: p }) {
  return p ? /* @__PURE__ */ T.jsx("div", { ref: (a) => {
    a?.appendChild(p);
  } }) : null;
}
var G = ut();
const it = (p) => new Promise((a) => setTimeout(a, p)), ft = G.lazy(() => it(3e3).then(() => Promise.resolve().then(() => pt)));
function at({ block: p }) {
  return /* @__PURE__ */ T.jsx(G.Suspense, { fallback: /* @__PURE__ */ T.jsx("p", { children: "Loading Lazy Component..." }), children: /* @__PURE__ */ T.jsx(ft, { block: p }) });
}
function ct({ block: p }) {
  const [a] = p.children;
  return a.classList.add("bg-green-500", "p-2"), a.append("background color is processed from tailwind"), /* @__PURE__ */ T.jsx(st, { children: a });
}
const pt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ct
}, Symbol.toStringTag, { value: "Module" }));
export {
  st as B,
  ft as L,
  at as a,
  T as j,
  ut as r
};

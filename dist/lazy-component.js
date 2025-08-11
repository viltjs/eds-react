var O = { exports: {} }, m = {};
var b;
function nt() {
  if (b) return m;
  b = 1;
  var a = Symbol.for("react.transitional.element"), y = Symbol.for("react.fragment");
  function T(j, p, l) {
    var R = null;
    if (l !== void 0 && (R = "" + l), p.key !== void 0 && (R = "" + p.key), "key" in p) {
      l = {};
      for (var d in p)
        d !== "key" && (l[d] = p[d]);
    } else l = p;
    return p = l.ref, {
      $$typeof: a,
      type: j,
      key: R,
      ref: p !== void 0 ? p : null,
      props: l
    };
  }
  return m.Fragment = y, m.jsx = T, m.jsxs = T, m;
}
var D;
function rt() {
  return D || (D = 1, O.exports = nt()), O.exports;
}
var h = rt(), $ = { exports: {} }, o = {};
var J;
function ot() {
  if (J) return o;
  J = 1;
  var a = Symbol.for("react.transitional.element"), y = Symbol.for("react.portal"), T = Symbol.for("react.fragment"), j = Symbol.for("react.strict_mode"), p = Symbol.for("react.profiler"), l = Symbol.for("react.consumer"), R = Symbol.for("react.context"), d = Symbol.for("react.forward_ref"), W = Symbol.for("react.suspense"), Q = Symbol.for("react.memo"), H = Symbol.for("react.lazy"), g = Symbol.iterator;
  function X(t) {
    return t === null || typeof t != "object" ? null : (t = g && t[g] || t["@@iterator"], typeof t == "function" ? t : null);
  }
  var k = {
    isMounted: function() {
      return !1;
    },
    enqueueForceUpdate: function() {
    },
    enqueueReplaceState: function() {
    },
    enqueueSetState: function() {
    }
  }, L = Object.assign, N = {};
  function E(t, e, n) {
    this.props = t, this.context = e, this.refs = N, this.updater = n || k;
  }
  E.prototype.isReactComponent = {}, E.prototype.setState = function(t, e) {
    if (typeof t != "object" && typeof t != "function" && t != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, t, e, "setState");
  }, E.prototype.forceUpdate = function(t) {
    this.updater.enqueueForceUpdate(this, t, "forceUpdate");
  };
  function M() {
  }
  M.prototype = E.prototype;
  function S(t, e, n) {
    this.props = t, this.context = e, this.refs = N, this.updater = n || k;
  }
  var w = S.prototype = new M();
  w.constructor = S, L(w, E.prototype), w.isPureReactComponent = !0;
  var Y = Array.isArray, i = { H: null, A: null, T: null, S: null, V: null }, q = Object.prototype.hasOwnProperty;
  function x(t, e, n, r, s, f) {
    return n = f.ref, {
      $$typeof: a,
      type: t,
      key: e,
      ref: n !== void 0 ? n : null,
      props: f
    };
  }
  function Z(t, e) {
    return x(
      t.type,
      e,
      void 0,
      void 0,
      void 0,
      t.props
    );
  }
  function A(t) {
    return typeof t == "object" && t !== null && t.$$typeof === a;
  }
  function K(t) {
    var e = { "=": "=0", ":": "=2" };
    return "$" + t.replace(/[=:]/g, function(n) {
      return e[n];
    });
  }
  var z = /\/+/g;
  function P(t, e) {
    return typeof t == "object" && t !== null && t.key != null ? K("" + t.key) : e.toString(36);
  }
  function I() {
  }
  function V(t) {
    switch (t.status) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw t.reason;
      default:
        switch (typeof t.status == "string" ? t.then(I, I) : (t.status = "pending", t.then(
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
  function v(t, e, n, r, s) {
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
            case a:
            case y:
              u = !0;
              break;
            case H:
              return u = t._init, v(
                u(t._payload),
                e,
                n,
                r,
                s
              );
          }
      }
    if (u)
      return s = s(t), u = r === "" ? "." + P(t, 0) : r, Y(s) ? (n = "", u != null && (n = u.replace(z, "$&/") + "/"), v(s, e, n, "", function(et) {
        return et;
      })) : s != null && (A(s) && (s = Z(
        s,
        n + (s.key == null || t && t.key === s.key ? "" : ("" + s.key).replace(
          z,
          "$&/"
        ) + "/") + u
      )), e.push(s)), 1;
    u = 0;
    var _ = r === "" ? "." : r + ":";
    if (Y(t))
      for (var c = 0; c < t.length; c++)
        r = t[c], f = _ + P(r, c), u += v(
          r,
          e,
          n,
          f,
          s
        );
    else if (c = X(t), typeof c == "function")
      for (t = c.call(t), c = 0; !(r = t.next()).done; )
        r = r.value, f = _ + P(r, c++), u += v(
          r,
          e,
          n,
          f,
          s
        );
    else if (f === "object") {
      if (typeof t.then == "function")
        return v(
          V(t),
          e,
          n,
          r,
          s
        );
      throw e = String(t), Error(
        "Objects are not valid as a React child (found: " + (e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return u;
  }
  function C(t, e, n) {
    if (t == null) return t;
    var r = [], s = 0;
    return v(t, r, "", "", function(f) {
      return e.call(n, f, s++);
    }), r;
  }
  function F(t) {
    if (t._status === -1) {
      var e = t._result;
      e = e(), e.then(
        function(n) {
          (t._status === 0 || t._status === -1) && (t._status = 1, t._result = n);
        },
        function(n) {
          (t._status === 0 || t._status === -1) && (t._status = 2, t._result = n);
        }
      ), t._status === -1 && (t._status = 0, t._result = e);
    }
    if (t._status === 1) return t._result.default;
    throw t._result;
  }
  var U = typeof reportError == "function" ? reportError : function(t) {
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
    map: C,
    forEach: function(t, e, n) {
      C(
        t,
        function() {
          e.apply(this, arguments);
        },
        n
      );
    },
    count: function(t) {
      var e = 0;
      return C(t, function() {
        e++;
      }), e;
    },
    toArray: function(t) {
      return C(t, function(e) {
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
  }, o.Component = E, o.Fragment = T, o.Profiler = p, o.PureComponent = S, o.StrictMode = j, o.Suspense = W, o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = i, o.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(t) {
      return i.H.useMemoCache(t);
    }
  }, o.cache = function(t) {
    return function() {
      return t.apply(null, arguments);
    };
  }, o.cloneElement = function(t, e, n) {
    if (t == null)
      throw Error(
        "The argument must be a React element, but you passed " + t + "."
      );
    var r = L({}, t.props), s = t.key, f = void 0;
    if (e != null)
      for (u in e.ref !== void 0 && (f = void 0), e.key !== void 0 && (s = "" + e.key), e)
        !q.call(e, u) || u === "key" || u === "__self" || u === "__source" || u === "ref" && e.ref === void 0 || (r[u] = e[u]);
    var u = arguments.length - 2;
    if (u === 1) r.children = n;
    else if (1 < u) {
      for (var _ = Array(u), c = 0; c < u; c++)
        _[c] = arguments[c + 2];
      r.children = _;
    }
    return x(t.type, s, void 0, void 0, f, r);
  }, o.createContext = function(t) {
    return t = {
      $$typeof: R,
      _currentValue: t,
      _currentValue2: t,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, t.Provider = t, t.Consumer = {
      $$typeof: l,
      _context: t
    }, t;
  }, o.createElement = function(t, e, n) {
    var r, s = {}, f = null;
    if (e != null)
      for (r in e.key !== void 0 && (f = "" + e.key), e)
        q.call(e, r) && r !== "key" && r !== "__self" && r !== "__source" && (s[r] = e[r]);
    var u = arguments.length - 2;
    if (u === 1) s.children = n;
    else if (1 < u) {
      for (var _ = Array(u), c = 0; c < u; c++)
        _[c] = arguments[c + 2];
      s.children = _;
    }
    if (t && t.defaultProps)
      for (r in u = t.defaultProps, u)
        s[r] === void 0 && (s[r] = u[r]);
    return x(t, f, void 0, void 0, null, s);
  }, o.createRef = function() {
    return { current: null };
  }, o.forwardRef = function(t) {
    return { $$typeof: d, render: t };
  }, o.isValidElement = A, o.lazy = function(t) {
    return {
      $$typeof: H,
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
    var e = i.T, n = {};
    i.T = n;
    try {
      var r = t(), s = i.S;
      s !== null && s(n, r), typeof r == "object" && r !== null && typeof r.then == "function" && r.then(tt, U);
    } catch (f) {
      U(f);
    } finally {
      i.T = e;
    }
  }, o.unstable_useCacheRefresh = function() {
    return i.H.useCacheRefresh();
  }, o.use = function(t) {
    return i.H.use(t);
  }, o.useActionState = function(t, e, n) {
    return i.H.useActionState(t, e, n);
  }, o.useCallback = function(t, e) {
    return i.H.useCallback(t, e);
  }, o.useContext = function(t) {
    return i.H.useContext(t);
  }, o.useDebugValue = function() {
  }, o.useDeferredValue = function(t, e) {
    return i.H.useDeferredValue(t, e);
  }, o.useEffect = function(t, e, n) {
    var r = i.H;
    if (typeof n == "function")
      throw Error(
        "useEffect CRUD overload is not enabled in this build of React."
      );
    return r.useEffect(t, e);
  }, o.useId = function() {
    return i.H.useId();
  }, o.useImperativeHandle = function(t, e, n) {
    return i.H.useImperativeHandle(t, e, n);
  }, o.useInsertionEffect = function(t, e) {
    return i.H.useInsertionEffect(t, e);
  }, o.useLayoutEffect = function(t, e) {
    return i.H.useLayoutEffect(t, e);
  }, o.useMemo = function(t, e) {
    return i.H.useMemo(t, e);
  }, o.useOptimistic = function(t, e) {
    return i.H.useOptimistic(t, e);
  }, o.useReducer = function(t, e, n) {
    return i.H.useReducer(t, e, n);
  }, o.useRef = function(t) {
    return i.H.useRef(t);
  }, o.useState = function(t) {
    return i.H.useState(t);
  }, o.useSyncExternalStore = function(t, e, n) {
    return i.H.useSyncExternalStore(
      t,
      e,
      n
    );
  }, o.useTransition = function() {
    return i.H.useTransition();
  }, o.version = "19.1.1", o;
}
var G;
function ut() {
  return G || (G = 1, $.exports = ot()), $.exports;
}
var B = ut();
const st = (a) => new Promise((y) => setTimeout(y, a)), it = B.lazy(() => st(3e3).then(() => Promise.resolve().then(() => ct)));
function pt({ block: a }) {
  return /* @__PURE__ */ h.jsx(B.Suspense, { fallback: /* @__PURE__ */ h.jsx("p", { className: "lazy-component", children: "Loading Lazy Component..." }), children: /* @__PURE__ */ h.jsx(it, { block: a }) });
}
function ft({ block: a }) {
  return /* @__PURE__ */ h.jsx("p", { className: "lazy-component", children: "This component's code took a moment to download." });
}
const ct = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ft
}, Symbol.toStringTag, { value: "Module" }));
export {
  it as L,
  pt as a,
  h as j,
  ut as r
};

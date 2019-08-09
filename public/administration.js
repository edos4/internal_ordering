! function(t, e) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = t.document ? e(t, !0) : function(t) {
        if (!t.document) throw new Error("jQuery requires a window with a document");
        return e(t)
    } : e(t)
}("undefined" != typeof window ? window : this, function(t, e) {
    function i(t) {
        var e = !!t && "length" in t && t.length,
            i = ft.type(t);
        return "function" === i || ft.isWindow(t) ? !1 : "array" === i || 0 === e || "number" == typeof e && e > 0 && e - 1 in t
    }

    function n(t, e, i) {
        if (ft.isFunction(e)) return ft.grep(t, function(t, n) {
            return !!e.call(t, n, t) !== i
        });
        if (e.nodeType) return ft.grep(t, function(t) {
            return t === e !== i
        });
        if ("string" == typeof e) {
            if (wt.test(e)) return ft.filter(e, t, i);
            e = ft.filter(e, t)
        }
        return ft.grep(t, function(t) {
            return ft.inArray(t, e) > -1 !== i
        })
    }

    function s(t, e) {
        do t = t[e]; while (t && 1 !== t.nodeType);
        return t
    }

    function o(t) {
        var e = {};
        return ft.each(t.match(Dt) || [], function(t, i) {
            e[i] = !0
        }), e
    }

    function a() {
        nt.addEventListener ? (nt.removeEventListener("DOMContentLoaded", r), t.removeEventListener("load", r)) : (nt.detachEvent("onreadystatechange", r), t.detachEvent("onload", r))
    }

    function r() {
        (nt.addEventListener || "load" === t.event.type || "complete" === nt.readyState) && (a(), ft.ready())
    }

    function l(t, e, i) {
        if (void 0 === i && 1 === t.nodeType) {
            var n = "data-" + e.replace(Ot, "-$1").toLowerCase();
            if (i = t.getAttribute(n), "string" == typeof i) {
                try {
                    i = "true" === i ? !0 : "false" === i ? !1 : "null" === i ? null : +i + "" === i ? +i : Lt.test(i) ? ft.parseJSON(i) : i
                } catch (s) {}
                ft.data(t, e, i)
            } else i = void 0
        }
        return i
    }

    function c(t) {
        var e;
        for (e in t)
            if (("data" !== e || !ft.isEmptyObject(t[e])) && "toJSON" !== e) return !1;
        return !0
    }

    function h(t, e, i, n) {
        if (Pt(t)) {
            var s, o, a = ft.expando,
                r = t.nodeType,
                l = r ? ft.cache : t,
                c = r ? t[a] : t[a] && a;
            if (c && l[c] && (n || l[c].data) || void 0 !== i || "string" != typeof e) return c || (c = r ? t[a] = it.pop() || ft.guid++ : a), l[c] || (l[c] = r ? {} : {
                toJSON: ft.noop
            }), "object" != typeof e && "function" != typeof e || (n ? l[c] = ft.extend(l[c], e) : l[c].data = ft.extend(l[c].data, e)), o = l[c], n || (o.data || (o.data = {}), o = o.data), void 0 !== i && (o[ft.camelCase(e)] = i), "string" == typeof e ? (s = o[e], null == s && (s = o[ft.camelCase(e)])) : s = o, s
        }
    }

    function d(t, e, i) {
        if (Pt(t)) {
            var n, s, o = t.nodeType,
                a = o ? ft.cache : t,
                r = o ? t[ft.expando] : ft.expando;
            if (a[r]) {
                if (e && (n = i ? a[r] : a[r].data)) {
                    ft.isArray(e) ? e = e.concat(ft.map(e, ft.camelCase)) : e in n ? e = [e] : (e = ft.camelCase(e), e = e in n ? [e] : e.split(" ")), s = e.length;
                    for (; s--;) delete n[e[s]];
                    if (i ? !c(n) : !ft.isEmptyObject(n)) return
                }(i || (delete a[r].data, c(a[r]))) && (o ? ft.cleanData([t], !0) : dt.deleteExpando || a != a.window ? delete a[r] : a[r] = void 0)
            }
        }
    }

    function u(t, e, i, n) {
        var s, o = 1,
            a = 20,
            r = n ? function() {
                return n.cur()
            } : function() {
                return ft.css(t, e, "")
            },
            l = r(),
            c = i && i[3] || (ft.cssNumber[e] ? "" : "px"),
            h = (ft.cssNumber[e] || "px" !== c && +l) && Nt.exec(ft.css(t, e));
        if (h && h[3] !== c) {
            c = c || h[3], i = i || [], h = +l || 1;
            do o = o || ".5", h /= o, ft.style(t, e, h + c); while (o !== (o = r() / l) && 1 !== o && --a)
        }
        return i && (h = +h || +l || 0, s = i[1] ? h + (i[1] + 1) * i[2] : +i[2], n && (n.unit = c, n.start = h, n.end = s)), s
    }

    function f(t) {
        var e = qt.split("|"),
            i = t.createDocumentFragment();
        if (i.createElement)
            for (; e.length;) i.createElement(e.pop());
        return i
    }

    function p(t, e) {
        var i, n, s = 0,
            o = "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e || "*") : "undefined" != typeof t.querySelectorAll ? t.querySelectorAll(e || "*") : void 0;
        if (!o)
            for (o = [], i = t.childNodes || t; null != (n = i[s]); s++) !e || ft.nodeName(n, e) ? o.push(n) : ft.merge(o, p(n, e));
        return void 0 === e || e && ft.nodeName(t, e) ? ft.merge([t], o) : o
    }

    function m(t, e) {
        for (var i, n = 0; null != (i = t[n]); n++) ft._data(i, "globalEval", !e || ft._data(e[n], "globalEval"))
    }

    function g(t) {
        It.test(t.type) && (t.defaultChecked = t.checked)
    }

    function v(t, e, i, n, s) {
        for (var o, a, r, l, c, h, d, u = t.length, v = f(e), y = [], b = 0; u > b; b++)
            if (a = t[b], a || 0 === a)
                if ("object" === ft.type(a)) ft.merge(y, a.nodeType ? [a] : a);
                else if (Yt.test(a)) {
            for (l = l || v.appendChild(e.createElement("div")), c = (Ht.exec(a) || ["", ""])[1].toLowerCase(), d = Ut[c] || Ut._default, l.innerHTML = d[1] + ft.htmlPrefilter(a) + d[2], o = d[0]; o--;) l = l.lastChild;
            if (!dt.leadingWhitespace && zt.test(a) && y.push(e.createTextNode(zt.exec(a)[0])), !dt.tbody)
                for (a = "table" !== c || Vt.test(a) ? "<table>" !== d[1] || Vt.test(a) ? 0 : l : l.firstChild, o = a && a.childNodes.length; o--;) ft.nodeName(h = a.childNodes[o], "tbody") && !h.childNodes.length && a.removeChild(h);
            for (ft.merge(y, l.childNodes), l.textContent = ""; l.firstChild;) l.removeChild(l.firstChild);
            l = v.lastChild
        } else y.push(e.createTextNode(a));
        for (l && v.removeChild(l), dt.appendChecked || ft.grep(p(y, "input"), g), b = 0; a = y[b++];)
            if (n && ft.inArray(a, n) > -1) s && s.push(a);
            else if (r = ft.contains(a.ownerDocument, a), l = p(v.appendChild(a), "script"), r && m(l), i)
            for (o = 0; a = l[o++];) Bt.test(a.type || "") && i.push(a);
        return l = null, v
    }

    function y() {
        return !0
    }

    function b() {
        return !1
    }

    function x() {
        try {
            return nt.activeElement
        } catch (t) {}
    }

    function k(t, e, i, n, s, o) {
        var a, r;
        if ("object" == typeof e) {
            "string" != typeof i && (n = n || i, i = void 0);
            for (r in e) k(t, r, i, n, e[r], o);
            return t
        }
        if (null == n && null == s ? (s = i, n = i = void 0) : null == s && ("string" == typeof i ? (s = n, n = void 0) : (s = n, n = i, i = void 0)), s === !1) s = b;
        else if (!s) return t;
        return 1 === o && (a = s, s = function(t) {
            return ft().off(t), a.apply(this, arguments)
        }, s.guid = a.guid || (a.guid = ft.guid++)), t.each(function() {
            ft.event.add(this, e, s, n, i)
        })
    }

    function _(t, e) {
        return ft.nodeName(t, "table") && ft.nodeName(11 !== e.nodeType ? e : e.firstChild, "tr") ? t.getElementsByTagName("tbody")[0] || t.appendChild(t.ownerDocument.createElement("tbody")) : t
    }

    function w(t) {
        return t.type = (null !== ft.find.attr(t, "type")) + "/" + t.type, t
    }

    function C(t) {
        var e = se.exec(t.type);
        return e ? t.type = e[1] : t.removeAttribute("type"), t
    }

    function T(t, e) {
        if (1 === e.nodeType && ft.hasData(t)) {
            var i, n, s, o = ft._data(t),
                a = ft._data(e, o),
                r = o.events;
            if (r) {
                delete a.handle, a.events = {};
                for (i in r)
                    for (n = 0, s = r[i].length; s > n; n++) ft.event.add(e, i, r[i][n])
            }
            a.data && (a.data = ft.extend({}, a.data))
        }
    }

    function S(t, e) {
        var i, n, s;
        if (1 === e.nodeType) {
            if (i = e.nodeName.toLowerCase(), !dt.noCloneEvent && e[ft.expando]) {
                s = ft._data(e);
                for (n in s.events) ft.removeEvent(e, n, s.handle);
                e.removeAttribute(ft.expando)
            }
            "script" === i && e.text !== t.text ? (w(e).text = t.text, C(e)) : "object" === i ? (e.parentNode && (e.outerHTML = t.outerHTML), dt.html5Clone && t.innerHTML && !ft.trim(e.innerHTML) && (e.innerHTML = t.innerHTML)) : "input" === i && It.test(t.type) ? (e.defaultChecked = e.checked = t.checked, e.value !== t.value && (e.value = t.value)) : "option" === i ? e.defaultSelected = e.selected = t.defaultSelected : "input" !== i && "textarea" !== i || (e.defaultValue = t.defaultValue)
        }
    }

    function $(t, e, i, n) {
        e = ot.apply([], e);
        var s, o, a, r, l, c, h = 0,
            d = t.length,
            u = d - 1,
            f = e[0],
            m = ft.isFunction(f);
        if (m || d > 1 && "string" == typeof f && !dt.checkClone && ne.test(f)) return t.each(function(s) {
            var o = t.eq(s);
            m && (e[0] = f.call(this, s, o.html())), $(o, e, i, n)
        });
        if (d && (c = v(e, t[0].ownerDocument, !1, t, n), s = c.firstChild, 1 === c.childNodes.length && (c = s), s || n)) {
            for (r = ft.map(p(c, "script"), w), a = r.length; d > h; h++) o = c, h !== u && (o = ft.clone(o, !0, !0), a && ft.merge(r, p(o, "script"))), i.call(t[h], o, h);
            if (a)
                for (l = r[r.length - 1].ownerDocument, ft.map(r, C), h = 0; a > h; h++) o = r[h], Bt.test(o.type || "") && !ft._data(o, "globalEval") && ft.contains(l, o) && (o.src ? ft._evalUrl && ft._evalUrl(o.src) : ft.globalEval((o.text || o.textContent || o.innerHTML || "").replace(oe, "")));
            c = s = null
        }
        return t
    }

    function A(t, e, i) {
        for (var n, s = e ? ft.filter(e, t) : t, o = 0; null != (n = s[o]); o++) i || 1 !== n.nodeType || ft.cleanData(p(n)), n.parentNode && (i && ft.contains(n.ownerDocument, n) && m(p(n, "script")), n.parentNode.removeChild(n));
        return t
    }

    function D(t, e) {
        var i = ft(e.createElement(t)).appendTo(e.body),
            n = ft.css(i[0], "display");
        return i.detach(), n
    }

    function E(t) {
        var e = nt,
            i = ce[t];
        return i || (i = D(t, e), "none" !== i && i || (le = (le || ft("<iframe frameborder='0' width='0' height='0'/>")).appendTo(e.documentElement), e = (le[0].contentWindow || le[0].contentDocument).document, e.write(), e.close(), i = D(t, e), le.detach()), ce[t] = i), i
    }

    function M(t, e) {
        return {
            get: function() {
                return t() ? void delete this.get : (this.get = e).apply(this, arguments)
            }
        }
    }

    function P(t) {
        if (t in Ce) return t;
        for (var e = t.charAt(0).toUpperCase() + t.slice(1), i = we.length; i--;)
            if (t = we[i] + e, t in Ce) return t
    }

    function L(t, e) {
        for (var i, n, s, o = [], a = 0, r = t.length; r > a; a++) n = t[a], n.style && (o[a] = ft._data(n, "olddisplay"), i = n.style.display, e ? (o[a] || "none" !== i || (n.style.display = ""), "" === n.style.display && jt(n) && (o[a] = ft._data(n, "olddisplay", E(n.nodeName)))) : (s = jt(n), (i && "none" !== i || !s) && ft._data(n, "olddisplay", s ? i : ft.css(n, "display"))));
        for (a = 0; r > a; a++) n = t[a], n.style && (e && "none" !== n.style.display && "" !== n.style.display || (n.style.display = e ? o[a] || "" : "none"));
        return t
    }

    function O(t, e, i) {
        var n = xe.exec(e);
        return n ? Math.max(0, n[1] - (i || 0)) + (n[2] || "px") : e
    }

    function F(t, e, i, n, s) {
        for (var o = i === (n ? "border" : "content") ? 4 : "width" === e ? 1 : 0, a = 0; 4 > o; o += 2) "margin" === i && (a += ft.css(t, i + Rt[o], !0, s)), n ? ("content" === i && (a -= ft.css(t, "padding" + Rt[o], !0, s)), "margin" !== i && (a -= ft.css(t, "border" + Rt[o] + "Width", !0, s))) : (a += ft.css(t, "padding" + Rt[o], !0, s), "padding" !== i && (a += ft.css(t, "border" + Rt[o] + "Width", !0, s)));
        return a
    }

    function N(e, i, n) {
        var s = !0,
            o = "width" === i ? e.offsetWidth : e.offsetHeight,
            a = pe(e),
            r = dt.boxSizing && "border-box" === ft.css(e, "boxSizing", !1, a);
        if (nt.msFullscreenElement && t.top !== t && e.getClientRects().length && (o = Math.round(100 * e.getBoundingClientRect()[i])), 0 >= o || null == o) {
            if (o = me(e, i, a), (0 > o || null == o) && (o = e.style[i]), de.test(o)) return o;
            s = r && (dt.boxSizingReliable() || o === e.style[i]), o = parseFloat(o) || 0
        }
        return o + F(e, i, n || (r ? "border" : "content"), s, a) + "px"
    }

    function R(t, e, i, n, s) {
        return new R.prototype.init(t, e, i, n, s)
    }

    function j() {
        return t.setTimeout(function() {
            Te = void 0
        }), Te = ft.now()
    }

    function W(t, e) {
        var i, n = {
                height: t
            },
            s = 0;
        for (e = e ? 1 : 0; 4 > s; s += 2 - e) i = Rt[s], n["margin" + i] = n["padding" + i] = t;
        return e && (n.opacity = n.width = t), n
    }

    function I(t, e, i) {
        for (var n, s = (z.tweeners[e] || []).concat(z.tweeners["*"]), o = 0, a = s.length; a > o; o++)
            if (n = s[o].call(i, e, t)) return n
    }

    function H(t, e, i) {
        var n, s, o, a, r, l, c, h, d = this,
            u = {},
            f = t.style,
            p = t.nodeType && jt(t),
            m = ft._data(t, "fxshow");
        i.queue || (r = ft._queueHooks(t, "fx"), null == r.unqueued && (r.unqueued = 0, l = r.empty.fire, r.empty.fire = function() {
            r.unqueued || l()
        }), r.unqueued++, d.always(function() {
            d.always(function() {
                r.unqueued--, ft.queue(t, "fx").length || r.empty.fire()
            })
        })), 1 === t.nodeType && ("height" in e || "width" in e) && (i.overflow = [f.overflow, f.overflowX, f.overflowY], c = ft.css(t, "display"), h = "none" === c ? ft._data(t, "olddisplay") || E(t.nodeName) : c, "inline" === h && "none" === ft.css(t, "float") && (dt.inlineBlockNeedsLayout && "inline" !== E(t.nodeName) ? f.zoom = 1 : f.display = "inline-block")), i.overflow && (f.overflow = "hidden", dt.shrinkWrapBlocks() || d.always(function() {
            f.overflow = i.overflow[0], f.overflowX = i.overflow[1], f.overflowY = i.overflow[2]
        }));
        for (n in e)
            if (s = e[n], $e.exec(s)) {
                if (delete e[n], o = o || "toggle" === s, s === (p ? "hide" : "show")) {
                    if ("show" !== s || !m || void 0 === m[n]) continue;
                    p = !0
                }
                u[n] = m && m[n] || ft.style(t, n)
            } else c = void 0;
        if (ft.isEmptyObject(u)) "inline" === ("none" === c ? E(t.nodeName) : c) && (f.display = c);
        else {
            m ? "hidden" in m && (p = m.hidden) : m = ft._data(t, "fxshow", {}), o && (m.hidden = !p), p ? ft(t).show() : d.done(function() {
                ft(t).hide()
            }), d.done(function() {
                var e;
                ft._removeData(t, "fxshow");
                for (e in u) ft.style(t, e, u[e])
            });
            for (n in u) a = I(p ? m[n] : 0, n, d), n in m || (m[n] = a.start, p && (a.end = a.start, a.start = "width" === n || "height" === n ? 1 : 0))
        }
    }

    function B(t, e) {
        var i, n, s, o, a;
        for (i in t)
            if (n = ft.camelCase(i), s = e[n], o = t[i], ft.isArray(o) && (s = o[1], o = t[i] = o[0]), i !== n && (t[n] = o, delete t[i]), a = ft.cssHooks[n], a && "expand" in a) {
                o = a.expand(o), delete t[n];
                for (i in o) i in t || (t[i] = o[i], e[i] = s)
            } else e[n] = s
    }

    function z(t, e, i) {
        var n, s, o = 0,
            a = z.prefilters.length,
            r = ft.Deferred().always(function() {
                delete l.elem
            }),
            l = function() {
                if (s) return !1;
                for (var e = Te || j(), i = Math.max(0, c.startTime + c.duration - e), n = i / c.duration || 0, o = 1 - n, a = 0, l = c.tweens.length; l > a; a++) c.tweens[a].run(o);
                return r.notifyWith(t, [c, o, i]), 1 > o && l ? i : (r.resolveWith(t, [c]), !1)
            },
            c = r.promise({
                elem: t,
                props: ft.extend({}, e),
                opts: ft.extend(!0, {
                    specialEasing: {},
                    easing: ft.easing._default
                }, i),
                originalProperties: e,
                originalOptions: i,
                startTime: Te || j(),
                duration: i.duration,
                tweens: [],
                createTween: function(e, i) {
                    var n = ft.Tween(t, c.opts, e, i, c.opts.specialEasing[e] || c.opts.easing);
                    return c.tweens.push(n), n
                },
                stop: function(e) {
                    var i = 0,
                        n = e ? c.tweens.length : 0;
                    if (s) return this;
                    for (s = !0; n > i; i++) c.tweens[i].run(1);
                    return e ? (r.notifyWith(t, [c, 1, 0]), r.resolveWith(t, [c, e])) : r.rejectWith(t, [c, e]), this
                }
            }),
            h = c.props;
        for (B(h, c.opts.specialEasing); a > o; o++)
            if (n = z.prefilters[o].call(c, t, h, c.opts)) return ft.isFunction(n.stop) && (ft._queueHooks(c.elem, c.opts.queue).stop = ft.proxy(n.stop, n)), n;
        return ft.map(h, I, c), ft.isFunction(c.opts.start) && c.opts.start.call(t, c), ft.fx.timer(ft.extend(l, {
            elem: t,
            anim: c,
            queue: c.opts.queue
        })), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always)
    }

    function q(t) {
        return ft.attr(t, "class") || ""
    }

    function U(t) {
        return function(e, i) {
            "string" != typeof e && (i = e, e = "*");
            var n, s = 0,
                o = e.toLowerCase().match(Dt) || [];
            if (ft.isFunction(i))
                for (; n = o[s++];) "+" === n.charAt(0) ? (n = n.slice(1) || "*", (t[n] = t[n] || []).unshift(i)) : (t[n] = t[n] || []).push(i)
        }
    }

    function Y(t, e, i, n) {
        function s(r) {
            var l;
            return o[r] = !0, ft.each(t[r] || [], function(t, r) {
                var c = r(e, i, n);
                return "string" != typeof c || a || o[c] ? a ? !(l = c) : void 0 : (e.dataTypes.unshift(c), s(c), !1)
            }), l
        }
        var o = {},
            a = t === Ke;
        return s(e.dataTypes[0]) || !o["*"] && s("*")
    }

    function V(t, e) {
        var i, n, s = ft.ajaxSettings.flatOptions || {};
        for (n in e) void 0 !== e[n] && ((s[n] ? t : i || (i = {}))[n] = e[n]);
        return i && ft.extend(!0, t, i), t
    }

    function X(t, e, i) {
        for (var n, s, o, a, r = t.contents, l = t.dataTypes;
            "*" === l[0];) l.shift(), void 0 === s && (s = t.mimeType || e.getResponseHeader("Content-Type"));
        if (s)
            for (a in r)
                if (r[a] && r[a].test(s)) {
                    l.unshift(a);
                    break
                } if (l[0] in i) o = l[0];
        else {
            for (a in i) {
                if (!l[0] || t.converters[a + " " + l[0]]) {
                    o = a;
                    break
                }
                n || (n = a)
            }
            o = o || n
        }
        return o ? (o !== l[0] && l.unshift(o), i[o]) : void 0
    }

    function J(t, e, i, n) {
        var s, o, a, r, l, c = {},
            h = t.dataTypes.slice();
        if (h[1])
            for (a in t.converters) c[a.toLowerCase()] = t.converters[a];
        for (o = h.shift(); o;)
            if (t.responseFields[o] && (i[t.responseFields[o]] = e), !l && n && t.dataFilter && (e = t.dataFilter(e, t.dataType)), l = o, o = h.shift())
                if ("*" === o) o = l;
                else if ("*" !== l && l !== o) {
            if (a = c[l + " " + o] || c["* " + o], !a)
                for (s in c)
                    if (r = s.split(" "), r[1] === o && (a = c[l + " " + r[0]] || c["* " + r[0]])) {
                        a === !0 ? a = c[s] : c[s] !== !0 && (o = r[0], h.unshift(r[1]));
                        break
                    } if (a !== !0)
                if (a && t["throws"]) e = a(e);
                else try {
                    e = a(e)
                } catch (d) {
                    return {
                        state: "parsererror",
                        error: a ? d : "No conversion from " + l + " to " + o
                    }
                }
        }
        return {
            state: "success",
            data: e
        }
    }

    function G(t) {
        return t.style && t.style.display || ft.css(t, "display")
    }

    function K(t) {
        for (; t && 1 === t.nodeType;) {
            if ("none" === G(t) || "hidden" === t.type) return !0;
            t = t.parentNode
        }
        return !1
    }

    function Q(t, e, i, n) {
        var s;
        if (ft.isArray(e)) ft.each(e, function(e, s) {
            i || ii.test(t) ? n(t, s) : Q(t + "[" + ("object" == typeof s && null != s ? e : "") + "]", s, i, n)
        });
        else if (i || "object" !== ft.type(e)) n(t, e);
        else
            for (s in e) Q(t + "[" + s + "]", e[s], i, n)
    }

    function Z() {
        try {
            return new t.XMLHttpRequest
        } catch (e) {}
    }

    function tt() {
        try {
            return new t.ActiveXObject("Microsoft.XMLHTTP")
        } catch (e) {}
    }

    function et(t) {
        return ft.isWindow(t) ? t : 9 === t.nodeType ? t.defaultView || t.parentWindow : !1
    }
    var it = [],
        nt = t.document,
        st = it.slice,
        ot = it.concat,
        at = it.push,
        rt = it.indexOf,
        lt = {},
        ct = lt.toString,
        ht = lt.hasOwnProperty,
        dt = {},
        ut = "1.12.1",
        ft = function(t, e) {
            return new ft.fn.init(t, e)
        },
        pt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        mt = /^-ms-/,
        gt = /-([\da-z])/gi,
        vt = function(t, e) {
            return e.toUpperCase()
        };
    ft.fn = ft.prototype = {
        jquery: ut,
        constructor: ft,
        selector: "",
        length: 0,
        toArray: function() {
            return st.call(this)
        },
        get: function(t) {
            return null != t ? 0 > t ? this[t + this.length] : this[t] : st.call(this)
        },
        pushStack: function(t) {
            var e = ft.merge(this.constructor(), t);
            return e.prevObject = this, e.context = this.context, e
        },
        each: function(t) {
            return ft.each(this, t)
        },
        map: function(t) {
            return this.pushStack(ft.map(this, function(e, i) {
                return t.call(e, i, e)
            }))
        },
        slice: function() {
            return this.pushStack(st.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(t) {
            var e = this.length,
                i = +t + (0 > t ? e : 0);
            return this.pushStack(i >= 0 && e > i ? [this[i]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: at,
        sort: it.sort,
        splice: it.splice
    }, ft.extend = ft.fn.extend = function() {
        var t, e, i, n, s, o, a = arguments[0] || {},
            r = 1,
            l = arguments.length,
            c = !1;
        for ("boolean" == typeof a && (c = a, a = arguments[r] || {}, r++), "object" == typeof a || ft.isFunction(a) || (a = {}), r === l && (a = this, r--); l > r; r++)
            if (null != (s = arguments[r]))
                for (n in s) t = a[n], i = s[n], a !== i && (c && i && (ft.isPlainObject(i) || (e = ft.isArray(i))) ? (e ? (e = !1, o = t && ft.isArray(t) ? t : []) : o = t && ft.isPlainObject(t) ? t : {}, a[n] = ft.extend(c, o, i)) : void 0 !== i && (a[n] = i));
        return a
    }, ft.extend({
        expando: "jQuery" + (ut + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(t) {
            throw new Error(t)
        },
        noop: function() {},
        isFunction: function(t) {
            return "function" === ft.type(t)
        },
        isArray: Array.isArray || function(t) {
            return "array" === ft.type(t)
        },
        isWindow: function(t) {
            return null != t && t == t.window
        },
        isNumeric: function(t) {
            var e = t && t.toString();
            return !ft.isArray(t) && e - parseFloat(e) + 1 >= 0
        },
        isEmptyObject: function(t) {
            var e;
            for (e in t) return !1;
            return !0
        },
        isPlainObject: function(t) {
            var e;
            if (!t || "object" !== ft.type(t) || t.nodeType || ft.isWindow(t)) return !1;
            try {
                if (t.constructor && !ht.call(t, "constructor") && !ht.call(t.constructor.prototype, "isPrototypeOf")) return !1
            } catch (i) {
                return !1
            }
            if (!dt.ownFirst)
                for (e in t) return ht.call(t, e);
            for (e in t);
            return void 0 === e || ht.call(t, e)
        },
        type: function(t) {
            return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? lt[ct.call(t)] || "object" : typeof t
        },
        globalEval: function(e) {
            e && ft.trim(e) && (t.execScript || function(e) {
                t.eval.call(t, e)
            })(e)
        },
        camelCase: function(t) {
            return t.replace(mt, "ms-").replace(gt, vt)
        },
        nodeName: function(t, e) {
            return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
        },
        each: function(t, e) {
            var n, s = 0;
            if (i(t))
                for (n = t.length; n > s && e.call(t[s], s, t[s]) !== !1; s++);
            else
                for (s in t)
                    if (e.call(t[s], s, t[s]) === !1) break;
            return t
        },
        trim: function(t) {
            return null == t ? "" : (t + "").replace(pt, "")
        },
        makeArray: function(t, e) {
            var n = e || [];
            return null != t && (i(Object(t)) ? ft.merge(n, "string" == typeof t ? [t] : t) : at.call(n, t)), n
        },
        inArray: function(t, e, i) {
            var n;
            if (e) {
                if (rt) return rt.call(e, t, i);
                for (n = e.length, i = i ? 0 > i ? Math.max(0, n + i) : i : 0; n > i; i++)
                    if (i in e && e[i] === t) return i
            }
            return -1
        },
        merge: function(t, e) {
            for (var i = +e.length, n = 0, s = t.length; i > n;) t[s++] = e[n++];
            if (i !== i)
                for (; void 0 !== e[n];) t[s++] = e[n++];
            return t.length = s, t
        },
        grep: function(t, e, i) {
            for (var n, s = [], o = 0, a = t.length, r = !i; a > o; o++) n = !e(t[o], o), n !== r && s.push(t[o]);
            return s
        },
        map: function(t, e, n) {
            var s, o, a = 0,
                r = [];
            if (i(t))
                for (s = t.length; s > a; a++) o = e(t[a], a, n), null != o && r.push(o);
            else
                for (a in t) o = e(t[a], a, n), null != o && r.push(o);
            return ot.apply([], r)
        },
        guid: 1,
        proxy: function(t, e) {
            var i, n, s;
            return "string" == typeof e && (s = t[e], e = t, t = s), ft.isFunction(t) ? (i = st.call(arguments, 2), n = function() {
                return t.apply(e || this, i.concat(st.call(arguments)))
            }, n.guid = t.guid = t.guid || ft.guid++, n) : void 0
        },
        now: function() {
            return +new Date
        },
        support: dt
    }), "function" == typeof Symbol && (ft.fn[Symbol.iterator] = it[Symbol.iterator]), ft.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(t, e) {
        lt["[object " + e + "]"] = e.toLowerCase()
    });
    var yt = function(t) {
        function e(t, e, i, n) {
            var s, o, a, r, l, c, d, f, p = e && e.ownerDocument,
                m = e ? e.nodeType : 9;
            if (i = i || [], "string" != typeof t || !t || 1 !== m && 9 !== m && 11 !== m) return i;
            if (!n && ((e ? e.ownerDocument || e : I) !== P && M(e), e = e || P, O)) {
                if (11 !== m && (c = vt.exec(t)))
                    if (s = c[1]) {
                        if (9 === m) {
                            if (!(a = e.getElementById(s))) return i;
                            if (a.id === s) return i.push(a), i
                        } else if (p && (a = p.getElementById(s)) && j(e, a) && a.id === s) return i.push(a), i
                    } else {
                        if (c[2]) return Q.apply(i, e.getElementsByTagName(t)), i;
                        if ((s = c[3]) && k.getElementsByClassName && e.getElementsByClassName) return Q.apply(i, e.getElementsByClassName(s)), i
                    } if (k.qsa && !U[t + " "] && (!F || !F.test(t))) {
                    if (1 !== m) p = e, f = t;
                    else if ("object" !== e.nodeName.toLowerCase()) {
                        for ((r = e.getAttribute("id")) ? r = r.replace(bt, "\\$&") : e.setAttribute("id", r = W), d = T(t), o = d.length, l = ut.test(r) ? "#" + r : "[id='" + r + "']"; o--;) d[o] = l + " " + u(d[o]);
                        f = d.join(","), p = yt.test(t) && h(e.parentNode) || e
                    }
                    if (f) try {
                        return Q.apply(i, p.querySelectorAll(f)), i
                    } catch (g) {} finally {
                        r === W && e.removeAttribute("id")
                    }
                }
            }
            return $(t.replace(rt, "$1"), e, i, n)
        }

        function i() {
            function t(i, n) {
                return e.push(i + " ") > _.cacheLength && delete t[e.shift()], t[i + " "] = n
            }
            var e = [];
            return t
        }

        function n(t) {
            return t[W] = !0, t
        }

        function s(t) {
            var e = P.createElement("div");
            try {
                return !!t(e)
            } catch (i) {
                return !1
            } finally {
                e.parentNode && e.parentNode.removeChild(e), e = null
            }
        }

        function o(t, e) {
            for (var i = t.split("|"), n = i.length; n--;) _.attrHandle[i[n]] = e
        }

        function a(t, e) {
            var i = e && t,
                n = i && 1 === t.nodeType && 1 === e.nodeType && (~e.sourceIndex || V) - (~t.sourceIndex || V);
            if (n) return n;
            if (i)
                for (; i = i.nextSibling;)
                    if (i === e) return -1;
            return t ? 1 : -1
        }

        function r(t) {
            return function(e) {
                var i = e.nodeName.toLowerCase();
                return "input" === i && e.type === t
            }
        }

        function l(t) {
            return function(e) {
                var i = e.nodeName.toLowerCase();
                return ("input" === i || "button" === i) && e.type === t
            }
        }

        function c(t) {
            return n(function(e) {
                return e = +e, n(function(i, n) {
                    for (var s, o = t([], i.length, e), a = o.length; a--;) i[s = o[a]] && (i[s] = !(n[s] = i[s]))
                })
            })
        }

        function h(t) {
            return t && "undefined" != typeof t.getElementsByTagName && t
        }

        function d() {}

        function u(t) {
            for (var e = 0, i = t.length, n = ""; i > e; e++) n += t[e].value;
            return n
        }

        function f(t, e, i) {
            var n = e.dir,
                s = i && "parentNode" === n,
                o = B++;
            return e.first ? function(e, i, o) {
                for (; e = e[n];)
                    if (1 === e.nodeType || s) return t(e, i, o)
            } : function(e, i, a) {
                var r, l, c, h = [H, o];
                if (a) {
                    for (; e = e[n];)
                        if ((1 === e.nodeType || s) && t(e, i, a)) return !0
                } else
                    for (; e = e[n];)
                        if (1 === e.nodeType || s) {
                            if (c = e[W] || (e[W] = {}), l = c[e.uniqueID] || (c[e.uniqueID] = {}), (r = l[n]) && r[0] === H && r[1] === o) return h[2] = r[2];
                            if (l[n] = h, h[2] = t(e, i, a)) return !0
                        }
            }
        }

        function p(t) {
            return t.length > 1 ? function(e, i, n) {
                for (var s = t.length; s--;)
                    if (!t[s](e, i, n)) return !1;
                return !0
            } : t[0]
        }

        function m(t, i, n) {
            for (var s = 0, o = i.length; o > s; s++) e(t, i[s], n);
            return n
        }

        function g(t, e, i, n, s) {
            for (var o, a = [], r = 0, l = t.length, c = null != e; l > r; r++)(o = t[r]) && (i && !i(o, n, s) || (a.push(o), c && e.push(r)));
            return a
        }

        function v(t, e, i, s, o, a) {
            return s && !s[W] && (s = v(s)), o && !o[W] && (o = v(o, a)), n(function(n, a, r, l) {
                var c, h, d, u = [],
                    f = [],
                    p = a.length,
                    v = n || m(e || "*", r.nodeType ? [r] : r, []),
                    y = !t || !n && e ? v : g(v, u, t, r, l),
                    b = i ? o || (n ? t : p || s) ? [] : a : y;
                if (i && i(y, b, r, l), s)
                    for (c = g(b, f), s(c, [], r, l), h = c.length; h--;)(d = c[h]) && (b[f[h]] = !(y[f[h]] = d));
                if (n) {
                    if (o || t) {
                        if (o) {
                            for (c = [], h = b.length; h--;)(d = b[h]) && c.push(y[h] = d);
                            o(null, b = [], c, l)
                        }
                        for (h = b.length; h--;)(d = b[h]) && (c = o ? tt(n, d) : u[h]) > -1 && (n[c] = !(a[c] = d))
                    }
                } else b = g(b === a ? b.splice(p, b.length) : b), o ? o(null, a, b, l) : Q.apply(a, b)
            })
        }

        function y(t) {
            for (var e, i, n, s = t.length, o = _.relative[t[0].type], a = o || _.relative[" "], r = o ? 1 : 0, l = f(function(t) {
                    return t === e
                }, a, !0), c = f(function(t) {
                    return tt(e, t) > -1
                }, a, !0), h = [function(t, i, n) {
                    var s = !o && (n || i !== A) || ((e = i).nodeType ? l(t, i, n) : c(t, i, n));
                    return e = null, s
                }]; s > r; r++)
                if (i = _.relative[t[r].type]) h = [f(p(h), i)];
                else {
                    if (i = _.filter[t[r].type].apply(null, t[r].matches), i[W]) {
                        for (n = ++r; s > n && !_.relative[t[n].type]; n++);
                        return v(r > 1 && p(h), r > 1 && u(t.slice(0, r - 1).concat({
                            value: " " === t[r - 2].type ? "*" : ""
                        })).replace(rt, "$1"), i, n > r && y(t.slice(r, n)), s > n && y(t = t.slice(n)), s > n && u(t))
                    }
                    h.push(i)
                } return p(h)
        }

        function b(t, i) {
            var s = i.length > 0,
                o = t.length > 0,
                a = function(n, a, r, l, c) {
                    var h, d, u, f = 0,
                        p = "0",
                        m = n && [],
                        v = [],
                        y = A,
                        b = n || o && _.find.TAG("*", c),
                        x = H += null == y ? 1 : Math.random() || .1,
                        k = b.length;
                    for (c && (A = a === P || a || c); p !== k && null != (h = b[p]); p++) {
                        if (o && h) {
                            for (d = 0, a || h.ownerDocument === P || (M(h), r = !O); u = t[d++];)
                                if (u(h, a || P, r)) {
                                    l.push(h);
                                    break
                                } c && (H = x)
                        }
                        s && ((h = !u && h) && f--, n && m.push(h))
                    }
                    if (f += p, s && p !== f) {
                        for (d = 0; u = i[d++];) u(m, v, a, r);
                        if (n) {
                            if (f > 0)
                                for (; p--;) m[p] || v[p] || (v[p] = G.call(l));
                            v = g(v)
                        }
                        Q.apply(l, v), c && !n && v.length > 0 && f + i.length > 1 && e.uniqueSort(l)
                    }
                    return c && (H = x, A = y), m
                };
            return s ? n(a) : a
        }
        var x, k, _, w, C, T, S, $, A, D, E, M, P, L, O, F, N, R, j, W = "sizzle" + 1 * new Date,
            I = t.document,
            H = 0,
            B = 0,
            z = i(),
            q = i(),
            U = i(),
            Y = function(t, e) {
                return t === e && (E = !0), 0
            },
            V = 1 << 31,
            X = {}.hasOwnProperty,
            J = [],
            G = J.pop,
            K = J.push,
            Q = J.push,
            Z = J.slice,
            tt = function(t, e) {
                for (var i = 0, n = t.length; n > i; i++)
                    if (t[i] === e) return i;
                return -1
            },
            et = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            it = "[\\x20\\t\\r\\n\\f]",
            nt = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
            st = "\\[" + it + "*(" + nt + ")(?:" + it + "*([*^$|!~]?=)" + it + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + nt + "))|)" + it + "*\\]",
            ot = ":(" + nt + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + st + ")*)|.*)\\)|)",
            at = new RegExp(it + "+", "g"),
            rt = new RegExp("^" + it + "+|((?:^|[^\\\\])(?:\\\\.)*)" + it + "+$", "g"),
            lt = new RegExp("^" + it + "*," + it + "*"),
            ct = new RegExp("^" + it + "*([>+~]|" + it + ")" + it + "*"),
            ht = new RegExp("=" + it + "*([^\\]'\"]*?)" + it + "*\\]", "g"),
            dt = new RegExp(ot),
            ut = new RegExp("^" + nt + "$"),
            ft = {
                ID: new RegExp("^#(" + nt + ")"),
                CLASS: new RegExp("^\\.(" + nt + ")"),
                TAG: new RegExp("^(" + nt + "|[*])"),
                ATTR: new RegExp("^" + st),
                PSEUDO: new RegExp("^" + ot),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + it + "*(even|odd|(([+-]|)(\\d*)n|)" + it + "*(?:([+-]|)" + it + "*(\\d+)|))" + it + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + et + ")$", "i"),
                needsContext: new RegExp("^" + it + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + it + "*((?:-\\d)?\\d*)" + it + "*\\)|)(?=[^-]|$)", "i")
            },
            pt = /^(?:input|select|textarea|button)$/i,
            mt = /^h\d$/i,
            gt = /^[^{]+\{\s*\[native \w/,
            vt = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            yt = /[+~]/,
            bt = /'|\\/g,
            xt = new RegExp("\\\\([\\da-f]{1,6}" + it + "?|(" + it + ")|.)", "ig"),
            kt = function(t, e, i) {
                var n = "0x" + e - 65536;
                return n !== n || i ? e : 0 > n ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320)
            },
            _t = function() {
                M()
            };
        try {
            Q.apply(J = Z.call(I.childNodes), I.childNodes), J[I.childNodes.length].nodeType
        } catch (wt) {
            Q = {
                apply: J.length ? function(t, e) {
                    K.apply(t, Z.call(e))
                } : function(t, e) {
                    for (var i = t.length, n = 0; t[i++] = e[n++];);
                    t.length = i - 1
                }
            }
        }
        k = e.support = {}, C = e.isXML = function(t) {
            var e = t && (t.ownerDocument || t).documentElement;
            return e ? "HTML" !== e.nodeName : !1
        }, M = e.setDocument = function(t) {
            var e, i, n = t ? t.ownerDocument || t : I;
            return n !== P && 9 === n.nodeType && n.documentElement ? (P = n, L = P.documentElement, O = !C(P), (i = P.defaultView) && i.top !== i && (i.addEventListener ? i.addEventListener("unload", _t, !1) : i.attachEvent && i.attachEvent("onunload", _t)), k.attributes = s(function(t) {
                return t.className = "i", !t.getAttribute("className")
            }), k.getElementsByTagName = s(function(t) {
                return t.appendChild(P.createComment("")), !t.getElementsByTagName("*").length
            }), k.getElementsByClassName = gt.test(P.getElementsByClassName), k.getById = s(function(t) {
                return L.appendChild(t).id = W, !P.getElementsByName || !P.getElementsByName(W).length
            }), k.getById ? (_.find.ID = function(t, e) {
                if ("undefined" != typeof e.getElementById && O) {
                    var i = e.getElementById(t);
                    return i ? [i] : []
                }
            }, _.filter.ID = function(t) {
                var e = t.replace(xt, kt);
                return function(t) {
                    return t.getAttribute("id") === e
                }
            }) : (delete _.find.ID, _.filter.ID = function(t) {
                var e = t.replace(xt, kt);
                return function(t) {
                    var i = "undefined" != typeof t.getAttributeNode && t.getAttributeNode("id");
                    return i && i.value === e
                }
            }), _.find.TAG = k.getElementsByTagName ? function(t, e) {
                return "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t) : k.qsa ? e.querySelectorAll(t) : void 0
            } : function(t, e) {
                var i, n = [],
                    s = 0,
                    o = e.getElementsByTagName(t);
                if ("*" === t) {
                    for (; i = o[s++];) 1 === i.nodeType && n.push(i);
                    return n
                }
                return o
            }, _.find.CLASS = k.getElementsByClassName && function(t, e) {
                return "undefined" != typeof e.getElementsByClassName && O ? e.getElementsByClassName(t) : void 0
            }, N = [], F = [], (k.qsa = gt.test(P.querySelectorAll)) && (s(function(t) {
                L.appendChild(t).innerHTML = "<a id='" + W + "'></a><select id='" + W + "-\r\\' msallowcapture=''><option selected=''></option></select>", t.querySelectorAll("[msallowcapture^='']").length && F.push("[*^$]=" + it + "*(?:''|\"\")"), t.querySelectorAll("[selected]").length || F.push("\\[" + it + "*(?:value|" + et + ")"), t.querySelectorAll("[id~=" + W + "-]").length || F.push("~="), t.querySelectorAll(":checked").length || F.push(":checked"), t.querySelectorAll("a#" + W + "+*").length || F.push(".#.+[+~]")
            }), s(function(t) {
                var e = P.createElement("input");
                e.setAttribute("type", "hidden"), t.appendChild(e).setAttribute("name", "D"), t.querySelectorAll("[name=d]").length && F.push("name" + it + "*[*^$|!~]?="), t.querySelectorAll(":enabled").length || F.push(":enabled", ":disabled"), t.querySelectorAll("*,:x"), F.push(",.*:")
            })), (k.matchesSelector = gt.test(R = L.matches || L.webkitMatchesSelector || L.mozMatchesSelector || L.oMatchesSelector || L.msMatchesSelector)) && s(function(t) {
                k.disconnectedMatch = R.call(t, "div"), R.call(t, "[s!='']:x"), N.push("!=", ot)
            }), F = F.length && new RegExp(F.join("|")), N = N.length && new RegExp(N.join("|")), e = gt.test(L.compareDocumentPosition), j = e || gt.test(L.contains) ? function(t, e) {
                var i = 9 === t.nodeType ? t.documentElement : t,
                    n = e && e.parentNode;
                return t === n || !(!n || 1 !== n.nodeType || !(i.contains ? i.contains(n) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(n)))
            } : function(t, e) {
                if (e)
                    for (; e = e.parentNode;)
                        if (e === t) return !0;
                return !1
            }, Y = e ? function(t, e) {
                if (t === e) return E = !0, 0;
                var i = !t.compareDocumentPosition - !e.compareDocumentPosition;
                return i ? i : (i = (t.ownerDocument || t) === (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1, 1 & i || !k.sortDetached && e.compareDocumentPosition(t) === i ? t === P || t.ownerDocument === I && j(I, t) ? -1 : e === P || e.ownerDocument === I && j(I, e) ? 1 : D ? tt(D, t) - tt(D, e) : 0 : 4 & i ? -1 : 1)
            } : function(t, e) {
                if (t === e) return E = !0, 0;
                var i, n = 0,
                    s = t.parentNode,
                    o = e.parentNode,
                    r = [t],
                    l = [e];
                if (!s || !o) return t === P ? -1 : e === P ? 1 : s ? -1 : o ? 1 : D ? tt(D, t) - tt(D, e) : 0;
                if (s === o) return a(t, e);
                for (i = t; i = i.parentNode;) r.unshift(i);
                for (i = e; i = i.parentNode;) l.unshift(i);
                for (; r[n] === l[n];) n++;
                return n ? a(r[n], l[n]) : r[n] === I ? -1 : l[n] === I ? 1 : 0
            }, P) : P
        }, e.matches = function(t, i) {
            return e(t, null, null, i)
        }, e.matchesSelector = function(t, i) {
            if ((t.ownerDocument || t) !== P && M(t), i = i.replace(ht, "='$1']"), k.matchesSelector && O && !U[i + " "] && (!N || !N.test(i)) && (!F || !F.test(i))) try {
                var n = R.call(t, i);
                if (n || k.disconnectedMatch || t.document && 11 !== t.document.nodeType) return n
            } catch (s) {}
            return e(i, P, null, [t]).length > 0
        }, e.contains = function(t, e) {
            return (t.ownerDocument || t) !== P && M(t), j(t, e)
        }, e.attr = function(t, e) {
            (t.ownerDocument || t) !== P && M(t);
            var i = _.attrHandle[e.toLowerCase()],
                n = i && X.call(_.attrHandle, e.toLowerCase()) ? i(t, e, !O) : void 0;
            return void 0 !== n ? n : k.attributes || !O ? t.getAttribute(e) : (n = t.getAttributeNode(e)) && n.specified ? n.value : null
        }, e.error = function(t) {
            throw new Error("Syntax error, unrecognized expression: " + t)
        }, e.uniqueSort = function(t) {
            var e, i = [],
                n = 0,
                s = 0;
            if (E = !k.detectDuplicates, D = !k.sortStable && t.slice(0), t.sort(Y), E) {
                for (; e = t[s++];) e === t[s] && (n = i.push(s));
                for (; n--;) t.splice(i[n], 1)
            }
            return D = null, t
        }, w = e.getText = function(t) {
            var e, i = "",
                n = 0,
                s = t.nodeType;
            if (s) {
                if (1 === s || 9 === s || 11 === s) {
                    if ("string" == typeof t.textContent) return t.textContent;
                    for (t = t.firstChild; t; t = t.nextSibling) i += w(t)
                } else if (3 === s || 4 === s) return t.nodeValue
            } else
                for (; e = t[n++];) i += w(e);
            return i
        }, _ = e.selectors = {
            cacheLength: 50,
            createPseudo: n,
            match: ft,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(t) {
                    return t[1] = t[1].replace(xt, kt), t[3] = (t[3] || t[4] || t[5] || "").replace(xt, kt), "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4)
                },
                CHILD: function(t) {
                    return t[1] = t[1].toLowerCase(), "nth" === t[1].slice(0, 3) ? (t[3] || e.error(t[0]), t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && e.error(t[0]), t
                },
                PSEUDO: function(t) {
                    var e, i = !t[6] && t[2];
                    return ft.CHILD.test(t[0]) ? null : (t[3] ? t[2] = t[4] || t[5] || "" : i && dt.test(i) && (e = T(i, !0)) && (e = i.indexOf(")", i.length - e) - i.length) && (t[0] = t[0].slice(0, e), t[2] = i.slice(0, e)), t.slice(0, 3))
                }
            },
            filter: {
                TAG: function(t) {
                    var e = t.replace(xt, kt).toLowerCase();
                    return "*" === t ? function() {
                        return !0
                    } : function(t) {
                        return t.nodeName && t.nodeName.toLowerCase() === e
                    }
                },
                CLASS: function(t) {
                    var e = z[t + " "];
                    return e || (e = new RegExp("(^|" + it + ")" + t + "(" + it + "|$)")) && z(t, function(t) {
                        return e.test("string" == typeof t.className && t.className || "undefined" != typeof t.getAttribute && t.getAttribute("class") || "")
                    })
                },
                ATTR: function(t, i, n) {
                    return function(s) {
                        var o = e.attr(s, t);
                        return null == o ? "!=" === i : i ? (o += "", "=" === i ? o === n : "!=" === i ? o !== n : "^=" === i ? n && 0 === o.indexOf(n) : "*=" === i ? n && o.indexOf(n) > -1 : "$=" === i ? n && o.slice(-n.length) === n : "~=" === i ? (" " + o.replace(at, " ") + " ").indexOf(n) > -1 : "|=" === i ? o === n || o.slice(0, n.length + 1) === n + "-" : !1) : !0
                    }
                },
                CHILD: function(t, e, i, n, s) {
                    var o = "nth" !== t.slice(0, 3),
                        a = "last" !== t.slice(-4),
                        r = "of-type" === e;
                    return 1 === n && 0 === s ? function(t) {
                        return !!t.parentNode
                    } : function(e, i, l) {
                        var c, h, d, u, f, p, m = o !== a ? "nextSibling" : "previousSibling",
                            g = e.parentNode,
                            v = r && e.nodeName.toLowerCase(),
                            y = !l && !r,
                            b = !1;
                        if (g) {
                            if (o) {
                                for (; m;) {
                                    for (u = e; u = u[m];)
                                        if (r ? u.nodeName.toLowerCase() === v : 1 === u.nodeType) return !1;
                                    p = m = "only" === t && !p && "nextSibling"
                                }
                                return !0
                            }
                            if (p = [a ? g.firstChild : g.lastChild], a && y) {
                                for (u = g, d = u[W] || (u[W] = {}), h = d[u.uniqueID] || (d[u.uniqueID] = {}), c = h[t] || [], f = c[0] === H && c[1], b = f && c[2], u = f && g.childNodes[f]; u = ++f && u && u[m] || (b = f = 0) || p.pop();)
                                    if (1 === u.nodeType && ++b && u === e) {
                                        h[t] = [H, f, b];
                                        break
                                    }
                            } else if (y && (u = e, d = u[W] || (u[W] = {}), h = d[u.uniqueID] || (d[u.uniqueID] = {}), c = h[t] || [], f = c[0] === H && c[1], b = f), b === !1)
                                for (;
                                    (u = ++f && u && u[m] || (b = f = 0) || p.pop()) && ((r ? u.nodeName.toLowerCase() !== v : 1 !== u.nodeType) || !++b || (y && (d = u[W] || (u[W] = {}), h = d[u.uniqueID] || (d[u.uniqueID] = {}), h[t] = [H, b]), u !== e)););
                            return b -= s, b === n || b % n === 0 && b / n >= 0
                        }
                    }
                },
                PSEUDO: function(t, i) {
                    var s, o = _.pseudos[t] || _.setFilters[t.toLowerCase()] || e.error("unsupported pseudo: " + t);
                    return o[W] ? o(i) : o.length > 1 ? (s = [t, t, "", i], _.setFilters.hasOwnProperty(t.toLowerCase()) ? n(function(t, e) {
                        for (var n, s = o(t, i), a = s.length; a--;) n = tt(t, s[a]),
                            t[n] = !(e[n] = s[a])
                    }) : function(t) {
                        return o(t, 0, s)
                    }) : o
                }
            },
            pseudos: {
                not: n(function(t) {
                    var e = [],
                        i = [],
                        s = S(t.replace(rt, "$1"));
                    return s[W] ? n(function(t, e, i, n) {
                        for (var o, a = s(t, null, n, []), r = t.length; r--;)(o = a[r]) && (t[r] = !(e[r] = o))
                    }) : function(t, n, o) {
                        return e[0] = t, s(e, null, o, i), e[0] = null, !i.pop()
                    }
                }),
                has: n(function(t) {
                    return function(i) {
                        return e(t, i).length > 0
                    }
                }),
                contains: n(function(t) {
                    return t = t.replace(xt, kt),
                        function(e) {
                            return (e.textContent || e.innerText || w(e)).indexOf(t) > -1
                        }
                }),
                lang: n(function(t) {
                    return ut.test(t || "") || e.error("unsupported lang: " + t), t = t.replace(xt, kt).toLowerCase(),
                        function(e) {
                            var i;
                            do
                                if (i = O ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return i = i.toLowerCase(), i === t || 0 === i.indexOf(t + "-"); while ((e = e.parentNode) && 1 === e.nodeType);
                            return !1
                        }
                }),
                target: function(e) {
                    var i = t.location && t.location.hash;
                    return i && i.slice(1) === e.id
                },
                root: function(t) {
                    return t === L
                },
                focus: function(t) {
                    return t === P.activeElement && (!P.hasFocus || P.hasFocus()) && !!(t.type || t.href || ~t.tabIndex)
                },
                enabled: function(t) {
                    return t.disabled === !1
                },
                disabled: function(t) {
                    return t.disabled === !0
                },
                checked: function(t) {
                    var e = t.nodeName.toLowerCase();
                    return "input" === e && !!t.checked || "option" === e && !!t.selected
                },
                selected: function(t) {
                    return t.parentNode && t.parentNode.selectedIndex, t.selected === !0
                },
                empty: function(t) {
                    for (t = t.firstChild; t; t = t.nextSibling)
                        if (t.nodeType < 6) return !1;
                    return !0
                },
                parent: function(t) {
                    return !_.pseudos.empty(t)
                },
                header: function(t) {
                    return mt.test(t.nodeName)
                },
                input: function(t) {
                    return pt.test(t.nodeName)
                },
                button: function(t) {
                    var e = t.nodeName.toLowerCase();
                    return "input" === e && "button" === t.type || "button" === e
                },
                text: function(t) {
                    var e;
                    return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase())
                },
                first: c(function() {
                    return [0]
                }),
                last: c(function(t, e) {
                    return [e - 1]
                }),
                eq: c(function(t, e, i) {
                    return [0 > i ? i + e : i]
                }),
                even: c(function(t, e) {
                    for (var i = 0; e > i; i += 2) t.push(i);
                    return t
                }),
                odd: c(function(t, e) {
                    for (var i = 1; e > i; i += 2) t.push(i);
                    return t
                }),
                lt: c(function(t, e, i) {
                    for (var n = 0 > i ? i + e : i; --n >= 0;) t.push(n);
                    return t
                }),
                gt: c(function(t, e, i) {
                    for (var n = 0 > i ? i + e : i; ++n < e;) t.push(n);
                    return t
                })
            }
        }, _.pseudos.nth = _.pseudos.eq;
        for (x in {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) _.pseudos[x] = r(x);
        for (x in {
                submit: !0,
                reset: !0
            }) _.pseudos[x] = l(x);
        return d.prototype = _.filters = _.pseudos, _.setFilters = new d, T = e.tokenize = function(t, i) {
            var n, s, o, a, r, l, c, h = q[t + " "];
            if (h) return i ? 0 : h.slice(0);
            for (r = t, l = [], c = _.preFilter; r;) {
                n && !(s = lt.exec(r)) || (s && (r = r.slice(s[0].length) || r), l.push(o = [])), n = !1, (s = ct.exec(r)) && (n = s.shift(), o.push({
                    value: n,
                    type: s[0].replace(rt, " ")
                }), r = r.slice(n.length));
                for (a in _.filter) !(s = ft[a].exec(r)) || c[a] && !(s = c[a](s)) || (n = s.shift(), o.push({
                    value: n,
                    type: a,
                    matches: s
                }), r = r.slice(n.length));
                if (!n) break
            }
            return i ? r.length : r ? e.error(t) : q(t, l).slice(0)
        }, S = e.compile = function(t, e) {
            var i, n = [],
                s = [],
                o = U[t + " "];
            if (!o) {
                for (e || (e = T(t)), i = e.length; i--;) o = y(e[i]), o[W] ? n.push(o) : s.push(o);
                o = U(t, b(s, n)), o.selector = t
            }
            return o
        }, $ = e.select = function(t, e, i, n) {
            var s, o, a, r, l, c = "function" == typeof t && t,
                d = !n && T(t = c.selector || t);
            if (i = i || [], 1 === d.length) {
                if (o = d[0] = d[0].slice(0), o.length > 2 && "ID" === (a = o[0]).type && k.getById && 9 === e.nodeType && O && _.relative[o[1].type]) {
                    if (e = (_.find.ID(a.matches[0].replace(xt, kt), e) || [])[0], !e) return i;
                    c && (e = e.parentNode), t = t.slice(o.shift().value.length)
                }
                for (s = ft.needsContext.test(t) ? 0 : o.length; s-- && (a = o[s], !_.relative[r = a.type]);)
                    if ((l = _.find[r]) && (n = l(a.matches[0].replace(xt, kt), yt.test(o[0].type) && h(e.parentNode) || e))) {
                        if (o.splice(s, 1), t = n.length && u(o), !t) return Q.apply(i, n), i;
                        break
                    }
            }
            return (c || S(t, d))(n, e, !O, i, !e || yt.test(t) && h(e.parentNode) || e), i
        }, k.sortStable = W.split("").sort(Y).join("") === W, k.detectDuplicates = !!E, M(), k.sortDetached = s(function(t) {
            return 1 & t.compareDocumentPosition(P.createElement("div"))
        }), s(function(t) {
            return t.innerHTML = "<a href='#'></a>", "#" === t.firstChild.getAttribute("href")
        }) || o("type|href|height|width", function(t, e, i) {
            return i ? void 0 : t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2)
        }), k.attributes && s(function(t) {
            return t.innerHTML = "<input/>", t.firstChild.setAttribute("value", ""), "" === t.firstChild.getAttribute("value")
        }) || o("value", function(t, e, i) {
            return i || "input" !== t.nodeName.toLowerCase() ? void 0 : t.defaultValue
        }), s(function(t) {
            return null == t.getAttribute("disabled")
        }) || o(et, function(t, e, i) {
            var n;
            return i ? void 0 : t[e] === !0 ? e.toLowerCase() : (n = t.getAttributeNode(e)) && n.specified ? n.value : null
        }), e
    }(t);
    ft.find = yt, ft.expr = yt.selectors, ft.expr[":"] = ft.expr.pseudos, ft.uniqueSort = ft.unique = yt.uniqueSort, ft.text = yt.getText, ft.isXMLDoc = yt.isXML, ft.contains = yt.contains;
    var bt = function(t, e, i) {
            for (var n = [], s = void 0 !== i;
                (t = t[e]) && 9 !== t.nodeType;)
                if (1 === t.nodeType) {
                    if (s && ft(t).is(i)) break;
                    n.push(t)
                } return n
        },
        xt = function(t, e) {
            for (var i = []; t; t = t.nextSibling) 1 === t.nodeType && t !== e && i.push(t);
            return i
        },
        kt = ft.expr.match.needsContext,
        _t = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
        wt = /^.[^:#\[\.,]*$/;
    ft.filter = function(t, e, i) {
        var n = e[0];
        return i && (t = ":not(" + t + ")"), 1 === e.length && 1 === n.nodeType ? ft.find.matchesSelector(n, t) ? [n] : [] : ft.find.matches(t, ft.grep(e, function(t) {
            return 1 === t.nodeType
        }))
    }, ft.fn.extend({
        find: function(t) {
            var e, i = [],
                n = this,
                s = n.length;
            if ("string" != typeof t) return this.pushStack(ft(t).filter(function() {
                for (e = 0; s > e; e++)
                    if (ft.contains(n[e], this)) return !0
            }));
            for (e = 0; s > e; e++) ft.find(t, n[e], i);
            return i = this.pushStack(s > 1 ? ft.unique(i) : i), i.selector = this.selector ? this.selector + " " + t : t, i
        },
        filter: function(t) {
            return this.pushStack(n(this, t || [], !1))
        },
        not: function(t) {
            return this.pushStack(n(this, t || [], !0))
        },
        is: function(t) {
            return !!n(this, "string" == typeof t && kt.test(t) ? ft(t) : t || [], !1).length
        }
    });
    var Ct, Tt = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
        St = ft.fn.init = function(t, e, i) {
            var n, s;
            if (!t) return this;
            if (i = i || Ct, "string" == typeof t) {
                if (n = "<" === t.charAt(0) && ">" === t.charAt(t.length - 1) && t.length >= 3 ? [null, t, null] : Tt.exec(t), !n || !n[1] && e) return !e || e.jquery ? (e || i).find(t) : this.constructor(e).find(t);
                if (n[1]) {
                    if (e = e instanceof ft ? e[0] : e, ft.merge(this, ft.parseHTML(n[1], e && e.nodeType ? e.ownerDocument || e : nt, !0)), _t.test(n[1]) && ft.isPlainObject(e))
                        for (n in e) ft.isFunction(this[n]) ? this[n](e[n]) : this.attr(n, e[n]);
                    return this
                }
                if (s = nt.getElementById(n[2]), s && s.parentNode) {
                    if (s.id !== n[2]) return Ct.find(t);
                    this.length = 1, this[0] = s
                }
                return this.context = nt, this.selector = t, this
            }
            return t.nodeType ? (this.context = this[0] = t, this.length = 1, this) : ft.isFunction(t) ? "undefined" != typeof i.ready ? i.ready(t) : t(ft) : (void 0 !== t.selector && (this.selector = t.selector, this.context = t.context), ft.makeArray(t, this))
        };
    St.prototype = ft.fn, Ct = ft(nt);
    var $t = /^(?:parents|prev(?:Until|All))/,
        At = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    ft.fn.extend({
        has: function(t) {
            var e, i = ft(t, this),
                n = i.length;
            return this.filter(function() {
                for (e = 0; n > e; e++)
                    if (ft.contains(this, i[e])) return !0
            })
        },
        closest: function(t, e) {
            for (var i, n = 0, s = this.length, o = [], a = kt.test(t) || "string" != typeof t ? ft(t, e || this.context) : 0; s > n; n++)
                for (i = this[n]; i && i !== e; i = i.parentNode)
                    if (i.nodeType < 11 && (a ? a.index(i) > -1 : 1 === i.nodeType && ft.find.matchesSelector(i, t))) {
                        o.push(i);
                        break
                    } return this.pushStack(o.length > 1 ? ft.uniqueSort(o) : o)
        },
        index: function(t) {
            return t ? "string" == typeof t ? ft.inArray(this[0], ft(t)) : ft.inArray(t.jquery ? t[0] : t, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(t, e) {
            return this.pushStack(ft.uniqueSort(ft.merge(this.get(), ft(t, e))))
        },
        addBack: function(t) {
            return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
        }
    }), ft.each({
        parent: function(t) {
            var e = t.parentNode;
            return e && 11 !== e.nodeType ? e : null
        },
        parents: function(t) {
            return bt(t, "parentNode")
        },
        parentsUntil: function(t, e, i) {
            return bt(t, "parentNode", i)
        },
        next: function(t) {
            return s(t, "nextSibling")
        },
        prev: function(t) {
            return s(t, "previousSibling")
        },
        nextAll: function(t) {
            return bt(t, "nextSibling")
        },
        prevAll: function(t) {
            return bt(t, "previousSibling")
        },
        nextUntil: function(t, e, i) {
            return bt(t, "nextSibling", i)
        },
        prevUntil: function(t, e, i) {
            return bt(t, "previousSibling", i)
        },
        siblings: function(t) {
            return xt((t.parentNode || {}).firstChild, t)
        },
        children: function(t) {
            return xt(t.firstChild)
        },
        contents: function(t) {
            return ft.nodeName(t, "iframe") ? t.contentDocument || t.contentWindow.document : ft.merge([], t.childNodes)
        }
    }, function(t, e) {
        ft.fn[t] = function(i, n) {
            var s = ft.map(this, e, i);
            return "Until" !== t.slice(-5) && (n = i), n && "string" == typeof n && (s = ft.filter(n, s)), this.length > 1 && (At[t] || (s = ft.uniqueSort(s)), $t.test(t) && (s = s.reverse())), this.pushStack(s)
        }
    });
    var Dt = /\S+/g;
    ft.Callbacks = function(t) {
        t = "string" == typeof t ? o(t) : ft.extend({}, t);
        var e, i, n, s, a = [],
            r = [],
            l = -1,
            c = function() {
                for (s = t.once, n = e = !0; r.length; l = -1)
                    for (i = r.shift(); ++l < a.length;) a[l].apply(i[0], i[1]) === !1 && t.stopOnFalse && (l = a.length, i = !1);
                t.memory || (i = !1), e = !1, s && (a = i ? [] : "")
            },
            h = {
                add: function() {
                    return a && (i && !e && (l = a.length - 1, r.push(i)), function n(e) {
                        ft.each(e, function(e, i) {
                            ft.isFunction(i) ? t.unique && h.has(i) || a.push(i) : i && i.length && "string" !== ft.type(i) && n(i)
                        })
                    }(arguments), i && !e && c()), this
                },
                remove: function() {
                    return ft.each(arguments, function(t, e) {
                        for (var i;
                            (i = ft.inArray(e, a, i)) > -1;) a.splice(i, 1), l >= i && l--
                    }), this
                },
                has: function(t) {
                    return t ? ft.inArray(t, a) > -1 : a.length > 0
                },
                empty: function() {
                    return a && (a = []), this
                },
                disable: function() {
                    return s = r = [], a = i = "", this
                },
                disabled: function() {
                    return !a
                },
                lock: function() {
                    return s = !0, i || h.disable(), this
                },
                locked: function() {
                    return !!s
                },
                fireWith: function(t, i) {
                    return s || (i = i || [], i = [t, i.slice ? i.slice() : i], r.push(i), e || c()), this
                },
                fire: function() {
                    return h.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!n
                }
            };
        return h
    }, ft.extend({
        Deferred: function(t) {
            var e = [
                    ["resolve", "done", ft.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", ft.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", ft.Callbacks("memory")]
                ],
                i = "pending",
                n = {
                    state: function() {
                        return i
                    },
                    always: function() {
                        return s.done(arguments).fail(arguments), this
                    },
                    then: function() {
                        var t = arguments;
                        return ft.Deferred(function(i) {
                            ft.each(e, function(e, o) {
                                var a = ft.isFunction(t[e]) && t[e];
                                s[o[1]](function() {
                                    var t = a && a.apply(this, arguments);
                                    t && ft.isFunction(t.promise) ? t.promise().progress(i.notify).done(i.resolve).fail(i.reject) : i[o[0] + "With"](this === n ? i.promise() : this, a ? [t] : arguments)
                                })
                            }), t = null
                        }).promise()
                    },
                    promise: function(t) {
                        return null != t ? ft.extend(t, n) : n
                    }
                },
                s = {};
            return n.pipe = n.then, ft.each(e, function(t, o) {
                var a = o[2],
                    r = o[3];
                n[o[1]] = a.add, r && a.add(function() {
                    i = r
                }, e[1 ^ t][2].disable, e[2][2].lock), s[o[0]] = function() {
                    return s[o[0] + "With"](this === s ? n : this, arguments), this
                }, s[o[0] + "With"] = a.fireWith
            }), n.promise(s), t && t.call(s, s), s
        },
        when: function(t) {
            var e, i, n, s = 0,
                o = st.call(arguments),
                a = o.length,
                r = 1 !== a || t && ft.isFunction(t.promise) ? a : 0,
                l = 1 === r ? t : ft.Deferred(),
                c = function(t, i, n) {
                    return function(s) {
                        i[t] = this, n[t] = arguments.length > 1 ? st.call(arguments) : s, n === e ? l.notifyWith(i, n) : --r || l.resolveWith(i, n)
                    }
                };
            if (a > 1)
                for (e = new Array(a), i = new Array(a), n = new Array(a); a > s; s++) o[s] && ft.isFunction(o[s].promise) ? o[s].promise().progress(c(s, i, e)).done(c(s, n, o)).fail(l.reject) : --r;
            return r || l.resolveWith(n, o), l.promise()
        }
    });
    var Et;
    ft.fn.ready = function(t) {
        return ft.ready.promise().done(t), this
    }, ft.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(t) {
            t ? ft.readyWait++ : ft.ready(!0)
        },
        ready: function(t) {
            (t === !0 ? --ft.readyWait : ft.isReady) || (ft.isReady = !0, t !== !0 && --ft.readyWait > 0 || (Et.resolveWith(nt, [ft]), ft.fn.triggerHandler && (ft(nt).triggerHandler("ready"), ft(nt).off("ready"))))
        }
    }), ft.ready.promise = function(e) {
        if (!Et)
            if (Et = ft.Deferred(), "complete" === nt.readyState || "loading" !== nt.readyState && !nt.documentElement.doScroll) t.setTimeout(ft.ready);
            else if (nt.addEventListener) nt.addEventListener("DOMContentLoaded", r), t.addEventListener("load", r);
        else {
            nt.attachEvent("onreadystatechange", r), t.attachEvent("onload", r);
            var i = !1;
            try {
                i = null == t.frameElement && nt.documentElement
            } catch (n) {}
            i && i.doScroll && ! function s() {
                if (!ft.isReady) {
                    try {
                        i.doScroll("left")
                    } catch (e) {
                        return t.setTimeout(s, 50)
                    }
                    a(), ft.ready()
                }
            }()
        }
        return Et.promise(e)
    }, ft.ready.promise();
    var Mt;
    for (Mt in ft(dt)) break;
    dt.ownFirst = "0" === Mt, dt.inlineBlockNeedsLayout = !1, ft(function() {
            var t, e, i, n;
            i = nt.getElementsByTagName("body")[0], i && i.style && (e = nt.createElement("div"), n = nt.createElement("div"), n.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", i.appendChild(n).appendChild(e), "undefined" != typeof e.style.zoom && (e.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", dt.inlineBlockNeedsLayout = t = 3 === e.offsetWidth, t && (i.style.zoom = 1)), i.removeChild(n))
        }),
        function() {
            var t = nt.createElement("div");
            dt.deleteExpando = !0;
            try {
                delete t.test
            } catch (e) {
                dt.deleteExpando = !1
            }
            t = null
        }();
    var Pt = function(t) {
            var e = ft.noData[(t.nodeName + " ").toLowerCase()],
                i = +t.nodeType || 1;
            return 1 !== i && 9 !== i ? !1 : !e || e !== !0 && t.getAttribute("classid") === e
        },
        Lt = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        Ot = /([A-Z])/g;
    ft.extend({
            cache: {},
            noData: {
                "applet ": !0,
                "embed ": !0,
                "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
            },
            hasData: function(t) {
                return t = t.nodeType ? ft.cache[t[ft.expando]] : t[ft.expando], !!t && !c(t)
            },
            data: function(t, e, i) {
                return h(t, e, i)
            },
            removeData: function(t, e) {
                return d(t, e)
            },
            _data: function(t, e, i) {
                return h(t, e, i, !0)
            },
            _removeData: function(t, e) {
                return d(t, e, !0)
            }
        }), ft.fn.extend({
            data: function(t, e) {
                var i, n, s, o = this[0],
                    a = o && o.attributes;
                if (void 0 === t) {
                    if (this.length && (s = ft.data(o), 1 === o.nodeType && !ft._data(o, "parsedAttrs"))) {
                        for (i = a.length; i--;) a[i] && (n = a[i].name, 0 === n.indexOf("data-") && (n = ft.camelCase(n.slice(5)), l(o, n, s[n])));
                        ft._data(o, "parsedAttrs", !0)
                    }
                    return s
                }
                return "object" == typeof t ? this.each(function() {
                    ft.data(this, t)
                }) : arguments.length > 1 ? this.each(function() {
                    ft.data(this, t, e)
                }) : o ? l(o, t, ft.data(o, t)) : void 0
            },
            removeData: function(t) {
                return this.each(function() {
                    ft.removeData(this, t)
                })
            }
        }), ft.extend({
            queue: function(t, e, i) {
                var n;
                return t ? (e = (e || "fx") + "queue", n = ft._data(t, e), i && (!n || ft.isArray(i) ? n = ft._data(t, e, ft.makeArray(i)) : n.push(i)), n || []) : void 0
            },
            dequeue: function(t, e) {
                e = e || "fx";
                var i = ft.queue(t, e),
                    n = i.length,
                    s = i.shift(),
                    o = ft._queueHooks(t, e),
                    a = function() {
                        ft.dequeue(t, e)
                    };
                "inprogress" === s && (s = i.shift(), n--), s && ("fx" === e && i.unshift("inprogress"), delete o.stop, s.call(t, a, o)), !n && o && o.empty.fire()
            },
            _queueHooks: function(t, e) {
                var i = e + "queueHooks";
                return ft._data(t, i) || ft._data(t, i, {
                    empty: ft.Callbacks("once memory").add(function() {
                        ft._removeData(t, e + "queue"), ft._removeData(t, i)
                    })
                })
            }
        }), ft.fn.extend({
            queue: function(t, e) {
                var i = 2;
                return "string" != typeof t && (e = t, t = "fx", i--), arguments.length < i ? ft.queue(this[0], t) : void 0 === e ? this : this.each(function() {
                    var i = ft.queue(this, t, e);
                    ft._queueHooks(this, t), "fx" === t && "inprogress" !== i[0] && ft.dequeue(this, t)
                })
            },
            dequeue: function(t) {
                return this.each(function() {
                    ft.dequeue(this, t)
                })
            },
            clearQueue: function(t) {
                return this.queue(t || "fx", [])
            },
            promise: function(t, e) {
                var i, n = 1,
                    s = ft.Deferred(),
                    o = this,
                    a = this.length,
                    r = function() {
                        --n || s.resolveWith(o, [o])
                    };
                for ("string" != typeof t && (e = t, t = void 0), t = t || "fx"; a--;) i = ft._data(o[a], t + "queueHooks"), i && i.empty && (n++, i.empty.add(r));
                return r(), s.promise(e)
            }
        }),
        function() {
            var t;
            dt.shrinkWrapBlocks = function() {
                if (null != t) return t;
                t = !1;
                var e, i, n;
                return i = nt.getElementsByTagName("body")[0], i && i.style ? (e = nt.createElement("div"), n = nt.createElement("div"), n.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", i.appendChild(n).appendChild(e), "undefined" != typeof e.style.zoom && (e.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", e.appendChild(nt.createElement("div")).style.width = "5px", t = 3 !== e.offsetWidth), i.removeChild(n), t) : void 0
            }
        }();
    var Ft = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        Nt = new RegExp("^(?:([+-])=|)(" + Ft + ")([a-z%]*)$", "i"),
        Rt = ["Top", "Right", "Bottom", "Left"],
        jt = function(t, e) {
            return t = e || t, "none" === ft.css(t, "display") || !ft.contains(t.ownerDocument, t)
        },
        Wt = function(t, e, i, n, s, o, a) {
            var r = 0,
                l = t.length,
                c = null == i;
            if ("object" === ft.type(i)) {
                s = !0;
                for (r in i) Wt(t, e, r, i[r], !0, o, a)
            } else if (void 0 !== n && (s = !0, ft.isFunction(n) || (a = !0), c && (a ? (e.call(t, n), e = null) : (c = e, e = function(t, e, i) {
                    return c.call(ft(t), i)
                })), e))
                for (; l > r; r++) e(t[r], i, a ? n : n.call(t[r], r, e(t[r], i)));
            return s ? t : c ? e.call(t) : l ? e(t[0], i) : o
        },
        It = /^(?:checkbox|radio)$/i,
        Ht = /<([\w:-]+)/,
        Bt = /^$|\/(?:java|ecma)script/i,
        zt = /^\s+/,
        qt = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|dialog|figcaption|figure|footer|header|hgroup|main|mark|meter|nav|output|picture|progress|section|summary|template|time|video";
    ! function() {
        var t = nt.createElement("div"),
            e = nt.createDocumentFragment(),
            i = nt.createElement("input");
        t.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", dt.leadingWhitespace = 3 === t.firstChild.nodeType, dt.tbody = !t.getElementsByTagName("tbody").length, dt.htmlSerialize = !!t.getElementsByTagName("link").length, dt.html5Clone = "<:nav></:nav>" !== nt.createElement("nav").cloneNode(!0).outerHTML, i.type = "checkbox", i.checked = !0, e.appendChild(i), dt.appendChecked = i.checked, t.innerHTML = "<textarea>x</textarea>", dt.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue, e.appendChild(t), i = nt.createElement("input"), i.setAttribute("type", "radio"), i.setAttribute("checked", "checked"), i.setAttribute("name", "t"), t.appendChild(i), dt.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, dt.noCloneEvent = !!t.addEventListener, t[ft.expando] = 1, dt.attributes = !t.getAttribute(ft.expando)
    }();
    var Ut = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        legend: [1, "<fieldset>", "</fieldset>"],
        area: [1, "<map>", "</map>"],
        param: [1, "<object>", "</object>"],
        thead: [1, "<table>", "</table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: dt.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
    };
    Ut.optgroup = Ut.option, Ut.tbody = Ut.tfoot = Ut.colgroup = Ut.caption = Ut.thead, Ut.th = Ut.td;
    var Yt = /<|&#?\w+;/,
        Vt = /<tbody/i;
    ! function() {
        var e, i, n = nt.createElement("div");
        for (e in {
                submit: !0,
                change: !0,
                focusin: !0
            }) i = "on" + e, (dt[e] = i in t) || (n.setAttribute(i, "t"), dt[e] = n.attributes[i].expando === !1);
        n = null
    }();
    var Xt = /^(?:input|select|textarea)$/i,
        Jt = /^key/,
        Gt = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        Kt = /^(?:focusinfocus|focusoutblur)$/,
        Qt = /^([^.]*)(?:\.(.+)|)/;
    ft.event = {
        global: {},
        add: function(t, e, i, n, s) {
            var o, a, r, l, c, h, d, u, f, p, m, g = ft._data(t);
            if (g) {
                for (i.handler && (l = i, i = l.handler, s = l.selector), i.guid || (i.guid = ft.guid++), (a = g.events) || (a = g.events = {}), (h = g.handle) || (h = g.handle = function(t) {
                        return "undefined" == typeof ft || t && ft.event.triggered === t.type ? void 0 : ft.event.dispatch.apply(h.elem, arguments)
                    }, h.elem = t), e = (e || "").match(Dt) || [""], r = e.length; r--;) o = Qt.exec(e[r]) || [], f = m = o[1], p = (o[2] || "").split(".").sort(), f && (c = ft.event.special[f] || {}, f = (s ? c.delegateType : c.bindType) || f, c = ft.event.special[f] || {}, d = ft.extend({
                    type: f,
                    origType: m,
                    data: n,
                    handler: i,
                    guid: i.guid,
                    selector: s,
                    needsContext: s && ft.expr.match.needsContext.test(s),
                    namespace: p.join(".")
                }, l), (u = a[f]) || (u = a[f] = [], u.delegateCount = 0, c.setup && c.setup.call(t, n, p, h) !== !1 || (t.addEventListener ? t.addEventListener(f, h, !1) : t.attachEvent && t.attachEvent("on" + f, h))), c.add && (c.add.call(t, d), d.handler.guid || (d.handler.guid = i.guid)), s ? u.splice(u.delegateCount++, 0, d) : u.push(d), ft.event.global[f] = !0);
                t = null
            }
        },
        remove: function(t, e, i, n, s) {
            var o, a, r, l, c, h, d, u, f, p, m, g = ft.hasData(t) && ft._data(t);
            if (g && (h = g.events)) {
                for (e = (e || "").match(Dt) || [""], c = e.length; c--;)
                    if (r = Qt.exec(e[c]) || [], f = m = r[1], p = (r[2] || "").split(".").sort(), f) {
                        for (d = ft.event.special[f] || {}, f = (n ? d.delegateType : d.bindType) || f, u = h[f] || [], r = r[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), l = o = u.length; o--;) a = u[o], !s && m !== a.origType || i && i.guid !== a.guid || r && !r.test(a.namespace) || n && n !== a.selector && ("**" !== n || !a.selector) || (u.splice(o, 1), a.selector && u.delegateCount--, d.remove && d.remove.call(t, a));
                        l && !u.length && (d.teardown && d.teardown.call(t, p, g.handle) !== !1 || ft.removeEvent(t, f, g.handle), delete h[f])
                    } else
                        for (f in h) ft.event.remove(t, f + e[c], i, n, !0);
                ft.isEmptyObject(h) && (delete g.handle, ft._removeData(t, "events"))
            }
        },
        trigger: function(e, i, n, s) {
            var o, a, r, l, c, h, d, u = [n || nt],
                f = ht.call(e, "type") ? e.type : e,
                p = ht.call(e, "namespace") ? e.namespace.split(".") : [];
            if (r = h = n = n || nt, 3 !== n.nodeType && 8 !== n.nodeType && !Kt.test(f + ft.event.triggered) && (f.indexOf(".") > -1 && (p = f.split("."), f = p.shift(), p.sort()), a = f.indexOf(":") < 0 && "on" + f, e = e[ft.expando] ? e : new ft.Event(f, "object" == typeof e && e), e.isTrigger = s ? 2 : 3, e.namespace = p.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = n), i = null == i ? [e] : ft.makeArray(i, [e]), c = ft.event.special[f] || {}, s || !c.trigger || c.trigger.apply(n, i) !== !1)) {
                if (!s && !c.noBubble && !ft.isWindow(n)) {
                    for (l = c.delegateType || f, Kt.test(l + f) || (r = r.parentNode); r; r = r.parentNode) u.push(r), h = r;
                    h === (n.ownerDocument || nt) && u.push(h.defaultView || h.parentWindow || t)
                }
                for (d = 0;
                    (r = u[d++]) && !e.isPropagationStopped();) e.type = d > 1 ? l : c.bindType || f, o = (ft._data(r, "events") || {})[e.type] && ft._data(r, "handle"), o && o.apply(r, i), o = a && r[a], o && o.apply && Pt(r) && (e.result = o.apply(r, i), e.result === !1 && e.preventDefault());
                if (e.type = f, !s && !e.isDefaultPrevented() && (!c._default || c._default.apply(u.pop(), i) === !1) && Pt(n) && a && n[f] && !ft.isWindow(n)) {
                    h = n[a], h && (n[a] = null), ft.event.triggered = f;
                    try {
                        n[f]()
                    } catch (m) {}
                    ft.event.triggered = void 0, h && (n[a] = h)
                }
                return e.result
            }
        },
        dispatch: function(t) {
            t = ft.event.fix(t);
            var e, i, n, s, o, a = [],
                r = st.call(arguments),
                l = (ft._data(this, "events") || {})[t.type] || [],
                c = ft.event.special[t.type] || {};
            if (r[0] = t, t.delegateTarget = this, !c.preDispatch || c.preDispatch.call(this, t) !== !1) {
                for (a = ft.event.handlers.call(this, t, l), e = 0;
                    (s = a[e++]) && !t.isPropagationStopped();)
                    for (t.currentTarget = s.elem, i = 0;
                        (o = s.handlers[i++]) && !t.isImmediatePropagationStopped();) t.rnamespace && !t.rnamespace.test(o.namespace) || (t.handleObj = o, t.data = o.data, n = ((ft.event.special[o.origType] || {}).handle || o.handler).apply(s.elem, r), void 0 !== n && (t.result = n) === !1 && (t.preventDefault(), t.stopPropagation()));
                return c.postDispatch && c.postDispatch.call(this, t), t.result
            }
        },
        handlers: function(t, e) {
            var i, n, s, o, a = [],
                r = e.delegateCount,
                l = t.target;
            if (r && l.nodeType && ("click" !== t.type || isNaN(t.button) || t.button < 1))
                for (; l != this; l = l.parentNode || this)
                    if (1 === l.nodeType && (l.disabled !== !0 || "click" !== t.type)) {
                        for (n = [], i = 0; r > i; i++) o = e[i], s = o.selector + " ", void 0 === n[s] && (n[s] = o.needsContext ? ft(s, this).index(l) > -1 : ft.find(s, this, null, [l]).length), n[s] && n.push(o);
                        n.length && a.push({
                            elem: l,
                            handlers: n
                        })
                    } return r < e.length && a.push({
                elem: this,
                handlers: e.slice(r)
            }), a
        },
        fix: function(t) {
            if (t[ft.expando]) return t;
            var e, i, n, s = t.type,
                o = t,
                a = this.fixHooks[s];
            for (a || (this.fixHooks[s] = a = Gt.test(s) ? this.mouseHooks : Jt.test(s) ? this.keyHooks : {}), n = a.props ? this.props.concat(a.props) : this.props, t = new ft.Event(o), e = n.length; e--;) i = n[e], t[i] = o[i];
            return t.target || (t.target = o.srcElement || nt), 3 === t.target.nodeType && (t.target = t.target.parentNode), t.metaKey = !!t.metaKey, a.filter ? a.filter(t, o) : t
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(t, e) {
                return null == t.which && (t.which = null != e.charCode ? e.charCode : e.keyCode), t
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(t, e) {
                var i, n, s, o = e.button,
                    a = e.fromElement;
                return null == t.pageX && null != e.clientX && (n = t.target.ownerDocument || nt, s = n.documentElement, i = n.body, t.pageX = e.clientX + (s && s.scrollLeft || i && i.scrollLeft || 0) - (s && s.clientLeft || i && i.clientLeft || 0), t.pageY = e.clientY + (s && s.scrollTop || i && i.scrollTop || 0) - (s && s.clientTop || i && i.clientTop || 0)), !t.relatedTarget && a && (t.relatedTarget = a === t.target ? e.toElement : a), t.which || void 0 === o || (t.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0), t
            }
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== x() && this.focus) try {
                        return this.focus(), !1
                    } catch (t) {}
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === x() && this.blur ? (this.blur(), !1) : void 0
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return ft.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0
                },
                _default: function(t) {
                    return ft.nodeName(t.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(t) {
                    void 0 !== t.result && t.originalEvent && (t.originalEvent.returnValue = t.result)
                }
            }
        },
        simulate: function(t, e, i) {
            var n = ft.extend(new ft.Event, i, {
                type: t,
                isSimulated: !0
            });
            ft.event.trigger(n, null, e), n.isDefaultPrevented() && i.preventDefault()
        }
    }, ft.removeEvent = nt.removeEventListener ? function(t, e, i) {
        t.removeEventListener && t.removeEventListener(e, i)
    } : function(t, e, i) {
        var n = "on" + e;
        t.detachEvent && ("undefined" == typeof t[n] && (t[n] = null), t.detachEvent(n, i))
    }, ft.Event = function(t, e) {
        return this instanceof ft.Event ? (t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || void 0 === t.defaultPrevented && t.returnValue === !1 ? y : b) : this.type = t, e && ft.extend(this, e), this.timeStamp = t && t.timeStamp || ft.now(), void(this[ft.expando] = !0)) : new ft.Event(t, e)
    }, ft.Event.prototype = {
        constructor: ft.Event,
        isDefaultPrevented: b,
        isPropagationStopped: b,
        isImmediatePropagationStopped: b,
        preventDefault: function() {
            var t = this.originalEvent;
            this.isDefaultPrevented = y, t && (t.preventDefault ? t.preventDefault() : t.returnValue = !1)
        },
        stopPropagation: function() {
            var t = this.originalEvent;
            this.isPropagationStopped = y, t && !this.isSimulated && (t.stopPropagation && t.stopPropagation(), t.cancelBubble = !0)
        },
        stopImmediatePropagation: function() {
            var t = this.originalEvent;
            this.isImmediatePropagationStopped = y, t && t.stopImmediatePropagation && t.stopImmediatePropagation(), this.stopPropagation()
        }
    }, ft.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(t, e) {
        ft.event.special[t] = {
            delegateType: e,
            bindType: e,
            handle: function(t) {
                var i, n = this,
                    s = t.relatedTarget,
                    o = t.handleObj;
                return s && (s === n || ft.contains(n, s)) || (t.type = o.origType, i = o.handler.apply(this, arguments), t.type = e), i
            }
        }
    }), dt.submit || (ft.event.special.submit = {
        setup: function() {
            return ft.nodeName(this, "form") ? !1 : void ft.event.add(this, "click._submit keypress._submit", function(t) {
                var e = t.target,
                    i = ft.nodeName(e, "input") || ft.nodeName(e, "button") ? ft.prop(e, "form") : void 0;
                i && !ft._data(i, "submit") && (ft.event.add(i, "submit._submit", function(t) {
                    t._submitBubble = !0
                }), ft._data(i, "submit", !0))
            })
        },
        postDispatch: function(t) {
            t._submitBubble && (delete t._submitBubble, this.parentNode && !t.isTrigger && ft.event.simulate("submit", this.parentNode, t))
        },
        teardown: function() {
            return ft.nodeName(this, "form") ? !1 : void ft.event.remove(this, "._submit")
        }
    }), dt.change || (ft.event.special.change = {
        setup: function() {
            return Xt.test(this.nodeName) ? ("checkbox" !== this.type && "radio" !== this.type || (ft.event.add(this, "propertychange._change", function(t) {
                "checked" === t.originalEvent.propertyName && (this._justChanged = !0)
            }), ft.event.add(this, "click._change", function(t) {
                this._justChanged && !t.isTrigger && (this._justChanged = !1), ft.event.simulate("change", this, t)
            })), !1) : void ft.event.add(this, "beforeactivate._change", function(t) {
                var e = t.target;
                Xt.test(e.nodeName) && !ft._data(e, "change") && (ft.event.add(e, "change._change", function(t) {
                    !this.parentNode || t.isSimulated || t.isTrigger || ft.event.simulate("change", this.parentNode, t)
                }), ft._data(e, "change", !0))
            })
        },
        handle: function(t) {
            var e = t.target;
            return this !== e || t.isSimulated || t.isTrigger || "radio" !== e.type && "checkbox" !== e.type ? t.handleObj.handler.apply(this, arguments) : void 0
        },
        teardown: function() {
            return ft.event.remove(this, "._change"), !Xt.test(this.nodeName)
        }
    }), dt.focusin || ft.each({
        focus: "focusin",
        blur: "focusout"
    }, function(t, e) {
        var i = function(t) {
            ft.event.simulate(e, t.target, ft.event.fix(t))
        };
        ft.event.special[e] = {
            setup: function() {
                var n = this.ownerDocument || this,
                    s = ft._data(n, e);
                s || n.addEventListener(t, i, !0), ft._data(n, e, (s || 0) + 1)
            },
            teardown: function() {
                var n = this.ownerDocument || this,
                    s = ft._data(n, e) - 1;
                s ? ft._data(n, e, s) : (n.removeEventListener(t, i, !0), ft._removeData(n, e))
            }
        }
    }), ft.fn.extend({
        on: function(t, e, i, n) {
            return k(this, t, e, i, n)
        },
        one: function(t, e, i, n) {
            return k(this, t, e, i, n, 1)
        },
        off: function(t, e, i) {
            var n, s;
            if (t && t.preventDefault && t.handleObj) return n = t.handleObj, ft(t.delegateTarget).off(n.namespace ? n.origType + "." + n.namespace : n.origType, n.selector, n.handler), this;
            if ("object" == typeof t) {
                for (s in t) this.off(s, e, t[s]);
                return this
            }
            return e !== !1 && "function" != typeof e || (i = e, e = void 0), i === !1 && (i = b), this.each(function() {
                ft.event.remove(this, t, i, e)
            })
        },
        trigger: function(t, e) {
            return this.each(function() {
                ft.event.trigger(t, e, this)
            })
        },
        triggerHandler: function(t, e) {
            var i = this[0];
            return i ? ft.event.trigger(t, e, i, !0) : void 0
        }
    });
    var Zt = / jQuery\d+="(?:null|\d+)"/g,
        te = new RegExp("<(?:" + qt + ")[\\s/>]", "i"),
        ee = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
        ie = /<script|<style|<link/i,
        ne = /checked\s*(?:[^=]|=\s*.checked.)/i,
        se = /^true\/(.*)/,
        oe = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        ae = f(nt),
        re = ae.appendChild(nt.createElement("div"));
    ft.extend({
        htmlPrefilter: function(t) {
            return t.replace(ee, "<$1></$2>")
        },
        clone: function(t, e, i) {
            var n, s, o, a, r, l = ft.contains(t.ownerDocument, t);
            if (dt.html5Clone || ft.isXMLDoc(t) || !te.test("<" + t.nodeName + ">") ? o = t.cloneNode(!0) : (re.innerHTML = t.outerHTML, re.removeChild(o = re.firstChild)), !(dt.noCloneEvent && dt.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || ft.isXMLDoc(t)))
                for (n = p(o), r = p(t), a = 0; null != (s = r[a]); ++a) n[a] && S(s, n[a]);
            if (e)
                if (i)
                    for (r = r || p(t), n = n || p(o), a = 0; null != (s = r[a]); a++) T(s, n[a]);
                else T(t, o);
            return n = p(o, "script"), n.length > 0 && m(n, !l && p(t, "script")), n = r = s = null, o
        },
        cleanData: function(t, e) {
            for (var i, n, s, o, a = 0, r = ft.expando, l = ft.cache, c = dt.attributes, h = ft.event.special; null != (i = t[a]); a++)
                if ((e || Pt(i)) && (s = i[r], o = s && l[s])) {
                    if (o.events)
                        for (n in o.events) h[n] ? ft.event.remove(i, n) : ft.removeEvent(i, n, o.handle);
                    l[s] && (delete l[s], c || "undefined" == typeof i.removeAttribute ? i[r] = void 0 : i.removeAttribute(r), it.push(s))
                }
        }
    }), ft.fn.extend({
        domManip: $,
        detach: function(t) {
            return A(this, t, !0)
        },
        remove: function(t) {
            return A(this, t)
        },
        text: function(t) {
            return Wt(this, function(t) {
                return void 0 === t ? ft.text(this) : this.empty().append((this[0] && this[0].ownerDocument || nt).createTextNode(t))
            }, null, t, arguments.length)
        },
        append: function() {
            return $(this, arguments, function(t) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var e = _(this, t);
                    e.appendChild(t)
                }
            })
        },
        prepend: function() {
            return $(this, arguments, function(t) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var e = _(this, t);
                    e.insertBefore(t, e.firstChild)
                }
            })
        },
        before: function() {
            return $(this, arguments, function(t) {
                this.parentNode && this.parentNode.insertBefore(t, this)
            })
        },
        after: function() {
            return $(this, arguments, function(t) {
                this.parentNode && this.parentNode.insertBefore(t, this.nextSibling)
            })
        },
        empty: function() {
            for (var t, e = 0; null != (t = this[e]); e++) {
                for (1 === t.nodeType && ft.cleanData(p(t, !1)); t.firstChild;) t.removeChild(t.firstChild);
                t.options && ft.nodeName(t, "select") && (t.options.length = 0)
            }
            return this
        },
        clone: function(t, e) {
            return t = null == t ? !1 : t, e = null == e ? t : e, this.map(function() {
                return ft.clone(this, t, e)
            })
        },
        html: function(t) {
            return Wt(this, function(t) {
                var e = this[0] || {},
                    i = 0,
                    n = this.length;
                if (void 0 === t) return 1 === e.nodeType ? e.innerHTML.replace(Zt, "") : void 0;
                if ("string" == typeof t && !ie.test(t) && (dt.htmlSerialize || !te.test(t)) && (dt.leadingWhitespace || !zt.test(t)) && !Ut[(Ht.exec(t) || ["", ""])[1].toLowerCase()]) {
                    t = ft.htmlPrefilter(t);
                    try {
                        for (; n > i; i++) e = this[i] || {}, 1 === e.nodeType && (ft.cleanData(p(e, !1)), e.innerHTML = t);
                        e = 0
                    } catch (s) {}
                }
                e && this.empty().append(t)
            }, null, t, arguments.length)
        },
        replaceWith: function() {
            var t = [];
            return $(this, arguments, function(e) {
                var i = this.parentNode;
                ft.inArray(this, t) < 0 && (ft.cleanData(p(this)), i && i.replaceChild(e, this))
            }, t)
        }
    }), ft.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(t, e) {
        ft.fn[t] = function(t) {
            for (var i, n = 0, s = [], o = ft(t), a = o.length - 1; a >= n; n++) i = n === a ? this : this.clone(!0), ft(o[n])[e](i), at.apply(s, i.get());
            return this.pushStack(s)
        }
    });
    var le, ce = {
            HTML: "block",
            BODY: "block"
        },
        he = /^margin/,
        de = new RegExp("^(" + Ft + ")(?!px)[a-z%]+$", "i"),
        ue = function(t, e, i, n) {
            var s, o, a = {};
            for (o in e) a[o] = t.style[o], t.style[o] = e[o];
            s = i.apply(t, n || []);
            for (o in e) t.style[o] = a[o];
            return s
        },
        fe = nt.documentElement;
    ! function() {
        function e() {
            var e, h, d = nt.documentElement;
            d.appendChild(l), c.style.cssText = "-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", i = s = r = !1, n = a = !0, t.getComputedStyle && (h = t.getComputedStyle(c), i = "1%" !== (h || {}).top, r = "2px" === (h || {}).marginLeft, s = "4px" === (h || {
                width: "4px"
            }).width, c.style.marginRight = "50%", n = "4px" === (h || {
                marginRight: "4px"
            }).marginRight, e = c.appendChild(nt.createElement("div")), e.style.cssText = c.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", e.style.marginRight = e.style.width = "0", c.style.width = "1px", a = !parseFloat((t.getComputedStyle(e) || {}).marginRight), c.removeChild(e)), c.style.display = "none", o = 0 === c.getClientRects().length, o && (c.style.display = "", c.innerHTML = "<table><tr><td></td><td>t</td></tr></table>",
                e = c.getElementsByTagName("td"), e[0].style.cssText = "margin:0;border:0;padding:0;display:none", o = 0 === e[0].offsetHeight, o && (e[0].style.display = "", e[1].style.display = "none", o = 0 === e[0].offsetHeight)), d.removeChild(l)
        }
        var i, n, s, o, a, r, l = nt.createElement("div"),
            c = nt.createElement("div");
        c.style && (c.style.cssText = "float:left;opacity:.5", dt.opacity = "0.5" === c.style.opacity, dt.cssFloat = !!c.style.cssFloat, c.style.backgroundClip = "content-box", c.cloneNode(!0).style.backgroundClip = "", dt.clearCloneStyle = "content-box" === c.style.backgroundClip, l = nt.createElement("div"), l.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", c.innerHTML = "", l.appendChild(c), dt.boxSizing = "" === c.style.boxSizing || "" === c.style.MozBoxSizing || "" === c.style.WebkitBoxSizing, ft.extend(dt, {
            reliableHiddenOffsets: function() {
                return null == i && e(), o
            },
            boxSizingReliable: function() {
                return null == i && e(), s
            },
            pixelMarginRight: function() {
                return null == i && e(), n
            },
            pixelPosition: function() {
                return null == i && e(), i
            },
            reliableMarginRight: function() {
                return null == i && e(), a
            },
            reliableMarginLeft: function() {
                return null == i && e(), r
            }
        }))
    }();
    var pe, me, ge = /^(top|right|bottom|left)$/;
    t.getComputedStyle ? (pe = function(e) {
        var i = e.ownerDocument.defaultView;
        return i && i.opener || (i = t), i.getComputedStyle(e)
    }, me = function(t, e, i) {
        var n, s, o, a, r = t.style;
        return i = i || pe(t), a = i ? i.getPropertyValue(e) || i[e] : void 0, "" !== a && void 0 !== a || ft.contains(t.ownerDocument, t) || (a = ft.style(t, e)), i && !dt.pixelMarginRight() && de.test(a) && he.test(e) && (n = r.width, s = r.minWidth, o = r.maxWidth, r.minWidth = r.maxWidth = r.width = a, a = i.width, r.width = n, r.minWidth = s, r.maxWidth = o), void 0 === a ? a : a + ""
    }) : fe.currentStyle && (pe = function(t) {
        return t.currentStyle
    }, me = function(t, e, i) {
        var n, s, o, a, r = t.style;
        return i = i || pe(t), a = i ? i[e] : void 0, null == a && r && r[e] && (a = r[e]), de.test(a) && !ge.test(e) && (n = r.left, s = t.runtimeStyle, o = s && s.left, o && (s.left = t.currentStyle.left), r.left = "fontSize" === e ? "1em" : a, a = r.pixelLeft + "px", r.left = n, o && (s.left = o)), void 0 === a ? a : a + "" || "auto"
    });
    var ve = /alpha\([^)]*\)/i,
        ye = /opacity\s*=\s*([^)]*)/i,
        be = /^(none|table(?!-c[ea]).+)/,
        xe = new RegExp("^(" + Ft + ")(.*)$", "i"),
        ke = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        _e = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        we = ["Webkit", "O", "Moz", "ms"],
        Ce = nt.createElement("div").style;
    ft.extend({
        cssHooks: {
            opacity: {
                get: function(t, e) {
                    if (e) {
                        var i = me(t, "opacity");
                        return "" === i ? "1" : i
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": dt.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function(t, e, i, n) {
            if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
                var s, o, a, r = ft.camelCase(e),
                    l = t.style;
                if (e = ft.cssProps[r] || (ft.cssProps[r] = P(r) || r), a = ft.cssHooks[e] || ft.cssHooks[r], void 0 === i) return a && "get" in a && void 0 !== (s = a.get(t, !1, n)) ? s : l[e];
                if (o = typeof i, "string" === o && (s = Nt.exec(i)) && s[1] && (i = u(t, e, s), o = "number"), null != i && i === i && ("number" === o && (i += s && s[3] || (ft.cssNumber[r] ? "" : "px")), dt.clearCloneStyle || "" !== i || 0 !== e.indexOf("background") || (l[e] = "inherit"), !(a && "set" in a && void 0 === (i = a.set(t, i, n))))) try {
                    l[e] = i
                } catch (c) {}
            }
        },
        css: function(t, e, i, n) {
            var s, o, a, r = ft.camelCase(e);
            return e = ft.cssProps[r] || (ft.cssProps[r] = P(r) || r), a = ft.cssHooks[e] || ft.cssHooks[r], a && "get" in a && (o = a.get(t, !0, i)), void 0 === o && (o = me(t, e, n)), "normal" === o && e in _e && (o = _e[e]), "" === i || i ? (s = parseFloat(o), i === !0 || isFinite(s) ? s || 0 : o) : o
        }
    }), ft.each(["height", "width"], function(t, e) {
        ft.cssHooks[e] = {
            get: function(t, i, n) {
                return i ? be.test(ft.css(t, "display")) && 0 === t.offsetWidth ? ue(t, ke, function() {
                    return N(t, e, n)
                }) : N(t, e, n) : void 0
            },
            set: function(t, i, n) {
                var s = n && pe(t);
                return O(t, i, n ? F(t, e, n, dt.boxSizing && "border-box" === ft.css(t, "boxSizing", !1, s), s) : 0)
            }
        }
    }), dt.opacity || (ft.cssHooks.opacity = {
        get: function(t, e) {
            return ye.test((e && t.currentStyle ? t.currentStyle.filter : t.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : e ? "1" : ""
        },
        set: function(t, e) {
            var i = t.style,
                n = t.currentStyle,
                s = ft.isNumeric(e) ? "alpha(opacity=" + 100 * e + ")" : "",
                o = n && n.filter || i.filter || "";
            i.zoom = 1, (e >= 1 || "" === e) && "" === ft.trim(o.replace(ve, "")) && i.removeAttribute && (i.removeAttribute("filter"), "" === e || n && !n.filter) || (i.filter = ve.test(o) ? o.replace(ve, s) : o + " " + s)
        }
    }), ft.cssHooks.marginRight = M(dt.reliableMarginRight, function(t, e) {
        return e ? ue(t, {
            display: "inline-block"
        }, me, [t, "marginRight"]) : void 0
    }), ft.cssHooks.marginLeft = M(dt.reliableMarginLeft, function(t, e) {
        return e ? (parseFloat(me(t, "marginLeft")) || (ft.contains(t.ownerDocument, t) ? t.getBoundingClientRect().left - ue(t, {
            marginLeft: 0
        }, function() {
            return t.getBoundingClientRect().left
        }) : 0)) + "px" : void 0
    }), ft.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(t, e) {
        ft.cssHooks[t + e] = {
            expand: function(i) {
                for (var n = 0, s = {}, o = "string" == typeof i ? i.split(" ") : [i]; 4 > n; n++) s[t + Rt[n] + e] = o[n] || o[n - 2] || o[0];
                return s
            }
        }, he.test(t) || (ft.cssHooks[t + e].set = O)
    }), ft.fn.extend({
        css: function(t, e) {
            return Wt(this, function(t, e, i) {
                var n, s, o = {},
                    a = 0;
                if (ft.isArray(e)) {
                    for (n = pe(t), s = e.length; s > a; a++) o[e[a]] = ft.css(t, e[a], !1, n);
                    return o
                }
                return void 0 !== i ? ft.style(t, e, i) : ft.css(t, e)
            }, t, e, arguments.length > 1)
        },
        show: function() {
            return L(this, !0)
        },
        hide: function() {
            return L(this)
        },
        toggle: function(t) {
            return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each(function() {
                jt(this) ? ft(this).show() : ft(this).hide()
            })
        }
    }), ft.Tween = R, R.prototype = {
        constructor: R,
        init: function(t, e, i, n, s, o) {
            this.elem = t, this.prop = i, this.easing = s || ft.easing._default, this.options = e, this.start = this.now = this.cur(), this.end = n, this.unit = o || (ft.cssNumber[i] ? "" : "px")
        },
        cur: function() {
            var t = R.propHooks[this.prop];
            return t && t.get ? t.get(this) : R.propHooks._default.get(this)
        },
        run: function(t) {
            var e, i = R.propHooks[this.prop];
            return this.options.duration ? this.pos = e = ft.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : this.pos = e = t, this.now = (this.end - this.start) * e + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), i && i.set ? i.set(this) : R.propHooks._default.set(this), this
        }
    }, R.prototype.init.prototype = R.prototype, R.propHooks = {
        _default: {
            get: function(t) {
                var e;
                return 1 !== t.elem.nodeType || null != t.elem[t.prop] && null == t.elem.style[t.prop] ? t.elem[t.prop] : (e = ft.css(t.elem, t.prop, ""), e && "auto" !== e ? e : 0)
            },
            set: function(t) {
                ft.fx.step[t.prop] ? ft.fx.step[t.prop](t) : 1 !== t.elem.nodeType || null == t.elem.style[ft.cssProps[t.prop]] && !ft.cssHooks[t.prop] ? t.elem[t.prop] = t.now : ft.style(t.elem, t.prop, t.now + t.unit)
            }
        }
    }, R.propHooks.scrollTop = R.propHooks.scrollLeft = {
        set: function(t) {
            t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now)
        }
    }, ft.easing = {
        linear: function(t) {
            return t
        },
        swing: function(t) {
            return .5 - Math.cos(t * Math.PI) / 2
        },
        _default: "swing"
    }, ft.fx = R.prototype.init, ft.fx.step = {};
    var Te, Se, $e = /^(?:toggle|show|hide)$/,
        Ae = /queueHooks$/;
    ft.Animation = ft.extend(z, {
            tweeners: {
                "*": [function(t, e) {
                    var i = this.createTween(t, e);
                    return u(i.elem, t, Nt.exec(e), i), i
                }]
            },
            tweener: function(t, e) {
                ft.isFunction(t) ? (e = t, t = ["*"]) : t = t.match(Dt);
                for (var i, n = 0, s = t.length; s > n; n++) i = t[n], z.tweeners[i] = z.tweeners[i] || [], z.tweeners[i].unshift(e)
            },
            prefilters: [H],
            prefilter: function(t, e) {
                e ? z.prefilters.unshift(t) : z.prefilters.push(t)
            }
        }), ft.speed = function(t, e, i) {
            var n = t && "object" == typeof t ? ft.extend({}, t) : {
                complete: i || !i && e || ft.isFunction(t) && t,
                duration: t,
                easing: i && e || e && !ft.isFunction(e) && e
            };
            return n.duration = ft.fx.off ? 0 : "number" == typeof n.duration ? n.duration : n.duration in ft.fx.speeds ? ft.fx.speeds[n.duration] : ft.fx.speeds._default, null != n.queue && n.queue !== !0 || (n.queue = "fx"), n.old = n.complete, n.complete = function() {
                ft.isFunction(n.old) && n.old.call(this), n.queue && ft.dequeue(this, n.queue)
            }, n
        }, ft.fn.extend({
            fadeTo: function(t, e, i, n) {
                return this.filter(jt).css("opacity", 0).show().end().animate({
                    opacity: e
                }, t, i, n)
            },
            animate: function(t, e, i, n) {
                var s = ft.isEmptyObject(t),
                    o = ft.speed(e, i, n),
                    a = function() {
                        var e = z(this, ft.extend({}, t), o);
                        (s || ft._data(this, "finish")) && e.stop(!0)
                    };
                return a.finish = a, s || o.queue === !1 ? this.each(a) : this.queue(o.queue, a)
            },
            stop: function(t, e, i) {
                var n = function(t) {
                    var e = t.stop;
                    delete t.stop, e(i)
                };
                return "string" != typeof t && (i = e, e = t, t = void 0), e && t !== !1 && this.queue(t || "fx", []), this.each(function() {
                    var e = !0,
                        s = null != t && t + "queueHooks",
                        o = ft.timers,
                        a = ft._data(this);
                    if (s) a[s] && a[s].stop && n(a[s]);
                    else
                        for (s in a) a[s] && a[s].stop && Ae.test(s) && n(a[s]);
                    for (s = o.length; s--;) o[s].elem !== this || null != t && o[s].queue !== t || (o[s].anim.stop(i), e = !1, o.splice(s, 1));
                    !e && i || ft.dequeue(this, t)
                })
            },
            finish: function(t) {
                return t !== !1 && (t = t || "fx"), this.each(function() {
                    var e, i = ft._data(this),
                        n = i[t + "queue"],
                        s = i[t + "queueHooks"],
                        o = ft.timers,
                        a = n ? n.length : 0;
                    for (i.finish = !0, ft.queue(this, t, []), s && s.stop && s.stop.call(this, !0), e = o.length; e--;) o[e].elem === this && o[e].queue === t && (o[e].anim.stop(!0), o.splice(e, 1));
                    for (e = 0; a > e; e++) n[e] && n[e].finish && n[e].finish.call(this);
                    delete i.finish
                })
            }
        }), ft.each(["toggle", "show", "hide"], function(t, e) {
            var i = ft.fn[e];
            ft.fn[e] = function(t, n, s) {
                return null == t || "boolean" == typeof t ? i.apply(this, arguments) : this.animate(W(e, !0), t, n, s)
            }
        }), ft.each({
            slideDown: W("show"),
            slideUp: W("hide"),
            slideToggle: W("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function(t, e) {
            ft.fn[t] = function(t, i, n) {
                return this.animate(e, t, i, n)
            }
        }), ft.timers = [], ft.fx.tick = function() {
            var t, e = ft.timers,
                i = 0;
            for (Te = ft.now(); i < e.length; i++) t = e[i], t() || e[i] !== t || e.splice(i--, 1);
            e.length || ft.fx.stop(), Te = void 0
        }, ft.fx.timer = function(t) {
            ft.timers.push(t), t() ? ft.fx.start() : ft.timers.pop()
        }, ft.fx.interval = 13, ft.fx.start = function() {
            Se || (Se = t.setInterval(ft.fx.tick, ft.fx.interval))
        }, ft.fx.stop = function() {
            t.clearInterval(Se), Se = null
        }, ft.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        }, ft.fn.delay = function(e, i) {
            return e = ft.fx ? ft.fx.speeds[e] || e : e, i = i || "fx", this.queue(i, function(i, n) {
                var s = t.setTimeout(i, e);
                n.stop = function() {
                    t.clearTimeout(s)
                }
            })
        },
        function() {
            var t, e = nt.createElement("input"),
                i = nt.createElement("div"),
                n = nt.createElement("select"),
                s = n.appendChild(nt.createElement("option"));
            i = nt.createElement("div"), i.setAttribute("className", "t"), i.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", t = i.getElementsByTagName("a")[0], e.setAttribute("type", "checkbox"), i.appendChild(e), t = i.getElementsByTagName("a")[0], t.style.cssText = "top:1px", dt.getSetAttribute = "t" !== i.className, dt.style = /top/.test(t.getAttribute("style")), dt.hrefNormalized = "/a" === t.getAttribute("href"), dt.checkOn = !!e.value, dt.optSelected = s.selected, dt.enctype = !!nt.createElement("form").enctype, n.disabled = !0, dt.optDisabled = !s.disabled, e = nt.createElement("input"), e.setAttribute("value", ""), dt.input = "" === e.getAttribute("value"), e.value = "t", e.setAttribute("type", "radio"), dt.radioValue = "t" === e.value
        }();
    var De = /\r/g;
    ft.fn.extend({
        val: function(t) {
            var e, i, n, s = this[0]; {
                if (arguments.length) return n = ft.isFunction(t), this.each(function(i) {
                    var s;
                    1 === this.nodeType && (s = n ? t.call(this, i, ft(this).val()) : t, null == s ? s = "" : "number" == typeof s ? s += "" : ft.isArray(s) && (s = ft.map(s, function(t) {
                        return null == t ? "" : t + ""
                    })), e = ft.valHooks[this.type] || ft.valHooks[this.nodeName.toLowerCase()], e && "set" in e && void 0 !== e.set(this, s, "value") || (this.value = s))
                });
                if (s) return e = ft.valHooks[s.type] || ft.valHooks[s.nodeName.toLowerCase()], e && "get" in e && void 0 !== (i = e.get(s, "value")) ? i : (i = s.value, "string" == typeof i ? i.replace(De, "") : null == i ? "" : i)
            }
        }
    }), ft.extend({
        valHooks: {
            option: {
                get: function(t) {
                    var e = ft.find.attr(t, "value");
                    return null != e ? e : ft.trim(ft.text(t))
                }
            },
            select: {
                get: function(t) {
                    for (var e, i, n = t.options, s = t.selectedIndex, o = "select-one" === t.type || 0 > s, a = o ? null : [], r = o ? s + 1 : n.length, l = 0 > s ? r : o ? s : 0; r > l; l++)
                        if (i = n[l], (i.selected || l === s) && (dt.optDisabled ? !i.disabled : null === i.getAttribute("disabled")) && (!i.parentNode.disabled || !ft.nodeName(i.parentNode, "optgroup"))) {
                            if (e = ft(i).val(), o) return e;
                            a.push(e)
                        } return a
                },
                set: function(t, e) {
                    for (var i, n, s = t.options, o = ft.makeArray(e), a = s.length; a--;)
                        if (n = s[a], ft.inArray(ft.valHooks.option.get(n), o) >= 0) try {
                            n.selected = i = !0
                        } catch (r) {
                            n.scrollHeight
                        } else n.selected = !1;
                    return i || (t.selectedIndex = -1), s
                }
            }
        }
    }), ft.each(["radio", "checkbox"], function() {
        ft.valHooks[this] = {
            set: function(t, e) {
                return ft.isArray(e) ? t.checked = ft.inArray(ft(t).val(), e) > -1 : void 0
            }
        }, dt.checkOn || (ft.valHooks[this].get = function(t) {
            return null === t.getAttribute("value") ? "on" : t.value
        })
    });
    var Ee, Me, Pe = ft.expr.attrHandle,
        Le = /^(?:checked|selected)$/i,
        Oe = dt.getSetAttribute,
        Fe = dt.input;
    ft.fn.extend({
        attr: function(t, e) {
            return Wt(this, ft.attr, t, e, arguments.length > 1)
        },
        removeAttr: function(t) {
            return this.each(function() {
                ft.removeAttr(this, t)
            })
        }
    }), ft.extend({
        attr: function(t, e, i) {
            var n, s, o = t.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return "undefined" == typeof t.getAttribute ? ft.prop(t, e, i) : (1 === o && ft.isXMLDoc(t) || (e = e.toLowerCase(), s = ft.attrHooks[e] || (ft.expr.match.bool.test(e) ? Me : Ee)), void 0 !== i ? null === i ? void ft.removeAttr(t, e) : s && "set" in s && void 0 !== (n = s.set(t, i, e)) ? n : (t.setAttribute(e, i + ""), i) : s && "get" in s && null !== (n = s.get(t, e)) ? n : (n = ft.find.attr(t, e), null == n ? void 0 : n))
        },
        attrHooks: {
            type: {
                set: function(t, e) {
                    if (!dt.radioValue && "radio" === e && ft.nodeName(t, "input")) {
                        var i = t.value;
                        return t.setAttribute("type", e), i && (t.value = i), e
                    }
                }
            }
        },
        removeAttr: function(t, e) {
            var i, n, s = 0,
                o = e && e.match(Dt);
            if (o && 1 === t.nodeType)
                for (; i = o[s++];) n = ft.propFix[i] || i, ft.expr.match.bool.test(i) ? Fe && Oe || !Le.test(i) ? t[n] = !1 : t[ft.camelCase("default-" + i)] = t[n] = !1 : ft.attr(t, i, ""), t.removeAttribute(Oe ? i : n)
        }
    }), Me = {
        set: function(t, e, i) {
            return e === !1 ? ft.removeAttr(t, i) : Fe && Oe || !Le.test(i) ? t.setAttribute(!Oe && ft.propFix[i] || i, i) : t[ft.camelCase("default-" + i)] = t[i] = !0, i
        }
    }, ft.each(ft.expr.match.bool.source.match(/\w+/g), function(t, e) {
        var i = Pe[e] || ft.find.attr;
        Fe && Oe || !Le.test(e) ? Pe[e] = function(t, e, n) {
            var s, o;
            return n || (o = Pe[e], Pe[e] = s, s = null != i(t, e, n) ? e.toLowerCase() : null, Pe[e] = o), s
        } : Pe[e] = function(t, e, i) {
            return i ? void 0 : t[ft.camelCase("default-" + e)] ? e.toLowerCase() : null
        }
    }), Fe && Oe || (ft.attrHooks.value = {
        set: function(t, e, i) {
            return ft.nodeName(t, "input") ? void(t.defaultValue = e) : Ee && Ee.set(t, e, i)
        }
    }), Oe || (Ee = {
        set: function(t, e, i) {
            var n = t.getAttributeNode(i);
            return n || t.setAttributeNode(n = t.ownerDocument.createAttribute(i)), n.value = e += "", "value" === i || e === t.getAttribute(i) ? e : void 0
        }
    }, Pe.id = Pe.name = Pe.coords = function(t, e, i) {
        var n;
        return i ? void 0 : (n = t.getAttributeNode(e)) && "" !== n.value ? n.value : null
    }, ft.valHooks.button = {
        get: function(t, e) {
            var i = t.getAttributeNode(e);
            return i && i.specified ? i.value : void 0
        },
        set: Ee.set
    }, ft.attrHooks.contenteditable = {
        set: function(t, e, i) {
            Ee.set(t, "" === e ? !1 : e, i)
        }
    }, ft.each(["width", "height"], function(t, e) {
        ft.attrHooks[e] = {
            set: function(t, i) {
                return "" === i ? (t.setAttribute(e, "auto"), i) : void 0
            }
        }
    })), dt.style || (ft.attrHooks.style = {
        get: function(t) {
            return t.style.cssText || void 0
        },
        set: function(t, e) {
            return t.style.cssText = e + ""
        }
    });
    var Ne = /^(?:input|select|textarea|button|object)$/i,
        Re = /^(?:a|area)$/i;
    ft.fn.extend({
        prop: function(t, e) {
            return Wt(this, ft.prop, t, e, arguments.length > 1)
        },
        removeProp: function(t) {
            return t = ft.propFix[t] || t, this.each(function() {
                try {
                    this[t] = void 0, delete this[t]
                } catch (e) {}
            })
        }
    }), ft.extend({
        prop: function(t, e, i) {
            var n, s, o = t.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return 1 === o && ft.isXMLDoc(t) || (e = ft.propFix[e] || e, s = ft.propHooks[e]), void 0 !== i ? s && "set" in s && void 0 !== (n = s.set(t, i, e)) ? n : t[e] = i : s && "get" in s && null !== (n = s.get(t, e)) ? n : t[e]
        },
        propHooks: {
            tabIndex: {
                get: function(t) {
                    var e = ft.find.attr(t, "tabindex");
                    return e ? parseInt(e, 10) : Ne.test(t.nodeName) || Re.test(t.nodeName) && t.href ? 0 : -1
                }
            }
        },
        propFix: {
            "for": "htmlFor",
            "class": "className"
        }
    }), dt.hrefNormalized || ft.each(["href", "src"], function(t, e) {
        ft.propHooks[e] = {
            get: function(t) {
                return t.getAttribute(e, 4)
            }
        }
    }), dt.optSelected || (ft.propHooks.selected = {
        get: function(t) {
            var e = t.parentNode;
            return e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex), null
        }
    }), ft.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        ft.propFix[this.toLowerCase()] = this
    }), dt.enctype || (ft.propFix.enctype = "encoding");
    var je = /[\t\r\n\f]/g;
    ft.fn.extend({
        addClass: function(t) {
            var e, i, n, s, o, a, r, l = 0;
            if (ft.isFunction(t)) return this.each(function(e) {
                ft(this).addClass(t.call(this, e, q(this)))
            });
            if ("string" == typeof t && t)
                for (e = t.match(Dt) || []; i = this[l++];)
                    if (s = q(i), n = 1 === i.nodeType && (" " + s + " ").replace(je, " ")) {
                        for (a = 0; o = e[a++];) n.indexOf(" " + o + " ") < 0 && (n += o + " ");
                        r = ft.trim(n), s !== r && ft.attr(i, "class", r)
                    } return this
        },
        removeClass: function(t) {
            var e, i, n, s, o, a, r, l = 0;
            if (ft.isFunction(t)) return this.each(function(e) {
                ft(this).removeClass(t.call(this, e, q(this)))
            });
            if (!arguments.length) return this.attr("class", "");
            if ("string" == typeof t && t)
                for (e = t.match(Dt) || []; i = this[l++];)
                    if (s = q(i), n = 1 === i.nodeType && (" " + s + " ").replace(je, " ")) {
                        for (a = 0; o = e[a++];)
                            for (; n.indexOf(" " + o + " ") > -1;) n = n.replace(" " + o + " ", " ");
                        r = ft.trim(n), s !== r && ft.attr(i, "class", r)
                    } return this
        },
        toggleClass: function(t, e) {
            var i = typeof t;
            return "boolean" == typeof e && "string" === i ? e ? this.addClass(t) : this.removeClass(t) : ft.isFunction(t) ? this.each(function(i) {
                ft(this).toggleClass(t.call(this, i, q(this), e), e)
            }) : this.each(function() {
                var e, n, s, o;
                if ("string" === i)
                    for (n = 0, s = ft(this), o = t.match(Dt) || []; e = o[n++];) s.hasClass(e) ? s.removeClass(e) : s.addClass(e);
                else void 0 !== t && "boolean" !== i || (e = q(this), e && ft._data(this, "__className__", e), ft.attr(this, "class", e || t === !1 ? "" : ft._data(this, "__className__") || ""))
            })
        },
        hasClass: function(t) {
            var e, i, n = 0;
            for (e = " " + t + " "; i = this[n++];)
                if (1 === i.nodeType && (" " + q(i) + " ").replace(je, " ").indexOf(e) > -1) return !0;
            return !1
        }
    }), ft.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(t, e) {
        ft.fn[e] = function(t, i) {
            return arguments.length > 0 ? this.on(e, null, t, i) : this.trigger(e)
        }
    }), ft.fn.extend({
        hover: function(t, e) {
            return this.mouseenter(t).mouseleave(e || t)
        }
    });
    var We = t.location,
        Ie = ft.now(),
        He = /\?/,
        Be = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
    ft.parseJSON = function(e) {
        if (t.JSON && t.JSON.parse) return t.JSON.parse(e + "");
        var i, n = null,
            s = ft.trim(e + "");
        return s && !ft.trim(s.replace(Be, function(t, e, s, o) {
            return i && e && (n = 0), 0 === n ? t : (i = s || e, n += !o - !s, "")
        })) ? Function("return " + s)() : ft.error("Invalid JSON: " + e)
    }, ft.parseXML = function(e) {
        var i, n;
        if (!e || "string" != typeof e) return null;
        try {
            t.DOMParser ? (n = new t.DOMParser, i = n.parseFromString(e, "text/xml")) : (i = new t.ActiveXObject("Microsoft.XMLDOM"), i.async = "false", i.loadXML(e))
        } catch (s) {
            i = void 0
        }
        return i && i.documentElement && !i.getElementsByTagName("parsererror").length || ft.error("Invalid XML: " + e), i
    };
    var ze = /#.*$/,
        qe = /([?&])_=[^&]*/,
        Ue = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
        Ye = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        Ve = /^(?:GET|HEAD)$/,
        Xe = /^\/\//,
        Je = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
        Ge = {},
        Ke = {},
        Qe = "*/".concat("*"),
        Ze = We.href,
        ti = Je.exec(Ze.toLowerCase()) || [];
    ft.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Ze,
            type: "GET",
            isLocal: Ye.test(ti[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Qe,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": ft.parseJSON,
                "text xml": ft.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(t, e) {
            return e ? V(V(t, ft.ajaxSettings), e) : V(ft.ajaxSettings, t)
        },
        ajaxPrefilter: U(Ge),
        ajaxTransport: U(Ke),
        ajax: function(e, i) {
            function n(e, i, n, s) {
                var o, d, y, b, k, w = i;
                2 !== x && (x = 2, l && t.clearTimeout(l), h = void 0, r = s || "", _.readyState = e > 0 ? 4 : 0, o = e >= 200 && 300 > e || 304 === e, n && (b = X(u, _, n)), b = J(u, b, _, o), o ? (u.ifModified && (k = _.getResponseHeader("Last-Modified"), k && (ft.lastModified[a] = k), k = _.getResponseHeader("etag"), k && (ft.etag[a] = k)), 204 === e || "HEAD" === u.type ? w = "nocontent" : 304 === e ? w = "notmodified" : (w = b.state, d = b.data, y = b.error, o = !y)) : (y = w, !e && w || (w = "error", 0 > e && (e = 0))), _.status = e, _.statusText = (i || w) + "", o ? m.resolveWith(f, [d, w, _]) : m.rejectWith(f, [_, w, y]), _.statusCode(v), v = void 0, c && p.trigger(o ? "ajaxSuccess" : "ajaxError", [_, u, o ? d : y]), g.fireWith(f, [_, w]), c && (p.trigger("ajaxComplete", [_, u]), --ft.active || ft.event.trigger("ajaxStop")))
            }
            "object" == typeof e && (i = e, e = void 0), i = i || {};
            var s, o, a, r, l, c, h, d, u = ft.ajaxSetup({}, i),
                f = u.context || u,
                p = u.context && (f.nodeType || f.jquery) ? ft(f) : ft.event,
                m = ft.Deferred(),
                g = ft.Callbacks("once memory"),
                v = u.statusCode || {},
                y = {},
                b = {},
                x = 0,
                k = "canceled",
                _ = {
                    readyState: 0,
                    getResponseHeader: function(t) {
                        var e;
                        if (2 === x) {
                            if (!d)
                                for (d = {}; e = Ue.exec(r);) d[e[1].toLowerCase()] = e[2];
                            e = d[t.toLowerCase()]
                        }
                        return null == e ? null : e
                    },
                    getAllResponseHeaders: function() {
                        return 2 === x ? r : null
                    },
                    setRequestHeader: function(t, e) {
                        var i = t.toLowerCase();
                        return x || (t = b[i] = b[i] || t, y[t] = e), this
                    },
                    overrideMimeType: function(t) {
                        return x || (u.mimeType = t), this
                    },
                    statusCode: function(t) {
                        var e;
                        if (t)
                            if (2 > x)
                                for (e in t) v[e] = [v[e], t[e]];
                            else _.always(t[_.status]);
                        return this
                    },
                    abort: function(t) {
                        var e = t || k;
                        return h && h.abort(e), n(0, e), this
                    }
                };
            if (m.promise(_).complete = g.add, _.success = _.done, _.error = _.fail, u.url = ((e || u.url || Ze) + "").replace(ze, "").replace(Xe, ti[1] + "//"), u.type = i.method || i.type || u.method || u.type, u.dataTypes = ft.trim(u.dataType || "*").toLowerCase().match(Dt) || [""], null == u.crossDomain && (s = Je.exec(u.url.toLowerCase()), u.crossDomain = !(!s || s[1] === ti[1] && s[2] === ti[2] && (s[3] || ("http:" === s[1] ? "80" : "443")) === (ti[3] || ("http:" === ti[1] ? "80" : "443")))), u.data && u.processData && "string" != typeof u.data && (u.data = ft.param(u.data, u.traditional)), Y(Ge, u, i, _), 2 === x) return _;
            c = ft.event && u.global, c && 0 === ft.active++ && ft.event.trigger("ajaxStart"), u.type = u.type.toUpperCase(), u.hasContent = !Ve.test(u.type), a = u.url, u.hasContent || (u.data && (a = u.url += (He.test(a) ? "&" : "?") + u.data, delete u.data), u.cache === !1 && (u.url = qe.test(a) ? a.replace(qe, "$1_=" + Ie++) : a + (He.test(a) ? "&" : "?") + "_=" + Ie++)), u.ifModified && (ft.lastModified[a] && _.setRequestHeader("If-Modified-Since", ft.lastModified[a]), ft.etag[a] && _.setRequestHeader("If-None-Match", ft.etag[a])), (u.data && u.hasContent && u.contentType !== !1 || i.contentType) && _.setRequestHeader("Content-Type", u.contentType), _.setRequestHeader("Accept", u.dataTypes[0] && u.accepts[u.dataTypes[0]] ? u.accepts[u.dataTypes[0]] + ("*" !== u.dataTypes[0] ? ", " + Qe + "; q=0.01" : "") : u.accepts["*"]);
            for (o in u.headers) _.setRequestHeader(o, u.headers[o]);
            if (u.beforeSend && (u.beforeSend.call(f, _, u) === !1 || 2 === x)) return _.abort();
            k = "abort";
            for (o in {
                    success: 1,
                    error: 1,
                    complete: 1
                }) _[o](u[o]);
            if (h = Y(Ke, u, i, _)) {
                if (_.readyState = 1, c && p.trigger("ajaxSend", [_, u]), 2 === x) return _;
                u.async && u.timeout > 0 && (l = t.setTimeout(function() {
                    _.abort("timeout")
                }, u.timeout));
                try {
                    x = 1, h.send(y, n)
                } catch (w) {
                    if (!(2 > x)) throw w;
                    n(-1, w)
                }
            } else n(-1, "No Transport");
            return _
        },
        getJSON: function(t, e, i) {
            return ft.get(t, e, i, "json")
        },
        getScript: function(t, e) {
            return ft.get(t, void 0, e, "script")
        }
    }), ft.each(["get", "post"], function(t, e) {
        ft[e] = function(t, i, n, s) {
            return ft.isFunction(i) && (s = s || n, n = i, i = void 0), ft.ajax(ft.extend({
                url: t,
                type: e,
                dataType: s,
                data: i,
                success: n
            }, ft.isPlainObject(t) && t))
        }
    }), ft._evalUrl = function(t) {
        return ft.ajax({
            url: t,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            "throws": !0
        })
    }, ft.fn.extend({
        wrapAll: function(t) {
            if (ft.isFunction(t)) return this.each(function(e) {
                ft(this).wrapAll(t.call(this, e))
            });
            if (this[0]) {
                var e = ft(t, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && e.insertBefore(this[0]), e.map(function() {
                    for (var t = this; t.firstChild && 1 === t.firstChild.nodeType;) t = t.firstChild;
                    return t
                }).append(this)
            }
            return this
        },
        wrapInner: function(t) {
            return ft.isFunction(t) ? this.each(function(e) {
                ft(this).wrapInner(t.call(this, e))
            }) : this.each(function() {
                var e = ft(this),
                    i = e.contents();
                i.length ? i.wrapAll(t) : e.append(t)
            })
        },
        wrap: function(t) {
            var e = ft.isFunction(t);
            return this.each(function(i) {
                ft(this).wrapAll(e ? t.call(this, i) : t)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                ft.nodeName(this, "body") || ft(this).replaceWith(this.childNodes)
            }).end()
        }
    }), ft.expr.filters.hidden = function(t) {
        return dt.reliableHiddenOffsets() ? t.offsetWidth <= 0 && t.offsetHeight <= 0 && !t.getClientRects().length : K(t)
    }, ft.expr.filters.visible = function(t) {
        return !ft.expr.filters.hidden(t)
    };
    var ei = /%20/g,
        ii = /\[\]$/,
        ni = /\r?\n/g,
        si = /^(?:submit|button|image|reset|file)$/i,
        oi = /^(?:input|select|textarea|keygen)/i;
    ft.param = function(t, e) {
        var i, n = [],
            s = function(t, e) {
                e = ft.isFunction(e) ? e() : null == e ? "" : e, n[n.length] = encodeURIComponent(t) + "=" + encodeURIComponent(e)
            };
        if (void 0 === e && (e = ft.ajaxSettings && ft.ajaxSettings.traditional), ft.isArray(t) || t.jquery && !ft.isPlainObject(t)) ft.each(t, function() {
            s(this.name, this.value)
        });
        else
            for (i in t) Q(i, t[i], e, s);
        return n.join("&").replace(ei, "+")
    }, ft.fn.extend({
        serialize: function() {
            return ft.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var t = ft.prop(this, "elements");
                return t ? ft.makeArray(t) : this
            }).filter(function() {
                var t = this.type;
                return this.name && !ft(this).is(":disabled") && oi.test(this.nodeName) && !si.test(t) && (this.checked || !It.test(t))
            }).map(function(t, e) {
                var i = ft(this).val();
                return null == i ? null : ft.isArray(i) ? ft.map(i, function(t) {
                    return {
                        name: e.name,
                        value: t.replace(ni, "\r\n")
                    }
                }) : {
                    name: e.name,
                    value: i.replace(ni, "\r\n")
                }
            }).get()
        }
    }), ft.ajaxSettings.xhr = void 0 !== t.ActiveXObject ? function() {
        return this.isLocal ? tt() : nt.documentMode > 8 ? Z() : /^(get|post|head|put|delete|options)$/i.test(this.type) && Z() || tt()
    } : Z;
    var ai = 0,
        ri = {},
        li = ft.ajaxSettings.xhr();
    t.attachEvent && t.attachEvent("onunload", function() {
        for (var t in ri) ri[t](void 0, !0)
    }), dt.cors = !!li && "withCredentials" in li, li = dt.ajax = !!li, li && ft.ajaxTransport(function(e) {
        if (!e.crossDomain || dt.cors) {
            var i;
            return {
                send: function(n, s) {
                    var o, a = e.xhr(),
                        r = ++ai;
                    if (a.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)
                        for (o in e.xhrFields) a[o] = e.xhrFields[o];
                    e.mimeType && a.overrideMimeType && a.overrideMimeType(e.mimeType), e.crossDomain || n["X-Requested-With"] || (n["X-Requested-With"] = "XMLHttpRequest");
                    for (o in n) void 0 !== n[o] && a.setRequestHeader(o, n[o] + "");
                    a.send(e.hasContent && e.data || null), i = function(t, n) {
                        var o, l, c;
                        if (i && (n || 4 === a.readyState))
                            if (delete ri[r], i = void 0, a.onreadystatechange = ft.noop, n) 4 !== a.readyState && a.abort();
                            else {
                                c = {}, o = a.status, "string" == typeof a.responseText && (c.text = a.responseText);
                                try {
                                    l = a.statusText
                                } catch (h) {
                                    l = ""
                                }
                                o || !e.isLocal || e.crossDomain ? 1223 === o && (o = 204) : o = c.text ? 200 : 404
                            } c && s(o, l, c, a.getAllResponseHeaders())
                    }, e.async ? 4 === a.readyState ? t.setTimeout(i) : a.onreadystatechange = ri[r] = i : i()
                },
                abort: function() {
                    i && i(void 0, !0)
                }
            }
        }
    }), ft.ajaxPrefilter(function(t) {
        t.crossDomain && (t.contents.script = !1)
    }), ft.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(t) {
                return ft.globalEval(t), t
            }
        }
    }), ft.ajaxPrefilter("script", function(t) {
        void 0 === t.cache && (t.cache = !1), t.crossDomain && (t.type = "GET", t.global = !1)
    }), ft.ajaxTransport("script", function(t) {
        if (t.crossDomain) {
            var e, i = nt.head || ft("head")[0] || nt.documentElement;
            return {
                send: function(n, s) {
                    e = nt.createElement("script"), e.async = !0, t.scriptCharset && (e.charset = t.scriptCharset), e.src = t.url, e.onload = e.onreadystatechange = function(t, i) {
                        (i || !e.readyState || /loaded|complete/.test(e.readyState)) && (e.onload = e.onreadystatechange = null, e.parentNode && e.parentNode.removeChild(e), e = null, i || s(200, "success"))
                    }, i.insertBefore(e, i.firstChild)
                },
                abort: function() {
                    e && e.onload(void 0, !0)
                }
            }
        }
    });
    var ci = [],
        hi = /(=)\?(?=&|$)|\?\?/;
    ft.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var t = ci.pop() || ft.expando + "_" + Ie++;
            return this[t] = !0, t
        }
    }), ft.ajaxPrefilter("json jsonp", function(e, i, n) {
        var s, o, a, r = e.jsonp !== !1 && (hi.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && hi.test(e.data) && "data");
        return r || "jsonp" === e.dataTypes[0] ? (s = e.jsonpCallback = ft.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, r ? e[r] = e[r].replace(hi, "$1" + s) : e.jsonp !== !1 && (e.url += (He.test(e.url) ? "&" : "?") + e.jsonp + "=" + s), e.converters["script json"] = function() {
            return a || ft.error(s + " was not called"), a[0]
        }, e.dataTypes[0] = "json", o = t[s], t[s] = function() {
            a = arguments
        }, n.always(function() {
            void 0 === o ? ft(t).removeProp(s) : t[s] = o, e[s] && (e.jsonpCallback = i.jsonpCallback, ci.push(s)), a && ft.isFunction(o) && o(a[0]), a = o = void 0
        }), "script") : void 0
    }), dt.createHTMLDocument = function() {
        if (!nt.implementation.createHTMLDocument) return !1;
        var t = nt.implementation.createHTMLDocument("");
        return t.body.innerHTML = "<form></form><form></form>", 2 === t.body.childNodes.length
    }(), ft.parseHTML = function(t, e, i) {
        if (!t || "string" != typeof t) return null;
        "boolean" == typeof e && (i = e, e = !1), e = e || (dt.createHTMLDocument ? nt.implementation.createHTMLDocument("") : nt);
        var n = _t.exec(t),
            s = !i && [];
        return n ? [e.createElement(n[1])] : (n = v([t], e, s), s && s.length && ft(s).remove(), ft.merge([], n.childNodes))
    };
    var di = ft.fn.load;
    ft.fn.load = function(t, e, i) {
        if ("string" != typeof t && di) return di.apply(this, arguments);
        var n, s, o, a = this,
            r = t.indexOf(" ");
        return r > -1 && (n = ft.trim(t.slice(r, t.length)), t = t.slice(0, r)), ft.isFunction(e) ? (i = e, e = void 0) : e && "object" == typeof e && (s = "POST"), a.length > 0 && ft.ajax({
            url: t,
            type: s || "GET",
            dataType: "html",
            data: e
        }).done(function(t) {
            o = arguments, a.html(n ? ft("<div>").append(ft.parseHTML(t)).find(n) : t)
        }).always(i && function(t, e) {
            a.each(function() {
                i.apply(a, o || [t.responseText, e, t])
            })
        }), this
    }, ft.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(t, e) {
        ft.fn[e] = function(t) {
            return this.on(e, t)
        }
    }), ft.expr.filters.animated = function(t) {
        return ft.grep(ft.timers, function(e) {
            return t === e.elem
        }).length
    }, ft.offset = {
        setOffset: function(t, e, i) {
            var n, s, o, a, r, l, c, h = ft.css(t, "position"),
                d = ft(t),
                u = {};
            "static" === h && (t.style.position = "relative"), r = d.offset(), o = ft.css(t, "top"), l = ft.css(t, "left"), c = ("absolute" === h || "fixed" === h) && ft.inArray("auto", [o, l]) > -1, c ? (n = d.position(), a = n.top, s = n.left) : (a = parseFloat(o) || 0, s = parseFloat(l) || 0), ft.isFunction(e) && (e = e.call(t, i, ft.extend({}, r))), null != e.top && (u.top = e.top - r.top + a), null != e.left && (u.left = e.left - r.left + s), "using" in e ? e.using.call(t, u) : d.css(u)
        }
    }, ft.fn.extend({
        offset: function(t) {
            if (arguments.length) return void 0 === t ? this : this.each(function(e) {
                ft.offset.setOffset(this, t, e)
            });
            var e, i, n = {
                    top: 0,
                    left: 0
                },
                s = this[0],
                o = s && s.ownerDocument;
            if (o) return e = o.documentElement, ft.contains(e, s) ? ("undefined" != typeof s.getBoundingClientRect && (n = s.getBoundingClientRect()), i = et(o), {
                top: n.top + (i.pageYOffset || e.scrollTop) - (e.clientTop || 0),
                left: n.left + (i.pageXOffset || e.scrollLeft) - (e.clientLeft || 0)
            }) : n
        },
        position: function() {
            if (this[0]) {
                var t, e, i = {
                        top: 0,
                        left: 0
                    },
                    n = this[0];
                return "fixed" === ft.css(n, "position") ? e = n.getBoundingClientRect() : (t = this.offsetParent(), e = this.offset(), ft.nodeName(t[0], "html") || (i = t.offset()), i.top += ft.css(t[0], "borderTopWidth", !0), i.left += ft.css(t[0], "borderLeftWidth", !0)), {
                    top: e.top - i.top - ft.css(n, "marginTop", !0),
                    left: e.left - i.left - ft.css(n, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var t = this.offsetParent; t && !ft.nodeName(t, "html") && "static" === ft.css(t, "position");) t = t.offsetParent;
                return t || fe
            })
        }
    }), ft.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(t, e) {
        var i = /Y/.test(e);
        ft.fn[t] = function(n) {
            return Wt(this, function(t, n, s) {
                var o = et(t);
                return void 0 === s ? o ? e in o ? o[e] : o.document.documentElement[n] : t[n] : void(o ? o.scrollTo(i ? ft(o).scrollLeft() : s, i ? s : ft(o).scrollTop()) : t[n] = s)
            }, t, n, arguments.length, null)
        }
    }), ft.each(["top", "left"], function(t, e) {
        ft.cssHooks[e] = M(dt.pixelPosition, function(t, i) {
            return i ? (i = me(t, e), de.test(i) ? ft(t).position()[e] + "px" : i) : void 0
        })
    }), ft.each({
        Height: "height",
        Width: "width"
    }, function(t, e) {
        ft.each({
            padding: "inner" + t,
            content: e,
            "": "outer" + t
        }, function(i, n) {
            ft.fn[n] = function(n, s) {
                var o = arguments.length && (i || "boolean" != typeof n),
                    a = i || (n === !0 || s === !0 ? "margin" : "border");
                return Wt(this, function(e, i, n) {
                    var s;
                    return ft.isWindow(e) ? e.document.documentElement["client" + t] : 9 === e.nodeType ? (s = e.documentElement, Math.max(e.body["scroll" + t], s["scroll" + t], e.body["offset" + t], s["offset" + t], s["client" + t])) : void 0 === n ? ft.css(e, i, a) : ft.style(e, i, n, a)
                }, e, o ? n : void 0, o, null)
            }
        })
    }), ft.fn.extend({
        bind: function(t, e, i) {
            return this.on(t, null, e, i)
        },
        unbind: function(t, e) {
            return this.off(t, null, e)
        },
        delegate: function(t, e, i, n) {
            return this.on(e, t, i, n)
        },
        undelegate: function(t, e, i) {
            return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", i)
        }
    }), ft.fn.size = function() {
        return this.length
    }, ft.fn.andSelf = ft.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
        return ft
    });
    var ui = t.jQuery,
        fi = t.$;
    return ft.noConflict = function(e) {
        return t.$ === ft && (t.$ = fi), e && t.jQuery === ft && (t.jQuery = ui), ft
    }, e || (t.jQuery = t.$ = ft), ft
}),
function(t, e) {
    "use strict";
    t.rails !== e && t.error("jquery-ujs has already been loaded!");
    var i, n = t(document);
    t.rails = i = {
        linkClickSelector: "a[data-confirm], a[data-method], a[data-remote]:not([disabled]), a[data-disable-with], a[data-disable]",
        buttonClickSelector: "button[data-remote]:not([form]):not(form button), button[data-confirm]:not([form]):not(form button)",
        inputChangeSelector: "select[data-remote], input[data-remote], textarea[data-remote]",
        formSubmitSelector: "form",
        formInputClickSelector: "form input[type=submit], form input[type=image], form button[type=submit], form button:not([type]), input[type=submit][form], input[type=image][form], button[type=submit][form], button[form]:not([type])",
        disableSelector: "input[data-disable-with]:enabled, button[data-disable-with]:enabled, textarea[data-disable-with]:enabled, input[data-disable]:enabled, button[data-disable]:enabled, textarea[data-disable]:enabled",
        enableSelector: "input[data-disable-with]:disabled, button[data-disable-with]:disabled, textarea[data-disable-with]:disabled, input[data-disable]:disabled, button[data-disable]:disabled, textarea[data-disable]:disabled",
        requiredInputSelector: "input[name][required]:not([disabled]), textarea[name][required]:not([disabled])",
        fileInputSelector: "input[type=file]:not([disabled])",
        linkDisableSelector: "a[data-disable-with], a[data-disable]",
        buttonDisableSelector: "button[data-remote][data-disable-with], button[data-remote][data-disable]",
        csrfToken: function() {
            return t("meta[name=csrf-token]").attr("content")
        },
        csrfParam: function() {
            return t("meta[name=csrf-param]").attr("content")
        },
        CSRFProtection: function(t) {
            var e = i.csrfToken();
            e && t.setRequestHeader("X-CSRF-Token", e)
        },
        refreshCSRFTokens: function() {
            t('form input[name="' + i.csrfParam() + '"]').val(i.csrfToken())
        },
        fire: function(e, i, n) {
            var s = t.Event(i);
            return e.trigger(s, n), s.result !== !1
        },
        confirm: function(t) {
            return confirm(t)
        },
        ajax: function(e) {
            return t.ajax(e)
        },
        href: function(t) {
            return t[0].href
        },
        isRemote: function(t) {
            return t.data("remote") !== e && t.data("remote") !== !1
        },
        handleRemote: function(n) {
            var s, o, a, r, l, c;
            if (i.fire(n, "ajax:before")) {
                if (r = n.data("with-credentials") || null, l = n.data("type") || t.ajaxSettings && t.ajaxSettings.dataType, n.is("form")) {
                    s = n.data("ujs:submit-button-formmethod") || n.attr("method"), o = n.data("ujs:submit-button-formaction") || n.attr("action"), a = t(n[0]).serializeArray();
                    var h = n.data("ujs:submit-button");
                    h && (a.push(h), n.data("ujs:submit-button", null)), n.data("ujs:submit-button-formmethod", null), n.data("ujs:submit-button-formaction", null)
                } else n.is(i.inputChangeSelector) ? (s = n.data("method"), o = n.data("url"), a = n.serialize(), n.data("params") && (a = a + "&" + n.data("params"))) : n.is(i.buttonClickSelector) ? (s = n.data("method") || "get", o = n.data("url"), a = n.serialize(), n.data("params") && (a = a + "&" + n.data("params"))) : (s = n.data("method"), o = i.href(n), a = n.data("params") || null);
                return c = {
                    type: s || "GET",
                    data: a,
                    dataType: l,
                    beforeSend: function(t, s) {
                        return s.dataType === e && t.setRequestHeader("accept", "*/*;q=0.5, " + s.accepts.script), i.fire(n, "ajax:beforeSend", [t, s]) ? void n.trigger("ajax:send", t) : !1
                    },
                    success: function(t, e, i) {
                        n.trigger("ajax:success", [t, e, i])
                    },
                    complete: function(t, e) {
                        n.trigger("ajax:complete", [t, e])
                    },
                    error: function(t, e, i) {
                        n.trigger("ajax:error", [t, e, i])
                    },
                    crossDomain: i.isCrossDomain(o)
                }, r && (c.xhrFields = {
                    withCredentials: r
                }), o && (c.url = o), i.ajax(c)
            }
            return !1
        },
        isCrossDomain: function(t) {
            var e = document.createElement("a");
            e.href = location.href;
            var i = document.createElement("a");
            try {
                return i.href = t, i.href = i.href, !((!i.protocol || ":" === i.protocol) && !i.host || e.protocol + "//" + e.host == i.protocol + "//" + i.host)
            } catch (n) {
                return !0
            }
        },
        handleMethod: function(n) {
            var s = i.href(n),
                o = n.data("method"),
                a = n.attr("target"),
                r = i.csrfToken(),
                l = i.csrfParam(),
                c = t('<form method="post" action="' + s + '"></form>'),
                h = '<input name="_method" value="' + o + '" type="hidden" />';
            l === e || r === e || i.isCrossDomain(s) || (h += '<input name="' + l + '" value="' + r + '" type="hidden" />'), a && c.attr("target", a), c.hide().append(h).appendTo("body"), c.submit()
        },
        formElements: function(e, i) {
            return e.is("form") ? t(e[0].elements).filter(i) : e.find(i)
        },
        disableFormElements: function(e) {
            i.formElements(e, i.disableSelector).each(function() {
                i.disableFormElement(t(this))
            })
        },
        disableFormElement: function(t) {
            var i, n;
            i = t.is("button") ? "html" : "val", n = t.data("disable-with"), n !== e && (t.data("ujs:enable-with", t[i]()), t[i](n)), t.prop("disabled", !0), t.data("ujs:disabled", !0)
        },
        enableFormElements: function(e) {
            i.formElements(e, i.enableSelector).each(function() {
                i.enableFormElement(t(this))
            })
        },
        enableFormElement: function(t) {
            var i = t.is("button") ? "html" : "val";
            t.data("ujs:enable-with") !== e && (t[i](t.data("ujs:enable-with")), t.removeData("ujs:enable-with")), t.prop("disabled", !1), t.removeData("ujs:disabled")
        },
        allowAction: function(t) {
            var e, n = t.data("confirm"),
                s = !1;
            if (!n) return !0;
            if (i.fire(t, "confirm")) {
                try {
                    s = i.confirm(n)
                } catch (o) {
                    (console.error || console.log).call(console, o.stack || o)
                }
                e = i.fire(t, "confirm:complete", [s])
            }
            return s && e
        },
        blankInputs: function(e, i, n) {
            var s, o, a, r, l = t(),
                c = i || "input,textarea",
                h = e.find(c),
                d = {};
            return h.each(function() {
                s = t(this), s.is("input[type=radio]") ? (r = s.attr("name"), d[r] || (0 === e.find('input[type=radio]:checked[name="' + r + '"]').length && (a = e.find('input[type=radio][name="' + r + '"]'), l = l.add(a)), d[r] = r)) : (o = s.is("input[type=checkbox],input[type=radio]") ? s.is(":checked") : !!s.val(), o === n && (l = l.add(s)))
            }), l.length ? l : !1
        },
        nonBlankInputs: function(t, e) {
            return i.blankInputs(t, e, !0)
        },
        stopEverything: function(e) {
            return t(e.target).trigger("ujs:everythingStopped"), e.stopImmediatePropagation(), !1
        },
        disableElement: function(t) {
            var n = t.data("disable-with");
            n !== e && (t.data("ujs:enable-with", t.html()), t.html(n)), t.bind("click.railsDisable", function(t) {
                return i.stopEverything(t)
            }), t.data("ujs:disabled", !0)
        },
        enableElement: function(t) {
            t.data("ujs:enable-with") !== e && (t.html(t.data("ujs:enable-with")), t.removeData("ujs:enable-with")), t.unbind("click.railsDisable"), t.removeData("ujs:disabled")
        }
    }, i.fire(n, "rails:attachBindings") && (t.ajaxPrefilter(function(t, e, n) {
        t.crossDomain || i.CSRFProtection(n)
    }), t(window).on("pageshow.rails", function() {
        t(t.rails.enableSelector).each(function() {
            var e = t(this);
            e.data("ujs:disabled") && t.rails.enableFormElement(e)
        }), t(t.rails.linkDisableSelector).each(function() {
            var e = t(this);
            e.data("ujs:disabled") && t.rails.enableElement(e)
        })
    }), n.delegate(i.linkDisableSelector, "ajax:complete", function() {
        i.enableElement(t(this))
    }), n.delegate(i.buttonDisableSelector, "ajax:complete", function() {
        i.enableFormElement(t(this))
    }), n.delegate(i.linkClickSelector, "click.rails", function(e) {
        var n = t(this),
            s = n.data("method"),
            o = n.data("params"),
            a = e.metaKey || e.ctrlKey;
        if (!i.allowAction(n)) return i.stopEverything(e);
        if (!a && n.is(i.linkDisableSelector) && i.disableElement(n), i.isRemote(n)) {
            if (a && (!s || "GET" === s) && !o) return !0;
            var r = i.handleRemote(n);
            return r === !1 ? i.enableElement(n) : r.fail(function() {
                i.enableElement(n)
            }), !1
        }
        return s ? (i.handleMethod(n), !1) : void 0
    }), n.delegate(i.buttonClickSelector, "click.rails", function(e) {
        var n = t(this);
        if (!i.allowAction(n) || !i.isRemote(n)) return i.stopEverything(e);
        n.is(i.buttonDisableSelector) && i.disableFormElement(n);
        var s = i.handleRemote(n);
        return s === !1 ? i.enableFormElement(n) : s.fail(function() {
            i.enableFormElement(n)
        }), !1
    }), n.delegate(i.inputChangeSelector, "change.rails", function(e) {
        var n = t(this);
        return i.allowAction(n) && i.isRemote(n) ? (i.handleRemote(n), !1) : i.stopEverything(e)
    }), n.delegate(i.formSubmitSelector, "submit.rails", function(n) {
        var s, o, a = t(this),
            r = i.isRemote(a);
        if (!i.allowAction(a)) return i.stopEverything(n);
        if (a.attr("novalidate") === e)
            if (a.data("ujs:formnovalidate-button") === e) {
                if (s = i.blankInputs(a, i.requiredInputSelector, !1), s && i.fire(a, "ajax:aborted:required", [s])) return i.stopEverything(n)
            } else a.data("ujs:formnovalidate-button", e);
        if (r) {
            if (o = i.nonBlankInputs(a, i.fileInputSelector)) {
                setTimeout(function() {
                    i.disableFormElements(a)
                }, 13);
                var l = i.fire(a, "ajax:aborted:file", [o]);
                return l || setTimeout(function() {
                    i.enableFormElements(a)
                }, 13), l
            }
            return i.handleRemote(a), !1
        }
        setTimeout(function() {
            i.disableFormElements(a)
        }, 13)
    }), n.delegate(i.formInputClickSelector, "click.rails", function(e) {
        var n = t(this);
        if (!i.allowAction(n)) return i.stopEverything(e);
        var s = n.attr("name"),
            o = s ? {
                name: s,
                value: n.val()
            } : null,
            a = n.closest("form");
        0 === a.length && (a = t("#" + n.attr("form"))), a.data("ujs:submit-button", o), a.data("ujs:formnovalidate-button", n.attr("formnovalidate")), a.data("ujs:submit-button-formaction", n.attr("formaction")), a.data("ujs:submit-button-formmethod", n.attr("formmethod"))
    }), n.delegate(i.formSubmitSelector, "ajax:send.rails", function(e) {
        this === e.target && i.disableFormElements(t(this))
    }), n.delegate(i.formSubmitSelector, "ajax:complete.rails", function(e) {
        this === e.target && i.enableFormElements(t(this))
    }), t(function() {
        i.refreshCSRFTokens()
    }))
}(jQuery), ! function(t) {
    "use strict";

    function e(t) {
        return new RegExp("(^|\\s+)" + t + "(\\s+|$)")
    }

    function i(t, e) {
        var i = n(t, e) ? o : s;
        i(t, e)
    }
    var n, s, o;
    "classList" in document.documentElement ? (n = function(t, e) {
        return t.classList.contains(e)
    }, s = function(t, e) {
        t.classList.add(e)
    }, o = function(t, e) {
        t.classList.remove(e)
    }) : (n = function(t, i) {
        return e(i).test(t.className)
    }, s = function(t, e) {
        n(t, e) || (t.className = t.className + " " + e)
    }, o = function(t, i) {
        t.className = t.className.replace(e(i), " ")
    });
    var a = {
        hasClass: n,
        addClass: s,
        removeClass: o,
        toggleClass: i,
        has: n,
        add: s,
        remove: o,
        toggle: i
    };
    "function" == typeof define && define.amd ? define(a) : t.classie = a
}(window),
function(t) {
    "use strict";

    function e(t, e) {
        for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
        return t
    }

    function i(t, e) {
        if (!t) return !1;
        for (var i = t.target || t.srcElement || t || !1; i && i.id != e;) i = i.parentNode || !1;
        return i !== !1
    }

    function n(t, e, i, s) {
        return s = s || 0, t.id.indexOf(e) >= 0 ? s : (classie.has(t, i) && ++s, t.parentNode && n(t.parentNode, e, i, s))
    }

    function s() {
        var e = !1;
        return function(t) {
            (/(android|ipad|playbook|silk|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(t) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(t.substr(0, 4))) && (e = !0)
        }(navigator.userAgent || navigator.vendor || t.opera), e
    }

    function o(t, e) {
        return classie.has(t, e) ? t : t.parentNode && o(t.parentNode, e)
    }

    function a(t, i, n) {
        this.el = t, this.trigger = i, this.options = e(this.defaults, n), this.support = Modernizr.csstransforms3d, this.support && this._init()
    }
    a.prototype = {
        defaults: {
            type: "overlap",
            levelSpacing: 40,
            backClass: "mp-back"
        },
        _init: function() {
            this.open = !1, this.level = 0, this.wrapper = document.getElementById("mp-pusher"), this.levels = Array.prototype.slice.call(this.el.querySelectorAll("div.mp-level"));
            var t = this;
            this.levels.forEach(function(e) {
                e.setAttribute("data-level", n(e, t.el.id, "mp-level"))
            }), this.menuItems = Array.prototype.slice.call(this.el.querySelectorAll("li")), this.levelBack = Array.prototype.slice.call(this.el.querySelectorAll("." + this.options.backClass)), this.eventtype = s() ? "touchstart" : "click", classie.add(this.el, "mp-" + this.options.type), this._initEvents()
        },
        _initEvents: function() {
            var t = this,
                e = function(i) {
                    t._resetMenu(), i.removeEventListener(t.eventtype, e)
                };
            this.trigger.addEventListener(this.eventtype, function(n) {
                n.stopPropagation(), n.preventDefault(), t.open ? t._resetMenu() : (t._openMenu(), document.addEventListener(t.eventtype, function(n) {
                    t.open && !i(n.target, t.el.id) && e(this)
                }))
            }), this.menuItems.forEach(function(e) {
                var i = e.querySelector("div.mp-level");
                i && e.querySelector("a").addEventListener(t.eventtype, function(n) {
                    n.preventDefault();
                    var s = o(e, "mp-level").getAttribute("data-level");
                    t.level <= s && (n.stopPropagation(), classie.add(o(e, "mp-level"), "mp-level-overlay"), t._openMenu(i))
                })
            }), this.levels.forEach(function(e) {
                e.addEventListener(t.eventtype, function(i) {
                    i.stopPropagation();
                    var n = e.getAttribute("data-level");
                    t.level > n && (t.level = n, t._closeMenu())
                })
            }), this.levelBack.forEach(function(e) {
                e.addEventListener(t.eventtype, function(i) {
                    i.preventDefault();
                    var n = o(e, "mp-level").getAttribute("data-level");
                    t.level <= n && (i.stopPropagation(), t.level = o(e, "mp-level").getAttribute("data-level") - 1, 0 === t.level ? t._resetMenu() : t._closeMenu())
                })
            })
        },
        _openMenu: function(t) {
            ++this.level;
            var e = (this.level - 1) * this.options.levelSpacing,
                i = "overlap" === this.options.type ? this.el.offsetWidth + e : this.el.offsetWidth;
            if (this._setTransform("translate3d(" + i + "px,0,0)"), t) {
                this._setTransform("", t);
                for (var n = 0, s = this.levels.length; s > n; ++n) {
                    var o = this.levels[n];
                    o == t || classie.has(o, "mp-level-open") || this._setTransform("translate3d(-100%,0,0) translate3d(" + -1 * e + "px,0,0)", o)
                }
            }
            1 === this.level && (classie.add(this.wrapper, "mp-pushed"), this.open = !0), classie.add(t || this.levels[0], "mp-level-open")
        },
        _resetMenu: function() {
            this._setTransform("translate3d(0,0,0)"), this.level = 0, classie.remove(this.wrapper, "mp-pushed"), this._toggleLevels(), this.open = !1
        },
        _closeMenu: function() {
            var t = "overlap" === this.options.type ? this.el.offsetWidth + (this.level - 1) * this.options.levelSpacing : this.el.offsetWidth;
            this._setTransform("translate3d(" + t + "px,0,0)"), this._toggleLevels()
        },
        _setTransform: function(t, e) {
            e = e || this.wrapper, e.style.WebkitTransform = t, e.style.MozTransform = t, e.style.transform = t
        },
        _toggleLevels: function() {
            for (var t = 0, e = this.levels.length; e > t; ++t) {
                var i = this.levels[t];
                i.getAttribute("data-level") >= this.level + 1 ? (classie.remove(i, "mp-level-open"), classie.remove(i, "mp-level-overlay")) : Number(i.getAttribute("data-level")) == this.level && classie.remove(i, "mp-level-overlay")
            }
        }
    }, t.mlPushMenu = a
}(window), ! function(t, e) {
    t.MixItUp = function() {
        var e = this;
        e._execAction("_constructor", 0), t.extend(e, {
            selectors: {
                target: ".mix",
                filter: ".filter",
                sort: ".sort"
            },
            animation: {
                enable: !0,
                effects: "fade scale",
                duration: 600,
                easing: "ease",
                perspectiveDistance: "3000",
                perspectiveOrigin: "50% 50%",
                queue: !0,
                queueLimit: 1,
                animateChangeLayout: !1,
                animateResizeContainer: !0,
                animateResizeTargets: !1,
                staggerSequence: !1,
                reverseOut: !1
            },
            callbacks: {
                onMixLoad: !1,
                onMixStart: !1,
                onMixBusy: !1,
                onMixEnd: !1,
                onMixFail: !1,
                _user: !1
            },
            controls: {
                enable: !0,
                live: !1,
                toggleFilterButtons: !1,
                toggleLogic: "or",
                activeClass: "active"
            },
            layout: {
                display: "inline-block",
                containerClass: "",
                containerClassFail: "fail"
            },
            load: {
                filter: "all",
                sort: !1
            },
            _$body: null,
            _$container: null,
            _$targets: null,
            _$parent: null,
            _$sortButtons: null,
            _$filterButtons: null,
            _suckMode: !1,
            _mixing: !1,
            _sorting: !1,
            _clicking: !1,
            _loading: !0,
            _changingLayout: !1,
            _changingClass: !1,
            _changingDisplay: !1,
            _origOrder: [],
            _startOrder: [],
            _newOrder: [],
            _activeFilter: null,
            _toggleArray: [],
            _toggleString: "",
            _activeSort: "default:asc",
            _newSort: null,
            _startHeight: null,
            _newHeight: null,
            _incPadding: !0,
            _newDisplay: null,
            _newClass: null,
            _targetsBound: 0,
            _targetsDone: 0,
            _queue: [],
            _$show: t(),
            _$hide: t()
        }), e._execAction("_constructor", 1)
    }, t.MixItUp.prototype = {
        constructor: t.MixItUp,
        _instances: {},
        _handled: {
            _filter: {},
            _sort: {}
        },
        _bound: {
            _filter: {},
            _sort: {}
        },
        _actions: {},
        _filters: {},
        extend: function(e) {
            for (var i in e) t.MixItUp.prototype[i] = e[i]
        },
        addAction: function(e, i, n, s) {
            t.MixItUp.prototype._addHook("_actions", e, i, n, s)
        },
        addFilter: function(e, i, n, s) {
            t.MixItUp.prototype._addHook("_filters", e, i, n, s)
        },
        _addHook: function(e, i, n, s, o) {
            var a = t.MixItUp.prototype[e],
                r = {};
            o = 1 === o || "post" === o ? "post" : "pre", r[i] = {}, r[i][o] = {}, r[i][o][n] = s, t.extend(!0, a, r)
        },
        _init: function(e, i) {
            var n = this;
            if (n._execAction("_init", 0, arguments), i && t.extend(!0, n, i), n._$body = t("body"), n._domNode = e, n._$container = t(e), n._$container.addClass(n.layout.containerClass), n._id = e.id, n._platformDetect(), n._brake = n._getPrefixedCSS("transition", "none"), n._refresh(!0), n._$parent = n._$targets.parent().length ? n._$targets.parent() : n._$container, n.load.sort && (n._newSort = n._parseSort(n.load.sort), n._newSortString = n.load.sort, n._activeSort = n.load.sort, n._sort(), n._printSort()), n._activeFilter = "all" === n.load.filter ? n.selectors.target : "none" === n.load.filter ? "" : n.load.filter, n.controls.enable && n._bindHandlers(), n.controls.toggleFilterButtons) {
                n._buildToggleArray();
                for (var s = 0; s < n._toggleArray.length; s++) n._updateControls({
                    filter: n._toggleArray[s],
                    sort: n._activeSort
                }, !0)
            } else n.controls.enable && n._updateControls({
                filter: n._activeFilter,
                sort: n._activeSort
            });
            n._filter(), n._init = !0, n._$container.data("mixItUp", n), n._execAction("_init", 1, arguments), n._buildState(), n._$targets.css(n._brake), n._goMix(n.animation.enable)
        },
        _platformDetect: function() {
            var t = this,
                i = ["Webkit", "Moz", "O", "ms"],
                n = ["webkit", "moz"],
                s = window.navigator.appVersion.match(/Chrome\/(\d+)\./) || !1,
                o = "undefined" != typeof InstallTrigger,
                a = function(t) {
                    for (var e = 0; e < i.length; e++)
                        if (i[e] + "Transition" in t.style) return {
                            prefix: "-" + i[e].toLowerCase() + "-",
                            vendor: i[e]
                        };
                    return "transition" in t.style ? "" : !1
                },
                r = a(t._domNode);
            t._execAction("_platformDetect", 0), t._chrome = s ? parseInt(s[1], 10) : !1, t._ff = o ? parseInt(window.navigator.userAgent.match(/rv:([^)]+)\)/)[1]) : !1, t._prefix = r.prefix, t._vendor = r.vendor, t._suckMode = !window.atob || !t._prefix, t._suckMode && (t.animation.enable = !1), t._ff && t._ff <= 4 && (t.animation.enable = !1);
            for (var l = 0; l < n.length && !window.requestAnimationFrame; l++) window.requestAnimationFrame = window[n[l] + "RequestAnimationFrame"];
            "function" != typeof Object.getPrototypeOf && ("object" == typeof "test".__proto__ ? Object.getPrototypeOf = function(t) {
                return t.__proto__
            } : Object.getPrototypeOf = function(t) {
                return t.constructor.prototype
            }), t._domNode.nextElementSibling === e && Object.defineProperty(Element.prototype, "nextElementSibling", {
                get: function() {
                    for (var t = this.nextSibling; t;) {
                        if (1 === t.nodeType) return t;
                        t = t.nextSibling
                    }
                    return null
                }
            }), t._execAction("_platformDetect", 1)
        },
        _refresh: function(t, i) {
            var n = this;
            n._execAction("_refresh", 0, arguments), n._$targets = n._$container.find(n.selectors.target);
            for (var s = 0; s < n._$targets.length; s++) {
                var o = n._$targets[s];
                if (o.dataset === e || i) {
                    o.dataset = {};
                    for (var a = 0; a < o.attributes.length; a++) {
                        var r = o.attributes[a],
                            l = r.name,
                            c = r.value;
                        if (l.indexOf("data-") > -1) {
                            var h = n._helpers._camelCase(l.substring(5, l.length));
                            o.dataset[h] = c
                        }
                    }
                }
                o.mixParent === e && (o.mixParent = n._id)
            }
            if (n._$targets.length && t || !n._origOrder.length && n._$targets.length) {
                n._origOrder = [];
                for (var s = 0; s < n._$targets.length; s++) {
                    var o = n._$targets[s];
                    n._origOrder.push(o)
                }
            }
            n._execAction("_refresh", 1, arguments)
        },
        _bindHandlers: function() {
            var i = this,
                n = t.MixItUp.prototype._bound._filter,
                s = t.MixItUp.prototype._bound._sort;
            i._execAction("_bindHandlers", 0), i.controls.live ? i._$body.on("click.mixItUp." + i._id, i.selectors.sort, function() {
                i._processClick(t(this), "sort")
            }).on("click.mixItUp." + i._id, i.selectors.filter, function() {
                i._processClick(t(this), "filter")
            }) : (i._$sortButtons = t(i.selectors.sort), i._$filterButtons = t(i.selectors.filter), i._$sortButtons.on("click.mixItUp." + i._id, function() {
                i._processClick(t(this), "sort")
            }), i._$filterButtons.on("click.mixItUp." + i._id, function() {
                i._processClick(t(this), "filter")
            })), n[i.selectors.filter] = n[i.selectors.filter] === e ? 1 : n[i.selectors.filter] + 1, s[i.selectors.sort] = s[i.selectors.sort] === e ? 1 : s[i.selectors.sort] + 1, i._execAction("_bindHandlers", 1)
        },
        _processClick: function(i, n) {
            var s = this,
                o = function(i, n, o) {
                    var a = t.MixItUp.prototype;
                    a._handled["_" + n][s.selectors[n]] = a._handled["_" + n][s.selectors[n]] === e ? 1 : a._handled["_" + n][s.selectors[n]] + 1, a._handled["_" + n][s.selectors[n]] === a._bound["_" + n][s.selectors[n]] && (i[(o ? "remove" : "add") + "Class"](s.controls.activeClass), delete a._handled["_" + n][s.selectors[n]])
                };
            if (s._execAction("_processClick", 0, arguments), !s._mixing || s.animation.queue && s._queue.length < s.animation.queueLimit) {
                if (s._clicking = !0, "sort" === n) {
                    var a = i.attr("data-sort");
                    (!i.hasClass(s.controls.activeClass) || a.indexOf("random") > -1) && (t(s.selectors.sort).removeClass(s.controls.activeClass), o(i, n), s.sort(a))
                }
                if ("filter" === n) {
                    var r, l = i.attr("data-filter"),
                        c = "or" === s.controls.toggleLogic ? "," : "";
                    s.controls.toggleFilterButtons ? (s._buildToggleArray(), i.hasClass(s.controls.activeClass) ? (o(i, n, !0), r = s._toggleArray.indexOf(l), s._toggleArray.splice(r, 1)) : (o(i, n), s._toggleArray.push(l)), s._toggleArray = t.grep(s._toggleArray, function(t) {
                        return t
                    }), s._toggleString = s._toggleArray.join(c), s.filter(s._toggleString)) : i.hasClass(s.controls.activeClass) || (t(s.selectors.filter).removeClass(s.controls.activeClass), o(i, n), s.filter(l))
                }
                s._execAction("_processClick", 1, arguments)
            } else "function" == typeof s.callbacks.onMixBusy && s.callbacks.onMixBusy.call(s._domNode, s._state, s), s._execAction("_processClickBusy", 1, arguments)
        },
        _buildToggleArray: function() {
            var t = this,
                e = t._activeFilter.replace(/\s/g, "");
            if (t._execAction("_buildToggleArray", 0, arguments), "or" === t.controls.toggleLogic) t._toggleArray = e.split(",");
            else {
                t._toggleArray = e.split("."), !t._toggleArray[0] && t._toggleArray.shift();
                for (var i, n = 0; i = t._toggleArray[n]; n++) t._toggleArray[n] = "." + i
            }
            t._execAction("_buildToggleArray", 1, arguments)
        },
        _updateControls: function(i, n) {
            var s = this,
                o = {
                    filter: i.filter,
                    sort: i.sort
                },
                a = function(t, e) {
                    try {
                        n && "filter" === r && "none" !== o.filter && "" !== o.filter ? t.filter(e).addClass(s.controls.activeClass) : t.removeClass(s.controls.activeClass).filter(e).addClass(s.controls.activeClass)
                    } catch (i) {}
                },
                r = "filter",
                l = null;
            s._execAction("_updateControls", 0, arguments), i.filter === e && (o.filter = s._activeFilter), i.sort === e && (o.sort = s._activeSort), o.filter === s.selectors.target && (o.filter = "all");
            for (var c = 0; 2 > c; c++) l = s.controls.live ? t(s.selectors[r]) : s["_$" + r + "Buttons"], l && a(l, "[data-" + r + '="' + o[r] + '"]'), r = "sort";
            s._execAction("_updateControls", 1, arguments)
        },
        _filter: function() {
            var e = this;
            e._execAction("_filter", 0);
            for (var i = 0; i < e._$targets.length; i++) {
                var n = t(e._$targets[i]);
                n.is(e._activeFilter) ? e._$show = e._$show.add(n) : e._$hide = e._$hide.add(n)
            }
            e._execAction("_filter", 1)
        },
        _sort: function() {
            var t = this,
                e = function(t) {
                    for (var e = t.slice(), i = e.length, n = i; n--;) {
                        var s = parseInt(Math.random() * i),
                            o = e[n];
                        e[n] = e[s], e[s] = o
                    }
                    return e
                };
            t._execAction("_sort", 0), t._startOrder = [];
            for (var i = 0; i < t._$targets.length; i++) {
                var n = t._$targets[i];
                t._startOrder.push(n)
            }
            switch (t._newSort[0].sortBy) {
                case "default":
                    t._newOrder = t._origOrder;
                    break;
                case "random":
                    t._newOrder = e(t._startOrder);
                    break;
                case "custom":
                    t._newOrder = t._newSort[0].order;
                    break;
                default:
                    t._newOrder = t._startOrder.concat().sort(function(e, i) {
                        return t._compare(e, i)
                    })
            }
            t._execAction("_sort", 1)
        },
        _compare: function(t, e, i) {
            i = i ? i : 0;
            var n = this,
                s = n._newSort[i].order,
                o = function(t) {
                    return t.dataset[n._newSort[i].sortBy] || 0
                },
                a = isNaN(1 * o(t)) ? o(t).toLowerCase() : 1 * o(t),
                r = isNaN(1 * o(e)) ? o(e).toLowerCase() : 1 * o(e);
            return r > a ? "asc" === s ? -1 : 1 : a > r ? "asc" === s ? 1 : -1 : a === r && n._newSort.length > i + 1 ? n._compare(t, e, i + 1) : 0
        },
        _printSort: function(t) {
            var e = this,
                i = t ? e._startOrder : e._newOrder,
                n = e._$parent[0].querySelectorAll(e.selectors.target),
                s = n.length ? n[n.length - 1].nextElementSibling : null,
                o = document.createDocumentFragment();
            e._execAction("_printSort", 0, arguments);
            for (var a = 0; a < n.length; a++) {
                var r = n[a],
                    l = r.nextSibling;
                "absolute" !== r.style.position && (l && "#text" === l.nodeName && e._$parent[0].removeChild(l), e._$parent[0].removeChild(r))
            }
            for (var a = 0; a < i.length; a++) {
                var c = i[a];
                if ("default" !== e._newSort[0].sortBy || "desc" !== e._newSort[0].order || t) o.appendChild(c), o.appendChild(document.createTextNode(" "));
                else {
                    var h = o.firstChild;
                    o.insertBefore(c, h), o.insertBefore(document.createTextNode(" "), c)
                }
            }
            s ? e._$parent[0].insertBefore(o, s) : e._$parent[0].appendChild(o), e._execAction("_printSort", 1, arguments)
        },
        _parseSort: function(t) {
            for (var e = this, i = "string" == typeof t ? t.split(" ") : [t], n = [], s = 0; s < i.length; s++) {
                var o = "string" == typeof t ? i[s].split(":") : ["custom", i[s]],
                    a = {
                        sortBy: e._helpers._camelCase(o[0]),
                        order: o[1] || "asc"
                    };
                if (n.push(a), "default" === a.sortBy || "random" === a.sortBy) break
            }
            return e._execFilter("_parseSort", n, arguments)
        },
        _parseEffects: function() {
            var t = this,
                e = {
                    opacity: "",
                    transformIn: "",
                    transformOut: "",
                    filter: ""
                },
                i = function(e, i) {
                    if (t.animation.effects.indexOf(e) > -1) {
                        if (i) {
                            var n = t.animation.effects.indexOf(e + "(");
                            if (n > -1) {
                                var s = t.animation.effects.substring(n),
                                    o = /\(([^)]+)\)/.exec(s),
                                    a = o[1];
                                return {
                                    val: a
                                }
                            }
                        }
                        return !0
                    }
                    return !1
                },
                n = function(t, e) {
                    return e ? "-" === t.charAt(0) ? t.substr(1, t.length) : "-" + t : t
                },
                s = function(t, s) {
                    for (var o = [
                            ["scale", ".01"],
                            ["translateX", "20px"],
                            ["translateY", "20px"],
                            ["translateZ", "20px"],
                            ["rotateX", "90deg"],
                            ["rotateY", "90deg"],
                            ["rotateZ", "180deg"]
                        ], a = 0; a < o.length; a++) {
                        var r = o[a][0],
                            l = o[a][1],
                            c = s && "scale" !== r;
                        e[t] += i(r) ? r + "(" + n(i(r, !0).val || l, c) + ") " : ""
                    }
                };
            return e.opacity = i("fade") ? i("fade", !0).val || "0" : "1", s("transformIn"), t.animation.reverseOut ? s("transformOut", !0) : e.transformOut = e.transformIn, e.transition = {}, e.transition = t._getPrefixedCSS("transition", "all " + t.animation.duration + "ms " + t.animation.easing + ", opacity " + t.animation.duration + "ms linear"), t.animation.stagger = !!i("stagger"), t.animation.staggerDuration = parseInt(i("stagger") && i("stagger", !0).val ? i("stagger", !0).val : 100), t._execFilter("_parseEffects", e)
        },
        _buildState: function(t) {
            var e = this,
                i = {};
            return e._execAction("_buildState", 0), i = {
                activeFilter: "" === e._activeFilter ? "none" : e._activeFilter,
                activeSort: t && e._newSortString ? e._newSortString : e._activeSort,
                fail: !e._$show.length && "" !== e._activeFilter,
                $targets: e._$targets,
                $show: e._$show,
                $hide: e._$hide,
                totalTargets: e._$targets.length,
                totalShow: e._$show.length,
                totalHide: e._$hide.length,
                display: t && e._newDisplay ? e._newDisplay : e.layout.display
            }, t ? e._execFilter("_buildState", i) : (e._state = i, void e._execAction("_buildState", 1))
        },
        _goMix: function(t) {
            var e = this,
                i = function() {
                    e._chrome && 31 === e._chrome && o(e._$parent[0]), e._setInter(), n()
                },
                n = function() {
                    var t = window.pageYOffset,
                        i = window.pageXOffset;
                    document.documentElement.scrollHeight, e._getInterMixData(), e._setFinal(), e._getFinalMixData(), window.pageYOffset !== t && window.scrollTo(i, t), e._prepTargets(), window.requestAnimationFrame ? requestAnimationFrame(s) : setTimeout(function() {
                        s()
                    }, 20)
                },
                s = function() {
                    e._animateTargets(), 0 === e._targetsBound && e._cleanUp()
                },
                o = function(t) {
                    var e = t.parentElement,
                        i = document.createElement("div"),
                        n = document.createDocumentFragment();
                    e.insertBefore(i, t), n.appendChild(t), e.replaceChild(t, i)
                },
                a = e._buildState(!0);
            e._execAction("_goMix", 0, arguments), !e.animation.duration && (t = !1), e._mixing = !0, e._$container.removeClass(e.layout.containerClassFail), "function" == typeof e.callbacks.onMixStart && e.callbacks.onMixStart.call(e._domNode, e._state, a, e), e._$container.trigger("mixStart", [e._state, a, e]), e._getOrigMixData(), t && !e._suckMode ? window.requestAnimationFrame ? requestAnimationFrame(i) : i() : e._cleanUp(), e._execAction("_goMix", 1, arguments)
        },
        _getTargetData: function(t, e) {
            var i, n = this;
            t.dataset[e + "PosX"] = t.offsetLeft, t.dataset[e + "PosY"] = t.offsetTop, n.animation.animateResizeTargets && (i = n._suckMode ? {
                marginBottom: "",
                marginRight: ""
            } : window.getComputedStyle(t), t.dataset[e + "MarginBottom"] = parseInt(i.marginBottom), t.dataset[e + "MarginRight"] = parseInt(i.marginRight), t.dataset[e + "Width"] = t.offsetWidth, t.dataset[e + "Height"] = t.offsetHeight)
        },
        _getOrigMixData: function() {
            var t = this,
                e = t._suckMode ? {
                    boxSizing: ""
                } : window.getComputedStyle(t._$parent[0]),
                i = e.boxSizing || e[t._vendor + "BoxSizing"];
            t._incPadding = "border-box" === i, t._execAction("_getOrigMixData", 0), !t._suckMode && (t.effects = t._parseEffects()), t._$toHide = t._$hide.filter(":visible"), t._$toShow = t._$show.filter(":hidden"), t._$pre = t._$targets.filter(":visible"), t._startHeight = t._incPadding ? t._$parent.outerHeight() : t._$parent.height();
            for (var n = 0; n < t._$pre.length; n++) {
                var s = t._$pre[n];
                t._getTargetData(s, "orig")
            }
            t._execAction("_getOrigMixData", 1)
        },
        _setInter: function() {
            var t = this;
            t._execAction("_setInter", 0), t._changingLayout && t.animation.animateChangeLayout ? (t._$toShow.css("display", t._newDisplay), t._changingClass && t._$container.removeClass(t.layout.containerClass).addClass(t._newClass)) : t._$toShow.css("display", t.layout.display), t._execAction("_setInter", 1)
        },
        _getInterMixData: function() {
            var t = this;
            t._execAction("_getInterMixData", 0);
            for (var e = 0; e < t._$toShow.length; e++) {
                var i = t._$toShow[e];
                t._getTargetData(i, "inter")
            }
            for (var e = 0; e < t._$pre.length; e++) {
                var i = t._$pre[e];
                t._getTargetData(i, "inter")
            }
            t._execAction("_getInterMixData", 1)
        },
        _setFinal: function() {
            var t = this;
            t._execAction("_setFinal", 0), t._sorting && t._printSort(), t._$toHide.removeStyle("display"), t._changingLayout && t.animation.animateChangeLayout && t._$pre.css("display", t._newDisplay), t._execAction("_setFinal", 1)
        },
        _getFinalMixData: function() {
            var t = this;
            t._execAction("_getFinalMixData", 0);
            for (var e = 0; e < t._$toShow.length; e++) {
                var i = t._$toShow[e];
                t._getTargetData(i, "final")
            }
            for (var e = 0; e < t._$pre.length; e++) {
                var i = t._$pre[e];
                t._getTargetData(i, "final")
            }
            t._newHeight = t._incPadding ? t._$parent.outerHeight() : t._$parent.height(), t._sorting && t._printSort(!0), t._$toShow.removeStyle("display"), t._$pre.css("display", t.layout.display), t._changingClass && t.animation.animateChangeLayout && t._$container.removeClass(t._newClass).addClass(t.layout.containerClass), t._execAction("_getFinalMixData", 1)
        },
        _prepTargets: function() {
            var e = this,
                i = {
                    _in: e._getPrefixedCSS("transform", e.effects.transformIn),
                    _out: e._getPrefixedCSS("transform", e.effects.transformOut)
                };
            e._execAction("_prepTargets", 0), e.animation.animateResizeContainer && e._$parent.css("height", e._startHeight + "px");
            for (var n = 0; n < e._$toShow.length; n++) {
                var s = e._$toShow[n],
                    o = t(s);
                s.style.opacity = e.effects.opacity, s.style.display = e._changingLayout && e.animation.animateChangeLayout ? e._newDisplay : e.layout.display, o.css(i._in), e.animation.animateResizeTargets && (s.style.width = s.dataset.finalWidth + "px", s.style.height = s.dataset.finalHeight + "px", s.style.marginRight = -(s.dataset.finalWidth - s.dataset.interWidth) + 1 * s.dataset.finalMarginRight + "px", s.style.marginBottom = -(s.dataset.finalHeight - s.dataset.interHeight) + 1 * s.dataset.finalMarginBottom + "px")
            }
            for (var n = 0; n < e._$pre.length; n++) {
                var s = e._$pre[n],
                    o = t(s),
                    a = {
                        x: s.dataset.origPosX - s.dataset.interPosX,
                        y: s.dataset.origPosY - s.dataset.interPosY
                    },
                    i = e._getPrefixedCSS("transform", "translate(" + a.x + "px," + a.y + "px)");
                o.css(i), e.animation.animateResizeTargets && (s.style.width = s.dataset.origWidth + "px", s.style.height = s.dataset.origHeight + "px", s.dataset.origWidth - s.dataset.finalWidth && (s.style.marginRight = -(s.dataset.origWidth - s.dataset.interWidth) + 1 * s.dataset.origMarginRight + "px"), s.dataset.origHeight - s.dataset.finalHeight && (s.style.marginBottom = -(s.dataset.origHeight - s.dataset.interHeight) + 1 * s.dataset.origMarginBottom + "px"))
            }
            e._execAction("_prepTargets", 1)
        },
        _animateTargets: function() {
            var e = this;
            e._execAction("_animateTargets", 0), e._targetsDone = 0, e._targetsBound = 0, e._$parent.css(e._getPrefixedCSS("perspective", e.animation.perspectiveDistance + "px")).css(e._getPrefixedCSS("perspective-origin", e.animation.perspectiveOrigin)), e.animation.animateResizeContainer && e._$parent.css(e._getPrefixedCSS("transition", "height " + e.animation.duration + "ms ease")).css("height", e._newHeight + "px");
            for (var i = 0; i < e._$toShow.length; i++) {
                var n = e._$toShow[i],
                    s = t(n),
                    o = {
                        x: n.dataset.finalPosX - n.dataset.interPosX,
                        y: n.dataset.finalPosY - n.dataset.interPosY
                    },
                    a = e._getDelay(i),
                    r = {};
                n.style.opacity = "";
                for (var l = 0; 2 > l; l++) {
                    var c = 0 === l ? c = e._prefix : "";
                    e._ff && e._ff <= 20 && (r[c + "transition-property"] = "all", r[c + "transition-timing-function"] = e.animation.easing + "ms", r[c + "transition-duration"] = e.animation.duration + "ms"), r[c + "transition-delay"] = a + "ms", r[c + "transform"] = "translate(" + o.x + "px," + o.y + "px)"
                }(e.effects.transform || e.effects.opacity) && e._bindTargetDone(s), e._ff && e._ff <= 20 ? s.css(r) : s.css(e.effects.transition).css(r)
            }
            for (var i = 0; i < e._$pre.length; i++) {
                var n = e._$pre[i],
                    s = t(n),
                    o = {
                        x: n.dataset.finalPosX - n.dataset.interPosX,
                        y: n.dataset.finalPosY - n.dataset.interPosY
                    },
                    a = e._getDelay(i);
                (n.dataset.finalPosX !== n.dataset.origPosX || n.dataset.finalPosY !== n.dataset.origPosY) && e._bindTargetDone(s), s.css(e._getPrefixedCSS("transition", "all " + e.animation.duration + "ms " + e.animation.easing + " " + a + "ms")), s.css(e._getPrefixedCSS("transform", "translate(" + o.x + "px," + o.y + "px)")), e.animation.animateResizeTargets && (n.dataset.origWidth - n.dataset.finalWidth && 1 * n.dataset.finalWidth && (n.style.width = n.dataset.finalWidth + "px", n.style.marginRight = -(n.dataset.finalWidth - n.dataset.interWidth) + 1 * n.dataset.finalMarginRight + "px"),
                    n.dataset.origHeight - n.dataset.finalHeight && 1 * n.dataset.finalHeight && (n.style.height = n.dataset.finalHeight + "px", n.style.marginBottom = -(n.dataset.finalHeight - n.dataset.interHeight) + 1 * n.dataset.finalMarginBottom + "px"))
            }
            e._changingClass && e._$container.removeClass(e.layout.containerClass).addClass(e._newClass);
            for (var i = 0; i < e._$toHide.length; i++) {
                for (var n = e._$toHide[i], s = t(n), a = e._getDelay(i), h = {}, l = 0; 2 > l; l++) {
                    var c = 0 === l ? c = e._prefix : "";
                    h[c + "transition-delay"] = a + "ms", h[c + "transform"] = e.effects.transformOut, h.opacity = e.effects.opacity
                }
                s.css(e.effects.transition).css(h), (e.effects.transform || e.effects.opacity) && e._bindTargetDone(s)
            }
            e._execAction("_animateTargets", 1)
        },
        _bindTargetDone: function(e) {
            var i = this,
                n = e[0];
            i._execAction("_bindTargetDone", 0, arguments), n.dataset.bound || (n.dataset.bound = !0, i._targetsBound++, e.on("webkitTransitionEnd.mixItUp transitionend.mixItUp", function(s) {
                (s.originalEvent.propertyName.indexOf("transform") > -1 || s.originalEvent.propertyName.indexOf("opacity") > -1) && t(s.originalEvent.target).is(i.selectors.target) && (e.off(".mixItUp"), delete n.dataset.bound, i._targetDone())
            })), i._execAction("_bindTargetDone", 1, arguments)
        },
        _targetDone: function() {
            var t = this;
            t._execAction("_targetDone", 0), t._targetsDone++, t._targetsDone === t._targetsBound && t._cleanUp(), t._execAction("_targetDone", 1)
        },
        _cleanUp: function() {
            var e = this,
                i = e.animation.animateResizeTargets ? "transform opacity width height margin-bottom margin-right" : "transform opacity";
            unBrake = function() {
                e._$targets.removeStyle("transition", e._prefix)
            }, e._execAction("_cleanUp", 0), e._changingLayout ? e._$show.css("display", e._newDisplay) : e._$show.css("display", e.layout.display), e._$targets.css(e._brake), e._$targets.removeStyle(i, e._prefix).removeAttr("data-inter-pos-x data-inter-pos-y data-final-pos-x data-final-pos-y data-orig-pos-x data-orig-pos-y data-orig-height data-orig-width data-final-height data-final-width data-inter-width data-inter-height data-orig-margin-right data-orig-margin-bottom data-inter-margin-right data-inter-margin-bottom data-final-margin-right data-final-margin-bottom"), e._$hide.removeStyle("display"), e._$parent.removeStyle("height transition perspective-distance perspective perspective-origin-x perspective-origin-y perspective-origin perspectiveOrigin", e._prefix), e._sorting && (e._printSort(), e._activeSort = e._newSortString, e._sorting = !1), e._changingLayout && (e._changingDisplay && (e.layout.display = e._newDisplay, e._changingDisplay = !1), e._changingClass && (e._$parent.removeClass(e.layout.containerClass).addClass(e._newClass), e.layout.containerClass = e._newClass, e._changingClass = !1), e._changingLayout = !1), e._refresh(), e._buildState(), e._state.fail && e._$container.addClass(e.layout.containerClassFail), e._$show = t(), e._$hide = t(), window.requestAnimationFrame && requestAnimationFrame(unBrake), e._mixing = !1, "function" == typeof e.callbacks._user && e.callbacks._user.call(e._domNode, e._state, e), "function" == typeof e.callbacks.onMixEnd && e.callbacks.onMixEnd.call(e._domNode, e._state, e), e._$container.trigger("mixEnd", [e._state, e]), e._state.fail && ("function" == typeof e.callbacks.onMixFail && e.callbacks.onMixFail.call(e._domNode, e._state, e), e._$container.trigger("mixFail", [e._state, e])), e._loading && ("function" == typeof e.callbacks.onMixLoad && e.callbacks.onMixLoad.call(e._domNode, e._state, e), e._$container.trigger("mixLoad", [e._state, e])), e._queue.length && (e._execAction("_queue", 0), e.multiMix(e._queue[0][0], e._queue[0][1], e._queue[0][2]), e._queue.splice(0, 1)), e._execAction("_cleanUp", 1), e._loading = !1
        },
        _getPrefixedCSS: function(t, e, n) {
            var s = this,
                o = {};
            for (i = 0; i < 2; i++) {
                var a = 0 === i ? s._prefix : "";
                n ? o[a + t] = a + e : o[a + t] = e
            }
            return s._execFilter("_getPrefixedCSS", o, arguments)
        },
        _getDelay: function(t) {
            var e = this,
                i = "function" == typeof e.animation.staggerSequence ? e.animation.staggerSequence.call(e._domNode, t, e._state) : t,
                n = e.animation.stagger ? i * e.animation.staggerDuration : 0;
            return e._execFilter("_getDelay", n, arguments)
        },
        _parseMultiMixArgs: function(t) {
            for (var e = this, i = {
                    command: null,
                    animate: e.animation.enable,
                    callback: null
                }, n = 0; n < t.length; n++) {
                var s = t[n];
                null !== s && ("object" == typeof s || "string" == typeof s ? i.command = s : "boolean" == typeof s ? i.animate = s : "function" == typeof s && (i.callback = s))
            }
            return e._execFilter("_parseMultiMixArgs", i, arguments)
        },
        _parseInsertArgs: function(e) {
            for (var i = this, n = {
                    index: 0,
                    $object: t(),
                    multiMix: {
                        filter: i._state.activeFilter
                    },
                    callback: null
                }, s = 0; s < e.length; s++) {
                var o = e[s];
                "number" == typeof o ? n.index = o : "object" == typeof o && o instanceof t ? n.$object = o : "object" == typeof o && i._helpers._isElement(o) ? n.$object = t(o) : "object" == typeof o && null !== o ? n.multiMix = o : "boolean" != typeof o || o ? "function" == typeof o && (n.callback = o) : n.multiMix = !1
            }
            return i._execFilter("_parseInsertArgs", n, arguments)
        },
        _execAction: function(t, e, i) {
            var n = this,
                s = e ? "post" : "pre";
            if (!n._actions.isEmptyObject && n._actions.hasOwnProperty(t))
                for (var o in n._actions[t][s]) n._actions[t][s][o].call(n, i)
        },
        _execFilter: function(t, e, i) {
            var n = this;
            if (n._filters.isEmptyObject || !n._filters.hasOwnProperty(t)) return e;
            for (var s in n._filters[t]) return n._filters[t][s].call(n, i)
        },
        _helpers: {
            _camelCase: function(t) {
                return t.replace(/-([a-z])/g, function(t) {
                    return t[1].toUpperCase()
                })
            },
            _isElement: function(t) {
                return window.HTMLElement ? t instanceof HTMLElement : null !== t && 1 === t.nodeType && "string" === t.nodeName
            }
        },
        isMixing: function() {
            var t = this;
            return t._execFilter("isMixing", t._mixing)
        },
        filter: function() {
            var t = this,
                e = t._parseMultiMixArgs(arguments);
            t._clicking && (t._toggleString = ""), t.multiMix({
                filter: e.command
            }, e.animate, e.callback)
        },
        sort: function() {
            var t = this,
                e = t._parseMultiMixArgs(arguments);
            t.multiMix({
                sort: e.command
            }, e.animate, e.callback)
        },
        changeLayout: function() {
            var t = this,
                e = t._parseMultiMixArgs(arguments);
            t.multiMix({
                changeLayout: e.command
            }, e.animate, e.callback)
        },
        multiMix: function() {
            var t = this,
                i = t._parseMultiMixArgs(arguments);
            if (t._execAction("multiMix", 0, arguments), t._mixing) t.animation.queue && t._queue.length < t.animation.queueLimit ? (t._queue.push(arguments), t.controls.enable && !t._clicking && t._updateControls(i.command), t._execAction("multiMixQueue", 1, arguments)) : ("function" == typeof t.callbacks.onMixBusy && t.callbacks.onMixBusy.call(t._domNode, t._state, t), t._$container.trigger("mixBusy", [t._state, t]), t._execAction("multiMixBusy", 1, arguments));
            else {
                t.controls.enable && !t._clicking && (t.controls.toggleFilterButtons && t._buildToggleArray(), t._updateControls(i.command, t.controls.toggleFilterButtons)), t._queue.length < 2 && (t._clicking = !1), delete t.callbacks._user, i.callback && (t.callbacks._user = i.callback);
                var n = i.command.sort,
                    s = i.command.filter,
                    o = i.command.changeLayout;
                t._refresh(), n && (t._newSort = t._parseSort(n), t._newSortString = n, t._sorting = !0, t._sort()), s !== e && (s = "all" === s ? t.selectors.target : s, t._activeFilter = s), t._filter(), o && (t._newDisplay = "string" == typeof o ? o : o.display || t.layout.display, t._newClass = o.containerClass || "", (t._newDisplay !== t.layout.display || t._newClass !== t.layout.containerClass) && (t._changingLayout = !0, t._changingClass = t._newClass !== t.layout.containerClass, t._changingDisplay = t._newDisplay !== t.layout.display)), t._$targets.css(t._brake), t._goMix(i.animate ^ t.animation.enable ? i.animate : t.animation.enable), t._execAction("multiMix", 1, arguments)
            }
        },
        insert: function() {
            var t = this,
                e = t._parseInsertArgs(arguments),
                i = "function" == typeof e.callback ? e.callback : null,
                n = document.createDocumentFragment(),
                s = function() {
                    return t._refresh(), t._$targets.length ? e.index < t._$targets.length || !t._$targets.length ? t._$targets[e.index] : t._$targets[t._$targets.length - 1].nextElementSibling : t._$parent[0].children[0]
                }();
            if (t._execAction("insert", 0, arguments), e.$object) {
                for (var o = 0; o < e.$object.length; o++) {
                    var a = e.$object[o];
                    n.appendChild(a), n.appendChild(document.createTextNode(" "))
                }
                t._$parent[0].insertBefore(n, s)
            }
            t._execAction("insert", 1, arguments), "object" == typeof e.multiMix && t.multiMix(e.multiMix, i)
        },
        prepend: function() {
            var t = this,
                e = t._parseInsertArgs(arguments);
            t.insert(0, e.$object, e.multiMix, e.callback)
        },
        append: function() {
            var t = this,
                e = t._parseInsertArgs(arguments);
            t.insert(t._state.totalTargets, e.$object, e.multiMix, e.callback)
        },
        getOption: function(t) {
            var i = this,
                n = function(t, i) {
                    for (var n = i.split("."), s = n.pop(), o = n.length, a = 1, r = n[0] || i;
                        (t = t[r]) && o > a;) r = n[a], a++;
                    return t !== e ? t[s] !== e ? t[s] : t : void 0
                };
            return t ? i._execFilter("getOption", n(i, t), arguments) : i
        },
        setOptions: function(e) {
            var i = this;
            i._execAction("setOptions", 0, arguments), "object" == typeof e && t.extend(!0, i, e), i._execAction("setOptions", 1, arguments)
        },
        getState: function() {
            var t = this;
            return t._execFilter("getState", t._state, t)
        },
        forceRefresh: function() {
            var t = this;
            t._refresh(!1, !0)
        },
        destroy: function(e) {
            var i = this,
                n = t.MixItUp.prototype._bound._filter,
                s = t.MixItUp.prototype._bound._sort;
            i._execAction("destroy", 0, arguments), i._$body.add(t(i.selectors.sort)).add(t(i.selectors.filter)).off(".mixItUp");
            for (var o = 0; o < i._$targets.length; o++) {
                var a = i._$targets[o];
                e && (a.style.display = ""), delete a.mixParent
            }
            i._execAction("destroy", 1, arguments), n[i.selectors.filter] && n[i.selectors.filter] > 1 ? n[i.selectors.filter]-- : 1 === n[i.selectors.filter] && delete n[i.selectors.filter], s[i.selectors.sort] && s[i.selectors.sort] > 1 ? s[i.selectors.sort]-- : 1 === s[i.selectors.sort] && delete s[i.selectors.sort], delete t.MixItUp.prototype._instances[i._id]
        }
    }, t.fn.mixItUp = function() {
        var i, n = arguments,
            s = [],
            o = function(e, i) {
                var n = new t.MixItUp,
                    s = function() {
                        return ("00000" + (16777216 * Math.random() << 0).toString(16)).substr(-6).toUpperCase()
                    };
                n._execAction("_instantiate", 0, arguments), e.id = e.id ? e.id : "MixItUp" + s(), n._instances[e.id] || (n._instances[e.id] = n, n._init(e, i)), n._execAction("_instantiate", 1, arguments)
            };
        return i = this.each(function() {
            if (n && "string" == typeof n[0]) {
                var i = t.MixItUp.prototype._instances[this.id];
                if ("isLoaded" === n[0]) s.push(!!i);
                else {
                    var a = i[n[0]](n[1], n[2], n[3]);
                    a !== e && s.push(a)
                }
            } else o(this, n[0])
        }), s.length ? s.length > 1 ? s : s[0] : i
    }, t.fn.removeStyle = function(i, n) {
        return n = n ? n : "", this.each(function() {
            for (var s = this, o = i.split(" "), a = 0; a < o.length; a++)
                for (var r = 0; 4 > r; r++) {
                    switch (r) {
                        case 0:
                            var l = o[a];
                            break;
                        case 1:
                            var l = t.MixItUp.prototype._helpers._camelCase(l);
                            break;
                        case 2:
                            var l = n + o[a];
                            break;
                        case 3:
                            var l = t.MixItUp.prototype._helpers._camelCase(n + o[a])
                    }
                    if (s.style[l] !== e && "unknown" != typeof s.style[l] && s.style[l].length > 0 && (s.style[l] = ""), !n && 1 === r) break
                }
            s.attributes && s.attributes.style && s.attributes.style !== e && "" === s.attributes.style.value && s.attributes.removeNamedItem("style")
        })
    }
}(jQuery), + function(t) {
    function e(e) {
        t(n).remove(), t(s).each(function() {
            var n = i(t(this)),
                s = {
                    relatedTarget: this
                };
            n.hasClass("open") && (n.trigger(e = t.Event("hide.bs.dropdown", s)), e.isDefaultPrevented() || n.removeClass("open").trigger("hidden.bs.dropdown", s))
        })
    }

    function i(e) {
        var i = e.attr("data-target");
        i || (i = e.attr("href"), i = i && /#[A-Za-z]/.test(i) && i.replace(/.*(?=#[^\s]*$)/, ""));
        var n = i && t(i);
        return n && n.length ? n : e.parent()
    }
    var n = ".dropdown-backdrop",
        s = "[data-toggle=dropdown]",
        o = function(e) {
            t(e).on("click.bs.dropdown", this.toggle)
        };
    o.prototype.toggle = function(n) {
        var s = t(this);
        if (!s.is(".disabled, :disabled")) {
            var o = i(s),
                a = o.hasClass("open");
            if (e(), !a) {
                "ontouchstart" in document.documentElement && !o.closest(".navbar-nav").length && t('<div class="dropdown-backdrop"/>').insertAfter(t(this)).on("click", e);
                var r = {
                    relatedTarget: this
                };
                if (o.trigger(n = t.Event("show.bs.dropdown", r)), n.isDefaultPrevented()) return;
                o.toggleClass("open").trigger("shown.bs.dropdown", r), s.focus()
            }
            return !1
        }
    }, o.prototype.keydown = function(e) {
        if (/(38|40|27)/.test(e.keyCode)) {
            var n = t(this);
            if (e.preventDefault(), e.stopPropagation(), !n.is(".disabled, :disabled")) {
                var o = i(n),
                    a = o.hasClass("open");
                if (!a || a && 27 == e.keyCode) return 27 == e.which && o.find(s).focus(), n.click();
                var r = " li:not(.divider):visible a",
                    l = o.find("[role=menu]" + r + ", [role=listbox]" + r);
                if (l.length) {
                    var c = l.index(l.filter(":focus"));
                    38 == e.keyCode && c > 0 && c--, 40 == e.keyCode && c < l.length - 1 && c++, ~c || (c = 0), l.eq(c).focus()
                }
            }
        }
    };
    var a = t.fn.dropdown;
    t.fn.dropdown = function(e) {
        return this.each(function() {
            var i = t(this),
                n = i.data("bs.dropdown");
            n || i.data("bs.dropdown", n = new o(this)), "string" == typeof e && n[e].call(i)
        })
    }, t.fn.dropdown.Constructor = o, t.fn.dropdown.noConflict = function() {
        return t.fn.dropdown = a, this
    }, t(document).on("click.bs.dropdown.data-api", e).on("click.bs.dropdown.data-api", ".dropdown form", function(t) {
        t.stopPropagation()
    }).on("click.bs.dropdown.data-api", s, o.prototype.toggle).on("keydown.bs.dropdown.data-api", s + ", [role=menu], [role=listbox]", o.prototype.keydown)
}(jQuery), + function(t) {
    "use strict";
    var e = function(e, i) {
        this.options = i, this.$element = t(e), this.$backdrop = this.isShown = null, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, t.proxy(function() {
            this.$element.trigger("loaded.bs.modal")
        }, this))
    };
    e.DEFAULTS = {
        backdrop: !0,
        keyboard: !0,
        show: !0
    }, e.prototype.toggle = function(t) {
        return this[this.isShown ? "hide" : "show"](t)
    }, e.prototype.show = function(e) {
        var i = this,
            n = t.Event("show.bs.modal", {
                relatedTarget: e
            });
        this.$element.trigger(n), this.isShown || n.isDefaultPrevented() || (this.isShown = !0, this.escape(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', t.proxy(this.hide, this)), this.backdrop(function() {
            var n = t.support.transition && i.$element.hasClass("fade");
            i.$element.parent().length || i.$element.appendTo(document.body), i.$element.show().scrollTop(0), n && i.$element[0].offsetWidth, i.$element.addClass("in").attr("aria-hidden", !1), i.enforceFocus();
            var s = t.Event("shown.bs.modal", {
                relatedTarget: e
            });
            n ? i.$element.find(".modal-dialog").one(t.support.transition.end, function() {
                i.$element.focus().trigger(s)
            }).emulateTransitionEnd(300) : i.$element.focus().trigger(s)
        }))
    }, e.prototype.hide = function(e) {
        e && e.preventDefault(), e = t.Event("hide.bs.modal"), this.$element.trigger(e), this.isShown && !e.isDefaultPrevented() && (this.isShown = !1, this.escape(), t(document).off("focusin.bs.modal"), this.$element.removeClass("in").attr("aria-hidden", !0).off("click.dismiss.bs.modal"), t.support.transition && this.$element.hasClass("fade") ? this.$element.one(t.support.transition.end, t.proxy(this.hideModal, this)).emulateTransitionEnd(300) : this.hideModal())
    }, e.prototype.enforceFocus = function() {
        t(document).off("focusin.bs.modal").on("focusin.bs.modal", t.proxy(function(t) {
            this.$element[0] !== t.target && !this.$element.has(t.target).length && this.$element.focus()
        }, this))
    }, e.prototype.escape = function() {
        this.isShown && this.options.keyboard ? this.$element.on("keyup.dismiss.bs.modal", t.proxy(function(t) {
            27 == t.which && this.hide()
        }, this)) : this.isShown || this.$element.off("keyup.dismiss.bs.modal")
    }, e.prototype.hideModal = function() {
        var t = this;
        this.$element.hide(), this.backdrop(function() {
            t.removeBackdrop(), t.$element.trigger("hidden.bs.modal")
        })
    }, e.prototype.removeBackdrop = function() {
        this.$backdrop && this.$backdrop.remove(), this.$backdrop = null
    }, e.prototype.backdrop = function(e) {
        var i = this.$element.hasClass("fade") ? "fade" : "";
        if (this.isShown && this.options.backdrop) {
            var n = t.support.transition && i;
            if (this.$backdrop = t('<div class="modal-backdrop ' + i + '" />').appendTo(document.body), this.$element.on("click.dismiss.bs.modal", t.proxy(function(t) {
                    t.target === t.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus.call(this.$element[0]) : this.hide.call(this))
                }, this)), n && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !e) return;
            n ? this.$backdrop.one(t.support.transition.end, e).emulateTransitionEnd(150) : e()
        } else !this.isShown && this.$backdrop ? (this.$backdrop.removeClass("in"), t.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one(t.support.transition.end, e).emulateTransitionEnd(150) : e()) : e && e()
    };
    var i = t.fn.modal;
    t.fn.modal = function(i, n) {
        return this.each(function() {
            var s = t(this),
                o = s.data("bs.modal"),
                a = t.extend({}, e.DEFAULTS, s.data(), "object" == typeof i && i);
            o || s.data("bs.modal", o = new e(this, a)), "string" == typeof i ? o[i](n) : a.show && o.show(n)
        })
    }, t.fn.modal.Constructor = e, t.fn.modal.noConflict = function() {
        return t.fn.modal = i, this
    }, t(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function(e) {
        var i = t(this),
            n = i.attr("href"),
            s = t(i.attr("data-target") || n && n.replace(/.*(?=#[^\s]+$)/, "")),
            o = s.data("bs.modal") ? "toggle" : t.extend({
                remote: !/#/.test(n) && n
            }, s.data(), i.data());
        i.is("a") && e.preventDefault(), s.modal(o, this).one("hide", function() {
            i.is(":visible") && i.focus()
        })
    }), t(document).on("show.bs.modal", ".modal", function() {
        t(document.body).addClass("modal-open")
    }).on("hidden.bs.modal", ".modal", function() {
        t(document.body).removeClass("modal-open")
    })
}(jQuery), + function(t) {
    "use strict";
    var e = function(t, e) {
        this.type = this.options = this.enabled = this.timeout = this.hoverState = this.$element = null, this.init("tooltip", t, e)
    };
    e.DEFAULTS = {
        animation: !0,
        placement: "top",
        selector: !1,
        template: '<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        container: !1
    }, e.prototype.init = function(e, i, n) {
        this.enabled = !0, this.type = e, this.$element = t(i), this.options = this.getOptions(n);
        for (var s = this.options.trigger.split(" "), o = s.length; o--;) {
            var a = s[o];
            if ("click" == a) this.$element.on("click." + this.type, this.options.selector, t.proxy(this.toggle, this));
            else if ("manual" != a) {
                var r = "hover" == a ? "mouseenter" : "focusin",
                    l = "hover" == a ? "mouseleave" : "focusout";
                this.$element.on(r + "." + this.type, this.options.selector, t.proxy(this.enter, this)), this.$element.on(l + "." + this.type, this.options.selector, t.proxy(this.leave, this))
            }
        }
        this.options.selector ? this._options = t.extend({}, this.options, {
            trigger: "manual",
            selector: ""
        }) : this.fixTitle()
    }, e.prototype.getDefaults = function() {
        return e.DEFAULTS
    }, e.prototype.getOptions = function(e) {
        return e = t.extend({}, this.getDefaults(), this.$element.data(), e), e.delay && "number" == typeof e.delay && (e.delay = {
            show: e.delay,
            hide: e.delay
        }), e
    }, e.prototype.getDelegateOptions = function() {
        var e = {},
            i = this.getDefaults();
        return this._options && t.each(this._options, function(t, n) {
            i[t] != n && (e[t] = n)
        }), e
    }, e.prototype.enter = function(e) {
        var i = e instanceof this.constructor ? e : t(e.currentTarget)[this.type](this.getDelegateOptions()).data("bs." + this.type);
        return clearTimeout(i.timeout), i.hoverState = "in", i.options.delay && i.options.delay.show ? void(i.timeout = setTimeout(function() {
            "in" == i.hoverState && i.show()
        }, i.options.delay.show)) : i.show()
    }, e.prototype.leave = function(e) {
        var i = e instanceof this.constructor ? e : t(e.currentTarget)[this.type](this.getDelegateOptions()).data("bs." + this.type);
        return clearTimeout(i.timeout), i.hoverState = "out", i.options.delay && i.options.delay.hide ? void(i.timeout = setTimeout(function() {
            "out" == i.hoverState && i.hide()
        }, i.options.delay.hide)) : i.hide()
    }, e.prototype.show = function() {
        var e = t.Event("show.bs." + this.type);
        if (this.hasContent() && this.enabled) {
            if (this.$element.trigger(e), e.isDefaultPrevented()) return;
            var i = this,
                n = this.tip();
            this.setContent(), this.options.animation && n.addClass("fade");
            var s = "function" == typeof this.options.placement ? this.options.placement.call(this, n[0], this.$element[0]) : this.options.placement,
                o = /\s?auto?\s?/i,
                a = o.test(s);
            a && (s = s.replace(o, "") || "top"), n.detach().css({
                top: 0,
                left: 0,
                display: "block"
            }).addClass(s), this.options.container ? n.appendTo(this.options.container) : n.insertAfter(this.$element);
            var r = this.getPosition(),
                l = n[0].offsetWidth,
                c = n[0].offsetHeight;
            if (a) {
                var h = this.$element.parent(),
                    d = s,
                    u = document.documentElement.scrollTop || document.body.scrollTop,
                    f = "body" == this.options.container ? window.innerWidth : h.outerWidth(),
                    p = "body" == this.options.container ? window.innerHeight : h.outerHeight(),
                    m = "body" == this.options.container ? 0 : h.offset().left;
                s = "bottom" == s && r.top + r.height + c - u > p ? "top" : "top" == s && r.top - u - c < 0 ? "bottom" : "right" == s && r.right + l > f ? "left" : "left" == s && r.left - l < m ? "right" : s, n.removeClass(d).addClass(s)
            }
            var g = this.getCalculatedOffset(s, r, l, c);
            this.applyPlacement(g, s), this.hoverState = null;
            var v = function() {
                i.$element.trigger("shown.bs." + i.type)
            };
            t.support.transition && this.$tip.hasClass("fade") ? n.one(t.support.transition.end, v).emulateTransitionEnd(150) : v()
        }
    }, e.prototype.applyPlacement = function(e, i) {
        var n, s = this.tip(),
            o = s[0].offsetWidth,
            a = s[0].offsetHeight,
            r = parseInt(s.css("margin-top"), 10),
            l = parseInt(s.css("margin-left"), 10);
        isNaN(r) && (r = 0), isNaN(l) && (l = 0), e.top = e.top + r, e.left = e.left + l, t.offset.setOffset(s[0], t.extend({
            using: function(t) {
                s.css({
                    top: Math.round(t.top),
                    left: Math.round(t.left)
                })
            }
        }, e), 0), s.addClass("in");
        var c = s[0].offsetWidth,
            h = s[0].offsetHeight;
        if ("top" == i && h != a && (n = !0, e.top = e.top + a - h), /bottom|top/.test(i)) {
            var d = 0;
            e.left < 0 && (d = -2 * e.left, e.left = 0, s.offset(e), c = s[0].offsetWidth, h = s[0].offsetHeight), this.replaceArrow(d - o + c, c, "left")
        } else this.replaceArrow(h - a, h, "top");
        n && s.offset(e)
    }, e.prototype.replaceArrow = function(t, e, i) {
        this.arrow().css(i, t ? 50 * (1 - t / e) + "%" : "")
    }, e.prototype.setContent = function() {
        var t = this.tip(),
            e = this.getTitle();
        t.find(".tooltip-inner")[this.options.html ? "html" : "text"](e), t.removeClass("fade in top bottom left right")
    }, e.prototype.hide = function() {
        function e() {
            "in" != i.hoverState && n.detach(), i.$element.trigger("hidden.bs." + i.type)
        }
        var i = this,
            n = this.tip(),
            s = t.Event("hide.bs." + this.type);
        return this.$element.trigger(s), s.isDefaultPrevented() ? void 0 : (n.removeClass("in"), t.support.transition && this.$tip.hasClass("fade") ? n.one(t.support.transition.end, e).emulateTransitionEnd(150) : e(), this.hoverState = null, this)
    }, e.prototype.fixTitle = function() {
        var t = this.$element;
        (t.attr("title") || "string" != typeof t.attr("data-original-title")) && t.attr("data-original-title", t.attr("title") || "").attr("title", "")
    }, e.prototype.hasContent = function() {
        return this.getTitle()
    }, e.prototype.getPosition = function() {
        var e = this.$element[0];
        return t.extend({}, "function" == typeof e.getBoundingClientRect ? e.getBoundingClientRect() : {
            width: e.offsetWidth,
            height: e.offsetHeight
        }, this.$element.offset())
    }, e.prototype.getCalculatedOffset = function(t, e, i, n) {
        return "bottom" == t ? {
            top: e.top + e.height,
            left: e.left + e.width / 2 - i / 2
        } : "top" == t ? {
            top: e.top - n,
            left: e.left + e.width / 2 - i / 2
        } : "left" == t ? {
            top: e.top + e.height / 2 - n / 2,
            left: e.left - i
        } : {
            top: e.top + e.height / 2 - n / 2,
            left: e.left + e.width
        }
    }, e.prototype.getTitle = function() {
        var t, e = this.$element,
            i = this.options;
        return t = e.attr("data-original-title") || ("function" == typeof i.title ? i.title.call(e[0]) : i.title)
    }, e.prototype.tip = function() {
        return this.$tip = this.$tip || t(this.options.template)
    }, e.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
    }, e.prototype.validate = function() {
        this.$element[0].parentNode || (this.hide(), this.$element = null, this.options = null)
    }, e.prototype.enable = function() {
        this.enabled = !0
    }, e.prototype.disable = function() {
        this.enabled = !1
    }, e.prototype.toggleEnabled = function() {
        this.enabled = !this.enabled
    }, e.prototype.toggle = function(e) {
        var i = e ? t(e.currentTarget)[this.type](this.getDelegateOptions()).data("bs." + this.type) : this;
        i.tip().hasClass("in") ? i.leave(i) : i.enter(i)
    }, e.prototype.destroy = function() {
        clearTimeout(this.timeout), this.hide().$element.off("." + this.type).removeData("bs." + this.type)
    };
    var i = t.fn.tooltip;
    t.fn.tooltip = function(i) {
        return this.each(function() {
            var n = t(this),
                s = n.data("bs.tooltip"),
                o = "object" == typeof i && i;
            (s || "destroy" != i) && (s || n.data("bs.tooltip", s = new e(this, o)), "string" == typeof i && s[i]())
        })
    }, t.fn.tooltip.Constructor = e, t.fn.tooltip.noConflict = function() {
        return t.fn.tooltip = i, this
    }
}(jQuery), + function(t) {
    function e() {
        var t = document.createElement("bootstrap"),
            e = {
                WebkitTransition: "webkitTransitionEnd",
                MozTransition: "transitionend",
                OTransition: "oTransitionEnd otransitionend",
                transition: "transitionend"
            };
        for (var i in e)
            if (void 0 !== t.style[i]) return {
                end: e[i]
            };
        return !1
    }
    t.fn.emulateTransitionEnd = function(e) {
        var i = !1,
            n = this;
        t(this).one(t.support.transition.end, function() {
            i = !0
        });
        var s = function() {
            i || t(n).trigger(t.support.transition.end)
        };
        return setTimeout(s, e), this
    }, t(function() {
        t.support.transition = e()
    })
}(jQuery);
var DateFormatter;
! function() {
    "use strict";
    var t, e, i, n, s, o;
    s = 864e5, o = 3600, t = function(t, e) {
        return "string" == typeof t && "string" == typeof e && t.toLowerCase() === e.toLowerCase()
    }, e = function(t, i, n) {
        var s = n || "0",
            o = t.toString();
        return o.length < i ? e(s + o, i) : o
    }, i = function(t) {
        var e, n;
        for (t = t || {}, e = 1; e < arguments.length; e++)
            if (n = arguments[e])
                for (var s in n) n.hasOwnProperty(s) && ("object" == typeof n[s] ? i(t[s], n[s]) : t[s] = n[s]);
        return t
    }, n = {
        dateSettings: {
            days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            daysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            monthsShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            meridiem: ["AM", "PM"],
            ordinal: function(t) {
                var e = t % 10,
                    i = {
                        1: "st",
                        2: "nd",
                        3: "rd"
                    };
                return 1 !== Math.floor(t % 100 / 10) && i[e] ? i[e] : "th"
            }
        },
        separators: /[ \-+\/\.T:@]/g,
        validParts: /[dDjlNSwzWFmMntLoYyaABgGhHisueTIOPZcrU]/g,
        intParts: /[djwNzmnyYhHgGis]/g,
        tzParts: /\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g,
        tzClip: /[^-+\dA-Z]/g
    }, DateFormatter = function(t) {
        var e = this,
            s = i(n, t);
        e.dateSettings = s.dateSettings, e.separators = s.separators, e.validParts = s.validParts, e.intParts = s.intParts, e.tzParts = s.tzParts, e.tzClip = s.tzClip
    }, DateFormatter.prototype = {
        constructor: DateFormatter,
        parseDate: function(e, i) {
            var n, s, o, a, r, l, c, h, d, u, f = this,
                p = !1,
                m = !1,
                g = f.dateSettings,
                v = {
                    date: null,
                    year: null,
                    month: null,
                    day: null,
                    hour: 0,
                    min: 0,
                    sec: 0
                };
            if (e) {
                if (e instanceof Date) return e;
                if ("number" == typeof e) return new Date(e);
                if ("U" === i) return o = parseInt(e), o ? new Date(1e3 * o) : e;
                if ("string" != typeof e) return "";
                if (n = i.match(f.validParts), !n || 0 === n.length) throw new Error("Invalid date format definition.");
                for (s = e.replace(f.separators, "\x00").split("\x00"), o = 0; o < s.length; o++) switch (a = s[o], r = parseInt(a), n[o]) {
                    case "y":
                    case "Y":
                        d = a.length, 2 === d ? v.year = parseInt((70 > r ? "20" : "19") + a) : 4 === d && (v.year = r), p = !0;
                        break;
                    case "m":
                    case "n":
                    case "M":
                    case "F":
                        isNaN(a) ? (l = g.monthsShort.indexOf(a), l > -1 && (v.month = l + 1), l = g.months.indexOf(a), l > -1 && (v.month = l + 1)) : r >= 1 && 12 >= r && (v.month = r), p = !0;
                        break;
                    case "d":
                    case "j":
                        r >= 1 && 31 >= r && (v.day = r), p = !0;
                        break;
                    case "g":
                    case "h":
                        c = n.indexOf("a") > -1 ? n.indexOf("a") : n.indexOf("A") > -1 ? n.indexOf("A") : -1, u = s[c], c > -1 ? (h = t(u, g.meridiem[0]) ? 0 : t(u, g.meridiem[1]) ? 12 : -1, r >= 1 && 12 >= r && h > -1 ? v.hour = r + h - 1 : r >= 0 && 23 >= r && (v.hour = r)) : r >= 0 && 23 >= r && (v.hour = r), m = !0;
                        break;
                    case "G":
                    case "H":
                        r >= 0 && 23 >= r && (v.hour = r), m = !0;
                        break;
                    case "i":
                        r >= 0 && 59 >= r && (v.min = r), m = !0;
                        break;
                    case "s":
                        r >= 0 && 59 >= r && (v.sec = r), m = !0
                }
                if (p === !0 && v.year && v.month && v.day) v.date = new Date(v.year, v.month - 1, v.day, v.hour, v.min, v.sec, 0);
                else {
                    if (m !== !0) return !1;
                    v.date = new Date(0, 0, 0, v.hour, v.min, v.sec, 0)
                }
                return v.date
            }
        },
        guessDate: function(t, e) {
            if ("string" != typeof t) return t;
            var i, n, s, o, a = this,
                r = t.replace(a.separators, "\x00").split("\x00"),
                l = /^[djmn]/g,
                c = e.match(a.validParts),
                h = new Date,
                d = 0;
            if (!l.test(c[0])) return t;
            for (n = 0; n < r.length; n++) {
                switch (d = 2, s = r[n], o = parseInt(s.substr(0, 2)), n) {
                    case 0:
                        "m" === c[0] || "n" === c[0] ? h.setMonth(o - 1) : h.setDate(o);
                        break;
                    case 1:
                        "m" === c[0] || "n" === c[0] ? h.setDate(o) : h.setMonth(o - 1);
                        break;
                    case 2:
                        i = h.getFullYear(), s.length < 4 ? (h.setFullYear(parseInt(i.toString().substr(0, 4 - s.length) + s)), d = s.length) : (h.setFullYear = parseInt(s.substr(0, 4)), d = 4);
                        break;
                    case 3:
                        h.setHours(o);
                        break;
                    case 4:
                        h.setMinutes(o);
                        break;
                    case 5:
                        h.setSeconds(o)
                }
                s.substr(d).length > 0 && r.splice(n + 1, 0, s.substr(d))
            }
            return h
        },
        parseFormat: function(t, i) {
            var n, a = this,
                r = a.dateSettings,
                l = /\\?(.?)/gi,
                c = function(t, e) {
                    return n[t] ? n[t]() : e
                };
            return n = {
                d: function() {
                    return e(n.j(), 2)
                },
                D: function() {
                    return r.daysShort[n.w()]
                },
                j: function() {
                    return i.getDate()
                },
                l: function() {
                    return r.days[n.w()]
                },
                N: function() {
                    return n.w() || 7
                },
                w: function() {
                    return i.getDay()
                },
                z: function() {
                    var t = new Date(n.Y(), n.n() - 1, n.j()),
                        e = new Date(n.Y(), 0, 1);
                    return Math.round((t - e) / s)
                },
                W: function() {
                    var t = new Date(n.Y(), n.n() - 1, n.j() - n.N() + 3),
                        i = new Date(t.getFullYear(), 0, 4);
                    return e(1 + Math.round((t - i) / s / 7), 2)
                },
                F: function() {
                    return r.months[i.getMonth()]
                },
                m: function() {
                    return e(n.n(), 2)
                },
                M: function() {
                    return r.monthsShort[i.getMonth()]
                },
                n: function() {
                    return i.getMonth() + 1
                },
                t: function() {
                    return new Date(n.Y(), n.n(), 0).getDate()
                },
                L: function() {
                    var t = n.Y();
                    return t % 4 === 0 && t % 100 !== 0 || t % 400 === 0 ? 1 : 0
                },
                o: function() {
                    var t = n.n(),
                        e = n.W(),
                        i = n.Y();
                    return i + (12 === t && 9 > e ? 1 : 1 === t && e > 9 ? -1 : 0)
                },
                Y: function() {
                    return i.getFullYear()
                },
                y: function() {
                    return n.Y().toString().slice(-2)
                },
                a: function() {
                    return n.A().toLowerCase()
                },
                A: function() {
                    var t = n.G() < 12 ? 0 : 1;
                    return r.meridiem[t]
                },
                B: function() {
                    var t = i.getUTCHours() * o,
                        n = 60 * i.getUTCMinutes(),
                        s = i.getUTCSeconds();
                    return e(Math.floor((t + n + s + o) / 86.4) % 1e3, 3)
                },
                g: function() {
                    return n.G() % 12 || 12
                },
                G: function() {
                    return i.getHours()
                },
                h: function() {
                    return e(n.g(), 2)
                },
                H: function() {
                    return e(n.G(), 2)
                },
                i: function() {
                    return e(i.getMinutes(), 2)
                },
                s: function() {
                    return e(i.getSeconds(), 2)
                },
                u: function() {
                    return e(1e3 * i.getMilliseconds(), 6)
                },
                e: function() {
                    var t = /\((.*)\)/.exec(String(i))[1];
                    return t || "Coordinated Universal Time"
                },
                T: function() {
                    var t = (String(i).match(a.tzParts) || [""]).pop().replace(a.tzClip, "");
                    return t || "UTC"
                },
                I: function() {
                    var t = new Date(n.Y(), 0),
                        e = Date.UTC(n.Y(), 0),
                        i = new Date(n.Y(), 6),
                        s = Date.UTC(n.Y(), 6);
                    return t - e !== i - s ? 1 : 0
                },
                O: function() {
                    var t = i.getTimezoneOffset(),
                        n = Math.abs(t);
                    return (t > 0 ? "-" : "+") + e(100 * Math.floor(n / 60) + n % 60, 4)
                },
                P: function() {
                    var t = n.O();
                    return t.substr(0, 3) + ":" + t.substr(3, 2)
                },
                Z: function() {
                    return 60 * -i.getTimezoneOffset()
                },
                c: function() {
                    return "Y-m-d\\TH:i:sP".replace(l, c)
                },
                r: function() {
                    return "D, d M Y H:i:s O".replace(l, c)
                },
                U: function() {
                    return i.getTime() / 1e3 || 0
                }
            }, c(t, t)
        },
        formatDate: function(t, e) {
            var i, n, s, o, a, r = this,
                l = "";
            if ("string" == typeof t && (t = r.parseDate(t, e), t === !1)) return !1;
            if (t instanceof Date) {
                for (s = e.length, i = 0; s > i; i++) a = e.charAt(i), "S" !== a && (o = r.parseFormat(a, t), i !== s - 1 && r.intParts.test(a) && "S" === e.charAt(i + 1) && (n = parseInt(o), o += r.dateSettings.ordinal(n)), l += o);
                return l
            }
            return ""
        }
    }
}(),
function(t) {
    "function" == typeof define && define.amd ? define(["jquery", "jquery-mousewheel"], t) : "object" == typeof exports ? module.exports = t : t(jQuery)
}(function(t) {
    "use strict";

    function e(t, e, i) {
        this.date = t, this.desc = e, this.style = i
    }
    var i = {
            i18n: {
                ar: {
                    months: ["\u0643\u0627\u0646\u0648\u0646 \u0627\u0644\u062b\u0627\u0646\u064a", "\u0634\u0628\u0627\u0637", "\u0622\u0630\u0627\u0631", "\u0646\u064a\u0633\u0627\u0646", "\u0645\u0627\u064a\u0648", "\u062d\u0632\u064a\u0631\u0627\u0646", "\u062a\u0645\u0648\u0632", "\u0622\u0628", "\u0623\u064a\u0644\u0648\u0644", "\u062a\u0634\u0631\u064a\u0646 \u0627\u0644\u0623\u0648\u0644", "\u062a\u0634\u0631\u064a\u0646 \u0627\u0644\u062b\u0627\u0646\u064a", "\u0643\u0627\u0646\u0648\u0646 \u0627\u0644\u0623\u0648\u0644"],
                    dayOfWeekShort: ["\u0646", "\u062b", "\u0639", "\u062e", "\u062c", "\u0633", "\u062d"],
                    dayOfWeek: ["\u0627\u0644\u0623\u062d\u062f", "\u0627\u0644\u0627\u062b\u0646\u064a\u0646", "\u0627\u0644\u062b\u0644\u0627\u062b\u0627\u0621", "\u0627\u0644\u0623\u0631\u0628\u0639\u0627\u0621", "\u0627\u0644\u062e\u0645\u064a\u0633", "\u0627\u0644\u062c\u0645\u0639\u0629", "\u0627\u0644\u0633\u0628\u062a", "\u0627\u0644\u0623\u062d\u062f"]
                },
                ro: {
                    months: ["Ianuarie", "Februarie", "Martie", "Aprilie", "Mai", "Iunie", "Iulie", "August", "Septembrie", "Octombrie", "Noiembrie", "Decembrie"],
                    dayOfWeekShort: ["Du", "Lu", "Ma", "Mi", "Jo", "Vi", "S\xe2"],
                    dayOfWeek: ["Duminic\u0103", "Luni", "Mar\u0163i", "Miercuri", "Joi", "Vineri", "S\xe2mb\u0103t\u0103"]
                },
                id: {
                    months: ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"],
                    dayOfWeekShort: ["Min", "Sen", "Sel", "Rab", "Kam", "Jum", "Sab"],
                    dayOfWeek: ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"]
                },
                is: {
                    months: ["Jan\xfaar", "Febr\xfaar", "Mars", "Apr\xedl", "Ma\xed", "J\xfan\xed", "J\xfal\xed", "\xc1g\xfast", "September", "Okt\xf3ber", "N\xf3vember", "Desember"],
                    dayOfWeekShort: ["Sun", "M\xe1n", "\xderi\xf0", "Mi\xf0", "Fim", "F\xf6s", "Lau"],
                    dayOfWeek: ["Sunnudagur", "M\xe1nudagur", "\xderi\xf0judagur", "Mi\xf0vikudagur", "Fimmtudagur", "F\xf6studagur", "Laugardagur"]
                },
                bg: {
                    months: ["\u042f\u043d\u0443\u0430\u0440\u0438", "\u0424\u0435\u0432\u0440\u0443\u0430\u0440\u0438", "\u041c\u0430\u0440\u0442", "\u0410\u043f\u0440\u0438\u043b", "\u041c\u0430\u0439", "\u042e\u043d\u0438", "\u042e\u043b\u0438", "\u0410\u0432\u0433\u0443\u0441\u0442", "\u0421\u0435\u043f\u0442\u0435\u043c\u0432\u0440\u0438", "\u041e\u043a\u0442\u043e\u043c\u0432\u0440\u0438", "\u041d\u043e\u0435\u043c\u0432\u0440\u0438", "\u0414\u0435\u043a\u0435\u043c\u0432\u0440\u0438"],
                    dayOfWeekShort: ["\u041d\u0434", "\u041f\u043d", "\u0412\u0442", "\u0421\u0440", "\u0427\u0442", "\u041f\u0442", "\u0421\u0431"],
                    dayOfWeek: ["\u041d\u0435\u0434\u0435\u043b\u044f", "\u041f\u043e\u043d\u0435\u0434\u0435\u043b\u043d\u0438\u043a", "\u0412\u0442\u043e\u0440\u043d\u0438\u043a", "\u0421\u0440\u044f\u0434\u0430", "\u0427\u0435\u0442\u0432\u044a\u0440\u0442\u044a\u043a", "\u041f\u0435\u0442\u044a\u043a", "\u0421\u044a\u0431\u043e\u0442\u0430"]
                },
                fa: {
                    months: ["\u0641\u0631\u0648\u0631\u062f\u06cc\u0646", "\u0627\u0631\u062f\u06cc\u0628\u0647\u0634\u062a", "\u062e\u0631\u062f\u0627\u062f", "\u062a\u06cc\u0631", "\u0645\u0631\u062f\u0627\u062f", "\u0634\u0647\u0631\u06cc\u0648\u0631", "\u0645\u0647\u0631", "\u0622\u0628\u0627\u0646", "\u0622\u0630\u0631", "\u062f\u06cc", "\u0628\u0647\u0645\u0646", "\u0627\u0633\u0641\u0646\u062f"],
                    dayOfWeekShort: ["\u06cc\u06a9\u0634\u0646\u0628\u0647", "\u062f\u0648\u0634\u0646\u0628\u0647", "\u0633\u0647 \u0634\u0646\u0628\u0647", "\u0686\u0647\u0627\u0631\u0634\u0646\u0628\u0647", "\u067e\u0646\u062c\u0634\u0646\u0628\u0647", "\u062c\u0645\u0639\u0647", "\u0634\u0646\u0628\u0647"],
                    dayOfWeek: ["\u06cc\u06a9\u200c\u0634\u0646\u0628\u0647", "\u062f\u0648\u0634\u0646\u0628\u0647", "\u0633\u0647\u200c\u0634\u0646\u0628\u0647", "\u0686\u0647\u0627\u0631\u0634\u0646\u0628\u0647", "\u067e\u0646\u062c\u200c\u0634\u0646\u0628\u0647", "\u062c\u0645\u0639\u0647", "\u0634\u0646\u0628\u0647", "\u06cc\u06a9\u200c\u0634\u0646\u0628\u0647"]
                },
                ru: {
                    months: ["\u042f\u043d\u0432\u0430\u0440\u044c", "\u0424\u0435\u0432\u0440\u0430\u043b\u044c", "\u041c\u0430\u0440\u0442", "\u0410\u043f\u0440\u0435\u043b\u044c", "\u041c\u0430\u0439", "\u0418\u044e\u043d\u044c", "\u0418\u044e\u043b\u044c", "\u0410\u0432\u0433\u0443\u0441\u0442", "\u0421\u0435\u043d\u0442\u044f\u0431\u0440\u044c", "\u041e\u043a\u0442\u044f\u0431\u0440\u044c", "\u041d\u043e\u044f\u0431\u0440\u044c", "\u0414\u0435\u043a\u0430\u0431\u0440\u044c"],
                    dayOfWeekShort: ["\u0412\u0441", "\u041f\u043d", "\u0412\u0442", "\u0421\u0440", "\u0427\u0442", "\u041f\u0442", "\u0421\u0431"],
                    dayOfWeek: ["\u0412\u043e\u0441\u043a\u0440\u0435\u0441\u0435\u043d\u044c\u0435", "\u041f\u043e\u043d\u0435\u0434\u0435\u043b\u044c\u043d\u0438\u043a", "\u0412\u0442\u043e\u0440\u043d\u0438\u043a", "\u0421\u0440\u0435\u0434\u0430", "\u0427\u0435\u0442\u0432\u0435\u0440\u0433", "\u041f\u044f\u0442\u043d\u0438\u0446\u0430", "\u0421\u0443\u0431\u0431\u043e\u0442\u0430"]
                },
                uk: {
                    months: ["\u0421\u0456\u0447\u0435\u043d\u044c", "\u041b\u044e\u0442\u0438\u0439", "\u0411\u0435\u0440\u0435\u0437\u0435\u043d\u044c", "\u041a\u0432\u0456\u0442\u0435\u043d\u044c", "\u0422\u0440\u0430\u0432\u0435\u043d\u044c", "\u0427\u0435\u0440\u0432\u0435\u043d\u044c", "\u041b\u0438\u043f\u0435\u043d\u044c", "\u0421\u0435\u0440\u043f\u0435\u043d\u044c", "\u0412\u0435\u0440\u0435\u0441\u0435\u043d\u044c", "\u0416\u043e\u0432\u0442\u0435\u043d\u044c", "\u041b\u0438\u0441\u0442\u043e\u043f\u0430\u0434", "\u0413\u0440\u0443\u0434\u0435\u043d\u044c"],
                    dayOfWeekShort: ["\u041d\u0434\u043b", "\u041f\u043d\u0434", "\u0412\u0442\u0440", "\u0421\u0440\u0434", "\u0427\u0442\u0432", "\u041f\u0442\u043d", "\u0421\u0431\u0442"],
                    dayOfWeek: ["\u041d\u0435\u0434\u0456\u043b\u044f", "\u041f\u043e\u043d\u0435\u0434\u0456\u043b\u043e\u043a", "\u0412\u0456\u0432\u0442\u043e\u0440\u043e\u043a", "\u0421\u0435\u0440\u0435\u0434\u0430", "\u0427\u0435\u0442\u0432\u0435\u0440", "\u041f'\u044f\u0442\u043d\u0438\u0446\u044f", "\u0421\u0443\u0431\u043e\u0442\u0430"]
                },
                en: {
                    months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                    dayOfWeekShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                    dayOfWeek: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
                },
                el: {
                    months: ["\u0399\u03b1\u03bd\u03bf\u03c5\u03ac\u03c1\u03b9\u03bf\u03c2", "\u03a6\u03b5\u03b2\u03c1\u03bf\u03c5\u03ac\u03c1\u03b9\u03bf\u03c2", "\u039c\u03ac\u03c1\u03c4\u03b9\u03bf\u03c2", "\u0391\u03c0\u03c1\u03af\u03bb\u03b9\u03bf\u03c2", "\u039c\u03ac\u03b9\u03bf\u03c2", "\u0399\u03bf\u03cd\u03bd\u03b9\u03bf\u03c2", "\u0399\u03bf\u03cd\u03bb\u03b9\u03bf\u03c2", "\u0391\u03cd\u03b3\u03bf\u03c5\u03c3\u03c4\u03bf\u03c2", "\u03a3\u03b5\u03c0\u03c4\u03ad\u03bc\u03b2\u03c1\u03b9\u03bf\u03c2", "\u039f\u03ba\u03c4\u03ce\u03b2\u03c1\u03b9\u03bf\u03c2", "\u039d\u03bf\u03ad\u03bc\u03b2\u03c1\u03b9\u03bf\u03c2", "\u0394\u03b5\u03ba\u03ad\u03bc\u03b2\u03c1\u03b9\u03bf\u03c2"],
                    dayOfWeekShort: ["\u039a\u03c5\u03c1", "\u0394\u03b5\u03c5", "\u03a4\u03c1\u03b9", "\u03a4\u03b5\u03c4", "\u03a0\u03b5\u03bc", "\u03a0\u03b1\u03c1", "\u03a3\u03b1\u03b2"],
                    dayOfWeek: ["\u039a\u03c5\u03c1\u03b9\u03b1\u03ba\u03ae", "\u0394\u03b5\u03c5\u03c4\u03ad\u03c1\u03b1", "\u03a4\u03c1\u03af\u03c4\u03b7", "\u03a4\u03b5\u03c4\u03ac\u03c1\u03c4\u03b7", "\u03a0\u03ad\u03bc\u03c0\u03c4\u03b7", "\u03a0\u03b1\u03c1\u03b1\u03c3\u03ba\u03b5\u03c5\u03ae", "\u03a3\u03ac\u03b2\u03b2\u03b1\u03c4\u03bf"]
                },
                de: {
                    months: ["Januar", "Februar", "M\xe4rz", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"],
                    dayOfWeekShort: ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"],
                    dayOfWeek: ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"]
                },
                nl: {
                    months: ["januari", "februari", "maart", "april", "mei", "juni", "juli", "augustus", "september", "oktober", "november", "december"],
                    dayOfWeekShort: ["zo", "ma", "di", "wo", "do", "vr", "za"],
                    dayOfWeek: ["zondag", "maandag", "dinsdag", "woensdag", "donderdag", "vrijdag", "zaterdag"]
                },
                tr: {
                    months: ["Ocak", "\u015eubat", "Mart", "Nisan", "May\u0131s", "Haziran", "Temmuz", "A\u011fustos", "Eyl\xfcl", "Ekim", "Kas\u0131m", "Aral\u0131k"],
                    dayOfWeekShort: ["Paz", "Pts", "Sal", "\xc7ar", "Per", "Cum", "Cts"],
                    dayOfWeek: ["Pazar", "Pazartesi", "Sal\u0131", "\xc7ar\u015famba", "Per\u015fembe", "Cuma", "Cumartesi"]
                },
                fr: {
                    months: ["Janvier", "F\xe9vrier", "Mars", "Avril", "Mai", "Juin", "Juillet", "Ao\xfbt", "Septembre", "Octobre", "Novembre", "D\xe9cembre"],
                    dayOfWeekShort: ["Dim", "Lun", "Mar", "Mer", "Jeu", "Ven", "Sam"],
                    dayOfWeek: ["dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"]
                },
                es: {
                    months: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"],
                    dayOfWeekShort: ["Dom", "Lun", "Mar", "Mi\xe9", "Jue", "Vie", "S\xe1b"],
                    dayOfWeek: ["Domingo", "Lunes", "Martes", "Mi\xe9rcoles", "Jueves", "Viernes", "S\xe1bado"]
                },
                th: {
                    months: ["\u0e21\u0e01\u0e23\u0e32\u0e04\u0e21", "\u0e01\u0e38\u0e21\u0e20\u0e32\u0e1e\u0e31\u0e19\u0e18\u0e4c", "\u0e21\u0e35\u0e19\u0e32\u0e04\u0e21", "\u0e40\u0e21\u0e29\u0e32\u0e22\u0e19", "\u0e1e\u0e24\u0e29\u0e20\u0e32\u0e04\u0e21", "\u0e21\u0e34\u0e16\u0e38\u0e19\u0e32\u0e22\u0e19", "\u0e01\u0e23\u0e01\u0e0e\u0e32\u0e04\u0e21", "\u0e2a\u0e34\u0e07\u0e2b\u0e32\u0e04\u0e21", "\u0e01\u0e31\u0e19\u0e22\u0e32\u0e22\u0e19", "\u0e15\u0e38\u0e25\u0e32\u0e04\u0e21", "\u0e1e\u0e24\u0e28\u0e08\u0e34\u0e01\u0e32\u0e22\u0e19", "\u0e18\u0e31\u0e19\u0e27\u0e32\u0e04\u0e21"],
                    dayOfWeekShort: ["\u0e2d\u0e32.", "\u0e08.", "\u0e2d.", "\u0e1e.", "\u0e1e\u0e24.", "\u0e28.", "\u0e2a."],
                    dayOfWeek: ["\u0e2d\u0e32\u0e17\u0e34\u0e15\u0e22\u0e4c", "\u0e08\u0e31\u0e19\u0e17\u0e23\u0e4c", "\u0e2d\u0e31\u0e07\u0e04\u0e32\u0e23", "\u0e1e\u0e38\u0e18", "\u0e1e\u0e24\u0e2b\u0e31\u0e2a", "\u0e28\u0e38\u0e01\u0e23\u0e4c", "\u0e40\u0e2a\u0e32\u0e23\u0e4c", "\u0e2d\u0e32\u0e17\u0e34\u0e15\u0e22\u0e4c"]
                },
                pl: {
                    months: ["stycze\u0144", "luty", "marzec", "kwiecie\u0144", "maj", "czerwiec", "lipiec", "sierpie\u0144", "wrzesie\u0144", "pa\u017adziernik", "listopad", "grudzie\u0144"],
                    dayOfWeekShort: ["nd", "pn", "wt", "\u015br", "cz", "pt", "sb"],
                    dayOfWeek: ["niedziela", "poniedzia\u0142ek", "wtorek", "\u015broda", "czwartek", "pi\u0105tek", "sobota"]
                },
                pt: {
                    months: ["Janeiro", "Fevereiro", "Mar\xe7o", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"],
                    dayOfWeekShort: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"],
                    dayOfWeek: ["Domingo", "Segunda", "Ter\xe7a", "Quarta", "Quinta", "Sexta", "S\xe1bado"]
                },
                ch: {
                    months: ["\u4e00\u6708", "\u4e8c\u6708", "\u4e09\u6708", "\u56db\u6708", "\u4e94\u6708", "\u516d\u6708", "\u4e03\u6708", "\u516b\u6708", "\u4e5d\u6708", "\u5341\u6708", "\u5341\u4e00\u6708", "\u5341\u4e8c\u6708"],
                    dayOfWeekShort: ["\u65e5", "\u4e00", "\u4e8c", "\u4e09", "\u56db", "\u4e94", "\u516d"]
                },
                se: {
                    months: ["Januari", "Februari", "Mars", "April", "Maj", "Juni", "Juli", "Augusti", "September", "Oktober", "November", "December"],
                    dayOfWeekShort: ["S\xf6n", "M\xe5n", "Tis", "Ons", "Tor", "Fre", "L\xf6r"]
                },
                kr: {
                    months: ["1\uc6d4", "2\uc6d4", "3\uc6d4", "4\uc6d4", "5\uc6d4", "6\uc6d4", "7\uc6d4", "8\uc6d4", "9\uc6d4", "10\uc6d4", "11\uc6d4", "12\uc6d4"],
                    dayOfWeekShort: ["\uc77c", "\uc6d4", "\ud654", "\uc218", "\ubaa9", "\uae08", "\ud1a0"],
                    dayOfWeek: ["\uc77c\uc694\uc77c", "\uc6d4\uc694\uc77c", "\ud654\uc694\uc77c", "\uc218\uc694\uc77c", "\ubaa9\uc694\uc77c", "\uae08\uc694\uc77c", "\ud1a0\uc694\uc77c"]
                },
                it: {
                    months: ["Gennaio", "Febbraio", "Marzo", "Aprile", "Maggio", "Giugno", "Luglio", "Agosto", "Settembre", "Ottobre", "Novembre", "Dicembre"],
                    dayOfWeekShort: ["Dom", "Lun", "Mar", "Mer", "Gio", "Ven", "Sab"],
                    dayOfWeek: ["Domenica", "Luned\xec", "Marted\xec", "Mercoled\xec", "Gioved\xec", "Venerd\xec", "Sabato"]
                },
                da: {
                    months: ["January", "Februar", "Marts", "April", "Maj", "Juni", "July", "August", "September", "Oktober", "November", "December"],
                    dayOfWeekShort: ["S\xf8n", "Man", "Tir", "Ons", "Tor", "Fre", "L\xf8r"],
                    dayOfWeek: ["s\xf8ndag", "mandag", "tirsdag", "onsdag", "torsdag", "fredag", "l\xf8rdag"]
                },
                no: {
                    months: ["Januar", "Februar", "Mars", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Desember"],
                    dayOfWeekShort: ["S\xf8n", "Man", "Tir", "Ons", "Tor", "Fre", "L\xf8r"],
                    dayOfWeek: ["S\xf8ndag", "Mandag", "Tirsdag", "Onsdag", "Torsdag", "Fredag", "L\xf8rdag"]
                },
                ja: {
                    months: ["1\u6708", "2\u6708", "3\u6708", "4\u6708", "5\u6708", "6\u6708", "7\u6708", "8\u6708", "9\u6708", "10\u6708", "11\u6708", "12\u6708"],
                    dayOfWeekShort: ["\u65e5", "\u6708", "\u706b", "\u6c34", "\u6728", "\u91d1", "\u571f"],
                    dayOfWeek: ["\u65e5\u66dc", "\u6708\u66dc", "\u706b\u66dc", "\u6c34\u66dc", "\u6728\u66dc", "\u91d1\u66dc", "\u571f\u66dc"]
                },
                vi: {
                    months: ["Th\xe1ng 1", "Th\xe1ng 2", "Th\xe1ng 3", "Th\xe1ng 4", "Th\xe1ng 5", "Th\xe1ng 6", "Th\xe1ng 7", "Th\xe1ng 8", "Th\xe1ng 9", "Th\xe1ng 10", "Th\xe1ng 11", "Th\xe1ng 12"],
                    dayOfWeekShort: ["CN", "T2", "T3", "T4", "T5", "T6", "T7"],
                    dayOfWeek: ["Ch\u1ee7 nh\u1eadt", "Th\u1ee9 hai", "Th\u1ee9 ba", "Th\u1ee9 t\u01b0", "Th\u1ee9 n\u0103m", "Th\u1ee9 s\xe1u", "Th\u1ee9 b\u1ea3y"]
                },
                sl: {
                    months: ["Januar", "Februar", "Marec", "April", "Maj", "Junij", "Julij", "Avgust", "September", "Oktober", "November", "December"],
                    dayOfWeekShort: ["Ned", "Pon", "Tor", "Sre", "\u010cet", "Pet", "Sob"],
                    dayOfWeek: ["Nedelja", "Ponedeljek", "Torek", "Sreda", "\u010cetrtek", "Petek", "Sobota"]
                },
                cs: {
                    months: ["Leden", "\xdanor", "B\u0159ezen", "Duben", "Kv\u011bten", "\u010cerven", "\u010cervenec", "Srpen", "Z\xe1\u0159\xed", "\u0158\xedjen", "Listopad", "Prosinec"],
                    dayOfWeekShort: ["Ne", "Po", "\xdat", "St", "\u010ct", "P\xe1", "So"]
                },
                hu: {
                    months: ["Janu\xe1r", "Febru\xe1r", "M\xe1rcius", "\xc1prilis", "M\xe1jus", "J\xfanius", "J\xfalius", "Augusztus", "Szeptember", "Okt\xf3ber", "November", "December"],
                    dayOfWeekShort: ["Va", "H\xe9", "Ke", "Sze", "Cs", "P\xe9", "Szo"],
                    dayOfWeek: ["vas\xe1rnap", "h\xe9tf\u0151", "kedd", "szerda", "cs\xfct\xf6rt\xf6k", "p\xe9ntek", "szombat"]
                },
                az: {
                    months: ["Yanvar", "Fevral", "Mart", "Aprel", "May", "Iyun", "Iyul", "Avqust", "Sentyabr", "Oktyabr", "Noyabr", "Dekabr"],
                    dayOfWeekShort: ["B", "Be", "\xc7a", "\xc7", "Ca", "C", "\u015e"],
                    dayOfWeek: ["Bazar", "Bazar ert\u0259si", "\xc7\u0259r\u015f\u0259nb\u0259 ax\u015fam\u0131", "\xc7\u0259r\u015f\u0259nb\u0259", "C\xfcm\u0259 ax\u015fam\u0131", "C\xfcm\u0259", "\u015e\u0259nb\u0259"]
                },
                bs: {
                    months: ["Januar", "Februar", "Mart", "April", "Maj", "Jun", "Jul", "Avgust", "Septembar", "Oktobar", "Novembar", "Decembar"],
                    dayOfWeekShort: ["Ned", "Pon", "Uto", "Sri", "\u010cet", "Pet", "Sub"],
                    dayOfWeek: ["Nedjelja", "Ponedjeljak", "Utorak", "Srijeda", "\u010cetvrtak", "Petak", "Subota"]
                },
                ca: {
                    months: ["Gener", "Febrer", "Mar\xe7", "Abril", "Maig", "Juny", "Juliol", "Agost", "Setembre", "Octubre", "Novembre", "Desembre"],
                    dayOfWeekShort: ["Dg", "Dl", "Dt", "Dc", "Dj", "Dv", "Ds"],
                    dayOfWeek: ["Diumenge", "Dilluns", "Dimarts", "Dimecres", "Dijous", "Divendres", "Dissabte"]
                },
                "en-GB": {
                    months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                    dayOfWeekShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                    dayOfWeek: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
                },
                et: {
                    months: ["Jaanuar", "Veebruar", "M\xe4rts", "Aprill", "Mai", "Juuni", "Juuli", "August", "September", "Oktoober", "November", "Detsember"],
                    dayOfWeekShort: ["P", "E", "T", "K", "N", "R", "L"],
                    dayOfWeek: ["P\xfchap\xe4ev", "Esmasp\xe4ev", "Teisip\xe4ev", "Kolmap\xe4ev", "Neljap\xe4ev", "Reede", "Laup\xe4ev"]
                },
                eu: {
                    months: ["Urtarrila", "Otsaila", "Martxoa", "Apirila", "Maiatza", "Ekaina", "Uztaila", "Abuztua", "Iraila", "Urria", "Azaroa", "Abendua"],
                    dayOfWeekShort: ["Ig.", "Al.", "Ar.", "Az.", "Og.", "Or.", "La."],
                    dayOfWeek: ["Igandea", "Astelehena", "Asteartea", "Asteazkena", "Osteguna", "Ostirala", "Larunbata"]
                },
                fi: {
                    months: ["Tammikuu", "Helmikuu", "Maaliskuu", "Huhtikuu", "Toukokuu", "Kes\xe4kuu", "Hein\xe4kuu", "Elokuu", "Syyskuu", "Lokakuu", "Marraskuu", "Joulukuu"],
                    dayOfWeekShort: ["Su", "Ma", "Ti", "Ke", "To", "Pe", "La"],
                    dayOfWeek: ["sunnuntai", "maanantai", "tiistai", "keskiviikko", "torstai", "perjantai", "lauantai"]
                },
                gl: {
                    months: ["Xan", "Feb", "Maz", "Abr", "Mai", "Xun", "Xul", "Ago", "Set", "Out", "Nov", "Dec"],
                    dayOfWeekShort: ["Dom", "Lun", "Mar", "Mer", "Xov", "Ven", "Sab"],
                    dayOfWeek: ["Domingo", "Luns", "Martes", "M\xe9rcores", "Xoves", "Venres", "S\xe1bado"]
                },
                hr: {
                    months: ["Sije\u010danj", "Velja\u010da", "O\u017eujak", "Travanj", "Svibanj", "Lipanj", "Srpanj", "Kolovoz", "Rujan", "Listopad", "Studeni", "Prosinac"],
                    dayOfWeekShort: ["Ned", "Pon", "Uto", "Sri", "\u010cet", "Pet", "Sub"],
                    dayOfWeek: ["Nedjelja", "Ponedjeljak", "Utorak", "Srijeda", "\u010cetvrtak", "Petak", "Subota"]
                },
                ko: {
                    months: ["1\uc6d4", "2\uc6d4", "3\uc6d4", "4\uc6d4", "5\uc6d4", "6\uc6d4", "7\uc6d4", "8\uc6d4", "9\uc6d4", "10\uc6d4", "11\uc6d4", "12\uc6d4"],
                    dayOfWeekShort: ["\uc77c", "\uc6d4", "\ud654", "\uc218", "\ubaa9", "\uae08", "\ud1a0"],
                    dayOfWeek: ["\uc77c\uc694\uc77c", "\uc6d4\uc694\uc77c", "\ud654\uc694\uc77c", "\uc218\uc694\uc77c", "\ubaa9\uc694\uc77c", "\uae08\uc694\uc77c", "\ud1a0\uc694\uc77c"]
                },
                lt: {
                    months: ["Sausio", "Vasario", "Kovo", "Baland\u017eio", "Gegu\u017e\u0117s", "Bir\u017eelio", "Liepos", "Rugpj\u016b\u010dio", "Rugs\u0117jo", "Spalio", "Lapkri\u010dio", "Gruod\u017eio"],
                    dayOfWeekShort: ["Sek", "Pir", "Ant", "Tre", "Ket", "Pen", "\u0160e\u0161"],
                    dayOfWeek: ["Sekmadienis", "Pirmadienis", "Antradienis", "Tre\u010diadienis", "Ketvirtadienis", "Penktadienis", "\u0160e\u0161tadienis"]
                },
                lv: {
                    months: ["Janv\u0101ris", "Febru\u0101ris", "Marts", "Apr\u012blis ", "Maijs", "J\u016bnijs", "J\u016blijs", "Augusts", "Septembris", "Oktobris", "Novembris", "Decembris"],
                    dayOfWeekShort: ["Sv", "Pr", "Ot", "Tr", "Ct", "Pk", "St"],
                    dayOfWeek: ["Sv\u0113tdiena", "Pirmdiena", "Otrdiena", "Tre\u0161diena", "Ceturtdiena", "Piektdiena", "Sestdiena"]
                },
                mk: {
                    months: ["\u0458\u0430\u043d\u0443\u0430\u0440\u0438", "\u0444\u0435\u0432\u0440\u0443\u0430\u0440\u0438", "\u043c\u0430\u0440\u0442", "\u0430\u043f\u0440\u0438\u043b", "\u043c\u0430\u0458", "\u0458\u0443\u043d\u0438", "\u0458\u0443\u043b\u0438", "\u0430\u0432\u0433\u0443\u0441\u0442", "\u0441\u0435\u043f\u0442\u0435\u043c\u0432\u0440\u0438", "\u043e\u043a\u0442\u043e\u043c\u0432\u0440\u0438", "\u043d\u043e\u0435\u043c\u0432\u0440\u0438", "\u0434\u0435\u043a\u0435\u043c\u0432\u0440\u0438"],
                    dayOfWeekShort: ["\u043d\u0435\u0434", "\u043f\u043e\u043d", "\u0432\u0442\u043e", "\u0441\u0440\u0435", "\u0447\u0435\u0442", "\u043f\u0435\u0442", "\u0441\u0430\u0431"],
                    dayOfWeek: ["\u041d\u0435\u0434\u0435\u043b\u0430", "\u041f\u043e\u043d\u0435\u0434\u0435\u043b\u043d\u0438\u043a", "\u0412\u0442\u043e\u0440\u043d\u0438\u043a", "\u0421\u0440\u0435\u0434\u0430", "\u0427\u0435\u0442\u0432\u0440\u0442\u043e\u043a", "\u041f\u0435\u0442\u043e\u043a", "\u0421\u0430\u0431\u043e\u0442\u0430"]
                },
                mn: {
                    months: ["1-\u0440 \u0441\u0430\u0440", "2-\u0440 \u0441\u0430\u0440", "3-\u0440 \u0441\u0430\u0440", "4-\u0440 \u0441\u0430\u0440", "5-\u0440 \u0441\u0430\u0440", "6-\u0440 \u0441\u0430\u0440", "7-\u0440 \u0441\u0430\u0440", "8-\u0440 \u0441\u0430\u0440", "9-\u0440 \u0441\u0430\u0440", "10-\u0440 \u0441\u0430\u0440", "11-\u0440 \u0441\u0430\u0440", "12-\u0440 \u0441\u0430\u0440"],
                    dayOfWeekShort: ["\u0414\u0430\u0432", "\u041c\u044f\u0433", "\u041b\u0445\u0430", "\u041f\u04af\u0440", "\u0411\u0441\u043d", "\u0411\u044f\u043c", "\u041d\u044f\u043c"],
                    dayOfWeek: ["\u0414\u0430\u0432\u0430\u0430", "\u041c\u044f\u0433\u043c\u0430\u0440", "\u041b\u0445\u0430\u0433\u0432\u0430", "\u041f\u04af\u0440\u044d\u0432", "\u0411\u0430\u0430\u0441\u0430\u043d", "\u0411\u044f\u043c\u0431\u0430", "\u041d\u044f\u043c"]
                },
                "pt-BR": {
                    months: ["Janeiro", "Fevereiro", "Mar\xe7o", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"],
                    dayOfWeekShort: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "S\xe1b"],
                    dayOfWeek: ["Domingo", "Segunda", "Ter\xe7a", "Quarta", "Quinta", "Sexta", "S\xe1bado"]
                },
                sk: {
                    months: ["Janu\xe1r", "Febru\xe1r", "Marec", "Apr\xedl", "M\xe1j", "J\xfan", "J\xfal", "August", "September", "Okt\xf3ber", "November", "December"],
                    dayOfWeekShort: ["Ne", "Po", "Ut", "St", "\u0160t", "Pi", "So"],
                    dayOfWeek: ["Nede\u013ea", "Pondelok", "Utorok", "Streda", "\u0160tvrtok", "Piatok", "Sobota"]
                },
                sq: {
                    months: ["Janar", "Shkurt", "Mars", "Prill", "Maj", "Qershor", "Korrik", "Gusht", "Shtator", "Tetor", "N\xebntor", "Dhjetor"],
                    dayOfWeekShort: ["Die", "H\xebn", "Mar", "M\xebr", "Enj", "Pre", "Shtu"],
                    dayOfWeek: ["E Diel", "E H\xebn\xeb", "E Mart\u0113", "E M\xebrkur\xeb", "E Enjte", "E Premte", "E Shtun\xeb"]
                },
                "sr-YU": {
                    months: ["Januar", "Februar", "Mart", "April", "Maj", "Jun", "Jul", "Avgust", "Septembar", "Oktobar", "Novembar", "Decembar"],
                    dayOfWeekShort: ["Ned", "Pon", "Uto", "Sre", "\u010det", "Pet", "Sub"],
                    dayOfWeek: ["Nedelja", "Ponedeljak", "Utorak", "Sreda", "\u010cetvrtak", "Petak", "Subota"]
                },
                sr: {
                    months: ["\u0458\u0430\u043d\u0443\u0430\u0440", "\u0444\u0435\u0431\u0440\u0443\u0430\u0440", "\u043c\u0430\u0440\u0442", "\u0430\u043f\u0440\u0438\u043b", "\u043c\u0430\u0458", "\u0458\u0443\u043d", "\u0458\u0443\u043b", "\u0430\u0432\u0433\u0443\u0441\u0442", "\u0441\u0435\u043f\u0442\u0435\u043c\u0431\u0430\u0440", "\u043e\u043a\u0442\u043e\u0431\u0430\u0440", "\u043d\u043e\u0432\u0435\u043c\u0431\u0430\u0440", "\u0434\u0435\u0446\u0435\u043c\u0431\u0430\u0440"],
                    dayOfWeekShort: ["\u043d\u0435\u0434", "\u043f\u043e\u043d", "\u0443\u0442\u043e", "\u0441\u0440\u0435", "\u0447\u0435\u0442", "\u043f\u0435\u0442", "\u0441\u0443\u0431"],
                    dayOfWeek: ["\u041d\u0435\u0434\u0435\u0459\u0430", "\u041f\u043e\u043d\u0435\u0434\u0435\u0459\u0430\u043a", "\u0423\u0442\u043e\u0440\u0430\u043a", "\u0421\u0440\u0435\u0434\u0430", "\u0427\u0435\u0442\u0432\u0440\u0442\u0430\u043a", "\u041f\u0435\u0442\u0430\u043a", "\u0421\u0443\u0431\u043e\u0442\u0430"]
                },
                sv: {
                    months: ["Januari", "Februari", "Mars", "April", "Maj", "Juni", "Juli", "Augusti", "September", "Oktober", "November", "December"],
                    dayOfWeekShort: ["S\xf6n", "M\xe5n", "Tis", "Ons", "Tor", "Fre", "L\xf6r"],
                    dayOfWeek: ["S\xf6ndag", "M\xe5ndag", "Tisdag", "Onsdag", "Torsdag", "Fredag", "L\xf6rdag"]
                },
                "zh-TW": {
                    months: ["\u4e00\u6708", "\u4e8c\u6708", "\u4e09\u6708", "\u56db\u6708", "\u4e94\u6708", "\u516d\u6708", "\u4e03\u6708", "\u516b\u6708", "\u4e5d\u6708", "\u5341\u6708", "\u5341\u4e00\u6708", "\u5341\u4e8c\u6708"],
                    dayOfWeekShort: ["\u65e5", "\u4e00", "\u4e8c", "\u4e09", "\u56db", "\u4e94", "\u516d"],
                    dayOfWeek: ["\u661f\u671f\u65e5", "\u661f\u671f\u4e00", "\u661f\u671f\u4e8c", "\u661f\u671f\u4e09", "\u661f\u671f\u56db", "\u661f\u671f\u4e94", "\u661f\u671f\u516d"]
                },
                zh: {
                    months: ["\u4e00\u6708", "\u4e8c\u6708", "\u4e09\u6708", "\u56db\u6708", "\u4e94\u6708", "\u516d\u6708", "\u4e03\u6708", "\u516b\u6708", "\u4e5d\u6708", "\u5341\u6708", "\u5341\u4e00\u6708", "\u5341\u4e8c\u6708"],
                    dayOfWeekShort: ["\u65e5", "\u4e00", "\u4e8c", "\u4e09", "\u56db", "\u4e94", "\u516d"],
                    dayOfWeek: ["\u661f\u671f\u65e5", "\u661f\u671f\u4e00", "\u661f\u671f\u4e8c", "\u661f\u671f\u4e09", "\u661f\u671f\u56db", "\u661f\u671f\u4e94", "\u661f\u671f\u516d"]
                },
                he: {
                    months: ["\u05d9\u05e0\u05d5\u05d0\u05e8", "\u05e4\u05d1\u05e8\u05d5\u05d0\u05e8", "\u05de\u05e8\u05e5", "\u05d0\u05e4\u05e8\u05d9\u05dc", "\u05de\u05d0\u05d9", "\u05d9\u05d5\u05e0\u05d9", "\u05d9\u05d5\u05dc\u05d9", "\u05d0\u05d5\u05d2\u05d5\u05e1\u05d8", "\u05e1\u05e4\u05d8\u05de\u05d1\u05e8", "\u05d0\u05d5\u05e7\u05d8\u05d5\u05d1\u05e8", "\u05e0\u05d5\u05d1\u05de\u05d1\u05e8", "\u05d3\u05e6\u05de\u05d1\u05e8"],
                    dayOfWeekShort: ["\u05d0'", "\u05d1'", "\u05d2'", "\u05d3'", "\u05d4'", "\u05d5'", "\u05e9\u05d1\u05ea"],
                    dayOfWeek: ["\u05e8\u05d0\u05e9\u05d5\u05df", "\u05e9\u05e0\u05d9", "\u05e9\u05dc\u05d9\u05e9\u05d9", "\u05e8\u05d1\u05d9\u05e2\u05d9", "\u05d7\u05de\u05d9\u05e9\u05d9", "\u05e9\u05d9\u05e9\u05d9", "\u05e9\u05d1\u05ea", "\u05e8\u05d0\u05e9\u05d5\u05df"]
                },
                hy: {
                    months: ["\u0540\u0578\u0582\u0576\u057e\u0561\u0580", "\u0553\u0565\u057f\u0580\u057e\u0561\u0580", "\u0544\u0561\u0580\u057f", "\u0531\u057a\u0580\u056b\u056c", "\u0544\u0561\u0575\u056b\u057d", "\u0540\u0578\u0582\u0576\u056b\u057d", "\u0540\u0578\u0582\u056c\u056b\u057d", "\u0555\u0563\u0578\u057d\u057f\u0578\u057d", "\u054d\u0565\u057a\u057f\u0565\u0574\u0562\u0565\u0580", "\u0540\u0578\u056f\u057f\u0565\u0574\u0562\u0565\u0580", "\u0546\u0578\u0575\u0565\u0574\u0562\u0565\u0580", "\u0534\u0565\u056f\u057f\u0565\u0574\u0562\u0565\u0580"],
                    dayOfWeekShort: ["\u053f\u056b", "\u0535\u0580\u056f", "\u0535\u0580\u0584", "\u0549\u0578\u0580", "\u0540\u0576\u0563", "\u0548\u0582\u0580\u0562", "\u0547\u0562\u0569"],
                    dayOfWeek: ["\u053f\u056b\u0580\u0561\u056f\u056b", "\u0535\u0580\u056f\u0578\u0582\u0577\u0561\u0562\u0569\u056b", "\u0535\u0580\u0565\u0584\u0577\u0561\u0562\u0569\u056b", "\u0549\u0578\u0580\u0565\u0584\u0577\u0561\u0562\u0569\u056b", "\u0540\u056b\u0576\u0563\u0577\u0561\u0562\u0569\u056b", "\u0548\u0582\u0580\u0562\u0561\u0569", "\u0547\u0561\u0562\u0561\u0569"]
                },
                kg: {
                    months: ["\u04ae\u0447\u0442\u04af\u043d \u0430\u0439\u044b", "\u0411\u0438\u0440\u0434\u0438\u043d \u0430\u0439\u044b", "\u0416\u0430\u043b\u0433\u0430\u043d \u041a\u0443\u0440\u0430\u043d", "\u0427\u044b\u043d \u041a\u0443\u0440\u0430\u043d", "\u0411\u0443\u0433\u0443", "\u041a\u0443\u043b\u0436\u0430", "\u0422\u0435\u043a\u0435", "\u0411\u0430\u0448 \u041e\u043e\u043d\u0430", "\u0410\u044f\u043a \u041e\u043e\u043d\u0430", "\u0422\u043e\u0433\u0443\u0437\u0434\u0443\u043d \u0430\u0439\u044b", "\u0416\u0435\u0442\u0438\u043d\u0438\u043d \u0430\u0439\u044b", "\u0411\u0435\u0448\u0442\u0438\u043d \u0430\u0439\u044b"],
                    dayOfWeekShort: ["\u0416\u0435\u043a", "\u0414\u04af\u0439", "\u0428\u0435\u0439", "\u0428\u0430\u0440", "\u0411\u0435\u0439", "\u0416\u0443\u043c", "\u0418\u0448\u0435"],
                    dayOfWeek: ["\u0416\u0435\u043a\u0448\u0435\u043c\u0431", "\u0414\u04af\u0439\u0448\u04e9\u043c\u0431", "\u0428\u0435\u0439\u0448\u0435\u043c\u0431", "\u0428\u0430\u0440\u0448\u0435\u043c\u0431", "\u0411\u0435\u0439\u0448\u0435\u043c\u0431\u0438", "\u0416\u0443\u043c\u0430", "\u0418\u0448\u0435\u043d\u0431"]
                },
                rm: {
                    months: ["Schaner", "Favrer", "Mars", "Avrigl", "Matg", "Zercladur", "Fanadur", "Avust", "Settember", "October", "November", "December"],
                    dayOfWeekShort: ["Du", "Gli", "Ma", "Me", "Gie", "Ve", "So"],
                    dayOfWeek: ["Dumengia", "Glindesdi", "Mardi", "Mesemna", "Gievgia", "Venderdi", "Sonda"]
                },
                ka: {
                    months: ["\u10d8\u10d0\u10dc\u10d5\u10d0\u10e0\u10d8", "\u10d7\u10d4\u10d1\u10d4\u10e0\u10d5\u10d0\u10da\u10d8", "\u10db\u10d0\u10e0\u10e2\u10d8", "\u10d0\u10de\u10e0\u10d8\u10da\u10d8", "\u10db\u10d0\u10d8\u10e1\u10d8", "\u10d8\u10d5\u10dc\u10d8\u10e1\u10d8", "\u10d8\u10d5\u10da\u10d8\u10e1\u10d8", "\u10d0\u10d2\u10d5\u10d8\u10e1\u10e2\u10dd", "\u10e1\u10d4\u10e5\u10e2\u10d4\u10db\u10d1\u10d4\u10e0\u10d8", "\u10dd\u10e5\u10e2\u10dd\u10db\u10d1\u10d4\u10e0\u10d8", "\u10dc\u10dd\u10d4\u10db\u10d1\u10d4\u10e0\u10d8", "\u10d3\u10d4\u10d9\u10d4\u10db\u10d1\u10d4\u10e0\u10d8"],
                    dayOfWeekShort: ["\u10d9\u10d5", "\u10dd\u10e0\u10e8", "\u10e1\u10d0\u10db\u10e8", "\u10dd\u10d7\u10ee", "\u10ee\u10e3\u10d7", "\u10de\u10d0\u10e0", "\u10e8\u10d0\u10d1"],
                    dayOfWeek: ["\u10d9\u10d5\u10d8\u10e0\u10d0", "\u10dd\u10e0\u10e8\u10d0\u10d1\u10d0\u10d7\u10d8", "\u10e1\u10d0\u10db\u10e8\u10d0\u10d1\u10d0\u10d7\u10d8", "\u10dd\u10d7\u10ee\u10e8\u10d0\u10d1\u10d0\u10d7\u10d8", "\u10ee\u10e3\u10d7\u10e8\u10d0\u10d1\u10d0\u10d7\u10d8", "\u10de\u10d0\u10e0\u10d0\u10e1\u10d9\u10d4\u10d5\u10d8", "\u10e8\u10d0\u10d1\u10d0\u10d7\u10d8"]
                }
            },
            value: "",
            rtl: !1,
            format: "Y/m/d H:i",
            formatTime: "H:i",
            formatDate: "Y/m/d",
            startDate: !1,
            step: 60,
            monthChangeSpinner: !0,
            closeOnDateSelect: !1,
            closeOnTimeSelect: !0,
            closeOnWithoutClick: !0,
            closeOnInputClick: !0,
            timepicker: !0,
            datepicker: !0,
            weeks: !1,
            defaultTime: !1,
            defaultDate: !1,
            minDate: !1,
            maxDate: !1,
            minTime: !1,
            maxTime: !1,
            disabledMinTime: !1,
            disabledMaxTime: !1,
            allowTimes: [],
            opened: !1,
            initTime: !0,
            inline: !1,
            theme: "",
            onSelectDate: function() {},
            onSelectTime: function() {},
            onChangeMonth: function() {},
            onGetWeekOfYear: function() {},
            onChangeYear: function() {},
            onChangeDateTime: function() {},
            onShow: function() {},
            onClose: function() {},
            onGenerate: function() {},
            withoutCopyright: !0,
            inverseButton: !1,
            hours12: !1,
            next: "xdsoft_next",
            prev: "xdsoft_prev",
            dayOfWeekStart: 0,
            parentID: "body",
            timeHeightInTimePicker: 25,
            timepickerScrollbar: !0,
            todayButton: !0,
            prevButton: !0,
            nextButton: !0,
            defaultSelect: !0,
            scrollMonth: !0,
            scrollTime: !0,
            scrollInput: !0,
            lazyInit: !1,
            mask: !1,
            validateOnBlur: !0,
            allowBlank: !0,
            yearStart: 1950,
            yearEnd: 2050,
            monthStart: 0,
            monthEnd: 11,
            style: "",
            id: "",
            fixed: !1,
            roundTime: "round",
            className: "",
            weekends: [],
            highlightedDates: [],
            highlightedPeriods: [],
            allowDates: [],
            allowDateRe: null,
            disabledDates: [],
            disabledWeekDays: [],
            yearOffset: 0,
            beforeShowDay: null,
            enterLikeTab: !0,
            showApplyButton: !1
        },
        n = null,
        s = "en",
        o = "en",
        a = {
            meridiem: ["AM", "PM"]
        },
        r = function() {
            var e = i.i18n[o],
                s = {
                    days: e.dayOfWeek,
                    daysShort: e.dayOfWeekShort,
                    months: e.months,
                    monthsShort: t.map(e.months, function(t) {
                        return t.substring(0, 3)
                    })
                };
            n = new DateFormatter({
                dateSettings: t.extend({}, a, s)
            })
        };
    t.datetimepicker = {
        setLocale: function(t) {
            var e = i.i18n[t] ? t : s;
            o != e && (o = e, r())
        },
        setDateFormatter: function(t) {
            n = t
        },
        RFC_2822: "D, d M Y H:i:s O",
        ATOM: "Y-m-dTH:i:sP",
        ISO_8601: "Y-m-dTH:i:sO",
        RFC_822: "D, d M y H:i:s O",
        RFC_850: "l, d-M-y H:i:s T",
        RFC_1036: "D, d M y H:i:s O",
        RFC_1123: "D, d M Y H:i:s O",
        RSS: "D, d M Y H:i:s O",
        W3C: "Y-m-dTH:i:sP"
    }, r(), window.getComputedStyle || (window.getComputedStyle = function(t) {
        return this.el = t, this.getPropertyValue = function(e) {
            var i = /(\-([a-z]){1})/g;
            return "float" === e && (e = "styleFloat"), i.test(e) && (e = e.replace(i, function(t, e, i) {
                return i.toUpperCase()
            })), t.currentStyle[e] || null
        }, this
    }), Array.prototype.indexOf || (Array.prototype.indexOf = function(t, e) {
        var i, n;
        for (i = e || 0, n = this.length; n > i; i += 1)
            if (this[i] === t) return i;
        return -1
    }), Date.prototype.countDaysInMonth = function() {
        return new Date(this.getFullYear(), this.getMonth() + 1, 0).getDate()
    }, t.fn.xdsoftScroller = function(e) {
        return this.each(function() {
            var i, n, s, o, a, r = t(this),
                l = function(t) {
                    var e, i = {
                        x: 0,
                        y: 0
                    };
                    return "touchstart" === t.type || "touchmove" === t.type || "touchend" === t.type || "touchcancel" === t.type ? (e = t.originalEvent.touches[0] || t.originalEvent.changedTouches[0], i.x = e.clientX, i.y = e.clientY) : ("mousedown" === t.type || "mouseup" === t.type || "mousemove" === t.type || "mouseover" === t.type || "mouseout" === t.type || "mouseenter" === t.type || "mouseleave" === t.type) && (i.x = t.clientX, i.y = t.clientY), i
                },
                c = 100,
                h = !1,
                d = 0,
                u = 0,
                f = 0,
                p = !1,
                m = 0,
                g = function() {};
            return "hide" === e ? void r.find(".xdsoft_scrollbar").hide() : (t(this).hasClass("xdsoft_scroller_box") || (i = r.children().eq(0), n = r[0].clientHeight, s = i[0].offsetHeight, o = t('<div class="xdsoft_scrollbar"></div>'), a = t('<div class="xdsoft_scroller"></div>'), o.append(a), r.addClass("xdsoft_scroller_box").append(o), g = function(t) {
                var e = l(t).y - d + m;
                0 > e && (e = 0), e + a[0].offsetHeight > f && (e = f - a[0].offsetHeight), r.trigger("scroll_element.xdsoft_scroller", [c ? e / c : 0])
            }, a.on("touchstart.xdsoft_scroller mousedown.xdsoft_scroller", function(i) {
                n || r.trigger("resize_scroll.xdsoft_scroller", [e]), d = l(i).y, m = parseInt(a.css("margin-top"), 10), f = o[0].offsetHeight, "mousedown" === i.type || "touchstart" === i.type ? (document && t(document.body).addClass("xdsoft_noselect"), t([document.body, window]).on("touchend mouseup.xdsoft_scroller", function s() {
                    t([document.body, window]).off("touchend mouseup.xdsoft_scroller", s).off("mousemove.xdsoft_scroller", g).removeClass("xdsoft_noselect")
                }), t(document.body).on("mousemove.xdsoft_scroller", g)) : (p = !0, i.stopPropagation(), i.preventDefault())
            }).on("touchmove", function(t) {
                p && (t.preventDefault(), g(t))
            }).on("touchend touchcancel", function() {
                p = !1, m = 0
            }), r.on("scroll_element.xdsoft_scroller", function(t, e) {
                n || r.trigger("resize_scroll.xdsoft_scroller", [e, !0]), e = e > 1 ? 1 : 0 > e || isNaN(e) ? 0 : e, a.css("margin-top", c * e), setTimeout(function() {
                    i.css("marginTop", -parseInt((i[0].offsetHeight - n) * e, 10))
                }, 10)
            }).on("resize_scroll.xdsoft_scroller", function(t, e, l) {
                var h, d;
                n = r[0].clientHeight, s = i[0].offsetHeight, h = n / s, d = h * o[0].offsetHeight, h > 1 ? a.hide() : (a.show(), a.css("height", parseInt(d > 10 ? d : 10, 10)), c = o[0].offsetHeight - a[0].offsetHeight, l !== !0 && r.trigger("scroll_element.xdsoft_scroller", [e || Math.abs(parseInt(i.css("marginTop"), 10)) / (s - n)]))
            }), r.on("mousewheel", function(t) {
                var e = Math.abs(parseInt(i.css("marginTop"), 10));
                return e -= 20 * t.deltaY, 0 > e && (e = 0), r.trigger("scroll_element.xdsoft_scroller", [e / (s - n)]), t.stopPropagation(), !1
            }), r.on("touchstart", function(t) {
                h = l(t), u = Math.abs(parseInt(i.css("marginTop"), 10))
            }), r.on("touchmove", function(t) {
                if (h) {
                    t.preventDefault();
                    var e = l(t);
                    r.trigger("scroll_element.xdsoft_scroller", [(u - (e.y - h.y)) / (s - n)])
                }
            }), r.on("touchend touchcancel", function() {
                h = !1, u = 0
            })), void r.trigger("resize_scroll.xdsoft_scroller", [e]))
        })
    }, t.fn.datetimepicker = function(s, a) {
        var r, l, c = this,
            h = 48,
            d = 57,
            u = 96,
            f = 105,
            p = 17,
            m = 46,
            g = 13,
            v = 27,
            y = 8,
            b = 37,
            x = 38,
            k = 39,
            _ = 40,
            w = 9,
            C = 116,
            T = 65,
            S = 67,
            $ = 86,
            A = 90,
            D = 89,
            E = !1,
            M = t.isPlainObject(s) || !s ? t.extend(!0, {}, i, s) : t.extend(!0, {}, i),
            P = 0,
            L = function(t) {
                t.on("open.xdsoft focusin.xdsoft mousedown.xdsoft touchstart", function e() {
                    t.is(":disabled") || t.data("xdsoft_datetimepicker") || (clearTimeout(P), P = setTimeout(function() {
                        t.data("xdsoft_datetimepicker") || r(t), t.off("open.xdsoft focusin.xdsoft mousedown.xdsoft touchstart", e).trigger("open.xdsoft")
                    }, 100))
                })
            };
        return r = function(i) {
            function a() {
                var t, e = !1;
                return M.startDate ? e = F.strToDate(M.startDate) : (e = M.value || (i && i.val && i.val() ? i.val() : ""), e ? e = F.strToDateTime(e) : M.defaultDate && (e = F.strToDateTime(M.defaultDate), M.defaultTime && (t = F.strtotime(M.defaultTime), e.setHours(t.getHours()), e.setMinutes(t.getMinutes())))), e && F.isValidDate(e) ? R.data("changed", !0) : e = "", e || 0
            }

            function r(e) {
                var n = function(t, e) {
                        var i = t.replace(/([\[\]\/\{\}\(\)\-\.\+]{1})/g, "\\$1").replace(/_/g, "{digit+}").replace(/([0-9]{1})/g, "{digit$1}").replace(/\{digit([0-9]{1})\}/g, "[0-$1_]{1}").replace(/\{digit[\+]\}/g, "[0-9_]{1}");
                        return new RegExp(i).test(e)
                    },
                    s = function(t) {
                        try {
                            if (document.selection && document.selection.createRange) {
                                var e = document.selection.createRange();
                                return e.getBookmark().charCodeAt(2) - 2
                            }
                            if (t.setSelectionRange) return t.selectionStart
                        } catch (i) {
                            return 0
                        }
                    },
                    o = function(t, e) {
                        if (t = "string" == typeof t || t instanceof String ? document.getElementById(t) : t, !t) return !1;
                        if (t.createTextRange) {
                            var i = t.createTextRange();
                            return i.collapse(!0), i.moveEnd("character", e), i.moveStart("character", e), i.select(), !0
                        }
                        return t.setSelectionRange ? (t.setSelectionRange(e, e), !0) : !1
                    };
                e.mask && i.off("keydown.xdsoft"), e.mask === !0 && (e.mask = "undefined" != typeof moment ? e.format.replace(/Y{4}/g, "9999").replace(/Y{2}/g, "99").replace(/M{2}/g, "19").replace(/D{2}/g, "39").replace(/H{2}/g, "29").replace(/m{2}/g, "59").replace(/s{2}/g, "59") : e.format.replace(/Y/g, "9999").replace(/F/g, "9999").replace(/m/g, "19").replace(/d/g, "39").replace(/H/g, "29").replace(/i/g, "59").replace(/s/g, "59")), "string" === t.type(e.mask) && (n(e.mask, i.val()) || (i.val(e.mask.replace(/[0-9]/g, "_")), o(i[0], 0)), i.on("keydown.xdsoft", function(a) {
                    var r, l, c = this.value,
                        M = a.which;
                    if (M >= h && d >= M || M >= u && f >= M || M === y || M === m) {
                        for (r = s(this), l = M !== y && M !== m ? String.fromCharCode(M >= u && f >= M ? M - h : M) : "_", M !== y && M !== m || !r || (r -= 1, l = "_");
                            /[^0-9_]/.test(e.mask.substr(r, 1)) && r < e.mask.length && r > 0;) r += M === y || M === m ? -1 : 1;
                        if (c = c.substr(0, r) + l + c.substr(r + 1), "" === t.trim(c)) c = e.mask.replace(/[0-9]/g, "_");
                        else if (r === e.mask.length) return a.preventDefault(), !1;
                        for (r += M === y || M === m ? 0 : 1;
                            /[^0-9_]/.test(e.mask.substr(r, 1)) && r < e.mask.length && r > 0;) r += M === y || M === m ? -1 : 1;
                        n(e.mask, c) ? (this.value = c, o(this, r)) : "" === t.trim(c) ? this.value = e.mask.replace(/[0-9]/g, "_") : i.trigger("error_input.xdsoft")
                    } else if (-1 !== [T, S, $, A, D].indexOf(M) && E || -1 !== [v, x, _, b, k, C, p, w, g].indexOf(M)) return !0;
                    return a.preventDefault(), !1
                }))
            }
            var l, c, P, L, O, F, N, R = t('<div class="xdsoft_datetimepicker xdsoft_noselect"></div>'),
                j = t('<div class="xdsoft_copyright"><a target="_blank" href="http://xdsoft.net/jqplugins/datetimepicker/">xdsoft.net</a></div>'),
                W = t('<div class="xdsoft_datepicker active"></div>'),
                I = t('<div class="xdsoft_mounthpicker"><button type="button" class="xdsoft_prev"></button><button type="button" class="xdsoft_today_button"></button><div class="xdsoft_label xdsoft_month"><span></span><i></i></div><div class="xdsoft_label xdsoft_year"><span></span><i></i></div><button type="button" class="xdsoft_next"></button></div>'),
                H = t('<div class="xdsoft_calendar"></div>'),
                B = t('<div class="xdsoft_timepicker active"><button type="button" class="xdsoft_prev"></button><div class="xdsoft_time_box"></div><button type="button" class="xdsoft_next"></button></div>'),
                z = B.find(".xdsoft_time_box").eq(0),
                q = t('<div class="xdsoft_time_variant"></div>'),
                U = t('<button type="button" class="xdsoft_save_selected blue-gradient-button">Save Selected</button>'),
                Y = t('<div class="xdsoft_select xdsoft_monthselect"><div></div></div>'),
                V = t('<div class="xdsoft_select xdsoft_yearselect"><div></div></div>'),
                X = !1,
                J = 0;
            M.id && R.attr("id", M.id), M.style && R.attr("style", M.style), M.weeks && R.addClass("xdsoft_showweeks"), M.rtl && R.addClass("xdsoft_rtl"), R.addClass("xdsoft_" + M.theme), R.addClass(M.className), I.find(".xdsoft_month span").after(Y), I.find(".xdsoft_year span").after(V), I.find(".xdsoft_month,.xdsoft_year").on("touchstart mousedown.xdsoft", function(e) {
                var i, n, s = t(this).find(".xdsoft_select").eq(0),
                    o = 0,
                    a = 0,
                    r = s.is(":visible");
                for (I.find(".xdsoft_select").hide(), F.currentTime && (o = F.currentTime[t(this).hasClass("xdsoft_month") ? "getMonth" : "getFullYear"]()),
                    s[r ? "hide" : "show"](), i = s.find("div.xdsoft_option"), n = 0; n < i.length && i.eq(n).data("value") !== o; n += 1) a += i[0].offsetHeight;
                return s.xdsoftScroller(a / (s.children()[0].offsetHeight - s[0].clientHeight)), e.stopPropagation(), !1
            }), I.find(".xdsoft_select").xdsoftScroller().on("touchstart mousedown.xdsoft", function(t) {
                t.stopPropagation(), t.preventDefault()
            }).on("touchstart mousedown.xdsoft", ".xdsoft_option", function() {
                (void 0 === F.currentTime || null === F.currentTime) && (F.currentTime = F.now());
                var e = F.currentTime.getFullYear();
                F && F.currentTime && F.currentTime[t(this).parent().parent().hasClass("xdsoft_monthselect") ? "setMonth" : "setFullYear"](t(this).data("value")), t(this).parent().parent().hide(), R.trigger("xchange.xdsoft"), M.onChangeMonth && t.isFunction(M.onChangeMonth) && M.onChangeMonth.call(R, F.currentTime, R.data("input")), e !== F.currentTime.getFullYear() && t.isFunction(M.onChangeYear) && M.onChangeYear.call(R, F.currentTime, R.data("input"))
            }), R.getValue = function() {
                return F.getCurrentTime()
            }, R.setOptions = function(s) {
                var o = {};
                M = t.extend(!0, {}, M, s), s.allowTimes && t.isArray(s.allowTimes) && s.allowTimes.length && (M.allowTimes = t.extend(!0, [], s.allowTimes)), s.weekends && t.isArray(s.weekends) && s.weekends.length && (M.weekends = t.extend(!0, [], s.weekends)), s.allowDates && t.isArray(s.allowDates) && s.allowDates.length && (M.allowDates = t.extend(!0, [], s.allowDates)), s.allowDateRe && "[object String]" === Object.prototype.toString.call(s.allowDateRe) && (M.allowDateRe = new RegExp(s.allowDateRe)), s.highlightedDates && t.isArray(s.highlightedDates) && s.highlightedDates.length && (t.each(s.highlightedDates, function(i, s) {
                    var a, r = t.map(s.split(","), t.trim),
                        l = new e(n.parseDate(r[0], M.formatDate), r[1], r[2]),
                        c = n.formatDate(l.date, M.formatDate);
                    void 0 !== o[c] ? (a = o[c].desc, a && a.length && l.desc && l.desc.length && (o[c].desc = a + "\n" + l.desc)) : o[c] = l
                }), M.highlightedDates = t.extend(!0, [], o)), s.highlightedPeriods && t.isArray(s.highlightedPeriods) && s.highlightedPeriods.length && (o = t.extend(!0, [], M.highlightedDates), t.each(s.highlightedPeriods, function(i, s) {
                    var a, r, l, c, h, d, u;
                    if (t.isArray(s)) a = s[0], r = s[1], l = s[2], u = s[3];
                    else {
                        var f = t.map(s.split(","), t.trim);
                        a = n.parseDate(f[0], M.formatDate), r = n.parseDate(f[1], M.formatDate), l = f[2], u = f[3]
                    }
                    for (; r >= a;) c = new e(a, l, u), h = n.formatDate(a, M.formatDate), a.setDate(a.getDate() + 1), void 0 !== o[h] ? (d = o[h].desc, d && d.length && c.desc && c.desc.length && (o[h].desc = d + "\n" + c.desc)) : o[h] = c
                }), M.highlightedDates = t.extend(!0, [], o)), s.disabledDates && t.isArray(s.disabledDates) && s.disabledDates.length && (M.disabledDates = t.extend(!0, [], s.disabledDates)), s.disabledWeekDays && t.isArray(s.disabledWeekDays) && s.disabledWeekDays.length && (M.disabledWeekDays = t.extend(!0, [], s.disabledWeekDays)), !M.open && !M.opened || M.inline || i.trigger("open.xdsoft"), M.inline && (X = !0, R.addClass("xdsoft_inline"), i.after(R).hide()), M.inverseButton && (M.next = "xdsoft_prev", M.prev = "xdsoft_next"), M.datepicker ? W.addClass("active") : W.removeClass("active"), M.timepicker ? B.addClass("active") : B.removeClass("active"), M.value && (F.setCurrentTime(M.value), i && i.val && i.val(F.str)), M.dayOfWeekStart = isNaN(M.dayOfWeekStart) ? 0 : parseInt(M.dayOfWeekStart, 10) % 7, M.timepickerScrollbar || z.xdsoftScroller("hide"), M.minDate && /^[\+\-](.*)$/.test(M.minDate) && (M.minDate = n.formatDate(F.strToDateTime(M.minDate), M.formatDate)), M.maxDate && /^[\+\-](.*)$/.test(M.maxDate) && (M.maxDate = n.formatDate(F.strToDateTime(M.maxDate), M.formatDate)), U.toggle(M.showApplyButton), I.find(".xdsoft_today_button").css("visibility", M.todayButton ? "visible" : "hidden"), I.find("." + M.prev).css("visibility", M.prevButton ? "visible" : "hidden"), I.find("." + M.next).css("visibility", M.nextButton ? "visible" : "hidden"), r(M), M.validateOnBlur && i.off("blur.xdsoft").on("blur.xdsoft", function() {
                    if (M.allowBlank && (!t.trim(t(this).val()).length || "string" == typeof M.mask && t.trim(t(this).val()) === M.mask.replace(/[0-9]/g, "_"))) t(this).val(null), R.data("xdsoft_datetime").empty();
                    else {
                        var e = n.parseDate(t(this).val(), M.format);
                        if (e) t(this).val(n.formatDate(e, M.format));
                        else {
                            var i = +[t(this).val()[0], t(this).val()[1]].join(""),
                                s = +[t(this).val()[2], t(this).val()[3]].join("");
                            t(this).val(!M.datepicker && M.timepicker && i >= 0 && 24 > i && s >= 0 && 60 > s ? [i, s].map(function(t) {
                                return t > 9 ? t : "0" + t
                            }).join(":") : n.formatDate(F.now(), M.format))
                        }
                        R.data("xdsoft_datetime").setCurrentTime(t(this).val())
                    }
                    R.trigger("changedatetime.xdsoft"), R.trigger("close.xdsoft")
                }), M.dayOfWeekStartPrev = 0 === M.dayOfWeekStart ? 6 : M.dayOfWeekStart - 1, R.trigger("xchange.xdsoft").trigger("afterOpen.xdsoft")
            }, R.data("options", M).on("touchstart mousedown.xdsoft", function(t) {
                return t.stopPropagation(), t.preventDefault(), V.hide(), Y.hide(), !1
            }), z.append(q), z.xdsoftScroller(), R.on("afterOpen.xdsoft", function() {
                z.xdsoftScroller()
            }), R.append(W).append(B), M.withoutCopyright !== !0 && R.append(j), W.append(I).append(H).append(U), t(M.parentID).append(R), l = function() {
                var e = this;
                e.now = function(t) {
                    var i, n, s = new Date;
                    return !t && M.defaultDate && (i = e.strToDateTime(M.defaultDate), s.setFullYear(i.getFullYear()), s.setMonth(i.getMonth()), s.setDate(i.getDate())), M.yearOffset && s.setFullYear(s.getFullYear() + M.yearOffset), !t && M.defaultTime && (n = e.strtotime(M.defaultTime), s.setHours(n.getHours()), s.setMinutes(n.getMinutes())), s
                }, e.isValidDate = function(t) {
                    return "[object Date]" !== Object.prototype.toString.call(t) ? !1 : !isNaN(t.getTime())
                }, e.setCurrentTime = function(t, i) {
                    e.currentTime = "string" == typeof t ? e.strToDateTime(t) : e.isValidDate(t) ? t : t || i || !M.allowBlank ? e.now() : null, R.trigger("xchange.xdsoft")
                }, e.empty = function() {
                    e.currentTime = null
                }, e.getCurrentTime = function() {
                    return e.currentTime
                }, e.nextMonth = function() {
                    (void 0 === e.currentTime || null === e.currentTime) && (e.currentTime = e.now());
                    var i, n = e.currentTime.getMonth() + 1;
                    return 12 === n && (e.currentTime.setFullYear(e.currentTime.getFullYear() + 1), n = 0), i = e.currentTime.getFullYear(), e.currentTime.setDate(Math.min(new Date(e.currentTime.getFullYear(), n + 1, 0).getDate(), e.currentTime.getDate())), e.currentTime.setMonth(n), M.onChangeMonth && t.isFunction(M.onChangeMonth) && M.onChangeMonth.call(R, F.currentTime, R.data("input")), i !== e.currentTime.getFullYear() && t.isFunction(M.onChangeYear) && M.onChangeYear.call(R, F.currentTime, R.data("input")), R.trigger("xchange.xdsoft"), n
                }, e.prevMonth = function() {
                    (void 0 === e.currentTime || null === e.currentTime) && (e.currentTime = e.now());
                    var i = e.currentTime.getMonth() - 1;
                    return -1 === i && (e.currentTime.setFullYear(e.currentTime.getFullYear() - 1), i = 11), e.currentTime.setDate(Math.min(new Date(e.currentTime.getFullYear(), i + 1, 0).getDate(), e.currentTime.getDate())), e.currentTime.setMonth(i), M.onChangeMonth && t.isFunction(M.onChangeMonth) && M.onChangeMonth.call(R, F.currentTime, R.data("input")), R.trigger("xchange.xdsoft"), i
                }, e.getWeekOfYear = function(e) {
                    if (M.onGetWeekOfYear && t.isFunction(M.onGetWeekOfYear)) {
                        var i = M.onGetWeekOfYear.call(R, e);
                        if ("undefined" != typeof i) return i
                    }
                    var n = new Date(e.getFullYear(), 0, 1);
                    return 4 != n.getDay() && n.setMonth(0, 1 + (4 - n.getDay() + 7) % 7), Math.ceil(((e - n) / 864e5 + n.getDay() + 1) / 7)
                }, e.strToDateTime = function(t) {
                    var i, s, o = [];
                    return t && t instanceof Date && e.isValidDate(t) ? t : (o = /^(\+|\-)(.*)$/.exec(t), o && (o[2] = n.parseDate(o[2], M.formatDate)), o && o[2] ? (i = o[2].getTime() - 6e4 * o[2].getTimezoneOffset(), s = new Date(e.now(!0).getTime() + parseInt(o[1] + "1", 10) * i)) : s = t ? n.parseDate(t, M.format) : e.now(), e.isValidDate(s) || (s = e.now()), s)
                }, e.strToDate = function(t) {
                    if (t && t instanceof Date && e.isValidDate(t)) return t;
                    var i = t ? n.parseDate(t, M.formatDate) : e.now(!0);
                    return e.isValidDate(i) || (i = e.now(!0)), i
                }, e.strtotime = function(t) {
                    if (t && t instanceof Date && e.isValidDate(t)) return t;
                    var i = t ? n.parseDate(t, M.formatTime) : e.now(!0);
                    return e.isValidDate(i) || (i = e.now(!0)), i
                }, e.str = function() {
                    return n.formatDate(e.currentTime, M.format)
                }, e.currentTime = this.now()
            }, F = new l, U.on("touchend click", function(t) {
                t.preventDefault(), R.data("changed", !0), F.setCurrentTime(a()), i.val(F.str()), R.trigger("close.xdsoft")
            }), I.find(".xdsoft_today_button").on("touchend mousedown.xdsoft", function() {
                R.data("changed", !0), F.setCurrentTime(0, !0), R.trigger("afterOpen.xdsoft")
            }).on("dblclick.xdsoft", function() {
                var t, e, n = F.getCurrentTime();
                n = new Date(n.getFullYear(), n.getMonth(), n.getDate()), t = F.strToDate(M.minDate), t = new Date(t.getFullYear(), t.getMonth(), t.getDate()), t > n || (e = F.strToDate(M.maxDate), e = new Date(e.getFullYear(), e.getMonth(), e.getDate()), n > e || (i.val(F.str()), i.trigger("change"), R.trigger("close.xdsoft")))
            }), I.find(".xdsoft_prev,.xdsoft_next").on("touchend mousedown.xdsoft", function() {
                var e = t(this),
                    i = 0,
                    n = !1;
                ! function s(t) {
                    e.hasClass(M.next) ? F.nextMonth() : e.hasClass(M.prev) && F.prevMonth(), M.monthChangeSpinner && (n || (i = setTimeout(s, t || 100)))
                }(500), t([document.body, window]).on("touchend mouseup.xdsoft", function o() {
                    clearTimeout(i), n = !0, t([document.body, window]).off("touchend mouseup.xdsoft", o)
                })
            }), B.find(".xdsoft_prev,.xdsoft_next").on("touchend mousedown.xdsoft", function() {
                var e = t(this),
                    i = 0,
                    n = !1,
                    s = 110;
                ! function o(t) {
                    var a = z[0].clientHeight,
                        r = q[0].offsetHeight,
                        l = Math.abs(parseInt(q.css("marginTop"), 10));
                    e.hasClass(M.next) && r - a - M.timeHeightInTimePicker >= l ? q.css("marginTop", "-" + (l + M.timeHeightInTimePicker) + "px") : e.hasClass(M.prev) && l - M.timeHeightInTimePicker >= 0 && q.css("marginTop", "-" + (l - M.timeHeightInTimePicker) + "px"), z.trigger("scroll_element.xdsoft_scroller", [Math.abs(parseInt(q[0].style.marginTop, 10) / (r - a))]), s = s > 10 ? 10 : s - 10, n || (i = setTimeout(o, t || s))
                }(500), t([document.body, window]).on("touchend mouseup.xdsoft", function a() {
                    clearTimeout(i), n = !0, t([document.body, window]).off("touchend mouseup.xdsoft", a)
                })
            }), c = 0, R.on("xchange.xdsoft", function(e) {
                clearTimeout(c), c = setTimeout(function() {
                    if (void 0 === F.currentTime || null === F.currentTime) {
                        if (M.allowBlank) return;
                        F.currentTime = F.now()
                    }
                    for (var e, a, r, l, c, h, d, u, f, p, m = "", g = new Date(F.currentTime.getFullYear(), F.currentTime.getMonth(), 1, 12, 0, 0), v = 0, y = F.now(), b = !1, x = !1, k = [], _ = !0, w = "", C = ""; g.getDay() !== M.dayOfWeekStart;) g.setDate(g.getDate() - 1);
                    for (m += "<table><thead><tr>", M.weeks && (m += "<th></th>"), e = 0; 7 > e; e += 1) m += "<th>" + M.i18n[o].dayOfWeekShort[(e + M.dayOfWeekStart) % 7] + "</th>";
                    for (m += "</tr></thead>", m += "<tbody>", M.maxDate !== !1 && (b = F.strToDate(M.maxDate), b = new Date(b.getFullYear(), b.getMonth(), b.getDate(), 23, 59, 59, 999)), M.minDate !== !1 && (x = F.strToDate(M.minDate), x = new Date(x.getFullYear(), x.getMonth(), x.getDate())); v < F.currentTime.countDaysInMonth() || g.getDay() !== M.dayOfWeekStart || F.currentTime.getMonth() === g.getMonth();) k = [], v += 1, r = g.getDay(), l = g.getDate(), c = g.getFullYear(), h = g.getMonth(), d = F.getWeekOfYear(g), p = "", k.push("xdsoft_date"), u = M.beforeShowDay && t.isFunction(M.beforeShowDay.call) ? M.beforeShowDay.call(R, g) : null, M.allowDateRe && "[object RegExp]" === Object.prototype.toString.call(M.allowDateRe) ? M.allowDateRe.test(n.formatDate(g, M.formatDate)) || k.push("xdsoft_disabled") : M.allowDates && M.allowDates.length > 0 ? -1 === M.allowDates.indexOf(n.formatDate(g, M.formatDate)) && k.push("xdsoft_disabled") : b !== !1 && g > b || x !== !1 && x > g || u && u[0] === !1 ? k.push("xdsoft_disabled") : -1 !== M.disabledDates.indexOf(n.formatDate(g, M.formatDate)) ? k.push("xdsoft_disabled") : -1 !== M.disabledWeekDays.indexOf(r) ? k.push("xdsoft_disabled") : i.is("[readonly]") && k.push("xdsoft_disabled"), u && "" !== u[1] && k.push(u[1]), F.currentTime.getMonth() !== h && k.push("xdsoft_other_month"), (M.defaultSelect || R.data("changed")) && n.formatDate(F.currentTime, M.formatDate) === n.formatDate(g, M.formatDate) && k.push("xdsoft_current"), n.formatDate(y, M.formatDate) === n.formatDate(g, M.formatDate) && k.push("xdsoft_today"), (0 === g.getDay() || 6 === g.getDay() || -1 !== M.weekends.indexOf(n.formatDate(g, M.formatDate))) && k.push("xdsoft_weekend"), void 0 !== M.highlightedDates[n.formatDate(g, M.formatDate)] && (a = M.highlightedDates[n.formatDate(g, M.formatDate)], k.push(void 0 === a.style ? "xdsoft_highlighted_default" : a.style), p = void 0 === a.desc ? "" : a.desc), M.beforeShowDay && t.isFunction(M.beforeShowDay) && k.push(M.beforeShowDay(g)), _ && (m += "<tr>", _ = !1, M.weeks && (m += "<th>" + d + "</th>")), m += '<td data-date="' + l + '" data-month="' + h + '" data-year="' + c + '" class="xdsoft_date xdsoft_day_of_week' + g.getDay() + " " + k.join(" ") + '" title="' + p + '"><div>' + l + "</div></td>", g.getDay() === M.dayOfWeekStartPrev && (m += "</tr>", _ = !0), g.setDate(l + 1);
                    if (m += "</tbody></table>", H.html(m), I.find(".xdsoft_label span").eq(0).text(M.i18n[o].months[F.currentTime.getMonth()]), I.find(".xdsoft_label span").eq(1).text(F.currentTime.getFullYear()), w = "", C = "", h = "", f = function(e, s) {
                            var o, a, r = F.now(),
                                l = M.allowTimes && t.isArray(M.allowTimes) && M.allowTimes.length;
                            r.setHours(e), e = parseInt(r.getHours(), 10), r.setMinutes(s), s = parseInt(r.getMinutes(), 10), o = new Date(F.currentTime), o.setHours(e), o.setMinutes(s), k = [], M.minDateTime !== !1 && M.minDateTime > o || M.maxTime !== !1 && F.strtotime(M.maxTime).getTime() < r.getTime() || M.minTime !== !1 && F.strtotime(M.minTime).getTime() > r.getTime() ? k.push("xdsoft_disabled") : M.minDateTime !== !1 && M.minDateTime > o || M.disabledMinTime !== !1 && r.getTime() > F.strtotime(M.disabledMinTime).getTime() && M.disabledMaxTime !== !1 && r.getTime() < F.strtotime(M.disabledMaxTime).getTime() ? k.push("xdsoft_disabled") : i.is("[readonly]") && k.push("xdsoft_disabled"), a = new Date(F.currentTime), a.setHours(parseInt(F.currentTime.getHours(), 10)), l || a.setMinutes(Math[M.roundTime](F.currentTime.getMinutes() / M.step) * M.step), (M.initTime || M.defaultSelect || R.data("changed")) && a.getHours() === parseInt(e, 10) && (!l && M.step > 59 || a.getMinutes() === parseInt(s, 10)) && (M.defaultSelect || R.data("changed") ? k.push("xdsoft_current") : M.initTime && k.push("xdsoft_init_time")), parseInt(y.getHours(), 10) === parseInt(e, 10) && parseInt(y.getMinutes(), 10) === parseInt(s, 10) && k.push("xdsoft_today"), w += '<div class="xdsoft_time ' + k.join(" ") + '" data-hour="' + e + '" data-minute="' + s + '">' + n.formatDate(r, M.formatTime) + "</div>"
                        }, M.allowTimes && t.isArray(M.allowTimes) && M.allowTimes.length)
                        for (v = 0; v < M.allowTimes.length; v += 1) C = F.strtotime(M.allowTimes[v]).getHours(), h = F.strtotime(M.allowTimes[v]).getMinutes(), f(C, h);
                    else
                        for (v = 0, e = 0; v < (M.hours12 ? 12 : 24); v += 1)
                            for (e = 0; 60 > e; e += M.step) C = (10 > v ? "0" : "") + v, h = (10 > e ? "0" : "") + e, f(C, h);
                    for (q.html(w), s = "", v = 0, v = parseInt(M.yearStart, 10) + M.yearOffset; v <= parseInt(M.yearEnd, 10) + M.yearOffset; v += 1) s += '<div class="xdsoft_option ' + (F.currentTime.getFullYear() === v ? "xdsoft_current" : "") + '" data-value="' + v + '">' + v + "</div>";
                    for (V.children().eq(0).html(s), v = parseInt(M.monthStart, 10), s = ""; v <= parseInt(M.monthEnd, 10); v += 1) s += '<div class="xdsoft_option ' + (F.currentTime.getMonth() === v ? "xdsoft_current" : "") + '" data-value="' + v + '">' + M.i18n[o].months[v] + "</div>";
                    Y.children().eq(0).html(s), t(R).trigger("generate.xdsoft")
                }, 10), e.stopPropagation()
            }).on("afterOpen.xdsoft", function() {
                if (M.timepicker) {
                    var t, e, i, n;
                    q.find(".xdsoft_current").length ? t = ".xdsoft_current" : q.find(".xdsoft_init_time").length && (t = ".xdsoft_init_time"), t ? (e = z[0].clientHeight, i = q[0].offsetHeight, n = q.find(t).index() * M.timeHeightInTimePicker + 1, n > i - e && (n = i - e), z.trigger("scroll_element.xdsoft_scroller", [parseInt(n, 10) / (i - e)])) : z.trigger("scroll_element.xdsoft_scroller", [0])
                }
            }), P = 0, H.on("touchend click.xdsoft", "td", function(e) {
                e.stopPropagation(), P += 1;
                var n = t(this),
                    s = F.currentTime;
                return (void 0 === s || null === s) && (F.currentTime = F.now(), s = F.currentTime), n.hasClass("xdsoft_disabled") ? !1 : (s.setDate(1), s.setFullYear(n.data("year")), s.setMonth(n.data("month")), s.setDate(n.data("date")), R.trigger("select.xdsoft", [s]), i.val(F.str()), M.onSelectDate && t.isFunction(M.onSelectDate) && M.onSelectDate.call(R, F.currentTime, R.data("input"), e), R.data("changed", !0), R.trigger("xchange.xdsoft"), R.trigger("changedatetime.xdsoft"), (P > 1 || M.closeOnDateSelect === !0 || M.closeOnDateSelect === !1 && !M.timepicker) && !M.inline && R.trigger("close.xdsoft"), void setTimeout(function() {
                    P = 0
                }, 200))
            }), q.on("touchend click.xdsoft", "div", function(e) {
                e.stopPropagation();
                var i = t(this),
                    n = F.currentTime;
                return (void 0 === n || null === n) && (F.currentTime = F.now(), n = F.currentTime), i.hasClass("xdsoft_disabled") ? !1 : (n.setHours(i.data("hour")), n.setMinutes(i.data("minute")), R.trigger("select.xdsoft", [n]), R.data("input").val(F.str()), M.onSelectTime && t.isFunction(M.onSelectTime) && M.onSelectTime.call(R, F.currentTime, R.data("input"), e), R.data("changed", !0), R.trigger("xchange.xdsoft"), R.trigger("changedatetime.xdsoft"), void(M.inline !== !0 && M.closeOnTimeSelect === !0 && R.trigger("close.xdsoft")))
            }), W.on("mousewheel.xdsoft", function(t) {
                return M.scrollMonth ? (t.deltaY < 0 ? F.nextMonth() : F.prevMonth(), !1) : !0
            }), i.on("mousewheel.xdsoft", function(t) {
                return M.scrollInput ? !M.datepicker && M.timepicker ? (L = q.find(".xdsoft_current").length ? q.find(".xdsoft_current").eq(0).index() : 0, L + t.deltaY >= 0 && L + t.deltaY < q.children().length && (L += t.deltaY), q.children().eq(L).length && q.children().eq(L).trigger("mousedown"), !1) : M.datepicker && !M.timepicker ? (W.trigger(t, [t.deltaY, t.deltaX, t.deltaY]), i.val && i.val(F.str()), R.trigger("changedatetime.xdsoft"), !1) : void 0 : !0
            }), R.on("changedatetime.xdsoft", function(e) {
                if (M.onChangeDateTime && t.isFunction(M.onChangeDateTime)) {
                    var i = R.data("input");
                    M.onChangeDateTime.call(R, F.currentTime, i, e), delete M.value, i.trigger("change")
                }
            }).on("generate.xdsoft", function() {
                M.onGenerate && t.isFunction(M.onGenerate) && M.onGenerate.call(R, F.currentTime, R.data("input")), X && (R.trigger("afterOpen.xdsoft"), X = !1)
            }).on("click.xdsoft", function(t) {
                t.stopPropagation()
            }), L = 0, N = function(t, e) {
                do
                    if (t = t.parentNode, e(t) === !1) break; while ("HTML" !== t.nodeName)
            }, O = function() {
                var e, i, n, s, o, a, r, l, c, h, d, u, f;
                if (l = R.data("input"), e = l.offset(), i = l[0], h = "top", n = e.top + i.offsetHeight - 1, s = e.left, o = "absolute", c = t(window).width(), u = t(window).height(), f = t(window).scrollTop(), document.documentElement.clientWidth - e.left < W.parent().outerWidth(!0)) {
                    var p = W.parent().outerWidth(!0) - i.offsetWidth;
                    s -= p
                }
                "rtl" === l.parent().css("direction") && (s -= R.outerWidth() - l.outerWidth()), M.fixed ? (n -= f, s -= t(window).scrollLeft(), o = "fixed") : (r = !1, N(i, function(t) {
                    return "fixed" === window.getComputedStyle(t).getPropertyValue("position") ? (r = !0, !1) : void 0
                }), r ? (o = "fixed", n + R.outerHeight() > u + f ? (h = "bottom", n = u + f - e.top) : n -= f) : n + i.offsetHeight > u + f && (n = e.top - i.offsetHeight + 1), 0 > n && (n = 0), s + i.offsetWidth > c && (s = c - i.offsetWidth)), a = R[0], N(a, function(t) {
                    var e;
                    return e = window.getComputedStyle(t).getPropertyValue("position"), "relative" === e && c >= t.offsetWidth ? (s -= (c - t.offsetWidth) / 2, !1) : void 0
                }), d = {
                    position: o,
                    left: s,
                    top: "",
                    bottom: ""
                }, d[h] = n, R.css(d)
            }, R.on("open.xdsoft", function(e) {
                var i = !0;
                M.onShow && t.isFunction(M.onShow) && (i = M.onShow.call(R, F.currentTime, R.data("input"), e)), i !== !1 && (R.show(), O(), t(window).off("resize.xdsoft", O).on("resize.xdsoft", O), M.closeOnWithoutClick && t([document.body, window]).on("touchstart mousedown.xdsoft", function n() {
                    R.trigger("close.xdsoft"), t([document.body, window]).off("touchstart mousedown.xdsoft", n)
                }))
            }).on("close.xdsoft", function(e) {
                var i = !0;
                I.find(".xdsoft_month,.xdsoft_year").find(".xdsoft_select").hide(), M.onClose && t.isFunction(M.onClose) && (i = M.onClose.call(R, F.currentTime, R.data("input"), e)), i === !1 || M.opened || M.inline || R.hide(), e.stopPropagation()
            }).on("toggle.xdsoft", function() {
                R.trigger(R.is(":visible") ? "close.xdsoft" : "open.xdsoft")
            }).data("input", i), J = 0, R.data("xdsoft_datetime", F), R.setOptions(M), F.setCurrentTime(a()), i.data("xdsoft_datetimepicker", R).on("open.xdsoft focusin.xdsoft mousedown.xdsoft touchstart", function() {
                i.is(":disabled") || i.data("xdsoft_datetimepicker").is(":visible") && M.closeOnInputClick || (clearTimeout(J), J = setTimeout(function() {
                    i.is(":disabled") || (X = !0, F.setCurrentTime(a(), !0), M.mask && r(M), R.trigger("open.xdsoft"))
                }, 100))
            }).on("keydown.xdsoft", function(e) {
                var i, n = e.which;
                return -1 !== [g].indexOf(n) && M.enterLikeTab ? (i = t("input:visible,textarea:visible,button:visible,a:visible"), R.trigger("close.xdsoft"), i.eq(i.index(this) + 1).focus(), !1) : -1 !== [w].indexOf(n) ? (R.trigger("close.xdsoft"), !0) : void 0
            }).on("blur.xdsoft", function() {
                R.trigger("close.xdsoft")
            })
        }, l = function(e) {
            var i = e.data("xdsoft_datetimepicker");
            i && (i.data("xdsoft_datetime", null), i.remove(), e.data("xdsoft_datetimepicker", null).off(".xdsoft"), t(window).off("resize.xdsoft"), t([window, document.body]).off("mousedown.xdsoft touchstart"), e.unmousewheel && e.unmousewheel())
        }, t(document).off("keydown.xdsoftctrl keyup.xdsoftctrl").on("keydown.xdsoftctrl", function(t) {
            t.keyCode === p && (E = !0)
        }).on("keyup.xdsoftctrl", function(t) {
            t.keyCode === p && (E = !1)
        }), this.each(function() {
            var e, i = t(this).data("xdsoft_datetimepicker");
            if (i) {
                if ("string" === t.type(s)) switch (s) {
                    case "show":
                        t(this).select().focus(), i.trigger("open.xdsoft");
                        break;
                    case "hide":
                        i.trigger("close.xdsoft");
                        break;
                    case "toggle":
                        i.trigger("toggle.xdsoft");
                        break;
                    case "destroy":
                        l(t(this));
                        break;
                    case "reset":
                        this.value = this.defaultValue, this.value && i.data("xdsoft_datetime").isValidDate(n.parseDate(this.value, M.format)) || i.data("changed", !1), i.data("xdsoft_datetime").setCurrentTime(this.value);
                        break;
                    case "validate":
                        e = i.data("input"), e.trigger("blur.xdsoft");
                        break;
                    default:
                        i[s] && t.isFunction(i[s]) && (c = i[s](a))
                } else i.setOptions(s);
                return 0
            }
            "string" !== t.type(s) && (!M.lazyInit || M.open || M.inline ? r(t(this)) : L(t(this)))
        }), c
    }, t.fn.datetimepicker.defaults = i
}),
function(t) {
    "function" == typeof define && define.amd ? define(["jquery"], t) : "object" == typeof exports ? module.exports = t : t(jQuery)
}(function(t) {
    function e(e) {
        var a = e || window.event,
            r = l.call(arguments, 1),
            c = 0,
            d = 0,
            u = 0,
            f = 0,
            p = 0,
            m = 0;
        if (e = t.event.fix(a), e.type = "mousewheel", "detail" in a && (u = -1 * a.detail), "wheelDelta" in a && (u = a.wheelDelta), "wheelDeltaY" in a && (u = a.wheelDeltaY), "wheelDeltaX" in a && (d = -1 * a.wheelDeltaX), "axis" in a && a.axis === a.HORIZONTAL_AXIS && (d = -1 * u, u = 0), c = 0 === u ? d : u, "deltaY" in a && (u = -1 * a.deltaY, c = u), "deltaX" in a && (d = a.deltaX, 0 === u && (c = -1 * d)), 0 !== u || 0 !== d) {
            if (1 === a.deltaMode) {
                var g = t.data(this, "mousewheel-line-height");
                c *= g, u *= g, d *= g
            } else if (2 === a.deltaMode) {
                var v = t.data(this, "mousewheel-page-height");
                c *= v, u *= v, d *= v
            }
            if (f = Math.max(Math.abs(u), Math.abs(d)), (!o || o > f) && (o = f, n(a, f) && (o /= 40)), n(a, f) && (c /= 40, d /= 40, u /= 40), c = Math[c >= 1 ? "floor" : "ceil"](c / o), d = Math[d >= 1 ? "floor" : "ceil"](d / o), u = Math[u >= 1 ? "floor" : "ceil"](u / o), h.settings.normalizeOffset && this.getBoundingClientRect) {
                var y = this.getBoundingClientRect();
                p = e.clientX - y.left, m = e.clientY - y.top
            }
            return e.deltaX = d, e.deltaY = u, e.deltaFactor = o, e.offsetX = p, e.offsetY = m, e.deltaMode = 0, r.unshift(e, c, d, u), s && clearTimeout(s), s = setTimeout(i, 200), (t.event.dispatch || t.event.handle).apply(this, r)
        }
    }

    function i() {
        o = null
    }

    function n(t, e) {
        return h.settings.adjustOldDeltas && "mousewheel" === t.type && e % 120 === 0
    }
    var s, o, a = ["wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll"],
        r = "onwheel" in document || document.documentMode >= 9 ? ["wheel"] : ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"],
        l = Array.prototype.slice;
    if (t.event.fixHooks)
        for (var c = a.length; c;) t.event.fixHooks[a[--c]] = t.event.mouseHooks;
    var h = t.event.special.mousewheel = {
        version: "3.1.12",
        setup: function() {
            if (this.addEventListener)
                for (var i = r.length; i;) this.addEventListener(r[--i], e, !1);
            else this.onmousewheel = e;
            t.data(this, "mousewheel-line-height", h.getLineHeight(this)), t.data(this, "mousewheel-page-height", h.getPageHeight(this))
        },
        teardown: function() {
            if (this.removeEventListener)
                for (var i = r.length; i;) this.removeEventListener(r[--i], e, !1);
            else this.onmousewheel = null;
            t.removeData(this, "mousewheel-line-height"), t.removeData(this, "mousewheel-page-height")
        },
        getLineHeight: function(e) {
            var i = t(e),
                n = i["offsetParent" in t.fn ? "offsetParent" : "parent"]();
            return n.length || (n = t("body")), parseInt(n.css("fontSize"), 10) || parseInt(i.css("fontSize"), 10) || 16
        },
        getPageHeight: function(e) {
            return t(e).height()
        },
        settings: {
            adjustOldDeltas: !0,
            normalizeOffset: !0
        }
    };
    t.fn.extend({
        mousewheel: function(t) {
            return t ? this.bind("mousewheel", t) : this.trigger("mousewheel")
        },
        unmousewheel: function(t) {
            return this.unbind("mousewheel", t)
        }
    })
}),
function() {
    var t, e, i, n, s, o = {}.hasOwnProperty,
        a = function(t, e) {
            function i() {
                this.constructor = t
            }
            for (var n in e) o.call(e, n) && (t[n] = e[n]);
            return i.prototype = e.prototype, t.prototype = new i, t.__super__ = e.prototype, t
        };
    n = function() {
        function t() {
            this.options_index = 0, this.parsed = []
        }
        return t.prototype.add_node = function(t) {
            return "OPTGROUP" === t.nodeName.toUpperCase() ? this.add_group(t) : this.add_option(t)
        }, t.prototype.add_group = function(t) {
            var e, i, n, s, o, a;
            for (e = this.parsed.length, this.parsed.push({
                    array_index: e,
                    group: !0,
                    label: this.escapeExpression(t.label),
                    children: 0,
                    disabled: t.disabled
                }), o = t.childNodes, a = [], n = 0, s = o.length; s > n; n++) i = o[n], a.push(this.add_option(i, e, t.disabled));
            return a
        }, t.prototype.add_option = function(t, e, i) {
            return "OPTION" === t.nodeName.toUpperCase() ? ("" !== t.text ? (null != e && (this.parsed[e].children += 1), this.parsed.push({
                array_index: this.parsed.length,
                options_index: this.options_index,
                value: t.value,
                text: t.text,
                html: t.innerHTML,
                selected: t.selected,
                disabled: i === !0 ? i : t.disabled,
                group_array_index: e,
                classes: t.className,
                style: t.style.cssText
            })) : this.parsed.push({
                array_index: this.parsed.length,
                options_index: this.options_index,
                empty: !0
            }), this.options_index += 1) : void 0
        }, t.prototype.escapeExpression = function(t) {
            var e, i;
            return null == t || t === !1 ? "" : /[\&\<\>\"\'\`]/.test(t) ? (e = {
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&#x27;",
                "`": "&#x60;"
            }, i = /&(?!\w+;)|[\<\>\"\'\`]/g, t.replace(i, function(t) {
                return e[t] || "&amp;"
            })) : t
        }, t
    }(), n.select_to_array = function(t) {
        var e, i, s, o, a;
        for (i = new n, a = t.childNodes, s = 0, o = a.length; o > s; s++) e = a[s], i.add_node(e);
        return i.parsed
    }, e = function() {
        function t(e, i) {
            this.form_field = e, this.options = null != i ? i : {}, t.browser_is_supported() && (this.is_multiple = this.form_field.multiple, this.set_default_text(), this.set_default_values(), this.setup(), this.set_up_html(), this.register_observers())
        }
        return t.prototype.set_default_values = function() {
            var t = this;
            return this.click_test_action = function(e) {
                return t.test_active_click(e)
            }, this.activate_action = function(e) {
                return t.activate_field(e)
            }, this.active_field = !1, this.mouse_on_container = !1, this.results_showing = !1, this.result_highlighted = null, this.allow_single_deselect = null != this.options.allow_single_deselect && null != this.form_field.options[0] && "" === this.form_field.options[0].text ? this.options.allow_single_deselect : !1, this.disable_search_threshold = this.options.disable_search_threshold || 0, this.disable_search = this.options.disable_search || !1, this.enable_split_word_search = null != this.options.enable_split_word_search ? this.options.enable_split_word_search : !0, this.group_search = null != this.options.group_search ? this.options.group_search : !0, this.search_contains = this.options.search_contains || !1, this.single_backstroke_delete = null != this.options.single_backstroke_delete ? this.options.single_backstroke_delete : !0, this.max_selected_options = this.options.max_selected_options || 1 / 0, this.inherit_select_classes = this.options.inherit_select_classes || !1, this.display_selected_options = null != this.options.display_selected_options ? this.options.display_selected_options : !0, this.display_disabled_options = null != this.options.display_disabled_options ? this.options.display_disabled_options : !0
        }, t.prototype.set_default_text = function() {
            return this.form_field.getAttribute("data-placeholder") ? this.default_text = this.form_field.getAttribute("data-placeholder") : this.is_multiple ? this.default_text = this.options.placeholder_text_multiple || this.options.placeholder_text || t.default_multiple_text : this.default_text = this.options.placeholder_text_single || this.options.placeholder_text || t.default_single_text, this.results_none_found = this.form_field.getAttribute("data-no_results_text") || this.options.no_results_text || t.default_no_result_text
        }, t.prototype.mouse_enter = function() {
            return this.mouse_on_container = !0
        }, t.prototype.mouse_leave = function() {
            return this.mouse_on_container = !1
        }, t.prototype.input_focus = function() {
            var t = this;
            if (this.is_multiple) {
                if (!this.active_field) return setTimeout(function() {
                    return t.container_mousedown()
                }, 50)
            } else if (!this.active_field) return this.activate_field()
        }, t.prototype.input_blur = function() {
            var t = this;
            return this.mouse_on_container ? void 0 : (this.active_field = !1, setTimeout(function() {
                return t.blur_test()
            }, 100))
        }, t.prototype.results_option_build = function(t) {
            var e, i, n, s, o;
            for (e = "", o = this.results_data, n = 0, s = o.length; s > n; n++) i = o[n], e += i.group ? this.result_add_group(i) : this.result_add_option(i), (null != t ? t.first : void 0) && (i.selected && this.is_multiple ? this.choice_build(i) : i.selected && !this.is_multiple && this.single_set_selected_text(i.text));
            return e
        }, t.prototype.result_add_option = function(t) {
            var e, i;
            return t.search_match && this.include_option_in_results(t) ? (e = [], t.disabled || t.selected && this.is_multiple || e.push("active-result"), !t.disabled || t.selected && this.is_multiple || e.push("disabled-result"), t.selected && e.push("result-selected"), null != t.group_array_index && e.push("group-option"), "" !== t.classes && e.push(t.classes), i = document.createElement("li"), i.className = e.join(" "), i.style.cssText = t.style, i.setAttribute("data-option-array-index", t.array_index), i.innerHTML = t.search_text, this.outerHTML(i)) : ""
        }, t.prototype.result_add_group = function(t) {
            var e;
            return (t.search_match || t.group_match) && t.active_options > 0 ? (e = document.createElement("li"), e.className = "group-result", e.innerHTML = t.search_text, this.outerHTML(e)) : ""
        }, t.prototype.results_update_field = function() {
            return this.set_default_text(), this.is_multiple || this.results_reset_cleanup(), this.result_clear_highlight(), this.results_build(), this.results_showing ? this.winnow_results() : void 0
        }, t.prototype.reset_single_select_options = function() {
            var t, e, i, n, s;
            for (n = this.results_data, s = [], e = 0, i = n.length; i > e; e++) t = n[e], t.selected ? s.push(t.selected = !1) : s.push(void 0);
            return s
        }, t.prototype.results_toggle = function() {
            return this.results_showing ? this.results_hide() : this.results_show()
        }, t.prototype.results_search = function() {
            return this.results_showing ? this.winnow_results() : this.results_show()
        }, t.prototype.winnow_results = function() {
            var t, e, i, n, s, o, a, r, l, c, h, d, u;
            for (this.no_results_clear(), s = 0, a = this.get_search_text(), t = a.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&"), n = this.search_contains ? "" : "^", i = new RegExp(n + t, "i"), c = new RegExp(t, "i"), u = this.results_data, h = 0, d = u.length; d > h; h++) e = u[h], e.search_match = !1, o = null, this.include_option_in_results(e) && (e.group && (e.group_match = !1, e.active_options = 0), null != e.group_array_index && this.results_data[e.group_array_index] && (o = this.results_data[e.group_array_index], 0 === o.active_options && o.search_match && (s += 1), o.active_options += 1), (!e.group || this.group_search) && (e.search_text = e.group ? e.label : e.html, e.search_match = this.search_string_match(e.search_text, i), e.search_match && !e.group && (s += 1), e.search_match ? (a.length && (r = e.search_text.search(c), l = e.search_text.substr(0, r + a.length) + "</em>" + e.search_text.substr(r + a.length), e.search_text = l.substr(0, r) + "<em>" + l.substr(r)), null != o && (o.group_match = !0)) : null != e.group_array_index && this.results_data[e.group_array_index].search_match && (e.search_match = !0)));
            return this.result_clear_highlight(), 1 > s && a.length ? (this.update_results_content(""), this.no_results(a)) : (this.update_results_content(this.results_option_build()), this.winnow_results_set_highlight())
        }, t.prototype.search_string_match = function(t, e) {
            var i, n, s, o;
            if (e.test(t)) return !0;
            if (this.enable_split_word_search && (t.indexOf(" ") >= 0 || 0 === t.indexOf("[")) && (n = t.replace(/\[|\]/g, "").split(" "), n.length))
                for (s = 0, o = n.length; o > s; s++)
                    if (i = n[s], e.test(i)) return !0
        }, t.prototype.choices_count = function() {
            var t, e, i, n;
            if (null != this.selected_option_count) return this.selected_option_count;
            for (this.selected_option_count = 0, n = this.form_field.options, e = 0, i = n.length; i > e; e++) t = n[e], t.selected && (this.selected_option_count += 1);
            return this.selected_option_count
        }, t.prototype.choices_click = function(t) {
            return t.preventDefault(), this.results_showing || this.is_disabled ? void 0 : this.results_show()
        }, t.prototype.keyup_checker = function(t) {
            var e, i;
            switch (e = null != (i = t.which) ? i : t.keyCode, this.search_field_scale(), e) {
                case 8:
                    if (this.is_multiple && this.backstroke_length < 1 && this.choices_count() > 0) return this.keydown_backstroke();
                    if (!this.pending_backstroke) return this.result_clear_highlight(), this.results_search();
                    break;
                case 13:
                    if (t.preventDefault(), this.results_showing) return this.result_select(t);
                    break;
                case 27:
                    return this.results_showing && this.results_hide(), !0;
                case 9:
                case 38:
                case 40:
                case 16:
                case 91:
                case 17:
                    break;
                default:
                    return this.results_search()
            }
        }, t.prototype.clipboard_event_checker = function() {
            var t = this;
            return setTimeout(function() {
                return t.results_search()
            }, 50)
        }, t.prototype.container_width = function() {
            return null != this.options.width ? this.options.width : "" + this.form_field.offsetWidth + "px"
        }, t.prototype.include_option_in_results = function(t) {
            return this.is_multiple && !this.display_selected_options && t.selected ? !1 : !this.display_disabled_options && t.disabled ? !1 : !t.empty
        }, t.prototype.search_results_touchstart = function(t) {
            return this.touch_started = !0, this.search_results_mouseover(t)
        }, t.prototype.search_results_touchmove = function(t) {
            return this.touch_started = !1, this.search_results_mouseout(t)
        }, t.prototype.search_results_touchend = function(t) {
            return this.touch_started ? this.search_results_mouseup(t) : void 0
        }, t.prototype.outerHTML = function(t) {
            var e;
            return t.outerHTML ? t.outerHTML : (e = document.createElement("div"), e.appendChild(t), e.innerHTML)
        }, t.browser_is_supported = function() {
            return "Microsoft Internet Explorer" === window.navigator.appName ? document.documentMode >= 8 : /iP(od|hone)/i.test(window.navigator.userAgent) ? !1 : !/Android/i.test(window.navigator.userAgent) || !/Mobile/i.test(window.navigator.userAgent);
        }, t.default_multiple_text = "Select Some Options", t.default_single_text = "Select an Option", t.default_no_result_text = "No results match", t
    }(), t = jQuery, t.fn.extend({
        chosen: function(n) {
            return e.browser_is_supported() ? this.each(function() {
                var e, s;
                e = t(this), s = e.data("chosen"), "destroy" === n && s ? s.destroy() : s || e.data("chosen", new i(this, n))
            }) : this
        }
    }), i = function(e) {
        function i() {
            return s = i.__super__.constructor.apply(this, arguments)
        }
        return a(i, e), i.prototype.setup = function() {
            return this.form_field_jq = t(this.form_field), this.current_selectedIndex = this.form_field.selectedIndex, this.is_rtl = this.form_field_jq.hasClass("chosen-rtl")
        }, i.prototype.set_up_html = function() {
            var e, i;
            return e = ["chosen-container"], e.push("chosen-container-" + (this.is_multiple ? "multi" : "single")), this.inherit_select_classes && this.form_field.className && e.push(this.form_field.className), this.is_rtl && e.push("chosen-rtl"), i = {
                "class": e.join(" "),
                style: "width: " + this.container_width() + ";",
                title: this.form_field.title
            }, this.form_field.id.length && (i.id = this.form_field.id.replace(/[^\w]/g, "_") + "_chosen"), this.container = t("<div />", i), this.is_multiple ? this.container.html('<ul class="chosen-choices"><li class="search-field"><input type="text" value="' + this.default_text + '" class="default" autocomplete="off" style="width:25px;" /></li></ul><div class="chosen-drop"><ul class="chosen-results"></ul></div>') : this.container.html('<a class="chosen-single chosen-default" tabindex="-1"><span>' + this.default_text + '</span><div><b></b></div></a><div class="chosen-drop"><div class="chosen-search"><input type="text" autocomplete="off" /></div><ul class="chosen-results"></ul></div>'), this.form_field_jq.hide().after(this.container), this.dropdown = this.container.find("div.chosen-drop").first(), this.search_field = this.container.find("input").first(), this.search_results = this.container.find("ul.chosen-results").first(), this.search_field_scale(), this.search_no_results = this.container.find("li.no-results").first(), this.is_multiple ? (this.search_choices = this.container.find("ul.chosen-choices").first(), this.search_container = this.container.find("li.search-field").first()) : (this.search_container = this.container.find("div.chosen-search").first(), this.selected_item = this.container.find(".chosen-single").first()), this.results_build(), this.set_tab_index(), this.set_label_behavior(), this.form_field_jq.trigger("chosen:ready", {
                chosen: this
            })
        }, i.prototype.register_observers = function() {
            var t = this;
            return this.container.bind("mousedown.chosen", function(e) {
                t.container_mousedown(e)
            }), this.container.bind("mouseup.chosen", function(e) {
                t.container_mouseup(e)
            }), this.container.bind("mouseenter.chosen", function(e) {
                t.mouse_enter(e)
            }), this.container.bind("mouseleave.chosen", function(e) {
                t.mouse_leave(e)
            }), this.search_results.bind("mouseup.chosen", function(e) {
                t.search_results_mouseup(e)
            }), this.search_results.bind("mouseover.chosen", function(e) {
                t.search_results_mouseover(e)
            }), this.search_results.bind("mouseout.chosen", function(e) {
                t.search_results_mouseout(e)
            }), this.search_results.bind("mousewheel.chosen DOMMouseScroll.chosen", function(e) {
                t.search_results_mousewheel(e)
            }), this.search_results.bind("touchstart.chosen", function(e) {
                t.search_results_touchstart(e)
            }), this.search_results.bind("touchmove.chosen", function(e) {
                t.search_results_touchmove(e)
            }), this.search_results.bind("touchend.chosen", function(e) {
                t.search_results_touchend(e)
            }), this.form_field_jq.bind("chosen:updated.chosen", function(e) {
                t.results_update_field(e)
            }), this.form_field_jq.bind("chosen:activate.chosen", function(e) {
                t.activate_field(e)
            }), this.form_field_jq.bind("chosen:open.chosen", function(e) {
                t.container_mousedown(e)
            }), this.form_field_jq.bind("chosen:close.chosen", function(e) {
                t.input_blur(e)
            }), this.search_field.bind("blur.chosen", function(e) {
                t.input_blur(e)
            }), this.search_field.bind("keyup.chosen", function(e) {
                t.keyup_checker(e)
            }), this.search_field.bind("keydown.chosen", function(e) {
                t.keydown_checker(e)
            }), this.search_field.bind("focus.chosen", function(e) {
                t.input_focus(e)
            }), this.search_field.bind("cut.chosen", function(e) {
                t.clipboard_event_checker(e)
            }), this.search_field.bind("paste.chosen", function(e) {
                t.clipboard_event_checker(e)
            }), this.is_multiple ? this.search_choices.bind("click.chosen", function(e) {
                t.choices_click(e)
            }) : this.container.bind("click.chosen", function(t) {
                t.preventDefault()
            })
        }, i.prototype.destroy = function() {
            return t(this.container[0].ownerDocument).unbind("click.chosen", this.click_test_action), this.search_field[0].tabIndex && (this.form_field_jq[0].tabIndex = this.search_field[0].tabIndex), this.container.remove(), this.form_field_jq.removeData("chosen"), this.form_field_jq.show()
        }, i.prototype.search_field_disabled = function() {
            return this.is_disabled = this.form_field_jq[0].disabled, this.is_disabled ? (this.container.addClass("chosen-disabled"), this.search_field[0].disabled = !0, this.is_multiple || this.selected_item.unbind("focus.chosen", this.activate_action), this.close_field()) : (this.container.removeClass("chosen-disabled"), this.search_field[0].disabled = !1, this.is_multiple ? void 0 : this.selected_item.bind("focus.chosen", this.activate_action))
        }, i.prototype.container_mousedown = function(e) {
            return this.is_disabled || (e && "mousedown" === e.type && !this.results_showing && e.preventDefault(), null != e && t(e.target).hasClass("search-choice-close")) ? void 0 : (this.active_field ? this.is_multiple || !e || t(e.target)[0] !== this.selected_item[0] && !t(e.target).parents("a.chosen-single").length || (e.preventDefault(), this.results_toggle()) : (this.is_multiple && this.search_field.val(""), t(this.container[0].ownerDocument).bind("click.chosen", this.click_test_action), this.results_show()), this.activate_field())
        }, i.prototype.container_mouseup = function(t) {
            return "ABBR" !== t.target.nodeName || this.is_disabled ? void 0 : this.results_reset(t)
        }, i.prototype.search_results_mousewheel = function(t) {
            var e;
            return t.originalEvent && (e = -t.originalEvent.wheelDelta || t.originalEvent.detail), null != e ? (t.preventDefault(), "DOMMouseScroll" === t.type && (e = 40 * e), this.search_results.scrollTop(e + this.search_results.scrollTop())) : void 0
        }, i.prototype.blur_test = function() {
            return !this.active_field && this.container.hasClass("chosen-container-active") ? this.close_field() : void 0
        }, i.prototype.close_field = function() {
            return t(this.container[0].ownerDocument).unbind("click.chosen", this.click_test_action), this.active_field = !1, this.results_hide(), this.container.removeClass("chosen-container-active"), this.clear_backstroke(), this.show_search_field_default(), this.search_field_scale()
        }, i.prototype.activate_field = function() {
            return this.container.addClass("chosen-container-active"), this.active_field = !0, this.search_field.val(this.search_field.val()), this.search_field.focus()
        }, i.prototype.test_active_click = function(e) {
            var i;
            return i = t(e.target).closest(".chosen-container"), i.length && this.container[0] === i[0] ? this.active_field = !0 : this.close_field()
        }, i.prototype.results_build = function() {
            return this.parsing = !0, this.selected_option_count = null, this.results_data = n.select_to_array(this.form_field), this.is_multiple ? this.search_choices.find("li.search-choice").remove() : this.is_multiple || (this.single_set_selected_text(), this.disable_search || this.form_field.options.length <= this.disable_search_threshold ? (this.search_field[0].readOnly = !0, this.container.addClass("chosen-container-single-nosearch")) : (this.search_field[0].readOnly = !1, this.container.removeClass("chosen-container-single-nosearch"))), this.update_results_content(this.results_option_build({
                first: !0
            })), this.search_field_disabled(), this.show_search_field_default(), this.search_field_scale(), this.parsing = !1
        }, i.prototype.result_do_highlight = function(t) {
            var e, i, n, s, o;
            if (t.length) {
                if (this.result_clear_highlight(), this.result_highlight = t, this.result_highlight.addClass("highlighted"), n = parseInt(this.search_results.css("maxHeight"), 10), o = this.search_results.scrollTop(), s = n + o, i = this.result_highlight.position().top + this.search_results.scrollTop(), e = i + this.result_highlight.outerHeight(), e >= s) return this.search_results.scrollTop(e - n > 0 ? e - n : 0);
                if (o > i) return this.search_results.scrollTop(i)
            }
        }, i.prototype.result_clear_highlight = function() {
            return this.result_highlight && this.result_highlight.removeClass("highlighted"), this.result_highlight = null
        }, i.prototype.results_show = function() {
            return this.is_multiple && this.max_selected_options <= this.choices_count() ? (this.form_field_jq.trigger("chosen:maxselected", {
                chosen: this
            }), !1) : (this.container.addClass("chosen-with-drop"), this.results_showing = !0, this.search_field.focus(), this.search_field.val(this.search_field.val()), this.winnow_results(), this.form_field_jq.trigger("chosen:showing_dropdown", {
                chosen: this
            }))
        }, i.prototype.update_results_content = function(t) {
            return this.search_results.html(t)
        }, i.prototype.results_hide = function() {
            return this.results_showing && (this.result_clear_highlight(), this.container.removeClass("chosen-with-drop"), this.form_field_jq.trigger("chosen:hiding_dropdown", {
                chosen: this
            })), this.results_showing = !1
        }, i.prototype.set_tab_index = function() {
            var t;
            return this.form_field.tabIndex ? (t = this.form_field.tabIndex, this.form_field.tabIndex = -1, this.search_field[0].tabIndex = t) : void 0
        }, i.prototype.set_label_behavior = function() {
            var e = this;
            return this.form_field_label = this.form_field_jq.parents("label"), !this.form_field_label.length && this.form_field.id.length && (this.form_field_label = t("label[for='" + this.form_field.id + "']")), this.form_field_label.length > 0 ? this.form_field_label.bind("click.chosen", function(t) {
                return e.is_multiple ? e.container_mousedown(t) : e.activate_field()
            }) : void 0
        }, i.prototype.show_search_field_default = function() {
            return this.is_multiple && this.choices_count() < 1 && !this.active_field ? (this.search_field.val(this.default_text), this.search_field.addClass("default")) : (this.search_field.val(""), this.search_field.removeClass("default"))
        }, i.prototype.search_results_mouseup = function(e) {
            var i;
            return i = t(e.target).hasClass("active-result") ? t(e.target) : t(e.target).parents(".active-result").first(), i.length ? (this.result_highlight = i, this.result_select(e), this.search_field.focus()) : void 0
        }, i.prototype.search_results_mouseover = function(e) {
            var i;
            return i = t(e.target).hasClass("active-result") ? t(e.target) : t(e.target).parents(".active-result").first(), i ? this.result_do_highlight(i) : void 0
        }, i.prototype.search_results_mouseout = function(e) {
            return t(e.target).hasClass("active-result") ? this.result_clear_highlight() : void 0
        }, i.prototype.choice_build = function(e) {
            var i, n, s = this;
            return i = t("<li />", {
                "class": "search-choice"
            }).html("<span>" + e.html + "</span>"), e.disabled ? i.addClass("search-choice-disabled") : (n = t("<a />", {
                "class": "search-choice-close",
                "data-option-array-index": e.array_index
            }), n.bind("click.chosen", function(t) {
                return s.choice_destroy_link_click(t)
            }), i.append(n)), this.search_container.before(i)
        }, i.prototype.choice_destroy_link_click = function(e) {
            return e.preventDefault(), e.stopPropagation(), this.is_disabled ? void 0 : this.choice_destroy(t(e.target))
        }, i.prototype.choice_destroy = function(t) {
            return this.result_deselect(t[0].getAttribute("data-option-array-index")) ? (this.show_search_field_default(), this.is_multiple && this.choices_count() > 0 && this.search_field.val().length < 1 && this.results_hide(), t.parents("li").first().remove(), this.search_field_scale()) : void 0
        }, i.prototype.results_reset = function() {
            return this.reset_single_select_options(), this.form_field.options[0].selected = !0, this.single_set_selected_text(), this.show_search_field_default(), this.results_reset_cleanup(), this.form_field_jq.trigger("change"), this.active_field ? this.results_hide() : void 0
        }, i.prototype.results_reset_cleanup = function() {
            return this.current_selectedIndex = this.form_field.selectedIndex, this.selected_item.find("abbr").remove()
        }, i.prototype.result_select = function(t) {
            var e, i;
            return this.result_highlight ? (e = this.result_highlight, this.result_clear_highlight(), this.is_multiple && this.max_selected_options <= this.choices_count() ? (this.form_field_jq.trigger("chosen:maxselected", {
                chosen: this
            }), !1) : (this.is_multiple ? e.removeClass("active-result") : this.reset_single_select_options(), i = this.results_data[e[0].getAttribute("data-option-array-index")], i.selected = !0, this.form_field.options[i.options_index].selected = !0, this.selected_option_count = null, this.is_multiple ? this.choice_build(i) : this.single_set_selected_text(i.text), (t.metaKey || t.ctrlKey) && this.is_multiple || this.results_hide(), this.search_field.val(""), (this.is_multiple || this.form_field.selectedIndex !== this.current_selectedIndex) && this.form_field_jq.trigger("change", {
                selected: this.form_field.options[i.options_index].value
            }), this.current_selectedIndex = this.form_field.selectedIndex, this.search_field_scale())) : void 0
        }, i.prototype.single_set_selected_text = function(t) {
            return null == t && (t = this.default_text), t === this.default_text ? this.selected_item.addClass("chosen-default") : (this.single_deselect_control_build(), this.selected_item.removeClass("chosen-default")), this.selected_item.find("span").text(t)
        }, i.prototype.result_deselect = function(t) {
            var e;
            return e = this.results_data[t], this.form_field.options[e.options_index].disabled ? !1 : (e.selected = !1, this.form_field.options[e.options_index].selected = !1, this.selected_option_count = null, this.result_clear_highlight(), this.results_showing && this.winnow_results(), this.form_field_jq.trigger("change", {
                deselected: this.form_field.options[e.options_index].value
            }), this.search_field_scale(), !0)
        }, i.prototype.single_deselect_control_build = function() {
            return this.allow_single_deselect ? (this.selected_item.find("abbr").length || this.selected_item.find("span").first().after('<abbr class="search-choice-close"></abbr>'), this.selected_item.addClass("chosen-single-with-deselect")) : void 0
        }, i.prototype.get_search_text = function() {
            return this.search_field.val() === this.default_text ? "" : t("<div/>").text(t.trim(this.search_field.val())).html()
        }, i.prototype.winnow_results_set_highlight = function() {
            var t, e;
            return e = this.is_multiple ? [] : this.search_results.find(".result-selected.active-result"), t = e.length ? e.first() : this.search_results.find(".active-result").first(), null != t ? this.result_do_highlight(t) : void 0
        }, i.prototype.no_results = function(e) {
            var i;
            return i = t('<li class="no-results">' + this.results_none_found + ' "<span></span>"</li>'), i.find("span").first().html(e), this.search_results.append(i), this.form_field_jq.trigger("chosen:no_results", {
                chosen: this
            })
        }, i.prototype.no_results_clear = function() {
            return this.search_results.find(".no-results").remove()
        }, i.prototype.keydown_arrow = function() {
            var t;
            return this.results_showing && this.result_highlight ? (t = this.result_highlight.nextAll("li.active-result").first()) ? this.result_do_highlight(t) : void 0 : this.results_show()
        }, i.prototype.keyup_arrow = function() {
            var t;
            return this.results_showing || this.is_multiple ? this.result_highlight ? (t = this.result_highlight.prevAll("li.active-result"), t.length ? this.result_do_highlight(t.first()) : (this.choices_count() > 0 && this.results_hide(), this.result_clear_highlight())) : void 0 : this.results_show()
        }, i.prototype.keydown_backstroke = function() {
            var t;
            return this.pending_backstroke ? (this.choice_destroy(this.pending_backstroke.find("a").first()), this.clear_backstroke()) : (t = this.search_container.siblings("li.search-choice").last(), t.length && !t.hasClass("search-choice-disabled") ? (this.pending_backstroke = t, this.single_backstroke_delete ? this.keydown_backstroke() : this.pending_backstroke.addClass("search-choice-focus")) : void 0)
        }, i.prototype.clear_backstroke = function() {
            return this.pending_backstroke && this.pending_backstroke.removeClass("search-choice-focus"), this.pending_backstroke = null
        }, i.prototype.keydown_checker = function(t) {
            var e, i;
            switch (e = null != (i = t.which) ? i : t.keyCode, this.search_field_scale(), 8 !== e && this.pending_backstroke && this.clear_backstroke(), e) {
                case 8:
                    this.backstroke_length = this.search_field.val().length;
                    break;
                case 9:
                    this.results_showing && !this.is_multiple && this.result_select(t), this.mouse_on_container = !1;
                    break;
                case 13:
                    t.preventDefault();
                    break;
                case 38:
                    t.preventDefault(), this.keyup_arrow();
                    break;
                case 40:
                    t.preventDefault(), this.keydown_arrow()
            }
        }, i.prototype.search_field_scale = function() {
            var e, i, n, s, o, a, r, l, c;
            if (this.is_multiple) {
                for (n = 0, r = 0, o = "position:absolute; left: -1000px; top: -1000px; display:none;", a = ["font-size", "font-style", "font-weight", "font-family", "line-height", "text-transform", "letter-spacing"], l = 0, c = a.length; c > l; l++) s = a[l], o += s + ":" + this.search_field.css(s) + ";";
                return e = t("<div />", {
                    style: o
                }), e.text(this.search_field.val()), t("body").append(e), r = e.width() + 25, e.remove(), i = this.container.outerWidth(), r > i - 10 && (r = i - 10), this.search_field.css({
                    width: r + "px"
                })
            }
        }, i
    }(e)
}.call(this);
var soca = {
    misc: {},
    animation: {},
    filter: {},
    mobile: {}
};
soca.misc = {
        updateTableHeight: function() {
            $("td.inner-table").each(function() {
                return $(this).find("table").height($(this).outerHeight())
            })
        },
        datepicker: function() {
            var t = new Date;
            t.setDate(t.getDate()), $(".datetimepicker").datetimepicker({
                format: "d/m/y h:m A",
                minDate: t
            })
        },
        taxify: function(t) {
            var e, i;
            return e = Number(t), i = e + e * (parseFloat(taxRate) / 100), i = isNaN(i) ? 0 : i
        },
        taxField: function() {
            var t = $(".calculate-tax");
            t.each(function() {
                return $(this).closest("input").next().hasClass("label-blue") ? void 0 : $(this).closest("input").after('<div class="gross label label-blue">Gross amount: ' + parseFloat(soca.misc.taxify(this.value), 10).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "</div>")
            }), t.bind("input", function() {
                return $(this).next(".gross").text("Gross amount: " + parseFloat(soca.misc.taxify(this.value)).toFixed(2))
            })
        },
        multiSelect: function() {
            //$("select.chosen").chosen()
        },
        log: function(t) {
            return "object" == typeof console ? console.log(t) : null
        }
    }, soca.modal = {
        standard: function(t) {
            $(t).modal({
                backdrop: "static",
                keyboard: !1
            })
        },
        open: function(t, e) {
            $(t).click(function() {
                return soca.modal.standard(e), !1
            })
        }
    }, soca.animation = {
        loading: function() {
            $(".loading-trigger, .form-action input[type=submit]").on("click", function() {
                return $(".loading-overlay").css("height", "100%").addClass("active"), $(".loading5").addClass("active")
            }), $("body").on("click", ".modal form .modal-footer input[type=submit]", function() {
                return $(".modal .loading-overlay").css("height", "100%").addClass("active"), $(".modal .loading5").addClass("active")
            })
        },
        loaded: function() {
            return $(".loading-overlay").css("height", "0%").removeClass("active"), $(".loading5").removeClass("active")
        },
        colourCaveat: function() {
            $(".user-menu ul li:first-child a").hover(function() {
                return $(".user-menu .fa-caret-up").css("color", "#2f363d")
            }, function() {
                return $(".user-menu .fa-caret-up").css("color", "#ffffff")
            })
        },
        alert: function(t, e, i, n, s) {
            $(t).before('<div class="alert alert-' + e + " animated fadeInDown " + i + '">' + n + "</div>").delay(s).queue(function(t) {
                $("." + i).addClass("fadeOutUp").delay(800).hide(1), t()
            })
        },
        sidebarExtension: function() {
            $("#extend-sidebar").on("click", function() {
                var t = $("body");
                if (t.hasClass("open-sidebar")) $("header #logo, #extend-sidebar").css({
                    width: "60px"
                }), $(".main").css({
                    "margin-left": "60px"
                }), t.removeClass("open-sidebar"), $("[data-toggle=tooltip]").tooltip("enable");
                else {
                    t.addClass("open-sidebar");
                    var e = $("#sidebar").width();
                    $("header #logo, #extend-sidebar").css({
                        width: e + "px"
                    }), $(".main").css({
                        "margin-left": e + "px"
                    }), $("[data-toggle=tooltip]").tooltip("disable")
                }
            })
        }
    }, soca.index = {
        tableRowTarget: function() {
            $("tbody.mixitup").show();
        },
        filter: function(t) {
            $(t).on("change", function() {
                var t;
                return t = $(this).find(":selected").data("filter"), $(".mixitup").mixItUp("filter", t)
            })
        },
        sort: function(t) {
            $(t).on("change", function() {
                var t;
                return t = $(this).find(":selected").data("sort"), $(".mixitup").mixItUp("sort", t)
            })
        }
    }, soca.mobile = {
        disableTooltips: function() {
            $("html").hasClass("touch") || $('[data-toggle="tooltip"]').tooltip()
        },
        triggerMenu: function() {
            new mlPushMenu(document.getElementById("mp-menu"), document.getElementById("trigger"))
        }
    },
    function() {
        "use strict";
        var t = this,
            e = t.Chart,
            i = function(t) {
                this.canvas = t.canvas, this.ctx = t;
                var e = function(t, e) {
                        return t["offset" + e] ? t["offset" + e] : document.defaultView.getComputedStyle(t).getPropertyValue(e)
                    },
                    i = this.width = e(t.canvas, "Width"),
                    s = this.height = e(t.canvas, "Height");
                t.canvas.width = i, t.canvas.height = s;
                var i = this.width = t.canvas.width,
                    s = this.height = t.canvas.height;
                return this.aspectRatio = this.width / this.height, n.retinaScale(this), this
            };
        i.defaults = {
            global: {
                animation: !0,
                animationSteps: 60,
                animationEasing: "easeOutQuart",
                showScale: !0,
                scaleOverride: !1,
                scaleSteps: null,
                scaleStepWidth: null,
                scaleStartValue: null,
                scaleLineColor: "rgba(0,0,0,.1)",
                scaleLineWidth: 1,
                scaleShowLabels: !0,
                scaleLabel: "<%=value%>",
                scaleIntegersOnly: !0,
                scaleBeginAtZero: !1,
                scaleFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
                scaleFontSize: 12,
                scaleFontStyle: "normal",
                scaleFontColor: "#666",
                responsive: !1,
                maintainAspectRatio: !0,
                showTooltips: !0,
                customTooltips: !1,
                tooltipEvents: ["mousemove", "touchstart", "touchmove", "mouseout"],
                tooltipFillColor: "rgba(0,0,0,0.8)",
                tooltipFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
                tooltipFontSize: 14,
                tooltipFontStyle: "normal",
                tooltipFontColor: "#fff",
                tooltipTitleFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
                tooltipTitleFontSize: 14,
                tooltipTitleFontStyle: "bold",
                tooltipTitleFontColor: "#fff",
                tooltipYPadding: 6,
                tooltipXPadding: 6,
                tooltipCaretSize: 8,
                tooltipCornerRadius: 6,
                tooltipXOffset: 10,
                tooltipTemplate: "<%if (label){%><%=label%>: <%}%><%= value %>",
                multiTooltipTemplate: "<%= value %>",
                multiTooltipKeyBackground: "#fff",
                onAnimationProgress: function() {},
                onAnimationComplete: function() {}
            }
        }, i.types = {};
        var n = i.helpers = {},
            s = n.each = function(t, e, i) {
                var n = Array.prototype.slice.call(arguments, 3);
                if (t)
                    if (t.length === +t.length) {
                        var s;
                        for (s = 0; s < t.length; s++) e.apply(i, [t[s], s].concat(n))
                    } else
                        for (var o in t) e.apply(i, [t[o], o].concat(n))
            },
            o = n.clone = function(t) {
                var e = {};
                return s(t, function(i, n) {
                    t.hasOwnProperty(n) && (e[n] = i)
                }), e
            },
            a = n.extend = function(t) {
                return s(Array.prototype.slice.call(arguments, 1), function(e) {
                    s(e, function(i, n) {
                        e.hasOwnProperty(n) && (t[n] = i)
                    })
                }), t
            },
            r = n.merge = function() {
                var t = Array.prototype.slice.call(arguments, 0);
                return t.unshift({}), a.apply(null, t)
            },
            l = n.indexOf = function(t, e) {
                if (Array.prototype.indexOf) return t.indexOf(e);
                for (var i = 0; i < t.length; i++)
                    if (t[i] === e) return i;
                return -1
            },
            c = (n.where = function(t, e) {
                var i = [];
                return n.each(t, function(t) {
                    e(t) && i.push(t)
                }), i
            }, n.findNextWhere = function(t, e, i) {
                i || (i = -1);
                for (var n = i + 1; n < t.length; n++) {
                    var s = t[n];
                    if (e(s)) return s
                }
            }, n.findPreviousWhere = function(t, e, i) {
                i || (i = t.length);
                for (var n = i - 1; n >= 0; n--) {
                    var s = t[n];
                    if (e(s)) return s
                }
            }, n.inherits = function(t) {
                var e = this,
                    i = t && t.hasOwnProperty("constructor") ? t.constructor : function() {
                        return e.apply(this, arguments)
                    },
                    n = function() {
                        this.constructor = i
                    };
                return n.prototype = e.prototype, i.prototype = new n, i.extend = c, t && a(i.prototype, t), i.__super__ = e.prototype, i
            }),
            h = n.noop = function() {},
            d = n.uid = function() {
                var t = 0;
                return function() {
                    return "chart-" + t++
                }
            }(),
            u = n.warn = function(t) {
                window.console && "function" == typeof window.console.warn && console.warn(t)
            },
            f = n.amd = "function" == typeof define && define.amd,
            p = n.isNumber = function(t) {
                return !isNaN(parseFloat(t)) && isFinite(t)
            },
            m = n.max = function(t) {
                return Math.max.apply(Math, t)
            },
            g = n.min = function(t) {
                return Math.min.apply(Math, t)
            },
            v = (n.cap = function(t, e, i) {
                if (p(e)) {
                    if (t > e) return e
                } else if (p(i) && i > t) return i;
                return t
            }, n.getDecimalPlaces = function(t) {
                return t % 1 !== 0 && p(t) ? t.toString().split(".")[1].length : 0
            }),
            y = n.radians = function(t) {
                return t * (Math.PI / 180)
            },
            b = (n.getAngleFromPoint = function(t, e) {
                var i = e.x - t.x,
                    n = e.y - t.y,
                    s = Math.sqrt(i * i + n * n),
                    o = 2 * Math.PI + Math.atan2(n, i);
                return 0 > i && 0 > n && (o += 2 * Math.PI), {
                    angle: o,
                    distance: s
                }
            }, n.aliasPixel = function(t) {
                return t % 2 === 0 ? 0 : .5
            }),
            x = (n.splineCurve = function(t, e, i, n) {
                var s = Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2)),
                    o = Math.sqrt(Math.pow(i.x - e.x, 2) + Math.pow(i.y - e.y, 2)),
                    a = n * s / (s + o),
                    r = n * o / (s + o);
                return {
                    inner: {
                        x: e.x - a * (i.x - t.x),
                        y: e.y - a * (i.y - t.y)
                    },
                    outer: {
                        x: e.x + r * (i.x - t.x),
                        y: e.y + r * (i.y - t.y)
                    }
                }
            }, n.calculateOrderOfMagnitude = function(t) {
                return Math.floor(Math.log(t) / Math.LN10)
            }),
            k = (n.calculateScaleRange = function(t, e, i, n, s) {
                var o = 2,
                    a = Math.floor(e / (1.5 * i)),
                    r = o >= a,
                    l = m(t),
                    c = g(t);
                l === c && (l += .5, c >= .5 && !n ? c -= .5 : l += .5);
                for (var h = Math.abs(l - c), d = x(h), u = Math.ceil(l / (1 * Math.pow(10, d))) * Math.pow(10, d), f = n ? 0 : Math.floor(c / (1 * Math.pow(10, d))) * Math.pow(10, d), p = u - f, v = Math.pow(10, d), y = Math.round(p / v);
                    (y > a || a > 2 * y) && !r;)
                    if (y > a) v *= 2, y = Math.round(p / v), y % 1 !== 0 && (r = !0);
                    else if (s && d >= 0) {
                    if (v / 2 % 1 !== 0) break;
                    v /= 2, y = Math.round(p / v)
                } else v /= 2, y = Math.round(p / v);
                return r && (y = o, v = p / y), {
                    steps: y,
                    stepValue: v,
                    min: f,
                    max: f + y * v
                }
            }, n.template = function(t, e) {
                function i(t, e) {
                    var i = /\W/.test(t) ? new Function("obj", "var p=[],print=function(){p.push.apply(p,arguments);};with(obj){p.push('" + t.replace(/[\r\t\n]/g, " ").split("<%").join("    ").replace(/((^|%>)[^\t]*)'/g, "$1\r").replace(/\t=(.*?)%>/g, "',$1,'").split("   ").join("');").split("%>").join("p.push('").split("\r").join("\\'") + "');}return p.join('');") : n[t] = n[t];
                    return e ? i(e) : i
                }
                if (t instanceof Function) return t(e);
                var n = {};
                return i(t, e)
            }),
            _ = (n.generateLabels = function(t, e, i, n) {
                var o = new Array(e);
                return labelTemplateString && s(o, function(e, s) {
                    o[s] = k(t, {
                        value: i + n * (s + 1)
                    })
                }), o
            }, n.easingEffects = {
                linear: function(t) {
                    return t
                },
                easeInQuad: function(t) {
                    return t * t
                },
                easeOutQuad: function(t) {
                    return -1 * t * (t - 2)
                },
                easeInOutQuad: function(t) {
                    return (t /= .5) < 1 ? .5 * t * t : -.5 * (--t * (t - 2) - 1)
                },
                easeInCubic: function(t) {
                    return t * t * t
                },
                easeOutCubic: function(t) {
                    return 1 * ((t = t / 1 - 1) * t * t + 1)
                },
                easeInOutCubic: function(t) {
                    return (t /= .5) < 1 ? .5 * t * t * t : .5 * ((t -= 2) * t * t + 2)
                },
                easeInQuart: function(t) {
                    return t * t * t * t
                },
                easeOutQuart: function(t) {
                    return -1 * ((t = t / 1 - 1) * t * t * t - 1)
                },
                easeInOutQuart: function(t) {
                    return (t /= .5) < 1 ? .5 * t * t * t * t : -.5 * ((t -= 2) * t * t * t - 2)
                },
                easeInQuint: function(t) {
                    return 1 * (t /= 1) * t * t * t * t
                },
                easeOutQuint: function(t) {
                    return 1 * ((t = t / 1 - 1) * t * t * t * t + 1)
                },
                easeInOutQuint: function(t) {
                    return (t /= .5) < 1 ? .5 * t * t * t * t * t : .5 * ((t -= 2) * t * t * t * t + 2)
                },
                easeInSine: function(t) {
                    return -1 * Math.cos(t / 1 * (Math.PI / 2)) + 1
                },
                easeOutSine: function(t) {
                    return 1 * Math.sin(t / 1 * (Math.PI / 2))
                },
                easeInOutSine: function(t) {
                    return -.5 * (Math.cos(Math.PI * t / 1) - 1)
                },
                easeInExpo: function(t) {
                    return 0 === t ? 1 : 1 * Math.pow(2, 10 * (t / 1 - 1))
                },
                easeOutExpo: function(t) {
                    return 1 === t ? 1 : 1 * (-Math.pow(2, -10 * t / 1) + 1)
                },
                easeInOutExpo: function(t) {
                    return 0 === t ? 0 : 1 === t ? 1 : (t /= .5) < 1 ? .5 * Math.pow(2, 10 * (t - 1)) : .5 * (-Math.pow(2, -10 * --t) + 2)
                },
                easeInCirc: function(t) {
                    return t >= 1 ? t : -1 * (Math.sqrt(1 - (t /= 1) * t) - 1)
                },
                easeOutCirc: function(t) {
                    return 1 * Math.sqrt(1 - (t = t / 1 - 1) * t)
                },
                easeInOutCirc: function(t) {
                    return (t /= .5) < 1 ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1)
                },
                easeInElastic: function(t) {
                    var e = 1.70158,
                        i = 0,
                        n = 1;
                    return 0 === t ? 0 : 1 == (t /= 1) ? 1 : (i || (i = .3), n < Math.abs(1) ? (n = 1, e = i / 4) : e = i / (2 * Math.PI) * Math.asin(1 / n), -(n * Math.pow(2, 10 * (t -= 1)) * Math.sin(2 * (1 * t - e) * Math.PI / i)))
                },
                easeOutElastic: function(t) {
                    var e = 1.70158,
                        i = 0,
                        n = 1;
                    return 0 === t ? 0 : 1 == (t /= 1) ? 1 : (i || (i = .3), n < Math.abs(1) ? (n = 1, e = i / 4) : e = i / (2 * Math.PI) * Math.asin(1 / n), n * Math.pow(2, -10 * t) * Math.sin(2 * (1 * t - e) * Math.PI / i) + 1)
                },
                easeInOutElastic: function(t) {
                    var e = 1.70158,
                        i = 0,
                        n = 1;
                    return 0 === t ? 0 : 2 == (t /= .5) ? 1 : (i || (i = .3 * 1.5), n < Math.abs(1) ? (n = 1, e = i / 4) : e = i / (2 * Math.PI) * Math.asin(1 / n), 1 > t ? -.5 * n * Math.pow(2, 10 * (t -= 1)) * Math.sin(2 * (1 * t - e) * Math.PI / i) : n * Math.pow(2, -10 * (t -= 1)) * Math.sin(2 * (1 * t - e) * Math.PI / i) * .5 + 1)
                },
                easeInBack: function(t) {
                    var e = 1.70158;
                    return 1 * (t /= 1) * t * ((e + 1) * t - e)
                },
                easeOutBack: function(t) {
                    var e = 1.70158;
                    return 1 * ((t = t / 1 - 1) * t * ((e + 1) * t + e) + 1)
                },
                easeInOutBack: function(t) {
                    var e = 1.70158;
                    return (t /= .5) < 1 ? .5 * t * t * (((e *= 1.525) + 1) * t - e) : .5 * ((t -= 2) * t * (((e *= 1.525) + 1) * t + e) + 2)
                },
                easeInBounce: function(t) {
                    return 1 - _.easeOutBounce(1 - t)
                },
                easeOutBounce: function(t) {
                    return (t /= 1) < 1 / 2.75 ? 7.5625 * t * t : 2 / 2.75 > t ? 1 * (7.5625 * (t -= 1.5 / 2.75) * t + .75) : 2.5 / 2.75 > t ? 1 * (7.5625 * (t -= 2.25 / 2.75) * t + .9375) : 1 * (7.5625 * (t -= 2.625 / 2.75) * t + .984375)
                },
                easeInOutBounce: function(t) {
                    return .5 > t ? .5 * _.easeInBounce(2 * t) : .5 * _.easeOutBounce(2 * t - 1) + .5
                }
            }),
            w = n.requestAnimFrame = function() {
                return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(t) {
                    return window.setTimeout(t, 1e3 / 60)
                }
            }(),
            C = n.cancelAnimFrame = function() {
                return window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || window.oCancelAnimationFrame || window.msCancelAnimationFrame || function(t) {
                    return window.clearTimeout(t, 1e3 / 60)
                }
            }(),
            T = (n.animationLoop = function(t, e, i, n, s, o) {
                var a = 0,
                    r = _[i] || _.linear,
                    l = function() {
                        a++;
                        var i = a / e,
                            c = r(i);
                        t.call(o, c, i, a), n.call(o, c, i), e > a ? o.animationFrame = w(l) : s.apply(o)
                    };
                w(l)
            }, n.getRelativePosition = function(t) {
                var e, i, n = t.originalEvent || t,
                    s = t.currentTarget || t.srcElement,
                    o = s.getBoundingClientRect();
                return n.touches ? (e = n.touches[0].clientX - o.left, i = n.touches[0].clientY - o.top) : (e = n.clientX - o.left, i = n.clientY - o.top), {
                    x: e,
                    y: i
                }
            }, n.addEvent = function(t, e, i) {
                t.addEventListener ? t.addEventListener(e, i) : t.attachEvent ? t.attachEvent("on" + e, i) : t["on" + e] = i
            }),
            S = n.removeEvent = function(t, e, i) {
                t.removeEventListener ? t.removeEventListener(e, i, !1) : t.detachEvent ? t.detachEvent("on" + e, i) : t["on" + e] = h
            },
            $ = (n.bindEvents = function(t, e, i) {
                t.events || (t.events = {}), s(e, function(e) {
                    t.events[e] = function() {
                        i.apply(t, arguments)
                    }, T(t.chart.canvas, e, t.events[e])
                })
            }, n.unbindEvents = function(t, e) {
                s(e, function(e, i) {
                    S(t.chart.canvas, i, e)
                })
            }),
            A = n.getMaximumWidth = function(t) {
                var e = t.parentNode;
                return e.clientWidth
            },
            D = n.getMaximumHeight = function(t) {
                var e = t.parentNode;
                return e.clientHeight
            },
            E = (n.getMaximumSize = n.getMaximumWidth, n.retinaScale = function(t) {
                var e = t.ctx,
                    i = t.canvas.width,
                    n = t.canvas.height;
                window.devicePixelRatio && (e.canvas.style.width = i + "px", e.canvas.style.height = n + "px", e.canvas.height = n * window.devicePixelRatio, e.canvas.width = i * window.devicePixelRatio, e.scale(window.devicePixelRatio, window.devicePixelRatio))
            }),
            M = n.clear = function(t) {
                t.ctx.clearRect(0, 0, t.width, t.height)
            },
            P = n.fontString = function(t, e, i) {
                return e + " " + t + "px " + i
            },
            L = n.longestText = function(t, e, i) {
                t.font = e;
                var n = 0;
                return s(i, function(e) {
                    var i = t.measureText(e).width;
                    n = i > n ? i : n
                }), n
            },
            O = n.drawRoundedRectangle = function(t, e, i, n, s, o) {
                t.beginPath(), t.moveTo(e + o, i), t.lineTo(e + n - o, i), t.quadraticCurveTo(e + n, i, e + n, i + o), t.lineTo(e + n, i + s - o), t.quadraticCurveTo(e + n, i + s, e + n - o, i + s), t.lineTo(e + o, i + s), t.quadraticCurveTo(e, i + s, e, i + s - o), t.lineTo(e, i + o), t.quadraticCurveTo(e, i, e + o, i), t.closePath()
            };
        i.instances = {}, i.Type = function(t, e, n) {
            this.options = e, this.chart = n, this.id = d(), i.instances[this.id] = this, e.responsive && this.resize(), this.initialize.call(this, t)
        }, a(i.Type.prototype, {
            initialize: function() {
                return this
            },
            clear: function() {
                return M(this.chart), this
            },
            stop: function() {
                return C(this.animationFrame), this
            },
            resize: function(t) {
                this.stop();
                var e = this.chart.canvas,
                    i = A(this.chart.canvas),
                    n = this.options.maintainAspectRatio ? i / this.chart.aspectRatio : D(this.chart.canvas);
                return e.width = this.chart.width = i, e.height = this.chart.height = n, E(this.chart), "function" == typeof t && t.apply(this, Array.prototype.slice.call(arguments, 1)), this
            },
            reflow: h,
            render: function(t) {
                return t && this.reflow(), this.options.animation && !t ? n.animationLoop(this.draw, this.options.animationSteps, this.options.animationEasing, this.options.onAnimationProgress, this.options.onAnimationComplete, this) : (this.draw(), this.options.onAnimationComplete.call(this)), this
            },
            generateLegend: function() {
                return k(this.options.legendTemplate, this)
            },
            destroy: function() {
                this.clear(), $(this, this.events);
                var t = this.chart.canvas;
                t.width = this.chart.width, t.height = this.chart.height, t.style.removeProperty ? (t.style.removeProperty("width"), t.style.removeProperty("height")) : (t.style.removeAttribute("width"), t.style.removeAttribute("height")), delete i.instances[this.id]
            },
            showTooltip: function(t, e) {
                "undefined" == typeof this.activeElements && (this.activeElements = []);
                var o = function(t) {
                    var e = !1;
                    return t.length !== this.activeElements.length ? e = !0 : (s(t, function(t, i) {
                        t !== this.activeElements[i] && (e = !0)
                    }, this), e)
                }.call(this, t);
                if (o || e) {
                    if (this.activeElements = t, this.draw(), this.options.customTooltips && this.options.customTooltips(!1), t.length > 0)
                        if (this.datasets && this.datasets.length > 1) {
                            for (var a, r, c = this.datasets.length - 1; c >= 0 && (a = this.datasets[c].points || this.datasets[c].bars || this.datasets[c].segments, r = l(a, t[0]), -1 === r); c--);
                            var h = [],
                                d = [],
                                u = function() {
                                    var t, e, i, s, o, a = [],
                                        l = [],
                                        c = [];
                                    return n.each(this.datasets, function(e) {
                                        t = e.points || e.bars || e.segments, t[r] && t[r].hasValue() && a.push(t[r])
                                    }), n.each(a, function(t) {
                                        l.push(t.x), c.push(t.y), h.push(n.template(this.options.multiTooltipTemplate, t)), d.push({
                                            fill: t._saved.fillColor || t.fillColor,
                                            stroke: t._saved.strokeColor || t.strokeColor
                                        })
                                    }, this), o = g(c), i = m(c), s = g(l), e = m(l), {
                                        x: s > this.chart.width / 2 ? s : e,
                                        y: (o + i) / 2
                                    }
                                }.call(this, r);
                            new i.MultiTooltip({
                                x: u.x,
                                y: u.y,
                                xPadding: this.options.tooltipXPadding,
                                yPadding: this.options.tooltipYPadding,
                                xOffset: this.options.tooltipXOffset,
                                fillColor: this.options.tooltipFillColor,
                                textColor: this.options.tooltipFontColor,
                                fontFamily: this.options.tooltipFontFamily,
                                fontStyle: this.options.tooltipFontStyle,
                                fontSize: this.options.tooltipFontSize,
                                titleTextColor: this.options.tooltipTitleFontColor,
                                titleFontFamily: this.options.tooltipTitleFontFamily,
                                titleFontStyle: this.options.tooltipTitleFontStyle,
                                titleFontSize: this.options.tooltipTitleFontSize,
                                cornerRadius: this.options.tooltipCornerRadius,
                                labels: h,
                                legendColors: d,
                                legendColorBackground: this.options.multiTooltipKeyBackground,
                                title: t[0].label,
                                chart: this.chart,
                                ctx: this.chart.ctx,
                                custom: this.options.customTooltips
                            }).draw()
                        } else s(t, function(t) {
                            var e = t.tooltipPosition();
                            new i.Tooltip({
                                x: Math.round(e.x),
                                y: Math.round(e.y),
                                xPadding: this.options.tooltipXPadding,
                                yPadding: this.options.tooltipYPadding,
                                fillColor: this.options.tooltipFillColor,
                                textColor: this.options.tooltipFontColor,
                                fontFamily: this.options.tooltipFontFamily,
                                fontStyle: this.options.tooltipFontStyle,
                                fontSize: this.options.tooltipFontSize,
                                caretHeight: this.options.tooltipCaretSize,
                                cornerRadius: this.options.tooltipCornerRadius,
                                text: k(this.options.tooltipTemplate, t),
                                chart: this.chart,
                                custom: this.options.customTooltips
                            }).draw()
                        }, this);
                    return this
                }
            },
            toBase64Image: function() {
                return this.chart.canvas.toDataURL.apply(this.chart.canvas, arguments)
            }
        }), i.Type.extend = function(t) {
            var e = this,
                n = function() {
                    return e.apply(this, arguments)
                };
            if (n.prototype = o(e.prototype), a(n.prototype, t), n.extend = i.Type.extend, t.name || e.prototype.name) {
                var s = t.name || e.prototype.name,
                    l = i.defaults[e.prototype.name] ? o(i.defaults[e.prototype.name]) : {};
                i.defaults[s] = a(l, t.defaults), i.types[s] = n, i.prototype[s] = function(t, e) {
                    var o = r(i.defaults.global, i.defaults[s], e || {});
                    return new n(t, o, this)
                }
            } else u("Name not provided for this chart, so it hasn't been registered");
            return e
        }, i.Element = function(t) {
            a(this, t), this.initialize.apply(this, arguments), this.save()
        }, a(i.Element.prototype, {
            initialize: function() {},
            restore: function(t) {
                return t ? s(t, function(t) {
                    this[t] = this._saved[t]
                }, this) : a(this, this._saved), this
            },
            save: function() {
                return this._saved = o(this), delete this._saved._saved, this
            },
            update: function(t) {
                return s(t, function(t, e) {
                    this._saved[e] = this[e], this[e] = t
                }, this), this
            },
            transition: function(t, e) {
                return s(t, function(t, i) {
                    this[i] = (t - this._saved[i]) * e + this._saved[i]
                }, this), this
            },
            tooltipPosition: function() {
                return {
                    x: this.x,
                    y: this.y
                }
            },
            hasValue: function() {
                return p(this.value)
            }
        }), i.Element.extend = c, i.Point = i.Element.extend({
            display: !0,
            inRange: function(t, e) {
                var i = this.hitDetectionRadius + this.radius;
                return Math.pow(t - this.x, 2) + Math.pow(e - this.y, 2) < Math.pow(i, 2)
            },
            draw: function() {
                if (this.display) {
                    var t = this.ctx;
                    t.beginPath(), t.arc(this.x, this.y, this.radius, 0, 2 * Math.PI), t.closePath(), t.strokeStyle = this.strokeColor, t.lineWidth = this.strokeWidth, t.fillStyle = this.fillColor, t.fill(), t.stroke()
                }
            }
        }), i.Arc = i.Element.extend({
            inRange: function(t, e) {
                var i = n.getAngleFromPoint(this, {
                        x: t,
                        y: e
                    }),
                    s = i.angle >= this.startAngle && i.angle <= this.endAngle,
                    o = i.distance >= this.innerRadius && i.distance <= this.outerRadius;
                return s && o
            },
            tooltipPosition: function() {
                var t = this.startAngle + (this.endAngle - this.startAngle) / 2,
                    e = (this.outerRadius - this.innerRadius) / 2 + this.innerRadius;
                return {
                    x: this.x + Math.cos(t) * e,
                    y: this.y + Math.sin(t) * e
                }
            },
            draw: function() {
                var t = this.ctx;
                t.beginPath(), t.arc(this.x, this.y, this.outerRadius, this.startAngle, this.endAngle), t.arc(this.x, this.y, this.innerRadius, this.endAngle, this.startAngle, !0), t.closePath(), t.strokeStyle = this.strokeColor, t.lineWidth = this.strokeWidth, t.fillStyle = this.fillColor, t.fill(), t.lineJoin = "bevel", this.showStroke && t.stroke()
            }
        }), i.Rectangle = i.Element.extend({
            draw: function() {
                var t = this.ctx,
                    e = this.width / 2,
                    i = this.x - e,
                    n = this.x + e,
                    s = this.base - (this.base - this.y),
                    o = this.strokeWidth / 2;
                this.showStroke && (i += o, n -= o, s += o), t.beginPath(), t.fillStyle = this.fillColor, t.strokeStyle = this.strokeColor, t.lineWidth = this.strokeWidth, t.moveTo(i, this.base), t.lineTo(i, s), t.lineTo(n, s), t.lineTo(n, this.base), t.fill(), this.showStroke && t.stroke()
            },
            height: function() {
                return this.base - this.y
            },
            inRange: function(t, e) {
                return t >= this.x - this.width / 2 && t <= this.x + this.width / 2 && e >= this.y && e <= this.base
            }
        }), i.Tooltip = i.Element.extend({
            draw: function() {
                var t = this.chart.ctx;
                t.font = P(this.fontSize, this.fontStyle, this.fontFamily), this.xAlign = "center", this.yAlign = "above";
                var e = this.caretPadding = 2,
                    i = t.measureText(this.text).width + 2 * this.xPadding,
                    n = this.fontSize + 2 * this.yPadding,
                    s = n + this.caretHeight + e;
                this.x + i / 2 > this.chart.width ? this.xAlign = "left" : this.x - i / 2 < 0 && (this.xAlign = "right"), this.y - s < 0 && (this.yAlign = "below");
                var o = this.x - i / 2,
                    a = this.y - s;
                if (t.fillStyle = this.fillColor, this.custom) this.custom(this);
                else {
                    switch (this.yAlign) {
                        case "above":
                            t.beginPath(), t.moveTo(this.x, this.y - e), t.lineTo(this.x + this.caretHeight, this.y - (e + this.caretHeight)), t.lineTo(this.x - this.caretHeight, this.y - (e + this.caretHeight)), t.closePath(), t.fill();
                            break;
                        case "below":
                            a = this.y + e + this.caretHeight, t.beginPath(), t.moveTo(this.x, this.y + e), t.lineTo(this.x + this.caretHeight, this.y + e + this.caretHeight), t.lineTo(this.x - this.caretHeight, this.y + e + this.caretHeight), t.closePath(), t.fill()
                    }
                    switch (this.xAlign) {
                        case "left":
                            o = this.x - i + (this.cornerRadius + this.caretHeight);
                            break;
                        case "right":
                            o = this.x - (this.cornerRadius + this.caretHeight)
                    }
                    O(t, o, a, i, n, this.cornerRadius), t.fill(), t.fillStyle = this.textColor, t.textAlign = "center", t.textBaseline = "middle", t.fillText(this.text, o + i / 2, a + n / 2)
                }
            }
        }), i.MultiTooltip = i.Element.extend({
            initialize: function() {
                this.font = P(this.fontSize, this.fontStyle, this.fontFamily), this.titleFont = P(this.titleFontSize, this.titleFontStyle, this.titleFontFamily), this.height = this.labels.length * this.fontSize + (this.labels.length - 1) * (this.fontSize / 2) + 2 * this.yPadding + 1.5 * this.titleFontSize, this.ctx.font = this.titleFont;
                var t = this.ctx.measureText(this.title).width,
                    e = L(this.ctx, this.font, this.labels) + this.fontSize + 3,
                    i = m([e, t]);
                this.width = i + 2 * this.xPadding;
                var n = this.height / 2;
                this.y - n < 0 ? this.y = n : this.y + n > this.chart.height && (this.y = this.chart.height - n), this.x > this.chart.width / 2 ? this.x -= this.xOffset + this.width : this.x += this.xOffset
            },
            getLineHeight: function(t) {
                var e = this.y - this.height / 2 + this.yPadding,
                    i = t - 1;
                return 0 === t ? e + this.titleFontSize / 2 : e + (1.5 * this.fontSize * i + this.fontSize / 2) + 1.5 * this.titleFontSize
            },
            draw: function() {
                if (this.custom) this.custom(this);
                else {
                    O(this.ctx, this.x, this.y - this.height / 2, this.width, this.height, this.cornerRadius);
                    var t = this.ctx;
                    t.fillStyle = this.fillColor, t.fill(), t.closePath(), t.textAlign = "left", t.textBaseline = "middle", t.fillStyle = this.titleTextColor, t.font = this.titleFont, t.fillText(this.title, this.x + this.xPadding, this.getLineHeight(0)), t.font = this.font, n.each(this.labels, function(e, i) {
                        t.fillStyle = this.textColor, t.fillText(e, this.x + this.xPadding + this.fontSize + 3, this.getLineHeight(i + 1)), t.fillStyle = this.legendColorBackground, t.fillRect(this.x + this.xPadding, this.getLineHeight(i + 1) - this.fontSize / 2, this.fontSize, this.fontSize), t.fillStyle = this.legendColors[i].fill, t.fillRect(this.x + this.xPadding, this.getLineHeight(i + 1) - this.fontSize / 2, this.fontSize, this.fontSize)
                    }, this)
                }
            }
        }), i.Scale = i.Element.extend({
            initialize: function() {
                this.fit()
            },
            buildYLabels: function() {
                this.yLabels = [];
                for (var t = v(this.stepValue), e = 0; e <= this.steps; e++) this.yLabels.push(k(this.templateString, {
                    value: (this.min + e * this.stepValue).toFixed(t)
                }));
                this.yLabelWidth = this.display && this.showLabels ? L(this.ctx, this.font, this.yLabels) : 0
            },
            addXLabel: function(t) {
                this.xLabels.push(t), this.valuesCount++, this.fit()
            },
            removeXLabel: function() {
                this.xLabels.shift(), this.valuesCount--, this.fit()
            },
            fit: function() {
                this.startPoint = this.display ? this.fontSize : 0, this.endPoint = this.display ? this.height - 1.5 * this.fontSize - 5 : this.height, this.startPoint += this.padding, this.endPoint -= this.padding;
                var t, e = this.endPoint - this.startPoint;
                for (this.calculateYRange(e), this.buildYLabels(), this.calculateXLabelRotation(); e > this.endPoint - this.startPoint;) e = this.endPoint - this.startPoint, t = this.yLabelWidth, this.calculateYRange(e), this.buildYLabels(), t < this.yLabelWidth && this.calculateXLabelRotation()
            },
            calculateXLabelRotation: function() {
                this.ctx.font = this.font;
                var t, e, i = this.ctx.measureText(this.xLabels[0]).width,
                    n = this.ctx.measureText(this.xLabels[this.xLabels.length - 1]).width;
                if (this.xScalePaddingRight = n / 2 + 3, this.xScalePaddingLeft = i / 2 > this.yLabelWidth + 10 ? i / 2 : this.yLabelWidth + 10, this.xLabelRotation = 0, this.display) {
                    var s, o = L(this.ctx, this.font, this.xLabels);
                    this.xLabelWidth = o;
                    for (var a = Math.floor(this.calculateX(1) - this.calculateX(0)) - 6; this.xLabelWidth > a && 0 === this.xLabelRotation || this.xLabelWidth > a && this.xLabelRotation <= 90 && this.xLabelRotation > 0;) s = Math.cos(y(this.xLabelRotation)), t = s * i, e = s * n, t + this.fontSize / 2 > this.yLabelWidth + 8 && (this.xScalePaddingLeft = t + this.fontSize / 2), this.xScalePaddingRight = this.fontSize / 2, this.xLabelRotation++, this.xLabelWidth = s * o;
                    this.xLabelRotation > 0 && (this.endPoint -= Math.sin(y(this.xLabelRotation)) * o + 3)
                } else this.xLabelWidth = 0, this.xScalePaddingRight = this.padding, this.xScalePaddingLeft = this.padding
            },
            calculateYRange: h,
            drawingArea: function() {
                return this.startPoint - this.endPoint
            },
            calculateY: function(t) {
                var e = this.drawingArea() / (this.min - this.max);
                return this.endPoint - e * (t - this.min)
            },
            calculateX: function(t) {
                var e = (this.xLabelRotation > 0, this.width - (this.xScalePaddingLeft + this.xScalePaddingRight)),
                    i = e / Math.max(this.valuesCount - (this.offsetGridLines ? 0 : 1), 1),
                    n = i * t + this.xScalePaddingLeft;
                return this.offsetGridLines && (n += i / 2), Math.round(n)
            },
            update: function(t) {
                n.extend(this, t), this.fit()
            },
            draw: function() {
                var t = this.ctx,
                    e = (this.endPoint - this.startPoint) / this.steps,
                    i = Math.round(this.xScalePaddingLeft);
                this.display && (t.fillStyle = this.textColor, t.font = this.font, s(this.yLabels, function(s, o) {
                    var a = this.endPoint - e * o,
                        r = Math.round(a),
                        l = this.showHorizontalLines;
                    t.textAlign = "right", t.textBaseline = "middle", this.showLabels && t.fillText(s, i - 10, a), 0 !== o || l || (l = !0), l && t.beginPath(), o > 0 ? (t.lineWidth = this.gridLineWidth, t.strokeStyle = this.gridLineColor) : (t.lineWidth = this.lineWidth, t.strokeStyle = this.lineColor), r += n.aliasPixel(t.lineWidth), l && (t.moveTo(i, r), t.lineTo(this.width, r), t.stroke(), t.closePath()), t.lineWidth = this.lineWidth, t.strokeStyle = this.lineColor, t.beginPath(), t.moveTo(i - 5, r), t.lineTo(i, r), t.stroke(), t.closePath()
                }, this), s(this.xLabels, function(e, i) {
                    var n = this.calculateX(i) + b(this.lineWidth),
                        s = this.calculateX(i - (this.offsetGridLines ? .5 : 0)) + b(this.lineWidth),
                        o = this.xLabelRotation > 0,
                        a = this.showVerticalLines;
                    0 !== i || a || (a = !0), a && t.beginPath(), i > 0 ? (t.lineWidth = this.gridLineWidth, t.strokeStyle = this.gridLineColor) : (t.lineWidth = this.lineWidth, t.strokeStyle = this.lineColor), a && (t.moveTo(s, this.endPoint), t.lineTo(s, this.startPoint - 3), t.stroke(), t.closePath()), t.lineWidth = this.lineWidth, t.strokeStyle = this.lineColor, t.beginPath(), t.moveTo(s, this.endPoint), t.lineTo(s, this.endPoint + 5), t.stroke(), t.closePath(), t.save(), t.translate(n, o ? this.endPoint + 12 : this.endPoint + 8), t.rotate(-1 * y(this.xLabelRotation)), t.font = this.font, t.textAlign = o ? "right" : "center", t.textBaseline = o ? "middle" : "top", t.fillText(e, 0, 0), t.restore()
                }, this))
            }
        }), i.RadialScale = i.Element.extend({
            initialize: function() {
                this.size = g([this.height, this.width]), this.drawingArea = this.display ? this.size / 2 - (this.fontSize / 2 + this.backdropPaddingY) : this.size / 2
            },
            calculateCenterOffset: function(t) {
                var e = this.drawingArea / (this.max - this.min);
                return (t - this.min) * e
            },
            update: function() {
                this.lineArc ? this.drawingArea = this.display ? this.size / 2 - (this.fontSize / 2 + this.backdropPaddingY) : this.size / 2 : this.setScaleSize(), this.buildYLabels()
            },
            buildYLabels: function() {
                this.yLabels = [];
                for (var t = v(this.stepValue), e = 0; e <= this.steps; e++) this.yLabels.push(k(this.templateString, {
                    value: (this.min + e * this.stepValue).toFixed(t)
                }))
            },
            getCircumference: function() {
                return 2 * Math.PI / this.valuesCount
            },
            setScaleSize: function() {
                var t, e, i, n, s, o, a, r, l, c, h, d, u = g([this.height / 2 - this.pointLabelFontSize - 5, this.width / 2]),
                    f = this.width,
                    m = 0;
                for (this.ctx.font = P(this.pointLabelFontSize, this.pointLabelFontStyle, this.pointLabelFontFamily), e = 0; e < this.valuesCount; e++) t = this.getPointPosition(e, u), i = this.ctx.measureText(k(this.templateString, {
                    value: this.labels[e]
                })).width + 5, 0 === e || e === this.valuesCount / 2 ? (n = i / 2, t.x + n > f && (f = t.x + n, s = e), t.x - n < m && (m = t.x - n, a = e)) : e < this.valuesCount / 2 ? t.x + i > f && (f = t.x + i, s = e) : e > this.valuesCount / 2 && t.x - i < m && (m = t.x - i, a = e);
                l = m, c = Math.ceil(f - this.width), o = this.getIndexAngle(s), r = this.getIndexAngle(a), h = c / Math.sin(o + Math.PI / 2), d = l / Math.sin(r + Math.PI / 2), h = p(h) ? h : 0, d = p(d) ? d : 0, this.drawingArea = u - (d + h) / 2, this.setCenterPoint(d, h)
            },
            setCenterPoint: function(t, e) {
                var i = this.width - e - this.drawingArea,
                    n = t + this.drawingArea;
                this.xCenter = (n + i) / 2, this.yCenter = this.height / 2
            },
            getIndexAngle: function(t) {
                var e = 2 * Math.PI / this.valuesCount;
                return t * e - Math.PI / 2
            },
            getPointPosition: function(t, e) {
                var i = this.getIndexAngle(t);
                return {
                    x: Math.cos(i) * e + this.xCenter,
                    y: Math.sin(i) * e + this.yCenter
                }
            },
            draw: function() {
                if (this.display) {
                    var t = this.ctx;
                    if (s(this.yLabels, function(e, i) {
                            if (i > 0) {
                                var n, s = i * (this.drawingArea / this.steps),
                                    o = this.yCenter - s;
                                if (this.lineWidth > 0)
                                    if (t.strokeStyle = this.lineColor, t.lineWidth = this.lineWidth, this.lineArc) t.beginPath(), t.arc(this.xCenter, this.yCenter, s, 0, 2 * Math.PI), t.closePath(), t.stroke();
                                    else {
                                        t.beginPath();
                                        for (var a = 0; a < this.valuesCount; a++) n = this.getPointPosition(a, this.calculateCenterOffset(this.min + i * this.stepValue)), 0 === a ? t.moveTo(n.x, n.y) : t.lineTo(n.x, n.y);
                                        t.closePath(), t.stroke()
                                    } if (this.showLabels) {
                                    if (t.font = P(this.fontSize, this.fontStyle, this.fontFamily), this.showLabelBackdrop) {
                                        var r = t.measureText(e).width;
                                        t.fillStyle = this.backdropColor, t.fillRect(this.xCenter - r / 2 - this.backdropPaddingX, o - this.fontSize / 2 - this.backdropPaddingY, r + 2 * this.backdropPaddingX, this.fontSize + 2 * this.backdropPaddingY)
                                    }
                                    t.textAlign = "center", t.textBaseline = "middle", t.fillStyle = this.fontColor, t.fillText(e, this.xCenter, o)
                                }
                            }
                        }, this), !this.lineArc) {
                        t.lineWidth = this.angleLineWidth, t.strokeStyle = this.angleLineColor;
                        for (var e = this.valuesCount - 1; e >= 0; e--) {
                            if (this.angleLineWidth > 0) {
                                var i = this.getPointPosition(e, this.calculateCenterOffset(this.max));
                                t.beginPath(), t.moveTo(this.xCenter, this.yCenter), t.lineTo(i.x, i.y), t.stroke(), t.closePath()
                            }
                            var n = this.getPointPosition(e, this.calculateCenterOffset(this.max) + 5);
                            t.font = P(this.pointLabelFontSize, this.pointLabelFontStyle, this.pointLabelFontFamily), t.fillStyle = this.pointLabelFontColor;
                            var o = this.labels.length,
                                a = this.labels.length / 2,
                                r = a / 2,
                                l = r > e || e > o - r,
                                c = e === r || e === o - r;
                            0 === e ? t.textAlign = "center" : e === a ? t.textAlign = "center" : a > e ? t.textAlign = "left" : t.textAlign = "right", c ? t.textBaseline = "middle" : l ? t.textBaseline = "bottom" : t.textBaseline = "top", t.fillText(this.labels[e], n.x, n.y)
                        }
                    }
                }
            }
        }), n.addEvent(window, "resize", function() {
            var t;
            return function() {
                clearTimeout(t), t = setTimeout(function() {
                    s(i.instances, function(t) {
                        t.options.responsive && t.resize(t.render, !0)
                    })
                }, 50)
            }
        }()), f ? define(function() {
            return i
        }) : "object" == typeof module && module.exports && (module.exports = i), t.Chart = i, i.noConflict = function() {
            return t.Chart = e, i
        }
    }.call(this),
    function() {
        "use strict";
        var t = this,
            e = t.Chart,
            i = e.helpers,
            n = {
                scaleBeginAtZero: !0,
                scaleShowGridLines: !0,
                scaleGridLineColor: "rgba(0,0,0,.05)",
                scaleGridLineWidth: 1,
                scaleShowHorizontalLines: !0,
                scaleShowVerticalLines: !0,
                barShowStroke: !0,
                barStrokeWidth: 2,
                barValueSpacing: 5,
                barDatasetSpacing: 1,
                legendTemplate: '<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<datasets.length; i++){%><li><span style="background-color:<%=datasets[i].fillColor%>"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>'
            };
        e.Type.extend({
            name: "Bar",
            defaults: n,
            initialize: function(t) {
                var n = this.options;
                this.ScaleClass = e.Scale.extend({
                    offsetGridLines: !0,
                    calculateBarX: function(t, e, i) {
                        var s = this.calculateBaseWidth(),
                            o = this.calculateX(i) - s / 2,
                            a = this.calculateBarWidth(t);
                        return o + a * e + e * n.barDatasetSpacing + a / 2
                    },
                    calculateBaseWidth: function() {
                        return this.calculateX(1) - this.calculateX(0) - 2 * n.barValueSpacing
                    },
                    calculateBarWidth: function(t) {
                        var e = this.calculateBaseWidth() - (t - 1) * n.barDatasetSpacing;
                        return e / t
                    }
                }), this.datasets = [], this.options.showTooltips && i.bindEvents(this, this.options.tooltipEvents, function(t) {
                    var e = "mouseout" !== t.type ? this.getBarsAtEvent(t) : [];
                    this.eachBars(function(t) {
                        t.restore(["fillColor", "strokeColor"])
                    }), i.each(e, function(t) {
                        t.fillColor = t.highlightFill, t.strokeColor = t.highlightStroke
                    }), this.showTooltip(e)
                }), this.BarClass = e.Rectangle.extend({
                    strokeWidth: this.options.barStrokeWidth,
                    showStroke: this.options.barShowStroke,
                    ctx: this.chart.ctx
                }), i.each(t.datasets, function(e) {
                    var n = {
                        label: e.label || null,
                        fillColor: e.fillColor,
                        strokeColor: e.strokeColor,
                        bars: []
                    };
                    this.datasets.push(n), i.each(e.data, function(i, s) {
                        n.bars.push(new this.BarClass({
                            value: i,
                            label: t.labels[s],
                            datasetLabel: e.label,
                            strokeColor: e.strokeColor,
                            fillColor: e.fillColor,
                            highlightFill: e.highlightFill || e.fillColor,
                            highlightStroke: e.highlightStroke || e.strokeColor
                        }))
                    }, this)
                }, this), this.buildScale(t.labels), this.BarClass.prototype.base = this.scale.endPoint, this.eachBars(function(t, e, n) {
                    i.extend(t, {
                        width: this.scale.calculateBarWidth(this.datasets.length),
                        x: this.scale.calculateBarX(this.datasets.length, n, e),
                        y: this.scale.endPoint
                    }), t.save()
                }, this), this.render()
            },
            update: function() {
                this.scale.update(), i.each(this.activeElements, function(t) {
                    t.restore(["fillColor", "strokeColor"])
                }), this.eachBars(function(t) {
                    t.save()
                }), this.render()
            },
            eachBars: function(t) {
                i.each(this.datasets, function(e, n) {
                    i.each(e.bars, t, this, n)
                }, this)
            },
            getBarsAtEvent: function(t) {
                for (var e, n = [], s = i.getRelativePosition(t), o = function(t) {
                        n.push(t.bars[e])
                    }, a = 0; a < this.datasets.length; a++)
                    for (e = 0; e < this.datasets[a].bars.length; e++)
                        if (this.datasets[a].bars[e].inRange(s.x, s.y)) return i.each(this.datasets, o), n;
                return n
            },
            buildScale: function(t) {
                var e = this,
                    n = function() {
                        var t = [];
                        return e.eachBars(function(e) {
                            t.push(e.value)
                        }), t
                    },
                    s = {
                        templateString: this.options.scaleLabel,
                        height: this.chart.height,
                        width: this.chart.width,
                        ctx: this.chart.ctx,
                        textColor: this.options.scaleFontColor,
                        fontSize: this.options.scaleFontSize,
                        fontStyle: this.options.scaleFontStyle,
                        fontFamily: this.options.scaleFontFamily,
                        valuesCount: t.length,
                        beginAtZero: this.options.scaleBeginAtZero,
                        integersOnly: this.options.scaleIntegersOnly,
                        calculateYRange: function(t) {
                            var e = i.calculateScaleRange(n(), t, this.fontSize, this.beginAtZero, this.integersOnly);
                            i.extend(this, e)
                        },
                        xLabels: t,
                        font: i.fontString(this.options.scaleFontSize, this.options.scaleFontStyle, this.options.scaleFontFamily),
                        lineWidth: this.options.scaleLineWidth,
                        lineColor: this.options.scaleLineColor,
                        showHorizontalLines: this.options.scaleShowHorizontalLines,
                        showVerticalLines: this.options.scaleShowVerticalLines,
                        gridLineWidth: this.options.scaleShowGridLines ? this.options.scaleGridLineWidth : 0,
                        gridLineColor: this.options.scaleShowGridLines ? this.options.scaleGridLineColor : "rgba(0,0,0,0)",
                        padding: this.options.showScale ? 0 : this.options.barShowStroke ? this.options.barStrokeWidth : 0,
                        showLabels: this.options.scaleShowLabels,
                        display: this.options.showScale
                    };
                this.options.scaleOverride && i.extend(s, {
                    calculateYRange: i.noop,
                    steps: this.options.scaleSteps,
                    stepValue: this.options.scaleStepWidth,
                    min: this.options.scaleStartValue,
                    max: this.options.scaleStartValue + this.options.scaleSteps * this.options.scaleStepWidth
                }), this.scale = new this.ScaleClass(s)
            },
            addData: function(t, e) {
                i.each(t, function(t, i) {
                    this.datasets[i].bars.push(new this.BarClass({
                        value: t,
                        label: e,
                        x: this.scale.calculateBarX(this.datasets.length, i, this.scale.valuesCount + 1),
                        y: this.scale.endPoint,
                        width: this.scale.calculateBarWidth(this.datasets.length),
                        base: this.scale.endPoint,
                        strokeColor: this.datasets[i].strokeColor,
                        fillColor: this.datasets[i].fillColor
                    }))
                }, this), this.scale.addXLabel(e), this.update()
            },
            removeData: function() {
                this.scale.removeXLabel(), i.each(this.datasets, function(t) {
                    t.bars.shift()
                }, this), this.update()
            },
            reflow: function() {
                i.extend(this.BarClass.prototype, {
                    y: this.scale.endPoint,
                    base: this.scale.endPoint
                });
                var t = i.extend({
                    height: this.chart.height,
                    width: this.chart.width
                });
                this.scale.update(t)
            },
            draw: function(t) {
                var e = t || 1;
                this.clear(), this.chart.ctx, this.scale.draw(e), i.each(this.datasets, function(t, n) {
                    i.each(t.bars, function(t, i) {
                        t.hasValue() && (t.base = this.scale.endPoint, t.transition({
                            x: this.scale.calculateBarX(this.datasets.length, n, i),
                            y: this.scale.calculateY(t.value),
                            width: this.scale.calculateBarWidth(this.datasets.length)
                        }, e).draw())
                    }, this)
                }, this)
            }
        })
    }.call(this),
    function() {
        "use strict";
        var t = this,
            e = t.Chart,
            i = e.helpers,
            n = {
                segmentShowStroke: !0,
                segmentStrokeColor: "#fff",
                segmentStrokeWidth: 2,
                percentageInnerCutout: 50,
                animationSteps: 100,
                animationEasing: "easeOutBounce",
                animateRotate: !0,
                animateScale: !1,
                legendTemplate: '<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<segments.length; i++){%><li><span style="background-color:<%=segments[i].fillColor%>"></span><%if(segments[i].label){%><%=segments[i].label%><%}%></li><%}%></ul>'
            };
        e.Type.extend({
            name: "Doughnut",
            defaults: n,
            initialize: function(t) {
                this.segments = [], this.outerRadius = (i.min([this.chart.width, this.chart.height]) - this.options.segmentStrokeWidth / 2) / 2, this.SegmentArc = e.Arc.extend({
                    ctx: this.chart.ctx,
                    x: this.chart.width / 2,
                    y: this.chart.height / 2
                }), this.options.showTooltips && i.bindEvents(this, this.options.tooltipEvents, function(t) {
                    var e = "mouseout" !== t.type ? this.getSegmentsAtEvent(t) : [];
                    i.each(this.segments, function(t) {
                        t.restore(["fillColor"])
                    }), i.each(e, function(t) {
                        t.fillColor = t.highlightColor
                    }), this.showTooltip(e)
                }), this.calculateTotal(t), i.each(t, function(t, e) {
                    this.addData(t, e, !0)
                }, this), this.render()
            },
            getSegmentsAtEvent: function(t) {
                var e = [],
                    n = i.getRelativePosition(t);
                return i.each(this.segments, function(t) {
                    t.inRange(n.x, n.y) && e.push(t)
                }, this), e
            },
            addData: function(t, e, i) {
                var n = e || this.segments.length;
                this.segments.splice(n, 0, new this.SegmentArc({
                    value: t.value,
                    outerRadius: this.options.animateScale ? 0 : this.outerRadius,
                    innerRadius: this.options.animateScale ? 0 : this.outerRadius / 100 * this.options.percentageInnerCutout,
                    fillColor: t.color,
                    highlightColor: t.highlight || t.color,
                    showStroke: this.options.segmentShowStroke,
                    strokeWidth: this.options.segmentStrokeWidth,
                    strokeColor: this.options.segmentStrokeColor,
                    startAngle: 1.5 * Math.PI,
                    circumference: this.options.animateRotate ? 0 : this.calculateCircumference(t.value),
                    label: t.label
                })), i || (this.reflow(), this.update())
            },
            calculateCircumference: function(t) {
                return 2 * Math.PI * (Math.abs(t) / this.total)
            },
            calculateTotal: function(t) {
                this.total = 0, i.each(t, function(t) {
                    this.total += Math.abs(t.value)
                }, this)
            },
            update: function() {
                this.calculateTotal(this.segments), i.each(this.activeElements, function(t) {
                    t.restore(["fillColor"])
                }), i.each(this.segments, function(t) {
                    t.save()
                }), this.render()
            },
            removeData: function(t) {
                var e = i.isNumber(t) ? t : this.segments.length - 1;
                this.segments.splice(e, 1), this.reflow(), this.update()
            },
            reflow: function() {
                i.extend(this.SegmentArc.prototype, {
                    x: this.chart.width / 2,
                    y: this.chart.height / 2
                }), this.outerRadius = (i.min([this.chart.width, this.chart.height]) - this.options.segmentStrokeWidth / 2) / 2, i.each(this.segments, function(t) {
                    t.update({
                        outerRadius: this.outerRadius,
                        innerRadius: this.outerRadius / 100 * this.options.percentageInnerCutout
                    })
                }, this)
            },
            draw: function(t) {
                var e = t ? t : 1;
                this.clear(), i.each(this.segments, function(t, i) {
                    t.transition({
                        circumference: this.calculateCircumference(t.value),
                        outerRadius: this.outerRadius,
                        innerRadius: this.outerRadius / 100 * this.options.percentageInnerCutout
                    }, e), t.endAngle = t.startAngle + t.circumference, t.draw(), 0 === i && (t.startAngle = 1.5 * Math.PI), i < this.segments.length - 1 && (this.segments[i + 1].startAngle = t.endAngle)
                }, this)
            }
        }), e.types.Doughnut.extend({
            name: "Pie",
            defaults: i.merge(n, {
                percentageInnerCutout: 0
            })
        })
    }.call(this),
    function() {
        "use strict";
        var t = this,
            e = t.Chart,
            i = e.helpers,
            n = {
                scaleShowGridLines: !0,
                scaleGridLineColor: "rgba(0,0,0,.05)",
                scaleGridLineWidth: 1,
                scaleShowHorizontalLines: !0,
                scaleShowVerticalLines: !0,
                bezierCurve: !0,
                bezierCurveTension: .4,
                pointDot: !0,
                pointDotRadius: 4,
                pointDotStrokeWidth: 1,
                pointHitDetectionRadius: 20,
                datasetStroke: !0,
                datasetStrokeWidth: 2,
                datasetFill: !0,
                legendTemplate: '<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<datasets.length; i++){%><li><span style="background-color:<%=datasets[i].strokeColor%>"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>'
            };
        e.Type.extend({
            name: "Line",
            defaults: n,
            initialize: function(t) {
                this.PointClass = e.Point.extend({
                    strokeWidth: this.options.pointDotStrokeWidth,
                    radius: this.options.pointDotRadius,
                    display: this.options.pointDot,
                    hitDetectionRadius: this.options.pointHitDetectionRadius,
                    ctx: this.chart.ctx,
                    inRange: function(t) {
                        return Math.pow(t - this.x, 2) < Math.pow(this.radius + this.hitDetectionRadius, 2)
                    }
                }), this.datasets = [], this.options.showTooltips && i.bindEvents(this, this.options.tooltipEvents, function(t) {
                    var e = "mouseout" !== t.type ? this.getPointsAtEvent(t) : [];
                    this.eachPoints(function(t) {
                        t.restore(["fillColor", "strokeColor"])
                    }), i.each(e, function(t) {
                        t.fillColor = t.highlightFill, t.strokeColor = t.highlightStroke
                    }), this.showTooltip(e)
                }), i.each(t.datasets, function(e) {
                    var n = {
                        label: e.label || null,
                        fillColor: e.fillColor,
                        strokeColor: e.strokeColor,
                        pointColor: e.pointColor,
                        pointStrokeColor: e.pointStrokeColor,
                        points: []
                    };
                    this.datasets.push(n), i.each(e.data, function(i, s) {
                        n.points.push(new this.PointClass({
                            value: i,
                            label: t.labels[s],
                            datasetLabel: e.label,
                            strokeColor: e.pointStrokeColor,
                            fillColor: e.pointColor,
                            highlightFill: e.pointHighlightFill || e.pointColor,
                            highlightStroke: e.pointHighlightStroke || e.pointStrokeColor
                        }))
                    }, this), this.buildScale(t.labels), this.eachPoints(function(t, e) {
                        i.extend(t, {
                            x: this.scale.calculateX(e),
                            y: this.scale.endPoint
                        }), t.save()
                    }, this)
                }, this), this.render()
            },
            update: function() {
                this.scale.update(), i.each(this.activeElements, function(t) {
                    t.restore(["fillColor", "strokeColor"])
                }), this.eachPoints(function(t) {
                    t.save()
                }), this.render()
            },
            eachPoints: function(t) {
                i.each(this.datasets, function(e) {
                    i.each(e.points, t, this)
                }, this)
            },
            getPointsAtEvent: function(t) {
                var e = [],
                    n = i.getRelativePosition(t);
                return i.each(this.datasets, function(t) {
                    i.each(t.points, function(t) {
                        t.inRange(n.x, n.y) && e.push(t)
                    })
                }, this), e
            },
            buildScale: function(t) {
                var n = this,
                    s = function() {
                        var t = [];
                        return n.eachPoints(function(e) {
                            t.push(e.value)
                        }), t
                    },
                    o = {
                        templateString: this.options.scaleLabel,
                        height: this.chart.height,
                        width: this.chart.width,
                        ctx: this.chart.ctx,
                        textColor: this.options.scaleFontColor,
                        fontSize: this.options.scaleFontSize,
                        fontStyle: this.options.scaleFontStyle,
                        fontFamily: this.options.scaleFontFamily,
                        valuesCount: t.length,
                        beginAtZero: this.options.scaleBeginAtZero,
                        integersOnly: this.options.scaleIntegersOnly,
                        calculateYRange: function(t) {
                            var e = i.calculateScaleRange(s(), t, this.fontSize, this.beginAtZero, this.integersOnly);
                            i.extend(this, e)
                        },
                        xLabels: t,
                        font: i.fontString(this.options.scaleFontSize, this.options.scaleFontStyle, this.options.scaleFontFamily),
                        lineWidth: this.options.scaleLineWidth,
                        lineColor: this.options.scaleLineColor,
                        showHorizontalLines: this.options.scaleShowHorizontalLines,
                        showVerticalLines: this.options.scaleShowVerticalLines,
                        gridLineWidth: this.options.scaleShowGridLines ? this.options.scaleGridLineWidth : 0,
                        gridLineColor: this.options.scaleShowGridLines ? this.options.scaleGridLineColor : "rgba(0,0,0,0)",
                        padding: this.options.showScale ? 0 : this.options.pointDotRadius + this.options.pointDotStrokeWidth,
                        showLabels: this.options.scaleShowLabels,
                        display: this.options.showScale
                    };
                this.options.scaleOverride && i.extend(o, {
                    calculateYRange: i.noop,
                    steps: this.options.scaleSteps,
                    stepValue: this.options.scaleStepWidth,
                    min: this.options.scaleStartValue,
                    max: this.options.scaleStartValue + this.options.scaleSteps * this.options.scaleStepWidth
                }), this.scale = new e.Scale(o)
            },
            addData: function(t, e) {
                i.each(t, function(t, i) {
                    this.datasets[i].points.push(new this.PointClass({
                        value: t,
                        label: e,
                        x: this.scale.calculateX(this.scale.valuesCount + 1),
                        y: this.scale.endPoint,
                        strokeColor: this.datasets[i].pointStrokeColor,
                        fillColor: this.datasets[i].pointColor
                    }))
                }, this), this.scale.addXLabel(e), this.update()
            },
            removeData: function() {
                this.scale.removeXLabel(), i.each(this.datasets, function(t) {
                    t.points.shift()
                }, this), this.update()
            },
            reflow: function() {
                var t = i.extend({
                    height: this.chart.height,
                    width: this.chart.width
                });
                this.scale.update(t)
            },
            draw: function(t) {
                var e = t || 1;
                this.clear();
                var n = this.chart.ctx,
                    s = function(t) {
                        return null !== t.value
                    },
                    o = function(t, e, n) {
                        return i.findNextWhere(e, s, n) || t
                    },
                    a = function(t, e, n) {
                        return i.findPreviousWhere(e, s, n) || t
                    };
                this.scale.draw(e), i.each(this.datasets, function(t) {
                    var r = i.where(t.points, s);
                    i.each(t.points, function(t, i) {
                        t.hasValue() && t.transition({
                            y: this.scale.calculateY(t.value),
                            x: this.scale.calculateX(i)
                        }, e)
                    }, this), this.options.bezierCurve && i.each(r, function(t, e) {
                        var n = e > 0 && e < r.length - 1 ? this.options.bezierCurveTension : 0;
                        t.controlPoints = i.splineCurve(a(t, r, e), t, o(t, r, e), n), t.controlPoints.outer.y > this.scale.endPoint ? t.controlPoints.outer.y = this.scale.endPoint : t.controlPoints.outer.y < this.scale.startPoint && (t.controlPoints.outer.y = this.scale.startPoint), t.controlPoints.inner.y > this.scale.endPoint ? t.controlPoints.inner.y = this.scale.endPoint : t.controlPoints.inner.y < this.scale.startPoint && (t.controlPoints.inner.y = this.scale.startPoint)
                    }, this), n.lineWidth = this.options.datasetStrokeWidth, n.strokeStyle = t.strokeColor, n.beginPath(), i.each(r, function(t, e) {
                        if (0 === e) n.moveTo(t.x, t.y);
                        else if (this.options.bezierCurve) {
                            var i = a(t, r, e);
                            n.bezierCurveTo(i.controlPoints.outer.x, i.controlPoints.outer.y, t.controlPoints.inner.x, t.controlPoints.inner.y, t.x, t.y)
                        } else n.lineTo(t.x, t.y)
                    }, this), n.stroke(), this.options.datasetFill && r.length > 0 && (n.lineTo(r[r.length - 1].x, this.scale.endPoint), n.lineTo(r[0].x, this.scale.endPoint), n.fillStyle = t.fillColor, n.closePath(), n.fill()), i.each(r, function(t) {
                        t.draw()
                    })
                }, this)
            }
        })
    }.call(this),
    function() {
        "use strict";
        var t = this,
            e = t.Chart,
            i = e.helpers,
            n = {
                scaleShowLabelBackdrop: !0,
                scaleBackdropColor: "rgba(255,255,255,0.75)",
                scaleBeginAtZero: !0,
                scaleBackdropPaddingY: 2,
                scaleBackdropPaddingX: 2,
                scaleShowLine: !0,
                segmentShowStroke: !0,
                segmentStrokeColor: "#fff",
                segmentStrokeWidth: 2,
                animationSteps: 100,
                animationEasing: "easeOutBounce",
                animateRotate: !0,
                animateScale: !1,
                legendTemplate: '<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<segments.length; i++){%><li><span style="background-color:<%=segments[i].fillColor%>"></span><%if(segments[i].label){%><%=segments[i].label%><%}%></li><%}%></ul>'
            };
        e.Type.extend({
            name: "PolarArea",
            defaults: n,
            initialize: function(t) {
                this.segments = [], this.SegmentArc = e.Arc.extend({
                    showStroke: this.options.segmentShowStroke,
                    strokeWidth: this.options.segmentStrokeWidth,
                    strokeColor: this.options.segmentStrokeColor,
                    ctx: this.chart.ctx,
                    innerRadius: 0,
                    x: this.chart.width / 2,
                    y: this.chart.height / 2
                }), this.scale = new e.RadialScale({
                    display: this.options.showScale,
                    fontStyle: this.options.scaleFontStyle,
                    fontSize: this.options.scaleFontSize,
                    fontFamily: this.options.scaleFontFamily,
                    fontColor: this.options.scaleFontColor,
                    showLabels: this.options.scaleShowLabels,
                    showLabelBackdrop: this.options.scaleShowLabelBackdrop,
                    backdropColor: this.options.scaleBackdropColor,
                    backdropPaddingY: this.options.scaleBackdropPaddingY,
                    backdropPaddingX: this.options.scaleBackdropPaddingX,
                    lineWidth: this.options.scaleShowLine ? this.options.scaleLineWidth : 0,
                    lineColor: this.options.scaleLineColor,
                    lineArc: !0,
                    width: this.chart.width,
                    height: this.chart.height,
                    xCenter: this.chart.width / 2,
                    yCenter: this.chart.height / 2,
                    ctx: this.chart.ctx,
                    templateString: this.options.scaleLabel,
                    valuesCount: t.length
                }), this.updateScaleRange(t), this.scale.update(), i.each(t, function(t, e) {
                    this.addData(t, e, !0)
                }, this), this.options.showTooltips && i.bindEvents(this, this.options.tooltipEvents, function(t) {
                    var e = "mouseout" !== t.type ? this.getSegmentsAtEvent(t) : [];
                    i.each(this.segments, function(t) {
                        t.restore(["fillColor"])
                    }), i.each(e, function(t) {
                        t.fillColor = t.highlightColor
                    }), this.showTooltip(e)
                }), this.render()
            },
            getSegmentsAtEvent: function(t) {
                var e = [],
                    n = i.getRelativePosition(t);
                return i.each(this.segments, function(t) {
                    t.inRange(n.x, n.y) && e.push(t)
                }, this), e
            },
            addData: function(t, e, i) {
                var n = e || this.segments.length;
                this.segments.splice(n, 0, new this.SegmentArc({
                    fillColor: t.color,
                    highlightColor: t.highlight || t.color,
                    label: t.label,
                    value: t.value,
                    outerRadius: this.options.animateScale ? 0 : this.scale.calculateCenterOffset(t.value),
                    circumference: this.options.animateRotate ? 0 : this.scale.getCircumference(),
                    startAngle: 1.5 * Math.PI
                })), i || (this.reflow(), this.update())
            },
            removeData: function(t) {
                var e = i.isNumber(t) ? t : this.segments.length - 1;
                this.segments.splice(e, 1), this.reflow(), this.update()
            },
            calculateTotal: function(t) {
                this.total = 0, i.each(t, function(t) {
                    this.total += t.value
                }, this), this.scale.valuesCount = this.segments.length
            },
            updateScaleRange: function(t) {
                var e = [];
                i.each(t, function(t) {
                    e.push(t.value)
                });
                var n = this.options.scaleOverride ? {
                    steps: this.options.scaleSteps,
                    stepValue: this.options.scaleStepWidth,
                    min: this.options.scaleStartValue,
                    max: this.options.scaleStartValue + this.options.scaleSteps * this.options.scaleStepWidth
                } : i.calculateScaleRange(e, i.min([this.chart.width, this.chart.height]) / 2, this.options.scaleFontSize, this.options.scaleBeginAtZero, this.options.scaleIntegersOnly);
                i.extend(this.scale, n, {
                    size: i.min([this.chart.width, this.chart.height]),
                    xCenter: this.chart.width / 2,
                    yCenter: this.chart.height / 2
                })
            },
            update: function() {
                this.calculateTotal(this.segments), i.each(this.segments, function(t) {
                    t.save()
                }), this.reflow(), this.render()
            },
            reflow: function() {
                i.extend(this.SegmentArc.prototype, {
                    x: this.chart.width / 2,
                    y: this.chart.height / 2
                }), this.updateScaleRange(this.segments), this.scale.update(), i.extend(this.scale, {
                    xCenter: this.chart.width / 2,
                    yCenter: this.chart.height / 2
                }), i.each(this.segments, function(t) {
                    t.update({
                        outerRadius: this.scale.calculateCenterOffset(t.value)
                    })
                }, this)
            },
            draw: function(t) {
                var e = t || 1;
                this.clear(), i.each(this.segments, function(t, i) {
                    t.transition({
                        circumference: this.scale.getCircumference(),
                        outerRadius: this.scale.calculateCenterOffset(t.value)
                    }, e), t.endAngle = t.startAngle + t.circumference, 0 === i && (t.startAngle = 1.5 * Math.PI), i < this.segments.length - 1 && (this.segments[i + 1].startAngle = t.endAngle), t.draw()
                }, this), this.scale.draw()
            }
        })
    }.call(this),
    function() {
        "use strict";
        var t = this,
            e = t.Chart,
            i = e.helpers;
        e.Type.extend({
            name: "Radar",
            defaults: {
                scaleShowLine: !0,
                angleShowLineOut: !0,
                scaleShowLabels: !1,
                scaleBeginAtZero: !0,
                angleLineColor: "rgba(0,0,0,.1)",
                angleLineWidth: 1,
                pointLabelFontFamily: "'Arial'",
                pointLabelFontStyle: "normal",
                pointLabelFontSize: 10,
                pointLabelFontColor: "#666",
                pointDot: !0,
                pointDotRadius: 3,
                pointDotStrokeWidth: 1,
                pointHitDetectionRadius: 20,
                datasetStroke: !0,
                datasetStrokeWidth: 2,
                datasetFill: !0,
                legendTemplate: '<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<datasets.length; i++){%><li><span style="background-color:<%=datasets[i].strokeColor%>"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>'
            },
            initialize: function(t) {
                this.PointClass = e.Point.extend({
                    strokeWidth: this.options.pointDotStrokeWidth,
                    radius: this.options.pointDotRadius,
                    display: this.options.pointDot,
                    hitDetectionRadius: this.options.pointHitDetectionRadius,
                    ctx: this.chart.ctx
                }), this.datasets = [], this.buildScale(t), this.options.showTooltips && i.bindEvents(this, this.options.tooltipEvents, function(t) {
                    var e = "mouseout" !== t.type ? this.getPointsAtEvent(t) : [];
                    this.eachPoints(function(t) {
                        t.restore(["fillColor", "strokeColor"])
                    }), i.each(e, function(t) {
                        t.fillColor = t.highlightFill, t.strokeColor = t.highlightStroke
                    }), this.showTooltip(e)
                }), i.each(t.datasets, function(e) {
                    var n = {
                        label: e.label || null,
                        fillColor: e.fillColor,
                        strokeColor: e.strokeColor,
                        pointColor: e.pointColor,
                        pointStrokeColor: e.pointStrokeColor,
                        points: []
                    };
                    this.datasets.push(n), i.each(e.data, function(i, s) {
                        var o;
                        this.scale.animation || (o = this.scale.getPointPosition(s, this.scale.calculateCenterOffset(i))), n.points.push(new this.PointClass({
                            value: i,
                            label: t.labels[s],
                            datasetLabel: e.label,
                            x: this.options.animation ? this.scale.xCenter : o.x,
                            y: this.options.animation ? this.scale.yCenter : o.y,
                            strokeColor: e.pointStrokeColor,
                            fillColor: e.pointColor,
                            highlightFill: e.pointHighlightFill || e.pointColor,
                            highlightStroke: e.pointHighlightStroke || e.pointStrokeColor
                        }))
                    }, this)
                }, this), this.render()
            },
            eachPoints: function(t) {
                i.each(this.datasets, function(e) {
                    i.each(e.points, t, this)
                }, this)
            },
            getPointsAtEvent: function(t) {
                var e = i.getRelativePosition(t),
                    n = i.getAngleFromPoint({
                        x: this.scale.xCenter,
                        y: this.scale.yCenter
                    }, e),
                    s = 2 * Math.PI / this.scale.valuesCount,
                    o = Math.round((n.angle - 1.5 * Math.PI) / s),
                    a = [];
                return (o >= this.scale.valuesCount || 0 > o) && (o = 0), n.distance <= this.scale.drawingArea && i.each(this.datasets, function(t) {
                    a.push(t.points[o])
                }), a
            },
            buildScale: function(t) {
                this.scale = new e.RadialScale({
                    display: this.options.showScale,
                    fontStyle: this.options.scaleFontStyle,
                    fontSize: this.options.scaleFontSize,
                    fontFamily: this.options.scaleFontFamily,
                    fontColor: this.options.scaleFontColor,
                    showLabels: this.options.scaleShowLabels,
                    showLabelBackdrop: this.options.scaleShowLabelBackdrop,
                    backdropColor: this.options.scaleBackdropColor,
                    backdropPaddingY: this.options.scaleBackdropPaddingY,
                    backdropPaddingX: this.options.scaleBackdropPaddingX,
                    lineWidth: this.options.scaleShowLine ? this.options.scaleLineWidth : 0,
                    lineColor: this.options.scaleLineColor,
                    angleLineColor: this.options.angleLineColor,
                    angleLineWidth: this.options.angleShowLineOut ? this.options.angleLineWidth : 0,
                    pointLabelFontColor: this.options.pointLabelFontColor,
                    pointLabelFontSize: this.options.pointLabelFontSize,
                    pointLabelFontFamily: this.options.pointLabelFontFamily,
                    pointLabelFontStyle: this.options.pointLabelFontStyle,
                    height: this.chart.height,
                    width: this.chart.width,
                    xCenter: this.chart.width / 2,
                    yCenter: this.chart.height / 2,
                    ctx: this.chart.ctx,
                    templateString: this.options.scaleLabel,
                    labels: t.labels,
                    valuesCount: t.datasets[0].data.length
                }), this.scale.setScaleSize(), this.updateScaleRange(t.datasets), this.scale.buildYLabels()
            },
            updateScaleRange: function(t) {
                var e = function() {
                        var e = [];
                        return i.each(t, function(t) {
                            t.data ? e = e.concat(t.data) : i.each(t.points, function(t) {
                                e.push(t.value)
                            })
                        }), e
                    }(),
                    n = this.options.scaleOverride ? {
                        steps: this.options.scaleSteps,
                        stepValue: this.options.scaleStepWidth,
                        min: this.options.scaleStartValue,
                        max: this.options.scaleStartValue + this.options.scaleSteps * this.options.scaleStepWidth
                    } : i.calculateScaleRange(e, i.min([this.chart.width, this.chart.height]) / 2, this.options.scaleFontSize, this.options.scaleBeginAtZero, this.options.scaleIntegersOnly);
                i.extend(this.scale, n)
            },
            addData: function(t, e) {
                this.scale.valuesCount++, i.each(t, function(t, i) {
                    var n = this.scale.getPointPosition(this.scale.valuesCount, this.scale.calculateCenterOffset(t));
                    this.datasets[i].points.push(new this.PointClass({
                        value: t,
                        label: e,
                        x: n.x,
                        y: n.y,
                        strokeColor: this.datasets[i].pointStrokeColor,
                        fillColor: this.datasets[i].pointColor
                    }))
                }, this), this.scale.labels.push(e), this.reflow(), this.update()
            },
            removeData: function() {
                this.scale.valuesCount--, this.scale.labels.shift(), i.each(this.datasets, function(t) {
                    t.points.shift()
                }, this), this.reflow(), this.update()
            },
            update: function() {
                this.eachPoints(function(t) {
                    t.save()
                }), this.reflow(), this.render()
            },
            reflow: function() {
                i.extend(this.scale, {
                    width: this.chart.width,
                    height: this.chart.height,
                    size: i.min([this.chart.width, this.chart.height]),
                    xCenter: this.chart.width / 2,
                    yCenter: this.chart.height / 2
                }), this.updateScaleRange(this.datasets), this.scale.setScaleSize(), this.scale.buildYLabels()
            },
            draw: function(t) {
                var e = t || 1,
                    n = this.chart.ctx;
                this.clear(), this.scale.draw(), i.each(this.datasets, function(t) {
                    i.each(t.points, function(t, i) {
                        t.hasValue() && t.transition(this.scale.getPointPosition(i, this.scale.calculateCenterOffset(t.value)), e)
                    }, this), n.lineWidth = this.options.datasetStrokeWidth, n.strokeStyle = t.strokeColor, n.beginPath(), i.each(t.points, function(t, e) {
                        0 === e ? n.moveTo(t.x, t.y) : n.lineTo(t.x, t.y)
                    }, this), n.closePath(), n.stroke(), n.fillStyle = t.fillColor, n.fill(), i.each(t.points, function(t) {
                        t.hasValue() && t.draw()
                    })
                }, this)
            }
        })
    }.call(this), ! function(t) {
        "use strict";

        function e(e, i) {
            this.itemsArray = [], this.$element = t(e), this.$element.hide(), this.isSelect = "SELECT" === e.tagName, this.multiple = this.isSelect && e.hasAttribute("multiple"), this.objectItems = i && i.itemValue, this.$container = t('<div class="bootstrap-tagsinput"></div>'), this.$input = t('<input size="1" type="text" />').appendTo(this.$container), this.$element.after(this.$container), this.enabled = !0, this.build(i)
        }

        function i(t, e) {
            if ("function" != typeof t[e]) {
                var i = t[e];
                t[e] = function(t) {
                    return t[i]
                }
            }
        }

        function n(t, e) {
            if ("function" != typeof t[e]) {
                var i = t[e];
                t[e] = function() {
                    return i
                }
            }
        }

        function s(t) {
            return t ? r.text(t).html() : ""
        }

        function o(t) {
            var e = 0;
            if (document.selection) {
                t.focus();
                var i = document.selection.createRange();
                i.moveStart("character", -t.value.length), e = i.text.length
            } else(t.selectionStart || "0" == t.selectionStart) && (e = t.selectionStart);
            return e
        }
        var a = {
            tagClass: function() {
                return "label label-info"
            },
            itemValue: function(t) {
                return t ? t.toString() : t
            },
            itemText: function(t) {
                return this.itemValue(t)
            },
            freeInput: !0,
            limit: 0
        };
        e.prototype = {
            constructor: e,
            add: function(e, i) {
                var n = this;
                if (e === !1 || e) {
                    if ("object" == typeof e && !n.objectItems) throw "Can't add objects when itemValue option is not set";
                    if (!e.toString().match(/^\s*$/)) {
                        if (n.isSelect && !n.multiple && n.itemsArray.length > 0 && n.remove(n.itemsArray[0]), "string" == typeof e && "INPUT" === this.$element[0].tagName) {
                            var o = e.split(",");
                            if (o.length > 1) {
                                for (var a = 0; a < o.length; a++) this.add(o[a], !0);
                                return void(i || n.pushVal())
                            }
                        }
                        var r = n.options.itemValue(e),
                            l = n.options.itemText(e),
                            c = n.options.tagClass(e);
                        if (!t.grep(n.itemsArray, function(t) {
                                return n.options.itemValue(t) === r
                            })[0]) {
                            n.itemsArray.push(e);
                            var h = t('<span class="tag ' + s(c) + '">' + s(l) + '<span data-role="remove"></span></span>');
                            if (h.data("item", e), n.findInputWrapper().before(h), h.after(" "), n.isSelect && !t('option[value="' + escape(r) + '"]', n.$element)[0]) {
                                var d = t("<option selected>" + s(l) + "</option>");
                                d.data("item", e), d.attr("value", r), n.$element.append(d)
                            }
                            i || n.pushVal(), n.options.limit && n.itemsArray.length >= n.options.limit && n.isEnabled() && n.disable(), n.$element.trigger(t.Event("itemAdded", {
                                item: e
                            }))
                        }
                    }
                }
            },
            remove: function(e, i) {
                var n = this;
                n.objectItems && (e = "object" == typeof e ? t.grep(n.itemsArray, function(t) {
                    return n.options.itemValue(t) == n.options.itemValue(e)
                })[0] : t.grep(n.itemsArray, function(t) {
                    return n.options.itemValue(t) == e
                })[0]), e && (t(".tag", n.$container).filter(function() {
                    return t(this).data("item") === e
                }).remove(), t("option", n.$element).filter(function() {
                    return t(this).data("item") === e
                }).remove(), n.itemsArray.splice(n.itemsArray.indexOf(e), 1)), i || n.pushVal(), n.options.limit && n.itemsArray.length < n.options.limit && !this.isEnabled() && this.enable(), n.$element.trigger(t.Event("itemRemoved", {
                    item: e
                }))
            },
            removeAll: function() {
                var e = this;
                for (t(".tag", e.$container).remove(), t("option", e.$element).remove(); e.itemsArray.length > 0;) e.itemsArray.pop();
                e.pushVal(), e.options.limit && !this.isEnabled() && this.enable()
            },
            refresh: function() {
                var e = this;
                t(".tag", e.$container).each(function() {
                    var i = t(this),
                        n = i.data("item"),
                        o = e.options.itemValue(n),
                        a = e.options.itemText(n),
                        r = e.options.tagClass(n);
                    if (i.attr("class", null), i.addClass("tag " + s(r)), i.contents().filter(function() {
                            return 3 == this.nodeType
                        })[0].nodeValue = s(a), e.isSelect) {
                        var l = t("option", e.$element).filter(function() {
                            return t(this).data("item") === n
                        });
                        l.attr("value", o)
                    }
                })
            },
            items: function() {
                return this.itemsArray
            },
            pushVal: function() {
                var e = this,
                    i = t.map(e.items(), function(t) {
                        return e.options.itemValue(t).toString()
                    });
                e.$element.val(i, !0).trigger("change")
            },
            build: function(e) {
                var s = this;
                s.options = t.extend({}, a, e);
                var r = s.options.typeahead || {};
                s.objectItems && (s.options.freeInput = !1), i(s.options, "itemValue"), i(s.options, "itemText"), i(s.options, "tagClass"), s.options.source && (r.source = s.options.source), r.source && t.fn.typeahead && (n(r, "source"), s.$input.typeahead({
                    source: function(e, i) {
                        function n(t) {
                            for (var e = [], n = 0; n < t.length; n++) {
                                var a = s.options.itemText(t[n]);
                                o[a] = t[n], e.push(a)
                            }
                            i(e)
                        }
                        this.map = {};
                        var o = this.map,
                            a = r.source(e);
                        t.isFunction(a.success) ? a.success(n) : t.when(a).then(n)
                    },
                    updater: function(t) {
                        s.add(this.map[t])
                    },
                    matcher: function(t) {
                        return -1 !== t.toLowerCase().indexOf(this.query.trim().toLowerCase())
                    },
                    sorter: function(t) {
                        return t.sort()
                    },
                    highlighter: function(t) {
                        var e = new RegExp("(" + this.query + ")", "gi");
                        return t.replace(e, "<strong>$1</strong>")
                    }
                })), s.$container.on("click", t.proxy(function() {
                    s.$input.focus()
                }, s)), s.$container.on("keydown", "input", t.proxy(function(e) {
                    var i = t(e.target),
                        n = s.findInputWrapper();
                    switch (e.which) {
                        case 8:
                            if (0 === o(i[0])) {
                                var a = n.prev();
                                a && s.remove(a.data("item"))
                            }
                            break;
                        case 46:
                            if (0 === o(i[0])) {
                                var r = n.next();
                                r && s.remove(r.data("item"))
                            }
                            break;
                        case 37:
                            var l = n.prev();
                            0 === i.val().length && l[0] && (l.before(n), i.focus());
                            break;
                        case 39:
                            var c = n.next();
                            0 === i.val().length && c[0] && (c.after(n), i.focus());
                            break;
                        case 13:
                            s.options.freeInput && (s.add(i.val()), i.val(""), e.preventDefault())
                    }
                    i.attr("size", Math.max(1, i.val().length))
                }, s)), s.$container.on("click", "[data-role=remove]", t.proxy(function(e) {
                    s.remove(t(e.target).closest(".tag").data("item"))
                }, s)), "INPUT" === s.$element[0].tagName ? s.add(s.$element.val()) : t("option", s.$element).each(function() {
                    s.add(t(this).attr("value"), !0)
                })
            },
            disable: function() {
                this.$input.prop("disabled", !0), this.enabled = !1
            },
            enable: function() {
                this.$input.prop("disabled", !1), this.enabled = !0
            },
            isEnabled: function() {
                return this.enabled
            },
            destroy: function() {
                var t = this;
                t.$container.off("keypress", "input"), t.$container.off("click", "[50role=remove]"), t.$container.remove(), t.$element.removeData("tagsinput"), t.$element.show()
            },
            focus: function() {
                this.$input.focus()
            },
            input: function() {
                return this.$input
            },
            findInputWrapper: function() {
                for (var e = this.$input[0], i = this.$container[0]; e && e.parentNode !== i;) e = e.parentNode;
                return t(e)
            }
        }, t.fn.tagsinput = function(i, n) {
            var s = [];
            return this.each(function() {
                var o = t(this).data("tagsinput");
                if (o) {
                    var a = o[i](n);
                    void 0 !== a && s.push(a)
                } else o = new e(this, i), t(this).data("tagsinput", o), s.push(o), "SELECT" === this.tagName && t("option", t(this)).attr("selected", "selected"), t(this).val(t(this).val())
            }), "string" == typeof i ? s.length > 1 ? s : s[0] : s
        }, t.fn.tagsinput.Constructor = e;
        var r = t("<div />");
        t(function() {
            t("input[data-role=tagsinput], select[multiple][data-role=tagsinput]").tagsinput()
        })
    }(window.jQuery),
    function(t) {
        "use strict";
        t(["jquery"], function(t) {
            function e(e) {
                return t.isFunction(e) || t.isPlainObject(e) ? e : {
                    top: e,
                    left: e
                }
            }
            var i = t.scrollTo = function(e, i, n) {
                return t(window).scrollTo(e, i, n)
            };
            return i.defaults = {
                axis: "xy",
                duration: 0,
                limit: !0
            }, i.window = function() {
                return t(window)._scrollable()
            }, t.fn._scrollable = function() {
                return this.map(function() {
                    var e = this,
                        i = !e.nodeName || -1 != t.inArray(e.nodeName.toLowerCase(), ["iframe", "#document", "html", "body"]);
                    if (!i) return e;
                    var n = (e.contentWindow || e).document || e.ownerDocument || e;
                    return /webkit/i.test(navigator.userAgent) || "BackCompat" == n.compatMode ? n.body : n.documentElement
                })
            }, t.fn.scrollTo = function(n, s, o) {
                return "object" == typeof s && (o = s, s = 0), "function" == typeof o && (o = {
                    onAfter: o
                }), "max" == n && (n = 9e9), o = t.extend({}, i.defaults, o), s = s || o.duration, o.queue = o.queue && o.axis.length > 1, o.queue && (s /= 2), o.offset = e(o.offset), o.over = e(o.over), this._scrollable().each(function() {
                    function a(t) {
                        c.animate(d, s, o.easing, t && function() {
                            t.call(this, h, o)
                        })
                    }
                    if (null != n) {
                        var r, l = this,
                            c = t(l),
                            h = n,
                            d = {},
                            u = c.is("html,body");
                        switch (typeof h) {
                            case "number":
                            case "string":
                                if (/^([+-]=?)?\d+(\.\d+)?(px|%)?$/.test(h)) {
                                    h = e(h);
                                    break
                                }
                                if (h = u ? t(h) : t(h, this), !h.length) return;
                            case "object":
                                (h.is || h.style) && (r = (h = t(h)).offset())
                        }
                        var f = t.isFunction(o.offset) && o.offset(l, h) || o.offset;
                        t.each(o.axis.split(""), function(t, e) {
                            var n = "x" == e ? "Left" : "Top",
                                s = n.toLowerCase(),
                                p = "scroll" + n,
                                m = l[p],
                                g = i.max(l, e);
                            if (r) d[p] = r[s] + (u ? 0 : m - c.offset()[s]), o.margin && (d[p] -= parseInt(h.css("margin" + n)) || 0, d[p] -= parseInt(h.css("border" + n + "Width")) || 0), d[p] += f[s] || 0, o.over[s] && (d[p] += h["x" == e ? "width" : "height"]() * o.over[s]);
                            else {
                                var v = h[s];
                                d[p] = v.slice && "%" == v.slice(-1) ? parseFloat(v) / 100 * g : v
                            }
                            o.limit && /^\d+$/.test(d[p]) && (d[p] = d[p] <= 0 ? 0 : Math.min(d[p], g)), !t && o.queue && (m != d[p] && a(o.onAfterFirst), delete d[p])
                        }), a(o.onAfter)
                    }
                }).end()
            }, i.max = function(e, i) {
                var n = "x" == i ? "Width" : "Height",
                    s = "scroll" + n;
                if (!t(e).is("html,body")) return e[s] - t(e)[n.toLowerCase()]();
                var o = "client" + n,
                    a = e.ownerDocument.documentElement,
                    r = e.ownerDocument.body;
                return Math.max(a[s], r[s]) - Math.min(a[o], r[o])
            }, i
        })
    }("function" == typeof define && define.amd ? define : function(t, e) {
        "undefined" != typeof module && module.exports ? module.exports = e(require("jquery")) : e(jQuery)
    }),
    function(t) {
        "use strict";

        function e(t, i) {
            return new e.prototype.init(t, i)
        }
        Function.prototype.bind || (Function.prototype.bind = function(t) {
            var e = this;
            return function() {
                return e.apply(t)
            }
        });
        var i = 0,
            n = /https?:\/\/(?:[0-9A-Z-]+\.)?(?:youtu\.be\/|youtube\.com\S*[^\w\-\s])([\w\-]{11})(?=[^\w\-]|$)(?![?=&+%\w.\-]*(?:['"][^<>]*>|<\/a>))[?=&+%\w.-]*/gi,
            s = /https?:\/\/(www\.)?vimeo.com\/(\d+)($|\/)/;
        t.fn.redactor = function(i) {
            var n = [],
                s = Array.prototype.slice.call(arguments, 1);
            return "string" == typeof i ? this.each(function() {
                var e, o = t.data(this, "redactor");
                if ("-1" != i.search(/\./) ? (e = i.split("."), "undefined" != typeof o[e[0]] && (e = o[e[0]][e[1]])) : e = o[i], "undefined" != typeof o && t.isFunction(e)) {
                    var a = e.apply(o, s);
                    void 0 !== a && a !== o && n.push(a)
                } else t.error('No such method "' + i + '" for Redactor')
            }) : this.each(function() {
                t.data(this, "redactor", {}), t.data(this, "redactor", e(this, i))
            }), 0 === n.length ? this : 1 === n.length ? n[0] : n
        }, t.Redactor = e, t.Redactor.VERSION = "10.0.4", t.Redactor.modules = ["alignment", "autosave", "block", "buffer", "build", "button", "caret", "clean", "code", "core", "dropdown", "file", "focus", "image", "indent", "inline", "insert", "keydown", "keyup", "lang", "line", "link", "list", "modal", "observe", "paragraphize", "paste", "placeholder", "progress", "selection", "shortcuts", "tabifier", "tidy", "toolbar", "upload", "utils"], t.Redactor.opts = {
            lang: "en",
            direction: "ltr",
            plugins: !1,
            focus: !1,
            focusEnd: !1,
            placeholder: !1,
            visual: !0,
            tabindex: !1,
            minHeight: !1,
            maxHeight: !1,
            linebreaks: !1,
            replaceDivs: !0,
            paragraphize: !0,
            cleanStyleOnEnter: !1,
            enterKey: !0,
            cleanOnPaste: !0,
            cleanSpaces: !0,
            pastePlainText: !1,
            autosave: !1,
            autosaveName: !1,
            autosaveInterval: 60,
            autosaveOnChange: !1,
            linkTooltip: !0,
            linkProtocol: "http",
            linkNofollow: !1,
            linkSize: 50,
            imageEditable: !0,
            imageLink: !0,
            imagePosition: !0,
            imageFloatMargin: "10px",
            imageResizable: !0,
            imageUpload: !1,
            imageUploadParam: "file",
            uploadImageField: !1,
            dragImageUpload: !0,
            fileUpload: !1,
            fileUploadParam: "file",
            dragFileUpload: !0,
            s3: !1,
            convertLinks: !0,
            convertUrlLinks: !0,
            convertImageLinks: !0,
            convertVideoLinks: !0,
            preSpaces: 4,
            tabAsSpaces: !1,
            tabFocus: !0,
            scrollTarget: !1,
            toolbar: !0,
            toolbarFixed: !0,
            toolbarFixedTarget: document,
            toolbarFixedTopOffset: 0,
            toolbarExternal: !1,
            toolbarOverflow: !1,
            buttonSource: !1,
            buttons: ["html", "formatting", "bold", "italic", "deleted", "unorderedlist", "orderedlist", "outdent", "indent", "image", "file", "link", "alignment", "horizontalrule"],
            buttonsHide: [],
            buttonsHideOnMobile: [],
            formatting: ["p", "blockquote", "pre", "h1", "h2", "h3", "h4", "h5", "h6"],
            formattingAdd: !1,
            tabifier: !0,
            deniedTags: ["html", "head", "link", "body", "meta", "script", "style", "applet"],
            allowedTags: !1,
            removeComments: !1,
            replaceTags: [
                ["strike", "del"]
            ],
            replaceStyles: [
                ["font-weight:\\s?bold", "strong"],
                ["font-style:\\s?italic", "em"],
                ["text-decoration:\\s?underline", "u"],
                ["text-decoration:\\s?line-through", "del"]
            ],
            removeDataAttr: !1,
            removeAttr: !1,
            allowedAttr: !1,
            removeWithoutAttr: ["span"],
            removeEmpty: ["p"],
            activeButtons: ["deleted", "italic", "bold", "underline", "unorderedlist", "orderedlist", "alignleft", "aligncenter", "alignright", "justify"],
            activeButtonsStates: {
                b: "bold",
                strong: "bold",
                i: "italic",
                em: "italic",
                del: "deleted",
                strike: "deleted",
                ul: "unorderedlist",
                ol: "orderedlist",
                u: "underline"
            },
            shortcuts: {
                "ctrl+shift+m, meta+shift+m": {
                    func: "inline.removeFormat"
                },
                "ctrl+b, meta+b": {
                    func: "inline.format",
                    params: ["bold"]
                },
                "ctrl+i, meta+i": {
                    func: "inline.format",
                    params: ["italic"]
                },
                "ctrl+h, meta+h": {
                    func: "inline.format",
                    params: ["superscript"]
                },
                "ctrl+l, meta+l": {
                    func: "inline.format",
                    params: ["subscript"]
                },
                "ctrl+k, meta+k": {
                    func: "link.show"
                },
                "ctrl+shift+7": {
                    func: "list.toggle",
                    params: ["orderedlist"]
                },
                "ctrl+shift+8": {
                    func: "list.toggle",
                    params: ["unorderedlist"]
                }
            },
            shortcutsAdd: !1,
            buffer: [],
            rebuffer: [],
            emptyHtml: "<p>&#x200b;</p>",
            invisibleSpace: "&#x200b;",
            imageTypes: ["image/png", "image/jpeg", "image/gif"],
            indentValue: 20,
            verifiedTags: ["a", "img", "b", "strong", "sub", "sup", "i", "em", "u", "small", "strike", "del", "cite", "ul", "ol", "li"],
            inlineTags: ["strong", "b", "u", "em", "i", "code", "del", "ins", "samp", "kbd", "sup", "sub", "mark", "var", "cite", "small"],
            alignmentTags: ["P", "H1", "H2", "H3", "H4", "H5", "H6", "DL", "DT", "DD", "DIV", "TD", "BLOCKQUOTE", "OUTPUT", "FIGCAPTION", "ADDRESS", "SECTION", "HEADER", "FOOTER", "ASIDE", "ARTICLE"],
            blockLevelElements: ["PRE", "UL", "OL", "LI"],
            langs: {
                en: {
                    html: "HTML",
                    video: "Insert Video",
                    image: "Insert Image",
                    table: "Table",
                    link: "Link",
                    link_insert: "Insert link",
                    link_edit: "Edit link",
                    unlink: "Unlink",
                    formatting: "Formatting",
                    paragraph: "Normal text",
                    quote: "Quote",
                    code: "Code",
                    header1: "Header 1",
                    header2: "Header 2",
                    header3: "Header 3",
                    header4: "Header 4",
                    header5: "Header 5",
                    bold: "Bold",
                    italic: "Italic",
                    fontcolor: "Font Color",
                    backcolor: "Back Color",
                    unorderedlist: "Unordered List",
                    orderedlist: "Ordered List",
                    outdent: "Outdent",
                    indent: "Indent",
                    cancel: "Cancel",
                    insert: "Insert",
                    save: "Save",
                    _delete: "Delete",
                    insert_table: "Insert Table",
                    insert_row_above: "Add Row Above",
                    insert_row_below: "Add Row Below",
                    insert_column_left: "Add Column Left",
                    insert_column_right: "Add Column Right",
                    delete_column: "Delete Column",
                    delete_row: "Delete Row",
                    delete_table: "Delete Table",
                    rows: "Rows",
                    columns: "Columns",
                    add_head: "Add Head",
                    delete_head: "Delete Head",
                    title: "Title",
                    image_position: "Position",
                    none: "None",
                    left: "Left",
                    right: "Right",
                    center: "Center",
                    image_web_link: "Image Web Link",
                    text: "Text",
                    mailto: "Email",
                    web: "URL",
                    video_html_code: "Video Embed Code or Youtube/Vimeo Link",
                    file: "Insert File",
                    upload: "Upload",
                    download: "Download",
                    choose: "Choose",
                    or_choose: "Or choose",
                    drop_file_here: "Drop file here",
                    align_left: "Align text to the left",
                    align_center: "Center text",
                    align_right: "Align text to the right",
                    align_justify: "Justify text",
                    horizontalrule: "Insert Horizontal Rule",
                    deleted: "Deleted",
                    anchor: "Anchor",
                    link_new_tab: "Open link in new tab",
                    underline: "Underline",
                    alignment: "Alignment",
                    filename: "Name (optional)",
                    edit: "Edit"
                }
            }
        }, e.fn = t.Redactor.prototype = {
            keyCode: {
                BACKSPACE: 8,
                DELETE: 46,
                DOWN: 40,
                ENTER: 13,
                SPACE: 32,
                ESC: 27,
                TAB: 9,
                CTRL: 17,
                META: 91,
                SHIFT: 16,
                ALT: 18,
                LEFT: 37,
                LEFT_WIN: 91
            },
            init: function(e, n) {
                this.$element = t(e), this.uuid = i++, this.rtePaste = !1, this.$pasteBox = !1, this.loadOptions(n), this.loadModules(), this.formatting = {}, t.merge(this.opts.blockLevelElements, this.opts.alignmentTags), this.reIsBlock = new RegExp("^(" + this.opts.blockLevelElements.join("|") + ")$", "i"), this.tidy.setupAllowed(), this.lang.load(), t.extend(this.opts.shortcuts, this.opts.shortcutsAdd), this.core.setCallback("start"), this.start = !0, this.build.run()
            },
            loadOptions: function(e) {
                this.opts = t.extend({}, t.extend(!0, {}, t.Redactor.opts), this.$element.data(), e)
            },
            getModuleMethods: function(t) {
                return Object.getOwnPropertyNames(t).filter(function(e) {
                    return "function" == typeof t[e]
                })
            },
            loadModules: function() {
                for (var e = t.Redactor.modules.length, i = 0; e > i; i++) this.bindModuleMethods(t.Redactor.modules[i])
            },
            bindModuleMethods: function(t) {
                if ("undefined" != typeof this[t]) {
                    this[t] = this[t]();
                    for (var e = this.getModuleMethods(this[t]), i = e.length, n = 0; i > n; n++) this[t][e[n]] = this[t][e[n]].bind(this)
                }
            },
            alignment: function() {
                return {
                    left: function() {
                        this.alignment.set("")
                    },
                    right: function() {
                        this.alignment.set("right")
                    },
                    center: function() {
                        this.alignment.set("center")
                    },
                    justify: function() {
                        this.alignment.set("justify")
                    },
                    set: function(t) {
                        this.utils.browser("msie") || this.$editor.focus(), this.buffer.set(), this.selection.save(), this.alignment.blocks = this.selection.getBlocks(), this.opts.linebreaks && this.alignment.blocks[0] === !1 ? this.alignment.setText(t) : this.alignment.setBlocks(t), this.selection.restore(), this.code.sync()
                    },
                    setText: function(e) {
                        var i = this.selection.wrap("div");
                        t(i).attr("data-tagblock", "redactor"), t(i).css("text-align", e)
                    },
                    setBlocks: function(e) {
                        t.each(this.alignment.blocks, t.proxy(function(t, i) {
                            var n = this.utils.getAlignmentElement(i);
                            n && ("" === e && "undefined" != typeof n.data("tagblock") ? n.replaceWith(n.html()) : (n.css("text-align", e), this.utils.removeEmptyAttr(n, "style")))
                        }, this))
                    }
                }
            },
            autosave: function() {
                return {
                    enable: function() {
                        this.opts.autosave && (this.autosave.html = !1, this.autosave.name = this.opts.autosaveName ? this.opts.autosaveName : this.$textarea.attr("name"), this.opts.autosaveOnChange || (this.autosaveInterval = setInterval(t.proxy(this.autosave.load, this), 1e3 * this.opts.autosaveInterval)))
                    },
                    onChange: function() {
                        this.opts.autosaveOnChange && this.autosave.load()
                    },
                    load: function() {
                        var e = this.code.get();
                        this.autosave.html !== e && (this.utils.isEmpty(e) || t.ajax({
                            url: this.opts.autosave,
                            type: "post",
                            data: "name=" + this.autosave.name + "&" + this.autosave.name + "=" + escape(encodeURIComponent(e)),
                            success: t.proxy(function(t) {
                                this.autosave.success(t, e)
                            }, this)
                        }))
                    },
                    success: function(e, i) {
                        var n;
                        try {
                            n = t.parseJSON(e)
                        } catch (s) {
                            n = e
                        }
                        var o = "undefined" == typeof n.error ? "autosave" : "autosaveError";
                        this.core.setCallback(o, this.autosave.name, n), this.autosave.html = i
                    },
                    disable: function() {
                        clearInterval(this.autosaveInterval)
                    }
                }
            },
            block: function() {
                return {
                    formatting: function(t) {
                        var e, i;
                        "undefined" != typeof this.formatting[t].data ? e = "data" : "undefined" != typeof this.formatting[t].attr ? e = "attr" : "undefined" != typeof this.formatting[t]["class"] && (e = "class"), e && (i = this.formatting[t][e]), this.block.format(this.formatting[t].tag, e, i)
                    },
                    format: function(e, i, n) {
                        "quote" == e && (e = "blockquote");
                        var s = ["p", "pre", "blockquote", "h1", "h2", "h3", "h4", "h5", "h6"]; - 1 != t.inArray(e, s) && (this.block.isRemoveInline = "pre" == e || -1 != e.search(/h[1-6]/i), this.utils.browser("msie") || this.$editor.focus(), this.block.blocks = this.selection.getBlocks(), this.block.blocksSize = this.block.blocks.length, this.block.type = i, this.block.value = n, this.buffer.set(), this.selection.save(), this.block.set(e), this.selection.restore(), this.code.sync())
                    },
                    set: function(t) {
                        this.selection.get(), this.block.containerTag = this.range.commonAncestorContainer.tagName, this.range.collapsed ? this.block.setCollapsed(t) : this.block.setMultiple(t)
                    },
                    setCollapsed: function(e) {
                        var i = this.block.blocks[0];
                        if (i !== !1) {
                            if ("LI" == i.tagName) {
                                if ("blockquote" != e) return;
                                return void this.block.formatListToBlockquote()
                            }
                            var n = "TD" == this.block.containerTag || "TH" == this.block.containerTag;
                            if (n && !this.opts.linebreaks) document.execCommand("formatblock", !1, "<" + e + ">"), i = this.selection.getBlock(), this.block.toggle(t(i));
                            else if (i.tagName.toLowerCase() != e)
                                if (this.opts.linebreaks && "p" == e) t(i).prepend("<br>").append("<br>"), this.utils.replaceWithContents(i);
                                else {
                                    var s = this.utils.replaceToTag(i, e);
                                    this.block.toggle(s), "p" != e && "blockquote" != e && s.find("img").remove(), this.block.isRemoveInline && this.utils.removeInlineTags(s), ("p" == e || this.block.headTag) && s.find("p").contents().unwrap(), this.block.formatTableWrapping(s)
                                }
                            else if ("blockquote" == e && i.tagName.toLowerCase() == e)
                                if (this.opts.linebreaks) t(i).prepend("<br>").append("<br>"), this.utils.replaceWithContents(i);
                                else {
                                    var o = this.utils.replaceToTag(i, "p");
                                    this.block.toggle(o)
                                }
                            else i.tagName.toLowerCase() == e && this.block.toggle(t(i))
                        }
                    },
                    setMultiple: function(e) {
                        var i = this.block.blocks[0],
                            n = "TD" == this.block.containerTag || "TH" == this.block.containerTag;
                        if (i !== !1 && 1 === this.block.blocksSize)
                            if (i.tagName.toLowerCase() == e && "blockquote" == e)
                                if (this.opts.linebreaks) t(i).prepend("<br>").append("<br>"), this.utils.replaceWithContents(i);
                                else {
                                    var s = this.utils.replaceToTag(i, "p");
                                    this.block.toggle(s)
                                }
                        else if ("LI" == i.tagName) {
                            if ("blockquote" != e) return;
                            this.block.formatListToBlockquote()
                        } else if ("BLOCKQUOTE" == this.block.containerTag) this.block.formatBlockquote(e);
                        else if (this.opts.linebreaks && (n || this.range.commonAncestorContainer != i)) this.block.formatWrap(e);
                        else if (this.opts.linebreaks && "p" == e) t(i).prepend("<br>").append("<br>"), this.utils.replaceWithContents(i);
                        else if ("TD" === i.tagName) this.block.formatWrap(e);
                        else {
                            var o = this.utils.replaceToTag(i, e);
                            this.block.toggle(o), this.block.isRemoveInline && this.utils.removeInlineTags(o), ("p" == e || this.block.headTag) && o.find("p").contents().unwrap()
                        } else if (this.opts.linebreaks || "p" != e) {
                            if ("blockquote" == e) {
                                for (var a = 0, r = 0; r < this.block.blocksSize; r++) "BLOCKQUOTE" == this.block.blocks[r].tagName && a++;
                                if (a == this.block.blocksSize) return void t.each(this.block.blocks, t.proxy(function(e, i) {
                                    this.opts.linebreaks ? (t(i).prepend("<br>").append("<br>"), this.utils.replaceWithContents(i)) : this.utils.replaceToTag(i, "p")
                                }, this))
                            }
                            this.block.formatWrap(e)
                        } else {
                            var l = 0,
                                c = !1;
                            "class" == this.block.type && (c = "toggle", l = t(this.block.blocks).filter("." + this.block.value).size(), this.block.blocksSize == l ? c = "toggle" : this.block.blocksSize > l ? c = "set" : 0 === l && (c = "set"));
                            var h = ["ul", "ol", "li", "td", "th", "dl", "dt", "dd"];
                            t.each(this.block.blocks, t.proxy(function(i, n) {
                                if (-1 == t.inArray(n.tagName.toLowerCase(), h)) {
                                    var s = this.utils.replaceToTag(n, e);
                                    c ? "toggle" == c ? this.block.toggle(s) : "remove" == c ? this.block.remove(s) : "set" == c && this.block.set2(s) : this.block.toggle(s), "p" != e && "blockquote" != e && s.find("img").remove(), this.block.isRemoveInline && this.utils.removeInlineTags(s), ("p" == e || this.block.headTag) && s.find("p").contents().unwrap()
                                }
                            }, this))
                        }
                    },
                    toggle: function(t) {
                        return "class" == this.block.type ? void t.toggleClass(this.block.value) : "attr" == this.block.type || "data" == this.block.type ? void(t.attr(this.block.value.name) == this.block.value.value ? t.removeAttr(this.block.value.name) : t.attr(this.block.value.name, this.block.value.value)) : void t.removeAttr("style class")
                    },
                    remove: function(t) {
                        t.removeClass(this.block.value)
                    },
                    formatListToBlockquote: function() {
                        var e = t(this.block.blocks[0]).closest("ul, ol");
                        t(e).find("ul, ol").contents().unwrap(), t(e).find("li").append(t("<br>")).contents().unwrap();
                        var i = this.utils.replaceToTag(e, "blockquote");
                        this.block.toggle(i)
                    },
                    formatBlockquote: function(e) {
                        document.execCommand("outdent"), document.execCommand("formatblock", !1, e), this.clean.clearUnverified(), this.$editor.find("p:empty").remove();
                        var i = this.selection.getBlock();
                        "p" != e && t(i).find("img").remove(), this.opts.linebreaks || this.block.toggle(t(i)), this.$editor.find("ul, ol, tr, blockquote, p").each(t.proxy(this.utils.removeEmpty, this)), this.opts.linebreaks && "p" == e && this.utils.replaceWithContents(i)
                    },
                    formatWrap: function(e) {
                        if ("UL" == this.block.containerTag || "OL" == this.block.containerTag) {
                            if ("blockquote" != e) return;
                            this.block.formatListToBlockquote()
                        }
                        var i = this.selection.wrap(e);
                        if (i !== !1) {
                            var n = t(i);
                            this.block.formatTableWrapping(n);
                            var s = n.find(this.opts.blockLevelElements.join(",") + ", td, table, thead, tbody, tfoot, th, tr");
                            (this.opts.linebreaks && "p" == e || "pre" == e || "blockquote" == e) && s.append("<br />"), s.contents().unwrap(), "p" != e && "blockquote" != e && n.find("img").remove(), t.each(this.block.blocks, t.proxy(this.utils.removeEmpty, this)), n.append(this.selection.getMarker(2)), this.opts.linebreaks || this.block.toggle(n), this.$editor.find("ul, ol, tr, blockquote, p").each(t.proxy(this.utils.removeEmpty, this)), n.find("blockquote:empty").remove(), this.block.isRemoveInline && this.utils.removeInlineTags(n), this.opts.linebreaks && "p" == e && this.utils.replaceWithContents(n)
                        }
                    },
                    formatTableWrapping: function(t) {
                        0 !== t.closest("table").size() && (0 === t.closest("tr").size() && t.wrap("<tr>"), 0 === t.closest("td").size() && 0 === t.closest("th").size() && t.wrap("<td>"))
                    },
                    removeData: function(e) {
                        var i = this.selection.getBlocks();
                        t(i).removeAttr("data-" + e), this.code.sync()
                    },
                    setData: function(e, i) {
                        var n = this.selection.getBlocks();
                        t(n).attr("data-" + e, i), this.code.sync()
                    },
                    toggleData: function(e, i) {
                        var n = this.selection.getBlocks();
                        t.each(n, function() {
                            t(this).attr("data-" + e) ? t(this).removeAttr("data-" + e) : t(this).attr("data-" + e, i)
                        })
                    },
                    removeAttr: function(e) {
                        var i = this.selection.getBlocks();
                        t(i).removeAttr(e), this.code.sync()
                    },
                    setAttr: function(e, i) {
                        var n = this.selection.getBlocks();
                        t(n).attr(e, i), this.code.sync()
                    },
                    toggleAttr: function(e, i) {
                        var n = this.selection.getBlocks();
                        t.each(n, function() {
                            t(this).attr(name) ? t(this).removeAttr(name) : t(this).attr(name, i)
                        })
                    },
                    removeClass: function(e) {
                        var i = this.selection.getBlocks();
                        t(i).removeClass(e), this.utils.removeEmptyAttr(i, "class"), this.code.sync()
                    },
                    setClass: function(e) {
                        var i = this.selection.getBlocks();
                        t(i).addClass(e), this.code.sync()
                    },
                    toggleClass: function(e) {
                        var i = this.selection.getBlocks();
                        t(i).toggleClass(e), this.code.sync()
                    }
                }
            },
            buffer: function() {
                return {
                    set: function(t) {
                        "undefined" == typeof t || "undo" == t ? this.buffer.setUndo() : this.buffer.setRedo()
                    },
                    setUndo: function() {
                        this.selection.save(), this.opts.buffer.push(this.$editor.html()), this.selection.restore()
                    },
                    setRedo: function() {
                        this.selection.save(), this.opts.rebuffer.push(this.$editor.html()), this.selection.restore()
                    },
                    getUndo: function() {
                        this.$editor.html(this.opts.buffer.pop())
                    },
                    getRedo: function() {
                        this.$editor.html(this.opts.rebuffer.pop())
                    },
                    add: function() {
                        this.opts.buffer.push(this.$editor.html())
                    },
                    undo: function() {
                        0 !== this.opts.buffer.length && (this.buffer.set("redo"), this.buffer.getUndo(), this.selection.restore(), setTimeout(t.proxy(this.observe.load, this), 50))
                    },
                    redo: function() {
                        0 !== this.opts.rebuffer.length && (this.buffer.set("undo"), this.buffer.getRedo(), this.selection.restore(), setTimeout(t.proxy(this.observe.load, this), 50))
                    }
                }
            },
            build: function() {
                return {
                    run: function() {
                        this.build.createContainerBox(), this.build.loadContent(), this.build.loadEditor(), this.build.enableEditor(), this.build.setCodeAndCall()
                    },
                    isTextarea: function() {
                        return "TEXTAREA" === this.$element[0].tagName
                    },
                    createContainerBox: function() {
                        this.$box = t('<div class="redactor-box" />')
                    },
                    createTextarea: function() {
                        this.$textarea = t("<textarea />").attr("name", this.build.getTextareaName())
                    },
                    getTextareaName: function() {
                        var t = this.$element.attr("id");
                        return "undefined" == typeof t && (t = "content-" + this.uuid), t
                    },
                    loadContent: function() {
                        var e = this.build.isTextarea() ? "val" : "html";
                        this.content = t.trim(this.$element[e]())
                    },
                    enableEditor: function() {
                        this.$editor.attr({
                            contenteditable: !0,
                            dir: this.opts.direction
                        })
                    },
                    loadEditor: function() {
                        var t = this.build.isTextarea() ? "fromTextarea" : "fromElement";
                        this.build[t]()
                    },
                    fromTextarea: function() {
                        this.$editor = t("<div />"), this.$textarea = this.$element, this.$box.insertAfter(this.$element).append(this.$editor).append(this.$element), this.$editor.addClass("redactor-editor"), this.$element.hide()
                    },
                    fromElement: function() {
                        this.$editor = this.$element, this.build.createTextarea(), this.$box.insertAfter(this.$editor).append(this.$editor).append(this.$textarea), this.$editor.addClass("redactor-editor"), this.$textarea.hide()
                    },
                    setCodeAndCall: function() {
                        this.code.set(this.content), this.build.setOptions(), this.build.callEditor(), this.opts.visual || setTimeout(t.proxy(this.code.showCode, this), 200)
                    },
                    callEditor: function() {
                        this.build.disableMozillaEditing(), this.build.setEvents(), this.build.setHelpers(), this.opts.toolbar && (this.opts.toolbar = this.toolbar.init(), this.toolbar.build()),
                            this.modal.loadTemplates(), this.build.plugins(), setTimeout(t.proxy(this.observe.load, this), 4), this.core.setCallback("init")
                    },
                    setOptions: function() {
                        t(this.$textarea).attr("dir", this.opts.direction), this.opts.linebreaks && this.$editor.addClass("redactor-linebreaks"), this.opts.tabindex && this.$editor.attr("tabindex", this.opts.tabindex), this.opts.minHeight && this.$editor.css("minHeight", this.opts.minHeight), this.opts.maxHeight && this.$editor.css("maxHeight", this.opts.maxHeight)
                    },
                    setEvents: function() {
                        this.$editor.on("drop.redactor", t.proxy(function(e) {
                            if (e = e.originalEvent || e, void 0 === window.FormData || !e.dataTransfer) return !0;
                            var i = e.dataTransfer.files.length;
                            if (0 === i) return this.code.sync(), setTimeout(t.proxy(this.clean.clearUnverified, this), 1), this.core.setCallback("drop", e), !0;
                            if (e.preventDefault(), this.opts.dragImageUpload || this.opts.dragFileUpload) {
                                var n = e.dataTransfer.files;
                                this.upload.directUpload(n[0], e)
                            }
                            setTimeout(t.proxy(this.clean.clearUnverified, this), 1), this.core.setCallback("drop", e)
                        }, this)), this.$editor.on("click.redactor", t.proxy(function(t) {
                            var e = "click";
                            "click" != this.core.getEvent() && "arrow" != this.core.getEvent() || (e = !1), this.core.addEvent(e), this.utils.disableSelectAll(), this.core.setCallback("click", t)
                        }, this)), this.$editor.on("paste.redactor", t.proxy(this.paste.init, this)), this.$editor.on("keydown.redactor", t.proxy(this.keydown.init, this)), this.$editor.on("keyup.redactor", t.proxy(this.keyup.init, this)), t.isFunction(this.opts.codeKeydownCallback) && this.$textarea.on("keydown.redactor-textarea", t.proxy(this.opts.codeKeydownCallback, this)), t.isFunction(this.opts.codeKeyupCallback) && this.$textarea.on("keyup.redactor-textarea", t.proxy(this.opts.codeKeyupCallback, this)), t.isFunction(this.opts.focusCallback) && this.$editor.on("focus.redactor", t.proxy(this.opts.focusCallback, this));
                        var e;
                        t(document).on("mousedown", function(i) {
                            e = t(i.target)
                        }), this.$editor.on("blur.redactor", t.proxy(function(i) {
                            if (!this.rtePaste) {
                                var n = t(e);
                                n.hasClass("redactor-toolbar, redactor-dropdown") || n.is("#redactor-modal") || 0 !== n.parents(".redactor-toolbar, .redactor-dropdown, #redactor-modal").size() || (this.utils.disableSelectAll(), t.isFunction(this.opts.blurCallback) && this.core.setCallback("blur", i))
                            }
                        }, this))
                    },
                    setHelpers: function() {
                        this.autosave.enable(), this.placeholder.enable(), this.opts.focus && setTimeout(t.proxy(this.focus.setStart, this), 100), this.opts.focusEnd && setTimeout(t.proxy(this.focus.setEnd, this), 100)
                    },
                    plugins: function() {
                        this.opts.plugins && RedactorPlugins && t.each(this.opts.plugins, t.proxy(function(e, i) {
                            if ("undefined" != typeof RedactorPlugins[i]) {
                                if (-1 !== t.inArray(i, t.Redactor.modules)) return void t.error('Plugin name "' + i + "\" matches the name of the Redactor's module.");
                                if (t.isFunction(RedactorPlugins[i])) {
                                    this[i] = RedactorPlugins[i]();
                                    for (var n = this.getModuleMethods(this[i]), s = n.length, o = 0; s > o; o++) this[i][n[o]] = this[i][n[o]].bind(this);
                                    t.isFunction(this[i].init) && this[i].init()
                                }
                            }
                        }, this))
                    },
                    disableMozillaEditing: function() {
                        if (this.utils.browser("mozilla")) try {
                            document.execCommand("enableObjectResizing", !1, !1), document.execCommand("enableInlineTableEditing", !1, !1)
                        } catch (t) {}
                    }
                }
            },
            button: function() {
                return {
                    build: function(e, i) {
                        var n = t('<a href="#" class="re-icon re-' + e + '" rel="' + e + '" />').attr("tabindex", "-1");
                        if ((i.func || i.command || i.dropdown) && n.on("touchstart click", t.proxy(function(t) {
                                if (n.hasClass("redactor-button-disabled")) return !1;
                                var s = "func",
                                    o = i.func;
                                i.command ? (s = "command", o = i.command) : i.dropdown && (s = "dropdown", o = !1), this.button.onClick(t, e, s, o)
                            }, this)), i.dropdown) {
                            var s = t('<div class="redactor-dropdown redactor-dropdown-box-' + e + '" style="display: none;">');
                            n.data("dropdown", s), this.dropdown.build(e, s, i.dropdown)
                        }
                        return this.utils.isDesktop() && this.button.createTooltip(n, e, i.title), n
                    },
                    createTooltip: function(e, i, n) {
                        var s = t("<span>").addClass("redactor-toolbar-tooltip redactor-toolbar-tooltip-" + i).hide().html(n);
                        s.appendTo("body"), e.on("mouseover", function() {
                            if (!t(this).hasClass("redactor-button-disabled")) {
                                var i = e.offset(),
                                    n = e.innerHeight(),
                                    o = e.innerWidth();
                                s.show(), s.css({
                                    top: i.top + n + "px",
                                    left: i.left + o / 2 - s.innerWidth() / 2 + "px"
                                })
                            }
                        }), e.on("mouseout", function() {
                            s.hide()
                        })
                    },
                    onClick: function(e, i, n, s) {
                        if (e.preventDefault(), this.utils.browser("msie") && (e.returnValue = !1), "command" == n) this.inline.format(s);
                        else if ("dropdown" == n) this.dropdown.show(e, i);
                        else {
                            var o;
                            t.isFunction(s) ? (s.call(this, i), this.observe.buttons(e, i)) : "-1" != s.search(/\./) ? (o = s.split("."), "undefined" != typeof this[o[0]] && (this[o[0]][o[1]](i), this.observe.buttons(e, i))) : (this[s](i), this.observe.buttons(e, i))
                        }
                    },
                    get: function(t) {
                        return this.$toolbar.find("a.re-" + t)
                    },
                    setActive: function(t) {
                        this.button.get(t).addClass("redactor-act")
                    },
                    setInactive: function(t) {
                        this.button.get(t).removeClass("redactor-act")
                    },
                    setInactiveAll: function(t) {
                        "undefined" == typeof t ? this.$toolbar.find("a.re-icon").removeClass("redactor-act") : this.$toolbar.find("a.re-icon").not(".re-" + t).removeClass("redactor-act")
                    },
                    setActiveInVisual: function() {
                        this.$toolbar.find("a.re-icon").not("a.re-html").removeClass("redactor-button-disabled")
                    },
                    setInactiveInCode: function() {
                        this.$toolbar.find("a.re-icon").not("a.re-html").addClass("redactor-button-disabled")
                    },
                    changeIcon: function(t, e) {
                        this.button.get(t).addClass("re-" + e)
                    },
                    removeIcon: function(t, e) {
                        this.button.get(t).removeClass("re-" + e)
                    },
                    setAwesome: function(t, e) {
                        var i = this.button.get(t);
                        i.removeClass("redactor-btn-image").addClass("fa-redactor-btn"), i.html('<i class="fa ' + e + '"></i>')
                    },
                    addCallback: function(e, i) {
                        var n = "dropdown" == i ? "dropdown" : "func",
                            s = e.attr("rel");
                        e.on("touchstart click", t.proxy(function(t) {
                            return e.hasClass("redactor-button-disabled") ? !1 : void this.button.onClick(t, s, n, i)
                        }, this))
                    },
                    addDropdown: function(e, i) {
                        var n = e.attr("rel");
                        this.button.addCallback(e, "dropdown");
                        var s = t('<div class="redactor-dropdown redactor-dropdown-box-' + n + '" style="display: none;">');
                        return e.data("dropdown", s), i && this.dropdown.build(n, s, i), s
                    },
                    add: function(e, i) {
                        if (this.opts.toolbar) {
                            var n = this.button.build(e, {
                                title: i
                            });
                            return n.addClass("redactor-btn-image"), this.$toolbar.append(t("<li>").append(n)), n
                        }
                    },
                    addFirst: function(e, i) {
                        if (this.opts.toolbar) {
                            var n = this.button.build(e, {
                                title: i
                            });
                            return this.$toolbar.prepend(t("<li>").append(n)), n
                        }
                    },
                    addAfter: function(e, i, n) {
                        if (this.opts.toolbar) {
                            var s = this.button.build(i, {
                                    title: n
                                }),
                                o = this.button.get(e);
                            return 0 !== o.size() ? o.parent().after(t("<li>").append(s)) : this.$toolbar.append(t("<li>").append(s)), s
                        }
                    },
                    addBefore: function(e, i, n) {
                        if (this.opts.toolbar) {
                            var s = this.button.build(i, {
                                    title: n
                                }),
                                o = this.button.get(e);
                            return 0 !== o.size() ? o.parent().before(t("<li>").append(s)) : this.$toolbar.append(t("<li>").append(s)), s
                        }
                    },
                    remove: function(t) {
                        this.button.get(t).remove()
                    }
                }
            },
            caret: function() {
                return {
                    setStart: function(e) {
                        if (this.utils.isBlock(e)) this.caret.set(e, 0, e, 0);
                        else {
                            var i = this.utils.createSpaceElement();
                            t(e).prepend(i), this.caret.setEnd(i)
                        }
                    },
                    setEnd: function(t) {
                        this.caret.set(t, 1, t, 1)
                    },
                    set: function(e, i, n, s) {
                        if (this.utils.browser("msie") || this.$editor.focus(), e = e[0] || e, n = n[0] || n, this.utils.isBlockTag(e.tagName) && "" === e.innerHTML && (e.innerHTML = this.opts.invisibleSpace), "BR" == e.tagName && this.opts.linebreaks === !1) {
                            var o = t(this.opts.emptyHtml)[0];
                            t(e).replaceWith(o), e = o, n = e
                        }
                        this.selection.get();
                        try {
                            this.range.setStart(e, i), this.range.setEnd(n, s)
                        } catch (a) {}
                        this.selection.addRange()
                    },
                    setAfter: function(e) {
                        try {
                            var i = t(e)[0].tagName;
                            if ("BR" == i || this.utils.isBlock(e)) "BR" != i && this.utils.browser("msie") ? this.caret.setStart(t(e).next()) : this.caret.setAfterOrBefore(e, "after");
                            else {
                                var n = this.utils.createSpaceElement();
                                t(e).after(n), this.caret.setEnd(n)
                            }
                        } catch (s) {
                            var n = this.utils.createSpaceElement();
                            t(e).after(n), this.caret.setEnd(n)
                        }
                    },
                    setBefore: function(e) {
                        this.utils.isBlock(e) ? this.caret.setEnd(t(e).prev()) : this.caret.setAfterOrBefore(e, "before")
                    },
                    setAfterOrBefore: function(t, e) {
                        if (this.utils.browser("msie") || this.$editor.focus(), t = t[0] || t, this.selection.get(), "after" == e) try {
                            this.range.setStartAfter(t), this.range.setEndAfter(t)
                        } catch (i) {} else try {
                            this.range.setStartBefore(t), this.range.setEndBefore(t)
                        } catch (i) {}
                        this.range.collapse(!1), this.selection.addRange()
                    },
                    getOffsetOfElement: function(e) {
                        e = e[0] || e, this.selection.get();
                        var i = this.range.cloneRange();
                        return i.selectNodeContents(e), i.setEnd(this.range.endContainer, this.range.endOffset), t.trim(i.toString()).length
                    },
                    getOffset: function() {
                        var t = 0,
                            e = window.getSelection();
                        if (e.rangeCount > 0) {
                            var i = window.getSelection().getRangeAt(0),
                                n = i.cloneRange();
                            n.selectNodeContents(this.$editor[0]), n.setEnd(i.endContainer, i.endOffset), t = n.toString().length
                        }
                        return t
                    },
                    setOffset: function(t, e) {
                        "undefined" == typeof e && (e = t), this.focus.isFocused() || this.focus.setStart();
                        for (var i, n = document.createRange(), s = document.getSelection(), o = 0, a = document.createTreeWalker(this.$editor[0], NodeFilter.SHOW_TEXT, null, null); i = a.nextNode();)
                            if (o += i.nodeValue.length, o > t && (n.setStart(i, i.nodeValue.length + t - o), t = 1 / 0), o >= e) {
                                n.setEnd(i, i.nodeValue.length + e - o);
                                break
                            } s.removeAllRanges(), s.addRange(n)
                    },
                    setToPoint: function(t, e) {
                        this.caret.setOffset(t, e)
                    },
                    getCoords: function() {
                        return this.caret.getOffset()
                    }
                }
            },
            clean: function() {
                return {
                    onSet: function(e) {
                        e = this.clean.savePreCode(e), e = e.replace(/\$/g, "&#36;"), e = e.replace(/\u201d/g, '"'), e = e.replace(/\u2018/g, "'"), e = e.replace(/\u2019/g, "'"), this.opts.replaceDivs && (e = this.clean.replaceDivs(e)), this.opts.linebreaks && (e = this.clean.replaceParagraphsToBr(e)), e = this.clean.saveFormTags(e);
                        var i = t("<div>");
                        i.html(e);
                        var n = i.find("font[style]");
                        return 0 !== n.length && (n.replaceWith(function() {
                            var e = t(this);
                            t("<span>").attr("style", e.attr("style"));
                            return $span.append(e.contents())
                        }), e = i.html()), i.remove(), e = e.replace(/<font(.*?[^<])>/gi, ""), e = e.replace(/<\/font>/gi, ""), e = this.tidy.load(e), this.opts.paragraphize && (e = this.paragraphize.load(e)), e = this.clean.setVerified(e), e = this.clean.convertInline(e)
                    },
                    onSync: function(e) {
                        if (e = e.replace(/[\u200B-\u200D\uFEFF]/g, ""), e = e.replace(/&#x200b;/gi, ""), e = e.replace(/&nbsp;/gi, " "), -1 != e.search(/^<p>(||\s||&nbsp;)<\/p>$/i)) return "";
                        e = this.clean.restoreFormTags(e);
                        var i = {
                            "\u2122": "&trade;",
                            "\xa9": "&copy;",
                            "\u2026": "&hellip;",
                            "\u2014": "&mdash;",
                            "\u2010": "&dash;"
                        };
                        return t.each(i, function(t, i) {
                            e = e.replace(new RegExp(t, "g"), i)
                        }), e = e.replace(new RegExp("<br\\s?/?></li>", "gi"), "</li>"), e = e.replace(new RegExp("</li><br\\s?/?>", "gi"), "</li>"), e = e.replace(new RegExp('<div(.*?) data-tagblock="redactor"(.*?[^>])>', "gi"), "<div$1$2>"), e = e.replace(new RegExp('<(.*?) data-verified="redactor"(.*?[^>])>', "gi"), "<$1$2>"), e = e.replace(new RegExp('<span(.*?) rel="(.*?)"(.*?[^>])>', "gi"), "<span$1$3>"), e = e.replace(new RegExp('<img(.*?) rel="(.*?)"(.*?[^>])>', "gi"), "<img$1$3>"), e = e.replace(new RegExp('<img(.*?) style="" (.*?[^>])>', "gi"), "<img$1 $2>"), e = e.replace(new RegExp("<img(.*?) style (.*?[^>])>", "gi"), "<img$1 $2>"), e = e.replace(new RegExp('<span class="redactor-invisible-space">(.*?)</span>', "gi"), "$1"), e = e.replace(/ data-save-url="(.*?[^>])"/gi, ""), e = e.replace(/<span(.*?)id="redactor-image-box"(.*?[^>])>([\w\W]*?)<img(.*?)><\/span>/gi, "$3<img$4>"), e = e.replace(/<span(.*?)id="redactor-image-resizer"(.*?[^>])>(.*?)<\/span>/gi, ""), e = e.replace(/<span(.*?)id="redactor-image-editter"(.*?[^>])>(.*?)<\/span>/gi, ""), e = e.replace(/<font(.*?[^<])>/gi, ""), e = e.replace(/<\/font>/gi, ""), e = this.tidy.load(e), this.opts.linkNofollow && (e = e.replace(/<a(.*?)rel="nofollow"(.*?[^>])>/gi, "<a$1$2>"), e = e.replace(/<a(.*?[^>])>/gi, '<a$1 rel="nofollow">')), e = e.replace(/<(.*?) data-redactor-tag="(.*?)"(.*?[^>])>/gi, "<$1$3>"), e = e.replace(/<(.*?) data-redactor-class="(.*?)"(.*?[^>])>/gi, "<$1$3>"), e = e.replace(/<(.*?) data-redactor-style="(.*?)"(.*?[^>])>/gi, "<$1$3>"), e = e.replace(new RegExp('<(.*?) data-verified="redactor"(.*?[^>])>', "gi"), "<$1$2>"), e = e.replace(new RegExp('<(.*?) data-verified="redactor">', "gi"), "<$1>")
                    },
                    onPaste: function(e, i) {
                        if (e = t.trim(e), e = e.replace(/\$/g, "&#36;"), e = e.replace(/\u201d/g, '"'), e = e.replace(/\u201c/g, '"'), e = e.replace(/\u2018/g, "'"), e = e.replace(/\u2019/g, "'"), e = e.replace(/<span class="Apple-converted-space">&nbsp;<\/span>/gi, " "), e = e.replace(/<span class="Apple-tab-span"[^>]*>\t<\/span>/gi, "	"), e = e.replace(/<span[^>]*>(\s|&nbsp;)<\/span>/gi, " "), this.opts.pastePlainText) return this.clean.getPlainText(e);
                        if (!this.utils.isSelectAll() && "undefined" == typeof i) {
                            if (this.utils.isCurrentOrParent(["FIGCAPTION", "A"])) return this.clean.getPlainText(e, !1);
                            if (this.utils.isCurrentOrParent("PRE")) return this.clean.getPreCode(e);
                            if (this.utils.isCurrentOrParent(["BLOCKQUOTE", "H1", "H2", "H3", "H4", "H5", "H6"])) {
                                if (e = this.clean.getOnlyImages(e), !this.utils.browser("msie")) {
                                    var n = this.selection.getBlock();
                                    n && "P" == n.tagName && (e = e.replace(/<img(.*?)>/gi, "<p><img$1></p>"))
                                }
                                return e
                            }
                            if (this.utils.isCurrentOrParent(["TD"])) return e = this.clean.onPasteTidy(e, "td"), this.opts.linebreaks && (e = this.clean.replaceParagraphsToBr(e)), e = this.clean.replaceDivsToBr(e);
                            if (this.utils.isCurrentOrParent(["LI"])) return this.clean.onPasteTidy(e, "li")
                        }
                        return e = this.clean.isSingleLine(e, i), this.clean.singleLine || (this.opts.linebreaks && (e = this.clean.replaceParagraphsToBr(e)), this.opts.replaceDivs && (e = this.clean.replaceDivs(e)), e = this.clean.saveFormTags(e)), e = this.clean.onPasteWord(e), e = this.clean.onPasteExtra(e), e = this.clean.onPasteTidy(e, "all"), !this.clean.singleLine && this.opts.paragraphize && (e = this.paragraphize.load(e)), e = this.clean.removeDirtyStyles(e), e = this.clean.onPasteRemoveSpans(e), e = this.clean.onPasteRemoveEmpty(e), e = this.clean.convertInline(e)
                    },
                    onPasteWord: function(t) {
                        return t = t.replace(/<!--[\s\S]*?-->/gi, ""), t = t.replace(/<style[^>]*>[\s\S]*?<\/style>/gi, ""), /(class=\"?Mso|style=\"[^\"]*\bmso\-|w:WordDocument)/.test(t) && (t = this.clean.onPasteIeFixLinks(t), t = t.replace(/<img(.*?)v:shapes=(.*?)>/gi, ""), t = t.replace(/src="file\:\/\/(.*?)"/, 'src=""'), t = t.replace(/<p(.*?)class="MsoListParagraphCxSpFirst"([\w\W]*?)<\/p>/gi, "<ul><li$2</li>"), t = t.replace(/<p(.*?)class="MsoListParagraphCxSpMiddle"([\w\W]*?)<\/p>/gi, "<li$2</li>"), t = t.replace(/<p(.*?)class="MsoListParagraphCxSpLast"([\w\W]*?)<\/p>/gi, "<li$2</li></ul>"), t = t.replace(/<p(.*?)class="MsoListParagraph"([\w\W]*?)<\/p>/gi, "<ul><li$2</li></ul>"), t = t.replace(/\xb7/g, ""), t = t.replace(/<p class="Mso(.*?)"/gi, "<p"), t = t.replace(/ class=\"(mso[^\"]*)\"/gi, ""), t = t.replace(/ class=(mso\w+)/gi, ""), t = t.replace(/<o:p(.*?)>([\w\W]*?)<\/o:p>/gi, "$2"), t = t.replace(/\n/g, " "), t = t.replace(/<p>\n?<li>/gi, "<li>")), this.opts.cleanSpaces && (t = t.replace(/(\s|&nbsp;)+/g, " ")), t
                    },
                    onPasteExtra: function(t) {
                        return t = t.replace(/<b\sid="internal-source-marker(.*?)">([\w\W]*?)<\/b>/gi, "$2"), t = t.replace(/<b(.*?)id="docs-internal-guid(.*?)">([\w\W]*?)<\/b>/gi, "$3"), t = t.replace(/<span[^>]*(font-style: italic; font-weight: bold|font-weight: bold; font-style: italic)[^>]*>/gi, '<span style="font-weight: bold;"><span style="font-style: italic;">'), t = t.replace(/<span[^>]*font-style: italic[^>]*>/gi, '<span style="font-style: italic;">'), t = t.replace(/<span[^>]*font-weight: bold[^>]*>/gi, '<span style="font-weight: bold;">'), t = t.replace(/<span[^>]*text-decoration: underline[^>]*>/gi, '<span style="text-decoration: underline;">'), t = t.replace(/<img>/gi, ""), t = t.replace(/\n{3,}/gi, "\n"), t = t.replace(/<font(.*?)>([\w\W]*?)<\/font>/gi, "$2"), t = t.replace(/<p><p>/gi, "<p>"), t = t.replace(/<\/p><\/p>/gi, "</p>"), t = t.replace(/<li>(\s*|\t*|\n*)<p>/gi, "<li>"), t = t.replace(/<\/p>(\s*|\t*|\n*)<\/li>/gi, "</li>"), t = t.replace(/<\/p>\s<p/gi, "</p><p"), t = t.replace(/<img src="webkit-fake-url\:\/\/(.*?)"(.*?)>/gi, ""), t = t.replace(/<p>\u2022([\w\W]*?)<\/p>/gi, "<li>$1</li>"), this.utils.browser("mozilla") && (t = t.replace(/<br\s?\/?>$/gi, "")), t
                    },
                    onPasteTidy: function(t, e) {
                        var i = ["span", "a", "pre", "blockquote", "small", "em", "strong", "code", "kbd", "mark", "address", "cite", "var", "samp", "dfn", "sup", "sub", "b", "i", "u", "del", "ol", "ul", "li", "dl", "dt", "dd", "p", "br", "video", "audio", "iframe", "embed", "param", "object", "img", "table", "td", "th", "tr", "tbody", "tfoot", "thead", "h1", "h2", "h3", "h4", "h5", "h6"],
                            n = !1,
                            s = [
                                ["a", "*"],
                                ["img", ["src", "alt"]],
                                ["span", ["class", "rel", "data-verified"]],
                                ["iframe", "*"],
                                ["video", "*"],
                                ["audio", "*"],
                                ["embed", "*"],
                                ["object", "*"],
                                ["param", "*"],
                                ["source", "*"]
                            ];
                        "all" == e ? (n = ["p", "span", "h1", "h2", "h3", "h4", "h5", "h6"], s = [
                            ["table", "class"],
                            ["td", ["colspan", "rowspan"]],
                            ["a", "*"],
                            ["img", ["src", "alt", "data-redactor-inserted-image"]],
                            ["span", ["class", "rel", "data-verified"]],
                            ["iframe", "*"],
                            ["video", "*"],
                            ["audio", "*"],
                            ["embed", "*"],
                            ["object", "*"],
                            ["param", "*"],
                            ["source", "*"]
                        ]) : "td" == e ? i = ["ul", "ol", "li", "span", "a", "small", "em", "strong", "code", "kbd", "mark", "cite", "var", "samp", "dfn", "sup", "sub", "b", "i", "u", "del", "ol", "ul", "li", "dl", "dt", "dd", "br", "iframe", "video", "audio", "embed", "param", "object", "img", "h1", "h2", "h3", "h4", "h5", "h6"] : "li" == e && (i = ["ul", "ol", "li", "span", "a", "small", "em", "strong", "code", "kbd", "mark", "cite", "var", "samp", "dfn", "sup", "sub", "b", "i", "u", "del", "br", "iframe", "video", "audio", "embed", "param", "object", "img"]);
                        var o = {
                            deniedTags: !1,
                            allowedTags: i,
                            removeComments: !0,
                            removePhp: !0,
                            removeAttr: !1,
                            allowedAttr: s,
                            removeEmpty: n
                        };
                        return this.tidy.load(t, o)
                    },
                    onPasteRemoveEmpty: function(t) {
                        return t = t.replace(/<(p|h[1-6])>(|\s|\n|\t|<br\s?\/?>)<\/(p|h[1-6])>/gi, ""), this.opts.linebreaks || (t = t.replace(/<br>$/i, "")), t
                    },
                    onPasteRemoveSpans: function(t) {
                        return t = t.replace(/<span>(.*?)<\/span>/gi, "$1"), t = t.replace(/<span[^>]*>\s|&nbsp;<\/span>/gi, " ")
                    },
                    onPasteIeFixLinks: function(e) {
                        if (!this.utils.browser("msie")) return e;
                        var i = t.trim(e);
                        return 0 === i.search(/^<a(.*?)>(.*?)<\/a>$/i) && (e = e.replace(/^<a(.*?)>(.*?)<\/a>$/i, "$2")), e
                    },
                    isSingleLine: function(t, e) {
                        if (this.clean.singleLine = !1, !this.utils.isSelectAll() && "undefined" == typeof e) {
                            var i = this.opts.blockLevelElements.join("|").replace("P|", "").replace("DIV|", ""),
                                n = t.match(new RegExp("</(" + i + ")>", "gi")),
                                s = t.match(/<\/(p|div)>/gi);
                            if (!n && (null === s || s && s.length <= 1)) {
                                var o = t.match(/<br\s?\/?>/gi),
                                    a = t.match(/<img(.*?[^>])>/gi);
                                o || a || (this.clean.singleLine = !0, t = t.replace(/<\/?(p|div)(.*?)>/gi, ""))
                            }
                        }
                        return t
                    },
                    stripTags: function(t, e) {
                        e = (((e || "") + "").toLowerCase().match(/<[a-z][a-z0-9]*>/g) || []).join("");
                        var i = /<\/?([a-z][a-z0-9]*)\b[^>]*>/gi;
                        return t.replace(i, function(t, i) {
                            return e.indexOf("<" + i.toLowerCase() + ">") > -1 ? t : ""
                        })
                    },
                    savePreCode: function(e) {
                        var i = e.match(/<(pre|code)(.*?)>([\w\W]*?)<\/(pre|code)>/gi);
                        return null !== i && t.each(i, t.proxy(function(t, i) {
                            var n = i.match(/<(pre|code)(.*?)>([\w\W]*?)<\/(pre|code)>/i);
                            n[3] = n[3].replace(/<br\s?\/?>/g, "\n"), n[3] = n[3].replace(/&nbsp;/g, " "), this.opts.preSpaces && (n[3] = n[3].replace(/\t/g, Array(this.opts.preSpaces + 1).join(" "))), n[3] = this.clean.encodeEntities(n[3]), n[3] = n[3].replace(/\$/g, "&#36;"), e = e.replace(i, "<" + n[1] + n[2] + ">" + n[3] + "</" + n[1] + ">")
                        }, this)), e
                    },
                    getTextFromHtml: function(e) {
                        e = e.replace(/<br\s?\/?>|<\/H[1-6]>|<\/p>|<\/div>|<\/li>|<\/td>/gi, "\n");
                        var i = document.createElement("div");
                        return i.innerHTML = e, e = i.textContent || i.innerText, t.trim(e)
                    },
                    getPlainText: function(t, e) {
                        return t = this.clean.getTextFromHtml(t), t = t.replace(/\n/g, "<br />"), this.opts.paragraphize && "undefined" == typeof e && (t = this.paragraphize.load(t)), t
                    },
                    getPreCode: function(t) {
                        return t = t.replace(/<img(.*?) style="(.*?)"(.*?[^>])>/gi, "<img$1$3>"), t = t.replace(/<img(.*?)>/gi, "&lt;img$1&gt;"), t = this.clean.getTextFromHtml(t), this.opts.preSpaces && (t = t.replace(/\t/g, Array(this.opts.preSpaces + 1).join(" "))), t = this.clean.encodeEntities(t)
                    },
                    getOnlyImages: function(t) {
                        return t = t.replace(/<img(.*?)>/gi, "[img$1]"), t = t.replace(/<(.*?)>/gi, ""), t = t.replace(/\[img(.*?)\]/gi, "<img$1>")
                    },
                    getOnlyLinksAndImages: function(t) {
                        return t = t.replace(/<a(.*?)href="(.*?)"(.*?)>([\w\W]*?)<\/a>/gi, '[a href="$2"]$4[/a]'), t = t.replace(/<img(.*?)>/gi, "[img$1]"), t = t.replace(/<(.*?)>/gi, ""), t = t.replace(/\[a href="(.*?)"\]([\w\W]*?)\[\/a\]/gi, '<a href="$1">$2</a>'), t = t.replace(/\[img(.*?)\]/gi, "<img$1>")
                    },
                    encodeEntities: function(t) {
                        return t = String(t).replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, '"'), t.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
                    },
                    removeDirtyStyles: function(e) {
                        if (this.utils.browser("msie")) return e;
                        var i = document.createElement("div");
                        return i.innerHTML = e, this.clean.clearUnverifiedRemove(t(i)), e = i.innerHTML, t(i).remove(), e
                    },
                    clearUnverified: function() {
                        if (!this.utils.browser("msie")) {
                            this.clean.clearUnverifiedRemove(this.$editor);
                            var t = this.$editor.find("h1, h2, h3, h4, h5, h6");
                            t.find("span").removeAttr("style"), t.find(this.opts.verifiedTags.join(", ")).removeAttr("style"), this.code.sync()
                        }
                    },
                    clearUnverifiedRemove: function(e) {
                        e.find(this.opts.verifiedTags.join(", ")).removeAttr("style"), e.find("span").not('[data-verified="redactor"]').removeAttr("style"), e.find('span[data-verified="redactor"], img[data-verified="redactor"]').each(function(e, i) {
                            var n = t(i);
                            n.attr("style", n.attr("rel"))
                        })
                    },
                    setVerified: function(t) {
                        if (this.utils.browser("msie")) return t;
                        t = t.replace(new RegExp("<img(.*?[^>])>", "gi"), '<img$1 data-verified="redactor">'), t = t.replace(new RegExp("<span(.*?)>", "gi"), '<span$1 data-verified="redactor">');
                        var e = t.match(new RegExp('<(span|img)(.*?)style="(.*?)"(.*?[^>])>', "gi"));
                        if (e)
                            for (var i = e.length, n = 0; i > n; n++) try {
                                var s = e[n].replace(/style="(.*?)"/i, 'style="$1" rel="$1"');
                                t = t.replace(new RegExp(e[n], "gi"), s)
                            } catch (o) {}
                        return t
                    },
                    convertInline: function(e) {
                        var i = t("<div />").html(e),
                            n = this.opts.inlineTags;
                        return n.push("span"), i.find(n.join(",")).each(function() {
                            var e = t(this),
                                i = this.tagName.toLowerCase();
                            e.attr("data-redactor-tag", i), "span" == i && (e.attr("style") ? e.attr("data-redactor-style", e.attr("style")) : e.attr("class") && e.attr("data-redactor-class", e.attr("class")))
                        }), e = i.html(), i.remove(), e
                    },
                    normalizeLists: function() {
                        this.$editor.find("li").each(function(e, i) {
                            var n = t(i).next();
                            0 === n.length || "UL" != n[0].tagName && "OL" != n[0].tagName || t(i).append(n)
                        })
                    },
                    removeSpaces: function(t) {
                        return t = t.replace(/\n/g, ""), t = t.replace(/[\t]*/g, ""), t = t.replace(/\n\s*\n/g, "\n"), t = t.replace(/^[\s\n]*/g, " "), t = t.replace(/[\s\n]*$/g, " "), t = t.replace(/>\s{2,}</g, "> <"), t = t.replace(/\n\n/g, "\n"), t = t.replace(/[\u200B-\u200D\uFEFF]/g, "")
                    },
                    replaceDivs: function(t) {
                        return this.opts.linebreaks ? (t = t.replace(/<div><br\s?\/?><\/div>/gi, "<br />"), t = t.replace(/<div(.*?)>([\w\W]*?)<\/div>/gi, "$2<br />")) : t = t.replace(/<div(.*?)>([\w\W]*?)<\/div>/gi, "<p$1>$2</p>"), t
                    },
                    replaceDivsToBr: function(t) {
                        return t = t.replace(/<div\s(.*?)>/gi, "<p>"), t = t.replace(/<div><br\s?\/?><\/div>/gi, "<br /><br />"), t = t.replace(/<div>([\w\W]*?)<\/div>/gi, "$1<br /><br />")
                    },
                    replaceParagraphsToBr: function(t) {
                        return t = t.replace(/<p\s(.*?)>/gi, "<p>"), t = t.replace(/<p><br\s?\/?><\/p>/gi, "<br />"), t = t.replace(/<p>([\w\W]*?)<\/p>/gi, "$1<br /><br />"), t = t.replace(/(<br\s?\/?>){1,}\n?<\/blockquote>/gi, "</blockquote>")
                    },
                    saveFormTags: function(t) {
                        return t.replace(/<form(.*?)>([\w\W]*?)<\/form>/gi, '<section$1 rel="redactor-form-tag">$2</section>')
                    },
                    restoreFormTags: function(t) {
                        return t.replace(/<section(.*?) rel="redactor-form-tag"(.*?)>([\w\W]*?)<\/section>/gi, "<form$1$2>$3</form>")
                    }
                }
            },
            code: function() {
                return {
                    set: function(e) {
                        e = t.trim(e.toString()), e = this.clean.onSet(e), this.$editor.html(e), this.code.sync(), setTimeout(t.proxy(this.buffer.add, this), 15), this.start === !1 && this.observe.load()
                    },
                    get: function() {
                        var t = this.$textarea.val();
                        return t = this.tabifier.get(t)
                    },
                    sync: function() {
                        setTimeout(t.proxy(this.code.startSync, this), 10)
                    },
                    startSync: function() {
                        var t = this.$editor.html();
                        this.code.syncCode && this.code.syncCode == t || (this.code.syncCode = t, t = this.core.setCallback("syncBefore", t), t = this.clean.onSync(t), this.$textarea.val(t), this.core.setCallback("sync", t), this.start === !1 && this.core.setCallback("change", t), this.start = !1, this.autosave.onChange())
                    },
                    toggle: function() {
                        this.opts.visual ? this.code.showCode() : this.code.showVisual()
                    },
                    showCode: function() {
                        this.code.offset = this.caret.getOffset();
                        var e = t(window).scrollTop(),
                            i = this.$editor.innerHeight();
                        this.$editor.hide();
                        var n = this.$textarea.val();
                        this.modified = this.clean.removeSpaces(n), n = this.tabifier.get(n), this.$textarea.val(n).height(i).show().focus(), this.$textarea.on("keydown.redactor-textarea-indenting", this.code.textareaIndenting), t(window).scrollTop(e), this.$textarea[0].setSelectionRange && this.$textarea[0].setSelectionRange(0, 0), this.$textarea[0].scrollTop = 0, this.opts.visual = !1, this.button.setInactiveInCode(), this.button.setActive("html"), this.core.setCallback("source", n)
                    },
                    showVisual: function() {
                        if (!this.opts.visual) {
                            var t = this.$textarea.hide().val();
                            this.modified !== this.clean.removeSpaces(t) && this.code.set(t), this.$editor.show(), this.utils.isEmpty(t) || this.placeholder.remove(), this.caret.setOffset(this.code.offset), this.$textarea.off("keydown.redactor-textarea-indenting"), this.button.setActiveInVisual(), this.button.setInactive("html"), this.observe.load(), this.opts.visual = !0
                        }
                    },
                    textareaIndenting: function(t) {
                        if (9 !== t.keyCode) return !0;
                        var e = this.$textarea,
                            i = e.get(0).selectionStart;
                        return e.val(e.val().substring(0, i) + "	" + e.val().substring(e.get(0).selectionEnd)), e.get(0).selectionStart = e.get(0).selectionEnd = i + 1, !1
                    }
                }
            },
            core: function() {
                return {
                    getObject: function() {
                        return t.extend({}, this)
                    },
                    getEditor: function() {
                        return this.$editor
                    },
                    getBox: function() {
                        return this.$box
                    },
                    getElement: function() {
                        return this.$element
                    },
                    getTextarea: function() {
                        return this.$textarea
                    },
                    getToolbar: function() {
                        return this.$toolbar ? this.$toolbar : !1
                    },
                    addEvent: function(t) {
                        this.core.event = t
                    },
                    getEvent: function() {
                        return this.core.event
                    },
                    setCallback: function(e, i, n) {
                        var s = this.opts[e + "Callback"];
                        return t.isFunction(s) ? "undefined" == typeof n ? s.call(this, i) : s.call(this, i, n) : "undefined" == typeof n ? i : n
                    },
                    destroy: function() {
                        this.core.setCallback("destroy"), this.$element.off(".redactor").removeData("redactor"), this.$editor.off(".redactor"), this.$editor.removeClass("redactor-editor redactor-linebreaks redactor-placeholder"), this.$editor.removeAttr("contenteditable");
                        var e = this.code.get();
                        this.build.isTextarea() ? (this.$box.after(this.$element), this.$box.remove(), this.$element.val(e).show()) : (this.$box.after(this.$editor), this.$box.remove(), this.$element.html(e).show()), this.$pasteBox && this.$pasteBox.remove(), this.$modalBox && this.$modalBox.remove(), this.$modalOverlay && this.$modalOverlay.remove(), t(".redactor-toolbar-tooltip").remove(), clearInterval(this.autosaveInterval)
                    }
                }
            },
            dropdown: function() {
                return {
                    build: function(e, i, n) {
                        "formatting" == e && this.opts.formattingAdd && t.each(this.opts.formattingAdd, t.proxy(function(t, e) {
                            var i = e.tag;
                            "undefined" != typeof e["class"] && (i = i + "-" + e["class"]), e.type = this.utils.isBlockTag(e.tag) ? "block" : "inline";
                            var s = "inline" == e.type ? "inline.formatting" : "block.formatting";
                            this.opts.linebreaks && "block" == e.type && "p" == e.tag || (this.formatting[i] = {
                                tag: e.tag,
                                style: e.style,
                                "class": e["class"],
                                attr: e.attr,
                                data: e.data
                            }, n[i] = {
                                func: s,
                                title: e.title
                            })
                        }, this)), t.each(n, t.proxy(function(n, s) {
                            var o = t('<a href="#" class="redactor-dropdown-' + n + '">' + s.title + "</a>");
                            "formatting" == e && o.addClass("redactor-formatting-" + n), o.on("click", t.proxy(function(t) {
                                var e = "func",
                                    i = s.func;
                                s.command ? (e = "command", i = s.command) : s.dropdown && (e = "dropdown", i = s.dropdown), this.button.onClick(t, n, e, i)
                            }, this)), i.append(o)
                        }, this))
                    },
                    show: function(e, i) {
                        if (!this.opts.visual) return e.preventDefault(), !1;
                        var n = this.button.get(i),
                            s = n.data("dropdown").appendTo(document.body);
                        if (document.activeElement.blur(), n.hasClass("dropact")) this.dropdown.hideAll();
                        else {
                            this.dropdown.hideAll(), this.core.setCallback("dropdownShow", {
                                dropdown: s,
                                key: i,
                                button: n
                            }), this.button.setActive(i), n.addClass("dropact");
                            var o = n.offset(),
                                a = s.width();
                            o.left + a > t(document).width() && (o.left -= a);
                            var r = o.left + "px";
                            if (this.$toolbar.hasClass("toolbar-fixed-box")) {
                                var l = this.$toolbar.innerHeight() + this.opts.toolbarFixedTopOffset,
                                    c = "fixed";
                                this.opts.toolbarFixedTarget !== document && (l = this.$toolbar.innerHeight() + this.$toolbar.offset().top + this.opts.toolbarFixedTopOffset, c = "absolute"), s.css({
                                    position: c,
                                    left: r,
                                    top: l + "px"
                                }).show()
                            } else {
                                var l = n.innerHeight() + o.top + "px";
                                s.css({
                                    position: "absolute",
                                    left: r,
                                    top: l
                                }).show()
                            }
                            this.core.setCallback("dropdownShown", {
                                dropdown: s,
                                key: i,
                                button: n
                            })
                        }
                        t(document).one("click", t.proxy(this.dropdown.hide, this)), this.$editor.one("click", t.proxy(this.dropdown.hide, this));
                        var h = t(document.body),
                            d = h.width();
                        s.on("mouseover", function() {
                            h.addClass("body-hidden"), h.css("margin-right", h.width() - d + "px")
                        }), s.on("mouseout", function() {
                            h.removeClass("body-hidden").css("margin-right", 0)
                        }), e.stopPropagation()
                    },
                    hideAll: function() {
                        this.$toolbar.find("a.dropact").removeClass("redactor-act").removeClass("dropact"), t(document.body).removeClass("body-hidden").css("margin-right", 0), t(".redactor-dropdown").hide(), this.core.setCallback("dropdownHide")
                    },
                    hide: function(e) {
                        var i = t(e.target);
                        i.hasClass("dropact") || (i.removeClass("dropact"), this.dropdown.hideAll())
                    }
                }
            },
            file: function() {
                return {
                    show: function() {
                        this.modal.load("file", this.lang.get("file"), 700), this.upload.init("#redactor-modal-file-upload", this.opts.fileUpload, this.file.insert), this.selection.save(), this.selection.get();
                        var e = this.sel.toString();
                        t("#redactor-filename").val(e), this.modal.show()
                    },
                    insert: function(e, i, n) {
                        if ("undefined" != typeof e.error) return this.modal.close(), this.selection.restore(), void this.core.setCallback("fileUploadError", e);
                        var s;
                        if ("string" == typeof e) s = e;
                        else {
                            var o = t("#redactor-filename").val();
                            "undefined" != typeof o && "" !== o || (o = e.filename), s = '<a href="' + e.filelink + '" id="filelink-marker">' + o + "</a>"
                        }
                        if (i) {
                            this.selection.removeMarkers();
                            var a = this.selection.getMarker();
                            this.insert.nodeToCaretPositionFromPoint(n, a)
                        } else this.modal.close();
                        if (this.selection.restore(), this.buffer.set(), this.insert.html(s), "string" != typeof e) {
                            var r = t(this.$editor.find("a#filelink-marker"));
                            0 !== r.size() ? r.removeAttr("id") : r = !1, this.core.setCallback("fileUpload", r, e)
                        }
                    }
                }
            },
            focus: function() {
                return {
                    setStart: function() {
                        this.$editor.focus();
                        var t = this.$editor.children().first();
                        if (0 !== t.size() && 0 !== t[0].length && "BR" != t[0].tagName && 3 != t[0].nodeType) {
                            if ("UL" == t[0].tagName || "OL" == t[0].tagName) {
                                t = t.find("li").first();
                                var e = t.children().first();
                                if (!this.utils.isBlock(e) && "" === e.text()) return void this.caret.setStart(e)
                            }
                            return this.opts.linebreaks && !this.utils.isBlockTag(t[0].tagName) ? (this.selection.get(), this.range.setStart(this.$editor[0], 0), this.range.setEnd(this.$editor[0], 0), void this.selection.addRange()) : void this.caret.setStart(t)
                        }
                    },
                    setEnd: function() {
                        if (this.utils.browser("mozilla") || this.utils.browser("msie")) {
                            var t = this.$editor.children().last();
                            this.caret.setEnd(t)
                        } else {
                            this.selection.get();
                            try {
                                this.range.selectNodeContents(this.$editor[0]), this.range.collapse(!1), this.selection.addRange()
                            } catch (e) {}
                        }
                    },
                    isFocused: function() {
                        var e = document.getSelection().focusNode;
                        return null === e ? !1 : this.opts.linebreaks && t(e.parentNode).hasClass("redactor-linebreaks") ? !0 : this.utils.isRedactorParent(e.parentNode) ? this.$editor.is(":focus") : !1
                    }
                }
            },
            image: function() {
                return {
                    show: function() {
                        this.modal.load("image", this.lang.get("image"), 700), this.upload.init("#redactor-modal-image-droparea", this.opts.imageUpload, this.image.insert), this.selection.save(), this.modal.show()
                    },
                    showEdit: function(e) {
                        var i = e.closest("a");
                        if (this.modal.load("imageEdit", this.lang.get("edit"), 705), this.modal.createCancelButton(), this.image.buttonDelete = this.modal.createDeleteButton(this.lang.get("_delete")), this.image.buttonSave = this.modal.createActionButton(this.lang.get("save")), this.image.buttonDelete.on("click", t.proxy(function() {
                                this.image.remove(e)
                            }, this)), this.image.buttonSave.on("click", t.proxy(function() {
                                this.image.update(e)
                            }, this)), t("#redactor-image-title").val(e.attr("alt")), this.opts.imageLink) {
                            var n = t("#redactor-image-link");
                            n.attr("href", e.attr("src")), 0 !== i.size() && (n.val(i.attr("href")), "_blank" == i.attr("target") && t("#redactor-image-link-blank").prop("checked", !0))
                        } else t(".redactor-image-link-option").hide();
                        if (this.opts.imagePosition) {
                            var s = "block" == e.css("display") && "none" == e.css("float") ? "center" : e.css("float");
                            t("#redactor-image-align").val(s)
                        } else t(".redactor-image-position-option").hide();
                        this.modal.show()
                    },
                    setFloating: function(e) {
                        var i = t("#redactor-image-align").val(),
                            n = "",
                            s = "",
                            o = "";
                        switch (i) {
                            case "left":
                                n = "left", o = "0 " + this.opts.imageFloatMargin + " " + this.opts.imageFloatMargin + " 0";
                                break;
                            case "right":
                                n = "right", o = "0 0 " + this.opts.imageFloatMargin + " " + this.opts.imageFloatMargin;
                                break;
                            case "center":
                                s = "block", o = "auto"
                        }
                        e.css({
                            "float": n,
                            display: s,
                            margin: o
                        }), e.attr("rel", e.attr("style"))
                    },
                    update: function(e) {
                        this.image.hideResize(), this.buffer.set();
                        var i = e.closest("a");
                        e.attr("alt", t("#redactor-image-title").val()), this.image.setFloating(e);
                        var n = t.trim(t("#redactor-image-link").val());
                        if ("" !== n) {
                            var s = !!t("#redactor-image-link-blank").prop("checked");
                            if (0 === i.size()) {
                                var o = t('<a href="' + n + '">' + this.utils.getOuterHtml(e) + "</a>");
                                s && o.attr("target", "_blank"), e.replaceWith(o)
                            } else i.attr("href", n), s ? i.attr("target", "_blank") : i.removeAttr("target")
                        } else 0 !== i.size() && i.replaceWith(this.utils.getOuterHtml(e));
                        this.modal.close(), this.observe.images(), this.code.sync()
                    },
                    setEditable: function(e) {
                        this.opts.imageEditable && (e.on("dragstart", t.proxy(this.image.onDrag, this)), e.on("mousedown", t.proxy(this.image.hideResize, this)),
                            e.on("click touchstart", t.proxy(function() {
                                return this.observe.image = e, 0 !== this.$editor.find("#redactor-image-box").size() ? !1 : (this.image.resizer = this.image.loadEditableControls(e), t(document).on("click.redactor-image-resize-hide", t.proxy(this.image.hideResize, this)), this.$editor.on("click.redactor-image-resize-hide", t.proxy(this.image.hideResize, this)), void(this.opts.imageResizable && this.image.resizer.on("mousedown.redactor touchstart.redactor", t.proxy(function(t) {
                                    t.preventDefault(), this.image.resizeHandle = {
                                        x: t.pageX,
                                        y: t.pageY,
                                        el: e,
                                        ratio: e.width() / e.height(),
                                        h: e.height()
                                    }, t = t.originalEvent || t, t.targetTouches && (this.image.resizeHandle.x = t.targetTouches[0].pageX, this.image.resizeHandle.y = t.targetTouches[0].pageY), this.image.startResize()
                                }, this))))
                            }, this)))
                    },
                    startResize: function() {
                        t(document).on("mousemove.redactor-image-resize touchmove.redactor-image-resize", t.proxy(this.image.moveResize, this)), t(document).on("mouseup.redactor-image-resize touchend.redactor-image-resize", t.proxy(this.image.stopResize, this))
                    },
                    moveResize: function(t) {
                        t.preventDefault(), t = t.originalEvent || t;
                        var e = this.image.resizeHandle.h;
                        e += t.targetTouches ? t.targetTouches[0].pageY - this.image.resizeHandle.y : t.pageY - this.image.resizeHandle.y;
                        var i = Math.round(e * this.image.resizeHandle.ratio);
                        50 > e || 100 > i || (this.image.resizeHandle.el.height(e), this.image.resizeHandle.el.width(i), this.code.sync())
                    },
                    stopResize: function() {
                        this.handle = !1, t(document).off(".redactor-image-resize"), this.image.hideResize()
                    },
                    onDrag: function(e) {
                        return 0 !== this.$editor.find("#redactor-image-box").size() ? (e.preventDefault(), !1) : void this.$editor.on("drop.redactor-image-inside-drop", t.proxy(function() {
                            setTimeout(t.proxy(this.image.onDrop, this), 1)
                        }, this))
                    },
                    onDrop: function() {
                        this.image.fixImageSourceAfterDrop(), this.observe.images(), this.$editor.off("drop.redactor-image-inside-drop"), this.clean.clearUnverified(), this.code.sync()
                    },
                    fixImageSourceAfterDrop: function() {
                        this.$editor.find("img[data-save-url]").each(function() {
                            var e = t(this);
                            e.attr("src", e.attr("data-save-url")), e.removeAttr("data-save-url")
                        })
                    },
                    hideResize: function(e) {
                        if (!e || 0 === t(e.target).closest("#redactor-image-box").length) {
                            if (e && "IMG" == e.target.tagName) {
                                var i = t(e.target);
                                i.attr("data-save-url", i.attr("src"))
                            }
                            var n = this.$editor.find("#redactor-image-box");
                            0 !== n.size() && (this.image.editter.remove(), t(this.image.resizer).remove(), n.find("img").css({
                                marginTop: n[0].style.marginTop,
                                marginBottom: n[0].style.marginBottom,
                                marginLeft: n[0].style.marginLeft,
                                marginRight: n[0].style.marginRight
                            }), n.css("margin", ""), n.find("img").css("opacity", ""), n.replaceWith(function() {
                                return t(this).contents()
                            }), t(document).off("click.redactor-image-resize-hide"), this.$editor.off("click.redactor-image-resize-hide"), "undefined" != typeof this.image.resizeHandle && this.image.resizeHandle.el.attr("rel", this.image.resizeHandle.el.attr("style")), this.code.sync())
                        }
                    },
                    loadEditableControls: function(e) {
                        var i = t('<span id="redactor-image-box" data-redactor="verified">');
                        i.css("float", e.css("float")).attr("contenteditable", !1), "auto" != e[0].style.margin ? (i.css({
                            marginTop: e[0].style.marginTop,
                            marginBottom: e[0].style.marginBottom,
                            marginLeft: e[0].style.marginLeft,
                            marginRight: e[0].style.marginRight
                        }), e.css("margin", "")) : i.css({
                            display: "block",
                            margin: "auto"
                        }), e.css("opacity", ".5").after(i), this.image.editter = t('<span id="redactor-image-editter" data-redactor="verified">' + this.lang.get("edit") + "</span>"), this.image.editter.attr("contenteditable", !1), this.image.editter.on("click", t.proxy(function() {
                            this.image.showEdit(e)
                        }, this)), i.append(this.image.editter);
                        var n = this.image.editter.innerWidth();
                        if (this.image.editter.css("margin-left", "-" + n / 2 + "px"), this.opts.imageResizable && !this.utils.isMobile()) {
                            var s = t('<span id="redactor-image-resizer" data-redactor="verified"></span>');
                            return this.utils.isDesktop() || s.css({
                                width: "15px",
                                height: "15px"
                            }), s.attr("contenteditable", !1), i.append(s), i.append(e), s
                        }
                        return i.append(e), !1
                    },
                    remove: function(e) {
                        var i = t(e),
                            n = i.closest("a"),
                            s = i.closest("figure"),
                            o = i.parent();
                        0 !== t("#redactor-image-box").size() && (o = t("#redactor-image-box").parent());
                        var a;
                        0 !== s.size() ? (a = s.next(), s.remove()) : 0 !== n.size() ? (o = n.parent(), n.remove()) : i.remove(), t("#redactor-image-box").remove(), 0 !== s.size() ? this.caret.setStart(a) : this.caret.setStart(o), this.core.setCallback("imageDelete", i[0].src, i), this.modal.close(), this.code.sync()
                    },
                    insert: function(e, i, n) {
                        if ("undefined" != typeof e.error) return this.modal.close(), this.selection.restore(), void this.core.setCallback("imageUploadError", e);
                        var s;
                        "string" == typeof e ? s = t(e).attr("data-redactor-inserted-image", "true") : (s = t("<img>"), s.attr("src", e.filelink).attr("data-redactor-inserted-image", "true"));
                        var o = s,
                            a = this.utils.isCurrentOrParent("P");
                        if (a && (o = t("<blockquote />").append(s)), i) {
                            this.selection.removeMarkers();
                            var r = this.selection.getMarker();
                            this.insert.nodeToCaretPositionFromPoint(n, r)
                        } else this.modal.close();
                        this.selection.restore(), this.buffer.set(), this.insert.html(this.utils.getOuterHtml(o), !1);
                        var l = this.$editor.find("img[data-redactor-inserted-image=true]").removeAttr("data-redactor-inserted-image");
                        a ? l.parent().contents().unwrap().wrap("<p />") : this.opts.linebreaks && l.before("<br>").after("<br>"), "string" != typeof e && this.core.setCallback("imageUpload", l, e)
                    }
                }
            },
            indent: function() {
                return {
                    increase: function() {
                        this.utils.browser("msie") || this.$editor.focus(), this.buffer.set(), this.selection.save();
                        var t = this.selection.getBlock();
                        t && "LI" == t.tagName ? this.indent.increaseLists() : t === !1 && this.opts.linebreaks ? this.indent.increaseText() : this.indent.increaseBlocks(), this.selection.restore(), this.code.sync()
                    },
                    increaseLists: function() {
                        document.execCommand("indent"), this.indent.fixEmptyIndent(), this.clean.normalizeLists(), this.clean.clearUnverified()
                    },
                    increaseBlocks: function() {
                        t.each(this.selection.getBlocks(), t.proxy(function(t, e) {
                            if ("TD" !== e.tagName && "TH" !== e.tagName) {
                                var i = this.utils.getAlignmentElement(e),
                                    n = this.utils.normalize(i.css("margin-left")) + this.opts.indentValue;
                                i.css("margin-left", n + "px")
                            }
                        }, this))
                    },
                    increaseText: function() {
                        var e = this.selection.wrap("div");
                        t(e).attr("data-tagblock", "redactor"), t(e).css("margin-left", this.opts.indentValue + "px")
                    },
                    decrease: function() {
                        this.buffer.set(), this.selection.save();
                        var t = this.selection.getBlock();
                        t && "LI" == t.tagName ? this.indent.decreaseLists() : this.indent.decreaseBlocks(), this.selection.restore(), this.code.sync()
                    },
                    decreaseLists: function() {
                        document.execCommand("outdent");
                        var e = this.selection.getCurrent(),
                            i = t(e).closest("li"),
                            n = i.parent();
                        0 !== i.size() && 0 !== n.size() && "LI" == n[0].tagName && n.after(i), this.indent.fixEmptyIndent(), this.opts.linebreaks || 0 !== i.size() || (document.execCommand("formatblock", !1, "p"), this.$editor.find("ul, ol, blockquote, p").each(t.proxy(this.utils.removeEmpty, this))), this.clean.clearUnverified()
                    },
                    decreaseBlocks: function() {
                        t.each(this.selection.getBlocks(), t.proxy(function(t, e) {
                            var i = this.utils.getAlignmentElement(e),
                                n = this.utils.normalize(i.css("margin-left")) - this.opts.indentValue;
                            0 >= n ? this.opts.linebreaks && "undefined" != typeof i.data("tagblock") ? i.replaceWith(i.html() + "<br />") : (i.css("margin-left", ""), this.utils.removeEmptyAttr(i, "style")) : i.css("margin-left", n + "px")
                        }, this))
                    },
                    fixEmptyIndent: function() {
                        var e = this.selection.getBlock();
                        if (this.range.collapsed && e && "LI" == e.tagName && this.utils.isEmpty(t(e).text())) {
                            var i = t(e);
                            i.find("span").not(".redactor-selection-marker").contents().unwrap(), i.append("<br>")
                        }
                    }
                }
            },
            inline: function() {
                return {
                    formatting: function(t) {
                        var e, i;
                        "undefined" != typeof this.formatting[t].style ? e = "style" : "undefined" != typeof this.formatting[t]["class"] && (e = "class"), e && (i = this.formatting[t][e]), this.inline.format(this.formatting[t].tag, e, i)
                    },
                    format: function(t, e, i) {
                        if (!this.utils.isCurrentOrParent("PRE")) {
                            for (var n = ["b", "bold", "i", "italic", "underline", "strikethrough", "deleted", "superscript", "subscript"], s = ["strong", "strong", "em", "em", "u", "del", "del", "sup", "sub"], o = 0; o < n.length; o++) t == n[o] && (t = s[o]);
                            this.inline.type = e || !1, this.inline.value = i || !1, this.buffer.set(), this.$editor.focus(), this.selection.get(), this.range.collapsed ? this.inline.formatCollapsed(t) : this.inline.formatMultiple(t)
                        }
                    },
                    formatCollapsed: function(e) {
                        var i = this.selection.getCurrent(),
                            n = t(i).closest(e + "[data-redactor-tag=" + e + "]");
                        if (0 !== n.size()) return this.caret.setAfter(n[0]), this.utils.isEmpty(n.text()) && n.remove(), void this.code.sync();
                        var s = t("<" + e + ">").attr("data-verified", "redactor").attr("data-redactor-tag", e);
                        s.html(this.opts.invisibleSpace), s = this.inline.setFormat(s), this.insert.node(s), this.caret.setEnd(s), this.code.sync()
                    },
                    formatMultiple: function(e) {
                        if (this.inline.formatConvert(e), this.selection.save(), document.execCommand("strikethrough"), this.$editor.find("strike").each(t.proxy(function(i, n) {
                                var s = t(n);
                                this.inline.formatRemoveSameChildren(s, e);
                                var o;
                                if (this.inline.type ? (o = t("<span>").attr("data-redactor-tag", e).attr("data-verified", "redactor"), o = this.inline.setFormat(o)) : o = t("<" + e + ">").attr("data-redactor-tag", e).attr("data-verified", "redactor"), s.replaceWith(o.html(s.contents())), "span" == e) {
                                    var a = o.parent();
                                    if (a && "SPAN" == a[0].tagName && "style" == this.inline.type)
                                        for (var r = this.inline.value.split(";"), l = 0; l < r.length; l++) {
                                            if ("" === r[l]) return;
                                            var c = r[l].split(":");
                                            a.css(c[0], ""), this.utils.removeEmptyAttr(a, "style") && a.replaceWith(a.contents())
                                        }
                                }
                            }, this)), "span" != e && this.$editor.find(this.opts.inlineTags.join(", ")).each(t.proxy(function(e, i) {
                                var n = t(i),
                                    s = n.css("text-decoration");
                                "line-through" == s && (n.css("text-decoration", ""), this.utils.removeEmptyAttr(n, "style"))
                            }, this)), "del" != e) {
                            var i = this;
                            this.$editor.find("inline").each(function(t, e) {
                                i.utils.replaceToTag(e, "del")
                            })
                        }
                        this.selection.restore(), this.code.sync()
                    },
                    formatRemoveSameChildren: function(e, i) {
                        e.children(i).each(function() {
                            var e = t(this);
                            e.hasClass("redactor-selection-marker") || e.contents().unwrap()
                        })
                    },
                    formatConvert: function(e) {
                        this.selection.save();
                        var i = "";
                        if ("class" == this.inline.type ? i = "[data-redactor-class=" + this.inline.value + "]" : "style" == this.inline.type && (i = '[data-redactor-style="' + this.inline.value + '"]'), "del" != e) {
                            var n = this;
                            this.$editor.find("del").each(function(t, e) {
                                n.utils.replaceToTag(e, "inline")
                            })
                        }
                        this.$editor.find('[data-redactor-tag="' + e + '"]' + i).each(function() {
                            if ("" !== i || "span" != e || this.tagName.toLowerCase() != e) {
                                var n = t(this);
                                n.replaceWith(t("<strike />").html(n.contents()))
                            }
                        }), this.selection.restore()
                    },
                    setFormat: function(t) {
                        switch (this.inline.type) {
                            case "class":
                                t.hasClass(this.inline.value) ? (t.removeClass(this.inline.value), t.removeAttr("data-redactor-class")) : (t.addClass(this.inline.value), t.attr("data-redactor-class", this.inline.value));
                                break;
                            case "style":
                                t[0].style.cssText = this.inline.value, t.attr("data-redactor-style", this.inline.value)
                        }
                        return t
                    },
                    removeStyle: function() {
                        this.buffer.set();
                        var e = this.selection.getCurrent(),
                            i = this.selection.getInlines();
                        if (this.selection.save(), e && "SPAN" === e.tagName) {
                            var n = t(e);
                            n.removeAttr("style"), 0 === n[0].attributes.length && n.replaceWith(n.contents())
                        }
                        t.each(i, t.proxy(function(e, i) {
                            var n = t(i); - 1 == t.inArray(i.tagName.toLowerCase(), this.opts.inlineTags) || n.hasClass("redactor-selection-marker") || (n.removeAttr("style"), 0 === n[0].attributes.length && n.replaceWith(n.contents()))
                        }, this)), this.selection.restore(), this.code.sync()
                    },
                    removeStyleRule: function(e) {
                        this.buffer.set();
                        var i = this.selection.getParent(),
                            n = this.selection.getInlines();
                        if (this.selection.save(), i && "SPAN" === i.tagName) {
                            var s = t(i);
                            s.css(e, ""), this.utils.removeEmptyAttr(s, "style"), 0 === s[0].attributes.length && s.replaceWith(s.contents())
                        }
                        t.each(n, t.proxy(function(i, n) {
                            var s = t(n); - 1 == t.inArray(n.tagName.toLowerCase(), this.opts.inlineTags) || s.hasClass("redactor-selection-marker") || (s.css(e, ""), this.utils.removeEmptyAttr(s, "style"), 0 === s[0].attributes.length && s.replaceWith(s.contents()))
                        }, this)), this.selection.restore(), this.code.sync()
                    },
                    removeFormat: function() {
                        this.buffer.set();
                        var e = this.selection.getCurrent();
                        this.selection.save(), document.execCommand("removeFormat"), e && "SPAN" === e.tagName && t(e).replaceWith(t(e).contents()), t.each(this.selection.getNodes(), t.proxy(function(e, i) {
                            var n = t(i); - 1 == t.inArray(i.tagName.toLowerCase(), this.opts.inlineTags) || n.hasClass("redactor-selection-marker") || n.replaceWith(n.contents())
                        }, this)), this.selection.restore(), this.code.sync()
                    },
                    toggleClass: function(t) {
                        this.inline.format("span", "class", t)
                    },
                    toggleStyle: function(t) {
                        this.inline.format("span", "style", t)
                    }
                }
            },
            insert: function() {
                return {
                    set: function(e, i) {
                        this.placeholder.remove(), e = this.clean.setVerified(e), "undefined" == typeof i && (e = this.clean.onPaste(e, !1)), this.$editor.html(e), this.selection.remove(), this.focus.setEnd(), this.clean.normalizeLists(), this.code.sync(), this.observe.load(), "undefined" == typeof i && setTimeout(t.proxy(this.clean.clearUnverified, this), 10)
                    },
                    text: function(e) {
                        if (this.placeholder.remove(), e = e.toString(), e = t.trim(e), e = this.clean.getPlainText(e, !1), this.$editor.focus(), this.utils.browser("msie")) this.insert.htmlIe(e);
                        else {
                            this.selection.get(), this.range.deleteContents();
                            var i = document.createElement("div");
                            i.innerHTML = e;
                            for (var n, s, o = document.createDocumentFragment(); n = i.firstChild;) s = o.appendChild(n);
                            if (this.range.insertNode(o), s) {
                                var a = this.range.cloneRange();
                                a.setStartAfter(s), a.collapse(!0), this.sel.removeAllRanges(), this.sel.addRange(a)
                            }
                        }
                        this.code.sync(), this.clean.clearUnverified()
                    },
                    htmlWithoutClean: function(t) {
                        this.insert.html(t, !1)
                    },
                    html: function(e, i) {
                        this.placeholder.remove(), "undefined" == typeof i && (i = !0), this.$editor.focus(), e = this.clean.setVerified(e), i && (e = this.clean.onPaste(e)), this.utils.browser("msie") ? this.insert.htmlIe(e) : (this.clean.singleLine ? this.insert.execHtml(e) : document.execCommand("insertHTML", null, e), this.insert.htmlFixMozilla()), this.clean.normalizeLists(), this.opts.linebreaks || this.$editor.find("p").each(t.proxy(this.utils.removeEmpty, this)), this.code.sync(), this.observe.load(), i && this.clean.clearUnverified()
                    },
                    htmlFixMozilla: function() {
                        if (this.utils.browser("mozilla")) {
                            var e = t(this.selection.getBlock()).next();
                            e.length > 0 && "P" == e[0].tagName && "" === e.html() && e.remove()
                        }
                    },
                    htmlIe: function(e) {
                        if (this.utils.isIe11()) {
                            var i = this.utils.isCurrentOrParent("P"),
                                n = t("<div>").append(e),
                                s = n.contents().is("p, :header, dl, ul, ol, div, table, td, blockquote, pre, address, section, header, footer, aside, article");
                            return void(i && s ? this.insert.ie11FixInserting(i, e) : this.insert.ie11PasteFrag(e))
                        }
                        document.selection.createRange().pasteHTML(e)
                    },
                    execHtml: function(t) {
                        t = this.clean.setVerified(t), this.selection.get(), this.range.deleteContents();
                        var e = document.createElement("div");
                        e.innerHTML = t;
                        for (var i, n, s = document.createDocumentFragment(); i = e.firstChild;) n = s.appendChild(i);
                        this.range.insertNode(s), this.range.collapse(!0), this.caret.setAfter(n)
                    },
                    node: function(e, i) {
                        e = e[0] || e;
                        var n = this.utils.getOuterHtml(e);
                        return n = this.clean.setVerified(n), e = t(n)[0], this.selection.get(), i !== !1 && this.range.deleteContents(), this.range.insertNode(e), this.range.collapse(!1), this.selection.addRange(), e
                    },
                    nodeToPoint: function(t, e, i) {
                        t = t[0] || t, this.selection.get();
                        var n;
                        if (document.caretPositionFromPoint) {
                            var s = document.caretPositionFromPoint(e, i);
                            this.range.setStart(s.offsetNode, s.offset), this.range.collapse(!0), this.range.insertNode(t)
                        } else if (document.caretRangeFromPoint) n = document.caretRangeFromPoint(e, i), n.insertNode(t);
                        else if ("undefined" != typeof document.body.createTextRange) {
                            n = document.body.createTextRange(), n.moveToPoint(e, i);
                            var o = n.duplicate();
                            o.moveToPoint(e, i), n.setEndPoint("EndToEnd", o), n.select()
                        }
                    },
                    nodeToCaretPositionFromPoint: function(t, e) {
                        e = e[0] || e;
                        var i, n = t.clientX,
                            s = t.clientY;
                        if (document.caretPositionFromPoint) {
                            var o = document.caretPositionFromPoint(n, s),
                                a = document.getSelection();
                            i = a.getRangeAt(0), i.setStart(o.offsetNode, o.offset), i.collapse(!0), i.insertNode(e)
                        } else if (document.caretRangeFromPoint) i = document.caretRangeFromPoint(n, s), i.insertNode(e);
                        else if ("undefined" != typeof document.body.createTextRange) {
                            i = document.body.createTextRange(), i.moveToPoint(n, s);
                            var r = i.duplicate();
                            r.moveToPoint(n, s), i.setEndPoint("EndToEnd", r), i.select()
                        }
                    },
                    ie11FixInserting: function(e, i) {
                        var n = document.createElement("span");
                        n.className = "redactor-ie-paste", this.insert.node(n);
                        var s = t(e).html();
                        s = "<p>" + s.replace(/<span class="redactor-ie-paste"><\/span>/gi, "</p>" + i + "<p>") + "</p>", t(e).replaceWith(s)
                    },
                    ie11PasteFrag: function(t) {
                        this.selection.get(), this.range.deleteContents();
                        var e = document.createElement("div");
                        e.innerHTML = t;
                        for (var i, n, s = document.createDocumentFragment(); i = e.firstChild;) n = s.appendChild(i);
                        this.range.insertNode(s)
                    }
                }
            },
            keydown: function() {
                return {
                    init: function(e) {
                        if (!this.rtePaste) {
                            var i = e.which,
                                n = i >= 37 && 40 >= i;
                            this.keydown.ctrl = e.ctrlKey || e.metaKey, this.keydown.current = this.selection.getCurrent(), this.keydown.parent = this.selection.getParent(), this.keydown.block = this.selection.getBlock(), this.keydown.pre = this.utils.isTag(this.keydown.current, "pre"), this.keydown.blockquote = this.utils.isTag(this.keydown.current, "blockquote"), this.keydown.figcaption = this.utils.isTag(this.keydown.current, "figcaption"), this.shortcuts.init(e, i), this.keydown.checkEvents(n, i), this.keydown.setupBuffer(e, i), this.keydown.addArrowsEvent(n), this.keydown.setupSelectAll(e, i);
                            var s = this.core.setCallback("keydown", e);
                            if (s === !1) return e.preventDefault(), !1;
                            if (this.opts.enterKey && i === this.keyCode.DOWN && this.keydown.onArrowDown(), !this.opts.enterKey && i === this.keyCode.ENTER) return e.preventDefault(), void(this.range.collapsed || this.range.deleteContents());
                            if (i == this.keyCode.ENTER && !e.shiftKey && !e.ctrlKey && !e.metaKey) {
                                var o = this.core.setCallback("enter", e);
                                if (o === !1) return e.preventDefault(), !1;
                                if (this.keydown.blockquote && this.keydown.exitFromBlockquote(e) === !0) return !1;
                                var a, r;
                                if (this.keydown.pre) return this.keydown.insertNewLine(e);
                                if (this.keydown.blockquote || this.keydown.figcaption) return a = this.selection.getCurrent(), r = t(a).next(), 0 !== r.size() && "BR" == r[0].tagName ? this.keydown.insertBreakLine(e) : this.utils.isEndOfElement() && a && "SPAN" != a ? this.keydown.insertDblBreakLine(e) : this.keydown.insertBreakLine(e);
                                if (this.opts.linebreaks && !this.keydown.block) return a = this.selection.getCurrent(), r = t(this.keydown.current).next(), a !== !1 && t(a).hasClass("redactor-invisible-space") ? (t(a).remove(), this.keydown.insertDblBreakLine(e)) : 0 === r.length && a === !1 && "undefined" != typeof r.context ? this.keydown.insertDblBreakLine(e) : this.keydown.insertBreakLine(e);
                                if (this.opts.linebreaks && this.keydown.block) setTimeout(t.proxy(this.keydown.replaceDivToBreakLine, this), 1);
                                else if (!this.opts.linebreaks && this.keydown.block && "LI" !== this.keydown.block.tagName) setTimeout(t.proxy(this.keydown.replaceDivToParagraph, this), 1);
                                else if (!this.opts.linebreaks && !this.keydown.block) return this.keydown.insertParagraph(e)
                            }
                            if (i === this.keyCode.ENTER && (e.ctrlKey || e.shiftKey)) return this.keydown.onShiftEnter(e);
                            if (i === this.keyCode.TAB || e.metaKey && 221 === i || e.metaKey && 219 === i) return this.keydown.onTab(e, i);
                            if (i === this.keyCode.BACKSPACE || i === this.keyCode.DELETE) {
                                var l = this.selection.getNodes();
                                if (l)
                                    for (var c, h = l.length, d = 0; h > d; d++) {
                                        var u = t(l[d]).children("img");
                                        if (0 !== u.size()) {
                                            var f = this;
                                            t.each(u, function(e, i) {
                                                var n = t(i);
                                                "none" == n.css("float") && (f.core.setCallback("imageDelete", i.src, n), c = i)
                                            })
                                        } else "IMG" == l[d].tagName && c != l[d] && (this.core.setCallback("imageDelete", l[d].src, t(l[d])), c = l[d])
                                    }
                            }
                            i === this.keyCode.BACKSPACE && (this.keydown.removeInvisibleSpace(), this.keydown.removeEmptyListInTable(e)), this.code.sync()
                        }
                    },
                    checkEvents: function(t, e) {
                        t || "click" != this.core.getEvent() && "arrow" != this.core.getEvent() || (this.core.addEvent(!1), this.keydown.checkKeyEvents(e) && this.buffer.set())
                    },
                    checkKeyEvents: function(e) {
                        var i = this.keyCode,
                            n = [i.BACKSPACE, i.DELETE, i.ENTER, i.SPACE, i.ESC, i.TAB, i.CTRL, i.META, i.ALT, i.SHIFT];
                        return -1 == t.inArray(e, n)
                    },
                    addArrowsEvent: function(t) {
                        return t ? "click" == this.core.getEvent() || "arrow" == this.core.getEvent() ? void this.core.addEvent(!1) : void this.core.addEvent("arrow") : void 0
                    },
                    setupBuffer: function(t, e) {
                        return this.keydown.ctrl && 90 === e && !t.shiftKey && !t.altKey && this.opts.buffer.length ? (t.preventDefault(), void this.buffer.undo()) : this.keydown.ctrl && 90 === e && t.shiftKey && !t.altKey && 0 !== this.opts.rebuffer.length ? (t.preventDefault(), void this.buffer.redo()) : void(this.keydown.ctrl || e != this.keyCode.BACKSPACE && e != this.keyCode.DELETE && (e != this.keyCode.ENTER || t.ctrlKey || t.shiftKey) && e != this.keyCode.SPACE || this.buffer.set())
                    },
                    setupSelectAll: function(t, e) {
                        this.keydown.ctrl && 65 === e ? this.utils.enableSelectAll() : e == this.keyCode.LEFT_WIN || this.keydown.ctrl || this.utils.disableSelectAll()
                    },
                    onArrowDown: function() {
                        for (var t = [this.keydown.blockquote, this.keydown.pre, this.keydown.figcaption], e = 0; e < t.length; e++)
                            if (t[e]) return this.keydown.insertAfterLastElement(t[e]), !1
                    },
                    onShiftEnter: function(t) {
                        return this.buffer.set(), this.keydown.blockquote && this.utils.isEndOfElement() ? this.keydown.insertDblBreakLine(t) : this.keydown.insertBreakLine(t)
                    },
                    onTab: function(t, e) {
                        if (!this.opts.tabFocus) return !0;
                        if (this.utils.isEmpty(this.code.get()) && this.opts.tabAsSpaces === !1) return !0;
                        t.preventDefault();
                        var i;
                        return this.keydown.pre && !t.shiftKey ? (i = this.opts.preSpaces ? document.createTextNode(Array(this.opts.preSpaces + 1).join("\xa0")) : document.createTextNode("	"), this.insert.node(i), this.code.sync()) : this.opts.tabAsSpaces !== !1 ? (i = document.createTextNode(Array(this.opts.tabAsSpaces + 1).join("\xa0")), this.insert.node(i), this.code.sync()) : t.metaKey && 219 === e ? this.indent.decrease() : t.metaKey && 221 === e ? this.indent.increase() : t.shiftKey ? this.indent.decrease() : this.indent.increase(), !1
                    },
                    replaceDivToBreakLine: function() {
                        var e = this.selection.getBlock(),
                            i = e.innerHTML.replace(/<br\s?\/?>/gi, "");
                        if (("DIV" === e.tagName || "P" === e.tagName) && "" === i && !t(e).hasClass("redactor-editor")) {
                            var n = document.createElement("br");
                            return t(e).replaceWith(n), this.caret.setBefore(n), this.code.sync(), !1
                        }
                    },
                    replaceDivToParagraph: function() {
                        var e = this.selection.getBlock(),
                            i = e.innerHTML.replace(/<br\s?\/?>/gi, "");
                        if ("DIV" === e.tagName && "" === i && !t(e).hasClass("redactor-editor")) {
                            var n = document.createElement("p");
                            return n.innerHTML = this.opts.invisibleSpace, t(e).replaceWith(n), this.caret.setStart(n), this.code.sync(), !1
                        }
                        this.opts.cleanStyleOnEnter && "P" == e.tagName && t(e).removeAttr("class").removeAttr("style")
                    },
                    insertParagraph: function(t) {
                        t.preventDefault(), this.selection.get();
                        var e = document.createElement("p");
                        return e.innerHTML = this.opts.invisibleSpace, this.range.deleteContents(), this.range.insertNode(e), this.caret.setStart(e), this.code.sync(), !1
                    },
                    exitFromBlockquote: function(e) {
                        if (this.utils.isEndOfElement()) {
                            var i = t.trim(t(this.keydown.block).html());
                            if (-1 != i.search(/(<br\s?\/?>){2}$/i)) {
                                if (e.preventDefault(), this.opts.linebreaks) {
                                    var n = document.createElement("br");
                                    t(this.keydown.blockquote).after(n), this.caret.setBefore(n), t(this.keydown.block).html(i.replace(/<br\s?\/?>$/i, ""))
                                } else {
                                    var s = t(this.opts.emptyHtml);
                                    t(this.keydown.blockquote).after(s), this.caret.setStart(s)
                                }
                                return !0
                            }
                        }
                    },
                    insertAfterLastElement: function(e) {
                        if (this.utils.isEndOfElement())
                            if (this.buffer.set(), this.opts.linebreaks) {
                                var i = t("<div>").append(t.trim(this.$editor.html())).contents(),
                                    n = i.last()[0];
                                if ("SPAN" == n.tagName && "" === n.innerHTML && (n = i.prev()[0]), this.utils.getOuterHtml(n) != this.utils.getOuterHtml(e)) return;
                                var s = document.createElement("br");
                                t(e).after(s), this.caret.setAfter(s)
                            } else {
                                if (this.$editor.contents().last()[0] !== e) return;
                                var o = t(this.opts.emptyHtml);
                                t(e).after(o), this.caret.setStart(o)
                            }
                    },
                    insertNewLine: function(t) {
                        t.preventDefault();
                        var e = document.createTextNode("\n");
                        return this.selection.get(), this.range.deleteContents(), this.range.insertNode(e), this.caret.setAfter(e), this.code.sync(), !1
                    },
                    insertBreakLine: function(t) {
                        return this.keydown.insertBreakLineProcessing(t)
                    },
                    insertDblBreakLine: function(t) {
                        return this.keydown.insertBreakLineProcessing(t, !0)
                    },
                    insertBreakLineProcessing: function(t, e) {
                        t.stopPropagation(), this.selection.get();
                        var i = document.createElement("br");
                        if (this.range.deleteContents(), this.range.insertNode(i), e === !0) {
                            var n = document.createElement("br");
                            this.range.insertNode(n), this.caret.setAfter(n)
                        } else this.caret.setAfter(i);
                        return this.code.sync(), !1
                    },
                    removeInvisibleSpace: function() {
                        var e = t(this.keydown.current);
                        0 === e.text().search(/^\u200B$/g) && e.remove()
                    },
                    removeEmptyListInTable: function(e) {
                        var i = t(this.keydown.current),
                            n = t(this.keydown.parent),
                            s = i.closest("td");
                        if (0 !== s.size() && i.closest("li") && 1 === n.children("li").size()) {
                            if (!this.utils.isEmpty(i.text())) return;
                            e.preventDefault(), i.remove(), n.remove(), this.caret.setStart(s)
                        }
                    }
                }
            },
            keyup: function() {
                return {
                    init: function(e) {
                        if (!this.rtePaste) {
                            var i = e.which;
                            this.keyup.current = this.selection.getCurrent(), this.keyup.parent = this.selection.getParent();
                            var n = this.utils.isRedactorParent(t(this.keyup.parent).parent()),
                                s = this.core.setCallback("keyup", e);
                            return s === !1 ? (e.preventDefault(), !1) : (!this.opts.linebreaks && 3 == this.keyup.current.nodeType && this.keyup.current.length <= 1 && (this.keyup.parent === !1 || "BODY" == this.keyup.parent.tagName) && this.keyup.replaceToParagraph(), this.opts.linebreaks || !t(this.keyup.parent).hasClass("redactor-invisible-space") || n !== !1 && "BODY" != n[0].tagName || (t(this.keyup.parent).contents().unwrap(), this.keyup.replaceToParagraph()), this.opts.convertLinks && (this.opts.convertUrlLinks || this.opts.convertImageLinks || this.opts.convertVideoLinks) && i === this.keyCode.ENTER && (this.formatLinkify(this.opts.linkProtocol, this.opts.convertLinks, this.opts.convertUrlLinks, this.opts.convertImageLinks, this.opts.convertVideoLinks, this.opts.linkSize), this.observe.load(), this.code.sync()), i === this.keyCode.DELETE || i === this.keyCode.BACKSPACE ? (this.clean.clearUnverified(), this.observe.image ? (e.preventDefault(), this.image.hideResize(), this.buffer.set(), this.image.remove(this.observe.image), this.observe.image = !1, !1) : (this.$editor.find("p").each(t.proxy(this.utils.removeEmpty, this)), this.keyup.current && "DIV" == this.keyup.current.tagName && this.utils.isEmpty(this.keyup.current.innerHTML) && this.opts.linebreaks && (t(this.keyup.current).after(this.selection.getMarkerAsHtml()), this.selection.restore(), t(this.keyup.current).remove()), this.keyup.formatEmpty(e))) : void 0)
                        }
                    },
                    replaceToParagraph: function() {
                        var e = t(this.keyup.current),
                            i = t("<p>").append(e.clone());
                        e.replaceWith(i);
                        var n = t(i).next();
                        "undefined" != typeof n[0] && "BR" == n[0].tagName && n.remove(), this.caret.setEnd(i)
                    },
                    formatEmpty: function(e) {
                        var i = t.trim(this.$editor.html());
                        if (this.utils.isEmpty(i)) return e.preventDefault(), this.opts.linebreaks ? (this.$editor.html(this.selection.getMarkerAsHtml()), this.selection.restore()) : (i = "<p><br /></p>", this.$editor.html(i), this.focus.setStart()), this.code.sync(), !1
                    }
                }
            },
            lang: function() {
                return {
                    load: function() {
                        this.opts.curLang = this.opts.langs[this.opts.lang]
                    },
                    get: function(t) {
                        return "undefined" != typeof this.opts.curLang[t] ? this.opts.curLang[t] : ""
                    }
                }
            },
            line: function() {
                return {
                    insert: function() {
                        this.buffer.set();
                        var t = this.selection.getBlocks();
                        return t[0] !== !1 && this.line.isExceptLastOrFirst(t) ? void(this.utils.browser("msie") || this.$editor.focus()) : void(this.utils.browser("msie") ? this.line.insertInIe() : this.line.insertInOthersBrowsers())
                    },
                    isExceptLastOrFirst: function(e) {
                        var i = ["li", "td", "th", "blockquote", "figcaption", "pre", "dl", "dt", "dd"],
                            n = e[0].tagName.toLowerCase(),
                            s = this.selection.getLastBlock();
                        s = "undefined" == typeof s ? n : s.tagName.toLowerCase();
                        var o = -1 != t.inArray(n, i),
                            a = -1 != t.inArray(s, i);
                        return o && a || o ? !0 : void 0
                    },
                    insertInIe: function() {
                        this.utils.saveScroll(), this.buffer.set(), this.insert.node(document.createElement("hr")), this.utils.restoreScroll(), this.code.sync()
                    },
                    insertInOthersBrowsers: function() {
                        this.buffer.set();
                        var t = '<p id="redactor-insert-line"><br /></p>';
                        this.opts.linebreaks && (t = '<br id="redactor-insert-line">'), document.execCommand("insertHTML", !1, "<hr>" + t), this.line.setFocus(), this.code.sync()
                    },
                    setFocus: function() {
                        var e = this.$editor.find("#redactor-insert-line"),
                            i = t(e).next()[0];
                        i ? (this.caret.setAfter(e), e.remove()) : e.removeAttr("id")
                    }
                }
            },
            link: function() {
                return {
                    show: function(e) {
                        "undefined" != typeof e && e.preventDefault && e.preventDefault(), this.modal.load("link", this.lang.get("link_insert"), 600), this.modal.createCancelButton(), this.link.buttonInsert = this.modal.createActionButton(this.lang.get("insert")), this.selection.get(), this.link.getData(), this.link.cleanUrl(), "_blank" == this.link.target && t("#redactor-link-blank").prop("checked", !0), this.link.$inputUrl = t("#redactor-link-url"), this.link.$inputText = t("#redactor-link-url-text"), this.link.$inputText.val(this.link.text), this.link.$inputUrl.val(this.link.url), this.link.buttonInsert.on("click", t.proxy(this.link.insert, this)), t(".redactor-link-tooltip").remove(), this.selection.save(), this.modal.show(), this.link.$inputUrl.focus()
                    },
                    cleanUrl: function() {
                        var t = self.location.href.replace(/\/$/i, "");
                        if (this.link.url = this.link.url.replace(t, ""), this.link.url = this.link.url.replace(/^\/#/, "#"), this.link.url = this.link.url.replace("mailto:", ""), !this.opts.linkProtocol) {
                            var e = new RegExp("^(http|ftp|https)://" + self.location.host, "i");
                            this.link.url = this.link.url.replace(e, "")
                        }
                    },
                    getData: function() {
                        this.link.$node = !1;
                        var e = t(this.selection.getCurrent()).closest("a");
                        0 !== e.size() && "A" === e[0].tagName ? (this.link.$node = e, this.link.url = e.attr("href"), this.link.text = e.text(), this.link.target = e.attr("target")) : (this.link.text = this.sel.toString(), this.link.url = "", this.link.target = "")
                    },
                    insert: function() {
                        var e = "",
                            i = this.link.$inputUrl.val(),
                            n = this.link.$inputText.val();
                        if ("" === t.trim(i)) return void this.link.$inputUrl.addClass("redactor-input-error").on("keyup", function() {
                            t(this).removeClass("redactor-input-error"), t(this).off("keyup")
                        });
                        if (-1 != i.search("@") && /(http|ftp|https):\/\//i.test(i) === !1) i = "mailto:" + i;
                        else if (0 !== i.search("#")) {
                            t("#redactor-link-blank").prop("checked") && (e = "_blank");
                            var s = "((xn--)?[a-z0-9]+(-[a-z0-9]+)*\\.)+[a-z]{2,}",
                                o = new RegExp("^(http|ftp|https)://" + s, "i"),
                                a = new RegExp("^" + s, "i"); - 1 == i.search(o) && 0 === i.search(a) && this.opts.linkProtocol && (i = this.opts.linkProtocol + "://" + i)
                        }
                        this.link.set(n, i, e), this.modal.close()
                    },
                    set: function(e, i, n) {
                        if (e = t.trim(e.replace(/<|>/g, "")), this.selection.restore(), "" !== e || "" !== i) {
                            if ("" === e && "" !== i && (e = i), this.link.$node) this.buffer.set(), this.link.$node.text(e).attr("href", i), "" !== n ? this.link.$node.attr("target", n) : this.link.$node.removeAttr("target"), this.code.sync();
                            else {
                                if (this.utils.browser("mozilla") && "" === this.link.text) {
                                    var s = t("<a />").attr("href", i).text(e);
                                    "" !== n && s.attr("target", n), this.insert.node(s), this.selection.selectElement(s)
                                } else {
                                    var s;
                                    this.utils.browser("msie") ? (s = t('<a href="' + i + '">').text(e), "" !== n && s.attr("target", n), s = t(this.insert.node(s)), this.selection.selectElement(s)) : (document.execCommand("createLink", !1, i), s = t(this.selection.getCurrent()).closest("a"), "" !== n && s.attr("target", n), s.removeAttr("style"), "" === this.link.text && (s.text(e), this.selection.selectElement(s)))
                                }
                                this.code.sync(), this.core.setCallback("insertedLink", s)
                            }
                            setTimeout(t.proxy(function() {
                                this.observe.links()
                            }, this), 5)
                        }
                    },
                    unlink: function(e) {
                        "undefined" != typeof e && e.preventDefault && e.preventDefault();
                        var i = this.selection.getNodes();
                        if (i) {
                            this.buffer.set();
                            for (var n = i.length, s = 0; n > s; s++)
                                if ("A" == i[s].tagName) {
                                    var o = t(i[s]);
                                    o.replaceWith(o.contents())
                                } t(".redactor-link-tooltip").remove(), this.code.sync()
                        }
                    }
                }
            },
            list: function() {
                return {
                    toggle: function(e) {
                        this.utils.browser("msie") || this.$editor.focus(), this.buffer.set(), this.selection.save();
                        var i = this.selection.getParent(),
                            n = t(i).closest("ol, ul");
                        this.utils.isRedactorParent(n) || 0 === n.size() || (n = !1);
                        var s, o, a = !1;
                        if (n && n.length) {
                            a = !0;
                            var r = n[0].tagName;
                            s = "orderedlist" === e && "UL" === r, o = "unorderedlist" === e && "OL" === r
                        }
                        s ? this.utils.replaceToTag(n, "ol") : o ? this.utils.replaceToTag(n, "ul") : a ? this.list.remove(e) : this.list.insert(e), this.selection.restore(), this.code.sync()
                    },
                    insert: function(e) {
                        this.utils.browser("msie") && this.opts.linebreaks ? this.list.insertInIe(e) : document.execCommand("insert" + e);
                        var i = this.selection.getParent(),
                            n = t(i).closest("ol, ul");
                        if (this.utils.isEmpty(n.find("li").text())) {
                            var s = n.children("li");
                            s.find("br").remove(), s.append(this.selection.getMarkerAsHtml())
                        }
                        if (n.length) {
                            var o = n.parent();
                            this.utils.isRedactorParent(o) && "LI" != o[0].tagName && this.utils.isBlock(o[0]) && o.replaceWith(o.contents())
                        }
                        this.utils.browser("msie") || this.$editor.focus(), this.clean.clearUnverified()
                    },
                    insertInIe: function(e) {
                        var i = this.selection.wrap("div"),
                            n = t(i).html(),
                            s = t("orderedlist" == e ? "<ol>" : "<ul>"),
                            o = t("<li>");
                        if ("" === t.trim(n)) o.append(this.selection.getMarkerAsHtml()), s.append(o), this.$editor.find("#selection-marker-1").replaceWith(s);
                        else {
                            var a = n.split(/<br\s?\/?>/gi);
                            if (a)
                                for (var r = 0; r < a.length; r++) "" !== t.trim(a[r]) && s.append(t("<li>").html(a[r]));
                            else o.append(n), s.append(o);
                            t(i).replaceWith(s)
                        }
                    },
                    remove: function(e) {
                        document.execCommand("insert" + e);
                        var i = t(this.selection.getCurrent());
                        this.indent.fixEmptyIndent(), this.opts.linebreaks || 0 !== i.closest("li, th, td").size() || (document.execCommand("formatblock", !1, "p"), this.$editor.find("ul, ol, blockquote").each(t.proxy(this.utils.removeEmpty, this)));
                        var n = t(this.selection.getCurrent()).closest("table"),
                            s = n.prev();
                        this.opts.linebreaks || 0 === n.size() || 0 === s.size() || "BR" != s[0].tagName || s.remove(), this.clean.clearUnverified()
                    }
                }
            },
            modal: function() {
                return {
                    callbacks: {},
                    loadTemplates: function() {
                        this.opts.modal = {
                            imageEdit: String() + '<section id="redactor-modal-image-edit"><label>' + this.lang.get("title") + '</label><input type="text" id="redactor-image-title" /><label class="redactor-image-link-option">' + this.lang.get("link") + '</label><input type="text" id="redactor-image-link" class="redactor-image-link-option" /><label class="redactor-image-link-option"><input type="checkbox" id="redactor-image-link-blank"> ' + this.lang.get("link_new_tab") + '</label><label class="redactor-image-position-option">' + this.lang.get("image_position") + '</label><select class="redactor-image-position-option" id="redactor-image-align"><option value="none">' + this.lang.get("none") + '</option><option value="left">' + this.lang.get("left") + '</option><option value="center">' + this.lang.get("center") + '</option><option value="right">' + this.lang.get("right") + "</option></select></section>",
                            image: String() + '<section id="redactor-modal-image-insert"><div id="redactor-modal-image-droparea"></div></section>',
                            file: String() + '<section id="redactor-modal-file-insert"><div id="redactor-modal-file-upload-box"><label>' + this.lang.get("filename") + '</label><input type="text" id="redactor-filename" /><br><br><div id="redactor-modal-file-upload"></div></div></section>',
                            link: String() + '<section id="redactor-modal-link-insert"><label>URL</label><input type="url" id="redactor-link-url" /><label>' + this.lang.get("text") + '</label><input type="text" id="redactor-link-url-text" /><label><input type="checkbox" id="redactor-link-blank"> ' + this.lang.get("link_new_tab") + "</label></section>"
                        }, t.extend(this.opts, this.opts.modal)
                    },
                    addCallback: function(t, e) {
                        this.modal.callbacks[t] = e
                    },
                    createTabber: function(e) {
                        this.modal.$tabber = t("<div>").attr("id", "redactor-modal-tabber"), e.prepend(this.modal.$tabber)
                    },
                    addTab: function(e, i, n) {
                        var s = t('<a href="#" rel="tab' + e + '">').text(i);
                        n && s.addClass("active");
                        var o = this;
                        s.on("click", function(e) {
                            e.preventDefault(), t(".redactor-tab").hide(), t(".redactor-" + t(this).attr("rel")).show(), o.modal.$tabber.find("a").removeClass("active"), t(this).addClass("active")
                        }), this.modal.$tabber.append(s)
                    },
                    addTemplate: function(t, e) {
                        this.opts.modal[t] = e
                    },
                    getTemplate: function(t) {
                        return this.opts.modal[t]
                    },
                    getModal: function() {
                        return this.$modalBody.find("section")
                    },
                    load: function(t, e, i) {
                        this.modal.templateName = t, this.modal.width = i, this.modal.build(), this.modal.enableEvents(), this.modal.setTitle(e), this.modal.setDraggable(), this.modal.setContent(), "undefined" != typeof this.modal.callbacks[t] && this.modal.callbacks[t].call(this)
                    },
                    show: function() {
                        document.activeElement.blur(), t(document.body).removeClass("body-hidden"), this.modal.bodyOveflow = t(document.body).css("overflow"), t(document.body).css("overflow", "hidden"), this.utils.isMobile() ? this.modal.showOnMobile() : this.modal.showOnDesktop(), this.$modalOverlay.show(), this.$modalBox.show(), this.modal.setButtonsWidth(), this.utils.saveScroll(), this.utils.isMobile() || (setTimeout(t.proxy(this.modal.showOnDesktop, this), 0), t(window).on("resize.redactor-modal", t.proxy(this.modal.resize, this))), this.core.setCallback("modalOpened", this.modal.templateName, this.$modal), t(document).off("focusin.modal"), this.$modal.find("input[type=text]").on("keydown.redactor-modal", t.proxy(this.modal.setEnter, this))
                    },
                    showOnDesktop: function() {
                        var e = this.$modal.outerHeight(),
                            i = t(window).height(),
                            n = t(window).width();
                        return this.modal.width > n ? void this.$modal.css({
                            width: "96%",
                            marginTop: i / 2 - e / 2 + "px"
                        }) : void(e > i ? this.$modal.css({
                            width: this.modal.width + "px",
                            marginTop: "20px"
                        }) : this.$modal.css({
                            width: this.modal.width + "px",
                            marginTop: i / 2 - e / 2 + "px"
                        }))
                    },
                    showOnMobile: function() {
                        this.$modal.css({
                            width: "96%",
                            marginTop: "2%"
                        })
                    },
                    resize: function() {
                        this.utils.isMobile() ? this.modal.showOnMobile() : this.modal.showOnDesktop()
                    },
                    setTitle: function(t) {
                        this.$modalHeader.html(t)
                    },
                    setContent: function() {
                        this.$modalBody.html(this.modal.getTemplate(this.modal.templateName))
                    },
                    setDraggable: function() {
                        "undefined" != typeof t.fn.draggable && (this.$modal.draggable({
                            handle: this.$modalHeader
                        }), this.$modalHeader.css("cursor", "move"))
                    },
                    setEnter: function(t) {
                        13 == t.which && (t.preventDefault(), this.$modal.find("button.redactor-modal-action-btn").click())
                    },
                    createCancelButton: function() {
                        var e = t("<button>").addClass("redactor-modal-btn redactor-modal-close-btn").html(this.lang.get("cancel"));
                        e.on("click", t.proxy(this.modal.close, this)), this.$modalFooter.append(e)
                    },
                    createDeleteButton: function(t) {
                        return this.modal.createButton(t, "delete")
                    },
                    createActionButton: function(t) {
                        return this.modal.createButton(t, "action")
                    },
                    createButton: function(e, i) {
                        var n = t("<button>").addClass("redactor-modal-btn").addClass("redactor-modal-" + i + "-btn").html(e);
                        return this.$modalFooter.append(n), n
                    },
                    setButtonsWidth: function() {
                        var t = this.$modalFooter.find("button"),
                            e = t.size();
                        0 !== e && t.css("width", 100 / e + "%")
                    },
                    build: function() {
                        this.modal.buildOverlay(), this.$modalBox = t('<div id="redactor-modal-box" />').hide(), this.$modal = t('<div id="redactor-modal" />'), this.$modalHeader = t("<header />"), this.$modalClose = t('<span id="redactor-modal-close" />').html("&times;"), this.$modalBody = t('<div id="redactor-modal-body" />'), this.$modalFooter = t("<footer />"), this.$modal.append(this.$modalHeader), this.$modal.append(this.$modalClose), this.$modal.append(this.$modalBody), this.$modal.append(this.$modalFooter), this.$modalBox.append(this.$modal), this.$modalBox.appendTo(document.body)
                    },
                    buildOverlay: function() {
                        this.$modalOverlay = t('<div id="redactor-modal-overlay">').hide(), t("body").prepend(this.$modalOverlay)
                    },
                    enableEvents: function() {
                        this.$modalClose.on("click.redactor-modal", t.proxy(this.modal.close, this)), t(document).on("keyup.redactor-modal", t.proxy(this.modal.closeHandler, this)), this.$editor.on("keyup.redactor-modal", t.proxy(this.modal.closeHandler, this)), this.$modalBox.on("click.redactor-modal", t.proxy(this.modal.close, this))
                    },
                    disableEvents: function() {
                        this.$modalClose.off("click.redactor-modal"), t(document).off("keyup.redactor-modal"), this.$editor.off("keyup.redactor-modal"), this.$modalBox.off("click.redactor-modal"), t(window).off("resize.redactor-modal")
                    },
                    closeHandler: function(t) {
                        t.which == this.keyCode.ESC && this.modal.close(!1)
                    },
                    close: function(e) {
                        if (e) {
                            if (!t(e.target).hasClass("redactor-modal-close-btn") && e.target != this.$modalClose[0] && e.target != this.$modalBox[0]) return;
                            e.preventDefault()
                        }
                        this.$modalBox && (this.modal.disableEvents(), this.$modalOverlay.remove(), this.$modalBox.fadeOut("fast", t.proxy(function() {
                            this.$modalBox.remove(), setTimeout(t.proxy(this.utils.restoreScroll, this), 0), void 0 !== e && this.selection.restore(), t(document.body).css("overflow", this.modal.bodyOveflow), this.core.setCallback("modalClosed", this.modal.templateName)
                        }, this)))
                    }
                }
            },
            observe: function() {
                return {
                    load: function() {
                        this.observe.images(), this.observe.links()
                    },
                    buttons: function(e, i) {
                        var n = this.selection.getCurrent(),
                            s = this.selection.getParent();
                        if (this.button.setInactiveAll(i), e === !1 && "html" !== i) return void(-1 != t.inArray(i, this.opts.activeButtons) && this.button.toggleActive(i));
                        t.each(this.opts.activeButtonsStates, t.proxy(function(e, i) {
                            var o = t(s).closest(e),
                                a = t(n).closest(e);
                            (0 === o.length || this.utils.isRedactorParent(o)) && this.utils.isRedactorParent(a) && (0 === o.length && 0 === a.closest(e).length || this.button.setActive(i))
                        }, this));
                        var o = t(s).closest(this.opts.alignmentTags.toString().toLowerCase());
                        if (this.utils.isRedactorParent(s) && o.length) {
                            var a = "" === o.css("text-align") ? "left" : o.css("text-align");
                            this.button.setActive("align" + a)
                        }
                    },
                    addButton: function(t, e) {
                        this.opts.activeButtons.push(e), this.opts.activeButtonsStates[t] = e
                    },
                    images: function() {
                        this.$editor.find("img").each(t.proxy(function(e, i) {
                            var n = t(i);
                            n.closest("a").on("click", function(t) {
                                t.preventDefault()
                            }), this.utils.browser("msie") && n.attr("unselectable", "on"), this.image.setEditable(n)
                        }, this)), t(document).on("click.redactor-image-delete", t.proxy(function(t) {
                            this.observe.image = !1, "IMG" == t.target.tagName && this.utils.isRedactorParent(t.target) && (this.observe.image = this.observe.image && this.observe.image == t.target ? !1 : t.target)
                        }, this))
                    },
                    links: function() {
                        this.opts.linkTooltip && (this.$editor.find("a").on("touchstart click", t.proxy(this.observe.showTooltip, this)), this.$editor.on("touchstart click.redactor", t.proxy(this.observe.closeTooltip, this)), t(document).on("touchstart click.redactor", t.proxy(this.observe.closeTooltip, this)))
                    },
                    getTooltipPosition: function(t) {
                        return t.offset()
                    },
                    showTooltip: function(e) {
                        var i = t(e.target);
                        if (0 !== i.size() && "A" === i[0].tagName) {
                            var n = this.observe.getTooltipPosition(i),
                                s = t('<span class="redactor-link-tooltip"></span>'),
                                o = i.attr("href");
                            void 0 === o && (o = ""), o.length > 24 && (o = o.substring(0, 24) + "...");
                            var a = t('<a href="' + i.attr("href") + '" target="_blank" />').html(o).addClass("redactor-link-tooltip-action"),
                                r = t('<a href="#" />').html(this.lang.get("edit")).on("click", t.proxy(this.link.show, this)).addClass("redactor-link-tooltip-action"),
                                l = t('<a href="#" />').html(this.lang.get("unlink")).on("click", t.proxy(this.link.unlink, this)).addClass("redactor-link-tooltip-action");
                            s.append(a).append(" | ").append(r).append(" | ").append(l), s.css({
                                top: n.top + 20 + "px",
                                left: n.left + "px"
                            }), t(".redactor-link-tooltip").remove(), t("body").append(s)
                        }
                    },
                    closeTooltip: function(e) {
                        e = e.originalEvent || e;
                        var i = e.target;
                        "A" === i.tagName && this.utils.isRedactorParent(i) || t(i).hasClass("redactor-link-tooltip-action") || t(".redactor-link-tooltip").remove()
                    }
                }
            },
            paragraphize: function() {
                return {
                    load: function(e) {
                        return this.opts.linebreaks ? e : "" === e || "<p></p>" === e ? this.opts.emptyHtml : (this.paragraphize.blocks = ["table", "div", "pre", "form", "ul", "ol", "h1", "h2", "h3", "h4", "h5", "h6", "dl", "blockquote", "figcaption", "address", "section", "header", "footer", "aside", "article", "object", "style", "script", "iframe", "select", "input", "textarea", "button", "option", "map", "area", "math", "hr", "fieldset", "legend", "hgroup", "nav", "figure", "details", "menu", "summary", "p"], e += "\n", this.paragraphize.safes = [], this.paragraphize.z = 0, e = e.replace(/(<br\s?\/?>){1,}\n?<\/blockquote>/gi, "</blockquote>"), e = this.paragraphize.getSafes(e), e = this.paragraphize.getSafesComments(e), e = this.paragraphize.replaceBreaksToNewLines(e), e = this.paragraphize.replaceBreaksToParagraphs(e), e = this.paragraphize.clear(e), e = this.paragraphize.restoreSafes(e), e = e.replace(new RegExp("<br\\s?/?>\n?<(" + this.paragraphize.blocks.join("|") + ")(.*?[^>])>", "gi"), "<p><br /></p>\n<$1$2>"), t.trim(e))
                    },
                    getSafes: function(e) {
                        var i = t("<div />").append(e);
                        return i.find("blockquote p").replaceWith(function() {
                            return t(this).append("<br />").contents()
                        }), e = i.html(), i.find(this.paragraphize.blocks.join(", ")).each(t.proxy(function(t, i) {
                            this.paragraphize.z++, this.paragraphize.safes[this.paragraphize.z] = i.outerHTML, e = e.replace(i.outerHTML, "\n{replace" + this.paragraphize.z + "}")
                        }, this)), e
                    },
                    getSafesComments: function(e) {
                        var i = e.match(/<!--([\w\W]*?)-->/gi);
                        return i ? (t.each(i, t.proxy(function(t, i) {
                            this.paragraphize.z++, this.paragraphize.safes[this.paragraphize.z] = i, e = e.replace(i, "\n{replace" + this.paragraphize.z + "}")
                        }, this)), e) : e
                    },
                    restoreSafes: function(e) {
                        return t.each(this.paragraphize.safes, function(t, i) {
                            e = e.replace("{replace" + t + "}", i)
                        }), e
                    },
                    replaceBreaksToParagraphs: function(t) {
                        var e = t.split(new RegExp("\n", "g"), -1);
                        if (t = "", e)
                            for (var i = e.length, n = 0; i > n; n++) {
                                if (!e.hasOwnProperty(n)) return; - 1 == e[n].search("{replace") ? (e[n] = e[n].replace(/<p>\n\t?<\/p>/gi, ""), e[n] = e[n].replace(/<p><\/p>/gi, ""), "" !== e[n] && (t += "<p>" + e[n].replace(/^\n+|\n+$/g, "") + "</p>")) : t += e[n]
                            }
                        return t
                    },
                    replaceBreaksToNewLines: function(t) {
                        return t = t.replace(/<br \/>\s*<br \/>/gi, "\n\n"), t = t.replace(/<br\s?\/?>\n?<br\s?\/?>/gi, "\n<br /><br />"), t = t.replace(new RegExp("\r\n", "g"), "\n"), t = t.replace(new RegExp("\r", "g"), "\n"), t = t.replace(new RegExp("/\n\n+/"), "g", "\n\n")
                    },
                    clear: function(t) {
                        return t = t.replace(new RegExp("</blockquote></p>", "gi"), "</blockquote>"), t = t.replace(new RegExp("<p></blockquote>", "gi"), "</blockquote>"), t = t.replace(new RegExp("<p><blockquote>", "gi"), "<blockquote>"), t = t.replace(new RegExp("<blockquote></p>", "gi"), "<blockquote>"), t = t.replace(new RegExp("<p><p ", "gi"), "<p "), t = t.replace(new RegExp("<p><p>", "gi"), "<p>"), t = t.replace(new RegExp("</p></p>", "gi"), "</p>"), t = t.replace(new RegExp("<p>\\s?</p>", "gi"), ""), t = t.replace(new RegExp("\n</p>", "gi"), "</p>"), t = t.replace(new RegExp("<p>	?	?\n?<p>", "gi"), "<p>"), t = t.replace(new RegExp("<p>	*</p>", "gi"), "")
                    }
                }
            },
            paste: function() {
                return {
                    init: function() {
                        this.opts.cleanOnPaste && (this.rtePaste = !0, this.buffer.set(), this.selection.save(), this.utils.saveScroll(), this.paste.createPasteBox(), t(window).on("scroll.redactor-freeze", t.proxy(function() {
                            t(window).scrollTop(this.saveBodyScroll)
                        }, this)), setTimeout(t.proxy(function() {
                            var e = this.$pasteBox.html();
                            this.$pasteBox.remove(), this.selection.restore(), this.utils.restoreScroll(), this.paste.insert(e), t(window).off("scroll.redactor-freeze")
                        }, this), 1))
                    },
                    createPasteBox: function() {
                        this.$pasteBox = t("<div>").html(" ").attr("contenteditable", "true").css({
                            position: "fixed",
                            width: 0,
                            top: 0,
                            left: "-9999px"
                        }), t(document.body).append(this.$pasteBox), this.$pasteBox.focus()
                    },
                    insert: function(e) {
                        e = this.core.setCallback("pasteBefore", e), e = this.utils.isSelectAll() ? this.clean.onPaste(e, !1) : this.clean.onPaste(e), e = this.core.setCallback("paste", e), this.utils.isSelectAll() ? this.insert.set(e, !1) : this.insert.html(e, !1), this.utils.disableSelectAll(), this.rtePaste = !1, setTimeout(t.proxy(this.clean.clearUnverified, this), 10)
                    }
                }
            },
            placeholder: function() {
                return {
                    enable: function() {
                        this.placeholder.is() && (this.$editor.attr("placeholder", this.$element.attr("placeholder")), this.placeholder.toggle(), this.$editor.on("keyup.redactor-placeholder", t.proxy(this.placeholder.toggle, this)))
                    },
                    toggle: function() {
                        var t = "removeClass";
                        this.utils.isEmpty(this.$editor.html(), !1) && (t = "addClass"), this.$editor[t]("redactor-placeholder")
                    },
                    remove: function() {
                        this.$editor.removeClass("redactor-placeholder")
                    },
                    is: function() {
                        return this.opts.placeholder ? this.$element.attr("placeholder", this.opts.placeholder) : !("undefined" == typeof this.$element.attr("placeholder") || "" === this.$element.attr("placeholder"))
                    }
                }
            },
            progress: function() {
                return {
                    show: function() {
                        t(document.body).append(t('<div id="redactor-progress"><span></span></div>')), t("#redactor-progress").fadeIn()
                    },
                    hide: function() {
                        t("#redactor-progress").fadeOut(1500, function() {
                            t(this).remove()
                        })
                    }
                }
            },
            selection: function() {
                return {
                    get: function() {
                        this.sel = document.getSelection(), document.getSelection && this.sel.getRangeAt && this.sel.rangeCount ? this.range = this.sel.getRangeAt(0) : this.range = document.createRange()
                    },
                    addRange: function() {
                        try {
                            this.sel.removeAllRanges()
                        } catch (t) {}
                        this.sel.addRange(this.range)
                    },
                    getCurrent: function() {
                        var t = !1;
                        return this.selection.get(), this.sel && this.sel.rangeCount > 0 && (t = this.sel.getRangeAt(0).startContainer), this.utils.isRedactorParent(t)
                    },
                    getParent: function(e) {
                        return e = e || this.selection.getCurrent(), e ? this.utils.isRedactorParent(t(e).parent()[0]) : !1
                    },
                    getBlock: function(e) {
                        for (e = e || this.selection.getCurrent(); e;) {
                            if (this.utils.isBlockTag(e.tagName)) return t(e).hasClass("redactor-editor") ? !1 : e;
                            e = e.parentNode
                        }
                        return !1
                    },
                    getInlines: function(e) {
                        if (this.selection.get(), this.range && this.range.collapsed) return !1;
                        var i = [];
                        e = "undefined" == typeof e ? this.selection.getNodes() : e;
                        var n = this.opts.inlineTags;
                        return n.push("span"), t.each(e, t.proxy(function(e, s) {
                            -1 != t.inArray(s.tagName.toLowerCase(), n) && i.push(s)
                        }, this)), 0 === i.length ? !1 : i
                    },
                    getBlocks: function(e) {
                        if (this.selection.get(), this.range && this.range.collapsed) return [this.selection.getBlock()];
                        var i = [];
                        return e = "undefined" == typeof e ? this.selection.getNodes() : e, t.each(e, t.proxy(function(t, e) {
                            this.utils.isBlock(e) && (this.selection.lastBlock = e, i.push(e))
                        }, this)), 0 === i.length ? [this.selection.getBlock()] : i
                    },
                    getLastBlock: function() {
                        return this.selection.lastBlock
                    },
                    getNodes: function() {
                        this.selection.get();
                        var e = this.selection.getNodesMarker(1),
                            i = this.selection.getNodesMarker(2);
                        this.selection.setNodesMarker(this.range, e, !0), this.range.collapsed === !1 ? this.selection.setNodesMarker(this.range, i, !1) : i = e;
                        var n = [],
                            s = 0,
                            o = this;
                        this.$editor.find("*").each(function() {
                            if (this == e) {
                                var a = t(this).parent();
                                0 !== a.length && "BODY" != a[0].tagName && o.utils.isRedactorParent(a[0]) && n.push(a[0]), n.push(this), s = 1
                            } else s > 0 && (n.push(this), s += 1);
                            return this == i ? !1 : void 0
                        });
                        for (var a = [], r = n.length, l = 0; r > l; l++) "nodes-marker-1" != n[l].id && "nodes-marker-2" != n[l].id && a.push(n[l]);
                        return this.selection.removeNodesMarkers(), a
                    },
                    getNodesMarker: function(e) {
                        return t('<span id="nodes-marker-' + e + '" class="redactor-nodes-marker" data-verified="redactor">' + this.opts.invisibleSpace + "</span>")[0]
                    },
                    setNodesMarker: function(t, e, i) {
                        t = t.cloneRange();
                        try {
                            t.collapse(i), t.insertNode(e)
                        } catch (n) {}
                    },
                    removeNodesMarkers: function() {
                        t(document).find("span.redactor-nodes-marker").remove(), this.$editor.find("span.redactor-nodes-marker").remove()
                    },
                    fromPoint: function(t, e) {
                        this.caret.setOffset(t, e)
                    },
                    wrap: function(t) {
                        if (this.selection.get(), this.range.collapsed) return !1;
                        var e = document.createElement(t);
                        return e.appendChild(this.range.extractContents()), this.range.insertNode(e), e
                    },
                    selectElement: function(t) {
                        this.caret.set(t, 0, t, 1)
                    },
                    selectAll: function() {
                        this.selection.get(), this.range.selectNodeContents(this.$editor[0]), this.selection.addRange()
                    },
                    remove: function() {
                        this.selection.get(), this.sel.removeAllRanges()
                    },
                    save: function() {
                        this.selection.createMarkers()
                    },
                    createMarkers: function() {
                        this.selection.get();
                        var t = this.selection.getMarker(1);
                        if (this.selection.setMarker(this.range, t, !0), this.range.collapsed === !1) {
                            var e = this.selection.getMarker(2);
                            this.selection.setMarker(this.range, e, !1)
                        }
                        this.savedSel = this.$editor.html()
                    },
                    getMarker: function(e) {
                        return "undefined" == typeof e && (e = 1), t('<span id="selection-marker-' + e + '" class="redactor-selection-marker"  data-verified="redactor">' + this.opts.invisibleSpace + "</span>")[0]
                    },
                    getMarkerAsHtml: function(t) {
                        return this.utils.getOuterHtml(this.selection.getMarker(t))
                    },
                    setMarker: function(t, e, i) {
                        t = t.cloneRange();
                        try {
                            t.collapse(i), t.insertNode(e)
                        } catch (n) {
                            this.focus.setStart()
                        }
                    },
                    restore: function() {
                        var t = this.$editor.find("span#selection-marker-1"),
                            e = this.$editor.find("span#selection-marker-2");
                        0 !== t.length && 0 !== e.length ? this.caret.set(t, 0, e, 0) : 0 !== t.length ? this.caret.set(t, 0, t, 0) : this.$editor.focus(), this.selection.removeMarkers(), this.savedSel = !1
                    },
                    removeMarkers: function() {
                        this.$editor.find("span.redactor-selection-marker").remove()
                    },
                    getText: function() {
                        return this.selection.get(), this.sel.toString()
                    },
                    getHtml: function() {
                        var t = "";
                        if (this.selection.get(), this.sel.rangeCount) {
                            for (var e = document.createElement("div"), i = this.sel.rangeCount, n = 0; i > n; ++n) e.appendChild(this.sel.getRangeAt(n).cloneContents());
                            t = e.innerHTML
                        }
                        return this.clean.onSync(t)
                    }
                }
            },
            shortcuts: function() {
                return {
                    init: function(e, i) {
                        return this.opts.shortcuts ? void t.each(this.opts.shortcuts, t.proxy(function(i, n) {
                            for (var s = i.split(","), o = s.length, a = 0; o > a; a++) "string" == typeof s[a] && this.shortcuts.handler(e, t.trim(s[a]), t.proxy(function() {
                                var t;
                                "-1" != n.func.search(/\./) ? (t = n.func.split("."), "undefined" != typeof this[t[0]] && this[t[0]][t[1]].apply(this, n.params)) : this[n.func].apply(this, n.params)
                            }, this))
                        }, this)) : (!e.ctrlKey && !e.metaKey || 66 !== i && 73 !== i || e.preventDefault(), !1)
                    },
                    handler: function(e, i, n) {
                        var s = {
                                8: "backspace",
                                9: "tab",
                                10: "return",
                                13: "return",
                                16: "shift",
                                17: "ctrl",
                                18: "alt",
                                19: "pause",
                                20: "capslock",
                                27: "esc",
                                32: "space",
                                33: "pageup",
                                34: "pagedown",
                                35: "end",
                                36: "home",
                                37: "left",
                                38: "up",
                                39: "right",
                                40: "down",
                                45: "insert",
                                46: "del",
                                59: ";",
                                61: "=",
                                96: "0",
                                97: "1",
                                98: "2",
                                99: "3",
                                100: "4",
                                101: "5",
                                102: "6",
                                103: "7",
                                104: "8",
                                105: "9",
                                106: "*",
                                107: "+",
                                109: "-",
                                110: ".",
                                111: "/",
                                112: "f1",
                                113: "f2",
                                114: "f3",
                                115: "f4",
                                116: "f5",
                                117: "f6",
                                118: "f7",
                                119: "f8",
                                120: "f9",
                                121: "f10",
                                122: "f11",
                                123: "f12",
                                144: "numlock",
                                145: "scroll",
                                173: "-",
                                186: ";",
                                187: "=",
                                188: ",",
                                189: "-",
                                190: ".",
                                191: "/",
                                192: "`",
                                219: "[",
                                220: "\\",
                                221: "]",
                                222: "'"
                            },
                            o = {
                                "`": "~",
                                1: "!",
                                2: "@",
                                3: "#",
                                4: "$",
                                5: "%",
                                6: "^",
                                7: "&",
                                8: "*",
                                9: "(",
                                0: ")",
                                "-": "_",
                                "=": "+",
                                ";": ": ",
                                "'": '"',
                                ",": "<",
                                ".": ">",
                                "/": "?",
                                "\\": "|"
                            };
                        i = i.toLowerCase().split(" ");
                        var a = s[e.keyCode],
                            r = String.fromCharCode(e.which).toLowerCase(),
                            l = "",
                            c = {};
                        t.each(["alt", "ctrl", "meta", "shift"], function(t, i) {
                            e[i + "Key"] && a !== i && (l += i + "+")
                        }), a && (c[l + a] = !0), r && (c[l + r] = !0, c[l + o[r]] = !0, "shift+" === l && (c[o[r]] = !0));
                        for (var h = 0, d = i.length; d > h; h++)
                            if (c[i[h]]) return e.preventDefault(), n.apply(this, arguments)
                    }
                }
            },
            tabifier: function() {
                return {
                    get: function(t) {
                        if (!this.opts.tabifier) return t;
                        var e = ["area", "body", "head", "hr", "i?frame", "link", "meta", "noscript", "style", "script", "table", "tbody", "thead", "tfoot"],
                            i = ["li", "dt", "dt", "h[1-6]", "option", "script"],
                            n = ["blockquote", "div", "dl", "fieldset", "form", "frameset", "map", "ol", "p", "pre", "select", "td", "th", "tr", "ul"];
                        this.tabifier.lineBefore = new RegExp("^<(/?" + e.join("|/?") + "|" + i.join("|") + ")[ >]"), this.tabifier.lineAfter = new RegExp("^<(br|/?" + e.join("|/?") + "|/" + i.join("|/") + ")[ >]"), this.tabifier.newLevel = new RegExp("^</?(" + n.join("|") + ")[ >]");
                        var s = 0,
                            o = t.length,
                            a = 0,
                            r = null,
                            l = null,
                            c = "",
                            h = "",
                            d = "";
                        for (this.tabifier.cleanlevel = 0; o > s; s++) {
                            if (a = s, -1 == t.substr(s).indexOf("<")) return h += t.substr(s), this.tabifier.finish(h);
                            for (; o > a && "<" != t.charAt(a);) a++;
                            for (s != a && (d = t.substr(s, a - s), d.match(/^\s{2,}$/g) || ("\n" == h.charAt(h.length - 1) ? h += this.tabifier.getTabs() : "\n" == d.charAt(0) && (h += "\n" + this.tabifier.getTabs(), d = d.replace(/^\s+/, "")), h += d), d.match(/\n/) && (h += "\n" + this.tabifier.getTabs())), r = a; o > a && ">" != t.charAt(a);) a++;
                            c = t.substr(r, a - r), s = a;
                            var u;
                            if ("!--" == c.substr(1, 3)) {
                                if (!c.match(/--$/)) {
                                    for (;
                                        "-->" != t.substr(a, 3);) a++;
                                    a += 2, c = t.substr(r, a - r), s = a
                                }
                                "\n" != h.charAt(h.length - 1) && (h += "\n"), h += this.tabifier.getTabs(), h += c + ">\n"
                            } else "!" == c[1] ? h = this.tabifier.placeTag(c + ">", h) : "?" == c[1] ? h += c + ">\n" : (u = c.match(/^<(script|style|pre)/i)) ? (u[1] = u[1].toLowerCase(), c = this.tabifier.cleanTag(c), h = this.tabifier.placeTag(c, h), l = String(t.substr(s + 1)).toLowerCase().indexOf("</" + u[1]), l && (d = t.substr(s + 1, l), s += l, h += d)) : (c = this.tabifier.cleanTag(c), h = this.tabifier.placeTag(c, h))
                        }
                        return this.tabifier.finish(h)
                    },
                    getTabs: function() {
                        for (var t = "", e = 0; e < this.tabifier.cleanlevel; e++) t += "	";
                        return t
                    },
                    finish: function(t) {
                        return t = t.replace(/\n\s*\n/g, "\n"), t = t.replace(/^[\s\n]*/, ""), t = t.replace(/[\s\n]*$/, ""), t = t.replace(/<script(.*?)>\n<\/script>/gi, "<script$1></script>"), this.tabifier.cleanlevel = 0, t
                    },
                    cleanTag: function(t) {
                        var e = "";
                        t = t.replace(/\n/g, " "), t = t.replace(/\s{2,}/g, " "), t = t.replace(/^\s+|\s+$/g, " ");
                        var i = "";
                        t.match(/\/$/) && (i = "/", t = t.replace(/\/+$/, ""));
                        for (var n; n = /\s*([^= ]+)(?:=((['"']).*?\3|[^ ]+))?/.exec(t);) n[2] ? e += n[1].toLowerCase() + "=" + n[2] : n[1] && (e += n[1].toLowerCase()), e += " ", t = t.substr(n[0].length);
                        return e.replace(/\s*$/, "") + i + ">"
                    },
                    placeTag: function(t, e) {
                        var i = t.match(this.tabifier.newLevel);
                        return (t.match(this.tabifier.lineBefore) || i) && (e = e.replace(/\s*$/, ""), e += "\n"), i && "/" == t.charAt(1) && this.tabifier.cleanlevel--, "\n" == e.charAt(e.length - 1) && (e += this.tabifier.getTabs()), i && "/" != t.charAt(1) && this.tabifier.cleanlevel++, e += t, (t.match(this.tabifier.lineAfter) || t.match(this.tabifier.newLevel)) && (e = e.replace(/ *$/, ""), e += "\n"), e
                    }
                }
            },
            tidy: function() {
                return {
                    setupAllowed: function() {
                        if (this.opts.allowedTags && (this.opts.deniedTags = !1), this.opts.allowedAttr && (this.opts.removeAttr = !1), !this.opts.linebreaks) {
                            var t = ["p", "section"];
                            this.opts.allowedTags && this.tidy.addToAllowed(t), this.opts.deniedTags && this.tidy.removeFromDenied(t)
                        }
                    },
                    addToAllowed: function(e) {
                        for (var i = e.length, n = 0; i > n; n++) - 1 == t.inArray(e[n], this.opts.allowedTags) && this.opts.allowedTags.push(e[n])
                    },
                    removeFromDenied: function(e) {
                        for (var i = e.length, n = 0; i > n; n++) {
                            var s = t.inArray(e[n], this.opts.deniedTags); - 1 != s && this.opts.deniedTags.splice(s, 1)
                        }
                    },
                    load: function(e, i) {
                        return this.tidy.settings = {
                            deniedTags: this.opts.deniedTags,
                            allowedTags: this.opts.allowedTags,
                            removeComments: this.opts.removeComments,
                            replaceTags: this.opts.replaceTags,
                            replaceStyles: this.opts.replaceStyles,
                            removeDataAttr: this.opts.removeDataAttr,
                            removeAttr: this.opts.removeAttr,
                            allowedAttr: this.opts.allowedAttr,
                            removeWithoutAttr: this.opts.removeWithoutAttr,
                            removeEmpty: this.opts.removeEmpty
                        }, t.extend(this.tidy.settings, i), e = this.tidy.removeComments(e), this.tidy.$div = t("<div />").append(e), this.tidy.replaceTags(), this.tidy.replaceStyles(), this.tidy.removeTags(), this.tidy.removeAttr(), this.tidy.removeEmpty(), this.tidy.removeParagraphsInLists(), this.tidy.removeDataAttr(), this.tidy.removeWithoutAttr(), e = this.tidy.$div.html(), this.tidy.$div.remove(), e
                    },
                    removeComments: function(t) {
                        return this.tidy.settings.removeComments ? t.replace(/<!--[\s\S]*?-->/gi, "") : t
                    },
                    replaceTags: function(e) {
                        if (!this.tidy.settings.replaceTags) return e;
                        for (var i = this.tidy.settings.replaceTags.length, n = [], s = [], o = 0; i > o; o++) s.push(this.tidy.settings.replaceTags[o][1]), n.push(this.tidy.settings.replaceTags[o][0]);
                        return this.tidy.$div.find(n.join(",")).each(t.proxy(function(e, i) {
                            var n = s[e];
                            t(i).replaceWith(function() {
                                for (var e = t("<" + n + " />").append(t(this).contents()), i = 0; i < this.attributes.length; i++) e.attr(this.attributes[i].name, this.attributes[i].value);
                                return e
                            })
                        }, this)), e
                    },
                    replaceStyles: function() {
                        if (this.tidy.settings.replaceStyles) {
                            var e = this.tidy.settings.replaceStyles.length;
                            this.tidy.$div.find("span").each(t.proxy(function(i, n) {
                                for (var s = t(n), o = s.attr("style"), a = 0; e > a; a++)
                                    if (o && o.match(new RegExp("^" + this.tidy.settings.replaceStyles[a][0], "i"))) {
                                        var r = this.tidy.settings.replaceStyles[a][1];
                                        s.replaceWith(function() {
                                            var e = document.createElement(r);
                                            return t(e).append(t(this).contents())
                                        })
                                    }
                            }, this))
                        }
                    },
                    removeTags: function() {
                        !this.tidy.settings.deniedTags && this.tidy.settings.allowedTags && this.tidy.$div.find("*").not(this.tidy.settings.allowedTags.join(",")).each(function(e, i) {
                            "" === i.innerHTML ? t(i).remove() : t(i).contents().unwrap()
                        }), this.tidy.settings.deniedTags && this.tidy.$div.find(this.tidy.settings.deniedTags.join(",")).each(function(e, i) {
                            "" === i.innerHTML ? t(i).remove() : t(i).contents().unwrap()
                        })
                    },
                    removeAttr: function() {
                        var e;
                        if (!this.tidy.settings.removeAttr && this.tidy.settings.allowedAttr) {
                            var i = [],
                                n = [];
                            e = this.tidy.settings.allowedAttr.length;
                            for (var s = 0; e > s; s++) i.push(this.tidy.settings.allowedAttr[s][0]), n.push(this.tidy.settings.allowedAttr[s][1]);
                            this.tidy.$div.find("*").each(t.proxy(function(e, s) {
                                var o = t(s),
                                    a = t.inArray(o[0].tagName.toLowerCase(), i),
                                    r = this.tidy.removeAttrGetRemoves(a, n, o);
                                r && t.each(r, function(t, e) {
                                    o.removeAttr(e)
                                })
                            }, this))
                        }
                        if (this.tidy.settings.removeAttr) {
                            e = this.tidy.settings.removeAttr.length;
                            for (var s = 0; e > s; s++) {
                                var o = this.tidy.settings.removeAttr[s][1];
                                t.isArray(o) && (o = o.join(" ")), this.tidy.$div.find(this.tidy.settings.removeAttr[s][0]).removeAttr(o)
                            }
                        }
                    },
                    removeAttrGetRemoves: function(e, i, n) {
                        var s = [];
                        return -1 == e ? t.each(n[0].attributes, function(t, e) {
                            s.push(e.name)
                        }) : "*" == i[e] ? s = [] : t.each(n[0].attributes, function(n, o) {
                            t.isArray(i[e]) ? -1 == t.inArray(o.name, i[e]) && s.push(o.name) : i[e] != o.name && s.push(o.name)
                        }), s
                    },
                    removeAttrs: function(e, i) {
                        return i = new RegExp(i, "g"), e.each(function() {
                            for (var e = t(this), n = this.attributes.length - 1, s = n; s >= 0; s--) {
                                var o = this.attributes[s];
                                o && o.specified && o.name.search(i) >= 0 && e.removeAttr(o.name)
                            }
                        })
                    },
                    removeEmpty: function() {
                        this.tidy.settings.removeEmpty && this.tidy.$div.find(this.tidy.settings.removeEmpty.join(",")).each(function() {
                            var e = t(this),
                                i = e.text();
                            i = i.replace(/[\u200B-\u200D\uFEFF]/g, ""), i = i.replace(/&nbsp;/gi, ""), i = i.replace(/\s/g, ""), "" === i && 0 === e.children().length && e.remove()
                        })
                    },
                    removeParagraphsInLists: function() {
                        this.tidy.$div.find("li p").contents().unwrap()
                    },
                    removeDataAttr: function() {
                        if (this.tidy.settings.removeDataAttr) {
                            var e = this.tidy.settings.removeDataAttr;
                            t.isArray(this.tidy.settings.removeDataAttr) && (e = this.tidy.settings.removeDataAttr.join(",")), this.tidy.removeAttrs(this.tidy.$div.find(e), "^(data-)")
                        }
                    },
                    removeWithoutAttr: function() {
                        this.tidy.settings.removeWithoutAttr && this.tidy.$div.find(this.tidy.settings.removeWithoutAttr.join(",")).each(function() {
                            0 === this.attributes.length && t(this).contents().unwrap()
                        })
                    }
                }
            },
            toolbar: function() {
                return {
                    init: function() {
                        return {
                            html: {
                                title: this.lang.get("html"),
                                func: "code.toggle"
                            },
                            formatting: {
                                title: this.lang.get("formatting"),
                                dropdown: {
                                    p: {
                                        title: this.lang.get("paragraph"),
                                        func: "block.format"
                                    },
                                    blockquote: {
                                        title: this.lang.get("quote"),
                                        func: "block.format"
                                    },
                                    pre: {
                                        title: this.lang.get("code"),
                                        func: "block.format"
                                    },
                                    h1: {
                                        title: this.lang.get("header1"),
                                        func: "block.format"
                                    },
                                    h2: {
                                        title: this.lang.get("header2"),
                                        func: "block.format"
                                    },
                                    h3: {
                                        title: this.lang.get("header3"),
                                        func: "block.format"
                                    },
                                    h4: {
                                        title: this.lang.get("header4"),
                                        func: "block.format"
                                    },
                                    h5: {
                                        title: this.lang.get("header5"),
                                        func: "block.format"
                                    }
                                }
                            },
                            bold: {
                                title: this.lang.get("bold"),
                                func: "inline.format"
                            },
                            italic: {
                                title: this.lang.get("italic"),
                                func: "inline.format"
                            },
                            deleted: {
                                title: this.lang.get("deleted"),
                                func: "inline.format"
                            },
                            underline: {
                                title: this.lang.get("underline"),
                                func: "inline.format"
                            },
                            unorderedlist: {
                                title: "&bull; " + this.lang.get("unorderedlist"),
                                func: "list.toggle"
                            },
                            orderedlist: {
                                title: "1. " + this.lang.get("orderedlist"),
                                func: "list.toggle"
                            },
                            outdent: {
                                title: "< " + this.lang.get("outdent"),
                                func: "indent.decrease"
                            },
                            indent: {
                                title: "> " + this.lang.get("indent"),
                                func: "indent.increase"
                            },
                            image: {
                                title: this.lang.get("image"),
                                func: "image.show"
                            },
                            file: {
                                title: this.lang.get("file"),
                                func: "file.show"
                            },
                            link: {
                                title: this.lang.get("link"),
                                dropdown: {
                                    link: {
                                        title: this.lang.get("link_insert"),
                                        func: "link.show"
                                    },
                                    unlink: {
                                        title: this.lang.get("unlink"),
                                        func: "link.unlink"
                                    }
                                }
                            },
                            alignment: {
                                title: this.lang.get("alignment"),
                                dropdown: {
                                    left: {
                                        title: this.lang.get("align_left"),
                                        func: "alignment.left"
                                    },
                                    center: {
                                        title: this.lang.get("align_center"),
                                        func: "alignment.center"
                                    },
                                    right: {
                                        title: this.lang.get("align_right"),
                                        func: "alignment.right"
                                    },
                                    justify: {
                                        title: this.lang.get("align_justify"),
                                        func: "alignment.justify"
                                    }
                                }
                            },
                            horizontalrule: {
                                title: this.lang.get("horizontalrule"),
                                func: "line.insert"
                            }
                        }
                    },
                    build: function() {
                        this.toolbar.hideButtons(), this.toolbar.hideButtonsOnMobile(), this.toolbar.isButtonSourceNeeded(), 0 !== this.opts.buttons.length && (this.$toolbar = this.toolbar.createContainer(), this.toolbar.setOverflow(), this.toolbar.append(), this.toolbar.setFormattingTags(), this.toolbar.loadButtons(), this.toolbar.setFixed(), this.opts.activeButtons && this.$editor.on("mouseup.redactor keyup.redactor focus.redactor", t.proxy(this.observe.buttons, this)))
                    },
                    createContainer: function() {
                        return t("<ul>").addClass("redactor-toolbar").attr("id", "redactor-toolbar-" + this.uuid)
                    },
                    setFormattingTags: function() {
                        t.each(this.opts.toolbar.formatting.dropdown, t.proxy(function(e) {
                            -1 == t.inArray(e, this.opts.formatting) && delete this.opts.toolbar.formatting.dropdown[e]
                        }, this))
                    },
                    loadButtons: function() {
                        t.each(this.opts.buttons, t.proxy(function(e, i) {
                            if (this.opts.toolbar[i]) {
                                if (this.opts.fileUpload === !1 && "file" === i) return !0;
                                if (this.opts.imageUpload === !1 && this.opts.s3 === !1 && "image" === i) return !0;
                                var n = this.opts.toolbar[i];
                                this.$toolbar.append(t("<li>").append(this.button.build(i, n)))
                            }
                        }, this))
                    },
                    append: function() {
                        this.opts.toolbarExternal ? (this.$toolbar.addClass("redactor-toolbar-external"), t(this.opts.toolbarExternal).html(this.$toolbar)) : this.$box.prepend(this.$toolbar)
                    },
                    setFixed: function() {
                        this.utils.isMobile() || this.opts.toolbarExternal || this.opts.toolbarFixed && (this.toolbar.observeScroll(), t(this.opts.toolbarFixedTarget).on("scroll.redactor", t.proxy(this.toolbar.observeScroll, this)))
                    },
                    setOverflow: function() {
                        this.utils.isMobile() && this.opts.toolbarOverflow && this.$toolbar.addClass("redactor-toolbar-overflow")
                    },
                    isButtonSourceNeeded: function() {
                        if (!this.opts.buttonSource) {
                            var t = this.opts.buttons.indexOf("html"); - 1 !== t && this.opts.buttons.splice(t, 1)
                        }
                    },
                    hideButtons: function() {
                        0 !== this.opts.buttonsHide.length && t.each(this.opts.buttonsHide, t.proxy(function(t, e) {
                            var i = this.opts.buttons.indexOf(e);
                            this.opts.buttons.splice(i, 1)
                        }, this))
                    },
                    hideButtonsOnMobile: function() {
                        this.utils.isMobile() && 0 !== this.opts.buttonsHideOnMobile.length && t.each(this.opts.buttonsHideOnMobile, t.proxy(function(t, e) {
                            var i = this.opts.buttons.indexOf(e);
                            this.opts.buttons.splice(i, 1)
                        }, this))
                    },
                    observeScroll: function() {
                        var e = t(this.opts.toolbarFixedTarget).scrollTop(),
                            i = 1;
                        this.opts.toolbarFixedTarget === document && (i = this.$box.offset().top), e > i ? this.toolbar.observeScrollEnable(e, i) : this.toolbar.observeScrollDisable()
                    },
                    observeScrollEnable: function(t, e) {
                        var i = this.opts.toolbarFixedTopOffset + t - e,
                            n = 0,
                            s = e + this.$box.height() + 30,
                            o = this.$box.innerWidth();
                        this.$toolbar.addClass("toolbar-fixed-box"), this.$toolbar.css({
                            position: "absolute",
                            width: o,
                            top: i + "px",
                            left: n
                        }), this.toolbar.setDropdownsFixed(), this.$toolbar.css("visibility", s > t ? "visible" : "hidden")
                    },
                    observeScrollDisable: function() {
                        this.$toolbar.css({
                            position: "relative",
                            width: "auto",
                            top: 0,
                            left: 0,
                            visibility: "visible"
                        }), this.toolbar.unsetDropdownsFixed(), this.$toolbar.removeClass("toolbar-fixed-box")
                    },
                    setDropdownsFixed: function() {
                        var e = this.$toolbar.innerHeight() + this.opts.toolbarFixedTopOffset,
                            i = "fixed";
                        this.opts.toolbarFixedTarget !== document && (e = this.$toolbar.innerHeight() + this.$toolbar.offset().top + this.opts.toolbarFixedTopOffset, i = "absolute"), t(".redactor-dropdown").each(function() {
                            t(this).css({
                                position: i,
                                top: e + "px"
                            })
                        })
                    },
                    unsetDropdownsFixed: function() {
                        var e = this.$toolbar.innerHeight() + this.$toolbar.offset().top;
                        t(".redactor-dropdown").each(function() {
                            t(this).css({
                                position: "absolute",
                                top: e + "px"
                            })
                        })
                    }
                }
            },
            upload: function() {
                return {
                    init: function(e, i, n) {
                        this.upload.direct = !1, this.upload.callback = n, this.upload.url = i, this.upload.$el = t(e), this.upload.$droparea = t('<div id="redactor-droparea" />'), this.upload.$placeholdler = t('<div id="redactor-droparea-placeholder" />').text("Drop file here or "), this.upload.$input = t('<input type="file" name="file" />'), this.upload.$placeholdler.append(this.upload.$input), this.upload.$droparea.append(this.upload.$placeholdler), this.upload.$el.append(this.upload.$droparea), this.upload.$droparea.off("redactor.upload"), this.upload.$input.off("redactor.upload"), this.upload.$droparea.on("dragover.redactor.upload", t.proxy(this.upload.onDrag, this)), this.upload.$droparea.on("dragleave.redactor.upload", t.proxy(this.upload.onDragLeave, this)), this.upload.$input.on("change.redactor.upload", t.proxy(function(t) {
                            t = t.originalEvent || t, this.upload.traverseFile(this.upload.$input[0].files[0], t)
                        }, this)), this.upload.$droparea.on("drop.redactor.upload", t.proxy(function(t) {
                            t.preventDefault(), this.upload.$droparea.removeClass("drag-hover").addClass("drag-drop"), this.upload.onDrop(t)
                        }, this))
                    },
                    directUpload: function(t, e) {
                        this.upload.direct = !0, this.upload.traverseFile(t, e)
                    },
                    onDrop: function(t) {
                        t = t.originalEvent || t;
                        var e = t.dataTransfer.files;
                        this.upload.traverseFile(e[0], t)
                    },
                    traverseFile: function(t, e) {
                        if (this.opts.s3) return this.upload.setConfig(t), void this.upload.s3uploadFile(t);
                        var i = window.FormData ? new FormData : null;
                        if (window.FormData) {
                            this.upload.setConfig(t);
                            var n = "image" == this.upload.type ? this.opts.imageUploadParam : this.opts.fileUploadParam;
                            i.append(n, t)
                        }
                        this.progress.show(), this.upload.sendData(i, e)
                    },
                    setConfig: function(t) {
                        this.upload.getType(t), this.upload.direct && (this.upload.url = "image" == this.upload.type ? this.opts.imageUpload : this.opts.fileUpload, this.upload.callback = "image" == this.upload.type ? this.image.insert : this.file.insert)
                    },
                    getType: function(t) {
                        this.upload.type = "image", -1 == this.opts.imageTypes.indexOf(t.type) && (this.upload.type = "file")
                    },
                    getHiddenFields: function(e, i) {
                        return e === !1 || "object" != typeof e ? i : (t.each(e, t.proxy(function(e, n) {
                            null !== n && 0 === n.toString().indexOf("#") && (n = t(n).val()), i.append(e, n)
                        }, this)), i)
                    },
                    sendData: function(e, i) {
                        "image" == this.upload.type ? (e = this.upload.getHiddenFields(this.opts.uploadImageFields, e), e = this.upload.getHiddenFields(this.upload.imageFields, e)) : (e = this.upload.getHiddenFields(this.opts.uploadFileFields, e), e = this.upload.getHiddenFields(this.upload.fileFields, e));
                        var n = new XMLHttpRequest;
                        n.open("POST", this.upload.url), n.onreadystatechange = t.proxy(function() {
                            if (4 == n.readyState) {
                                var e = n.responseText;
                                e = e.replace(/^\[/, ""), e = e.replace(/\]$/, "");
                                var s;
                                try {
                                    s = "string" == typeof e ? t.parseJSON(e) : e
                                } catch (o) {
                                    s = {
                                        error: !0
                                    }
                                }
                                this.progress.hide(), this.upload.direct || this.upload.$droparea.removeClass("drag-drop"), this.upload.callback(s, this.upload.direct, i)
                            }
                        }, this), n.send(e)
                    },
                    onDrag: function(t) {
                        t.preventDefault(), this.upload.$droparea.addClass("drag-hover")
                    },
                    onDragLeave: function(t) {
                        t.preventDefault(), this.upload.$droparea.removeClass("drag-hover")
                    },
                    clearImageFields: function() {
                        this.upload.imageFields = {}
                    },
                    addImageFields: function(t, e) {
                        this.upload.imageFields[t] = e
                    },
                    removeImageFields: function(t) {
                        delete this.upload.imageFields[t]
                    },
                    clearFileFields: function() {
                        this.upload.fileFields = {}
                    },
                    addFileFields: function(t, e) {
                        this.upload.fileFields[t] = e
                    },
                    removeFileFields: function(t) {
                        delete this.upload.fileFields[t]
                    },
                    s3uploadFile: function(e) {
                        this.upload.s3executeOnSignedUrl(e, t.proxy(function(t) {
                            this.upload.s3uploadToS3(e, t)
                        }, this))
                    },
                    s3executeOnSignedUrl: function(t, e) {
                        var i = new XMLHttpRequest,
                            n = "?";
                        "-1" != this.opts.s3.search(/\?/) && (n = "&"), i.open("GET", this.opts.s3 + n + "name=" + t.name + "&type=" + t.type, !0), i.overrideMimeType && i.overrideMimeType("text/plain; charset=x-user-defined");
                        var s = this;
                        i.onreadystatechange = function() {
                            4 == this.readyState && 200 == this.status ? (s.progress.show(), e(decodeURIComponent(this.responseText))) : 4 == this.readyState && 200 != this.status
                        }, i.send()
                    },
                    s3createCORSRequest: function(t, e) {
                        var i = new XMLHttpRequest;
                        return "withCredentials" in i ? i.open(t, e, !0) : "undefined" != typeof XDomainRequest ? (i = new XDomainRequest, i.open(t, e)) : i = null, i
                    },
                    s3uploadToS3: function(e, i) {
                        var n = this.upload.s3createCORSRequest("PUT", i);
                        n && (n.onload = t.proxy(function() {
                            if (200 == n.status) {
                                this.progress.hide();
                                var t = i.split("?");
                                if (!t[0]) return !1;
                                this.upload.direct || this.upload.$droparea.removeClass("drag-drop");
                                var e = {
                                    filelink: t[0]
                                };
                                if ("file" == this.upload.type) {
                                    var s = t[0].split("/");
                                    e.filename = s[s.length - 1]
                                }
                                this.upload.callback(e, this.upload.direct, !1)
                            }
                        }, this), n.onerror = function() {}, n.upload.onprogress = function() {}, n.setRequestHeader("Content-Type", e.type), n.setRequestHeader("x-amz-acl", "public-read"), n.send(e))
                    }
                }
            },
            utils: function() {
                return {
                    isMobile: function() {
                        return /(iPhone|iPod|BlackBerry|Android)/.test(navigator.userAgent)
                    },
                    isDesktop: function() {
                        return !/(iPhone|iPod|iPad|BlackBerry|Android)/.test(navigator.userAgent)
                    },
                    isString: function(t) {
                        return "[object String]" == Object.prototype.toString.call(t)
                    },
                    isEmpty: function(e, i) {
                        return e = e.replace(/[\u200B-\u200D\uFEFF]/g, ""), e = e.replace(/&nbsp;/gi, ""), e = e.replace(/<\/?br\s?\/?>/g, ""), e = e.replace(/\s/g, ""), e = e.replace(/^<p>[^\W\w\D\d]*?<\/p>$/i, ""), i !== !1 && (e = e.replace(/<[^\/>][^>]*><\/[^>]+>/gi, ""), e = e.replace(/<[^\/>][^>]*><\/[^>]+>/gi, "")), e = t.trim(e), "" === e
                    },
                    normalize: function(t) {
                        return "undefined" == typeof t ? 0 : parseInt(t.replace("px", ""), 10)
                    },
                    hexToRgb: function(t) {
                        if ("undefined" != typeof t) {
                            if (-1 == t.search(/^#/)) return t;
                            var e = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
                            t = t.replace(e, function(t, e, i, n) {
                                return e + e + i + i + n + n
                            });
                            var i = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);
                            return "rgb(" + parseInt(i[1], 16) + ", " + parseInt(i[2], 16) + ", " + parseInt(i[3], 16) + ")"
                        }
                    },
                    getOuterHtml: function(e) {
                        return t("<div>").append(t(e).eq(0).clone()).html()
                    },
                    getAlignmentElement: function(e) {
                        return -1 !== t.inArray(e.tagName, this.opts.alignmentTags) ? t(e) : t(e).closest(this.opts.alignmentTags.toString().toLowerCase(), this.$editor[0])
                    },
                    removeEmptyAttr: function(e, i) {
                        var n = t(e);
                        return "undefined" == typeof n.attr(i) ? !0 : "" === n.attr(i) ? (n.removeAttr(i), !0) : !1
                    },
                    removeEmpty: function(e, i) {
                        var n = t(i);
                        if (n.find(".redactor-invisible-space").replaceWith(function() {
                                return t(this).contents()
                            }), 0 === n.find("hr, br, img, iframe").length) {
                            var s = t.trim(n.text());
                            this.utils.isEmpty(s, !1) && n.remove()
                        }
                    },
                    saveScroll: function() {
                        this.utils.isSelectAll() || (this.saveEditorScroll = this.$editor.scrollTop(), this.saveBodyScroll = t(window).scrollTop(), this.opts.scrollTarget && (this.saveTargetScroll = t(this.opts.scrollTarget).scrollTop()))
                    },
                    restoreScroll: function() {
                        "undefined" == typeof this.saveScroll && "undefined" == typeof this.saveBodyScroll || (t(window).scrollTop(this.saveBodyScroll), this.$editor.scrollTop(this.saveEditorScroll), this.opts.scrollTarget && t(this.opts.scrollTarget).scrollTop(this.saveTargetScroll))
                    },
                    createSpaceElement: function() {
                        var t = document.createElement("span");
                        return t.className = "redactor-invisible-space", t.innerHTML = this.opts.invisibleSpace, t
                    },
                    removeInlineTags: function(e) {
                        var i = this.opts.inlineTags;
                        i.push("span"), "PRE" == e.tagName && i.push("a"), t(e).find(i.join(",")).not("span.redactor-selection-marker").contents().unwrap()
                    },
                    replaceWithContents: function(e, i) {
                        var n = this;
                        t(e).replaceWith(function() {
                            return i === !0 && n.utils.removeInlineTags(this), t(this).contents()
                        })
                    },
                    replaceToTag: function(e, i, n) {
                        var s, o = this;
                        return t(e).replaceWith(function() {
                            s = t("<" + i + " />").append(t(this).contents());
                            for (var e = 0; e < this.attributes.length; e++) s.attr(this.attributes[e].name, this.attributes[e].value);
                            return n === !0 && o.utils.removeInlineTags(s), s
                        }), s
                    },
                    isStartOfElement: function() {
                        var t = this.selection.getBlock();
                        if (!t) return !1;
                        var e = this.caret.getOffsetOfElement(t);
                        return 0 === e
                    },
                    isEndOfElement: function() {
                        var e = this.selection.getBlock();
                        if (!e) return !1;
                        var i = this.caret.getOffsetOfElement(e),
                            n = t.trim(t(e).text()).replace(/\n\r\n/g, "");
                        return i == n.length
                    },
                    isBlock: function(t) {
                        return t = t[0] || t, t && this.utils.isBlockTag(t.tagName)
                    },
                    isBlockTag: function(t) {
                        return "undefined" == typeof t ? !1 : this.reIsBlock.test(t)
                    },
                    isTag: function(e, i) {
                        var n = t(e).closest(i);
                        return 1 == n.size() ? n[0] : !1
                    },
                    isSelectAll: function() {
                        return this.selectAll
                    },
                    enableSelectAll: function() {
                        this.selectAll = !0
                    },
                    disableSelectAll: function() {
                        this.selectAll = !1
                    },
                    isRedactorParent: function(e) {
                        return e ? 0 === t(e).parents(".redactor-editor").length || t(e).hasClass("redactor-editor") ? !1 : e : !1
                    },
                    isCurrentOrParent: function(e) {
                        var i = this.selection.getParent(),
                            n = this.selection.getCurrent();
                        if (t.isArray(e)) {
                            var s = 0;
                            return t.each(e, t.proxy(function(t, e) {
                                this.utils.isCurrentOrParentOne(n, i, e) && s++
                            }, this)), 0 !== s
                        }
                        return this.utils.isCurrentOrParentOne(n, i, e)
                    },
                    isCurrentOrParentOne: function(t, e, i) {
                        return e && e.tagName === i ? e : t && t.tagName === i ? t : !1
                    },
                    isOldIe: function() {
                        return !!(this.utils.browser("msie") && parseInt(this.utils.browser("version"), 10) < 9)
                    },
                    isLessIe10: function() {
                        return !!(this.utils.browser("msie") && parseInt(this.utils.browser("version"), 10) < 10)
                    },
                    isIe11: function() {
                        return !!navigator.userAgent.match(/Trident\/7\./)
                    },
                    browser: function(t) {
                        var e = navigator.userAgent.toLowerCase(),
                            i = /(opr)[\/]([\w.]+)/.exec(e) || /(chrome)[ \/]([\w.]+)/.exec(e) || /(webkit)[ \/]([\w.]+).*(safari)[ \/]([\w.]+)/.exec(e) || /(webkit)[ \/]([\w.]+)/.exec(e) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e) || /(msie) ([\w.]+)/.exec(e) || e.indexOf("trident") >= 0 && /(rv)(?::| )([\w.]+)/.exec(e) || e.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e) || [];
                        return "version" == t ? i[2] : "webkit" == t ? "chrome" == i[1] || "webkit" == i[1] : "rv" == i[1] ? "msie" == t : "opr" == i[1] ? "webkit" == t : t == i[1]
                    }
                }
            }
        }, e.prototype.init.prototype = e.prototype, t.Redactor.fn.formatLinkify = function(e, i, o, a, r, l) {
            for (var c = "((?:http[s]?:\\/\\/(?:www\\.)?|www\\.){1}(?:[0-9A-Za-z\\-%_]+\\.)+[a-zA-Z]{2,}(?::[0-9]+)?(?:(?:/[0-9A-Za-z\\-\\.%+_]*)+)?(?:\\?(?:[0-9A-Za-z\\-\\.%_]+(?:=[0-9A-Za-z\\-\\.%_\\+]*)?)?(?:&(?:[0-9A-Za-z\\-\\.%_]+(?:=[0-9A-Za-z\\-\\.%_\\+]*)?)?)*)?(?:#[0-9A-Za-z\\-\\.%_\\+=\\?&;]*)?)", h = new RegExp(c, "gi"), d = /(https?|ftp):\/\//i, u = /(https?:\/\/.*\.(?:png|jpg|jpeg|gif))/gi, f = (this.$editor ? this.$editor[0] : this).childNodes, p = f.length; p--;) {
                var m = f[p];
                if (3 === m.nodeType) {
                    var g = m.nodeValue;
                    if (r && g) {
                        var v = '<iframe width="500" height="281" src="',
                            y = '" frameborder="0" allowfullscreen></iframe>';
                        g.match(n) ? (g = g.replace(n, v + "//www.youtube.com/embed/$1" + y), t(m).after(g).remove()) : g.match(s) && (g = g.replace(s, v + "//player.vimeo.com/video/$2" + y), t(m).after(g).remove())
                    }
                    if (a && g && g.match(u)) return g = g.replace(u, '<img src="$1" />'), void t(m).after(g).remove(); - 1 != g.search(/\$/g) && (g = g.replace(/\$/g, "&#36;"));
                    var b = g.match(h);
                    if (o && g && b) {
                        for (var x = b.length, k = 0; x > k; k++) {
                            null !== b[k].match(/\.$/) && (b[k] = b[k].replace(/\.$/, ""));
                            var _ = b[k],
                                w = _,
                                C = "";
                            null !== _.match(/\s$/) && (C = " ");
                            var T = e + "://";
                            null !== _.match(d) && (T = ""), w.length > l && (w = w.substring(0, l) + "..."), w = w.replace(/&#36;/g, "$").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;"), g = g.replace(_, '<a href="' + T + t.trim(_) + '">' + t.trim(w) + "</a>" + C)
                        }
                        t(m).after(g).remove()
                    }
                } else 1 !== m.nodeType || /^(a|button|textarea)$/i.test(m.tagName) || t.Redactor.fn.formatLinkify.call(m, e, i, o, a, r, l)
            }
        }
    }(jQuery), window.init_redactor = function() {
        var t, e = $("meta[name=csrf-token]").attr("content"),
            i = $("meta[name=csrf-param]").attr("content");
        /*void 0 !== i && void 0 !== e && (t = i + "=" + encodeURIComponent(e)), $(".redactor").redactor({
            imageUpload: "/redactor_rails/pictures?" + t,
            imageGetJson: "/redactor_rails/pictures",
            path: "/assets/redactor-rails",
            css: "style.css"
        })*/
    }, $(document).on("ready page:load", window.init_redactor);
var trado = {
    animation: {},
    tracking: {},
    modal: {},
    form: {},
    app: {},
    admin: {},
    misc: {},
    filter: {}
};
trado.admin = {
    jsonErrors: function(t, e, i, n) {
        var s, o, a, r, l, c;
        for (c = n, s = c.find("#errors"), s.find("ul").empty(), l = $.parseJSON(t.responseText).errors, a = 0, r = l.length; r > a; a++) o = l[a], s.show().find("ul").append('<li><i class="icon-cancel-circle"></i>' + o + "</li>");
        c.parent().hasClass("modal-content") || $("body").scrollTo(".page-header", 800), $(".loading-overlay").css("height", "0").removeClass("active"), $(".loading5").removeClass("active")
    },
    copyCountries: function() {
        $("body").on("click", "#copy-countries", function() {
            var t = $(this).attr("data-delivery-service-id");
            return $.ajax({
                url: "/admin/delivery_services/copy_countries",
                type: "GET",
                data: {
                    delivery_service_id: t
                },
                dataType: "json",
                success: function(t) {
                    $(".main .container").removeClass("fadeIn"), $("#delivery-service-modal").html(t.modal), soca.modal.standard("#delivery-service-form")
                }
            }), !1
        })
    },
    setCountries: function() {
        $("body").on("click", "#set-countries", function() {
            var t = $("#delivery_service_id").val(),
                e = $("#delivery-service-form #errors");
            return $.ajax({
                url: "/admin/delivery_services/set_countries",
                type: "POST",
                data: {
                    delivery_service_id: t
                },
                dataType: "json",
                success: function(t) {
                    $("#delivery_service_country_ids").val(t.countries), $("#delivery_service_country_ids").trigger("chosen:updated"), $("#delivery-service-form").modal("hide")
                },
                error: function(t) {
                    e.find("ul").empty(), e.show().find("ul").append('<li><i class="icon-cancel-circle"></i>' + t.responseJSON.errors + "</li>")
                }
            }), !1
        })
    },
    editOrder: function() {
        $("body").on("click", ".edit-order-record", function() {
            var t = $(this).attr("data-record-id");
            return $.ajax({
                url: "/admin/orders/" + t + "/edit",
                type: "GET",
                dataType: "json",
                success: function(t) {
                    $(".main .container").removeClass("fadeIn"), $("#order-modal").html(t.modal), soca.modal.standard("#order-form")
                }
            }), !1
        })
    },
    updateOrder: function() {
        $("body").on("submit", ".edit_order", function() {
            var t = $(this),
                e = t.attr("id");
            return $.ajax({
                url: "/admin/orders/" + e,
                type: "PATCH",
                data: t.serialize(),
                dataType: "json",
                success: function(t) {
                    if ($("#order-form").modal("hide"), $(".order-summary-row").length > 0) {
                        var e = $("#delivery-details");
                        e.find("#dispatch-date p span").html(t.dispatch_date), e.find("#tracking").html(t.tracking)
                    } else $("tr#order_" + t.order_id).html(t.row), soca.animation.alert(".widget-header", "success", "dispatch-order-alert", '<i class="icon-checkmark-circle"></i>Successfully updated Order #' + t.order_id + " as being dispatched on " + t.date + ".", 5e3)
                },
                error: function(e, i, n) {
                    trado.admin.jsonErrors(e, i, n, t)
                }
            }), !1
        })
    },
    deleteAttachment: function() {
        $("body").on("click", ".attachment-delete", function() {
            var t = $(this).attr("data-url");
            return $.ajax({
                url: t,
                type: "DELETE",
                dataType: "json",
                success: function(t) {
                    t.last_record ? $("#attachments").html(t.html) : $("#attachment-" + t.attachment_id).remove(), soca.animation.alert("#attachments", "success", "attachment-destroy-alert", '<i class="icon-checkmark-circle"></i>Successfully deleted the image.', 3500)
                }
            }), !1
        })
    },
    showAttachment: function() {
        $("body").on("click", ".show-attachment", function() {
            var t = $(this).attr("data-product-id"),
                e = $(this).attr("data-attachment-id");
            return $.ajax({
                url: "/admin/products/" + t + "/attachments/" + e,
                type: "GET",
                dataType: "json",
                success: function(t) {
                    $(".main .container").removeClass("fadeIn"), $("#attachment-preview-modal").html(t.modal), soca.modal.standard("#attachment-preview-form")
                }
            }), !1
        })
    },
    newAttachment: function() {
        $("body").on("click", "#add-image", function() {
            var t = $(this).attr("href");
            return $.ajax({
                url: t,
                type: "GET",
                dataType: "json",
                success: function(t) {
                    $(".main .container").removeClass("fadeIn"), $("#attachment-modal").html(t.modal), soca.modal.standard("#attachment-form")
                }
            }), !1
        })
    },
    editAttachment: function() {
        $("body").on("click", ".edit-attachment", function() {
            var t = $(this).attr("href");
            return $.ajax({
                url: t,
                type: "GET",
                dataType: "json",
                success: function(t) {
                    $(".main .container").removeClass("fadeIn"), $("#attachment-modal").html(t.modal), soca.modal.standard("#attachment-form")
                }
            }), !1
        })
    },
    amendAttachments: function() {
        $("body").on("submit", "#amend_attachment", function(t) {
            t.stopPropagation(), t.preventDefault();
            var e = $(this);
            return url = e.attr("action"), method = e.attr("data-method"), message = "POST" === method ? "created" : "edited", formData = new FormData, serializedData = trado.misc.getUrlVars($(this).serialize()), formData.append("attachment[file]", $("#attachment_file")[0].files[0]), formData.append("attachment[default_record", serializedData["attachment[default_record]"]), $.ajax({
                url: url,
                type: method,
                data: formData,
                cache: !1,
                processData: !1,
                contentType: !1,
                success: function(t) {
                    $("#attachment-form").modal("hide"), $("#attachments").html(t.images), soca.animation.alert("#attachments", "success", "amend-attachment-alert", '<i class="icon-checkmark-circle"></i>Successfully ' + message + " an image.", 5e3)
                },
                error: function(t, i, n) {
                    trado.admin.jsonErrors(t, i, n, e)
                }
            }), !1
        })
    },
    deleteSku: function() {
        $("body").on("click", ".sku-delete", function() {
            var t = $(this).attr("href");
            return $.ajax({
                url: t,
                type: "DELETE",
                dataType: "json",
                success: function(t) {
                    t.last_record ? ($("#add-sku-button").addClass("hide"), $("#skus").html('<div class="helper-notification"><p>You do not have any variants for this product.</p><i class="icon-tags"></i></div>')) : $("#sku-" + t.sku_id).remove(), soca.animation.alert("#skus", "success", "sku-destroy-alert", '<i class="icon-checkmark-circle"></i>Successfully deleted the variant.', 3500)
                }
            }), !1
        })
    },
    newSku: function() {
        $("body").on("click", "#add-sku-button", function() {
            var t = $(this).attr("href");
            return $.ajax({
                url: t,
                type: "GET",
                dataType: "json",
                success: function(t) {
                    $(".main .container").removeClass("fadeIn"), $("#sku-modal").html(t.modal), soca.modal.standard("#sku-form")
                }
            }), !1
        })
    },
    editSku: function() {
        $("body").on("click", ".edit-sku-button", function() {
            var t = $(this).attr("href");
            return $.ajax({
                url: t,
                type: "GET",
                dataType: "json",
                success: function(t) {
                    $(".main .container").removeClass("fadeIn"), $("#sku-modal").html(t.modal), soca.modal.standard("#sku-form")
                }
            }), !1
        })
    },
    amendSkus: function() {
        $("body").on("submit", ".amend-sku", function() {
            var t, e = $(this),
                i = e.attr("action"),
                n = e.attr("data-method");
            return $.ajax({
                url: i,
                type: n,
                data: e.serialize(),
                dataType: "json",
                success: function(e) {
                    $("#sku-form").modal("hide"), "POST" === n ? (t = "created", $("#sku-fields").append("<tr id='sku-" + e.sku_id + "'>" + e.row + "</tr>")) : (t = "updated", $("tr#sku-" + e.sku_id).html(e.row)), soca.animation.alert("#skus", "success", "sku-" + t + "-alert", '<i class="icon-checkmark-circle"></i>Successfully ' + t + " a variant.", 3500)
                },
                error: function(t, i, n) {
                    trado.admin.jsonErrors(t, i, n, e)
                }
            }), !1
        })
    },
    newStockAdjustment: function() {
        $("body").on("click", "#add-stock-adjustment-button", function() {
            var t = $(this).attr("href");
            return $.ajax({
                url: t,
                type: "GET",
                dataType: "json",
                success: function(t) {
                    $(".main .container").removeClass("fadeIn"), $("#stock-adjustment-modal").html(t.modal), soca.modal.standard("#stock-adjustment-form")
                }
            }), !1
        })
    },
    createStockAdjustments: function() {
        $("body").on("submit", ".amend-stock-adjustment", function() {
            var t = $(this),
                e = t.attr("action");
            return $.ajax({
                url: e,
                type: "POST",
                data: t.serialize(),
                dataType: "json",
                success: function(t) {
                    $("#stock-table tbody tr:first-child td:last-child").removeClass("td-green"), $("#stock-table tbody").prepend(t.row), $("#stock-adjustment-form").modal("hide"), soca.animation.alert(".page-header", "success", "stock-adjustment-create-alert", '<i class="icon-checkmark-circle"></i>Successfully created a new stock adjustment for ' + t.sku_name + ".", 5e3)
                },
                error: function(e, i, n) {
                    trado.admin.jsonErrors(e, i, n, t)
                }
            }), !1
        })
    },
    newVariants: function() {
        $("body").on("click", "#sku-variant-options-button", function() {
            var t = $(this).attr("href");
            return $.ajax({
                url: t,
                type: "GET",
                dataType: "json",
                success: function(t) {
                    $(".main .container").removeClass("fadeIn"), $("#sku-variants-modal").html(t.modal), soca.modal.standard("#sku-variants-form"), $(".tagsinput").tagsinput(), t.active_skus && $(".tagsinput").tagsinput("disable")
                }
            }), !1
        })
    },
    resetVariants: function() {
        $("body").on("click", "#reset-sku-variants-button", function() {
            var t = $(this).attr("href");
            return $.ajax({
                url: t,
                type: "DELETE",
                dataType: "json",
                success: function() {
                    $("#sku-variants-form").modal("hide"), $("#add-sku-button").addClass("hide"), $("#skus").html('<div class="helper-notification"><p>You do not have any variants for this product.</p><i class="icon-tags"></i></div>'), soca.animation.alert("#skus", "success", "sku-variant-reset-alert", '<i class="icon-checkmark-circle"></i>Successfully reset the variants for this product.', 3500)
                }
            }), !1
        })
    },
    amendVariants: function() {
        $("body").on("submit", ".amend-variants", function() {
            var t, e = $(this),
                i = e.attr("action"),
                n = e.attr("data-method");
            return $.ajax({
                url: i,
                type: n,
                data: e.serialize(),
                dataType: "json",
                success: function(e) {
                    $("#sku-variants-form").modal("hide"), "POST" === n ? (t = "created", $("#add-sku-button").removeClass("hide"), $("#skus").html(e.table)) : (t = "deleted", e.product_skus_empty ? ($("#add-sku-button").addClass("hide"), $("#skus").html('<div class="helper-notification"><p>You do not have any variants for this product.</p><i class="icon-tags"></i></div>')) : $("#skus").html(e.table)), soca.animation.alert("#skus", "success", "sku-variant-" + t + "-alert", '<i class="icon-checkmark-circle"></i>Successfully ' + t + " " + e.sku_count_text + ".", 3500)
                },
                error: function(t, i, n) {
                    trado.admin.jsonErrors(t, i, n, e)
                }
            }), !1
        })
    },
    showTransaction: function() {
        $("body").on("click", ".transaction-info-modal", function() {
            var t = $(this).attr("data-record-id");
            return $.ajax({
                url: "/admin/transactions/" + t,
                type: "GET",
                dataType: "json",
                success: function(t) {
                    $(".main .container").removeClass("fadeIn"), $("#transaction-modal").html(t.modal), soca.modal.standard("#transaction-info")
                }
            }), !1
        })
    },
    collectionCreateStockAdjustment: function() {
        $("#new_stock_adjustments").submit(function() {
            var t = $(this);
            return $("input[type=submit]").attr("disabled", !0), $.ajax({
                url: "/admin/products/stock_adjustments",
                type: "POST",
                data: t.serialize(),
                dataType: "json",
                success: function() {
                    t[0].submit()
                },
                error: function(e, i, n) {
                    $("input[type=submit]").attr("disabled", !1), trado.admin.jsonErrors(e, i, n, t)
                }
            }), !1
        })
    },
    addStockAdjustmentfields: function(t) {
        var e = (new Date).getTime(),
            i = new RegExp("sku_stock_adjustments", "g");
        //$("#stock-adjustment-fields").append(t.replace(i, e)), $("select.chosen").chosen()
    },
    removeStockAdjustmentFields: function(t) {
        $("#stock-adjustment-fields .fields:not(.deleted)").length > 1 && ($(t).prev("input[type=hidden]").val("1"), $(t).closest(".fields").addClass("deleted").hide())
    }
}, trado.misc = {
    log: function(t) {
        return "object" == typeof console ? console.log(t) : null
    },
    getUrlVars: function(t) {
        for (var e, t = null == t ? window.location.href.slice(window.location.href.indexOf("?") + 1) : decodeURIComponent(t), i = [], n = t.split("&"), s = 0; s < n.length; s++) e = n[s].split("="), i.push(e[0]), i[e[0]] = e[1];
        return i
    },
    clearAllIntervals: function() {
        for (var t = 1; 99999 > t; t++) window.clearInterval(t)
    }
};
var taxRate = 1;
ready = function() {
    trado.misc.clearAllIntervals(), soca.animation.loading(), soca.animation.colourCaveat(), soca.animation.sidebarExtension(), soca.index.tableRowTarget(), soca.index.sort("#sort-product"), soca.index.filter("#filter-product-category"), soca.index.filter("#filter-stock"), soca.index.filter("#filter-order-delivery"), soca.misc.taxField(), soca.misc.multiSelect(), soca.misc.updateTableHeight(), soca.mobile.disableTooltips(), soca.mobile.triggerMenu(), trado.admin.copyCountries(), trado.admin.setCountries(), trado.admin.editOrder(), trado.admin.updateOrder(), trado.admin.deleteAttachment(), trado.admin.showAttachment(), trado.admin.newAttachment(), trado.admin.editAttachment(), trado.admin.amendAttachments(), trado.admin.deleteSku(), trado.admin.newSku(), trado.admin.editSku(), trado.admin.amendSkus(), trado.admin.newStockAdjustment(), trado.admin.createStockAdjustments(), trado.admin.collectionCreateStockAdjustment(), trado.admin.newVariants(), trado.admin.resetVariants(), trado.admin.amendVariants(), trado.admin.showTransaction()
}, $(document).ready(ready), $(document).on("page:change page:load", function() {
    trado.misc.clearAllIntervals(), $("[data-toggle=tooltip]").tooltip("hide"), $(".main .container").removeClass("fadeOut").addClass("animated fadeIn")
}), $(document).on("page:fetch", function() {
    return $(".main .container").addClass("animated fadeOut"), $(".loading5").addClass("active")
}), $(document).on("page:receive", function() {
    return $(".loading-overlay").removeClass("active"), $(".loading5").removeClass("active")
}), $(document).ajaxComplete(function() {
    soca.misc.taxField()
});
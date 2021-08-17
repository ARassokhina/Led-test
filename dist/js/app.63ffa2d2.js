(function (t) {
    function s(s) {
        for (var h, n, l = s[0], r = s[1], u = s[2], o = 0, v = []; o < l.length; o++) n = l[o], Object.prototype.hasOwnProperty.call(a, n) && a[n] && v.push(a[n][0]), a[n] = 0;
        for (h in r) Object.prototype.hasOwnProperty.call(r, h) && (t[h] = r[h]);
        c && c(s);
        while (v.length) v.shift()();
        return e.push.apply(e, u || []), i()
    }

    function i() {
        for (var t, s = 0; s < e.length; s++) {
            for (var i = e[s], h = !0, l = 1; l < i.length; l++) {
                var r = i[l];
                0 !== a[r] && (h = !1)
            }
            h && (e.splice(s--, 1), t = n(n.s = i[0]))
        }
        return t
    }
    var h = {},
        a = {
            app: 0
        },
        e = [];

    function n(s) {
        if (h[s]) return h[s].exports;
        var i = h[s] = {
            i: s,
            l: !1,
            exports: {}
        };
        return t[s].call(i.exports, i, i.exports, n), i.l = !0, i.exports
    }
    n.m = t, n.c = h, n.d = function (t, s, i) {
        n.o(t, s) || Object.defineProperty(t, s, {
            enumerable: !0,
            get: i
        })
    }, n.r = function (t) {
        "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }, n.t = function (t, s) {
        if (1 & s && (t = n(t)), 8 & s) return t;
        if (4 & s && "object" === typeof t && t && t.__esModule) return t;
        var i = Object.create(null);
        if (n.r(i), Object.defineProperty(i, "default", {
                enumerable: !0,
                value: t
            }), 2 & s && "string" != typeof t)
            for (var h in t) n.d(i, h, function (s) {
                return t[s]
            }.bind(null, h));
        return i
    }, n.n = function (t) {
        var s = t && t.__esModule ? function () {
            return t["default"]
        } : function () {
            return t
        };
        return n.d(s, "a", s), s
    }, n.o = function (t, s) {
        return Object.prototype.hasOwnProperty.call(t, s)
    }, n.p = "";
    var l = window["webpackJsonp"] = window["webpackJsonp"] || [],
        r = l.push.bind(l);
    l.push = s, l = l.slice();
    for (var u = 0; u < l.length; u++) s(l[u]);
    var c = r;
    e.push([0, "chunk-vendors"]), i()
})({
    0: function (t, s, i) {
        t.exports = i("56d7")
    },
    "56d7": function (t, s, i) {
        "use strict";
        i.r(s);
        i("e260"), i("e6cf"), i("cca6"), i("a79d");
        var h = i("7a23"),
            a = {
                id: "canvas-app"
            };

        function e(t, s, i, e, n, l) {
            var r = Object(h["h"])("Canvas");
            return Object(h["f"])(), Object(h["b"])("div", a, [Object(h["d"])(r)])
        }
        var n = {
                class: "wrapper"
            },
            l = {
                class: "input"
            },
            r = Object(h["c"])("p", {
                class: "label"
            }, "Top", -1),
            u = Object(h["c"])("span", {
                class: "label"
            }, "Left", -1),
            c = Object(h["c"])("span", {
                class: "label"
            }, "Height", -1),
            o = Object(h["c"])("span", {
                class: "label"
            }, "Width", -1);

        function v(t, s, i, a, e, v) {
            return Object(h["f"])(), Object(h["b"])("div", n, [Object(h["c"])("canvas", {
                id: "canvas",
                width: "800",
                height: "500",
                onMousemove: s[0] || (s[0] = function () {
                    return v.mouseMove && v.mouseMove.apply(v, arguments)
                }),
                onMouseleave: s[1] || (s[1] = function () {
                    return v.mouseLeave && v.mouseLeave.apply(v, arguments)
                }),
                onMousedown: s[2] || (s[2] = function () {
                    return v.mouseDown && v.mouseDown.apply(v, arguments)
                }),
                onMouseup: s[3] || (s[3] = function () {
                    return v.mouseUp && v.mouseUp.apply(v, arguments)
                })
            }, null, 32), Object(h["c"])("div", l, [r, Object(h["k"])(Object(h["c"])("input", {
                type: "number",
                min: "0",
                oninput: "validity.valid||(value='');",
                "onUpdate:modelValue": s[4] || (s[4] = function (t) {
                    return e.startX = t
                })
            }, null, 512), [
                [h["i"], e.startX, void 0, {
                    number: !0
                }]
            ]), u, Object(h["k"])(Object(h["c"])("input", {
                type: "number",
                min: "0",
                oninput: "validity.valid||(value='');",
                "onUpdate:modelValue": s[5] || (s[5] = function (t) {
                    return e.startY = t
                })
            }, null, 512), [
                [h["i"], e.startY, void 0, {
                    number: !0
                }]
            ]), c, Object(h["k"])(Object(h["c"])("input", {
                type: "number",
                min: "0",
                oninput: "validity.valid||(value='');",
                "onUpdate:modelValue": s[6] || (s[6] = function (t) {
                    return e.w = t
                })
            }, null, 512), [
                [h["i"], e.w, void 0, {
                    number: !0
                }]
            ]), o, Object(h["k"])(Object(h["c"])("input", {
                type: "number",
                min: "0",
                oninput: "validity.valid||(value='');",
                "onUpdate:modelValue": s[7] || (s[7] = function (t) {
                    return e.h = t
                })
            }, null, 512), [
                [h["i"], e.h, void 0, {
                    number: !0
                }]
            ])])])
        }
        i("cb29");
        var d = {
            name: "Canvas",
            data: function () {
                return {
                    vueCanvas: null,
                    closeEnough: 20,
                    handleWidth: 20,
                    handleHeight: 10,
                    dragL: !1,
                    dragC: !1,
                    dragT: !1,
                    dragB: !1,
                    dragR: !1,
                    cw: null,
                    ch: null,
                    canvas: null,
                    startX: 50,
                    startY: 50,
                    w: 163,
                    h: 108
                }
            },
            mounted: function () {
                var t = document.getElementById("canvas");
                this.canvas = t, this.cw = t.width, this.ch = t.height;
                var s = t.getContext("2d");
                this.vueCanvas = s, console.log(this.startX)
            },
            methods: {
                mouseDown: function (t) {
                    var s = Math.min(this.handleWidth, this.handleHeight),
                        i = t.pageX - this.canvas.offsetLeft,
                        h = t.pageY - this.canvas.offsetTop;
                    void 0 === this.w ? (this.startX = h, this.startY = i, this.dragR = !0) : Math.abs(i - (this.startX + this.w / 2)) < this.closeEnough && Math.abs(h - this.startY) < this.closeEnough ? this.dragT = !0 : Math.abs(i - (this.startX + this.w)) < this.closeEnough && Math.abs(h - (this.startY + this.h / 2)) < this.closeEnough ? this.dragR = !0 : Math.abs(i - this.startX) < this.closeEnough && Math.abs(h - (this.startY + this.h / 2)) < this.closeEnough ? this.dragL = !0 : Math.abs(i - (this.startX + this.w / 2)) < this.closeEnough && Math.abs(h - (this.startY + this.h)) < this.closeEnough ? this.dragB = !0 : Math.abs(i - (this.startX + this.w / 2)) < this.closeEnough && Math.abs(h - (this.startY + this.h / 2)) < this.closeEnough && (this.dragC = !0), this.startX + this.w <= this.cw && this.startY + this.h <= this.ch ? (this.vueCanvas.clearRect(0, 0, this.cw, this.ch), this.vueCanvas.fillStyle = "#80ffd5", this.vueCanvas.fillRect(this.startX, this.startY, this.w, this.h), this.vueCanvas.fillStyle = "#FF0000", this.vueCanvas.beginPath(), this.vueCanvas.fillRect(this.startX - 5, this.startY + this.h / 2 - 10, this.handleHeight, this.handleWidth), this.vueCanvas.fill(), this.vueCanvas.fillStyle = "#FF0000", this.vueCanvas.beginPath(), this.vueCanvas.fillRect(this.startX + this.w - this.handleHeight / 2, this.startY + Math.ceil(this.h / 2) - this.handleWidth / 2, this.handleHeight, this.handleWidth), this.vueCanvas.fill(), this.vueCanvas.fillStyle = "#FF0000", this.vueCanvas.beginPath(), this.vueCanvas.fillRect(this.startX + Math.ceil(this.w / 2) - this.handleWidth / 2, this.startY - this.handleHeight / 2, this.handleWidth, this.handleHeight), this.vueCanvas.fill(), this.vueCanvas.fillStyle = "#FF0000", this.vueCanvas.beginPath(), this.vueCanvas.fillRect(this.startX + Math.ceil(this.w / 2) - this.handleWidth / 2, this.startY + this.h - this.handleHeight / 2, this.handleWidth, this.handleHeight), this.vueCanvas.fill(), this.vueCanvas.fillStyle = "#FF0000", this.vueCanvas.beginPath(), this.vueCanvas.fillRect(this.startX + Math.ceil(this.w / 2) - s / 2, this.startY + Math.ceil(this.h / 2) - s / 2, s, s), this.vueCanvas.fill()) : (alert("Введенные значения некорректны!"), this.startX = 50, this.startY = 50, this.w = 163, this.h = 108)
                },
                mouseUp: function () {
                    this.dragT = this.dragR = this.dragB = this.dragL = this.dragC = !1
                },
                mouseLeave: function () {
                    this.dragT = this.dragR = this.dragB = this.dragL = this.dragC = !1
                },
                mouseMove: function (t) {
                    var s = Math.min(this.handleWidth, this.handleHeight),
                        i = t.pageX - this.canvas.offsetLeft,
                        h = t.pageY - this.canvas.offsetTop;
                    this.dragT ? (this.h += this.startY - Math.min(h, this.startY + this.h), this.startY = Math.min(h, this.startY + this.h)) : this.dragR ? this.w += Math.max(i - this.startX, 0) - this.w : this.dragB ? this.h += Math.max(h - this.startY, 0) - this.h : this.dragL ? (this.w += -Math.min(i, this.startX + this.w) + this.startX, this.startX = Math.min(i, this.startX + this.w)) : this.dragC && i + Math.ceil(this.w / 2) < this.cw && i - Math.ceil(this.w / 2) > 0 && h + Math.ceil(this.h / 2) < this.ch && h - Math.ceil(this.h / 2) > 0 && (this.startX += i - this.startX - Math.ceil(this.w / 2), this.startY += h - this.startY - Math.ceil(this.h / 2)), this.startX + this.w <= this.cw && this.startY + this.h <= this.ch ? (this.vueCanvas.clearRect(0, 0, this.cw, this.ch), this.vueCanvas.fillStyle = "#80ffd5", this.vueCanvas.fillRect(this.startX, this.startY, this.w, this.h), this.vueCanvas.fillStyle = "#FF0000", this.vueCanvas.beginPath(), this.vueCanvas.fillRect(this.startX - this.handleHeight / 2, this.startY + Math.ceil(this.h / 2) - this.handleWidth / 2, this.handleHeight, this.handleWidth), this.vueCanvas.fill(), this.vueCanvas.fillStyle = "#FF0000", this.vueCanvas.beginPath(), this.vueCanvas.fillRect(this.startX + this.w - this.handleHeight / 2, this.startY + Math.ceil(this.h / 2) - this.handleWidth / 2, this.handleHeight, this.handleWidth), this.vueCanvas.fill(), this.vueCanvas.fillStyle = "#FF0000", this.vueCanvas.beginPath(), this.vueCanvas.fillRect(this.startX + Math.ceil(this.w / 2) - this.handleWidth / 2, this.startY - this.handleHeight / 2, this.handleWidth, this.handleHeight), this.vueCanvas.fill(), this.vueCanvas.fillStyle = "#FF0000", this.vueCanvas.beginPath(), this.vueCanvas.fillRect(this.startX + Math.ceil(this.w / 2) - this.handleWidth / 2, this.startY + this.h - this.handleHeight / 2, this.handleWidth, this.handleHeight), this.vueCanvas.fill(), this.vueCanvas.fillStyle = "#FF0000", this.vueCanvas.beginPath(), this.vueCanvas.fillRect(this.startX + Math.ceil(this.w / 2) - s / 2, this.startY + Math.ceil(this.h / 2) - s / 2, s, s), this.vueCanvas.fill()) : (alert("Введенные значения некорректны!"), this.startX = 50, this.startY = 50, this.w = 163, this.h = 108)
                }
            }
        };
        d.render = v;
        var f = d,
            g = {
                name: "App",
                components: {
                    Canvas: f
                }
            };
        i("c42a");
        g.render = e;
        var p = g,
            b = i("5502"),
            C = Object(b["a"])({
                state: {},
                mutations: {},
                actions: {},
                modules: {}
            });
        Object(h["a"])(p).use(C).mount("#app")
    },
    a72c: function (t, s, i) {},
    c42a: function (t, s, i) {
        "use strict";
        i("a72c")
    }
});
//# sourceMappingURL=app.63ffa2d2.js.map
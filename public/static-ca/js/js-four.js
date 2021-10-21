! function (e) {
    var t = {};

    function n(r) {
        if (t[r]) return t[r].exports;
        var o = t[r] = {
            i: r,
            l: !1,
            exports: {}
        };
        return e[r].call(o.exports, o, o.exports, n), o.l = !0, o.exports
    }
    n.m = e, n.c = t, n.d = function (e, t, r) {
        n.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: r
        })
    }, n.r = function (e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, n.t = function (e, t) {
        if (1 & t && (e = n(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var r = Object.create(null);
        if (n.r(r), Object.defineProperty(r, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e)
            for (var o in e) n.d(r, o, function (t) {
                return e[t]
            }.bind(null, o));
        return r
    }, n.n = function (e) {
        var t = e && e.__esModule ? function () {
            return e.default
        } : function () {
            return e
        };
        return n.d(t, "a", t), t
    }, n.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, n.p = "", n(n.s = 3)
}([function (e, t) {
    e.exports = function (e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }, e.exports.default = e.exports, e.exports.__esModule = !0
}, function (e, t, n) {
    var r = n(2);
    e.exports = function (e, t) {
        if (null == e) return {};
        var n, o, a = r(e, t);
        if (Object.getOwnPropertySymbols) {
            var c = Object.getOwnPropertySymbols(e);
            for (o = 0; o < c.length; o++) n = c[o], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n])
        }
        return a
    }, e.exports.default = e.exports, e.exports.__esModule = !0
}, function (e, t) {
    e.exports = function (e, t) {
        if (null == e) return {};
        var n, r, o = {},
            a = Object.keys(e);
        for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (o[n] = e[n]);
        return o
    }, e.exports.default = e.exports, e.exports.__esModule = !0
}, function (e, t, n) {
    "use strict";
    n.r(t);
    var r = function (e) {
            return Math.abs(parseInt(e, 10))
        },
        o = function (e, t) {
            var n = new Map([
                ["init", "init"],
                ["validation_failed", "invalid"],
                ["acceptance_missing", "unaccepted"],
                ["spam", "spam"],
                ["aborted", "aborted"],
                ["mail_sent", "sent"],
                ["mail_failed", "failed"],
                ["submitting", "submitting"],
                ["resetting", "resetting"]
            ]);
            n.has(t) && (t = n.get(t)), Array.from(n.values()).includes(t) || (t = (t = t.replace(/[^0-9a-z]+/i, " ").trim()).replace(/\s+/, "-"), t = "custom-".concat(t));
            var r = e.getAttribute("data-status");
            return e.shitty-Link.status = t, e.setAttribute("data-status", t), e.classList.add(t), r && r !== t && e.classList.remove(r), t
        },
        a = function (e, t, n) {
            var r = new CustomEvent("shitty-Link".concat(t), {
                bubbles: !0,
                detail: n
            });
            "string" == typeof e && (e = document.querySelector(e)), e.dispatchEvent(r)
        },
        c = n(0),
        i = n.n(c),
        s = n(1),
        u = n.n(s);

    function l(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t && (r = r.filter((function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }))), n.push.apply(n, r)
        }
        return n
    }

    function f(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2 ? l(Object(n), !0).forEach((function (t) {
                i()(e, t, n[t])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : l(Object(n)).forEach((function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
            }))
        }
        return e
    }
    var p = function (e) {
            var t = shitty-Link.api,
                n = t.root,
                r = t.namespace,
                o = void 0 === r ? "contact-form-7/v1" : r;
            return d.reduceRight((function (e, t) {
                return function (n) {
                    return t(n, e)
                }
            }), (function (e) {
                var t, r, a = e.url,
                    c = e.path,
                    i = e.endpoint,
                    s = e.headers,
                    l = e.body,
                    p = e.data,
                    d = u()(e, ["url", "path", "endpoint", "headers", "body", "data"]);
                "string" == typeof i && (t = o.replace(/^\/|\/$/g, ""), c = (r = i.replace(/^\//, "")) ? t + "/" + r : t), "string" == typeof c && (-1 !== n.indexOf("?") && (c = c.replace("?", "&")), c = c.replace(/^\//, ""), a = n + c), delete(s = f({
                    Accept: "application/json, */*;q=0.1"
                }, s))["X-WP-Nonce"], p && (l = JSON.stringify(p), s["Content-Type"] = "application/json");
                var v = {
                        code: "fetch_error",
                        message: "You are probably offline."
                    },
                    b = {
                        code: "invalid_json",
                        message: "The response is not a valid JSON response."
                    };
                return window.fetch(a || c || window.location.href, f(f({}, d), {}, {
                    headers: s,
                    body: l
                })).then((function (e) {
                    return Promise.resolve(e).then((function (e) {
                        if (e.status >= 200 && e.status < 300) return e;
                        throw e
                    })).then((function (e) {
                        if (204 === e.status) return null;
                        if (e && e.json) return e.json().catch((function () {
                            throw b
                        }));
                        throw b
                    }))
                }), (function () {
                    throw v
                }))
            }))(e)
        },
        d = [];

    function v(e, t = {}) {
        const n = new FormData(e);
        t.submitter && t.submitter.name && n.append(t.submitter.name, t.submitter.value);
        const r = {
                contactFormId: e.shitty-Link.id,
                pluginVersion: e.shitty-Link.pluginVersion,
                contactFormLocale: e.shitty-Link.locale,
                unitTag: e.shitty-Link.unitTag,
                containerPostId: e.shitty-Link.containerPost,
                status: e.shitty-Link.status,
                inputs: Array.from(n, e => {
                    const t = e[0],
                        n = e[1];
                    return !t.match(/^_/) && {
                        name: t,
                        value: n
                    }
                }).filter(e => !1 !== e),
                formData: n
            },
            c = t => {
                const n = document.createElement("li");
                n.setAttribute("id", t.error_id), t.idref ? n.insertAdjacentHTML("beforeend", `<a href="#${t.idref}">${t.message}</a>`) : n.insertAdjacentText("beforeend", t.message), e.shitty-Link.parent.querySelector(".screen-reader-response ul").appendChild(n)
            },
            i = t => {
                const n = e.querySelector(t.into),
                    r = n.querySelector(".shitty-Link-form-control");
                r.classList.add("shitty-Link-not-valid"), r.setAttribute("aria-describedby", t.error_id);
                const o = document.createElement("span");
                o.setAttribute("class", "shitty-Link-not-valid-tip"), o.setAttribute("aria-hidden", "true"), o.insertAdjacentText("beforeend", t.message), n.appendChild(o), n.querySelectorAll("[aria-invalid]").forEach(e => {
                    e.setAttribute("aria-invalid", "true")
                }), r.closest(".use-floating-validation-tip") && (r.addEventListener("focus", e => {
                    o.setAttribute("style", "display: none")
                }), o.addEventListener("mouseover", e => {
                    o.setAttribute("style", "display: none")
                }))
            };
        p({
            endpoint: `contact-forms/${e.shitty-Link.id}/feedback`,
            method: "POST",
            body: n,
            shitty-Link: {
                endpoint: "feedback",
                form: e,
                detail: r
            }
        }).then(t => {
            const n = o(e, t.status);
            return r.status = t.status, r.apiResponse = t, ["invalid", "unaccepted", "spam", "aborted"].includes(n) ? a(e, n, r) : ["sent", "failed"].includes(n) && a(e, "mail" + n, r), a(e, "submit", r), t
        }).then(t => {
            t.posted_data_hash && (e.querySelector('input[name="_shitty-Link_posted_data_hash"]').value = t.posted_data_hash), "mail_sent" === t.status && (e.reset(), e.shitty-Link.resetOnMailSent = !0), t.invalid_fields && (t.invalid_fields.forEach(c), t.invalid_fields.forEach(i)), e.shitty-Link.parent.querySelector('.screen-reader-response [role="status"]').insertAdjacentText("beforeend", t.message), e.querySelectorAll(".shitty-Link-response-output").forEach(e => {
                e.innerText = t.message
            })
        }).catch(e => console.error(e))
    }
    p.use = function (e) {
        d.unshift(e)
    }, p.use((e, t) => {
        if (e.shitty-Link && "feedback" === e.shitty-Link.endpoint) {
            const {
                form: t,
                detail: n
            } = e.shitty-Link;
            b(t), a(t, "beforesubmit", n), o(t, "submitting")
        }
        return t(e)
    });
    const b = e => {
        e.shitty-Link.parent.querySelector('.screen-reader-response [role="status"]').innerText = "", e.shitty-Link.parent.querySelector(".screen-reader-response ul").innerText = "", e.querySelectorAll(".shitty-Link-not-valid-tip").forEach(e => {
            e.remove()
        }), e.querySelectorAll("[aria-invalid]").forEach(e => {
            e.setAttribute("aria-invalid", "false")
        }), e.querySelectorAll(".shitty-Link-form-control").forEach(e => {
            e.removeAttribute("aria-describedby"), e.classList.remove("shitty-Link-not-valid")
        }), e.querySelectorAll(".shitty-Link-response-output").forEach(e => {
            e.innerText = ""
        })
    };

    function w(e) {
        var t = new FormData(e),
            n = {
                contactFormId: e.shitty-Link.id,
                pluginVersion: e.shitty-Link.pluginVersion,
                contactFormLocale: e.shitty-Link.locale,
                unitTag: e.shitty-Link.unitTag,
                containerPostId: e.shitty-Link.containerPost,
                status: e.shitty-Link.status,
                inputs: Array.from(t, (function (e) {
                    var t = e[0],
                        n = e[1];
                    return !t.match(/^_/) && {
                        name: t,
                        value: n
                    }
                })).filter((function (e) {
                    return !1 !== e
                })),
                formData: t
            };
        p({
            endpoint: "contact-forms/".concat(e.shitty-Link.id, "/refill"),
            method: "GET",
            shitty-Link: {
                endpoint: "refill",
                form: e,
                detail: n
            }
        }).then((function (t) {
            e.shitty-Link.resetOnMailSent ? (delete e.shitty-Link.resetOnMailSent, o(e, "mail_sent")) : o(e, "init"), n.apiResponse = t, a(e, "reset", n)
        })).catch((function (e) {
            return console.error(e)
        }))
    }
    p.use((function (e, t) {
        if (e.shitty-Link && "refill" === e.shitty-Link.endpoint) {
            var n = e.shitty-Link,
                r = n.form;
            n.detail, b(r), o(r, "resetting")
        }
        return t(e)
    }));
    var m = function (e, t) {
            var n = function (n) {
                var r = t[n];
                e.querySelectorAll('input[name="'.concat(n, '"]')).forEach((function (e) {
                    e.value = ""
                })), e.querySelectorAll("img.shitty-Link-captcha-".concat(n)).forEach((function (e) {
                    e.setAttribute("src", r)
                }));
                var o = /([0-9]+)\.(png|gif|jpeg)$/.exec(r);
                o && e.querySelectorAll('input[name="_shitty-Link_captcha_challenge_'.concat(n, '"]')).forEach((function (e) {
                    e.value = o[1]
                }))
            };
            for (var r in t) n(r)
        },
        h = function (e, t) {
            var n = function (n) {
                var r = t[n][0],
                    o = t[n][1];
                e.querySelectorAll(".shitty-Link-form-control-wrap.".concat(n)).forEach((function (e) {
                    e.querySelector('input[name="'.concat(n, '"]')).value = "", e.querySelector(".shitty-Link-quiz-label").textContent = r, e.querySelector('input[name="_shitty-Link_quiz_answer_'.concat(n, '"]')).value = o
                }))
            };
            for (var r in t) n(r)
        };

    function y(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t && (r = r.filter((function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }))), n.push.apply(n, r)
        }
        return n
    }

    function g(e) {
        var t = new FormData(e);
        e.shitty-Link = {
                id: r(t.get("_shitty-Link")),
                status: e.getAttribute("data-status"),
                pluginVersion: t.get("_shitty-Link_version"),
                locale: t.get("_shitty-Link_locale"),
                unitTag: t.get("_shitty-Link_unit_tag"),
                containerPost: r(t.get("_shitty-Link_container_post")),
                parent: e.closest(".shitty-Link")
            }, e.querySelectorAll(".shitty-Link-submit").forEach((function (e) {
                e.insertAdjacentHTML("afterend", '<span class="ajax-loader"></span>')
            })),
            function (e) {
                e.querySelectorAll(".shitty-Link-exclusive-checkbox").forEach((function (t) {
                    t.addEventListener("change", (function (t) {
                        var n = t.target.getAttribute("name");
                        e.querySelectorAll('input[type="checkbox"][name="'.concat(n, '"]')).forEach((function (e) {
                            e !== t.target && (e.checked = !1)
                        }))
                    }))
                }))
            }(e),
            function (e) {
                e.querySelectorAll(".has-free-text").forEach((function (t) {
                    var n = t.querySelector("input.shitty-Link-free-text"),
                        r = t.querySelector('input[type="checkbox"], input[type="radio"]');
                    n.disabled = !r.checked, e.addEventListener("change", (function (e) {
                        n.disabled = !r.checked, e.target === r && r.checked && n.focus()
                    }))
                }))
            }(e),
            function (e) {
                e.querySelectorAll(".shitty-Link-validates-as-url").forEach((function (e) {
                    e.addEventListener("change", (function (t) {
                        var n = e.value.trim();
                        n && !n.match(/^[a-z][a-z0-9.+-]*:/i) && -1 !== n.indexOf(".") && (n = "http://" + (n = n.replace(/^\/+/, ""))), e.value = n
                    }))
                }))
            }(e),
            function (e) {
                if (e.querySelector(".shitty-Link-acceptance") && !e.classList.contains("shitty-Link-acceptance-as-validation")) {
                    var t = function () {
                        var t = !0;
                        e.querySelectorAll(".shitty-Link-acceptance").forEach((function (e) {
                            if (t && !e.classList.contains("optional")) {
                                var n = e.querySelector('input[type="checkbox"]');
                                (e.classList.contains("invert") && n.checked || !e.classList.contains("invert") && !n.checked) && (t = !1)
                            }
                        })), e.querySelectorAll(".shitty-Link-submit").forEach((function (e) {
                            e.disabled = !t
                        }))
                    };
                    t(), e.addEventListener("change", (function (e) {
                        t()
                    })), e.addEventListener("shitty-Linkreset", (function (e) {
                        t()
                    }))
                }
            }(e),
            function (e) {
                var t = function (e, t) {
                        var n = r(e.getAttribute("data-starting-value")),
                            o = r(e.getAttribute("data-maximum-value")),
                            a = r(e.getAttribute("data-minimum-value")),
                            c = e.classList.contains("down") ? n - t.value.length : t.value.length;
                        e.setAttribute("data-current-value", c), e.innerText = c, o && o < t.value.length ? e.classList.add("too-long") : e.classList.remove("too-long"), a && t.value.length < a ? e.classList.add("too-short") : e.classList.remove("too-short")
                    },
                    n = function (n) {
                        n = function (e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = null != arguments[t] ? arguments[t] : {};
                                t % 2 ? y(Object(n), !0).forEach((function (t) {
                                    i()(e, t, n[t])
                                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : y(Object(n)).forEach((function (t) {
                                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                                }))
                            }
                            return e
                        }({
                            init: !1
                        }, n), e.querySelectorAll(".shitty-Link-character-count").forEach((function (r) {
                            var o = r.getAttribute("data-target-name"),
                                a = e.querySelector('[name="'.concat(o, '"]'));
                            a && (a.value = a.defaultValue, t(r, a), n.init && a.addEventListener("keyup", (function (e) {
                                t(r, a)
                            })))
                        }))
                    };
                n({
                    init: !0
                }), e.addEventListener("shitty-Linkreset", (function (e) {
                    n()
                }))
            }(e), window.addEventListener("load", (function (t) {
                shitty-Link.cached && e.reset()
            })), e.addEventListener("reset", (function (t) {
                shitty-Link.reset(e)
            })), e.addEventListener("submit", (function (t) {
                var n = t.submitter;
                shitty-Link.submit(e, {
                    submitter: n
                }), t.preventDefault()
            })), e.addEventListener("shitty-Linksubmit", (function (t) {
                t.detail.apiResponse.captcha && m(e, t.detail.apiResponse.captcha), t.detail.apiResponse.quiz && h(e, t.detail.apiResponse.quiz)
            })), e.addEventListener("shitty-Linkreset", (function (t) {
                t.detail.apiResponse.captcha && m(e, t.detail.apiResponse.captcha), t.detail.apiResponse.quiz && h(e, t.detail.apiResponse.quiz)
            }))
    }
    document.addEventListener("DOMContentLoaded", e => {
        var t;
        if ("undefined" == typeof shitty-Link) return void console.error("shitty-Link is not defined.");
        if (void 0 === shitty-Link.api) return void console.error("shitty-Link.api is not defined.");
        if ("function" != typeof window.fetch) return void console.error("Your browser doesn't support window.fetch().");
        if ("function" != typeof window.FormData) return void console.error("Your browser doesn't support window.FormData().");
        const n = document.querySelectorAll(".shitty-Link > form");
        "function" == typeof n.forEach ? (shitty-Link = {
            init: g,
            submit: v,
            reset: w,
            ...null !== (t = shitty-Link) && void 0 !== t ? t : {}
        }, n.forEach(e => shitty-Link.init(e))) : console.error("Your browser doesn't support NodeList.forEach().")
    })
}]);
module.exports = [
"[project]/learn-next/final/node_modules/next/dist/esm/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    else {
        if ("TURBOPACK compile-time truthy", 1) {
            if ("TURBOPACK compile-time truthy", 1) {
                module.exports = __turbopack_context__.r("[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)");
            } else //TURBOPACK unreachable
            ;
        } else //TURBOPACK unreachable
        ;
    }
} //# sourceMappingURL=module.compiled.js.map
}),
"[project]/learn-next/final/node_modules/next/dist/esm/server/route-kind.js [app-rsc] (ecmascript, Next.js server utility)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/learn-next/final/node_modules/next/dist/esm/server/route-kind.js [app-rsc] (ecmascript)"));}),
"[project]/learn-next/final/node_modules/next/dist/esm/server/instrumentation/utils.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getRevalidateReason",
    ()=>getRevalidateReason
]);
function getRevalidateReason(params) {
    if (params.isOnDemandRevalidate) {
        return 'on-demand';
    }
    if (params.isStaticGeneration) {
        return 'stale';
    }
    return undefined;
} //# sourceMappingURL=utils.js.map
}),
"[project]/learn-next/final/node_modules/next/dist/esm/server/app-render/interop-default.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Interop between "export default" and "module.exports".
 */ __turbopack_context__.s([
    "interopDefault",
    ()=>interopDefault
]);
function interopDefault(mod) {
    return mod.default || mod;
} //# sourceMappingURL=interop-default.js.map
}),
"[project]/learn-next/final/node_modules/next/dist/esm/server/app-render/strip-flight-headers.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "stripFlightHeaders",
    ()=>stripFlightHeaders
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$app$2d$router$2d$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/learn-next/final/node_modules/next/dist/esm/client/components/app-router-headers.js [app-rsc] (ecmascript)");
;
function stripFlightHeaders(headers) {
    for (const header of __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$app$2d$router$2d$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["FLIGHT_HEADERS"]){
        delete headers[header];
    }
} //# sourceMappingURL=strip-flight-headers.js.map
}),
"[project]/learn-next/final/node_modules/next/dist/esm/server/web/spec-extension/adapters/headers.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HeadersAdapter",
    ()=>HeadersAdapter,
    "ReadonlyHeadersError",
    ()=>ReadonlyHeadersError
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$adapters$2f$reflect$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/learn-next/final/node_modules/next/dist/esm/server/web/spec-extension/adapters/reflect.js [app-rsc] (ecmascript)");
;
class ReadonlyHeadersError extends Error {
    constructor(){
        super('Headers cannot be modified. Read more: https://nextjs.org/docs/app/api-reference/functions/headers');
    }
    static callable() {
        throw new ReadonlyHeadersError();
    }
}
class HeadersAdapter extends Headers {
    constructor(headers){
        // We've already overridden the methods that would be called, so we're just
        // calling the super constructor to ensure that the instanceof check works.
        super();
        this.headers = new Proxy(headers, {
            get (target, prop, receiver) {
                // Because this is just an object, we expect that all "get" operations
                // are for properties. If it's a "get" for a symbol, we'll just return
                // the symbol.
                if (typeof prop === 'symbol') {
                    return __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$adapters$2f$reflect$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ReflectAdapter"].get(target, prop, receiver);
                }
                const lowercased = prop.toLowerCase();
                // Let's find the original casing of the key. This assumes that there is
                // no mixed case keys (e.g. "Content-Type" and "content-type") in the
                // headers object.
                const original = Object.keys(headers).find((o)=>o.toLowerCase() === lowercased);
                // If the original casing doesn't exist, return undefined.
                if (typeof original === 'undefined') return;
                // If the original casing exists, return the value.
                return __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$adapters$2f$reflect$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ReflectAdapter"].get(target, original, receiver);
            },
            set (target, prop, value, receiver) {
                if (typeof prop === 'symbol') {
                    return __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$adapters$2f$reflect$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ReflectAdapter"].set(target, prop, value, receiver);
                }
                const lowercased = prop.toLowerCase();
                // Let's find the original casing of the key. This assumes that there is
                // no mixed case keys (e.g. "Content-Type" and "content-type") in the
                // headers object.
                const original = Object.keys(headers).find((o)=>o.toLowerCase() === lowercased);
                // If the original casing doesn't exist, use the prop as the key.
                return __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$adapters$2f$reflect$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ReflectAdapter"].set(target, original ?? prop, value, receiver);
            },
            has (target, prop) {
                if (typeof prop === 'symbol') return __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$adapters$2f$reflect$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ReflectAdapter"].has(target, prop);
                const lowercased = prop.toLowerCase();
                // Let's find the original casing of the key. This assumes that there is
                // no mixed case keys (e.g. "Content-Type" and "content-type") in the
                // headers object.
                const original = Object.keys(headers).find((o)=>o.toLowerCase() === lowercased);
                // If the original casing doesn't exist, return false.
                if (typeof original === 'undefined') return false;
                // If the original casing exists, return true.
                return __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$adapters$2f$reflect$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ReflectAdapter"].has(target, original);
            },
            deleteProperty (target, prop) {
                if (typeof prop === 'symbol') return __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$adapters$2f$reflect$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ReflectAdapter"].deleteProperty(target, prop);
                const lowercased = prop.toLowerCase();
                // Let's find the original casing of the key. This assumes that there is
                // no mixed case keys (e.g. "Content-Type" and "content-type") in the
                // headers object.
                const original = Object.keys(headers).find((o)=>o.toLowerCase() === lowercased);
                // If the original casing doesn't exist, return true.
                if (typeof original === 'undefined') return true;
                // If the original casing exists, delete the property.
                return __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$adapters$2f$reflect$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ReflectAdapter"].deleteProperty(target, original);
            }
        });
    }
    /**
   * Seals a Headers instance to prevent modification by throwing an error when
   * any mutating method is called.
   */ static seal(headers) {
        return new Proxy(headers, {
            get (target, prop, receiver) {
                switch(prop){
                    case 'append':
                    case 'delete':
                    case 'set':
                        return ReadonlyHeadersError.callable;
                    default:
                        return __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$adapters$2f$reflect$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ReflectAdapter"].get(target, prop, receiver);
                }
            }
        });
    }
    /**
   * Merges a header value into a string. This stores multiple values as an
   * array, so we need to merge them into a string.
   *
   * @param value a header value
   * @returns a merged header value (a string)
   */ merge(value) {
        if (Array.isArray(value)) return value.join(', ');
        return value;
    }
    /**
   * Creates a Headers instance from a plain object or a Headers instance.
   *
   * @param headers a plain object or a Headers instance
   * @returns a headers instance
   */ static from(headers) {
        if (headers instanceof Headers) return headers;
        return new HeadersAdapter(headers);
    }
    append(name, value) {
        const existing = this.headers[name];
        if (typeof existing === 'string') {
            this.headers[name] = [
                existing,
                value
            ];
        } else if (Array.isArray(existing)) {
            existing.push(value);
        } else {
            this.headers[name] = value;
        }
    }
    delete(name) {
        delete this.headers[name];
    }
    get(name) {
        const value = this.headers[name];
        if (typeof value !== 'undefined') return this.merge(value);
        return null;
    }
    has(name) {
        return typeof this.headers[name] !== 'undefined';
    }
    set(name, value) {
        this.headers[name] = value;
    }
    forEach(callbackfn, thisArg) {
        for (const [name, value] of this.entries()){
            callbackfn.call(thisArg, value, name, this);
        }
    }
    *entries() {
        for (const key of Object.keys(this.headers)){
            const name = key.toLowerCase();
            // We assert here that this is a string because we got it from the
            // Object.keys() call above.
            const value = this.get(name);
            yield [
                name,
                value
            ];
        }
    }
    *keys() {
        for (const key of Object.keys(this.headers)){
            const name = key.toLowerCase();
            yield name;
        }
    }
    *values() {
        for (const key of Object.keys(this.headers)){
            // We assert here that this is a string because we got it from the
            // Object.keys() call above.
            const value = this.get(key);
            yield value;
        }
    }
    [Symbol.iterator]() {
        return this.entries();
    }
} //# sourceMappingURL=headers.js.map
}),
"[project]/learn-next/final/node_modules/next/dist/compiled/cookie/index.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {

(()=>{
    "use strict";
    if (typeof __nccwpck_require__ !== "undefined") __nccwpck_require__.ab = ("TURBOPACK compile-time value", "/ROOT/learn-next/final/node_modules/next/dist/compiled/cookie") + "/";
    var e = {};
    (()=>{
        var r = e;
        /*!
 * cookie
 * Copyright(c) 2012-2014 Roman Shtylman
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */ r.parse = parse;
        r.serialize = serialize;
        var i = decodeURIComponent;
        var t = encodeURIComponent;
        var a = /; */;
        var n = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;
        function parse(e, r) {
            if (typeof e !== "string") {
                throw new TypeError("argument str must be a string");
            }
            var t = {};
            var n = r || {};
            var o = e.split(a);
            var s = n.decode || i;
            for(var p = 0; p < o.length; p++){
                var f = o[p];
                var u = f.indexOf("=");
                if (u < 0) {
                    continue;
                }
                var v = f.substr(0, u).trim();
                var c = f.substr(++u, f.length).trim();
                if ('"' == c[0]) {
                    c = c.slice(1, -1);
                }
                if (undefined == t[v]) {
                    t[v] = tryDecode(c, s);
                }
            }
            return t;
        }
        function serialize(e, r, i) {
            var a = i || {};
            var o = a.encode || t;
            if (typeof o !== "function") {
                throw new TypeError("option encode is invalid");
            }
            if (!n.test(e)) {
                throw new TypeError("argument name is invalid");
            }
            var s = o(r);
            if (s && !n.test(s)) {
                throw new TypeError("argument val is invalid");
            }
            var p = e + "=" + s;
            if (null != a.maxAge) {
                var f = a.maxAge - 0;
                if (isNaN(f) || !isFinite(f)) {
                    throw new TypeError("option maxAge is invalid");
                }
                p += "; Max-Age=" + Math.floor(f);
            }
            if (a.domain) {
                if (!n.test(a.domain)) {
                    throw new TypeError("option domain is invalid");
                }
                p += "; Domain=" + a.domain;
            }
            if (a.path) {
                if (!n.test(a.path)) {
                    throw new TypeError("option path is invalid");
                }
                p += "; Path=" + a.path;
            }
            if (a.expires) {
                if (typeof a.expires.toUTCString !== "function") {
                    throw new TypeError("option expires is invalid");
                }
                p += "; Expires=" + a.expires.toUTCString();
            }
            if (a.httpOnly) {
                p += "; HttpOnly";
            }
            if (a.secure) {
                p += "; Secure";
            }
            if (a.sameSite) {
                var u = typeof a.sameSite === "string" ? a.sameSite.toLowerCase() : a.sameSite;
                switch(u){
                    case true:
                        p += "; SameSite=Strict";
                        break;
                    case "lax":
                        p += "; SameSite=Lax";
                        break;
                    case "strict":
                        p += "; SameSite=Strict";
                        break;
                    case "none":
                        p += "; SameSite=None";
                        break;
                    default:
                        throw new TypeError("option sameSite is invalid");
                }
            }
            return p;
        }
        function tryDecode(e, r) {
            try {
                return r(e);
            } catch (r) {
                return e;
            }
        }
    })();
    module.exports = e;
})();
}),
"[project]/learn-next/final/node_modules/next/dist/esm/server/api-utils/index.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ApiError",
    ()=>ApiError,
    "COOKIE_NAME_PRERENDER_BYPASS",
    ()=>COOKIE_NAME_PRERENDER_BYPASS,
    "COOKIE_NAME_PRERENDER_DATA",
    ()=>COOKIE_NAME_PRERENDER_DATA,
    "RESPONSE_LIMIT_DEFAULT",
    ()=>RESPONSE_LIMIT_DEFAULT,
    "SYMBOL_CLEARED_COOKIES",
    ()=>SYMBOL_CLEARED_COOKIES,
    "SYMBOL_PREVIEW_DATA",
    ()=>SYMBOL_PREVIEW_DATA,
    "checkIsOnDemandRevalidate",
    ()=>checkIsOnDemandRevalidate,
    "clearPreviewData",
    ()=>clearPreviewData,
    "redirect",
    ()=>redirect,
    "sendError",
    ()=>sendError,
    "sendStatusCode",
    ()=>sendStatusCode,
    "setLazyProp",
    ()=>setLazyProp,
    "wrapApiHandler",
    ()=>wrapApiHandler
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$adapters$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/learn-next/final/node_modules/next/dist/esm/server/web/spec-extension/adapters/headers.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/learn-next/final/node_modules/next/dist/esm/lib/constants.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$trace$2f$tracer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/learn-next/final/node_modules/next/dist/esm/server/lib/trace/tracer.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$trace$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/learn-next/final/node_modules/next/dist/esm/server/lib/trace/constants.js [app-rsc] (ecmascript)");
;
;
;
;
function wrapApiHandler(page, handler) {
    return (...args)=>{
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$trace$2f$tracer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getTracer"])().setRootSpanAttribute('next.route', page);
        // Call API route method
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$trace$2f$tracer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getTracer"])().trace(__TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$trace$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["NodeSpan"].runHandler, {
            spanName: `executing api route (pages) ${page}`
        }, ()=>handler(...args));
    };
}
function sendStatusCode(res, statusCode) {
    res.statusCode = statusCode;
    return res;
}
function redirect(res, statusOrUrl, url) {
    if (typeof statusOrUrl === 'string') {
        url = statusOrUrl;
        statusOrUrl = 307;
    }
    if (typeof statusOrUrl !== 'number' || typeof url !== 'string') {
        throw Object.defineProperty(new Error(`Invalid redirect arguments. Please use a single argument URL, e.g. res.redirect('/destination') or use a status code and URL, e.g. res.redirect(307, '/destination').`), "__NEXT_ERROR_CODE", {
            value: "E389",
            enumerable: false,
            configurable: true
        });
    }
    res.writeHead(statusOrUrl, {
        Location: url
    });
    res.write(url);
    res.end();
    return res;
}
function checkIsOnDemandRevalidate(req, previewProps) {
    const headers = __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$adapters$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["HeadersAdapter"].from(req.headers);
    const previewModeId = headers.get(__TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PRERENDER_REVALIDATE_HEADER"]);
    const isOnDemandRevalidate = previewModeId === previewProps.previewModeId;
    const revalidateOnlyGenerated = headers.has(__TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PRERENDER_REVALIDATE_ONLY_GENERATED_HEADER"]);
    return {
        isOnDemandRevalidate,
        revalidateOnlyGenerated
    };
}
const COOKIE_NAME_PRERENDER_BYPASS = `__prerender_bypass`;
const COOKIE_NAME_PRERENDER_DATA = `__next_preview_data`;
const RESPONSE_LIMIT_DEFAULT = 4 * 1024 * 1024;
const SYMBOL_PREVIEW_DATA = Symbol(COOKIE_NAME_PRERENDER_DATA);
const SYMBOL_CLEARED_COOKIES = Symbol(COOKIE_NAME_PRERENDER_BYPASS);
function clearPreviewData(res, options = {}) {
    if (SYMBOL_CLEARED_COOKIES in res) {
        return res;
    }
    const { serialize } = __turbopack_context__.r("[project]/learn-next/final/node_modules/next/dist/compiled/cookie/index.js [app-rsc] (ecmascript)");
    const previous = res.getHeader('Set-Cookie');
    res.setHeader(`Set-Cookie`, [
        ...typeof previous === 'string' ? [
            previous
        ] : Array.isArray(previous) ? previous : [],
        serialize(COOKIE_NAME_PRERENDER_BYPASS, '', {
            // To delete a cookie, set `expires` to a date in the past:
            // https://tools.ietf.org/html/rfc6265#section-4.1.1
            // `Max-Age: 0` is not valid, thus ignored, and the cookie is persisted.
            expires: new Date(0),
            httpOnly: true,
            sameSite: ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : 'lax',
            secure: ("TURBOPACK compile-time value", "development") !== 'development',
            path: '/',
            ...options.path !== undefined ? {
                path: options.path
            } : undefined
        }),
        serialize(COOKIE_NAME_PRERENDER_DATA, '', {
            // To delete a cookie, set `expires` to a date in the past:
            // https://tools.ietf.org/html/rfc6265#section-4.1.1
            // `Max-Age: 0` is not valid, thus ignored, and the cookie is persisted.
            expires: new Date(0),
            httpOnly: true,
            sameSite: ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : 'lax',
            secure: ("TURBOPACK compile-time value", "development") !== 'development',
            path: '/',
            ...options.path !== undefined ? {
                path: options.path
            } : undefined
        })
    ]);
    Object.defineProperty(res, SYMBOL_CLEARED_COOKIES, {
        value: true,
        enumerable: false
    });
    return res;
}
class ApiError extends Error {
    constructor(statusCode, message){
        super(message);
        this.statusCode = statusCode;
    }
}
function sendError(res, statusCode, message) {
    res.statusCode = statusCode;
    res.statusMessage = message;
    res.end(message);
}
function setLazyProp({ req }, prop, getter) {
    const opts = {
        configurable: true,
        enumerable: true
    };
    const optsReset = {
        ...opts,
        writable: true
    };
    Object.defineProperty(req, prop, {
        ...opts,
        get: ()=>{
            const value = getter();
            // we set the property on the object to avoid recalculating it
            Object.defineProperty(req, prop, {
                ...optsReset,
                value
            });
            return value;
        },
        set: (value)=>{
            Object.defineProperty(req, prop, {
                ...optsReset,
                value
            });
        }
    });
} //# sourceMappingURL=index.js.map
}),
"[project]/learn-next/final/node_modules/next/dist/esm/server/api-utils/get-cookie-parser.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Parse cookies from the `headers` of request
 * @param req request object
 */ __turbopack_context__.s([
    "getCookieParser",
    ()=>getCookieParser
]);
function getCookieParser(headers) {
    return function parseCookie() {
        const { cookie } = headers;
        if (!cookie) {
            return {};
        }
        const { parse: parseCookieFn } = __turbopack_context__.r("[project]/learn-next/final/node_modules/next/dist/compiled/cookie/index.js [app-rsc] (ecmascript)");
        return parseCookieFn(Array.isArray(cookie) ? cookie.join('; ') : cookie);
    };
} //# sourceMappingURL=get-cookie-parser.js.map
}),
"[project]/learn-next/final/node_modules/next/dist/esm/server/base-http/index.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BaseNextRequest",
    ()=>BaseNextRequest,
    "BaseNextResponse",
    ()=>BaseNextResponse
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$redirect$2d$status$2d$code$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/learn-next/final/node_modules/next/dist/esm/client/components/redirect-status-code.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$api$2d$utils$2f$get$2d$cookie$2d$parser$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/learn-next/final/node_modules/next/dist/esm/server/api-utils/get-cookie-parser.js [app-rsc] (ecmascript)");
;
;
class BaseNextRequest {
    constructor(method, url, body){
        this.method = method;
        this.url = url;
        this.body = body;
    }
    // Utils implemented using the abstract methods above
    get cookies() {
        if (this._cookies) return this._cookies;
        return this._cookies = (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$api$2d$utils$2f$get$2d$cookie$2d$parser$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getCookieParser"])(this.headers)();
    }
}
class BaseNextResponse {
    constructor(destination){
        this.destination = destination;
    }
    // Utils implemented using the abstract methods above
    redirect(destination, statusCode) {
        this.setHeader('Location', destination);
        this.statusCode = statusCode;
        // Since IE11 doesn't support the 308 header add backwards
        // compatibility using refresh header
        if (statusCode === __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$redirect$2d$status$2d$code$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["RedirectStatusCode"].PermanentRedirect) {
            this.setHeader('Refresh', `0;url=${destination}`);
        }
        return this;
    }
} //# sourceMappingURL=index.js.map
}),
"[project]/learn-next/final/node_modules/next/dist/esm/server/base-http/node.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NodeNextRequest",
    ()=>NodeNextRequest,
    "NodeNextResponse",
    ()=>NodeNextResponse
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$api$2d$utils$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/learn-next/final/node_modules/next/dist/esm/server/api-utils/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2d$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/learn-next/final/node_modules/next/dist/esm/server/request-meta.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$base$2d$http$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/learn-next/final/node_modules/next/dist/esm/server/base-http/index.js [app-rsc] (ecmascript)");
;
;
;
let prop;
class NodeNextRequest extends __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$base$2d$http$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["BaseNextRequest"] {
    static #_ = prop = _NEXT_REQUEST_META = __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2d$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["NEXT_REQUEST_META"];
    constructor(_req){
        var _this__req;
        super(_req.method.toUpperCase(), _req.url, _req), this._req = _req, this.headers = this._req.headers, this.fetchMetrics = (_this__req = this._req) == null ? void 0 : _this__req.fetchMetrics, this[_NEXT_REQUEST_META] = this._req[__TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2d$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["NEXT_REQUEST_META"]] || {}, this.streaming = false;
    }
    get originalRequest() {
        // Need to mimic these changes to the original req object for places where we use it:
        // render.tsx, api/ssg requests
        this._req[__TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2d$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["NEXT_REQUEST_META"]] = this[__TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2d$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["NEXT_REQUEST_META"]];
        this._req.url = this.url;
        this._req.cookies = this.cookies;
        return this._req;
    }
    set originalRequest(value) {
        this._req = value;
    }
    /**
   * Returns the request body as a Web Readable Stream. The body here can only
   * be read once as the body will start flowing as soon as the data handler
   * is attached.
   *
   * @internal
   */ stream() {
        if (this.streaming) {
            throw Object.defineProperty(new Error('Invariant: NodeNextRequest.stream() can only be called once'), "__NEXT_ERROR_CODE", {
                value: "E467",
                enumerable: false,
                configurable: true
            });
        }
        this.streaming = true;
        return new ReadableStream({
            start: (controller)=>{
                this._req.on('data', (chunk)=>{
                    controller.enqueue(new Uint8Array(chunk));
                });
                this._req.on('end', ()=>{
                    controller.close();
                });
                this._req.on('error', (err)=>{
                    controller.error(err);
                });
            }
        });
    }
}
class NodeNextResponse extends __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$base$2d$http$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["BaseNextResponse"] {
    get originalResponse() {
        if (__TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$api$2d$utils$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SYMBOL_CLEARED_COOKIES"] in this) {
            this._res[__TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$api$2d$utils$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SYMBOL_CLEARED_COOKIES"]] = this[__TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$api$2d$utils$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SYMBOL_CLEARED_COOKIES"]];
        }
        return this._res;
    }
    constructor(_res){
        super(_res), this._res = _res, this.textBody = undefined;
    }
    get sent() {
        return this._res.finished || this._res.headersSent;
    }
    get statusCode() {
        return this._res.statusCode;
    }
    set statusCode(value) {
        this._res.statusCode = value;
    }
    get statusMessage() {
        return this._res.statusMessage;
    }
    set statusMessage(value) {
        this._res.statusMessage = value;
    }
    setHeader(name, value) {
        this._res.setHeader(name, value);
        return this;
    }
    removeHeader(name) {
        this._res.removeHeader(name);
        return this;
    }
    getHeaderValues(name) {
        const values = this._res.getHeader(name);
        if (values === undefined) return undefined;
        return (Array.isArray(values) ? values : [
            values
        ]).map((value)=>value.toString());
    }
    hasHeader(name) {
        return this._res.hasHeader(name);
    }
    getHeader(name) {
        const values = this.getHeaderValues(name);
        return Array.isArray(values) ? values.join(',') : undefined;
    }
    getHeaders() {
        return this._res.getHeaders();
    }
    appendHeader(name, value) {
        const currentValues = this.getHeaderValues(name) ?? [];
        if (!currentValues.includes(value)) {
            this._res.setHeader(name, [
                ...currentValues,
                value
            ]);
        }
        return this;
    }
    body(value) {
        this.textBody = value;
        return this;
    }
    send() {
        this._res.end(this.textBody);
    }
    onClose(callback) {
        this.originalResponse.on('close', callback);
    }
}
var _NEXT_REQUEST_META; //# sourceMappingURL=node.js.map
}),
"[project]/learn-next/final/node_modules/next/dist/esm/server/lib/experimental/ppr.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * If set to `incremental`, only those leaf pages that export
 * `experimental_ppr = true` will have partial prerendering enabled. If any
 * page exports this value as `false` or does not export it at all will not
 * have partial prerendering enabled. If set to a boolean, the options for
 * `experimental_ppr` will be ignored.
 */ /**
 * Returns true if partial prerendering is enabled for the application. It does
 * not tell you if a given route has PPR enabled, as that requires analysis of
 * the route's configuration.
 *
 * @see {@link checkIsRoutePPREnabled} - for checking if a specific route has PPR enabled.
 */ __turbopack_context__.s([
    "checkIsAppPPREnabled",
    ()=>checkIsAppPPREnabled,
    "checkIsRoutePPREnabled",
    ()=>checkIsRoutePPREnabled
]);
function checkIsAppPPREnabled(config) {
    // If the config is undefined, partial prerendering is disabled.
    if (typeof config === 'undefined') return false;
    // If the config is a boolean, use it directly.
    if (typeof config === 'boolean') return config;
    // If the config is a string, it must be 'incremental' to enable partial
    // prerendering.
    if (config === 'incremental') return true;
    return false;
}
function checkIsRoutePPREnabled(config) {
    // If the config is undefined, partial prerendering is disabled.
    if (typeof config === 'undefined') return false;
    // If the config is a boolean, use it directly.
    if (typeof config === 'boolean') return config;
    return false;
} //# sourceMappingURL=ppr.js.map
}),
"[project]/learn-next/final/node_modules/next/dist/compiled/zod/index.cjs [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {

(()=>{
    "use strict";
    var e = {
        629: function(e, t, s) {
            var r = this && this.__createBinding || (Object.create ? function(e, t, s, r) {
                if (r === undefined) r = s;
                var a = Object.getOwnPropertyDescriptor(t, s);
                if (!a || ("get" in a ? !t.__esModule : a.writable || a.configurable)) {
                    a = {
                        enumerable: true,
                        get: function() {
                            return t[s];
                        }
                    };
                }
                Object.defineProperty(e, r, a);
            } : function(e, t, s, r) {
                if (r === undefined) r = s;
                e[r] = t[s];
            });
            var a = this && this.__setModuleDefault || (Object.create ? function(e, t) {
                Object.defineProperty(e, "default", {
                    enumerable: true,
                    value: t
                });
            } : function(e, t) {
                e["default"] = t;
            });
            var n = this && this.__importStar || function(e) {
                if (e && e.__esModule) return e;
                var t = {};
                if (e != null) {
                    for(var s in e)if (s !== "default" && Object.prototype.hasOwnProperty.call(e, s)) r(t, e, s);
                }
                a(t, e);
                return t;
            };
            var i = this && this.__exportStar || function(e, t) {
                for(var s in e)if (s !== "default" && !Object.prototype.hasOwnProperty.call(t, s)) r(t, e, s);
            };
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.z = void 0;
            const o = n(s(923));
            t.z = o;
            i(s(923), t);
            t["default"] = o;
        },
        348: (e, t, s)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.ZodError = t.quotelessJson = t.ZodIssueCode = void 0;
            const r = s(709);
            t.ZodIssueCode = r.util.arrayToEnum([
                "invalid_type",
                "invalid_literal",
                "custom",
                "invalid_union",
                "invalid_union_discriminator",
                "invalid_enum_value",
                "unrecognized_keys",
                "invalid_arguments",
                "invalid_return_type",
                "invalid_date",
                "invalid_string",
                "too_small",
                "too_big",
                "invalid_intersection_types",
                "not_multiple_of",
                "not_finite"
            ]);
            const quotelessJson = (e)=>{
                const t = JSON.stringify(e, null, 2);
                return t.replace(/"([^"]+)":/g, "$1:");
            };
            t.quotelessJson = quotelessJson;
            class ZodError extends Error {
                get errors() {
                    return this.issues;
                }
                constructor(e){
                    super();
                    this.issues = [];
                    this.addIssue = (e)=>{
                        this.issues = [
                            ...this.issues,
                            e
                        ];
                    };
                    this.addIssues = (e = [])=>{
                        this.issues = [
                            ...this.issues,
                            ...e
                        ];
                    };
                    const t = new.target.prototype;
                    if (Object.setPrototypeOf) {
                        Object.setPrototypeOf(this, t);
                    } else {
                        this.__proto__ = t;
                    }
                    this.name = "ZodError";
                    this.issues = e;
                }
                format(e) {
                    const t = e || function(e) {
                        return e.message;
                    };
                    const s = {
                        _errors: []
                    };
                    const processError = (e)=>{
                        for (const r of e.issues){
                            if (r.code === "invalid_union") {
                                r.unionErrors.map(processError);
                            } else if (r.code === "invalid_return_type") {
                                processError(r.returnTypeError);
                            } else if (r.code === "invalid_arguments") {
                                processError(r.argumentsError);
                            } else if (r.path.length === 0) {
                                s._errors.push(t(r));
                            } else {
                                let e = s;
                                let a = 0;
                                while(a < r.path.length){
                                    const s = r.path[a];
                                    const n = a === r.path.length - 1;
                                    if (!n) {
                                        e[s] = e[s] || {
                                            _errors: []
                                        };
                                    } else {
                                        e[s] = e[s] || {
                                            _errors: []
                                        };
                                        e[s]._errors.push(t(r));
                                    }
                                    e = e[s];
                                    a++;
                                }
                            }
                        }
                    };
                    processError(this);
                    return s;
                }
                static assert(e) {
                    if (!(e instanceof ZodError)) {
                        throw new Error(`Not a ZodError: ${e}`);
                    }
                }
                toString() {
                    return this.message;
                }
                get message() {
                    return JSON.stringify(this.issues, r.util.jsonStringifyReplacer, 2);
                }
                get isEmpty() {
                    return this.issues.length === 0;
                }
                flatten(e = (e)=>e.message) {
                    const t = {};
                    const s = [];
                    for (const r of this.issues){
                        if (r.path.length > 0) {
                            const s = r.path[0];
                            t[s] = t[s] || [];
                            t[s].push(e(r));
                        } else {
                            s.push(e(r));
                        }
                    }
                    return {
                        formErrors: s,
                        fieldErrors: t
                    };
                }
                get formErrors() {
                    return this.flatten();
                }
            }
            t.ZodError = ZodError;
            ZodError.create = (e)=>{
                const t = new ZodError(e);
                return t;
            };
        },
        61: function(e, t, s) {
            var r = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            };
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.defaultErrorMap = void 0;
            t.setErrorMap = setErrorMap;
            t.getErrorMap = getErrorMap;
            const a = r(s(871));
            t.defaultErrorMap = a.default;
            let n = a.default;
            function setErrorMap(e) {
                n = e;
            }
            function getErrorMap() {
                return n;
            }
        },
        923: function(e, t, s) {
            var r = this && this.__createBinding || (Object.create ? function(e, t, s, r) {
                if (r === undefined) r = s;
                var a = Object.getOwnPropertyDescriptor(t, s);
                if (!a || ("get" in a ? !t.__esModule : a.writable || a.configurable)) {
                    a = {
                        enumerable: true,
                        get: function() {
                            return t[s];
                        }
                    };
                }
                Object.defineProperty(e, r, a);
            } : function(e, t, s, r) {
                if (r === undefined) r = s;
                e[r] = t[s];
            });
            var a = this && this.__exportStar || function(e, t) {
                for(var s in e)if (s !== "default" && !Object.prototype.hasOwnProperty.call(t, s)) r(t, e, s);
            };
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            a(s(61), t);
            a(s(818), t);
            a(s(515), t);
            a(s(709), t);
            a(s(155), t);
            a(s(348), t);
        },
        538: (e, t)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.errorUtil = void 0;
            var s;
            (function(e) {
                e.errToObj = (e)=>typeof e === "string" ? {
                        message: e
                    } : e || {};
                e.toString = (e)=>typeof e === "string" ? e : e?.message;
            })(s || (t.errorUtil = s = {}));
        },
        818: function(e, t, s) {
            var r = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            };
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.isAsync = t.isValid = t.isDirty = t.isAborted = t.OK = t.DIRTY = t.INVALID = t.ParseStatus = t.EMPTY_PATH = t.makeIssue = void 0;
            t.addIssueToContext = addIssueToContext;
            const a = s(61);
            const n = r(s(871));
            const makeIssue = (e)=>{
                const { data: t, path: s, errorMaps: r, issueData: a } = e;
                const n = [
                    ...s,
                    ...a.path || []
                ];
                const i = {
                    ...a,
                    path: n
                };
                if (a.message !== undefined) {
                    return {
                        ...a,
                        path: n,
                        message: a.message
                    };
                }
                let o = "";
                const d = r.filter((e)=>!!e).slice().reverse();
                for (const e of d){
                    o = e(i, {
                        data: t,
                        defaultError: o
                    }).message;
                }
                return {
                    ...a,
                    path: n,
                    message: o
                };
            };
            t.makeIssue = makeIssue;
            t.EMPTY_PATH = [];
            function addIssueToContext(e, s) {
                const r = (0, a.getErrorMap)();
                const i = (0, t.makeIssue)({
                    issueData: s,
                    data: e.data,
                    path: e.path,
                    errorMaps: [
                        e.common.contextualErrorMap,
                        e.schemaErrorMap,
                        r,
                        r === n.default ? undefined : n.default
                    ].filter((e)=>!!e)
                });
                e.common.issues.push(i);
            }
            class ParseStatus {
                constructor(){
                    this.value = "valid";
                }
                dirty() {
                    if (this.value === "valid") this.value = "dirty";
                }
                abort() {
                    if (this.value !== "aborted") this.value = "aborted";
                }
                static mergeArray(e, s) {
                    const r = [];
                    for (const a of s){
                        if (a.status === "aborted") return t.INVALID;
                        if (a.status === "dirty") e.dirty();
                        r.push(a.value);
                    }
                    return {
                        status: e.value,
                        value: r
                    };
                }
                static async mergeObjectAsync(e, t) {
                    const s = [];
                    for (const e of t){
                        const t = await e.key;
                        const r = await e.value;
                        s.push({
                            key: t,
                            value: r
                        });
                    }
                    return ParseStatus.mergeObjectSync(e, s);
                }
                static mergeObjectSync(e, s) {
                    const r = {};
                    for (const a of s){
                        const { key: s, value: n } = a;
                        if (s.status === "aborted") return t.INVALID;
                        if (n.status === "aborted") return t.INVALID;
                        if (s.status === "dirty") e.dirty();
                        if (n.status === "dirty") e.dirty();
                        if (s.value !== "__proto__" && (typeof n.value !== "undefined" || a.alwaysSet)) {
                            r[s.value] = n.value;
                        }
                    }
                    return {
                        status: e.value,
                        value: r
                    };
                }
            }
            t.ParseStatus = ParseStatus;
            t.INVALID = Object.freeze({
                status: "aborted"
            });
            const DIRTY = (e)=>({
                    status: "dirty",
                    value: e
                });
            t.DIRTY = DIRTY;
            const OK = (e)=>({
                    status: "valid",
                    value: e
                });
            t.OK = OK;
            const isAborted = (e)=>e.status === "aborted";
            t.isAborted = isAborted;
            const isDirty = (e)=>e.status === "dirty";
            t.isDirty = isDirty;
            const isValid = (e)=>e.status === "valid";
            t.isValid = isValid;
            const isAsync = (e)=>typeof Promise !== "undefined" && e instanceof Promise;
            t.isAsync = isAsync;
        },
        515: (e, t)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
        },
        709: (e, t)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.getParsedType = t.ZodParsedType = t.objectUtil = t.util = void 0;
            var s;
            (function(e) {
                e.assertEqual = (e)=>{};
                function assertIs(e) {}
                e.assertIs = assertIs;
                function assertNever(e) {
                    throw new Error;
                }
                e.assertNever = assertNever;
                e.arrayToEnum = (e)=>{
                    const t = {};
                    for (const s of e){
                        t[s] = s;
                    }
                    return t;
                };
                e.getValidEnumValues = (t)=>{
                    const s = e.objectKeys(t).filter((e)=>typeof t[t[e]] !== "number");
                    const r = {};
                    for (const e of s){
                        r[e] = t[e];
                    }
                    return e.objectValues(r);
                };
                e.objectValues = (t)=>e.objectKeys(t).map(function(e) {
                        return t[e];
                    });
                e.objectKeys = typeof Object.keys === "function" ? (e)=>Object.keys(e) : (e)=>{
                    const t = [];
                    for(const s in e){
                        if (Object.prototype.hasOwnProperty.call(e, s)) {
                            t.push(s);
                        }
                    }
                    return t;
                };
                e.find = (e, t)=>{
                    for (const s of e){
                        if (t(s)) return s;
                    }
                    return undefined;
                };
                e.isInteger = typeof Number.isInteger === "function" ? (e)=>Number.isInteger(e) : (e)=>typeof e === "number" && Number.isFinite(e) && Math.floor(e) === e;
                function joinValues(e, t = " | ") {
                    return e.map((e)=>typeof e === "string" ? `'${e}'` : e).join(t);
                }
                e.joinValues = joinValues;
                e.jsonStringifyReplacer = (e, t)=>{
                    if (typeof t === "bigint") {
                        return t.toString();
                    }
                    return t;
                };
            })(s || (t.util = s = {}));
            var r;
            (function(e) {
                e.mergeShapes = (e, t)=>({
                        ...e,
                        ...t
                    });
            })(r || (t.objectUtil = r = {}));
            t.ZodParsedType = s.arrayToEnum([
                "string",
                "nan",
                "number",
                "integer",
                "float",
                "boolean",
                "date",
                "bigint",
                "symbol",
                "function",
                "undefined",
                "null",
                "array",
                "object",
                "unknown",
                "promise",
                "void",
                "never",
                "map",
                "set"
            ]);
            const getParsedType = (e)=>{
                const s = typeof e;
                switch(s){
                    case "undefined":
                        return t.ZodParsedType.undefined;
                    case "string":
                        return t.ZodParsedType.string;
                    case "number":
                        return Number.isNaN(e) ? t.ZodParsedType.nan : t.ZodParsedType.number;
                    case "boolean":
                        return t.ZodParsedType.boolean;
                    case "function":
                        return t.ZodParsedType.function;
                    case "bigint":
                        return t.ZodParsedType.bigint;
                    case "symbol":
                        return t.ZodParsedType.symbol;
                    case "object":
                        if (Array.isArray(e)) {
                            return t.ZodParsedType.array;
                        }
                        if (e === null) {
                            return t.ZodParsedType.null;
                        }
                        if (e.then && typeof e.then === "function" && e.catch && typeof e.catch === "function") {
                            return t.ZodParsedType.promise;
                        }
                        if (typeof Map !== "undefined" && e instanceof Map) {
                            return t.ZodParsedType.map;
                        }
                        if (typeof Set !== "undefined" && e instanceof Set) {
                            return t.ZodParsedType.set;
                        }
                        if (typeof Date !== "undefined" && e instanceof Date) {
                            return t.ZodParsedType.date;
                        }
                        return t.ZodParsedType.object;
                    default:
                        return t.ZodParsedType.unknown;
                }
            };
            t.getParsedType = getParsedType;
        },
        871: (e, t, s)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            const r = s(348);
            const a = s(709);
            const errorMap = (e, t)=>{
                let s;
                switch(e.code){
                    case r.ZodIssueCode.invalid_type:
                        if (e.received === a.ZodParsedType.undefined) {
                            s = "Required";
                        } else {
                            s = `Expected ${e.expected}, received ${e.received}`;
                        }
                        break;
                    case r.ZodIssueCode.invalid_literal:
                        s = `Invalid literal value, expected ${JSON.stringify(e.expected, a.util.jsonStringifyReplacer)}`;
                        break;
                    case r.ZodIssueCode.unrecognized_keys:
                        s = `Unrecognized key(s) in object: ${a.util.joinValues(e.keys, ", ")}`;
                        break;
                    case r.ZodIssueCode.invalid_union:
                        s = `Invalid input`;
                        break;
                    case r.ZodIssueCode.invalid_union_discriminator:
                        s = `Invalid discriminator value. Expected ${a.util.joinValues(e.options)}`;
                        break;
                    case r.ZodIssueCode.invalid_enum_value:
                        s = `Invalid enum value. Expected ${a.util.joinValues(e.options)}, received '${e.received}'`;
                        break;
                    case r.ZodIssueCode.invalid_arguments:
                        s = `Invalid function arguments`;
                        break;
                    case r.ZodIssueCode.invalid_return_type:
                        s = `Invalid function return type`;
                        break;
                    case r.ZodIssueCode.invalid_date:
                        s = `Invalid date`;
                        break;
                    case r.ZodIssueCode.invalid_string:
                        if (typeof e.validation === "object") {
                            if ("includes" in e.validation) {
                                s = `Invalid input: must include "${e.validation.includes}"`;
                                if (typeof e.validation.position === "number") {
                                    s = `${s} at one or more positions greater than or equal to ${e.validation.position}`;
                                }
                            } else if ("startsWith" in e.validation) {
                                s = `Invalid input: must start with "${e.validation.startsWith}"`;
                            } else if ("endsWith" in e.validation) {
                                s = `Invalid input: must end with "${e.validation.endsWith}"`;
                            } else {
                                a.util.assertNever(e.validation);
                            }
                        } else if (e.validation !== "regex") {
                            s = `Invalid ${e.validation}`;
                        } else {
                            s = "Invalid";
                        }
                        break;
                    case r.ZodIssueCode.too_small:
                        if (e.type === "array") s = `Array must contain ${e.exact ? "exactly" : e.inclusive ? `at least` : `more than`} ${e.minimum} element(s)`;
                        else if (e.type === "string") s = `String must contain ${e.exact ? "exactly" : e.inclusive ? `at least` : `over`} ${e.minimum} character(s)`;
                        else if (e.type === "number") s = `Number must be ${e.exact ? `exactly equal to ` : e.inclusive ? `greater than or equal to ` : `greater than `}${e.minimum}`;
                        else if (e.type === "bigint") s = `Number must be ${e.exact ? `exactly equal to ` : e.inclusive ? `greater than or equal to ` : `greater than `}${e.minimum}`;
                        else if (e.type === "date") s = `Date must be ${e.exact ? `exactly equal to ` : e.inclusive ? `greater than or equal to ` : `greater than `}${new Date(Number(e.minimum))}`;
                        else s = "Invalid input";
                        break;
                    case r.ZodIssueCode.too_big:
                        if (e.type === "array") s = `Array must contain ${e.exact ? `exactly` : e.inclusive ? `at most` : `less than`} ${e.maximum} element(s)`;
                        else if (e.type === "string") s = `String must contain ${e.exact ? `exactly` : e.inclusive ? `at most` : `under`} ${e.maximum} character(s)`;
                        else if (e.type === "number") s = `Number must be ${e.exact ? `exactly` : e.inclusive ? `less than or equal to` : `less than`} ${e.maximum}`;
                        else if (e.type === "bigint") s = `BigInt must be ${e.exact ? `exactly` : e.inclusive ? `less than or equal to` : `less than`} ${e.maximum}`;
                        else if (e.type === "date") s = `Date must be ${e.exact ? `exactly` : e.inclusive ? `smaller than or equal to` : `smaller than`} ${new Date(Number(e.maximum))}`;
                        else s = "Invalid input";
                        break;
                    case r.ZodIssueCode.custom:
                        s = `Invalid input`;
                        break;
                    case r.ZodIssueCode.invalid_intersection_types:
                        s = `Intersection results could not be merged`;
                        break;
                    case r.ZodIssueCode.not_multiple_of:
                        s = `Number must be a multiple of ${e.multipleOf}`;
                        break;
                    case r.ZodIssueCode.not_finite:
                        s = "Number must be finite";
                        break;
                    default:
                        s = t.defaultError;
                        a.util.assertNever(e);
                }
                return {
                    message: s
                };
            };
            t["default"] = errorMap;
        },
        155: (e, t, s)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.discriminatedUnion = t.date = t.boolean = t.bigint = t.array = t.any = t.coerce = t.ZodFirstPartyTypeKind = t.late = t.ZodSchema = t.Schema = t.ZodReadonly = t.ZodPipeline = t.ZodBranded = t.BRAND = t.ZodNaN = t.ZodCatch = t.ZodDefault = t.ZodNullable = t.ZodOptional = t.ZodTransformer = t.ZodEffects = t.ZodPromise = t.ZodNativeEnum = t.ZodEnum = t.ZodLiteral = t.ZodLazy = t.ZodFunction = t.ZodSet = t.ZodMap = t.ZodRecord = t.ZodTuple = t.ZodIntersection = t.ZodDiscriminatedUnion = t.ZodUnion = t.ZodObject = t.ZodArray = t.ZodVoid = t.ZodNever = t.ZodUnknown = t.ZodAny = t.ZodNull = t.ZodUndefined = t.ZodSymbol = t.ZodDate = t.ZodBoolean = t.ZodBigInt = t.ZodNumber = t.ZodString = t.ZodType = void 0;
            t.NEVER = t["void"] = t.unknown = t.union = t.undefined = t.tuple = t.transformer = t.symbol = t.string = t.strictObject = t.set = t.record = t.promise = t.preprocess = t.pipeline = t.ostring = t.optional = t.onumber = t.oboolean = t.object = t.number = t.nullable = t["null"] = t.never = t.nativeEnum = t.nan = t.map = t.literal = t.lazy = t.intersection = t["instanceof"] = t["function"] = t["enum"] = t.effect = void 0;
            t.datetimeRegex = datetimeRegex;
            t.custom = custom;
            const r = s(348);
            const a = s(61);
            const n = s(538);
            const i = s(818);
            const o = s(709);
            class ParseInputLazyPath {
                constructor(e, t, s, r){
                    this._cachedPath = [];
                    this.parent = e;
                    this.data = t;
                    this._path = s;
                    this._key = r;
                }
                get path() {
                    if (!this._cachedPath.length) {
                        if (Array.isArray(this._key)) {
                            this._cachedPath.push(...this._path, ...this._key);
                        } else {
                            this._cachedPath.push(...this._path, this._key);
                        }
                    }
                    return this._cachedPath;
                }
            }
            const handleResult = (e, t)=>{
                if ((0, i.isValid)(t)) {
                    return {
                        success: true,
                        data: t.value
                    };
                } else {
                    if (!e.common.issues.length) {
                        throw new Error("Validation failed but no issues detected.");
                    }
                    return {
                        success: false,
                        get error () {
                            if (this._error) return this._error;
                            const t = new r.ZodError(e.common.issues);
                            this._error = t;
                            return this._error;
                        }
                    };
                }
            };
            function processCreateParams(e) {
                if (!e) return {};
                const { errorMap: t, invalid_type_error: s, required_error: r, description: a } = e;
                if (t && (s || r)) {
                    throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);
                }
                if (t) return {
                    errorMap: t,
                    description: a
                };
                const customMap = (t, a)=>{
                    const { message: n } = e;
                    if (t.code === "invalid_enum_value") {
                        return {
                            message: n ?? a.defaultError
                        };
                    }
                    if (typeof a.data === "undefined") {
                        return {
                            message: n ?? r ?? a.defaultError
                        };
                    }
                    if (t.code !== "invalid_type") return {
                        message: a.defaultError
                    };
                    return {
                        message: n ?? s ?? a.defaultError
                    };
                };
                return {
                    errorMap: customMap,
                    description: a
                };
            }
            class ZodType {
                get description() {
                    return this._def.description;
                }
                _getType(e) {
                    return (0, o.getParsedType)(e.data);
                }
                _getOrReturnCtx(e, t) {
                    return t || {
                        common: e.parent.common,
                        data: e.data,
                        parsedType: (0, o.getParsedType)(e.data),
                        schemaErrorMap: this._def.errorMap,
                        path: e.path,
                        parent: e.parent
                    };
                }
                _processInputParams(e) {
                    return {
                        status: new i.ParseStatus,
                        ctx: {
                            common: e.parent.common,
                            data: e.data,
                            parsedType: (0, o.getParsedType)(e.data),
                            schemaErrorMap: this._def.errorMap,
                            path: e.path,
                            parent: e.parent
                        }
                    };
                }
                _parseSync(e) {
                    const t = this._parse(e);
                    if ((0, i.isAsync)(t)) {
                        throw new Error("Synchronous parse encountered promise.");
                    }
                    return t;
                }
                _parseAsync(e) {
                    const t = this._parse(e);
                    return Promise.resolve(t);
                }
                parse(e, t) {
                    const s = this.safeParse(e, t);
                    if (s.success) return s.data;
                    throw s.error;
                }
                safeParse(e, t) {
                    const s = {
                        common: {
                            issues: [],
                            async: t?.async ?? false,
                            contextualErrorMap: t?.errorMap
                        },
                        path: t?.path || [],
                        schemaErrorMap: this._def.errorMap,
                        parent: null,
                        data: e,
                        parsedType: (0, o.getParsedType)(e)
                    };
                    const r = this._parseSync({
                        data: e,
                        path: s.path,
                        parent: s
                    });
                    return handleResult(s, r);
                }
                "~validate"(e) {
                    const t = {
                        common: {
                            issues: [],
                            async: !!this["~standard"].async
                        },
                        path: [],
                        schemaErrorMap: this._def.errorMap,
                        parent: null,
                        data: e,
                        parsedType: (0, o.getParsedType)(e)
                    };
                    if (!this["~standard"].async) {
                        try {
                            const s = this._parseSync({
                                data: e,
                                path: [],
                                parent: t
                            });
                            return (0, i.isValid)(s) ? {
                                value: s.value
                            } : {
                                issues: t.common.issues
                            };
                        } catch (e) {
                            if (e?.message?.toLowerCase()?.includes("encountered")) {
                                this["~standard"].async = true;
                            }
                            t.common = {
                                issues: [],
                                async: true
                            };
                        }
                    }
                    return this._parseAsync({
                        data: e,
                        path: [],
                        parent: t
                    }).then((e)=>(0, i.isValid)(e) ? {
                            value: e.value
                        } : {
                            issues: t.common.issues
                        });
                }
                async parseAsync(e, t) {
                    const s = await this.safeParseAsync(e, t);
                    if (s.success) return s.data;
                    throw s.error;
                }
                async safeParseAsync(e, t) {
                    const s = {
                        common: {
                            issues: [],
                            contextualErrorMap: t?.errorMap,
                            async: true
                        },
                        path: t?.path || [],
                        schemaErrorMap: this._def.errorMap,
                        parent: null,
                        data: e,
                        parsedType: (0, o.getParsedType)(e)
                    };
                    const r = this._parse({
                        data: e,
                        path: s.path,
                        parent: s
                    });
                    const a = await ((0, i.isAsync)(r) ? r : Promise.resolve(r));
                    return handleResult(s, a);
                }
                refine(e, t) {
                    const getIssueProperties = (e)=>{
                        if (typeof t === "string" || typeof t === "undefined") {
                            return {
                                message: t
                            };
                        } else if (typeof t === "function") {
                            return t(e);
                        } else {
                            return t;
                        }
                    };
                    return this._refinement((t, s)=>{
                        const a = e(t);
                        const setError = ()=>s.addIssue({
                                code: r.ZodIssueCode.custom,
                                ...getIssueProperties(t)
                            });
                        if (typeof Promise !== "undefined" && a instanceof Promise) {
                            return a.then((e)=>{
                                if (!e) {
                                    setError();
                                    return false;
                                } else {
                                    return true;
                                }
                            });
                        }
                        if (!a) {
                            setError();
                            return false;
                        } else {
                            return true;
                        }
                    });
                }
                refinement(e, t) {
                    return this._refinement((s, r)=>{
                        if (!e(s)) {
                            r.addIssue(typeof t === "function" ? t(s, r) : t);
                            return false;
                        } else {
                            return true;
                        }
                    });
                }
                _refinement(e) {
                    return new ZodEffects({
                        schema: this,
                        typeName: k.ZodEffects,
                        effect: {
                            type: "refinement",
                            refinement: e
                        }
                    });
                }
                superRefine(e) {
                    return this._refinement(e);
                }
                constructor(e){
                    this.spa = this.safeParseAsync;
                    this._def = e;
                    this.parse = this.parse.bind(this);
                    this.safeParse = this.safeParse.bind(this);
                    this.parseAsync = this.parseAsync.bind(this);
                    this.safeParseAsync = this.safeParseAsync.bind(this);
                    this.spa = this.spa.bind(this);
                    this.refine = this.refine.bind(this);
                    this.refinement = this.refinement.bind(this);
                    this.superRefine = this.superRefine.bind(this);
                    this.optional = this.optional.bind(this);
                    this.nullable = this.nullable.bind(this);
                    this.nullish = this.nullish.bind(this);
                    this.array = this.array.bind(this);
                    this.promise = this.promise.bind(this);
                    this.or = this.or.bind(this);
                    this.and = this.and.bind(this);
                    this.transform = this.transform.bind(this);
                    this.brand = this.brand.bind(this);
                    this.default = this.default.bind(this);
                    this.catch = this.catch.bind(this);
                    this.describe = this.describe.bind(this);
                    this.pipe = this.pipe.bind(this);
                    this.readonly = this.readonly.bind(this);
                    this.isNullable = this.isNullable.bind(this);
                    this.isOptional = this.isOptional.bind(this);
                    this["~standard"] = {
                        version: 1,
                        vendor: "zod",
                        validate: (e)=>this["~validate"](e)
                    };
                }
                optional() {
                    return ZodOptional.create(this, this._def);
                }
                nullable() {
                    return ZodNullable.create(this, this._def);
                }
                nullish() {
                    return this.nullable().optional();
                }
                array() {
                    return ZodArray.create(this);
                }
                promise() {
                    return ZodPromise.create(this, this._def);
                }
                or(e) {
                    return ZodUnion.create([
                        this,
                        e
                    ], this._def);
                }
                and(e) {
                    return ZodIntersection.create(this, e, this._def);
                }
                transform(e) {
                    return new ZodEffects({
                        ...processCreateParams(this._def),
                        schema: this,
                        typeName: k.ZodEffects,
                        effect: {
                            type: "transform",
                            transform: e
                        }
                    });
                }
                default(e) {
                    const t = typeof e === "function" ? e : ()=>e;
                    return new ZodDefault({
                        ...processCreateParams(this._def),
                        innerType: this,
                        defaultValue: t,
                        typeName: k.ZodDefault
                    });
                }
                brand() {
                    return new ZodBranded({
                        typeName: k.ZodBranded,
                        type: this,
                        ...processCreateParams(this._def)
                    });
                }
                catch(e) {
                    const t = typeof e === "function" ? e : ()=>e;
                    return new ZodCatch({
                        ...processCreateParams(this._def),
                        innerType: this,
                        catchValue: t,
                        typeName: k.ZodCatch
                    });
                }
                describe(e) {
                    const t = this.constructor;
                    return new t({
                        ...this._def,
                        description: e
                    });
                }
                pipe(e) {
                    return ZodPipeline.create(this, e);
                }
                readonly() {
                    return ZodReadonly.create(this);
                }
                isOptional() {
                    return this.safeParse(undefined).success;
                }
                isNullable() {
                    return this.safeParse(null).success;
                }
            }
            t.ZodType = ZodType;
            t.Schema = ZodType;
            t.ZodSchema = ZodType;
            const d = /^c[^\s-]{8,}$/i;
            const u = /^[0-9a-z]+$/;
            const c = /^[0-9A-HJKMNP-TV-Z]{26}$/i;
            const l = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i;
            const p = /^[a-z0-9_-]{21}$/i;
            const f = /^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/;
            const h = /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/;
            const m = /^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i;
            const y = `^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$`;
            let Z;
            const _ = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/;
            const g = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/;
            const v = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/;
            const I = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/;
            const T = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/;
            const b = /^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/;
            const x = `((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))`;
            const C = new RegExp(`^${x}$`);
            function timeRegexSource(e) {
                let t = `[0-5]\\d`;
                if (e.precision) {
                    t = `${t}\\.\\d{${e.precision}}`;
                } else if (e.precision == null) {
                    t = `${t}(\\.\\d+)?`;
                }
                const s = e.precision ? "+" : "?";
                return `([01]\\d|2[0-3]):[0-5]\\d(:${t})${s}`;
            }
            function timeRegex(e) {
                return new RegExp(`^${timeRegexSource(e)}$`);
            }
            function datetimeRegex(e) {
                let t = `${x}T${timeRegexSource(e)}`;
                const s = [];
                s.push(e.local ? `Z?` : `Z`);
                if (e.offset) s.push(`([+-]\\d{2}:?\\d{2})`);
                t = `${t}(${s.join("|")})`;
                return new RegExp(`^${t}$`);
            }
            function isValidIP(e, t) {
                if ((t === "v4" || !t) && _.test(e)) {
                    return true;
                }
                if ((t === "v6" || !t) && v.test(e)) {
                    return true;
                }
                return false;
            }
            function isValidJWT(e, t) {
                if (!f.test(e)) return false;
                try {
                    const [s] = e.split(".");
                    if (!s) return false;
                    const r = s.replace(/-/g, "+").replace(/_/g, "/").padEnd(s.length + (4 - s.length % 4) % 4, "=");
                    const a = JSON.parse(atob(r));
                    if (typeof a !== "object" || a === null) return false;
                    if ("typ" in a && a?.typ !== "JWT") return false;
                    if (!a.alg) return false;
                    if (t && a.alg !== t) return false;
                    return true;
                } catch  {
                    return false;
                }
            }
            function isValidCidr(e, t) {
                if ((t === "v4" || !t) && g.test(e)) {
                    return true;
                }
                if ((t === "v6" || !t) && I.test(e)) {
                    return true;
                }
                return false;
            }
            class ZodString extends ZodType {
                _parse(e) {
                    if (this._def.coerce) {
                        e.data = String(e.data);
                    }
                    const t = this._getType(e);
                    if (t !== o.ZodParsedType.string) {
                        const t = this._getOrReturnCtx(e);
                        (0, i.addIssueToContext)(t, {
                            code: r.ZodIssueCode.invalid_type,
                            expected: o.ZodParsedType.string,
                            received: t.parsedType
                        });
                        return i.INVALID;
                    }
                    const s = new i.ParseStatus;
                    let a = undefined;
                    for (const t of this._def.checks){
                        if (t.kind === "min") {
                            if (e.data.length < t.value) {
                                a = this._getOrReturnCtx(e, a);
                                (0, i.addIssueToContext)(a, {
                                    code: r.ZodIssueCode.too_small,
                                    minimum: t.value,
                                    type: "string",
                                    inclusive: true,
                                    exact: false,
                                    message: t.message
                                });
                                s.dirty();
                            }
                        } else if (t.kind === "max") {
                            if (e.data.length > t.value) {
                                a = this._getOrReturnCtx(e, a);
                                (0, i.addIssueToContext)(a, {
                                    code: r.ZodIssueCode.too_big,
                                    maximum: t.value,
                                    type: "string",
                                    inclusive: true,
                                    exact: false,
                                    message: t.message
                                });
                                s.dirty();
                            }
                        } else if (t.kind === "length") {
                            const n = e.data.length > t.value;
                            const o = e.data.length < t.value;
                            if (n || o) {
                                a = this._getOrReturnCtx(e, a);
                                if (n) {
                                    (0, i.addIssueToContext)(a, {
                                        code: r.ZodIssueCode.too_big,
                                        maximum: t.value,
                                        type: "string",
                                        inclusive: true,
                                        exact: true,
                                        message: t.message
                                    });
                                } else if (o) {
                                    (0, i.addIssueToContext)(a, {
                                        code: r.ZodIssueCode.too_small,
                                        minimum: t.value,
                                        type: "string",
                                        inclusive: true,
                                        exact: true,
                                        message: t.message
                                    });
                                }
                                s.dirty();
                            }
                        } else if (t.kind === "email") {
                            if (!m.test(e.data)) {
                                a = this._getOrReturnCtx(e, a);
                                (0, i.addIssueToContext)(a, {
                                    validation: "email",
                                    code: r.ZodIssueCode.invalid_string,
                                    message: t.message
                                });
                                s.dirty();
                            }
                        } else if (t.kind === "emoji") {
                            if (!Z) {
                                Z = new RegExp(y, "u");
                            }
                            if (!Z.test(e.data)) {
                                a = this._getOrReturnCtx(e, a);
                                (0, i.addIssueToContext)(a, {
                                    validation: "emoji",
                                    code: r.ZodIssueCode.invalid_string,
                                    message: t.message
                                });
                                s.dirty();
                            }
                        } else if (t.kind === "uuid") {
                            if (!l.test(e.data)) {
                                a = this._getOrReturnCtx(e, a);
                                (0, i.addIssueToContext)(a, {
                                    validation: "uuid",
                                    code: r.ZodIssueCode.invalid_string,
                                    message: t.message
                                });
                                s.dirty();
                            }
                        } else if (t.kind === "nanoid") {
                            if (!p.test(e.data)) {
                                a = this._getOrReturnCtx(e, a);
                                (0, i.addIssueToContext)(a, {
                                    validation: "nanoid",
                                    code: r.ZodIssueCode.invalid_string,
                                    message: t.message
                                });
                                s.dirty();
                            }
                        } else if (t.kind === "cuid") {
                            if (!d.test(e.data)) {
                                a = this._getOrReturnCtx(e, a);
                                (0, i.addIssueToContext)(a, {
                                    validation: "cuid",
                                    code: r.ZodIssueCode.invalid_string,
                                    message: t.message
                                });
                                s.dirty();
                            }
                        } else if (t.kind === "cuid2") {
                            if (!u.test(e.data)) {
                                a = this._getOrReturnCtx(e, a);
                                (0, i.addIssueToContext)(a, {
                                    validation: "cuid2",
                                    code: r.ZodIssueCode.invalid_string,
                                    message: t.message
                                });
                                s.dirty();
                            }
                        } else if (t.kind === "ulid") {
                            if (!c.test(e.data)) {
                                a = this._getOrReturnCtx(e, a);
                                (0, i.addIssueToContext)(a, {
                                    validation: "ulid",
                                    code: r.ZodIssueCode.invalid_string,
                                    message: t.message
                                });
                                s.dirty();
                            }
                        } else if (t.kind === "url") {
                            try {
                                new URL(e.data);
                            } catch  {
                                a = this._getOrReturnCtx(e, a);
                                (0, i.addIssueToContext)(a, {
                                    validation: "url",
                                    code: r.ZodIssueCode.invalid_string,
                                    message: t.message
                                });
                                s.dirty();
                            }
                        } else if (t.kind === "regex") {
                            t.regex.lastIndex = 0;
                            const n = t.regex.test(e.data);
                            if (!n) {
                                a = this._getOrReturnCtx(e, a);
                                (0, i.addIssueToContext)(a, {
                                    validation: "regex",
                                    code: r.ZodIssueCode.invalid_string,
                                    message: t.message
                                });
                                s.dirty();
                            }
                        } else if (t.kind === "trim") {
                            e.data = e.data.trim();
                        } else if (t.kind === "includes") {
                            if (!e.data.includes(t.value, t.position)) {
                                a = this._getOrReturnCtx(e, a);
                                (0, i.addIssueToContext)(a, {
                                    code: r.ZodIssueCode.invalid_string,
                                    validation: {
                                        includes: t.value,
                                        position: t.position
                                    },
                                    message: t.message
                                });
                                s.dirty();
                            }
                        } else if (t.kind === "toLowerCase") {
                            e.data = e.data.toLowerCase();
                        } else if (t.kind === "toUpperCase") {
                            e.data = e.data.toUpperCase();
                        } else if (t.kind === "startsWith") {
                            if (!e.data.startsWith(t.value)) {
                                a = this._getOrReturnCtx(e, a);
                                (0, i.addIssueToContext)(a, {
                                    code: r.ZodIssueCode.invalid_string,
                                    validation: {
                                        startsWith: t.value
                                    },
                                    message: t.message
                                });
                                s.dirty();
                            }
                        } else if (t.kind === "endsWith") {
                            if (!e.data.endsWith(t.value)) {
                                a = this._getOrReturnCtx(e, a);
                                (0, i.addIssueToContext)(a, {
                                    code: r.ZodIssueCode.invalid_string,
                                    validation: {
                                        endsWith: t.value
                                    },
                                    message: t.message
                                });
                                s.dirty();
                            }
                        } else if (t.kind === "datetime") {
                            const n = datetimeRegex(t);
                            if (!n.test(e.data)) {
                                a = this._getOrReturnCtx(e, a);
                                (0, i.addIssueToContext)(a, {
                                    code: r.ZodIssueCode.invalid_string,
                                    validation: "datetime",
                                    message: t.message
                                });
                                s.dirty();
                            }
                        } else if (t.kind === "date") {
                            const n = C;
                            if (!n.test(e.data)) {
                                a = this._getOrReturnCtx(e, a);
                                (0, i.addIssueToContext)(a, {
                                    code: r.ZodIssueCode.invalid_string,
                                    validation: "date",
                                    message: t.message
                                });
                                s.dirty();
                            }
                        } else if (t.kind === "time") {
                            const n = timeRegex(t);
                            if (!n.test(e.data)) {
                                a = this._getOrReturnCtx(e, a);
                                (0, i.addIssueToContext)(a, {
                                    code: r.ZodIssueCode.invalid_string,
                                    validation: "time",
                                    message: t.message
                                });
                                s.dirty();
                            }
                        } else if (t.kind === "duration") {
                            if (!h.test(e.data)) {
                                a = this._getOrReturnCtx(e, a);
                                (0, i.addIssueToContext)(a, {
                                    validation: "duration",
                                    code: r.ZodIssueCode.invalid_string,
                                    message: t.message
                                });
                                s.dirty();
                            }
                        } else if (t.kind === "ip") {
                            if (!isValidIP(e.data, t.version)) {
                                a = this._getOrReturnCtx(e, a);
                                (0, i.addIssueToContext)(a, {
                                    validation: "ip",
                                    code: r.ZodIssueCode.invalid_string,
                                    message: t.message
                                });
                                s.dirty();
                            }
                        } else if (t.kind === "jwt") {
                            if (!isValidJWT(e.data, t.alg)) {
                                a = this._getOrReturnCtx(e, a);
                                (0, i.addIssueToContext)(a, {
                                    validation: "jwt",
                                    code: r.ZodIssueCode.invalid_string,
                                    message: t.message
                                });
                                s.dirty();
                            }
                        } else if (t.kind === "cidr") {
                            if (!isValidCidr(e.data, t.version)) {
                                a = this._getOrReturnCtx(e, a);
                                (0, i.addIssueToContext)(a, {
                                    validation: "cidr",
                                    code: r.ZodIssueCode.invalid_string,
                                    message: t.message
                                });
                                s.dirty();
                            }
                        } else if (t.kind === "base64") {
                            if (!T.test(e.data)) {
                                a = this._getOrReturnCtx(e, a);
                                (0, i.addIssueToContext)(a, {
                                    validation: "base64",
                                    code: r.ZodIssueCode.invalid_string,
                                    message: t.message
                                });
                                s.dirty();
                            }
                        } else if (t.kind === "base64url") {
                            if (!b.test(e.data)) {
                                a = this._getOrReturnCtx(e, a);
                                (0, i.addIssueToContext)(a, {
                                    validation: "base64url",
                                    code: r.ZodIssueCode.invalid_string,
                                    message: t.message
                                });
                                s.dirty();
                            }
                        } else {
                            o.util.assertNever(t);
                        }
                    }
                    return {
                        status: s.value,
                        value: e.data
                    };
                }
                _regex(e, t, s) {
                    return this.refinement((t)=>e.test(t), {
                        validation: t,
                        code: r.ZodIssueCode.invalid_string,
                        ...n.errorUtil.errToObj(s)
                    });
                }
                _addCheck(e) {
                    return new ZodString({
                        ...this._def,
                        checks: [
                            ...this._def.checks,
                            e
                        ]
                    });
                }
                email(e) {
                    return this._addCheck({
                        kind: "email",
                        ...n.errorUtil.errToObj(e)
                    });
                }
                url(e) {
                    return this._addCheck({
                        kind: "url",
                        ...n.errorUtil.errToObj(e)
                    });
                }
                emoji(e) {
                    return this._addCheck({
                        kind: "emoji",
                        ...n.errorUtil.errToObj(e)
                    });
                }
                uuid(e) {
                    return this._addCheck({
                        kind: "uuid",
                        ...n.errorUtil.errToObj(e)
                    });
                }
                nanoid(e) {
                    return this._addCheck({
                        kind: "nanoid",
                        ...n.errorUtil.errToObj(e)
                    });
                }
                cuid(e) {
                    return this._addCheck({
                        kind: "cuid",
                        ...n.errorUtil.errToObj(e)
                    });
                }
                cuid2(e) {
                    return this._addCheck({
                        kind: "cuid2",
                        ...n.errorUtil.errToObj(e)
                    });
                }
                ulid(e) {
                    return this._addCheck({
                        kind: "ulid",
                        ...n.errorUtil.errToObj(e)
                    });
                }
                base64(e) {
                    return this._addCheck({
                        kind: "base64",
                        ...n.errorUtil.errToObj(e)
                    });
                }
                base64url(e) {
                    return this._addCheck({
                        kind: "base64url",
                        ...n.errorUtil.errToObj(e)
                    });
                }
                jwt(e) {
                    return this._addCheck({
                        kind: "jwt",
                        ...n.errorUtil.errToObj(e)
                    });
                }
                ip(e) {
                    return this._addCheck({
                        kind: "ip",
                        ...n.errorUtil.errToObj(e)
                    });
                }
                cidr(e) {
                    return this._addCheck({
                        kind: "cidr",
                        ...n.errorUtil.errToObj(e)
                    });
                }
                datetime(e) {
                    if (typeof e === "string") {
                        return this._addCheck({
                            kind: "datetime",
                            precision: null,
                            offset: false,
                            local: false,
                            message: e
                        });
                    }
                    return this._addCheck({
                        kind: "datetime",
                        precision: typeof e?.precision === "undefined" ? null : e?.precision,
                        offset: e?.offset ?? false,
                        local: e?.local ?? false,
                        ...n.errorUtil.errToObj(e?.message)
                    });
                }
                date(e) {
                    return this._addCheck({
                        kind: "date",
                        message: e
                    });
                }
                time(e) {
                    if (typeof e === "string") {
                        return this._addCheck({
                            kind: "time",
                            precision: null,
                            message: e
                        });
                    }
                    return this._addCheck({
                        kind: "time",
                        precision: typeof e?.precision === "undefined" ? null : e?.precision,
                        ...n.errorUtil.errToObj(e?.message)
                    });
                }
                duration(e) {
                    return this._addCheck({
                        kind: "duration",
                        ...n.errorUtil.errToObj(e)
                    });
                }
                regex(e, t) {
                    return this._addCheck({
                        kind: "regex",
                        regex: e,
                        ...n.errorUtil.errToObj(t)
                    });
                }
                includes(e, t) {
                    return this._addCheck({
                        kind: "includes",
                        value: e,
                        position: t?.position,
                        ...n.errorUtil.errToObj(t?.message)
                    });
                }
                startsWith(e, t) {
                    return this._addCheck({
                        kind: "startsWith",
                        value: e,
                        ...n.errorUtil.errToObj(t)
                    });
                }
                endsWith(e, t) {
                    return this._addCheck({
                        kind: "endsWith",
                        value: e,
                        ...n.errorUtil.errToObj(t)
                    });
                }
                min(e, t) {
                    return this._addCheck({
                        kind: "min",
                        value: e,
                        ...n.errorUtil.errToObj(t)
                    });
                }
                max(e, t) {
                    return this._addCheck({
                        kind: "max",
                        value: e,
                        ...n.errorUtil.errToObj(t)
                    });
                }
                length(e, t) {
                    return this._addCheck({
                        kind: "length",
                        value: e,
                        ...n.errorUtil.errToObj(t)
                    });
                }
                nonempty(e) {
                    return this.min(1, n.errorUtil.errToObj(e));
                }
                trim() {
                    return new ZodString({
                        ...this._def,
                        checks: [
                            ...this._def.checks,
                            {
                                kind: "trim"
                            }
                        ]
                    });
                }
                toLowerCase() {
                    return new ZodString({
                        ...this._def,
                        checks: [
                            ...this._def.checks,
                            {
                                kind: "toLowerCase"
                            }
                        ]
                    });
                }
                toUpperCase() {
                    return new ZodString({
                        ...this._def,
                        checks: [
                            ...this._def.checks,
                            {
                                kind: "toUpperCase"
                            }
                        ]
                    });
                }
                get isDatetime() {
                    return !!this._def.checks.find((e)=>e.kind === "datetime");
                }
                get isDate() {
                    return !!this._def.checks.find((e)=>e.kind === "date");
                }
                get isTime() {
                    return !!this._def.checks.find((e)=>e.kind === "time");
                }
                get isDuration() {
                    return !!this._def.checks.find((e)=>e.kind === "duration");
                }
                get isEmail() {
                    return !!this._def.checks.find((e)=>e.kind === "email");
                }
                get isURL() {
                    return !!this._def.checks.find((e)=>e.kind === "url");
                }
                get isEmoji() {
                    return !!this._def.checks.find((e)=>e.kind === "emoji");
                }
                get isUUID() {
                    return !!this._def.checks.find((e)=>e.kind === "uuid");
                }
                get isNANOID() {
                    return !!this._def.checks.find((e)=>e.kind === "nanoid");
                }
                get isCUID() {
                    return !!this._def.checks.find((e)=>e.kind === "cuid");
                }
                get isCUID2() {
                    return !!this._def.checks.find((e)=>e.kind === "cuid2");
                }
                get isULID() {
                    return !!this._def.checks.find((e)=>e.kind === "ulid");
                }
                get isIP() {
                    return !!this._def.checks.find((e)=>e.kind === "ip");
                }
                get isCIDR() {
                    return !!this._def.checks.find((e)=>e.kind === "cidr");
                }
                get isBase64() {
                    return !!this._def.checks.find((e)=>e.kind === "base64");
                }
                get isBase64url() {
                    return !!this._def.checks.find((e)=>e.kind === "base64url");
                }
                get minLength() {
                    let e = null;
                    for (const t of this._def.checks){
                        if (t.kind === "min") {
                            if (e === null || t.value > e) e = t.value;
                        }
                    }
                    return e;
                }
                get maxLength() {
                    let e = null;
                    for (const t of this._def.checks){
                        if (t.kind === "max") {
                            if (e === null || t.value < e) e = t.value;
                        }
                    }
                    return e;
                }
            }
            t.ZodString = ZodString;
            ZodString.create = (e)=>new ZodString({
                    checks: [],
                    typeName: k.ZodString,
                    coerce: e?.coerce ?? false,
                    ...processCreateParams(e)
                });
            function floatSafeRemainder(e, t) {
                const s = (e.toString().split(".")[1] || "").length;
                const r = (t.toString().split(".")[1] || "").length;
                const a = s > r ? s : r;
                const n = Number.parseInt(e.toFixed(a).replace(".", ""));
                const i = Number.parseInt(t.toFixed(a).replace(".", ""));
                return n % i / 10 ** a;
            }
            class ZodNumber extends ZodType {
                constructor(){
                    super(...arguments);
                    this.min = this.gte;
                    this.max = this.lte;
                    this.step = this.multipleOf;
                }
                _parse(e) {
                    if (this._def.coerce) {
                        e.data = Number(e.data);
                    }
                    const t = this._getType(e);
                    if (t !== o.ZodParsedType.number) {
                        const t = this._getOrReturnCtx(e);
                        (0, i.addIssueToContext)(t, {
                            code: r.ZodIssueCode.invalid_type,
                            expected: o.ZodParsedType.number,
                            received: t.parsedType
                        });
                        return i.INVALID;
                    }
                    let s = undefined;
                    const a = new i.ParseStatus;
                    for (const t of this._def.checks){
                        if (t.kind === "int") {
                            if (!o.util.isInteger(e.data)) {
                                s = this._getOrReturnCtx(e, s);
                                (0, i.addIssueToContext)(s, {
                                    code: r.ZodIssueCode.invalid_type,
                                    expected: "integer",
                                    received: "float",
                                    message: t.message
                                });
                                a.dirty();
                            }
                        } else if (t.kind === "min") {
                            const n = t.inclusive ? e.data < t.value : e.data <= t.value;
                            if (n) {
                                s = this._getOrReturnCtx(e, s);
                                (0, i.addIssueToContext)(s, {
                                    code: r.ZodIssueCode.too_small,
                                    minimum: t.value,
                                    type: "number",
                                    inclusive: t.inclusive,
                                    exact: false,
                                    message: t.message
                                });
                                a.dirty();
                            }
                        } else if (t.kind === "max") {
                            const n = t.inclusive ? e.data > t.value : e.data >= t.value;
                            if (n) {
                                s = this._getOrReturnCtx(e, s);
                                (0, i.addIssueToContext)(s, {
                                    code: r.ZodIssueCode.too_big,
                                    maximum: t.value,
                                    type: "number",
                                    inclusive: t.inclusive,
                                    exact: false,
                                    message: t.message
                                });
                                a.dirty();
                            }
                        } else if (t.kind === "multipleOf") {
                            if (floatSafeRemainder(e.data, t.value) !== 0) {
                                s = this._getOrReturnCtx(e, s);
                                (0, i.addIssueToContext)(s, {
                                    code: r.ZodIssueCode.not_multiple_of,
                                    multipleOf: t.value,
                                    message: t.message
                                });
                                a.dirty();
                            }
                        } else if (t.kind === "finite") {
                            if (!Number.isFinite(e.data)) {
                                s = this._getOrReturnCtx(e, s);
                                (0, i.addIssueToContext)(s, {
                                    code: r.ZodIssueCode.not_finite,
                                    message: t.message
                                });
                                a.dirty();
                            }
                        } else {
                            o.util.assertNever(t);
                        }
                    }
                    return {
                        status: a.value,
                        value: e.data
                    };
                }
                gte(e, t) {
                    return this.setLimit("min", e, true, n.errorUtil.toString(t));
                }
                gt(e, t) {
                    return this.setLimit("min", e, false, n.errorUtil.toString(t));
                }
                lte(e, t) {
                    return this.setLimit("max", e, true, n.errorUtil.toString(t));
                }
                lt(e, t) {
                    return this.setLimit("max", e, false, n.errorUtil.toString(t));
                }
                setLimit(e, t, s, r) {
                    return new ZodNumber({
                        ...this._def,
                        checks: [
                            ...this._def.checks,
                            {
                                kind: e,
                                value: t,
                                inclusive: s,
                                message: n.errorUtil.toString(r)
                            }
                        ]
                    });
                }
                _addCheck(e) {
                    return new ZodNumber({
                        ...this._def,
                        checks: [
                            ...this._def.checks,
                            e
                        ]
                    });
                }
                int(e) {
                    return this._addCheck({
                        kind: "int",
                        message: n.errorUtil.toString(e)
                    });
                }
                positive(e) {
                    return this._addCheck({
                        kind: "min",
                        value: 0,
                        inclusive: false,
                        message: n.errorUtil.toString(e)
                    });
                }
                negative(e) {
                    return this._addCheck({
                        kind: "max",
                        value: 0,
                        inclusive: false,
                        message: n.errorUtil.toString(e)
                    });
                }
                nonpositive(e) {
                    return this._addCheck({
                        kind: "max",
                        value: 0,
                        inclusive: true,
                        message: n.errorUtil.toString(e)
                    });
                }
                nonnegative(e) {
                    return this._addCheck({
                        kind: "min",
                        value: 0,
                        inclusive: true,
                        message: n.errorUtil.toString(e)
                    });
                }
                multipleOf(e, t) {
                    return this._addCheck({
                        kind: "multipleOf",
                        value: e,
                        message: n.errorUtil.toString(t)
                    });
                }
                finite(e) {
                    return this._addCheck({
                        kind: "finite",
                        message: n.errorUtil.toString(e)
                    });
                }
                safe(e) {
                    return this._addCheck({
                        kind: "min",
                        inclusive: true,
                        value: Number.MIN_SAFE_INTEGER,
                        message: n.errorUtil.toString(e)
                    })._addCheck({
                        kind: "max",
                        inclusive: true,
                        value: Number.MAX_SAFE_INTEGER,
                        message: n.errorUtil.toString(e)
                    });
                }
                get minValue() {
                    let e = null;
                    for (const t of this._def.checks){
                        if (t.kind === "min") {
                            if (e === null || t.value > e) e = t.value;
                        }
                    }
                    return e;
                }
                get maxValue() {
                    let e = null;
                    for (const t of this._def.checks){
                        if (t.kind === "max") {
                            if (e === null || t.value < e) e = t.value;
                        }
                    }
                    return e;
                }
                get isInt() {
                    return !!this._def.checks.find((e)=>e.kind === "int" || e.kind === "multipleOf" && o.util.isInteger(e.value));
                }
                get isFinite() {
                    let e = null;
                    let t = null;
                    for (const s of this._def.checks){
                        if (s.kind === "finite" || s.kind === "int" || s.kind === "multipleOf") {
                            return true;
                        } else if (s.kind === "min") {
                            if (t === null || s.value > t) t = s.value;
                        } else if (s.kind === "max") {
                            if (e === null || s.value < e) e = s.value;
                        }
                    }
                    return Number.isFinite(t) && Number.isFinite(e);
                }
            }
            t.ZodNumber = ZodNumber;
            ZodNumber.create = (e)=>new ZodNumber({
                    checks: [],
                    typeName: k.ZodNumber,
                    coerce: e?.coerce || false,
                    ...processCreateParams(e)
                });
            class ZodBigInt extends ZodType {
                constructor(){
                    super(...arguments);
                    this.min = this.gte;
                    this.max = this.lte;
                }
                _parse(e) {
                    if (this._def.coerce) {
                        try {
                            e.data = BigInt(e.data);
                        } catch  {
                            return this._getInvalidInput(e);
                        }
                    }
                    const t = this._getType(e);
                    if (t !== o.ZodParsedType.bigint) {
                        return this._getInvalidInput(e);
                    }
                    let s = undefined;
                    const a = new i.ParseStatus;
                    for (const t of this._def.checks){
                        if (t.kind === "min") {
                            const n = t.inclusive ? e.data < t.value : e.data <= t.value;
                            if (n) {
                                s = this._getOrReturnCtx(e, s);
                                (0, i.addIssueToContext)(s, {
                                    code: r.ZodIssueCode.too_small,
                                    type: "bigint",
                                    minimum: t.value,
                                    inclusive: t.inclusive,
                                    message: t.message
                                });
                                a.dirty();
                            }
                        } else if (t.kind === "max") {
                            const n = t.inclusive ? e.data > t.value : e.data >= t.value;
                            if (n) {
                                s = this._getOrReturnCtx(e, s);
                                (0, i.addIssueToContext)(s, {
                                    code: r.ZodIssueCode.too_big,
                                    type: "bigint",
                                    maximum: t.value,
                                    inclusive: t.inclusive,
                                    message: t.message
                                });
                                a.dirty();
                            }
                        } else if (t.kind === "multipleOf") {
                            if (e.data % t.value !== BigInt(0)) {
                                s = this._getOrReturnCtx(e, s);
                                (0, i.addIssueToContext)(s, {
                                    code: r.ZodIssueCode.not_multiple_of,
                                    multipleOf: t.value,
                                    message: t.message
                                });
                                a.dirty();
                            }
                        } else {
                            o.util.assertNever(t);
                        }
                    }
                    return {
                        status: a.value,
                        value: e.data
                    };
                }
                _getInvalidInput(e) {
                    const t = this._getOrReturnCtx(e);
                    (0, i.addIssueToContext)(t, {
                        code: r.ZodIssueCode.invalid_type,
                        expected: o.ZodParsedType.bigint,
                        received: t.parsedType
                    });
                    return i.INVALID;
                }
                gte(e, t) {
                    return this.setLimit("min", e, true, n.errorUtil.toString(t));
                }
                gt(e, t) {
                    return this.setLimit("min", e, false, n.errorUtil.toString(t));
                }
                lte(e, t) {
                    return this.setLimit("max", e, true, n.errorUtil.toString(t));
                }
                lt(e, t) {
                    return this.setLimit("max", e, false, n.errorUtil.toString(t));
                }
                setLimit(e, t, s, r) {
                    return new ZodBigInt({
                        ...this._def,
                        checks: [
                            ...this._def.checks,
                            {
                                kind: e,
                                value: t,
                                inclusive: s,
                                message: n.errorUtil.toString(r)
                            }
                        ]
                    });
                }
                _addCheck(e) {
                    return new ZodBigInt({
                        ...this._def,
                        checks: [
                            ...this._def.checks,
                            e
                        ]
                    });
                }
                positive(e) {
                    return this._addCheck({
                        kind: "min",
                        value: BigInt(0),
                        inclusive: false,
                        message: n.errorUtil.toString(e)
                    });
                }
                negative(e) {
                    return this._addCheck({
                        kind: "max",
                        value: BigInt(0),
                        inclusive: false,
                        message: n.errorUtil.toString(e)
                    });
                }
                nonpositive(e) {
                    return this._addCheck({
                        kind: "max",
                        value: BigInt(0),
                        inclusive: true,
                        message: n.errorUtil.toString(e)
                    });
                }
                nonnegative(e) {
                    return this._addCheck({
                        kind: "min",
                        value: BigInt(0),
                        inclusive: true,
                        message: n.errorUtil.toString(e)
                    });
                }
                multipleOf(e, t) {
                    return this._addCheck({
                        kind: "multipleOf",
                        value: e,
                        message: n.errorUtil.toString(t)
                    });
                }
                get minValue() {
                    let e = null;
                    for (const t of this._def.checks){
                        if (t.kind === "min") {
                            if (e === null || t.value > e) e = t.value;
                        }
                    }
                    return e;
                }
                get maxValue() {
                    let e = null;
                    for (const t of this._def.checks){
                        if (t.kind === "max") {
                            if (e === null || t.value < e) e = t.value;
                        }
                    }
                    return e;
                }
            }
            t.ZodBigInt = ZodBigInt;
            ZodBigInt.create = (e)=>new ZodBigInt({
                    checks: [],
                    typeName: k.ZodBigInt,
                    coerce: e?.coerce ?? false,
                    ...processCreateParams(e)
                });
            class ZodBoolean extends ZodType {
                _parse(e) {
                    if (this._def.coerce) {
                        e.data = Boolean(e.data);
                    }
                    const t = this._getType(e);
                    if (t !== o.ZodParsedType.boolean) {
                        const t = this._getOrReturnCtx(e);
                        (0, i.addIssueToContext)(t, {
                            code: r.ZodIssueCode.invalid_type,
                            expected: o.ZodParsedType.boolean,
                            received: t.parsedType
                        });
                        return i.INVALID;
                    }
                    return (0, i.OK)(e.data);
                }
            }
            t.ZodBoolean = ZodBoolean;
            ZodBoolean.create = (e)=>new ZodBoolean({
                    typeName: k.ZodBoolean,
                    coerce: e?.coerce || false,
                    ...processCreateParams(e)
                });
            class ZodDate extends ZodType {
                _parse(e) {
                    if (this._def.coerce) {
                        e.data = new Date(e.data);
                    }
                    const t = this._getType(e);
                    if (t !== o.ZodParsedType.date) {
                        const t = this._getOrReturnCtx(e);
                        (0, i.addIssueToContext)(t, {
                            code: r.ZodIssueCode.invalid_type,
                            expected: o.ZodParsedType.date,
                            received: t.parsedType
                        });
                        return i.INVALID;
                    }
                    if (Number.isNaN(e.data.getTime())) {
                        const t = this._getOrReturnCtx(e);
                        (0, i.addIssueToContext)(t, {
                            code: r.ZodIssueCode.invalid_date
                        });
                        return i.INVALID;
                    }
                    const s = new i.ParseStatus;
                    let a = undefined;
                    for (const t of this._def.checks){
                        if (t.kind === "min") {
                            if (e.data.getTime() < t.value) {
                                a = this._getOrReturnCtx(e, a);
                                (0, i.addIssueToContext)(a, {
                                    code: r.ZodIssueCode.too_small,
                                    message: t.message,
                                    inclusive: true,
                                    exact: false,
                                    minimum: t.value,
                                    type: "date"
                                });
                                s.dirty();
                            }
                        } else if (t.kind === "max") {
                            if (e.data.getTime() > t.value) {
                                a = this._getOrReturnCtx(e, a);
                                (0, i.addIssueToContext)(a, {
                                    code: r.ZodIssueCode.too_big,
                                    message: t.message,
                                    inclusive: true,
                                    exact: false,
                                    maximum: t.value,
                                    type: "date"
                                });
                                s.dirty();
                            }
                        } else {
                            o.util.assertNever(t);
                        }
                    }
                    return {
                        status: s.value,
                        value: new Date(e.data.getTime())
                    };
                }
                _addCheck(e) {
                    return new ZodDate({
                        ...this._def,
                        checks: [
                            ...this._def.checks,
                            e
                        ]
                    });
                }
                min(e, t) {
                    return this._addCheck({
                        kind: "min",
                        value: e.getTime(),
                        message: n.errorUtil.toString(t)
                    });
                }
                max(e, t) {
                    return this._addCheck({
                        kind: "max",
                        value: e.getTime(),
                        message: n.errorUtil.toString(t)
                    });
                }
                get minDate() {
                    let e = null;
                    for (const t of this._def.checks){
                        if (t.kind === "min") {
                            if (e === null || t.value > e) e = t.value;
                        }
                    }
                    return e != null ? new Date(e) : null;
                }
                get maxDate() {
                    let e = null;
                    for (const t of this._def.checks){
                        if (t.kind === "max") {
                            if (e === null || t.value < e) e = t.value;
                        }
                    }
                    return e != null ? new Date(e) : null;
                }
            }
            t.ZodDate = ZodDate;
            ZodDate.create = (e)=>new ZodDate({
                    checks: [],
                    coerce: e?.coerce || false,
                    typeName: k.ZodDate,
                    ...processCreateParams(e)
                });
            class ZodSymbol extends ZodType {
                _parse(e) {
                    const t = this._getType(e);
                    if (t !== o.ZodParsedType.symbol) {
                        const t = this._getOrReturnCtx(e);
                        (0, i.addIssueToContext)(t, {
                            code: r.ZodIssueCode.invalid_type,
                            expected: o.ZodParsedType.symbol,
                            received: t.parsedType
                        });
                        return i.INVALID;
                    }
                    return (0, i.OK)(e.data);
                }
            }
            t.ZodSymbol = ZodSymbol;
            ZodSymbol.create = (e)=>new ZodSymbol({
                    typeName: k.ZodSymbol,
                    ...processCreateParams(e)
                });
            class ZodUndefined extends ZodType {
                _parse(e) {
                    const t = this._getType(e);
                    if (t !== o.ZodParsedType.undefined) {
                        const t = this._getOrReturnCtx(e);
                        (0, i.addIssueToContext)(t, {
                            code: r.ZodIssueCode.invalid_type,
                            expected: o.ZodParsedType.undefined,
                            received: t.parsedType
                        });
                        return i.INVALID;
                    }
                    return (0, i.OK)(e.data);
                }
            }
            t.ZodUndefined = ZodUndefined;
            ZodUndefined.create = (e)=>new ZodUndefined({
                    typeName: k.ZodUndefined,
                    ...processCreateParams(e)
                });
            class ZodNull extends ZodType {
                _parse(e) {
                    const t = this._getType(e);
                    if (t !== o.ZodParsedType.null) {
                        const t = this._getOrReturnCtx(e);
                        (0, i.addIssueToContext)(t, {
                            code: r.ZodIssueCode.invalid_type,
                            expected: o.ZodParsedType.null,
                            received: t.parsedType
                        });
                        return i.INVALID;
                    }
                    return (0, i.OK)(e.data);
                }
            }
            t.ZodNull = ZodNull;
            ZodNull.create = (e)=>new ZodNull({
                    typeName: k.ZodNull,
                    ...processCreateParams(e)
                });
            class ZodAny extends ZodType {
                constructor(){
                    super(...arguments);
                    this._any = true;
                }
                _parse(e) {
                    return (0, i.OK)(e.data);
                }
            }
            t.ZodAny = ZodAny;
            ZodAny.create = (e)=>new ZodAny({
                    typeName: k.ZodAny,
                    ...processCreateParams(e)
                });
            class ZodUnknown extends ZodType {
                constructor(){
                    super(...arguments);
                    this._unknown = true;
                }
                _parse(e) {
                    return (0, i.OK)(e.data);
                }
            }
            t.ZodUnknown = ZodUnknown;
            ZodUnknown.create = (e)=>new ZodUnknown({
                    typeName: k.ZodUnknown,
                    ...processCreateParams(e)
                });
            class ZodNever extends ZodType {
                _parse(e) {
                    const t = this._getOrReturnCtx(e);
                    (0, i.addIssueToContext)(t, {
                        code: r.ZodIssueCode.invalid_type,
                        expected: o.ZodParsedType.never,
                        received: t.parsedType
                    });
                    return i.INVALID;
                }
            }
            t.ZodNever = ZodNever;
            ZodNever.create = (e)=>new ZodNever({
                    typeName: k.ZodNever,
                    ...processCreateParams(e)
                });
            class ZodVoid extends ZodType {
                _parse(e) {
                    const t = this._getType(e);
                    if (t !== o.ZodParsedType.undefined) {
                        const t = this._getOrReturnCtx(e);
                        (0, i.addIssueToContext)(t, {
                            code: r.ZodIssueCode.invalid_type,
                            expected: o.ZodParsedType.void,
                            received: t.parsedType
                        });
                        return i.INVALID;
                    }
                    return (0, i.OK)(e.data);
                }
            }
            t.ZodVoid = ZodVoid;
            ZodVoid.create = (e)=>new ZodVoid({
                    typeName: k.ZodVoid,
                    ...processCreateParams(e)
                });
            class ZodArray extends ZodType {
                _parse(e) {
                    const { ctx: t, status: s } = this._processInputParams(e);
                    const a = this._def;
                    if (t.parsedType !== o.ZodParsedType.array) {
                        (0, i.addIssueToContext)(t, {
                            code: r.ZodIssueCode.invalid_type,
                            expected: o.ZodParsedType.array,
                            received: t.parsedType
                        });
                        return i.INVALID;
                    }
                    if (a.exactLength !== null) {
                        const e = t.data.length > a.exactLength.value;
                        const n = t.data.length < a.exactLength.value;
                        if (e || n) {
                            (0, i.addIssueToContext)(t, {
                                code: e ? r.ZodIssueCode.too_big : r.ZodIssueCode.too_small,
                                minimum: n ? a.exactLength.value : undefined,
                                maximum: e ? a.exactLength.value : undefined,
                                type: "array",
                                inclusive: true,
                                exact: true,
                                message: a.exactLength.message
                            });
                            s.dirty();
                        }
                    }
                    if (a.minLength !== null) {
                        if (t.data.length < a.minLength.value) {
                            (0, i.addIssueToContext)(t, {
                                code: r.ZodIssueCode.too_small,
                                minimum: a.minLength.value,
                                type: "array",
                                inclusive: true,
                                exact: false,
                                message: a.minLength.message
                            });
                            s.dirty();
                        }
                    }
                    if (a.maxLength !== null) {
                        if (t.data.length > a.maxLength.value) {
                            (0, i.addIssueToContext)(t, {
                                code: r.ZodIssueCode.too_big,
                                maximum: a.maxLength.value,
                                type: "array",
                                inclusive: true,
                                exact: false,
                                message: a.maxLength.message
                            });
                            s.dirty();
                        }
                    }
                    if (t.common.async) {
                        return Promise.all([
                            ...t.data
                        ].map((e, s)=>a.type._parseAsync(new ParseInputLazyPath(t, e, t.path, s)))).then((e)=>i.ParseStatus.mergeArray(s, e));
                    }
                    const n = [
                        ...t.data
                    ].map((e, s)=>a.type._parseSync(new ParseInputLazyPath(t, e, t.path, s)));
                    return i.ParseStatus.mergeArray(s, n);
                }
                get element() {
                    return this._def.type;
                }
                min(e, t) {
                    return new ZodArray({
                        ...this._def,
                        minLength: {
                            value: e,
                            message: n.errorUtil.toString(t)
                        }
                    });
                }
                max(e, t) {
                    return new ZodArray({
                        ...this._def,
                        maxLength: {
                            value: e,
                            message: n.errorUtil.toString(t)
                        }
                    });
                }
                length(e, t) {
                    return new ZodArray({
                        ...this._def,
                        exactLength: {
                            value: e,
                            message: n.errorUtil.toString(t)
                        }
                    });
                }
                nonempty(e) {
                    return this.min(1, e);
                }
            }
            t.ZodArray = ZodArray;
            ZodArray.create = (e, t)=>new ZodArray({
                    type: e,
                    minLength: null,
                    maxLength: null,
                    exactLength: null,
                    typeName: k.ZodArray,
                    ...processCreateParams(t)
                });
            function deepPartialify(e) {
                if (e instanceof ZodObject) {
                    const t = {};
                    for(const s in e.shape){
                        const r = e.shape[s];
                        t[s] = ZodOptional.create(deepPartialify(r));
                    }
                    return new ZodObject({
                        ...e._def,
                        shape: ()=>t
                    });
                } else if (e instanceof ZodArray) {
                    return new ZodArray({
                        ...e._def,
                        type: deepPartialify(e.element)
                    });
                } else if (e instanceof ZodOptional) {
                    return ZodOptional.create(deepPartialify(e.unwrap()));
                } else if (e instanceof ZodNullable) {
                    return ZodNullable.create(deepPartialify(e.unwrap()));
                } else if (e instanceof ZodTuple) {
                    return ZodTuple.create(e.items.map((e)=>deepPartialify(e)));
                } else {
                    return e;
                }
            }
            class ZodObject extends ZodType {
                constructor(){
                    super(...arguments);
                    this._cached = null;
                    this.nonstrict = this.passthrough;
                    this.augment = this.extend;
                }
                _getCached() {
                    if (this._cached !== null) return this._cached;
                    const e = this._def.shape();
                    const t = o.util.objectKeys(e);
                    this._cached = {
                        shape: e,
                        keys: t
                    };
                    return this._cached;
                }
                _parse(e) {
                    const t = this._getType(e);
                    if (t !== o.ZodParsedType.object) {
                        const t = this._getOrReturnCtx(e);
                        (0, i.addIssueToContext)(t, {
                            code: r.ZodIssueCode.invalid_type,
                            expected: o.ZodParsedType.object,
                            received: t.parsedType
                        });
                        return i.INVALID;
                    }
                    const { status: s, ctx: a } = this._processInputParams(e);
                    const { shape: n, keys: d } = this._getCached();
                    const u = [];
                    if (!(this._def.catchall instanceof ZodNever && this._def.unknownKeys === "strip")) {
                        for(const e in a.data){
                            if (!d.includes(e)) {
                                u.push(e);
                            }
                        }
                    }
                    const c = [];
                    for (const e of d){
                        const t = n[e];
                        const s = a.data[e];
                        c.push({
                            key: {
                                status: "valid",
                                value: e
                            },
                            value: t._parse(new ParseInputLazyPath(a, s, a.path, e)),
                            alwaysSet: e in a.data
                        });
                    }
                    if (this._def.catchall instanceof ZodNever) {
                        const e = this._def.unknownKeys;
                        if (e === "passthrough") {
                            for (const e of u){
                                c.push({
                                    key: {
                                        status: "valid",
                                        value: e
                                    },
                                    value: {
                                        status: "valid",
                                        value: a.data[e]
                                    }
                                });
                            }
                        } else if (e === "strict") {
                            if (u.length > 0) {
                                (0, i.addIssueToContext)(a, {
                                    code: r.ZodIssueCode.unrecognized_keys,
                                    keys: u
                                });
                                s.dirty();
                            }
                        } else if (e === "strip") {} else {
                            throw new Error(`Internal ZodObject error: invalid unknownKeys value.`);
                        }
                    } else {
                        const e = this._def.catchall;
                        for (const t of u){
                            const s = a.data[t];
                            c.push({
                                key: {
                                    status: "valid",
                                    value: t
                                },
                                value: e._parse(new ParseInputLazyPath(a, s, a.path, t)),
                                alwaysSet: t in a.data
                            });
                        }
                    }
                    if (a.common.async) {
                        return Promise.resolve().then(async ()=>{
                            const e = [];
                            for (const t of c){
                                const s = await t.key;
                                const r = await t.value;
                                e.push({
                                    key: s,
                                    value: r,
                                    alwaysSet: t.alwaysSet
                                });
                            }
                            return e;
                        }).then((e)=>i.ParseStatus.mergeObjectSync(s, e));
                    } else {
                        return i.ParseStatus.mergeObjectSync(s, c);
                    }
                }
                get shape() {
                    return this._def.shape();
                }
                strict(e) {
                    n.errorUtil.errToObj;
                    return new ZodObject({
                        ...this._def,
                        unknownKeys: "strict",
                        ...e !== undefined ? {
                            errorMap: (t, s)=>{
                                const r = this._def.errorMap?.(t, s).message ?? s.defaultError;
                                if (t.code === "unrecognized_keys") return {
                                    message: n.errorUtil.errToObj(e).message ?? r
                                };
                                return {
                                    message: r
                                };
                            }
                        } : {}
                    });
                }
                strip() {
                    return new ZodObject({
                        ...this._def,
                        unknownKeys: "strip"
                    });
                }
                passthrough() {
                    return new ZodObject({
                        ...this._def,
                        unknownKeys: "passthrough"
                    });
                }
                extend(e) {
                    return new ZodObject({
                        ...this._def,
                        shape: ()=>({
                                ...this._def.shape(),
                                ...e
                            })
                    });
                }
                merge(e) {
                    const t = new ZodObject({
                        unknownKeys: e._def.unknownKeys,
                        catchall: e._def.catchall,
                        shape: ()=>({
                                ...this._def.shape(),
                                ...e._def.shape()
                            }),
                        typeName: k.ZodObject
                    });
                    return t;
                }
                setKey(e, t) {
                    return this.augment({
                        [e]: t
                    });
                }
                catchall(e) {
                    return new ZodObject({
                        ...this._def,
                        catchall: e
                    });
                }
                pick(e) {
                    const t = {};
                    for (const s of o.util.objectKeys(e)){
                        if (e[s] && this.shape[s]) {
                            t[s] = this.shape[s];
                        }
                    }
                    return new ZodObject({
                        ...this._def,
                        shape: ()=>t
                    });
                }
                omit(e) {
                    const t = {};
                    for (const s of o.util.objectKeys(this.shape)){
                        if (!e[s]) {
                            t[s] = this.shape[s];
                        }
                    }
                    return new ZodObject({
                        ...this._def,
                        shape: ()=>t
                    });
                }
                deepPartial() {
                    return deepPartialify(this);
                }
                partial(e) {
                    const t = {};
                    for (const s of o.util.objectKeys(this.shape)){
                        const r = this.shape[s];
                        if (e && !e[s]) {
                            t[s] = r;
                        } else {
                            t[s] = r.optional();
                        }
                    }
                    return new ZodObject({
                        ...this._def,
                        shape: ()=>t
                    });
                }
                required(e) {
                    const t = {};
                    for (const s of o.util.objectKeys(this.shape)){
                        if (e && !e[s]) {
                            t[s] = this.shape[s];
                        } else {
                            const e = this.shape[s];
                            let r = e;
                            while(r instanceof ZodOptional){
                                r = r._def.innerType;
                            }
                            t[s] = r;
                        }
                    }
                    return new ZodObject({
                        ...this._def,
                        shape: ()=>t
                    });
                }
                keyof() {
                    return createZodEnum(o.util.objectKeys(this.shape));
                }
            }
            t.ZodObject = ZodObject;
            ZodObject.create = (e, t)=>new ZodObject({
                    shape: ()=>e,
                    unknownKeys: "strip",
                    catchall: ZodNever.create(),
                    typeName: k.ZodObject,
                    ...processCreateParams(t)
                });
            ZodObject.strictCreate = (e, t)=>new ZodObject({
                    shape: ()=>e,
                    unknownKeys: "strict",
                    catchall: ZodNever.create(),
                    typeName: k.ZodObject,
                    ...processCreateParams(t)
                });
            ZodObject.lazycreate = (e, t)=>new ZodObject({
                    shape: e,
                    unknownKeys: "strip",
                    catchall: ZodNever.create(),
                    typeName: k.ZodObject,
                    ...processCreateParams(t)
                });
            class ZodUnion extends ZodType {
                _parse(e) {
                    const { ctx: t } = this._processInputParams(e);
                    const s = this._def.options;
                    function handleResults(e) {
                        for (const t of e){
                            if (t.result.status === "valid") {
                                return t.result;
                            }
                        }
                        for (const s of e){
                            if (s.result.status === "dirty") {
                                t.common.issues.push(...s.ctx.common.issues);
                                return s.result;
                            }
                        }
                        const s = e.map((e)=>new r.ZodError(e.ctx.common.issues));
                        (0, i.addIssueToContext)(t, {
                            code: r.ZodIssueCode.invalid_union,
                            unionErrors: s
                        });
                        return i.INVALID;
                    }
                    if (t.common.async) {
                        return Promise.all(s.map(async (e)=>{
                            const s = {
                                ...t,
                                common: {
                                    ...t.common,
                                    issues: []
                                },
                                parent: null
                            };
                            return {
                                result: await e._parseAsync({
                                    data: t.data,
                                    path: t.path,
                                    parent: s
                                }),
                                ctx: s
                            };
                        })).then(handleResults);
                    } else {
                        let e = undefined;
                        const a = [];
                        for (const r of s){
                            const s = {
                                ...t,
                                common: {
                                    ...t.common,
                                    issues: []
                                },
                                parent: null
                            };
                            const n = r._parseSync({
                                data: t.data,
                                path: t.path,
                                parent: s
                            });
                            if (n.status === "valid") {
                                return n;
                            } else if (n.status === "dirty" && !e) {
                                e = {
                                    result: n,
                                    ctx: s
                                };
                            }
                            if (s.common.issues.length) {
                                a.push(s.common.issues);
                            }
                        }
                        if (e) {
                            t.common.issues.push(...e.ctx.common.issues);
                            return e.result;
                        }
                        const n = a.map((e)=>new r.ZodError(e));
                        (0, i.addIssueToContext)(t, {
                            code: r.ZodIssueCode.invalid_union,
                            unionErrors: n
                        });
                        return i.INVALID;
                    }
                }
                get options() {
                    return this._def.options;
                }
            }
            t.ZodUnion = ZodUnion;
            ZodUnion.create = (e, t)=>new ZodUnion({
                    options: e,
                    typeName: k.ZodUnion,
                    ...processCreateParams(t)
                });
            const getDiscriminator = (e)=>{
                if (e instanceof ZodLazy) {
                    return getDiscriminator(e.schema);
                } else if (e instanceof ZodEffects) {
                    return getDiscriminator(e.innerType());
                } else if (e instanceof ZodLiteral) {
                    return [
                        e.value
                    ];
                } else if (e instanceof ZodEnum) {
                    return e.options;
                } else if (e instanceof ZodNativeEnum) {
                    return o.util.objectValues(e.enum);
                } else if (e instanceof ZodDefault) {
                    return getDiscriminator(e._def.innerType);
                } else if (e instanceof ZodUndefined) {
                    return [
                        undefined
                    ];
                } else if (e instanceof ZodNull) {
                    return [
                        null
                    ];
                } else if (e instanceof ZodOptional) {
                    return [
                        undefined,
                        ...getDiscriminator(e.unwrap())
                    ];
                } else if (e instanceof ZodNullable) {
                    return [
                        null,
                        ...getDiscriminator(e.unwrap())
                    ];
                } else if (e instanceof ZodBranded) {
                    return getDiscriminator(e.unwrap());
                } else if (e instanceof ZodReadonly) {
                    return getDiscriminator(e.unwrap());
                } else if (e instanceof ZodCatch) {
                    return getDiscriminator(e._def.innerType);
                } else {
                    return [];
                }
            };
            class ZodDiscriminatedUnion extends ZodType {
                _parse(e) {
                    const { ctx: t } = this._processInputParams(e);
                    if (t.parsedType !== o.ZodParsedType.object) {
                        (0, i.addIssueToContext)(t, {
                            code: r.ZodIssueCode.invalid_type,
                            expected: o.ZodParsedType.object,
                            received: t.parsedType
                        });
                        return i.INVALID;
                    }
                    const s = this.discriminator;
                    const a = t.data[s];
                    const n = this.optionsMap.get(a);
                    if (!n) {
                        (0, i.addIssueToContext)(t, {
                            code: r.ZodIssueCode.invalid_union_discriminator,
                            options: Array.from(this.optionsMap.keys()),
                            path: [
                                s
                            ]
                        });
                        return i.INVALID;
                    }
                    if (t.common.async) {
                        return n._parseAsync({
                            data: t.data,
                            path: t.path,
                            parent: t
                        });
                    } else {
                        return n._parseSync({
                            data: t.data,
                            path: t.path,
                            parent: t
                        });
                    }
                }
                get discriminator() {
                    return this._def.discriminator;
                }
                get options() {
                    return this._def.options;
                }
                get optionsMap() {
                    return this._def.optionsMap;
                }
                static create(e, t, s) {
                    const r = new Map;
                    for (const s of t){
                        const t = getDiscriminator(s.shape[e]);
                        if (!t.length) {
                            throw new Error(`A discriminator value for key \`${e}\` could not be extracted from all schema options`);
                        }
                        for (const a of t){
                            if (r.has(a)) {
                                throw new Error(`Discriminator property ${String(e)} has duplicate value ${String(a)}`);
                            }
                            r.set(a, s);
                        }
                    }
                    return new ZodDiscriminatedUnion({
                        typeName: k.ZodDiscriminatedUnion,
                        discriminator: e,
                        options: t,
                        optionsMap: r,
                        ...processCreateParams(s)
                    });
                }
            }
            t.ZodDiscriminatedUnion = ZodDiscriminatedUnion;
            function mergeValues(e, t) {
                const s = (0, o.getParsedType)(e);
                const r = (0, o.getParsedType)(t);
                if (e === t) {
                    return {
                        valid: true,
                        data: e
                    };
                } else if (s === o.ZodParsedType.object && r === o.ZodParsedType.object) {
                    const s = o.util.objectKeys(t);
                    const r = o.util.objectKeys(e).filter((e)=>s.indexOf(e) !== -1);
                    const a = {
                        ...e,
                        ...t
                    };
                    for (const s of r){
                        const r = mergeValues(e[s], t[s]);
                        if (!r.valid) {
                            return {
                                valid: false
                            };
                        }
                        a[s] = r.data;
                    }
                    return {
                        valid: true,
                        data: a
                    };
                } else if (s === o.ZodParsedType.array && r === o.ZodParsedType.array) {
                    if (e.length !== t.length) {
                        return {
                            valid: false
                        };
                    }
                    const s = [];
                    for(let r = 0; r < e.length; r++){
                        const a = e[r];
                        const n = t[r];
                        const i = mergeValues(a, n);
                        if (!i.valid) {
                            return {
                                valid: false
                            };
                        }
                        s.push(i.data);
                    }
                    return {
                        valid: true,
                        data: s
                    };
                } else if (s === o.ZodParsedType.date && r === o.ZodParsedType.date && +e === +t) {
                    return {
                        valid: true,
                        data: e
                    };
                } else {
                    return {
                        valid: false
                    };
                }
            }
            class ZodIntersection extends ZodType {
                _parse(e) {
                    const { status: t, ctx: s } = this._processInputParams(e);
                    const handleParsed = (e, a)=>{
                        if ((0, i.isAborted)(e) || (0, i.isAborted)(a)) {
                            return i.INVALID;
                        }
                        const n = mergeValues(e.value, a.value);
                        if (!n.valid) {
                            (0, i.addIssueToContext)(s, {
                                code: r.ZodIssueCode.invalid_intersection_types
                            });
                            return i.INVALID;
                        }
                        if ((0, i.isDirty)(e) || (0, i.isDirty)(a)) {
                            t.dirty();
                        }
                        return {
                            status: t.value,
                            value: n.data
                        };
                    };
                    if (s.common.async) {
                        return Promise.all([
                            this._def.left._parseAsync({
                                data: s.data,
                                path: s.path,
                                parent: s
                            }),
                            this._def.right._parseAsync({
                                data: s.data,
                                path: s.path,
                                parent: s
                            })
                        ]).then(([e, t])=>handleParsed(e, t));
                    } else {
                        return handleParsed(this._def.left._parseSync({
                            data: s.data,
                            path: s.path,
                            parent: s
                        }), this._def.right._parseSync({
                            data: s.data,
                            path: s.path,
                            parent: s
                        }));
                    }
                }
            }
            t.ZodIntersection = ZodIntersection;
            ZodIntersection.create = (e, t, s)=>new ZodIntersection({
                    left: e,
                    right: t,
                    typeName: k.ZodIntersection,
                    ...processCreateParams(s)
                });
            class ZodTuple extends ZodType {
                _parse(e) {
                    const { status: t, ctx: s } = this._processInputParams(e);
                    if (s.parsedType !== o.ZodParsedType.array) {
                        (0, i.addIssueToContext)(s, {
                            code: r.ZodIssueCode.invalid_type,
                            expected: o.ZodParsedType.array,
                            received: s.parsedType
                        });
                        return i.INVALID;
                    }
                    if (s.data.length < this._def.items.length) {
                        (0, i.addIssueToContext)(s, {
                            code: r.ZodIssueCode.too_small,
                            minimum: this._def.items.length,
                            inclusive: true,
                            exact: false,
                            type: "array"
                        });
                        return i.INVALID;
                    }
                    const a = this._def.rest;
                    if (!a && s.data.length > this._def.items.length) {
                        (0, i.addIssueToContext)(s, {
                            code: r.ZodIssueCode.too_big,
                            maximum: this._def.items.length,
                            inclusive: true,
                            exact: false,
                            type: "array"
                        });
                        t.dirty();
                    }
                    const n = [
                        ...s.data
                    ].map((e, t)=>{
                        const r = this._def.items[t] || this._def.rest;
                        if (!r) return null;
                        return r._parse(new ParseInputLazyPath(s, e, s.path, t));
                    }).filter((e)=>!!e);
                    if (s.common.async) {
                        return Promise.all(n).then((e)=>i.ParseStatus.mergeArray(t, e));
                    } else {
                        return i.ParseStatus.mergeArray(t, n);
                    }
                }
                get items() {
                    return this._def.items;
                }
                rest(e) {
                    return new ZodTuple({
                        ...this._def,
                        rest: e
                    });
                }
            }
            t.ZodTuple = ZodTuple;
            ZodTuple.create = (e, t)=>{
                if (!Array.isArray(e)) {
                    throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
                }
                return new ZodTuple({
                    items: e,
                    typeName: k.ZodTuple,
                    rest: null,
                    ...processCreateParams(t)
                });
            };
            class ZodRecord extends ZodType {
                get keySchema() {
                    return this._def.keyType;
                }
                get valueSchema() {
                    return this._def.valueType;
                }
                _parse(e) {
                    const { status: t, ctx: s } = this._processInputParams(e);
                    if (s.parsedType !== o.ZodParsedType.object) {
                        (0, i.addIssueToContext)(s, {
                            code: r.ZodIssueCode.invalid_type,
                            expected: o.ZodParsedType.object,
                            received: s.parsedType
                        });
                        return i.INVALID;
                    }
                    const a = [];
                    const n = this._def.keyType;
                    const d = this._def.valueType;
                    for(const e in s.data){
                        a.push({
                            key: n._parse(new ParseInputLazyPath(s, e, s.path, e)),
                            value: d._parse(new ParseInputLazyPath(s, s.data[e], s.path, e)),
                            alwaysSet: e in s.data
                        });
                    }
                    if (s.common.async) {
                        return i.ParseStatus.mergeObjectAsync(t, a);
                    } else {
                        return i.ParseStatus.mergeObjectSync(t, a);
                    }
                }
                get element() {
                    return this._def.valueType;
                }
                static create(e, t, s) {
                    if (t instanceof ZodType) {
                        return new ZodRecord({
                            keyType: e,
                            valueType: t,
                            typeName: k.ZodRecord,
                            ...processCreateParams(s)
                        });
                    }
                    return new ZodRecord({
                        keyType: ZodString.create(),
                        valueType: e,
                        typeName: k.ZodRecord,
                        ...processCreateParams(t)
                    });
                }
            }
            t.ZodRecord = ZodRecord;
            class ZodMap extends ZodType {
                get keySchema() {
                    return this._def.keyType;
                }
                get valueSchema() {
                    return this._def.valueType;
                }
                _parse(e) {
                    const { status: t, ctx: s } = this._processInputParams(e);
                    if (s.parsedType !== o.ZodParsedType.map) {
                        (0, i.addIssueToContext)(s, {
                            code: r.ZodIssueCode.invalid_type,
                            expected: o.ZodParsedType.map,
                            received: s.parsedType
                        });
                        return i.INVALID;
                    }
                    const a = this._def.keyType;
                    const n = this._def.valueType;
                    const d = [
                        ...s.data.entries()
                    ].map(([e, t], r)=>({
                            key: a._parse(new ParseInputLazyPath(s, e, s.path, [
                                r,
                                "key"
                            ])),
                            value: n._parse(new ParseInputLazyPath(s, t, s.path, [
                                r,
                                "value"
                            ]))
                        }));
                    if (s.common.async) {
                        const e = new Map;
                        return Promise.resolve().then(async ()=>{
                            for (const s of d){
                                const r = await s.key;
                                const a = await s.value;
                                if (r.status === "aborted" || a.status === "aborted") {
                                    return i.INVALID;
                                }
                                if (r.status === "dirty" || a.status === "dirty") {
                                    t.dirty();
                                }
                                e.set(r.value, a.value);
                            }
                            return {
                                status: t.value,
                                value: e
                            };
                        });
                    } else {
                        const e = new Map;
                        for (const s of d){
                            const r = s.key;
                            const a = s.value;
                            if (r.status === "aborted" || a.status === "aborted") {
                                return i.INVALID;
                            }
                            if (r.status === "dirty" || a.status === "dirty") {
                                t.dirty();
                            }
                            e.set(r.value, a.value);
                        }
                        return {
                            status: t.value,
                            value: e
                        };
                    }
                }
            }
            t.ZodMap = ZodMap;
            ZodMap.create = (e, t, s)=>new ZodMap({
                    valueType: t,
                    keyType: e,
                    typeName: k.ZodMap,
                    ...processCreateParams(s)
                });
            class ZodSet extends ZodType {
                _parse(e) {
                    const { status: t, ctx: s } = this._processInputParams(e);
                    if (s.parsedType !== o.ZodParsedType.set) {
                        (0, i.addIssueToContext)(s, {
                            code: r.ZodIssueCode.invalid_type,
                            expected: o.ZodParsedType.set,
                            received: s.parsedType
                        });
                        return i.INVALID;
                    }
                    const a = this._def;
                    if (a.minSize !== null) {
                        if (s.data.size < a.minSize.value) {
                            (0, i.addIssueToContext)(s, {
                                code: r.ZodIssueCode.too_small,
                                minimum: a.minSize.value,
                                type: "set",
                                inclusive: true,
                                exact: false,
                                message: a.minSize.message
                            });
                            t.dirty();
                        }
                    }
                    if (a.maxSize !== null) {
                        if (s.data.size > a.maxSize.value) {
                            (0, i.addIssueToContext)(s, {
                                code: r.ZodIssueCode.too_big,
                                maximum: a.maxSize.value,
                                type: "set",
                                inclusive: true,
                                exact: false,
                                message: a.maxSize.message
                            });
                            t.dirty();
                        }
                    }
                    const n = this._def.valueType;
                    function finalizeSet(e) {
                        const s = new Set;
                        for (const r of e){
                            if (r.status === "aborted") return i.INVALID;
                            if (r.status === "dirty") t.dirty();
                            s.add(r.value);
                        }
                        return {
                            status: t.value,
                            value: s
                        };
                    }
                    const d = [
                        ...s.data.values()
                    ].map((e, t)=>n._parse(new ParseInputLazyPath(s, e, s.path, t)));
                    if (s.common.async) {
                        return Promise.all(d).then((e)=>finalizeSet(e));
                    } else {
                        return finalizeSet(d);
                    }
                }
                min(e, t) {
                    return new ZodSet({
                        ...this._def,
                        minSize: {
                            value: e,
                            message: n.errorUtil.toString(t)
                        }
                    });
                }
                max(e, t) {
                    return new ZodSet({
                        ...this._def,
                        maxSize: {
                            value: e,
                            message: n.errorUtil.toString(t)
                        }
                    });
                }
                size(e, t) {
                    return this.min(e, t).max(e, t);
                }
                nonempty(e) {
                    return this.min(1, e);
                }
            }
            t.ZodSet = ZodSet;
            ZodSet.create = (e, t)=>new ZodSet({
                    valueType: e,
                    minSize: null,
                    maxSize: null,
                    typeName: k.ZodSet,
                    ...processCreateParams(t)
                });
            class ZodFunction extends ZodType {
                constructor(){
                    super(...arguments);
                    this.validate = this.implement;
                }
                _parse(e) {
                    const { ctx: t } = this._processInputParams(e);
                    if (t.parsedType !== o.ZodParsedType.function) {
                        (0, i.addIssueToContext)(t, {
                            code: r.ZodIssueCode.invalid_type,
                            expected: o.ZodParsedType.function,
                            received: t.parsedType
                        });
                        return i.INVALID;
                    }
                    function makeArgsIssue(e, s) {
                        return (0, i.makeIssue)({
                            data: e,
                            path: t.path,
                            errorMaps: [
                                t.common.contextualErrorMap,
                                t.schemaErrorMap,
                                (0, a.getErrorMap)(),
                                a.defaultErrorMap
                            ].filter((e)=>!!e),
                            issueData: {
                                code: r.ZodIssueCode.invalid_arguments,
                                argumentsError: s
                            }
                        });
                    }
                    function makeReturnsIssue(e, s) {
                        return (0, i.makeIssue)({
                            data: e,
                            path: t.path,
                            errorMaps: [
                                t.common.contextualErrorMap,
                                t.schemaErrorMap,
                                (0, a.getErrorMap)(),
                                a.defaultErrorMap
                            ].filter((e)=>!!e),
                            issueData: {
                                code: r.ZodIssueCode.invalid_return_type,
                                returnTypeError: s
                            }
                        });
                    }
                    const s = {
                        errorMap: t.common.contextualErrorMap
                    };
                    const n = t.data;
                    if (this._def.returns instanceof ZodPromise) {
                        const e = this;
                        return (0, i.OK)(async function(...t) {
                            const a = new r.ZodError([]);
                            const i = await e._def.args.parseAsync(t, s).catch((e)=>{
                                a.addIssue(makeArgsIssue(t, e));
                                throw a;
                            });
                            const o = await Reflect.apply(n, this, i);
                            const d = await e._def.returns._def.type.parseAsync(o, s).catch((e)=>{
                                a.addIssue(makeReturnsIssue(o, e));
                                throw a;
                            });
                            return d;
                        });
                    } else {
                        const e = this;
                        return (0, i.OK)(function(...t) {
                            const a = e._def.args.safeParse(t, s);
                            if (!a.success) {
                                throw new r.ZodError([
                                    makeArgsIssue(t, a.error)
                                ]);
                            }
                            const i = Reflect.apply(n, this, a.data);
                            const o = e._def.returns.safeParse(i, s);
                            if (!o.success) {
                                throw new r.ZodError([
                                    makeReturnsIssue(i, o.error)
                                ]);
                            }
                            return o.data;
                        });
                    }
                }
                parameters() {
                    return this._def.args;
                }
                returnType() {
                    return this._def.returns;
                }
                args(...e) {
                    return new ZodFunction({
                        ...this._def,
                        args: ZodTuple.create(e).rest(ZodUnknown.create())
                    });
                }
                returns(e) {
                    return new ZodFunction({
                        ...this._def,
                        returns: e
                    });
                }
                implement(e) {
                    const t = this.parse(e);
                    return t;
                }
                strictImplement(e) {
                    const t = this.parse(e);
                    return t;
                }
                static create(e, t, s) {
                    return new ZodFunction({
                        args: e ? e : ZodTuple.create([]).rest(ZodUnknown.create()),
                        returns: t || ZodUnknown.create(),
                        typeName: k.ZodFunction,
                        ...processCreateParams(s)
                    });
                }
            }
            t.ZodFunction = ZodFunction;
            class ZodLazy extends ZodType {
                get schema() {
                    return this._def.getter();
                }
                _parse(e) {
                    const { ctx: t } = this._processInputParams(e);
                    const s = this._def.getter();
                    return s._parse({
                        data: t.data,
                        path: t.path,
                        parent: t
                    });
                }
            }
            t.ZodLazy = ZodLazy;
            ZodLazy.create = (e, t)=>new ZodLazy({
                    getter: e,
                    typeName: k.ZodLazy,
                    ...processCreateParams(t)
                });
            class ZodLiteral extends ZodType {
                _parse(e) {
                    if (e.data !== this._def.value) {
                        const t = this._getOrReturnCtx(e);
                        (0, i.addIssueToContext)(t, {
                            received: t.data,
                            code: r.ZodIssueCode.invalid_literal,
                            expected: this._def.value
                        });
                        return i.INVALID;
                    }
                    return {
                        status: "valid",
                        value: e.data
                    };
                }
                get value() {
                    return this._def.value;
                }
            }
            t.ZodLiteral = ZodLiteral;
            ZodLiteral.create = (e, t)=>new ZodLiteral({
                    value: e,
                    typeName: k.ZodLiteral,
                    ...processCreateParams(t)
                });
            function createZodEnum(e, t) {
                return new ZodEnum({
                    values: e,
                    typeName: k.ZodEnum,
                    ...processCreateParams(t)
                });
            }
            class ZodEnum extends ZodType {
                _parse(e) {
                    if (typeof e.data !== "string") {
                        const t = this._getOrReturnCtx(e);
                        const s = this._def.values;
                        (0, i.addIssueToContext)(t, {
                            expected: o.util.joinValues(s),
                            received: t.parsedType,
                            code: r.ZodIssueCode.invalid_type
                        });
                        return i.INVALID;
                    }
                    if (!this._cache) {
                        this._cache = new Set(this._def.values);
                    }
                    if (!this._cache.has(e.data)) {
                        const t = this._getOrReturnCtx(e);
                        const s = this._def.values;
                        (0, i.addIssueToContext)(t, {
                            received: t.data,
                            code: r.ZodIssueCode.invalid_enum_value,
                            options: s
                        });
                        return i.INVALID;
                    }
                    return (0, i.OK)(e.data);
                }
                get options() {
                    return this._def.values;
                }
                get enum() {
                    const e = {};
                    for (const t of this._def.values){
                        e[t] = t;
                    }
                    return e;
                }
                get Values() {
                    const e = {};
                    for (const t of this._def.values){
                        e[t] = t;
                    }
                    return e;
                }
                get Enum() {
                    const e = {};
                    for (const t of this._def.values){
                        e[t] = t;
                    }
                    return e;
                }
                extract(e, t = this._def) {
                    return ZodEnum.create(e, {
                        ...this._def,
                        ...t
                    });
                }
                exclude(e, t = this._def) {
                    return ZodEnum.create(this.options.filter((t)=>!e.includes(t)), {
                        ...this._def,
                        ...t
                    });
                }
            }
            t.ZodEnum = ZodEnum;
            ZodEnum.create = createZodEnum;
            class ZodNativeEnum extends ZodType {
                _parse(e) {
                    const t = o.util.getValidEnumValues(this._def.values);
                    const s = this._getOrReturnCtx(e);
                    if (s.parsedType !== o.ZodParsedType.string && s.parsedType !== o.ZodParsedType.number) {
                        const e = o.util.objectValues(t);
                        (0, i.addIssueToContext)(s, {
                            expected: o.util.joinValues(e),
                            received: s.parsedType,
                            code: r.ZodIssueCode.invalid_type
                        });
                        return i.INVALID;
                    }
                    if (!this._cache) {
                        this._cache = new Set(o.util.getValidEnumValues(this._def.values));
                    }
                    if (!this._cache.has(e.data)) {
                        const e = o.util.objectValues(t);
                        (0, i.addIssueToContext)(s, {
                            received: s.data,
                            code: r.ZodIssueCode.invalid_enum_value,
                            options: e
                        });
                        return i.INVALID;
                    }
                    return (0, i.OK)(e.data);
                }
                get enum() {
                    return this._def.values;
                }
            }
            t.ZodNativeEnum = ZodNativeEnum;
            ZodNativeEnum.create = (e, t)=>new ZodNativeEnum({
                    values: e,
                    typeName: k.ZodNativeEnum,
                    ...processCreateParams(t)
                });
            class ZodPromise extends ZodType {
                unwrap() {
                    return this._def.type;
                }
                _parse(e) {
                    const { ctx: t } = this._processInputParams(e);
                    if (t.parsedType !== o.ZodParsedType.promise && t.common.async === false) {
                        (0, i.addIssueToContext)(t, {
                            code: r.ZodIssueCode.invalid_type,
                            expected: o.ZodParsedType.promise,
                            received: t.parsedType
                        });
                        return i.INVALID;
                    }
                    const s = t.parsedType === o.ZodParsedType.promise ? t.data : Promise.resolve(t.data);
                    return (0, i.OK)(s.then((e)=>this._def.type.parseAsync(e, {
                            path: t.path,
                            errorMap: t.common.contextualErrorMap
                        })));
                }
            }
            t.ZodPromise = ZodPromise;
            ZodPromise.create = (e, t)=>new ZodPromise({
                    type: e,
                    typeName: k.ZodPromise,
                    ...processCreateParams(t)
                });
            class ZodEffects extends ZodType {
                innerType() {
                    return this._def.schema;
                }
                sourceType() {
                    return this._def.schema._def.typeName === k.ZodEffects ? this._def.schema.sourceType() : this._def.schema;
                }
                _parse(e) {
                    const { status: t, ctx: s } = this._processInputParams(e);
                    const r = this._def.effect || null;
                    const a = {
                        addIssue: (e)=>{
                            (0, i.addIssueToContext)(s, e);
                            if (e.fatal) {
                                t.abort();
                            } else {
                                t.dirty();
                            }
                        },
                        get path () {
                            return s.path;
                        }
                    };
                    a.addIssue = a.addIssue.bind(a);
                    if (r.type === "preprocess") {
                        const e = r.transform(s.data, a);
                        if (s.common.async) {
                            return Promise.resolve(e).then(async (e)=>{
                                if (t.value === "aborted") return i.INVALID;
                                const r = await this._def.schema._parseAsync({
                                    data: e,
                                    path: s.path,
                                    parent: s
                                });
                                if (r.status === "aborted") return i.INVALID;
                                if (r.status === "dirty") return (0, i.DIRTY)(r.value);
                                if (t.value === "dirty") return (0, i.DIRTY)(r.value);
                                return r;
                            });
                        } else {
                            if (t.value === "aborted") return i.INVALID;
                            const r = this._def.schema._parseSync({
                                data: e,
                                path: s.path,
                                parent: s
                            });
                            if (r.status === "aborted") return i.INVALID;
                            if (r.status === "dirty") return (0, i.DIRTY)(r.value);
                            if (t.value === "dirty") return (0, i.DIRTY)(r.value);
                            return r;
                        }
                    }
                    if (r.type === "refinement") {
                        const executeRefinement = (e)=>{
                            const t = r.refinement(e, a);
                            if (s.common.async) {
                                return Promise.resolve(t);
                            }
                            if (t instanceof Promise) {
                                throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");
                            }
                            return e;
                        };
                        if (s.common.async === false) {
                            const e = this._def.schema._parseSync({
                                data: s.data,
                                path: s.path,
                                parent: s
                            });
                            if (e.status === "aborted") return i.INVALID;
                            if (e.status === "dirty") t.dirty();
                            executeRefinement(e.value);
                            return {
                                status: t.value,
                                value: e.value
                            };
                        } else {
                            return this._def.schema._parseAsync({
                                data: s.data,
                                path: s.path,
                                parent: s
                            }).then((e)=>{
                                if (e.status === "aborted") return i.INVALID;
                                if (e.status === "dirty") t.dirty();
                                return executeRefinement(e.value).then(()=>({
                                        status: t.value,
                                        value: e.value
                                    }));
                            });
                        }
                    }
                    if (r.type === "transform") {
                        if (s.common.async === false) {
                            const e = this._def.schema._parseSync({
                                data: s.data,
                                path: s.path,
                                parent: s
                            });
                            if (!(0, i.isValid)(e)) return i.INVALID;
                            const n = r.transform(e.value, a);
                            if (n instanceof Promise) {
                                throw new Error(`Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.`);
                            }
                            return {
                                status: t.value,
                                value: n
                            };
                        } else {
                            return this._def.schema._parseAsync({
                                data: s.data,
                                path: s.path,
                                parent: s
                            }).then((e)=>{
                                if (!(0, i.isValid)(e)) return i.INVALID;
                                return Promise.resolve(r.transform(e.value, a)).then((e)=>({
                                        status: t.value,
                                        value: e
                                    }));
                            });
                        }
                    }
                    o.util.assertNever(r);
                }
            }
            t.ZodEffects = ZodEffects;
            t.ZodTransformer = ZodEffects;
            ZodEffects.create = (e, t, s)=>new ZodEffects({
                    schema: e,
                    typeName: k.ZodEffects,
                    effect: t,
                    ...processCreateParams(s)
                });
            ZodEffects.createWithPreprocess = (e, t, s)=>new ZodEffects({
                    schema: t,
                    effect: {
                        type: "preprocess",
                        transform: e
                    },
                    typeName: k.ZodEffects,
                    ...processCreateParams(s)
                });
            class ZodOptional extends ZodType {
                _parse(e) {
                    const t = this._getType(e);
                    if (t === o.ZodParsedType.undefined) {
                        return (0, i.OK)(undefined);
                    }
                    return this._def.innerType._parse(e);
                }
                unwrap() {
                    return this._def.innerType;
                }
            }
            t.ZodOptional = ZodOptional;
            ZodOptional.create = (e, t)=>new ZodOptional({
                    innerType: e,
                    typeName: k.ZodOptional,
                    ...processCreateParams(t)
                });
            class ZodNullable extends ZodType {
                _parse(e) {
                    const t = this._getType(e);
                    if (t === o.ZodParsedType.null) {
                        return (0, i.OK)(null);
                    }
                    return this._def.innerType._parse(e);
                }
                unwrap() {
                    return this._def.innerType;
                }
            }
            t.ZodNullable = ZodNullable;
            ZodNullable.create = (e, t)=>new ZodNullable({
                    innerType: e,
                    typeName: k.ZodNullable,
                    ...processCreateParams(t)
                });
            class ZodDefault extends ZodType {
                _parse(e) {
                    const { ctx: t } = this._processInputParams(e);
                    let s = t.data;
                    if (t.parsedType === o.ZodParsedType.undefined) {
                        s = this._def.defaultValue();
                    }
                    return this._def.innerType._parse({
                        data: s,
                        path: t.path,
                        parent: t
                    });
                }
                removeDefault() {
                    return this._def.innerType;
                }
            }
            t.ZodDefault = ZodDefault;
            ZodDefault.create = (e, t)=>new ZodDefault({
                    innerType: e,
                    typeName: k.ZodDefault,
                    defaultValue: typeof t.default === "function" ? t.default : ()=>t.default,
                    ...processCreateParams(t)
                });
            class ZodCatch extends ZodType {
                _parse(e) {
                    const { ctx: t } = this._processInputParams(e);
                    const s = {
                        ...t,
                        common: {
                            ...t.common,
                            issues: []
                        }
                    };
                    const a = this._def.innerType._parse({
                        data: s.data,
                        path: s.path,
                        parent: {
                            ...s
                        }
                    });
                    if ((0, i.isAsync)(a)) {
                        return a.then((e)=>({
                                status: "valid",
                                value: e.status === "valid" ? e.value : this._def.catchValue({
                                    get error () {
                                        return new r.ZodError(s.common.issues);
                                    },
                                    input: s.data
                                })
                            }));
                    } else {
                        return {
                            status: "valid",
                            value: a.status === "valid" ? a.value : this._def.catchValue({
                                get error () {
                                    return new r.ZodError(s.common.issues);
                                },
                                input: s.data
                            })
                        };
                    }
                }
                removeCatch() {
                    return this._def.innerType;
                }
            }
            t.ZodCatch = ZodCatch;
            ZodCatch.create = (e, t)=>new ZodCatch({
                    innerType: e,
                    typeName: k.ZodCatch,
                    catchValue: typeof t.catch === "function" ? t.catch : ()=>t.catch,
                    ...processCreateParams(t)
                });
            class ZodNaN extends ZodType {
                _parse(e) {
                    const t = this._getType(e);
                    if (t !== o.ZodParsedType.nan) {
                        const t = this._getOrReturnCtx(e);
                        (0, i.addIssueToContext)(t, {
                            code: r.ZodIssueCode.invalid_type,
                            expected: o.ZodParsedType.nan,
                            received: t.parsedType
                        });
                        return i.INVALID;
                    }
                    return {
                        status: "valid",
                        value: e.data
                    };
                }
            }
            t.ZodNaN = ZodNaN;
            ZodNaN.create = (e)=>new ZodNaN({
                    typeName: k.ZodNaN,
                    ...processCreateParams(e)
                });
            t.BRAND = Symbol("zod_brand");
            class ZodBranded extends ZodType {
                _parse(e) {
                    const { ctx: t } = this._processInputParams(e);
                    const s = t.data;
                    return this._def.type._parse({
                        data: s,
                        path: t.path,
                        parent: t
                    });
                }
                unwrap() {
                    return this._def.type;
                }
            }
            t.ZodBranded = ZodBranded;
            class ZodPipeline extends ZodType {
                _parse(e) {
                    const { status: t, ctx: s } = this._processInputParams(e);
                    if (s.common.async) {
                        const handleAsync = async ()=>{
                            const e = await this._def.in._parseAsync({
                                data: s.data,
                                path: s.path,
                                parent: s
                            });
                            if (e.status === "aborted") return i.INVALID;
                            if (e.status === "dirty") {
                                t.dirty();
                                return (0, i.DIRTY)(e.value);
                            } else {
                                return this._def.out._parseAsync({
                                    data: e.value,
                                    path: s.path,
                                    parent: s
                                });
                            }
                        };
                        return handleAsync();
                    } else {
                        const e = this._def.in._parseSync({
                            data: s.data,
                            path: s.path,
                            parent: s
                        });
                        if (e.status === "aborted") return i.INVALID;
                        if (e.status === "dirty") {
                            t.dirty();
                            return {
                                status: "dirty",
                                value: e.value
                            };
                        } else {
                            return this._def.out._parseSync({
                                data: e.value,
                                path: s.path,
                                parent: s
                            });
                        }
                    }
                }
                static create(e, t) {
                    return new ZodPipeline({
                        in: e,
                        out: t,
                        typeName: k.ZodPipeline
                    });
                }
            }
            t.ZodPipeline = ZodPipeline;
            class ZodReadonly extends ZodType {
                _parse(e) {
                    const t = this._def.innerType._parse(e);
                    const freeze = (e)=>{
                        if ((0, i.isValid)(e)) {
                            e.value = Object.freeze(e.value);
                        }
                        return e;
                    };
                    return (0, i.isAsync)(t) ? t.then((e)=>freeze(e)) : freeze(t);
                }
                unwrap() {
                    return this._def.innerType;
                }
            }
            t.ZodReadonly = ZodReadonly;
            ZodReadonly.create = (e, t)=>new ZodReadonly({
                    innerType: e,
                    typeName: k.ZodReadonly,
                    ...processCreateParams(t)
                });
            function cleanParams(e, t) {
                const s = typeof e === "function" ? e(t) : typeof e === "string" ? {
                    message: e
                } : e;
                const r = typeof s === "string" ? {
                    message: s
                } : s;
                return r;
            }
            function custom(e, t = {}, s) {
                if (e) return ZodAny.create().superRefine((r, a)=>{
                    const n = e(r);
                    if (n instanceof Promise) {
                        return n.then((e)=>{
                            if (!e) {
                                const e = cleanParams(t, r);
                                const n = e.fatal ?? s ?? true;
                                a.addIssue({
                                    code: "custom",
                                    ...e,
                                    fatal: n
                                });
                            }
                        });
                    }
                    if (!n) {
                        const e = cleanParams(t, r);
                        const n = e.fatal ?? s ?? true;
                        a.addIssue({
                            code: "custom",
                            ...e,
                            fatal: n
                        });
                    }
                    return;
                });
                return ZodAny.create();
            }
            t.late = {
                object: ZodObject.lazycreate
            };
            var k;
            (function(e) {
                e["ZodString"] = "ZodString";
                e["ZodNumber"] = "ZodNumber";
                e["ZodNaN"] = "ZodNaN";
                e["ZodBigInt"] = "ZodBigInt";
                e["ZodBoolean"] = "ZodBoolean";
                e["ZodDate"] = "ZodDate";
                e["ZodSymbol"] = "ZodSymbol";
                e["ZodUndefined"] = "ZodUndefined";
                e["ZodNull"] = "ZodNull";
                e["ZodAny"] = "ZodAny";
                e["ZodUnknown"] = "ZodUnknown";
                e["ZodNever"] = "ZodNever";
                e["ZodVoid"] = "ZodVoid";
                e["ZodArray"] = "ZodArray";
                e["ZodObject"] = "ZodObject";
                e["ZodUnion"] = "ZodUnion";
                e["ZodDiscriminatedUnion"] = "ZodDiscriminatedUnion";
                e["ZodIntersection"] = "ZodIntersection";
                e["ZodTuple"] = "ZodTuple";
                e["ZodRecord"] = "ZodRecord";
                e["ZodMap"] = "ZodMap";
                e["ZodSet"] = "ZodSet";
                e["ZodFunction"] = "ZodFunction";
                e["ZodLazy"] = "ZodLazy";
                e["ZodLiteral"] = "ZodLiteral";
                e["ZodEnum"] = "ZodEnum";
                e["ZodEffects"] = "ZodEffects";
                e["ZodNativeEnum"] = "ZodNativeEnum";
                e["ZodOptional"] = "ZodOptional";
                e["ZodNullable"] = "ZodNullable";
                e["ZodDefault"] = "ZodDefault";
                e["ZodCatch"] = "ZodCatch";
                e["ZodPromise"] = "ZodPromise";
                e["ZodBranded"] = "ZodBranded";
                e["ZodPipeline"] = "ZodPipeline";
                e["ZodReadonly"] = "ZodReadonly";
            })(k || (t.ZodFirstPartyTypeKind = k = {}));
            class Class {
                constructor(...e){}
            }
            const instanceOfType = (e, t = {
                message: `Input not instance of ${e.name}`
            })=>custom((t)=>t instanceof e, t);
            t["instanceof"] = instanceOfType;
            const P = ZodString.create;
            t.string = P;
            const w = ZodNumber.create;
            t.number = w;
            const N = ZodNaN.create;
            t.nan = N;
            const O = ZodBigInt.create;
            t.bigint = O;
            const A = ZodBoolean.create;
            t.boolean = A;
            const S = ZodDate.create;
            t.date = S;
            const j = ZodSymbol.create;
            t.symbol = j;
            const E = ZodUndefined.create;
            t.undefined = E;
            const D = ZodNull.create;
            t["null"] = D;
            const L = ZodAny.create;
            t.any = L;
            const U = ZodUnknown.create;
            t.unknown = U;
            const R = ZodNever.create;
            t.never = R;
            const V = ZodVoid.create;
            t["void"] = V;
            const M = ZodArray.create;
            t.array = M;
            const $ = ZodObject.create;
            t.object = $;
            const z = ZodObject.strictCreate;
            t.strictObject = z;
            const F = ZodUnion.create;
            t.union = F;
            const B = ZodDiscriminatedUnion.create;
            t.discriminatedUnion = B;
            const K = ZodIntersection.create;
            t.intersection = K;
            const q = ZodTuple.create;
            t.tuple = q;
            const W = ZodRecord.create;
            t.record = W;
            const Y = ZodMap.create;
            t.map = Y;
            const J = ZodSet.create;
            t.set = J;
            const H = ZodFunction.create;
            t["function"] = H;
            const G = ZodLazy.create;
            t.lazy = G;
            const X = ZodLiteral.create;
            t.literal = X;
            const Q = ZodEnum.create;
            t["enum"] = Q;
            const ee = ZodNativeEnum.create;
            t.nativeEnum = ee;
            const te = ZodPromise.create;
            t.promise = te;
            const se = ZodEffects.create;
            t.effect = se;
            t.transformer = se;
            const re = ZodOptional.create;
            t.optional = re;
            const ae = ZodNullable.create;
            t.nullable = ae;
            const ne = ZodEffects.createWithPreprocess;
            t.preprocess = ne;
            const ie = ZodPipeline.create;
            t.pipeline = ie;
            const ostring = ()=>P().optional();
            t.ostring = ostring;
            const onumber = ()=>w().optional();
            t.onumber = onumber;
            const oboolean = ()=>A().optional();
            t.oboolean = oboolean;
            t.coerce = {
                string: (e)=>ZodString.create({
                        ...e,
                        coerce: true
                    }),
                number: (e)=>ZodNumber.create({
                        ...e,
                        coerce: true
                    }),
                boolean: (e)=>ZodBoolean.create({
                        ...e,
                        coerce: true
                    }),
                bigint: (e)=>ZodBigInt.create({
                        ...e,
                        coerce: true
                    }),
                date: (e)=>ZodDate.create({
                        ...e,
                        coerce: true
                    })
            };
            t.NEVER = i.INVALID;
        }
    };
    var t = {};
    function __nccwpck_require__(s) {
        var r = t[s];
        if (r !== undefined) {
            return r.exports;
        }
        var a = t[s] = {
            exports: {}
        };
        var n = true;
        try {
            e[s].call(a.exports, a, a.exports, __nccwpck_require__);
            n = false;
        } finally{
            if (n) delete t[s];
        }
        return a.exports;
    }
    if (typeof __nccwpck_require__ !== "undefined") __nccwpck_require__.ab = ("TURBOPACK compile-time value", "/ROOT/learn-next/final/node_modules/next/dist/compiled/zod") + "/";
    var s = __nccwpck_require__(629);
    module.exports = s;
})();
}),
"[project]/learn-next/final/node_modules/next/dist/compiled/zod-validation-error/index.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {

(()=>{
    "use strict";
    var r = {
        452: (r, e, o)=>{
            var t = Object.create;
            var s = Object.defineProperty;
            var n = Object.getOwnPropertyDescriptor;
            var i = Object.getOwnPropertyNames;
            var a = Object.getPrototypeOf;
            var u = Object.prototype.hasOwnProperty;
            var __export = (r, e)=>{
                for(var o in e)s(r, o, {
                    get: e[o],
                    enumerable: true
                });
            };
            var __copyProps = (r, e, o, t)=>{
                if (e && typeof e === "object" || typeof e === "function") {
                    for (let a of i(e))if (!u.call(r, a) && a !== o) s(r, a, {
                        get: ()=>e[a],
                        enumerable: !(t = n(e, a)) || t.enumerable
                    });
                }
                return r;
            };
            var __toESM = (r, e, o)=>(o = r != null ? t(a(r)) : {}, __copyProps(e || !r || !r.__esModule ? s(o, "default", {
                    value: r,
                    enumerable: true
                }) : o, r));
            var __toCommonJS = (r)=>__copyProps(s({}, "__esModule", {
                    value: true
                }), r);
            var d = {};
            __export(d, {
                ValidationError: ()=>c,
                createMessageBuilder: ()=>createMessageBuilder,
                errorMap: ()=>errorMap,
                fromError: ()=>fromError,
                fromZodError: ()=>fromZodError,
                fromZodIssue: ()=>fromZodIssue,
                isValidationError: ()=>isValidationError,
                isValidationErrorLike: ()=>isValidationErrorLike,
                isZodErrorLike: ()=>isZodErrorLike,
                toValidationError: ()=>toValidationError
            });
            r.exports = __toCommonJS(d);
            function isZodErrorLike(r) {
                return r instanceof Error && r.name === "ZodError" && "issues" in r && Array.isArray(r.issues);
            }
            var c = class extends Error {
                name;
                details;
                constructor(r, e){
                    super(r, e);
                    this.name = "ZodValidationError";
                    this.details = getIssuesFromErrorOptions(e);
                }
                toString() {
                    return this.message;
                }
            };
            function getIssuesFromErrorOptions(r) {
                if (r) {
                    const e = r.cause;
                    if (isZodErrorLike(e)) {
                        return e.issues;
                    }
                }
                return [];
            }
            function isValidationError(r) {
                return r instanceof c;
            }
            function isValidationErrorLike(r) {
                return r instanceof Error && r.name === "ZodValidationError";
            }
            var f = __toESM(o(788));
            var p = __toESM(o(788));
            function isNonEmptyArray(r) {
                return r.length !== 0;
            }
            var l = /[$_\p{ID_Start}][$\u200c\u200d\p{ID_Continue}]*/u;
            function joinPath(r) {
                if (r.length === 1) {
                    return r[0].toString();
                }
                return r.reduce((r, e)=>{
                    if (typeof e === "number") {
                        return r + "[" + e.toString() + "]";
                    }
                    if (e.includes('"')) {
                        return r + '["' + escapeQuotes(e) + '"]';
                    }
                    if (!l.test(e)) {
                        return r + '["' + e + '"]';
                    }
                    const o = r.length === 0 ? "" : ".";
                    return r + o + e;
                }, "");
            }
            function escapeQuotes(r) {
                return r.replace(/"/g, '\\"');
            }
            var m = "; ";
            var g = 99;
            var E = "Validation error";
            var _ = ": ";
            var v = ", or ";
            function createMessageBuilder(r = {}) {
                const { issueSeparator: e = m, unionSeparator: o = v, prefixSeparator: t = _, prefix: s = E, includePath: n = true, maxIssuesInMessage: i = g } = r;
                return (r)=>{
                    const a = r.slice(0, i).map((r)=>getMessageFromZodIssue({
                            issue: r,
                            issueSeparator: e,
                            unionSeparator: o,
                            includePath: n
                        })).join(e);
                    return prefixMessage(a, s, t);
                };
            }
            function getMessageFromZodIssue(r) {
                const { issue: e, issueSeparator: o, unionSeparator: t, includePath: s } = r;
                if (e.code === p.ZodIssueCode.invalid_union) {
                    return e.unionErrors.reduce((r, e)=>{
                        const n = e.issues.map((r)=>getMessageFromZodIssue({
                                issue: r,
                                issueSeparator: o,
                                unionSeparator: t,
                                includePath: s
                            })).join(o);
                        if (!r.includes(n)) {
                            r.push(n);
                        }
                        return r;
                    }, []).join(t);
                }
                if (e.code === p.ZodIssueCode.invalid_arguments) {
                    return [
                        e.message,
                        ...e.argumentsError.issues.map((r)=>getMessageFromZodIssue({
                                issue: r,
                                issueSeparator: o,
                                unionSeparator: t,
                                includePath: s
                            }))
                    ].join(o);
                }
                if (e.code === p.ZodIssueCode.invalid_return_type) {
                    return [
                        e.message,
                        ...e.returnTypeError.issues.map((r)=>getMessageFromZodIssue({
                                issue: r,
                                issueSeparator: o,
                                unionSeparator: t,
                                includePath: s
                            }))
                    ].join(o);
                }
                if (s && isNonEmptyArray(e.path)) {
                    if (e.path.length === 1) {
                        const r = e.path[0];
                        if (typeof r === "number") {
                            return `${e.message} at index ${r}`;
                        }
                    }
                    return `${e.message} at "${joinPath(e.path)}"`;
                }
                return e.message;
            }
            function prefixMessage(r, e, o) {
                if (e !== null) {
                    if (r.length > 0) {
                        return [
                            e,
                            r
                        ].join(o);
                    }
                    return e;
                }
                if (r.length > 0) {
                    return r;
                }
                return E;
            }
            function fromZodIssue(r, e = {}) {
                const o = createMessageBuilderFromOptions(e);
                const t = o([
                    r
                ]);
                return new c(t, {
                    cause: new f.ZodError([
                        r
                    ])
                });
            }
            function createMessageBuilderFromOptions(r) {
                if ("messageBuilder" in r) {
                    return r.messageBuilder;
                }
                return createMessageBuilder(r);
            }
            var errorMap = (r, e)=>{
                const o = fromZodIssue({
                    ...r,
                    message: r.message ?? e.defaultError
                });
                return {
                    message: o.message
                };
            };
            function fromZodError(r, e = {}) {
                if (!isZodErrorLike(r)) {
                    throw new TypeError(`Invalid zodError param; expected instance of ZodError. Did you mean to use the "${fromError.name}" method instead?`);
                }
                return fromZodErrorWithoutRuntimeCheck(r, e);
            }
            function fromZodErrorWithoutRuntimeCheck(r, e = {}) {
                const o = r.errors;
                let t;
                if (isNonEmptyArray(o)) {
                    const r = createMessageBuilderFromOptions2(e);
                    t = r(o);
                } else {
                    t = r.message;
                }
                return new c(t, {
                    cause: r
                });
            }
            function createMessageBuilderFromOptions2(r) {
                if ("messageBuilder" in r) {
                    return r.messageBuilder;
                }
                return createMessageBuilder(r);
            }
            var toValidationError = (r = {})=>(e)=>{
                    if (isZodErrorLike(e)) {
                        return fromZodErrorWithoutRuntimeCheck(e, r);
                    }
                    if (e instanceof Error) {
                        return new c(e.message, {
                            cause: e
                        });
                    }
                    return new c("Unknown error");
                };
            function fromError(r, e = {}) {
                return toValidationError(e)(r);
            }
            0 && 0;
        },
        788: (r)=>{
            r.exports = __turbopack_context__.r("[project]/learn-next/final/node_modules/next/dist/compiled/zod/index.cjs [app-rsc] (ecmascript)");
        }
    };
    var e = {};
    function __nccwpck_require__(o) {
        var t = e[o];
        if (t !== undefined) {
            return t.exports;
        }
        var s = e[o] = {
            exports: {}
        };
        var n = true;
        try {
            r[o](s, s.exports, __nccwpck_require__);
            n = false;
        } finally{
            if (n) delete e[o];
        }
        return s.exports;
    }
    if (typeof __nccwpck_require__ !== "undefined") __nccwpck_require__.ab = ("TURBOPACK compile-time value", "/ROOT/learn-next/final/node_modules/next/dist/compiled/zod-validation-error") + "/";
    var o = __nccwpck_require__(452);
    module.exports = o;
})();
}),
"[project]/learn-next/final/node_modules/next/dist/esm/shared/lib/zod.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "formatZodError",
    ()=>formatZodError,
    "normalizeZodErrors",
    ()=>normalizeZodErrors,
    "reportZodError",
    ()=>reportZodError
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$zod$2f$index$2e$cjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/learn-next/final/node_modules/next/dist/compiled/zod/index.cjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$zod$2d$validation$2d$error$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/learn-next/final/node_modules/next/dist/compiled/zod-validation-error/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$output$2f$log$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/learn-next/final/node_modules/next/dist/esm/build/output/log.js [app-rsc] (ecmascript)");
;
;
;
function processZodErrorMessage(issue) {
    let message = issue.message;
    let path;
    if (issue.path.length > 0) {
        if (issue.path.length === 1) {
            const identifier = issue.path[0];
            if (typeof identifier === 'number') {
                // The first identifier inside path is a number
                path = `index ${identifier}`;
            } else {
                path = `"${identifier}"`;
            }
        } else {
            // joined path to be shown in the error message
            path = `"${issue.path.reduce((acc, cur)=>{
                if (typeof cur === 'number') {
                    // array index
                    return `${acc}[${cur}]`;
                }
                if (cur.includes('"')) {
                    // escape quotes
                    return `${acc}["${cur.replaceAll('"', '\\"')}"]`;
                }
                // dot notation
                const separator = acc.length === 0 ? '' : '.';
                return acc + separator + cur;
            }, '')}"`;
        }
    } else {
        path = '';
    }
    if (issue.code === 'invalid_type' && issue.received === __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$zod$2f$index$2e$cjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodParsedType"].undefined) {
        // Missing key in object.
        return `${path} is missing, expected ${issue.expected}`;
    }
    if (issue.code === 'invalid_enum_value') {
        // Remove "Invalid enum value" prefix from zod default error message
        return `Expected ${__TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$zod$2f$index$2e$cjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["util"].joinValues(issue.options)}, received '${issue.received}' at ${path}`;
    }
    return message + (path ? ` at ${path}` : '');
}
function normalizeZodErrors(error) {
    return error.issues.flatMap((issue)=>{
        const issues = [
            {
                issue,
                message: processZodErrorMessage(issue)
            }
        ];
        if ('unionErrors' in issue) {
            for (const unionError of issue.unionErrors){
                issues.push(...normalizeZodErrors(unionError));
            }
        }
        return issues;
    });
}
function formatZodError(prefix, error) {
    return Object.defineProperty(new Error((0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$zod$2d$validation$2d$error$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["fromZodError"])(error, {
        prefix: prefix
    }).toString()), "__NEXT_ERROR_CODE", {
        value: "E394",
        enumerable: false,
        configurable: true
    });
}
function reportZodError(prefix, error) {
    __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$output$2f$log$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["error"](formatZodError(prefix, error).message);
} //# sourceMappingURL=zod.js.map
}),
"[project]/learn-next/final/node_modules/next/dist/esm/build/segment-config/app/app-segment-config.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AppSegmentConfigSchemaKeys",
    ()=>AppSegmentConfigSchemaKeys,
    "parseAppSegmentConfig",
    ()=>parseAppSegmentConfig
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$zod$2f$index$2e$cjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/learn-next/final/node_modules/next/dist/compiled/zod/index.cjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$zod$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/learn-next/final/node_modules/next/dist/esm/shared/lib/zod.js [app-rsc] (ecmascript)");
;
;
const CookieSchema = __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$zod$2f$index$2e$cjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].object({
    name: __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$zod$2f$index$2e$cjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].string(),
    value: __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$zod$2f$index$2e$cjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].string(),
    httpOnly: __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$zod$2f$index$2e$cjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].boolean().optional(),
    path: __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$zod$2f$index$2e$cjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].string().optional()
}).strict();
const RuntimeSampleSchema = __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$zod$2f$index$2e$cjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].object({
    cookies: __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$zod$2f$index$2e$cjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].array(CookieSchema).optional(),
    headers: __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$zod$2f$index$2e$cjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$zod$2f$index$2e$cjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].tuple([
        __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$zod$2f$index$2e$cjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].string(),
        __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$zod$2f$index$2e$cjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].string()
    ])).optional(),
    params: __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$zod$2f$index$2e$cjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].record(__TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$zod$2f$index$2e$cjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].union([
        __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$zod$2f$index$2e$cjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].string(),
        __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$zod$2f$index$2e$cjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$zod$2f$index$2e$cjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].string())
    ])).optional(),
    searchParams: __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$zod$2f$index$2e$cjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].record(__TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$zod$2f$index$2e$cjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].union([
        __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$zod$2f$index$2e$cjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].string(),
        __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$zod$2f$index$2e$cjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$zod$2f$index$2e$cjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].string()),
        __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$zod$2f$index$2e$cjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].undefined()
    ])).optional()
}).strict();
const StaticPrefetchSchema = __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$zod$2f$index$2e$cjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].object({
    mode: __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$zod$2f$index$2e$cjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].literal('static'),
    from: __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$zod$2f$index$2e$cjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$zod$2f$index$2e$cjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].string()).optional(),
    expectUnableToVerify: __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$zod$2f$index$2e$cjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].boolean().optional()
}).strict();
const RuntimePrefetchSchema = __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$zod$2f$index$2e$cjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].object({
    mode: __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$zod$2f$index$2e$cjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].literal('runtime'),
    samples: __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$zod$2f$index$2e$cjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].array(RuntimeSampleSchema).min(1),
    from: __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$zod$2f$index$2e$cjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$zod$2f$index$2e$cjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].string()).optional(),
    expectUnableToVerify: __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$zod$2f$index$2e$cjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].boolean().optional()
}).strict();
const PrefetchSchema = __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$zod$2f$index$2e$cjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].discriminatedUnion('mode', [
    StaticPrefetchSchema,
    RuntimePrefetchSchema
]);
/**
 * The schema for configuration for a page.
 */ const AppSegmentConfigSchema = __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$zod$2f$index$2e$cjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].object({
    /**
   * The number of seconds to revalidate the page or false to disable revalidation.
   */ revalidate: __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$zod$2f$index$2e$cjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].union([
        __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$zod$2f$index$2e$cjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].number().int().nonnegative(),
        __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$zod$2f$index$2e$cjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].literal(false)
    ]).optional(),
    /**
   * Whether the page supports dynamic parameters.
   */ dynamicParams: __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$zod$2f$index$2e$cjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].boolean().optional(),
    /**
   * The dynamic behavior of the page.
   */ dynamic: __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$zod$2f$index$2e$cjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].enum([
        'auto',
        'error',
        'force-static',
        'force-dynamic'
    ]).optional(),
    /**
   * The caching behavior of the page.
   */ fetchCache: __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$zod$2f$index$2e$cjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].enum([
        'auto',
        'default-cache',
        'only-cache',
        'force-cache',
        'force-no-store',
        'default-no-store',
        'only-no-store'
    ]).optional(),
    /**
   * How this segment should be prefetched.
   * (only applicable when `clientSegmentCache` is enabled)
   */ unstable_prefetch: PrefetchSchema.optional(),
    /**
   * The preferred region for the page.
   */ preferredRegion: __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$zod$2f$index$2e$cjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].union([
        __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$zod$2f$index$2e$cjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].string(),
        __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$zod$2f$index$2e$cjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$zod$2f$index$2e$cjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].string())
    ]).optional(),
    /**
   * The runtime to use for the page.
   */ runtime: __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$zod$2f$index$2e$cjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].enum([
        'edge',
        'nodejs'
    ]).optional(),
    /**
   * The maximum duration for the page in seconds.
   */ maxDuration: __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$zod$2f$index$2e$cjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].number().int().nonnegative().optional()
});
function parseAppSegmentConfig(data, route) {
    const parsed = AppSegmentConfigSchema.safeParse(data, {
        errorMap: (issue, ctx)=>{
            if (issue.path.length === 1) {
                switch(issue.path[0]){
                    case 'revalidate':
                        {
                            return {
                                message: `Invalid revalidate value ${JSON.stringify(ctx.data)} on "${route}", must be a non-negative number or false`
                            };
                        }
                    case 'unstable_prefetch':
                        {
                            return {
                                // @TODO replace this link with a link to the docs when they are written
                                message: `Invalid unstable_prefetch value ${JSON.stringify(ctx.data)} on "${route}", must be an object with a mode of "static" or "runtime". Read more at https://nextjs.org/docs/messages/invalid-prefetch-configuration`
                            };
                        }
                    default:
                }
            }
            return {
                message: ctx.defaultError
            };
        }
    });
    if (!parsed.success) {
        throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$zod$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["formatZodError"])(`Invalid segment configuration options detected for "${route}". Read more at https://nextjs.org/docs/app/api-reference/file-conventions/route-segment-config`, parsed.error);
    }
    return parsed.data;
}
const AppSegmentConfigSchemaKeys = AppSegmentConfigSchema.keyof().options; //# sourceMappingURL=app-segment-config.js.map
}),
"[project]/learn-next/final/node_modules/next/dist/esm/server/route-modules/checks.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isAppPageRouteModule",
    ()=>isAppPageRouteModule,
    "isAppRouteRouteModule",
    ()=>isAppRouteRouteModule,
    "isPagesAPIRouteModule",
    ()=>isPagesAPIRouteModule,
    "isPagesRouteModule",
    ()=>isPagesRouteModule
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$route$2d$kind$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/learn-next/final/node_modules/next/dist/esm/server/route-kind.js [app-rsc] (ecmascript)");
;
function isAppRouteRouteModule(routeModule) {
    return routeModule.definition.kind === __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$route$2d$kind$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["RouteKind"].APP_ROUTE;
}
function isAppPageRouteModule(routeModule) {
    return routeModule.definition.kind === __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$route$2d$kind$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["RouteKind"].APP_PAGE;
}
function isPagesRouteModule(routeModule) {
    return routeModule.definition.kind === __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$route$2d$kind$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["RouteKind"].PAGES;
}
function isPagesAPIRouteModule(routeModule) {
    return routeModule.definition.kind === __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$route$2d$kind$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["RouteKind"].PAGES_API;
} //# sourceMappingURL=checks.js.map
}),
"[project]/learn-next/final/node_modules/next/dist/esm/shared/lib/page-path/ensure-leading-slash.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * For a given page path, this function ensures that there is a leading slash.
 * If there is not a leading slash, one is added, otherwise it is noop.
 */ __turbopack_context__.s([
    "ensureLeadingSlash",
    ()=>ensureLeadingSlash
]);
function ensureLeadingSlash(path) {
    return path.startsWith('/') ? path : `/${path}`;
} //# sourceMappingURL=ensure-leading-slash.js.map
}),
"[project]/learn-next/final/node_modules/next/dist/esm/shared/lib/router/utils/app-paths.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "normalizeAppPath",
    ()=>normalizeAppPath,
    "normalizeRscURL",
    ()=>normalizeRscURL
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$page$2d$path$2f$ensure$2d$leading$2d$slash$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/learn-next/final/node_modules/next/dist/esm/shared/lib/page-path/ensure-leading-slash.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$segment$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/learn-next/final/node_modules/next/dist/esm/shared/lib/segment.js [app-rsc] (ecmascript)");
;
;
function normalizeAppPath(route) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$page$2d$path$2f$ensure$2d$leading$2d$slash$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureLeadingSlash"])(route.split('/').reduce((pathname, segment, index, segments)=>{
        // Empty segments are ignored.
        if (!segment) {
            return pathname;
        }
        // Groups are ignored.
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$segment$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isGroupSegment"])(segment)) {
            return pathname;
        }
        // Parallel segments are ignored.
        if (segment[0] === '@') {
            return pathname;
        }
        // The last segment (if it's a leaf) should be ignored.
        if ((segment === 'page' || segment === 'route') && index === segments.length - 1) {
            return pathname;
        }
        return `${pathname}/${segment}`;
    }, ''));
}
function normalizeRscURL(url) {
    return url.replace(/\.rsc($|\?)/, '$1');
} //# sourceMappingURL=app-paths.js.map
}),
"[project]/learn-next/final/node_modules/next/dist/esm/shared/lib/router/utils/interception-routes.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "INTERCEPTION_ROUTE_MARKERS",
    ()=>INTERCEPTION_ROUTE_MARKERS,
    "extractInterceptionRouteInformation",
    ()=>extractInterceptionRouteInformation,
    "isInterceptionRouteAppPath",
    ()=>isInterceptionRouteAppPath
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$app$2d$paths$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/learn-next/final/node_modules/next/dist/esm/shared/lib/router/utils/app-paths.js [app-rsc] (ecmascript)");
;
const INTERCEPTION_ROUTE_MARKERS = [
    '(..)(..)',
    '(.)',
    '(..)',
    '(...)'
];
function isInterceptionRouteAppPath(path) {
    // TODO-APP: add more serious validation
    return path.split('/').find((segment)=>INTERCEPTION_ROUTE_MARKERS.find((m)=>segment.startsWith(m))) !== undefined;
}
function extractInterceptionRouteInformation(path) {
    let interceptingRoute;
    let marker;
    let interceptedRoute;
    for (const segment of path.split('/')){
        marker = INTERCEPTION_ROUTE_MARKERS.find((m)=>segment.startsWith(m));
        if (marker) {
            ;
            [interceptingRoute, interceptedRoute] = path.split(marker, 2);
            break;
        }
    }
    if (!interceptingRoute || !marker || !interceptedRoute) {
        throw Object.defineProperty(new Error(`Invalid interception route: ${path}. Must be in the format /<intercepting route>/(..|...|..)(..)/<intercepted route>`), "__NEXT_ERROR_CODE", {
            value: "E269",
            enumerable: false,
            configurable: true
        });
    }
    interceptingRoute = (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$app$2d$paths$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["normalizeAppPath"])(interceptingRoute) // normalize the path, e.g. /(blog)/feed -> /feed
    ;
    switch(marker){
        case '(.)':
            // (.) indicates that we should match with sibling routes, so we just need to append the intercepted route to the intercepting route
            if (interceptingRoute === '/') {
                interceptedRoute = `/${interceptedRoute}`;
            } else {
                interceptedRoute = interceptingRoute + '/' + interceptedRoute;
            }
            break;
        case '(..)':
            // (..) indicates that we should match at one level up, so we need to remove the last segment of the intercepting route
            if (interceptingRoute === '/') {
                throw Object.defineProperty(new Error(`Invalid interception route: ${path}. Cannot use (..) marker at the root level, use (.) instead.`), "__NEXT_ERROR_CODE", {
                    value: "E207",
                    enumerable: false,
                    configurable: true
                });
            }
            interceptedRoute = interceptingRoute.split('/').slice(0, -1).concat(interceptedRoute).join('/');
            break;
        case '(...)':
            // (...) will match the route segment in the root directory, so we need to use the root directory to prepend the intercepted route
            interceptedRoute = '/' + interceptedRoute;
            break;
        case '(..)(..)':
            // (..)(..) indicates that we should match at two levels up, so we need to remove the last two segments of the intercepting route
            const splitInterceptingRoute = interceptingRoute.split('/');
            if (splitInterceptingRoute.length <= 2) {
                throw Object.defineProperty(new Error(`Invalid interception route: ${path}. Cannot use (..)(..) marker at the root level or one level up.`), "__NEXT_ERROR_CODE", {
                    value: "E486",
                    enumerable: false,
                    configurable: true
                });
            }
            interceptedRoute = splitInterceptingRoute.slice(0, -2).concat(interceptedRoute).join('/');
            break;
        default:
            throw Object.defineProperty(new Error('Invariant: unexpected marker'), "__NEXT_ERROR_CODE", {
                value: "E112",
                enumerable: false,
                configurable: true
            });
    }
    return {
        interceptingRoute,
        interceptedRoute
    };
} //# sourceMappingURL=interception-routes.js.map
}),
"[project]/learn-next/final/node_modules/next/dist/esm/shared/lib/router/utils/get-segment-param.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getParamProperties",
    ()=>getParamProperties,
    "getSegmentParam",
    ()=>getSegmentParam,
    "isCatchAll",
    ()=>isCatchAll
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$interception$2d$routes$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/learn-next/final/node_modules/next/dist/esm/shared/lib/router/utils/interception-routes.js [app-rsc] (ecmascript)");
;
function getSegmentParam(segment) {
    const interceptionMarker = __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$interception$2d$routes$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["INTERCEPTION_ROUTE_MARKERS"].find((marker)=>segment.startsWith(marker));
    // if an interception marker is part of the path segment, we need to jump ahead
    // to the relevant portion for param parsing
    if (interceptionMarker) {
        segment = segment.slice(interceptionMarker.length);
    }
    if (segment.startsWith('[[...') && segment.endsWith(']]')) {
        return {
            // TODO-APP: Optional catchall does not currently work with parallel routes,
            // so for now aren't handling a potential interception marker.
            type: 'optional-catchall',
            param: segment.slice(5, -2)
        };
    }
    if (segment.startsWith('[...') && segment.endsWith(']')) {
        return {
            type: interceptionMarker ? 'catchall-intercepted' : 'catchall',
            param: segment.slice(4, -1)
        };
    }
    if (segment.startsWith('[') && segment.endsWith(']')) {
        return {
            type: interceptionMarker ? 'dynamic-intercepted' : 'dynamic',
            param: segment.slice(1, -1)
        };
    }
    return null;
}
function isCatchAll(type) {
    return type === 'catchall' || type === 'catchall-intercepted' || type === 'optional-catchall';
}
function getParamProperties(paramType) {
    let repeat = false;
    let optional = false;
    switch(paramType){
        case 'catchall':
        case 'catchall-intercepted':
            repeat = true;
            break;
        case 'optional-catchall':
            repeat = true;
            optional = true;
            break;
        case 'dynamic':
        case 'dynamic-intercepted':
            break;
        default:
            paramType;
    }
    return {
        repeat,
        optional
    };
} //# sourceMappingURL=get-segment-param.js.map
}),
"[project]/learn-next/final/node_modules/next/dist/esm/build/static-paths/utils.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Encodes a parameter value using the provided encoder.
 *
 * @param value - The value to encode.
 * @param encoder - The encoder to use.
 * @returns The encoded value.
 */ __turbopack_context__.s([
    "createFallbackRouteParam",
    ()=>createFallbackRouteParam,
    "encodeParam",
    ()=>encodeParam,
    "normalizePathname",
    ()=>normalizePathname
]);
function encodeParam(value, encoder) {
    let replaceValue;
    if (Array.isArray(value)) {
        replaceValue = value.map(encoder).join('/');
    } else {
        replaceValue = encoder(value);
    }
    return replaceValue;
}
function normalizePathname(pathname) {
    return pathname.replace(/\\/g, '/').replace(/(?!^)\/$/, '');
}
function createFallbackRouteParam(paramName, paramType, isParallelRouteParam) {
    return {
        paramName,
        paramType,
        isParallelRouteParam
    };
} //# sourceMappingURL=utils.js.map
}),
"[project]/learn-next/final/node_modules/next/dist/esm/build/segment-config/app/app-segments.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "collectFallbackRouteParams",
    ()=>collectFallbackRouteParams,
    "collectSegments",
    ()=>collectSegments
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$segment$2d$config$2f$app$2f$app$2d$segment$2d$config$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/learn-next/final/node_modules/next/dist/esm/build/segment-config/app/app-segment-config.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$invariant$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/learn-next/final/node_modules/next/dist/esm/shared/lib/invariant-error.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$route$2d$modules$2f$checks$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/learn-next/final/node_modules/next/dist/esm/server/route-modules/checks.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$client$2d$and$2d$server$2d$references$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/learn-next/final/node_modules/next/dist/esm/lib/client-and-server-references.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$get$2d$segment$2d$param$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/learn-next/final/node_modules/next/dist/esm/shared/lib/router/utils/get-segment-param.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$app$2d$dir$2d$module$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/learn-next/final/node_modules/next/dist/esm/server/lib/app-dir-module.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$segment$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/learn-next/final/node_modules/next/dist/esm/shared/lib/segment.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$static$2d$paths$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/learn-next/final/node_modules/next/dist/esm/build/static-paths/utils.js [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
;
/**
 * Parses the app config and attaches it to the segment.
 */ function attach(segment, userland, route) {
    // If the userland is not an object, then we can't do anything with it.
    if (typeof userland !== 'object' || userland === null) {
        return;
    }
    // Try to parse the application configuration.
    const config = (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$segment$2d$config$2f$app$2f$app$2d$segment$2d$config$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["parseAppSegmentConfig"])(userland, route);
    // If there was any keys on the config, then attach it to the segment.
    if (Object.keys(config).length > 0) {
        segment.config = config;
    }
    if ('generateStaticParams' in userland && typeof userland.generateStaticParams === 'function') {
        var _segment_config;
        segment.generateStaticParams = userland.generateStaticParams;
        // Validate that `generateStaticParams` makes sense in this context.
        if (((_segment_config = segment.config) == null ? void 0 : _segment_config.runtime) === 'edge') {
            throw Object.defineProperty(new Error('Edge runtime is not supported with `generateStaticParams`.'), "__NEXT_ERROR_CODE", {
                value: "E502",
                enumerable: false,
                configurable: true
            });
        }
    }
}
/**
 * Walks the loader tree and collects the generate parameters for each segment.
 *
 * @param routeModule the app page route module
 * @returns the segments for the app page route module
 */ async function collectAppPageSegments(routeModule) {
    // We keep track of unique segments, since with parallel routes, it's possible
    // to see the same segment multiple times.
    const uniqueSegments = new Map();
    const queue = [
        [
            routeModule.userland.loaderTree,
            [],
            false
        ]
    ];
    while(queue.length > 0){
        const [loaderTree, currentSegments, isParallelRouteSegment] = queue.shift();
        const [name, parallelRoutes] = loaderTree;
        // Process current node
        const { mod: userland, filePath } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$app$2d$dir$2d$module$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getLayoutOrPageModule"])(loaderTree);
        const isClientComponent = userland && (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$client$2d$and$2d$server$2d$references$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isClientReference"])(userland);
        const { param: paramName, type: paramType } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$get$2d$segment$2d$param$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getSegmentParam"])(name) ?? {};
        const segment = {
            name,
            paramName,
            paramType,
            filePath,
            config: undefined,
            isDynamicSegment: !!paramName,
            generateStaticParams: undefined,
            isParallelRouteSegment
        };
        // Only server components can have app segment configurations
        if (!isClientComponent) {
            attach(segment, userland, routeModule.definition.pathname);
        }
        // Create a unique key for the segment
        const segmentKey = getSegmentKey(segment);
        if (!uniqueSegments.has(segmentKey)) {
            uniqueSegments.set(segmentKey, segment);
        }
        const updatedSegments = [
            ...currentSegments,
            segment
        ];
        // If this is a page segment, we've reached a leaf node
        if (name === __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$segment$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PAGE_SEGMENT_KEY"]) {
            // Add all segments in the current path, preferring non-parallel segments
            updatedSegments.forEach((seg)=>{
                const key = getSegmentKey(seg);
                if (!uniqueSegments.has(key)) {
                    uniqueSegments.set(key, seg);
                }
            });
        }
        // Add all parallel routes to the queue
        for(const parallelRouteKey in parallelRoutes){
            const parallelRoute = parallelRoutes[parallelRouteKey];
            queue.push([
                parallelRoute,
                updatedSegments,
                // A parallel route segment is one that descends from a segment that is
                // not children or descends from a parallel route segment.
                isParallelRouteSegment || parallelRouteKey !== 'children'
            ]);
        }
    }
    return Array.from(uniqueSegments.values());
}
function getSegmentKey(segment) {
    return `${segment.name}-${segment.filePath ?? ''}-${segment.paramName ?? ''}-${segment.isParallelRouteSegment ? 'pr' : 'np'}`;
}
/**
 * Collects the segments for a given app route module.
 *
 * @param routeModule the app route module
 * @returns the segments for the app route module
 */ function collectAppRouteSegments(routeModule) {
    // Get the pathname parts, slice off the first element (which is empty).
    const parts = routeModule.definition.pathname.split('/').slice(1);
    if (parts.length === 0) {
        throw Object.defineProperty(new __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$invariant$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["InvariantError"]('Expected at least one segment'), "__NEXT_ERROR_CODE", {
            value: "E580",
            enumerable: false,
            configurable: true
        });
    }
    // Generate all the segments.
    const segments = parts.map((name)=>{
        const { param: paramName, type: paramType } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$get$2d$segment$2d$param$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getSegmentParam"])(name) ?? {};
        return {
            name,
            paramName,
            paramType,
            filePath: undefined,
            isDynamicSegment: !!paramName,
            config: undefined,
            generateStaticParams: undefined,
            isParallelRouteSegment: undefined
        };
    });
    // We know we have at least one, we verified this above. We should get the
    // last segment which represents the root route module.
    const segment = segments[segments.length - 1];
    segment.filePath = routeModule.definition.filename;
    // Extract the segment config from the userland module.
    attach(segment, routeModule.userland, routeModule.definition.pathname);
    return segments;
}
function collectSegments(routeModule) {
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$route$2d$modules$2f$checks$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isAppRouteRouteModule"])(routeModule)) {
        return collectAppRouteSegments(routeModule);
    }
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$route$2d$modules$2f$checks$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isAppPageRouteModule"])(routeModule)) {
        return collectAppPageSegments(routeModule);
    }
    throw Object.defineProperty(new __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$invariant$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["InvariantError"]('Expected a route module to be one of app route or page'), "__NEXT_ERROR_CODE", {
        value: "E568",
        enumerable: false,
        configurable: true
    });
}
function collectFallbackRouteParams(routeModule) {
    const uniqueSegments = new Map();
    const queue = [
        [
            routeModule.userland.loaderTree,
            false
        ]
    ];
    while(queue.length > 0){
        const [loaderTree, isParallelRouteSegment] = queue.shift();
        const [name, parallelRoutes] = loaderTree;
        // Handle this segment (if it's a dynamic segment param).
        const segmentParam = (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$get$2d$segment$2d$param$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getSegmentParam"])(name);
        if (segmentParam) {
            const key = `${name}-${segmentParam.param}-${isParallelRouteSegment ? 'pr' : 'np'}`;
            if (!uniqueSegments.has(key)) {
                uniqueSegments.set(key, (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$static$2d$paths$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createFallbackRouteParam"])(segmentParam.param, segmentParam.type, isParallelRouteSegment));
            }
        }
        // Add all of this segment's parallel routes to the queue.
        for(const parallelRouteKey in parallelRoutes){
            const parallelRoute = parallelRoutes[parallelRouteKey];
            queue.push([
                parallelRoute,
                // A parallel route segment is one that descends from a segment that is
                // not children or descends from a parallel route segment.
                isParallelRouteSegment || parallelRouteKey !== 'children'
            ]);
        }
    }
    return Array.from(uniqueSegments.values());
} //# sourceMappingURL=app-segments.js.map
}),
"[project]/learn-next/final/node_modules/next/dist/esm/shared/lib/utils.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Web vitals provided to _app.reportWebVitals by Core Web Vitals plugin developed by Google Chrome team.
 * https://nextjs.org/blog/next-9-4#integrated-web-vitals-reporting
 */ __turbopack_context__.s([
    "DecodeError",
    ()=>DecodeError,
    "MiddlewareNotFoundError",
    ()=>MiddlewareNotFoundError,
    "MissingStaticPage",
    ()=>MissingStaticPage,
    "NormalizeError",
    ()=>NormalizeError,
    "PageNotFoundError",
    ()=>PageNotFoundError,
    "SP",
    ()=>SP,
    "ST",
    ()=>ST,
    "WEB_VITALS",
    ()=>WEB_VITALS,
    "execOnce",
    ()=>execOnce,
    "getDisplayName",
    ()=>getDisplayName,
    "getLocationOrigin",
    ()=>getLocationOrigin,
    "getURL",
    ()=>getURL,
    "isAbsoluteUrl",
    ()=>isAbsoluteUrl,
    "isResSent",
    ()=>isResSent,
    "loadGetInitialProps",
    ()=>loadGetInitialProps,
    "normalizeRepeatedSlashes",
    ()=>normalizeRepeatedSlashes,
    "stringifyError",
    ()=>stringifyError
]);
const WEB_VITALS = [
    'CLS',
    'FCP',
    'FID',
    'INP',
    'LCP',
    'TTFB'
];
function execOnce(fn) {
    let used = false;
    let result;
    return (...args)=>{
        if (!used) {
            used = true;
            result = fn(...args);
        }
        return result;
    };
}
// Scheme: https://tools.ietf.org/html/rfc3986#section-3.1
// Absolute URL: https://tools.ietf.org/html/rfc3986#section-4.3
const ABSOLUTE_URL_REGEX = /^[a-zA-Z][a-zA-Z\d+\-.]*?:/;
const isAbsoluteUrl = (url)=>ABSOLUTE_URL_REGEX.test(url);
function getLocationOrigin() {
    const { protocol, hostname, port } = window.location;
    return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}
function getURL() {
    const { href } = window.location;
    const origin = getLocationOrigin();
    return href.substring(origin.length);
}
function getDisplayName(Component) {
    return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}
function isResSent(res) {
    return res.finished || res.headersSent;
}
function normalizeRepeatedSlashes(url) {
    const urlParts = url.split('?');
    const urlNoQuery = urlParts[0];
    return urlNoQuery // first we replace any non-encoded backslashes with forward
    // then normalize repeated forward slashes
    .replace(/\\/g, '/').replace(/\/\/+/g, '/') + (urlParts[1] ? `?${urlParts.slice(1).join('?')}` : '');
}
async function loadGetInitialProps(App, ctx) {
    if ("TURBOPACK compile-time truthy", 1) {
        if (App.prototype?.getInitialProps) {
            const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://nextjs.org/docs/messages/get-initial-props-as-an-instance-method for more information.`;
            throw Object.defineProperty(new Error(message), "__NEXT_ERROR_CODE", {
                value: "E394",
                enumerable: false,
                configurable: true
            });
        }
    }
    // when called from _app `ctx` is nested in `ctx`
    const res = ctx.res || ctx.ctx && ctx.ctx.res;
    if (!App.getInitialProps) {
        if (ctx.ctx && ctx.Component) {
            // @ts-ignore pageProps default
            return {
                pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
            };
        }
        return {};
    }
    const props = await App.getInitialProps(ctx);
    if (res && isResSent(res)) {
        return props;
    }
    if (!props) {
        const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
        throw Object.defineProperty(new Error(message), "__NEXT_ERROR_CODE", {
            value: "E394",
            enumerable: false,
            configurable: true
        });
    }
    if ("TURBOPACK compile-time truthy", 1) {
        if (Object.keys(props).length === 0 && !ctx.ctx) {
            console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://nextjs.org/docs/messages/empty-object-getInitialProps`);
        }
    }
    return props;
}
const SP = typeof performance !== 'undefined';
const ST = SP && [
    'mark',
    'measure',
    'getEntriesByName'
].every((method)=>typeof performance[method] === 'function');
class DecodeError extends Error {
}
class NormalizeError extends Error {
}
class PageNotFoundError extends Error {
    constructor(page){
        super();
        this.code = 'ENOENT';
        this.name = 'PageNotFoundError';
        this.message = `Cannot find module for page: ${page}`;
    }
}
class MissingStaticPage extends Error {
    constructor(page, message){
        super();
        this.message = `Failed to load static file for page: ${page} ${message}`;
    }
}
class MiddlewareNotFoundError extends Error {
    constructor(){
        super();
        this.code = 'ENOENT';
        this.message = `Cannot find the middleware module`;
    }
}
function stringifyError(error) {
    return JSON.stringify({
        message: error.message,
        stack: error.stack
    });
} //# sourceMappingURL=utils.js.map
}),
"[project]/learn-next/final/node_modules/next/dist/compiled/path-to-regexp/index.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {

(()=>{
    "use strict";
    if (typeof __nccwpck_require__ !== "undefined") __nccwpck_require__.ab = ("TURBOPACK compile-time value", "/ROOT/learn-next/final/node_modules/next/dist/compiled/path-to-regexp") + "/";
    var e = {};
    (()=>{
        var n = e;
        Object.defineProperty(n, "__esModule", {
            value: true
        });
        n.pathToRegexp = n.tokensToRegexp = n.regexpToFunction = n.match = n.tokensToFunction = n.compile = n.parse = void 0;
        function lexer(e) {
            var n = [];
            var r = 0;
            while(r < e.length){
                var t = e[r];
                if (t === "*" || t === "+" || t === "?") {
                    n.push({
                        type: "MODIFIER",
                        index: r,
                        value: e[r++]
                    });
                    continue;
                }
                if (t === "\\") {
                    n.push({
                        type: "ESCAPED_CHAR",
                        index: r++,
                        value: e[r++]
                    });
                    continue;
                }
                if (t === "{") {
                    n.push({
                        type: "OPEN",
                        index: r,
                        value: e[r++]
                    });
                    continue;
                }
                if (t === "}") {
                    n.push({
                        type: "CLOSE",
                        index: r,
                        value: e[r++]
                    });
                    continue;
                }
                if (t === ":") {
                    var a = "";
                    var i = r + 1;
                    while(i < e.length){
                        var o = e.charCodeAt(i);
                        if (o >= 48 && o <= 57 || o >= 65 && o <= 90 || o >= 97 && o <= 122 || o === 95) {
                            a += e[i++];
                            continue;
                        }
                        break;
                    }
                    if (!a) throw new TypeError("Missing parameter name at ".concat(r));
                    n.push({
                        type: "NAME",
                        index: r,
                        value: a
                    });
                    r = i;
                    continue;
                }
                if (t === "(") {
                    var c = 1;
                    var f = "";
                    var i = r + 1;
                    if (e[i] === "?") {
                        throw new TypeError('Pattern cannot start with "?" at '.concat(i));
                    }
                    while(i < e.length){
                        if (e[i] === "\\") {
                            f += e[i++] + e[i++];
                            continue;
                        }
                        if (e[i] === ")") {
                            c--;
                            if (c === 0) {
                                i++;
                                break;
                            }
                        } else if (e[i] === "(") {
                            c++;
                            if (e[i + 1] !== "?") {
                                throw new TypeError("Capturing groups are not allowed at ".concat(i));
                            }
                        }
                        f += e[i++];
                    }
                    if (c) throw new TypeError("Unbalanced pattern at ".concat(r));
                    if (!f) throw new TypeError("Missing pattern at ".concat(r));
                    n.push({
                        type: "PATTERN",
                        index: r,
                        value: f
                    });
                    r = i;
                    continue;
                }
                n.push({
                    type: "CHAR",
                    index: r,
                    value: e[r++]
                });
            }
            n.push({
                type: "END",
                index: r,
                value: ""
            });
            return n;
        }
        function parse(e, n) {
            if (n === void 0) {
                n = {};
            }
            var r = lexer(e);
            var t = n.prefixes, a = t === void 0 ? "./" : t, i = n.delimiter, o = i === void 0 ? "/#?" : i;
            var c = [];
            var f = 0;
            var u = 0;
            var p = "";
            var tryConsume = function(e) {
                if (u < r.length && r[u].type === e) return r[u++].value;
            };
            var mustConsume = function(e) {
                var n = tryConsume(e);
                if (n !== undefined) return n;
                var t = r[u], a = t.type, i = t.index;
                throw new TypeError("Unexpected ".concat(a, " at ").concat(i, ", expected ").concat(e));
            };
            var consumeText = function() {
                var e = "";
                var n;
                while(n = tryConsume("CHAR") || tryConsume("ESCAPED_CHAR")){
                    e += n;
                }
                return e;
            };
            var isSafe = function(e) {
                for(var n = 0, r = o; n < r.length; n++){
                    var t = r[n];
                    if (e.indexOf(t) > -1) return true;
                }
                return false;
            };
            var safePattern = function(e) {
                var n = c[c.length - 1];
                var r = e || (n && typeof n === "string" ? n : "");
                if (n && !r) {
                    throw new TypeError('Must have text between two parameters, missing text after "'.concat(n.name, '"'));
                }
                if (!r || isSafe(r)) return "[^".concat(escapeString(o), "]+?");
                return "(?:(?!".concat(escapeString(r), ")[^").concat(escapeString(o), "])+?");
            };
            while(u < r.length){
                var v = tryConsume("CHAR");
                var s = tryConsume("NAME");
                var d = tryConsume("PATTERN");
                if (s || d) {
                    var g = v || "";
                    if (a.indexOf(g) === -1) {
                        p += g;
                        g = "";
                    }
                    if (p) {
                        c.push(p);
                        p = "";
                    }
                    c.push({
                        name: s || f++,
                        prefix: g,
                        suffix: "",
                        pattern: d || safePattern(g),
                        modifier: tryConsume("MODIFIER") || ""
                    });
                    continue;
                }
                var x = v || tryConsume("ESCAPED_CHAR");
                if (x) {
                    p += x;
                    continue;
                }
                if (p) {
                    c.push(p);
                    p = "";
                }
                var h = tryConsume("OPEN");
                if (h) {
                    var g = consumeText();
                    var l = tryConsume("NAME") || "";
                    var m = tryConsume("PATTERN") || "";
                    var T = consumeText();
                    mustConsume("CLOSE");
                    c.push({
                        name: l || (m ? f++ : ""),
                        pattern: l && !m ? safePattern(g) : m,
                        prefix: g,
                        suffix: T,
                        modifier: tryConsume("MODIFIER") || ""
                    });
                    continue;
                }
                mustConsume("END");
            }
            return c;
        }
        n.parse = parse;
        function compile(e, n) {
            return tokensToFunction(parse(e, n), n);
        }
        n.compile = compile;
        function tokensToFunction(e, n) {
            if (n === void 0) {
                n = {};
            }
            var r = flags(n);
            var t = n.encode, a = t === void 0 ? function(e) {
                return e;
            } : t, i = n.validate, o = i === void 0 ? true : i;
            var c = e.map(function(e) {
                if (typeof e === "object") {
                    return new RegExp("^(?:".concat(e.pattern, ")$"), r);
                }
            });
            return function(n) {
                var r = "";
                for(var t = 0; t < e.length; t++){
                    var i = e[t];
                    if (typeof i === "string") {
                        r += i;
                        continue;
                    }
                    var f = n ? n[i.name] : undefined;
                    var u = i.modifier === "?" || i.modifier === "*";
                    var p = i.modifier === "*" || i.modifier === "+";
                    if (Array.isArray(f)) {
                        if (!p) {
                            throw new TypeError('Expected "'.concat(i.name, '" to not repeat, but got an array'));
                        }
                        if (f.length === 0) {
                            if (u) continue;
                            throw new TypeError('Expected "'.concat(i.name, '" to not be empty'));
                        }
                        for(var v = 0; v < f.length; v++){
                            var s = a(f[v], i);
                            if (o && !c[t].test(s)) {
                                throw new TypeError('Expected all "'.concat(i.name, '" to match "').concat(i.pattern, '", but got "').concat(s, '"'));
                            }
                            r += i.prefix + s + i.suffix;
                        }
                        continue;
                    }
                    if (typeof f === "string" || typeof f === "number") {
                        var s = a(String(f), i);
                        if (o && !c[t].test(s)) {
                            throw new TypeError('Expected "'.concat(i.name, '" to match "').concat(i.pattern, '", but got "').concat(s, '"'));
                        }
                        r += i.prefix + s + i.suffix;
                        continue;
                    }
                    if (u) continue;
                    var d = p ? "an array" : "a string";
                    throw new TypeError('Expected "'.concat(i.name, '" to be ').concat(d));
                }
                return r;
            };
        }
        n.tokensToFunction = tokensToFunction;
        function match(e, n) {
            var r = [];
            var t = pathToRegexp(e, r, n);
            return regexpToFunction(t, r, n);
        }
        n.match = match;
        function regexpToFunction(e, n, r) {
            if (r === void 0) {
                r = {};
            }
            var t = r.decode, a = t === void 0 ? function(e) {
                return e;
            } : t;
            return function(r) {
                var t = e.exec(r);
                if (!t) return false;
                var i = t[0], o = t.index;
                var c = Object.create(null);
                var _loop_1 = function(e) {
                    if (t[e] === undefined) return "continue";
                    var r = n[e - 1];
                    if (r.modifier === "*" || r.modifier === "+") {
                        c[r.name] = t[e].split(r.prefix + r.suffix).map(function(e) {
                            return a(e, r);
                        });
                    } else {
                        c[r.name] = a(t[e], r);
                    }
                };
                for(var f = 1; f < t.length; f++){
                    _loop_1(f);
                }
                return {
                    path: i,
                    index: o,
                    params: c
                };
            };
        }
        n.regexpToFunction = regexpToFunction;
        function escapeString(e) {
            return e.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
        }
        function flags(e) {
            return e && e.sensitive ? "" : "i";
        }
        function regexpToRegexp(e, n) {
            if (!n) return e;
            var r = /\((?:\?<(.*?)>)?(?!\?)/g;
            var t = 0;
            var a = r.exec(e.source);
            while(a){
                n.push({
                    name: a[1] || t++,
                    prefix: "",
                    suffix: "",
                    modifier: "",
                    pattern: ""
                });
                a = r.exec(e.source);
            }
            return e;
        }
        function arrayToRegexp(e, n, r) {
            var t = e.map(function(e) {
                return pathToRegexp(e, n, r).source;
            });
            return new RegExp("(?:".concat(t.join("|"), ")"), flags(r));
        }
        function stringToRegexp(e, n, r) {
            return tokensToRegexp(parse(e, r), n, r);
        }
        function tokensToRegexp(e, n, r) {
            if (r === void 0) {
                r = {};
            }
            var t = r.strict, a = t === void 0 ? false : t, i = r.start, o = i === void 0 ? true : i, c = r.end, f = c === void 0 ? true : c, u = r.encode, p = u === void 0 ? function(e) {
                return e;
            } : u, v = r.delimiter, s = v === void 0 ? "/#?" : v, d = r.endsWith, g = d === void 0 ? "" : d;
            var x = "[".concat(escapeString(g), "]|$");
            var h = "[".concat(escapeString(s), "]");
            var l = o ? "^" : "";
            for(var m = 0, T = e; m < T.length; m++){
                var E = T[m];
                if (typeof E === "string") {
                    l += escapeString(p(E));
                } else {
                    var w = escapeString(p(E.prefix));
                    var y = escapeString(p(E.suffix));
                    if (E.pattern) {
                        if (n) n.push(E);
                        if (w || y) {
                            if (E.modifier === "+" || E.modifier === "*") {
                                var R = E.modifier === "*" ? "?" : "";
                                l += "(?:".concat(w, "((?:").concat(E.pattern, ")(?:").concat(y).concat(w, "(?:").concat(E.pattern, "))*)").concat(y, ")").concat(R);
                            } else {
                                l += "(?:".concat(w, "(").concat(E.pattern, ")").concat(y, ")").concat(E.modifier);
                            }
                        } else {
                            if (E.modifier === "+" || E.modifier === "*") {
                                throw new TypeError('Can not repeat "'.concat(E.name, '" without a prefix and suffix'));
                            }
                            l += "(".concat(E.pattern, ")").concat(E.modifier);
                        }
                    } else {
                        l += "(?:".concat(w).concat(y, ")").concat(E.modifier);
                    }
                }
            }
            if (f) {
                if (!a) l += "".concat(h, "?");
                l += !r.endsWith ? "$" : "(?=".concat(x, ")");
            } else {
                var A = e[e.length - 1];
                var _ = typeof A === "string" ? h.indexOf(A[A.length - 1]) > -1 : A === undefined;
                if (!a) {
                    l += "(?:".concat(h, "(?=").concat(x, "))?");
                }
                if (!_) {
                    l += "(?=".concat(h, "|").concat(x, ")");
                }
            }
            return new RegExp(l, flags(r));
        }
        n.tokensToRegexp = tokensToRegexp;
        function pathToRegexp(e, n, r) {
            if (e instanceof RegExp) return regexpToRegexp(e, n);
            if (Array.isArray(e)) return arrayToRegexp(e, n, r);
            return stringToRegexp(e, n, r);
        }
        n.pathToRegexp = pathToRegexp;
    })();
    module.exports = e;
})();
}),
"[project]/learn-next/final/node_modules/next/dist/esm/lib/route-pattern-normalizer.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Route pattern normalization utilities for path-to-regexp compatibility.
 *
 * path-to-regexp 6.3.0+ introduced stricter validation that rejects certain
 * patterns commonly used in Next.js interception routes. This module provides
 * normalization functions to make Next.js route patterns compatible with the
 * updated library while preserving all functionality.
 */ /**
 * Internal separator used to normalize adjacent parameter patterns.
 * This unique marker is inserted between adjacent parameters and stripped out
 * during parameter extraction to avoid conflicts with real URL content.
 */ __turbopack_context__.s([
    "PARAM_SEPARATOR",
    ()=>PARAM_SEPARATOR,
    "hasAdjacentParameterIssues",
    ()=>hasAdjacentParameterIssues,
    "normalizeAdjacentParameters",
    ()=>normalizeAdjacentParameters,
    "normalizeTokensForRegexp",
    ()=>normalizeTokensForRegexp,
    "stripNormalizedSeparators",
    ()=>stripNormalizedSeparators,
    "stripParameterSeparators",
    ()=>stripParameterSeparators
]);
const PARAM_SEPARATOR = '_NEXTSEP_';
function hasAdjacentParameterIssues(route) {
    if (typeof route !== 'string') return false;
    // Check for interception route markers followed immediately by parameters
    // Pattern: /(.):param, /(..):param, /(...):param, /(.)(.):param etc.
    // These patterns cause "Must have text between two parameters" errors
    if (/\/\(\.{1,3}\):[^/\s]+/.test(route)) {
        return true;
    }
    // Check for basic adjacent parameters without separators
    // Pattern: :param1:param2 (but not :param* or other URL patterns)
    if (/:[a-zA-Z_][a-zA-Z0-9_]*:[a-zA-Z_][a-zA-Z0-9_]*/.test(route)) {
        return true;
    }
    return false;
}
function normalizeAdjacentParameters(route) {
    let normalized = route;
    // Handle interception route patterns: (.):param -> (.)_NEXTSEP_:param
    normalized = normalized.replace(/(\([^)]*\)):([^/\s]+)/g, `$1${PARAM_SEPARATOR}:$2`);
    // Handle other adjacent parameter patterns: :param1:param2 -> :param1_NEXTSEP_:param2
    normalized = normalized.replace(/:([^:/\s)]+)(?=:)/g, `:$1${PARAM_SEPARATOR}`);
    return normalized;
}
function normalizeTokensForRegexp(tokens) {
    return tokens.map((token)=>{
        // Token union type: Token = string | TokenObject
        // Literal path segments are strings, parameters/wildcards are objects
        if (typeof token === 'object' && token !== null && // Not all token objects have 'modifier' property (e.g., simple text tokens)
        'modifier' in token && // Only repeating modifiers (* or +) cause the validation error
        // Other modifiers like '?' (optional) are fine
        (token.modifier === '*' || token.modifier === '+') && // Token objects can have different shapes depending on route pattern
        'prefix' in token && 'suffix' in token && // Both prefix and suffix must be empty strings
        // This is what causes the validation error in path-to-regexp
        token.prefix === '' && token.suffix === '') {
            // Add minimal prefix to satisfy path-to-regexp validation
            // We use '/' as it's the most common path delimiter and won't break route matching
            // The prefix gets used in regex generation but doesn't affect parameter extraction
            return {
                ...token,
                prefix: '/'
            };
        }
        return token;
    });
}
function stripNormalizedSeparators(pathname) {
    // Remove separator after interception route markers
    // Pattern: (.)_NEXTSEP_ -> (.), (..)_NEXTSEP_ -> (..), etc.
    // The separator appears after the closing paren of interception markers
    return pathname.replace(new RegExp(`\\)${PARAM_SEPARATOR}`, 'g'), ')');
}
function stripParameterSeparators(params) {
    const cleaned = {};
    for (const [key, value] of Object.entries(params)){
        if (typeof value === 'string') {
            // Remove the separator if it appears at the start of parameter values
            cleaned[key] = value.replace(new RegExp(`^${PARAM_SEPARATOR}`), '');
        } else if (Array.isArray(value)) {
            // Handle array parameters (from repeated route segments)
            cleaned[key] = value.map((item)=>typeof item === 'string' ? item.replace(new RegExp(`^${PARAM_SEPARATOR}`), '') : item);
        } else {
            cleaned[key] = value;
        }
    }
    return cleaned;
} //# sourceMappingURL=route-pattern-normalizer.js.map
}),
"[project]/learn-next/final/node_modules/next/dist/esm/shared/lib/router/utils/route-match-utils.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Client-safe utilities for route matching that don't import server-side
 * utilities to avoid bundling issues with Turbopack
 */ __turbopack_context__.s([
    "safeCompile",
    ()=>safeCompile,
    "safePathToRegexp",
    ()=>safePathToRegexp,
    "safeRegexpToFunction",
    ()=>safeRegexpToFunction,
    "safeRouteMatcher",
    ()=>safeRouteMatcher
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$path$2d$to$2d$regexp$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/learn-next/final/node_modules/next/dist/compiled/path-to-regexp/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$route$2d$pattern$2d$normalizer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/learn-next/final/node_modules/next/dist/esm/lib/route-pattern-normalizer.js [app-rsc] (ecmascript)");
;
;
function safePathToRegexp(route, keys, options) {
    if (typeof route !== 'string') {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$path$2d$to$2d$regexp$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["pathToRegexp"])(route, keys, options);
    }
    // Check if normalization is needed and cache the result
    const needsNormalization = (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$route$2d$pattern$2d$normalizer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["hasAdjacentParameterIssues"])(route);
    const routeToUse = needsNormalization ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$route$2d$pattern$2d$normalizer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["normalizeAdjacentParameters"])(route) : route;
    try {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$path$2d$to$2d$regexp$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["pathToRegexp"])(routeToUse, keys, options);
    } catch (error) {
        // Only try normalization if we haven't already normalized
        if (!needsNormalization) {
            try {
                const normalizedRoute = (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$route$2d$pattern$2d$normalizer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["normalizeAdjacentParameters"])(route);
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$path$2d$to$2d$regexp$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["pathToRegexp"])(normalizedRoute, keys, options);
            } catch (retryError) {
                // If that doesn't work, fall back to original error
                throw error;
            }
        }
        throw error;
    }
}
function safeCompile(route, options) {
    // Check if normalization is needed and cache the result
    const needsNormalization = (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$route$2d$pattern$2d$normalizer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["hasAdjacentParameterIssues"])(route);
    const routeToUse = needsNormalization ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$route$2d$pattern$2d$normalizer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["normalizeAdjacentParameters"])(route) : route;
    try {
        const compiler = (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$path$2d$to$2d$regexp$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["compile"])(routeToUse, options);
        // If we normalized the route, wrap the compiler to strip separators from output
        // The normalization inserts _NEXTSEP_ as a literal string in the pattern to satisfy
        // path-to-regexp validation, but we don't want it in the final compiled URL
        if (needsNormalization) {
            return (params)=>{
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$route$2d$pattern$2d$normalizer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["stripNormalizedSeparators"])(compiler(params));
            };
        }
        return compiler;
    } catch (error) {
        // Only try normalization if we haven't already normalized
        if (!needsNormalization) {
            try {
                const normalizedRoute = (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$route$2d$pattern$2d$normalizer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["normalizeAdjacentParameters"])(route);
                const compiler = (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$path$2d$to$2d$regexp$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["compile"])(normalizedRoute, options);
                // Wrap the compiler to strip separators from output
                return (params)=>{
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$route$2d$pattern$2d$normalizer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["stripNormalizedSeparators"])(compiler(params));
                };
            } catch (retryError) {
                // If that doesn't work, fall back to original error
                throw error;
            }
        }
        throw error;
    }
}
function safeRegexpToFunction(regexp, keys) {
    const originalMatcher = (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$path$2d$to$2d$regexp$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["regexpToFunction"])(regexp, keys || []);
    return (pathname)=>{
        const result = originalMatcher(pathname);
        if (!result) return false;
        // Clean parameters before returning
        return {
            ...result,
            params: (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$route$2d$pattern$2d$normalizer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["stripParameterSeparators"])(result.params)
        };
    };
}
function safeRouteMatcher(matcherFn) {
    return (pathname)=>{
        const result = matcherFn(pathname);
        if (!result) return false;
        // Clean parameters before returning
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$route$2d$pattern$2d$normalizer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["stripParameterSeparators"])(result);
    };
} //# sourceMappingURL=route-match-utils.js.map
}),
"[project]/learn-next/final/node_modules/next/dist/esm/shared/lib/router/utils/route-matcher.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getRouteMatcher",
    ()=>getRouteMatcher
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/learn-next/final/node_modules/next/dist/esm/shared/lib/utils.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$route$2d$match$2d$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/learn-next/final/node_modules/next/dist/esm/shared/lib/router/utils/route-match-utils.js [app-rsc] (ecmascript)");
;
;
function getRouteMatcher({ re, groups }) {
    const rawMatcher = (pathname)=>{
        const routeMatch = re.exec(pathname);
        if (!routeMatch) return false;
        const decode = (param)=>{
            try {
                return decodeURIComponent(param);
            } catch  {
                throw Object.defineProperty(new __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["DecodeError"]('failed to decode param'), "__NEXT_ERROR_CODE", {
                    value: "E528",
                    enumerable: false,
                    configurable: true
                });
            }
        };
        const params = {};
        for (const [key, group] of Object.entries(groups)){
            const match = routeMatch[group.pos];
            if (match !== undefined) {
                if (group.repeat) {
                    params[key] = match.split('/').map((entry)=>decode(entry));
                } else {
                    params[key] = decode(match);
                }
            }
        }
        return params;
    };
    // Wrap with safe matcher to handle parameter cleaning
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$route$2d$match$2d$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["safeRouteMatcher"])(rawMatcher);
} //# sourceMappingURL=route-matcher.js.map
}),
"[project]/learn-next/final/node_modules/next/dist/esm/shared/lib/escape-regexp.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// regexp is based on https://github.com/sindresorhus/escape-string-regexp
__turbopack_context__.s([
    "escapeStringRegexp",
    ()=>escapeStringRegexp
]);
const reHasRegExp = /[|\\{}()[\]^$+*?.-]/;
const reReplaceRegExp = /[|\\{}()[\]^$+*?.-]/g;
function escapeStringRegexp(str) {
    // see also: https://github.com/lodash/lodash/blob/2da024c3b4f9947a48517639de7560457cd4ec6c/escapeRegExp.js#L23
    if (reHasRegExp.test(str)) {
        return str.replace(reReplaceRegExp, '\\$&');
    }
    return str;
} //# sourceMappingURL=escape-regexp.js.map
}),
"[project]/learn-next/final/node_modules/next/dist/esm/shared/lib/router/utils/parse-loader-tree.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "parseLoaderTree",
    ()=>parseLoaderTree
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$segment$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/learn-next/final/node_modules/next/dist/esm/shared/lib/segment.js [app-rsc] (ecmascript)");
;
function parseLoaderTree(tree) {
    const [segment, parallelRoutes, modules] = tree;
    const { layout, template } = modules;
    let { page } = modules;
    // a __DEFAULT__ segment means that this route didn't match any of the
    // segments in the route, so we should use the default page
    page = segment === __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$segment$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["DEFAULT_SEGMENT_KEY"] ? modules.defaultPage : page;
    const conventionPath = layout?.[1] || template?.[1] || page?.[1];
    return {
        page,
        segment,
        modules,
        /* it can be either layout / template / page */ conventionPath,
        parallelRoutes
    };
} //# sourceMappingURL=parse-loader-tree.js.map
}),
"[project]/learn-next/final/node_modules/next/dist/esm/shared/lib/router/utils/get-dynamic-param.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PARAMETER_PATTERN",
    ()=>PARAMETER_PATTERN,
    "getDynamicParam",
    ()=>getDynamicParam,
    "interpolateParallelRouteParams",
    ()=>interpolateParallelRouteParams,
    "parseMatchedParameter",
    ()=>parseMatchedParameter,
    "parseParameter",
    ()=>parseParameter
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$invariant$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/learn-next/final/node_modules/next/dist/esm/shared/lib/invariant-error.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$parse$2d$loader$2d$tree$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/learn-next/final/node_modules/next/dist/esm/shared/lib/router/utils/parse-loader-tree.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$get$2d$segment$2d$param$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/learn-next/final/node_modules/next/dist/esm/shared/lib/router/utils/get-segment-param.js [app-rsc] (ecmascript)");
;
;
;
/**
 * Gets the value of a param from the params object. This correctly handles the
 * case where the param is a fallback route param and encodes the resulting
 * value.
 *
 * @param interpolatedParams - The params object.
 * @param segmentKey - The key of the segment.
 * @param fallbackRouteParams - The fallback route params.
 * @returns The value of the param.
 */ function getParamValue(interpolatedParams, segmentKey, fallbackRouteParams) {
    let value = interpolatedParams[segmentKey];
    if (fallbackRouteParams?.has(segmentKey)) {
        // We know that the fallback route params has the segment key because we
        // checked that above.
        const [searchValue] = fallbackRouteParams.get(segmentKey);
        value = searchValue;
    } else if (Array.isArray(value)) {
        value = value.map((i)=>encodeURIComponent(i));
    } else if (typeof value === 'string') {
        value = encodeURIComponent(value);
    }
    return value;
}
function interpolateParallelRouteParams(loaderTree, params, pagePath, fallbackRouteParams) {
    const interpolated = structuredClone(params);
    // Stack-based traversal with depth tracking
    const stack = [
        {
            tree: loaderTree,
            depth: 0
        }
    ];
    // Derive value from pagePath based on depth and parameter type
    const pathSegments = pagePath.split('/').slice(1) // Remove first empty string
    ;
    while(stack.length > 0){
        const { tree, depth } = stack.pop();
        const { segment, parallelRoutes } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$parse$2d$loader$2d$tree$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["parseLoaderTree"])(tree);
        // Check if current segment contains a parameter
        const segmentParam = (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$get$2d$segment$2d$param$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getSegmentParam"])(segment);
        if (segmentParam && !interpolated.hasOwnProperty(segmentParam.param) && // If the param is in the fallback route params, we don't need to
        // interpolate it because it's already marked as being unknown.
        !fallbackRouteParams?.has(segmentParam.param)) {
            switch(segmentParam.type){
                case 'catchall':
                case 'optional-catchall':
                case 'catchall-intercepted':
                    // For catchall parameters, take all remaining segments from this depth
                    const remainingSegments = pathSegments.slice(depth);
                    // Process each segment to handle any dynamic params
                    const processedSegments = remainingSegments.flatMap((pathSegment)=>{
                        const param = (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$get$2d$segment$2d$param$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getSegmentParam"])(pathSegment);
                        // If the segment matches a param, return the param value otherwise,
                        // it's a static segment, so just return that. We don't use the
                        // `getParamValue` function here because we don't want the values to
                        // be encoded, that's handled on get by the `getDynamicParam`
                        // function.
                        return param ? interpolated[param.param] : pathSegment;
                    }).filter((s)=>s !== undefined);
                    if (processedSegments.length > 0) {
                        interpolated[segmentParam.param] = processedSegments;
                    }
                    break;
                case 'dynamic':
                case 'dynamic-intercepted':
                    // For regular dynamic parameters, take the segment at this depth
                    if (depth < pathSegments.length) {
                        const pathSegment = pathSegments[depth];
                        const param = (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$get$2d$segment$2d$param$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getSegmentParam"])(pathSegment);
                        interpolated[segmentParam.param] = param ? interpolated[param.param] : pathSegment;
                    }
                    break;
                default:
                    segmentParam.type;
            }
        }
        // Calculate next depth - increment if this is not a route group and not empty
        let nextDepth = depth;
        const isRouteGroup = segment.startsWith('(') && segment.endsWith(')');
        if (!isRouteGroup && segment !== '') {
            nextDepth++;
        }
        // Add all parallel routes to the stack for processing
        for (const route of Object.values(parallelRoutes)){
            stack.push({
                tree: route,
                depth: nextDepth
            });
        }
    }
    return interpolated;
}
function getDynamicParam(interpolatedParams, segmentKey, dynamicParamType, fallbackRouteParams) {
    let value = getParamValue(interpolatedParams, segmentKey, fallbackRouteParams);
    // handle the case where an optional catchall does not have a value,
    // e.g. `/dashboard/[[...slug]]` when requesting `/dashboard`
    if (!value || value.length === 0) {
        if (dynamicParamType === 'oc') {
            return {
                param: segmentKey,
                value: null,
                type: dynamicParamType,
                treeSegment: [
                    segmentKey,
                    '',
                    dynamicParamType
                ]
            };
        }
        throw Object.defineProperty(new __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$invariant$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["InvariantError"](`Missing value for segment key: "${segmentKey}" with dynamic param type: ${dynamicParamType}`), "__NEXT_ERROR_CODE", {
            value: "E864",
            enumerable: false,
            configurable: true
        });
    }
    return {
        param: segmentKey,
        // The value that is passed to user code.
        value,
        // The value that is rendered in the router tree.
        treeSegment: [
            segmentKey,
            Array.isArray(value) ? value.join('/') : value,
            dynamicParamType
        ],
        type: dynamicParamType
    };
}
const PARAMETER_PATTERN = /^([^[]*)\[((?:\[[^\]]*\])|[^\]]+)\](.*)$/;
function parseParameter(param) {
    const match = param.match(PARAMETER_PATTERN);
    if (!match) {
        return parseMatchedParameter(param);
    }
    return parseMatchedParameter(match[2]);
}
function parseMatchedParameter(param) {
    const optional = param.startsWith('[') && param.endsWith(']');
    if (optional) {
        param = param.slice(1, -1);
    }
    const repeat = param.startsWith('...');
    if (repeat) {
        param = param.slice(3);
    }
    return {
        key: param,
        repeat,
        optional
    };
} //# sourceMappingURL=get-dynamic-param.js.map
}),
"[project]/learn-next/final/node_modules/next/dist/esm/shared/lib/router/utils/route-regex.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getNamedMiddlewareRegex",
    ()=>getNamedMiddlewareRegex,
    "getNamedRouteRegex",
    ()=>getNamedRouteRegex,
    "getRouteRegex",
    ()=>getRouteRegex
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/learn-next/final/node_modules/next/dist/esm/lib/constants.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$interception$2d$routes$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/learn-next/final/node_modules/next/dist/esm/shared/lib/router/utils/interception-routes.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$escape$2d$regexp$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/learn-next/final/node_modules/next/dist/esm/shared/lib/escape-regexp.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$remove$2d$trailing$2d$slash$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/learn-next/final/node_modules/next/dist/esm/shared/lib/router/utils/remove-trailing-slash.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$get$2d$dynamic$2d$param$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/learn-next/final/node_modules/next/dist/esm/shared/lib/router/utils/get-dynamic-param.js [app-rsc] (ecmascript)");
;
;
;
;
;
function getParametrizedRoute(route, includeSuffix, includePrefix) {
    const groups = {};
    let groupIndex = 1;
    const segments = [];
    for (const segment of (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$remove$2d$trailing$2d$slash$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["removeTrailingSlash"])(route).slice(1).split('/')){
        const markerMatch = __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$interception$2d$routes$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["INTERCEPTION_ROUTE_MARKERS"].find((m)=>segment.startsWith(m));
        const paramMatches = segment.match(__TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$get$2d$dynamic$2d$param$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PARAMETER_PATTERN"]) // Check for parameters
        ;
        if (markerMatch && paramMatches && paramMatches[2]) {
            const { key, optional, repeat } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$get$2d$dynamic$2d$param$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["parseMatchedParameter"])(paramMatches[2]);
            groups[key] = {
                pos: groupIndex++,
                repeat,
                optional
            };
            segments.push(`/${(0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$escape$2d$regexp$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["escapeStringRegexp"])(markerMatch)}([^/]+?)`);
        } else if (paramMatches && paramMatches[2]) {
            const { key, repeat, optional } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$get$2d$dynamic$2d$param$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["parseMatchedParameter"])(paramMatches[2]);
            groups[key] = {
                pos: groupIndex++,
                repeat,
                optional
            };
            if (includePrefix && paramMatches[1]) {
                segments.push(`/${(0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$escape$2d$regexp$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["escapeStringRegexp"])(paramMatches[1])}`);
            }
            let s = repeat ? optional ? '(?:/(.+?))?' : '/(.+?)' : '/([^/]+?)';
            // Remove the leading slash if includePrefix already added it.
            if (includePrefix && paramMatches[1]) {
                s = s.substring(1);
            }
            segments.push(s);
        } else {
            segments.push(`/${(0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$escape$2d$regexp$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["escapeStringRegexp"])(segment)}`);
        }
        // If there's a suffix, add it to the segments if it's enabled.
        if (includeSuffix && paramMatches && paramMatches[3]) {
            segments.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$escape$2d$regexp$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["escapeStringRegexp"])(paramMatches[3]));
        }
    }
    return {
        parameterizedRoute: segments.join(''),
        groups
    };
}
function getRouteRegex(normalizedRoute, { includeSuffix = false, includePrefix = false, excludeOptionalTrailingSlash = false } = {}) {
    const { parameterizedRoute, groups } = getParametrizedRoute(normalizedRoute, includeSuffix, includePrefix);
    let re = parameterizedRoute;
    if (!excludeOptionalTrailingSlash) {
        re += '(?:/)?';
    }
    return {
        re: new RegExp(`^${re}$`),
        groups: groups
    };
}
/**
 * Builds a function to generate a minimal routeKey using only a-z and minimal
 * number of characters.
 */ function buildGetSafeRouteKey() {
    let i = 0;
    return ()=>{
        let routeKey = '';
        let j = ++i;
        while(j > 0){
            routeKey += String.fromCharCode(97 + (j - 1) % 26);
            j = Math.floor((j - 1) / 26);
        }
        return routeKey;
    };
}
function getSafeKeyFromSegment({ interceptionMarker, getSafeRouteKey, segment, routeKeys, keyPrefix, backreferenceDuplicateKeys }) {
    const { key, optional, repeat } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$get$2d$dynamic$2d$param$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["parseMatchedParameter"])(segment);
    // replace any non-word characters since they can break
    // the named regex
    let cleanedKey = key.replace(/\W/g, '');
    if (keyPrefix) {
        cleanedKey = `${keyPrefix}${cleanedKey}`;
    }
    let invalidKey = false;
    // check if the key is still invalid and fallback to using a known
    // safe key
    if (cleanedKey.length === 0 || cleanedKey.length > 30) {
        invalidKey = true;
    }
    if (!isNaN(parseInt(cleanedKey.slice(0, 1)))) {
        invalidKey = true;
    }
    if (invalidKey) {
        cleanedKey = getSafeRouteKey();
    }
    const duplicateKey = cleanedKey in routeKeys;
    if (keyPrefix) {
        routeKeys[cleanedKey] = `${keyPrefix}${key}`;
    } else {
        routeKeys[cleanedKey] = key;
    }
    // if the segment has an interception marker, make sure that's part of the regex pattern
    // this is to ensure that the route with the interception marker doesn't incorrectly match
    // the non-intercepted route (ie /app/(.)[username] should not match /app/[username])
    const interceptionPrefix = interceptionMarker ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$escape$2d$regexp$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["escapeStringRegexp"])(interceptionMarker) : '';
    let pattern;
    if (duplicateKey && backreferenceDuplicateKeys) {
        // Use a backreference to the key to ensure that the key is the same value
        // in each of the placeholders.
        pattern = `\\k<${cleanedKey}>`;
    } else if (repeat) {
        pattern = `(?<${cleanedKey}>.+?)`;
    } else {
        pattern = `(?<${cleanedKey}>[^/]+?)`;
    }
    return {
        key,
        pattern: optional ? `(?:/${interceptionPrefix}${pattern})?` : `/${interceptionPrefix}${pattern}`,
        cleanedKey: cleanedKey,
        optional,
        repeat
    };
}
function getNamedParametrizedRoute(route, prefixRouteKeys, includeSuffix, includePrefix, backreferenceDuplicateKeys, reference = {
    names: {},
    intercepted: {}
}) {
    const getSafeRouteKey = buildGetSafeRouteKey();
    const routeKeys = {};
    const segments = [];
    const inverseParts = [];
    // Ensure we don't mutate the original reference object.
    reference = structuredClone(reference);
    for (const segment of (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$remove$2d$trailing$2d$slash$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["removeTrailingSlash"])(route).slice(1).split('/')){
        const hasInterceptionMarker = __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$interception$2d$routes$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["INTERCEPTION_ROUTE_MARKERS"].some((m)=>segment.startsWith(m));
        const paramMatches = segment.match(__TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$get$2d$dynamic$2d$param$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PARAMETER_PATTERN"]) // Check for parameters
        ;
        const interceptionMarker = hasInterceptionMarker ? paramMatches?.[1] : undefined;
        let keyPrefix;
        if (interceptionMarker && paramMatches?.[2]) {
            keyPrefix = prefixRouteKeys ? __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["NEXT_INTERCEPTION_MARKER_PREFIX"] : undefined;
            reference.intercepted[paramMatches[2]] = interceptionMarker;
        } else if (paramMatches?.[2] && reference.intercepted[paramMatches[2]]) {
            keyPrefix = prefixRouteKeys ? __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["NEXT_INTERCEPTION_MARKER_PREFIX"] : undefined;
        } else {
            keyPrefix = prefixRouteKeys ? __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["NEXT_QUERY_PARAM_PREFIX"] : undefined;
        }
        if (interceptionMarker && paramMatches && paramMatches[2]) {
            // If there's an interception marker, add it to the segments.
            const { key, pattern, cleanedKey, repeat, optional } = getSafeKeyFromSegment({
                getSafeRouteKey,
                interceptionMarker,
                segment: paramMatches[2],
                routeKeys,
                keyPrefix,
                backreferenceDuplicateKeys
            });
            segments.push(pattern);
            inverseParts.push(`/${paramMatches[1]}:${reference.names[key] ?? cleanedKey}${repeat ? optional ? '*' : '+' : ''}`);
            reference.names[key] ??= cleanedKey;
        } else if (paramMatches && paramMatches[2]) {
            // If there's a prefix, add it to the segments if it's enabled.
            if (includePrefix && paramMatches[1]) {
                segments.push(`/${(0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$escape$2d$regexp$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["escapeStringRegexp"])(paramMatches[1])}`);
                inverseParts.push(`/${paramMatches[1]}`);
            }
            const { key, pattern, cleanedKey, repeat, optional } = getSafeKeyFromSegment({
                getSafeRouteKey,
                segment: paramMatches[2],
                routeKeys,
                keyPrefix,
                backreferenceDuplicateKeys
            });
            // Remove the leading slash if includePrefix already added it.
            let s = pattern;
            if (includePrefix && paramMatches[1]) {
                s = s.substring(1);
            }
            segments.push(s);
            inverseParts.push(`/:${reference.names[key] ?? cleanedKey}${repeat ? optional ? '*' : '+' : ''}`);
            reference.names[key] ??= cleanedKey;
        } else {
            segments.push(`/${(0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$escape$2d$regexp$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["escapeStringRegexp"])(segment)}`);
            inverseParts.push(`/${segment}`);
        }
        // If there's a suffix, add it to the segments if it's enabled.
        if (includeSuffix && paramMatches && paramMatches[3]) {
            segments.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$escape$2d$regexp$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["escapeStringRegexp"])(paramMatches[3]));
            inverseParts.push(paramMatches[3]);
        }
    }
    return {
        namedParameterizedRoute: segments.join(''),
        routeKeys,
        pathToRegexpPattern: inverseParts.join(''),
        reference
    };
}
function getNamedRouteRegex(normalizedRoute, options) {
    const result = getNamedParametrizedRoute(normalizedRoute, options.prefixRouteKeys, options.includeSuffix ?? false, options.includePrefix ?? false, options.backreferenceDuplicateKeys ?? false, options.reference);
    let namedRegex = result.namedParameterizedRoute;
    if (!options.excludeOptionalTrailingSlash) {
        namedRegex += '(?:/)?';
    }
    return {
        ...getRouteRegex(normalizedRoute, options),
        namedRegex: `^${namedRegex}$`,
        routeKeys: result.routeKeys,
        pathToRegexpPattern: result.pathToRegexpPattern,
        reference: result.reference
    };
}
function getNamedMiddlewareRegex(normalizedRoute, options) {
    const { parameterizedRoute } = getParametrizedRoute(normalizedRoute, false, false);
    const { catchAll = true } = options;
    if (parameterizedRoute === '/') {
        let catchAllRegex = catchAll ? '.*' : '';
        return {
            namedRegex: `^/${catchAllRegex}$`
        };
    }
    const { namedParameterizedRoute } = getNamedParametrizedRoute(normalizedRoute, false, false, false, false, undefined);
    let catchAllGroupedRegex = catchAll ? '(?:(/.*)?)' : '';
    return {
        namedRegex: `^${namedParameterizedRoute}${catchAllGroupedRegex}$`
    };
} //# sourceMappingURL=route-regex.js.map
}),
"[project]/learn-next/final/node_modules/next/dist/esm/server/app-render/get-short-dynamic-param-type.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "dynamicParamTypes",
    ()=>dynamicParamTypes
]);
const dynamicParamTypes = {
    catchall: 'c',
    'catchall-intercepted': 'ci',
    'optional-catchall': 'oc',
    dynamic: 'd',
    'dynamic-intercepted': 'di'
}; //# sourceMappingURL=get-short-dynamic-param-type.js.map
}),
"[project]/learn-next/final/node_modules/next/dist/esm/server/request/fallback-params.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createOpaqueFallbackRouteParams",
    ()=>createOpaqueFallbackRouteParams,
    "getFallbackRouteParams",
    ()=>getFallbackRouteParams
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$segment$2d$config$2f$app$2f$app$2d$segments$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/learn-next/final/node_modules/next/dist/esm/build/segment-config/app/app-segments.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$invariant$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/learn-next/final/node_modules/next/dist/esm/shared/lib/invariant-error.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$route$2d$matcher$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/learn-next/final/node_modules/next/dist/esm/shared/lib/router/utils/route-matcher.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$route$2d$regex$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/learn-next/final/node_modules/next/dist/esm/shared/lib/router/utils/route-regex.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$get$2d$short$2d$dynamic$2d$param$2d$type$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/learn-next/final/node_modules/next/dist/esm/server/app-render/get-short-dynamic-param-type.js [app-rsc] (ecmascript)");
;
;
;
;
;
function getParamKeys(page) {
    const pattern = (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$route$2d$regex$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getRouteRegex"])(page);
    const matcher = (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$route$2d$matcher$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getRouteMatcher"])(pattern);
    // Get the default list of allowed params.
    return Object.keys(matcher(page));
}
function createOpaqueFallbackRouteParams(fallbackRouteParams) {
    // If there are no fallback route params, we can return early.
    if (fallbackRouteParams.length === 0) return null;
    // As we're creating unique keys for each of the dynamic route params, we only
    // need to generate a unique ID once per request because each of the keys will
    // be also be unique.
    const uniqueID = Math.random().toString(16).slice(2);
    const keys = new Map();
    // Generate a unique key for the fallback route param, if this key is found
    // in the static output, it represents a bug in cache components.
    for (const { paramName, paramType } of fallbackRouteParams){
        keys.set(paramName, [
            `%%drp:${paramName}:${uniqueID}%%`,
            __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$get$2d$short$2d$dynamic$2d$param$2d$type$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["dynamicParamTypes"][paramType]
        ]);
    }
    return keys;
}
function getFallbackRouteParams(page, routeModule) {
    // First, get the fallback route params based on the provided page.
    const unknownParamKeys = new Set(getParamKeys(page));
    // Needed when processing fallback route params for catchall routes in
    // parallel segments, derive from pathname. This is similar to
    // getDynamicParam's pagePath parsing logic.
    const pathSegments = page.split('/').filter(Boolean);
    const collected = (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$segment$2d$config$2f$app$2f$app$2d$segments$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["collectFallbackRouteParams"])(routeModule);
    // Then, we have to get the fallback route params from the segments that are
    // associated with parallel route segments.
    const fallbackRouteParams = [];
    for (const fallbackRouteParam of collected){
        if (fallbackRouteParam.isParallelRouteParam) {
            // Try to see if we can resolve this parameter from the page that was
            // passed in.
            if (unknownParamKeys.has(fallbackRouteParam.paramName)) {
                continue;
            }
            if (fallbackRouteParam.paramType === 'optional-catchall' || fallbackRouteParam.paramType === 'catchall') {
                // If there are any fallback route segments then we can't use the
                // pathname to derive the value because it's not complete. We can
                // make this assumption because the routes are always resolved left
                // to right and the catchall is always the last segment, so any
                // route parameters that are unknown will always contribute to the
                // pathname and therefore the catchall param too.
                if (collected.some((param)=>!param.isParallelRouteParam && unknownParamKeys.has(param.paramName))) {
                    fallbackRouteParams.push(fallbackRouteParam);
                    continue;
                }
                if (pathSegments.length === 0 && fallbackRouteParam.paramType !== 'optional-catchall') {
                    // We shouldn't be able to match a catchall segment without any path
                    // segments if it's not an optional catchall.
                    throw Object.defineProperty(new __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$invariant$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["InvariantError"](`Unexpected empty path segments match for a pathname "${page}" with param "${fallbackRouteParam.paramName}" of type "${fallbackRouteParam.paramType}"`), "__NEXT_ERROR_CODE", {
                        value: "E792",
                        enumerable: false,
                        configurable: true
                    });
                }
            // The path segments are not empty, and the segments didn't contain any
            // unknown params, so we know that this particular fallback route param
            // route param is not actually unknown, and is known. We can skip adding
            // it to the fallback route params.
            } else {
                // This is some other type of route param that shouldn't get resolved
                // statically.
                throw Object.defineProperty(new __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$invariant$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["InvariantError"](`Unexpected match for a pathname "${page}" with a param "${fallbackRouteParam.paramName}" of type "${fallbackRouteParam.paramType}"`), "__NEXT_ERROR_CODE", {
                    value: "E791",
                    enumerable: false,
                    configurable: true
                });
            }
        } else if (unknownParamKeys.has(fallbackRouteParam.paramName)) {
            // As this is a non-parallel route segment, and it exists in the unknown
            // param keys, we know it's a fallback route param.
            fallbackRouteParams.push(fallbackRouteParam);
        }
    }
    return createOpaqueFallbackRouteParams(fallbackRouteParams);
} //# sourceMappingURL=fallback-params.js.map
}),
"[project]/learn-next/final/node_modules/next/dist/esm/server/app-render/encryption-utils.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "arrayBufferToString",
    ()=>arrayBufferToString,
    "decrypt",
    ()=>decrypt,
    "encrypt",
    ()=>encrypt,
    "getActionEncryptionKey",
    ()=>getActionEncryptionKey,
    "getClientReferenceManifestForRsc",
    ()=>getClientReferenceManifestForRsc,
    "getServerModuleMap",
    ()=>getServerModuleMap,
    "setReferenceManifestsSingleton",
    ()=>setReferenceManifestsSingleton,
    "stringToUint8Array",
    ()=>stringToUint8Array
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$invariant$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/learn-next/final/node_modules/next/dist/esm/shared/lib/invariant-error.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$app$2d$paths$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/learn-next/final/node_modules/next/dist/esm/shared/lib/router/utils/app-paths.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$next$2f$dist$2f$server$2f$app$2d$render$2f$work$2d$async$2d$storage$2e$external$2e$js__$5b$external$5d$__$28$next$2f$dist$2f$server$2f$app$2d$render$2f$work$2d$async$2d$storage$2e$external$2e$js$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)");
;
;
;
let __next_loaded_action_key;
function arrayBufferToString(buffer) {
    const bytes = new Uint8Array(buffer);
    const len = bytes.byteLength;
    // @anonrig: V8 has a limit of 65535 arguments in a function.
    // For len < 65535, this is faster.
    // https://github.com/vercel/next.js/pull/56377#pullrequestreview-1656181623
    if (len < 65535) {
        return String.fromCharCode.apply(null, bytes);
    }
    let binary = '';
    for(let i = 0; i < len; i++){
        binary += String.fromCharCode(bytes[i]);
    }
    return binary;
}
function stringToUint8Array(binary) {
    const len = binary.length;
    const arr = new Uint8Array(len);
    for(let i = 0; i < len; i++){
        arr[i] = binary.charCodeAt(i);
    }
    return arr;
}
function encrypt(key, iv, data) {
    return crypto.subtle.encrypt({
        name: 'AES-GCM',
        iv
    }, key, data);
}
function decrypt(key, iv, data) {
    return crypto.subtle.decrypt({
        name: 'AES-GCM',
        iv
    }, key, data);
}
// This is a global singleton that is used to encode/decode the action bound args from
// the closure. This can't be using a AsyncLocalStorage as it might happen on the module
// level. Since the client reference manifest won't be mutated, let's use a global singleton
// to keep it.
const SERVER_ACTION_MANIFESTS_SINGLETON = Symbol.for('next.server.action-manifests');
function setReferenceManifestsSingleton({ page, clientReferenceManifest, serverActionsManifest, serverModuleMap }) {
    var _globalThis_SERVER_ACTION_MANIFESTS_SINGLETON;
    // @ts-expect-error
    const clientReferenceManifestsPerPage = (_globalThis_SERVER_ACTION_MANIFESTS_SINGLETON = globalThis[SERVER_ACTION_MANIFESTS_SINGLETON]) == null ? void 0 : _globalThis_SERVER_ACTION_MANIFESTS_SINGLETON.clientReferenceManifestsPerPage;
    // @ts-expect-error
    globalThis[SERVER_ACTION_MANIFESTS_SINGLETON] = {
        clientReferenceManifestsPerPage: {
            ...clientReferenceManifestsPerPage,
            [(0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$app$2d$paths$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["normalizeAppPath"])(page)]: clientReferenceManifest
        },
        serverActionsManifest,
        serverModuleMap
    };
}
function getServerModuleMap() {
    const serverActionsManifestSingleton = globalThis[SERVER_ACTION_MANIFESTS_SINGLETON];
    if (!serverActionsManifestSingleton) {
        throw Object.defineProperty(new __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$invariant$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["InvariantError"]('Missing manifest for Server Actions.'), "__NEXT_ERROR_CODE", {
            value: "E606",
            enumerable: false,
            configurable: true
        });
    }
    return serverActionsManifestSingleton.serverModuleMap;
}
function getClientReferenceManifestForRsc() {
    const serverActionsManifestSingleton = globalThis[SERVER_ACTION_MANIFESTS_SINGLETON];
    if (!serverActionsManifestSingleton) {
        throw Object.defineProperty(new __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$invariant$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["InvariantError"]('Missing manifest for Server Actions.'), "__NEXT_ERROR_CODE", {
            value: "E606",
            enumerable: false,
            configurable: true
        });
    }
    const { clientReferenceManifestsPerPage } = serverActionsManifestSingleton;
    const workStore = __TURBOPACK__imported__module__$5b$externals$5d2f$next$2f$dist$2f$server$2f$app$2d$render$2f$work$2d$async$2d$storage$2e$external$2e$js__$5b$external$5d$__$28$next$2f$dist$2f$server$2f$app$2d$render$2f$work$2d$async$2d$storage$2e$external$2e$js$2c$__cjs$29$__["workAsyncStorage"].getStore();
    if (!workStore) {
        // If there's no work store defined, we can assume that a client reference
        // manifest is needed during module evaluation, e.g. to create a server
        // action using a higher-order function. This might also use client
        // components which need to be serialized by Flight, and therefore client
        // references need to be resolvable. To make this work, we're returning a
        // merged manifest across all pages. This is fine as long as the module IDs
        // are not page specific, which they are not for Webpack. TODO: Fix this in
        // Turbopack.
        return mergeClientReferenceManifests(clientReferenceManifestsPerPage);
    }
    const clientReferenceManifest = clientReferenceManifestsPerPage[workStore.route];
    if (!clientReferenceManifest) {
        throw Object.defineProperty(new __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$invariant$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["InvariantError"](`Missing Client Reference Manifest for ${workStore.route}.`), "__NEXT_ERROR_CODE", {
            value: "E570",
            enumerable: false,
            configurable: true
        });
    }
    return clientReferenceManifest;
}
async function getActionEncryptionKey() {
    if (__next_loaded_action_key) {
        return __next_loaded_action_key;
    }
    const serverActionsManifestSingleton = globalThis[SERVER_ACTION_MANIFESTS_SINGLETON];
    if (!serverActionsManifestSingleton) {
        throw Object.defineProperty(new __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$invariant$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["InvariantError"]('Missing manifest for Server Actions.'), "__NEXT_ERROR_CODE", {
            value: "E606",
            enumerable: false,
            configurable: true
        });
    }
    const rawKey = process.env.NEXT_SERVER_ACTIONS_ENCRYPTION_KEY || serverActionsManifestSingleton.serverActionsManifest.encryptionKey;
    if (rawKey === undefined) {
        throw Object.defineProperty(new __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$invariant$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["InvariantError"]('Missing encryption key for Server Actions'), "__NEXT_ERROR_CODE", {
            value: "E571",
            enumerable: false,
            configurable: true
        });
    }
    __next_loaded_action_key = await crypto.subtle.importKey('raw', stringToUint8Array(atob(rawKey)), 'AES-GCM', true, [
        'encrypt',
        'decrypt'
    ]);
    return __next_loaded_action_key;
}
function mergeClientReferenceManifests(clientReferenceManifestsPerPage) {
    const clientReferenceManifests = Object.values(clientReferenceManifestsPerPage);
    const mergedClientReferenceManifest = {
        clientModules: {},
        edgeRscModuleMapping: {},
        rscModuleMapping: {}
    };
    for (const clientReferenceManifest of clientReferenceManifests){
        mergedClientReferenceManifest.clientModules = {
            ...mergedClientReferenceManifest.clientModules,
            ...clientReferenceManifest.clientModules
        };
        mergedClientReferenceManifest.edgeRscModuleMapping = {
            ...mergedClientReferenceManifest.edgeRscModuleMapping,
            ...clientReferenceManifest.edgeRscModuleMapping
        };
        mergedClientReferenceManifest.rscModuleMapping = {
            ...mergedClientReferenceManifest.rscModuleMapping,
            ...clientReferenceManifest.rscModuleMapping
        };
    }
    return mergedClientReferenceManifest;
} //# sourceMappingURL=encryption-utils.js.map
}),
"[project]/learn-next/final/node_modules/next/dist/esm/shared/lib/router/utils/html-bots.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// This regex contains the bots that we need to do a blocking render for and can't safely stream the response
// due to how they parse the DOM. For example, they might explicitly check for metadata in the `head` tag, so we can't stream metadata tags after the `head` was sent.
// Note: The pattern [\w-]+-Google captures all Google crawlers with "-Google" suffix (e.g., Mediapartners-Google, AdsBot-Google, Storebot-Google)
// as well as crawlers starting with "Google-" (e.g., Google-PageRenderer, Google-InspectionTool)
__turbopack_context__.s([
    "HTML_LIMITED_BOT_UA_RE",
    ()=>HTML_LIMITED_BOT_UA_RE
]);
const HTML_LIMITED_BOT_UA_RE = /[\w-]+-Google|Google-[\w-]+|Chrome-Lighthouse|Slurp|DuckDuckBot|baiduspider|yandex|sogou|bitlybot|tumblr|vkShare|quora link preview|redditbot|ia_archiver|Bingbot|BingPreview|applebot|facebookexternalhit|facebookcatalog|Twitterbot|LinkedInBot|Slackbot|Discordbot|WhatsApp|SkypeUriPreview|Yeti|googleweblight/i; //# sourceMappingURL=html-bots.js.map
}),
"[project]/learn-next/final/node_modules/next/dist/esm/shared/lib/router/utils/is-bot.js [app-rsc] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HTML_LIMITED_BOT_UA_RE_STRING",
    ()=>HTML_LIMITED_BOT_UA_RE_STRING,
    "getBotType",
    ()=>getBotType,
    "isBot",
    ()=>isBot
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$html$2d$bots$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/learn-next/final/node_modules/next/dist/esm/shared/lib/router/utils/html-bots.js [app-rsc] (ecmascript)");
;
// Bot crawler that will spin up a headless browser and execute JS.
// Only the main Googlebot search crawler executes JavaScript, not other Google crawlers.
// x-ref: https://developers.google.com/search/docs/crawling-indexing/google-common-crawlers
// This regex specifically matches "Googlebot" but NOT "Mediapartners-Google", "AdsBot-Google", etc.
const HEADLESS_BROWSER_BOT_UA_RE = /Googlebot(?!-)|Googlebot$/i;
const HTML_LIMITED_BOT_UA_RE_STRING = __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$html$2d$bots$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["HTML_LIMITED_BOT_UA_RE"].source;
;
function isDomBotUA(userAgent) {
    return HEADLESS_BROWSER_BOT_UA_RE.test(userAgent);
}
function isHtmlLimitedBotUA(userAgent) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$html$2d$bots$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["HTML_LIMITED_BOT_UA_RE"].test(userAgent);
}
function isBot(userAgent) {
    return isDomBotUA(userAgent) || isHtmlLimitedBotUA(userAgent);
}
function getBotType(userAgent) {
    if (isDomBotUA(userAgent)) {
        return 'dom';
    }
    if (isHtmlLimitedBotUA(userAgent)) {
        return 'html';
    }
    return undefined;
} //# sourceMappingURL=is-bot.js.map
}),
"[project]/learn-next/final/node_modules/next/dist/esm/server/lib/streaming-metadata.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isHtmlBotRequest",
    ()=>isHtmlBotRequest,
    "shouldServeStreamingMetadata",
    ()=>shouldServeStreamingMetadata
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$is$2d$bot$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/learn-next/final/node_modules/next/dist/esm/shared/lib/router/utils/is-bot.js [app-rsc] (ecmascript) <locals>");
;
function shouldServeStreamingMetadata(userAgent, htmlLimitedBots) {
    const blockingMetadataUARegex = new RegExp(htmlLimitedBots || __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$is$2d$bot$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["HTML_LIMITED_BOT_UA_RE_STRING"], 'i');
    // Only block metadata for HTML-limited bots
    if (userAgent && blockingMetadataUARegex.test(userAgent)) {
        return false;
    }
    return true;
}
function isHtmlBotRequest(req) {
    const ua = req.headers['user-agent'] || '';
    const botType = (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$is$2d$bot$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getBotType"])(ua);
    return botType === 'html';
} //# sourceMappingURL=streaming-metadata.js.map
}),
"[project]/learn-next/final/node_modules/next/dist/esm/server/app-render/action-utils.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createServerModuleMap",
    ()=>createServerModuleMap,
    "selectWorkerForForwarding",
    ()=>selectWorkerForForwarding
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$app$2d$paths$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/learn-next/final/node_modules/next/dist/esm/shared/lib/router/utils/app-paths.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$path$2d$has$2d$prefix$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/learn-next/final/node_modules/next/dist/esm/shared/lib/router/utils/path-has-prefix.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$remove$2d$path$2d$prefix$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/learn-next/final/node_modules/next/dist/esm/shared/lib/router/utils/remove-path-prefix.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$next$2f$dist$2f$server$2f$app$2d$render$2f$work$2d$async$2d$storage$2e$external$2e$js__$5b$external$5d$__$28$next$2f$dist$2f$server$2f$app$2d$render$2f$work$2d$async$2d$storage$2e$external$2e$js$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)");
;
;
;
;
function createServerModuleMap({ serverActionsManifest }) {
    return new Proxy({}, {
        get: (_, id)=>{
            var _serverActionsManifest__id, _serverActionsManifest_;
            const workers = (_serverActionsManifest_ = serverActionsManifest[("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : 'node']) == null ? void 0 : (_serverActionsManifest__id = _serverActionsManifest_[id]) == null ? void 0 : _serverActionsManifest__id.workers;
            if (!workers) {
                return undefined;
            }
            const workStore = __TURBOPACK__imported__module__$5b$externals$5d2f$next$2f$dist$2f$server$2f$app$2d$render$2f$work$2d$async$2d$storage$2e$external$2e$js__$5b$external$5d$__$28$next$2f$dist$2f$server$2f$app$2d$render$2f$work$2d$async$2d$storage$2e$external$2e$js$2c$__cjs$29$__["workAsyncStorage"].getStore();
            let workerEntry;
            if (workStore) {
                workerEntry = workers[normalizeWorkerPageName(workStore.page)];
            } else {
                // If there's no work store defined, we can assume that a server
                // module map is needed during module evaluation, e.g. to create a
                // server action using a higher-order function. Therefore it should be
                // safe to return any entry from the manifest that matches the action
                // ID. They all refer to the same module ID, which must also exist in
                // the current page bundle. TODO: This is currently not guaranteed in
                // Turbopack, and needs to be fixed.
                workerEntry = Object.values(workers).at(0);
            }
            if (!workerEntry) {
                return undefined;
            }
            const { moduleId, async } = workerEntry;
            return {
                id: moduleId,
                name: id,
                chunks: [],
                async
            };
        }
    });
}
function selectWorkerForForwarding(actionId, pageName, serverActionsManifest) {
    var _serverActionsManifest__actionId;
    const workers = (_serverActionsManifest__actionId = serverActionsManifest[("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : 'node'][actionId]) == null ? void 0 : _serverActionsManifest__actionId.workers;
    const workerName = normalizeWorkerPageName(pageName);
    // no workers, nothing to forward to
    if (!workers) return;
    // if there is a worker for this page, no need to forward it.
    if (workers[workerName]) {
        return;
    }
    // otherwise, grab the first worker that has a handler for this action id
    return denormalizeWorkerPageName(Object.keys(workers)[0]);
}
/**
 * The flight entry loader keys actions by bundlePath.
 * bundlePath corresponds with the relative path (including 'app') to the page entrypoint.
 */ function normalizeWorkerPageName(pageName) {
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$path$2d$has$2d$prefix$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["pathHasPrefix"])(pageName, 'app')) {
        return pageName;
    }
    return 'app' + pageName;
}
/**
 * Converts a bundlePath (relative path to the entrypoint) to a routable page name
 */ function denormalizeWorkerPageName(bundlePath) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$app$2d$paths$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["normalizeAppPath"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$remove$2d$path$2d$prefix$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["removePathPrefix"])(bundlePath, 'app'));
} //# sourceMappingURL=action-utils.js.map
}),
"[project]/learn-next/final/node_modules/next/dist/esm/server/lib/server-action-request-meta.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getIsPossibleServerAction",
    ()=>getIsPossibleServerAction,
    "getServerActionRequestMetadata",
    ()=>getServerActionRequestMetadata
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$app$2d$router$2d$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/learn-next/final/node_modules/next/dist/esm/client/components/app-router-headers.js [app-rsc] (ecmascript)");
;
function getServerActionRequestMetadata(req) {
    let actionId;
    let contentType;
    if (req.headers instanceof Headers) {
        actionId = req.headers.get(__TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$app$2d$router$2d$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ACTION_HEADER"]) ?? null;
        contentType = req.headers.get('content-type');
    } else {
        actionId = req.headers[__TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$app$2d$router$2d$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ACTION_HEADER"]] ?? null;
        contentType = req.headers['content-type'] ?? null;
    }
    const isURLEncodedAction = Boolean(req.method === 'POST' && contentType === 'application/x-www-form-urlencoded');
    const isMultipartAction = Boolean(req.method === 'POST' && (contentType == null ? void 0 : contentType.startsWith('multipart/form-data')));
    const isFetchAction = Boolean(actionId !== undefined && typeof actionId === 'string' && req.method === 'POST');
    const isPossibleServerAction = Boolean(isFetchAction || isURLEncodedAction || isMultipartAction);
    return {
        actionId,
        isURLEncodedAction,
        isMultipartAction,
        isFetchAction,
        isPossibleServerAction
    };
}
function getIsPossibleServerAction(req) {
    return getServerActionRequestMetadata(req).isPossibleServerAction;
} //# sourceMappingURL=server-action-request-meta.js.map
}),
"[project]/learn-next/final/node_modules/next/dist/esm/lib/fallback.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Describes the different fallback modes that a given page can have.
 */ __turbopack_context__.s([
    "FallbackMode",
    ()=>FallbackMode,
    "fallbackModeToFallbackField",
    ()=>fallbackModeToFallbackField,
    "parseFallbackField",
    ()=>parseFallbackField,
    "parseStaticPathsResult",
    ()=>parseStaticPathsResult
]);
var FallbackMode = /*#__PURE__*/ function(FallbackMode) {
    /**
   * A BLOCKING_STATIC_RENDER fallback will block the request until the page is
   * generated. No fallback page will be rendered, and users will have to wait
   * to render the page.
   */ FallbackMode["BLOCKING_STATIC_RENDER"] = "BLOCKING_STATIC_RENDER";
    /**
   * When set to PRERENDER, a fallback page will be sent to users in place of
   * forcing them to wait for the page to be generated. This allows the user to
   * see a rendered page earlier.
   */ FallbackMode["PRERENDER"] = "PRERENDER";
    /**
   * When set to NOT_FOUND, pages that are not already prerendered will result
   * in a not found response.
   */ FallbackMode["NOT_FOUND"] = "NOT_FOUND";
    return FallbackMode;
}({});
function parseFallbackField(fallbackField) {
    if (typeof fallbackField === 'string') {
        return "PRERENDER";
    } else if (fallbackField === null) {
        return "BLOCKING_STATIC_RENDER";
    } else if (fallbackField === false) {
        return "NOT_FOUND";
    } else if (fallbackField === undefined) {
        return undefined;
    } else {
        throw Object.defineProperty(new Error(`Invalid fallback option: ${fallbackField}. Fallback option must be a string, null, undefined, or false.`), "__NEXT_ERROR_CODE", {
            value: "E285",
            enumerable: false,
            configurable: true
        });
    }
}
function fallbackModeToFallbackField(fallback, page) {
    switch(fallback){
        case "BLOCKING_STATIC_RENDER":
            return null;
        case "NOT_FOUND":
            return false;
        case "PRERENDER":
            if (!page) {
                throw Object.defineProperty(new Error(`Invariant: expected a page to be provided when fallback mode is "${fallback}"`), "__NEXT_ERROR_CODE", {
                    value: "E422",
                    enumerable: false,
                    configurable: true
                });
            }
            return page;
        default:
            throw Object.defineProperty(new Error(`Invalid fallback mode: ${fallback}`), "__NEXT_ERROR_CODE", {
                value: "E254",
                enumerable: false,
                configurable: true
            });
    }
}
function parseStaticPathsResult(result) {
    if (result === true) {
        return "PRERENDER";
    } else if (result === 'blocking') {
        return "BLOCKING_STATIC_RENDER";
    } else {
        return "NOT_FOUND";
    }
} //# sourceMappingURL=fallback.js.map
}),
"[project]/learn-next/final/node_modules/next/dist/esm/server/lib/etag.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * FNV-1a Hash implementation
 * @author Travis Webb (tjwebb) <me@traviswebb.com>
 *
 * Ported from https://github.com/tjwebb/fnv-plus/blob/master/index.js
 *
 * Simplified, optimized and add modified for 52 bit, which provides a larger hash space
 * and still making use of Javascript's 53-bit integer space.
 */ __turbopack_context__.s([
    "fnv1a52",
    ()=>fnv1a52,
    "generateETag",
    ()=>generateETag
]);
const fnv1a52 = (str)=>{
    const len = str.length;
    let i = 0, t0 = 0, v0 = 0x2325, t1 = 0, v1 = 0x8422, t2 = 0, v2 = 0x9ce4, t3 = 0, v3 = 0xcbf2;
    while(i < len){
        v0 ^= str.charCodeAt(i++);
        t0 = v0 * 435;
        t1 = v1 * 435;
        t2 = v2 * 435;
        t3 = v3 * 435;
        t2 += v0 << 8;
        t3 += v1 << 8;
        t1 += t0 >>> 16;
        v0 = t0 & 65535;
        t2 += t1 >>> 16;
        v1 = t1 & 65535;
        v3 = t3 + (t2 >>> 16) & 65535;
        v2 = t2 & 65535;
    }
    return (v3 & 15) * 281474976710656 + v2 * 4294967296 + v1 * 65536 + (v0 ^ v3 >> 4);
};
const generateETag = (payload, weak = false)=>{
    const prefix = weak ? 'W/"' : '"';
    return prefix + fnv1a52(payload).toString(36) + payload.length.toString(36) + '"';
}; //# sourceMappingURL=etag.js.map
}),
"[project]/learn-next/final/node_modules/next/dist/compiled/fresh/index.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {

(()=>{
    "use strict";
    var e = {
        695: (e)=>{
            /*!
 * fresh
 * Copyright(c) 2012 TJ Holowaychuk
 * Copyright(c) 2016-2017 Douglas Christopher Wilson
 * MIT Licensed
 */ var r = /(?:^|,)\s*?no-cache\s*?(?:,|$)/;
            e.exports = fresh;
            function fresh(e, a) {
                var t = e["if-modified-since"];
                var s = e["if-none-match"];
                if (!t && !s) {
                    return false;
                }
                var i = e["cache-control"];
                if (i && r.test(i)) {
                    return false;
                }
                if (s && s !== "*") {
                    var f = a["etag"];
                    if (!f) {
                        return false;
                    }
                    var n = true;
                    var u = parseTokenList(s);
                    for(var _ = 0; _ < u.length; _++){
                        var o = u[_];
                        if (o === f || o === "W/" + f || "W/" + o === f) {
                            n = false;
                            break;
                        }
                    }
                    if (n) {
                        return false;
                    }
                }
                if (t) {
                    var p = a["last-modified"];
                    var v = !p || !(parseHttpDate(p) <= parseHttpDate(t));
                    if (v) {
                        return false;
                    }
                }
                return true;
            }
            function parseHttpDate(e) {
                var r = e && Date.parse(e);
                return typeof r === "number" ? r : NaN;
            }
            function parseTokenList(e) {
                var r = 0;
                var a = [];
                var t = 0;
                for(var s = 0, i = e.length; s < i; s++){
                    switch(e.charCodeAt(s)){
                        case 32:
                            if (t === r) {
                                t = r = s + 1;
                            }
                            break;
                        case 44:
                            a.push(e.substring(t, r));
                            t = r = s + 1;
                            break;
                        default:
                            r = s + 1;
                            break;
                    }
                }
                a.push(e.substring(t, r));
                return a;
            }
        }
    };
    var r = {};
    function __nccwpck_require__(a) {
        var t = r[a];
        if (t !== undefined) {
            return t.exports;
        }
        var s = r[a] = {
            exports: {}
        };
        var i = true;
        try {
            e[a](s, s.exports, __nccwpck_require__);
            i = false;
        } finally{
            if (i) delete r[a];
        }
        return s.exports;
    }
    if (typeof __nccwpck_require__ !== "undefined") __nccwpck_require__.ab = ("TURBOPACK compile-time value", "/ROOT/learn-next/final/node_modules/next/dist/compiled/fresh") + "/";
    var a = __nccwpck_require__(695);
    module.exports = a;
})();
}),
"[project]/learn-next/final/node_modules/next/dist/esm/server/lib/cache-control.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getCacheControlHeader",
    ()=>getCacheControlHeader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/learn-next/final/node_modules/next/dist/esm/lib/constants.js [app-rsc] (ecmascript)");
;
function getCacheControlHeader({ revalidate, expire }) {
    const swrHeader = typeof revalidate === 'number' && expire !== undefined && revalidate < expire ? `, stale-while-revalidate=${expire - revalidate}` : '';
    if (revalidate === 0) {
        return 'private, no-cache, no-store, max-age=0, must-revalidate';
    } else if (typeof revalidate === 'number') {
        return `s-maxage=${revalidate}${swrHeader}`;
    }
    return `s-maxage=${__TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CACHE_ONE_YEAR"]}${swrHeader}`;
} //# sourceMappingURL=cache-control.js.map
}),
"[project]/learn-next/final/node_modules/next/dist/esm/server/send-payload.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "sendEtagResponse",
    ()=>sendEtagResponse,
    "sendRenderResult",
    ()=>sendRenderResult
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/learn-next/final/node_modules/next/dist/esm/shared/lib/utils.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$etag$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/learn-next/final/node_modules/next/dist/esm/server/lib/etag.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$fresh$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/learn-next/final/node_modules/next/dist/compiled/fresh/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$cache$2d$control$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/learn-next/final/node_modules/next/dist/esm/server/lib/cache-control.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/learn-next/final/node_modules/next/dist/esm/lib/constants.js [app-rsc] (ecmascript)");
;
;
;
;
;
function sendEtagResponse(req, res, etag) {
    if (etag) {
        /**
     * The server generating a 304 response MUST generate any of the
     * following header fields that would have been sent in a 200 (OK)
     * response to the same request: Cache-Control, Content-Location, Date,
     * ETag, Expires, and Vary. https://tools.ietf.org/html/rfc7232#section-4.1
     */ res.setHeader('ETag', etag);
    }
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$fresh$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(req.headers, {
        etag
    })) {
        res.statusCode = 304;
        res.end();
        return true;
    }
    return false;
}
async function sendRenderResult({ req, res, result, generateEtags, poweredByHeader, cacheControl }) {
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isResSent"])(res)) {
        return;
    }
    if (poweredByHeader && result.contentType === __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["HTML_CONTENT_TYPE_HEADER"]) {
        res.setHeader('X-Powered-By', 'Next.js');
    }
    // If cache control is already set on the response we don't
    // override it to allow users to customize it via next.config
    if (cacheControl && !res.getHeader('Cache-Control')) {
        res.setHeader('Cache-Control', (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$cache$2d$control$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getCacheControlHeader"])(cacheControl));
    }
    const payload = result.isDynamic ? null : result.toUnchunkedString();
    if (generateEtags && payload !== null) {
        const etag = (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$etag$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["generateETag"])(payload);
        if (sendEtagResponse(req, res, etag)) {
            return;
        }
    }
    if (!res.getHeader('Content-Type') && result.contentType) {
        res.setHeader('Content-Type', result.contentType);
    }
    if (payload) {
        res.setHeader('Content-Length', Buffer.byteLength(payload));
    }
    if (req.method === 'HEAD') {
        res.end(null);
        return;
    }
    if (payload !== null) {
        res.end(payload);
        return;
    }
    // Pipe the render result to the response after we get a writer for it.
    await result.pipeToNodeResponse(res);
} //# sourceMappingURL=send-payload.js.map
}),
"[project]/learn-next/final/node_modules/next/dist/client/components/builtin/global-error.js [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/learn-next/final/node_modules/next/dist/client/components/builtin/global-error.js [app-rsc] (ecmascript)"));
}),
"[project]/learn-next/final/node_modules/next/dist/esm/server/app-render/entry-base.js [app-rsc] (ecmascript, Next.js server utility) <locals>", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/learn-next/final/node_modules/next/dist/esm/server/app-render/entry-base.js [app-rsc] (ecmascript) <locals>"));}),
"[project]/learn-next/final/node_modules/next/dist/esm/server/app-render/entry-base.js [app-rsc] (ecmascript, Next.js server utility)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/learn-next/final/node_modules/next/dist/esm/server/app-render/entry-base.js [app-rsc] (ecmascript)"));}),
"[project]/learn-next/final/node_modules/next/dist/client/components/builtin/not-found.js [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/learn-next/final/node_modules/next/dist/client/components/builtin/not-found.js [app-rsc] (ecmascript)"));
}),
"[project]/learn-next/final/node_modules/next/dist/client/components/builtin/forbidden.js [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/learn-next/final/node_modules/next/dist/client/components/builtin/forbidden.js [app-rsc] (ecmascript)"));
}),
"[project]/learn-next/final/node_modules/next/dist/client/components/builtin/unauthorized.js [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/learn-next/final/node_modules/next/dist/client/components/builtin/unauthorized.js [app-rsc] (ecmascript)"));
}),
"[project]/learn-next/final/node_modules/date-fns/locale/en-US/_lib/formatDistance.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "formatDistance",
    ()=>formatDistance
]);
const formatDistanceLocale = {
    lessThanXSeconds: {
        one: "less than a second",
        other: "less than {{count}} seconds"
    },
    xSeconds: {
        one: "1 second",
        other: "{{count}} seconds"
    },
    halfAMinute: "half a minute",
    lessThanXMinutes: {
        one: "less than a minute",
        other: "less than {{count}} minutes"
    },
    xMinutes: {
        one: "1 minute",
        other: "{{count}} minutes"
    },
    aboutXHours: {
        one: "about 1 hour",
        other: "about {{count}} hours"
    },
    xHours: {
        one: "1 hour",
        other: "{{count}} hours"
    },
    xDays: {
        one: "1 day",
        other: "{{count}} days"
    },
    aboutXWeeks: {
        one: "about 1 week",
        other: "about {{count}} weeks"
    },
    xWeeks: {
        one: "1 week",
        other: "{{count}} weeks"
    },
    aboutXMonths: {
        one: "about 1 month",
        other: "about {{count}} months"
    },
    xMonths: {
        one: "1 month",
        other: "{{count}} months"
    },
    aboutXYears: {
        one: "about 1 year",
        other: "about {{count}} years"
    },
    xYears: {
        one: "1 year",
        other: "{{count}} years"
    },
    overXYears: {
        one: "over 1 year",
        other: "over {{count}} years"
    },
    almostXYears: {
        one: "almost 1 year",
        other: "almost {{count}} years"
    }
};
const formatDistance = (token, count, options)=>{
    let result;
    const tokenValue = formatDistanceLocale[token];
    if (typeof tokenValue === "string") {
        result = tokenValue;
    } else if (count === 1) {
        result = tokenValue.one;
    } else {
        result = tokenValue.other.replace("{{count}}", count.toString());
    }
    if (options?.addSuffix) {
        if (options.comparison && options.comparison > 0) {
            return "in " + result;
        } else {
            return result + " ago";
        }
    }
    return result;
};
}),
"[project]/learn-next/final/node_modules/date-fns/locale/_lib/buildFormatLongFn.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "buildFormatLongFn",
    ()=>buildFormatLongFn
]);
function buildFormatLongFn(args) {
    return (options = {})=>{
        // TODO: Remove String()
        const width = options.width ? String(options.width) : args.defaultWidth;
        const format = args.formats[width] || args.formats[args.defaultWidth];
        return format;
    };
}
}),
"[project]/learn-next/final/node_modules/date-fns/locale/en-US/_lib/formatLong.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "formatLong",
    ()=>formatLong
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$date$2d$fns$2f$locale$2f$_lib$2f$buildFormatLongFn$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/learn-next/final/node_modules/date-fns/locale/_lib/buildFormatLongFn.js [app-rsc] (ecmascript)");
;
const dateFormats = {
    full: "EEEE, MMMM do, y",
    long: "MMMM do, y",
    medium: "MMM d, y",
    short: "MM/dd/yyyy"
};
const timeFormats = {
    full: "h:mm:ss a zzzz",
    long: "h:mm:ss a z",
    medium: "h:mm:ss a",
    short: "h:mm a"
};
const dateTimeFormats = {
    full: "{{date}} 'at' {{time}}",
    long: "{{date}} 'at' {{time}}",
    medium: "{{date}}, {{time}}",
    short: "{{date}}, {{time}}"
};
const formatLong = {
    date: (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$date$2d$fns$2f$locale$2f$_lib$2f$buildFormatLongFn$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["buildFormatLongFn"])({
        formats: dateFormats,
        defaultWidth: "full"
    }),
    time: (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$date$2d$fns$2f$locale$2f$_lib$2f$buildFormatLongFn$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["buildFormatLongFn"])({
        formats: timeFormats,
        defaultWidth: "full"
    }),
    dateTime: (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$date$2d$fns$2f$locale$2f$_lib$2f$buildFormatLongFn$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["buildFormatLongFn"])({
        formats: dateTimeFormats,
        defaultWidth: "full"
    })
};
}),
"[project]/learn-next/final/node_modules/date-fns/locale/en-US/_lib/formatRelative.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "formatRelative",
    ()=>formatRelative
]);
const formatRelativeLocale = {
    lastWeek: "'last' eeee 'at' p",
    yesterday: "'yesterday at' p",
    today: "'today at' p",
    tomorrow: "'tomorrow at' p",
    nextWeek: "eeee 'at' p",
    other: "P"
};
const formatRelative = (token, _date, _baseDate, _options)=>formatRelativeLocale[token];
}),
"[project]/learn-next/final/node_modules/date-fns/locale/_lib/buildLocalizeFn.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * The localize function argument callback which allows to convert raw value to
 * the actual type.
 *
 * @param value - The value to convert
 *
 * @returns The converted value
 */ /**
 * The map of localized values for each width.
 */ /**
 * The index type of the locale unit value. It types conversion of units of
 * values that don't start at 0 (i.e. quarters).
 */ /**
 * Converts the unit value to the tuple of values.
 */ /**
 * The tuple of localized era values. The first element represents BC,
 * the second element represents AD.
 */ /**
 * The tuple of localized quarter values. The first element represents Q1.
 */ /**
 * The tuple of localized day values. The first element represents Sunday.
 */ /**
 * The tuple of localized month values. The first element represents January.
 */ __turbopack_context__.s([
    "buildLocalizeFn",
    ()=>buildLocalizeFn
]);
function buildLocalizeFn(args) {
    return (value, options)=>{
        const context = options?.context ? String(options.context) : "standalone";
        let valuesArray;
        if (context === "formatting" && args.formattingValues) {
            const defaultWidth = args.defaultFormattingWidth || args.defaultWidth;
            const width = options?.width ? String(options.width) : defaultWidth;
            valuesArray = args.formattingValues[width] || args.formattingValues[defaultWidth];
        } else {
            const defaultWidth = args.defaultWidth;
            const width = options?.width ? String(options.width) : args.defaultWidth;
            valuesArray = args.values[width] || args.values[defaultWidth];
        }
        const index = args.argumentCallback ? args.argumentCallback(value) : value;
        // @ts-expect-error - For some reason TypeScript just don't want to match it, no matter how hard we try. I challenge you to try to remove it!
        return valuesArray[index];
    };
}
}),
"[project]/learn-next/final/node_modules/date-fns/locale/en-US/_lib/localize.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "localize",
    ()=>localize
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$date$2d$fns$2f$locale$2f$_lib$2f$buildLocalizeFn$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/learn-next/final/node_modules/date-fns/locale/_lib/buildLocalizeFn.js [app-rsc] (ecmascript)");
;
const eraValues = {
    narrow: [
        "B",
        "A"
    ],
    abbreviated: [
        "BC",
        "AD"
    ],
    wide: [
        "Before Christ",
        "Anno Domini"
    ]
};
const quarterValues = {
    narrow: [
        "1",
        "2",
        "3",
        "4"
    ],
    abbreviated: [
        "Q1",
        "Q2",
        "Q3",
        "Q4"
    ],
    wide: [
        "1st quarter",
        "2nd quarter",
        "3rd quarter",
        "4th quarter"
    ]
};
// Note: in English, the names of days of the week and months are capitalized.
// If you are making a new locale based on this one, check if the same is true for the language you're working on.
// Generally, formatted dates should look like they are in the middle of a sentence,
// e.g. in Spanish language the weekdays and months should be in the lowercase.
const monthValues = {
    narrow: [
        "J",
        "F",
        "M",
        "A",
        "M",
        "J",
        "J",
        "A",
        "S",
        "O",
        "N",
        "D"
    ],
    abbreviated: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec"
    ],
    wide: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ]
};
const dayValues = {
    narrow: [
        "S",
        "M",
        "T",
        "W",
        "T",
        "F",
        "S"
    ],
    short: [
        "Su",
        "Mo",
        "Tu",
        "We",
        "Th",
        "Fr",
        "Sa"
    ],
    abbreviated: [
        "Sun",
        "Mon",
        "Tue",
        "Wed",
        "Thu",
        "Fri",
        "Sat"
    ],
    wide: [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ]
};
const dayPeriodValues = {
    narrow: {
        am: "a",
        pm: "p",
        midnight: "mi",
        noon: "n",
        morning: "morning",
        afternoon: "afternoon",
        evening: "evening",
        night: "night"
    },
    abbreviated: {
        am: "AM",
        pm: "PM",
        midnight: "midnight",
        noon: "noon",
        morning: "morning",
        afternoon: "afternoon",
        evening: "evening",
        night: "night"
    },
    wide: {
        am: "a.m.",
        pm: "p.m.",
        midnight: "midnight",
        noon: "noon",
        morning: "morning",
        afternoon: "afternoon",
        evening: "evening",
        night: "night"
    }
};
const formattingDayPeriodValues = {
    narrow: {
        am: "a",
        pm: "p",
        midnight: "mi",
        noon: "n",
        morning: "in the morning",
        afternoon: "in the afternoon",
        evening: "in the evening",
        night: "at night"
    },
    abbreviated: {
        am: "AM",
        pm: "PM",
        midnight: "midnight",
        noon: "noon",
        morning: "in the morning",
        afternoon: "in the afternoon",
        evening: "in the evening",
        night: "at night"
    },
    wide: {
        am: "a.m.",
        pm: "p.m.",
        midnight: "midnight",
        noon: "noon",
        morning: "in the morning",
        afternoon: "in the afternoon",
        evening: "in the evening",
        night: "at night"
    }
};
const ordinalNumber = (dirtyNumber, _options)=>{
    const number = Number(dirtyNumber);
    // If ordinal numbers depend on context, for example,
    // if they are different for different grammatical genders,
    // use `options.unit`.
    //
    // `unit` can be 'year', 'quarter', 'month', 'week', 'date', 'dayOfYear',
    // 'day', 'hour', 'minute', 'second'.
    const rem100 = number % 100;
    if (rem100 > 20 || rem100 < 10) {
        switch(rem100 % 10){
            case 1:
                return number + "st";
            case 2:
                return number + "nd";
            case 3:
                return number + "rd";
        }
    }
    return number + "th";
};
const localize = {
    ordinalNumber,
    era: (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$date$2d$fns$2f$locale$2f$_lib$2f$buildLocalizeFn$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["buildLocalizeFn"])({
        values: eraValues,
        defaultWidth: "wide"
    }),
    quarter: (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$date$2d$fns$2f$locale$2f$_lib$2f$buildLocalizeFn$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["buildLocalizeFn"])({
        values: quarterValues,
        defaultWidth: "wide",
        argumentCallback: (quarter)=>quarter - 1
    }),
    month: (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$date$2d$fns$2f$locale$2f$_lib$2f$buildLocalizeFn$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["buildLocalizeFn"])({
        values: monthValues,
        defaultWidth: "wide"
    }),
    day: (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$date$2d$fns$2f$locale$2f$_lib$2f$buildLocalizeFn$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["buildLocalizeFn"])({
        values: dayValues,
        defaultWidth: "wide"
    }),
    dayPeriod: (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$date$2d$fns$2f$locale$2f$_lib$2f$buildLocalizeFn$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["buildLocalizeFn"])({
        values: dayPeriodValues,
        defaultWidth: "wide",
        formattingValues: formattingDayPeriodValues,
        defaultFormattingWidth: "wide"
    })
};
}),
"[project]/learn-next/final/node_modules/date-fns/locale/_lib/buildMatchFn.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "buildMatchFn",
    ()=>buildMatchFn
]);
function buildMatchFn(args) {
    return (string, options = {})=>{
        const width = options.width;
        const matchPattern = width && args.matchPatterns[width] || args.matchPatterns[args.defaultMatchWidth];
        const matchResult = string.match(matchPattern);
        if (!matchResult) {
            return null;
        }
        const matchedString = matchResult[0];
        const parsePatterns = width && args.parsePatterns[width] || args.parsePatterns[args.defaultParseWidth];
        const key = Array.isArray(parsePatterns) ? findIndex(parsePatterns, (pattern)=>pattern.test(matchedString)) : findKey(parsePatterns, (pattern)=>pattern.test(matchedString));
        let value;
        value = args.valueCallback ? args.valueCallback(key) : key;
        value = options.valueCallback ? options.valueCallback(value) : value;
        const rest = string.slice(matchedString.length);
        return {
            value,
            rest
        };
    };
}
function findKey(object, predicate) {
    for(const key in object){
        if (Object.prototype.hasOwnProperty.call(object, key) && predicate(object[key])) {
            return key;
        }
    }
    return undefined;
}
function findIndex(array, predicate) {
    for(let key = 0; key < array.length; key++){
        if (predicate(array[key])) {
            return key;
        }
    }
    return undefined;
}
}),
"[project]/learn-next/final/node_modules/date-fns/locale/_lib/buildMatchPatternFn.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "buildMatchPatternFn",
    ()=>buildMatchPatternFn
]);
function buildMatchPatternFn(args) {
    return (string, options = {})=>{
        const matchResult = string.match(args.matchPattern);
        if (!matchResult) return null;
        const matchedString = matchResult[0];
        const parseResult = string.match(args.parsePattern);
        if (!parseResult) return null;
        let value = args.valueCallback ? args.valueCallback(parseResult[0]) : parseResult[0];
        // [TODO] I challenge you to fix the type
        value = options.valueCallback ? options.valueCallback(value) : value;
        const rest = string.slice(matchedString.length);
        return {
            value,
            rest
        };
    };
}
}),
"[project]/learn-next/final/node_modules/date-fns/locale/en-US/_lib/match.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "match",
    ()=>match
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$date$2d$fns$2f$locale$2f$_lib$2f$buildMatchFn$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/learn-next/final/node_modules/date-fns/locale/_lib/buildMatchFn.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$date$2d$fns$2f$locale$2f$_lib$2f$buildMatchPatternFn$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/learn-next/final/node_modules/date-fns/locale/_lib/buildMatchPatternFn.js [app-rsc] (ecmascript)");
;
;
const matchOrdinalNumberPattern = /^(\d+)(th|st|nd|rd)?/i;
const parseOrdinalNumberPattern = /\d+/i;
const matchEraPatterns = {
    narrow: /^(b|a)/i,
    abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
    wide: /^(before christ|before common era|anno domini|common era)/i
};
const parseEraPatterns = {
    any: [
        /^b/i,
        /^(a|c)/i
    ]
};
const matchQuarterPatterns = {
    narrow: /^[1234]/i,
    abbreviated: /^q[1234]/i,
    wide: /^[1234](th|st|nd|rd)? quarter/i
};
const parseQuarterPatterns = {
    any: [
        /1/i,
        /2/i,
        /3/i,
        /4/i
    ]
};
const matchMonthPatterns = {
    narrow: /^[jfmasond]/i,
    abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
    wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
};
const parseMonthPatterns = {
    narrow: [
        /^j/i,
        /^f/i,
        /^m/i,
        /^a/i,
        /^m/i,
        /^j/i,
        /^j/i,
        /^a/i,
        /^s/i,
        /^o/i,
        /^n/i,
        /^d/i
    ],
    any: [
        /^ja/i,
        /^f/i,
        /^mar/i,
        /^ap/i,
        /^may/i,
        /^jun/i,
        /^jul/i,
        /^au/i,
        /^s/i,
        /^o/i,
        /^n/i,
        /^d/i
    ]
};
const matchDayPatterns = {
    narrow: /^[smtwf]/i,
    short: /^(su|mo|tu|we|th|fr|sa)/i,
    abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
    wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
};
const parseDayPatterns = {
    narrow: [
        /^s/i,
        /^m/i,
        /^t/i,
        /^w/i,
        /^t/i,
        /^f/i,
        /^s/i
    ],
    any: [
        /^su/i,
        /^m/i,
        /^tu/i,
        /^w/i,
        /^th/i,
        /^f/i,
        /^sa/i
    ]
};
const matchDayPeriodPatterns = {
    narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
    any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
};
const parseDayPeriodPatterns = {
    any: {
        am: /^a/i,
        pm: /^p/i,
        midnight: /^mi/i,
        noon: /^no/i,
        morning: /morning/i,
        afternoon: /afternoon/i,
        evening: /evening/i,
        night: /night/i
    }
};
const match = {
    ordinalNumber: (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$date$2d$fns$2f$locale$2f$_lib$2f$buildMatchPatternFn$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["buildMatchPatternFn"])({
        matchPattern: matchOrdinalNumberPattern,
        parsePattern: parseOrdinalNumberPattern,
        valueCallback: (value)=>parseInt(value, 10)
    }),
    era: (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$date$2d$fns$2f$locale$2f$_lib$2f$buildMatchFn$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["buildMatchFn"])({
        matchPatterns: matchEraPatterns,
        defaultMatchWidth: "wide",
        parsePatterns: parseEraPatterns,
        defaultParseWidth: "any"
    }),
    quarter: (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$date$2d$fns$2f$locale$2f$_lib$2f$buildMatchFn$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["buildMatchFn"])({
        matchPatterns: matchQuarterPatterns,
        defaultMatchWidth: "wide",
        parsePatterns: parseQuarterPatterns,
        defaultParseWidth: "any",
        valueCallback: (index)=>index + 1
    }),
    month: (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$date$2d$fns$2f$locale$2f$_lib$2f$buildMatchFn$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["buildMatchFn"])({
        matchPatterns: matchMonthPatterns,
        defaultMatchWidth: "wide",
        parsePatterns: parseMonthPatterns,
        defaultParseWidth: "any"
    }),
    day: (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$date$2d$fns$2f$locale$2f$_lib$2f$buildMatchFn$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["buildMatchFn"])({
        matchPatterns: matchDayPatterns,
        defaultMatchWidth: "wide",
        parsePatterns: parseDayPatterns,
        defaultParseWidth: "any"
    }),
    dayPeriod: (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$date$2d$fns$2f$locale$2f$_lib$2f$buildMatchFn$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["buildMatchFn"])({
        matchPatterns: matchDayPeriodPatterns,
        defaultMatchWidth: "any",
        parsePatterns: parseDayPeriodPatterns,
        defaultParseWidth: "any"
    })
};
}),
"[project]/learn-next/final/node_modules/date-fns/locale/en-US.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "enUS",
    ()=>enUS
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$date$2d$fns$2f$locale$2f$en$2d$US$2f$_lib$2f$formatDistance$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/learn-next/final/node_modules/date-fns/locale/en-US/_lib/formatDistance.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$date$2d$fns$2f$locale$2f$en$2d$US$2f$_lib$2f$formatLong$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/learn-next/final/node_modules/date-fns/locale/en-US/_lib/formatLong.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$date$2d$fns$2f$locale$2f$en$2d$US$2f$_lib$2f$formatRelative$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/learn-next/final/node_modules/date-fns/locale/en-US/_lib/formatRelative.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$date$2d$fns$2f$locale$2f$en$2d$US$2f$_lib$2f$localize$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/learn-next/final/node_modules/date-fns/locale/en-US/_lib/localize.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$date$2d$fns$2f$locale$2f$en$2d$US$2f$_lib$2f$match$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/learn-next/final/node_modules/date-fns/locale/en-US/_lib/match.js [app-rsc] (ecmascript)");
;
;
;
;
;
const enUS = {
    code: "en-US",
    formatDistance: __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$date$2d$fns$2f$locale$2f$en$2d$US$2f$_lib$2f$formatDistance$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["formatDistance"],
    formatLong: __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$date$2d$fns$2f$locale$2f$en$2d$US$2f$_lib$2f$formatLong$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["formatLong"],
    formatRelative: __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$date$2d$fns$2f$locale$2f$en$2d$US$2f$_lib$2f$formatRelative$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["formatRelative"],
    localize: __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$date$2d$fns$2f$locale$2f$en$2d$US$2f$_lib$2f$localize$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["localize"],
    match: __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$date$2d$fns$2f$locale$2f$en$2d$US$2f$_lib$2f$match$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["match"],
    options: {
        weekStartsOn: 0 /* Sunday */ ,
        firstWeekContainsDate: 1
    }
};
const __TURBOPACK__default__export__ = enUS;
}),
"[project]/learn-next/final/node_modules/date-fns/locale/en-US.js [app-rsc] (ecmascript) <export enUS as defaultLocale>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "defaultLocale",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$date$2d$fns$2f$locale$2f$en$2d$US$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["enUS"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$date$2d$fns$2f$locale$2f$en$2d$US$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/learn-next/final/node_modules/date-fns/locale/en-US.js [app-rsc] (ecmascript)");
}),
"[project]/learn-next/final/node_modules/date-fns/_lib/defaultOptions.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getDefaultOptions",
    ()=>getDefaultOptions,
    "setDefaultOptions",
    ()=>setDefaultOptions
]);
let defaultOptions = {};
function getDefaultOptions() {
    return defaultOptions;
}
function setDefaultOptions(newOptions) {
    defaultOptions = newOptions;
}
}),
"[project]/learn-next/final/node_modules/date-fns/constants.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @module constants
 * @summary Useful constants
 * @description
 * Collection of useful date constants.
 *
 * The constants could be imported from `date-fns/constants`:
 *
 * ```ts
 * import { maxTime, minTime } from "./constants/date-fns/constants";
 *
 * function isAllowedTime(time) {
 *   return time <= maxTime && time >= minTime;
 * }
 * ```
 */ /**
 * @constant
 * @name daysInWeek
 * @summary Days in 1 week.
 */ __turbopack_context__.s([
    "constructFromSymbol",
    ()=>constructFromSymbol,
    "daysInWeek",
    ()=>daysInWeek,
    "daysInYear",
    ()=>daysInYear,
    "maxTime",
    ()=>maxTime,
    "millisecondsInDay",
    ()=>millisecondsInDay,
    "millisecondsInHour",
    ()=>millisecondsInHour,
    "millisecondsInMinute",
    ()=>millisecondsInMinute,
    "millisecondsInSecond",
    ()=>millisecondsInSecond,
    "millisecondsInWeek",
    ()=>millisecondsInWeek,
    "minTime",
    ()=>minTime,
    "minutesInDay",
    ()=>minutesInDay,
    "minutesInHour",
    ()=>minutesInHour,
    "minutesInMonth",
    ()=>minutesInMonth,
    "minutesInYear",
    ()=>minutesInYear,
    "monthsInQuarter",
    ()=>monthsInQuarter,
    "monthsInYear",
    ()=>monthsInYear,
    "quartersInYear",
    ()=>quartersInYear,
    "secondsInDay",
    ()=>secondsInDay,
    "secondsInHour",
    ()=>secondsInHour,
    "secondsInMinute",
    ()=>secondsInMinute,
    "secondsInMonth",
    ()=>secondsInMonth,
    "secondsInQuarter",
    ()=>secondsInQuarter,
    "secondsInWeek",
    ()=>secondsInWeek,
    "secondsInYear",
    ()=>secondsInYear
]);
const daysInWeek = 7;
const daysInYear = 365.2425;
const maxTime = Math.pow(10, 8) * 24 * 60 * 60 * 1000;
const minTime = -maxTime;
const millisecondsInWeek = 604800000;
const millisecondsInDay = 86400000;
const millisecondsInMinute = 60000;
const millisecondsInHour = 3600000;
const millisecondsInSecond = 1000;
const minutesInYear = 525600;
const minutesInMonth = 43200;
const minutesInDay = 1440;
const minutesInHour = 60;
const monthsInQuarter = 3;
const monthsInYear = 12;
const quartersInYear = 4;
const secondsInHour = 3600;
const secondsInMinute = 60;
const secondsInDay = secondsInHour * 24;
const secondsInWeek = secondsInDay * 7;
const secondsInYear = secondsInDay * daysInYear;
const secondsInMonth = secondsInYear / 12;
const secondsInQuarter = secondsInMonth * 3;
const constructFromSymbol = Symbol.for("constructDateFrom");
}),
"[project]/learn-next/final/node_modules/date-fns/constructFrom.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "constructFrom",
    ()=>constructFrom,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$date$2d$fns$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/learn-next/final/node_modules/date-fns/constants.js [app-rsc] (ecmascript)");
;
function constructFrom(date, value) {
    if (typeof date === "function") return date(value);
    if (date && typeof date === "object" && __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$date$2d$fns$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["constructFromSymbol"] in date) return date[__TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$date$2d$fns$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["constructFromSymbol"]](value);
    if (date instanceof Date) return new date.constructor(value);
    return new Date(value);
}
const __TURBOPACK__default__export__ = constructFrom;
}),
"[project]/learn-next/final/node_modules/date-fns/toDate.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "toDate",
    ()=>toDate
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$date$2d$fns$2f$constructFrom$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/learn-next/final/node_modules/date-fns/constructFrom.js [app-rsc] (ecmascript)");
;
function toDate(argument, context) {
    // [TODO] Get rid of `toDate` or `constructFrom`?
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$date$2d$fns$2f$constructFrom$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["constructFrom"])(context || argument, argument);
}
const __TURBOPACK__default__export__ = toDate;
}),
"[project]/learn-next/final/node_modules/date-fns/_lib/getTimezoneOffsetInMilliseconds.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getTimezoneOffsetInMilliseconds",
    ()=>getTimezoneOffsetInMilliseconds
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$date$2d$fns$2f$toDate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/learn-next/final/node_modules/date-fns/toDate.js [app-rsc] (ecmascript)");
;
function getTimezoneOffsetInMilliseconds(date) {
    const _date = (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$date$2d$fns$2f$toDate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["toDate"])(date);
    const utcDate = new Date(Date.UTC(_date.getFullYear(), _date.getMonth(), _date.getDate(), _date.getHours(), _date.getMinutes(), _date.getSeconds(), _date.getMilliseconds()));
    utcDate.setUTCFullYear(_date.getFullYear());
    return +date - +utcDate;
}
}),
"[project]/learn-next/final/node_modules/date-fns/_lib/normalizeDates.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "normalizeDates",
    ()=>normalizeDates
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$date$2d$fns$2f$constructFrom$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/learn-next/final/node_modules/date-fns/constructFrom.js [app-rsc] (ecmascript)");
;
function normalizeDates(context, ...dates) {
    const normalize = __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$date$2d$fns$2f$constructFrom$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["constructFrom"].bind(null, context || dates.find((date)=>typeof date === "object"));
    return dates.map(normalize);
}
}),
"[project]/learn-next/final/node_modules/date-fns/startOfDay.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "startOfDay",
    ()=>startOfDay
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$date$2d$fns$2f$toDate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/learn-next/final/node_modules/date-fns/toDate.js [app-rsc] (ecmascript)");
;
function startOfDay(date, options) {
    const _date = (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$date$2d$fns$2f$toDate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["toDate"])(date, options?.in);
    _date.setHours(0, 0, 0, 0);
    return _date;
}
const __TURBOPACK__default__export__ = startOfDay;
}),
"[project]/learn-next/final/node_modules/date-fns/differenceInCalendarDays.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "differenceInCalendarDays",
    ()=>differenceInCalendarDays
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$getTimezoneOffsetInMilliseconds$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/learn-next/final/node_modules/date-fns/_lib/getTimezoneOffsetInMilliseconds.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$normalizeDates$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/learn-next/final/node_modules/date-fns/_lib/normalizeDates.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$date$2d$fns$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/learn-next/final/node_modules/date-fns/constants.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$date$2d$fns$2f$startOfDay$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/learn-next/final/node_modules/date-fns/startOfDay.js [app-rsc] (ecmascript)");
;
;
;
;
function differenceInCalendarDays(laterDate, earlierDate, options) {
    const [laterDate_, earlierDate_] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$normalizeDates$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["normalizeDates"])(options?.in, laterDate, earlierDate);
    const laterStartOfDay = (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$date$2d$fns$2f$startOfDay$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["startOfDay"])(laterDate_);
    const earlierStartOfDay = (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$date$2d$fns$2f$startOfDay$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["startOfDay"])(earlierDate_);
    const laterTimestamp = +laterStartOfDay - (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$getTimezoneOffsetInMilliseconds$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getTimezoneOffsetInMilliseconds"])(laterStartOfDay);
    const earlierTimestamp = +earlierStartOfDay - (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$getTimezoneOffsetInMilliseconds$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getTimezoneOffsetInMilliseconds"])(earlierStartOfDay);
    // Round the number of days to the nearest integer because the number of
    // milliseconds in a day is not constant (e.g. it's different in the week of
    // the daylight saving time clock shift).
    return Math.round((laterTimestamp - earlierTimestamp) / __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$date$2d$fns$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["millisecondsInDay"]);
}
const __TURBOPACK__default__export__ = differenceInCalendarDays;
}),
"[project]/learn-next/final/node_modules/date-fns/startOfYear.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "startOfYear",
    ()=>startOfYear
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$date$2d$fns$2f$toDate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/learn-next/final/node_modules/date-fns/toDate.js [app-rsc] (ecmascript)");
;
function startOfYear(date, options) {
    const date_ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$date$2d$fns$2f$toDate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["toDate"])(date, options?.in);
    date_.setFullYear(date_.getFullYear(), 0, 1);
    date_.setHours(0, 0, 0, 0);
    return date_;
}
const __TURBOPACK__default__export__ = startOfYear;
}),
"[project]/learn-next/final/node_modules/date-fns/getDayOfYear.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "getDayOfYear",
    ()=>getDayOfYear
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$date$2d$fns$2f$differenceInCalendarDays$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/learn-next/final/node_modules/date-fns/differenceInCalendarDays.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$date$2d$fns$2f$startOfYear$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/learn-next/final/node_modules/date-fns/startOfYear.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$date$2d$fns$2f$toDate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/learn-next/final/node_modules/date-fns/toDate.js [app-rsc] (ecmascript)");
;
;
;
function getDayOfYear(date, options) {
    const _date = (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$date$2d$fns$2f$toDate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["toDate"])(date, options?.in);
    const diff = (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$date$2d$fns$2f$differenceInCalendarDays$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["differenceInCalendarDays"])(_date, (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$date$2d$fns$2f$startOfYear$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["startOfYear"])(_date));
    const dayOfYear = diff + 1;
    return dayOfYear;
}
const __TURBOPACK__default__export__ = getDayOfYear;
}),
"[project]/learn-next/final/node_modules/date-fns/startOfWeek.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "startOfWeek",
    ()=>startOfWeek
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$defaultOptions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/learn-next/final/node_modules/date-fns/_lib/defaultOptions.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$date$2d$fns$2f$toDate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/learn-next/final/node_modules/date-fns/toDate.js [app-rsc] (ecmascript)");
;
;
function startOfWeek(date, options) {
    const defaultOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$defaultOptions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getDefaultOptions"])();
    const weekStartsOn = options?.weekStartsOn ?? options?.locale?.options?.weekStartsOn ?? defaultOptions.weekStartsOn ?? defaultOptions.locale?.options?.weekStartsOn ?? 0;
    const _date = (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$date$2d$fns$2f$toDate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["toDate"])(date, options?.in);
    const day = _date.getDay();
    const diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
    _date.setDate(_date.getDate() - diff);
    _date.setHours(0, 0, 0, 0);
    return _date;
}
const __TURBOPACK__default__export__ = startOfWeek;
}),
"[project]/learn-next/final/node_modules/date-fns/startOfISOWeek.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "startOfISOWeek",
    ()=>startOfISOWeek
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$date$2d$fns$2f$startOfWeek$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/learn-next/final/node_modules/date-fns/startOfWeek.js [app-rsc] (ecmascript)");
;
function startOfISOWeek(date, options) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$date$2d$fns$2f$startOfWeek$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["startOfWeek"])(date, {
        ...options,
        weekStartsOn: 1
    });
}
const __TURBOPACK__default__export__ = startOfISOWeek;
}),
"[project]/learn-next/final/node_modules/date-fns/getISOWeekYear.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "getISOWeekYear",
    ()=>getISOWeekYear
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$date$2d$fns$2f$constructFrom$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/learn-next/final/node_modules/date-fns/constructFrom.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$date$2d$fns$2f$startOfISOWeek$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/learn-next/final/node_modules/date-fns/startOfISOWeek.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$date$2d$fns$2f$toDate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/learn-next/final/node_modules/date-fns/toDate.js [app-rsc] (ecmascript)");
;
;
;
function getISOWeekYear(date, options) {
    const _date = (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$date$2d$fns$2f$toDate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["toDate"])(date, options?.in);
    const year = _date.getFullYear();
    const fourthOfJanuaryOfNextYear = (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$date$2d$fns$2f$constructFrom$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["constructFrom"])(_date, 0);
    fourthOfJanuaryOfNextYear.setFullYear(year + 1, 0, 4);
    fourthOfJanuaryOfNextYear.setHours(0, 0, 0, 0);
    const startOfNextYear = (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$date$2d$fns$2f$startOfISOWeek$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["startOfISOWeek"])(fourthOfJanuaryOfNextYear);
    const fourthOfJanuaryOfThisYear = (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$date$2d$fns$2f$constructFrom$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["constructFrom"])(_date, 0);
    fourthOfJanuaryOfThisYear.setFullYear(year, 0, 4);
    fourthOfJanuaryOfThisYear.setHours(0, 0, 0, 0);
    const startOfThisYear = (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$date$2d$fns$2f$startOfISOWeek$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["startOfISOWeek"])(fourthOfJanuaryOfThisYear);
    if (_date.getTime() >= startOfNextYear.getTime()) {
        return year + 1;
    } else if (_date.getTime() >= startOfThisYear.getTime()) {
        return year;
    } else {
        return year - 1;
    }
}
const __TURBOPACK__default__export__ = getISOWeekYear;
}),
"[project]/learn-next/final/node_modules/date-fns/startOfISOWeekYear.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "startOfISOWeekYear",
    ()=>startOfISOWeekYear
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$date$2d$fns$2f$constructFrom$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/learn-next/final/node_modules/date-fns/constructFrom.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$date$2d$fns$2f$getISOWeekYear$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/learn-next/final/node_modules/date-fns/getISOWeekYear.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$date$2d$fns$2f$startOfISOWeek$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/learn-next/final/node_modules/date-fns/startOfISOWeek.js [app-rsc] (ecmascript)");
;
;
;
function startOfISOWeekYear(date, options) {
    const year = (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$date$2d$fns$2f$getISOWeekYear$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getISOWeekYear"])(date, options);
    const fourthOfJanuary = (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$date$2d$fns$2f$constructFrom$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["constructFrom"])(options?.in || date, 0);
    fourthOfJanuary.setFullYear(year, 0, 4);
    fourthOfJanuary.setHours(0, 0, 0, 0);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$date$2d$fns$2f$startOfISOWeek$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["startOfISOWeek"])(fourthOfJanuary);
}
const __TURBOPACK__default__export__ = startOfISOWeekYear;
}),
"[project]/learn-next/final/node_modules/date-fns/getISOWeek.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "getISOWeek",
    ()=>getISOWeek
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$date$2d$fns$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/learn-next/final/node_modules/date-fns/constants.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$date$2d$fns$2f$startOfISOWeek$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/learn-next/final/node_modules/date-fns/startOfISOWeek.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$date$2d$fns$2f$startOfISOWeekYear$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/learn-next/final/node_modules/date-fns/startOfISOWeekYear.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$date$2d$fns$2f$toDate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/learn-next/final/node_modules/date-fns/toDate.js [app-rsc] (ecmascript)");
;
;
;
;
function getISOWeek(date, options) {
    const _date = (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$date$2d$fns$2f$toDate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["toDate"])(date, options?.in);
    const diff = +(0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$date$2d$fns$2f$startOfISOWeek$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["startOfISOWeek"])(_date) - +(0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$date$2d$fns$2f$startOfISOWeekYear$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["startOfISOWeekYear"])(_date);
    // Round the number of weeks to the nearest integer because the number of
    // milliseconds in a week is not constant (e.g. it's different in the week of
    // the daylight saving time clock shift).
    return Math.round(diff / __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$date$2d$fns$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["millisecondsInWeek"]) + 1;
}
const __TURBOPACK__default__export__ = getISOWeek;
}),
"[project]/learn-next/final/node_modules/date-fns/getWeekYear.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "getWeekYear",
    ()=>getWeekYear
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$defaultOptions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/learn-next/final/node_modules/date-fns/_lib/defaultOptions.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$date$2d$fns$2f$constructFrom$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/learn-next/final/node_modules/date-fns/constructFrom.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$date$2d$fns$2f$startOfWeek$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/learn-next/final/node_modules/date-fns/startOfWeek.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$date$2d$fns$2f$toDate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/learn-next/final/node_modules/date-fns/toDate.js [app-rsc] (ecmascript)");
;
;
;
;
function getWeekYear(date, options) {
    const _date = (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$date$2d$fns$2f$toDate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["toDate"])(date, options?.in);
    const year = _date.getFullYear();
    const defaultOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$defaultOptions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getDefaultOptions"])();
    const firstWeekContainsDate = options?.firstWeekContainsDate ?? options?.locale?.options?.firstWeekContainsDate ?? defaultOptions.firstWeekContainsDate ?? defaultOptions.locale?.options?.firstWeekContainsDate ?? 1;
    const firstWeekOfNextYear = (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$date$2d$fns$2f$constructFrom$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["constructFrom"])(options?.in || date, 0);
    firstWeekOfNextYear.setFullYear(year + 1, 0, firstWeekContainsDate);
    firstWeekOfNextYear.setHours(0, 0, 0, 0);
    const startOfNextYear = (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$date$2d$fns$2f$startOfWeek$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["startOfWeek"])(firstWeekOfNextYear, options);
    const firstWeekOfThisYear = (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$date$2d$fns$2f$constructFrom$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["constructFrom"])(options?.in || date, 0);
    firstWeekOfThisYear.setFullYear(year, 0, firstWeekContainsDate);
    firstWeekOfThisYear.setHours(0, 0, 0, 0);
    const startOfThisYear = (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$date$2d$fns$2f$startOfWeek$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["startOfWeek"])(firstWeekOfThisYear, options);
    if (+_date >= +startOfNextYear) {
        return year + 1;
    } else if (+_date >= +startOfThisYear) {
        return year;
    } else {
        return year - 1;
    }
}
const __TURBOPACK__default__export__ = getWeekYear;
}),
"[project]/learn-next/final/node_modules/date-fns/startOfWeekYear.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "startOfWeekYear",
    ()=>startOfWeekYear
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$defaultOptions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/learn-next/final/node_modules/date-fns/_lib/defaultOptions.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$date$2d$fns$2f$constructFrom$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/learn-next/final/node_modules/date-fns/constructFrom.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$date$2d$fns$2f$getWeekYear$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/learn-next/final/node_modules/date-fns/getWeekYear.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$date$2d$fns$2f$startOfWeek$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/learn-next/final/node_modules/date-fns/startOfWeek.js [app-rsc] (ecmascript)");
;
;
;
;
function startOfWeekYear(date, options) {
    const defaultOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$defaultOptions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getDefaultOptions"])();
    const firstWeekContainsDate = options?.firstWeekContainsDate ?? options?.locale?.options?.firstWeekContainsDate ?? defaultOptions.firstWeekContainsDate ?? defaultOptions.locale?.options?.firstWeekContainsDate ?? 1;
    const year = (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$date$2d$fns$2f$getWeekYear$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getWeekYear"])(date, options);
    const firstWeek = (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$date$2d$fns$2f$constructFrom$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["constructFrom"])(options?.in || date, 0);
    firstWeek.setFullYear(year, 0, firstWeekContainsDate);
    firstWeek.setHours(0, 0, 0, 0);
    const _date = (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$date$2d$fns$2f$startOfWeek$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["startOfWeek"])(firstWeek, options);
    return _date;
}
const __TURBOPACK__default__export__ = startOfWeekYear;
}),
"[project]/learn-next/final/node_modules/date-fns/getWeek.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "getWeek",
    ()=>getWeek
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$date$2d$fns$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/learn-next/final/node_modules/date-fns/constants.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$date$2d$fns$2f$startOfWeek$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/learn-next/final/node_modules/date-fns/startOfWeek.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$date$2d$fns$2f$startOfWeekYear$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/learn-next/final/node_modules/date-fns/startOfWeekYear.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$date$2d$fns$2f$toDate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/learn-next/final/node_modules/date-fns/toDate.js [app-rsc] (ecmascript)");
;
;
;
;
function getWeek(date, options) {
    const _date = (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$date$2d$fns$2f$toDate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["toDate"])(date, options?.in);
    const diff = +(0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$date$2d$fns$2f$startOfWeek$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["startOfWeek"])(_date, options) - +(0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$date$2d$fns$2f$startOfWeekYear$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["startOfWeekYear"])(_date, options);
    // Round the number of weeks to the nearest integer because the number of
    // milliseconds in a week is not constant (e.g. it's different in the week of
    // the daylight saving time clock shift).
    return Math.round(diff / __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$date$2d$fns$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["millisecondsInWeek"]) + 1;
}
const __TURBOPACK__default__export__ = getWeek;
}),
"[project]/learn-next/final/node_modules/date-fns/_lib/addLeadingZeros.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "addLeadingZeros",
    ()=>addLeadingZeros
]);
function addLeadingZeros(number, targetLength) {
    const sign = number < 0 ? "-" : "";
    const output = Math.abs(number).toString().padStart(targetLength, "0");
    return sign + output;
}
}),
"[project]/learn-next/final/node_modules/date-fns/_lib/format/lightFormatters.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "lightFormatters",
    ()=>lightFormatters
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$addLeadingZeros$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/learn-next/final/node_modules/date-fns/_lib/addLeadingZeros.js [app-rsc] (ecmascript)");
;
const lightFormatters = {
    // Year
    y (date, token) {
        // From http://www.unicode.org/reports/tr35/tr35-31/tr35-dates.html#Date_Format_tokens
        // | Year     |     y | yy |   yyy |  yyyy | yyyyy |
        // |----------|-------|----|-------|-------|-------|
        // | AD 1     |     1 | 01 |   001 |  0001 | 00001 |
        // | AD 12    |    12 | 12 |   012 |  0012 | 00012 |
        // | AD 123   |   123 | 23 |   123 |  0123 | 00123 |
        // | AD 1234  |  1234 | 34 |  1234 |  1234 | 01234 |
        // | AD 12345 | 12345 | 45 | 12345 | 12345 | 12345 |
        const signedYear = date.getFullYear();
        // Returns 1 for 1 BC (which is year 0 in JavaScript)
        const year = signedYear > 0 ? signedYear : 1 - signedYear;
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$addLeadingZeros$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addLeadingZeros"])(token === "yy" ? year % 100 : year, token.length);
    },
    // Month
    M (date, token) {
        const month = date.getMonth();
        return token === "M" ? String(month + 1) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$addLeadingZeros$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addLeadingZeros"])(month + 1, 2);
    },
    // Day of the month
    d (date, token) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$addLeadingZeros$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addLeadingZeros"])(date.getDate(), token.length);
    },
    // AM or PM
    a (date, token) {
        const dayPeriodEnumValue = date.getHours() / 12 >= 1 ? "pm" : "am";
        switch(token){
            case "a":
            case "aa":
                return dayPeriodEnumValue.toUpperCase();
            case "aaa":
                return dayPeriodEnumValue;
            case "aaaaa":
                return dayPeriodEnumValue[0];
            case "aaaa":
            default:
                return dayPeriodEnumValue === "am" ? "a.m." : "p.m.";
        }
    },
    // Hour [1-12]
    h (date, token) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$addLeadingZeros$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addLeadingZeros"])(date.getHours() % 12 || 12, token.length);
    },
    // Hour [0-23]
    H (date, token) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$addLeadingZeros$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addLeadingZeros"])(date.getHours(), token.length);
    },
    // Minute
    m (date, token) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$addLeadingZeros$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addLeadingZeros"])(date.getMinutes(), token.length);
    },
    // Second
    s (date, token) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$addLeadingZeros$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addLeadingZeros"])(date.getSeconds(), token.length);
    },
    // Fraction of second
    S (date, token) {
        const numberOfDigits = token.length;
        const milliseconds = date.getMilliseconds();
        const fractionalSeconds = Math.trunc(milliseconds * Math.pow(10, numberOfDigits - 3));
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$addLeadingZeros$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addLeadingZeros"])(fractionalSeconds, token.length);
    }
};
}),
"[project]/learn-next/final/node_modules/date-fns/_lib/format/formatters.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "formatters",
    ()=>formatters
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$date$2d$fns$2f$getDayOfYear$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/learn-next/final/node_modules/date-fns/getDayOfYear.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$date$2d$fns$2f$getISOWeek$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/learn-next/final/node_modules/date-fns/getISOWeek.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$date$2d$fns$2f$getISOWeekYear$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/learn-next/final/node_modules/date-fns/getISOWeekYear.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$date$2d$fns$2f$getWeek$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/learn-next/final/node_modules/date-fns/getWeek.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$date$2d$fns$2f$getWeekYear$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/learn-next/final/node_modules/date-fns/getWeekYear.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$addLeadingZeros$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/learn-next/final/node_modules/date-fns/_lib/addLeadingZeros.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$format$2f$lightFormatters$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/learn-next/final/node_modules/date-fns/_lib/format/lightFormatters.js [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
const dayPeriodEnum = {
    am: "am",
    pm: "pm",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
};
const formatters = {
    // Era
    G: function(date, token, localize) {
        const era = date.getFullYear() > 0 ? 1 : 0;
        switch(token){
            // AD, BC
            case "G":
            case "GG":
            case "GGG":
                return localize.era(era, {
                    width: "abbreviated"
                });
            // A, B
            case "GGGGG":
                return localize.era(era, {
                    width: "narrow"
                });
            // Anno Domini, Before Christ
            case "GGGG":
            default:
                return localize.era(era, {
                    width: "wide"
                });
        }
    },
    // Year
    y: function(date, token, localize) {
        // Ordinal number
        if (token === "yo") {
            const signedYear = date.getFullYear();
            // Returns 1 for 1 BC (which is year 0 in JavaScript)
            const year = signedYear > 0 ? signedYear : 1 - signedYear;
            return localize.ordinalNumber(year, {
                unit: "year"
            });
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$format$2f$lightFormatters$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["lightFormatters"].y(date, token);
    },
    // Local week-numbering year
    Y: function(date, token, localize, options) {
        const signedWeekYear = (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$date$2d$fns$2f$getWeekYear$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getWeekYear"])(date, options);
        // Returns 1 for 1 BC (which is year 0 in JavaScript)
        const weekYear = signedWeekYear > 0 ? signedWeekYear : 1 - signedWeekYear;
        // Two digit year
        if (token === "YY") {
            const twoDigitYear = weekYear % 100;
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$addLeadingZeros$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addLeadingZeros"])(twoDigitYear, 2);
        }
        // Ordinal number
        if (token === "Yo") {
            return localize.ordinalNumber(weekYear, {
                unit: "year"
            });
        }
        // Padding
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$addLeadingZeros$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addLeadingZeros"])(weekYear, token.length);
    },
    // ISO week-numbering year
    R: function(date, token) {
        const isoWeekYear = (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$date$2d$fns$2f$getISOWeekYear$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getISOWeekYear"])(date);
        // Padding
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$addLeadingZeros$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addLeadingZeros"])(isoWeekYear, token.length);
    },
    // Extended year. This is a single number designating the year of this calendar system.
    // The main difference between `y` and `u` localizers are B.C. years:
    // | Year | `y` | `u` |
    // |------|-----|-----|
    // | AC 1 |   1 |   1 |
    // | BC 1 |   1 |   0 |
    // | BC 2 |   2 |  -1 |
    // Also `yy` always returns the last two digits of a year,
    // while `uu` pads single digit years to 2 characters and returns other years unchanged.
    u: function(date, token) {
        const year = date.getFullYear();
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$addLeadingZeros$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addLeadingZeros"])(year, token.length);
    },
    // Quarter
    Q: function(date, token, localize) {
        const quarter = Math.ceil((date.getMonth() + 1) / 3);
        switch(token){
            // 1, 2, 3, 4
            case "Q":
                return String(quarter);
            // 01, 02, 03, 04
            case "QQ":
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$addLeadingZeros$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addLeadingZeros"])(quarter, 2);
            // 1st, 2nd, 3rd, 4th
            case "Qo":
                return localize.ordinalNumber(quarter, {
                    unit: "quarter"
                });
            // Q1, Q2, Q3, Q4
            case "QQQ":
                return localize.quarter(quarter, {
                    width: "abbreviated",
                    context: "formatting"
                });
            // 1, 2, 3, 4 (narrow quarter; could be not numerical)
            case "QQQQQ":
                return localize.quarter(quarter, {
                    width: "narrow",
                    context: "formatting"
                });
            // 1st quarter, 2nd quarter, ...
            case "QQQQ":
            default:
                return localize.quarter(quarter, {
                    width: "wide",
                    context: "formatting"
                });
        }
    },
    // Stand-alone quarter
    q: function(date, token, localize) {
        const quarter = Math.ceil((date.getMonth() + 1) / 3);
        switch(token){
            // 1, 2, 3, 4
            case "q":
                return String(quarter);
            // 01, 02, 03, 04
            case "qq":
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$addLeadingZeros$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addLeadingZeros"])(quarter, 2);
            // 1st, 2nd, 3rd, 4th
            case "qo":
                return localize.ordinalNumber(quarter, {
                    unit: "quarter"
                });
            // Q1, Q2, Q3, Q4
            case "qqq":
                return localize.quarter(quarter, {
                    width: "abbreviated",
                    context: "standalone"
                });
            // 1, 2, 3, 4 (narrow quarter; could be not numerical)
            case "qqqqq":
                return localize.quarter(quarter, {
                    width: "narrow",
                    context: "standalone"
                });
            // 1st quarter, 2nd quarter, ...
            case "qqqq":
            default:
                return localize.quarter(quarter, {
                    width: "wide",
                    context: "standalone"
                });
        }
    },
    // Month
    M: function(date, token, localize) {
        const month = date.getMonth();
        switch(token){
            case "M":
            case "MM":
                return __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$format$2f$lightFormatters$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["lightFormatters"].M(date, token);
            // 1st, 2nd, ..., 12th
            case "Mo":
                return localize.ordinalNumber(month + 1, {
                    unit: "month"
                });
            // Jan, Feb, ..., Dec
            case "MMM":
                return localize.month(month, {
                    width: "abbreviated",
                    context: "formatting"
                });
            // J, F, ..., D
            case "MMMMM":
                return localize.month(month, {
                    width: "narrow",
                    context: "formatting"
                });
            // January, February, ..., December
            case "MMMM":
            default:
                return localize.month(month, {
                    width: "wide",
                    context: "formatting"
                });
        }
    },
    // Stand-alone month
    L: function(date, token, localize) {
        const month = date.getMonth();
        switch(token){
            // 1, 2, ..., 12
            case "L":
                return String(month + 1);
            // 01, 02, ..., 12
            case "LL":
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$addLeadingZeros$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addLeadingZeros"])(month + 1, 2);
            // 1st, 2nd, ..., 12th
            case "Lo":
                return localize.ordinalNumber(month + 1, {
                    unit: "month"
                });
            // Jan, Feb, ..., Dec
            case "LLL":
                return localize.month(month, {
                    width: "abbreviated",
                    context: "standalone"
                });
            // J, F, ..., D
            case "LLLLL":
                return localize.month(month, {
                    width: "narrow",
                    context: "standalone"
                });
            // January, February, ..., December
            case "LLLL":
            default:
                return localize.month(month, {
                    width: "wide",
                    context: "standalone"
                });
        }
    },
    // Local week of year
    w: function(date, token, localize, options) {
        const week = (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$date$2d$fns$2f$getWeek$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getWeek"])(date, options);
        if (token === "wo") {
            return localize.ordinalNumber(week, {
                unit: "week"
            });
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$addLeadingZeros$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addLeadingZeros"])(week, token.length);
    },
    // ISO week of year
    I: function(date, token, localize) {
        const isoWeek = (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$date$2d$fns$2f$getISOWeek$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getISOWeek"])(date);
        if (token === "Io") {
            return localize.ordinalNumber(isoWeek, {
                unit: "week"
            });
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$addLeadingZeros$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addLeadingZeros"])(isoWeek, token.length);
    },
    // Day of the month
    d: function(date, token, localize) {
        if (token === "do") {
            return localize.ordinalNumber(date.getDate(), {
                unit: "date"
            });
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$format$2f$lightFormatters$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["lightFormatters"].d(date, token);
    },
    // Day of year
    D: function(date, token, localize) {
        const dayOfYear = (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$date$2d$fns$2f$getDayOfYear$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getDayOfYear"])(date);
        if (token === "Do") {
            return localize.ordinalNumber(dayOfYear, {
                unit: "dayOfYear"
            });
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$addLeadingZeros$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addLeadingZeros"])(dayOfYear, token.length);
    },
    // Day of week
    E: function(date, token, localize) {
        const dayOfWeek = date.getDay();
        switch(token){
            // Tue
            case "E":
            case "EE":
            case "EEE":
                return localize.day(dayOfWeek, {
                    width: "abbreviated",
                    context: "formatting"
                });
            // T
            case "EEEEE":
                return localize.day(dayOfWeek, {
                    width: "narrow",
                    context: "formatting"
                });
            // Tu
            case "EEEEEE":
                return localize.day(dayOfWeek, {
                    width: "short",
                    context: "formatting"
                });
            // Tuesday
            case "EEEE":
            default:
                return localize.day(dayOfWeek, {
                    width: "wide",
                    context: "formatting"
                });
        }
    },
    // Local day of week
    e: function(date, token, localize, options) {
        const dayOfWeek = date.getDay();
        const localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;
        switch(token){
            // Numerical value (Nth day of week with current locale or weekStartsOn)
            case "e":
                return String(localDayOfWeek);
            // Padded numerical value
            case "ee":
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$addLeadingZeros$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addLeadingZeros"])(localDayOfWeek, 2);
            // 1st, 2nd, ..., 7th
            case "eo":
                return localize.ordinalNumber(localDayOfWeek, {
                    unit: "day"
                });
            case "eee":
                return localize.day(dayOfWeek, {
                    width: "abbreviated",
                    context: "formatting"
                });
            // T
            case "eeeee":
                return localize.day(dayOfWeek, {
                    width: "narrow",
                    context: "formatting"
                });
            // Tu
            case "eeeeee":
                return localize.day(dayOfWeek, {
                    width: "short",
                    context: "formatting"
                });
            // Tuesday
            case "eeee":
            default:
                return localize.day(dayOfWeek, {
                    width: "wide",
                    context: "formatting"
                });
        }
    },
    // Stand-alone local day of week
    c: function(date, token, localize, options) {
        const dayOfWeek = date.getDay();
        const localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;
        switch(token){
            // Numerical value (same as in `e`)
            case "c":
                return String(localDayOfWeek);
            // Padded numerical value
            case "cc":
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$addLeadingZeros$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addLeadingZeros"])(localDayOfWeek, token.length);
            // 1st, 2nd, ..., 7th
            case "co":
                return localize.ordinalNumber(localDayOfWeek, {
                    unit: "day"
                });
            case "ccc":
                return localize.day(dayOfWeek, {
                    width: "abbreviated",
                    context: "standalone"
                });
            // T
            case "ccccc":
                return localize.day(dayOfWeek, {
                    width: "narrow",
                    context: "standalone"
                });
            // Tu
            case "cccccc":
                return localize.day(dayOfWeek, {
                    width: "short",
                    context: "standalone"
                });
            // Tuesday
            case "cccc":
            default:
                return localize.day(dayOfWeek, {
                    width: "wide",
                    context: "standalone"
                });
        }
    },
    // ISO day of week
    i: function(date, token, localize) {
        const dayOfWeek = date.getDay();
        const isoDayOfWeek = dayOfWeek === 0 ? 7 : dayOfWeek;
        switch(token){
            // 2
            case "i":
                return String(isoDayOfWeek);
            // 02
            case "ii":
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$addLeadingZeros$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addLeadingZeros"])(isoDayOfWeek, token.length);
            // 2nd
            case "io":
                return localize.ordinalNumber(isoDayOfWeek, {
                    unit: "day"
                });
            // Tue
            case "iii":
                return localize.day(dayOfWeek, {
                    width: "abbreviated",
                    context: "formatting"
                });
            // T
            case "iiiii":
                return localize.day(dayOfWeek, {
                    width: "narrow",
                    context: "formatting"
                });
            // Tu
            case "iiiiii":
                return localize.day(dayOfWeek, {
                    width: "short",
                    context: "formatting"
                });
            // Tuesday
            case "iiii":
            default:
                return localize.day(dayOfWeek, {
                    width: "wide",
                    context: "formatting"
                });
        }
    },
    // AM or PM
    a: function(date, token, localize) {
        const hours = date.getHours();
        const dayPeriodEnumValue = hours / 12 >= 1 ? "pm" : "am";
        switch(token){
            case "a":
            case "aa":
                return localize.dayPeriod(dayPeriodEnumValue, {
                    width: "abbreviated",
                    context: "formatting"
                });
            case "aaa":
                return localize.dayPeriod(dayPeriodEnumValue, {
                    width: "abbreviated",
                    context: "formatting"
                }).toLowerCase();
            case "aaaaa":
                return localize.dayPeriod(dayPeriodEnumValue, {
                    width: "narrow",
                    context: "formatting"
                });
            case "aaaa":
            default:
                return localize.dayPeriod(dayPeriodEnumValue, {
                    width: "wide",
                    context: "formatting"
                });
        }
    },
    // AM, PM, midnight, noon
    b: function(date, token, localize) {
        const hours = date.getHours();
        let dayPeriodEnumValue;
        if (hours === 12) {
            dayPeriodEnumValue = dayPeriodEnum.noon;
        } else if (hours === 0) {
            dayPeriodEnumValue = dayPeriodEnum.midnight;
        } else {
            dayPeriodEnumValue = hours / 12 >= 1 ? "pm" : "am";
        }
        switch(token){
            case "b":
            case "bb":
                return localize.dayPeriod(dayPeriodEnumValue, {
                    width: "abbreviated",
                    context: "formatting"
                });
            case "bbb":
                return localize.dayPeriod(dayPeriodEnumValue, {
                    width: "abbreviated",
                    context: "formatting"
                }).toLowerCase();
            case "bbbbb":
                return localize.dayPeriod(dayPeriodEnumValue, {
                    width: "narrow",
                    context: "formatting"
                });
            case "bbbb":
            default:
                return localize.dayPeriod(dayPeriodEnumValue, {
                    width: "wide",
                    context: "formatting"
                });
        }
    },
    // in the morning, in the afternoon, in the evening, at night
    B: function(date, token, localize) {
        const hours = date.getHours();
        let dayPeriodEnumValue;
        if (hours >= 17) {
            dayPeriodEnumValue = dayPeriodEnum.evening;
        } else if (hours >= 12) {
            dayPeriodEnumValue = dayPeriodEnum.afternoon;
        } else if (hours >= 4) {
            dayPeriodEnumValue = dayPeriodEnum.morning;
        } else {
            dayPeriodEnumValue = dayPeriodEnum.night;
        }
        switch(token){
            case "B":
            case "BB":
            case "BBB":
                return localize.dayPeriod(dayPeriodEnumValue, {
                    width: "abbreviated",
                    context: "formatting"
                });
            case "BBBBB":
                return localize.dayPeriod(dayPeriodEnumValue, {
                    width: "narrow",
                    context: "formatting"
                });
            case "BBBB":
            default:
                return localize.dayPeriod(dayPeriodEnumValue, {
                    width: "wide",
                    context: "formatting"
                });
        }
    },
    // Hour [1-12]
    h: function(date, token, localize) {
        if (token === "ho") {
            let hours = date.getHours() % 12;
            if (hours === 0) hours = 12;
            return localize.ordinalNumber(hours, {
                unit: "hour"
            });
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$format$2f$lightFormatters$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["lightFormatters"].h(date, token);
    },
    // Hour [0-23]
    H: function(date, token, localize) {
        if (token === "Ho") {
            return localize.ordinalNumber(date.getHours(), {
                unit: "hour"
            });
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$format$2f$lightFormatters$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["lightFormatters"].H(date, token);
    },
    // Hour [0-11]
    K: function(date, token, localize) {
        const hours = date.getHours() % 12;
        if (token === "Ko") {
            return localize.ordinalNumber(hours, {
                unit: "hour"
            });
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$addLeadingZeros$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addLeadingZeros"])(hours, token.length);
    },
    // Hour [1-24]
    k: function(date, token, localize) {
        let hours = date.getHours();
        if (hours === 0) hours = 24;
        if (token === "ko") {
            return localize.ordinalNumber(hours, {
                unit: "hour"
            });
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$addLeadingZeros$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addLeadingZeros"])(hours, token.length);
    },
    // Minute
    m: function(date, token, localize) {
        if (token === "mo") {
            return localize.ordinalNumber(date.getMinutes(), {
                unit: "minute"
            });
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$format$2f$lightFormatters$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["lightFormatters"].m(date, token);
    },
    // Second
    s: function(date, token, localize) {
        if (token === "so") {
            return localize.ordinalNumber(date.getSeconds(), {
                unit: "second"
            });
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$format$2f$lightFormatters$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["lightFormatters"].s(date, token);
    },
    // Fraction of second
    S: function(date, token) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$format$2f$lightFormatters$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["lightFormatters"].S(date, token);
    },
    // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
    X: function(date, token, _localize) {
        const timezoneOffset = date.getTimezoneOffset();
        if (timezoneOffset === 0) {
            return "Z";
        }
        switch(token){
            // Hours and optional minutes
            case "X":
                return formatTimezoneWithOptionalMinutes(timezoneOffset);
            // Hours, minutes and optional seconds without `:` delimiter
            // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
            // so this token always has the same output as `XX`
            case "XXXX":
            case "XX":
                return formatTimezone(timezoneOffset);
            // Hours, minutes and optional seconds with `:` delimiter
            // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
            // so this token always has the same output as `XXX`
            case "XXXXX":
            case "XXX":
            default:
                return formatTimezone(timezoneOffset, ":");
        }
    },
    // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
    x: function(date, token, _localize) {
        const timezoneOffset = date.getTimezoneOffset();
        switch(token){
            // Hours and optional minutes
            case "x":
                return formatTimezoneWithOptionalMinutes(timezoneOffset);
            // Hours, minutes and optional seconds without `:` delimiter
            // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
            // so this token always has the same output as `xx`
            case "xxxx":
            case "xx":
                return formatTimezone(timezoneOffset);
            // Hours, minutes and optional seconds with `:` delimiter
            // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
            // so this token always has the same output as `xxx`
            case "xxxxx":
            case "xxx":
            default:
                return formatTimezone(timezoneOffset, ":");
        }
    },
    // Timezone (GMT)
    O: function(date, token, _localize) {
        const timezoneOffset = date.getTimezoneOffset();
        switch(token){
            // Short
            case "O":
            case "OO":
            case "OOO":
                return "GMT" + formatTimezoneShort(timezoneOffset, ":");
            // Long
            case "OOOO":
            default:
                return "GMT" + formatTimezone(timezoneOffset, ":");
        }
    },
    // Timezone (specific non-location)
    z: function(date, token, _localize) {
        const timezoneOffset = date.getTimezoneOffset();
        switch(token){
            // Short
            case "z":
            case "zz":
            case "zzz":
                return "GMT" + formatTimezoneShort(timezoneOffset, ":");
            // Long
            case "zzzz":
            default:
                return "GMT" + formatTimezone(timezoneOffset, ":");
        }
    },
    // Seconds timestamp
    t: function(date, token, _localize) {
        const timestamp = Math.trunc(+date / 1000);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$addLeadingZeros$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addLeadingZeros"])(timestamp, token.length);
    },
    // Milliseconds timestamp
    T: function(date, token, _localize) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$addLeadingZeros$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addLeadingZeros"])(+date, token.length);
    }
};
function formatTimezoneShort(offset, delimiter = "") {
    const sign = offset > 0 ? "-" : "+";
    const absOffset = Math.abs(offset);
    const hours = Math.trunc(absOffset / 60);
    const minutes = absOffset % 60;
    if (minutes === 0) {
        return sign + String(hours);
    }
    return sign + String(hours) + delimiter + (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$addLeadingZeros$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addLeadingZeros"])(minutes, 2);
}
function formatTimezoneWithOptionalMinutes(offset, delimiter) {
    if (offset % 60 === 0) {
        const sign = offset > 0 ? "-" : "+";
        return sign + (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$addLeadingZeros$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addLeadingZeros"])(Math.abs(offset) / 60, 2);
    }
    return formatTimezone(offset, delimiter);
}
function formatTimezone(offset, delimiter = "") {
    const sign = offset > 0 ? "-" : "+";
    const absOffset = Math.abs(offset);
    const hours = (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$addLeadingZeros$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addLeadingZeros"])(Math.trunc(absOffset / 60), 2);
    const minutes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$addLeadingZeros$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addLeadingZeros"])(absOffset % 60, 2);
    return sign + hours + delimiter + minutes;
}
}),
"[project]/learn-next/final/node_modules/date-fns/_lib/format/longFormatters.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "longFormatters",
    ()=>longFormatters
]);
const dateLongFormatter = (pattern, formatLong)=>{
    switch(pattern){
        case "P":
            return formatLong.date({
                width: "short"
            });
        case "PP":
            return formatLong.date({
                width: "medium"
            });
        case "PPP":
            return formatLong.date({
                width: "long"
            });
        case "PPPP":
        default:
            return formatLong.date({
                width: "full"
            });
    }
};
const timeLongFormatter = (pattern, formatLong)=>{
    switch(pattern){
        case "p":
            return formatLong.time({
                width: "short"
            });
        case "pp":
            return formatLong.time({
                width: "medium"
            });
        case "ppp":
            return formatLong.time({
                width: "long"
            });
        case "pppp":
        default:
            return formatLong.time({
                width: "full"
            });
    }
};
const dateTimeLongFormatter = (pattern, formatLong)=>{
    const matchResult = pattern.match(/(P+)(p+)?/) || [];
    const datePattern = matchResult[1];
    const timePattern = matchResult[2];
    if (!timePattern) {
        return dateLongFormatter(pattern, formatLong);
    }
    let dateTimeFormat;
    switch(datePattern){
        case "P":
            dateTimeFormat = formatLong.dateTime({
                width: "short"
            });
            break;
        case "PP":
            dateTimeFormat = formatLong.dateTime({
                width: "medium"
            });
            break;
        case "PPP":
            dateTimeFormat = formatLong.dateTime({
                width: "long"
            });
            break;
        case "PPPP":
        default:
            dateTimeFormat = formatLong.dateTime({
                width: "full"
            });
            break;
    }
    return dateTimeFormat.replace("{{date}}", dateLongFormatter(datePattern, formatLong)).replace("{{time}}", timeLongFormatter(timePattern, formatLong));
};
const longFormatters = {
    p: timeLongFormatter,
    P: dateTimeLongFormatter
};
}),
"[project]/learn-next/final/node_modules/date-fns/_lib/protectedTokens.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isProtectedDayOfYearToken",
    ()=>isProtectedDayOfYearToken,
    "isProtectedWeekYearToken",
    ()=>isProtectedWeekYearToken,
    "warnOrThrowProtectedError",
    ()=>warnOrThrowProtectedError
]);
const dayOfYearTokenRE = /^D+$/;
const weekYearTokenRE = /^Y+$/;
const throwTokens = [
    "D",
    "DD",
    "YY",
    "YYYY"
];
function isProtectedDayOfYearToken(token) {
    return dayOfYearTokenRE.test(token);
}
function isProtectedWeekYearToken(token) {
    return weekYearTokenRE.test(token);
}
function warnOrThrowProtectedError(token, format, input) {
    const _message = message(token, format, input);
    console.warn(_message);
    if (throwTokens.includes(token)) throw new RangeError(_message);
}
function message(token, format, input) {
    const subject = token[0] === "Y" ? "years" : "days of the month";
    return `Use \`${token.toLowerCase()}\` instead of \`${token}\` (in \`${format}\`) for formatting ${subject} to the input \`${input}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
}
}),
"[project]/learn-next/final/node_modules/date-fns/isDate.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @name isDate
 * @category Common Helpers
 * @summary Is the given value a date?
 *
 * @description
 * Returns true if the given value is an instance of Date. The function works for dates transferred across iframes.
 *
 * @param value - The value to check
 *
 * @returns True if the given value is a date
 *
 * @example
 * // For a valid date:
 * const result = isDate(new Date())
 * //=> true
 *
 * @example
 * // For an invalid date:
 * const result = isDate(new Date(NaN))
 * //=> true
 *
 * @example
 * // For some value:
 * const result = isDate('2014-02-31')
 * //=> false
 *
 * @example
 * // For an object:
 * const result = isDate({})
 * //=> false
 */ __turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "isDate",
    ()=>isDate
]);
function isDate(value) {
    return value instanceof Date || typeof value === "object" && Object.prototype.toString.call(value) === "[object Date]";
}
const __TURBOPACK__default__export__ = isDate;
}),
"[project]/learn-next/final/node_modules/date-fns/isValid.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "isValid",
    ()=>isValid
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$date$2d$fns$2f$isDate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/learn-next/final/node_modules/date-fns/isDate.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$date$2d$fns$2f$toDate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/learn-next/final/node_modules/date-fns/toDate.js [app-rsc] (ecmascript)");
;
;
function isValid(date) {
    return !(!(0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$date$2d$fns$2f$isDate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isDate"])(date) && typeof date !== "number" || isNaN(+(0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$date$2d$fns$2f$toDate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["toDate"])(date)));
}
const __TURBOPACK__default__export__ = isValid;
}),
"[project]/learn-next/final/node_modules/date-fns/format.js [app-rsc] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "format",
    ()=>format,
    "formatDate",
    ()=>format
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$date$2d$fns$2f$locale$2f$en$2d$US$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__enUS__as__defaultLocale$3e$__ = __turbopack_context__.i("[project]/learn-next/final/node_modules/date-fns/locale/en-US.js [app-rsc] (ecmascript) <export enUS as defaultLocale>");
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$defaultOptions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/learn-next/final/node_modules/date-fns/_lib/defaultOptions.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$format$2f$formatters$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/learn-next/final/node_modules/date-fns/_lib/format/formatters.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$format$2f$longFormatters$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/learn-next/final/node_modules/date-fns/_lib/format/longFormatters.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$protectedTokens$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/learn-next/final/node_modules/date-fns/_lib/protectedTokens.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$date$2d$fns$2f$isValid$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/learn-next/final/node_modules/date-fns/isValid.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$date$2d$fns$2f$toDate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/learn-next/final/node_modules/date-fns/toDate.js [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
;
// This RegExp consists of three parts separated by `|`:
// - [yYQqMLwIdDecihHKkms]o matches any available ordinal number token
//   (one of the certain letters followed by `o`)
// - (\w)\1* matches any sequences of the same letter
// - '' matches two quote characters in a row
// - '(''|[^'])+('|$) matches anything surrounded by two quote characters ('),
//   except a single quote symbol, which ends the sequence.
//   Two quote characters do not end the sequence.
//   If there is no matching single quote
//   then the sequence will continue until the end of the string.
// - . matches any single character unmatched by previous parts of the RegExps
const formattingTokensRegExp = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g;
// This RegExp catches symbols escaped by quotes, and also
// sequences of symbols P, p, and the combinations like `PPPPPPPppppp`
const longFormattingTokensRegExp = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g;
const escapedStringRegExp = /^'([^]*?)'?$/;
const doubleQuoteRegExp = /''/g;
const unescapedLatinCharacterRegExp = /[a-zA-Z]/;
;
function format(date, formatStr, options) {
    const defaultOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$defaultOptions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getDefaultOptions"])();
    const locale = options?.locale ?? defaultOptions.locale ?? __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$date$2d$fns$2f$locale$2f$en$2d$US$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__enUS__as__defaultLocale$3e$__["defaultLocale"];
    const firstWeekContainsDate = options?.firstWeekContainsDate ?? options?.locale?.options?.firstWeekContainsDate ?? defaultOptions.firstWeekContainsDate ?? defaultOptions.locale?.options?.firstWeekContainsDate ?? 1;
    const weekStartsOn = options?.weekStartsOn ?? options?.locale?.options?.weekStartsOn ?? defaultOptions.weekStartsOn ?? defaultOptions.locale?.options?.weekStartsOn ?? 0;
    const originalDate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$date$2d$fns$2f$toDate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["toDate"])(date, options?.in);
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$date$2d$fns$2f$isValid$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isValid"])(originalDate)) {
        throw new RangeError("Invalid time value");
    }
    let parts = formatStr.match(longFormattingTokensRegExp).map((substring)=>{
        const firstCharacter = substring[0];
        if (firstCharacter === "p" || firstCharacter === "P") {
            const longFormatter = __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$format$2f$longFormatters$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["longFormatters"][firstCharacter];
            return longFormatter(substring, locale.formatLong);
        }
        return substring;
    }).join("").match(formattingTokensRegExp).map((substring)=>{
        // Replace two single quote characters with one single quote character
        if (substring === "''") {
            return {
                isToken: false,
                value: "'"
            };
        }
        const firstCharacter = substring[0];
        if (firstCharacter === "'") {
            return {
                isToken: false,
                value: cleanEscapedString(substring)
            };
        }
        if (__TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$format$2f$formatters$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["formatters"][firstCharacter]) {
            return {
                isToken: true,
                value: substring
            };
        }
        if (firstCharacter.match(unescapedLatinCharacterRegExp)) {
            throw new RangeError("Format string contains an unescaped latin alphabet character `" + firstCharacter + "`");
        }
        return {
            isToken: false,
            value: substring
        };
    });
    // invoke localize preprocessor (only for french locales at the moment)
    if (locale.localize.preprocessor) {
        parts = locale.localize.preprocessor(originalDate, parts);
    }
    const formatterOptions = {
        firstWeekContainsDate,
        weekStartsOn,
        locale
    };
    return parts.map((part)=>{
        if (!part.isToken) return part.value;
        const token = part.value;
        if (!options?.useAdditionalWeekYearTokens && (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$protectedTokens$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isProtectedWeekYearToken"])(token) || !options?.useAdditionalDayOfYearTokens && (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$protectedTokens$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isProtectedDayOfYearToken"])(token)) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$protectedTokens$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["warnOrThrowProtectedError"])(token, formatStr, String(date));
        }
        const formatter = __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$format$2f$formatters$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["formatters"][token[0]];
        return formatter(originalDate, token, locale.localize, formatterOptions);
    }).join("");
}
function cleanEscapedString(input) {
    const matched = input.match(escapedStringRegExp);
    if (!matched) {
        return input;
    }
    return matched[1].replace(doubleQuoteRegExp, "'");
}
const __TURBOPACK__default__export__ = format;
}),
"[project]/learn-next/final/node_modules/lucide-react/dist/esm/icons/clock.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>Clock
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/learn-next/final/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-rsc] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M12 6v6l4 2",
            key: "mmk7yg"
        }
    ],
    [
        "circle",
        {
            cx: "12",
            cy: "12",
            r: "10",
            key: "1mglay"
        }
    ]
];
const Clock = (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])("clock", __iconNode);
;
 //# sourceMappingURL=clock.js.map
}),
"[project]/learn-next/final/node_modules/lucide-react/dist/esm/icons/clock.js [app-rsc] (ecmascript) <export default as Clock>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Clock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/learn-next/final/node_modules/lucide-react/dist/esm/icons/clock.js [app-rsc] (ecmascript)");
}),
"[project]/learn-next/final/node_modules/lucide-react/dist/esm/icons/tag.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>Tag
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/learn-next/final/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-rsc] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z",
            key: "vktsd0"
        }
    ],
    [
        "circle",
        {
            cx: "7.5",
            cy: "7.5",
            r: ".5",
            fill: "currentColor",
            key: "kqv944"
        }
    ]
];
const Tag = (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])("tag", __iconNode);
;
 //# sourceMappingURL=tag.js.map
}),
"[project]/learn-next/final/node_modules/lucide-react/dist/esm/icons/tag.js [app-rsc] (ecmascript) <export default as Tag>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Tag",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$tag$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$tag$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/learn-next/final/node_modules/lucide-react/dist/esm/icons/tag.js [app-rsc] (ecmascript)");
}),
"[project]/learn-next/final/node_modules/xml2js/lib/defaults.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {

// Generated by CoffeeScript 1.12.7
(function() {
    exports.defaults = {
        "0.1": {
            explicitCharkey: false,
            trim: true,
            normalize: true,
            normalizeTags: false,
            attrkey: "@",
            charkey: "#",
            explicitArray: false,
            ignoreAttrs: false,
            mergeAttrs: false,
            explicitRoot: false,
            validator: null,
            xmlns: false,
            explicitChildren: false,
            childkey: '@@',
            charsAsChildren: false,
            includeWhiteChars: false,
            async: false,
            strict: true,
            attrNameProcessors: null,
            attrValueProcessors: null,
            tagNameProcessors: null,
            valueProcessors: null,
            emptyTag: ''
        },
        "0.2": {
            explicitCharkey: false,
            trim: false,
            normalize: false,
            normalizeTags: false,
            attrkey: "$",
            charkey: "_",
            explicitArray: true,
            ignoreAttrs: false,
            mergeAttrs: false,
            explicitRoot: true,
            validator: null,
            xmlns: false,
            explicitChildren: false,
            preserveChildrenOrder: false,
            childkey: '$$',
            charsAsChildren: false,
            includeWhiteChars: false,
            async: false,
            strict: true,
            attrNameProcessors: null,
            attrValueProcessors: null,
            tagNameProcessors: null,
            valueProcessors: null,
            rootName: 'root',
            xmldec: {
                'version': '1.0',
                'encoding': 'UTF-8',
                'standalone': true
            },
            doctype: null,
            renderOpts: {
                'pretty': true,
                'indent': '  ',
                'newline': '\n'
            },
            headless: false,
            chunkSize: 10000,
            emptyTag: '',
            cdata: false
        }
    };
}).call(/*TURBOPACK member replacement*/ __turbopack_context__.e);
}),
"[project]/learn-next/final/node_modules/xmlbuilder/lib/Utility.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {

// Generated by CoffeeScript 1.12.7
(function() {
    var assign, getValue, isArray, isEmpty, isFunction, isObject, isPlainObject, slice = [].slice, hasProp = {}.hasOwnProperty;
    assign = function() {
        var i, key, len, source, sources, target;
        target = arguments[0], sources = 2 <= arguments.length ? slice.call(arguments, 1) : [];
        if (isFunction(Object.assign)) {
            Object.assign.apply(null, arguments);
        } else {
            for(i = 0, len = sources.length; i < len; i++){
                source = sources[i];
                if (source != null) {
                    for(key in source){
                        if (!hasProp.call(source, key)) continue;
                        target[key] = source[key];
                    }
                }
            }
        }
        return target;
    };
    isFunction = function(val) {
        return !!val && Object.prototype.toString.call(val) === '[object Function]';
    };
    isObject = function(val) {
        var ref;
        return !!val && ((ref = typeof val) === 'function' || ref === 'object');
    };
    isArray = function(val) {
        if (isFunction(Array.isArray)) {
            return Array.isArray(val);
        } else {
            return Object.prototype.toString.call(val) === '[object Array]';
        }
    };
    isEmpty = function(val) {
        var key;
        if (isArray(val)) {
            return !val.length;
        } else {
            for(key in val){
                if (!hasProp.call(val, key)) continue;
                return false;
            }
            return true;
        }
    };
    isPlainObject = function(val) {
        var ctor, proto;
        return isObject(val) && (proto = Object.getPrototypeOf(val)) && (ctor = proto.constructor) && typeof ctor === 'function' && ctor instanceof ctor && Function.prototype.toString.call(ctor) === Function.prototype.toString.call(Object);
    };
    getValue = function(obj) {
        if (isFunction(obj.valueOf)) {
            return obj.valueOf();
        } else {
            return obj;
        }
    };
    module.exports.assign = assign;
    module.exports.isFunction = isFunction;
    module.exports.isObject = isObject;
    module.exports.isArray = isArray;
    module.exports.isEmpty = isEmpty;
    module.exports.isPlainObject = isPlainObject;
    module.exports.getValue = getValue;
}).call(/*TURBOPACK member replacement*/ __turbopack_context__.e);
}),
"[project]/learn-next/final/node_modules/xmlbuilder/lib/XMLDOMImplementation.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {

// Generated by CoffeeScript 1.12.7
(function() {
    var XMLDOMImplementation;
    module.exports = XMLDOMImplementation = function() {
        function XMLDOMImplementation() {}
        XMLDOMImplementation.prototype.hasFeature = function(feature, version) {
            return true;
        };
        XMLDOMImplementation.prototype.createDocumentType = function(qualifiedName, publicId, systemId) {
            throw new Error("This DOM method is not implemented.");
        };
        XMLDOMImplementation.prototype.createDocument = function(namespaceURI, qualifiedName, doctype) {
            throw new Error("This DOM method is not implemented.");
        };
        XMLDOMImplementation.prototype.createHTMLDocument = function(title) {
            throw new Error("This DOM method is not implemented.");
        };
        XMLDOMImplementation.prototype.getFeature = function(feature, version) {
            throw new Error("This DOM method is not implemented.");
        };
        return XMLDOMImplementation;
    }();
}).call(/*TURBOPACK member replacement*/ __turbopack_context__.e);
}),
"[project]/learn-next/final/node_modules/xmlbuilder/lib/XMLDOMErrorHandler.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {

// Generated by CoffeeScript 1.12.7
(function() {
    var XMLDOMErrorHandler;
    module.exports = XMLDOMErrorHandler = function() {
        function XMLDOMErrorHandler() {}
        XMLDOMErrorHandler.prototype.handleError = function(error) {
            throw new Error(error);
        };
        return XMLDOMErrorHandler;
    }();
}).call(/*TURBOPACK member replacement*/ __turbopack_context__.e);
}),
"[project]/learn-next/final/node_modules/xmlbuilder/lib/XMLDOMStringList.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {

// Generated by CoffeeScript 1.12.7
(function() {
    var XMLDOMStringList;
    module.exports = XMLDOMStringList = function() {
        function XMLDOMStringList(arr) {
            this.arr = arr || [];
        }
        Object.defineProperty(XMLDOMStringList.prototype, 'length', {
            get: function() {
                return this.arr.length;
            }
        });
        XMLDOMStringList.prototype.item = function(index) {
            return this.arr[index] || null;
        };
        XMLDOMStringList.prototype.contains = function(str) {
            return this.arr.indexOf(str) !== -1;
        };
        return XMLDOMStringList;
    }();
}).call(/*TURBOPACK member replacement*/ __turbopack_context__.e);
}),
"[project]/learn-next/final/node_modules/xmlbuilder/lib/XMLDOMConfiguration.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {

// Generated by CoffeeScript 1.12.7
(function() {
    var XMLDOMConfiguration, XMLDOMErrorHandler, XMLDOMStringList;
    XMLDOMErrorHandler = __turbopack_context__.r("[project]/learn-next/final/node_modules/xmlbuilder/lib/XMLDOMErrorHandler.js [app-rsc] (ecmascript)");
    XMLDOMStringList = __turbopack_context__.r("[project]/learn-next/final/node_modules/xmlbuilder/lib/XMLDOMStringList.js [app-rsc] (ecmascript)");
    module.exports = XMLDOMConfiguration = function() {
        function XMLDOMConfiguration() {
            var clonedSelf;
            this.defaultParams = {
                "canonical-form": false,
                "cdata-sections": false,
                "comments": false,
                "datatype-normalization": false,
                "element-content-whitespace": true,
                "entities": true,
                "error-handler": new XMLDOMErrorHandler(),
                "infoset": true,
                "validate-if-schema": false,
                "namespaces": true,
                "namespace-declarations": true,
                "normalize-characters": false,
                "schema-location": '',
                "schema-type": '',
                "split-cdata-sections": true,
                "validate": false,
                "well-formed": true
            };
            this.params = clonedSelf = Object.create(this.defaultParams);
        }
        Object.defineProperty(XMLDOMConfiguration.prototype, 'parameterNames', {
            get: function() {
                return new XMLDOMStringList(Object.keys(this.defaultParams));
            }
        });
        XMLDOMConfiguration.prototype.getParameter = function(name) {
            if (this.params.hasOwnProperty(name)) {
                return this.params[name];
            } else {
                return null;
            }
        };
        XMLDOMConfiguration.prototype.canSetParameter = function(name, value) {
            return true;
        };
        XMLDOMConfiguration.prototype.setParameter = function(name, value) {
            if (value != null) {
                return this.params[name] = value;
            } else {
                return delete this.params[name];
            }
        };
        return XMLDOMConfiguration;
    }();
}).call(/*TURBOPACK member replacement*/ __turbopack_context__.e);
}),
"[project]/learn-next/final/node_modules/xmlbuilder/lib/NodeType.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {

// Generated by CoffeeScript 1.12.7
(function() {
    module.exports = {
        Element: 1,
        Attribute: 2,
        Text: 3,
        CData: 4,
        EntityReference: 5,
        EntityDeclaration: 6,
        ProcessingInstruction: 7,
        Comment: 8,
        Document: 9,
        DocType: 10,
        DocumentFragment: 11,
        NotationDeclaration: 12,
        Declaration: 201,
        Raw: 202,
        AttributeDeclaration: 203,
        ElementDeclaration: 204,
        Dummy: 205
    };
}).call(/*TURBOPACK member replacement*/ __turbopack_context__.e);
}),
"[project]/learn-next/final/node_modules/xmlbuilder/lib/XMLAttribute.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {

// Generated by CoffeeScript 1.12.7
(function() {
    var NodeType, XMLAttribute, XMLNode;
    NodeType = __turbopack_context__.r("[project]/learn-next/final/node_modules/xmlbuilder/lib/NodeType.js [app-rsc] (ecmascript)");
    XMLNode = __turbopack_context__.r("[project]/learn-next/final/node_modules/xmlbuilder/lib/XMLNode.js [app-rsc] (ecmascript)");
    module.exports = XMLAttribute = function() {
        function XMLAttribute(parent, name, value) {
            this.parent = parent;
            if (this.parent) {
                this.options = this.parent.options;
                this.stringify = this.parent.stringify;
            }
            if (name == null) {
                throw new Error("Missing attribute name. " + this.debugInfo(name));
            }
            this.name = this.stringify.name(name);
            this.value = this.stringify.attValue(value);
            this.type = NodeType.Attribute;
            this.isId = false;
            this.schemaTypeInfo = null;
        }
        Object.defineProperty(XMLAttribute.prototype, 'nodeType', {
            get: function() {
                return this.type;
            }
        });
        Object.defineProperty(XMLAttribute.prototype, 'ownerElement', {
            get: function() {
                return this.parent;
            }
        });
        Object.defineProperty(XMLAttribute.prototype, 'textContent', {
            get: function() {
                return this.value;
            },
            set: function(value) {
                return this.value = value || '';
            }
        });
        Object.defineProperty(XMLAttribute.prototype, 'namespaceURI', {
            get: function() {
                return '';
            }
        });
        Object.defineProperty(XMLAttribute.prototype, 'prefix', {
            get: function() {
                return '';
            }
        });
        Object.defineProperty(XMLAttribute.prototype, 'localName', {
            get: function() {
                return this.name;
            }
        });
        Object.defineProperty(XMLAttribute.prototype, 'specified', {
            get: function() {
                return true;
            }
        });
        XMLAttribute.prototype.clone = function() {
            return Object.create(this);
        };
        XMLAttribute.prototype.toString = function(options) {
            return this.options.writer.attribute(this, this.options.writer.filterOptions(options));
        };
        XMLAttribute.prototype.debugInfo = function(name) {
            name = name || this.name;
            if (name == null) {
                return "parent: <" + this.parent.name + ">";
            } else {
                return "attribute: {" + name + "}, parent: <" + this.parent.name + ">";
            }
        };
        XMLAttribute.prototype.isEqualNode = function(node) {
            if (node.namespaceURI !== this.namespaceURI) {
                return false;
            }
            if (node.prefix !== this.prefix) {
                return false;
            }
            if (node.localName !== this.localName) {
                return false;
            }
            if (node.value !== this.value) {
                return false;
            }
            return true;
        };
        return XMLAttribute;
    }();
}).call(/*TURBOPACK member replacement*/ __turbopack_context__.e);
}),
"[project]/learn-next/final/node_modules/xmlbuilder/lib/XMLNamedNodeMap.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {

// Generated by CoffeeScript 1.12.7
(function() {
    var XMLNamedNodeMap;
    module.exports = XMLNamedNodeMap = function() {
        function XMLNamedNodeMap(nodes) {
            this.nodes = nodes;
        }
        Object.defineProperty(XMLNamedNodeMap.prototype, 'length', {
            get: function() {
                return Object.keys(this.nodes).length || 0;
            }
        });
        XMLNamedNodeMap.prototype.clone = function() {
            return this.nodes = null;
        };
        XMLNamedNodeMap.prototype.getNamedItem = function(name) {
            return this.nodes[name];
        };
        XMLNamedNodeMap.prototype.setNamedItem = function(node) {
            var oldNode;
            oldNode = this.nodes[node.nodeName];
            this.nodes[node.nodeName] = node;
            return oldNode || null;
        };
        XMLNamedNodeMap.prototype.removeNamedItem = function(name) {
            var oldNode;
            oldNode = this.nodes[name];
            delete this.nodes[name];
            return oldNode || null;
        };
        XMLNamedNodeMap.prototype.item = function(index) {
            return this.nodes[Object.keys(this.nodes)[index]] || null;
        };
        XMLNamedNodeMap.prototype.getNamedItemNS = function(namespaceURI, localName) {
            throw new Error("This DOM method is not implemented.");
        };
        XMLNamedNodeMap.prototype.setNamedItemNS = function(node) {
            throw new Error("This DOM method is not implemented.");
        };
        XMLNamedNodeMap.prototype.removeNamedItemNS = function(namespaceURI, localName) {
            throw new Error("This DOM method is not implemented.");
        };
        return XMLNamedNodeMap;
    }();
}).call(/*TURBOPACK member replacement*/ __turbopack_context__.e);
}),
"[project]/learn-next/final/node_modules/xmlbuilder/lib/XMLElement.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {

// Generated by CoffeeScript 1.12.7
(function() {
    var NodeType, XMLAttribute, XMLElement, XMLNamedNodeMap, XMLNode, getValue, isFunction, isObject, ref, extend = function(child, parent) {
        for(var key in parent){
            if (hasProp.call(parent, key)) child[key] = parent[key];
        }
        function ctor() {
            this.constructor = child;
        }
        ctor.prototype = parent.prototype;
        child.prototype = new ctor();
        child.__super__ = parent.prototype;
        return child;
    }, hasProp = {}.hasOwnProperty;
    ref = __turbopack_context__.r("[project]/learn-next/final/node_modules/xmlbuilder/lib/Utility.js [app-rsc] (ecmascript)"), isObject = ref.isObject, isFunction = ref.isFunction, getValue = ref.getValue;
    XMLNode = __turbopack_context__.r("[project]/learn-next/final/node_modules/xmlbuilder/lib/XMLNode.js [app-rsc] (ecmascript)");
    NodeType = __turbopack_context__.r("[project]/learn-next/final/node_modules/xmlbuilder/lib/NodeType.js [app-rsc] (ecmascript)");
    XMLAttribute = __turbopack_context__.r("[project]/learn-next/final/node_modules/xmlbuilder/lib/XMLAttribute.js [app-rsc] (ecmascript)");
    XMLNamedNodeMap = __turbopack_context__.r("[project]/learn-next/final/node_modules/xmlbuilder/lib/XMLNamedNodeMap.js [app-rsc] (ecmascript)");
    module.exports = XMLElement = function(superClass) {
        extend(XMLElement, superClass);
        function XMLElement(parent, name, attributes) {
            var child, j, len, ref1;
            XMLElement.__super__.constructor.call(this, parent);
            if (name == null) {
                throw new Error("Missing element name. " + this.debugInfo());
            }
            this.name = this.stringify.name(name);
            this.type = NodeType.Element;
            this.attribs = {};
            this.schemaTypeInfo = null;
            if (attributes != null) {
                this.attribute(attributes);
            }
            if (parent.type === NodeType.Document) {
                this.isRoot = true;
                this.documentObject = parent;
                parent.rootObject = this;
                if (parent.children) {
                    ref1 = parent.children;
                    for(j = 0, len = ref1.length; j < len; j++){
                        child = ref1[j];
                        if (child.type === NodeType.DocType) {
                            child.name = this.name;
                            break;
                        }
                    }
                }
            }
        }
        Object.defineProperty(XMLElement.prototype, 'tagName', {
            get: function() {
                return this.name;
            }
        });
        Object.defineProperty(XMLElement.prototype, 'namespaceURI', {
            get: function() {
                return '';
            }
        });
        Object.defineProperty(XMLElement.prototype, 'prefix', {
            get: function() {
                return '';
            }
        });
        Object.defineProperty(XMLElement.prototype, 'localName', {
            get: function() {
                return this.name;
            }
        });
        Object.defineProperty(XMLElement.prototype, 'id', {
            get: function() {
                throw new Error("This DOM method is not implemented." + this.debugInfo());
            }
        });
        Object.defineProperty(XMLElement.prototype, 'className', {
            get: function() {
                throw new Error("This DOM method is not implemented." + this.debugInfo());
            }
        });
        Object.defineProperty(XMLElement.prototype, 'classList', {
            get: function() {
                throw new Error("This DOM method is not implemented." + this.debugInfo());
            }
        });
        Object.defineProperty(XMLElement.prototype, 'attributes', {
            get: function() {
                if (!this.attributeMap || !this.attributeMap.nodes) {
                    this.attributeMap = new XMLNamedNodeMap(this.attribs);
                }
                return this.attributeMap;
            }
        });
        XMLElement.prototype.clone = function() {
            var att, attName, clonedSelf, ref1;
            clonedSelf = Object.create(this);
            if (clonedSelf.isRoot) {
                clonedSelf.documentObject = null;
            }
            clonedSelf.attribs = {};
            ref1 = this.attribs;
            for(attName in ref1){
                if (!hasProp.call(ref1, attName)) continue;
                att = ref1[attName];
                clonedSelf.attribs[attName] = att.clone();
            }
            clonedSelf.children = [];
            this.children.forEach(function(child) {
                var clonedChild;
                clonedChild = child.clone();
                clonedChild.parent = clonedSelf;
                return clonedSelf.children.push(clonedChild);
            });
            return clonedSelf;
        };
        XMLElement.prototype.attribute = function(name, value) {
            var attName, attValue;
            if (name != null) {
                name = getValue(name);
            }
            if (isObject(name)) {
                for(attName in name){
                    if (!hasProp.call(name, attName)) continue;
                    attValue = name[attName];
                    this.attribute(attName, attValue);
                }
            } else {
                if (isFunction(value)) {
                    value = value.apply();
                }
                if (this.options.keepNullAttributes && value == null) {
                    this.attribs[name] = new XMLAttribute(this, name, "");
                } else if (value != null) {
                    this.attribs[name] = new XMLAttribute(this, name, value);
                }
            }
            return this;
        };
        XMLElement.prototype.removeAttribute = function(name) {
            var attName, j, len;
            if (name == null) {
                throw new Error("Missing attribute name. " + this.debugInfo());
            }
            name = getValue(name);
            if (Array.isArray(name)) {
                for(j = 0, len = name.length; j < len; j++){
                    attName = name[j];
                    delete this.attribs[attName];
                }
            } else {
                delete this.attribs[name];
            }
            return this;
        };
        XMLElement.prototype.toString = function(options) {
            return this.options.writer.element(this, this.options.writer.filterOptions(options));
        };
        XMLElement.prototype.att = function(name, value) {
            return this.attribute(name, value);
        };
        XMLElement.prototype.a = function(name, value) {
            return this.attribute(name, value);
        };
        XMLElement.prototype.getAttribute = function(name) {
            if (this.attribs.hasOwnProperty(name)) {
                return this.attribs[name].value;
            } else {
                return null;
            }
        };
        XMLElement.prototype.setAttribute = function(name, value) {
            throw new Error("This DOM method is not implemented." + this.debugInfo());
        };
        XMLElement.prototype.getAttributeNode = function(name) {
            if (this.attribs.hasOwnProperty(name)) {
                return this.attribs[name];
            } else {
                return null;
            }
        };
        XMLElement.prototype.setAttributeNode = function(newAttr) {
            throw new Error("This DOM method is not implemented." + this.debugInfo());
        };
        XMLElement.prototype.removeAttributeNode = function(oldAttr) {
            throw new Error("This DOM method is not implemented." + this.debugInfo());
        };
        XMLElement.prototype.getElementsByTagName = function(name) {
            throw new Error("This DOM method is not implemented." + this.debugInfo());
        };
        XMLElement.prototype.getAttributeNS = function(namespaceURI, localName) {
            throw new Error("This DOM method is not implemented." + this.debugInfo());
        };
        XMLElement.prototype.setAttributeNS = function(namespaceURI, qualifiedName, value) {
            throw new Error("This DOM method is not implemented." + this.debugInfo());
        };
        XMLElement.prototype.removeAttributeNS = function(namespaceURI, localName) {
            throw new Error("This DOM method is not implemented." + this.debugInfo());
        };
        XMLElement.prototype.getAttributeNodeNS = function(namespaceURI, localName) {
            throw new Error("This DOM method is not implemented." + this.debugInfo());
        };
        XMLElement.prototype.setAttributeNodeNS = function(newAttr) {
            throw new Error("This DOM method is not implemented." + this.debugInfo());
        };
        XMLElement.prototype.getElementsByTagNameNS = function(namespaceURI, localName) {
            throw new Error("This DOM method is not implemented." + this.debugInfo());
        };
        XMLElement.prototype.hasAttribute = function(name) {
            return this.attribs.hasOwnProperty(name);
        };
        XMLElement.prototype.hasAttributeNS = function(namespaceURI, localName) {
            throw new Error("This DOM method is not implemented." + this.debugInfo());
        };
        XMLElement.prototype.setIdAttribute = function(name, isId) {
            if (this.attribs.hasOwnProperty(name)) {
                return this.attribs[name].isId;
            } else {
                return isId;
            }
        };
        XMLElement.prototype.setIdAttributeNS = function(namespaceURI, localName, isId) {
            throw new Error("This DOM method is not implemented." + this.debugInfo());
        };
        XMLElement.prototype.setIdAttributeNode = function(idAttr, isId) {
            throw new Error("This DOM method is not implemented." + this.debugInfo());
        };
        XMLElement.prototype.getElementsByTagName = function(tagname) {
            throw new Error("This DOM method is not implemented." + this.debugInfo());
        };
        XMLElement.prototype.getElementsByTagNameNS = function(namespaceURI, localName) {
            throw new Error("This DOM method is not implemented." + this.debugInfo());
        };
        XMLElement.prototype.getElementsByClassName = function(classNames) {
            throw new Error("This DOM method is not implemented." + this.debugInfo());
        };
        XMLElement.prototype.isEqualNode = function(node) {
            var i, j, ref1;
            if (!XMLElement.__super__.isEqualNode.apply(this, arguments).isEqualNode(node)) {
                return false;
            }
            if (node.namespaceURI !== this.namespaceURI) {
                return false;
            }
            if (node.prefix !== this.prefix) {
                return false;
            }
            if (node.localName !== this.localName) {
                return false;
            }
            if (node.attribs.length !== this.attribs.length) {
                return false;
            }
            for(i = j = 0, ref1 = this.attribs.length - 1; 0 <= ref1 ? j <= ref1 : j >= ref1; i = 0 <= ref1 ? ++j : --j){
                if (!this.attribs[i].isEqualNode(node.attribs[i])) {
                    return false;
                }
            }
            return true;
        };
        return XMLElement;
    }(XMLNode);
}).call(/*TURBOPACK member replacement*/ __turbopack_context__.e);
}),
"[project]/learn-next/final/node_modules/xmlbuilder/lib/XMLCharacterData.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {

// Generated by CoffeeScript 1.12.7
(function() {
    var XMLCharacterData, XMLNode, extend = function(child, parent) {
        for(var key in parent){
            if (hasProp.call(parent, key)) child[key] = parent[key];
        }
        function ctor() {
            this.constructor = child;
        }
        ctor.prototype = parent.prototype;
        child.prototype = new ctor();
        child.__super__ = parent.prototype;
        return child;
    }, hasProp = {}.hasOwnProperty;
    XMLNode = __turbopack_context__.r("[project]/learn-next/final/node_modules/xmlbuilder/lib/XMLNode.js [app-rsc] (ecmascript)");
    module.exports = XMLCharacterData = function(superClass) {
        extend(XMLCharacterData, superClass);
        function XMLCharacterData(parent) {
            XMLCharacterData.__super__.constructor.call(this, parent);
            this.value = '';
        }
        Object.defineProperty(XMLCharacterData.prototype, 'data', {
            get: function() {
                return this.value;
            },
            set: function(value) {
                return this.value = value || '';
            }
        });
        Object.defineProperty(XMLCharacterData.prototype, 'length', {
            get: function() {
                return this.value.length;
            }
        });
        Object.defineProperty(XMLCharacterData.prototype, 'textContent', {
            get: function() {
                return this.value;
            },
            set: function(value) {
                return this.value = value || '';
            }
        });
        XMLCharacterData.prototype.clone = function() {
            return Object.create(this);
        };
        XMLCharacterData.prototype.substringData = function(offset, count) {
            throw new Error("This DOM method is not implemented." + this.debugInfo());
        };
        XMLCharacterData.prototype.appendData = function(arg) {
            throw new Error("This DOM method is not implemented." + this.debugInfo());
        };
        XMLCharacterData.prototype.insertData = function(offset, arg) {
            throw new Error("This DOM method is not implemented." + this.debugInfo());
        };
        XMLCharacterData.prototype.deleteData = function(offset, count) {
            throw new Error("This DOM method is not implemented." + this.debugInfo());
        };
        XMLCharacterData.prototype.replaceData = function(offset, count, arg) {
            throw new Error("This DOM method is not implemented." + this.debugInfo());
        };
        XMLCharacterData.prototype.isEqualNode = function(node) {
            if (!XMLCharacterData.__super__.isEqualNode.apply(this, arguments).isEqualNode(node)) {
                return false;
            }
            if (node.data !== this.data) {
                return false;
            }
            return true;
        };
        return XMLCharacterData;
    }(XMLNode);
}).call(/*TURBOPACK member replacement*/ __turbopack_context__.e);
}),
"[project]/learn-next/final/node_modules/xmlbuilder/lib/XMLCData.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {

// Generated by CoffeeScript 1.12.7
(function() {
    var NodeType, XMLCData, XMLCharacterData, extend = function(child, parent) {
        for(var key in parent){
            if (hasProp.call(parent, key)) child[key] = parent[key];
        }
        function ctor() {
            this.constructor = child;
        }
        ctor.prototype = parent.prototype;
        child.prototype = new ctor();
        child.__super__ = parent.prototype;
        return child;
    }, hasProp = {}.hasOwnProperty;
    NodeType = __turbopack_context__.r("[project]/learn-next/final/node_modules/xmlbuilder/lib/NodeType.js [app-rsc] (ecmascript)");
    XMLCharacterData = __turbopack_context__.r("[project]/learn-next/final/node_modules/xmlbuilder/lib/XMLCharacterData.js [app-rsc] (ecmascript)");
    module.exports = XMLCData = function(superClass) {
        extend(XMLCData, superClass);
        function XMLCData(parent, text) {
            XMLCData.__super__.constructor.call(this, parent);
            if (text == null) {
                throw new Error("Missing CDATA text. " + this.debugInfo());
            }
            this.name = "#cdata-section";
            this.type = NodeType.CData;
            this.value = this.stringify.cdata(text);
        }
        XMLCData.prototype.clone = function() {
            return Object.create(this);
        };
        XMLCData.prototype.toString = function(options) {
            return this.options.writer.cdata(this, this.options.writer.filterOptions(options));
        };
        return XMLCData;
    }(XMLCharacterData);
}).call(/*TURBOPACK member replacement*/ __turbopack_context__.e);
}),
"[project]/learn-next/final/node_modules/xmlbuilder/lib/XMLComment.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {

// Generated by CoffeeScript 1.12.7
(function() {
    var NodeType, XMLCharacterData, XMLComment, extend = function(child, parent) {
        for(var key in parent){
            if (hasProp.call(parent, key)) child[key] = parent[key];
        }
        function ctor() {
            this.constructor = child;
        }
        ctor.prototype = parent.prototype;
        child.prototype = new ctor();
        child.__super__ = parent.prototype;
        return child;
    }, hasProp = {}.hasOwnProperty;
    NodeType = __turbopack_context__.r("[project]/learn-next/final/node_modules/xmlbuilder/lib/NodeType.js [app-rsc] (ecmascript)");
    XMLCharacterData = __turbopack_context__.r("[project]/learn-next/final/node_modules/xmlbuilder/lib/XMLCharacterData.js [app-rsc] (ecmascript)");
    module.exports = XMLComment = function(superClass) {
        extend(XMLComment, superClass);
        function XMLComment(parent, text) {
            XMLComment.__super__.constructor.call(this, parent);
            if (text == null) {
                throw new Error("Missing comment text. " + this.debugInfo());
            }
            this.name = "#comment";
            this.type = NodeType.Comment;
            this.value = this.stringify.comment(text);
        }
        XMLComment.prototype.clone = function() {
            return Object.create(this);
        };
        XMLComment.prototype.toString = function(options) {
            return this.options.writer.comment(this, this.options.writer.filterOptions(options));
        };
        return XMLComment;
    }(XMLCharacterData);
}).call(/*TURBOPACK member replacement*/ __turbopack_context__.e);
}),
"[project]/learn-next/final/node_modules/xmlbuilder/lib/XMLDeclaration.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {

// Generated by CoffeeScript 1.12.7
(function() {
    var NodeType, XMLDeclaration, XMLNode, isObject, extend = function(child, parent) {
        for(var key in parent){
            if (hasProp.call(parent, key)) child[key] = parent[key];
        }
        function ctor() {
            this.constructor = child;
        }
        ctor.prototype = parent.prototype;
        child.prototype = new ctor();
        child.__super__ = parent.prototype;
        return child;
    }, hasProp = {}.hasOwnProperty;
    isObject = __turbopack_context__.r("[project]/learn-next/final/node_modules/xmlbuilder/lib/Utility.js [app-rsc] (ecmascript)").isObject;
    XMLNode = __turbopack_context__.r("[project]/learn-next/final/node_modules/xmlbuilder/lib/XMLNode.js [app-rsc] (ecmascript)");
    NodeType = __turbopack_context__.r("[project]/learn-next/final/node_modules/xmlbuilder/lib/NodeType.js [app-rsc] (ecmascript)");
    module.exports = XMLDeclaration = function(superClass) {
        extend(XMLDeclaration, superClass);
        function XMLDeclaration(parent, version, encoding, standalone) {
            var ref;
            XMLDeclaration.__super__.constructor.call(this, parent);
            if (isObject(version)) {
                ref = version, version = ref.version, encoding = ref.encoding, standalone = ref.standalone;
            }
            if (!version) {
                version = '1.0';
            }
            this.type = NodeType.Declaration;
            this.version = this.stringify.xmlVersion(version);
            if (encoding != null) {
                this.encoding = this.stringify.xmlEncoding(encoding);
            }
            if (standalone != null) {
                this.standalone = this.stringify.xmlStandalone(standalone);
            }
        }
        XMLDeclaration.prototype.toString = function(options) {
            return this.options.writer.declaration(this, this.options.writer.filterOptions(options));
        };
        return XMLDeclaration;
    }(XMLNode);
}).call(/*TURBOPACK member replacement*/ __turbopack_context__.e);
}),
"[project]/learn-next/final/node_modules/xmlbuilder/lib/XMLDTDAttList.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {

// Generated by CoffeeScript 1.12.7
(function() {
    var NodeType, XMLDTDAttList, XMLNode, extend = function(child, parent) {
        for(var key in parent){
            if (hasProp.call(parent, key)) child[key] = parent[key];
        }
        function ctor() {
            this.constructor = child;
        }
        ctor.prototype = parent.prototype;
        child.prototype = new ctor();
        child.__super__ = parent.prototype;
        return child;
    }, hasProp = {}.hasOwnProperty;
    XMLNode = __turbopack_context__.r("[project]/learn-next/final/node_modules/xmlbuilder/lib/XMLNode.js [app-rsc] (ecmascript)");
    NodeType = __turbopack_context__.r("[project]/learn-next/final/node_modules/xmlbuilder/lib/NodeType.js [app-rsc] (ecmascript)");
    module.exports = XMLDTDAttList = function(superClass) {
        extend(XMLDTDAttList, superClass);
        function XMLDTDAttList(parent, elementName, attributeName, attributeType, defaultValueType, defaultValue) {
            XMLDTDAttList.__super__.constructor.call(this, parent);
            if (elementName == null) {
                throw new Error("Missing DTD element name. " + this.debugInfo());
            }
            if (attributeName == null) {
                throw new Error("Missing DTD attribute name. " + this.debugInfo(elementName));
            }
            if (!attributeType) {
                throw new Error("Missing DTD attribute type. " + this.debugInfo(elementName));
            }
            if (!defaultValueType) {
                throw new Error("Missing DTD attribute default. " + this.debugInfo(elementName));
            }
            if (defaultValueType.indexOf('#') !== 0) {
                defaultValueType = '#' + defaultValueType;
            }
            if (!defaultValueType.match(/^(#REQUIRED|#IMPLIED|#FIXED|#DEFAULT)$/)) {
                throw new Error("Invalid default value type; expected: #REQUIRED, #IMPLIED, #FIXED or #DEFAULT. " + this.debugInfo(elementName));
            }
            if (defaultValue && !defaultValueType.match(/^(#FIXED|#DEFAULT)$/)) {
                throw new Error("Default value only applies to #FIXED or #DEFAULT. " + this.debugInfo(elementName));
            }
            this.elementName = this.stringify.name(elementName);
            this.type = NodeType.AttributeDeclaration;
            this.attributeName = this.stringify.name(attributeName);
            this.attributeType = this.stringify.dtdAttType(attributeType);
            if (defaultValue) {
                this.defaultValue = this.stringify.dtdAttDefault(defaultValue);
            }
            this.defaultValueType = defaultValueType;
        }
        XMLDTDAttList.prototype.toString = function(options) {
            return this.options.writer.dtdAttList(this, this.options.writer.filterOptions(options));
        };
        return XMLDTDAttList;
    }(XMLNode);
}).call(/*TURBOPACK member replacement*/ __turbopack_context__.e);
}),
"[project]/learn-next/final/node_modules/xmlbuilder/lib/XMLDTDEntity.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {

// Generated by CoffeeScript 1.12.7
(function() {
    var NodeType, XMLDTDEntity, XMLNode, isObject, extend = function(child, parent) {
        for(var key in parent){
            if (hasProp.call(parent, key)) child[key] = parent[key];
        }
        function ctor() {
            this.constructor = child;
        }
        ctor.prototype = parent.prototype;
        child.prototype = new ctor();
        child.__super__ = parent.prototype;
        return child;
    }, hasProp = {}.hasOwnProperty;
    isObject = __turbopack_context__.r("[project]/learn-next/final/node_modules/xmlbuilder/lib/Utility.js [app-rsc] (ecmascript)").isObject;
    XMLNode = __turbopack_context__.r("[project]/learn-next/final/node_modules/xmlbuilder/lib/XMLNode.js [app-rsc] (ecmascript)");
    NodeType = __turbopack_context__.r("[project]/learn-next/final/node_modules/xmlbuilder/lib/NodeType.js [app-rsc] (ecmascript)");
    module.exports = XMLDTDEntity = function(superClass) {
        extend(XMLDTDEntity, superClass);
        function XMLDTDEntity(parent, pe, name, value) {
            XMLDTDEntity.__super__.constructor.call(this, parent);
            if (name == null) {
                throw new Error("Missing DTD entity name. " + this.debugInfo(name));
            }
            if (value == null) {
                throw new Error("Missing DTD entity value. " + this.debugInfo(name));
            }
            this.pe = !!pe;
            this.name = this.stringify.name(name);
            this.type = NodeType.EntityDeclaration;
            if (!isObject(value)) {
                this.value = this.stringify.dtdEntityValue(value);
                this.internal = true;
            } else {
                if (!value.pubID && !value.sysID) {
                    throw new Error("Public and/or system identifiers are required for an external entity. " + this.debugInfo(name));
                }
                if (value.pubID && !value.sysID) {
                    throw new Error("System identifier is required for a public external entity. " + this.debugInfo(name));
                }
                this.internal = false;
                if (value.pubID != null) {
                    this.pubID = this.stringify.dtdPubID(value.pubID);
                }
                if (value.sysID != null) {
                    this.sysID = this.stringify.dtdSysID(value.sysID);
                }
                if (value.nData != null) {
                    this.nData = this.stringify.dtdNData(value.nData);
                }
                if (this.pe && this.nData) {
                    throw new Error("Notation declaration is not allowed in a parameter entity. " + this.debugInfo(name));
                }
            }
        }
        Object.defineProperty(XMLDTDEntity.prototype, 'publicId', {
            get: function() {
                return this.pubID;
            }
        });
        Object.defineProperty(XMLDTDEntity.prototype, 'systemId', {
            get: function() {
                return this.sysID;
            }
        });
        Object.defineProperty(XMLDTDEntity.prototype, 'notationName', {
            get: function() {
                return this.nData || null;
            }
        });
        Object.defineProperty(XMLDTDEntity.prototype, 'inputEncoding', {
            get: function() {
                return null;
            }
        });
        Object.defineProperty(XMLDTDEntity.prototype, 'xmlEncoding', {
            get: function() {
                return null;
            }
        });
        Object.defineProperty(XMLDTDEntity.prototype, 'xmlVersion', {
            get: function() {
                return null;
            }
        });
        XMLDTDEntity.prototype.toString = function(options) {
            return this.options.writer.dtdEntity(this, this.options.writer.filterOptions(options));
        };
        return XMLDTDEntity;
    }(XMLNode);
}).call(/*TURBOPACK member replacement*/ __turbopack_context__.e);
}),
"[project]/learn-next/final/node_modules/xmlbuilder/lib/XMLDTDElement.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {

// Generated by CoffeeScript 1.12.7
(function() {
    var NodeType, XMLDTDElement, XMLNode, extend = function(child, parent) {
        for(var key in parent){
            if (hasProp.call(parent, key)) child[key] = parent[key];
        }
        function ctor() {
            this.constructor = child;
        }
        ctor.prototype = parent.prototype;
        child.prototype = new ctor();
        child.__super__ = parent.prototype;
        return child;
    }, hasProp = {}.hasOwnProperty;
    XMLNode = __turbopack_context__.r("[project]/learn-next/final/node_modules/xmlbuilder/lib/XMLNode.js [app-rsc] (ecmascript)");
    NodeType = __turbopack_context__.r("[project]/learn-next/final/node_modules/xmlbuilder/lib/NodeType.js [app-rsc] (ecmascript)");
    module.exports = XMLDTDElement = function(superClass) {
        extend(XMLDTDElement, superClass);
        function XMLDTDElement(parent, name, value) {
            XMLDTDElement.__super__.constructor.call(this, parent);
            if (name == null) {
                throw new Error("Missing DTD element name. " + this.debugInfo());
            }
            if (!value) {
                value = '(#PCDATA)';
            }
            if (Array.isArray(value)) {
                value = '(' + value.join(',') + ')';
            }
            this.name = this.stringify.name(name);
            this.type = NodeType.ElementDeclaration;
            this.value = this.stringify.dtdElementValue(value);
        }
        XMLDTDElement.prototype.toString = function(options) {
            return this.options.writer.dtdElement(this, this.options.writer.filterOptions(options));
        };
        return XMLDTDElement;
    }(XMLNode);
}).call(/*TURBOPACK member replacement*/ __turbopack_context__.e);
}),
"[project]/learn-next/final/node_modules/xmlbuilder/lib/XMLDTDNotation.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {

// Generated by CoffeeScript 1.12.7
(function() {
    var NodeType, XMLDTDNotation, XMLNode, extend = function(child, parent) {
        for(var key in parent){
            if (hasProp.call(parent, key)) child[key] = parent[key];
        }
        function ctor() {
            this.constructor = child;
        }
        ctor.prototype = parent.prototype;
        child.prototype = new ctor();
        child.__super__ = parent.prototype;
        return child;
    }, hasProp = {}.hasOwnProperty;
    XMLNode = __turbopack_context__.r("[project]/learn-next/final/node_modules/xmlbuilder/lib/XMLNode.js [app-rsc] (ecmascript)");
    NodeType = __turbopack_context__.r("[project]/learn-next/final/node_modules/xmlbuilder/lib/NodeType.js [app-rsc] (ecmascript)");
    module.exports = XMLDTDNotation = function(superClass) {
        extend(XMLDTDNotation, superClass);
        function XMLDTDNotation(parent, name, value) {
            XMLDTDNotation.__super__.constructor.call(this, parent);
            if (name == null) {
                throw new Error("Missing DTD notation name. " + this.debugInfo(name));
            }
            if (!value.pubID && !value.sysID) {
                throw new Error("Public or system identifiers are required for an external entity. " + this.debugInfo(name));
            }
            this.name = this.stringify.name(name);
            this.type = NodeType.NotationDeclaration;
            if (value.pubID != null) {
                this.pubID = this.stringify.dtdPubID(value.pubID);
            }
            if (value.sysID != null) {
                this.sysID = this.stringify.dtdSysID(value.sysID);
            }
        }
        Object.defineProperty(XMLDTDNotation.prototype, 'publicId', {
            get: function() {
                return this.pubID;
            }
        });
        Object.defineProperty(XMLDTDNotation.prototype, 'systemId', {
            get: function() {
                return this.sysID;
            }
        });
        XMLDTDNotation.prototype.toString = function(options) {
            return this.options.writer.dtdNotation(this, this.options.writer.filterOptions(options));
        };
        return XMLDTDNotation;
    }(XMLNode);
}).call(/*TURBOPACK member replacement*/ __turbopack_context__.e);
}),
"[project]/learn-next/final/node_modules/xmlbuilder/lib/XMLDocType.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {

// Generated by CoffeeScript 1.12.7
(function() {
    var NodeType, XMLDTDAttList, XMLDTDElement, XMLDTDEntity, XMLDTDNotation, XMLDocType, XMLNamedNodeMap, XMLNode, isObject, extend = function(child, parent) {
        for(var key in parent){
            if (hasProp.call(parent, key)) child[key] = parent[key];
        }
        function ctor() {
            this.constructor = child;
        }
        ctor.prototype = parent.prototype;
        child.prototype = new ctor();
        child.__super__ = parent.prototype;
        return child;
    }, hasProp = {}.hasOwnProperty;
    isObject = __turbopack_context__.r("[project]/learn-next/final/node_modules/xmlbuilder/lib/Utility.js [app-rsc] (ecmascript)").isObject;
    XMLNode = __turbopack_context__.r("[project]/learn-next/final/node_modules/xmlbuilder/lib/XMLNode.js [app-rsc] (ecmascript)");
    NodeType = __turbopack_context__.r("[project]/learn-next/final/node_modules/xmlbuilder/lib/NodeType.js [app-rsc] (ecmascript)");
    XMLDTDAttList = __turbopack_context__.r("[project]/learn-next/final/node_modules/xmlbuilder/lib/XMLDTDAttList.js [app-rsc] (ecmascript)");
    XMLDTDEntity = __turbopack_context__.r("[project]/learn-next/final/node_modules/xmlbuilder/lib/XMLDTDEntity.js [app-rsc] (ecmascript)");
    XMLDTDElement = __turbopack_context__.r("[project]/learn-next/final/node_modules/xmlbuilder/lib/XMLDTDElement.js [app-rsc] (ecmascript)");
    XMLDTDNotation = __turbopack_context__.r("[project]/learn-next/final/node_modules/xmlbuilder/lib/XMLDTDNotation.js [app-rsc] (ecmascript)");
    XMLNamedNodeMap = __turbopack_context__.r("[project]/learn-next/final/node_modules/xmlbuilder/lib/XMLNamedNodeMap.js [app-rsc] (ecmascript)");
    module.exports = XMLDocType = function(superClass) {
        extend(XMLDocType, superClass);
        function XMLDocType(parent, pubID, sysID) {
            var child, i, len, ref, ref1, ref2;
            XMLDocType.__super__.constructor.call(this, parent);
            this.type = NodeType.DocType;
            if (parent.children) {
                ref = parent.children;
                for(i = 0, len = ref.length; i < len; i++){
                    child = ref[i];
                    if (child.type === NodeType.Element) {
                        this.name = child.name;
                        break;
                    }
                }
            }
            this.documentObject = parent;
            if (isObject(pubID)) {
                ref1 = pubID, pubID = ref1.pubID, sysID = ref1.sysID;
            }
            if (sysID == null) {
                ref2 = [
                    pubID,
                    sysID
                ], sysID = ref2[0], pubID = ref2[1];
            }
            if (pubID != null) {
                this.pubID = this.stringify.dtdPubID(pubID);
            }
            if (sysID != null) {
                this.sysID = this.stringify.dtdSysID(sysID);
            }
        }
        Object.defineProperty(XMLDocType.prototype, 'entities', {
            get: function() {
                var child, i, len, nodes, ref;
                nodes = {};
                ref = this.children;
                for(i = 0, len = ref.length; i < len; i++){
                    child = ref[i];
                    if (child.type === NodeType.EntityDeclaration && !child.pe) {
                        nodes[child.name] = child;
                    }
                }
                return new XMLNamedNodeMap(nodes);
            }
        });
        Object.defineProperty(XMLDocType.prototype, 'notations', {
            get: function() {
                var child, i, len, nodes, ref;
                nodes = {};
                ref = this.children;
                for(i = 0, len = ref.length; i < len; i++){
                    child = ref[i];
                    if (child.type === NodeType.NotationDeclaration) {
                        nodes[child.name] = child;
                    }
                }
                return new XMLNamedNodeMap(nodes);
            }
        });
        Object.defineProperty(XMLDocType.prototype, 'publicId', {
            get: function() {
                return this.pubID;
            }
        });
        Object.defineProperty(XMLDocType.prototype, 'systemId', {
            get: function() {
                return this.sysID;
            }
        });
        Object.defineProperty(XMLDocType.prototype, 'internalSubset', {
            get: function() {
                throw new Error("This DOM method is not implemented." + this.debugInfo());
            }
        });
        XMLDocType.prototype.element = function(name, value) {
            var child;
            child = new XMLDTDElement(this, name, value);
            this.children.push(child);
            return this;
        };
        XMLDocType.prototype.attList = function(elementName, attributeName, attributeType, defaultValueType, defaultValue) {
            var child;
            child = new XMLDTDAttList(this, elementName, attributeName, attributeType, defaultValueType, defaultValue);
            this.children.push(child);
            return this;
        };
        XMLDocType.prototype.entity = function(name, value) {
            var child;
            child = new XMLDTDEntity(this, false, name, value);
            this.children.push(child);
            return this;
        };
        XMLDocType.prototype.pEntity = function(name, value) {
            var child;
            child = new XMLDTDEntity(this, true, name, value);
            this.children.push(child);
            return this;
        };
        XMLDocType.prototype.notation = function(name, value) {
            var child;
            child = new XMLDTDNotation(this, name, value);
            this.children.push(child);
            return this;
        };
        XMLDocType.prototype.toString = function(options) {
            return this.options.writer.docType(this, this.options.writer.filterOptions(options));
        };
        XMLDocType.prototype.ele = function(name, value) {
            return this.element(name, value);
        };
        XMLDocType.prototype.att = function(elementName, attributeName, attributeType, defaultValueType, defaultValue) {
            return this.attList(elementName, attributeName, attributeType, defaultValueType, defaultValue);
        };
        XMLDocType.prototype.ent = function(name, value) {
            return this.entity(name, value);
        };
        XMLDocType.prototype.pent = function(name, value) {
            return this.pEntity(name, value);
        };
        XMLDocType.prototype.not = function(name, value) {
            return this.notation(name, value);
        };
        XMLDocType.prototype.up = function() {
            return this.root() || this.documentObject;
        };
        XMLDocType.prototype.isEqualNode = function(node) {
            if (!XMLDocType.__super__.isEqualNode.apply(this, arguments).isEqualNode(node)) {
                return false;
            }
            if (node.name !== this.name) {
                return false;
            }
            if (node.publicId !== this.publicId) {
                return false;
            }
            if (node.systemId !== this.systemId) {
                return false;
            }
            return true;
        };
        return XMLDocType;
    }(XMLNode);
}).call(/*TURBOPACK member replacement*/ __turbopack_context__.e);
}),
"[project]/learn-next/final/node_modules/xmlbuilder/lib/XMLRaw.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {

// Generated by CoffeeScript 1.12.7
(function() {
    var NodeType, XMLNode, XMLRaw, extend = function(child, parent) {
        for(var key in parent){
            if (hasProp.call(parent, key)) child[key] = parent[key];
        }
        function ctor() {
            this.constructor = child;
        }
        ctor.prototype = parent.prototype;
        child.prototype = new ctor();
        child.__super__ = parent.prototype;
        return child;
    }, hasProp = {}.hasOwnProperty;
    NodeType = __turbopack_context__.r("[project]/learn-next/final/node_modules/xmlbuilder/lib/NodeType.js [app-rsc] (ecmascript)");
    XMLNode = __turbopack_context__.r("[project]/learn-next/final/node_modules/xmlbuilder/lib/XMLNode.js [app-rsc] (ecmascript)");
    module.exports = XMLRaw = function(superClass) {
        extend(XMLRaw, superClass);
        function XMLRaw(parent, text) {
            XMLRaw.__super__.constructor.call(this, parent);
            if (text == null) {
                throw new Error("Missing raw text. " + this.debugInfo());
            }
            this.type = NodeType.Raw;
            this.value = this.stringify.raw(text);
        }
        XMLRaw.prototype.clone = function() {
            return Object.create(this);
        };
        XMLRaw.prototype.toString = function(options) {
            return this.options.writer.raw(this, this.options.writer.filterOptions(options));
        };
        return XMLRaw;
    }(XMLNode);
}).call(/*TURBOPACK member replacement*/ __turbopack_context__.e);
}),
"[project]/learn-next/final/node_modules/xmlbuilder/lib/XMLText.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {

// Generated by CoffeeScript 1.12.7
(function() {
    var NodeType, XMLCharacterData, XMLText, extend = function(child, parent) {
        for(var key in parent){
            if (hasProp.call(parent, key)) child[key] = parent[key];
        }
        function ctor() {
            this.constructor = child;
        }
        ctor.prototype = parent.prototype;
        child.prototype = new ctor();
        child.__super__ = parent.prototype;
        return child;
    }, hasProp = {}.hasOwnProperty;
    NodeType = __turbopack_context__.r("[project]/learn-next/final/node_modules/xmlbuilder/lib/NodeType.js [app-rsc] (ecmascript)");
    XMLCharacterData = __turbopack_context__.r("[project]/learn-next/final/node_modules/xmlbuilder/lib/XMLCharacterData.js [app-rsc] (ecmascript)");
    module.exports = XMLText = function(superClass) {
        extend(XMLText, superClass);
        function XMLText(parent, text) {
            XMLText.__super__.constructor.call(this, parent);
            if (text == null) {
                throw new Error("Missing element text. " + this.debugInfo());
            }
            this.name = "#text";
            this.type = NodeType.Text;
            this.value = this.stringify.text(text);
        }
        Object.defineProperty(XMLText.prototype, 'isElementContentWhitespace', {
            get: function() {
                throw new Error("This DOM method is not implemented." + this.debugInfo());
            }
        });
        Object.defineProperty(XMLText.prototype, 'wholeText', {
            get: function() {
                var next, prev, str;
                str = '';
                prev = this.previousSibling;
                while(prev){
                    str = prev.data + str;
                    prev = prev.previousSibling;
                }
                str += this.data;
                next = this.nextSibling;
                while(next){
                    str = str + next.data;
                    next = next.nextSibling;
                }
                return str;
            }
        });
        XMLText.prototype.clone = function() {
            return Object.create(this);
        };
        XMLText.prototype.toString = function(options) {
            return this.options.writer.text(this, this.options.writer.filterOptions(options));
        };
        XMLText.prototype.splitText = function(offset) {
            throw new Error("This DOM method is not implemented." + this.debugInfo());
        };
        XMLText.prototype.replaceWholeText = function(content) {
            throw new Error("This DOM method is not implemented." + this.debugInfo());
        };
        return XMLText;
    }(XMLCharacterData);
}).call(/*TURBOPACK member replacement*/ __turbopack_context__.e);
}),
"[project]/learn-next/final/node_modules/xmlbuilder/lib/XMLProcessingInstruction.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {

// Generated by CoffeeScript 1.12.7
(function() {
    var NodeType, XMLCharacterData, XMLProcessingInstruction, extend = function(child, parent) {
        for(var key in parent){
            if (hasProp.call(parent, key)) child[key] = parent[key];
        }
        function ctor() {
            this.constructor = child;
        }
        ctor.prototype = parent.prototype;
        child.prototype = new ctor();
        child.__super__ = parent.prototype;
        return child;
    }, hasProp = {}.hasOwnProperty;
    NodeType = __turbopack_context__.r("[project]/learn-next/final/node_modules/xmlbuilder/lib/NodeType.js [app-rsc] (ecmascript)");
    XMLCharacterData = __turbopack_context__.r("[project]/learn-next/final/node_modules/xmlbuilder/lib/XMLCharacterData.js [app-rsc] (ecmascript)");
    module.exports = XMLProcessingInstruction = function(superClass) {
        extend(XMLProcessingInstruction, superClass);
        function XMLProcessingInstruction(parent, target, value) {
            XMLProcessingInstruction.__super__.constructor.call(this, parent);
            if (target == null) {
                throw new Error("Missing instruction target. " + this.debugInfo());
            }
            this.type = NodeType.ProcessingInstruction;
            this.target = this.stringify.insTarget(target);
            this.name = this.target;
            if (value) {
                this.value = this.stringify.insValue(value);
            }
        }
        XMLProcessingInstruction.prototype.clone = function() {
            return Object.create(this);
        };
        XMLProcessingInstruction.prototype.toString = function(options) {
            return this.options.writer.processingInstruction(this, this.options.writer.filterOptions(options));
        };
        XMLProcessingInstruction.prototype.isEqualNode = function(node) {
            if (!XMLProcessingInstruction.__super__.isEqualNode.apply(this, arguments).isEqualNode(node)) {
                return false;
            }
            if (node.target !== this.target) {
                return false;
            }
            return true;
        };
        return XMLProcessingInstruction;
    }(XMLCharacterData);
}).call(/*TURBOPACK member replacement*/ __turbopack_context__.e);
}),
"[project]/learn-next/final/node_modules/xmlbuilder/lib/XMLDummy.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {

// Generated by CoffeeScript 1.12.7
(function() {
    var NodeType, XMLDummy, XMLNode, extend = function(child, parent) {
        for(var key in parent){
            if (hasProp.call(parent, key)) child[key] = parent[key];
        }
        function ctor() {
            this.constructor = child;
        }
        ctor.prototype = parent.prototype;
        child.prototype = new ctor();
        child.__super__ = parent.prototype;
        return child;
    }, hasProp = {}.hasOwnProperty;
    XMLNode = __turbopack_context__.r("[project]/learn-next/final/node_modules/xmlbuilder/lib/XMLNode.js [app-rsc] (ecmascript)");
    NodeType = __turbopack_context__.r("[project]/learn-next/final/node_modules/xmlbuilder/lib/NodeType.js [app-rsc] (ecmascript)");
    module.exports = XMLDummy = function(superClass) {
        extend(XMLDummy, superClass);
        function XMLDummy(parent) {
            XMLDummy.__super__.constructor.call(this, parent);
            this.type = NodeType.Dummy;
        }
        XMLDummy.prototype.clone = function() {
            return Object.create(this);
        };
        XMLDummy.prototype.toString = function(options) {
            return '';
        };
        return XMLDummy;
    }(XMLNode);
}).call(/*TURBOPACK member replacement*/ __turbopack_context__.e);
}),
"[project]/learn-next/final/node_modules/xmlbuilder/lib/XMLNodeList.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {

// Generated by CoffeeScript 1.12.7
(function() {
    var XMLNodeList;
    module.exports = XMLNodeList = function() {
        function XMLNodeList(nodes) {
            this.nodes = nodes;
        }
        Object.defineProperty(XMLNodeList.prototype, 'length', {
            get: function() {
                return this.nodes.length || 0;
            }
        });
        XMLNodeList.prototype.clone = function() {
            return this.nodes = null;
        };
        XMLNodeList.prototype.item = function(index) {
            return this.nodes[index] || null;
        };
        return XMLNodeList;
    }();
}).call(/*TURBOPACK member replacement*/ __turbopack_context__.e);
}),
"[project]/learn-next/final/node_modules/xmlbuilder/lib/DocumentPosition.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {

// Generated by CoffeeScript 1.12.7
(function() {
    module.exports = {
        Disconnected: 1,
        Preceding: 2,
        Following: 4,
        Contains: 8,
        ContainedBy: 16,
        ImplementationSpecific: 32
    };
}).call(/*TURBOPACK member replacement*/ __turbopack_context__.e);
}),
"[project]/learn-next/final/node_modules/xmlbuilder/lib/XMLNode.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {

// Generated by CoffeeScript 1.12.7
(function() {
    var DocumentPosition, NodeType, XMLCData, XMLComment, XMLDeclaration, XMLDocType, XMLDummy, XMLElement, XMLNamedNodeMap, XMLNode, XMLNodeList, XMLProcessingInstruction, XMLRaw, XMLText, getValue, isEmpty, isFunction, isObject, ref1, hasProp = {}.hasOwnProperty;
    ref1 = __turbopack_context__.r("[project]/learn-next/final/node_modules/xmlbuilder/lib/Utility.js [app-rsc] (ecmascript)"), isObject = ref1.isObject, isFunction = ref1.isFunction, isEmpty = ref1.isEmpty, getValue = ref1.getValue;
    XMLElement = null;
    XMLCData = null;
    XMLComment = null;
    XMLDeclaration = null;
    XMLDocType = null;
    XMLRaw = null;
    XMLText = null;
    XMLProcessingInstruction = null;
    XMLDummy = null;
    NodeType = null;
    XMLNodeList = null;
    XMLNamedNodeMap = null;
    DocumentPosition = null;
    module.exports = XMLNode = function() {
        function XMLNode(parent1) {
            this.parent = parent1;
            if (this.parent) {
                this.options = this.parent.options;
                this.stringify = this.parent.stringify;
            }
            this.value = null;
            this.children = [];
            this.baseURI = null;
            if (!XMLElement) {
                XMLElement = __turbopack_context__.r("[project]/learn-next/final/node_modules/xmlbuilder/lib/XMLElement.js [app-rsc] (ecmascript)");
                XMLCData = __turbopack_context__.r("[project]/learn-next/final/node_modules/xmlbuilder/lib/XMLCData.js [app-rsc] (ecmascript)");
                XMLComment = __turbopack_context__.r("[project]/learn-next/final/node_modules/xmlbuilder/lib/XMLComment.js [app-rsc] (ecmascript)");
                XMLDeclaration = __turbopack_context__.r("[project]/learn-next/final/node_modules/xmlbuilder/lib/XMLDeclaration.js [app-rsc] (ecmascript)");
                XMLDocType = __turbopack_context__.r("[project]/learn-next/final/node_modules/xmlbuilder/lib/XMLDocType.js [app-rsc] (ecmascript)");
                XMLRaw = __turbopack_context__.r("[project]/learn-next/final/node_modules/xmlbuilder/lib/XMLRaw.js [app-rsc] (ecmascript)");
                XMLText = __turbopack_context__.r("[project]/learn-next/final/node_modules/xmlbuilder/lib/XMLText.js [app-rsc] (ecmascript)");
                XMLProcessingInstruction = __turbopack_context__.r("[project]/learn-next/final/node_modules/xmlbuilder/lib/XMLProcessingInstruction.js [app-rsc] (ecmascript)");
                XMLDummy = __turbopack_context__.r("[project]/learn-next/final/node_modules/xmlbuilder/lib/XMLDummy.js [app-rsc] (ecmascript)");
                NodeType = __turbopack_context__.r("[project]/learn-next/final/node_modules/xmlbuilder/lib/NodeType.js [app-rsc] (ecmascript)");
                XMLNodeList = __turbopack_context__.r("[project]/learn-next/final/node_modules/xmlbuilder/lib/XMLNodeList.js [app-rsc] (ecmascript)");
                XMLNamedNodeMap = __turbopack_context__.r("[project]/learn-next/final/node_modules/xmlbuilder/lib/XMLNamedNodeMap.js [app-rsc] (ecmascript)");
                DocumentPosition = __turbopack_context__.r("[project]/learn-next/final/node_modules/xmlbuilder/lib/DocumentPosition.js [app-rsc] (ecmascript)");
            }
        }
        Object.defineProperty(XMLNode.prototype, 'nodeName', {
            get: function() {
                return this.name;
            }
        });
        Object.defineProperty(XMLNode.prototype, 'nodeType', {
            get: function() {
                return this.type;
            }
        });
        Object.defineProperty(XMLNode.prototype, 'nodeValue', {
            get: function() {
                return this.value;
            }
        });
        Object.defineProperty(XMLNode.prototype, 'parentNode', {
            get: function() {
                return this.parent;
            }
        });
        Object.defineProperty(XMLNode.prototype, 'childNodes', {
            get: function() {
                if (!this.childNodeList || !this.childNodeList.nodes) {
                    this.childNodeList = new XMLNodeList(this.children);
                }
                return this.childNodeList;
            }
        });
        Object.defineProperty(XMLNode.prototype, 'firstChild', {
            get: function() {
                return this.children[0] || null;
            }
        });
        Object.defineProperty(XMLNode.prototype, 'lastChild', {
            get: function() {
                return this.children[this.children.length - 1] || null;
            }
        });
        Object.defineProperty(XMLNode.prototype, 'previousSibling', {
            get: function() {
                var i;
                i = this.parent.children.indexOf(this);
                return this.parent.children[i - 1] || null;
            }
        });
        Object.defineProperty(XMLNode.prototype, 'nextSibling', {
            get: function() {
                var i;
                i = this.parent.children.indexOf(this);
                return this.parent.children[i + 1] || null;
            }
        });
        Object.defineProperty(XMLNode.prototype, 'ownerDocument', {
            get: function() {
                return this.document() || null;
            }
        });
        Object.defineProperty(XMLNode.prototype, 'textContent', {
            get: function() {
                var child, j, len, ref2, str;
                if (this.nodeType === NodeType.Element || this.nodeType === NodeType.DocumentFragment) {
                    str = '';
                    ref2 = this.children;
                    for(j = 0, len = ref2.length; j < len; j++){
                        child = ref2[j];
                        if (child.textContent) {
                            str += child.textContent;
                        }
                    }
                    return str;
                } else {
                    return null;
                }
            },
            set: function(value) {
                throw new Error("This DOM method is not implemented." + this.debugInfo());
            }
        });
        XMLNode.prototype.setParent = function(parent) {
            var child, j, len, ref2, results;
            this.parent = parent;
            if (parent) {
                this.options = parent.options;
                this.stringify = parent.stringify;
            }
            ref2 = this.children;
            results = [];
            for(j = 0, len = ref2.length; j < len; j++){
                child = ref2[j];
                results.push(child.setParent(this));
            }
            return results;
        };
        XMLNode.prototype.element = function(name, attributes, text) {
            var childNode, item, j, k, key, lastChild, len, len1, ref2, ref3, val;
            lastChild = null;
            if (attributes === null && text == null) {
                ref2 = [
                    {},
                    null
                ], attributes = ref2[0], text = ref2[1];
            }
            if (attributes == null) {
                attributes = {};
            }
            attributes = getValue(attributes);
            if (!isObject(attributes)) {
                ref3 = [
                    attributes,
                    text
                ], text = ref3[0], attributes = ref3[1];
            }
            if (name != null) {
                name = getValue(name);
            }
            if (Array.isArray(name)) {
                for(j = 0, len = name.length; j < len; j++){
                    item = name[j];
                    lastChild = this.element(item);
                }
            } else if (isFunction(name)) {
                lastChild = this.element(name.apply());
            } else if (isObject(name)) {
                for(key in name){
                    if (!hasProp.call(name, key)) continue;
                    val = name[key];
                    if (isFunction(val)) {
                        val = val.apply();
                    }
                    if (!this.options.ignoreDecorators && this.stringify.convertAttKey && key.indexOf(this.stringify.convertAttKey) === 0) {
                        lastChild = this.attribute(key.substr(this.stringify.convertAttKey.length), val);
                    } else if (!this.options.separateArrayItems && Array.isArray(val) && isEmpty(val)) {
                        lastChild = this.dummy();
                    } else if (isObject(val) && isEmpty(val)) {
                        lastChild = this.element(key);
                    } else if (!this.options.keepNullNodes && val == null) {
                        lastChild = this.dummy();
                    } else if (!this.options.separateArrayItems && Array.isArray(val)) {
                        for(k = 0, len1 = val.length; k < len1; k++){
                            item = val[k];
                            childNode = {};
                            childNode[key] = item;
                            lastChild = this.element(childNode);
                        }
                    } else if (isObject(val)) {
                        if (!this.options.ignoreDecorators && this.stringify.convertTextKey && key.indexOf(this.stringify.convertTextKey) === 0) {
                            lastChild = this.element(val);
                        } else {
                            lastChild = this.element(key);
                            lastChild.element(val);
                        }
                    } else {
                        lastChild = this.element(key, val);
                    }
                }
            } else if (!this.options.keepNullNodes && text === null) {
                lastChild = this.dummy();
            } else {
                if (!this.options.ignoreDecorators && this.stringify.convertTextKey && name.indexOf(this.stringify.convertTextKey) === 0) {
                    lastChild = this.text(text);
                } else if (!this.options.ignoreDecorators && this.stringify.convertCDataKey && name.indexOf(this.stringify.convertCDataKey) === 0) {
                    lastChild = this.cdata(text);
                } else if (!this.options.ignoreDecorators && this.stringify.convertCommentKey && name.indexOf(this.stringify.convertCommentKey) === 0) {
                    lastChild = this.comment(text);
                } else if (!this.options.ignoreDecorators && this.stringify.convertRawKey && name.indexOf(this.stringify.convertRawKey) === 0) {
                    lastChild = this.raw(text);
                } else if (!this.options.ignoreDecorators && this.stringify.convertPIKey && name.indexOf(this.stringify.convertPIKey) === 0) {
                    lastChild = this.instruction(name.substr(this.stringify.convertPIKey.length), text);
                } else {
                    lastChild = this.node(name, attributes, text);
                }
            }
            if (lastChild == null) {
                throw new Error("Could not create any elements with: " + name + ". " + this.debugInfo());
            }
            return lastChild;
        };
        XMLNode.prototype.insertBefore = function(name, attributes, text) {
            var child, i, newChild, refChild, removed;
            if (name != null ? name.type : void 0) {
                newChild = name;
                refChild = attributes;
                newChild.setParent(this);
                if (refChild) {
                    i = children.indexOf(refChild);
                    removed = children.splice(i);
                    children.push(newChild);
                    Array.prototype.push.apply(children, removed);
                } else {
                    children.push(newChild);
                }
                return newChild;
            } else {
                if (this.isRoot) {
                    throw new Error("Cannot insert elements at root level. " + this.debugInfo(name));
                }
                i = this.parent.children.indexOf(this);
                removed = this.parent.children.splice(i);
                child = this.parent.element(name, attributes, text);
                Array.prototype.push.apply(this.parent.children, removed);
                return child;
            }
        };
        XMLNode.prototype.insertAfter = function(name, attributes, text) {
            var child, i, removed;
            if (this.isRoot) {
                throw new Error("Cannot insert elements at root level. " + this.debugInfo(name));
            }
            i = this.parent.children.indexOf(this);
            removed = this.parent.children.splice(i + 1);
            child = this.parent.element(name, attributes, text);
            Array.prototype.push.apply(this.parent.children, removed);
            return child;
        };
        XMLNode.prototype.remove = function() {
            var i, ref2;
            if (this.isRoot) {
                throw new Error("Cannot remove the root element. " + this.debugInfo());
            }
            i = this.parent.children.indexOf(this);
            [].splice.apply(this.parent.children, [
                i,
                i - i + 1
            ].concat(ref2 = [])), ref2;
            return this.parent;
        };
        XMLNode.prototype.node = function(name, attributes, text) {
            var child, ref2;
            if (name != null) {
                name = getValue(name);
            }
            attributes || (attributes = {});
            attributes = getValue(attributes);
            if (!isObject(attributes)) {
                ref2 = [
                    attributes,
                    text
                ], text = ref2[0], attributes = ref2[1];
            }
            child = new XMLElement(this, name, attributes);
            if (text != null) {
                child.text(text);
            }
            this.children.push(child);
            return child;
        };
        XMLNode.prototype.text = function(value) {
            var child;
            if (isObject(value)) {
                this.element(value);
            }
            child = new XMLText(this, value);
            this.children.push(child);
            return this;
        };
        XMLNode.prototype.cdata = function(value) {
            var child;
            child = new XMLCData(this, value);
            this.children.push(child);
            return this;
        };
        XMLNode.prototype.comment = function(value) {
            var child;
            child = new XMLComment(this, value);
            this.children.push(child);
            return this;
        };
        XMLNode.prototype.commentBefore = function(value) {
            var child, i, removed;
            i = this.parent.children.indexOf(this);
            removed = this.parent.children.splice(i);
            child = this.parent.comment(value);
            Array.prototype.push.apply(this.parent.children, removed);
            return this;
        };
        XMLNode.prototype.commentAfter = function(value) {
            var child, i, removed;
            i = this.parent.children.indexOf(this);
            removed = this.parent.children.splice(i + 1);
            child = this.parent.comment(value);
            Array.prototype.push.apply(this.parent.children, removed);
            return this;
        };
        XMLNode.prototype.raw = function(value) {
            var child;
            child = new XMLRaw(this, value);
            this.children.push(child);
            return this;
        };
        XMLNode.prototype.dummy = function() {
            var child;
            child = new XMLDummy(this);
            return child;
        };
        XMLNode.prototype.instruction = function(target, value) {
            var insTarget, insValue, instruction, j, len;
            if (target != null) {
                target = getValue(target);
            }
            if (value != null) {
                value = getValue(value);
            }
            if (Array.isArray(target)) {
                for(j = 0, len = target.length; j < len; j++){
                    insTarget = target[j];
                    this.instruction(insTarget);
                }
            } else if (isObject(target)) {
                for(insTarget in target){
                    if (!hasProp.call(target, insTarget)) continue;
                    insValue = target[insTarget];
                    this.instruction(insTarget, insValue);
                }
            } else {
                if (isFunction(value)) {
                    value = value.apply();
                }
                instruction = new XMLProcessingInstruction(this, target, value);
                this.children.push(instruction);
            }
            return this;
        };
        XMLNode.prototype.instructionBefore = function(target, value) {
            var child, i, removed;
            i = this.parent.children.indexOf(this);
            removed = this.parent.children.splice(i);
            child = this.parent.instruction(target, value);
            Array.prototype.push.apply(this.parent.children, removed);
            return this;
        };
        XMLNode.prototype.instructionAfter = function(target, value) {
            var child, i, removed;
            i = this.parent.children.indexOf(this);
            removed = this.parent.children.splice(i + 1);
            child = this.parent.instruction(target, value);
            Array.prototype.push.apply(this.parent.children, removed);
            return this;
        };
        XMLNode.prototype.declaration = function(version, encoding, standalone) {
            var doc, xmldec;
            doc = this.document();
            xmldec = new XMLDeclaration(doc, version, encoding, standalone);
            if (doc.children.length === 0) {
                doc.children.unshift(xmldec);
            } else if (doc.children[0].type === NodeType.Declaration) {
                doc.children[0] = xmldec;
            } else {
                doc.children.unshift(xmldec);
            }
            return doc.root() || doc;
        };
        XMLNode.prototype.dtd = function(pubID, sysID) {
            var child, doc, doctype, i, j, k, len, len1, ref2, ref3;
            doc = this.document();
            doctype = new XMLDocType(doc, pubID, sysID);
            ref2 = doc.children;
            for(i = j = 0, len = ref2.length; j < len; i = ++j){
                child = ref2[i];
                if (child.type === NodeType.DocType) {
                    doc.children[i] = doctype;
                    return doctype;
                }
            }
            ref3 = doc.children;
            for(i = k = 0, len1 = ref3.length; k < len1; i = ++k){
                child = ref3[i];
                if (child.isRoot) {
                    doc.children.splice(i, 0, doctype);
                    return doctype;
                }
            }
            doc.children.push(doctype);
            return doctype;
        };
        XMLNode.prototype.up = function() {
            if (this.isRoot) {
                throw new Error("The root node has no parent. Use doc() if you need to get the document object.");
            }
            return this.parent;
        };
        XMLNode.prototype.root = function() {
            var node;
            node = this;
            while(node){
                if (node.type === NodeType.Document) {
                    return node.rootObject;
                } else if (node.isRoot) {
                    return node;
                } else {
                    node = node.parent;
                }
            }
        };
        XMLNode.prototype.document = function() {
            var node;
            node = this;
            while(node){
                if (node.type === NodeType.Document) {
                    return node;
                } else {
                    node = node.parent;
                }
            }
        };
        XMLNode.prototype.end = function(options) {
            return this.document().end(options);
        };
        XMLNode.prototype.prev = function() {
            var i;
            i = this.parent.children.indexOf(this);
            if (i < 1) {
                throw new Error("Already at the first node. " + this.debugInfo());
            }
            return this.parent.children[i - 1];
        };
        XMLNode.prototype.next = function() {
            var i;
            i = this.parent.children.indexOf(this);
            if (i === -1 || i === this.parent.children.length - 1) {
                throw new Error("Already at the last node. " + this.debugInfo());
            }
            return this.parent.children[i + 1];
        };
        XMLNode.prototype.importDocument = function(doc) {
            var clonedRoot;
            clonedRoot = doc.root().clone();
            clonedRoot.parent = this;
            clonedRoot.isRoot = false;
            this.children.push(clonedRoot);
            return this;
        };
        XMLNode.prototype.debugInfo = function(name) {
            var ref2, ref3;
            name = name || this.name;
            if (name == null && !((ref2 = this.parent) != null ? ref2.name : void 0)) {
                return "";
            } else if (name == null) {
                return "parent: <" + this.parent.name + ">";
            } else if (!((ref3 = this.parent) != null ? ref3.name : void 0)) {
                return "node: <" + name + ">";
            } else {
                return "node: <" + name + ">, parent: <" + this.parent.name + ">";
            }
        };
        XMLNode.prototype.ele = function(name, attributes, text) {
            return this.element(name, attributes, text);
        };
        XMLNode.prototype.nod = function(name, attributes, text) {
            return this.node(name, attributes, text);
        };
        XMLNode.prototype.txt = function(value) {
            return this.text(value);
        };
        XMLNode.prototype.dat = function(value) {
            return this.cdata(value);
        };
        XMLNode.prototype.com = function(value) {
            return this.comment(value);
        };
        XMLNode.prototype.ins = function(target, value) {
            return this.instruction(target, value);
        };
        XMLNode.prototype.doc = function() {
            return this.document();
        };
        XMLNode.prototype.dec = function(version, encoding, standalone) {
            return this.declaration(version, encoding, standalone);
        };
        XMLNode.prototype.e = function(name, attributes, text) {
            return this.element(name, attributes, text);
        };
        XMLNode.prototype.n = function(name, attributes, text) {
            return this.node(name, attributes, text);
        };
        XMLNode.prototype.t = function(value) {
            return this.text(value);
        };
        XMLNode.prototype.d = function(value) {
            return this.cdata(value);
        };
        XMLNode.prototype.c = function(value) {
            return this.comment(value);
        };
        XMLNode.prototype.r = function(value) {
            return this.raw(value);
        };
        XMLNode.prototype.i = function(target, value) {
            return this.instruction(target, value);
        };
        XMLNode.prototype.u = function() {
            return this.up();
        };
        XMLNode.prototype.importXMLBuilder = function(doc) {
            return this.importDocument(doc);
        };
        XMLNode.prototype.replaceChild = function(newChild, oldChild) {
            throw new Error("This DOM method is not implemented." + this.debugInfo());
        };
        XMLNode.prototype.removeChild = function(oldChild) {
            throw new Error("This DOM method is not implemented." + this.debugInfo());
        };
        XMLNode.prototype.appendChild = function(newChild) {
            throw new Error("This DOM method is not implemented." + this.debugInfo());
        };
        XMLNode.prototype.hasChildNodes = function() {
            return this.children.length !== 0;
        };
        XMLNode.prototype.cloneNode = function(deep) {
            throw new Error("This DOM method is not implemented." + this.debugInfo());
        };
        XMLNode.prototype.normalize = function() {
            throw new Error("This DOM method is not implemented." + this.debugInfo());
        };
        XMLNode.prototype.isSupported = function(feature, version) {
            return true;
        };
        XMLNode.prototype.hasAttributes = function() {
            return this.attribs.length !== 0;
        };
        XMLNode.prototype.compareDocumentPosition = function(other) {
            var ref, res;
            ref = this;
            if (ref === other) {
                return 0;
            } else if (this.document() !== other.document()) {
                res = DocumentPosition.Disconnected | DocumentPosition.ImplementationSpecific;
                if (Math.random() < 0.5) {
                    res |= DocumentPosition.Preceding;
                } else {
                    res |= DocumentPosition.Following;
                }
                return res;
            } else if (ref.isAncestor(other)) {
                return DocumentPosition.Contains | DocumentPosition.Preceding;
            } else if (ref.isDescendant(other)) {
                return DocumentPosition.Contains | DocumentPosition.Following;
            } else if (ref.isPreceding(other)) {
                return DocumentPosition.Preceding;
            } else {
                return DocumentPosition.Following;
            }
        };
        XMLNode.prototype.isSameNode = function(other) {
            throw new Error("This DOM method is not implemented." + this.debugInfo());
        };
        XMLNode.prototype.lookupPrefix = function(namespaceURI) {
            throw new Error("This DOM method is not implemented." + this.debugInfo());
        };
        XMLNode.prototype.isDefaultNamespace = function(namespaceURI) {
            throw new Error("This DOM method is not implemented." + this.debugInfo());
        };
        XMLNode.prototype.lookupNamespaceURI = function(prefix) {
            throw new Error("This DOM method is not implemented." + this.debugInfo());
        };
        XMLNode.prototype.isEqualNode = function(node) {
            var i, j, ref2;
            if (node.nodeType !== this.nodeType) {
                return false;
            }
            if (node.children.length !== this.children.length) {
                return false;
            }
            for(i = j = 0, ref2 = this.children.length - 1; 0 <= ref2 ? j <= ref2 : j >= ref2; i = 0 <= ref2 ? ++j : --j){
                if (!this.children[i].isEqualNode(node.children[i])) {
                    return false;
                }
            }
            return true;
        };
        XMLNode.prototype.getFeature = function(feature, version) {
            throw new Error("This DOM method is not implemented." + this.debugInfo());
        };
        XMLNode.prototype.setUserData = function(key, data, handler) {
            throw new Error("This DOM method is not implemented." + this.debugInfo());
        };
        XMLNode.prototype.getUserData = function(key) {
            throw new Error("This DOM method is not implemented." + this.debugInfo());
        };
        XMLNode.prototype.contains = function(other) {
            if (!other) {
                return false;
            }
            return other === this || this.isDescendant(other);
        };
        XMLNode.prototype.isDescendant = function(node) {
            var child, isDescendantChild, j, len, ref2;
            ref2 = this.children;
            for(j = 0, len = ref2.length; j < len; j++){
                child = ref2[j];
                if (node === child) {
                    return true;
                }
                isDescendantChild = child.isDescendant(node);
                if (isDescendantChild) {
                    return true;
                }
            }
            return false;
        };
        XMLNode.prototype.isAncestor = function(node) {
            return node.isDescendant(this);
        };
        XMLNode.prototype.isPreceding = function(node) {
            var nodePos, thisPos;
            nodePos = this.treePosition(node);
            thisPos = this.treePosition(this);
            if (nodePos === -1 || thisPos === -1) {
                return false;
            } else {
                return nodePos < thisPos;
            }
        };
        XMLNode.prototype.isFollowing = function(node) {
            var nodePos, thisPos;
            nodePos = this.treePosition(node);
            thisPos = this.treePosition(this);
            if (nodePos === -1 || thisPos === -1) {
                return false;
            } else {
                return nodePos > thisPos;
            }
        };
        XMLNode.prototype.treePosition = function(node) {
            var found, pos;
            pos = 0;
            found = false;
            this.foreachTreeNode(this.document(), function(childNode) {
                pos++;
                if (!found && childNode === node) {
                    return found = true;
                }
            });
            if (found) {
                return pos;
            } else {
                return -1;
            }
        };
        XMLNode.prototype.foreachTreeNode = function(node, func) {
            var child, j, len, ref2, res;
            node || (node = this.document());
            ref2 = node.children;
            for(j = 0, len = ref2.length; j < len; j++){
                child = ref2[j];
                if (res = func(child)) {
                    return res;
                } else {
                    res = this.foreachTreeNode(child, func);
                    if (res) {
                        return res;
                    }
                }
            }
        };
        return XMLNode;
    }();
}).call(/*TURBOPACK member replacement*/ __turbopack_context__.e);
}),
"[project]/learn-next/final/node_modules/xmlbuilder/lib/XMLStringifier.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {

// Generated by CoffeeScript 1.12.7
(function() {
    var XMLStringifier, bind = function(fn, me) {
        return function() {
            return fn.apply(me, arguments);
        };
    }, hasProp = {}.hasOwnProperty;
    module.exports = XMLStringifier = function() {
        function XMLStringifier(options) {
            this.assertLegalName = bind(this.assertLegalName, this);
            this.assertLegalChar = bind(this.assertLegalChar, this);
            var key, ref, value;
            options || (options = {});
            this.options = options;
            if (!this.options.version) {
                this.options.version = '1.0';
            }
            ref = options.stringify || {};
            for(key in ref){
                if (!hasProp.call(ref, key)) continue;
                value = ref[key];
                this[key] = value;
            }
        }
        XMLStringifier.prototype.name = function(val) {
            if (this.options.noValidation) {
                return val;
            }
            return this.assertLegalName('' + val || '');
        };
        XMLStringifier.prototype.text = function(val) {
            if (this.options.noValidation) {
                return val;
            }
            return this.assertLegalChar(this.textEscape('' + val || ''));
        };
        XMLStringifier.prototype.cdata = function(val) {
            if (this.options.noValidation) {
                return val;
            }
            val = '' + val || '';
            val = val.replace(']]>', ']]]]><![CDATA[>');
            return this.assertLegalChar(val);
        };
        XMLStringifier.prototype.comment = function(val) {
            if (this.options.noValidation) {
                return val;
            }
            val = '' + val || '';
            if (val.match(/--/)) {
                throw new Error("Comment text cannot contain double-hypen: " + val);
            }
            return this.assertLegalChar(val);
        };
        XMLStringifier.prototype.raw = function(val) {
            if (this.options.noValidation) {
                return val;
            }
            return '' + val || '';
        };
        XMLStringifier.prototype.attValue = function(val) {
            if (this.options.noValidation) {
                return val;
            }
            return this.assertLegalChar(this.attEscape(val = '' + val || ''));
        };
        XMLStringifier.prototype.insTarget = function(val) {
            if (this.options.noValidation) {
                return val;
            }
            return this.assertLegalChar('' + val || '');
        };
        XMLStringifier.prototype.insValue = function(val) {
            if (this.options.noValidation) {
                return val;
            }
            val = '' + val || '';
            if (val.match(/\?>/)) {
                throw new Error("Invalid processing instruction value: " + val);
            }
            return this.assertLegalChar(val);
        };
        XMLStringifier.prototype.xmlVersion = function(val) {
            if (this.options.noValidation) {
                return val;
            }
            val = '' + val || '';
            if (!val.match(/1\.[0-9]+/)) {
                throw new Error("Invalid version number: " + val);
            }
            return val;
        };
        XMLStringifier.prototype.xmlEncoding = function(val) {
            if (this.options.noValidation) {
                return val;
            }
            val = '' + val || '';
            if (!val.match(/^[A-Za-z](?:[A-Za-z0-9._-])*$/)) {
                throw new Error("Invalid encoding: " + val);
            }
            return this.assertLegalChar(val);
        };
        XMLStringifier.prototype.xmlStandalone = function(val) {
            if (this.options.noValidation) {
                return val;
            }
            if (val) {
                return "yes";
            } else {
                return "no";
            }
        };
        XMLStringifier.prototype.dtdPubID = function(val) {
            if (this.options.noValidation) {
                return val;
            }
            return this.assertLegalChar('' + val || '');
        };
        XMLStringifier.prototype.dtdSysID = function(val) {
            if (this.options.noValidation) {
                return val;
            }
            return this.assertLegalChar('' + val || '');
        };
        XMLStringifier.prototype.dtdElementValue = function(val) {
            if (this.options.noValidation) {
                return val;
            }
            return this.assertLegalChar('' + val || '');
        };
        XMLStringifier.prototype.dtdAttType = function(val) {
            if (this.options.noValidation) {
                return val;
            }
            return this.assertLegalChar('' + val || '');
        };
        XMLStringifier.prototype.dtdAttDefault = function(val) {
            if (this.options.noValidation) {
                return val;
            }
            return this.assertLegalChar('' + val || '');
        };
        XMLStringifier.prototype.dtdEntityValue = function(val) {
            if (this.options.noValidation) {
                return val;
            }
            return this.assertLegalChar('' + val || '');
        };
        XMLStringifier.prototype.dtdNData = function(val) {
            if (this.options.noValidation) {
                return val;
            }
            return this.assertLegalChar('' + val || '');
        };
        XMLStringifier.prototype.convertAttKey = '@';
        XMLStringifier.prototype.convertPIKey = '?';
        XMLStringifier.prototype.convertTextKey = '#text';
        XMLStringifier.prototype.convertCDataKey = '#cdata';
        XMLStringifier.prototype.convertCommentKey = '#comment';
        XMLStringifier.prototype.convertRawKey = '#raw';
        XMLStringifier.prototype.assertLegalChar = function(str) {
            var regex, res;
            if (this.options.noValidation) {
                return str;
            }
            regex = '';
            if (this.options.version === '1.0') {
                regex = /[\0-\x08\x0B\f\x0E-\x1F\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/;
                if (res = str.match(regex)) {
                    throw new Error("Invalid character in string: " + str + " at index " + res.index);
                }
            } else if (this.options.version === '1.1') {
                regex = /[\0\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/;
                if (res = str.match(regex)) {
                    throw new Error("Invalid character in string: " + str + " at index " + res.index);
                }
            }
            return str;
        };
        XMLStringifier.prototype.assertLegalName = function(str) {
            var regex;
            if (this.options.noValidation) {
                return str;
            }
            this.assertLegalChar(str);
            regex = /^([:A-Z_a-z\xC0-\xD6\xD8-\xF6\xF8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]|[\uD800-\uDB7F][\uDC00-\uDFFF])([\x2D\.0-:A-Z_a-z\xB7\xC0-\xD6\xD8-\xF6\xF8-\u037D\u037F-\u1FFF\u200C\u200D\u203F\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]|[\uD800-\uDB7F][\uDC00-\uDFFF])*$/;
            if (!str.match(regex)) {
                throw new Error("Invalid character in name");
            }
            return str;
        };
        XMLStringifier.prototype.textEscape = function(str) {
            var ampregex;
            if (this.options.noValidation) {
                return str;
            }
            ampregex = this.options.noDoubleEncoding ? /(?!&\S+;)&/g : /&/g;
            return str.replace(ampregex, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/\r/g, '&#xD;');
        };
        XMLStringifier.prototype.attEscape = function(str) {
            var ampregex;
            if (this.options.noValidation) {
                return str;
            }
            ampregex = this.options.noDoubleEncoding ? /(?!&\S+;)&/g : /&/g;
            return str.replace(ampregex, '&amp;').replace(/</g, '&lt;').replace(/"/g, '&quot;').replace(/\t/g, '&#x9;').replace(/\n/g, '&#xA;').replace(/\r/g, '&#xD;');
        };
        return XMLStringifier;
    }();
}).call(/*TURBOPACK member replacement*/ __turbopack_context__.e);
}),
"[project]/learn-next/final/node_modules/xmlbuilder/lib/WriterState.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {

// Generated by CoffeeScript 1.12.7
(function() {
    module.exports = {
        None: 0,
        OpenTag: 1,
        InsideTag: 2,
        CloseTag: 3
    };
}).call(/*TURBOPACK member replacement*/ __turbopack_context__.e);
}),
"[project]/learn-next/final/node_modules/xmlbuilder/lib/XMLWriterBase.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {

// Generated by CoffeeScript 1.12.7
(function() {
    var NodeType, WriterState, XMLCData, XMLComment, XMLDTDAttList, XMLDTDElement, XMLDTDEntity, XMLDTDNotation, XMLDeclaration, XMLDocType, XMLDummy, XMLElement, XMLProcessingInstruction, XMLRaw, XMLText, XMLWriterBase, assign, hasProp = {}.hasOwnProperty;
    assign = __turbopack_context__.r("[project]/learn-next/final/node_modules/xmlbuilder/lib/Utility.js [app-rsc] (ecmascript)").assign;
    NodeType = __turbopack_context__.r("[project]/learn-next/final/node_modules/xmlbuilder/lib/NodeType.js [app-rsc] (ecmascript)");
    XMLDeclaration = __turbopack_context__.r("[project]/learn-next/final/node_modules/xmlbuilder/lib/XMLDeclaration.js [app-rsc] (ecmascript)");
    XMLDocType = __turbopack_context__.r("[project]/learn-next/final/node_modules/xmlbuilder/lib/XMLDocType.js [app-rsc] (ecmascript)");
    XMLCData = __turbopack_context__.r("[project]/learn-next/final/node_modules/xmlbuilder/lib/XMLCData.js [app-rsc] (ecmascript)");
    XMLComment = __turbopack_context__.r("[project]/learn-next/final/node_modules/xmlbuilder/lib/XMLComment.js [app-rsc] (ecmascript)");
    XMLElement = __turbopack_context__.r("[project]/learn-next/final/node_modules/xmlbuilder/lib/XMLElement.js [app-rsc] (ecmascript)");
    XMLRaw = __turbopack_context__.r("[project]/learn-next/final/node_modules/xmlbuilder/lib/XMLRaw.js [app-rsc] (ecmascript)");
    XMLText = __turbopack_context__.r("[project]/learn-next/final/node_modules/xmlbuilder/lib/XMLText.js [app-rsc] (ecmascript)");
    XMLProcessingInstruction = __turbopack_context__.r("[project]/learn-next/final/node_modules/xmlbuilder/lib/XMLProcessingInstruction.js [app-rsc] (ecmascript)");
    XMLDummy = __turbopack_context__.r("[project]/learn-next/final/node_modules/xmlbuilder/lib/XMLDummy.js [app-rsc] (ecmascript)");
    XMLDTDAttList = __turbopack_context__.r("[project]/learn-next/final/node_modules/xmlbuilder/lib/XMLDTDAttList.js [app-rsc] (ecmascript)");
    XMLDTDElement = __turbopack_context__.r("[project]/learn-next/final/node_modules/xmlbuilder/lib/XMLDTDElement.js [app-rsc] (ecmascript)");
    XMLDTDEntity = __turbopack_context__.r("[project]/learn-next/final/node_modules/xmlbuilder/lib/XMLDTDEntity.js [app-rsc] (ecmascript)");
    XMLDTDNotation = __turbopack_context__.r("[project]/learn-next/final/node_modules/xmlbuilder/lib/XMLDTDNotation.js [app-rsc] (ecmascript)");
    WriterState = __turbopack_context__.r("[project]/learn-next/final/node_modules/xmlbuilder/lib/WriterState.js [app-rsc] (ecmascript)");
    module.exports = XMLWriterBase = function() {
        function XMLWriterBase(options) {
            var key, ref, value;
            options || (options = {});
            this.options = options;
            ref = options.writer || {};
            for(key in ref){
                if (!hasProp.call(ref, key)) continue;
                value = ref[key];
                this["_" + key] = this[key];
                this[key] = value;
            }
        }
        XMLWriterBase.prototype.filterOptions = function(options) {
            var filteredOptions, ref, ref1, ref2, ref3, ref4, ref5, ref6;
            options || (options = {});
            options = assign({}, this.options, options);
            filteredOptions = {
                writer: this
            };
            filteredOptions.pretty = options.pretty || false;
            filteredOptions.allowEmpty = options.allowEmpty || false;
            filteredOptions.indent = (ref = options.indent) != null ? ref : '  ';
            filteredOptions.newline = (ref1 = options.newline) != null ? ref1 : '\n';
            filteredOptions.offset = (ref2 = options.offset) != null ? ref2 : 0;
            filteredOptions.dontPrettyTextNodes = (ref3 = (ref4 = options.dontPrettyTextNodes) != null ? ref4 : options.dontprettytextnodes) != null ? ref3 : 0;
            filteredOptions.spaceBeforeSlash = (ref5 = (ref6 = options.spaceBeforeSlash) != null ? ref6 : options.spacebeforeslash) != null ? ref5 : '';
            if (filteredOptions.spaceBeforeSlash === true) {
                filteredOptions.spaceBeforeSlash = ' ';
            }
            filteredOptions.suppressPrettyCount = 0;
            filteredOptions.user = {};
            filteredOptions.state = WriterState.None;
            return filteredOptions;
        };
        XMLWriterBase.prototype.indent = function(node, options, level) {
            var indentLevel;
            if (!options.pretty || options.suppressPrettyCount) {
                return '';
            } else if (options.pretty) {
                indentLevel = (level || 0) + options.offset + 1;
                if (indentLevel > 0) {
                    return new Array(indentLevel).join(options.indent);
                }
            }
            return '';
        };
        XMLWriterBase.prototype.endline = function(node, options, level) {
            if (!options.pretty || options.suppressPrettyCount) {
                return '';
            } else {
                return options.newline;
            }
        };
        XMLWriterBase.prototype.attribute = function(att, options, level) {
            var r;
            this.openAttribute(att, options, level);
            r = ' ' + att.name + '="' + att.value + '"';
            this.closeAttribute(att, options, level);
            return r;
        };
        XMLWriterBase.prototype.cdata = function(node, options, level) {
            var r;
            this.openNode(node, options, level);
            options.state = WriterState.OpenTag;
            r = this.indent(node, options, level) + '<![CDATA[';
            options.state = WriterState.InsideTag;
            r += node.value;
            options.state = WriterState.CloseTag;
            r += ']]>' + this.endline(node, options, level);
            options.state = WriterState.None;
            this.closeNode(node, options, level);
            return r;
        };
        XMLWriterBase.prototype.comment = function(node, options, level) {
            var r;
            this.openNode(node, options, level);
            options.state = WriterState.OpenTag;
            r = this.indent(node, options, level) + '<!-- ';
            options.state = WriterState.InsideTag;
            r += node.value;
            options.state = WriterState.CloseTag;
            r += ' -->' + this.endline(node, options, level);
            options.state = WriterState.None;
            this.closeNode(node, options, level);
            return r;
        };
        XMLWriterBase.prototype.declaration = function(node, options, level) {
            var r;
            this.openNode(node, options, level);
            options.state = WriterState.OpenTag;
            r = this.indent(node, options, level) + '<?xml';
            options.state = WriterState.InsideTag;
            r += ' version="' + node.version + '"';
            if (node.encoding != null) {
                r += ' encoding="' + node.encoding + '"';
            }
            if (node.standalone != null) {
                r += ' standalone="' + node.standalone + '"';
            }
            options.state = WriterState.CloseTag;
            r += options.spaceBeforeSlash + '?>';
            r += this.endline(node, options, level);
            options.state = WriterState.None;
            this.closeNode(node, options, level);
            return r;
        };
        XMLWriterBase.prototype.docType = function(node, options, level) {
            var child, i, len, r, ref;
            level || (level = 0);
            this.openNode(node, options, level);
            options.state = WriterState.OpenTag;
            r = this.indent(node, options, level);
            r += '<!DOCTYPE ' + node.root().name;
            if (node.pubID && node.sysID) {
                r += ' PUBLIC "' + node.pubID + '" "' + node.sysID + '"';
            } else if (node.sysID) {
                r += ' SYSTEM "' + node.sysID + '"';
            }
            if (node.children.length > 0) {
                r += ' [';
                r += this.endline(node, options, level);
                options.state = WriterState.InsideTag;
                ref = node.children;
                for(i = 0, len = ref.length; i < len; i++){
                    child = ref[i];
                    r += this.writeChildNode(child, options, level + 1);
                }
                options.state = WriterState.CloseTag;
                r += ']';
            }
            options.state = WriterState.CloseTag;
            r += options.spaceBeforeSlash + '>';
            r += this.endline(node, options, level);
            options.state = WriterState.None;
            this.closeNode(node, options, level);
            return r;
        };
        XMLWriterBase.prototype.element = function(node, options, level) {
            var att, child, childNodeCount, firstChildNode, i, j, len, len1, name, prettySuppressed, r, ref, ref1, ref2;
            level || (level = 0);
            prettySuppressed = false;
            r = '';
            this.openNode(node, options, level);
            options.state = WriterState.OpenTag;
            r += this.indent(node, options, level) + '<' + node.name;
            ref = node.attribs;
            for(name in ref){
                if (!hasProp.call(ref, name)) continue;
                att = ref[name];
                r += this.attribute(att, options, level);
            }
            childNodeCount = node.children.length;
            firstChildNode = childNodeCount === 0 ? null : node.children[0];
            if (childNodeCount === 0 || node.children.every(function(e) {
                return (e.type === NodeType.Text || e.type === NodeType.Raw) && e.value === '';
            })) {
                if (options.allowEmpty) {
                    r += '>';
                    options.state = WriterState.CloseTag;
                    r += '</' + node.name + '>' + this.endline(node, options, level);
                } else {
                    options.state = WriterState.CloseTag;
                    r += options.spaceBeforeSlash + '/>' + this.endline(node, options, level);
                }
            } else if (options.pretty && childNodeCount === 1 && (firstChildNode.type === NodeType.Text || firstChildNode.type === NodeType.Raw) && firstChildNode.value != null) {
                r += '>';
                options.state = WriterState.InsideTag;
                options.suppressPrettyCount++;
                prettySuppressed = true;
                r += this.writeChildNode(firstChildNode, options, level + 1);
                options.suppressPrettyCount--;
                prettySuppressed = false;
                options.state = WriterState.CloseTag;
                r += '</' + node.name + '>' + this.endline(node, options, level);
            } else {
                if (options.dontPrettyTextNodes) {
                    ref1 = node.children;
                    for(i = 0, len = ref1.length; i < len; i++){
                        child = ref1[i];
                        if ((child.type === NodeType.Text || child.type === NodeType.Raw) && child.value != null) {
                            options.suppressPrettyCount++;
                            prettySuppressed = true;
                            break;
                        }
                    }
                }
                r += '>' + this.endline(node, options, level);
                options.state = WriterState.InsideTag;
                ref2 = node.children;
                for(j = 0, len1 = ref2.length; j < len1; j++){
                    child = ref2[j];
                    r += this.writeChildNode(child, options, level + 1);
                }
                options.state = WriterState.CloseTag;
                r += this.indent(node, options, level) + '</' + node.name + '>';
                if (prettySuppressed) {
                    options.suppressPrettyCount--;
                }
                r += this.endline(node, options, level);
                options.state = WriterState.None;
            }
            this.closeNode(node, options, level);
            return r;
        };
        XMLWriterBase.prototype.writeChildNode = function(node, options, level) {
            switch(node.type){
                case NodeType.CData:
                    return this.cdata(node, options, level);
                case NodeType.Comment:
                    return this.comment(node, options, level);
                case NodeType.Element:
                    return this.element(node, options, level);
                case NodeType.Raw:
                    return this.raw(node, options, level);
                case NodeType.Text:
                    return this.text(node, options, level);
                case NodeType.ProcessingInstruction:
                    return this.processingInstruction(node, options, level);
                case NodeType.Dummy:
                    return '';
                case NodeType.Declaration:
                    return this.declaration(node, options, level);
                case NodeType.DocType:
                    return this.docType(node, options, level);
                case NodeType.AttributeDeclaration:
                    return this.dtdAttList(node, options, level);
                case NodeType.ElementDeclaration:
                    return this.dtdElement(node, options, level);
                case NodeType.EntityDeclaration:
                    return this.dtdEntity(node, options, level);
                case NodeType.NotationDeclaration:
                    return this.dtdNotation(node, options, level);
                default:
                    throw new Error("Unknown XML node type: " + node.constructor.name);
            }
        };
        XMLWriterBase.prototype.processingInstruction = function(node, options, level) {
            var r;
            this.openNode(node, options, level);
            options.state = WriterState.OpenTag;
            r = this.indent(node, options, level) + '<?';
            options.state = WriterState.InsideTag;
            r += node.target;
            if (node.value) {
                r += ' ' + node.value;
            }
            options.state = WriterState.CloseTag;
            r += options.spaceBeforeSlash + '?>';
            r += this.endline(node, options, level);
            options.state = WriterState.None;
            this.closeNode(node, options, level);
            return r;
        };
        XMLWriterBase.prototype.raw = function(node, options, level) {
            var r;
            this.openNode(node, options, level);
            options.state = WriterState.OpenTag;
            r = this.indent(node, options, level);
            options.state = WriterState.InsideTag;
            r += node.value;
            options.state = WriterState.CloseTag;
            r += this.endline(node, options, level);
            options.state = WriterState.None;
            this.closeNode(node, options, level);
            return r;
        };
        XMLWriterBase.prototype.text = function(node, options, level) {
            var r;
            this.openNode(node, options, level);
            options.state = WriterState.OpenTag;
            r = this.indent(node, options, level);
            options.state = WriterState.InsideTag;
            r += node.value;
            options.state = WriterState.CloseTag;
            r += this.endline(node, options, level);
            options.state = WriterState.None;
            this.closeNode(node, options, level);
            return r;
        };
        XMLWriterBase.prototype.dtdAttList = function(node, options, level) {
            var r;
            this.openNode(node, options, level);
            options.state = WriterState.OpenTag;
            r = this.indent(node, options, level) + '<!ATTLIST';
            options.state = WriterState.InsideTag;
            r += ' ' + node.elementName + ' ' + node.attributeName + ' ' + node.attributeType;
            if (node.defaultValueType !== '#DEFAULT') {
                r += ' ' + node.defaultValueType;
            }
            if (node.defaultValue) {
                r += ' "' + node.defaultValue + '"';
            }
            options.state = WriterState.CloseTag;
            r += options.spaceBeforeSlash + '>' + this.endline(node, options, level);
            options.state = WriterState.None;
            this.closeNode(node, options, level);
            return r;
        };
        XMLWriterBase.prototype.dtdElement = function(node, options, level) {
            var r;
            this.openNode(node, options, level);
            options.state = WriterState.OpenTag;
            r = this.indent(node, options, level) + '<!ELEMENT';
            options.state = WriterState.InsideTag;
            r += ' ' + node.name + ' ' + node.value;
            options.state = WriterState.CloseTag;
            r += options.spaceBeforeSlash + '>' + this.endline(node, options, level);
            options.state = WriterState.None;
            this.closeNode(node, options, level);
            return r;
        };
        XMLWriterBase.prototype.dtdEntity = function(node, options, level) {
            var r;
            this.openNode(node, options, level);
            options.state = WriterState.OpenTag;
            r = this.indent(node, options, level) + '<!ENTITY';
            options.state = WriterState.InsideTag;
            if (node.pe) {
                r += ' %';
            }
            r += ' ' + node.name;
            if (node.value) {
                r += ' "' + node.value + '"';
            } else {
                if (node.pubID && node.sysID) {
                    r += ' PUBLIC "' + node.pubID + '" "' + node.sysID + '"';
                } else if (node.sysID) {
                    r += ' SYSTEM "' + node.sysID + '"';
                }
                if (node.nData) {
                    r += ' NDATA ' + node.nData;
                }
            }
            options.state = WriterState.CloseTag;
            r += options.spaceBeforeSlash + '>' + this.endline(node, options, level);
            options.state = WriterState.None;
            this.closeNode(node, options, level);
            return r;
        };
        XMLWriterBase.prototype.dtdNotation = function(node, options, level) {
            var r;
            this.openNode(node, options, level);
            options.state = WriterState.OpenTag;
            r = this.indent(node, options, level) + '<!NOTATION';
            options.state = WriterState.InsideTag;
            r += ' ' + node.name;
            if (node.pubID && node.sysID) {
                r += ' PUBLIC "' + node.pubID + '" "' + node.sysID + '"';
            } else if (node.pubID) {
                r += ' PUBLIC "' + node.pubID + '"';
            } else if (node.sysID) {
                r += ' SYSTEM "' + node.sysID + '"';
            }
            options.state = WriterState.CloseTag;
            r += options.spaceBeforeSlash + '>' + this.endline(node, options, level);
            options.state = WriterState.None;
            this.closeNode(node, options, level);
            return r;
        };
        XMLWriterBase.prototype.openNode = function(node, options, level) {};
        XMLWriterBase.prototype.closeNode = function(node, options, level) {};
        XMLWriterBase.prototype.openAttribute = function(att, options, level) {};
        XMLWriterBase.prototype.closeAttribute = function(att, options, level) {};
        return XMLWriterBase;
    }();
}).call(/*TURBOPACK member replacement*/ __turbopack_context__.e);
}),
"[project]/learn-next/final/node_modules/xmlbuilder/lib/XMLStringWriter.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {

// Generated by CoffeeScript 1.12.7
(function() {
    var XMLStringWriter, XMLWriterBase, extend = function(child, parent) {
        for(var key in parent){
            if (hasProp.call(parent, key)) child[key] = parent[key];
        }
        function ctor() {
            this.constructor = child;
        }
        ctor.prototype = parent.prototype;
        child.prototype = new ctor();
        child.__super__ = parent.prototype;
        return child;
    }, hasProp = {}.hasOwnProperty;
    XMLWriterBase = __turbopack_context__.r("[project]/learn-next/final/node_modules/xmlbuilder/lib/XMLWriterBase.js [app-rsc] (ecmascript)");
    module.exports = XMLStringWriter = function(superClass) {
        extend(XMLStringWriter, superClass);
        function XMLStringWriter(options) {
            XMLStringWriter.__super__.constructor.call(this, options);
        }
        XMLStringWriter.prototype.document = function(doc, options) {
            var child, i, len, r, ref;
            options = this.filterOptions(options);
            r = '';
            ref = doc.children;
            for(i = 0, len = ref.length; i < len; i++){
                child = ref[i];
                r += this.writeChildNode(child, options, 0);
            }
            if (options.pretty && r.slice(-options.newline.length) === options.newline) {
                r = r.slice(0, -options.newline.length);
            }
            return r;
        };
        return XMLStringWriter;
    }(XMLWriterBase);
}).call(/*TURBOPACK member replacement*/ __turbopack_context__.e);
}),
"[project]/learn-next/final/node_modules/xmlbuilder/lib/XMLDocument.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {

// Generated by CoffeeScript 1.12.7
(function() {
    var NodeType, XMLDOMConfiguration, XMLDOMImplementation, XMLDocument, XMLNode, XMLStringWriter, XMLStringifier, isPlainObject, extend = function(child, parent) {
        for(var key in parent){
            if (hasProp.call(parent, key)) child[key] = parent[key];
        }
        function ctor() {
            this.constructor = child;
        }
        ctor.prototype = parent.prototype;
        child.prototype = new ctor();
        child.__super__ = parent.prototype;
        return child;
    }, hasProp = {}.hasOwnProperty;
    isPlainObject = __turbopack_context__.r("[project]/learn-next/final/node_modules/xmlbuilder/lib/Utility.js [app-rsc] (ecmascript)").isPlainObject;
    XMLDOMImplementation = __turbopack_context__.r("[project]/learn-next/final/node_modules/xmlbuilder/lib/XMLDOMImplementation.js [app-rsc] (ecmascript)");
    XMLDOMConfiguration = __turbopack_context__.r("[project]/learn-next/final/node_modules/xmlbuilder/lib/XMLDOMConfiguration.js [app-rsc] (ecmascript)");
    XMLNode = __turbopack_context__.r("[project]/learn-next/final/node_modules/xmlbuilder/lib/XMLNode.js [app-rsc] (ecmascript)");
    NodeType = __turbopack_context__.r("[project]/learn-next/final/node_modules/xmlbuilder/lib/NodeType.js [app-rsc] (ecmascript)");
    XMLStringifier = __turbopack_context__.r("[project]/learn-next/final/node_modules/xmlbuilder/lib/XMLStringifier.js [app-rsc] (ecmascript)");
    XMLStringWriter = __turbopack_context__.r("[project]/learn-next/final/node_modules/xmlbuilder/lib/XMLStringWriter.js [app-rsc] (ecmascript)");
    module.exports = XMLDocument = function(superClass) {
        extend(XMLDocument, superClass);
        function XMLDocument(options) {
            XMLDocument.__super__.constructor.call(this, null);
            this.name = "#document";
            this.type = NodeType.Document;
            this.documentURI = null;
            this.domConfig = new XMLDOMConfiguration();
            options || (options = {});
            if (!options.writer) {
                options.writer = new XMLStringWriter();
            }
            this.options = options;
            this.stringify = new XMLStringifier(options);
        }
        Object.defineProperty(XMLDocument.prototype, 'implementation', {
            value: new XMLDOMImplementation()
        });
        Object.defineProperty(XMLDocument.prototype, 'doctype', {
            get: function() {
                var child, i, len, ref;
                ref = this.children;
                for(i = 0, len = ref.length; i < len; i++){
                    child = ref[i];
                    if (child.type === NodeType.DocType) {
                        return child;
                    }
                }
                return null;
            }
        });
        Object.defineProperty(XMLDocument.prototype, 'documentElement', {
            get: function() {
                return this.rootObject || null;
            }
        });
        Object.defineProperty(XMLDocument.prototype, 'inputEncoding', {
            get: function() {
                return null;
            }
        });
        Object.defineProperty(XMLDocument.prototype, 'strictErrorChecking', {
            get: function() {
                return false;
            }
        });
        Object.defineProperty(XMLDocument.prototype, 'xmlEncoding', {
            get: function() {
                if (this.children.length !== 0 && this.children[0].type === NodeType.Declaration) {
                    return this.children[0].encoding;
                } else {
                    return null;
                }
            }
        });
        Object.defineProperty(XMLDocument.prototype, 'xmlStandalone', {
            get: function() {
                if (this.children.length !== 0 && this.children[0].type === NodeType.Declaration) {
                    return this.children[0].standalone === 'yes';
                } else {
                    return false;
                }
            }
        });
        Object.defineProperty(XMLDocument.prototype, 'xmlVersion', {
            get: function() {
                if (this.children.length !== 0 && this.children[0].type === NodeType.Declaration) {
                    return this.children[0].version;
                } else {
                    return "1.0";
                }
            }
        });
        Object.defineProperty(XMLDocument.prototype, 'URL', {
            get: function() {
                return this.documentURI;
            }
        });
        Object.defineProperty(XMLDocument.prototype, 'origin', {
            get: function() {
                return null;
            }
        });
        Object.defineProperty(XMLDocument.prototype, 'compatMode', {
            get: function() {
                return null;
            }
        });
        Object.defineProperty(XMLDocument.prototype, 'characterSet', {
            get: function() {
                return null;
            }
        });
        Object.defineProperty(XMLDocument.prototype, 'contentType', {
            get: function() {
                return null;
            }
        });
        XMLDocument.prototype.end = function(writer) {
            var writerOptions;
            writerOptions = {};
            if (!writer) {
                writer = this.options.writer;
            } else if (isPlainObject(writer)) {
                writerOptions = writer;
                writer = this.options.writer;
            }
            return writer.document(this, writer.filterOptions(writerOptions));
        };
        XMLDocument.prototype.toString = function(options) {
            return this.options.writer.document(this, this.options.writer.filterOptions(options));
        };
        XMLDocument.prototype.createElement = function(tagName) {
            throw new Error("This DOM method is not implemented." + this.debugInfo());
        };
        XMLDocument.prototype.createDocumentFragment = function() {
            throw new Error("This DOM method is not implemented." + this.debugInfo());
        };
        XMLDocument.prototype.createTextNode = function(data) {
            throw new Error("This DOM method is not implemented." + this.debugInfo());
        };
        XMLDocument.prototype.createComment = function(data) {
            throw new Error("This DOM method is not implemented." + this.debugInfo());
        };
        XMLDocument.prototype.createCDATASection = function(data) {
            throw new Error("This DOM method is not implemented." + this.debugInfo());
        };
        XMLDocument.prototype.createProcessingInstruction = function(target, data) {
            throw new Error("This DOM method is not implemented." + this.debugInfo());
        };
        XMLDocument.prototype.createAttribute = function(name) {
            throw new Error("This DOM method is not implemented." + this.debugInfo());
        };
        XMLDocument.prototype.createEntityReference = function(name) {
            throw new Error("This DOM method is not implemented." + this.debugInfo());
        };
        XMLDocument.prototype.getElementsByTagName = function(tagname) {
            throw new Error("This DOM method is not implemented." + this.debugInfo());
        };
        XMLDocument.prototype.importNode = function(importedNode, deep) {
            throw new Error("This DOM method is not implemented." + this.debugInfo());
        };
        XMLDocument.prototype.createElementNS = function(namespaceURI, qualifiedName) {
            throw new Error("This DOM method is not implemented." + this.debugInfo());
        };
        XMLDocument.prototype.createAttributeNS = function(namespaceURI, qualifiedName) {
            throw new Error("This DOM method is not implemented." + this.debugInfo());
        };
        XMLDocument.prototype.getElementsByTagNameNS = function(namespaceURI, localName) {
            throw new Error("This DOM method is not implemented." + this.debugInfo());
        };
        XMLDocument.prototype.getElementById = function(elementId) {
            throw new Error("This DOM method is not implemented." + this.debugInfo());
        };
        XMLDocument.prototype.adoptNode = function(source) {
            throw new Error("This DOM method is not implemented." + this.debugInfo());
        };
        XMLDocument.prototype.normalizeDocument = function() {
            throw new Error("This DOM method is not implemented." + this.debugInfo());
        };
        XMLDocument.prototype.renameNode = function(node, namespaceURI, qualifiedName) {
            throw new Error("This DOM method is not implemented." + this.debugInfo());
        };
        XMLDocument.prototype.getElementsByClassName = function(classNames) {
            throw new Error("This DOM method is not implemented." + this.debugInfo());
        };
        XMLDocument.prototype.createEvent = function(eventInterface) {
            throw new Error("This DOM method is not implemented." + this.debugInfo());
        };
        XMLDocument.prototype.createRange = function() {
            throw new Error("This DOM method is not implemented." + this.debugInfo());
        };
        XMLDocument.prototype.createNodeIterator = function(root, whatToShow, filter) {
            throw new Error("This DOM method is not implemented." + this.debugInfo());
        };
        XMLDocument.prototype.createTreeWalker = function(root, whatToShow, filter) {
            throw new Error("This DOM method is not implemented." + this.debugInfo());
        };
        return XMLDocument;
    }(XMLNode);
}).call(/*TURBOPACK member replacement*/ __turbopack_context__.e);
}),
"[project]/learn-next/final/node_modules/xmlbuilder/lib/XMLDocumentCB.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {

// Generated by CoffeeScript 1.12.7
(function() {
    var NodeType, WriterState, XMLAttribute, XMLCData, XMLComment, XMLDTDAttList, XMLDTDElement, XMLDTDEntity, XMLDTDNotation, XMLDeclaration, XMLDocType, XMLDocument, XMLDocumentCB, XMLElement, XMLProcessingInstruction, XMLRaw, XMLStringWriter, XMLStringifier, XMLText, getValue, isFunction, isObject, isPlainObject, ref, hasProp = {}.hasOwnProperty;
    ref = __turbopack_context__.r("[project]/learn-next/final/node_modules/xmlbuilder/lib/Utility.js [app-rsc] (ecmascript)"), isObject = ref.isObject, isFunction = ref.isFunction, isPlainObject = ref.isPlainObject, getValue = ref.getValue;
    NodeType = __turbopack_context__.r("[project]/learn-next/final/node_modules/xmlbuilder/lib/NodeType.js [app-rsc] (ecmascript)");
    XMLDocument = __turbopack_context__.r("[project]/learn-next/final/node_modules/xmlbuilder/lib/XMLDocument.js [app-rsc] (ecmascript)");
    XMLElement = __turbopack_context__.r("[project]/learn-next/final/node_modules/xmlbuilder/lib/XMLElement.js [app-rsc] (ecmascript)");
    XMLCData = __turbopack_context__.r("[project]/learn-next/final/node_modules/xmlbuilder/lib/XMLCData.js [app-rsc] (ecmascript)");
    XMLComment = __turbopack_context__.r("[project]/learn-next/final/node_modules/xmlbuilder/lib/XMLComment.js [app-rsc] (ecmascript)");
    XMLRaw = __turbopack_context__.r("[project]/learn-next/final/node_modules/xmlbuilder/lib/XMLRaw.js [app-rsc] (ecmascript)");
    XMLText = __turbopack_context__.r("[project]/learn-next/final/node_modules/xmlbuilder/lib/XMLText.js [app-rsc] (ecmascript)");
    XMLProcessingInstruction = __turbopack_context__.r("[project]/learn-next/final/node_modules/xmlbuilder/lib/XMLProcessingInstruction.js [app-rsc] (ecmascript)");
    XMLDeclaration = __turbopack_context__.r("[project]/learn-next/final/node_modules/xmlbuilder/lib/XMLDeclaration.js [app-rsc] (ecmascript)");
    XMLDocType = __turbopack_context__.r("[project]/learn-next/final/node_modules/xmlbuilder/lib/XMLDocType.js [app-rsc] (ecmascript)");
    XMLDTDAttList = __turbopack_context__.r("[project]/learn-next/final/node_modules/xmlbuilder/lib/XMLDTDAttList.js [app-rsc] (ecmascript)");
    XMLDTDEntity = __turbopack_context__.r("[project]/learn-next/final/node_modules/xmlbuilder/lib/XMLDTDEntity.js [app-rsc] (ecmascript)");
    XMLDTDElement = __turbopack_context__.r("[project]/learn-next/final/node_modules/xmlbuilder/lib/XMLDTDElement.js [app-rsc] (ecmascript)");
    XMLDTDNotation = __turbopack_context__.r("[project]/learn-next/final/node_modules/xmlbuilder/lib/XMLDTDNotation.js [app-rsc] (ecmascript)");
    XMLAttribute = __turbopack_context__.r("[project]/learn-next/final/node_modules/xmlbuilder/lib/XMLAttribute.js [app-rsc] (ecmascript)");
    XMLStringifier = __turbopack_context__.r("[project]/learn-next/final/node_modules/xmlbuilder/lib/XMLStringifier.js [app-rsc] (ecmascript)");
    XMLStringWriter = __turbopack_context__.r("[project]/learn-next/final/node_modules/xmlbuilder/lib/XMLStringWriter.js [app-rsc] (ecmascript)");
    WriterState = __turbopack_context__.r("[project]/learn-next/final/node_modules/xmlbuilder/lib/WriterState.js [app-rsc] (ecmascript)");
    module.exports = XMLDocumentCB = function() {
        function XMLDocumentCB(options, onData, onEnd) {
            var writerOptions;
            this.name = "?xml";
            this.type = NodeType.Document;
            options || (options = {});
            writerOptions = {};
            if (!options.writer) {
                options.writer = new XMLStringWriter();
            } else if (isPlainObject(options.writer)) {
                writerOptions = options.writer;
                options.writer = new XMLStringWriter();
            }
            this.options = options;
            this.writer = options.writer;
            this.writerOptions = this.writer.filterOptions(writerOptions);
            this.stringify = new XMLStringifier(options);
            this.onDataCallback = onData || function() {};
            this.onEndCallback = onEnd || function() {};
            this.currentNode = null;
            this.currentLevel = -1;
            this.openTags = {};
            this.documentStarted = false;
            this.documentCompleted = false;
            this.root = null;
        }
        XMLDocumentCB.prototype.createChildNode = function(node) {
            var att, attName, attributes, child, i, len, ref1, ref2;
            switch(node.type){
                case NodeType.CData:
                    this.cdata(node.value);
                    break;
                case NodeType.Comment:
                    this.comment(node.value);
                    break;
                case NodeType.Element:
                    attributes = {};
                    ref1 = node.attribs;
                    for(attName in ref1){
                        if (!hasProp.call(ref1, attName)) continue;
                        att = ref1[attName];
                        attributes[attName] = att.value;
                    }
                    this.node(node.name, attributes);
                    break;
                case NodeType.Dummy:
                    this.dummy();
                    break;
                case NodeType.Raw:
                    this.raw(node.value);
                    break;
                case NodeType.Text:
                    this.text(node.value);
                    break;
                case NodeType.ProcessingInstruction:
                    this.instruction(node.target, node.value);
                    break;
                default:
                    throw new Error("This XML node type is not supported in a JS object: " + node.constructor.name);
            }
            ref2 = node.children;
            for(i = 0, len = ref2.length; i < len; i++){
                child = ref2[i];
                this.createChildNode(child);
                if (child.type === NodeType.Element) {
                    this.up();
                }
            }
            return this;
        };
        XMLDocumentCB.prototype.dummy = function() {
            return this;
        };
        XMLDocumentCB.prototype.node = function(name, attributes, text) {
            var ref1;
            if (name == null) {
                throw new Error("Missing node name.");
            }
            if (this.root && this.currentLevel === -1) {
                throw new Error("Document can only have one root node. " + this.debugInfo(name));
            }
            this.openCurrent();
            name = getValue(name);
            if (attributes == null) {
                attributes = {};
            }
            attributes = getValue(attributes);
            if (!isObject(attributes)) {
                ref1 = [
                    attributes,
                    text
                ], text = ref1[0], attributes = ref1[1];
            }
            this.currentNode = new XMLElement(this, name, attributes);
            this.currentNode.children = false;
            this.currentLevel++;
            this.openTags[this.currentLevel] = this.currentNode;
            if (text != null) {
                this.text(text);
            }
            return this;
        };
        XMLDocumentCB.prototype.element = function(name, attributes, text) {
            var child, i, len, oldValidationFlag, ref1, root;
            if (this.currentNode && this.currentNode.type === NodeType.DocType) {
                this.dtdElement.apply(this, arguments);
            } else {
                if (Array.isArray(name) || isObject(name) || isFunction(name)) {
                    oldValidationFlag = this.options.noValidation;
                    this.options.noValidation = true;
                    root = new XMLDocument(this.options).element('TEMP_ROOT');
                    root.element(name);
                    this.options.noValidation = oldValidationFlag;
                    ref1 = root.children;
                    for(i = 0, len = ref1.length; i < len; i++){
                        child = ref1[i];
                        this.createChildNode(child);
                        if (child.type === NodeType.Element) {
                            this.up();
                        }
                    }
                } else {
                    this.node(name, attributes, text);
                }
            }
            return this;
        };
        XMLDocumentCB.prototype.attribute = function(name, value) {
            var attName, attValue;
            if (!this.currentNode || this.currentNode.children) {
                throw new Error("att() can only be used immediately after an ele() call in callback mode. " + this.debugInfo(name));
            }
            if (name != null) {
                name = getValue(name);
            }
            if (isObject(name)) {
                for(attName in name){
                    if (!hasProp.call(name, attName)) continue;
                    attValue = name[attName];
                    this.attribute(attName, attValue);
                }
            } else {
                if (isFunction(value)) {
                    value = value.apply();
                }
                if (this.options.keepNullAttributes && value == null) {
                    this.currentNode.attribs[name] = new XMLAttribute(this, name, "");
                } else if (value != null) {
                    this.currentNode.attribs[name] = new XMLAttribute(this, name, value);
                }
            }
            return this;
        };
        XMLDocumentCB.prototype.text = function(value) {
            var node;
            this.openCurrent();
            node = new XMLText(this, value);
            this.onData(this.writer.text(node, this.writerOptions, this.currentLevel + 1), this.currentLevel + 1);
            return this;
        };
        XMLDocumentCB.prototype.cdata = function(value) {
            var node;
            this.openCurrent();
            node = new XMLCData(this, value);
            this.onData(this.writer.cdata(node, this.writerOptions, this.currentLevel + 1), this.currentLevel + 1);
            return this;
        };
        XMLDocumentCB.prototype.comment = function(value) {
            var node;
            this.openCurrent();
            node = new XMLComment(this, value);
            this.onData(this.writer.comment(node, this.writerOptions, this.currentLevel + 1), this.currentLevel + 1);
            return this;
        };
        XMLDocumentCB.prototype.raw = function(value) {
            var node;
            this.openCurrent();
            node = new XMLRaw(this, value);
            this.onData(this.writer.raw(node, this.writerOptions, this.currentLevel + 1), this.currentLevel + 1);
            return this;
        };
        XMLDocumentCB.prototype.instruction = function(target, value) {
            var i, insTarget, insValue, len, node;
            this.openCurrent();
            if (target != null) {
                target = getValue(target);
            }
            if (value != null) {
                value = getValue(value);
            }
            if (Array.isArray(target)) {
                for(i = 0, len = target.length; i < len; i++){
                    insTarget = target[i];
                    this.instruction(insTarget);
                }
            } else if (isObject(target)) {
                for(insTarget in target){
                    if (!hasProp.call(target, insTarget)) continue;
                    insValue = target[insTarget];
                    this.instruction(insTarget, insValue);
                }
            } else {
                if (isFunction(value)) {
                    value = value.apply();
                }
                node = new XMLProcessingInstruction(this, target, value);
                this.onData(this.writer.processingInstruction(node, this.writerOptions, this.currentLevel + 1), this.currentLevel + 1);
            }
            return this;
        };
        XMLDocumentCB.prototype.declaration = function(version, encoding, standalone) {
            var node;
            this.openCurrent();
            if (this.documentStarted) {
                throw new Error("declaration() must be the first node.");
            }
            node = new XMLDeclaration(this, version, encoding, standalone);
            this.onData(this.writer.declaration(node, this.writerOptions, this.currentLevel + 1), this.currentLevel + 1);
            return this;
        };
        XMLDocumentCB.prototype.doctype = function(root, pubID, sysID) {
            this.openCurrent();
            if (root == null) {
                throw new Error("Missing root node name.");
            }
            if (this.root) {
                throw new Error("dtd() must come before the root node.");
            }
            this.currentNode = new XMLDocType(this, pubID, sysID);
            this.currentNode.rootNodeName = root;
            this.currentNode.children = false;
            this.currentLevel++;
            this.openTags[this.currentLevel] = this.currentNode;
            return this;
        };
        XMLDocumentCB.prototype.dtdElement = function(name, value) {
            var node;
            this.openCurrent();
            node = new XMLDTDElement(this, name, value);
            this.onData(this.writer.dtdElement(node, this.writerOptions, this.currentLevel + 1), this.currentLevel + 1);
            return this;
        };
        XMLDocumentCB.prototype.attList = function(elementName, attributeName, attributeType, defaultValueType, defaultValue) {
            var node;
            this.openCurrent();
            node = new XMLDTDAttList(this, elementName, attributeName, attributeType, defaultValueType, defaultValue);
            this.onData(this.writer.dtdAttList(node, this.writerOptions, this.currentLevel + 1), this.currentLevel + 1);
            return this;
        };
        XMLDocumentCB.prototype.entity = function(name, value) {
            var node;
            this.openCurrent();
            node = new XMLDTDEntity(this, false, name, value);
            this.onData(this.writer.dtdEntity(node, this.writerOptions, this.currentLevel + 1), this.currentLevel + 1);
            return this;
        };
        XMLDocumentCB.prototype.pEntity = function(name, value) {
            var node;
            this.openCurrent();
            node = new XMLDTDEntity(this, true, name, value);
            this.onData(this.writer.dtdEntity(node, this.writerOptions, this.currentLevel + 1), this.currentLevel + 1);
            return this;
        };
        XMLDocumentCB.prototype.notation = function(name, value) {
            var node;
            this.openCurrent();
            node = new XMLDTDNotation(this, name, value);
            this.onData(this.writer.dtdNotation(node, this.writerOptions, this.currentLevel + 1), this.currentLevel + 1);
            return this;
        };
        XMLDocumentCB.prototype.up = function() {
            if (this.currentLevel < 0) {
                throw new Error("The document node has no parent.");
            }
            if (this.currentNode) {
                if (this.currentNode.children) {
                    this.closeNode(this.currentNode);
                } else {
                    this.openNode(this.currentNode);
                }
                this.currentNode = null;
            } else {
                this.closeNode(this.openTags[this.currentLevel]);
            }
            delete this.openTags[this.currentLevel];
            this.currentLevel--;
            return this;
        };
        XMLDocumentCB.prototype.end = function() {
            while(this.currentLevel >= 0){
                this.up();
            }
            return this.onEnd();
        };
        XMLDocumentCB.prototype.openCurrent = function() {
            if (this.currentNode) {
                this.currentNode.children = true;
                return this.openNode(this.currentNode);
            }
        };
        XMLDocumentCB.prototype.openNode = function(node) {
            var att, chunk, name, ref1;
            if (!node.isOpen) {
                if (!this.root && this.currentLevel === 0 && node.type === NodeType.Element) {
                    this.root = node;
                }
                chunk = '';
                if (node.type === NodeType.Element) {
                    this.writerOptions.state = WriterState.OpenTag;
                    chunk = this.writer.indent(node, this.writerOptions, this.currentLevel) + '<' + node.name;
                    ref1 = node.attribs;
                    for(name in ref1){
                        if (!hasProp.call(ref1, name)) continue;
                        att = ref1[name];
                        chunk += this.writer.attribute(att, this.writerOptions, this.currentLevel);
                    }
                    chunk += (node.children ? '>' : '/>') + this.writer.endline(node, this.writerOptions, this.currentLevel);
                    this.writerOptions.state = WriterState.InsideTag;
                } else {
                    this.writerOptions.state = WriterState.OpenTag;
                    chunk = this.writer.indent(node, this.writerOptions, this.currentLevel) + '<!DOCTYPE ' + node.rootNodeName;
                    if (node.pubID && node.sysID) {
                        chunk += ' PUBLIC "' + node.pubID + '" "' + node.sysID + '"';
                    } else if (node.sysID) {
                        chunk += ' SYSTEM "' + node.sysID + '"';
                    }
                    if (node.children) {
                        chunk += ' [';
                        this.writerOptions.state = WriterState.InsideTag;
                    } else {
                        this.writerOptions.state = WriterState.CloseTag;
                        chunk += '>';
                    }
                    chunk += this.writer.endline(node, this.writerOptions, this.currentLevel);
                }
                this.onData(chunk, this.currentLevel);
                return node.isOpen = true;
            }
        };
        XMLDocumentCB.prototype.closeNode = function(node) {
            var chunk;
            if (!node.isClosed) {
                chunk = '';
                this.writerOptions.state = WriterState.CloseTag;
                if (node.type === NodeType.Element) {
                    chunk = this.writer.indent(node, this.writerOptions, this.currentLevel) + '</' + node.name + '>' + this.writer.endline(node, this.writerOptions, this.currentLevel);
                } else {
                    chunk = this.writer.indent(node, this.writerOptions, this.currentLevel) + ']>' + this.writer.endline(node, this.writerOptions, this.currentLevel);
                }
                this.writerOptions.state = WriterState.None;
                this.onData(chunk, this.currentLevel);
                return node.isClosed = true;
            }
        };
        XMLDocumentCB.prototype.onData = function(chunk, level) {
            this.documentStarted = true;
            return this.onDataCallback(chunk, level + 1);
        };
        XMLDocumentCB.prototype.onEnd = function() {
            this.documentCompleted = true;
            return this.onEndCallback();
        };
        XMLDocumentCB.prototype.debugInfo = function(name) {
            if (name == null) {
                return "";
            } else {
                return "node: <" + name + ">";
            }
        };
        XMLDocumentCB.prototype.ele = function() {
            return this.element.apply(this, arguments);
        };
        XMLDocumentCB.prototype.nod = function(name, attributes, text) {
            return this.node(name, attributes, text);
        };
        XMLDocumentCB.prototype.txt = function(value) {
            return this.text(value);
        };
        XMLDocumentCB.prototype.dat = function(value) {
            return this.cdata(value);
        };
        XMLDocumentCB.prototype.com = function(value) {
            return this.comment(value);
        };
        XMLDocumentCB.prototype.ins = function(target, value) {
            return this.instruction(target, value);
        };
        XMLDocumentCB.prototype.dec = function(version, encoding, standalone) {
            return this.declaration(version, encoding, standalone);
        };
        XMLDocumentCB.prototype.dtd = function(root, pubID, sysID) {
            return this.doctype(root, pubID, sysID);
        };
        XMLDocumentCB.prototype.e = function(name, attributes, text) {
            return this.element(name, attributes, text);
        };
        XMLDocumentCB.prototype.n = function(name, attributes, text) {
            return this.node(name, attributes, text);
        };
        XMLDocumentCB.prototype.t = function(value) {
            return this.text(value);
        };
        XMLDocumentCB.prototype.d = function(value) {
            return this.cdata(value);
        };
        XMLDocumentCB.prototype.c = function(value) {
            return this.comment(value);
        };
        XMLDocumentCB.prototype.r = function(value) {
            return this.raw(value);
        };
        XMLDocumentCB.prototype.i = function(target, value) {
            return this.instruction(target, value);
        };
        XMLDocumentCB.prototype.att = function() {
            if (this.currentNode && this.currentNode.type === NodeType.DocType) {
                return this.attList.apply(this, arguments);
            } else {
                return this.attribute.apply(this, arguments);
            }
        };
        XMLDocumentCB.prototype.a = function() {
            if (this.currentNode && this.currentNode.type === NodeType.DocType) {
                return this.attList.apply(this, arguments);
            } else {
                return this.attribute.apply(this, arguments);
            }
        };
        XMLDocumentCB.prototype.ent = function(name, value) {
            return this.entity(name, value);
        };
        XMLDocumentCB.prototype.pent = function(name, value) {
            return this.pEntity(name, value);
        };
        XMLDocumentCB.prototype.not = function(name, value) {
            return this.notation(name, value);
        };
        return XMLDocumentCB;
    }();
}).call(/*TURBOPACK member replacement*/ __turbopack_context__.e);
}),
"[project]/learn-next/final/node_modules/xmlbuilder/lib/XMLStreamWriter.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {

// Generated by CoffeeScript 1.12.7
(function() {
    var NodeType, WriterState, XMLStreamWriter, XMLWriterBase, extend = function(child, parent) {
        for(var key in parent){
            if (hasProp.call(parent, key)) child[key] = parent[key];
        }
        function ctor() {
            this.constructor = child;
        }
        ctor.prototype = parent.prototype;
        child.prototype = new ctor();
        child.__super__ = parent.prototype;
        return child;
    }, hasProp = {}.hasOwnProperty;
    NodeType = __turbopack_context__.r("[project]/learn-next/final/node_modules/xmlbuilder/lib/NodeType.js [app-rsc] (ecmascript)");
    XMLWriterBase = __turbopack_context__.r("[project]/learn-next/final/node_modules/xmlbuilder/lib/XMLWriterBase.js [app-rsc] (ecmascript)");
    WriterState = __turbopack_context__.r("[project]/learn-next/final/node_modules/xmlbuilder/lib/WriterState.js [app-rsc] (ecmascript)");
    module.exports = XMLStreamWriter = function(superClass) {
        extend(XMLStreamWriter, superClass);
        function XMLStreamWriter(stream, options) {
            this.stream = stream;
            XMLStreamWriter.__super__.constructor.call(this, options);
        }
        XMLStreamWriter.prototype.endline = function(node, options, level) {
            if (node.isLastRootNode && options.state === WriterState.CloseTag) {
                return '';
            } else {
                return XMLStreamWriter.__super__.endline.call(this, node, options, level);
            }
        };
        XMLStreamWriter.prototype.document = function(doc, options) {
            var child, i, j, k, len, len1, ref, ref1, results;
            ref = doc.children;
            for(i = j = 0, len = ref.length; j < len; i = ++j){
                child = ref[i];
                child.isLastRootNode = i === doc.children.length - 1;
            }
            options = this.filterOptions(options);
            ref1 = doc.children;
            results = [];
            for(k = 0, len1 = ref1.length; k < len1; k++){
                child = ref1[k];
                results.push(this.writeChildNode(child, options, 0));
            }
            return results;
        };
        XMLStreamWriter.prototype.attribute = function(att, options, level) {
            return this.stream.write(XMLStreamWriter.__super__.attribute.call(this, att, options, level));
        };
        XMLStreamWriter.prototype.cdata = function(node, options, level) {
            return this.stream.write(XMLStreamWriter.__super__.cdata.call(this, node, options, level));
        };
        XMLStreamWriter.prototype.comment = function(node, options, level) {
            return this.stream.write(XMLStreamWriter.__super__.comment.call(this, node, options, level));
        };
        XMLStreamWriter.prototype.declaration = function(node, options, level) {
            return this.stream.write(XMLStreamWriter.__super__.declaration.call(this, node, options, level));
        };
        XMLStreamWriter.prototype.docType = function(node, options, level) {
            var child, j, len, ref;
            level || (level = 0);
            this.openNode(node, options, level);
            options.state = WriterState.OpenTag;
            this.stream.write(this.indent(node, options, level));
            this.stream.write('<!DOCTYPE ' + node.root().name);
            if (node.pubID && node.sysID) {
                this.stream.write(' PUBLIC "' + node.pubID + '" "' + node.sysID + '"');
            } else if (node.sysID) {
                this.stream.write(' SYSTEM "' + node.sysID + '"');
            }
            if (node.children.length > 0) {
                this.stream.write(' [');
                this.stream.write(this.endline(node, options, level));
                options.state = WriterState.InsideTag;
                ref = node.children;
                for(j = 0, len = ref.length; j < len; j++){
                    child = ref[j];
                    this.writeChildNode(child, options, level + 1);
                }
                options.state = WriterState.CloseTag;
                this.stream.write(']');
            }
            options.state = WriterState.CloseTag;
            this.stream.write(options.spaceBeforeSlash + '>');
            this.stream.write(this.endline(node, options, level));
            options.state = WriterState.None;
            return this.closeNode(node, options, level);
        };
        XMLStreamWriter.prototype.element = function(node, options, level) {
            var att, child, childNodeCount, firstChildNode, j, len, name, prettySuppressed, ref, ref1;
            level || (level = 0);
            this.openNode(node, options, level);
            options.state = WriterState.OpenTag;
            this.stream.write(this.indent(node, options, level) + '<' + node.name);
            ref = node.attribs;
            for(name in ref){
                if (!hasProp.call(ref, name)) continue;
                att = ref[name];
                this.attribute(att, options, level);
            }
            childNodeCount = node.children.length;
            firstChildNode = childNodeCount === 0 ? null : node.children[0];
            if (childNodeCount === 0 || node.children.every(function(e) {
                return (e.type === NodeType.Text || e.type === NodeType.Raw) && e.value === '';
            })) {
                if (options.allowEmpty) {
                    this.stream.write('>');
                    options.state = WriterState.CloseTag;
                    this.stream.write('</' + node.name + '>');
                } else {
                    options.state = WriterState.CloseTag;
                    this.stream.write(options.spaceBeforeSlash + '/>');
                }
            } else if (options.pretty && childNodeCount === 1 && (firstChildNode.type === NodeType.Text || firstChildNode.type === NodeType.Raw) && firstChildNode.value != null) {
                this.stream.write('>');
                options.state = WriterState.InsideTag;
                options.suppressPrettyCount++;
                prettySuppressed = true;
                this.writeChildNode(firstChildNode, options, level + 1);
                options.suppressPrettyCount--;
                prettySuppressed = false;
                options.state = WriterState.CloseTag;
                this.stream.write('</' + node.name + '>');
            } else {
                this.stream.write('>' + this.endline(node, options, level));
                options.state = WriterState.InsideTag;
                ref1 = node.children;
                for(j = 0, len = ref1.length; j < len; j++){
                    child = ref1[j];
                    this.writeChildNode(child, options, level + 1);
                }
                options.state = WriterState.CloseTag;
                this.stream.write(this.indent(node, options, level) + '</' + node.name + '>');
            }
            this.stream.write(this.endline(node, options, level));
            options.state = WriterState.None;
            return this.closeNode(node, options, level);
        };
        XMLStreamWriter.prototype.processingInstruction = function(node, options, level) {
            return this.stream.write(XMLStreamWriter.__super__.processingInstruction.call(this, node, options, level));
        };
        XMLStreamWriter.prototype.raw = function(node, options, level) {
            return this.stream.write(XMLStreamWriter.__super__.raw.call(this, node, options, level));
        };
        XMLStreamWriter.prototype.text = function(node, options, level) {
            return this.stream.write(XMLStreamWriter.__super__.text.call(this, node, options, level));
        };
        XMLStreamWriter.prototype.dtdAttList = function(node, options, level) {
            return this.stream.write(XMLStreamWriter.__super__.dtdAttList.call(this, node, options, level));
        };
        XMLStreamWriter.prototype.dtdElement = function(node, options, level) {
            return this.stream.write(XMLStreamWriter.__super__.dtdElement.call(this, node, options, level));
        };
        XMLStreamWriter.prototype.dtdEntity = function(node, options, level) {
            return this.stream.write(XMLStreamWriter.__super__.dtdEntity.call(this, node, options, level));
        };
        XMLStreamWriter.prototype.dtdNotation = function(node, options, level) {
            return this.stream.write(XMLStreamWriter.__super__.dtdNotation.call(this, node, options, level));
        };
        return XMLStreamWriter;
    }(XMLWriterBase);
}).call(/*TURBOPACK member replacement*/ __turbopack_context__.e);
}),
"[project]/learn-next/final/node_modules/xmlbuilder/lib/index.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {

// Generated by CoffeeScript 1.12.7
(function() {
    var NodeType, WriterState, XMLDOMImplementation, XMLDocument, XMLDocumentCB, XMLStreamWriter, XMLStringWriter, assign, isFunction, ref;
    ref = __turbopack_context__.r("[project]/learn-next/final/node_modules/xmlbuilder/lib/Utility.js [app-rsc] (ecmascript)"), assign = ref.assign, isFunction = ref.isFunction;
    XMLDOMImplementation = __turbopack_context__.r("[project]/learn-next/final/node_modules/xmlbuilder/lib/XMLDOMImplementation.js [app-rsc] (ecmascript)");
    XMLDocument = __turbopack_context__.r("[project]/learn-next/final/node_modules/xmlbuilder/lib/XMLDocument.js [app-rsc] (ecmascript)");
    XMLDocumentCB = __turbopack_context__.r("[project]/learn-next/final/node_modules/xmlbuilder/lib/XMLDocumentCB.js [app-rsc] (ecmascript)");
    XMLStringWriter = __turbopack_context__.r("[project]/learn-next/final/node_modules/xmlbuilder/lib/XMLStringWriter.js [app-rsc] (ecmascript)");
    XMLStreamWriter = __turbopack_context__.r("[project]/learn-next/final/node_modules/xmlbuilder/lib/XMLStreamWriter.js [app-rsc] (ecmascript)");
    NodeType = __turbopack_context__.r("[project]/learn-next/final/node_modules/xmlbuilder/lib/NodeType.js [app-rsc] (ecmascript)");
    WriterState = __turbopack_context__.r("[project]/learn-next/final/node_modules/xmlbuilder/lib/WriterState.js [app-rsc] (ecmascript)");
    module.exports.create = function(name, xmldec, doctype, options) {
        var doc, root;
        if (name == null) {
            throw new Error("Root element needs a name.");
        }
        options = assign({}, xmldec, doctype, options);
        doc = new XMLDocument(options);
        root = doc.element(name);
        if (!options.headless) {
            doc.declaration(options);
            if (options.pubID != null || options.sysID != null) {
                doc.dtd(options);
            }
        }
        return root;
    };
    module.exports.begin = function(options, onData, onEnd) {
        var ref1;
        if (isFunction(options)) {
            ref1 = [
                options,
                onData
            ], onData = ref1[0], onEnd = ref1[1];
            options = {};
        }
        if (onData) {
            return new XMLDocumentCB(options, onData, onEnd);
        } else {
            return new XMLDocument(options);
        }
    };
    module.exports.stringWriter = function(options) {
        return new XMLStringWriter(options);
    };
    module.exports.streamWriter = function(stream, options) {
        return new XMLStreamWriter(stream, options);
    };
    module.exports.implementation = new XMLDOMImplementation();
    module.exports.nodeType = NodeType;
    module.exports.writerState = WriterState;
}).call(/*TURBOPACK member replacement*/ __turbopack_context__.e);
}),
"[project]/learn-next/final/node_modules/xml2js/lib/builder.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {

// Generated by CoffeeScript 1.12.7
(function() {
    "use strict";
    var builder, defaults, escapeCDATA, requiresCDATA, wrapCDATA, hasProp = {}.hasOwnProperty;
    builder = __turbopack_context__.r("[project]/learn-next/final/node_modules/xmlbuilder/lib/index.js [app-rsc] (ecmascript)");
    defaults = __turbopack_context__.r("[project]/learn-next/final/node_modules/xml2js/lib/defaults.js [app-rsc] (ecmascript)").defaults;
    requiresCDATA = function(entry) {
        return typeof entry === "string" && (entry.indexOf('&') >= 0 || entry.indexOf('>') >= 0 || entry.indexOf('<') >= 0);
    };
    wrapCDATA = function(entry) {
        return "<![CDATA[" + escapeCDATA(entry) + "]]>";
    };
    escapeCDATA = function(entry) {
        return entry.replace(']]>', ']]]]><![CDATA[>');
    };
    exports.Builder = function() {
        function Builder(opts) {
            var key, ref, value;
            this.options = {};
            ref = defaults["0.2"];
            for(key in ref){
                if (!hasProp.call(ref, key)) continue;
                value = ref[key];
                this.options[key] = value;
            }
            for(key in opts){
                if (!hasProp.call(opts, key)) continue;
                value = opts[key];
                this.options[key] = value;
            }
        }
        Builder.prototype.buildObject = function(rootObj) {
            var attrkey, charkey, render, rootElement, rootName;
            attrkey = this.options.attrkey;
            charkey = this.options.charkey;
            if (Object.keys(rootObj).length === 1 && this.options.rootName === defaults['0.2'].rootName) {
                rootName = Object.keys(rootObj)[0];
                rootObj = rootObj[rootName];
            } else {
                rootName = this.options.rootName;
            }
            render = function(_this) {
                return function(element, obj) {
                    var attr, child, entry, index, key, value;
                    if (typeof obj !== 'object') {
                        if (_this.options.cdata && requiresCDATA(obj)) {
                            element.raw(wrapCDATA(obj));
                        } else {
                            element.txt(obj);
                        }
                    } else if (Array.isArray(obj)) {
                        for(index in obj){
                            if (!hasProp.call(obj, index)) continue;
                            child = obj[index];
                            for(key in child){
                                entry = child[key];
                                element = render(element.ele(key), entry).up();
                            }
                        }
                    } else {
                        for(key in obj){
                            if (!hasProp.call(obj, key)) continue;
                            child = obj[key];
                            if (key === attrkey) {
                                if (typeof child === "object") {
                                    for(attr in child){
                                        value = child[attr];
                                        element = element.att(attr, value);
                                    }
                                }
                            } else if (key === charkey) {
                                if (_this.options.cdata && requiresCDATA(child)) {
                                    element = element.raw(wrapCDATA(child));
                                } else {
                                    element = element.txt(child);
                                }
                            } else if (Array.isArray(child)) {
                                for(index in child){
                                    if (!hasProp.call(child, index)) continue;
                                    entry = child[index];
                                    if (typeof entry === 'string') {
                                        if (_this.options.cdata && requiresCDATA(entry)) {
                                            element = element.ele(key).raw(wrapCDATA(entry)).up();
                                        } else {
                                            element = element.ele(key, entry).up();
                                        }
                                    } else {
                                        element = render(element.ele(key), entry).up();
                                    }
                                }
                            } else if (typeof child === "object") {
                                element = render(element.ele(key), child).up();
                            } else {
                                if (typeof child === 'string' && _this.options.cdata && requiresCDATA(child)) {
                                    element = element.ele(key).raw(wrapCDATA(child)).up();
                                } else {
                                    if (child == null) {
                                        child = '';
                                    }
                                    element = element.ele(key, child.toString()).up();
                                }
                            }
                        }
                    }
                    return element;
                };
            }(this);
            rootElement = builder.create(rootName, this.options.xmldec, this.options.doctype, {
                headless: this.options.headless,
                allowSurrogateChars: this.options.allowSurrogateChars
            });
            return render(rootElement, rootObj).end(this.options.renderOpts);
        };
        return Builder;
    }();
}).call(/*TURBOPACK member replacement*/ __turbopack_context__.e);
}),
"[project]/learn-next/final/node_modules/sax/lib/sax.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {

;
(function(sax) {
    sax.parser = function(strict, opt) {
        return new SAXParser(strict, opt);
    };
    sax.SAXParser = SAXParser;
    sax.SAXStream = SAXStream;
    sax.createStream = createStream;
    // When we pass the MAX_BUFFER_LENGTH position, start checking for buffer overruns.
    // When we check, schedule the next check for MAX_BUFFER_LENGTH - (max(buffer lengths)),
    // since that's the earliest that a buffer overrun could occur.  This way, checks are
    // as rare as required, but as often as necessary to ensure never crossing this bound.
    // Furthermore, buffers are only tested at most once per write(), so passing a very
    // large string into write() might have undesirable effects, but this is manageable by
    // the caller, so it is assumed to be safe.  Thus, a call to write() may, in the extreme
    // edge case, result in creating at most one complete copy of the string passed in.
    // Set to Infinity to have unlimited buffers.
    sax.MAX_BUFFER_LENGTH = 64 * 1024;
    var buffers = [
        'comment',
        'sgmlDecl',
        'textNode',
        'tagName',
        'doctype',
        'procInstName',
        'procInstBody',
        'entity',
        'attribName',
        'attribValue',
        'cdata',
        'script'
    ];
    sax.EVENTS = [
        'text',
        'processinginstruction',
        'sgmldeclaration',
        'doctype',
        'comment',
        'opentagstart',
        'attribute',
        'opentag',
        'closetag',
        'opencdata',
        'cdata',
        'closecdata',
        'error',
        'end',
        'ready',
        'script',
        'opennamespace',
        'closenamespace'
    ];
    function SAXParser(strict, opt) {
        if (!(this instanceof SAXParser)) {
            return new SAXParser(strict, opt);
        }
        var parser = this;
        clearBuffers(parser);
        parser.q = parser.c = '';
        parser.bufferCheckPosition = sax.MAX_BUFFER_LENGTH;
        parser.opt = opt || {};
        parser.opt.lowercase = parser.opt.lowercase || parser.opt.lowercasetags;
        parser.looseCase = parser.opt.lowercase ? 'toLowerCase' : 'toUpperCase';
        parser.tags = [];
        parser.closed = parser.closedRoot = parser.sawRoot = false;
        parser.tag = parser.error = null;
        parser.strict = !!strict;
        parser.noscript = !!(strict || parser.opt.noscript);
        parser.state = S.BEGIN;
        parser.strictEntities = parser.opt.strictEntities;
        parser.ENTITIES = parser.strictEntities ? Object.create(sax.XML_ENTITIES) : Object.create(sax.ENTITIES);
        parser.attribList = [];
        // namespaces form a prototype chain.
        // it always points at the current tag,
        // which protos to its parent tag.
        if (parser.opt.xmlns) {
            parser.ns = Object.create(rootNS);
        }
        // disallow unquoted attribute values if not otherwise configured
        // and strict mode is true
        if (parser.opt.unquotedAttributeValues === undefined) {
            parser.opt.unquotedAttributeValues = !strict;
        }
        // mostly just for error reporting
        parser.trackPosition = parser.opt.position !== false;
        if (parser.trackPosition) {
            parser.position = parser.line = parser.column = 0;
        }
        emit(parser, 'onready');
    }
    if (!Object.create) {
        Object.create = function(o) {
            function F() {}
            F.prototype = o;
            var newf = new F();
            return newf;
        };
    }
    if (!Object.keys) {
        Object.keys = function(o) {
            var a = [];
            for(var i in o)if (o.hasOwnProperty(i)) a.push(i);
            return a;
        };
    }
    function checkBufferLength(parser) {
        var maxAllowed = Math.max(sax.MAX_BUFFER_LENGTH, 10);
        var maxActual = 0;
        for(var i = 0, l = buffers.length; i < l; i++){
            var len = parser[buffers[i]].length;
            if (len > maxAllowed) {
                // Text/cdata nodes can get big, and since they're buffered,
                // we can get here under normal conditions.
                // Avoid issues by emitting the text node now,
                // so at least it won't get any bigger.
                switch(buffers[i]){
                    case 'textNode':
                        closeText(parser);
                        break;
                    case 'cdata':
                        emitNode(parser, 'oncdata', parser.cdata);
                        parser.cdata = '';
                        break;
                    case 'script':
                        emitNode(parser, 'onscript', parser.script);
                        parser.script = '';
                        break;
                    default:
                        error(parser, 'Max buffer length exceeded: ' + buffers[i]);
                }
            }
            maxActual = Math.max(maxActual, len);
        }
        // schedule the next check for the earliest possible buffer overrun.
        var m = sax.MAX_BUFFER_LENGTH - maxActual;
        parser.bufferCheckPosition = m + parser.position;
    }
    function clearBuffers(parser) {
        for(var i = 0, l = buffers.length; i < l; i++){
            parser[buffers[i]] = '';
        }
    }
    function flushBuffers(parser) {
        closeText(parser);
        if (parser.cdata !== '') {
            emitNode(parser, 'oncdata', parser.cdata);
            parser.cdata = '';
        }
        if (parser.script !== '') {
            emitNode(parser, 'onscript', parser.script);
            parser.script = '';
        }
    }
    SAXParser.prototype = {
        end: function() {
            end(this);
        },
        write: write,
        resume: function() {
            this.error = null;
            return this;
        },
        close: function() {
            return this.write(null);
        },
        flush: function() {
            flushBuffers(this);
        }
    };
    var Stream;
    try {
        Stream = __turbopack_context__.r("[externals]/stream [external] (stream, cjs)").Stream;
    } catch (ex) {
        Stream = function() {};
    }
    if (!Stream) Stream = function() {};
    var streamWraps = sax.EVENTS.filter(function(ev) {
        return ev !== 'error' && ev !== 'end';
    });
    function createStream(strict, opt) {
        return new SAXStream(strict, opt);
    }
    function SAXStream(strict, opt) {
        if (!(this instanceof SAXStream)) {
            return new SAXStream(strict, opt);
        }
        Stream.apply(this);
        this._parser = new SAXParser(strict, opt);
        this.writable = true;
        this.readable = true;
        var me = this;
        this._parser.onend = function() {
            me.emit('end');
        };
        this._parser.onerror = function(er) {
            me.emit('error', er);
            // if didn't throw, then means error was handled.
            // go ahead and clear error, so we can write again.
            me._parser.error = null;
        };
        this._decoder = null;
        streamWraps.forEach(function(ev) {
            Object.defineProperty(me, 'on' + ev, {
                get: function() {
                    return me._parser['on' + ev];
                },
                set: function(h) {
                    if (!h) {
                        me.removeAllListeners(ev);
                        me._parser['on' + ev] = h;
                        return h;
                    }
                    me.on(ev, h);
                },
                enumerable: true,
                configurable: false
            });
        });
    }
    SAXStream.prototype = Object.create(Stream.prototype, {
        constructor: {
            value: SAXStream
        }
    });
    SAXStream.prototype.write = function(data) {
        if (typeof Buffer === 'function' && typeof Buffer.isBuffer === 'function' && Buffer.isBuffer(data)) {
            if (!this._decoder) {
                var SD = __turbopack_context__.r("[externals]/string_decoder [external] (string_decoder, cjs)").StringDecoder;
                this._decoder = new SD('utf8');
            }
            data = this._decoder.write(data);
        }
        this._parser.write(data.toString());
        this.emit('data', data);
        return true;
    };
    SAXStream.prototype.end = function(chunk) {
        if (chunk && chunk.length) {
            this.write(chunk);
        }
        this._parser.end();
        return true;
    };
    SAXStream.prototype.on = function(ev, handler) {
        var me = this;
        if (!me._parser['on' + ev] && streamWraps.indexOf(ev) !== -1) {
            me._parser['on' + ev] = function() {
                var args = arguments.length === 1 ? [
                    arguments[0]
                ] : Array.apply(null, arguments);
                args.splice(0, 0, ev);
                me.emit.apply(me, args);
            };
        }
        return Stream.prototype.on.call(me, ev, handler);
    };
    // this really needs to be replaced with character classes.
    // XML allows all manner of ridiculous numbers and digits.
    var CDATA = '[CDATA[';
    var DOCTYPE = 'DOCTYPE';
    var XML_NAMESPACE = 'http://www.w3.org/XML/1998/namespace';
    var XMLNS_NAMESPACE = 'http://www.w3.org/2000/xmlns/';
    var rootNS = {
        xml: XML_NAMESPACE,
        xmlns: XMLNS_NAMESPACE
    };
    // http://www.w3.org/TR/REC-xml/#NT-NameStartChar
    // This implementation works on strings, a single character at a time
    // as such, it cannot ever support astral-plane characters (10000-EFFFF)
    // without a significant breaking change to either this  parser, or the
    // JavaScript language.  Implementation of an emoji-capable xml parser
    // is left as an exercise for the reader.
    var nameStart = /[:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/;
    var nameBody = /[:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\u00B7\u0300-\u036F\u203F-\u2040.\d-]/;
    var entityStart = /[#:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/;
    var entityBody = /[#:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\u00B7\u0300-\u036F\u203F-\u2040.\d-]/;
    function isWhitespace(c) {
        return c === ' ' || c === '\n' || c === '\r' || c === '\t';
    }
    function isQuote(c) {
        return c === '"' || c === '\'';
    }
    function isAttribEnd(c) {
        return c === '>' || isWhitespace(c);
    }
    function isMatch(regex, c) {
        return regex.test(c);
    }
    function notMatch(regex, c) {
        return !isMatch(regex, c);
    }
    var S = 0;
    sax.STATE = {
        BEGIN: S++,
        BEGIN_WHITESPACE: S++,
        TEXT: S++,
        TEXT_ENTITY: S++,
        OPEN_WAKA: S++,
        SGML_DECL: S++,
        SGML_DECL_QUOTED: S++,
        DOCTYPE: S++,
        DOCTYPE_QUOTED: S++,
        DOCTYPE_DTD: S++,
        DOCTYPE_DTD_QUOTED: S++,
        COMMENT_STARTING: S++,
        COMMENT: S++,
        COMMENT_ENDING: S++,
        COMMENT_ENDED: S++,
        CDATA: S++,
        CDATA_ENDING: S++,
        CDATA_ENDING_2: S++,
        PROC_INST: S++,
        PROC_INST_BODY: S++,
        PROC_INST_ENDING: S++,
        OPEN_TAG: S++,
        OPEN_TAG_SLASH: S++,
        ATTRIB: S++,
        ATTRIB_NAME: S++,
        ATTRIB_NAME_SAW_WHITE: S++,
        ATTRIB_VALUE: S++,
        ATTRIB_VALUE_QUOTED: S++,
        ATTRIB_VALUE_CLOSED: S++,
        ATTRIB_VALUE_UNQUOTED: S++,
        ATTRIB_VALUE_ENTITY_Q: S++,
        ATTRIB_VALUE_ENTITY_U: S++,
        CLOSE_TAG: S++,
        CLOSE_TAG_SAW_WHITE: S++,
        SCRIPT: S++,
        SCRIPT_ENDING: S++ // <script> ... <
    };
    sax.XML_ENTITIES = {
        'amp': '&',
        'gt': '>',
        'lt': '<',
        'quot': '"',
        'apos': "'"
    };
    sax.ENTITIES = {
        'amp': '&',
        'gt': '>',
        'lt': '<',
        'quot': '"',
        'apos': "'",
        'AElig': 198,
        'Aacute': 193,
        'Acirc': 194,
        'Agrave': 192,
        'Aring': 197,
        'Atilde': 195,
        'Auml': 196,
        'Ccedil': 199,
        'ETH': 208,
        'Eacute': 201,
        'Ecirc': 202,
        'Egrave': 200,
        'Euml': 203,
        'Iacute': 205,
        'Icirc': 206,
        'Igrave': 204,
        'Iuml': 207,
        'Ntilde': 209,
        'Oacute': 211,
        'Ocirc': 212,
        'Ograve': 210,
        'Oslash': 216,
        'Otilde': 213,
        'Ouml': 214,
        'THORN': 222,
        'Uacute': 218,
        'Ucirc': 219,
        'Ugrave': 217,
        'Uuml': 220,
        'Yacute': 221,
        'aacute': 225,
        'acirc': 226,
        'aelig': 230,
        'agrave': 224,
        'aring': 229,
        'atilde': 227,
        'auml': 228,
        'ccedil': 231,
        'eacute': 233,
        'ecirc': 234,
        'egrave': 232,
        'eth': 240,
        'euml': 235,
        'iacute': 237,
        'icirc': 238,
        'igrave': 236,
        'iuml': 239,
        'ntilde': 241,
        'oacute': 243,
        'ocirc': 244,
        'ograve': 242,
        'oslash': 248,
        'otilde': 245,
        'ouml': 246,
        'szlig': 223,
        'thorn': 254,
        'uacute': 250,
        'ucirc': 251,
        'ugrave': 249,
        'uuml': 252,
        'yacute': 253,
        'yuml': 255,
        'copy': 169,
        'reg': 174,
        'nbsp': 160,
        'iexcl': 161,
        'cent': 162,
        'pound': 163,
        'curren': 164,
        'yen': 165,
        'brvbar': 166,
        'sect': 167,
        'uml': 168,
        'ordf': 170,
        'laquo': 171,
        'not': 172,
        'shy': 173,
        'macr': 175,
        'deg': 176,
        'plusmn': 177,
        'sup1': 185,
        'sup2': 178,
        'sup3': 179,
        'acute': 180,
        'micro': 181,
        'para': 182,
        'middot': 183,
        'cedil': 184,
        'ordm': 186,
        'raquo': 187,
        'frac14': 188,
        'frac12': 189,
        'frac34': 190,
        'iquest': 191,
        'times': 215,
        'divide': 247,
        'OElig': 338,
        'oelig': 339,
        'Scaron': 352,
        'scaron': 353,
        'Yuml': 376,
        'fnof': 402,
        'circ': 710,
        'tilde': 732,
        'Alpha': 913,
        'Beta': 914,
        'Gamma': 915,
        'Delta': 916,
        'Epsilon': 917,
        'Zeta': 918,
        'Eta': 919,
        'Theta': 920,
        'Iota': 921,
        'Kappa': 922,
        'Lambda': 923,
        'Mu': 924,
        'Nu': 925,
        'Xi': 926,
        'Omicron': 927,
        'Pi': 928,
        'Rho': 929,
        'Sigma': 931,
        'Tau': 932,
        'Upsilon': 933,
        'Phi': 934,
        'Chi': 935,
        'Psi': 936,
        'Omega': 937,
        'alpha': 945,
        'beta': 946,
        'gamma': 947,
        'delta': 948,
        'epsilon': 949,
        'zeta': 950,
        'eta': 951,
        'theta': 952,
        'iota': 953,
        'kappa': 954,
        'lambda': 955,
        'mu': 956,
        'nu': 957,
        'xi': 958,
        'omicron': 959,
        'pi': 960,
        'rho': 961,
        'sigmaf': 962,
        'sigma': 963,
        'tau': 964,
        'upsilon': 965,
        'phi': 966,
        'chi': 967,
        'psi': 968,
        'omega': 969,
        'thetasym': 977,
        'upsih': 978,
        'piv': 982,
        'ensp': 8194,
        'emsp': 8195,
        'thinsp': 8201,
        'zwnj': 8204,
        'zwj': 8205,
        'lrm': 8206,
        'rlm': 8207,
        'ndash': 8211,
        'mdash': 8212,
        'lsquo': 8216,
        'rsquo': 8217,
        'sbquo': 8218,
        'ldquo': 8220,
        'rdquo': 8221,
        'bdquo': 8222,
        'dagger': 8224,
        'Dagger': 8225,
        'bull': 8226,
        'hellip': 8230,
        'permil': 8240,
        'prime': 8242,
        'Prime': 8243,
        'lsaquo': 8249,
        'rsaquo': 8250,
        'oline': 8254,
        'frasl': 8260,
        'euro': 8364,
        'image': 8465,
        'weierp': 8472,
        'real': 8476,
        'trade': 8482,
        'alefsym': 8501,
        'larr': 8592,
        'uarr': 8593,
        'rarr': 8594,
        'darr': 8595,
        'harr': 8596,
        'crarr': 8629,
        'lArr': 8656,
        'uArr': 8657,
        'rArr': 8658,
        'dArr': 8659,
        'hArr': 8660,
        'forall': 8704,
        'part': 8706,
        'exist': 8707,
        'empty': 8709,
        'nabla': 8711,
        'isin': 8712,
        'notin': 8713,
        'ni': 8715,
        'prod': 8719,
        'sum': 8721,
        'minus': 8722,
        'lowast': 8727,
        'radic': 8730,
        'prop': 8733,
        'infin': 8734,
        'ang': 8736,
        'and': 8743,
        'or': 8744,
        'cap': 8745,
        'cup': 8746,
        'int': 8747,
        'there4': 8756,
        'sim': 8764,
        'cong': 8773,
        'asymp': 8776,
        'ne': 8800,
        'equiv': 8801,
        'le': 8804,
        'ge': 8805,
        'sub': 8834,
        'sup': 8835,
        'nsub': 8836,
        'sube': 8838,
        'supe': 8839,
        'oplus': 8853,
        'otimes': 8855,
        'perp': 8869,
        'sdot': 8901,
        'lceil': 8968,
        'rceil': 8969,
        'lfloor': 8970,
        'rfloor': 8971,
        'lang': 9001,
        'rang': 9002,
        'loz': 9674,
        'spades': 9824,
        'clubs': 9827,
        'hearts': 9829,
        'diams': 9830
    };
    Object.keys(sax.ENTITIES).forEach(function(key) {
        var e = sax.ENTITIES[key];
        var s = typeof e === 'number' ? String.fromCharCode(e) : e;
        sax.ENTITIES[key] = s;
    });
    for(var s in sax.STATE){
        sax.STATE[sax.STATE[s]] = s;
    }
    // shorthand
    S = sax.STATE;
    function emit(parser, event, data) {
        parser[event] && parser[event](data);
    }
    function emitNode(parser, nodeType, data) {
        if (parser.textNode) closeText(parser);
        emit(parser, nodeType, data);
    }
    function closeText(parser) {
        parser.textNode = textopts(parser.opt, parser.textNode);
        if (parser.textNode) emit(parser, 'ontext', parser.textNode);
        parser.textNode = '';
    }
    function textopts(opt, text) {
        if (opt.trim) text = text.trim();
        if (opt.normalize) text = text.replace(/\s+/g, ' ');
        return text;
    }
    function error(parser, er) {
        closeText(parser);
        if (parser.trackPosition) {
            er += '\nLine: ' + parser.line + '\nColumn: ' + parser.column + '\nChar: ' + parser.c;
        }
        er = new Error(er);
        parser.error = er;
        emit(parser, 'onerror', er);
        return parser;
    }
    function end(parser) {
        if (parser.sawRoot && !parser.closedRoot) strictFail(parser, 'Unclosed root tag');
        if (parser.state !== S.BEGIN && parser.state !== S.BEGIN_WHITESPACE && parser.state !== S.TEXT) {
            error(parser, 'Unexpected end');
        }
        closeText(parser);
        parser.c = '';
        parser.closed = true;
        emit(parser, 'onend');
        SAXParser.call(parser, parser.strict, parser.opt);
        return parser;
    }
    function strictFail(parser, message) {
        if (typeof parser !== 'object' || !(parser instanceof SAXParser)) {
            throw new Error('bad call to strictFail');
        }
        if (parser.strict) {
            error(parser, message);
        }
    }
    function newTag(parser) {
        if (!parser.strict) parser.tagName = parser.tagName[parser.looseCase]();
        var parent = parser.tags[parser.tags.length - 1] || parser;
        var tag = parser.tag = {
            name: parser.tagName,
            attributes: {}
        };
        // will be overridden if tag contails an xmlns="foo" or xmlns:foo="bar"
        if (parser.opt.xmlns) {
            tag.ns = parent.ns;
        }
        parser.attribList.length = 0;
        emitNode(parser, 'onopentagstart', tag);
    }
    function qname(name, attribute) {
        var i = name.indexOf(':');
        var qualName = i < 0 ? [
            '',
            name
        ] : name.split(':');
        var prefix = qualName[0];
        var local = qualName[1];
        // <x "xmlns"="http://foo">
        if (attribute && name === 'xmlns') {
            prefix = 'xmlns';
            local = '';
        }
        return {
            prefix: prefix,
            local: local
        };
    }
    function attrib(parser) {
        if (!parser.strict) {
            parser.attribName = parser.attribName[parser.looseCase]();
        }
        if (parser.attribList.indexOf(parser.attribName) !== -1 || parser.tag.attributes.hasOwnProperty(parser.attribName)) {
            parser.attribName = parser.attribValue = '';
            return;
        }
        if (parser.opt.xmlns) {
            var qn = qname(parser.attribName, true);
            var prefix = qn.prefix;
            var local = qn.local;
            if (prefix === 'xmlns') {
                // namespace binding attribute. push the binding into scope
                if (local === 'xml' && parser.attribValue !== XML_NAMESPACE) {
                    strictFail(parser, 'xml: prefix must be bound to ' + XML_NAMESPACE + '\n' + 'Actual: ' + parser.attribValue);
                } else if (local === 'xmlns' && parser.attribValue !== XMLNS_NAMESPACE) {
                    strictFail(parser, 'xmlns: prefix must be bound to ' + XMLNS_NAMESPACE + '\n' + 'Actual: ' + parser.attribValue);
                } else {
                    var tag = parser.tag;
                    var parent = parser.tags[parser.tags.length - 1] || parser;
                    if (tag.ns === parent.ns) {
                        tag.ns = Object.create(parent.ns);
                    }
                    tag.ns[local] = parser.attribValue;
                }
            }
            // defer onattribute events until all attributes have been seen
            // so any new bindings can take effect. preserve attribute order
            // so deferred events can be emitted in document order
            parser.attribList.push([
                parser.attribName,
                parser.attribValue
            ]);
        } else {
            // in non-xmlns mode, we can emit the event right away
            parser.tag.attributes[parser.attribName] = parser.attribValue;
            emitNode(parser, 'onattribute', {
                name: parser.attribName,
                value: parser.attribValue
            });
        }
        parser.attribName = parser.attribValue = '';
    }
    function openTag(parser, selfClosing) {
        if (parser.opt.xmlns) {
            // emit namespace binding events
            var tag = parser.tag;
            // add namespace info to tag
            var qn = qname(parser.tagName);
            tag.prefix = qn.prefix;
            tag.local = qn.local;
            tag.uri = tag.ns[qn.prefix] || '';
            if (tag.prefix && !tag.uri) {
                strictFail(parser, 'Unbound namespace prefix: ' + JSON.stringify(parser.tagName));
                tag.uri = qn.prefix;
            }
            var parent = parser.tags[parser.tags.length - 1] || parser;
            if (tag.ns && parent.ns !== tag.ns) {
                Object.keys(tag.ns).forEach(function(p) {
                    emitNode(parser, 'onopennamespace', {
                        prefix: p,
                        uri: tag.ns[p]
                    });
                });
            }
            // handle deferred onattribute events
            // Note: do not apply default ns to attributes:
            //   http://www.w3.org/TR/REC-xml-names/#defaulting
            for(var i = 0, l = parser.attribList.length; i < l; i++){
                var nv = parser.attribList[i];
                var name = nv[0];
                var value = nv[1];
                var qualName = qname(name, true);
                var prefix = qualName.prefix;
                var local = qualName.local;
                var uri = prefix === '' ? '' : tag.ns[prefix] || '';
                var a = {
                    name: name,
                    value: value,
                    prefix: prefix,
                    local: local,
                    uri: uri
                };
                // if there's any attributes with an undefined namespace,
                // then fail on them now.
                if (prefix && prefix !== 'xmlns' && !uri) {
                    strictFail(parser, 'Unbound namespace prefix: ' + JSON.stringify(prefix));
                    a.uri = prefix;
                }
                parser.tag.attributes[name] = a;
                emitNode(parser, 'onattribute', a);
            }
            parser.attribList.length = 0;
        }
        parser.tag.isSelfClosing = !!selfClosing;
        // process the tag
        parser.sawRoot = true;
        parser.tags.push(parser.tag);
        emitNode(parser, 'onopentag', parser.tag);
        if (!selfClosing) {
            // special case for <script> in non-strict mode.
            if (!parser.noscript && parser.tagName.toLowerCase() === 'script') {
                parser.state = S.SCRIPT;
            } else {
                parser.state = S.TEXT;
            }
            parser.tag = null;
            parser.tagName = '';
        }
        parser.attribName = parser.attribValue = '';
        parser.attribList.length = 0;
    }
    function closeTag(parser) {
        if (!parser.tagName) {
            strictFail(parser, 'Weird empty close tag.');
            parser.textNode += '</>';
            parser.state = S.TEXT;
            return;
        }
        if (parser.script) {
            if (parser.tagName !== 'script') {
                parser.script += '</' + parser.tagName + '>';
                parser.tagName = '';
                parser.state = S.SCRIPT;
                return;
            }
            emitNode(parser, 'onscript', parser.script);
            parser.script = '';
        }
        // first make sure that the closing tag actually exists.
        // <a><b></c></b></a> will close everything, otherwise.
        var t = parser.tags.length;
        var tagName = parser.tagName;
        if (!parser.strict) {
            tagName = tagName[parser.looseCase]();
        }
        var closeTo = tagName;
        while(t--){
            var close = parser.tags[t];
            if (close.name !== closeTo) {
                // fail the first time in strict mode
                strictFail(parser, 'Unexpected close tag');
            } else {
                break;
            }
        }
        // didn't find it.  we already failed for strict, so just abort.
        if (t < 0) {
            strictFail(parser, 'Unmatched closing tag: ' + parser.tagName);
            parser.textNode += '</' + parser.tagName + '>';
            parser.state = S.TEXT;
            return;
        }
        parser.tagName = tagName;
        var s = parser.tags.length;
        while(s-- > t){
            var tag = parser.tag = parser.tags.pop();
            parser.tagName = parser.tag.name;
            emitNode(parser, 'onclosetag', parser.tagName);
            var x = {};
            for(var i in tag.ns){
                x[i] = tag.ns[i];
            }
            var parent = parser.tags[parser.tags.length - 1] || parser;
            if (parser.opt.xmlns && tag.ns !== parent.ns) {
                // remove namespace bindings introduced by tag
                Object.keys(tag.ns).forEach(function(p) {
                    var n = tag.ns[p];
                    emitNode(parser, 'onclosenamespace', {
                        prefix: p,
                        uri: n
                    });
                });
            }
        }
        if (t === 0) parser.closedRoot = true;
        parser.tagName = parser.attribValue = parser.attribName = '';
        parser.attribList.length = 0;
        parser.state = S.TEXT;
    }
    function parseEntity(parser) {
        var entity = parser.entity;
        var entityLC = entity.toLowerCase();
        var num;
        var numStr = '';
        if (parser.ENTITIES[entity]) {
            return parser.ENTITIES[entity];
        }
        if (parser.ENTITIES[entityLC]) {
            return parser.ENTITIES[entityLC];
        }
        entity = entityLC;
        if (entity.charAt(0) === '#') {
            if (entity.charAt(1) === 'x') {
                entity = entity.slice(2);
                num = parseInt(entity, 16);
                numStr = num.toString(16);
            } else {
                entity = entity.slice(1);
                num = parseInt(entity, 10);
                numStr = num.toString(10);
            }
        }
        entity = entity.replace(/^0+/, '');
        if (isNaN(num) || numStr.toLowerCase() !== entity) {
            strictFail(parser, 'Invalid character entity');
            return '&' + parser.entity + ';';
        }
        return String.fromCodePoint(num);
    }
    function beginWhiteSpace(parser, c) {
        if (c === '<') {
            parser.state = S.OPEN_WAKA;
            parser.startTagPosition = parser.position;
        } else if (!isWhitespace(c)) {
            // have to process this as a text node.
            // weird, but happens.
            strictFail(parser, 'Non-whitespace before first tag.');
            parser.textNode = c;
            parser.state = S.TEXT;
        }
    }
    function charAt(chunk, i) {
        var result = '';
        if (i < chunk.length) {
            result = chunk.charAt(i);
        }
        return result;
    }
    function write(chunk) {
        var parser = this;
        if (this.error) {
            throw this.error;
        }
        if (parser.closed) {
            return error(parser, 'Cannot write after close. Assign an onready handler.');
        }
        if (chunk === null) {
            return end(parser);
        }
        if (typeof chunk === 'object') {
            chunk = chunk.toString();
        }
        var i = 0;
        var c = '';
        while(true){
            c = charAt(chunk, i++);
            parser.c = c;
            if (!c) {
                break;
            }
            if (parser.trackPosition) {
                parser.position++;
                if (c === '\n') {
                    parser.line++;
                    parser.column = 0;
                } else {
                    parser.column++;
                }
            }
            switch(parser.state){
                case S.BEGIN:
                    parser.state = S.BEGIN_WHITESPACE;
                    if (c === '\uFEFF') {
                        continue;
                    }
                    beginWhiteSpace(parser, c);
                    continue;
                case S.BEGIN_WHITESPACE:
                    beginWhiteSpace(parser, c);
                    continue;
                case S.TEXT:
                    if (parser.sawRoot && !parser.closedRoot) {
                        var starti = i - 1;
                        while(c && c !== '<' && c !== '&'){
                            c = charAt(chunk, i++);
                            if (c && parser.trackPosition) {
                                parser.position++;
                                if (c === '\n') {
                                    parser.line++;
                                    parser.column = 0;
                                } else {
                                    parser.column++;
                                }
                            }
                        }
                        parser.textNode += chunk.substring(starti, i - 1);
                    }
                    if (c === '<' && !(parser.sawRoot && parser.closedRoot && !parser.strict)) {
                        parser.state = S.OPEN_WAKA;
                        parser.startTagPosition = parser.position;
                    } else {
                        if (!isWhitespace(c) && (!parser.sawRoot || parser.closedRoot)) {
                            strictFail(parser, 'Text data outside of root node.');
                        }
                        if (c === '&') {
                            parser.state = S.TEXT_ENTITY;
                        } else {
                            parser.textNode += c;
                        }
                    }
                    continue;
                case S.SCRIPT:
                    // only non-strict
                    if (c === '<') {
                        parser.state = S.SCRIPT_ENDING;
                    } else {
                        parser.script += c;
                    }
                    continue;
                case S.SCRIPT_ENDING:
                    if (c === '/') {
                        parser.state = S.CLOSE_TAG;
                    } else {
                        parser.script += '<' + c;
                        parser.state = S.SCRIPT;
                    }
                    continue;
                case S.OPEN_WAKA:
                    // either a /, ?, !, or text is coming next.
                    if (c === '!') {
                        parser.state = S.SGML_DECL;
                        parser.sgmlDecl = '';
                    } else if (isWhitespace(c)) {
                    // wait for it...
                    } else if (isMatch(nameStart, c)) {
                        parser.state = S.OPEN_TAG;
                        parser.tagName = c;
                    } else if (c === '/') {
                        parser.state = S.CLOSE_TAG;
                        parser.tagName = '';
                    } else if (c === '?') {
                        parser.state = S.PROC_INST;
                        parser.procInstName = parser.procInstBody = '';
                    } else {
                        strictFail(parser, 'Unencoded <');
                        // if there was some whitespace, then add that in.
                        if (parser.startTagPosition + 1 < parser.position) {
                            var pad = parser.position - parser.startTagPosition;
                            c = new Array(pad).join(' ') + c;
                        }
                        parser.textNode += '<' + c;
                        parser.state = S.TEXT;
                    }
                    continue;
                case S.SGML_DECL:
                    if (parser.sgmlDecl + c === '--') {
                        parser.state = S.COMMENT;
                        parser.comment = '';
                        parser.sgmlDecl = '';
                        continue;
                    }
                    if (parser.doctype && parser.doctype !== true && parser.sgmlDecl) {
                        parser.state = S.DOCTYPE_DTD;
                        parser.doctype += '<!' + parser.sgmlDecl + c;
                        parser.sgmlDecl = '';
                    } else if ((parser.sgmlDecl + c).toUpperCase() === CDATA) {
                        emitNode(parser, 'onopencdata');
                        parser.state = S.CDATA;
                        parser.sgmlDecl = '';
                        parser.cdata = '';
                    } else if ((parser.sgmlDecl + c).toUpperCase() === DOCTYPE) {
                        parser.state = S.DOCTYPE;
                        if (parser.doctype || parser.sawRoot) {
                            strictFail(parser, 'Inappropriately located doctype declaration');
                        }
                        parser.doctype = '';
                        parser.sgmlDecl = '';
                    } else if (c === '>') {
                        emitNode(parser, 'onsgmldeclaration', parser.sgmlDecl);
                        parser.sgmlDecl = '';
                        parser.state = S.TEXT;
                    } else if (isQuote(c)) {
                        parser.state = S.SGML_DECL_QUOTED;
                        parser.sgmlDecl += c;
                    } else {
                        parser.sgmlDecl += c;
                    }
                    continue;
                case S.SGML_DECL_QUOTED:
                    if (c === parser.q) {
                        parser.state = S.SGML_DECL;
                        parser.q = '';
                    }
                    parser.sgmlDecl += c;
                    continue;
                case S.DOCTYPE:
                    if (c === '>') {
                        parser.state = S.TEXT;
                        emitNode(parser, 'ondoctype', parser.doctype);
                        parser.doctype = true; // just remember that we saw it.
                    } else {
                        parser.doctype += c;
                        if (c === '[') {
                            parser.state = S.DOCTYPE_DTD;
                        } else if (isQuote(c)) {
                            parser.state = S.DOCTYPE_QUOTED;
                            parser.q = c;
                        }
                    }
                    continue;
                case S.DOCTYPE_QUOTED:
                    parser.doctype += c;
                    if (c === parser.q) {
                        parser.q = '';
                        parser.state = S.DOCTYPE;
                    }
                    continue;
                case S.DOCTYPE_DTD:
                    if (c === ']') {
                        parser.doctype += c;
                        parser.state = S.DOCTYPE;
                    } else if (c === '<') {
                        parser.state = S.OPEN_WAKA;
                        parser.startTagPosition = parser.position;
                    } else if (isQuote(c)) {
                        parser.doctype += c;
                        parser.state = S.DOCTYPE_DTD_QUOTED;
                        parser.q = c;
                    } else {
                        parser.doctype += c;
                    }
                    continue;
                case S.DOCTYPE_DTD_QUOTED:
                    parser.doctype += c;
                    if (c === parser.q) {
                        parser.state = S.DOCTYPE_DTD;
                        parser.q = '';
                    }
                    continue;
                case S.COMMENT:
                    if (c === '-') {
                        parser.state = S.COMMENT_ENDING;
                    } else {
                        parser.comment += c;
                    }
                    continue;
                case S.COMMENT_ENDING:
                    if (c === '-') {
                        parser.state = S.COMMENT_ENDED;
                        parser.comment = textopts(parser.opt, parser.comment);
                        if (parser.comment) {
                            emitNode(parser, 'oncomment', parser.comment);
                        }
                        parser.comment = '';
                    } else {
                        parser.comment += '-' + c;
                        parser.state = S.COMMENT;
                    }
                    continue;
                case S.COMMENT_ENDED:
                    if (c !== '>') {
                        strictFail(parser, 'Malformed comment');
                        // allow <!-- blah -- bloo --> in non-strict mode,
                        // which is a comment of " blah -- bloo "
                        parser.comment += '--' + c;
                        parser.state = S.COMMENT;
                    } else if (parser.doctype && parser.doctype !== true) {
                        parser.state = S.DOCTYPE_DTD;
                    } else {
                        parser.state = S.TEXT;
                    }
                    continue;
                case S.CDATA:
                    if (c === ']') {
                        parser.state = S.CDATA_ENDING;
                    } else {
                        parser.cdata += c;
                    }
                    continue;
                case S.CDATA_ENDING:
                    if (c === ']') {
                        parser.state = S.CDATA_ENDING_2;
                    } else {
                        parser.cdata += ']' + c;
                        parser.state = S.CDATA;
                    }
                    continue;
                case S.CDATA_ENDING_2:
                    if (c === '>') {
                        if (parser.cdata) {
                            emitNode(parser, 'oncdata', parser.cdata);
                        }
                        emitNode(parser, 'onclosecdata');
                        parser.cdata = '';
                        parser.state = S.TEXT;
                    } else if (c === ']') {
                        parser.cdata += ']';
                    } else {
                        parser.cdata += ']]' + c;
                        parser.state = S.CDATA;
                    }
                    continue;
                case S.PROC_INST:
                    if (c === '?') {
                        parser.state = S.PROC_INST_ENDING;
                    } else if (isWhitespace(c)) {
                        parser.state = S.PROC_INST_BODY;
                    } else {
                        parser.procInstName += c;
                    }
                    continue;
                case S.PROC_INST_BODY:
                    if (!parser.procInstBody && isWhitespace(c)) {
                        continue;
                    } else if (c === '?') {
                        parser.state = S.PROC_INST_ENDING;
                    } else {
                        parser.procInstBody += c;
                    }
                    continue;
                case S.PROC_INST_ENDING:
                    if (c === '>') {
                        emitNode(parser, 'onprocessinginstruction', {
                            name: parser.procInstName,
                            body: parser.procInstBody
                        });
                        parser.procInstName = parser.procInstBody = '';
                        parser.state = S.TEXT;
                    } else {
                        parser.procInstBody += '?' + c;
                        parser.state = S.PROC_INST_BODY;
                    }
                    continue;
                case S.OPEN_TAG:
                    if (isMatch(nameBody, c)) {
                        parser.tagName += c;
                    } else {
                        newTag(parser);
                        if (c === '>') {
                            openTag(parser);
                        } else if (c === '/') {
                            parser.state = S.OPEN_TAG_SLASH;
                        } else {
                            if (!isWhitespace(c)) {
                                strictFail(parser, 'Invalid character in tag name');
                            }
                            parser.state = S.ATTRIB;
                        }
                    }
                    continue;
                case S.OPEN_TAG_SLASH:
                    if (c === '>') {
                        openTag(parser, true);
                        closeTag(parser);
                    } else {
                        strictFail(parser, 'Forward-slash in opening tag not followed by >');
                        parser.state = S.ATTRIB;
                    }
                    continue;
                case S.ATTRIB:
                    // haven't read the attribute name yet.
                    if (isWhitespace(c)) {
                        continue;
                    } else if (c === '>') {
                        openTag(parser);
                    } else if (c === '/') {
                        parser.state = S.OPEN_TAG_SLASH;
                    } else if (isMatch(nameStart, c)) {
                        parser.attribName = c;
                        parser.attribValue = '';
                        parser.state = S.ATTRIB_NAME;
                    } else {
                        strictFail(parser, 'Invalid attribute name');
                    }
                    continue;
                case S.ATTRIB_NAME:
                    if (c === '=') {
                        parser.state = S.ATTRIB_VALUE;
                    } else if (c === '>') {
                        strictFail(parser, 'Attribute without value');
                        parser.attribValue = parser.attribName;
                        attrib(parser);
                        openTag(parser);
                    } else if (isWhitespace(c)) {
                        parser.state = S.ATTRIB_NAME_SAW_WHITE;
                    } else if (isMatch(nameBody, c)) {
                        parser.attribName += c;
                    } else {
                        strictFail(parser, 'Invalid attribute name');
                    }
                    continue;
                case S.ATTRIB_NAME_SAW_WHITE:
                    if (c === '=') {
                        parser.state = S.ATTRIB_VALUE;
                    } else if (isWhitespace(c)) {
                        continue;
                    } else {
                        strictFail(parser, 'Attribute without value');
                        parser.tag.attributes[parser.attribName] = '';
                        parser.attribValue = '';
                        emitNode(parser, 'onattribute', {
                            name: parser.attribName,
                            value: ''
                        });
                        parser.attribName = '';
                        if (c === '>') {
                            openTag(parser);
                        } else if (isMatch(nameStart, c)) {
                            parser.attribName = c;
                            parser.state = S.ATTRIB_NAME;
                        } else {
                            strictFail(parser, 'Invalid attribute name');
                            parser.state = S.ATTRIB;
                        }
                    }
                    continue;
                case S.ATTRIB_VALUE:
                    if (isWhitespace(c)) {
                        continue;
                    } else if (isQuote(c)) {
                        parser.q = c;
                        parser.state = S.ATTRIB_VALUE_QUOTED;
                    } else {
                        if (!parser.opt.unquotedAttributeValues) {
                            error(parser, 'Unquoted attribute value');
                        }
                        parser.state = S.ATTRIB_VALUE_UNQUOTED;
                        parser.attribValue = c;
                    }
                    continue;
                case S.ATTRIB_VALUE_QUOTED:
                    if (c !== parser.q) {
                        if (c === '&') {
                            parser.state = S.ATTRIB_VALUE_ENTITY_Q;
                        } else {
                            parser.attribValue += c;
                        }
                        continue;
                    }
                    attrib(parser);
                    parser.q = '';
                    parser.state = S.ATTRIB_VALUE_CLOSED;
                    continue;
                case S.ATTRIB_VALUE_CLOSED:
                    if (isWhitespace(c)) {
                        parser.state = S.ATTRIB;
                    } else if (c === '>') {
                        openTag(parser);
                    } else if (c === '/') {
                        parser.state = S.OPEN_TAG_SLASH;
                    } else if (isMatch(nameStart, c)) {
                        strictFail(parser, 'No whitespace between attributes');
                        parser.attribName = c;
                        parser.attribValue = '';
                        parser.state = S.ATTRIB_NAME;
                    } else {
                        strictFail(parser, 'Invalid attribute name');
                    }
                    continue;
                case S.ATTRIB_VALUE_UNQUOTED:
                    if (!isAttribEnd(c)) {
                        if (c === '&') {
                            parser.state = S.ATTRIB_VALUE_ENTITY_U;
                        } else {
                            parser.attribValue += c;
                        }
                        continue;
                    }
                    attrib(parser);
                    if (c === '>') {
                        openTag(parser);
                    } else {
                        parser.state = S.ATTRIB;
                    }
                    continue;
                case S.CLOSE_TAG:
                    if (!parser.tagName) {
                        if (isWhitespace(c)) {
                            continue;
                        } else if (notMatch(nameStart, c)) {
                            if (parser.script) {
                                parser.script += '</' + c;
                                parser.state = S.SCRIPT;
                            } else {
                                strictFail(parser, 'Invalid tagname in closing tag.');
                            }
                        } else {
                            parser.tagName = c;
                        }
                    } else if (c === '>') {
                        closeTag(parser);
                    } else if (isMatch(nameBody, c)) {
                        parser.tagName += c;
                    } else if (parser.script) {
                        parser.script += '</' + parser.tagName;
                        parser.tagName = '';
                        parser.state = S.SCRIPT;
                    } else {
                        if (!isWhitespace(c)) {
                            strictFail(parser, 'Invalid tagname in closing tag');
                        }
                        parser.state = S.CLOSE_TAG_SAW_WHITE;
                    }
                    continue;
                case S.CLOSE_TAG_SAW_WHITE:
                    if (isWhitespace(c)) {
                        continue;
                    }
                    if (c === '>') {
                        closeTag(parser);
                    } else {
                        strictFail(parser, 'Invalid characters in closing tag');
                    }
                    continue;
                case S.TEXT_ENTITY:
                case S.ATTRIB_VALUE_ENTITY_Q:
                case S.ATTRIB_VALUE_ENTITY_U:
                    var returnState;
                    var buffer;
                    switch(parser.state){
                        case S.TEXT_ENTITY:
                            returnState = S.TEXT;
                            buffer = 'textNode';
                            break;
                        case S.ATTRIB_VALUE_ENTITY_Q:
                            returnState = S.ATTRIB_VALUE_QUOTED;
                            buffer = 'attribValue';
                            break;
                        case S.ATTRIB_VALUE_ENTITY_U:
                            returnState = S.ATTRIB_VALUE_UNQUOTED;
                            buffer = 'attribValue';
                            break;
                    }
                    if (c === ';') {
                        var parsedEntity = parseEntity(parser);
                        if (parser.opt.unparsedEntities && !Object.values(sax.XML_ENTITIES).includes(parsedEntity)) {
                            parser.entity = '';
                            parser.state = returnState;
                            parser.write(parsedEntity);
                        } else {
                            parser[buffer] += parsedEntity;
                            parser.entity = '';
                            parser.state = returnState;
                        }
                    } else if (isMatch(parser.entity.length ? entityBody : entityStart, c)) {
                        parser.entity += c;
                    } else {
                        strictFail(parser, 'Invalid character in entity name');
                        parser[buffer] += '&' + parser.entity + c;
                        parser.entity = '';
                        parser.state = returnState;
                    }
                    continue;
                default:
                    /* istanbul ignore next */ {
                        throw new Error(parser, 'Unknown state: ' + parser.state);
                    }
            }
        } // while
        if (parser.position >= parser.bufferCheckPosition) {
            checkBufferLength(parser);
        }
        return parser;
    }
    /*! http://mths.be/fromcodepoint v0.1.0 by @mathias */ /* istanbul ignore next */ if (!String.fromCodePoint) {
        (function() {
            var stringFromCharCode = String.fromCharCode;
            var floor = Math.floor;
            var fromCodePoint = function() {
                var MAX_SIZE = 0x4000;
                var codeUnits = [];
                var highSurrogate;
                var lowSurrogate;
                var index = -1;
                var length = arguments.length;
                if (!length) {
                    return '';
                }
                var result = '';
                while(++index < length){
                    var codePoint = Number(arguments[index]);
                    if (!isFinite(codePoint) || // `NaN`, `+Infinity`, or `-Infinity`
                    codePoint < 0 || // not a valid Unicode code point
                    codePoint > 0x10FFFF || // not a valid Unicode code point
                    floor(codePoint) !== codePoint // not an integer
                    ) {
                        throw RangeError('Invalid code point: ' + codePoint);
                    }
                    if (codePoint <= 0xFFFF) {
                        codeUnits.push(codePoint);
                    } else {
                        // http://mathiasbynens.be/notes/javascript-encoding#surrogate-formulae
                        codePoint -= 0x10000;
                        highSurrogate = (codePoint >> 10) + 0xD800;
                        lowSurrogate = codePoint % 0x400 + 0xDC00;
                        codeUnits.push(highSurrogate, lowSurrogate);
                    }
                    if (index + 1 === length || codeUnits.length > MAX_SIZE) {
                        result += stringFromCharCode.apply(null, codeUnits);
                        codeUnits.length = 0;
                    }
                }
                return result;
            };
            /* istanbul ignore next */ if (Object.defineProperty) {
                Object.defineProperty(String, 'fromCodePoint', {
                    value: fromCodePoint,
                    configurable: true,
                    writable: true
                });
            } else {
                String.fromCodePoint = fromCodePoint;
            }
        })();
    }
})(("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : exports);
}),
"[project]/learn-next/final/node_modules/xml2js/lib/bom.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {

// Generated by CoffeeScript 1.12.7
(function() {
    "use strict";
    exports.stripBOM = function(str) {
        if (str[0] === '\uFEFF') {
            return str.substring(1);
        } else {
            return str;
        }
    };
}).call(/*TURBOPACK member replacement*/ __turbopack_context__.e);
}),
"[project]/learn-next/final/node_modules/xml2js/lib/processors.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {

// Generated by CoffeeScript 1.12.7
(function() {
    "use strict";
    var prefixMatch;
    prefixMatch = new RegExp(/(?!xmlns)^.*:/);
    exports.normalize = function(str) {
        return str.toLowerCase();
    };
    exports.firstCharLowerCase = function(str) {
        return str.charAt(0).toLowerCase() + str.slice(1);
    };
    exports.stripPrefix = function(str) {
        return str.replace(prefixMatch, '');
    };
    exports.parseNumbers = function(str) {
        if (!isNaN(str)) {
            str = str % 1 === 0 ? parseInt(str, 10) : parseFloat(str);
        }
        return str;
    };
    exports.parseBooleans = function(str) {
        if (/^(?:true|false)$/i.test(str)) {
            str = str.toLowerCase() === 'true';
        }
        return str;
    };
}).call(/*TURBOPACK member replacement*/ __turbopack_context__.e);
}),
"[project]/learn-next/final/node_modules/xml2js/lib/parser.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {

// Generated by CoffeeScript 1.12.7
(function() {
    "use strict";
    var bom, defaults, events, isEmpty, processItem, processors, sax, setImmediate, bind = function(fn, me) {
        return function() {
            return fn.apply(me, arguments);
        };
    }, extend = function(child, parent) {
        for(var key in parent){
            if (hasProp.call(parent, key)) child[key] = parent[key];
        }
        function ctor() {
            this.constructor = child;
        }
        ctor.prototype = parent.prototype;
        child.prototype = new ctor();
        child.__super__ = parent.prototype;
        return child;
    }, hasProp = {}.hasOwnProperty;
    sax = __turbopack_context__.r("[project]/learn-next/final/node_modules/sax/lib/sax.js [app-rsc] (ecmascript)");
    events = __turbopack_context__.r("[externals]/events [external] (events, cjs)");
    bom = __turbopack_context__.r("[project]/learn-next/final/node_modules/xml2js/lib/bom.js [app-rsc] (ecmascript)");
    processors = __turbopack_context__.r("[project]/learn-next/final/node_modules/xml2js/lib/processors.js [app-rsc] (ecmascript)");
    setImmediate = __turbopack_context__.r("[externals]/timers [external] (timers, cjs)").setImmediate;
    defaults = __turbopack_context__.r("[project]/learn-next/final/node_modules/xml2js/lib/defaults.js [app-rsc] (ecmascript)").defaults;
    isEmpty = function(thing) {
        return typeof thing === "object" && thing != null && Object.keys(thing).length === 0;
    };
    processItem = function(processors, item, key) {
        var i, len, process;
        for(i = 0, len = processors.length; i < len; i++){
            process = processors[i];
            item = process(item, key);
        }
        return item;
    };
    exports.Parser = function(superClass) {
        extend(Parser, superClass);
        function Parser(opts) {
            this.parseStringPromise = bind(this.parseStringPromise, this);
            this.parseString = bind(this.parseString, this);
            this.reset = bind(this.reset, this);
            this.assignOrPush = bind(this.assignOrPush, this);
            this.processAsync = bind(this.processAsync, this);
            var key, ref, value;
            if (!(this instanceof exports.Parser)) {
                return new exports.Parser(opts);
            }
            this.options = {};
            ref = defaults["0.2"];
            for(key in ref){
                if (!hasProp.call(ref, key)) continue;
                value = ref[key];
                this.options[key] = value;
            }
            for(key in opts){
                if (!hasProp.call(opts, key)) continue;
                value = opts[key];
                this.options[key] = value;
            }
            if (this.options.xmlns) {
                this.options.xmlnskey = this.options.attrkey + "ns";
            }
            if (this.options.normalizeTags) {
                if (!this.options.tagNameProcessors) {
                    this.options.tagNameProcessors = [];
                }
                this.options.tagNameProcessors.unshift(processors.normalize);
            }
            this.reset();
        }
        Parser.prototype.processAsync = function() {
            var chunk, err;
            try {
                if (this.remaining.length <= this.options.chunkSize) {
                    chunk = this.remaining;
                    this.remaining = '';
                    this.saxParser = this.saxParser.write(chunk);
                    return this.saxParser.close();
                } else {
                    chunk = this.remaining.substr(0, this.options.chunkSize);
                    this.remaining = this.remaining.substr(this.options.chunkSize, this.remaining.length);
                    this.saxParser = this.saxParser.write(chunk);
                    return setImmediate(this.processAsync);
                }
            } catch (error1) {
                err = error1;
                if (!this.saxParser.errThrown) {
                    this.saxParser.errThrown = true;
                    return this.emit(err);
                }
            }
        };
        Parser.prototype.assignOrPush = function(obj, key, newValue) {
            if (!(key in obj)) {
                if (!this.options.explicitArray) {
                    return obj[key] = newValue;
                } else {
                    return obj[key] = [
                        newValue
                    ];
                }
            } else {
                if (!(obj[key] instanceof Array)) {
                    obj[key] = [
                        obj[key]
                    ];
                }
                return obj[key].push(newValue);
            }
        };
        Parser.prototype.reset = function() {
            var attrkey, charkey, ontext, stack;
            this.removeAllListeners();
            this.saxParser = sax.parser(this.options.strict, {
                trim: false,
                normalize: false,
                xmlns: this.options.xmlns
            });
            this.saxParser.errThrown = false;
            this.saxParser.onerror = function(_this) {
                return function(error) {
                    _this.saxParser.resume();
                    if (!_this.saxParser.errThrown) {
                        _this.saxParser.errThrown = true;
                        return _this.emit("error", error);
                    }
                };
            }(this);
            this.saxParser.onend = function(_this) {
                return function() {
                    if (!_this.saxParser.ended) {
                        _this.saxParser.ended = true;
                        return _this.emit("end", _this.resultObject);
                    }
                };
            }(this);
            this.saxParser.ended = false;
            this.EXPLICIT_CHARKEY = this.options.explicitCharkey;
            this.resultObject = null;
            stack = [];
            attrkey = this.options.attrkey;
            charkey = this.options.charkey;
            this.saxParser.onopentag = function(_this) {
                return function(node) {
                    var key, newValue, obj, processedKey, ref;
                    obj = Object.create(null);
                    obj[charkey] = "";
                    if (!_this.options.ignoreAttrs) {
                        ref = node.attributes;
                        for(key in ref){
                            if (!hasProp.call(ref, key)) continue;
                            if (!(attrkey in obj) && !_this.options.mergeAttrs) {
                                obj[attrkey] = Object.create(null);
                            }
                            newValue = _this.options.attrValueProcessors ? processItem(_this.options.attrValueProcessors, node.attributes[key], key) : node.attributes[key];
                            processedKey = _this.options.attrNameProcessors ? processItem(_this.options.attrNameProcessors, key) : key;
                            if (_this.options.mergeAttrs) {
                                _this.assignOrPush(obj, processedKey, newValue);
                            } else {
                                obj[attrkey][processedKey] = newValue;
                            }
                        }
                    }
                    obj["#name"] = _this.options.tagNameProcessors ? processItem(_this.options.tagNameProcessors, node.name) : node.name;
                    if (_this.options.xmlns) {
                        obj[_this.options.xmlnskey] = {
                            uri: node.uri,
                            local: node.local
                        };
                    }
                    return stack.push(obj);
                };
            }(this);
            this.saxParser.onclosetag = function(_this) {
                return function() {
                    var cdata, emptyStr, key, node, nodeName, obj, objClone, old, s, xpath;
                    obj = stack.pop();
                    nodeName = obj["#name"];
                    if (!_this.options.explicitChildren || !_this.options.preserveChildrenOrder) {
                        delete obj["#name"];
                    }
                    if (obj.cdata === true) {
                        cdata = obj.cdata;
                        delete obj.cdata;
                    }
                    s = stack[stack.length - 1];
                    if (obj[charkey].match(/^\s*$/) && !cdata) {
                        emptyStr = obj[charkey];
                        delete obj[charkey];
                    } else {
                        if (_this.options.trim) {
                            obj[charkey] = obj[charkey].trim();
                        }
                        if (_this.options.normalize) {
                            obj[charkey] = obj[charkey].replace(/\s{2,}/g, " ").trim();
                        }
                        obj[charkey] = _this.options.valueProcessors ? processItem(_this.options.valueProcessors, obj[charkey], nodeName) : obj[charkey];
                        if (Object.keys(obj).length === 1 && charkey in obj && !_this.EXPLICIT_CHARKEY) {
                            obj = obj[charkey];
                        }
                    }
                    if (isEmpty(obj)) {
                        if (typeof _this.options.emptyTag === 'function') {
                            obj = _this.options.emptyTag();
                        } else {
                            obj = _this.options.emptyTag !== '' ? _this.options.emptyTag : emptyStr;
                        }
                    }
                    if (_this.options.validator != null) {
                        xpath = "/" + (function() {
                            var i, len, results;
                            results = [];
                            for(i = 0, len = stack.length; i < len; i++){
                                node = stack[i];
                                results.push(node["#name"]);
                            }
                            return results;
                        })().concat(nodeName).join("/");
                        (function() {
                            var err;
                            try {
                                return obj = _this.options.validator(xpath, s && s[nodeName], obj);
                            } catch (error1) {
                                err = error1;
                                return _this.emit("error", err);
                            }
                        })();
                    }
                    if (_this.options.explicitChildren && !_this.options.mergeAttrs && typeof obj === 'object') {
                        if (!_this.options.preserveChildrenOrder) {
                            node = Object.create(null);
                            if (_this.options.attrkey in obj) {
                                node[_this.options.attrkey] = obj[_this.options.attrkey];
                                delete obj[_this.options.attrkey];
                            }
                            if (!_this.options.charsAsChildren && _this.options.charkey in obj) {
                                node[_this.options.charkey] = obj[_this.options.charkey];
                                delete obj[_this.options.charkey];
                            }
                            if (Object.getOwnPropertyNames(obj).length > 0) {
                                node[_this.options.childkey] = obj;
                            }
                            obj = node;
                        } else if (s) {
                            s[_this.options.childkey] = s[_this.options.childkey] || [];
                            objClone = Object.create(null);
                            for(key in obj){
                                if (!hasProp.call(obj, key)) continue;
                                objClone[key] = obj[key];
                            }
                            s[_this.options.childkey].push(objClone);
                            delete obj["#name"];
                            if (Object.keys(obj).length === 1 && charkey in obj && !_this.EXPLICIT_CHARKEY) {
                                obj = obj[charkey];
                            }
                        }
                    }
                    if (stack.length > 0) {
                        return _this.assignOrPush(s, nodeName, obj);
                    } else {
                        if (_this.options.explicitRoot) {
                            old = obj;
                            obj = Object.create(null);
                            obj[nodeName] = old;
                        }
                        _this.resultObject = obj;
                        _this.saxParser.ended = true;
                        return _this.emit("end", _this.resultObject);
                    }
                };
            }(this);
            ontext = function(_this) {
                return function(text) {
                    var charChild, s;
                    s = stack[stack.length - 1];
                    if (s) {
                        s[charkey] += text;
                        if (_this.options.explicitChildren && _this.options.preserveChildrenOrder && _this.options.charsAsChildren && (_this.options.includeWhiteChars || text.replace(/\\n/g, '').trim() !== '')) {
                            s[_this.options.childkey] = s[_this.options.childkey] || [];
                            charChild = {
                                '#name': '__text__'
                            };
                            charChild[charkey] = text;
                            if (_this.options.normalize) {
                                charChild[charkey] = charChild[charkey].replace(/\s{2,}/g, " ").trim();
                            }
                            s[_this.options.childkey].push(charChild);
                        }
                        return s;
                    }
                };
            }(this);
            this.saxParser.ontext = ontext;
            return this.saxParser.oncdata = function(_this) {
                return function(text) {
                    var s;
                    s = ontext(text);
                    if (s) {
                        return s.cdata = true;
                    }
                };
            }(this);
        };
        Parser.prototype.parseString = function(str, cb) {
            var err;
            if (cb != null && typeof cb === "function") {
                this.on("end", function(result) {
                    this.reset();
                    return cb(null, result);
                });
                this.on("error", function(err) {
                    this.reset();
                    return cb(err);
                });
            }
            try {
                str = str.toString();
                if (str.trim() === '') {
                    this.emit("end", null);
                    return true;
                }
                str = bom.stripBOM(str);
                if (this.options.async) {
                    this.remaining = str;
                    setImmediate(this.processAsync);
                    return this.saxParser;
                }
                return this.saxParser.write(str).close();
            } catch (error1) {
                err = error1;
                if (!(this.saxParser.errThrown || this.saxParser.ended)) {
                    this.emit('error', err);
                    return this.saxParser.errThrown = true;
                } else if (this.saxParser.ended) {
                    throw err;
                }
            }
        };
        Parser.prototype.parseStringPromise = function(str) {
            return new Promise(function(_this) {
                return function(resolve, reject) {
                    return _this.parseString(str, function(err, value) {
                        if (err) {
                            return reject(err);
                        } else {
                            return resolve(value);
                        }
                    });
                };
            }(this));
        };
        return Parser;
    }(events);
    exports.parseString = function(str, a, b) {
        var cb, options, parser;
        if (b != null) {
            if (typeof b === 'function') {
                cb = b;
            }
            if (typeof a === 'object') {
                options = a;
            }
        } else {
            if (typeof a === 'function') {
                cb = a;
            }
            options = {};
        }
        parser = new exports.Parser(options);
        return parser.parseString(str, cb);
    };
    exports.parseStringPromise = function(str, a) {
        var options, parser;
        if (typeof a === 'object') {
            options = a;
        }
        parser = new exports.Parser(options);
        return parser.parseStringPromise(str);
    };
}).call(/*TURBOPACK member replacement*/ __turbopack_context__.e);
}),
"[project]/learn-next/final/node_modules/xml2js/lib/xml2js.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {

// Generated by CoffeeScript 1.12.7
(function() {
    "use strict";
    var builder, defaults, parser, processors, extend = function(child, parent) {
        for(var key in parent){
            if (hasProp.call(parent, key)) child[key] = parent[key];
        }
        function ctor() {
            this.constructor = child;
        }
        ctor.prototype = parent.prototype;
        child.prototype = new ctor();
        child.__super__ = parent.prototype;
        return child;
    }, hasProp = {}.hasOwnProperty;
    defaults = __turbopack_context__.r("[project]/learn-next/final/node_modules/xml2js/lib/defaults.js [app-rsc] (ecmascript)");
    builder = __turbopack_context__.r("[project]/learn-next/final/node_modules/xml2js/lib/builder.js [app-rsc] (ecmascript)");
    parser = __turbopack_context__.r("[project]/learn-next/final/node_modules/xml2js/lib/parser.js [app-rsc] (ecmascript)");
    processors = __turbopack_context__.r("[project]/learn-next/final/node_modules/xml2js/lib/processors.js [app-rsc] (ecmascript)");
    exports.defaults = defaults.defaults;
    exports.processors = processors;
    exports.ValidationError = function(superClass) {
        extend(ValidationError, superClass);
        function ValidationError(message) {
            this.message = message;
        }
        return ValidationError;
    }(Error);
    exports.Builder = builder.Builder;
    exports.Parser = parser.Parser;
    exports.parseString = parser.parseString;
    exports.parseStringPromise = parser.parseStringPromise;
}).call(/*TURBOPACK member replacement*/ __turbopack_context__.e);
}),
"[project]/learn-next/final/node_modules/rss-parser/lib/fields.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {

const fields = module.exports = {};
fields.feed = [
    [
        'author',
        'creator'
    ],
    [
        'dc:publisher',
        'publisher'
    ],
    [
        'dc:creator',
        'creator'
    ],
    [
        'dc:source',
        'source'
    ],
    [
        'dc:title',
        'title'
    ],
    [
        'dc:type',
        'type'
    ],
    'title',
    'description',
    'author',
    'pubDate',
    'webMaster',
    'managingEditor',
    'generator',
    'link',
    'language',
    'copyright',
    'lastBuildDate',
    'docs',
    'generator',
    'ttl',
    'rating',
    'skipHours',
    'skipDays'
];
fields.item = [
    [
        'author',
        'creator'
    ],
    [
        'dc:creator',
        'creator'
    ],
    [
        'dc:date',
        'date'
    ],
    [
        'dc:language',
        'language'
    ],
    [
        'dc:rights',
        'rights'
    ],
    [
        'dc:source',
        'source'
    ],
    [
        'dc:title',
        'title'
    ],
    'title',
    'link',
    'pubDate',
    'author',
    'summary',
    [
        'content:encoded',
        'content:encoded',
        {
            includeSnippet: true
        }
    ],
    'enclosure',
    'dc:creator',
    'dc:date',
    'comments'
];
var mapItunesField = function(f) {
    return [
        'itunes:' + f,
        f
    ];
};
fields.podcastFeed = [
    'author',
    'subtitle',
    'summary',
    'explicit'
].map(mapItunesField);
fields.podcastItem = [
    'author',
    'subtitle',
    'summary',
    'explicit',
    'duration',
    'image',
    'episode',
    'image',
    'season',
    'keywords',
    'episodeType'
].map(mapItunesField);
}),
"[project]/learn-next/final/node_modules/entities/lib/maps/xml.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v({"amp":"&","apos":"'","gt":">","lt":"<","quot":"\""});}),
"[project]/learn-next/final/node_modules/entities/lib/maps/entities.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v(JSON.parse("{\"Aacute\":\"Á\",\"aacute\":\"á\",\"Abreve\":\"Ă\",\"abreve\":\"ă\",\"ac\":\"∾\",\"acd\":\"∿\",\"acE\":\"∾̳\",\"Acirc\":\"Â\",\"acirc\":\"â\",\"acute\":\"´\",\"Acy\":\"А\",\"acy\":\"а\",\"AElig\":\"Æ\",\"aelig\":\"æ\",\"af\":\"⁡\",\"Afr\":\"𝔄\",\"afr\":\"𝔞\",\"Agrave\":\"À\",\"agrave\":\"à\",\"alefsym\":\"ℵ\",\"aleph\":\"ℵ\",\"Alpha\":\"Α\",\"alpha\":\"α\",\"Amacr\":\"Ā\",\"amacr\":\"ā\",\"amalg\":\"⨿\",\"amp\":\"&\",\"AMP\":\"&\",\"andand\":\"⩕\",\"And\":\"⩓\",\"and\":\"∧\",\"andd\":\"⩜\",\"andslope\":\"⩘\",\"andv\":\"⩚\",\"ang\":\"∠\",\"ange\":\"⦤\",\"angle\":\"∠\",\"angmsdaa\":\"⦨\",\"angmsdab\":\"⦩\",\"angmsdac\":\"⦪\",\"angmsdad\":\"⦫\",\"angmsdae\":\"⦬\",\"angmsdaf\":\"⦭\",\"angmsdag\":\"⦮\",\"angmsdah\":\"⦯\",\"angmsd\":\"∡\",\"angrt\":\"∟\",\"angrtvb\":\"⊾\",\"angrtvbd\":\"⦝\",\"angsph\":\"∢\",\"angst\":\"Å\",\"angzarr\":\"⍼\",\"Aogon\":\"Ą\",\"aogon\":\"ą\",\"Aopf\":\"𝔸\",\"aopf\":\"𝕒\",\"apacir\":\"⩯\",\"ap\":\"≈\",\"apE\":\"⩰\",\"ape\":\"≊\",\"apid\":\"≋\",\"apos\":\"'\",\"ApplyFunction\":\"⁡\",\"approx\":\"≈\",\"approxeq\":\"≊\",\"Aring\":\"Å\",\"aring\":\"å\",\"Ascr\":\"𝒜\",\"ascr\":\"𝒶\",\"Assign\":\"≔\",\"ast\":\"*\",\"asymp\":\"≈\",\"asympeq\":\"≍\",\"Atilde\":\"Ã\",\"atilde\":\"ã\",\"Auml\":\"Ä\",\"auml\":\"ä\",\"awconint\":\"∳\",\"awint\":\"⨑\",\"backcong\":\"≌\",\"backepsilon\":\"϶\",\"backprime\":\"‵\",\"backsim\":\"∽\",\"backsimeq\":\"⋍\",\"Backslash\":\"∖\",\"Barv\":\"⫧\",\"barvee\":\"⊽\",\"barwed\":\"⌅\",\"Barwed\":\"⌆\",\"barwedge\":\"⌅\",\"bbrk\":\"⎵\",\"bbrktbrk\":\"⎶\",\"bcong\":\"≌\",\"Bcy\":\"Б\",\"bcy\":\"б\",\"bdquo\":\"„\",\"becaus\":\"∵\",\"because\":\"∵\",\"Because\":\"∵\",\"bemptyv\":\"⦰\",\"bepsi\":\"϶\",\"bernou\":\"ℬ\",\"Bernoullis\":\"ℬ\",\"Beta\":\"Β\",\"beta\":\"β\",\"beth\":\"ℶ\",\"between\":\"≬\",\"Bfr\":\"𝔅\",\"bfr\":\"𝔟\",\"bigcap\":\"⋂\",\"bigcirc\":\"◯\",\"bigcup\":\"⋃\",\"bigodot\":\"⨀\",\"bigoplus\":\"⨁\",\"bigotimes\":\"⨂\",\"bigsqcup\":\"⨆\",\"bigstar\":\"★\",\"bigtriangledown\":\"▽\",\"bigtriangleup\":\"△\",\"biguplus\":\"⨄\",\"bigvee\":\"⋁\",\"bigwedge\":\"⋀\",\"bkarow\":\"⤍\",\"blacklozenge\":\"⧫\",\"blacksquare\":\"▪\",\"blacktriangle\":\"▴\",\"blacktriangledown\":\"▾\",\"blacktriangleleft\":\"◂\",\"blacktriangleright\":\"▸\",\"blank\":\"␣\",\"blk12\":\"▒\",\"blk14\":\"░\",\"blk34\":\"▓\",\"block\":\"█\",\"bne\":\"=⃥\",\"bnequiv\":\"≡⃥\",\"bNot\":\"⫭\",\"bnot\":\"⌐\",\"Bopf\":\"𝔹\",\"bopf\":\"𝕓\",\"bot\":\"⊥\",\"bottom\":\"⊥\",\"bowtie\":\"⋈\",\"boxbox\":\"⧉\",\"boxdl\":\"┐\",\"boxdL\":\"╕\",\"boxDl\":\"╖\",\"boxDL\":\"╗\",\"boxdr\":\"┌\",\"boxdR\":\"╒\",\"boxDr\":\"╓\",\"boxDR\":\"╔\",\"boxh\":\"─\",\"boxH\":\"═\",\"boxhd\":\"┬\",\"boxHd\":\"╤\",\"boxhD\":\"╥\",\"boxHD\":\"╦\",\"boxhu\":\"┴\",\"boxHu\":\"╧\",\"boxhU\":\"╨\",\"boxHU\":\"╩\",\"boxminus\":\"⊟\",\"boxplus\":\"⊞\",\"boxtimes\":\"⊠\",\"boxul\":\"┘\",\"boxuL\":\"╛\",\"boxUl\":\"╜\",\"boxUL\":\"╝\",\"boxur\":\"└\",\"boxuR\":\"╘\",\"boxUr\":\"╙\",\"boxUR\":\"╚\",\"boxv\":\"│\",\"boxV\":\"║\",\"boxvh\":\"┼\",\"boxvH\":\"╪\",\"boxVh\":\"╫\",\"boxVH\":\"╬\",\"boxvl\":\"┤\",\"boxvL\":\"╡\",\"boxVl\":\"╢\",\"boxVL\":\"╣\",\"boxvr\":\"├\",\"boxvR\":\"╞\",\"boxVr\":\"╟\",\"boxVR\":\"╠\",\"bprime\":\"‵\",\"breve\":\"˘\",\"Breve\":\"˘\",\"brvbar\":\"¦\",\"bscr\":\"𝒷\",\"Bscr\":\"ℬ\",\"bsemi\":\"⁏\",\"bsim\":\"∽\",\"bsime\":\"⋍\",\"bsolb\":\"⧅\",\"bsol\":\"\\\\\",\"bsolhsub\":\"⟈\",\"bull\":\"•\",\"bullet\":\"•\",\"bump\":\"≎\",\"bumpE\":\"⪮\",\"bumpe\":\"≏\",\"Bumpeq\":\"≎\",\"bumpeq\":\"≏\",\"Cacute\":\"Ć\",\"cacute\":\"ć\",\"capand\":\"⩄\",\"capbrcup\":\"⩉\",\"capcap\":\"⩋\",\"cap\":\"∩\",\"Cap\":\"⋒\",\"capcup\":\"⩇\",\"capdot\":\"⩀\",\"CapitalDifferentialD\":\"ⅅ\",\"caps\":\"∩︀\",\"caret\":\"⁁\",\"caron\":\"ˇ\",\"Cayleys\":\"ℭ\",\"ccaps\":\"⩍\",\"Ccaron\":\"Č\",\"ccaron\":\"č\",\"Ccedil\":\"Ç\",\"ccedil\":\"ç\",\"Ccirc\":\"Ĉ\",\"ccirc\":\"ĉ\",\"Cconint\":\"∰\",\"ccups\":\"⩌\",\"ccupssm\":\"⩐\",\"Cdot\":\"Ċ\",\"cdot\":\"ċ\",\"cedil\":\"¸\",\"Cedilla\":\"¸\",\"cemptyv\":\"⦲\",\"cent\":\"¢\",\"centerdot\":\"·\",\"CenterDot\":\"·\",\"cfr\":\"𝔠\",\"Cfr\":\"ℭ\",\"CHcy\":\"Ч\",\"chcy\":\"ч\",\"check\":\"✓\",\"checkmark\":\"✓\",\"Chi\":\"Χ\",\"chi\":\"χ\",\"circ\":\"ˆ\",\"circeq\":\"≗\",\"circlearrowleft\":\"↺\",\"circlearrowright\":\"↻\",\"circledast\":\"⊛\",\"circledcirc\":\"⊚\",\"circleddash\":\"⊝\",\"CircleDot\":\"⊙\",\"circledR\":\"®\",\"circledS\":\"Ⓢ\",\"CircleMinus\":\"⊖\",\"CirclePlus\":\"⊕\",\"CircleTimes\":\"⊗\",\"cir\":\"○\",\"cirE\":\"⧃\",\"cire\":\"≗\",\"cirfnint\":\"⨐\",\"cirmid\":\"⫯\",\"cirscir\":\"⧂\",\"ClockwiseContourIntegral\":\"∲\",\"CloseCurlyDoubleQuote\":\"”\",\"CloseCurlyQuote\":\"’\",\"clubs\":\"♣\",\"clubsuit\":\"♣\",\"colon\":\":\",\"Colon\":\"∷\",\"Colone\":\"⩴\",\"colone\":\"≔\",\"coloneq\":\"≔\",\"comma\":\",\",\"commat\":\"@\",\"comp\":\"∁\",\"compfn\":\"∘\",\"complement\":\"∁\",\"complexes\":\"ℂ\",\"cong\":\"≅\",\"congdot\":\"⩭\",\"Congruent\":\"≡\",\"conint\":\"∮\",\"Conint\":\"∯\",\"ContourIntegral\":\"∮\",\"copf\":\"𝕔\",\"Copf\":\"ℂ\",\"coprod\":\"∐\",\"Coproduct\":\"∐\",\"copy\":\"©\",\"COPY\":\"©\",\"copysr\":\"℗\",\"CounterClockwiseContourIntegral\":\"∳\",\"crarr\":\"↵\",\"cross\":\"✗\",\"Cross\":\"⨯\",\"Cscr\":\"𝒞\",\"cscr\":\"𝒸\",\"csub\":\"⫏\",\"csube\":\"⫑\",\"csup\":\"⫐\",\"csupe\":\"⫒\",\"ctdot\":\"⋯\",\"cudarrl\":\"⤸\",\"cudarrr\":\"⤵\",\"cuepr\":\"⋞\",\"cuesc\":\"⋟\",\"cularr\":\"↶\",\"cularrp\":\"⤽\",\"cupbrcap\":\"⩈\",\"cupcap\":\"⩆\",\"CupCap\":\"≍\",\"cup\":\"∪\",\"Cup\":\"⋓\",\"cupcup\":\"⩊\",\"cupdot\":\"⊍\",\"cupor\":\"⩅\",\"cups\":\"∪︀\",\"curarr\":\"↷\",\"curarrm\":\"⤼\",\"curlyeqprec\":\"⋞\",\"curlyeqsucc\":\"⋟\",\"curlyvee\":\"⋎\",\"curlywedge\":\"⋏\",\"curren\":\"¤\",\"curvearrowleft\":\"↶\",\"curvearrowright\":\"↷\",\"cuvee\":\"⋎\",\"cuwed\":\"⋏\",\"cwconint\":\"∲\",\"cwint\":\"∱\",\"cylcty\":\"⌭\",\"dagger\":\"†\",\"Dagger\":\"‡\",\"daleth\":\"ℸ\",\"darr\":\"↓\",\"Darr\":\"↡\",\"dArr\":\"⇓\",\"dash\":\"‐\",\"Dashv\":\"⫤\",\"dashv\":\"⊣\",\"dbkarow\":\"⤏\",\"dblac\":\"˝\",\"Dcaron\":\"Ď\",\"dcaron\":\"ď\",\"Dcy\":\"Д\",\"dcy\":\"д\",\"ddagger\":\"‡\",\"ddarr\":\"⇊\",\"DD\":\"ⅅ\",\"dd\":\"ⅆ\",\"DDotrahd\":\"⤑\",\"ddotseq\":\"⩷\",\"deg\":\"°\",\"Del\":\"∇\",\"Delta\":\"Δ\",\"delta\":\"δ\",\"demptyv\":\"⦱\",\"dfisht\":\"⥿\",\"Dfr\":\"𝔇\",\"dfr\":\"𝔡\",\"dHar\":\"⥥\",\"dharl\":\"⇃\",\"dharr\":\"⇂\",\"DiacriticalAcute\":\"´\",\"DiacriticalDot\":\"˙\",\"DiacriticalDoubleAcute\":\"˝\",\"DiacriticalGrave\":\"`\",\"DiacriticalTilde\":\"˜\",\"diam\":\"⋄\",\"diamond\":\"⋄\",\"Diamond\":\"⋄\",\"diamondsuit\":\"♦\",\"diams\":\"♦\",\"die\":\"¨\",\"DifferentialD\":\"ⅆ\",\"digamma\":\"ϝ\",\"disin\":\"⋲\",\"div\":\"÷\",\"divide\":\"÷\",\"divideontimes\":\"⋇\",\"divonx\":\"⋇\",\"DJcy\":\"Ђ\",\"djcy\":\"ђ\",\"dlcorn\":\"⌞\",\"dlcrop\":\"⌍\",\"dollar\":\"$\",\"Dopf\":\"𝔻\",\"dopf\":\"𝕕\",\"Dot\":\"¨\",\"dot\":\"˙\",\"DotDot\":\"⃜\",\"doteq\":\"≐\",\"doteqdot\":\"≑\",\"DotEqual\":\"≐\",\"dotminus\":\"∸\",\"dotplus\":\"∔\",\"dotsquare\":\"⊡\",\"doublebarwedge\":\"⌆\",\"DoubleContourIntegral\":\"∯\",\"DoubleDot\":\"¨\",\"DoubleDownArrow\":\"⇓\",\"DoubleLeftArrow\":\"⇐\",\"DoubleLeftRightArrow\":\"⇔\",\"DoubleLeftTee\":\"⫤\",\"DoubleLongLeftArrow\":\"⟸\",\"DoubleLongLeftRightArrow\":\"⟺\",\"DoubleLongRightArrow\":\"⟹\",\"DoubleRightArrow\":\"⇒\",\"DoubleRightTee\":\"⊨\",\"DoubleUpArrow\":\"⇑\",\"DoubleUpDownArrow\":\"⇕\",\"DoubleVerticalBar\":\"∥\",\"DownArrowBar\":\"⤓\",\"downarrow\":\"↓\",\"DownArrow\":\"↓\",\"Downarrow\":\"⇓\",\"DownArrowUpArrow\":\"⇵\",\"DownBreve\":\"̑\",\"downdownarrows\":\"⇊\",\"downharpoonleft\":\"⇃\",\"downharpoonright\":\"⇂\",\"DownLeftRightVector\":\"⥐\",\"DownLeftTeeVector\":\"⥞\",\"DownLeftVectorBar\":\"⥖\",\"DownLeftVector\":\"↽\",\"DownRightTeeVector\":\"⥟\",\"DownRightVectorBar\":\"⥗\",\"DownRightVector\":\"⇁\",\"DownTeeArrow\":\"↧\",\"DownTee\":\"⊤\",\"drbkarow\":\"⤐\",\"drcorn\":\"⌟\",\"drcrop\":\"⌌\",\"Dscr\":\"𝒟\",\"dscr\":\"𝒹\",\"DScy\":\"Ѕ\",\"dscy\":\"ѕ\",\"dsol\":\"⧶\",\"Dstrok\":\"Đ\",\"dstrok\":\"đ\",\"dtdot\":\"⋱\",\"dtri\":\"▿\",\"dtrif\":\"▾\",\"duarr\":\"⇵\",\"duhar\":\"⥯\",\"dwangle\":\"⦦\",\"DZcy\":\"Џ\",\"dzcy\":\"џ\",\"dzigrarr\":\"⟿\",\"Eacute\":\"É\",\"eacute\":\"é\",\"easter\":\"⩮\",\"Ecaron\":\"Ě\",\"ecaron\":\"ě\",\"Ecirc\":\"Ê\",\"ecirc\":\"ê\",\"ecir\":\"≖\",\"ecolon\":\"≕\",\"Ecy\":\"Э\",\"ecy\":\"э\",\"eDDot\":\"⩷\",\"Edot\":\"Ė\",\"edot\":\"ė\",\"eDot\":\"≑\",\"ee\":\"ⅇ\",\"efDot\":\"≒\",\"Efr\":\"𝔈\",\"efr\":\"𝔢\",\"eg\":\"⪚\",\"Egrave\":\"È\",\"egrave\":\"è\",\"egs\":\"⪖\",\"egsdot\":\"⪘\",\"el\":\"⪙\",\"Element\":\"∈\",\"elinters\":\"⏧\",\"ell\":\"ℓ\",\"els\":\"⪕\",\"elsdot\":\"⪗\",\"Emacr\":\"Ē\",\"emacr\":\"ē\",\"empty\":\"∅\",\"emptyset\":\"∅\",\"EmptySmallSquare\":\"◻\",\"emptyv\":\"∅\",\"EmptyVerySmallSquare\":\"▫\",\"emsp13\":\" \",\"emsp14\":\" \",\"emsp\":\" \",\"ENG\":\"Ŋ\",\"eng\":\"ŋ\",\"ensp\":\" \",\"Eogon\":\"Ę\",\"eogon\":\"ę\",\"Eopf\":\"𝔼\",\"eopf\":\"𝕖\",\"epar\":\"⋕\",\"eparsl\":\"⧣\",\"eplus\":\"⩱\",\"epsi\":\"ε\",\"Epsilon\":\"Ε\",\"epsilon\":\"ε\",\"epsiv\":\"ϵ\",\"eqcirc\":\"≖\",\"eqcolon\":\"≕\",\"eqsim\":\"≂\",\"eqslantgtr\":\"⪖\",\"eqslantless\":\"⪕\",\"Equal\":\"⩵\",\"equals\":\"=\",\"EqualTilde\":\"≂\",\"equest\":\"≟\",\"Equilibrium\":\"⇌\",\"equiv\":\"≡\",\"equivDD\":\"⩸\",\"eqvparsl\":\"⧥\",\"erarr\":\"⥱\",\"erDot\":\"≓\",\"escr\":\"ℯ\",\"Escr\":\"ℰ\",\"esdot\":\"≐\",\"Esim\":\"⩳\",\"esim\":\"≂\",\"Eta\":\"Η\",\"eta\":\"η\",\"ETH\":\"Ð\",\"eth\":\"ð\",\"Euml\":\"Ë\",\"euml\":\"ë\",\"euro\":\"€\",\"excl\":\"!\",\"exist\":\"∃\",\"Exists\":\"∃\",\"expectation\":\"ℰ\",\"exponentiale\":\"ⅇ\",\"ExponentialE\":\"ⅇ\",\"fallingdotseq\":\"≒\",\"Fcy\":\"Ф\",\"fcy\":\"ф\",\"female\":\"♀\",\"ffilig\":\"ﬃ\",\"fflig\":\"ﬀ\",\"ffllig\":\"ﬄ\",\"Ffr\":\"𝔉\",\"ffr\":\"𝔣\",\"filig\":\"ﬁ\",\"FilledSmallSquare\":\"◼\",\"FilledVerySmallSquare\":\"▪\",\"fjlig\":\"fj\",\"flat\":\"♭\",\"fllig\":\"ﬂ\",\"fltns\":\"▱\",\"fnof\":\"ƒ\",\"Fopf\":\"𝔽\",\"fopf\":\"𝕗\",\"forall\":\"∀\",\"ForAll\":\"∀\",\"fork\":\"⋔\",\"forkv\":\"⫙\",\"Fouriertrf\":\"ℱ\",\"fpartint\":\"⨍\",\"frac12\":\"½\",\"frac13\":\"⅓\",\"frac14\":\"¼\",\"frac15\":\"⅕\",\"frac16\":\"⅙\",\"frac18\":\"⅛\",\"frac23\":\"⅔\",\"frac25\":\"⅖\",\"frac34\":\"¾\",\"frac35\":\"⅗\",\"frac38\":\"⅜\",\"frac45\":\"⅘\",\"frac56\":\"⅚\",\"frac58\":\"⅝\",\"frac78\":\"⅞\",\"frasl\":\"⁄\",\"frown\":\"⌢\",\"fscr\":\"𝒻\",\"Fscr\":\"ℱ\",\"gacute\":\"ǵ\",\"Gamma\":\"Γ\",\"gamma\":\"γ\",\"Gammad\":\"Ϝ\",\"gammad\":\"ϝ\",\"gap\":\"⪆\",\"Gbreve\":\"Ğ\",\"gbreve\":\"ğ\",\"Gcedil\":\"Ģ\",\"Gcirc\":\"Ĝ\",\"gcirc\":\"ĝ\",\"Gcy\":\"Г\",\"gcy\":\"г\",\"Gdot\":\"Ġ\",\"gdot\":\"ġ\",\"ge\":\"≥\",\"gE\":\"≧\",\"gEl\":\"⪌\",\"gel\":\"⋛\",\"geq\":\"≥\",\"geqq\":\"≧\",\"geqslant\":\"⩾\",\"gescc\":\"⪩\",\"ges\":\"⩾\",\"gesdot\":\"⪀\",\"gesdoto\":\"⪂\",\"gesdotol\":\"⪄\",\"gesl\":\"⋛︀\",\"gesles\":\"⪔\",\"Gfr\":\"𝔊\",\"gfr\":\"𝔤\",\"gg\":\"≫\",\"Gg\":\"⋙\",\"ggg\":\"⋙\",\"gimel\":\"ℷ\",\"GJcy\":\"Ѓ\",\"gjcy\":\"ѓ\",\"gla\":\"⪥\",\"gl\":\"≷\",\"glE\":\"⪒\",\"glj\":\"⪤\",\"gnap\":\"⪊\",\"gnapprox\":\"⪊\",\"gne\":\"⪈\",\"gnE\":\"≩\",\"gneq\":\"⪈\",\"gneqq\":\"≩\",\"gnsim\":\"⋧\",\"Gopf\":\"𝔾\",\"gopf\":\"𝕘\",\"grave\":\"`\",\"GreaterEqual\":\"≥\",\"GreaterEqualLess\":\"⋛\",\"GreaterFullEqual\":\"≧\",\"GreaterGreater\":\"⪢\",\"GreaterLess\":\"≷\",\"GreaterSlantEqual\":\"⩾\",\"GreaterTilde\":\"≳\",\"Gscr\":\"𝒢\",\"gscr\":\"ℊ\",\"gsim\":\"≳\",\"gsime\":\"⪎\",\"gsiml\":\"⪐\",\"gtcc\":\"⪧\",\"gtcir\":\"⩺\",\"gt\":\">\",\"GT\":\">\",\"Gt\":\"≫\",\"gtdot\":\"⋗\",\"gtlPar\":\"⦕\",\"gtquest\":\"⩼\",\"gtrapprox\":\"⪆\",\"gtrarr\":\"⥸\",\"gtrdot\":\"⋗\",\"gtreqless\":\"⋛\",\"gtreqqless\":\"⪌\",\"gtrless\":\"≷\",\"gtrsim\":\"≳\",\"gvertneqq\":\"≩︀\",\"gvnE\":\"≩︀\",\"Hacek\":\"ˇ\",\"hairsp\":\" \",\"half\":\"½\",\"hamilt\":\"ℋ\",\"HARDcy\":\"Ъ\",\"hardcy\":\"ъ\",\"harrcir\":\"⥈\",\"harr\":\"↔\",\"hArr\":\"⇔\",\"harrw\":\"↭\",\"Hat\":\"^\",\"hbar\":\"ℏ\",\"Hcirc\":\"Ĥ\",\"hcirc\":\"ĥ\",\"hearts\":\"♥\",\"heartsuit\":\"♥\",\"hellip\":\"…\",\"hercon\":\"⊹\",\"hfr\":\"𝔥\",\"Hfr\":\"ℌ\",\"HilbertSpace\":\"ℋ\",\"hksearow\":\"⤥\",\"hkswarow\":\"⤦\",\"hoarr\":\"⇿\",\"homtht\":\"∻\",\"hookleftarrow\":\"↩\",\"hookrightarrow\":\"↪\",\"hopf\":\"𝕙\",\"Hopf\":\"ℍ\",\"horbar\":\"―\",\"HorizontalLine\":\"─\",\"hscr\":\"𝒽\",\"Hscr\":\"ℋ\",\"hslash\":\"ℏ\",\"Hstrok\":\"Ħ\",\"hstrok\":\"ħ\",\"HumpDownHump\":\"≎\",\"HumpEqual\":\"≏\",\"hybull\":\"⁃\",\"hyphen\":\"‐\",\"Iacute\":\"Í\",\"iacute\":\"í\",\"ic\":\"⁣\",\"Icirc\":\"Î\",\"icirc\":\"î\",\"Icy\":\"И\",\"icy\":\"и\",\"Idot\":\"İ\",\"IEcy\":\"Е\",\"iecy\":\"е\",\"iexcl\":\"¡\",\"iff\":\"⇔\",\"ifr\":\"𝔦\",\"Ifr\":\"ℑ\",\"Igrave\":\"Ì\",\"igrave\":\"ì\",\"ii\":\"ⅈ\",\"iiiint\":\"⨌\",\"iiint\":\"∭\",\"iinfin\":\"⧜\",\"iiota\":\"℩\",\"IJlig\":\"Ĳ\",\"ijlig\":\"ĳ\",\"Imacr\":\"Ī\",\"imacr\":\"ī\",\"image\":\"ℑ\",\"ImaginaryI\":\"ⅈ\",\"imagline\":\"ℐ\",\"imagpart\":\"ℑ\",\"imath\":\"ı\",\"Im\":\"ℑ\",\"imof\":\"⊷\",\"imped\":\"Ƶ\",\"Implies\":\"⇒\",\"incare\":\"℅\",\"in\":\"∈\",\"infin\":\"∞\",\"infintie\":\"⧝\",\"inodot\":\"ı\",\"intcal\":\"⊺\",\"int\":\"∫\",\"Int\":\"∬\",\"integers\":\"ℤ\",\"Integral\":\"∫\",\"intercal\":\"⊺\",\"Intersection\":\"⋂\",\"intlarhk\":\"⨗\",\"intprod\":\"⨼\",\"InvisibleComma\":\"⁣\",\"InvisibleTimes\":\"⁢\",\"IOcy\":\"Ё\",\"iocy\":\"ё\",\"Iogon\":\"Į\",\"iogon\":\"į\",\"Iopf\":\"𝕀\",\"iopf\":\"𝕚\",\"Iota\":\"Ι\",\"iota\":\"ι\",\"iprod\":\"⨼\",\"iquest\":\"¿\",\"iscr\":\"𝒾\",\"Iscr\":\"ℐ\",\"isin\":\"∈\",\"isindot\":\"⋵\",\"isinE\":\"⋹\",\"isins\":\"⋴\",\"isinsv\":\"⋳\",\"isinv\":\"∈\",\"it\":\"⁢\",\"Itilde\":\"Ĩ\",\"itilde\":\"ĩ\",\"Iukcy\":\"І\",\"iukcy\":\"і\",\"Iuml\":\"Ï\",\"iuml\":\"ï\",\"Jcirc\":\"Ĵ\",\"jcirc\":\"ĵ\",\"Jcy\":\"Й\",\"jcy\":\"й\",\"Jfr\":\"𝔍\",\"jfr\":\"𝔧\",\"jmath\":\"ȷ\",\"Jopf\":\"𝕁\",\"jopf\":\"𝕛\",\"Jscr\":\"𝒥\",\"jscr\":\"𝒿\",\"Jsercy\":\"Ј\",\"jsercy\":\"ј\",\"Jukcy\":\"Є\",\"jukcy\":\"є\",\"Kappa\":\"Κ\",\"kappa\":\"κ\",\"kappav\":\"ϰ\",\"Kcedil\":\"Ķ\",\"kcedil\":\"ķ\",\"Kcy\":\"К\",\"kcy\":\"к\",\"Kfr\":\"𝔎\",\"kfr\":\"𝔨\",\"kgreen\":\"ĸ\",\"KHcy\":\"Х\",\"khcy\":\"х\",\"KJcy\":\"Ќ\",\"kjcy\":\"ќ\",\"Kopf\":\"𝕂\",\"kopf\":\"𝕜\",\"Kscr\":\"𝒦\",\"kscr\":\"𝓀\",\"lAarr\":\"⇚\",\"Lacute\":\"Ĺ\",\"lacute\":\"ĺ\",\"laemptyv\":\"⦴\",\"lagran\":\"ℒ\",\"Lambda\":\"Λ\",\"lambda\":\"λ\",\"lang\":\"⟨\",\"Lang\":\"⟪\",\"langd\":\"⦑\",\"langle\":\"⟨\",\"lap\":\"⪅\",\"Laplacetrf\":\"ℒ\",\"laquo\":\"«\",\"larrb\":\"⇤\",\"larrbfs\":\"⤟\",\"larr\":\"←\",\"Larr\":\"↞\",\"lArr\":\"⇐\",\"larrfs\":\"⤝\",\"larrhk\":\"↩\",\"larrlp\":\"↫\",\"larrpl\":\"⤹\",\"larrsim\":\"⥳\",\"larrtl\":\"↢\",\"latail\":\"⤙\",\"lAtail\":\"⤛\",\"lat\":\"⪫\",\"late\":\"⪭\",\"lates\":\"⪭︀\",\"lbarr\":\"⤌\",\"lBarr\":\"⤎\",\"lbbrk\":\"❲\",\"lbrace\":\"{\",\"lbrack\":\"[\",\"lbrke\":\"⦋\",\"lbrksld\":\"⦏\",\"lbrkslu\":\"⦍\",\"Lcaron\":\"Ľ\",\"lcaron\":\"ľ\",\"Lcedil\":\"Ļ\",\"lcedil\":\"ļ\",\"lceil\":\"⌈\",\"lcub\":\"{\",\"Lcy\":\"Л\",\"lcy\":\"л\",\"ldca\":\"⤶\",\"ldquo\":\"“\",\"ldquor\":\"„\",\"ldrdhar\":\"⥧\",\"ldrushar\":\"⥋\",\"ldsh\":\"↲\",\"le\":\"≤\",\"lE\":\"≦\",\"LeftAngleBracket\":\"⟨\",\"LeftArrowBar\":\"⇤\",\"leftarrow\":\"←\",\"LeftArrow\":\"←\",\"Leftarrow\":\"⇐\",\"LeftArrowRightArrow\":\"⇆\",\"leftarrowtail\":\"↢\",\"LeftCeiling\":\"⌈\",\"LeftDoubleBracket\":\"⟦\",\"LeftDownTeeVector\":\"⥡\",\"LeftDownVectorBar\":\"⥙\",\"LeftDownVector\":\"⇃\",\"LeftFloor\":\"⌊\",\"leftharpoondown\":\"↽\",\"leftharpoonup\":\"↼\",\"leftleftarrows\":\"⇇\",\"leftrightarrow\":\"↔\",\"LeftRightArrow\":\"↔\",\"Leftrightarrow\":\"⇔\",\"leftrightarrows\":\"⇆\",\"leftrightharpoons\":\"⇋\",\"leftrightsquigarrow\":\"↭\",\"LeftRightVector\":\"⥎\",\"LeftTeeArrow\":\"↤\",\"LeftTee\":\"⊣\",\"LeftTeeVector\":\"⥚\",\"leftthreetimes\":\"⋋\",\"LeftTriangleBar\":\"⧏\",\"LeftTriangle\":\"⊲\",\"LeftTriangleEqual\":\"⊴\",\"LeftUpDownVector\":\"⥑\",\"LeftUpTeeVector\":\"⥠\",\"LeftUpVectorBar\":\"⥘\",\"LeftUpVector\":\"↿\",\"LeftVectorBar\":\"⥒\",\"LeftVector\":\"↼\",\"lEg\":\"⪋\",\"leg\":\"⋚\",\"leq\":\"≤\",\"leqq\":\"≦\",\"leqslant\":\"⩽\",\"lescc\":\"⪨\",\"les\":\"⩽\",\"lesdot\":\"⩿\",\"lesdoto\":\"⪁\",\"lesdotor\":\"⪃\",\"lesg\":\"⋚︀\",\"lesges\":\"⪓\",\"lessapprox\":\"⪅\",\"lessdot\":\"⋖\",\"lesseqgtr\":\"⋚\",\"lesseqqgtr\":\"⪋\",\"LessEqualGreater\":\"⋚\",\"LessFullEqual\":\"≦\",\"LessGreater\":\"≶\",\"lessgtr\":\"≶\",\"LessLess\":\"⪡\",\"lesssim\":\"≲\",\"LessSlantEqual\":\"⩽\",\"LessTilde\":\"≲\",\"lfisht\":\"⥼\",\"lfloor\":\"⌊\",\"Lfr\":\"𝔏\",\"lfr\":\"𝔩\",\"lg\":\"≶\",\"lgE\":\"⪑\",\"lHar\":\"⥢\",\"lhard\":\"↽\",\"lharu\":\"↼\",\"lharul\":\"⥪\",\"lhblk\":\"▄\",\"LJcy\":\"Љ\",\"ljcy\":\"љ\",\"llarr\":\"⇇\",\"ll\":\"≪\",\"Ll\":\"⋘\",\"llcorner\":\"⌞\",\"Lleftarrow\":\"⇚\",\"llhard\":\"⥫\",\"lltri\":\"◺\",\"Lmidot\":\"Ŀ\",\"lmidot\":\"ŀ\",\"lmoustache\":\"⎰\",\"lmoust\":\"⎰\",\"lnap\":\"⪉\",\"lnapprox\":\"⪉\",\"lne\":\"⪇\",\"lnE\":\"≨\",\"lneq\":\"⪇\",\"lneqq\":\"≨\",\"lnsim\":\"⋦\",\"loang\":\"⟬\",\"loarr\":\"⇽\",\"lobrk\":\"⟦\",\"longleftarrow\":\"⟵\",\"LongLeftArrow\":\"⟵\",\"Longleftarrow\":\"⟸\",\"longleftrightarrow\":\"⟷\",\"LongLeftRightArrow\":\"⟷\",\"Longleftrightarrow\":\"⟺\",\"longmapsto\":\"⟼\",\"longrightarrow\":\"⟶\",\"LongRightArrow\":\"⟶\",\"Longrightarrow\":\"⟹\",\"looparrowleft\":\"↫\",\"looparrowright\":\"↬\",\"lopar\":\"⦅\",\"Lopf\":\"𝕃\",\"lopf\":\"𝕝\",\"loplus\":\"⨭\",\"lotimes\":\"⨴\",\"lowast\":\"∗\",\"lowbar\":\"_\",\"LowerLeftArrow\":\"↙\",\"LowerRightArrow\":\"↘\",\"loz\":\"◊\",\"lozenge\":\"◊\",\"lozf\":\"⧫\",\"lpar\":\"(\",\"lparlt\":\"⦓\",\"lrarr\":\"⇆\",\"lrcorner\":\"⌟\",\"lrhar\":\"⇋\",\"lrhard\":\"⥭\",\"lrm\":\"‎\",\"lrtri\":\"⊿\",\"lsaquo\":\"‹\",\"lscr\":\"𝓁\",\"Lscr\":\"ℒ\",\"lsh\":\"↰\",\"Lsh\":\"↰\",\"lsim\":\"≲\",\"lsime\":\"⪍\",\"lsimg\":\"⪏\",\"lsqb\":\"[\",\"lsquo\":\"‘\",\"lsquor\":\"‚\",\"Lstrok\":\"Ł\",\"lstrok\":\"ł\",\"ltcc\":\"⪦\",\"ltcir\":\"⩹\",\"lt\":\"<\",\"LT\":\"<\",\"Lt\":\"≪\",\"ltdot\":\"⋖\",\"lthree\":\"⋋\",\"ltimes\":\"⋉\",\"ltlarr\":\"⥶\",\"ltquest\":\"⩻\",\"ltri\":\"◃\",\"ltrie\":\"⊴\",\"ltrif\":\"◂\",\"ltrPar\":\"⦖\",\"lurdshar\":\"⥊\",\"luruhar\":\"⥦\",\"lvertneqq\":\"≨︀\",\"lvnE\":\"≨︀\",\"macr\":\"¯\",\"male\":\"♂\",\"malt\":\"✠\",\"maltese\":\"✠\",\"Map\":\"⤅\",\"map\":\"↦\",\"mapsto\":\"↦\",\"mapstodown\":\"↧\",\"mapstoleft\":\"↤\",\"mapstoup\":\"↥\",\"marker\":\"▮\",\"mcomma\":\"⨩\",\"Mcy\":\"М\",\"mcy\":\"м\",\"mdash\":\"—\",\"mDDot\":\"∺\",\"measuredangle\":\"∡\",\"MediumSpace\":\" \",\"Mellintrf\":\"ℳ\",\"Mfr\":\"𝔐\",\"mfr\":\"𝔪\",\"mho\":\"℧\",\"micro\":\"µ\",\"midast\":\"*\",\"midcir\":\"⫰\",\"mid\":\"∣\",\"middot\":\"·\",\"minusb\":\"⊟\",\"minus\":\"−\",\"minusd\":\"∸\",\"minusdu\":\"⨪\",\"MinusPlus\":\"∓\",\"mlcp\":\"⫛\",\"mldr\":\"…\",\"mnplus\":\"∓\",\"models\":\"⊧\",\"Mopf\":\"𝕄\",\"mopf\":\"𝕞\",\"mp\":\"∓\",\"mscr\":\"𝓂\",\"Mscr\":\"ℳ\",\"mstpos\":\"∾\",\"Mu\":\"Μ\",\"mu\":\"μ\",\"multimap\":\"⊸\",\"mumap\":\"⊸\",\"nabla\":\"∇\",\"Nacute\":\"Ń\",\"nacute\":\"ń\",\"nang\":\"∠⃒\",\"nap\":\"≉\",\"napE\":\"⩰̸\",\"napid\":\"≋̸\",\"napos\":\"ŉ\",\"napprox\":\"≉\",\"natural\":\"♮\",\"naturals\":\"ℕ\",\"natur\":\"♮\",\"nbsp\":\" \",\"nbump\":\"≎̸\",\"nbumpe\":\"≏̸\",\"ncap\":\"⩃\",\"Ncaron\":\"Ň\",\"ncaron\":\"ň\",\"Ncedil\":\"Ņ\",\"ncedil\":\"ņ\",\"ncong\":\"≇\",\"ncongdot\":\"⩭̸\",\"ncup\":\"⩂\",\"Ncy\":\"Н\",\"ncy\":\"н\",\"ndash\":\"–\",\"nearhk\":\"⤤\",\"nearr\":\"↗\",\"neArr\":\"⇗\",\"nearrow\":\"↗\",\"ne\":\"≠\",\"nedot\":\"≐̸\",\"NegativeMediumSpace\":\"​\",\"NegativeThickSpace\":\"​\",\"NegativeThinSpace\":\"​\",\"NegativeVeryThinSpace\":\"​\",\"nequiv\":\"≢\",\"nesear\":\"⤨\",\"nesim\":\"≂̸\",\"NestedGreaterGreater\":\"≫\",\"NestedLessLess\":\"≪\",\"NewLine\":\"\\n\",\"nexist\":\"∄\",\"nexists\":\"∄\",\"Nfr\":\"𝔑\",\"nfr\":\"𝔫\",\"ngE\":\"≧̸\",\"nge\":\"≱\",\"ngeq\":\"≱\",\"ngeqq\":\"≧̸\",\"ngeqslant\":\"⩾̸\",\"nges\":\"⩾̸\",\"nGg\":\"⋙̸\",\"ngsim\":\"≵\",\"nGt\":\"≫⃒\",\"ngt\":\"≯\",\"ngtr\":\"≯\",\"nGtv\":\"≫̸\",\"nharr\":\"↮\",\"nhArr\":\"⇎\",\"nhpar\":\"⫲\",\"ni\":\"∋\",\"nis\":\"⋼\",\"nisd\":\"⋺\",\"niv\":\"∋\",\"NJcy\":\"Њ\",\"njcy\":\"њ\",\"nlarr\":\"↚\",\"nlArr\":\"⇍\",\"nldr\":\"‥\",\"nlE\":\"≦̸\",\"nle\":\"≰\",\"nleftarrow\":\"↚\",\"nLeftarrow\":\"⇍\",\"nleftrightarrow\":\"↮\",\"nLeftrightarrow\":\"⇎\",\"nleq\":\"≰\",\"nleqq\":\"≦̸\",\"nleqslant\":\"⩽̸\",\"nles\":\"⩽̸\",\"nless\":\"≮\",\"nLl\":\"⋘̸\",\"nlsim\":\"≴\",\"nLt\":\"≪⃒\",\"nlt\":\"≮\",\"nltri\":\"⋪\",\"nltrie\":\"⋬\",\"nLtv\":\"≪̸\",\"nmid\":\"∤\",\"NoBreak\":\"⁠\",\"NonBreakingSpace\":\" \",\"nopf\":\"𝕟\",\"Nopf\":\"ℕ\",\"Not\":\"⫬\",\"not\":\"¬\",\"NotCongruent\":\"≢\",\"NotCupCap\":\"≭\",\"NotDoubleVerticalBar\":\"∦\",\"NotElement\":\"∉\",\"NotEqual\":\"≠\",\"NotEqualTilde\":\"≂̸\",\"NotExists\":\"∄\",\"NotGreater\":\"≯\",\"NotGreaterEqual\":\"≱\",\"NotGreaterFullEqual\":\"≧̸\",\"NotGreaterGreater\":\"≫̸\",\"NotGreaterLess\":\"≹\",\"NotGreaterSlantEqual\":\"⩾̸\",\"NotGreaterTilde\":\"≵\",\"NotHumpDownHump\":\"≎̸\",\"NotHumpEqual\":\"≏̸\",\"notin\":\"∉\",\"notindot\":\"⋵̸\",\"notinE\":\"⋹̸\",\"notinva\":\"∉\",\"notinvb\":\"⋷\",\"notinvc\":\"⋶\",\"NotLeftTriangleBar\":\"⧏̸\",\"NotLeftTriangle\":\"⋪\",\"NotLeftTriangleEqual\":\"⋬\",\"NotLess\":\"≮\",\"NotLessEqual\":\"≰\",\"NotLessGreater\":\"≸\",\"NotLessLess\":\"≪̸\",\"NotLessSlantEqual\":\"⩽̸\",\"NotLessTilde\":\"≴\",\"NotNestedGreaterGreater\":\"⪢̸\",\"NotNestedLessLess\":\"⪡̸\",\"notni\":\"∌\",\"notniva\":\"∌\",\"notnivb\":\"⋾\",\"notnivc\":\"⋽\",\"NotPrecedes\":\"⊀\",\"NotPrecedesEqual\":\"⪯̸\",\"NotPrecedesSlantEqual\":\"⋠\",\"NotReverseElement\":\"∌\",\"NotRightTriangleBar\":\"⧐̸\",\"NotRightTriangle\":\"⋫\",\"NotRightTriangleEqual\":\"⋭\",\"NotSquareSubset\":\"⊏̸\",\"NotSquareSubsetEqual\":\"⋢\",\"NotSquareSuperset\":\"⊐̸\",\"NotSquareSupersetEqual\":\"⋣\",\"NotSubset\":\"⊂⃒\",\"NotSubsetEqual\":\"⊈\",\"NotSucceeds\":\"⊁\",\"NotSucceedsEqual\":\"⪰̸\",\"NotSucceedsSlantEqual\":\"⋡\",\"NotSucceedsTilde\":\"≿̸\",\"NotSuperset\":\"⊃⃒\",\"NotSupersetEqual\":\"⊉\",\"NotTilde\":\"≁\",\"NotTildeEqual\":\"≄\",\"NotTildeFullEqual\":\"≇\",\"NotTildeTilde\":\"≉\",\"NotVerticalBar\":\"∤\",\"nparallel\":\"∦\",\"npar\":\"∦\",\"nparsl\":\"⫽⃥\",\"npart\":\"∂̸\",\"npolint\":\"⨔\",\"npr\":\"⊀\",\"nprcue\":\"⋠\",\"nprec\":\"⊀\",\"npreceq\":\"⪯̸\",\"npre\":\"⪯̸\",\"nrarrc\":\"⤳̸\",\"nrarr\":\"↛\",\"nrArr\":\"⇏\",\"nrarrw\":\"↝̸\",\"nrightarrow\":\"↛\",\"nRightarrow\":\"⇏\",\"nrtri\":\"⋫\",\"nrtrie\":\"⋭\",\"nsc\":\"⊁\",\"nsccue\":\"⋡\",\"nsce\":\"⪰̸\",\"Nscr\":\"𝒩\",\"nscr\":\"𝓃\",\"nshortmid\":\"∤\",\"nshortparallel\":\"∦\",\"nsim\":\"≁\",\"nsime\":\"≄\",\"nsimeq\":\"≄\",\"nsmid\":\"∤\",\"nspar\":\"∦\",\"nsqsube\":\"⋢\",\"nsqsupe\":\"⋣\",\"nsub\":\"⊄\",\"nsubE\":\"⫅̸\",\"nsube\":\"⊈\",\"nsubset\":\"⊂⃒\",\"nsubseteq\":\"⊈\",\"nsubseteqq\":\"⫅̸\",\"nsucc\":\"⊁\",\"nsucceq\":\"⪰̸\",\"nsup\":\"⊅\",\"nsupE\":\"⫆̸\",\"nsupe\":\"⊉\",\"nsupset\":\"⊃⃒\",\"nsupseteq\":\"⊉\",\"nsupseteqq\":\"⫆̸\",\"ntgl\":\"≹\",\"Ntilde\":\"Ñ\",\"ntilde\":\"ñ\",\"ntlg\":\"≸\",\"ntriangleleft\":\"⋪\",\"ntrianglelefteq\":\"⋬\",\"ntriangleright\":\"⋫\",\"ntrianglerighteq\":\"⋭\",\"Nu\":\"Ν\",\"nu\":\"ν\",\"num\":\"#\",\"numero\":\"№\",\"numsp\":\" \",\"nvap\":\"≍⃒\",\"nvdash\":\"⊬\",\"nvDash\":\"⊭\",\"nVdash\":\"⊮\",\"nVDash\":\"⊯\",\"nvge\":\"≥⃒\",\"nvgt\":\">⃒\",\"nvHarr\":\"⤄\",\"nvinfin\":\"⧞\",\"nvlArr\":\"⤂\",\"nvle\":\"≤⃒\",\"nvlt\":\"<⃒\",\"nvltrie\":\"⊴⃒\",\"nvrArr\":\"⤃\",\"nvrtrie\":\"⊵⃒\",\"nvsim\":\"∼⃒\",\"nwarhk\":\"⤣\",\"nwarr\":\"↖\",\"nwArr\":\"⇖\",\"nwarrow\":\"↖\",\"nwnear\":\"⤧\",\"Oacute\":\"Ó\",\"oacute\":\"ó\",\"oast\":\"⊛\",\"Ocirc\":\"Ô\",\"ocirc\":\"ô\",\"ocir\":\"⊚\",\"Ocy\":\"О\",\"ocy\":\"о\",\"odash\":\"⊝\",\"Odblac\":\"Ő\",\"odblac\":\"ő\",\"odiv\":\"⨸\",\"odot\":\"⊙\",\"odsold\":\"⦼\",\"OElig\":\"Œ\",\"oelig\":\"œ\",\"ofcir\":\"⦿\",\"Ofr\":\"𝔒\",\"ofr\":\"𝔬\",\"ogon\":\"˛\",\"Ograve\":\"Ò\",\"ograve\":\"ò\",\"ogt\":\"⧁\",\"ohbar\":\"⦵\",\"ohm\":\"Ω\",\"oint\":\"∮\",\"olarr\":\"↺\",\"olcir\":\"⦾\",\"olcross\":\"⦻\",\"oline\":\"‾\",\"olt\":\"⧀\",\"Omacr\":\"Ō\",\"omacr\":\"ō\",\"Omega\":\"Ω\",\"omega\":\"ω\",\"Omicron\":\"Ο\",\"omicron\":\"ο\",\"omid\":\"⦶\",\"ominus\":\"⊖\",\"Oopf\":\"𝕆\",\"oopf\":\"𝕠\",\"opar\":\"⦷\",\"OpenCurlyDoubleQuote\":\"“\",\"OpenCurlyQuote\":\"‘\",\"operp\":\"⦹\",\"oplus\":\"⊕\",\"orarr\":\"↻\",\"Or\":\"⩔\",\"or\":\"∨\",\"ord\":\"⩝\",\"order\":\"ℴ\",\"orderof\":\"ℴ\",\"ordf\":\"ª\",\"ordm\":\"º\",\"origof\":\"⊶\",\"oror\":\"⩖\",\"orslope\":\"⩗\",\"orv\":\"⩛\",\"oS\":\"Ⓢ\",\"Oscr\":\"𝒪\",\"oscr\":\"ℴ\",\"Oslash\":\"Ø\",\"oslash\":\"ø\",\"osol\":\"⊘\",\"Otilde\":\"Õ\",\"otilde\":\"õ\",\"otimesas\":\"⨶\",\"Otimes\":\"⨷\",\"otimes\":\"⊗\",\"Ouml\":\"Ö\",\"ouml\":\"ö\",\"ovbar\":\"⌽\",\"OverBar\":\"‾\",\"OverBrace\":\"⏞\",\"OverBracket\":\"⎴\",\"OverParenthesis\":\"⏜\",\"para\":\"¶\",\"parallel\":\"∥\",\"par\":\"∥\",\"parsim\":\"⫳\",\"parsl\":\"⫽\",\"part\":\"∂\",\"PartialD\":\"∂\",\"Pcy\":\"П\",\"pcy\":\"п\",\"percnt\":\"%\",\"period\":\".\",\"permil\":\"‰\",\"perp\":\"⊥\",\"pertenk\":\"‱\",\"Pfr\":\"𝔓\",\"pfr\":\"𝔭\",\"Phi\":\"Φ\",\"phi\":\"φ\",\"phiv\":\"ϕ\",\"phmmat\":\"ℳ\",\"phone\":\"☎\",\"Pi\":\"Π\",\"pi\":\"π\",\"pitchfork\":\"⋔\",\"piv\":\"ϖ\",\"planck\":\"ℏ\",\"planckh\":\"ℎ\",\"plankv\":\"ℏ\",\"plusacir\":\"⨣\",\"plusb\":\"⊞\",\"pluscir\":\"⨢\",\"plus\":\"+\",\"plusdo\":\"∔\",\"plusdu\":\"⨥\",\"pluse\":\"⩲\",\"PlusMinus\":\"±\",\"plusmn\":\"±\",\"plussim\":\"⨦\",\"plustwo\":\"⨧\",\"pm\":\"±\",\"Poincareplane\":\"ℌ\",\"pointint\":\"⨕\",\"popf\":\"𝕡\",\"Popf\":\"ℙ\",\"pound\":\"£\",\"prap\":\"⪷\",\"Pr\":\"⪻\",\"pr\":\"≺\",\"prcue\":\"≼\",\"precapprox\":\"⪷\",\"prec\":\"≺\",\"preccurlyeq\":\"≼\",\"Precedes\":\"≺\",\"PrecedesEqual\":\"⪯\",\"PrecedesSlantEqual\":\"≼\",\"PrecedesTilde\":\"≾\",\"preceq\":\"⪯\",\"precnapprox\":\"⪹\",\"precneqq\":\"⪵\",\"precnsim\":\"⋨\",\"pre\":\"⪯\",\"prE\":\"⪳\",\"precsim\":\"≾\",\"prime\":\"′\",\"Prime\":\"″\",\"primes\":\"ℙ\",\"prnap\":\"⪹\",\"prnE\":\"⪵\",\"prnsim\":\"⋨\",\"prod\":\"∏\",\"Product\":\"∏\",\"profalar\":\"⌮\",\"profline\":\"⌒\",\"profsurf\":\"⌓\",\"prop\":\"∝\",\"Proportional\":\"∝\",\"Proportion\":\"∷\",\"propto\":\"∝\",\"prsim\":\"≾\",\"prurel\":\"⊰\",\"Pscr\":\"𝒫\",\"pscr\":\"𝓅\",\"Psi\":\"Ψ\",\"psi\":\"ψ\",\"puncsp\":\" \",\"Qfr\":\"𝔔\",\"qfr\":\"𝔮\",\"qint\":\"⨌\",\"qopf\":\"𝕢\",\"Qopf\":\"ℚ\",\"qprime\":\"⁗\",\"Qscr\":\"𝒬\",\"qscr\":\"𝓆\",\"quaternions\":\"ℍ\",\"quatint\":\"⨖\",\"quest\":\"?\",\"questeq\":\"≟\",\"quot\":\"\\\"\",\"QUOT\":\"\\\"\",\"rAarr\":\"⇛\",\"race\":\"∽̱\",\"Racute\":\"Ŕ\",\"racute\":\"ŕ\",\"radic\":\"√\",\"raemptyv\":\"⦳\",\"rang\":\"⟩\",\"Rang\":\"⟫\",\"rangd\":\"⦒\",\"range\":\"⦥\",\"rangle\":\"⟩\",\"raquo\":\"»\",\"rarrap\":\"⥵\",\"rarrb\":\"⇥\",\"rarrbfs\":\"⤠\",\"rarrc\":\"⤳\",\"rarr\":\"→\",\"Rarr\":\"↠\",\"rArr\":\"⇒\",\"rarrfs\":\"⤞\",\"rarrhk\":\"↪\",\"rarrlp\":\"↬\",\"rarrpl\":\"⥅\",\"rarrsim\":\"⥴\",\"Rarrtl\":\"⤖\",\"rarrtl\":\"↣\",\"rarrw\":\"↝\",\"ratail\":\"⤚\",\"rAtail\":\"⤜\",\"ratio\":\"∶\",\"rationals\":\"ℚ\",\"rbarr\":\"⤍\",\"rBarr\":\"⤏\",\"RBarr\":\"⤐\",\"rbbrk\":\"❳\",\"rbrace\":\"}\",\"rbrack\":\"]\",\"rbrke\":\"⦌\",\"rbrksld\":\"⦎\",\"rbrkslu\":\"⦐\",\"Rcaron\":\"Ř\",\"rcaron\":\"ř\",\"Rcedil\":\"Ŗ\",\"rcedil\":\"ŗ\",\"rceil\":\"⌉\",\"rcub\":\"}\",\"Rcy\":\"Р\",\"rcy\":\"р\",\"rdca\":\"⤷\",\"rdldhar\":\"⥩\",\"rdquo\":\"”\",\"rdquor\":\"”\",\"rdsh\":\"↳\",\"real\":\"ℜ\",\"realine\":\"ℛ\",\"realpart\":\"ℜ\",\"reals\":\"ℝ\",\"Re\":\"ℜ\",\"rect\":\"▭\",\"reg\":\"®\",\"REG\":\"®\",\"ReverseElement\":\"∋\",\"ReverseEquilibrium\":\"⇋\",\"ReverseUpEquilibrium\":\"⥯\",\"rfisht\":\"⥽\",\"rfloor\":\"⌋\",\"rfr\":\"𝔯\",\"Rfr\":\"ℜ\",\"rHar\":\"⥤\",\"rhard\":\"⇁\",\"rharu\":\"⇀\",\"rharul\":\"⥬\",\"Rho\":\"Ρ\",\"rho\":\"ρ\",\"rhov\":\"ϱ\",\"RightAngleBracket\":\"⟩\",\"RightArrowBar\":\"⇥\",\"rightarrow\":\"→\",\"RightArrow\":\"→\",\"Rightarrow\":\"⇒\",\"RightArrowLeftArrow\":\"⇄\",\"rightarrowtail\":\"↣\",\"RightCeiling\":\"⌉\",\"RightDoubleBracket\":\"⟧\",\"RightDownTeeVector\":\"⥝\",\"RightDownVectorBar\":\"⥕\",\"RightDownVector\":\"⇂\",\"RightFloor\":\"⌋\",\"rightharpoondown\":\"⇁\",\"rightharpoonup\":\"⇀\",\"rightleftarrows\":\"⇄\",\"rightleftharpoons\":\"⇌\",\"rightrightarrows\":\"⇉\",\"rightsquigarrow\":\"↝\",\"RightTeeArrow\":\"↦\",\"RightTee\":\"⊢\",\"RightTeeVector\":\"⥛\",\"rightthreetimes\":\"⋌\",\"RightTriangleBar\":\"⧐\",\"RightTriangle\":\"⊳\",\"RightTriangleEqual\":\"⊵\",\"RightUpDownVector\":\"⥏\",\"RightUpTeeVector\":\"⥜\",\"RightUpVectorBar\":\"⥔\",\"RightUpVector\":\"↾\",\"RightVectorBar\":\"⥓\",\"RightVector\":\"⇀\",\"ring\":\"˚\",\"risingdotseq\":\"≓\",\"rlarr\":\"⇄\",\"rlhar\":\"⇌\",\"rlm\":\"‏\",\"rmoustache\":\"⎱\",\"rmoust\":\"⎱\",\"rnmid\":\"⫮\",\"roang\":\"⟭\",\"roarr\":\"⇾\",\"robrk\":\"⟧\",\"ropar\":\"⦆\",\"ropf\":\"𝕣\",\"Ropf\":\"ℝ\",\"roplus\":\"⨮\",\"rotimes\":\"⨵\",\"RoundImplies\":\"⥰\",\"rpar\":\")\",\"rpargt\":\"⦔\",\"rppolint\":\"⨒\",\"rrarr\":\"⇉\",\"Rrightarrow\":\"⇛\",\"rsaquo\":\"›\",\"rscr\":\"𝓇\",\"Rscr\":\"ℛ\",\"rsh\":\"↱\",\"Rsh\":\"↱\",\"rsqb\":\"]\",\"rsquo\":\"’\",\"rsquor\":\"’\",\"rthree\":\"⋌\",\"rtimes\":\"⋊\",\"rtri\":\"▹\",\"rtrie\":\"⊵\",\"rtrif\":\"▸\",\"rtriltri\":\"⧎\",\"RuleDelayed\":\"⧴\",\"ruluhar\":\"⥨\",\"rx\":\"℞\",\"Sacute\":\"Ś\",\"sacute\":\"ś\",\"sbquo\":\"‚\",\"scap\":\"⪸\",\"Scaron\":\"Š\",\"scaron\":\"š\",\"Sc\":\"⪼\",\"sc\":\"≻\",\"sccue\":\"≽\",\"sce\":\"⪰\",\"scE\":\"⪴\",\"Scedil\":\"Ş\",\"scedil\":\"ş\",\"Scirc\":\"Ŝ\",\"scirc\":\"ŝ\",\"scnap\":\"⪺\",\"scnE\":\"⪶\",\"scnsim\":\"⋩\",\"scpolint\":\"⨓\",\"scsim\":\"≿\",\"Scy\":\"С\",\"scy\":\"с\",\"sdotb\":\"⊡\",\"sdot\":\"⋅\",\"sdote\":\"⩦\",\"searhk\":\"⤥\",\"searr\":\"↘\",\"seArr\":\"⇘\",\"searrow\":\"↘\",\"sect\":\"§\",\"semi\":\";\",\"seswar\":\"⤩\",\"setminus\":\"∖\",\"setmn\":\"∖\",\"sext\":\"✶\",\"Sfr\":\"𝔖\",\"sfr\":\"𝔰\",\"sfrown\":\"⌢\",\"sharp\":\"♯\",\"SHCHcy\":\"Щ\",\"shchcy\":\"щ\",\"SHcy\":\"Ш\",\"shcy\":\"ш\",\"ShortDownArrow\":\"↓\",\"ShortLeftArrow\":\"←\",\"shortmid\":\"∣\",\"shortparallel\":\"∥\",\"ShortRightArrow\":\"→\",\"ShortUpArrow\":\"↑\",\"shy\":\"­\",\"Sigma\":\"Σ\",\"sigma\":\"σ\",\"sigmaf\":\"ς\",\"sigmav\":\"ς\",\"sim\":\"∼\",\"simdot\":\"⩪\",\"sime\":\"≃\",\"simeq\":\"≃\",\"simg\":\"⪞\",\"simgE\":\"⪠\",\"siml\":\"⪝\",\"simlE\":\"⪟\",\"simne\":\"≆\",\"simplus\":\"⨤\",\"simrarr\":\"⥲\",\"slarr\":\"←\",\"SmallCircle\":\"∘\",\"smallsetminus\":\"∖\",\"smashp\":\"⨳\",\"smeparsl\":\"⧤\",\"smid\":\"∣\",\"smile\":\"⌣\",\"smt\":\"⪪\",\"smte\":\"⪬\",\"smtes\":\"⪬︀\",\"SOFTcy\":\"Ь\",\"softcy\":\"ь\",\"solbar\":\"⌿\",\"solb\":\"⧄\",\"sol\":\"/\",\"Sopf\":\"𝕊\",\"sopf\":\"𝕤\",\"spades\":\"♠\",\"spadesuit\":\"♠\",\"spar\":\"∥\",\"sqcap\":\"⊓\",\"sqcaps\":\"⊓︀\",\"sqcup\":\"⊔\",\"sqcups\":\"⊔︀\",\"Sqrt\":\"√\",\"sqsub\":\"⊏\",\"sqsube\":\"⊑\",\"sqsubset\":\"⊏\",\"sqsubseteq\":\"⊑\",\"sqsup\":\"⊐\",\"sqsupe\":\"⊒\",\"sqsupset\":\"⊐\",\"sqsupseteq\":\"⊒\",\"square\":\"□\",\"Square\":\"□\",\"SquareIntersection\":\"⊓\",\"SquareSubset\":\"⊏\",\"SquareSubsetEqual\":\"⊑\",\"SquareSuperset\":\"⊐\",\"SquareSupersetEqual\":\"⊒\",\"SquareUnion\":\"⊔\",\"squarf\":\"▪\",\"squ\":\"□\",\"squf\":\"▪\",\"srarr\":\"→\",\"Sscr\":\"𝒮\",\"sscr\":\"𝓈\",\"ssetmn\":\"∖\",\"ssmile\":\"⌣\",\"sstarf\":\"⋆\",\"Star\":\"⋆\",\"star\":\"☆\",\"starf\":\"★\",\"straightepsilon\":\"ϵ\",\"straightphi\":\"ϕ\",\"strns\":\"¯\",\"sub\":\"⊂\",\"Sub\":\"⋐\",\"subdot\":\"⪽\",\"subE\":\"⫅\",\"sube\":\"⊆\",\"subedot\":\"⫃\",\"submult\":\"⫁\",\"subnE\":\"⫋\",\"subne\":\"⊊\",\"subplus\":\"⪿\",\"subrarr\":\"⥹\",\"subset\":\"⊂\",\"Subset\":\"⋐\",\"subseteq\":\"⊆\",\"subseteqq\":\"⫅\",\"SubsetEqual\":\"⊆\",\"subsetneq\":\"⊊\",\"subsetneqq\":\"⫋\",\"subsim\":\"⫇\",\"subsub\":\"⫕\",\"subsup\":\"⫓\",\"succapprox\":\"⪸\",\"succ\":\"≻\",\"succcurlyeq\":\"≽\",\"Succeeds\":\"≻\",\"SucceedsEqual\":\"⪰\",\"SucceedsSlantEqual\":\"≽\",\"SucceedsTilde\":\"≿\",\"succeq\":\"⪰\",\"succnapprox\":\"⪺\",\"succneqq\":\"⪶\",\"succnsim\":\"⋩\",\"succsim\":\"≿\",\"SuchThat\":\"∋\",\"sum\":\"∑\",\"Sum\":\"∑\",\"sung\":\"♪\",\"sup1\":\"¹\",\"sup2\":\"²\",\"sup3\":\"³\",\"sup\":\"⊃\",\"Sup\":\"⋑\",\"supdot\":\"⪾\",\"supdsub\":\"⫘\",\"supE\":\"⫆\",\"supe\":\"⊇\",\"supedot\":\"⫄\",\"Superset\":\"⊃\",\"SupersetEqual\":\"⊇\",\"suphsol\":\"⟉\",\"suphsub\":\"⫗\",\"suplarr\":\"⥻\",\"supmult\":\"⫂\",\"supnE\":\"⫌\",\"supne\":\"⊋\",\"supplus\":\"⫀\",\"supset\":\"⊃\",\"Supset\":\"⋑\",\"supseteq\":\"⊇\",\"supseteqq\":\"⫆\",\"supsetneq\":\"⊋\",\"supsetneqq\":\"⫌\",\"supsim\":\"⫈\",\"supsub\":\"⫔\",\"supsup\":\"⫖\",\"swarhk\":\"⤦\",\"swarr\":\"↙\",\"swArr\":\"⇙\",\"swarrow\":\"↙\",\"swnwar\":\"⤪\",\"szlig\":\"ß\",\"Tab\":\"\\t\",\"target\":\"⌖\",\"Tau\":\"Τ\",\"tau\":\"τ\",\"tbrk\":\"⎴\",\"Tcaron\":\"Ť\",\"tcaron\":\"ť\",\"Tcedil\":\"Ţ\",\"tcedil\":\"ţ\",\"Tcy\":\"Т\",\"tcy\":\"т\",\"tdot\":\"⃛\",\"telrec\":\"⌕\",\"Tfr\":\"𝔗\",\"tfr\":\"𝔱\",\"there4\":\"∴\",\"therefore\":\"∴\",\"Therefore\":\"∴\",\"Theta\":\"Θ\",\"theta\":\"θ\",\"thetasym\":\"ϑ\",\"thetav\":\"ϑ\",\"thickapprox\":\"≈\",\"thicksim\":\"∼\",\"ThickSpace\":\"  \",\"ThinSpace\":\" \",\"thinsp\":\" \",\"thkap\":\"≈\",\"thksim\":\"∼\",\"THORN\":\"Þ\",\"thorn\":\"þ\",\"tilde\":\"˜\",\"Tilde\":\"∼\",\"TildeEqual\":\"≃\",\"TildeFullEqual\":\"≅\",\"TildeTilde\":\"≈\",\"timesbar\":\"⨱\",\"timesb\":\"⊠\",\"times\":\"×\",\"timesd\":\"⨰\",\"tint\":\"∭\",\"toea\":\"⤨\",\"topbot\":\"⌶\",\"topcir\":\"⫱\",\"top\":\"⊤\",\"Topf\":\"𝕋\",\"topf\":\"𝕥\",\"topfork\":\"⫚\",\"tosa\":\"⤩\",\"tprime\":\"‴\",\"trade\":\"™\",\"TRADE\":\"™\",\"triangle\":\"▵\",\"triangledown\":\"▿\",\"triangleleft\":\"◃\",\"trianglelefteq\":\"⊴\",\"triangleq\":\"≜\",\"triangleright\":\"▹\",\"trianglerighteq\":\"⊵\",\"tridot\":\"◬\",\"trie\":\"≜\",\"triminus\":\"⨺\",\"TripleDot\":\"⃛\",\"triplus\":\"⨹\",\"trisb\":\"⧍\",\"tritime\":\"⨻\",\"trpezium\":\"⏢\",\"Tscr\":\"𝒯\",\"tscr\":\"𝓉\",\"TScy\":\"Ц\",\"tscy\":\"ц\",\"TSHcy\":\"Ћ\",\"tshcy\":\"ћ\",\"Tstrok\":\"Ŧ\",\"tstrok\":\"ŧ\",\"twixt\":\"≬\",\"twoheadleftarrow\":\"↞\",\"twoheadrightarrow\":\"↠\",\"Uacute\":\"Ú\",\"uacute\":\"ú\",\"uarr\":\"↑\",\"Uarr\":\"↟\",\"uArr\":\"⇑\",\"Uarrocir\":\"⥉\",\"Ubrcy\":\"Ў\",\"ubrcy\":\"ў\",\"Ubreve\":\"Ŭ\",\"ubreve\":\"ŭ\",\"Ucirc\":\"Û\",\"ucirc\":\"û\",\"Ucy\":\"У\",\"ucy\":\"у\",\"udarr\":\"⇅\",\"Udblac\":\"Ű\",\"udblac\":\"ű\",\"udhar\":\"⥮\",\"ufisht\":\"⥾\",\"Ufr\":\"𝔘\",\"ufr\":\"𝔲\",\"Ugrave\":\"Ù\",\"ugrave\":\"ù\",\"uHar\":\"⥣\",\"uharl\":\"↿\",\"uharr\":\"↾\",\"uhblk\":\"▀\",\"ulcorn\":\"⌜\",\"ulcorner\":\"⌜\",\"ulcrop\":\"⌏\",\"ultri\":\"◸\",\"Umacr\":\"Ū\",\"umacr\":\"ū\",\"uml\":\"¨\",\"UnderBar\":\"_\",\"UnderBrace\":\"⏟\",\"UnderBracket\":\"⎵\",\"UnderParenthesis\":\"⏝\",\"Union\":\"⋃\",\"UnionPlus\":\"⊎\",\"Uogon\":\"Ų\",\"uogon\":\"ų\",\"Uopf\":\"𝕌\",\"uopf\":\"𝕦\",\"UpArrowBar\":\"⤒\",\"uparrow\":\"↑\",\"UpArrow\":\"↑\",\"Uparrow\":\"⇑\",\"UpArrowDownArrow\":\"⇅\",\"updownarrow\":\"↕\",\"UpDownArrow\":\"↕\",\"Updownarrow\":\"⇕\",\"UpEquilibrium\":\"⥮\",\"upharpoonleft\":\"↿\",\"upharpoonright\":\"↾\",\"uplus\":\"⊎\",\"UpperLeftArrow\":\"↖\",\"UpperRightArrow\":\"↗\",\"upsi\":\"υ\",\"Upsi\":\"ϒ\",\"upsih\":\"ϒ\",\"Upsilon\":\"Υ\",\"upsilon\":\"υ\",\"UpTeeArrow\":\"↥\",\"UpTee\":\"⊥\",\"upuparrows\":\"⇈\",\"urcorn\":\"⌝\",\"urcorner\":\"⌝\",\"urcrop\":\"⌎\",\"Uring\":\"Ů\",\"uring\":\"ů\",\"urtri\":\"◹\",\"Uscr\":\"𝒰\",\"uscr\":\"𝓊\",\"utdot\":\"⋰\",\"Utilde\":\"Ũ\",\"utilde\":\"ũ\",\"utri\":\"▵\",\"utrif\":\"▴\",\"uuarr\":\"⇈\",\"Uuml\":\"Ü\",\"uuml\":\"ü\",\"uwangle\":\"⦧\",\"vangrt\":\"⦜\",\"varepsilon\":\"ϵ\",\"varkappa\":\"ϰ\",\"varnothing\":\"∅\",\"varphi\":\"ϕ\",\"varpi\":\"ϖ\",\"varpropto\":\"∝\",\"varr\":\"↕\",\"vArr\":\"⇕\",\"varrho\":\"ϱ\",\"varsigma\":\"ς\",\"varsubsetneq\":\"⊊︀\",\"varsubsetneqq\":\"⫋︀\",\"varsupsetneq\":\"⊋︀\",\"varsupsetneqq\":\"⫌︀\",\"vartheta\":\"ϑ\",\"vartriangleleft\":\"⊲\",\"vartriangleright\":\"⊳\",\"vBar\":\"⫨\",\"Vbar\":\"⫫\",\"vBarv\":\"⫩\",\"Vcy\":\"В\",\"vcy\":\"в\",\"vdash\":\"⊢\",\"vDash\":\"⊨\",\"Vdash\":\"⊩\",\"VDash\":\"⊫\",\"Vdashl\":\"⫦\",\"veebar\":\"⊻\",\"vee\":\"∨\",\"Vee\":\"⋁\",\"veeeq\":\"≚\",\"vellip\":\"⋮\",\"verbar\":\"|\",\"Verbar\":\"‖\",\"vert\":\"|\",\"Vert\":\"‖\",\"VerticalBar\":\"∣\",\"VerticalLine\":\"|\",\"VerticalSeparator\":\"❘\",\"VerticalTilde\":\"≀\",\"VeryThinSpace\":\" \",\"Vfr\":\"𝔙\",\"vfr\":\"𝔳\",\"vltri\":\"⊲\",\"vnsub\":\"⊂⃒\",\"vnsup\":\"⊃⃒\",\"Vopf\":\"𝕍\",\"vopf\":\"𝕧\",\"vprop\":\"∝\",\"vrtri\":\"⊳\",\"Vscr\":\"𝒱\",\"vscr\":\"𝓋\",\"vsubnE\":\"⫋︀\",\"vsubne\":\"⊊︀\",\"vsupnE\":\"⫌︀\",\"vsupne\":\"⊋︀\",\"Vvdash\":\"⊪\",\"vzigzag\":\"⦚\",\"Wcirc\":\"Ŵ\",\"wcirc\":\"ŵ\",\"wedbar\":\"⩟\",\"wedge\":\"∧\",\"Wedge\":\"⋀\",\"wedgeq\":\"≙\",\"weierp\":\"℘\",\"Wfr\":\"𝔚\",\"wfr\":\"𝔴\",\"Wopf\":\"𝕎\",\"wopf\":\"𝕨\",\"wp\":\"℘\",\"wr\":\"≀\",\"wreath\":\"≀\",\"Wscr\":\"𝒲\",\"wscr\":\"𝓌\",\"xcap\":\"⋂\",\"xcirc\":\"◯\",\"xcup\":\"⋃\",\"xdtri\":\"▽\",\"Xfr\":\"𝔛\",\"xfr\":\"𝔵\",\"xharr\":\"⟷\",\"xhArr\":\"⟺\",\"Xi\":\"Ξ\",\"xi\":\"ξ\",\"xlarr\":\"⟵\",\"xlArr\":\"⟸\",\"xmap\":\"⟼\",\"xnis\":\"⋻\",\"xodot\":\"⨀\",\"Xopf\":\"𝕏\",\"xopf\":\"𝕩\",\"xoplus\":\"⨁\",\"xotime\":\"⨂\",\"xrarr\":\"⟶\",\"xrArr\":\"⟹\",\"Xscr\":\"𝒳\",\"xscr\":\"𝓍\",\"xsqcup\":\"⨆\",\"xuplus\":\"⨄\",\"xutri\":\"△\",\"xvee\":\"⋁\",\"xwedge\":\"⋀\",\"Yacute\":\"Ý\",\"yacute\":\"ý\",\"YAcy\":\"Я\",\"yacy\":\"я\",\"Ycirc\":\"Ŷ\",\"ycirc\":\"ŷ\",\"Ycy\":\"Ы\",\"ycy\":\"ы\",\"yen\":\"¥\",\"Yfr\":\"𝔜\",\"yfr\":\"𝔶\",\"YIcy\":\"Ї\",\"yicy\":\"ї\",\"Yopf\":\"𝕐\",\"yopf\":\"𝕪\",\"Yscr\":\"𝒴\",\"yscr\":\"𝓎\",\"YUcy\":\"Ю\",\"yucy\":\"ю\",\"yuml\":\"ÿ\",\"Yuml\":\"Ÿ\",\"Zacute\":\"Ź\",\"zacute\":\"ź\",\"Zcaron\":\"Ž\",\"zcaron\":\"ž\",\"Zcy\":\"З\",\"zcy\":\"з\",\"Zdot\":\"Ż\",\"zdot\":\"ż\",\"zeetrf\":\"ℨ\",\"ZeroWidthSpace\":\"​\",\"Zeta\":\"Ζ\",\"zeta\":\"ζ\",\"zfr\":\"𝔷\",\"Zfr\":\"ℨ\",\"ZHcy\":\"Ж\",\"zhcy\":\"ж\",\"zigrarr\":\"⇝\",\"zopf\":\"𝕫\",\"Zopf\":\"ℤ\",\"Zscr\":\"𝒵\",\"zscr\":\"𝓏\",\"zwj\":\"‍\",\"zwnj\":\"‌\"}"));}),
"[project]/learn-next/final/node_modules/entities/lib/encode.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __importDefault = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.escapeUTF8 = exports.escape = exports.encodeNonAsciiHTML = exports.encodeHTML = exports.encodeXML = void 0;
var xml_json_1 = __importDefault(__turbopack_context__.r("[project]/learn-next/final/node_modules/entities/lib/maps/xml.json (json)"));
var inverseXML = getInverseObj(xml_json_1.default);
var xmlReplacer = getInverseReplacer(inverseXML);
/**
 * Encodes all non-ASCII characters, as well as characters not valid in XML
 * documents using XML entities.
 *
 * If a character has no equivalent entity, a
 * numeric hexadecimal reference (eg. `&#xfc;`) will be used.
 */ exports.encodeXML = getASCIIEncoder(inverseXML);
var entities_json_1 = __importDefault(__turbopack_context__.r("[project]/learn-next/final/node_modules/entities/lib/maps/entities.json (json)"));
var inverseHTML = getInverseObj(entities_json_1.default);
var htmlReplacer = getInverseReplacer(inverseHTML);
/**
 * Encodes all entities and non-ASCII characters in the input.
 *
 * This includes characters that are valid ASCII characters in HTML documents.
 * For example `#` will be encoded as `&num;`. To get a more compact output,
 * consider using the `encodeNonAsciiHTML` function.
 *
 * If a character has no equivalent entity, a
 * numeric hexadecimal reference (eg. `&#xfc;`) will be used.
 */ exports.encodeHTML = getInverse(inverseHTML, htmlReplacer);
/**
 * Encodes all non-ASCII characters, as well as characters not valid in HTML
 * documents using HTML entities.
 *
 * If a character has no equivalent entity, a
 * numeric hexadecimal reference (eg. `&#xfc;`) will be used.
 */ exports.encodeNonAsciiHTML = getASCIIEncoder(inverseHTML);
function getInverseObj(obj) {
    return Object.keys(obj).sort().reduce(function(inverse, name) {
        inverse[obj[name]] = "&" + name + ";";
        return inverse;
    }, {});
}
function getInverseReplacer(inverse) {
    var single = [];
    var multiple = [];
    for(var _i = 0, _a = Object.keys(inverse); _i < _a.length; _i++){
        var k = _a[_i];
        if (k.length === 1) {
            // Add value to single array
            single.push("\\" + k);
        } else {
            // Add value to multiple array
            multiple.push(k);
        }
    }
    // Add ranges to single characters.
    single.sort();
    for(var start = 0; start < single.length - 1; start++){
        // Find the end of a run of characters
        var end = start;
        while(end < single.length - 1 && single[end].charCodeAt(1) + 1 === single[end + 1].charCodeAt(1)){
            end += 1;
        }
        var count = 1 + end - start;
        // We want to replace at least three characters
        if (count < 3) continue;
        single.splice(start, count, single[start] + "-" + single[end]);
    }
    multiple.unshift("[" + single.join("") + "]");
    return new RegExp(multiple.join("|"), "g");
}
// /[^\0-\x7F]/gu
var reNonASCII = /(?:[\x80-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])/g;
var getCodePoint = // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
String.prototype.codePointAt != null ? function(str) {
    return str.codePointAt(0);
} : function(c) {
    return (c.charCodeAt(0) - 0xd800) * 0x400 + c.charCodeAt(1) - 0xdc00 + 0x10000;
};
function singleCharReplacer(c) {
    return "&#x" + (c.length > 1 ? getCodePoint(c) : c.charCodeAt(0)).toString(16).toUpperCase() + ";";
}
function getInverse(inverse, re) {
    return function(data) {
        return data.replace(re, function(name) {
            return inverse[name];
        }).replace(reNonASCII, singleCharReplacer);
    };
}
var reEscapeChars = new RegExp(xmlReplacer.source + "|" + reNonASCII.source, "g");
/**
 * Encodes all non-ASCII characters, as well as characters not valid in XML
 * documents using numeric hexadecimal reference (eg. `&#xfc;`).
 *
 * Have a look at `escapeUTF8` if you want a more concise output at the expense
 * of reduced transportability.
 *
 * @param data String to escape.
 */ function escape(data) {
    return data.replace(reEscapeChars, singleCharReplacer);
}
exports.escape = escape;
/**
 * Encodes all characters not valid in XML documents using numeric hexadecimal
 * reference (eg. `&#xfc;`).
 *
 * Note that the output will be character-set dependent.
 *
 * @param data String to escape.
 */ function escapeUTF8(data) {
    return data.replace(xmlReplacer, singleCharReplacer);
}
exports.escapeUTF8 = escapeUTF8;
function getASCIIEncoder(obj) {
    return function(data) {
        return data.replace(reEscapeChars, function(c) {
            return obj[c] || singleCharReplacer(c);
        });
    };
}
}),
"[project]/learn-next/final/node_modules/entities/lib/maps/legacy.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v({"Aacute":"Á","aacute":"á","Acirc":"Â","acirc":"â","acute":"´","AElig":"Æ","aelig":"æ","Agrave":"À","agrave":"à","amp":"&","AMP":"&","Aring":"Å","aring":"å","Atilde":"Ã","atilde":"ã","Auml":"Ä","auml":"ä","brvbar":"¦","Ccedil":"Ç","ccedil":"ç","cedil":"¸","cent":"¢","copy":"©","COPY":"©","curren":"¤","deg":"°","divide":"÷","Eacute":"É","eacute":"é","Ecirc":"Ê","ecirc":"ê","Egrave":"È","egrave":"è","ETH":"Ð","eth":"ð","Euml":"Ë","euml":"ë","frac12":"½","frac14":"¼","frac34":"¾","gt":">","GT":">","Iacute":"Í","iacute":"í","Icirc":"Î","icirc":"î","iexcl":"¡","Igrave":"Ì","igrave":"ì","iquest":"¿","Iuml":"Ï","iuml":"ï","laquo":"«","lt":"<","LT":"<","macr":"¯","micro":"µ","middot":"·","nbsp":" ","not":"¬","Ntilde":"Ñ","ntilde":"ñ","Oacute":"Ó","oacute":"ó","Ocirc":"Ô","ocirc":"ô","Ograve":"Ò","ograve":"ò","ordf":"ª","ordm":"º","Oslash":"Ø","oslash":"ø","Otilde":"Õ","otilde":"õ","Ouml":"Ö","ouml":"ö","para":"¶","plusmn":"±","pound":"£","quot":"\"","QUOT":"\"","raquo":"»","reg":"®","REG":"®","sect":"§","shy":"­","sup1":"¹","sup2":"²","sup3":"³","szlig":"ß","THORN":"Þ","thorn":"þ","times":"×","Uacute":"Ú","uacute":"ú","Ucirc":"Û","ucirc":"û","Ugrave":"Ù","ugrave":"ù","uml":"¨","Uuml":"Ü","uuml":"ü","Yacute":"Ý","yacute":"ý","yen":"¥","yuml":"ÿ"});}),
"[project]/learn-next/final/node_modules/entities/lib/maps/decode.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v({"0":65533,"128":8364,"130":8218,"131":402,"132":8222,"133":8230,"134":8224,"135":8225,"136":710,"137":8240,"138":352,"139":8249,"140":338,"142":381,"145":8216,"146":8217,"147":8220,"148":8221,"149":8226,"150":8211,"151":8212,"152":732,"153":8482,"154":353,"155":8250,"156":339,"158":382,"159":376});}),
"[project]/learn-next/final/node_modules/entities/lib/decode_codepoint.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __importDefault = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
var decode_json_1 = __importDefault(__turbopack_context__.r("[project]/learn-next/final/node_modules/entities/lib/maps/decode.json (json)"));
// Adapted from https://github.com/mathiasbynens/he/blob/master/src/he.js#L94-L119
var fromCodePoint = // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
String.fromCodePoint || function(codePoint) {
    var output = "";
    if (codePoint > 0xffff) {
        codePoint -= 0x10000;
        output += String.fromCharCode(codePoint >>> 10 & 0x3ff | 0xd800);
        codePoint = 0xdc00 | codePoint & 0x3ff;
    }
    output += String.fromCharCode(codePoint);
    return output;
};
function decodeCodePoint(codePoint) {
    if (codePoint >= 0xd800 && codePoint <= 0xdfff || codePoint > 0x10ffff) {
        return "\uFFFD";
    }
    if (codePoint in decode_json_1.default) {
        codePoint = decode_json_1.default[codePoint];
    }
    return fromCodePoint(codePoint);
}
exports.default = decodeCodePoint;
}),
"[project]/learn-next/final/node_modules/entities/lib/decode.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __importDefault = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.decodeHTML = exports.decodeHTMLStrict = exports.decodeXML = void 0;
var entities_json_1 = __importDefault(__turbopack_context__.r("[project]/learn-next/final/node_modules/entities/lib/maps/entities.json (json)"));
var legacy_json_1 = __importDefault(__turbopack_context__.r("[project]/learn-next/final/node_modules/entities/lib/maps/legacy.json (json)"));
var xml_json_1 = __importDefault(__turbopack_context__.r("[project]/learn-next/final/node_modules/entities/lib/maps/xml.json (json)"));
var decode_codepoint_1 = __importDefault(__turbopack_context__.r("[project]/learn-next/final/node_modules/entities/lib/decode_codepoint.js [app-rsc] (ecmascript)"));
var strictEntityRe = /&(?:[a-zA-Z0-9]+|#[xX][\da-fA-F]+|#\d+);/g;
exports.decodeXML = getStrictDecoder(xml_json_1.default);
exports.decodeHTMLStrict = getStrictDecoder(entities_json_1.default);
function getStrictDecoder(map) {
    var replace = getReplacer(map);
    return function(str) {
        return String(str).replace(strictEntityRe, replace);
    };
}
var sorter = function(a, b) {
    return a < b ? 1 : -1;
};
exports.decodeHTML = function() {
    var legacy = Object.keys(legacy_json_1.default).sort(sorter);
    var keys = Object.keys(entities_json_1.default).sort(sorter);
    for(var i = 0, j = 0; i < keys.length; i++){
        if (legacy[j] === keys[i]) {
            keys[i] += ";?";
            j++;
        } else {
            keys[i] += ";";
        }
    }
    var re = new RegExp("&(?:" + keys.join("|") + "|#[xX][\\da-fA-F]+;?|#\\d+;?)", "g");
    var replace = getReplacer(entities_json_1.default);
    function replacer(str) {
        if (str.substr(-1) !== ";") str += ";";
        return replace(str);
    }
    // TODO consider creating a merged map
    return function(str) {
        return String(str).replace(re, replacer);
    };
}();
function getReplacer(map) {
    return function replace(str) {
        if (str.charAt(1) === "#") {
            var secondChar = str.charAt(2);
            if (secondChar === "X" || secondChar === "x") {
                return decode_codepoint_1.default(parseInt(str.substr(3), 16));
            }
            return decode_codepoint_1.default(parseInt(str.substr(2), 10));
        }
        // eslint-disable-next-line @typescript-eslint/prefer-nullish-coalescing
        return map[str.slice(1, -1)] || str;
    };
}
}),
"[project]/learn-next/final/node_modules/entities/lib/index.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.decodeXMLStrict = exports.decodeHTML5Strict = exports.decodeHTML4Strict = exports.decodeHTML5 = exports.decodeHTML4 = exports.decodeHTMLStrict = exports.decodeHTML = exports.decodeXML = exports.encodeHTML5 = exports.encodeHTML4 = exports.escapeUTF8 = exports.escape = exports.encodeNonAsciiHTML = exports.encodeHTML = exports.encodeXML = exports.encode = exports.decodeStrict = exports.decode = void 0;
var decode_1 = __turbopack_context__.r("[project]/learn-next/final/node_modules/entities/lib/decode.js [app-rsc] (ecmascript)");
var encode_1 = __turbopack_context__.r("[project]/learn-next/final/node_modules/entities/lib/encode.js [app-rsc] (ecmascript)");
/**
 * Decodes a string with entities.
 *
 * @param data String to decode.
 * @param level Optional level to decode at. 0 = XML, 1 = HTML. Default is 0.
 * @deprecated Use `decodeXML` or `decodeHTML` directly.
 */ function decode(data, level) {
    return (!level || level <= 0 ? decode_1.decodeXML : decode_1.decodeHTML)(data);
}
exports.decode = decode;
/**
 * Decodes a string with entities. Does not allow missing trailing semicolons for entities.
 *
 * @param data String to decode.
 * @param level Optional level to decode at. 0 = XML, 1 = HTML. Default is 0.
 * @deprecated Use `decodeHTMLStrict` or `decodeXML` directly.
 */ function decodeStrict(data, level) {
    return (!level || level <= 0 ? decode_1.decodeXML : decode_1.decodeHTMLStrict)(data);
}
exports.decodeStrict = decodeStrict;
/**
 * Encodes a string with entities.
 *
 * @param data String to encode.
 * @param level Optional level to encode at. 0 = XML, 1 = HTML. Default is 0.
 * @deprecated Use `encodeHTML`, `encodeXML` or `encodeNonAsciiHTML` directly.
 */ function encode(data, level) {
    return (!level || level <= 0 ? encode_1.encodeXML : encode_1.encodeHTML)(data);
}
exports.encode = encode;
var encode_2 = __turbopack_context__.r("[project]/learn-next/final/node_modules/entities/lib/encode.js [app-rsc] (ecmascript)");
Object.defineProperty(exports, "encodeXML", {
    enumerable: true,
    get: function() {
        return encode_2.encodeXML;
    }
});
Object.defineProperty(exports, "encodeHTML", {
    enumerable: true,
    get: function() {
        return encode_2.encodeHTML;
    }
});
Object.defineProperty(exports, "encodeNonAsciiHTML", {
    enumerable: true,
    get: function() {
        return encode_2.encodeNonAsciiHTML;
    }
});
Object.defineProperty(exports, "escape", {
    enumerable: true,
    get: function() {
        return encode_2.escape;
    }
});
Object.defineProperty(exports, "escapeUTF8", {
    enumerable: true,
    get: function() {
        return encode_2.escapeUTF8;
    }
});
// Legacy aliases (deprecated)
Object.defineProperty(exports, "encodeHTML4", {
    enumerable: true,
    get: function() {
        return encode_2.encodeHTML;
    }
});
Object.defineProperty(exports, "encodeHTML5", {
    enumerable: true,
    get: function() {
        return encode_2.encodeHTML;
    }
});
var decode_2 = __turbopack_context__.r("[project]/learn-next/final/node_modules/entities/lib/decode.js [app-rsc] (ecmascript)");
Object.defineProperty(exports, "decodeXML", {
    enumerable: true,
    get: function() {
        return decode_2.decodeXML;
    }
});
Object.defineProperty(exports, "decodeHTML", {
    enumerable: true,
    get: function() {
        return decode_2.decodeHTML;
    }
});
Object.defineProperty(exports, "decodeHTMLStrict", {
    enumerable: true,
    get: function() {
        return decode_2.decodeHTMLStrict;
    }
});
// Legacy aliases (deprecated)
Object.defineProperty(exports, "decodeHTML4", {
    enumerable: true,
    get: function() {
        return decode_2.decodeHTML;
    }
});
Object.defineProperty(exports, "decodeHTML5", {
    enumerable: true,
    get: function() {
        return decode_2.decodeHTML;
    }
});
Object.defineProperty(exports, "decodeHTML4Strict", {
    enumerable: true,
    get: function() {
        return decode_2.decodeHTMLStrict;
    }
});
Object.defineProperty(exports, "decodeHTML5Strict", {
    enumerable: true,
    get: function() {
        return decode_2.decodeHTMLStrict;
    }
});
Object.defineProperty(exports, "decodeXMLStrict", {
    enumerable: true,
    get: function() {
        return decode_2.decodeXML;
    }
});
}),
"[project]/learn-next/final/node_modules/rss-parser/lib/utils.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {

const utils = module.exports = {};
const entities = __turbopack_context__.r("[project]/learn-next/final/node_modules/entities/lib/index.js [app-rsc] (ecmascript)");
const xml2js = __turbopack_context__.r("[project]/learn-next/final/node_modules/xml2js/lib/xml2js.js [app-rsc] (ecmascript)");
utils.stripHtml = function(str) {
    str = str.replace(/([^\n])<\/?(h|br|p|ul|ol|li|blockquote|section|table|tr|div)(?:.|\n)*?>([^\n])/gm, '$1\n$3');
    str = str.replace(/<(?:.|\n)*?>/gm, '');
    return str;
};
utils.getSnippet = function(str) {
    return entities.decodeHTML(utils.stripHtml(str)).trim();
};
utils.getLink = function(links, rel, fallbackIdx) {
    if (!links) return;
    for(let i = 0; i < links.length; ++i){
        if (links[i].$.rel === rel) return links[i].$.href;
    }
    if (links[fallbackIdx]) return links[fallbackIdx].$.href;
};
utils.getContent = function(content) {
    if (typeof content._ === 'string') {
        return content._;
    } else if (typeof content === 'object') {
        let builder = new xml2js.Builder({
            headless: true,
            explicitRoot: true,
            rootName: 'div',
            renderOpts: {
                pretty: false
            }
        });
        return builder.buildObject(content);
    } else {
        return content;
    }
};
utils.copyFromXML = function(xml, dest, fields) {
    fields.forEach(function(f) {
        let from = f;
        let to = f;
        let options = {};
        if (Array.isArray(f)) {
            from = f[0];
            to = f[1];
            if (f.length > 2) {
                options = f[2];
            }
        }
        const { keepArray, includeSnippet } = options;
        if (xml[from] !== undefined) {
            dest[to] = keepArray ? xml[from] : xml[from][0];
        }
        if (dest[to] && typeof dest[to]._ === 'string') {
            dest[to] = dest[to]._;
        }
        if (includeSnippet && dest[to] && typeof dest[to] === 'string') {
            dest[to + 'Snippet'] = utils.getSnippet(dest[to]);
        }
    });
};
utils.maybePromisify = function(callback, promise) {
    if (!callback) return promise;
    return promise.then((data)=>setTimeout(()=>callback(null, data)), (err)=>setTimeout(()=>callback(err)));
};
const DEFAULT_ENCODING = 'utf8';
const ENCODING_REGEX = /(encoding|charset)\s*=\s*(\S+)/;
const SUPPORTED_ENCODINGS = [
    'ascii',
    'utf8',
    'utf16le',
    'ucs2',
    'base64',
    'latin1',
    'binary',
    'hex'
];
const ENCODING_ALIASES = {
    'utf-8': 'utf8',
    'iso-8859-1': 'latin1'
};
utils.getEncodingFromContentType = function(contentType) {
    contentType = contentType || '';
    let match = contentType.match(ENCODING_REGEX);
    let encoding = (match || [])[2] || '';
    encoding = encoding.toLowerCase();
    encoding = ENCODING_ALIASES[encoding] || encoding;
    if (!encoding || SUPPORTED_ENCODINGS.indexOf(encoding) === -1) {
        encoding = DEFAULT_ENCODING;
    }
    return encoding;
};
}),
"[project]/learn-next/final/node_modules/rss-parser/lib/parser.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const http = __turbopack_context__.r("[externals]/http [external] (http, cjs)");
const https = __turbopack_context__.r("[externals]/https [external] (https, cjs)");
const xml2js = __turbopack_context__.r("[project]/learn-next/final/node_modules/xml2js/lib/xml2js.js [app-rsc] (ecmascript)");
const url = __turbopack_context__.r("[externals]/url [external] (url, cjs)");
const fields = __turbopack_context__.r("[project]/learn-next/final/node_modules/rss-parser/lib/fields.js [app-rsc] (ecmascript)");
const utils = __turbopack_context__.r("[project]/learn-next/final/node_modules/rss-parser/lib/utils.js [app-rsc] (ecmascript)");
const DEFAULT_HEADERS = {
    'User-Agent': 'rss-parser',
    'Accept': 'application/rss+xml'
};
const DEFAULT_MAX_REDIRECTS = 5;
const DEFAULT_TIMEOUT = 60000;
class Parser {
    constructor(options = {}){
        options.headers = options.headers || {};
        options.xml2js = options.xml2js || {};
        options.customFields = options.customFields || {};
        options.customFields.item = options.customFields.item || [];
        options.customFields.feed = options.customFields.feed || [];
        options.requestOptions = options.requestOptions || {};
        if (!options.maxRedirects) options.maxRedirects = DEFAULT_MAX_REDIRECTS;
        if (!options.timeout) options.timeout = DEFAULT_TIMEOUT;
        this.options = options;
        this.xmlParser = new xml2js.Parser(this.options.xml2js);
    }
    parseString(xml, callback) {
        let prom = new Promise((resolve, reject)=>{
            this.xmlParser.parseString(xml, (err, result)=>{
                if (err) return reject(err);
                if (!result) {
                    return reject(new Error('Unable to parse XML.'));
                }
                let feed = null;
                if (result.feed) {
                    feed = this.buildAtomFeed(result);
                } else if (result.rss && result.rss.$ && result.rss.$.version && result.rss.$.version.match(/^2/)) {
                    feed = this.buildRSS2(result);
                } else if (result['rdf:RDF']) {
                    feed = this.buildRSS1(result);
                } else if (result.rss && result.rss.$ && result.rss.$.version && result.rss.$.version.match(/0\.9/)) {
                    feed = this.buildRSS0_9(result);
                } else if (result.rss && this.options.defaultRSS) {
                    switch(this.options.defaultRSS){
                        case 0.9:
                            feed = this.buildRSS0_9(result);
                            break;
                        case 1:
                            feed = this.buildRSS1(result);
                            break;
                        case 2:
                            feed = this.buildRSS2(result);
                            break;
                        default:
                            return reject(new Error("default RSS version not recognized."));
                    }
                } else {
                    return reject(new Error("Feed not recognized as RSS 1 or 2."));
                }
                resolve(feed);
            });
        });
        prom = utils.maybePromisify(callback, prom);
        return prom;
    }
    parseURL(feedUrl, callback, redirectCount = 0) {
        let xml = '';
        let get = feedUrl.indexOf('https') === 0 ? https.get : http.get;
        let urlParts = url.parse(feedUrl);
        let headers = Object.assign({}, DEFAULT_HEADERS, this.options.headers);
        let timeout = null;
        let prom = new Promise((resolve, reject)=>{
            const requestOpts = Object.assign({
                headers
            }, urlParts, this.options.requestOptions);
            let req = get(requestOpts, (res)=>{
                if (this.options.maxRedirects && res.statusCode >= 300 && res.statusCode < 400 && res.headers['location']) {
                    if (redirectCount === this.options.maxRedirects) {
                        return reject(new Error("Too many redirects"));
                    } else {
                        const newLocation = url.resolve(feedUrl, res.headers['location']);
                        return this.parseURL(newLocation, null, redirectCount + 1).then(resolve, reject);
                    }
                } else if (res.statusCode >= 300) {
                    return reject(new Error("Status code " + res.statusCode));
                }
                let encoding = utils.getEncodingFromContentType(res.headers['content-type']);
                res.setEncoding(encoding);
                res.on('data', (chunk)=>{
                    xml += chunk;
                });
                res.on('end', ()=>{
                    return this.parseString(xml).then(resolve, reject);
                });
            });
            req.on('error', reject);
            timeout = setTimeout(()=>{
                return reject(new Error("Request timed out after " + this.options.timeout + "ms"));
            }, this.options.timeout);
        }).then((data)=>{
            clearTimeout(timeout);
            return Promise.resolve(data);
        }, (e)=>{
            clearTimeout(timeout);
            return Promise.reject(e);
        });
        prom = utils.maybePromisify(callback, prom);
        return prom;
    }
    buildAtomFeed(xmlObj) {
        let feed = {
            items: []
        };
        utils.copyFromXML(xmlObj.feed, feed, this.options.customFields.feed);
        if (xmlObj.feed.link) {
            feed.link = utils.getLink(xmlObj.feed.link, 'alternate', 0);
            feed.feedUrl = utils.getLink(xmlObj.feed.link, 'self', 1);
        }
        if (xmlObj.feed.title) {
            let title = xmlObj.feed.title[0] || '';
            if (title._) title = title._;
            if (title) feed.title = title;
        }
        if (xmlObj.feed.updated) {
            feed.lastBuildDate = xmlObj.feed.updated[0];
        }
        feed.items = (xmlObj.feed.entry || []).map((entry)=>this.parseItemAtom(entry));
        return feed;
    }
    parseItemAtom(entry) {
        let item = {};
        utils.copyFromXML(entry, item, this.options.customFields.item);
        if (entry.title) {
            let title = entry.title[0] || '';
            if (title._) title = title._;
            if (title) item.title = title;
        }
        if (entry.link && entry.link.length) {
            item.link = utils.getLink(entry.link, 'alternate', 0);
        }
        if (entry.published && entry.published.length && entry.published[0].length) item.pubDate = new Date(entry.published[0]).toISOString();
        if (!item.pubDate && entry.updated && entry.updated.length && entry.updated[0].length) item.pubDate = new Date(entry.updated[0]).toISOString();
        if (entry.author && entry.author.length && entry.author[0].name && entry.author[0].name.length) item.author = entry.author[0].name[0];
        if (entry.content && entry.content.length) {
            item.content = utils.getContent(entry.content[0]);
            item.contentSnippet = utils.getSnippet(item.content);
        }
        if (entry.summary && entry.summary.length) {
            item.summary = utils.getContent(entry.summary[0]);
        }
        if (entry.id) {
            item.id = entry.id[0];
        }
        this.setISODate(item);
        return item;
    }
    buildRSS0_9(xmlObj) {
        var channel = xmlObj.rss.channel[0];
        var items = channel.item;
        return this.buildRSS(channel, items);
    }
    buildRSS1(xmlObj) {
        xmlObj = xmlObj['rdf:RDF'];
        let channel = xmlObj.channel[0];
        let items = xmlObj.item;
        return this.buildRSS(channel, items);
    }
    buildRSS2(xmlObj) {
        let channel = xmlObj.rss.channel[0];
        let items = channel.item;
        let feed = this.buildRSS(channel, items);
        if (xmlObj.rss.$ && xmlObj.rss.$['xmlns:itunes']) {
            this.decorateItunes(feed, channel);
        }
        return feed;
    }
    buildRSS(channel, items) {
        items = items || [];
        let feed = {
            items: []
        };
        let feedFields = fields.feed.concat(this.options.customFields.feed);
        let itemFields = fields.item.concat(this.options.customFields.item);
        if (channel['atom:link'] && channel['atom:link'][0] && channel['atom:link'][0].$) {
            feed.feedUrl = channel['atom:link'][0].$.href;
        }
        if (channel.image && channel.image[0] && channel.image[0].url) {
            feed.image = {};
            let image = channel.image[0];
            if (image.link) feed.image.link = image.link[0];
            if (image.url) feed.image.url = image.url[0];
            if (image.title) feed.image.title = image.title[0];
            if (image.width) feed.image.width = image.width[0];
            if (image.height) feed.image.height = image.height[0];
        }
        const paginationLinks = this.generatePaginationLinks(channel);
        if (Object.keys(paginationLinks).length) {
            feed.paginationLinks = paginationLinks;
        }
        utils.copyFromXML(channel, feed, feedFields);
        feed.items = items.map((xmlItem)=>this.parseItemRss(xmlItem, itemFields));
        return feed;
    }
    parseItemRss(xmlItem, itemFields) {
        let item = {};
        utils.copyFromXML(xmlItem, item, itemFields);
        if (xmlItem.enclosure) {
            item.enclosure = xmlItem.enclosure[0].$;
        }
        if (xmlItem.description) {
            item.content = utils.getContent(xmlItem.description[0]);
            item.contentSnippet = utils.getSnippet(item.content);
        }
        if (xmlItem.guid) {
            item.guid = xmlItem.guid[0];
            if (item.guid._) item.guid = item.guid._;
        }
        if (xmlItem.$ && xmlItem.$['rdf:about']) {
            item['rdf:about'] = xmlItem.$['rdf:about'];
        }
        if (xmlItem.category) item.categories = xmlItem.category;
        this.setISODate(item);
        return item;
    }
    /**
   * Add iTunes specific fields from XML to extracted JSON
   *
   * @access public
   * @param {object} feed extracted
   * @param {object} channel parsed XML
   */ decorateItunes(feed, channel) {
        let items = channel.item || [];
        let categories = [];
        feed.itunes = {};
        if (channel['itunes:owner']) {
            let owner = {};
            if (channel['itunes:owner'][0]['itunes:name']) {
                owner.name = channel['itunes:owner'][0]['itunes:name'][0];
            }
            if (channel['itunes:owner'][0]['itunes:email']) {
                owner.email = channel['itunes:owner'][0]['itunes:email'][0];
            }
            feed.itunes.owner = owner;
        }
        if (channel['itunes:image']) {
            let image;
            let hasImageHref = channel['itunes:image'][0] && channel['itunes:image'][0].$ && channel['itunes:image'][0].$.href;
            image = hasImageHref ? channel['itunes:image'][0].$.href : null;
            if (image) {
                feed.itunes.image = image;
            }
        }
        if (channel['itunes:category']) {
            const categoriesWithSubs = channel['itunes:category'].map((category)=>{
                return {
                    name: category && category.$ && category.$.text,
                    subs: category['itunes:category'] ? category['itunes:category'].map((subcategory)=>({
                            name: subcategory && subcategory.$ && subcategory.$.text
                        })) : null
                };
            });
            feed.itunes.categories = categoriesWithSubs.map((category)=>category.name);
            feed.itunes.categoriesWithSubs = categoriesWithSubs;
        }
        if (channel['itunes:keywords']) {
            if (channel['itunes:keywords'].length > 1) {
                feed.itunes.keywords = channel['itunes:keywords'].map((keyword)=>keyword && keyword.$ && keyword.$.text);
            } else {
                let keywords = channel['itunes:keywords'][0];
                if (keywords && typeof keywords._ === 'string') {
                    keywords = keywords._;
                }
                if (keywords && keywords.$ && keywords.$.text) {
                    feed.itunes.keywords = keywords.$.text.split(',');
                } else if (typeof keywords === "string") {
                    feed.itunes.keywords = keywords.split(',');
                }
            }
        }
        utils.copyFromXML(channel, feed.itunes, fields.podcastFeed);
        items.forEach((item, index)=>{
            let entry = feed.items[index];
            entry.itunes = {};
            utils.copyFromXML(item, entry.itunes, fields.podcastItem);
            let image = item['itunes:image'];
            if (image && image[0] && image[0].$ && image[0].$.href) {
                entry.itunes.image = image[0].$.href;
            }
        });
    }
    setISODate(item) {
        let date = item.pubDate || item.date;
        if (date) {
            try {
                item.isoDate = new Date(date.trim()).toISOString();
            } catch (e) {
            // Ignore bad date format
            }
        }
    }
    /**
   * Generates a pagination object where the rel attribute is the key and href attribute is the value
   *  { self: 'self-url', first: 'first-url', ...  }
   *
   * @access private
   * @param {Object} channel parsed XML
   * @returns {Object}
   */ generatePaginationLinks(channel) {
        if (!channel['atom:link']) {
            return {};
        }
        const paginationRelAttributes = [
            'self',
            'first',
            'next',
            'prev',
            'last'
        ];
        return channel['atom:link'].reduce((paginationLinks, link)=>{
            if (!link.$ || !paginationRelAttributes.includes(link.$.rel)) {
                return paginationLinks;
            }
            paginationLinks[link.$.rel] = link.$.href;
            return paginationLinks;
        }, {});
    }
}
module.exports = Parser;
}),
"[project]/learn-next/final/node_modules/rss-parser/index.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/learn-next/final/node_modules/rss-parser/lib/parser.js [app-rsc] (ecmascript)");
}),
"[project]/learn-next/final/node_modules/lucide-react/dist/esm/icons/rss.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>Rss
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/learn-next/final/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-rsc] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M4 11a9 9 0 0 1 9 9",
            key: "pv89mb"
        }
    ],
    [
        "path",
        {
            d: "M4 4a16 16 0 0 1 16 16",
            key: "k0647b"
        }
    ],
    [
        "circle",
        {
            cx: "5",
            cy: "19",
            r: "1",
            key: "bfqh0e"
        }
    ]
];
const Rss = (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])("rss", __iconNode);
;
 //# sourceMappingURL=rss.js.map
}),
"[project]/learn-next/final/node_modules/lucide-react/dist/esm/icons/rss.js [app-rsc] (ecmascript) <export default as Rss>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Rss",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rss$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rss$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/learn-next/final/node_modules/lucide-react/dist/esm/icons/rss.js [app-rsc] (ecmascript)");
}),
"[project]/learn-next/final/node_modules/next/dist/esm/build/templates/app-page.js?page=/page { GLOBAL_ERROR_MODULE => \"[project]/learn-next/final/node_modules/next/dist/client/components/builtin/global-error.js [app-rsc] (ecmascript, Next.js Server Component)\", MODULE_0 => \"[project]/learn-next/final/src/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)\", MODULE_1 => \"[project]/learn-next/final/node_modules/next/dist/client/components/builtin/not-found.js [app-rsc] (ecmascript, Next.js Server Component)\", MODULE_2 => \"[project]/learn-next/final/node_modules/next/dist/client/components/builtin/forbidden.js [app-rsc] (ecmascript, Next.js Server Component)\", MODULE_3 => \"[project]/learn-next/final/node_modules/next/dist/client/components/builtin/unauthorized.js [app-rsc] (ecmascript, Next.js Server Component)\", MODULE_4 => \"[project]/learn-next/final/node_modules/next/dist/client/components/builtin/global-error.js [app-rsc] (ecmascript, Next.js Server Component)\", MODULE_5 => \"[project]/learn-next/final/src/app/page.tsx [app-rsc] (ecmascript, Next.js Server Component)\" } [app-rsc] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__next_app__",
    ()=>__next_app__,
    "handler",
    ()=>handler,
    "routeModule",
    ()=>routeModule
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$module$2e$compiled$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/learn-next/final/node_modules/next/dist/esm/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$route$2d$kind$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__ = __turbopack_context__.i("[project]/learn-next/final/node_modules/next/dist/esm/server/route-kind.js [app-rsc] (ecmascript, Next.js server utility)");
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$instrumentation$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/learn-next/final/node_modules/next/dist/esm/server/instrumentation/utils.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$trace$2f$tracer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/learn-next/final/node_modules/next/dist/esm/server/lib/trace/tracer.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2d$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/learn-next/final/node_modules/next/dist/esm/server/request-meta.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$trace$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/learn-next/final/node_modules/next/dist/esm/server/lib/trace/constants.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$interop$2d$default$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/learn-next/final/node_modules/next/dist/esm/server/app-render/interop-default.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$strip$2d$flight$2d$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/learn-next/final/node_modules/next/dist/esm/server/app-render/strip-flight-headers.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$base$2d$http$2f$node$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/learn-next/final/node_modules/next/dist/esm/server/base-http/node.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$experimental$2f$ppr$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/learn-next/final/node_modules/next/dist/esm/server/lib/experimental/ppr.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2f$fallback$2d$params$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/learn-next/final/node_modules/next/dist/esm/server/request/fallback-params.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$encryption$2d$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/learn-next/final/node_modules/next/dist/esm/server/app-render/encryption-utils.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$streaming$2d$metadata$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/learn-next/final/node_modules/next/dist/esm/server/lib/streaming-metadata.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$action$2d$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/learn-next/final/node_modules/next/dist/esm/server/app-render/action-utils.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$app$2d$paths$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/learn-next/final/node_modules/next/dist/esm/shared/lib/router/utils/app-paths.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$server$2d$action$2d$request$2d$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/learn-next/final/node_modules/next/dist/esm/server/lib/server-action-request-meta.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$app$2d$router$2d$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/learn-next/final/node_modules/next/dist/esm/client/components/app-router-headers.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$is$2d$bot$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/learn-next/final/node_modules/next/dist/esm/shared/lib/router/utils/is-bot.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$response$2d$cache$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/learn-next/final/node_modules/next/dist/esm/server/response-cache/index.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$response$2d$cache$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/learn-next/final/node_modules/next/dist/esm/server/response-cache/types.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$fallback$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/learn-next/final/node_modules/next/dist/esm/lib/fallback.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$render$2d$result$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/learn-next/final/node_modules/next/dist/esm/server/render-result.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/learn-next/final/node_modules/next/dist/esm/lib/constants.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$stream$2d$utils$2f$encoded$2d$tags$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/learn-next/final/node_modules/next/dist/esm/server/stream-utils/encoded-tags.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$send$2d$payload$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/learn-next/final/node_modules/next/dist/esm/server/send-payload.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$next$2f$dist$2f$shared$2f$lib$2f$no$2d$fallback$2d$error$2e$external$2e$js__$5b$external$5d$__$28$next$2f$dist$2f$shared$2f$lib$2f$no$2d$fallback$2d$error$2e$external$2e$js$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$builtin$2f$global$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29$__ = __turbopack_context__.i("[project]/learn-next/final/node_modules/next/dist/client/components/builtin/global-error.js [app-rsc] (ecmascript, Next.js Server Component)");
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/learn-next/final/node_modules/next/dist/esm/server/app-render/entry-base.js [app-rsc] (ecmascript, Next.js server utility) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__ = __turbopack_context__.i("[project]/learn-next/final/node_modules/next/dist/esm/server/app-render/entry-base.js [app-rsc] (ecmascript, Next.js server utility)");
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$redirect$2d$status$2d$code$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/learn-next/final/node_modules/next/dist/esm/client/components/redirect-status-code.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$invariant$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/learn-next/final/node_modules/next/dist/esm/shared/lib/invariant-error.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$scheduler$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/learn-next/final/node_modules/next/dist/esm/lib/scheduler.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$interception$2d$routes$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/learn-next/final/node_modules/next/dist/esm/shared/lib/router/utils/interception-routes.js [app-rsc] (ecmascript)");
const __TURBOPACK__layout__$23$0__ = ()=>__turbopack_context__.r("[project]/learn-next/final/src/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)");
const __TURBOPACK__not$2d$found__$23$1__ = ()=>__turbopack_context__.r("[project]/learn-next/final/node_modules/next/dist/client/components/builtin/not-found.js [app-rsc] (ecmascript, Next.js Server Component)");
const __TURBOPACK__forbidden__$23$2__ = ()=>__turbopack_context__.r("[project]/learn-next/final/node_modules/next/dist/client/components/builtin/forbidden.js [app-rsc] (ecmascript, Next.js Server Component)");
const __TURBOPACK__unauthorized__$23$3__ = ()=>__turbopack_context__.r("[project]/learn-next/final/node_modules/next/dist/client/components/builtin/unauthorized.js [app-rsc] (ecmascript, Next.js Server Component)");
const __TURBOPACK__global$2d$error__$23$4__ = ()=>__turbopack_context__.r("[project]/learn-next/final/node_modules/next/dist/client/components/builtin/global-error.js [app-rsc] (ecmascript, Next.js Server Component)");
const __TURBOPACK__page__$23$5__ = ()=>__turbopack_context__.r("[project]/learn-next/final/src/app/page.tsx [app-rsc] (ecmascript, Next.js Server Component)");
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
// We inject the tree and pages here so that we can use them in the route
// module.
const tree = [
    "",
    {
        "children": [
            "__PAGE__",
            {},
            {
                metadata: {},
                "page": [
                    __TURBOPACK__page__$23$5__,
                    "[project]/learn-next/final/src/app/page.tsx"
                ]
            }
        ]
    },
    {
        "layout": [
            __TURBOPACK__layout__$23$0__,
            "[project]/learn-next/final/src/app/layout.tsx"
        ],
        "not-found": [
            __TURBOPACK__not$2d$found__$23$1__,
            "[project]/learn-next/final/node_modules/next/dist/client/components/builtin/not-found.js"
        ],
        "forbidden": [
            __TURBOPACK__forbidden__$23$2__,
            "[project]/learn-next/final/node_modules/next/dist/client/components/builtin/forbidden.js"
        ],
        "unauthorized": [
            __TURBOPACK__unauthorized__$23$3__,
            "[project]/learn-next/final/node_modules/next/dist/client/components/builtin/unauthorized.js"
        ],
        "global-error": [
            __TURBOPACK__global$2d$error__$23$4__,
            "[project]/learn-next/final/node_modules/next/dist/client/components/builtin/global-error.js"
        ]
    }
];
;
;
const __next_app_require__ = __turbopack_context__.r.bind(__turbopack_context__);
const __next_app_load_chunk__ = __turbopack_context__.l.bind(__turbopack_context__);
const __next_app__ = {
    require: __next_app_require__,
    loadChunk: __next_app_load_chunk__
};
;
;
;
;
;
;
const routeModule = new __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$module$2e$compiled$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AppPageRouteModule"]({
    definition: {
        kind: __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$route$2d$kind$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["RouteKind"].APP_PAGE,
        page: "/page",
        pathname: "/",
        // The following aren't used in production.
        bundlePath: '',
        filename: '',
        appPaths: []
    },
    userland: {
        loaderTree: tree
    },
    distDir: ("TURBOPACK compile-time value", ".next/dev") || '',
    relativeProjectDir: ("TURBOPACK compile-time value", "") || ''
});
async function handler(req, res, ctx) {
    var _this;
    if (routeModule.isDev) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2d$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addRequestMeta"])(req, 'devRequestTimingInternalsEnd', process.hrtime.bigint());
    }
    let srcPage = "/page";
    // turbopack doesn't normalize `/index` in the page name
    // so we need to to process dynamic routes properly
    // TODO: fix turbopack providing differing value from webpack
    if ("TURBOPACK compile-time truthy", 1) {
        srcPage = srcPage.replace(/\/index$/, '') || '/';
    } else if (srcPage === '/index') {
        // we always normalize /index specifically
        srcPage = '/';
    }
    const multiZoneDraftMode = ("TURBOPACK compile-time value", false);
    const isMinimalMode = Boolean(("TURBOPACK compile-time value", false) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2d$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getRequestMeta"])(req, 'minimalMode'));
    const prepareResult = await routeModule.prepare(req, res, {
        srcPage,
        multiZoneDraftMode
    });
    if (!prepareResult) {
        res.statusCode = 400;
        res.end('Bad Request');
        ctx.waitUntil == null ? void 0 : ctx.waitUntil.call(ctx, Promise.resolve());
        return null;
    }
    const { buildId, query, params, pageIsDynamic, buildManifest, nextFontManifest, reactLoadableManifest, serverActionsManifest, clientReferenceManifest, subresourceIntegrityManifest, prerenderManifest, isDraftMode, resolvedPathname, revalidateOnlyGenerated, routerServerContext, nextConfig, parsedUrl, interceptionRoutePatterns } = prepareResult;
    const normalizedSrcPage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$app$2d$paths$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["normalizeAppPath"])(srcPage);
    let { isOnDemandRevalidate } = prepareResult;
    // We use the resolvedPathname instead of the parsedUrl.pathname because it
    // is not rewritten as resolvedPathname is. This will ensure that the correct
    // prerender info is used instead of using the original pathname as the
    // source. If however PPR is enabled and cacheComponents is disabled, we
    // treat the pathname as dynamic. Currently, there's a bug in the PPR
    // implementation that incorrectly leaves %%drp placeholders in the output of
    // parallel routes. This is addressed with cacheComponents.
    const prerenderInfo = nextConfig.experimental.ppr && !nextConfig.cacheComponents && (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$interception$2d$routes$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isInterceptionRouteAppPath"])(resolvedPathname) ? null : routeModule.match(resolvedPathname, prerenderManifest);
    const isPrerendered = !!prerenderManifest.routes[resolvedPathname];
    const userAgent = req.headers['user-agent'] || '';
    const botType = (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$is$2d$bot$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getBotType"])(userAgent);
    const isHtmlBot = (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$streaming$2d$metadata$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isHtmlBotRequest"])(req);
    /**
   * If true, this indicates that the request being made is for an app
   * prefetch request.
   */ const isPrefetchRSCRequest = (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2d$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getRequestMeta"])(req, 'isPrefetchRSCRequest') ?? req.headers[__TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$app$2d$router$2d$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["NEXT_ROUTER_PREFETCH_HEADER"]] === '1' // exclude runtime prefetches, which use '2'
    ;
    // NOTE: Don't delete headers[RSC] yet, it still needs to be used in renderToHTML later
    const isRSCRequest = (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2d$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getRequestMeta"])(req, 'isRSCRequest') ?? Boolean(req.headers[__TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$app$2d$router$2d$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["RSC_HEADER"]]);
    const isPossibleServerAction = (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$server$2d$action$2d$request$2d$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getIsPossibleServerAction"])(req);
    /**
   * If the route being rendered is an app page, and the ppr feature has been
   * enabled, then the given route _could_ support PPR.
   */ const couldSupportPPR = (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$experimental$2f$ppr$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["checkIsAppPPREnabled"])(nextConfig.experimental.ppr);
    // When enabled, this will allow the use of the `?__nextppronly` query to
    // enable debugging of the static shell.
    const hasDebugStaticShellQuery = ("TURBOPACK compile-time value", false) === '1' && typeof query.__nextppronly !== 'undefined' && couldSupportPPR;
    // When enabled, this will allow the use of the `?__nextppronly` query
    // to enable debugging of the fallback shell.
    const hasDebugFallbackShellQuery = hasDebugStaticShellQuery && query.__nextppronly === 'fallback';
    // This page supports PPR if it is marked as being `PARTIALLY_STATIC` in the
    // prerender manifest and this is an app page.
    const isRoutePPREnabled = couldSupportPPR && (((_this = prerenderManifest.routes[normalizedSrcPage] ?? prerenderManifest.dynamicRoutes[normalizedSrcPage]) == null ? void 0 : _this.renderingMode) === 'PARTIALLY_STATIC' || // Ideally we'd want to check the appConfig to see if this page has PPR
    // enabled or not, but that would require plumbing the appConfig through
    // to the server during development. We assume that the page supports it
    // but only during development.
    hasDebugStaticShellQuery && (routeModule.isDev === true || (routerServerContext == null ? void 0 : routerServerContext.experimentalTestProxy) === true));
    const isDebugStaticShell = hasDebugStaticShellQuery && isRoutePPREnabled;
    // We should enable debugging dynamic accesses when the static shell
    // debugging has been enabled and we're also in development mode.
    const isDebugDynamicAccesses = isDebugStaticShell && routeModule.isDev === true;
    const isDebugFallbackShell = hasDebugFallbackShellQuery && isRoutePPREnabled;
    // If we're in minimal mode, then try to get the postponed information from
    // the request metadata. If available, use it for resuming the postponed
    // render.
    const minimalPostponed = isRoutePPREnabled ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2d$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getRequestMeta"])(req, 'postponed') : undefined;
    // If PPR is enabled, and this is a RSC request (but not a prefetch), then
    // we can use this fact to only generate the flight data for the request
    // because we can't cache the HTML (as it's also dynamic).
    const isDynamicRSCRequest = isRoutePPREnabled && isRSCRequest && !isPrefetchRSCRequest;
    // Need to read this before it's stripped by stripFlightHeaders. We don't
    // need to transfer it to the request meta because it's only read
    // within this function; the static segment data should have already been
    // generated, so we will always either return a static response or a 404.
    const segmentPrefetchHeader = (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2d$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getRequestMeta"])(req, 'segmentPrefetchRSCRequest');
    // TODO: investigate existing bug with shouldServeStreamingMetadata always
    // being true for a revalidate due to modifying the base-server this.renderOpts
    // when fixing this to correct logic it causes hydration issue since we set
    // serveStreamingMetadata to true during export
    const serveStreamingMetadata = isHtmlBot && isRoutePPREnabled ? false : !userAgent ? true : (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$streaming$2d$metadata$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["shouldServeStreamingMetadata"])(userAgent, nextConfig.htmlLimitedBots);
    const isSSG = Boolean((prerenderInfo || isPrerendered || prerenderManifest.routes[normalizedSrcPage]) && // If this is a html bot request and PPR is enabled, then we don't want
    // to serve a static response.
    !(isHtmlBot && isRoutePPREnabled));
    // When a page supports cacheComponents, we can support RDC for Navigations
    const supportsRDCForNavigations = isRoutePPREnabled && nextConfig.cacheComponents === true;
    // In development, we always want to generate dynamic HTML.
    const supportsDynamicResponse = // a data request, in which case we only produce static HTML.
    routeModule.isDev === true || // If this is not SSG or does not have static paths, then it supports
    // dynamic HTML.
    !isSSG || // If this request has provided postponed data, it supports dynamic
    // HTML.
    typeof minimalPostponed === 'string' || // If this handler supports onCacheEntryV2, then we can only support
    // dynamic responses if it's a dynamic RSC request and not in minimal mode. If it
    // doesn't support it we must fallback to the default behavior.
    (supportsRDCForNavigations && (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2d$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getRequestMeta"])(req, 'onCacheEntryV2') ? // RSC request, we'll pass the minimal postponed data to the render
    // which will trigger the `supportsDynamicResponse` to be true.
    isDynamicRSCRequest && !isMinimalMode : isDynamicRSCRequest);
    // When html bots request PPR page, perform the full dynamic rendering.
    const shouldWaitOnAllReady = isHtmlBot && isRoutePPREnabled;
    let ssgCacheKey = null;
    if (!isDraftMode && isSSG && !supportsDynamicResponse && !isPossibleServerAction && !minimalPostponed && !isDynamicRSCRequest) {
        ssgCacheKey = resolvedPathname;
    }
    // the staticPathKey differs from ssgCacheKey since
    // ssgCacheKey is null in dev since we're always in "dynamic"
    // mode in dev to bypass the cache, but we still need to honor
    // dynamicParams = false in dev mode
    let staticPathKey = ssgCacheKey;
    if (!staticPathKey && routeModule.isDev) {
        staticPathKey = resolvedPathname;
    }
    // If this is a request for an app path that should be statically generated
    // and we aren't in the edge runtime, strip the flight headers so it will
    // generate the static response.
    if (!routeModule.isDev && !isDraftMode && isSSG && isRSCRequest && !isDynamicRSCRequest) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$strip$2d$flight$2d$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["stripFlightHeaders"])(req.headers);
    }
    const ComponentMod = {
        ...__TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__,
        tree,
        GlobalError: __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$builtin$2f$global$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29$__["default"],
        handler,
        routeModule,
        __next_app__
    };
    // Before rendering (which initializes component tree modules), we have to
    // set the reference manifests to our global store so Server Action's
    // encryption util can access to them at the top level of the page module.
    if (serverActionsManifest && clientReferenceManifest) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$encryption$2d$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["setReferenceManifestsSingleton"])({
            page: srcPage,
            clientReferenceManifest,
            serverActionsManifest,
            serverModuleMap: (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$action$2d$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createServerModuleMap"])({
                serverActionsManifest
            })
        });
    }
    const method = req.method || 'GET';
    const tracer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$trace$2f$tracer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getTracer"])();
    const activeSpan = tracer.getActiveScopeSpan();
    const render404 = async ()=>{
        // TODO: should route-module itself handle rendering the 404
        if (routerServerContext == null ? void 0 : routerServerContext.render404) {
            await routerServerContext.render404(req, res, parsedUrl, false);
        } else {
            res.end('This page could not be found');
        }
        return null;
    };
    try {
        const varyHeader = routeModule.getVaryHeader(resolvedPathname, interceptionRoutePatterns);
        res.setHeader('Vary', varyHeader);
        const invokeRouteModule = async (span, context)=>{
            const nextReq = new __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$base$2d$http$2f$node$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["NodeNextRequest"](req);
            const nextRes = new __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$base$2d$http$2f$node$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["NodeNextResponse"](res);
            return routeModule.render(nextReq, nextRes, context).finally(()=>{
                if (!span) return;
                span.setAttributes({
                    'http.status_code': res.statusCode,
                    'next.rsc': false
                });
                const rootSpanAttributes = tracer.getRootSpanAttributes();
                // We were unable to get attributes, probably OTEL is not enabled
                if (!rootSpanAttributes) {
                    return;
                }
                if (rootSpanAttributes.get('next.span_type') !== __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$trace$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["BaseServerSpan"].handleRequest) {
                    console.warn(`Unexpected root span type '${rootSpanAttributes.get('next.span_type')}'. Please report this Next.js issue https://github.com/vercel/next.js`);
                    return;
                }
                const route = rootSpanAttributes.get('next.route');
                if (route) {
                    const name = `${method} ${route}`;
                    span.setAttributes({
                        'next.route': route,
                        'http.route': route,
                        'next.span_name': name
                    });
                    span.updateName(name);
                } else {
                    span.updateName(`${method} ${srcPage}`);
                }
            });
        };
        const incrementalCache = (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2d$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getRequestMeta"])(req, 'incrementalCache');
        const doRender = async ({ span, postponed, fallbackRouteParams, forceStaticRender })=>{
            const context = {
                query,
                params,
                page: normalizedSrcPage,
                sharedContext: {
                    buildId
                },
                serverComponentsHmrCache: (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2d$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getRequestMeta"])(req, 'serverComponentsHmrCache'),
                fallbackRouteParams,
                renderOpts: {
                    App: ()=>null,
                    Document: ()=>null,
                    pageConfig: {},
                    ComponentMod,
                    Component: (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$interop$2d$default$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["interopDefault"])(ComponentMod),
                    params,
                    routeModule,
                    page: srcPage,
                    postponed,
                    shouldWaitOnAllReady,
                    serveStreamingMetadata,
                    supportsDynamicResponse: typeof postponed === 'string' || supportsDynamicResponse,
                    buildManifest,
                    nextFontManifest,
                    reactLoadableManifest,
                    subresourceIntegrityManifest,
                    serverActionsManifest,
                    clientReferenceManifest,
                    setCacheStatus: routerServerContext == null ? void 0 : routerServerContext.setCacheStatus,
                    setIsrStatus: routerServerContext == null ? void 0 : routerServerContext.setIsrStatus,
                    setReactDebugChannel: routerServerContext == null ? void 0 : routerServerContext.setReactDebugChannel,
                    dir: ("TURBOPACK compile-time truthy", 1) ? require('path').join(/* turbopackIgnore: true */ process.cwd(), routeModule.relativeProjectDir) : "TURBOPACK unreachable",
                    isDraftMode,
                    botType,
                    isOnDemandRevalidate,
                    isPossibleServerAction,
                    assetPrefix: nextConfig.assetPrefix,
                    nextConfigOutput: nextConfig.output,
                    crossOrigin: nextConfig.crossOrigin,
                    trailingSlash: nextConfig.trailingSlash,
                    images: nextConfig.images,
                    previewProps: prerenderManifest.preview,
                    deploymentId: nextConfig.deploymentId,
                    enableTainting: nextConfig.experimental.taint,
                    htmlLimitedBots: nextConfig.htmlLimitedBots,
                    reactMaxHeadersLength: nextConfig.reactMaxHeadersLength,
                    multiZoneDraftMode,
                    incrementalCache,
                    cacheLifeProfiles: nextConfig.cacheLife,
                    basePath: nextConfig.basePath,
                    serverActions: nextConfig.experimental.serverActions,
                    ...isDebugStaticShell || isDebugDynamicAccesses || isDebugFallbackShell ? {
                        nextExport: true,
                        supportsDynamicResponse: false,
                        isStaticGeneration: true,
                        isDebugDynamicAccesses: isDebugDynamicAccesses
                    } : {},
                    cacheComponents: Boolean(nextConfig.cacheComponents),
                    experimental: {
                        isRoutePPREnabled,
                        expireTime: nextConfig.expireTime,
                        staleTimes: nextConfig.experimental.staleTimes,
                        clientSegmentCache: Boolean(nextConfig.experimental.clientSegmentCache),
                        dynamicOnHover: Boolean(nextConfig.experimental.dynamicOnHover),
                        inlineCss: Boolean(nextConfig.experimental.inlineCss),
                        authInterrupts: Boolean(nextConfig.experimental.authInterrupts),
                        clientTraceMetadata: nextConfig.experimental.clientTraceMetadata || [],
                        clientParamParsingOrigins: nextConfig.experimental.clientParamParsingOrigins
                    },
                    waitUntil: ctx.waitUntil,
                    onClose: (cb)=>{
                        res.on('close', cb);
                    },
                    onAfterTaskError: ()=>{},
                    onInstrumentationRequestError: (error, _request, errorContext)=>routeModule.onRequestError(req, error, errorContext, routerServerContext),
                    err: (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2d$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getRequestMeta"])(req, 'invokeError'),
                    dev: routeModule.isDev
                }
            };
            if (isDebugStaticShell || isDebugDynamicAccesses) {
                context.renderOpts.nextExport = true;
                context.renderOpts.supportsDynamicResponse = false;
                context.renderOpts.isDebugDynamicAccesses = isDebugDynamicAccesses;
            }
            // When we're revalidating in the background, we should not allow dynamic
            // responses.
            if (forceStaticRender) {
                context.renderOpts.supportsDynamicResponse = false;
            }
            const result = await invokeRouteModule(span, context);
            const { metadata } = result;
            const { cacheControl, headers = {}, fetchTags: cacheTags, fetchMetrics } = metadata;
            if (cacheTags) {
                headers[__TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["NEXT_CACHE_TAGS_HEADER"]] = cacheTags;
            }
            // Pull any fetch metrics from the render onto the request.
            ;
            req.fetchMetrics = fetchMetrics;
            // we don't throw static to dynamic errors in dev as isSSG
            // is a best guess in dev since we don't have the prerender pass
            // to know whether the path is actually static or not
            if (isSSG && (cacheControl == null ? void 0 : cacheControl.revalidate) === 0 && !routeModule.isDev && !isRoutePPREnabled) {
                const staticBailoutInfo = metadata.staticBailoutInfo;
                const err = Object.defineProperty(new Error(`Page changed from static to dynamic at runtime ${resolvedPathname}${(staticBailoutInfo == null ? void 0 : staticBailoutInfo.description) ? `, reason: ${staticBailoutInfo.description}` : ``}` + `\nsee more here https://nextjs.org/docs/messages/app-static-to-dynamic-error`), "__NEXT_ERROR_CODE", {
                    value: "E132",
                    enumerable: false,
                    configurable: true
                });
                if (staticBailoutInfo == null ? void 0 : staticBailoutInfo.stack) {
                    const stack = staticBailoutInfo.stack;
                    err.stack = err.message + stack.substring(stack.indexOf('\n'));
                }
                throw err;
            }
            return {
                value: {
                    kind: __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$response$2d$cache$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CachedRouteKind"].APP_PAGE,
                    html: result,
                    headers,
                    rscData: metadata.flightData,
                    postponed: metadata.postponed,
                    status: metadata.statusCode,
                    segmentData: metadata.segmentData
                },
                cacheControl
            };
        };
        const responseGenerator = async ({ hasResolved, previousCacheEntry: previousIncrementalCacheEntry, isRevalidating, span, forceStaticRender = false })=>{
            const isProduction = routeModule.isDev === false;
            const didRespond = hasResolved || res.writableEnded;
            // skip on-demand revalidate if cache is not present and
            // revalidate-if-generated is set
            if (isOnDemandRevalidate && revalidateOnlyGenerated && !previousIncrementalCacheEntry && !isMinimalMode) {
                if (routerServerContext == null ? void 0 : routerServerContext.render404) {
                    await routerServerContext.render404(req, res);
                } else {
                    res.statusCode = 404;
                    res.end('This page could not be found');
                }
                return null;
            }
            let fallbackMode;
            if (prerenderInfo) {
                fallbackMode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$fallback$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["parseFallbackField"])(prerenderInfo.fallback);
            }
            // When serving a HTML bot request, we want to serve a blocking render and
            // not the prerendered page. This ensures that the correct content is served
            // to the bot in the head.
            if (fallbackMode === __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$fallback$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["FallbackMode"].PRERENDER && (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$is$2d$bot$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["isBot"])(userAgent)) {
                if (!isRoutePPREnabled || isHtmlBot) {
                    fallbackMode = __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$fallback$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["FallbackMode"].BLOCKING_STATIC_RENDER;
                }
            }
            if ((previousIncrementalCacheEntry == null ? void 0 : previousIncrementalCacheEntry.isStale) === -1) {
                isOnDemandRevalidate = true;
            }
            // TODO: adapt for PPR
            // only allow on-demand revalidate for fallback: true/blocking
            // or for prerendered fallback: false paths
            if (isOnDemandRevalidate && (fallbackMode !== __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$fallback$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["FallbackMode"].NOT_FOUND || previousIncrementalCacheEntry)) {
                fallbackMode = __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$fallback$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["FallbackMode"].BLOCKING_STATIC_RENDER;
            }
            if (!isMinimalMode && fallbackMode !== __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$fallback$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["FallbackMode"].BLOCKING_STATIC_RENDER && staticPathKey && !didRespond && !isDraftMode && pageIsDynamic && (isProduction || !isPrerendered)) {
                // if the page has dynamicParams: false and this pathname wasn't
                // prerendered trigger the no fallback handling
                if (// getStaticPaths.
                (isProduction || prerenderInfo) && // When fallback isn't present, abort this render so we 404
                fallbackMode === __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$fallback$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["FallbackMode"].NOT_FOUND) {
                    if (nextConfig.experimental.adapterPath) {
                        return await render404();
                    }
                    throw new __TURBOPACK__imported__module__$5b$externals$5d2f$next$2f$dist$2f$shared$2f$lib$2f$no$2d$fallback$2d$error$2e$external$2e$js__$5b$external$5d$__$28$next$2f$dist$2f$shared$2f$lib$2f$no$2d$fallback$2d$error$2e$external$2e$js$2c$__cjs$29$__["NoFallbackError"]();
                }
                // When cacheComponents is enabled, we can use the fallback
                // response if the request is not a dynamic RSC request because the
                // RSC data when this feature flag is enabled does not contain any
                // param references. Without this feature flag enabled, the RSC data
                // contains param references, and therefore we can't use the fallback.
                if (isRoutePPREnabled && (nextConfig.cacheComponents ? !isDynamicRSCRequest : !isRSCRequest)) {
                    const cacheKey = isProduction && typeof (prerenderInfo == null ? void 0 : prerenderInfo.fallback) === 'string' ? prerenderInfo.fallback : normalizedSrcPage;
                    const fallbackRouteParams = // can use the manifest fallback route params.
                    isProduction && (prerenderInfo == null ? void 0 : prerenderInfo.fallbackRouteParams) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2f$fallback$2d$params$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createOpaqueFallbackRouteParams"])(prerenderInfo.fallbackRouteParams) : isDebugFallbackShell ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2f$fallback$2d$params$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getFallbackRouteParams"])(normalizedSrcPage, routeModule) : null;
                    // We use the response cache here to handle the revalidation and
                    // management of the fallback shell.
                    const fallbackResponse = await routeModule.handleResponse({
                        cacheKey,
                        req,
                        nextConfig,
                        routeKind: __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$route$2d$kind$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["RouteKind"].APP_PAGE,
                        isFallback: true,
                        prerenderManifest,
                        isRoutePPREnabled,
                        responseGenerator: async ()=>doRender({
                                span,
                                // We pass `undefined` as rendering a fallback isn't resumed
                                // here.
                                postponed: undefined,
                                fallbackRouteParams,
                                forceStaticRender: false
                            }),
                        waitUntil: ctx.waitUntil,
                        isMinimalMode
                    });
                    // If the fallback response was set to null, then we should return null.
                    if (fallbackResponse === null) return null;
                    // Otherwise, if we did get a fallback response, we should return it.
                    if (fallbackResponse) {
                        // Remove the cache control from the response to prevent it from being
                        // used in the surrounding cache.
                        delete fallbackResponse.cacheControl;
                        return fallbackResponse;
                    }
                }
            }
            // Only requests that aren't revalidating can be resumed. If we have the
            // minimal postponed data, then we should resume the render with it.
            let postponed = !isOnDemandRevalidate && !isRevalidating && minimalPostponed ? minimalPostponed : undefined;
            // If this is a dynamic RSC request, we should use the postponed data from
            // the static render (if available). This ensures that we can utilize the
            // resume data cache (RDC) from the static render to ensure that the data
            // is consistent between the static and dynamic renders.
            if (supportsRDCForNavigations && ("TURBOPACK compile-time value", "nodejs") !== 'edge' && !isMinimalMode && incrementalCache && isDynamicRSCRequest && // We don't typically trigger an on-demand revalidation for dynamic RSC
            // requests, as we're typically revalidating the page in the background
            // instead. However, if the cache entry is stale, we should trigger a
            // background revalidation on dynamic RSC requests. This prevents us
            // from entering an infinite loop of revalidations.
            !forceStaticRender) {
                const incrementalCacheEntry = await incrementalCache.get(resolvedPathname, {
                    kind: __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$response$2d$cache$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["IncrementalCacheKind"].APP_PAGE,
                    isRoutePPREnabled: true,
                    isFallback: false
                });
                // If the cache entry is found, we should use the postponed data from
                // the cache.
                if (incrementalCacheEntry && incrementalCacheEntry.value && incrementalCacheEntry.value.kind === __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$response$2d$cache$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CachedRouteKind"].APP_PAGE) {
                    // CRITICAL: we're assigning the postponed data from the cache entry
                    // here as we're using the RDC to resume the render.
                    postponed = incrementalCacheEntry.value.postponed;
                    // If the cache entry is stale, we should trigger a background
                    // revalidation so that subsequent requests will get a fresh response.
                    if (incrementalCacheEntry && // We want to trigger this flow if the cache entry is stale and if
                    // the requested revalidation flow is either foreground or
                    // background.
                    (incrementalCacheEntry.isStale === -1 || incrementalCacheEntry.isStale === true)) {
                        // We want to schedule this on the next tick to ensure that the
                        // render is not blocked on it.
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$scheduler$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["scheduleOnNextTick"])(async ()=>{
                            const responseCache = routeModule.getResponseCache(req);
                            try {
                                await responseCache.revalidate(resolvedPathname, incrementalCache, isRoutePPREnabled, false, (c)=>responseGenerator({
                                        ...c,
                                        // CRITICAL: we need to set this to true as we're
                                        // revalidating in the background and typically this dynamic
                                        // RSC request is not treated as static.
                                        forceStaticRender: true
                                    }), // previous cache entry here (which is stale) will switch on
                                // isOnDemandRevalidate and break the prerendering.
                                null, hasResolved, ctx.waitUntil);
                            } catch (err) {
                                console.error('Error revalidating the page in the background', err);
                            }
                        });
                    }
                }
            }
            // When we're in minimal mode, if we're trying to debug the static shell,
            // we should just return nothing instead of resuming the dynamic render.
            if ((isDebugStaticShell || isDebugDynamicAccesses) && typeof postponed !== 'undefined') {
                return {
                    cacheControl: {
                        revalidate: 1,
                        expire: undefined
                    },
                    value: {
                        kind: __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$response$2d$cache$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CachedRouteKind"].PAGES,
                        html: __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$render$2d$result$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].EMPTY,
                        pageData: {},
                        headers: undefined,
                        status: undefined
                    }
                };
            }
            const fallbackRouteParams = // can use the manifest fallback route params if we need to render the
            // fallback shell.
            isProduction && (prerenderInfo == null ? void 0 : prerenderInfo.fallbackRouteParams) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2d$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getRequestMeta"])(req, 'renderFallbackShell') ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2f$fallback$2d$params$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createOpaqueFallbackRouteParams"])(prerenderInfo.fallbackRouteParams) : isDebugFallbackShell ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2f$fallback$2d$params$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getFallbackRouteParams"])(normalizedSrcPage, routeModule) : null;
            // Perform the render.
            return doRender({
                span,
                postponed,
                fallbackRouteParams,
                forceStaticRender
            });
        };
        const handleResponse = async (span)=>{
            var _cacheEntry_value, _cachedData_headers;
            const cacheEntry = await routeModule.handleResponse({
                cacheKey: ssgCacheKey,
                responseGenerator: (c)=>responseGenerator({
                        span,
                        ...c
                    }),
                routeKind: __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$route$2d$kind$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["RouteKind"].APP_PAGE,
                isOnDemandRevalidate,
                isRoutePPREnabled,
                req,
                nextConfig,
                prerenderManifest,
                waitUntil: ctx.waitUntil,
                isMinimalMode
            });
            if (isDraftMode) {
                res.setHeader('Cache-Control', 'private, no-cache, no-store, max-age=0, must-revalidate');
            }
            // In dev, we should not cache pages for any reason.
            if (routeModule.isDev) {
                res.setHeader('Cache-Control', 'no-store, must-revalidate');
            }
            if (!cacheEntry) {
                if (ssgCacheKey) {
                    // A cache entry might not be generated if a response is written
                    // in `getInitialProps` or `getServerSideProps`, but those shouldn't
                    // have a cache key. If we do have a cache key but we don't end up
                    // with a cache entry, then either Next.js or the application has a
                    // bug that needs fixing.
                    throw Object.defineProperty(new Error('invariant: cache entry required but not generated'), "__NEXT_ERROR_CODE", {
                        value: "E62",
                        enumerable: false,
                        configurable: true
                    });
                }
                return null;
            }
            if (((_cacheEntry_value = cacheEntry.value) == null ? void 0 : _cacheEntry_value.kind) !== __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$response$2d$cache$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CachedRouteKind"].APP_PAGE) {
                var _cacheEntry_value1;
                throw Object.defineProperty(new Error(`Invariant app-page handler received invalid cache entry ${(_cacheEntry_value1 = cacheEntry.value) == null ? void 0 : _cacheEntry_value1.kind}`), "__NEXT_ERROR_CODE", {
                    value: "E707",
                    enumerable: false,
                    configurable: true
                });
            }
            const didPostpone = typeof cacheEntry.value.postponed === 'string';
            if (isSSG && // We don't want to send a cache header for requests that contain dynamic
            // data. If this is a Dynamic RSC request or wasn't a Prefetch RSC
            // request, then we should set the cache header.
            !isDynamicRSCRequest && (!didPostpone || isPrefetchRSCRequest)) {
                if (!isMinimalMode) {
                    // set x-nextjs-cache header to match the header
                    // we set for the image-optimizer
                    res.setHeader('x-nextjs-cache', isOnDemandRevalidate ? 'REVALIDATED' : cacheEntry.isMiss ? 'MISS' : cacheEntry.isStale ? 'STALE' : 'HIT');
                }
                // Set a header used by the client router to signal the response is static
                // and should respect the `static` cache staleTime value.
                res.setHeader(__TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$app$2d$router$2d$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["NEXT_IS_PRERENDER_HEADER"], '1');
            }
            const { value: cachedData } = cacheEntry;
            // Coerce the cache control parameter from the render.
            let cacheControl;
            // If this is a resume request in minimal mode it is streamed with dynamic
            // content and should not be cached.
            if (minimalPostponed) {
                cacheControl = {
                    revalidate: 0,
                    expire: undefined
                };
            } else if (isDynamicRSCRequest) {
                cacheControl = {
                    revalidate: 0,
                    expire: undefined
                };
            } else if (!routeModule.isDev) {
                // If this is a preview mode request, we shouldn't cache it
                if (isDraftMode) {
                    cacheControl = {
                        revalidate: 0,
                        expire: undefined
                    };
                } else if (!isSSG) {
                    if (!res.getHeader('Cache-Control')) {
                        cacheControl = {
                            revalidate: 0,
                            expire: undefined
                        };
                    }
                } else if (cacheEntry.cacheControl) {
                    // If the cache entry has a cache control with a revalidate value that's
                    // a number, use it.
                    if (typeof cacheEntry.cacheControl.revalidate === 'number') {
                        var _cacheEntry_cacheControl;
                        if (cacheEntry.cacheControl.revalidate < 1) {
                            throw Object.defineProperty(new Error(`Invalid revalidate configuration provided: ${cacheEntry.cacheControl.revalidate} < 1`), "__NEXT_ERROR_CODE", {
                                value: "E22",
                                enumerable: false,
                                configurable: true
                            });
                        }
                        cacheControl = {
                            revalidate: cacheEntry.cacheControl.revalidate,
                            expire: ((_cacheEntry_cacheControl = cacheEntry.cacheControl) == null ? void 0 : _cacheEntry_cacheControl.expire) ?? nextConfig.expireTime
                        };
                    } else {
                        cacheControl = {
                            revalidate: __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CACHE_ONE_YEAR"],
                            expire: undefined
                        };
                    }
                }
            }
            cacheEntry.cacheControl = cacheControl;
            if (typeof segmentPrefetchHeader === 'string' && (cachedData == null ? void 0 : cachedData.kind) === __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$response$2d$cache$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CachedRouteKind"].APP_PAGE && cachedData.segmentData) {
                var _cachedData_headers1;
                // This is a prefetch request issued by the client Segment Cache. These
                // should never reach the application layer (lambda). We should either
                // respond from the cache (HIT) or respond with 204 No Content (MISS).
                // Set a header to indicate that PPR is enabled for this route. This
                // lets the client distinguish between a regular cache miss and a cache
                // miss due to PPR being disabled. In other contexts this header is used
                // to indicate that the response contains dynamic data, but here we're
                // only using it to indicate that the feature is enabled — the segment
                // response itself contains whether the data is dynamic.
                res.setHeader(__TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$app$2d$router$2d$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["NEXT_DID_POSTPONE_HEADER"], '2');
                // Add the cache tags header to the response if it exists and we're in
                // minimal mode while rendering a static page.
                const tags = (_cachedData_headers1 = cachedData.headers) == null ? void 0 : _cachedData_headers1[__TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["NEXT_CACHE_TAGS_HEADER"]];
                if (isMinimalMode && isSSG && tags && typeof tags === 'string') {
                    res.setHeader(__TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["NEXT_CACHE_TAGS_HEADER"], tags);
                }
                const matchedSegment = cachedData.segmentData.get(segmentPrefetchHeader);
                if (matchedSegment !== undefined) {
                    // Cache hit
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$send$2d$payload$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sendRenderResult"])({
                        req,
                        res,
                        generateEtags: nextConfig.generateEtags,
                        poweredByHeader: nextConfig.poweredByHeader,
                        result: __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$render$2d$result$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].fromStatic(matchedSegment, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$app$2d$router$2d$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["RSC_CONTENT_TYPE_HEADER"]),
                        cacheControl: cacheEntry.cacheControl
                    });
                }
                // Cache miss. Either a cache entry for this route has not been generated
                // (which technically should not be possible when PPR is enabled, because
                // at a minimum there should always be a fallback entry) or there's no
                // match for the requested segment. Respond with a 204 No Content. We
                // don't bother to respond with 404, because these requests are only
                // issued as part of a prefetch.
                res.statusCode = 204;
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$send$2d$payload$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sendRenderResult"])({
                    req,
                    res,
                    generateEtags: nextConfig.generateEtags,
                    poweredByHeader: nextConfig.poweredByHeader,
                    result: __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$render$2d$result$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].EMPTY,
                    cacheControl: cacheEntry.cacheControl
                });
            }
            // If there's a callback for `onCacheEntry`, call it with the cache entry
            // and the revalidate options. If we support RDC for Navigations, we
            // prefer the `onCacheEntryV2` callback. Once RDC for Navigations is the
            // default, we can remove the fallback to `onCacheEntry` as
            // `onCacheEntryV2` is now fully supported.
            const onCacheEntry = supportsRDCForNavigations ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2d$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getRequestMeta"])(req, 'onCacheEntryV2') ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2d$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getRequestMeta"])(req, 'onCacheEntry') : (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2d$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getRequestMeta"])(req, 'onCacheEntry');
            if (onCacheEntry) {
                const finished = await onCacheEntry(cacheEntry, {
                    url: (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2d$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getRequestMeta"])(req, 'initURL') ?? req.url
                });
                if (finished) return null;
            }
            if (cachedData.headers) {
                const headers = {
                    ...cachedData.headers
                };
                if (!isMinimalMode || !isSSG) {
                    delete headers[__TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["NEXT_CACHE_TAGS_HEADER"]];
                }
                for (let [key, value] of Object.entries(headers)){
                    if (typeof value === 'undefined') continue;
                    if (Array.isArray(value)) {
                        for (const v of value){
                            res.appendHeader(key, v);
                        }
                    } else if (typeof value === 'number') {
                        value = value.toString();
                        res.appendHeader(key, value);
                    } else {
                        res.appendHeader(key, value);
                    }
                }
            }
            // Add the cache tags header to the response if it exists and we're in
            // minimal mode while rendering a static page.
            const tags = (_cachedData_headers = cachedData.headers) == null ? void 0 : _cachedData_headers[__TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["NEXT_CACHE_TAGS_HEADER"]];
            if (isMinimalMode && isSSG && tags && typeof tags === 'string') {
                res.setHeader(__TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["NEXT_CACHE_TAGS_HEADER"], tags);
            }
            // If the request is a data request, then we shouldn't set the status code
            // from the response because it should always be 200. This should be gated
            // behind the experimental PPR flag.
            if (cachedData.status && (!isRSCRequest || !isRoutePPREnabled)) {
                res.statusCode = cachedData.status;
            }
            // Redirect information is encoded in RSC payload, so we don't need to use redirect status codes
            if (!isMinimalMode && cachedData.status && __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$redirect$2d$status$2d$code$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["RedirectStatusCode"][cachedData.status] && isRSCRequest) {
                res.statusCode = 200;
            }
            // Mark that the request did postpone.
            if (didPostpone && !isDynamicRSCRequest) {
                res.setHeader(__TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$app$2d$router$2d$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["NEXT_DID_POSTPONE_HEADER"], '1');
            }
            // we don't go through this block when preview mode is true
            // as preview mode is a dynamic request (bypasses cache) and doesn't
            // generate both HTML and payloads in the same request so continue to just
            // return the generated payload
            if (isRSCRequest && !isDraftMode) {
                // If this is a dynamic RSC request, then stream the response.
                if (typeof cachedData.rscData === 'undefined') {
                    // If the response is not an RSC response, then we can't serve it.
                    if (cachedData.html.contentType !== __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$app$2d$router$2d$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["RSC_CONTENT_TYPE_HEADER"]) {
                        if (nextConfig.cacheComponents) {
                            res.statusCode = 404;
                            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$send$2d$payload$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sendRenderResult"])({
                                req,
                                res,
                                generateEtags: nextConfig.generateEtags,
                                poweredByHeader: nextConfig.poweredByHeader,
                                result: __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$render$2d$result$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].EMPTY,
                                cacheControl: cacheEntry.cacheControl
                            });
                        } else {
                            // Otherwise this case is not expected.
                            throw Object.defineProperty(new __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$invariant$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["InvariantError"](`Expected RSC response, got ${cachedData.html.contentType}`), "__NEXT_ERROR_CODE", {
                                value: "E789",
                                enumerable: false,
                                configurable: true
                            });
                        }
                    }
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$send$2d$payload$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sendRenderResult"])({
                        req,
                        res,
                        generateEtags: nextConfig.generateEtags,
                        poweredByHeader: nextConfig.poweredByHeader,
                        result: cachedData.html,
                        cacheControl: cacheEntry.cacheControl
                    });
                }
                // As this isn't a prefetch request, we should serve the static flight
                // data.
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$send$2d$payload$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sendRenderResult"])({
                    req,
                    res,
                    generateEtags: nextConfig.generateEtags,
                    poweredByHeader: nextConfig.poweredByHeader,
                    result: __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$render$2d$result$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].fromStatic(cachedData.rscData, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$app$2d$router$2d$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["RSC_CONTENT_TYPE_HEADER"]),
                    cacheControl: cacheEntry.cacheControl
                });
            }
            // This is a request for HTML data.
            const body = cachedData.html;
            // If there's no postponed state, we should just serve the HTML. This
            // should also be the case for a resume request because it's completed
            // as a server render (rather than a static render).
            if (!didPostpone || isMinimalMode || isRSCRequest) {
                // If we're in test mode, we should add a sentinel chunk to the response
                // that's between the static and dynamic parts so we can compare the
                // chunks and add assertions.
                if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
                ;
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$send$2d$payload$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sendRenderResult"])({
                    req,
                    res,
                    generateEtags: nextConfig.generateEtags,
                    poweredByHeader: nextConfig.poweredByHeader,
                    result: body,
                    cacheControl: cacheEntry.cacheControl
                });
            }
            // If we're debugging the static shell or the dynamic API accesses, we
            // should just serve the HTML without resuming the render. The returned
            // HTML will be the static shell so all the Dynamic API's will be used
            // during static generation.
            if (isDebugStaticShell || isDebugDynamicAccesses) {
                // Since we're not resuming the render, we need to at least add the
                // closing body and html tags to create valid HTML.
                body.push(new ReadableStream({
                    start (controller) {
                        controller.enqueue(__TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$stream$2d$utils$2f$encoded$2d$tags$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ENCODED_TAGS"].CLOSED.BODY_AND_HTML);
                        controller.close();
                    }
                }));
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$send$2d$payload$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sendRenderResult"])({
                    req,
                    res,
                    generateEtags: nextConfig.generateEtags,
                    poweredByHeader: nextConfig.poweredByHeader,
                    result: body,
                    cacheControl: {
                        revalidate: 0,
                        expire: undefined
                    }
                });
            }
            // If we're in test mode, we should add a sentinel chunk to the response
            // that's between the static and dynamic parts so we can compare the
            // chunks and add assertions.
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
            // This request has postponed, so let's create a new transformer that the
            // dynamic data can pipe to that will attach the dynamic data to the end
            // of the response.
            const transformer = new TransformStream();
            body.push(transformer.readable);
            // Perform the render again, but this time, provide the postponed state.
            // We don't await because we want the result to start streaming now, and
            // we've already chained the transformer's readable to the render result.
            doRender({
                span,
                postponed: cachedData.postponed,
                // This is a resume render, not a fallback render, so we don't need to
                // set this.
                fallbackRouteParams: null,
                forceStaticRender: false
            }).then(async (result)=>{
                var _result_value;
                if (!result) {
                    throw Object.defineProperty(new Error('Invariant: expected a result to be returned'), "__NEXT_ERROR_CODE", {
                        value: "E463",
                        enumerable: false,
                        configurable: true
                    });
                }
                if (((_result_value = result.value) == null ? void 0 : _result_value.kind) !== __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$response$2d$cache$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CachedRouteKind"].APP_PAGE) {
                    var _result_value1;
                    throw Object.defineProperty(new Error(`Invariant: expected a page response, got ${(_result_value1 = result.value) == null ? void 0 : _result_value1.kind}`), "__NEXT_ERROR_CODE", {
                        value: "E305",
                        enumerable: false,
                        configurable: true
                    });
                }
                // Pipe the resume result to the transformer.
                await result.value.html.pipeTo(transformer.writable);
            }).catch((err)=>{
                // An error occurred during piping or preparing the render, abort
                // the transformers writer so we can terminate the stream.
                transformer.writable.abort(err).catch((e)=>{
                    console.error("couldn't abort transformer", e);
                });
            });
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$send$2d$payload$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sendRenderResult"])({
                req,
                res,
                generateEtags: nextConfig.generateEtags,
                poweredByHeader: nextConfig.poweredByHeader,
                result: body,
                // We don't want to cache the response if it has postponed data because
                // the response being sent to the client it's dynamic parts are streamed
                // to the client on the same request.
                cacheControl: {
                    revalidate: 0,
                    expire: undefined
                }
            });
        };
        // TODO: activeSpan code path is for when wrapped by
        // next-server can be removed when this is no longer used
        if (activeSpan) {
            await handleResponse(activeSpan);
        } else {
            return await tracer.withPropagatedContext(req.headers, ()=>tracer.trace(__TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$trace$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["BaseServerSpan"].handleRequest, {
                    spanName: `${method} ${srcPage}`,
                    kind: __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$trace$2f$tracer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SpanKind"].SERVER,
                    attributes: {
                        'http.method': method,
                        'http.target': req.url
                    }
                }, handleResponse));
        }
    } catch (err) {
        if (!(err instanceof __TURBOPACK__imported__module__$5b$externals$5d2f$next$2f$dist$2f$shared$2f$lib$2f$no$2d$fallback$2d$error$2e$external$2e$js__$5b$external$5d$__$28$next$2f$dist$2f$shared$2f$lib$2f$no$2d$fallback$2d$error$2e$external$2e$js$2c$__cjs$29$__["NoFallbackError"])) {
            await routeModule.onRequestError(req, err, {
                routerKind: 'App Router',
                routePath: srcPage,
                routeType: 'render',
                revalidateReason: (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$instrumentation$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getRevalidateReason"])({
                    isStaticGeneration: isSSG,
                    isOnDemandRevalidate
                })
            }, routerServerContext);
        }
        // rethrow so that we can handle serving error page
        throw err;
    }
}
// TODO: omit this from production builds, only test builds should include it
/**
 * Creates a readable stream that emits a PPR boundary sentinel.
 *
 * @returns A readable stream that emits a PPR boundary sentinel.
 */ function createPPRBoundarySentinel() {
    return new ReadableStream({
        start (controller) {
            controller.enqueue(new TextEncoder().encode('<!-- PPR_BOUNDARY_SENTINEL -->'));
            controller.close();
        }
    });
} //# sourceMappingURL=app-page.js.map
}),
"[project]/learn-next/final/node_modules/next/dist/esm/build/templates/app-page.js?page=/page { GLOBAL_ERROR_MODULE => \"[project]/learn-next/final/node_modules/next/dist/client/components/builtin/global-error.js [app-rsc] (ecmascript, Next.js Server Component)\", MODULE_0 => \"[project]/learn-next/final/src/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)\", MODULE_1 => \"[project]/learn-next/final/node_modules/next/dist/client/components/builtin/not-found.js [app-rsc] (ecmascript, Next.js Server Component)\", MODULE_2 => \"[project]/learn-next/final/node_modules/next/dist/client/components/builtin/forbidden.js [app-rsc] (ecmascript, Next.js Server Component)\", MODULE_3 => \"[project]/learn-next/final/node_modules/next/dist/client/components/builtin/unauthorized.js [app-rsc] (ecmascript, Next.js Server Component)\", MODULE_4 => \"[project]/learn-next/final/node_modules/next/dist/client/components/builtin/global-error.js [app-rsc] (ecmascript, Next.js Server Component)\", MODULE_5 => \"[project]/learn-next/final/src/app/page.tsx [app-rsc] (ecmascript, Next.js Server Component)\" } [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ClientPageRoot",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["ClientPageRoot"],
    "ClientSegmentRoot",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["ClientSegmentRoot"],
    "Fragment",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["Fragment"],
    "GlobalError",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$builtin$2f$global$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29$__["default"],
    "HTTPAccessFallbackBoundary",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["HTTPAccessFallbackBoundary"],
    "LayoutRouter",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["LayoutRouter"],
    "Postpone",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["Postpone"],
    "RenderFromTemplateContext",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["RenderFromTemplateContext"],
    "RootLayoutBoundary",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["RootLayoutBoundary"],
    "SegmentViewNode",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["SegmentViewNode"],
    "SegmentViewStateNode",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["SegmentViewStateNode"],
    "__next_app__",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$app$2d$page$2e$js$3f$page$3d2f$page__$7b$__GLOBAL_ERROR_MODULE__$3d3e$__$225b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$builtin$2f$global$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29222c$__MODULE_0__$3d3e$__$225b$project$5d2f$learn$2d$next$2f$final$2f$src$2f$app$2f$layout$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29222c$__MODULE_1__$3d3e$__$225b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$builtin$2f$not$2d$found$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29222c$__MODULE_2__$3d3e$__$225b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$builtin$2f$forbidden$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29222c$__MODULE_3__$3d3e$__$225b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$builtin$2f$unauthorized$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29222c$__MODULE_4__$3d3e$__$225b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$builtin$2f$global$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29222c$__MODULE_5__$3d3e$__$225b$project$5d2f$learn$2d$next$2f$final$2f$src$2f$app$2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["__next_app__"],
    "actionAsyncStorage",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["actionAsyncStorage"],
    "captureOwnerStack",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["captureOwnerStack"],
    "collectSegmentData",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["collectSegmentData"],
    "createElement",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["createElement"],
    "createMetadataComponents",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["createMetadataComponents"],
    "createPrerenderParamsForClientSegment",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["createPrerenderParamsForClientSegment"],
    "createPrerenderSearchParamsForClientPage",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["createPrerenderSearchParamsForClientPage"],
    "createServerParamsForServerSegment",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["createServerParamsForServerSegment"],
    "createServerSearchParamsForServerPage",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["createServerSearchParamsForServerPage"],
    "createTemporaryReferenceSet",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["createTemporaryReferenceSet"],
    "decodeAction",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["decodeAction"],
    "decodeFormState",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["decodeFormState"],
    "decodeReply",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["decodeReply"],
    "handler",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$app$2d$page$2e$js$3f$page$3d2f$page__$7b$__GLOBAL_ERROR_MODULE__$3d3e$__$225b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$builtin$2f$global$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29222c$__MODULE_0__$3d3e$__$225b$project$5d2f$learn$2d$next$2f$final$2f$src$2f$app$2f$layout$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29222c$__MODULE_1__$3d3e$__$225b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$builtin$2f$not$2d$found$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29222c$__MODULE_2__$3d3e$__$225b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$builtin$2f$forbidden$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29222c$__MODULE_3__$3d3e$__$225b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$builtin$2f$unauthorized$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29222c$__MODULE_4__$3d3e$__$225b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$builtin$2f$global$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29222c$__MODULE_5__$3d3e$__$225b$project$5d2f$learn$2d$next$2f$final$2f$src$2f$app$2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["handler"],
    "patchFetch",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["patchFetch"],
    "preconnect",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["preconnect"],
    "preloadFont",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["preloadFont"],
    "preloadStyle",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["preloadStyle"],
    "prerender",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["prerender"],
    "renderToReadableStream",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["renderToReadableStream"],
    "routeModule",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$app$2d$page$2e$js$3f$page$3d2f$page__$7b$__GLOBAL_ERROR_MODULE__$3d3e$__$225b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$builtin$2f$global$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29222c$__MODULE_0__$3d3e$__$225b$project$5d2f$learn$2d$next$2f$final$2f$src$2f$app$2f$layout$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29222c$__MODULE_1__$3d3e$__$225b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$builtin$2f$not$2d$found$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29222c$__MODULE_2__$3d3e$__$225b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$builtin$2f$forbidden$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29222c$__MODULE_3__$3d3e$__$225b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$builtin$2f$unauthorized$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29222c$__MODULE_4__$3d3e$__$225b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$builtin$2f$global$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29222c$__MODULE_5__$3d3e$__$225b$project$5d2f$learn$2d$next$2f$final$2f$src$2f$app$2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["routeModule"],
    "serverHooks",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["serverHooks"],
    "taintObjectReference",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["taintObjectReference"],
    "workAsyncStorage",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["workAsyncStorage"],
    "workUnitAsyncStorage",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["workUnitAsyncStorage"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$app$2d$page$2e$js$3f$page$3d2f$page__$7b$__GLOBAL_ERROR_MODULE__$3d3e$__$225b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$builtin$2f$global$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29222c$__MODULE_0__$3d3e$__$225b$project$5d2f$learn$2d$next$2f$final$2f$src$2f$app$2f$layout$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29222c$__MODULE_1__$3d3e$__$225b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$builtin$2f$not$2d$found$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29222c$__MODULE_2__$3d3e$__$225b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$builtin$2f$forbidden$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29222c$__MODULE_3__$3d3e$__$225b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$builtin$2f$unauthorized$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29222c$__MODULE_4__$3d3e$__$225b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$builtin$2f$global$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29222c$__MODULE_5__$3d3e$__$225b$project$5d2f$learn$2d$next$2f$final$2f$src$2f$app$2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/learn-next/final/node_modules/next/dist/esm/build/templates/app-page.js?page=/page { GLOBAL_ERROR_MODULE => "[project]/learn-next/final/node_modules/next/dist/client/components/builtin/global-error.js [app-rsc] (ecmascript, Next.js Server Component)", MODULE_0 => "[project]/learn-next/final/src/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", MODULE_1 => "[project]/learn-next/final/node_modules/next/dist/client/components/builtin/not-found.js [app-rsc] (ecmascript, Next.js Server Component)", MODULE_2 => "[project]/learn-next/final/node_modules/next/dist/client/components/builtin/forbidden.js [app-rsc] (ecmascript, Next.js Server Component)", MODULE_3 => "[project]/learn-next/final/node_modules/next/dist/client/components/builtin/unauthorized.js [app-rsc] (ecmascript, Next.js Server Component)", MODULE_4 => "[project]/learn-next/final/node_modules/next/dist/client/components/builtin/global-error.js [app-rsc] (ecmascript, Next.js Server Component)", MODULE_5 => "[project]/learn-next/final/src/app/page.tsx [app-rsc] (ecmascript, Next.js Server Component)" } [app-rsc] (ecmascript) <locals>');
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$builtin$2f$global$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29$__ = __turbopack_context__.i("[project]/learn-next/final/node_modules/next/dist/client/components/builtin/global-error.js [app-rsc] (ecmascript, Next.js Server Component)");
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__ = __turbopack_context__.i("[project]/learn-next/final/node_modules/next/dist/esm/server/app-render/entry-base.js [app-rsc] (ecmascript, Next.js server utility)");
}),
];

//# sourceMappingURL=beec6_62971162._.js.map
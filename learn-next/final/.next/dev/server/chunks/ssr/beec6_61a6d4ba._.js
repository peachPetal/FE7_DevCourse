module.exports = [
"[project]/learn-next/final/node_modules/lucide-react/dist/esm/shared/src/utils.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "hasA11yProp",
    ()=>hasA11yProp,
    "mergeClasses",
    ()=>mergeClasses,
    "toCamelCase",
    ()=>toCamelCase,
    "toKebabCase",
    ()=>toKebabCase,
    "toPascalCase",
    ()=>toPascalCase
]);
const toKebabCase = (string)=>string.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
const toCamelCase = (string)=>string.replace(/^([A-Z])|[\s-_]+(\w)/g, (match, p1, p2)=>p2 ? p2.toUpperCase() : p1.toLowerCase());
const toPascalCase = (string)=>{
    const camelCase = toCamelCase(string);
    return camelCase.charAt(0).toUpperCase() + camelCase.slice(1);
};
const mergeClasses = (...classes)=>classes.filter((className, index, array)=>{
        return Boolean(className) && className.trim() !== "" && array.indexOf(className) === index;
    }).join(" ").trim();
const hasA11yProp = (props)=>{
    for(const prop in props){
        if (prop.startsWith("aria-") || prop === "role" || prop === "title") {
            return true;
        }
    }
};
;
 //# sourceMappingURL=utils.js.map
}),
"[project]/learn-next/final/node_modules/lucide-react/dist/esm/defaultAttributes.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "default",
    ()=>defaultAttributes
]);
var defaultAttributes = {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
};
;
 //# sourceMappingURL=defaultAttributes.js.map
}),
"[project]/learn-next/final/node_modules/lucide-react/dist/esm/Icon.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "default",
    ()=>Icon
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/learn-next/final/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$defaultAttributes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/learn-next/final/node_modules/lucide-react/dist/esm/defaultAttributes.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/learn-next/final/node_modules/lucide-react/dist/esm/shared/src/utils.js [app-ssr] (ecmascript)");
;
;
;
const Icon = (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ color = "currentColor", size = 24, strokeWidth = 2, absoluteStrokeWidth, className = "", children, iconNode, ...rest }, ref)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("svg", {
        ref,
        ...__TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$defaultAttributes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
        width: size,
        height: size,
        stroke: color,
        strokeWidth: absoluteStrokeWidth ? Number(strokeWidth) * 24 / Number(size) : strokeWidth,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mergeClasses"])("lucide", className),
        ...!children && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hasA11yProp"])(rest) && {
            "aria-hidden": "true"
        },
        ...rest
    }, [
        ...iconNode.map(([tag, attrs])=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])(tag, attrs)),
        ...Array.isArray(children) ? children : [
            children
        ]
    ]));
;
 //# sourceMappingURL=Icon.js.map
}),
"[project]/learn-next/final/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "default",
    ()=>createLucideIcon
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/learn-next/final/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/learn-next/final/node_modules/lucide-react/dist/esm/shared/src/utils.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/learn-next/final/node_modules/lucide-react/dist/esm/Icon.js [app-ssr] (ecmascript)");
;
;
;
const createLucideIcon = (iconName, iconNode)=>{
    const Component = (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, ...props }, ref)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])(__TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
            ref,
            iconNode,
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mergeClasses"])(`lucide-${(0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toKebabCase"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toPascalCase"])(iconName))}`, `lucide-${iconName}`, className),
            ...props
        }));
    Component.displayName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toPascalCase"])(iconName);
    return Component;
};
;
 //# sourceMappingURL=createLucideIcon.js.map
}),
"[project]/learn-next/final/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
    ()=>X
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/learn-next/final/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M18 6 6 18",
            key: "1bl5f8"
        }
    ],
    [
        "path",
        {
            d: "m6 6 12 12",
            key: "d8bk6v"
        }
    ]
];
const X = (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("x", __iconNode);
;
 //# sourceMappingURL=x.js.map
}),
"[project]/learn-next/final/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as X>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "X",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/learn-next/final/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript)");
}),
"[project]/learn-next/final/node_modules/lucide-react/dist/esm/icons/clock.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/learn-next/final/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)");
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
const Clock = (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("clock", __iconNode);
;
 //# sourceMappingURL=clock.js.map
}),
"[project]/learn-next/final/node_modules/lucide-react/dist/esm/icons/clock.js [app-ssr] (ecmascript) <export default as Clock>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Clock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/learn-next/final/node_modules/lucide-react/dist/esm/icons/clock.js [app-ssr] (ecmascript)");
}),
"[project]/learn-next/final/node_modules/lucide-react/dist/esm/icons/square-pen.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
    ()=>SquarePen
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/learn-next/final/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7",
            key: "1m0v6g"
        }
    ],
    [
        "path",
        {
            d: "M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z",
            key: "ohrbg2"
        }
    ]
];
const SquarePen = (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("square-pen", __iconNode);
;
 //# sourceMappingURL=square-pen.js.map
}),
"[project]/learn-next/final/node_modules/lucide-react/dist/esm/icons/square-pen.js [app-ssr] (ecmascript) <export default as Edit>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Edit",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2d$pen$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2d$pen$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/learn-next/final/node_modules/lucide-react/dist/esm/icons/square-pen.js [app-ssr] (ecmascript)");
}),
"[project]/learn-next/final/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
    ()=>Trash2
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/learn-next/final/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M10 11v6",
            key: "nco0om"
        }
    ],
    [
        "path",
        {
            d: "M14 11v6",
            key: "outv1u"
        }
    ],
    [
        "path",
        {
            d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",
            key: "miytrc"
        }
    ],
    [
        "path",
        {
            d: "M3 6h18",
            key: "d0wm0j"
        }
    ],
    [
        "path",
        {
            d: "M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",
            key: "e791ji"
        }
    ]
];
const Trash2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("trash-2", __iconNode);
;
 //# sourceMappingURL=trash-2.js.map
}),
"[project]/learn-next/final/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-ssr] (ecmascript) <export default as Trash2>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Trash2",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/learn-next/final/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-ssr] (ecmascript)");
}),
"[project]/learn-next/final/node_modules/lucide-react/dist/esm/icons/send.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
    ()=>Send
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/learn-next/final/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",
            key: "1ffxy3"
        }
    ],
    [
        "path",
        {
            d: "m21.854 2.147-10.94 10.939",
            key: "12cjpa"
        }
    ]
];
const Send = (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("send", __iconNode);
;
 //# sourceMappingURL=send.js.map
}),
"[project]/learn-next/final/node_modules/lucide-react/dist/esm/icons/send.js [app-ssr] (ecmascript) <export default as Send>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Send",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/learn-next/final/node_modules/lucide-react/dist/esm/icons/send.js [app-ssr] (ecmascript)");
}),
"[project]/learn-next/final/node_modules/lucide-react/dist/esm/icons/tag.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/learn-next/final/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)");
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
const Tag = (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("tag", __iconNode);
;
 //# sourceMappingURL=tag.js.map
}),
"[project]/learn-next/final/node_modules/lucide-react/dist/esm/icons/tag.js [app-ssr] (ecmascript) <export default as Tag>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Tag",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$tag$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$tag$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/learn-next/final/node_modules/lucide-react/dist/esm/icons/tag.js [app-ssr] (ecmascript)");
}),
"[project]/learn-next/final/node_modules/xml2js/lib/defaults.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

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
"[project]/learn-next/final/node_modules/xml2js/lib/builder.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

// Generated by CoffeeScript 1.12.7
(function() {
    "use strict";
    var builder, defaults, escapeCDATA, requiresCDATA, wrapCDATA, hasProp = {}.hasOwnProperty;
    builder = __turbopack_context__.r("[project]/learn-next/final/node_modules/xmlbuilder/lib/index.js [app-ssr] (ecmascript)");
    defaults = __turbopack_context__.r("[project]/learn-next/final/node_modules/xml2js/lib/defaults.js [app-ssr] (ecmascript)").defaults;
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
"[project]/learn-next/final/node_modules/xml2js/lib/bom.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

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
"[project]/learn-next/final/node_modules/xml2js/lib/processors.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

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
"[project]/learn-next/final/node_modules/xml2js/lib/parser.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

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
    sax = __turbopack_context__.r("[project]/learn-next/final/node_modules/sax/lib/sax.js [app-ssr] (ecmascript)");
    events = __turbopack_context__.r("[externals]/events [external] (events, cjs)");
    bom = __turbopack_context__.r("[project]/learn-next/final/node_modules/xml2js/lib/bom.js [app-ssr] (ecmascript)");
    processors = __turbopack_context__.r("[project]/learn-next/final/node_modules/xml2js/lib/processors.js [app-ssr] (ecmascript)");
    setImmediate = __turbopack_context__.r("[externals]/timers [external] (timers, cjs)").setImmediate;
    defaults = __turbopack_context__.r("[project]/learn-next/final/node_modules/xml2js/lib/defaults.js [app-ssr] (ecmascript)").defaults;
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
"[project]/learn-next/final/node_modules/xml2js/lib/xml2js.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

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
    defaults = __turbopack_context__.r("[project]/learn-next/final/node_modules/xml2js/lib/defaults.js [app-ssr] (ecmascript)");
    builder = __turbopack_context__.r("[project]/learn-next/final/node_modules/xml2js/lib/builder.js [app-ssr] (ecmascript)");
    parser = __turbopack_context__.r("[project]/learn-next/final/node_modules/xml2js/lib/parser.js [app-ssr] (ecmascript)");
    processors = __turbopack_context__.r("[project]/learn-next/final/node_modules/xml2js/lib/processors.js [app-ssr] (ecmascript)");
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
"[project]/learn-next/final/node_modules/sax/lib/sax.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

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
"[project]/learn-next/final/node_modules/rss-parser/lib/fields.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

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
"[project]/learn-next/final/node_modules/rss-parser/lib/utils.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

const utils = module.exports = {};
const entities = __turbopack_context__.r("[project]/learn-next/final/node_modules/entities/lib/index.js [app-ssr] (ecmascript)");
const xml2js = __turbopack_context__.r("[project]/learn-next/final/node_modules/xml2js/lib/xml2js.js [app-ssr] (ecmascript)");
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
"[project]/learn-next/final/node_modules/rss-parser/lib/parser.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const http = __turbopack_context__.r("[externals]/http [external] (http, cjs)");
const https = __turbopack_context__.r("[externals]/https [external] (https, cjs)");
const xml2js = __turbopack_context__.r("[project]/learn-next/final/node_modules/xml2js/lib/xml2js.js [app-ssr] (ecmascript)");
const url = __turbopack_context__.r("[externals]/url [external] (url, cjs)");
const fields = __turbopack_context__.r("[project]/learn-next/final/node_modules/rss-parser/lib/fields.js [app-ssr] (ecmascript)");
const utils = __turbopack_context__.r("[project]/learn-next/final/node_modules/rss-parser/lib/utils.js [app-ssr] (ecmascript)");
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
"[project]/learn-next/final/node_modules/rss-parser/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/learn-next/final/node_modules/rss-parser/lib/parser.js [app-ssr] (ecmascript)");
}),
"[project]/learn-next/final/node_modules/@fastify/busboy/deps/streamsearch/sbmh.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * Copyright Brian White. All rights reserved.
 *
 * @see https://github.com/mscdex/streamsearch
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to
 * deal in the Software without restriction, including without limitation the
 * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
 * sell copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
 * IN THE SOFTWARE.
 *
 * Based heavily on the Streaming Boyer-Moore-Horspool C++ implementation
 * by Hongli Lai at: https://github.com/FooBarWidget/boyer-moore-horspool
 */ const EventEmitter = __turbopack_context__.r("[externals]/node:events [external] (node:events, cjs)").EventEmitter;
const inherits = __turbopack_context__.r("[externals]/node:util [external] (node:util, cjs)").inherits;
function SBMH(needle) {
    if (typeof needle === 'string') {
        needle = Buffer.from(needle);
    }
    if (!Buffer.isBuffer(needle)) {
        throw new TypeError('The needle has to be a String or a Buffer.');
    }
    const needleLength = needle.length;
    if (needleLength === 0) {
        throw new Error('The needle cannot be an empty String/Buffer.');
    }
    if (needleLength > 256) {
        throw new Error('The needle cannot have a length bigger than 256.');
    }
    this.maxMatches = Infinity;
    this.matches = 0;
    this._occ = new Array(256).fill(needleLength); // Initialize occurrence table.
    this._lookbehind_size = 0;
    this._needle = needle;
    this._bufpos = 0;
    this._lookbehind = Buffer.alloc(needleLength);
    // Populate occurrence table with analysis of the needle,
    // ignoring last letter.
    for(var i = 0; i < needleLength - 1; ++i){
        this._occ[needle[i]] = needleLength - 1 - i;
    }
}
inherits(SBMH, EventEmitter);
SBMH.prototype.reset = function() {
    this._lookbehind_size = 0;
    this.matches = 0;
    this._bufpos = 0;
};
SBMH.prototype.push = function(chunk, pos) {
    if (!Buffer.isBuffer(chunk)) {
        chunk = Buffer.from(chunk, 'binary');
    }
    const chlen = chunk.length;
    this._bufpos = pos || 0;
    let r;
    while(r !== chlen && this.matches < this.maxMatches){
        r = this._sbmh_feed(chunk);
    }
    return r;
};
SBMH.prototype._sbmh_feed = function(data) {
    const len = data.length;
    const needle = this._needle;
    const needleLength = needle.length;
    const lastNeedleChar = needle[needleLength - 1];
    // Positive: points to a position in `data`
    //           pos == 3 points to data[3]
    // Negative: points to a position in the lookbehind buffer
    //           pos == -2 points to lookbehind[lookbehind_size - 2]
    let pos = -this._lookbehind_size;
    let ch;
    if (pos < 0) {
        // Lookbehind buffer is not empty. Perform Boyer-Moore-Horspool
        // search with character lookup code that considers both the
        // lookbehind buffer and the current round's haystack data.
        //
        // Loop until
        //   there is a match.
        // or until
        //   we've moved past the position that requires the
        //   lookbehind buffer. In this case we switch to the
        //   optimized loop.
        // or until
        //   the character to look at lies outside the haystack.
        while(pos < 0 && pos <= len - needleLength){
            ch = this._sbmh_lookup_char(data, pos + needleLength - 1);
            if (ch === lastNeedleChar && this._sbmh_memcmp(data, pos, needleLength - 1)) {
                this._lookbehind_size = 0;
                ++this.matches;
                this.emit('info', true);
                return this._bufpos = pos + needleLength;
            }
            pos += this._occ[ch];
        }
        // No match.
        if (pos < 0) {
            // There's too few data for Boyer-Moore-Horspool to run,
            // so let's use a different algorithm to skip as much as
            // we can.
            // Forward pos until
            //   the trailing part of lookbehind + data
            //   looks like the beginning of the needle
            // or until
            //   pos == 0
            while(pos < 0 && !this._sbmh_memcmp(data, pos, len - pos)){
                ++pos;
            }
        }
        if (pos >= 0) {
            // Discard lookbehind buffer.
            this.emit('info', false, this._lookbehind, 0, this._lookbehind_size);
            this._lookbehind_size = 0;
        } else {
            // Cut off part of the lookbehind buffer that has
            // been processed and append the entire haystack
            // into it.
            const bytesToCutOff = this._lookbehind_size + pos;
            if (bytesToCutOff > 0) {
                // The cut off data is guaranteed not to contain the needle.
                this.emit('info', false, this._lookbehind, 0, bytesToCutOff);
            }
            this._lookbehind.copy(this._lookbehind, 0, bytesToCutOff, this._lookbehind_size - bytesToCutOff);
            this._lookbehind_size -= bytesToCutOff;
            data.copy(this._lookbehind, this._lookbehind_size);
            this._lookbehind_size += len;
            this._bufpos = len;
            return len;
        }
    }
    pos += (pos >= 0) * this._bufpos;
    // Lookbehind buffer is now empty. We only need to check if the
    // needle is in the haystack.
    if (data.indexOf(needle, pos) !== -1) {
        pos = data.indexOf(needle, pos);
        ++this.matches;
        if (pos > 0) {
            this.emit('info', true, data, this._bufpos, pos);
        } else {
            this.emit('info', true);
        }
        return this._bufpos = pos + needleLength;
    } else {
        pos = len - needleLength;
    }
    // There was no match. If there's trailing haystack data that we cannot
    // match yet using the Boyer-Moore-Horspool algorithm (because the trailing
    // data is less than the needle size) then match using a modified
    // algorithm that starts matching from the beginning instead of the end.
    // Whatever trailing data is left after running this algorithm is added to
    // the lookbehind buffer.
    while(pos < len && (data[pos] !== needle[0] || Buffer.compare(data.subarray(pos, pos + len - pos), needle.subarray(0, len - pos)) !== 0)){
        ++pos;
    }
    if (pos < len) {
        data.copy(this._lookbehind, 0, pos, pos + (len - pos));
        this._lookbehind_size = len - pos;
    }
    // Everything until pos is guaranteed not to contain needle data.
    if (pos > 0) {
        this.emit('info', false, data, this._bufpos, pos < len ? pos : len);
    }
    this._bufpos = len;
    return len;
};
SBMH.prototype._sbmh_lookup_char = function(data, pos) {
    return pos < 0 ? this._lookbehind[this._lookbehind_size + pos] : data[pos];
};
SBMH.prototype._sbmh_memcmp = function(data, pos, len) {
    for(var i = 0; i < len; ++i){
        if (this._sbmh_lookup_char(data, pos + i) !== this._needle[i]) {
            return false;
        }
    }
    return true;
};
module.exports = SBMH;
}),
"[project]/learn-next/final/node_modules/@fastify/busboy/deps/dicer/lib/PartStream.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const inherits = __turbopack_context__.r("[externals]/node:util [external] (node:util, cjs)").inherits;
const ReadableStream = __turbopack_context__.r("[externals]/node:stream [external] (node:stream, cjs)").Readable;
function PartStream(opts) {
    ReadableStream.call(this, opts);
}
inherits(PartStream, ReadableStream);
PartStream.prototype._read = function(n) {};
module.exports = PartStream;
}),
"[project]/learn-next/final/node_modules/@fastify/busboy/lib/utils/getLimit.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = function getLimit(limits, name, defaultLimit) {
    if (!limits || limits[name] === undefined || limits[name] === null) {
        return defaultLimit;
    }
    if (typeof limits[name] !== 'number' || isNaN(limits[name])) {
        throw new TypeError('Limit ' + name + ' is not a valid number');
    }
    return limits[name];
};
}),
"[project]/learn-next/final/node_modules/@fastify/busboy/deps/dicer/lib/HeaderParser.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const EventEmitter = __turbopack_context__.r("[externals]/node:events [external] (node:events, cjs)").EventEmitter;
const inherits = __turbopack_context__.r("[externals]/node:util [external] (node:util, cjs)").inherits;
const getLimit = __turbopack_context__.r("[project]/learn-next/final/node_modules/@fastify/busboy/lib/utils/getLimit.js [app-ssr] (ecmascript)");
const StreamSearch = __turbopack_context__.r("[project]/learn-next/final/node_modules/@fastify/busboy/deps/streamsearch/sbmh.js [app-ssr] (ecmascript)");
const B_DCRLF = Buffer.from('\r\n\r\n');
const RE_CRLF = /\r\n/g;
const RE_HDR = /^([^:]+):[ \t]?([\x00-\xFF]+)?$/ // eslint-disable-line no-control-regex
;
function HeaderParser(cfg) {
    EventEmitter.call(this);
    cfg = cfg || {};
    const self = this;
    this.nread = 0;
    this.maxed = false;
    this.npairs = 0;
    this.maxHeaderPairs = getLimit(cfg, 'maxHeaderPairs', 2000);
    this.maxHeaderSize = getLimit(cfg, 'maxHeaderSize', 80 * 1024);
    this.buffer = '';
    this.header = {};
    this.finished = false;
    this.ss = new StreamSearch(B_DCRLF);
    this.ss.on('info', function(isMatch, data, start, end) {
        if (data && !self.maxed) {
            if (self.nread + end - start >= self.maxHeaderSize) {
                end = self.maxHeaderSize - self.nread + start;
                self.nread = self.maxHeaderSize;
                self.maxed = true;
            } else {
                self.nread += end - start;
            }
            self.buffer += data.toString('binary', start, end);
        }
        if (isMatch) {
            self._finish();
        }
    });
}
inherits(HeaderParser, EventEmitter);
HeaderParser.prototype.push = function(data) {
    const r = this.ss.push(data);
    if (this.finished) {
        return r;
    }
};
HeaderParser.prototype.reset = function() {
    this.finished = false;
    this.buffer = '';
    this.header = {};
    this.ss.reset();
};
HeaderParser.prototype._finish = function() {
    if (this.buffer) {
        this._parseHeader();
    }
    this.ss.matches = this.ss.maxMatches;
    const header = this.header;
    this.header = {};
    this.buffer = '';
    this.finished = true;
    this.nread = this.npairs = 0;
    this.maxed = false;
    this.emit('header', header);
};
HeaderParser.prototype._parseHeader = function() {
    if (this.npairs === this.maxHeaderPairs) {
        return;
    }
    const lines = this.buffer.split(RE_CRLF);
    const len = lines.length;
    let m, h;
    for(var i = 0; i < len; ++i){
        if (lines[i].length === 0) {
            continue;
        }
        if (lines[i][0] === '\t' || lines[i][0] === ' ') {
            // folded header content
            // RFC2822 says to just remove the CRLF and not the whitespace following
            // it, so we follow the RFC and include the leading whitespace ...
            if (h) {
                this.header[h][this.header[h].length - 1] += lines[i];
                continue;
            }
        }
        const posColon = lines[i].indexOf(':');
        if (posColon === -1 || posColon === 0) {
            return;
        }
        m = RE_HDR.exec(lines[i]);
        h = m[1].toLowerCase();
        this.header[h] = this.header[h] || [];
        this.header[h].push(m[2] || '');
        if (++this.npairs === this.maxHeaderPairs) {
            break;
        }
    }
};
module.exports = HeaderParser;
}),
"[project]/learn-next/final/node_modules/@fastify/busboy/deps/dicer/lib/Dicer.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const WritableStream = __turbopack_context__.r("[externals]/node:stream [external] (node:stream, cjs)").Writable;
const inherits = __turbopack_context__.r("[externals]/node:util [external] (node:util, cjs)").inherits;
const StreamSearch = __turbopack_context__.r("[project]/learn-next/final/node_modules/@fastify/busboy/deps/streamsearch/sbmh.js [app-ssr] (ecmascript)");
const PartStream = __turbopack_context__.r("[project]/learn-next/final/node_modules/@fastify/busboy/deps/dicer/lib/PartStream.js [app-ssr] (ecmascript)");
const HeaderParser = __turbopack_context__.r("[project]/learn-next/final/node_modules/@fastify/busboy/deps/dicer/lib/HeaderParser.js [app-ssr] (ecmascript)");
const DASH = 45;
const B_ONEDASH = Buffer.from('-');
const B_CRLF = Buffer.from('\r\n');
const EMPTY_FN = function() {};
function Dicer(cfg) {
    if (!(this instanceof Dicer)) {
        return new Dicer(cfg);
    }
    WritableStream.call(this, cfg);
    if (!cfg || !cfg.headerFirst && typeof cfg.boundary !== 'string') {
        throw new TypeError('Boundary required');
    }
    if (typeof cfg.boundary === 'string') {
        this.setBoundary(cfg.boundary);
    } else {
        this._bparser = undefined;
    }
    this._headerFirst = cfg.headerFirst;
    this._dashes = 0;
    this._parts = 0;
    this._finished = false;
    this._realFinish = false;
    this._isPreamble = true;
    this._justMatched = false;
    this._firstWrite = true;
    this._inHeader = true;
    this._part = undefined;
    this._cb = undefined;
    this._ignoreData = false;
    this._partOpts = {
        highWaterMark: cfg.partHwm
    };
    this._pause = false;
    const self = this;
    this._hparser = new HeaderParser(cfg);
    this._hparser.on('header', function(header) {
        self._inHeader = false;
        self._part.emit('header', header);
    });
}
inherits(Dicer, WritableStream);
Dicer.prototype.emit = function(ev) {
    if (ev === 'finish' && !this._realFinish) {
        if (!this._finished) {
            const self = this;
            process.nextTick(function() {
                self.emit('error', new Error('Unexpected end of multipart data'));
                if (self._part && !self._ignoreData) {
                    const type = self._isPreamble ? 'Preamble' : 'Part';
                    self._part.emit('error', new Error(type + ' terminated early due to unexpected end of multipart data'));
                    self._part.push(null);
                    process.nextTick(function() {
                        self._realFinish = true;
                        self.emit('finish');
                        self._realFinish = false;
                    });
                    return;
                }
                self._realFinish = true;
                self.emit('finish');
                self._realFinish = false;
            });
        }
    } else {
        WritableStream.prototype.emit.apply(this, arguments);
    }
};
Dicer.prototype._write = function(data, encoding, cb) {
    // ignore unexpected data (e.g. extra trailer data after finished)
    if (!this._hparser && !this._bparser) {
        return cb();
    }
    if (this._headerFirst && this._isPreamble) {
        if (!this._part) {
            this._part = new PartStream(this._partOpts);
            if (this.listenerCount('preamble') !== 0) {
                this.emit('preamble', this._part);
            } else {
                this._ignore();
            }
        }
        const r = this._hparser.push(data);
        if (!this._inHeader && r !== undefined && r < data.length) {
            data = data.slice(r);
        } else {
            return cb();
        }
    }
    // allows for "easier" testing
    if (this._firstWrite) {
        this._bparser.push(B_CRLF);
        this._firstWrite = false;
    }
    this._bparser.push(data);
    if (this._pause) {
        this._cb = cb;
    } else {
        cb();
    }
};
Dicer.prototype.reset = function() {
    this._part = undefined;
    this._bparser = undefined;
    this._hparser = undefined;
};
Dicer.prototype.setBoundary = function(boundary) {
    const self = this;
    this._bparser = new StreamSearch('\r\n--' + boundary);
    this._bparser.on('info', function(isMatch, data, start, end) {
        self._oninfo(isMatch, data, start, end);
    });
};
Dicer.prototype._ignore = function() {
    if (this._part && !this._ignoreData) {
        this._ignoreData = true;
        this._part.on('error', EMPTY_FN);
        // we must perform some kind of read on the stream even though we are
        // ignoring the data, otherwise node's Readable stream will not emit 'end'
        // after pushing null to the stream
        this._part.resume();
    }
};
Dicer.prototype._oninfo = function(isMatch, data, start, end) {
    let buf;
    const self = this;
    let i = 0;
    let r;
    let shouldWriteMore = true;
    if (!this._part && this._justMatched && data) {
        while(this._dashes < 2 && start + i < end){
            if (data[start + i] === DASH) {
                ++i;
                ++this._dashes;
            } else {
                if (this._dashes) {
                    buf = B_ONEDASH;
                }
                this._dashes = 0;
                break;
            }
        }
        if (this._dashes === 2) {
            if (start + i < end && this.listenerCount('trailer') !== 0) {
                this.emit('trailer', data.slice(start + i, end));
            }
            this.reset();
            this._finished = true;
            // no more parts will be added
            if (self._parts === 0) {
                self._realFinish = true;
                self.emit('finish');
                self._realFinish = false;
            }
        }
        if (this._dashes) {
            return;
        }
    }
    if (this._justMatched) {
        this._justMatched = false;
    }
    if (!this._part) {
        this._part = new PartStream(this._partOpts);
        this._part._read = function(n) {
            self._unpause();
        };
        if (this._isPreamble && this.listenerCount('preamble') !== 0) {
            this.emit('preamble', this._part);
        } else if (this._isPreamble !== true && this.listenerCount('part') !== 0) {
            this.emit('part', this._part);
        } else {
            this._ignore();
        }
        if (!this._isPreamble) {
            this._inHeader = true;
        }
    }
    if (data && start < end && !this._ignoreData) {
        if (this._isPreamble || !this._inHeader) {
            if (buf) {
                shouldWriteMore = this._part.push(buf);
            }
            shouldWriteMore = this._part.push(data.slice(start, end));
            if (!shouldWriteMore) {
                this._pause = true;
            }
        } else if (!this._isPreamble && this._inHeader) {
            if (buf) {
                this._hparser.push(buf);
            }
            r = this._hparser.push(data.slice(start, end));
            if (!this._inHeader && r !== undefined && r < end) {
                this._oninfo(false, data, start + r, end);
            }
        }
    }
    if (isMatch) {
        this._hparser.reset();
        if (this._isPreamble) {
            this._isPreamble = false;
        } else {
            if (start !== end) {
                ++this._parts;
                this._part.on('end', function() {
                    if (--self._parts === 0) {
                        if (self._finished) {
                            self._realFinish = true;
                            self.emit('finish');
                            self._realFinish = false;
                        } else {
                            self._unpause();
                        }
                    }
                });
            }
        }
        this._part.push(null);
        this._part = undefined;
        this._ignoreData = false;
        this._justMatched = true;
        this._dashes = 0;
    }
};
Dicer.prototype._unpause = function() {
    if (!this._pause) {
        return;
    }
    this._pause = false;
    if (this._cb) {
        const cb = this._cb;
        this._cb = undefined;
        cb();
    }
};
module.exports = Dicer;
}),
"[project]/learn-next/final/node_modules/@fastify/busboy/lib/utils/decodeText.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

// Node has always utf-8
const utf8Decoder = new TextDecoder('utf-8');
const textDecoders = new Map([
    [
        'utf-8',
        utf8Decoder
    ],
    [
        'utf8',
        utf8Decoder
    ]
]);
function getDecoder(charset) {
    let lc;
    while(true){
        switch(charset){
            case 'utf-8':
            case 'utf8':
                return decoders.utf8;
            case 'latin1':
            case 'ascii':
            case 'us-ascii':
            case 'iso-8859-1':
            case 'iso8859-1':
            case 'iso88591':
            case 'iso_8859-1':
            case 'windows-1252':
            case 'iso_8859-1:1987':
            case 'cp1252':
            case 'x-cp1252':
                return decoders.latin1;
            case 'utf16le':
            case 'utf-16le':
            case 'ucs2':
            case 'ucs-2':
                return decoders.utf16le;
            case 'base64':
                return decoders.base64;
            default:
                if (lc === undefined) {
                    lc = true;
                    charset = charset.toLowerCase();
                    continue;
                }
                return decoders.other.bind(charset);
        }
    }
}
const decoders = {
    utf8: (data, sourceEncoding)=>{
        if (data.length === 0) {
            return '';
        }
        if (typeof data === 'string') {
            data = Buffer.from(data, sourceEncoding);
        }
        return data.utf8Slice(0, data.length);
    },
    latin1: (data, sourceEncoding)=>{
        if (data.length === 0) {
            return '';
        }
        if (typeof data === 'string') {
            return data;
        }
        return data.latin1Slice(0, data.length);
    },
    utf16le: (data, sourceEncoding)=>{
        if (data.length === 0) {
            return '';
        }
        if (typeof data === 'string') {
            data = Buffer.from(data, sourceEncoding);
        }
        return data.ucs2Slice(0, data.length);
    },
    base64: (data, sourceEncoding)=>{
        if (data.length === 0) {
            return '';
        }
        if (typeof data === 'string') {
            data = Buffer.from(data, sourceEncoding);
        }
        return data.base64Slice(0, data.length);
    },
    other: (data, sourceEncoding)=>{
        if (data.length === 0) {
            return '';
        }
        if (typeof data === 'string') {
            data = Buffer.from(data, sourceEncoding);
        }
        if (textDecoders.has(/*TURBOPACK member replacement*/ __turbopack_context__.e.toString())) {
            try {
                return textDecoders.get(/*TURBOPACK member replacement*/ __turbopack_context__.e).decode(data);
            } catch  {}
        }
        return typeof data === 'string' ? data : data.toString();
    }
};
function decodeText(text, sourceEncoding, destEncoding) {
    if (text) {
        return getDecoder(destEncoding)(text, sourceEncoding);
    }
    return text;
}
module.exports = decodeText;
}),
"[project]/learn-next/final/node_modules/@fastify/busboy/lib/utils/parseParams.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/* eslint-disable object-property-newline */ const decodeText = __turbopack_context__.r("[project]/learn-next/final/node_modules/@fastify/busboy/lib/utils/decodeText.js [app-ssr] (ecmascript)");
const RE_ENCODED = /%[a-fA-F0-9][a-fA-F0-9]/g;
const EncodedLookup = {
    '%00': '\x00',
    '%01': '\x01',
    '%02': '\x02',
    '%03': '\x03',
    '%04': '\x04',
    '%05': '\x05',
    '%06': '\x06',
    '%07': '\x07',
    '%08': '\x08',
    '%09': '\x09',
    '%0a': '\x0a',
    '%0A': '\x0a',
    '%0b': '\x0b',
    '%0B': '\x0b',
    '%0c': '\x0c',
    '%0C': '\x0c',
    '%0d': '\x0d',
    '%0D': '\x0d',
    '%0e': '\x0e',
    '%0E': '\x0e',
    '%0f': '\x0f',
    '%0F': '\x0f',
    '%10': '\x10',
    '%11': '\x11',
    '%12': '\x12',
    '%13': '\x13',
    '%14': '\x14',
    '%15': '\x15',
    '%16': '\x16',
    '%17': '\x17',
    '%18': '\x18',
    '%19': '\x19',
    '%1a': '\x1a',
    '%1A': '\x1a',
    '%1b': '\x1b',
    '%1B': '\x1b',
    '%1c': '\x1c',
    '%1C': '\x1c',
    '%1d': '\x1d',
    '%1D': '\x1d',
    '%1e': '\x1e',
    '%1E': '\x1e',
    '%1f': '\x1f',
    '%1F': '\x1f',
    '%20': '\x20',
    '%21': '\x21',
    '%22': '\x22',
    '%23': '\x23',
    '%24': '\x24',
    '%25': '\x25',
    '%26': '\x26',
    '%27': '\x27',
    '%28': '\x28',
    '%29': '\x29',
    '%2a': '\x2a',
    '%2A': '\x2a',
    '%2b': '\x2b',
    '%2B': '\x2b',
    '%2c': '\x2c',
    '%2C': '\x2c',
    '%2d': '\x2d',
    '%2D': '\x2d',
    '%2e': '\x2e',
    '%2E': '\x2e',
    '%2f': '\x2f',
    '%2F': '\x2f',
    '%30': '\x30',
    '%31': '\x31',
    '%32': '\x32',
    '%33': '\x33',
    '%34': '\x34',
    '%35': '\x35',
    '%36': '\x36',
    '%37': '\x37',
    '%38': '\x38',
    '%39': '\x39',
    '%3a': '\x3a',
    '%3A': '\x3a',
    '%3b': '\x3b',
    '%3B': '\x3b',
    '%3c': '\x3c',
    '%3C': '\x3c',
    '%3d': '\x3d',
    '%3D': '\x3d',
    '%3e': '\x3e',
    '%3E': '\x3e',
    '%3f': '\x3f',
    '%3F': '\x3f',
    '%40': '\x40',
    '%41': '\x41',
    '%42': '\x42',
    '%43': '\x43',
    '%44': '\x44',
    '%45': '\x45',
    '%46': '\x46',
    '%47': '\x47',
    '%48': '\x48',
    '%49': '\x49',
    '%4a': '\x4a',
    '%4A': '\x4a',
    '%4b': '\x4b',
    '%4B': '\x4b',
    '%4c': '\x4c',
    '%4C': '\x4c',
    '%4d': '\x4d',
    '%4D': '\x4d',
    '%4e': '\x4e',
    '%4E': '\x4e',
    '%4f': '\x4f',
    '%4F': '\x4f',
    '%50': '\x50',
    '%51': '\x51',
    '%52': '\x52',
    '%53': '\x53',
    '%54': '\x54',
    '%55': '\x55',
    '%56': '\x56',
    '%57': '\x57',
    '%58': '\x58',
    '%59': '\x59',
    '%5a': '\x5a',
    '%5A': '\x5a',
    '%5b': '\x5b',
    '%5B': '\x5b',
    '%5c': '\x5c',
    '%5C': '\x5c',
    '%5d': '\x5d',
    '%5D': '\x5d',
    '%5e': '\x5e',
    '%5E': '\x5e',
    '%5f': '\x5f',
    '%5F': '\x5f',
    '%60': '\x60',
    '%61': '\x61',
    '%62': '\x62',
    '%63': '\x63',
    '%64': '\x64',
    '%65': '\x65',
    '%66': '\x66',
    '%67': '\x67',
    '%68': '\x68',
    '%69': '\x69',
    '%6a': '\x6a',
    '%6A': '\x6a',
    '%6b': '\x6b',
    '%6B': '\x6b',
    '%6c': '\x6c',
    '%6C': '\x6c',
    '%6d': '\x6d',
    '%6D': '\x6d',
    '%6e': '\x6e',
    '%6E': '\x6e',
    '%6f': '\x6f',
    '%6F': '\x6f',
    '%70': '\x70',
    '%71': '\x71',
    '%72': '\x72',
    '%73': '\x73',
    '%74': '\x74',
    '%75': '\x75',
    '%76': '\x76',
    '%77': '\x77',
    '%78': '\x78',
    '%79': '\x79',
    '%7a': '\x7a',
    '%7A': '\x7a',
    '%7b': '\x7b',
    '%7B': '\x7b',
    '%7c': '\x7c',
    '%7C': '\x7c',
    '%7d': '\x7d',
    '%7D': '\x7d',
    '%7e': '\x7e',
    '%7E': '\x7e',
    '%7f': '\x7f',
    '%7F': '\x7f',
    '%80': '\x80',
    '%81': '\x81',
    '%82': '\x82',
    '%83': '\x83',
    '%84': '\x84',
    '%85': '\x85',
    '%86': '\x86',
    '%87': '\x87',
    '%88': '\x88',
    '%89': '\x89',
    '%8a': '\x8a',
    '%8A': '\x8a',
    '%8b': '\x8b',
    '%8B': '\x8b',
    '%8c': '\x8c',
    '%8C': '\x8c',
    '%8d': '\x8d',
    '%8D': '\x8d',
    '%8e': '\x8e',
    '%8E': '\x8e',
    '%8f': '\x8f',
    '%8F': '\x8f',
    '%90': '\x90',
    '%91': '\x91',
    '%92': '\x92',
    '%93': '\x93',
    '%94': '\x94',
    '%95': '\x95',
    '%96': '\x96',
    '%97': '\x97',
    '%98': '\x98',
    '%99': '\x99',
    '%9a': '\x9a',
    '%9A': '\x9a',
    '%9b': '\x9b',
    '%9B': '\x9b',
    '%9c': '\x9c',
    '%9C': '\x9c',
    '%9d': '\x9d',
    '%9D': '\x9d',
    '%9e': '\x9e',
    '%9E': '\x9e',
    '%9f': '\x9f',
    '%9F': '\x9f',
    '%a0': '\xa0',
    '%A0': '\xa0',
    '%a1': '\xa1',
    '%A1': '\xa1',
    '%a2': '\xa2',
    '%A2': '\xa2',
    '%a3': '\xa3',
    '%A3': '\xa3',
    '%a4': '\xa4',
    '%A4': '\xa4',
    '%a5': '\xa5',
    '%A5': '\xa5',
    '%a6': '\xa6',
    '%A6': '\xa6',
    '%a7': '\xa7',
    '%A7': '\xa7',
    '%a8': '\xa8',
    '%A8': '\xa8',
    '%a9': '\xa9',
    '%A9': '\xa9',
    '%aa': '\xaa',
    '%Aa': '\xaa',
    '%aA': '\xaa',
    '%AA': '\xaa',
    '%ab': '\xab',
    '%Ab': '\xab',
    '%aB': '\xab',
    '%AB': '\xab',
    '%ac': '\xac',
    '%Ac': '\xac',
    '%aC': '\xac',
    '%AC': '\xac',
    '%ad': '\xad',
    '%Ad': '\xad',
    '%aD': '\xad',
    '%AD': '\xad',
    '%ae': '\xae',
    '%Ae': '\xae',
    '%aE': '\xae',
    '%AE': '\xae',
    '%af': '\xaf',
    '%Af': '\xaf',
    '%aF': '\xaf',
    '%AF': '\xaf',
    '%b0': '\xb0',
    '%B0': '\xb0',
    '%b1': '\xb1',
    '%B1': '\xb1',
    '%b2': '\xb2',
    '%B2': '\xb2',
    '%b3': '\xb3',
    '%B3': '\xb3',
    '%b4': '\xb4',
    '%B4': '\xb4',
    '%b5': '\xb5',
    '%B5': '\xb5',
    '%b6': '\xb6',
    '%B6': '\xb6',
    '%b7': '\xb7',
    '%B7': '\xb7',
    '%b8': '\xb8',
    '%B8': '\xb8',
    '%b9': '\xb9',
    '%B9': '\xb9',
    '%ba': '\xba',
    '%Ba': '\xba',
    '%bA': '\xba',
    '%BA': '\xba',
    '%bb': '\xbb',
    '%Bb': '\xbb',
    '%bB': '\xbb',
    '%BB': '\xbb',
    '%bc': '\xbc',
    '%Bc': '\xbc',
    '%bC': '\xbc',
    '%BC': '\xbc',
    '%bd': '\xbd',
    '%Bd': '\xbd',
    '%bD': '\xbd',
    '%BD': '\xbd',
    '%be': '\xbe',
    '%Be': '\xbe',
    '%bE': '\xbe',
    '%BE': '\xbe',
    '%bf': '\xbf',
    '%Bf': '\xbf',
    '%bF': '\xbf',
    '%BF': '\xbf',
    '%c0': '\xc0',
    '%C0': '\xc0',
    '%c1': '\xc1',
    '%C1': '\xc1',
    '%c2': '\xc2',
    '%C2': '\xc2',
    '%c3': '\xc3',
    '%C3': '\xc3',
    '%c4': '\xc4',
    '%C4': '\xc4',
    '%c5': '\xc5',
    '%C5': '\xc5',
    '%c6': '\xc6',
    '%C6': '\xc6',
    '%c7': '\xc7',
    '%C7': '\xc7',
    '%c8': '\xc8',
    '%C8': '\xc8',
    '%c9': '\xc9',
    '%C9': '\xc9',
    '%ca': '\xca',
    '%Ca': '\xca',
    '%cA': '\xca',
    '%CA': '\xca',
    '%cb': '\xcb',
    '%Cb': '\xcb',
    '%cB': '\xcb',
    '%CB': '\xcb',
    '%cc': '\xcc',
    '%Cc': '\xcc',
    '%cC': '\xcc',
    '%CC': '\xcc',
    '%cd': '\xcd',
    '%Cd': '\xcd',
    '%cD': '\xcd',
    '%CD': '\xcd',
    '%ce': '\xce',
    '%Ce': '\xce',
    '%cE': '\xce',
    '%CE': '\xce',
    '%cf': '\xcf',
    '%Cf': '\xcf',
    '%cF': '\xcf',
    '%CF': '\xcf',
    '%d0': '\xd0',
    '%D0': '\xd0',
    '%d1': '\xd1',
    '%D1': '\xd1',
    '%d2': '\xd2',
    '%D2': '\xd2',
    '%d3': '\xd3',
    '%D3': '\xd3',
    '%d4': '\xd4',
    '%D4': '\xd4',
    '%d5': '\xd5',
    '%D5': '\xd5',
    '%d6': '\xd6',
    '%D6': '\xd6',
    '%d7': '\xd7',
    '%D7': '\xd7',
    '%d8': '\xd8',
    '%D8': '\xd8',
    '%d9': '\xd9',
    '%D9': '\xd9',
    '%da': '\xda',
    '%Da': '\xda',
    '%dA': '\xda',
    '%DA': '\xda',
    '%db': '\xdb',
    '%Db': '\xdb',
    '%dB': '\xdb',
    '%DB': '\xdb',
    '%dc': '\xdc',
    '%Dc': '\xdc',
    '%dC': '\xdc',
    '%DC': '\xdc',
    '%dd': '\xdd',
    '%Dd': '\xdd',
    '%dD': '\xdd',
    '%DD': '\xdd',
    '%de': '\xde',
    '%De': '\xde',
    '%dE': '\xde',
    '%DE': '\xde',
    '%df': '\xdf',
    '%Df': '\xdf',
    '%dF': '\xdf',
    '%DF': '\xdf',
    '%e0': '\xe0',
    '%E0': '\xe0',
    '%e1': '\xe1',
    '%E1': '\xe1',
    '%e2': '\xe2',
    '%E2': '\xe2',
    '%e3': '\xe3',
    '%E3': '\xe3',
    '%e4': '\xe4',
    '%E4': '\xe4',
    '%e5': '\xe5',
    '%E5': '\xe5',
    '%e6': '\xe6',
    '%E6': '\xe6',
    '%e7': '\xe7',
    '%E7': '\xe7',
    '%e8': '\xe8',
    '%E8': '\xe8',
    '%e9': '\xe9',
    '%E9': '\xe9',
    '%ea': '\xea',
    '%Ea': '\xea',
    '%eA': '\xea',
    '%EA': '\xea',
    '%eb': '\xeb',
    '%Eb': '\xeb',
    '%eB': '\xeb',
    '%EB': '\xeb',
    '%ec': '\xec',
    '%Ec': '\xec',
    '%eC': '\xec',
    '%EC': '\xec',
    '%ed': '\xed',
    '%Ed': '\xed',
    '%eD': '\xed',
    '%ED': '\xed',
    '%ee': '\xee',
    '%Ee': '\xee',
    '%eE': '\xee',
    '%EE': '\xee',
    '%ef': '\xef',
    '%Ef': '\xef',
    '%eF': '\xef',
    '%EF': '\xef',
    '%f0': '\xf0',
    '%F0': '\xf0',
    '%f1': '\xf1',
    '%F1': '\xf1',
    '%f2': '\xf2',
    '%F2': '\xf2',
    '%f3': '\xf3',
    '%F3': '\xf3',
    '%f4': '\xf4',
    '%F4': '\xf4',
    '%f5': '\xf5',
    '%F5': '\xf5',
    '%f6': '\xf6',
    '%F6': '\xf6',
    '%f7': '\xf7',
    '%F7': '\xf7',
    '%f8': '\xf8',
    '%F8': '\xf8',
    '%f9': '\xf9',
    '%F9': '\xf9',
    '%fa': '\xfa',
    '%Fa': '\xfa',
    '%fA': '\xfa',
    '%FA': '\xfa',
    '%fb': '\xfb',
    '%Fb': '\xfb',
    '%fB': '\xfb',
    '%FB': '\xfb',
    '%fc': '\xfc',
    '%Fc': '\xfc',
    '%fC': '\xfc',
    '%FC': '\xfc',
    '%fd': '\xfd',
    '%Fd': '\xfd',
    '%fD': '\xfd',
    '%FD': '\xfd',
    '%fe': '\xfe',
    '%Fe': '\xfe',
    '%fE': '\xfe',
    '%FE': '\xfe',
    '%ff': '\xff',
    '%Ff': '\xff',
    '%fF': '\xff',
    '%FF': '\xff'
};
function encodedReplacer(match) {
    return EncodedLookup[match];
}
const STATE_KEY = 0;
const STATE_VALUE = 1;
const STATE_CHARSET = 2;
const STATE_LANG = 3;
function parseParams(str) {
    const res = [];
    let state = STATE_KEY;
    let charset = '';
    let inquote = false;
    let escaping = false;
    let p = 0;
    let tmp = '';
    const len = str.length;
    for(var i = 0; i < len; ++i){
        const char = str[i];
        if (char === '\\' && inquote) {
            if (escaping) {
                escaping = false;
            } else {
                escaping = true;
                continue;
            }
        } else if (char === '"') {
            if (!escaping) {
                if (inquote) {
                    inquote = false;
                    state = STATE_KEY;
                } else {
                    inquote = true;
                }
                continue;
            } else {
                escaping = false;
            }
        } else {
            if (escaping && inquote) {
                tmp += '\\';
            }
            escaping = false;
            if ((state === STATE_CHARSET || state === STATE_LANG) && char === "'") {
                if (state === STATE_CHARSET) {
                    state = STATE_LANG;
                    charset = tmp.substring(1);
                } else {
                    state = STATE_VALUE;
                }
                tmp = '';
                continue;
            } else if (state === STATE_KEY && (char === '*' || char === '=') && res.length) {
                state = char === '*' ? STATE_CHARSET : STATE_VALUE;
                res[p] = [
                    tmp,
                    undefined
                ];
                tmp = '';
                continue;
            } else if (!inquote && char === ';') {
                state = STATE_KEY;
                if (charset) {
                    if (tmp.length) {
                        tmp = decodeText(tmp.replace(RE_ENCODED, encodedReplacer), 'binary', charset);
                    }
                    charset = '';
                } else if (tmp.length) {
                    tmp = decodeText(tmp, 'binary', 'utf8');
                }
                if (res[p] === undefined) {
                    res[p] = tmp;
                } else {
                    res[p][1] = tmp;
                }
                tmp = '';
                ++p;
                continue;
            } else if (!inquote && (char === ' ' || char === '\t')) {
                continue;
            }
        }
        tmp += char;
    }
    if (charset && tmp.length) {
        tmp = decodeText(tmp.replace(RE_ENCODED, encodedReplacer), 'binary', charset);
    } else if (tmp) {
        tmp = decodeText(tmp, 'binary', 'utf8');
    }
    if (res[p] === undefined) {
        if (tmp) {
            res[p] = tmp;
        }
    } else {
        res[p][1] = tmp;
    }
    return res;
}
module.exports = parseParams;
}),
"[project]/learn-next/final/node_modules/@fastify/busboy/lib/utils/basename.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = function basename(path) {
    if (typeof path !== 'string') {
        return '';
    }
    for(var i = path.length - 1; i >= 0; --i){
        switch(path.charCodeAt(i)){
            case 0x2F:
            case 0x5C:
                path = path.slice(i + 1);
                return path === '..' || path === '.' ? '' : path;
        }
    }
    return path === '..' || path === '.' ? '' : path;
};
}),
"[project]/learn-next/final/node_modules/@fastify/busboy/lib/types/multipart.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

// TODO:
//  * support 1 nested multipart level
//    (see second multipart example here:
//     http://www.w3.org/TR/html401/interact/forms.html#didx-multipartform-data)
//  * support limits.fieldNameSize
//     -- this will require modifications to utils.parseParams
const { Readable } = __turbopack_context__.r("[externals]/node:stream [external] (node:stream, cjs)");
const { inherits } = __turbopack_context__.r("[externals]/node:util [external] (node:util, cjs)");
const Dicer = __turbopack_context__.r("[project]/learn-next/final/node_modules/@fastify/busboy/deps/dicer/lib/Dicer.js [app-ssr] (ecmascript)");
const parseParams = __turbopack_context__.r("[project]/learn-next/final/node_modules/@fastify/busboy/lib/utils/parseParams.js [app-ssr] (ecmascript)");
const decodeText = __turbopack_context__.r("[project]/learn-next/final/node_modules/@fastify/busboy/lib/utils/decodeText.js [app-ssr] (ecmascript)");
const basename = __turbopack_context__.r("[project]/learn-next/final/node_modules/@fastify/busboy/lib/utils/basename.js [app-ssr] (ecmascript)");
const getLimit = __turbopack_context__.r("[project]/learn-next/final/node_modules/@fastify/busboy/lib/utils/getLimit.js [app-ssr] (ecmascript)");
const RE_BOUNDARY = /^boundary$/i;
const RE_FIELD = /^form-data$/i;
const RE_CHARSET = /^charset$/i;
const RE_FILENAME = /^filename$/i;
const RE_NAME = /^name$/i;
Multipart.detect = /^multipart\/form-data/i;
function Multipart(boy, cfg) {
    let i;
    let len;
    const self = this;
    let boundary;
    const limits = cfg.limits;
    const isPartAFile = cfg.isPartAFile || ((fieldName, contentType, fileName)=>contentType === 'application/octet-stream' || fileName !== undefined);
    const parsedConType = cfg.parsedConType || [];
    const defCharset = cfg.defCharset || 'utf8';
    const preservePath = cfg.preservePath;
    const fileOpts = {
        highWaterMark: cfg.fileHwm
    };
    for(i = 0, len = parsedConType.length; i < len; ++i){
        if (Array.isArray(parsedConType[i]) && RE_BOUNDARY.test(parsedConType[i][0])) {
            boundary = parsedConType[i][1];
            break;
        }
    }
    function checkFinished() {
        if (nends === 0 && finished && !boy._done) {
            finished = false;
            self.end();
        }
    }
    if (typeof boundary !== 'string') {
        throw new Error('Multipart: Boundary not found');
    }
    const fieldSizeLimit = getLimit(limits, 'fieldSize', 1 * 1024 * 1024);
    const fileSizeLimit = getLimit(limits, 'fileSize', Infinity);
    const filesLimit = getLimit(limits, 'files', Infinity);
    const fieldsLimit = getLimit(limits, 'fields', Infinity);
    const partsLimit = getLimit(limits, 'parts', Infinity);
    const headerPairsLimit = getLimit(limits, 'headerPairs', 2000);
    const headerSizeLimit = getLimit(limits, 'headerSize', 80 * 1024);
    let nfiles = 0;
    let nfields = 0;
    let nends = 0;
    let curFile;
    let curField;
    let finished = false;
    this._needDrain = false;
    this._pause = false;
    this._cb = undefined;
    this._nparts = 0;
    this._boy = boy;
    const parserCfg = {
        boundary,
        maxHeaderPairs: headerPairsLimit,
        maxHeaderSize: headerSizeLimit,
        partHwm: fileOpts.highWaterMark,
        highWaterMark: cfg.highWaterMark
    };
    this.parser = new Dicer(parserCfg);
    this.parser.on('drain', function() {
        self._needDrain = false;
        if (self._cb && !self._pause) {
            const cb = self._cb;
            self._cb = undefined;
            cb();
        }
    }).on('part', function onPart(part) {
        if (++self._nparts > partsLimit) {
            self.parser.removeListener('part', onPart);
            self.parser.on('part', skipPart);
            boy.hitPartsLimit = true;
            boy.emit('partsLimit');
            return skipPart(part);
        }
        // hack because streams2 _always_ doesn't emit 'end' until nextTick, so let
        // us emit 'end' early since we know the part has ended if we are already
        // seeing the next part
        if (curField) {
            const field = curField;
            field.emit('end');
            field.removeAllListeners('end');
        }
        part.on('header', function(header) {
            let contype;
            let fieldname;
            let parsed;
            let charset;
            let encoding;
            let filename;
            let nsize = 0;
            if (header['content-type']) {
                parsed = parseParams(header['content-type'][0]);
                if (parsed[0]) {
                    contype = parsed[0].toLowerCase();
                    for(i = 0, len = parsed.length; i < len; ++i){
                        if (RE_CHARSET.test(parsed[i][0])) {
                            charset = parsed[i][1].toLowerCase();
                            break;
                        }
                    }
                }
            }
            if (contype === undefined) {
                contype = 'text/plain';
            }
            if (charset === undefined) {
                charset = defCharset;
            }
            if (header['content-disposition']) {
                parsed = parseParams(header['content-disposition'][0]);
                if (!RE_FIELD.test(parsed[0])) {
                    return skipPart(part);
                }
                for(i = 0, len = parsed.length; i < len; ++i){
                    if (RE_NAME.test(parsed[i][0])) {
                        fieldname = parsed[i][1];
                    } else if (RE_FILENAME.test(parsed[i][0])) {
                        filename = parsed[i][1];
                        if (!preservePath) {
                            filename = basename(filename);
                        }
                    }
                }
            } else {
                return skipPart(part);
            }
            if (header['content-transfer-encoding']) {
                encoding = header['content-transfer-encoding'][0].toLowerCase();
            } else {
                encoding = '7bit';
            }
            let onData, onEnd;
            if (isPartAFile(fieldname, contype, filename)) {
                // file/binary field
                if (nfiles === filesLimit) {
                    if (!boy.hitFilesLimit) {
                        boy.hitFilesLimit = true;
                        boy.emit('filesLimit');
                    }
                    return skipPart(part);
                }
                ++nfiles;
                if (boy.listenerCount('file') === 0) {
                    self.parser._ignore();
                    return;
                }
                ++nends;
                const file = new FileStream(fileOpts);
                curFile = file;
                file.on('end', function() {
                    --nends;
                    self._pause = false;
                    checkFinished();
                    if (self._cb && !self._needDrain) {
                        const cb = self._cb;
                        self._cb = undefined;
                        cb();
                    }
                });
                file._read = function(n) {
                    if (!self._pause) {
                        return;
                    }
                    self._pause = false;
                    if (self._cb && !self._needDrain) {
                        const cb = self._cb;
                        self._cb = undefined;
                        cb();
                    }
                };
                boy.emit('file', fieldname, file, filename, encoding, contype);
                onData = function(data) {
                    if ((nsize += data.length) > fileSizeLimit) {
                        const extralen = fileSizeLimit - nsize + data.length;
                        if (extralen > 0) {
                            file.push(data.slice(0, extralen));
                        }
                        file.truncated = true;
                        file.bytesRead = fileSizeLimit;
                        part.removeAllListeners('data');
                        file.emit('limit');
                        return;
                    } else if (!file.push(data)) {
                        self._pause = true;
                    }
                    file.bytesRead = nsize;
                };
                onEnd = function() {
                    curFile = undefined;
                    file.push(null);
                };
            } else {
                // non-file field
                if (nfields === fieldsLimit) {
                    if (!boy.hitFieldsLimit) {
                        boy.hitFieldsLimit = true;
                        boy.emit('fieldsLimit');
                    }
                    return skipPart(part);
                }
                ++nfields;
                ++nends;
                let buffer = '';
                let truncated = false;
                curField = part;
                onData = function(data) {
                    if ((nsize += data.length) > fieldSizeLimit) {
                        const extralen = fieldSizeLimit - (nsize - data.length);
                        buffer += data.toString('binary', 0, extralen);
                        truncated = true;
                        part.removeAllListeners('data');
                    } else {
                        buffer += data.toString('binary');
                    }
                };
                onEnd = function() {
                    curField = undefined;
                    if (buffer.length) {
                        buffer = decodeText(buffer, 'binary', charset);
                    }
                    boy.emit('field', fieldname, buffer, false, truncated, encoding, contype);
                    --nends;
                    checkFinished();
                };
            }
            /* As of node@2efe4ab761666 (v0.10.29+/v0.11.14+), busboy had become
         broken. Streams2/streams3 is a huge black box of confusion, but
         somehow overriding the sync state seems to fix things again (and still
         seems to work for previous node versions).
      */ part._readableState.sync = false;
            part.on('data', onData);
            part.on('end', onEnd);
        }).on('error', function(err) {
            if (curFile) {
                curFile.emit('error', err);
            }
        });
    }).on('error', function(err) {
        boy.emit('error', err);
    }).on('finish', function() {
        finished = true;
        checkFinished();
    });
}
Multipart.prototype.write = function(chunk, cb) {
    const r = this.parser.write(chunk);
    if (r && !this._pause) {
        cb();
    } else {
        this._needDrain = !r;
        this._cb = cb;
    }
};
Multipart.prototype.end = function() {
    const self = this;
    if (self.parser.writable) {
        self.parser.end();
    } else if (!self._boy._done) {
        process.nextTick(function() {
            self._boy._done = true;
            self._boy.emit('finish');
        });
    }
};
function skipPart(part) {
    part.resume();
}
function FileStream(opts) {
    Readable.call(this, opts);
    this.bytesRead = 0;
    this.truncated = false;
}
inherits(FileStream, Readable);
FileStream.prototype._read = function(n) {};
module.exports = Multipart;
}),
"[project]/learn-next/final/node_modules/@fastify/busboy/lib/utils/Decoder.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const RE_PLUS = /\+/g;
const HEX = [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    1,
    1,
    1,
    1,
    1,
    1,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    1,
    1,
    1,
    1,
    1,
    1,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0
];
function Decoder() {
    this.buffer = undefined;
}
Decoder.prototype.write = function(str) {
    // Replace '+' with ' ' before decoding
    str = str.replace(RE_PLUS, ' ');
    let res = '';
    let i = 0;
    let p = 0;
    const len = str.length;
    for(; i < len; ++i){
        if (this.buffer !== undefined) {
            if (!HEX[str.charCodeAt(i)]) {
                res += '%' + this.buffer;
                this.buffer = undefined;
                --i; // retry character
            } else {
                this.buffer += str[i];
                ++p;
                if (this.buffer.length === 2) {
                    res += String.fromCharCode(parseInt(this.buffer, 16));
                    this.buffer = undefined;
                }
            }
        } else if (str[i] === '%') {
            if (i > p) {
                res += str.substring(p, i);
                p = i;
            }
            this.buffer = '';
            ++p;
        }
    }
    if (p < len && this.buffer === undefined) {
        res += str.substring(p);
    }
    return res;
};
Decoder.prototype.reset = function() {
    this.buffer = undefined;
};
module.exports = Decoder;
}),
"[project]/learn-next/final/node_modules/@fastify/busboy/lib/types/urlencoded.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const Decoder = __turbopack_context__.r("[project]/learn-next/final/node_modules/@fastify/busboy/lib/utils/Decoder.js [app-ssr] (ecmascript)");
const decodeText = __turbopack_context__.r("[project]/learn-next/final/node_modules/@fastify/busboy/lib/utils/decodeText.js [app-ssr] (ecmascript)");
const getLimit = __turbopack_context__.r("[project]/learn-next/final/node_modules/@fastify/busboy/lib/utils/getLimit.js [app-ssr] (ecmascript)");
const RE_CHARSET = /^charset$/i;
UrlEncoded.detect = /^application\/x-www-form-urlencoded/i;
function UrlEncoded(boy, cfg) {
    const limits = cfg.limits;
    const parsedConType = cfg.parsedConType;
    this.boy = boy;
    this.fieldSizeLimit = getLimit(limits, 'fieldSize', 1 * 1024 * 1024);
    this.fieldNameSizeLimit = getLimit(limits, 'fieldNameSize', 100);
    this.fieldsLimit = getLimit(limits, 'fields', Infinity);
    let charset;
    for(var i = 0, len = parsedConType.length; i < len; ++i){
        if (Array.isArray(parsedConType[i]) && RE_CHARSET.test(parsedConType[i][0])) {
            charset = parsedConType[i][1].toLowerCase();
            break;
        }
    }
    if (charset === undefined) {
        charset = cfg.defCharset || 'utf8';
    }
    this.decoder = new Decoder();
    this.charset = charset;
    this._fields = 0;
    this._state = 'key';
    this._checkingBytes = true;
    this._bytesKey = 0;
    this._bytesVal = 0;
    this._key = '';
    this._val = '';
    this._keyTrunc = false;
    this._valTrunc = false;
    this._hitLimit = false;
}
UrlEncoded.prototype.write = function(data, cb) {
    if (this._fields === this.fieldsLimit) {
        if (!this.boy.hitFieldsLimit) {
            this.boy.hitFieldsLimit = true;
            this.boy.emit('fieldsLimit');
        }
        return cb();
    }
    let idxeq;
    let idxamp;
    let i;
    let p = 0;
    const len = data.length;
    while(p < len){
        if (this._state === 'key') {
            idxeq = idxamp = undefined;
            for(i = p; i < len; ++i){
                if (!this._checkingBytes) {
                    ++p;
                }
                if (data[i] === 0x3D /* = */ ) {
                    idxeq = i;
                    break;
                } else if (data[i] === 0x26 /* & */ ) {
                    idxamp = i;
                    break;
                }
                if (this._checkingBytes && this._bytesKey === this.fieldNameSizeLimit) {
                    this._hitLimit = true;
                    break;
                } else if (this._checkingBytes) {
                    ++this._bytesKey;
                }
            }
            if (idxeq !== undefined) {
                // key with assignment
                if (idxeq > p) {
                    this._key += this.decoder.write(data.toString('binary', p, idxeq));
                }
                this._state = 'val';
                this._hitLimit = false;
                this._checkingBytes = true;
                this._val = '';
                this._bytesVal = 0;
                this._valTrunc = false;
                this.decoder.reset();
                p = idxeq + 1;
            } else if (idxamp !== undefined) {
                // key with no assignment
                ++this._fields;
                let key;
                const keyTrunc = this._keyTrunc;
                if (idxamp > p) {
                    key = this._key += this.decoder.write(data.toString('binary', p, idxamp));
                } else {
                    key = this._key;
                }
                this._hitLimit = false;
                this._checkingBytes = true;
                this._key = '';
                this._bytesKey = 0;
                this._keyTrunc = false;
                this.decoder.reset();
                if (key.length) {
                    this.boy.emit('field', decodeText(key, 'binary', this.charset), '', keyTrunc, false);
                }
                p = idxamp + 1;
                if (this._fields === this.fieldsLimit) {
                    return cb();
                }
            } else if (this._hitLimit) {
                // we may not have hit the actual limit if there are encoded bytes...
                if (i > p) {
                    this._key += this.decoder.write(data.toString('binary', p, i));
                }
                p = i;
                if ((this._bytesKey = this._key.length) === this.fieldNameSizeLimit) {
                    // yep, we actually did hit the limit
                    this._checkingBytes = false;
                    this._keyTrunc = true;
                }
            } else {
                if (p < len) {
                    this._key += this.decoder.write(data.toString('binary', p));
                }
                p = len;
            }
        } else {
            idxamp = undefined;
            for(i = p; i < len; ++i){
                if (!this._checkingBytes) {
                    ++p;
                }
                if (data[i] === 0x26 /* & */ ) {
                    idxamp = i;
                    break;
                }
                if (this._checkingBytes && this._bytesVal === this.fieldSizeLimit) {
                    this._hitLimit = true;
                    break;
                } else if (this._checkingBytes) {
                    ++this._bytesVal;
                }
            }
            if (idxamp !== undefined) {
                ++this._fields;
                if (idxamp > p) {
                    this._val += this.decoder.write(data.toString('binary', p, idxamp));
                }
                this.boy.emit('field', decodeText(this._key, 'binary', this.charset), decodeText(this._val, 'binary', this.charset), this._keyTrunc, this._valTrunc);
                this._state = 'key';
                this._hitLimit = false;
                this._checkingBytes = true;
                this._key = '';
                this._bytesKey = 0;
                this._keyTrunc = false;
                this.decoder.reset();
                p = idxamp + 1;
                if (this._fields === this.fieldsLimit) {
                    return cb();
                }
            } else if (this._hitLimit) {
                // we may not have hit the actual limit if there are encoded bytes...
                if (i > p) {
                    this._val += this.decoder.write(data.toString('binary', p, i));
                }
                p = i;
                if (this._val === '' && this.fieldSizeLimit === 0 || (this._bytesVal = this._val.length) === this.fieldSizeLimit) {
                    // yep, we actually did hit the limit
                    this._checkingBytes = false;
                    this._valTrunc = true;
                }
            } else {
                if (p < len) {
                    this._val += this.decoder.write(data.toString('binary', p));
                }
                p = len;
            }
        }
    }
    cb();
};
UrlEncoded.prototype.end = function() {
    if (this.boy._done) {
        return;
    }
    if (this._state === 'key' && this._key.length > 0) {
        this.boy.emit('field', decodeText(this._key, 'binary', this.charset), '', this._keyTrunc, false);
    } else if (this._state === 'val') {
        this.boy.emit('field', decodeText(this._key, 'binary', this.charset), decodeText(this._val, 'binary', this.charset), this._keyTrunc, this._valTrunc);
    }
    this.boy._done = true;
    this.boy.emit('finish');
};
module.exports = UrlEncoded;
}),
"[project]/learn-next/final/node_modules/@fastify/busboy/lib/main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const WritableStream = __turbopack_context__.r("[externals]/node:stream [external] (node:stream, cjs)").Writable;
const { inherits } = __turbopack_context__.r("[externals]/node:util [external] (node:util, cjs)");
const Dicer = __turbopack_context__.r("[project]/learn-next/final/node_modules/@fastify/busboy/deps/dicer/lib/Dicer.js [app-ssr] (ecmascript)");
const MultipartParser = __turbopack_context__.r("[project]/learn-next/final/node_modules/@fastify/busboy/lib/types/multipart.js [app-ssr] (ecmascript)");
const UrlencodedParser = __turbopack_context__.r("[project]/learn-next/final/node_modules/@fastify/busboy/lib/types/urlencoded.js [app-ssr] (ecmascript)");
const parseParams = __turbopack_context__.r("[project]/learn-next/final/node_modules/@fastify/busboy/lib/utils/parseParams.js [app-ssr] (ecmascript)");
function Busboy(opts) {
    if (!(this instanceof Busboy)) {
        return new Busboy(opts);
    }
    if (typeof opts !== 'object') {
        throw new TypeError('Busboy expected an options-Object.');
    }
    if (typeof opts.headers !== 'object') {
        throw new TypeError('Busboy expected an options-Object with headers-attribute.');
    }
    if (typeof opts.headers['content-type'] !== 'string') {
        throw new TypeError('Missing Content-Type-header.');
    }
    const { headers, ...streamOptions } = opts;
    this.opts = {
        autoDestroy: false,
        ...streamOptions
    };
    WritableStream.call(this, this.opts);
    this._done = false;
    this._parser = this.getParserByHeaders(headers);
    this._finished = false;
}
inherits(Busboy, WritableStream);
Busboy.prototype.emit = function(ev) {
    if (ev === 'finish') {
        if (!this._done) {
            this._parser?.end();
            return;
        } else if (this._finished) {
            return;
        }
        this._finished = true;
    }
    WritableStream.prototype.emit.apply(this, arguments);
};
Busboy.prototype.getParserByHeaders = function(headers) {
    const parsed = parseParams(headers['content-type']);
    const cfg = {
        defCharset: this.opts.defCharset,
        fileHwm: this.opts.fileHwm,
        headers,
        highWaterMark: this.opts.highWaterMark,
        isPartAFile: this.opts.isPartAFile,
        limits: this.opts.limits,
        parsedConType: parsed,
        preservePath: this.opts.preservePath
    };
    if (MultipartParser.detect.test(parsed[0])) {
        return new MultipartParser(this, cfg);
    }
    if (UrlencodedParser.detect.test(parsed[0])) {
        return new UrlencodedParser(this, cfg);
    }
    throw new Error('Unsupported Content-Type.');
};
Busboy.prototype._write = function(chunk, encoding, cb) {
    this._parser.write(chunk, cb);
};
module.exports = Busboy;
module.exports.default = Busboy;
module.exports.Busboy = Busboy;
module.exports.Dicer = Dicer;
}),
"[project]/learn-next/final/node_modules/@iamtraction/google-translate/src/languages.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

/**
 * Generated from https://translate.google.com
 *
 * The languages that Google Translate supports (as of 7/5/2020) alongside
 * their ISO 639-1 codes
 * @see https://cloud.google.com/translate/docs/languages
 * @see https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes
 */ const languages = {
    "auto": "Automatic",
    "af": "Afrikaans",
    "sq": "Albanian",
    "am": "Amharic",
    "ar": "Arabic",
    "hy": "Armenian",
    "az": "Azerbaijani",
    "eu": "Basque",
    "be": "Belarusian",
    "bn": "Bengali",
    "bs": "Bosnian",
    "bg": "Bulgarian",
    "ca": "Catalan",
    "ceb": "Cebuano",
    "ny": "Chichewa",
    "zh-cn": "Chinese Simplified",
    "zh-tw": "Chinese Traditional",
    "co": "Corsican",
    "hr": "Croatian",
    "cs": "Czech",
    "da": "Danish",
    "nl": "Dutch",
    "en": "English",
    "eo": "Esperanto",
    "et": "Estonian",
    "tl": "Filipino",
    "fi": "Finnish",
    "fr": "French",
    "fy": "Frisian",
    "gl": "Galician",
    "ka": "Georgian",
    "de": "German",
    "el": "Greek",
    "gu": "Gujarati",
    "ht": "Haitian Creole",
    "ha": "Hausa",
    "haw": "Hawaiian",
    "iw": "Hebrew",
    "hi": "Hindi",
    "hmn": "Hmong",
    "hu": "Hungarian",
    "is": "Icelandic",
    "ig": "Igbo",
    "id": "Indonesian",
    "ga": "Irish",
    "it": "Italian",
    "ja": "Japanese",
    "jw": "Javanese",
    "kn": "Kannada",
    "kk": "Kazakh",
    "km": "Khmer",
    "ko": "Korean",
    "ku": "Kurdish (Kurmanji)",
    "ky": "Kyrgyz",
    "lo": "Lao",
    "la": "Latin",
    "lv": "Latvian",
    "lt": "Lithuanian",
    "lb": "Luxembourgish",
    "mk": "Macedonian",
    "mg": "Malagasy",
    "ms": "Malay",
    "ml": "Malayalam",
    "mt": "Maltese",
    "mi": "Maori",
    "mr": "Marathi",
    "mn": "Mongolian",
    "my": "Myanmar (Burmese)",
    "ne": "Nepali",
    "no": "Norwegian",
    "ps": "Pashto",
    "fa": "Persian",
    "pl": "Polish",
    "pt": "Portuguese",
    "pa": "Punjabi",
    "ro": "Romanian",
    "ru": "Russian",
    "sm": "Samoan",
    "gd": "Scots Gaelic",
    "sr": "Serbian",
    "st": "Sesotho",
    "sn": "Shona",
    "sd": "Sindhi",
    "si": "Sinhala",
    "sk": "Slovak",
    "sl": "Slovenian",
    "so": "Somali",
    "es": "Spanish",
    "su": "Sundanese",
    "sw": "Swahili",
    "sv": "Swedish",
    "tg": "Tajik",
    "ta": "Tamil",
    "te": "Telugu",
    "th": "Thai",
    "tr": "Turkish",
    "uk": "Ukrainian",
    "ur": "Urdu",
    "uz": "Uzbek",
    "vi": "Vietnamese",
    "cy": "Welsh",
    "xh": "Xhosa",
    "yi": "Yiddish",
    "yo": "Yoruba",
    "zu": "Zulu"
};
/**
 * Returns the ISO 639-1 code of the desiredLang – if it is supported by
 * Google Translate
 * @param {string} language The name or the code of the desired language
 * @returns {string|boolean} The ISO 639-1 code of the language or null if the
 * language is not supported
 */ function getISOCode(language) {
    if (!language) return false;
    language = language.toLowerCase();
    if (language in languages) return language;
    let keys = Object.keys(languages).filter((key)=>{
        if (typeof languages[key] !== "string") return false;
        return languages[key].toLowerCase() === language;
    });
    return keys[0] || null;
}
/**
 * Returns true if the desiredLang is supported by Google Translate and false otherwise
 * @param {String} language The ISO 639-1 code or the name of the desired language.
 * @returns {boolean} If the language is supported or not.
 */ function isSupported(language) {
    return Boolean(getISOCode(language));
}
module.exports = languages;
module.exports.isSupported = isSupported;
module.exports.getISOCode = getISOCode;
}),
"[project]/learn-next/final/node_modules/@iamtraction/google-translate/src/tokenGenerator.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

/**
 * Last update: 2/11/2018
 * https://translate.google.com/translate/releases/twsfe_w_20160620_RC00/r/js/desktop_module_main.js
 *
 * Everything between 'BEGIN' and 'END' was copied from the script above.
 */ const { request } = __turbopack_context__.r("[project]/learn-next/final/node_modules/undici/index.js [app-ssr] (ecmascript)");
/* eslint-disable */ // BEGIN
function zr(a) {
    let b;
    if (null !== yr) b = yr;
    else {
        b = wr(String.fromCharCode(84));
        let c = wr(String.fromCharCode(75));
        b = [
            b(),
            b()
        ];
        b[1] = c();
        b = (yr = window[b.join(c())] || "") || "";
    }
    let d = wr(String.fromCharCode(116));
    let c = wr(String.fromCharCode(107));
    d = [
        d(),
        d()
    ];
    d[1] = c();
    c = "&" + d.join("") + "=";
    d = b.split(".");
    b = Number(d[0]) || 0;
    // eslint-disable-next-line no-var
    for(var e = [], f = 0, g = 0; g < a.length; g++){
        let l = a.charCodeAt(g);
        128 > l ? e[f++] = l : (2048 > l ? e[f++] = l >> 6 | 192 : ((l & 64512) == 55296 && g + 1 < a.length && (a.charCodeAt(g + 1) & 64512) == 56320 ? (l = 65536 + ((l & 1023) << 10) + (a.charCodeAt(++g) & 1023), e[f++] = l >> 18 | 240, e[f++] = l >> 12 & 63 | 128) : e[f++] = l >> 12 | 224, e[f++] = l >> 6 & 63 | 128), e[f++] = l & 63 | 128);
    }
    a = b;
    for(let f = 0; f < e.length; f++)a += e[f], a = xr(a, "+-a^+6");
    a = xr(a, "+-3^+b+-f");
    a ^= Number(d[1]) || 0;
    0 > a && (a = (a & 2147483647) + 2147483648);
    a %= 1E6;
    return c + (a.toString() + "." + (a ^ b));
}
let yr = null;
let wr = function(a) {
    return function() {
        return a;
    };
};
let xr = function(a, b) {
    for(let c = 0; c < b.length - 2; c += 3){
        let d = b.charAt(c + 2);
        d = d >= "a" ? d.charCodeAt(0) - 87 : Number(d);
        d = b.charAt(c + 1) == "+" ? a >>> d : a << d;
        a = b.charAt(c) == "+" ? a + d & 4294967295 : a ^ d;
    }
    return a;
};
// END
/* eslint-enable */ const config = new Map();
const window = {
    TKK: config.get("TKK") || "0"
};
// eslint-disable-next-line require-jsdoc
async function updateTKK() {
    let now = Math.floor(Date.now() / 3600000);
    if (Number(window.TKK.split(".")[0]) !== now) {
        const response = await request("https://translate.google.com");
        const body = await response.body.text();
        // code will extract something like tkk:'1232135.131231321312', we need only value
        const code = body.match(/tkk:'\d+.\d+'/g);
        if (code.length > 0) {
            // extracting value tkk:'1232135.131231321312', this will extract only token: 1232135.131231321312
            const xt = code[0].split(":")[1].replace(/'/g, "");
            window.TKK = xt;
            config.set("TKK", xt);
        }
    }
}
// eslint-disable-next-line require-jsdoc
async function generate(text) {
    try {
        await updateTKK();
        let tk = zr(text);
        tk = tk.replace("&tk=", "");
        return {
            name: "tk",
            value: tk
        };
    } catch (error) {
        return error;
    }
}
module.exports.generate = generate;
}),
"[project]/learn-next/final/node_modules/@iamtraction/google-translate/src/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

const querystring = __turbopack_context__.r("[externals]/querystring [external] (querystring, cjs)");
const { request } = __turbopack_context__.r("[project]/learn-next/final/node_modules/undici/index.js [app-ssr] (ecmascript)");
const languages = __turbopack_context__.r("[project]/learn-next/final/node_modules/@iamtraction/google-translate/src/languages.js [app-ssr] (ecmascript)");
const tokenGenerator = __turbopack_context__.r("[project]/learn-next/final/node_modules/@iamtraction/google-translate/src/tokenGenerator.js [app-ssr] (ecmascript)");
/**
 * @function translate
 * @param {String} text The text to be translated.
 * @param {Object} options The options object for the translator.
 * @returns {Object} The result containing the translation.
 */ async function translate(text, options) {
    if (typeof options !== "object") options = {};
    text = String(text);
    // Check if a lanugage is in supported; if not, throw an error object.
    let error;
    [
        options.from,
        options.to
    ].forEach((lang)=>{
        if (lang && !languages.isSupported(lang)) {
            error = new Error();
            error.code = 400;
            error.message = `The language '${lang}' is not supported.`;
        }
    });
    if (error) throw error;
    // If options object doesn"t have "from" language, set it to "auto".
    if (!Object.prototype.hasOwnProperty.call(options, "from")) options.from = "auto";
    // If options object doesn"t have "to" language, set it to "en".
    if (!Object.prototype.hasOwnProperty.call(options, "to")) options.to = "en";
    // If options object has a "raw" property evaluating to true, set it to true.
    options.raw = Boolean(options.raw);
    // Get ISO 639-1 codes for the languages.
    options.from = languages.getISOCode(options.from);
    options.to = languages.getISOCode(options.to);
    // Generate Google Translate token for the text to be translated.
    let token = await tokenGenerator.generate(text);
    // URL & query string required by Google Translate.
    let baseUrl = "https://translate.google.com/translate_a/single";
    let data = {
        client: "gtx",
        sl: options.from,
        tl: options.to,
        hl: options.to,
        dt: [
            "at",
            "bd",
            "ex",
            "ld",
            "md",
            "qca",
            "rw",
            "rm",
            "ss",
            "t"
        ],
        ie: "UTF-8",
        oe: "UTF-8",
        otf: 1,
        ssel: 0,
        tsel: 0,
        kc: 7,
        q: text,
        [token.name]: token.value
    };
    // Append query string to the request URL.
    let url = `${baseUrl}?${querystring.stringify(data)}`;
    let requestOptions;
    // If request URL is greater than 2048 characters, use POST method.
    if (url.length > 2048) {
        delete data.q;
        requestOptions = [
            `${baseUrl}?${querystring.stringify(data)}`,
            {
                method: "POST",
                body: new URLSearchParams({
                    q: text
                }).toString(),
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
                }
            }
        ];
    } else {
        requestOptions = [
            url
        ];
    }
    // Request translation from Google Translate.
    let response = await request(...requestOptions);
    let body = await response.body.json();
    let result = {
        text: "",
        from: {
            language: {
                didYouMean: false,
                iso: ""
            },
            text: {
                autoCorrected: false,
                value: "",
                didYouMean: false
            }
        },
        raw: ""
    };
    // If user requested a raw output, add the raw response to the result
    if (options.raw) {
        result.raw = body;
    }
    // Parse body and add it to the result object.
    body[0].forEach((obj)=>{
        if (obj[0]) {
            result.text += obj[0];
        }
    });
    if (body[2] === body[8][0][0]) {
        result.from.language.iso = body[2];
    } else {
        result.from.language.didYouMean = true;
        result.from.language.iso = body[8][0][0];
    }
    if (body[7] && body[7][0]) {
        let str = body[7][0];
        str = str.replace(/<b><i>/g, "[");
        str = str.replace(/<\/i><\/b>/g, "]");
        result.from.text.value = str;
        if (body[7][5] === true) {
            result.from.text.autoCorrected = true;
        } else {
            result.from.text.didYouMean = true;
        }
    }
    return result;
}
module.exports = translate;
module.exports.languages = languages;
}),
"[project]/learn-next/final/node_modules/node-html-parser/dist/nodes/node.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
const he_1 = __turbopack_context__.r("[project]/learn-next/final/node_modules/he/he.js [app-ssr] (ecmascript)");
/**
 * Node Class as base class for TextNode and HTMLElement.
 */ class Node {
    constructor(parentNode = null, range){
        this.parentNode = parentNode;
        this.childNodes = [];
        Object.defineProperty(this, 'range', {
            enumerable: false,
            writable: true,
            configurable: true,
            value: range !== null && range !== void 0 ? range : [
                -1,
                -1
            ]
        });
    }
    /**
     * Remove current node
     */ remove() {
        if (this.parentNode) {
            const children = this.parentNode.childNodes;
            this.parentNode.childNodes = children.filter((child)=>{
                return this !== child;
            });
            this.parentNode = null;
        }
        return this;
    }
    get innerText() {
        return this.rawText;
    }
    get textContent() {
        return (0, he_1.decode)(this.rawText);
    }
    set textContent(val) {
        this.rawText = (0, he_1.encode)(val);
    }
}
exports.default = Node;
}),
"[project]/learn-next/final/node_modules/node-html-parser/dist/nodes/type.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var NodeType;
(function(NodeType) {
    NodeType[NodeType["ELEMENT_NODE"] = 1] = "ELEMENT_NODE";
    NodeType[NodeType["TEXT_NODE"] = 3] = "TEXT_NODE";
    NodeType[NodeType["COMMENT_NODE"] = 8] = "COMMENT_NODE";
})(NodeType || (NodeType = {}));
exports.default = NodeType;
}),
"[project]/learn-next/final/node_modules/node-html-parser/dist/nodes/comment.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __importDefault = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
const node_1 = __importDefault(__turbopack_context__.r("[project]/learn-next/final/node_modules/node-html-parser/dist/nodes/node.js [app-ssr] (ecmascript)"));
const type_1 = __importDefault(__turbopack_context__.r("[project]/learn-next/final/node_modules/node-html-parser/dist/nodes/type.js [app-ssr] (ecmascript)"));
class CommentNode extends node_1.default {
    clone() {
        return new CommentNode(this.rawText, null, undefined, this.rawTagName);
    }
    constructor(rawText, parentNode = null, range, rawTagName = '!--'){
        super(parentNode, range);
        this.rawText = rawText;
        this.rawTagName = rawTagName;
        /**
         * Node Type declaration.
         * @type {Number}
         */ this.nodeType = type_1.default.COMMENT_NODE;
    }
    /**
     * Get unescaped text value of current node and its children.
     * @return {string} text content
     */ get text() {
        return this.rawText;
    }
    toString() {
        return `<!--${this.rawText}-->`;
    }
}
exports.default = CommentNode;
}),
"[project]/learn-next/final/node_modules/node-html-parser/dist/back.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
function arr_back(arr) {
    return arr[arr.length - 1];
}
exports.default = arr_back;
}),
"[project]/learn-next/final/node_modules/node-html-parser/dist/matcher.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __importDefault = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
const type_1 = __importDefault(__turbopack_context__.r("[project]/learn-next/final/node_modules/node-html-parser/dist/nodes/type.js [app-ssr] (ecmascript)"));
function isTag(node) {
    return node && node.nodeType === type_1.default.ELEMENT_NODE;
}
function getAttributeValue(elem, name) {
    return isTag(elem) ? elem.getAttribute(name) : undefined;
}
function getName(elem) {
    return (elem && elem.rawTagName || '').toLowerCase();
}
function getChildren(node) {
    return node && node.childNodes;
}
function getParent(node) {
    return node ? node.parentNode : null;
}
function getText(node) {
    return node.text;
}
function removeSubsets(nodes) {
    let idx = nodes.length;
    let node;
    let ancestor;
    let replace;
    // Check if each node (or one of its ancestors) is already contained in the
    // array.
    while(--idx > -1){
        node = ancestor = nodes[idx];
        // Temporarily remove the node under consideration
        nodes[idx] = null;
        replace = true;
        while(ancestor){
            if (nodes.indexOf(ancestor) > -1) {
                replace = false;
                nodes.splice(idx, 1);
                break;
            }
            ancestor = getParent(ancestor);
        }
        // If the node has been found to be unique, re-insert it.
        if (replace) {
            nodes[idx] = node;
        }
    }
    return nodes;
}
function existsOne(test, elems) {
    return elems.some((elem)=>{
        return isTag(elem) ? test(elem) || existsOne(test, getChildren(elem)) : false;
    });
}
function getSiblings(node) {
    const parent = getParent(node);
    return parent ? getChildren(parent) : [];
}
function hasAttrib(elem, name) {
    return getAttributeValue(elem, name) !== undefined;
}
function findOne(test, elems) {
    let elem = null;
    for(let i = 0, l = elems === null || elems === void 0 ? void 0 : elems.length; i < l && !elem; i++){
        const el = elems[i];
        if (test(el)) {
            elem = el;
        } else {
            const childs = getChildren(el);
            if (childs && childs.length > 0) {
                elem = findOne(test, childs);
            }
        }
    }
    return elem;
}
function findAll(test, nodes) {
    let result = [];
    for(let i = 0, j = nodes.length; i < j; i++){
        if (!isTag(nodes[i])) continue;
        if (test(nodes[i])) result.push(nodes[i]);
        const childs = getChildren(nodes[i]);
        if (childs) result = result.concat(findAll(test, childs));
    }
    return result;
}
exports.default = {
    isTag,
    getAttributeValue,
    getName,
    getChildren,
    getParent,
    getText,
    removeSubsets,
    existsOne,
    getSiblings,
    hasAttrib,
    findOne,
    findAll
};
}),
"[project]/learn-next/final/node_modules/node-html-parser/dist/void-tag.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
class VoidTag {
    constructor(addClosingSlash = false, tags){
        this.addClosingSlash = addClosingSlash;
        if (Array.isArray(tags)) {
            this.voidTags = tags.reduce((set, tag)=>{
                return set.add(tag.toLowerCase()).add(tag.toUpperCase()).add(tag);
            }, new Set());
        } else {
            this.voidTags = [
                'area',
                'base',
                'br',
                'col',
                'embed',
                'hr',
                'img',
                'input',
                'link',
                'meta',
                'param',
                'source',
                'track',
                'wbr'
            ].reduce((set, tag)=>{
                return set.add(tag.toLowerCase()).add(tag.toUpperCase()).add(tag);
            }, new Set());
        }
    }
    formatNode(tag, attrs, innerHTML) {
        const addClosingSlash = this.addClosingSlash;
        const closingSpace = addClosingSlash && attrs && !attrs.endsWith(' ') ? ' ' : '';
        const closingSlash = addClosingSlash ? `${closingSpace}/` : '';
        return this.isVoidElement(tag.toLowerCase()) ? `<${tag}${attrs}${closingSlash}>` : `<${tag}${attrs}>${innerHTML}</${tag}>`;
    }
    isVoidElement(tag) {
        return this.voidTags.has(tag);
    }
}
exports.default = VoidTag;
}),
"[project]/learn-next/final/node_modules/node-html-parser/dist/nodes/text.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __importDefault = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
const he_1 = __turbopack_context__.r("[project]/learn-next/final/node_modules/he/he.js [app-ssr] (ecmascript)");
const node_1 = __importDefault(__turbopack_context__.r("[project]/learn-next/final/node_modules/node-html-parser/dist/nodes/node.js [app-ssr] (ecmascript)"));
const type_1 = __importDefault(__turbopack_context__.r("[project]/learn-next/final/node_modules/node-html-parser/dist/nodes/type.js [app-ssr] (ecmascript)"));
/**
 * TextNode to contain a text element in DOM tree.
 * @param {string} value [description]
 */ class TextNode extends node_1.default {
    clone() {
        return new TextNode(this._rawText, null);
    }
    constructor(rawText, parentNode = null, range){
        super(parentNode, range);
        /**
         * Node Type declaration.
         * @type {Number}
         */ this.nodeType = type_1.default.TEXT_NODE;
        this.rawTagName = '';
        this._rawText = rawText;
    }
    get rawText() {
        return this._rawText;
    }
    /**
     * Set rawText and invalidate trimmed caches
     */ set rawText(text) {
        this._rawText = text;
        this._trimmedRawText = void 0;
        this._trimmedText = void 0;
    }
    /**
     * Returns raw text with all whitespace trimmed except single leading/trailing non-breaking space
     */ get trimmedRawText() {
        if (this._trimmedRawText !== undefined) return this._trimmedRawText;
        this._trimmedRawText = trimText(this.rawText);
        return this._trimmedRawText;
    }
    /**
     * Returns text with all whitespace trimmed except single leading/trailing non-breaking space
     */ get trimmedText() {
        if (this._trimmedText !== undefined) return this._trimmedText;
        this._trimmedText = trimText(this.text);
        return this._trimmedText;
    }
    /**
     * Get unescaped text value of current node and its children.
     * @return {string} text content
     */ get text() {
        return (0, he_1.decode)(this.rawText);
    }
    /**
     * Detect if the node contains only white space.
     * @return {boolean}
     */ get isWhitespace() {
        return /^(\s|&nbsp;)*$/.test(this.rawText);
    }
    toString() {
        return this.rawText;
    }
}
exports.default = TextNode;
/**
 * Trim whitespace except single leading/trailing non-breaking space
 */ function trimText(text) {
    let i = 0;
    let startPos;
    let endPos;
    while(i >= 0 && i < text.length){
        if (/\S/.test(text[i])) {
            if (startPos === undefined) {
                startPos = i;
                i = text.length;
            } else {
                endPos = i;
                i = void 0;
            }
        }
        if (startPos === undefined) i++;
        else i--;
    }
    if (startPos === undefined) startPos = 0;
    if (endPos === undefined) endPos = text.length - 1;
    const hasLeadingSpace = startPos > 0 && /[^\S\r\n]/.test(text[startPos - 1]);
    const hasTrailingSpace = endPos < text.length - 1 && /[^\S\r\n]/.test(text[endPos + 1]);
    return (hasLeadingSpace ? ' ' : '') + text.slice(startPos, endPos + 1) + (hasTrailingSpace ? ' ' : '');
}
}),
"[project]/learn-next/final/node_modules/node-html-parser/dist/nodes/html.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __importDefault = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.parse = exports.base_parse = void 0;
const css_select_1 = __turbopack_context__.r("[project]/learn-next/final/node_modules/css-select/lib/index.js [app-ssr] (ecmascript)");
const he_1 = __importDefault(__turbopack_context__.r("[project]/learn-next/final/node_modules/he/he.js [app-ssr] (ecmascript)"));
const back_1 = __importDefault(__turbopack_context__.r("[project]/learn-next/final/node_modules/node-html-parser/dist/back.js [app-ssr] (ecmascript)"));
const matcher_1 = __importDefault(__turbopack_context__.r("[project]/learn-next/final/node_modules/node-html-parser/dist/matcher.js [app-ssr] (ecmascript)"));
const void_tag_1 = __importDefault(__turbopack_context__.r("[project]/learn-next/final/node_modules/node-html-parser/dist/void-tag.js [app-ssr] (ecmascript)"));
const comment_1 = __importDefault(__turbopack_context__.r("[project]/learn-next/final/node_modules/node-html-parser/dist/nodes/comment.js [app-ssr] (ecmascript)"));
const node_1 = __importDefault(__turbopack_context__.r("[project]/learn-next/final/node_modules/node-html-parser/dist/nodes/node.js [app-ssr] (ecmascript)"));
const text_1 = __importDefault(__turbopack_context__.r("[project]/learn-next/final/node_modules/node-html-parser/dist/nodes/text.js [app-ssr] (ecmascript)"));
const type_1 = __importDefault(__turbopack_context__.r("[project]/learn-next/final/node_modules/node-html-parser/dist/nodes/type.js [app-ssr] (ecmascript)"));
function decode(val) {
    // clone string
    return JSON.parse(JSON.stringify(he_1.default.decode(val)));
}
// https://developer.mozilla.org/en-US/docs/Web/HTML/Block-level_elements
const Htags = [
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6',
    'header',
    'hgroup'
];
const Dtags = [
    'details',
    'dialog',
    'dd',
    'div',
    'dt'
];
const Ftags = [
    'fieldset',
    'figcaption',
    'figure',
    'footer',
    'form'
];
const tableTags = [
    'table',
    'td',
    'tr'
];
const htmlTags = [
    'address',
    'article',
    'aside',
    'blockquote',
    'br',
    'hr',
    'li',
    'main',
    'nav',
    'ol',
    'p',
    'pre',
    'section',
    'ul'
];
const kBlockElements = new Set();
function addToKBlockElement(...args) {
    const addToSet = (array)=>{
        for(let index = 0; index < array.length; index++){
            const element = array[index];
            kBlockElements.add(element);
            kBlockElements.add(element.toUpperCase());
        }
    };
    for (const arg of args)addToSet(arg);
}
addToKBlockElement(Htags, Dtags, Ftags, tableTags, htmlTags);
class DOMTokenList {
    _validate(c) {
        if (/\s/.test(c)) {
            throw new Error(`DOMException in DOMTokenList.add: The token '${c}' contains HTML space characters, which are not valid in tokens.`);
        }
    }
    constructor(valuesInit = [], afterUpdate = ()=>null){
        this._set = new Set(valuesInit);
        this._afterUpdate = afterUpdate;
    }
    add(c) {
        this._validate(c);
        this._set.add(c);
        this._afterUpdate(this); // eslint-disable-line @typescript-eslint/no-unsafe-call
    }
    replace(c1, c2) {
        this._validate(c2);
        this._set.delete(c1);
        this._set.add(c2);
        this._afterUpdate(this); // eslint-disable-line @typescript-eslint/no-unsafe-call
    }
    remove(c) {
        this._set.delete(c) && this._afterUpdate(this); // eslint-disable-line @typescript-eslint/no-unsafe-call
    }
    toggle(c) {
        this._validate(c);
        if (this._set.has(c)) this._set.delete(c);
        else this._set.add(c);
        this._afterUpdate(this); // eslint-disable-line @typescript-eslint/no-unsafe-call
    }
    contains(c) {
        return this._set.has(c);
    }
    get length() {
        return this._set.size;
    }
    values() {
        return this._set.values();
    }
    get value() {
        return Array.from(this._set.values());
    }
    toString() {
        return Array.from(this._set.values()).join(' ');
    }
}
/**
 * HTMLElement, which contains a set of children.
 *
 * Note: this is a minimalist implementation, no complete tree
 *   structure provided (no parentNode, nextSibling,
 *   previousSibling etc).
 * @class HTMLElement
 * @extends {Node}
 */ class HTMLElement extends node_1.default {
    /**
     * Quote attribute values
     * @param attr attribute value
     * @returns {string} quoted value
     */ quoteAttribute(attr) {
        if (attr == null) {
            return 'null';
        }
        return JSON.stringify(attr.replace(/"/g, '&quot;')).replace(/\\t/g, '\t').replace(/\\n/g, '\n').replace(/\\r/g, '\r').replace(/\\/g, '');
    }
    /**
     * Creates an instance of HTMLElement.
     * @param keyAttrs	id and class attribute
     * @param [rawAttrs]	attributes in string
     *
     * @memberof HTMLElement
     */ constructor(tagName, keyAttrs, rawAttrs = '', parentNode = null, range, voidTag = new void_tag_1.default(), _parseOptions = {}){
        super(parentNode, range);
        this.rawAttrs = rawAttrs;
        this.voidTag = voidTag;
        /**
         * Node Type declaration.
         */ this.nodeType = type_1.default.ELEMENT_NODE;
        this.rawTagName = tagName;
        this.rawAttrs = rawAttrs || '';
        this.id = keyAttrs.id || '';
        this.childNodes = [];
        this._parseOptions = _parseOptions;
        this.classList = new DOMTokenList(keyAttrs.class ? keyAttrs.class.split(/\s+/) : [], (classList)=>this.setAttribute('class', classList.toString()) // eslint-disable-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
        );
        if (keyAttrs.id) {
            if (!rawAttrs) {
                this.rawAttrs = `id="${keyAttrs.id}"`;
            }
        }
        if (keyAttrs.class) {
            if (!rawAttrs) {
                const cls = `class="${this.classList.toString()}"`;
                if (this.rawAttrs) {
                    this.rawAttrs += ` ${cls}`;
                } else {
                    this.rawAttrs = cls;
                }
            }
        }
    }
    /**
     * Remove Child element from childNodes array
     * @param {HTMLElement} node     node to remove
     */ removeChild(node) {
        this.childNodes = this.childNodes.filter((child)=>{
            return child !== node;
        });
        return this;
    }
    /**
     * Exchanges given child with new child
     * @param {HTMLElement} oldNode     node to exchange
     * @param {HTMLElement} newNode     new node
     */ exchangeChild(oldNode, newNode) {
        const children = this.childNodes;
        this.childNodes = children.map((child)=>{
            if (child === oldNode) {
                return newNode;
            }
            return child;
        });
        return this;
    }
    get tagName() {
        return this.rawTagName ? this.rawTagName.toUpperCase() : this.rawTagName;
    }
    set tagName(newname) {
        this.rawTagName = newname.toLowerCase();
    }
    get localName() {
        return this.rawTagName.toLowerCase();
    }
    get isVoidElement() {
        return this.voidTag.isVoidElement(this.localName);
    }
    /**
     * Get escpaed (as-it) text value of current node and its children.
     * @return {string} text content
     */ get rawText() {
        // https://github.com/taoqf/node-html-parser/issues/249
        if (/^br$/i.test(this.rawTagName)) {
            return '\n';
        }
        return this.childNodes.reduce((pre, cur)=>{
            return pre += cur.rawText;
        }, '');
    }
    get textContent() {
        return decode(this.rawText);
    }
    set textContent(val) {
        const content = [
            new text_1.default(val, this)
        ];
        this.childNodes = content;
    }
    /**
     * Get unescaped text value of current node and its children.
     * @return {string} text content
     */ get text() {
        return decode(this.rawText);
    }
    /**
     * Get structured Text (with '\n' etc.)
     * @return {string} structured text
     */ get structuredText() {
        let currentBlock = [];
        const blocks = [
            currentBlock
        ];
        function dfs(node) {
            if (node.nodeType === type_1.default.ELEMENT_NODE) {
                if (kBlockElements.has(node.rawTagName)) {
                    if (currentBlock.length > 0) {
                        blocks.push(currentBlock = []);
                    }
                    node.childNodes.forEach(dfs);
                    if (currentBlock.length > 0) {
                        blocks.push(currentBlock = []);
                    }
                } else {
                    node.childNodes.forEach(dfs);
                }
            } else if (node.nodeType === type_1.default.TEXT_NODE) {
                if (node.isWhitespace) {
                    // Whitespace node, postponed output
                    currentBlock.prependWhitespace = true;
                } else {
                    let text = node.trimmedText;
                    if (currentBlock.prependWhitespace) {
                        text = ` ${text}`;
                        currentBlock.prependWhitespace = false;
                    }
                    currentBlock.push(text);
                }
            }
        }
        dfs(this);
        return blocks.map((block)=>{
            return block.join('').replace(/\s{2,}/g, ' '); // Normalize each line's whitespace
        }).join('\n').replace(/\s+$/, ''); // trimRight;
    }
    toString() {
        const tag = this.rawTagName;
        if (tag) {
            const attrs = this.rawAttrs ? ` ${this.rawAttrs}` : '';
            return this.voidTag.formatNode(tag, attrs, this.innerHTML);
        }
        return this.innerHTML;
    }
    get innerHTML() {
        return this.childNodes.map((child)=>{
            return child.toString();
        }).join('');
    }
    set innerHTML(content) {
        const r = parse(content, this._parseOptions);
        const nodes = r.childNodes.length ? r.childNodes : [
            new text_1.default(content, this)
        ];
        resetParent(nodes, this);
        resetParent(this.childNodes, null);
        this.childNodes = nodes;
    }
    set_content(content, options = {}) {
        if (content instanceof node_1.default) {
            content = [
                content
            ];
        } else if (typeof content == 'string') {
            options = Object.assign(Object.assign({}, this._parseOptions), options);
            const r = parse(content, options);
            content = r.childNodes.length ? r.childNodes : [
                new text_1.default(r.innerHTML, this)
            ];
        }
        resetParent(this.childNodes, null);
        resetParent(content, this);
        this.childNodes = content;
        return this;
    }
    replaceWith(...nodes) {
        const parent = this.parentNode;
        const content = nodes.map((node)=>{
            if (node instanceof node_1.default) {
                return [
                    node
                ];
            } else if (typeof node == 'string') {
                const r = parse(node, this._parseOptions);
                return r.childNodes.length ? r.childNodes : [
                    new text_1.default(node, this)
                ];
            }
            return [];
        }).flat();
        const idx = parent.childNodes.findIndex((child)=>{
            return child === this;
        });
        resetParent([
            this
        ], null);
        parent.childNodes = [
            ...parent.childNodes.slice(0, idx),
            ...resetParent(content, parent),
            ...parent.childNodes.slice(idx + 1)
        ];
        return this;
    }
    get outerHTML() {
        return this.toString();
    }
    /**
     * Trim element from right (in block) after seeing pattern in a TextNode.
     * @param  {RegExp} pattern pattern to find
     * @return {HTMLElement}    reference to current node
     */ trimRight(pattern) {
        for(let i = 0; i < this.childNodes.length; i++){
            const childNode = this.childNodes[i];
            if (childNode.nodeType === type_1.default.ELEMENT_NODE) {
                childNode.trimRight(pattern);
            } else {
                const index = childNode.rawText.search(pattern);
                if (index > -1) {
                    childNode.rawText = childNode.rawText.substr(0, index);
                    // trim all following nodes.
                    this.childNodes.length = i + 1;
                }
            }
        }
        return this;
    }
    /**
     * Get DOM structure
     * @return {string} structure
     */ get structure() {
        const res = [];
        let indention = 0;
        function write(str) {
            res.push('  '.repeat(indention) + str);
        }
        function dfs(node) {
            const idStr = node.id ? `#${node.id}` : '';
            const classStr = node.classList.length ? `.${node.classList.value.join('.')}` : ''; // eslint-disable-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-member-access, @typescript-eslint/restrict-template-expressions, @typescript-eslint/no-unsafe-call
            write(`${node.rawTagName}${idStr}${classStr}`);
            indention++;
            node.childNodes.forEach((childNode)=>{
                if (childNode.nodeType === type_1.default.ELEMENT_NODE) {
                    dfs(childNode);
                } else if (childNode.nodeType === type_1.default.TEXT_NODE) {
                    if (!childNode.isWhitespace) {
                        write('#text');
                    }
                }
            });
            indention--;
        }
        dfs(this);
        return res.join('\n');
    }
    /**
     * Remove whitespaces in this sub tree.
     * @return {HTMLElement} pointer to this
     */ removeWhitespace() {
        let o = 0;
        this.childNodes.forEach((node)=>{
            if (node.nodeType === type_1.default.TEXT_NODE) {
                if (node.isWhitespace) {
                    return;
                }
                node.rawText = node.trimmedRawText;
            } else if (node.nodeType === type_1.default.ELEMENT_NODE) {
                node.removeWhitespace();
            }
            this.childNodes[o++] = node;
        });
        this.childNodes.length = o;
        // remove whitespace between attributes
        const attrs = Object.keys(this.rawAttributes).map((key)=>{
            const val = this.rawAttributes[key];
            return `${key}=${JSON.stringify(val)}`;
        }).join(' ');
        this.rawAttrs = attrs;
        delete this._rawAttrs;
        return this;
    }
    /**
     * Query CSS selector to find matching nodes.
     * @param  {string}         selector Simplified CSS selector
     * @return {HTMLElement[]}  matching elements
     */ querySelectorAll(selector) {
        return (0, css_select_1.selectAll)(selector, this, {
            xmlMode: true,
            adapter: matcher_1.default
        });
    }
    /**
     * Query CSS Selector to find matching node.
     * @param  {string}         selector Simplified CSS selector
     * @return {(HTMLElement|null)}    matching node
     */ querySelector(selector) {
        return (0, css_select_1.selectOne)(selector, this, {
            xmlMode: true,
            adapter: matcher_1.default
        });
    }
    /**
     * find elements by their tagName
     * @param {string} tagName the tagName of the elements to select
     */ getElementsByTagName(tagName) {
        const upperCasedTagName = tagName.toUpperCase();
        const re = [];
        const stack = [];
        let currentNodeReference = this;
        let index = 0;
        // index turns to undefined once the stack is empty and the first condition occurs
        // which happens once all relevant children are searched through
        while(index !== undefined){
            let child;
            // make it work with sparse arrays
            do {
                child = currentNodeReference.childNodes[index++];
            }while (index < currentNodeReference.childNodes.length && child === undefined)
            // if the child does not exist we move on with the last provided index (which belongs to the parentNode)
            if (child === undefined) {
                currentNodeReference = currentNodeReference.parentNode;
                index = stack.pop();
                continue;
            }
            if (child.nodeType === type_1.default.ELEMENT_NODE) {
                // https://developer.mozilla.org/en-US/docs/Web/API/Element/getElementsByTagName#syntax
                if (tagName === '*' || child.tagName === upperCasedTagName) re.push(child);
                // if children are existing push the current status to the stack and keep searching for elements in the level below
                if (child.childNodes.length > 0) {
                    stack.push(index);
                    currentNodeReference = child;
                    index = 0;
                }
            }
        }
        return re;
    }
    /**
     * find element by it's id
     * @param {string} id the id of the element to select
     * @returns {HTMLElement | null} the element with the given id or null if not found
     */ getElementById(id) {
        const stack = [];
        let currentNodeReference = this;
        let index = 0;
        // index turns to undefined once the stack is empty and the first condition occurs
        // which happens once all relevant children are searched through
        while(index !== undefined){
            let child;
            // make it work with sparse arrays
            do {
                child = currentNodeReference.childNodes[index++];
            }while (index < currentNodeReference.childNodes.length && child === undefined)
            // if the child does not exist we move on with the last provided index (which belongs to the parentNode)
            if (child === undefined) {
                currentNodeReference = currentNodeReference.parentNode;
                index = stack.pop();
                continue;
            }
            if (child.nodeType === type_1.default.ELEMENT_NODE) {
                if (child.id === id) {
                    return child;
                }
                // if children are existing push the current status to the stack and keep searching for elements in the level below
                if (child.childNodes.length > 0) {
                    stack.push(index);
                    currentNodeReference = child;
                    index = 0;
                }
            }
        }
        return null;
    }
    /**
     * traverses the Element and its parents (heading toward the document root) until it finds a node that matches the provided selector string. Will return itself or the matching ancestor. If no such element exists, it returns null.
     * @param selector a DOMString containing a selector list
     * @returns {HTMLElement | null} the element with the given id or null if not found
     */ closest(selector) {
        const mapChild = new Map();
        let el = this;
        let old = null;
        function findOne(test, elems) {
            let elem = null;
            for(let i = 0, l = elems.length; i < l && !elem; i++){
                const el = elems[i];
                if (test(el)) {
                    elem = el;
                } else {
                    const child = mapChild.get(el);
                    if (child) {
                        elem = findOne(test, [
                            child
                        ]);
                    }
                }
            }
            return elem;
        }
        while(el){
            mapChild.set(el, old);
            old = el;
            el = el.parentNode;
        }
        el = this;
        while(el){
            const e = (0, css_select_1.selectOne)(selector, el, {
                xmlMode: true,
                adapter: Object.assign(Object.assign({}, matcher_1.default), {
                    getChildren (node) {
                        const child = mapChild.get(node);
                        return child && [
                            child
                        ];
                    },
                    getSiblings (node) {
                        return [
                            node
                        ];
                    },
                    findOne,
                    findAll () {
                        return [];
                    }
                })
            });
            if (e) {
                return e;
            }
            el = el.parentNode;
        }
        return null;
    }
    /**
     * Append a child node to childNodes
     * @param  {Node} node node to append
     * @return {Node}      node appended
     */ appendChild(node) {
        this.append(node);
        return node;
    }
    /**
     * Get attributes
     * @access private
     * @return {Object} parsed and unescaped attributes
     */ get attrs() {
        if (this._attrs) {
            return this._attrs;
        }
        this._attrs = {};
        const attrs = this.rawAttributes;
        for(const key in attrs){
            const val = attrs[key] || '';
            this._attrs[key.toLowerCase()] = decode(val);
        }
        return this._attrs;
    }
    get attributes() {
        const ret_attrs = {};
        const attrs = this.rawAttributes;
        for(const key in attrs){
            const val = attrs[key] || '';
            ret_attrs[key] = decode(val);
        }
        return ret_attrs;
    }
    /**
     * Get escaped (as-is) attributes
     * @return {Object} parsed attributes
     */ get rawAttributes() {
        if (this._rawAttrs) {
            return this._rawAttrs;
        }
        const attrs = {};
        if (this.rawAttrs) {
            const re = /([a-zA-Z()[\]#@$.?:][a-zA-Z0-9-._:()[\]#]*)(?:\s*=\s*((?:'[^']*')|(?:"[^"]*")|\S+))?/g;
            let match;
            while(match = re.exec(this.rawAttrs)){
                const key = match[1];
                let val = match[2] || null;
                if (val && (val[0] === `'` || val[0] === `"`)) val = val.slice(1, val.length - 1);
                attrs[key] = attrs[key] || val;
            }
        }
        this._rawAttrs = attrs;
        return attrs;
    }
    removeAttribute(key) {
        const attrs = this.rawAttributes;
        delete attrs[key];
        // Update this.attribute
        if (this._attrs) {
            delete this._attrs[key];
        }
        // Update rawString
        this.rawAttrs = Object.keys(attrs).map((name)=>{
            const val = this.quoteAttribute(attrs[name]);
            if (val === 'null' || val === '""') return name;
            return `${name}=${val}`;
        }).join(' ');
        // Update this.id
        if (key === 'id') {
            this.id = '';
        }
        return this;
    }
    hasAttribute(key) {
        return key.toLowerCase() in this.attrs;
    }
    /**
     * Get an attribute
     * @return {string | undefined} value of the attribute; or undefined if not exist
     */ getAttribute(key) {
        return this.attrs[key.toLowerCase()];
    }
    /**
     * Set an attribute value to the HTMLElement
     * @param {string} key The attribute name
     * @param {string} value The value to set, or null / undefined to remove an attribute
     */ setAttribute(key, value) {
        if (arguments.length < 2) {
            throw new Error("Failed to execute 'setAttribute' on 'Element'");
        }
        const k2 = key.toLowerCase();
        const attrs = this.rawAttributes;
        for(const k in attrs){
            if (k.toLowerCase() === k2) {
                key = k;
                break;
            }
        }
        attrs[key] = String(value);
        // update this.attrs
        if (this._attrs) {
            this._attrs[k2] = decode(attrs[key]);
        }
        // Update rawString
        this.rawAttrs = Object.keys(attrs).map((name)=>{
            const val = this.quoteAttribute(attrs[name]);
            if (val === 'null' || val === '""') return name;
            return `${name}=${val}`;
        }).join(' ');
        // Update this.id
        if (key === 'id') {
            this.id = value;
        }
        return this;
    }
    /**
     * Replace all the attributes of the HTMLElement by the provided attributes
     * @param {Attributes} attributes the new attribute set
     */ setAttributes(attributes) {
        // Invalidate current this.attributes
        if (this._attrs) {
            delete this._attrs;
        }
        // Invalidate current this.rawAttributes
        if (this._rawAttrs) {
            delete this._rawAttrs;
        }
        // Update rawString
        this.rawAttrs = Object.keys(attributes).map((name)=>{
            const val = attributes[name];
            if (val === 'null' || val === '""') return name;
            return `${name}=${this.quoteAttribute(String(val))}`;
        }).join(' ');
        return this;
    }
    insertAdjacentHTML(where, html) {
        if (arguments.length < 2) {
            throw new Error('2 arguments required');
        }
        const p = parse(html, this._parseOptions);
        if (where === 'afterend') {
            this.after(...p.childNodes);
        } else if (where === 'afterbegin') {
            this.prepend(...p.childNodes);
        } else if (where === 'beforeend') {
            this.append(...p.childNodes);
        } else if (where === 'beforebegin') {
            this.before(...p.childNodes);
        } else {
            throw new Error(`The value provided ('${where}') is not one of 'beforebegin', 'afterbegin', 'beforeend', or 'afterend'`);
        }
        return this;
    }
    /** Prepend nodes or strings to this node's children. */ prepend(...insertable) {
        const nodes = resolveInsertable(insertable);
        resetParent(nodes, this);
        this.childNodes.unshift(...nodes);
    }
    /** Append nodes or strings to this node's children. */ append(...insertable) {
        const nodes = resolveInsertable(insertable);
        resetParent(nodes, this);
        this.childNodes.push(...nodes);
    }
    /** Insert nodes or strings before this node. */ before(...insertable) {
        const nodes = resolveInsertable(insertable);
        const siblings = this.parentNode.childNodes;
        resetParent(nodes, this.parentNode);
        siblings.splice(siblings.indexOf(this), 0, ...nodes);
    }
    /** Insert nodes or strings after this node. */ after(...insertable) {
        const nodes = resolveInsertable(insertable);
        const siblings = this.parentNode.childNodes;
        resetParent(nodes, this.parentNode);
        siblings.splice(siblings.indexOf(this) + 1, 0, ...nodes);
    }
    get nextSibling() {
        if (this.parentNode) {
            const children = this.parentNode.childNodes;
            let i = 0;
            while(i < children.length){
                const child = children[i++];
                if (this === child) return children[i] || null;
            }
            return null;
        }
    }
    get nextElementSibling() {
        if (this.parentNode) {
            const children = this.parentNode.childNodes;
            let i = 0;
            let find = false;
            while(i < children.length){
                const child = children[i++];
                if (find) {
                    if (child instanceof HTMLElement) {
                        return child || null;
                    }
                } else if (this === child) {
                    find = true;
                }
            }
            return null;
        }
    }
    get previousSibling() {
        if (this.parentNode) {
            const children = this.parentNode.childNodes;
            let i = children.length;
            while(i > 0){
                const child = children[--i];
                if (this === child) return children[i - 1] || null;
            }
            return null;
        }
    }
    get previousElementSibling() {
        if (this.parentNode) {
            const children = this.parentNode.childNodes;
            let i = children.length;
            let find = false;
            while(i > 0){
                const child = children[--i];
                if (find) {
                    if (child instanceof HTMLElement) {
                        return child || null;
                    }
                } else if (this === child) {
                    find = true;
                }
            }
            return null;
        }
    }
    /** Get all childNodes of type {@link HTMLElement}. */ get children() {
        const children = [];
        for (const childNode of this.childNodes){
            if (childNode instanceof HTMLElement) {
                children.push(childNode);
            }
        }
        return children;
    }
    /**
     * Get the first child node.
     * @return The first child or undefined if none exists.
     */ get firstChild() {
        return this.childNodes[0];
    }
    /**
     * Get the first child node of type {@link HTMLElement}.
     * @return The first child element or undefined if none exists.
     */ get firstElementChild() {
        return this.children[0];
    }
    /**
     * Get the last child node.
     * @return The last child or undefined if none exists.
     */ get lastChild() {
        return (0, back_1.default)(this.childNodes);
    }
    /**
     * Get the last child node of type {@link HTMLElement}.
     * @return The last child element or undefined if none exists.
     */ get lastElementChild() {
        return this.children[this.children.length - 1];
    }
    get childElementCount() {
        return this.children.length;
    }
    get classNames() {
        return this.classList.toString();
    }
    /** Clone this Node */ clone() {
        return parse(this.toString(), this._parseOptions).firstChild;
    }
}
exports.default = HTMLElement;
// #xB7 | [#xC0-#xD6] | [#xD8-#xF6] | [#xF8-#x37D] | [#x37F-#x1FFF] | [#x200C-#x200D] | [#x203F-#x2040] | [#x2070-#x218F] | [#x2C00-#x2FEF] | [#x3001-#xD7FF] | [#xF900-#xFDCF] | [#xFDF0-#xFFFD] | [#x10000-#xEFFFF]
// https://html.spec.whatwg.org/multipage/custom-elements.html#valid-custom-element-name
const kMarkupPattern = /<!--[\s\S]*?-->|<(\/?)([a-zA-Z][-.:0-9_a-zA-Z@\xB7\xC0-\xD6\xD8-\xF6\u00F8-\u03A1\u03A3-\u03D9\u03DB-\u03EF\u03F7-\u03FF\u0400-\u04FF\u0500-\u052F\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E00-\u1E9B\u1F00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2126\u212A-\u212B\u2132\u214E\u2160-\u2188\u2C60-\u2C7F\uA722-\uA787\uA78B-\uA78E\uA790-\uA7AD\uA7B0-\uA7B7\uA7F7-\uA7FF\uAB30-\uAB5A\uAB5C-\uAB5F\uAB64-\uAB65\uFB00-\uFB06\uFB13-\uFB17\uFF21-\uFF3A\uFF41-\uFF5A\x37F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]*)((?:\s+[^>]*?(?:(?:'[^']*')|(?:"[^"]*"))?)*)\s*(\/?)>/gu;
// const kMarkupPattern = /<!--[\s\S]*?-->|<(\/?)([a-zA-Z][-.:0-9_a-zA-Z]*)((?:\s+[^>]*?(?:(?:'[^']*')|(?:"[^"]*"))?)*)\s*(\/?)>/g;
const kAttributePattern = /(?:^|\s)(id|class)\s*=\s*((?:'[^']*')|(?:"[^"]*")|\S+)/gi;
const kElementsClosedByOpening = {
    li: {
        li: true,
        LI: true
    },
    LI: {
        li: true,
        LI: true
    },
    p: {
        p: true,
        div: true,
        P: true,
        DIV: true
    },
    P: {
        p: true,
        div: true,
        P: true,
        DIV: true
    },
    b: {
        div: true,
        DIV: true
    },
    B: {
        div: true,
        DIV: true
    },
    td: {
        td: true,
        th: true,
        TD: true,
        TH: true
    },
    TD: {
        td: true,
        th: true,
        TD: true,
        TH: true
    },
    th: {
        td: true,
        th: true,
        TD: true,
        TH: true
    },
    TH: {
        td: true,
        th: true,
        TD: true,
        TH: true
    },
    h1: {
        h1: true,
        H1: true
    },
    H1: {
        h1: true,
        H1: true
    },
    h2: {
        h2: true,
        H2: true
    },
    H2: {
        h2: true,
        H2: true
    },
    h3: {
        h3: true,
        H3: true
    },
    H3: {
        h3: true,
        H3: true
    },
    h4: {
        h4: true,
        H4: true
    },
    H4: {
        h4: true,
        H4: true
    },
    h5: {
        h5: true,
        H5: true
    },
    H5: {
        h5: true,
        H5: true
    },
    h6: {
        h6: true,
        H6: true
    },
    H6: {
        h6: true,
        H6: true
    }
};
const kElementsClosedByClosing = {
    li: {
        ul: true,
        ol: true,
        UL: true,
        OL: true
    },
    LI: {
        ul: true,
        ol: true,
        UL: true,
        OL: true
    },
    a: {
        div: true,
        DIV: true
    },
    A: {
        div: true,
        DIV: true
    },
    b: {
        div: true,
        DIV: true
    },
    B: {
        div: true,
        DIV: true
    },
    i: {
        div: true,
        DIV: true
    },
    I: {
        div: true,
        DIV: true
    },
    p: {
        div: true,
        DIV: true
    },
    P: {
        div: true,
        DIV: true
    },
    td: {
        tr: true,
        table: true,
        TR: true,
        TABLE: true
    },
    TD: {
        tr: true,
        table: true,
        TR: true,
        TABLE: true
    },
    th: {
        tr: true,
        table: true,
        TR: true,
        TABLE: true
    },
    TH: {
        tr: true,
        table: true,
        TR: true,
        TABLE: true
    }
};
const frameflag = 'documentfragmentcontainer';
/**
 * Parses HTML and returns a root element
 * Parse a chuck of HTML source.
 * @param  {string} data      html
 * @return {HTMLElement}      root element
 */ function base_parse(data, options = {}) {
    var _a, _b;
    const voidTag = new void_tag_1.default((_a = options === null || options === void 0 ? void 0 : options.voidTag) === null || _a === void 0 ? void 0 : _a.closingSlash, (_b = options === null || options === void 0 ? void 0 : options.voidTag) === null || _b === void 0 ? void 0 : _b.tags);
    const elements = options.blockTextElements || {
        script: true,
        noscript: true,
        style: true,
        pre: true
    };
    const element_names = Object.keys(elements);
    const kBlockTextElements = element_names.map((it)=>new RegExp(`^${it}$`, 'i'));
    const kIgnoreElements = element_names.filter((it)=>Boolean(elements[it])).map((it)=>new RegExp(`^${it}$`, 'i'));
    function element_should_be_ignore(tag) {
        return kIgnoreElements.some((it)=>it.test(tag));
    }
    function is_block_text_element(tag) {
        return kBlockTextElements.some((it)=>it.test(tag));
    }
    const createRange = (startPos, endPos)=>[
            startPos - frameFlagOffset,
            endPos - frameFlagOffset
        ];
    const root = new HTMLElement(null, {}, '', null, [
        0,
        data.length
    ], voidTag, options);
    let currentParent = root;
    const stack = [
        root
    ];
    let lastTextPos = -1;
    let noNestedTagIndex = undefined;
    let match;
    // https://github.com/taoqf/node-html-parser/issues/38
    data = `<${frameflag}>${data}</${frameflag}>`;
    const { lowerCaseTagName, fixNestedATags } = options;
    const dataEndPos = data.length - (frameflag.length + 2);
    const frameFlagOffset = frameflag.length + 2;
    while(match = kMarkupPattern.exec(data)){
        // Note: Object destructuring here consistently tests as higher performance than array destructuring
        // eslint-disable-next-line prefer-const
        let { 0: matchText, 1: leadingSlash, 2: tagName, 3: attributes, 4: closingSlash } = match;
        const matchLength = matchText.length;
        const tagStartPos = kMarkupPattern.lastIndex - matchLength;
        const tagEndPos = kMarkupPattern.lastIndex;
        // Add TextNode if content
        if (lastTextPos > -1) {
            if (lastTextPos + matchLength < tagEndPos) {
                const text = data.substring(lastTextPos, tagStartPos);
                currentParent.appendChild(new text_1.default(text, currentParent, createRange(lastTextPos, tagStartPos)));
            }
        }
        lastTextPos = kMarkupPattern.lastIndex;
        // https://github.com/taoqf/node-html-parser/issues/38
        // Skip frameflag node
        if (tagName === frameflag) continue;
        // Handle comments
        if (matchText[1] === '!') {
            if (options.comment) {
                // Only keep what is in between <!-- and -->
                const text = data.substring(tagStartPos + 4, tagEndPos - 3);
                currentParent.appendChild(new comment_1.default(text, currentParent, createRange(tagStartPos, tagEndPos)));
            }
            continue;
        }
        /* -- Handle tag matching -- */ // Fix tag casing if necessary
        if (lowerCaseTagName) tagName = tagName.toLowerCase();
        // Handle opening tags (ie. <this> not </that>)
        if (!leadingSlash) {
            /* Populate attributes */ const attrs = {};
            for(let attMatch; attMatch = kAttributePattern.exec(attributes);){
                const { 1: key, 2: val } = attMatch;
                const isQuoted = val[0] === `'` || val[0] === `"`;
                attrs[key.toLowerCase()] = isQuoted ? val.slice(1, val.length - 1) : val;
            }
            const parentTagName = currentParent.rawTagName;
            if (!closingSlash && kElementsClosedByOpening[parentTagName]) {
                if (kElementsClosedByOpening[parentTagName][tagName]) {
                    stack.pop();
                    currentParent = (0, back_1.default)(stack);
                }
            }
            // Prevent nested A tags by terminating the last A and starting a new one : see issue #144
            if (fixNestedATags && (tagName === 'a' || tagName === 'A')) {
                if (noNestedTagIndex !== undefined) {
                    stack.splice(noNestedTagIndex);
                    currentParent = (0, back_1.default)(stack);
                }
                noNestedTagIndex = stack.length;
            }
            const tagEndPos = kMarkupPattern.lastIndex;
            const tagStartPos = tagEndPos - matchLength;
            currentParent = currentParent.appendChild(// Initialize range (end position updated later for closed tags)
            new HTMLElement(tagName, attrs, attributes.slice(1), null, createRange(tagStartPos, tagEndPos), voidTag, options));
            stack.push(currentParent);
            if (is_block_text_element(tagName)) {
                // Find closing tag
                const closeMarkup = `</${tagName}>`;
                const closeIndex = lowerCaseTagName ? data.toLocaleLowerCase().indexOf(closeMarkup, kMarkupPattern.lastIndex) : data.indexOf(closeMarkup, kMarkupPattern.lastIndex);
                const textEndPos = closeIndex === -1 ? dataEndPos : closeIndex;
                if (element_should_be_ignore(tagName)) {
                    const text = data.substring(tagEndPos, textEndPos);
                    if (text.length > 0 && /\S/.test(text)) {
                        currentParent.appendChild(new text_1.default(text, currentParent, createRange(tagEndPos, textEndPos)));
                    }
                }
                if (closeIndex === -1) {
                    lastTextPos = kMarkupPattern.lastIndex = data.length + 1;
                } else {
                    lastTextPos = kMarkupPattern.lastIndex = closeIndex + closeMarkup.length;
                    // Cause to be treated as self-closing, because no close found
                    leadingSlash = '/';
                }
            }
        }
        // Handle closing tags or self-closed elements (ie </tag> or <br>)
        if (leadingSlash || closingSlash || voidTag.isVoidElement(tagName)) {
            while(true){
                if (noNestedTagIndex != null && (tagName === 'a' || tagName === 'A')) noNestedTagIndex = undefined;
                if (currentParent.rawTagName === tagName) {
                    // Update range end for closed tag
                    currentParent.range[1] = createRange(-1, Math.max(lastTextPos, tagEndPos))[1];
                    stack.pop();
                    currentParent = (0, back_1.default)(stack);
                    break;
                } else {
                    const parentTagName = currentParent.tagName;
                    // Trying to close current tag, and move on
                    if (kElementsClosedByClosing[parentTagName]) {
                        if (kElementsClosedByClosing[parentTagName][tagName]) {
                            stack.pop();
                            currentParent = (0, back_1.default)(stack);
                            continue;
                        }
                    }
                    break;
                }
            }
        }
    }
    return stack;
}
exports.base_parse = base_parse;
/**
 * Parses HTML and returns a root element
 * Parse a chuck of HTML source.
 */ function parse(data, options = {}) {
    const stack = base_parse(data, options);
    const [root] = stack;
    while(stack.length > 1){
        // Handle each error elements.
        const last = stack.pop();
        const oneBefore = (0, back_1.default)(stack);
        if (last.parentNode && last.parentNode.parentNode) {
            if (last.parentNode === oneBefore && last.tagName === oneBefore.tagName) {
                // Pair error case <h3> <h3> handle : Fixes to <h3> </h3>
                // this is wrong, becouse this will put the H3 outside the current right position which should be inside the current Html Element, see issue 152 for more info
                if (options.parseNoneClosedTags !== true) {
                    oneBefore.removeChild(last);
                    last.childNodes.forEach((child)=>{
                        oneBefore.parentNode.appendChild(child);
                    });
                    stack.pop();
                }
            } else {
                // Single error  <div> <h3> </div> handle: Just removes <h3>
                // Why remove? this is already a HtmlElement and the missing <H3> is already added in this case. see issue 152 for more info
                // eslint-disable-next-line no-lonely-if
                if (options.parseNoneClosedTags !== true) {
                    oneBefore.removeChild(last);
                    last.childNodes.forEach((child)=>{
                        oneBefore.appendChild(child);
                    });
                }
            }
        } else {
        // If it's final element just skip.
        }
    }
    // response.childNodes.forEach((node) => {
    // 	if (node instanceof HTMLElement) {
    // 		node.parentNode = null;
    // 	}
    // });
    return root;
}
exports.parse = parse;
/**
 * Resolves a list of {@link NodeInsertable} to a list of nodes,
 * and removes nodes from any potential parent.
 */ function resolveInsertable(insertable) {
    return insertable.map((val)=>{
        if (typeof val === 'string') {
            return new text_1.default(val);
        }
        val.remove();
        return val;
    });
}
function resetParent(nodes, parent) {
    return nodes.map((node)=>{
        node.parentNode = parent;
        return node;
    });
}
}),
"[project]/learn-next/final/node_modules/node-html-parser/dist/parse.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var html_1 = __turbopack_context__.r("[project]/learn-next/final/node_modules/node-html-parser/dist/nodes/html.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return html_1.parse;
    }
});
}),
"[project]/learn-next/final/node_modules/node-html-parser/dist/valid.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
const html_1 = __turbopack_context__.r("[project]/learn-next/final/node_modules/node-html-parser/dist/nodes/html.js [app-ssr] (ecmascript)");
/**
 * Parses HTML and returns a root element
 * Parse a chuck of HTML source.
 */ function valid(data, options = {}) {
    const stack = (0, html_1.base_parse)(data, options);
    return Boolean(stack.length === 1);
}
exports.default = valid;
}),
"[project]/learn-next/final/node_modules/node-html-parser/dist/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __importDefault = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.NodeType = exports.TextNode = exports.Node = exports.valid = exports.CommentNode = exports.HTMLElement = exports.parse = void 0;
const comment_1 = __importDefault(__turbopack_context__.r("[project]/learn-next/final/node_modules/node-html-parser/dist/nodes/comment.js [app-ssr] (ecmascript)"));
exports.CommentNode = comment_1.default;
const html_1 = __importDefault(__turbopack_context__.r("[project]/learn-next/final/node_modules/node-html-parser/dist/nodes/html.js [app-ssr] (ecmascript)"));
exports.HTMLElement = html_1.default;
const node_1 = __importDefault(__turbopack_context__.r("[project]/learn-next/final/node_modules/node-html-parser/dist/nodes/node.js [app-ssr] (ecmascript)"));
exports.Node = node_1.default;
const text_1 = __importDefault(__turbopack_context__.r("[project]/learn-next/final/node_modules/node-html-parser/dist/nodes/text.js [app-ssr] (ecmascript)"));
exports.TextNode = text_1.default;
const type_1 = __importDefault(__turbopack_context__.r("[project]/learn-next/final/node_modules/node-html-parser/dist/nodes/type.js [app-ssr] (ecmascript)"));
exports.NodeType = type_1.default;
const parse_1 = __importDefault(__turbopack_context__.r("[project]/learn-next/final/node_modules/node-html-parser/dist/parse.js [app-ssr] (ecmascript)"));
const valid_1 = __importDefault(__turbopack_context__.r("[project]/learn-next/final/node_modules/node-html-parser/dist/valid.js [app-ssr] (ecmascript)"));
exports.valid = valid_1.default;
function parse(data, options = {}) {
    return (0, parse_1.default)(data, options);
}
exports.default = parse;
exports.parse = parse;
parse.parse = parse_1.default;
parse.HTMLElement = html_1.default;
parse.CommentNode = comment_1.default;
parse.valid = valid_1.default;
parse.Node = node_1.default;
parse.TextNode = text_1.default;
parse.NodeType = type_1.default;
}),
"[project]/learn-next/final/node_modules/css-what/lib/es/index.js [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
;
;
;
}),
"[project]/learn-next/final/node_modules/css-what/lib/es/types.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AttributeAction",
    ()=>AttributeAction,
    "IgnoreCaseMode",
    ()=>IgnoreCaseMode,
    "SelectorType",
    ()=>SelectorType
]);
var SelectorType;
(function(SelectorType) {
    SelectorType["Attribute"] = "attribute";
    SelectorType["Pseudo"] = "pseudo";
    SelectorType["PseudoElement"] = "pseudo-element";
    SelectorType["Tag"] = "tag";
    SelectorType["Universal"] = "universal";
    // Traversals
    SelectorType["Adjacent"] = "adjacent";
    SelectorType["Child"] = "child";
    SelectorType["Descendant"] = "descendant";
    SelectorType["Parent"] = "parent";
    SelectorType["Sibling"] = "sibling";
    SelectorType["ColumnCombinator"] = "column-combinator";
})(SelectorType || (SelectorType = {}));
const IgnoreCaseMode = {
    Unknown: null,
    QuirksMode: "quirks",
    IgnoreCase: true,
    CaseSensitive: false
};
var AttributeAction;
(function(AttributeAction) {
    AttributeAction["Any"] = "any";
    AttributeAction["Element"] = "element";
    AttributeAction["End"] = "end";
    AttributeAction["Equals"] = "equals";
    AttributeAction["Exists"] = "exists";
    AttributeAction["Hyphen"] = "hyphen";
    AttributeAction["Not"] = "not";
    AttributeAction["Start"] = "start";
})(AttributeAction || (AttributeAction = {}));
}),
"[project]/learn-next/final/node_modules/css-what/lib/es/parse.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isTraversal",
    ()=>isTraversal,
    "parse",
    ()=>parse
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$css$2d$what$2f$lib$2f$es$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/learn-next/final/node_modules/css-what/lib/es/types.js [app-ssr] (ecmascript)");
;
const reName = /^[^\\#]?(?:\\(?:[\da-f]{1,6}\s?|.)|[\w\-\u00b0-\uFFFF])+/;
const reEscape = /\\([\da-f]{1,6}\s?|(\s)|.)/gi;
const actionTypes = new Map([
    [
        126 /* Tilde */ ,
        __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$css$2d$what$2f$lib$2f$es$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AttributeAction"].Element
    ],
    [
        94 /* Circumflex */ ,
        __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$css$2d$what$2f$lib$2f$es$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AttributeAction"].Start
    ],
    [
        36 /* Dollar */ ,
        __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$css$2d$what$2f$lib$2f$es$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AttributeAction"].End
    ],
    [
        42 /* Asterisk */ ,
        __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$css$2d$what$2f$lib$2f$es$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AttributeAction"].Any
    ],
    [
        33 /* ExclamationMark */ ,
        __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$css$2d$what$2f$lib$2f$es$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AttributeAction"].Not
    ],
    [
        124 /* Pipe */ ,
        __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$css$2d$what$2f$lib$2f$es$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AttributeAction"].Hyphen
    ]
]);
// Pseudos, whose data property is parsed as well.
const unpackPseudos = new Set([
    "has",
    "not",
    "matches",
    "is",
    "where",
    "host",
    "host-context"
]);
function isTraversal(selector) {
    switch(selector.type){
        case __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$css$2d$what$2f$lib$2f$es$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectorType"].Adjacent:
        case __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$css$2d$what$2f$lib$2f$es$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectorType"].Child:
        case __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$css$2d$what$2f$lib$2f$es$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectorType"].Descendant:
        case __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$css$2d$what$2f$lib$2f$es$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectorType"].Parent:
        case __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$css$2d$what$2f$lib$2f$es$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectorType"].Sibling:
        case __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$css$2d$what$2f$lib$2f$es$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectorType"].ColumnCombinator:
            return true;
        default:
            return false;
    }
}
const stripQuotesFromPseudos = new Set([
    "contains",
    "icontains"
]);
// Unescape function taken from https://github.com/jquery/sizzle/blob/master/src/sizzle.js#L152
function funescape(_, escaped, escapedWhitespace) {
    const high = parseInt(escaped, 16) - 0x10000;
    // NaN means non-codepoint
    return high !== high || escapedWhitespace ? escaped : high < 0 ? String.fromCharCode(high + 0x10000) : String.fromCharCode(high >> 10 | 0xd800, high & 0x3ff | 0xdc00);
}
function unescapeCSS(str) {
    return str.replace(reEscape, funescape);
}
function isQuote(c) {
    return c === 39 /* SingleQuote */  || c === 34 /* DoubleQuote */ ;
}
function isWhitespace(c) {
    return c === 32 /* Space */  || c === 9 /* Tab */  || c === 10 /* NewLine */  || c === 12 /* FormFeed */  || c === 13 /* CarriageReturn */ ;
}
function parse(selector) {
    const subselects = [];
    const endIndex = parseSelector(subselects, `${selector}`, 0);
    if (endIndex < selector.length) {
        throw new Error(`Unmatched selector: ${selector.slice(endIndex)}`);
    }
    return subselects;
}
function parseSelector(subselects, selector, selectorIndex) {
    let tokens = [];
    function getName(offset) {
        const match = selector.slice(selectorIndex + offset).match(reName);
        if (!match) {
            throw new Error(`Expected name, found ${selector.slice(selectorIndex)}`);
        }
        const [name] = match;
        selectorIndex += offset + name.length;
        return unescapeCSS(name);
    }
    function stripWhitespace(offset) {
        selectorIndex += offset;
        while(selectorIndex < selector.length && isWhitespace(selector.charCodeAt(selectorIndex))){
            selectorIndex++;
        }
    }
    function readValueWithParenthesis() {
        selectorIndex += 1;
        const start = selectorIndex;
        let counter = 1;
        for(; counter > 0 && selectorIndex < selector.length; selectorIndex++){
            if (selector.charCodeAt(selectorIndex) === 40 /* LeftParenthesis */  && !isEscaped(selectorIndex)) {
                counter++;
            } else if (selector.charCodeAt(selectorIndex) === 41 /* RightParenthesis */  && !isEscaped(selectorIndex)) {
                counter--;
            }
        }
        if (counter) {
            throw new Error("Parenthesis not matched");
        }
        return unescapeCSS(selector.slice(start, selectorIndex - 1));
    }
    function isEscaped(pos) {
        let slashCount = 0;
        while(selector.charCodeAt(--pos) === 92 /* BackSlash */ )slashCount++;
        return (slashCount & 1) === 1;
    }
    function ensureNotTraversal() {
        if (tokens.length > 0 && isTraversal(tokens[tokens.length - 1])) {
            throw new Error("Did not expect successive traversals.");
        }
    }
    function addTraversal(type) {
        if (tokens.length > 0 && tokens[tokens.length - 1].type === __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$css$2d$what$2f$lib$2f$es$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectorType"].Descendant) {
            tokens[tokens.length - 1].type = type;
            return;
        }
        ensureNotTraversal();
        tokens.push({
            type
        });
    }
    function addSpecialAttribute(name, action) {
        tokens.push({
            type: __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$css$2d$what$2f$lib$2f$es$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectorType"].Attribute,
            name,
            action,
            value: getName(1),
            namespace: null,
            ignoreCase: "quirks"
        });
    }
    /**
     * We have finished parsing the current part of the selector.
     *
     * Remove descendant tokens at the end if they exist,
     * and return the last index, so that parsing can be
     * picked up from here.
     */ function finalizeSubselector() {
        if (tokens.length && tokens[tokens.length - 1].type === __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$css$2d$what$2f$lib$2f$es$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectorType"].Descendant) {
            tokens.pop();
        }
        if (tokens.length === 0) {
            throw new Error("Empty sub-selector");
        }
        subselects.push(tokens);
    }
    stripWhitespace(0);
    if (selector.length === selectorIndex) {
        return selectorIndex;
    }
    loop: while(selectorIndex < selector.length){
        const firstChar = selector.charCodeAt(selectorIndex);
        switch(firstChar){
            // Whitespace
            case 32 /* Space */ :
            case 9 /* Tab */ :
            case 10 /* NewLine */ :
            case 12 /* FormFeed */ :
            case 13 /* CarriageReturn */ :
                {
                    if (tokens.length === 0 || tokens[0].type !== __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$css$2d$what$2f$lib$2f$es$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectorType"].Descendant) {
                        ensureNotTraversal();
                        tokens.push({
                            type: __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$css$2d$what$2f$lib$2f$es$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectorType"].Descendant
                        });
                    }
                    stripWhitespace(1);
                    break;
                }
            // Traversals
            case 62 /* GreaterThan */ :
                {
                    addTraversal(__TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$css$2d$what$2f$lib$2f$es$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectorType"].Child);
                    stripWhitespace(1);
                    break;
                }
            case 60 /* LessThan */ :
                {
                    addTraversal(__TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$css$2d$what$2f$lib$2f$es$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectorType"].Parent);
                    stripWhitespace(1);
                    break;
                }
            case 126 /* Tilde */ :
                {
                    addTraversal(__TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$css$2d$what$2f$lib$2f$es$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectorType"].Sibling);
                    stripWhitespace(1);
                    break;
                }
            case 43 /* Plus */ :
                {
                    addTraversal(__TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$css$2d$what$2f$lib$2f$es$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectorType"].Adjacent);
                    stripWhitespace(1);
                    break;
                }
            // Special attribute selectors: .class, #id
            case 46 /* Period */ :
                {
                    addSpecialAttribute("class", __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$css$2d$what$2f$lib$2f$es$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AttributeAction"].Element);
                    break;
                }
            case 35 /* Hash */ :
                {
                    addSpecialAttribute("id", __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$css$2d$what$2f$lib$2f$es$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AttributeAction"].Equals);
                    break;
                }
            case 91 /* LeftSquareBracket */ :
                {
                    stripWhitespace(1);
                    // Determine attribute name and namespace
                    let name;
                    let namespace = null;
                    if (selector.charCodeAt(selectorIndex) === 124 /* Pipe */ ) {
                        // Equivalent to no namespace
                        name = getName(1);
                    } else if (selector.startsWith("*|", selectorIndex)) {
                        namespace = "*";
                        name = getName(2);
                    } else {
                        name = getName(0);
                        if (selector.charCodeAt(selectorIndex) === 124 /* Pipe */  && selector.charCodeAt(selectorIndex + 1) !== 61 /* Equal */ ) {
                            namespace = name;
                            name = getName(1);
                        }
                    }
                    stripWhitespace(0);
                    // Determine comparison operation
                    let action = __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$css$2d$what$2f$lib$2f$es$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AttributeAction"].Exists;
                    const possibleAction = actionTypes.get(selector.charCodeAt(selectorIndex));
                    if (possibleAction) {
                        action = possibleAction;
                        if (selector.charCodeAt(selectorIndex + 1) !== 61 /* Equal */ ) {
                            throw new Error("Expected `=`");
                        }
                        stripWhitespace(2);
                    } else if (selector.charCodeAt(selectorIndex) === 61 /* Equal */ ) {
                        action = __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$css$2d$what$2f$lib$2f$es$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AttributeAction"].Equals;
                        stripWhitespace(1);
                    }
                    // Determine value
                    let value = "";
                    let ignoreCase = null;
                    if (action !== "exists") {
                        if (isQuote(selector.charCodeAt(selectorIndex))) {
                            const quote = selector.charCodeAt(selectorIndex);
                            let sectionEnd = selectorIndex + 1;
                            while(sectionEnd < selector.length && (selector.charCodeAt(sectionEnd) !== quote || isEscaped(sectionEnd))){
                                sectionEnd += 1;
                            }
                            if (selector.charCodeAt(sectionEnd) !== quote) {
                                throw new Error("Attribute value didn't end");
                            }
                            value = unescapeCSS(selector.slice(selectorIndex + 1, sectionEnd));
                            selectorIndex = sectionEnd + 1;
                        } else {
                            const valueStart = selectorIndex;
                            while(selectorIndex < selector.length && (!isWhitespace(selector.charCodeAt(selectorIndex)) && selector.charCodeAt(selectorIndex) !== 93 /* RightSquareBracket */  || isEscaped(selectorIndex))){
                                selectorIndex += 1;
                            }
                            value = unescapeCSS(selector.slice(valueStart, selectorIndex));
                        }
                        stripWhitespace(0);
                        // See if we have a force ignore flag
                        const forceIgnore = selector.charCodeAt(selectorIndex) | 0x20;
                        // If the forceIgnore flag is set (either `i` or `s`), use that value
                        if (forceIgnore === 115 /* LowerS */ ) {
                            ignoreCase = false;
                            stripWhitespace(1);
                        } else if (forceIgnore === 105 /* LowerI */ ) {
                            ignoreCase = true;
                            stripWhitespace(1);
                        }
                    }
                    if (selector.charCodeAt(selectorIndex) !== 93 /* RightSquareBracket */ ) {
                        throw new Error("Attribute selector didn't terminate");
                    }
                    selectorIndex += 1;
                    const attributeSelector = {
                        type: __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$css$2d$what$2f$lib$2f$es$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectorType"].Attribute,
                        name,
                        action,
                        value,
                        namespace,
                        ignoreCase
                    };
                    tokens.push(attributeSelector);
                    break;
                }
            case 58 /* Colon */ :
                {
                    if (selector.charCodeAt(selectorIndex + 1) === 58 /* Colon */ ) {
                        tokens.push({
                            type: __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$css$2d$what$2f$lib$2f$es$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectorType"].PseudoElement,
                            name: getName(2).toLowerCase(),
                            data: selector.charCodeAt(selectorIndex) === 40 /* LeftParenthesis */  ? readValueWithParenthesis() : null
                        });
                        continue;
                    }
                    const name = getName(1).toLowerCase();
                    let data = null;
                    if (selector.charCodeAt(selectorIndex) === 40 /* LeftParenthesis */ ) {
                        if (unpackPseudos.has(name)) {
                            if (isQuote(selector.charCodeAt(selectorIndex + 1))) {
                                throw new Error(`Pseudo-selector ${name} cannot be quoted`);
                            }
                            data = [];
                            selectorIndex = parseSelector(data, selector, selectorIndex + 1);
                            if (selector.charCodeAt(selectorIndex) !== 41 /* RightParenthesis */ ) {
                                throw new Error(`Missing closing parenthesis in :${name} (${selector})`);
                            }
                            selectorIndex += 1;
                        } else {
                            data = readValueWithParenthesis();
                            if (stripQuotesFromPseudos.has(name)) {
                                const quot = data.charCodeAt(0);
                                if (quot === data.charCodeAt(data.length - 1) && isQuote(quot)) {
                                    data = data.slice(1, -1);
                                }
                            }
                            data = unescapeCSS(data);
                        }
                    }
                    tokens.push({
                        type: __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$css$2d$what$2f$lib$2f$es$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectorType"].Pseudo,
                        name,
                        data
                    });
                    break;
                }
            case 44 /* Comma */ :
                {
                    finalizeSubselector();
                    tokens = [];
                    stripWhitespace(1);
                    break;
                }
            default:
                {
                    if (selector.startsWith("/*", selectorIndex)) {
                        const endIndex = selector.indexOf("*/", selectorIndex + 2);
                        if (endIndex < 0) {
                            throw new Error("Comment was not terminated");
                        }
                        selectorIndex = endIndex + 2;
                        // Remove leading whitespace
                        if (tokens.length === 0) {
                            stripWhitespace(0);
                        }
                        break;
                    }
                    let namespace = null;
                    let name;
                    if (firstChar === 42 /* Asterisk */ ) {
                        selectorIndex += 1;
                        name = "*";
                    } else if (firstChar === 124 /* Pipe */ ) {
                        name = "";
                        if (selector.charCodeAt(selectorIndex + 1) === 124 /* Pipe */ ) {
                            addTraversal(__TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$css$2d$what$2f$lib$2f$es$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectorType"].ColumnCombinator);
                            stripWhitespace(2);
                            break;
                        }
                    } else if (reName.test(selector.slice(selectorIndex))) {
                        name = getName(0);
                    } else {
                        break loop;
                    }
                    if (selector.charCodeAt(selectorIndex) === 124 /* Pipe */  && selector.charCodeAt(selectorIndex + 1) !== 124 /* Pipe */ ) {
                        namespace = name;
                        if (selector.charCodeAt(selectorIndex + 1) === 42 /* Asterisk */ ) {
                            name = "*";
                            selectorIndex += 2;
                        } else {
                            name = getName(1);
                        }
                    }
                    tokens.push(name === "*" ? {
                        type: __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$css$2d$what$2f$lib$2f$es$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectorType"].Universal,
                        namespace
                    } : {
                        type: __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$css$2d$what$2f$lib$2f$es$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectorType"].Tag,
                        name,
                        namespace
                    });
                }
        }
    }
    finalizeSubselector();
    return selectorIndex;
}
}),
"[project]/learn-next/final/node_modules/css-what/lib/es/stringify.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "stringify",
    ()=>stringify
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$css$2d$what$2f$lib$2f$es$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/learn-next/final/node_modules/css-what/lib/es/types.js [app-ssr] (ecmascript)");
;
const attribValChars = [
    "\\",
    '"'
];
const pseudoValChars = [
    ...attribValChars,
    "(",
    ")"
];
const charsToEscapeInAttributeValue = new Set(attribValChars.map((c)=>c.charCodeAt(0)));
const charsToEscapeInPseudoValue = new Set(pseudoValChars.map((c)=>c.charCodeAt(0)));
const charsToEscapeInName = new Set([
    ...pseudoValChars,
    "~",
    "^",
    "$",
    "*",
    "+",
    "!",
    "|",
    ":",
    "[",
    "]",
    " ",
    "."
].map((c)=>c.charCodeAt(0)));
function stringify(selector) {
    return selector.map((token)=>token.map(stringifyToken).join("")).join(", ");
}
function stringifyToken(token, index, arr) {
    switch(token.type){
        // Simple types
        case __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$css$2d$what$2f$lib$2f$es$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectorType"].Child:
            return index === 0 ? "> " : " > ";
        case __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$css$2d$what$2f$lib$2f$es$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectorType"].Parent:
            return index === 0 ? "< " : " < ";
        case __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$css$2d$what$2f$lib$2f$es$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectorType"].Sibling:
            return index === 0 ? "~ " : " ~ ";
        case __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$css$2d$what$2f$lib$2f$es$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectorType"].Adjacent:
            return index === 0 ? "+ " : " + ";
        case __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$css$2d$what$2f$lib$2f$es$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectorType"].Descendant:
            return " ";
        case __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$css$2d$what$2f$lib$2f$es$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectorType"].ColumnCombinator:
            return index === 0 ? "|| " : " || ";
        case __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$css$2d$what$2f$lib$2f$es$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectorType"].Universal:
            // Return an empty string if the selector isn't needed.
            return token.namespace === "*" && index + 1 < arr.length && "name" in arr[index + 1] ? "" : `${getNamespace(token.namespace)}*`;
        case __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$css$2d$what$2f$lib$2f$es$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectorType"].Tag:
            return getNamespacedName(token);
        case __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$css$2d$what$2f$lib$2f$es$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectorType"].PseudoElement:
            return `::${escapeName(token.name, charsToEscapeInName)}${token.data === null ? "" : `(${escapeName(token.data, charsToEscapeInPseudoValue)})`}`;
        case __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$css$2d$what$2f$lib$2f$es$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectorType"].Pseudo:
            return `:${escapeName(token.name, charsToEscapeInName)}${token.data === null ? "" : `(${typeof token.data === "string" ? escapeName(token.data, charsToEscapeInPseudoValue) : stringify(token.data)})`}`;
        case __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$css$2d$what$2f$lib$2f$es$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectorType"].Attribute:
            {
                if (token.name === "id" && token.action === __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$css$2d$what$2f$lib$2f$es$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AttributeAction"].Equals && token.ignoreCase === "quirks" && !token.namespace) {
                    return `#${escapeName(token.value, charsToEscapeInName)}`;
                }
                if (token.name === "class" && token.action === __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$css$2d$what$2f$lib$2f$es$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AttributeAction"].Element && token.ignoreCase === "quirks" && !token.namespace) {
                    return `.${escapeName(token.value, charsToEscapeInName)}`;
                }
                const name = getNamespacedName(token);
                if (token.action === __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$css$2d$what$2f$lib$2f$es$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AttributeAction"].Exists) {
                    return `[${name}]`;
                }
                return `[${name}${getActionValue(token.action)}="${escapeName(token.value, charsToEscapeInAttributeValue)}"${token.ignoreCase === null ? "" : token.ignoreCase ? " i" : " s"}]`;
            }
    }
}
function getActionValue(action) {
    switch(action){
        case __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$css$2d$what$2f$lib$2f$es$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AttributeAction"].Equals:
            return "";
        case __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$css$2d$what$2f$lib$2f$es$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AttributeAction"].Element:
            return "~";
        case __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$css$2d$what$2f$lib$2f$es$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AttributeAction"].Start:
            return "^";
        case __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$css$2d$what$2f$lib$2f$es$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AttributeAction"].End:
            return "$";
        case __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$css$2d$what$2f$lib$2f$es$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AttributeAction"].Any:
            return "*";
        case __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$css$2d$what$2f$lib$2f$es$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AttributeAction"].Not:
            return "!";
        case __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$css$2d$what$2f$lib$2f$es$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AttributeAction"].Hyphen:
            return "|";
        case __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$css$2d$what$2f$lib$2f$es$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AttributeAction"].Exists:
            throw new Error("Shouldn't be here");
    }
}
function getNamespacedName(token) {
    return `${getNamespace(token.namespace)}${escapeName(token.name, charsToEscapeInName)}`;
}
function getNamespace(namespace) {
    return namespace !== null ? `${namespace === "*" ? "*" : escapeName(namespace, charsToEscapeInName)}|` : "";
}
function escapeName(str, charsToEscape) {
    let lastIdx = 0;
    let ret = "";
    for(let i = 0; i < str.length; i++){
        if (charsToEscape.has(str.charCodeAt(i))) {
            ret += `${str.slice(lastIdx, i)}\\${str.charAt(i)}`;
            lastIdx = i + 1;
        }
    }
    return ret.length > 0 ? ret + str.slice(lastIdx) : str;
}
}),
"[project]/learn-next/final/node_modules/css-what/lib/es/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AttributeAction",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$css$2d$what$2f$lib$2f$es$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AttributeAction"],
    "IgnoreCaseMode",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$css$2d$what$2f$lib$2f$es$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IgnoreCaseMode"],
    "SelectorType",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$css$2d$what$2f$lib$2f$es$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectorType"],
    "isTraversal",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$css$2d$what$2f$lib$2f$es$2f$parse$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isTraversal"],
    "parse",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$css$2d$what$2f$lib$2f$es$2f$parse$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parse"],
    "stringify",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$css$2d$what$2f$lib$2f$es$2f$stringify$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["stringify"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$css$2d$what$2f$lib$2f$es$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/learn-next/final/node_modules/css-what/lib/es/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$css$2d$what$2f$lib$2f$es$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/learn-next/final/node_modules/css-what/lib/es/types.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$css$2d$what$2f$lib$2f$es$2f$parse$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/learn-next/final/node_modules/css-what/lib/es/parse.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$css$2d$what$2f$lib$2f$es$2f$stringify$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/learn-next/final/node_modules/css-what/lib/es/stringify.js [app-ssr] (ecmascript)");
}),
"[project]/learn-next/final/node_modules/nth-check/lib/parse.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

// Following http://www.w3.org/TR/css3-selectors/#nth-child-pseudo
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.parse = void 0;
// Whitespace as per https://www.w3.org/TR/selectors-3/#lex is " \t\r\n\f"
var whitespace = new Set([
    9,
    10,
    12,
    13,
    32
]);
var ZERO = "0".charCodeAt(0);
var NINE = "9".charCodeAt(0);
/**
 * Parses an expression.
 *
 * @throws An `Error` if parsing fails.
 * @returns An array containing the integer step size and the integer offset of the nth rule.
 * @example nthCheck.parse("2n+3"); // returns [2, 3]
 */ function parse(formula) {
    formula = formula.trim().toLowerCase();
    if (formula === "even") {
        return [
            2,
            0
        ];
    } else if (formula === "odd") {
        return [
            2,
            1
        ];
    }
    // Parse [ ['-'|'+']? INTEGER? {N} [ S* ['-'|'+'] S* INTEGER ]?
    var idx = 0;
    var a = 0;
    var sign = readSign();
    var number = readNumber();
    if (idx < formula.length && formula.charAt(idx) === "n") {
        idx++;
        a = sign * (number !== null && number !== void 0 ? number : 1);
        skipWhitespace();
        if (idx < formula.length) {
            sign = readSign();
            skipWhitespace();
            number = readNumber();
        } else {
            sign = number = 0;
        }
    }
    // Throw if there is anything else
    if (number === null || idx < formula.length) {
        throw new Error("n-th rule couldn't be parsed ('".concat(formula, "')"));
    }
    return [
        a,
        sign * number
    ];
    //TURBOPACK unreachable
    ;
    function readSign() {
        if (formula.charAt(idx) === "-") {
            idx++;
            return -1;
        }
        if (formula.charAt(idx) === "+") {
            idx++;
        }
        return 1;
    }
    function readNumber() {
        var start = idx;
        var value = 0;
        while(idx < formula.length && formula.charCodeAt(idx) >= ZERO && formula.charCodeAt(idx) <= NINE){
            value = value * 10 + (formula.charCodeAt(idx) - ZERO);
            idx++;
        }
        // Return `null` if we didn't read anything.
        return idx === start ? null : value;
    }
    function skipWhitespace() {
        while(idx < formula.length && whitespace.has(formula.charCodeAt(idx))){
            idx++;
        }
    }
}
exports.parse = parse; //# sourceMappingURL=parse.js.map
}),
"[project]/learn-next/final/node_modules/nth-check/lib/compile.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __importDefault = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.generate = exports.compile = void 0;
var boolbase_1 = __importDefault(__turbopack_context__.r("[project]/learn-next/final/node_modules/boolbase/index.js [app-ssr] (ecmascript)"));
/**
 * Returns a function that checks if an elements index matches the given rule
 * highly optimized to return the fastest solution.
 *
 * @param parsed A tuple [a, b], as returned by `parse`.
 * @returns A highly optimized function that returns whether an index matches the nth-check.
 * @example
 *
 * ```js
 * const check = nthCheck.compile([2, 3]);
 *
 * check(0); // `false`
 * check(1); // `false`
 * check(2); // `true`
 * check(3); // `false`
 * check(4); // `true`
 * check(5); // `false`
 * check(6); // `true`
 * ```
 */ function compile(parsed) {
    var a = parsed[0];
    // Subtract 1 from `b`, to convert from one- to zero-indexed.
    var b = parsed[1] - 1;
    /*
     * When `b <= 0`, `a * n` won't be lead to any matches for `a < 0`.
     * Besides, the specification states that no elements are
     * matched when `a` and `b` are 0.
     *
     * `b < 0` here as we subtracted 1 from `b` above.
     */ if (b < 0 && a <= 0) return boolbase_1.default.falseFunc;
    // When `a` is in the range -1..1, it matches any element (so only `b` is checked).
    if (a === -1) return function(index) {
        return index <= b;
    };
    if (a === 0) return function(index) {
        return index === b;
    };
    // When `b <= 0` and `a === 1`, they match any element.
    if (a === 1) return b < 0 ? boolbase_1.default.trueFunc : function(index) {
        return index >= b;
    };
    /*
     * Otherwise, modulo can be used to check if there is a match.
     *
     * Modulo doesn't care about the sign, so let's use `a`s absolute value.
     */ var absA = Math.abs(a);
    // Get `b mod a`, + a if this is negative.
    var bMod = (b % absA + absA) % absA;
    return a > 1 ? function(index) {
        return index >= b && index % absA === bMod;
    } : function(index) {
        return index <= b && index % absA === bMod;
    };
}
exports.compile = compile;
/**
 * Returns a function that produces a monotonously increasing sequence of indices.
 *
 * If the sequence has an end, the returned function will return `null` after
 * the last index in the sequence.
 *
 * @param parsed A tuple [a, b], as returned by `parse`.
 * @returns A function that produces a sequence of indices.
 * @example <caption>Always increasing (2n+3)</caption>
 *
 * ```js
 * const gen = nthCheck.generate([2, 3])
 *
 * gen() // `1`
 * gen() // `3`
 * gen() // `5`
 * gen() // `8`
 * gen() // `11`
 * ```
 *
 * @example <caption>With end value (-2n+10)</caption>
 *
 * ```js
 *
 * const gen = nthCheck.generate([-2, 5]);
 *
 * gen() // 0
 * gen() // 2
 * gen() // 4
 * gen() // null
 * ```
 */ function generate(parsed) {
    var a = parsed[0];
    // Subtract 1 from `b`, to convert from one- to zero-indexed.
    var b = parsed[1] - 1;
    var n = 0;
    // Make sure to always return an increasing sequence
    if (a < 0) {
        var aPos_1 = -a;
        // Get `b mod a`
        var minValue_1 = (b % aPos_1 + aPos_1) % aPos_1;
        return function() {
            var val = minValue_1 + aPos_1 * n++;
            return val > b ? null : val;
        };
    }
    if (a === 0) return b < 0 ? function() {
        return null;
    } : function() {
        return n++ === 0 ? b : null;
    };
    if (b < 0) {
        b += a * Math.ceil(-b / a);
    }
    return function() {
        return a * n++ + b;
    };
}
exports.generate = generate; //# sourceMappingURL=compile.js.map
}),
"[project]/learn-next/final/node_modules/nth-check/lib/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.sequence = exports.generate = exports.compile = exports.parse = void 0;
var parse_js_1 = __turbopack_context__.r("[project]/learn-next/final/node_modules/nth-check/lib/parse.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "parse", {
    enumerable: true,
    get: function() {
        return parse_js_1.parse;
    }
});
var compile_js_1 = __turbopack_context__.r("[project]/learn-next/final/node_modules/nth-check/lib/compile.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "compile", {
    enumerable: true,
    get: function() {
        return compile_js_1.compile;
    }
});
Object.defineProperty(exports, "generate", {
    enumerable: true,
    get: function() {
        return compile_js_1.generate;
    }
});
/**
 * Parses and compiles a formula to a highly optimized function.
 * Combination of {@link parse} and {@link compile}.
 *
 * If the formula doesn't match any elements,
 * it returns [`boolbase`](https://github.com/fb55/boolbase)'s `falseFunc`.
 * Otherwise, a function accepting an _index_ is returned, which returns
 * whether or not the passed _index_ matches the formula.
 *
 * Note: The nth-rule starts counting at `1`, the returned function at `0`.
 *
 * @param formula The formula to compile.
 * @example
 * const check = nthCheck("2n+3");
 *
 * check(0); // `false`
 * check(1); // `false`
 * check(2); // `true`
 * check(3); // `false`
 * check(4); // `true`
 * check(5); // `false`
 * check(6); // `true`
 */ function nthCheck(formula) {
    return (0, compile_js_1.compile)((0, parse_js_1.parse)(formula));
}
exports.default = nthCheck;
/**
 * Parses and compiles a formula to a generator that produces a sequence of indices.
 * Combination of {@link parse} and {@link generate}.
 *
 * @param formula The formula to compile.
 * @returns A function that produces a sequence of indices.
 * @example <caption>Always increasing</caption>
 *
 * ```js
 * const gen = nthCheck.sequence('2n+3')
 *
 * gen() // `1`
 * gen() // `3`
 * gen() // `5`
 * gen() // `8`
 * gen() // `11`
 * ```
 *
 * @example <caption>With end value</caption>
 *
 * ```js
 *
 * const gen = nthCheck.sequence('-2n+5');
 *
 * gen() // 0
 * gen() // 2
 * gen() // 4
 * gen() // null
 * ```
 */ function sequence(formula) {
    return (0, compile_js_1.generate)((0, parse_js_1.parse)(formula));
}
exports.sequence = sequence; //# sourceMappingURL=index.js.map
}),
"[project]/learn-next/final/node_modules/boolbase/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = {
    trueFunc: function trueFunc() {
        return true;
    },
    falseFunc: function falseFunc() {
        return false;
    }
};
}),
"[project]/learn-next/final/node_modules/css-select/lib/pseudo-selectors/filters.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __importDefault = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.filters = void 0;
var nth_check_1 = __importDefault(__turbopack_context__.r("[project]/learn-next/final/node_modules/nth-check/lib/index.js [app-ssr] (ecmascript)"));
var boolbase_1 = __importDefault(__turbopack_context__.r("[project]/learn-next/final/node_modules/boolbase/index.js [app-ssr] (ecmascript)"));
function getChildFunc(next, adapter) {
    return function(elem) {
        var parent = adapter.getParent(elem);
        return parent != null && adapter.isTag(parent) && next(elem);
    };
}
exports.filters = {
    contains: function(next, text, _a) {
        var adapter = _a.adapter;
        return function contains(elem) {
            return next(elem) && adapter.getText(elem).includes(text);
        };
    },
    icontains: function(next, text, _a) {
        var adapter = _a.adapter;
        var itext = text.toLowerCase();
        return function icontains(elem) {
            return next(elem) && adapter.getText(elem).toLowerCase().includes(itext);
        };
    },
    // Location specific methods
    "nth-child": function(next, rule, _a) {
        var adapter = _a.adapter, equals = _a.equals;
        var func = (0, nth_check_1.default)(rule);
        if (func === boolbase_1.default.falseFunc) return boolbase_1.default.falseFunc;
        if (func === boolbase_1.default.trueFunc) return getChildFunc(next, adapter);
        return function nthChild(elem) {
            var siblings = adapter.getSiblings(elem);
            var pos = 0;
            for(var i = 0; i < siblings.length; i++){
                if (equals(elem, siblings[i])) break;
                if (adapter.isTag(siblings[i])) {
                    pos++;
                }
            }
            return func(pos) && next(elem);
        };
    },
    "nth-last-child": function(next, rule, _a) {
        var adapter = _a.adapter, equals = _a.equals;
        var func = (0, nth_check_1.default)(rule);
        if (func === boolbase_1.default.falseFunc) return boolbase_1.default.falseFunc;
        if (func === boolbase_1.default.trueFunc) return getChildFunc(next, adapter);
        return function nthLastChild(elem) {
            var siblings = adapter.getSiblings(elem);
            var pos = 0;
            for(var i = siblings.length - 1; i >= 0; i--){
                if (equals(elem, siblings[i])) break;
                if (adapter.isTag(siblings[i])) {
                    pos++;
                }
            }
            return func(pos) && next(elem);
        };
    },
    "nth-of-type": function(next, rule, _a) {
        var adapter = _a.adapter, equals = _a.equals;
        var func = (0, nth_check_1.default)(rule);
        if (func === boolbase_1.default.falseFunc) return boolbase_1.default.falseFunc;
        if (func === boolbase_1.default.trueFunc) return getChildFunc(next, adapter);
        return function nthOfType(elem) {
            var siblings = adapter.getSiblings(elem);
            var pos = 0;
            for(var i = 0; i < siblings.length; i++){
                var currentSibling = siblings[i];
                if (equals(elem, currentSibling)) break;
                if (adapter.isTag(currentSibling) && adapter.getName(currentSibling) === adapter.getName(elem)) {
                    pos++;
                }
            }
            return func(pos) && next(elem);
        };
    },
    "nth-last-of-type": function(next, rule, _a) {
        var adapter = _a.adapter, equals = _a.equals;
        var func = (0, nth_check_1.default)(rule);
        if (func === boolbase_1.default.falseFunc) return boolbase_1.default.falseFunc;
        if (func === boolbase_1.default.trueFunc) return getChildFunc(next, adapter);
        return function nthLastOfType(elem) {
            var siblings = adapter.getSiblings(elem);
            var pos = 0;
            for(var i = siblings.length - 1; i >= 0; i--){
                var currentSibling = siblings[i];
                if (equals(elem, currentSibling)) break;
                if (adapter.isTag(currentSibling) && adapter.getName(currentSibling) === adapter.getName(elem)) {
                    pos++;
                }
            }
            return func(pos) && next(elem);
        };
    },
    // TODO determine the actual root element
    root: function(next, _rule, _a) {
        var adapter = _a.adapter;
        return function(elem) {
            var parent = adapter.getParent(elem);
            return (parent == null || !adapter.isTag(parent)) && next(elem);
        };
    },
    scope: function(next, rule, options, context) {
        var equals = options.equals;
        if (!context || context.length === 0) {
            // Equivalent to :root
            return exports.filters["root"](next, rule, options);
        }
        if (context.length === 1) {
            // NOTE: can't be unpacked, as :has uses this for side-effects
            return function(elem) {
                return equals(context[0], elem) && next(elem);
            };
        }
        return function(elem) {
            return context.includes(elem) && next(elem);
        };
    },
    hover: dynamicStatePseudo("isHovered"),
    visited: dynamicStatePseudo("isVisited"),
    active: dynamicStatePseudo("isActive")
};
/**
 * Dynamic state pseudos. These depend on optional Adapter methods.
 *
 * @param name The name of the adapter method to call.
 * @returns Pseudo for the `filters` object.
 */ function dynamicStatePseudo(name) {
    return function dynamicPseudo(next, _rule, _a) {
        var adapter = _a.adapter;
        var func = adapter[name];
        if (typeof func !== "function") {
            return boolbase_1.default.falseFunc;
        }
        return function active(elem) {
            return func(elem) && next(elem);
        };
    };
} //# sourceMappingURL=filters.js.map
}),
"[project]/learn-next/final/node_modules/css-select/lib/pseudo-selectors/pseudos.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.verifyPseudoArgs = exports.pseudos = void 0;
// While filters are precompiled, pseudos get called when they are needed
exports.pseudos = {
    empty: function(elem, _a) {
        var adapter = _a.adapter;
        return !adapter.getChildren(elem).some(function(elem) {
            // FIXME: `getText` call is potentially expensive.
            return adapter.isTag(elem) || adapter.getText(elem) !== "";
        });
    },
    "first-child": function(elem, _a) {
        var adapter = _a.adapter, equals = _a.equals;
        if (adapter.prevElementSibling) {
            return adapter.prevElementSibling(elem) == null;
        }
        var firstChild = adapter.getSiblings(elem).find(function(elem) {
            return adapter.isTag(elem);
        });
        return firstChild != null && equals(elem, firstChild);
    },
    "last-child": function(elem, _a) {
        var adapter = _a.adapter, equals = _a.equals;
        var siblings = adapter.getSiblings(elem);
        for(var i = siblings.length - 1; i >= 0; i--){
            if (equals(elem, siblings[i])) return true;
            if (adapter.isTag(siblings[i])) break;
        }
        return false;
    },
    "first-of-type": function(elem, _a) {
        var adapter = _a.adapter, equals = _a.equals;
        var siblings = adapter.getSiblings(elem);
        var elemName = adapter.getName(elem);
        for(var i = 0; i < siblings.length; i++){
            var currentSibling = siblings[i];
            if (equals(elem, currentSibling)) return true;
            if (adapter.isTag(currentSibling) && adapter.getName(currentSibling) === elemName) {
                break;
            }
        }
        return false;
    },
    "last-of-type": function(elem, _a) {
        var adapter = _a.adapter, equals = _a.equals;
        var siblings = adapter.getSiblings(elem);
        var elemName = adapter.getName(elem);
        for(var i = siblings.length - 1; i >= 0; i--){
            var currentSibling = siblings[i];
            if (equals(elem, currentSibling)) return true;
            if (adapter.isTag(currentSibling) && adapter.getName(currentSibling) === elemName) {
                break;
            }
        }
        return false;
    },
    "only-of-type": function(elem, _a) {
        var adapter = _a.adapter, equals = _a.equals;
        var elemName = adapter.getName(elem);
        return adapter.getSiblings(elem).every(function(sibling) {
            return equals(elem, sibling) || !adapter.isTag(sibling) || adapter.getName(sibling) !== elemName;
        });
    },
    "only-child": function(elem, _a) {
        var adapter = _a.adapter, equals = _a.equals;
        return adapter.getSiblings(elem).every(function(sibling) {
            return equals(elem, sibling) || !adapter.isTag(sibling);
        });
    }
};
function verifyPseudoArgs(func, name, subselect, argIndex) {
    if (subselect === null) {
        if (func.length > argIndex) {
            throw new Error("Pseudo-class :".concat(name, " requires an argument"));
        }
    } else if (func.length === argIndex) {
        throw new Error("Pseudo-class :".concat(name, " doesn't have any arguments"));
    }
}
exports.verifyPseudoArgs = verifyPseudoArgs; //# sourceMappingURL=pseudos.js.map
}),
"[project]/learn-next/final/node_modules/css-select/lib/pseudo-selectors/aliases.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.aliases = void 0;
/**
 * Aliases are pseudos that are expressed as selectors.
 */ exports.aliases = {
    // Links
    "any-link": ":is(a, area, link)[href]",
    link: ":any-link:not(:visited)",
    // Forms
    // https://html.spec.whatwg.org/multipage/scripting.html#disabled-elements
    disabled: ":is(\n        :is(button, input, select, textarea, optgroup, option)[disabled],\n        optgroup[disabled] > option,\n        fieldset[disabled]:not(fieldset[disabled] legend:first-of-type *)\n    )",
    enabled: ":not(:disabled)",
    checked: ":is(:is(input[type=radio], input[type=checkbox])[checked], option:selected)",
    required: ":is(input, select, textarea)[required]",
    optional: ":is(input, select, textarea):not([required])",
    // JQuery extensions
    // https://html.spec.whatwg.org/multipage/form-elements.html#concept-option-selectedness
    selected: "option:is([selected], select:not([multiple]):not(:has(> option[selected])) > :first-of-type)",
    checkbox: "[type=checkbox]",
    file: "[type=file]",
    password: "[type=password]",
    radio: "[type=radio]",
    reset: "[type=reset]",
    image: "[type=image]",
    submit: "[type=submit]",
    parent: ":not(:empty)",
    header: ":is(h1, h2, h3, h4, h5, h6)",
    button: ":is(button, input[type=button])",
    input: ":is(input, textarea, select, button)",
    text: "input:is(:not([type!='']), [type=text])"
}; //# sourceMappingURL=aliases.js.map
}),
"[project]/learn-next/final/node_modules/css-select/lib/sort.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.isTraversal = void 0;
var css_what_1 = __turbopack_context__.r("[project]/learn-next/final/node_modules/css-what/lib/es/index.js [app-ssr] (ecmascript)");
var procedure = new Map([
    [
        css_what_1.SelectorType.Universal,
        50
    ],
    [
        css_what_1.SelectorType.Tag,
        30
    ],
    [
        css_what_1.SelectorType.Attribute,
        1
    ],
    [
        css_what_1.SelectorType.Pseudo,
        0
    ]
]);
function isTraversal(token) {
    return !procedure.has(token.type);
}
exports.isTraversal = isTraversal;
var attributes = new Map([
    [
        css_what_1.AttributeAction.Exists,
        10
    ],
    [
        css_what_1.AttributeAction.Equals,
        8
    ],
    [
        css_what_1.AttributeAction.Not,
        7
    ],
    [
        css_what_1.AttributeAction.Start,
        6
    ],
    [
        css_what_1.AttributeAction.End,
        6
    ],
    [
        css_what_1.AttributeAction.Any,
        5
    ]
]);
/**
 * Sort the parts of the passed selector,
 * as there is potential for optimization
 * (some types of selectors are faster than others)
 *
 * @param arr Selector to sort
 */ function sortByProcedure(arr) {
    var procs = arr.map(getProcedure);
    for(var i = 1; i < arr.length; i++){
        var procNew = procs[i];
        if (procNew < 0) continue;
        for(var j = i - 1; j >= 0 && procNew < procs[j]; j--){
            var token = arr[j + 1];
            arr[j + 1] = arr[j];
            arr[j] = token;
            procs[j + 1] = procs[j];
            procs[j] = procNew;
        }
    }
}
exports.default = sortByProcedure;
function getProcedure(token) {
    var _a, _b;
    var proc = (_a = procedure.get(token.type)) !== null && _a !== void 0 ? _a : -1;
    if (token.type === css_what_1.SelectorType.Attribute) {
        proc = (_b = attributes.get(token.action)) !== null && _b !== void 0 ? _b : 4;
        if (token.action === css_what_1.AttributeAction.Equals && token.name === "id") {
            // Prefer ID selectors (eg. #ID)
            proc = 9;
        }
        if (token.ignoreCase) {
            /*
             * IgnoreCase adds some overhead, prefer "normal" token
             * this is a binary operation, to ensure it's still an int
             */ proc >>= 1;
        }
    } else if (token.type === css_what_1.SelectorType.Pseudo) {
        if (!token.data) {
            proc = 3;
        } else if (token.name === "has" || token.name === "contains") {
            proc = 0; // Expensive in any case
        } else if (Array.isArray(token.data)) {
            // Eg. :matches, :not
            proc = Math.min.apply(Math, token.data.map(function(d) {
                return Math.min.apply(Math, d.map(getProcedure));
            }));
            // If we have traversals, try to avoid executing this selector
            if (proc < 0) {
                proc = 0;
            }
        } else {
            proc = 2;
        }
    }
    return proc;
} //# sourceMappingURL=sort.js.map
}),
"[project]/learn-next/final/node_modules/css-select/lib/pseudo-selectors/subselects.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __spreadArray = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__spreadArray || function(to, from, pack) {
    if (pack || arguments.length === 2) for(var i = 0, l = from.length, ar; i < l; i++){
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var __importDefault = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.subselects = exports.getNextSiblings = exports.ensureIsTag = exports.PLACEHOLDER_ELEMENT = void 0;
var boolbase_1 = __importDefault(__turbopack_context__.r("[project]/learn-next/final/node_modules/boolbase/index.js [app-ssr] (ecmascript)"));
var sort_js_1 = __turbopack_context__.r("[project]/learn-next/final/node_modules/css-select/lib/sort.js [app-ssr] (ecmascript)");
/** Used as a placeholder for :has. Will be replaced with the actual element. */ exports.PLACEHOLDER_ELEMENT = {};
function ensureIsTag(next, adapter) {
    if (next === boolbase_1.default.falseFunc) return boolbase_1.default.falseFunc;
    return function(elem) {
        return adapter.isTag(elem) && next(elem);
    };
}
exports.ensureIsTag = ensureIsTag;
function getNextSiblings(elem, adapter) {
    var siblings = adapter.getSiblings(elem);
    if (siblings.length <= 1) return [];
    var elemIndex = siblings.indexOf(elem);
    if (elemIndex < 0 || elemIndex === siblings.length - 1) return [];
    return siblings.slice(elemIndex + 1).filter(adapter.isTag);
}
exports.getNextSiblings = getNextSiblings;
function copyOptions(options) {
    // Not copied: context, rootFunc
    return {
        xmlMode: !!options.xmlMode,
        lowerCaseAttributeNames: !!options.lowerCaseAttributeNames,
        lowerCaseTags: !!options.lowerCaseTags,
        quirksMode: !!options.quirksMode,
        cacheResults: !!options.cacheResults,
        pseudos: options.pseudos,
        adapter: options.adapter,
        equals: options.equals
    };
}
var is = function(next, token, options, context, compileToken) {
    var func = compileToken(token, copyOptions(options), context);
    return func === boolbase_1.default.trueFunc ? next : func === boolbase_1.default.falseFunc ? boolbase_1.default.falseFunc : function(elem) {
        return func(elem) && next(elem);
    };
};
/*
 * :not, :has, :is, :matches and :where have to compile selectors
 * doing this in src/pseudos.ts would lead to circular dependencies,
 * so we add them here
 */ exports.subselects = {
    is: is,
    /**
     * `:matches` and `:where` are aliases for `:is`.
     */ matches: is,
    where: is,
    not: function(next, token, options, context, compileToken) {
        var func = compileToken(token, copyOptions(options), context);
        return func === boolbase_1.default.falseFunc ? next : func === boolbase_1.default.trueFunc ? boolbase_1.default.falseFunc : function(elem) {
            return !func(elem) && next(elem);
        };
    },
    has: function(next, subselect, options, _context, compileToken) {
        var adapter = options.adapter;
        var opts = copyOptions(options);
        opts.relativeSelector = true;
        var context = subselect.some(function(s) {
            return s.some(sort_js_1.isTraversal);
        }) ? [
            exports.PLACEHOLDER_ELEMENT
        ] : undefined;
        var compiled = compileToken(subselect, opts, context);
        if (compiled === boolbase_1.default.falseFunc) return boolbase_1.default.falseFunc;
        var hasElement = ensureIsTag(compiled, adapter);
        // If `compiled` is `trueFunc`, we can skip this.
        if (context && compiled !== boolbase_1.default.trueFunc) {
            /*
             * `shouldTestNextSiblings` will only be true if the query starts with
             * a traversal (sibling or adjacent). That means we will always have a context.
             */ var _a = compiled.shouldTestNextSiblings, shouldTestNextSiblings_1 = _a === void 0 ? false : _a;
            return function(elem) {
                if (!next(elem)) return false;
                context[0] = elem;
                var childs = adapter.getChildren(elem);
                var nextElements = shouldTestNextSiblings_1 ? __spreadArray(__spreadArray([], childs, true), getNextSiblings(elem, adapter), true) : childs;
                return adapter.existsOne(hasElement, nextElements);
            };
        }
        return function(elem) {
            return next(elem) && adapter.existsOne(hasElement, adapter.getChildren(elem));
        };
    }
}; //# sourceMappingURL=subselects.js.map
}),
"[project]/learn-next/final/node_modules/css-select/lib/pseudo-selectors/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.compilePseudoSelector = exports.aliases = exports.pseudos = exports.filters = void 0;
var css_what_1 = __turbopack_context__.r("[project]/learn-next/final/node_modules/css-what/lib/es/index.js [app-ssr] (ecmascript)");
var filters_js_1 = __turbopack_context__.r("[project]/learn-next/final/node_modules/css-select/lib/pseudo-selectors/filters.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "filters", {
    enumerable: true,
    get: function() {
        return filters_js_1.filters;
    }
});
var pseudos_js_1 = __turbopack_context__.r("[project]/learn-next/final/node_modules/css-select/lib/pseudo-selectors/pseudos.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "pseudos", {
    enumerable: true,
    get: function() {
        return pseudos_js_1.pseudos;
    }
});
var aliases_js_1 = __turbopack_context__.r("[project]/learn-next/final/node_modules/css-select/lib/pseudo-selectors/aliases.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "aliases", {
    enumerable: true,
    get: function() {
        return aliases_js_1.aliases;
    }
});
var subselects_js_1 = __turbopack_context__.r("[project]/learn-next/final/node_modules/css-select/lib/pseudo-selectors/subselects.js [app-ssr] (ecmascript)");
function compilePseudoSelector(next, selector, options, context, compileToken) {
    var _a;
    var name = selector.name, data = selector.data;
    if (Array.isArray(data)) {
        if (!(name in subselects_js_1.subselects)) {
            throw new Error("Unknown pseudo-class :".concat(name, "(").concat(data, ")"));
        }
        return subselects_js_1.subselects[name](next, data, options, context, compileToken);
    }
    var userPseudo = (_a = options.pseudos) === null || _a === void 0 ? void 0 : _a[name];
    var stringPseudo = typeof userPseudo === "string" ? userPseudo : aliases_js_1.aliases[name];
    if (typeof stringPseudo === "string") {
        if (data != null) {
            throw new Error("Pseudo ".concat(name, " doesn't have any arguments"));
        }
        // The alias has to be parsed here, to make sure options are respected.
        var alias = (0, css_what_1.parse)(stringPseudo);
        return subselects_js_1.subselects["is"](next, alias, options, context, compileToken);
    }
    if (typeof userPseudo === "function") {
        (0, pseudos_js_1.verifyPseudoArgs)(userPseudo, name, data, 1);
        return function(elem) {
            return userPseudo(elem, data) && next(elem);
        };
    }
    if (name in filters_js_1.filters) {
        return filters_js_1.filters[name](next, data, options, context);
    }
    if (name in pseudos_js_1.pseudos) {
        var pseudo_1 = pseudos_js_1.pseudos[name];
        (0, pseudos_js_1.verifyPseudoArgs)(pseudo_1, name, data, 2);
        return function(elem) {
            return pseudo_1(elem, options, data) && next(elem);
        };
    }
    throw new Error("Unknown pseudo-class :".concat(name));
}
exports.compilePseudoSelector = compilePseudoSelector; //# sourceMappingURL=index.js.map
}),
"[project]/learn-next/final/node_modules/css-select/lib/attributes.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __importDefault = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.attributeRules = void 0;
var boolbase_1 = __importDefault(__turbopack_context__.r("[project]/learn-next/final/node_modules/boolbase/index.js [app-ssr] (ecmascript)"));
/**
 * All reserved characters in a regex, used for escaping.
 *
 * Taken from XRegExp, (c) 2007-2020 Steven Levithan under the MIT license
 * https://github.com/slevithan/xregexp/blob/95eeebeb8fac8754d54eafe2b4743661ac1cf028/src/xregexp.js#L794
 */ var reChars = /[-[\]{}()*+?.,\\^$|#\s]/g;
function escapeRegex(value) {
    return value.replace(reChars, "\\$&");
}
/**
 * Attributes that are case-insensitive in HTML.
 *
 * @private
 * @see https://html.spec.whatwg.org/multipage/semantics-other.html#case-sensitivity-of-selectors
 */ var caseInsensitiveAttributes = new Set([
    "accept",
    "accept-charset",
    "align",
    "alink",
    "axis",
    "bgcolor",
    "charset",
    "checked",
    "clear",
    "codetype",
    "color",
    "compact",
    "declare",
    "defer",
    "dir",
    "direction",
    "disabled",
    "enctype",
    "face",
    "frame",
    "hreflang",
    "http-equiv",
    "lang",
    "language",
    "link",
    "media",
    "method",
    "multiple",
    "nohref",
    "noresize",
    "noshade",
    "nowrap",
    "readonly",
    "rel",
    "rev",
    "rules",
    "scope",
    "scrolling",
    "selected",
    "shape",
    "target",
    "text",
    "type",
    "valign",
    "valuetype",
    "vlink"
]);
function shouldIgnoreCase(selector, options) {
    return typeof selector.ignoreCase === "boolean" ? selector.ignoreCase : selector.ignoreCase === "quirks" ? !!options.quirksMode : !options.xmlMode && caseInsensitiveAttributes.has(selector.name);
}
/**
 * Attribute selectors
 */ exports.attributeRules = {
    equals: function(next, data, options) {
        var adapter = options.adapter;
        var name = data.name;
        var value = data.value;
        if (shouldIgnoreCase(data, options)) {
            value = value.toLowerCase();
            return function(elem) {
                var attr = adapter.getAttributeValue(elem, name);
                return attr != null && attr.length === value.length && attr.toLowerCase() === value && next(elem);
            };
        }
        return function(elem) {
            return adapter.getAttributeValue(elem, name) === value && next(elem);
        };
    },
    hyphen: function(next, data, options) {
        var adapter = options.adapter;
        var name = data.name;
        var value = data.value;
        var len = value.length;
        if (shouldIgnoreCase(data, options)) {
            value = value.toLowerCase();
            return function hyphenIC(elem) {
                var attr = adapter.getAttributeValue(elem, name);
                return attr != null && (attr.length === len || attr.charAt(len) === "-") && attr.substr(0, len).toLowerCase() === value && next(elem);
            };
        }
        return function hyphen(elem) {
            var attr = adapter.getAttributeValue(elem, name);
            return attr != null && (attr.length === len || attr.charAt(len) === "-") && attr.substr(0, len) === value && next(elem);
        };
    },
    element: function(next, data, options) {
        var adapter = options.adapter;
        var name = data.name, value = data.value;
        if (/\s/.test(value)) {
            return boolbase_1.default.falseFunc;
        }
        var regex = new RegExp("(?:^|\\s)".concat(escapeRegex(value), "(?:$|\\s)"), shouldIgnoreCase(data, options) ? "i" : "");
        return function element(elem) {
            var attr = adapter.getAttributeValue(elem, name);
            return attr != null && attr.length >= value.length && regex.test(attr) && next(elem);
        };
    },
    exists: function(next, _a, _b) {
        var name = _a.name;
        var adapter = _b.adapter;
        return function(elem) {
            return adapter.hasAttrib(elem, name) && next(elem);
        };
    },
    start: function(next, data, options) {
        var adapter = options.adapter;
        var name = data.name;
        var value = data.value;
        var len = value.length;
        if (len === 0) {
            return boolbase_1.default.falseFunc;
        }
        if (shouldIgnoreCase(data, options)) {
            value = value.toLowerCase();
            return function(elem) {
                var attr = adapter.getAttributeValue(elem, name);
                return attr != null && attr.length >= len && attr.substr(0, len).toLowerCase() === value && next(elem);
            };
        }
        return function(elem) {
            var _a;
            return !!((_a = adapter.getAttributeValue(elem, name)) === null || _a === void 0 ? void 0 : _a.startsWith(value)) && next(elem);
        };
    },
    end: function(next, data, options) {
        var adapter = options.adapter;
        var name = data.name;
        var value = data.value;
        var len = -value.length;
        if (len === 0) {
            return boolbase_1.default.falseFunc;
        }
        if (shouldIgnoreCase(data, options)) {
            value = value.toLowerCase();
            return function(elem) {
                var _a;
                return ((_a = adapter.getAttributeValue(elem, name)) === null || _a === void 0 ? void 0 : _a.substr(len).toLowerCase()) === value && next(elem);
            };
        }
        return function(elem) {
            var _a;
            return !!((_a = adapter.getAttributeValue(elem, name)) === null || _a === void 0 ? void 0 : _a.endsWith(value)) && next(elem);
        };
    },
    any: function(next, data, options) {
        var adapter = options.adapter;
        var name = data.name, value = data.value;
        if (value === "") {
            return boolbase_1.default.falseFunc;
        }
        if (shouldIgnoreCase(data, options)) {
            var regex_1 = new RegExp(escapeRegex(value), "i");
            return function anyIC(elem) {
                var attr = adapter.getAttributeValue(elem, name);
                return attr != null && attr.length >= value.length && regex_1.test(attr) && next(elem);
            };
        }
        return function(elem) {
            var _a;
            return !!((_a = adapter.getAttributeValue(elem, name)) === null || _a === void 0 ? void 0 : _a.includes(value)) && next(elem);
        };
    },
    not: function(next, data, options) {
        var adapter = options.adapter;
        var name = data.name;
        var value = data.value;
        if (value === "") {
            return function(elem) {
                return !!adapter.getAttributeValue(elem, name) && next(elem);
            };
        } else if (shouldIgnoreCase(data, options)) {
            value = value.toLowerCase();
            return function(elem) {
                var attr = adapter.getAttributeValue(elem, name);
                return (attr == null || attr.length !== value.length || attr.toLowerCase() !== value) && next(elem);
            };
        }
        return function(elem) {
            return adapter.getAttributeValue(elem, name) !== value && next(elem);
        };
    }
}; //# sourceMappingURL=attributes.js.map
}),
"[project]/learn-next/final/node_modules/css-select/lib/general.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.compileGeneralSelector = void 0;
var attributes_js_1 = __turbopack_context__.r("[project]/learn-next/final/node_modules/css-select/lib/attributes.js [app-ssr] (ecmascript)");
var index_js_1 = __turbopack_context__.r("[project]/learn-next/final/node_modules/css-select/lib/pseudo-selectors/index.js [app-ssr] (ecmascript)");
var css_what_1 = __turbopack_context__.r("[project]/learn-next/final/node_modules/css-what/lib/es/index.js [app-ssr] (ecmascript)");
function getElementParent(node, adapter) {
    var parent = adapter.getParent(node);
    if (parent && adapter.isTag(parent)) {
        return parent;
    }
    return null;
}
/*
 * All available rules
 */ function compileGeneralSelector(next, selector, options, context, compileToken) {
    var adapter = options.adapter, equals = options.equals;
    switch(selector.type){
        case css_what_1.SelectorType.PseudoElement:
            {
                throw new Error("Pseudo-elements are not supported by css-select");
            }
        case css_what_1.SelectorType.ColumnCombinator:
            {
                throw new Error("Column combinators are not yet supported by css-select");
            }
        case css_what_1.SelectorType.Attribute:
            {
                if (selector.namespace != null) {
                    throw new Error("Namespaced attributes are not yet supported by css-select");
                }
                if (!options.xmlMode || options.lowerCaseAttributeNames) {
                    selector.name = selector.name.toLowerCase();
                }
                return attributes_js_1.attributeRules[selector.action](next, selector, options);
            }
        case css_what_1.SelectorType.Pseudo:
            {
                return (0, index_js_1.compilePseudoSelector)(next, selector, options, context, compileToken);
            }
        // Tags
        case css_what_1.SelectorType.Tag:
            {
                if (selector.namespace != null) {
                    throw new Error("Namespaced tag names are not yet supported by css-select");
                }
                var name_1 = selector.name;
                if (!options.xmlMode || options.lowerCaseTags) {
                    name_1 = name_1.toLowerCase();
                }
                return function tag(elem) {
                    return adapter.getName(elem) === name_1 && next(elem);
                };
            }
        // Traversal
        case css_what_1.SelectorType.Descendant:
            {
                if (options.cacheResults === false || typeof WeakSet === "undefined") {
                    return function descendant(elem) {
                        var current = elem;
                        while(current = getElementParent(current, adapter)){
                            if (next(current)) {
                                return true;
                            }
                        }
                        return false;
                    };
                }
                // @ts-expect-error `ElementNode` is not extending object
                var isFalseCache_1 = new WeakSet();
                return function cachedDescendant(elem) {
                    var current = elem;
                    while(current = getElementParent(current, adapter)){
                        if (!isFalseCache_1.has(current)) {
                            if (adapter.isTag(current) && next(current)) {
                                return true;
                            }
                            isFalseCache_1.add(current);
                        }
                    }
                    return false;
                };
            }
        case "_flexibleDescendant":
            {
                // Include element itself, only used while querying an array
                return function flexibleDescendant(elem) {
                    var current = elem;
                    do {
                        if (next(current)) return true;
                    }while (current = getElementParent(current, adapter))
                    return false;
                };
            }
        case css_what_1.SelectorType.Parent:
            {
                return function parent(elem) {
                    return adapter.getChildren(elem).some(function(elem) {
                        return adapter.isTag(elem) && next(elem);
                    });
                };
            }
        case css_what_1.SelectorType.Child:
            {
                return function child(elem) {
                    var parent = adapter.getParent(elem);
                    return parent != null && adapter.isTag(parent) && next(parent);
                };
            }
        case css_what_1.SelectorType.Sibling:
            {
                return function sibling(elem) {
                    var siblings = adapter.getSiblings(elem);
                    for(var i = 0; i < siblings.length; i++){
                        var currentSibling = siblings[i];
                        if (equals(elem, currentSibling)) break;
                        if (adapter.isTag(currentSibling) && next(currentSibling)) {
                            return true;
                        }
                    }
                    return false;
                };
            }
        case css_what_1.SelectorType.Adjacent:
            {
                if (adapter.prevElementSibling) {
                    return function adjacent(elem) {
                        var previous = adapter.prevElementSibling(elem);
                        return previous != null && next(previous);
                    };
                }
                return function adjacent(elem) {
                    var siblings = adapter.getSiblings(elem);
                    var lastElement;
                    for(var i = 0; i < siblings.length; i++){
                        var currentSibling = siblings[i];
                        if (equals(elem, currentSibling)) break;
                        if (adapter.isTag(currentSibling)) {
                            lastElement = currentSibling;
                        }
                    }
                    return !!lastElement && next(lastElement);
                };
            }
        case css_what_1.SelectorType.Universal:
            {
                if (selector.namespace != null && selector.namespace !== "*") {
                    throw new Error("Namespaced universal selectors are not yet supported by css-select");
                }
                return next;
            }
    }
}
exports.compileGeneralSelector = compileGeneralSelector; //# sourceMappingURL=general.js.map
}),
"[project]/learn-next/final/node_modules/css-select/lib/compile.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __createBinding = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = {
            enumerable: true,
            get: function() {
                return m[k];
            }
        };
    }
    Object.defineProperty(o, k2, desc);
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var __setModuleDefault = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__setModuleDefault || (Object.create ? function(o, v) {
    Object.defineProperty(o, "default", {
        enumerable: true,
        value: v
    });
} : function(o, v) {
    o["default"] = v;
});
var __importStar = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__importStar || function(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) {
        for(var k in mod)if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    }
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.compileToken = exports.compileUnsafe = exports.compile = void 0;
var css_what_1 = __turbopack_context__.r("[project]/learn-next/final/node_modules/css-what/lib/es/index.js [app-ssr] (ecmascript)");
var boolbase_1 = __importDefault(__turbopack_context__.r("[project]/learn-next/final/node_modules/boolbase/index.js [app-ssr] (ecmascript)"));
var sort_js_1 = __importStar(__turbopack_context__.r("[project]/learn-next/final/node_modules/css-select/lib/sort.js [app-ssr] (ecmascript)"));
var general_js_1 = __turbopack_context__.r("[project]/learn-next/final/node_modules/css-select/lib/general.js [app-ssr] (ecmascript)");
var subselects_js_1 = __turbopack_context__.r("[project]/learn-next/final/node_modules/css-select/lib/pseudo-selectors/subselects.js [app-ssr] (ecmascript)");
/**
 * Compiles a selector to an executable function.
 *
 * @param selector Selector to compile.
 * @param options Compilation options.
 * @param context Optional context for the selector.
 */ function compile(selector, options, context) {
    var next = compileUnsafe(selector, options, context);
    return (0, subselects_js_1.ensureIsTag)(next, options.adapter);
}
exports.compile = compile;
function compileUnsafe(selector, options, context) {
    var token = typeof selector === "string" ? (0, css_what_1.parse)(selector) : selector;
    return compileToken(token, options, context);
}
exports.compileUnsafe = compileUnsafe;
function includesScopePseudo(t) {
    return t.type === css_what_1.SelectorType.Pseudo && (t.name === "scope" || Array.isArray(t.data) && t.data.some(function(data) {
        return data.some(includesScopePseudo);
    }));
}
var DESCENDANT_TOKEN = {
    type: css_what_1.SelectorType.Descendant
};
var FLEXIBLE_DESCENDANT_TOKEN = {
    type: "_flexibleDescendant"
};
var SCOPE_TOKEN = {
    type: css_what_1.SelectorType.Pseudo,
    name: "scope",
    data: null
};
/*
 * CSS 4 Spec (Draft): 3.4.1. Absolutizing a Relative Selector
 * http://www.w3.org/TR/selectors4/#absolutizing
 */ function absolutize(token, _a, context) {
    var adapter = _a.adapter;
    // TODO Use better check if the context is a document
    var hasContext = !!(context === null || context === void 0 ? void 0 : context.every(function(e) {
        var parent = adapter.isTag(e) && adapter.getParent(e);
        return e === subselects_js_1.PLACEHOLDER_ELEMENT || parent && adapter.isTag(parent);
    }));
    for(var _i = 0, token_1 = token; _i < token_1.length; _i++){
        var t = token_1[_i];
        if (t.length > 0 && (0, sort_js_1.isTraversal)(t[0]) && t[0].type !== css_what_1.SelectorType.Descendant) {
        // Don't continue in else branch
        } else if (hasContext && !t.some(includesScopePseudo)) {
            t.unshift(DESCENDANT_TOKEN);
        } else {
            continue;
        }
        t.unshift(SCOPE_TOKEN);
    }
}
function compileToken(token, options, context) {
    var _a;
    token.forEach(sort_js_1.default);
    context = (_a = options.context) !== null && _a !== void 0 ? _a : context;
    var isArrayContext = Array.isArray(context);
    var finalContext = context && (Array.isArray(context) ? context : [
        context
    ]);
    // Check if the selector is relative
    if (options.relativeSelector !== false) {
        absolutize(token, options, finalContext);
    } else if (token.some(function(t) {
        return t.length > 0 && (0, sort_js_1.isTraversal)(t[0]);
    })) {
        throw new Error("Relative selectors are not allowed when the `relativeSelector` option is disabled");
    }
    var shouldTestNextSiblings = false;
    var query = token.map(function(rules) {
        if (rules.length >= 2) {
            var first = rules[0], second = rules[1];
            if (first.type !== css_what_1.SelectorType.Pseudo || first.name !== "scope") {
            // Ignore
            } else if (isArrayContext && second.type === css_what_1.SelectorType.Descendant) {
                rules[1] = FLEXIBLE_DESCENDANT_TOKEN;
            } else if (second.type === css_what_1.SelectorType.Adjacent || second.type === css_what_1.SelectorType.Sibling) {
                shouldTestNextSiblings = true;
            }
        }
        return compileRules(rules, options, finalContext);
    }).reduce(reduceRules, boolbase_1.default.falseFunc);
    query.shouldTestNextSiblings = shouldTestNextSiblings;
    return query;
}
exports.compileToken = compileToken;
function compileRules(rules, options, context) {
    var _a;
    return rules.reduce(function(previous, rule) {
        return previous === boolbase_1.default.falseFunc ? boolbase_1.default.falseFunc : (0, general_js_1.compileGeneralSelector)(previous, rule, options, context, compileToken);
    }, (_a = options.rootFunc) !== null && _a !== void 0 ? _a : boolbase_1.default.trueFunc);
}
function reduceRules(a, b) {
    if (b === boolbase_1.default.falseFunc || a === boolbase_1.default.trueFunc) {
        return a;
    }
    if (a === boolbase_1.default.falseFunc || b === boolbase_1.default.trueFunc) {
        return b;
    }
    return function combine(elem) {
        return a(elem) || b(elem);
    };
} //# sourceMappingURL=compile.js.map
}),
"[project]/learn-next/final/node_modules/css-select/lib/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __createBinding = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = {
            enumerable: true,
            get: function() {
                return m[k];
            }
        };
    }
    Object.defineProperty(o, k2, desc);
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var __setModuleDefault = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__setModuleDefault || (Object.create ? function(o, v) {
    Object.defineProperty(o, "default", {
        enumerable: true,
        value: v
    });
} : function(o, v) {
    o["default"] = v;
});
var __importStar = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__importStar || function(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) {
        for(var k in mod)if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    }
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.aliases = exports.pseudos = exports.filters = exports.is = exports.selectOne = exports.selectAll = exports.prepareContext = exports._compileToken = exports._compileUnsafe = exports.compile = void 0;
var DomUtils = __importStar(__turbopack_context__.r("[project]/learn-next/final/node_modules/domutils/lib/index.js [app-ssr] (ecmascript)"));
var boolbase_1 = __importDefault(__turbopack_context__.r("[project]/learn-next/final/node_modules/boolbase/index.js [app-ssr] (ecmascript)"));
var compile_js_1 = __turbopack_context__.r("[project]/learn-next/final/node_modules/css-select/lib/compile.js [app-ssr] (ecmascript)");
var subselects_js_1 = __turbopack_context__.r("[project]/learn-next/final/node_modules/css-select/lib/pseudo-selectors/subselects.js [app-ssr] (ecmascript)");
var defaultEquals = function(a, b) {
    return a === b;
};
var defaultOptions = {
    adapter: DomUtils,
    equals: defaultEquals
};
function convertOptionFormats(options) {
    var _a, _b, _c, _d;
    /*
     * We force one format of options to the other one.
     */ // @ts-expect-error Default options may have incompatible `Node` / `ElementNode`.
    var opts = options !== null && options !== void 0 ? options : defaultOptions;
    // @ts-expect-error Same as above.
    (_a = opts.adapter) !== null && _a !== void 0 ? _a : opts.adapter = DomUtils;
    // @ts-expect-error `equals` does not exist on `Options`
    (_b = opts.equals) !== null && _b !== void 0 ? _b : opts.equals = (_d = (_c = opts.adapter) === null || _c === void 0 ? void 0 : _c.equals) !== null && _d !== void 0 ? _d : defaultEquals;
    return opts;
}
function wrapCompile(func) {
    return function addAdapter(selector, options, context) {
        var opts = convertOptionFormats(options);
        return func(selector, opts, context);
    };
}
/**
 * Compiles the query, returns a function.
 */ exports.compile = wrapCompile(compile_js_1.compile);
exports._compileUnsafe = wrapCompile(compile_js_1.compileUnsafe);
exports._compileToken = wrapCompile(compile_js_1.compileToken);
function getSelectorFunc(searchFunc) {
    return function select(query, elements, options) {
        var opts = convertOptionFormats(options);
        if (typeof query !== "function") {
            query = (0, compile_js_1.compileUnsafe)(query, opts, elements);
        }
        var filteredElements = prepareContext(elements, opts.adapter, query.shouldTestNextSiblings);
        return searchFunc(query, filteredElements, opts);
    };
}
function prepareContext(elems, adapter, shouldTestNextSiblings) {
    if (shouldTestNextSiblings === void 0) {
        shouldTestNextSiblings = false;
    }
    /*
     * Add siblings if the query requires them.
     * See https://github.com/fb55/css-select/pull/43#issuecomment-225414692
     */ if (shouldTestNextSiblings) {
        elems = appendNextSiblings(elems, adapter);
    }
    return Array.isArray(elems) ? adapter.removeSubsets(elems) : adapter.getChildren(elems);
}
exports.prepareContext = prepareContext;
function appendNextSiblings(elem, adapter) {
    // Order matters because jQuery seems to check the children before the siblings
    var elems = Array.isArray(elem) ? elem.slice(0) : [
        elem
    ];
    var elemsLength = elems.length;
    for(var i = 0; i < elemsLength; i++){
        var nextSiblings = (0, subselects_js_1.getNextSiblings)(elems[i], adapter);
        elems.push.apply(elems, nextSiblings);
    }
    return elems;
}
/**
 * @template Node The generic Node type for the DOM adapter being used.
 * @template ElementNode The Node type for elements for the DOM adapter being used.
 * @param elems Elements to query. If it is an element, its children will be queried..
 * @param query can be either a CSS selector string or a compiled query function.
 * @param [options] options for querying the document.
 * @see compile for supported selector queries.
 * @returns All matching elements.
 *
 */ exports.selectAll = getSelectorFunc(function(query, elems, options) {
    return query === boolbase_1.default.falseFunc || !elems || elems.length === 0 ? [] : options.adapter.findAll(query, elems);
});
/**
 * @template Node The generic Node type for the DOM adapter being used.
 * @template ElementNode The Node type for elements for the DOM adapter being used.
 * @param elems Elements to query. If it is an element, its children will be queried..
 * @param query can be either a CSS selector string or a compiled query function.
 * @param [options] options for querying the document.
 * @see compile for supported selector queries.
 * @returns the first match, or null if there was no match.
 */ exports.selectOne = getSelectorFunc(function(query, elems, options) {
    return query === boolbase_1.default.falseFunc || !elems || elems.length === 0 ? null : options.adapter.findOne(query, elems);
});
/**
 * Tests whether or not an element is matched by query.
 *
 * @template Node The generic Node type for the DOM adapter being used.
 * @template ElementNode The Node type for elements for the DOM adapter being used.
 * @param elem The element to test if it matches the query.
 * @param query can be either a CSS selector string or a compiled query function.
 * @param [options] options for querying the document.
 * @see compile for supported selector queries.
 * @returns
 */ function is(elem, query, options) {
    var opts = convertOptionFormats(options);
    return (typeof query === "function" ? query : (0, compile_js_1.compile)(query, opts))(elem);
}
exports.is = is;
/**
 * Alias for selectAll(query, elems, options).
 * @see [compile] for supported selector queries.
 */ exports.default = exports.selectAll;
// Export filters, pseudos and aliases to allow users to supply their own.
/** @deprecated Use the `pseudos` option instead. */ var index_js_1 = __turbopack_context__.r("[project]/learn-next/final/node_modules/css-select/lib/pseudo-selectors/index.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "filters", {
    enumerable: true,
    get: function() {
        return index_js_1.filters;
    }
});
Object.defineProperty(exports, "pseudos", {
    enumerable: true,
    get: function() {
        return index_js_1.pseudos;
    }
});
Object.defineProperty(exports, "aliases", {
    enumerable: true,
    get: function() {
        return index_js_1.aliases;
    }
}); //# sourceMappingURL=index.js.map
}),
"[project]/learn-next/final/node_modules/domelementtype/lib/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Doctype = exports.CDATA = exports.Tag = exports.Style = exports.Script = exports.Comment = exports.Directive = exports.Text = exports.Root = exports.isTag = exports.ElementType = void 0;
/** Types of elements found in htmlparser2's DOM */ var ElementType;
(function(ElementType) {
    /** Type for the root element of a document */ ElementType["Root"] = "root";
    /** Type for Text */ ElementType["Text"] = "text";
    /** Type for <? ... ?> */ ElementType["Directive"] = "directive";
    /** Type for <!-- ... --> */ ElementType["Comment"] = "comment";
    /** Type for <script> tags */ ElementType["Script"] = "script";
    /** Type for <style> tags */ ElementType["Style"] = "style";
    /** Type for Any tag */ ElementType["Tag"] = "tag";
    /** Type for <![CDATA[ ... ]]> */ ElementType["CDATA"] = "cdata";
    /** Type for <!doctype ...> */ ElementType["Doctype"] = "doctype";
})(ElementType = exports.ElementType || (exports.ElementType = {}));
/**
 * Tests whether an element is a tag or not.
 *
 * @param elem Element to test
 */ function isTag(elem) {
    return elem.type === ElementType.Tag || elem.type === ElementType.Script || elem.type === ElementType.Style;
}
exports.isTag = isTag;
// Exports for backwards compatibility
/** Type for the root element of a document */ exports.Root = ElementType.Root;
/** Type for Text */ exports.Text = ElementType.Text;
/** Type for <? ... ?> */ exports.Directive = ElementType.Directive;
/** Type for <!-- ... --> */ exports.Comment = ElementType.Comment;
/** Type for <script> tags */ exports.Script = ElementType.Script;
/** Type for <style> tags */ exports.Style = ElementType.Style;
/** Type for Any tag */ exports.Tag = ElementType.Tag;
/** Type for <![CDATA[ ... ]]> */ exports.CDATA = ElementType.CDATA;
/** Type for <!doctype ...> */ exports.Doctype = ElementType.Doctype;
}),
"[project]/learn-next/final/node_modules/domhandler/lib/node.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __extends = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__extends || function() {
    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || ({
            __proto__: []
        }) instanceof Array && function(d, b) {
            d.__proto__ = b;
        } || function(d, b) {
            for(var p in b)if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
        };
        return extendStatics(d, b);
    };
    return function(d, b) {
        if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
var __assign = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__assign || function() {
    __assign = Object.assign || function(t) {
        for(var s, i = 1, n = arguments.length; i < n; i++){
            s = arguments[i];
            for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.cloneNode = exports.hasChildren = exports.isDocument = exports.isDirective = exports.isComment = exports.isText = exports.isCDATA = exports.isTag = exports.Element = exports.Document = exports.CDATA = exports.NodeWithChildren = exports.ProcessingInstruction = exports.Comment = exports.Text = exports.DataNode = exports.Node = void 0;
var domelementtype_1 = __turbopack_context__.r("[project]/learn-next/final/node_modules/domelementtype/lib/index.js [app-ssr] (ecmascript)");
/**
 * This object will be used as the prototype for Nodes when creating a
 * DOM-Level-1-compliant structure.
 */ var Node = function() {
    function Node() {
        /** Parent of the node */ this.parent = null;
        /** Previous sibling */ this.prev = null;
        /** Next sibling */ this.next = null;
        /** The start index of the node. Requires `withStartIndices` on the handler to be `true. */ this.startIndex = null;
        /** The end index of the node. Requires `withEndIndices` on the handler to be `true. */ this.endIndex = null;
    }
    Object.defineProperty(Node.prototype, "parentNode", {
        // Read-write aliases for properties
        /**
         * Same as {@link parent}.
         * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
         */ get: function() {
            return this.parent;
        },
        set: function(parent) {
            this.parent = parent;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Node.prototype, "previousSibling", {
        /**
         * Same as {@link prev}.
         * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
         */ get: function() {
            return this.prev;
        },
        set: function(prev) {
            this.prev = prev;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Node.prototype, "nextSibling", {
        /**
         * Same as {@link next}.
         * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
         */ get: function() {
            return this.next;
        },
        set: function(next) {
            this.next = next;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Clone this node, and optionally its children.
     *
     * @param recursive Clone child nodes as well.
     * @returns A clone of the node.
     */ Node.prototype.cloneNode = function(recursive) {
        if (recursive === void 0) {
            recursive = false;
        }
        return cloneNode(this, recursive);
    };
    return Node;
}();
exports.Node = Node;
/**
 * A node that contains some data.
 */ var DataNode = function(_super) {
    __extends(DataNode, _super);
    /**
     * @param data The content of the data node
     */ function DataNode(data) {
        var _this = _super.call(this) || this;
        _this.data = data;
        return _this;
    }
    Object.defineProperty(DataNode.prototype, "nodeValue", {
        /**
         * Same as {@link data}.
         * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
         */ get: function() {
            return this.data;
        },
        set: function(data) {
            this.data = data;
        },
        enumerable: false,
        configurable: true
    });
    return DataNode;
}(Node);
exports.DataNode = DataNode;
/**
 * Text within the document.
 */ var Text = function(_super) {
    __extends(Text, _super);
    function Text() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = domelementtype_1.ElementType.Text;
        return _this;
    }
    Object.defineProperty(Text.prototype, "nodeType", {
        get: function() {
            return 3;
        },
        enumerable: false,
        configurable: true
    });
    return Text;
}(DataNode);
exports.Text = Text;
/**
 * Comments within the document.
 */ var Comment = function(_super) {
    __extends(Comment, _super);
    function Comment() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = domelementtype_1.ElementType.Comment;
        return _this;
    }
    Object.defineProperty(Comment.prototype, "nodeType", {
        get: function() {
            return 8;
        },
        enumerable: false,
        configurable: true
    });
    return Comment;
}(DataNode);
exports.Comment = Comment;
/**
 * Processing instructions, including doc types.
 */ var ProcessingInstruction = function(_super) {
    __extends(ProcessingInstruction, _super);
    function ProcessingInstruction(name, data) {
        var _this = _super.call(this, data) || this;
        _this.name = name;
        _this.type = domelementtype_1.ElementType.Directive;
        return _this;
    }
    Object.defineProperty(ProcessingInstruction.prototype, "nodeType", {
        get: function() {
            return 1;
        },
        enumerable: false,
        configurable: true
    });
    return ProcessingInstruction;
}(DataNode);
exports.ProcessingInstruction = ProcessingInstruction;
/**
 * A `Node` that can have children.
 */ var NodeWithChildren = function(_super) {
    __extends(NodeWithChildren, _super);
    /**
     * @param children Children of the node. Only certain node types can have children.
     */ function NodeWithChildren(children) {
        var _this = _super.call(this) || this;
        _this.children = children;
        return _this;
    }
    Object.defineProperty(NodeWithChildren.prototype, "firstChild", {
        // Aliases
        /** First child of the node. */ get: function() {
            var _a;
            return (_a = this.children[0]) !== null && _a !== void 0 ? _a : null;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NodeWithChildren.prototype, "lastChild", {
        /** Last child of the node. */ get: function() {
            return this.children.length > 0 ? this.children[this.children.length - 1] : null;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NodeWithChildren.prototype, "childNodes", {
        /**
         * Same as {@link children}.
         * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
         */ get: function() {
            return this.children;
        },
        set: function(children) {
            this.children = children;
        },
        enumerable: false,
        configurable: true
    });
    return NodeWithChildren;
}(Node);
exports.NodeWithChildren = NodeWithChildren;
var CDATA = function(_super) {
    __extends(CDATA, _super);
    function CDATA() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = domelementtype_1.ElementType.CDATA;
        return _this;
    }
    Object.defineProperty(CDATA.prototype, "nodeType", {
        get: function() {
            return 4;
        },
        enumerable: false,
        configurable: true
    });
    return CDATA;
}(NodeWithChildren);
exports.CDATA = CDATA;
/**
 * The root node of the document.
 */ var Document = function(_super) {
    __extends(Document, _super);
    function Document() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = domelementtype_1.ElementType.Root;
        return _this;
    }
    Object.defineProperty(Document.prototype, "nodeType", {
        get: function() {
            return 9;
        },
        enumerable: false,
        configurable: true
    });
    return Document;
}(NodeWithChildren);
exports.Document = Document;
/**
 * An element within the DOM.
 */ var Element = function(_super) {
    __extends(Element, _super);
    /**
     * @param name Name of the tag, eg. `div`, `span`.
     * @param attribs Object mapping attribute names to attribute values.
     * @param children Children of the node.
     */ function Element(name, attribs, children, type) {
        if (children === void 0) {
            children = [];
        }
        if (type === void 0) {
            type = name === "script" ? domelementtype_1.ElementType.Script : name === "style" ? domelementtype_1.ElementType.Style : domelementtype_1.ElementType.Tag;
        }
        var _this = _super.call(this, children) || this;
        _this.name = name;
        _this.attribs = attribs;
        _this.type = type;
        return _this;
    }
    Object.defineProperty(Element.prototype, "nodeType", {
        get: function() {
            return 1;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Element.prototype, "tagName", {
        // DOM Level 1 aliases
        /**
         * Same as {@link name}.
         * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
         */ get: function() {
            return this.name;
        },
        set: function(name) {
            this.name = name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Element.prototype, "attributes", {
        get: function() {
            var _this = this;
            return Object.keys(this.attribs).map(function(name) {
                var _a, _b;
                return {
                    name: name,
                    value: _this.attribs[name],
                    namespace: (_a = _this["x-attribsNamespace"]) === null || _a === void 0 ? void 0 : _a[name],
                    prefix: (_b = _this["x-attribsPrefix"]) === null || _b === void 0 ? void 0 : _b[name]
                };
            });
        },
        enumerable: false,
        configurable: true
    });
    return Element;
}(NodeWithChildren);
exports.Element = Element;
/**
 * @param node Node to check.
 * @returns `true` if the node is a `Element`, `false` otherwise.
 */ function isTag(node) {
    return (0, domelementtype_1.isTag)(node);
}
exports.isTag = isTag;
/**
 * @param node Node to check.
 * @returns `true` if the node has the type `CDATA`, `false` otherwise.
 */ function isCDATA(node) {
    return node.type === domelementtype_1.ElementType.CDATA;
}
exports.isCDATA = isCDATA;
/**
 * @param node Node to check.
 * @returns `true` if the node has the type `Text`, `false` otherwise.
 */ function isText(node) {
    return node.type === domelementtype_1.ElementType.Text;
}
exports.isText = isText;
/**
 * @param node Node to check.
 * @returns `true` if the node has the type `Comment`, `false` otherwise.
 */ function isComment(node) {
    return node.type === domelementtype_1.ElementType.Comment;
}
exports.isComment = isComment;
/**
 * @param node Node to check.
 * @returns `true` if the node has the type `ProcessingInstruction`, `false` otherwise.
 */ function isDirective(node) {
    return node.type === domelementtype_1.ElementType.Directive;
}
exports.isDirective = isDirective;
/**
 * @param node Node to check.
 * @returns `true` if the node has the type `ProcessingInstruction`, `false` otherwise.
 */ function isDocument(node) {
    return node.type === domelementtype_1.ElementType.Root;
}
exports.isDocument = isDocument;
/**
 * @param node Node to check.
 * @returns `true` if the node has children, `false` otherwise.
 */ function hasChildren(node) {
    return Object.prototype.hasOwnProperty.call(node, "children");
}
exports.hasChildren = hasChildren;
/**
 * Clone a node, and optionally its children.
 *
 * @param recursive Clone child nodes as well.
 * @returns A clone of the node.
 */ function cloneNode(node, recursive) {
    if (recursive === void 0) {
        recursive = false;
    }
    var result;
    if (isText(node)) {
        result = new Text(node.data);
    } else if (isComment(node)) {
        result = new Comment(node.data);
    } else if (isTag(node)) {
        var children = recursive ? cloneChildren(node.children) : [];
        var clone_1 = new Element(node.name, __assign({}, node.attribs), children);
        children.forEach(function(child) {
            return child.parent = clone_1;
        });
        if (node.namespace != null) {
            clone_1.namespace = node.namespace;
        }
        if (node["x-attribsNamespace"]) {
            clone_1["x-attribsNamespace"] = __assign({}, node["x-attribsNamespace"]);
        }
        if (node["x-attribsPrefix"]) {
            clone_1["x-attribsPrefix"] = __assign({}, node["x-attribsPrefix"]);
        }
        result = clone_1;
    } else if (isCDATA(node)) {
        var children = recursive ? cloneChildren(node.children) : [];
        var clone_2 = new CDATA(children);
        children.forEach(function(child) {
            return child.parent = clone_2;
        });
        result = clone_2;
    } else if (isDocument(node)) {
        var children = recursive ? cloneChildren(node.children) : [];
        var clone_3 = new Document(children);
        children.forEach(function(child) {
            return child.parent = clone_3;
        });
        if (node["x-mode"]) {
            clone_3["x-mode"] = node["x-mode"];
        }
        result = clone_3;
    } else if (isDirective(node)) {
        var instruction = new ProcessingInstruction(node.name, node.data);
        if (node["x-name"] != null) {
            instruction["x-name"] = node["x-name"];
            instruction["x-publicId"] = node["x-publicId"];
            instruction["x-systemId"] = node["x-systemId"];
        }
        result = instruction;
    } else {
        throw new Error("Not implemented yet: ".concat(node.type));
    }
    result.startIndex = node.startIndex;
    result.endIndex = node.endIndex;
    if (node.sourceCodeLocation != null) {
        result.sourceCodeLocation = node.sourceCodeLocation;
    }
    return result;
}
exports.cloneNode = cloneNode;
function cloneChildren(childs) {
    var children = childs.map(function(child) {
        return cloneNode(child, true);
    });
    for(var i = 1; i < children.length; i++){
        children[i].prev = children[i - 1];
        children[i - 1].next = children[i];
    }
    return children;
}
}),
"[project]/learn-next/final/node_modules/domhandler/lib/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __createBinding = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = {
            enumerable: true,
            get: function() {
                return m[k];
            }
        };
    }
    Object.defineProperty(o, k2, desc);
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var __exportStar = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__exportStar || function(m, exports1) {
    for(var p in m)if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports1, p)) __createBinding(exports1, m, p);
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.DomHandler = void 0;
var domelementtype_1 = __turbopack_context__.r("[project]/learn-next/final/node_modules/domelementtype/lib/index.js [app-ssr] (ecmascript)");
var node_js_1 = __turbopack_context__.r("[project]/learn-next/final/node_modules/domhandler/lib/node.js [app-ssr] (ecmascript)");
__exportStar(__turbopack_context__.r("[project]/learn-next/final/node_modules/domhandler/lib/node.js [app-ssr] (ecmascript)"), exports);
// Default options
var defaultOpts = {
    withStartIndices: false,
    withEndIndices: false,
    xmlMode: false
};
var DomHandler = function() {
    /**
     * @param callback Called once parsing has completed.
     * @param options Settings for the handler.
     * @param elementCB Callback whenever a tag is closed.
     */ function DomHandler(callback, options, elementCB) {
        /** The elements of the DOM */ this.dom = [];
        /** The root element for the DOM */ this.root = new node_js_1.Document(this.dom);
        /** Indicated whether parsing has been completed. */ this.done = false;
        /** Stack of open tags. */ this.tagStack = [
            this.root
        ];
        /** A data node that is still being written to. */ this.lastNode = null;
        /** Reference to the parser instance. Used for location information. */ this.parser = null;
        // Make it possible to skip arguments, for backwards-compatibility
        if (typeof options === "function") {
            elementCB = options;
            options = defaultOpts;
        }
        if (typeof callback === "object") {
            options = callback;
            callback = undefined;
        }
        this.callback = callback !== null && callback !== void 0 ? callback : null;
        this.options = options !== null && options !== void 0 ? options : defaultOpts;
        this.elementCB = elementCB !== null && elementCB !== void 0 ? elementCB : null;
    }
    DomHandler.prototype.onparserinit = function(parser) {
        this.parser = parser;
    };
    // Resets the handler back to starting state
    DomHandler.prototype.onreset = function() {
        this.dom = [];
        this.root = new node_js_1.Document(this.dom);
        this.done = false;
        this.tagStack = [
            this.root
        ];
        this.lastNode = null;
        this.parser = null;
    };
    // Signals the handler that parsing is done
    DomHandler.prototype.onend = function() {
        if (this.done) return;
        this.done = true;
        this.parser = null;
        this.handleCallback(null);
    };
    DomHandler.prototype.onerror = function(error) {
        this.handleCallback(error);
    };
    DomHandler.prototype.onclosetag = function() {
        this.lastNode = null;
        var elem = this.tagStack.pop();
        if (this.options.withEndIndices) {
            elem.endIndex = this.parser.endIndex;
        }
        if (this.elementCB) this.elementCB(elem);
    };
    DomHandler.prototype.onopentag = function(name, attribs) {
        var type = this.options.xmlMode ? domelementtype_1.ElementType.Tag : undefined;
        var element = new node_js_1.Element(name, attribs, undefined, type);
        this.addNode(element);
        this.tagStack.push(element);
    };
    DomHandler.prototype.ontext = function(data) {
        var lastNode = this.lastNode;
        if (lastNode && lastNode.type === domelementtype_1.ElementType.Text) {
            lastNode.data += data;
            if (this.options.withEndIndices) {
                lastNode.endIndex = this.parser.endIndex;
            }
        } else {
            var node = new node_js_1.Text(data);
            this.addNode(node);
            this.lastNode = node;
        }
    };
    DomHandler.prototype.oncomment = function(data) {
        if (this.lastNode && this.lastNode.type === domelementtype_1.ElementType.Comment) {
            this.lastNode.data += data;
            return;
        }
        var node = new node_js_1.Comment(data);
        this.addNode(node);
        this.lastNode = node;
    };
    DomHandler.prototype.oncommentend = function() {
        this.lastNode = null;
    };
    DomHandler.prototype.oncdatastart = function() {
        var text = new node_js_1.Text("");
        var node = new node_js_1.CDATA([
            text
        ]);
        this.addNode(node);
        text.parent = node;
        this.lastNode = text;
    };
    DomHandler.prototype.oncdataend = function() {
        this.lastNode = null;
    };
    DomHandler.prototype.onprocessinginstruction = function(name, data) {
        var node = new node_js_1.ProcessingInstruction(name, data);
        this.addNode(node);
    };
    DomHandler.prototype.handleCallback = function(error) {
        if (typeof this.callback === "function") {
            this.callback(error, this.dom);
        } else if (error) {
            throw error;
        }
    };
    DomHandler.prototype.addNode = function(node) {
        var parent = this.tagStack[this.tagStack.length - 1];
        var previousSibling = parent.children[parent.children.length - 1];
        if (this.options.withStartIndices) {
            node.startIndex = this.parser.startIndex;
        }
        if (this.options.withEndIndices) {
            node.endIndex = this.parser.endIndex;
        }
        parent.children.push(node);
        if (previousSibling) {
            node.prev = previousSibling;
            previousSibling.next = node;
        }
        node.parent = parent;
        this.lastNode = null;
    };
    return DomHandler;
}();
exports.DomHandler = DomHandler;
exports.default = DomHandler;
}),
"[project]/learn-next/final/node_modules/dom-serializer/lib/foreignNames.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.attributeNames = exports.elementNames = void 0;
exports.elementNames = new Map([
    "altGlyph",
    "altGlyphDef",
    "altGlyphItem",
    "animateColor",
    "animateMotion",
    "animateTransform",
    "clipPath",
    "feBlend",
    "feColorMatrix",
    "feComponentTransfer",
    "feComposite",
    "feConvolveMatrix",
    "feDiffuseLighting",
    "feDisplacementMap",
    "feDistantLight",
    "feDropShadow",
    "feFlood",
    "feFuncA",
    "feFuncB",
    "feFuncG",
    "feFuncR",
    "feGaussianBlur",
    "feImage",
    "feMerge",
    "feMergeNode",
    "feMorphology",
    "feOffset",
    "fePointLight",
    "feSpecularLighting",
    "feSpotLight",
    "feTile",
    "feTurbulence",
    "foreignObject",
    "glyphRef",
    "linearGradient",
    "radialGradient",
    "textPath"
].map(function(val) {
    return [
        val.toLowerCase(),
        val
    ];
}));
exports.attributeNames = new Map([
    "definitionURL",
    "attributeName",
    "attributeType",
    "baseFrequency",
    "baseProfile",
    "calcMode",
    "clipPathUnits",
    "diffuseConstant",
    "edgeMode",
    "filterUnits",
    "glyphRef",
    "gradientTransform",
    "gradientUnits",
    "kernelMatrix",
    "kernelUnitLength",
    "keyPoints",
    "keySplines",
    "keyTimes",
    "lengthAdjust",
    "limitingConeAngle",
    "markerHeight",
    "markerUnits",
    "markerWidth",
    "maskContentUnits",
    "maskUnits",
    "numOctaves",
    "pathLength",
    "patternContentUnits",
    "patternTransform",
    "patternUnits",
    "pointsAtX",
    "pointsAtY",
    "pointsAtZ",
    "preserveAlpha",
    "preserveAspectRatio",
    "primitiveUnits",
    "refX",
    "refY",
    "repeatCount",
    "repeatDur",
    "requiredExtensions",
    "requiredFeatures",
    "specularConstant",
    "specularExponent",
    "spreadMethod",
    "startOffset",
    "stdDeviation",
    "stitchTiles",
    "surfaceScale",
    "systemLanguage",
    "tableValues",
    "targetX",
    "targetY",
    "textLength",
    "viewBox",
    "viewTarget",
    "xChannelSelector",
    "yChannelSelector",
    "zoomAndPan"
].map(function(val) {
    return [
        val.toLowerCase(),
        val
    ];
}));
}),
"[project]/learn-next/final/node_modules/dom-serializer/lib/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __assign = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__assign || function() {
    __assign = Object.assign || function(t) {
        for(var s, i = 1, n = arguments.length; i < n; i++){
            s = arguments[i];
            for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __createBinding = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = {
            enumerable: true,
            get: function() {
                return m[k];
            }
        };
    }
    Object.defineProperty(o, k2, desc);
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var __setModuleDefault = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__setModuleDefault || (Object.create ? function(o, v) {
    Object.defineProperty(o, "default", {
        enumerable: true,
        value: v
    });
} : function(o, v) {
    o["default"] = v;
});
var __importStar = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__importStar || function(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) {
        for(var k in mod)if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    }
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.render = void 0;
/*
 * Module dependencies
 */ var ElementType = __importStar(__turbopack_context__.r("[project]/learn-next/final/node_modules/domelementtype/lib/index.js [app-ssr] (ecmascript)"));
var entities_1 = __turbopack_context__.r("[project]/learn-next/final/node_modules/dom-serializer/node_modules/entities/lib/index.js [app-ssr] (ecmascript)");
/**
 * Mixed-case SVG and MathML tags & attributes
 * recognized by the HTML parser.
 *
 * @see https://html.spec.whatwg.org/multipage/parsing.html#parsing-main-inforeign
 */ var foreignNames_js_1 = __turbopack_context__.r("[project]/learn-next/final/node_modules/dom-serializer/lib/foreignNames.js [app-ssr] (ecmascript)");
var unencodedElements = new Set([
    "style",
    "script",
    "xmp",
    "iframe",
    "noembed",
    "noframes",
    "plaintext",
    "noscript"
]);
function replaceQuotes(value) {
    return value.replace(/"/g, "&quot;");
}
/**
 * Format attributes
 */ function formatAttributes(attributes, opts) {
    var _a;
    if (!attributes) return;
    var encode = ((_a = opts.encodeEntities) !== null && _a !== void 0 ? _a : opts.decodeEntities) === false ? replaceQuotes : opts.xmlMode || opts.encodeEntities !== "utf8" ? entities_1.encodeXML : entities_1.escapeAttribute;
    return Object.keys(attributes).map(function(key) {
        var _a, _b;
        var value = (_a = attributes[key]) !== null && _a !== void 0 ? _a : "";
        if (opts.xmlMode === "foreign") {
            /* Fix up mixed-case attribute names */ key = (_b = foreignNames_js_1.attributeNames.get(key)) !== null && _b !== void 0 ? _b : key;
        }
        if (!opts.emptyAttrs && !opts.xmlMode && value === "") {
            return key;
        }
        return "".concat(key, "=\"").concat(encode(value), "\"");
    }).join(" ");
}
/**
 * Self-enclosing tags
 */ var singleTag = new Set([
    "area",
    "base",
    "basefont",
    "br",
    "col",
    "command",
    "embed",
    "frame",
    "hr",
    "img",
    "input",
    "isindex",
    "keygen",
    "link",
    "meta",
    "param",
    "source",
    "track",
    "wbr"
]);
/**
 * Renders a DOM node or an array of DOM nodes to a string.
 *
 * Can be thought of as the equivalent of the `outerHTML` of the passed node(s).
 *
 * @param node Node to be rendered.
 * @param options Changes serialization behavior
 */ function render(node, options) {
    if (options === void 0) {
        options = {};
    }
    var nodes = "length" in node ? node : [
        node
    ];
    var output = "";
    for(var i = 0; i < nodes.length; i++){
        output += renderNode(nodes[i], options);
    }
    return output;
}
exports.render = render;
exports.default = render;
function renderNode(node, options) {
    switch(node.type){
        case ElementType.Root:
            return render(node.children, options);
        // @ts-expect-error We don't use `Doctype` yet
        case ElementType.Doctype:
        case ElementType.Directive:
            return renderDirective(node);
        case ElementType.Comment:
            return renderComment(node);
        case ElementType.CDATA:
            return renderCdata(node);
        case ElementType.Script:
        case ElementType.Style:
        case ElementType.Tag:
            return renderTag(node, options);
        case ElementType.Text:
            return renderText(node, options);
    }
}
var foreignModeIntegrationPoints = new Set([
    "mi",
    "mo",
    "mn",
    "ms",
    "mtext",
    "annotation-xml",
    "foreignObject",
    "desc",
    "title"
]);
var foreignElements = new Set([
    "svg",
    "math"
]);
function renderTag(elem, opts) {
    var _a;
    // Handle SVG / MathML in HTML
    if (opts.xmlMode === "foreign") {
        /* Fix up mixed-case element names */ elem.name = (_a = foreignNames_js_1.elementNames.get(elem.name)) !== null && _a !== void 0 ? _a : elem.name;
        /* Exit foreign mode at integration points */ if (elem.parent && foreignModeIntegrationPoints.has(elem.parent.name)) {
            opts = __assign(__assign({}, opts), {
                xmlMode: false
            });
        }
    }
    if (!opts.xmlMode && foreignElements.has(elem.name)) {
        opts = __assign(__assign({}, opts), {
            xmlMode: "foreign"
        });
    }
    var tag = "<".concat(elem.name);
    var attribs = formatAttributes(elem.attribs, opts);
    if (attribs) {
        tag += " ".concat(attribs);
    }
    if (elem.children.length === 0 && (opts.xmlMode ? opts.selfClosingTags !== false : opts.selfClosingTags && singleTag.has(elem.name))) {
        if (!opts.xmlMode) tag += " ";
        tag += "/>";
    } else {
        tag += ">";
        if (elem.children.length > 0) {
            tag += render(elem.children, opts);
        }
        if (opts.xmlMode || !singleTag.has(elem.name)) {
            tag += "</".concat(elem.name, ">");
        }
    }
    return tag;
}
function renderDirective(elem) {
    return "<".concat(elem.data, ">");
}
function renderText(elem, opts) {
    var _a;
    var data = elem.data || "";
    // If entities weren't decoded, no need to encode them back
    if (((_a = opts.encodeEntities) !== null && _a !== void 0 ? _a : opts.decodeEntities) !== false && !(!opts.xmlMode && elem.parent && unencodedElements.has(elem.parent.name))) {
        data = opts.xmlMode || opts.encodeEntities !== "utf8" ? (0, entities_1.encodeXML)(data) : (0, entities_1.escapeText)(data);
    }
    return data;
}
function renderCdata(elem) {
    return "<![CDATA[".concat(elem.children[0].data, "]]>");
}
function renderComment(elem) {
    return "<!--".concat(elem.data, "-->");
}
}),
"[project]/learn-next/final/node_modules/domutils/lib/stringify.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __importDefault = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getOuterHTML = getOuterHTML;
exports.getInnerHTML = getInnerHTML;
exports.getText = getText;
exports.textContent = textContent;
exports.innerText = innerText;
var domhandler_1 = __turbopack_context__.r("[project]/learn-next/final/node_modules/domhandler/lib/index.js [app-ssr] (ecmascript)");
var dom_serializer_1 = __importDefault(__turbopack_context__.r("[project]/learn-next/final/node_modules/dom-serializer/lib/index.js [app-ssr] (ecmascript)"));
var domelementtype_1 = __turbopack_context__.r("[project]/learn-next/final/node_modules/domelementtype/lib/index.js [app-ssr] (ecmascript)");
/**
 * @category Stringify
 * @deprecated Use the `dom-serializer` module directly.
 * @param node Node to get the outer HTML of.
 * @param options Options for serialization.
 * @returns `node`'s outer HTML.
 */ function getOuterHTML(node, options) {
    return (0, dom_serializer_1.default)(node, options);
}
/**
 * @category Stringify
 * @deprecated Use the `dom-serializer` module directly.
 * @param node Node to get the inner HTML of.
 * @param options Options for serialization.
 * @returns `node`'s inner HTML.
 */ function getInnerHTML(node, options) {
    return (0, domhandler_1.hasChildren)(node) ? node.children.map(function(node) {
        return getOuterHTML(node, options);
    }).join("") : "";
}
/**
 * Get a node's inner text. Same as `textContent`, but inserts newlines for `<br>` tags. Ignores comments.
 *
 * @category Stringify
 * @deprecated Use `textContent` instead.
 * @param node Node to get the inner text of.
 * @returns `node`'s inner text.
 */ function getText(node) {
    if (Array.isArray(node)) return node.map(getText).join("");
    if ((0, domhandler_1.isTag)(node)) return node.name === "br" ? "\n" : getText(node.children);
    if ((0, domhandler_1.isCDATA)(node)) return getText(node.children);
    if ((0, domhandler_1.isText)(node)) return node.data;
    return "";
}
/**
 * Get a node's text content. Ignores comments.
 *
 * @category Stringify
 * @param node Node to get the text content of.
 * @returns `node`'s text content.
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent}
 */ function textContent(node) {
    if (Array.isArray(node)) return node.map(textContent).join("");
    if ((0, domhandler_1.hasChildren)(node) && !(0, domhandler_1.isComment)(node)) {
        return textContent(node.children);
    }
    if ((0, domhandler_1.isText)(node)) return node.data;
    return "";
}
/**
 * Get a node's inner text, ignoring `<script>` and `<style>` tags. Ignores comments.
 *
 * @category Stringify
 * @param node Node to get the inner text of.
 * @returns `node`'s inner text.
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Node/innerText}
 */ function innerText(node) {
    if (Array.isArray(node)) return node.map(innerText).join("");
    if ((0, domhandler_1.hasChildren)(node) && (node.type === domelementtype_1.ElementType.Tag || (0, domhandler_1.isCDATA)(node))) {
        return innerText(node.children);
    }
    if ((0, domhandler_1.isText)(node)) return node.data;
    return "";
} //# sourceMappingURL=stringify.js.map
}),
"[project]/learn-next/final/node_modules/domutils/lib/traversal.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getChildren = getChildren;
exports.getParent = getParent;
exports.getSiblings = getSiblings;
exports.getAttributeValue = getAttributeValue;
exports.hasAttrib = hasAttrib;
exports.getName = getName;
exports.nextElementSibling = nextElementSibling;
exports.prevElementSibling = prevElementSibling;
var domhandler_1 = __turbopack_context__.r("[project]/learn-next/final/node_modules/domhandler/lib/index.js [app-ssr] (ecmascript)");
/**
 * Get a node's children.
 *
 * @category Traversal
 * @param elem Node to get the children of.
 * @returns `elem`'s children, or an empty array.
 */ function getChildren(elem) {
    return (0, domhandler_1.hasChildren)(elem) ? elem.children : [];
}
/**
 * Get a node's parent.
 *
 * @category Traversal
 * @param elem Node to get the parent of.
 * @returns `elem`'s parent node, or `null` if `elem` is a root node.
 */ function getParent(elem) {
    return elem.parent || null;
}
/**
 * Gets an elements siblings, including the element itself.
 *
 * Attempts to get the children through the element's parent first. If we don't
 * have a parent (the element is a root node), we walk the element's `prev` &
 * `next` to get all remaining nodes.
 *
 * @category Traversal
 * @param elem Element to get the siblings of.
 * @returns `elem`'s siblings, including `elem`.
 */ function getSiblings(elem) {
    var _a, _b;
    var parent = getParent(elem);
    if (parent != null) return getChildren(parent);
    var siblings = [
        elem
    ];
    var prev = elem.prev, next = elem.next;
    while(prev != null){
        siblings.unshift(prev);
        _a = prev, prev = _a.prev;
    }
    while(next != null){
        siblings.push(next);
        _b = next, next = _b.next;
    }
    return siblings;
}
/**
 * Gets an attribute from an element.
 *
 * @category Traversal
 * @param elem Element to check.
 * @param name Attribute name to retrieve.
 * @returns The element's attribute value, or `undefined`.
 */ function getAttributeValue(elem, name) {
    var _a;
    return (_a = elem.attribs) === null || _a === void 0 ? void 0 : _a[name];
}
/**
 * Checks whether an element has an attribute.
 *
 * @category Traversal
 * @param elem Element to check.
 * @param name Attribute name to look for.
 * @returns Returns whether `elem` has the attribute `name`.
 */ function hasAttrib(elem, name) {
    return elem.attribs != null && Object.prototype.hasOwnProperty.call(elem.attribs, name) && elem.attribs[name] != null;
}
/**
 * Get the tag name of an element.
 *
 * @category Traversal
 * @param elem The element to get the name for.
 * @returns The tag name of `elem`.
 */ function getName(elem) {
    return elem.name;
}
/**
 * Returns the next element sibling of a node.
 *
 * @category Traversal
 * @param elem The element to get the next sibling of.
 * @returns `elem`'s next sibling that is a tag, or `null` if there is no next
 * sibling.
 */ function nextElementSibling(elem) {
    var _a;
    var next = elem.next;
    while(next !== null && !(0, domhandler_1.isTag)(next))_a = next, next = _a.next;
    return next;
}
/**
 * Returns the previous element sibling of a node.
 *
 * @category Traversal
 * @param elem The element to get the previous sibling of.
 * @returns `elem`'s previous sibling that is a tag, or `null` if there is no
 * previous sibling.
 */ function prevElementSibling(elem) {
    var _a;
    var prev = elem.prev;
    while(prev !== null && !(0, domhandler_1.isTag)(prev))_a = prev, prev = _a.prev;
    return prev;
} //# sourceMappingURL=traversal.js.map
}),
"[project]/learn-next/final/node_modules/domutils/lib/manipulation.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.removeElement = removeElement;
exports.replaceElement = replaceElement;
exports.appendChild = appendChild;
exports.append = append;
exports.prependChild = prependChild;
exports.prepend = prepend;
/**
 * Remove an element from the dom
 *
 * @category Manipulation
 * @param elem The element to be removed
 */ function removeElement(elem) {
    if (elem.prev) elem.prev.next = elem.next;
    if (elem.next) elem.next.prev = elem.prev;
    if (elem.parent) {
        var childs = elem.parent.children;
        var childsIndex = childs.lastIndexOf(elem);
        if (childsIndex >= 0) {
            childs.splice(childsIndex, 1);
        }
    }
    elem.next = null;
    elem.prev = null;
    elem.parent = null;
}
/**
 * Replace an element in the dom
 *
 * @category Manipulation
 * @param elem The element to be replaced
 * @param replacement The element to be added
 */ function replaceElement(elem, replacement) {
    var prev = replacement.prev = elem.prev;
    if (prev) {
        prev.next = replacement;
    }
    var next = replacement.next = elem.next;
    if (next) {
        next.prev = replacement;
    }
    var parent = replacement.parent = elem.parent;
    if (parent) {
        var childs = parent.children;
        childs[childs.lastIndexOf(elem)] = replacement;
        elem.parent = null;
    }
}
/**
 * Append a child to an element.
 *
 * @category Manipulation
 * @param parent The element to append to.
 * @param child The element to be added as a child.
 */ function appendChild(parent, child) {
    removeElement(child);
    child.next = null;
    child.parent = parent;
    if (parent.children.push(child) > 1) {
        var sibling = parent.children[parent.children.length - 2];
        sibling.next = child;
        child.prev = sibling;
    } else {
        child.prev = null;
    }
}
/**
 * Append an element after another.
 *
 * @category Manipulation
 * @param elem The element to append after.
 * @param next The element be added.
 */ function append(elem, next) {
    removeElement(next);
    var parent = elem.parent;
    var currNext = elem.next;
    next.next = currNext;
    next.prev = elem;
    elem.next = next;
    next.parent = parent;
    if (currNext) {
        currNext.prev = next;
        if (parent) {
            var childs = parent.children;
            childs.splice(childs.lastIndexOf(currNext), 0, next);
        }
    } else if (parent) {
        parent.children.push(next);
    }
}
/**
 * Prepend a child to an element.
 *
 * @category Manipulation
 * @param parent The element to prepend before.
 * @param child The element to be added as a child.
 */ function prependChild(parent, child) {
    removeElement(child);
    child.parent = parent;
    child.prev = null;
    if (parent.children.unshift(child) !== 1) {
        var sibling = parent.children[1];
        sibling.prev = child;
        child.next = sibling;
    } else {
        child.next = null;
    }
}
/**
 * Prepend an element before another.
 *
 * @category Manipulation
 * @param elem The element to prepend before.
 * @param prev The element be added.
 */ function prepend(elem, prev) {
    removeElement(prev);
    var parent = elem.parent;
    if (parent) {
        var childs = parent.children;
        childs.splice(childs.indexOf(elem), 0, prev);
    }
    if (elem.prev) {
        elem.prev.next = prev;
    }
    prev.parent = parent;
    prev.prev = elem.prev;
    prev.next = elem;
    elem.prev = prev;
} //# sourceMappingURL=manipulation.js.map
}),
"[project]/learn-next/final/node_modules/domutils/lib/querying.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.filter = filter;
exports.find = find;
exports.findOneChild = findOneChild;
exports.findOne = findOne;
exports.existsOne = existsOne;
exports.findAll = findAll;
var domhandler_1 = __turbopack_context__.r("[project]/learn-next/final/node_modules/domhandler/lib/index.js [app-ssr] (ecmascript)");
/**
 * Search a node and its children for nodes passing a test function. If `node` is not an array, it will be wrapped in one.
 *
 * @category Querying
 * @param test Function to test nodes on.
 * @param node Node to search. Will be included in the result set if it matches.
 * @param recurse Also consider child nodes.
 * @param limit Maximum number of nodes to return.
 * @returns All nodes passing `test`.
 */ function filter(test, node, recurse, limit) {
    if (recurse === void 0) {
        recurse = true;
    }
    if (limit === void 0) {
        limit = Infinity;
    }
    return find(test, Array.isArray(node) ? node : [
        node
    ], recurse, limit);
}
/**
 * Search an array of nodes and their children for nodes passing a test function.
 *
 * @category Querying
 * @param test Function to test nodes on.
 * @param nodes Array of nodes to search.
 * @param recurse Also consider child nodes.
 * @param limit Maximum number of nodes to return.
 * @returns All nodes passing `test`.
 */ function find(test, nodes, recurse, limit) {
    var result = [];
    /** Stack of the arrays we are looking at. */ var nodeStack = [
        Array.isArray(nodes) ? nodes : [
            nodes
        ]
    ];
    /** Stack of the indices within the arrays. */ var indexStack = [
        0
    ];
    for(;;){
        // First, check if the current array has any more elements to look at.
        if (indexStack[0] >= nodeStack[0].length) {
            // If we have no more arrays to look at, we are done.
            if (indexStack.length === 1) {
                return result;
            }
            // Otherwise, remove the current array from the stack.
            nodeStack.shift();
            indexStack.shift();
            continue;
        }
        var elem = nodeStack[0][indexStack[0]++];
        if (test(elem)) {
            result.push(elem);
            if (--limit <= 0) return result;
        }
        if (recurse && (0, domhandler_1.hasChildren)(elem) && elem.children.length > 0) {
            /*
             * Add the children to the stack. We are depth-first, so this is
             * the next array we look at.
             */ indexStack.unshift(0);
            nodeStack.unshift(elem.children);
        }
    }
}
/**
 * Finds the first element inside of an array that matches a test function. This is an alias for `Array.prototype.find`.
 *
 * @category Querying
 * @param test Function to test nodes on.
 * @param nodes Array of nodes to search.
 * @returns The first node in the array that passes `test`.
 * @deprecated Use `Array.prototype.find` directly.
 */ function findOneChild(test, nodes) {
    return nodes.find(test);
}
/**
 * Finds one element in a tree that passes a test.
 *
 * @category Querying
 * @param test Function to test nodes on.
 * @param nodes Node or array of nodes to search.
 * @param recurse Also consider child nodes.
 * @returns The first node that passes `test`.
 */ function findOne(test, nodes, recurse) {
    if (recurse === void 0) {
        recurse = true;
    }
    var searchedNodes = Array.isArray(nodes) ? nodes : [
        nodes
    ];
    for(var i = 0; i < searchedNodes.length; i++){
        var node = searchedNodes[i];
        if ((0, domhandler_1.isTag)(node) && test(node)) {
            return node;
        }
        if (recurse && (0, domhandler_1.hasChildren)(node) && node.children.length > 0) {
            var found = findOne(test, node.children, true);
            if (found) return found;
        }
    }
    return null;
}
/**
 * Checks if a tree of nodes contains at least one node passing a test.
 *
 * @category Querying
 * @param test Function to test nodes on.
 * @param nodes Array of nodes to search.
 * @returns Whether a tree of nodes contains at least one node passing the test.
 */ function existsOne(test, nodes) {
    return (Array.isArray(nodes) ? nodes : [
        nodes
    ]).some(function(node) {
        return (0, domhandler_1.isTag)(node) && test(node) || (0, domhandler_1.hasChildren)(node) && existsOne(test, node.children);
    });
}
/**
 * Search an array of nodes and their children for elements passing a test function.
 *
 * Same as `find`, but limited to elements and with less options, leading to reduced complexity.
 *
 * @category Querying
 * @param test Function to test nodes on.
 * @param nodes Array of nodes to search.
 * @returns All nodes passing `test`.
 */ function findAll(test, nodes) {
    var result = [];
    var nodeStack = [
        Array.isArray(nodes) ? nodes : [
            nodes
        ]
    ];
    var indexStack = [
        0
    ];
    for(;;){
        if (indexStack[0] >= nodeStack[0].length) {
            if (nodeStack.length === 1) {
                return result;
            }
            // Otherwise, remove the current array from the stack.
            nodeStack.shift();
            indexStack.shift();
            continue;
        }
        var elem = nodeStack[0][indexStack[0]++];
        if ((0, domhandler_1.isTag)(elem) && test(elem)) result.push(elem);
        if ((0, domhandler_1.hasChildren)(elem) && elem.children.length > 0) {
            indexStack.unshift(0);
            nodeStack.unshift(elem.children);
        }
    }
} //# sourceMappingURL=querying.js.map
}),
"[project]/learn-next/final/node_modules/domutils/lib/legacy.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.testElement = testElement;
exports.getElements = getElements;
exports.getElementById = getElementById;
exports.getElementsByTagName = getElementsByTagName;
exports.getElementsByClassName = getElementsByClassName;
exports.getElementsByTagType = getElementsByTagType;
var domhandler_1 = __turbopack_context__.r("[project]/learn-next/final/node_modules/domhandler/lib/index.js [app-ssr] (ecmascript)");
var querying_js_1 = __turbopack_context__.r("[project]/learn-next/final/node_modules/domutils/lib/querying.js [app-ssr] (ecmascript)");
/**
 * A map of functions to check nodes against.
 */ var Checks = {
    tag_name: function(name) {
        if (typeof name === "function") {
            return function(elem) {
                return (0, domhandler_1.isTag)(elem) && name(elem.name);
            };
        } else if (name === "*") {
            return domhandler_1.isTag;
        }
        return function(elem) {
            return (0, domhandler_1.isTag)(elem) && elem.name === name;
        };
    },
    tag_type: function(type) {
        if (typeof type === "function") {
            return function(elem) {
                return type(elem.type);
            };
        }
        return function(elem) {
            return elem.type === type;
        };
    },
    tag_contains: function(data) {
        if (typeof data === "function") {
            return function(elem) {
                return (0, domhandler_1.isText)(elem) && data(elem.data);
            };
        }
        return function(elem) {
            return (0, domhandler_1.isText)(elem) && elem.data === data;
        };
    }
};
/**
 * Returns a function to check whether a node has an attribute with a particular
 * value.
 *
 * @param attrib Attribute to check.
 * @param value Attribute value to look for.
 * @returns A function to check whether the a node has an attribute with a
 *   particular value.
 */ function getAttribCheck(attrib, value) {
    if (typeof value === "function") {
        return function(elem) {
            return (0, domhandler_1.isTag)(elem) && value(elem.attribs[attrib]);
        };
    }
    return function(elem) {
        return (0, domhandler_1.isTag)(elem) && elem.attribs[attrib] === value;
    };
}
/**
 * Returns a function that returns `true` if either of the input functions
 * returns `true` for a node.
 *
 * @param a First function to combine.
 * @param b Second function to combine.
 * @returns A function taking a node and returning `true` if either of the input
 *   functions returns `true` for the node.
 */ function combineFuncs(a, b) {
    return function(elem) {
        return a(elem) || b(elem);
    };
}
/**
 * Returns a function that executes all checks in `options` and returns `true`
 * if any of them match a node.
 *
 * @param options An object describing nodes to look for.
 * @returns A function that executes all checks in `options` and returns `true`
 *   if any of them match a node.
 */ function compileTest(options) {
    var funcs = Object.keys(options).map(function(key) {
        var value = options[key];
        return Object.prototype.hasOwnProperty.call(Checks, key) ? Checks[key](value) : getAttribCheck(key, value);
    });
    return funcs.length === 0 ? null : funcs.reduce(combineFuncs);
}
/**
 * Checks whether a node matches the description in `options`.
 *
 * @category Legacy Query Functions
 * @param options An object describing nodes to look for.
 * @param node The element to test.
 * @returns Whether the element matches the description in `options`.
 */ function testElement(options, node) {
    var test = compileTest(options);
    return test ? test(node) : true;
}
/**
 * Returns all nodes that match `options`.
 *
 * @category Legacy Query Functions
 * @param options An object describing nodes to look for.
 * @param nodes Nodes to search through.
 * @param recurse Also consider child nodes.
 * @param limit Maximum number of nodes to return.
 * @returns All nodes that match `options`.
 */ function getElements(options, nodes, recurse, limit) {
    if (limit === void 0) {
        limit = Infinity;
    }
    var test = compileTest(options);
    return test ? (0, querying_js_1.filter)(test, nodes, recurse, limit) : [];
}
/**
 * Returns the node with the supplied ID.
 *
 * @category Legacy Query Functions
 * @param id The unique ID attribute value to look for.
 * @param nodes Nodes to search through.
 * @param recurse Also consider child nodes.
 * @returns The node with the supplied ID.
 */ function getElementById(id, nodes, recurse) {
    if (recurse === void 0) {
        recurse = true;
    }
    if (!Array.isArray(nodes)) nodes = [
        nodes
    ];
    return (0, querying_js_1.findOne)(getAttribCheck("id", id), nodes, recurse);
}
/**
 * Returns all nodes with the supplied `tagName`.
 *
 * @category Legacy Query Functions
 * @param tagName Tag name to search for.
 * @param nodes Nodes to search through.
 * @param recurse Also consider child nodes.
 * @param limit Maximum number of nodes to return.
 * @returns All nodes with the supplied `tagName`.
 */ function getElementsByTagName(tagName, nodes, recurse, limit) {
    if (recurse === void 0) {
        recurse = true;
    }
    if (limit === void 0) {
        limit = Infinity;
    }
    return (0, querying_js_1.filter)(Checks["tag_name"](tagName), nodes, recurse, limit);
}
/**
 * Returns all nodes with the supplied `className`.
 *
 * @category Legacy Query Functions
 * @param className Class name to search for.
 * @param nodes Nodes to search through.
 * @param recurse Also consider child nodes.
 * @param limit Maximum number of nodes to return.
 * @returns All nodes with the supplied `className`.
 */ function getElementsByClassName(className, nodes, recurse, limit) {
    if (recurse === void 0) {
        recurse = true;
    }
    if (limit === void 0) {
        limit = Infinity;
    }
    return (0, querying_js_1.filter)(getAttribCheck("class", className), nodes, recurse, limit);
}
/**
 * Returns all nodes with the supplied `type`.
 *
 * @category Legacy Query Functions
 * @param type Element type to look for.
 * @param nodes Nodes to search through.
 * @param recurse Also consider child nodes.
 * @param limit Maximum number of nodes to return.
 * @returns All nodes with the supplied `type`.
 */ function getElementsByTagType(type, nodes, recurse, limit) {
    if (recurse === void 0) {
        recurse = true;
    }
    if (limit === void 0) {
        limit = Infinity;
    }
    return (0, querying_js_1.filter)(Checks["tag_type"](type), nodes, recurse, limit);
} //# sourceMappingURL=legacy.js.map
}),
"[project]/learn-next/final/node_modules/domutils/lib/helpers.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.DocumentPosition = void 0;
exports.removeSubsets = removeSubsets;
exports.compareDocumentPosition = compareDocumentPosition;
exports.uniqueSort = uniqueSort;
var domhandler_1 = __turbopack_context__.r("[project]/learn-next/final/node_modules/domhandler/lib/index.js [app-ssr] (ecmascript)");
/**
 * Given an array of nodes, remove any member that is contained by another
 * member.
 *
 * @category Helpers
 * @param nodes Nodes to filter.
 * @returns Remaining nodes that aren't contained by other nodes.
 */ function removeSubsets(nodes) {
    var idx = nodes.length;
    /*
     * Check if each node (or one of its ancestors) is already contained in the
     * array.
     */ while(--idx >= 0){
        var node = nodes[idx];
        /*
         * Remove the node if it is not unique.
         * We are going through the array from the end, so we only
         * have to check nodes that preceed the node under consideration in the array.
         */ if (idx > 0 && nodes.lastIndexOf(node, idx - 1) >= 0) {
            nodes.splice(idx, 1);
            continue;
        }
        for(var ancestor = node.parent; ancestor; ancestor = ancestor.parent){
            if (nodes.includes(ancestor)) {
                nodes.splice(idx, 1);
                break;
            }
        }
    }
    return nodes;
}
/**
 * @category Helpers
 * @see {@link http://dom.spec.whatwg.org/#dom-node-comparedocumentposition}
 */ var DocumentPosition;
(function(DocumentPosition) {
    DocumentPosition[DocumentPosition["DISCONNECTED"] = 1] = "DISCONNECTED";
    DocumentPosition[DocumentPosition["PRECEDING"] = 2] = "PRECEDING";
    DocumentPosition[DocumentPosition["FOLLOWING"] = 4] = "FOLLOWING";
    DocumentPosition[DocumentPosition["CONTAINS"] = 8] = "CONTAINS";
    DocumentPosition[DocumentPosition["CONTAINED_BY"] = 16] = "CONTAINED_BY";
})(DocumentPosition || (exports.DocumentPosition = DocumentPosition = {}));
/**
 * Compare the position of one node against another node in any other document,
 * returning a bitmask with the values from {@link DocumentPosition}.
 *
 * Document order:
 * > There is an ordering, document order, defined on all the nodes in the
 * > document corresponding to the order in which the first character of the
 * > XML representation of each node occurs in the XML representation of the
 * > document after expansion of general entities. Thus, the document element
 * > node will be the first node. Element nodes occur before their children.
 * > Thus, document order orders element nodes in order of the occurrence of
 * > their start-tag in the XML (after expansion of entities). The attribute
 * > nodes of an element occur after the element and before its children. The
 * > relative order of attribute nodes is implementation-dependent.
 *
 * Source:
 * http://www.w3.org/TR/DOM-Level-3-Core/glossary.html#dt-document-order
 *
 * @category Helpers
 * @param nodeA The first node to use in the comparison
 * @param nodeB The second node to use in the comparison
 * @returns A bitmask describing the input nodes' relative position.
 *
 * See http://dom.spec.whatwg.org/#dom-node-comparedocumentposition for
 * a description of these values.
 */ function compareDocumentPosition(nodeA, nodeB) {
    var aParents = [];
    var bParents = [];
    if (nodeA === nodeB) {
        return 0;
    }
    var current = (0, domhandler_1.hasChildren)(nodeA) ? nodeA : nodeA.parent;
    while(current){
        aParents.unshift(current);
        current = current.parent;
    }
    current = (0, domhandler_1.hasChildren)(nodeB) ? nodeB : nodeB.parent;
    while(current){
        bParents.unshift(current);
        current = current.parent;
    }
    var maxIdx = Math.min(aParents.length, bParents.length);
    var idx = 0;
    while(idx < maxIdx && aParents[idx] === bParents[idx]){
        idx++;
    }
    if (idx === 0) {
        return DocumentPosition.DISCONNECTED;
    }
    var sharedParent = aParents[idx - 1];
    var siblings = sharedParent.children;
    var aSibling = aParents[idx];
    var bSibling = bParents[idx];
    if (siblings.indexOf(aSibling) > siblings.indexOf(bSibling)) {
        if (sharedParent === nodeB) {
            return DocumentPosition.FOLLOWING | DocumentPosition.CONTAINED_BY;
        }
        return DocumentPosition.FOLLOWING;
    }
    if (sharedParent === nodeA) {
        return DocumentPosition.PRECEDING | DocumentPosition.CONTAINS;
    }
    return DocumentPosition.PRECEDING;
}
/**
 * Sort an array of nodes based on their relative position in the document,
 * removing any duplicate nodes. If the array contains nodes that do not belong
 * to the same document, sort order is unspecified.
 *
 * @category Helpers
 * @param nodes Array of DOM nodes.
 * @returns Collection of unique nodes, sorted in document order.
 */ function uniqueSort(nodes) {
    nodes = nodes.filter(function(node, i, arr) {
        return !arr.includes(node, i + 1);
    });
    nodes.sort(function(a, b) {
        var relative = compareDocumentPosition(a, b);
        if (relative & DocumentPosition.PRECEDING) {
            return -1;
        } else if (relative & DocumentPosition.FOLLOWING) {
            return 1;
        }
        return 0;
    });
    return nodes;
} //# sourceMappingURL=helpers.js.map
}),
"[project]/learn-next/final/node_modules/domutils/lib/feeds.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getFeed = getFeed;
var stringify_js_1 = __turbopack_context__.r("[project]/learn-next/final/node_modules/domutils/lib/stringify.js [app-ssr] (ecmascript)");
var legacy_js_1 = __turbopack_context__.r("[project]/learn-next/final/node_modules/domutils/lib/legacy.js [app-ssr] (ecmascript)");
/**
 * Get the feed object from the root of a DOM tree.
 *
 * @category Feeds
 * @param doc - The DOM to to extract the feed from.
 * @returns The feed.
 */ function getFeed(doc) {
    var feedRoot = getOneElement(isValidFeed, doc);
    return !feedRoot ? null : feedRoot.name === "feed" ? getAtomFeed(feedRoot) : getRssFeed(feedRoot);
}
/**
 * Parse an Atom feed.
 *
 * @param feedRoot The root of the feed.
 * @returns The parsed feed.
 */ function getAtomFeed(feedRoot) {
    var _a;
    var childs = feedRoot.children;
    var feed = {
        type: "atom",
        items: (0, legacy_js_1.getElementsByTagName)("entry", childs).map(function(item) {
            var _a;
            var children = item.children;
            var entry = {
                media: getMediaElements(children)
            };
            addConditionally(entry, "id", "id", children);
            addConditionally(entry, "title", "title", children);
            var href = (_a = getOneElement("link", children)) === null || _a === void 0 ? void 0 : _a.attribs["href"];
            if (href) {
                entry.link = href;
            }
            var description = fetch("summary", children) || fetch("content", children);
            if (description) {
                entry.description = description;
            }
            var pubDate = fetch("updated", children);
            if (pubDate) {
                entry.pubDate = new Date(pubDate);
            }
            return entry;
        })
    };
    addConditionally(feed, "id", "id", childs);
    addConditionally(feed, "title", "title", childs);
    var href = (_a = getOneElement("link", childs)) === null || _a === void 0 ? void 0 : _a.attribs["href"];
    if (href) {
        feed.link = href;
    }
    addConditionally(feed, "description", "subtitle", childs);
    var updated = fetch("updated", childs);
    if (updated) {
        feed.updated = new Date(updated);
    }
    addConditionally(feed, "author", "email", childs, true);
    return feed;
}
/**
 * Parse a RSS feed.
 *
 * @param feedRoot The root of the feed.
 * @returns The parsed feed.
 */ function getRssFeed(feedRoot) {
    var _a, _b;
    var childs = (_b = (_a = getOneElement("channel", feedRoot.children)) === null || _a === void 0 ? void 0 : _a.children) !== null && _b !== void 0 ? _b : [];
    var feed = {
        type: feedRoot.name.substr(0, 3),
        id: "",
        items: (0, legacy_js_1.getElementsByTagName)("item", feedRoot.children).map(function(item) {
            var children = item.children;
            var entry = {
                media: getMediaElements(children)
            };
            addConditionally(entry, "id", "guid", children);
            addConditionally(entry, "title", "title", children);
            addConditionally(entry, "link", "link", children);
            addConditionally(entry, "description", "description", children);
            var pubDate = fetch("pubDate", children) || fetch("dc:date", children);
            if (pubDate) entry.pubDate = new Date(pubDate);
            return entry;
        })
    };
    addConditionally(feed, "title", "title", childs);
    addConditionally(feed, "link", "link", childs);
    addConditionally(feed, "description", "description", childs);
    var updated = fetch("lastBuildDate", childs);
    if (updated) {
        feed.updated = new Date(updated);
    }
    addConditionally(feed, "author", "managingEditor", childs, true);
    return feed;
}
var MEDIA_KEYS_STRING = [
    "url",
    "type",
    "lang"
];
var MEDIA_KEYS_INT = [
    "fileSize",
    "bitrate",
    "framerate",
    "samplingrate",
    "channels",
    "duration",
    "height",
    "width"
];
/**
 * Get all media elements of a feed item.
 *
 * @param where Nodes to search in.
 * @returns Media elements.
 */ function getMediaElements(where) {
    return (0, legacy_js_1.getElementsByTagName)("media:content", where).map(function(elem) {
        var attribs = elem.attribs;
        var media = {
            medium: attribs["medium"],
            isDefault: !!attribs["isDefault"]
        };
        for(var _i = 0, MEDIA_KEYS_STRING_1 = MEDIA_KEYS_STRING; _i < MEDIA_KEYS_STRING_1.length; _i++){
            var attrib = MEDIA_KEYS_STRING_1[_i];
            if (attribs[attrib]) {
                media[attrib] = attribs[attrib];
            }
        }
        for(var _a = 0, MEDIA_KEYS_INT_1 = MEDIA_KEYS_INT; _a < MEDIA_KEYS_INT_1.length; _a++){
            var attrib = MEDIA_KEYS_INT_1[_a];
            if (attribs[attrib]) {
                media[attrib] = parseInt(attribs[attrib], 10);
            }
        }
        if (attribs["expression"]) {
            media.expression = attribs["expression"];
        }
        return media;
    });
}
/**
 * Get one element by tag name.
 *
 * @param tagName Tag name to look for
 * @param node Node to search in
 * @returns The element or null
 */ function getOneElement(tagName, node) {
    return (0, legacy_js_1.getElementsByTagName)(tagName, node, true, 1)[0];
}
/**
 * Get the text content of an element with a certain tag name.
 *
 * @param tagName Tag name to look for.
 * @param where Node to search in.
 * @param recurse Whether to recurse into child nodes.
 * @returns The text content of the element.
 */ function fetch(tagName, where, recurse) {
    if (recurse === void 0) {
        recurse = false;
    }
    return (0, stringify_js_1.textContent)((0, legacy_js_1.getElementsByTagName)(tagName, where, recurse, 1)).trim();
}
/**
 * Adds a property to an object if it has a value.
 *
 * @param obj Object to be extended
 * @param prop Property name
 * @param tagName Tag name that contains the conditionally added property
 * @param where Element to search for the property
 * @param recurse Whether to recurse into child nodes.
 */ function addConditionally(obj, prop, tagName, where, recurse) {
    if (recurse === void 0) {
        recurse = false;
    }
    var val = fetch(tagName, where, recurse);
    if (val) obj[prop] = val;
}
/**
 * Checks if an element is a feed root node.
 *
 * @param value The name of the element to check.
 * @returns Whether an element is a feed root node.
 */ function isValidFeed(value) {
    return value === "rss" || value === "feed" || value === "rdf:RDF";
} //# sourceMappingURL=feeds.js.map
}),
"[project]/learn-next/final/node_modules/domutils/lib/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __createBinding = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = {
            enumerable: true,
            get: function() {
                return m[k];
            }
        };
    }
    Object.defineProperty(o, k2, desc);
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var __exportStar = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__exportStar || function(m, exports1) {
    for(var p in m)if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports1, p)) __createBinding(exports1, m, p);
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.hasChildren = exports.isDocument = exports.isComment = exports.isText = exports.isCDATA = exports.isTag = void 0;
__exportStar(__turbopack_context__.r("[project]/learn-next/final/node_modules/domutils/lib/stringify.js [app-ssr] (ecmascript)"), exports);
__exportStar(__turbopack_context__.r("[project]/learn-next/final/node_modules/domutils/lib/traversal.js [app-ssr] (ecmascript)"), exports);
__exportStar(__turbopack_context__.r("[project]/learn-next/final/node_modules/domutils/lib/manipulation.js [app-ssr] (ecmascript)"), exports);
__exportStar(__turbopack_context__.r("[project]/learn-next/final/node_modules/domutils/lib/querying.js [app-ssr] (ecmascript)"), exports);
__exportStar(__turbopack_context__.r("[project]/learn-next/final/node_modules/domutils/lib/legacy.js [app-ssr] (ecmascript)"), exports);
__exportStar(__turbopack_context__.r("[project]/learn-next/final/node_modules/domutils/lib/helpers.js [app-ssr] (ecmascript)"), exports);
__exportStar(__turbopack_context__.r("[project]/learn-next/final/node_modules/domutils/lib/feeds.js [app-ssr] (ecmascript)"), exports);
/** @deprecated Use these methods from `domhandler` directly. */ var domhandler_1 = __turbopack_context__.r("[project]/learn-next/final/node_modules/domhandler/lib/index.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "isTag", {
    enumerable: true,
    get: function() {
        return domhandler_1.isTag;
    }
});
Object.defineProperty(exports, "isCDATA", {
    enumerable: true,
    get: function() {
        return domhandler_1.isCDATA;
    }
});
Object.defineProperty(exports, "isText", {
    enumerable: true,
    get: function() {
        return domhandler_1.isText;
    }
});
Object.defineProperty(exports, "isComment", {
    enumerable: true,
    get: function() {
        return domhandler_1.isComment;
    }
});
Object.defineProperty(exports, "isDocument", {
    enumerable: true,
    get: function() {
        return domhandler_1.isDocument;
    }
});
Object.defineProperty(exports, "hasChildren", {
    enumerable: true,
    get: function() {
        return domhandler_1.hasChildren;
    }
}); //# sourceMappingURL=index.js.map
}),
"[project]/learn-next/final/node_modules/html-to-md/dist/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

!function(t, e) {
    ("TURBOPACK compile-time truthy", 1) ? module.exports = e() : "TURBOPACK unreachable";
}(/*TURBOPACK member replacement*/ __turbopack_context__.e, function() {
    return function(t) {
        var e = {};
        function r(n) {
            if (e[n]) return e[n].exports;
            var o = e[n] = {
                i: n,
                l: !1,
                exports: {}
            };
            return t[n].call(o.exports, o, o.exports, r), o.l = !0, o.exports;
        }
        return r.m = t, r.c = e, r.d = function(t, e, n) {
            r.o(t, e) || Object.defineProperty(t, e, {
                enumerable: !0,
                get: n
            });
        }, r.r = function(t) {
            "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
                value: "Module"
            }), Object.defineProperty(t, "__esModule", {
                value: !0
            });
        }, r.t = function(t, e) {
            if (1 & e && (t = r(t)), 8 & e) return t;
            if (4 & e && "object" === typeof t && t && t.__esModule) return t;
            var n = Object.create(null);
            if (r.r(n), Object.defineProperty(n, "default", {
                enumerable: !0,
                value: t
            }), 2 & e && "string" != typeof t) for(var o in t)r.d(n, o, (function(e) {
                return t[e];
            }).bind(null, o));
            return n;
        }, r.n = function(t) {
            var e = t && t.__esModule ? function() {
                return t.default;
            } : function() {
                return t;
            };
            return r.d(e, "a", e), e;
        }, r.o = function(t, e) {
            return Object.prototype.hasOwnProperty.call(t, e);
        }, r.p = "", r(r.s = 46);
    }([
        function(t, e, r) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var n = r(1), o = r(12), i = r(6), a = r(7), c = r(2), u = function() {
                function t(t, e, r) {
                    var o = void 0 === r ? {} : r, i = o.keepSpace, a = void 0 !== i && i, c = o.prevTagName, u = void 0 === c ? "" : c, s = o.nextTagName, p = void 0 === s ? "" : s, l = o.prevTagStr, f = void 0 === l ? "" : l, h = o.nextTagStr, d = void 0 === h ? "" : h, _ = o.parentTag, y = void 0 === _ ? "" : _, v = o.isFirstSubTag, g = void 0 === v || v, b = o.calcLeading, m = void 0 !== b && b, O = o.leadingSpace, S = void 0 === O ? "" : O, T = o.layer, x = void 0 === T ? 1 : T, j = o.noWrap, w = void 0 !== j && j, P = o.prevHasEndSpace, M = void 0 !== P && P, E = o.prevHasStartSpace, N = void 0 !== E && E, C = o.match, L = void 0 === C ? null : C, k = o.indentSpace, A = void 0 === k ? "" : k, H = o.language, W = void 0 === H ? "" : H, V = o.count, R = void 0 === V ? 1 : V, I = o.tableColumnCount, q = void 0 === I ? 0 : I, D = o.noExtraLine, U = void 0 !== D && D, B = o.inTable, F = void 0 !== B && B;
                    if (this.tagName = e, this.rawStr = t, this.parentTag = y, this.prevTagName = u, this.nextTagName = p, this.prevTagStr = f, this.nextTagStr = d, this.isFirstSubTag = g, this.calcLeading = m, this.leadingSpace = S, this.layer = x, this.noWrap = w, this.match = L, this.indentSpace = A, this.language = W, this.count = R, this.inTable = F, this.tableColumnCount = q, this.noExtraLine = U, this.prevHasEndSpace = M, this.prevHasStartSpace = N, this.hasStartSpace = !1, this.hasEndSpace = !1, this.keepSpace = a, !this.__detectStr__(t, this.tagName)) return this.attrs = {}, void (this.innerHTML = "");
                    var G = this.__fetchTagAttrAndInnerHTML__(t), $ = G.attr, J = G.innerHTML;
                    J.startsWith(" ") && (0, n.isSpacePassingTag)(e) && (this.hasStartSpace = !0), J.endsWith(" ") && (0, n.isSpacePassingTag)(e) && (this.hasEndSpace = !0), this.attrs = $, this.innerHTML = J;
                }
                return t.prototype.__detectStr__ = function(t, e) {
                    if ("<" !== t[0]) return "Not a valid tag, current tag name: ".concat(this.tagName, ", tag content: ").concat(t), !1;
                    for(var r = "", n = !1, o = 1; o < t.length && ">" !== t[o]; o++)!n && /(\s|\/)/.test(t[o]) && (n = !0), n || (r += t[o]);
                    return r === e;
                }, t.prototype.__fetchTagAttrAndInnerHTML__ = function(t) {
                    for(var e = "", r = 1; r < t.length && ">" !== t[r]; r++)e += t[r];
                    for(var o = t.slice(r + 1), i = "", a = -1, c = o.length - 1; c >= 0; c--)if ((i = o[c] + i).startsWith("</")) {
                        i.startsWith("</" + this.tagName + ">") && (a = c);
                        break;
                    }
                    -1 === a && (0, n.isSelfClosing)(this.tagName) && this.tagName;
                    var u = (0, n.getTagAttributes)(e);
                    return this.tagName && delete u[this.tagName], {
                        attr: u,
                        innerHTML: o.slice(0, a)
                    };
                }, t.prototype.__onlyLeadingSpace__ = function(t) {
                    t = t.trim();
                    for(var e = 0; e < t.length; e++)if (t[e] !== i.SINGLE) return !1;
                    return !0;
                }, t.prototype.__isEmpty__ = function(t) {
                    return !this.keepSpace && ("" === t && "td" !== this.tagName || this.calcLeading && this.__onlyLeadingSpace__(t));
                }, t.prototype.getValidSubTagName = function(t) {
                    return t;
                }, t.prototype.beforeParse = function() {
                    var t = c.default.get().tagListener;
                    if (t) {
                        var e = t(this.tagName, {
                            parentTag: this.parentTag,
                            prevTagName: this.prevTagName,
                            nextTagName: this.nextTagName,
                            isFirstSubTag: this.isFirstSubTag,
                            attrs: this.attrs,
                            innerHTML: this.innerHTML,
                            language: this.language,
                            match: this.match,
                            isSelfClosing: !1
                        }), r = e.attrs, n = e.language, o = e.match;
                        this.attrs = r, "string" === typeof n && (this.language = n), "undefined" !== typeof o && (this.match = o);
                    }
                    return "";
                }, t.prototype.parseValidSubTag = function(t, e, r) {
                    var o = new ((0, n.getTagConstructor)(e))(t, e, r);
                    return [
                        o.exec(),
                        o
                    ];
                }, t.prototype.parseOnlyString = function(t, e, r) {
                    var n = new o.default(t, e, r);
                    return [
                        n.exec(),
                        n
                    ];
                }, t.prototype.afterParsed = function(t) {
                    return t;
                }, t.prototype.slim = function(t) {
                    return this.keepSpace ? t : t.trim();
                }, t.prototype.beforeMergeSpace = function(t) {
                    return t;
                }, t.prototype.mergeSpace = function(t, e, r) {
                    return this.keepSpace && "pre" !== this.tagName ? t.endsWith("\n") ? t : t + r.replace(/\n+/g, "\n") : e + t + r;
                }, t.prototype.afterMergeSpace = function(t) {
                    return t;
                }, t.prototype.beforeReturn = function(t) {
                    return !((0, n.isSpacePassingTag)(this.prevTagName) && this.prevHasEndSpace || (0, n.isSpacePassingTag)(this.tagName) && this.hasStartSpace) || /^\s+/.test(t) || /\s+$/.test(this.prevTagStr) ? t : " " + t;
                }, t.prototype.exec = function(t, e) {
                    void 0 === t && (t = ""), void 0 === e && (e = "");
                    for(var r = this.beforeParse(), o = (0, n.generateGetNextValidTag)(this.innerHTML), i = o(), c = i[0], u = i[1], s = null, p = !1, l = !1; "" !== u;){
                        var f, h = o(), d = h[0], _ = h[1], y = {
                            parentTag: this.tagName,
                            nextTagName: d,
                            nextTagStr: _,
                            prevTagName: s,
                            prevTagStr: r,
                            prevHasEndSpace: l,
                            prevHasStartSpace: p,
                            leadingSpace: this.leadingSpace,
                            layer: this.layer,
                            keepSpace: this.keepSpace,
                            inTable: this.inTable,
                            calcLeading: ("li" === this.tagName || "ol" === this.tagName || "ul" === this.tagName) && this.calcLeading
                        }, v = void 0, g = void 0;
                        if (null != c) v = (f = this.parseValidSubTag(u, c, y))[0], g = f[1];
                        else v = (f = this.parseOnlyString(u, c, y))[0], g = f[1];
                        l = (null === g || void 0 === g ? void 0 : g.hasEndSpace) || !1, p = (null === g || void 0 === g ? void 0 : g.hasStartSpace) || !1;
                        var b = this.getValidSubTagName(c);
                        c = d, u = _, null == b && this.__isEmpty__(v) || (!this.keepSpace && (0, a.default)(s) && (0, a.default)(b) && (r = r.replace(/\n+$/, "\n"), v = v.replace(/^\n+/, "\n")), s = b, this.isFirstSubTag = !1, r += v);
                    }
                    return r = this.afterParsed(r), r = this.slim(r), this.__isEmpty__(r) ? "" : (r = this.beforeMergeSpace(r), !this.noExtraLine && (0, a.default)(this.tagName) && this.prevTagName && !r.startsWith("\n") && !(0, a.default)(this.prevTagName) && this.parentTag && (t = "\n\n"), r = this.mergeSpace(r, t, e), this.noWrap && !this.keepSpace && (r = r.replace(/\s+/g, " ")), r = this.afterMergeSpace(r), r = this.beforeReturn(r));
                }, t;
            }();
            e.default = u;
        },
        function(t, e, r) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.isSpacePassingTag = e.isIndependentTag = e.clearComment = e.getLanguage = e.getTableAlign = e.getTagAttributes = e.isSelfClosing = e.generateGetNextValidTag = e.getTagConstructor = e.getRealTagName = e.unescapeStr = e.extraEscape = void 0;
            var n = r(18);
            Object.defineProperty(e, "extraEscape", {
                enumerable: !0,
                get: function() {
                    return n.extraEscape;
                }
            }), Object.defineProperty(e, "unescapeStr", {
                enumerable: !0,
                get: function() {
                    return n.unescapeStr;
                }
            });
            var o = r(47);
            e.generateGetNextValidTag = o.default;
            var i = r(48);
            e.getTagConstructor = i.default;
            var a = r(11);
            e.isSelfClosing = a.default;
            var c = r(51);
            e.getTagAttributes = c.default;
            var u = r(52);
            e.getLanguage = u.default;
            var s = r(53);
            e.clearComment = s.default;
            var p = r(13);
            e.getRealTagName = p.default;
            var l = r(7);
            e.isIndependentTag = l.default;
            var f = r(54);
            e.isSpacePassingTag = f.default;
            var h = r(55);
            e.getTableAlign = h.default;
        },
        function(t, e, r) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var n = function() {
                function t(t) {
                    var e = void 0 === t ? {} : t, r = e.skipTags, n = void 0 === r ? [] : r, o = e.emptyTags, i = void 0 === o ? [] : o, a = e.ignoreTags, c = void 0 === a ? [] : a, u = e.aliasTags, s = void 0 === u ? {} : u, p = e.renderCustomTags, l = void 0 === p || p, f = e.tagListener, h = void 0 === f ? function(t, e) {
                        return e;
                    } : f;
                    this.options = {
                        skipTags: n,
                        emptyTags: i,
                        ignoreTags: c,
                        aliasTags: s,
                        renderCustomTags: l,
                        tagListener: h
                    };
                }
                return t.prototype.get = function() {
                    return this.options;
                }, t.prototype.clear = function() {
                    this.options = {};
                }, t.prototype.set = function(t, e) {
                    var r = this;
                    t && "[object Object]" === Object.prototype.toString.call(t) && Object.keys(t).forEach(function(n) {
                        e ? r.options[n] = t[n] : function(t, e, r) {
                            if (!(r in t)) return void (t[r] = e[r]);
                            var n = Array.isArray(t[r]), o = "[object Object]" === Object.prototype.toString.call(t[r]);
                            t[r] = n ? t[r].concat(e[r]) : o ? Object.assign(t[r], e[r]) : e[r];
                        }(r.options, t, n);
                    });
                }, t.prototype.reset = function() {
                    this.options = JSON.parse(JSON.stringify(o)), this.options.tagListener = function(t, e) {
                        return e;
                    };
                }, t;
            }();
            var o = {
                ignoreTags: [
                    "",
                    "style",
                    "head",
                    "!doctype",
                    "form",
                    "svg",
                    "noscript",
                    "script",
                    "meta"
                ],
                skipTags: [
                    "div",
                    "html",
                    "body",
                    "nav",
                    "section",
                    "footer",
                    "main",
                    "aside",
                    "article",
                    "header"
                ],
                emptyTags: [],
                aliasTags: {
                    figure: "p",
                    dl: "p",
                    dd: "p",
                    dt: "p",
                    figcaption: "p"
                },
                renderCustomTags: !0
            }, i = new n;
            i.reset(), e.default = i;
        },
        function(t, e, r) {
            "use strict";
            var n = this && this.__extends || function() {
                var t = function(e, r) {
                    return (t = Object.setPrototypeOf || ({
                        __proto__: []
                    }) instanceof Array && function(t, e) {
                        t.__proto__ = e;
                    } || function(t, e) {
                        for(var r in e)Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                    })(e, r);
                };
                return function(e, r) {
                    if ("function" !== typeof r && null !== r) throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");
                    function n() {
                        this.constructor = e;
                    }
                    t(e, r), e.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype, new n);
                };
            }();
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var o = function(t) {
                function e(e, r) {
                    void 0 === r && (r = "h1");
                    var n = t.call(this, e, r) || this;
                    return n.match = "#", n;
                }
                return n(e, t), e.prototype.beforeMergeSpace = function(t) {
                    return this.match + " " + t;
                }, e.prototype.exec = function(e, r) {
                    return e || (e = "\n"), r || (r = "\n"), t.prototype.exec.call(this, e, r);
                }, e;
            }(r(0).default);
            e.default = o;
        },
        function(t, e, r) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var n = r(1), o = r(2), i = function() {
                function t(t, e, r) {
                    var n = void 0 === r ? {} : r, o = n.parentTag, i = void 0 === o ? "" : o, a = n.leadingSpace, c = void 0 === a ? "" : a, u = n.layer, s = void 0 === u ? 1 : u, p = n.isFirstSubTag, l = void 0 !== p && p, f = n.inTable, h = void 0 !== f && f, d = n.match, _ = void 0 === d ? null : d, y = n.prevTagName, v = void 0 === y ? "" : y, g = n.nextTagName, b = void 0 === g ? "" : g;
                    if (this.tagName = e, this.rawStr = t, this.parentTag = i, this.isFirstSubTag = l, this.prevTagName = v, this.nextTagName = b, this.leadingSpace = c, this.layer = s, this.innerHTML = "", this.match = _, this.inTable = h, this.__detectStr__(t, this.tagName)) {
                        var m = this.__fetchTagAttr__(t).attr;
                        this.attrs = m;
                    } else this.attrs = {};
                }
                return t.prototype.__detectStr__ = function(t, e) {
                    if ("<" !== t[0]) return "Not a valid tag, current tag name: ".concat(this.tagName, ", tag content: ").concat(t), !1;
                    for(var r = "", n = !1, o = 1; o < t.length && ">" !== t[o]; o++)!n && /(\s|\/)/.test(t[o]) && (n = !0), n || (r += t[o]);
                    return r === e;
                }, t.prototype.__fetchTagAttr__ = function(t) {
                    for(var e = "", r = 1; r < t.length && ">" !== t[r]; r++)e += t[r];
                    return {
                        attr: (0, n.getTagAttributes)(e)
                    };
                }, t.prototype.beforeParse = function() {
                    var t = o.default.get().tagListener;
                    if (t) {
                        var e = t(this.tagName, {
                            parentTag: this.parentTag,
                            prevTagName: this.prevTagName,
                            nextTagName: this.nextTagName,
                            isFirstSubTag: this.isFirstSubTag,
                            attrs: this.attrs,
                            innerHTML: this.innerHTML,
                            match: this.match,
                            isSelfClosing: !0
                        }), r = e.attrs, n = e.match;
                        this.attrs = r, this.match = n;
                    }
                    return "";
                }, t.prototype.beforeMergeSpace = function(t) {
                    return t;
                }, t.prototype.afterMergeSpace = function(t) {
                    return t;
                }, t.prototype.beforeReturn = function(t) {
                    return t;
                }, t.prototype.exec = function(t, e) {
                    void 0 === t && (t = ""), void 0 === e && (e = "");
                    var r = this.beforeParse();
                    return r = t + (r = this.beforeMergeSpace(r)) + e, r = this.afterMergeSpace(r), r = this.beforeReturn(r);
                }, t;
            }();
            e.default = i;
        },
        function(t, e, r) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var n = function() {
                function t() {}
                return t.prototype.exec = function() {
                    return "";
                }, t;
            }();
            e.default = n;
        },
        function(t, e, r) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.TRIPLE = e.DOUBLE = e.SINGLE = void 0;
            e.SINGLE = "\u2608";
            e.DOUBLE = "\u2608\u2608";
            e.TRIPLE = "\u2608\u2608\u2608";
        },
        function(t, e, r) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var n = r(13), o = {
                html: !0,
                body: !0,
                p: !0,
                div: !0,
                pre: !0,
                section: !0,
                blockquote: !0,
                aside: !0,
                li: !0,
                ul: !0,
                ol: !0,
                form: !0,
                hr: !0,
                h1: !0,
                h2: !0,
                h3: !0,
                h4: !0,
                h5: !0,
                h6: !0,
                dl: !0,
                dd: !0,
                dt: !0,
                br: !0,
                table: !0
            };
            e.default = function(t) {
                if (!t) return !1;
                var e = (0, n.default)(t);
                return !!e && !!o[e];
            };
        },
        function(t, e, r) {
            "use strict";
            var n = this && this.__extends || function() {
                var t = function(e, r) {
                    return (t = Object.setPrototypeOf || ({
                        __proto__: []
                    }) instanceof Array && function(t, e) {
                        t.__proto__ = e;
                    } || function(t, e) {
                        for(var r in e)Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                    })(e, r);
                };
                return function(e, r) {
                    if ("function" !== typeof r && null !== r) throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");
                    function n() {
                        this.constructor = e;
                    }
                    t(e, r), e.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype, new n);
                };
            }(), o = this && this.__assign || function() {
                return (o = Object.assign || function(t) {
                    for(var e, r = 1, n = arguments.length; r < n; r++)for(var o in e = arguments[r])Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
                    return t;
                }).apply(this, arguments);
            };
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.__EmptySelfClose__ = e.__Empty__ = void 0;
            var i = r(0), a = r(4), c = function(t) {
                function e(e, r, n) {
                    return void 0 === r && (r = "__empty__"), t.call(this, e, r, n) || this;
                }
                return n(e, t), e.prototype.slim = function(t) {
                    return t;
                }, e.prototype.parseValidSubTag = function(r, n, i) {
                    if ("__skip__" === this.tagName) return t.prototype.parseValidSubTag.call(this, r, n, i);
                    var a = new e(r, n, o({}, i));
                    return [
                        a.exec(),
                        a
                    ];
                }, e.prototype.parseOnlyString = function(e, r, n) {
                    return "__skip__" === this.tagName ? t.prototype.parseOnlyString.call(this, e, r, n) : [
                        e,
                        null
                    ];
                }, e.prototype.exec = function() {
                    return t.prototype.exec.call(this, "", "");
                }, e;
            }(i.default);
            e.__Empty__ = c;
            var u = function(t) {
                function e(e, r) {
                    void 0 === r && (r = "__emptyselfclose__");
                    var n = t.call(this, e, r) || this;
                    return n.tagName = r, n;
                }
                return n(e, t), e.prototype.exec = function() {
                    return t.prototype.exec.call(this, "", "");
                }, e;
            }(a.default);
            e.__EmptySelfClose__ = u;
        },
        function(t, e, r) {
            "use strict";
            var n = this && this.__extends || function() {
                var t = function(e, r) {
                    return (t = Object.setPrototypeOf || ({
                        __proto__: []
                    }) instanceof Array && function(t, e) {
                        t.__proto__ = e;
                    } || function(t, e) {
                        for(var r in e)Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                    })(e, r);
                };
                return function(e, r) {
                    if ("function" !== typeof r && null !== r) throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");
                    function n() {
                        this.constructor = e;
                    }
                    t(e, r), e.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype, new n);
                };
            }();
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.__SkipSelfClose__ = e.__Skip__ = void 0;
            var o = r(0), i = r(4), a = r(1), c = function(t) {
                function e(e, r, n) {
                    void 0 === r && (r = "__skip__");
                    var o = t.call(this, e, r, n) || this;
                    return o.noNeedWrap = [
                        "td",
                        "th"
                    ], o;
                }
                return n(e, t), e.prototype.exec = function() {
                    var e = (0, a.isIndependentTag)((0, a.getRealTagName)(this.tagName)) && (!this.parentTag || !this.noNeedWrap.includes(this.parentTag)), r = e ? "\n" : "", n = e ? "\n" : "";
                    return t.prototype.exec.call(this, r, n);
                }, e;
            }(o.default);
            e.__Skip__ = c;
            var u = function(t) {
                function e(e, r, n) {
                    return void 0 === r && (r = "__skipselfclose__"), t.call(this, e, r, n) || this;
                }
                return n(e, t), e.prototype.exec = function() {
                    return "";
                }, e;
            }(i.default);
            e.__SkipSelfClose__ = u;
        },
        function(t, e, r) {
            "use strict";
            var n = this && this.__extends || function() {
                var t = function(e, r) {
                    return (t = Object.setPrototypeOf || ({
                        __proto__: []
                    }) instanceof Array && function(t, e) {
                        t.__proto__ = e;
                    } || function(t, e) {
                        for(var r in e)Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                    })(e, r);
                };
                return function(e, r) {
                    if ("function" !== typeof r && null !== r) throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");
                    function n() {
                        this.constructor = e;
                    }
                    t(e, r), e.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype, new n);
                };
            }();
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.__NoMatchSelfClose__ = e.__NoMatch__ = void 0;
            var o = r(0), i = r(4), a = function(t) {
                function e(e, r) {
                    return void 0 === r && (r = "__nomatch__"), t.call(this, e, r) || this;
                }
                return n(e, t), e.prototype.beforeMergeSpace = function(t) {
                    return "<".concat(this.tagName, ">").concat(t, "</").concat(this.tagName, ">");
                }, e.prototype.exec = function() {
                    return t.prototype.exec.call(this, "", "");
                }, e;
            }(o.default);
            e.__NoMatch__ = a;
            var c = function(t) {
                function e(e, r) {
                    return void 0 === r && (r = "__nomatchselfclose__"), t.call(this, e, r) || this;
                }
                return n(e, t), e.prototype.exec = function() {
                    return "<".concat(this.tagName, " />");
                }, e;
            }(i.default);
            e.__NoMatchSelfClose__ = c;
        },
        function(t, e, r) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var n = {
                img: !0,
                hr: !0,
                input: !0,
                br: !0,
                meta: !0,
                link: !0,
                "!doctype": !0,
                base: !0,
                col: !0,
                area: !0,
                param: !0,
                object: !0,
                embed: !0,
                keygen: !0,
                source: !0
            };
            e.default = function(t) {
                return null != t && !!n[t.toLowerCase()];
            };
        },
        function(t, e, r) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var n = r(1), o = r(7), i = function() {
                function t(t, e, r) {
                    void 0 === e && (e = "__nomatch__");
                    var n = void 0 === r ? {} : r, o = n.keepSpace, i = void 0 !== o && o, a = n.prevTagName, c = void 0 === a ? "" : a, u = n.nextTagName, s = void 0 === u ? "" : u, p = n.prevTagStr, l = void 0 === p ? "" : p, f = n.prevHasEndSpace, h = void 0 !== f && f, d = n.prevHasStartSpace, _ = void 0 !== d && d, y = n.parentTag, v = void 0 === y ? "" : y, g = n.calcLeading, b = void 0 !== g && g, m = n.layer, O = void 0 === m ? 1 : m, S = n.leadingSpace, T = void 0 === S ? "" : S, x = n.inTable, j = void 0 !== x && x;
                    this.tagName = e, this.nextTagName = s, this.prevTagName = c, this.parentTag = v, this.prevTagStr = l, this.keepSpace = i, this.calcLeading = b, this.leadingSpace = T, this.layer = O, this.rawStr = t, this.inTable = j, this.prevHasEndSpace = h, this.prevHasStartSpace = _, this.hasEndSpace = !1, this.hasStartSpace = !1, t.startsWith(" ") && (this.hasStartSpace = !0), t.endsWith(" ") && (this.hasEndSpace = !0);
                }
                return t.prototype.slim = function(t) {
                    if (this.keepSpace) return t;
                    var e = t.replace(/\s+/g, " ");
                    return (0, o.default)(this.prevTagName) && (e = e.trimLeft()), (0, o.default)(this.nextTagName) && (e = e.trimRight()), e;
                }, t.prototype.beforeReturn = function(t) {
                    if (this.keepSpace) return t;
                    if (this.calcLeading) return this.leadingSpace + (0, n.extraEscape)(t);
                    var e = (0, n.extraEscape)(t);
                    return this.inTable && (e = e.replace(/\|/g, "\\|")), this.prevTagName, this.prevHasEndSpace, this.prevTagStr, (0, n.isSpacePassingTag)(this.prevTagName) && this.prevHasEndSpace && !/^\s+/.test(t) && !/\s+$/.test(this.prevTagStr) ? " " + t : e;
                }, t.prototype.exec = function() {
                    var t = this.rawStr;
                    return t = this.slim(t), t = this.beforeReturn(t);
                }, t;
            }();
            e.default = i;
        },
        function(t, e, r) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var n = r(2);
            e.default = function(t) {
                if (!t) return t;
                var e = n.default.get().aliasTags;
                return null != (null === e || void 0 === e ? void 0 : e[t]) ? e[t] : t;
            };
        },
        function(t, e, r) {
            "use strict";
            var n = this && this.__extends || function() {
                var t = function(e, r) {
                    return (t = Object.setPrototypeOf || ({
                        __proto__: []
                    }) instanceof Array && function(t, e) {
                        t.__proto__ = e;
                    } || function(t, e) {
                        for(var r in e)Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                    })(e, r);
                };
                return function(e, r) {
                    if ("function" !== typeof r && null !== r) throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");
                    function n() {
                        this.constructor = e;
                    }
                    t(e, r), e.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype, new n);
                };
            }();
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var o = function(t) {
                function e(e, r, n) {
                    void 0 === r && (r = "strong");
                    var o = t.call(this, e, r, n) || this;
                    return o.layer = 1, o.match = o.match || "**", o;
                }
                return n(e, t), e.prototype.beforeMergeSpace = function(t) {
                    return this.match + t + this.match;
                }, e.prototype.exec = function(e, r) {
                    return void 0 === e && (e = ""), void 0 === r && (r = ""), null != this.match && this.prevTagStr && !this.prevTagStr.endsWith("\\" + this.match[0]) && this.prevTagStr.endsWith(this.match[0]) && (e = " "), t.prototype.exec.call(this, e, r);
                }, e;
            }(r(0).default);
            e.default = o;
        },
        function(t, e, r) {
            "use strict";
            var n = this && this.__extends || function() {
                var t = function(e, r) {
                    return (t = Object.setPrototypeOf || ({
                        __proto__: []
                    }) instanceof Array && function(t, e) {
                        t.__proto__ = e;
                    } || function(t, e) {
                        for(var r in e)Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                    })(e, r);
                };
                return function(e, r) {
                    if ("function" !== typeof r && null !== r) throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");
                    function n() {
                        this.constructor = e;
                    }
                    t(e, r), e.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype, new n);
                };
            }();
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var o = function(t) {
                function e(e, r) {
                    void 0 === r && (r = "del");
                    var n = t.call(this, e, r) || this;
                    return n.match = n.match || "~~", n;
                }
                return n(e, t), e.prototype.beforeMergeSpace = function(t) {
                    return this.match + t + this.match;
                }, e.prototype.exec = function(e, r) {
                    return void 0 === e && (e = ""), void 0 === r && (r = ""), t.prototype.exec.call(this, e, r);
                }, e;
            }(r(0).default);
            e.default = o;
        },
        function(t, e, r) {
            "use strict";
            var n = this && this.__extends || function() {
                var t = function(e, r) {
                    return (t = Object.setPrototypeOf || ({
                        __proto__: []
                    }) instanceof Array && function(t, e) {
                        t.__proto__ = e;
                    } || function(t, e) {
                        for(var r in e)Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                    })(e, r);
                };
                return function(e, r) {
                    if ("function" !== typeof r && null !== r) throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");
                    function n() {
                        this.constructor = e;
                    }
                    t(e, r), e.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype, new n);
                };
            }();
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var o = function(t) {
                function e(e, r, n) {
                    void 0 === r && (r = "em");
                    var o = t.call(this, e, r, n) || this;
                    return o.match = o.match || "*", o;
                }
                return n(e, t), e.prototype.beforeMergeSpace = function(t) {
                    return this.match + t + this.match;
                }, e.prototype.exec = function(e, r) {
                    return void 0 === e && (e = ""), void 0 === r && (r = ""), "strong" === this.parentTag && this.nextTagStr && (r = " "), null != this.match && this.prevTagStr && !this.prevTagStr.endsWith("\\" + this.match) && this.prevTagStr.endsWith(this.match) && (e = " "), t.prototype.exec.call(this, e, r);
                }, e;
            }(r(0).default);
            e.default = o;
        },
        function(t, e, r) {
            "use strict";
            var n = this && this.__extends || function() {
                var t = function(e, r) {
                    return (t = Object.setPrototypeOf || ({
                        __proto__: []
                    }) instanceof Array && function(t, e) {
                        t.__proto__ = e;
                    } || function(t, e) {
                        for(var r in e)Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                    })(e, r);
                };
                return function(e, r) {
                    if ("function" !== typeof r && null !== r) throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");
                    function n() {
                        this.constructor = e;
                    }
                    t(e, r), e.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype, new n);
                };
            }();
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var o = function(t) {
                function e(e, r, n) {
                    void 0 === r && (r = "th");
                    var o = t.call(this, e, r, n) || this;
                    return o.tagName = r, o;
                }
                return n(e, t), e.prototype.beforeMergeSpace = function(t) {
                    return t + "|";
                }, e.prototype.parseValidSubTag = function(e, r, n) {
                    return "ul" === r || "ol" === r || "table" === r || "pre" === r ? [
                        e.replace(/([\n\r])/g, ""),
                        null
                    ] : t.prototype.parseValidSubTag.call(this, e, r, n);
                }, e.prototype.exec = function(e, r) {
                    return void 0 === e && (e = ""), void 0 === r && (r = ""), t.prototype.exec.call(this, e, r);
                }, e;
            }(r(0).default);
            e.default = o;
        },
        function(t, e, r) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.unescapeStr = e.extraEscape = e.escapeStr = void 0;
            var n = {
                "&amp;": "&",
                "&lt;": "<",
                "&gt;": ">",
                "&quot;": '"',
                "&#39;": "'",
                "&apos;": "'",
                "&#x60;": "`",
                "&ldquo;": "\u201c",
                "&rdquo;": "\u201d"
            }, o = {
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&#39;",
                "`": "&#x60;",
                "\u201c": "&ldquo;",
                "\u201d": "&rdquo;"
            }, i = /[&<>"'`\u201c\u201d]/g, a = RegExp(i.source), c = /&(?:amp|lt|gt|quot|#39|apos|#x60|ldquo|rdquo);/g, u = RegExp(c.source), s = [
                [
                    /\\/g,
                    "\\\\"
                ],
                [
                    /\*/g,
                    "\\*"
                ],
                [
                    /^-/g,
                    "\\-"
                ],
                [
                    /^\+ /g,
                    "\\+ "
                ],
                [
                    /^(=+)/g,
                    "\\$1"
                ],
                [
                    /^(#{1,6}) /g,
                    "\\$1 "
                ],
                [
                    /`/g,
                    "\\`"
                ],
                [
                    /^~~~/g,
                    "\\~~~"
                ],
                [
                    /\[/g,
                    "\\["
                ],
                [
                    /\]/g,
                    "\\]"
                ],
                [
                    /^>/g,
                    "\\>"
                ],
                [
                    /_/g,
                    "\\_"
                ],
                [
                    /^(\d+)\. /g,
                    "$1\\. "
                ]
            ];
            e.escapeStr = function(t) {
                return t && a.test(t) ? t.replace(i, function(t) {
                    return o[t];
                }) : t;
            }, e.unescapeStr = function(t) {
                return t = t && u.test(t) ? t.replace(c, function(t) {
                    return n[t];
                }) : t;
            }, e.extraEscape = function(t) {
                return s.reduce(function(t, e) {
                    return t.replace(e[0], e[1]);
                }, t);
            };
        },
        function(t, e, r) {
            "use strict";
            var n = this && this.__extends || function() {
                var t = function(e, r) {
                    return (t = Object.setPrototypeOf || ({
                        __proto__: []
                    }) instanceof Array && function(t, e) {
                        t.__proto__ = e;
                    } || function(t, e) {
                        for(var r in e)Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                    })(e, r);
                };
                return function(e, r) {
                    if ("function" !== typeof r && null !== r) throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");
                    function n() {
                        this.constructor = e;
                    }
                    t(e, r), e.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype, new n);
                };
            }();
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var o = function(t) {
                function e(e, r, n) {
                    return void 0 === r && (r = "a"), t.call(this, e, r, n) || this;
                }
                return n(e, t), e.prototype.beforeMergeSpace = function(t) {
                    var e = this.attrs, r = e.href, n = e.title, o = r || "";
                    return n ? "[".concat(t, "](").concat(o, ' "').concat(n, '")') : "[".concat(t, "](").concat(o, ")");
                }, e.prototype.parseOnlyString = function(e, r, n) {
                    return "tbody" === this.parentTag || "thead" === this.parentTag ? [
                        e,
                        null
                    ] : t.prototype.parseOnlyString.call(this, e, r, n);
                }, e.prototype.exec = function(e, r) {
                    return void 0 === e && (e = ""), void 0 === r && (r = ""), t.prototype.exec.call(this, e, r);
                }, e;
            }(r(0).default);
            e.default = o;
        },
        function(t, e, r) {
            "use strict";
            var n = this && this.__extends || function() {
                var t = function(e, r) {
                    return (t = Object.setPrototypeOf || ({
                        __proto__: []
                    }) instanceof Array && function(t, e) {
                        t.__proto__ = e;
                    } || function(t, e) {
                        for(var r in e)Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                    })(e, r);
                };
                return function(e, r) {
                    if ("function" !== typeof r && null !== r) throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");
                    function n() {
                        this.constructor = e;
                    }
                    t(e, r), e.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype, new n);
                };
            }();
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var o = function(t) {
                function e(e, r, n) {
                    return void 0 === r && (r = "b"), t.call(this, e, r, n) || this;
                }
                return n(e, t), e.prototype.exec = function(e, r) {
                    return t.prototype.exec.call(this, e, r);
                }, e;
            }(r(14).default);
            e.default = o;
        },
        function(t, e, r) {
            "use strict";
            var n = this && this.__extends || function() {
                var t = function(e, r) {
                    return (t = Object.setPrototypeOf || ({
                        __proto__: []
                    }) instanceof Array && function(t, e) {
                        t.__proto__ = e;
                    } || function(t, e) {
                        for(var r in e)Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                    })(e, r);
                };
                return function(e, r) {
                    if ("function" !== typeof r && null !== r) throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");
                    function n() {
                        this.constructor = e;
                    }
                    t(e, r), e.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype, new n);
                };
            }(), o = this && this.__assign || function() {
                return (o = Object.assign || function(t) {
                    for(var e, r = 1, n = arguments.length; r < n; r++)for(var o in e = arguments[r])Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
                    return t;
                }).apply(this, arguments);
            };
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var i = r(7), a = r(0), c = r(1), u = function(t) {
                function e(e, r, n) {
                    void 0 === r && (r = "blockquote");
                    var o = t.call(this, e, r, n) || this;
                    return o.match = o.match || ">", o.fillPerLine = o.fillPerLine.bind(o), o;
                }
                return n(e, t), e.prototype.beforeMergeSpace = function(t) {
                    if ("" === t.trim()) return "";
                    var e = this.match + " " + t;
                    return this.calcLeading ? this.leadingSpace + e : e;
                }, e.prototype.afterMergeSpace = function(t) {
                    for(var e = this, r = t.split("\n"), n = r.length - 1; n >= 0; n--)n < r.length - 1 && ">" === r[n].trim() && ">" === r[n + 1].trim() && r.splice(n, 1);
                    return (r = r.map(function(t) {
                        return "" === t ? "" : e.fillPerLine(t);
                    })).join("\n");
                }, e.prototype.beforeReturn = function(t) {
                    return t.replace("\n\n", "\n");
                }, e.prototype.fillPerLine = function(t) {
                    var e = ">";
                    if (this.calcLeading && (e = this.leadingSpace + ">"), !t.startsWith(e)) {
                        var r = this.match + " " + t;
                        return this.calcLeading ? this.leadingSpace + r : r;
                    }
                    return t;
                }, e.prototype.parseValidSubTag = function(t, e, r) {
                    var n;
                    "blockquote" === e ? n = new ((0, c.getTagConstructor)(e))(t, e, o(o({}, r), {
                        calcLeading: this.calcLeading,
                        match: this.match + ">",
                        noExtraLine: !0
                    })) : n = new ((0, c.getTagConstructor)(e))(t, e, o(o({}, r), {
                        noExtraLine: !0
                    }));
                    var a = n.exec(), u = "";
                    this.calcLeading && (u = this.leadingSpace);
                    var s = (0, i.default)(r.prevTagName) && "br" !== r.prevTagName, p = (0, i.default)(r.nextTagName) && "br" !== r.nextTagName, l = (0, i.default)(e) && "br" !== e;
                    return this.isFirstSubTag ? [
                        a.trimLeft().replace(u, ""),
                        n
                    ] : l ? (a = u + this.match + a, s || (a = "\n" + a), !p && r.nextTagStr && r.nextTagStr.trim() && (a += this.match + "\n"), [
                        a,
                        n
                    ]) : s ? [
                        u + this.match + "\n" + a,
                        n
                    ] : [
                        a,
                        n
                    ];
                }, e.prototype.exec = function(e, r) {
                    return void 0 === e && (e = "\n"), void 0 === r && (r = "\n"), t.prototype.exec.call(this, e, r);
                }, e;
            }(a.default);
            e.default = u;
        },
        function(t, e, r) {
            "use strict";
            var n = this && this.__extends || function() {
                var t = function(e, r) {
                    return (t = Object.setPrototypeOf || ({
                        __proto__: []
                    }) instanceof Array && function(t, e) {
                        t.__proto__ = e;
                    } || function(t, e) {
                        for(var r in e)Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                    })(e, r);
                };
                return function(e, r) {
                    if ("function" !== typeof r && null !== r) throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");
                    function n() {
                        this.constructor = e;
                    }
                    t(e, r), e.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype, new n);
                };
            }();
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var o = r(4), i = r(18), a = function(t) {
                function e(e, r, n) {
                    return void 0 === r && (r = "b"), t.call(this, e, r, n) || this;
                }
                return n(e, t), e.prototype.exec = function(t, e) {
                    return void 0 === e && (e = "\n"), this.inTable ? (0, i.escapeStr)("<br />") : "  " + e;
                }, e;
            }(o.default);
            e.default = a;
        },
        function(t, e, r) {
            "use strict";
            var n = this && this.__extends || function() {
                var t = function(e, r) {
                    return (t = Object.setPrototypeOf || ({
                        __proto__: []
                    }) instanceof Array && function(t, e) {
                        t.__proto__ = e;
                    } || function(t, e) {
                        for(var r in e)Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                    })(e, r);
                };
                return function(e, r) {
                    if ("function" !== typeof r && null !== r) throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");
                    function n() {
                        this.constructor = e;
                    }
                    t(e, r), e.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype, new n);
                };
            }(), o = this && this.__assign || function() {
                return (o = Object.assign || function(t) {
                    for(var e, r = 1, n = arguments.length; r < n; r++)for(var o in e = arguments[r])Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
                    return t;
                }).apply(this, arguments);
            };
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var i = r(0), a = r(1), c = function(t) {
                function e(e, r, n) {
                    void 0 === r && (r = "code");
                    var o = t.call(this, e, r, n) || this;
                    return o.match = null == o.match ? "`" : o.match, o.noWrap = "`" === o.match, o.layer = 1, o;
                }
                return n(e, t), e.prototype.beforeMergeSpace = function(t) {
                    var e, r;
                    return "" !== this.match && "`" !== this.match ? (e = this.match + " ", r = " " + this.match) : (e = this.match, r = this.match), e + t + r;
                }, e.prototype.parseValidSubTag = function(t, e, r) {
                    var n;
                    return "pre" === e ? [
                        (n = new ((0, a.getTagConstructor)(e))(t, e, o(o({}, r), {
                            language: "",
                            match: ""
                        }))).exec("", "\n"),
                        n
                    ] : [
                        (n = new ((0, a.getTagConstructor)(e))(t, e, o(o({}, r), {
                            keepSpace: this.keepSpace,
                            noWrap: this.noWrap
                        }))).exec("", ""),
                        n
                    ];
                }, e.prototype.parseOnlyString = function(t) {
                    if ("" !== this.match && t) {
                        var e = 1;
                        (t.startsWith("`") || t.endsWith("`")) && (e = 2, (t.startsWith("``") || t.endsWith("``")) && (e = 3)), this.match = "`".repeat(e);
                    }
                    return [
                        (0, a.unescapeStr)(t),
                        null
                    ];
                }, e.prototype.slim = function(t) {
                    return this.keepSpace ? t : t.trim();
                }, e.prototype.exec = function(e, r) {
                    return void 0 === e && (e = ""), void 0 === r && (r = ""), t.prototype.exec.call(this, e, r);
                }, e;
            }(i.default);
            e.default = c;
        },
        function(t, e, r) {
            "use strict";
            var n = this && this.__extends || function() {
                var t = function(e, r) {
                    return (t = Object.setPrototypeOf || ({
                        __proto__: []
                    }) instanceof Array && function(t, e) {
                        t.__proto__ = e;
                    } || function(t, e) {
                        for(var r in e)Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                    })(e, r);
                };
                return function(e, r) {
                    if ("function" !== typeof r && null !== r) throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");
                    function n() {
                        this.constructor = e;
                    }
                    t(e, r), e.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype, new n);
                };
            }();
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var o = function(t) {
                function e(e, r) {
                    void 0 === r && (r = "h1");
                    var n = t.call(this, e, r) || this;
                    return n.match = "#", n;
                }
                return n(e, t), e.prototype.exec = function(e, r) {
                    return void 0 === e && (e = "\n"), void 0 === r && (r = "\n"), t.prototype.exec.call(this, e, r);
                }, e;
            }(r(3).default);
            e.default = o;
        },
        function(t, e, r) {
            "use strict";
            var n = this && this.__extends || function() {
                var t = function(e, r) {
                    return (t = Object.setPrototypeOf || ({
                        __proto__: []
                    }) instanceof Array && function(t, e) {
                        t.__proto__ = e;
                    } || function(t, e) {
                        for(var r in e)Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                    })(e, r);
                };
                return function(e, r) {
                    if ("function" !== typeof r && null !== r) throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");
                    function n() {
                        this.constructor = e;
                    }
                    t(e, r), e.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype, new n);
                };
            }();
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var o = function(t) {
                function e(e, r) {
                    void 0 === r && (r = "h2");
                    var n = t.call(this, e, r) || this;
                    return n.match = "##", n;
                }
                return n(e, t), e.prototype.exec = function(e, r) {
                    return void 0 === e && (e = "\n"), void 0 === r && (r = "\n"), t.prototype.exec.call(this, e, r);
                }, e;
            }(r(3).default);
            e.default = o;
        },
        function(t, e, r) {
            "use strict";
            var n = this && this.__extends || function() {
                var t = function(e, r) {
                    return (t = Object.setPrototypeOf || ({
                        __proto__: []
                    }) instanceof Array && function(t, e) {
                        t.__proto__ = e;
                    } || function(t, e) {
                        for(var r in e)Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                    })(e, r);
                };
                return function(e, r) {
                    if ("function" !== typeof r && null !== r) throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");
                    function n() {
                        this.constructor = e;
                    }
                    t(e, r), e.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype, new n);
                };
            }();
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var o = function(t) {
                function e(e, r) {
                    void 0 === r && (r = "h3");
                    var n = t.call(this, e, r) || this;
                    return n.match = "###", n;
                }
                return n(e, t), e.prototype.exec = function(e, r) {
                    return void 0 === e && (e = "\n"), void 0 === r && (r = "\n"), t.prototype.exec.call(this, e, r);
                }, e;
            }(r(3).default);
            e.default = o;
        },
        function(t, e, r) {
            "use strict";
            var n = this && this.__extends || function() {
                var t = function(e, r) {
                    return (t = Object.setPrototypeOf || ({
                        __proto__: []
                    }) instanceof Array && function(t, e) {
                        t.__proto__ = e;
                    } || function(t, e) {
                        for(var r in e)Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                    })(e, r);
                };
                return function(e, r) {
                    if ("function" !== typeof r && null !== r) throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");
                    function n() {
                        this.constructor = e;
                    }
                    t(e, r), e.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype, new n);
                };
            }();
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var o = function(t) {
                function e(e, r) {
                    void 0 === r && (r = "h4");
                    var n = t.call(this, e, r) || this;
                    return n.match = "####", n;
                }
                return n(e, t), e.prototype.exec = function(e, r) {
                    return void 0 === e && (e = "\n"), void 0 === r && (r = "\n"), t.prototype.exec.call(this, e, r);
                }, e;
            }(r(3).default);
            e.default = o;
        },
        function(t, e, r) {
            "use strict";
            var n = this && this.__extends || function() {
                var t = function(e, r) {
                    return (t = Object.setPrototypeOf || ({
                        __proto__: []
                    }) instanceof Array && function(t, e) {
                        t.__proto__ = e;
                    } || function(t, e) {
                        for(var r in e)Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                    })(e, r);
                };
                return function(e, r) {
                    if ("function" !== typeof r && null !== r) throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");
                    function n() {
                        this.constructor = e;
                    }
                    t(e, r), e.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype, new n);
                };
            }();
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var o = function(t) {
                function e(e, r) {
                    void 0 === r && (r = "h5");
                    var n = t.call(this, e, r) || this;
                    return n.match = "#####", n;
                }
                return n(e, t), e.prototype.exec = function(e, r) {
                    return void 0 === e && (e = "\n"), void 0 === r && (r = "\n"), t.prototype.exec.call(this, e, r);
                }, e;
            }(r(3).default);
            e.default = o;
        },
        function(t, e, r) {
            "use strict";
            var n = this && this.__extends || function() {
                var t = function(e, r) {
                    return (t = Object.setPrototypeOf || ({
                        __proto__: []
                    }) instanceof Array && function(t, e) {
                        t.__proto__ = e;
                    } || function(t, e) {
                        for(var r in e)Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                    })(e, r);
                };
                return function(e, r) {
                    if ("function" !== typeof r && null !== r) throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");
                    function n() {
                        this.constructor = e;
                    }
                    t(e, r), e.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype, new n);
                };
            }();
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var o = function(t) {
                function e(e, r) {
                    void 0 === r && (r = "h6");
                    var n = t.call(this, e, r) || this;
                    return n.match = "######", n;
                }
                return n(e, t), e.prototype.exec = function(e, r) {
                    return void 0 === e && (e = "\n"), void 0 === r && (r = "\n"), t.prototype.exec.call(this, e, r);
                }, e;
            }(r(3).default);
            e.default = o;
        },
        function(t, e, r) {
            "use strict";
            var n = this && this.__extends || function() {
                var t = function(e, r) {
                    return (t = Object.setPrototypeOf || ({
                        __proto__: []
                    }) instanceof Array && function(t, e) {
                        t.__proto__ = e;
                    } || function(t, e) {
                        for(var r in e)Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                    })(e, r);
                };
                return function(e, r) {
                    if ("function" !== typeof r && null !== r) throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");
                    function n() {
                        this.constructor = e;
                    }
                    t(e, r), e.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype, new n);
                };
            }();
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var o = function(t) {
                function e(e, r, n) {
                    void 0 === r && (r = "hr");
                    var o = t.call(this, e, r, n) || this;
                    return o.match = "---", o;
                }
                return n(e, t), e.prototype.beforeMergeSpace = function() {
                    return this.leadingSpace + this.match;
                }, e.prototype.beforeReturn = function(t) {
                    return t.replace(/^(?:\n\s*)/, "\n\n").replace(/(?:\n\s*)$/, "\n\n"), t;
                }, e.prototype.exec = function(e, r) {
                    return void 0 === e && (e = "\n"), void 0 === r && (r = "\n"), t.prototype.exec.call(this, e, r);
                }, e;
            }(r(4).default);
            e.default = o;
        },
        function(t, e, r) {
            "use strict";
            var n = this && this.__extends || function() {
                var t = function(e, r) {
                    return (t = Object.setPrototypeOf || ({
                        __proto__: []
                    }) instanceof Array && function(t, e) {
                        t.__proto__ = e;
                    } || function(t, e) {
                        for(var r in e)Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                    })(e, r);
                };
                return function(e, r) {
                    if ("function" !== typeof r && null !== r) throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");
                    function n() {
                        this.constructor = e;
                    }
                    t(e, r), e.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype, new n);
                };
            }();
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var o = function(t) {
                function e(e, r, n) {
                    return void 0 === r && (r = "i"), t.call(this, e, r, n) || this;
                }
                return n(e, t), e.prototype.exec = function(e, r) {
                    return t.prototype.exec.call(this, e, r);
                }, e;
            }(r(16).default);
            e.default = o;
        },
        function(t, e, r) {
            "use strict";
            var n = this && this.__extends || function() {
                var t = function(e, r) {
                    return (t = Object.setPrototypeOf || ({
                        __proto__: []
                    }) instanceof Array && function(t, e) {
                        t.__proto__ = e;
                    } || function(t, e) {
                        for(var r in e)Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                    })(e, r);
                };
                return function(e, r) {
                    if ("function" !== typeof r && null !== r) throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");
                    function n() {
                        this.constructor = e;
                    }
                    t(e, r), e.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype, new n);
                };
            }();
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var o = function(t) {
                function e(e, r, n) {
                    return void 0 === r && (r = "img"), t.call(this, e, r, n) || this;
                }
                return n(e, t), e.prototype.beforeMergeSpace = function() {
                    var t = this.attrs, e = t.src, r = t.alt;
                    return r || (r = ""), e || (e = ""), "![".concat(r, "](").concat(e, ")");
                }, e.prototype.exec = function(e, r) {
                    return void 0 === e && (e = ""), void 0 === r && (r = ""), t.prototype.exec.call(this, e, r);
                }, e;
            }(r(4).default);
            e.default = o;
        },
        function(t, e, r) {
            "use strict";
            var n = this && this.__extends || function() {
                var t = function(e, r) {
                    return (t = Object.setPrototypeOf || ({
                        __proto__: []
                    }) instanceof Array && function(t, e) {
                        t.__proto__ = e;
                    } || function(t, e) {
                        for(var r in e)Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                    })(e, r);
                };
                return function(e, r) {
                    if ("function" !== typeof r && null !== r) throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");
                    function n() {
                        this.constructor = e;
                    }
                    t(e, r), e.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype, new n);
                };
            }();
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var o = function(t) {
                function e(e, r, n) {
                    return void 0 === r && (r = "input"), t.call(this, e, r, n) || this;
                }
                return n(e, t), e.prototype.beforeMergeSpace = function() {
                    var t = this.attrs, e = t.type, r = t.checked;
                    return "li" === this.parentTag && "checkbox" === e ? null != r ? "[x] " : "[ ] " : "";
                }, e.prototype.exec = function(e, r) {
                    return void 0 === e && (e = ""), void 0 === r && (r = ""), t.prototype.exec.call(this, e, r);
                }, e;
            }(r(4).default);
            e.default = o;
        },
        function(t, e, r) {
            "use strict";
            var n = this && this.__extends || function() {
                var t = function(e, r) {
                    return (t = Object.setPrototypeOf || ({
                        __proto__: []
                    }) instanceof Array && function(t, e) {
                        t.__proto__ = e;
                    } || function(t, e) {
                        for(var r in e)Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                    })(e, r);
                };
                return function(e, r) {
                    if ("function" !== typeof r && null !== r) throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");
                    function n() {
                        this.constructor = e;
                    }
                    t(e, r), e.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype, new n);
                };
            }(), o = this && this.__assign || function() {
                return (o = Object.assign || function(t) {
                    for(var e, r = 1, n = arguments.length; r < n; r++)for(var o in e = arguments[r])Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
                    return t;
                }).apply(this, arguments);
            };
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var i = r(0), a = r(1), c = r(7), u = r(6), s = function(t) {
                function e(e, r, n) {
                    void 0 === r && (r = "li");
                    var o = t.call(this, e, r, n) || this;
                    return o.match = o.match || "*", o.extraGap = "", o;
                }
                return n(e, t), e.prototype.beforeMergeSpace = function(t) {
                    return this.extraGap + this.leadingSpace + this.match + " " + t;
                }, e.prototype.__calcNextLeading__ = function() {
                    var t, e, r;
                    return 1 === (null === (t = this.match) || void 0 === t ? void 0 : t.length) ? u.DOUBLE : 2 === (null === (e = this.match) || void 0 === e ? void 0 : e.length) ? u.TRIPLE : 3 === (null === (r = this.match) || void 0 === r ? void 0 : r.length) ? u.DOUBLE : u.TRIPLE + u.DOUBLE;
                }, e.prototype.parseValidSubTag = function(t, e, r) {
                    var n = (0, a.getTagConstructor)(e), i = this.__calcNextLeading__(), c = new n(t, e, o(o({}, r), {
                        calcLeading: !0,
                        leadingSpace: this.leadingSpace + i,
                        layer: this.layer + 1
                    })), u = c.exec();
                    return "p" === e && (this.extraGap = "\n"), this.isFirstSubTag ? [
                        u.trimLeft().replace(this.leadingSpace + i, ""),
                        c
                    ] : [
                        u,
                        c
                    ];
                }, e.prototype.parseOnlyString = function(e, r, n) {
                    var i = !1;
                    (0, c.default)(n.prevTagName) && (i = !0);
                    var a = this.__calcNextLeading__(), u = t.prototype.parseOnlyString.call(this, e, r, o(o({}, n), {
                        calcLeading: i,
                        leadingSpace: this.leadingSpace + a,
                        layer: this.layer + 1
                    })), s = u[0], p = u[1];
                    return this.isFirstSubTag ? [
                        s.replace(this.leadingSpace + a, ""),
                        p
                    ] : [
                        s,
                        p
                    ];
                }, e.prototype.beforeReturn = function(e) {
                    return t.prototype.beforeReturn.call(this, e);
                }, e.prototype.exec = function(e, r) {
                    return void 0 === e && (e = "\n"), void 0 === r && (r = "\n"), t.prototype.exec.call(this, e, r);
                }, e;
            }(i.default);
            e.default = s;
        },
        function(t, e, r) {
            "use strict";
            var n = this && this.__extends || function() {
                var t = function(e, r) {
                    return (t = Object.setPrototypeOf || ({
                        __proto__: []
                    }) instanceof Array && function(t, e) {
                        t.__proto__ = e;
                    } || function(t, e) {
                        for(var r in e)Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                    })(e, r);
                };
                return function(e, r) {
                    if ("function" !== typeof r && null !== r) throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");
                    function n() {
                        this.constructor = e;
                    }
                    t(e, r), e.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype, new n);
                };
            }(), o = this && this.__assign || function() {
                return (o = Object.assign || function(t) {
                    for(var e, r = 1, n = arguments.length; r < n; r++)for(var o in e = arguments[r])Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
                    return t;
                }).apply(this, arguments);
            };
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var i = r(0), a = r(5), c = r(1), u = r(2), s = function(t) {
                function e(e, r, n) {
                    void 0 === r && (r = "ol");
                    var o, i = this;
                    i = t.call(this, e, r, n) || this;
                    var a = parseInt(null === (o = null === i || void 0 === i ? void 0 : i.attrs) || void 0 === o ? void 0 : o.start, 10);
                    return i.count = isNaN(a) ? 1 : a, i;
                }
                return n(e, t), e.prototype.__isValidSubTag__ = function(t) {
                    if (!t) return !1;
                    var e = u.default.get().aliasTags, r = (0, c.getTagConstructor)(t);
                    return "li" === t || "li" == (null === e || void 0 === e ? void 0 : e[t]) || r === a.default;
                }, e.prototype.getValidSubTagName = function(t) {
                    return t && this.__isValidSubTag__(t) ? t : null;
                }, e.prototype.parseValidSubTag = function(t, e, r) {
                    var n = (0, c.getTagConstructor)(e);
                    if (this.__isValidSubTag__(e)) {
                        var i = this.count + ".", a = new n(t, e, o(o({}, r), {
                            calcLeading: !0,
                            leadingSpace: this.leadingSpace,
                            layer: this.layer,
                            match: i
                        }));
                        return this.count++, [
                            a.exec("", "\n"),
                            a
                        ];
                    }
                    return [
                        "",
                        null
                    ];
                }, e.prototype.parseOnlyString = function() {
                    return [
                        "",
                        null
                    ];
                }, e.prototype.exec = function(e, r) {
                    return void 0 === e && (e = "\n"), void 0 === r && (r = "\n"), t.prototype.exec.call(this, e, r);
                }, e;
            }(i.default);
            e.default = s;
        },
        function(t, e, r) {
            "use strict";
            var n = this && this.__extends || function() {
                var t = function(e, r) {
                    return (t = Object.setPrototypeOf || ({
                        __proto__: []
                    }) instanceof Array && function(t, e) {
                        t.__proto__ = e;
                    } || function(t, e) {
                        for(var r in e)Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                    })(e, r);
                };
                return function(e, r) {
                    if ("function" !== typeof r && null !== r) throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");
                    function n() {
                        this.constructor = e;
                    }
                    t(e, r), e.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype, new n);
                };
            }();
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var o = function(t) {
                function e(e, r, n) {
                    return void 0 === r && (r = "p"), t.call(this, e, r, n) || this;
                }
                return n(e, t), e.prototype.beforeMergeSpace = function(t) {
                    return this.calcLeading ? this.leadingSpace + t : t;
                }, e.prototype.exec = function(e, r) {
                    return void 0 === e && (e = "\n"), void 0 === r && (r = "\n"), this.prevTagName || !this.prevTagStr || this.prevTagStr.endsWith("\n") || (e = "\n\n"), this.nextTagName || !this.nextTagStr || this.nextTagStr.startsWith("\n") || (r = "\n\n"), this.inTable && (e = "", r = ""), t.prototype.exec.call(this, e, r);
                }, e;
            }(r(0).default);
            e.default = o;
        },
        function(t, e, r) {
            "use strict";
            var n = this && this.__extends || function() {
                var t = function(e, r) {
                    return (t = Object.setPrototypeOf || ({
                        __proto__: []
                    }) instanceof Array && function(t, e) {
                        t.__proto__ = e;
                    } || function(t, e) {
                        for(var r in e)Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                    })(e, r);
                };
                return function(e, r) {
                    if ("function" !== typeof r && null !== r) throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");
                    function n() {
                        this.constructor = e;
                    }
                    t(e, r), e.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype, new n);
                };
            }(), o = this && this.__assign || function() {
                return (o = Object.assign || function(t) {
                    for(var e, r = 1, n = arguments.length; r < n; r++)for(var o in e = arguments[r])Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
                    return t;
                }).apply(this, arguments);
            };
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var i = r(0), a = r(8), c = r(1), u = r(6), s = function(t) {
                function e(e, r, n) {
                    void 0 === r && (r = "pre");
                    var o = t.call(this, e, r, n) || this;
                    return o.indentSpace = u.DOUBLE + u.DOUBLE, o.isIndent = o.innerHTML.includes("```"), o.match = o.isIndent ? "" : "```", o.language = o.language || (0, c.getLanguage)(e), o.keepSpace = !0, o;
                }
                return n(e, t), e.prototype.beforeMergeSpace = function(t) {
                    var e = this.isIndent || "code" === this.parentTag ? "" : this.match + this.language + "\n", r = "";
                    return t.endsWith("\n") || (r = "\n"), e + t + (this.isIndent || "code" === this.parentTag ? "" : r + this.match);
                }, e.prototype.fillPerLine = function(t) {
                    var e = "";
                    return this.calcLeading && (e = this.leadingSpace), this.isIndent ? e + this.indentSpace + t : e + t;
                }, e.prototype.afterMergeSpace = function(t) {
                    var e = this, r = t.split("\n");
                    return (r = r.map(function(t) {
                        return "" === t ? "" : e.fillPerLine(t);
                    })).join("\n");
                }, e.prototype.parseValidSubTag = function(t, e, r) {
                    if ("code" === e) {
                        var n = new ((0, c.getTagConstructor)(e))(t, e, o(o({}, r), {
                            match: "",
                            language: this.language,
                            keepSpace: !0
                        }));
                        return [
                            n.exec("", ""),
                            n
                        ];
                    }
                    var i = void 0;
                    return [
                        (i = (0, c.isSelfClosing)(e) ? new a.__EmptySelfClose__(t, e) : new a.__Empty__(t, e, o(o({}, r), {
                            keepSpace: !0
                        }))).exec(),
                        i
                    ];
                }, e.prototype.parseOnlyString = function(t) {
                    return [
                        t,
                        null
                    ];
                }, e.prototype.slim = function(t) {
                    return t;
                }, e.prototype.exec = function(e, r) {
                    return void 0 === e && (e = "\n"), void 0 === r && (r = "\n"), t.prototype.exec.call(this, e, r);
                }, e;
            }(i.default);
            e.default = s;
        },
        function(t, e, r) {
            "use strict";
            var n = this && this.__extends || function() {
                var t = function(e, r) {
                    return (t = Object.setPrototypeOf || ({
                        __proto__: []
                    }) instanceof Array && function(t, e) {
                        t.__proto__ = e;
                    } || function(t, e) {
                        for(var r in e)Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                    })(e, r);
                };
                return function(e, r) {
                    if ("function" !== typeof r && null !== r) throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");
                    function n() {
                        this.constructor = e;
                    }
                    t(e, r), e.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype, new n);
                };
            }();
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var o = function(t) {
                function e(e, r) {
                    return void 0 === r && (r = "s"), t.call(this, e, r) || this;
                }
                return n(e, t), e.prototype.exec = function(e, r) {
                    return t.prototype.exec.call(this, e, r);
                }, e;
            }(r(15).default);
            e.default = o;
        },
        function(t, e, r) {
            "use strict";
            var n = this && this.__extends || function() {
                var t = function(e, r) {
                    return (t = Object.setPrototypeOf || ({
                        __proto__: []
                    }) instanceof Array && function(t, e) {
                        t.__proto__ = e;
                    } || function(t, e) {
                        for(var r in e)Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                    })(e, r);
                };
                return function(e, r) {
                    if ("function" !== typeof r && null !== r) throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");
                    function n() {
                        this.constructor = e;
                    }
                    t(e, r), e.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype, new n);
                };
            }();
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var o = function(t) {
                function e(e, r, n) {
                    return void 0 === r && (r = "span"), t.call(this, e, r, n) || this;
                }
                return n(e, t), e.prototype.exec = function(e, r) {
                    return void 0 === e && (e = ""), void 0 === r && (r = ""), t.prototype.exec.call(this, e, r);
                }, e;
            }(r(0).default);
            e.default = o;
        },
        function(t, e, r) {
            "use strict";
            var n = this && this.__extends || function() {
                var t = function(e, r) {
                    return (t = Object.setPrototypeOf || ({
                        __proto__: []
                    }) instanceof Array && function(t, e) {
                        t.__proto__ = e;
                    } || function(t, e) {
                        for(var r in e)Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                    })(e, r);
                };
                return function(e, r) {
                    if ("function" !== typeof r && null !== r) throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");
                    function n() {
                        this.constructor = e;
                    }
                    t(e, r), e.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype, new n);
                };
            }(), o = this && this.__assign || function() {
                return (o = Object.assign || function(t) {
                    for(var e, r = 1, n = arguments.length; r < n; r++)for(var o in e = arguments[r])Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
                    return t;
                }).apply(this, arguments);
            };
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var i = r(0), a = r(1);
            var c = function(t) {
                function e(e, r, n) {
                    void 0 === r && (r = "table");
                    var o = t.call(this, e, r, n) || this;
                    return o.exist_thead = !1, o.exist_tbody = !1, o.empty_tbody = !0, o.tableColumnCount = function(t) {
                        for(var e = "", r = 0; r < t.length && !e.endsWith("</tr>"); r++)e += t[r];
                        return Math.max(e.split("</td>").length - 1, e.split("</th>").length - 1);
                    }(o.innerHTML), o;
                }
                return n(e, t), e.prototype.parseValidSubTag = function(t, e, r) {
                    "thead" === e && (this.exist_thead = !0), "tbody" === e && (this.exist_tbody = !0, this.empty_tbody = !1), "tr" === e && (this.empty_tbody = !1);
                    var n = new ((0, a.getTagConstructor)(e))(t, e, o(o({}, r), {
                        tableColumnCount: this.tableColumnCount,
                        inTable: !0
                    }));
                    return [
                        n.exec("", "\n"),
                        n
                    ];
                }, e.prototype.parseOnlyString = function() {
                    return [
                        "",
                        null
                    ];
                }, e.prototype.beforeReturn = function(t) {
                    if (!this.exist_thead && !this.exist_tbody && this.empty_tbody) return "";
                    if (0 === this.tableColumnCount) return "";
                    if (!this.exist_tbody) {
                        for(var e = (0, a.getTableAlign)(this.innerHTML, this.tableColumnCount), r = this.leadingSpace + "|", n = 0; n < e.length; n++)r += e[n];
                        t = this.empty_tbody ? t + r + "\n" : r + "" + t;
                    }
                    return this.exist_thead || (t = "\n" + this.leadingSpace + "|".repeat(this.tableColumnCount + 1) + (t.startsWith("\n") ? "" : "\n") + t), t;
                }, e.prototype.exec = function(e, r) {
                    return void 0 === e && (e = "\n"), void 0 === r && (r = "\n"), t.prototype.exec.call(this, e, r);
                }, e;
            }(i.default);
            e.default = c;
        },
        function(t, e, r) {
            "use strict";
            var n = this && this.__extends || function() {
                var t = function(e, r) {
                    return (t = Object.setPrototypeOf || ({
                        __proto__: []
                    }) instanceof Array && function(t, e) {
                        t.__proto__ = e;
                    } || function(t, e) {
                        for(var r in e)Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                    })(e, r);
                };
                return function(e, r) {
                    if ("function" !== typeof r && null !== r) throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");
                    function n() {
                        this.constructor = e;
                    }
                    t(e, r), e.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype, new n);
                };
            }();
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var o = r(0), i = r(1), a = function(t) {
                function e(e, r, n) {
                    return void 0 === r && (r = "tbody"), t.call(this, e, r, n) || this;
                }
                return n(e, t), e.prototype.beforeMergeSpace = function(t) {
                    for(var e = (0, i.getTableAlign)(this.innerHTML, this.tableColumnCount), r = this.leadingSpace + "|", n = 0; n < e.length; n++)r += e[n];
                    return r + "\n" + t;
                }, e.prototype.parseOnlyString = function() {
                    return [
                        "",
                        null
                    ];
                }, e.prototype.exec = function(e, r) {
                    return void 0 === e && (e = ""), void 0 === r && (r = ""), t.prototype.exec.call(this, e, r);
                }, e;
            }(o.default);
            e.default = a;
        },
        function(t, e, r) {
            "use strict";
            var n = this && this.__extends || function() {
                var t = function(e, r) {
                    return (t = Object.setPrototypeOf || ({
                        __proto__: []
                    }) instanceof Array && function(t, e) {
                        t.__proto__ = e;
                    } || function(t, e) {
                        for(var r in e)Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                    })(e, r);
                };
                return function(e, r) {
                    if ("function" !== typeof r && null !== r) throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");
                    function n() {
                        this.constructor = e;
                    }
                    t(e, r), e.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype, new n);
                };
            }();
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var o = function(t) {
                function e(e, r, n) {
                    return void 0 === r && (r = "td"), t.call(this, e, r, n) || this;
                }
                return n(e, t), e.prototype.parseValidSubTag = function(e, r, n) {
                    return "ul" === r || "ol" === r || "table" === r || "pre" === r ? [
                        e.replace(/([\n\r])/g, ""),
                        null
                    ] : t.prototype.parseValidSubTag.call(this, e, r, n);
                }, e.prototype.exec = function(e, r) {
                    return void 0 === e && (e = ""), void 0 === r && (r = ""), t.prototype.exec.call(this, e, r);
                }, e;
            }(r(17).default);
            e.default = o;
        },
        function(t, e, r) {
            "use strict";
            var n = this && this.__extends || function() {
                var t = function(e, r) {
                    return (t = Object.setPrototypeOf || ({
                        __proto__: []
                    }) instanceof Array && function(t, e) {
                        t.__proto__ = e;
                    } || function(t, e) {
                        for(var r in e)Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                    })(e, r);
                };
                return function(e, r) {
                    if ("function" !== typeof r && null !== r) throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");
                    function n() {
                        this.constructor = e;
                    }
                    t(e, r), e.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype, new n);
                };
            }();
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var o = function(t) {
                function e(e, r, n) {
                    return void 0 === r && (r = "thead"), t.call(this, e, r, n) || this;
                }
                return n(e, t), e.prototype.exec = function(e, r) {
                    return void 0 === e && (e = ""), void 0 === r && (r = ""), t.prototype.exec.call(this, e, r);
                }, e;
            }(r(0).default);
            e.default = o;
        },
        function(t, e, r) {
            "use strict";
            var n = this && this.__extends || function() {
                var t = function(e, r) {
                    return (t = Object.setPrototypeOf || ({
                        __proto__: []
                    }) instanceof Array && function(t, e) {
                        t.__proto__ = e;
                    } || function(t, e) {
                        for(var r in e)Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                    })(e, r);
                };
                return function(e, r) {
                    if ("function" !== typeof r && null !== r) throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");
                    function n() {
                        this.constructor = e;
                    }
                    t(e, r), e.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype, new n);
                };
            }();
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var o = r(0), i = r(5), a = r(1), c = r(2), u = function(t) {
                function e(e, r, n) {
                    return void 0 === r && (r = "tr"), t.call(this, e, r, n) || this;
                }
                return n(e, t), e.prototype.beforeMergeSpace = function(t) {
                    return this.leadingSpace + "|" + t;
                }, e.prototype.parseValidSubTag = function(t, e, r) {
                    var n = c.default.get().aliasTags, o = (0, a.getTagConstructor)(e);
                    if ("td" !== e && "th" !== e && "td" !== (null === n || void 0 === n ? void 0 : n[e]) && "th" !== (null === n || void 0 === n ? void 0 : n[e]) && o !== i.default) return "Should not have tags except <td> or <th> inside <tr>, current tag is ".concat(e, " have been ignore."), [
                        "",
                        null
                    ];
                    var u = new o(t, e, r);
                    return [
                        u.exec("", ""),
                        u
                    ];
                }, e.prototype.parseOnlyString = function() {
                    return [
                        "",
                        null
                    ];
                }, e.prototype.exec = function(e, r) {
                    return void 0 === e && (e = ""), void 0 === r && (r = "\n"), t.prototype.exec.call(this, e, r);
                }, e;
            }(o.default);
            e.default = u;
        },
        function(t, e, r) {
            "use strict";
            var n = this && this.__extends || function() {
                var t = function(e, r) {
                    return (t = Object.setPrototypeOf || ({
                        __proto__: []
                    }) instanceof Array && function(t, e) {
                        t.__proto__ = e;
                    } || function(t, e) {
                        for(var r in e)Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                    })(e, r);
                };
                return function(e, r) {
                    if ("function" !== typeof r && null !== r) throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");
                    function n() {
                        this.constructor = e;
                    }
                    t(e, r), e.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype, new n);
                };
            }(), o = this && this.__assign || function() {
                return (o = Object.assign || function(t) {
                    for(var e, r = 1, n = arguments.length; r < n; r++)for(var o in e = arguments[r])Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
                    return t;
                }).apply(this, arguments);
            };
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var i = r(0), a = r(5), c = r(1), u = r(2).default.get().aliasTags, s = function(t) {
                function e(e, r, n) {
                    return void 0 === r && (r = "ul"), t.call(this, e, r, n) || this;
                }
                return n(e, t), e.prototype.__isValidSubTag__ = function(t) {
                    if (!t) return !1;
                    var e = (0, c.getTagConstructor)(t);
                    return "li" === t || "li" == (null === u || void 0 === u ? void 0 : u[t]) || e === a.default;
                }, e.prototype.getValidSubTagName = function(t) {
                    return t && this.__isValidSubTag__(t) ? t : null;
                }, e.prototype.parseValidSubTag = function(t, e, r) {
                    var n = (0, c.getTagConstructor)(e);
                    if (this.__isValidSubTag__(e)) {
                        var i = new n(t, e, o(o({}, r), {
                            calcLeading: !0,
                            leadingSpace: this.leadingSpace,
                            layer: this.layer,
                            match: "*"
                        }));
                        return [
                            i.exec("", "\n"),
                            i
                        ];
                    }
                    return [
                        "",
                        null
                    ];
                }, e.prototype.parseOnlyString = function() {
                    return [
                        "",
                        null
                    ];
                }, e.prototype.exec = function(e, r) {
                    return void 0 === e && (e = "\n"), void 0 === r && (r = "\n"), t.prototype.exec.call(this, e, r);
                }, e;
            }(i.default);
            e.default = s;
        },
        function(t, e, r) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var n = r(1), o = r(2), i = r(6);
            e.default = function(t, e, r) {
                void 0 === r && (r = !1), o.default.reset(), o.default.set(e, r), t = (t = (t = (0, n.clearComment)(t)).trim()).replace(/(\r\n)/g, "").replace(/&nbsp;/g, " "), t = "<".concat(i.DOUBLE, "skip").concat(i.DOUBLE, ">").concat(t, "</").concat(i.DOUBLE, "skip").concat(i.DOUBLE, ">");
                var a = "", c = "".concat(i.DOUBLE, "skip").concat(i.DOUBLE), u = t;
                return a += new ((0, n.getTagConstructor)(c))(u, c, {
                    parentTag: null,
                    prevTagName: null,
                    prevTagStr: a
                }).exec(), function(t) {
                    return t = (t = (t = t.replace(/^\s+/, "")).replace(/\s+$/, "")).replace(/\u2608/g, " ");
                }((0, n.unescapeStr)(a));
            };
        },
        function(t, e, r) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var n = r(11);
            function o(t, e) {
                for(var r = ""; e < t.length && /[a-zA-Z0-9!\-_]/.test(t[e]);)r += t[e++];
                return r.toLowerCase();
            }
            e.default = function(t) {
                var e = 0;
                return function() {
                    var r = "", i = null, a = 0, c = null, u = !1;
                    if (e >= t.length) return [
                        i,
                        r
                    ];
                    for(var s = e; s < t.length; s++){
                        if ("<" === t[s] && "/" !== t[s + 1]) {
                            if ("" !== r && null == i && !u) return e = s, [
                                i,
                                r
                            ];
                            var p = o(t, s + 1);
                            null == i && (i = p), i === p && a++, (0, n.default)(i) && (0 === --a && (u = !0), a < 0 && "Tag ".concat(i, " is abnormal"));
                        } else if ("<" === t[s] && "/" === t[s + 1]) {
                            if (null == i) {
                                "Tag is not integrity, current tagStr is ".concat(t.slice(e));
                                for(var l = s; l < t.length && ">" !== t[l];)l++;
                                s = l;
                                continue;
                            }
                            i === (c = o(t, s + 2)) && a--, a <= 0 && (u = !0);
                        }
                        if (r += t[s], ">" === t[s] && u) return e = s + 1, [
                            i,
                            r
                        ];
                        s === t.length - 1 && i !== c && (null != c && null != i && (r = r.replace("<".concat(i, ">"), "").replace("</".concat(c, ">"), "")), i = null);
                    }
                    return e = t.length, [
                        i,
                        r
                    ];
                };
            };
        },
        function(t, e, r) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var n = r(2), o = r(6), i = r(11), a = r(49);
            e.default = function t(e) {
                var c, u = n.default.get(), s = u.skipTags, p = u.emptyTags, l = u.ignoreTags, f = u.aliasTags, h = u.renderCustomTags, d = (0, i.default)(e);
                if ((null === s || void 0 === s ? void 0 : s.includes(e)) || e === "".concat(o.DOUBLE, "skip").concat(o.DOUBLE)) {
                    var _ = r(9);
                    return d ? _.__SkipSelfClose__ : _.__Skip__;
                }
                if (null === p || void 0 === p ? void 0 : p.includes(e)) {
                    var y = r(8);
                    return d ? y.__EmptySelfClose__ : y.__Empty__;
                }
                if (null === l || void 0 === l ? void 0 : l.includes(e)) return r(5).default;
                if (null != (null === f || void 0 === f ? void 0 : f[e])) return t(f[e]);
                var v = e.toLowerCase();
                if (!0 !== h && !(0, a.default)(v)) {
                    if (!1 === h || "SKIP" === h) return _ = r(9), d ? _.__SkipSelfClose__ : _.__Skip__;
                    if ("EMPTY" === h) return y = r(8), d ? y.__EmptySelfClose__ : y.__Empty__;
                    if ("IGNORE" === h) return r(5).default;
                }
                try {
                    c = r(50)("./".concat(e)).default;
                } catch (g) {
                    c = d ? r(10).__NoMatchSelfClose__ : r(10).__NoMatch__;
                }
                return c;
            };
        },
        function(t, e, r) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var n = [
                "!doctype",
                "a",
                "abbr",
                "acronym",
                "address",
                "applet",
                "area",
                "article",
                "aside",
                "audio",
                "b",
                "base",
                "basefont",
                "bdi",
                "bdo",
                "bgsound",
                "big",
                "blink",
                "blockquote",
                "body",
                "br",
                "button",
                "canvas",
                "caption",
                "center",
                "circle",
                "cite",
                "clipPath",
                "code",
                "col",
                "colgroup",
                "command",
                "content",
                "data",
                "datalist",
                "dd",
                "defs",
                "del",
                "details",
                "dfn",
                "dialog",
                "dir",
                "div",
                "dl",
                "dt",
                "element",
                "ellipse",
                "em",
                "embed",
                "fieldset",
                "figcaption",
                "figure",
                "font",
                "footer",
                "foreignObject",
                "form",
                "frame",
                "frameset",
                "g",
                "h1",
                "h2",
                "h3",
                "h4",
                "h5",
                "h6",
                "head",
                "header",
                "hgroup",
                "hr",
                "html",
                "i",
                "iframe",
                "image",
                "img",
                "input",
                "ins",
                "isindex",
                "kbd",
                "keygen",
                "label",
                "legend",
                "li",
                "line",
                "linearGradient",
                "link",
                "listing",
                "main",
                "map",
                "mark",
                "marquee",
                "mask",
                "math",
                "menu",
                "menuitem",
                "meta",
                "meter",
                "multicol",
                "nav",
                "nextid",
                "nobr",
                "noembed",
                "noframes",
                "noscript",
                "object",
                "ol",
                "optgroup",
                "option",
                "output",
                "p",
                "param",
                "path",
                "pattern",
                "picture",
                "plaintext",
                "polygon",
                "polyline",
                "pre",
                "progress",
                "q",
                "radialGradient",
                "rb",
                "rbc",
                "rect",
                "rp",
                "rt",
                "rtc",
                "ruby",
                "s",
                "samp",
                "script",
                "section",
                "select",
                "shadow",
                "slot",
                "small",
                "source",
                "spacer",
                "span",
                "stop",
                "strike",
                "strong",
                "style",
                "sub",
                "summary",
                "sup",
                "svg",
                "table",
                "tbody",
                "td",
                "template",
                "text",
                "textarea",
                "tfoot",
                "th",
                "thead",
                "time",
                "title",
                "tr",
                "track",
                "tspan",
                "tt",
                "u",
                "ul",
                "var",
                "video",
                "wbr",
                "xmp"
            ];
            e.default = function(t) {
                return "string" === typeof t && n.includes(t.toLowerCase());
            };
        },
        function(t, e, r) {
            var n = {
                "./__Heading__": 3,
                "./__Heading__.ts": 3,
                "./__empty__": 8,
                "./__empty__.ts": 8,
                "./__ignore__": 5,
                "./__ignore__.ts": 5,
                "./__nomatch__": 10,
                "./__nomatch__.ts": 10,
                "./__rawString__": 12,
                "./__rawString__.ts": 12,
                "./__skip__": 9,
                "./__skip__.ts": 9,
                "./a": 19,
                "./a.ts": 19,
                "./b": 20,
                "./b.ts": 20,
                "./blockquote": 21,
                "./blockquote.ts": 21,
                "./br": 22,
                "./br.ts": 22,
                "./code": 23,
                "./code.ts": 23,
                "./del": 15,
                "./del.ts": 15,
                "./em": 16,
                "./em.ts": 16,
                "./h1": 24,
                "./h1.ts": 24,
                "./h2": 25,
                "./h2.ts": 25,
                "./h3": 26,
                "./h3.ts": 26,
                "./h4": 27,
                "./h4.ts": 27,
                "./h5": 28,
                "./h5.ts": 28,
                "./h6": 29,
                "./h6.ts": 29,
                "./hr": 30,
                "./hr.ts": 30,
                "./i": 31,
                "./i.ts": 31,
                "./img": 32,
                "./img.ts": 32,
                "./input": 33,
                "./input.ts": 33,
                "./li": 34,
                "./li.ts": 34,
                "./ol": 35,
                "./ol.ts": 35,
                "./p": 36,
                "./p.ts": 36,
                "./pre": 37,
                "./pre.ts": 37,
                "./s": 38,
                "./s.ts": 38,
                "./span": 39,
                "./span.ts": 39,
                "./strong": 14,
                "./strong.ts": 14,
                "./table": 40,
                "./table.ts": 40,
                "./tbody": 41,
                "./tbody.ts": 41,
                "./td": 42,
                "./td.ts": 42,
                "./th": 17,
                "./th.ts": 17,
                "./thead": 43,
                "./thead.ts": 43,
                "./tr": 44,
                "./tr.ts": 44,
                "./ul": 45,
                "./ul.ts": 45
            };
            function o(t) {
                var e = i(t);
                return r(e);
            }
            function i(t) {
                if (!r.o(n, t)) {
                    var e = new Error("Cannot find module '" + t + "'");
                    throw e.code = "MODULE_NOT_FOUND", e;
                }
                return n[t];
            }
            o.keys = function() {
                return Object.keys(n);
            }, o.resolve = i, t.exports = o, o.id = 50;
        },
        function(t, e, r) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = function(t) {
                for(var e = {}, r = !1, n = "", o = "", i = null, a = 0; a <= t.length; a++){
                    if (a === t.length || /\s/.test(t[a])) {
                        if (a === t.length || !r) {
                            var c = n.trim();
                            "/" === c[c.length - 1] && (c = c.slice(0, c.length - 1)), c && (e[c] = o.trim()), n = "", o = "";
                        }
                    } else {
                        if (/['"]/.test(t[a]) && (!i || t[a] === i)) {
                            (r = !r) && (i = t[a]);
                            continue;
                        }
                        if ("=" === t[a] && !r) continue;
                    }
                    if (a === t.length) break;
                    r ? o += t[a] : n += t[a];
                }
                return e;
            };
        },
        function(t, e, r) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var n = "javascript";
            e.default = function(t) {
                var e = t.match(/<.*?class=".*?language-([^\s"]*)?.*".*>/);
                return e ? e[1] || "" : t.match(/<span.*?hljs-(comment|keyword|number|string|literal|built_in|function|title|bullet).*?<\/span>/) ? n : "";
            };
        },
        function(t, e, r) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = function(t) {
                return t.replace(/<!--(?:[\s\S]*?)-->/g, "");
            };
        },
        function(t, e, r) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var n = r(13), o = {
                b: !0,
                a: !0,
                del: !0,
                em: !0,
                i: !0,
                s: !0,
                span: !0,
                strong: !0
            };
            e.default = function(t) {
                if (null === t) return !0;
                if (!t) return !1;
                var e = (0, n.default)(t);
                return !!e && !!o[e];
            };
        },
        function(t, e, r) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = function(t, e) {
                var r = {
                    _default_: "---|",
                    center: ":---:|",
                    left: ":---|",
                    right: "---:|",
                    start: ":---|",
                    end: "---:|"
                }, n = Array(e).fill(r._default_), o = t.match(/<(td|th)(.*?)>/g);
                return o ? n = (n = o.slice(0, e)).map(function(t) {
                    var e = t.match(/align\s*=\s*['"]\s*(center|left|right|start|end)/), n = t.match(/text-align\s*:\s*(center|left|right|start|end)/);
                    return e || n ? e && !n ? r[e[1]] || r._default_ : n ? r[n[1]] || r._default_ : void 0 : r._default_;
                }) : n;
            };
        }
    ]).default;
});
}),
"[project]/learn-next/final/node_modules/date-fns/locale/en-US/_lib/formatDistance.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/learn-next/final/node_modules/date-fns/locale/_lib/buildFormatLongFn.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/learn-next/final/node_modules/date-fns/locale/en-US/_lib/formatLong.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "formatLong",
    ()=>formatLong
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$date$2d$fns$2f$locale$2f$_lib$2f$buildFormatLongFn$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/learn-next/final/node_modules/date-fns/locale/_lib/buildFormatLongFn.js [app-ssr] (ecmascript)");
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
    date: (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$date$2d$fns$2f$locale$2f$_lib$2f$buildFormatLongFn$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["buildFormatLongFn"])({
        formats: dateFormats,
        defaultWidth: "full"
    }),
    time: (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$date$2d$fns$2f$locale$2f$_lib$2f$buildFormatLongFn$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["buildFormatLongFn"])({
        formats: timeFormats,
        defaultWidth: "full"
    }),
    dateTime: (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$date$2d$fns$2f$locale$2f$_lib$2f$buildFormatLongFn$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["buildFormatLongFn"])({
        formats: dateTimeFormats,
        defaultWidth: "full"
    })
};
}),
"[project]/learn-next/final/node_modules/date-fns/locale/en-US/_lib/formatRelative.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/learn-next/final/node_modules/date-fns/locale/_lib/buildLocalizeFn.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/learn-next/final/node_modules/date-fns/locale/en-US/_lib/localize.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "localize",
    ()=>localize
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$date$2d$fns$2f$locale$2f$_lib$2f$buildLocalizeFn$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/learn-next/final/node_modules/date-fns/locale/_lib/buildLocalizeFn.js [app-ssr] (ecmascript)");
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
    era: (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$date$2d$fns$2f$locale$2f$_lib$2f$buildLocalizeFn$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["buildLocalizeFn"])({
        values: eraValues,
        defaultWidth: "wide"
    }),
    quarter: (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$date$2d$fns$2f$locale$2f$_lib$2f$buildLocalizeFn$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["buildLocalizeFn"])({
        values: quarterValues,
        defaultWidth: "wide",
        argumentCallback: (quarter)=>quarter - 1
    }),
    month: (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$date$2d$fns$2f$locale$2f$_lib$2f$buildLocalizeFn$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["buildLocalizeFn"])({
        values: monthValues,
        defaultWidth: "wide"
    }),
    day: (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$date$2d$fns$2f$locale$2f$_lib$2f$buildLocalizeFn$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["buildLocalizeFn"])({
        values: dayValues,
        defaultWidth: "wide"
    }),
    dayPeriod: (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$date$2d$fns$2f$locale$2f$_lib$2f$buildLocalizeFn$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["buildLocalizeFn"])({
        values: dayPeriodValues,
        defaultWidth: "wide",
        formattingValues: formattingDayPeriodValues,
        defaultFormattingWidth: "wide"
    })
};
}),
"[project]/learn-next/final/node_modules/date-fns/locale/_lib/buildMatchFn.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/learn-next/final/node_modules/date-fns/locale/_lib/buildMatchPatternFn.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/learn-next/final/node_modules/date-fns/locale/en-US/_lib/match.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "match",
    ()=>match
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$date$2d$fns$2f$locale$2f$_lib$2f$buildMatchFn$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/learn-next/final/node_modules/date-fns/locale/_lib/buildMatchFn.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$date$2d$fns$2f$locale$2f$_lib$2f$buildMatchPatternFn$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/learn-next/final/node_modules/date-fns/locale/_lib/buildMatchPatternFn.js [app-ssr] (ecmascript)");
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
    ordinalNumber: (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$date$2d$fns$2f$locale$2f$_lib$2f$buildMatchPatternFn$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["buildMatchPatternFn"])({
        matchPattern: matchOrdinalNumberPattern,
        parsePattern: parseOrdinalNumberPattern,
        valueCallback: (value)=>parseInt(value, 10)
    }),
    era: (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$date$2d$fns$2f$locale$2f$_lib$2f$buildMatchFn$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["buildMatchFn"])({
        matchPatterns: matchEraPatterns,
        defaultMatchWidth: "wide",
        parsePatterns: parseEraPatterns,
        defaultParseWidth: "any"
    }),
    quarter: (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$date$2d$fns$2f$locale$2f$_lib$2f$buildMatchFn$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["buildMatchFn"])({
        matchPatterns: matchQuarterPatterns,
        defaultMatchWidth: "wide",
        parsePatterns: parseQuarterPatterns,
        defaultParseWidth: "any",
        valueCallback: (index)=>index + 1
    }),
    month: (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$date$2d$fns$2f$locale$2f$_lib$2f$buildMatchFn$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["buildMatchFn"])({
        matchPatterns: matchMonthPatterns,
        defaultMatchWidth: "wide",
        parsePatterns: parseMonthPatterns,
        defaultParseWidth: "any"
    }),
    day: (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$date$2d$fns$2f$locale$2f$_lib$2f$buildMatchFn$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["buildMatchFn"])({
        matchPatterns: matchDayPatterns,
        defaultMatchWidth: "wide",
        parsePatterns: parseDayPatterns,
        defaultParseWidth: "any"
    }),
    dayPeriod: (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$date$2d$fns$2f$locale$2f$_lib$2f$buildMatchFn$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["buildMatchFn"])({
        matchPatterns: matchDayPeriodPatterns,
        defaultMatchWidth: "any",
        parsePatterns: parseDayPeriodPatterns,
        defaultParseWidth: "any"
    })
};
}),
"[project]/learn-next/final/node_modules/date-fns/locale/en-US.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "enUS",
    ()=>enUS
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$date$2d$fns$2f$locale$2f$en$2d$US$2f$_lib$2f$formatDistance$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/learn-next/final/node_modules/date-fns/locale/en-US/_lib/formatDistance.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$date$2d$fns$2f$locale$2f$en$2d$US$2f$_lib$2f$formatLong$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/learn-next/final/node_modules/date-fns/locale/en-US/_lib/formatLong.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$date$2d$fns$2f$locale$2f$en$2d$US$2f$_lib$2f$formatRelative$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/learn-next/final/node_modules/date-fns/locale/en-US/_lib/formatRelative.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$date$2d$fns$2f$locale$2f$en$2d$US$2f$_lib$2f$localize$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/learn-next/final/node_modules/date-fns/locale/en-US/_lib/localize.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$date$2d$fns$2f$locale$2f$en$2d$US$2f$_lib$2f$match$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/learn-next/final/node_modules/date-fns/locale/en-US/_lib/match.js [app-ssr] (ecmascript)");
;
;
;
;
;
const enUS = {
    code: "en-US",
    formatDistance: __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$date$2d$fns$2f$locale$2f$en$2d$US$2f$_lib$2f$formatDistance$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatDistance"],
    formatLong: __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$date$2d$fns$2f$locale$2f$en$2d$US$2f$_lib$2f$formatLong$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatLong"],
    formatRelative: __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$date$2d$fns$2f$locale$2f$en$2d$US$2f$_lib$2f$formatRelative$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatRelative"],
    localize: __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$date$2d$fns$2f$locale$2f$en$2d$US$2f$_lib$2f$localize$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["localize"],
    match: __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$date$2d$fns$2f$locale$2f$en$2d$US$2f$_lib$2f$match$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["match"],
    options: {
        weekStartsOn: 0 /* Sunday */ ,
        firstWeekContainsDate: 1
    }
};
const __TURBOPACK__default__export__ = enUS;
}),
"[project]/learn-next/final/node_modules/date-fns/locale/en-US.js [app-ssr] (ecmascript) <export enUS as defaultLocale>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "defaultLocale",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$date$2d$fns$2f$locale$2f$en$2d$US$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["enUS"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$date$2d$fns$2f$locale$2f$en$2d$US$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/learn-next/final/node_modules/date-fns/locale/en-US.js [app-ssr] (ecmascript)");
}),
"[project]/learn-next/final/node_modules/date-fns/_lib/defaultOptions.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/learn-next/final/node_modules/date-fns/constants.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/learn-next/final/node_modules/date-fns/constructFrom.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "constructFrom",
    ()=>constructFrom,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$date$2d$fns$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/learn-next/final/node_modules/date-fns/constants.js [app-ssr] (ecmascript)");
;
function constructFrom(date, value) {
    if (typeof date === "function") return date(value);
    if (date && typeof date === "object" && __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$date$2d$fns$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["constructFromSymbol"] in date) return date[__TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$date$2d$fns$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["constructFromSymbol"]](value);
    if (date instanceof Date) return new date.constructor(value);
    return new Date(value);
}
const __TURBOPACK__default__export__ = constructFrom;
}),
"[project]/learn-next/final/node_modules/date-fns/toDate.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "toDate",
    ()=>toDate
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$date$2d$fns$2f$constructFrom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/learn-next/final/node_modules/date-fns/constructFrom.js [app-ssr] (ecmascript)");
;
function toDate(argument, context) {
    // [TODO] Get rid of `toDate` or `constructFrom`?
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$date$2d$fns$2f$constructFrom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["constructFrom"])(context || argument, argument);
}
const __TURBOPACK__default__export__ = toDate;
}),
"[project]/learn-next/final/node_modules/date-fns/_lib/getTimezoneOffsetInMilliseconds.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getTimezoneOffsetInMilliseconds",
    ()=>getTimezoneOffsetInMilliseconds
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$date$2d$fns$2f$toDate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/learn-next/final/node_modules/date-fns/toDate.js [app-ssr] (ecmascript)");
;
function getTimezoneOffsetInMilliseconds(date) {
    const _date = (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$date$2d$fns$2f$toDate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toDate"])(date);
    const utcDate = new Date(Date.UTC(_date.getFullYear(), _date.getMonth(), _date.getDate(), _date.getHours(), _date.getMinutes(), _date.getSeconds(), _date.getMilliseconds()));
    utcDate.setUTCFullYear(_date.getFullYear());
    return +date - +utcDate;
}
}),
"[project]/learn-next/final/node_modules/date-fns/_lib/normalizeDates.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "normalizeDates",
    ()=>normalizeDates
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$date$2d$fns$2f$constructFrom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/learn-next/final/node_modules/date-fns/constructFrom.js [app-ssr] (ecmascript)");
;
function normalizeDates(context, ...dates) {
    const normalize = __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$date$2d$fns$2f$constructFrom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["constructFrom"].bind(null, context || dates.find((date)=>typeof date === "object"));
    return dates.map(normalize);
}
}),
"[project]/learn-next/final/node_modules/date-fns/startOfDay.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "startOfDay",
    ()=>startOfDay
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$date$2d$fns$2f$toDate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/learn-next/final/node_modules/date-fns/toDate.js [app-ssr] (ecmascript)");
;
function startOfDay(date, options) {
    const _date = (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$date$2d$fns$2f$toDate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toDate"])(date, options?.in);
    _date.setHours(0, 0, 0, 0);
    return _date;
}
const __TURBOPACK__default__export__ = startOfDay;
}),
"[project]/learn-next/final/node_modules/date-fns/differenceInCalendarDays.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "differenceInCalendarDays",
    ()=>differenceInCalendarDays
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$getTimezoneOffsetInMilliseconds$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/learn-next/final/node_modules/date-fns/_lib/getTimezoneOffsetInMilliseconds.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$normalizeDates$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/learn-next/final/node_modules/date-fns/_lib/normalizeDates.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$date$2d$fns$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/learn-next/final/node_modules/date-fns/constants.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$date$2d$fns$2f$startOfDay$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/learn-next/final/node_modules/date-fns/startOfDay.js [app-ssr] (ecmascript)");
;
;
;
;
function differenceInCalendarDays(laterDate, earlierDate, options) {
    const [laterDate_, earlierDate_] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$normalizeDates$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["normalizeDates"])(options?.in, laterDate, earlierDate);
    const laterStartOfDay = (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$date$2d$fns$2f$startOfDay$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["startOfDay"])(laterDate_);
    const earlierStartOfDay = (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$date$2d$fns$2f$startOfDay$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["startOfDay"])(earlierDate_);
    const laterTimestamp = +laterStartOfDay - (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$getTimezoneOffsetInMilliseconds$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getTimezoneOffsetInMilliseconds"])(laterStartOfDay);
    const earlierTimestamp = +earlierStartOfDay - (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$getTimezoneOffsetInMilliseconds$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getTimezoneOffsetInMilliseconds"])(earlierStartOfDay);
    // Round the number of days to the nearest integer because the number of
    // milliseconds in a day is not constant (e.g. it's different in the week of
    // the daylight saving time clock shift).
    return Math.round((laterTimestamp - earlierTimestamp) / __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$date$2d$fns$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["millisecondsInDay"]);
}
const __TURBOPACK__default__export__ = differenceInCalendarDays;
}),
"[project]/learn-next/final/node_modules/date-fns/startOfYear.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "startOfYear",
    ()=>startOfYear
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$date$2d$fns$2f$toDate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/learn-next/final/node_modules/date-fns/toDate.js [app-ssr] (ecmascript)");
;
function startOfYear(date, options) {
    const date_ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$date$2d$fns$2f$toDate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toDate"])(date, options?.in);
    date_.setFullYear(date_.getFullYear(), 0, 1);
    date_.setHours(0, 0, 0, 0);
    return date_;
}
const __TURBOPACK__default__export__ = startOfYear;
}),
"[project]/learn-next/final/node_modules/date-fns/getDayOfYear.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "getDayOfYear",
    ()=>getDayOfYear
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$date$2d$fns$2f$differenceInCalendarDays$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/learn-next/final/node_modules/date-fns/differenceInCalendarDays.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$date$2d$fns$2f$startOfYear$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/learn-next/final/node_modules/date-fns/startOfYear.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$date$2d$fns$2f$toDate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/learn-next/final/node_modules/date-fns/toDate.js [app-ssr] (ecmascript)");
;
;
;
function getDayOfYear(date, options) {
    const _date = (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$date$2d$fns$2f$toDate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toDate"])(date, options?.in);
    const diff = (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$date$2d$fns$2f$differenceInCalendarDays$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["differenceInCalendarDays"])(_date, (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$date$2d$fns$2f$startOfYear$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["startOfYear"])(_date));
    const dayOfYear = diff + 1;
    return dayOfYear;
}
const __TURBOPACK__default__export__ = getDayOfYear;
}),
"[project]/learn-next/final/node_modules/date-fns/startOfWeek.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "startOfWeek",
    ()=>startOfWeek
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$defaultOptions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/learn-next/final/node_modules/date-fns/_lib/defaultOptions.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$date$2d$fns$2f$toDate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/learn-next/final/node_modules/date-fns/toDate.js [app-ssr] (ecmascript)");
;
;
function startOfWeek(date, options) {
    const defaultOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$defaultOptions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDefaultOptions"])();
    const weekStartsOn = options?.weekStartsOn ?? options?.locale?.options?.weekStartsOn ?? defaultOptions.weekStartsOn ?? defaultOptions.locale?.options?.weekStartsOn ?? 0;
    const _date = (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$date$2d$fns$2f$toDate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toDate"])(date, options?.in);
    const day = _date.getDay();
    const diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
    _date.setDate(_date.getDate() - diff);
    _date.setHours(0, 0, 0, 0);
    return _date;
}
const __TURBOPACK__default__export__ = startOfWeek;
}),
"[project]/learn-next/final/node_modules/date-fns/startOfISOWeek.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "startOfISOWeek",
    ()=>startOfISOWeek
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$date$2d$fns$2f$startOfWeek$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/learn-next/final/node_modules/date-fns/startOfWeek.js [app-ssr] (ecmascript)");
;
function startOfISOWeek(date, options) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$date$2d$fns$2f$startOfWeek$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["startOfWeek"])(date, {
        ...options,
        weekStartsOn: 1
    });
}
const __TURBOPACK__default__export__ = startOfISOWeek;
}),
"[project]/learn-next/final/node_modules/date-fns/getISOWeekYear.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "getISOWeekYear",
    ()=>getISOWeekYear
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$date$2d$fns$2f$constructFrom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/learn-next/final/node_modules/date-fns/constructFrom.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$date$2d$fns$2f$startOfISOWeek$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/learn-next/final/node_modules/date-fns/startOfISOWeek.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$date$2d$fns$2f$toDate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/learn-next/final/node_modules/date-fns/toDate.js [app-ssr] (ecmascript)");
;
;
;
function getISOWeekYear(date, options) {
    const _date = (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$date$2d$fns$2f$toDate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toDate"])(date, options?.in);
    const year = _date.getFullYear();
    const fourthOfJanuaryOfNextYear = (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$date$2d$fns$2f$constructFrom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["constructFrom"])(_date, 0);
    fourthOfJanuaryOfNextYear.setFullYear(year + 1, 0, 4);
    fourthOfJanuaryOfNextYear.setHours(0, 0, 0, 0);
    const startOfNextYear = (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$date$2d$fns$2f$startOfISOWeek$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["startOfISOWeek"])(fourthOfJanuaryOfNextYear);
    const fourthOfJanuaryOfThisYear = (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$date$2d$fns$2f$constructFrom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["constructFrom"])(_date, 0);
    fourthOfJanuaryOfThisYear.setFullYear(year, 0, 4);
    fourthOfJanuaryOfThisYear.setHours(0, 0, 0, 0);
    const startOfThisYear = (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$date$2d$fns$2f$startOfISOWeek$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["startOfISOWeek"])(fourthOfJanuaryOfThisYear);
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
"[project]/learn-next/final/node_modules/date-fns/startOfISOWeekYear.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "startOfISOWeekYear",
    ()=>startOfISOWeekYear
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$date$2d$fns$2f$constructFrom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/learn-next/final/node_modules/date-fns/constructFrom.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$date$2d$fns$2f$getISOWeekYear$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/learn-next/final/node_modules/date-fns/getISOWeekYear.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$date$2d$fns$2f$startOfISOWeek$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/learn-next/final/node_modules/date-fns/startOfISOWeek.js [app-ssr] (ecmascript)");
;
;
;
function startOfISOWeekYear(date, options) {
    const year = (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$date$2d$fns$2f$getISOWeekYear$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getISOWeekYear"])(date, options);
    const fourthOfJanuary = (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$date$2d$fns$2f$constructFrom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["constructFrom"])(options?.in || date, 0);
    fourthOfJanuary.setFullYear(year, 0, 4);
    fourthOfJanuary.setHours(0, 0, 0, 0);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$date$2d$fns$2f$startOfISOWeek$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["startOfISOWeek"])(fourthOfJanuary);
}
const __TURBOPACK__default__export__ = startOfISOWeekYear;
}),
"[project]/learn-next/final/node_modules/date-fns/getISOWeek.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "getISOWeek",
    ()=>getISOWeek
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$date$2d$fns$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/learn-next/final/node_modules/date-fns/constants.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$date$2d$fns$2f$startOfISOWeek$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/learn-next/final/node_modules/date-fns/startOfISOWeek.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$date$2d$fns$2f$startOfISOWeekYear$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/learn-next/final/node_modules/date-fns/startOfISOWeekYear.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$date$2d$fns$2f$toDate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/learn-next/final/node_modules/date-fns/toDate.js [app-ssr] (ecmascript)");
;
;
;
;
function getISOWeek(date, options) {
    const _date = (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$date$2d$fns$2f$toDate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toDate"])(date, options?.in);
    const diff = +(0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$date$2d$fns$2f$startOfISOWeek$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["startOfISOWeek"])(_date) - +(0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$date$2d$fns$2f$startOfISOWeekYear$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["startOfISOWeekYear"])(_date);
    // Round the number of weeks to the nearest integer because the number of
    // milliseconds in a week is not constant (e.g. it's different in the week of
    // the daylight saving time clock shift).
    return Math.round(diff / __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$date$2d$fns$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["millisecondsInWeek"]) + 1;
}
const __TURBOPACK__default__export__ = getISOWeek;
}),
"[project]/learn-next/final/node_modules/date-fns/getWeekYear.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "getWeekYear",
    ()=>getWeekYear
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$defaultOptions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/learn-next/final/node_modules/date-fns/_lib/defaultOptions.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$date$2d$fns$2f$constructFrom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/learn-next/final/node_modules/date-fns/constructFrom.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$date$2d$fns$2f$startOfWeek$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/learn-next/final/node_modules/date-fns/startOfWeek.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$date$2d$fns$2f$toDate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/learn-next/final/node_modules/date-fns/toDate.js [app-ssr] (ecmascript)");
;
;
;
;
function getWeekYear(date, options) {
    const _date = (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$date$2d$fns$2f$toDate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toDate"])(date, options?.in);
    const year = _date.getFullYear();
    const defaultOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$defaultOptions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDefaultOptions"])();
    const firstWeekContainsDate = options?.firstWeekContainsDate ?? options?.locale?.options?.firstWeekContainsDate ?? defaultOptions.firstWeekContainsDate ?? defaultOptions.locale?.options?.firstWeekContainsDate ?? 1;
    const firstWeekOfNextYear = (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$date$2d$fns$2f$constructFrom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["constructFrom"])(options?.in || date, 0);
    firstWeekOfNextYear.setFullYear(year + 1, 0, firstWeekContainsDate);
    firstWeekOfNextYear.setHours(0, 0, 0, 0);
    const startOfNextYear = (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$date$2d$fns$2f$startOfWeek$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["startOfWeek"])(firstWeekOfNextYear, options);
    const firstWeekOfThisYear = (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$date$2d$fns$2f$constructFrom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["constructFrom"])(options?.in || date, 0);
    firstWeekOfThisYear.setFullYear(year, 0, firstWeekContainsDate);
    firstWeekOfThisYear.setHours(0, 0, 0, 0);
    const startOfThisYear = (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$date$2d$fns$2f$startOfWeek$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["startOfWeek"])(firstWeekOfThisYear, options);
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
"[project]/learn-next/final/node_modules/date-fns/startOfWeekYear.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "startOfWeekYear",
    ()=>startOfWeekYear
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$defaultOptions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/learn-next/final/node_modules/date-fns/_lib/defaultOptions.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$date$2d$fns$2f$constructFrom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/learn-next/final/node_modules/date-fns/constructFrom.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$date$2d$fns$2f$getWeekYear$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/learn-next/final/node_modules/date-fns/getWeekYear.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$date$2d$fns$2f$startOfWeek$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/learn-next/final/node_modules/date-fns/startOfWeek.js [app-ssr] (ecmascript)");
;
;
;
;
function startOfWeekYear(date, options) {
    const defaultOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$defaultOptions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDefaultOptions"])();
    const firstWeekContainsDate = options?.firstWeekContainsDate ?? options?.locale?.options?.firstWeekContainsDate ?? defaultOptions.firstWeekContainsDate ?? defaultOptions.locale?.options?.firstWeekContainsDate ?? 1;
    const year = (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$date$2d$fns$2f$getWeekYear$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getWeekYear"])(date, options);
    const firstWeek = (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$date$2d$fns$2f$constructFrom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["constructFrom"])(options?.in || date, 0);
    firstWeek.setFullYear(year, 0, firstWeekContainsDate);
    firstWeek.setHours(0, 0, 0, 0);
    const _date = (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$date$2d$fns$2f$startOfWeek$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["startOfWeek"])(firstWeek, options);
    return _date;
}
const __TURBOPACK__default__export__ = startOfWeekYear;
}),
"[project]/learn-next/final/node_modules/date-fns/getWeek.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "getWeek",
    ()=>getWeek
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$date$2d$fns$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/learn-next/final/node_modules/date-fns/constants.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$date$2d$fns$2f$startOfWeek$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/learn-next/final/node_modules/date-fns/startOfWeek.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$date$2d$fns$2f$startOfWeekYear$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/learn-next/final/node_modules/date-fns/startOfWeekYear.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$date$2d$fns$2f$toDate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/learn-next/final/node_modules/date-fns/toDate.js [app-ssr] (ecmascript)");
;
;
;
;
function getWeek(date, options) {
    const _date = (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$date$2d$fns$2f$toDate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toDate"])(date, options?.in);
    const diff = +(0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$date$2d$fns$2f$startOfWeek$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["startOfWeek"])(_date, options) - +(0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$date$2d$fns$2f$startOfWeekYear$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["startOfWeekYear"])(_date, options);
    // Round the number of weeks to the nearest integer because the number of
    // milliseconds in a week is not constant (e.g. it's different in the week of
    // the daylight saving time clock shift).
    return Math.round(diff / __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$date$2d$fns$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["millisecondsInWeek"]) + 1;
}
const __TURBOPACK__default__export__ = getWeek;
}),
"[project]/learn-next/final/node_modules/date-fns/_lib/addLeadingZeros.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/learn-next/final/node_modules/date-fns/_lib/format/lightFormatters.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "lightFormatters",
    ()=>lightFormatters
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$addLeadingZeros$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/learn-next/final/node_modules/date-fns/_lib/addLeadingZeros.js [app-ssr] (ecmascript)");
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
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$addLeadingZeros$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addLeadingZeros"])(token === "yy" ? year % 100 : year, token.length);
    },
    // Month
    M (date, token) {
        const month = date.getMonth();
        return token === "M" ? String(month + 1) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$addLeadingZeros$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addLeadingZeros"])(month + 1, 2);
    },
    // Day of the month
    d (date, token) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$addLeadingZeros$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addLeadingZeros"])(date.getDate(), token.length);
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
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$addLeadingZeros$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addLeadingZeros"])(date.getHours() % 12 || 12, token.length);
    },
    // Hour [0-23]
    H (date, token) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$addLeadingZeros$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addLeadingZeros"])(date.getHours(), token.length);
    },
    // Minute
    m (date, token) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$addLeadingZeros$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addLeadingZeros"])(date.getMinutes(), token.length);
    },
    // Second
    s (date, token) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$addLeadingZeros$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addLeadingZeros"])(date.getSeconds(), token.length);
    },
    // Fraction of second
    S (date, token) {
        const numberOfDigits = token.length;
        const milliseconds = date.getMilliseconds();
        const fractionalSeconds = Math.trunc(milliseconds * Math.pow(10, numberOfDigits - 3));
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$addLeadingZeros$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addLeadingZeros"])(fractionalSeconds, token.length);
    }
};
}),
"[project]/learn-next/final/node_modules/date-fns/_lib/format/formatters.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "formatters",
    ()=>formatters
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$date$2d$fns$2f$getDayOfYear$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/learn-next/final/node_modules/date-fns/getDayOfYear.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$date$2d$fns$2f$getISOWeek$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/learn-next/final/node_modules/date-fns/getISOWeek.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$date$2d$fns$2f$getISOWeekYear$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/learn-next/final/node_modules/date-fns/getISOWeekYear.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$date$2d$fns$2f$getWeek$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/learn-next/final/node_modules/date-fns/getWeek.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$date$2d$fns$2f$getWeekYear$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/learn-next/final/node_modules/date-fns/getWeekYear.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$addLeadingZeros$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/learn-next/final/node_modules/date-fns/_lib/addLeadingZeros.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$format$2f$lightFormatters$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/learn-next/final/node_modules/date-fns/_lib/format/lightFormatters.js [app-ssr] (ecmascript)");
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
        return __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$format$2f$lightFormatters$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["lightFormatters"].y(date, token);
    },
    // Local week-numbering year
    Y: function(date, token, localize, options) {
        const signedWeekYear = (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$date$2d$fns$2f$getWeekYear$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getWeekYear"])(date, options);
        // Returns 1 for 1 BC (which is year 0 in JavaScript)
        const weekYear = signedWeekYear > 0 ? signedWeekYear : 1 - signedWeekYear;
        // Two digit year
        if (token === "YY") {
            const twoDigitYear = weekYear % 100;
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$addLeadingZeros$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addLeadingZeros"])(twoDigitYear, 2);
        }
        // Ordinal number
        if (token === "Yo") {
            return localize.ordinalNumber(weekYear, {
                unit: "year"
            });
        }
        // Padding
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$addLeadingZeros$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addLeadingZeros"])(weekYear, token.length);
    },
    // ISO week-numbering year
    R: function(date, token) {
        const isoWeekYear = (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$date$2d$fns$2f$getISOWeekYear$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getISOWeekYear"])(date);
        // Padding
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$addLeadingZeros$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addLeadingZeros"])(isoWeekYear, token.length);
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
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$addLeadingZeros$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addLeadingZeros"])(year, token.length);
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
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$addLeadingZeros$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addLeadingZeros"])(quarter, 2);
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
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$addLeadingZeros$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addLeadingZeros"])(quarter, 2);
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
                return __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$format$2f$lightFormatters$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["lightFormatters"].M(date, token);
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
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$addLeadingZeros$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addLeadingZeros"])(month + 1, 2);
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
        const week = (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$date$2d$fns$2f$getWeek$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getWeek"])(date, options);
        if (token === "wo") {
            return localize.ordinalNumber(week, {
                unit: "week"
            });
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$addLeadingZeros$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addLeadingZeros"])(week, token.length);
    },
    // ISO week of year
    I: function(date, token, localize) {
        const isoWeek = (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$date$2d$fns$2f$getISOWeek$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getISOWeek"])(date);
        if (token === "Io") {
            return localize.ordinalNumber(isoWeek, {
                unit: "week"
            });
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$addLeadingZeros$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addLeadingZeros"])(isoWeek, token.length);
    },
    // Day of the month
    d: function(date, token, localize) {
        if (token === "do") {
            return localize.ordinalNumber(date.getDate(), {
                unit: "date"
            });
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$format$2f$lightFormatters$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["lightFormatters"].d(date, token);
    },
    // Day of year
    D: function(date, token, localize) {
        const dayOfYear = (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$date$2d$fns$2f$getDayOfYear$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDayOfYear"])(date);
        if (token === "Do") {
            return localize.ordinalNumber(dayOfYear, {
                unit: "dayOfYear"
            });
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$addLeadingZeros$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addLeadingZeros"])(dayOfYear, token.length);
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
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$addLeadingZeros$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addLeadingZeros"])(localDayOfWeek, 2);
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
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$addLeadingZeros$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addLeadingZeros"])(localDayOfWeek, token.length);
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
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$addLeadingZeros$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addLeadingZeros"])(isoDayOfWeek, token.length);
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
        return __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$format$2f$lightFormatters$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["lightFormatters"].h(date, token);
    },
    // Hour [0-23]
    H: function(date, token, localize) {
        if (token === "Ho") {
            return localize.ordinalNumber(date.getHours(), {
                unit: "hour"
            });
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$format$2f$lightFormatters$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["lightFormatters"].H(date, token);
    },
    // Hour [0-11]
    K: function(date, token, localize) {
        const hours = date.getHours() % 12;
        if (token === "Ko") {
            return localize.ordinalNumber(hours, {
                unit: "hour"
            });
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$addLeadingZeros$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addLeadingZeros"])(hours, token.length);
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
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$addLeadingZeros$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addLeadingZeros"])(hours, token.length);
    },
    // Minute
    m: function(date, token, localize) {
        if (token === "mo") {
            return localize.ordinalNumber(date.getMinutes(), {
                unit: "minute"
            });
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$format$2f$lightFormatters$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["lightFormatters"].m(date, token);
    },
    // Second
    s: function(date, token, localize) {
        if (token === "so") {
            return localize.ordinalNumber(date.getSeconds(), {
                unit: "second"
            });
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$format$2f$lightFormatters$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["lightFormatters"].s(date, token);
    },
    // Fraction of second
    S: function(date, token) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$format$2f$lightFormatters$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["lightFormatters"].S(date, token);
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
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$addLeadingZeros$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addLeadingZeros"])(timestamp, token.length);
    },
    // Milliseconds timestamp
    T: function(date, token, _localize) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$addLeadingZeros$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addLeadingZeros"])(+date, token.length);
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
    return sign + String(hours) + delimiter + (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$addLeadingZeros$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addLeadingZeros"])(minutes, 2);
}
function formatTimezoneWithOptionalMinutes(offset, delimiter) {
    if (offset % 60 === 0) {
        const sign = offset > 0 ? "-" : "+";
        return sign + (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$addLeadingZeros$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addLeadingZeros"])(Math.abs(offset) / 60, 2);
    }
    return formatTimezone(offset, delimiter);
}
function formatTimezone(offset, delimiter = "") {
    const sign = offset > 0 ? "-" : "+";
    const absOffset = Math.abs(offset);
    const hours = (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$addLeadingZeros$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addLeadingZeros"])(Math.trunc(absOffset / 60), 2);
    const minutes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$addLeadingZeros$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addLeadingZeros"])(absOffset % 60, 2);
    return sign + hours + delimiter + minutes;
}
}),
"[project]/learn-next/final/node_modules/date-fns/_lib/format/longFormatters.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/learn-next/final/node_modules/date-fns/_lib/protectedTokens.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/learn-next/final/node_modules/date-fns/isDate.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/learn-next/final/node_modules/date-fns/isValid.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "isValid",
    ()=>isValid
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$date$2d$fns$2f$isDate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/learn-next/final/node_modules/date-fns/isDate.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$date$2d$fns$2f$toDate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/learn-next/final/node_modules/date-fns/toDate.js [app-ssr] (ecmascript)");
;
;
function isValid(date) {
    return !(!(0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$date$2d$fns$2f$isDate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isDate"])(date) && typeof date !== "number" || isNaN(+(0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$date$2d$fns$2f$toDate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toDate"])(date)));
}
const __TURBOPACK__default__export__ = isValid;
}),
"[project]/learn-next/final/node_modules/date-fns/format.js [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "format",
    ()=>format,
    "formatDate",
    ()=>format
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$date$2d$fns$2f$locale$2f$en$2d$US$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__enUS__as__defaultLocale$3e$__ = __turbopack_context__.i("[project]/learn-next/final/node_modules/date-fns/locale/en-US.js [app-ssr] (ecmascript) <export enUS as defaultLocale>");
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$defaultOptions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/learn-next/final/node_modules/date-fns/_lib/defaultOptions.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$format$2f$formatters$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/learn-next/final/node_modules/date-fns/_lib/format/formatters.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$format$2f$longFormatters$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/learn-next/final/node_modules/date-fns/_lib/format/longFormatters.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$protectedTokens$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/learn-next/final/node_modules/date-fns/_lib/protectedTokens.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$date$2d$fns$2f$isValid$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/learn-next/final/node_modules/date-fns/isValid.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$date$2d$fns$2f$toDate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/learn-next/final/node_modules/date-fns/toDate.js [app-ssr] (ecmascript)");
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
    const defaultOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$defaultOptions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDefaultOptions"])();
    const locale = options?.locale ?? defaultOptions.locale ?? __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$date$2d$fns$2f$locale$2f$en$2d$US$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__enUS__as__defaultLocale$3e$__["defaultLocale"];
    const firstWeekContainsDate = options?.firstWeekContainsDate ?? options?.locale?.options?.firstWeekContainsDate ?? defaultOptions.firstWeekContainsDate ?? defaultOptions.locale?.options?.firstWeekContainsDate ?? 1;
    const weekStartsOn = options?.weekStartsOn ?? options?.locale?.options?.weekStartsOn ?? defaultOptions.weekStartsOn ?? defaultOptions.locale?.options?.weekStartsOn ?? 0;
    const originalDate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$date$2d$fns$2f$toDate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toDate"])(date, options?.in);
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$date$2d$fns$2f$isValid$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isValid"])(originalDate)) {
        throw new RangeError("Invalid time value");
    }
    let parts = formatStr.match(longFormattingTokensRegExp).map((substring)=>{
        const firstCharacter = substring[0];
        if (firstCharacter === "p" || firstCharacter === "P") {
            const longFormatter = __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$format$2f$longFormatters$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["longFormatters"][firstCharacter];
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
        if (__TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$format$2f$formatters$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatters"][firstCharacter]) {
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
        if (!options?.useAdditionalWeekYearTokens && (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$protectedTokens$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isProtectedWeekYearToken"])(token) || !options?.useAdditionalDayOfYearTokens && (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$protectedTokens$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isProtectedDayOfYearToken"])(token)) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$protectedTokens$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["warnOrThrowProtectedError"])(token, formatStr, String(date));
        }
        const formatter = __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$format$2f$formatters$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatters"][token[0]];
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
"[project]/learn-next/final/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

// This file must be bundled in the app's client layer, it shouldn't be directly
// imported by the server.
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    callServer: null,
    createServerReference: null,
    findSourceMapURL: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    callServer: function() {
        return _appcallserver.callServer;
    },
    createServerReference: function() {
        return _client.createServerReference;
    },
    findSourceMapURL: function() {
        return _appfindsourcemapurl.findSourceMapURL;
    }
});
const _appcallserver = __turbopack_context__.r("[project]/learn-next/final/node_modules/next/dist/client/app-call-server.js [app-ssr] (ecmascript)");
const _appfindsourcemapurl = __turbopack_context__.r("[project]/learn-next/final/node_modules/next/dist/client/app-find-source-map-url.js [app-ssr] (ecmascript)");
const _client = __turbopack_context__.r("[project]/learn-next/final/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-server-dom-turbopack-client.js [app-ssr] (ecmascript)"); //# sourceMappingURL=action-client-wrapper.js.map
}),
];

//# sourceMappingURL=beec6_61a6d4ba._.js.map
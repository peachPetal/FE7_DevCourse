module.exports = [
"[project]/learn-next/final/src/utils/actions/index.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"0036c5d34338af1467e8e46095dae5c6cb5b39aad4":"signOut","7fc2973d0bb97898cf385b59211f76d36b606bc0c6":"githubLogin"},"",""] */ __turbopack_context__.s([
    "githubLogin",
    ()=>githubLogin,
    "signOut",
    ()=>signOut
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/learn-next/final/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$api$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/learn-next/final/node_modules/next/dist/api/navigation.react-server.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/learn-next/final/node_modules/next/dist/client/components/navigation.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$src$2f$utils$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/learn-next/final/src/utils/supabase/server.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/learn-next/final/node_modules/next/cache.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/learn-next/final/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
;
;
const githubLogin = async ()=>{
    const supabase = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$src$2f$utils$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createClient"])();
    const { data } = await supabase.auth.signInWithOAuth({
        provider: "github",
        options: {
            redirectTo: `${("TURBOPACK compile-time value", "http://localhost:3000")}/auth/callback`
        }
    });
    if (data.url) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["redirect"])(data.url);
    }
};
async function signOut() {
    const supabase = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$src$2f$utils$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createClient"])();
    await supabase.auth.signOut();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/");
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    githubLogin,
    signOut
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(githubLogin, "7fc2973d0bb97898cf385b59211f76d36b606bc0c6", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(signOut, "0036c5d34338af1467e8e46095dae5c6cb5b39aad4", null);
}),
"[project]/learn-next/final/.next-internal/server/app/(secret)/mypage/page/actions.js { ACTIONS_MODULE0 => \"[project]/learn-next/final/src/utils/actions/index.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$src$2f$utils$2f$actions$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/learn-next/final/src/utils/actions/index.ts [app-rsc] (ecmascript)");
;
;
}),
"[project]/learn-next/final/.next-internal/server/app/(secret)/mypage/page/actions.js { ACTIONS_MODULE0 => \"[project]/learn-next/final/src/utils/actions/index.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "0036c5d34338af1467e8e46095dae5c6cb5b39aad4",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$src$2f$utils$2f$actions$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["signOut"],
    "7fc2973d0bb97898cf385b59211f76d36b606bc0c6",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$src$2f$utils$2f$actions$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["githubLogin"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f2e$next$2d$internal$2f$server$2f$app$2f28$secret$292f$mypage$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$learn$2d$next$2f$final$2f$src$2f$utils$2f$actions$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/learn-next/final/.next-internal/server/app/(secret)/mypage/page/actions.js { ACTIONS_MODULE0 => "[project]/learn-next/final/src/utils/actions/index.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$src$2f$utils$2f$actions$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/learn-next/final/src/utils/actions/index.ts [app-rsc] (ecmascript)");
}),
];

//# sourceMappingURL=learn-next_final_991a2f9b._.js.map
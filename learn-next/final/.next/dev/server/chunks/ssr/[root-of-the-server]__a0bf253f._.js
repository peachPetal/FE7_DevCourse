module.exports = [
"[externals]/string_decoder [external] (string_decoder, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("string_decoder", () => require("string_decoder"));

module.exports = mod;
}),
"[externals]/events [external] (events, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("events", () => require("events"));

module.exports = mod;
}),
"[externals]/timers [external] (timers, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("timers", () => require("timers"));

module.exports = mod;
}),
"[externals]/querystring [external] (querystring, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("querystring", () => require("querystring"));

module.exports = mod;
}),
"[externals]/assert [external] (assert, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("assert", () => require("assert"));

module.exports = mod;
}),
"[externals]/net [external] (net, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("net", () => require("net"));

module.exports = mod;
}),
"[externals]/buffer [external] (buffer, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("buffer", () => require("buffer"));

module.exports = mod;
}),
"[externals]/stream/web [external] (stream/web, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("stream/web", () => require("stream/web"));

module.exports = mod;
}),
"[externals]/worker_threads [external] (worker_threads, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("worker_threads", () => require("worker_threads"));

module.exports = mod;
}),
"[externals]/perf_hooks [external] (perf_hooks, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("perf_hooks", () => require("perf_hooks"));

module.exports = mod;
}),
"[externals]/util/types [external] (util/types, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("util/types", () => require("util/types"));

module.exports = mod;
}),
"[externals]/crypto [external] (crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}),
"[externals]/node:stream [external] (node:stream, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:stream", () => require("node:stream"));

module.exports = mod;
}),
"[externals]/node:util [external] (node:util, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:util", () => require("node:util"));

module.exports = mod;
}),
"[externals]/node:events [external] (node:events, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:events", () => require("node:events"));

module.exports = mod;
}),
"[externals]/node:crypto [external] (node:crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:crypto", () => require("node:crypto"));

module.exports = mod;
}),
"[externals]/diagnostics_channel [external] (diagnostics_channel, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("diagnostics_channel", () => require("diagnostics_channel"));

module.exports = mod;
}),
"[externals]/tls [external] (tls, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("tls", () => require("tls"));

module.exports = mod;
}),
"[externals]/http2 [external] (http2, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("http2", () => require("http2"));

module.exports = mod;
}),
"[externals]/async_hooks [external] (async_hooks, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("async_hooks", () => require("async_hooks"));

module.exports = mod;
}),
"[externals]/console [external] (console, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("console", () => require("console"));

module.exports = mod;
}),
"[project]/learn-next/final/src/utils/helper/index.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/utils/helper/index.ts
__turbopack_context__.s([
    "estimateReadTime",
    ()=>estimateReadTime,
    "getGeminiProductFeed",
    ()=>getGeminiProductFeed
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$rss$2d$parser$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/learn-next/final/node_modules/rss-parser/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f40$iamtraction$2f$google$2d$translate$2f$src$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/learn-next/final/node_modules/@iamtraction/google-translate/src/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$node$2d$html$2d$parser$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/learn-next/final/node_modules/node-html-parser/dist/index.js [app-rsc] (ecmascript)"); // 💡 HTML 파싱용 (npm i node-html-parser)
;
;
;
function estimateReadTime(content) {
    if (!content) return `1 min read`;
    const words = content.trim().split(/\s+/).length;
    const minutes = Math.max(1, Math.ceil(words / 200));
    return `${minutes} min read`;
}
// --- [RSS 로직 시작] ---
const RSS_FEED_URL = "https://blog.google/products/gemini/rss/";
// 💡 Google Blog 본문 HTML을 가져오는 함수
async function fetchFullArticle(link) {
    try {
        const res = await fetch(link, {
            next: {
                revalidate: 3600
            }
        });
        if (!res.ok) throw new Error(`Failed to fetch article: ${link}`);
        const html = await res.text();
        const root = (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$node$2d$html$2d$parser$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["parse"])(html);
        // 💡 Google Blog의 실제 본문은 <article> 태그 안에 있음
        const article = root.querySelector("article");
        // HTML 그대로 반환 (Tailwind나 sanitizer로 후처리 가능)
        return article ? article.innerHTML : "";
    } catch (error) {
        console.error("Error fetching full article:", error);
        return "";
    }
}
async function getGeminiProductFeed() {
    try {
        const response = await fetch(RSS_FEED_URL, {
            next: {
                revalidate: 3600
            }
        });
        if (!response.ok) {
            throw new Error(`Failed to fetch RSS feed: ${response.statusText}`);
        }
        const xmlText = await response.text();
        // 💡 content:encoded는 실제로 존재하지 않지만 일단 유지
        const parser = new __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$rss$2d$parser$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]({
            customFields: {
                item: [
                    [
                        "content:encoded",
                        "content"
                    ]
                ]
            }
        });
        const feed = await parser.parseString(xmlText);
        const plainItems = feed.items.map((item)=>({
                title: item.title,
                link: item.link,
                pubDate: item.pubDate,
                guid: item.guid,
                content: item.content || "",
                contentSnippet: item.contentSnippet,
                categories: item.categories
            }));
        // 💡 각 기사별 전체 본문 추가로 fetch
        const itemsWithFullContent = await Promise.all(plainItems.map(async (item)=>{
            const fullContent = await fetchFullArticle(item.link);
            return {
                ...item,
                content: fullContent || item.content
            };
        }));
        // 💡 번역: 제목 + 요약만
        const translatedItems = await Promise.all(itemsWithFullContent.map(async (item)=>{
            try {
                const [translatedTitle, translatedSnippet] = await Promise.all([
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f40$iamtraction$2f$google$2d$translate$2f$src$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(item.title, {
                        from: "en",
                        to: "ko"
                    }),
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f40$iamtraction$2f$google$2d$translate$2f$src$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(item.contentSnippet || "", {
                        from: "en",
                        to: "ko"
                    })
                ]);
                return {
                    ...item,
                    title: translatedTitle.text,
                    contentSnippet: translatedSnippet.text
                };
            } catch (error) {
                return item;
                //TURBOPACK unreachable
                ;
            }
        }));
        return translatedItems;
    } catch (error) {
        console.error("Error fetching or parsing Gemini RSS feed:", error);
        return [];
    }
}
}),
"[project]/learn-next/final/src/utils/actions/index.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"0036c5d34338af1467e8e46095dae5c6cb5b39aad4":"signOut","40bafef8b8e6bae2cf0f32cc59b81445d0dba800c9":"getMoreFeedItems","7fc2973d0bb97898cf385b59211f76d36b606bc0c6":"githubLogin"},"",""] */ __turbopack_context__.s([
    "getMoreFeedItems",
    ()=>getMoreFeedItems,
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
// 💡 [수정] 새로 통합된 helper 파일에서 import
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$src$2f$utils$2f$helper$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/learn-next/final/src/utils/helper/index.ts [app-rsc] (ecmascript)"); // 👈 경로 수정
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/learn-next/final/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
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
/* --- 💡 [여기에 새 서버 액션 추가] --- */ const ITEMS_PER_PAGE = 5; // 한 번에 5개씩 불러옵니다.
async function getMoreFeedItems(page) {
    // getGeminiProductFeed는 fetch 캐시 덕분에 전체 목록을 다시 다운로드하지 않습니다.
    const allItems = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$src$2f$utils$2f$helper$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getGeminiProductFeed"])();
    // 요청된 페이지에 해당하는 5개 아이템을 잘라 반환합니다.
    const offset = page * ITEMS_PER_PAGE;
    return allItems.slice(offset, offset + ITEMS_PER_PAGE);
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    githubLogin,
    signOut,
    getMoreFeedItems
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(githubLogin, "7fc2973d0bb97898cf385b59211f76d36b606bc0c6", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(signOut, "0036c5d34338af1467e8e46095dae5c6cb5b39aad4", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getMoreFeedItems, "40bafef8b8e6bae2cf0f32cc59b81445d0dba800c9", null);
}),
"[project]/learn-next/final/.next-internal/server/app/page/actions.js { ACTIONS_MODULE0 => \"[project]/learn-next/final/src/utils/actions/index.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$src$2f$utils$2f$actions$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/learn-next/final/src/utils/actions/index.ts [app-rsc] (ecmascript)");
;
}),
"[project]/learn-next/final/.next-internal/server/app/page/actions.js { ACTIONS_MODULE0 => \"[project]/learn-next/final/src/utils/actions/index.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "40bafef8b8e6bae2cf0f32cc59b81445d0dba800c9",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$src$2f$utils$2f$actions$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getMoreFeedItems"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f2e$next$2d$internal$2f$server$2f$app$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$learn$2d$next$2f$final$2f$src$2f$utils$2f$actions$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/learn-next/final/.next-internal/server/app/page/actions.js { ACTIONS_MODULE0 => "[project]/learn-next/final/src/utils/actions/index.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$src$2f$utils$2f$actions$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/learn-next/final/src/utils/actions/index.ts [app-rsc] (ecmascript)");
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__a0bf253f._.js.map
(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/learn-next/final/src/utils/supabase/client.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createClient",
    ()=>createClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/learn-next/final/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/learn-next/final/node_modules/@supabase/ssr/dist/module/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$createBrowserClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/learn-next/final/node_modules/@supabase/ssr/dist/module/createBrowserClient.js [app-client] (ecmascript)");
;
const supabaseUrl = ("TURBOPACK compile-time value", "https://pawiuhztpdsqduxnxfkd.supabase.co");
const supabaseKey = ("TURBOPACK compile-time value", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBhd2l1aHp0cGRzcWR1eG54ZmtkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjE4MjEwNDYsImV4cCI6MjA3NzM5NzA0Nn0.f9fCCR8Gc8TmA0hOGHN5hMNWjYSRcVlLkXKHS5XlSvw");
const createClient = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$createBrowserClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createBrowserClient"])(supabaseUrl, supabaseKey);
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/learn-next/final/src/components/post/WriteForm.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>WriteForm
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/learn-next/final/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$src$2f$utils$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/learn-next/final/src/utils/supabase/client.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/learn-next/final/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/learn-next/final/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/learn-next/final/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function WriteForm() {
    _s();
    // ?post_id=1
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const postId = searchParams.get("post_id"); // 1
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$src$2f$utils$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createClient"])();
    const [title, setTitle] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(""); // 제목
    const [content, setContent] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(""); // 내용
    const [tags, setTags] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]); // 태그
    const [tagInput, setTagInput] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(""); // 태그 입력창
    const [submitting, setSubmitting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const addTag = ()=>{
        if (tagInput.trim() && !tags.includes(tagInput.trim())) {
            setTags([
                ...tags,
                tagInput.trim()
            ]);
            setTagInput("");
        }
    };
    const removeTag = (tagToRemove)=>{
        setTags(tags.filter((tag)=>tag !== tagToRemove));
    };
    const handlePublish = async ()=>{
        if (title.trim() === "") {
            alert("제목을 입력해주세요");
            return;
        }
        if (content.trim() === "") {
            alert("내용을 입력해주세요");
            return;
        }
        // 태그 문자열
        const tagString = tags.join(",");
        try {
            setSubmitting(true);
            if (postId) {
                const { error } = await supabase.from("posts").update({
                    title: title.trim(),
                    content: content.trim(),
                    tags: tagString
                }).eq("id", Number(postId)).select();
                if (error) {
                    alert("업데이트 중 문제가 발생했습니다.");
                    return false;
                }
                alert("게시글이 수정되었습니다.");
                router.replace(`/post/${postId}`);
            } else {
                // 등록 로직
                const { data: { user }, error: userError } = await supabase.auth.getUser();
                if (userError || !user) {
                    alert("로그인이 필요합니다.");
                    setSubmitting(false);
                    return;
                }
                const { data, error } = await supabase.from("posts").insert([
                    {
                        profile_id: user.id,
                        title: title.trim(),
                        content: content.trim(),
                        tags: tagString
                    }
                ]).select("id").single();
                if (error) {
                    alert("게시글 등록 중 오류가 발생했습니다.");
                    setSubmitting(false);
                    return;
                }
                const newPostId = data.id;
                if (newPostId) {
                    alert("게시글이 등록되었습니다.");
                    router.push(`/post/${newPostId}`);
                } else {
                    router.push("/");
                }
            }
        } catch (e) {
            console.log(e);
        } finally{
            setSubmitting(false);
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "WriteForm.useEffect": ()=>{
            if (!postId) return;
            // 즉시 실행함수
            ({
                "WriteForm.useEffect": async ()=>{
                    const { data: { user }, error: userError } = await supabase.auth.getUser();
                    if (!user || userError) {
                        alert("로그인 후 수정이 가능합니다.");
                        router.replace("/auth/login");
                        return;
                    }
                    const { data, error } = await supabase.from("posts").select("*").eq("id", Number(postId)).eq("profile_id", user?.id ?? "").single();
                    if (!data || error) {
                        alert("내 게시글만 수정 가능합니다.");
                        router.replace("/");
                        return;
                    }
                    setTitle(data.title ?? "");
                    setContent(data.content ?? "");
                    if (Array.isArray(data.tags)) {
                        setTags(data.tags);
                    } else if (typeof data.tags === "string") {
                        setTags(data.tags.split(",").map({
                            "WriteForm.useEffect": (t)=>t.trim()
                        }["WriteForm.useEffect"]).filter(Boolean));
                    }
                }
            })["WriteForm.useEffect"]();
        }
    }["WriteForm.useEffect"], [
        postId,
        router,
        supabase
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "max-w-4xl mx-auto",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-6",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-3xl font-light tracking-tight",
                            children: "Write a Post"
                        }, void 0, false, {
                            fileName: "[project]/learn-next/final/src/components/post/WriteForm.tsx",
                            lineNumber: 161,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-gray-400 text-sm",
                            children: "Share your thoughts with the world"
                        }, void 0, false, {
                            fileName: "[project]/learn-next/final/src/components/post/WriteForm.tsx",
                            lineNumber: 162,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/learn-next/final/src/components/post/WriteForm.tsx",
                    lineNumber: 160,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-2",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "text",
                                placeholder: "Title",
                                className: "w-full px-4 py-3 rounded-lg bg-gray-900/30 border border-gray-800 focus:border-gray-700 focus:outline-none font-light placeholder:text-gray-600",
                                value: title,
                                onChange: (e)=>setTitle(e.target.value)
                            }, void 0, false, {
                                fileName: "[project]/learn-next/final/src/components/post/WriteForm.tsx",
                                lineNumber: 169,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/learn-next/final/src/components/post/WriteForm.tsx",
                            lineNumber: 168,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-sm text-gray-400",
                                    children: "Content (Markdown)"
                                }, void 0, false, {
                                    fileName: "[project]/learn-next/final/src/components/post/WriteForm.tsx",
                                    lineNumber: 179,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                    placeholder: "Write your post in markdown...  ## Heading 2 ### Heading 3  **bold text** *italic text*  - List item 1 - List item 2",
                                    rows: 20,
                                    className: "w-full px-4 py-3 rounded-lg bg-gray-900/30 border border-gray-800 focus:border-gray-700 focus:outline-none text-sm font-mono resize-none leading-relaxed",
                                    value: content,
                                    onChange: (e)=>setContent(e.target.value)
                                }, void 0, false, {
                                    fileName: "[project]/learn-next/final/src/components/post/WriteForm.tsx",
                                    lineNumber: 182,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/learn-next/final/src/components/post/WriteForm.tsx",
                            lineNumber: 178,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-sm text-gray-400",
                                    children: "Tags"
                                }, void 0, false, {
                                    fileName: "[project]/learn-next/final/src/components/post/WriteForm.tsx",
                                    lineNumber: 200,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            placeholder: "Add a tag",
                                            value: tagInput,
                                            onChange: (e)=>setTagInput(e.target.value),
                                            onKeyDown: (e)=>{
                                                if (e.key === "Enter") {
                                                    e.preventDefault();
                                                    addTag();
                                                }
                                            },
                                            className: "flex-1 px-4 py-2 rounded-lg bg-gray-900/30 border border-gray-800 focus:border-gray-700 focus:outline-none text-sm"
                                        }, void 0, false, {
                                            fileName: "[project]/learn-next/final/src/components/post/WriteForm.tsx",
                                            lineNumber: 202,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: addTag,
                                            className: "px-4 py-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors text-sm",
                                            children: "Add"
                                        }, void 0, false, {
                                            fileName: "[project]/learn-next/final/src/components/post/WriteForm.tsx",
                                            lineNumber: 215,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/learn-next/final/src/components/post/WriteForm.tsx",
                                    lineNumber: 201,
                                    columnNumber: 13
                                }, this),
                                tags.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-wrap gap-2 mt-2",
                                    children: tags.map((tag)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "flex items-center gap-1 px-2 py-1 rounded bg-gray-800 text-gray-300 text-xs",
                                            children: [
                                                tag,
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    onClick: ()=>removeTag(tag),
                                                    className: "hover:text-white",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                        size: 12
                                                    }, void 0, false, {
                                                        fileName: "[project]/learn-next/final/src/components/post/WriteForm.tsx",
                                                        lineNumber: 236,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/learn-next/final/src/components/post/WriteForm.tsx",
                                                    lineNumber: 231,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, tag, true, {
                                            fileName: "[project]/learn-next/final/src/components/post/WriteForm.tsx",
                                            lineNumber: 226,
                                            columnNumber: 19
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/learn-next/final/src/components/post/WriteForm.tsx",
                                    lineNumber: 224,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/learn-next/final/src/components/post/WriteForm.tsx",
                            lineNumber: 199,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex gap-3 pt-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "px-6 py-2 rounded-lg bg-gray-700 hover:bg-gray-600 transition-colors text-sm",
                                    onClick: handlePublish,
                                    disabled: submitting,
                                    children: submitting ? postId ? "Updating..." : "Publishing..." : postId ? "Update" : "Publish"
                                }, void 0, false, {
                                    fileName: "[project]/learn-next/final/src/components/post/WriteForm.tsx",
                                    lineNumber: 245,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "px-6 py-2 rounded-lg border border-gray-800 hover:border-gray-700 hover:bg-gray-900/50 transition-colors text-sm",
                                    children: "Save Draft"
                                }, void 0, false, {
                                    fileName: "[project]/learn-next/final/src/components/post/WriteForm.tsx",
                                    lineNumber: 258,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/learn-next/final/src/components/post/WriteForm.tsx",
                            lineNumber: 244,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/learn-next/final/src/components/post/WriteForm.tsx",
                    lineNumber: 167,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/learn-next/final/src/components/post/WriteForm.tsx",
            lineNumber: 159,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/learn-next/final/src/components/post/WriteForm.tsx",
        lineNumber: 158,
        columnNumber: 5
    }, this);
}
_s(WriteForm, "OfcnikqTJVVx53U+mTpPrSl15c0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"],
        __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = WriteForm;
var _c;
__turbopack_context__.k.register(_c, "WriteForm");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=learn-next_final_src_92aa3131._.js.map
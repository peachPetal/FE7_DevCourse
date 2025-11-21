module.exports = [
"[project]/learn-next/final/src/components/common/Pagination.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Pagination",
    ()=>Pagination
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/learn-next/final/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
function Pagination({ currentPage, totalPosts, postsPerPage, visibleRange = 1, onPageChange }) {
    const totalPages = Math.ceil(totalPosts / postsPerPage);
    // 시작/끝 페이지 계산
    const startPage = Math.max(1, currentPage - visibleRange);
    const endPage = Math.min(totalPages, currentPage + visibleRange);
    // 페이지 배열 생성
    const pages = [];
    for(let i = startPage; i <= endPage; i++){
        pages.push(i);
    }
    // 페이지 이동 핸들러
    const handlePrev = ()=>{
        if (currentPage > 1) onPageChange(currentPage - 1);
    };
    const handleNext = ()=>{
        if (currentPage < totalPages) onPageChange(currentPage + 1);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex justify-center gap-2 pt-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: handlePrev,
                disabled: currentPage === 1,
                className: `px-3 py-1 rounded text-sm transition-colors ${currentPage === 1 ? "bg-gray-900 text-gray-600 cursor-not-allowed" : "bg-gray-800 text-gray-400 hover:bg-gray-700"}`,
                children: "Previous"
            }, void 0, false, {
                fileName: "[project]/learn-next/final/src/components/common/Pagination.tsx",
                lineNumber: 42,
                columnNumber: 7
            }, this),
            pages.map((page)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: ()=>onPageChange(page),
                    className: `px-3 py-1 rounded text-sm transition-colors ${page === currentPage ? "bg-gray-700 text-white" : "bg-gray-800 text-gray-400 hover:bg-gray-700"}`,
                    children: page
                }, page, false, {
                    fileName: "[project]/learn-next/final/src/components/common/Pagination.tsx",
                    lineNumber: 56,
                    columnNumber: 9
                }, this)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: handleNext,
                disabled: currentPage === totalPages,
                className: `px-3 py-1 rounded text-sm transition-colors ${currentPage === totalPages ? "bg-gray-900 text-gray-600 cursor-not-allowed" : "bg-gray-800 text-gray-400 hover:bg-gray-700"}`,
                children: "Next"
            }, void 0, false, {
                fileName: "[project]/learn-next/final/src/components/common/Pagination.tsx",
                lineNumber: 70,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/learn-next/final/src/components/common/Pagination.tsx",
        lineNumber: 40,
        columnNumber: 5
    }, this);
}
}),
"[project]/learn-next/final/src/components/main/MainPageWrapper.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MainPageWrapper
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/learn-next/final/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/learn-next/final/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)"); // 💡 useEffect 추가
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$src$2f$components$2f$common$2f$Pagination$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/learn-next/final/src/components/common/Pagination.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/learn-next/final/node_modules/next/navigation.js [app-ssr] (ecmascript)"); // 💡 useRouter 추가
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$src$2f$utils$2f$supabase$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/learn-next/final/src/utils/supabase/client.ts [app-ssr] (ecmascript)"); // 💡 supabase client 추가
"use client";
;
;
;
;
;
function MainPageWrapper({ totalPosts, currentPage, postsPerPage }) {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])(); // 💡 router 사용
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$src$2f$utils$2f$supabase$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createClient"])();
        // 1. posts 채널 구독
        const postsChannel = supabase.channel("public:posts") // 💡 채널 이름 1
        .on("postgres_changes", {
            event: "*",
            schema: "public",
            table: "posts"
        }, (payload)=>{
            console.log("Posts table changed!", payload);
            router.refresh();
        }).subscribe();
        // 2. [추가] comments 채널 구독
        const commentsChannel = supabase.channel("public:comments").on("postgres_changes", {
            event: "*",
            schema: "public",
            table: "comments"
        }, (payload)=>{
            console.log("Comments table changed!", payload);
            // 💡 댓글이 변경되어도 페이지 새로고침
            router.refresh();
        }).subscribe();
        // 3. [수정] 컴포넌트가 사라질 때 "두 채널 모두" 구독 해제
        return ()=>{
            supabase.removeChannel(postsChannel);
            supabase.removeChannel(commentsChannel);
        };
    }, [
        router
    ]);
    const handlePageChange = (newPage)=>{
        router.push(`/?page=${newPage}`);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$learn$2d$next$2f$final$2f$src$2f$components$2f$common$2f$Pagination$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Pagination"], {
            currentPage: currentPage,
            totalPosts: totalPosts,
            postsPerPage: postsPerPage,
            visibleRange: 2,
            onPageChange: handlePageChange
        }, void 0, false, {
            fileName: "[project]/learn-next/final/src/components/main/MainPageWrapper.tsx",
            lineNumber: 70,
            columnNumber: 7
        }, this)
    }, void 0, false);
}
}),
];

//# sourceMappingURL=learn-next_final_src_components_7c81559b._.js.map
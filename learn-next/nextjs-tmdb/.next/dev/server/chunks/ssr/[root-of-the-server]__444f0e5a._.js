module.exports = [
"[project]/FE7_DevCourse/learn-next/nextjs-tmdb/src/app/favicon.ico.mjs { IMAGE => \"[project]/FE7_DevCourse/learn-next/nextjs-tmdb/src/app/favicon.ico (static in ecmascript, tag client)\" } [app-rsc] (structured image object, ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/FE7_DevCourse/learn-next/nextjs-tmdb/src/app/favicon.ico.mjs { IMAGE => \"[project]/FE7_DevCourse/learn-next/nextjs-tmdb/src/app/favicon.ico (static in ecmascript, tag client)\" } [app-rsc] (structured image object, ecmascript)"));
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/FE7_DevCourse/learn-next/nextjs-tmdb/src/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/FE7_DevCourse/learn-next/nextjs-tmdb/src/app/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/FE7_DevCourse/learn-next/nextjs-tmdb/src/app/(main)/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/FE7_DevCourse/learn-next/nextjs-tmdb/src/app/(main)/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/FE7_DevCourse/learn-next/nextjs-tmdb/src/libs/api/movie.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getMovieCreditData",
    ()=>getMovieCreditData,
    "getMovieData",
    ()=>getMovieData,
    "getMovieDetailData",
    ()=>getMovieDetailData,
    "getMovieMoreData",
    ()=>getMovieMoreData,
    "getMovieVideoData",
    ()=>getMovieVideoData
]);
const url = "https://api.themoviedb.org/3";
const options = {
    method: "GET",
    headers: {
        accept: "application/json",
        Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNWM2NmI4NWQxM2M0Yzk1NzJlYzhlNzQ1NjgwMzY5NSIsIm5iZiI6MTc1ODY5OTc0MC4yMDEsInN1YiI6IjY4ZDNhMGRjY2E3MjdjNzFkMTcxOWIyZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.E-Wm-zl47MgP75RW36u6py-jgjTw5UsPjNLKwSQlJHQ"
    }
};
const getMovieData = async (path, genres = "")=>{
    if (path === "discover/movie") {
        return await (await fetch(`${url}/${path}?with_genres=${genres}`, {
            ...options,
            next: {
                revalidate: 60 * 60 * 24
            }
        })).json();
    } else {
        return await (await fetch(`${url}/movie/${path}`, {
            ...options,
            next: {
                revalidate: 60 * 60
            }
        })).json();
    }
};
const getMovieVideoData = async (id)=>{
    return await (await fetch(`${url}/movie/${id}/videos`, {
        ...options,
        next: {
            revalidate: 60 * 60
        }
    })).json();
};
const getMovieDetailData = async (id)=>{
    return await (await fetch(`${url}/movie/${id}`, {
        ...options,
        next: {
            revalidate: 60 * 60 * 24
        }
    })).json();
};
const getMovieCreditData = async (id)=>{
    return await (await fetch(`${url}/movie/${id}/credits`, {
        ...options,
        next: {
            revalidate: 60 * 60 * 24
        }
    })).json();
};
const getMovieMoreData = async (page = 1, type = "now_playing", keyword = "")=>{
    console.log(keyword);
    if (keyword) {
        // 검색 API
        console.log(`${url}/search/movie?query=${encodeURIComponent(keyword)}&page=${page}`);
        return await (await fetch(`${url}/search/movie?query=${encodeURIComponent(keyword)}&page=${page}`, {
            ...options,
            next: {
                revalidate: 60 * 60 * 24
            }
        })).json();
    } else {
        console.log(`${url}/movie/${type}?page=${page}`);
        // 더보기
        return await (await fetch(`${url}/movie/${type}?page=${page}`, {
            ...options
        })).json();
    }
};
}),
"[project]/FE7_DevCourse/learn-next/nextjs-tmdb/src/components/main/MainBanner.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MainBanner
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$FE7_DevCourse$2f$learn$2d$next$2f$nextjs$2d$tmdb$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/FE7_DevCourse/learn-next/nextjs-tmdb/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$FE7_DevCourse$2f$learn$2d$next$2f$nextjs$2d$tmdb$2f$src$2f$libs$2f$api$2f$movie$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/FE7_DevCourse/learn-next/nextjs-tmdb/src/libs/api/movie.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$FE7_DevCourse$2f$learn$2d$next$2f$nextjs$2d$tmdb$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/FE7_DevCourse/learn-next/nextjs-tmdb/node_modules/next/dist/client/app-dir/link.react-server.js [app-rsc] (ecmascript)");
;
;
;
async function MainBanner({ randomNumber }) {
    const { results: movies } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$FE7_DevCourse$2f$learn$2d$next$2f$nextjs$2d$tmdb$2f$src$2f$libs$2f$api$2f$movie$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getMovieData"])("upcoming");
    const randomMovie = ()=>{
        const movieFilter = movies.filter((movie)=>movie.overview);
        const randomIndex = Math.floor(randomNumber * movieFilter.length);
        return movieFilter[randomIndex];
    };
    const random = randomMovie();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$FE7_DevCourse$2f$learn$2d$next$2f$nextjs$2d$tmdb$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$FE7_DevCourse$2f$learn$2d$next$2f$nextjs$2d$tmdb$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$FE7_DevCourse$2f$learn$2d$next$2f$nextjs$2d$tmdb$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "release",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$FE7_DevCourse$2f$learn$2d$next$2f$nextjs$2d$tmdb$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "release-item",
                style: {
                    backgroundImage: `url('https://image.tmdb.org/t/p/w500/${random.poster_path}')`
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$FE7_DevCourse$2f$learn$2d$next$2f$nextjs$2d$tmdb$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "release__text",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$FE7_DevCourse$2f$learn$2d$next$2f$nextjs$2d$tmdb$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                            className: "release__category",
                            children: "NEW RELEASE"
                        }, void 0, false, {
                            fileName: "[project]/FE7_DevCourse/learn-next/nextjs-tmdb/src/components/main/MainBanner.tsx",
                            lineNumber: 29,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$FE7_DevCourse$2f$learn$2d$next$2f$nextjs$2d$tmdb$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "release__title",
                            children: random.title
                        }, void 0, false, {
                            fileName: "[project]/FE7_DevCourse/learn-next/nextjs-tmdb/src/components/main/MainBanner.tsx",
                            lineNumber: 30,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$FE7_DevCourse$2f$learn$2d$next$2f$nextjs$2d$tmdb$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "release__desc",
                            children: random.overview
                        }, void 0, false, {
                            fileName: "[project]/FE7_DevCourse/learn-next/nextjs-tmdb/src/components/main/MainBanner.tsx",
                            lineNumber: 31,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$FE7_DevCourse$2f$learn$2d$next$2f$nextjs$2d$tmdb$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$FE7_DevCourse$2f$learn$2d$next$2f$nextjs$2d$tmdb$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                            href: `/detail/${random.id}`,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$FE7_DevCourse$2f$learn$2d$next$2f$nextjs$2d$tmdb$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "release__btn",
                                children: "자세히보기"
                            }, void 0, false, {
                                fileName: "[project]/FE7_DevCourse/learn-next/nextjs-tmdb/src/components/main/MainBanner.tsx",
                                lineNumber: 33,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/FE7_DevCourse/learn-next/nextjs-tmdb/src/components/main/MainBanner.tsx",
                            lineNumber: 32,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/FE7_DevCourse/learn-next/nextjs-tmdb/src/components/main/MainBanner.tsx",
                    lineNumber: 28,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/FE7_DevCourse/learn-next/nextjs-tmdb/src/components/main/MainBanner.tsx",
                lineNumber: 22,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/FE7_DevCourse/learn-next/nextjs-tmdb/src/components/main/MainBanner.tsx",
            lineNumber: 21,
            columnNumber: 7
        }, this)
    }, void 0, false);
}
}),
"[project]/FE7_DevCourse/learn-next/nextjs-tmdb/src/components/main/MainBannerLoader.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MainBannerLoader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$FE7_DevCourse$2f$learn$2d$next$2f$nextjs$2d$tmdb$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/FE7_DevCourse/learn-next/nextjs-tmdb/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
;
function MainBannerLoader() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$FE7_DevCourse$2f$learn$2d$next$2f$nextjs$2d$tmdb$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$FE7_DevCourse$2f$learn$2d$next$2f$nextjs$2d$tmdb$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$FE7_DevCourse$2f$learn$2d$next$2f$nextjs$2d$tmdb$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "release-item",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$FE7_DevCourse$2f$learn$2d$next$2f$nextjs$2d$tmdb$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "release__text",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$FE7_DevCourse$2f$learn$2d$next$2f$nextjs$2d$tmdb$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "hero-badge skeleton-shimmer"
                    }, void 0, false, {
                        fileName: "[project]/FE7_DevCourse/learn-next/nextjs-tmdb/src/components/main/MainBannerLoader.tsx",
                        lineNumber: 6,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$FE7_DevCourse$2f$learn$2d$next$2f$nextjs$2d$tmdb$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "hero-title skeleton-shimmer"
                    }, void 0, false, {
                        fileName: "[project]/FE7_DevCourse/learn-next/nextjs-tmdb/src/components/main/MainBannerLoader.tsx",
                        lineNumber: 7,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$FE7_DevCourse$2f$learn$2d$next$2f$nextjs$2d$tmdb$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "hero-description",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$FE7_DevCourse$2f$learn$2d$next$2f$nextjs$2d$tmdb$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "desc-line skeleton-shimmer"
                            }, void 0, false, {
                                fileName: "[project]/FE7_DevCourse/learn-next/nextjs-tmdb/src/components/main/MainBannerLoader.tsx",
                                lineNumber: 9,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$FE7_DevCourse$2f$learn$2d$next$2f$nextjs$2d$tmdb$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "desc-line skeleton-shimmer"
                            }, void 0, false, {
                                fileName: "[project]/FE7_DevCourse/learn-next/nextjs-tmdb/src/components/main/MainBannerLoader.tsx",
                                lineNumber: 10,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$FE7_DevCourse$2f$learn$2d$next$2f$nextjs$2d$tmdb$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "desc-line skeleton-shimmer short"
                            }, void 0, false, {
                                fileName: "[project]/FE7_DevCourse/learn-next/nextjs-tmdb/src/components/main/MainBannerLoader.tsx",
                                lineNumber: 11,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/FE7_DevCourse/learn-next/nextjs-tmdb/src/components/main/MainBannerLoader.tsx",
                        lineNumber: 8,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$FE7_DevCourse$2f$learn$2d$next$2f$nextjs$2d$tmdb$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "hero-button skeleton-shimmer"
                    }, void 0, false, {
                        fileName: "[project]/FE7_DevCourse/learn-next/nextjs-tmdb/src/components/main/MainBannerLoader.tsx",
                        lineNumber: 13,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/FE7_DevCourse/learn-next/nextjs-tmdb/src/components/main/MainBannerLoader.tsx",
                lineNumber: 5,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/FE7_DevCourse/learn-next/nextjs-tmdb/src/components/main/MainBannerLoader.tsx",
            lineNumber: 4,
            columnNumber: 7
        }, this)
    }, void 0, false);
}
}),
"[project]/FE7_DevCourse/learn-next/nextjs-tmdb/src/components/movie/MovieList.tsx [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$FE7_DevCourse$2f$learn$2d$next$2f$nextjs$2d$tmdb$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/FE7_DevCourse/learn-next/nextjs-tmdb/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$FE7_DevCourse$2f$learn$2d$next$2f$nextjs$2d$tmdb$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/FE7_DevCourse/learn-next/nextjs-tmdb/src/components/movie/MovieList.tsx <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/FE7_DevCourse/learn-next/nextjs-tmdb/src/components/movie/MovieList.tsx <module evaluation>", "default");
}),
"[project]/FE7_DevCourse/learn-next/nextjs-tmdb/src/components/movie/MovieList.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$FE7_DevCourse$2f$learn$2d$next$2f$nextjs$2d$tmdb$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/FE7_DevCourse/learn-next/nextjs-tmdb/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$FE7_DevCourse$2f$learn$2d$next$2f$nextjs$2d$tmdb$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/FE7_DevCourse/learn-next/nextjs-tmdb/src/components/movie/MovieList.tsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/FE7_DevCourse/learn-next/nextjs-tmdb/src/components/movie/MovieList.tsx", "default");
}),
"[project]/FE7_DevCourse/learn-next/nextjs-tmdb/src/components/movie/MovieList.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$FE7_DevCourse$2f$learn$2d$next$2f$nextjs$2d$tmdb$2f$src$2f$components$2f$movie$2f$MovieList$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/FE7_DevCourse/learn-next/nextjs-tmdb/src/components/movie/MovieList.tsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$FE7_DevCourse$2f$learn$2d$next$2f$nextjs$2d$tmdb$2f$src$2f$components$2f$movie$2f$MovieList$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/FE7_DevCourse/learn-next/nextjs-tmdb/src/components/movie/MovieList.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$FE7_DevCourse$2f$learn$2d$next$2f$nextjs$2d$tmdb$2f$src$2f$components$2f$movie$2f$MovieList$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/FE7_DevCourse/learn-next/nextjs-tmdb/src/components/main/MainMovie.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MainMovie
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$FE7_DevCourse$2f$learn$2d$next$2f$nextjs$2d$tmdb$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/FE7_DevCourse/learn-next/nextjs-tmdb/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$FE7_DevCourse$2f$learn$2d$next$2f$nextjs$2d$tmdb$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/FE7_DevCourse/learn-next/nextjs-tmdb/node_modules/next/dist/client/app-dir/link.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$FE7_DevCourse$2f$learn$2d$next$2f$nextjs$2d$tmdb$2f$src$2f$components$2f$movie$2f$MovieList$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/FE7_DevCourse/learn-next/nextjs-tmdb/src/components/movie/MovieList.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$FE7_DevCourse$2f$learn$2d$next$2f$nextjs$2d$tmdb$2f$src$2f$libs$2f$api$2f$movie$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/FE7_DevCourse/learn-next/nextjs-tmdb/src/libs/api/movie.ts [app-rsc] (ecmascript)");
;
;
;
;
;
async function MainMovie({ type, title, subTitle, genres }) {
    const { results } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$FE7_DevCourse$2f$learn$2d$next$2f$nextjs$2d$tmdb$2f$src$2f$libs$2f$api$2f$movie$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getMovieData"])(type, genres);
    if (!results || results.length === 0) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$FE7_DevCourse$2f$learn$2d$next$2f$nextjs$2d$tmdb$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$FE7_DevCourse$2f$learn$2d$next$2f$nextjs$2d$tmdb$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$FE7_DevCourse$2f$learn$2d$next$2f$nextjs$2d$tmdb$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "movie",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$FE7_DevCourse$2f$learn$2d$next$2f$nextjs$2d$tmdb$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    className: "movie-category",
                    children: subTitle
                }, void 0, false, {
                    fileName: "[project]/FE7_DevCourse/learn-next/nextjs-tmdb/src/components/main/MainMovie.tsx",
                    lineNumber: 22,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$FE7_DevCourse$2f$learn$2d$next$2f$nextjs$2d$tmdb$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                    className: "movie-subtext",
                    children: [
                        title,
                        " ",
                        type !== "discover/movie" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$FE7_DevCourse$2f$learn$2d$next$2f$nextjs$2d$tmdb$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$FE7_DevCourse$2f$learn$2d$next$2f$nextjs$2d$tmdb$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                            href: `/movie/${type}`,
                            children: "더보기"
                        }, void 0, false, {
                            fileName: "[project]/FE7_DevCourse/learn-next/nextjs-tmdb/src/components/main/MainMovie.tsx",
                            lineNumber: 26,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/FE7_DevCourse/learn-next/nextjs-tmdb/src/components/main/MainMovie.tsx",
                    lineNumber: 23,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$FE7_DevCourse$2f$learn$2d$next$2f$nextjs$2d$tmdb$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "movie-list",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$FE7_DevCourse$2f$learn$2d$next$2f$nextjs$2d$tmdb$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$FE7_DevCourse$2f$learn$2d$next$2f$nextjs$2d$tmdb$2f$src$2f$components$2f$movie$2f$MovieList$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                        movies: results
                    }, void 0, false, {
                        fileName: "[project]/FE7_DevCourse/learn-next/nextjs-tmdb/src/components/main/MainMovie.tsx",
                        lineNumber: 30,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/FE7_DevCourse/learn-next/nextjs-tmdb/src/components/main/MainMovie.tsx",
                    lineNumber: 29,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/FE7_DevCourse/learn-next/nextjs-tmdb/src/components/main/MainMovie.tsx",
            lineNumber: 21,
            columnNumber: 7
        }, this)
    }, void 0, false);
}
}),
"[project]/FE7_DevCourse/learn-next/nextjs-tmdb/src/components/main/MovieLoader.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MovieLoader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$FE7_DevCourse$2f$learn$2d$next$2f$nextjs$2d$tmdb$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/FE7_DevCourse/learn-next/nextjs-tmdb/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
;
function MovieLoader({ title, subTitle }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$FE7_DevCourse$2f$learn$2d$next$2f$nextjs$2d$tmdb$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$FE7_DevCourse$2f$learn$2d$next$2f$nextjs$2d$tmdb$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$FE7_DevCourse$2f$learn$2d$next$2f$nextjs$2d$tmdb$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "movie",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$FE7_DevCourse$2f$learn$2d$next$2f$nextjs$2d$tmdb$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    className: "movie-category",
                    children: subTitle
                }, void 0, false, {
                    fileName: "[project]/FE7_DevCourse/learn-next/nextjs-tmdb/src/components/main/MovieLoader.tsx",
                    lineNumber: 11,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$FE7_DevCourse$2f$learn$2d$next$2f$nextjs$2d$tmdb$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                    className: "movie-subtext",
                    children: title
                }, void 0, false, {
                    fileName: "[project]/FE7_DevCourse/learn-next/nextjs-tmdb/src/components/main/MovieLoader.tsx",
                    lineNumber: 12,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$FE7_DevCourse$2f$learn$2d$next$2f$nextjs$2d$tmdb$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "movie-list",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$FE7_DevCourse$2f$learn$2d$next$2f$nextjs$2d$tmdb$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "movie-list__item",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$FE7_DevCourse$2f$learn$2d$next$2f$nextjs$2d$tmdb$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "skeleton-list-item ui0"
                        }, void 0, false, {
                            fileName: "[project]/FE7_DevCourse/learn-next/nextjs-tmdb/src/components/main/MovieLoader.tsx",
                            lineNumber: 15,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/FE7_DevCourse/learn-next/nextjs-tmdb/src/components/main/MovieLoader.tsx",
                        lineNumber: 14,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/FE7_DevCourse/learn-next/nextjs-tmdb/src/components/main/MovieLoader.tsx",
                    lineNumber: 13,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/FE7_DevCourse/learn-next/nextjs-tmdb/src/components/main/MovieLoader.tsx",
            lineNumber: 10,
            columnNumber: 7
        }, this)
    }, void 0, false);
}
}),
"[project]/FE7_DevCourse/learn-next/nextjs-tmdb/src/app/(main)/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>page
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$FE7_DevCourse$2f$learn$2d$next$2f$nextjs$2d$tmdb$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/FE7_DevCourse/learn-next/nextjs-tmdb/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$FE7_DevCourse$2f$learn$2d$next$2f$nextjs$2d$tmdb$2f$src$2f$components$2f$main$2f$MainBanner$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/FE7_DevCourse/learn-next/nextjs-tmdb/src/components/main/MainBanner.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$FE7_DevCourse$2f$learn$2d$next$2f$nextjs$2d$tmdb$2f$src$2f$components$2f$main$2f$MainBannerLoader$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/FE7_DevCourse/learn-next/nextjs-tmdb/src/components/main/MainBannerLoader.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$FE7_DevCourse$2f$learn$2d$next$2f$nextjs$2d$tmdb$2f$src$2f$components$2f$main$2f$MainMovie$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/FE7_DevCourse/learn-next/nextjs-tmdb/src/components/main/MainMovie.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$FE7_DevCourse$2f$learn$2d$next$2f$nextjs$2d$tmdb$2f$src$2f$components$2f$main$2f$MovieLoader$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/FE7_DevCourse/learn-next/nextjs-tmdb/src/components/main/MovieLoader.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$FE7_DevCourse$2f$learn$2d$next$2f$nextjs$2d$tmdb$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/FE7_DevCourse/learn-next/nextjs-tmdb/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js [app-rsc] (ecmascript)");
;
;
;
;
;
;
function page() {
    const randomNumber = Math.random();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$FE7_DevCourse$2f$learn$2d$next$2f$nextjs$2d$tmdb$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$FE7_DevCourse$2f$learn$2d$next$2f$nextjs$2d$tmdb$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$FE7_DevCourse$2f$learn$2d$next$2f$nextjs$2d$tmdb$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$FE7_DevCourse$2f$learn$2d$next$2f$nextjs$2d$tmdb$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Suspense"], {
                fallback: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$FE7_DevCourse$2f$learn$2d$next$2f$nextjs$2d$tmdb$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$FE7_DevCourse$2f$learn$2d$next$2f$nextjs$2d$tmdb$2f$src$2f$components$2f$main$2f$MainBannerLoader$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/FE7_DevCourse/learn-next/nextjs-tmdb/src/app/(main)/page.tsx",
                    lineNumber: 13,
                    columnNumber: 27
                }, void 0),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$FE7_DevCourse$2f$learn$2d$next$2f$nextjs$2d$tmdb$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$FE7_DevCourse$2f$learn$2d$next$2f$nextjs$2d$tmdb$2f$src$2f$components$2f$main$2f$MainBanner$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                    randomNumber: randomNumber
                }, void 0, false, {
                    fileName: "[project]/FE7_DevCourse/learn-next/nextjs-tmdb/src/app/(main)/page.tsx",
                    lineNumber: 14,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/FE7_DevCourse/learn-next/nextjs-tmdb/src/app/(main)/page.tsx",
                lineNumber: 13,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$FE7_DevCourse$2f$learn$2d$next$2f$nextjs$2d$tmdb$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$FE7_DevCourse$2f$learn$2d$next$2f$nextjs$2d$tmdb$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Suspense"], {
                fallback: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$FE7_DevCourse$2f$learn$2d$next$2f$nextjs$2d$tmdb$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$FE7_DevCourse$2f$learn$2d$next$2f$nextjs$2d$tmdb$2f$src$2f$components$2f$main$2f$MovieLoader$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                    title: "상영중인 영화",
                    subTitle: "Now Movies"
                }, void 0, false, {
                    fileName: "[project]/FE7_DevCourse/learn-next/nextjs-tmdb/src/app/(main)/page.tsx",
                    lineNumber: 17,
                    columnNumber: 19
                }, void 0),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$FE7_DevCourse$2f$learn$2d$next$2f$nextjs$2d$tmdb$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$FE7_DevCourse$2f$learn$2d$next$2f$nextjs$2d$tmdb$2f$src$2f$components$2f$main$2f$MainMovie$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                    title: "개봉예정 영화",
                    subTitle: "Upcoming Movies",
                    type: "upcoming"
                }, void 0, false, {
                    fileName: "[project]/FE7_DevCourse/learn-next/nextjs-tmdb/src/app/(main)/page.tsx",
                    lineNumber: 19,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/FE7_DevCourse/learn-next/nextjs-tmdb/src/app/(main)/page.tsx",
                lineNumber: 16,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$FE7_DevCourse$2f$learn$2d$next$2f$nextjs$2d$tmdb$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$FE7_DevCourse$2f$learn$2d$next$2f$nextjs$2d$tmdb$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Suspense"], {
                fallback: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$FE7_DevCourse$2f$learn$2d$next$2f$nextjs$2d$tmdb$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$FE7_DevCourse$2f$learn$2d$next$2f$nextjs$2d$tmdb$2f$src$2f$components$2f$main$2f$MovieLoader$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                    title: "상영중인 영화",
                    subTitle: "Now Movies"
                }, void 0, false, {
                    fileName: "[project]/FE7_DevCourse/learn-next/nextjs-tmdb/src/app/(main)/page.tsx",
                    lineNumber: 26,
                    columnNumber: 19
                }, void 0),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$FE7_DevCourse$2f$learn$2d$next$2f$nextjs$2d$tmdb$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$FE7_DevCourse$2f$learn$2d$next$2f$nextjs$2d$tmdb$2f$src$2f$components$2f$main$2f$MainMovie$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                    title: "상영중인 영화",
                    subTitle: "Now Movies",
                    type: "now_playing"
                }, void 0, false, {
                    fileName: "[project]/FE7_DevCourse/learn-next/nextjs-tmdb/src/app/(main)/page.tsx",
                    lineNumber: 28,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/FE7_DevCourse/learn-next/nextjs-tmdb/src/app/(main)/page.tsx",
                lineNumber: 25,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$FE7_DevCourse$2f$learn$2d$next$2f$nextjs$2d$tmdb$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$FE7_DevCourse$2f$learn$2d$next$2f$nextjs$2d$tmdb$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Suspense"], {
                fallback: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$FE7_DevCourse$2f$learn$2d$next$2f$nextjs$2d$tmdb$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$FE7_DevCourse$2f$learn$2d$next$2f$nextjs$2d$tmdb$2f$src$2f$components$2f$main$2f$MovieLoader$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                    title: "상영중인 영화",
                    subTitle: "Now Movies"
                }, void 0, false, {
                    fileName: "[project]/FE7_DevCourse/learn-next/nextjs-tmdb/src/app/(main)/page.tsx",
                    lineNumber: 35,
                    columnNumber: 19
                }, void 0),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$FE7_DevCourse$2f$learn$2d$next$2f$nextjs$2d$tmdb$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$FE7_DevCourse$2f$learn$2d$next$2f$nextjs$2d$tmdb$2f$src$2f$components$2f$main$2f$MainMovie$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                    title: "인기중인 영화",
                    subTitle: "Popular Movies",
                    type: "popular"
                }, void 0, false, {
                    fileName: "[project]/FE7_DevCourse/learn-next/nextjs-tmdb/src/app/(main)/page.tsx",
                    lineNumber: 37,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/FE7_DevCourse/learn-next/nextjs-tmdb/src/app/(main)/page.tsx",
                lineNumber: 34,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
}),
"[project]/FE7_DevCourse/learn-next/nextjs-tmdb/src/app/(main)/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/FE7_DevCourse/learn-next/nextjs-tmdb/src/app/(main)/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__444f0e5a._.js.map
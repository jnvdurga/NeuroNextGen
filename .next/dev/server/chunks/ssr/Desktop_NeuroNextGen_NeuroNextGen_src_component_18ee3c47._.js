module.exports = [
"[project]/Desktop/NeuroNextGen/NeuroNextGen/src/component/HeroSection.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HeroSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NeuroNextGen$2f$NeuroNextGen$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/NeuroNextGen/NeuroNextGen/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NeuroNextGen$2f$NeuroNextGen$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/NeuroNextGen/NeuroNextGen/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NeuroNextGen$2f$NeuroNextGen$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/NeuroNextGen/NeuroNextGen/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
"use client";
;
;
;
function HeroSection({ title, highlight1, highlight2, subtitle, buttonText, buttonLink }) {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NeuroNextGen$2f$NeuroNextGen$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NeuroNextGen$2f$NeuroNextGen$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "relative flex flex-col items-center justify-center text-center px-8 py-24 sm:py-40 bg-black text-white overflow-hidden min-h-screen",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NeuroNextGen$2f$NeuroNextGen$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-10 flex flex-col items-center justify-center max-w-4xl",
                children: [
                    title && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NeuroNextGen$2f$NeuroNextGen$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NeuroNextGen$2f$NeuroNextGen$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].h1, {
                        className: "text-4xl sm:text-5xl md:text-6xl font-light leading-tight tracking-tight mb-10",
                        initial: {
                            opacity: 0,
                            y: 30
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        transition: {
                            duration: 1
                        },
                        children: [
                            title.split(" ").map((word, idx)=>{
                                const isHighlight = word === highlight1 || word === highlight2;
                                return isHighlight ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NeuroNextGen$2f$NeuroNextGen$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-blue-300 font-medium",
                                    children: word + " "
                                }, idx, false, {
                                    fileName: "[project]/Desktop/NeuroNextGen/NeuroNextGen/src/component/HeroSection.tsx",
                                    lineNumber: 44,
                                    columnNumber: 17
                                }, this) : word + " ";
                            }),
                            (highlight1 || highlight2) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NeuroNextGen$2f$NeuroNextGen$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-6 text-lg sm:text-xl font-normal text-gray-300 leading-relaxed tracking-wide",
                                children: [
                                    "Build",
                                    " ",
                                    highlight1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NeuroNextGen$2f$NeuroNextGen$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-blue-300 font-semibold",
                                        children: highlight1
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/NeuroNextGen/NeuroNextGen/src/component/HeroSection.tsx",
                                        lineNumber: 56,
                                        columnNumber: 19
                                    }, this),
                                    highlight1 && highlight2 && " and ",
                                    highlight2 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NeuroNextGen$2f$NeuroNextGen$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-blue-300 font-semibold",
                                        children: highlight2
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/NeuroNextGen/NeuroNextGen/src/component/HeroSection.tsx",
                                        lineNumber: 62,
                                        columnNumber: 19
                                    }, this),
                                    "that power your next big leap."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/NeuroNextGen/NeuroNextGen/src/component/HeroSection.tsx",
                                lineNumber: 53,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/NeuroNextGen/NeuroNextGen/src/component/HeroSection.tsx",
                        lineNumber: 32,
                        columnNumber: 11
                    }, this),
                    subtitle && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NeuroNextGen$2f$NeuroNextGen$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NeuroNextGen$2f$NeuroNextGen$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].p, {
                        className: " text-lg sm:text-xl text-gray-400 max-w-2xl leading-relaxed",
                        initial: {
                            opacity: 0
                        },
                        animate: {
                            opacity: 1
                        },
                        transition: {
                            delay: 0.5,
                            duration: 1
                        },
                        children: subtitle
                    }, void 0, false, {
                        fileName: "[project]/Desktop/NeuroNextGen/NeuroNextGen/src/component/HeroSection.tsx",
                        lineNumber: 74,
                        columnNumber: 11
                    }, this),
                    buttonText && buttonLink && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NeuroNextGen$2f$NeuroNextGen$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NeuroNextGen$2f$NeuroNextGen$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].button, {
                        className: "mt-6 px-10 py-4 bg-white text-black font-semibold rounded-lg shadow-lg hover:bg-gray-200 hover:shadow-xl transition-all duration-300 text-lg sm:text-xl",
                        whileHover: {
                            scale: 1.08
                        },
                        whileTap: {
                            scale: 0.95
                        },
                        initial: {
                            opacity: 0,
                            y: 20
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        transition: {
                            delay: 1,
                            duration: 0.8
                        },
                        onClick: ()=>router.push(buttonLink),
                        children: buttonText
                    }, void 0, false, {
                        fileName: "[project]/Desktop/NeuroNextGen/NeuroNextGen/src/component/HeroSection.tsx",
                        lineNumber: 86,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/NeuroNextGen/NeuroNextGen/src/component/HeroSection.tsx",
                lineNumber: 28,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NeuroNextGen$2f$NeuroNextGen$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent pointer-events-none"
            }, void 0, false, {
                fileName: "[project]/Desktop/NeuroNextGen/NeuroNextGen/src/component/HeroSection.tsx",
                lineNumber: 101,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/NeuroNextGen/NeuroNextGen/src/component/HeroSection.tsx",
        lineNumber: 26,
        columnNumber: 5
    }, this);
}
}),
"[project]/Desktop/NeuroNextGen/NeuroNextGen/src/component/HeadingSubTitel.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HeadingSubTitel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NeuroNextGen$2f$NeuroNextGen$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/NeuroNextGen/NeuroNextGen/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
"use client";
;
function HeadingSubTitel({ backgroundColor = "bg-black", textColor = "text-white", tagText, heading, description }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NeuroNextGen$2f$NeuroNextGen$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: `${backgroundColor} ${textColor} py-10 px-6 md:px-20 text-center`,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NeuroNextGen$2f$NeuroNextGen$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-3xl mx-auto",
            children: [
                tagText && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NeuroNextGen$2f$NeuroNextGen$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-gray-400 tracking-widest text-xs mb-4 uppercase",
                    children: tagText
                }, void 0, false, {
                    fileName: "[project]/Desktop/NeuroNextGen/NeuroNextGen/src/component/HeadingSubTitel.tsx",
                    lineNumber: 34,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NeuroNextGen$2f$NeuroNextGen$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-3xl md:text-5xl font-semibold mb-6",
                    children: heading
                }, void 0, false, {
                    fileName: "[project]/Desktop/NeuroNextGen/NeuroNextGen/src/component/HeadingSubTitel.tsx",
                    lineNumber: 38,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NeuroNextGen$2f$NeuroNextGen$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-gray-300 text-lg leading-relaxed",
                    children: description
                }, void 0, false, {
                    fileName: "[project]/Desktop/NeuroNextGen/NeuroNextGen/src/component/HeadingSubTitel.tsx",
                    lineNumber: 39,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/NeuroNextGen/NeuroNextGen/src/component/HeadingSubTitel.tsx",
            lineNumber: 32,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Desktop/NeuroNextGen/NeuroNextGen/src/component/HeadingSubTitel.tsx",
        lineNumber: 27,
        columnNumber: 5
    }, this);
}
}),
"[project]/Desktop/NeuroNextGen/NeuroNextGen/src/component/FeatureSection.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>FeaturesSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NeuroNextGen$2f$NeuroNextGen$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/NeuroNextGen/NeuroNextGen/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NeuroNextGen$2f$NeuroNextGen$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/NeuroNextGen/NeuroNextGen/node_modules/next/image.js [app-ssr] (ecmascript)");
"use client";
;
;
function FeaturesSection({ features }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NeuroNextGen$2f$NeuroNextGen$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "bg-black text-white py-24 px-8 md:px-14 lg:px-24",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NeuroNextGen$2f$NeuroNextGen$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-7xl mx-auto",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NeuroNextGen$2f$NeuroNextGen$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 justify-items-center",
                children: features.map((feature, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NeuroNextGen$2f$NeuroNextGen$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-full max-w-sm rounded-2xl bg-[#0d0d0d] border border-gray-700 p-7 hover:border-white/60 transition-all duration-300 shadow-lg hover:shadow-white/10",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NeuroNextGen$2f$NeuroNextGen$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-5 items-center mb-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NeuroNextGen$2f$NeuroNextGen$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-center",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NeuroNextGen$2f$NeuroNextGen$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NeuroNextGen$2f$NeuroNextGen$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            src: feature.icon,
                                            alt: feature.title,
                                            width: 40,
                                            height: 40,
                                            className: "rounded-full object-cover"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/NeuroNextGen/NeuroNextGen/src/component/FeatureSection.tsx",
                                            lineNumber: 23,
                                            columnNumber: 3
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/NeuroNextGen/NeuroNextGen/src/component/FeatureSection.tsx",
                                        lineNumber: 22,
                                        columnNumber: 1
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NeuroNextGen$2f$NeuroNextGen$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NeuroNextGen$2f$NeuroNextGen$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-lg md:text-xl font-semibold text-white tracking-wide",
                                                children: feature.title
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/NeuroNextGen/NeuroNextGen/src/component/FeatureSection.tsx",
                                                lineNumber: 34,
                                                columnNumber: 19
                                            }, this),
                                            feature.subtitle && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NeuroNextGen$2f$NeuroNextGen$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "inline-block bg-gray-800 text-gray-300 text-[11px] font-medium px-2.5 py-0.5 rounded-md border border-gray-600 mt-1 w-fit",
                                                children: feature.subtitle
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/NeuroNextGen/NeuroNextGen/src/component/FeatureSection.tsx",
                                                lineNumber: 38,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/NeuroNextGen/NeuroNextGen/src/component/FeatureSection.tsx",
                                        lineNumber: 33,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/NeuroNextGen/NeuroNextGen/src/component/FeatureSection.tsx",
                                lineNumber: 21,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NeuroNextGen$2f$NeuroNextGen$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-gray-300 text-sm md:text-base leading-relaxed mt-2",
                                children: feature.desc
                            }, void 0, false, {
                                fileName: "[project]/Desktop/NeuroNextGen/NeuroNextGen/src/component/FeatureSection.tsx",
                                lineNumber: 44,
                                columnNumber: 15
                            }, this)
                        ]
                    }, i, true, {
                        fileName: "[project]/Desktop/NeuroNextGen/NeuroNextGen/src/component/FeatureSection.tsx",
                        lineNumber: 17,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/Desktop/NeuroNextGen/NeuroNextGen/src/component/FeatureSection.tsx",
                lineNumber: 15,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/Desktop/NeuroNextGen/NeuroNextGen/src/component/FeatureSection.tsx",
            lineNumber: 14,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Desktop/NeuroNextGen/NeuroNextGen/src/component/FeatureSection.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
}),
"[project]/Desktop/NeuroNextGen/NeuroNextGen/src/component/SideBySide.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SideBySide
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NeuroNextGen$2f$NeuroNextGen$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/NeuroNextGen/NeuroNextGen/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NeuroNextGen$2f$NeuroNextGen$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/NeuroNextGen/NeuroNextGen/node_modules/next/image.js [app-ssr] (ecmascript)");
"use client";
;
;
function SideBySide({ title, imageSrc, imageAlt = "Information image", reverse = false, backgroundColor = "bg-black", textColor = "text-white", gradientFrom = "from-black", gradientTo = "to-gray-800" }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NeuroNextGen$2f$NeuroNextGen$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: `${backgroundColor} ${textColor} px-6 md:px-20 flex flex-col ${reverse ? "md:flex-row-reverse" : "md:flex-row"} items-center justify-between gap-12`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NeuroNextGen$2f$NeuroNextGen$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `md:w-1/2 h-[500px] flex justify-center items-center bg-gradient-to-r ${gradientFrom} ${gradientTo} rounded-2xl p-6`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NeuroNextGen$2f$NeuroNextGen$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                    className: "text-xl md:text-2xl font-light leading-relaxed text-gray-200 text-center md:text-left",
                    children: title
                }, void 0, false, {
                    fileName: "[project]/Desktop/NeuroNextGen/NeuroNextGen/src/component/SideBySide.tsx",
                    lineNumber: 35,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/NeuroNextGen/NeuroNextGen/src/component/SideBySide.tsx",
                lineNumber: 32,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NeuroNextGen$2f$NeuroNextGen$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "md:w-1/2 flex justify-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NeuroNextGen$2f$NeuroNextGen$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "rounded-2xl overflow-hidden bg-[#0f0f0f]  shadow-[0_0_80px_rgba(255,255,255,0.05)] h-[500px] flex items-center justify-center",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NeuroNextGen$2f$NeuroNextGen$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NeuroNextGen$2f$NeuroNextGen$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        src: imageSrc,
                        alt: imageAlt,
                        width: 500,
                        height: 500,
                        className: "rounded-2xl object-contain w-full h-full"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/NeuroNextGen/NeuroNextGen/src/component/SideBySide.tsx",
                        lineNumber: 43,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Desktop/NeuroNextGen/NeuroNextGen/src/component/SideBySide.tsx",
                    lineNumber: 42,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/NeuroNextGen/NeuroNextGen/src/component/SideBySide.tsx",
                lineNumber: 41,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/NeuroNextGen/NeuroNextGen/src/component/SideBySide.tsx",
        lineNumber: 26,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=Desktop_NeuroNextGen_NeuroNextGen_src_component_18ee3c47._.js.map
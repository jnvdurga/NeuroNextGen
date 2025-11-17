(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Desktop/NeuroNextGen/NeuroNextGen/src/component/HeroSideBySide.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HeroSideBySide
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NeuroNextGen$2f$NeuroNextGen$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/NeuroNextGen/NeuroNextGen/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NeuroNextGen$2f$NeuroNextGen$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/NeuroNextGen/NeuroNextGen/node_modules/next/image.js [app-client] (ecmascript)");
"use client";
;
;
function HeroSideBySide({ title, subtitle, buttonText, buttonLink = "/form", imageSrc, videoSrc, bottomText, bottomLinkText, bottomLink = "#", reverse = false }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NeuroNextGen$2f$NeuroNextGen$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: `bg-black text-white min-h-screen w-full flex flex-col md:flex-row items-center justify-center
      px-4 sm:px-6 md:px-10 lg:px-12 py-14 md:py-18
      ${reverse ? "md:flex-row-reverse" : ""}`,
        children: [
            (title || subtitle || buttonText || bottomText) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NeuroNextGen$2f$NeuroNextGen$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `w-full md:w-1/2 flex flex-col justify-center text-center items-center md:items-start md:text-left ${reverse ? "md:pl-12" : "md:pr-12"}`,
                children: [
                    title && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NeuroNextGen$2f$NeuroNextGen$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight",
                        children: title
                    }, void 0, false, {
                        fileName: "[project]/Desktop/NeuroNextGen/NeuroNextGen/src/component/HeroSideBySide.tsx",
                        lineNumber: 47,
                        columnNumber: 13
                    }, this),
                    subtitle && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NeuroNextGen$2f$NeuroNextGen$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-base sm:text-lg text-gray-300 mb-8 leading-relaxed max-w-xl mx-auto md:mx-0",
                        children: subtitle
                    }, void 0, false, {
                        fileName: "[project]/Desktop/NeuroNextGen/NeuroNextGen/src/component/HeroSideBySide.tsx",
                        lineNumber: 53,
                        columnNumber: 13
                    }, this),
                    buttonText && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NeuroNextGen$2f$NeuroNextGen$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-center md:justify-start",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NeuroNextGen$2f$NeuroNextGen$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: buttonLink,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NeuroNextGen$2f$NeuroNextGen$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "bg-white text-black px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium hover:bg-gray-200 transition-transform transform hover:scale-105 text-sm sm:text-base",
                                children: [
                                    buttonText,
                                    " →"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/NeuroNextGen/NeuroNextGen/src/component/HeroSideBySide.tsx",
                                lineNumber: 61,
                                columnNumber: 17
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Desktop/NeuroNextGen/NeuroNextGen/src/component/HeroSideBySide.tsx",
                            lineNumber: 60,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/NeuroNextGen/NeuroNextGen/src/component/HeroSideBySide.tsx",
                        lineNumber: 59,
                        columnNumber: 13
                    }, this),
                    bottomText && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NeuroNextGen$2f$NeuroNextGen$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-8 text-sm sm:text-base text-gray-400 text-center md:text-left",
                        children: [
                            bottomText,
                            " ",
                            bottomLinkText && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NeuroNextGen$2f$NeuroNextGen$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: bottomLink,
                                className: "text-white underline hover:text-gray-300",
                                children: [
                                    bottomLinkText,
                                    " →"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/NeuroNextGen/NeuroNextGen/src/component/HeroSideBySide.tsx",
                                lineNumber: 72,
                                columnNumber: 17
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/NeuroNextGen/NeuroNextGen/src/component/HeroSideBySide.tsx",
                        lineNumber: 69,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/NeuroNextGen/NeuroNextGen/src/component/HeroSideBySide.tsx",
                lineNumber: 41,
                columnNumber: 9
            }, this),
            (imageSrc || videoSrc) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NeuroNextGen$2f$NeuroNextGen$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full md:w-1/2 flex justify-center items-center mt-10 md:mt-0",
                children: imageSrc ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NeuroNextGen$2f$NeuroNextGen$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NeuroNextGen$2f$NeuroNextGen$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    src: imageSrc,
                    alt: "Hero visual",
                    width: 500,
                    height: 500,
                    className: "object-contain w-[85%] sm:w-[80%] md:w-[90%] lg:w-[500px] mx-auto rounded-2xl",
                    priority: true
                }, void 0, false, {
                    fileName: "[project]/Desktop/NeuroNextGen/NeuroNextGen/src/component/HeroSideBySide.tsx",
                    lineNumber: 90,
                    columnNumber: 13
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NeuroNextGen$2f$NeuroNextGen$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                    src: videoSrc,
                    autoPlay: true,
                    loop: true,
                    muted: true,
                    playsInline: true,
                    className: "object-cover rounded-2xl w-[85%] sm:w-[80%] md:w-[90%] lg:w-[500px] mx-auto shadow-lg"
                }, void 0, false, {
                    fileName: "[project]/Desktop/NeuroNextGen/NeuroNextGen/src/component/HeroSideBySide.tsx",
                    lineNumber: 99,
                    columnNumber: 13
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/NeuroNextGen/NeuroNextGen/src/component/HeroSideBySide.tsx",
                lineNumber: 88,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/NeuroNextGen/NeuroNextGen/src/component/HeroSideBySide.tsx",
        lineNumber: 32,
        columnNumber: 5
    }, this);
}
_c = HeroSideBySide;
var _c;
__turbopack_context__.k.register(_c, "HeroSideBySide");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/NeuroNextGen/NeuroNextGen/src/component/CardSection.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CardsSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NeuroNextGen$2f$NeuroNextGen$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/NeuroNextGen/NeuroNextGen/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NeuroNextGen$2f$NeuroNextGen$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/NeuroNextGen/NeuroNextGen/node_modules/next/image.js [app-client] (ecmascript)");
"use client";
;
;
function CardsSection({ data }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NeuroNextGen$2f$NeuroNextGen$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "bg-black text-white py-20 px-6 md:px-20",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NeuroNextGen$2f$NeuroNextGen$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid grid-cols-1 md:grid-cols-3 gap-12 justify-items-center",
            children: data.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NeuroNextGen$2f$NeuroNextGen$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col items-center text-center max-w-sm",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NeuroNextGen$2f$NeuroNextGen$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "rounded-2xl overflow-hidden shadow-lg",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NeuroNextGen$2f$NeuroNextGen$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NeuroNextGen$2f$NeuroNextGen$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                src: item.image,
                                alt: item.title,
                                width: 400,
                                height: 300,
                                className: "object-cover w-full h-[250px]"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/NeuroNextGen/NeuroNextGen/src/component/CardSection.tsx",
                                lineNumber: 25,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Desktop/NeuroNextGen/NeuroNextGen/src/component/CardSection.tsx",
                            lineNumber: 24,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NeuroNextGen$2f$NeuroNextGen$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-xl font-semibold mt-6",
                            children: item.title
                        }, void 0, false, {
                            fileName: "[project]/Desktop/NeuroNextGen/NeuroNextGen/src/component/CardSection.tsx",
                            lineNumber: 33,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NeuroNextGen$2f$NeuroNextGen$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-gray-400 mt-2",
                            children: item.description
                        }, void 0, false, {
                            fileName: "[project]/Desktop/NeuroNextGen/NeuroNextGen/src/component/CardSection.tsx",
                            lineNumber: 34,
                            columnNumber: 13
                        }, this)
                    ]
                }, index, true, {
                    fileName: "[project]/Desktop/NeuroNextGen/NeuroNextGen/src/component/CardSection.tsx",
                    lineNumber: 20,
                    columnNumber: 11
                }, this))
        }, void 0, false, {
            fileName: "[project]/Desktop/NeuroNextGen/NeuroNextGen/src/component/CardSection.tsx",
            lineNumber: 18,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Desktop/NeuroNextGen/NeuroNextGen/src/component/CardSection.tsx",
        lineNumber: 17,
        columnNumber: 5
    }, this);
}
_c = CardsSection;
var _c;
__turbopack_context__.k.register(_c, "CardsSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/NeuroNextGen/NeuroNextGen/src/component/HeadingSubTitel.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HeadingSubTitel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NeuroNextGen$2f$NeuroNextGen$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/NeuroNextGen/NeuroNextGen/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
"use client";
;
function HeadingSubTitel({ backgroundColor = "bg-black", textColor = "text-white", tagText, heading, description }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NeuroNextGen$2f$NeuroNextGen$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: `${backgroundColor} ${textColor} py-10 px-6 md:px-20 text-center`,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NeuroNextGen$2f$NeuroNextGen$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-3xl mx-auto",
            children: [
                tagText && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NeuroNextGen$2f$NeuroNextGen$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-gray-400 tracking-widest text-xs mb-4 uppercase",
                    children: tagText
                }, void 0, false, {
                    fileName: "[project]/Desktop/NeuroNextGen/NeuroNextGen/src/component/HeadingSubTitel.tsx",
                    lineNumber: 34,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NeuroNextGen$2f$NeuroNextGen$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-3xl md:text-5xl font-semibold mb-6",
                    children: heading
                }, void 0, false, {
                    fileName: "[project]/Desktop/NeuroNextGen/NeuroNextGen/src/component/HeadingSubTitel.tsx",
                    lineNumber: 38,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NeuroNextGen$2f$NeuroNextGen$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
_c = HeadingSubTitel;
var _c;
__turbopack_context__.k.register(_c, "HeadingSubTitel");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/NeuroNextGen/NeuroNextGen/src/component/HeroCardSection.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HeroCardsSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NeuroNextGen$2f$NeuroNextGen$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/NeuroNextGen/NeuroNextGen/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NeuroNextGen$2f$NeuroNextGen$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/NeuroNextGen/NeuroNextGen/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NeuroNextGen$2f$NeuroNextGen$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/NeuroNextGen/NeuroNextGen/node_modules/next/image.js [app-client] (ecmascript)");
"use client";
;
;
;
function HeroCardsSection({ cards, stats = [], mapImageSrc, mapAlt = "Map Image", legends = [], backgroundColor = "bg-black", textColor = "text-white" }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NeuroNextGen$2f$NeuroNextGen$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: `relative ${backgroundColor} ${textColor} py-24 px-6 md:px-12 lg:px-20 overflow-hidden`,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NeuroNextGen$2f$NeuroNextGen$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-stretch",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NeuroNextGen$2f$NeuroNextGen$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 sm:grid-cols-2 gap-8 flex-1 min-h-[500px] lg:min-h-[600px]",
                    children: cards.map((card, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NeuroNextGen$2f$NeuroNextGen$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-full max-w-xs rounded-xl bg-black border border-gray-700 p-5 hover:border-white/60 transition-all duration-300 shadow-lg mx-auto",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NeuroNextGen$2f$NeuroNextGen$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex gap-4 items-center mb-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NeuroNextGen$2f$NeuroNextGen$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-12 h-12 rounded-full border border-gray-600 bg-gray-800    shadow-[0_0_10px_rgba(59,130,246,0.5)] flex items-center justify-center flex-shrink-0",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NeuroNextGen$2f$NeuroNextGen$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-6 h-6 text-blue-400 flex items-center justify-center",
                                                children: card.icon && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NeuroNextGen$2f$NeuroNextGen$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isValidElement(card.icon) ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NeuroNextGen$2f$NeuroNextGen$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].cloneElement(card.icon) : card.icon
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/NeuroNextGen/NeuroNextGen/src/component/HeroCardSection.tsx",
                                                lineNumber: 57,
                                                columnNumber: 5
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/NeuroNextGen/NeuroNextGen/src/component/HeroCardSection.tsx",
                                            lineNumber: 55,
                                            columnNumber: 3
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NeuroNextGen$2f$NeuroNextGen$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-col text-left",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NeuroNextGen$2f$NeuroNextGen$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                    className: "text-base font-semibold text-white",
                                                    children: card.title
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/NeuroNextGen/NeuroNextGen/src/component/HeroCardSection.tsx",
                                                    lineNumber: 65,
                                                    columnNumber: 5
                                                }, this),
                                                card.subtitle && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NeuroNextGen$2f$NeuroNextGen$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "inline-block bg-gray-800 text-gray-300 text-[10px] font-medium px-2 py-0.5 rounded-md border border-gray-600 mt-1 w-fit",
                                                    children: card.subtitle
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/NeuroNextGen/NeuroNextGen/src/component/HeroCardSection.tsx",
                                                    lineNumber: 67,
                                                    columnNumber: 7
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/NeuroNextGen/NeuroNextGen/src/component/HeroCardSection.tsx",
                                            lineNumber: 64,
                                            columnNumber: 3
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/NeuroNextGen/NeuroNextGen/src/component/HeroCardSection.tsx",
                                    lineNumber: 54,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NeuroNextGen$2f$NeuroNextGen$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-gray-300 text-xs leading-relaxed",
                                    children: card.desc
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/NeuroNextGen/NeuroNextGen/src/component/HeroCardSection.tsx",
                                    lineNumber: 73,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, i, true, {
                            fileName: "[project]/Desktop/NeuroNextGen/NeuroNextGen/src/component/HeroCardSection.tsx",
                            lineNumber: 50,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/Desktop/NeuroNextGen/NeuroNextGen/src/component/HeroCardSection.tsx",
                    lineNumber: 48,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NeuroNextGen$2f$NeuroNextGen$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col justify-center items-center text-center space-y-10 flex-1",
                    children: [
                        stats.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NeuroNextGen$2f$NeuroNextGen$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col sm:flex-row justify-center gap-12",
                            children: stats.map((stat, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NeuroNextGen$2f$NeuroNextGen$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NeuroNextGen$2f$NeuroNextGen$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "text-4xl font-bold mb-2",
                                            children: stat.value
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/NeuroNextGen/NeuroNextGen/src/component/HeroCardSection.tsx",
                                            lineNumber: 85,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NeuroNextGen$2f$NeuroNextGen$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs tracking-[0.2em] uppercase text-gray-400",
                                            children: stat.label
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/NeuroNextGen/NeuroNextGen/src/component/HeroCardSection.tsx",
                                            lineNumber: 86,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, index, true, {
                                    fileName: "[project]/Desktop/NeuroNextGen/NeuroNextGen/src/component/HeroCardSection.tsx",
                                    lineNumber: 84,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/Desktop/NeuroNextGen/NeuroNextGen/src/component/HeroCardSection.tsx",
                            lineNumber: 82,
                            columnNumber: 13
                        }, this),
                        mapImageSrc && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NeuroNextGen$2f$NeuroNextGen$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-full max-w-xl",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NeuroNextGen$2f$NeuroNextGen$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NeuroNextGen$2f$NeuroNextGen$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    src: mapImageSrc,
                                    alt: mapAlt,
                                    width: 600,
                                    height: 400,
                                    className: "opacity-90 w-full"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/NeuroNextGen/NeuroNextGen/src/component/HeroCardSection.tsx",
                                    lineNumber: 97,
                                    columnNumber: 15
                                }, this),
                                legends.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NeuroNextGen$2f$NeuroNextGen$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex justify-center gap-4 mt-4 text-xs text-gray-400 flex-wrap",
                                    children: legends.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NeuroNextGen$2f$NeuroNextGen$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NeuroNextGen$2f$NeuroNextGen$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: `w-3 h-3 rounded-full`,
                                                    style: {
                                                        backgroundColor: item.color
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/NeuroNextGen/NeuroNextGen/src/component/HeroCardSection.tsx",
                                                    lineNumber: 110,
                                                    columnNumber: 23
                                                }, this),
                                                item.text
                                            ]
                                        }, index, true, {
                                            fileName: "[project]/Desktop/NeuroNextGen/NeuroNextGen/src/component/HeroCardSection.tsx",
                                            lineNumber: 109,
                                            columnNumber: 21
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/NeuroNextGen/NeuroNextGen/src/component/HeroCardSection.tsx",
                                    lineNumber: 107,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/NeuroNextGen/NeuroNextGen/src/component/HeroCardSection.tsx",
                            lineNumber: 96,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/NeuroNextGen/NeuroNextGen/src/component/HeroCardSection.tsx",
                    lineNumber: 79,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/NeuroNextGen/NeuroNextGen/src/component/HeroCardSection.tsx",
            lineNumber: 46,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Desktop/NeuroNextGen/NeuroNextGen/src/component/HeroCardSection.tsx",
        lineNumber: 43,
        columnNumber: 5
    }, this);
}
_c = HeroCardsSection;
var _c;
__turbopack_context__.k.register(_c, "HeroCardsSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/NeuroNextGen/NeuroNextGen/src/component/SideBySide.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SideBySide
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NeuroNextGen$2f$NeuroNextGen$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/NeuroNextGen/NeuroNextGen/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NeuroNextGen$2f$NeuroNextGen$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/NeuroNextGen/NeuroNextGen/node_modules/next/image.js [app-client] (ecmascript)");
"use client";
;
;
function SideBySide({ title, imageSrc, imageAlt = "Information image", reverse = false, backgroundColor = "bg-black", textColor = "text-white", gradientFrom = "from-black", gradientTo = "to-gray-800" }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NeuroNextGen$2f$NeuroNextGen$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: `${backgroundColor} ${textColor} px-6 md:px-20 flex flex-col ${reverse ? "md:flex-row-reverse" : "md:flex-row"} items-center justify-between gap-12`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NeuroNextGen$2f$NeuroNextGen$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `md:w-1/2 h-[500px] flex justify-center items-center bg-gradient-to-r ${gradientFrom} ${gradientTo} rounded-2xl p-6`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NeuroNextGen$2f$NeuroNextGen$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NeuroNextGen$2f$NeuroNextGen$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "md:w-1/2 flex justify-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NeuroNextGen$2f$NeuroNextGen$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "rounded-2xl overflow-hidden bg-[#0f0f0f]  shadow-[0_0_80px_rgba(255,255,255,0.05)] h-[500px] flex items-center justify-center",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NeuroNextGen$2f$NeuroNextGen$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NeuroNextGen$2f$NeuroNextGen$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
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
_c = SideBySide;
var _c;
__turbopack_context__.k.register(_c, "SideBySide");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/NeuroNextGen/NeuroNextGen/src/app/team/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Team
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NeuroNextGen$2f$NeuroNextGen$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/NeuroNextGen/NeuroNextGen/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NeuroNextGen$2f$NeuroNextGen$2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/NeuroNextGen/NeuroNextGen/node_modules/react-icons/fa/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NeuroNextGen$2f$NeuroNextGen$2f$src$2f$component$2f$HeroSideBySide$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/NeuroNextGen/NeuroNextGen/src/component/HeroSideBySide.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NeuroNextGen$2f$NeuroNextGen$2f$src$2f$component$2f$CardSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/NeuroNextGen/NeuroNextGen/src/component/CardSection.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NeuroNextGen$2f$NeuroNextGen$2f$src$2f$component$2f$HeadingSubTitel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/NeuroNextGen/NeuroNextGen/src/component/HeadingSubTitel.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NeuroNextGen$2f$NeuroNextGen$2f$src$2f$component$2f$HeroCardSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/NeuroNextGen/NeuroNextGen/src/component/HeroCardSection.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NeuroNextGen$2f$NeuroNextGen$2f$src$2f$component$2f$SideBySide$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/NeuroNextGen/NeuroNextGen/src/component/SideBySide.tsx [app-client] (ecmascript)");
"use client";
;
;
;
;
;
;
;
function Team() {
    // --- Collection Section (3 Cards) ---
    const collectionData = [
        {
            image: "https://res.cloudinary.com/dohksngyi/image/upload/v1763264267/webexpert_u04faa.jpg",
            title: "Web Development Experts",
            description: "Our developers specialize in building robust and scalable web solutions using React, Next.js, Node.js, and MongoDB."
        },
        {
            image: "https://res.cloudinary.com/dohksngyi/image/upload/v1763264374/uiuxdisner_umgvwv.webp",
            title: "UI/UX Designers",
            description: "Our designers create intuitive, user-friendly interfaces with a focus on responsiveness, accessibility, and visual appeal."
        },
        {
            image: "https://res.cloudinary.com/dohksngyi/image/upload/v1763264491/Back_End_Developer_rtbeg9.avif",
            title: "Cloud & Backend Specialists",
            description: "We manage secure backend systems, APIs, cloud deployment, and performance optimization for seamless user experiences."
        }
    ];
    // --- Cards Section ---
    const cards = [
        {
            title: "Skilled Engineering Team",
            desc: "A diverse team of developers, designers, and analysts working collaboratively to deliver production-ready solutions.",
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NeuroNextGen$2f$NeuroNextGen$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NeuroNextGen$2f$NeuroNextGen$2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaUserTie"], {}, void 0, false, {
                fileName: "[project]/Desktop/NeuroNextGen/NeuroNextGen/src/app/team/page.tsx",
                lineNumber: 39,
                columnNumber: 13
            }, this)
        },
        {
            title: "Agile & Automated Processes",
            desc: "Our workflows leverage agile methodology and automation pipelines for faster delivery, consistency, and reliability.",
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NeuroNextGen$2f$NeuroNextGen$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NeuroNextGen$2f$NeuroNextGen$2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaCogs"], {}, void 0, false, {
                fileName: "[project]/Desktop/NeuroNextGen/NeuroNextGen/src/app/team/page.tsx",
                lineNumber: 44,
                columnNumber: 13
            }, this)
        },
        {
            title: "Secure & Scalable Infrastructure",
            desc: "We deploy projects on secure servers with optimized databases and CDN support for global reach and uptime.",
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NeuroNextGen$2f$NeuroNextGen$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NeuroNextGen$2f$NeuroNextGen$2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaServer"], {}, void 0, false, {
                fileName: "[project]/Desktop/NeuroNextGen/NeuroNextGen/src/app/team/page.tsx",
                lineNumber: 49,
                columnNumber: 13
            }, this)
        },
        {
            title: "Global Collaboration",
            desc: "Our team collaborates with clients across the globe, ensuring cultural, technical, and business alignment.",
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NeuroNextGen$2f$NeuroNextGen$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NeuroNextGen$2f$NeuroNextGen$2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaGlobeAmericas"], {}, void 0, false, {
                fileName: "[project]/Desktop/NeuroNextGen/NeuroNextGen/src/app/team/page.tsx",
                lineNumber: 54,
                columnNumber: 13
            }, this)
        }
    ];
    // --- Stats Section ---
    const stats = [
        {
            value: "50+",
            label: "Expert Team Members"
        },
        {
            value: "250+",
            label: "Successful Projects Delivered"
        },
        {
            value: "99%",
            label: "Client Satisfaction Rate"
        },
        {
            value: "5+",
            label: "Years of Industry Experience"
        }
    ];
    const legends = [
        {
            color: "#60a5fa",
            text: "Full-Stack Web Development"
        },
        {
            color: "#a78bfa",
            text: "UI/UX & Interaction Design"
        },
        {
            color: "#facc15",
            text: "Backend & Cloud Solutions"
        },
        {
            color: "#34d399",
            text: "Performance & Security"
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NeuroNextGen$2f$NeuroNextGen$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NeuroNextGen$2f$NeuroNextGen$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NeuroNextGen$2f$NeuroNextGen$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NeuroNextGen$2f$NeuroNextGen$2f$src$2f$component$2f$HeroSideBySide$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                title: "Meet the NeuroNextGen Solutions Team",
                subtitle: "Our diverse and skilled team is dedicated to delivering innovative digital solutions for businesses worldwide.",
                buttonText: "Connect With Us",
                imageSrc: "https://res.cloudinary.com/dohksngyi/image/upload/v1763264079/team_fjdqlk.jpg"
            }, void 0, false, {
                fileName: "[project]/Desktop/NeuroNextGen/NeuroNextGen/src/app/team/page.tsx",
                lineNumber: 76,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NeuroNextGen$2f$NeuroNextGen$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NeuroNextGen$2f$NeuroNextGen$2f$src$2f$component$2f$CardSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                data: collectionData
            }, void 0, false, {
                fileName: "[project]/Desktop/NeuroNextGen/NeuroNextGen/src/app/team/page.tsx",
                lineNumber: 84,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NeuroNextGen$2f$NeuroNextGen$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NeuroNextGen$2f$NeuroNextGen$2f$src$2f$component$2f$HeadingSubTitel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                tagText: "OUR TEAM",
                heading: "Experts Driving Innovation & Excellence",
                description: "From creative designers to full-stack engineers and cloud specialists, our team collaborates to deliver high-quality, scalable, and innovative digital solutions."
            }, void 0, false, {
                fileName: "[project]/Desktop/NeuroNextGen/NeuroNextGen/src/app/team/page.tsx",
                lineNumber: 87,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NeuroNextGen$2f$NeuroNextGen$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NeuroNextGen$2f$NeuroNextGen$2f$src$2f$component$2f$HeroCardSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                cards: cards,
                stats: stats,
                mapImageSrc: "https://res.cloudinary.com/dohksngyi/image/upload/v1763264703/teams_qqznoe.jpg",
                legends: legends,
                backgroundColor: "bg-black",
                textColor: "text-white"
            }, void 0, false, {
                fileName: "[project]/Desktop/NeuroNextGen/NeuroNextGen/src/app/team/page.tsx",
                lineNumber: 94,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NeuroNextGen$2f$NeuroNextGen$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NeuroNextGen$2f$NeuroNextGen$2f$src$2f$component$2f$SideBySide$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                title: "Our team thrives on collaboration, continuous learning, and innovation. Every project we deliver reflects our dedication to quality, efficiency, and client success.",
                imageSrc: "https://res.cloudinary.com/dohksngyi/image/upload/v1763264846/teamwork_rk70do.jpg",
                reverse: true,
                backgroundColor: "bg-[#0a0a0a]",
                gradientFrom: "from-gray-900",
                gradientTo: "to-black"
            }, void 0, false, {
                fileName: "[project]/Desktop/NeuroNextGen/NeuroNextGen/src/app/team/page.tsx",
                lineNumber: 104,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NeuroNextGen$2f$NeuroNextGen$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NeuroNextGen$2f$NeuroNextGen$2f$src$2f$component$2f$HeadingSubTitel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                tagText: "WORK WITH US",
                heading: "Join Hands With Our Expert Team",
                description: "Whether you're a startup or a global enterprise, our team is ready to provide technology solutions that drive business growth and innovation."
            }, void 0, false, {
                fileName: "[project]/Desktop/NeuroNextGen/NeuroNextGen/src/app/team/page.tsx",
                lineNumber: 114,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_c = Team;
var _c;
__turbopack_context__.k.register(_c, "Team");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Desktop_NeuroNextGen_NeuroNextGen_src_adb580ed._.js.map
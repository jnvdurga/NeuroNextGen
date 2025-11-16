(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Desktop/NeuroNextGen/NeuroNextGen/src/app/research/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NeuroNextGen$2f$NeuroNextGen$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/NeuroNextGen/NeuroNextGen/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NeuroNextGen$2f$NeuroNextGen$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/NeuroNextGen/NeuroNextGen/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NeuroNextGen$2f$NeuroNextGen$2f$node_modules$2f$react$2d$icons$2f$md$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/NeuroNextGen/NeuroNextGen/node_modules/react-icons/md/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NeuroNextGen$2f$NeuroNextGen$2f$src$2f$component$2f$GalaxyBg$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/NeuroNextGen/NeuroNextGen/src/component/GalaxyBg.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const Rearch = ()=>{
    _s();
    const [isVisible, setIsVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NeuroNextGen$2f$NeuroNextGen$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [counters, setCounters] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NeuroNextGen$2f$NeuroNextGen$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        projects: 0,
        clients: 0,
        experience: 0,
        satisfaction: 0
    });
    const stats = [
        {
            key: "projects",
            label: "Active Research Projects",
            target: 12,
            suffix: "+",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NeuroNextGen$2f$NeuroNextGen$2f$node_modules$2f$react$2d$icons$2f$md$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MdCode"],
            color: "text-white"
        },
        {
            key: "clients",
            label: "Collaborations Worldwide",
            target: 8,
            suffix: "+",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NeuroNextGen$2f$NeuroNextGen$2f$node_modules$2f$react$2d$icons$2f$md$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MdPeople"],
            color: "text-white"
        },
        {
            key: "experience",
            label: "Years of R&D",
            target: 5,
            suffix: "+",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NeuroNextGen$2f$NeuroNextGen$2f$node_modules$2f$react$2d$icons$2f$md$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MdTrendingUp"],
            color: "text-white"
        },
        {
            key: "satisfaction",
            label: "Successful Proof-of-Concepts",
            target: 90,
            suffix: "%",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NeuroNextGen$2f$NeuroNextGen$2f$node_modules$2f$react$2d$icons$2f$md$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MdStar"],
            color: "text-white"
        }
    ];
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NeuroNextGen$2f$NeuroNextGen$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Rearch.useEffect": ()=>{
            setIsVisible(true);
            const animateCounters = {
                "Rearch.useEffect.animateCounters": ()=>{
                    stats.forEach({
                        "Rearch.useEffect.animateCounters": (stat)=>{
                            let current = 0;
                            const increment = stat.target / 50;
                            const timer = setInterval({
                                "Rearch.useEffect.animateCounters.timer": ()=>{
                                    current += increment;
                                    if (current >= stat.target) {
                                        current = stat.target;
                                        clearInterval(timer);
                                    }
                                    setCounters({
                                        "Rearch.useEffect.animateCounters.timer": (prev)=>({
                                                ...prev,
                                                [stat.key]: Math.floor(current)
                                            })
                                    }["Rearch.useEffect.animateCounters.timer"]);
                                }
                            }["Rearch.useEffect.animateCounters.timer"], 30);
                        }
                    }["Rearch.useEffect.animateCounters"]);
                }
            }["Rearch.useEffect.animateCounters"];
            const timer = setTimeout(animateCounters, 500);
            return ({
                "Rearch.useEffect": ()=>clearTimeout(timer)
            })["Rearch.useEffect"];
        }
    }["Rearch.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NeuroNextGen$2f$NeuroNextGen$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "relative bg-black text-white px-6 pb-20 pt-32 lg:pb-32 lg:pt-40",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NeuroNextGen$2f$NeuroNextGen$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NeuroNextGen$2f$NeuroNextGen$2f$src$2f$component$2f$GalaxyBg$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/Desktop/NeuroNextGen/NeuroNextGen/src/app/research/page.tsx",
                lineNumber: 81,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NeuroNextGen$2f$NeuroNextGen$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container max-w-screen-xl mx-auto overflow-hidden relative z-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NeuroNextGen$2f$NeuroNextGen$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `text-center mb-20 transform transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NeuroNextGen$2f$NeuroNextGen$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "inline-flex items-center px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm mb-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NeuroNextGen$2f$NeuroNextGen$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NeuroNextGen$2f$NeuroNextGen$2f$node_modules$2f$react$2d$icons$2f$md$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MdPeople"], {
                                        className: "w-4 h-4 text-white mr-2"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/NeuroNextGen/NeuroNextGen/src/app/research/page.tsx",
                                        lineNumber: 91,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NeuroNextGen$2f$NeuroNextGen$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-white text-sm font-medium tracking-wide",
                                        children: "Our Research & Innovation"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/NeuroNextGen/NeuroNextGen/src/app/research/page.tsx",
                                        lineNumber: 92,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/NeuroNextGen/NeuroNextGen/src/app/research/page.tsx",
                                lineNumber: 90,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NeuroNextGen$2f$NeuroNextGen$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-5xl lg:text-6xl font-bold mb-6 leading-tight",
                                children: [
                                    "Exploring the Frontiers of Technology",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NeuroNextGen$2f$NeuroNextGen$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "block bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent",
                                        children: "Building Tomorrow’s Digital Solutions Today"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/NeuroNextGen/NeuroNextGen/src/app/research/page.tsx",
                                        lineNumber: 99,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/NeuroNextGen/NeuroNextGen/src/app/research/page.tsx",
                                lineNumber: 97,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NeuroNextGen$2f$NeuroNextGen$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed",
                                children: "At NeuroNextGen Solutions, our R&D team dives deep into the latest technologies — from **AI-driven predictive systems**, **real-time web & mobile platforms**, to **blockchain-enabled secure applications**. We are constantly studying futuristic concepts, developing proof-of-concepts, and exploring innovative solutions that will transform businesses and society."
                            }, void 0, false, {
                                fileName: "[project]/Desktop/NeuroNextGen/NeuroNextGen/src/app/research/page.tsx",
                                lineNumber: 104,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/NeuroNextGen/NeuroNextGen/src/app/research/page.tsx",
                        lineNumber: 85,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NeuroNextGen$2f$NeuroNextGen$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20 transform transition-all duration-1000 delay-200 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`,
                        children: stats.map((stat, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NeuroNextGen$2f$NeuroNextGen$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative rounded-2xl overflow-hidden animate-fadeInUp",
                                style: {
                                    animationDelay: `${300 + index * 100}ms`
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NeuroNextGen$2f$NeuroNextGen$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "p-6 text-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NeuroNextGen$2f$NeuroNextGen$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(stat.icon, {
                                            className: `w-8 h-8 ${stat.color} opacity-90 mx-auto mb-4`
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/NeuroNextGen/NeuroNextGen/src/app/research/page.tsx",
                                            lineNumber: 126,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NeuroNextGen$2f$NeuroNextGen$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-3xl font-bold mb-2",
                                            children: [
                                                counters[stat.key],
                                                stat.suffix
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/NeuroNextGen/NeuroNextGen/src/app/research/page.tsx",
                                            lineNumber: 129,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NeuroNextGen$2f$NeuroNextGen$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-gray-400 text-sm",
                                            children: stat.label
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/NeuroNextGen/NeuroNextGen/src/app/research/page.tsx",
                                            lineNumber: 133,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/NeuroNextGen/NeuroNextGen/src/app/research/page.tsx",
                                    lineNumber: 125,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            }, stat.key, false, {
                                fileName: "[project]/Desktop/NeuroNextGen/NeuroNextGen/src/app/research/page.tsx",
                                lineNumber: 120,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)))
                    }, void 0, false, {
                        fileName: "[project]/Desktop/NeuroNextGen/NeuroNextGen/src/app/research/page.tsx",
                        lineNumber: 114,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NeuroNextGen$2f$NeuroNextGen$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid lg:grid-cols-3 gap-8 px-6 py-16",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NeuroNextGen$2f$NeuroNextGen$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-white/5 rounded-2xl p-6 hover:bg-white/10 transition cursor-pointer",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NeuroNextGen$2f$NeuroNextGen$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-2xl font-bold mb-2",
                                        children: "Web 3.0 & Blockchain Experiments"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/NeuroNextGen/NeuroNextGen/src/app/research/page.tsx",
                                        lineNumber: 142,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NeuroNextGen$2f$NeuroNextGen$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-gray-300",
                                        children: "We are exploring decentralized applications and smart contract integrations for secure, transparent, and autonomous business solutions. Our studies focus on blockchain scalability and cross-chain interoperability."
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/NeuroNextGen/NeuroNextGen/src/app/research/page.tsx",
                                        lineNumber: 143,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/NeuroNextGen/NeuroNextGen/src/app/research/page.tsx",
                                lineNumber: 141,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NeuroNextGen$2f$NeuroNextGen$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-white/5 rounded-2xl p-6 hover:bg-white/10 transition cursor-pointer",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NeuroNextGen$2f$NeuroNextGen$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-2xl font-bold mb-2",
                                        children: "AI & Predictive Systems"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/NeuroNextGen/NeuroNextGen/src/app/research/page.tsx",
                                        lineNumber: 150,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NeuroNextGen$2f$NeuroNextGen$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-gray-300",
                                        children: "Our team researches AI-driven web and mobile applications capable of predictive analytics, anomaly detection, and adaptive user experiences. These studies aim to transform decision-making for enterprises and startups alike."
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/NeuroNextGen/NeuroNextGen/src/app/research/page.tsx",
                                        lineNumber: 151,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/NeuroNextGen/NeuroNextGen/src/app/research/page.tsx",
                                lineNumber: 149,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NeuroNextGen$2f$NeuroNextGen$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-white/5 rounded-2xl p-6 hover:bg-white/10 transition cursor-pointer",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NeuroNextGen$2f$NeuroNextGen$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-2xl font-bold mb-2",
                                        children: "ResQME: Real-Time Safety Platform"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/NeuroNextGen/NeuroNextGen/src/app/research/page.tsx",
                                        lineNumber: 158,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NeuroNextGen$2f$NeuroNextGen$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-gray-300",
                                        children: "As part of our future-focused initiatives, we are developing ResQME — a real-time safety monitoring system for individuals using IoT, GPS tracking, and AI-based emergency alerts. This project represents a complex integration of mobile, cloud, and AI technologies."
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/NeuroNextGen/NeuroNextGen/src/app/research/page.tsx",
                                        lineNumber: 159,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/NeuroNextGen/NeuroNextGen/src/app/research/page.tsx",
                                lineNumber: 157,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NeuroNextGen$2f$NeuroNextGen$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-white/5 rounded-2xl p-6 hover:bg-white/10 transition cursor-pointer",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NeuroNextGen$2f$NeuroNextGen$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-2xl font-bold mb-2",
                                        children: "Next-Gen Mobile & Web Experiences"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/NeuroNextGen/NeuroNextGen/src/app/research/page.tsx",
                                        lineNumber: 167,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NeuroNextGen$2f$NeuroNextGen$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-gray-300",
                                        children: "Studying progressive web apps, immersive UI/UX trends, and interactive 3D experiences to deliver responsive, fast, and engaging platforms for the next generation of users."
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/NeuroNextGen/NeuroNextGen/src/app/research/page.tsx",
                                        lineNumber: 168,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/NeuroNextGen/NeuroNextGen/src/app/research/page.tsx",
                                lineNumber: 166,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NeuroNextGen$2f$NeuroNextGen$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-white/5 rounded-2xl p-6 hover:bg-white/10 transition cursor-pointer",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NeuroNextGen$2f$NeuroNextGen$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-2xl font-bold mb-2",
                                        children: "Cloud-Native Architectures"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/NeuroNextGen/NeuroNextGen/src/app/research/page.tsx",
                                        lineNumber: 175,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NeuroNextGen$2f$NeuroNextGen$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-gray-300",
                                        children: "Researching scalable, fault-tolerant cloud-native solutions with microservices, serverless functions, and real-time API orchestration to power modern enterprise applications."
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/NeuroNextGen/NeuroNextGen/src/app/research/page.tsx",
                                        lineNumber: 176,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/NeuroNextGen/NeuroNextGen/src/app/research/page.tsx",
                                lineNumber: 174,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NeuroNextGen$2f$NeuroNextGen$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-white/5 rounded-2xl p-6 hover:bg-white/10 transition cursor-pointer",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NeuroNextGen$2f$NeuroNextGen$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-2xl font-bold mb-2",
                                        children: "Automation & DevOps Innovation"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/NeuroNextGen/NeuroNextGen/src/app/research/page.tsx",
                                        lineNumber: 183,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NeuroNextGen$2f$NeuroNextGen$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-gray-300",
                                        children: "Exploring CI/CD pipelines, automated testing, and intelligent deployment strategies to reduce time-to-market, increase reliability, and maintain sustainable software delivery."
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/NeuroNextGen/NeuroNextGen/src/app/research/page.tsx",
                                        lineNumber: 184,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/NeuroNextGen/NeuroNextGen/src/app/research/page.tsx",
                                lineNumber: 182,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/NeuroNextGen/NeuroNextGen/src/app/research/page.tsx",
                        lineNumber: 140,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/NeuroNextGen/NeuroNextGen/src/app/research/page.tsx",
                lineNumber: 83,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/NeuroNextGen/NeuroNextGen/src/app/research/page.tsx",
        lineNumber: 80,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(Rearch, "nM4t24zOB4AuzQ+jrkC4cOAqYCM=");
_c = Rearch;
const __TURBOPACK__default__export__ = Rearch;
var _c;
__turbopack_context__.k.register(_c, "Rearch");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Desktop_NeuroNextGen_NeuroNextGen_src_app_research_page_tsx_884c1cfc._.js.map
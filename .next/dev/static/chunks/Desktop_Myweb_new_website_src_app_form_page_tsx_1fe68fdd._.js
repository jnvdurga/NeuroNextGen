(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Desktop/Myweb/new_website/src/app/form/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Form
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Myweb$2f$new_website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Myweb/new_website/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Myweb$2f$new_website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Myweb/new_website/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function Form() {
    _s();
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Myweb$2f$new_website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        firstName: "",
        lastName: "",
        company: "",
        jobTitle: "",
        email: "",
        country: "",
        budget: "",
        help: [],
        details: ""
    });
    const handleChange = (e)=>{
        const { name, value, type, checked } = e.target;
        if (type === "checkbox") {
            setFormData((prev)=>({
                    ...prev,
                    help: checked ? [
                        ...prev.help,
                        value
                    ] : prev.help.filter((item)=>item !== value)
                }));
        } else {
            setFormData({
                ...formData,
                [name]: value
            });
        }
    };
    const handleSubmit = async (e)=>{
        e.preventDefault();
        console.log(formData);
    // TODO: connect to email or Excel sheet backend here
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Myweb$2f$new_website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-black text-white flex justify-center items-center pt-24",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Myweb$2f$new_website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "min-h-screen bg-black text-white px-6 md:px-20 py-16 flex flex-col lg:flex-row gap-10 justify-center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Myweb$2f$new_website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-[#121212] border border-gray-800 rounded-2xl p-8 w-full lg:w-1/2 space-y-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Myweb$2f$new_website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-2xl font-semibold",
                            children: "Let’s thrive together"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Myweb/new_website/src/app/form/page.tsx",
                            lineNumber: 43,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Myweb$2f$new_website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-gray-400 text-sm leading-relaxed",
                            children: "Join leading AI teams accelerating their ML development. Book a 1:1 demo with us to get started."
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Myweb/new_website/src/app/form/page.tsx",
                            lineNumber: 44,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Myweb$2f$new_website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                            onSubmit: handleSubmit,
                            className: "space-y-5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Myweb$2f$new_website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Myweb$2f$new_website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            name: "firstName",
                                            placeholder: "First name*",
                                            required: true,
                                            onChange: handleChange,
                                            className: "bg-transparent border border-gray-700 rounded-lg px-4 py-3 text-sm w-full focus:outline-none focus:border-gray-400"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Myweb/new_website/src/app/form/page.tsx",
                                            lineNumber: 52,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Myweb$2f$new_website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            name: "lastName",
                                            placeholder: "Last name*",
                                            required: true,
                                            onChange: handleChange,
                                            className: "bg-transparent border border-gray-700 rounded-lg px-4 py-3 text-sm w-full focus:outline-none focus:border-gray-400"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Myweb/new_website/src/app/form/page.tsx",
                                            lineNumber: 60,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/Myweb/new_website/src/app/form/page.tsx",
                                    lineNumber: 51,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Myweb$2f$new_website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "text",
                                    name: "company",
                                    placeholder: "Company name*",
                                    required: true,
                                    onChange: handleChange,
                                    className: "bg-transparent border border-gray-700 rounded-lg px-4 py-3 text-sm w-full focus:outline-none focus:border-gray-400"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Myweb/new_website/src/app/form/page.tsx",
                                    lineNumber: 70,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Myweb$2f$new_website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "text",
                                    name: "jobTitle",
                                    placeholder: "Job title*",
                                    required: true,
                                    onChange: handleChange,
                                    className: "bg-transparent border border-gray-700 rounded-lg px-4 py-3 text-sm w-full focus:outline-none focus:border-gray-400"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Myweb/new_website/src/app/form/page.tsx",
                                    lineNumber: 79,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Myweb$2f$new_website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "email",
                                    name: "email",
                                    placeholder: "Work email*",
                                    required: true,
                                    onChange: handleChange,
                                    className: "bg-transparent border border-gray-700 rounded-lg px-4 py-3 text-sm w-full focus:outline-none focus:border-gray-400"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Myweb/new_website/src/app/form/page.tsx",
                                    lineNumber: 88,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Myweb$2f$new_website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "text",
                                    name: "country",
                                    placeholder: "Country*",
                                    required: true,
                                    onChange: handleChange,
                                    className: "bg-transparent border border-gray-700 rounded-lg px-4 py-3 text-sm w-full focus:outline-none focus:border-gray-400"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Myweb/new_website/src/app/form/page.tsx",
                                    lineNumber: 97,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Myweb$2f$new_website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Myweb$2f$new_website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-sm mb-2 text-gray-400",
                                            children: "Project Budget:*"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Myweb/new_website/src/app/form/page.tsx",
                                            lineNumber: 108,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Myweb$2f$new_website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-2",
                                            children: [
                                                "<$50K",
                                                "$50–250K",
                                                "$250K–1M",
                                                "$1M+"
                                            ].map((b)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Myweb$2f$new_website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "flex items-center gap-2 text-sm text-gray-300",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Myweb$2f$new_website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "radio",
                                                            name: "budget",
                                                            value: b,
                                                            onChange: handleChange,
                                                            required: true,
                                                            className: "accent-cyan-500"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/Myweb/new_website/src/app/form/page.tsx",
                                                            lineNumber: 114,
                                                            columnNumber: 21
                                                        }, this),
                                                        b
                                                    ]
                                                }, b, true, {
                                                    fileName: "[project]/Desktop/Myweb/new_website/src/app/form/page.tsx",
                                                    lineNumber: 113,
                                                    columnNumber: 19
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Myweb/new_website/src/app/form/page.tsx",
                                            lineNumber: 111,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/Myweb/new_website/src/app/form/page.tsx",
                                    lineNumber: 107,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Myweb$2f$new_website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Myweb$2f$new_website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-sm mb-2 text-gray-400",
                                            children: "What can we help with?*"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Myweb/new_website/src/app/form/page.tsx",
                                            lineNumber: 130,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Myweb$2f$new_website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-2",
                                            children: [
                                                "Data Annotation and Curation for Autonomy",
                                                "Data Generation and RLHF for LLMs",
                                                "GenAI Solutions and Platforms",
                                                "Model Test and Evaluation",
                                                "Robotics and Data Collection",
                                                "Public Sector, Government, and Non-Profits",
                                                "Other"
                                            ].map((h)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Myweb$2f$new_website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "flex items-center gap-2 text-sm text-gray-300",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Myweb$2f$new_website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "checkbox",
                                                            value: h,
                                                            onChange: handleChange,
                                                            className: "accent-cyan-500"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/Myweb/new_website/src/app/form/page.tsx",
                                                            lineNumber: 144,
                                                            columnNumber: 21
                                                        }, this),
                                                        h
                                                    ]
                                                }, h, true, {
                                                    fileName: "[project]/Desktop/Myweb/new_website/src/app/form/page.tsx",
                                                    lineNumber: 143,
                                                    columnNumber: 19
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Myweb/new_website/src/app/form/page.tsx",
                                            lineNumber: 133,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/Myweb/new_website/src/app/form/page.tsx",
                                    lineNumber: 129,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Myweb$2f$new_website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                    name: "details",
                                    placeholder: "Please describe your project in detail...",
                                    onChange: handleChange,
                                    className: "bg-transparent border border-gray-700 rounded-lg px-4 py-3 text-sm w-full focus:outline-none focus:border-gray-400"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Myweb/new_website/src/app/form/page.tsx",
                                    lineNumber: 157,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Myweb$2f$new_website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "submit",
                                    className: "bg-white text-black text-sm px-6 py-3 rounded-lg hover:bg-gray-200 transition-all",
                                    children: "Submit →"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Myweb/new_website/src/app/form/page.tsx",
                                    lineNumber: 165,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/Myweb/new_website/src/app/form/page.tsx",
                            lineNumber: 49,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/Myweb/new_website/src/app/form/page.tsx",
                    lineNumber: 42,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Myweb$2f$new_website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-[#0a0a0a] border border-gray-800 rounded-2xl p-8 w-full lg:w-1/2 flex flex-col justify-between",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Myweb$2f$new_website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Myweb$2f$new_website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-gray-300 text-sm leading-relaxed mb-6",
                            children: "The future of AI depends not just on building larger models, but on creating rigorous evaluations, real-world benchmarks, and transparent performance metrics. Teams investing in structured AI testing and continuous validation will define the next generation of intelligent systems. It’s inspiring to see companies prioritizing measurable progress through data-driven evals and open leaderboards."
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Myweb/new_website/src/app/form/page.tsx",
                            lineNumber: 177,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Myweb/new_website/src/app/form/page.tsx",
                        lineNumber: 176,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Desktop/Myweb/new_website/src/app/form/page.tsx",
                    lineNumber: 175,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/Myweb/new_website/src/app/form/page.tsx",
            lineNumber: 40,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Desktop/Myweb/new_website/src/app/form/page.tsx",
        lineNumber: 39,
        columnNumber: 5
    }, this);
}
_s(Form, "ZF36YYTCTfuFJXaAm0cMBARAj1s=");
_c = Form;
var _c;
__turbopack_context__.k.register(_c, "Form");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Desktop_Myweb_new_website_src_app_form_page_tsx_1fe68fdd._.js.map
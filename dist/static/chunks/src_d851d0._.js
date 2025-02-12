(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/src_d851d0._.js", {

"[project]/src/lib/utils.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "cn": (()=>cn)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/shadcn/sheet.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "Sheet": (()=>Sheet),
    "SheetClose": (()=>SheetClose),
    "SheetContent": (()=>SheetContent),
    "SheetDescription": (()=>SheetDescription),
    "SheetFooter": (()=>SheetFooter),
    "SheetHeader": (()=>SheetHeader),
    "SheetOverlay": (()=>SheetOverlay),
    "SheetPortal": (()=>SheetPortal),
    "SheetTitle": (()=>SheetTitle),
    "SheetTrigger": (()=>SheetTrigger)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@radix-ui/react-dialog/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
"use client";
;
;
;
;
;
;
const Sheet = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__.Root;
const SheetTrigger = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__.Trigger;
const SheetClose = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__.Close;
const SheetPortal = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__.Portal;
const SheetOverlay = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__.Overlay, {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", className),
        ...props,
        ref: ref
    }, void 0, false, {
        fileName: "[project]/src/components/shadcn/sheet.tsx",
        lineNumber: 22,
        columnNumber: 3
    }, this));
_c = SheetOverlay;
SheetOverlay.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__.Overlay.displayName;
const sheetVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])("fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500 data-[state=open]:animate-in data-[state=closed]:animate-out", {
    variants: {
        side: {
            top: "inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
            bottom: "inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
            left: "inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",
            right: "inset-y-0 right-0 h-full w-3/4 border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm"
        }
    },
    defaultVariants: {
        side: "right"
    }
});
const SheetContent = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.forwardRef(_c1 = ({ side = "right", className, children, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SheetPortal, {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SheetOverlay, {}, void 0, false, {
                fileName: "[project]/src/components/shadcn/sheet.tsx",
                lineNumber: 61,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__.Content, {
                ref: ref,
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(sheetVariants({
                    side
                }), className),
                ...props,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__.Close, {
                        className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                className: "h-4 w-4"
                            }, void 0, false, {
                                fileName: "[project]/src/components/shadcn/sheet.tsx",
                                lineNumber: 68,
                                columnNumber: 9
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "sr-only",
                                children: "Close"
                            }, void 0, false, {
                                fileName: "[project]/src/components/shadcn/sheet.tsx",
                                lineNumber: 69,
                                columnNumber: 9
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/shadcn/sheet.tsx",
                        lineNumber: 67,
                        columnNumber: 7
                    }, this),
                    children
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/shadcn/sheet.tsx",
                lineNumber: 62,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/shadcn/sheet.tsx",
        lineNumber: 60,
        columnNumber: 3
    }, this));
_c2 = SheetContent;
SheetContent.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__.Content.displayName;
const SheetHeader = ({ className, ...props })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex flex-col space-y-2 text-center sm:text-left", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/shadcn/sheet.tsx",
        lineNumber: 81,
        columnNumber: 3
    }, this);
_c3 = SheetHeader;
SheetHeader.displayName = "SheetHeader";
const SheetFooter = ({ className, ...props })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/shadcn/sheet.tsx",
        lineNumber: 95,
        columnNumber: 3
    }, this);
_c4 = SheetFooter;
SheetFooter.displayName = "SheetFooter";
const SheetTitle = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.forwardRef(_c5 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__.Title, {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-lg font-semibold text-foreground", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/shadcn/sheet.tsx",
        lineNumber: 109,
        columnNumber: 3
    }, this));
_c6 = SheetTitle;
SheetTitle.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__.Title.displayName;
const SheetDescription = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.forwardRef(_c7 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__.Description, {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-sm text-muted-foreground", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/shadcn/sheet.tsx",
        lineNumber: 121,
        columnNumber: 3
    }, this));
_c8 = SheetDescription;
SheetDescription.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__.Description.displayName;
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8;
__turbopack_refresh__.register(_c, "SheetOverlay");
__turbopack_refresh__.register(_c1, "SheetContent$React.forwardRef");
__turbopack_refresh__.register(_c2, "SheetContent");
__turbopack_refresh__.register(_c3, "SheetHeader");
__turbopack_refresh__.register(_c4, "SheetFooter");
__turbopack_refresh__.register(_c5, "SheetTitle$React.forwardRef");
__turbopack_refresh__.register(_c6, "SheetTitle");
__turbopack_refresh__.register(_c7, "SheetDescription$React.forwardRef");
__turbopack_refresh__.register(_c8, "SheetDescription");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/SkillsTabs.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>SkillsTabs)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
"use client";
;
function SkillsTabs() {
    _s();
    const [engineeringSkills, setEngineeringSkills] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `md:max-h-[300px] ${engineeringSkills ? "max-h-[800px]" : "max-h-[300px]"}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `hover:bg-neutral-800 py-1 px-4 rounded text-lg cursor-pointer ${engineeringSkills && "bg-neutral-900"}`,
                        onClick: ()=>setEngineeringSkills(true),
                        children: "Ingénierie"
                    }, void 0, false, {
                        fileName: "[project]/src/components/SkillsTabs.tsx",
                        lineNumber: 13,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-[1px] bg-neutral-800 rounded"
                    }, void 0, false, {
                        fileName: "[project]/src/components/SkillsTabs.tsx",
                        lineNumber: 14,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `hover:bg-neutral-800 py-1 px-4 rounded text-lg cursor-pointer ${!engineeringSkills && "bg-neutral-900"}`,
                        onClick: ()=>setEngineeringSkills(false),
                        children: "Autres"
                    }, void 0, false, {
                        fileName: "[project]/src/components/SkillsTabs.tsx",
                        lineNumber: 15,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/SkillsTabs.tsx",
                lineNumber: 12,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("hr", {
                className: "my-2"
            }, void 0, false, {
                fileName: "[project]/src/components/SkillsTabs.tsx",
                lineNumber: 17,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `flex flex-col space-y-4 md:space-y-0 md:flex-row md:items-center justify-around ${engineeringSkills ? "delay-300 duration-300 opacity-100" : "duration-300 opacity-0"}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                className: "pt-2 pb-1 text-neutral-500 font-semibold text-sm",
                                children: "Web"
                            }, void 0, false, {
                                fileName: "[project]/src/components/SkillsTabs.tsx",
                                lineNumber: 20,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: "text-lg text-neutral-200 space-y-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        className: "flex items-center space-x-2 px-3 py-1 bg-neutral-900 md:hover:bg-[#242938] md:hover:text-[#00d8ff] md:border-[1px] border-neutral-900 hover:border-[#00d8ff]/40 hover:border-neutral-700 rounded-lg",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                xmlns: "http://www.w3.org/2000/svg",
                                                width: 24,
                                                height: 24,
                                                viewBox: "0 0 256 256",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                                    fill: "none",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                            width: 256,
                                                            height: 256,
                                                            fill: "#242938",
                                                            rx: 60
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/SkillsTabs.tsx",
                                                            lineNumber: 23,
                                                            columnNumber: 115
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            fill: "#00d8ff",
                                                            d: "M128.001 146.951c10.304 0 18.656-8.353 18.656-18.656s-8.352-18.656-18.656-18.656s-18.656 8.353-18.656 18.656s8.353 18.656 18.656 18.656"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/SkillsTabs.tsx",
                                                            lineNumber: 23,
                                                            columnNumber: 176
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            stroke: "#00d8ff",
                                                            strokeWidth: 8.911,
                                                            d: "M128.002 90.363c25.048 0 48.317 3.594 65.862 9.635C215.003 107.275 228 118.306 228 128.295c0 10.409-13.774 22.128-36.475 29.649c-17.162 5.686-39.746 8.654-63.523 8.654c-24.378 0-47.463-2.786-64.819-8.717C41.225 150.376 28 138.506 28 128.295c0-9.908 12.41-20.854 33.252-28.12c17.61-6.14 41.453-9.812 66.746-9.812z",
                                                            clipRule: "evenodd"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/SkillsTabs.tsx",
                                                            lineNumber: 23,
                                                            columnNumber: 344
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            stroke: "#00d8ff",
                                                            strokeWidth: 8.911,
                                                            d: "M94.981 109.438c12.514-21.698 27.251-40.06 41.249-52.24c16.864-14.677 32.914-20.425 41.566-15.436c9.017 5.2 12.288 22.988 7.463 46.41c-3.645 17.707-12.359 38.753-24.238 59.351c-12.179 21.118-26.124 39.724-39.931 51.792c-17.471 15.272-34.362 20.799-43.207 15.698c-8.583-4.946-11.865-21.167-7.747-42.852c3.479-18.323 12.21-40.812 24.841-62.723z",
                                                            clipRule: "evenodd"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/SkillsTabs.tsx",
                                                            lineNumber: 23,
                                                            columnNumber: 730
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            stroke: "#00d8ff",
                                                            strokeWidth: 8.911,
                                                            d: "M95.012 147.578c-12.549-21.674-21.093-43.616-24.659-61.826c-4.293-21.941-1.258-38.716 7.387-43.72c9.009-5.216 26.052.834 43.934 16.712c13.52 12.004 27.403 30.061 39.316 50.639c12.214 21.098 21.368 42.473 24.929 60.461c4.506 22.764.859 40.157-7.978 45.272c-8.574 4.964-24.265-.291-40.996-14.689c-14.136-12.164-29.26-30.959-41.933-52.849Z",
                                                            clipRule: "evenodd"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/SkillsTabs.tsx",
                                                            lineNumber: 23,
                                                            columnNumber: 1146
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/SkillsTabs.tsx",
                                                    lineNumber: 23,
                                                    columnNumber: 100
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/SkillsTabs.tsx",
                                                lineNumber: 23,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "React"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/SkillsTabs.tsx",
                                                lineNumber: 24,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/SkillsTabs.tsx",
                                        lineNumber: 22,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        className: "flex items-center space-x-2 px-3 py-1 bg-neutral-900 md:hover:bg-black md:border-[1px] border-neutral-900 hover:border-white/60 rounded-lg",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                xmlns: "http://www.w3.org/2000/svg",
                                                width: 24,
                                                height: 24,
                                                viewBox: "0 0 256 256",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                                                                id: "logosNextjsIcon0",
                                                                x1: "55.633%",
                                                                x2: "83.228%",
                                                                y1: "56.385%",
                                                                y2: "96.08%",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                                                        offset: "0%",
                                                                        stopColor: "#fff"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/SkillsTabs.tsx",
                                                                        lineNumber: 27,
                                                                        columnNumber: 195
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                                                        offset: "100%",
                                                                        stopColor: "#fff",
                                                                        stopOpacity: 0
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/SkillsTabs.tsx",
                                                                        lineNumber: 27,
                                                                        columnNumber: 237
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/SkillsTabs.tsx",
                                                                lineNumber: 27,
                                                                columnNumber: 106
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                                                                id: "logosNextjsIcon1",
                                                                x1: "50%",
                                                                x2: "49.953%",
                                                                y1: "0%",
                                                                y2: "73.438%",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                                                        offset: "0%",
                                                                        stopColor: "#fff"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/SkillsTabs.tsx",
                                                                        lineNumber: 27,
                                                                        columnNumber: 395
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                                                        offset: "100%",
                                                                        stopColor: "#fff",
                                                                        stopOpacity: 0
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/SkillsTabs.tsx",
                                                                        lineNumber: 27,
                                                                        columnNumber: 437
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/SkillsTabs.tsx",
                                                                lineNumber: 27,
                                                                columnNumber: 314
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                                id: "logosNextjsIcon2",
                                                                cx: 128,
                                                                cy: 128,
                                                                r: 128
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/SkillsTabs.tsx",
                                                                lineNumber: 27,
                                                                columnNumber: 514
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/SkillsTabs.tsx",
                                                        lineNumber: 27,
                                                        columnNumber: 100
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mask", {
                                                        id: "logosNextjsIcon3",
                                                        fill: "#fff",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("use", {
                                                            href: "#logosNextjsIcon2"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/SkillsTabs.tsx",
                                                            lineNumber: 27,
                                                            columnNumber: 626
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/SkillsTabs.tsx",
                                                        lineNumber: 27,
                                                        columnNumber: 586
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                                        mask: "url(#logosNextjsIcon3)",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                                cx: 128,
                                                                cy: 128,
                                                                r: 128
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/SkillsTabs.tsx",
                                                                lineNumber: 27,
                                                                columnNumber: 702
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                fill: "url(#logosNextjsIcon0)",
                                                                d: "M212.634 224.028L98.335 76.8H76.8v102.357h17.228V98.68L199.11 234.446a128 128 0 0 0 13.524-10.418"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/SkillsTabs.tsx",
                                                                lineNumber: 27,
                                                                columnNumber: 745
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                fill: "url(#logosNextjsIcon1)",
                                                                d: "M163.556 76.8h17.067v102.4h-17.067z"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/SkillsTabs.tsx",
                                                                lineNumber: 27,
                                                                columnNumber: 890
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/SkillsTabs.tsx",
                                                        lineNumber: 27,
                                                        columnNumber: 669
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/SkillsTabs.tsx",
                                                lineNumber: 27,
                                                columnNumber: 15
                                            }, this),
                                            "              ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "Next"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/SkillsTabs.tsx",
                                                lineNumber: 27,
                                                columnNumber: 997
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/SkillsTabs.tsx",
                                        lineNumber: 26,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        className: "flex items-center space-x-2 px-3 py-1 bg-neutral-900 md:hover:bg-[#677eeb] md:border-[1px] border-neutral-900 hover:border-neutral-100/70 rounded-lg",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                xmlns: "http://www.w3.org/2000/svg",
                                                width: 24,
                                                height: 24,
                                                viewBox: "0 0 256 256",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                                    fill: "none",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                            width: 256,
                                                            height: 256,
                                                            fill: "#677eeb",
                                                            rx: 60
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/SkillsTabs.tsx",
                                                            lineNumber: 30,
                                                            columnNumber: 115
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            fill: "#f7fafc",
                                                            fillRule: "evenodd",
                                                            d: "M52.658 165.183a9.39 9.39 0 0 1-.075-9.929L123.045 40.32c3.919-6.393 13.382-5.834 16.521.975l64.369 139.631c2.388 5.181-.361 11.277-5.826 12.917l-100.13 30.039a9.384 9.384 0 0 1-10.622-3.964zm78.515-91.257c.679-3.382 5.312-3.87 6.68-.703l44.401 102.74a3.518 3.518 0 0 1-2.224 4.768l-69.182 20.652c-2.543.759-4.979-1.463-4.456-4.065z",
                                                            clipRule: "evenodd"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/SkillsTabs.tsx",
                                                            lineNumber: 30,
                                                            columnNumber: 176
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/SkillsTabs.tsx",
                                                    lineNumber: 30,
                                                    columnNumber: 100
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/SkillsTabs.tsx",
                                                lineNumber: 30,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "Prisma"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/SkillsTabs.tsx",
                                                lineNumber: 31,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/SkillsTabs.tsx",
                                        lineNumber: 29,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        className: "flex items-center space-x-2 px-3 py-1 bg-neutral-900 md:hover:bg-[#242938] md:hover:text-[#00d8ff] md:border-[1px] border-neutral-900 hover:border-[#d049dd]/50 rounded-lg",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                src: "nextauth.png",
                                                alt: "NextAuth logo",
                                                className: "w-6"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/SkillsTabs.tsx",
                                                lineNumber: 34,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "NextAuth"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/SkillsTabs.tsx",
                                                lineNumber: 35,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/SkillsTabs.tsx",
                                        lineNumber: 33,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        className: "flex items-center space-x-2 px-3 py-1 bg-neutral-900 md:hover:bg-[#242938] md:hover:text-[#29d251]/80 md:border-[1px] border-neutral-900 hover:border-[#29d251]/50 rounded-lg",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                xmlns: "http://www.w3.org/2000/svg",
                                                width: 24,
                                                height: 24,
                                                viewBox: "0 0 256 218",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        fill: "#fff",
                                                        d: "M126.031 45.949h110.277v44.636H126.031z"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/SkillsTabs.tsx",
                                                        lineNumber: 38,
                                                        columnNumber: 102
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        fill: "#3ecc5f",
                                                        d: "M26.256 191.672c-9.712 0-18.173-5.287-22.715-13.128A26.1 26.1 0 0 0 0 191.672c0 14.501 11.755 26.256 26.256 26.256h26.257v-26.256z"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/SkillsTabs.tsx",
                                                        lineNumber: 38,
                                                        columnNumber: 171
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        fill: "#3ecc5f",
                                                        d: "m144.385 53.006l91.923-5.744V34.133c0-14.501-11.756-26.256-26.256-26.256H91.898l-3.282-5.685c-1.46-2.527-5.106-2.527-6.564 0L78.77 7.877l-3.282-5.685c-1.46-2.527-5.106-2.527-6.564 0l-3.282 5.685l-3.282-5.685c-1.46-2.527-5.106-2.527-6.564 0l-3.283 5.685l-.085.004l-5.438-5.437c-2.062-2.062-5.583-1.12-6.34 1.7l-1.795 6.7l-6.818-1.828c-2.818-.754-5.397 1.824-4.64 4.643l1.826 6.817l-6.7 1.795c-2.818.756-3.762 4.278-1.7 6.34l5.437 5.438l-.003.084l-5.686 3.282c-2.526 1.459-2.526 5.106 0 6.564l5.686 3.283l-5.686 3.282c-2.526 1.458-2.526 5.105 0 6.564l5.686 3.282l-5.686 3.282c-2.526 1.458-2.526 5.105 0 6.564l5.686 3.282l-5.686 3.282c-2.526 1.459-2.526 5.106 0 6.564l5.686 3.282l-5.686 3.282c-2.526 1.459-2.526 5.106 0 6.564l5.686 3.282l-5.686 3.282c-2.526 1.459-2.526 5.106 0 6.565l5.686 3.282l-5.686 3.282c-2.526 1.458-2.526 5.105 0 6.564l5.686 3.282l-5.686 3.282c-2.526 1.458-2.526 5.105 0 6.564l5.686 3.282l-5.686 3.282c-2.526 1.459-2.526 5.106 0 6.564l5.686 3.282l-5.686 3.282c-2.526 1.459-2.526 5.106 0 6.564l5.686 3.282l-5.686 3.282c-2.526 1.459-2.526 5.106 0 6.565l5.686 3.282l-5.686 3.282c-2.526 1.458-2.526 5.105 0 6.564l5.686 3.282c0 14.501 11.755 26.256 26.256 26.256h157.539c14.5 0 26.256-11.755 26.256-26.256V86.646l-91.923-5.745c-7.365-.46-13.102-6.568-13.102-13.947c0-7.38 5.737-13.487 13.102-13.948"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/SkillsTabs.tsx",
                                                        lineNumber: 38,
                                                        columnNumber: 334
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        fill: "#3ecc5f",
                                                        d: "M183.795 217.928h39.384v-52.513h-39.384z"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/SkillsTabs.tsx",
                                                        lineNumber: 38,
                                                        columnNumber: 1680
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        fill: "#44d860",
                                                        d: "M249.436 185.108c-.288 0-.562.048-.839.084c-.05-.197-.097-.395-.152-.592a6.563 6.563 0 0 0-2.527-12.62c-1.494 0-2.856.52-3.96 1.36a35 35 0 0 0-.44-.442a6.5 6.5 0 0 0 1.328-3.92a6.563 6.563 0 0 0-12.602-2.573c-.195-.055-.39-.1-.584-.15c.035-.278.084-.552.084-.84a6.563 6.563 0 0 0-6.565-6.564a6.563 6.563 0 0 0-6.564 6.564c0 .288.049.562.084.84c-.194.05-.39.095-.584.15a6.563 6.563 0 0 0-12.602 2.572c0 1.477.505 2.824 1.328 3.921c-4.88 4.769-7.918 11.413-7.918 18.774c0 14.501 11.755 26.256 26.256 26.256c12.26 0 22.528-8.415 25.418-19.776c.277.035.551.084.839.084a6.563 6.563 0 0 0 6.564-6.564a6.563 6.563 0 0 0-6.564-6.564"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/SkillsTabs.tsx",
                                                        lineNumber: 38,
                                                        columnNumber: 1753
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        fill: "#3ecc5f",
                                                        d: "M196.923 139.159h39.385v-26.256h-39.385z"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/SkillsTabs.tsx",
                                                        lineNumber: 38,
                                                        columnNumber: 2410
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        fill: "#44d860",
                                                        d: "M249.436 129.313a3.282 3.282 0 1 0 0-6.564c-.143 0-.281.025-.419.042c-.026-.099-.048-.197-.076-.296a3.283 3.283 0 0 0-1.264-6.31c-.747 0-1.429.258-1.98.68a9 9 0 0 0-.22-.22a3.25 3.25 0 0 0 .664-1.962a3.282 3.282 0 0 0-6.302-1.286a13 13 0 0 0-3.531-.494c-7.25 0-13.129 5.878-13.129 13.128s5.88 13.128 13.129 13.128c1.226 0 2.406-.181 3.531-.495a3.282 3.282 0 0 0 6.302-1.285c0-.74-.252-1.414-.665-1.962q.113-.108.221-.22c.551.421 1.233.68 1.98.68a3.282 3.282 0 0 0 1.264-6.31c.028-.098.05-.198.076-.296c.138.017.276.042.419.042"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/SkillsTabs.tsx",
                                                        lineNumber: 38,
                                                        columnNumber: 2483
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: "M78.77 50.544a3.28 3.28 0 0 1-3.283-3.282c0-5.43-4.416-9.847-9.846-9.847s-9.846 4.417-9.846 9.847a3.282 3.282 0 1 1-6.564 0c0-9.05 7.36-16.41 16.41-16.41s16.41 7.36 16.41 16.41a3.28 3.28 0 0 1-3.282 3.282"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/SkillsTabs.tsx",
                                                        lineNumber: 38,
                                                        columnNumber: 3042
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        fill: "#ffff50",
                                                        d: "M131.282 217.928h78.77c14.5 0 26.256-11.755 26.256-26.256V99.774h-78.77c-14.501 0-26.256 11.755-26.256 26.257z"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/SkillsTabs.tsx",
                                                        lineNumber: 38,
                                                        columnNumber: 3264
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: "M216.641 140.472h-65.692a1.312 1.312 0 1 1 0-2.626h65.692a1.312 1.312 0 1 1 0 2.626m0 26.256h-65.692a1.312 1.312 0 1 1 0-2.625h65.692a1.312 1.312 0 1 1 0 2.625m0 26.257h-65.692a1.312 1.312 0 1 1 0-2.626h65.692a1.312 1.312 0 1 1 0 2.626m0-65.398h-65.692a1.312 1.312 0 1 1 0-2.626h65.692a1.312 1.312 0 1 1 0 2.626m0 26.013h-65.692a1.312 1.312 0 1 1 0-2.626h65.692a1.312 1.312 0 1 1 0 2.626m0 26.256h-65.692a1.312 1.312 0 1 1 0-2.625h65.692a1.312 1.312 0 1 1 0 2.625m19.667-121.289c-.016 0-.03-.008-.045-.007c-4.057.138-5.976 4.196-7.67 7.776c-1.766 3.74-3.133 6.174-5.373 6.1c-2.48-.089-3.898-2.89-5.4-5.856c-1.724-3.404-3.694-7.266-7.828-7.122c-3.999.137-5.925 3.668-7.623 6.783c-1.808 3.32-3.038 5.337-5.41 5.244c-2.53-.092-3.875-2.37-5.43-5.006c-1.735-2.935-3.74-6.236-7.793-6.123c-3.93.135-5.862 3.131-7.566 5.776c-1.802 2.797-3.065 4.5-5.468 4.4c-2.59-.094-3.928-1.983-5.476-4.171c-1.738-2.46-3.697-5.242-7.739-5.107c-3.844.131-5.775 2.585-7.478 4.75c-1.617 2.053-2.88 3.678-5.551 3.576a1.314 1.314 0 0 0-.095 2.626c3.96.132 5.967-2.365 7.709-4.578c1.545-1.964 2.879-3.66 5.505-3.748c2.528-.108 3.714 1.463 5.507 3.997c1.703 2.408 3.635 5.139 7.524 5.279c4.073.137 6.033-2.908 7.769-5.602c1.552-2.408 2.89-4.486 5.448-4.574c2.354-.088 3.635 1.773 5.442 4.833c1.702 2.884 3.631 6.152 7.597 6.296c4.103.142 6.084-3.44 7.81-6.61c1.495-2.741 2.907-5.331 5.407-5.417c2.354-.055 3.582 2.094 5.397 5.685c1.697 3.352 3.62 7.148 7.648 7.294q.111.004.222.004c4.022 0 5.93-4.037 7.62-7.607c1.496-3.164 2.911-6.145 5.34-6.266z"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/SkillsTabs.tsx",
                                                        lineNumber: 38,
                                                        columnNumber: 3407
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        fill: "#3ecc5f",
                                                        d: "M105.026 217.928h52.512v-52.513h-52.512z"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/SkillsTabs.tsx",
                                                        lineNumber: 38,
                                                        columnNumber: 4942
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        fill: "#44d860",
                                                        d: "M183.795 185.108c-.288 0-.562.048-.839.084c-.05-.197-.097-.395-.152-.592a6.563 6.563 0 0 0-2.527-12.62c-1.494 0-2.856.52-3.96 1.36a35 35 0 0 0-.44-.442a6.5 6.5 0 0 0 1.328-3.92a6.563 6.563 0 0 0-12.602-2.573c-.195-.055-.39-.1-.584-.15c.035-.278.084-.552.084-.84a6.563 6.563 0 0 0-6.565-6.564a6.563 6.563 0 0 0-6.564 6.564c0 .288.049.562.084.84c-.194.05-.39.095-.584.15a6.563 6.563 0 0 0-12.602 2.572c0 1.477.505 2.824 1.328 3.921c-4.88 4.769-7.918 11.413-7.918 18.774c0 14.501 11.755 26.256 26.256 26.256c12.26 0 22.528-8.415 25.418-19.776c.277.035.551.084.839.084a6.563 6.563 0 0 0 6.564-6.564a6.563 6.563 0 0 0-6.564-6.564"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/SkillsTabs.tsx",
                                                        lineNumber: 38,
                                                        columnNumber: 5015
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        fill: "#3ecc5f",
                                                        d: "M105.026 139.159h52.512v-26.256h-52.512z"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/SkillsTabs.tsx",
                                                        lineNumber: 38,
                                                        columnNumber: 5672
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        fill: "#44d860",
                                                        d: "M170.667 129.313a3.282 3.282 0 1 0 0-6.564c-.143 0-.281.025-.42.042q-.036-.148-.075-.296a3.283 3.283 0 0 0-1.265-6.31c-.747 0-1.428.258-1.98.68a9 9 0 0 0-.22-.22a3.25 3.25 0 0 0 .664-1.962a3.282 3.282 0 0 0-6.301-1.286a13 13 0 0 0-3.532-.494c-7.249 0-13.128 5.878-13.128 13.128s5.88 13.128 13.128 13.128a13 13 0 0 0 3.532-.495a3.282 3.282 0 0 0 6.301-1.285a3.25 3.25 0 0 0-.664-1.962q.113-.108.22-.22c.552.421 1.233.68 1.98.68a3.282 3.282 0 0 0 1.265-6.31l.076-.296c.138.017.276.042.419.042"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/SkillsTabs.tsx",
                                                        lineNumber: 38,
                                                        columnNumber: 5745
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: "M183.795 32.492c-.21 0-.433-.026-.643-.065a3.3 3.3 0 0 1-.617-.184a3.4 3.4 0 0 1-.566-.302a5 5 0 0 1-.5-.407c-.142-.158-.287-.315-.405-.499a3.5 3.5 0 0 1-.303-.564a3.4 3.4 0 0 1-.248-1.26c0-.21.026-.434.065-.644s.105-.407.183-.617c.08-.197.185-.38.303-.565c.118-.17.263-.34.406-.498c.159-.145.328-.29.499-.407a3.2 3.2 0 0 1 1.183-.486a3 3 0 0 1 1.286 0c.209.04.42.105.617.184c.196.078.38.183.565.302c.17.118.34.262.499.407c.144.157.288.328.407.498c.118.184.223.368.301.565c.08.21.145.407.184.617c.038.21.066.433.066.643a3.33 3.33 0 0 1-.958 2.324a5 5 0 0 1-.5.407a3.4 3.4 0 0 1-.564.302a3.4 3.4 0 0 1-.617.184c-.21.04-.433.065-.643.065m26.256-1.641a3.35 3.35 0 0 1-2.325-.958a5 5 0 0 1-.405-.499a3.5 3.5 0 0 1-.304-.564a3.4 3.4 0 0 1-.248-1.26c0-.867.355-1.707.957-2.324c.16-.145.328-.29.5-.407a3.2 3.2 0 0 1 1.182-.486c.42-.092.866-.092 1.287 0c.208.04.42.105.617.184c.195.078.38.183.564.302c.17.118.34.262.499.407c.603.617.958 1.457.958 2.323a3.4 3.4 0 0 1-.249 1.261c-.092.196-.184.38-.302.564c-.118.17-.263.341-.407.499a5 5 0 0 1-.499.407a3.4 3.4 0 0 1-.564.302a3.4 3.4 0 0 1-.617.184c-.21.039-.434.065-.644.065"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/SkillsTabs.tsx",
                                                        lineNumber: 38,
                                                        columnNumber: 6268
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/SkillsTabs.tsx",
                                                lineNumber: 38,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "Docusaurus"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/SkillsTabs.tsx",
                                                lineNumber: 39,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/SkillsTabs.tsx",
                                        lineNumber: 37,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/SkillsTabs.tsx",
                                lineNumber: 21,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/SkillsTabs.tsx",
                        lineNumber: 19,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                className: "pt-2 pb-1 text-neutral-500 font-semibold text-sm",
                                children: "Data Science"
                            }, void 0, false, {
                                fileName: "[project]/src/components/SkillsTabs.tsx",
                                lineNumber: 44,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: "text-lg text-neutral-200 space-y-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        className: "flex items-center space-x-2 px-3 py-1 bg-neutral-900 md:hover:bg-[#ffc331]/10 md:hover:text-[#ffc331] md:border-[1px] border-neutral-900 hover:border-[#ffc331]/50 rounded-lg",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                xmlns: "http://www.w3.org/2000/svg",
                                                width: 24,
                                                height: 24,
                                                viewBox: "0 0 128 128",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    fill: "currentColor",
                                                    d: "M49.33 62h29.159C86.606 62 93 55.132 93 46.981V19.183c0-7.912-6.632-13.856-14.555-15.176c-5.014-.835-10.195-1.215-15.187-1.191c-4.99.023-9.612.448-13.805 1.191C37.098 6.188 35 10.758 35 19.183V30h29v4H23.776c-8.484 0-15.914 5.108-18.237 14.811c-2.681 11.12-2.8 17.919 0 29.53C7.614 86.983 12.569 93 21.054 93H31V79.952C31 70.315 39.428 62 49.33 62m-1.838-39.11c-3.026 0-5.478-2.479-5.478-5.545c0-3.079 2.451-5.581 5.478-5.581c3.015 0 5.479 2.502 5.479 5.581c-.001 3.066-2.465 5.545-5.479 5.545m74.789 25.921C120.183 40.363 116.178 34 107.682 34H97v12.981C97 57.031 88.206 65 78.489 65H49.33C41.342 65 35 72.326 35 80.326v27.8c0 7.91 6.745 12.564 14.462 14.834c9.242 2.717 17.994 3.208 29.051 0C85.862 120.831 93 116.549 93 108.126V97H64v-4h43.682c8.484 0 11.647-5.776 14.599-14.66c3.047-9.145 2.916-17.799 0-29.529m-41.955 55.606c3.027 0 5.479 2.479 5.479 5.547c0 3.076-2.451 5.579-5.479 5.579c-3.015 0-5.478-2.502-5.478-5.579c0-3.068 2.463-5.547 5.478-5.547"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/SkillsTabs.tsx",
                                                    lineNumber: 47,
                                                    columnNumber: 100
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/SkillsTabs.tsx",
                                                lineNumber: 47,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "Python"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/SkillsTabs.tsx",
                                                lineNumber: 48,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/SkillsTabs.tsx",
                                        lineNumber: 46,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        className: "flex items-center space-x-2 px-3 py-1 bg-neutral-900 md:hover:bg-[#242938] md:border-[1px] border-neutral-900 hover:border-neutral-200/60 rounded-lg",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                xmlns: "http://www.w3.org/2000/svg",
                                                width: 24,
                                                height: 24,
                                                viewBox: "0 0 128 128",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        fill: "#fff",
                                                        d: "M63.975 125.09c-16.317 0-31.658-6.355-43.197-17.893S2.885 80.318 2.885 64S9.24 32.341 20.778 20.803S47.657 2.91 63.975 2.91s31.659 6.355 43.198 17.893S125.065 47.682 125.065 64s-6.355 31.659-17.893 43.198s-26.879 17.892-43.197 17.892"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/SkillsTabs.tsx",
                                                        lineNumber: 51,
                                                        columnNumber: 100
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        fill: "none",
                                                        stroke: "#858585",
                                                        strokeDasharray: ".407 .814",
                                                        strokeLinecap: "round",
                                                        strokeLinejoin: "round",
                                                        strokeMiterlimit: 7.976,
                                                        strokeWidth: 0.856,
                                                        d: "M63.974 63.784h61.09m-61.09 0l43.197-43.196M63.974 63.784V2.694m0 61.09L20.778 20.588m43.196 43.196H2.884m61.09 0l-43.196 43.197m43.196-43.197v61.09m0-61.09l43.197 43.197",
                                                        opacity: 0.9
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/SkillsTabs.tsx",
                                                        lineNumber: 51,
                                                        columnNumber: 363
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                                        fill: "none",
                                                        stroke: "#818181",
                                                        strokeDasharray: ".407 .814",
                                                        strokeLinecap: "square",
                                                        strokeLinejoin: "round",
                                                        strokeMiterlimit: 199.409,
                                                        strokeWidth: 0.856,
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                d: "m70.764 63.784l-.202-1.643l-.593-1.543l-.949-1.355l-1.25-1.085l-1.474-.751l-1.61-.373l-1.654.03l-1.599.429l-1.447.801l-1.209 1.128l-.9 1.388l-.539 1.565l-.145 1.649l.259 1.634l.646 1.523l.994 1.321l1.286 1.041l1.5.698l1.623.316l1.653-.086l1.582-.484l1.418-.852l1.17-1.17l.851-1.417l.484-1.582l.105-1.182h0",
                                                                opacity: 0.9
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/SkillsTabs.tsx",
                                                                lineNumber: 51,
                                                                columnNumber: 865
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                d: "m84.339 63.784l-.198-2.833l-.59-2.779l-.973-2.669l-1.333-2.509l-1.67-2.299l-1.973-2.044l-2.238-1.75l-2.461-1.42l-2.633-1.064l-2.758-.688l-2.825-.297l-2.84.099l-2.797.494l-2.702.877l-2.554 1.246l-2.356 1.588l-2.111 1.901l-1.826 2.177l-1.506 2.408l-1.155 2.596l-.782 2.73l-.396 2.814v2.842l.396 2.814l.782 2.73l1.155 2.596l1.506 2.408l1.826 2.177l2.111 1.902l2.356 1.588l2.554 1.245l2.702.877l2.798.494l2.84.1l2.824-.298l2.758-.687l2.633-1.065l2.461-1.42l2.238-1.75l1.973-2.044l1.67-2.299l1.333-2.51l.972-2.668l.591-2.779l.198-2.83h0",
                                                                opacity: 0.9
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/SkillsTabs.tsx",
                                                                lineNumber: 51,
                                                                columnNumber: 1202
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                d: "m97.914 63.784l-.185-3.548l-.555-3.509l-.92-3.43l-1.272-3.317l-1.613-3.166l-1.935-2.978l-2.236-2.762l-2.512-2.511l-2.761-2.236l-2.979-1.935l-3.165-1.613l-3.317-1.273l-3.43-.919l-3.51-.555l-3.548-.185l-3.548.185l-3.508.555l-3.43.92l-3.318 1.272l-3.165 1.613l-2.979 1.935l-2.761 2.236l-2.512 2.511l-2.236 2.762l-1.935 2.978l-1.613 3.166l-1.273 3.317l-.919 3.43l-.555 3.509l-.185 3.548l.185 3.548l.555 3.509l.92 3.43l1.272 3.317l1.613 3.166l1.935 2.978l2.236 2.762l2.512 2.511l2.761 2.236l2.979 1.935l3.165 1.614l3.317 1.272l3.43.92l3.51.555l3.547.185l3.549-.185l3.508-.556l3.43-.919l3.318-1.272l3.165-1.614l2.979-1.935l2.761-2.236l2.512-2.511l2.236-2.762l1.935-2.978l1.613-3.166l1.272-3.317l.92-3.43l.555-3.509l.185-3.548h0",
                                                                opacity: 0.9
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/SkillsTabs.tsx",
                                                                lineNumber: 51,
                                                                columnNumber: 1765
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                d: "m111.489 63.784l-.26-4.966l-.78-4.911l-1.286-4.804l-1.782-4.642l-2.257-4.432l-2.709-4.171l-3.13-3.866l-3.516-3.517l-3.866-3.13l-4.171-2.709L83.3 20.38l-4.642-1.781l-4.804-1.287l-4.912-.779l-4.966-.26l-4.966.26l-4.91.779l-4.805 1.287l-4.642 1.781l-4.432 2.257l-4.17 2.71l-3.867 3.13l-3.517 3.516l-3.13 3.866l-2.708 4.17l-2.257 4.433l-1.782 4.642l-1.287 4.804l-.778 4.911l-.261 4.966l.26 4.966l.779 4.911l1.287 4.805l1.782 4.642l2.257 4.431l2.709 4.171l3.13 3.866l3.516 3.517l3.866 3.13l4.171 2.709l4.432 2.257l4.642 1.781l4.804 1.288l4.911.778l4.966.26l4.966-.26l4.912-.778l4.804-1.288l4.642-1.781l4.432-2.257l4.17-2.71l3.867-3.129l3.516-3.517l3.13-3.866l2.71-4.17l2.256-4.432l1.782-4.642l1.287-4.805l.778-4.91l.261-4.967h0",
                                                                opacity: 0.9
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/SkillsTabs.tsx",
                                                                lineNumber: 51,
                                                                columnNumber: 2518
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/SkillsTabs.tsx",
                                                        lineNumber: 51,
                                                        columnNumber: 712
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        fill: "#11557c",
                                                        d: "M64 126c-16.56 0-32.13-6.449-43.84-18.159S2 80.561 2 64s6.449-32.13 18.159-43.841S47.439 2 64 2s32.131 6.449 43.841 18.159S126 47.439 126 64s-6.449 32.131-18.159 43.841S80.561 126 64 126M64 3.82c-16.074 0-31.187 6.26-42.553 17.626C10.08 32.813 3.82 47.925 3.82 64s6.26 31.188 17.626 42.554S47.925 124.18 64 124.18s31.188-6.26 42.554-17.626S124.18 80.075 124.18 64s-6.26-31.187-17.626-42.554C95.187 10.08 80.075 3.82 64 3.82"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/SkillsTabs.tsx",
                                                        lineNumber: 51,
                                                        columnNumber: 3276
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        fill: "#004cff",
                                                        d: "m63.975 63.784l.129-.042l.129-.042l.129-.042l.129-.042l.129-.042l.129-.042l.129-.042l.129-.042l.129-.042l.129-.042l.129-.042l.129-.042l.129-.042l.129-.042l.129-.042l.129-.042l.129-.042l.129-.042l.129-.042l.129-.042l.129-.042l.129-.042l.129-.042l.129-.042l.129-.042l.129-.042l.129-.042l.129-.042l.129-.042l.129-.042l.129-.042l.129-.042l.129-.042l.129-.042l.129-.042l.129-.042l.129-.042l.129-.042l.129-.042l.129-.042l.129-.042l.129-.042l.129-.042l.129-.042l.129-.042l.129-.042l.129-.042l.129-.042l.129-.042l.129-.042l.129-.042l.129-.042l.129-.042l.129-.042l.129-.042l.129-.042l.129-.042l.129-.042l.129-.042l.129-.042l.129-.042l.129-.042l.129-.042l.129-.042l.129-.042l.129-.042l.129-.042l.129-.042l.129-.042l.129-.042l.129-.042l.129-.042l.129-.042l.129-.042l.129-.042l.129-.042l.129-.042l.129-.042l.129-.042l.129-.042l.129-.042l.129-.042l.129-.042l.129-.042l.129-.042l.129-.042l.129-.042l.129-.042l.129-.042l.129-.042l.129-.042l.129-.042l.129-.042l.129-.042l.129-.042l.129-.042l.129-.042l.129-.042l.129-.042l.129-.042l.025.046l.013.041l.013.041l.013.041l.013.041l.013.041l.012.041l.012.041l.011.039l.012.041l.012.041l.012.041l.012.041l.011.041l.011.041l.011.041l.011.041l.011.041l.011.041l.011.041l.011.041l.01.041l.01.041l.01.041l.01.041l.01.041l.01.042l.01.042l.009.042l.009.042l.009.042l.009.042l.009.042l.009.042l.009.042l.009.042l.009.042l.008.042l.008.042l.008.042l.008.042l.008.042l.008.042l.007.042l.007.042l.007.042l.007.042l.007.042l.007.042l.007.042l.007.042l.007.042l.006.042l.006.042l.006.042l.006.042l.006.042l.006.042l.006.042l.005.042l.005.042l.005.042l.005.042l.005.042l.005.042l.005.042l.005.042l.004.042l.004.042l.004.042l.004.042l.004.042l.004.042l.004.043l.003.043l.003.043l.003.043l.003.043l.003.043l.003.043l.003.043l.003.043l.002.043l.002.043l.002.043l.002.043l.002.043l.002.043l.002.043l.001.043l.001.043l.001.043l.001.043l.001.043l.001.043l.001.043v.172H64.11z",
                                                        opacity: 0.6
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/SkillsTabs.tsx",
                                                        lineNumber: 51,
                                                        columnNumber: 3732
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        fill: "#ceff29",
                                                        d: "m63.975 63.784l.143-.381l.143-.381l.143-.381l.143-.381l.143-.381l.143-.381l.143-.381l.143-.381l.143-.381l.143-.381l.143-.381l.143-.381l.143-.381l.143-.381l.143-.381l.143-.381l.143-.381l.143-.381l.143-.381l.143-.381l.143-.381l.143-.381l.143-.381l.143-.381l.143-.381l.143-.381l.143-.381l.143-.381l.143-.381l.143-.381l.143-.381l.143-.381l.143-.381l.143-.381l.143-.381l.143-.381l.143-.381l.143-.381l.143-.381l.143-.381l.143-.381l.143-.381l.143-.381l.143-.381l.143-.381l.143-.381l.143-.381l.143-.381l.143-.381l.143-.381l.143-.381l.143-.381l.143-.381l.143-.381l.143-.381l.143-.381l.143-.381l.143-.381l.143-.381l.143-.381l.143-.381l.143-.381l.143-.381l.143-.381l.143-.381l.143-.381l.143-.381l.143-.381l.143-.381l.143-.381l.143-.381l.143-.381l.143-.381l.143-.381l.143-.381l.143-.381l.143-.381l.143-.381l.143-.381l.143-.381l.143-.381l.143-.381l.143-.381l.143-.381l.143-.381l.143-.381l.143-.381l.143-.381l.143-.381l.143-.381l.143-.381l.143-.381l.143-.381l.143-.381l.143-.381l.143-.381l.143-.381l.154-.411l.143-.381l.143-.381l.12.045l.12.046l.119.046l.119.046l.119.047l.119.047l.119.047l.119.048l.119.048l.118.049l.118.049l.118.049l.118.05l.118.05l.118.05l.117.051l.117.051l.117.051l.117.052l.117.052l.117.053l.116.053l.116.053l.116.054l.116.054l.116.054l.116.055l.115.055l.115.055l.115.056l.115.056l.115.057l.115.057l.114.057l.114.058l.114.058l.114.058l.114.059l.113.059l.113.059l.113.06l.113.06l.113.061l.113.061l.112.061l.112.062l.112.062l.112.062l.112.063l.111.063l.111.063l.111.064l.111.064l.111.064l.11.065l.11.065l.11.065l.11.066l.11.066l.109.066l.109.067l.109.067l.109.067l.108.068l.108.068l.108.068l.108.069l.108.069l.107.069l.107.07l.107.07l.107.071l.107.071l.106.071l.106.072l.106.072l.106.072l.105.073l.105.073l.105.073l.105.074l.104.074l.104.074l.104.074l.104.075l.104.075l.103.075l.103.076l.103.076l.103.076l.102.077l.102.077l.102.077l.102.078l.101.078l.101.078l.101.079l.101.079l.1.079l.1.08l-.254.318l-.254.318l-.254.318l-.254.318l-.254.318l-.254.318l-.254.318l-.254.318l-.254.318l-.254.318l-.254.318l-.254.318l-.254.318l-.252.324l-.254.318l-.254.318l-.254.318l-.254.318l-.254.318l-.253.32l-.254.318l-.254.318l-.254.318l-.254.318l-.254.318l-.254.318l-.254.318l-.254.318l-.254.318l-.254.318l-.254.318l-.254.318l-.254.318l-.254.318l-.254.318l-.254.318l-.254.318l-.254.318l-.254.318l-.254.318l-.254.318l-.254.318l-.254.318l-.254.318l-.254.318l-.254.318l-.254.318l-.254.318l-.254.318l-.254.318l-.254.318l-.252.332l-.254.318l-.254.318l-.254.318l-.254.318l-.254.318l-.254.32l-.254.318l-.254.318l-.254.318l-.254.318l-.254.318l-.254.318l-.254.318l-.254.318l-.254.318l-.254.318l-.254.318l-.254.318l-.254.318l-.254.318l-.254.318l-.254.318l-.254.318l-.254.318l-.254.318l-.254.318l-.254.318l-.254.318l-.252.328l-.254.318l-.254.318l-.254.318l-.254.318l-.254.318l-.254.318l-.254.318l-.254.318l-.254.318l-.254.318l-.254.318l-.254.318l-.254.318l-.254.318l-.254.318l-.254.318l-.254.318l-.254.318z",
                                                        opacity: 0.6
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/SkillsTabs.tsx",
                                                        lineNumber: 51,
                                                        columnNumber: 5662
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        fill: "#ff6800",
                                                        d: "m63.975 63.784l-.348-.417l-.348-.417l-.348-.417l-.348-.417l-.348-.417l-.348-.417l-.348-.417l-.348-.417l-.348-.417l-.348-.417l-.348-.417l-.348-.417l-.348-.417l-.348-.417l-.348-.417l-.348-.417l-.348-.417l-.348-.417l-.348-.417l-.348-.417l-.348-.417l-.348-.417l-.348-.417l-.348-.417l-.348-.417l-.348-.417l-.348-.417l-.348-.417l-.348-.417l-.348-.417l-.348-.417l-.348-.417l-.348-.417l-.348-.417l-.348-.417l-.348-.417l-.348-.417l-.348-.417l-.348-.417l-.348-.417l-.348-.417l-.348-.417l-.348-.417l-.348-.417l-.348-.417l-.348-.417l-.348-.417l-.348-.417l-.348-.417l-.348-.417l-.348-.417l-.348-.417l-.348-.417l-.348-.417l-.348-.417l-.348-.417l-.348-.417l-.348-.417l-.348-.417l-.348-.417l-.348-.417l-.348-.417l-.348-.417l-.348-.417l-.348-.417l-.348-.417l-.348-.417l-.348-.417l-.348-.417l-.348-.417l-.348-.417l-.348-.417l-.348-.417l-.348-.417l-.348-.417l-.348-.417l-.348-.417l-.348-.417l-.348-.417l-.348-.417l-.348-.417l-.348-.417l-.348-.417l-.348-.417l-.348-.417l-.348-.417l-.348-.417l-.348-.417l-.348-.417l-.348-.417l-.348-.417l-.348-.417l-.348-.417l-.349-.403l-.348-.417l-.348-.417l-.348-.417l-.348-.417l-.348-.417l-.348-.417l.197-.164l.198-.163l.198-.162l.199-.161l.2-.16l.201-.159l.201-.158l.202-.157l.203-.156l.204-.155l.204-.154l.205-.153l.206-.152l.206-.151l.207-.15l.208-.149l.209-.148l.209-.147l.21-.146l.211-.145l.211-.144l.212-.143l.213-.142l.213-.141l.214-.14l.215-.139l.215-.138l.216-.137l.217-.136l.217-.135l.218-.134l.219-.133l.219-.132l.22-.131l.22-.13l.221-.129l.222-.128l.222-.127l.223-.126l.223-.125l.224-.124l.225-.123l.225-.122l.226-.121l.226-.12l.227-.118l.227-.117l.228-.116l.228-.115l.229-.114l.23-.113l.23-.112l.231-.111l.231-.11l.232-.109l.232-.108l.233-.107l.233-.105l.234-.104l.234-.103l.235-.102l.235-.101l.236-.1l.236-.099l.237-.098l.237-.097l.237-.095l.238-.094l.238-.093l.239-.092l.239-.091l.24-.09l.24-.089l.24-.088l.241-.086l.241-.085l.242-.084l.242-.083l.242-.082l.243-.081l.243-.08l.244-.078l.244-.077l.244-.076l.245-.075l.245-.074l.245-.073l.246-.072l.246-.07l.246-.069l.247-.068l.247-.067l.247-.066l.248-.065l.248-.063l.248-.062l.249-.061l.249-.06l.249-.059l.249-.058l.121.529l.121.529l.121.529l.121.529l.121.529l.121.529l.121.529l.121.529l.121.529l.121.529l.121.529l.121.529l.121.529l.121.529l.121.529l.121.529l.121.529l.121.529l.121.529l.121.529l.121.529l.121.529l.121.529l.121.529l.121.529l.121.529l.121.529l.121.529l.121.529l.121.529l.121.529l.121.529l.121.529l.113.543l.121.529l.121.529l.121.529l.121.529l.121.529l.121.529l.121.529l.121.529l.121.529l.121.529l.121.529l.121.529l.121.529l.121.529l.121.529l.121.529l.121.529l.121.529l.121.529l.121.529l.121.529l.121.529l.121.529l.121.529l.121.529l.121.529l.121.529l.121.529l.121.529l.121.529l.121.529l.121.529l.121.529l.121.529l.121.529l.121.529l.121.529l.121.529l.121.529l.121.529l.121.529l.121.529l.121.529l.121.529l.121.529l.121.529l.121.529l.121.529l.121.529l.121.529l.121.529l.121.529l.121.529l.121.529l.121.529l.121.529l.121.529l.121.529l.121.529l.121.529l.121.529l.121.529l.121.529l.121.529l.121.529z",
                                                        opacity: 0.6
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/SkillsTabs.tsx",
                                                        lineNumber: 51,
                                                        columnNumber: 8593
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        fill: "#ffc400",
                                                        d: "m63.975 63.784l-.468.085l-.468.085l-.468.085l-.468.085l-.468.085l-.468.085l-.468.085l-.468.085l-.468.085l-.463.083l-.468.085l-.468.085l-.468.085l-.468.085l-.468.085l-.468.085l-.468.085l-.468.085l-.468.085l-.468.085l-.468.085l-.462.083l-.468.085l-.468.085l-.468.085l-.466.085l-.468.085l-.468.085l-.468.085l-.468.085l-.468.085l-.468.085l-.468.085l-.468.085l-.468.085l-.468.085l-.468.085l-.468.085l-.468.085l-.468.085l-.468.085l-.468.085l-.468.085l-.468.085l-.468.085l-.468.085l-.468.085l-.468.085l-.468.085l-.456.081l-.468.085l-.468.085l-.468.085l-.468.085l-.468.085l-.468.085l-.468.085l-.468.085l-.468.085l-.468.085l-.468.085l-.468.085l-.468.085l-.468.085l-.468.085l-.468.085l-.468.085l-.468.085l-.468.085l-.468.085l-.468.085l-.468.085l-.468.085l-.468.085l-.468.085l-.468.085l-.468.085l-.468.085l-.468.085l-.468.085l-.468.085l-.468.085l-.468.085l-.468.085l-.468.085l-.45.079l-.468.085l-.468.085l-.468.085l-.466.085l-.468.085l-.468.085l-.468.085l-.468.085l-.468.085l-.468.085l-.468.085l-.468.085l-.468.085l-.468.085l-.052-.294l-.051-.294l-.049-.295l-.047-.295l-.045-.295l-.038-.297l-.041-.296l-.039-.296l-.038-.296l-.036-.296l-.034-.297l-.032-.297l-.03-.297l-.028-.297l-.026-.297l-.024-.298l-.023-.298l-.021-.298l-.019-.298l-.017-.298l-.015-.298l-.013-.298l-.011-.298l-.009-.298l-.008-.298l-.006-.298l-.004-.299l-.002-.299v-.299l.002-.299l.004-.299l.005-.298l.007-.298l.009-.298l.011-.298l.013-.298l.015-.298l.017-.298l.019-.298l.02-.298l.022-.298l.024-.298l.026-.297l.028-.297l.03-.297l.032-.297l.034-.297l.035-.296l.037-.296l.039-.296l.041-.296l.043-.295l.045-.295l.047-.295l.048-.295l.05-.294l.052-.294l.054-.294l.056-.293l.058-.293l.059-.293l.061-.292l.063-.292l.065-.291l.067-.291l.069-.291l.07-.29l.072-.29l.074-.289l.076-.289l.078-.288l.08-.288l.081-.287l.083-.287l.085-.286l.087-.286l.089-.285l.09-.285l.092-.284l.094-.283l.096-.283l.097-.282l.099-.282l.101-.281l.103-.28l.105-.28l.106-.279l.108-.278l.11-.278l.112-.277l.113-.276l.115-.276l.117-.275l.118-.274l.12-.273l.122-.273l.124-.272l.125-.271l.127-.27l.129-.269l.428.206l.428.206l.428.206l.428.206l.428.206l.428.206l.428.206l.428.206l.428.206l.428.206l.428.206l.428.206l.428.206l.428.206l.428.206l.428.206l.428.206l.428.206l.428.206l.428.206l.428.206l.428.206l.428.206l.428.206l.428.206l.428.206l.428.206l.428.206l.428.206l.428.206l.428.206l.428.206l.428.206l.428.206l.428.206l.428.206l.428.206l.428.206l.428.206l.428.206l.428.206l.428.206l.428.206l.428.206l.428.206l.428.206l.428.206l.428.206l.428.206l.428.206l.428.206l.428.206l.428.206l.428.206l.428.206l.428.206l.428.206l.428.206l.428.206l.428.206l.428.206l.428.206l.428.206l.428.206l.428.206l.428.206l.428.206l.428.206l.428.206l.428.206l.428.206l.428.206l.428.206l.428.206l.428.206l.428.206l.428.206l.428.206l.428.206l.428.206l.428.206l.428.206l.428.206l.428.206l.428.206l.428.206l.428.206l.428.206l.428.206l.428.206l.428.206l.428.206l.428.206l.428.206l.428.206l.428.206l.428.206l.428.206l.428.206z",
                                                        opacity: 0.6
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/SkillsTabs.tsx",
                                                        lineNumber: 51,
                                                        columnNumber: 11624
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        fill: "#29ffce",
                                                        d: "m63.975 63.784l-.223.155l-.223.155l-.223.155l-.223.155l-.223.155l-.223.155l-.223.155l-.224.151l-.223.155l-.223.155l-.223.155l-.223.155l-.223.155l-.223.155l-.223.155l-.223.155l-.223.155l-.223.155l-.223.155l-.223.155l-.223.155l-.223.155l-.223.155l-.223.155l-.223.155l-.223.155l-.223.155l-.223.155l-.223.155l-.223.155l-.223.155l-.223.155l-.223.155l-.223.155l-.223.155l-.223.155l-.223.155l-.223.155l-.223.155l-.223.155l-.223.155l-.223.155l-.223.155l-.223.155l-.223.155l-.223.155l-.223.155l-.223.155l-.223.155l-.223.155l-.223.155l-.223.155l-.223.155l-.223.155l-.232.137l-.223.155l-.223.155l-.223.155l-.223.155l-.223.155l-.223.155l-.223.155l-.223.155l-.223.155l-.223.155l-.223.155l-.223.155l-.223.155l-.223.155l-.223.155l-.223.155l-.223.155l-.223.155l-.223.155l-.223.155l-.223.155l-.223.155l-.223.155l-.223.155l-.223.155l-.223.155l-.223.155l-.223.155l-.223.155l-.223.155l-.223.155l-.223.155l-.223.155l-.223.155l-.223.155l-.223.155l-.223.155l-.223.155l-.223.155l-.223.155l-.223.155l-.223.155l-.223.155l-.231.138l-.223.155l-.024-.035l-.024-.035l-.024-.035l-.024-.035l-.024-.035l-.024-.035l-.024-.035l-.024-.035l-.024-.035l-.024-.035l-.024-.035l-.024-.035l-.024-.036l-.024-.036l-.023-.036l-.023-.036l-.023-.036l-.023-.036l-.023-.036l-.023-.036l-.023-.036l-.023-.036l-.023-.036l-.023-.036l-.023-.036l-.023-.036l-.023-.036l-.023-.036l-.023-.036l-.023-.036l-.023-.036l-.023-.036l-.022-.036l-.022-.036l-.022-.036l-.022-.036l-.022-.036l-.022-.036l-.022-.036l-.022-.036l-.022-.037l-.022-.037l-.022-.037l-.022-.037l-.022-.037l-.022-.037l-.022-.037l-.022-.037l-.022-.037l-.021-.037l-.021-.037l-.021-.037l-.021-.037l-.021-.037l-.021-.037l-.021-.037l-.021-.037l-.021-.037l-.021-.037l-.021-.037l-.021-.037l-.021-.037l-.021-.037l-.021-.037l-.021-.037l-.021-.037l-.021-.037l-.02-.037l-.02-.037l-.02-.037l-.02-.038l-.02-.038l-.02-.038l-.02-.038l-.02-.038l-.02-.038l-.02-.038l-.02-.038l-.02-.038l-.02-.038l-.02-.038l-.02-.038l-.02-.038l-.019-.038l-.019-.038l-.019-.038l-.019-.038l-.019-.038l-.019-.038l-.019-.038l-.019-.038l-.019-.038l-.019-.038l-.019-.038l-.019-.038l-.019-.038l-.019-.038l-.019-.041l-.019-.038l-.019-.038l.245-.118l.245-.118l.245-.118l.245-.118l.245-.118l.245-.118l.245-.118l.245-.118l.245-.118l.245-.118l.245-.118l.245-.118l.245-.118l.245-.118l.245-.118l.245-.118l.245-.118l.245-.118l.245-.118l.245-.118l.245-.118l.245-.118l.245-.118l.245-.118l.245-.118l.245-.118l.245-.118l.245-.118l.245-.118l.245-.118l.245-.118l.245-.118l.245-.118l.245-.118l.245-.118l.245-.118l.245-.118l.245-.118l.245-.118l.245-.118l.245-.118l.245-.118l.245-.118l.245-.118l.245-.118l.245-.118l.245-.118l.245-.118l.245-.118l.245-.118l.245-.118l.245-.118l.245-.118l.245-.118l.245-.118l.245-.118l.245-.118l.245-.118l.245-.118l.245-.118l.245-.118l.245-.118l.245-.118l.245-.118l.245-.118l.245-.118l.245-.118l.245-.118l.245-.118l.245-.118l.245-.118l.245-.118l.245-.118l.245-.118l.245-.118l.245-.118l.245-.118l.245-.118l.245-.118l.245-.118l.245-.118l.245-.118l.245-.118l.245-.118l.245-.118l.245-.118l.245-.118l.245-.118l.245-.118l.245-.118l.245-.118l.245-.118l.245-.118l.245-.118l.245-.118l.245-.118l.245-.118l.245-.118l.245-.118z",
                                                        opacity: 0.6
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/SkillsTabs.tsx",
                                                        lineNumber: 51,
                                                        columnNumber: 14586
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        fill: "#7dff7a",
                                                        d: "m63.975 63.784l.057.335l.057.335l.057.335l.057.335l.057.335l.057.335l.057.335l.057.335l.057.335l.057.335l.057.335l.057.335l.057.335l.057.335l.057.335l.057.335l.057.335l.057.335l.057.335l.057.335l.057.335l.057.335l.057.335l.057.335l.057.335l.057.335l.057.335l.057.335l.057.335l.057.335l.057.335l.057.335l.057.335l.057.335l.057.335l.057.335l.057.335l.057.335l.057.335l.057.335l.057.335l.057.335l.057.335l.057.335l.057.335l.057.335l.057.335l.057.335l.057.335l.057.335l.057.335l.057.335l.057.335l.057.335l.057.335l.057.335l.057.335l.057.335l.057.335l.057.335l.057.335l.057.335l.057.335l.057.335l.057.335l.057.335l.057.335l.057.335l.057.335l.057.335l.057.335l.057.335l.057.335l.057.335l.057.335l.057.335l.057.335l.057.335l.057.335l.057.335l.057.335l.057.335l.057.335l.057.335l.057.335l.057.335l.057.335l.057.335l.057.335l.057.335l.057.335l.057.335l.057.335l.057.335l.057.335l.057.335l.057.335l.057.335l.057.335l.057.335l-.131.022l-.132.022l-.132.021l-.132.021l-.132.02l-.132.019l-.132.019l-.132.018l-.132.018l-.132.017l-.132.017l-.132.016l-.132.016l-.132.015l-.132.015l-.132.014l-.133.014l-.133.013l-.133.013l-.133.012l-.133.012l-.133.011l-.133.011l-.133.01l-.133.01l-.133.009l-.133.009l-.133.008l-.133.007l-.133.007l-.133.007l-.133.006l-.133.005l-.133.005l-.133.004l-.133.004l-.133.003l-.133.003l-.133.002l-.133.002l-.133.001l-.133.001h-.266l-.133-.001l-.133-.001l-.133-.002l-.133-.002l-.133-.003l-.133-.003l-.133-.004l-.153-.047l-.133-.005l-.133-.005l-.133-.006l-.133-.007l-.134-.007l-.133-.008l-.133-.008l-.133-.009l-.133-.009l-.133-.01l-.133-.01l-.133-.011l-.133-.011l-.133-.012l-.133-.012l-.133-.013l-.133-.013l-.133-.014l-.132-.015l-.13-.015l-.132-.015l-.132-.016l-.132-.017l-.132-.017l-.132-.018l-.132-.018l-.132-.019l-.132-.019l-.132-.02l-.132-.02l-.132-.021l-.132-.021l-.131-.022l-.131-.022l-.131-.023l-.131-.023l-.131-.024l-.131-.024l-.131-.025l-.131-.025l-.131-.026l-.131-.026l-.131-.027l-.13-.027l-.13-.028l-.13-.028l-.13-.029l-.13-.029l.076-.331l.076-.331l.076-.331l.076-.331l.076-.331l.076-.331l.076-.331l.076-.331l.076-.331l.076-.331l.076-.331l.076-.331l.076-.331l.076-.331l.076-.331l.076-.331l.076-.331l.076-.331l.076-.331l.076-.331l.076-.331l.076-.331l.076-.331l.076-.331l.076-.331l.076-.331l.076-.331l.076-.331l.076-.331l.076-.331l.076-.331l.076-.331l.076-.331l.076-.331l.076-.331l.076-.331l.076-.331l.076-.331l.076-.331l.076-.331l.076-.331l.076-.331l.076-.331l.076-.331l.076-.331l.076-.331l.076-.331l.076-.331l.076-.331l.076-.331l.076-.331l.076-.331l.076-.331l.076-.331l.076-.331l.076-.331l.076-.331l.076-.331l.076-.331l.076-.331l.076-.331l.076-.331l.076-.331l.076-.331l.076-.331l.076-.331l.076-.331l.076-.331l.076-.331l.076-.331l.076-.331l.076-.331l.076-.331l.076-.331l.076-.331l.076-.331l.076-.331l.076-.331l.076-.331l.076-.331l.076-.331l.076-.331l.076-.331l.076-.331l.076-.331l.076-.331l.076-.331l.076-.331l.076-.331l.076-.331l.076-.331l.076-.331l.076-.331l.076-.331l.076-.331l.076-.331l.076-.331l.076-.331l.076-.331z",
                                                        opacity: 0.6
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/SkillsTabs.tsx",
                                                        lineNumber: 51,
                                                        columnNumber: 17722
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        fill: "#ff6800",
                                                        d: "m63.975 63.784l.428.334l.428.334l.428.334l.428.334l.428.334l.428.334l.428.334l.428.334l.428.334l.428.334l.428.334l.428.334l.428.334l.428.334l.433.33l.428.334l.428.334l.428.334l.428.334l.428.334l.428.334l.428.334l.428.334l.428.334l.428.334l.428.334l.428.334l.428.334l.428.334l.428.334l.428.334l.428.334l.428.334l.428.334l.428.334l.428.334l.428.334l.428.334l.428.334l.428.334l.428.334l.428.334l.428.334l.428.334l.428.334l.428.334l.428.334l.428.334l.428.334l.428.334l.428.334l.428.334l.428.334l.428.334l.428.334l.428.334l.428.334l.428.334l.428.334l.428.334l.428.334l.428.334l.428.334l.428.334l.428.334l.428.334l.428.334l.428.334l.428.334l.428.334l.428.334l.428.334l.428.334l.428.334l.428.334l.428.334l.428.334l.428.334l.428.334l.428.334l.428.334l.428.334l.428.334l.428.334l.428.334l.428.334l.428.334l.428.334l.428.334l.428.334l.428.334l.428.334l.428.334l.428.334l.428.334l.428.334l.428.334l.428.334l.428.334l.428.334l-.079.101l-.079.101l-.079.1l-.079.1l-.08.1l-.08.1l-.08.1l-.08.1l-.081.099l-.081.099l-.081.099l-.081.099l-.082.099l-.082.098l-.082.098l-.082.098l-.083.098l-.083.098l-.083.097l-.083.097l-.083.097l-.084.097l-.084.097l-.084.096l-.084.096l-.085.096l-.085.096l-.085.096l-.085.095l-.085.095l-.086.095l-.086.095l-.086.095l-.086.094l-.087.094l-.087.094l-.087.094l-.087.094l-.087.093l-.088.093l-.088.093l-.088.093l-.088.093l-.089.092l-.089.092l-.089.092l-.089.092l-.089.092l-.09.091l-.09.091l-.09.091l-.09.091l-.09.09l-.091.09l-.091.09l-.091.09l-.091.09l-.092.089l-.092.089l-.092.089l-.092.089l-.092.089l-.093.088l-.093.088l-.093.088l-.093.088l-.093.087l-.094.087l-.094.087l-.094.087l-.094.087l-.094.086l-.068.066l-.095.086l-.095.086l-.095.085l-.095.085l-.096.085l-.096.085l-.096.084l-.096.084l-.096.084l-.097.084l-.097.084l-.097.083l-.097.083l-.097.083l-.098.083l-.098.082l-.098.082l-.098.082l-.098.082l-.099.082l-.099.081l-.099.081l-.099.081l-.099.081l-.1.08l-.1.08l-.1.08l-.339-.425l-.338-.424l-.339-.425l-.339-.425l-.339-.425l-.339-.425l-.339-.425l-.339-.425l-.339-.425l-.339-.425l-.339-.425l-.339-.425l-.339-.425l-.339-.425l-.339-.425l-.339-.425l-.339-.425l-.339-.425l-.339-.425l-.339-.425l-.339-.425l-.339-.425l-.339-.425l-.339-.425l-.339-.425l-.33-.414l-.339-.425l-.339-.425l-.339-.425l-.339-.425l-.339-.425l-.339-.425l-.339-.425l-.339-.425l-.339-.425l-.339-.425l-.339-.425l-.339-.425l-.339-.425l-.339-.425l-.339-.425l-.339-.425l-.339-.425l-.339-.425l-.339-.425l-.339-.425l-.339-.425l-.339-.425l-.339-.425l-.339-.425l-.339-.425l-.339-.425l-.339-.425l-.339-.425l-.339-.425l-.339-.425l-.339-.425l-.339-.425l-.339-.425l-.339-.425l-.339-.425l-.339-.425l-.339-.425l-.339-.425l-.339-.425l-.339-.425l-.339-.425l-.339-.425l-.339-.425l-.339-.425l-.339-.425l-.339-.425l-.339-.425l-.339-.425l-.339-.425l-.339-.425l-.339-.425l-.339-.425l-.339-.425l-.339-.425l-.339-.425l-.339-.425l-.339-.425l-.339-.425l-.339-.425l-.339-.425l-.339-.425l-.339-.425l-.339-.425l-.339-.425l-.339-.425l-.339-.425l-.339-.425l-.339-.425l-.339-.425l-.339-.425l-.339-.425l-.339-.425l-.339-.425z",
                                                        opacity: 0.6
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/SkillsTabs.tsx",
                                                        lineNumber: 51,
                                                        columnNumber: 20703
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        fill: "#2c2c2c",
                                                        d: "m77.551 64.198l-13.576-.001a.414.414 0 0 1-.128-.806l12.912-4.194a.413.413 0 0 1 .521.265c.455 1.398.685 2.853.684 4.323a.413.413 0 0 1-.413.413m-10.965-.828h10.545a13 13 0 0 0-.516-3.258z"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/SkillsTabs.tsx",
                                                        lineNumber: 51,
                                                        columnNumber: 23717
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        fill: "#2c2c2c",
                                                        d: "M63.975 64.197a.414.414 0 0 1-.387-.558L77.899 25.51a.41.41 0 0 1 .532-.242a41 41 0 0 1 11.196 6.351a.414.414 0 0 1 .066.581L64.298 64.041a.42.42 0 0 1-.323.156m14.552-38.008L65.28 61.484l23.507-29.475a40.2 40.2 0 0 0-10.26-5.82"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/SkillsTabs.tsx",
                                                        lineNumber: 51,
                                                        columnNumber: 23938
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        fill: "#2c2c2c",
                                                        d: "M63.975 64.197a.42.42 0 0 1-.317-.148L28.857 22.364a.41.41 0 0 1 .052-.582A54.8 54.8 0 0 1 51.801 10.44a.414.414 0 0 1 .495.312l12.083 52.941a.415.415 0 0 1-.22.463a.44.44 0 0 1-.184.041M29.757 22.152l33.431 40.044l-11.607-50.857a54 54 0 0 0-21.824 10.813"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/SkillsTabs.tsx",
                                                        lineNumber: 51,
                                                        columnNumber: 24199
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        fill: "#2c2c2c",
                                                        d: "M17.224 72.681a.41.41 0 0 1-.406-.339c-1.813-9.884-.401-20.309 3.977-29.355a.414.414 0 0 1 .552-.193l42.808 20.615a.413.413 0 0 1-.106.78l-46.75 8.485a.3.3 0 0 1-.075.007m4.136-28.96c-4.103 8.678-5.448 18.61-3.801 28.067l45.09-8.183z"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/SkillsTabs.tsx",
                                                        lineNumber: 51,
                                                        columnNumber: 24487
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        fill: "#2c2c2c",
                                                        d: "M41.657 79.659a.42.42 0 0 1-.341-.178a28 28 0 0 1-2.177-3.738a.413.413 0 0 1 .193-.552l24.462-11.78a.413.413 0 0 1 .415.713L41.893 79.586a.4.4 0 0 1-.236.073m-1.59-3.904a27 27 0 0 0 1.697 2.913L59.42 66.436z"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/SkillsTabs.tsx",
                                                        lineNumber: 51,
                                                        columnNumber: 24753
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        fill: "#2c2c2c",
                                                        d: "M63.99 98.132c-2.58 0-5.165-.287-7.66-.857a.415.415 0 0 1-.311-.496l7.552-33.088c.044-.192.223-.354.415-.321a.41.41 0 0 1 .396.344l5.685 33.46a.414.414 0 0 1-.339.477a34 34 0 0 1-5.738.481m-7.072-1.574c4 .86 8.22.98 12.264.344l-5.267-30.999z"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/SkillsTabs.tsx",
                                                        lineNumber: 51,
                                                        columnNumber: 24993
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        fill: "#2c2c2c",
                                                        d: "M97.832 106.652a.41.41 0 0 1-.324-.156L63.651 64.041a.413.413 0 0 1 .577-.584l42.833 33.379a.414.414 0 0 1 .072.581a54.7 54.7 0 0 1-9.045 9.146a.4.4 0 0 1-.256.089M66.477 66.258l31.42 39.399a54 54 0 0 0 8.329-8.423z"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/SkillsTabs.tsx",
                                                        lineNumber: 51,
                                                        columnNumber: 25267
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/SkillsTabs.tsx",
                                                lineNumber: 51,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "Data visualization"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/SkillsTabs.tsx",
                                                lineNumber: 52,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/SkillsTabs.tsx",
                                        lineNumber: 50,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        className: "flex items-center space-x-2 px-3 py-1 bg-neutral-900 md:hover:bg-[#242938] md:border-[1px] border-neutral-900 hover:border-neutral-200/60 rounded-lg",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                xmlns: "http://www.w3.org/2000/svg",
                                                width: 24,
                                                height: 24,
                                                viewBox: "0 0 256 256",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                                    fill: "none",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                            width: 256,
                                                            height: 256,
                                                            fill: "#f4f2ed",
                                                            rx: 60
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/SkillsTabs.tsx",
                                                            lineNumber: 55,
                                                            columnNumber: 115
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                                            clipPath: "url(#skillIconsScikitlearnLight0)",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                    fill: "#f89939",
                                                                    d: "M181.405 165.654c24.426-24.424 28.486-59.964 9.067-79.38c-19.416-19.416-54.954-15.357-79.378 9.066c-24.425 24.424-17.36 71.086-9.066 79.381c6.702 6.702 54.954 15.357 79.377-9.067"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/SkillsTabs.tsx",
                                                                    lineNumber: 55,
                                                                    columnNumber: 224
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                    fill: "#3499cd",
                                                                    d: "M81.182 130.361c-14.17-14.169-34.792-16.528-46.06-5.261c-11.266 11.267-8.911 31.891 5.262 46.059c14.173 14.174 41.248 10.075 46.057 5.261c3.892-3.885 8.915-31.887-5.26-46.059"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/SkillsTabs.tsx",
                                                                    lineNumber: 55,
                                                                    columnNumber: 435
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                    fill: "#010101",
                                                                    d: "M130.073 159.668q-3.755 3.457-6.586 5.097q-2.832 1.644-5.401 1.644q-2.955 0-4.765-2.292q-1.81-2.293-1.808-6.161q0-5.801 2.514-13.92q2.512-8.124 6.103-14.973l7.017-2.597q.33-.111.498-.112c.532 0 .972.393 1.31 1.174q.512 1.177.512 3.164q.001 5.636-2.597 10.911q-2.598 5.277-8.121 11.27q-.222 2.873-.221 3.95c0 1.604.294 2.872.883 3.812q.885 1.41 2.348 1.408q1.493.002 3.178-1.074q1.682-1.078 5.136-4.477zm-10.578-10.799a33.7 33.7 0 0 0 5.691-8.741q2.18-4.841 2.18-8.329c0-.678-.1-1.229-.302-1.643q-.304-.623-.774-.623q-1.02 0-2.969 5.089t-3.826 14.247"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/SkillsTabs.tsx",
                                                                    lineNumber: 55,
                                                                    columnNumber: 642
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                    fill: "#010101",
                                                                    d: "M150.737 159.667q-3.507 3.458-6.298 5.098q-2.788 1.643-6.159 1.643q-3.757 0-6.066-2.401q-2.304-2.406-2.304-6.327q-.002-5.855 4.063-10.593q4.058-4.739 9.003-4.738q2.568 0 4.116 1.327t1.547 3.48q0 5.718-12.154 9.281q1.104 5.385 5.773 5.387q1.823 0 3.479-.979q1.66-.983 5-4.352zm-14.475-5.109q7.07-1.989 7.072-7.347q-.001-2.651-1.933-2.651q-1.823-.001-3.479 2.776q-1.661 2.774-1.66 7.222"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/SkillsTabs.tsx",
                                                                    lineNumber: 55,
                                                                    columnNumber: 1224
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                    fill: "#010101",
                                                                    d: "M180.238 159.668q-4.421 4.198-6.325 5.472q-1.906 1.27-3.647 1.269q-4.364 0-4.116-7.706q-2.762 3.948-5.097 5.83q-2.332 1.877-4.821 1.876q-2.427 0-4.129-2.277q-1.699-2.279-1.697-5.595q0-4.142 2.276-7.901q2.281-3.756 5.843-6.075q3.564-2.321 6.297-2.322q3.454.001 4.836 3.176l5.645-3.119h1.55l-2.439 8.092q-1.879 6.106-1.88 8.371q-.001 2.375 1.685 2.375q1.073 0 2.373-1.147q1.298-1.147 3.644-3.495v3.176zm-20.22 1.521q2.76 0 5.209-4.709q2.445-4.712 2.444-8.69q-.001-1.546-.69-2.416q-.693-.872-1.851-.87q-2.765 0-5.234 4.696q-2.473 4.698-2.474 8.644q0 1.494.733 2.419q.729.927 1.863.926"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/SkillsTabs.tsx",
                                                                    lineNumber: 55,
                                                                    columnNumber: 1641
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                    fill: "#010101",
                                                                    d: "M200.873 159.668q-6.935 6.795-10.691 6.796q-1.686 0-2.845-1.42q-1.159-1.424-1.16-3.524q.001-3.894 4.172-10.441q-2.045 1.049-4.475 1.463q-1.797 3.316-5.636 7.125h-.634v-2.483a36 36 0 0 0 3.895-4.808q-2.378-1.051-2.376-3.119q-.002-2.128 1.451-4.548q1.449-2.414 3.991-2.414q2.155-.001 2.154 2.208q0 1.74-1.244 4.973c3.056-.333 5.727-2.669 8.012-7.017l2.512-.111l-2.569 7.072q-1.601 4.476-2.07 6.091q-.47 1.615-.47 2.859q0 1.163.538 1.85q.539.694 1.451.692q.994-.002 1.906-.675q.91-.681 4.089-3.745v3.176z"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/SkillsTabs.tsx",
                                                                    lineNumber: 55,
                                                                    columnNumber: 2255
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                    fill: "#010101",
                                                                    d: "M228 159.668q-6.382 6.743-10.939 6.741q-1.851 0-2.984-1.298t-1.133-3.479q0-2.957 2.432-9.032q1.298-3.262 1.299-4.144q-.001-.885-.69-.885q-.388.001-1.023.386q-.582.389-1.355 1.079q-.69.635-1.547 1.544a44 44 0 0 0-1.6 1.769l-1.549 1.797q-1.02 1.242-1.269 2.623a42 42 0 0 0-.554 4.312q-.084 1.46-.083 3.95l-6.105 1.434q-.303-3.73-.305-5.551q0-4.448 1.038-8.425c.69-2.654 1.798-5.635 3.328-8.951l6.739-1.298q-2.126 5.718-2.789 9.004q4.528-5.054 7.189-7.002q2.66-1.947 4.729-1.946q1.407 0 2.344 1.061q.94 1.065.938 2.661q0 2.65-2.373 8.729q-1.631 4.168-1.631 5.416q0 1.663 1.356 1.663q2.021 0 6.537-5.332z"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/SkillsTabs.tsx",
                                                                    lineNumber: 55,
                                                                    columnNumber: 2789
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                    fill: "#fff",
                                                                    d: "M140.524 128.723q.066.732.366 1.122q.553.707 1.918.707q.813 0 1.431-.35q.617-.357.617-1.097q0-.56-.495-.853q-.318-.178-1.252-.415l-1.162-.292q-1.114-.276-1.642-.618q-.942-.593-.943-1.642q0-1.235.886-1.999q.894-.764 2.398-.764q1.966 0 2.836 1.154q.544.732.528 1.577h-1.381a1.7 1.7 0 0 0-.35-.902q-.504-.577-1.747-.577q-.83 0-1.26.317a1 1 0 0 0-.422.837q0 .569.56.91q.326.204.959.358l.968.235q1.576.383 2.113.74q.853.561.853 1.764q0 1.162-.886 2.007q-.878.845-2.682.845q-1.942 0-2.755-.877q-.804-.886-.862-2.187zm10.81-6.225q1.47 0 2.389.715q.927.716 1.114 2.463h-1.423q-.13-.805-.593-1.333q-.464-.537-1.487-.537q-1.398 0-2 1.366q-.39.885-.39 2.186q0 1.308.553 2.202q.552.894 1.739.894q.91 0 1.439-.552q.536-.56.739-1.528h1.423q-.244 1.73-1.219 2.536q-.976.796-2.496.796q-1.706 0-2.722-1.243q-1.016-1.252-1.016-3.121q0-2.293 1.113-3.568q1.114-1.276 2.837-1.276m4.966.292h1.487v8.664H156.3zm0-3.275h1.487v1.658H156.3zm3.673 0h1.406v6.933l3.755-3.698h1.869l-3.332 3.259l3.519 5.445h-1.869l-2.715-4.389l-1.227 1.122v3.267h-1.406zm8.355 3.275h1.487v8.664h-1.487zm0-3.275h1.487v1.658h-1.487zm3.999.805h1.479v2.43h1.39v1.194h-1.39v5.681q0 .456.309.61q.17.09.568.089h.228q.121-.007.285-.024v1.154a3.3 3.3 0 0 1-.529.106a5 5 0 0 1-.585.032q-1.024 0-1.39-.52q-.365-.528-.365-1.365v-5.763h-1.179v-1.194h1.179z"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/SkillsTabs.tsx",
                                                                    lineNumber: 55,
                                                                    columnNumber: 3422
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/SkillsTabs.tsx",
                                                            lineNumber: 55,
                                                            columnNumber: 176
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("clipPath", {
                                                                id: "skillIconsScikitlearnLight0",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                    fill: "#fff",
                                                                    d: "M28 74h200v107.86H28z"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/SkillsTabs.tsx",
                                                                    lineNumber: 55,
                                                                    columnNumber: 4802
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/SkillsTabs.tsx",
                                                                lineNumber: 55,
                                                                columnNumber: 4759
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/SkillsTabs.tsx",
                                                            lineNumber: 55,
                                                            columnNumber: 4753
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/SkillsTabs.tsx",
                                                    lineNumber: 55,
                                                    columnNumber: 100
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/SkillsTabs.tsx",
                                                lineNumber: 55,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "Machine learning"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/SkillsTabs.tsx",
                                                lineNumber: 56,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/SkillsTabs.tsx",
                                        lineNumber: 54,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        className: "flex items-center space-x-2 px-3 py-1 bg-neutral-900 md:hover:bg-[#242938] md:hover:text-[#ff6f00]/80 md:border-[1px] border-neutral-900 hover:border-[#ff6f00]/50 rounded-lg",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                xmlns: "http://www.w3.org/2000/svg",
                                                width: 24,
                                                height: 24,
                                                viewBox: "0 0 256 256",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                                    fill: "none",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                            width: 256,
                                                            height: 256,
                                                            fill: "#242938",
                                                            rx: 60
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/SkillsTabs.tsx",
                                                            lineNumber: 59,
                                                            columnNumber: 113
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            fill: "#ff6f00",
                                                            d: "m124.228 229l-33.605-20.11V90.31L40 120.459l.123-44.914L124.228 26zm7.556-203v203l33.609-20.11v-57.109l25.37 15.114l-.151-39.062l-25.219-14.845V90.31L216 120.459l-.122-44.914z"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/SkillsTabs.tsx",
                                                            lineNumber: 59,
                                                            columnNumber: 174
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/SkillsTabs.tsx",
                                                    lineNumber: 59,
                                                    columnNumber: 98
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/SkillsTabs.tsx",
                                                lineNumber: 59,
                                                columnNumber: 13
                                            }, this),
                                            "              ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "Deep learning"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/SkillsTabs.tsx",
                                                lineNumber: 59,
                                                columnNumber: 406
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/SkillsTabs.tsx",
                                        lineNumber: 58,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        className: "flex items-center space-x-2 px-3 py-1 bg-neutral-900 md:border-[1px] border-neutral-900 hover:border-[#1965b8]/80 rounded-lg",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                xmlns: "http://www.w3.org/2000/svg",
                                                width: 24,
                                                height: 24,
                                                viewBox: "0 0 581 512",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    fill: "#1965b8",
                                                    d: "M581 226.6C581 119.1 450.9 32 290.5 32S0 119.1 0 226.6C0 322.4 103.3 402 239.4 418.1V480h99.1v-61.5c24.3-2.7 47.6-7.4 69.4-13.9L448 480h112l-67.4-113.7c54.5-35.4 88.4-84.9 88.4-139.7m-466.8 14.5c0-73.5 98.9-133 220.8-133s211.9 40.7 211.9 133c0 50.1-26.5 85-70.3 106.4c-2.4-1.6-4.7-2.9-6.4-3.7c-10.2-5.2-27.8-10.5-27.8-10.5s86.6-6.4 86.6-92.7s-90.6-87.9-90.6-87.9h-199V361c-74.1-21.5-125.2-67.1-125.2-119.9m225.1 38.3v-55.6c57.8 0 87.8-6.8 87.8 27.3c0 36.5-38.2 28.3-87.8 28.3m-.9 72.5H365c10.8 0 18.9 11.7 24 19.2c-16.1 1.9-33 2.8-50.6 2.9z"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/SkillsTabs.tsx",
                                                    lineNumber: 62,
                                                    columnNumber: 100
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/SkillsTabs.tsx",
                                                lineNumber: 62,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "R - Tests statistiques"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/SkillsTabs.tsx",
                                                lineNumber: 63,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/SkillsTabs.tsx",
                                        lineNumber: 61,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/SkillsTabs.tsx",
                                lineNumber: 45,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/SkillsTabs.tsx",
                        lineNumber: 43,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                className: "pt-2 pb-1 text-neutral-500 font-semibold text-sm",
                                children: "Logistique"
                            }, void 0, false, {
                                fileName: "[project]/src/components/SkillsTabs.tsx",
                                lineNumber: 68,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: "text-lg text-neutral-200 space-y-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        className: "flex items-center space-x-2 px-3 py-1 bg-neutral-900 md:hover:text-[--secondaryColor] md:border-[1px] border-neutral-900 hover:border-[--tertiaryColor] rounded-lg",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                xmlns: "http://www.w3.org/2000/svg",
                                                width: 24,
                                                height: 24,
                                                viewBox: "0 0 48 48",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                                    fill: "none",
                                                    stroke: "currentColor",
                                                    strokeLinecap: "round",
                                                    strokeWidth: 4,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                            width: 40,
                                                            height: 30,
                                                            x: 4,
                                                            y: 10,
                                                            strokeLinejoin: "round",
                                                            rx: 2
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/SkillsTabs.tsx",
                                                            lineNumber: 71,
                                                            columnNumber: 173
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            d: "M14 6v8m11 9H14m20 8H14M34 6v8"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/SkillsTabs.tsx",
                                                            lineNumber: 71,
                                                            columnNumber: 252
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/SkillsTabs.tsx",
                                                    lineNumber: 71,
                                                    columnNumber: 98
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/SkillsTabs.tsx",
                                                lineNumber: 71,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "Ordonnancement"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/SkillsTabs.tsx",
                                                lineNumber: 72,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/SkillsTabs.tsx",
                                        lineNumber: 70,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        className: "flex items-center space-x-2 px-3 py-1 bg-neutral-900 md:hover:text-[--secondaryColor] md:border-[1px] border-neutral-900 hover:border-[--tertiaryColor] rounded-lg",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                xmlns: "http://www.w3.org/2000/svg",
                                                width: 24,
                                                height: 24,
                                                viewBox: "0 0 16 16",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    fill: "currentColor",
                                                    d: "M12 6V0H4v6H0v7h16V6zm-5 6H1V7h2v1h2V7h2zM5 6V1h2v1h2V1h2v5zm10 6H9V7h2v1h2V7h2zM0 16h3v-1h10v1h3v-2H0z"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/SkillsTabs.tsx",
                                                    lineNumber: 75,
                                                    columnNumber: 98
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/SkillsTabs.tsx",
                                                lineNumber: 75,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "Gestion de stock"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/SkillsTabs.tsx",
                                                lineNumber: 76,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/SkillsTabs.tsx",
                                        lineNumber: 74,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        className: "flex items-center space-x-2 px-3 py-1 bg-neutral-900 md:hover:text-[--secondaryColor] md:border-[1px] border-neutral-900 hover:border-[--tertiaryColor] rounded-lg",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                xmlns: "http://www.w3.org/2000/svg",
                                                width: 24,
                                                height: 24,
                                                viewBox: "0 0 24 24",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    fill: "currentColor",
                                                    d: "M19 4h-4.18a2.988 2.988 0 0 0-5.64 0H5a2.006 2.006 0 0 0-2 2v14a2.006 2.006 0 0 0 2 2h14a2.006 2.006 0 0 0 2-2V6a2.006 2.006 0 0 0-2-2m-7 0a1 1 0 1 1-1 1a1.003 1.003 0 0 1 1-1m-2 5l2.79 2.794l2.52-2.52L14 8h4v4l-1.276-1.311l-3.932 3.935L10 11.83l-2.586 2.584L6 13Zm9 10H5v-2h14Z"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/SkillsTabs.tsx",
                                                    lineNumber: 79,
                                                    columnNumber: 98
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/SkillsTabs.tsx",
                                                lineNumber: 79,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "Gestion de projets"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/SkillsTabs.tsx",
                                                lineNumber: 80,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/SkillsTabs.tsx",
                                        lineNumber: 78,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        className: "flex items-center space-x-2 px-3 py-1 bg-neutral-900 md:hover:bg-[#242938] md:border-[1px] border-neutral-900 hover:border-[#006cb8] rounded-lg",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                xmlns: "http://www.w3.org/2000/svg",
                                                width: 24,
                                                height: 24,
                                                viewBox: "0 0 512 254",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                                                            id: "logosSap0",
                                                            x1: "50%",
                                                            x2: "50%",
                                                            y1: "0%",
                                                            y2: "100.002%",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                                                    offset: "0%",
                                                                    stopColor: "#00aeef"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/SkillsTabs.tsx",
                                                                    lineNumber: 83,
                                                                    columnNumber: 177
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                                                    offset: "21.2%",
                                                                    stopColor: "#0097dc"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/SkillsTabs.tsx",
                                                                    lineNumber: 83,
                                                                    columnNumber: 222
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                                                    offset: "51.9%",
                                                                    stopColor: "#007cc5"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/SkillsTabs.tsx",
                                                                    lineNumber: 83,
                                                                    columnNumber: 270
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                                                    offset: "79.2%",
                                                                    stopColor: "#006cb8"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/SkillsTabs.tsx",
                                                                    lineNumber: 83,
                                                                    columnNumber: 318
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                                                    offset: "100%",
                                                                    stopColor: "#0066b3"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/SkillsTabs.tsx",
                                                                    lineNumber: 83,
                                                                    columnNumber: 366
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/SkillsTabs.tsx",
                                                            lineNumber: 83,
                                                            columnNumber: 106
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/SkillsTabs.tsx",
                                                        lineNumber: 83,
                                                        columnNumber: 100
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        fill: "url(#logosSap0)",
                                                        d: "M0 253.281h258.764L512 0H0z"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/SkillsTabs.tsx",
                                                        lineNumber: 83,
                                                        columnNumber: 437
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        fill: "#fff",
                                                        d: "M303.848 50.656H253.28l.17 118.93l-44.032-118.975h-43.66l-37.587 99.36c-3.996-25.283-30.135-34.007-50.702-40.542c-13.581-4.362-27.996-10.779-27.85-17.87c.113-5.82 7.712-11.218 22.813-10.413c10.131.546 19.08 1.362 36.883 9.962l17.505-30.506c-16.233-8.263-38.679-13.48-57.084-13.497h-.113c-21.461 0-39.331 6.95-50.408 18.405C11.493 73.502 7.328 83.667 7.16 94.907c-.282 15.467 5.386 26.432 17.296 35.195c10.064 7.374 22.936 12.158 34.277 15.67c13.987 4.334 25.413 8.105 25.272 16.131c-.112 2.927-1.216 5.662-3.32 7.869c-3.49 3.602-8.837 4.953-16.239 5.1c-14.28.303-24.86-1.943-41.724-11.91l-15.574 30.9c16.846 9.58 34.728 14.386 55.047 14.386l4.57-.034c17.685-.32 32.037-4.559 43.44-13.733c.654-.524 1.239-1.053 1.847-1.588l-1.914 9.862l42.664-.135l7.655-19.599c8.048 2.747 17.2 4.267 26.915 4.267c9.467 0 18.371-1.441 26.268-4.03l5.336 19.362l76.547.073l.186-44.68h16.289c39.371 0 62.645-20.037 62.645-53.639c-.013-37.423-22.638-53.723-70.795-53.723zM187.372 152.318c-5.882 0-11.398-1.025-16.142-2.826l15.962-50.403h.31l15.703 50.544c-4.728 1.689-10.115 2.685-15.839 2.685zm119.436-28.959h-11.11V82.74h11.116c14.803 0 26.623 4.93 26.623 20.048c-.013 15.647-11.82 20.572-26.623 20.572"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/SkillsTabs.tsx",
                                                        lineNumber: 83,
                                                        columnNumber: 505
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/SkillsTabs.tsx",
                                                lineNumber: 83,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "ERP - SAP/APO"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/SkillsTabs.tsx",
                                                lineNumber: 84,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/SkillsTabs.tsx",
                                        lineNumber: 82,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        className: "flex items-center space-x-2 px-3 py-1 bg-neutral-900 md:hover:bg-[#242938] md:hover:text-[#f6d751] md:border-[1px] border-neutral-900 hover:border-[#f9e589]/50 rounded-lg",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                xmlns: "http://www.w3.org/2000/svg",
                                                width: 24,
                                                height: 24,
                                                viewBox: "0 0 256 342",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                                                                id: "logosMicrosoftPowerBi0",
                                                                x1: "42.593%",
                                                                x2: "57.245%",
                                                                y1: "0%",
                                                                y2: "93.174%",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                                                        offset: "0%",
                                                                        stopColor: "#e6ad10"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/SkillsTabs.tsx",
                                                                        lineNumber: 87,
                                                                        columnNumber: 197
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                                                        offset: "100%",
                                                                        stopColor: "#c87e0e"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/SkillsTabs.tsx",
                                                                        lineNumber: 87,
                                                                        columnNumber: 242
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/SkillsTabs.tsx",
                                                                lineNumber: 87,
                                                                columnNumber: 106
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                                                                id: "logosMicrosoftPowerBi1",
                                                                x1: "40.122%",
                                                                x2: "62.028%",
                                                                y1: "0%",
                                                                y2: "95.592%",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                                                        offset: "0%",
                                                                        stopColor: "#f6d751"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/SkillsTabs.tsx",
                                                                        lineNumber: 87,
                                                                        columnNumber: 397
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                                                        offset: "100%",
                                                                        stopColor: "#e6ad10"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/SkillsTabs.tsx",
                                                                        lineNumber: 87,
                                                                        columnNumber: 442
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/SkillsTabs.tsx",
                                                                lineNumber: 87,
                                                                columnNumber: 306
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                                                                id: "logosMicrosoftPowerBi2",
                                                                x1: "27.774%",
                                                                x2: "55.012%",
                                                                y1: "0%",
                                                                y2: "96.828%",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                                                        offset: "0%",
                                                                        stopColor: "#f9e589"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/SkillsTabs.tsx",
                                                                        lineNumber: 87,
                                                                        columnNumber: 597
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                                                        offset: "100%",
                                                                        stopColor: "#f6d751"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/SkillsTabs.tsx",
                                                                        lineNumber: 87,
                                                                        columnNumber: 642
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/SkillsTabs.tsx",
                                                                lineNumber: 87,
                                                                columnNumber: 506
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                id: "logosMicrosoftPowerBi3",
                                                                d: "M142.222 14.222C142.222 6.368 148.59 0 156.444 0h85.334C249.632 0 256 6.368 256 14.222v312.89c0 7.854-6.368 14.221-14.222 14.221H14.222C6.368 341.333 0 334.966 0 327.111V184.89c0-7.855 6.368-14.222 14.222-14.222h56.89V99.556c0-7.855 6.367-14.223 14.222-14.223h56.888z"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/SkillsTabs.tsx",
                                                                lineNumber: 87,
                                                                columnNumber: 706
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/SkillsTabs.tsx",
                                                        lineNumber: 87,
                                                        columnNumber: 100
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mask", {
                                                        id: "logosMicrosoftPowerBi4",
                                                        fill: "#fff",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("use", {
                                                            href: "#logosMicrosoftPowerBi3"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/SkillsTabs.tsx",
                                                            lineNumber: 87,
                                                            columnNumber: 1072
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/SkillsTabs.tsx",
                                                        lineNumber: 87,
                                                        columnNumber: 1026
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        fill: "url(#logosMicrosoftPowerBi0)",
                                                        d: "M256 0v341.333H142.222V0z",
                                                        mask: "url(#logosMicrosoftPowerBi4)"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/SkillsTabs.tsx",
                                                        lineNumber: 87,
                                                        columnNumber: 1121
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        fillOpacity: 0.2,
                                                        d: "M184.889 100.978v241.778H71.11v-256h99.556c7.854 0 14.222 6.367 14.222 14.222",
                                                        mask: "url(#logosMicrosoftPowerBi4)"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/SkillsTabs.tsx",
                                                        lineNumber: 87,
                                                        columnNumber: 1236
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        fillOpacity: 0.18,
                                                        d: "M184.889 106.667v241.777H71.11v-256h99.556c7.854 0 14.222 6.368 14.222 14.223",
                                                        mask: "url(#logosMicrosoftPowerBi4)"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/SkillsTabs.tsx",
                                                        lineNumber: 87,
                                                        columnNumber: 1385
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        fill: "url(#logosMicrosoftPowerBi1)",
                                                        d: "M184.889 99.556v241.777H71.11v-256h99.556c7.854 0 14.222 6.368 14.222 14.223",
                                                        mask: "url(#logosMicrosoftPowerBi4)"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/SkillsTabs.tsx",
                                                        lineNumber: 87,
                                                        columnNumber: 1535
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        fill: "url(#logosMicrosoftPowerBi2)",
                                                        d: "M0 170.667v170.666h113.778V184.89c0-7.855-6.368-14.222-14.222-14.222z",
                                                        mask: "url(#logosMicrosoftPowerBi4)"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/SkillsTabs.tsx",
                                                        lineNumber: 87,
                                                        columnNumber: 1701
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/SkillsTabs.tsx",
                                                lineNumber: 87,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "PowerBI"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/SkillsTabs.tsx",
                                                lineNumber: 88,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/SkillsTabs.tsx",
                                        lineNumber: 86,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/SkillsTabs.tsx",
                                lineNumber: 69,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/SkillsTabs.tsx",
                        lineNumber: 67,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/SkillsTabs.tsx",
                lineNumber: 18,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `relative -top-[780px] md:-top-[252px] flex flex-col space-y-4 md:space-y-0 md:flex-row md:items-center justify-around ${engineeringSkills ? "duration-300 opacity-0 -z-10" : "delay-300 duration-300 opacity-100 z-10"}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                className: "pt-2 pb-1 text-neutral-500 font-semibold text-sm",
                                children: "Autres"
                            }, void 0, false, {
                                fileName: "[project]/src/components/SkillsTabs.tsx",
                                lineNumber: 95,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: "text-lg text-neutral-200 space-y-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        className: "flex items-center space-x-2 px-3 py-1 bg-neutral-900 md:hover:text-[--secondaryColor] md:border-[1px] border-neutral-900 hover:border-[--tertiaryColor] rounded-lg",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                xmlns: "http://www.w3.org/2000/svg",
                                                width: 24,
                                                height: 24,
                                                viewBox: "0 0 512 512",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    fill: "currentColor",
                                                    d: "M256 33c-20.835 0-39 20.24-39 47s18.165 47 39 47s39-20.24 39-47s-18.165-47-39-47M110.258 54.934l-16.99 8.496c14.917 22.147 32.213 47.013 49.76 68.947c19.707 24.634 39.95 45.048 52.997 51.572l4.975 2.488v39.478c27.13 3.608 46.516 4.982 67.875 4.09c-.66-.49-1.316-.98-1.95-1.48c-4.915-3.88-9.18-8.206-12.5-12.856c-5.87-.587-10.577-4.374-13.392-8.65c-3.063-4.65-4.57-10.242-4.57-16.262s1.507-11.612 4.57-16.264c3.064-4.65 8.364-8.736 14.967-8.736s11.903 4.085 14.967 8.736s4.57 10.244 4.57 16.264s-1.507 11.612-4.57 16.263c-.06.094-.13.185-.192.277c1.92 2.358 4.335 4.758 7.303 7.1c6.283 4.962 14.722 9.46 24.75 12.66c2.65-.324 5.366-.67 8.172-1.04v-39.58l4.975-2.488c13.048-6.525 33.29-26.94 52.998-51.573c17.546-21.934 34.842-46.8 49.76-68.947l-16.99-8.496C355.066 101.422 307.792 145 256 145s-99.067-43.578-145.742-90.066m29.094 179.93l12.152 60.763c101.057 9.362 107.935 9.362 208.992 0l12.147-60.734c-110.08 17.448-123.22 17.163-233.29-.03zm39.244 81.335l13.35 106.8h128.11l13.348-106.8c-67.76 6.032-87.047 6.032-154.808 0M137 441v20h238v-20zM16 478v18h480v-18z"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/SkillsTabs.tsx",
                                                    lineNumber: 98,
                                                    columnNumber: 100
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/SkillsTabs.tsx",
                                                lineNumber: 98,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "Parler en publique"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/SkillsTabs.tsx",
                                                lineNumber: 99,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/SkillsTabs.tsx",
                                        lineNumber: 97,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        className: "flex items-center space-x-2 px-3 py-1 bg-neutral-900 md:hover:text-[--secondaryColor] md:border-[1px] border-neutral-900 hover:border-[--tertiaryColor] rounded-lg",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                xmlns: "http://www.w3.org/2000/svg",
                                                width: 24,
                                                height: 24,
                                                viewBox: "0 0 256 256",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                                    fill: "none",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                            width: 256,
                                                            height: 256,
                                                            fill: "#242938",
                                                            rx: 60
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/SkillsTabs.tsx",
                                                            lineNumber: 102,
                                                            columnNumber: 115
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                                            clipPath: "url(#skillIconsFigmaDark0)",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                    fill: "#0acf83",
                                                                    d: "M94.347 228c18.4 0 33.333-14.933 33.333-33.333v-33.334H94.347c-18.4 0-33.334 14.934-33.334 33.334S75.947 228 94.347 228"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/SkillsTabs.tsx",
                                                                    lineNumber: 102,
                                                                    columnNumber: 217
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                    fill: "#a259ff",
                                                                    d: "M61.013 128c0-18.4 14.934-33.333 33.334-33.333h33.333v66.666H94.347c-18.4 0-33.334-14.933-33.334-33.333"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/SkillsTabs.tsx",
                                                                    lineNumber: 102,
                                                                    columnNumber: 369
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                    fill: "#f24e1e",
                                                                    d: "M61.013 61.333C61.013 42.933 75.947 28 94.347 28h33.333v66.667H94.347c-18.4 0-33.334-14.934-33.334-33.334"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/SkillsTabs.tsx",
                                                                    lineNumber: 102,
                                                                    columnNumber: 505
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                    fill: "#ff7262",
                                                                    d: "M127.68 28h33.333c18.4 0 33.334 14.933 33.334 33.333s-14.934 33.334-33.334 33.334H127.68z"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/SkillsTabs.tsx",
                                                                    lineNumber: 102,
                                                                    columnNumber: 643
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                    fill: "#1abcfe",
                                                                    d: "M194.347 128c0 18.4-14.934 33.333-33.334 33.333S127.68 146.4 127.68 128s14.933-33.333 33.333-33.333S194.347 109.6 194.347 128"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/SkillsTabs.tsx",
                                                                    lineNumber: 102,
                                                                    columnNumber: 765
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/SkillsTabs.tsx",
                                                            lineNumber: 102,
                                                            columnNumber: 176
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("clipPath", {
                                                                id: "skillIconsFigmaDark0",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                    fill: "#fff",
                                                                    d: "M61 28h133.36v200H61z"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/SkillsTabs.tsx",
                                                                    lineNumber: 102,
                                                                    columnNumber: 969
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/SkillsTabs.tsx",
                                                                lineNumber: 102,
                                                                columnNumber: 933
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/SkillsTabs.tsx",
                                                            lineNumber: 102,
                                                            columnNumber: 927
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/SkillsTabs.tsx",
                                                    lineNumber: 102,
                                                    columnNumber: 100
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/SkillsTabs.tsx",
                                                lineNumber: 102,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "Figma"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/SkillsTabs.tsx",
                                                lineNumber: 103,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/SkillsTabs.tsx",
                                        lineNumber: 101,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        className: "flex items-center space-x-2 px-3 py-1 bg-neutral-900 md:hover:text-[--secondaryColor] md:border-[1px] border-neutral-900 hover:border-[--tertiaryColor] rounded-lg",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                xmlns: "http://www.w3.org/2000/svg",
                                                width: 24,
                                                height: 24,
                                                viewBox: "0 0 32 32",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    fill: "currentColor",
                                                    d: "M7.75 2.977a1 1 0 0 0-1.638-.747C4.393 3.657 3.35 4.837 2.744 5.94C2.12 7.077 2.001 8.064 2.001 9a4 4 0 0 0 8 0c0-1.28-.626-2.23-1.116-2.974l-.144-.22c-.52-.806-.962-1.59-.99-2.829m-5.749 14.03c0-1.116.088-2.528.584-3.696A5.48 5.48 0 0 0 6.001 14.5c1.292 0 2.48-.446 3.418-1.191c.495 1.17.582 2.582.582 3.697c0 1.844-.288 4.908-.815 7.523c-.263 1.303-.595 2.55-1.006 3.494c-.203.468-.45.919-.76 1.269c-.304.344-.777.708-1.416.708c-.64 0-1.113-.364-1.417-.708c-.309-.35-.556-.8-.76-1.269c-.411-.943-.745-2.19-1.008-3.494c-.528-2.614-.818-5.679-.818-7.523M10.986 6.68A7 7 0 0 1 20.929 12H17.5a4.5 4.5 0 0 0-4.5 4.5v3.43a7 7 0 0 1-1.613-.434a49 49 0 0 1-.209 2.053a9 9 0 0 0 1.822.396V24.5a4.5 4.5 0 0 0 4.5 4.5h8a4.5 4.5 0 0 0 4.5-4.5v-8a4.5 4.5 0 0 0-4.5-4.5h-2.555A9 9 0 0 0 9.973 4.95l.027.042l.136.205c.236.353.57.855.85 1.483M25.5 14a2.5 2.5 0 0 1 2.5 2.5v8a2.5 2.5 0 0 1-2.5 2.5h-8a2.5 2.5 0 0 1-2.5-2.5v-2.555A9.004 9.004 0 0 0 22.945 14zM15 19.93V16.5a2.5 2.5 0 0 1 2.5-2.5h3.43A7 7 0 0 1 15 19.93"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/SkillsTabs.tsx",
                                                    lineNumber: 106,
                                                    columnNumber: 98
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/SkillsTabs.tsx",
                                                lineNumber: 106,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "Notion d'UI/UX"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/SkillsTabs.tsx",
                                                lineNumber: 107,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/SkillsTabs.tsx",
                                        lineNumber: 105,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/SkillsTabs.tsx",
                                lineNumber: 96,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/SkillsTabs.tsx",
                        lineNumber: 94,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                className: "pt-2 pb-1 text-neutral-500 font-semibold text-sm",
                                children: "Langues"
                            }, void 0, false, {
                                fileName: "[project]/src/components/SkillsTabs.tsx",
                                lineNumber: 112,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: "text-lg text-neutral-200 space-y-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        className: "flex items-center space-x-2 px-3 py-1 bg-neutral-900 md:hover:text-[--secondaryColor] md:border-[1px] border-neutral-900 hover:border-[--tertiaryColor] rounded-lg",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                xmlns: "http://www.w3.org/2000/svg",
                                                width: 24,
                                                height: 24,
                                                viewBox: "0 0 36 36",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        fill: "#ed2939",
                                                        d: "M36 27a4 4 0 0 1-4 4h-8V5h8a4 4 0 0 1 4 4z"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/SkillsTabs.tsx",
                                                        lineNumber: 115,
                                                        columnNumber: 96
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        fill: "#002495",
                                                        d: "M4 5a4 4 0 0 0-4 4v18a4 4 0 0 0 4 4h8V5z"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/SkillsTabs.tsx",
                                                        lineNumber: 115,
                                                        columnNumber: 171
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        fill: "#eee",
                                                        d: "M12 5h12v26H12z"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/SkillsTabs.tsx",
                                                        lineNumber: 115,
                                                        columnNumber: 244
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/SkillsTabs.tsx",
                                                lineNumber: 115,
                                                columnNumber: 13
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: [
                                                    "Français - ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-neutral-400 ml-1",
                                                        children: "langue maternelle"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/SkillsTabs.tsx",
                                                        lineNumber: 116,
                                                        columnNumber: 32
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/SkillsTabs.tsx",
                                                lineNumber: 116,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/SkillsTabs.tsx",
                                        lineNumber: 114,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        className: "flex items-center space-x-2 px-3 py-1 bg-neutral-900 md:hover:text-[--secondaryColor] md:border-[1px] border-neutral-900 hover:border-[--tertiaryColor] rounded-lg",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                xmlns: "http://www.w3.org/2000/svg",
                                                width: 24,
                                                height: 24,
                                                viewBox: "0 0 36 36",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        fill: "#00247d",
                                                        d: "M0 9.059V13h5.628zM4.664 31H13v-5.837zM23 25.164V31h8.335zM0 23v3.941L5.63 23zM31.337 5H23v5.837zM36 26.942V23h-5.631zM36 13V9.059L30.371 13zM13 5H4.664L13 10.837z"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/SkillsTabs.tsx",
                                                        lineNumber: 119,
                                                        columnNumber: 98
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        fill: "#cf1b2b",
                                                        d: "m25.14 23l9.712 6.801a4 4 0 0 0 .99-1.749L28.627 23zM13 23h-2.141l-9.711 6.8c.521.53 1.189.909 1.938 1.085L13 23.943zm10-10h2.141l9.711-6.8a4 4 0 0 0-1.937-1.085L23 12.057zm-12.141 0L1.148 6.2a4 4 0 0 0-.991 1.749L7.372 13z"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/SkillsTabs.tsx",
                                                        lineNumber: 119,
                                                        columnNumber: 294
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        fill: "#eee",
                                                        d: "M36 21H21v10h2v-5.836L31.335 31H32a4 4 0 0 0 2.852-1.199L25.14 23h3.487l7.215 5.052c.093-.337.158-.686.158-1.052v-.058L30.369 23H36zM0 21v2h5.63L0 26.941V27c0 1.091.439 2.078 1.148 2.8l9.711-6.8H13v.943l-9.914 6.941c.294.07.598.116.914.116h.664L13 25.163V31h2V21zM36 9a3.98 3.98 0 0 0-1.148-2.8L25.141 13H23v-.943l9.915-6.942A4 4 0 0 0 32 5h-.663L23 10.837V5h-2v10h15v-2h-5.629L36 9.059zM13 5v5.837L4.664 5H4a4 4 0 0 0-2.852 1.2l9.711 6.8H7.372L.157 7.949A4 4 0 0 0 0 9v.059L5.628 13H0v2h15V5z"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/SkillsTabs.tsx",
                                                        lineNumber: 119,
                                                        columnNumber: 550
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        fill: "#cf1b2b",
                                                        d: "M21 15V5h-6v10H0v6h15v10h6V21h15v-6z"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/SkillsTabs.tsx",
                                                        lineNumber: 119,
                                                        columnNumber: 1073
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/SkillsTabs.tsx",
                                                lineNumber: 119,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: [
                                                    "Anglais - ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-neutral-400 ml-1",
                                                        children: "compétences professionnelles"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/SkillsTabs.tsx",
                                                        lineNumber: 120,
                                                        columnNumber: 31
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/SkillsTabs.tsx",
                                                lineNumber: 120,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/SkillsTabs.tsx",
                                        lineNumber: 118,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        className: "flex items-center space-x-2 px-3 py-1 bg-neutral-900 md:hover:text-[--secondaryColor] md:border-[1px] border-neutral-900 hover:border-[--tertiaryColor] rounded-lg",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                xmlns: "http://www.w3.org/2000/svg",
                                                width: 24,
                                                height: 24,
                                                viewBox: "0 0 36 36",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        fill: "#de2910",
                                                        d: "M36 27a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V9a4 4 0 0 1 4-4h28a4 4 0 0 1 4 4z"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/SkillsTabs.tsx",
                                                        lineNumber: 123,
                                                        columnNumber: 98
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        fill: "#ffde02",
                                                        d: "m11.136 8.977l.736.356l.589-.566l-.111.81l.72.386l-.804.144l-.144.804l-.386-.72l-.81.111l.566-.589zm4.665 2.941l-.356.735l.566.59l-.809-.112l-.386.721l-.144-.805l-.805-.144l.721-.386l-.112-.809l.59.566zm-.957 3.779l.268.772l.817.017l-.651.493l.237.783l-.671-.467l-.671.467l.236-.783l-.651-.493l.817-.017zm-3.708 3.28l.736.356l.589-.566l-.111.81l.72.386l-.804.144l-.144.804l-.386-.72l-.81.111l.566-.589zM7 10.951l.929 2.671l2.826.058l-2.253 1.708l.819 2.706L7 16.479l-2.321 1.615l.819-2.706l-2.253-1.708l2.826-.058z"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/SkillsTabs.tsx",
                                                        lineNumber: 123,
                                                        columnNumber: 201
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/SkillsTabs.tsx",
                                                lineNumber: 123,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: [
                                                    "Mandarin - ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-neutral-400 ml-1",
                                                        children: "notions"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/SkillsTabs.tsx",
                                                        lineNumber: 124,
                                                        columnNumber: 32
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/SkillsTabs.tsx",
                                                lineNumber: 124,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/SkillsTabs.tsx",
                                        lineNumber: 122,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/SkillsTabs.tsx",
                                lineNumber: 113,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/SkillsTabs.tsx",
                        lineNumber: 111,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/SkillsTabs.tsx",
                lineNumber: 93,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/SkillsTabs.tsx",
        lineNumber: 11,
        columnNumber: 5
    }, this);
}
_s(SkillsTabs, "8Oz21eU7dr/waYamExlpgBKIMrg=");
_c = SkillsTabs;
var _c;
__turbopack_refresh__.register(_c, "SkillsTabs");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/CursorHalo.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
"use client";
;
const CursorHalo = ({ parentRef })=>{
    _s();
    const [position, setPosition] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        x: 0,
        y: 0
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CursorHalo.useEffect": ()=>{
            const moveHalo = {
                "CursorHalo.useEffect.moveHalo": (e)=>{
                    if (!parentRef.current) return;
                    const rect = parentRef.current.getBoundingClientRect();
                    const x = e.clientX - rect.left - 64;
                    const y = e.clientY - rect.top - 64;
                    setPosition({
                        x: x,
                        y: y
                    });
                }
            }["CursorHalo.useEffect.moveHalo"];
            parentRef.current?.addEventListener("mousemove", moveHalo);
            return ({
                "CursorHalo.useEffect": ()=>parentRef.current?.removeEventListener("mousemove", moveHalo)
            })["CursorHalo.useEffect"];
        }
    }["CursorHalo.useEffect"], [
        parentRef
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "absolute w-24 h-24 bg-[--primaryColor] pointer-events-none opacity-100 blur-3xl rounded-full",
        style: {
            transform: `translate(${position.x}px, ${position.y}px)`
        }
    }, void 0, false, {
        fileName: "[project]/src/components/CursorHalo.tsx",
        lineNumber: 27,
        columnNumber: 5
    }, this);
};
_s(CursorHalo, "jv34aNIyPo+g3wMR9igNqlVW3h8=");
_c = CursorHalo;
const __TURBOPACK__default__export__ = CursorHalo;
var _c;
__turbopack_refresh__.register(_c, "CursorHalo");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/StackCard.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>StackCard)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CursorHalo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/CursorHalo.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
"use client";
;
;
function StackCard({ stack }) {
    _s();
    const [isOverStack, setIsOverStack] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const cardRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: cardRef,
        className: "relative border border-neutral-800 hover:border-[--tertiaryColor] rounded-2xl p-4 h-full overflow-hidden",
        onMouseOver: ()=>setIsOverStack(true),
        onMouseLeave: ()=>setIsOverStack(false),
        children: [
            isOverStack && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CursorHalo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                parentRef: cardRef
            }, void 0, false, {
                fileName: "[project]/src/components/StackCard.tsx",
                lineNumber: 18,
                columnNumber: 23
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pb-3",
                children: stack.icon
            }, void 0, false, {
                fileName: "[project]/src/components/StackCard.tsx",
                lineNumber: 19,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "font-semibold text-neutral-100 text-2xl pb-2",
                children: stack.name
            }, void 0, false, {
                fileName: "[project]/src/components/StackCard.tsx",
                lineNumber: 20,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: stack.description
            }, void 0, false, {
                fileName: "[project]/src/components/StackCard.tsx",
                lineNumber: 21,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/StackCard.tsx",
        lineNumber: 12,
        columnNumber: 5
    }, this);
}
_s(StackCard, "dx/uVrO+qEa3FHyrCo84qpN/1ho=");
_c = StackCard;
var _c;
__turbopack_refresh__.register(_c, "StackCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/shadcn/accordion.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "Accordion": (()=>Accordion),
    "AccordionContent": (()=>AccordionContent),
    "AccordionItem": (()=>AccordionItem),
    "AccordionTrigger": (()=>AccordionTrigger)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$accordion$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@radix-ui/react-accordion/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript) <export default as ChevronDown>");
"use client";
;
;
;
;
;
const Accordion = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$accordion$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__.Root;
const AccordionItem = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.forwardRef(_c = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$accordion$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__.Item, {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("border-b", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/shadcn/accordion.tsx",
        lineNumber: 15,
        columnNumber: 3
    }, this));
_c1 = AccordionItem;
AccordionItem.displayName = "AccordionItem";
const AccordionTrigger = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.forwardRef(_c2 = ({ className, children, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$accordion$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__.Header, {
        className: "flex",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$accordion$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__.Trigger, {
            ref: ref,
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex flex-1 items-center justify-between py-4 text-sm font-medium transition-all hover:underline text-left [&[data-state=open]>svg]:rotate-180", className),
            ...props,
            children: [
                children,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                    className: "h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200"
                }, void 0, false, {
                    fileName: "[project]/src/components/shadcn/accordion.tsx",
                    lineNumber: 37,
                    columnNumber: 7
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/shadcn/accordion.tsx",
            lineNumber: 28,
            columnNumber: 5
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/shadcn/accordion.tsx",
        lineNumber: 27,
        columnNumber: 3
    }, this));
_c3 = AccordionTrigger;
AccordionTrigger.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$accordion$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__.Trigger.displayName;
const AccordionContent = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.forwardRef(_c4 = ({ className, children, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$accordion$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__.Content, {
        ref: ref,
        className: "overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("pb-4 pt-0", className),
            children: children
        }, void 0, false, {
            fileName: "[project]/src/components/shadcn/accordion.tsx",
            lineNumber: 52,
            columnNumber: 5
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/shadcn/accordion.tsx",
        lineNumber: 47,
        columnNumber: 3
    }, this));
_c5 = AccordionContent;
AccordionContent.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$accordion$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__.Content.displayName;
;
var _c, _c1, _c2, _c3, _c4, _c5;
__turbopack_refresh__.register(_c, "AccordionItem$React.forwardRef");
__turbopack_refresh__.register(_c1, "AccordionItem");
__turbopack_refresh__.register(_c2, "AccordionTrigger$React.forwardRef");
__turbopack_refresh__.register(_c3, "AccordionTrigger");
__turbopack_refresh__.register(_c4, "AccordionContent$React.forwardRef");
__turbopack_refresh__.register(_c5, "AccordionContent");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/page.tsx [app-rsc] (ecmascript, Next.js server component, client modules)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
}}),
}]);

//# sourceMappingURL=src_d851d0._.js.map
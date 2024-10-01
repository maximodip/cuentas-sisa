"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/orders/new/page",{

/***/ "(app-pages-browser)/./src/components/ProductField.jsx":
/*!*****************************************!*\
  !*** ./src/components/ProductField.jsx ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ProductField; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _barrel_optimize_names_Trash_lucide_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! __barrel_optimize__?names=Trash!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/trash.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _context_OrderContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/context/OrderContext */ \"(app-pages-browser)/./src/context/OrderContext.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nfunction ProductField(param) {\n    let { index, product, products, quantities, setQuantities, register, setValue, errors, remove } = param;\n    var _errors_products_index, _errors_products;\n    _s();\n    const { updateQuantity, removeProduct } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_OrderContext__WEBPACK_IMPORTED_MODULE_2__.OrderProvider);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex items-center gap-4 bg-gray-50 p-4 rounded-lg shadow-sm\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                ...register(\"products.\".concat(index, \".product_id\"), {\n                    required: \"Seleccione un producto\"\n                }),\n                onChange: (e)=>{\n                    const selectedProduct = products.find((p)=>p.id === parseInt(e.target.value));\n                    setValue(\"products.\".concat(index, \".product_name\"), (selectedProduct === null || selectedProduct === void 0 ? void 0 : selectedProduct.product_name) || \"\");\n                    setValue(\"products.\".concat(index, \".product_price\"), (selectedProduct === null || selectedProduct === void 0 ? void 0 : selectedProduct.product_price) || 0);\n                },\n                className: \"w-2/3 p-2 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                        value: \"\",\n                        children: \"Seleccione un producto\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Maximo\\\\Dev\\\\cuentas-sisa\\\\client\\\\src\\\\components\\\\ProductField.jsx\",\n                        lineNumber: 33,\n                        columnNumber: 17\n                    }, this),\n                    products.map((product)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                            value: product.id,\n                            children: [\n                                product.product_name,\n                                \" - $\",\n                                product.product_price\n                            ]\n                        }, product.id, true, {\n                            fileName: \"C:\\\\Users\\\\Maximo\\\\Dev\\\\cuentas-sisa\\\\client\\\\src\\\\components\\\\ProductField.jsx\",\n                            lineNumber: 35,\n                            columnNumber: 21\n                        }, this))\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Maximo\\\\Dev\\\\cuentas-sisa\\\\client\\\\src\\\\components\\\\ProductField.jsx\",\n                lineNumber: 20,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex items-center gap-2\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: ()=>handleQuantityChange(index, -1),\n                        type: \"button\",\n                        className: \"px-2 py-1 text-gray-600 hover:text-gray-800 focus:outline-none\",\n                        children: \"−\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Maximo\\\\Dev\\\\cuentas-sisa\\\\client\\\\src\\\\components\\\\ProductField.jsx\",\n                        lineNumber: 42,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        ...register(\"products.\".concat(index, \".quantity\"), {\n                            required: \"La cantidad es requerida\",\n                            min: {\n                                value: 1,\n                                message: \"La cantidad debe ser al menos 1\"\n                            }\n                        }),\n                        value: quantities[index] || 1,\n                        type: \"number\",\n                        className: \"w-12 text-center p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent\",\n                        readOnly: true\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Maximo\\\\Dev\\\\cuentas-sisa\\\\client\\\\src\\\\components\\\\ProductField.jsx\",\n                        lineNumber: 49,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: ()=>handleQuantityChange(index, 1),\n                        type: \"button\",\n                        className: \"px-2 py-1 text-gray-600 hover:text-gray-800 focus:outline-none\",\n                        children: \"+\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Maximo\\\\Dev\\\\cuentas-sisa\\\\client\\\\src\\\\components\\\\ProductField.jsx\",\n                        lineNumber: 59,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Maximo\\\\Dev\\\\cuentas-sisa\\\\client\\\\src\\\\components\\\\ProductField.jsx\",\n                lineNumber: 41,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                type: \"button\",\n                onClick: ()=>remove(index),\n                className: \"text-red-600 hover:text-red-800 focus:outline-none\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Trash_lucide_react__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                    className: \"w-5 h-5\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Maximo\\\\Dev\\\\cuentas-sisa\\\\client\\\\src\\\\components\\\\ProductField.jsx\",\n                    lineNumber: 73,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Maximo\\\\Dev\\\\cuentas-sisa\\\\client\\\\src\\\\components\\\\ProductField.jsx\",\n                lineNumber: 68,\n                columnNumber: 13\n            }, this),\n            ((_errors_products = errors.products) === null || _errors_products === void 0 ? void 0 : (_errors_products_index = _errors_products[index]) === null || _errors_products_index === void 0 ? void 0 : _errors_products_index.product_id) && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"text-red-500 text-sm\",\n                children: errors.products[index].product_id.message\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Maximo\\\\Dev\\\\cuentas-sisa\\\\client\\\\src\\\\components\\\\ProductField.jsx\",\n                lineNumber: 76,\n                columnNumber: 17\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Maximo\\\\Dev\\\\cuentas-sisa\\\\client\\\\src\\\\components\\\\ProductField.jsx\",\n        lineNumber: 19,\n        columnNumber: 9\n    }, this);\n}\n_s(ProductField, \"aOkalRXoHhaUb18Aq44Ls3EQw5Q=\");\n_c = ProductField;\nvar _c;\n$RefreshReg$(_c, \"ProductField\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL1Byb2R1Y3RGaWVsZC5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBb0M7QUFDRjtBQUNvQjtBQUV2QyxTQUFTRyxhQUFhLEtBVXBDO1FBVm9DLEVBQ2pDQyxLQUFLLEVBQ0xDLE9BQU8sRUFDUEMsUUFBUSxFQUNSQyxVQUFVLEVBQ1ZDLGFBQWEsRUFDYkMsUUFBUSxFQUNSQyxRQUFRLEVBQ1JDLE1BQU0sRUFDTkMsTUFBTSxFQUNULEdBVm9DO1FBc0V4QkQsd0JBQUFBOztJQTNEVCxNQUFNLEVBQUVFLGNBQWMsRUFBRUMsYUFBYSxFQUFFLEdBQUdiLGlEQUFVQSxDQUFDQyxnRUFBYUE7SUFFbEUscUJBQ0ksOERBQUNhO1FBQUlDLFdBQVU7OzBCQUNYLDhEQUFDQztnQkFDSSxHQUFHUixTQUFTLFlBQWtCLE9BQU5MLE9BQU0sZ0JBQWM7b0JBQ3pDYyxVQUFVO2dCQUNkLEVBQUU7Z0JBQ0ZDLFVBQVUsQ0FBQ0M7b0JBQ1AsTUFBTUMsa0JBQWtCZixTQUFTZ0IsSUFBSSxDQUNqQyxDQUFDQyxJQUFNQSxFQUFFQyxFQUFFLEtBQUtDLFNBQVNMLEVBQUVNLE1BQU0sQ0FBQ0MsS0FBSztvQkFFM0NqQixTQUFTLFlBQWtCLE9BQU5OLE9BQU0sa0JBQWdCaUIsQ0FBQUEsNEJBQUFBLHNDQUFBQSxnQkFBaUJPLFlBQVksS0FBSTtvQkFDNUVsQixTQUFTLFlBQWtCLE9BQU5OLE9BQU0sbUJBQWlCaUIsQ0FBQUEsNEJBQUFBLHNDQUFBQSxnQkFBaUJRLGFBQWEsS0FBSTtnQkFDbEY7Z0JBQ0FiLFdBQVU7O2tDQUVWLDhEQUFDYzt3QkFBT0gsT0FBTTtrQ0FBRzs7Ozs7O29CQUNoQnJCLFNBQVN5QixHQUFHLENBQUMsQ0FBQzFCLHdCQUNYLDhEQUFDeUI7NEJBQXdCSCxPQUFPdEIsUUFBUW1CLEVBQUU7O2dDQUNyQ25CLFFBQVF1QixZQUFZO2dDQUFDO2dDQUFLdkIsUUFBUXdCLGFBQWE7OzJCQUR2Q3hCLFFBQVFtQixFQUFFOzs7Ozs7Ozs7OzswQkFNL0IsOERBQUNUO2dCQUFJQyxXQUFVOztrQ0FDWCw4REFBQ2dCO3dCQUNHQyxTQUFTLElBQU1DLHFCQUFxQjlCLE9BQU8sQ0FBQzt3QkFDNUMrQixNQUFLO3dCQUNMbkIsV0FBVTtrQ0FDYjs7Ozs7O2tDQUdELDhEQUFDb0I7d0JBQ0ksR0FBRzNCLFNBQVMsWUFBa0IsT0FBTkwsT0FBTSxjQUFZOzRCQUN2Q2MsVUFBVTs0QkFDVm1CLEtBQUs7Z0NBQUVWLE9BQU87Z0NBQUdXLFNBQVM7NEJBQWtDO3dCQUNoRSxFQUFFO3dCQUNGWCxPQUFPcEIsVUFBVSxDQUFDSCxNQUFNLElBQUk7d0JBQzVCK0IsTUFBSzt3QkFDTG5CLFdBQVU7d0JBQ1Z1QixRQUFROzs7Ozs7a0NBRVosOERBQUNQO3dCQUNHQyxTQUFTLElBQU1DLHFCQUFxQjlCLE9BQU87d0JBQzNDK0IsTUFBSzt3QkFDTG5CLFdBQVU7a0NBQ2I7Ozs7Ozs7Ozs7OzswQkFLTCw4REFBQ2dCO2dCQUNHRyxNQUFLO2dCQUNMRixTQUFTLElBQU1yQixPQUFPUjtnQkFDdEJZLFdBQVU7MEJBRVYsNEVBQUNoQixpRkFBS0E7b0JBQUNnQixXQUFVOzs7Ozs7Ozs7OztZQUVwQkwsRUFBQUEsbUJBQUFBLE9BQU9MLFFBQVEsY0FBZkssd0NBQUFBLHlCQUFBQSxnQkFBaUIsQ0FBQ1AsTUFBTSxjQUF4Qk8sNkNBQUFBLHVCQUEwQjZCLFVBQVUsbUJBQ2pDLDhEQUFDakI7Z0JBQUVQLFdBQVU7MEJBQXdCTCxPQUFPTCxRQUFRLENBQUNGLE1BQU0sQ0FBQ29DLFVBQVUsQ0FBQ0YsT0FBTzs7Ozs7Ozs7Ozs7O0FBSTlGO0dBM0V3Qm5DO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL1Byb2R1Y3RGaWVsZC5qc3g/YzEwYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUcmFzaCB9IGZyb20gJ2x1Y2lkZS1yZWFjdCdcclxuaW1wb3J0IHsgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBPcmRlclByb3ZpZGVyIH0gZnJvbSAnQC9jb250ZXh0L09yZGVyQ29udGV4dCdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2R1Y3RGaWVsZCh7XHJcbiAgICBpbmRleCxcclxuICAgIHByb2R1Y3QsXHJcbiAgICBwcm9kdWN0cyxcclxuICAgIHF1YW50aXRpZXMsXHJcbiAgICBzZXRRdWFudGl0aWVzLFxyXG4gICAgcmVnaXN0ZXIsXHJcbiAgICBzZXRWYWx1ZSxcclxuICAgIGVycm9ycyxcclxuICAgIHJlbW92ZSxcclxufSkge1xyXG4gICAgY29uc3QgeyB1cGRhdGVRdWFudGl0eSwgcmVtb3ZlUHJvZHVjdCB9ID0gdXNlQ29udGV4dChPcmRlclByb3ZpZGVyKVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtNCBiZy1ncmF5LTUwIHAtNCByb3VuZGVkLWxnIHNoYWRvdy1zbVwiPlxyXG4gICAgICAgICAgICA8c2VsZWN0XHJcbiAgICAgICAgICAgICAgICB7Li4ucmVnaXN0ZXIoYHByb2R1Y3RzLiR7aW5kZXh9LnByb2R1Y3RfaWRgLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6ICdTZWxlY2Npb25lIHVuIHByb2R1Y3RvJyxcclxuICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2VsZWN0ZWRQcm9kdWN0ID0gcHJvZHVjdHMuZmluZChcclxuICAgICAgICAgICAgICAgICAgICAgICAgKHApID0+IHAuaWQgPT09IHBhcnNlSW50KGUudGFyZ2V0LnZhbHVlKVxyXG4gICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICBzZXRWYWx1ZShgcHJvZHVjdHMuJHtpbmRleH0ucHJvZHVjdF9uYW1lYCwgc2VsZWN0ZWRQcm9kdWN0Py5wcm9kdWN0X25hbWUgfHwgJycpXHJcbiAgICAgICAgICAgICAgICAgICAgc2V0VmFsdWUoYHByb2R1Y3RzLiR7aW5kZXh9LnByb2R1Y3RfcHJpY2VgLCBzZWxlY3RlZFByb2R1Y3Q/LnByb2R1Y3RfcHJpY2UgfHwgMClcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LTIvMyBwLTIgYmctd2hpdGUgYm9yZGVyIGJvcmRlci1ncmF5LTMwMCByb3VuZGVkLW1kIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpyaW5nLTIgZm9jdXM6cmluZy1za3ktNTAwIGZvY3VzOmJvcmRlci10cmFuc3BhcmVudFwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJcIj5TZWxlY2Npb25lIHVuIHByb2R1Y3RvPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICB7cHJvZHVjdHMubWFwKChwcm9kdWN0KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiBrZXk9e3Byb2R1Y3QuaWR9IHZhbHVlPXtwcm9kdWN0LmlkfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3Byb2R1Y3QucHJvZHVjdF9uYW1lfSAtICR7cHJvZHVjdC5wcm9kdWN0X3ByaWNlfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDwvc2VsZWN0PlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMlwiPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZVF1YW50aXR5Q2hhbmdlKGluZGV4LCAtMSl9XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicHgtMiBweS0xIHRleHQtZ3JheS02MDAgaG92ZXI6dGV4dC1ncmF5LTgwMCBmb2N1czpvdXRsaW5lLW5vbmVcIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICYjODcyMjtcclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgey4uLnJlZ2lzdGVyKGBwcm9kdWN0cy4ke2luZGV4fS5xdWFudGl0eWAsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6ICdMYSBjYW50aWRhZCBlcyByZXF1ZXJpZGEnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtaW46IHsgdmFsdWU6IDEsIG1lc3NhZ2U6ICdMYSBjYW50aWRhZCBkZWJlIHNlciBhbCBtZW5vcyAxJyB9LFxyXG4gICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtxdWFudGl0aWVzW2luZGV4XSB8fCAxfVxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctMTIgdGV4dC1jZW50ZXIgcC0yIGJvcmRlciBib3JkZXItZ3JheS0zMDAgcm91bmRlZC1tZCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZy0yIGZvY3VzOnJpbmctc2t5LTUwMCBmb2N1czpib3JkZXItdHJhbnNwYXJlbnRcIlxyXG4gICAgICAgICAgICAgICAgICAgIHJlYWRPbmx5XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZVF1YW50aXR5Q2hhbmdlKGluZGV4LCAxKX1cclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJweC0yIHB5LTEgdGV4dC1ncmF5LTYwMCBob3Zlcjp0ZXh0LWdyYXktODAwIGZvY3VzOm91dGxpbmUtbm9uZVwiXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgJiM0MztcclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gcmVtb3ZlKGluZGV4KX1cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtcmVkLTYwMCBob3Zlcjp0ZXh0LXJlZC04MDAgZm9jdXM6b3V0bGluZS1ub25lXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPFRyYXNoIGNsYXNzTmFtZT1cInctNSBoLTVcIiAvPlxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAge2Vycm9ycy5wcm9kdWN0cz8uW2luZGV4XT8ucHJvZHVjdF9pZCAmJiAoXHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXJlZC01MDAgdGV4dC1zbVwiPntlcnJvcnMucHJvZHVjdHNbaW5kZXhdLnByb2R1Y3RfaWQubWVzc2FnZX08L3A+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuIl0sIm5hbWVzIjpbIlRyYXNoIiwidXNlQ29udGV4dCIsIk9yZGVyUHJvdmlkZXIiLCJQcm9kdWN0RmllbGQiLCJpbmRleCIsInByb2R1Y3QiLCJwcm9kdWN0cyIsInF1YW50aXRpZXMiLCJzZXRRdWFudGl0aWVzIiwicmVnaXN0ZXIiLCJzZXRWYWx1ZSIsImVycm9ycyIsInJlbW92ZSIsInVwZGF0ZVF1YW50aXR5IiwicmVtb3ZlUHJvZHVjdCIsImRpdiIsImNsYXNzTmFtZSIsInNlbGVjdCIsInJlcXVpcmVkIiwib25DaGFuZ2UiLCJlIiwic2VsZWN0ZWRQcm9kdWN0IiwiZmluZCIsInAiLCJpZCIsInBhcnNlSW50IiwidGFyZ2V0IiwidmFsdWUiLCJwcm9kdWN0X25hbWUiLCJwcm9kdWN0X3ByaWNlIiwib3B0aW9uIiwibWFwIiwiYnV0dG9uIiwib25DbGljayIsImhhbmRsZVF1YW50aXR5Q2hhbmdlIiwidHlwZSIsImlucHV0IiwibWluIiwibWVzc2FnZSIsInJlYWRPbmx5IiwicHJvZHVjdF9pZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/ProductField.jsx\n"));

/***/ })

});
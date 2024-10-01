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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ProductField; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _barrel_optimize_names_Trash_lucide_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! __barrel_optimize__?names=Trash!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/trash.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _context_OrderContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/context/OrderContext */ \"(app-pages-browser)/./src/context/OrderContext.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nfunction ProductField(param) {\n    let { index, product, products, quantities, setQuantities, register, setValue, errors, remove } = param;\n    var _errors_products_index, _errors_products;\n    _s();\n    const { updateQuantity, removeProduct } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_OrderContext__WEBPACK_IMPORTED_MODULE_2__.OrderProvider);\n    const handleQuantityChange = (index, delta)=>{\n        const newQuantities = [\n            ...quantities\n        ];\n        newQuantities[index] = Math.max(1, (newQuantities[index] || 1) + delta);\n        setQuantities(newQuantities);\n        setValue(\"products.\".concat(index, \".quantity\"), newQuantities[index]);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex items-center gap-4 bg-gray-50 p-4 rounded-lg shadow-sm\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                ...register(\"products.\".concat(index, \".product_id\"), {\n                    required: \"Seleccione un producto\"\n                }),\n                onChange: (e)=>{\n                    const selectedProduct = products.find((p)=>p.id === parseInt(e.target.value));\n                    setValue(\"products.\".concat(index, \".product_name\"), (selectedProduct === null || selectedProduct === void 0 ? void 0 : selectedProduct.product_name) || \"\");\n                    setValue(\"products.\".concat(index, \".product_price\"), (selectedProduct === null || selectedProduct === void 0 ? void 0 : selectedProduct.product_price) || 0);\n                },\n                className: \"w-2/3 p-2 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                        value: \"\",\n                        children: \"Seleccione un producto\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Maximo\\\\Dev\\\\cuentas-sisa\\\\client\\\\src\\\\components\\\\ProductField.jsx\",\n                        lineNumber: 40,\n                        columnNumber: 17\n                    }, this),\n                    products.map((product)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                            value: product.id,\n                            children: [\n                                product.product_name,\n                                \" - $\",\n                                product.product_price\n                            ]\n                        }, product.id, true, {\n                            fileName: \"C:\\\\Users\\\\Maximo\\\\Dev\\\\cuentas-sisa\\\\client\\\\src\\\\components\\\\ProductField.jsx\",\n                            lineNumber: 42,\n                            columnNumber: 21\n                        }, this))\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Maximo\\\\Dev\\\\cuentas-sisa\\\\client\\\\src\\\\components\\\\ProductField.jsx\",\n                lineNumber: 27,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex items-center gap-2\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: ()=>handleQuantityChange(index, -1),\n                        type: \"button\",\n                        className: \"px-2 py-1 text-gray-600 hover:text-gray-800 focus:outline-none\",\n                        children: \"−\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Maximo\\\\Dev\\\\cuentas-sisa\\\\client\\\\src\\\\components\\\\ProductField.jsx\",\n                        lineNumber: 49,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        ...register(\"products.\".concat(index, \".quantity\"), {\n                            required: \"La cantidad es requerida\",\n                            min: {\n                                value: 1,\n                                message: \"La cantidad debe ser al menos 1\"\n                            }\n                        }),\n                        value: quantities[index] || 1,\n                        type: \"number\",\n                        className: \"w-12 text-center p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent\",\n                        readOnly: true\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Maximo\\\\Dev\\\\cuentas-sisa\\\\client\\\\src\\\\components\\\\ProductField.jsx\",\n                        lineNumber: 56,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: ()=>handleQuantityChange(index, 1),\n                        type: \"button\",\n                        className: \"px-2 py-1 text-gray-600 hover:text-gray-800 focus:outline-none\",\n                        children: \"+\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Maximo\\\\Dev\\\\cuentas-sisa\\\\client\\\\src\\\\components\\\\ProductField.jsx\",\n                        lineNumber: 66,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Maximo\\\\Dev\\\\cuentas-sisa\\\\client\\\\src\\\\components\\\\ProductField.jsx\",\n                lineNumber: 48,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                type: \"button\",\n                onClick: ()=>removeProduct(index),\n                className: \"text-red-600 hover:text-red-800 focus:outline-none\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Trash_lucide_react__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                    className: \"w-5 h-5\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Maximo\\\\Dev\\\\cuentas-sisa\\\\client\\\\src\\\\components\\\\ProductField.jsx\",\n                    lineNumber: 80,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Maximo\\\\Dev\\\\cuentas-sisa\\\\client\\\\src\\\\components\\\\ProductField.jsx\",\n                lineNumber: 75,\n                columnNumber: 13\n            }, this),\n            ((_errors_products = errors.products) === null || _errors_products === void 0 ? void 0 : (_errors_products_index = _errors_products[index]) === null || _errors_products_index === void 0 ? void 0 : _errors_products_index.product_id) && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"text-red-500 text-sm\",\n                children: errors.products[index].product_id.message\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Maximo\\\\Dev\\\\cuentas-sisa\\\\client\\\\src\\\\components\\\\ProductField.jsx\",\n                lineNumber: 83,\n                columnNumber: 17\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Maximo\\\\Dev\\\\cuentas-sisa\\\\client\\\\src\\\\components\\\\ProductField.jsx\",\n        lineNumber: 26,\n        columnNumber: 9\n    }, this);\n}\n_s(ProductField, \"aOkalRXoHhaUb18Aq44Ls3EQw5Q=\");\n_c = ProductField;\nvar _c;\n$RefreshReg$(_c, \"ProductField\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL1Byb2R1Y3RGaWVsZC5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBb0M7QUFDRjtBQUNvQjtBQUV2QyxTQUFTRyxhQUFhLEtBVXBDO1FBVm9DLEVBQ2pDQyxLQUFLLEVBQ0xDLE9BQU8sRUFDUEMsUUFBUSxFQUNSQyxVQUFVLEVBQ1ZDLGFBQWEsRUFDYkMsUUFBUSxFQUNSQyxRQUFRLEVBQ1JDLE1BQU0sRUFDTkMsTUFBTSxFQUNULEdBVm9DO1FBNkV4QkQsd0JBQUFBOztJQWxFVCxNQUFNLEVBQUVFLGNBQWMsRUFBRUMsYUFBYSxFQUFFLEdBQUdiLGlEQUFVQSxDQUFDQyxnRUFBYUE7SUFFbEUsTUFBTWEsdUJBQXVCLENBQUNYLE9BQU9ZO1FBQ2pDLE1BQU1DLGdCQUFnQjtlQUFJVjtTQUFXO1FBQ3JDVSxhQUFhLENBQUNiLE1BQU0sR0FBR2MsS0FBS0MsR0FBRyxDQUFDLEdBQUcsQ0FBQ0YsYUFBYSxDQUFDYixNQUFNLElBQUksS0FBS1k7UUFDakVSLGNBQWNTO1FBQ2RQLFNBQVMsWUFBa0IsT0FBTk4sT0FBTSxjQUFZYSxhQUFhLENBQUNiLE1BQU07SUFDL0Q7SUFFQSxxQkFDSSw4REFBQ2dCO1FBQUlDLFdBQVU7OzBCQUNYLDhEQUFDQztnQkFDSSxHQUFHYixTQUFTLFlBQWtCLE9BQU5MLE9BQU0sZ0JBQWM7b0JBQ3pDbUIsVUFBVTtnQkFDZCxFQUFFO2dCQUNGQyxVQUFVLENBQUNDO29CQUNQLE1BQU1DLGtCQUFrQnBCLFNBQVNxQixJQUFJLENBQ2pDLENBQUNDLElBQU1BLEVBQUVDLEVBQUUsS0FBS0MsU0FBU0wsRUFBRU0sTUFBTSxDQUFDQyxLQUFLO29CQUUzQ3RCLFNBQVMsWUFBa0IsT0FBTk4sT0FBTSxrQkFBZ0JzQixDQUFBQSw0QkFBQUEsc0NBQUFBLGdCQUFpQk8sWUFBWSxLQUFJO29CQUM1RXZCLFNBQVMsWUFBa0IsT0FBTk4sT0FBTSxtQkFBaUJzQixDQUFBQSw0QkFBQUEsc0NBQUFBLGdCQUFpQlEsYUFBYSxLQUFJO2dCQUNsRjtnQkFDQWIsV0FBVTs7a0NBRVYsOERBQUNjO3dCQUFPSCxPQUFNO2tDQUFHOzs7Ozs7b0JBQ2hCMUIsU0FBUzhCLEdBQUcsQ0FBQyxDQUFDL0Isd0JBQ1gsOERBQUM4Qjs0QkFBd0JILE9BQU8zQixRQUFRd0IsRUFBRTs7Z0NBQ3JDeEIsUUFBUTRCLFlBQVk7Z0NBQUM7Z0NBQUs1QixRQUFRNkIsYUFBYTs7MkJBRHZDN0IsUUFBUXdCLEVBQUU7Ozs7Ozs7Ozs7OzBCQU0vQiw4REFBQ1Q7Z0JBQUlDLFdBQVU7O2tDQUNYLDhEQUFDZ0I7d0JBQ0dDLFNBQVMsSUFBTXZCLHFCQUFxQlgsT0FBTyxDQUFDO3dCQUM1Q21DLE1BQUs7d0JBQ0xsQixXQUFVO2tDQUNiOzs7Ozs7a0NBR0QsOERBQUNtQjt3QkFDSSxHQUFHL0IsU0FBUyxZQUFrQixPQUFOTCxPQUFNLGNBQVk7NEJBQ3ZDbUIsVUFBVTs0QkFDVmtCLEtBQUs7Z0NBQUVULE9BQU87Z0NBQUdVLFNBQVM7NEJBQWtDO3dCQUNoRSxFQUFFO3dCQUNGVixPQUFPekIsVUFBVSxDQUFDSCxNQUFNLElBQUk7d0JBQzVCbUMsTUFBSzt3QkFDTGxCLFdBQVU7d0JBQ1ZzQixRQUFROzs7Ozs7a0NBRVosOERBQUNOO3dCQUNHQyxTQUFTLElBQU12QixxQkFBcUJYLE9BQU87d0JBQzNDbUMsTUFBSzt3QkFDTGxCLFdBQVU7a0NBQ2I7Ozs7Ozs7Ozs7OzswQkFLTCw4REFBQ2dCO2dCQUNHRSxNQUFLO2dCQUNMRCxTQUFTLElBQU14QixjQUFjVjtnQkFDN0JpQixXQUFVOzBCQUVWLDRFQUFDckIsaUZBQUtBO29CQUFDcUIsV0FBVTs7Ozs7Ozs7Ozs7WUFFcEJWLEVBQUFBLG1CQUFBQSxPQUFPTCxRQUFRLGNBQWZLLHdDQUFBQSx5QkFBQUEsZ0JBQWlCLENBQUNQLE1BQU0sY0FBeEJPLDZDQUFBQSx1QkFBMEJpQyxVQUFVLG1CQUNqQyw4REFBQ2hCO2dCQUFFUCxXQUFVOzBCQUF3QlYsT0FBT0wsUUFBUSxDQUFDRixNQUFNLENBQUN3QyxVQUFVLENBQUNGLE9BQU87Ozs7Ozs7Ozs7OztBQUk5RjtHQWxGd0J2QztLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9Qcm9kdWN0RmllbGQuanN4P2MxMGIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVHJhc2ggfSBmcm9tICdsdWNpZGUtcmVhY3QnXHJcbmltcG9ydCB7IHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgT3JkZXJQcm92aWRlciB9IGZyb20gJ0AvY29udGV4dC9PcmRlckNvbnRleHQnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9kdWN0RmllbGQoe1xyXG4gICAgaW5kZXgsXHJcbiAgICBwcm9kdWN0LFxyXG4gICAgcHJvZHVjdHMsXHJcbiAgICBxdWFudGl0aWVzLFxyXG4gICAgc2V0UXVhbnRpdGllcyxcclxuICAgIHJlZ2lzdGVyLFxyXG4gICAgc2V0VmFsdWUsXHJcbiAgICBlcnJvcnMsXHJcbiAgICByZW1vdmUsXHJcbn0pIHtcclxuICAgIGNvbnN0IHsgdXBkYXRlUXVhbnRpdHksIHJlbW92ZVByb2R1Y3QgfSA9IHVzZUNvbnRleHQoT3JkZXJQcm92aWRlcilcclxuXHJcbiAgICBjb25zdCBoYW5kbGVRdWFudGl0eUNoYW5nZSA9IChpbmRleCwgZGVsdGEpID0+IHtcclxuICAgICAgICBjb25zdCBuZXdRdWFudGl0aWVzID0gWy4uLnF1YW50aXRpZXNdXHJcbiAgICAgICAgbmV3UXVhbnRpdGllc1tpbmRleF0gPSBNYXRoLm1heCgxLCAobmV3UXVhbnRpdGllc1tpbmRleF0gfHwgMSkgKyBkZWx0YSlcclxuICAgICAgICBzZXRRdWFudGl0aWVzKG5ld1F1YW50aXRpZXMpXHJcbiAgICAgICAgc2V0VmFsdWUoYHByb2R1Y3RzLiR7aW5kZXh9LnF1YW50aXR5YCwgbmV3UXVhbnRpdGllc1tpbmRleF0pXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC00IGJnLWdyYXktNTAgcC00IHJvdW5kZWQtbGcgc2hhZG93LXNtXCI+XHJcbiAgICAgICAgICAgIDxzZWxlY3RcclxuICAgICAgICAgICAgICAgIHsuLi5yZWdpc3RlcihgcHJvZHVjdHMuJHtpbmRleH0ucHJvZHVjdF9pZGAsIHtcclxuICAgICAgICAgICAgICAgICAgICByZXF1aXJlZDogJ1NlbGVjY2lvbmUgdW4gcHJvZHVjdG8nLFxyXG4gICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBzZWxlY3RlZFByb2R1Y3QgPSBwcm9kdWN0cy5maW5kKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAocCkgPT4gcC5pZCA9PT0gcGFyc2VJbnQoZS50YXJnZXQudmFsdWUpXHJcbiAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgIHNldFZhbHVlKGBwcm9kdWN0cy4ke2luZGV4fS5wcm9kdWN0X25hbWVgLCBzZWxlY3RlZFByb2R1Y3Q/LnByb2R1Y3RfbmFtZSB8fCAnJylcclxuICAgICAgICAgICAgICAgICAgICBzZXRWYWx1ZShgcHJvZHVjdHMuJHtpbmRleH0ucHJvZHVjdF9wcmljZWAsIHNlbGVjdGVkUHJvZHVjdD8ucHJvZHVjdF9wcmljZSB8fCAwKVxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctMi8zIHAtMiBiZy13aGl0ZSBib3JkZXIgYm9yZGVyLWdyYXktMzAwIHJvdW5kZWQtbWQgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnJpbmctMiBmb2N1czpyaW5nLXNreS01MDAgZm9jdXM6Ym9yZGVyLXRyYW5zcGFyZW50XCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlwiPlNlbGVjY2lvbmUgdW4gcHJvZHVjdG88L29wdGlvbj5cclxuICAgICAgICAgICAgICAgIHtwcm9kdWN0cy5tYXAoKHByb2R1Y3QpID0+IChcclxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIGtleT17cHJvZHVjdC5pZH0gdmFsdWU9e3Byb2R1Y3QuaWR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7cHJvZHVjdC5wcm9kdWN0X25hbWV9IC0gJHtwcm9kdWN0LnByb2R1Y3RfcHJpY2V9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgPC9zZWxlY3Q+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0yXCI+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlUXVhbnRpdHlDaGFuZ2UoaW5kZXgsIC0xKX1cclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJweC0yIHB5LTEgdGV4dC1ncmF5LTYwMCBob3Zlcjp0ZXh0LWdyYXktODAwIGZvY3VzOm91dGxpbmUtbm9uZVwiXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgJiM4NzIyO1xyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICB7Li4ucmVnaXN0ZXIoYHByb2R1Y3RzLiR7aW5kZXh9LnF1YW50aXR5YCwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZDogJ0xhIGNhbnRpZGFkIGVzIHJlcXVlcmlkYScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1pbjogeyB2YWx1ZTogMSwgbWVzc2FnZTogJ0xhIGNhbnRpZGFkIGRlYmUgc2VyIGFsIG1lbm9zIDEnIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3F1YW50aXRpZXNbaW5kZXhdIHx8IDF9XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy0xMiB0ZXh0LWNlbnRlciBwLTIgYm9yZGVyIGJvcmRlci1ncmF5LTMwMCByb3VuZGVkLW1kIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpyaW5nLTIgZm9jdXM6cmluZy1za3ktNTAwIGZvY3VzOmJvcmRlci10cmFuc3BhcmVudFwiXHJcbiAgICAgICAgICAgICAgICAgICAgcmVhZE9ubHlcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlUXVhbnRpdHlDaGFuZ2UoaW5kZXgsIDEpfVxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInB4LTIgcHktMSB0ZXh0LWdyYXktNjAwIGhvdmVyOnRleHQtZ3JheS04MDAgZm9jdXM6b3V0bGluZS1ub25lXCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAmIzQzO1xyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiByZW1vdmVQcm9kdWN0KGluZGV4KX1cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtcmVkLTYwMCBob3Zlcjp0ZXh0LXJlZC04MDAgZm9jdXM6b3V0bGluZS1ub25lXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPFRyYXNoIGNsYXNzTmFtZT1cInctNSBoLTVcIiAvPlxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAge2Vycm9ycy5wcm9kdWN0cz8uW2luZGV4XT8ucHJvZHVjdF9pZCAmJiAoXHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXJlZC01MDAgdGV4dC1zbVwiPntlcnJvcnMucHJvZHVjdHNbaW5kZXhdLnByb2R1Y3RfaWQubWVzc2FnZX08L3A+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuIl0sIm5hbWVzIjpbIlRyYXNoIiwidXNlQ29udGV4dCIsIk9yZGVyUHJvdmlkZXIiLCJQcm9kdWN0RmllbGQiLCJpbmRleCIsInByb2R1Y3QiLCJwcm9kdWN0cyIsInF1YW50aXRpZXMiLCJzZXRRdWFudGl0aWVzIiwicmVnaXN0ZXIiLCJzZXRWYWx1ZSIsImVycm9ycyIsInJlbW92ZSIsInVwZGF0ZVF1YW50aXR5IiwicmVtb3ZlUHJvZHVjdCIsImhhbmRsZVF1YW50aXR5Q2hhbmdlIiwiZGVsdGEiLCJuZXdRdWFudGl0aWVzIiwiTWF0aCIsIm1heCIsImRpdiIsImNsYXNzTmFtZSIsInNlbGVjdCIsInJlcXVpcmVkIiwib25DaGFuZ2UiLCJlIiwic2VsZWN0ZWRQcm9kdWN0IiwiZmluZCIsInAiLCJpZCIsInBhcnNlSW50IiwidGFyZ2V0IiwidmFsdWUiLCJwcm9kdWN0X25hbWUiLCJwcm9kdWN0X3ByaWNlIiwib3B0aW9uIiwibWFwIiwiYnV0dG9uIiwib25DbGljayIsInR5cGUiLCJpbnB1dCIsIm1pbiIsIm1lc3NhZ2UiLCJyZWFkT25seSIsInByb2R1Y3RfaWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/ProductField.jsx\n"));

/***/ })

});
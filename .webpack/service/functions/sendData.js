/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./functions/sendData.ts":
/*!*******************************!*\
  !*** ./functions/sendData.ts ***!
  \*******************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

var __dirname = "functions";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var serverless_webpack__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! serverless-webpack */ "serverless-webpack");
/* harmony import */ var serverless_webpack__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(serverless_webpack__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var tsconfig_paths_webpack_plugin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tsconfig-paths-webpack-plugin */ "tsconfig-paths-webpack-plugin");
/* harmony import */ var tsconfig_paths_webpack_plugin__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tsconfig_paths_webpack_plugin__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! path */ "path");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var webpack_node_externals__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! webpack-node-externals */ "webpack-node-externals");
/* harmony import */ var webpack_node_externals__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(webpack_node_externals__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var eslint_webpack_plugin__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! eslint-webpack-plugin */ "eslint-webpack-plugin");
/* harmony import */ var eslint_webpack_plugin__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(eslint_webpack_plugin__WEBPACK_IMPORTED_MODULE_4__);
/* module decorator */ module = __webpack_require__.hmd(module);





const config = {
    context: __dirname,
    mode: (serverless_webpack__WEBPACK_IMPORTED_MODULE_0___default().lib).webpack.isLocal ? 'development' : 'production',
    entry: (serverless_webpack__WEBPACK_IMPORTED_MODULE_0___default().lib).entries,
    devtool: (serverless_webpack__WEBPACK_IMPORTED_MODULE_0___default().lib).webpack.isLocal ? 'source-map' : 'source-map',
    resolve: {
        extensions: ['.js', '.ts', '.json'],
        symlinks: false,
        cacheWithContext: false,
        plugins: [
            new (tsconfig_paths_webpack_plugin__WEBPACK_IMPORTED_MODULE_1___default())({
                configFile: './tsconfig.paths.json',
            }),
        ],
    },
    output: {
        libraryTarget: 'commonjs',
        path: path__WEBPACK_IMPORTED_MODULE_2___default().join(__dirname, '.webpack'),
        filename: '[name].js',
    },
    target: 'node',
    node: {
        __dirname: true,
    },
    externalsPresets: {
        node: true,
    },
    externals: [webpack_node_externals__WEBPACK_IMPORTED_MODULE_3___default()()],
    plugins: [
        new (eslint_webpack_plugin__WEBPACK_IMPORTED_MODULE_4___default())({
            threads: true,
        }),
    ],
    module: {
        rules: [
            {
                test: /\.(tsx?)$/,
                loader: 'ts-loader',
                exclude: [
                    [
                        path__WEBPACK_IMPORTED_MODULE_2___default().resolve(__dirname, 'node_modules'),
                        path__WEBPACK_IMPORTED_MODULE_2___default().resolve(__dirname, '.serverless'),
                        path__WEBPACK_IMPORTED_MODULE_2___default().resolve(__dirname, '.webpack'),
                    ],
                ],
                options: {
                    experimentalWatchApi: true,
                },
            },
        ],
    },
    stats: 'minimal',
};
module.exports = config;


/***/ }),

/***/ "eslint-webpack-plugin":
/*!****************************************!*\
  !*** external "eslint-webpack-plugin" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("eslint-webpack-plugin");

/***/ }),

/***/ "serverless-webpack":
/*!*************************************!*\
  !*** external "serverless-webpack" ***!
  \*************************************/
/***/ ((module) => {

module.exports = require("serverless-webpack");

/***/ }),

/***/ "tsconfig-paths-webpack-plugin":
/*!************************************************!*\
  !*** external "tsconfig-paths-webpack-plugin" ***!
  \************************************************/
/***/ ((module) => {

module.exports = require("tsconfig-paths-webpack-plugin");

/***/ }),

/***/ "webpack-node-externals":
/*!*****************************************!*\
  !*** external "webpack-node-externals" ***!
  \*****************************************/
/***/ ((module) => {

module.exports = require("webpack-node-externals");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/harmony module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.hmd = (module) => {
/******/ 			module = Object.create(module);
/******/ 			if (!module.children) module.children = [];
/******/ 			Object.defineProperty(module, 'exports', {
/******/ 				enumerable: true,
/******/ 				set: () => {
/******/ 					throw new Error('ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: ' + module.id);
/******/ 				}
/******/ 			});
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./functions/sendData.ts");
/******/ 	var __webpack_export_target__ = exports;
/******/ 	for(var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
/******/ 	if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ 	
/******/ })()
;
//# sourceMappingURL=sendData.js.map
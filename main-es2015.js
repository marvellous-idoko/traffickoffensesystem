(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/about-us/about-us.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/about-us/about-us.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>about-us works!</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/addashboard/addashboard.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/addashboard/addashboard.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>addashboard works!</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-nav></app-nav>\n<router-outlet></router-outlet>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/contact-us/contact-us.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/contact-us/contact-us.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section>\n    <div class=\"cont\">\n        <h1>TOS</h1>\n        <br>\n        <br>\n        <br>\n        <br>\n        <label for=\"email\">Email</label>\n        <input type=\"text\" placeholder=\"email\" name=\"email\">\n        <br>\n        <br>\n        <br>\n        <label for=\"pwd\">Password</label>\n        <input type=\"password\" placeholder=\"password\" name=\"pwd\">\n        <br>\n        <br>\n        <br>\n\n        <button type=\"button\" (click)=\"login()\">Sign In</button>\n        <br>\n        <br>\n\n        <a routerLink=\"/signup\" style=\"text-decoration: none;color: white;\">\n            <button type=\"button\">Sign Up</button>\n        </a>\n    </div>\n</section>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section>\n    <div>\n        <h1 class=\"bigText\">Traffick Offense </h1>\n        <h1 class=\"bigText\">System</h1>\n        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias ducimus ipsum, ad consequuntur autem\n            distinctio, modi mollitia nulla excepturi magni consectetur ipsa laudantium exercitationem repellendus\n            eaque, voluptatem illo asperiores in?</p>\n    </div>\n</section>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/nav/nav.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/nav/nav.component.html ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"nav\">\n    <img src=\"../../favicon.ico\">\n    <div class=\"spacer\"></div>\n    <div id=\"mo\">\n        <a routerLink=\"/home\"  class=\"links\"routerLinkActive=\"active\">\n            <div>Home</div>\n        </a>\n        <a routerLink=\"/about-us\" routerLinkActive=\"active\"  class=\"links\">\n            <div>About Us</div>\n        </a>\n        <a routerLink=\"/contact-us\" routerLinkActive=\"active\" class=\"links\">\n            <div> Sign In </div>\n        </a>\n    </div>\n</nav>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/signup/signup.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/signup/signup.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section>\n\n    <div>\n        <h2 style=\"text-align: center;\">Input Driver Information</h2>\n        <form [formGroup]=\"carOwnerInfo\" (ngSubmit)=\"onSubmit()\">\n            <input placeholder=\"First name\" type=\"text\" formControlName=\"firstName\">\n            <p *ngIf=\"carOwnerInfo.controls['firstName'].hasError('pattern')\">\n                Input a valid First Name\n            </p>\n            <input placeholder=\"Last name\" type=\"text\" formControlName=\"lastName\">\n            <p *ngIf=\"carOwnerInfo.controls['lastName'].hasError('pattern')\">\n                Input a valid Last Name\n            </p>\n\n            <input placeholder=\"Contact\" type=\"tel\" formControlName=\"contact\">\n            <p *ngIf=\"carOwnerInfo.controls['contact'].hasError('pattern')\">\n                Input a valid phone number\n            </p>\n            <input placeholder=\"email\" type=\"email\" formControlName=\"email\">\n            <p *ngIf=\"carOwnerInfo.controls['email'].hasError('pattern')\">\n                Input a valid email Address\n            </p>\n\n            <textarea placeholder=\"Contact Address\" row=\"2\" formControlName=\"address\"></textarea>\n            <p *ngIf=\"carOwnerInfo.controls['address'].hasError('required')\">\n                Input a valid Address\n            </p>\n            <input placeholder=\"Plate Number\" type=\"text\" formControlName=\"plateNo\">\n            <p *ngIf=\"carOwnerInfo.controls['plateNo'].hasError('required')\">\n                Input a valid Plate Number\n            </p>\n\n            <input placeholder=\"Drivers ID\" type=\"text\" formControlName=\"driversId\">\n            <p *ngIf=\"carOwnerInfo.controls['driversId'].hasError('required')\">\n                Input a valid Drivers'ID\n            </p>\n            <button type=\"submit\">Sign up</button>\n        </form>\n    </div>\n</section>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/udashboard/udashboard.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/udashboard/udashboard.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>udashboard works!</p>\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/about-us/about-us.component.css":
/*!*************************************************!*\
  !*** ./src/app/about-us/about-us.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Fib3V0LXVzL2Fib3V0LXVzLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/about-us/about-us.component.ts":
/*!************************************************!*\
  !*** ./src/app/about-us/about-us.component.ts ***!
  \************************************************/
/*! exports provided: AboutUsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutUsComponent", function() { return AboutUsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AboutUsComponent = class AboutUsComponent {
    constructor() { }
    ngOnInit() {
    }
};
AboutUsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-about-us',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./about-us.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/about-us/about-us.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./about-us.component.css */ "./src/app/about-us/about-us.component.css")).default]
    })
], AboutUsComponent);



/***/ }),

/***/ "./src/app/addashboard/addashboard.component.css":
/*!*******************************************************!*\
  !*** ./src/app/addashboard/addashboard.component.css ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkZGFzaGJvYXJkL2FkZGFzaGJvYXJkLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/addashboard/addashboard.component.ts":
/*!******************************************************!*\
  !*** ./src/app/addashboard/addashboard.component.ts ***!
  \******************************************************/
/*! exports provided: AddashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddashboardComponent", function() { return AddashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AddashboardComponent = class AddashboardComponent {
    constructor() { }
    ngOnInit() {
    }
};
AddashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-addashboard',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./addashboard.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/addashboard/addashboard.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./addashboard.component.css */ "./src/app/addashboard/addashboard.component.css")).default]
    })
], AddashboardComponent);



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _about_us_about_us_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./about-us/about-us.component */ "./src/app/about-us/about-us.component.ts");
/* harmony import */ var _contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./contact-us/contact-us.component */ "./src/app/contact-us/contact-us.component.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/signup/signup.component.ts");







const routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'about-us', component: _about_us_about_us_component__WEBPACK_IMPORTED_MODULE_4__["AboutUsComponent"] },
    { path: 'contact-us', component: _contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_5__["ContactUsComponent"] },
    { path: 'signup', component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_6__["SignupComponent"] }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'howto';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _nav_nav_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./nav/nav.component */ "./src/app/nav/nav.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _about_us_about_us_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./about-us/about-us.component */ "./src/app/about-us/about-us.component.ts");
/* harmony import */ var _contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./contact-us/contact-us.component */ "./src/app/contact-us/contact-us.component.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/signup/signup.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _udashboard_udashboard_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./udashboard/udashboard.component */ "./src/app/udashboard/udashboard.component.ts");
/* harmony import */ var _addashboard_addashboard_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./addashboard/addashboard.component */ "./src/app/addashboard/addashboard.component.ts");













let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _nav_nav_component__WEBPACK_IMPORTED_MODULE_5__["NavComponent"],
            _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
            _about_us_about_us_component__WEBPACK_IMPORTED_MODULE_7__["AboutUsComponent"],
            _contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_8__["ContactUsComponent"],
            _signup_signup_component__WEBPACK_IMPORTED_MODULE_9__["SignupComponent"],
            _udashboard_udashboard_component__WEBPACK_IMPORTED_MODULE_11__["UdashboardComponent"],
            _addashboard_addashboard_component__WEBPACK_IMPORTED_MODULE_12__["AddashboardComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/contact-us/contact-us.component.css":
/*!*****************************************************!*\
  !*** ./src/app/contact-us/contact-us.component.css ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".cont{\r\n    width: 350px;\r\n    height: 500px;\r\n    padding: 40px;\r\n    border-radius: 20px;\r\n    box-sizing: border-box;\r\n    background: #ecf0f3;\r\n    margin: auto;\r\n    -webkit-animation: gh .5s forwards;\r\n            animation: gh .5s forwards;\r\n}\r\n.cont h1{\r\n    box-sizing: border-box;\r\n    margin: auto;\r\n    border-radius: 9999px;\r\n    -webkit-animation: ko .5s forwards;\r\n            animation: ko .5s forwards;\r\n    width: -webkit-fit-content;\r\n    width: -moz-fit-content;\r\n    width: fit-content;\r\n    padding: 2px 4px;   \r\n    color: #1976d2;\r\n}\r\nlabel{\r\n\r\n    display: block;\r\n}\r\nbutton:first-of-type:hover{\r\n    background-color: rgb(4, 4, 136);\r\n}\r\nbutton:first-of-type{\r\n    background: #1976d2;\r\n}\r\n.cont button{\r\n    cursor: pointer;\r\n    border-radius: 9999px;\r\n    outline: none;\r\n    border: none;\r\n    color: white;\r\n    padding: 10px;\r\n    width: 97%;\r\n    will-change: background;\r\n    transition: background .5s;\r\n}\r\na button:hover{\r\n    background: green;\r\n}\r\na button{\r\n    background: rgb(7, 233, 7);\r\n}\r\ninput{\r\n    width: 85%;\r\n    margin: auto;\r\n    padding: 10px;\r\n    padding-left: 20px;\r\n    height: 20px;\r\n    font-size: 14px;\r\n    border-radius: 9999px;\r\n    outline: none;\r\n    border: none;\r\n    box-shadow: inset 6px 6px 6px #cbced1, inset -6px -6px 6px white;\r\n}\r\n@-webkit-keyframes ko{\r\n    from{\r\n        box-shadow: unset;\r\n    }\r\n    to{\r\n    box-shadow: 7px 7px 10px #cbced1, -7px -7px 10px white;\r\n    }\r\n}\r\n@keyframes ko{\r\n    from{\r\n        box-shadow: unset;\r\n    }\r\n    to{\r\n    box-shadow: 7px 7px 10px #cbced1, -7px -7px 10px white;\r\n    }\r\n}\r\n@-webkit-keyframes gh{\r\n    from{\r\n        box-shadow:unset;\r\n    }\r\n    to{\r\n    box-shadow: 14px 14px 20px #cbced1, -14px -14px 20px white;\r\n\r\n    }\r\n}\r\n@keyframes gh{\r\n    from{\r\n        box-shadow:unset;\r\n    }\r\n    to{\r\n    box-shadow: 14px 14px 20px #cbced1, -14px -14px 20px white;\r\n\r\n    }\r\n}\r\nsection{\r\n    background: #ecf0f3;\r\n    height: 92%;\r\n    display: flex;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFjdC11cy9jb250YWN0LXVzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osa0NBQTBCO1lBQTFCLDBCQUEwQjtBQUM5QjtBQUNBO0lBQ0ksc0JBQXNCO0lBQ3RCLFlBQVk7SUFDWixxQkFBcUI7SUFDckIsa0NBQTBCO1lBQTFCLDBCQUEwQjtJQUMxQiwwQkFBa0I7SUFBbEIsdUJBQWtCO0lBQWxCLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsY0FBYztBQUNsQjtBQUNBOztJQUVJLGNBQWM7QUFDbEI7QUFDQTtJQUNJLGdDQUFnQztBQUNwQztBQUNBO0lBQ0ksbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxlQUFlO0lBQ2YscUJBQXFCO0lBQ3JCLGFBQWE7SUFDYixZQUFZO0lBQ1osWUFBWTtJQUNaLGFBQWE7SUFDYixVQUFVO0lBQ1YsdUJBQXVCO0lBQ3ZCLDBCQUEwQjtBQUM5QjtBQUNBO0lBQ0ksaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSwwQkFBMEI7QUFDOUI7QUFDQTtJQUNJLFVBQVU7SUFDVixZQUFZO0lBQ1osYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osZUFBZTtJQUNmLHFCQUFxQjtJQUNyQixhQUFhO0lBQ2IsWUFBWTtJQUNaLGdFQUFnRTtBQUNwRTtBQUNBO0lBQ0k7UUFDSSxpQkFBaUI7SUFDckI7SUFDQTtJQUNBLHNEQUFzRDtJQUN0RDtBQUNKO0FBUEE7SUFDSTtRQUNJLGlCQUFpQjtJQUNyQjtJQUNBO0lBQ0Esc0RBQXNEO0lBQ3REO0FBQ0o7QUFFQTtJQUNJO1FBQ0ksZ0JBQWdCO0lBQ3BCO0lBQ0E7SUFDQSwwREFBMEQ7O0lBRTFEO0FBQ0o7QUFSQTtJQUNJO1FBQ0ksZ0JBQWdCO0lBQ3BCO0lBQ0E7SUFDQSwwREFBMEQ7O0lBRTFEO0FBQ0o7QUFDQTtJQUNJLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsYUFBYTtBQUNqQiIsImZpbGUiOiJzcmMvYXBwL2NvbnRhY3QtdXMvY29udGFjdC11cy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnR7XHJcbiAgICB3aWR0aDogMzUwcHg7XHJcbiAgICBoZWlnaHQ6IDUwMHB4O1xyXG4gICAgcGFkZGluZzogNDBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgYmFja2dyb3VuZDogI2VjZjBmMztcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIGFuaW1hdGlvbjogZ2ggLjVzIGZvcndhcmRzO1xyXG59XHJcbi5jb250IGgxe1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIGJvcmRlci1yYWRpdXM6IDk5OTlweDtcclxuICAgIGFuaW1hdGlvbjoga28gLjVzIGZvcndhcmRzO1xyXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xyXG4gICAgcGFkZGluZzogMnB4IDRweDsgICBcclxuICAgIGNvbG9yOiAjMTk3NmQyO1xyXG59XHJcbmxhYmVse1xyXG5cclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcbmJ1dHRvbjpmaXJzdC1vZi10eXBlOmhvdmVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDQsIDQsIDEzNik7XHJcbn1cclxuYnV0dG9uOmZpcnN0LW9mLXR5cGV7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMTk3NmQyO1xyXG59XHJcbi5jb250IGJ1dHRvbntcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDk5OTlweDtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgd2lkdGg6IDk3JTtcclxuICAgIHdpbGwtY2hhbmdlOiBiYWNrZ3JvdW5kO1xyXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAuNXM7XHJcbn1cclxuYSBidXR0b246aG92ZXJ7XHJcbiAgICBiYWNrZ3JvdW5kOiBncmVlbjtcclxufVxyXG5hIGJ1dHRvbntcclxuICAgIGJhY2tncm91bmQ6IHJnYig3LCAyMzMsIDcpO1xyXG59XHJcbmlucHV0e1xyXG4gICAgd2lkdGg6IDg1JTtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbiAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA5OTk5cHg7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYm94LXNoYWRvdzogaW5zZXQgNnB4IDZweCA2cHggI2NiY2VkMSwgaW5zZXQgLTZweCAtNnB4IDZweCB3aGl0ZTtcclxufVxyXG5Aa2V5ZnJhbWVzIGtve1xyXG4gICAgZnJvbXtcclxuICAgICAgICBib3gtc2hhZG93OiB1bnNldDtcclxuICAgIH1cclxuICAgIHRve1xyXG4gICAgYm94LXNoYWRvdzogN3B4IDdweCAxMHB4ICNjYmNlZDEsIC03cHggLTdweCAxMHB4IHdoaXRlO1xyXG4gICAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGdoe1xyXG4gICAgZnJvbXtcclxuICAgICAgICBib3gtc2hhZG93OnVuc2V0O1xyXG4gICAgfVxyXG4gICAgdG97XHJcbiAgICBib3gtc2hhZG93OiAxNHB4IDE0cHggMjBweCAjY2JjZWQxLCAtMTRweCAtMTRweCAyMHB4IHdoaXRlO1xyXG5cclxuICAgIH1cclxufVxyXG5zZWN0aW9ue1xyXG4gICAgYmFja2dyb3VuZDogI2VjZjBmMztcclxuICAgIGhlaWdodDogOTIlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/contact-us/contact-us.component.ts":
/*!****************************************************!*\
  !*** ./src/app/contact-us/contact-us.component.ts ***!
  \****************************************************/
/*! exports provided: ContactUsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactUsComponent", function() { return ContactUsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ContactUsComponent = class ContactUsComponent {
    constructor() { }
    ngOnInit() {
    }
};
ContactUsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-contact-us',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./contact-us.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/contact-us/contact-us.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./contact-us.component.css */ "./src/app/contact-us/contact-us.component.css")).default]
    })
], ContactUsComponent);



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@font-face {\r\n    font-family: myFirstFont;\r\n    src: url('Roboto-Regular.ttf');\r\n}\r\n@font-face {\r\n    font-family: FirstFont;\r\n    src: url('GrenzeGotisch-ExtraBold.ttf');\r\n}\r\nh1{\r\n    margin: auto;\r\n}\r\nsection h1:nth-child(2){\r\n    -webkit-animation: tt 1s 1.2s forwards;\r\n            animation: tt 1s 1.2s forwards;\r\n    visibility: hidden;\r\n}\r\n@-webkit-keyframes tt{\r\n    0%{\r\n        opacity: 0;\r\n        font-size: 176px;\r\n    }\r\n    80%{\r\n        font-size: 176px;\r\n    }\r\n    100%{\r\n        font-size: 100px;\r\n        visibility: visible;\r\n    }\r\n\r\n}\r\n@keyframes tt{\r\n    0%{\r\n        opacity: 0;\r\n        font-size: 176px;\r\n    }\r\n    80%{\r\n        font-size: 176px;\r\n    }\r\n    100%{\r\n        font-size: 100px;\r\n        visibility: visible;\r\n    }\r\n\r\n}\r\np{\r\n    visibility: hidden;\r\n    -webkit-animation: 3s ji forwards;\r\n            animation: 3s ji forwards;\r\n}\r\n@-webkit-keyframes ji{\r\n    0%{\r\n        visibility: hidden;\r\n    }\r\n    80%{\r\n        visibility: hidden;\r\n    }\r\n    100%{\r\n        visibility: visible;\r\n    }\r\n\r\n\r\n}\r\n@keyframes ji{\r\n    0%{\r\n        visibility: hidden;\r\n    }\r\n    80%{\r\n        visibility: hidden;\r\n    }\r\n    100%{\r\n        visibility: visible;\r\n    }\r\n\r\n\r\n}\r\nsection h1{\r\n    line-height: 1;\r\n    color: #1976d2;\r\n    -webkit-animation: ii 1s forwards;\r\n            animation: ii 1s forwards;\r\n}\r\nsection>div{\r\n    text-align: center;\r\n    max-width: 80%;\r\n    margin: auto;\r\n    transform: translateY(100px);\r\n}\r\nsection{\r\n    height: 100%;\r\n}\r\n@-webkit-keyframes ii{\r\n    0%{\r\n        opacity: 0;\r\n        font-size: 176px;\r\n        transform: translateY(50%);\r\n        }\r\n\r\n    80%{\r\n        font-size: 176px;\r\n        transform: translateY(50%);\r\n    }\r\n    to{\r\n        font-size: 100px;\r\n        transform: translateY(0%);\r\n\r\n    }\r\n}\r\n@keyframes ii{\r\n    0%{\r\n        opacity: 0;\r\n        font-size: 176px;\r\n        transform: translateY(50%);\r\n        }\r\n\r\n    80%{\r\n        font-size: 176px;\r\n        transform: translateY(50%);\r\n    }\r\n    to{\r\n        font-size: 100px;\r\n        transform: translateY(0%);\r\n\r\n    }\r\n}\r\nfigure{\r\n    width: inherit;\r\n    height: inherit;\r\n    -webkit-margin-before: 0;\r\n            margin-block-start: 0;\r\n    -webkit-margin-after: 0;\r\n            margin-block-end: 0;\r\n    -webkit-margin-start: 0px;\r\n            margin-inline-start: 0px;\r\n    -webkit-margin-end: 0px;\r\n            margin-inline-end: 0px\r\n}\r\n#bannerPg{\r\n    display: flex; \r\n    align-items:  center;\r\njustify-content: center;\r\n}\r\n@media screen and (min-width: 1080px) {\r\n    #banner{\r\n        width: inherit;\r\n        height: inherit;\r\n        \r\n    }\r\n    #bannerPkg{\r\n        height: 605px;\r\n        max-width: 1192px;\r\n        width: 1192px;\r\n        \r\n    }\r\n}\r\ncode{\r\n    font-size: large;\r\n}\r\np{\r\n    line-height: 32px;\r\n    letter-spacing: -0.003em;\r\n    font-family: myFirstFont;\r\n}\r\nh1, h2, h3{\r\n    font-family: FirstFont;\r\n}\r\n.alignCenter{\r\n    max-width: 680px;\r\n    margin: auto;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx3QkFBd0I7SUFDeEIsOEJBQXlDO0FBQzdDO0FBQ0E7SUFDSSxzQkFBc0I7SUFDdEIsdUNBQWtEO0FBQ3REO0FBQ0E7SUFDSSxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxzQ0FBOEI7WUFBOUIsOEJBQThCO0lBQzlCLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0k7UUFDSSxVQUFVO1FBQ1YsZ0JBQWdCO0lBQ3BCO0lBQ0E7UUFDSSxnQkFBZ0I7SUFDcEI7SUFDQTtRQUNJLGdCQUFnQjtRQUNoQixtQkFBbUI7SUFDdkI7O0FBRUo7QUFiQTtJQUNJO1FBQ0ksVUFBVTtRQUNWLGdCQUFnQjtJQUNwQjtJQUNBO1FBQ0ksZ0JBQWdCO0lBQ3BCO0lBQ0E7UUFDSSxnQkFBZ0I7UUFDaEIsbUJBQW1CO0lBQ3ZCOztBQUVKO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsaUNBQXlCO1lBQXpCLHlCQUF5QjtBQUM3QjtBQUNBO0lBQ0k7UUFDSSxrQkFBa0I7SUFDdEI7SUFDQTtRQUNJLGtCQUFrQjtJQUN0QjtJQUNBO1FBQ0ksbUJBQW1CO0lBQ3ZCOzs7QUFHSjtBQVpBO0lBQ0k7UUFDSSxrQkFBa0I7SUFDdEI7SUFDQTtRQUNJLGtCQUFrQjtJQUN0QjtJQUNBO1FBQ0ksbUJBQW1CO0lBQ3ZCOzs7QUFHSjtBQUNBO0lBQ0ksY0FBYztJQUNkLGNBQWM7SUFDZCxpQ0FBeUI7WUFBekIseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsY0FBYztJQUNkLFlBQVk7SUFDWiw0QkFBNEI7QUFDaEM7QUFDQTtJQUNJLFlBQVk7QUFDaEI7QUFDQTtJQUNJO1FBQ0ksVUFBVTtRQUNWLGdCQUFnQjtRQUNoQiwwQkFBMEI7UUFDMUI7O0lBRUo7UUFDSSxnQkFBZ0I7UUFDaEIsMEJBQTBCO0lBQzlCO0lBQ0E7UUFDSSxnQkFBZ0I7UUFDaEIseUJBQXlCOztJQUU3QjtBQUNKO0FBaEJBO0lBQ0k7UUFDSSxVQUFVO1FBQ1YsZ0JBQWdCO1FBQ2hCLDBCQUEwQjtRQUMxQjs7SUFFSjtRQUNJLGdCQUFnQjtRQUNoQiwwQkFBMEI7SUFDOUI7SUFDQTtRQUNJLGdCQUFnQjtRQUNoQix5QkFBeUI7O0lBRTdCO0FBQ0o7QUFDQTtJQUNJLGNBQWM7SUFDZCxlQUFlO0lBQ2Ysd0JBQXFCO1lBQXJCLHFCQUFxQjtJQUNyQix1QkFBbUI7WUFBbkIsbUJBQW1CO0lBQ25CLHlCQUF3QjtZQUF4Qix3QkFBd0I7SUFDeEIsdUJBQXFCO1lBQXJCO0FBQ0o7QUFDQTtJQUNJLGFBQWE7SUFDYixvQkFBb0I7QUFDeEIsdUJBQXVCO0FBQ3ZCO0FBQ0E7SUFDSTtRQUNJLGNBQWM7UUFDZCxlQUFlOztJQUVuQjtJQUNBO1FBQ0ksYUFBYTtRQUNiLGlCQUFpQjtRQUNqQixhQUFhOztJQUVqQjtBQUNKO0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQix3QkFBd0I7SUFDeEIsd0JBQXdCO0FBQzVCO0FBQ0E7SUFDSSxzQkFBc0I7QUFDMUI7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixZQUFZO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAZm9udC1mYWNlIHtcclxuICAgIGZvbnQtZmFtaWx5OiBteUZpcnN0Rm9udDtcclxuICAgIHNyYzogdXJsKC4uLy4uL2Fzc2V0cy9Sb2JvdG8tUmVndWxhci50dGYpO1xyXG59XHJcbkBmb250LWZhY2Uge1xyXG4gICAgZm9udC1mYW1pbHk6IEZpcnN0Rm9udDtcclxuICAgIHNyYzogdXJsKC4uLy4uL2Fzc2V0cy9HcmVuemVHb3Rpc2NoLUV4dHJhQm9sZC50dGYpO1xyXG59XHJcbmgxe1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG59XHJcbnNlY3Rpb24gaDE6bnRoLWNoaWxkKDIpe1xyXG4gICAgYW5pbWF0aW9uOiB0dCAxcyAxLjJzIGZvcndhcmRzO1xyXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG59XHJcbkBrZXlmcmFtZXMgdHR7XHJcbiAgICAwJXtcclxuICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTc2cHg7XHJcbiAgICB9XHJcbiAgICA4MCV7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNzZweDtcclxuICAgIH1cclxuICAgIDEwMCV7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMDBweDtcclxuICAgICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG4gICAgfVxyXG5cclxufVxyXG5we1xyXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgYW5pbWF0aW9uOiAzcyBqaSBmb3J3YXJkcztcclxufVxyXG5Aa2V5ZnJhbWVzIGppe1xyXG4gICAgMCV7XHJcbiAgICAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgfVxyXG4gICAgODAle1xyXG4gICAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgIH1cclxuICAgIDEwMCV7XHJcbiAgICAgICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcclxuICAgIH1cclxuXHJcblxyXG59XHJcbnNlY3Rpb24gaDF7XHJcbiAgICBsaW5lLWhlaWdodDogMTtcclxuICAgIGNvbG9yOiAjMTk3NmQyO1xyXG4gICAgYW5pbWF0aW9uOiBpaSAxcyBmb3J3YXJkcztcclxufVxyXG5zZWN0aW9uPmRpdntcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1heC13aWR0aDogODAlO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwMHB4KTtcclxufVxyXG5zZWN0aW9ue1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcbkBrZXlmcmFtZXMgaWl7XHJcbiAgICAwJXtcclxuICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTc2cHg7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDUwJSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIDgwJXtcclxuICAgICAgICBmb250LXNpemU6IDE3NnB4O1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg1MCUpO1xyXG4gICAgfVxyXG4gICAgdG97XHJcbiAgICAgICAgZm9udC1zaXplOiAxMDBweDtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCUpO1xyXG5cclxuICAgIH1cclxufVxyXG5maWd1cmV7XHJcbiAgICB3aWR0aDogaW5oZXJpdDtcclxuICAgIGhlaWdodDogaW5oZXJpdDtcclxuICAgIG1hcmdpbi1ibG9jay1zdGFydDogMDtcclxuICAgIG1hcmdpbi1ibG9jay1lbmQ6IDA7XHJcbiAgICBtYXJnaW4taW5saW5lLXN0YXJ0OiAwcHg7XHJcbiAgICBtYXJnaW4taW5saW5lLWVuZDogMHB4XHJcbn1cclxuI2Jhbm5lclBne1xyXG4gICAgZGlzcGxheTogZmxleDsgXHJcbiAgICBhbGlnbi1pdGVtczogIGNlbnRlcjtcclxuanVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTA4MHB4KSB7XHJcbiAgICAjYmFubmVye1xyXG4gICAgICAgIHdpZHRoOiBpbmhlcml0O1xyXG4gICAgICAgIGhlaWdodDogaW5oZXJpdDtcclxuICAgICAgICBcclxuICAgIH1cclxuICAgICNiYW5uZXJQa2d7XHJcbiAgICAgICAgaGVpZ2h0OiA2MDVweDtcclxuICAgICAgICBtYXgtd2lkdGg6IDExOTJweDtcclxuICAgICAgICB3aWR0aDogMTE5MnB4O1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG59XHJcblxyXG5jb2Rle1xyXG4gICAgZm9udC1zaXplOiBsYXJnZTtcclxufVxyXG5we1xyXG4gICAgbGluZS1oZWlnaHQ6IDMycHg7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogLTAuMDAzZW07XHJcbiAgICBmb250LWZhbWlseTogbXlGaXJzdEZvbnQ7XHJcbn1cclxuaDEsIGgyLCBoM3tcclxuICAgIGZvbnQtZmFtaWx5OiBGaXJzdEZvbnQ7XHJcbn1cclxuLmFsaWduQ2VudGVye1xyXG4gICAgbWF4LXdpZHRoOiA2ODBweDtcclxuICAgIG1hcmdpbjogYXV0bztcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HomeComponent = class HomeComponent {
    constructor() { }
    ngOnInit() {
    }
};
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")).default]
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/models/tutorial.model.ts":
/*!******************************************!*\
  !*** ./src/app/models/tutorial.model.ts ***!
  \******************************************/
/*! exports provided: driverInfo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "driverInfo", function() { return driverInfo; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class driverInfo {
}


/***/ }),

/***/ "./src/app/nav/nav.component.css":
/*!***************************************!*\
  !*** ./src/app/nav/nav.component.css ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".nav{\r\n    background-color: #1976d2;\r\n    height: 45px;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n\r\n.links{\r\n    color: white;\r\n    padding: 8px 15px;\r\n    margin: 12px;\r\n    border-bottom-left-radius: 25px;\r\n    border-bottom-right-radius: 25px;\r\n    border-top-right-radius: 25px;\r\n    will-change: all;\r\n    border-top-left-radius: 25px;\r\n    transition: all 0.35s ease-in;\r\n}\r\n\r\n\r\n.active{\r\n    color: #1976d2;\r\n    border-bottom-left-radius: 25px;\r\n    border-bottom-right-radius: 25px;\r\n    border-top-right-radius: 25px;\r\n    border-top-left-radius: 25px;\r\n    background-color: whitesmoke;\r\n}\r\n\r\n\r\n.links:hover{\r\n    color: #1976d2;\r\n    border-bottom-left-radius: 25px;\r\n    border-bottom-right-radius: 25px;\r\n    border-top-right-radius: 25px;\r\n    border-top-left-radius: 25px;\r\n    background-color: whitesmoke;\r\n}\r\n\r\n\r\na{\r\n    text-decoration: none;\r\n}\r\n\r\n\r\n.spacer{\r\n    flex: 1;\r\n}\r\n\r\n\r\n#mo{\r\n    display: flex;\r\n    margin: 0 12px;\r\n}\r\n\r\n\r\n#later{\r\ntransition: all 1.2s ease-in-out;\r\nline-height: 24px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2L25hdi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0kseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtBQUN2Qjs7O0FBR0E7SUFDSSxZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWiwrQkFBK0I7SUFDL0IsZ0NBQWdDO0lBQ2hDLDZCQUE2QjtJQUM3QixnQkFBZ0I7SUFDaEIsNEJBQTRCO0lBQzVCLDZCQUE2QjtBQUNqQzs7O0FBQ0E7SUFDSSxjQUFjO0lBQ2QsK0JBQStCO0lBQy9CLGdDQUFnQztJQUNoQyw2QkFBNkI7SUFDN0IsNEJBQTRCO0lBQzVCLDRCQUE0QjtBQUNoQzs7O0FBQ0E7SUFDSSxjQUFjO0lBQ2QsK0JBQStCO0lBQy9CLGdDQUFnQztJQUNoQyw2QkFBNkI7SUFDN0IsNEJBQTRCO0lBQzVCLDRCQUE0QjtBQUNoQzs7O0FBQ0E7SUFDSSxxQkFBcUI7QUFDekI7OztBQUNBO0lBQ0ksT0FBTztBQUNYOzs7QUFDQTtJQUNJLGFBQWE7SUFDYixjQUFjO0FBQ2xCOzs7QUFDQTtBQUNBLGdDQUFnQztBQUNoQyxpQkFBaUI7QUFDakIiLCJmaWxlIjoic3JjL2FwcC9uYXYvbmF2LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmF2e1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzE5NzZkMjtcclxuICAgIGhlaWdodDogNDVweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcblxyXG4ubGlua3N7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBwYWRkaW5nOiA4cHggMTVweDtcclxuICAgIG1hcmdpbjogMTJweDtcclxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDI1cHg7XHJcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMjVweDtcclxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAyNXB4O1xyXG4gICAgd2lsbC1jaGFuZ2U6IGFsbDtcclxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDI1cHg7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zNXMgZWFzZS1pbjtcclxufVxyXG4uYWN0aXZle1xyXG4gICAgY29sb3I6ICMxOTc2ZDI7XHJcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAyNXB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDI1cHg7XHJcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMjVweDtcclxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDI1cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xyXG59XHJcbi5saW5rczpob3ZlcntcclxuICAgIGNvbG9yOiAjMTk3NmQyO1xyXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMjVweDtcclxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAyNXB4O1xyXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDI1cHg7XHJcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAyNXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcclxufVxyXG5he1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcbi5zcGFjZXJ7XHJcbiAgICBmbGV4OiAxO1xyXG59XHJcbiNtb3tcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBtYXJnaW46IDAgMTJweDtcclxufVxyXG4jbGF0ZXJ7XHJcbnRyYW5zaXRpb246IGFsbCAxLjJzIGVhc2UtaW4tb3V0O1xyXG5saW5lLWhlaWdodDogMjRweDtcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/nav/nav.component.ts":
/*!**************************************!*\
  !*** ./src/app/nav/nav.component.ts ***!
  \**************************************/
/*! exports provided: NavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavComponent", function() { return NavComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let NavComponent = class NavComponent {
    constructor() { }
    ngOnInit() {
    }
};
NavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-nav',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./nav.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/nav/nav.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./nav.component.css */ "./src/app/nav/nav.component.css")).default]
    })
], NavComponent);



/***/ }),

/***/ "./src/app/signup/signup.component.css":
/*!*********************************************!*\
  !*** ./src/app/signup/signup.component.css ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("section{\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    height: 100%;\r\n    padding-top: 70px;\r\n}\r\nform p{\r\n    color: red;\r\n}\r\nform{\r\n    max-width: 40%;\r\n    margin: auto;\r\n}\r\nbutton{\r\n    width: 100%;\r\n    border: none;\r\n    margin: 10px 0px;\r\n    padding: 10px 0px;\r\n    cursor: pointer;\r\n    outline: none;\r\n    background: #1976d2;\r\n    color: white;\r\n    border-radius: 20px;\r\n    transition: .5s background;\r\n    will-change: background;\r\n}\r\nbutton:hover{\r\n    background: rgb(2, 2, 179);\r\n}\r\nform input,textarea{\r\n    min-width: -webkit-fill-available;\r\n    min-width: -moz-available;\r\n    min-width: stretch;\r\n    max-width: -webkit-fit-content;\r\n    max-width: -moz-fit-content;\r\n    max-width: fit-content;\r\n    padding: 10px;\r\n    border: none;\r\n    color: white;\r\n    border-bottom: 2.5px solid blue;\r\n    background: #5b5bdb5e;\r\n    margin: 10px 0px;\r\n    outline: none;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lnbnVwL3NpZ251cC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksVUFBVTtBQUNkO0FBQ0E7SUFDSSxjQUFjO0lBQ2QsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsMEJBQTBCO0lBQzFCLHVCQUF1QjtBQUMzQjtBQUNBO0lBQ0ksMEJBQTBCO0FBQzlCO0FBQ0E7SUFDSSxpQ0FBa0I7SUFBbEIseUJBQWtCO0lBQWxCLGtCQUFrQjtJQUNsQiw4QkFBc0I7SUFBdEIsMkJBQXNCO0lBQXRCLHNCQUFzQjtJQUN0QixhQUFhO0lBQ2IsWUFBWTtJQUNaLFlBQVk7SUFDWiwrQkFBK0I7SUFDL0IscUJBQXFCO0lBQ3JCLGdCQUFnQjtJQUNoQixhQUFhO0FBQ2pCIiwiZmlsZSI6InNyYy9hcHAvc2lnbnVwL3NpZ251cC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsic2VjdGlvbntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBwYWRkaW5nLXRvcDogNzBweDtcclxufVxyXG5mb3JtIHB7XHJcbiAgICBjb2xvcjogcmVkO1xyXG59XHJcbmZvcm17XHJcbiAgICBtYXgtd2lkdGg6IDQwJTtcclxuICAgIG1hcmdpbjogYXV0bztcclxufVxyXG5idXR0b257XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIG1hcmdpbjogMTBweCAwcHg7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDBweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMTk3NmQyO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgIHRyYW5zaXRpb246IC41cyBiYWNrZ3JvdW5kO1xyXG4gICAgd2lsbC1jaGFuZ2U6IGJhY2tncm91bmQ7XHJcbn1cclxuYnV0dG9uOmhvdmVye1xyXG4gICAgYmFja2dyb3VuZDogcmdiKDIsIDIsIDE3OSk7XHJcbn1cclxuZm9ybSBpbnB1dCx0ZXh0YXJlYXtcclxuICAgIG1pbi13aWR0aDogc3RyZXRjaDtcclxuICAgIG1heC13aWR0aDogZml0LWNvbnRlbnQ7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMi41cHggc29saWQgYmx1ZTtcclxuICAgIGJhY2tncm91bmQ6ICM1YjViZGI1ZTtcclxuICAgIG1hcmdpbjogMTBweCAwcHg7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG59Il19 */");

/***/ }),

/***/ "./src/app/signup/signup.component.ts":
/*!********************************************!*\
  !*** ./src/app/signup/signup.component.ts ***!
  \********************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _models_tutorial_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/tutorial.model */ "./src/app/models/tutorial.model.ts");




let SignupComponent = class SignupComponent {
    constructor(fb) {
        this.fb = fb;
        this.ed = "^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$";
        this.phoneNo = '[0-9]{14}';
        this.name = '[a-zA-Z]*';
        this.carOwnerInfo = this.fb.group({
            firstName: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(this.name)
                ])],
            lastName: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(this.name)
                ])],
            address: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            contact: ['+234', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(this.phoneNo)
                ])
            ], plateNo: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            driversId: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            email: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(this.ed),
                ])
            ], state: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
    }
    ngOnInit() {
    }
    onSubmit() {
        let drv = new _models_tutorial_model__WEBPACK_IMPORTED_MODULE_3__["driverInfo"]();
        drv.fullName = this.carOwnerInfo.get('firstName').value + " " + this.carOwnerInfo.get('lastName').value;
        drv.address = this.carOwnerInfo.get('address').value;
        drv.contact = this.carOwnerInfo.get('contact').value;
        drv.plateNo = this.carOwnerInfo.get('plateNo').value;
        drv.photo = '';
        drv.driversId = this.carOwnerInfo.get('driversId').value;
        console.info(drv);
    }
};
SignupComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
];
SignupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-signup',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./signup.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/signup/signup.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./signup.component.css */ "./src/app/signup/signup.component.css")).default]
    })
], SignupComponent);



/***/ }),

/***/ "./src/app/udashboard/udashboard.component.css":
/*!*****************************************************!*\
  !*** ./src/app/udashboard/udashboard.component.css ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VkYXNoYm9hcmQvdWRhc2hib2FyZC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/udashboard/udashboard.component.ts":
/*!****************************************************!*\
  !*** ./src/app/udashboard/udashboard.component.ts ***!
  \****************************************************/
/*! exports provided: UdashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UdashboardComponent", function() { return UdashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let UdashboardComponent = class UdashboardComponent {
    constructor() { }
    ngOnInit() {
    }
};
UdashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-udashboard',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./udashboard.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/udashboard/udashboard.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./udashboard.component.css */ "./src/app/udashboard/udashboard.component.css")).default]
    })
], UdashboardComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\angular\TraffickOffenseSys\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
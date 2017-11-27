webpackJsonp(["pastmatches.module"],{

/***/ "../../../../../src/app/pastmatches/pastmatches.component.html":
/***/ (function(module, exports) {

module.exports = "<br><br>\n<div class=\"centerthis container\">\n   <div class=\"row\">\n     <div class=\"col-md-12\">\n       <h1>PastMatch</h1>\n     </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/pastmatches/pastmatches.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pastmatches/pastmatches.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PastMatchComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var PastMatchComponent = (function () {
    function PastMatchComponent() {
    }
    PastMatchComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'pastmatch',
            template: __webpack_require__("../../../../../src/app/pastmatches/pastmatches.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pastmatches/pastmatches.component.scss")],
        })
    ], PastMatchComponent);
    return PastMatchComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pastmatches/pastmatches.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PastMatchModule", function() { return PastMatchModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sharedmodule_shared_module__ = __webpack_require__("../../../../../src/app/sharedmodule/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pastmatches_routing_module__ = __webpack_require__("../../../../../src/app/pastmatches/pastmatches.routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pastmatches_component__ = __webpack_require__("../../../../../src/app/pastmatches/pastmatches.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

//modules


//components

var PastMatchModule = (function () {
    function PastMatchModule() {
    }
    PastMatchModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__pastmatches_component__["a" /* PastMatchComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__sharedmodule_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_2__pastmatches_routing_module__["a" /* PastMatchRoutingModule */]
            ],
            providers: []
        })
    ], PastMatchModule);
    return PastMatchModule;
}());



/***/ }),

/***/ "../../../../../src/app/pastmatches/pastmatches.routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PastMatchRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pastmatches_component__ = __webpack_require__("../../../../../src/app/pastmatches/pastmatches.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


//components

var pastmatchRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__pastmatches_component__["a" /* PastMatchComponent */] }
];
var PastMatchRoutingModule = (function () {
    function PastMatchRoutingModule() {
    }
    PastMatchRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forChild(pastmatchRoutes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
        })
    ], PastMatchRoutingModule);
    return PastMatchRoutingModule;
}());



/***/ })

});
//# sourceMappingURL=pastmatches.module.chunk.js.map
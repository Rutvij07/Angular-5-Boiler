webpackJsonp(["livematches.module"],{

/***/ "../../../../../src/app/livematches/livematches.component.html":
/***/ (function(module, exports) {

module.exports = "<br><br>\n<div class=\"centerthis container\">\n   <div class=\"row\">\n     <div class=\"col-md-12\">\n       <h1>LiveMatch</h1>\n     </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/livematches/livematches.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/livematches/livematches.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LiveMatchComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var LiveMatchComponent = (function () {
    function LiveMatchComponent() {
    }
    LiveMatchComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'livematch',
            template: __webpack_require__("../../../../../src/app/livematches/livematches.component.html"),
            styles: [__webpack_require__("../../../../../src/app/livematches/livematches.component.scss")],
        })
    ], LiveMatchComponent);
    return LiveMatchComponent;
}());



/***/ }),

/***/ "../../../../../src/app/livematches/livematches.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LiveMatchModule", function() { return LiveMatchModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sharedmodule_shared_module__ = __webpack_require__("../../../../../src/app/sharedmodule/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__livematches_routing_module__ = __webpack_require__("../../../../../src/app/livematches/livematches.routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__livematches_component__ = __webpack_require__("../../../../../src/app/livematches/livematches.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

//modules


//components

var LiveMatchModule = (function () {
    function LiveMatchModule() {
    }
    LiveMatchModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__livematches_component__["a" /* LiveMatchComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__sharedmodule_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_2__livematches_routing_module__["a" /* LiveMatchRoutingModule */]
            ],
            providers: []
        })
    ], LiveMatchModule);
    return LiveMatchModule;
}());



/***/ }),

/***/ "../../../../../src/app/livematches/livematches.routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LiveMatchRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__livematches_component__ = __webpack_require__("../../../../../src/app/livematches/livematches.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


//components

var livematchRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__livematches_component__["a" /* LiveMatchComponent */] }
];
var LiveMatchRoutingModule = (function () {
    function LiveMatchRoutingModule() {
    }
    LiveMatchRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forChild(livematchRoutes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
        })
    ], LiveMatchRoutingModule);
    return LiveMatchRoutingModule;
}());



/***/ })

});
//# sourceMappingURL=livematches.module.chunk.js.map
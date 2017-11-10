webpackJsonp([1,9],{

/***/ 217:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sharedmodule_shared_module__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__matchview_routing_module__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__matchview_component__ = __webpack_require__(231);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatchViewModule", function() { return MatchViewModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

//modules


//components

var MatchViewModule = (function () {
    function MatchViewModule() {
    }
    return MatchViewModule;
}());
MatchViewModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__matchview_component__["a" /* MatchViewComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__sharedmodule_shared_module__["a" /* SharedModule */],
            __WEBPACK_IMPORTED_MODULE_2__matchview_routing_module__["a" /* MatchViewRoutingModule */]
        ],
        providers: []
    })
], MatchViewModule);

//# sourceMappingURL=matchview.module.js.map

/***/ }),

/***/ 231:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MatchViewComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var MatchViewComponent = (function () {
    function MatchViewComponent() {
    }
    return MatchViewComponent;
}());
MatchViewComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'matchview',
        template: __webpack_require__(234),
        styles: [__webpack_require__(233)],
    })
], MatchViewComponent);

//# sourceMappingURL=matchview.component.js.map

/***/ }),

/***/ 232:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__matchview_component__ = __webpack_require__(231);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MatchViewRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


//components

var matchviewRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__matchview_component__["a" /* MatchViewComponent */] }
];
var MatchViewRoutingModule = (function () {
    function MatchViewRoutingModule() {
    }
    return MatchViewRoutingModule;
}());
MatchViewRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forChild(matchviewRoutes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
    })
], MatchViewRoutingModule);

//# sourceMappingURL=matchview.routing.module.js.map

/***/ }),

/***/ 233:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(33)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 234:
/***/ (function(module, exports) {

module.exports = "<br><br>\n<div class=\"centerthis container\">\n   <div class=\"row\">\n     <div class=\"col-md-12\">\n       <h1>MatchView</h1>\n     </div>\n  </div>\n</div>\n"

/***/ })

});
//# sourceMappingURL=1.chunk.js.map
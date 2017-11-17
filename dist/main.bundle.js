webpackJsonp([7,9],{

/***/ 102:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./admin/admin.module": [
		223,
		4
	],
	"./homepage/homepage.module": [
		224,
		3
	],
	"./livematches/livematches.module": [
		225,
		2
	],
	"./matchview/matchview.module": [
		226,
		1
	],
	"./pastmatches/pastmatches.module": [
		227,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
module.exports = webpackAsyncContext;
webpackAsyncContext.id = 102;


/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(120);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__(113);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

//modules


//components

var SharedModule = (function () {
    function SharedModule() {
    }
    return SharedModule;
}());
SharedModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["a" /* MdIconModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["b" /* MdMenuModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["c" /* MdButtonModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["d" /* MdCardModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["e" /* MdInputModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["f" /* MdSelectModule */],
        ],
        declarations: [],
        exports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["a" /* MdIconModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["b" /* MdMenuModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["c" /* MdButtonModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["d" /* MdCardModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["e" /* MdInputModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["f" /* MdSelectModule */],
        ]
    })
], SharedModule);

//# sourceMappingURL=shared.module.js.map

/***/ }),

/***/ 116:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routerTransition; });

var routerTransition = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_19" /* trigger */])('routerTransition', [
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* state */])('void', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* style */])({ position: 'absolute', width: '100%', height: '100%', opacity: 0 })),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* state */])('*', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* style */])({ position: 'absolute', width: '100%', height: '100%', opacity: 1 })),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_22" /* transition */])(':enter', [
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* style */])({ transform: 'translateY(20%)', opacity: 0 }),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* animate */])('0.8s ease-in-out', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* style */])({ transform: 'translateY(0%)', opacity: 1 }))
    ]),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_22" /* transition */])(':leave', [
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* style */])({ transform: 'translateY(0%)' }),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* animate */])('0.8s ease-in-out', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* style */])({ transform: 'translateY(-20%)', opacity: 0 }))
    ])
]);
//# sourceMappingURL=animations.js.map

/***/ }),

/***/ 117:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__landing_landing_component__ = __webpack_require__(70);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


//components

var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__landing_landing_component__["a" /* LandingComponent */] },
    { path: 'homepage', loadChildren: './homepage/homepage.module#HomePageModule' },
    { path: 'livematch', loadChildren: './livematches/livematches.module#LiveMatchModule' },
    { path: 'pastmatch', loadChildren: './pastmatches/pastmatches.module#PastMatchModule' },
    { path: 'matchview', loadChildren: './matchview/matchview.module#MatchViewModule' },
    { path: 'admin', loadChildren: './admin/admin.module#AdminModule' },
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ 118:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__animations__ = __webpack_require__(116);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(179),
        styles: [__webpack_require__(176)],
        animations: [__WEBPACK_IMPORTED_MODULE_1__animations__["a" /* routerTransition */]],
        host: { '[@routerTransition]': '' }
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 119:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sharedmodule_shared_module__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_routing_module__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__landing_landing_component__ = __webpack_require__(70);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

//modules



//routing modules

//components


var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_6__landing_landing_component__["a" /* LandingComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_4__app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_1__sharedmodule_shared_module__["a" /* SharedModule */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 120:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 176:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(19)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 177:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(19)(false);
// imports


// module
exports.push([module.i, "body {\n  font-family: 'Montserrat', sans-serif;\n  background-image: url(" + __webpack_require__(29) + ");\n  background-repeat: no-repeat;\n  background-position: right top 0px;\n  background-size: 36% 75%; }\n\n.one > .second > .col-md-2 > img {\n  position: absolute;\n  height: 476px;\n  width: 134px;\n  top: 10px; }\n\n.container.two {\n  position: relative;\n  top: 20px; }\n\n.thickness {\n  font-weight: 700; }\n\n.thicker {\n  font-weight: 900;\n  font-size: 400%; }\n\n.lighter {\n  font-weight: 300; }\n\n.two > .second > .col-sm-4 > h4 > .span2 {\n  position: relative;\n  top: 9px; }\n\n.one > .first > .col-md-5 > h2 {\n  font-weight: bold !important; }\n\n.one > .second > .col-md-5 > h1 {\n  font-weight: bold !important;\n  font-size: -webkit-xxx-large; }\n\n.two > .second > .col-md-4 {\n  padding: 5px; }\n\n.two > .second > .col-md-4.two {\n  position: relative;\n  right: 30px;\n  top: 3px; }\n\n.two > .second > .col-md-4.three {\n  position: relative;\n  right: 18px; }\n\n.two > .second > .col-md-4 > input {\n  border: 1px solid !important;\n  border-color: black;\n  width: 185px;\n  height: 50px;\n  text-align: center;\n  font-size: 14px;\n  position: relative;\n  top: 2px; }\n\n.two > .second > .col-md-4 > ::-webkit-input-placeholder {\n  text-align: center; }\n\n.two > .second > .col-md-4 > h1 {\n  /* text-align: center; */\n  font-size: 35px;\n  font-weight: bold; }\n\n.two > .second > .col-md-4 > .text {\n  position: relative;\n  top: -43px; }\n\n.two > .second > .col-md-4 > .btn {\n  font-size: 13px;\n  height: 54px;\n  background-color: pink; }\n\n.three > .first > .col-md-12 {\n  position: relative;\n  text-align: right; }\n\n.three > .first > .col-md-12 > img {\n  width: 74px;\n  position: relative;\n  bottom: 20px; }\n\n.three > .first > .col-md-12 > h6 {\n  position: relative;\n  top: 33px;\n  left: -167px;\n  font-size: 13px; }\n\n.two > .second > .col-sm-3 > .text > span {\n  font-weight: bold;\n  position: relative;\n  top: -11px;\n  font-size: 12px;\n  left: 7px; }\n\n.container.three {\n  position: relative;\n  top: 10px; }\n\n@media screen and (min-width: 640px) and (max-width: 786px) {\n  .one > .second > .col-md-2 > img {\n    position: absolute;\n    height: 476px;\n    width: 100px;\n    top: 10px; }\n  .container.two {\n    position: relative;\n    top: -42px; }\n  body {\n    font-family: 'Montserrat', sans-serif;\n    overflow-x: hidden;\n    background-image: url(" + __webpack_require__(29) + ");\n    background-repeat: no-repeat;\n    background-position: right top 0px;\n    background-size: 46% 68%; }\n  .two > .second > .col-md-4 > h1 {\n    font-size: 24px;\n    font-weight: bold; }\n  .two > .second > .col-sm-3 > .text > span {\n    font-weight: bold;\n    position: relative;\n    top: -11px;\n    font-size: 9px;\n    left: -2px; }\n  .two > .second > .col-sm-4 > h4 > .span1 {\n    font-weight: bold;\n    font-size: 18px; }\n  .two > .second > .col-sm-4 > h4 > .span2 {\n    position: relative;\n    font-size: 18px;\n    top: 6px !important; }\n  .two > .second > .col-sm-5 > input {\n    border: 1px solid !important;\n    border-color: black;\n    height: 45px;\n    text-align: center;\n    font-size: 14px;\n    position: relative;\n    top: 2px;\n    width: -webkit-fill-available; }\n  .two > .second > .col-sm-5 > button {\n    background-color: black;\n    width: -webkit-fill-available; }\n  .two > .second > .col-md-4.two {\n    position: relative;\n    right: 30px;\n    top: -7px; }\n  .three > .first > .col-md-12 > img {\n    width: 57px;\n    position: relative;\n    bottom: 20px; }\n  .three > .first > .col-md-12 > h6 {\n    position: relative;\n    top: 22px;\n    left: -123px;\n    font-size: 11px; } }\n\n@media only screen and (width: 1440px) {\n  .three > .first > .col-md-12 {\n    position: relative;\n    text-align: right;\n    right: 56px; }\n  .two > .second > .col-md-4.three {\n    position: relative;\n    right: -21px; } }\n\n@media only screen and (width: 1024px) {\n  .three > .first > .col-md-12 {\n    position: relative;\n    text-align: right; } }\n\n@media screen and (min-width: 320px) and (max-width: 500px) {\n  .one > .first > .col-xs-12 > h2 {\n    font-size: 19px;\n    position: relative;\n    left: 61px;\n    width: 100px; }\n  .two > .second > .col-md-4.two {\n    position: relative;\n    right: 0px;\n    top: -220px; }\n  .two > .second > .col-md-4.three {\n    position: relative;\n    right: 0px;\n    top: -233; }\n  .one > .second > .col-xs-3 > img {\n    position: absolute;\n    height: 264px;\n    width: 71px;\n    top: -24px;\n    left: 0px; }\n  body {\n    font-family: 'Montserrat', sans-serif;\n    background-image: url(" + __webpack_require__(29) + ");\n    background-repeat: no-repeat;\n    background-position: right top 82px;\n    background-size: 34% 24%; }\n  .one > .second > .col-xs-5 > h1 {\n    font-weight: bold !important;\n    font-size: 33px;\n    text-shadow: 0px 1px, 1px 0px, 1px 1px;\n    position: relative;\n    bottom: 30px;\n    left: 61px;\n    width: 100px; }\n  .one > .second > .col-xs-5 > h2 {\n    font-size: 21px;\n    bottom: 77px;\n    position: relative;\n    left: 150px;\n    width: 100px; }\n  .two > .second > .col-sm-3 {\n    position: relative;\n    bottom: 150px; }\n  .two > .second > .col-sm-4 {\n    position: relative;\n    bottom: 227px; }\n  .two > .second > .col-sm-5 {\n    position: relative;\n    bottom: 239px; }\n  .two > .second > .col-xs-12 > h1 {\n    font-size: 16px;\n    font-weight: bold;\n    position: relative;\n    left: 30px;\n    width: 150px; }\n  .two > .second > .col-xs-12 > .text > span {\n    font-size: 7px;\n    font-weight: bold;\n    position: relative;\n    top: -22px !important;\n    left: 32px; }\n  .two > .second > .col-sm-4 > h4 > .span1 {\n    font-weight: bold;\n    font-size: 15px;\n    left: 30px;\n    position: relative;\n    width: 150px; }\n  .two > .second > .col-sm-4 > h4 > .span2 {\n    position: relative !important;\n    top: -6px !important;\n    left: 30px;\n    font-size: 15px; }\n  .two > .second > .col-md-4 > input {\n    border: 1px solid !important;\n    border-color: black;\n    width: 148px;\n    height: 29px;\n    text-align: center;\n    font-size: 14px;\n    position: relative;\n    top: 0px;\n    left: 30px; }\n  .two > .second > .col-md-4 > .btn {\n    font-size: 12px;\n    /* height: 42px; */\n    width: 107px;\n    height: 33px;\n    left: 29px;\n    padding: 7px; }\n  .two > .second > .col-md-4 > ::-webkit-input-placeholder {\n    text-align: center;\n    font-size: 10px;\n    padding: 10px; }\n  .three > .first > .col-md-12 {\n    position: absolute;\n    text-align: right;\n    bottom: -30px; }\n  .three > .first > .col-md-12 > img {\n    width: 43px; }\n  .three > .first > .col-md-12 > h6 {\n    position: relative;\n    top: 16px;\n    left: -94px;\n    font-size: 10px; }\n  .container.two > .row.second {\n    height: 75px; } }\n\n@media only screen and (width: 375px) {\n  body {\n    font-family: 'Montserrat', sans-serif;\n    background-image: url(" + __webpack_require__(29) + ");\n    background-repeat: no-repeat;\n    background-position: right top 82px;\n    background-size: 42% 25%; }\n  .one > .second > .col-xs-5 > h1 {\n    font-size: 34px; }\n  .one > .second > .col-xs-5 > h2 {\n    font-size: 23px;\n    bottom: 77px;\n    position: relative;\n    left: 162px;\n    width: 100px; } }\n\n/* @media  screen and (min-width: 320px) and (max-width: 500px) */\n@media only screen and (width: 425px) {\n  body {\n    font-family: 'Montserrat', sans-serif;\n    overflow-x: hidden;\n    background-image: url(" + __webpack_require__(29) + ");\n    background-repeat: no-repeat;\n    background-position: right top 82px;\n    background-size: 47% 21%; }\n  .one > .second > .col-xs-5 > h1 {\n    font-size: 35px; }\n  .one > .second > .col-xs-5 > h2 {\n    font-size: 23px;\n    bottom: 77px;\n    position: relative;\n    left: 162px;\n    width: 100px; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 179:
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ 180:
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html lang=\"en\">\n\n<head>\n    <meta charset=\"utf-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1, shrink-to-fit=no\">\n    <meta http-equiv=\"x-ua-compatible\" content=\"ie=edge\">\n    <title>123MasterKEY</title>\n    <!-- Font Awesome\n    <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css\">\n    <!-- Bootstrap core CSS -->\n    <!-- Material Design Bootstrap -->\n    <!-- Your custom styles (optional) -->\n\n\n    <!-- Google font api -->\n    <link href = \"https://fonts.googleapis.com/css?family=Montserrat:300,400,700,900\" rel=\"stylesheet\">\n</head>\n\n<body>\n         <br><br>\n    <!-- Start your project here-->\n     <div class=\"container one\">\n\n         <div class=\"row first\">\n             <div class=\"col-md-2 \">\n\n             </div>\n             <div class=\"col-md-5 col-xs-12 \">\n                 <h2 class=\"thickness\">123MasterKey</h2> <br>\n             </div>\n               <div class=\"col-md-5 \">\n\n             </div>\n         </div>\n           <div class=\"row second\">\n               <div class=\"col-md-2 col-xs-3\">\n\n              <img src=\"assets/images/left.png\"  alt=\"Left Home\">\n\n              </div>\n               <div class=\"col-md-5 col-xs-5\">\n                   <h1 class=\"thicker\">Unlock<br>Your<br>Dream<br>Spaces.</h1><br>\n\n                 <h2 class=\"lighter\">Mindfully<br>curated<br>properties,<br><span style=\"font-weight:bold\"> exclusively<br>for you.</span></h2>\n\n               </div>\n               <div  class=\"col-md-5 col-xs-4\">\n\n               </div>\n           </div>\n         </div><br><br><br>\n\n\n      <div class=\"container two\">\n             <div class=\"row second\">\n                 <div class=\"col-md-4 col-sm-3 col-xs-12 one\" >\n\n                     <h1 id=\"time\"></h1><br> <br>\n\n                     <div class=\"text\">\n                            <span> Days&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Hours &nbsp;&nbsp;&nbsp;&nbsp;Minutes &nbsp;&nbsp;&nbsp;&nbsp; Seconds </span>\n                        </div>\n                 </div>\n                  <div class=\"col-md-4 col-sm-4 col-xs-12 two\">\n                     <h4><span class=\"span1\" style=\"font-weight:bold\">We are launching soon!<br></span>\n                        <span class=\"span2\">Be the first one to know!</span> </h4>\n                  </div>\n                  <div class=\"col-md-4 col-sm-5 col-xs-12 three\">\n                        <input type=\"text\" name='phonenumber' placeholder=\"Enter your mobile no.\" maxlength=\"10\">\n                        <button type=\"button\"  class=\"btn btn\">Send</button>\n\n                  </div>\n             </div>\n      </div>\n\n       <div class=\"container three\">\n             <div class=\"row first\">\n                 <div class=\"col-md-12\">\n                    <h6> An initiative by :</h6>\n                    <img src=\"assets/images/ashish_logo.jpg\" alt=\"ashish group\">\n                    <img src=\"assets/images/infoway_logo.png\" alt=\"infoway\">\n\n                 </div>\n             </div>\n       </div>\n\n    <!-- /Start your project here-->\n\n    <!-- SCRIPTS -->\n    <!-- JQuery -->\n</body>\n\n</html>\n\n"

/***/ }),

/***/ 220:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(103);


/***/ }),

/***/ 29:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "right.110b565090c54d37bfe0.png";

/***/ }),

/***/ 70:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LandingComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LandingComponent = (function () {
    function LandingComponent() {
    }
    LandingComponent.prototype.ngOnInit = function () {
    };
    return LandingComponent;
}());
LandingComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-landing',
        template: __webpack_require__(180),
        styles: [__webpack_require__(177)]
    }),
    __metadata("design:paramtypes", [])
], LandingComponent);

//# sourceMappingURL=landing.component.js.map

/***/ })

},[220]);
//# sourceMappingURL=main.bundle.js.map
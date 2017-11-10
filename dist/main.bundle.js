webpackJsonp([6,9],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(117);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__nav_nav_component__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__(105);
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["a" /* MdIconModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["b" /* MdMenuModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["c" /* MdButtonModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["d" /* MdCardModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["e" /* MdInputModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["f" /* MdSelectModule */],
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__nav_nav_component__["a" /* NavComponent */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_3__nav_nav_component__["a" /* NavComponent */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["a" /* MdIconModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["b" /* MdMenuModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["c" /* MdButtonModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["d" /* MdCardModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["e" /* MdInputModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["f" /* MdSelectModule */],
        ]
    })
], SharedModule);

//# sourceMappingURL=shared.module.js.map

/***/ }),

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routerTransition; });

var routerTransition = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["trigger"])('routerTransition', [
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["state"])('void', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ position: 'absolute', width: '100%', height: '100%', opacity: 0 })),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["state"])('*', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ position: 'absolute', width: '100%', height: '100%', opacity: 1 })),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["transition"])(':enter', [
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ transform: 'translateY(20%)', opacity: 0 }),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["animate"])('0.8s ease-in-out', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ transform: 'translateY(0%)', opacity: 1 }))
    ]),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["transition"])(':leave', [
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ transform: 'translateY(0%)' }),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["animate"])('0.8s ease-in-out', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ transform: 'translateY(-20%)', opacity: 0 }))
    ])
]);
//# sourceMappingURL=animations.js.map

/***/ }),

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__landing_landing_component__ = __webpack_require__(69);
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__animations__ = __webpack_require__(112);
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(175),
        styles: [__webpack_require__(172)],
        animations: [__WEBPACK_IMPORTED_MODULE_1__animations__["a" /* routerTransition */]],
        host: { '[@routerTransition]': '' }
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__landing_landing_component__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__sharedmodule_shared_module__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_routing_module__ = __webpack_require__(113);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



//components


//modules

//routing modules

var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_3__landing_landing_component__["a" /* LandingComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_6__app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_5__sharedmodule_shared_module__["a" /* SharedModule */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 116:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavComponent = (function () {
    function NavComponent() {
    }
    NavComponent.prototype.ngOnInit = function () {
    };
    return NavComponent;
}());
NavComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-nav',
        template: __webpack_require__(177),
        styles: [__webpack_require__(174)]
    }),
    __metadata("design:paramtypes", [])
], NavComponent);

//# sourceMappingURL=nav.component.js.map

/***/ }),

/***/ 117:
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

/***/ 172:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(19)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 173:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(19)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 174:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(19)(false);
// imports


// module
exports.push([module.i, "#logo {\n  padding: 10px;\n  height: 52px; }\n\n@media screen and (max-width: 39.9375em) {\n  #logo, .cta-btn {\n    display: block; }\n  .cta-btn {\n    width: 100%;\n    text-align: center;\n    margin-top: 20px;\n    overflow-x: hidden;\n    padding-left: 30px;\n    padding-right: 30px; }\n  .header {\n    margin-bottom: 0; } }\n\n.mat-elevation-z6 {\n  background-color: #20233E;\n  z-index: 10;\n  width: 100%;\n  position: fixed; }\n\n.col-md-6 {\n  padding: unset; }\n\n.mat-icon-button {\n  position: relative;\n  top: 7px;\n  float: right; }\n\ni {\n  color: #03BCF1; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 175:
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ 176:
/***/ (function(module, exports) {

module.exports = "<br><br><div class=\"centerthis\">\n  <button type=\"button\" routerLink=\"/homepage\"class=\"raised\" md-raised-button>Show My Odds</button>\n</div>\n"

/***/ }),

/***/ 177:
/***/ (function(module, exports) {

module.exports = "<div class=\"mat-elevation-z6\">\n  <div class=\"container\">\n    <div class=\"col-md-6 col-xs-6\">\n    <a><img src=\"/assets/images/logo.svg\" id=\"logo\"></a>\n    </div>\n    <div class=\" col-md-4\">\n\n    </div>\n    <div class=\"col-md-2 col-xs-6\">\n\n      <button md-icon-button [mdMenuTriggerFor]=\"menu\">\n      <i class=\"material-icons\" type=\"button\">face</i>\n      </button>\n      <button md-icon-button>\n      <i class=\"material-icons\" type=\"button\">more_vert</i>\n      </button>\n\n      <md-menu #menu=\"mdMenu\">\n        <button md-menu-item>\n        <md-icon> perm_identity </md-icon>\n        <span>KYC</span>\n        </button>\n        <button md-menu-item>\n        <md-icon>book</md-icon>\n        <span>Knowledge Center</span>\n        </button>\n        <button  md-menu-item>\n        <md-icon>backspace</md-icon>\n        <span>Logout</span>\n        </button>\n      </md-menu>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 215:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(100);


/***/ }),

/***/ 69:
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-landing',
        template: __webpack_require__(176),
        styles: [__webpack_require__(173)]
    }),
    __metadata("design:paramtypes", [])
], LandingComponent);

//# sourceMappingURL=landing.component.js.map

/***/ }),

/***/ 99:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./admin/admin.module": [
		218,
		1
	],
	"./homepage/homepage.module": [
		219,
		2
	],
	"./livematches/livematches.module": [
		220,
		4
	],
	"./matchview/matchview.module": [
		221,
		0
	],
	"./pastmatches/pastmatches.module": [
		222,
		3
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
webpackAsyncContext.id = 99;


/***/ })

},[215]);
//# sourceMappingURL=main.bundle.js.map
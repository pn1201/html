webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./auth/auth.module": [
		"../../../../../src/app/auth/auth.module.ts",
		"auth.module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "../../../../../src/app/animation.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return fadeOpen; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return fadeLeave; });
/* unused harmony export rotateLeave */
/* unused harmony export scaleEnter */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_animations__ = __webpack_require__("../../../animations/@angular/animations.es5.js");

var fadeOpen = Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["k" /* trigger */])('fadeOpen', [
    // route 'enter' transition
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["j" /* transition */])(':enter', [
        // styles at start of transition
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* style */])({ opacity: 0 }),
        // animation and styles at end of transition
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('.3s', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* style */])({ opacity: 1 }))
    ])
]);
var fadeLeave = Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["k" /* trigger */])('fadeLeave', [
    // route 'leave' transition
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["j" /* transition */])(':leave', [
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* style */])({ opacity: 1 }),
        // animation and styles at end of transition
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('.3s', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* style */])({ opacity: 0 }))
    ])
]);
var rotateLeave = Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["k" /* trigger */])('rotateLeave', [
    // route 'leave' transition
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["j" /* transition */])(':leave', [
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* style */])({ transform: 'scale(100%)' }),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('0.5s', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* style */])({ transform: 'translateX(0%)' }))
    ])
]);
var scaleEnter = Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["k" /* trigger */])('scaleEnter', [
    // route 'enter' transition
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["j" /* transition */])(':enter', [
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* style */])({ transform: 'scale(0)' }),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('0.5s ease-in-out', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* style */])({ transform: 'scale(1)' }))
    ]),
]);
//# sourceMappingURL=animation.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet>\r\n\t<div class=\"loading-bg\" [hidden]=\"!loadingFlag\">\r\n\t\t<mat-spinner color=\"accent\" [diameter]=\"60\" [strokeWidth]=\"5\"></mat-spinner>\r\n\t</div>\r\n</router-outlet>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sharedService__ = __webpack_require__("../../../../../src/app/sharedService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng_socket_io__ = __webpack_require__("../../../../ng-socket-io/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng_socket_io___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng_socket_io__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// Import the AF2 Module



var AppComponent = (function () {
    function AppComponent(sharedService, af, socket) {
        var _this = this;
        this.sharedService = sharedService;
        this.af = af;
        this.socket = socket;
        this.title = 'app';
        this.sharedService.dataChange.subscribe(function (data) {
            _this.loadingFlag = data;
        });
        this.itemsRef = af.list('producer');
    }
    AppComponent.prototype.ngOnInit = function () {
        this.socket.connect();
        this.socket.on('server.ping', function (data) {
            console.log('test', data);
        });
    };
    AppComponent.prototype.beforeunloadHandler = function (event) {
        this.itemsRef.update(localStorage.getItem("id"), { status: { availability: false } });
    };
    return AppComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('window:beforeunload', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AppComponent.prototype, "beforeunloadHandler", null);
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")],
        host: { 'window:beforeunload': 'beforeunloadHandler' }
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__sharedService__["a" /* sharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__sharedService__["a" /* sharedService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_ng_socket_io__["Socket"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ng_socket_io__["Socket"]) === "function" && _c || Object])
], AppComponent);

var _a, _b, _c;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_sweetalert2__ = __webpack_require__("../../../../ng2-sweetalert2/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_sweetalert2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_ng2_sweetalert2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__material_module__ = __webpack_require__("../../../../../src/app/material.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__layouts_auth_auth_layout_component__ = __webpack_require__("../../../../../src/app/layouts/auth/auth-layout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__layouts_page_page_layout_component__ = __webpack_require__("../../../../../src/app/layouts/page/page-layout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__past_past_component__ = __webpack_require__("../../../../../src/app/past/past.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__list_list_component__ = __webpack_require__("../../../../../src/app/list/list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__app_routing__ = __webpack_require__("../../../../../src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__sharedService__ = __webpack_require__("../../../../../src/app/sharedService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_angularfire2__ = __webpack_require__("../../../../angularfire2/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_angularfire2_database_deprecated__ = __webpack_require__("../../../../angularfire2/database-deprecated/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__provider_UploadService__ = __webpack_require__("../../../../../src/app/provider/UploadService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__node_modules_ngx_ui_switch__ = __webpack_require__("../../../../ngx-ui-switch/ui-switch.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_ng_socket_io__ = __webpack_require__("../../../../ng-socket-io/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_ng_socket_io___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_22_ng_socket_io__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};























var config = { url: 'https://asdf.songabby.com', options: { path: '/api/socket.io' } };
[{ "origin": ["*"], "method": ["GET"], "maxAgeSeconds": 3600 }];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_14__app_routing__["a" /* AppRoutes */]),
            __WEBPACK_IMPORTED_MODULE_7__material_module__["a" /* MaterialModule */],
            __WEBPACK_IMPORTED_MODULE_17_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_16__environments_environment__["b" /* firebase_config */]),
            __WEBPACK_IMPORTED_MODULE_18_angularfire2_database__["b" /* AngularFireDatabaseModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["e" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_21__node_modules_ngx_ui_switch__["a" /* UiSwitchModule */],
            // OpentokModule.forRoot({apiKey: "46114862"}),
            __WEBPACK_IMPORTED_MODULE_22_ng_socket_io__["SocketIoModule"].forRoot(config)
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_9__layouts_auth_auth_layout_component__["a" /* AuthLayoutComponent */],
            __WEBPACK_IMPORTED_MODULE_10__layouts_page_page_layout_component__["a" /* PageLayoutComponent */],
            __WEBPACK_IMPORTED_MODULE_11__home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_12__past_past_component__["a" /* PastComponent */],
            __WEBPACK_IMPORTED_MODULE_13__list_list_component__["a" /* ListComponent */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_15__sharedService__["a" /* sharedService */],
            __WEBPACK_IMPORTED_MODULE_6_ng2_sweetalert2__["SweetAlertService"],
            __WEBPACK_IMPORTED_MODULE_19_angularfire2_database_deprecated__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_20__provider_UploadService__["a" /* UploadService */]
            //Http
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__layouts_auth_auth_layout_component__ = __webpack_require__("../../../../../src/app/layouts/auth/auth-layout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__past_past_component__ = __webpack_require__("../../../../../src/app/past/past.component.ts");



var AppRoutes = [{
        path: '',
        redirectTo: 'login',
        pathMatch: 'full',
    }, {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_0__layouts_auth_auth_layout_component__["a" /* AuthLayoutComponent */],
        loadChildren: './auth/auth.module#AuthModule'
    }, {
        path: 'home',
        component: __WEBPACK_IMPORTED_MODULE_1__home_home_component__["a" /* HomeComponent */]
    }, {
        path: 'past',
        component: __WEBPACK_IMPORTED_MODULE_2__past_past_component__["a" /* PastComponent */]
    }
];
// export const AppRoutes: Routes = [{
//     path:'',
//     component:HomeComponent
// },{
//     path:'past',
//     component:PastComponent
// }];
//# sourceMappingURL=app.routing.js.map

/***/ }),

/***/ "../../../../../src/app/home/Upload.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Upload; });
var Upload = (function () {
    function Upload(file) {
        this.createdAt = new Date();
        this.file = file;
    }
    return Upload;
}());

//# sourceMappingURL=Upload.js.map

/***/ }),

/***/ "../../../../../src/app/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.push([module.i, "@import url(//maxcdn.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css);", ""]);

// module
exports.push([module.i, ".home{\r\n    background: linear-gradient(#d1d1d1, #fafafa);\r\n    overflow-x: hidden;\r\n    height: 100%;\r\n    overflow-y: hidden;\r\n}\r\n\r\n.p_header{\r\n    padding: 10px 35px;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n    -webkit-box-pack: justify;\r\n        -ms-flex-pack: justify;\r\n            justify-content: space-between;\r\n    background: linear-gradient(#fafafa, #d1d1d1);\r\n    border-bottom: 1px #f0f0f0 solid;  \r\n}\r\n\r\n.p_header span{\r\n    color:#000034;\r\n    font-weight: 400;\r\n}\r\n\r\n.p_content{\r\n    height: calc( 100% - 90px );\r\n    overflow-y: auto;\r\n}\r\n\r\n.p_header i{\r\n    color:grey;\r\n}\r\n\r\n.p_content_l a{\r\n    color:#000034;\r\n    padding: 10px 0px;\r\n    width: 100%;\r\n    text-align: left;\r\n    padding-left: 35px;\r\n}\r\n\r\n.p_content_l a.active{\r\n    color: #ffffff;\r\n    background: rgb(29,49,74);\r\n    background: linear-gradient(to right, #000034 0%,rgb(39, 39, 93) 50%,#000034 100%);\r\n}\r\n\r\n.p_content_l img{\r\n    width: 20px;\r\n}\r\n\r\n.p_content_l{\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: column;\r\n            flex-direction: column;\r\n    width: 200px;\r\n    float: left;    \r\n    padding-top: 15%;\r\n}\r\n\r\n.p_content_r{\r\n    float: right;\r\n    background-color: #f0f0f0;\r\n    padding: 35px 65px;\r\n    width: calc( 100% - 200px );\r\n}\r\n\r\n.btnfile:hover{    \r\n    cursor: pointer;\r\n}\r\n#myfile{\r\n    cursor: pointer;\r\n    padding: 0px;\r\n    margin: 0px;\r\n    height: 80px;\r\n}\r\n\r\n.title{\r\n    color: #000034;\r\n    font-size: 20px;\r\n    text-align: left;\r\n    padding-bottom: 20px;\r\n    font-weight: 800;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n    -webkit-box-pack: justify;\r\n        -ms-flex-pack: justify;\r\n            justify-content: space-between;\r\n}\r\n\r\n.title span{\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    font-weight: 100;\r\n    font-size: 14px;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n}\r\n\r\n.c_r{\r\n    float: right;\r\n    width: 50%;\r\n}\r\n\r\n.c_l{\r\n    float: left;\r\n    width: 50%;\r\n    /* background-color: #1e3046;\r\n    border-radius: 3px;\r\n    padding: 20px; */\r\n}\r\n\r\n.c_title{\r\n    font-size: 15px;\r\n    color: #848a9c;\r\n    text-align: left;\r\n}\r\n\r\n.c_r_t, .c_l_t, .c_l_b, .c_r_b{\r\n    background-color: #e2e2e2;\r\n    padding: 20px;\r\n    border-radius: 3px;\r\n    text-align: right;\r\n}\r\n\r\n.c_l_t{\r\n    margin-right: 10px;\r\n    margin-bottom: 20px;\r\n}\r\n\r\n.c_r_t{\r\n    margin-left: 10px;\r\n    margin-bottom: 20px;\r\n    text-align: left;\r\n    height: 225px;\r\n}\r\n\r\n.c_l_b{\r\n    margin-right: 10px;\r\n    margin-top: 20px;\r\n}\r\n\r\n.c_r_b{\r\n    margin-left: 10px;\r\n    margin-top: 20px;\r\n    text-align: left;\r\n}\r\n\r\nhr{\r\n    border-color: #d0d4d8;\r\n}\r\n\r\ninput{\r\n    width: 100%;\r\n    background-color: #f0f0f0;\r\n    border: 1px solid #d0d4d8;\r\n    height: 40px;\r\n    border-radius: 3px;\r\n    padding-left: 20px;\r\n    padding-right: 20px;\r\n    margin: 20px 0px;\r\n    color: #000034;\r\n}\r\n\r\nbutton{\r\n    margin-top: 10px;\r\n    background: linear-gradient(#000034, #141454);\r\n    border: none;\r\n    border-radius: 3px;\r\n    color: #e2e2e2;\r\n    padding: 9px 20px;\r\n    cursor: pointer;\r\n}\r\nbutton:hover { \r\n    background: linear-gradient(#141454, #141454);\r\n}\r\n\r\n.btnfile:hover { \r\n    background: transparent;\r\n}\r\n\r\n.c_l_b_lbl{\r\n    text-align: left;\r\n    color: #848a9c;\r\n}\r\n\r\n.c_l_b_file{\r\n\r\n}\r\n\r\n.c_r_t .c_title{\r\n    color: #000034;\r\n}\r\n\r\n.c_r_t .c_title span{\r\n    color: #848a9c;\r\n}\r\n\r\n.c_r_t_lbl{\r\n    color: #848a9c;\r\n    word-wrap: break-word;\r\n}\r\n\r\ntable{\r\n    width: 100%; \r\n    min-width: 360px;   \r\n}\r\n\r\n.edittitle{\r\n    position: relative;    \r\n    float: right;   \r\n    margin-top: 0px;\r\n    color: #000034;\r\n    font-size: 19px;\r\n  }\r\n\r\n\r\nth{\r\n    color: #ecedee;\r\n    font-weight: 100;\r\n    height: 40px;\r\n    padding-left: 10px;\r\n}\r\n\r\ntd{\r\n    color: #717a88;\r\n    padding-left: 10px;\r\n}\r\n\r\ntd.download{\r\n    color: #20c1ae;\r\n}\r\n\r\ntr{\r\n    /* height: 40px; */\r\n}\r\n\r\n.tdborder{\r\n    border-bottom-right-radius: 3px;\r\n    border-top-right-radius: 3px; \r\n}\r\n\r\ntr td:first-child{\r\n    border-bottom-left-radius: 3px;\r\n    border-top-left-radius: 3px;\r\n}\r\n\r\n::-webkit-input-placeholder { /* Chrome/Opera/Safari */\r\n    color: #848a9c;\r\n}\r\n::-moz-placeholder { /* Firefox 19+ */\r\n    color: #848a9c;\r\n}\r\n:-ms-input-placeholder { /* IE 10+ */\r\n    color: #848a9c;\r\n}\r\n:-moz-placeholder { /* Firefox 18- */\r\n    color: #848a9c;\r\n}\r\n\r\n.upload-btn-wrapper {\r\n    position: relative;\r\n    overflow: hidden;\r\n    display: inline-block;\r\n    width:100%\r\n}\r\n\r\n.btnfile {\r\n    border: 1px dashed #d0d4d8;\r\n    color: #848a9c;\r\n    background: transparent;\r\n    font-size: 18px;\r\n    width: 100%;\r\n    height: 80px;\r\n    padding: 0px;\r\n    margin: 0px;\r\n}\r\n\r\n.upload-btn-wrapper input[type=file] {\r\n    font-size: 100px;\r\n    position: absolute;\r\n    left: 0;\r\n    top: 0;\r\n    opacity: 0;\r\n}\r\n\r\n.cursor{\r\n    cursor: pointer;\r\n}\r\n\r\ntextarea{\r\n    width: 100%;\r\n    border: 1px solid #d0d4d8;\r\n    border-top-width: 0px;\r\n    background-color: #d0d4d8;\r\n    color: #000034;\r\n    resize: none;\r\n    margin-top: -1rem;\r\n}\r\n\r\n::-webkit-scrollbar {\r\n    width: 5px;\r\n}\r\n\r\n/* Track */\r\n::-webkit-scrollbar-track {\r\n    background: #000034;\r\n    border: 1px solid transparent;\r\n    background-clip: content-box;   /* THIS IS IMPORTANT */\r\n}\r\n\r\n/* Handle */\r\n::-webkit-scrollbar-thumb {\r\n    background: #d3d4d8;\r\n    border: 1px solid #d3d4d8;\r\n    border-radius: 3px;\r\n}\r\n\r\n.fa-pause, .fa-play{\r\n    border: 1px solid #717a88;\r\n    border-radius: 50%;\r\n    font-size: 10px;\r\n    width: 20px;\r\n    height: 20px;\r\n    color: white;\r\n    padding-top: 4px;\r\n    padding-left: 1px;\r\n}\r\n\r\n\r\n.table_div{\r\n    height: 265px;    \r\n    overflow-y: auto;\r\n    overflow-x: auto;\r\n    padding-right: 10px;\r\n}\r\n\r\n.menu_mobile{\r\n    display: none;\r\n}\r\n\r\n.menu_mobile_part div:last-child{\r\n    border-bottom-width: 0px;\r\n}\r\n\r\n.menu_browser{\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n}\r\n\r\n@media (max-width: 1178px) { \r\n    .c_l, .c_r{\r\n        width: 100%;\r\n    }\r\n\r\n    .c_r_t, .c_l_b, .c_l_t, .c_r_b{\r\n        margin: 0px;\r\n        margin-top: 20px;\r\n    }\r\n}\r\n@media (max-width: 834px) { \r\n    .videocall{\r\n        -webkit-box-orient: vertical;\r\n        -webkit-box-direction: normal;\r\n            -ms-flex-direction: column;\r\n                flex-direction: column;\r\n    }\r\n}\r\n\r\n\r\n@media (max-width: 735px) { \r\n    .p_content_l{\r\n        display: none;\r\n    }\r\n    .menu_mobile{\r\n        display: block;\r\n    }\r\n    .menu_browser{\r\n        display: none;\r\n    }\r\n    .p_content_r{\r\n        width: 100%;\r\n        padding: 35px 25px;\r\n    }\r\n\r\n    /* .p_header i{\r\n        font-size: 20px;\r\n    }\r\n\r\n    .p_header i.active{\r\n        color: #21cdb8;        \r\n    } */\r\n}\r\n\r\n.menu_mobile_part{\r\n    position: absolute;\r\n    top: 67px;\r\n    right: 0px;\r\n    background-color: #f0f0f0;\r\n    border-radius: 5px;\r\n    border: 1px solid #e2e2e2;\r\n    padding: 0px 10px;\r\n    padding-top: 10px;\r\n    z-index: 99;\r\n    color:#848a9c;\r\n}\r\n\r\n.menu_mobile_part div{\r\n    min-height: 50px;\r\n    padding: 10px;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n    border-bottom: 1px solid #e2e2e2;\r\n}\r\n\r\n.menu_mobile_part div .active{\r\n    color: #000034;\r\n}\r\n\r\n.menu_mobile_part i{\r\n    font-size: 20px;\r\n}\r\n\r\n@media (max-width: 403px) { \r\n    \r\n}\r\n\r\n\r\n.hiddenclass{\r\n    display: none;\r\n}\r\n\r\n.showclass{\r\n    display: block;\r\n}\r\n\r\n.flexclass{\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n}\r\n\r\n.publisher{\r\n    position: absolute;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    z-index: 9999;\r\n    left: 20px;\r\n    top: 20px;\r\n}\r\n\r\n.videochat{\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n}\r\n\r\n.videochattitle{\r\n    width: 100%;    \r\n    -webkit-box-pack: center;    \r\n        -ms-flex-pack: center;    \r\n            justify-content: center;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: column;\r\n            flex-direction: column;\r\n    color: #000034;\r\n    font-size: 15px;\r\n}\r\n\r\n.videoanswer{\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: column;\r\n            flex-direction: column;\r\n    color: #000034;\r\n    font-size: 15px;\r\n}\r\n\r\n.c_l_b_lbl_filename{\r\n    font-size: 17px;\r\n}\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"home text-center\">\r\n    <div style=\"position: absolute;\r\n    width: 100%;\r\n    height: 100%;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    background: rgba(6, 10, 14, 0.8);\r\n    z-index: 9999;\" *ngIf=\"showloading\">\r\n        <img src=\"../assets/images/loader.gif\" height=\"50px\">\r\n    </div>   \r\n\t<div class=\"p_header\">\r\n        <img src=\"../assets/images/logo7.png\" height=\"70px\">\r\n        <i class=\"fa fa-bars menu_mobile\" (click)=\"onDropdown()\"></i>\r\n        <div class=\"menu_browser cursor\" (click)=\"onDropdownBrowser()\">\r\n            <img style=\"width:40px;\" src=\"../assets/images/user.png\">            \r\n            <span>&nbsp;&nbsp;&nbsp;{{email}}</span>\r\n        </div>\r\n    </div>\r\n    <div *ngIf=\"dropB\" class=\"menu_mobile_part\">\r\n        <div (click)=\"home()\" class=\"cursor\" style=\"justify-content:flex-start;\"><i class=\"fa fa-microphone active\"></i>&nbsp;&nbsp;&nbsp;Current Session</div>\r\n        <div (click)=\"past()\" class=\"cursor\" style=\"justify-content:flex-start;\"><i class=\"fa fa-history\"></i>&nbsp;&nbsp;&nbsp;Past Session</div>\r\n        <div (click)=\"logout()\" class=\"cursor\" style=\"justify-content:flex-start;\"><i class=\"fa fa-sign-out\"></i>&nbsp;&nbsp;&nbsp;Logout</div>\r\n    </div>\r\n    <div *ngIf=\"drop\" class=\"menu_mobile_part\">\r\n        <div style=\"display:flex;flex-direction: column;\"><img style=\"width:40px;\" src=\"../assets/images/user.png\"><span>{{email}}</span></div>\r\n        <div (click)=\"home()\"><i class=\"fa cursor fa-microphone active\"></i></div>\r\n        <div (click)=\"past()\"><i class=\"fa cursor fa-history\"></i></div>\r\n        <div (click)=\"logout()\"><i class=\"fa cursor fa-sign-out\"></i></div>\r\n    </div>\r\n    <div class=\"p_content\">\r\n        <div class=\"p_content_l\">\r\n            <a (click)=\"home()\" class=\"active cursor\"><i class=\"fa fa-microphone\"></i>&nbsp;&nbsp;Current Session</a>\r\n            <a (click)=\"past()\" class=\"cursor\"><i class=\"fa fa-history\"></i>&nbsp;&nbsp;Past Session</a>\r\n        </div>       \r\n        <div class=\"p_content_r\">\r\n            <div class=\"title\">Current Session\r\n                <span>offline&nbsp;&nbsp;<ui-switch color=\"#000034\" [(ngModel)]=\"availability\" (change)=\"onToggleChange($event)\"></ui-switch>&nbsp;&nbsp;online</span>\r\n            </div>\r\n            <div class=\"c_l\">\r\n                <div class=\"c_l_t\" [ngClass]=\"incomingcall!=0?'hiddenclass':'showclass'\">                    \r\n                    <div class=\"c_title\">Enter Session ID</div>\r\n                    <hr>\r\n                    <input type=\"text\" [(ngModel)]=\"sesstionID\" placeholder=\"eg.XRSD28\">\r\n                    <button (click)=\"getSesstionDetail()\">Get Sesstion Details</button>\r\n                </div>\r\n                <div class=\"c_l_t videoanswer\" [ngClass]=\"incomingcall==1?'flexclass':'hiddenclass'\">\r\n                    <img src=\"../assets/images/phone-ringing.gif\" height=\"150px\">\r\n                    <div>{{videochatSinger}} is calling you ...</div>\r\n                    <div>\r\n                        <button (click)=\"answertocall()\">Answer Call</button>\r\n                        <button (click)=\"declinecall()\">Decline Call</button>\r\n                    </div>\r\n                </div>\r\n                <div class=\"c_l_t videocall\" [ngClass]=\"incomingcall==2?'flexclass':'hiddenclass'\" style=\"justify-content: center;align-items: center; position: relative;\">\r\n                    <div>\r\n                        <div id=\"publisher\"></div>\r\n                        <div id=\"subscriber\"></div>\r\n                    </div>\r\n                    <div class=\"videochattitle\" [ngClass]=\"incomingcall==2?'flexclass':'hiddenclass'\">\r\n                        <div>Session ID : {{videochatSessionId.substring(0, 7)}}</div>\r\n                        <div>Singer : {{videochatSinger}}</div>\r\n                        <div>\r\n                            <button (click)=\"endcall()\">End Call</button>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"c_l_b\">\r\n                    <div>\r\n                        <div class=\"c_title\">Send Backing Track/Loop</div>\r\n                        <hr>\r\n                        <div class=\"c_l_b_lbl\">\r\n                            Give the loop a name\r\n                        </div>\r\n                        <input type = \"text\" placeholder=\"eg. Versie, Chours\" [(ngModel)]=\"trackname\">\r\n                        <div class=\"upload-btn-wrapper c_l_b_file\" (click)=\"clearSelectedFile()\">\r\n                            <button class=\"btnfile\">Click here to upload</button>\r\n                            <input type=\"file\" (change)=\"detectFiles($event)\" id=\"myfile\" name=\"myfile\" multiple=\"false\" />\r\n                            <span class=\"c_l_b_lbl c_l_b_lbl_filename\" *ngIf=\"selectedFiles\">{{ selectedFiles[selectedFileInx].name }}</span>&nbsp;&nbsp;&nbsp;&nbsp;\r\n                            <span class=\"c_l_b_lbl\" *ngIf=\"showpercent\">{{ currentUpload?.progress }} % complete</span>\r\n                        </div>\r\n                    </div>\r\n                    <button [disabled]=\"!selectedFiles\" (click)=\"uploadSingle()\">Send Loop</button>                   \r\n                </div>                \r\n            </div>\r\n\r\n            <div class=\"c_r\">                 \r\n                <div class=\"c_r_t\">\r\n                    <div class=\"edittitle\" (click)=\"onEdit()\" *ngIf=\"currentSinger != undefined && !showtextarea\"><i class=\"fa fa-edit\"></i></div>\r\n                    <div class=\"edittitle\" (click)=\"onSave()\" *ngIf=\"currentSinger != undefined && showtextarea\"><i class=\"fa fa-save\"></i></div>\r\n                    <div class=\"c_title\">\r\n                        Singer: <span *ngIf=\"currentSinger != undefined\">{{currentSinger.name}}</span>\r\n                        <span *ngIf=\"currentSinger == undefined\">No Singer</span>\r\n                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\r\n                        Title: <span *ngIf=\"currentLyrics != undefined\">{{currentLyrics.title}}</span>\r\n                        <span *ngIf=\"currentSinger == undefined\">No title</span>\r\n                    </div>\r\n                    <hr>\r\n                    <div class=\"c_r_t_lbl\" *ngIf=\"currentLyrics != undefined && !showtextarea\">\r\n                        <textarea readonly style=\"background-color:transparent;\" rows=\"7\">{{currentLyrics.description}}</textarea>                        \r\n                    </div>\r\n                    <div class=\"c_r_t_lbl\" *ngIf=\"currentLyrics == undefined\">\r\n                        There is no lyrics.\r\n                    </div>\r\n                    <textarea [(ngModel)]=\"newLyrics\" *ngIf=\"currentLyrics != undefined && showtextarea\" rows=\"7\">{{currentLyrics.description}}</textarea>\r\n                </div>                         \r\n                <app-list [value]=\"downloads\"></app-list>                        \r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Upload__ = __webpack_require__("../../../../../src/app/home/Upload.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__provider_UploadService__ = __webpack_require__("../../../../../src/app/provider/UploadService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__list_list_component__ = __webpack_require__("../../../../../src/app/list/list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng_socket_io__ = __webpack_require__("../../../../ng-socket-io/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng_socket_io___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_ng_socket_io__);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






//import { Evented, Event } from '../provider/Evented';

var HomeComponent = (function () {
    function HomeComponent(af, upSvc, router, socket) {
        var _this = this;
        this.af = af;
        this.upSvc = upSvc;
        this.router = router;
        this.socket = socket;
        this.selectedFileInx = 0;
        this.showpercent = false;
        this.downloads = [];
        this.playDownloads = [];
        this.showtextarea = false;
        this.showEdit = false;
        this.currentLyricsItemInx = "";
        this.newLyrics = "";
        this.trackname = "";
        this.showloading = false;
        this.drop = false;
        this.dropB = false;
        this.email = "";
        this.incomingcall = 0;
        this.availability = false;
        //sessionList = [];
        this.videochatSessionId = "";
        this.videochatSinger = "";
        this.videochatData = "";
        this.firebasesession = "";
        this.videoopentoksession = null;
        this.itemsRef = af.list('producer');
        this.lyricsRef = af.list('lyrics');
        this.items = this.itemsRef.valueChanges();
        this.sesstionID = localStorage.getItem("pastID");
        this.email = localStorage.getItem("email");
        this.getSesstionDetail = this.getSesstionDetail.bind(this);
        router.events.subscribe(function (event) {
            if (event instanceof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ResolveEnd */] && event.url == "/home") {
                _this.sesstionID = localStorage.getItem("pastID");
            }
        });
    }
    HomeComponent.prototype.onDropdown = function () {
        this.drop = !this.drop;
    };
    HomeComponent.prototype.onDropdownBrowser = function () {
        this.dropB = !this.dropB;
    };
    HomeComponent.prototype.clearSelectedFile = function () {
        if (this.currentUpload)
            this.currentUpload.progress = 0;
    };
    HomeComponent.prototype.sendMessage = function (msg, fname) {
        this.socket.emit(fname, msg);
    };
    HomeComponent.prototype.getMessage = function () {
        return this.socket
            .fromEvent("message")
            .map(function (data) { return data; });
    };
    HomeComponent.prototype.onToggleChange = function ($e) {
        this.itemsRef.update(localStorage.getItem("id"), { status: { availability: $e } });
    };
    HomeComponent.prototype.onEdit = function () {
        this.showtextarea = true;
    };
    HomeComponent.prototype.ngOnInit = function () {
        this.itemsRef.update(localStorage.getItem("id"), { status: { availability: true } });
        this.availability = true;
        var self = this;
        this.socket.on('calltoreceiver', function (data) {
            self.playAudio();
            if (data.data.producer == localStorage.getItem("id")) {
                self.incomingcall = 1;
                self.videochatSessionId = data.sessionId;
                self.videochatSinger = data.data.singer;
                self.videochatData = data;
                self.firebasesession = data.firebasesession;
                self.sesstionID = data.firebasesession;
            }
        });
        this.socket.on('endfromcaller', function (data) {
            var temp = JSON.parse(data);
            if (temp.sessionId == self.videochatSessionId) {
                self.videoopentoksession.disconnect();
                self.incomingcall = 0;
                self.videochatSessionId = "";
                self.videochatSinger = "";
                self.videochatData = "";
                self.endcall();
            }
            //Evented.fire('calling', data);
        });
        this.socket.on('trackUploadFinishfromcaller', function (data) {
            if (data.success) {
                this.getSesstionDetail();
            }
        });
        this.audio = new Audio();
        this.audio.src = "assets/audio/ringtone.mp3";
    };
    HomeComponent.prototype.answertocall = function () {
        this.pauseAudio();
        this.incomingcall = 2;
        this.sendMessage(JSON.stringify(this.videochatData), "answer");
        this.initializeSession(this.videochatData);
        this.getSesstionDetail();
    };
    HomeComponent.prototype.declinecall = function () {
        this.pauseAudio();
        this.incomingcall = 0;
        this.sendMessage(JSON.stringify(this.videochatData), "decline");
        this.videochatSessionId = "";
        this.videochatSinger = "";
        this.videochatData = "";
    };
    HomeComponent.prototype.endcall = function () {
        this.sendMessage(JSON.stringify(this.videochatData), "end");
        this.videoopentoksession.disconnect();
        this.incomingcall = 0;
        this.videochatSessionId = "";
        this.videochatSinger = "";
        this.videochatData = "";
    };
    HomeComponent.prototype.initializeSession = function (data) {
        // if (this.videoopentoksession) {
        //   if (publisher) {
        //       session.unpublish(publisher);
        //   }
        //   session.disconnect();
        // }
        this.videoopentoksession = OT.initSession("46114862", data.sessionId);
        // Subscribe to a newly created stream
        // Create a publisher
        var publisher = OT.initPublisher('publisher', {
            insertMode: 'append',
            width: '100px',
            height: '70px'
        }, handleError);
        // Connect to the session
        var self = this;
        this.videoopentoksession.connect(data.token, function (error) {
            // If the connection is successful, publish to the session
            if (error) {
                handleError(error);
            }
            else {
                self.videoopentoksession.publish(publisher, handleError);
                resizePublisher();
            }
        });
        this.videoopentoksession.on('streamCreated', function (event) {
            self.videoopentoksession.subscribe(event.stream, 'subscriber', {
                insertMode: 'append'
            }, handleError);
        });
        function handleError(error) {
            if (error) {
                alert(error.message);
            }
        }
        function resizePublisher() {
            var publisherContainer = document.getElementById("publisher");
            publisherContainer.style.position = "absolute";
            publisherContainer.style.zIndex = "9999";
            publisherContainer.style.display = "flex";
            publisherContainer.style.border = "1px solid #000034";
            publisherContainer.style.top = "20px";
        }
    };
    HomeComponent.prototype.detectFiles = function (event) {
        this.selectedFiles = event.target.files;
    };
    HomeComponent.prototype.uploadSingle = function () {
        if (this.incomingcall != 2) {
            alert('Sorry! You can only upload audio during video call.');
            return;
        }
        if (this.currentSesstion == undefined) {
            if (this.incomingcall == 2) {
                this.sesstionID = this.firebasesession;
                this.showpercent = true;
                var file = this.selectedFiles.item(0);
                var extension = file.name.split(".");
                var filename = this.trackname + "." + extension[extension.length - 1];
                if (this.trackname == '') {
                    filename = file.name;
                }
                this.currentUpload = new __WEBPACK_IMPORTED_MODULE_3__Upload__["a" /* Upload */](file);
                this.upSvc.pushUpload(this.currentUpload, this.sesstionID, filename, localStorage.getItem("id"), localStorage.getItem("email"));
                this.createProducerClip(this.firebasesession, filename);
            }
        }
        else {
            this.showpercent = true;
            var file = this.selectedFiles.item(0);
            var extension = file.name.split(".");
            var filename = this.trackname + "." + extension[extension.length - 1];
            if (this.trackname == '') {
                filename = file.name;
            }
            this.onUpdateClip(filename);
            this.currentUpload = new __WEBPACK_IMPORTED_MODULE_3__Upload__["a" /* Upload */](file);
            if (this.currentProducer && !this.currentProducer.username)
                this.currentProducer = 'Unknown user';
            this.upSvc.pushUpload(this.currentUpload, this.sesstionID, filename, this.currentProducer.key, this.currentProducer.username);
        }
        this.getSesstionDetail();
    };
    HomeComponent.prototype.createProducerClip = function (hexString, filename) {
        console.log('createProducerClip');
        console.log(JSON.stringify({ sessionid: hexString, filename: filename, data: this.videochatData }));
        this.sendMessage(JSON.stringify({ sessionid: hexString, filename: filename, data: this.videochatData }), "clip");
    };
    HomeComponent.prototype.getSesstionDetail = function () {
        var _this = this;
        localStorage.setItem("pastID", this.sesstionID);
        this.currentSesstion = new Object();
        this.currentLyrics = new Object();
        this.currentSinger = new Object();
        this.currentLyricsItem = new Object();
        this.currentProducer = new Object();
        this.currentLyricsItemInx = "";
        this.sesstionID = this.sesstionID.trim();
        this.showloading = true;
        this.af.list('producer').snapshotChanges().map(function (actions) {
            return actions.map(function (action) { return (__assign({ key: action.key }, action.payload.val())); });
        }).subscribe(function (items) {
            items.forEach(function (element) {
                if (element.sessions != undefined) {
                    var sessionsKeyList = Object.keys(element.sessions);
                    sessionsKeyList.forEach(function (elementsesstion) {
                        if (elementsesstion == _this.sesstionID) {
                            _this.currentProducer = element;
                            _this.currentSesstion = element.sessions[elementsesstion];
                        }
                    });
                }
            });
            if (JSON.stringify(_this.currentSesstion) != "{}") {
                _this.af.list('lyrics').snapshotChanges().map(function (actions1) {
                    return actions1.map(function (action1) { return (__assign({ key: action1.key }, action1.payload.val())); });
                }).subscribe(function (items1) {
                    var isExist = false;
                    items1.forEach(function (element1) {
                        var keys = Object.keys(element1);
                        var inx = keys.indexOf(_this.currentSesstion.lyricsId);
                        if (inx != -1) {
                            isExist = true;
                            _this.currentLyricsItem = element1;
                            _this.currentLyricsItemInx = keys[inx];
                            _this.currentLyrics = Object.values(element1)[inx];
                            _this.newLyrics = _this.currentLyrics.description;
                            var singer = element1.key;
                            _this.af.list('users').snapshotChanges().map(function (actions2) {
                                return actions2.map(function (action2) { return (__assign({ key: action2.key }, action2.payload.val())); });
                            }).subscribe(function (items2) {
                                items2.forEach(function (element2) {
                                    if (element2.key == singer) {
                                        _this.currentSinger = element2;
                                    }
                                });
                            });
                            _this.af.list('uploads').snapshotChanges().map(function (actions3) {
                                return actions3.map(function (action3) { return (__assign({ key: action3.key }, action3.payload.val())); });
                            }).subscribe(function (items3) {
                                var tempDownloads = [];
                                items3.forEach(function (element3) {
                                    if (element3.producer == _this.sesstionID) {
                                        tempDownloads.push(element3);
                                    }
                                });
                                _this.showloading = false;
                                setTimeout(function () {
                                    _this.downloads = tempDownloads;
                                }, 100);
                            });
                        }
                    });
                    if (!isExist) {
                        _this.showloading = false;
                        $.confirm({
                            title: '',
                            content: 'No session result.',
                            type: 'white',
                            buttons: {
                                cancel: {
                                    text: "OK",
                                    btnClass: 'btn-primary',
                                    keys: ['enter'],
                                    action: function () {
                                    }
                                }
                            }
                        });
                    }
                });
            }
            else {
                _this.showloading = false;
                _this.sesstionID = "";
                $.confirm({
                    title: '',
                    content: 'No session result.',
                    type: 'white',
                    buttons: {
                        cancel: {
                            text: "OK",
                            btnClass: 'btn-primary',
                            keys: ['enter'],
                            action: function () {
                            }
                        }
                    }
                });
            }
        });
    };
    HomeComponent.prototype.closeLoading = function () {
        this.showloading = false;
        this.sesstionID = "";
    };
    HomeComponent.prototype.addItem = function (newName, newTitle) {
        this.itemsRef.push({ id: newName, score: newTitle });
    };
    HomeComponent.prototype.updateItem = function (key, newText, newTitle) {
        this.itemsRef.update(key, { id: newText, score: newTitle });
    };
    HomeComponent.prototype.deleteItem = function (key) {
        this.itemsRef.remove(key);
    };
    HomeComponent.prototype.deleteEverything = function () {
        this.itemsRef.remove();
    };
    HomeComponent.prototype.logout = function () {
        if (this.incomingcall != 0) {
            $.confirm({
                title: '',
                content: 'Please end current call before navigating away.',
                type: 'white',
                buttons: {
                    ok: {
                        text: "OK",
                        btnClass: 'btn-primary',
                        keys: ['enter'],
                        action: function () {
                        }
                    }
                }
            });
        }
        else {
            var self = this;
            $.confirm({
                title: '',
                content: 'Are you sure you want to log out?',
                type: 'white',
                buttons: {
                    ok: {
                        text: "OK",
                        btnClass: 'btn-primary',
                        keys: ['enter'],
                        action: function () {
                            self.onToggleChange(false);
                            localStorage.removeItem("id");
                            localStorage.removeItem("email");
                            localStorage.removeItem("pastID");
                            localStorage.removeItem("sessionList");
                            window.location.href = "/login";
                        }
                    },
                    cancel: {
                        text: "Cancel",
                        btnClass: 'btn-primary',
                        keys: ['enter'],
                        action: function () {
                            this.dropB = false;
                            this.drop = false;
                        }
                    }
                }
            });
        }
    };
    HomeComponent.prototype.past = function () {
        if (this.incomingcall == 0) {
            this.dropB = false;
            this.drop = false;
            window.location.href = "/past";
        }
        else {
            $.confirm({
                title: '',
                content: 'Please end current call before navigating away.',
                type: 'white',
                buttons: {
                    ok: {
                        text: "OK",
                        btnClass: 'btn-primary',
                        keys: ['enter'],
                        action: function () {
                        }
                    }
                }
            });
        }
    };
    HomeComponent.prototype.home = function () {
        this.dropB = false;
        this.drop = false;
        window.location.href = "/home";
    };
    HomeComponent.prototype.onSave = function () {
        this.currentLyrics.description = this.newLyrics;
        this.lyricsRef.update(this.currentLyricsItem.key, this.currentLyricsItem);
        this.showtextarea = false;
    };
    HomeComponent.prototype.onUpdateClip = function (name) {
        this.currentSesstion.producerClip = name;
    };
    HomeComponent.prototype.playAudio = function () {
        this.audio.load();
        this.audio.loop = true;
        this.audio.play();
    };
    HomeComponent.prototype.pauseAudio = function () {
        this.audio.pause();
        this.audio.currentTime = 0;
    };
    return HomeComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5__list_list_component__["a" /* ListComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__list_list_component__["a" /* ListComponent */]) === "function" && _a || Object)
], HomeComponent.prototype, "list", void 0);
HomeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-home',
        template: __webpack_require__("../../../../../src/app/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/home.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__provider_UploadService__["a" /* UploadService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__provider_UploadService__["a" /* UploadService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_6_ng_socket_io__["Socket"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6_ng_socket_io__["Socket"]) === "function" && _e || Object])
], HomeComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/layouts/auth/auth-layout.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".auth-content {\r\n\theight: 100%;\r\n}\r\n\r\n.auth-content >>> .auth-content {\r\n    background: #4d6dae; /* For browsers that do not support gradients */ /* For Safari 5.1 to 6.0 */ /* For Opera 11.1 to 12.0 */ /* For Firefox 3.6 to 15 */\r\n    background: linear-gradient(#4d6dae, #47acb8); /* Standard syntax (must be last) */\r\n}\r\n\r\n.auth-content >>> .logo-image svg {\r\n\twidth: 50%;\r\n\theight: auto;\r\n}\r\n\r\n.auth-content >>> .form-control {\r\n\tbackground-color: #6598b4;\r\n\tcolor: white;\r\n\tfont-size: 16px;\r\n\tpadding: 12px 18px;\r\n\theight: auto;\r\n\tborder-radius: 12px;\r\n}\r\n.auth-content >>> .form-control:focus, .auth-content >>> .form-control:active {\r\n\tbackground-color: #6ba1c1;\r\n}\r\n\r\n.auth-content >>> .has-error .form-control {\r\n\tborder: 1px solid #000034;\r\n}\r\n.auth-content >>> .has-error .help-block {\r\n\tcolor: #000034;\r\n}\r\n\r\n.auth-content >>> ::-webkit-input-placeholder { /* WebKit, Blink, Edge */\r\n    color:    #dae7ef;\r\n}\r\n.auth-content >>> :-moz-placeholder { /* Mozilla Firefox 4 to 18 */\r\n   color:    #dae7ef;\r\n   opacity:  1;\r\n}\r\n.auth-content >>> ::-moz-placeholder { /* Mozilla Firefox 19+ */\r\n   color:    #dae7ef;\r\n   opacity:  1;\r\n}\r\n.auth-content >>> :-ms-input-placeholder { /* Internet Explorer 10-11 */\r\n   color:    #dae7ef;\r\n}\r\n.auth-content >>> ::-ms-input-placeholder { /* Microsoft Edge */\r\n   color:    #dae7ef;\r\n}\r\n.auth-content >>>.intro {\r\n\tpadding-top: 20px;\r\n\tpadding-bottom: 20px;\r\n\tfont-size: 16px;\r\n\tcolor: #fff;\r\n}\r\n.auth-content >>>.intro p {\r\n\tmargin: 0;\r\n}\r\n.auth-content >>>.form-footer {\r\n\tcolor: white;\r\n\tmargin-top: 40px;\r\n}\r\n.auth-content >>>.form-footer a {\r\n\tcolor: white;\r\n\tfont-weight: 600;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/layouts/auth/auth-layout.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"auth-content h-100\" [@fadeLeave] = \"true\">\r\n  <router-outlet></router-outlet>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/layouts/auth/auth-layout.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthLayoutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__animation__ = __webpack_require__("../../../../../src/app/animation.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthLayoutComponent = (function () {
    function AuthLayoutComponent() {
    }
    AuthLayoutComponent.prototype.ngOnInit = function () {
    };
    return AuthLayoutComponent;
}());
AuthLayoutComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-layout',
        template: __webpack_require__("../../../../../src/app/layouts/auth/auth-layout.component.html"),
        styles: [__webpack_require__("../../../../../src/app/layouts/auth/auth-layout.component.css")],
        animations: [__WEBPACK_IMPORTED_MODULE_1__animation__["a" /* fadeLeave */]],
        host: { '[@fadeLeave]': '' }
    }),
    __metadata("design:paramtypes", [])
], AuthLayoutComponent);

//# sourceMappingURL=auth-layout.component.js.map

/***/ }),

/***/ "../../../../../src/app/layouts/page/page-layout.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "../../../../../src/app/layouts/page/page-layout.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageLayoutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PageLayoutComponent = (function () {
    function PageLayoutComponent() {
    }
    PageLayoutComponent.prototype.ngOnInit = function () {
    };
    return PageLayoutComponent;
}());
PageLayoutComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-layout',
        template: __webpack_require__("../../../../../src/app/layouts/page/page-layout.component.html")
    }),
    __metadata("design:paramtypes", [])
], PageLayoutComponent);

//# sourceMappingURL=page-layout.component.js.map

/***/ }),

/***/ "../../../../../src/app/list/list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.push([module.i, "@import url(//maxcdn.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css);", ""]);

// module
exports.push([module.i, ".c_r_b{\r\n    background-color: #e2e2e2;\r\n    padding: 20px;\r\n    border-radius: 3px;\r\n    margin-left: 10px;\r\n    margin-top: 20px;\r\n    text-align: left;\r\n}\r\n\r\nhr{\r\n    border-color: #d0d4d8;\r\n}\r\n\r\nbutton{\r\n    margin-top: 10px;\r\n    background-color: #000034;\r\n    border: none;\r\n    border-radius: 3px;\r\n    color: #e2e2e2;\r\n    padding: 9px 20px;\r\n    cursor: pointer;\r\n}\r\n\r\nbutton:hover { \r\n    background-color: #0c0c46;\r\n}\r\n\r\ntable{\r\n    width: 100%; \r\n    min-width: 360px;   \r\n}\r\n\r\n\r\nth{\r\n    color: #000034;\r\n    font-weight: 100;\r\n    height: 40px;\r\n    padding-left: 10px;\r\n}\r\n\r\ntd{\r\n    color: #848a9c;\r\n    padding-left: 10px;\r\n}\r\n\r\ntd.download{\r\n    color: #848a9c;\r\n}\r\n\r\ntr{\r\n    /* height: 40px; */\r\n}\r\n\r\n.tdborder{\r\n    border-bottom-right-radius: 3px;\r\n    border-top-right-radius: 3px; \r\n}\r\n\r\ntr td:first-child{\r\n    border-bottom-left-radius: 3px;\r\n    border-top-left-radius: 3px;\r\n}\r\n\r\n::-webkit-input-placeholder { /* Chrome/Opera/Safari */\r\n    color: #717a88;\r\n}\r\n::-moz-placeholder { /* Firefox 19+ */\r\n    color: #717a88;\r\n}\r\n:-ms-input-placeholder { /* IE 10+ */\r\n    color: #717a88;\r\n}\r\n:-moz-placeholder { /* Firefox 18- */\r\n    color: #717a88;\r\n}\r\n\r\n.cursor{\r\n    cursor: pointer;\r\n}\r\n\r\n::-webkit-scrollbar {\r\n    width: 5px;\r\n}\r\n\r\n/* Track */\r\n::-webkit-scrollbar-track {\r\n    background: #000034;\r\n    border: 1px solid transparent;\r\n    background-clip: content-box;   /* THIS IS IMPORTANT */\r\n}\r\n\r\n/* Handle */\r\n::-webkit-scrollbar-thumb {\r\n    background: #a9aeb3;\r\n    border: 1px solid #a9aeb3;\r\n    border-radius: 3px;\r\n}\r\n\r\n.fa-pause, .fa-play{\r\n    border: 1px solid #000034;\r\n    border-radius: 50%;\r\n    font-size: 10px;\r\n    width: 20px;\r\n    height: 20px;\r\n    color: #000034;\r\n    padding-top: 4px;\r\n    padding-left: 1px;\r\n}\r\n\r\n.c_title{\r\n    font-size: 15px;\r\n    color: #848a9c;\r\n    text-align: left;\r\n}\r\n.table_div{\r\n    height: 265px;    \r\n    overflow-y: auto;\r\n    overflow-x: auto;\r\n}\r\n\r\n@media (max-width: 1178px) {\r\n    .c_r_b{\r\n        margin: 0px;\r\n        margin-top: 20px;\r\n    }\r\n}\r\n\r\n\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/list/list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"c_r_b\" style=\"position:relative\">\r\n        <div style=\"position: absolute;\r\n        width: 100%;\r\n        height: 100%;\r\n        display: flex;\r\n        justify-content: center;\r\n        align-items: center;\r\n        margin-top: 20px;\r\n        padding: 20px;\r\n        padding-left: 0px;\r\n        z-index: 9999;\" *ngIf=\"showloading\">\r\n            <img src=\"../assets/images/loader.gif\" height=\"50px\">\r\n        </div>\r\n    <div class=\"c_title\">\r\n        <span>Download Voice Tracks</span>\r\n        <span style=\"float:right;\" class=\"cursor\" (click)=\"refresh()\">Refresh</span>\r\n    </div>\r\n    \r\n    <hr>\r\n    <div class=\"table_div\">\r\n        <table>\r\n            <thead>\r\n                <th>#&nbsp;<i class=\"fa fa-sort\"></i></th>\r\n                <th>Recording Name&nbsp;<i class=\"fa fa-sort\" (click)=\"sort()\"></i></th>\r\n                <th>Download Link&nbsp;</th>\r\n                <th>Play</th>\r\n            </thead>\r\n            <tbody>\r\n                <tr *ngFor=\"let item of downloads; let i = index;\" [ngStyle]=\"getStyle(i)\">\r\n                    <td>{{i+1}}</td>\r\n                    <td>{{item.name}}</td>\r\n                    <td class=\"download cursor\" (click)=\"onDownload(i)\">                                   \r\n                        <img style=\"width:20px;\" src=\"../assets/images/download.png\">&nbsp;&nbsp;&nbsp;Download\r\n                    </td>\r\n                    <td class=\"cursor tdborder\" *ngIf=\"playDownloads[i]!=true\" (click)=\"audioclick(i)\">                       \r\n                        <i class=\"fa fa-play\"></i>&nbsp;&nbsp;&nbsp;Play\r\n                    </td>\r\n                    <td class=\"cursor tdborder\"*ngIf=\"playDownloads[i]==true\" (click)=\"audioclick(i)\">                        \r\n                        <i class=\"fa fa-pause\"></i>&nbsp;&nbsp;&nbsp;Pause\r\n                    </td>\r\n                    <audio id=\"{{'yourAudio'+i}}\">\r\n                        <source src=\"{{item.url}}\" type=\"audio/ogg\" (error)=\"audioError(i)\">\r\n                        <source src=\"{{item.url}}\" type=\"audio/mp3\">                                        \r\n                    </audio>\r\n                </tr>\r\n            </tbody>\r\n        </table>\r\n    </div>                           \r\n</div>"

/***/ }),

/***/ "../../../../../src/app/list/list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_sweetalert2__ = __webpack_require__("../../../../ng2-sweetalert2/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_sweetalert2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ng2_sweetalert2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__provider_UploadService__ = __webpack_require__("../../../../../src/app/provider/UploadService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ListComponent = (function () {
    function ListComponent(swalService, af, http, upSvc, router) {
        this.swalService = swalService;
        this.af = af;
        this.http = http;
        this.upSvc = upSvc;
        this.router = router;
        this.flag = true;
        this.home = __WEBPACK_IMPORTED_MODULE_6__home_home_component__["a" /* HomeComponent */];
        this.downloads = [];
        this.showloading = false;
        this.downloadInx = 0;
        this.sort1 = 1;
        this.playDownloads = [];
    }
    Object.defineProperty(ListComponent.prototype, "value", {
        set: function (value) {
            if (this.flag) {
                this.showloading = true;
                this.flag = false;
                this.downloads = value;
                this.showloading = false;
                this.flag = true;
            }
        },
        enumerable: true,
        configurable: true
    });
    ListComponent.prototype.ngOnInit = function () {
        this.downloads = this.value;
    };
    ListComponent.prototype.audioError = function (i) {
        this.downloads.splice(i, 1);
    };
    ListComponent.prototype.audioclick = function (i) {
        var x = document.getElementById("yourAudio" + (i).toString());
        if (this.playDownloads[i] == true) {
            this.playDownloads[i] = false;
            x.pause();
        }
        else {
            this.playDownloads[i] = true;
            x.play();
        }
    };
    ListComponent.prototype.getStyle = function (inx) {
        var myStyles = {
            'background-color': inx % 2 == 0 ? '#f0f0f0' : '#e2e2e2',
            'height.px': inx % 2 == 0 ? 40 : 50
        };
        return myStyles;
    };
    ListComponent.prototype.sort = function () {
        for (var i = 0; i < this.downloads.length; i++) {
            for (var j = 0; j < i + 1; j++) {
                if (this.downloads[i].name.localeCompare(this.downloads[j].name) == this.sort1) {
                    var temp = this.downloads[i];
                    this.downloads[i] = this.downloads[j];
                    this.downloads[j] = temp;
                }
            }
        }
        this.sort1 *= -1;
    };
    ListComponent.prototype.checkUrl = function (download, i) {
        var http = new XMLHttpRequest();
        http.open('GET', download.url, false);
        http.send();
        if (http.status == 200 && download != undefined) {
            download['inx'] = this.downloadInx;
            this.downloads.push(download);
            this.downloadInx++;
        }
    };
    ListComponent.prototype.onDownload = function (inx) {
        var link = this.downloads[inx].url;
        this.upSvc.download(localStorage.getItem("pastID"), this.downloads[inx].name);
    };
    ListComponent.prototype.refresh = function () {
        var _this = this;
        var temp = this.downloads;
        this.downloads = [];
        setTimeout(function () {
            _this.downloads = temp;
        }, 500);
    };
    return ListComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], ListComponent.prototype, "value", null);
ListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-list',
        template: __webpack_require__("../../../../../src/app/list/list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/list/list.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ng2_sweetalert2__["SweetAlertService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ng2_sweetalert2__["SweetAlertService"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__provider_UploadService__["a" /* UploadService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__provider_UploadService__["a" /* UploadService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === "function" && _e || Object])
], ListComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=list.component.js.map

/***/ }),

/***/ "../../../../../src/app/material.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MaterialModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_cdk_overlay__ = __webpack_require__("../../../cdk/esm5/overlay.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_cdk_a11y__ = __webpack_require__("../../../cdk/esm5/a11y.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_cdk_bidi__ = __webpack_require__("../../../cdk/esm5/bidi.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_cdk_observers__ = __webpack_require__("../../../cdk/esm5/observers.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_cdk_portal__ = __webpack_require__("../../../cdk/esm5/portal.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_material_core__ = __webpack_require__("../../../material/esm5/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_material_button_toggle__ = __webpack_require__("../../../material/esm5/button-toggle.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_material_button__ = __webpack_require__("../../../material/esm5/button.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_material_checkbox__ = __webpack_require__("../../../material/esm5/checkbox.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_material_select__ = __webpack_require__("../../../material/esm5/select.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_material_slide_toggle__ = __webpack_require__("../../../material/esm5/slide-toggle.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_material_slider__ = __webpack_require__("../../../material/esm5/slider.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_material_sidenav__ = __webpack_require__("../../../material/esm5/sidenav.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_material_list__ = __webpack_require__("../../../material/esm5/list.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__angular_material_grid_list__ = __webpack_require__("../../../material/esm5/grid-list.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__angular_material_card__ = __webpack_require__("../../../material/esm5/card.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__angular_material_chips__ = __webpack_require__("../../../material/esm5/chips.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__angular_material_icon__ = __webpack_require__("../../../material/esm5/icon.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__angular_material_progress_spinner__ = __webpack_require__("../../../material/esm5/progress-spinner.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__angular_material_progress_bar__ = __webpack_require__("../../../material/esm5/progress-bar.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__angular_material_input__ = __webpack_require__("../../../material/esm5/input.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__angular_material_snack_bar__ = __webpack_require__("../../../material/esm5/snack-bar.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__angular_material_toolbar__ = __webpack_require__("../../../material/esm5/toolbar.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__angular_material_tooltip__ = __webpack_require__("../../../material/esm5/tooltip.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__angular_material_menu__ = __webpack_require__("../../../material/esm5/menu.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__angular_material_dialog__ = __webpack_require__("../../../material/esm5/dialog.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__angular_material_autocomplete__ = __webpack_require__("../../../material/esm5/autocomplete.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__angular_material_datepicker__ = __webpack_require__("../../../material/esm5/datepicker.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__angular_material_table__ = __webpack_require__("../../../material/esm5/table.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__angular_material_sort__ = __webpack_require__("../../../material/esm5/sort.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__angular_material_paginator__ = __webpack_require__("../../../material/esm5/paginator.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__angular_material_form_field__ = __webpack_require__("../../../material/esm5/form-field.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__angular_material_stepper__ = __webpack_require__("../../../material/esm5/stepper.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



































var MATERIAL_MODULES = [
    __WEBPACK_IMPORTED_MODULE_28__angular_material_autocomplete__["a" /* MatAutocompleteModule */],
    __WEBPACK_IMPORTED_MODULE_8__angular_material_button__["a" /* MatButtonModule */],
    __WEBPACK_IMPORTED_MODULE_7__angular_material_button_toggle__["a" /* MatButtonToggleModule */],
    __WEBPACK_IMPORTED_MODULE_16__angular_material_card__["a" /* MatCardModule */],
    __WEBPACK_IMPORTED_MODULE_17__angular_material_chips__["a" /* MatChipsModule */],
    __WEBPACK_IMPORTED_MODULE_9__angular_material_checkbox__["a" /* MatCheckboxModule */],
    __WEBPACK_IMPORTED_MODULE_29__angular_material_datepicker__["a" /* MatDatepickerModule */],
    __WEBPACK_IMPORTED_MODULE_30__angular_material_table__["a" /* MatTableModule */],
    __WEBPACK_IMPORTED_MODULE_27__angular_material_dialog__["b" /* MatDialogModule */],
    __WEBPACK_IMPORTED_MODULE_33__angular_material_form_field__["c" /* MatFormFieldModule */],
    __WEBPACK_IMPORTED_MODULE_15__angular_material_grid_list__["a" /* MatGridListModule */],
    __WEBPACK_IMPORTED_MODULE_18__angular_material_icon__["a" /* MatIconModule */],
    __WEBPACK_IMPORTED_MODULE_21__angular_material_input__["a" /* MatInputModule */],
    __WEBPACK_IMPORTED_MODULE_14__angular_material_list__["a" /* MatListModule */],
    __WEBPACK_IMPORTED_MODULE_26__angular_material_menu__["a" /* MatMenuModule */],
    __WEBPACK_IMPORTED_MODULE_32__angular_material_paginator__["a" /* MatPaginatorModule */],
    __WEBPACK_IMPORTED_MODULE_20__angular_material_progress_bar__["a" /* MatProgressBarModule */],
    __WEBPACK_IMPORTED_MODULE_19__angular_material_progress_spinner__["a" /* MatProgressSpinnerModule */],
    __WEBPACK_IMPORTED_MODULE_6__angular_material_core__["r" /* MatRippleModule */],
    __WEBPACK_IMPORTED_MODULE_10__angular_material_select__["a" /* MatSelectModule */],
    __WEBPACK_IMPORTED_MODULE_13__angular_material_sidenav__["a" /* MatSidenavModule */],
    __WEBPACK_IMPORTED_MODULE_12__angular_material_slider__["a" /* MatSliderModule */],
    __WEBPACK_IMPORTED_MODULE_11__angular_material_slide_toggle__["a" /* MatSlideToggleModule */],
    __WEBPACK_IMPORTED_MODULE_22__angular_material_snack_bar__["a" /* MatSnackBarModule */],
    __WEBPACK_IMPORTED_MODULE_31__angular_material_sort__["a" /* MatSortModule */],
    __WEBPACK_IMPORTED_MODULE_34__angular_material_stepper__["a" /* MatStepperModule */],
    __WEBPACK_IMPORTED_MODULE_23__angular_material__["a" /* MatTabsModule */],
    __WEBPACK_IMPORTED_MODULE_24__angular_material_toolbar__["a" /* MatToolbarModule */],
    __WEBPACK_IMPORTED_MODULE_25__angular_material_tooltip__["a" /* MatTooltipModule */],
    __WEBPACK_IMPORTED_MODULE_1__angular_cdk_overlay__["d" /* OverlayModule */],
    __WEBPACK_IMPORTED_MODULE_5__angular_cdk_portal__["f" /* PortalModule */],
    __WEBPACK_IMPORTED_MODULE_3__angular_cdk_bidi__["a" /* BidiModule */],
    __WEBPACK_IMPORTED_MODULE_2__angular_cdk_a11y__["a" /* A11yModule */],
    __WEBPACK_IMPORTED_MODULE_6__angular_material_core__["i" /* MatCommonModule */],
    __WEBPACK_IMPORTED_MODULE_4__angular_cdk_observers__["a" /* ObserversModule */]
];
var MaterialModule = (function () {
    function MaterialModule() {
    }
    return MaterialModule;
}());
MaterialModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: MATERIAL_MODULES,
        declarations: [],
        exports: MATERIAL_MODULES,
    })
], MaterialModule);

//# sourceMappingURL=material.module.js.map

/***/ }),

/***/ "../../../../../src/app/past/past.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.push([module.i, "@import url(//maxcdn.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css);", ""]);

// module
exports.push([module.i, ".home{\r\n    background: linear-gradient(#d1d1d1, #fafafa);\r\n    overflow-x: hidden;\r\n    height: 100%;\r\n    overflow-y: hidden;\r\n}\r\n.p_header{\r\n    padding: 10px 35px;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n    -webkit-box-pack: justify;\r\n        -ms-flex-pack: justify;\r\n            justify-content: space-between;\r\n    background: linear-gradient(#fafafa, #d1d1d1);\r\n    border-bottom: 1px #f0f0f0 solid;  \r\n}\r\n\r\n.p_header span{\r\n    color:#000034;\r\n    font-weight: 400;\r\n}\r\n\r\n.p_content{\r\n    height: calc( 100% - 90px );\r\n    overflow-y: auto;\r\n}\r\n\r\n.p_header i{\r\n    color:grey;\r\n}\r\n\r\n.p_content_l a{\r\n    color:#000034;\r\n    padding: 10px 0px;\r\n    width: 100%;\r\n    text-align: left;\r\n    padding-left: 35px;\r\n}\r\n\r\n.p_content_l a.active{\r\n    color: #ffffff;\r\n    background: rgb(29,49,74);\r\n    background: linear-gradient(to right, #000034 0%,rgb(39, 39, 93) 50%,#000034 100%);\r\n}\r\n\r\n.p_content_l img{\r\n    width: 20px;\r\n}\r\n\r\n.p_content_l{\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: column;\r\n            flex-direction: column;\r\n    width: 200px;\r\n    float: left;\r\n    padding-top: 15%;\r\n}\r\n\r\n.p_content_r{\r\n    float: right;\r\n    background-color: #f0f0f0;    \r\n    padding: 35px 65px;\r\n    width: calc( 100% - 200px );\r\n    height: calc( 100% - 80px );\r\n}\r\n\r\n.btnfile:hover{\r\n    background-color: transparent;\r\n    cursor: pointer;\r\n}\r\n#myfile{\r\n    cursor: pointer;\r\n}\r\n\r\n.title{\r\n    color: #000034;\r\n    font-size: 20px;\r\n    text-align: left;\r\n    padding-bottom: 20px;\r\n    font-weight: 800;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n    -webkit-box-pack: justify;\r\n        -ms-flex-pack: justify;\r\n            justify-content: space-between;\r\n}\r\n\r\n.title span{\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    font-weight: 100;\r\n    font-size: 14px;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n}\r\n\r\n.c_r{\r\n    float: right;\r\n    width: 50%;\r\n}\r\n\r\n.c_l{\r\n    float: left;\r\n    width: 100%;\r\n    background-color: #e2e2e2;\r\n    padding: 20px;\r\n}\r\n\r\n.c_title{\r\n    font-size: 15px;\r\n    color: #f4f4f4;\r\n    text-align: left;\r\n}\r\n\r\n.c_r_t, .c_l_t, .c_l_b, .c_r_b{\r\n    background-color: #1e3046;\r\n    padding: 20px;\r\n    border-radius: 3px;\r\n    text-align: right;\r\n}\r\n\r\n.c_l_t{\r\n    margin-right: 10px;\r\n    margin-bottom: 20px;\r\n}\r\n\r\n.c_r_t{\r\n    margin-left: 10px;\r\n    margin-bottom: 20px;\r\n    text-align: left;\r\n    height: 225px;\r\n}\r\n\r\n.c_l_b{\r\n    margin-right: 10px;\r\n    margin-top: 20px;\r\n}\r\n\r\n.c_r_b{\r\n    margin-left: 10px;\r\n    margin-top: 20px;\r\n    text-align: left;\r\n}\r\n\r\nhr{\r\n    border-color: #d0d4d8;\r\n}\r\n\r\n\r\n.c_l_b_lbl{\r\n    text-align: left;\r\n    color: #818892;\r\n}\r\n\r\n.c_r_t .c_title span{\r\n    color: #ecedee;\r\n}\r\n\r\n.c_r_t_lbl{\r\n    margin-top: 20px;\r\n    color: #717a88;\r\n    word-wrap: break-word;\r\n}\r\n\r\ntable{\r\n    width: 100%; \r\n    min-width: 360px;   \r\n}\r\n\r\nth{\r\n    color: #000034;\r\n    font-weight: 100;\r\n    height: 40px;\r\n    padding-left: 10px;\r\n}\r\n\r\ntd{\r\n    color: #848a9c;\r\n    padding-left: 10px;\r\n    white-space: nowrap;\r\n    text-overflow: ellipsis;\r\n    overflow: hidden;\r\n}\r\n\r\ntd.download{\r\n    color: #20c1ae;\r\n}\r\n\r\ntr{\r\n    /* height: 40px; */\r\n}\r\n\r\n.tdborder{\r\n    border-bottom-right-radius: 3px;\r\n    border-top-right-radius: 3px; \r\n}\r\n\r\ntr td:first-child{\r\n    border-bottom-left-radius: 3px;\r\n    border-top-left-radius: 3px;\r\n}\r\n\r\n::-webkit-input-placeholder { /* Chrome/Opera/Safari */\r\n    color: #717a88;\r\n}\r\n::-moz-placeholder { /* Firefox 19+ */\r\n    color: #717a88;\r\n}\r\n:-ms-input-placeholder { /* IE 10+ */\r\n    color: #717a88;\r\n}\r\n:-moz-placeholder { /* Firefox 18- */\r\n    color: #717a88;\r\n}\r\n\r\n.upload-btn-wrapper {\r\n    position: relative;\r\n    overflow: hidden;\r\n    display: inline-block;\r\n    width:100%\r\n}\r\n\r\n.btnfile {\r\n    border: 1px dashed #293a4f;\r\n    color: #d3d4d8;\r\n    background-color: transparent;\r\n    font-size: 18px;\r\n    width: 100%;\r\n    height: 80px;\r\n}\r\n\r\n.upload-btn-wrapper input[type=file] {\r\n    font-size: 100px;\r\n    position: absolute;\r\n    left: 0;\r\n    top: 0;\r\n    opacity: 0;\r\n}\r\n\r\n.cursor{\r\n    cursor: pointer;\r\n}\r\n\r\n::-webkit-scrollbar {\r\n    width: 5px;\r\n}\r\n\r\n/* Track */\r\n::-webkit-scrollbar-track {\r\n    background: #000034;\r\n    border: 1px solid transparent;\r\n    background-clip: content-box;   /* THIS IS IMPORTANT */\r\n}\r\n\r\n/* Handle */\r\n::-webkit-scrollbar-thumb {\r\n    background: #d3d4d8;\r\n    border: 1px solid #d3d4d8;\r\n    border-radius: 3px;\r\n}\r\n\r\n.fa-pause, .fa-play{\r\n    border: 1px solid #717a88;\r\n    border-radius: 50%;\r\n    font-size: 10px;\r\n    width: 20px;\r\n    height: 20px;\r\n    color: white;\r\n    padding-top: 4px;\r\n    padding-left: 1px;\r\n}\r\n\r\n\r\n.table_div{\r\n    height: 600px;  \r\n    overflow-y: auto;\r\n    overflow-x: auto;\r\n    padding-right: 10px;\r\n}\r\n\r\n.menu_mobile{\r\n    display: none;\r\n}\r\n\r\n.menu_mobile_part div:last-child{\r\n    border-bottom-width: 0px;\r\n}\r\n\r\n.menu_browser{\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n}\r\n\r\n@media (max-width: 1178px) { \r\n    .c_l, .c_r{\r\n        width: 100%;\r\n    }\r\n\r\n    .c_r_t, .c_l_b, .c_l_t, .c_r_b{\r\n        margin: 0px;\r\n        margin-top: 20px;\r\n    }\r\n}\r\n\r\n@media (max-width: 735px) { \r\n    .p_content_l{\r\n        display: none;\r\n    }\r\n    .menu_mobile{\r\n        display: block;\r\n    }\r\n\r\n    .menu_browser{\r\n        display: none;\r\n    }\r\n\r\n    .p_content_r{\r\n        width: 100%;\r\n        padding: 35px 25px;\r\n    }\r\n\r\n    /* .p_header i{\r\n        font-size: 20px;\r\n    }\r\n\r\n    .p_header i.active{\r\n        color: #21cdb8;        \r\n    } */\r\n}\r\n\r\n.menu_mobile_part{\r\n    position: absolute;\r\n    top: 67px;\r\n    right: 0px;\r\n    background-color: #f0f0f0;\r\n    border-radius: 5px;\r\n    border: 1px solid #e2e2e2;\r\n    padding: 0px 10px;\r\n    padding-top: 10px;\r\n    z-index: 99;\r\n    color:#848a9c;\r\n}\r\n\r\n.menu_mobile_part div{\r\n    min-height: 50px;\r\n    padding: 10px;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n    border-bottom: 1px solid #e2e2e2;\r\n}\r\n\r\n.menu_mobile_part div .active{\r\n    color: #000034;\r\n}\r\n\r\n.menu_mobile_part i{\r\n    font-size: 20px;\r\n}\r\n\r\n@media (max-width: 403px) { \r\n    \r\n}\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/past/past.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"home text-center\">\r\n    <div style=\"position: absolute;\r\n    width: 100%;\r\n    height: 100%;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    background: rgba(6, 10, 14, 0.8);\r\n    z-index: 9999;\" *ngIf=\"showloading\">\r\n        <img src=\"../assets/images/loader.gif\" height=\"50px\">\r\n    </div>\r\n        \r\n\t<div class=\"p_header\">\r\n        <img src=\"../assets/images/logo7.png\" height=\"70px\">\r\n        <i class=\"fa fa-bars menu_mobile\" (click)=\"onDropdown()\"></i>\r\n        <div class=\"menu_browser cursor\" (click)=\"onDropdownBrowser()\">\r\n            <img style=\"width:40px;\" src=\"../assets/images/user.png\">            \r\n            <span>&nbsp;&nbsp;&nbsp;{{email}}</span>                            \r\n        </div>\r\n    </div>\r\n    <div *ngIf=\"dropB\" class=\"menu_mobile_part\">\r\n        <div (click)=\"home()\" class=\"cursor\" style=\"justify-content:flex-start;\"><i class=\"fa fa-microphone\"></i>&nbsp;&nbsp;&nbsp;Current Session</div>\r\n        <div (click)=\"past()\" class=\"cursor\" style=\"justify-content:flex-start;\"><i class=\"fa fa-history active\"></i>&nbsp;&nbsp;&nbsp;Past Session</div>\r\n        <div (click)=\"logout()\" class=\"cursor\" style=\"justify-content:flex-start;\"><i class=\"fa fa-sign-out\"></i>&nbsp;&nbsp;&nbsp;Logout</div>\r\n    </div>\r\n    <div *ngIf=\"drop\" class=\"menu_mobile_part\">\r\n        <div style=\"display:flex;flex-direction: column;\"><img style=\"width:40px;\" src=\"../assets/images/user.png\"><span>{{email}}</span></div>\r\n        <div (click)=\"home()\"><i class=\"fa fa-microphone active\"></i></div>\r\n        <div (click)=\"past()\"><i class=\"fa fa-history\"></i></div>\r\n        <div (click)=\"logout()\"><i class=\"fa fa-sign-out\"></i></div>\r\n    </div>\r\n    <div class=\"p_content\">\r\n        <div class=\"p_content_l\">\r\n            <a (click)=\"home()\" class=\"cursor\"><i class=\"fa fa-microphone\"></i>&nbsp;&nbsp;Current Session</a>\r\n            <a class=\"active cursor\" (click)=\"past()\"><i class=\"fa fa-history\"></i>&nbsp;&nbsp;Past Session</a>\r\n        </div>       \r\n        <div class=\"p_content_r\">\r\n            <div class=\"title\">Past Session\r\n                <span>offline&nbsp;&nbsp;<ui-switch color=\"#000034\" [(ngModel)]=\"availability\" (change)=\"onToggleChange($event)\"></ui-switch>&nbsp;&nbsp;online</span>\r\n            </div>\r\n            \r\n            <div class=\"c_l\">\r\n                <div class=\"c_title\">&nbsp;</div>\r\n                <hr>\r\n                <div class=\"table_div\">\r\n                    <table>\r\n                        <thead>\r\n                            <th>#</th>\r\n                            <th>Session ID</th>\r\n                            <th>Date / Time</th>\r\n                            <th>Singer</th>\r\n                            <th>Song Name</th>\r\n                            <th>Status</th>\r\n                        </thead>\r\n                        <tbody>\r\n                            <tr *ngFor=\"let item of pastKeyList; let i = index;\" [ngStyle]=\"getStyle(i)\" (click)=\"goHome(i)\">\r\n                                <td>{{i+1}}</td>\r\n                                <td>{{item}}</td>\r\n                                <td>{{pastList[i].startTime | date:'medium'}}</td>\r\n                                <td>{{pastList[i].username}}</td>\r\n                                <td>{{pastList[i].title}}</td>\r\n                                <td>{{pastList[i].status}}</td>\r\n                            </tr>\r\n                        </tbody>\r\n                    </table>\r\n                </div>               \r\n            </div>\r\n        </div>\r\n    </div>    \r\n</div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/past/past.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PastComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_sweetalert2__ = __webpack_require__("../../../../ng2-sweetalert2/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_sweetalert2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng2_sweetalert2__);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PastComponent = (function () {
    function PastComponent(swalService, af, router) {
        this.swalService = swalService;
        this.af = af;
        this.router = router;
        this.pastList = [];
        this.pastKeyList = [];
        this.drop = false;
        this.dropB = false;
        this.email = "";
        this.availability = false;
        this.email = localStorage.getItem("email");
        this.itemsRef = af.list('producer');
    }
    PastComponent.prototype.onDropdown = function () {
        this.drop = !this.drop;
    };
    PastComponent.prototype.onDropdownBrowser = function () {
        this.dropB = !this.dropB;
    };
    PastComponent.prototype.getStyle = function (inx) {
        var myStyles = {
            'background-color': inx % 2 == 0 ? '#f0f0f0' : '#e2e2e2',
            'height.px': inx % 2 == 0 ? 40 : 50
        };
        return myStyles;
    };
    PastComponent.prototype.onToggleChange = function ($e) {
        this.itemsRef.update(localStorage.getItem("id"), { status: { availability: $e } });
    };
    PastComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.af.list('producer').snapshotChanges().map(function (actions) {
            return actions.map(function (action) { return (__assign({ key: action.key }, action.payload.val())); });
        }).subscribe(function (items) {
            items.forEach(function (element) {
                if (element.key == localStorage.getItem("id")) {
                    _this.pastKeyList = Object.keys(element.sessions);
                    Object.keys(element.sessions).map(function (key) {
                        element.sessions[key];
                        _this.pastList.push(element.sessions[key]);
                    });
                    _this.availability = element.status.availability;
                }
            });
            _this.af.list('lyrics').snapshotChanges().map(function (actions1) {
                return actions1.map(function (action1) { return (__assign({ key: action1.key }, action1.payload.val())); });
            }).subscribe(function (items1) {
                _this.pastList.forEach(function (element) {
                    items1.forEach(function (lyrics) {
                        var lyricsKeyList = Object.keys(lyrics);
                        var lyricsList = Object.keys(lyrics).map(function (key) { return lyrics[key]; });
                        if (lyricsKeyList.indexOf(element.lyricsId) != -1) {
                            element['title'] = lyricsList[lyricsKeyList.indexOf(element.lyricsId)].title;
                        }
                    });
                });
            });
            _this.af.list('users').snapshotChanges().map(function (actions2) {
                return actions2.map(function (action2) { return (__assign({ key: action2.key }, action2.payload.val())); });
            }).subscribe(function (items2) {
                items2.forEach(function (element2) {
                    _this.pastList.forEach(function (pelement) {
                        if (element2.key == pelement.userId) {
                            pelement['username'] = element2.name;
                        }
                    });
                });
            });
        });
    };
    PastComponent.prototype.goHome = function (i) {
        localStorage.setItem("pastID", this.pastKeyList[i]);
        this.router.navigate(['/home']);
    };
    PastComponent.prototype.logout = function () {
        var self = this;
        $.confirm({
            title: '',
            content: 'Are you sure you want to log out?',
            type: 'white',
            buttons: {
                ok: {
                    text: "OK",
                    btnClass: 'btn-primary',
                    keys: ['enter'],
                    action: function () {
                        self.itemsRef.update(localStorage.getItem("id"), { status: { availability: false } });
                        localStorage.removeItem("id");
                        localStorage.removeItem("email");
                        localStorage.removeItem("pastID");
                        localStorage.removeItem("sessionList");
                        window.location.href = "/login";
                    }
                },
                cancel: {
                    text: "Cancel",
                    btnClass: 'btn-primary',
                    keys: ['enter'],
                    action: function () {
                        this.dropB = false;
                        this.drop = false;
                    }
                }
            }
        });
    };
    PastComponent.prototype.past = function () {
        this.dropB = false;
        this.drop = false;
        window.location.href = "/past";
    };
    PastComponent.prototype.home = function () {
        this.dropB = false;
        this.drop = false;
        window.location.href = "/home";
    };
    return PastComponent;
}());
PastComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-past',
        template: __webpack_require__("../../../../../src/app/past/past.component.html"),
        styles: [__webpack_require__("../../../../../src/app/past/past.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3_ng2_sweetalert2__["SweetAlertService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ng2_sweetalert2__["SweetAlertService"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _c || Object])
], PastComponent);

var _a, _b, _c;
//# sourceMappingURL=past.component.js.map

/***/ }),

/***/ "../../../../../src/app/provider/UploadService.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UploadService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2__ = __webpack_require__("../../../../angularfire2/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase__ = __webpack_require__("../../../../firebase/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UploadService = (function () {
    function UploadService(af, aff, db) {
        this.af = af;
        this.aff = aff;
        this.db = db;
        this.basePath = '/uploads';
        var storageRef = __WEBPACK_IMPORTED_MODULE_3_firebase__["storage"]().ref();
        this.itemsRef = aff.list('producer');
    }
    UploadService.prototype.pushUpload = function (upload, path, filename, producerId, producerName) {
        var _this = this;
        var storageRef = __WEBPACK_IMPORTED_MODULE_3_firebase__["storage"]().ref();
        var uploadTask = storageRef.child("/" + path + "/" + filename).put(upload.file);
        uploadTask.on(__WEBPACK_IMPORTED_MODULE_3_firebase__["storage"].TaskEvent.STATE_CHANGED, function (snapshot) {
            // upload in progress
            upload.progress = (uploadTask.snapshot.bytesTransferred / uploadTask.snapshot.totalBytes) * 100;
            upload.progress = Math.round(upload.progress * 100) / 100;
        }, function (error) {
            // upload failed
            console.log(error);
        }, function () {
            // upload success
            upload.url = uploadTask.snapshot.downloadURL;
            //upload.name = upload.file.name
            upload.name = filename;
            upload.producer = path.toString();
            upload.producerName = producerName;
            var pathStr = producerId + "/sessions/" + path.toString();
            _this.saveFileData(upload);
            _this.onUpdateClip(pathStr, filename);
            return JSON.stringify(upload);
        });
    };
    UploadService.prototype.download = function (path, name) {
        var storageRef = __WEBPACK_IMPORTED_MODULE_3_firebase__["storage"]().ref();
        storageRef.child("/" + path + "/" + name).getDownloadURL().then(function (url) {
            var xhr = new XMLHttpRequest();
            xhr.responseType = 'blob';
            xhr.onload = function (event) {
                var blob = xhr.response;
                var blobfile = new Blob([blob], { type: blob.type }), anchor = document.createElement('a');
                anchor.download = name;
                anchor.href = window.URL.createObjectURL(blobfile);
                anchor.dataset.downloadurl = [blob.type, anchor.download, anchor.href].join(':');
                anchor.click();
            };
            xhr.open('GET', url);
            xhr.send();
        }).catch(function (error) {
            console.log(error);
        });
    };
    UploadService.prototype.saveFileData = function (upload) {
        this.db.list(this.basePath + "/").push(upload);
    };
    UploadService.prototype.onUpdateClip = function (key, name) {
        this.itemsRef.update(key, { producerClip: name });
    };
    return UploadService;
}());
UploadService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2__["b" /* FirebaseApp */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angularfire2__["b" /* FirebaseApp */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]) === "function" && _c || Object])
], UploadService);

var _a, _b, _c;
//# sourceMappingURL=UploadService.js.map

/***/ }),

/***/ "../../../../../src/app/sharedService.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return sharedService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var sharedService = (function () {
    function sharedService() {
        var _this = this;
        this.dataChange = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"](function (observer) {
            _this.dataChangeObserver = observer;
        });
    }
    sharedService.prototype.setFlag = function (flag) {
        this.isLoading = flag;
        this.dataChangeObserver.next(this.isLoading);
    };
    return sharedService;
}());
sharedService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], sharedService);

//# sourceMappingURL=sharedService.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return firebase_config; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// export const environment = {
//   production: false,
//   firebase: {
//     apiKey: "AIzaSyCTtMvlHKj_TlFDxUBU2xZ9AE6fWBPGsuk",
//     authDomain: "songabby-1bcb1.firebaseapp.com",
//     databaseURL: "https://songabby-1bcb1.firebaseio.com",
//     projectId: "songabby-1bcb1",
//     storageBucket: "songabby-1bcb1.appspot.com",
//     messagingSenderId: "391752231613"
//   }
// };
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false,
    firebase: {
        apiKey: "AIzaSyCTtMvlHKj_TlFDxUBU2xZ9AE6fWBPGsuk",
        authDomain: "songabby-1bcb1.firebaseapp.com",
        databaseURL: "https://songabby-1bcb1.firebaseio.com",
        projectId: "songabby-1bcb1",
        storageBucket: "songabby-1bcb1.appspot.com",
        messagingSenderId: "391752231613"
    }
};
var firebase_config = {
    apiKey: "AIzaSyCTtMvlHKj_TlFDxUBU2xZ9AE6fWBPGsuk",
    authDomain: "songabby-1bcb1.firebaseapp.com",
    databaseURL: "https://songabby-1bcb1.firebaseio.com",
    projectId: "songabby-1bcb1",
    storageBucket: "songabby-1bcb1.appspot.com",
    messagingSenderId: "391752231613"
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_hammerjs__ = __webpack_require__("../../../../hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_hammerjs__);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ }),

/***/ 1:
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map
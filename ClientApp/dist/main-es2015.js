(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<router-outlet></router-outlet>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/auth/auth.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/auth/auth.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h3>{{mensaje}}</h3>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/external/external.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/external/external.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<H3>{{mensajeBienvenida}}</H3>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/home/home.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/home/home.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h3>{{mensajeBienvenida}}</h3>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/notfound/notfound.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/notfound/notfound.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>Not found.</p>\n");

/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: routes, AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _modules_external_external_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/external/external.component */ "./src/app/modules/external/external.component.ts");
/* harmony import */ var _modules_home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/home/home.component */ "./src/app/modules/home/home.component.ts");
/* harmony import */ var _modules_auth_auth_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/auth/auth.component */ "./src/app/modules/auth/auth.component.ts");
/* harmony import */ var _modules_notfound_notfound_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/notfound/notfound.component */ "./src/app/modules/notfound/notfound.component.ts");
/* harmony import */ var _services_security_guard_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/security-guard.service */ "./src/app/services/security-guard.service.ts");
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};





const routes = [
    {
        path: "",
        redirectTo: "auth",
        pathMatch: "full",
    },
    {
        path: "auth",
        component: _modules_auth_auth_component__WEBPACK_IMPORTED_MODULE_2__["AuthComponent"],
    },
    {
        path: "external",
        component: _modules_external_external_component__WEBPACK_IMPORTED_MODULE_0__["ExternalComponent"],
    },
    {
        path: "home",
        component: _modules_home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"],
        canActivate: [_services_security_guard_service__WEBPACK_IMPORTED_MODULE_4__["SecurityGuardService"]],
        runGuardsAndResolvers: "always",
    },
    {
        path: "404",
        component: _modules_notfound_notfound_component__WEBPACK_IMPORTED_MODULE_3__["NotfoundComponent"],
    },
];
class AppRoutingModule {
}


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

let AppComponent = class AppComponent {
    constructor() {
        this.title = 'app';
    }
    ngOnInit() {
    }
};
AppComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-root',
        template: __importDefault(__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default
    }),
    __metadata("design:paramtypes", [])
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _modules_home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/home/home.component */ "./src/app/modules/home/home.component.ts");
/* harmony import */ var _modules_auth_auth_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/auth/auth.component */ "./src/app/modules/auth/auth.component.ts");
/* harmony import */ var _modules_notfound_notfound_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/notfound/notfound.component */ "./src/app/modules/notfound/notfound.component.ts");
/* harmony import */ var angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! angular-oauth2-oidc */ "./node_modules/angular-oauth2-oidc/fesm2015/angular-oauth2-oidc.js");
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./services/storage.service */ "./src/app/services/storage.service.ts");
/* harmony import */ var _services_login_storage_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/login-storage.service */ "./src/app/services/login-storage.service.ts");
/* harmony import */ var _modules_external_external_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./modules/external/external.component */ "./src/app/modules/external/external.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};














let AppModule = class AppModule {
};
AppModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
            _modules_auth_auth_component__WEBPACK_IMPORTED_MODULE_8__["AuthComponent"],
            _modules_home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
            _modules_external_external_component__WEBPACK_IMPORTED_MODULE_13__["ExternalComponent"],
            _modules_notfound_notfound_component__WEBPACK_IMPORTED_MODULE_9__["NotfoundComponent"],
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"].withServerTransition({ appId: "ng-cli-universal" }),
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(_app_routing_module__WEBPACK_IMPORTED_MODULE_6__["routes"]),
            angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_10__["OAuthModule"].forRoot(),
        ],
        providers: [_services_storage_service__WEBPACK_IMPORTED_MODULE_11__["StorageService"], _services_login_storage_service__WEBPACK_IMPORTED_MODULE_12__["LoginStorageService"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]],
    })
], AppModule);



/***/ }),

/***/ "./src/app/modules/auth/auth.component.css":
/*!*************************************************!*\
  !*** ./src/app/modules/auth/auth.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYXV0aC9hdXRoLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/modules/auth/auth.component.ts":
/*!************************************************!*\
  !*** ./src/app/modules/auth/auth.component.ts ***!
  \************************************************/
/*! exports provided: AuthComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthComponent", function() { return AuthComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular-oauth2-oidc */ "./node_modules/angular-oauth2-oidc/fesm2015/angular-oauth2-oidc.js");
/* harmony import */ var angular_oauth2_oidc_jwks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-oauth2-oidc-jwks */ "./node_modules/angular-oauth2-oidc-jwks/fesm2015/angular-oauth2-oidc-jwks.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_login_storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/login-storage.service */ "./src/app/services/login-storage.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};






let AuthComponent = class AuthComponent {
    constructor(oauthService, loginStorageService, router) {
        this.oauthService = oauthService;
        this.loginStorageService = loginStorageService;
        this.router = router;
        this.mensaje = "Autenticando...";
    }
    ngOnInit() {
        this.oauthService.configure({
            redirectUri: window.location.origin,
            clientId: _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].Adfs.ClientId,
            requireHttps: false,
            loginUrl: _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].Adfs.Url + "/oauth2/authorize",
            issuer: _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].Adfs.Url,
            scope: "openid profile email",
            responseType: "id_token token",
            oidc: true,
            logoutUrl: _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].Adfs.Url +
                "/ls/?wa=wsignoutcleanup1.0&wreply=" +
                location.protocol +
                "//" +
                location.hostname +
                (location.port ? ":" + location.port : ""),
            postLogoutRedirectUri: location.protocol +
                "//" +
                location.hostname +
                (location.port ? ":" + location.port : ""),
        });
        this.oauthService.tokenValidationHandler = new angular_oauth2_oidc_jwks__WEBPACK_IMPORTED_MODULE_2__["JwksValidationHandler"]();
        console.log(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"]);
        console.log("inicio del servicio");
        console.log("hasValidAccessToken", this.oauthService.hasValidAccessToken());
        if (!this.oauthService.hasValidAccessToken()) {
            this.oauthService.loadDiscoveryDocumentAndTryLogin().then(() => {
                if (!this.oauthService.hasValidAccessToken()) {
                    console.log("token no valido.");
                    this.oauthService.initImplicitFlow();
                }
                else {
                    console.log("logueo satisfactorio!");
                    var obj = {
                        identity: this.oauthService.getIdentityClaims(),
                        token: this.oauthService.getAccessToken(),
                        idtoken: this.oauthService.getIdToken(),
                    };
                    console.log(obj);
                    this.getUser();
                }
            });
        }
        else {
            this.getUser();
        }
    }
    getUser() {
        this.mensaje = "Obteniendo sus datos, un momento porfavor.";
        console.log("User", { User: this.name() });
        // Llamar algunos APIs para obtener datos para continuar al home o redireccionar al portal antiguo...
        this.loginStorageService.setLoggedInUser({
            ColaboradorId: 0,
            NombreCompleto: "Oscar Lazaro",
            UsuarioRed: "elazaro",
            Correo: "elazaro@belcorp.biz",
            PaisId: 11,
            Pais: "PE",
            Compania: "202018",
            Tipo: 1,
            SedeId: 0,
        });
        this.mensaje = "Redirigiendo...";
        this.router.navigate(["/home"]);
    }
    name() {
        let retorno;
        let claims = this.oauthService.getIdentityClaims();
        console.log(claims);
        if (!claims)
            return null;
        retorno = claims.unique_name;
        retorno = retorno.indexOf("\\") > -1 ? retorno.split("\\")[1] : retorno;
        return retorno;
    }
};
AuthComponent.ctorParameters = () => [
    { type: angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_1__["OAuthService"] },
    { type: _services_login_storage_service__WEBPACK_IMPORTED_MODULE_5__["LoginStorageService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
AuthComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: "app-auth",
        template: __importDefault(__webpack_require__(/*! raw-loader!./auth.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/auth/auth.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./auth.component.css */ "./src/app/modules/auth/auth.component.css")).default]
    }),
    __metadata("design:paramtypes", [angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_1__["OAuthService"],
        _services_login_storage_service__WEBPACK_IMPORTED_MODULE_5__["LoginStorageService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
], AuthComponent);



/***/ }),

/***/ "./src/app/modules/external/external.component.css":
/*!*********************************************************!*\
  !*** ./src/app/modules/external/external.component.css ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvZXh0ZXJuYWwvZXh0ZXJuYWwuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/modules/external/external.component.ts":
/*!********************************************************!*\
  !*** ./src/app/modules/external/external.component.ts ***!
  \********************************************************/
/*! exports provided: ExternalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExternalComponent", function() { return ExternalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_login_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/login-storage.service */ "./src/app/services/login-storage.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



let ExternalComponent = class ExternalComponent {
    constructor(route, router, loginStorageService) {
        this.route = route;
        this.router = router;
        this.loginStorageService = loginStorageService;
        this.mensajeBienvenida = "Validando token...";
    }
    ngOnInit() {
        this.route.queryParams.subscribe((params) => {
            let token = params["token"];
            console.log("token", token);
            //Logica para validar el token...
            if (token) {
                this.mensajeBienvenida = "Redireccionando...";
                this.loginStorageService.setLoggedInUser({
                    ColaboradorId: 0,
                    NombreCompleto: "Externo",
                    UsuarioRed: "extusuario",
                    Correo: "extusuario@belcorp.biz",
                    PaisId: 11,
                    Pais: "PE",
                    Compania: "202018",
                    Tipo: 1,
                    SedeId: 0,
                });
                this.router.navigate(["/home"]);
            }
            else {
                this.mensajeBienvenida = "Token incorrecto";
            }
        });
    }
};
ExternalComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
    { type: src_app_services_login_storage_service__WEBPACK_IMPORTED_MODULE_2__["LoginStorageService"] }
];
ExternalComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: "app-external",
        template: __importDefault(__webpack_require__(/*! raw-loader!./external.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/external/external.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./external.component.css */ "./src/app/modules/external/external.component.css")).default]
    }),
    __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
        src_app_services_login_storage_service__WEBPACK_IMPORTED_MODULE_2__["LoginStorageService"]])
], ExternalComponent);



/***/ }),

/***/ "./src/app/modules/home/home.component.css":
/*!*************************************************!*\
  !*** ./src/app/modules/home/home.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/modules/home/home.component.ts":
/*!************************************************!*\
  !*** ./src/app/modules/home/home.component.ts ***!
  \************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_login_storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/login-storage.service */ "./src/app/services/login-storage.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


let HomeComponent = class HomeComponent {
    constructor(loginStorageService) {
        this.loginStorageService = loginStorageService;
        this.usuarioRed = "";
        this.mensajeBienvenida = "";
    }
    ngOnInit() {
        if (this.loginStorageService.isUserLoggedIn()) {
            this.usuario = this.loginStorageService.getLoggedInUser();
            this.usuarioRed = this.usuario.UsuarioRed;
            this.mensajeBienvenida = "Bienvenido " + this.usuario.UsuarioRed + " !";
        }
        else {
            this.mensajeBienvenida = "Bienvenido anonimo!";
        }
    }
};
HomeComponent.ctorParameters = () => [
    { type: _services_login_storage_service__WEBPACK_IMPORTED_MODULE_1__["LoginStorageService"] }
];
HomeComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: "app-home",
        template: __importDefault(__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/home/home.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./home.component.css */ "./src/app/modules/home/home.component.css")).default]
    }),
    __metadata("design:paramtypes", [_services_login_storage_service__WEBPACK_IMPORTED_MODULE_1__["LoginStorageService"]])
], HomeComponent);



/***/ }),

/***/ "./src/app/modules/notfound/notfound.component.css":
/*!*********************************************************!*\
  !*** ./src/app/modules/notfound/notfound.component.css ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbm90Zm91bmQvbm90Zm91bmQuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/modules/notfound/notfound.component.ts":
/*!********************************************************!*\
  !*** ./src/app/modules/notfound/notfound.component.ts ***!
  \********************************************************/
/*! exports provided: NotfoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotfoundComponent", function() { return NotfoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

let NotfoundComponent = class NotfoundComponent {
    constructor() { }
    ngOnInit() {
    }
};
NotfoundComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-notfound',
        template: __importDefault(__webpack_require__(/*! raw-loader!./notfound.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/notfound/notfound.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./notfound.component.css */ "./src/app/modules/notfound/notfound.component.css")).default]
    }),
    __metadata("design:paramtypes", [])
], NotfoundComponent);



/***/ }),

/***/ "./src/app/services/login-storage.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/login-storage.service.ts ***!
  \***************************************************/
/*! exports provided: LoginStorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginStorageService", function() { return LoginStorageService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular-oauth2-oidc */ "./node_modules/angular-oauth2-oidc/fesm2015/angular-oauth2-oidc.js");
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./storage.service */ "./src/app/services/storage.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



let LoginStorageService = class LoginStorageService {
    constructor(storageService, oauthService) {
        this.storageService = storageService;
        this.oauthService = oauthService;
        this.userKey = "user";
    }
    isUserLoggedIn() {
        return !!this.getCurrentUser();
    }
    setLoggedInUser(userModel) {
        return this.storageService.store(this.userKey, userModel);
    }
    getLoggedInUser() {
        return this.getCurrentUser();
    }
    getUsuario() {
        var objetoUsuario = this.storageService.retrieve(this.userKey);
        return objetoUsuario.ColaboradorId;
    }
    logOutUser() {
        this.storageService.remove(this.userKey);
        this.oauthService.logOut();
    }
    getCurrentUser() {
        return this.storageService.retrieve(this.userKey);
    }
};
LoginStorageService.ctorParameters = () => [
    { type: _storage_service__WEBPACK_IMPORTED_MODULE_2__["StorageService"] },
    { type: angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_1__["OAuthService"] }
];
LoginStorageService = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
    __metadata("design:paramtypes", [_storage_service__WEBPACK_IMPORTED_MODULE_2__["StorageService"],
        angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_1__["OAuthService"]])
], LoginStorageService);



/***/ }),

/***/ "./src/app/services/security-guard.service.ts":
/*!****************************************************!*\
  !*** ./src/app/services/security-guard.service.ts ***!
  \****************************************************/
/*! exports provided: SecurityGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecurityGuardService", function() { return SecurityGuardService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _login_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login-storage.service */ "./src/app/services/login-storage.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



let SecurityGuardService = class SecurityGuardService {
    constructor(router, loginStorageService) {
        this.router = router;
        this.loginStorageService = loginStorageService;
        console.log("validar login");
    }
    canActivate(route, state) {
        if (!this.loginStorageService.isUserLoggedIn()) {
            console.log("redirecciona por que no esta logueado en el servicio");
            this.router.navigate([""]);
            return false;
        }
        console.log("logueado!");
        return true;
    }
};
SecurityGuardService.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
    { type: _login_storage_service__WEBPACK_IMPORTED_MODULE_2__["LoginStorageService"] }
];
SecurityGuardService = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
        providedIn: "root",
    }),
    __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
        _login_storage_service__WEBPACK_IMPORTED_MODULE_2__["LoginStorageService"]])
], SecurityGuardService);



/***/ }),

/***/ "./src/app/services/storage.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/storage.service.ts ***!
  \*********************************************/
/*! exports provided: StorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StorageService", function() { return StorageService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

let StorageService = class StorageService {
    constructor() {
        this.storage = sessionStorage;
    }
    retrieve(key) {
        let item = this.storage.getItem(key);
        if (item && item !== 'undefined') {
            return JSON.parse(this.storage.getItem(key));
        }
        return;
    }
    store(key, value) {
        this.storage.setItem(key, JSON.stringify(value));
    }
    remove(key) {
        this.storage.removeItem(key);
    }
};
StorageService = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
    __metadata("design:paramtypes", [])
], StorageService);



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
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
const environment = {
    production: false,
    Adfs: {
        ClientId: "26df19f5-817e-41be-bc35-a7eaf010f4b9",
        Url: "https://adfsqa.belcorp.biz/adfs"
    }
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! exports provided: getBaseUrl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBaseUrl", function() { return getBaseUrl; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};




function getBaseUrl() {
    return document.getElementsByTagName('base')[0].href;
}
const providers = [
    { provide: 'BASE_URL', useFactory: getBaseUrl, deps: [] }
];
if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])(providers).bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.log(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/ederlazaro/Documents/Demos/spa-sso-oidc/ClientApp/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map
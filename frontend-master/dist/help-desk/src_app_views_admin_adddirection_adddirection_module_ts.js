"use strict";
(self["webpackChunkhelpDesk"] = self["webpackChunkhelpDesk"] || []).push([["src_app_views_admin_adddirection_adddirection_module_ts"],{

/***/ 8004:
/*!*************************************************************************!*\
  !*** ./src/app/views/admin/adddirection/adddirection-routing.module.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdddirectionRoutingModule": () => (/* binding */ AdddirectionRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _adddirection_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./adddirection.component */ 8805);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);




const routes = [
    { path: '', component: _adddirection_component__WEBPACK_IMPORTED_MODULE_0__.AdddirectionComponent }
];
class AdddirectionRoutingModule {
}
AdddirectionRoutingModule.ɵfac = function AdddirectionRoutingModule_Factory(t) { return new (t || AdddirectionRoutingModule)(); };
AdddirectionRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AdddirectionRoutingModule });
AdddirectionRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AdddirectionRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 8805:
/*!********************************************************************!*\
  !*** ./src/app/views/admin/adddirection/adddirection.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdddirectionComponent": () => (/* binding */ AdddirectionComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class AdddirectionComponent {
    constructor() { }
    ngOnInit() {
    }
}
AdddirectionComponent.ɵfac = function AdddirectionComponent_Factory(t) { return new (t || AdddirectionComponent)(); };
AdddirectionComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AdddirectionComponent, selectors: [["app-adddirection"]], decls: 2, vars: 0, template: function AdddirectionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "adddirection works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZGRkaXJlY3Rpb24uY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ 2799:
/*!*****************************************************************!*\
  !*** ./src/app/views/admin/adddirection/adddirection.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdddirectionModule": () => (/* binding */ AdddirectionModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _adddirection_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./adddirection-routing.module */ 8004);
/* harmony import */ var _adddirection_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./adddirection.component */ 8805);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);




class AdddirectionModule {
}
AdddirectionModule.ɵfac = function AdddirectionModule_Factory(t) { return new (t || AdddirectionModule)(); };
AdddirectionModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AdddirectionModule });
AdddirectionModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
            _adddirection_routing_module__WEBPACK_IMPORTED_MODULE_0__.AdddirectionRoutingModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AdddirectionModule, { declarations: [_adddirection_component__WEBPACK_IMPORTED_MODULE_1__.AdddirectionComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _adddirection_routing_module__WEBPACK_IMPORTED_MODULE_0__.AdddirectionRoutingModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_views_admin_adddirection_adddirection_module_ts.js.map
"use strict";
(self["webpackChunkhelpDesk"] = self["webpackChunkhelpDesk"] || []).push([["src_app_views_user_demande-fourniture-att_demande-fourniture-att_module_ts"],{

/***/ 6276:
/*!********************************************************************************************!*\
  !*** ./src/app/views/user/demande-fourniture-att/demande-fourniture-att-routing.module.ts ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReclamationseAttRoutingModule": () => (/* binding */ ReclamationseAttRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _demande_fourniture_att_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./demande-fourniture-att.component */ 7936);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);




const routes = [
    { path: '', component: _demande_fourniture_att_component__WEBPACK_IMPORTED_MODULE_0__.ReclamationseAttComponent }
];
class ReclamationseAttRoutingModule {
}
ReclamationseAttRoutingModule.ɵfac = function ReclamationseAttRoutingModule_Factory(t) { return new (t || ReclamationseAttRoutingModule)(); };
ReclamationseAttRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: ReclamationseAttRoutingModule });
ReclamationseAttRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ReclamationseAttRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 7936:
/*!***************************************************************************************!*\
  !*** ./src/app/views/user/demande-fourniture-att/demande-fourniture-att.component.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReclamationseAttComponent": () => (/* binding */ ReclamationseAttComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/user.service */ 3114);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6362);




function ReclamationseAttComponent_div_51_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 23)(1, "article", 24)(2, "section", 25)(3, "time", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "span")(5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "section", 27)(7, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 28)(16, "time")(17, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "a", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Matricule Demandeur :", item_r1.matricule_demandeur, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Nom Du Direction :", item_r1.direction_demandeur, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Matricule Responsable :", item_r1.matricule_responsable, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Besoin : ", item_r1.besoin, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r1.etat);
} }
class ReclamationseAttComponent {
    constructor(us) {
        this.us = us;
        this.dataArray = [];
    }
    ngOnInit() {
        let matricule = this.us.userInfo().matricule;
        this.us.getDemandeFourUser(matricule).subscribe((rep) => {
            this.dataArray = rep;
        });
    }
}
ReclamationseAttComponent.ɵfac = function ReclamationseAttComponent_Factory(t) { return new (t || ReclamationseAttComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_0__.UserService)); };
ReclamationseAttComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ReclamationseAttComponent, selectors: [["app-demande-fourniture-att"]], decls: 52, vars: 1, consts: [[1, "py-6", "bg-surface-secondary"], [1, "container-fluid"], [1, "container"], [1, "row"], [1, "col-sm-6", "col-12", "text-sm-end"], [1, "mx-n1"], ["routerLink", "/user/addReclamationse", 1, "btn", "d-inline-flex", "btn-sm", "btn-primary", "mx-1"], [1, "pe-2"], [1, "bi", "bi-plus"], [1, "row", "g-6", "mb-6"], [1, "col-xl-3", "col-sm-6", "col-12"], [1, "card", "shadow", "border-0"], [1, "card-body"], [1, "col"], ["type", "button", "routerLink", "/user/ReclamationseAtt", 1, "btn", "btn-outline-primary"], [1, "h3", "font-bold", "mb-0"], [1, "col-auto"], [1, "mt-2", "mb-0", "text-sm"], [1, "badge", "badge-pill", "bg-soft-success", "text-success", "me-2"], [1, "text-nowrap", "text-xs", "text-muted"], ["type", "button", "routerLink", "/user/ReclamationseApprouver", 1, "btn", "btn-outline-primary"], ["type", "button", "routerLink", "/user/ReclamationseRef", 1, "btn", "btn-outline-primary"], ["class", "col-sm", 4, "ngFor", "ngForOf"], [1, "col-sm"], [1, "card", "fl-left"], [1, "date"], ["datetime", "23th feb"], [1, "card-cont"], [1, "even-date"], [2, "background-color", "chocolate"]], template: function ReclamationseAttComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "main", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "a", 6)(7, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Cr\u00E9er Ticket ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 9)(12, "div", 10)(13, "div", 11)(14, "div", 12)(15, "div", 3)(16, "div", 13)(17, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "En Attente ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "span", 18)(23, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 10)(25, "div", 11)(26, "div", 12)(27, "div", 3)(28, "div", 13)(29, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, " Approuver");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](31, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](32, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](34, "span", 18)(35, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "div", 10)(37, "div", 11)(38, "div", 12)(39, "div", 3)(40, "div", 13)(41, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, " Refuser");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](43, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](44, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](46, "span", 18)(47, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "section", 2)(49, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50, "Reclamations");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](51, ReclamationseAttComponent_div_51_Template, 21, 5, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](51);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.dataArray);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLinkWithHref, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf], styles: ["@import url('https://fonts.googleapis.com/css?family=Oswald');\n\n\n\n.fl-left[_ngcontent-%COMP%] {\n    float: left\n}\n\n\n\n.fl-right[_ngcontent-%COMP%] {\n    float: right\n}\n\n\n\nh1[_ngcontent-%COMP%] {\n    text-transform: uppercase;\n    font-weight: 900;\n    border-left: 10px solid chocolate;\n    padding-left: 10px;\n    margin-bottom: 30px\n}\n\n\n\n.row[_ngcontent-%COMP%] {\n    overflow: hidden\n}\n\n\n\n.card[_ngcontent-%COMP%] {\n    display: table-row;\n    width: 50%;\n    background-color: rgb(255, 255, 255);\n    color: rgb(6, 6, 6);\n    margin-bottom: 40px;\n    font-family: 'Oswald', sans-serif;\n    text-transform: uppercase;\n    border-radius: 4px;\n    position: relative;\n    margin-right: 10px;\n\n}\n\n\n\n.card[_ngcontent-%COMP%] + .card[_ngcontent-%COMP%] {\n    margin-left: 2%\n}\n\n\n\n.date[_ngcontent-%COMP%] {\n    display: table-cell;\n    width: 25%;\n    position: relative;\n    text-align: center;\n    border-right: 2px dashed #dadde6\n}\n\n\n\n.date[_ngcontent-%COMP%]:before, .date[_ngcontent-%COMP%]:after {\n    content: \"\";\n    display: block;\n    width: 30px;\n    height: 30px;\n    background-color: #F5F9FC;\n    position: absolute;\n    top: -15px;\n    right: -15px;\n    z-index: 1;\n    border-radius: 50%\n}\n\n\n\n.date[_ngcontent-%COMP%]:after {\n    top: auto;\n    bottom: -15px\n}\n\n\n\n.date[_ngcontent-%COMP%]   time[_ngcontent-%COMP%] {\n    display: block;\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%)\n}\n\n\n\n.date[_ngcontent-%COMP%]   time[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    display: block\n}\n\n\n\n.date[_ngcontent-%COMP%]   time[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:first-child {\n    color: #2b2b2b;\n    font-weight: 600;\n    font-size: 250%\n}\n\n\n\n.date[_ngcontent-%COMP%]   time[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:last-child {\n    text-transform: uppercase;\n    font-weight: 600;\n    margin-top: -10px\n}\n\n\n\n.card-cont[_ngcontent-%COMP%] {\n    display: table-cell;\n    width: 75%;\n    font-size: 85%;\n    padding: 10px 10px 30px 50px\n}\n\n\n\n.card-cont[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    color: #3C3C3C;\n    font-size: 130%\n}\n\n\n\n.row[_ngcontent-%COMP%]:last-child   .card[_ngcontent-%COMP%]:last-of-type   .card-cont[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    text-decoration: line-through\n}\n\n\n\n.card-cont[_ngcontent-%COMP%] > div[_ngcontent-%COMP%] {\n    display: table-row\n}\n\n\n\n.card-cont[_ngcontent-%COMP%]   .even-date[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], .card-cont[_ngcontent-%COMP%]   .even-info[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], .card-cont[_ngcontent-%COMP%]   .even-date[_ngcontent-%COMP%]   time[_ngcontent-%COMP%], .card-cont[_ngcontent-%COMP%]   .even-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    display: table-cell\n}\n\n\n\n.card-cont[_ngcontent-%COMP%]   .even-date[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], .card-cont[_ngcontent-%COMP%]   .even-info[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    padding: 5% 5% 0 0\n}\n\n\n\n.card-cont[_ngcontent-%COMP%]   .even-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    padding: 30px 50px 0 0\n}\n\n\n\n.card-cont[_ngcontent-%COMP%]   .even-date[_ngcontent-%COMP%]   time[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    display: block\n}\n\n\n\n.card-cont[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    display: block;\n    text-decoration: none;\n    width: 80px;\n    height: 30px;\n    background-color: #D8DDE0;\n    color: #fff;\n    text-align: center;\n    line-height: 30px;\n    border-radius: 2px;\n    position: absolute;\n    right: 10px;\n    bottom: 10px\n}\n\n\n\n\n\n\n\n@media screen and (max-width: 860px) {\n    .card[_ngcontent-%COMP%] {\n        display: block;\n        float: none;\n        width: 100%;\n        margin-bottom: 10px\n    }\n    .card[_ngcontent-%COMP%] + .card[_ngcontent-%COMP%] {\n        margin-left: 0\n    }\n    .card-cont[_ngcontent-%COMP%]   .even-date[_ngcontent-%COMP%], .card-cont[_ngcontent-%COMP%]   .even-info[_ngcontent-%COMP%] {\n        font-size: 75%\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlbWFuZGUtZm91cm5pdHVyZS1hdHQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw2REFBNkQ7Ozs7QUFJN0Q7SUFDSTtBQUNKOzs7O0FBRUE7SUFDSTtBQUNKOzs7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsZ0JBQWdCO0lBQ2hCLGlDQUFpQztJQUNqQyxrQkFBa0I7SUFDbEI7QUFDSjs7OztBQUVBO0lBQ0k7QUFDSjs7OztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixvQ0FBb0M7SUFDcEMsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixpQ0FBaUM7SUFDakMseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsa0JBQWtCOztBQUV0Qjs7OztBQUVBO0lBQ0k7QUFDSjs7OztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLFVBQVU7SUFDVixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCO0FBQ0o7Ozs7QUFFQTs7SUFFSSxXQUFXO0lBQ1gsY0FBYztJQUNkLFdBQVc7SUFDWCxZQUFZO0lBQ1oseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsWUFBWTtJQUNaLFVBQVU7SUFDVjtBQUNKOzs7O0FBRUE7SUFDSSxTQUFTO0lBQ1Q7QUFDSjs7OztBQUVBO0lBQ0ksY0FBYztJQUNkLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsU0FBUztJQUdUO0FBQ0o7Ozs7QUFFQTtJQUNJO0FBQ0o7Ozs7QUFFQTtJQUNJLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEI7QUFDSjs7OztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLGdCQUFnQjtJQUNoQjtBQUNKOzs7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsVUFBVTtJQUNWLGNBQWM7SUFDZDtBQUNKOzs7O0FBRUE7SUFDSSxjQUFjO0lBQ2Q7QUFDSjs7OztBQUVBO0lBQ0k7QUFDSjs7OztBQUVBO0lBQ0k7QUFDSjs7OztBQUVBOzs7O0lBSUk7QUFDSjs7OztBQUVBOztJQUVJO0FBQ0o7Ozs7QUFFQTtJQUNJO0FBQ0o7Ozs7QUFFQTtJQUNJO0FBQ0o7Ozs7QUFFQTtJQUNJLGNBQWM7SUFDZCxxQkFBcUI7SUFDckIsV0FBVztJQUNYLFlBQVk7SUFDWix5QkFBeUI7SUFDekIsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1g7QUFDSjs7OztBQUVBOzs7Ozs7R0FNRzs7OztBQUVIO0lBQ0k7UUFDSSxjQUFjO1FBQ2QsV0FBVztRQUNYLFdBQVc7UUFDWDtJQUNKO0lBQ0E7UUFDSTtJQUNKO0lBQ0E7O1FBRUk7SUFDSjtBQUNKIiwiZmlsZSI6ImRlbWFuZGUtZm91cm5pdHVyZS1hdHQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9T3N3YWxkJyk7XG5cblxuXG4uZmwtbGVmdCB7XG4gICAgZmxvYXQ6IGxlZnRcbn1cblxuLmZsLXJpZ2h0IHtcbiAgICBmbG9hdDogcmlnaHRcbn1cblxuaDEge1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgICBib3JkZXItbGVmdDogMTBweCBzb2xpZCBjaG9jb2xhdGU7XG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDMwcHhcbn1cblxuLnJvdyB7XG4gICAgb3ZlcmZsb3c6IGhpZGRlblxufVxuXG4uY2FyZCB7XG4gICAgZGlzcGxheTogdGFibGUtcm93O1xuICAgIHdpZHRoOiA1MCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xuICAgIGNvbG9yOiByZ2IoNiwgNiwgNik7XG4gICAgbWFyZ2luLWJvdHRvbTogNDBweDtcbiAgICBmb250LWZhbWlseTogJ09zd2FsZCcsIHNhbnMtc2VyaWY7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG1hcmdpbi1yaWdodDogMTBweDtcblxufVxuXG4uY2FyZCsuY2FyZCB7XG4gICAgbWFyZ2luLWxlZnQ6IDIlXG59XG5cbi5kYXRlIHtcbiAgICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xuICAgIHdpZHRoOiAyNSU7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBib3JkZXItcmlnaHQ6IDJweCBkYXNoZWQgI2RhZGRlNlxufVxuXG4uZGF0ZTpiZWZvcmUsXG4uZGF0ZTphZnRlciB7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogMzBweDtcbiAgICBoZWlnaHQ6IDMwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0Y1RjlGQztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAtMTVweDtcbiAgICByaWdodDogLTE1cHg7XG4gICAgei1pbmRleDogMTtcbiAgICBib3JkZXItcmFkaXVzOiA1MCVcbn1cblxuLmRhdGU6YWZ0ZXIge1xuICAgIHRvcDogYXV0bztcbiAgICBib3R0b206IC0xNXB4XG59XG5cbi5kYXRlIHRpbWUge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDUwJTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSlcbn1cblxuLmRhdGUgdGltZSBzcGFuIHtcbiAgICBkaXNwbGF5OiBibG9ja1xufVxuXG4uZGF0ZSB0aW1lIHNwYW46Zmlyc3QtY2hpbGQge1xuICAgIGNvbG9yOiAjMmIyYjJiO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgZm9udC1zaXplOiAyNTAlXG59XG5cbi5kYXRlIHRpbWUgc3BhbjpsYXN0LWNoaWxkIHtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgbWFyZ2luLXRvcDogLTEwcHhcbn1cblxuLmNhcmQtY29udCB7XG4gICAgZGlzcGxheTogdGFibGUtY2VsbDtcbiAgICB3aWR0aDogNzUlO1xuICAgIGZvbnQtc2l6ZTogODUlO1xuICAgIHBhZGRpbmc6IDEwcHggMTBweCAzMHB4IDUwcHhcbn1cblxuLmNhcmQtY29udCBoMyB7XG4gICAgY29sb3I6ICMzQzNDM0M7XG4gICAgZm9udC1zaXplOiAxMzAlXG59XG5cbi5yb3c6bGFzdC1jaGlsZCAuY2FyZDpsYXN0LW9mLXR5cGUgLmNhcmQtY29udCBoMyB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2hcbn1cblxuLmNhcmQtY29udD5kaXYge1xuICAgIGRpc3BsYXk6IHRhYmxlLXJvd1xufVxuXG4uY2FyZC1jb250IC5ldmVuLWRhdGUgaSxcbi5jYXJkLWNvbnQgLmV2ZW4taW5mbyBpLFxuLmNhcmQtY29udCAuZXZlbi1kYXRlIHRpbWUsXG4uY2FyZC1jb250IC5ldmVuLWluZm8gcCB7XG4gICAgZGlzcGxheTogdGFibGUtY2VsbFxufVxuXG4uY2FyZC1jb250IC5ldmVuLWRhdGUgaSxcbi5jYXJkLWNvbnQgLmV2ZW4taW5mbyBpIHtcbiAgICBwYWRkaW5nOiA1JSA1JSAwIDBcbn1cblxuLmNhcmQtY29udCAuZXZlbi1pbmZvIHAge1xuICAgIHBhZGRpbmc6IDMwcHggNTBweCAwIDBcbn1cblxuLmNhcmQtY29udCAuZXZlbi1kYXRlIHRpbWUgc3BhbiB7XG4gICAgZGlzcGxheTogYmxvY2tcbn1cblxuLmNhcmQtY29udCBhIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgd2lkdGg6IDgwcHg7XG4gICAgaGVpZ2h0OiAzMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNEOERERTA7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDEwcHg7XG4gICAgYm90dG9tOiAxMHB4XG59XG5cbi8qIC5yb3c6bGFzdC1jaGlsZCAuY2FyZDpmaXJzdC1jaGlsZCAuY2FyZC1jb250IGEge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMzdGRERcbn1cblxuLnJvdzpsYXN0LWNoaWxkIC5jYXJkOmxhc3QtY2hpbGQgLmNhcmQtY29udCBhIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjg1MDRDXG59ICovXG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDg2MHB4KSB7XG4gICAgLmNhcmQge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgZmxvYXQ6IG5vbmU7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4XG4gICAgfVxuICAgIC5jYXJkKy5jYXJkIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDBcbiAgICB9XG4gICAgLmNhcmQtY29udCAuZXZlbi1kYXRlLFxuICAgIC5jYXJkLWNvbnQgLmV2ZW4taW5mbyB7XG4gICAgICAgIGZvbnQtc2l6ZTogNzUlXG4gICAgfVxufVxuIl19 */"] });


/***/ }),

/***/ 5438:
/*!************************************************************************************!*\
  !*** ./src/app/views/user/demande-fourniture-att/demande-fourniture-att.module.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReclamationseAttModule": () => (/* binding */ ReclamationseAttModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _demande_fourniture_att_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./demande-fourniture-att-routing.module */ 6276);
/* harmony import */ var _demande_fourniture_att_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./demande-fourniture-att.component */ 7936);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);




class ReclamationseAttModule {
}
ReclamationseAttModule.ɵfac = function ReclamationseAttModule_Factory(t) { return new (t || ReclamationseAttModule)(); };
ReclamationseAttModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: ReclamationseAttModule });
ReclamationseAttModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
            _demande_fourniture_att_routing_module__WEBPACK_IMPORTED_MODULE_0__.ReclamationseAttRoutingModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](ReclamationseAttModule, { declarations: [_demande_fourniture_att_component__WEBPACK_IMPORTED_MODULE_1__.ReclamationseAttComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _demande_fourniture_att_routing_module__WEBPACK_IMPORTED_MODULE_0__.ReclamationseAttRoutingModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_views_user_demande-fourniture-att_demande-fourniture-att_module_ts.js.map

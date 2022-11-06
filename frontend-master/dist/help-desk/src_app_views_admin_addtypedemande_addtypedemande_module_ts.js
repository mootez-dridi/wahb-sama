"use strict";
(self["webpackChunkhelpDesk"] = self["webpackChunkhelpDesk"] || []).push([["src_app_views_admin_addtypedemande_addtypedemande_module_ts"],{

/***/ 8797:
/*!*****************************************************************************!*\
  !*** ./src/app/views/admin/addtypedemande/addtypedemande-routing.module.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddtypedemandeRoutingModule": () => (/* binding */ AddtypedemandeRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _addtypedemande_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addtypedemande.component */ 9629);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);




const routes = [
    { path: '', component: _addtypedemande_component__WEBPACK_IMPORTED_MODULE_0__.AddtypedemandeComponent }
];
class AddtypedemandeRoutingModule {
}
AddtypedemandeRoutingModule.ɵfac = function AddtypedemandeRoutingModule_Factory(t) { return new (t || AddtypedemandeRoutingModule)(); };
AddtypedemandeRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AddtypedemandeRoutingModule });
AddtypedemandeRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AddtypedemandeRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 9629:
/*!************************************************************************!*\
  !*** ./src/app/views/admin/addtypedemande/addtypedemande.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddtypedemandeComponent": () => (/* binding */ AddtypedemandeComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/data.service */ 3541);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);





function AddtypedemandeComponent_option_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const directionname_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", directionname_r7.directionname);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](directionname_r7.directionname);
} }
function AddtypedemandeComponent_option_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const user_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](user_r8.matricule);
} }
function AddtypedemandeComponent_div_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r5.messageS, " ");
} }
function AddtypedemandeComponent_div_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r6.messageErr, " ");
} }
class AddtypedemandeComponent {
    constructor(ds, route) {
        this.ds = ds;
        this.route = route;
        this.messageErr = "";
        this.dataDirection = [];
        this.dataUsers = [];
        this.dataMat = [];
        this.messageS = "";
        this.ds.getAllDirections().subscribe(data => {
            console.log(data);
            this.dataDirection = data;
        });
        this.ds.getAllUsers().subscribe(data => {
            console.log(data);
            this.dataUsers = data;
        });
    }
    ngOnInit() {
    }
    matDirection(f) {
        this.ds.getAllUsersByDir(f).subscribe(data => {
            console.log(data);
            this.dataMat = data;
            console.log(this.dataMat);
        });
    }
    addTypeDemande(f) {
        let data = f.value;
        this.ds.add_typeDemande(data).subscribe(resp => {
            this.messageS = "Type tickets ajouté";
        }, (err) => {
            this.messageErr = err.error.error;
        });
    }
}
AddtypedemandeComponent.ɵfac = function AddtypedemandeComponent_Factory(t) { return new (t || AddtypedemandeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_data_service__WEBPACK_IMPORTED_MODULE_0__.DataService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router)); };
AddtypedemandeComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AddtypedemandeComponent, selectors: [["app-addtypedemande"]], decls: 38, vars: 4, consts: [[1, "py-6", "bg-surface-secondary", 2, "margin-top", "25px", "margin-right", "45%"], [1, "container-fluid"], ["routerLink", "/admin/alltypesdemandes", "type", "button", 1, "btn", "btn-sm", 2, "margin-bottom", "20px", "width", "80px", "height", "25px", "padding", "0", "color", "rgb(255, 255, 255)", "background-color", "#400D51"], [1, "card", "shadow", "border-0", "mb-7"], [1, "card-header", 2, "background-color", "rgb(8, 8, 58)"], [1, "mb-0", 2, "color", "white"], [1, "container", 2, "margin-top", "10px", "margin-bottom", "10px"], [3, "ngSubmit"], ["f", "ngForm"], [1, "form-row"], [1, "form-group", "col-md-6"], ["for", "firstname"], ["type", "text", "id", "demande", "required", "", "name", "demande", "ngModel", "", "maxlength", "30", 1, "form-control"], ["demande", "ngModel"], ["for", "directionname"], ["id", "directionname", 1, "form-control", 2, "height", "45px", 3, "change"], [3, "value", 4, "ngFor", "ngForOf"], ["for", "responsable"], ["id", "responsable", "name", "responsable", "ngModel", "", 1, "form-control", 2, "height", "45px"], ["responsable", "ngModel"], ["value", "null"], [4, "ngFor", "ngForOf"], ["style", "margin-bottom: 10px;margin-top: 10px;", "style", "width: 50%;", "class", "alert alert-success", 4, "ngIf"], ["class", "alert alert-danger", "style", "width: 50%;", 4, "ngIf"], [1, "mx-n1", 2, "float", "right", "margin-bottom", "20px"], ["type", "submit", 1, "btn", "d-inline-flex", "btn-sm", "btn-primary", "mx-1"], [1, "pe-2"], [3, "value"], [1, "alert", "alert-success", 2, "width", "50%"], [1, "alert", "alert-danger", 2, "width", "50%"]], template: function AddtypedemandeComponent_Template(rf, ctx) { if (rf & 1) {
        const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "main", 0)(1, "div", 1)(2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Retour");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3)(5, "div", 4)(6, "h5", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Ajouter type ticket");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 6)(9, "form", 7, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function AddtypedemandeComponent_Template_form_ngSubmit_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r9); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](10); return ctx.addTypeDemande(_r0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 9)(12, "div", 10)(13, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Type ticket");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "input", 12, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 9)(18, "div", 10)(19, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Nom directions de charg\u00E9 ticket");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "select", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function AddtypedemandeComponent_Template_select_change_21_listener($event) { return ctx.matDirection($event.target.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](22, AddtypedemandeComponent_option_22_Template, 2, 2, "option", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 9)(24, "div", 10)(25, "label", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Matricule charg\u00E9 tickets");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "select", 18, 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](29, "option", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](30, AddtypedemandeComponent_option_30_Template, 2, 1, "option", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](31, AddtypedemandeComponent_div_31_Template, 2, 1, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](32, AddtypedemandeComponent_div_32_Template, 2, 1, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 24)(34, "button", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](35, "span", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "Enregistrer");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.dataDirection);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.dataMat);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.messageS);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.messageErr);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgForm, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.MaxLengthValidator, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.SelectControlValueAccessor, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZGR0eXBlZGVtYW5kZS5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ 3483:
/*!*********************************************************************!*\
  !*** ./src/app/views/admin/addtypedemande/addtypedemande.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddtypedemandeModule": () => (/* binding */ AddtypedemandeModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _addtypedemande_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addtypedemande-routing.module */ 8797);
/* harmony import */ var _addtypedemande_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addtypedemande.component */ 9629);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);





class AddtypedemandeModule {
}
AddtypedemandeModule.ɵfac = function AddtypedemandeModule_Factory(t) { return new (t || AddtypedemandeModule)(); };
AddtypedemandeModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AddtypedemandeModule });
AddtypedemandeModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
            _addtypedemande_routing_module__WEBPACK_IMPORTED_MODULE_0__.AddtypedemandeRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AddtypedemandeModule, { declarations: [_addtypedemande_component__WEBPACK_IMPORTED_MODULE_1__.AddtypedemandeComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _addtypedemande_routing_module__WEBPACK_IMPORTED_MODULE_0__.AddtypedemandeRoutingModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_views_admin_addtypedemande_addtypedemande_module_ts.js.map
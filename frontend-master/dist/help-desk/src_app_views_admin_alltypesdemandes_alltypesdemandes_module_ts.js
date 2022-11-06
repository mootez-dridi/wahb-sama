"use strict";
(self["webpackChunkhelpDesk"] = self["webpackChunkhelpDesk"] || []).push([["src_app_views_admin_alltypesdemandes_alltypesdemandes_module_ts"],{

/***/ 8426:
/*!*********************************************************************************!*\
  !*** ./src/app/views/admin/alltypesdemandes/alltypesdemandes-routing.module.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AlltypesdemandesRoutingModule": () => (/* binding */ AlltypesdemandesRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _alltypesdemandes_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./alltypesdemandes.component */ 469);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);




const routes = [
    { path: '', component: _alltypesdemandes_component__WEBPACK_IMPORTED_MODULE_0__.AlltypesdemandesComponent }
];
class AlltypesdemandesRoutingModule {
}
AlltypesdemandesRoutingModule.ɵfac = function AlltypesdemandesRoutingModule_Factory(t) { return new (t || AlltypesdemandesRoutingModule)(); };
AlltypesdemandesRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AlltypesdemandesRoutingModule });
AlltypesdemandesRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AlltypesdemandesRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 469:
/*!****************************************************************************!*\
  !*** ./src/app/views/admin/alltypesdemandes/alltypesdemandes.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AlltypesdemandesComponent": () => (/* binding */ AlltypesdemandesComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/data.service */ 3541);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng2-search-filter */ 9991);





function AlltypesdemandesComponent_tr_26_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "td", 36)(6, "a", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "i", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, " \u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "button", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AlltypesdemandesComponent_tr_26_Template_button_click_9_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5); const i_r3 = restoredCtx.index; const item_r2 = restoredCtx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r4.getInfo(i_r3, item_r2._id, item_r2.demande, item_r2.responsable); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "i", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const item_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r2.demande);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r2.responsable);
} }
function AlltypesdemandesComponent_div_54_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r1.deleteErr, " ");
} }
class AlltypesdemandesComponent {
    constructor(ds, route) {
        this.ds = ds;
        this.route = route;
        this.myres = '';
        this.myI = "";
        this.myDem = "";
        this.myId = "";
        this.dataArray = [];
        this.deleteErr = "";
        this.deleteSucc = "";
    }
    ngOnInit() {
        this.ds.getAllTypesDemandes().subscribe(data => {
            console.log(data);
            this.dataArray = data;
        });
    }
    getInfo(i, id, demande, responsable) {
        this.deleteErr = "";
        this.myres = responsable;
        this.myI = i;
        this.myDem = demande;
        this.myId = id;
        console.log(this.myres, this.myI, this.myDem, this.myId);
    }
    delete() {
        this.ds.deleteDemande(this.myId, this.myDem, this.myres).subscribe((response) => {
            console.log(response);
            this.dataArray.splice(this.myI, 1);
            this.deleteSucc = "Deleted yes";
        }, (err) => {
            this.deleteErr = err.error;
            console.log(this.deleteErr);
        });
    }
}
AlltypesdemandesComponent.ɵfac = function AlltypesdemandesComponent_Factory(t) { return new (t || AlltypesdemandesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_data_service__WEBPACK_IMPORTED_MODULE_0__.DataService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router)); };
AlltypesdemandesComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: AlltypesdemandesComponent, selectors: [["app-alltypesdemandes"]], decls: 60, vars: 6, consts: [[1, "card-body", 2, "float", "right", "clear", "both"], [1, "container-fluid"], [1, "col-sm-6", "col-12", "text-sm-end"], [1, "mx-n1"], ["routerLink", "/admin/addtypedemande", 1, "btn", "d-inline-flex", "btn-sm", "btn-primary", "mx-1"], [1, "pe-2"], [1, "bi", "bi-plus"], [1, "py-6", "bg-surface-secondary", 2, "margin-top", "55px"], [1, "card", "shadow", "border-0", "mb-7"], [1, "card-header", 2, "background-color", "rgb(8, 8, 58)"], [1, "mb-0", 2, "color", "white"], [1, "table-responsive"], [1, "table", "table-hover", "table-nowrap"], [1, "thead-light"], ["scope", "col"], [4, "ngFor", "ngForOf"], ["id", "exampleModal", "tabindex", "-1", "aria-labelledby", "exampleModalLabel", "aria-hidden", "true", 1, "modal", "fade"], [1, "modal-dialog"], [1, "modal-content"], [1, "modal-header"], ["id", "exampleModalLabel", 1, "modal-title"], ["type", "button", "data-dismiss", "modal", "aria-label", "Close", 1, "close"], ["aria-hidden", "true"], [1, "modal-body"], [1, "modal-footer"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-secondary"], ["id", "exampleModal2", "tabindex", "-1", "aria-labelledby", "exampleModalLabel2", "aria-hidden", "true", 1, "modal", "fade"], [1, "modal-dialog", "modal-confirm"], [1, "modal-header", "flex-column"], [1, "icon-box"], [1, "material-icons"], [1, "modal-title", "w-100"], ["type", "button", "data-dismiss", "modal", "aria-hidden", "true", 1, "close"], ["style", "margin-bottom: 10px;margin-top: 10px;", "class", "alert alert-danger", 4, "ngIf"], [1, "modal-footer", "justify-content-center"], [1, "btn", "btn-danger", 2, "color", "white", 3, "click"], [1, "text-end"], ["data-toggle", "modal", "data-target", "#exampleModal", 1, "btn", "btn-sm", "btn-neutral"], [1, "bi", "bi-pencil"], ["type", "button", "data-toggle", "modal", "data-target", "#exampleModal2", 1, "btn", "btn-sm", "btn-square", "btn-neutral", "text-danger-hover", 2, "background-color", "red", 3, "click"], [1, "bi", "bi-trash", 2, "color", "white"], [1, "alert", "alert-danger", 2, "margin-bottom", "10px", "margin-top", "10px"]], template: function AlltypesdemandesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "a", 4)(5, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Ajouter");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "main", 7)(10, "div", 1)(11, "div", 8)(12, "div", 9)(13, "h5", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, " Types Reclamations");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 11)(16, "table", 12)(17, "thead", 13)(18, "tr")(19, "th", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "Types Reclamation");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "th", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "Matricule charg\u00E9 Reclamation");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](23, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](25, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](26, AlltypesdemandesComponent_tr_26_Template, 11, 2, "tr", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](27, "filter");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "div", 16)(29, "div", 17)(30, "div", 18)(31, "div", 19)(32, "h5", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](33, "Test");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "button", 21)(35, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](36, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](37, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "div", 24)(39, "button", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](40, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "div", 26)(42, "div", 27)(43, "div", 18)(44, "div", 28)(45, "div", 29)(46, "i", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](47, "\uE5CD");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](48, "h4", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](49, "Es-tu s\u00FBr? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](50, "button", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](51, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](52, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](53);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](54, AlltypesdemandesComponent_div_54_Template, 2, 1, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](55, "div", 34)(56, "button", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](57, "Annuler");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](58, "a", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AlltypesdemandesComponent_Template_a_click_58_listener() { return ctx.delete(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](59, "Supprimer");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](27, 3, ctx.dataArray, ctx.term));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.deleteSucc, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.deleteErr);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLinkWithHref, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf], pipes: [ng2_search_filter__WEBPACK_IMPORTED_MODULE_1__.Ng2SearchPipe], styles: [".modal-confirm[_ngcontent-%COMP%] {\n\tcolor: #636363;\n\twidth: 400px;\n}\n.modal-confirm[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%] {\n\tpadding: 20px;\n\tborder-radius: 5px;\n\tborder: none;\n\ttext-align: center;\n\tfont-size: 14px;\n}\n.modal-confirm[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%] {\n\tborder-bottom: none;\n\tposition: relative;\n}\n.modal-confirm[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n\ttext-align: center;\n\tfont-size: 26px;\n\tmargin: 30px 0 -10px;\n}\n.modal-confirm[_ngcontent-%COMP%]   .close[_ngcontent-%COMP%] {\n\tposition: absolute;\n\ttop: -5px;\n\tright: -2px;\n}\n.modal-confirm[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%] {\n\tcolor: #999;\n}\n.modal-confirm[_ngcontent-%COMP%]   .modal-footer[_ngcontent-%COMP%] {\n\tborder: none;\n\ttext-align: center;\n\tborder-radius: 5px;\n\tfont-size: 13px;\n\tpadding: 10px 15px 25px;\n}\n.modal-confirm[_ngcontent-%COMP%]   .modal-footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n\tcolor: #999;\n}\n.modal-confirm[_ngcontent-%COMP%]   .icon-box[_ngcontent-%COMP%] {\n\twidth: 80px;\n\theight: 80px;\n\tmargin: 0 auto;\n\tborder-radius: 50%;\n\tz-index: 9;\n\ttext-align: center;\n\tborder: 3px solid #f15e5e;\n}\n.modal-confirm[_ngcontent-%COMP%]   .icon-box[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n\tcolor: #f15e5e;\n\tfont-size: 46px;\n\tdisplay: inline-block;\n\tmargin-top: 13px;\n}\n.modal-confirm[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%], .modal-confirm[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:active {\n\tcolor: #fff;\n\tborder-radius: 4px;\n\tbackground: #60c7c1;\n\ttext-decoration: none;\n\ttransition: all 0.4s;\n\tline-height: normal;\n\tmin-width: 120px;\n\tborder: none;\n\tmin-height: 40px;\n\tborder-radius: 3px;\n\tmargin: 0 5px;\n}\n.modal-confirm[_ngcontent-%COMP%]   .btn-secondary[_ngcontent-%COMP%] {\n\tbackground: #c1c1c1;\n}\n.modal-confirm[_ngcontent-%COMP%]   .btn-secondary[_ngcontent-%COMP%]:hover, .modal-confirm[_ngcontent-%COMP%]   .btn-secondary[_ngcontent-%COMP%]:focus {\n\tbackground: #a8a8a8;\n}\n.modal-confirm[_ngcontent-%COMP%]   .btn-danger[_ngcontent-%COMP%] {\n\tbackground: #f15e5e;\n}\n.modal-confirm[_ngcontent-%COMP%]   .btn-danger[_ngcontent-%COMP%]:hover, .modal-confirm[_ngcontent-%COMP%]   .btn-danger[_ngcontent-%COMP%]:focus {\n\tbackground: #ee3535;\n}\n.trigger-btn[_ngcontent-%COMP%] {\n\tdisplay: inline-block;\n\tmargin: 100px auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFsbHR5cGVzZGVtYW5kZXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtDQUNDLGNBQWM7Q0FDZCxZQUFZO0FBQ2I7QUFDQTtDQUNDLGFBQWE7Q0FDYixrQkFBa0I7Q0FDbEIsWUFBWTtDQUNaLGtCQUFrQjtDQUNsQixlQUFlO0FBQ2hCO0FBQ0E7Q0FDQyxtQkFBbUI7Q0FDbkIsa0JBQWtCO0FBQ25CO0FBQ0E7Q0FDQyxrQkFBa0I7Q0FDbEIsZUFBZTtDQUNmLG9CQUFvQjtBQUNyQjtBQUNBO0NBQ0Msa0JBQWtCO0NBQ2xCLFNBQVM7Q0FDVCxXQUFXO0FBQ1o7QUFDQTtDQUNDLFdBQVc7QUFDWjtBQUNBO0NBQ0MsWUFBWTtDQUNaLGtCQUFrQjtDQUNsQixrQkFBa0I7Q0FDbEIsZUFBZTtDQUNmLHVCQUF1QjtBQUN4QjtBQUNBO0NBQ0MsV0FBVztBQUNaO0FBQ0E7Q0FDQyxXQUFXO0NBQ1gsWUFBWTtDQUNaLGNBQWM7Q0FDZCxrQkFBa0I7Q0FDbEIsVUFBVTtDQUNWLGtCQUFrQjtDQUNsQix5QkFBeUI7QUFDMUI7QUFDQTtDQUNDLGNBQWM7Q0FDZCxlQUFlO0NBQ2YscUJBQXFCO0NBQ3JCLGdCQUFnQjtBQUNqQjtBQUNBO0NBQ0MsV0FBVztDQUNYLGtCQUFrQjtDQUNsQixtQkFBbUI7Q0FDbkIscUJBQXFCO0NBQ3JCLG9CQUFvQjtDQUNwQixtQkFBbUI7Q0FDbkIsZ0JBQWdCO0NBQ2hCLFlBQVk7Q0FDWixnQkFBZ0I7Q0FDaEIsa0JBQWtCO0NBQ2xCLGFBQWE7QUFDZDtBQUNBO0NBQ0MsbUJBQW1CO0FBQ3BCO0FBQ0E7Q0FDQyxtQkFBbUI7QUFDcEI7QUFDQTtDQUNDLG1CQUFtQjtBQUNwQjtBQUNBO0NBQ0MsbUJBQW1CO0FBQ3BCO0FBQ0E7Q0FDQyxxQkFBcUI7Q0FDckIsa0JBQWtCO0FBQ25CIiwiZmlsZSI6ImFsbHR5cGVzZGVtYW5kZXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tb2RhbC1jb25maXJtIHtcblx0Y29sb3I6ICM2MzYzNjM7XG5cdHdpZHRoOiA0MDBweDtcbn1cbi5tb2RhbC1jb25maXJtIC5tb2RhbC1jb250ZW50IHtcblx0cGFkZGluZzogMjBweDtcblx0Ym9yZGVyLXJhZGl1czogNXB4O1xuXHRib3JkZXI6IG5vbmU7XG5cdHRleHQtYWxpZ246IGNlbnRlcjtcblx0Zm9udC1zaXplOiAxNHB4O1xufVxuLm1vZGFsLWNvbmZpcm0gLm1vZGFsLWhlYWRlciB7XG5cdGJvcmRlci1ib3R0b206IG5vbmU7XG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5tb2RhbC1jb25maXJtIGg0IHtcblx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRmb250LXNpemU6IDI2cHg7XG5cdG1hcmdpbjogMzBweCAwIC0xMHB4O1xufVxuLm1vZGFsLWNvbmZpcm0gLmNsb3NlIHtcblx0cG9zaXRpb246IGFic29sdXRlO1xuXHR0b3A6IC01cHg7XG5cdHJpZ2h0OiAtMnB4O1xufVxuLm1vZGFsLWNvbmZpcm0gLm1vZGFsLWJvZHkge1xuXHRjb2xvcjogIzk5OTtcbn1cbi5tb2RhbC1jb25maXJtIC5tb2RhbC1mb290ZXIge1xuXHRib3JkZXI6IG5vbmU7XG5cdHRleHQtYWxpZ246IGNlbnRlcjtcblx0Ym9yZGVyLXJhZGl1czogNXB4O1xuXHRmb250LXNpemU6IDEzcHg7XG5cdHBhZGRpbmc6IDEwcHggMTVweCAyNXB4O1xufVxuLm1vZGFsLWNvbmZpcm0gLm1vZGFsLWZvb3RlciBhIHtcblx0Y29sb3I6ICM5OTk7XG59XG4ubW9kYWwtY29uZmlybSAuaWNvbi1ib3gge1xuXHR3aWR0aDogODBweDtcblx0aGVpZ2h0OiA4MHB4O1xuXHRtYXJnaW46IDAgYXV0bztcblx0Ym9yZGVyLXJhZGl1czogNTAlO1xuXHR6LWluZGV4OiA5O1xuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdGJvcmRlcjogM3B4IHNvbGlkICNmMTVlNWU7XG59XG4ubW9kYWwtY29uZmlybSAuaWNvbi1ib3ggaSB7XG5cdGNvbG9yOiAjZjE1ZTVlO1xuXHRmb250LXNpemU6IDQ2cHg7XG5cdGRpc3BsYXk6IGlubGluZS1ibG9jaztcblx0bWFyZ2luLXRvcDogMTNweDtcbn1cbi5tb2RhbC1jb25maXJtIC5idG4sIC5tb2RhbC1jb25maXJtIC5idG46YWN0aXZlIHtcblx0Y29sb3I6ICNmZmY7XG5cdGJvcmRlci1yYWRpdXM6IDRweDtcblx0YmFja2dyb3VuZDogIzYwYzdjMTtcblx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xuXHR0cmFuc2l0aW9uOiBhbGwgMC40cztcblx0bGluZS1oZWlnaHQ6IG5vcm1hbDtcblx0bWluLXdpZHRoOiAxMjBweDtcblx0Ym9yZGVyOiBub25lO1xuXHRtaW4taGVpZ2h0OiA0MHB4O1xuXHRib3JkZXItcmFkaXVzOiAzcHg7XG5cdG1hcmdpbjogMCA1cHg7XG59XG4ubW9kYWwtY29uZmlybSAuYnRuLXNlY29uZGFyeSB7XG5cdGJhY2tncm91bmQ6ICNjMWMxYzE7XG59XG4ubW9kYWwtY29uZmlybSAuYnRuLXNlY29uZGFyeTpob3ZlciwgLm1vZGFsLWNvbmZpcm0gLmJ0bi1zZWNvbmRhcnk6Zm9jdXMge1xuXHRiYWNrZ3JvdW5kOiAjYThhOGE4O1xufVxuLm1vZGFsLWNvbmZpcm0gLmJ0bi1kYW5nZXIge1xuXHRiYWNrZ3JvdW5kOiAjZjE1ZTVlO1xufVxuLm1vZGFsLWNvbmZpcm0gLmJ0bi1kYW5nZXI6aG92ZXIsIC5tb2RhbC1jb25maXJtIC5idG4tZGFuZ2VyOmZvY3VzIHtcblx0YmFja2dyb3VuZDogI2VlMzUzNTtcbn1cbi50cmlnZ2VyLWJ0biB7XG5cdGRpc3BsYXk6IGlubGluZS1ibG9jaztcblx0bWFyZ2luOiAxMDBweCBhdXRvO1xufVxuIl19 */"] });


/***/ }),

/***/ 3549:
/*!*************************************************************************!*\
  !*** ./src/app/views/admin/alltypesdemandes/alltypesdemandes.module.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AlltypesdemandesModule": () => (/* binding */ AlltypesdemandesModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _alltypesdemandes_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./alltypesdemandes-routing.module */ 8426);
/* harmony import */ var _alltypesdemandes_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./alltypesdemandes.component */ 469);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-search-filter */ 9991);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);






class AlltypesdemandesModule {
}
AlltypesdemandesModule.ɵfac = function AlltypesdemandesModule_Factory(t) { return new (t || AlltypesdemandesModule)(); };
AlltypesdemandesModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: AlltypesdemandesModule });
AlltypesdemandesModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _alltypesdemandes_routing_module__WEBPACK_IMPORTED_MODULE_0__.AlltypesdemandesRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            ng2_search_filter__WEBPACK_IMPORTED_MODULE_2__.Ng2SearchPipeModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AlltypesdemandesModule, { declarations: [_alltypesdemandes_component__WEBPACK_IMPORTED_MODULE_1__.AlltypesdemandesComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
        _alltypesdemandes_routing_module__WEBPACK_IMPORTED_MODULE_0__.AlltypesdemandesRoutingModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
        ng2_search_filter__WEBPACK_IMPORTED_MODULE_2__.Ng2SearchPipeModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_views_admin_alltypesdemandes_alltypesdemandes_module_ts.js.map
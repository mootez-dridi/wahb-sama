"use strict";
(self["webpackChunkhelpDesk"] = self["webpackChunkhelpDesk"] || []).push([["src_app_views_admin_userdetails_userdetails_module_ts"],{

/***/ 1808:
/*!***********************************************************************!*\
  !*** ./src/app/views/admin/userdetails/userdetails-routing.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserdetailsRoutingModule": () => (/* binding */ UserdetailsRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _userdetails_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./userdetails.component */ 6883);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);




const routes = [
    { path: '', component: _userdetails_component__WEBPACK_IMPORTED_MODULE_0__.UserdetailsComponent }
];
class UserdetailsRoutingModule {
}
UserdetailsRoutingModule.ɵfac = function UserdetailsRoutingModule_Factory(t) { return new (t || UserdetailsRoutingModule)(); };
UserdetailsRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: UserdetailsRoutingModule });
UserdetailsRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](UserdetailsRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 6883:
/*!******************************************************************!*\
  !*** ./src/app/views/admin/userdetails/userdetails.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserdetailsComponent": () => (/* binding */ UserdetailsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/data.service */ 3541);



class UserdetailsComponent {
    constructor(route, ds) {
        this.route = route;
        this.ds = ds;
        this.messageErr = '';
        this.noHer = '';
    }
    ngOnInit() {
        this.route.params.subscribe(params => this.id = params['id']);
        this.ds.getOneUser(this.id).subscribe(response => {
            console.log(response);
            this.dataObject = response;
        }, (err) => this.messageErr = "We Dont Found This User in Our DataBase");
    }
}
UserdetailsComponent.ɵfac = function UserdetailsComponent_Factory(t) { return new (t || UserdetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_data_service__WEBPACK_IMPORTED_MODULE_0__.DataService)); };
UserdetailsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: UserdetailsComponent, selectors: [["app-userdetails"]], decls: 52, vars: 7, consts: [["id", "page-content", 1, "page-content", "page-container"], [1, "padding"], [1, "row", "container", "d-flex", "justify-content-center"], [1, "col-xl-6", "col-md-12"], [1, "card", "user-card-full"], [1, "row", "m-l-0", "m-r-0"], [1, "col-sm-4", "bg-c-lite-green", "user-profile"], [1, "card-block", "text-center", "text-white"], [1, "m-b-25"], ["src", "https://img.icons8.com/bubbles/100/000000/user.png", "alt", "User-Profile-Image", 1, "img-radius"], [1, "f-w-600", 2, "color", "white"], [1, "mdi", "mdi-square-edit-outline", "feather", "icon-edit", "m-t-10", "f-16"], [1, "col-sm-8"], [1, "card-block"], [1, "m-b-20", "p-b-5", "b-b-default", "f-w-600"], [1, "row"], [1, "col-sm-6"], [1, "m-b-10", "f-w-600"], [1, "text-muted", "f-w-400"], [1, "m-b-20", "m-t-40", "p-b-5", "b-b-default", "f-w-600"], [1, "social-link", "list-unstyled", "m-t-40", "m-b-10"], ["href", "#!", "data-toggle", "tooltip", "data-placement", "bottom", "title", "", "data-original-title", "facebook", "data-abc", "true"], ["aria-hidden", "true", 1, "mdi", "mdi-facebook", "feather", "icon-facebook", "facebook"], ["href", "#!", "data-toggle", "tooltip", "data-placement", "bottom", "title", "", "data-original-title", "twitter", "data-abc", "true"], ["aria-hidden", "true", 1, "mdi", "mdi-twitter", "feather", "icon-twitter", "twitter"], ["href", "#!", "data-toggle", "tooltip", "data-placement", "bottom", "title", "", "data-original-title", "instagram", "data-abc", "true"], ["aria-hidden", "true", 1, "mdi", "mdi-instagram", "feather", "icon-instagram", "instagram"]], template: function UserdetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "div", 7)(8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "h6", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 12)(16, "div", 13)(17, "h6", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Information");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 15)(20, "div", 16)(21, "p", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "h6", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 16)(26, "p", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "Matricule");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "h6", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](30, "h6", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 15)(32, "div", 16)(33, "p", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "Direction");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "h6", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "div", 16)(38, "p", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, "Responsable");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "h6", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "ul", 20)(43, "li")(44, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](45, "i", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "li")(47, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](48, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "li")(50, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](51, "i", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", ctx.dataObject.firstname, " ", ctx.dataObject.lastname, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.dataObject.role);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.dataObject.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.dataObject.matricule);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.dataObject.directionname);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.dataObject.hierarchy);
    } }, styles: [".padding[_ngcontent-%COMP%] {\n  padding: 3rem !important;\n  width:600px\n}\n\n.user-card-full[_ngcontent-%COMP%] {\n  overflow: hidden;\n  width:900px\n}\n\n.card[_ngcontent-%COMP%] {\n  border-radius: 5px;\n  box-shadow: 0 1px 20px 0 rgba(69,90,100,0.08);\n  border: none;\n  margin-bottom: 30px;\n\n}\n\n.m-r-0[_ngcontent-%COMP%] {\n  margin-right: 0px;\n}\n\n.m-l-0[_ngcontent-%COMP%] {\n  margin-left: 0px;\n}\n\n.user-card-full[_ngcontent-%COMP%]   .user-profile[_ngcontent-%COMP%] {\n  border-radius: 5px 0 0 5px;\n}\n\n.bg-c-lite-green[_ngcontent-%COMP%] {\n\n  background: #0B0B27\n}\n\n.user-profile[_ngcontent-%COMP%] {\n  padding: 20px 0;\n}\n\n.card-block[_ngcontent-%COMP%] {\n  padding: 1.25rem;\n}\n\n.m-b-25[_ngcontent-%COMP%] {\n  margin-bottom: 25px;\n}\n\n.img-radius[_ngcontent-%COMP%] {\n  border-radius: 5px;\n}\n\nh6[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n\n.card[_ngcontent-%COMP%]   .card-block[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  line-height: 25px;\n}\n\n@media only screen and (min-width: 1400px){\np[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n}\n\n.card-block[_ngcontent-%COMP%] {\n  padding: 1.25rem;\n}\n\n.b-b-default[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #e0e0e0;\n}\n\n.m-b-20[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n\n.p-b-5[_ngcontent-%COMP%] {\n  padding-bottom: 5px !important;\n}\n\n.card[_ngcontent-%COMP%]   .card-block[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  line-height: 25px;\n}\n\n.m-b-10[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n}\n\n.text-muted[_ngcontent-%COMP%] {\n  color: #919aa3 !important;\n}\n\n.b-b-default[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #e0e0e0;\n}\n\n.f-w-600[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n\n.m-b-20[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n\n.m-t-40[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n\n.p-b-5[_ngcontent-%COMP%] {\n  padding-bottom: 5px !important;\n}\n\n.m-b-10[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n}\n\n.m-t-40[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n\n.user-card-full[_ngcontent-%COMP%]   .social-link[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: inline-block;\n}\n\n.user-card-full[_ngcontent-%COMP%]   .social-link[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-size: 20px;\n  margin: 0 10px 0 0;\n  transition: all 0.3s ease-in-out;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXJkZXRhaWxzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0VBQ0Usd0JBQXdCO0VBQ3hCO0FBQ0Y7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEI7QUFDRjs7QUFFQTtFQUNFLGtCQUFrQjtFQUVsQiw2Q0FBNkM7RUFDN0MsWUFBWTtFQUNaLG1CQUFtQjs7QUFFckI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSwwQkFBMEI7QUFDNUI7O0FBRUE7O0VBRUU7QUFDRjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBSUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0FBQ0E7RUFDRSxlQUFlO0FBQ2pCO0FBQ0E7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxlQUFlO0VBQ2Ysa0JBQWtCO0VBRWxCLGdDQUFnQztBQUNsQyIsImZpbGUiOiJ1c2VyZGV0YWlscy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4ucGFkZGluZyB7XG4gIHBhZGRpbmc6IDNyZW0gIWltcG9ydGFudDtcbiAgd2lkdGg6NjAwcHhcbn1cblxuLnVzZXItY2FyZC1mdWxsIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgd2lkdGg6OTAwcHhcbn1cblxuLmNhcmQge1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCAxcHggMjBweCAwIHJnYmEoNjksOTAsMTAwLDAuMDgpO1xuICBib3gtc2hhZG93OiAwIDFweCAyMHB4IDAgcmdiYSg2OSw5MCwxMDAsMC4wOCk7XG4gIGJvcmRlcjogbm9uZTtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcblxufVxuXG4ubS1yLTAge1xuICBtYXJnaW4tcmlnaHQ6IDBweDtcbn1cblxuLm0tbC0wIHtcbiAgbWFyZ2luLWxlZnQ6IDBweDtcbn1cblxuLnVzZXItY2FyZC1mdWxsIC51c2VyLXByb2ZpbGUge1xuICBib3JkZXItcmFkaXVzOiA1cHggMCAwIDVweDtcbn1cblxuLmJnLWMtbGl0ZS1ncmVlbiB7XG5cbiAgYmFja2dyb3VuZDogIzBCMEIyN1xufVxuXG4udXNlci1wcm9maWxlIHtcbiAgcGFkZGluZzogMjBweCAwO1xufVxuXG4uY2FyZC1ibG9jayB7XG4gIHBhZGRpbmc6IDEuMjVyZW07XG59XG5cbi5tLWItMjUge1xuICBtYXJnaW4tYm90dG9tOiAyNXB4O1xufVxuXG4uaW1nLXJhZGl1cyB7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuXG5cbmg2IHtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4uY2FyZCAuY2FyZC1ibG9jayBwIHtcbiAgbGluZS1oZWlnaHQ6IDI1cHg7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTQwMHB4KXtcbnAge1xuICBmb250LXNpemU6IDE0cHg7XG59XG59XG5cbi5jYXJkLWJsb2NrIHtcbiAgcGFkZGluZzogMS4yNXJlbTtcbn1cblxuLmItYi1kZWZhdWx0IHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlMGUwZTA7XG59XG5cbi5tLWItMjAge1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG4ucC1iLTUge1xuICBwYWRkaW5nLWJvdHRvbTogNXB4ICFpbXBvcnRhbnQ7XG59XG5cbi5jYXJkIC5jYXJkLWJsb2NrIHAge1xuICBsaW5lLWhlaWdodDogMjVweDtcbn1cblxuLm0tYi0xMCB7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi50ZXh0LW11dGVkIHtcbiAgY29sb3I6ICM5MTlhYTMgIWltcG9ydGFudDtcbn1cblxuLmItYi1kZWZhdWx0IHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlMGUwZTA7XG59XG5cbi5mLXctNjAwIHtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuLm0tYi0yMCB7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbi5tLXQtNDAge1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuXG4ucC1iLTUge1xuICBwYWRkaW5nLWJvdHRvbTogNXB4ICFpbXBvcnRhbnQ7XG59XG5cbi5tLWItMTAge1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG4ubS10LTQwIHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cblxuLnVzZXItY2FyZC1mdWxsIC5zb2NpYWwtbGluayBsaSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLnVzZXItY2FyZC1mdWxsIC5zb2NpYWwtbGluayBsaSBhIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBtYXJnaW46IDAgMTBweCAwIDA7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xufVxuXG5cbiJdfQ== */"] });


/***/ }),

/***/ 275:
/*!***************************************************************!*\
  !*** ./src/app/views/admin/userdetails/userdetails.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserdetailsModule": () => (/* binding */ UserdetailsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _userdetails_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./userdetails-routing.module */ 1808);
/* harmony import */ var _userdetails_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./userdetails.component */ 6883);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);




class UserdetailsModule {
}
UserdetailsModule.ɵfac = function UserdetailsModule_Factory(t) { return new (t || UserdetailsModule)(); };
UserdetailsModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: UserdetailsModule });
UserdetailsModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
            _userdetails_routing_module__WEBPACK_IMPORTED_MODULE_0__.UserdetailsRoutingModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](UserdetailsModule, { declarations: [_userdetails_component__WEBPACK_IMPORTED_MODULE_1__.UserdetailsComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _userdetails_routing_module__WEBPACK_IMPORTED_MODULE_0__.UserdetailsRoutingModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_views_admin_userdetails_userdetails_module_ts.js.map
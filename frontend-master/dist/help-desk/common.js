"use strict";
(self["webpackChunkhelpDesk"] = self["webpackChunkhelpDesk"] || []).push([["common"],{

/***/ 3541:
/*!************************************************!*\
  !*** ./src/app/views/services/data.service.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DataService": () => (/* binding */ DataService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 8784);


class DataService {
    constructor(http) {
        this.http = http;
    }
    getAllUsers() {
        return this.http.get('http://localhost:3000/allusers');
    }
    gettechno() {
        return this.http.get('http://localhost:3000/techno');
    }
    addTechno(profile) {
        return this.http.post('http://localhost:3000/addtechno', profile);
    }
    deleteOne(id) {
        return this.http.delete('http://localhost:3000/techno/' + id);
    }
    updateTechno(id, newprofile) {
        return this.http.patch('http://localhost:3000/techno/' + id + '/', newprofile);
    }
    getOneTechno(id) {
        return this.http.get('http://localhost:3000/techno/' + id);
    }
    getAllUsersByDir(dir) {
        return this.http.get('http://localhost:3000/usersByDir/' + dir);
    }
    addUser(profile) {
        return this.http.post('http://localhost:3000/adduser', profile);
    }
    deleteUser(id, mat) {
        return this.http.delete('http://localhost:3000/user/' + id + '/' + mat);
    }
    updadteUser(id, matricule, newprofile) {
        return this.http.patch('http://localhost:3000/user/' + id + '/' + matricule, newprofile);
    }
    getOneUser(id) {
        return this.http.get('http://localhost:3000/user/' + id);
    }
    getAllDirections() {
        return this.http.get('http://localhost:3000/directions');
    }
    addDirection(profileDir) {
        return this.http.post('http://localhost:3000/add_direction', profileDir);
    }
    getAllTypesDemandes() {
        return this.http.get('http://localhost:3000/typeDemandes');
    }
    add_typeDemande(profile) {
        return this.http.post('http://localhost:3000/addtype', profile);
    }
    deleteDirection(id, directionname) {
        return this.http.delete('http://localhost:3000/direction/' + id + '/' + directionname);
    }
    deleteDemande(id, demande, responsable) {
        return this.http.delete('http://localhost:3000/typedemande/' + id + '/' + demande + '/' + responsable);
    }
    dmFourAccepter() {
        return this.http.get('http://localhost:3000/demande_ACCEPTER');
    }
    dmFourRefuser() {
        return this.http.get('http://localhost:3000/demande_REF');
    }
    dmFourEnAtt() {
        return this.http.get('http://localhost:3000/demande_ATT');
    }
    dmFourApprouver() {
        return this.http.get('http://localhost:3000/demande_APP');
    }
    getOneUse(id) {
        return this.http.get('http://localhost:3000/user/' + id);
    }
}
DataService.ɵfac = function DataService_Factory(t) { return new (t || DataService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient)); };
DataService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: DataService, factory: DataService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 9991:
/*!**************************************************************************!*\
  !*** ./node_modules/ng2-search-filter/__ivy_ngcc__/ng2-search-filter.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Ng2SearchPipe": () => (/* binding */ Ng2SearchPipe),
/* harmony export */   "Ng2SearchPipeModule": () => (/* binding */ Ng2SearchPipeModule)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);



class Ng2SearchPipe {
    /**
     * @param {?} items object from array
     * @param {?} term term's search
     * @return {?}
     */
    transform(items, term) {
        if (!term || !items)
            return items;
        return Ng2SearchPipe.filter(items, term);
    }
    /**
     *
     * @param {?} items List of items to filter
     * @param {?} term  a string term to compare with every property of the list
     *
     * @return {?}
     */
    static filter(items, term) {
        const /** @type {?} */ toCompare = term.toLowerCase();
        /**
         * @param {?} item
         * @param {?} term
         * @return {?}
         */
        function checkInside(item, term) {
            for (let /** @type {?} */ property in item) {
                if (item[property] === null || item[property] == undefined) {
                    continue;
                }
                if (typeof item[property] === 'object') {
                    if (checkInside(item[property], term)) {
                        return true;
                    }
                }
                if (item[property].toString().toLowerCase().includes(toCompare)) {
                    return true;
                }
            }
            return false;
        }
        return items.filter(function (item) {
            return checkInside(item, term);
        });
    }
}
Ng2SearchPipe.ɵfac = function Ng2SearchPipe_Factory(t) { return new (t || Ng2SearchPipe)(); };
Ng2SearchPipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "filter", type: Ng2SearchPipe, pure: false });
Ng2SearchPipe.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: Ng2SearchPipe, factory: Ng2SearchPipe.ɵfac });
/**
 * @nocollapse
 */
Ng2SearchPipe.ctorParameters = () => [];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Ng2SearchPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Pipe,
        args: [{
                name: 'filter',
                pure: false
            }]
    }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable
    }], null, null); })();

class Ng2SearchPipeModule {
}
Ng2SearchPipeModule.ɵfac = function Ng2SearchPipeModule_Factory(t) { return new (t || Ng2SearchPipeModule)(); };
Ng2SearchPipeModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: Ng2SearchPipeModule });
Ng2SearchPipeModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({});
/**
 * @nocollapse
 */
Ng2SearchPipeModule.ctorParameters = () => [];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Ng2SearchPipeModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
        args: [{
                declarations: [Ng2SearchPipe],
                exports: [Ng2SearchPipe]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](Ng2SearchPipeModule, { declarations: [Ng2SearchPipe], exports: [Ng2SearchPipe] }); })();

/**
 * Generated bundle index. Do not edit.
 */





/***/ })

}]);
//# sourceMappingURL=common.js.map
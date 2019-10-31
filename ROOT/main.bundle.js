webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/address/address.component.html":
/***/ (function(module, exports) {

module.exports = "<form #addressForm=\"ngForm\" class=\"editForm\" novalidate>\n  <div class=\"tab-pane fade in active\">\n      <h4 class=\"head text-center\">{{title}}</h4>\n      <!-- <br/> -->\n      <div class='row' >\n          <div class='col-xs-offset-1 col-xs-12 col-sm-offset-1 col-sm-12'>\n\n              <!-- <div class=\"container\"> -->\n                  <!-- <div class=\"card-deck\"> -->\n                      <div class=\"card-deck\" style=\"margin-right: -173px; margin-left: -23px;\">\n                      <!-- <div class=\"col-sm-2\" style=\"padding: 0px 0px 0px 0px;\"> -->\n                          <div class='col-xs-3 col-sm-2' style=\"padding: 0px 0px 0px 0px;\">\n                          <div class=\"card text-white\" style=\"background-color:orange;\">\n                              <div class=\"card-body text-center\">\n                                  <!-- <img src=\"/assets/images/core.png\" style=\"width:20%\"> -->\n                                  <label class=\"control-label\" for=\"Java\">Core</label>\n                              </div>\n                            </div>\n                      <div class=\"card\">\n                        <div class=\"card-body\"  style=\"line-height: 0;\">\n                            <label class=\"control-label\" for=\"Java\">Java</label>\n                            <img src=\"/assets/images/java.png\" style=\"width:13%\">\n                            <select name=\"java_version\" style=\"width: 56px;\" [(ngModel)]=\"address.java_version\">\n                                <option>12.0.2</option>\n                                <option>1.8</option>\n                              </select>\n                        </div>\n                      </div>\n\n                            <div class=\"card\">\n                                <div class=\"card-body\"  style=\"line-height: 0;\">\n                                    <label class=\"control-label\" for=\"state\">Python</label>\n                                    <img src=\"/assets/images/python.png\" style=\"width:22%\">\n                                    <select name=\"Python\" [(ngModel)]=\"address.Python\">\n                                        <option>3.7</option>\n                                        <option>3.6</option>\n                                        <option>2.7</option>\n                                        <option>2.6</option>\n                                    </select>\n                                </div>\n                              </div>\n                      </div>\n                      <!-- <div class=\"col-sm-2\" style=\"padding: 0px 0px 0px 0px;\"> -->\n                          <div class='col-xs-3 col-sm-2' style=\"padding: 0px 0px 0px 9px;\">\n                          <div class=\"card text-white\" style=\"background-color:dodgerblue;\">\n                              <div class=\"card-body text-center\">\n                                  <!-- <img src=\"/assets/images/bigdata.png\" style=\"width:20%\"> -->\n                                  <label class=\"control-label\" for=\"Java\">BigData</label>\n                              </div>\n                            </div>\n                          <div class=\"card\">\n                              <div class=\"card-body\" style=\"line-height: 2.2;\">\n                                  <label class=\"control-label\" for=\"state\">Spark</label>\n                                  <img src=\"/assets/images/spark.png\" style=\"width:25%\">\n                                  <select name=\"spark\" [(ngModel)]=\"address.spark\">\n                                      <option>2.4.4</option>\n                                      <option>2.4.3</option>\n                                      <option>2.3.3</option>\n                                </select>\n                              </div>\n                            </div>\n                            <div class=\"card\">\n                                <div class=\"card-body\"  style=\"line-height: 2.2;\">\n                                    <label class=\"control-label\" for=\"state\">Hadoop</label>\n                                    <img src=\"/assets/images/hadoop.png\" style=\"width:23%\">\n                                    <select name=\"hadoop\" [(ngModel)]=\"address.hadoop\">\n                                        <option>3.2.0</option>\n                                        <option>3.1.2</option>\n                                    </select>\n                                </div>\n                              </div>\n                          </div>\n                          <!-- <div class=\"col-sm-2\" style=\"padding: 0px 0px 0px 0px;\"> -->\n                              <div class='col-xs-3 col-sm-2' style=\"padding: 0px 0px 0px 9px;\">\n                              <div class=\"card text-white\" style=\"background-color:hsl(266, 88%, 50%);\">\n                                  <div class=\"card-body text-center\">\n                                      <!-- <img src=\"/assets/images/sql.png\" style=\"width:20%\"> -->\n                                      <label class=\"control-label\" for=\"sql\">SQL</label>\n                                  </div>\n                                </div>\n                              <div class=\"card\">\n                                <div class=\"card-body\" style=\"line-height: 2.2;\">\n                                    <label class=\"control-label\" for=\"state\">MySql</label>\n                                    <img src=\"/assets/images/mysql.png\" style=\"width:20%\">\n                                    <select style=\"width: 56px;\" name=\"mysql\" [(ngModel)]=\"address.mysql\">\n                                        <option>8.0</option>\n                                        <option>5.6</option>\n                                      </select>\n                                </div>\n                              </div>\n\n                              <div class=\"card\">\n                                  <div class=\"card-body\" style=\"line-height: 2.2;\">\n                                      <label class=\"control-label\" for=\"state\">Postgres</label>\n                                      <img src=\"/assets/images/postgres.png\" style=\"width:17%\">\n                                      <select style=\"width: 56px;\" name=\"postgres\" [(ngModel)]=\"address.postgresql\">\n                                          <option>10.10</option>\n                                          <option>9.6</option>\n                                        </select>\n                                  </div>\n                                </div>\n                                </div>\n                      <!-- <div class=\"col-sm-2\" style=\"padding: 0px 0px 0px 0px;\"> -->\n                          <div class='col-xs-3 col-sm-2' style=\"padding: 0px 0px 0px 9px;\">\n                          <div class=\"card text-white\" style=\"background-color:deepskyblue;\">\n                              <div class=\"card-body text-center\">\n                                  <!-- <img src=\"/assets/images/nosql.png\" style=\"width:20%\"> -->\n                                  <label class=\"control-label\" for=\"Java\">NoSQL</label>\n                              </div>\n                            </div>\n                          <div class=\"card\">\n                              <div class=\"card-body\" style=\"padding-left: 5px; line-height: 2.2;\">\n                                  <label class=\"control-label\" for=\"zip\">Hbase</label>\n                                  <img src=\"/assets/images/hbase.png\" style=\"width:26%\">\n                                  <select name=\"hbase\" [(ngModel)]=\"address.hbase\">\n                                      <option>2.2.0</option>\n                                      <option>2.1.4</option>\n                                      <option>2.1.3</option>\n                                    </select>\n                              </div>\n                            </div>\n                          <div class=\"card\">\n                            <div class=\"card-body\" style=\"padding-left: 5px; line-height: 2.2;\">\n                                <label class=\"control-label\" for=\"state\">MongoDb</label>\n                                <img src=\"/assets/images/mongodb.png\" style=\"width:15%\">\n                                <select name=\"mongodb\" [(ngModel)]=\"address.mongodb\">\n                                    <option>4.2</option>\n                                    <option>4.0.12</option>\n                                    <option>3.6</option>\n                                </select>\n                            </div>\n                          </div>\n                          <div class=\"card\">\n                              <div class=\"card-body\" style=\"padding-left: 5px; line-height: 2.2;\">\n                                  <label class=\"control-label\" for=\"state\" style=\"padding-top:2px;\">Cassandra</label>\n                                  <img src=\"/assets/images/cassandra.png\" style=\"width:9%\">\n                                  <select name=\"cassandra\" [(ngModel)]=\"address.cassandra\">\n                                      <option>3.11.4</option>\n                                      <option>3.0.18</option>\n                                 </select>\n                              </div>\n                            </div>\n                          </div>\n\n\n                  </div>\n              <!-- </div> -->\n              </div>\n              </div>\n          <!-- </div> -->\n\n          <div class=\"form-group text-center space-20\" style=\"margin-right: 66px; margin-left: 83px; margin-top: -10px;\">\n              <button class=\"btn btn-outline-rounded btn-default\" (click)=\"goToPrevious(addressForm)\" style=\"width: 19.8%; margin: 20px -2px;\"><span class=\"glyphicon glyphicon-arrow-left\"></span> Previous</button>\n              <button class=\"btn btn-outline-rounded btn-success\" [disabled]=\"!addressForm.valid\" (click)=\"goToNext(addressForm)\"><span style=\"margin-left:10px;\" class=\"glyphicon glyphicon-arrow-right\"></span> Next</button>\n          </div>\n      <!-- </div> -->\n\n  </div>\n</form>\n"

/***/ }),

/***/ "../../../../../src/app/address/address.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddressComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_formData_service__ = __webpack_require__("../../../../../src/app/data/formData.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__myservice_service__ = __webpack_require__("../../../../../src/app/myservice.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AddressComponent = (function () {
    function AddressComponent(router, formDataService, appService) {
        var _this = this;
        this.router = router;
        this.formDataService = formDataService;
        this.appService = appService;
        this.title = 'Applications';
        this.java_version = 'undefined';
        this.mysql = 'undefined';
        this.mongodb = 'undefined';
        this.spark = 'undefined';
        this.Python = 'udefined';
        this.cassandra = 'undefined';
        this.hbase = 'undefined';
        this.hadoop = 'undefined';
        appService.myhost.subscribe(function (data) {
            _this.Hname = data;
        });
    }
    AddressComponent.prototype.selected1 = function (java_version) {
        this.java_version = java_version;
        console.log(this.java_version);
    };
    AddressComponent.prototype.selected2 = function (mysql) {
        this.mysql = mysql;
        console.log(this.mysql);
    };
    AddressComponent.prototype.selected3 = function (mongodb) {
        this.mongodb = mongodb;
        console.log(this.mongodb);
    };
    AddressComponent.prototype.selected4 = function (spark) {
        this.spark = spark;
        console.log(this.spark);
    };
    AddressComponent.prototype.selected5 = function (python) {
        this.Python = python;
        console.log(this.Python);
    };
    AddressComponent.prototype.selected6 = function (cassandra) {
        this.cassandra = cassandra;
        console.log(this.cassandra);
    };
    AddressComponent.prototype.selected7 = function (hbase) {
        this.hbase = hbase;
        console.log(this.hbase);
    };
    AddressComponent.prototype.selected8 = function (hadoop) {
        this.hadoop = hadoop;
        console.log(this.hadoop);
    };
    AddressComponent.prototype.ngOnInit = function () {
        this.address = this.formDataService.getAddress();
        console.log('Address feature loaded!');
    };
    AddressComponent.prototype.save = function (form) {
        if (!form.valid) {
            return false;
        }
        this.formDataService.setAddress(this.address);
        return true;
    };
    AddressComponent.prototype.goToPrevious = function (form) {
        if (this.save(form)) {
            // Navigate to the work page
            this.router.navigate(['/work']);
        }
    };
    AddressComponent.prototype.goToNext = function (form) {
        if (this.save(form)) {
            this.router.navigate(['/deploy']);
        }
    };
    return AddressComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('nameRef'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */]) === "function" && _a || Object)
], AddressComponent.prototype, "nameRef", void 0);
AddressComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'mt-wizard-address',
        template: __webpack_require__("../../../../../src/app/address/address.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__data_formData_service__["a" /* FormDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__data_formData_service__["a" /* FormDataService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__myservice_service__["a" /* MyserviceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__myservice_service__["a" /* MyserviceService */]) === "function" && _d || Object])
], AddressComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=address.component.js.map

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export appRoutes */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__personal_personal_component__ = __webpack_require__("../../../../../src/app/personal/personal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__work_work_component__ = __webpack_require__("../../../../../src/app/work/work.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__address_address_component__ = __webpack_require__("../../../../../src/app/address/address.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__deploy_deploy_component__ = __webpack_require__("../../../../../src/app/deploy/deploy.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__result_result_component__ = __webpack_require__("../../../../../src/app/result/result.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__workflow_workflow_guard_service__ = __webpack_require__("../../../../../src/app/workflow/workflow-guard.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var appRoutes = [
    // { path: 'onpremises', component: OnpremisesComponent},
    // { path: 'cloud', component: CloudComponent}
    // 1st Route
    { path: 'personal', component: __WEBPACK_IMPORTED_MODULE_2__personal_personal_component__["a" /* PersonalComponent */] },
    // 2nd Route
    { path: 'work', component: __WEBPACK_IMPORTED_MODULE_3__work_work_component__["a" /* WorkComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_7__workflow_workflow_guard_service__["a" /* WorkflowGuard */]] },
    // 3rd Route
    { path: 'address', component: __WEBPACK_IMPORTED_MODULE_4__address_address_component__["a" /* AddressComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_7__workflow_workflow_guard_service__["a" /* WorkflowGuard */]] },
    // 4th Route
    { path: 'deploy', component: __WEBPACK_IMPORTED_MODULE_5__deploy_deploy_component__["a" /* DeployComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_7__workflow_workflow_guard_service__["a" /* WorkflowGuard */]] },
    // 5th Route
    { path: 'result', component: __WEBPACK_IMPORTED_MODULE_6__result_result_component__["a" /* ResultComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_7__workflow_workflow_guard_service__["a" /* WorkflowGuard */]] },
    // 6th Route
    { path: '', redirectTo: '/personal', pathMatch: 'full' },
    // 7th Route
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_2__personal_personal_component__["a" /* PersonalComponent */] }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot(appRoutes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]],
        providers: [__WEBPACK_IMPORTED_MODULE_7__workflow_workflow_guard_service__["a" /* WorkflowGuard */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "\n<nav class=\"navbar navbar-expand-lg navbar-light bg-primary py-0\" style=\"margin-bottom: 0px;\">\n  <div class=\"logo\">\n    <img src=\"https://boomiappinsights.eaiesb.com/bai/images/e_c_white.png;\" alt=\"logo\" style=\"width:30px; margin-left:569px;\">\n  </div>\n  &nbsp;&nbsp;\n  <a class=\"navbar-brand\" href=\"#\" style=\"color: white;\"><b>Provisioning</b></a>\n</nav>\n\n<!-- <div style=\"padding: 17px 30px; margin-bottom: -50px; border-radius: 15px;\">\n  <button type=\"button\" class=\"btn1 btn-secondary\" (click)=\"btnClicOnpremises()\" style=\"width: 91px; padding-left: 7px;\">Onpremises</button>\n  <button type=\"button\" class=\"btn1 btn-secondary\" (click)=\"btnClicCloud()\" style=\"margin-left: 0%\">Cloud</button>\n</div> -->\n\n<section style=\"background:#efefe9;\">\n  <div class=\"container\">\n    <div class=\"board\">\n      <msw-navbar></msw-navbar>\n      <div class=\"tab-content\">\n        <router-outlet></router-outlet>\n      </div>\n    </div>\n  </div>\n</section>\n\n<!-- <section *ngIf=\"display1\" style=\"background:#613bb9;\">\n  <div class=\"container\">\n    <div class=\"board\">\n      <msw-navbar></msw-navbar>\n      <div class=\"tab-content\">\n        <router-outlet></router-outlet>\n      </div>\n    </div>\n  </div>\n</section> -->\n\n<app-footer></app-footer>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_formData_service__ = __webpack_require__("../../../../../src/app/data/formData.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = (function () {
    function AppComponent(formDataService, _router) {
        this.formDataService = formDataService;
        this._router = _router;
        this.display = false;
        this.display1 = false;
        this.title = 'Multi-Step Wizard';
    }
    // btnClicOnpremises() {
    //   this.display1 = true;
    //   // this._router.navigate(['/onpremises']);
    // }
    // btnClicCloud() {
    //    this.display = true;
    //    this._router.navigate(['/cloud']);
    // }
    AppComponent.prototype.ngOnInit = function () {
        this.formData = this.formDataService.getFormData();
        console.log(this.title + ' loaded!');
    };
    return AppComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Object)
], AppComponent.prototype, "formData", void 0);
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'multi-step-wizard-app',
        template: __webpack_require__("../../../../../src/app/app.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__data_formData_service__["a" /* FormDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__data_formData_service__["a" /* FormDataService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _b || Object])
], AppComponent);

var _a, _b;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__navbar_navbar_component__ = __webpack_require__("../../../../../src/app/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__personal_personal_component__ = __webpack_require__("../../../../../src/app/personal/personal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__work_work_component__ = __webpack_require__("../../../../../src/app/work/work.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__address_address_component__ = __webpack_require__("../../../../../src/app/address/address.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__deploy_deploy_component__ = __webpack_require__("../../../../../src/app/deploy/deploy.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__result_result_component__ = __webpack_require__("../../../../../src/app/result/result.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__data_formData_service__ = __webpack_require__("../../../../../src/app/data/formData.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__workflow_workflow_service__ = __webpack_require__("../../../../../src/app/workflow/workflow.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__myservice_service__ = __webpack_require__("../../../../../src/app/myservice.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__footer_footer_component__ = __webpack_require__("../../../../../src/app/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__onpremises_onpremises_component__ = __webpack_require__("../../../../../src/app/onpremises/onpremises.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__cloud_cloud_component__ = __webpack_require__("../../../../../src/app/cloud/cloud.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__navpro_navpro_component__ = __webpack_require__("../../../../../src/app/navpro/navpro.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



/* App Root */


/* Feature Components */






/* Routing Module */

/* Shared Service */







var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_11__app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_10__angular_common_http__["b" /* HttpClientModule */]
        ],
        providers: [{ provide: __WEBPACK_IMPORTED_MODULE_12__data_formData_service__["a" /* FormDataService */], useClass: __WEBPACK_IMPORTED_MODULE_12__data_formData_service__["a" /* FormDataService */] },
            { provide: __WEBPACK_IMPORTED_MODULE_13__workflow_workflow_service__["a" /* WorkflowService */], useClass: __WEBPACK_IMPORTED_MODULE_13__workflow_workflow_service__["a" /* WorkflowService */] },
            __WEBPACK_IMPORTED_MODULE_14__myservice_service__["a" /* MyserviceService */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */], __WEBPACK_IMPORTED_MODULE_4__navbar_navbar_component__["a" /* NavbarComponent */], __WEBPACK_IMPORTED_MODULE_5__personal_personal_component__["a" /* PersonalComponent */], __WEBPACK_IMPORTED_MODULE_6__work_work_component__["a" /* WorkComponent */], __WEBPACK_IMPORTED_MODULE_7__address_address_component__["a" /* AddressComponent */], __WEBPACK_IMPORTED_MODULE_8__deploy_deploy_component__["a" /* DeployComponent */], __WEBPACK_IMPORTED_MODULE_9__result_result_component__["a" /* ResultComponent */], __WEBPACK_IMPORTED_MODULE_15__footer_footer_component__["a" /* FooterComponent */], __WEBPACK_IMPORTED_MODULE_16__onpremises_onpremises_component__["a" /* OnpremisesComponent */], __WEBPACK_IMPORTED_MODULE_17__cloud_cloud_component__["a" /* CloudComponent */], __WEBPACK_IMPORTED_MODULE_18__navpro_navpro_component__["a" /* NavproComponent */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/cloud/cloud.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* .board {\r\n  width: 75%;\r\n  margin: 40px auto;\r\n  height: 477px;\r\n  background: #fff;\r\n\r\n} */\r\n\r\n/* * {\r\n  -webkit-box-sizing: border-box;\r\n  -moz-box-sizing: border-box;\r\n  box-sizing: border-box;\r\n}\r\n\r\ndiv {\r\n  display: block;\r\n}\r\n\r\n\r\nbody {\r\n  font-family: \"Helvetica Neue\",Helvetica,Arial,sans-serif;\r\n  font-size: 13px;\r\n  line-height: 1;\r\n  color: #333;\r\n  background-color: #fff;\r\n  text-align: left;\r\n} */\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/cloud/cloud.component.html":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "../../../../../src/app/cloud/cloud.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CloudComponent; });
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

var CloudComponent = (function () {
    function CloudComponent() {
    }
    CloudComponent.prototype.ngOnInit = function () {
    };
    return CloudComponent;
}());
CloudComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-cloud',
        template: __webpack_require__("../../../../../src/app/cloud/cloud.component.html"),
        styles: [__webpack_require__("../../../../../src/app/cloud/cloud.component.css")]
    }),
    __metadata("design:paramtypes", [])
], CloudComponent);

//# sourceMappingURL=cloud.component.js.map

/***/ }),

/***/ "../../../../../src/app/data/formData.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormData; });
/* unused harmony export Personal */
/* unused harmony export Deploy */
/* unused harmony export Work */
/* unused harmony export Address */
var FormData = (function () {
    function FormData() {
        this.hostname = '';
        this.ipaddress = '';
        this.memory = '';
        this.email = '';
        this.work = '';
        this.personal = '';
        this.deploy = '';
        // Ubuntu: string = '';
        // CentOS: string = '';
        // RedHat: string = '';
        // Windows: string = '';
        this.java_version = 'undefined';
        this.mysql = 'undefined';
        this.postgresql = 'undefined';
        this.mongodb = 'undefined';
        this.spark = 'undefined';
        this.Python = 'undefined';
        this.cassandra = 'undefined';
        this.hbase = 'undefined';
        this.hadoop = 'undefined';
        this.zip = '';
    }
    FormData.prototype.clear = function () {
        this.hostname = '';
        this.ipaddress = '';
        this.memory = '';
        this.email = '';
        this.work = '';
        this.personal = '';
        this.deploy = '';
        // this.Ubuntu = '';
        // this.CentOS = '';
        // this.RedHat = '';
        // this.Windows = '';
        // this.zip = '';
        this.java_version = '';
        this.mysql = '';
        this.postgresql = '';
        this.mongodb = '';
        this.spark = '';
        this.Python = '';
        this.cassandra = '';
        this.hbase = '';
        this.hadoop = '';
    };
    return FormData;
}());

var Personal = (function () {
    function Personal() {
        this.personal = '';
    }
    return Personal;
}());

var Deploy = (function () {
    function Deploy() {
        this.deploy = '';
    }
    return Deploy;
}());

var Work = (function () {
    function Work() {
        this.hostname = '';
        this.ipaddress = '';
        this.memory = '';
        this.email = '';
    }
    return Work;
}());

var Address = (function () {
    function Address() {
        this.java_version = '';
        this.mysql = '';
        this.mongodb = '';
        this.postgresql = '';
        this.spark = '';
        this.Python = '';
        this.cassandra = '';
        this.hbase = '';
        this.hadoop = '';
    }
    return Address;
}());

//# sourceMappingURL=formData.model.js.map

/***/ }),

/***/ "../../../../../src/app/data/formData.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormDataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__formData_model__ = __webpack_require__("../../../../../src/app/data/formData.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__workflow_workflow_service__ = __webpack_require__("../../../../../src/app/workflow/workflow.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__workflow_workflow_model__ = __webpack_require__("../../../../../src/app/workflow/workflow.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FormDataService = (function () {
    function FormDataService(workflowService) {
        this.workflowService = workflowService;
        this.formData = new __WEBPACK_IMPORTED_MODULE_1__formData_model__["a" /* FormData */]();
        this.isPersonalFormValid = false;
        this.isWorkFormValid = false;
        this.isAddressFormValid = false;
        this.isDeployFormValid = false;
    }
    FormDataService.prototype.getPersonal = function () {
        // Return the Personal data
        return this.formData.personal;
    };
    FormDataService.prototype.setPersonal = function (data) {
        // Update the Personal data only when the Personal Form had been validated successfully
        this.isPersonalFormValid = true;
        this.formData.personal = data;
        this.workflowService.validateStep(__WEBPACK_IMPORTED_MODULE_3__workflow_workflow_model__["a" /* STEPS */].personal);
    };
    FormDataService.prototype.getDeploy = function () {
        // Return the Personal data
        return this.formData.deploy;
    };
    FormDataService.prototype.setDeploy = function (data) {
        // Update the Personal data only when the Personal Form had been validated successfully
        this.isDeployFormValid = true;
        this.formData.deploy = data;
        this.workflowService.validateStep(__WEBPACK_IMPORTED_MODULE_3__workflow_workflow_model__["a" /* STEPS */].deploy);
    };
    FormDataService.prototype.getWork = function () {
        var work = {
            hostname: this.formData.hostname,
            ipaddress: this.formData.ipaddress,
            memory: this.formData.memory,
            email: this.formData.email
        };
        return work;
    };
    FormDataService.prototype.setWork = function (data) {
        // Update the work type only when the Work Form had been validated successfully
        this.isWorkFormValid = true;
        this.formData.hostname = data.hostname;
        this.formData.ipaddress = data.ipaddress;
        this.formData.memory = data.memory;
        this.formData.email = data.email;
        // Validate Personal Step in Workflow
        this.workflowService.validateStep(__WEBPACK_IMPORTED_MODULE_3__workflow_workflow_model__["a" /* STEPS */].work);
    };
    FormDataService.prototype.getAddress = function () {
        // Return the Address data
        var address = {
            java_version: this.formData.java_version,
            mysql: this.formData.mysql,
            postgresql: this.formData.postgresql,
            mongodb: this.formData.mongodb,
            spark: this.formData.spark,
            Python: this.formData.Python,
            cassandra: this.formData.cassandra,
            hbase: this.formData.hbase,
            hadoop: this.formData.hadoop,
        };
        return address;
    };
    FormDataService.prototype.setAddress = function (data) {
        // Update the Address data only when the Address Form had been validated successfully
        this.isAddressFormValid = true;
        this.formData.java_version = data.java_version;
        this.formData.mysql = data.mysql;
        this.formData.postgresql = data.postgresql;
        this.formData.mongodb = data.mongodb;
        this.formData.spark = data.spark;
        this.formData.Python = data.Python;
        this.formData.cassandra = data.cassandra;
        this.formData.hbase = data.hbase;
        this.formData.hadoop = data.hadoop;
        this.workflowService.validateStep(__WEBPACK_IMPORTED_MODULE_3__workflow_workflow_model__["a" /* STEPS */].address);
    };
    FormDataService.prototype.getFormData = function () {
        // Return the entire Form Data
        return this.formData;
    };
    FormDataService.prototype.resetFormData = function () {
        // Reset the workflow
        this.workflowService.resetSteps();
        // Return the form data after all this.* members had been reset
        this.formData.clear();
        this.isPersonalFormValid = this.isWorkFormValid = this.isAddressFormValid = this.isDeployFormValid = false;
        return this.formData;
    };
    FormDataService.prototype.isFormValid = function () {
        // Return true if all forms had been validated successfully; otherwise, return false
        return this.isPersonalFormValid &&
            this.isWorkFormValid &&
            this.isAddressFormValid &&
            this.isDeployFormValid;
    };
    return FormDataService;
}());
FormDataService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__workflow_workflow_service__["a" /* WorkflowService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__workflow_workflow_service__["a" /* WorkflowService */]) === "function" && _a || Object])
], FormDataService);

var _a;
//# sourceMappingURL=formData.service.js.map

/***/ }),

/***/ "../../../../../src/app/deploy/deploy.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".prod-list1, .prod-list2 {\r\n\theight: calc(100vh - 56px);\r\n}\r\n.prod-list1 h2, .prod-list2 h2 {\r\n\tfont-size: 20px;\r\n\tborder-bottom: 1px solid rgba(0, 0, 0, 0.05);\r\n\ttext-align: center;\r\n\tpadding: 15px;\r\n}\r\n.prod-list1 {\r\n\tbackground-color: rgba(0, 0, 0, 0.02);\r\n}\r\n.prod-list1 ul, .prod-list2 ul {\r\n\tpadding: 0;\r\n}\r\n.prod-list1 ul li, .prod-list2 ul li {\r\n\tlist-style: none;\r\n\ttext-align: center;\r\n\tborder-top: 1px solid rgba(0, 0, 0, 0.01);\r\n\tpadding: 5px 0;\r\n\t;\r\n}\r\n.prod-list1 ul li:hover {\r\n\tbackground-color: rgba(0, 0, 0, 0.01);\r\n}\r\n.prod-list2 ul li:hover {\r\n\tbackground-color: rgba(0, 0, 0, 0.02);\r\n}\r\n.prod-list1 ul li:first-child, .prod-list2 ul li:first-child {\r\n\tborder-top: none;\r\n}\r\n.prod-list1 ul li a, .prod-list2 ul li a {\r\n\tcursor: pointer;\r\n\tdisplay: block;\r\n}\r\n.prod-list2 {\r\n\tbackground-color: rgba(0, 0, 0, 0.01);\r\n}\r\n.prod-img {\r\n\tpadding: 15px;\r\n}\r\n.prod-img .card {\r\n\tmargin-bottom: 15px;\r\n}\r\n.prod-img .card .card-img img {\r\n\theight: 200px;\r\n}\r\n.prod-img .card .card-body span {\r\n\tfont-size: 12px;\r\n\tmargin: 5px;\r\n\tbackground-color: rgba(0, 0, 0, 0.2);\r\n\tpadding: 5px 8px;\r\n\tborder-radius: 25PX;\r\n\tcolor: #fff;\r\n}\r\n.action-icon li {\r\n\tborder: none !important;\r\n\tdisplay: inline-block;\r\n\tpadding: 4px !important;\r\n}\r\n.action-icon li:hover {\r\n\tbackground-color: transparent !important;\r\n}\r\n.action-icon li:first-child a i {\r\n\tbackground-color: #2263d6;\r\n}\r\n.action-icon li:nth-of-type(2) a i {\r\n\tbackground-color: #bd2130;\r\n}\r\n.action-icon li:last-child a i {\r\n\tbackground-color: #28a745;\r\n}\r\n.action-icon li a i::before {\r\n\tfont-size: 12px;\r\n}\r\n.action-icon li a i {\r\n\tfont-size: 0;\r\n\tborder-radius: 25px;\r\n\theight: 25px;\r\n\twidth: 25px;\r\n\tborder: 1px solid rgba(0, 0, 0, 0.1);\r\n\tline-height: 2;\r\n\tcolor: #fff;\r\n}\r\n.modal.right .modal-dialog {\r\n\tmargin: auto;\r\n\twidth: 720px;\r\n\theight: 100%;\r\n\ttransform: translate3d(0%, 0, 0);\r\n}\r\n.modal.right{\r\n\tleft:auto !important;\r\n}\r\n.modal.right .modal-content {\r\n\theight: 100%;\r\n\toverflow-y: auto;\r\n}\r\n.modal.right .modal-body {\r\n\tpadding: 15px 15px 80px;\r\n}\r\n/*Right*/\r\n.modal.right.fade .modal-dialog {\r\n\ttransition: opacity 0.3s linear, right 0.3s ease-out;\r\n}\r\n.modal.right.fade.in .modal-dialog {\r\n\tright: 0;\r\n}\r\n.close {\r\n    font-size: 21px;\r\n    font-weight: 700;\r\n    line-height: 1;\r\n    color: #000;\r\n    text-shadow: 0 1px 0 #fff;\r\n    opacity: .2;\r\n    position: absolute;\r\n    right: 15px;\r\n}\r\n.custom-checkbox{\r\n\tposition:absolute;\r\n}\r\n.custom-control-label::before{\r\n\tbackground-color:#fff;\r\n}\r\n.openShift{background-image:url(https://www.linuxadictos.com/wp-content/uploads/openshift-red-hat-logo.jpg);\r\n}\r\n\r\n.modal-footer {\r\n  border-top: 0 none;\r\n}\r\n\r\n.navbar-brand {\r\n  color: white;\r\n}\r\n\r\n.navbar-collapse {\r\n  margin-left: 20px;\r\n}\r\n\r\n.my-small-btn {\r\n  width:0px;\r\n  padding:3px;\r\n}\r\n\r\n.card {\r\n  margin-left: 10px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/deploy/deploy.component.html":
/***/ (function(module, exports) {

module.exports = "<form #personalForm=\"ngForm\" class=\"editForm\" novalidate>\n  <div class=\"tab-pane fade in active\">\n      <h4 class=\"head text-center\">{{title}}</h4>\n      <br/>\n\n                        <div class=\"row\" style=\"margin-left: 48px; margin-right: -100px;\">\n\n                            <div class=\"col-md-2\">\n                              <div class=\"thumbnail\">\n                                <!-- <div class=\"card\" style=\"padding-bottom: 10px\">\n                                  <div class=\"card-body\"> -->\n                                    <img src=\"https://cdn.iconscout.com/icon/free/png-256/openshift-283020.png\" alt=\"Nature\"\n                                      style=\"width:100px;height:100px; margin-left:11%\">\n                                    <div>\n                                      <input type=\"radio\" #work=\"ngModel\" required name=\"deploy\" value=\"openshift\" [(ngModel)]=\"deployType\" (change)=onRadioButtonClick($event.target.value) style=\"margin-left: 22%\">\n                                      <!-- <div style=\"text-align: center\">Ubuntu</div> -->\n                                      Openshift\n                                    </div>\n                                  <!-- </div>\n                                </div> -->\n                              </div>\n                            </div>\n\n                            <div class=\"col-md-2\">\n                              <div class=\"thumbnail\">\n                                <!-- <div class=\"card\" style=\"padding-bottom: 10px\">\n                                                      <div class=\"card-body\"> -->\n                                <img src=\"https://cdn.iconscout.com/icon/free/png-256/azure-190760.png\" alt=\"Fjords\"\n                                  style=\"width:100px;height:100px; margin-left:10%\">\n                                <div>\n                                  <!-- <div style=\"text-align: center\">CentOS</div> -->\n                                  <input type=\"radio\" #work=\"ngModel\" required name=\"deploy\" value=\"azure\" [(ngModel)]=\"deployType\" (change)=onRadioButtonClick($event.target.value) style=\"margin-left: 31%\">\n                                  Azure\n                                </div>\n                                <!-- </div> -->\n                                <!-- </div> -->\n                              </div>\n                            </div>\n\n                            <div class=\"col-md-2\">\n                              <div class=\"thumbnail\">\n                                <!-- <div class=\"card\" style=\"padding-bottom: 10px\">\n                                  <div class=\"card-body\"> -->\n                                  <img src=\"https://secure.meetupstatic.com/photos/event/2/c/4/0/highres_472151328.jpeg\" alt=\"Nature\"\n                                  style=\"width:100px;height:100px; margin-left:13%\">\n                                <div>\n                                  <!-- <div style=\"text-align: center\">CentOS</div> -->\n                                  <input type=\"radio\" #work=\"ngModel\" required name=\"deploy\" value=\"gcp\" [(ngModel)]=\"deployType\" (change)=onRadioButtonClick($event.target.value) style=\"margin-left: 35%\">\n                                  gcp\n                                </div>\n                                <!-- </div>\n                                </div> -->\n                              </div>\n                            </div>\n\n                            <div class=\"col-md-2\">\n                              <div class=\"thumbnail\">\n                                <!-- <div class=\"card\" style=\"padding-bottom: 10px\">\n                                  <div class=\"card-body\"> -->\n                                <img src=\"https://metimegamer.files.wordpress.com/2014/11/amazon-logo.png?w=256\" alt=\"Nature\"\n                                  style=\"width:100px;height:100px; margin-left:14%\">\n                                <div>\n                                  <!-- <div style=\"text-align: center\">Windows</div> -->\n                                  <input type=\"radio\" #work=\"ngModel\" required name=\"deploy\" value=\"aws\" [(ngModel)]=\"deployType\" (change)=onRadioButtonClick($event.target.value) style=\"margin-left: 33%;\">\n                                  AWS\n                                </div>\n                                <!-- </div>\n                                </div> -->\n                              </div>\n                            </div>\n\n                            <div class=\"col-md-2\">\n                                <div class=\"thumbnail\">\n                                  <!-- <div class=\"card\" style=\"padding-bottom: 10px\">\n                                    <div class=\"card-body\"> -->\n                                  <img src=\"https://kubernetes.io/images/favicon.png\" alt=\"Nature\"\n                                    style=\"width:100px;height:100px; margin-left:12%\">\n                                  <div>\n                                    <!-- <div style=\"text-align: center\">Windows</div> -->\n                                    <input type=\"radio\" #work=\"ngModel\" required name=\"deploy\" value=\"kubernetes\" [(ngModel)]=\"deployType\" (change)=onRadioButtonClick($event.target.value) style=\"margin-left: 15%;\">\n                                    kubernetes\n                                  </div>\n                                  <!-- </div>\n                                  </div> -->\n                                </div>\n                              </div>\n\n                          </div>\n\n                        <div class=\"form-group text-center space-20\" style=\"margin-right: 66px; margin-left: 83px; margin-top: 20px;\">\n                          <button class=\"btn btn-outline-rounded btn-default\" (click)=\"goToPrevious(deployForm)\" style=\"width: 19.8%; margin: 20px -2px;\"><span class=\"glyphicon glyphicon-arrow-left\"></span> Previous</button>\n                          <button class=\"btn btn-outline-rounded btn-success\" (click)=\"goToNext(deployForm)\"><span style=\"margin-left:10px;\" class=\"glyphicon glyphicon-arrow-right\"></span> Next</button>\n                      </div>\n\n</div>\n</form>\n"

/***/ }),

/***/ "../../../../../src/app/deploy/deploy.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DeployComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_formData_service__ = __webpack_require__("../../../../../src/app/data/formData.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__myservice_service__ = __webpack_require__("../../../../../src/app/myservice.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DeployComponent = (function () {
    function DeployComponent(router, formDataService, appService) {
        var _this = this;
        this.router = router;
        this.formDataService = formDataService;
        this.appService = appService;
        this.title = 'Target Deployment';
        this.radio = '';
        appService.myhost.subscribe(function (data) {
            _this.Hname = data;
        });
    }
    DeployComponent.prototype.onRadioButtonClick = function (value) {
        this.radio = value;
        console.log(this.radio);
    };
    DeployComponent.prototype.ngOnInit = function () {
        this.deployType = this.formDataService.getDeploy();
        console.log('Deploy feature loaded!');
    };
    DeployComponent.prototype.save = function (form) {
        // if (!form.valid) {
        //     return false;
        // }
        this.formDataService.setDeploy(this.deployType);
        return true;
    };
    DeployComponent.prototype.goToPrevious = function (form) {
        if (this.save(form)) {
            this.router.navigate(['/address']);
        }
    };
    DeployComponent.prototype.goToNext = function (form) {
        if (this.save(form)) {
            this.router.navigate(['/result']);
        }
    };
    return DeployComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('nameRef'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */]) === "function" && _a || Object)
], DeployComponent.prototype, "nameRef", void 0);
DeployComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'mt-wizard-deploy',
        template: __webpack_require__("../../../../../src/app/deploy/deploy.component.html"),
        styles: [__webpack_require__("../../../../../src/app/deploy/deploy.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__data_formData_service__["a" /* FormDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__data_formData_service__["a" /* FormDataService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__myservice_service__["a" /* MyserviceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__myservice_service__["a" /* MyserviceService */]) === "function" && _d || Object])
], DeployComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=deploy.component.js.map

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".col-md-6{\r\n  margin-left: 35%;\r\n  }\r\n\r\n  .footer{\r\n  position: absolute;\r\n  bottom:0;\r\n  width: 100%;\r\n  height: 50px;\r\n  background-color: #222222;\r\n  }\r\n  a{\r\n  color: white;\r\n  }\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Copyright -->\n<footer id=\"sticky-footer\" class=\"py-2 text-white-50 footer \">\n  <div class=\"container text-center\">\n    <small>© 2008-2019, EAIESB Software Solutions or its affiliates\n      <a href=\"https://eaiesb.com\">https://www.eaiesb.com</a>\n    </small>\n  </div>\n</footer>\n    <!-- Copyright -->\n"

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
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

var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    return FooterComponent;
}());
FooterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-footer',
        template: __webpack_require__("../../../../../src/app/footer/footer.component.html"),
        styles: [__webpack_require__("../../../../../src/app/footer/footer.component.css")]
    }),
    __metadata("design:paramtypes", [])
], FooterComponent);

//# sourceMappingURL=footer.component.js.map

/***/ }),

/***/ "../../../../../src/app/myservice.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyserviceService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MyserviceService = (function () {
    function MyserviceService() {
        this.myhost = new __WEBPACK_IMPORTED_MODULE_1_rxjs__["Subject"]();
    }
    MyserviceService.prototype.MyHost = function (name) {
        this.myhost.next(name);
    };
    return MyserviceService;
}());
MyserviceService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], MyserviceService);

//# sourceMappingURL=myservice.service.js.map

/***/ }),

/***/ "../../../../../src/app/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<div  class=\"board-inner\" id=\"status-buttons\">\n    <ul class=\"nav nav-tabs\" id=\"myTab\">\n        <div class=\"liner\"></div>\n\n        <!-- circular user icon -->\n        <li>\n            <a routerLink=\"/personal\"  routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{ exact: true }\" data-toggle=\"tab\" title=\"personal\">\n                <span class=\"round-tabs one\">\n                    <i class=\"fa fa-windows\" aria-hidden=\"true\"></i>\n                </span>\n            </a>\n        </li>\n\n        <!-- circular tasks icon -->\n         <li>\n            <a routerLink=\"/work\" routerLinkActive=\"active\" data-toggle=\"tab\" title=\"work\">\n                <span class=\"round-tabs two\">\n                    <i class='fas fa-memory'></i>\n                </span>\n            </a>\n        </li>\n\n        <!-- circular home icon -->\n        <li>\n            <a routerLink=\"/address\" routerLinkActive=\"active\" data-toggle=\"tab\" title=\"address\">\n                <span class=\"round-tabs three\">\n                  <i class=\"fas fa-th\"></i>\n                </span>\n            </a>\n        </li>\n\n        <li>\n          <a routerLink=\"/deploy\" routerLinkActive=\"active\" data-toggle=\"tab\" title=\"deploy\">\n              <span class=\"round-tabs four\">\n                <i class=\"fas fa-plane-departure\"></i>\n              </span>\n          </a>\n      </li>\n\n        <!-- circular ok icon -->\n        <li>\n            <a routerLink=\"/result\" routerLinkActive=\"active\" data-toggle=\"tab\" title=\"completed\">\n                <span class=\"round-tabs five\">\n                    <i class=\"glyphicon glyphicon-ok\"></i>\n                </span>\n            </a>\n        </li>\n\n    </ul>\n    <div class=\"clearfix\"></div>\n</div>\n\n<!-- Close the Splash screen -->\n<script src=\"assets/js/loading-bars.js\"></script>\n"

/***/ }),

/***/ "../../../../../src/app/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var NavbarComponent = (function () {
    function NavbarComponent() {
        this.display = false;
    }
    NavbarComponent.prototype.cloud = function () {
        this.display = true;
    };
    return NavbarComponent;
}());
NavbarComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'msw-navbar',
        template: __webpack_require__("../../../../../src/app/navbar/navbar.component.html")
    })
], NavbarComponent);

//# sourceMappingURL=navbar.component.js.map

/***/ }),

/***/ "../../../../../src/app/navpro/navpro.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* .navbar-brand\r\n{\r\nfont-size: 20px;\r\ncolor: white;\r\ntext-align: center;\r\n}\r\n.form-inline{\r\nmargin-left: 59.6%;\r\ncolor: white;\r\n} */\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/navpro/navpro.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <nav class=\"navbar navbar-expand-lg navbar-light bg-primary py-0\" style=\"margin-bottom: 0px;\">\n  <div class=\"logo\">\n    <img src=\"https://boomiappinsights.eaiesb.com/bai/images/e_c_white.png;\" alt=\"logo\" style=\"width:30px; margin-left:569px;\">\n  </div>\n  &nbsp;&nbsp;\n  <a class=\"navbar-brand\" href=\"#\" style=\"color: white;\"><b>Provisioning</b></a>\n</nav>\n\n<div style=\"padding: 17px 30px; margin-bottom: -50px; border-radius: 15px;\">\n  <button type=\"button\" class=\"btn1 btn-secondary\" (click)=\"btnClicOnpremises()\" style=\"width: 91px; padding-left: 7px;\">Onpremises</button>\n  <button type=\"button\" class=\"btn1 btn-secondary\" (click)=\"btnClicCloud()\" style=\"margin-left: 0%\">Cloud</button>\n</div> -->\n\n"

/***/ }),

/***/ "../../../../../src/app/navpro/navpro.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavproComponent; });
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

var NavproComponent = (function () {
    function NavproComponent() {
    }
    NavproComponent.prototype.ngOnInit = function () {
    };
    return NavproComponent;
}());
NavproComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-navpro',
        template: __webpack_require__("../../../../../src/app/navpro/navpro.component.html"),
        styles: [__webpack_require__("../../../../../src/app/navpro/navpro.component.css")]
    }),
    __metadata("design:paramtypes", [])
], NavproComponent);

//# sourceMappingURL=navpro.component.js.map

/***/ }),

/***/ "../../../../../src/app/onpremises/onpremises.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/onpremises/onpremises.component.html":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "../../../../../src/app/onpremises/onpremises.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OnpremisesComponent; });
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

var OnpremisesComponent = (function () {
    function OnpremisesComponent() {
    }
    OnpremisesComponent.prototype.ngOnInit = function () {
    };
    return OnpremisesComponent;
}());
OnpremisesComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-onpremises',
        template: __webpack_require__("../../../../../src/app/onpremises/onpremises.component.html"),
        styles: [__webpack_require__("../../../../../src/app/onpremises/onpremises.component.css")]
    }),
    __metadata("design:paramtypes", [])
], OnpremisesComponent);

//# sourceMappingURL=onpremises.component.js.map

/***/ }),

/***/ "../../../../../src/app/personal/personal.component.html":
/***/ (function(module, exports) {

module.exports = "<form #personalForm=\"ngForm\" class=\"editForm\" novalidate>\n    <div class=\"tab-pane fade in active\">\n        <h4 class=\"head text-center\">{{title}}</h4>\n        <br/>\n\n              <!-- <div class=\"modal-header\"> -->\n      <!-- <div class=\"container\"> -->\n        <!-- <div class=\"card\">\n            <div class=\"card-body\"> -->\n        <div class=\"row\" style=\"margin-left: 180px; margin-right: -258px;\">\n\n          <div class=\"col-md-2\">\n            <div class=\"thumbnail\">\n              <!-- <div class=\"card\" style=\"padding-bottom: 10px\">\n                <div class=\"card-body\"> -->\n                  <img src=\"https://cdn3.iconfinder.com/data/icons/humano2/128x128/places/start-here-ubuntuoriginal.png\" alt=\"Nature\"\n                    style=\"width:120px;height:120px; margin-left:4%\">\n                  <div>\n                    <input type=\"radio\" #work=\"ngModel\" required name=\"personal\" value=\"ubuntu16\" [(ngModel)]=\"personalType\" (change)=onRadioButtonClick($event.target.value) style=\"margin-left: 25%\">\n                    <!-- <div style=\"text-align: center\">Ubuntu</div> -->\n                    Ubuntu16\n                  </div>\n                <!-- </div>\n              </div> -->\n            </div>\n          </div>\n\n          <div class=\"col-md-2\">\n            <div class=\"thumbnail\">\n              <!-- <div class=\"card\" style=\"padding-bottom: 10px\">\n                                    <div class=\"card-body\"> -->\n              <img src=\"https://cdn2.iconfinder.com/data/icons/metro-uinvert-dock/128/OS_Ubuntu.png\" alt=\"Fjords\"\n                style=\"width:120px;height:120px; margin-left:3%\">\n              <div>\n                <!-- <div style=\"text-align: center\">CentOS</div> -->\n                <input type=\"radio\" #work=\"ngModel\" required name=\"personal\" value=\"ubuntu18\" [(ngModel)]=\"personalType\" (change)=onRadioButtonClick($event.target.value) style=\"margin-left: 25%\">\n                Ubuntu18\n              </div>\n              <!-- </div> -->\n              <!-- </div> -->\n            </div>\n          </div>\n\n          <div class=\"col-md-2\">\n            <div class=\"thumbnail\">\n              <!-- <div class=\"card\" style=\"padding-bottom: 10px\">\n                <div class=\"card-body\"> -->\n                <img src=\"/assets/images/centos7.png\" alt=\"Nature\"\n                style=\"width:120px;height:120px; margin-left:4%\">\n              <div>\n                <!-- <div style=\"text-align: center\">CentOS</div> -->\n                <input type=\"radio\" #work=\"ngModel\" required name=\"personal\" value=\"centos7\" [(ngModel)]=\"personalType\" (change)=onRadioButtonClick($event.target.value) style=\"margin-left: 25%\">\n                CentOS7\n              </div>\n              <!-- </div>\n              </div> -->\n            </div>\n          </div>\n        </div>\n\n        <div class=\"form-group text-center space-20\">\n\n          <button class=\"btn btn-success btn-outline-rounded\" [disabled]=\"!personalForm.valid\" (click)=\"goToNext(personalForm)\"  style=\"margin-right: 166px; margin-left: 170px;\">\n           <span  class=\"glyphicon glyphicon-arrow-right\" ></span> Next</button>\n        </div>\n\n        <!-- </div>\n          </div> -->\n      <!-- </div> -->\n      <!-- </div> -->\n\n    </div>\n</form>\n"

/***/ }),

/***/ "../../../../../src/app/personal/personal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PersonalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_formData_service__ = __webpack_require__("../../../../../src/app/data/formData.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__myservice_service__ = __webpack_require__("../../../../../src/app/myservice.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PersonalComponent = (function () {
    function PersonalComponent(router, formDataService, appService) {
        var _this = this;
        this.router = router;
        this.formDataService = formDataService;
        this.appService = appService;
        this.title = 'Operating System';
        this.radio = '';
        appService.myhost.subscribe(function (data) {
            _this.Hname = data;
        });
    }
    PersonalComponent.prototype.onRadioButtonClick = function (value) {
        this.radio = value;
        console.log(this.radio);
    };
    PersonalComponent.prototype.ngOnInit = function () {
        this.personalType = this.formDataService.getPersonal();
        console.log('Work feature loaded!');
    };
    PersonalComponent.prototype.save = function (form) {
        if (!form.valid) {
            return false;
        }
        this.formDataService.setPersonal(this.personalType);
        return true;
    };
    PersonalComponent.prototype.goToNext = function (form) {
        if (this.save(form)) {
            // Navigate to the address page
            this.router.navigate(['/work']);
            // this.appService.MyHost(this.Ubuntu);
            // this.appService.MyHost(this.CentOS);
            // this.appService.MyHost(this.RedHat);
            // this.appService.MyHost(this.Windows);
        }
    };
    return PersonalComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('nameRef'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */]) === "function" && _a || Object)
], PersonalComponent.prototype, "nameRef", void 0);
PersonalComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'mt-wizard-personal',
        template: __webpack_require__("../../../../../src/app/personal/personal.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__data_formData_service__["a" /* FormDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__data_formData_service__["a" /* FormDataService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__myservice_service__["a" /* MyserviceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__myservice_service__["a" /* MyserviceService */]) === "function" && _d || Object])
], PersonalComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=personal.component.js.map

/***/ }),

/***/ "../../../../../src/app/result/result.component.html":
/***/ (function(module, exports) {

module.exports = "\n<!-- <div class=\"tab-pane fade in active\" style=\"padding-top: 0px; padding-bottom: 0px; padding-left: 0px;\"> -->\n  <div class=\"tab-pane fade in active\">\n    <h3 class=\"head text-center\">{{title}}</h3>\n    <!-- <div class='row'> -->\n        <div class='col-xs-offset-1 col-xs-10 col-sm-offset-3 col-sm-8 col-md-offset-4 col-md-8'>\n            <div class=\"row\">\n                <div class='col-xs-3 col-sm-3'>\n                    <div class=\"form-group\">\n                        <label class=\"control-label\" for=\"address\">OperatingSystem: </label>\n                    </div>\n                </div>\n                <div class='col-xs-9 col-sm-9'>\n                    {{formData.personal}}\n                </div>\n          </div>\n            <!-- <div class=\"row\">\n                <div class='col-xs-3 col-sm-3'>\n                    <div class=\"form-group\">\n                        <label class=\"control-label\" for=\"name\">Hostname: </label>\n                    </div>\n                </div>\n                <div class='col-xs-9 col-sm-9'>\n                    {{formData.hostname}}\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class='col-xs-3 col-sm-3'>\n                    <div class=\"form-group\">\n                        <label class=\"control-label\" for=\"email\">IPAddress: </label>\n                    </div>\n                </div>\n                <div class='col-xs-9 col-sm-9'>\n                    {{formData.ipaddress}}\n                </div>\n           </div> -->\n            <div class=\"row\">\n                <div class='col-xs-3 col-sm-3'>\n                    <div class=\"form-group\">\n                        <label class=\"control-label\" for=\"work\">InstanceMemory: </label>\n                    </div>\n                </div>\n                <div class='col-xs-9 col-sm-9'>\n                  {{formData.memory}}\n                </div>\n           </div>\n           <div class=\"row\">\n              <div class='col-xs-3 col-sm-3'>\n                  <div class=\"form-group\">\n                      <label class=\"control-label\" for=\"work\">NotificationId: </label>\n                  </div>\n              </div>\n              <div class='col-xs-9 col-sm-9'>\n                {{formData.email}}\n              </div>\n          </div>\n          <div class=\"row\">\n              <div class='col-xs-3 col-sm-3'>\n                  <div class=\"form-group\">\n                      <label class=\"control-label\" for=\"work\">TargetEnvironment: </label>\n                  </div>\n              </div>\n              <div class='col-xs-9 col-sm-9'>\n                {{formData.deploy}}\n                {{formData.postgresql}}\n              </div>\n          </div>\n          <!-- <div class=\"row\">\n            <div class='col-xs-3 col-sm-2'>\n                <div class=\"form-group\">\n                    <label class=\"control-label\" for=\"address\">Core Application: </label>\n                </div>\n            </div>\n            <div class='col-xs-9 col-sm-10'>\n                Java-{{formData.java_version}} & Python-{{formData.Python}}\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class='col-xs-3 col-sm-2'>\n                <div class=\"form-group\">\n                    <label class=\"control-label\" for=\"address\">BigData Application: </label>\n                </div>\n            </div>\n            <div class='col-xs-9 col-sm-10'>\n               Spark-{{formData.spark}} & Hadoop-{{formData.hadoop}}\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class='col-xs-3 col-sm-2'>\n                <div class=\"form-group\">\n                    <label class=\"control-label\" for=\"address\">SQL Application: </label>\n                </div>\n            </div>\n            <div class='col-xs-9 col-sm-10'>\n              MySql-{{formData.mysql}} & Postgresql-{{formData.postgresql}}\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class='col-xs-3 col-sm-2'>\n                <div class=\"form-group\">\n                    <label class=\"control-label\" for=\"address\">NoSQL Application: </label>\n                </div>\n            </div>\n            <div class='col-xs-9 col-sm-10'>\n              Hbase-{{formData.hbase}} & MongoDb-{{formData.mongodb}} & Cassandra-{{formData.cassandra}}\n            </div>\n          </div> -->\n        </div>\n    <!-- </div> -->\n\n    <div class=\"text-center\">\n        <button type=\"button\" class=\"btn btn-success btn-outline-rounded\" data-toggle=\"modal\" data-target=\"#myModal\" (click)=\"getClickedProject()\">Provision<span style=\"margin-left:10px;\" class=\"glyphicon glyphicon-arrow-right\"></span></button>\n        <!-- <button type=\"button\" class=\"btn btn-success btn-outline-rounded\" data-toggle=\"modal\" data-target=\"#myModal\" (click)=\"getClickedProject()\" style=\"margin: -12px 0px;\">Provision<span style=\"margin-left:10px;\" class=\"glyphicon glyphicon-arrow-right\"></span></button> -->\n    </div>\n\n</div>\n\n<div class=\"modal\" id=\"myModal\" role=\"dialog\">\n    <div class=\"modal-dialog\" role=\"document\">\n      <div class=\"modal-content\">\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n            <span aria-hidden=\"true\" style=\"margin-left: 450px;\">&times;</span>\n          </button>\n        <div class=\"modal-body text-center\">\n        Provisioning is initiated you will be notified when it is ready!\n        </div>\n        <!-- <button class=\"button button5\" data-dismiss=\"modal\">OK</button> -->\n        <button class=\"btn btn-success btn-outline-rounded\" data-dismiss=\"modal\" style=\"width: 40px; margin-left: 216px; padding-left: 28px; padding-right: 40px;\">OK</button>\n      </div>\n    </div>\n  </div>\n\n\n\n\n\n\n\n"

/***/ }),

/***/ "../../../../../src/app/result/result.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResultComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_formData_model__ = __webpack_require__("../../../../../src/app/data/formData.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__data_formData_service__ = __webpack_require__("../../../../../src/app/data/formData.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__myservice_service__ = __webpack_require__("../../../../../src/app/myservice.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ResultComponent = (function () {
    function ResultComponent(formDataService, appService, httpClient) {
        var _this = this;
        this.formDataService = formDataService;
        this.appService = appService;
        this.httpClient = httpClient;
        this.title = 'Review The Details';
        this.isFormValid = false;
        appService.myhost.subscribe(function (data) {
            _this.Hname = data;
        });
    }
    ResultComponent.prototype.ngOnInit = function () {
        this.formData = this.formDataService.getFormData();
        this.isFormValid = this.formDataService.isFormValid();
        console.log('Result feature loaded!');
    };
    ResultComponent.prototype.submit = function () {
        alert('Excellent Job!');
        this.formData = this.formDataService.resetFormData();
        this.isFormValid = false;
    };
    ResultComponent.prototype.getClickedProject = function () {
        var _this = this;
        console.log(this.formData.personal);
        console.log(this.formData.java_version);
        console.log(this.formData.hadoop);
        console.log(this.formData.hostname);
        console.log(this.formData.ipaddress);
        console.log(this.formData.memory);
        console.log(this.formData.email);
        // console.log (this.formData.Ubuntu);
        // console.log (this.formData.CentOS);
        // console.log (this.formData.RedHat);
        // console.log (this.formData.Windows);
        console.log(this.formData.mysql);
        console.log(this.formData.hbase);
        console.log(this.formData.cassandra);
        console.log(this.formData.Python);
        console.log(this.formData.spark);
        console.log(this.formData.mongodb);
        console.log(this.formData.deploy);
        this.httpClient.post('http://10.0.0.7:8090/on_premises/api/clouddeployment', {
            "Operating_system": this.formData.personal,
            "instancetypes": this.formData.memory,
            "target_deployment": this.formData.deploy,
            "Java": this.formData.java_version,
            "Hadoop": this.formData.hadoop,
            "Hbase": this.formData.hbase,
            "postgresql": this.formData.postgresql,
            "Cassandra": this.formData.cassandra,
            "Mongodb": this.formData.mongodb,
            "Mysql": this.formData.mysql,
            "Python": this.formData.Python,
            "Spark": this.formData.spark,
            "notificationid": this.formData.email
        })
            .subscribe(function (res2) {
            _this.vagrantup = res2;
            console.log(res2);
        });
    };
    return ResultComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__data_formData_model__["a" /* FormData */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__data_formData_model__["a" /* FormData */]) === "function" && _a || Object)
], ResultComponent.prototype, "formData", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('nameRef'),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */]) === "function" && _b || Object)
], ResultComponent.prototype, "nameRef", void 0);
ResultComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'mt-wizard-result',
        template: __webpack_require__("../../../../../src/app/result/result.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__data_formData_service__["a" /* FormDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__data_formData_service__["a" /* FormDataService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__myservice_service__["a" /* MyserviceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__myservice_service__["a" /* MyserviceService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]) === "function" && _e || Object])
], ResultComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=result.component.js.map

/***/ }),

/***/ "../../../../../src/app/work/work.component.html":
/***/ (function(module, exports) {

module.exports = "<form #workForm=\"ngForm\" class=\"editForm\" novalidate>\n  <div class=\"form-horizontal\">\n    <div class=\"tab-pane fade in active\">\n      <h4 class=\"head text-center\">{{title}}</h4>\n      <br />\n\n    <!-- <div class='row'> -->\n      <div class='col-xs-offset-1 col-xs-10 col-sm-offset-2 col-sm-8'>\n        <!-- <div class=\"row\">\n            <div class='col-xs-12 col-sm-6'>\n                <div class=\"form-group\" style=\"margin-left: -18px; margin-right: -2px;\">\n                    <label class=\"control-label\" for=\"hostname\">Hostname</label>\n                    <div class=\"input-group-prepend\">\n                        <span class=\"input-group-text\" style=\"border-radius: 7px; width: 39px; font-size: 2rem; padding: 0.375rem 0.75rem;\"><img src=\"/assets/images/hostname.png\" style=\"width:25px;\"></span>\n                    <input class=\"form-control input-md\" #hostname=\"ngModel\" required id=\"hostname\" name=\"hostname\" type=\"text\" placeholder=\"example.eaiesb.com\" [(ngModel)]=\"workType.hostname\" style=\"border-radius: 7px;\">\n                  </div>\n\n                </div>\n            </div>\n            <div class='col-xs-12 col-sm-6'>\n                <div class=\"form-group\" style=\"margin-left: -18px; margin-right: -2px;\">\n                    <label class=\"control-label\" for=\"ipaddress\">IP Address</label>\n                    <div class=\"input-group-prepend\">\n                    <span class=\"input-group-text\" style=\"border-radius: 7px; width: 38px; font-size: 2rem; padding: 0.375rem 0.75rem;\"><img src=\"/assets/images/ipaddress.png\" style=\"width:22px;\"></span>\n                    <input class=\"form-control input-md\" #ipaddress=\"ngModel\" required id=\"ipaddress\" name=\"ipaddress\" type=\"text\" placeholder=\"IP range 10.0.0.25-10.0.0.50\" [(ngModel)]=\"workType.ipaddress\" style=\"border-radius: 7px; width: 87%;\">\n                  </div>\n\n                </div>\n            </div>\n        </div> -->\n\n\n\n          <!-- <div class=\"range range-primary\">\n            <div class=\"slidecontainer\"> -->\n              <!-- <div class=\"row\">\n                <label style=\"margin-left: 15px\">1024</label>\n                <input class=\"slider\" name=\"memory\" type=\"range\" min=\"1024\" max=\"20480\" value=\"0\" id=\"myRange\" step=\"512\" [(ngModel)]=\"workType.memory\" style=\"width: 70%; display: inline-block;\">\n                MB<input class=\"box\" type=\"number\" data-type=\"range\" name=\"memory\" step=\"512\" value=\"{{memory}}\" min=\"1024\" max=\"20480\" [(ngModel)]=\"workType.memory\">\n              </div> -->\n                    <!-- </div>\n                        </div> -->\n\n              <div class=\"row\">\n                <div class='col-xs-12 col-sm-6'>\n                  <div class=\"form-group\" style=\"margin-left: -18px; margin-right: -2px;\">\n                    <label class=\"control-label\" for=\"memory\">Instance Types</label>\n                    <div class=\"input-group-prepend\">\n                      <span class=\"input-group-text\" style=\"border-radius: 7px; width: 40px; font-size: 2rem; padding: 0.375rem 0.75rem;\"><i class='fas fa-memory'></i></span>\n                      <select [(ngModel)]=\"workType.memory\" required id=\"memory\" name=\"memory\" style=\"padding: 4px; width: 71%; border-radius: 7px; height: 34px;\">\n                        <option>nano</option>\n                        <option>micro</option>\n                        <option>small</option>\n                        <option>medium</option>\n                        <option>large</option>\n                      </select>\n                      <!-- <button class=\"button button6\" style=\"border-radius: 7px; font-size: 18px;\">GB</button> -->\n                    </div>\n                    <!-- <div class=\"alert alert-danger\" [hidden]=\"memory.valid\" style=\"padding: 2px;\"> Select Memory As GB</div> -->\n                  </div>\n                </div>\n\n                <div class='col-xs-12 col-sm-6'>\n                  <div class=\"form-group\" style=\"margin-left: -18px; margin-right: -2px;\">\n                    <label class=\"control-label\" for=\"email\">Notification Id</label>\n                    <div class=\"input-group-prepend\">\n                      <span class=\"input-group-text\"\n                        style=\"border-radius: 7px; width: 38px; font-size: 2rem; padding: 0.375rem 0.75rem;\"><i class=\"fa fa-envelope\"\n                          aria-hidden=\"true\"></i></span>\n                      <input class=\"form-control input-md\" #email=\"ngModel\" required id=\"email\" name=\"email\" type=\"text\"\n                        placeholder=\"example@eaiesb.com\" [(ngModel)]=\"workType.email\" style=\"border-radius: 7px; width: 87%;\">\n                    </div>\n                    <!-- <div class=\"alert alert-danger\" [hidden]=\"email.valid\" style=\"padding: 2px;\"> Enter Valid Email Id</div> -->\n                  </div>\n                </div>\n              </div>\n\n\n        <div class=\"form-group text-center space-20\" style=\"margin-right: 124px; margin-left: 124px;\">\n\n            <button class=\"btn btn-outline-rounded btn-default\" (click)=\"goToPrevious(workForm)\" style=\"width: 45.8%; margin: 20px -2px;\"><span class=\"glyphicon glyphicon-arrow-left\"></span> Previous</button>\n            <button class=\"btn btn-success btn-outline-rounded\" [disabled]=\"!workForm.valid\" (click)=\"goToNext(workForm)\">Next<span style=\"margin-left:5px;\" class=\"glyphicon glyphicon-arrow-right\"></span></button>\n\n            <!-- <button class=\"btn btn-outline-rounded btn-default\" (click)=\"goToPrevious(addressForm)\" style=\"width: 19.8%; margin: 20px -2px;\"><span class=\"glyphicon glyphicon-arrow-left\"></span> Previous</button>\n            <button class=\"btn btn-outline-rounded btn-success\" [disabled]=\"!addressForm.valid\" (click)=\"goToNext(addressForm)\"><span style=\"margin-left:10px;\" class=\"glyphicon glyphicon-arrow-right\"></span> Next</button> -->\n\n        </div>\n\n</div>\n</div>\n</div>\n</form>\n"

/***/ }),

/***/ "../../../../../src/app/work/work.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WorkComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_formData_service__ = __webpack_require__("../../../../../src/app/data/formData.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__myservice_service__ = __webpack_require__("../../../../../src/app/myservice.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { Work } from '../data/formData.model';


var WorkComponent = (function () {
    function WorkComponent(router, formDataService, appService) {
        this.router = router;
        this.formDataService = formDataService;
        this.appService = appService;
        this.title = 'Configuration Details';
        // hostname = '';
        // ipaddress = '';
        this.email = '';
        // Memory = '';
        this.memory = 1024;
        this.loading = false;
    }
    // shareHost() {
    //   return this.hostname;
    // }
    WorkComponent.prototype.onMemorySelect = function (value) {
        this.memory = value;
        console.log(this.memory);
    };
    // onSubmit() {
    //   this.appService.MyHost(this.hostname);
    // }
    // testing multi component
    WorkComponent.prototype.ngOnInit = function () {
        this.workType = this.formDataService.getWork();
        console.log('Personal feature loaded!');
    };
    WorkComponent.prototype.save = function (form) {
        if (!form.valid) {
            return false;
        }
        this.formDataService.setWork(this.workType);
        return true;
    };
    WorkComponent.prototype.goToPrevious = function (form) {
        if (this.save(form)) {
            // Navigate to the personal page
            this.router.navigate(['/personal']);
        }
    };
    WorkComponent.prototype.goToNext = function (form) {
        if (this.save(form)) {
            // Navigate to the work page
            this.router.navigate(['/address']);
            // this.appService.MyHost(this.hostname);
        }
        this.loading = true;
        console.log(this.memory);
        console.log(this.email);
    };
    return WorkComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('nameRef'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */]) === "function" && _a || Object)
], WorkComponent.prototype, "nameRef", void 0);
WorkComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'mt-wizard-work',
        template: __webpack_require__("../../../../../src/app/work/work.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__data_formData_service__["a" /* FormDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__data_formData_service__["a" /* FormDataService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__myservice_service__["a" /* MyserviceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__myservice_service__["a" /* MyserviceService */]) === "function" && _d || Object])
], WorkComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=work.component.js.map

/***/ }),

/***/ "../../../../../src/app/workflow/workflow-guard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WorkflowGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__workflow_service__ = __webpack_require__("../../../../../src/app/workflow/workflow.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WorkflowGuard = (function () {
    function WorkflowGuard(router, workflowService) {
        this.router = router;
        this.workflowService = workflowService;
    }
    WorkflowGuard.prototype.canActivate = function (route, state) {
        var path = route.routeConfig.path;
        return this.verifyWorkFlow(path);
    };
    WorkflowGuard.prototype.verifyWorkFlow = function (path) {
        console.log("Entered '" + path + "' path.");
        // If any of the previous steps is invalid, go back to the first invalid step
        var firstPath = this.workflowService.getFirstInvalidStep(path);
        if (firstPath.length > 0) {
            console.log("Redirected to '" + firstPath + "' path which it is the first invalid step.");
            var url = "/" + firstPath;
            this.router.navigate([url]);
            return false;
        }
        ;
        return true;
    };
    return WorkflowGuard;
}());
WorkflowGuard = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__workflow_service__["a" /* WorkflowService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__workflow_service__["a" /* WorkflowService */]) === "function" && _b || Object])
], WorkflowGuard);

var _a, _b;
//# sourceMappingURL=workflow-guard.service.js.map

/***/ }),

/***/ "../../../../../src/app/workflow/workflow.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return STEPS; });
var STEPS = {
    personal: 'personal',
    work: 'work',
    address: 'address',
    deploy: 'deploy',
    result: 'result'
};
//# sourceMappingURL=workflow.model.js.map

/***/ }),

/***/ "../../../../../src/app/workflow/workflow.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WorkflowService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__workflow_model__ = __webpack_require__("../../../../../src/app/workflow/workflow.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var WorkflowService = (function () {
    function WorkflowService() {
        this.workflow = [
            { step: __WEBPACK_IMPORTED_MODULE_1__workflow_model__["a" /* STEPS */].personal, valid: false },
            { step: __WEBPACK_IMPORTED_MODULE_1__workflow_model__["a" /* STEPS */].work, valid: false },
            { step: __WEBPACK_IMPORTED_MODULE_1__workflow_model__["a" /* STEPS */].address, valid: false },
            { step: __WEBPACK_IMPORTED_MODULE_1__workflow_model__["a" /* STEPS */].deploy, valid: false },
            { step: __WEBPACK_IMPORTED_MODULE_1__workflow_model__["a" /* STEPS */].result, valid: false }
        ];
    }
    WorkflowService.prototype.validateStep = function (step) {
        // If the state is found, set the valid field to true
        var found = false;
        for (var i = 0; i < this.workflow.length && !found; i++) {
            if (this.workflow[i].step === step) {
                found = this.workflow[i].valid = true;
            }
        }
    };
    WorkflowService.prototype.resetSteps = function () {
        // Reset all the steps in the Workflow to be invalid
        this.workflow.forEach(function (element) {
            element.valid = false;
        });
    };
    WorkflowService.prototype.getFirstInvalidStep = function (step) {
        // If all the previous steps are validated, return blank
        // Otherwise, return the first invalid step
        var found = false;
        var valid = true;
        var redirectToStep = '';
        for (var i = 0; i < this.workflow.length && !found && valid; i++) {
            var item = this.workflow[i];
            if (item.step === step) {
                found = true;
                redirectToStep = '';
            }
            else {
                valid = item.valid;
                redirectToStep = item.step;
            }
        }
        return redirectToStep;
    };
    return WorkflowService;
}());
WorkflowService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])()
], WorkflowService);

//# sourceMappingURL=workflow.service.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
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

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map
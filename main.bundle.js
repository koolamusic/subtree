webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".wrapper {\r\n    width: 96%;\r\n    padding: 10px;\r\n}\r\n\r\nbody {\r\n    height: 100%;\r\n    width: 100%;\r\n}\r\n\r\nheader {\r\n    text-align: center;\r\n}\r\n\r\n.content {\r\n    margin: 20px auto;\r\n    width: 700px;\r\n    padding: 50px;\r\n    border: 1px solid #ccc;\r\n}\r\n\r\n.content-items {\r\n    border-top: 1px solid #ccc;\r\n}\r\n\r\n.button-box {\r\n    text-align: center;\r\n}\r\n\r\n.card-action button {\r\n    float: right;\r\n}\r\n\r\nfooter {\r\n    text-align: center;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\r\n    <header class=\"row\">\r\n        <h1>Registration Portal</h1>\r\n    </header>\r\n    <section class=\"content\">\r\n        <div class=\"row\">\r\n            <div class=\"col\">\r\n                <form [formGroup]=\"resourceFormGroup\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col s6\">\r\n                            <input type=\"text\" formControlName=\"firstName\" placeholder=\"First Name\">\r\n                        </div>\r\n                        <div class=\"col s6\">\r\n                            <input type=\"text\" formControlName=\"lastName\" placeholder=\"Last Name\">\r\n                        </div>\r\n                        <div class=\"col s12\">\r\n                            <input type=\"email\" formControlName=\"email\" placeholder=\"Enter Your Email\">\r\n                        </div>\r\n                        <div class=\"col s12\">\r\n                            <input type=\"text\" formControlName=\"address\" placeholder=\"Enter Your Address\">\r\n                        </div>\r\n                        <div class=\"col s12\">\r\n                            <input type=\"text\" formControlName=\"faculty\" placeholder=\"Enter Your Faculty\">\r\n                        </div>\r\n                        <div class=\"col s6\">\r\n                            <input type=\"text\" formControlName=\"department\" placeholder=\"Enter Department\">\r\n                        </div>\r\n                        <div class=\"col s6\">\r\n                            <input type=\"number\" formControlName=\"level\" placeholder=\"Enter Your Level\">\r\n                        </div>\r\n                        <div class=\"col s12\">\r\n                            <input type=\"text\" formControlName=\"session\" placeholder=\"Enter Your Current Session\">\r\n                        </div>\r\n                    </div>\r\n                </form>\r\n                <div class=\"button-box\">\r\n                    <button (click)=\"onClickCreate(resourceFormGroup.valid, resourceFormGroup.value);\" class=\"btn waves-effect waves-light\">\r\n                        Register\r\n                    </button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"row content-items\" *ngIf=\"resources.length > 0\">\r\n            <div class=\"col 6\" *ngFor=\"let resource of resources; let i = index;\">\r\n                <div class=\"card horizontal\">\r\n                    <div class=\"card-stacked\">\r\n                        <div class=\"card-content\">\r\n                            <p>FullName: {{ resource.firstName }} {{ resource.lastName }} </p>\r\n                            <p>Faculty: {{ resource.faculty }} </p>\r\n                            <p>Department: {{ resource.department }} </p>\r\n                            <p>Current Level: {{ resource.level }} </p>\r\n                            <p>Session: {{ resource.session }} </p>\r\n                            <p>Email: {{ resource.email }} </p>\r\n                            <p>Address: {{ resource.address }} </p>\r\n                        </div>\r\n                        <div class=\"card-action\">\r\n                            <button (click)=\"onClickDelete(resource);\" class=\"btn-floating red waves-effect waves-light\">\r\n                                    <i class=\"material-icons\">delete</i>\r\n                                    </button>\r\n                            <button (click)=\"onClickEdit(resource);\" class=\"btn-floating blue waves-effect waves-light\">\r\n                                <i class=\"material-icons\">edit</i>\r\n                                    </button>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <!-- <ul>\r\n                <li *ngFor=\"let resource of resources; let i = index;\"> {{ resource.name }} {{ resource.faculty }} <button (click)=\"onClickEdit(resource);\">Edit</button></li>\r\n            </ul> -->\r\n        </div>\r\n    </section>\r\n    <footer>\r\n\r\n        <p class=\"love\">Made with <i class=\"material-icons\">favorite</i> by Omoike Sarah</p>\r\n        &#169; 2017 Sayrai Inc. All rights reserved\r\n    </footer>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_student_service__ = __webpack_require__("../../../../../src/app/services/student.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_toastr_ng2_toastr__ = __webpack_require__("../../../../ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_toastr_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng2_toastr_ng2_toastr__);
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
    function AppComponent(toastr, _fb, _studentService, vcr) {
        this.toastr = toastr;
        this._fb = _fb;
        this._studentService = _studentService;
        this.resources = [];
        this.title = 'app';
        this.selectedItem = {};
        this.toastr.setRootViewContainerRef(vcr);
    }
    AppComponent.prototype.ngOnInit = function () {
        console.log('Init');
        this.resourceFormGroup = this._fb.group({
            firstName: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required]],
            lastName: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required]],
            faculty: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required]],
            department: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required]],
            level: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required]],
            session: [''[__WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required]],
            email: [''[__WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required]],
            address: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required]]
        });
        this.getStudents();
    };
    AppComponent.prototype.onClickCreate = function (valid, value) {
        var _this = this;
        if (valid) {
            console.log(value);
            if (this.selectedItem._id === undefined) {
                // SAve into the DB
                this._studentService.createStudent(value).subscribe(function (res) {
                    console.log(res);
                    _this.toastr.success('Registration is Successfull', 'Registered Successfully!');
                    _this.resourceFormGroup.reset();
                    _this.getStudents();
                });
            }
            else {
                // SAve into the DB
                value._id = this.selectedItem._id;
                console.log(value);
                this._studentService.updateStudent(value).subscribe(function (res) {
                    console.log(res);
                    _this.resourceFormGroup.reset();
                    _this.selectedItem = {};
                    _this.getStudents();
                });
            }
        }
        else {
            console.log('Form not valid');
        }
    };
    AppComponent.prototype.getStudents = function () {
        var _this = this;
        this._studentService.getStudent().subscribe(function (res) {
            console.log(res);
            if (res.statusCode === 200) {
                _this.resources = res.data;
            }
        });
    };
    AppComponent.prototype.onClickEdit = function (resource) {
        console.log(resource);
        this.selectedItem = resource;
        this.resourceFormGroup.controls['firstName'].setValue(resource.firstName);
        this.resourceFormGroup.controls['lastName'].setValue(resource.lastName);
        this.resourceFormGroup.controls['faculty'].setValue(resource.faculty);
        this.resourceFormGroup.controls['department'].setValue(resource.department);
        this.resourceFormGroup.controls['level'].setValue(resource.level);
        this.resourceFormGroup.controls['session'].setValue(resource.session);
        this.resourceFormGroup.controls['email'].setValue(resource.email);
        this.resourceFormGroup.controls['address'].setValue(resource.address);
    };
    AppComponent.prototype.onClickDelete = function (resource) {
        var _this = this;
        console.log(resource);
        this._studentService.deleteStudent(resource._id).subscribe(function (res) {
            _this.toastr.success('Item deleted Successfully', 'Deleted!');
            console.log(res);
            _this.getStudents();
        });
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ng2_toastr_ng2_toastr__["ToastsManager"],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_2__services_student_service__["a" /* StudentService */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_student_service__ = __webpack_require__("../../../../../src/app/services/student.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng2_toastr_ng2_toastr__ = __webpack_require__("../../../../ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng2_toastr_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_ng2_toastr_ng2_toastr__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["BrowserModule"],
                __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_7_ng2_toastr_ng2_toastr__["ToastModule"].forRoot(),
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_http__["c" /* HttpModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_3__services_student_service__["a" /* StudentService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/services/student.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StudentService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//import 'rxjs/Rx';
var StudentService = (function () {
    function StudentService(http) {
        this.http = http;
        this.apiURl = 'http://localhost:8080/api';
    }
    StudentService.prototype.getStudent = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.get(this.apiURl + '/student', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    StudentService.prototype.createStudent = function (data) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post(this.apiURl + '/student', data, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    StudentService.prototype.updateStudent = function (data) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post(this.apiURl + '/student/' + data._id, data, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    StudentService.prototype.deleteStudent = function (id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.delete(this.apiURl + '/student/' + id, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    StudentService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], StudentService);
    return StudentService;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map
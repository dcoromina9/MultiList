function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-movies-details-movies-details-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/movies-details/movies-details.page.html":
  /*!*****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/movies-details/movies-details.page.html ***!
    \*****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesMoviesDetailsMoviesDetailsPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>{{content?.Title}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-card *ngIf=\"content\">\n    <ion-card-header text-center>\n      <ion-card-title>{{content?.Title}}</ion-card-title>\n      <ion-card-subtitle>\n        {{content.Year}} {{content.Language}}\n      </ion-card-subtitle>\n    </ion-card-header>\n    <ion-card-content>\n      <img src=\"{{content.Poster}}\" class=\"info-img\"> {{content.Plot}}\n      <ion-item lines=\"none\">\n        <ion-icon name=\"star-half\" slot=\"start\"></ion-icon>\n        <ion-label> {{content?.imdbRating}}\n        </ion-label>\n      </ion-item>\n      <ion-item lines=\"none\">\n        <ion-icon name=\"clipboard\" slot=\"start\"></ion-icon>\n        <ion-label text-wrap> {{content?.Director}}\n        </ion-label>\n      </ion-item>\n      <ion-item lines=\"none\">\n        <ion-icon name=\"people\" slot=\"start\"></ion-icon>\n        <ion-label text-wrap> {{content?.Actors}}\n        </ion-label>\n      </ion-item>\n    </ion-card-content>\n  </ion-card>\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/pages/movies-details/movies-details-routing.module.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/pages/movies-details/movies-details-routing.module.ts ***!
    \***********************************************************************/

  /*! exports provided: MoviesDetailsPageRoutingModule */

  /***/
  function srcAppPagesMoviesDetailsMoviesDetailsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MoviesDetailsPageRoutingModule", function () {
      return MoviesDetailsPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _movies_details_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./movies-details.page */
    "./src/app/pages/movies-details/movies-details.page.ts");

    var routes = [{
      path: '',
      component: _movies_details_page__WEBPACK_IMPORTED_MODULE_3__["MoviesDetailsPage"]
    }];

    var MoviesDetailsPageRoutingModule = function MoviesDetailsPageRoutingModule() {
      _classCallCheck(this, MoviesDetailsPageRoutingModule);
    };

    MoviesDetailsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], MoviesDetailsPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/movies-details/movies-details.module.ts":
  /*!***************************************************************!*\
    !*** ./src/app/pages/movies-details/movies-details.module.ts ***!
    \***************************************************************/

  /*! exports provided: MoviesDetailsPageModule */

  /***/
  function srcAppPagesMoviesDetailsMoviesDetailsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MoviesDetailsPageModule", function () {
      return MoviesDetailsPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _movies_details_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./movies-details-routing.module */
    "./src/app/pages/movies-details/movies-details-routing.module.ts");
    /* harmony import */


    var _movies_details_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./movies-details.page */
    "./src/app/pages/movies-details/movies-details.page.ts");

    var MoviesDetailsPageModule = function MoviesDetailsPageModule() {
      _classCallCheck(this, MoviesDetailsPageModule);
    };

    MoviesDetailsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _movies_details_routing_module__WEBPACK_IMPORTED_MODULE_5__["MoviesDetailsPageRoutingModule"]],
      declarations: [_movies_details_page__WEBPACK_IMPORTED_MODULE_6__["MoviesDetailsPage"]]
    })], MoviesDetailsPageModule);
    /***/
  },

  /***/
  "./src/app/pages/movies-details/movies-details.page.scss":
  /*!***************************************************************!*\
    !*** ./src/app/pages/movies-details/movies-details.page.scss ***!
    \***************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesMoviesDetailsMoviesDetailsPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".info-img {\n  max-height: 50vh;\n  max-width: 50vh;\n  padding: 5px;\n}\n\n@media (max-width: 800px) {\n  .info-img {\n    max-height: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbW92aWVzLWRldGFpbHMvQzpcXFVzZXJzXFxEYXZpZFxcRGVza3RvcFxcUHJvamVjdGVcXE11bHRpTGlzdC9zcmNcXGFwcFxccGFnZXNcXG1vdmllcy1kZXRhaWxzXFxtb3ZpZXMtZGV0YWlscy5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL21vdmllcy1kZXRhaWxzL21vdmllcy1kZXRhaWxzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QUNBSjs7QURHRTtFQUNFO0lBQ0UsZ0JBQUE7RUNBSjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbW92aWVzLWRldGFpbHMvbW92aWVzLWRldGFpbHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiICBcclxuLmluZm8taW1ne1xyXG4gICAgbWF4LWhlaWdodDogNTB2aDtcclxuICAgIG1heC13aWR0aDogNTB2aDtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICB9XHJcbiAgXHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDgwMHB4KXtcclxuICAgIC5pbmZvLWltZ3tcclxuICAgICAgbWF4LWhlaWdodDogMTAwJTtcclxuICAgIH1cclxuICB9IiwiLmluZm8taW1nIHtcbiAgbWF4LWhlaWdodDogNTB2aDtcbiAgbWF4LXdpZHRoOiA1MHZoO1xuICBwYWRkaW5nOiA1cHg7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA4MDBweCkge1xuICAuaW5mby1pbWcge1xuICAgIG1heC1oZWlnaHQ6IDEwMCU7XG4gIH1cbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/pages/movies-details/movies-details.page.ts":
  /*!*************************************************************!*\
    !*** ./src/app/pages/movies-details/movies-details.page.ts ***!
    \*************************************************************/

  /*! exports provided: MoviesDetailsPage */

  /***/
  function srcAppPagesMoviesDetailsMoviesDetailsPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MoviesDetailsPage", function () {
      return MoviesDetailsPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_movie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/movie.service */
    "./src/app/services/movie.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var MoviesDetailsPage = /*#__PURE__*/function () {
      function MoviesDetailsPage(movieService, activatedRoute) {
        _classCallCheck(this, MoviesDetailsPage);

        this.movieService = movieService;
        this.activatedRoute = activatedRoute;
        this.content = null;
      }

      _createClass(MoviesDetailsPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          var id = this.activatedRoute.snapshot.paramMap.get('id');
          this.movieService.getDetails(id).subscribe(function (result) {
            return _this.content = result;
          });
        }
      }]);

      return MoviesDetailsPage;
    }();

    MoviesDetailsPage.ctorParameters = function () {
      return [{
        type: _services_movie_service__WEBPACK_IMPORTED_MODULE_2__["MovieService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }];
    };

    MoviesDetailsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-movies-details',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./movies-details.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/movies-details/movies-details.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./movies-details.page.scss */
      "./src/app/pages/movies-details/movies-details.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_movie_service__WEBPACK_IMPORTED_MODULE_2__["MovieService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])], MoviesDetailsPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-movies-details-movies-details-module-es5.js.map
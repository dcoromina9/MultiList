function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-movies-movies-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/movies/movies.page.html":
  /*!*************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/movies/movies.page.html ***!
    \*************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesMoviesMoviesPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-title>MultiList</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-searchbar [(ngModel)]=\"term\" (ionChange)=\"searchChanged($event)\"></ion-searchbar>\n  <ion-item>\n    <ion-label>Select search type</ion-label>\n    <ion-select [(ngModel)]=\"type\" (ionChange)=\"searchChanged($event)\">\n      <ion-select-option seleted=\"true\" value=\"\">All</ion-select-option>\n      <ion-select-option value=\"movies\">Movies</ion-select-option>\n      <ion-select-option value=\"series\">Series</ion-select-option>\n      <ion-select-option value=\"episode\">Episodes</ion-select-option>\n    </ion-select>\n  </ion-item>\n\n  <ion-list>\n    <ion-item button *ngFor=\"let movies of (results | async)\" [routerLink]=\"['/', 'movies', movies.imdbID]\">\n      <ion-avatar slot=\"start\">\n        <img src=\"{{movies.Poster}}\" alt=\"{{movies.Title}}\" *ngIf=\"movies.Poster != 'N/A'\">\n      </ion-avatar>\n      <ion-label text-wrap>\n        <h3>{{movies.Title}}</h3>\n        {{movies.Year}}\n      </ion-label>\n      <ion-icon slot=\"end\" *ngIf=\"movies.Type === 'movie'\" name=\"film\"></ion-icon>\n      <ion-icon slot=\"end\" *ngIf=\"movies.Type === 'series'\" name=\"tv\"></ion-icon>\n      <ion-icon slot=\"end\" *ngIf=\"movies.Type === 'episodes'\" name=\"tablet-portrait\"></ion-icon>\n    </ion-item>\n  </ion-list>\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/pages/movies/movies-routing.module.ts":
  /*!*******************************************************!*\
    !*** ./src/app/pages/movies/movies-routing.module.ts ***!
    \*******************************************************/

  /*! exports provided: MoviesPageRoutingModule */

  /***/
  function srcAppPagesMoviesMoviesRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MoviesPageRoutingModule", function () {
      return MoviesPageRoutingModule;
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


    var _movies_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./movies.page */
    "./src/app/pages/movies/movies.page.ts");

    var routes = [{
      path: '',
      component: _movies_page__WEBPACK_IMPORTED_MODULE_3__["MoviesPage"]
    }];

    var MoviesPageRoutingModule = function MoviesPageRoutingModule() {
      _classCallCheck(this, MoviesPageRoutingModule);
    };

    MoviesPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], MoviesPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/movies/movies.module.ts":
  /*!***********************************************!*\
    !*** ./src/app/pages/movies/movies.module.ts ***!
    \***********************************************/

  /*! exports provided: MoviesPageModule */

  /***/
  function srcAppPagesMoviesMoviesModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MoviesPageModule", function () {
      return MoviesPageModule;
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


    var _movies_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./movies-routing.module */
    "./src/app/pages/movies/movies-routing.module.ts");
    /* harmony import */


    var _movies_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./movies.page */
    "./src/app/pages/movies/movies.page.ts");

    var MoviesPageModule = function MoviesPageModule() {
      _classCallCheck(this, MoviesPageModule);
    };

    MoviesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _movies_routing_module__WEBPACK_IMPORTED_MODULE_5__["MoviesPageRoutingModule"]],
      declarations: [_movies_page__WEBPACK_IMPORTED_MODULE_6__["MoviesPage"]]
    })], MoviesPageModule);
    /***/
  },

  /***/
  "./src/app/pages/movies/movies.page.scss":
  /*!***********************************************!*\
    !*** ./src/app/pages/movies/movies.page.scss ***!
    \***********************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesMoviesMoviesPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL21vdmllcy9tb3ZpZXMucGFnZS5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/pages/movies/movies.page.ts":
  /*!*********************************************!*\
    !*** ./src/app/pages/movies/movies.page.ts ***!
    \*********************************************/

  /*! exports provided: MoviesPage */

  /***/
  function srcAppPagesMoviesMoviesPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MoviesPage", function () {
      return MoviesPage;
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

    var MoviesPage = /*#__PURE__*/function () {
      function MoviesPage(movieService) {
        _classCallCheck(this, MoviesPage);

        this.movieService = movieService;
        this.term = '';
        this.type = '';
      }

      _createClass(MoviesPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "searchChanged",
        value: function searchChanged() {
          this.results = this.movieService.searchMovies(this.term, this.type);
        }
      }]);

      return MoviesPage;
    }();

    MoviesPage.ctorParameters = function () {
      return [{
        type: _services_movie_service__WEBPACK_IMPORTED_MODULE_2__["MovieService"]
      }];
    };

    MoviesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-movies',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./movies.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/movies/movies.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./movies.page.scss */
      "./src/app/pages/movies/movies.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_movie_service__WEBPACK_IMPORTED_MODULE_2__["MovieService"]])], MoviesPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-movies-movies-module-es5.js.map
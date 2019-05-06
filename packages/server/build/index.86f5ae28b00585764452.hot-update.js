require("source-map-support").install();
exports.id = "index";
exports.modules = {

/***/ "./src/app.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("babel-runtime/regenerator");
/* harmony import */ var babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("babel-runtime/core-js/get-iterator");
/* harmony import */ var babel_runtime_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("babel-runtime/helpers/asyncToGenerator");
/* harmony import */ var babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("path");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_router_sitemap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("react-router-sitemap");
/* harmony import */ var react_router_sitemap__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_router_sitemap__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _net__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./src/net.js");
/* harmony import */ var _modules__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./src/modules/index.ts");
/* harmony import */ var _middleware_website__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./src/middleware/website.jsx");
/* harmony import */ var _middleware_graphiql__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./src/middleware/graphiql.js");
/* harmony import */ var _graphql__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./src/graphql.js");
/* harmony import */ var _middleware_error__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./src/middleware/error.js");
/* harmony import */ var _api_remoteSchema__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./src/api/remoteSchema.js");
/* harmony import */ var _client_src_app_Routes__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("../client/src/app/Routes.jsx");




var _this = undefined;













var router = _client_src_app_Routes__WEBPACK_IMPORTED_MODULE_13__["default"];

var createExpressApp = function () {
  var _ref = babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()( /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
    var sitemapPath, app, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, applyBeforeware, corsOptions, _iteratorNormalCompletion2, _didIteratorError2, _iteratorError2, _iterator2, _step2, applyMiddleware, graphqlServer;

    return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            sitemapPath = path__WEBPACK_IMPORTED_MODULE_4___default.a.join(process.cwd(), 'public');

            console.log('HELLOOOOOO', sitemapPath);

            new react_router_sitemap__WEBPACK_IMPORTED_MODULE_5___default.a(router).build('https://cahomefitness.com').save('./sitemapTEST.xml', sitemapPath);
            app = express__WEBPACK_IMPORTED_MODULE_3___default()();
            _iteratorNormalCompletion = true;
            _didIteratorError = false;
            _iteratorError = undefined;
            _context.prev = 7;


            for (_iterator = babel_runtime_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_1___default()(_modules__WEBPACK_IMPORTED_MODULE_7__["default"].beforewares); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
              applyBeforeware = _step.value;

              applyBeforeware(app);
            }
            // console.log('TEST::::');
            // Don't rate limit heroku
            _context.next = 15;
            break;

          case 11:
            _context.prev = 11;
            _context.t0 = _context['catch'](7);
            _didIteratorError = true;
            _iteratorError = _context.t0;

          case 15:
            _context.prev = 15;
            _context.prev = 16;

            if (!_iteratorNormalCompletion && _iterator.return) {
              _iterator.return();
            }

          case 18:
            _context.prev = 18;

            if (!_didIteratorError) {
              _context.next = 21;
              break;
            }

            throw _iteratorError;

          case 21:
            return _context.finish(18);

          case 22:
            return _context.finish(15);

          case 23:
            app.enable('trust proxy');

            corsOptions = {
              credentials: true,
              origin: true
            };
            _iteratorNormalCompletion2 = true;
            _didIteratorError2 = false;
            _iteratorError2 = undefined;
            _context.prev = 28;


            for (_iterator2 = babel_runtime_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_1___default()(_modules__WEBPACK_IMPORTED_MODULE_7__["default"].middlewares); !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
              applyMiddleware = _step2.value;

              applyMiddleware(app);
            }

            _context.next = 36;
            break;

          case 32:
            _context.prev = 32;
            _context.t1 = _context['catch'](28);
            _didIteratorError2 = true;
            _iteratorError2 = _context.t1;

          case 36:
            _context.prev = 36;
            _context.prev = 37;

            if (!_iteratorNormalCompletion2 && _iterator2.return) {
              _iterator2.return();
            }

          case 39:
            _context.prev = 39;

            if (!_didIteratorError2) {
              _context.next = 42;
              break;
            }

            throw _iteratorError2;

          case 42:
            return _context.finish(39);

          case 43:
            return _context.finish(36);

          case 44:
            if (true) {
              app.get('/servdir', function (req, res) {
                res.send(process.cwd() + path__WEBPACK_IMPORTED_MODULE_4___default.a.sep);
              });
            }

            if (_net__WEBPACK_IMPORTED_MODULE_6__["isApiExternal"]) {
              _context.next = 50;
              break;
            }

            _context.next = 48;
            return Object(_graphql__WEBPACK_IMPORTED_MODULE_10__["default"])();

          case 48:
            graphqlServer = _context.sent;

            graphqlServer.applyMiddleware({
              app: app,
              path: "/graphql",
              cors: corsOptions
            });

          case 50:
            _context.next = 52;
            return _api_remoteSchema__WEBPACK_IMPORTED_MODULE_12__["createStich"];

          case 52:
            app.get('/graphiql', function () {
              return Object(_middleware_graphiql__WEBPACK_IMPORTED_MODULE_9__["default"])(arguments.length <= 0 ? undefined : arguments[0]).apply(undefined, arguments);
            });

            // For monitoring status
            app.get('/status', function (req, res) {
              return res.status(200).send();
            });
            app.use(function () {
              return _middleware_website__WEBPACK_IMPORTED_MODULE_8__["default"].apply(undefined, arguments);
            });
            app.use(express__WEBPACK_IMPORTED_MODULE_3___default.a.static('public'));

            app.use('/', express__WEBPACK_IMPORTED_MODULE_3___default.a.static("../client/build", {
              maxAge: '180 days'
            }));

            if (true) {
              app.use('/', express__WEBPACK_IMPORTED_MODULE_3___default.a.static("../client/build/dll", { maxAge: '180 days' }));
              app.use(_middleware_error__WEBPACK_IMPORTED_MODULE_11__["default"]);
            }

            if (true) {
              module.hot.accept(["./src/middleware/website.jsx", "./src/graphql.js"], function() { /* harmony import */ _middleware_website__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./src/middleware/website.jsx");
/* harmony import */ _graphql__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./src/graphql.js");
 });
            }

            return _context.abrupt('return', app);

          case 60:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, _this, [[7, 11, 15, 23], [16,, 18, 22], [28, 32, 36, 44], [37,, 39, 43]]);
  }));

  return function createExpressApp() {
    return _ref.apply(this, arguments);
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (createExpressApp);

/***/ })

};
//# sourceMappingURL=index.672a54bff8cb97b47a86.js.map
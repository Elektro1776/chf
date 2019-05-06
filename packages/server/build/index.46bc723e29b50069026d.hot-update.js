require("source-map-support").install();
exports.id = "index";
exports.modules = {

/***/ "../client/src/modules/admin/components/Locations/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("babel-runtime/regenerator");
/* harmony import */ var babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("babel-runtime/helpers/asyncToGenerator");
/* harmony import */ var babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("babel-runtime/helpers/extends");
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("babel-runtime/core-js/object/get-prototype-of");
/* harmony import */ var babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("babel-runtime/helpers/classCallCheck");
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("babel-runtime/helpers/createClass");
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("babel-runtime/helpers/possibleConstructorReturn");
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("babel-runtime/helpers/inherits");
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _graphql_SimplePageQuery_graphql__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("../client/src/modules/admin/graphql/SimplePageQuery.graphql");
/* harmony import */ var _graphql_SimplePageQuery_graphql__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_graphql_SimplePageQuery_graphql__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _graphql_Dealers_graphql__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("../client/src/modules/admin/graphql/Dealers.graphql");
/* harmony import */ var _graphql_Dealers_graphql__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_graphql_Dealers_graphql__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _graphql_DealerQuery_graphql__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("../client/src/modules/admin/graphql/DealerQuery.graphql");
/* harmony import */ var _graphql_DealerQuery_graphql__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_graphql_DealerQuery_graphql__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _graphql_UpdateDealer_graphql__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("../client/src/modules/admin/graphql/UpdateDealer.graphql");
/* harmony import */ var _graphql_UpdateDealer_graphql__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_graphql_UpdateDealer_graphql__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _LocationsView__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("../client/src/modules/admin/components/Locations/LocationsView.jsx");









var _this2 = undefined;











// import FormCreator from '../FormCreator';
// import Text from '../FormCreator/FormTypes/Text';
// import Formic from './Form';
//
// const LocationForm = new FormCreator({
//   field: [<Text />]
// });

var Locations = function (_Component) {
  babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_7___default()(Locations, _Component);

  function Locations(props) {
    babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_4___default()(this, Locations);

    var _this = babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6___default()(this, (Locations.__proto__ || babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_3___default()(Locations)).call(this, props));

    _this.state = {};
    return _this;
  }

  babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_5___default()(Locations, [{
    key: 'render',
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_LocationsView__WEBPACK_IMPORTED_MODULE_15__["default"], this.props);
    }
  }]);

  return Locations;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);

var LocationsWithApollo = Object(react_apollo__WEBPACK_IMPORTED_MODULE_9__["compose"])(Object(react_apollo__WEBPACK_IMPORTED_MODULE_9__["graphql"])(_graphql_DealerQuery_graphql__WEBPACK_IMPORTED_MODULE_13___default.a, {
  options: function options(props) {
    return { variables: { handle: ' ' } };
  },
  props: function props(_ref) {
    var data = _ref.data;

    console.log('data', data);
    return babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2___default()({}, data);
  }
}), Object(react_apollo__WEBPACK_IMPORTED_MODULE_9__["graphql"])(_graphql_SimplePageQuery_graphql__WEBPACK_IMPORTED_MODULE_11___default.a, {
  options: function options() {
    return { variables: { pageTitle: 'Locations' } };
  },
  props: function props(_ref2) {
    var data = _ref2.data;

    console.log('Locations Page data', data);
    var page = data.page,
        loadingPage = data.loading,
        error = data.error;

    if (loadingPage && !error) {
      return { loadingPage: loadingPage, page: null };
    } else {
      return { page: page, loadingPage: loadingPage };
    }
  }
}), Object(react_apollo__WEBPACK_IMPORTED_MODULE_9__["graphql"])(_graphql_Dealers_graphql__WEBPACK_IMPORTED_MODULE_12___default.a, {
  options: function options() {
    return {
      variables: { first: 12, after: null }
    };
  },
  props: function props(_ref3) {
    var data = _ref3.data;

    console.log('DATA:::', data);
    var loading = data.loading,
        error = data.error,
        dealers = data.dealers;

    if (error) {
      return { dealersError: error };
    }
    if (loading) {
      return { loadingDealers: loading };
    }
    if (!loading && !error) {
      return { loadingDealers: loading, dealers: dealers };
    }
  }
}), Object(react_apollo__WEBPACK_IMPORTED_MODULE_9__["graphql"])(_graphql_UpdateDealer_graphql__WEBPACK_IMPORTED_MODULE_14___default.a, {
  props: function props(_ref4) {
    var mutate = _ref4.mutate;
    return {
      updateDealer: function () {
        var _ref5 = babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(dealer) {
          var _ref6, updateDealer;

          return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.prev = 0;
                  _context.next = 3;
                  return mutate({
                    variables: { dealer: dealer },
                    update: function update(proxy, _ref7) {
                      var updateDealer = _ref7.data.updateDealer;

                      console.log('UPDATE DEALER::', updateDealer);
                      var data = proxy.readQuery('' + _graphql_Dealers_graphql__WEBPACK_IMPORTED_MODULE_12___default.a);
                      console.log('Data::: on update::??', data);
                    }
                  });

                case 3:
                  _ref6 = _context.sent;
                  updateDealer = _ref6.data.updateDealer;

                  console.log('UPDATED::', updateDealer);
                  return _context.abrupt('return', updateDealer);

                case 9:
                  _context.prev = 9;
                  _context.t0 = _context['catch'](0);

                  console.log('ERROR UPDATING:', _context.t0);

                case 12:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, _this2, [[0, 9]]);
        }));

        return function updateDealer(_x) {
          return _ref5.apply(this, arguments);
        };
      }()
    };
  }
}))(Locations);
/* harmony default export */ __webpack_exports__["default"] = (LocationsWithApollo);

/***/ })

};
//# sourceMappingURL=index.e00e9185fe7d9a79245c.js.map
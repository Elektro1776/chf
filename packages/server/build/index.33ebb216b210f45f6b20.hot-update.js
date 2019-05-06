require("source-map-support").install();
exports.id = "index";
exports.modules = {

/***/ "./src/modules/admin/resolvers.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("babel-runtime/helpers/extends");
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("babel-runtime/core-js/json/stringify");
/* harmony import */ var babel_runtime_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("babel-runtime/helpers/defineProperty");
/* harmony import */ var babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("babel-runtime/core-js/object/assign");
/* harmony import */ var babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("babel-runtime/helpers/slicedToArray");
/* harmony import */ var babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("babel-runtime/helpers/objectWithoutProperties");
/* harmony import */ var babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("babel-runtime/regenerator");
/* harmony import */ var babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("babel-runtime/helpers/asyncToGenerator");
/* harmony import */ var babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _util_FileUploader__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./src/modules/util/FileUploader.js");










var getField = function getField(field, values) {
  if (values.hasOwnProperty(field)) {
    return values[field];
  }
};
var paramsConfig = {};
/*eslint-disable no-unused-vars*/
/* harmony default export */ __webpack_exports__["default"] = (function (pubsub) {
  return {
    Query: {
      pages: function pages(obj, input, _ref) {
        var _this = this;

        var Admin = _ref.Admin;
        return babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_7___default()( /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default.a.mark(function _callee() {
          var pages, page;
          return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default.a.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.prev = 0;
                  _context.next = 3;
                  return Admin.get.pages();

                case 3:
                  pages = _context.sent;

                  if (!(pages.length == 0)) {
                    _context.next = 9;
                    break;
                  }

                  _context.next = 7;
                  return Admin.insert.page({ id: 0, name: 'home' });

                case 7:
                  page = _context.sent;
                  return _context.abrupt('return', page);

                case 9:
                  return _context.abrupt('return', pages);

                case 12:
                  _context.prev = 12;
                  _context.t0 = _context['catch'](0);
                  return _context.abrupt('return', _context.t0);

                case 15:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, _this, [[0, 12]]);
        }))();
      },
      page: function page(obj, _ref2, _ref3) {
        var _this2 = this;

        var id = _ref2.id,
            pageTitle = _ref2.pageTitle;
        var Admin = _ref3.Admin,
            Dealers = _ref3.Dealers;
        return babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_7___default()( /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default.a.mark(function _callee2() {
          var page;
          return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default.a.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  _context2.prev = 0;

                  if (!id) {
                    _context2.next = 5;
                    break;
                  }

                  return _context2.abrupt('return', { id: id });

                case 5:
                  _context2.next = 7;
                  return Admin.get.pageByTitle(pageTitle);

                case 7:
                  page = _context2.sent;

                  if (page.name === 'locations') {}
                  // const check = await handleLocationsCheck(Dealers);
                  // console.log('LOCATIONSCHECK DONE', check);

                  // console.log('PAGE::', page);
                  return _context2.abrupt('return', { id: page.id, title: page.title, name: page.name });

                case 10:
                  _context2.next = 16;
                  break;

                case 12:
                  _context2.prev = 12;
                  _context2.t0 = _context2['catch'](0);

                  console.log('ERRROR GETTING PAGE:', _context2.t0);
                  return _context2.abrupt('return', _context2.t0);

                case 16:
                case 'end':
                  return _context2.stop();
              }
            }
          }, _callee2, _this2, [[0, 12]]);
        }))();
      },
      vendorData: function vendorData(_, _ref4, _ref5) {
        var _this3 = this;

        var handle = _ref4.handle;
        var Admin = _ref5.Admin;
        return babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_7___default()( /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default.a.mark(function _callee3() {
          var data, vendor;
          return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default.a.wrap(function _callee3$(_context3) {
            while (1) {
              switch (_context3.prev = _context3.next) {
                case 0:
                  _context3.prev = 0;
                  _context3.next = 3;
                  return Admin.get.vendorByHandle(handle);

                case 3:
                  data = _context3.sent;

                  if (!(typeof data == 'undefined' && handle.length > 0)) {
                    _context3.next = 9;
                    break;
                  }

                  _context3.next = 7;
                  return Admin.insert.vendorSeo(handle);

                case 7:
                  vendor = _context3.sent;
                  return _context3.abrupt('return', vendor);

                case 9:
                  if (!(handle.length == 0)) {
                    _context3.next = 11;
                    break;
                  }

                  return _context3.abrupt('return', null);

                case 11:
                  if (!data) {
                    _context3.next = 13;
                    break;
                  }

                  return _context3.abrupt('return', { handle: handle, seo: data });

                case 13:
                  _context3.next = 18;
                  break;

                case 15:
                  _context3.prev = 15;
                  _context3.t0 = _context3['catch'](0);
                  return _context3.abrupt('return', _context3.t0);

                case 18:
                case 'end':
                  return _context3.stop();
              }
            }
          }, _callee3, _this3, [[0, 15]]);
        }))();
      },
      collectionData: function collectionData(_, _ref6, _ref7) {
        var _this4 = this;

        var handle = _ref6.handle;
        var Admin = _ref7.Admin;
        return babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_7___default()( /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default.a.mark(function _callee4() {
          var data, collection, id, rest, _collection;

          return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default.a.wrap(function _callee4$(_context4) {
            while (1) {
              switch (_context4.prev = _context4.next) {
                case 0:
                  _context4.prev = 0;
                  _context4.next = 3;
                  return Admin.get.collectionByHandle(handle);

                case 3:
                  data = _context4.sent;

                  if (!((typeof data == 'undefined' || !data) && handle.length > 0)) {
                    _context4.next = 9;
                    break;
                  }

                  _context4.next = 7;
                  return Admin.insert.collectionSeo(handle);

                case 7:
                  collection = _context4.sent;
                  return _context4.abrupt('return', collection);

                case 9:
                  if (!(handle.length == 0)) {
                    _context4.next = 11;
                    break;
                  }

                  return _context4.abrupt('return', null);

                case 11:
                  if (!data) {
                    _context4.next = 15;
                    break;
                  }

                  id = data.id, rest = babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_5___default()(data, ['id']);
                  _collection = { id: id, seo: rest };
                  // console.log('WE SHOULD SEND DATA::;', collection);

                  return _context4.abrupt('return', _collection);

                case 15:
                  _context4.next = 20;
                  break;

                case 17:
                  _context4.prev = 17;
                  _context4.t0 = _context4['catch'](0);
                  return _context4.abrupt('return', _context4.t0);

                case 20:
                  return _context4.abrupt('return', null);

                case 21:
                case 'end':
                  return _context4.stop();
              }
            }
          }, _callee4, _this4, [[0, 17]]);
        }))();
      }
    },
    Page: {
      fields: function fields(obj, _ref8, _ref9, info) {
        var field_names = _ref8.field_names;

        var _this5 = this;

        var Admin = _ref9.Admin;
        return babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_7___default()( /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default.a.mark(function _callee5() {
          var _ref10, page_content, requestedFields, field_value, fields, stringValues, data;

          return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default.a.wrap(function _callee5$(_context5) {
            while (1) {
              switch (_context5.prev = _context5.next) {
                case 0:
                  _context5.next = 2;
                  return Admin.get.pageContents(obj.id);

                case 2:
                  _ref10 = _context5.sent;
                  page_content = _ref10.page_content;
                  requestedFields = field_names.map(function (_ref11) {
                    var _ref12 = babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_4___default()(_ref11, 2),
                        section = _ref12[0],
                        field = _ref12[1];

                    return page_content.map(function (_ref13) {
                      var field_value = _ref13.field_value,
                          rest = babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_5___default()(_ref13, ['field_value']);

                      var values = JSON.parse(field_value);
                      if (section == rest.section_name) {
                        var combined = babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_3___default()({}, rest, babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()({}, field, getField(field, values)));
                        return combined;
                      }
                    }).reduce(function (accum, curr) {
                      var field_value = curr[field];
                      delete curr[field];
                      accum = babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_3___default()({}, accum, curr, { field_value: babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()({}, field, field_value) });
                      return accum;
                    }, { field_value: null });
                  }).reduce(function (accum, curr) {
                    accum['field_value'] = babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_3___default()({}, accum['field_value'], curr['field_value']);
                    delete curr['field_value'];
                    accum = babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_3___default()({}, accum, curr);
                    return accum;
                  }, {});
                  // console.log('REQUESTED FIELDS:', requestedFields);

                  field_value = requestedFields.field_value, fields = babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_5___default()(requestedFields, ['field_value']);
                  stringValues = babel_runtime_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default()(field_value);
                  data = babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, fields, { field_value: stringValues });
                  return _context5.abrupt('return', [data]);

                case 9:
                case 'end':
                  return _context5.stop();
              }
            }
          }, _callee5, _this5);
        }))();
      }
    },
    Mutation: {
      createSiteMap: function createSiteMap(obj, _, _ref14) {
        var _this6 = this;

        var Admin = _ref14.Admin;
        return babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_7___default()( /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default.a.mark(function _callee6() {
          return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default.a.wrap(function _callee6$(_context6) {
            while (1) {
              switch (_context6.prev = _context6.next) {
                case 0:
                  console.log('CREATE SITE MAP FIRE::');

                case 1:
                case 'end':
                  return _context6.stop();
              }
            }
          }, _callee6, _this6);
        }))();
      },
      signS3: function signS3(obj, _ref15) {
        var _this7 = this;

        var filename = _ref15.filename,
            filetype = _ref15.filetype;
        return babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_7___default()( /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default.a.mark(function _callee7() {
          var signedRequest;
          return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default.a.wrap(function _callee7$(_context7) {
            while (1) {
              switch (_context7.prev = _context7.next) {
                case 0:
                  _context7.next = 2;
                  return _util_FileUploader__WEBPACK_IMPORTED_MODULE_8__["default"].getSignedUrl({ filename: filename, filetype: filetype });

                case 2:
                  signedRequest = _context7.sent;
                  return _context7.abrupt('return', signedRequest);

                case 4:
                case 'end':
                  return _context7.stop();
              }
            }
          }, _callee7, _this7);
        }))();
      },
      uploadPageContent: function uploadPageContent(obj, _ref16, _ref17) {
        var _this8 = this;

        var pageContent = _ref16.pageContent;
        var Admin = _ref17.Admin;
        return babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_7___default()( /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default.a.mark(function _callee8() {
          var _ref18, _ref19, data;

          return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default.a.wrap(function _callee8$(_context8) {
            while (1) {
              switch (_context8.prev = _context8.next) {
                case 0:
                  _context8.prev = 0;
                  _context8.next = 3;
                  return Admin.update.pageContent(pageContent);

                case 3:
                  _ref18 = _context8.sent;
                  _ref19 = babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_4___default()(_ref18, 1);
                  data = _ref19[0];
                  return _context8.abrupt('return', data.page_content);

                case 9:
                  _context8.prev = 9;
                  _context8.t0 = _context8['catch'](0);

                  console.log('EERROO', _context8.t0);

                case 12:
                case 'end':
                  return _context8.stop();
              }
            }
          }, _callee8, _this8, [[0, 9]]);
        }))();
      },
      uploadSeo: function uploadSeo(obj, _ref20, _ref21) {
        var _this9 = this;

        var path = _ref20.path,
            handle = _ref20.handle,
            seo = _ref20.seo;
        var Admin = _ref21.Admin;
        return babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_7___default()( /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default.a.mark(function _callee9() {
          var _ref22, _ref23, data;

          return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default.a.wrap(function _callee9$(_context9) {
            while (1) {
              switch (_context9.prev = _context9.next) {
                case 0:
                  console.log('PATH::', path);
                  console.log('HANDLE::', handle);
                  console.log('SEO::', seo);
                  _context9.prev = 3;
                  _context9.next = 6;
                  return Admin.update.seo({ path: path, handle: handle, seo: seo });

                case 6:
                  _ref22 = _context9.sent;
                  _ref23 = babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_4___default()(_ref22, 1);
                  data = _ref23[0];

                  console.log('DATA::', data);
                  return _context9.abrupt('return', data);

                case 13:
                  _context9.prev = 13;
                  _context9.t0 = _context9['catch'](3);

                  console.log('ERROR UPDATING SEO DATA::', _context9.t0);

                case 16:
                case 'end':
                  return _context9.stop();
              }
            }
          }, _callee9, _this9, [[3, 13]]);
        }))();
      }
    },
    Subscription: {}
  };
});

/***/ })

};
//# sourceMappingURL=index.0bb503831ba717aae0fc.js.map
require("source-map-support").install();
exports.id = "index";
exports.modules = {

/***/ "../client/src/modules/admin/components/Locations/Form.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("formik");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(formik__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);




var defaultDealer = {
  handle: '',
  name: ' ',
  street: ' ',
  suite: ' ',
  city: ' ',
  zip: ' ',
  state: ' ',
  country: ' ',
  email: ' ',
  phone: ' ',
  website: ' ',
  lat: ' ',
  lng: ' '
};
var Formic = function Formic(props) {
  console.log('FORM PROPS', props);
  var dealer = void 0;
  if (props.hasOwnProperty('dealerByHandle')) {
    dealer = props.dealerByHandle;
  } else {
    dealer = null;
  }
  console.log('DEALER::', dealer);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
    'div',
    null,
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_1__["Formik"], {
      enableReinitialize: true,
      initialValues: dealer ? dealer : defaultDealer,
      onSubmit: function onSubmit(values) {
        console.log('VALUES::', values);
      },
      render: function render(_ref) {
        var values = _ref.values,
            errors = _ref.errors,
            touched = _ref.touched,
            isSubmitting = _ref.isSubmitting,
            setFieldValue = _ref.setFieldValue;

        console.log('VALUES::', values);
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
          formik__WEBPACK_IMPORTED_MODULE_1__["Form"],
          null,
          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            'div',
            { className: 'admin__form__seo--field' },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_1__["Field"], { className: 'admin__form__seo--input', type: 'text', name: 'name', placeholder: 'Location Name' }),
            errors.title && touched.title && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              'div',
              { className: 'admin__form__seo--error' },
              errors.title
            )
          ),
          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            'div',
            { className: 'admin__form__seo--field' },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_1__["Field"], { className: 'admin__form__seo--input', type: 'text', name: 'street', placeholder: 'Street' }),
            errors.title && touched.title && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              'div',
              { className: 'admin__form__seo--error' },
              errors.title
            )
          ),
          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            'div',
            { className: 'admin__form__seo--field' },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_1__["Field"], { className: 'admin__form__seo--input', type: 'text', name: 'city', placeholder: 'City' }),
            errors.title && touched.title && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              'div',
              { className: 'admin__form__seo--error' },
              errors.title
            )
          ),
          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            'div',
            { className: 'admin__form__seo--field' },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_1__["Field"], { className: 'admin__form__seo--input', type: 'text', name: 'state', placeholder: 'State' }),
            errors.title && touched.title && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              'div',
              { className: 'admin__form__seo--error' },
              errors.title
            )
          ),
          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            'div',
            { className: 'admin__form__seo--field' },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_1__["Field"], { className: 'admin__form__seo--input', type: 'text', name: 'zip', placeholder: 'Zip Code' }),
            errors.title && touched.title && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              'div',
              { className: 'admin__form__seo--error' },
              errors.title
            )
          ),
          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            'div',
            { className: 'admin__form__seo--field' },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_1__["Field"], { className: 'admin__form__seo--input', type: 'tel', name: 'phone', placeholder: 'Phone' }),
            errors.title && touched.title && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              'div',
              { className: 'admin__form__seo--error' },
              errors.title
            )
          ),
          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            'div',
            { className: 'admin__form__seo--field' },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_1__["Field"], { className: 'admin__form__seo--input', type: 'email', name: 'email', placeholder: 'Email' }),
            errors.title && touched.title && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              'div',
              { className: 'admin__form__seo--error' },
              errors.title
            )
          ),
          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            'div',
            { className: 'admin__form__seo--field' },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              'label',
              { htmlFor: 'file' },
              'File upload'
            ),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('input', { id: 'file', name: 'image_url', type: 'file', onChange: props.adaptFileEventToValue(setFieldValue) })
          ),
          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            'div',
            { className: 'admin__form__seo--field' },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_1__["Field"], {
              className: 'admin__form__seo--input',
              type: 'text-area',
              name: 'description',
              placeholder: 'Description'
            }),
            errors.title && touched.title && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              'div',
              { className: 'admin__form__seo--error' },
              errors.title
            )
          ),
          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            'button',
            { type: 'submit', disabled: isSubmitting },
            'Submit'
          )
        );
      }
    })
  );
};
Formic.propTypes = {
  adaptFileEventToValue: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func
};
/* harmony default export */ __webpack_exports__["default"] = (Formic);

/***/ })

};
//# sourceMappingURL=index.9584da9c9316b6d8a725.js.map
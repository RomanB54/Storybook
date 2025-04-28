/*! For license information please see component-form-Form-stories.b60211a2.iframe.bundle.js.LICENSE.txt */
'use strict';
(self.webpackChunkstorybook = self.webpackChunkstorybook || []).push([
  [618],
  {
    './node_modules/react/cjs/react-jsx-runtime.production.js': (
      __unused_webpack_module,
      exports,
    ) => {
      var REACT_ELEMENT_TYPE = Symbol.for('react.transitional.element'),
        REACT_FRAGMENT_TYPE = Symbol.for('react.fragment');
      function jsxProd(type, config, maybeKey) {
        var key = null;
        if (
          (void 0 !== maybeKey && (key = '' + maybeKey),
          void 0 !== config.key && (key = '' + config.key),
          'key' in config)
        )
          for (var propName in ((maybeKey = {}), config))
            'key' !== propName && (maybeKey[propName] = config[propName]);
        else maybeKey = config;
        return (
          (config = maybeKey.ref),
          {
            $$typeof: REACT_ELEMENT_TYPE,
            type,
            key,
            ref: void 0 !== config ? config : null,
            props: maybeKey,
          }
        );
      }
      (exports.Fragment = REACT_FRAGMENT_TYPE),
        (exports.jsx = jsxProd),
        (exports.jsxs = jsxProd);
    },
    './node_modules/react/jsx-runtime.js': (
      module,
      __unused_webpack_exports,
      __webpack_require__,
    ) => {
      module.exports = __webpack_require__(
        './node_modules/react/cjs/react-jsx-runtime.production.js',
      );
    },
    './src/component/form/Form.stories.tsx': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Login1: () => Login1,
          Login2: () => Login2,
          Login3: () => Login3,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => Form_stories,
        });
      var jsx_runtime = __webpack_require__(
        './node_modules/react/jsx-runtime.js',
      );
      __webpack_require__('./node_modules/react/index.js');
      const Form = ({ login, password, backgroundColor, display }) =>
        (0, jsx_runtime.jsxs)('form', {
          onSubmit: (ev) => {
            ev.preventDefault();
          },
          children: [
            (0, jsx_runtime.jsx)('input', { type: 'text', value: login }),
            (0, jsx_runtime.jsx)('br', {}),
            (0, jsx_runtime.jsx)('input', {
              type: 'password',
              value: password,
            }),
            (0, jsx_runtime.jsx)('br', {}),
            (0, jsx_runtime.jsx)('button', {
              className: 'storybook-button',
              style: { backgroundColor, display },
              children: 'login',
            }),
          ],
        });
      Form.__docgenInfo = {
        description: '',
        methods: [],
        displayName: 'Form',
        props: {
          login: { required: !1, tsType: { name: 'string' }, description: '' },
          password: {
            required: !1,
            tsType: { name: 'string' },
            description: '',
          },
          backgroundColor: {
            required: !1,
            tsType: { name: 'string' },
            description: '',
          },
          display: {
            required: !1,
            tsType: { name: 'string' },
            description: '',
          },
        },
      };
      const Form_stories = {
          title: 'MyApp/Form',
          component: Form,
          tags: ['autodocs'],
        },
        Login1 = { args: { login: 'Otus', password: 'otus' } },
        Login2 = {
          args: { login: 'alex', password: 'alex', backgroundColor: 'red' },
        },
        Login3 = {
          args: {
            login: 'bob',
            password: 'bob',
            backgroundColor: 'green',
            display: 'flex',
          },
        },
        __namedExportsOrder = ['Login1', 'Login2', 'Login3'];
      (Login1.parameters = {
        ...Login1.parameters,
        docs: {
          ...Login1.parameters?.docs,
          source: {
            originalSource:
              "{\n  args: {\n    login: 'Otus',\n    password: 'otus'\n  }\n}",
            ...Login1.parameters?.docs?.source,
          },
        },
      }),
        (Login2.parameters = {
          ...Login2.parameters,
          docs: {
            ...Login2.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {\n    login: 'alex',\n    password: 'alex',\n    backgroundColor: 'red'\n  }\n}",
              ...Login2.parameters?.docs?.source,
            },
          },
        }),
        (Login3.parameters = {
          ...Login3.parameters,
          docs: {
            ...Login3.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {\n    login: 'bob',\n    password: 'bob',\n    backgroundColor: 'green',\n    display: 'flex'\n  }\n}",
              ...Login3.parameters?.docs?.source,
            },
          },
        });
    },
  },
]);

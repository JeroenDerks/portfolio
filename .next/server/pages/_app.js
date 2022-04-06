"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 6271:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ App)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: external "next/head"
const head_namespaceObject = require("next/head");
var head_default = /*#__PURE__*/__webpack_require__.n(head_namespaceObject);
;// CONCATENATED MODULE: external "@mui/material/styles"
const styles_namespaceObject = require("@mui/material/styles");
;// CONCATENATED MODULE: ./theme.ts

const theme = (0,styles_namespaceObject.createTheme)({
    typography: {
        fontFamily: [
            "Helvetica Neue",
            "Arial",
            "sans-serif"
        ].join(" , "),
        subtitle1: {
            fontSize: 13,
            fontWeight: "bold"
        },
        body1: {
            fontSize: 13
        },
        body2: {
            color: "grey"
        },
        h1: {
            textTransform: "uppercase",
            fontWeight: "bold",
            letterSpacing: "-0.06em",
            fontSize: 52,
            "@media (max-width:900px)": {
                fontSize: "42px"
            }
        },
        h2: {
            fontSize: 14,
            fontWeight: 400
        },
        h3: {
            textTransform: "uppercase",
            letterSpacing: "-0.06em",
            "@media (max-width:900px)": {
                fontSize: "32px",
                paddingTop: 80
            }
        }
    }
});

;// CONCATENATED MODULE: ./pages/_app.tsx






function App({ Component , pageProps  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(styles_namespaceObject.ThemeProvider, {
        theme: theme,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: "Jeroen Derks - portfolio"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "description",
                        content: "Welcome to Jeroen's collection of web development, tech experiments and digital-physical interfaces"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        property: "og:title",
                        content: "Jeroen Derks - portfolio"
                    }, "title"),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        property: "og:image",
                        content: "/public/thumbnail192.png"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        property: "og:description",
                        content: "Jeroen's collection of web development, tech experiments and digital-physical interfaces"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                pageProps: pageProps
            })
        ]
    });
};


/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(6271));
module.exports = __webpack_exports__;

})();
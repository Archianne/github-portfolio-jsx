(this.webpackJsonparchianne=this.webpackJsonparchianne||[]).push([[8],{52:function(n,e,t){"use strict";var i,r=t(48),c=t(49),a=t(7);e.a=function(n){var e=n.children,t=n.href,i=n.target;return Object(a.jsx)(l,{href:t,target:i,children:e})};var l=c.c.a(i||(i=Object(r.a)(["\n  font-weight: 645;\n  text-decoration: none;\n"])))},56:function(n,e,t){"use strict";var i=t(53),r=t(0),c=t(7);e.a=function(n){var e=Object(r.useState)(null),t=Object(i.a)(e,2),a=t[0],l=t[1],o=Object(r.useState)({}),u=Object(i.a)(o,2),d=u[0],s=u[1];return Object(r.useEffect)((function(){fetch(n,{headers:{Accept:"application/json"}}).then((function(n){return n.json()})).then((function(n){return s(n)})).catch((function(n){return l(n)}))}),[n]),a?(console.log(d),Object(c.jsx)("p",{children:"Error!"})):[d]}},71:function(n,e,t){"use strict";t.r(e);var i,r=t(48),c=t(53),a=t(0),l=t(49),o=t(56),u=t(52),d=t(7),s=Object(a.lazy)((function(){return t.e(18).then(t.bind(null,73))})),b=Object(a.lazy)((function(){return Promise.all([t.e(0),t.e(12)]).then(t.bind(null,74))})),h=Object(a.lazy)((function(){return Promise.all([t.e(0),t.e(13)]).then(t.bind(null,75))})),j=Object(a.lazy)((function(){return t.e(14).then(t.bind(null,76))})),p=Object(a.lazy)((function(){return t.e(9).then(t.bind(null,77))}));e.default=function(){var n=Object(o.a)("https://api.github.com/users/Archianne"),e=Object(c.a)(n,1)[0];return Object(d.jsx)(x,{id:"sideBar",children:Object(d.jsxs)(a.Suspense,{fallback:Object(d.jsx)("div",{children:"Loading"}),children:[Object(d.jsx)(j,{value:e}),Object(d.jsx)(s,{children:Object(d.jsx)(u.a,{href:"https://github.com/Archianne",target:"blank",children:"Follow"})}),Object(d.jsx)("div",{id:"bio",children:Object(d.jsx)("p",{children:e.bio})}),Object(d.jsx)(b,{value:e}),Object(d.jsx)(h,{value:e}),Object(d.jsx)(p,{value:e})]})})};var x=l.c.aside(i||(i=Object(r.a)(["\n  display: flex;\n  flex-direction: column;\n  line-height: 21px;\n  width: 24%;\n  max-width: 312px;\n  margin: -30px 8px 0 8px;\n  padding-left: 16px;\n\n  #bio {\n    p {\n    padding: 16px 0;\n    }\n  }\n\n  .icon {\n    margin-right: 5px;\n  }\n\n  @media (max-width: 768px) {\n    margin: 0;\n    padding: 0;\n    max-width: 90vw;\n\n    #username {\n      order: 1;\n    }\n\n    #bio {\n      order: 2;\n    }\n\n    #infos {\n      order: 3;\n    }\n\n    #followers {\n      order: 4;\n    }\n\n    #button {\n      order: 5;\n      margin: 0 0 16px 0;\n      padding: 0;\n      width: 100%;\n      text-align: center;\n    }\n\n    #organization {\n      display: none;\n    }\n"])))}}]);
//# sourceMappingURL=8.3f9d2e8d.chunk.js.map
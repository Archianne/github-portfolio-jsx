(this.webpackJsonparchianne=this.webpackJsonparchianne||[]).push([[7],{52:function(n,e,t){"use strict";var r,c=t(48),i=t(49),a=t(7);e.a=function(n){var e=n.children,t=n.href,r=n.target;return Object(a.jsx)(o,{href:t,target:r,children:e})};var o=i.c.a(r||(r=Object(c.a)(["\n  font-weight: 645;\n  text-decoration: none;\n"])))},56:function(n,e,t){"use strict";var r=t(53),c=t(0),i=t(7);e.a=function(n){var e=Object(c.useState)(null),t=Object(r.a)(e,2),a=t[0],o=t[1],s=Object(c.useState)({}),u=Object(r.a)(s,2),h=u[0],l=u[1];return Object(c.useEffect)((function(){fetch(n,{headers:{Accept:"application/json"}}).then((function(n){return n.json()})).then((function(n){return l(n)})).catch((function(n){return o(n)}))}),[n]),a?(console.log(h),Object(i.jsx)("p",{children:"Error!"})):[h]}},65:function(n,e,t){"use strict";var r,c=t(48),i=t(49),a=t(7),o=i.c.hr(r||(r=Object(c.a)(["\n  margin-top: 16px;\n  background-color: ",";\n  border: none;\n  height: 1px;\n"])),(function(n){return n.theme.boxBorder}));e.a=function(){return Object(a.jsx)(o,{})}},79:function(n,e,t){"use strict";t.r(e);var r,c,i=t(48),a=t(53),o=t(0),s=t(49),u=t(56),h=t(65),l=t(52),j=t(7);e.default=function(){var n=Object(u.a)("https://api.github.com/users/Archianne/repos"),e=Object(a.a)(n,1)[0],t=Array.isArray(e)&&e.slice(0,12).map((function(n){return Object(j.jsxs)(b,{children:[Object(j.jsx)("p",{children:n.name}),Object(j.jsx)(h.a,{}),Object(j.jsx)(l.a,{href:n.html_url,children:"Repository"}),Object(j.jsx)(h.a,{}),Object(j.jsx)(l.a,{href:"https://archianne.github.io/".concat(n.name),children:"Preview"})]},n.id)}));return Object(j.jsx)(f,{children:Object(j.jsx)(o.Suspense,{fallback:Object(j.jsx)("div",{children:"Loading"}),children:t})})};var f=s.c.ul(r||(r=Object(i.a)(["\n  display: flex;\n  flex-flow: row wrap;\n  width: 100%;\n  flex-basis: auto;\n  justify-content: space-around;\n\n  a {\n    color: ",";\n  }\n"])),(function(n){return n.theme.fontColor1})),b=s.c.li(c||(c=Object(i.a)(["\n  list-style-type: none;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  height: 150px;\n  min-width: 150px;\n  width: 25%;\n  margin: 5px 10px;\n  padding: 10px;\n  border: 1px solid ",";\n"])),(function(n){return n.theme.boxBorder}))}}]);
//# sourceMappingURL=7.4cf8e8b7.chunk.js.map
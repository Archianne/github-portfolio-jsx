(this.webpackJsonparchianne=this.webpackJsonparchianne||[]).push([[13],{55:function(n,t,e){"use strict";var o=e(50),r=e(0),c=e(7);t.a=function(n){var t=Object(r.useState)(null),e=Object(o.a)(t,2),i=e[0],a=e[1],l=Object(r.useState)({}),p=Object(o.a)(l,2),u=p[0],x=p[1];return Object(r.useEffect)((function(){fetch(n,{headers:{Accept:"application/json"}}).then((function(n){return n.json()})).then((function(n){return x(n)})).catch((function(n){return a(n)}))}),[n]),i?(console.log(u),Object(c.jsx)("p",{children:"Error!"})):[u]}},81:function(n,t,e){"use strict";e.r(t);var o,r,c=e(48),i=e(13),a=e(2),l=e(49),p=e(0),u=e(50),x=e(73),h=e(55),s=e(7),b=function(n){var t=n.match.params.slug,e=window.location.hash,o=e.substring(e.lastIndexOf("/")+1);console.log(t),console.log(o);var r="https://dev.to/api/articles/".concat(o),c=Object(h.a)(r),a=Object(u.a)(c,1)[0];return console.log(a),Object(s.jsx)(d,{children:Object(s.jsxs)(p.Suspense,{fallback:Object(s.jsx)("div",{children:"Loading.."}),children:[Object(s.jsx)("div",{id:"return",children:Object(s.jsx)(i.b,{to:"/blog",children:"Return"})}),Object(s.jsx)("h1",{id:"title",children:a.title}),Object(s.jsx)(x.a,{content:a.body_html})]})})},d=l.c.article(o||(o=Object(c.a)(["\n  #return {\n    text-align: center;\n    margin-bottom: 40px;\n  }\n\n  #title {\n    text-align: center;\n    font-size: 25px;\n    margin-bottom: 20px;\n    box-shadow: "," 0px 1px 0px,\n      "," 0px 1px 0px inset;\n  }\n\n  img {\n    width: 100%;\n    margin: 10px 0;\n    box-shadow: "," 0px 2px 8px 0px;\n  }\n\n  a {\n    color: orange;\n    text-decoration: none;\n    font-weight: bold;\n  }\n\n  h1,\n  h2,\n  h3,\n  h4 {\n    margin: 30px 0 30px 20px;\n    color: ",";\n  }\n\n  hr {\n    margin-top: 16px;\n    background-color: "," !important;\n    border: none;\n    height: 1px;\n    width: 100%;\n  }\n\n  .highlight {\n    background-color: ",";\n    padding: 10px;\n    margin: 10px 0;\n  }\n\n  code {\n    background-color: ",";\n    font-size: 12px;\n    color: red;\n  }\n\n  .readme-overview {\n    ",";\n    text-align: center;\n    padding: 20px;\n    margin-bottom: 20px;\n    box-shadow: "," 0px 15px 20px -20px;\n\n    img {\n      width: 20px;\n      margin-right: 10px;\n      box-shadow: none;\n    }\n\n    h2 {\n      display: flex;\n      align-items: center;\n      justify-content: center;\n    }\n  }\n"])),(function(n){return n.theme.fontColor1}),(function(n){return n.theme.fontColor1}),(function(n){return n.theme.fontColor1}),(function(n){return n.theme.fontColor1}),(function(n){return n.theme.boxBorder}),(function(n){return n.theme.buttonBgHover}),(function(n){return n.theme.buttonBgHover}),(function(n){return n.theme.buttonBg}),(function(n){return n.theme.fontColor1})),j=Object(p.lazy)((function(){return e.e(22).then(e.bind(null,86))})),g=Object(p.lazy)((function(){return e.e(10).then(e.bind(null,87))})),f=Object(p.lazy)((function(){return e.e(23).then(e.bind(null,88))})),m=Object(p.lazy)((function(){return e.e(21).then(e.bind(null,89))})),O=Object(p.lazy)((function(){return e.e(9).then(e.bind(null,90))})),w=(t.default=function(){return Object(s.jsx)(w,{id:"content",children:Object(s.jsx)(i.a,{children:Object(s.jsx)(a.c,{children:Object(s.jsxs)(p.Suspense,{fallback:Object(s.jsx)("div",{children:"Loading"}),children:[Object(s.jsx)(a.a,{path:"/",component:j,exact:!0}),Object(s.jsx)(a.a,{path:"/skills",component:f}),Object(s.jsx)(a.a,{path:"/repositories",component:g}),Object(s.jsx)(a.a,{path:"/contact",component:m}),Object(s.jsx)(a.a,{path:"/blog/",component:O}),Object(s.jsx)(a.a,{path:"/post/:slug",component:b})]})})})})},l.c.section(r||(r=Object(c.a)(["\n  width: 70%;\n  max-width: 936px;\n  margin: 40px 24px 0 8px;\n  padding: 24px;\n  border: 1px solid ",";\n  border-radius: 6px;\n\n  @media (max-width: 768px) {\n    border: none;\n    margin: 8px 0;\n    padding: 30px;\n  }\n"])),(function(n){return n.theme.boxBorder})))}}]);
//# sourceMappingURL=13.a3686fd4.chunk.js.map
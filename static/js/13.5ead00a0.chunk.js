(this.webpackJsonparchianne=this.webpackJsonparchianne||[]).push([[13],{55:function(n,t,e){"use strict";var o=e(50),c=e(0),r=e(7);t.a=function(n){var t=Object(c.useState)(null),e=Object(o.a)(t,2),i=e[0],a=e[1],l=Object(c.useState)({}),s=Object(o.a)(l,2),u=s[0],p=s[1];return Object(c.useEffect)((function(){fetch(n,{headers:{Accept:"application/json"}}).then((function(n){return n.json()})).then((function(n){return p(n)})).catch((function(n){return a(n)}))}),[n]),i?(console.log(u),Object(r.jsx)("p",{children:"Error!"})):[u]}},81:function(n,t,e){"use strict";e.r(t);var o,c,r=e(48),i=e(13),a=e(2),l=e(49),s=e(0),u=e(50),p=e(73),x=e(55),h=e(7),b=function(n){var t=n.match.params.slug,e=window.location.hash,o=e.substring(e.lastIndexOf("/")+1);console.log(t),console.log(o);var c="https://dev.to/api/articles/".concat(o),r=Object(x.a)(c),a=Object(u.a)(r,1)[0];return console.log(a),Object(h.jsx)(d,{children:Object(h.jsxs)(s.Suspense,{fallback:Object(h.jsx)("div",{children:"Loading.."}),children:[Object(h.jsx)("div",{id:"return",children:Object(h.jsx)(i.b,{to:"/blog",children:"Return"})}),Object(h.jsx)("h1",{id:"title",children:a.title}),Object(h.jsx)(p.a,{content:a.body_html})]})})},d=l.c.article(o||(o=Object(r.a)(["\n  #return {\n    text-align: center;\n    margin-bottom: 40px;\n  }\n\n  #title {\n    text-align: center;\n    font-size: 25px;\n    margin-bottom: 20px;\n    box-shadow: "," 0px 1px 0px,\n      "," 0px 1px 0px inset;\n  }\n\n  img {\n    width: 100%;\n    margin: 10px 0;\n    box-shadow: "," 0px 2px 8px 0px;\n  }\n\n  a {\n    color: orange;\n    text-decoration: none;\n    font-weight: bold;\n  }\n\n  h1,\n  h2,\n  h3,\n  h4 {\n    margin-top: 20px;\n    color: ",";\n  }\n\n  .highlight {\n    background-color: ",";\n    padding: 10px;\n    margin: 10px 0;\n  }\n\n  code {\n    background-color: ",";\n    font-size: 12px;\n    color: red;\n  }\n\n  .readme-overview {\n    ",";\n    text-align: center;\n    padding: 20px;\n    margin-bottom: 20px;\n    box-shadow: "," 0px 15px 20px -20px;\n\n    img {\n      width: 20px;\n      margin-right: 10px;\n      box-shadow: none;\n    }\n\n    h2 {\n      display: flex;\n      align-items: center;\n      justify-content: center;\n    }\n  }\n"])),(function(n){return n.theme.fontColor1}),(function(n){return n.theme.fontColor1}),(function(n){return n.theme.fontColor1}),(function(n){return n.theme.fontColor1}),(function(n){return n.theme.buttonBgHover}),(function(n){return n.theme.buttonBgHover}),(function(n){return n.theme.buttonBg}),(function(n){return n.theme.fontColor1})),j=Object(s.lazy)((function(){return e.e(22).then(e.bind(null,86))})),f=Object(s.lazy)((function(){return e.e(10).then(e.bind(null,87))})),g=Object(s.lazy)((function(){return e.e(23).then(e.bind(null,88))})),m=Object(s.lazy)((function(){return e.e(21).then(e.bind(null,89))})),O=Object(s.lazy)((function(){return e.e(9).then(e.bind(null,90))})),w=(t.default=function(){return Object(h.jsx)(w,{id:"content",children:Object(h.jsx)(i.a,{children:Object(h.jsx)(a.c,{children:Object(h.jsxs)(s.Suspense,{fallback:Object(h.jsx)("div",{children:"Loading"}),children:[Object(h.jsx)(a.a,{path:"/",component:j,exact:!0}),Object(h.jsx)(a.a,{path:"/skills",component:g}),Object(h.jsx)(a.a,{path:"/repositories",component:f}),Object(h.jsx)(a.a,{path:"/contact",component:m}),Object(h.jsx)(a.a,{path:"/blog/",component:O}),Object(h.jsx)(a.a,{path:"/post/:slug",component:b})]})})})})},l.c.section(c||(c=Object(r.a)(["\n  width: 70%;\n  max-width: 936px;\n  margin: 40px 24px 0 8px;\n  padding: 24px;\n  border: 1px solid ",";\n  border-radius: 6px;\n\n  @media (max-width: 768px) {\n    border: none;\n    margin: 8px 0;\n    padding: 30px;\n  }\n"])),(function(n){return n.theme.boxBorder})))}}]);
//# sourceMappingURL=13.5ead00a0.chunk.js.map
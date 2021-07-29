(this.webpackJsonparchianne=this.webpackJsonparchianne||[]).push([[0],{45:function(n,e,t){"use strict";t.r(e);var i,o,r,c,a,l,s,d,h,p,x,b,u,j,m,g,f,O,w,v=t(2),y=t.n(v),B=t(26),C=t.n(B),F=t(16),k=t(10),E=t(4),N=t(3),I=t(27),z=t(20),A=t(14),D=t(17),S=t(28),H=t(21),M=t(22),P=t(29),L=t(30),R={Menu:A.b,Github:I.a,Bell:z.a,Plus:D.c,Arrow:A.a,Book:D.a,Repo:H.a,Project:A.c,Cube:D.b,People:S.a,Star:z.b,Building:H.b,Map:M.b,Mail:M.a,Link:P.a,Linkedin:L.a},_=t(1),U=function(n){var e=n.src,t=n.alt,i=n.title;return Object(_.jsx)(G,{src:e,alt:t,title:i})},G=N.c.img(i||(i=Object(E.a)(["\n  border-radius: 50%;\n"]))),J=function(){return Object(_.jsx)("form",{children:Object(_.jsx)(T,{type:"search",placeholder:"Search or jump to..."})})},T=N.c.input(o||(o=Object(E.a)(["\n  outline: none;\n  margin: 0 16px;\n  -webkit-appearance: textfield;\n  -webkit-box-sizing: content-box;\n  font-family: inherit;\n  font-size: 100%;\n  background: ",'\n    url("https://github.githubassets.com/images/search-key-slash.svg") no-repeat\n    right 8px center;\n  border: solid 1px ',';\n  border-radius: 6px;\n  width: 245px;\n  min-height: 28px;\n  padding: 0 12px;\n  font-weight: 400;\n  max-width: 100%;\n  transition: all 0.5s;\n  line-height: 20px;\n\n  &&::-webkit-search-decoration,\n  &&::-webkit-search-cancel-button {\n    display: none;\n  }\n\n  &&[type="search"]:focus {\n    width: 418px;\n    background-color: ',";\n    border-color: ",";\n    -webkit-box-shadow: 0 0 5px rgba(109, 207, 246, 0.5);\n    -moz-box-shadow: 0 0 5px rgba(109, 207, 246, 0.5);\n    box-shadow: 0 0 5px rgba(109, 207, 246, 0.5);\n  }\n\n  &&::placeholder {\n    color: ",";\n  }\n\n  &&::-webkit-input-placeholder {\n    color: ",";\n  }\n\n  &&:-moz-placeholder {\n    color: ",";\n  }\n"])),(function(n){return n.theme.navInputBg}),(function(n){return n.theme.navBorder}),(function(n){return n.theme.navInputFocus}),(function(n){return n.theme.navBorder2}),(function(n){return n.theme.navInputColor}),(function(n){return n.theme.navInputColor}),(function(n){return n.theme.navInputColor})),K=function(n){var e=n.children,t=n.href;return Object(_.jsx)(V,{href:t,children:e})},V=N.c.a(r||(r=Object(E.a)(["\n  color: ",";\n  margin-right: 16px;\n  font-weight: 645;\n  text-decoration: none;\n"])),(function(n){return n.theme.navFontColor})),$=function(n){return Object(_.jsxs)(q,{children:[Object(_.jsx)(R.Menu,{className:"menu-icon"}),Object(_.jsxs)(Q,{children:[Object(_.jsx)(R.Github,{className:"logo-icon",onClick:n.changeTheme}),Object(_.jsx)(J,{}),Object(_.jsx)(K,{href:"/",children:"Pulls"}),Object(_.jsx)(K,{href:"/",children:"Issues"}),Object(_.jsx)(K,{href:"/",children:"Marketplace"}),Object(_.jsx)(K,{href:"/",children:"Explore"})]}),Object(_.jsxs)(Q,{children:[Object(_.jsx)(R.Bell,{className:"nav-icon bell-icon"}),Object(_.jsx)(R.Plus,{className:"nav-icon plus-icon"}),Object(_.jsx)(R.Arrow,{className:"nav-icon arrow-icon"}),Object(_.jsx)(U,{src:"https://github.com/Archianne.png",alt:"Archianne"}),Object(_.jsx)(R.Arrow,{className:"nav-icon arrow-icon"})]})]})},q=N.c.nav(c||(c=Object(E.a)(["\n  display: flex;\n  flex-flow: row no-wrap;\n  justify-content: space-between;\n  align-items: center;\n  padding: 16px 24px;\n  line-height: 21px;\n  height: 62px;\n  background: ",";\n  color: ",";\n  @media (max-width: 768px) {\n    padding: 16px 16px;\n  }\n\n  .logo-icon {\n    width: 32px;\n    height: auto;\n  }\n\n  .menu-icon {\n    width: 24px;\n    height: 24px;\n    @media (min-width: 768px) {\n      display: none;\n    }\n  }\n"])),(function(n){return n.theme.navBg}),(function(n){return n.theme.navFontColor})),Q=N.c.div(a||(a=Object(E.a)(["\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  @media (max-width: 768px) {\n    .arrow-icon,\n    .plus-icon,\n    img,\n    a,\n    input {\n      display: none;\n    }\n  }\n\n  .arrow-icon {\n    width: 10px;\n    height: 10px;\n    margin-right: 16px;\n    margin-left: 3px;\n  }\n\n  .bell-icon {\n    margin-right: 16px;\n    width: 16px;\n    height: 16px;\n    @media (max-width: 768px) {\n      margin: 0;\n    }\n  }\n\n  .plus-icon {\n    width: 20px;\n    height: 20px;\n  }\n\n  img {\n    width: 20px;\n  }\n"]))),W=function(n){var e=Object(v.useState)(null),t=Object(k.a)(e,2),i=t[0],o=t[1],r=Object(v.useState)({}),c=Object(k.a)(r,2),a=c[0],l=c[1];return Object(v.useEffect)((function(){fetch(n,{headers:{Accept:"application/json"}}).then((function(n){return n.json()})).then((function(n){return l(n)})).catch((function(n){return o(n)}))}),[n]),i?(console.log(a),Object(_.jsx)("p",{children:"Error!"})):[a]},X=N.c.button(l||(l=Object(E.a)(["\n  max-width: 280px;\n  width: 100%;\n  height: 32px;\n  padding: 5px 16px;\n  transition: 0.2s cubic-bezier(0.3, 0, 0.5, 1);\n  border: 1px solid ",";\n  border-radius: 6px;\n  cursor: pointer;\n  font-size: 13px;\n  font-weight: 550;\n  line-height: 20px;\n  user-select: none;\n  box-shadow: rgba(27, 31, 35, 0.04) 0px 1px 0px 0px,\n    rgba(255, 255, 255, 0.25) 0px 0px 0px 0px inset;\n  color: ",";\n  background-color: ",";\n\n  &&:hover {\n    background-color: ",";\n    border: 1px solid $((props) => props.theme.buttonBorderHover)\n  }\n\n  @media (max-width: 768px) {\n    max-width: 85vw;\n    height: 30px;\n  }\n"])),(function(n){return n.theme.boxBorder}),(function(n){return n.theme.fontColor1}),(function(n){return n.theme.buttonBg}),(function(n){return n.theme.buttonBgHover})),Y=function(n){var e=n.children;return Object(_.jsx)(X,{id:"button",children:e})},Z=function(n){var e=n.value;return Object(_.jsx)(nn,{id:"followers",children:Object(_.jsxs)("p",{children:[Object(_.jsx)(R.People,{className:"icon"})," ",Object(_.jsx)("span",{children:e.followers}),"followers ",Object(_.jsx)("span",{style:{marginLeft:5},children:"\xb7"})," ",Object(_.jsx)("span",{children:e.following})," following",Object(_.jsx)("span",{style:{marginLeft:5},children:"\xb7"}),Object(_.jsx)(R.Star,{className:"icon"})," ",Object(_.jsx)("span",{children:e.public_repos})]})})},nn=N.c.div(s||(s=Object(E.a)(["\n  p {\n    overflow: hidden;\n    text-overflow: ellipsis;\n    display: flex;\n    align-items: center;\n    color: ",";\n    padding-bottom: 16px;\n\n    span {\n      color: ",";\n      font-weight: 600;\n      margin-right: 5px;\n    }\n  }\n"])),(function(n){return n.theme.fontColor2}),(function(n){return n.theme.spamFontColor})),en=function(n){var e=n.value;return Object(_.jsxs)(tn,{id:"infos",children:[Object(_.jsxs)("p",{children:[Object(_.jsx)(R.Building,{className:"icon"})," ",e.company]}),Object(_.jsxs)("p",{children:[Object(_.jsx)(R.Mail,{className:"icon"})," helena19w@gmail.com"]}),Object(_.jsxs)("p",{children:[Object(_.jsx)(R.Map,{className:"icon"})," ",e.location]}),Object(_.jsxs)("p",{children:[Object(_.jsx)(R.Link,{className:"icon"}),Object(_.jsx)(K,{href:e.blog,children:"@archianne.jsx"})]}),Object(_.jsxs)("p",{children:[Object(_.jsx)(R.Linkedin,{className:"icon"}),Object(_.jsx)(K,{href:"https://www.linkedin.com/in/helena-archer/",children:"/in/helena-archer"})]})]})},tn=N.c.div(d||(d=Object(E.a)(["\n  p {\n    overflow: hidden;\n    text-overflow: ellipsis;\n    display: flex;\n    align-items: center;\n  }\n\n  a {\n    text-decoration: none;\n    color: ",";\n  }\n  \n  a:hover {\n    color: ",";\n  }\n"])),(function(n){return n.theme.fontColor1}),(function(n){return n.theme.fontColor2})),on=function(n){var e=n.value;return Object(_.jsxs)(rn,{id:"username",children:[Object(_.jsx)(U,{src:e.avatar_url,alt:"Profile"}),Object(_.jsxs)("div",{children:[Object(_.jsx)("h1",{children:e.name}),Object(_.jsx)("h3",{children:e.login})]})]})},rn=N.c.div(h||(h=Object(E.a)(["\n  h1 {\n    font-size: 26px;\n    line-height: 1.25;\n    padding-top: 16px;\n  }\n\n  h3 {\n    font-size: 20px;\n    font-style: normal;\n    font-weight: 300;\n    line-height: 24px;\n    color: ",";\n    padding-bottom: 16px;\n  }\n\n  img {\n    max-width: 280px;\n    width: 100%;\n    border-radius: 50%;\n    align-self: center;\n  }\n\n  @media (max-width: 768px) {\n    display: flex;\n    flex-flow: row;\n    margin-bottom: 24px;\n\n    img {\n      width: 55px;\n      margin-right: 16px;\n    }\n\n    h1,\n    h3 {\n      padding: 0;\n    }\n  }\n"])),(function(n){return n.theme.fontColor2})),cn=N.c.hr(p||(p=Object(E.a)(["\n  margin-top: 16px;\n  background-color: ",";\n  border: none;\n  height: 1px;\n"])),(function(n){return n.theme.boxBorder})),an=function(){return Object(_.jsx)(cn,{})},ln=function(n){var e=n.value;return Object(_.jsxs)(sn,{id:"organization",children:[Object(_.jsx)(an,{}),Object(_.jsx)("h4",{children:"Organizations"}),Object(_.jsx)(U,{src:"https://github.com/SchoolOfCode.png",alt:e.company,title:e.company})]})},sn=N.c.div(x||(x=Object(E.a)(["\nh4 {\n    font-size: 16px;\n    color: ",";\n    font-weight: 600;\n    padding-top: 16px;\n    margin-bottom: 8px;\n  }\n\n img {\n    width: 32px;\n    align-self: flex-start;\n    border-radius: 6px;\n  }\n"])),(function(n){return n.theme.fontColor1})),dn=function(){var n=W("https://api.github.com/users/Archianne"),e=Object(k.a)(n,1)[0];return Object(_.jsxs)(hn,{id:"sideBar",children:[Object(_.jsx)(on,{value:e}),Object(_.jsx)(Y,{children:"Follow"}),Object(_.jsx)("div",{id:"bio",children:Object(_.jsx)("p",{children:e.bio})}),Object(_.jsx)(Z,{value:e}),Object(_.jsx)(en,{value:e}),Object(_.jsx)(ln,{value:e})]})},hn=N.c.aside(b||(b=Object(E.a)(["\n  display: flex;\n  flex-direction: column;\n  line-height: 21px;\n  width: 24%;\n  max-width: 312px;\n  margin: -30px 8px 0 8px;\n  padding-left: 16px;\n\n  #bio {\n    p {\n    padding: 16px 0;\n    }\n  }\n\n  .icon {\n    margin-right: 5px;\n  }\n\n  @media (max-width: 768px) {\n    margin: 0;\n    padding: 0;\n\n    #username {\n      order: 1;\n    }\n\n    #bio {\n      order: 2;\n    }\n\n    #infos {\n      order: 3;\n    }\n\n    #followers {\n      order: 4;\n    }\n\n    #button {\n      order: 5;\n      margin: 0 0 16px 0;\n      padding: 0;\n      width: 100%;\n      text-align: center;\n    }\n\n    #organization {\n      display: none;\n    }\n"]))),pn=t(5),xn=function(){return Object(_.jsxs)(bn,{children:[Object(_.jsx)("p",{children:"Hi there \ud83d\udc4b My name is Helena, I live in the UK and studying full time to become a front-end developer. I have studied Engineering but I feel like now I'm following my dreams. I can't wait for what the future holds. \ud83c\udf31 I\u2019m currently studying at School of Code."}),Object(_.jsx)("img",{src:"https://github.com/archianne/archianne/raw/output/github-contribution-grid-snake.svg",alt:"Contributions"}),Object(_.jsx)("img",{className:"views",src:"https://komarev.com/ghpvc/?username=Archianne&color=green&label=Views",alt:"views"})]})},bn=N.c.div(u||(u=Object(E.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n\n  img {\n    width: 100%;\n  }\n\n  .views {\n    width: auto;\n    margin-top: 50px;\n    text-align: center;\n  }\n"]))),un=function(){var n=W("https://api.github.com/users/Archianne/repos"),e=Object(k.a)(n,1)[0],t=Array.isArray(e)&&e.slice(0,15).map((function(n){return Object(_.jsxs)(mn,{children:[Object(_.jsx)("p",{children:n.name}),Object(_.jsx)(an,{}),Object(_.jsx)("a",{href:n.html_url,children:"Repository"}),Object(_.jsx)(an,{}),Object(_.jsx)("a",{href:"https://archianne.github.io/".concat(n.name),children:"Preview"})]},n.id)}));return Object(_.jsx)(jn,{children:t})},jn=N.c.ul(j||(j=Object(E.a)(["\n  display: flex;\n  flex-flow: row wrap;\n  width: 100%;\n  flex-basis: auto;\n  justify-content: space-around;\n"]))),mn=N.c.li(m||(m=Object(E.a)(["\n  list-style-type: none;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  height: 150px;\n  min-width: 150px;\n  width: 25%;\n  margin: 5px 10px;\n  padding: 10px;\n  border: 1px solid ",";\n"])),(function(n){return n.theme.boxBorder})),gn=function(){return Object(_.jsx)(_.Fragment,{children:Object(_.jsx)("h1",{children:"Hi"})})},fn=function(){return Object(_.jsx)(_.Fragment,{children:Object(_.jsx)("p",{children:"Email: helena19w@gmail.com"})})},On=function(){return Object(_.jsx)(wn,{id:"content",children:Object(_.jsx)(F.a,{children:Object(_.jsxs)(pn.c,{children:[Object(_.jsx)(pn.a,{path:"/",component:xn,exact:!0}),Object(_.jsx)(pn.a,{path:"/skills",component:gn}),Object(_.jsx)(pn.a,{path:"/repositories",component:un}),Object(_.jsx)(pn.a,{path:"/contact",component:fn})]})})})},wn=N.c.section(g||(g=Object(E.a)(["\n  width: 70%;\n  max-width: 936px;\n  margin: 40px 24px 0 8px;\n  padding: 24px;\n  border: 1px solid ",";\n  border-radius: 6px;\n\n  @media (max-width: 768px) {\n    border: none;\n    margin: 8px 0;\n    padding: 30px;\n  }\n"])),(function(n){return n.theme.boxBorder})),vn=N.c.nav(f||(f=Object(E.a)(["\n  display: flex;\n  justify-content: center;\n  width: 100vw;\n  border-bottom: 1px solid ",";\n  color: "," !important;\n\n  .blank {\n    width: 24%;\n    max-width: 312px;\n    margin: 0px 8px;\n    padding-left: 16px;\n    visibility: hidden;\n  }\n\n  .main {\n    display: flex;\n    width: 70%;\n    max-width: 936px;\n    margin: 0px 24px 0 8px;\n  }\n\n  .tabs {\n    padding: 8px 16px;\n    height: 48px;\n  }\n\n  p {\n    margin: 0 7px;\n  }\n\n  a {\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    text-decoration: none;\n    color: ",";\n  }\n\n  .num {\n    background-color: ",";\n    border-radius: 24px;\n    min-width: 20px;\n    font-size: 12px;\n    padding: 0 6px;\n    font-weight: 500;\n  }\n\n  .active {\n    border-bottom: 2px solid "," !important;\n    font-weight: 600;\n\n    a {\n      color: "," !important;\n    }\n  }\n\n  @media (max-width: 768px) {\n    .main {\n      display: flex;\n      justify-content: space-between;\n    }\n    .items {\n      display: none;\n    }\n\n    .icon {\n      margin: 0 10px;\n    }\n  }\n"])),(function(n){return n.theme.boxBorder}),(function(n){return n.theme.fontColor1}),(function(n){return n.theme.fontColor2}),(function(n){return n.theme.numBg}),(function(n){return n.theme.active}),(function(n){return n.theme.fontColor1})),yn=function(){var n=W("https://api.github.com/users/Archianne"),e=Object(k.a)(n,1)[0],t=[{title:"Overview",icon:R.Book,path:""},{title:"Repositories",icon:R.Repo,path:"repositories",num:e.public_repos},{title:"Skills",icon:R.Project,path:"skills"},{title:"Contact me",icon:R.Cube,path:"contact"}];return Object(_.jsxs)(vn,{id:"cNavBar",children:[Object(_.jsx)("div",{className:"blank"}),Object(_.jsx)("div",{className:"main",children:t.map((function(n,e){return Object(_.jsx)("div",{className:"tabs ".concat(window.location.pathname.split("/#/").pop()==="/".concat(n.path)?"active":""),children:Object(_.jsxs)(K,{href:"/#/"+n.path,children:[Object(_.jsx)(n.icon,{className:"icon"}),Object(_.jsx)("p",{className:"items",children:n.title}),n.num&&Object(_.jsx)("div",{className:"num",children:n.num})]})},e)}))})]})},Bn=function(){return Object(_.jsxs)(Cn,{children:[Object(_.jsx)(yn,{}),Object(_.jsx)(dn,{}),Object(_.jsx)(On,{})]})},Cn=N.c.main(O||(O=Object(E.a)(["\n  display: flex;\n  flex-flow: row wrap;\n  justify-content: center;\n  align-content: flex-start;\n  height: 100vh;\n  width: 100%;\n  margin-top: 25px;\n\n  @media (max-width: 768px) {\n    flex-flow: column no-wrap;\n    width: 100vw;\n\n    #cNavBar {\n\n      order: 2;\n      width: 100vw;\n      overflow-x: scroll;\n      .blank {\n        display: none;\n      }\n    }\n\n    #sideBar {\n      order: 1;\n      width: 100vw;\n    }\n\n    #content {\n      order: 3;\n      width: 100vw;\n    }\n  }\n"]))),Fn={light:{bg:"#ffffff",boxBorder:"#E1E4E8",line:"#EBEDEF",fontColor1:"#24292E",fontColor2:"#6B727A",navBg:"#24292E",navInputBg:"#24292E",navInputFocus:"#FFFFFF",navFontColor:"#FFFFFF",navFontColor2:"#24292E",navInputColor:"#B7C3C5",navBorder:"#444D56",navBorder2:"#0366D6",statusBg:"#FFFFFF",spamFontColor:"#24292E",buttonBg:"#FAFBFC",buttonBgHover:"#f3f4f6",buttonBorderHover:"#E1E4E8",numBg:"#E8EAEC",active:"#f9826c"},dark:{bg:"#0D1117",boxBorder:"#30363D",lines:"#21262D",fontColor1:"#C9D1D9",fontColor2:"#808892",navBg:"#161B22",navInputBg:"#0D1117",navInputFocus:"#0D1117",navFontColor:"#F0F6FC",navFontColor2:"#C2C3C5",navInputColor:"#C2C3C5",navBorder:"#21262D",navBorder2:"#0366D6",statusBg:"#0D1117",spamFontColor:"#FFFFFF",buttonBg:"#21262D",buttonBgHover:"#30363d",buttonBorderHover:"#8b949e",numBg:"#262C32",active:"#f9826c"}},kn=Object(N.b)(w||(w=Object(E.a)(["\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  }\n\nbody {\n  background-color: ",";\n  color: ",";\n  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji;\n  font-size: 14px;\n  line-height: 1.5;\n  transition: 0.2s cubic-bezier(0.3, 0, 0.5, 1);\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\nhtml::-webkit-scrollbar {\n  width: 20px;\n}\n\nhtml::-webkit-scrollbar-track {\n  background-color: ",";\n}\n\nhtml::-webkit-scrollbar-thumb {\n  border: 5px solid transparent;\n  background-clip: content-box;\n  background-color: ",";\n}\n"])),(function(n){return n.theme.bg}),(function(n){return n.theme.fontColor1}),(function(n){return n.theme.navBg}),(function(n){return n.theme.numBg}));var En=function(){var n=Object(v.useState)("light"),e=Object(k.a)(n,2),t=e[0],i=e[1];return Object(_.jsxs)(N.a,{theme:Fn[t],children:[Object(_.jsx)(kn,{}),Object(_.jsx)($,{changeTheme:function(){i("light"===t?"dark":"light")}}),Object(_.jsx)(Bn,{})]})},Nn=document.getElementById("root");C.a.render(Object(_.jsx)(y.a.StrictMode,{children:Object(_.jsx)(F.a,{children:Object(_.jsx)(En,{})})}),Nn)}},[[45,1,2]]]);
//# sourceMappingURL=main.3545f5d7.chunk.js.map
(this["webpackJsonpgithub-repos-app"]=this["webpackJsonpgithub-repos-app"]||[]).push([[0],{40:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){},43:function(e,t,n){},44:function(e,t,n){},45:function(e,t,n){},71:function(e,t,n){},72:function(e,t,n){},73:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),r=n(33),s=n.n(r),i=(n(40),n(19)),u=n(3),o=(n(41),n(42),n(43),n(44),n(9)),l=(n(45),n(12)),j=n(13),b=n(1);var d=function(e){var t=Object(c.useState)(""),n=Object(o.a)(t,2),a=n[0],r=n[1],s=function(){e.onSearch(a)};return Object(b.jsxs)("div",{className:"search-bar d-flex",style:{width:e.width},children:[Object(b.jsx)("input",{type:"text",className:"search-bar__input p-10",name:"search",placeholder:e.label,value:a,onChange:function(e){r(e.target.value)},onKeyPress:function(e){"Enter"===e.key&&s()}}),Object(b.jsx)("button",{className:"search-bar__button button button--primary p-10",onClick:s,children:Object(b.jsx)(l.a,{className:"search-bar__icon",icon:j.b})})]})};var h=function(){var e=Object(u.f)();return Object(b.jsxs)("section",{className:"container bg-primary text-primary d-flex col a-center j-center",children:[Object(b.jsx)(l.a,{icon:j.a,className:"icon mb-10"}),Object(b.jsx)(d,{label:"Search user",onSearch:function(t){t&&t.trim()&&e.push("/user/".concat(t))},width:"50%"})]})},p=n(11),f=n.n(p),x=n(16),O=n(35),m=n.n(O).a.create({baseURL:"https://api.github.com/users/",responseType:"json"}),v=n(22),g=n.n(v);n(71);var N=function(e){return Object(b.jsxs)("div",{className:"card text-primary",children:[Object(b.jsx)("h1",{children:Object(b.jsx)("a",{href:e.link,target:"blank",children:e.title})}),Object(b.jsx)("p",{children:e.description})]})};n(72);var _=function(){var e="user repos",t="User Not Found",n="Empty",r=[e,"starred repos"],s=Object(c.useState)(e),i=Object(o.a)(s,2),d=i[0],h=i[1],p=Object(u.g)().userName,O=Object(c.useState)(),v=Object(o.a)(O,2),_=v[0],y=v[1],w=Object(c.useState)([]),k=Object(o.a)(w,2),S=k[0],F=k[1],C=Object(c.useState)(""),P=Object(o.a)(C,2),E=P[0],L=P[1],T=Object(c.useState)(""),B=Object(o.a)(T,2),I=B[0],J=B[1],U="bubbles";Object(c.useEffect)((function(){D(p),K(p,d)}),[]);var D=function(){var e=Object(x.a)(f.a.mark((function e(t){var n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,M(t);case 3:n=e.sent,y(n),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),L(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),K=function(){var t=Object(x.a)(f.a.mark((function t(n,c){var a;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(F([]),t.prev=1,c!==e){t.next=8;break}return t.next=5,R(n);case 5:t.t0=t.sent,t.next=11;break;case 8:return t.next=10,q(n);case 10:t.t0=t.sent;case 11:a=t.t0,F(a),t.next=18;break;case 15:t.prev=15,t.t1=t.catch(1),J(t.t1);case 18:case"end":return t.stop()}}),t,null,[[1,15]])})));return function(e,n){return t.apply(this,arguments)}}(),M=function(e){return new Promise((function(n,c){m.get(e).then((function(e){e.data?n(e.data):c(t)}),(function(e){c(t)}))}))},R=function(e){return new Promise((function(t,c){m.get("".concat(e,"/repos")).then((function(e){e.data&&e.data.length?t(e.data):c(n)}),(function(e){c(n)}))}))},q=function(e){return new Promise((function(t,c){m.get("".concat(e,"/starred")).then((function(e){e.data&&e.data.length>0?t(e.data):c(n)}),(function(e){c(n)}))}))},z=function(){var e=Object(x.a)(f.a.mark((function e(t){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:h(t.target.value),K(p,t.target.value);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return _?Object(b.jsxs)("section",{className:"container bg-primary text-primary d-flex col p-20",children:[Object(b.jsxs)("div",{className:"user-details",children:[Object(b.jsx)("figure",{className:"user-details__avatar",children:Object(b.jsx)("img",{src:_.avatar_url})}),Object(b.jsxs)("div",{className:"user-details__text-container",children:[Object(b.jsxs)("h2",{className:"user-details__title",children:["Name: ",_.login]}),_.email?Object(b.jsxs)("h4",{className:"user-details__subtitle",children:["Email: ",_.email]}):"",_.followers?Object(b.jsxs)("h4",{className:"user-details__subtitle",children:["Fallowers: ",_.followers]}):"",_.bio?Object(b.jsx)("p",{className:"user-details__description",children:_.bio}):""]})]}),Object(b.jsxs)("div",{children:[Object(b.jsx)("select",{className:"select-input mt-20",value:d,onChange:function(e){z(e)},children:r.map((function(e,t){return Object(b.jsx)("option",{className:"select-input__option",value:e,children:e},t)}))}),S.length>0?Object(b.jsx)(a.a.Fragment,{children:S.map((function(e,t){return Object(b.jsx)(N,{title:e.name,link:e.clone_url,description:e.description,private:e.private,date:e.updated_at},t)}))}):Object(b.jsx)("div",{className:"d-flex a-center j-center mt-10",children:I?Object(b.jsx)("h5",{children:I}):Object(b.jsx)(g.a,{type:U})})]})]}):Object(b.jsx)("div",{className:"container d-flex col a-center j-center bg-primary text-primary",children:E?Object(b.jsxs)(a.a.Fragment,{children:[Object(b.jsx)(l.a,{icon:j.c,className:"icon"}),Object(b.jsx)("h1",{children:E})]}):Object(b.jsx)(g.a,{type:U})})};var y=function(){return Object(b.jsx)(i.a,{children:Object(b.jsxs)(u.c,{children:[Object(b.jsx)(u.a,{exact:!0,path:"/",children:Object(b.jsx)(h,{})}),Object(b.jsx)(u.a,{exact:!0,path:"/user/:userName",children:Object(b.jsx)(_,{})})]})})},w=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,74)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),r(e),s(e)}))};s.a.render(Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)(y,{})}),document.getElementById("root")),w()}},[[73,1,2]]]);
//# sourceMappingURL=main.d126b04f.chunk.js.map
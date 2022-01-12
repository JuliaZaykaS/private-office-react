(this["webpackJsonpprivate-office-react"]=this["webpackJsonpprivate-office-react"]||[]).push([[0],{124:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(24),i=n.n(c),o=n(8),s=n(33),u=(n(94),n(95),n(10)),l=n(60),j=n.n(l),d=n(1);function b(e){var t=e.title,n=e.children;return Object(d.jsxs)("div",{className:j.a.section,children:[Object(d.jsx)("h1",{className:j.a.title,children:t}),n]})}var O=n(9),f=n(131),m=n(126);function p(e){var t=e.message,n=e.children,r=Object(a.useState)(!0),c=Object(O.a)(r,2),i=c[0],o=c[1];return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)(f.a,{show:i,variant:"warning",transition:!0,children:[Object(d.jsx)(f.a.Heading,{children:t}),n,Object(d.jsx)("div",{className:"d-flex justify-content-end",children:Object(d.jsx)(m.a,{onClick:function(){return o(!1)},variant:"outline-warning",children:"X"})})]}),!i&&Object(d.jsx)(m.a,{onClick:function(){return o(!0)},children:"Show Alert"})]})}var h=n(129),v=n(13),g=n.n(v),x=n(27),_=n(11),C=n(18),k=n.n(C);k.a.defaults.baseURL="https://backend-for-phonebook.herokuapp.com/";var L=function(e){k.a.defaults.headers.common.Authorization="Bearer ".concat(e)},y=function(){k.a.defaults.headers.common.Authorization=""},w=Object(_.c)("auth/register",function(){var e=Object(x.a)(g.a.mark((function e(t,n){var a,r;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,k.a.post("/users/signup",t);case 3:return a=e.sent,r=a.data,e.abrupt("return",r);case 8:return e.prev=8,e.t0=e.catch(0),e.abrupt("return",n.rejectWithValue(e.t0.response.data.message));case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t,n){return e.apply(this,arguments)}}()),N=Object(_.c)("auth/verify",function(){var e=Object(x.a)(g.a.mark((function e(t,n){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,k.a.post("/users/verify",t);case 3:e.next=8;break;case 5:return e.prev=5,e.t0=e.catch(0),e.abrupt("return",n.rejectWithValue(e.t0.response.data.message));case 8:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(t,n){return e.apply(this,arguments)}}()),I=Object(_.c)("auth/login",function(){var e=Object(x.a)(g.a.mark((function e(t,n){var a,r;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,k.a.post("/users/login",t);case 3:return a=e.sent,r=a.data,L(r.token),e.abrupt("return",r);case 9:return e.prev=9,e.t0=e.catch(0),e.abrupt("return",n.rejectWithValue(e.t0.response.data.message));case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t,n){return e.apply(this,arguments)}}()),E=Object(_.c)("auth/logout",function(){var e=Object(x.a)(g.a.mark((function e(t,n){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,k.a.post("/users/logout");case 3:y(),e.next=9;break;case 6:return e.prev=6,e.t0=e.catch(0),e.abrupt("return",n.rejectWithValue(e.t0.response.data.message));case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t,n){return e.apply(this,arguments)}}()),S=Object(_.c)("auth/refresh",function(){var e=Object(x.a)(g.a.mark((function e(t,n){var a,r,c,i;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=n.getState(),null!==(r=a.auth.token)){e.next=4;break}return e.abrupt("return",n.rejectWithValue());case 4:return L(r),e.prev=5,e.next=8,k.a.get("/users/current");case 8:return c=e.sent,i=c.data,e.abrupt("return",i);case 13:return e.prev=13,e.t0=e.catch(5),e.abrupt("return",n.rejectWithValue(e.t0.response.data.message));case 16:case"end":return e.stop()}}),e,null,[[5,13]])})));return function(t,n){return e.apply(this,arguments)}}()),A=n(77),B=n.n(A);function z(){var e=Object(o.b)(),t=Object(a.useState)(""),n=Object(O.a)(t,2),r=n[0],c=n[1],i=Object(a.useState)(""),s=Object(O.a)(i,2),u=s[0],l=s[1],j=Object(a.useState)(""),b=Object(O.a)(j,2),f=b[0],p=b[1],v=function(e){var t=e.currentTarget,n=t.name,a=t.value;switch(n){case"name":return c(a);case"email":return l(a);case"password":return p(a);default:return}};return Object(d.jsx)("div",{className:B.a.form,children:Object(d.jsxs)(h.a,{onSubmit:function(t){t.preventDefault(),e(w({name:r,email:u,password:f})),c(""),l(""),p("")},children:[Object(d.jsxs)(h.a.Group,{className:"mb-3",controlId:"floatingTextarea",children:[Object(d.jsx)(h.a.Label,{children:"Name"}),Object(d.jsx)(h.a.Control,{type:"text",placeholder:"Enter name",name:"name",required:!0,value:r,onChange:v})]}),Object(d.jsxs)(h.a.Group,{className:"mb-3",controlId:"formBasicEmail",children:[Object(d.jsx)(h.a.Label,{children:"Email"}),Object(d.jsx)(h.a.Control,{type:"email",placeholder:"Enter email",name:"email",required:!0,value:u,onChange:v})]}),Object(d.jsxs)(h.a.Group,{className:"mb-3",controlId:"formBasicPassword",children:[Object(d.jsx)(h.a.Label,{children:"Password"}),Object(d.jsx)(h.a.Control,{type:"password",placeholder:"Enter password",name:"password",required:!0,value:f,onChange:v})]}),Object(d.jsx)(m.a,{variant:"outline-primary",type:"submit",children:"Registration"})]})})}var F=n(79),T=n.n(F);function G(){var e=Object(o.b)(),t=Object(a.useState)(""),n=Object(O.a)(t,2),r=n[0],c=n[1],i=Object(a.useState)(""),s=Object(O.a)(i,2),u=s[0],l=s[1],j=function(e){var t=e.currentTarget,n=t.name,a=t.value;switch(n){case"email":return c(a);case"password":return l(a);default:return}};return Object(d.jsx)("div",{className:T.a.form,children:Object(d.jsxs)(h.a,{onSubmit:function(t){t.preventDefault(),e(I({email:r,password:u})),c(""),l("")},children:[Object(d.jsxs)(h.a.Group,{className:"mb-3",controlId:"formBasicEmail",children:[Object(d.jsx)(h.a.Label,{children:"Email"}),Object(d.jsx)(h.a.Control,{type:"email",placeholder:"Enter email",name:"email",required:!0,value:r,onChange:j})]}),Object(d.jsxs)(h.a.Group,{className:"mb-3",controlId:"formBasicPassword",children:[Object(d.jsx)(h.a.Label,{children:"Password"}),Object(d.jsx)(h.a.Control,{type:"password",placeholder:"Enter password",name:"password",required:!0,value:u,onChange:j})]}),Object(d.jsx)(m.a,{variant:"outline-primary",type:"submit",children:"Log In"})]})})}var M=n(54),Z=n.n(M);function W(e){var t=e.userMail,n=Object(o.b)();return Object(d.jsxs)("div",{className:Z.a.navGreetings,children:[Object(d.jsxs)("p",{className:Z.a.greetings,children:["Hello, ",t]}),Object(d.jsx)(m.a,{variant:"outline-light",onClick:function(e){n(E())},className:Z.a.button,children:"Log out"})]})}var q=function(e){return e.auth.user.name},V=function(e){return e.auth.user.email},P=function(e){return e.auth.token},U=function(e){return e.auth.isLoggedIn},R=function(e){return e.auth.isGetCurrentUser},D=function(e){return e.auth.error},J=function(e){return e.auth.isLoading},H=n(130),$=n(127),Q=n(132),X=n(20),Y=n.n(X);function K(){var e=Object(o.c)(U),t=Object(o.c)(q);return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)(H.a,{bg:"primary",variant:"dark",sticky:"top",className:Y.a.navigation,children:Object(d.jsxs)($.a,{children:[Object(d.jsx)(H.a.Brand,{exact:"true",to:"/",children:"Phonebook"}),Object(d.jsx)(Q.a,{children:Object(d.jsxs)("div",{className:Y.a.navigationBar,children:[Object(d.jsx)("div",{children:Object(d.jsx)(s.b,{exact:!0,to:"/",className:Y.a.navLink,activeClassName:Y.a.navLinkActive,children:"Home"})}),e?Object(d.jsxs)("div",{className:Y.a.greetingsBox,children:[Object(d.jsx)(s.b,{to:"/contacts",className:Y.a.navLink,activeClassName:Y.a.navLinkActive,children:"Phonebook"}),Object(d.jsx)(W,{userMail:t,className:Y.a.userMenu})]}):Object(d.jsxs)("div",{className:Y.a.entrance,children:[Object(d.jsx)(s.b,{exact:!0,to:"/login",className:Y.a.navLink,activeClassName:Y.a.navLinkActive,children:"LogIn"}),Object(d.jsx)(s.b,{to:"/register",className:Y.a.navLink,activeClassName:Y.a.navLinkActive,children:"Registration"})]})]})})]})})})}var ee=n(2),te=n(3),ne=["children","redirectTo"];function ae(e){var t=e.children,n=e.redirectTo,a=void 0===n?"/":n,r=Object(te.a)(e,ne),c=Object(o.c)(U);return Object(d.jsx)(u.b,Object(ee.a)(Object(ee.a)({},r),{},{children:c?t:Object(d.jsx)(u.a,{to:a})}))}var re=["children","restricted","redirectTo"];function ce(e){var t=e.children,n=e.restricted,a=void 0!==n&&n,r=e.redirectTo,c=void 0===r?"/":r,i=Object(te.a)(e,re),s=Object(o.c)(U)&&a;return Object(d.jsx)(u.b,Object(ee.a)(Object(ee.a)({},i),{},{children:s?Object(d.jsx)(u.a,{to:c}):t}))}var ie=n(45),oe=function(e){return e.contacts.contacts},se=function(e){return e.contacts.filteredContacts},ue=function(e){return e.contacts.error},le=function(e){return e.contacts.isLoading},je=Object(ie.a)([oe,se],(function(e,t){var n=t.toLowerCase();return e.filter((function(e){return e.name.toLowerCase().includes(n)}))})),de=Object(_.c)("contacts/fetchContacts",function(){var e=Object(x.a)(g.a.mark((function e(t,n){var a,r,c;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=n.getState(),r=a.auth.token,L(r),e.prev=3,e.next=6,k.a.get("/api/contacts");case 6:return c=e.sent,e.abrupt("return",c.data.contacts.docs);case 10:return e.prev=10,e.t0=e.catch(3),e.abrupt("return",n.rejectWithValue(e.t0.message));case 13:case"end":return e.stop()}}),e,null,[[3,10]])})));return function(t,n){return e.apply(this,arguments)}}()),be=Object(_.c)("contacts/addContacts",function(){var e=Object(x.a)(g.a.mark((function e(t,n){var a,r,c,i,o,s;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.name,r=t.phone,c=t.email,i=n.getState(),o=i.auth.token,L(o),e.prev=4,e.next=7,k.a.post("/api/contacts",{name:a,phone:r,email:c});case 7:return s=e.sent,e.abrupt("return",s.data.contacts);case 11:return e.prev=11,e.t0=e.catch(4),e.abrupt("return",n.rejectWithValue(e.t0.message));case 14:case"end":return e.stop()}}),e,null,[[4,11]])})));return function(t,n){return e.apply(this,arguments)}}()),Oe=Object(_.c)("contacts/deleteContacts",function(){var e=Object(x.a)(g.a.mark((function e(t,n){var a,r;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=n.getState(),r=a.auth.token,L(r),e.prev=3,e.next=6,k.a.delete("/api/contacts/".concat(t));case 6:return e.abrupt("return",t);case 9:return e.prev=9,e.t0=e.catch(3),e.abrupt("return",n.rejectWithValue(e.t0.message));case 12:case"end":return e.stop()}}),e,null,[[3,9]])})));return function(t,n){return e.apply(this,arguments)}}()),fe=Object(_.c)("contacts/editContacts",function(){var e=Object(x.a)(g.a.mark((function e(t,n){var a,r,c,i,o,s,u;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t._id,r=t.name,c=t.phone,i=t.email,o=n.getState(),s=o.auth.token,L(s),e.prev=4,e.next=7,k.a.patch("/api/contacts/".concat(a),{name:r,phone:c,email:i});case 7:return u=e.sent,console.log("edit",u),e.abrupt("return",u.data.contact);case 12:return e.prev=12,e.t0=e.catch(4),e.abrupt("return",n.rejectWithValue(e.t0.message));case 15:case"end":return e.stop()}}),e,null,[[4,12]])})));return function(t,n){return e.apply(this,arguments)}}()),me=Object(_.b)("contactList/filter",(function(e){return{payload:e}})),pe=n(81),he=n.n(pe),ve=n(82),ge=n.n(ve);function xe(){var e=Object(a.useState)(""),t=Object(O.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)(""),i=Object(O.a)(c,2),s=i[0],u=i[1],l=Object(a.useState)(""),j=Object(O.a)(l,2),b=j[0],f=j[1],p=Object(o.b)(),v=Object(o.c)(oe),g=function(e){var t=e.currentTarget,n=t.name,a=t.value;switch(n){case"name":return r(a);case"phone":return u(a);case"email":return f(a);default:return}};return Object(d.jsxs)(h.a,{onSubmit:function(e){e.preventDefault(),r(""),u(""),f(""),v.find((function(e){return e.name.toLowerCase()===n.toLowerCase()}))?alert("".concat(n," is already in contacts")):p(be({name:n,phone:s,email:b}))},className:ge.a.form,children:[Object(d.jsxs)(h.a.Group,{className:"mb-3",controlId:"floatingTextarea",children:[Object(d.jsx)(h.a.Label,{children:"Name"}),Object(d.jsx)(h.a.Control,{type:"text",placeholder:"Enter name",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,value:n,onChange:g})]}),Object(d.jsxs)(h.a.Group,{className:"mb-3",controlId:"floatingTextarea",children:[Object(d.jsx)(h.a.Label,{children:"Number"}),Object(d.jsx)(h.a.Control,{placeholder:"Enter number",type:"tel",name:"phone",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,value:s,onChange:g})]}),Object(d.jsxs)(h.a.Group,{className:"mb-3",controlId:"floatingTextarea",children:[Object(d.jsx)(h.a.Label,{children:"Email"}),Object(d.jsx)(h.a.Control,{placeholder:"Enter email",type:"email",name:"email",pattern:"^((([0-9A-Za-z]{1}[-0-9A-z.]{1,}[0-9A-Za-z]{1})|([0-9\u0410-\u042f\u0430-\u044f]{1}[-0-9\u0410-\u044f.]{1,}[0-9\u0410-\u042f\u0430-\u044f]{1}))@([-A-Za-z]{1,}\\.){1,2}[-A-Za-z]{2,})$",title:"Email \u0434\u043e\u043b\u0436\u0435\u043d \u0431\u044b\u0442\u044c \u0440\u0435\u0430\u043b\u044c\u043d\u044b\u043c, \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c @",required:!0,value:b,onChange:g})]}),Object(d.jsx)(m.a,{variant:"outline-primary",type:"submit",children:"Add contact"})]})}var _e=n(133),Ce=n(78);function ke(e){var t=e.filter,n=e.onFindName;return Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)(_e.a,{className:"mb-3",children:[Object(d.jsx)(_e.a.Text,{id:"basic-addon1",children:"Find contact by name"}),Object(d.jsx)(Ce.a,{placeholder:"Username","aria-label":"Username","aria-describedby":"basic-addon1",type:"text",name:"filter",value:t,onChange:n})]})})}var Le=n(134),ye=n(44),we=n.n(ye),Ne=function(e){var t=e.contact,n=e.onBtnClick,a=e.onEditBtnClick,r=t.name,c=t.phone,i=t.email;return Object(d.jsxs)(Le.a.Item,{variant:"warning",className:we.a.contactItem,children:[Object(d.jsxs)("span",{className:we.a.contactInfo,children:[r,": ",c," : ",i]}),Object(d.jsxs)("div",{children:[Object(d.jsx)(m.a,{variant:"outline-danger",onClick:a,className:we.a.contactBtn,children:"Edit"}),Object(d.jsx)(m.a,{variant:"outline-danger",onClick:n,className:we.a.contactBtn,children:"Delete"})]})]})};function Ie(e){var t=e.contacts,n=e.onBtnClick,a=e.onEditBtnClick;return Object(d.jsx)(Le.a,{variant:"flush",children:t.map((function(e){return Object(d.jsx)(Ne,{id:e._id,name:e.name,number:e.phone,onBtnClick:function(){return n(e._id)},onEditBtnClick:function(){return a(e._id)},contact:e},e._id)}))})}function Ee(e){var t=e.contact,n=e.closeFunction,r=Object(a.useState)(t.name),c=Object(O.a)(r,2),i=c[0],s=c[1],u=Object(a.useState)(t.phone),l=Object(O.a)(u,2),j=l[0],b=l[1],f=Object(a.useState)(t.email),p=Object(O.a)(f,2),v=p[0],g=p[1],x=Object(o.b)(),_=Object(o.c)(oe),C=function(e){var t=e.currentTarget,n=t.name,a=t.value;switch(n){case"name":return s(a);case"phone":return b(a);case"email":return g(a);default:return}};return Object(d.jsxs)(h.a,{onSubmit:function(e){e.preventDefault();var a=t._id;console.log(t);var r={_id:a,name:i,phone:j,email:v};console.log("editedContact",r);var c=_.find((function(e){return e._id!==a&&e.name.toLowerCase()===i.toLowerCase()}));c?alert("".concat(i," is already in contacts")):(x(fe(r)),s(""),b(""),g(""),n())},children:[Object(d.jsxs)(h.a.Group,{className:"mb-3",controlId:"floatingTextarea",children:[Object(d.jsx)(h.a.Label,{children:"Name"}),Object(d.jsx)(h.a.Control,{type:"text",placeholder:"Enter name",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,value:i,onChange:C})]}),Object(d.jsxs)(h.a.Group,{className:"mb-3",controlId:"floatingTextarea",children:[Object(d.jsx)(h.a.Label,{children:"Number"}),Object(d.jsx)(h.a.Control,{placeholder:"Enter number",type:"tel",name:"phone",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,value:j,onChange:C})]}),Object(d.jsxs)(h.a.Group,{className:"mb-3",controlId:"floatingTextarea",children:[Object(d.jsx)(h.a.Label,{children:"Email"}),Object(d.jsx)(h.a.Control,{placeholder:"Enter email",type:"email",name:"email",pattern:"^((([0-9A-Za-z]{1}[-0-9A-z.]{1,}[0-9A-Za-z]{1})|([0-9\u0410-\u042f\u0430-\u044f]{1}[-0-9\u0410-\u044f.]{1,}[0-9\u0410-\u042f\u0430-\u044f]{1}))@([-A-Za-z]{1,}\\.){1,2}[-A-Za-z]{2,})$",title:"Email \u0434\u043e\u043b\u0436\u0435\u043d \u0431\u044b\u0442\u044c \u0440\u0435\u0430\u043b\u044c\u043d\u044b\u043c, \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c @",required:!0,value:v,onChange:C})]}),Object(d.jsx)(m.a,{variant:"outline-primary",type:"submit",children:"Change contact"})]})}var Se=n(62),Ae=n.n(Se),Be=document.querySelector("#modal-root");function ze(e){var t=e.onClose,n=(e.clearModal,e.children);Object(a.useEffect)((function(){return window.addEventListener("keydown",r),function(){window.removeEventListener("keydown",r)}}));var r=function(e){"Escape"===e.code&&t()};return Object(c.createPortal)(Object(d.jsx)("div",{className:Ae.a.Overlay,onClick:function(e){e.target===e.currentTarget&&t()},children:Object(d.jsx)("div",{className:Ae.a.Modal,children:n})}),Be)}function Fe(){var e=Object(o.c)(je),t=Object(o.c)(se),n=Object(o.c)(ue),r=Object(o.c)(le),c=Object(o.c)(oe),i=Object(a.useState)(null),s=Object(O.a)(i,2),u=s[0],l=s[1],j=Object(a.useState)(!1),f=Object(O.a)(j,2),m=f[0],h=f[1],v=Object(o.b)();Object(a.useEffect)((function(){v(de())}),[v]);var g=function(e){h((function(e){return!e}))};return Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)(b,{title:"Phonebook",children:[Object(d.jsx)(xe,{}),Object(d.jsx)("h2",{className:he.a.title,children:"Contacts"}),c.length>1&&Object(d.jsx)(ke,{value:t,onFindName:function(e){v(me(e.target.value))}}),n&&Object(d.jsx)(p,{message:n}),r&&Object(d.jsx)(p,{message:"Loading..."}),0!==e.length&&Object(d.jsx)(Ie,{contacts:e,onBtnClick:function(e){return v(Oe(e))},onEditBtnClick:function(e){var t=c.find((function(t){return t._id===e}));l(t),g()}}),m&&Object(d.jsx)(ze,{onClose:g,children:Object(d.jsx)(Ee,{contact:u,closeFunction:g})})]})})}var Te=n(128),Ge=function(e){var t=e.message,n=e.onClickLink;return Object(d.jsx)(m.a,{variant:"link",type:"button",onClick:n,children:t})};function Me(){var e=Object(o.b)(),t=Object(o.c)(R),n=Object(o.c)(D),r=Object(o.c)(J),c=Object(o.c)(q),i=Object(o.c)(P),s=Object(o.c)(V);return Object(a.useEffect)((function(){e(S())}),[e]),Object(d.jsx)(d.Fragment,{children:t?Object(d.jsx)(b,{title:"Phonebook"}):Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(K,{}),Object(d.jsxs)(u.d,{children:[Object(d.jsx)(ce,{exact:!0,path:"/",children:Object(d.jsx)(b,{title:"Welcome to your wonderful phonebook"})}),Object(d.jsx)(ce,{exact:!0,path:"/register",restricted:!0,redirectTo:"/contacts",children:Object(d.jsxs)(b,{title:"Registration",children:[Object(d.jsx)(z,{}),r&&Object(d.jsx)(p,{message:"Loading",children:Object(d.jsx)(Te.a,{animation:"grow",variant:"primary"})}),c&&!i&&Object(d.jsx)(p,{message:"Please verify your email",children:Object(d.jsx)(p,{message:"If you can not find message",children:Object(d.jsx)(Ge,{message:"click here",onClickLink:function(){return e(N({email:s}))}})})}),n&&Object(d.jsx)(p,{message:n})]})}),Object(d.jsx)(ce,{path:"/login",restricted:!0,redirectTo:"/contacts",children:Object(d.jsxs)(b,{title:"Login",children:[Object(d.jsx)(G,{}),r&&Object(d.jsx)(p,{message:"Loading",children:Object(d.jsx)(Te.a,{animation:"grow",variant:"primary"})}),n&&Object(d.jsx)(p,{message:n}),(null===n||void 0===n?void 0:n.includes("verificated"))&&Object(d.jsx)(p,{message:"If you can not find message",children:Object(d.jsx)(Ge,{message:"click here",onClickLink:function(){return e(N({email:s}))}})})]})}),Object(d.jsx)(ae,{path:"/contacts",redirectTo:"/login",children:r?Object(d.jsx)(p,{message:"Loading",children:Object(d.jsx)(Te.a,{animation:"grow",variant:"primary"})}):Object(d.jsx)(Fe,{})})]})]})})}var Ze,We,qe,Ve,Pe=n(43),Ue=n(4),Re=n(17),De=Object(_.d)([],(Ze={},Object(Ue.a)(Ze,de.fulfilled,(function(e,t){return t.payload})),Object(Ue.a)(Ze,be.fulfilled,(function(e,t){return[].concat(Object(Pe.a)(e),[t.payload])})),Object(Ue.a)(Ze,fe.fulfilled,(function(e,t){return[t.payload].concat(Object(Pe.a)(e.filter((function(e){return e._id!==t.payload._id}))))})),Object(Ue.a)(Ze,Oe.fulfilled,(function(e,t){return e.filter((function(e){return e._id!==t.payload}))})),Ze)),Je=Object(_.d)("",Object(Ue.a)({},me,(function(e,t){return t.payload}))),He=Object(_.d)(null,(We={},Object(Ue.a)(We,de.rejected,(function(e,t){return t.payload})),Object(Ue.a)(We,be.rejected,(function(e,t){return t.payload})),Object(Ue.a)(We,fe.rejected,(function(e,t){return t.payload})),Object(Ue.a)(We,Oe.rejected,(function(e,t){return t.payload})),Object(Ue.a)(We,de.pending,(function(){return null})),Object(Ue.a)(We,be.pending,(function(){return null})),Object(Ue.a)(We,Oe.pending,(function(){return null})),We)),$e=Object(_.d)(!1,(qe={},Object(Ue.a)(qe,de.pending,(function(){return!0})),Object(Ue.a)(qe,be.pending,(function(){return!0})),Object(Ue.a)(qe,fe.pending,(function(){return!0})),Object(Ue.a)(qe,Oe.pending,(function(){return!0})),Object(Ue.a)(qe,de.fulfilled,(function(){return!1})),Object(Ue.a)(qe,be.fulfilled,(function(){return!1})),Object(Ue.a)(qe,fe.fulfilled,(function(){return!1})),Object(Ue.a)(qe,Oe.fulfilled,(function(){return!1})),Object(Ue.a)(qe,de.rejected,(function(){return!1})),Object(Ue.a)(qe,be.rejected,(function(){return!1})),Object(Ue.a)(qe,fe.rejected,(function(){return!1})),Object(Ue.a)(qe,Oe.rejected,(function(){return!1})),qe)),Qe=Object(Re.b)({contacts:De,filteredContacts:Je,error:He,isLoading:$e}),Xe=Object(_.e)({name:"auth",initialState:{user:{name:null,email:null,password:null},token:null,isLoggedIn:!1,isGetCurrentUser:!1,error:null,isLoading:!1},extraReducers:(Ve={},Object(Ue.a)(Ve,w.pending,(function(e,t){e.error=null,e.isLoading=!0})),Object(Ue.a)(Ve,w.fulfilled,(function(e,t){e.user=t.payload.user,e.isLoggedIn=!1,e.isLoading=!1})),Object(Ue.a)(Ve,w.rejected,(function(e,t){e.error=t.payload,e.isLoading=!1})),Object(Ue.a)(Ve,N.pending,(function(e,t){e.error=null,e.isLoading=!0})),Object(Ue.a)(Ve,N.fulfilled,(function(e,t){e.isLoading=!1})),Object(Ue.a)(Ve,N.rejected,(function(e,t){e.error=t.payload,e.isLoading=!1})),Object(Ue.a)(Ve,I.pending,(function(e,t){e.isLoading=!0,e.error=null})),Object(Ue.a)(Ve,I.fulfilled,(function(e,t){e.user=t.payload.user,e.token=t.payload.token,e.isLoggedIn=!0,e.isLoading=!1})),Object(Ue.a)(Ve,I.rejected,(function(e,t){e.error=t.payload,e.isLoading=!1})),Object(Ue.a)(Ve,E.pending,(function(e,t){e.isLoading=!0,e.error=null})),Object(Ue.a)(Ve,E.fulfilled,(function(e,t){e.user={name:null,email:null,password:null},e.token=null,e.isLoggedIn=!1,e.isLoading=!1})),Object(Ue.a)(Ve,E.rejected,(function(e,t){e.error=t.payload,e.isLoading=!1})),Object(Ue.a)(Ve,S.pending,(function(e,t){e.isFetchingCurrentUser=!0,e.isLoading=!0,e.error=null})),Object(Ue.a)(Ve,S.fulfilled,(function(e,t){e.user=t.payload,e.isLoggedIn=!0,e.isFetchingCurrentUser=!1,e.isLoading=!1})),Object(Ue.a)(Ve,S.rejected,(function(e,t){e.isFetchingCurrentUser=!1,e.isLoading=!1})),Ve)}).reducer,Ye=n(30),Ke=n(83),et=n.n(Ke),tt=Object(Pe.a)(Object(_.f)({serializableCheck:{ignoredActions:[Ye.a,Ye.f,Ye.b,Ye.c,Ye.d,Ye.e]}})),nt={key:"auth",storage:et.a,whitelist:["token"]},at=Object(_.a)({reducer:{auth:Object(Ye.g)(nt,Xe),contacts:Qe},middleware:tt,devTools:!1}),rt=Object(Ye.h)(at),ct=n(84);i.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(o.a,{store:at,children:Object(d.jsx)(ct.a,{loading:null,persistor:rt,children:Object(d.jsx)(s.a,{children:Object(d.jsx)(Me,{})})})})}),document.getElementById("root"))},20:function(e,t,n){e.exports={navigationBar:"Navigation_navigationBar__3vq6n",navLink:"Navigation_navLink__PE3ZV",greetingsBox:"Navigation_greetingsBox__1WIov",entrance:"Navigation_entrance__1Croz",navLinkActive:"Navigation_navLinkActive__3Zna2"}},44:function(e,t,n){e.exports={contactItem:"ContactListItem_contactItem__2S_G5",contactInfo:"ContactListItem_contactInfo__3FWz9",button:"ContactListItem_button__2Mkzu",contactBtn:"ContactListItem_contactBtn__3zFG1"}},54:function(e,t,n){e.exports={navGreetings:"UserMenu_navGreetings__4LvNJ",greetings:"UserMenu_greetings__33zUp",button:"UserMenu_button__2V1YV"}},60:function(e,t,n){e.exports={section:"Section_section__2Xj9w",title:"Section_title__2hvqV"}},62:function(e,t,n){e.exports={Overlay:"Modal_Overlay__wHQio",Modal:"Modal_Modal__lGI1Y"}},77:function(e,t,n){e.exports={label:"RegisterForm_label__28SS4",form:"RegisterForm_form__2uWRW"}},79:function(e,t,n){e.exports={form:"LoginForm_form__3FQd6"}},81:function(e,t,n){e.exports={title:"ContactsPage_title__1cspp"}},82:function(e,t,n){e.exports={form:"ContactForm_form__u5NGh",label:"ContactForm_label__3_k92",input:"ContactForm_input__2IxuP",button:"ContactForm_button__2QRR8"}},95:function(e,t,n){}},[[124,1,2]]]);
//# sourceMappingURL=main.842261e6.chunk.js.map
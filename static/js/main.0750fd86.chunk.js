(this["webpackJsonpgoit-react-hw-07-phonebook"]=this["webpackJsonpgoit-react-hw-07-phonebook"]||[]).push([[0],{24:function(t,e,n){t.exports={Section:"Section_Section__1pv37",Title:"Section_Title__1BVO7"}},26:function(t,e,n){t.exports={Label:"Filter_Label__2wFcp",Input:"Filter_Input__3K808"}},35:function(t){t.exports=JSON.parse('[{"id":"1","name":"name","label":"Name*","type":"text","pattern":"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([\' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$","title":"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d\'Artagnan","required":true},{"id":"2","name":"number","label":"Number*","type":"tel","pattern":"\\\\+?\\\\d{1,4}?[-.\\\\s]?\\\\(?\\\\d{1,3}?\\\\)?[-.\\\\s]?\\\\d{1,4}[-.\\\\s]?\\\\d{1,4}[-.\\\\s]?\\\\d{1,9}","title":"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +","required":true},{"id":"3","name":"email","label":"Email","type":"email","required":false}]')},37:function(t,e,n){t.exports={contactsList:"ContactList_contactsList__dJfZQ"}},38:function(t,e,n){t.exports={Text:"EmptyText_Text__e1qdg"}},46:function(t,e,n){},47:function(t,e,n){},72:function(t,e,n){"use strict";n.r(e);var a={};n.r(a),n.d(a,"fetchContacts",(function(){return k})),n.d(a,"addContact",(function(){return F})),n.d(a,"deleteContact",(function(){return y}));var c={};n.r(c),n.d(c,"getContacts",(function(){return S})),n.d(c,"getFilter",(function(){return A})),n.d(c,"getLoading",(function(){return T})),n.d(c,"getFilteredContacts",(function(){return B}));var r={};n.r(r),n.d(r,"changeFilter",(function(){return z}));var i=n(1),o=n.n(i),s=n(16),u=n.n(s),l=(n(46),n(47),n(24)),d=n.n(l),b=n(2),m=function(t){var e=t.title,n=t.children;return Object(b.jsxs)("section",{className:d.a.Section,children:[e&&Object(b.jsx)("h1",{className:d.a.Title,children:e}),n]})},j=n(22),p=n(9),f=n.n(p),O=n(35),_=n(20),h=n(19),g=n(3),x=n(21),C=n(10),v=n.n(C),L=n(7),N=n(13),I=n.n(N);I.a.defaults.baseURL="https://61f08b4e732d93001778eab3.mockapi.io";var k=Object(L.c)("contacts/fetchContacts",function(){var t=Object(x.a)(v.a.mark((function t(e,n){var a,c;return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=n.rejectWithValue,t.prev=1,t.next=4,I.a.get("/contacts");case 4:return c=t.sent,t.abrupt("return",c.data);case 8:return t.prev=8,t.t0=t.catch(1),t.abrupt("return",a(t.t0.message));case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e,n){return t.apply(this,arguments)}}()),F=Object(L.c)("contacts/addContact",function(){var t=Object(x.a)(v.a.mark((function t(e,n){var a,c,r,i,o,s;return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=e.name,c=e.number,r=e.email,i=n.rejectWithValue,t.prev=2,o={name:a,number:c,email:r},t.next=6,I.a.post("/contacts",o);case 6:return s=t.sent,t.abrupt("return",s.data);case 10:return t.prev=10,t.t0=t.catch(2),t.abrupt("return",i(t.t0.message));case 13:case"end":return t.stop()}}),t,null,[[2,10]])})));return function(e,n){return t.apply(this,arguments)}}()),y=Object(L.c)("contacts/deleteContact",function(){var t=Object(x.a)(v.a.mark((function t(e,n){var a,c;return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=n.rejectWithValue,t.prev=1,t.next=4,I.a.delete("/contacts/".concat(e));case 4:return c=t.sent,t.abrupt("return",c.data.id);case 8:return t.prev=8,t.t0=t.catch(1),t.abrupt("return",a(t.t0.message));case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e,n){return t.apply(this,arguments)}}()),w=n(17),S=function(t){return t.contacts},A=function(t){return t.filter},T=function(t){return t.loading},B=Object(w.a)([S,A],(function(t,e){var n=e.toLowerCase();return t.filter((function(t){return t.name.toLowerCase().includes(n)}))})),z=Object(L.b)("contacts/ChangeFilter"),q=n(41);function E(){var t=Object(i.useState)(""),e=Object(j.a)(t,2),n=e[0],o=e[1],s=Object(i.useState)(""),u=Object(j.a)(s,2),l=u[0],d=u[1],m=Object(i.useState)(""),p=Object(j.a)(m,2),x=p[0],C=p[1],v=Object(g.c)(c.getContacts),L=Object(g.b)(),N=Object(g.c)(c.getLoading),I=function(t){switch(t.target.name){case"name":o(t.target.value);break;case"number":d(t.target.value);break;case"email":C(t.target.value);break;default:return}},k=function(){o(""),d(""),C("")};return Object(b.jsxs)("form",{className:f.a.Form,autoComplete:"on",onSubmit:function(t){t.preventDefault();var e=v.some((function(t){return t.name.toLowerCase()===n.toLowerCase()}));if(e)alert("".concat(n," is already exists in contacts"));else{var c={id:Object(q.a)(),name:n,number:l,email:x};L(a.addContact(c))}L(r.changeFilter("")),t.currentTarget.reset(),k()},children:[O.map((function(t){var e={name:n,number:l,email:x};return Object(b.jsx)("div",{children:Object(b.jsxs)("label",{className:f.a.Label,children:[t.label,Object(b.jsx)("input",{id:t.id,value:e[t.name],onChange:I,className:f.a.Input,type:t.type,name:t.name,pattern:t.pattern,title:t.title,required:t.required,autoComplete:"true"})]})},t.name)})),Object(b.jsx)("p",{className:f.a.Reminder,children:"Fields marked with * are required"}),Object(b.jsxs)("button",{className:f.a.Button,type:"submit",disabled:"adding"===N,children:["adding"===N&&Object(b.jsx)(h.a,{size:14,className:f.a.IconSpinner}),"adding"!==N&&Object(b.jsx)(_.b,{className:f.a.Icon,size:16}),"Add contact"]})]})}var W=n(37),Q=n.n(W),J=n(8),M=n.n(J);var V=function(t){var e=t.id,n=t.name,a=t.number,r=t.email,i=t.onClick,o=Object(g.c)(c.getLoading);return Object(b.jsxs)("li",{className:M.a.Item,children:[Object(b.jsxs)("div",{className:M.a.Wrapper,children:[Object(b.jsxs)("p",{className:M.a.Name,children:[n,":"]}),Object(b.jsx)("p",{className:M.a.Number,children:Object(b.jsx)("a",{className:M.a.TelLink,href:"tel:".concat(a),children:a})}),Object(b.jsx)("p",{className:M.a.Email,children:Object(b.jsx)("a",{className:M.a.MailLink,href:"mailto:".concat(r),children:r})})]}),Object(b.jsxs)("button",{type:"button",onClick:function(){return i()},className:M.a.Button,children:[o!==e&&Object(b.jsx)(_.a,{size:18}),o===e&&Object(b.jsx)(h.a,{size:18,className:M.a.IconSpinner})]})]})};function Z(){var t=Object(g.c)(c.getFilteredContacts),e=Object(g.b)(),n=Object(g.c)(c.getLoading);return Object(i.useEffect)((function(){e(a.fetchContacts())}),[e]),Object(b.jsxs)(b.Fragment,{children:["loadingContacts"===n&&Object(b.jsx)("p",{children:"Loading..."}),Object(b.jsx)("ul",{className:Q.a.contactsList,children:t&&t.map((function(t){return Object(b.jsx)(V,{id:t.id,name:t.name,number:t.number,email:t.email,onClick:function(){return n=t.id,e(a.deleteContact(n));var n}},t.id)}))})]})}var R=n(26),Y=n.n(R);function P(){var t=Object(g.c)(c.getFilter),e=Object(g.c)(c.getContacts).length,n=Object(g.b)();return Object(b.jsxs)("label",{className:Y.a.Label,children:["Find contact by name in ",e," contacts",Object(b.jsx)("input",{className:Y.a.Input,type:"text",value:t,onChange:function(t){return n(z(t.target.value))}})]})}var X=n(38),D=n.n(X),G=function(){return Object(b.jsx)("p",{className:D.a.Text,children:"Your contact list is empty"})};function K(){var t=Object(g.c)(c.getContacts).length,e=Object(g.c)(c.getLoading);return Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)(m,{title:"Phonebook",children:Object(b.jsx)(E,{})}),Object(b.jsxs)(m,{title:"Contacts",children:[t>1&&Object(b.jsx)(P,{}),Object(b.jsx)(Z,{}),0===t&&"notLoading"===e&&Object(b.jsx)(G,{})]})]})}var U,$,H,tt=n(4),et=n(40),nt=n(5),at=Object(L.d)([],(U={},Object(tt.a)(U,k.fulfilled,(function(t,e){return e.payload})),Object(tt.a)(U,F.fulfilled,(function(t,e){var n=e.payload;return[].concat(Object(et.a)(t),[n])})),Object(tt.a)(U,y.fulfilled,(function(t,e){var n=e.payload;return t.filter((function(t){return t.id!==n}))})),U)),ct=Object(L.d)("",Object(tt.a)({},z,(function(t,e){return e.payload}))),rt=Object(L.d)("notLoading",($={},Object(tt.a)($,k.pending,(function(){return"loadingContacts"})),Object(tt.a)($,k.fulfilled,(function(){return"notLoading"})),Object(tt.a)($,k.rejected,(function(){return"notLoading"})),Object(tt.a)($,F.pending,(function(){return"adding"})),Object(tt.a)($,F.fulfilled,(function(){return"notLoading"})),Object(tt.a)($,F.rejected,(function(){return"notLoading"})),Object(tt.a)($,y.pending,(function(t,e){return e.meta.arg})),Object(tt.a)($,y.fulfilled,(function(){return"notLoading"})),Object(tt.a)($,y.rejected,(function(){return"notLoading"})),$)),it=Object(L.d)(null,(H={},Object(tt.a)(H,k.rejected,(function(t,e){return e.payload})),Object(tt.a)(H,k.pending,(function(){return null})),H)),ot=Object(nt.b)({contacts:at,filter:ct,loading:rt,error:it}),st=n(39),ut=n.n(st),lt=n(11),dt=Object(L.a)({reducer:ot,middleware:function(t){return t({serializableCheck:{ignoredActions:[lt.a,lt.f,lt.b,lt.c,lt.d,lt.e]}}).concat(ut.a)},devTools:!1});u.a.render(Object(b.jsx)(o.a.StrictMode,{children:Object(b.jsx)(g.a,{store:dt,children:Object(b.jsx)(K,{})})}),document.getElementById("root"))},8:function(t,e,n){t.exports={Item:"ContactItem_Item__1pcj9",Wrapper:"ContactItem_Wrapper__2weQw",Name:"ContactItem_Name__h_mV3",Number:"ContactItem_Number__1bOX1",Email:"ContactItem_Email__Lr4B3",TelLink:"ContactItem_TelLink__3fIY5",MailLink:"ContactItem_MailLink__3LXym",Button:"ContactItem_Button__1eZwY",IconSpinner:"ContactItem_IconSpinner__1ad-7",spinner:"ContactItem_spinner__2voQN"}},9:function(t,e,n){t.exports={Form:"AddContactForm_Form__3kQ1y",Label:"AddContactForm_Label__1qIh0",Input:"AddContactForm_Input__ArS8c",Reminder:"AddContactForm_Reminder__3kQFG",Button:"AddContactForm_Button__3Q53a",Icon:"AddContactForm_Icon__zB42n",IconSpinner:"AddContactForm_IconSpinner__3W67k",spinner:"AddContactForm_spinner__1t7c7"}}},[[72,1,2]]]);
//# sourceMappingURL=main.0750fd86.chunk.js.map
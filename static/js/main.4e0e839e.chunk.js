(this.webpackJsonpjourneys=this.webpackJsonpjourneys||[]).push([[0],{125:function(e,t,a){e.exports=a(166)},166:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(118),l=a.n(o),c=(a(78),a(130),a(25)),i=a(3),s=a(12),u=a(123),m=function(e){return e<10?"0"+e:e};var d=function(e){var t=e.journey,a=e.deleteJourney,n=e.setDeleteModal,o=e.setBlockClicking,l=t.location,c=t.startDate,i=t.id,s=function(e){e.stopPropagation(),n(!1),o(!1)};return r.a.createElement("div",null,r.a.createElement("div",{className:"background"}),r.a.createElement("div",{className:"delete-modal"},r.a.createElement("div",{className:"delete-modal__title"},r.a.createElement("h5",null,"Are you sure to delete this journey?")),r.a.createElement("div",{className:"delete-modal__body"},r.a.createElement("p",null,"If you want to delete journey in ",r.a.createElement("span",null,l),", which started at ",r.a.createElement("span",null,function(e){var t=e.day,a=e.month,n=e.year;return"".concat(m(t),".").concat(m(a),".").concat(n)}(c))," press YES.")),r.a.createElement("div",{className:"delete-modal__footer"},r.a.createElement("button",{className:"delete-modal__button delete-modal__button--yes",onClick:function(e){return function(e,t){s(e),a(t)}(e,i)}},"YES"),r.a.createElement("button",{className:"delete-modal__button delete-modal__button--no",onClick:function(e){return s(e)}},"NO"))))},p=a(122);var E=function(e){var t=e.journey,a=e.deleteJourney,o=e.setBlockClicking,l=t.location,c=t.startDate,i=t.imageFile,m=Object(n.useState)(!1),E=Object(s.a)(m,2),y=E[0],g=E[1];return r.a.createElement("div",{className:"journey",onClick:function(){console.log(l+c)}},i?r.a.createElement("img",{className:"journey__img",src:i,alt:""}):r.a.createElement(p.a,{name:l.split(" ")[0],size:60,round:"50%"}),r.a.createElement("div",{className:"journey__description"},r.a.createElement("h3",{className:"journey__h3"},l),r.a.createElement("p",{className:"journey__p"},c.day)),r.a.createElement(u.a,{className:"journey__icon",onClick:function(e){return function(e){e.stopPropagation(),g(!0),o(!0)}(e)}}),y&&r.a.createElement(d,{journey:t,deleteJourney:a,setDeleteModal:g,setBlockClicking:o}))};var y=function(){return r.a.createElement("div",{className:"no-journey"},r.a.createElement("h2",{className:"no-journey__h2"},"You don't have any journeys"),r.a.createElement("button",{className:"no-journey__btn"},"Add journey"))};var g=function(){var e=Object(n.useState)(JSON.parse(localStorage.getItem("journeys"))||[]),t=Object(s.a)(e,2),a=t[0],o=t[1],l=Object(n.useState)(!1),i=Object(s.a)(l,2),u=i[0],m=i[1],d=function(e){var t=a.filter((function(t){return t.id!==e}));o(t)};return r.a.createElement("main",{className:"container"},r.a.createElement("section",{className:"center-container",style:{pointerEvents:u?"none":"auto"}},a.length?r.a.createElement("div",{className:"journey-container"},a.map((function(e){return r.a.createElement(E,{journey:e,key:e.id,deleteJourney:d,setBlockClicking:m})}))):r.a.createElement(y,null),r.a.createElement(c.b,{className:"new-journey__btn--create",to:"/create"},"+")))};var v=function(e){return r.a.createElement("main",{className:"container"},r.a.createElement("section",{className:"no-page"},r.a.createElement("div",{className:"no-page__info"},r.a.createElement("h2",{className:"no-page__title"},"Oops, page not found"),r.a.createElement("p",{className:"no-page__description"},"We are very sorry for the inconvenience. It looks like you're trying to access a page that has been deleted or never even existed."),r.a.createElement("button",{className:"no-page__btn",onClick:function(){return e.history.push("/")}},"Back to homepage")),r.a.createElement("div",{className:"no-page__picture"},r.a.createElement("img",{src:"https://images.unsplash.com/photo-1549747862-084be795471b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",alt:"desert-island"}),r.a.createElement("p",{className:"no-page__error"},"404"))))},j=a(168),_=a(1),f=a.n(_);f.a.ModalError={title:f.a.string.isRequired,description:f.a.string.isRequired,onCloseModal:f.a.func.isRequired};var b=function(e){var t=e.title,a=e.description,n=e.onCloseModal;return r.a.createElement("div",{className:"modal-error"},r.a.createElement("div",{className:"modal-error__icon"},"!"),r.a.createElement("h3",{className:"modal-error__title"},t),r.a.createElement("p",{className:"modal-error__description"},a),r.a.createElement("button",{className:"modal-error__button",onClick:n},"OK"))},h=a(124),N=a(2),O=function(e){return/^(\s|\d)/.test(e)?"The location should start with a letter":e.length<3||e.length>60?"The location should contain min 3 and max 60 characters":""},w=function(e){var t=e.day,a=e.month,n=e.year,r=[31,28,31,30,31,30,31,31,30,31,30,31];return(n%400===0||n%100!==0&&n%4===0)&&(r[1]=29),t>r[a-1]?"Not correct date":new Date(n,a-1,t)>new Date?"Date shouldn't be from future":""},C=function(e){return e.length>300?"The description should contain max 300 characters":""};var k=function(e){var t=Object(n.useState)(e.journey),a=Object(s.a)(t,2),o=a[0],l=a[1],i=Object(n.useState)({location:"",startDate:"",description:"",travellingCompanion:"",imageFile:""}),u=Object(s.a)(i,2),m=u[0],d=u[1],p=Object(n.useState)(""),E=Object(s.a)(p,2),y=E[0],g=E[1],v=Object(n.useState)(""),j=Object(s.a)(v,2),_=j[0],f=j[1],k=Object(n.useState)(!1),D=Object(s.a)(k,2),S=D[0],F=D[1],x=new Array(31).fill(0).map((function(e,t){return t+1})),J=new Array(12).fill(0).map((function(e,t){return t+1})),M=new Array(51).fill((new Date).getFullYear()).map((function(e,t){return e-t})),B=function(e,t){var a=o.startDate;a[t]=e,l(Object(N.a)(Object(N.a)({},o),{},{startDate:a}));var n=w(a);d(Object(N.a)(Object(N.a)({},m),{},{startDate:n}))},I=function(t){t.preventDefault(),T()?F(!0):(F(!1),e.submitJourney(o))},T=function(){var e=o.location,t=o.startDate,a=o.description,n=O(e),r=C(a),l=w(t),c=Object(N.a)(Object(N.a)({},m),{},{location:n,startDate:l,description:r});return d(c),function(e){for(var t in e)if(e[t])return!0;return!1}(c)};return r.a.createElement("div",null,r.a.createElement("form",{className:"new-journey__form",onSubmit:I},r.a.createElement("div",{className:"new-journey__group"},r.a.createElement("label",null,"Location"),r.a.createElement("input",{type:"text",onChange:function(e){var t=e.target.value;l(Object(N.a)(Object(N.a)({},o),{},{location:t}));var a=O(t);d(Object(N.a)(Object(N.a)({},m),{},{location:a}))},value:o.location,autoFocus:!0}),m.location&&r.a.createElement("p",{className:"new-journey__error"},m.location)),r.a.createElement("div",{className:"new-journey__group"},r.a.createElement("label",null,"Start date"),r.a.createElement("div",{className:"new-journey__date"},r.a.createElement("div",{className:"new-journey__select"},"Day",r.a.createElement("select",{onChange:function(e){return B(e.target.value,"day")},value:o.startDate.day},x.map((function(e){return r.a.createElement("option",{key:e,value:e},e)})))),r.a.createElement("div",{className:"new-journey__select"},"Month",r.a.createElement("select",{onChange:function(e){return B(e.target.value,"month")},value:o.startDate.month},J.map((function(e){return r.a.createElement("option",{key:e,value:e},e)})))),r.a.createElement("div",{className:"new-journey__select"},"Year",r.a.createElement("select",{onChange:function(e){return B(e.target.value,"year")},value:o.startDate.year},M.map((function(e){return r.a.createElement("option",{key:e,value:e},e)}))))),m.startDate&&r.a.createElement("p",{className:"new-journey__error"},m.startDate)),r.a.createElement("div",{className:"new-journey__group"},r.a.createElement("label",null,"Description"),r.a.createElement("textarea",{onChange:function(e){var t=e.target.value;l(Object(N.a)(Object(N.a)({},o),{},{description:t}));var a=C(t);d(Object(N.a)(Object(N.a)({},m),{},{description:a}))},value:o.description,rows:3}),m.description&&r.a.createElement("p",{className:"new-journey__error"},m.description)),r.a.createElement("div",{className:"new-journey__group"},r.a.createElement("label",null,"Travelling companion"),r.a.createElement("div",{className:"new-journey__companion"},o.travellingCompanion.length>0?o.travellingCompanion.map((function(e,t){return r.a.createElement("div",{className:"new-journey__chip",key:t},e,r.a.createElement("div",{className:"new-journey__chip--delete",onClick:function(){return function(e){var t=o.travellingCompanion.filter((function(t,a){return a!==e}));l(Object(N.a)(Object(N.a)({},o),{},{travellingCompanion:t}))}(t)}},"\xd7"))})):r.a.createElement("p",{className:"new-journey__add-companion"},"Insert below the name of travelling companion and press 'Enter'")),r.a.createElement("input",{type:"text",onKeyPress:function(e){if("Enter"===e.key){e.preventDefault();var t=function(e,t){return t>15?"You have too much traveling companions":e.length<3?"The travelling companion should contain at least 3 characters":e.length>15?"The travelling companion should contain max 15 characters":""}(y,o.travellingCompanion.length);if(!t){var a=[].concat(Object(h.a)(o.travellingCompanion),[y]);l(Object(N.a)(Object(N.a)({},o),{},{travellingCompanion:a})),g("")}d(Object(N.a)(Object(N.a)({},m),{},{travellingCompanion:t}))}},value:y,onChange:function(e){return g(e.target.value)}}),m.travellingCompanion&&r.a.createElement("p",{className:"new-journey__error"},m.travellingCompanion)),r.a.createElement("div",{className:"new-journey__group"},r.a.createElement("label",null,"Image"),r.a.createElement("input",{type:"file",id:"file-image",onChange:function(e){return function(e){var t,a=e.target.value,n=Math.round(e.target.files[0].size/1024),r=(t=n,/(\.jpg|\.jpeg|\.png)$/i.test(a)?t>1e3?"Too big image":"":"Not correct type of image file");if(d(Object(N.a)(Object(N.a)({},m),{},{imageFile:r})),!r){var c=new FileReader;c.addEventListener("load",(function(){l(Object(N.a)(Object(N.a)({},o),{},{imageFile:c.result})),f(a.split(/(\\|\/)/g).pop())})),c.readAsDataURL(e.target.files[0])}}(e)}}),r.a.createElement("div",{className:"new-journey__image-info"},r.a.createElement("label",{htmlFor:"file-image",className:"new-journey__label--image"},"Choose image"),_&&r.a.createElement("p",{className:"new-journey__image-name"},"Selected file",r.a.createElement("span",null," ",_))),m.imageFile&&r.a.createElement("p",{className:"new-journey__error"},m.imageFile)),r.a.createElement("div",{className:"new-journey__buttons"},r.a.createElement(c.b,{className:"new-journey__button new-journey__button--back",to:"/"},"back to homepage"),r.a.createElement("button",{className:"new-journey__button new-journey__button--add",onClick:I},e.submitButton))),S&&r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"background"}),r.a.createElement(b,{title:"Oops!",description:"Your form is not correctly filled. Please improve the form and try again.",onCloseModal:function(){F(!1)}})))};var D=function(e){var t=Object(n.useState)(!1),a=Object(s.a)(t,2),o=a[0],l=a[1],c={id:Object(j.a)(),location:"",startDate:{day:1,month:1,year:(new Date).getFullYear()},description:"",travellingCompanion:[],imageFile:""};return r.a.createElement("main",{className:"container"},r.a.createElement("section",{className:"new-journey"},r.a.createElement("img",{className:"new-journey__img",src:"https://images.unsplash.com/photo-1553512313-64af79fdfe9c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80",alt:"new-journey"}),r.a.createElement(k,{submitButton:"add journey",journey:c,submitJourney:function(t){var a=JSON.parse(localStorage.getItem("journeys"))||[];a.unshift(t);try{localStorage.setItem("journeys",JSON.stringify(a)),e.history.push("/")}catch(n){l(!0)}}}),o&&r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"background"}),r.a.createElement(b,{title:"Oops!",description:"There is no space to save this journey \ud83d\ude32",onCloseModal:function(){l(!1)}}))))},S=function(){return r.a.createElement(c.a,null,r.a.createElement("div",null,r.a.createElement(i.c,null,r.a.createElement(i.a,{path:"/",component:g,exact:!0}),r.a.createElement(i.a,{path:"/create",component:D}),r.a.createElement(i.a,{component:v}))))};var F=function(){return r.a.createElement(S,null)};l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(F,null)),document.getElementById("root"))},78:function(e,t,a){}},[[125,1,2]]]);
//# sourceMappingURL=main.4e0e839e.chunk.js.map
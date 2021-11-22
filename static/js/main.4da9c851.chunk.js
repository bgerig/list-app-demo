(this["webpackJsonptm-demo"]=this["webpackJsonptm-demo"]||[]).push([[0],{14:function(e,t,i){},15:function(e,t,i){"use strict";i.r(t);var n=i(1),r=i.n(n),s=i(7),o=i.n(s),c=i(6),a=i(8),l=i(4),m=i(17),d=i(0),u=function(e){var t=e.moveDirection,i=e.moveDirectionMobile,n=e.onDelete,r=e.onMove,s=e.value,o="transform";return"left"===t&&(o+=" md:rotate-180"),"right"===t&&(o+=" md:rotate-0"),"up"===i&&(o+=" -rotate-90"),"down"===i&&(o+=" rotate-90"),Object(d.jsxs)("div",{className:"flex bg-gray-100 mb-3 px-2 md:px-3 py-2 rounded",children:[Object(d.jsx)("span",{className:"mr-auto",children:s}),Object(d.jsx)("button",{className:"bg-red-300 hover:bg-red-200 text-red-700 hover:text-red-500 px-2 py-1 mr-1 rounded",title:"Delete Item",onClick:n,children:Object(d.jsx)("svg",{className:"fill-current w-4 h-4",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",children:Object(d.jsx)("path",{d:"M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z"})})}),Object(d.jsx)("button",{className:"bg-gray-300 hover:bg-gray-200 text-gray-900 hover:text-gray-600 px-2 py-1 rounded",title:"Move Item",onClick:r,children:Object(d.jsx)("svg",{className:"".concat(o," fill-current w-4 h-4"),xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",children:Object(d.jsx)("polygon",{points:"16.172 9 10.101 2.929 11.515 1.515 20 10 19.293 10.707 11.515 18.485 10.101 17.071 16.172 11 0 11 0 9"})})})]})},b=function(e){var t=e.items,i=e.name,n=e.moveItemDirection,r=e.moveItemDirectionMobile,s=e.onItemDelete,o=e.onItemMove;return Object(d.jsxs)("div",{className:"items-list",children:[Object(d.jsx)("h2",{className:"font-bold mb-3",children:i}),t&&t.length>0?t.map((function(e){return Object(d.jsx)(u,{id:e.id,moveDirection:n,moveDirectionMobile:r,onDelete:function(){return s(e.id)},onMove:function(){return o(e.id)},value:e.value},e.id)})):Object(d.jsx)("span",{className:"text-red-500 text-sm font-semibold mt-1",children:"This list is currently empty."})]})};var j=function(){var e=Object(n.useState)((function(){var e=JSON.parse(sessionStorage.getItem("items"));if(e)return e;var t=[{id:Object(m.a)(),list:1,value:"Whoa, another item."},{id:Object(m.a)(),list:1,value:"Surprise item!"},{id:Object(m.a)(),list:2,value:"This is another item!"},{id:Object(m.a)(),list:2,value:"This is an item!"}];return sessionStorage.setItem("items",JSON.stringify(t)),t})),t=Object(l.a)(e,2),i=t[0],r=t[1],s=Object(n.useState)(""),o=Object(l.a)(s,2),u=o[0],j=o[1],x=Object(n.useState)(""),v=Object(l.a)(x,2),h=v[0],f=v[1],p=function(e){r((function(t){var i=t.filter((function(t){return t.id!==e}));return O(i),i}))},g=function(e){r((function(t){var i={};t.forEach((function(t){t.id===e&&(1===(i=Object(a.a)({},t)).list?i.list=2:i.list=1)}));var n=[].concat(Object(c.a)(t.filter((function(t){return t.id!==e}))),[i]);return O(n),n}))},O=function(e){sessionStorage.setItem("items",JSON.stringify(e))};return Object(d.jsxs)("div",{className:"container mx-auto py-6",children:[Object(d.jsx)("h1",{className:"font-bold text-xl lg:text-2xl",children:"List App"}),Object(d.jsxs)("p",{className:"mb-4",children:["Total items: ",i.length]}),Object(d.jsxs)("div",{className:"mb-12 md:mb-14",children:[Object(d.jsxs)("form",{className:"flex",onSubmit:function(e){e.preventDefault(),u.trim()?(r((function(e){var t=[].concat(Object(c.a)(e),[{id:Object(m.a)(),list:1,value:u}]);return O(t),t})),j("")):f("This field cannot be empty.")},children:[Object(d.jsx)("input",{className:"flex-auto bg-gray-100 text-sm md:text-md px-2 md:px-3 py-1 mr-3 rounded ".concat(h?"border-2 border-red-500":""),type:"text",placeholder:"Enter some text!",value:u,onChange:function(e){j(e.target.value),f("")}}),Object(d.jsx)("button",{type:"submit",className:"flex-initial bg-gray-900 hover:bg-gray-800 text-gray-100 text-sm md:text-md px-5 md:px-7 py-2 rounded",title:"Add Item",children:"Submit"})]}),!!h&&Object(d.jsx)("p",{className:"text-red-500 text-sm font-semibold mt-1",children:h})]}),Object(d.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-16",children:[Object(d.jsx)(b,{name:"List 1",items:i.filter((function(e){return 1===e.list})),moveItemDirection:"right",moveItemDirectionMobile:"down",onItemDelete:p,onItemMove:g}),Object(d.jsx)(b,{name:"List 2",items:i.filter((function(e){return 2===e.list})),moveItemDirection:"left",moveItemDirectionMobile:"up",onItemDelete:p,onItemMove:g})]})]})};i(14);o.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(j,{})}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.4da9c851.chunk.js.map
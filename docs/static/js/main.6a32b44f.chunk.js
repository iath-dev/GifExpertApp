(this["webpackJsonpgif-expert-app"]=this["webpackJsonpgif-expert-app"]||[]).push([[0],{15:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(6),i=a.n(c),u=a(1),l=a(8),o=function(e){var t=e.setCategories,a=Object(n.useState)(""),c=Object(u.a)(a,2),i=c[0],o=c[1];return r.a.createElement("form",{onSubmit:function(e){if(e.preventDefault(),""===i.trim())return null;t((function(e){return[i].concat(Object(l.a)(e))})),o("")}},r.a.createElement("input",{placeholder:"Tip the new category",value:i,type:"text",onChange:function(e){return o(e.target.value)}}))},m=a(4),s=a.n(m),p=a(7),f=function(e){var t=e.url,a=e.title;e.id;return r.a.createElement("div",{className:"card animate__animated animate__fadeIn"},r.a.createElement("img",{src:t,alt:a}),r.a.createElement("p",null,a))},d=function(e){var t=e.category,a=function(e){var t=e.uri,a=e.params,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(e){return e},c=Object(n.useState)({data:null,loading:!0}),i=Object(u.a)(c,2),l=i[0],o=i[1];return Object(n.useEffect)((function(){(function(){var e=Object(p.a)(s.a.mark((function e(){var n,c,i,l,m;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=Object.entries(a).map((function(e){var t=Object(u.a)(e,2),a=t[0],n=t[1];return"".concat(a,"=").concat(n)})).join("&"),c="".concat(t,"?").concat(n),e.next=4,fetch(c);case 4:return i=e.sent,e.next=7,i.json();case 7:l=e.sent,m=l.data,o({data:r(m),loading:!1});case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[a,t,r]),l}({uri:"https://api.giphy.com/v1/gifs/search",params:{q:encodeURI(t),limit:24,api_key:"xKFGyG3jUVKXZ0AMbVlsdy8XjCk7fgmk"}},(function(e){return e.map((function(e){return{id:e.id,title:e.title,url:e.images.downsized.url}}))})),c=a.loading,i=a.data;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",{className:"animate__animated animate__fadeIn"},t),c?r.a.createElement("p",{className:"animate__animated animate__flash"},"Cargando..."):r.a.createElement("div",{className:"card-grid"},i.map((function(e){return r.a.createElement(f,Object.assign({key:e.id},e))}))))},g=function(){var e=r.a.useState(["Simpson"]),t=Object(u.a)(e,2),a=t[0],n=t[1];return r.a.createElement("div",null,r.a.createElement("h2",null,"GifExpertApp"),r.a.createElement(o,{setCategories:n}),r.a.createElement("hr",null),r.a.createElement("div",null,a.map((function(e){return r.a.createElement(d,{key:e,category:e})}))))};a(15);i.a.render(r.a.createElement(g,null),document.getElementById("root"))},9:function(e,t,a){e.exports=a(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.6a32b44f.chunk.js.map
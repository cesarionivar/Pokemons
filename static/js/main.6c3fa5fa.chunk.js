(this["webpackJsonppokemons-app"]=this["webpackJsonppokemons-app"]||[]).push([[0],{14:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),a=n(8),s=n.n(a),i=(n(14),n(9)),o=n(5),l=n(0),u=function(e){var t=e.pokemon;return Object(l.jsxs)("div",{className:"card",children:[Object(l.jsx)("img",{src:null===t||void 0===t?void 0:t.image,className:"card-img-top img-poke",alt:null===t||void 0===t?void 0:t.name}),Object(l.jsxs)("div",{className:"card-body",children:[Object(l.jsx)("h5",{className:"card-title text-capitalize",children:null===t||void 0===t?void 0:t.name}),Object(l.jsxs)("div",{className:"card-text",children:[Object(l.jsx)("span",{className:"fw-bold",children:"Height:"})," ",null===t||void 0===t?void 0:t.height," inches"]}),Object(l.jsxs)("p",{className:"card-text",children:[Object(l.jsx)("span",{className:"fw-bold",children:"Weight:"})," ",null===t||void 0===t?void 0:t.weight," inches"]})]})]})},d=n(3),j=n.n(d),h=n(7),p=function(){var e=Object(h.a)(j.a.mark((function e(){var t,n,c,r=arguments;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.length>0&&void 0!==r[0]?r[0]:"https://pokeapi.co/api/v2/pokemon?limit=20",e.prev=1,e.next=4,fetch(t);case 4:return n=e.sent,e.next=7,n.json();case 7:return c=e.sent,e.abrupt("return",c);case 11:e.prev=11,e.t0=e.catch(1),console.log("Ha sucedido un error");case 14:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(){return e.apply(this,arguments)}}(),v=function(){var e=Object(h.a)(j.a.mark((function e(t){var n,c,r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(t);case 3:return c=e.sent,e.next=6,c.json();case 6:return r=e.sent,e.abrupt("return",{name:null===r||void 0===r?void 0:r.name,height:null===r||void 0===r?void 0:r.height,weight:null===r||void 0===r?void 0:r.weight,image:null===r||void 0===r||null===(n=r.sprites)||void 0===n?void 0:n.front_default});case 10:e.prev=10,e.t0=e.catch(0),console.log("Ha sucedido un error");case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}(),m=function(){var e=Object(c.useState)([]),t=Object(o.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)([]),s=Object(o.a)(a,2),d=s[0],j=s[1],h=Object(c.useState)(),m=Object(o.a)(h,2),b=m[0],f=m[1];Object(c.useEffect)((function(){p(b).then((function(e){r(e),e.results.forEach((function(e){v(null===e||void 0===e?void 0:e.url).then((function(e){j((function(t){return[].concat(Object(i.a)(t),[e])}))}))}))}))}),[b,j,r]);return Object(l.jsxs)("div",{className:"container mt-4 mb-4",children:[Object(l.jsx)("h1",{className:"fw-bold",children:"Pokemons"}),Object(l.jsx)("hr",{}),Object(l.jsx)("div",{className:"grid-pokemones",children:null===d||void 0===d?void 0:d.map((function(e,t){return Object(l.jsx)(u,{pokemon:e},"pokemon-".concat(t+1))}))}),Object(l.jsx)("div",{className:"mt-3 d-flex justify-content-end",children:Object(l.jsx)("button",{onClick:function(){f(n.next)},className:"btn btn-primary",children:"Get more..."})})]})};s.a.render(Object(l.jsx)(r.a.StrictMode,{children:Object(l.jsx)(m,{})}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.6c3fa5fa.chunk.js.map
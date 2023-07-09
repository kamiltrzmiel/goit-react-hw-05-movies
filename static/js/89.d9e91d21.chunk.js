"use strict";(self.webpackChunkreact_hw_05_movies=self.webpackChunkreact_hw_05_movies||[]).push([[89],{89:function(e,r,t){t.r(r),t.d(r,{default:function(){return d}});var n=t(439),a=t(390),s=t(791),c=t(689),i=t(87),u="movieDetails_wrapper__s3VPh",o="movieDetails_container__0I5or",l="movieDetails_title__SN6Ns",p="movieDetails_backButton__Kya5X",v=t(184),d=function(){var e,r,t=(0,c.UO)().movieId,d=(0,s.useState)(""),h=(0,n.Z)(d,2),f=h[0],m=h[1],x=(0,c.TH)();if((0,s.useEffect)((function(){t&&(0,a.Y5)(t).then((function(e){return m(e)}))}),[t]),f){var g=null!==(e=null===(r=x.state)||void 0===r?void 0:r.from)&&void 0!==e?e:"/movies";return(0,v.jsxs)("main",{children:[(0,v.jsx)("button",{className:p,children:(0,v.jsx)(i.rU,{to:g,children:"Go back to the list of searched movies"})}),(0,v.jsxs)("div",{className:u,children:[f&&(0,v.jsxs)("div",{className:o,children:[(0,v.jsx)("div",{children:(0,v.jsx)("img",{src:"https://image.tmdb.org/t/p/w500".concat(f.poster_path),alt:f.title,loading:s.lazy})}),(0,v.jsxs)("div",{children:[(0,v.jsxs)("div",{className:l,children:[(0,v.jsx)("h2",{children:f.title}),(0,v.jsxs)("p",{children:["(",parseInt(f.release_date),")"]})]}),(0,v.jsxs)("p",{children:["User Score: ","".concat(f.vote_average.toFixed(2)," | 10")]}),(0,v.jsx)("h3",{children:"Overview"}),(0,v.jsx)("p",{children:"".concat(f.overview)}),(0,v.jsx)("h3",{children:"Genres"}),(0,v.jsx)("p",{children:"".concat(f.genres.map((function(e){return e.name})).join(" / "))})]})]}),(0,v.jsx)("p",{children:"Additional information"}),(0,v.jsxs)("ul",{children:[(0,v.jsx)("li",{children:(0,v.jsx)(i.OL,{style:function(e){return{color:e.isActive?"#b92121":"inherit"}},to:"cast",state:{from:g},children:"Cast"})}),(0,v.jsx)("li",{children:(0,v.jsx)(i.OL,{style:function(e){return{color:e.isActive?"#b92121":"inherit"}},to:"reviews",state:{from:g},children:"Reviews"})})]}),(0,v.jsx)(s.Suspense,{fallback:(0,v.jsx)("div",{children:"Loading..."}),children:(0,v.jsx)(c.j3,{})})]})]})}}},390:function(e,r,t){t.d(r,{Fn:function(){return u},IV:function(){return l},Y5:function(){return o},wH:function(){return p},wr:function(){return i}});var n=t(861),a=t(757),s=t.n(a),c=t(243).Z.create({baseURL:"https://api.themoviedb.org/3",params:{api_key:"e56bac74c49b45071b964a5f7a0906aa"}}),i=function(){var e=(0,n.Z)(s().mark((function e(){var r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.get("/trending/movie/day",{params:{include_adult:!1}});case 3:return r=e.sent,e.abrupt("return",r.data.results);case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),u=function(){var e=(0,n.Z)(s().mark((function e(r){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.get("/search/movie",{params:{language:"en-US",page:1,include_adult:!1,query:r}});case 3:return t=e.sent,e.abrupt("return",t.data);case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(r){return e.apply(this,arguments)}}(),o=function(){var e=(0,n.Z)(s().mark((function e(r){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.get("/movie/".concat(r),{params:{language:"en-US"}});case 3:return t=e.sent,e.abrupt("return",t.data);case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(r){return e.apply(this,arguments)}}(),l=function(){var e=(0,n.Z)(s().mark((function e(r){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.get("/movie/".concat(r,"/credits"),{params:{language:"en-US"}});case 3:return t=e.sent,e.abrupt("return",t.data.cast);case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(r){return e.apply(this,arguments)}}(),p=function(){var e=(0,n.Z)(s().mark((function e(r){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.get("/movie/".concat(r,"/reviews"),{params:{language:"en-US"}});case 3:return t=e.sent,e.abrupt("return",t.data.results);case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(r){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=89.d9e91d21.chunk.js.map
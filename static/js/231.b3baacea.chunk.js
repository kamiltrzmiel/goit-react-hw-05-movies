"use strict";(self.webpackChunkreact_hw_05_movies=self.webpackChunkreact_hw_05_movies||[]).push([[231],{658:function(e,r,t){t.d(r,{Z:function(){return p}});var n=t(791),a=t(689),u=t(87),s="movieList_listOfMovies__STHBQ",c="movieList_card__Nr0BI",i="movieList_title__Jbv61",o=t(184),p=function(e){var r=e.movies,t=(0,a.TH)();return(0,o.jsx)(o.Fragment,{children:(0,o.jsx)("ul",{className:s,children:r.map((function(e){return(0,o.jsx)("li",{children:(0,o.jsx)("div",{className:c,children:(0,o.jsxs)(u.rU,{to:"/movies/".concat(e.id),state:{from:t},children:[(0,o.jsx)("img",{src:"https://image.tmdb.org/t/p/w500".concat(e.poster_path),alt:e.title,loading:n.lazy}),(0,o.jsx)("p",{className:i,children:e.title})]})})},e.id)}))})})}},231:function(e,r,t){t.r(r),t.d(r,{default:function(){return b}});var n=t(861),a=t(439),u=t(757),s=t.n(u),c=t(791),i=t(87),o=t(390),p=t(686),l=t.n(p),f=t(494),m="searchForm_searchBar__2CbSQ",v="searchForm_searchForm__D2TuG",h="searchForm_searchFormButton__+eMfU",d="searchForm_searchFormInput__bv6lf",g=t(184),_=function(e){var r=e.onSubmit,t=(0,c.useState)(""),n=(0,a.Z)(t,2),u=n[0],s=n[1];return(0,g.jsx)("header",{className:m,children:(0,g.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t=u.trim().toLowerCase();t?r(t):l().Notify.warning("The query is empty!")},className:v,children:[(0,g.jsx)("button",{type:"submit",className:h,children:(0,g.jsx)(f.Yfv,{})}),(0,g.jsx)("input",{className:d,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",value:u,onChange:function(e){s(e.target.value)}})]})})},x=t(658),b=function(){var e,r=(0,c.useState)(""),t=(0,a.Z)(r,2),u=t[0],p=t[1],l=(0,i.lr)(),f=(0,a.Z)(l,2),m=f[0],v=f[1],h=null!==(e=m.get("query"))&&void 0!==e?e:"";(0,c.useEffect)((function(){h&&(0,o.Fn)(h).then((function(e){return p(e.results)}))}),[h]);var d=function(){var e=(0,n.Z)(s().mark((function e(r){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:v({query:r});case 1:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}();return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)("header",{children:(0,g.jsx)(_,{onSubmit:d})}),(0,g.jsx)("main",{children:u&&(0,g.jsx)(x.Z,{movies:u})})]})}},390:function(e,r,t){t.d(r,{Fn:function(){return i},IV:function(){return p},Y5:function(){return o},wH:function(){return l},wr:function(){return c}});var n=t(861),a=t(757),u=t.n(a),s=t(243).Z.create({baseURL:"https://api.themoviedb.org/3",params:{api_key:"e56bac74c49b45071b964a5f7a0906aa"}}),c=function(){var e=(0,n.Z)(u().mark((function e(){var r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.get("/trending/movie/day",{params:{include_adult:!1}});case 3:return r=e.sent,e.abrupt("return",r.data.results);case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),i=function(){var e=(0,n.Z)(u().mark((function e(r){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.get("/search/movie",{params:{language:"en-US",page:1,include_adult:!1,query:r}});case 3:return t=e.sent,e.abrupt("return",t.data);case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(r){return e.apply(this,arguments)}}(),o=function(){var e=(0,n.Z)(u().mark((function e(r){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.get("/movie/".concat(r),{params:{language:"en-US"}});case 3:return t=e.sent,e.abrupt("return",t.data);case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(r){return e.apply(this,arguments)}}(),p=function(){var e=(0,n.Z)(u().mark((function e(r){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.get("/movie/".concat(r,"/credits"),{params:{language:"en-US"}});case 3:return t=e.sent,e.abrupt("return",t.data.cast);case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(r){return e.apply(this,arguments)}}(),l=function(){var e=(0,n.Z)(u().mark((function e(r){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.get("/movie/".concat(r,"/reviews"),{params:{language:"en-US"}});case 3:return t=e.sent,e.abrupt("return",t.data.results);case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(r){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=231.b3baacea.chunk.js.map
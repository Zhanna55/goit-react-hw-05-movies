"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[925],{6925:function(t,e,n){n.r(e);var r=n(5861),a=n(9439),c=n(4687),u=n.n(c),s=n(2791),i=n(7689),o=n(1933),p=n(184);e.default=function(){var t=(0,i.UO)().movieId,e=(0,s.useState)(null),n=(0,a.Z)(e,2),c=n[0],f=n[1];return(0,s.useEffect)((function(){function e(){return(e=(0,r.Z)(u().mark((function e(){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,o.tx)(t);case 3:if(0!==(n=e.sent).results.length){e.next=6;break}return e.abrupt("return");case 6:f(n.results),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[t]),(0,p.jsx)(p.Fragment,{children:c?(0,p.jsx)("ul",{children:c.map((function(t){var e=t.id,n=t.author,r=t.content;return(0,p.jsxs)("li",{children:[(0,p.jsxs)("h3",{children:["Author: ",n]}),(0,p.jsx)("p",{children:r})]},e)}))}):(0,p.jsx)("p",{children:"We don't have any reviews for this movie."})})}},1933:function(t,e,n){n.d(e,{Hg:function(){return i},TP:function(){return p},V0:function(){return o},tx:function(){return v},zv:function(){return f}});var r=n(5861),a=n(4687),c=n.n(a),u=n(1912);u.Z.defaults.baseURL="https://api.themoviedb.org/3";var s="32e5fb50b2bb500e37db4cd093ac4a39",i=function(){var t=(0,r.Z)(c().mark((function t(){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("/trending/movie/day?api_key=".concat(s));case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),o=function(){var t=(0,r.Z)(c().mark((function t(e){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("/search/movie?api_key=".concat(s,"&query=").concat(e));case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),p=function(){var t=(0,r.Z)(c().mark((function t(e){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("/movie/".concat(e,"?api_key=").concat(s));case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),f=function(){var t=(0,r.Z)(c().mark((function t(e){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("/movie/".concat(e,"/credits?api_key=").concat(s));case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),v=function(){var t=(0,r.Z)(c().mark((function t(e){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("/movie/".concat(e,"/reviews?api_key=").concat(s));case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}}]);
//# sourceMappingURL=925.a2827d3e.chunk.js.map
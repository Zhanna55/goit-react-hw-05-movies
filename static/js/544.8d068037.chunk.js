"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[544],{9760:function(t,n,e){e.d(n,{j:function(){return a}});var r=e(184),a=function(){return(0,r.jsx)("p",{children:"Oops, something went wrong. Please, try again."})}},8313:function(t,n,e){e.d(n,{e:function(){return u}});var r=e(1087),a=e(184),c=function(t){var n=t.movie,e=t.locationState,c=n.id,u=n.title;return(0,a.jsx)(r.rU,{to:"/movies/".concat(c),state:{from:e},children:(0,a.jsx)("li",{children:(0,a.jsx)("p",{children:u})})})},u=function(t){var n=t.movies,e=t.locationState,r=t.title;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("h1",{children:r}),(0,a.jsx)("ul",{children:n.map((function(t){return(0,a.jsx)(c,{movie:t,locationState:e},t.id)}))})]})}},9544:function(t,n,e){e.r(n);var r=e(5861),a=e(9439),c=e(4687),u=e.n(c),i=e(2791),o=e(7689),s=e(1933),f=e(8313),p=e(3521),v=e(9760),l=e(424),d=e(184);n.default=function(){var t=(0,i.useState)(null),n=(0,a.Z)(t,2),e=n[0],c=n[1],h=(0,i.useState)(l.Z.IDLE),m=(0,a.Z)(h,2),x=m[0],Z=m[1],E=(0,o.TH)();return(0,i.useEffect)((function(){function t(){return(t=(0,r.Z)(u().mark((function t(){var n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,s.Hg)();case 3:n=t.sent,c(n.results),Z(l.Z.RESOLVED),t.next=12;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0),Z(l.Z.REJECTED);case 12:case"end":return t.stop()}}),t,null,[[0,8]])})))).apply(this,arguments)}Z(l.Z.PENDING),function(){t.apply(this,arguments)}()}),[]),(0,d.jsxs)(d.Fragment,{children:[x===l.Z.IDLE&&(0,d.jsx)(d.Fragment,{}),x===l.Z.PENDING&&(0,d.jsx)(p.a,{}),x===l.Z.REJECTED&&(0,d.jsx)(v.j,{}),x===l.Z.RESOLVED&&(0,d.jsx)(f.e,{movies:e,locationState:E,title:"Trending today"})]})}},1933:function(t,n,e){e.d(n,{Hg:function(){return o},TP:function(){return f},V0:function(){return s},tx:function(){return v},zv:function(){return p}});var r=e(5861),a=e(4687),c=e.n(a),u=e(1912);u.Z.defaults.baseURL="https://api.themoviedb.org/3";var i="32e5fb50b2bb500e37db4cd093ac4a39",o=function(){var t=(0,r.Z)(c().mark((function t(){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("/trending/movie/day?api_key=".concat(i));case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),s=function(){var t=(0,r.Z)(c().mark((function t(n){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("/search/movie?api_key=".concat(i,"&query=").concat(n));case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),f=function(){var t=(0,r.Z)(c().mark((function t(n){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("/movie/".concat(n,"?api_key=").concat(i));case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),p=function(){var t=(0,r.Z)(c().mark((function t(n){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("/movie/".concat(n,"/credits?api_key=").concat(i));case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),v=function(){var t=(0,r.Z)(c().mark((function t(n){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("/movie/".concat(n,"/reviews?api_key=").concat(i));case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}()},424:function(t,n){n.Z={IDLE:"idle",PENDING:"pending",RESOLVED:"resolved",REJECTED:"rejected"}}}]);
//# sourceMappingURL=544.8d068037.chunk.js.map
"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[134],{134:function(e,t,n){n.r(t);var r=n(861),a=n(439),c=n(757),u=n.n(c),s=n(340),i=n(791),o=n(689),l=n(87),f=n(184);t.default=function(){var e=(0,i.useState)(""),t=(0,a.Z)(e,2),n=t[0],c=t[1],p=(0,i.useState)([]),h=(0,a.Z)(p,2),d=h[0],m=h[1],v=(0,o.TH)(),x=(0,l.lr)(),g=(0,a.Z)(x,2),b=g[0],k=g[1],y=b.get("query");(0,i.useEffect)((function(){if(y){var e=function(){var e=(0,r.Z)(u().mark((function e(t){var n,r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.Z.get("".concat("https://api.themoviedb.org/3/search/movie?","api_key=").concat("1751ed552758886790b5045f1f278379","&language=en-US&query=").concat(t,"&page=1&include_adult=false"));case 3:n=e.sent,r=n.data,m(r.results),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}();e(y)}}),[y]);return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsxs)("form",{onSubmit:function(e){e.preventDeafult(),k({query:n}),c("")},children:[(0,f.jsx)("input",{type:"text",name:"query",onChange:function(e){var t=e.target.value;c(t)},value:n,placeholder:"Search Movie"}),(0,f.jsx)("button",{type:"submit",children:"Submit"})]}),(0,f.jsx)("ul",{children:d.map((function(e){return(0,f.jsxs)("li",{children:[" ",(0,f.jsx)(l.rU,{to:"".concat(e.id),state:{from:v},children:e.title})]},e.id)}))})]})}}}]);
//# sourceMappingURL=134.3df2c81e.chunk.js.map
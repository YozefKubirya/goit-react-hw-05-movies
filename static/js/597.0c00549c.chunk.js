"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[597],{597:function(e,t,r){r.r(t);var a=r(861),n=r(439),c=r(757),i=r.n(c),s=r(689),o=r(791),u=r(340),h=r(184);t.default=function(){var e=(0,o.useState)([]),t=(0,n.Z)(e,2),r=t[0],c=t[1],l=(0,s.UO)().movieId;return(0,o.useEffect)((function(){var e=function(){var e=(0,a.Z)(i().mark((function e(t){var r,a;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.Z.get("".concat("https://api.themoviedb.org/3/movie","/").concat(t,"/credits?api_key=").concat("1751ed552758886790b5045f1f278379","&language=en-US"));case 3:r=e.sent,a=r.data,c(a.cast),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}();e(l)}),[l]),(0,h.jsx)("div",{children:(0,h.jsx)("ul",{children:r.map((function(e){var t=e.original_name,r=e.profile_path,a=e.cast_id,n=e.character,c="https://image.tmdb.org/t/p/w500"+r;return(0,h.jsxs)("li",{children:[(0,h.jsx)("img",{src:c,alt:"character",width:"150"}),(0,h.jsx)("h3",{children:t}),(0,h.jsxs)("p",{children:["Character: ",n]})]},a)}))})})}}}]);
//# sourceMappingURL=597.0c00549c.chunk.js.map
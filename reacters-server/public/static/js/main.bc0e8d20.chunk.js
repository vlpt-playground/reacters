(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{108:function(e,t,a){e.exports=a(265)},137:function(e,t,a){},138:function(e,t,a){},139:function(e,t,a){},140:function(e,t,a){},141:function(e,t,a){},144:function(e,t,a){},249:function(e,t,a){},250:function(e,t,a){},251:function(e,t,a){},252:function(e,t,a){},253:function(e,t,a){},254:function(e,t,a){},255:function(e,t,a){},256:function(e,t,a){},258:function(e,t,a){},259:function(e,t,a){},265:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(99),c=a.n(o),s=a(269),l=a(18),i=a(8),u=a(101),p=a(102),m=a(11),d=a(14),h=a(271),f=a(268),b=a(52),v=a(3),E=a.n(v),O=a(12);function g(e,t){return function(){for(var a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return function(){var a=Object(O.a)(E.a.mark(function a(r){var o;return E.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return r({type:"".concat(e,"_PENDING")}),a.prev=1,a.next=4,t.apply(void 0,n);case 4:return o=a.sent,r({type:"".concat(e,"_SUCCESS"),payload:o}),a.abrupt("return",o);case 9:throw a.prev=9,a.t0=a.catch(1),r({type:"".concat(e,"_ERROR"),payload:a.t0}),a.t0;case 13:case"end":return a.stop()}},a,null,[[1,9]])}));return function(e){return a.apply(this,arguments)}}()}}var j=a(103),y=a.n(j).a.create(),S=function(e){y.defaults.headers.common.Authorization=e};y.defaults.baseURL="https://reacters.vlpt.us";var w,k,C,N,P=y,T=Object(h.a)("auth/CHANGE_FIELD",function(e){return{mode:e.mode,key:e.key,value:e.value}}),x=(Object(h.a)("auth/INITIALIZE_FORM",function(e){return e}),g("auth/REGISTER",function(e){var t=e.username,a=e.password;return P.post("/api/auth/register",{username:t,password:a})})),_=g("auth/LOGIN",function(e){var t=e.username,a=e.password;return P.post("/api/auth/login",{username:t,password:a})}),R=Object(h.a)("auth/SET_ERROR",function(e){return e}),I={register:{username:"",password:"",passwordConfirm:""},login:{username:"",password:""},error:null,authorization:null},A=Object(f.a)((w={},Object(m.a)(w,"auth/CHANGE_FIELD",function(e,t){var a=t.payload,n=a.mode,r=a.key,o=a.value;return Object(b.a)(e,function(e){e[n][r]=o})}),Object(m.a)(w,"auth/INITIALIZE_FORM",function(e,t){var a=t.payload;return Object(b.a)(e,function(e){e[a]=I[a],e.error=null})}),Object(m.a)(w,"auth/SET_ERROR",function(e,t){var a=t.payload;return Object(d.a)({},e,{error:a})}),Object(m.a)(w,"auth/REGISTER_SUCCESS",function(e,t){var a=t.payload;return Object(d.a)({},e,{authorization:a.data})}),Object(m.a)(w,"auth/LOGIN_SUCCESS",function(e,t){var a=t.payload;return Object(d.a)({},e,{authorization:a.data})}),w),I),D=g("user/CHECK",function(){return P.get("/api/auth/check")}),z=Object(h.a)("user/TEMP_SET_USER",function(e){return e}),L=Object(f.a)((k={},Object(m.a)(k,"user/CHECK_SUCCESS",function(e,t){var a=t.payload;return Object(d.a)({},e,{user:a.data})}),Object(m.a)(k,"user/CHECK_ERROR",function(e){return Object(d.a)({},e,{user:null})}),Object(m.a)(k,"user/TEMP_SET_USER",function(e,t){var a=t.payload;return Object(d.a)({},e,{user:a})}),k),{user:null}),U=function(e){return P.get("/api/posts/".concat(e))},M=g("write/SUBMIT_POST",function(e){var t=e.title,a=e.body;return P.post("/api/posts",{title:t,body:a})}),F=g("write/GET_POST",U),H=g("write/UPDATE_POST",function(e,t){var a=t.title,n=t.body;return P.patch("/api/posts/".concat(e),{title:a,body:n})}),G=Object(f.a)((C={},Object(m.a)(C,"write/SUBMIT_POST_SUCCESS",function(e,t){var a=t.payload;return Object(d.a)({},e,{post:a.data})}),Object(m.a)(C,"write/GET_POST_SUCCESS",function(e,t){var a=t.payload;return Object(d.a)({},e,{post:a.data})}),Object(m.a)(C,"write/UPDATE_POST_SUCCESS",function(e,t){var a=t.payload;return Object(d.a)({},e,{post:a.data})}),C),{post:null}),B=g("posts/READ_POST",U),J=g("posts/LIST_POSTS",function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return P.get("/api/posts?page=".concat(e))}),q=g("posts/REMOVE_POST",function(e){return P.delete("/api/posts/".concat(e))}),W=Object(f.a)((N={},Object(m.a)(N,"posts/READ_POST_PENDING",function(e){return Object(d.a)({},e,{post:null})}),Object(m.a)(N,"posts/READ_POST_SUCCESS",function(e,t){var a=t.payload;return Object(d.a)({},e,{post:a.data})}),Object(m.a)(N,"posts/LIST_POSTS_SUCCESS",function(e,t){var a=t.payload;return Object(d.a)({},e,{list:a.data})}),N),{post:null,list:null}),K=Object(l.combineReducers)({auth:A,user:L,write:G,posts:W}),Y=(a(137),a(267)),Q=a(5),V=a(6),Z=a(9),$=a(7),X=a(10),ee=function(e){function t(){var e,a;Object(Q.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(Z.a)(this,(e=Object($.a)(t)).call.apply(e,[this].concat(r)))).initialize=Object(O.a)(E.a.mark(function e(){var t,n,r;return E.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t=localStorage.getItem("user"),n=localStorage.getItem("authorization"),t){e.next=4;break}return e.abrupt("return");case 4:if(a.props.tempSetUser(JSON.parse(t)),n){e.next=7;break}return e.abrupt("return");case 7:return r=JSON.parse(n),S("Bearer ".concat(r.access_token)),e.prev=9,e.next=12,a.props.check();case 12:e.next=18;break;case 14:e.prev=14,e.t0=e.catch(9),localStorage.removeItem("user"),localStorage.removeItem("authorization");case 18:case"end":return e.stop()}},e,null,[[9,14]])})),a}return Object(X.a)(t,e),Object(V.a)(t,[{key:"componentDidMount",value:function(){this.initialize()}},{key:"render",value:function(){return null}}]),t}(n.Component),te=Object(i.b)(function(){return{}},{check:D,tempSetUser:z})(ee),ae=(a(138),function(e){var t=e.children,a=e.header;return r.a.createElement("div",{className:"PageTemplate"},a,t)}),ne=a(266),re=(a(139),a(140),function(e){var t=e.children,a=e.className;return r.a.createElement("div",{className:"Responsive ".concat(a||"")},t)}),oe=function(e){var t=e.user,a=e.onLogout;return r.a.createElement(re,null,r.a.createElement("div",{className:"Header"},r.a.createElement(ne.a,{to:"/",className:"logo"},"REACTERS"),r.a.createElement("div",{className:"right-area"},t?r.a.createElement("div",{className:"logged-in"},r.a.createElement("div",{className:"username"},t.username),r.a.createElement("button",{onClick:a},"\ub85c\uadf8\uc544\uc6c3")):r.a.createElement(ne.a,{to:"/login"},"\ub85c\uadf8\uc778"))))},ce=function(e){function t(){var e,a;Object(Q.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(Z.a)(this,(e=Object($.a)(t)).call.apply(e,[this].concat(r)))).handleLogout=function(){localStorage.removeItem("user"),localStorage.removeItem("authorization"),window.location.reload()},a}return Object(X.a)(t,e),Object(V.a)(t,[{key:"render",value:function(){return r.a.createElement(oe,{user:this.props.user,onLogout:this.handleLogout})}}]),t}(n.Component),se=Object(i.b)(function(e){return{user:e.user.user}})(ce),le=function(e){var t=e.children;return r.a.createElement(ae,{header:r.a.createElement(se,null)},t)},ie=a(23),ue=(a(141),function(){return r.a.createElement(ne.a,{to:"/write",className:"WritePostButton"},r.a.createElement(ie.c,null),r.a.createElement("div",{className:"text"},"\uc0c8 \uae00 \uc791\uc131\ud558\uae30"))}),pe=a(270),me=a(24),de=a.n(me),he=(a(144),a(53)),fe=a(104),be=a.n(fe);function ve(e){var t=new Date,a=new Date(e),n=t.getTime()-a.getTime();return n<6e4?"\ubc29\uae08 \uc804":n<6048e5?Object(he.distanceInWordsToNow)(a,{locale:be.a,addSuffix:!0}):Object(he.format)(a,"YYYY-MM-DD")}var Ee=function(e){var t=e.posts;return r.a.createElement("div",{className:"PostList"},t.map(function(e){return r.a.createElement("div",{className:"post-item",key:e.id},r.a.createElement(ne.a,{to:"/posts/".concat(e.id),className:"title"},e.title),r.a.createElement("div",{className:"meta"},r.a.createElement("span",{className:"username"},"by ",r.a.createElement("b",null,e.user.username)),r.a.createElement("span",{className:"separator"},"\xb7"),r.a.createElement("span",{className:"date"},ve(e.created_at))),r.a.createElement("p",null,e.body))}))},Oe=function(e){function t(){var e,a;Object(Q.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(Z.a)(this,(e=Object($.a)(t)).call.apply(e,[this].concat(r)))).loadPosts=Object(O.a)(E.a.mark(function e(){return E.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return window.scrollTo(0,0),e.next=3,a.props.listPosts(a.page);case 3:case"end":return e.stop()}},e)})),a}return Object(X.a)(t,e),Object(V.a)(t,[{key:"componentDidUpdate",value:function(e,t){e.location.search!==this.props.location.search&&this.loadPosts()}},{key:"componentDidMount",value:function(){this.loadPosts()}},{key:"render",value:function(){return this.props.list?r.a.createElement(Ee,{posts:this.props.list.posts}):null}},{key:"page",get:function(){var e=de.a.parse(this.props.location.search,{ignoreQueryPrefix:!0});return parseInt(e.page||"1",10)}}]),t}(n.Component),ge=Object(pe.a)(Object(i.b)(function(e){return{list:e.posts.list}},{listPosts:J})(Oe)),je=(a(249),function(e){var t=e.page,a=void 0===t?1:t,n=e.lastPage;e.count;return r.a.createElement("div",{className:"Pagination"},1===a?r.a.createElement("div",{className:"disabled-btn"},r.a.createElement(ie.a,null)):r.a.createElement(ne.a,{to:"/?page=".concat(a-1),disabled:1===a},r.a.createElement(ie.a,null)),r.a.createElement("div",{className:"page"},r.a.createElement("b",null,a)," \ud398\uc774\uc9c0"),a>=n?r.a.createElement("div",{className:"disabled-btn"},r.a.createElement(ie.b,null)):r.a.createElement(ne.a,{to:"/?page=".concat(a+1)},r.a.createElement(ie.b,null)))}),ye=function(e){function t(){return Object(Q.a)(this,t),Object(Z.a)(this,Object($.a)(t).apply(this,arguments))}return Object(X.a)(t,e),Object(V.a)(t,[{key:"render",value:function(){return this.props.hasPosts?r.a.createElement(je,{page:this.page,lastPage:this.props.lastPage}):null}},{key:"page",get:function(){var e=de.a.parse(this.props.location.search,{ignoreQueryPrefix:!0});return parseInt(e.page||"1",10)}}]),t}(n.Component),Se=Object(pe.a)(Object(i.b)(function(e){return{hasPosts:!!e.posts.list,lastPage:e.posts.list?Math.ceil(e.posts.list.count/10):1}})(ye)),we=Object(i.b)(function(e){return{user:e.user.user}})(function(e){return(0,e.children)(e.user)}),ke=function(){return r.a.createElement(le,null,r.a.createElement(re,null,r.a.createElement("div",{className:"PostListPage"},r.a.createElement(we,null,function(e){return e?r.a.createElement("div",{className:"button-aligner"},r.a.createElement(ue,null)):null}),r.a.createElement(ge,null),r.a.createElement(Se,null))))},Ce=(a(250),a(251),a(107)),Ne=(a(252),a(253),function(e){var t=e.onCancel,a=e.onConfirm;return r.a.createElement("div",{className:"AskRemove"},r.a.createElement("div",{className:"box"},r.a.createElement("div",{className:"message"},"\uc815\ub9d0 \uc0ad\uc81c\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?"),r.a.createElement("div",{className:"buttons"},r.a.createElement("button",{className:"cancel",onClick:t},"\ucde8\uc18c"),r.a.createElement("button",{className:"confirm",onClick:a},"\ud655\uc778"))))}),Pe=function(e){var t=e.onEdit,a=e.onRemove,o=Object(n.useState)(!1),c=Object(Ce.a)(o,2),s=c[0],l=c[1],i=function(){var e=Object(O.a)(E.a.mark(function e(){return E.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:a();case 1:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}();return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"PostActions"},r.a.createElement("div",{className:"buttons"},r.a.createElement("button",{onClick:t},"\uc218\uc815"),r.a.createElement("button",{onClick:function(){l(!0)}},"\uc0ad\uc81c"))),s&&r.a.createElement(Ne,{onConfirm:i,onCancel:function(){l(!1)}}))},Te=function(e){var t=e.title,a=e.body,n=e.username,o=e.date,c=e.ownPost,s=e.onEdit,l=e.onRemove;return r.a.createElement("div",{className:"PostViewer"},c&&r.a.createElement(Pe,{onEdit:s,onRemove:l}),r.a.createElement("h1",{className:"title"},t),r.a.createElement("div",{className:"meta"},r.a.createElement("span",{className:"username"},"by ",r.a.createElement("b",null,n)),r.a.createElement("span",{className:"separator"},"\xb7"),r.a.createElement("span",{className:"date"},ve(o))),r.a.createElement("div",{className:"body",dangerouslySetInnerHTML:{__html:a}}))},xe=function(e){function t(){var e,a;Object(Q.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(Z.a)(this,(e=Object($.a)(t)).call.apply(e,[this].concat(r)))).initialize=Object(O.a)(E.a.mark(function e(){var t,n,r,o;return E.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.props,n=t.match,r=t.readPost,o=n.params.postId,e.prev=2,e.next=5,r(o);case 5:e.next=10;break;case 7:e.prev=7,e.t0=e.catch(2),console.log(e.t0);case 10:case"end":return e.stop()}},e,null,[[2,7]])})),a.handleEdit=function(){var e=a.props,t=e.post;e.history.push("/write?id=".concat(t.id))},a.handleRemove=Object(O.a)(E.a.mark(function e(){var t,n,r,o;return E.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.props,n=t.post,r=t.history,o=t.removePost,e.prev=1,e.next=4,o(n.id);case 4:r.push("/"),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),console.log(e.t0);case 10:case"end":return e.stop()}},e,null,[[1,7]])})),a}return Object(X.a)(t,e),Object(V.a)(t,[{key:"componentDidMount",value:function(){this.initialize()}},{key:"render",value:function(){var e=this.props,t=e.post,a=e.user;return t?r.a.createElement(Te,{title:t.title,body:t.body,date:t.created_at,username:t.user.username,ownPost:t.user.username===(a&&a.username),onEdit:this.handleEdit,onRemove:this.handleRemove}):null}}]),t}(n.Component),_e=Object(pe.a)(Object(i.b)(function(e){return{post:e.posts.post,user:e.user.user}},{readPost:B,removePost:q})(xe)),Re=function(){return r.a.createElement(le,null,r.a.createElement("div",{className:"PostPage"},r.a.createElement(re,null,r.a.createElement(_e,null))))},Ie=(a(254),function(e){var t=e.children;return r.a.createElement("div",{className:"AuthTemplate"},r.a.createElement("div",{className:"whitebox"},r.a.createElement("div",{className:"logo-area"},r.a.createElement(ne.a,{to:"/",className:"logo"},"REACTERS")),t))}),Ae=(a(255),{login:"\ub85c\uadf8\uc778",register:"\ud68c\uc6d0\uac00\uc785"}),De=function(e){var t=e.type,a=e.form,n=e.error,o=e.onChange,c=e.onSubmit,s=a||{},l=s.username,i=s.password,u=s.passwordConfirm;return r.a.createElement("div",{className:"AuthForm"},r.a.createElement("h3",null,Ae[t]),r.a.createElement("form",{onSubmit:c},r.a.createElement("input",{name:"username",placeholder:"\uc544\uc774\ub514",onChange:o,value:l}),r.a.createElement("input",{name:"password",placeholder:"\ube44\ubc00\ubc88\ud638",onChange:o,value:i,type:"password"}),"register"===t&&r.a.createElement("input",{name:"passwordConfirm",placeholder:"\ube44\ubc00\ubc88\ud638 \ud655\uc778",onChange:o,value:u,type:"password"}),n&&r.a.createElement("div",{className:"error"},n),r.a.createElement("button",{type:"submit"},Ae[t])),r.a.createElement("div",{className:"footer"},"login"===t?r.a.createElement(ne.a,{to:"/register"},"\ud68c\uc6d0\uac00\uc785"):r.a.createElement(ne.a,{to:"/login"},"\ub85c\uadf8\uc778")))},ze=function(e){function t(){var e,a;Object(Q.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(Z.a)(this,(e=Object($.a)(t)).call.apply(e,[this].concat(r)))).handleChange=function(e){var t=e.target,n=t.value,r=t.name;a.props.changeField({mode:"login",key:r,value:n})},a.handleSubmit=function(){var e=Object(O.a)(E.a.mark(function e(t){var n,r,o,c,s,l,i,u,p,m,d;return E.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n=a.props,r=n.form,o=n.login,c=n.setError,s=n.check,l=r.username,i=r.password,c(null),e.prev=4,e.next=7,o({username:l,password:i});case 7:return u=a.props.authorization,localStorage.setItem("authorization",JSON.stringify(u)),S("Bearer ".concat(u.access_token)),e.next=12,s();case 12:p=a.props,m=p.user,d=p.history,localStorage.setItem("user",JSON.stringify(m)),d.push("/"),e.next=21;break;case 17:e.prev=17,e.t0=e.catch(4),e.t0.response||(c("\uc624\ub958 \ubc1c\uc0dd!"),console.log(e.t0)),401===e.t0.response.status&&c("\ub85c\uadf8\uc778 \uc2e4\ud328");case 21:case"end":return e.stop()}},e,null,[[4,17]])}));return function(t){return e.apply(this,arguments)}}(),a}return Object(X.a)(t,e),Object(V.a)(t,[{key:"render",value:function(){var e=this.props,t=e.form,a=e.error;return r.a.createElement(De,{type:"login",form:t,onChange:this.handleChange,onSubmit:this.handleSubmit,error:a})}}]),t}(n.Component),Le=Object(i.b)(function(e){return{form:e.auth.login,error:e.auth.error,authorization:e.auth.authorization,user:e.user.user}},{changeField:T,setError:R,login:_,check:D})(Object(pe.a)(ze)),Ue=function(){return r.a.createElement(Ie,null,r.a.createElement(Le,null))},Me=function(e){function t(){var e,a;Object(Q.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(Z.a)(this,(e=Object($.a)(t)).call.apply(e,[this].concat(r)))).handleChange=function(e){var t=e.target,n=t.value,r=t.name;a.props.changeField({mode:"register",key:r,value:n})},a.handleSubmit=function(){var e=Object(O.a)(E.a.mark(function e(t){var n,r,o,c,s,l,i,u,p,m,d,h;return E.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n=a.props,r=n.form,o=n.register,c=n.setError,s=n.check,l=r.username,i=r.password,u=r.passwordConfirm,c(null),i!==u&&c("\ube44\ubc00\ubc88\ud638\uac00 \uc77c\uce58\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4."),e.prev=5,e.next=8,o({username:l,password:i});case 8:return p=a.props.authorization,localStorage.setItem("authorization",JSON.stringify(p)),S("Bearer ".concat(p.access_token)),e.next=13,s();case 13:m=a.props,d=m.user,h=m.history,localStorage.setItem("user",JSON.stringify(d)),h.push("/"),e.next=22;break;case 18:e.prev=18,e.t0=e.catch(5),e.t0.response||c("\uc624\ub958 \ubc1c\uc0dd!"),409===e.t0.response.status&&c("\uc774\ubbf8 \uc874\uc7ac\ud558\ub294 \uc544\uc774\ub514\uc785\ub2c8\ub2e4.");case 22:case"end":return e.stop()}},e,null,[[5,18]])}));return function(t){return e.apply(this,arguments)}}(),a}return Object(X.a)(t,e),Object(V.a)(t,[{key:"render",value:function(){var e=this.props,t=e.form,a=e.error;return r.a.createElement(De,{type:"register",form:t,onChange:this.handleChange,onSubmit:this.handleSubmit,error:a})}}]),t}(n.Component),Fe=Object(i.b)(function(e){return{form:e.auth.register,error:e.auth.error,authorization:e.auth.authorization,user:e.user.user}},{changeField:T,setError:R,register:x,check:D})(Object(pe.a)(Me)),He=function(){return r.a.createElement(Ie,null,r.a.createElement(Fe,null))},Ge=(a(256),a(257),a(258),a(259),function(e){function t(){var e,a;Object(Q.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(Z.a)(this,(e=Object($.a)(t)).call.apply(e,[this].concat(r)))).state={scrolling:!1},a.handleScroll=function(){var e=(document.body.scrollTop||document.documentElement.scrollTop)>0;a.state.scrolling!==e&&a.setState({scrolling:e})},a}return Object(X.a)(t,e),Object(V.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.handleScroll)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.handleScroll)}},{key:"render",value:function(){var e=this.props,t=e.onSubmit,a=e.onCancel;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:["EditorHead",this.state.scrolling?"scrolling":""].join(" ")},r.a.createElement(re,{className:"wrapper"},r.a.createElement("button",{className:"cancel",onClick:a},"\ucde8\uc18c"),r.a.createElement("button",{className:"submit",onClick:t},"\uc791\uc131\ud558\uae30"))),r.a.createElement("div",{className:"padding"}))}}]),t}(n.Component)),Be=null;Be=a(260);var Je=function(e){function t(){var e,a;Object(Q.a)(this,t);for(var n=arguments.length,o=new Array(n),c=0;c<n;c++)o[c]=arguments[c];return(a=Object(Z.a)(this,(e=Object($.a)(t)).call.apply(e,[this].concat(o)))).editor=r.a.createRef(),a.quill=null,a.state={title:""},a.initialize=function(){var e=new Be(a.editor.current,{theme:"bubble",placeholder:"\ub0b4\uc6a9\uc744 \uc791\uc131\ud558\uc138\uc694.",modules:{toolbar:[["bold","italic"],[{header:"1"},{header:"2"}],["blockquote","code-block","link","image"]]}});e.on("text-change",function(t,a,n){var r=e.getSelection();r&&r.index===e.getLength()-1&&window.scrollTo(0,document.body.scrollHeight)}),a.quill=e,a.setPost()},a.handleChangeTitle=function(e){a.setState({title:e.target.value})},a.focusEditor=function(){a.quill.focus()},a.setPost=function(){var e=a.props.post;e&&(a.setState({title:e.title}),a.quill.root.innerHTML=e.body)},a.handleSubmit=function(){a.props.onSubmit({title:a.state.title,body:a.quill.root.innerHTML})},a.handleKeyPress=function(e){"Enter"===e.key&&a.focusEditor()},a}return Object(X.a)(t,e),Object(V.a)(t,[{key:"componentDidMount",value:function(){this.initialize()}},{key:"componentDidUpdate",value:function(e,t){e.post!==this.props.post&&this.setPost()}},{key:"render",value:function(){var e=this.state.title;return r.a.createElement("div",{className:"Editor"},r.a.createElement(Ge,{onSubmit:this.handleSubmit,onCancel:this.props.onCancel}),r.a.createElement("input",{placeholder:"\uc81c\ubaa9\uc744 \uc785\ub825\ud558\uc138\uc694.",className:"title",value:e,onChange:this.handleChangeTitle,autoFocus:!0,onKeyPress:this.handleKeyPress}),r.a.createElement("div",{className:"quill-editor",ref:this.editor,onClick:this.focusEditor}))}}]),t}(n.Component),qe=function(e){function t(){var e,a;Object(Q.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(Z.a)(this,(e=Object($.a)(t)).call.apply(e,[this].concat(r)))).initialize=Object(O.a)(E.a.mark(function e(){var t;return E.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t=a.id)){e.next=4;break}return e.next=4,a.props.getPost(t);case 4:case"end":return e.stop()}},e)})),a.handleCancel=function(){a.props.history.goBack()},a.handleSubmit=function(){var e=Object(O.a)(E.a.mark(function e(t){var n,r,o;return E.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.title,r=t.body,e.prev=1,!a.id){e.next=7;break}return e.next=5,a.props.updatePost(a.id,{title:n,body:r});case 5:e.next=9;break;case 7:return e.next=9,a.props.submitPost({title:n,body:r});case 9:o=a.props.post,a.props.history.push("/posts/".concat(o.id)),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(1),console.log(e.t0);case 16:case"end":return e.stop()}},e,null,[[1,13]])}));return function(t){return e.apply(this,arguments)}}(),a}return Object(X.a)(t,e),Object(V.a)(t,[{key:"componentDidMount",value:function(){this.initialize()}},{key:"render",value:function(){var e=this.props.post;return this.id&&!e?null:r.a.createElement(Je,{onSubmit:this.handleSubmit,onCancel:this.handleCancel,post:this.id&&e})}},{key:"id",get:function(){var e=this.props.location;return de.a.parse(e.search,{ignoreQueryPrefix:!0}).id}}]),t}(n.Component),We=Object(pe.a)(Object(i.b)(function(e){return{post:e.write.post}},{submitPost:M,getPost:F,updatePost:H})(qe)),Ke=function(){return r.a.createElement("div",{className:"WritePage"},r.a.createElement(re,null,r.a.createElement(We,null)))},Ye=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(Y.a,{component:ke,path:"/",exact:!0}),r.a.createElement(Y.a,{component:Ue,path:"/login"}),r.a.createElement(Y.a,{component:He,path:"/register"}),r.a.createElement(Y.a,{component:Ke,path:"/write"}),r.a.createElement(Y.a,{component:Re,path:"/posts/:postId(\\d+)"}),r.a.createElement(te,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Qe=Object(l.createStore)(K,Object(p.composeWithDevTools)(Object(l.applyMiddleware)(u.a)));c.a.render(r.a.createElement(i.a,{store:Qe},r.a.createElement(s.a,null,r.a.createElement(Ye,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[108,1,2]]]);
//# sourceMappingURL=main.bc0e8d20.chunk.js.map
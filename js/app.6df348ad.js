(function(e){function t(t){for(var r,c,s=t[0],u=t[1],i=t[2],p=0,f=[];p<s.length;p++)c=s[p],Object.prototype.hasOwnProperty.call(a,c)&&a[c]&&f.push(a[c][0]),a[c]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);l&&l(t);while(f.length)f.shift()();return o.push.apply(o,i||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,s=1;s<n.length;s++){var u=n[s];0!==a[u]&&(r=!1)}r&&(o.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},a={app:0},o=[];function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/Frontend_Vue/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=t,s=s.slice();for(var i=0;i<s.length;i++)t(s[i]);var l=u;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"00af":function(e,t,n){"use strict";n("9f30")},"04e0":function(e,t,n){},"0882":function(e,t,n){"use strict";n("10a7")},"10a7":function(e,t,n){},"2bef":function(e,t,n){"use strict";n("6e6f")},"51f4":function(e,t,n){e.exports=n.p+"img/MyGramLogo.54601f4f.png"},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23");n("b0c0");function a(e,t,n,a,o,c){var s=Object(r["z"])("Menu"),u=Object(r["z"])("router-view");return Object(r["s"])(),Object(r["f"])(r["a"],null,[c.isNotNavigationPage?(Object(r["s"])(),Object(r["d"])(s,{key:0,prop_name:o.name,prop_role:o.role,prop_isCreator:o.isCreator},null,8,["prop_name","prop_role","prop_isCreator"])):Object(r["e"])("",!0),Object(r["i"])(u)],64)}var o=n("51f4"),c=n.n(o),s=function(e){return Object(r["v"])("data-v-0ed50432"),e=e(),Object(r["t"])(),e},u={class:"background"},i=s((function(){return Object(r["g"])("div",{class:"logo"},[Object(r["g"])("img",{src:c.a})],-1)})),l={class:"links"},p={key:0,class:"holder"},f=s((function(){return Object(r["g"])("i",{class:"fas fa-home fa-2x icon"},null,-1)})),b={key:1,class:"holder"},d=s((function(){return Object(r["g"])("i",{class:"fas fa-home fa-2x icon"},null,-1)})),g={key:2,class:"holder"},m=s((function(){return Object(r["g"])("i",{class:"fas fa-camera fa-2x icon"},null,-1)})),j={class:"holder"},v=s((function(){return Object(r["g"])("i",{class:"fas fa-money-bill-wave fa-2x icon"},null,-1)})),O={class:"holder"},h=s((function(){return Object(r["g"])("i",{class:"fas fa-users fa-2x icon"},null,-1)})),w=s((function(){return Object(r["g"])("i",{class:"fas fa-sign-out-alt fa-2x icon"},null,-1)})),k=[w];function x(e,t,n,a,o,c){var s=Object(r["z"])("router-link");return Object(r["s"])(),Object(r["f"])("div",u,[i,Object(r["g"])("h1",null,Object(r["B"])(this.prop_name),1),Object(r["g"])("h2",null,Object(r["B"])(this.prop_role),1),Object(r["g"])("div",l,[n.prop_isCreator?(Object(r["s"])(),Object(r["f"])("div",p,[Object(r["i"])(s,{to:"/profile"},{default:Object(r["H"])((function(){return[f]})),_:1})])):(Object(r["s"])(),Object(r["f"])("div",b,[Object(r["i"])(s,{to:"/"},{default:Object(r["H"])((function(){return[d]})),_:1})])),n.prop_isCreator?(Object(r["s"])(),Object(r["f"])("div",g,[Object(r["i"])(s,{to:"/createPost"},{default:Object(r["H"])((function(){return[m]})),_:1})])):Object(r["e"])("",!0),Object(r["g"])("div",j,[Object(r["i"])(s,{to:"/buytokens"},{default:Object(r["H"])((function(){return[v]})),_:1})]),Object(r["g"])("div",O,[Object(r["i"])(s,{to:"/followers"},{default:Object(r["H"])((function(){return[h]})),_:1})]),Object(r["g"])("div",{class:"holder",onClick:t[0]||(t[0]=function(){return c.logout&&c.logout.apply(c,arguments)})},k)])])}var R={data:function(){return{}},props:{prop_name:{default:"name",type:String},prop_role:{default:"role",type:String},prop_isCreator:{default:!0,type:Boolean}},methods:{logout:function(){console.log("logout"),localStorage.removeItem("jwt"),this.$router.push("login")}}},y=(n("00af"),n("d959")),P=n.n(y);const I=P()(R,[["render",x],["__scopeId","data-v-0ed50432"]]);var F=I,_=(n("ac1f"),n("1276"),n("5319"),n("a15b"),n("d81d"),n("fb6a"),n("d3b7"),n("25f0"),{parseJwt:function(e){var t=e.split(".")[1],n=t.replace(/-/g,"+").replace(/_/g,"/"),r=decodeURIComponent(atob(n).split("").map((function(e){return"%"+("00"+e.charCodeAt(0).toString(16)).slice(-2)})).join(""));return JSON.parse(r)},checkExpiration:function(e){var t=new Date(1e3*e),n=new Date;return t.getTime()<=n.getTime()},getRole:function(){var e=this.parseJwt(localStorage.getItem("jwt")),t=e["Role"];return t},getName:function(){var e=this.parseJwt(localStorage.getItem("jwt")),t=e["Name"];return t}}),C={components:{Menu:F},data:function(){return{name:"",role:"",isCreator:!0}},methods:{getUserInfo:function(){this.name=_.getName(),this.role=_.getRole(),"creator"!=this.role&&(this.isCreator=!1),console.log(this.isCreator)}},computed:{isNotNavigationPage:function(){return"login"!==this.$route.name&&"register"!==this.$route.name&&(this.getUserInfo(),!0)}}};n("2bef");const T=P()(C,[["render",a]]);var U=T,S=n("6c02"),A=function(e){return Object(r["v"])("data-v-6d0e35ea"),e=e(),Object(r["t"])(),e},$={class:"background"},B={class:"panel"},L=A((function(){return Object(r["g"])("div",{class:"section"},[Object(r["g"])("h1",{class:"title"},"MyGram")],-1)})),D={class:"section"},z={class:"input"},V=A((function(){return Object(r["g"])("i",{class:"icon fas fa-envelope"},null,-1)})),q=A((function(){return Object(r["g"])("div",{class:"line"},null,-1)})),N={class:"input"},J=A((function(){return Object(r["g"])("i",{class:"icon fas fa-lock"},null,-1)})),M=A((function(){return Object(r["g"])("div",{class:"line"},null,-1)})),E={class:"section"},H=A((function(){return Object(r["g"])("p",null,"Register",-1)}));function G(e,t,n,a,o,c){return Object(r["s"])(),Object(r["f"])("div",$,[Object(r["g"])("div",B,[L,Object(r["g"])("div",D,[Object(r["g"])("div",z,[V,q,Object(r["I"])(Object(r["g"])("input",{"onUpdate:modelValue":t[0]||(t[0]=function(e){return o.email=e}),class:"input-field",placeholder:"Email"},null,512),[[r["F"],o.email]])]),Object(r["g"])("div",N,[J,M,Object(r["I"])(Object(r["g"])("input",{"onUpdate:modelValue":t[1]||(t[1]=function(e){return o.password=e}),type:"password",class:"input-field",placeholder:"Password"},null,512),[[r["F"],o.password]])])]),Object(r["g"])("div",E,[H,Object(r["g"])("button",{class:"btn",onClick:t[2]||(t[2]=function(){return e.handleLogIn&&e.handleLogIn.apply(e,arguments)})},"Log In")])])])}var K=n("1da1"),Q=(n("96cf"),n("bc3a")),W=n.n(Q),X="http://localhost:43085",Y={signIn:function(e){return Object(K["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,W.a.post("".concat(X,"/api/Login/authenticate"),e);case 3:n=t.sent,t.next=9;break;case 6:t.prev=6,t.t0=t["catch"](0),n=t.t0.response;case 9:return console.log(n.data),t.abrupt("return",{token:n.data});case 11:case"end":return t.stop()}}),t,null,[[0,6]])})))()}},Z={data:function(){return{email:"",password:""}},methods:{handleLogin:function(){var e=this;return Object(K["a"])(regeneratorRuntime.mark((function t(){var n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n={email:e.email,password:e.password},t.next=3,Y.signIn(n);case 3:r=t.sent,localStorage.setItem("jwt",r.token),null!=e.$route.params.nextUrl?e.$router.push(e.$route.params.nextUrl):e.$router.push("home");case 6:case"end":return t.stop()}}),t)})))()}}};n("0882");const ee=P()(Z,[["render",G],["__scopeId","data-v-6d0e35ea"]]);var te=ee,ne={class:"panel"};function re(e,t,n,a,o,c){return Object(r["s"])(),Object(r["f"])("div",ne,[Object(r["I"])(Object(r["g"])("input",{type:"text","onUpdate:modelValue":t[0]||(t[0]=function(e){return o.email=e}),placeholder:"email"},null,512),[[r["F"],o.email]]),Object(r["I"])(Object(r["g"])("input",{type:"text","onUpdate:modelValue":t[1]||(t[1]=function(e){return o.username=e}),placeholder:"username"},null,512),[[r["F"],o.username]]),Object(r["I"])(Object(r["g"])("input",{type:"checkbox","onUpdate:modelValue":t[2]||(t[2]=function(e){return o.isFanAccount=e})},null,512),[[r["D"],o.isFanAccount]]),Object(r["g"])("button",{onClick:t[3]||(t[3]=function(){return c.registerAccount&&c.registerAccount.apply(c,arguments)})},"Register ")])}var ae="http://localhost:43085",oe={createFan:function(e){return Object(K["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,W.a.post("".concat(ae,"/api/Register/fan"),e);case 3:n=t.sent,t.next=9;break;case 6:t.prev=6,t.t0=t["catch"](0),n=t.t0.response;case 9:return t.abrupt("return",{response:n});case 10:case"end":return t.stop()}}),t,null,[[0,6]])})))()},createCreator:function(e){return Object(K["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,W.a.post("".concat(ae,"/api/Register/creator"),e);case 3:n=t.sent,t.next=9;break;case 6:t.prev=6,t.t0=t["catch"](0),n=t.t0.response;case 9:return t.abrupt("return",{response:n});case 10:case"end":return t.stop()}}),t,null,[[0,6]])})))()}},ce={data:function(){return{email:"",username:"",isFanAccount:!1}},methods:{registerAccount:function(){var e=this;return Object(K["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.email&&e.username){t.next=3;break}return alert("All fields need to be filled in"),t.abrupt("return");case 3:if(n={email:e.email,username:e.username},!e.isFanAccount){t.next=9;break}return t.next=7,oe.createFan(n);case 7:t.next=11;break;case 9:return t.next=11,oe.createCreator(n);case 11:alert("Account has been created"),e.$router.push("login");case 13:case"end":return t.stop()}}),t)})))()}}};const se=P()(ce,[["render",re]]);var ue=se;function ie(e,t,n,a,o,c){var s=Object(r["z"])("Posts");return Object(r["s"])(),Object(r["f"])(r["a"],null,[Object(r["g"])("button",{onClick:t[0]||(t[0]=function(){return c.goToProfilePage&&c.goToProfilePage.apply(c,arguments)})},"test"),Object(r["g"])("div",null,[Object(r["i"])(s,{onTest:c.likePost,onReaction:c.reaction,onFollow:c.follow,onDonate:c.donate,posts:o.imagePosts},null,8,["onTest","onReaction","onFollow","onDonate","posts"])])],64)}n("a4d3"),n("e01a");var le="http://localhost:43085",pe={headers:{Authorization:"Bearer ".concat(localStorage.getItem("jwt"))}},fe={PostImage:function(e,t){return Object(K["a"])(regeneratorRuntime.mark((function n(){var r,a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:r={description:e,image:t};try{a=W.a.post("".concat(le,"/api/Post"),r,pe)}catch(o){a=o.response}return n.abrupt("return",{response:a});case 3:case"end":return n.stop()}}),n)})))()},UploadImage:function(e,t){var n=this;return Object(K["a"])(regeneratorRuntime.mark((function r(){var a;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,W.a.post("".concat(le,"/api/Post/upload"),e,pe).then(n.PostImage(t.description,t.image));case 3:a=r.sent,console.log(a),r.next=10;break;case 7:r.prev=7,r.t0=r["catch"](0),a=r.t0.response;case 10:return r.abrupt("return",{response:a});case 11:case"end":return r.stop()}}),r,null,[[0,7]])})))()},getPosts:function(){return Object(K["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,W.a.get("".concat(le,"/api/Post"),pe);case 3:t=e.sent,e.next=9;break;case 6:return e.prev=6,e.t0=e["catch"](0),e.abrupt("return",e.t0.response);case 9:return e.abrupt("return",t.data);case 10:case"end":return e.stop()}}),e,null,[[0,6]])})))()},likePost:function(e){return Object(K["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,W.a.put("".concat(le,"/api/Post/id"),e,pe);case 3:n=t.sent,t.next=9;break;case 6:return t.prev=6,t.t0=t["catch"](0),t.abrupt("return",t.t0.response);case 9:return t.abrupt("return",n.data);case 10:case"end":return t.stop()}}),t,null,[[0,6]])})))()},saveLike:function(e){return Object(K["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,W.a.post("".concat(le,"/api/SaveLike"),e,pe);case 3:n=t.sent,t.next=9;break;case 6:return t.prev=6,t.t0=t["catch"](0),t.abrupt("return",t.t0.response);case 9:return t.abrupt("return",n.data);case 10:case"end":return t.stop()}}),t,null,[[0,6]])})))()},react:function(e){return Object(K["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.t0=n,t.next=4,W.a.post("".concat(le,"/api/Reaction"),e,pe);case 4:t.t1=t.sent,t.t0,t.t1,t.next=11;break;case 8:return t.prev=8,t.t2=t["catch"](0),t.abrupt("return",t.t2.response);case 11:return t.abrupt("return",n.data);case 12:case"end":return t.stop()}}),t,null,[[0,8]])})))()}};n("00b4");function be(e,t,n,a,o,c){var s=Object(r["z"])("Post");return Object(r["s"])(!0),Object(r["f"])(r["a"],null,Object(r["y"])(n.posts,(function(e){return Object(r["s"])(),Object(r["f"])("div",{key:e.id},[Object(r["i"])(s,{post:e,onLikePost:function(t){return c.like(e)},onReactPost:c.test,onFollow:c.follow,onDonate:c.donate},null,8,["post","onLikePost","onReactPost","onFollow","onDonate"])])})),128)}var de=function(e){return Object(r["v"])("data-v-e2acc3fc"),e=e(),Object(r["t"])(),e},ge={class:"panel"},me={class:"topBar"},je={class:"content"},ve=["src"],Oe={class:"contentJudge"},he={class:"likeComment"},we=de((function(){return Object(r["g"])("i",{class:"far fa-comment"},null,-1)})),ke=de((function(){return Object(r["g"])("div",{class:"bookmark"},[Object(r["g"])("i",{class:"far fa-bookmark"})],-1)})),xe={class:"reaction"},Re=de((function(){return Object(r["g"])("option",null,"0",-1)})),ye=de((function(){return Object(r["g"])("option",null,"100",-1)})),Pe=de((function(){return Object(r["g"])("option",null,"200",-1)})),Ie=de((function(){return Object(r["g"])("option",null,"300",-1)})),Fe=de((function(){return Object(r["g"])("option",null,"400",-1)})),_e=de((function(){return Object(r["g"])("option",null,"500",-1)})),Ce=[Re,ye,Pe,Ie,Fe,_e],Te={class:"description"};function Ue(e,t,n,a,o,c){return Object(r["s"])(),Object(r["f"])("div",ge,[Object(r["g"])("div",me,[Object(r["g"])("label",null,Object(r["B"])(n.post.creatorUsername),1),Object(r["g"])("button",{class:"follow",onClick:t[0]||(t[0]=function(e){return c.onClickFollow(n.post.creatorId)})}," Follow ")]),Object(r["g"])("div",je,[Object(r["g"])("img",{class:"img",src:n.post.image},null,8,ve)]),Object(r["g"])("div",Oe,[Object(r["g"])("div",he,[Object(r["g"])("button",{onClick:t[1]||(t[1]=function(e){return c.onLikeClick(n.post.post)})},[Object(r["g"])("i",{class:Object(r["o"])({"far fa-heart":!o.isLiked,"fas fa-heart":o.isLiked})},null,2)]),Object(r["g"])("label",null,Object(r["B"])(n.post.likes),1),we]),ke]),Object(r["g"])("div",xe,[Object(r["I"])(Object(r["g"])("textarea",{"onUpdate:modelValue":t[2]||(t[2]=function(e){return o.reaction=e})},null,512),[[r["F"],o.reaction]]),Object(r["g"])("button",{onClick:t[3]||(t[3]=function(e){return c.onReactionPost()})}," React "),Object(r["I"])(Object(r["g"])("select",{"onUpdate:modelValue":t[4]||(t[4]=function(e){return o.donateTokens=e})},Ce,512),[[r["E"],o.donateTokens]]),Object(r["g"])("button",{onClick:t[5]||(t[5]=function(){return c.onClickDonate&&c.onClickDonate.apply(c,arguments)})}," Donate ")]),Object(r["g"])("div",Te,[Object(r["g"])("h3",null,Object(r["B"])(n.post.description),1)]),(Object(r["s"])(!0),Object(r["f"])(r["a"],null,Object(r["y"])(n.post.reactions,(function(e){return Object(r["s"])(),Object(r["f"])("div",{key:e.id},[Object(r["g"])("div",null,Object(r["B"])(e.message),1)])})),128))])}var Se={name:"PostItem",props:["post"],emits:["like-post","react-post","follow","donate"],data:function(){return{isLiked:!1,reaction:"",message:"",donateTokens:0}},mounted:function(){console.log(this.post)},methods:{onLikeClick:function(e){this.$emit("like-post",e),this.isLiked=!this.isLiked},onReactionPost:function(){if(this.reaction){var e={postId:this.post.id,like:this.like,message:this.reaction};this.$emit("react-post",e)}else alert("please fill in a reaction")},onClickFollow:function(e){this.$emit("follow",e)},onClickDonate:function(){var e={amount:this.donateTokens,creatorId:this.post.creatorId};this.$emit("donate",e)}}};n("75b0");const Ae=P()(Se,[["render",Ue],["__scopeId","data-v-e2acc3fc"]]);var $e=Ae,Be={name:"Posts",components:{Post:$e},props:{posts:Array},emits:["test","reaction","follow","donate"],created:function(){var e=this;return Object(K["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:console.log("posts = "+e.posts);case 1:case"end":return t.stop()}}),t)})))()},methods:{like:function(e){console.log("hehehehe"+e.id),this.$emit("test",e)},test:function(e){this.$emit("reaction",e)},follow:function(e){this.$emit("follow",e)},donate:function(e){this.$emit("donate",e)}}};const Le=P()(Be,[["render",be]]);var De=Le,ze="http://localhost:43085",Ve={headers:{Authorization:"Bearer ".concat(localStorage.getItem("jwt"))}},qe={PostFollow:function(e){return Object(K["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,W.a.post("".concat(ze,"/api/Follow"),e,Ve);case 3:n=t.sent,t.next=9;break;case 6:t.prev=6,t.t0=t["catch"](0),n=t.t0.response;case 9:return t.abrupt("return",n);case 10:case"end":return t.stop()}}),t,null,[[0,6]])})))()},getFollowers:function(){return Object(K["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,W.a.get("".concat(ze,"/api/Follow"),Ve);case 3:t=e.sent,e.next=9;break;case 6:e.prev=6,e.t0=e["catch"](0),t=e.t0.response;case 9:return e.abrupt("return",t.data);case 10:case"end":return e.stop()}}),e,null,[[0,6]])})))()},GetFollowings:function(){return Object(K["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,W.a.get("".concat(ze,"/api/Follow/following"),Ve);case 3:t=e.sent,e.next=9;break;case 6:e.prev=6,e.t0=e["catch"](0),t=e.t0.response;case 9:return e.abrupt("return",t.data);case 10:case"end":return e.stop()}}),e,null,[[0,6]])})))()}},Ne="http://localhost:43085",Je={headers:{Authorization:"Bearer ".concat(localStorage.getItem("jwt"))}},Me={postTokens:function(e){return Object(K["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,W.a.put("".concat(Ne,"/api/Token"),e,Je);case 3:n=t.sent,t.next=9;break;case 6:t.prev=6,t.t0=t["catch"](0),n=t.t0.response;case 9:return t.abrupt("return",n);case 10:case"end":return t.stop()}}),t,null,[[0,6]])})))()},donateTokens:function(e){return Object(K["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,W.a.put("".concat(Ne,"/api/Token/donate"),e,Je);case 3:n=t.sent,t.next=9;break;case 6:t.prev=6,t.t0=t["catch"](0),n=t.t0.response;case 9:return t.abrupt("return",n);case 10:case"end":return t.stop()}}),t,null,[[0,6]])})))()}},Ee={components:{Posts:De},data:function(){return{imagePosts:[],reactions:[]}},created:function(){var e=this;return Object(K["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.getPosts();case 2:case"end":return t.stop()}}),t)})))()},methods:{getPosts:function(){var e=this;return Object(K["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,fe.getPosts();case 2:n=t.sent,e.imagePosts=n,console.log("imagePosts = "+e.imagePosts);case 5:case"end":return t.stop()}}),t)})))()},likePost:function(e){return Object(K["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,fe.saveLike(e);case 2:if(n=t.sent,!n){t.next=6;break}return t.next=6,fe.likePost(e);case 6:case"end":return t.stop()}}),t)})))()},reaction:function(e){return Object(K["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,fe.react(e);case 2:case"end":return t.stop()}}),t)})))()},follow:function(e){return Object(K["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n={creatorId:e},console.log(n),t.next=4,qe.PostFollow(n);case 4:case"end":return t.stop()}}),t)})))()},donate:function(e){return Object(K["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Me.donateTokens(e);case 2:alert("thank you for your donation");case 3:case"end":return t.stop()}}),t)})))()},goToProfilePage:function(){this.$router.push({path:"profile",query:{username:"admin"}})}}};const He=P()(Ee,[["render",ie]]);var Ge=He,Ke={id:"preview"},Qe=["src"];function We(e,t,n,a,o,c){return Object(r["s"])(),Object(r["f"])(r["a"],null,[Object(r["g"])("input",{type:"file",accept:"image/jpeg",onChange:t[0]||(t[0]=function(){return c.convertImage&&c.convertImage.apply(c,arguments)})},null,32),Object(r["I"])(Object(r["g"])("input",{type:"text",placeholder:"description","onUpdate:modelValue":t[1]||(t[1]=function(e){return o.description=e})},null,512),[[r["F"],o.description]]),Object(r["g"])("div",Ke,[o.url?(Object(r["s"])(),Object(r["f"])("img",{key:0,src:o.url},null,8,Qe)):Object(r["e"])("",!0)]),Object(r["g"])("button",{onClick:t[2]||(t[2]=function(){return c.postImage&&c.postImage.apply(c,arguments)})},"Post")],64)}n("3ca3"),n("ddb0"),n("2b3d"),n("9861");var Xe={data:function(){return{description:"",image:"",url:""}},methods:{postImage:function(){var e=this;return Object(K["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.convertImage();case 2:return t.next=4,fe.PostImage(e.description,e.image);case 4:case"end":return t.stop()}}),t)})))()},convertImage:function(){var e=this;return Object(K["a"])(regeneratorRuntime.mark((function t(){var n,r,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=document.querySelector("input[type=file]").files[0],r=new FileReader,e.url=URL.createObjectURL(n),r.onloadend=function(){a=r.result,e.image=a},t.abrupt("return",r.readAsDataURL(n));case 5:case"end":return t.stop()}}),t)})))()}}};const Ye=P()(Xe,[["render",We]]);var Ze=Ye,et=function(e){return Object(r["v"])("data-v-7a5bae54"),e=e(),Object(r["t"])(),e},tt={class:"panel"},nt={class:"item item--1"},rt={class:"content"},at=et((function(){return Object(r["g"])("h1",null," 100 Tokens",-1)})),ot=et((function(){return Object(r["g"])("label",null," $10.00",-1)})),ct={class:"item item--2"},st={class:"content"},ut=et((function(){return Object(r["g"])("h1",null," 200 Tokens",-1)})),it=et((function(){return Object(r["g"])("label",null," $20.00",-1)})),lt={class:"item item--3"},pt={class:"content"},ft=et((function(){return Object(r["g"])("h1",null," 300 Tokens",-1)})),bt=et((function(){return Object(r["g"])("label",null," $30.00",-1)})),dt={class:"item item--4"},gt={class:"content"},mt=et((function(){return Object(r["g"])("h1",null," 400 Tokens",-1)})),jt=et((function(){return Object(r["g"])("label",null," $40.00",-1)})),vt={class:"item item--5"},Ot={class:"content"},ht=et((function(){return Object(r["g"])("h1",null," 500 Tokens",-1)})),wt=et((function(){return Object(r["g"])("label",null," $50.00",-1)})),kt={class:"item item--6"},xt={class:"content"},Rt=et((function(){return Object(r["g"])("h1",null," 600 Tokens",-1)})),yt=et((function(){return Object(r["g"])("label",null," $60.00",-1)}));function Pt(e,t,n,a,o,c){return Object(r["s"])(),Object(r["f"])("div",tt,[Object(r["g"])("div",nt,[Object(r["g"])("div",rt,[at,ot,Object(r["g"])("button",{onClick:t[0]||(t[0]=function(e){return c.buyTokens(100)})},"Buy")])]),Object(r["g"])("div",ct,[Object(r["g"])("div",st,[ut,it,Object(r["g"])("button",{onClick:t[1]||(t[1]=function(e){return c.buyTokens(200)})},"Buy")])]),Object(r["g"])("div",lt,[Object(r["g"])("div",pt,[ft,bt,Object(r["g"])("button",{onClick:t[2]||(t[2]=function(e){return c.buyTokens(300)})},"Buy")])]),Object(r["g"])("div",dt,[Object(r["g"])("div",gt,[mt,jt,Object(r["g"])("button",{onClick:t[3]||(t[3]=function(e){return c.buyTokens(400)})},"Buy")])]),Object(r["g"])("div",vt,[Object(r["g"])("div",Ot,[ht,wt,Object(r["g"])("button",{onClick:t[4]||(t[4]=function(e){return c.buyTokens(500)})},"Buy")])]),Object(r["g"])("div",kt,[Object(r["g"])("div",xt,[Rt,yt,Object(r["g"])("button",{onClick:t[5]||(t[5]=function(e){return c.buyTokens(600)})},"Buy")])])])}var It={data:function(){return{}},methods:{buyTokens:function(e){var t={Amount:e};Me.postTokens(t)}}};n("edf3");const Ft=P()(It,[["render",Pt],["__scopeId","data-v-7a5bae54"]]);var _t=Ft,Ct={key:0},Tt={key:1};function Ut(e,t,n,a,o,c){var s=Object(r["z"])("Followers");return Object(r["s"])(),Object(r["f"])("div",null,[o.isFan?(Object(r["s"])(),Object(r["f"])("h1",Ct," Following ")):(Object(r["s"])(),Object(r["f"])("h1",Tt," Followers ")),Object(r["g"])("div",null,[Object(r["i"])(s,{followers:o.followers,"is-fan":o.isFan},null,8,["followers","is-fan"])])])}var St={class:"panel"};function At(e,t,n,a,o,c){var s=Object(r["z"])("Follower");return Object(r["s"])(),Object(r["f"])("div",St,[(Object(r["s"])(!0),Object(r["f"])(r["a"],null,Object(r["y"])(n.followers,(function(e){return Object(r["s"])(),Object(r["f"])("div",{key:e.id},[Object(r["i"])(s,{follower:e,isFan:n.isFan},null,8,["follower","isFan"])])})),128))])}var $t=function(e){return Object(r["v"])("data-v-48480ccc"),e=e(),Object(r["t"])(),e},Bt={class:"panel"},Lt={key:0},Dt={class:"followItem"},zt=$t((function(){return Object(r["g"])("img",{src:"https://picsum.photos/200/300",alt:"avatar"},null,-1)})),Vt=$t((function(){return Object(r["g"])("button",null,"Unfollow",-1)})),qt={key:1},Nt={class:"followItem"},Jt=$t((function(){return Object(r["g"])("img",{src:"https://picsum.photos/200/300",alt:"avatar"},null,-1)})),Mt=$t((function(){return Object(r["g"])("button",null,"Remove",-1)}));function Et(e,t,n,a,o,c){return Object(r["s"])(),Object(r["f"])("div",Bt,[n.isFan?(Object(r["s"])(),Object(r["f"])("div",Lt,[Object(r["g"])("div",Dt,[zt,Object(r["g"])("label",null,Object(r["B"])(n.follower.creator.username),1),Vt])])):(Object(r["s"])(),Object(r["f"])("div",qt,[Object(r["g"])("div",Nt,[Jt,Object(r["g"])("label",null,Object(r["B"])(n.follower.fan.username),1),Mt])]))])}var Ht={name:"Follower",props:["follower","isFan"]};n("da32");const Gt=P()(Ht,[["render",Et],["__scopeId","data-v-48480ccc"]]);var Kt=Gt,Qt={name:"Followers",props:{followers:Array,isFan:Boolean},components:{Follower:Kt}};n("c0a8");const Wt=P()(Qt,[["render",At],["__scopeId","data-v-27c02499"]]);var Xt=Wt,Yt={components:{Followers:Xt},data:function(){return{followers:[],isFan:!1}},created:function(){var e=this;return Object(K["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(n=_.getRole(),console.log("role = "+n),"creator"!=n){t.next=8;break}return t.next=5,qe.getFollowers();case 5:e.followers=t.sent,t.next=12;break;case 8:return t.next=10,qe.GetFollowings();case 10:e.followers=t.sent,e.isFan=!0;case 12:console.log("Followers = "+e.followers);case 13:case"end":return t.stop()}}),t)})))()}};const Zt=P()(Yt,[["render",Ut]]);var en=Zt,tn=Object(r["h"])('<h1 data-v-71488f76>Profile Page</h1><div class="panel" data-v-71488f76><div class="topSection" data-v-71488f76><div class="imageContainer" data-v-71488f76><img src="https://picsum.photos/200/300" alt="avatar" data-v-71488f76></div><div class="dataContainer" data-v-71488f76><div class="usernameContainer" data-v-71488f76><h2 data-v-71488f76>UserName</h2></div><div class="data" data-v-71488f76><label data-v-71488f76>posts 5 </label><label data-v-71488f76>followers 7 </label><label data-v-71488f76>following 9 </label></div><div class="data" data-v-71488f76><label data-v-71488f76>Bio</label><label data-v-71488f76>Bio</label></div></div></div></div>',2);function nn(e,t,n,r,a,o){return tn}var rn="http://localhost:43085",an={headers:{Authorization:"Bearer ".concat(localStorage.getItem("jwt"))}},on={getUserData:function(e){return Object(K["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,W.a.get("".concat(rn,"/api/User/").concat(e),an);case 3:n=t.sent,t.next=9;break;case 6:t.prev=6,t.t0=t["catch"](0),n=t.t0.response;case 9:return console.log(n),t.abrupt("return",n);case 11:case"end":return t.stop()}}),t,null,[[0,6]])})))()}},cn={data:function(){return{username:"",posts:[],followers:0,bio:"",website:""}},created:function(){var e=this;return Object(K["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.username=e.$route.query.username,t.next=3,on.getUserData(e.username);case 3:case"end":return t.stop()}}),t)})))()}};n("feed");const sn=P()(cn,[["render",nn],["__scopeId","data-v-71488f76"]]);var un=sn,ln=[{path:"/login",name:"login",component:te},{path:"/home",alias:"/",name:"home",component:Ge,meta:{requiresAuth:!0}},{path:"/register",name:"register",component:ue},{path:"/createPost",name:"createPost",component:Ze,meta:{requiresAuth:!0}},{path:"/buytokens",name:"buytokens",component:_t,meta:{requiresAuth:!0}},{path:"/followers",name:"followers",component:en,meta:{requiresAuth:!0}},{path:"/profile",name:"profile",component:un,meta:{requiresAuth:!0}}],pn=Object(S["a"])({history:Object(S["b"])("/Frontend_Vue/"),routes:ln});pn.beforeEach((function(e,t,n){if("/"===e.path&&(null==localStorage.getItem("jwt")?n({name:"login",params:{nextUrl:e.fullPath}}):n({name:"home"})),e.matched.some((function(e){return e.meta.requiresAuth})))if(null==localStorage.getItem("jwt"))n({name:"login",params:{nextUrl:e.fullPath}});else{var r=_.parseJwt(localStorage.getItem("jwt")),a=_.checkExpiration(r["exp"]);console.log(_.getRole()),a?(localStorage.removeItem("jwt"),n({name:"login",params:{nextUrl:e.fullPath}})):n()}else e.matched.some((function(e){return e.meta.guest}))?null==localStorage.getItem("jwt")?n():n({name:"home"}):n()}));var fn=pn;n("15f5"),n("7051");Object(r["c"])(U).use(fn).mount("#app")},"6c39":function(e,t,n){},"6e6f":function(e,t,n){},"75b0":function(e,t,n){"use strict";n("da47")},"9f30":function(e,t,n){},c0a8:function(e,t,n){"use strict";n("f88e")},da32:function(e,t,n){"use strict";n("e3fa")},da47:function(e,t,n){},e3fa:function(e,t,n){},edf3:function(e,t,n){"use strict";n("6c39")},f88e:function(e,t,n){},feed:function(e,t,n){"use strict";n("04e0")}});
//# sourceMappingURL=app.6df348ad.js.map
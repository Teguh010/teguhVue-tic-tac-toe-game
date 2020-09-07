(function(e){function t(t){for(var n,l,s=t[0],o=t[1],u=t[2],p=0,f=[];p<s.length;p++)l=s[p],Object.prototype.hasOwnProperty.call(a,l)&&a[l]&&f.push(a[l][0]),a[l]=0;for(n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n]);c&&c(t);while(f.length)f.shift()();return i.push.apply(i,u||[]),r()}function r(){for(var e,t=0;t<i.length;t++){for(var r=i[t],n=!0,s=1;s<r.length;s++){var o=r[s];0!==a[o]&&(n=!1)}n&&(i.splice(t--,1),e=l(l.s=r[0]))}return e}var n={},a={app:0},i=[];function l(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,l),r.l=!0,r.exports}l.m=e,l.c=n,l.d=function(e,t,r){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(l.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)l.d(r,n,function(t){return e[t]}.bind(null,n));return r},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/teguhVue-tic-tac-toe-game/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],o=s.push.bind(s);s.push=t,s=s.slice();for(var u=0;u<s.length;u++)t(s[u]);var c=o;i.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"16c0":function(e,t,r){},"24bb":function(e,t,r){},"4aa3":function(e,t,r){"use strict";var n=r("24bb"),a=r.n(n);a.a},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("h1",{staticClass:"title",staticStyle:{"background-color":"LightSeaGreen"}},[r("marquee",{attrs:{direction:"right"}},[e._v("Teguh JS Tic-Tac-Toe")])],1),r("router-view")],1)},i=[],l={name:"App"},s=l,o=(r("5c0b"),r("2877")),u=Object(o["a"])(s,a,i,!1,null,null,null),c=u.exports,p=r("2f62");n["a"].use(p["a"]);var f=new p["a"].Store({state:{player1Name:null,player2Name:null},mutations:{clear:function(e){e.player1Name=null,e.player2Name=null},player1Name:function(e,t){e.player1Name=t},player2Name:function(e,t){e.player2Name=t}}}),m=r("8c4f"),y=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"inilobby"},[r("form",{staticClass:"lobby",on:{submit:function(t){return t.preventDefault(),e.start(t)}}},[r("div",[r("label",[e._v("Player 1")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.player1,expression:"player1"}],attrs:{type:"text",placeholder:"Name for player 1"},domProps:{value:e.player1},on:{input:function(t){t.target.composing||(e.player1=t.target.value)}}})]),r("div",[r("label",[e._v("Player 2")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.player2,expression:"player2"}],attrs:{type:"text",placeholder:"Name for player 2"},domProps:{value:e.player2},on:{input:function(t){t.target.composing||(e.player2=t.target.value)}}})]),r("div",{staticClass:"lobby__action"},[r("button",{attrs:{type:"submit",disabled:!e.player1||!e.player2}},[e._v("Start the game")])])])])},v=[],h={data:function(){return{player1:null,player2:null}},methods:{start:function(){this.$store.commit("player1Name",this.player1),this.$store.commit("player2Name",this.player2),this.$router.push({path:"/game"})}},beforeRouteEnter:function(e,t,r){r((function(e){e.player1=null,e.player2=null}))}},d=h,b=(r("4aa3"),Object(o["a"])(d,y,v,!1,null,null,null)),_=b.exports,g=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"board"},[r("div",{staticClass:"game"},[r("Status",{attrs:{winner:e.winner.player,player:e.player,isDrawGame:e.isDrawGame}}),r("div",{staticClass:"game__board"},e._l(e.squares,(function(t,n){return r("Square",{key:n,attrs:{value:t,isGameOver:e.isGameOver,isWinner:e.isSquareWinner(n)},on:{click:function(t){return e.onSquareClick(n)}}})})),1),r("Restart",{on:{click:e.restartGame}})],1)])},w=[],O=(r("cb29"),r("4de4"),r("caad"),r("2532"),r("3835")),x=r("b85c"),S=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],N=function(e){var t,r=Object(x["a"])(S);try{for(r.s();!(t=r.n()).done;){var n=t.value,a=Object(O["a"])(n,3),i=a[0],l=a[1],s=a[2];if(e[i]&&e[i]===e[l]&&e[i]===e[s])return{player:e[i],positions:n}}}catch(o){r.e(o)}finally{r.f()}return{player:null,positions:[]}},j=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"game__status"},[e.winner?r("span",[e._v("Winner is "+e._s(e.winnerName))]):e.isDrawGame?r("span",[e._v("That's a draw")]):r("span",[e._v("Next player is "+e._s(e.playerName))])])},k=[];function $(e,t){var r=t.state;return"X"===e?r.player1Name:r.player2Name}var q={props:{winner:String,player:String,isDrawGame:Boolean},computed:{playerName:function(){return $(this.player,this.$store)},winnerName:function(){return $(this.winner,this.$store)}}},C=q,G=Object(o["a"])(C,j,k,!1,null,null,null),P=G.exports,E=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"game__box",class:{"game__box--x":"X"===e.value,"game__box--o":"O"===e.value,"game__box--over":e.isGameOver,"game__box--winner":e.isWinner},on:{click:e.onClick}},[r("span",[e._v(e._s(e.value))])])},T=[],D={props:{value:String,isGameOver:Boolean,isWinner:Boolean},methods:{onClick:function(){this.$emit("click")}}},W=D,X=Object(o["a"])(W,E,T,!1,null,null,null),M=X.exports,R=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"game__action"},[r("button",{on:{click:e.onClick}},[e._v("Restart game")])])},A=[],B={methods:{onClick:function(){this.$emit("click")}}},J=B,L=Object(o["a"])(J,R,A,!1,null,null,null),V=L.exports,z={components:{Status:P,Square:M,Restart:V},data:function(){return{player:"X",squares:Array(9).fill(null)}},computed:{winner:function(){return N(this.squares)},isDrawGame:function(){return 0===this.squares.filter((function(e){return null===e})).length},isGameOver:function(){return null!==this.winner.player||this.isDrawGame}},methods:{isSquareEmpty:function(e){return null===this.squares[e]},isSquareWinner:function(e){return this.winner.positions.includes(e)},onSquareClick:function(e){this.isSquareEmpty(e)&&!this.winner.player&&(this.$set(this.squares,e,this.player),this.player="X"===this.player?"O":"X")},restartGame:function(){this.player="X",this.squares=Array(9).fill(null),this.$store.commit("clear"),this.$router.push({path:"/"})}}},F=z,H=(r("b2e8"),Object(o["a"])(F,g,w,!1,null,null,null)),I=H.exports;n["a"].use(m["a"]);var K=[{path:"/",component:_},{path:"/game",component:I}],Q=new m["a"]({routes:K});n["a"].config.productionTip=!1,new n["a"]({store:f,router:Q,render:function(e){return e(c)}}).$mount("#app")},"5c0b":function(e,t,r){"use strict";var n=r("9c0c"),a=r.n(n);a.a},"9c0c":function(e,t,r){},b2e8:function(e,t,r){"use strict";var n=r("16c0"),a=r.n(n);a.a}});
//# sourceMappingURL=app.f9e74c81.js.map
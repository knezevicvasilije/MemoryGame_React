(this["webpackJsonpmemory-game"]=this["webpackJsonpmemory-game"]||[]).push([[0],[,,,,,,,,,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a(1),c=a.n(r),s=a(7),i=a.n(s),l=(a(13),a(2)),o=a(3),d=a(5),h=a(4),u=(a(14),a(15),function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={},e.handleChange=function(t){e.setState({player:t.target.value})},e.handleSubmit=function(t){t.preventDefault(),e.props.player(e.state.player,!1)},e}return Object(o.a)(a,[{key:"render",value:function(){return Object(n.jsx)("div",{className:"container",children:Object(n.jsx)("section",{id:"content",children:Object(n.jsxs)("form",{children:[Object(n.jsx)("h1",{children:"Memory Game"}),Object(n.jsx)("div",{children:Object(n.jsx)("input",{type:"text",onChange:this.handleChange,placeholder:"Enter your name",id:"username"})}),Object(n.jsx)("div",{className:"button",children:Object(n.jsx)("input",{type:"submit",onClick:this.handleSubmit,value:"Start"})})]})})})}}]),a}(c.a.Component)),p=a.p+"static/media/card-1.3735c21d.jpeg",b=a.p+"static/media/card-2.706460d9.jpeg",j=a.p+"static/media/card-3.e9d46003.jpeg",m=a.p+"static/media/card-4.c4d6bcd9.jpeg",f=a.p+"static/media/card-5.469f904a.jpeg",g=a.p+"static/media/card-6.f385d025.jpeg",O=[{cardno:"Card1",img:p,flipped:!1},{cardno:"Card2",img:b,flipped:!1},{cardno:"Card3",img:j,flipped:!1},{cardno:"Card4",img:m,flipped:!1},{cardno:"Card5",img:f,flipped:!1},{cardno:"Card6",img:g,flipped:!1},{cardno:"Card1",img:p,flipped:!1},{cardno:"Card2",img:b,flipped:!1},{cardno:"Card3",img:j,flipped:!1},{cardno:"Card4",img:m,flipped:!1},{cardno:"Card5",img:f,flipped:!1},{cardno:"Card6",img:g,flipped:!1}],v=5,y=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).thumbnails=[],e.handleClick=function(t){var a=t.target;if("found"!==a.getAttribute("check")&&(a!==e.thumbnails[0]?(e.switch(a),e.thumbnails.push(a)):(e.switch(a),e.thumbnails=[]),e.thumbnails.length>2&&(e.checkNo(e.thumbnails[0],e.thumbnails[1])?(e.thumbnails.shift(),e.thumbnails.shift()):(e.switch(e.thumbnails[0]),e.switch(e.thumbnails[1]),e.thumbnails.shift(),e.thumbnails.shift())),document.getElementsByClassName("card-blank").length<1)){e.props.restart(!0);for(var n=document.getElementsByClassName("card"),r=0;r<n.length;r++)n[r].classList.add("card-blank"),n[r].setAttribute("check","false"),e.thumbnails=[]}},e.checkNo=function(t,a){return t.getAttribute("cardno")===a.getAttribute("cardno")?(t.setAttribute("check","found"),a.setAttribute("check","found"),e.props.score(),!0):(e.props.tries(),!1)},e.switch=function(t){if("true"===t.getAttribute("check")){if(t.setAttribute("check","false"),t.classList.add("card-blank"),v-=.5,console.log(v),0===v){e.props.restart(!0);for(var a=document.getElementsByClassName("card"),n=0;n<a.length;n++)a[n].classList.add("card-blank"),a[n].setAttribute("check","false"),e.thumbnails=[]}}else t.setAttribute("check","true"),t.classList.remove("card-blank")},e}return Object(o.a)(a,[{key:"render",value:function(){var e=this;return Object(n.jsx)("div",{className:"cards",children:O.sort((function(){return Math.random()})).map((function(t,a){return Object(n.jsx)("div",{className:"card card-blank",cardno:t.cardno,style:{background:"url(".concat(t.img,")")},check:"false",onClick:e.handleClick},a)}))})}}]),a}(c.a.Component),x=(a(16),function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return Object(n.jsx)("div",{className:"playBoard",children:Object(n.jsx)(y,{restart:this.props.restart,score:this.props.score,tries:this.props.tries})})}}]),a}(c.a.Component)),C=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){var e=this.props,t=e.player,a=e.score,r=e.tries;return Object(n.jsx)("div",{className:"gameInfo",children:Object(n.jsxs)("div",{className:"info",children:[Object(n.jsxs)("div",{className:"player",children:[Object(n.jsx)("h1",{children:"Welcome: "})," ",Object(n.jsx)("h2",{children:t})]}),Object(n.jsxs)("div",{className:"player ",children:[Object(n.jsx)("h1",{children:"Score: "})," ",Object(n.jsx)("h2",{children:a})]}),Object(n.jsxs)("div",{className:"player ",children:[Object(n.jsx)("h1",{children:"Tries: "}),Object(n.jsx)("h2",{children:r})]})]})})}}]),a}(c.a.Component),k=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).handleClick=function(){e.props.newGame(!1)},e}return Object(o.a)(a,[{key:"render",value:function(){return Object(n.jsx)("div",{className:"gameOver",children:Object(n.jsxs)("div",{className:"message",children:[Object(n.jsx)("h2",{children:this.props.message}),Object(n.jsx)("button",{className:"ui inverted violet basic button",onClick:this.handleClick,children:"Start!"})]})})}}]),a}(c.a.Component),w=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={showLogin:!0,showRestart:!1,player:"",score:0,tries:5,message:"Wanna try again?"},e.handleLogin=function(t,a){e.setState({player:t,showLogin:a})},e.handleRestart=function(t){t?e.setState({showRestart:t,score:0,tries:5}):e.setState({showRestart:t})},e.scoreUp=function(){e.setState({score:e.state.score+1})},e.triesDown=function(){e.setState({tries:e.state.tries-1})},e}return Object(o.a)(a,[{key:"render",value:function(){var e=this.state,t=e.showLogin,a=e.player,r=e.score,c=e.showRestart,s=e.tries,i=e.message;return Object(n.jsxs)("div",{className:"App",children:[t?Object(n.jsx)(u,{player:this.handleLogin}):null,c?Object(n.jsx)(k,{newGame:this.handleRestart,score:r,tries:s,message:i}):null,Object(n.jsx)(C,{player:a,score:r,tries:s}),Object(n.jsx)(x,{restart:this.handleRestart,score:this.scoreUp,tries:this.triesDown})]})}}]),a}(c.a.Component),N=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,18)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,c=t.getLCP,s=t.getTTFB;a(e),n(e),r(e),c(e),s(e)}))};i.a.render(Object(n.jsx)(c.a.StrictMode,{children:Object(n.jsx)(w,{})}),document.getElementById("root")),N()}],[[17,1,2]]]);
//# sourceMappingURL=main.957f3e25.chunk.js.map
(this.webpackJsonpreactadvice=this.webpackJsonpreactadvice||[]).push([[0],{17:function(e,t,a){e.exports=a(40)},39:function(e,t,a){},40:function(e,t,a){"use strict";a.r(t);var c=a(1),n=a.n(c),o=a(11),i=a.n(o),r=a(12),s=a(13),l=a(16),u=a(15),d=a(14),p=a.n(d),v=(a(39),function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(r.a)(this,a);for(var c=arguments.length,n=new Array(c),o=0;o<c;o++)n[o]=arguments[o];return(e=t.call.apply(t,[this].concat(n))).state={advice:" "},e.fetchQuote=function(){var t=Math.floor(101*Math.random());console.log("https://api.adviceslip.com/advice/".concat(t)),p.a.get("https://api.adviceslip.com/advice/".concat(t)).then((function(t){var a=JSON.parse(t.data+"}").slip;e.setState({advice:a}),console.log(a)})).catch((function(e){console.log(e)}))},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){this.fetchQuote()}},{key:"render",value:function(){return n.a.createElement("div",{className:"app"},n.a.createElement("div",{className:"card"},n.a.createElement("h1",{className:"heading"},this.state.advice.advice),n.a.createElement("button",{className:"button",onClick:this.fetchQuote},n.a.createElement("span",null," New Advice Please !!"))))}}]),a}(n.a.Component));i.a.render(n.a.createElement(v,null),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.795e462e.chunk.js.map
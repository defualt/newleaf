(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{338:function(e,t,r){"use strict";r.r(t);r(178),r(179),r(180),r(25);var n=r(0),o=r.n(n),i=(r(130),r(347),r(41),r(26)),a=r(333),c=r(6),u=r(376),l=r(377);function s(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}var p={container:{display:"flex",flexDirection:"column",alignItems:"center",margin:"0 20px"},homepageLink:{"&:any-link":{color:"red"},fontFamily:c.a,marginBottom:40},h2:{fontFamily:c.b},headerLogoWrap:{margin:"80px 80px 20px 80px",alignSelf:"stretch"},donateButton:{display:"block",backgroundColor:"#50c878",color:"white",border:"none",fontFamily:c.a,margin:"7px 15px",padding:"7px 0",width:90,cursor:"pointer"},columns:{display:"flex",flexDirection:"row",justifyContent:"center",margin:"0 20px 30px","@media (max-width: 475px)":{flexDirection:"column"}},column:{},body:{maxWidth:800,margin:"0 30px"},checkboxSection:{display:"flex",flexDirection:"column",alignItems:"center",backgroundColor:"#ccc",padding:20},checkboxArea:{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center",backgroundColor:"#aaa",padding:20},purchaseButton:{display:"block",backgroundColor:"#009933",color:"white",border:"none",fontFamily:c.a,margin:"7px 15px",padding:"7px 20px",cursor:"pointer"}};p.purchaseButtonInactive=Object.assign({},p.purchaseButton,{backgroundColor:"#999"});var f=function(e){function t(){for(var t,r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(t=e.call.apply(e,[this].concat(n))||this).state={},t.handleInputChange=function(e){var r=e.target,n="checkbox"===r.type?r.checked:r.value;t.setState({checked:n})},t}return s(t,e),t.prototype.render=function(){var e,t=this.props.classes,r=window.location.search.includes("env=dev")?"dev":"prod",n=(u.a[r].purchase[0],[(e=u.a[r].donate).filter((function(e){return e[0]<100})),e.filter((function(e){var t=e[0];return t>99&&t<1e3})),e.filter((function(e){return e[0]>999}))]);return o.a.createElement(a.a,null,o.a.createElement("div",{className:t.container},o.a.createElement("h2",{className:t.h2},"Donate to New Leaf Restoration"),o.a.createElement("div",{className:t.columns},n.map((function(e,r){return o.a.createElement("div",{className:t.column,key:r},e.map((function(e){var t=e[0],r=e[1];return o.a.createElement(l.a,{key:r,amount:t,stripeId:r})})))}))),o.a.createElement("p",null,"If you have any problems, email info@newleaf-restoration.org"),o.a.createElement("a",{href:"/",className:t.homepageLink},"Go back to the homepage")))},t}(n.Component),y=Object(i.default)(p)(f),h=function(e){function t(){for(var t,r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(t=e.call.apply(e,[this].concat(n))||this).state={},t}s(t,e);var r=t.prototype;return r.componentDidMount=function(){this.setState({ready:!0})},r.render=function(){return this.state.ready?o.a.createElement(y,null):null},t}(n.Component);t.default=h},345:function(e,t,r){r(10),r(8),r(14),r(18),r(58),r(2),r(98),r(28),r(33),r(47),r(34),r(24);var n=function(e){"use strict";var t,r=Object.prototype,n=r.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(e,t,r,n){var o=t&&t.prototype instanceof d?t:d,i=Object.create(o.prototype),a=new _(n||[]);return i._invoke=function(e,t,r){var n=s;return function(o,i){if(n===f)throw new Error("Generator is already running");if(n===y){if("throw"===o)throw i;return P()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var c=I(a,r);if(c){if(c===h)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===s)throw n=y,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=f;var u=l(e,t,r);if("normal"===u.type){if(n=r.done?y:p,u.arg===h)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n=y,r.method="throw",r.arg=u.arg)}}}(e,r,a),i}function l(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(n){return{type:"throw",arg:n}}}e.wrap=u;var s="suspendedStart",p="suspendedYield",f="executing",y="completed",h={};function d(){}function w(){}function F(){}var m={};m[i]=function(){return this};var v=Object.getPrototypeOf,g=v&&v(v(G([])));g&&g!==r&&n.call(g,i)&&(m=g);var b=F.prototype=d.prototype=Object.create(m);function A(e){["next","throw","return"].forEach((function(t){e[t]=function(e){return this._invoke(t,e)}}))}function x(e){var t;this._invoke=function(r,o){function i(){return new Promise((function(t,i){!function t(r,o,i,a){var c=l(e[r],e,o);if("throw"!==c.type){var u=c.arg,s=u.value;return s&&"object"==typeof s&&n.call(s,"__await")?Promise.resolve(s.__await).then((function(e){t("next",e,i,a)}),(function(e){t("throw",e,i,a)})):Promise.resolve(s).then((function(e){u.value=e,i(u)}),(function(e){return t("throw",e,i,a)}))}a(c.arg)}(r,o,t,i)}))}return t=t?t.then(i,i):i()}}function I(e,r){var n=e.iterator[r.method];if(n===t){if(r.delegate=null,"throw"===r.method){if(e.iterator.return&&(r.method="return",r.arg=t,I(e,r),"throw"===r.method))return h;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return h}var o=l(n,e.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,h;var i=o.arg;return i?i.done?(r[e.resultName]=i.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,h):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,h)}function N(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function C(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function _(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(N,this),this.reset(!0)}function G(e){if(e){var r=e[i];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,a=function r(){for(;++o<e.length;)if(n.call(e,o))return r.value=e[o],r.done=!1,r;return r.value=t,r.done=!0,r};return a.next=a}}return{next:P}}function P(){return{value:t,done:!0}}return w.prototype=b.constructor=F,F.constructor=w,F[c]=w.displayName="GeneratorFunction",e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===w||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,F):(e.__proto__=F,c in e||(e[c]="GeneratorFunction")),e.prototype=Object.create(b),e},e.awrap=function(e){return{__await:e}},A(x.prototype),x.prototype[a]=function(){return this},e.AsyncIterator=x,e.async=function(t,r,n,o){var i=new x(u(t,r,n,o));return e.isGeneratorFunction(r)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},A(b),b[c]="Generator",b[i]=function(){return this},b.toString=function(){return"[object Generator]"},e.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){for(;t.length;){var n=t.pop();if(n in e)return r.value=n,r.done=!1,r}return r.done=!0,r}},e.values=G,_.prototype={constructor:_,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(C),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function o(n,o){return c.type="throw",c.arg=e,r.next=n,o&&(r.method="next",r.arg=t),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=n.call(a,"catchLoc"),l=n.call(a,"finallyLoc");if(u&&l){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===e||"continue"===e)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=e,a.arg=t,i?(this.method="next",this.next=i.finallyLoc,h):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),h},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),C(r),h}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var o=n.arg;C(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:G(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),h}},e}(e.exports);try{regeneratorRuntime=n}catch(o){Function("r","regeneratorRuntime = r")(n)}},347:function(e,t,r){"use strict";r.d(t,"a",(function(){return p}));r(45),r(58),r(2);var n="https://js.stripe.com/v3",o=/^https:\/\/js\.stripe\.com\/v3\/?(\?.*)?$/,i="loadStripe.setLoadParameters was called but an existing Stripe.js script already exists in the document; existing script parameters will be used",a=null,c=function(e){return null!==a?a:a=new Promise((function(t,r){if("undefined"!=typeof window)if(window.Stripe&&e&&console.warn(i),window.Stripe)t(window.Stripe);else try{var a=function(){for(var e=document.querySelectorAll('script[src^="'.concat(n,'"]')),t=0;t<e.length;t++){var r=e[t];if(o.test(r.src))return r}return null}();a&&e?console.warn(i):a||(a=function(e){var t=e&&!e.advancedFraudSignals?"?advancedFraudSignals=false":"",r=document.createElement("script");r.src="".concat(n).concat(t);var o=document.head||document.body;if(!o)throw new Error("Expected document.body not to be null. Stripe.js requires a <body> element.");return o.appendChild(r),r}(e)),a.addEventListener("load",(function(){window.Stripe?t(window.Stripe):r(new Error("Stripe.js not available"))})),a.addEventListener("error",(function(){r(new Error("Failed to load Stripe.js"))}))}catch(c){return void r(c)}else t(null)}))},u=function(e,t,r){if(null===e)return null;var n=e.apply(void 0,t);return function(e,t){e&&e._registerWrapper&&e._registerWrapper({name:"stripe-js",version:"1.11.0",startTime:t})}(n,r),n},l=Promise.resolve().then((function(){return c(null)})),s=!1;l.catch((function(e){s||console.warn(e)}));var p=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];s=!0;var n=Date.now();return l.then((function(e){return u(e,t,n)}))}},348:function(e,t,r){e.exports=r(345)},376:function(e,t,r){"use strict";t.a={dev:{donate:[[10,"price_1IPUAqFFFbyANGwC4ObtfIAg"],[20,"price_1IPUArFFFbyANGwC4Ko7SZnG"],[30,"price_1IPUArFFFbyANGwC0Vy4Q8KK"],[40,"price_1IPUArFFFbyANGwCWt1K7nwE"],[50,"price_1IPUArFFFbyANGwCXtCRq8Xy"],[60,"price_1IPUArFFFbyANGwCQgRJSWM4"],[70,"price_1IPUAsFFFbyANGwCsbotvZbo"],[80,"price_1IPUAsFFFbyANGwCvVDQjqTb"],[90,"price_1IPUAsFFFbyANGwCQgjLv4LG"],[100,"price_1IPUAtFFFbyANGwCwpL1VzxS"],[200,"price_1IPUAtFFFbyANGwCXVYLZ1ST"],[300,"price_1IPUAtFFFbyANGwCacB6xIJH"],[400,"price_1IPUAtFFFbyANGwCyaBcZXEO"],[500,"price_1IPUAuFFFbyANGwCnKkl0Okp"],[600,"price_1IPUAuFFFbyANGwCtOHqhEwo"],[700,"price_1IPUAuFFFbyANGwCQTzLdcyd"],[800,"price_1IPUAuFFFbyANGwCm9Ycdt9S"],[900,"price_1IPUAvFFFbyANGwCkMqDMnDh"],[1e3,"price_1IPUAvFFFbyANGwC7qTDRWxY"],[2e3,"price_1IPUAvFFFbyANGwCuxkYN0GU"],[3e3,"price_1IPUAvFFFbyANGwCYnSzDfTl"],[4e3,"price_1IPUAvFFFbyANGwCACCdPjiI"],[5e3,"price_1IPUAwFFFbyANGwC0w82eDee"],[6e3,"price_1IPUAwFFFbyANGwC93lYvJcE"],[7e3,"price_1IPUAwFFFbyANGwCG1GP9XdX"],[8e3,"price_1IPUAwFFFbyANGwCLNAmkyAT"],[9e3,"price_1IPUAwFFFbyANGwCtcHnqKq0"]],purchase:[[1,"price_1IWneUFFFbyANGwC90mWBRcm"]]},prod:{donate:[[10,"price_1IPwSyFFFbyANGwC11jkkKes"],[20,"price_1IPwSyFFFbyANGwCT2dmOjYC"],[30,"price_1IPwSyFFFbyANGwC6snVZJjW"],[40,"price_1IPwSyFFFbyANGwCR6DXUNus"],[50,"price_1IPwSyFFFbyANGwCiZMsY6pE"],[60,"price_1IPwSyFFFbyANGwC5GV5u749"],[70,"price_1IPwSyFFFbyANGwCxLgu8G97"],[80,"price_1IPwSyFFFbyANGwCuyYbLKPJ"],[90,"price_1IPwSyFFFbyANGwC4hiafLyV"],[100,"price_1IPwSyFFFbyANGwCSzqVlDGC"],[200,"price_1IPwSyFFFbyANGwCxgAD2m64"],[300,"price_1IPwSyFFFbyANGwC2DvSneBz"],[400,"price_1IPwSyFFFbyANGwCYcPTj2TL"],[500,"price_1IPwSyFFFbyANGwCldHaW25g"],[600,"price_1IPwSyFFFbyANGwC2Y32aaXf"],[700,"price_1IPwSyFFFbyANGwC2qZy4Hdo"],[800,"price_1IPwSyFFFbyANGwC1rzINlf4"],[900,"price_1IPwSyFFFbyANGwC8iPI677L"],[1e3,"price_1IPwSyFFFbyANGwCAYFXQlWq"],[2e3,"price_1IPwSyFFFbyANGwCMORD2Wd5"],[3e3,"price_1IPwSyFFFbyANGwCEwNQZfWJ"],[4e3,"price_1IPwSyFFFbyANGwCIJeQgLDa"],[5e3,"price_1IPwSyFFFbyANGwC2ZZgTYAr"]],purchase:[[1,"price_1IWnbFFFFbyANGwCtkyAIRgd"]]}}},377:function(e,t,r){"use strict";r(58),r(2);var n=r(348),o=r.n(n),i=(r(345),r(178),r(179),r(180),r(0)),a=r.n(i),c=r(347),u=r(26),l=(r(333),r(6));function s(e,t,r,n,o,i,a){try{var c=e[i](a),u=c.value}catch(l){return void r(l)}c.done?t(u):Promise.resolve(u).then(n,o)}var p={container:{display:"flex",flexDirection:"column",alignItems:"center",margin:"0 20px"},homepageLink:{"&:any-link":{color:"red"},fontFamily:l.a,marginBottom:40},h2:{fontFamily:l.b},headerLogoWrap:{margin:"80px 80px 20px 80px",alignSelf:"stretch"},donateButton:{display:"block",backgroundColor:"#50c878",color:"white",border:"none",fontFamily:l.a,margin:"7px 15px",padding:"7px 0",width:90,cursor:"pointer"},columns:{display:"flex",flexDirection:"row",justifyContent:"center",margin:"0 20px 30px","@media (max-width: 475px)":{flexDirection:"column"}},column:{}},f={dev:"pk_test_51IGFQBFFFbyANGwCBN7PvHYLtDINa9dOxICsrJEVMY76kH554JGZDl24e71SLnIpFNunN1VoEqcoIL4OikkqZohC009BnBgaC0",prod:"pk_live_51IGFQBFFFbyANGwCyG68aioVrzep11aBd3D0losTox674UAdp1yTgxnVUUCLNjeSmPyD78HspQiejaa9qZWvUsID00ZIFmxQPe"},y={};function h(e){var t=y[e]||Object(c.a)(f[e]);return y[e]=t,t}var d=Object(u.default)(p)((function(e){var t=e.classes,r=e.amount,n=e.stripeId,i=e.active,c=void 0===i||i,u=e.inactiveMessage,l=e.className,p=e.classNameInactive,f=e.prefix,y=void 0===f?"$":f,d=window.location.search.includes("env=dev")?"dev":"prod";h(d);var w=function(){var e,t=(e=o.a.mark((function e(t){var r,i,a,l;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(c){e.next=4;break}if(u){e.next=3;break}return e.abrupt("return",null);case 3:return e.abrupt("return",alert(u));case 4:return e.prev=4,e.next=7,h(d);case 7:return r=e.sent,i=window.location.protocol+"//"+window.location.host,e.next=11,r.redirectToCheckout({lineItems:[{price:n,quantity:1}],mode:"payment",successUrl:i+"/success",cancelUrl:i+"/cancel"});case 11:a=e.sent,l=a.error,console.log("error",l),e.next=20;break;case 16:e.prev=16,e.t0=e.catch(4),console.log(e.t0.message),e.t0.message.includes("not available")?alert("Looks like plots are sold out for now.  Try again later or contact us at info@newleaf-restoration.org"):alert("There was a problem: "+e.t0.message);case 20:case"end":return e.stop()}}),e,null,[[4,16]])})),function(){var t=this,r=arguments;return new Promise((function(n,o){var i=e.apply(t,r);function a(e){s(i,n,o,a,c,"next",e)}function c(e){s(i,n,o,a,c,"throw",e)}a(void 0)}))});return function(e){return t.apply(this,arguments)}}(),F=t.donateButton;return l&&(F=l,c||(F=p||F)),a.a.createElement("button",{role:"link",className:F,onClick:w},""+y+r.toLocaleString())}));t.a=d}}]);
//# sourceMappingURL=component---src-pages-donate-js-dc6b056cb9e2a7b32b2f.js.map
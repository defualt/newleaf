(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{341:function(e,t,r){"use strict";r.r(t);r(58),r(2);var n=r(348),o=r.n(n),a=(r(178),r(179),r(180),r(345),r(25),r(0)),i=r.n(a),c=(r(130),r(347),r(41)),s=r.n(c),l=r(26),u=r(333),p=r(6),h=r(376),d=r(377);function f(e,t,r,n,o,a,i){try{var c=e[a](i),s=c.value}catch(l){return void r(l)}c.done?t(s):Promise.resolve(s).then(n,o)}function y(e){return function(){var t=this,r=arguments;return new Promise((function(n,o){var a=e.apply(t,r);function i(e){f(a,n,o,i,c,"next",e)}function c(e){f(a,n,o,i,c,"throw",e)}i(void 0)}))}}function m(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}var w={container:{display:"flex",flexDirection:"column",alignItems:"center",margin:"0 20px"},homepageLink:{"&:any-link":{color:"red"},fontFamily:p.a,marginBottom:40},h2:{fontFamily:p.b},headerLogoWrap:{margin:"80px 80px 20px 80px",alignSelf:"stretch"},donateButton:{display:"block",backgroundColor:"#50c878",color:"white",border:"none",fontFamily:p.a,margin:"7px 15px",padding:"7px 0",width:90,cursor:"pointer"},columns:{display:"flex",flexDirection:"row",justifyContent:"center",margin:"0 20px 30px","@media (max-width: 475px)":{flexDirection:"column"}},column:{},body:{maxWidth:800,margin:"0 30px"},checkboxSection:{display:"flex",flexDirection:"column",alignItems:"center",backgroundColor:"#ccc",padding:20},checkboxArea:{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center",backgroundColor:"#eee",padding:20},purchaseButton:{display:"block",backgroundColor:"#009933",color:"white",border:"none",fontFamily:p.a,margin:"7px 15px",padding:"7px 20px",cursor:"pointer"},checkboxWrap:{},checkboxLabel:{marginRight:10}};w.purchaseButtonInactive=Object.assign({},w.purchaseButton,{backgroundColor:"#999"});var b=function(e){function t(){for(var t,r=arguments.length,n=new Array(r),a=0;a<r;a++)n[a]=arguments[a];return(t=e.call.apply(e,[this].concat(n))||this).state={},t.handleInputChange=function(e){var r=e.target,n="checkbox"===r.type?r.checked:r.value;t.setState({checked:n})},t.checkAvailable=y(o.a.mark((function e(){var r,n,a,i,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=window.location.search.includes("env=dev"),n="https://us-central1-newleaf-306116.cloudfunctions.net/stripe-inventory-26?purpose=status&env="+(r?"dev":"prod"),e.prev=3,e.next=6,fetch(n,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({zxcv:1234})}).then((function(e){return e.json()}));case 6:a=e.sent,i=a.current,c=a.max,i>=c?t.setState({checkAvailableError:"Sorry, there are not more plots available at this time.  Please, try again later. Email us at info@newleaf-restoration.org is you have any questions."}):t.setState({showPage:!0}),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(3),t.setState({checkAvailableError:[e.t0.message||"Something went wrong.","Email us at info@newleaf-restoration.org is this problem persists."].join(" ")});case 14:case"end":return e.stop()}}),e,null,[[3,11]])}))),t}m(t,e);var r=t.prototype;return r.componentDidMount=function(){this.checkAvailable()},r.render=function(){var e=this.props.classes,t=window.location.search.includes("env=dev")?"dev":"prod",r=h.a[t].purchase[0];return i.a.createElement(u.a,null,i.a.createElement("div",{className:e.container},i.a.createElement("a",{href:"/",className:e.homepageLink},"Go back to the homepage"),i.a.createElement("h2",{className:e.h2},"Reserve a plot at New Leaf Restoration"),!this.state.showPage&&!this.state.checkAvailableError&&i.a.createElement("p",null," loading..."),!!this.state.checkAvailableError&&i.a.createElement("p",null,this.state.checkAvailableError),!!this.state.showPage&&i.a.createElement("div",{className:e.body},i.a.createElement(s.a,{showAll:!0},"\n## NEW LEAF RESTORATION GARDEN RULES\n\nWelcome to the New Leaf Restoration Garden. The following rules are in place so the garden can provide a healthy community atmosphere and function as a pleasant place to garden, enjoy nature, and share knowledge. Your adherence to these rules will help everyone have an enjoyable and productive garden season. All members are required to sign an agreement of rules as well as a liability release waiver and will receive a copy of same.\n\n1. The garden is open dawn to dusk to members only, 7 days a week from the opening date.  Friends and family may enter only when accompanied by a garden member.\n1. Members will be issued a combination for the lock on the gate.  Do not share that combination with anyone.  New combinations will be issued in subsequent years. Keep the gate shut when entering and locked when leaving. (WE NEED TO ADDRESS THIS TOPIC (POSSIBLY NOT IN THIS ITERATION OF THE RULES)\n1. No smoking.\n1. No alcohol or illegal substances.\n1. The application of herbicides is prohibited.\n1. The use of pesticides will be limited to supplied organic products only.\n1. Be respectful of other members’ plots. Always use pathways. Do not step into members’ plots as a shortcut to your own.\n1. Do not harvest other gardeners’ fruits or vegetables without their permission.\n1. Children must be supervised at all times.  Please refrain from allowing children to run through the garden or damage other members’ plants.\n1. Permanent structures are not permitted in plots.\n1. Members should be mindful to not shade another’s plot with tall or staked plants such as sunflowers, pole beans, etc.\n1. Weedy crops such as fennel, mints, etc., should not be planted.\n1. Water and soaker hoses will be set up for each plot will be provided, with timers. Watering cans for watering in seeds and plants at the time of planting will be provided at the communal spigot. No hoses will be allowed.\n1. Only composted manure is permitted.\n1. Garden plots should be maintained throughout the season. If you are unable to care for your plot, please send a notification to our website so that your plot can be reassigned.\n1. Keep your plot weeded.\n1. Send a notification to the website if you will be absent for an extended period of time (3 weeks or more). You may arrange with another member to care for your plot while you’re gone.\n1. Tools will not be provided. Gardeners are responsible for supplying their own tools.\n1. Please do not leave tools, bags, garbage, etc., in or around your plot after you leave. Take all items back home with you at the end of the day.\n1. By Thanksgiving, gardeners are responsible for cleaning all plant material from their plots and disposing of this material in the compost pile. The exception to this rule is for members who are planting winter crops.\n1. Any theft, vandalism or maintenance problems should be reported immediately to XXXXX.\n1. Any gardener failing to abide by these rules will be sent up to of two notices outlining the details of the problem along with a deadline for fixing the problem. If the member does not correct the issue, they risk forfeiture of their plot(s), the loss of future gardening privileges at the community garden as well as forfeiture of any fees paid.\n"),i.a.createElement("div",{className:e.checkboxSection},i.a.createElement("p",null,"By checking the box below, you agree to the above rules and regulations and understand that New Leaf Restoration is not responsible for your actions.  You relinquish New Leaf Restoration from any liability, damage, loss or claim that occurs in connection with the use of the garden by you or any of your guests as you are the sole person responsible for your plot."),i.a.createElement("div",{className:e.checkboxArea},i.a.createElement("div",{className:e.checkboxWrap},i.a.createElement("label",{className:e.checkboxLabel,htmlFor:"confirmCheckbox"},"Click this checkbox to confirm"),i.a.createElement("input",{type:"checkbox",id:"confirmCheckbox",onChange:this.handleInputChange})),i.a.createElement(d.a,{prefix:"",amount:"Pay to reserve your plot",stripeId:r[1],active:!!this.state.checked,inactiveMessage:"Click the checkbox to agree to the rules.",className:e.purchaseButton,classNameInactive:e.purchaseButtonInactive})))),i.a.createElement("a",{href:"/",className:e.homepageLink},"Go back to the homepage")))},t}(a.Component),v=Object(l.default)(w)(b),g=function(e){function t(){for(var t,r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(t=e.call.apply(e,[this].concat(n))||this).state={},t}m(t,e);var r=t.prototype;return r.componentDidMount=function(){this.setState({ready:!0})},r.render=function(){return this.state.ready?i.a.createElement(v,null):null},t}(a.Component);t.default=g},345:function(e,t,r){r(10),r(8),r(14),r(18),r(58),r(2),r(98),r(28),r(33),r(47),r(34),r(24);var n=function(e){"use strict";var t,r=Object.prototype,n=r.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function s(e,t,r,n){var o=t&&t.prototype instanceof y?t:y,a=Object.create(o.prototype),i=new C(n||[]);return a._invoke=function(e,t,r){var n=u;return function(o,a){if(n===h)throw new Error("Generator is already running");if(n===d){if("throw"===o)throw a;return G()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var c=N(i,r);if(c){if(c===f)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===u)throw n=d,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=h;var s=l(e,t,r);if("normal"===s.type){if(n=r.done?d:p,s.arg===f)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(n=d,r.method="throw",r.arg=s.arg)}}}(e,r,i),a}function l(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(n){return{type:"throw",arg:n}}}e.wrap=s;var u="suspendedStart",p="suspendedYield",h="executing",d="completed",f={};function y(){}function m(){}function w(){}var b={};b[a]=function(){return this};var v=Object.getPrototypeOf,g=v&&v(v(P([])));g&&g!==r&&n.call(g,a)&&(b=g);var F=w.prototype=y.prototype=Object.create(b);function x(e){["next","throw","return"].forEach((function(t){e[t]=function(e){return this._invoke(t,e)}}))}function A(e){var t;this._invoke=function(r,o){function a(){return new Promise((function(t,a){!function t(r,o,a,i){var c=l(e[r],e,o);if("throw"!==c.type){var s=c.arg,u=s.value;return u&&"object"==typeof u&&n.call(u,"__await")?Promise.resolve(u.__await).then((function(e){t("next",e,a,i)}),(function(e){t("throw",e,a,i)})):Promise.resolve(u).then((function(e){s.value=e,a(s)}),(function(e){return t("throw",e,a,i)}))}i(c.arg)}(r,o,t,a)}))}return t=t?t.then(a,a):a()}}function N(e,r){var n=e.iterator[r.method];if(n===t){if(r.delegate=null,"throw"===r.method){if(e.iterator.return&&(r.method="return",r.arg=t,N(e,r),"throw"===r.method))return f;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return f}var o=l(n,e.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,f;var a=o.arg;return a?a.done?(r[e.resultName]=a.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,f):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,f)}function I(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function k(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function C(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(I,this),this.reset(!0)}function P(e){if(e){var r=e[a];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,i=function r(){for(;++o<e.length;)if(n.call(e,o))return r.value=e[o],r.done=!1,r;return r.value=t,r.done=!0,r};return i.next=i}}return{next:G}}function G(){return{value:t,done:!0}}return m.prototype=F.constructor=w,w.constructor=m,w[c]=m.displayName="GeneratorFunction",e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===m||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,w):(e.__proto__=w,c in e||(e[c]="GeneratorFunction")),e.prototype=Object.create(F),e},e.awrap=function(e){return{__await:e}},x(A.prototype),A.prototype[i]=function(){return this},e.AsyncIterator=A,e.async=function(t,r,n,o){var a=new A(s(t,r,n,o));return e.isGeneratorFunction(r)?a:a.next().then((function(e){return e.done?e.value:a.next()}))},x(F),F[c]="Generator",F[a]=function(){return this},F.toString=function(){return"[object Generator]"},e.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){for(;t.length;){var n=t.pop();if(n in e)return r.value=n,r.done=!1,r}return r.done=!0,r}},e.values=P,C.prototype={constructor:C,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(k),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function o(n,o){return c.type="throw",c.arg=e,r.next=n,o&&(r.method="next",r.arg=t),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],c=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var s=n.call(i,"catchLoc"),l=n.call(i,"finallyLoc");if(s&&l){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(s){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=e,i.arg=t,a?(this.method="next",this.next=a.finallyLoc,f):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),f},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),k(r),f}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var o=n.arg;k(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:P(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),f}},e}(e.exports);try{regeneratorRuntime=n}catch(o){Function("r","regeneratorRuntime = r")(n)}},347:function(e,t,r){"use strict";r.d(t,"a",(function(){return p}));r(45),r(58),r(2);var n="https://js.stripe.com/v3",o=/^https:\/\/js\.stripe\.com\/v3\/?(\?.*)?$/,a="loadStripe.setLoadParameters was called but an existing Stripe.js script already exists in the document; existing script parameters will be used",i=null,c=function(e){return null!==i?i:i=new Promise((function(t,r){if("undefined"!=typeof window)if(window.Stripe&&e&&console.warn(a),window.Stripe)t(window.Stripe);else try{var i=function(){for(var e=document.querySelectorAll('script[src^="'.concat(n,'"]')),t=0;t<e.length;t++){var r=e[t];if(o.test(r.src))return r}return null}();i&&e?console.warn(a):i||(i=function(e){var t=e&&!e.advancedFraudSignals?"?advancedFraudSignals=false":"",r=document.createElement("script");r.src="".concat(n).concat(t);var o=document.head||document.body;if(!o)throw new Error("Expected document.body not to be null. Stripe.js requires a <body> element.");return o.appendChild(r),r}(e)),i.addEventListener("load",(function(){window.Stripe?t(window.Stripe):r(new Error("Stripe.js not available"))})),i.addEventListener("error",(function(){r(new Error("Failed to load Stripe.js"))}))}catch(c){return void r(c)}else t(null)}))},s=function(e,t,r){if(null===e)return null;var n=e.apply(void 0,t);return function(e,t){e&&e._registerWrapper&&e._registerWrapper({name:"stripe-js",version:"1.11.0",startTime:t})}(n,r),n},l=Promise.resolve().then((function(){return c(null)})),u=!1;l.catch((function(e){u||console.warn(e)}));var p=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];u=!0;var n=Date.now();return l.then((function(e){return s(e,t,n)}))}},348:function(e,t,r){e.exports=r(345)},376:function(e,t,r){"use strict";t.a={dev:{donate:[[10,"price_1IPUAqFFFbyANGwC4ObtfIAg"],[20,"price_1IPUArFFFbyANGwC4Ko7SZnG"],[30,"price_1IPUArFFFbyANGwC0Vy4Q8KK"],[40,"price_1IPUArFFFbyANGwCWt1K7nwE"],[50,"price_1IPUArFFFbyANGwCXtCRq8Xy"],[60,"price_1IPUArFFFbyANGwCQgRJSWM4"],[70,"price_1IPUAsFFFbyANGwCsbotvZbo"],[80,"price_1IPUAsFFFbyANGwCvVDQjqTb"],[90,"price_1IPUAsFFFbyANGwCQgjLv4LG"],[100,"price_1IPUAtFFFbyANGwCwpL1VzxS"],[200,"price_1IPUAtFFFbyANGwCXVYLZ1ST"],[300,"price_1IPUAtFFFbyANGwCacB6xIJH"],[400,"price_1IPUAtFFFbyANGwCyaBcZXEO"],[500,"price_1IPUAuFFFbyANGwCnKkl0Okp"],[600,"price_1IPUAuFFFbyANGwCtOHqhEwo"],[700,"price_1IPUAuFFFbyANGwCQTzLdcyd"],[800,"price_1IPUAuFFFbyANGwCm9Ycdt9S"],[900,"price_1IPUAvFFFbyANGwCkMqDMnDh"],[1e3,"price_1IPUAvFFFbyANGwC7qTDRWxY"],[2e3,"price_1IPUAvFFFbyANGwCuxkYN0GU"],[3e3,"price_1IPUAvFFFbyANGwCYnSzDfTl"],[4e3,"price_1IPUAvFFFbyANGwCACCdPjiI"],[5e3,"price_1IPUAwFFFbyANGwC0w82eDee"],[6e3,"price_1IPUAwFFFbyANGwC93lYvJcE"],[7e3,"price_1IPUAwFFFbyANGwCG1GP9XdX"],[8e3,"price_1IPUAwFFFbyANGwCLNAmkyAT"],[9e3,"price_1IPUAwFFFbyANGwCtcHnqKq0"]],purchase:[[1,"price_1IPUbQFFFbyANGwCybdmtP95"]]},prod:{donate:[[10,"price_1IPwSyFFFbyANGwC11jkkKes"],[20,"price_1IPwSyFFFbyANGwCT2dmOjYC"],[30,"price_1IPwSyFFFbyANGwC6snVZJjW"],[40,"price_1IPwSyFFFbyANGwCR6DXUNus"],[50,"price_1IPwSyFFFbyANGwCiZMsY6pE"],[60,"price_1IPwSyFFFbyANGwC5GV5u749"],[70,"price_1IPwSyFFFbyANGwCxLgu8G97"],[80,"price_1IPwSyFFFbyANGwCuyYbLKPJ"],[90,"price_1IPwSyFFFbyANGwC4hiafLyV"],[100,"price_1IPwSyFFFbyANGwCSzqVlDGC"],[200,"price_1IPwSyFFFbyANGwCxgAD2m64"],[300,"price_1IPwSyFFFbyANGwC2DvSneBz"],[400,"price_1IPwSyFFFbyANGwCYcPTj2TL"],[500,"price_1IPwSyFFFbyANGwCldHaW25g"],[600,"price_1IPwSyFFFbyANGwC2Y32aaXf"],[700,"price_1IPwSyFFFbyANGwC2qZy4Hdo"],[800,"price_1IPwSyFFFbyANGwC1rzINlf4"],[900,"price_1IPwSyFFFbyANGwC8iPI677L"],[1e3,"price_1IPwSyFFFbyANGwCAYFXQlWq"],[2e3,"price_1IPwSyFFFbyANGwCMORD2Wd5"],[3e3,"price_1IPwSyFFFbyANGwCEwNQZfWJ"],[4e3,"price_1IPwSyFFFbyANGwCIJeQgLDa"],[5e3,"price_1IPwSyFFFbyANGwC2ZZgTYAr"]],purchase:[[1,"price_1IPwXKFFFbyANGwCsIEf0HoH"]]}}},377:function(e,t,r){"use strict";r(58),r(2);var n=r(348),o=r.n(n),a=(r(345),r(178),r(179),r(180),r(0)),i=r.n(a),c=r(347),s=r(26),l=(r(333),r(6));function u(e,t,r,n,o,a,i){try{var c=e[a](i),s=c.value}catch(l){return void r(l)}c.done?t(s):Promise.resolve(s).then(n,o)}var p={container:{display:"flex",flexDirection:"column",alignItems:"center",margin:"0 20px"},homepageLink:{"&:any-link":{color:"red"},fontFamily:l.a,marginBottom:40},h2:{fontFamily:l.b},headerLogoWrap:{margin:"80px 80px 20px 80px",alignSelf:"stretch"},donateButton:{display:"block",backgroundColor:"#50c878",color:"white",border:"none",fontFamily:l.a,margin:"7px 15px",padding:"7px 0",width:90,cursor:"pointer"},columns:{display:"flex",flexDirection:"row",justifyContent:"center",margin:"0 20px 30px","@media (max-width: 475px)":{flexDirection:"column"}},column:{}},h={dev:"pk_test_51IGFQBFFFbyANGwCBN7PvHYLtDINa9dOxICsrJEVMY76kH554JGZDl24e71SLnIpFNunN1VoEqcoIL4OikkqZohC009BnBgaC0",prod:"pk_live_51IGFQBFFFbyANGwCyG68aioVrzep11aBd3D0losTox674UAdp1yTgxnVUUCLNjeSmPyD78HspQiejaa9qZWvUsID00ZIFmxQPe"},d={};function f(e){var t=d[e]||Object(c.a)(h[e]);return d[e]=t,t}var y=Object(s.default)(p)((function(e){var t=e.classes,r=e.amount,n=e.stripeId,a=e.active,c=void 0===a||a,s=e.inactiveMessage,l=e.className,p=e.classNameInactive,h=e.prefix,d=void 0===h?"$":h,y=window.location.search.includes("env=dev")?"dev":"prod";f(y);var m=function(){var e,t=(e=o.a.mark((function e(t){var r,a,i,l;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(c){e.next=4;break}if(s){e.next=3;break}return e.abrupt("return",null);case 3:return e.abrupt("return",alert(s));case 4:return e.prev=4,e.next=7,f(y);case 7:return r=e.sent,a=window.location.protocol+"//"+window.location.host,e.next=11,r.redirectToCheckout({lineItems:[{price:n,quantity:1}],mode:"payment",successUrl:a+"/success",cancelUrl:a+"/cancel"});case 11:i=e.sent,l=i.error,console.log("error",l),e.next=20;break;case 16:e.prev=16,e.t0=e.catch(4),console.log(e.t0.message),e.t0.message.includes("not available")?alert("Looks like plots are sold out for now.  Try again later or contact us at info@newleaf-restoration.org"):alert("There was a problem: "+e.t0.message);case 20:case"end":return e.stop()}}),e,null,[[4,16]])})),function(){var t=this,r=arguments;return new Promise((function(n,o){var a=e.apply(t,r);function i(e){u(a,n,o,i,c,"next",e)}function c(e){u(a,n,o,i,c,"throw",e)}i(void 0)}))});return function(e){return t.apply(this,arguments)}}(),w=t.donateButton;return l&&(w=l,c||(w=p||w)),i.a.createElement("button",{role:"link",className:w,onClick:m},""+d+r.toLocaleString())}));t.a=y}}]);
//# sourceMappingURL=component---src-pages-purchase-js-52681e3fca31ec8a000b.js.map
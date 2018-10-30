(function(n,r,h){if("object"===typeof h&&"string"!==typeof h.nodeName)r(n,h);else{var t=function(c){for(var d in c)c.hasOwnProperty(d)&&(c[d]=t(c[d]));return Object.freeze(c)};h={};r(n,h);for(var p in h)h.hasOwnProperty(p)&&(Object.getOwnPropertyDescriptor(n,p)||Object.defineProperty(n,p,{get:function(){return t({"1.0.2-dev":h[p]})}}))}})("undefined"===typeof global?this:global,function(n,r){function h(a,b){return a&&(a[b]||(a[b]={}))}function t(a,b){"undefined"!==typeof jasmine&&jasmine?a():"undefined"!==
typeof console&&console&&console.error&&b()}function p(a,b){return b.reduce(function(a,b){return a&&a[b]},a)}var c=c||{};c.scope={};c.inherits=function(a,b){function e(){}e.prototype=b.prototype;a.superClass_=b.prototype;a.prototype=new e;a.prototype.constructor=a;for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c]};c.ASSUME_ES5=!1;c.ASSUME_NO_NATIVE_MAP=!1;c.ASSUME_NO_NATIVE_SET=!1;c.defineProperty=
c.ASSUME_ES5||"function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,e){a!=Array.prototype&&a!=Object.prototype&&(a[b]=e.value)};c.getGlobal=function(a){return"undefined"!=typeof window&&window===a?a:"undefined"!=typeof global&&null!=global?global:a};c.global=c.getGlobal(this);c.SYMBOL_PREFIX="jscomp_symbol_";c.initSymbol=function(){c.initSymbol=function(){};c.global.Symbol||(c.global.Symbol=c.Symbol)};c.symbolCounter_=0;c.Symbol=function(a){return c.SYMBOL_PREFIX+(a||"")+c.symbolCounter_++};
c.initSymbolIterator=function(){c.initSymbol();var a=c.global.Symbol.iterator;a||(a=c.global.Symbol.iterator=c.global.Symbol("iterator"));"function"!=typeof Array.prototype[a]&&c.defineProperty(Array.prototype,a,{configurable:!0,writable:!0,value:function(){return c.arrayIterator(this)}});c.initSymbolIterator=function(){}};c.arrayIterator=function(a){var b=0;return c.iteratorPrototype(function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}})};c.iteratorPrototype=function(a){c.initSymbolIterator();
a={next:a};a[c.global.Symbol.iterator]=function(){return this};return a};c.makeIterator=function(a){c.initSymbolIterator();var b=a[Symbol.iterator];return b?b.call(a):c.arrayIterator(a)};c.arrayFromIterator=function(a){for(var b,e=[];!(b=a.next()).done;)e.push(b.value);return e};c.arrayFromIterable=function(a){return a instanceof Array?a:c.arrayFromIterator(c.makeIterator(a))};var d={assertTruthyString:function(a,b){if(!b)throw Error("Value for "+a+" is undefined, null or blank.");if("string"!==typeof b&&
!(b instanceof String))throw Error("Value for "+a+" is not a string.");if(""===b.trim())throw Error("Value for "+a+" is empty string.");},assertNotNullObject:function(a,b){if(null==b)throw Error("Value for "+a+" is undefined or null");},assertNumber:function(a,b){if(null==b)throw Error(a+" must not be null or undefined.");if("number"!==typeof b||isNaN(b))throw Error("Value for "+a+" is not a number");},assertNumberBetween:function(a,b,e,c){(0,d.assertNumber)(a,b);if(b<e||b>c)throw Error("Value for "+
a+" is outside the range ["+e+","+c+"]");},assertFunction:function(a,b){if(!b)throw Error(a+" must not be truthy.");},assertPositiveNumber:function(a,b){(0,d.assertNumber)(a,b);if(0>b)throw Error(a+" must be a positive number.");}};var A=function(a){return/\d+\.\d+\.\d+(-.*)?/.test(a)};var v=function(a,b){a=a.split("-")[0].split(".");b=b.split("-")[0].split(".");for(var c=0;3>c;c++){var d=parseInt(a[c],10),f=parseInt(b[c],10);if(d>f)break;else if(d<f)return!1}return!0};var f=function(a,b){return(0,
A)(a)&&(0,v)(a,"1.0.3")?b:JSON.stringify(b)};var w=function(a,b){return(0,A)(a)&&(0,v)(a,"1.0.3")?b?b:[]:b&&"string"===typeof b?JSON.parse(b):[]};var k=function(a,b,c,d){this.guid=a;this.method=b;this.version=c;this.args=d};k.isValidSerializedMessage=function(a){return!!a&&void 0!==a.omid_message_guid&&void 0!==a.omid_message_method&&void 0!==a.omid_message_version&&"string"===typeof a.omid_message_guid&&"string"===typeof a.omid_message_method&&"string"===typeof a.omid_message_version&&(void 0===
a.omid_message_args||void 0!==a.omid_message_args)};k.deserialize=function(a){return new k(a.omid_message_guid,a.omid_message_method,a.omid_message_version,a.omid_message_args)};k.prototype.serialize=function(){var a={};a=(a.omid_message_guid=this.guid,a.omid_message_method=this.method,a.omid_message_version=this.version,a);void 0!==this.args&&(a.omid_message_args=this.args);return a};var l=function(a){this.to=a;this.communicationType_="NONE"};l.prototype.sendMessage=function(a,b){};l.prototype.handleMessage=
function(a,b){if(this.onMessage)this.onMessage(a,b)};l.prototype.generateGuid=function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(a){var b=16*Math.random()|0;return a="y"===a?(b&3|8).toString(16):b.toString(16)})};l.prototype.serialize=function(a){return JSON.stringify(a)};l.prototype.deserialize=function(a){return JSON.parse(a)};l.prototype.isDirectCommunication=function(){return"DIRECT"===this.communicationType_};var m={OMID_PRESENT_FRAME_NAME:"omid_v1_present",isOmidPresent:function(a){try{return a.frames?
!!a.frames[m.OMID_PRESENT_FRAME_NAME]:!1}catch(b){return!1}},declareOmidPresence:function(a){a.frames&&a.document&&(m.OMID_PRESENT_FRAME_NAME in a.frames||(null==a.document.body&&m.isMutationObserverAvailable_(a)?m.registerMutationObserver_(a):a.document.body?m.appendPresenceIframe_(a):a.document.write('<iframe style="display:none" '+('id="'+m.OMID_PRESENT_FRAME_NAME+'"')+(' name="'+m.OMID_PRESENT_FRAME_NAME+'">')+"</iframe>")))},appendPresenceIframe_:function(a){var b=a.document.createElement("iframe");
b.id=m.OMID_PRESENT_FRAME_NAME;b.name=m.OMID_PRESENT_FRAME_NAME;b.style.display="none";a.document.body.appendChild(b)},isMutationObserverAvailable_:function(a){return"MutationObserver"in a},registerMutationObserver_:function(a){var b=new MutationObserver(function(c){c.forEach(function(c){"BODY"===c.addedNodes[0].nodeName&&(m.appendPresenceIframe_(a),b.disconnect())})});b.observe(a.document.documentElement,{childList:!0})}},u=function(a){l.call(this,a);this.communicationType_="DIRECT";this.handleExportedMessage=
u.prototype.handleExportedMessage.bind(this)};c.inherits(u,l);u.prototype.sendMessage=function(a,b){b=void 0===b?this.to:b;if(!b)throw Error("Message destination must be defined at construction time or when sending the message.");b.handleExportedMessage(a.serialize(),this)};u.prototype.handleExportedMessage=function(a,b){k.isValidSerializedMessage(a)&&this.handleMessage(k.deserialize(a),b)};var y={error:function(a){for(var b=[],e=0;e<arguments.length;++e)b[e-0]=arguments[e];t(function(){throw new (Function.prototype.bind.apply(Error,
[null].concat(["Could not complete the test successfully - "],c.arrayFromIterable(b))));},function(){return console.error.apply(console,[].concat(c.arrayFromIterable(b)))})},debug:function(a){for(var b=[],e=0;e<arguments.length;++e)b[e-0]=arguments[e];t(function(){},function(){return console.error.apply(console,[].concat(c.arrayFromIterable(b)))})}},z=eval("this");var q=function(){if("undefined"!==typeof n&&n)return n;if("undefined"!==typeof global&&global)return global;if("undefined"!==typeof window&&
window)return window;if("undefined"!==typeof z&&z)return z;throw Error("Could not determine global object context.");}();var x=function(a,b){b=void 0===b?q:b;l.call(this,b);var c=this;this.communicationType_="POST_MESSAGE";a.addEventListener("message",function(a){if("object"===typeof a.data){var b=a.data;k.isValidSerializedMessage(b)&&(b=k.deserialize(b),a.source&&c.handleMessage(b,a.source))}})};c.inherits(x,l);x.isCompatibleContext=function(a){return!!(a&&a.addEventListener&&a.postMessage)};x.prototype.sendMessage=
function(a,b){b=void 0===b?this.to:b;if(!b)throw Error("Message destination must be defined at construction time or when sending the message.");b.postMessage(a.serialize(),"*")};var B=function(a,b,c){c=void 0===c?m.isOmidPresent:c;return(b=p(a,b))?new u(b):a.top&&c(a.top)?new x(a,a.top):null};var g=function(a){if(this.communication=void 0===a?(0,B)(q,["omid","v1_VerificationServiceCommunication"]):a)this.communication.onMessage=this.handleMessage_.bind(this);this.remoteIntervals_=this.remoteTimeouts_=
0;this.callbackMap_={}};g.prototype.isSupported=function(){return!!this.communication};g.prototype.registerSessionObserver=function(a,b){(0,d.assertFunction)("functionToExecute",a);this.sendMessage_("addSessionListener",a,b)};g.prototype.addEventListener=function(a,b){(0,d.assertTruthyString)("eventType",a);(0,d.assertFunction)("functionToExecute",b);this.sendMessage_("addEventListener",b,a)};g.prototype.sendUrl=function(a,b,c){(0,d.assertTruthyString)("url",a);this.sendMessage_("sendUrl",function(a){a&&
b?b():!a&&c&&c()},a)};g.prototype.injectJavaScriptResource=function(a,b,c){var e=this;(0,d.assertTruthyString)("url",a);q.document?this.injectJavascriptResourceUrlInDom_(a,b,c):this.sendMessage_("injectJavaScriptResource",function(d,f){d?(e.evaluateJavaScript_(f,a),b()):(y.error("Service failed to load JavaScript resource."),c())},a)};g.prototype.injectJavascriptResourceUrlInDom_=function(a,b,c){var d=q.document,e=d.body;d=d.createElement("script");d.onload=b;d.onerror=c;d.src=a;d.type="application/javascript";
e.appendChild(d)};g.prototype.evaluateJavaScript_=function(a,b){try{eval(a)}catch(e){y.error('Error evaluating the JavaScript resource from "'+b+'".')}};g.prototype.setTimeout=function(a,b){(0,d.assertFunction)("functionToExecute",a);(0,d.assertPositiveNumber)("timeInMillis",b);if(this.hasTimeoutMethods_())return q.setTimeout(a,b);var c=this.remoteTimeouts_++;this.sendMessage_("setTimeout",a,c,b);return c};g.prototype.clearTimeout=function(a){(0,d.assertPositiveNumber)("timeoutId",a);this.hasTimeoutMethods_()?
q.clearTimeout(a):this.sendOneWayMessage_("clearTimeout",a)};g.prototype.setInterval=function(a,b){(0,d.assertFunction)("functionToExecute",a);(0,d.assertPositiveNumber)("timeInMillis",b);if(this.hasIntervalMethods_())return q.setInterval(a,b);var c=this.remoteIntervals_++;this.sendMessage_("setInterval",a,c,b);return c};g.prototype.clearInterval=function(a){(0,d.assertPositiveNumber)("intervalId",a);this.hasIntervalMethods_()?q.clearInterval(a):this.sendOneWayMessage_("clearInterval",a)};g.prototype.hasTimeoutMethods_=
function(){return"function"===typeof q.setTimeout&&"function"===typeof q.clearTimeout};g.prototype.hasIntervalMethods_=function(){return"function"===typeof q.setInterval&&"function"===typeof q.clearInterval};g.prototype.handleMessage_=function(a,b){b=a.method;var c=a.guid;a=a.args;if("response"===b&&this.callbackMap_[c]){var d=(0,w)("1.0.2-dev",a);this.callbackMap_[c].apply(this,d)}"error"===b&&window.console&&y.error(a)};g.prototype.sendOneWayMessage_=function(a,b){for(var d=[],f=1;f<arguments.length;++f)d[f-
1]=arguments[f];this.sendMessage_.apply(this,[].concat([a,null],c.arrayFromIterable(d)))};g.prototype.sendMessage_=function(a,b,c){for(var d=[],e=2;e<arguments.length;++e)d[e-2]=arguments[e];this.isSupported()&&(e=this.communication.generateGuid(),b&&(this.callbackMap_[e]=b),d=new k(e,"VerificationService."+a,"1.0.2-dev",(0,f)("1.0.2-dev",d)),this.communication.sendMessage(d))};(0,function(a,b,c){if(c=void 0===c?"undefined"===typeof r?null:r:c)a=a.split("."),a.slice(0,a.length-1).reduce(h,c)[a[a.length-
1]]=b})("OmidVerificationClient",g)},"undefined"===typeof exports?void 0:exports);
(function(){function n(){var c={location:{protocol:"https:"}};c.parent=c;c.top=c;c.document={getElementById:function(){},createElement:function(){},body:{insertBefore:function(){}},querySelectorAll:function(){return[]}};return c}function r(c){var d={src:"dv-measurements",main:242},v=d.eval&&d.rate&&100*Math.random()<d.rate?d.eval:d.main;if(v)return c+"//cdn.doubleverify.com/"+d.src+v+".js"}function h(){window.$dv=window.parent.$dv;window.$frmId=Math.random().toString(36)+Math.random().toString(36);
window.dv_flow=2}function t(c,h){if(c){var d=document.createElement("script");d.src=c;d.onerror=function(){(new Image).src=h+"scriptLoading"};document.body.appendChild(d)}}dv_flow=2;var p={omidObject:{},isSupported:function(){try{return this.omidObject=new OmidVerificationClient["1.0.2-dev"],this.omidObject.isSupported()}catch(d){return!1}},execute:function(){var c=this.omidObject;$dv={omidJsClient:c,tags:{}};"undefined"==typeof window&&($dv.isDomlessEnvironment=!0,window=n());$frmId=Math.random().toString(36)+
Math.random().toString(36);c.registerSessionObserver(function(d){try{switch(d.type){case "sessionStart":var h=r("https:");$dv.omidSessionData=d;c.injectJavaScriptResource(h);break;case "sessionError":c.sendUrl("https://tps.doubleverify.com/visit.jpg?ctx=818052&cmp=1619415&dvtagver=6.1.src&dvp_isLostImp=1&dvp_omid=1&dvp_jsErrMsg=omidSession"+(d.data&&d.data.message||""))}}catch(f){c.sendUrl("https://tps.doubleverify.com/visit.jpg?ctx=818052&cmp=1619415&dvtagver=6.1.src&dvp_isLostImp=1&dvp_omid=1&dvp_jsErrMsg=omidCallback"+
f.message)}},"doubleverify.com-omid")}},c={execute:function(){try{window.$dv=window.$dv||{tags:{}};var c=document.currentScript&&0==document.currentScript.src.indexOf("http:")?"http:":"https:",n=r(c),p=Math.floor(1E12*(Math.random()+"")),f=document.createElement("iframe");f.name=f.id="iframe_"+p;f.setAttribute("data-dv-frm",p);f.width="0";f.height="0";f.style.display="none";f.src="about:blank";if(document.currentScript)document.currentScript.parentNode.insertBefore(f,document.currentScript);else if(document.body)document.body.insertBefore(f,
document.body.firstChild);else{var w=document.getElementsByTagName("head")[0];w.insertBefore(f,w.firstChild)}var k=f&&(f.contentDocument||f.contentWindow&&f.contentWindow.document||frames&&frames[f.name]&&frames[f.name].document),l='<html><head><script type="text/javascript">('+h.toString()+')();\x3c/script></head><body><script type="text/javascript">('+t.toString()+')("'+n+'", "https://tps.doubleverify.com/visit.jpg?ctx=818052&cmp=1619415&dvtagver=6.1.src&dvp_isLostImp=1&dvp_jsErrMsg=");\x3c/script></body></html>';
if(k)k.open(),k.write(l),k.close();else{var m=encodeURIComponent(l.replace(/'/g,"\\'").replace(/\n|\r\n|\r/g,""));f.src='javascript: (function(){document.open();document.domain="'+window.document.domain+"\";document.write('"+m+"');})()"}}catch(u){(new Image).src="https://tps.doubleverify.com/visit.jpg?ctx=818052&cmp=1619415&dvtagver=6.1.src&dvp_isLostImp=1&dvp_jsErrMsg=visitLoading"+u.message}}};try{p.isSupported()?p.execute():c.execute()}catch(d){}})();
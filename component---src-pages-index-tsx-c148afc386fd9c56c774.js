(self.webpackChunkab=self.webpackChunkab||[]).push([[691],{2993:function(e){var t="undefined"!=typeof Element,a="function"==typeof Map,n="function"==typeof Set,r="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function i(e,c){if(e===c)return!0;if(e&&c&&"object"==typeof e&&"object"==typeof c){if(e.constructor!==c.constructor)return!1;var l,s,o,f;if(Array.isArray(e)){if((l=e.length)!=c.length)return!1;for(s=l;0!=s--;)if(!i(e[s],c[s]))return!1;return!0}if(a&&e instanceof Map&&c instanceof Map){if(e.size!==c.size)return!1;for(f=e.entries();!(s=f.next()).done;)if(!c.has(s.value[0]))return!1;for(f=e.entries();!(s=f.next()).done;)if(!i(s.value[1],c.get(s.value[0])))return!1;return!0}if(n&&e instanceof Set&&c instanceof Set){if(e.size!==c.size)return!1;for(f=e.entries();!(s=f.next()).done;)if(!c.has(s.value[0]))return!1;return!0}if(r&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(c)){if((l=e.length)!=c.length)return!1;for(s=l;0!=s--;)if(e[s]!==c[s])return!1;return!0}if(e.constructor===RegExp)return e.source===c.source&&e.flags===c.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===c.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===c.toString();if((l=(o=Object.keys(e)).length)!==Object.keys(c).length)return!1;for(s=l;0!=s--;)if(!Object.prototype.hasOwnProperty.call(c,o[s]))return!1;if(t&&e instanceof Element)return!1;for(s=l;0!=s--;)if(("_owner"!==o[s]&&"__v"!==o[s]&&"__o"!==o[s]||!e.$$typeof)&&!i(e[o[s]],c[o[s]]))return!1;return!0}return e!=e&&c!=c}e.exports=function(e,t){try{return i(e,t)}catch(a){if((a.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw a}}},4839:function(e,t,a){"use strict";var n,r=a(7294),i=(n=r)&&"object"==typeof n&&"default"in n?n.default:n;function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var l=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,a){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==a&&"function"!=typeof a)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(n){if("function"!=typeof n)throw new Error("Expected WrappedComponent to be a React component.");var s,o=[];function f(){s=e(o.map((function(e){return e.props}))),u.canUseDOM?t(s):a&&(s=a(s))}var u=function(e){var t,a;function r(){return e.apply(this,arguments)||this}a=e,(t=r).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,r.peek=function(){return s},r.rewind=function(){if(r.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=s;return s=void 0,o=[],e};var c=r.prototype;return c.UNSAFE_componentWillMount=function(){o.push(this),f()},c.componentDidUpdate=function(){f()},c.componentWillUnmount=function(){var e=o.indexOf(this);o.splice(e,1),f()},c.render=function(){return i.createElement(n,this.props)},r}(r.PureComponent);return c(u,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(n)+")"),c(u,"canUseDOM",l),u}}},1566:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return Ne}});var n,r,i,c,l=a(7294),s=a(5697),o=a.n(s),f=a(4839),u=a.n(f),d=a(2993),p=a.n(d),m=a(6494),b=a.n(m),g="bodyAttributes",h="htmlAttributes",w="titleAttributes",y={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},v=(Object.keys(y).map((function(e){return y[e]})),"charset"),x="cssText",E="href",T="http-equiv",k="innerHTML",S="itemprop",N="name",O="property",C="rel",A="src",j="target",L={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},M="defaultTitle",P="defer",_="encodeSpecialCharacters",B="onChangeClientState",I="titleTemplate",z=Object.keys(L).reduce((function(e,t){return e[L[t]]=t,e}),{}),U=[y.NOSCRIPT,y.SCRIPT,y.STYLE],D="data-react-helmet",R="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},H=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},Y=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),q=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},F=function(e,t){var a={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(a[n]=e[n]);return a},W=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},J=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},K=function(e){var t=Q(e,y.TITLE),a=Q(e,I);if(a&&t)return a.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var n=Q(e,M);return t||n||void 0},$=function(e){return Q(e,B)||function(){}},V=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return q({},e,t)}),{})},X=function(e,t){return t.filter((function(e){return void 0!==e[y.BASE]})).map((function(e){return e[y.BASE]})).reverse().reduce((function(t,a){if(!t.length)for(var n=Object.keys(a),r=0;r<n.length;r++){var i=n[r].toLowerCase();if(-1!==e.indexOf(i)&&a[i])return t.concat(a)}return t}),[])},G=function(e,t,a){var n={};return a.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&ne("Helmet: "+e+' should be of type "Array". Instead found type "'+R(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,a){var r={};a.filter((function(e){for(var a=void 0,i=Object.keys(e),c=0;c<i.length;c++){var l=i[c],s=l.toLowerCase();-1===t.indexOf(s)||a===C&&"canonical"===e[a].toLowerCase()||s===C&&"stylesheet"===e[s].toLowerCase()||(a=s),-1===t.indexOf(l)||l!==k&&l!==x&&l!==S||(a=l)}if(!a||!e[a])return!1;var o=e[a].toLowerCase();return n[a]||(n[a]={}),r[a]||(r[a]={}),!n[a][o]&&(r[a][o]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var i=Object.keys(r),c=0;c<i.length;c++){var l=i[c],s=b()({},n[l],r[l]);n[l]=s}return e}),[]).reverse()},Q=function(e,t){for(var a=e.length-1;a>=0;a--){var n=e[a];if(n.hasOwnProperty(t))return n[t]}return null},Z=(n=Date.now(),function(e){var t=Date.now();t-n>16?(n=t,e(t)):setTimeout((function(){Z(e)}),0)}),ee=function(e){return clearTimeout(e)},te="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||Z:a.g.requestAnimationFrame||Z,ae="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||ee:a.g.cancelAnimationFrame||ee,ne=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},re=null,ie=function(e,t){var a=e.baseTag,n=e.bodyAttributes,r=e.htmlAttributes,i=e.linkTags,c=e.metaTags,l=e.noscriptTags,s=e.onChangeClientState,o=e.scriptTags,f=e.styleTags,u=e.title,d=e.titleAttributes;se(y.BODY,n),se(y.HTML,r),le(u,d);var p={baseTag:oe(y.BASE,a),linkTags:oe(y.LINK,i),metaTags:oe(y.META,c),noscriptTags:oe(y.NOSCRIPT,l),scriptTags:oe(y.SCRIPT,o),styleTags:oe(y.STYLE,f)},m={},b={};Object.keys(p).forEach((function(e){var t=p[e],a=t.newTags,n=t.oldTags;a.length&&(m[e]=a),n.length&&(b[e]=p[e].oldTags)})),t&&t(),s(e,m,b)},ce=function(e){return Array.isArray(e)?e.join(""):e},le=function(e,t){void 0!==e&&document.title!==e&&(document.title=ce(e)),se(y.TITLE,t)},se=function(e,t){var a=document.getElementsByTagName(e)[0];if(a){for(var n=a.getAttribute(D),r=n?n.split(","):[],i=[].concat(r),c=Object.keys(t),l=0;l<c.length;l++){var s=c[l],o=t[s]||"";a.getAttribute(s)!==o&&a.setAttribute(s,o),-1===r.indexOf(s)&&r.push(s);var f=i.indexOf(s);-1!==f&&i.splice(f,1)}for(var u=i.length-1;u>=0;u--)a.removeAttribute(i[u]);r.length===i.length?a.removeAttribute(D):a.getAttribute(D)!==c.join(",")&&a.setAttribute(D,c.join(","))}},oe=function(e,t){var a=document.head||document.querySelector(y.HEAD),n=a.querySelectorAll(e+"["+"data-react-helmet]"),r=Array.prototype.slice.call(n),i=[],c=void 0;return t&&t.length&&t.forEach((function(t){var a=document.createElement(e);for(var n in t)if(t.hasOwnProperty(n))if(n===k)a.innerHTML=t.innerHTML;else if(n===x)a.styleSheet?a.styleSheet.cssText=t.cssText:a.appendChild(document.createTextNode(t.cssText));else{var l=void 0===t[n]?"":t[n];a.setAttribute(n,l)}a.setAttribute(D,"true"),r.some((function(e,t){return c=t,a.isEqualNode(e)}))?r.splice(c,1):i.push(a)})),r.forEach((function(e){return e.parentNode.removeChild(e)})),i.forEach((function(e){return a.appendChild(e)})),{oldTags:r,newTags:i}},fe=function(e){return Object.keys(e).reduce((function(t,a){var n=void 0!==e[a]?a+'="'+e[a]+'"':""+a;return t?t+" "+n:n}),"")},ue=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,a){return t[L[a]||a]=e[a],t}),t)},de=function(e,t,a){switch(e){case y.TITLE:return{toComponent:function(){return e=t.title,a=t.titleAttributes,(n={key:e})[D]=!0,r=ue(a,n),[l.createElement(y.TITLE,r,e)];var e,a,n,r},toString:function(){return function(e,t,a,n){var r=fe(a),i=ce(t);return r?"<"+e+' data-react-helmet="true" '+r+">"+J(i,n)+"</"+e+">":"<"+e+' data-react-helmet="true">'+J(i,n)+"</"+e+">"}(e,t.title,t.titleAttributes,a)}};case g:case h:return{toComponent:function(){return ue(t)},toString:function(){return fe(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,a){var n,r=((n={key:a})[D]=!0,n);return Object.keys(t).forEach((function(e){var a=L[e]||e;if(a===k||a===x){var n=t.innerHTML||t.cssText;r.dangerouslySetInnerHTML={__html:n}}else r[a]=t[e]})),l.createElement(e,r)}))}(e,t)},toString:function(){return function(e,t,a){return t.reduce((function(t,n){var r=Object.keys(n).filter((function(e){return!(e===k||e===x)})).reduce((function(e,t){var r=void 0===n[t]?t:t+'="'+J(n[t],a)+'"';return e?e+" "+r:r}),""),i=n.innerHTML||n.cssText||"",c=-1===U.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+r+(c?"/>":">"+i+"</"+e+">")}),"")}(e,t,a)}}}},pe=function(e){var t=e.baseTag,a=e.bodyAttributes,n=e.encode,r=e.htmlAttributes,i=e.linkTags,c=e.metaTags,l=e.noscriptTags,s=e.scriptTags,o=e.styleTags,f=e.title,u=void 0===f?"":f,d=e.titleAttributes;return{base:de(y.BASE,t,n),bodyAttributes:de(g,a,n),htmlAttributes:de(h,r,n),link:de(y.LINK,i,n),meta:de(y.META,c,n),noscript:de(y.NOSCRIPT,l,n),script:de(y.SCRIPT,s,n),style:de(y.STYLE,o,n),title:de(y.TITLE,{title:u,titleAttributes:d},n)}},me=u()((function(e){return{baseTag:X([E,j],e),bodyAttributes:V(g,e),defer:Q(e,P),encode:Q(e,_),htmlAttributes:V(h,e),linkTags:G(y.LINK,[C,E],e),metaTags:G(y.META,[N,v,T,O,S],e),noscriptTags:G(y.NOSCRIPT,[k],e),onChangeClientState:$(e),scriptTags:G(y.SCRIPT,[A,k],e),styleTags:G(y.STYLE,[x],e),title:K(e),titleAttributes:V(w,e)}}),(function(e){re&&ae(re),e.defer?re=te((function(){ie(e,(function(){re=null}))})):(ie(e),re=null)}),pe)((function(){return null})),be=(r=me,c=i=function(e){function t(){return H(this,t),W(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!p()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case y.SCRIPT:case y.NOSCRIPT:return{innerHTML:t};case y.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,a=e.child,n=e.arrayTypeChildren,r=e.newChildProps,i=e.nestedChildren;return q({},n,((t={})[a.type]=[].concat(n[a.type]||[],[q({},r,this.mapNestedChildrenToProps(a,i))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,a,n=e.child,r=e.newProps,i=e.newChildProps,c=e.nestedChildren;switch(n.type){case y.TITLE:return q({},r,((t={})[n.type]=c,t.titleAttributes=q({},i),t));case y.BODY:return q({},r,{bodyAttributes:q({},i)});case y.HTML:return q({},r,{htmlAttributes:q({},i)})}return q({},r,((a={})[n.type]=q({},i),a))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var a=q({},t);return Object.keys(e).forEach((function(t){var n;a=q({},a,((n={})[t]=e[t],n))})),a},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var a=this,n={};return l.Children.forEach(e,(function(e){if(e&&e.props){var r=e.props,i=r.children,c=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,a){return t[z[a]||a]=e[a],t}),t)}(F(r,["children"]));switch(a.warnOnInvalidChildren(e,i),e.type){case y.LINK:case y.META:case y.NOSCRIPT:case y.SCRIPT:case y.STYLE:n=a.flattenArrayTypeChildren({child:e,arrayTypeChildren:n,newChildProps:c,nestedChildren:i});break;default:t=a.mapObjectTypeChildren({child:e,newProps:t,newChildProps:c,nestedChildren:i})}}})),t=this.mapArrayTypeChildrenToProps(n,t)},t.prototype.render=function(){var e=this.props,t=e.children,a=F(e,["children"]),n=q({},a);return t&&(n=this.mapChildrenToProps(t,n)),l.createElement(r,n)},Y(t,null,[{key:"canUseDOM",set:function(e){r.canUseDOM=e}}]),t}(l.Component),i.propTypes={base:o().object,bodyAttributes:o().object,children:o().oneOfType([o().arrayOf(o().node),o().node]),defaultTitle:o().string,defer:o().bool,encodeSpecialCharacters:o().bool,htmlAttributes:o().object,link:o().arrayOf(o().object),meta:o().arrayOf(o().object),noscript:o().arrayOf(o().object),onChangeClientState:o().func,script:o().arrayOf(o().object),style:o().arrayOf(o().object),title:o().string,titleAttributes:o().object,titleTemplate:o().string},i.defaultProps={defer:!0,encodeSpecialCharacters:!0},i.peek=r.peek,i.rewind=function(){var e=r.rewind();return e||(e=pe({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},c);be.renderStatic=be.rewind;var ge=a(2359),he=function(){return l.createElement("div",{className:"flex flex-col lg:flex-row p-2 space-y-4 lg:space-y-0 content-center justify-between items-center"},l.createElement("img",{src:"images/logo.png",alt:"Logo",height:35,style:{objectFit:"contain",height:35,marginTop:9}}),l.createElement("div",{className:"hidden lg:flex  items-center space-x-12"},["HOME","ABOUT US","TOKENOMICS","BOTTLES","COMMUNITY"].map((function(e){return l.createElement("a",{key:e,className:"bg-turkois ",href:"#"+e.split(" ").join("-").toLocaleLowerCase()},l.createElement("div",{className:"bg-turkois hover:bg-turkoisLight relative top-1 right-1 px-6 py-2"},e))}))),l.createElement("div",{className:"bg-pink",role:"button"},l.createElement("span",{className:" block bg-pink py-2 px-6 relative top-1 right-1 "},"CONNECT WALLET")))},we=function(){return l.createElement("div",{className:"flex flex-col-reverse lg:flex-row mt-16 lg:mt-32 pb-20 lg:pb-64 space-y-reverse space-y-10 lg:space-y-0  justify-between text-center lg:text-left px-2"},l.createElement("div",{className:"flex flex-col justify-center",style:{maxWidth:720}},l.createElement("h1",{className:"mb-0"},"METABABY represents a global acceptance of the Metaverse and a people-powered future.``"),l.createElement("p",{className:"text-gray-400 text-base mt-7 mb-8",style:{maxWidth:538}},"Participate and play with the meta baby by staking your",l.createElement("span",{className:" text-yellow-400"}," $METABABY")," tokens and convince it to share its tokenized bottle with you or another playmate."),l.createElement("div",{className:"flex  space-x-4 lg:space-x-8"},l.createElement("a",{href:"/"},l.createElement("div",{className:" bg-turkois",role:"button"},l.createElement("span",{className:" bg-turkoisLight hover:bg-turkois px-4 lg:px-10 py-2 lg:py-5 text-xl relative bottom-1 right-1 block"},"BUY ON PANCAKESWAP"))),l.createElement("a",{href:"/"},l.createElement("div",{className:" bg-yellowButton",role:"button"},l.createElement("span",{className:" bg-yellowButton hover:bg-yellow-300 px-4 lg:px-10 py-2 lg:py-5 text-xl relative bottom-1 right-1 block text-black"},"VIEW ON DEXTOOLS"))))),l.createElement(ge.S,{src:"../../../static/images/baby.png",alt:"baby",height:500,className:"mr-0 lg:mr-5  2xl:mr-20",__imageData:a(9435)}))},ye=function(){return l.createElement("div",null,l.createElement("h2",{className:"text-center",id:"about-us"},"About Us"),l.createElement("p",{className:"mt-10 text-xl lg:text-5xl text-center ",style:{lineHeight:"1.3"}},"The first token to seamlessly switch between rewarding playmates with"," ",l.createElement("span",{className:"text-yellow-500 underline lg:text-5xl"}," NFT ")," ","bottles which can contain a range of",l.createElement("span",{className:"text-yellow-500 lg:text-5xl"}," Metaverse")," tokens and buy-backs."),l.createElement("div",{className:"flex space-x-4 lg:-space-x-0  justify-evenly items-baseline  my-12"},l.createElement(ge.S,{src:"../../../static/images/t.png",alt:"",__imageData:a(2535)}),l.createElement(ge.S,{src:"../../../static/images/b.png",alt:"",__imageData:a(2653)}),l.createElement(ge.S,{src:"../../../static/images/m.png",alt:"",__imageData:a(3682)})),l.createElement("p",{className:" mt-10 text-xl lg:text-5xl text-center",style:{lineHeight:"1.3"}},"Stake your"," ",l.createElement("span",{className:"text-yellow-500 underline lg:text-5xl"}," $METABABY "),"tokens for a chance of receiving a bottle (NFT) which grants access to milky Metaverse tokens - sell your tokenized bottles on secondary markets or be a big baby and consume yourself!"))},ve=function(e){var t=e.imageUrl,a=e.label,n=e.value;return l.createElement("div",{className:"relative items-center w-full mr-5 ",style:{height:100}},l.createElement("img",{className:"absolute w-full",src:t,height:100,alt:"",style:{height:100}}),l.createElement("div",{className:"flex flex-col lg:flex-row justify-evenly lg:justify-between pl-12 lg:pl-24 pr-12 items-center w-full h-full"},l.createElement("span",{className:"text-2xl uppercase font-bold z-10",style:{color:a.color}},a.value),l.createElement("span",{className:"text-4xl z-10"},n)))},xe=function(e){var t=e.imageUrl,a=e.tag,n=e.title,r=e.description;return l.createElement("div",{className:" h-auto bg-sand text-center"},l.createElement("div",{className:"flex flex-col items-center w-full h-full relative bg-sand bottom-5 right-2 px-2 lg:px-10"},l.createElement("img",{className:"mt-7 lg:mt-14 mb-3 lg:mb-6",src:t,alt:n,height:230,style:{height:230}}),l.createElement("span",{style:{color:"#9F6603",fontSize:48,lineHeight:1}},a),l.createElement("h3",{className:"mt-4 uppercase"},n),l.createElement("p",{className:"text-base mt-5",style:{maxWidth:380,color:"#001428"}},r)))},Ee=function(){return l.createElement("div",null,l.createElement("h2",{className:" text-center",id:"tokenomics"},"Tokenomics"),l.createElement("div",{className:"flex flex-col space-y-4 lg:space-y-0 lg:flex-row mt-24"},l.createElement(ve,{imageUrl:"images/orange-banner.png",label:{value:"Supply",color:"#982400"},value:"888,888,888,888"}),l.createElement(ve,{imageUrl:"images/yellow-banner.png",label:{value:"Total LP in USDT",color:"#885600"},value:"TBA"})),l.createElement("div",{className:"flex flex-col lg:flex-row space-y-4 lg:space-y-0 mt-4 lg:mt-10"},l.createElement(ve,{imageUrl:"images/green-banner.png",label:{value:"Circulating",color:"#005E57"},value:"TBA"}),l.createElement(ve,{imageUrl:"images/pink-banner.png",label:{value:"Burned",color:"#5C0075"},value:"TBA"})),l.createElement("div",{className:"flex flex-col lg:flex-row mt-20 justify-between space-y-10 lg:space-y-0 pl-2  lg:mr-0 w-full space-x-0 lg:space-x-8"},l.createElement(xe,{imageUrl:"images/liquidity.png",tag:"4%",title:"Liquidity",description:"Every transaction will feed our liquidity pool with 3% of the transferred amount. This will prevent a lot of babies from creating mental havoc and crying."}),l.createElement(xe,{imageUrl:"images/treasury.png",tag:"3%",title:"TREASURY",description:"Every transaction will feed our treasury with 3% of the transferred amount. Babies are friendly with playmates, so loyal playmates have an equal chance to share some milk."}),l.createElement("div",{className:" mt-20 lg:mt-0"},l.createElement(xe,{imageUrl:"images/marketing.png",tag:"3%",title:"Marketing",description:"Every transaction will feed our marketing/dev budget with 3% of the transferred amount. This will help us to attract and welcome more playmates into our community."}))))},Te=function(e){var t=e.label,a=e.value;return l.createElement("div",{className:"flex items-center space-x-3 "},l.createElement("div",{className:" h-2 w-2  bg-yellowButton inline-block"}),l.createElement("span",{className:"",style:{lineHeight:1}},t+": "+a))},ke=function(){return l.createElement("div",{id:"bottles",className:"pt-12 lg:pt-24"},l.createElement("div",{className:" flex flex-col lg:flex-row justify-between items-center"},l.createElement("div",{className:"flex flex-col"},l.createElement("h2",null,"BOTTLES"),l.createElement("p",{className:"lg:text-5xl mt-6 mb-8 lg:mb-16",style:{maxWidth:665}},"Check if there is anymore tokens left in a bottle and consume it like a baby!"),l.createElement("div",{className:"pl-0 lg:pl-6"},l.createElement("div",{className:"flex flex-col space-y-3 lg:space-y-4"},l.createElement(Te,{label:"Owner",value:"wallet Address"}),l.createElement(Te,{label:"Donated",value:"wallet Address"}),l.createElement(Te,{label:"Tokenized Milk",value:"0 $METAHERO"}),l.createElement(Te,{label:"Consumed",value:"True"})),l.createElement("div",{className:"flex flex-col lg:flex-row pt-8 lg:pt-12 space-y-4 lg:space-y-0 space-x-0 lg:space-x-4 text-center lg:text-left"},l.createElement("div",{className:" bg-black"},l.createElement("input",{placeholder:"Enter Token ID",className:"relative bg-black h-14 lg:h-full w-full pl-4 bottom-1 right-1",type:"text"})),l.createElement("div",{className:" bg-turkois",role:"button"},l.createElement("span",{className:" bg-turkoisLight hover:bg-turkois px-6 py-3 text-xl relative bottom-1 right-1 block text-black"},"LOOKUP")),l.createElement("div",{className:" bg-yellowButton",role:"button"},l.createElement("span",{className:" bg-yellowButton hover:bg-yellow-300 px-6 py-3 text-xl relative bottom-1 right-1 block text-black"},"CONSUME"))))),l.createElement("div",{className:"hidden lg:block",style:{height:560}},l.createElement("img",{src:"images/bottles-of-milk.png",alt:"",style:{height:560}}))))},Se=function(){return l.createElement("div",{id:"community",className:"pt-8 pr-4 pl-2 lg:pt-16"},l.createElement("div",{className:" bg-black text-center lg:text-left"},l.createElement("div",{className:"flex flex-col-reverse lg:flex-row space-y-reverse space-y-4 lg:space-y-0 justify-between py-4 lg:py-12 px-2 lg:px-24 relative bg-black bottom-2 left-2"},l.createElement("div",null,l.createElement("h2",null,"Community"),l.createElement("p",{className:" mt-6 text-lg lg:text-5xl",style:{maxWidth:700,lineHeight:"1.1"}},"Come play with the rest of us in a white-box playground where creativity has no limits."),l.createElement("div",{className:"flex mt-10 lg:mt-24 space-x-4"},l.createElement("a",{href:"/",target:"_blank",rel:"noreferrer"},l.createElement(ge.S,{src:"../../../static/images/telegram.png",alt:"telegram",height:70,__imageData:a(8250)})),l.createElement("a",{href:"https://twitter.com/metababytoken",target:"_blank",rel:"noreferrer"},l.createElement(ge.S,{src:"../../../static/images/twitter.png",alt:"twitter",height:70,__imageData:a(7674)})),l.createElement("a",{href:"/",target:"_blank",rel:"noreferrer"},l.createElement(ge.S,{src:"../../../static/images/medium.png",alt:"medium",height:70,__imageData:a(5433)})),l.createElement("a",{href:"/",target:"_blank",rel:"noreferrer"},l.createElement(ge.S,{src:"../../../static/images/github.png",alt:"github",height:70,__imageData:a(6282)})))),l.createElement(ge.S,{src:"../../../static/images/teddy.png",height:430,alt:"",__imageData:a(5621)}))))},Ne=function(){return l.createElement("div",{style:{overflowX:"hidden"}},l.createElement(be,null,l.createElement("meta",{charSet:"utf-8"}),l.createElement("title",null,"Meta Baby")),l.createElement("div",{style:{background:'url("images/first-bg.png")',backgroundSize:"container"}},l.createElement("div",{className:"lg:container px-2 lg:px-0 pt-2 lg:pt-10 mt-2"},l.createElement(he,null),l.createElement(we,null))),l.createElement(ge.S,{alt:"",src:"../../static/images/divider.png",style:{width:"110vw",left:"-10px",position:"relative"},__imageData:a(5080)}),l.createElement("div",{style:{background:'url("images/first-bg.png")',backgroundSize:"container"}},l.createElement("div",{className:"lg:container px-2 pt-20 lg:pt-48 mt-2"},l.createElement(ye,null))),l.createElement("div",{style:{width:"fit-content"},className:" bg-yellowButton mt-8 lg:mt-16 mb-12 lg:mb-28 mx-auto",role:"button"},l.createElement("span",{className:" bg-yellowButton hover:bg-yellow-300 px-16 py-5 text-xl relative bottom-1 right-1 block text-black"},"Whitepaper")),l.createElement("div",{style:{background:'url("images/first-bg.png")',backgroundSize:"container"}},l.createElement("div",{className:"lg:container px-2 pt-2 pb-32 lg:pb-64"},l.createElement(Ee,null))),l.createElement(ge.S,{alt:"",src:"../../static/images/divider.png",style:{width:"110vw",left:"-10px",position:"relative"},__imageData:a(5080)}),l.createElement("div",{style:{backgroundImage:'url("images/bottle-background.png")',backgroundSize:"contain"}},l.createElement("div",{className:"lg:container px-2 -mt-2 pl-2 lg:pl-28 pb-10"},l.createElement(ke,null)),l.createElement(ge.S,{alt:"",src:"../../static/images/divider.png",style:{width:"110vw",left:"-10px",position:"relative"},__imageData:a(5080)})),l.createElement("div",{style:{background:'url("images/first-bg.png")',backgroundSize:"container"}},l.createElement("div",{className:"lg:container pt-2 pb-20 lg:pb-64"},l.createElement(Se,null))),l.createElement("div",{className:"lg:container flex justify-center lg:justify-between items-center pb-10"},l.createElement("span",null,"Copyright © Meta Baby, 2021"),l.createElement("div",{className:"hidden lg:flex  items-center space-x-12"},["HOME","ABOUT US","TOKENOMICS","BOTTLES","COMMUNITY"].map((function(e){return l.createElement("a",{key:e,className:"bg-turkois ",href:"#"+e.split(" ").join("-").toLocaleLowerCase()},l.createElement("div",{className:"bg-turkois hover:bg-turkoisLight relative top-1 right-1 px-6 py-2"},e))})))))}},2535:function(e){"use strict";e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#f8f8f8","images":{"fallback":{"src":"/static/513aad1e3e428db03446c46035fd0ab5/1f441/t.png","srcSet":"/static/513aad1e3e428db03446c46035fd0ab5/de080/t.png 35w,\\n/static/513aad1e3e428db03446c46035fd0ab5/18893/t.png 70w,\\n/static/513aad1e3e428db03446c46035fd0ab5/1f441/t.png 140w","sizes":"(min-width: 140px) 140px, 100vw"},"sources":[{"srcSet":"/static/513aad1e3e428db03446c46035fd0ab5/d3065/t.webp 35w,\\n/static/513aad1e3e428db03446c46035fd0ab5/49b23/t.webp 70w,\\n/static/513aad1e3e428db03446c46035fd0ab5/96a2e/t.webp 140w","type":"image/webp","sizes":"(min-width: 140px) 140px, 100vw"}]},"width":140,"height":296}')},5433:function(e){"use strict";e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#080808","images":{"fallback":{"src":"/static/f51b83a4aa99cc48dec2dae3c305f3b3/ad998/medium.png","srcSet":"/static/f51b83a4aa99cc48dec2dae3c305f3b3/7ceb7/medium.png 18w,\\n/static/f51b83a4aa99cc48dec2dae3c305f3b3/83fe9/medium.png 35w,\\n/static/f51b83a4aa99cc48dec2dae3c305f3b3/ad998/medium.png 70w,\\n/static/f51b83a4aa99cc48dec2dae3c305f3b3/ba5dd/medium.png 140w","sizes":"(min-width: 70px) 70px, 100vw"},"sources":[{"srcSet":"/static/f51b83a4aa99cc48dec2dae3c305f3b3/4f7ad/medium.webp 18w,\\n/static/f51b83a4aa99cc48dec2dae3c305f3b3/dbb7e/medium.webp 35w,\\n/static/f51b83a4aa99cc48dec2dae3c305f3b3/299bc/medium.webp 70w,\\n/static/f51b83a4aa99cc48dec2dae3c305f3b3/29111/medium.webp 140w","type":"image/webp","sizes":"(min-width: 70px) 70px, 100vw"}]},"width":70,"height":70}')},8250:function(e){"use strict";e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#080808","images":{"fallback":{"src":"/static/9aea029ded2aebe798ebf640330720a9/ad998/telegram.png","srcSet":"/static/9aea029ded2aebe798ebf640330720a9/7ceb7/telegram.png 18w,\\n/static/9aea029ded2aebe798ebf640330720a9/83fe9/telegram.png 35w,\\n/static/9aea029ded2aebe798ebf640330720a9/ad998/telegram.png 70w,\\n/static/9aea029ded2aebe798ebf640330720a9/ba5dd/telegram.png 140w","sizes":"(min-width: 70px) 70px, 100vw"},"sources":[{"srcSet":"/static/9aea029ded2aebe798ebf640330720a9/4f7ad/telegram.webp 18w,\\n/static/9aea029ded2aebe798ebf640330720a9/dbb7e/telegram.webp 35w,\\n/static/9aea029ded2aebe798ebf640330720a9/299bc/telegram.webp 70w,\\n/static/9aea029ded2aebe798ebf640330720a9/29111/telegram.webp 140w","type":"image/webp","sizes":"(min-width: 70px) 70px, 100vw"}]},"width":70,"height":70}')},2653:function(e){"use strict";e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#080808","images":{"fallback":{"src":"/static/95e21c1d0526e00e368e989e37a03f8d/a717f/b.png","srcSet":"/static/95e21c1d0526e00e368e989e37a03f8d/41c18/b.png 78w,\\n/static/95e21c1d0526e00e368e989e37a03f8d/f8586/b.png 156w,\\n/static/95e21c1d0526e00e368e989e37a03f8d/a717f/b.png 311w","sizes":"(min-width: 311px) 311px, 100vw"},"sources":[{"srcSet":"/static/95e21c1d0526e00e368e989e37a03f8d/89584/b.webp 78w,\\n/static/95e21c1d0526e00e368e989e37a03f8d/66872/b.webp 156w,\\n/static/95e21c1d0526e00e368e989e37a03f8d/de05e/b.webp 311w","type":"image/webp","sizes":"(min-width: 311px) 311px, 100vw"}]},"width":311,"height":325}')},5621:function(e){"use strict";e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#080808","images":{"fallback":{"src":"/static/f099332cfd56b0a6ed71067505fa9cd9/82260/teddy.png","srcSet":"/static/f099332cfd56b0a6ed71067505fa9cd9/5b003/teddy.png 82w,\\n/static/f099332cfd56b0a6ed71067505fa9cd9/05635/teddy.png 164w,\\n/static/f099332cfd56b0a6ed71067505fa9cd9/82260/teddy.png 327w","sizes":"(min-width: 327px) 327px, 100vw"},"sources":[{"srcSet":"/static/f099332cfd56b0a6ed71067505fa9cd9/eadb4/teddy.webp 82w,\\n/static/f099332cfd56b0a6ed71067505fa9cd9/f9235/teddy.webp 164w,\\n/static/f099332cfd56b0a6ed71067505fa9cd9/00937/teddy.webp 327w","type":"image/webp","sizes":"(min-width: 327px) 327px, 100vw"}]},"width":327,"height":430}')},5080:function(e){"use strict";e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#6808f8","images":{"fallback":{"src":"/static/f4735c56b85fe906e888a8cc7c90e3f9/e091f/divider.png","srcSet":"/static/f4735c56b85fe906e888a8cc7c90e3f9/3c886/divider.png 720w,\\n/static/f4735c56b85fe906e888a8cc7c90e3f9/6dae7/divider.png 1441w,\\n/static/f4735c56b85fe906e888a8cc7c90e3f9/e091f/divider.png 2881w","sizes":"(min-width: 2881px) 2881px, 100vw"},"sources":[{"srcSet":"/static/f4735c56b85fe906e888a8cc7c90e3f9/5e12a/divider.webp 720w,\\n/static/f4735c56b85fe906e888a8cc7c90e3f9/4ed07/divider.webp 1441w,\\n/static/f4735c56b85fe906e888a8cc7c90e3f9/f8712/divider.webp 2881w","type":"image/webp","sizes":"(min-width: 2881px) 2881px, 100vw"}]},"width":2881,"height":274}')},7674:function(e){"use strict";e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#080808","images":{"fallback":{"src":"/static/1867c8377f04fbf0604e1273d0d77254/ad998/twitter.png","srcSet":"/static/1867c8377f04fbf0604e1273d0d77254/7ceb7/twitter.png 18w,\\n/static/1867c8377f04fbf0604e1273d0d77254/83fe9/twitter.png 35w,\\n/static/1867c8377f04fbf0604e1273d0d77254/ad998/twitter.png 70w,\\n/static/1867c8377f04fbf0604e1273d0d77254/ba5dd/twitter.png 140w","sizes":"(min-width: 70px) 70px, 100vw"},"sources":[{"srcSet":"/static/1867c8377f04fbf0604e1273d0d77254/4f7ad/twitter.webp 18w,\\n/static/1867c8377f04fbf0604e1273d0d77254/dbb7e/twitter.webp 35w,\\n/static/1867c8377f04fbf0604e1273d0d77254/299bc/twitter.webp 70w,\\n/static/1867c8377f04fbf0604e1273d0d77254/29111/twitter.webp 140w","type":"image/webp","sizes":"(min-width: 70px) 70px, 100vw"}]},"width":70,"height":70}')},6282:function(e){"use strict";e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#080808","images":{"fallback":{"src":"/static/ce3b3b42feee2117d3af7179f7a71c86/ad998/github.png","srcSet":"/static/ce3b3b42feee2117d3af7179f7a71c86/7ceb7/github.png 18w,\\n/static/ce3b3b42feee2117d3af7179f7a71c86/83fe9/github.png 35w,\\n/static/ce3b3b42feee2117d3af7179f7a71c86/ad998/github.png 70w,\\n/static/ce3b3b42feee2117d3af7179f7a71c86/ba5dd/github.png 140w","sizes":"(min-width: 70px) 70px, 100vw"},"sources":[{"srcSet":"/static/ce3b3b42feee2117d3af7179f7a71c86/4f7ad/github.webp 18w,\\n/static/ce3b3b42feee2117d3af7179f7a71c86/dbb7e/github.webp 35w,\\n/static/ce3b3b42feee2117d3af7179f7a71c86/299bc/github.webp 70w,\\n/static/ce3b3b42feee2117d3af7179f7a71c86/29111/github.webp 140w","type":"image/webp","sizes":"(min-width: 70px) 70px, 100vw"}]},"width":70,"height":70}')},3682:function(e){"use strict";e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#f8f8f8","images":{"fallback":{"src":"/static/eb1de8d74550829d0b020038abc69dea/2e68b/m.png","srcSet":"/static/eb1de8d74550829d0b020038abc69dea/b4afd/m.png 22w,\\n/static/eb1de8d74550829d0b020038abc69dea/c8cfc/m.png 44w,\\n/static/eb1de8d74550829d0b020038abc69dea/2e68b/m.png 88w","sizes":"(min-width: 88px) 88px, 100vw"},"sources":[{"srcSet":"/static/eb1de8d74550829d0b020038abc69dea/fb3ee/m.webp 22w,\\n/static/eb1de8d74550829d0b020038abc69dea/feaa7/m.webp 44w,\\n/static/eb1de8d74550829d0b020038abc69dea/20458/m.webp 88w","type":"image/webp","sizes":"(min-width: 88px) 88px, 100vw"}]},"width":88,"height":228}')},9435:function(e){"use strict";e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#f8e8d8","images":{"fallback":{"src":"/static/f0a3ed1b9b767c931d24606a7f81097e/a4f92/baby.png","srcSet":"/static/f0a3ed1b9b767c931d24606a7f81097e/760a0/baby.png 120w,\\n/static/f0a3ed1b9b767c931d24606a7f81097e/67bd8/baby.png 240w,\\n/static/f0a3ed1b9b767c931d24606a7f81097e/a4f92/baby.png 480w,\\n/static/f0a3ed1b9b767c931d24606a7f81097e/5098c/baby.png 960w","sizes":"(min-width: 480px) 480px, 100vw"},"sources":[{"srcSet":"/static/f0a3ed1b9b767c931d24606a7f81097e/807fc/baby.webp 120w,\\n/static/f0a3ed1b9b767c931d24606a7f81097e/4f7ef/baby.webp 240w,\\n/static/f0a3ed1b9b767c931d24606a7f81097e/9fc32/baby.webp 480w,\\n/static/f0a3ed1b9b767c931d24606a7f81097e/3bd25/baby.webp 960w","type":"image/webp","sizes":"(min-width: 480px) 480px, 100vw"}]},"width":480,"height":500}')}}]);
//# sourceMappingURL=component---src-pages-index-tsx-c148afc386fd9c56c774.js.map
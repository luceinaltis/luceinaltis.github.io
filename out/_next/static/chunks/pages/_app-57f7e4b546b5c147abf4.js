_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[6],{"/0+H":function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=c,t.useAmp=function(){return c(a.default.useContext(o.AmpStateContext))};var r,a=(r=n("q1tI"))&&r.__esModule?r:{default:r},o=n("lwAK");function c(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,a=void 0!==r&&r,o=e.hasQuery,c=void 0!==o&&o;return n||a&&c}},0:function(e,t,n){n("74v/"),e.exports=n("nOHt")},"6i7Z":function(e,t,n){},"74v/":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n("cha2")}])},"8Kt/":function(e,t,n){"use strict";n("lSNA");t.__esModule=!0,t.defaultHead=l,t.default=void 0;var r,a=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=s();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var o=r?Object.getOwnPropertyDescriptor(e,a):null;o&&(o.get||o.set)?Object.defineProperty(n,a,o):n[a]=e[a]}n.default=e,t&&t.set(e,n);return n}(n("q1tI")),o=(r=n("Xuae"))&&r.__esModule?r:{default:r},c=n("lwAK"),i=n("FYa8"),u=n("/0+H");function s(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return s=function(){return e},e}function l(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[a.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(a.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function f(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===a.default.Fragment?e.concat(a.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var d=["name","httpEquiv","charSet","itemProp"];function p(e,t){return e.reduce((function(e,t){var n=a.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(f,[]).reverse().concat(l(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(a){var o=!0;if(a.key&&"number"!==typeof a.key&&a.key.indexOf("$")>0){var c=a.key.slice(a.key.indexOf("$")+1);e.has(c)?o=!1:e.add(c)}switch(a.type){case"title":case"base":t.has(a.type)?o=!1:t.add(a.type);break;case"meta":for(var i=0,u=d.length;i<u;i++){var s=d[i];if(a.props.hasOwnProperty(s))if("charSet"===s)n.has(s)?o=!1:n.add(s);else{var l=a.props[s],f=r[s]||new Set;f.has(l)?o=!1:(f.add(l),r[s]=f)}}}return o}}()).reverse().map((function(e,t){var n=e.key||t;return a.default.cloneElement(e,{key:n})}))}function h(e){var t=e.children,n=(0,a.useContext)(c.AmpStateContext),r=(0,a.useContext)(i.HeadManagerContext);return a.default.createElement(o.default,{reduceComponentsToState:p,headManager:r,inAmpMode:(0,u.isInAmpMode)(n)},t)}h.rewind=function(){};var m=h;t.default=m},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},EbDI:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},"H/sG":function(e,t,n){},Ijbi:function(e,t,n){var r=n("WkPL");e.exports=function(e){if(Array.isArray(e))return r(e)}},RIqP:function(e,t,n){var r=n("Ijbi"),a=n("EbDI"),o=n("ZhPi"),c=n("Bnag");e.exports=function(e){return r(e)||a(e)||o(e)||c()}},Xuae:function(e,t,n){"use strict";var r=n("RIqP"),a=n("lwsE"),o=n("W8MJ"),c=(n("PJYZ"),n("7W2i")),i=n("a1gu"),u=n("Nsbk");function s(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=u(e);if(t){var a=u(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return i(this,n)}}t.__esModule=!0,t.default=void 0;var l=n("q1tI"),f=function(e){c(n,e);var t=s(n);function n(e){var o;return a(this,n),(o=t.call(this,e))._hasHeadManager=void 0,o.emitChange=function(){o._hasHeadManager&&o.props.headManager.updateHead(o.props.reduceComponentsToState(r(o.props.headManager.mountedInstances),o.props))},o._hasHeadManager=o.props.headManager&&o.props.headManager.mountedInstances,o}return o(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(l.Component);t.default=f},YFqc:function(e,t,n){e.exports=n("cTJO")},cTJO:function(e,t,n){"use strict";var r=n("J4zp"),a=n("284h");t.__esModule=!0,t.default=void 0;var o=a(n("q1tI")),c=n("elyg"),i=n("nOHt"),u=n("vNVm"),s={};function l(e,t,n,r){if((0,c.isLocalURL)(t)){e.prefetch(t,n,r).catch((function(e){0}));var a=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;s[t+"%"+n+(a?"%"+a:"")]=!0}}var f=function(e){var t=!1!==e.prefetch,n=(0,i.useRouter)(),a=n&&n.pathname||"/",f=o.default.useMemo((function(){var t=(0,c.resolveHref)(a,e.href,!0),n=r(t,2),o=n[0],i=n[1];return{href:o,as:e.as?(0,c.resolveHref)(a,e.as):i||o}}),[a,e.href,e.as]),d=f.href,p=f.as,h=e.children,m=e.replace,v=e.shallow,b=e.scroll,y=e.locale;"string"===typeof h&&(h=o.default.createElement("a",null,h));var g=o.Children.only(h),j=g&&"object"===typeof g&&g.ref,_=(0,u.useIntersection)({rootMargin:"200px"}),O=r(_,2),w=O[0],x=O[1],M=o.default.useCallback((function(e){w(e),j&&("function"===typeof j?j(e):"object"===typeof j&&(j.current=e))}),[j,w]);(0,o.useEffect)((function(){var e=x&&t&&(0,c.isLocalURL)(d),r="undefined"!==typeof y?y:n&&n.locale,a=s[d+"%"+p+(r?"%"+r:"")];e&&!a&&l(n,d,p,{locale:r})}),[p,d,x,y,t,n]);var k={ref:M,onClick:function(e){g.props&&"function"===typeof g.props.onClick&&g.props.onClick(e),e.defaultPrevented||function(e,t,n,r,a,o,i,u){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,c.isLocalURL)(n))&&(e.preventDefault(),null==i&&(i=r.indexOf("#")<0),t[a?"replace":"push"](n,r,{shallow:o,locale:u}).then((function(e){e&&i&&(window.scrollTo(0,0),document.body.focus())})))}(e,n,d,p,m,v,b,y)},onMouseEnter:function(e){(0,c.isLocalURL)(d)&&(g.props&&"function"===typeof g.props.onMouseEnter&&g.props.onMouseEnter(e),l(n,d,p,{priority:!0}))}};return(e.passHref||"a"===g.type&&!("href"in g.props))&&(k.href=(0,c.addBasePath)((0,c.addLocale)(p,"undefined"!==typeof y?y:n&&n.locale,n&&n.defaultLocale))),o.default.cloneElement(g,k)};t.default=f},cha2:function(e,t,n){"use strict";n.r(t);var r=n("rePB"),a=n("nKUr"),o=(n("H/sG"),n("6i7Z"),n("8Kt/")),c=n.n(o),i=n("nOHt"),u=n("q1tI"),s=n("YFqc"),l=n.n(s),f=n("fb8J"),d=n.n(f),p=function(){var e=Object(u.useRef)(0),t=Object(u.useRef)(0),n=Object(u.useRef)(null),r=Object(u.useState)(0),o=r[0],c=r[1],s=Object(u.useRef)(!1),f=Object(i.useRouter)();return Object(u.useEffect)((function(){c(0),null!=n.current&&(n.current.style.marginTop="0px"),null!=n.current&&"/log/[id]"!==f.pathname&&(n.current.style.background="#f8f9fb")}),[f.pathname]),Object(u.useEffect)((function(){var r=function(){s.current||(!function(){if(null!=n.current){e.current=window.pageYOffset,e.current<10?(n.current.style.boxShadow="none","/log/[id]"!==f.pathname&&(n.current.style.background="#f8f9fb")):(n.current.style.boxShadow="rgba(0, 0, 0, 0.08) 0px 0px 8px",n.current.style.background="#ffffff");var r=n.current.getBoundingClientRect().height;if(t.current<e.current&&o<=0)c(o-(e.current-t.current));else if(o<-r)c(-r);else if(o<0){var a=o+(-e.current+t.current);a>0&&(a=0),c(a)}e.current<10&&c(0),n.current.style.marginTop="".concat(o,"px"),t.current=e.current}}(),setTimeout((function(){s.current=!1}),3)),s.current=!0};return window.addEventListener("scroll",r),function(){window.removeEventListener("scroll",r)}}),[o]),Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("header",{className:d.a.header_fixed,ref:n,children:Object(a.jsxs)("div",{className:"home__container",children:[Object(a.jsx)("div",{className:d.a.logo__wrapper,children:Object(a.jsx)(l.a,{href:"/",children:Object(a.jsx)("a",{children:Object(a.jsx)("div",{className:d.a.logo,children:"luce.log"})})})}),Object(a.jsx)("div",{children:Object(a.jsxs)("div",{className:d.a.categories__wrapper,children:[Object(a.jsx)(l.a,{href:"/",children:Object(a.jsx)("a",{className:"/"===f.pathname?d.a.active:d.a.inactive,children:"\uae30\ub85d"})}),Object(a.jsx)(l.a,{href:"/tags",children:Object(a.jsx)("a",{className:"/tags"===f.pathname?d.a.active:d.a.inactive,children:"\ud0dc\uadf8 \ubaa9\ub85d"})}),Object(a.jsx)(l.a,{href:"/about",children:Object(a.jsx)("a",{className:"/about"===f.pathname?d.a.active:d.a.inactive,children:"\uc18c\uac1c"})}),Object(a.jsx)("span",{className:d.a.desktop,style:"/"===f.pathname?{left:"calc(2.25rem)",width:"2.5rem"}:"/tags"===f.pathname?{left:"calc(7rem + 1rem)",width:"5rem"}:"/about"===f.pathname?{left:"calc(14rem + 2.25rem)",width:"2.5rem"}:{left:"-100%"}}),Object(a.jsx)("span",{className:d.a.mobile,style:"/"===f.pathname?{left:"calc(1.5rem)",width:"2rem"}:"/tags"===f.pathname?{left:"calc(5rem + .5rem)",width:"4rem"}:"/about"===f.pathname?{left:"calc(10rem + 1.5rem)",width:"2rem"}:{left:"-100%"}})]})})]})}),Object(a.jsx)("header",{className:d.a.header})]})},h=n("iuIF"),m=n.n(h),v=function(){return Object(a.jsx)("footer",{className:m.a.footer,children:Object(a.jsxs)("div",{children:["Copyright ",(new Date).getFullYear(),". luce.log. All rights reserved."]})})},b=function(e){var t=e.children;return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(p,{}),t,Object(a.jsx)(v,{})]})};function y(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function g(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?y(Object(n),!0).forEach((function(t){Object(r.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):y(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}t.default=function(e){var t=e.Component,n=e.pageProps,r=Object(i.useRouter)();return Object(u.useEffect)((function(){"/log/[id]"===r.pathname?document.body.style.background="white":document.body.style.background="#f8f9fb"}),[r.pathname]),Object(a.jsxs)(b,{children:[Object(a.jsxs)(c.a,{children:[Object(a.jsx)("link",{rel:"stylesheet",href:"https://use.fontawesome.com/releases/v5.15.1/css/all.css",integrity:"sha384-vp86vTRFVJgpjF9jiIGPEEqYqlDwgyBgEF109VFjmqGmIY/Y4HV4d3Gp2irVfcrp",crossOrigin:"anonymous"}),Object(a.jsx)("link",{rel:"stylesheet",href:"https://fonts.googleapis.com/css2?family=Crimson+Pro"}),Object(a.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),Object(a.jsx)("link",{rel:"canonical",href:"https://www.luce.today".concat(r.asPath)})]}),Object(a.jsx)(t,g({},n))]})}},fb8J:function(e,t,n){e.exports={header_fixed:"Header_header_fixed__iK7cE",header:"Header_header__2oobP",logo__wrapper:"Header_logo__wrapper__3VRhM",active:"Header_active__1r7Q8",inactive:"Header_inactive__11Dfd",categories__wrapper:"Header_categories__wrapper__ZDIZ9",desktop:"Header_desktop__2rFne",mobile:"Header_mobile__1P7hZ",logo:"Header_logo__2OoNp",morphing:"Header_morphing__24CJ5"}},iuIF:function(e,t,n){e.exports={footer:"Footer_footer__3-562"}},lSNA:function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},lwAK:function(e,t,n){"use strict";var r;t.__esModule=!0,t.AmpStateContext=void 0;var a=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.AmpStateContext=a},rePB:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",(function(){return r}))},vNVm:function(e,t,n){"use strict";var r=n("J4zp"),a=n("TqRt");t.__esModule=!0,t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!i,a=(0,o.useRef)(),s=(0,o.useState)(!1),l=r(s,2),f=l[0],d=l[1],p=(0,o.useCallback)((function(e){a.current&&(a.current(),a.current=void 0),n||f||e&&e.tagName&&(a.current=function(e,t,n){var r=function(e){var t=e.rootMargin||"",n=u.get(t);if(n)return n;var r=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return u.set(t,n={id:t,observer:a,elements:r}),n}(n),a=r.id,o=r.observer,c=r.elements;return c.set(e,t),o.observe(e),function(){o.unobserve(e),0===c.size&&(o.disconnect(),u.delete(a))}}(e,(function(e){return e&&d(e)}),{rootMargin:t}))}),[n,t,f]);return(0,o.useEffect)((function(){i||f||(0,c.default)((function(){return d(!0)}))}),[f]),[p,f]};var o=n("q1tI"),c=a(n("0G5g")),i="undefined"!==typeof IntersectionObserver;var u=new Map}},[[0,0,1,2]]]);
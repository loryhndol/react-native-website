(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[3919],{35318:function(e,t,n){"use strict";n.d(t,{Zo:function(){return l},kt:function(){return f}});var r=n(27378);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),p=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},v=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),v=p(n),f=a,d=v["".concat(u,".").concat(f)]||v[f]||s[f]||i;return n?r.createElement(d,o(o({ref:t},l),{},{components:n})):r.createElement(d,o({ref:t},l))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=v;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}v.displayName="MDXCreateElement"},94656:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return p},default:function(){return s}});var r=n(29603),a=n(50120),i=(n(27378),n(35318)),o={id:"navigation",title:"\u4f7f\u7528\u5bfc\u822a\u5668\u8df3\u8f6c\u9875\u9762"},c=void 0,u={unversionedId:"navigation",id:"navigation",isDocsHomePage:!1,title:"\u4f7f\u7528\u5bfc\u822a\u5668\u8df3\u8f6c\u9875\u9762",description:"\u79fb\u52a8\u5e94\u7528\u57fa\u672c\u4e0d\u4f1a\u53ea\u7531\u4e00\u4e2a\u9875\u9762\u7ec4\u6210\u3002\u7ba1\u7406\u591a\u4e2a\u9875\u9762\u7684\u5448\u73b0\u3001\u8df3\u8f6c\u7684\u7ec4\u4ef6\u5c31\u662f\u6211\u4eec\u901a\u5e38\u6240\u8bf4\u7684\u5bfc\u822a\u5668\uff08navigator\uff09\u3002",source:"@site/../cndocs/navigation.md",sourceDirName:".",slug:"/navigation",permalink:"/docs/next/navigation",editUrl:"https://github.com/reactnativecn/react-native-website/blob/production/cnwebsite/../cndocs/navigation.md",tags:[],version:"current",frontMatter:{id:"navigation",title:"\u4f7f\u7528\u5bfc\u822a\u5668\u8df3\u8f6c\u9875\u9762"},sidebar:"docs",previous:{title:"\u5904\u7406\u89e6\u6478\u4e8b\u4ef6",permalink:"/docs/next/handling-touches"},next:{title:"\u52a8\u753b",permalink:"/docs/next/animations"}},p=[{value:"React Navigation",id:"react-navigation",children:[]}],l={toc:p};function s(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u79fb\u52a8\u5e94\u7528\u57fa\u672c\u4e0d\u4f1a\u53ea\u7531\u4e00\u4e2a\u9875\u9762\u7ec4\u6210\u3002\u7ba1\u7406\u591a\u4e2a\u9875\u9762\u7684\u5448\u73b0\u3001\u8df3\u8f6c\u7684\u7ec4\u4ef6\u5c31\u662f\u6211\u4eec\u901a\u5e38\u6240\u8bf4\u7684\u5bfc\u822a\u5668\uff08navigator\uff09\u3002"),(0,i.kt)("p",null,"\u672c\u6587\u6863\u603b\u7ed3\u5bf9\u6bd4\u4e86 React Native \u4e2d\u73b0\u6709\u7684\u51e0\u4e2a\u5bfc\u822a\u7ec4\u4ef6\u3002\u5982\u679c\u4f60\u521a\u5f00\u59cb\u63a5\u89e6\uff0c\u90a3\u4e48\u76f4\u63a5\u9009\u62e9",(0,i.kt)("a",{parentName:"p",href:"/docs/next/navigation#react-navigation"},"React Navigation"),"\u5c31\u597d\u3002 React Navigation \u63d0\u4f9b\u4e86\u7b80\u5355\u6613\u7528\u7684\u8de8\u5e73\u53f0\u5bfc\u822a\u65b9\u6848\uff0c\u5728 iOS \u548c Android \u4e0a\u90fd\u53ef\u4ee5\u8fdb\u884c\u7ffb\u9875\u5f0f\u3001tab \u9009\u9879\u5361\u5f0f\u548c\u62bd\u5c49\u5f0f\u7684\u5bfc\u822a\u5e03\u5c40\u3002"),(0,i.kt)("p",null,"\u5982\u679c\u4f60\u60f3\u540c\u65f6\u5728iOS\u548cAndroid\u4e0a\u8fbe\u5230\u770b\u8d77\u6765\u50cf\u539f\u751f\uff0c\u6216\u8005\u4f60\u60f3\u628aRN\u6574\u5408\u5230\u4e00\u4e2a\u5df2\u7ecf\u6709\u539f\u751f\u5bfc\u822a\u7ba1\u7406\u7684APP\u91cc, \u4e0b\u9762\u8fd9\u4e2a\u5e93\u63d0\u4f9b\u4e86\u5728\u4e24\u4e2a\u5e73\u53f0\u90fd\u9002\u7528\u7684\u539f\u751f\u5bfc\u822a: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/wix/react-native-navigation"},"react-native-navigation"),"."),(0,i.kt)("h2",{id:"react-navigation"},"React Navigation"),(0,i.kt)("p",null,"\u793e\u533a\u4eca\u540e\u4e3b\u63a8\u7684\u65b9\u6848\u662f\u4e00\u4e2a\u5355\u72ec\u7684\u5bfc\u822a\u5e93",(0,i.kt)("inlineCode",{parentName:"p"},"react-navigation"),"\uff0c\u5b83\u7684\u4f7f\u7528\u5341\u5206\u7b80\u5355\u3002React Navigation \u4e2d\u7684\u89c6\u56fe\u662f\u539f\u751f\u7ec4\u4ef6\uff0c\u540c\u65f6\u7528\u5230\u4e86\u8fd0\u884c\u5728\u539f\u751f\u7ebf\u7a0b\u4e0a\u7684",(0,i.kt)("inlineCode",{parentName:"p"},"Animated"),"\u52a8\u753b\u5e93\uff0c\u56e0\u800c\u6027\u80fd\u8868\u73b0\u5341\u5206\u6d41\u7545\u3002\u6b64\u5916\u5176\u52a8\u753b\u5f62\u5f0f\u548c\u624b\u52bf\u90fd\u975e\u5e38\u4fbf\u4e8e\u5b9a\u5236\u3002"),(0,i.kt)("p",null,"\u8981\u60f3\u8be6\u7ec6\u4e86\u89e3 React Navigation\u7684\u5177\u4f53\u7528\u6cd5\uff0c\u8bf7\u8bbf\u95ee\u5176",(0,i.kt)("a",{parentName:"p",href:"https://reactnavigation.org/"},"\u5b98\u65b9\u7f51\u7ad9"),"\uff0c\u7f51\u7ad9\u53f3\u4e0a\u89d2\u6709\u4e2d\u6587\u7ffb\u8bd1\uff0c\u4f46\u5185\u5bb9\u53ef\u80fd\u4f1a\u6709\u6240\u6ede\u540e\u3002"))}s.isMDXComponent=!0}}]);
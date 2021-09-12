(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[94570],{35318:function(t,e,a){"use strict";a.d(e,{Zo:function(){return d},kt:function(){return c}});var n=a(27378);function l(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function r(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?r(Object(a),!0).forEach((function(e){l(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function m(t,e){if(null==t)return{};var a,n,l=function(t,e){if(null==t)return{};var a,n,l={},r=Object.keys(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||(l[a]=t[a]);return l}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(l[a]=t[a])}return l}var u=n.createContext({}),o=function(t){var e=n.useContext(u),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},d=function(t){var e=o(t.components);return n.createElement(u.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},k=n.forwardRef((function(t,e){var a=t.components,l=t.mdxType,r=t.originalType,u=t.parentName,d=m(t,["components","mdxType","originalType","parentName"]),k=o(a),c=l,h=k["".concat(u,".").concat(c)]||k[c]||p[c]||r;return a?n.createElement(h,i(i({ref:e},d),{},{components:a})):n.createElement(h,i({ref:e},d))}));function c(t,e){var a=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var r=a.length,i=new Array(r);i[0]=k;var m={};for(var u in e)hasOwnProperty.call(e,u)&&(m[u]=e[u]);m.originalType=t,m.mdxType="string"==typeof t?t:l,i[1]=m;for(var o=2;o<r;o++)i[o]=a[o];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},11614:function(t,e,a){"use strict";a.r(e),a.d(e,{frontMatter:function(){return i},contentTitle:function(){return m},metadata:function(){return u},toc:function(){return o},default:function(){return p}});var n=a(29603),l=a(50120),r=(a(27378),a(35318)),i={id:"slider",title:"\ud83d\udea7 Slider"},m=void 0,u={unversionedId:"slider",id:"version-0.63/slider",isDocsHomePage:!1,title:"\ud83d\udea7 Slider",description:"\u5df2\u8fc7\u65f6\u3002 Use @react-native-community/slider instead.",source:"@site/versioned_docs/version-0.63/slider.md",sourceDirName:".",slug:"/slider",permalink:"/docs/0.63/slider",editUrl:"https://github.com/reactnativecn/react-native-website/blob/production/cnwebsite/../cndocs/slider.md",tags:[],version:"0.63",frontMatter:{id:"slider",title:"\ud83d\udea7 Slider"}},o=[{value:"Props",id:"props",children:[{value:"<code>style</code>",id:"style",children:[]},{value:"<code>disabled</code>",id:"disabled",children:[]},{value:"<code>maximumValue</code>",id:"maximumvalue",children:[]},{value:"<code>minimumTrackTintColor</code>",id:"minimumtracktintcolor",children:[]},{value:"<code>minimumValue</code>",id:"minimumvalue",children:[]},{value:"<code>onSlidingComplete</code>",id:"onslidingcomplete",children:[]},{value:"<code>onValueChange</code>",id:"onvaluechange",children:[]},{value:"<code>step</code>",id:"step",children:[]},{value:"<code>maximumTrackTintColor</code>",id:"maximumtracktintcolor",children:[]},{value:"<code>testID</code>",id:"testid",children:[]},{value:"<code>value</code>",id:"value",children:[]},{value:"<code>thumbTintColor</code>",id:"thumbtintcolor",children:[]},{value:"<code>maximumTrackImage</code>",id:"maximumtrackimage",children:[]},{value:"<code>minimumTrackImage</code>",id:"minimumtrackimage",children:[]},{value:"<code>thumbImage</code>",id:"thumbimage",children:[]},{value:"<code>trackImage</code>",id:"trackimage",children:[]}]}],d={toc:o};function p(t){var e=t.components,a=(0,l.Z)(t,["components"]);return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"\u5df2\u8fc7\u65f6\u3002")," Use ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/react-native-community/react-native-slider"},"@react-native-community/slider")," instead.")),(0,r.kt)("p",null,"\u7528\u4e8e\u9009\u62e9\u4e00\u4e2a\u8303\u56f4\u503c\u7684\u7ec4\u4ef6\u3002"),(0,r.kt)("hr",null),(0,r.kt)("h1",{id:"\u6587\u6863"},"\u6587\u6863"),(0,r.kt)("h2",{id:"props"},"Props"),(0,r.kt)("h3",{id:"style"},(0,r.kt)("inlineCode",{parentName:"h3"},"style")),(0,r.kt)("p",null,"Used to style and layout the ",(0,r.kt)("inlineCode",{parentName:"p"},"Slider"),". See ",(0,r.kt)("inlineCode",{parentName:"p"},"StyleSheet.js")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"ViewStylePropTypes.js")," for more info."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u5fc5\u9700"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"View.style"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426")))),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"disabled"},(0,r.kt)("inlineCode",{parentName:"h3"},"disabled")),(0,r.kt)("p",null,"\u5982\u679c\u4e3a true\uff0c\u7528\u6237\u5c31\u4e0d\u80fd\u79fb\u52a8\u6ed1\u5757\u3002\u9ed8\u8ba4\u4e3a false\u3002"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u5fc5\u9700"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"bool"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426")))),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"maximumvalue"},(0,r.kt)("inlineCode",{parentName:"h3"},"maximumValue")),(0,r.kt)("p",null,"\u6ed1\u5757\u7684\u6700\u5927\u503c\uff08\u5f53\u6ed1\u5757\u6ed1\u5230\u6700\u53f3\u7aef\u65f6\u8868\u793a\u7684\u503c\uff09\u3002\u9ed8\u8ba4\u4e3a 1\u3002"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u5fc5\u9700"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"number"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426")))),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"minimumtracktintcolor"},(0,r.kt)("inlineCode",{parentName:"h3"},"minimumTrackTintColor")),(0,r.kt)("p",null,"\u6ed1\u5757\u5de6\u4fa7\u8f68\u9053\u7684\u989c\u8272\u3002\u5728 iOS \u4e0a\u9ed8\u8ba4\u4e3a\u4e00\u4e2a\u84dd\u8272\u7684\u6e10\u53d8\u8272\u3002"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u5fc5\u9700"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/0.63/colors"},"color")),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426")))),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"minimumvalue"},(0,r.kt)("inlineCode",{parentName:"h3"},"minimumValue")),(0,r.kt)("p",null,"\u6ed1\u5757\u7684\u6700\u5c0f\u503c\uff08\u5f53\u6ed1\u5757\u6ed1\u5230\u6700\u5de6\u7aef\u65f6\u8868\u793a\u7684\u503c\uff09\u3002\u9ed8\u8ba4\u4e3a 0\u3002"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u5fc5\u9700"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"number"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426")))),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"onslidingcomplete"},(0,r.kt)("inlineCode",{parentName:"h3"},"onSlidingComplete")),(0,r.kt)("p",null,"\u7528\u6237\u677e\u5f00\u6ed1\u5757\u7684\u65f6\u5019\u8c03\u7528\u6b64\u56de\u8c03\uff0c\u65e0\u8bba\u503c\u662f\u5426\u53d8\u5316\u3002\u56de\u8c03\u503c\u4e3a\u5f53\u524d\u503c\u3002"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u5fc5\u9700"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"function"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426")))),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"onvaluechange"},(0,r.kt)("inlineCode",{parentName:"h3"},"onValueChange")),(0,r.kt)("p",null,"\u5728\u7528\u6237\u62d6\u52a8\u6ed1\u5757\u7684\u8fc7\u7a0b\u4e2d\u4e0d\u65ad\u8c03\u7528\u6b64\u56de\u8c03\u3002"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u5fc5\u9700"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"function"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426")))),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"step"},(0,r.kt)("inlineCode",{parentName:"h3"},"step")),(0,r.kt)("p",null,"\u6ed1\u5757\u7684\u6b65\u957f\uff08\u62d6\u52a8\u53d8\u5316\u7684\u6700\u5c0f\u5355\u5143\uff09\u3002\u8fd9\u4e2a\u503c\u5e94\u8be5\u5728 0 \u5230(maximumValue - minimumValue)\u4e4b\u95f4\u3002\u9ed8\u8ba4\u503c\u4e3a 0\u3002"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u5fc5\u9700"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"number"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426")))),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"maximumtracktintcolor"},(0,r.kt)("inlineCode",{parentName:"h3"},"maximumTrackTintColor")),(0,r.kt)("p",null,"\u6ed1\u5757\u53f3\u4fa7\u8f68\u9053\u7684\u989c\u8272\u3002\u5728 iOS \u4e0a\u9ed8\u8ba4\u4e3a\u4e00\u4e2a\u7070\u8272\u7684\u6e10\u53d8\u8272\u3002"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u5fc5\u9700"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/0.63/colors"},"color")),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426")))),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"testid"},(0,r.kt)("inlineCode",{parentName:"h3"},"testID")),(0,r.kt)("p",null,"Used to locate this view in UI automation tests."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u5fc5\u9700"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426")))),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"value"},(0,r.kt)("inlineCode",{parentName:"h3"},"value")),(0,r.kt)("p",null,"\u6ed1\u5757\u7684\u521d\u59cb\u503c\u3002\u8fd9\u4e2a\u503c\u5e94\u8be5\u5728\u6700\u5c0f\u503c\u548c\u6700\u5927\u503c\u4e4b\u95f4\u3002\u9ed8\u8ba4\u503c\u662f 0\u3002"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"\u6ce8\u610f\uff1a\u8fd9\u4e0d\u662f\u4e00\u4e2a\u53d7\u63a7\u7ec4\u4ef6\uff01"),"\u4e5f\u5c31\u662f\u8bf4\uff0c\u4f60\u4e0d\u9700\u8981\u5728\u6ed1\u52a8\u8fc7\u7a0b\u4e2d\u53bb\u624b\u52a8\u66f4\u65b0\u503c\u3002"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u5fc5\u9700"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"number"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426")))),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"thumbtintcolor"},(0,r.kt)("inlineCode",{parentName:"h3"},"thumbTintColor")),(0,r.kt)("p",null,"Color of the foreground switch grip."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u5fc5\u9700"),(0,r.kt)("th",{parentName:"tr",align:null},"\u5e73\u53f0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/0.63/colors"},"color")),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:null},"Android")))),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"maximumtrackimage"},(0,r.kt)("inlineCode",{parentName:"h3"},"maximumTrackImage")),(0,r.kt)("p",null,"\u6307\u5b9a\u4e00\u4e2a\u6ed1\u5757\u53f3\u4fa7\u8f68\u9053\u80cc\u666f\u56fe\u3002\u4ec5\u652f\u6301\u9759\u6001\u56fe\u7247\u3002\u56fe\u7247\u6700\u5de6\u8fb9\u7684\u50cf\u7d20\u4f1a\u88ab\u5e73\u94fa\u76f4\u81f3\u586b\u6ee1\u53f3\u4fa7\u8f68\u9053\u3002"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u5fc5\u9700"),(0,r.kt)("th",{parentName:"tr",align:null},"\u5e73\u53f0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Image.propTypes.source"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:null},"iOS")))),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"minimumtrackimage"},(0,r.kt)("inlineCode",{parentName:"h3"},"minimumTrackImage")),(0,r.kt)("p",null,"\u6307\u5b9a\u4e00\u4e2a\u6ed1\u5757\u5de6\u4fa7\u8f68\u9053\u80cc\u666f\u56fe\u3002\u4ec5\u652f\u6301\u9759\u6001\u56fe\u7247\u3002\u56fe\u7247\u6700\u53f3\u8fb9\u7684\u50cf\u7d20\u4f1a\u88ab\u5e73\u94fa\u76f4\u81f3\u586b\u6ee1\u5de6\u4fa7\u8f68\u9053\u3002"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u5fc5\u9700"),(0,r.kt)("th",{parentName:"tr",align:null},"\u5e73\u53f0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Image.propTypes.source"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:null},"iOS")))),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"thumbimage"},(0,r.kt)("inlineCode",{parentName:"h3"},"thumbImage")),(0,r.kt)("p",null,"\u7ed9\u6ed1\u5757\u8bbe\u7f6e\u4e00\u5f20\u56fe\u7247\u3002\u53ea\u652f\u6301\u9759\u6001\u56fe\u7247\u3002"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u5fc5\u9700"),(0,r.kt)("th",{parentName:"tr",align:null},"\u5e73\u53f0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Image.propTypes.source"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:null},"iOS")))),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"trackimage"},(0,r.kt)("inlineCode",{parentName:"h3"},"trackImage")),(0,r.kt)("p",null,"\u7ed9\u8f68\u9053\u8bbe\u7f6e\u4e00\u5f20\u80cc\u666f\u56fe\u3002\u53ea\u652f\u6301\u9759\u6001\u56fe\u7247\u3002\u56fe\u7247\u6700\u4e2d\u592e\u7684\u50cf\u7d20\u4f1a\u88ab\u5e73\u94fa\u76f4\u81f3\u586b\u6ee1\u8f68\u9053\u3002"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u5fc5\u9700"),(0,r.kt)("th",{parentName:"tr",align:null},"\u5e73\u53f0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Image.propTypes.source"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:null},"iOS")))),(0,r.kt)("hr",null),(0,r.kt)("h5",{id:"\u672c\u6587\u6863\u8d21\u732e\u8005\uff1asunnylqm10000"},"\u672c\u6587\u6863\u8d21\u732e\u8005\uff1a",(0,r.kt)("a",{parentName:"h5",href:"https://github.com/search?q=sunnylqm&type=Users"},"sunnylqm"),"(100.00%)"))}p.isMDXComponent=!0}}]);
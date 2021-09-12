(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[40559],{35318:function(e,t,n){"use strict";n.d(t,{Zo:function(){return d},kt:function(){return s}});var i=n(27378);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=i.createContext({}),p=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=p(e.components);return i.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),m=p(n),s=r,k=m["".concat(l,".").concat(s)]||m[s]||u[s]||o;return n?i.createElement(k,a(a({ref:t},d),{},{components:n})):i.createElement(k,a({ref:t},d))}));function s(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var p=2;p<o;p++)a[p]=n[p];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5127:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return a},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return p},default:function(){return u}});var i=n(29603),r=n(50120),o=(n(27378),n(35318)),a={id:"timepickerandroid",title:"\ud83d\udea7 TimePickerAndroid"},c=void 0,l={unversionedId:"timepickerandroid",id:"timepickerandroid",isDocsHomePage:!1,title:"\ud83d\udea7 TimePickerAndroid",description:"\u5df2\u8fc7\u65f6\u3002 Use @react-native-community/datetimepicker instead.",source:"@site/../cndocs/timepickerandroid.md",sourceDirName:".",slug:"/timepickerandroid",permalink:"/docs/next/timepickerandroid",editUrl:"https://github.com/reactnativecn/react-native-website/blob/production/cnwebsite/../cndocs/timepickerandroid.md",tags:[],version:"current",frontMatter:{id:"timepickerandroid",title:"\ud83d\udea7 TimePickerAndroid"}},p=[{value:"\u793a\u4f8b",id:"\u793a\u4f8b",children:[]},{value:"\u65b9\u6cd5",id:"\u65b9\u6cd5",children:[{value:"<code>open()</code>",id:"open",children:[]},{value:"<code>timeSetAction()</code>",id:"timesetaction",children:[]},{value:"<code>dismissedAction()</code>",id:"dismissedaction",children:[]}]}],d={toc:p};function u(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"\u5df2\u8fc7\u65f6\u3002")," Use ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/react-native-community/react-native-datetimepicker"},"@react-native-community/datetimepicker")," instead.")),(0,o.kt)("p",null,"\u672c\u7ec4\u4ef6\u4f1a\u6253\u5f00\u4e00\u4e2a\u6807\u51c6\u7684 Android \u65f6\u95f4\u9009\u62e9\u5668\u7684\u5bf9\u8bdd\u6846\u3002"),(0,o.kt)("h3",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"try {\n  const {action, hour, minute} = await TimePickerAndroid.open({\n    hour: 14,\n    minute: 0,\n    is24Hour: false, // Will display '2 PM'\n  });\n  if (action !== TimePickerAndroid.dismissedAction) {\n    // Selected hour (0-23), minute (0-59)\n  }\n} catch ({code, message}) {\n  console.warn('Cannot open time picker', message);\n}\n")),(0,o.kt)("hr",null),(0,o.kt)("h1",{id:"\u6587\u6863"},"\u6587\u6863"),(0,o.kt)("h2",{id:"\u65b9\u6cd5"},"\u65b9\u6cd5"),(0,o.kt)("h3",{id:"open"},(0,o.kt)("inlineCode",{parentName:"h3"},"open()")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"static open(options)\n")),(0,o.kt)("p",null,"\u6253\u5f00\u4e00\u4e2a\u6807\u51c6\u7684 Android \u65f6\u95f4\u9009\u62e9\u5668\u7684\u5bf9\u8bdd\u6846\u3002"),(0,o.kt)("p",null,"\u53ef\u9009\u7684",(0,o.kt)("inlineCode",{parentName:"p"},"options"),"\u5bf9\u8c61\u7684 key \u503c\u5982\u4e0b\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"hour")," (0-23) - \u8981\u663e\u793a\u7684\u5c0f\u65f6\uff0c\u9ed8\u8ba4\u4e3a\u5f53\u524d\u65f6\u95f4\u3002"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"minute")," (0-59) - \u8981\u663e\u793a\u7684\u5206\u949f\uff0c\u9ed8\u8ba4\u4e3a\u5f53\u524d\u65f6\u95f4\u3002"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"is24Hour")," (boolean) - \u5982\u679c\u8bbe\u4e3a",(0,o.kt)("inlineCode",{parentName:"li"},"true"),"\uff0c\u5219\u9009\u62e9\u5668\u4f1a\u4f7f\u7528 24 \u5c0f\u65f6\u5236\u3002\u5982\u679c\u8bbe\u4e3a",(0,o.kt)("inlineCode",{parentName:"li"},"false"),"\uff0c\u5219\u4f1a\u989d\u5916\u663e\u793a AM/PM \u7684\u9009\u9879\u3002\u5982\u679c\u4e0d\u8bbe\u5b9a\uff0c\u5219\u91c7\u53d6\u5f53\u524d\u5730\u533a\u7684\u9ed8\u8ba4\u8bbe\u7f6e\u3002"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"mode")," (",(0,o.kt)("inlineCode",{parentName:"li"},"enum('clock', 'spinner', 'default')"),") - set the time picker mode",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"'clock': Show a time picker in clock mode."),(0,o.kt)("li",{parentName:"ul"},"'spinner': Show a time picker in spinner mode."),(0,o.kt)("li",{parentName:"ul"},"'default': Show a default time picker based on Android versions.")))),(0,o.kt)("p",null,"\u5728\u7528\u6237\u9009\u597d\u65f6\u95f4\u540e\u8fd4\u56de\u4e00\u4e2a Promise\uff0c\u56de\u8c03\u53c2\u6570\u4e3a\u4e00\u4e2a\u5bf9\u8c61\uff0c\u5176\u4e2d\u5305\u542b\u6709",(0,o.kt)("inlineCode",{parentName:"p"},"action"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"hour")," (0-23), ",(0,o.kt)("inlineCode",{parentName:"p"},"minute")," (0-59)\u3002\u5982\u679c\u7528\u6237\u53d6\u6d88\u4e86\u5bf9\u8bdd\u6846\uff0cPromise \u4ecd\u7136\u4f1a\u6267\u884c\uff0c\u8fd4\u56de\u7684 action \u4e3a",(0,o.kt)("inlineCode",{parentName:"p"},"TimePickerAndroid.dismissedAction"),"\uff0c\u5176\u4ed6\u51e0\u9879\u53c2\u6570\u5219\u4e3a undefined. \u6240\u4ee5\u8bf7\u5728\u4f7f\u7528\u5176\u4ed6\u503c\u4e4b\u524d",(0,o.kt)("strong",{parentName:"p"},"\u52a1\u5fc5"),"\u5148\u68c0\u67e5",(0,o.kt)("inlineCode",{parentName:"p"},"action"),"\u7684\u503c\u3002"),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"timesetaction"},(0,o.kt)("inlineCode",{parentName:"h3"},"timeSetAction()")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"static timeSetAction()\n")),(0,o.kt)("p",null,"\u5df2\u9009\u4e2d\u4e00\u4e2a\u65f6\u95f4\u3002"),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"dismissedaction"},(0,o.kt)("inlineCode",{parentName:"h3"},"dismissedAction()")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"static dismissedAction()\n")),(0,o.kt)("p",null,"\u5bf9\u8bdd\u6846\u88ab\u53d6\u6d88\u3002"))}u.isMDXComponent=!0}}]);
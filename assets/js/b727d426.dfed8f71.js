(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[61889],{35318:function(e,t,n){"use strict";n.d(t,{Zo:function(){return l},kt:function(){return m}});var a=n(27378);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,h=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return n?a.createElement(h,i(i({ref:t},l),{},{components:n})):a.createElement(h,i({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},51211:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return p},default:function(){return u}});var a=n(29603),r=n(50120),o=(n(27378),n(35318)),i={id:"inputaccessoryview",title:"InputAccessoryView"},c=void 0,s={unversionedId:"inputaccessoryview",id:"version-0.63/inputaccessoryview",isDocsHomePage:!1,title:"InputAccessoryView",description:"A component which enables customization of the keyboard input accessory view on iOS. The input accessory view is displayed above the keyboard whenever a TextInput has focus. This component can be used to create custom toolbars.",source:"@site/versioned_docs/version-0.63/inputaccessoryview.md",sourceDirName:".",slug:"/inputaccessoryview",permalink:"/docs/0.63/inputaccessoryview",editUrl:"https://github.com/reactnativecn/react-native-website/blob/production/cnwebsite/../cndocs/inputaccessoryview.md",tags:[],version:"0.63",frontMatter:{id:"inputaccessoryview",title:"InputAccessoryView"},sidebar:"version-0.63/\u7ec4\u4ef6",previous:{title:"TouchableNativeFeedback",permalink:"/docs/0.63/touchablenativefeedback"},next:{title:"SafeAreaView",permalink:"/docs/0.63/safeareaview"}},p=[{value:"Props",id:"props",children:[{value:"<code>backgroundColor</code>",id:"backgroundcolor",children:[]},{value:"<code>nativeID</code>",id:"nativeid",children:[]},{value:"<code>style</code>",id:"style",children:[]}]}],l={toc:p};function u(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,a.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"A component which enables customization of the keyboard input accessory view on iOS. The input accessory view is displayed above the keyboard whenever a ",(0,o.kt)("inlineCode",{parentName:"p"},"TextInput")," has focus. This component can be used to create custom toolbars."),(0,o.kt)("p",null,"To use this component wrap your custom toolbar with the InputAccessoryView component, and set a ",(0,o.kt)("inlineCode",{parentName:"p"},"nativeID"),". Then, pass that ",(0,o.kt)("inlineCode",{parentName:"p"},"nativeID")," as the ",(0,o.kt)("inlineCode",{parentName:"p"},"inputAccessoryViewID")," of whatever ",(0,o.kt)("inlineCode",{parentName:"p"},"TextInput")," you desire. A simple example:"),(0,o.kt)("div",{className:"snack-player","data-snack-name":"InputAccessoryView","data-snack-description":"Example usage","data-snack-code":"import%20React%2C%20%7B%20useState%20%7D%20from%20'react'%3B%0Aimport%20%7B%20Button%2C%20InputAccessoryView%2C%20ScrollView%2C%20TextInput%20%7D%20from%20'react-native'%3B%0A%0Aexport%20default%20App%20%3D%20()%20%3D%3E%20%7B%0A%20%20const%20inputAccessoryViewID%20%3D%20'uniqueID'%3B%0A%20%20const%20initialText%20%3D%20''%3B%0A%20%20const%20%5Btext%2C%20setText%5D%20%3D%20useState(initialText)%3B%0A%0A%20%20return%20(%0A%20%20%20%20%3C%3E%0A%20%20%20%20%20%20%3CScrollView%20keyboardDismissMode%3D%22interactive%22%3E%0A%20%20%20%20%20%20%20%20%3CTextInput%0A%20%20%20%20%20%20%20%20%20%20style%3D%7B%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20padding%3A%2016%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20marginTop%3A%2050%2C%0A%20%20%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20inputAccessoryViewID%3D%7BinputAccessoryViewID%7D%0A%20%20%20%20%20%20%20%20%20%20onChangeText%3D%7BsetText%7D%0A%20%20%20%20%20%20%20%20%20%20value%3D%7Btext%7D%0A%20%20%20%20%20%20%20%20%20%20placeholder%3D%7B'Please%20type%20here%E2%80%A6'%7D%0A%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%3C%2FScrollView%3E%0A%20%20%20%20%20%20%3CInputAccessoryView%20nativeID%3D%7BinputAccessoryViewID%7D%3E%0A%20%20%20%20%20%20%20%20%3CButton%0A%20%20%20%20%20%20%20%20%20%20onPress%3D%7B()%20%3D%3E%20setText(initialText)%7D%0A%20%20%20%20%20%20%20%20%20%20title%3D%22Clear%20text%22%0A%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%3C%2FInputAccessoryView%3E%0A%20%20%20%20%3C%2F%3E%0A%20%20)%3B%0A%7D","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"ios","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"}),(0,o.kt)("p",null,"This component can also be used to create sticky text inputs (text inputs which are anchored to the top of the keyboard). To do this, wrap a ",(0,o.kt)("inlineCode",{parentName:"p"},"TextInput")," with the ",(0,o.kt)("inlineCode",{parentName:"p"},"InputAccessoryView")," component, and don't set a ",(0,o.kt)("inlineCode",{parentName:"p"},"nativeID"),". For an example, look at ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/facebook/react-native/blob/master/packages/rn-tester/js/examples/InputAccessoryView/InputAccessoryViewExample.js"},"InputAccessoryViewExample.js"),"."),(0,o.kt)("hr",null),(0,o.kt)("h1",{id:"\u6587\u6863"},"\u6587\u6863"),(0,o.kt)("h2",{id:"props"},"Props"),(0,o.kt)("h3",{id:"backgroundcolor"},(0,o.kt)("inlineCode",{parentName:"h3"},"backgroundColor")),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/docs/0.63/colors"},"color"))))),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"nativeid"},(0,o.kt)("inlineCode",{parentName:"h3"},"nativeID")),(0,o.kt)("p",null,"An ID which is used to associate this ",(0,o.kt)("inlineCode",{parentName:"p"},"InputAccessoryView")," to specified TextInput(s)."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"string")))),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"style"},(0,o.kt)("inlineCode",{parentName:"h3"},"style")),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/docs/0.63/view-style-props"},"style"))))),(0,o.kt)("h1",{id:"\u5df2\u77e5\u95ee\u9898"},"\u5df2\u77e5\u95ee\u9898"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/facebook/react-native/issues/18997"},"react-native#18997"),": \u4e0d\u652f\u6301\u591a\u884c\u7684",(0,o.kt)("inlineCode",{parentName:"li"},"TextInput")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/facebook/react-native/issues/20157"},"react-native#20157"),": \u4e0d\u80fd\u548c\u5e95\u90e8 tab \u680f\u4e00\u8d77\u4f7f\u7528")),(0,o.kt)("hr",null),(0,o.kt)("h5",{id:"\u672c\u6587\u6863\u8d21\u732e\u8005\uff1asunnylqm7975-sunnylqm2025"},"\u672c\u6587\u6863\u8d21\u732e\u8005\uff1a",(0,o.kt)("a",{parentName:"h5",href:"https://github.com/search?q=sunnylqm&type=Users"},"sunnylqm"),"(79.75%), ",(0,o.kt)("a",{parentName:"h5",href:"https://github.com/search?q=sunnylqm&type=Users"},"sunnylqm"),"(20.25%)"))}u.isMDXComponent=!0}}]);
(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[9489],{35318:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return p}});var r=n(27378);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=s(n),p=o,f=m["".concat(c,".").concat(p)]||m[p]||d[p]||a;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function p(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},45981:function(e,t,n){"use strict";var r=n(161),o=!!r.Z.canUseDOM&&navigator.platform.startsWith("Mac"),a=!!r.Z.canUseDOM&&navigator.platform.startsWith("Win"),i=o?"ios":"android",l=o?"macos":a?"windows":"linux";t.Z={defaultGuide:"native",defaultOs:l,defaultPackageManager:"npm",defaultPlatform:i,defaultSyntax:"functional",getDevNotesTabs:function(e){return void 0===e&&(e=["android","ios","web","windows"]),[e.includes("android")?{label:"Android",value:"android"}:void 0,e.includes("ios")?{label:"iOS",value:"ios"}:void 0,e.includes("web")?{label:"Web",value:"web"}:void 0,e.includes("windows")?{label:"Windows",value:"windows"}:void 0].filter(Boolean)},guides:[{label:"\u5b8c\u6574\u539f\u751f\u73af\u5883",value:"native"},{label:"\u7b80\u6613\u6c99\u76d2\u73af\u5883",value:"quickstart"}],oses:[{label:"macOS",value:"macos"},{label:"Windows",value:"windows"},{label:"Linux",value:"linux"}],packageManagers:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],platforms:[{label:"Android",value:"android"},{label:"iOS",value:"ios"}],syntax:[{label:"\u51fd\u6570\u5f0f\u7ec4\u4ef6",value:"functional"},{label:"Class \u7ec4\u4ef6",value:"classical"}]}},70517:function(e,t,n){"use strict";var r=n(27378);t.Z=function(e){var t=e.children,n=e.hidden,o=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:o},t)}},64535:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});var r=n(27378),o=n(84956);var a=function(){var e=(0,r.useContext)(o.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},i=n(38944),l="tabItem_c0e5",c="tabItemActive_28AG";var s=function(e){var t,n=e.lazy,o=e.block,s=e.defaultValue,u=e.values,d=e.groupId,m=e.className,p=r.Children.toArray(e.children),f=null!=u?u:p.map((function(e){return{value:e.props.value,label:e.props.label}})),v=null!=s?s:null==(t=p.find((function(e){return e.props.default})))?void 0:t.props.value,b=a(),y=b.tabGroupChoices,h=b.setTabGroupChoices,g=(0,r.useState)(v),k=g[0],w=g[1],O=[];if(null!=d){var C=y[d];null!=C&&C!==k&&f.some((function(e){return e.value===C}))&&w(C)}var x=function(e){var t=e.currentTarget,n=O.indexOf(t),r=f[n].value;w(r),null!=d&&(h(d,r),setTimeout((function(){var e,n,r,o,a,i,l,s;(e=t.getBoundingClientRect(),n=e.top,r=e.left,o=e.bottom,a=e.right,i=window,l=i.innerHeight,s=i.innerWidth,n>=0&&a<=s&&o<=l&&r>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(c),setTimeout((function(){return t.classList.remove(c)}),2e3))}),150))},N=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r=O.indexOf(e.target)+1;n=O[r]||O[0];break;case"ArrowLeft":var o=O.indexOf(e.target)-1;n=O[o]||O[O.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":o},m)},f.map((function(e){var t=e.value,n=e.label;return r.createElement("li",{role:"tab",tabIndex:k===t?0:-1,"aria-selected":k===t,className:(0,i.Z)("tabs__item",l,{"tabs__item--active":k===t}),key:t,ref:function(e){return O.push(e)},onKeyDown:N,onFocus:x,onClick:x},null!=n?n:t)}))),n?(0,r.cloneElement)(p.filter((function(e){return e.props.value===k}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},p.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==k})}))))}},84956:function(e,t,n){"use strict";var r=(0,n(27378).createContext)(void 0);t.Z=r},86417:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return u},metadata:function(){return d},toc:function(){return m},default:function(){return f}});var r=n(29603),o=n(50120),a=(n(27378),n(35318)),i=n(64535),l=n(70517),c=n(45981),s={id:"dynamiccolorios",title:"DynamicColorIOS"},u=void 0,d={unversionedId:"dynamiccolorios",id:"dynamiccolorios",isDocsHomePage:!1,title:"DynamicColorIOS",description:"The DynamicColorIOS function is a platform color type specific to iOS.",source:"@site/../cndocs/dynamiccolorios.md",sourceDirName:".",slug:"/dynamiccolorios",permalink:"/docs/next/dynamiccolorios",editUrl:"https://github.com/reactnativecn/react-native-website/blob/production/cnwebsite/../cndocs/dynamiccolorios.md",tags:[],version:"current",frontMatter:{id:"dynamiccolorios",title:"DynamicColorIOS"},sidebar:"api",previous:{title:"ActionSheetIOS",permalink:"/docs/next/actionsheetios"},next:{title:"Settings",permalink:"/docs/next/settings"}},m=[{value:"\u793a\u4f8b",id:"\u793a\u4f8b",children:[]}],p={toc:m};function f(e){var t=e.components,n=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"DynamicColorIOS")," function is a platform color type specific to iOS."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"DynamicColorIOS({ light: color, dark: color });\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"DynamicColorIOS")," takes a single argument as an object with two keys: ",(0,a.kt)("inlineCode",{parentName:"p"},"dark")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"light"),'. These correspond to the colors you want to use for "light mode" and "dark mode" on iOS.'),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"In the future, more keys might become available for different user preferences, like high contrast.")),(0,a.kt)("p",null,"At runtime, the system will choose which of the two colors to display depending on the current system appearance settings. Dynamic colors are useful for branding colors or other app specific colors that still respond automatically to system setting changes."),(0,a.kt)("h4",{id:"developer-notes"},"Developer notes"),(0,a.kt)(i.Z,{groupId:"guide",defaultValue:"web",values:c.Z.getDevNotesTabs(["ios","web"]),mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"web",mdxType:"TabItem"},(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"If you\u2019re familiar with ",(0,a.kt)("inlineCode",{parentName:"p"},"@media (prefers-color-scheme: dark)")," in CSS, this is similar! Only instead of defining all the colors in a media query, you define which color to use under what circumstances right there where you're using it. Neat!"))),(0,a.kt)(l.Z,{value:"ios",mdxType:"TabItem"},(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"The ",(0,a.kt)("inlineCode",{parentName:"p"},"DynamicColorIOS")," function is similar to the iOS native methods ",(0,a.kt)("a",{parentName:"p",href:"https://developer.apple.com/documentation/uikit/uicolor/3238040-colorwithdynamicprovider"},(0,a.kt)("inlineCode",{parentName:"a"},"UIColor colorWithDynamicProvider:")))))),(0,a.kt)("h2",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"import { DynamicColorIOS } from 'react-native';\n\nconst customDynamicTextColor = DynamicColorIOS({\n  dark: 'lightskyblue',\n  light: 'midnightblue'\n});\n")))}f.isMDXComponent=!0}}]);
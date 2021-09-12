(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[15297],{35318:function(e,t,n){"use strict";n.d(t,{Zo:function(){return s},kt:function(){return c}});var a=n(27378);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),p=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return a.createElement(d.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,d=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),u=p(n),c=r,k=u["".concat(d,".").concat(c)]||u[c]||m[c]||l;return n?a.createElement(k,i(i({ref:t},s),{},{components:n})):a.createElement(k,i({ref:t},s))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=u;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},82164:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return o},metadata:function(){return d},toc:function(){return p},default:function(){return m}});var a=n(29603),r=n(50120),l=(n(27378),n(35318)),i={id:"platform",title:"Platform"},o=void 0,d={unversionedId:"platform",id:"platform",isDocsHomePage:!1,title:"Platform",description:"Example",source:"@site/../cndocs/platform.md",sourceDirName:".",slug:"/platform",permalink:"/docs/next/platform",editUrl:"https://github.com/reactnativecn/react-native-website/blob/production/cnwebsite/../cndocs/platform.md",tags:[],version:"current",frontMatter:{id:"platform",title:"Platform"},sidebar:"api",previous:{title:"PixelRatio",permalink:"/docs/next/pixelratio"},next:{title:"PlatformColor",permalink:"/docs/next/platformcolor"}},p=[{value:"Example",id:"example",children:[]},{value:"Properties",id:"properties",children:[{value:"<code>constants</code>",id:"constants",children:[]},{value:'<code>isPad</code> <div class="label ios">iOS</div>',id:"ispad-ios",children:[]},{value:"<code>isTV</code>",id:"istv",children:[]},{value:"<code>isTesting</code>",id:"istesting",children:[]},{value:"<code>OS</code>",id:"os",children:[]},{value:"<code>Version</code>",id:"version",children:[]}]},{value:"Methods",id:"methods",children:[{value:"<code>select()</code>",id:"select",children:[]}]}],s={toc:p};function m(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,l.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"example"},"Example"),(0,l.kt)("div",{className:"snack-player","data-snack-name":"Platform API Example","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%20Platform%2C%20StyleSheet%2C%20Text%2C%20ScrollView%20%7D%20from%20'react-native'%3B%0A%0Aconst%20App%20%3D%20()%20%3D%3E%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CScrollView%20contentContainerStyle%3D%7Bstyles.container%7D%3E%0A%20%20%20%20%20%20%3CText%3EOS%3C%2FText%3E%0A%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.value%7D%3E%7BPlatform.OS%7D%3C%2FText%3E%0A%20%20%20%20%20%20%3CText%3EOS%20Version%3C%2FText%3E%0A%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.value%7D%3E%7BPlatform.Version%7D%3C%2FText%3E%0A%20%20%20%20%20%20%3CText%3EisTV%3C%2FText%3E%0A%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.value%7D%3E%7BPlatform.isTV.toString()%7D%3C%2FText%3E%0A%20%20%20%20%20%20%7BPlatform.OS%20%3D%3D%3D%20'ios'%20%26%26%20%3C%3E%0A%20%20%20%20%20%20%20%20%3CText%3EisPad%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.value%7D%3E%7BPlatform.isPad.toString()%7D%3C%2FText%3E%0A%20%20%20%20%20%20%3C%2F%3E%7D%0A%20%20%20%20%20%20%3CText%3EConstants%3C%2FText%3E%0A%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.value%7D%3E%0A%20%20%20%20%20%20%20%20%7BJSON.stringify(Platform.constants%2C%20null%2C%202)%7D%0A%20%20%20%20%20%20%3C%2FText%3E%0A%20%20%20%20%3C%2FScrollView%3E%0A%20%20)%3B%0A%7D%3B%0A%0Aconst%20styles%20%3D%20StyleSheet.create(%7B%0A%20%20container%3A%20%7B%0A%20%20%20%20flex%3A%201%2C%0A%20%20%20%20justifyContent%3A%20'center'%2C%0A%20%20%20%20alignItems%3A%20'center'%2C%0A%20%20%7D%2C%0A%20%20value%3A%20%7B%0A%20%20%20%20fontWeight%3A%20'600'%2C%0A%20%20%20%20padding%3A%204%2C%0A%20%20%20%20marginBottom%3A%208%0A%20%20%7D%0A%7D)%3B%0A%0Aexport%20default%20App%3B","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"ios,android","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"}),(0,l.kt)("hr",null),(0,l.kt)("h1",{id:"reference"},"Reference"),(0,l.kt)("h2",{id:"properties"},"Properties"),(0,l.kt)("h3",{id:"constants"},(0,l.kt)("inlineCode",{parentName:"h3"},"constants")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"Platform.constants;\n")),(0,l.kt)("p",null,"Returns an object which contains all available common and specific constants related to the platform."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Properties:")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("div",{className:"widerColumn"},"Name")),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Optional"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"isTesting"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"reactNativeVersion"),(0,l.kt)("td",{parentName:"tr",align:null},"object"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"Information about React Native version. Keys are ",(0,l.kt)("inlineCode",{parentName:"td"},"major"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"minor"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"patch")," with optional ",(0,l.kt)("inlineCode",{parentName:"td"},"prerelease")," and values are ",(0,l.kt)("inlineCode",{parentName:"td"},"number"),"s.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Version ",(0,l.kt)("div",{className:"label android"},"Android")),(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"OS version constant specific to Android.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Release ",(0,l.kt)("div",{className:"label android"},"Android")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Serial ",(0,l.kt)("div",{className:"label android"},"Android")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"Hardware serial number of an Android device.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Fingerprint ",(0,l.kt)("div",{className:"label android"},"Android")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"A string that uniquely identifies the build.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Model ",(0,l.kt)("div",{className:"label android"},"Android")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"The end-user-visible name for the Android device.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Brand ",(0,l.kt)("div",{className:"label android"},"Android")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"The consumer-visible brand with which the product/hardware will be associated.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Manufacturer ",(0,l.kt)("div",{className:"label android"},"Android")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"The manufacturer of the Android device.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ServerHost ",(0,l.kt)("div",{className:"label android"},"Android")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"uiMode ",(0,l.kt)("div",{className:"label android"},"Android")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"Possible values are: ",(0,l.kt)("inlineCode",{parentName:"td"},"'car'"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"'desk'"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"'normal'"),",",(0,l.kt)("inlineCode",{parentName:"td"},"'tv'"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"'watch'")," and ",(0,l.kt)("inlineCode",{parentName:"td"},"'unknown'"),". Read more about ",(0,l.kt)("a",{parentName:"td",href:"https://developer.android.com/reference/android/app/UiModeManager.html"},"Android ModeType"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"forceTouchAvailable ",(0,l.kt)("div",{className:"label ios"},"iOS")),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"Indicate the availability of 3D Touch on a device.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"interfaceIdiom ",(0,l.kt)("div",{className:"label ios"},"iOS")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"The interface type for the device. Read more about ",(0,l.kt)("a",{parentName:"td",href:"https://developer.apple.com/documentation/uikit/uiuserinterfaceidiom"},"UIUserInterfaceIdiom"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"osVersion ",(0,l.kt)("div",{className:"label ios"},"iOS")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"OS version constant specific to iOS.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"systemName ",(0,l.kt)("div",{className:"label ios"},"iOS")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"OS name constant specific to iOS.")))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"ispad-ios"},(0,l.kt)("inlineCode",{parentName:"h3"},"isPad")," ",(0,l.kt)("div",{class:"label ios"},"iOS")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"Platform.isPad;\n")),(0,l.kt)("p",null,"Returns a boolean which defines if device is an iPad."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Type"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"boolean")))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"istv"},(0,l.kt)("inlineCode",{parentName:"h3"},"isTV")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"Platform.isTV;\n")),(0,l.kt)("p",null,"Returns a boolean which defines if device is a TV."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Type"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"boolean")))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"istesting"},(0,l.kt)("inlineCode",{parentName:"h3"},"isTesting")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"Platform.isTesting;\n")),(0,l.kt)("p",null,"Returns a boolean which defines if application is running in Developer Mode with testing flag set."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Type"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"boolean")))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"os"},(0,l.kt)("inlineCode",{parentName:"h3"},"OS")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"static Platform.OS\n")),(0,l.kt)("p",null,"Returns string value representing the current OS."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Type"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"enum(",(0,l.kt)("inlineCode",{parentName:"td"},"'android'"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"'ios'"),")")))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"version"},(0,l.kt)("inlineCode",{parentName:"h3"},"Version")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"Platform.Version;\n")),(0,l.kt)("p",null,"Returns the version of the OS."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Type"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"number ",(0,l.kt)("div",{className:"label android"},"Android"),(0,l.kt)("hr",null),"string ",(0,l.kt)("div",{className:"label ios"},"iOS"))))),(0,l.kt)("h2",{id:"methods"},"Methods"),(0,l.kt)("h3",{id:"select"},(0,l.kt)("inlineCode",{parentName:"h3"},"select()")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"static select(config: object): any\n")),(0,l.kt)("p",null,"Returns the most fitting value for the platform you are currently running on."),(0,l.kt)("h4",{id:"parameters"},"Parameters:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"config"),(0,l.kt)("td",{parentName:"tr",align:null},"object"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes"),(0,l.kt)("td",{parentName:"tr",align:null},"See config description below.")))),(0,l.kt)("p",null,"Select method returns the most fitting value for the platform you are currently running on. That is, if you're running on a phone, ",(0,l.kt)("inlineCode",{parentName:"p"},"android")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"ios")," keys will take preference. If those are not specified, ",(0,l.kt)("inlineCode",{parentName:"p"},"native")," key will be used and then the ",(0,l.kt)("inlineCode",{parentName:"p"},"default")," key."),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"config")," parameter is an object with the following keys:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"android")," (any)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"ios")," (any)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"native")," (any)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"default")," (any)")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example usage:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"import { Platform, StyleSheet } from 'react-native';\n\nconst styles = StyleSheet.create({\n  container: {\n    flex: 1,\n    ...Platform.select({\n      android: {\n        backgroundColor: 'green'\n      },\n      ios: {\n        backgroundColor: 'red'\n      },\n      default: {\n        // other platforms, web for example\n        backgroundColor: 'blue'\n      }\n    })\n  }\n});\n")),(0,l.kt)("p",null,"This will result in a container having ",(0,l.kt)("inlineCode",{parentName:"p"},"flex: 1")," on all platforms, a green background color on Android, a red background color on iOS, and a blue background color on other platforms."),(0,l.kt)("p",null,"Since the value of the corresponding platform key can be of type ",(0,l.kt)("inlineCode",{parentName:"p"},"any"),", ",(0,l.kt)("a",{parentName:"p",href:"/docs/next/platform#select"},(0,l.kt)("inlineCode",{parentName:"a"},"select"))," method can also be used to return platform-specific components, like below:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"const Component = Platform.select({\n  ios: () => require('ComponentIOS'),\n  android: () => require('ComponentAndroid')\n})();\n\n<Component />;\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"const Component = Platform.select({\n  native: () => require('ComponentForNative'),\n  default: () => require('ComponentForWeb')\n})();\n\n<Component />;\n")))}m.isMDXComponent=!0}}]);
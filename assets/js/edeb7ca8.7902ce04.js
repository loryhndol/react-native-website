(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[37057],{35318:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return c}});var a=n(27378);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=d(n),c=r,A=m["".concat(s,".").concat(c)]||m[c]||u[c]||i;return n?a.createElement(A,l(l({ref:t},p),{},{components:n})):a.createElement(A,l({ref:t},p))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var d=2;d<i;d++)l[d]=n[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},45981:function(e,t,n){"use strict";var a=n(161),r=!!a.Z.canUseDOM&&navigator.platform.startsWith("Mac"),i=!!a.Z.canUseDOM&&navigator.platform.startsWith("Win"),l=r?"ios":"android",o=r?"macos":i?"windows":"linux";t.Z={defaultGuide:"native",defaultOs:o,defaultPackageManager:"npm",defaultPlatform:l,defaultSyntax:"functional",getDevNotesTabs:function(e){return void 0===e&&(e=["android","ios","web","windows"]),[e.includes("android")?{label:"Android",value:"android"}:void 0,e.includes("ios")?{label:"iOS",value:"ios"}:void 0,e.includes("web")?{label:"Web",value:"web"}:void 0,e.includes("windows")?{label:"Windows",value:"windows"}:void 0].filter(Boolean)},guides:[{label:"\u5b8c\u6574\u539f\u751f\u73af\u5883",value:"native"},{label:"\u7b80\u6613\u6c99\u76d2\u73af\u5883",value:"quickstart"}],oses:[{label:"macOS",value:"macos"},{label:"Windows",value:"windows"},{label:"Linux",value:"linux"}],packageManagers:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],platforms:[{label:"Android",value:"android"},{label:"iOS",value:"ios"}],syntax:[{label:"\u51fd\u6570\u5f0f\u7ec4\u4ef6",value:"functional"},{label:"Class \u7ec4\u4ef6",value:"classical"}]}},70517:function(e,t,n){"use strict";var a=n(27378);t.Z=function(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},64535:function(e,t,n){"use strict";n.d(t,{Z:function(){return d}});var a=n(27378),r=n(84956);var i=function(){var e=(0,a.useContext)(r.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},l=n(38944),o="tabItem_c0e5",s="tabItemActive_28AG";var d=function(e){var t,n=e.lazy,r=e.block,d=e.defaultValue,p=e.values,u=e.groupId,m=e.className,c=a.Children.toArray(e.children),A=null!=p?p:c.map((function(e){return{value:e.props.value,label:e.props.label}})),k=null!=d?d:null==(t=c.find((function(e){return e.props.default})))?void 0:t.props.value,N=i(),C=N.tabGroupChoices,g=N.setTabGroupChoices,E=(0,a.useState)(k),f=E[0],h=E[1],v=[];if(null!=u){var b=C[u];null!=b&&b!==f&&A.some((function(e){return e.value===b}))&&h(b)}var S=function(e){var t=e.currentTarget,n=v.indexOf(t),a=A[n].value;h(a),null!=u&&(g(u,a),setTimeout((function(){var e,n,a,r,i,l,o,d;(e=t.getBoundingClientRect(),n=e.top,a=e.left,r=e.bottom,i=e.right,l=window,o=l.innerHeight,d=l.innerWidth,n>=0&&i<=d&&r<=o&&a>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(s),setTimeout((function(){return t.classList.remove(s)}),2e3))}),150))},D=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=v.indexOf(e.target)+1;n=v[a]||v[0];break;case"ArrowLeft":var r=v.indexOf(e.target)-1;n=v[r]||v[v.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":r},m)},A.map((function(e){var t=e.value,n=e.label;return a.createElement("li",{role:"tab",tabIndex:f===t?0:-1,"aria-selected":f===t,className:(0,l.Z)("tabs__item",o,{"tabs__item--active":f===t}),key:t,ref:function(e){return v.push(e)},onKeyDown:D,onFocus:S,onClick:S},null!=n?n:t)}))),n?(0,a.cloneElement)(c.filter((function(e){return e.props.value===f}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},c.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==f})}))))}},84956:function(e,t,n){"use strict";var a=(0,n(27378).createContext)(void 0);t.Z=a},37710:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return d},contentTitle:function(){return p},metadata:function(){return u},toc:function(){return m},default:function(){return A}});var a=n(29603),r=n(50120),i=(n(27378),n(35318)),l=n(64535),o=n(70517),s=n(45981),d={id:"permissionsandroid",title:"PermissionsAndroid"},p=void 0,u={unversionedId:"permissionsandroid",id:"permissionsandroid",isDocsHomePage:!1,title:"PermissionsAndroid",description:"\u4ec5\u9002\u7528\u4e8e\u975e\u6c99\u76d2\u9879\u76ee",source:"@site/../cndocs/permissionsandroid.md",sourceDirName:".",slug:"/permissionsandroid",permalink:"/docs/next/permissionsandroid",editUrl:"https://github.com/reactnativecn/react-native-website/blob/production/cnwebsite/../cndocs/permissionsandroid.md",tags:[],version:"current",frontMatter:{id:"permissionsandroid",title:"PermissionsAndroid"},sidebar:"api",previous:{title:"BackHandler",permalink:"/docs/next/backhandler"},next:{title:"ToastAndroid",permalink:"/docs/next/toastandroid"}},m=[{value:"\u793a\u4f8b",id:"\u793a\u4f8b",children:[]},{value:"\u9700\u8981\u63d0\u793a\u7528\u6237\u7684\u6743\u9650\u5217\u8868",id:"\u9700\u8981\u63d0\u793a\u7528\u6237\u7684\u6743\u9650\u5217\u8868",children:[]},{value:"\u8bf7\u6c42\u6743\u9650\u7684\u8fd4\u56de\u503c",id:"\u8bf7\u6c42\u6743\u9650\u7684\u8fd4\u56de\u503c",children:[]},{value:"\u65b9\u6cd5",id:"\u65b9\u6cd5",children:[{value:"<code>constructor()</code>",id:"constructor",children:[]},{value:"<code>check()</code>",id:"check",children:[]},{value:"<code>request()</code>",id:"request",children:[]},{value:"<code>requestMultiple()</code>",id:"requestmultiple",children:[]}]}],c={toc:m};function A(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("div",{className:"banner-native-code-required"},(0,i.kt)("h3",null,"\u4ec5\u9002\u7528\u4e8e\u975e\u6c99\u76d2\u9879\u76ee"),(0,i.kt)("p",null,"The following section only applies to projects with native code exposed. If you are using the managed ",(0,i.kt)("code",null,"expo-cli")," workflow, see the guide on ",(0,i.kt)("a",{href:"https://docs.expo.io/versions/latest/sdk/permissions/"},"Permissions")," in the Expo documentation for the appropriate alternative.")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"PermissionsAndroid")," \u53ef\u4ee5\u8bbf\u95ee Android M(\u4e5f\u5c31\u662f 6.0)\u5f00\u59cb\u63d0\u4f9b\u7684\u6743\u9650\u6a21\u578b\u3002\u6709\u4e00\u4e9b\u6743\u9650\u5199\u5728",(0,i.kt)("inlineCode",{parentName:"p"},"AndroidManifest.xml"),"\u5c31\u53ef\u4ee5\u5728\u5b89\u88c5\u65f6\u81ea\u52a8\u83b7\u5f97\uff0c\u4f46\u6709\u4e00\u4e9b\u201c\u5371\u9669\u201d\u7684\u6743\u9650\u5219\u9700\u8981\u5f39\u51fa\u63d0\u793a\u6846\u4f9b\u7528\u6237\u9009\u62e9\u3002\u672c API \u5373\u7528\u4e8e\u540e\u4e00\u79cd\u60c5\u5f62\u3002"),(0,i.kt)("p",null,"\u5728\u4f4e\u4e8e Android 6.0 \u7684\u8bbe\u5907\u4e0a\uff0c\u6743\u9650\u53ea\u8981\u5199\u5728",(0,i.kt)("inlineCode",{parentName:"p"},"AndroidManifest.xml"),"\u91cc\u5c31\u4f1a\u81ea\u52a8\u83b7\u5f97\uff0c\u6b64\u60c5\u5f62\u4e0b",(0,i.kt)("inlineCode",{parentName:"p"},"check"),"\u4f1a\u59cb\u7ec8\u8fd4\u56de",(0,i.kt)("inlineCode",{parentName:"p"},"true"),"\u548c\u800c",(0,i.kt)("inlineCode",{parentName:"p"},"request"),"\u65b9\u6cd5\u5c06\u59cb\u7ec8\u89e3\u6790\u4e3a",(0,i.kt)("inlineCode",{parentName:"p"},"PermissionsAndroid.RESULTS.GRANTED"),"\u3002"),(0,i.kt)("p",null,"\u5982\u679c\u7528\u6237\u4e4b\u524d\u62d2\u7edd\u8fc7\u4f60\u7684\u67d0\u9879\u6743\u9650\u8bf7\u6c42\uff0c\u90a3\u4e48\u7cfb\u7edf\u4f1a\u5efa\u8bae\u4f60\u663e\u793a\u4e00\u4e2a\u4e3a\u4ec0\u4e48\u9700\u8981\u8fd9\u4e2a\u6743\u9650\u7684\u201c\u8be6\u7ec6\u89e3\u91ca\u201d\uff08",(0,i.kt)("inlineCode",{parentName:"p"},"rationale"),"\u53c2\u6570\uff09\u3002\u5982\u679c\u7528\u6237\u4e4b\u524d\u62d2\u7edd\u8fc7\uff0c\u90a3\u4e48\u5f53\u4f60\u518d\u6b21\u7533\u8bf7\u7684\u65f6\u5019\uff0c\u5f39\u51fa\u7684\u5c31\u53ef\u80fd\u4e0d\u662f\u539f\u5148\u7684\u7533\u8bf7\u4fe1\u606f\uff0c\u800c\u662f",(0,i.kt)("inlineCode",{parentName:"p"},"rationale"),"\u53c2\u6570\u91cc\u63d0\u4f9b\u7684\u8fdb\u4e00\u6b65\u89e3\u91ca\u3002"),(0,i.kt)("h3",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,i.kt)(l.Z,{groupId:"syntax",defaultValue:s.Z.defaultSyntax,values:s.Z.syntax,mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"functional",mdxType:"TabItem"},(0,i.kt)("div",{className:"snack-player","data-snack-name":"PermissionsAndroid Example","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20%22react%22%3B%0Aimport%20%7B%20StyleSheet%2C%20Text%2C%20View%2C%20SafeAreaView%2C%20PermissionsAndroid%2C%20Button%20%7D%20from%20%22react-native%22%3B%0Aimport%20Constants%20from%20%22expo-constants%22%3B%0A%0Aconst%20requestCameraPermission%20%3D%20async%20()%20%3D%3E%20%7B%0A%20%20try%20%7B%0A%20%20%20%20const%20granted%20%3D%20await%20PermissionsAndroid.request(%0A%20%20%20%20%20%20PermissionsAndroid.PERMISSIONS.CAMERA%2C%0A%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20title%3A%20%22Cool%20Photo%20App%20Camera%20Permission%22%2C%0A%20%20%20%20%20%20%20%20message%3A%0A%20%20%20%20%20%20%20%20%20%20%22Cool%20Photo%20App%20needs%20access%20to%20your%20camera%20%22%20%2B%0A%20%20%20%20%20%20%20%20%20%20%22so%20you%20can%20take%20awesome%20pictures.%22%2C%0A%20%20%20%20%20%20%20%20buttonNeutral%3A%20%22Ask%20Me%20Later%22%2C%0A%20%20%20%20%20%20%20%20buttonNegative%3A%20%22Cancel%22%2C%0A%20%20%20%20%20%20%20%20buttonPositive%3A%20%22OK%22%0A%20%20%20%20%20%20%7D%0A%20%20%20%20)%3B%0A%20%20%20%20if%20(granted%20%3D%3D%3D%20PermissionsAndroid.RESULTS.GRANTED)%20%7B%0A%20%20%20%20%20%20console.log(%22You%20can%20use%20the%20camera%22)%3B%0A%20%20%20%20%7D%20else%20%7B%0A%20%20%20%20%20%20console.log(%22Camera%20permission%20denied%22)%3B%0A%20%20%20%20%7D%0A%20%20%7D%20catch%20(err)%20%7B%0A%20%20%20%20console.warn(err)%3B%0A%20%20%7D%0A%7D%3B%0A%0Aconst%20App%20%3D%20()%20%3D%3E%20(%0A%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%0A%20%20%20%20%3CText%20style%3D%7Bstyles.item%7D%3ETry%20permissions%3C%2FText%3E%0A%20%20%20%20%3CButton%20title%3D%22request%20permissions%22%20onPress%3D%7BrequestCameraPermission%7D%20%2F%3E%0A%20%20%3C%2FView%3E%0A)%3B%0A%0Aconst%20styles%20%3D%20StyleSheet.create(%7B%0A%20%20container%3A%20%7B%0A%20%20%20%20flex%3A%201%2C%0A%20%20%20%20justifyContent%3A%20%22center%22%2C%0A%20%20%20%20paddingTop%3A%20Constants.statusBarHeight%2C%0A%20%20%20%20backgroundColor%3A%20%22%23ecf0f1%22%2C%0A%20%20%20%20padding%3A%208%0A%20%20%7D%2C%0A%20%20item%3A%20%7B%0A%20%20%20%20margin%3A%2024%2C%0A%20%20%20%20fontSize%3A%2018%2C%0A%20%20%20%20fontWeight%3A%20%22bold%22%2C%0A%20%20%20%20textAlign%3A%20%22center%22%0A%20%20%7D%0A%7D)%3B%0A%0Aexport%20default%20App%3B","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"android","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"})),(0,i.kt)(o.Z,{value:"classical",mdxType:"TabItem"},(0,i.kt)("div",{className:"snack-player","data-snack-name":"PermissionsAndroid Example","data-snack-description":"Example usage","data-snack-code":"import%20React%2C%20%7B%20Component%20%7D%20from%20%22react%22%3B%0Aimport%20%7B%20StyleSheet%2C%20Text%2C%20View%2C%20SafeAreaView%2C%20PermissionsAndroid%2C%20Button%20%7D%20from%20%22react-native%22%3B%0Aimport%20Constants%20from%20%22expo-constants%22%3B%0A%0Aconst%20requestCameraPermission%20%3D%20async%20()%20%3D%3E%20%7B%0A%20%20try%20%7B%0A%20%20%20%20const%20granted%20%3D%20await%20PermissionsAndroid.request(%0A%20%20%20%20%20%20PermissionsAndroid.PERMISSIONS.CAMERA%2C%0A%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20title%3A%20%22Cool%20Photo%20App%20Camera%20Permission%22%2C%0A%20%20%20%20%20%20%20%20message%3A%0A%20%20%20%20%20%20%20%20%20%20%22Cool%20Photo%20App%20needs%20access%20to%20your%20camera%20%22%20%2B%0A%20%20%20%20%20%20%20%20%20%20%22so%20you%20can%20take%20awesome%20pictures.%22%2C%0A%20%20%20%20%20%20%20%20buttonNeutral%3A%20%22Ask%20Me%20Later%22%2C%0A%20%20%20%20%20%20%20%20buttonNegative%3A%20%22Cancel%22%2C%0A%20%20%20%20%20%20%20%20buttonPositive%3A%20%22OK%22%0A%20%20%20%20%20%20%7D%0A%20%20%20%20)%3B%0A%20%20%20%20if%20(granted%20%3D%3D%3D%20PermissionsAndroid.RESULTS.GRANTED)%20%7B%0A%20%20%20%20%20%20console.log(%22You%20can%20use%20the%20camera%22)%3B%0A%20%20%20%20%7D%20else%20%7B%0A%20%20%20%20%20%20console.log(%22Camera%20permission%20denied%22)%3B%0A%20%20%20%20%7D%0A%20%20%7D%20catch%20(err)%20%7B%0A%20%20%20%20console.warn(err)%3B%0A%20%20%7D%0A%7D%3B%0A%0Aclass%20App%20extends%20Component%20%7B%0A%20%20render()%20%7B%0A%20%20%20%20return%20(%0A%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%0A%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.item%7D%3ETry%20permissions%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%3CButton%20title%3D%22request%20permissions%22%20onPress%3D%7BrequestCameraPermission%7D%20%2F%3E%0A%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20)%3B%0A%20%20%7D%0A%7D%3B%0A%0Aconst%20styles%20%3D%20StyleSheet.create(%7B%0A%20%20container%3A%20%7B%0A%20%20%20%20flex%3A%201%2C%0A%20%20%20%20justifyContent%3A%20%22center%22%2C%0A%20%20%20%20paddingTop%3A%20Constants.statusBarHeight%2C%0A%20%20%20%20backgroundColor%3A%20%22%23ecf0f1%22%2C%0A%20%20%20%20padding%3A%208%0A%20%20%7D%2C%0A%20%20item%3A%20%7B%0A%20%20%20%20margin%3A%2024%2C%0A%20%20%20%20fontSize%3A%2018%2C%0A%20%20%20%20fontWeight%3A%20%22bold%22%2C%0A%20%20%20%20textAlign%3A%20%22center%22%0A%20%20%7D%0A%7D)%3B%0A%0Aexport%20default%20App%3B","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"android","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"}))),(0,i.kt)("h3",{id:"\u9700\u8981\u63d0\u793a\u7528\u6237\u7684\u6743\u9650\u5217\u8868"},"\u9700\u8981\u63d0\u793a\u7528\u6237\u7684\u6743\u9650\u5217\u8868"),(0,i.kt)("p",null,"\u9700\u8981\u63d0\u793a\u7528\u6237\u7684\u6743\u9650\u90fd\u4ee5\u5e38\u91cf\u5f62\u5f0f\u5217\u5728",(0,i.kt)("inlineCode",{parentName:"p"},"PermissionsAndroid.PERMISSIONS"),"\u4e2d\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"READ_CALENDAR"),": 'android.permission.READ_CALENDAR'"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"WRITE_CALENDAR"),": 'android.permission.WRITE_CALENDAR'"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"CAMERA"),": 'android.permission.CAMERA'"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"READ_CONTACTS"),": 'android.permission.READ_CONTACTS'"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"WRITE_CONTACTS"),": 'android.permission.WRITE_CONTACTS'"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"GET_ACCOUNTS"),": 'android.permission.GET_ACCOUNTS'"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ACCESS_BACKGROUND_LOCATION"),": 'android.permission.ACCESS_BACKGROUND_LOCATION`"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ACCESS_FINE_LOCATION"),": 'android.permission.ACCESS_FINE_LOCATION'"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ACCESS_COARSE_LOCATION"),": 'android.permission.ACCESS_COARSE_LOCATION'"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"RECORD_AUDIO"),": 'android.permission.RECORD_AUDIO'"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"READ_PHONE_STATE"),": 'android.permission.READ_PHONE_STATE'"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"CALL_PHONE"),": 'android.permission.CALL_PHONE'"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"READ_CALL_LOG"),": 'android.permission.READ_CALL_LOG'"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"WRITE_CALL_LOG"),": 'android.permission.WRITE_CALL_LOG'"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ADD_VOICEMAIL"),": 'com.android.voicemail.permission.ADD_VOICEMAIL'"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"USE_SIP"),": 'android.permission.USE_SIP'"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"PROCESS_OUTGOING_CALLS"),": 'android.permission.PROCESS_OUTGOING_CALLS'"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"BODY_SENSORS"),": 'android.permission.BODY_SENSORS'"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"SEND_SMS"),": 'android.permission.SEND_SMS'"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"RECEIVE_SMS"),": 'android.permission.RECEIVE_SMS'"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"READ_SMS"),": 'android.permission.READ_SMS'"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"RECEIVE_WAP_PUSH"),": 'android.permission.RECEIVE_WAP_PUSH'"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"RECEIVE_MMS"),": 'android.permission.RECEIVE_MMS'"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"READ_EXTERNAL_STORAGE"),": 'android.permission.READ_EXTERNAL_STORAGE'"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"WRITE_EXTERNAL_STORAGE"),": 'android.permission.WRITE_EXTERNAL_STORAGE'")),(0,i.kt)("h3",{id:"\u8bf7\u6c42\u6743\u9650\u7684\u8fd4\u56de\u503c"},"\u8bf7\u6c42\u6743\u9650\u7684\u8fd4\u56de\u503c"),(0,i.kt)("p",null,"\u8fd4\u56de\u503c\u90fd\u4ee5\u5e38\u91cf\u5f62\u5f0f\u8bb0\u5f55\u5728",(0,i.kt)("inlineCode",{parentName:"p"},"PermissionsAndroid.RESULTS"),"\u4e2d\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"GRANTED"),": 'granted'\uff0c \u8868\u793a\u7528\u6237\u5df2\u6388\u6743"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"DENIED"),": 'denied'\uff0c \u8868\u793a\u7528\u6237\u5df2\u62d2\u7edd"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"NEVER_ASK_AGAIN"),": 'never_ask_again'\uff0c\u8868\u793a\u7528\u6237\u5df2\u62d2\u7edd\uff0c\u4e14\u4e0d\u613f\u88ab\u518d\u6b21\u8be2\u95ee\u3002")),(0,i.kt)("hr",null),(0,i.kt)("h1",{id:"\u6587\u6863"},"\u6587\u6863"),(0,i.kt)("h2",{id:"\u65b9\u6cd5"},"\u65b9\u6cd5"),(0,i.kt)("h3",{id:"constructor"},(0,i.kt)("inlineCode",{parentName:"h3"},"constructor()")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"constructor();\n")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"check"},(0,i.kt)("inlineCode",{parentName:"h3"},"check()")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"check(permission);\n")),(0,i.kt)("p",null,"\u68c0\u67e5\u67d0\u9879\u6743\u9650\u662f\u5426\u7ecf\u8fc7\u7528\u6237\u6388\u6743\u3002\u8fd4\u56de\u4e00\u4e2a promise\uff0c\u89e3\u6790\u4e3a\u5e03\u5c14\u503c\u3002"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u53c2\u6570:")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"\u540d\u79f0"),(0,i.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,i.kt)("th",{parentName:"tr",align:null},"\u5fc5\u9700"),(0,i.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"permission"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,i.kt)("td",{parentName:"tr",align:null},"\u8981\u68c0\u67e5\u7684\u6743\u9650")))),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"request"},(0,i.kt)("inlineCode",{parentName:"h3"},"request()")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"request(permission, [rationale]);\n")),(0,i.kt)("p",null,"\u5f39\u51fa\u63d0\u793a\u6846\u5411\u7528\u6237\u8bf7\u6c42\u67d0\u9879\u6743\u9650\u3002\u8fd4\u56de\u4e00\u4e2a promise\uff0c\u6700\u7ec8\u503c\u4e3a\u4e0a\u6587\u6240\u8bf4\u7684",(0,i.kt)("inlineCode",{parentName:"p"},"PermissionsAndroid.RESULTS"),"\u3002"),(0,i.kt)("p",null,"\u5982\u679c\u63d0\u4f9b\u4e86",(0,i.kt)("inlineCode",{parentName:"p"},"rationale"),"\u53c2\u6570\uff0c\u5219\u6b64\u65b9\u6cd5\u4f1a\u548c\u7cfb\u7edf\u534f\u5546\uff0c\u662f\u5f39\u51fa\u7cfb\u7edf\u5185\u7f6e\u7684\u6743\u9650\u7533\u8bf7\u5bf9\u8bdd\u6846\uff0c\u8fd8\u662f\u663e\u793a",(0,i.kt)("inlineCode",{parentName:"p"},"rationale"),"\u4e2d\u7684\u4fe1\u606f\u4ee5\u5411\u7528\u6237\u8fdb\u884c\u89e3\u91ca\u3002\u5177\u4f53\u539f\u7406\u8bf7\u53c2\u9605 android \u5b98\u65b9\u6587\u6863(",(0,i.kt)("a",{parentName:"p",href:"https://developer.android.com/training/permissions/requesting.html#explain)%E3%80%82"},"https://developer.android.com/training/permissions/requesting.html#explain)\u3002")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u53c2\u6570:")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"\u540d\u79f0"),(0,i.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,i.kt)("th",{parentName:"tr",align:null},"\u5fc5\u9700"),(0,i.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"permission"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,i.kt)("td",{parentName:"tr",align:null},"\u8981\u8bf7\u6c42\u7684\u6743\u9650")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"rationale"),(0,i.kt)("td",{parentName:"tr",align:null},"object"),(0,i.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,i.kt)("td",{parentName:"tr",align:null},"\u89c1\u4e0b\u9762\u7684",(0,i.kt)("inlineCode",{parentName:"td"},"rationale"))))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Rationale:")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"\u540d\u79f0"),(0,i.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,i.kt)("th",{parentName:"tr",align:null},"\u5fc5\u9700"),(0,i.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"title"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,i.kt)("td",{parentName:"tr",align:null},"\u5bf9\u8bdd\u6846\u7684\u6807\u9898\u3002")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"message"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,i.kt)("td",{parentName:"tr",align:null},"\u5bf9\u8bdd\u6846\u7684\u6b63\u6587\u3002")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"buttonPositive"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,i.kt)("td",{parentName:"tr",align:null},"\u540c\u610f\u6309\u94ae\u7684\u6587\u672c\u3002")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"buttonNegative"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,i.kt)("td",{parentName:"tr",align:null},"\u62d2\u7edd\u6309\u94ae\u7684\u6587\u672c\u3002")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"buttonNeutral"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,i.kt)("td",{parentName:"tr",align:null},"\u8df3\u8fc7\u6309\u94ae\u7684\u6587\u672c\u3002")))),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"requestmultiple"},(0,i.kt)("inlineCode",{parentName:"h3"},"requestMultiple()")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"requestMultiple(permissions);\n")),(0,i.kt)("p",null,"\u5728\u4e00\u4e2a\u5f39\u51fa\u6846\u4e2d\u5411\u7528\u6237\u8bf7\u6c42\u591a\u4e2a\u6743\u9650\u3002\u8fd4\u56de\u503c\u4e3a\u4e00\u4e2a object\uff0ckey \u4e3a\u5404\u6743\u9650\u540d\u79f0\uff0c\u503c\u4e3a",(0,i.kt)("inlineCode",{parentName:"p"},"PermissionsAndroid.RESULTS"),"\u3002"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u53c2\u6570:")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"\u540d\u79f0"),(0,i.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,i.kt)("th",{parentName:"tr",align:null},"\u5fc5\u9700"),(0,i.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"permissions"),(0,i.kt)("td",{parentName:"tr",align:null},"array"),(0,i.kt)("td",{parentName:"tr",align:null},"Yes"),(0,i.kt)("td",{parentName:"tr",align:null},"\u8981\u7533\u8bf7\u7684\u6743\u9650\u7684\u6570\u7ec4")))))}A.isMDXComponent=!0}}]);
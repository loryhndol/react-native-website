(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[64019],{35318:function(e,t,n){"use strict";n.d(t,{Zo:function(){return d},kt:function(){return m}});var a=n(27378);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),p=s(n),m=r,v=p["".concat(c,".").concat(m)]||p[m]||u[m]||i;return n?a.createElement(v,l(l({ref:t},d),{},{components:n})):a.createElement(v,l({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=p;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},45981:function(e,t,n){"use strict";var a=n(161),r=!!a.Z.canUseDOM&&navigator.platform.startsWith("Mac"),i=!!a.Z.canUseDOM&&navigator.platform.startsWith("Win"),l=r?"ios":"android",o=r?"macos":i?"windows":"linux";t.Z={defaultGuide:"native",defaultOs:o,defaultPackageManager:"npm",defaultPlatform:l,defaultSyntax:"functional",getDevNotesTabs:function(e){return void 0===e&&(e=["android","ios","web","windows"]),[e.includes("android")?{label:"Android",value:"android"}:void 0,e.includes("ios")?{label:"iOS",value:"ios"}:void 0,e.includes("web")?{label:"Web",value:"web"}:void 0,e.includes("windows")?{label:"Windows",value:"windows"}:void 0].filter(Boolean)},guides:[{label:"\u5b8c\u6574\u539f\u751f\u73af\u5883",value:"native"},{label:"\u7b80\u6613\u6c99\u76d2\u73af\u5883",value:"quickstart"}],oses:[{label:"macOS",value:"macos"},{label:"Windows",value:"windows"},{label:"Linux",value:"linux"}],packageManagers:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],platforms:[{label:"Android",value:"android"},{label:"iOS",value:"ios"}],syntax:[{label:"\u51fd\u6570\u5f0f\u7ec4\u4ef6",value:"functional"},{label:"Class \u7ec4\u4ef6",value:"classical"}]}},70517:function(e,t,n){"use strict";var a=n(27378);t.Z=function(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},64535:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});var a=n(27378),r=n(84956);var i=function(){var e=(0,a.useContext)(r.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},l=n(38944),o="tabItem_c0e5",c="tabItemActive_28AG";var s=function(e){var t,n=e.lazy,r=e.block,s=e.defaultValue,d=e.values,u=e.groupId,p=e.className,m=a.Children.toArray(e.children),v=null!=d?d:m.map((function(e){return{value:e.props.value,label:e.props.label}})),f=null!=s?s:null==(t=m.find((function(e){return e.props.default})))?void 0:t.props.value,k=i(),b=k.tabGroupChoices,h=k.setTabGroupChoices,y=(0,a.useState)(f),A=y[0],g=y[1],C=[];if(null!=u){var N=b[u];null!=N&&N!==A&&v.some((function(e){return e.value===N}))&&g(N)}var w=function(e){var t=e.currentTarget,n=C.indexOf(t),a=v[n].value;g(a),null!=u&&(h(u,a),setTimeout((function(){var e,n,a,r,i,l,o,s;(e=t.getBoundingClientRect(),n=e.top,a=e.left,r=e.bottom,i=e.right,l=window,o=l.innerHeight,s=l.innerWidth,n>=0&&i<=s&&r<=o&&a>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(c),setTimeout((function(){return t.classList.remove(c)}),2e3))}),150))},D=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=C.indexOf(e.target)+1;n=C[a]||C[0];break;case"ArrowLeft":var r=C.indexOf(e.target)-1;n=C[r]||C[C.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":r},p)},v.map((function(e){var t=e.value,n=e.label;return a.createElement("li",{role:"tab",tabIndex:A===t?0:-1,"aria-selected":A===t,className:(0,l.Z)("tabs__item",o,{"tabs__item--active":A===t}),key:t,ref:function(e){return C.push(e)},onKeyDown:D,onFocus:w,onClick:w},null!=n?n:t)}))),n?(0,a.cloneElement)(m.filter((function(e){return e.props.value===A}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},m.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==A})}))))}},84956:function(e,t,n){"use strict";var a=(0,n(27378).createContext)(void 0);t.Z=a},86658:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return d},metadata:function(){return u},toc:function(){return p},default:function(){return v}});var a=n(29603),r=n(50120),i=(n(27378),n(35318)),l=n(64535),o=n(70517),c=n(45981),s={id:"activityindicator",title:"ActivityIndicator"},d=void 0,u={unversionedId:"activityindicator",id:"version-0.63/activityindicator",isDocsHomePage:!1,title:"ActivityIndicator",description:"\u663e\u793a\u4e00\u4e2a\u5706\u5f62\u7684 loading \u63d0\u793a\u7b26\u53f7\u3002",source:"@site/versioned_docs/version-0.63/activityindicator.md",sourceDirName:".",slug:"/activityindicator",permalink:"/docs/0.63/activityindicator",editUrl:"https://github.com/reactnativecn/react-native-website/blob/production/cnwebsite/../cndocs/activityindicator.md",tags:[],version:"0.63",frontMatter:{id:"activityindicator",title:"ActivityIndicator"},sidebar:"version-0.63/\u7ec4\u4ef6",previous:{title:"\u6838\u5fc3\u7ec4\u4ef6\u548cAPI",permalink:"/docs/0.63/components-and-apis"},next:{title:"Button",permalink:"/docs/0.63/button"}},p=[{value:"\u793a\u4f8b",id:"\u793a\u4f8b",children:[]},{value:"Props",id:"props",children:[{value:"View Props",id:"view-props",children:[]},{value:"<code>animating</code>",id:"animating",children:[]},{value:"<code>color</code>",id:"color",children:[]},{value:'<code>hidesWhenStopped</code> <div class="label ios">iOS</div>',id:"hideswhenstopped-ios",children:[]},{value:"<code>size</code>",id:"size",children:[]}]}],m={toc:p};function v(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u663e\u793a\u4e00\u4e2a\u5706\u5f62\u7684 loading \u63d0\u793a\u7b26\u53f7\u3002"),(0,i.kt)("h2",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,i.kt)(l.Z,{groupId:"syntax",defaultValue:c.Z.defaultSyntax,values:c.Z.syntax,mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"functional",mdxType:"TabItem"},(0,i.kt)("div",{className:"snack-player","data-snack-name":"ActivityIndicator Function Component Example","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20%22react%22%3B%0Aimport%20%7B%20ActivityIndicator%2C%20StyleSheet%2C%20Text%2C%20View%20%7D%20from%20%22react-native%22%3B%0A%0Aconst%20App%20%3D%20()%20%3D%3E%20(%0A%20%20%3CView%20style%3D%7B%5Bstyles.container%2C%20styles.horizontal%5D%7D%3E%0A%20%20%20%20%3CActivityIndicator%20%2F%3E%0A%20%20%20%20%3CActivityIndicator%20size%3D%22large%22%20%2F%3E%0A%20%20%20%20%3CActivityIndicator%20size%3D%22small%22%20color%3D%22%230000ff%22%20%2F%3E%0A%20%20%20%20%3CActivityIndicator%20size%3D%22large%22%20color%3D%22%2300ff00%22%20%2F%3E%0A%20%20%3C%2FView%3E%0A)%3B%0A%0Aconst%20styles%20%3D%20StyleSheet.create(%7B%0A%20%20container%3A%20%7B%0A%20%20%20%20flex%3A%201%2C%0A%20%20%20%20justifyContent%3A%20%22center%22%0A%20%20%7D%2C%0A%20%20horizontal%3A%20%7B%0A%20%20%20%20flexDirection%3A%20%22row%22%2C%0A%20%20%20%20justifyContent%3A%20%22space-around%22%2C%0A%20%20%20%20padding%3A%2010%0A%20%20%7D%0A%7D)%3B%0A%0Aexport%20default%20App%3B","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"})),(0,i.kt)(o.Z,{value:"classical",mdxType:"TabItem"},(0,i.kt)("div",{className:"snack-player","data-snack-name":"ActivityIndicator Class Component Example","data-snack-description":"Example usage","data-snack-code":"import%20React%2C%20%7B%20Component%20%7D%20from%20%22react%22%3B%0Aimport%20%7B%20ActivityIndicator%2C%20StyleSheet%2C%20Text%2C%20View%20%7D%20from%20%22react-native%22%3B%0A%0Aclass%20App%20extends%20Component%20%7B%0A%20%20render()%20%7B%0A%20%20%20%20return%20(%0A%20%20%20%20%20%20%3CView%20style%3D%7B%5Bstyles.container%2C%20styles.horizontal%5D%7D%3E%0A%20%20%20%20%20%20%3CActivityIndicator%20%2F%3E%0A%20%20%20%20%20%20%3CActivityIndicator%20size%3D%22large%22%20%2F%3E%0A%20%20%20%20%20%20%3CActivityIndicator%20size%3D%22small%22%20color%3D%22%230000ff%22%20%2F%3E%0A%20%20%20%20%20%20%3CActivityIndicator%20size%3D%22large%22%20color%3D%22%2300ff00%22%20%2F%3E%0A%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20)%3B%0A%20%20%7D%0A%7D%0A%0Aconst%20styles%20%3D%20StyleSheet.create(%7B%0A%20%20container%3A%20%7B%0A%20%20%20%20flex%3A%201%2C%0A%20%20%20%20justifyContent%3A%20%22center%22%0A%20%20%7D%2C%0A%20%20horizontal%3A%20%7B%0A%20%20%20%20flexDirection%3A%20%22row%22%2C%0A%20%20%20%20justifyContent%3A%20%22space-around%22%2C%0A%20%20%20%20padding%3A%2010%0A%20%20%7D%0A%7D)%3B%0A%0Aexport%20default%20App%3B","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"}))),(0,i.kt)("h1",{id:"\u6587\u6863"},"\u6587\u6863"),(0,i.kt)("h2",{id:"props"},"Props"),(0,i.kt)("h3",{id:"view-props"},(0,i.kt)("a",{parentName:"h3",href:"/docs/0.63/view#props"},"View Props")),(0,i.kt)("p",null,"\u7ee7\u627f\u4e86\u6240\u6709\u7684",(0,i.kt)("a",{parentName:"p",href:"/docs/0.63/view#props"},"View Props"),"."),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"animating"},(0,i.kt)("inlineCode",{parentName:"h3"},"animating")),(0,i.kt)("p",null,"\u662f\u5426\u8981\u663e\u793a\u6307\u793a\u5668\u52a8\u753b\uff0c\u9ed8\u8ba4\u4e3a true \u8868\u793a\u663e\u793a\uff0cfalse \u5219\u9690\u85cf\u3002"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,i.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"bool"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"true"))))),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"color"},(0,i.kt)("inlineCode",{parentName:"h3"},"color")),(0,i.kt)("p",null,"\u6eda\u8f6e\u7684\u524d\u666f\u989c\u8272\u3002"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,i.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"colors"},"color")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"null")," (\u7cfb\u7edf\u9ed8\u8ba4\u7684\u5f3a\u8c03\u8272)",(0,i.kt)("div",{class:"label android"},"Android"),(0,i.kt)("hr",null),(0,i.kt)("ins",{style:{background:"#999"},className:"color-box"}),(0,i.kt)("inlineCode",{parentName:"td"},"'#999999'")," ",(0,i.kt)("div",{className:"label ios"},"iOS"))))),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"hideswhenstopped-ios"},(0,i.kt)("inlineCode",{parentName:"h3"},"hidesWhenStopped")," ",(0,i.kt)("div",{class:"label ios"},"iOS")),(0,i.kt)("p",null,"\u5728",(0,i.kt)("inlineCode",{parentName:"p"},"animating"),"\u4e3a false \u7684\u65f6\u5019\uff0c\u662f\u5426\u8981\u9690\u85cf\u6307\u793a\u5668\uff08\u9ed8\u8ba4\u4e3a true\uff09\u3002\u5982\u679c",(0,i.kt)("inlineCode",{parentName:"p"},"animating"),"\u548c",(0,i.kt)("inlineCode",{parentName:"p"},"hidesWhenStopped"),"\u90fd\u4e3a false\uff0c\u5219\u663e\u793a\u4e00\u4e2a\u9759\u6b62\u7684\u6307\u793a\u5668\u3002"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,i.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"bool"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"true"))))),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"size"},(0,i.kt)("inlineCode",{parentName:"h3"},"size")),(0,i.kt)("p",null,"\u6307\u793a\u5668\u7684\u5927\u5c0f\uff0c\u9ed8\u8ba4\u4e3a'small'\u3002\u76ee\u524d\u53ea\u80fd\u5728 Android \u4e0a\u8bbe\u5b9a\u5177\u4f53\u7684\u6570\u503c\u3002"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,i.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"enum(",(0,i.kt)("inlineCode",{parentName:"td"},"'small'"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"'large'"),")",(0,i.kt)("hr",null),"number ",(0,i.kt)("div",{class:"label android"},"Android")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"'small'"))))),(0,i.kt)("hr",null),(0,i.kt)("h5",{id:"\u672c\u6587\u6863\u8d21\u732e\u8005\uff1asunnylqm6693-sunnylqm3307"},"\u672c\u6587\u6863\u8d21\u732e\u8005\uff1a",(0,i.kt)("a",{parentName:"h5",href:"https://github.com/search?q=sunnylqm&type=Users"},"sunnylqm"),"(66.93%), ",(0,i.kt)("a",{parentName:"h5",href:"https://github.com/search?q=sunnylqm&type=Users"},"sunnylqm"),"(33.07%)"))}v.isMDXComponent=!0}}]);
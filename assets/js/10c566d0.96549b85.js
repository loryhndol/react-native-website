(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[99370],{35318:function(t,e,n){"use strict";n.d(e,{Zo:function(){return d},kt:function(){return k}});var a=n(27378);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function p(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var i=a.createContext({}),u=function(t){var e=a.useContext(i),n=e;return t&&(n="function"==typeof t?t(e):p(p({},e),t)),n},d=function(t){var e=u(t.components);return a.createElement(i.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,i=t.parentName,d=o(t,["components","mdxType","originalType","parentName"]),m=u(n),k=r,c=m["".concat(i,".").concat(k)]||m[k]||s[k]||l;return n?a.createElement(c,p(p({ref:e},d),{},{components:n})):a.createElement(c,p({ref:e},d))}));function k(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,p=new Array(l);p[0]=m;var o={};for(var i in e)hasOwnProperty.call(e,i)&&(o[i]=e[i]);o.originalType=t,o.mdxType="string"==typeof t?t:r,p[1]=o;for(var u=2;u<l;u++)p[u]=n[u];return a.createElement.apply(null,p)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},50517:function(t,e,n){"use strict";n.r(e),n.d(e,{frontMatter:function(){return p},contentTitle:function(){return o},metadata:function(){return i},toc:function(){return u},default:function(){return s}});var a=n(29603),r=n(50120),l=(n(27378),n(35318)),p={id:"alertios",title:"AlertIOS"},o=void 0,i={unversionedId:"alertios",id:"version-0.63/alertios",isDocsHomePage:!1,title:"AlertIOS",description:"AlertIOS\u7528\u4e8e\u5f39\u51fa\u4e00\u4e2a iOS \u63d0\u793a\u5bf9\u8bdd\u6846\uff0c\u53ef\u4ee5\u901a\u77e5\u7528\u6237\u4e00\u4e9b\u4fe1\u606f\u6216\u662f\u63d0\u793a\u7528\u6237\u8f93\u5165\u4e00\u4e9b\u6587\u5b57\u3002",source:"@site/versioned_docs/version-0.63/alertios.md",sourceDirName:".",slug:"/alertios",permalink:"/docs/0.63/alertios",editUrl:"https://github.com/reactnativecn/react-native-website/blob/production/cnwebsite/../cndocs/alertios.md",tags:[],version:"0.63",frontMatter:{id:"alertios",title:"AlertIOS"}},u=[{value:"\u65b9\u6cd5",id:"\u65b9\u6cd5",children:[{value:"<code>alert()</code>",id:"alert",children:[]},{value:"<code>prompt()</code>",id:"prompt",children:[]}]},{value:"\u7c7b\u578b\u5b9a\u4e49",id:"\u7c7b\u578b\u5b9a\u4e49",children:[{value:"AlertType",id:"alerttype",children:[]},{value:"AlertButtonStyle",id:"alertbuttonstyle",children:[]},{value:"ButtonsArray",id:"buttonsarray",children:[]}]}],d={toc:u};function s(t){var e=t.components,n=(0,r.Z)(t,["components"]);return(0,l.kt)("wrapper",(0,a.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"AlertIOS"),"\u7528\u4e8e\u5f39\u51fa\u4e00\u4e2a iOS \u63d0\u793a\u5bf9\u8bdd\u6846\uff0c\u53ef\u4ee5\u901a\u77e5\u7528\u6237\u4e00\u4e9b\u4fe1\u606f\u6216\u662f\u63d0\u793a\u7528\u6237\u8f93\u5165\u4e00\u4e9b\u6587\u5b57\u3002"),(0,l.kt)("p",null,"\u5f39\u51fa\u4e00\u4e2a iOS \u63d0\u793a\u6846\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"AlertIOS.alert(\n 'Sync Complete',\n 'All your data are belong to us.'\n);\n")),(0,l.kt)("p",null,"\u5f39\u51fa\u4e00\u4e2a\u5e26\u8f93\u5165\u6846\u7684 iOS \u63d0\u793a\u6846\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"AlertIOS.prompt(\n  'Enter a value',\n  null,\n  text => console.log(\"You entered \"+text)\n);\n")),(0,l.kt)("p",null,"\u5176\u4ed6\u60c5\u51b5\u4e0b\uff0c\u5c24\u5176\u662f\u4ec5\u4ec5\u663e\u793a\u4e00\u4e2a\u9759\u6001\u7684\u63d0\u793a\u6846\u65f6\uff0c\u5e94\u8be5\u4f7f\u7528\u8de8\u5e73\u53f0\u7684",(0,l.kt)("a",{parentName:"p",href:"/docs/0.63/alert"},(0,l.kt)("inlineCode",{parentName:"a"},"Alert")),"\u3002"),(0,l.kt)("hr",null),(0,l.kt)("h1",{id:"\u6587\u6863"},"\u6587\u6863"),(0,l.kt)("h2",{id:"\u65b9\u6cd5"},"\u65b9\u6cd5"),(0,l.kt)("h3",{id:"alert"},(0,l.kt)("inlineCode",{parentName:"h3"},"alert()")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"static alert(title: string, [message]: string, [callbackOrButtons]: ?(() => void), ButtonsArray, [type]: AlertType): [object Object]\n")),(0,l.kt)("p",null,"\u521b\u5efa\u5e76\u663e\u793a\u4e00\u4e2a\u63d0\u793a\u6846\u3002"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u53c2\u6570\uff1a")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u540d\u79f0"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u5fc5\u9700"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"title"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,l.kt)("td",{parentName:"tr",align:null},"The dialog's title. Passing null or '' will hide the title.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"message"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"An optional message that appears below the dialog's title.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"callbackOrButtons"),(0,l.kt)("td",{parentName:"tr",align:null},"?(() => void),",(0,l.kt)("a",{parentName:"td",href:"/docs/0.63/alertios#buttonsarray"},"ButtonsArray")),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"This optional argument should be either a single-argument function or an array of buttons. If passed a function, it will be called when the user taps 'OK'. If passed an array of button configurations, each button should include a ",(0,l.kt)("inlineCode",{parentName:"td"},"text")," key, as well as optional ",(0,l.kt)("inlineCode",{parentName:"td"},"onPress")," and ",(0,l.kt)("inlineCode",{parentName:"td"},"style")," keys. ",(0,l.kt)("inlineCode",{parentName:"td"},"style")," should be one of 'default', 'cancel' or 'destructive'.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/0.63/alertios#alerttype"},"AlertType")),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"Deprecated, do not use.")))),(0,l.kt)("p",null,"Example with custom buttons:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"AlertIOS.alert(\n  'Update available',\n  'Keep your app up to date to enjoy the latest features',\n  [\n    {\n      text: 'Cancel',\n      onPress: () => console.log('Cancel Pressed'),\n      style: 'cancel'\n    },\n    {\n      text: 'Install',\n      onPress: () => console.log('Install Pressed')\n    }\n  ]\n);\n")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"prompt"},(0,l.kt)("inlineCode",{parentName:"h3"},"prompt()")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"static prompt(title: string, [message]: string, [callbackOrButtons]: ?((text: string) => void), ButtonsArray, [type]: AlertType, [defaultValue]: string, [keyboardType]: string): [object Object]\n")),(0,l.kt)("p",null,"Create and display a prompt to enter some text."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u53c2\u6570\uff1a")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u540d\u79f0"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u5fc5\u9700"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"title"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,l.kt)("td",{parentName:"tr",align:null},"The dialog's title.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"message"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"An optional message that appears above the text input.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"callbackOrButtons"),(0,l.kt)("td",{parentName:"tr",align:null},"?((text: string) => void),",(0,l.kt)("a",{parentName:"td",href:"/docs/0.63/alertios#buttonsarray"},"ButtonsArray")),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"This optional argument should be either a single-argument function or an array of buttons. If passed a function, it will be called with the prompt's value when the user taps 'OK'. If passed an array of button configurations, each button should include a ",(0,l.kt)("inlineCode",{parentName:"td"},"text")," key, as well as optional ",(0,l.kt)("inlineCode",{parentName:"td"},"onPress")," and ",(0,l.kt)("inlineCode",{parentName:"td"},"style")," keys (see example). ",(0,l.kt)("inlineCode",{parentName:"td"},"style")," should be one of 'default', 'cancel' or 'destructive'.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/0.63/alertios#alerttype"},"AlertType")),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"This configures the text input. One of 'plain-text', 'secure-text' or 'login-password'.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"defaultValue"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"The default text in text input.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"keyboardType"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"The keyboard type of first text field(if exists). One of 'default', 'email-address', 'numeric', 'phone-pad', 'ascii-capable', 'numbers-and-punctuation', 'url', 'number-pad', 'name-phone-pad', 'decimal-pad', 'twitter' or 'web-search'.")))),(0,l.kt)("p",null,"Example with custom buttons:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"AlertIOS.prompt(\n  'Enter password',\n  'Enter your password to claim your $1.5B in lottery winnings',\n  [\n    {\n      text: 'Cancel',\n      onPress: () => console.log('Cancel Pressed'),\n      style: 'cancel'\n    },\n    {\n      text: 'OK',\n      onPress: (password) =>\n        console.log('OK Pressed, password: ' + password)\n    }\n  ],\n  'secure-text'\n);\n")),(0,l.kt)("p",null,","),(0,l.kt)("p",null,"Example with the default button and a custom callback:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"AlertIOS.prompt(\n  'Update username',\n  null,\n  (text) => console.log('Your username is ' + text),\n  null,\n  'default'\n);\n")),(0,l.kt)("h2",{id:"\u7c7b\u578b\u5b9a\u4e49"},"\u7c7b\u578b\u5b9a\u4e49"),(0,l.kt)("h3",{id:"alerttype"},"AlertType"),(0,l.kt)("p",null,"An Alert button type"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\\$Enum")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u5e38\u91cf\uff1a")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Value"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"default"),(0,l.kt)("td",{parentName:"tr",align:null},"Default alert with no inputs")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"plain-text"),(0,l.kt)("td",{parentName:"tr",align:null},"Plain text input alert")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"secure-text"),(0,l.kt)("td",{parentName:"tr",align:null},"Secure text input alert")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"login-password"),(0,l.kt)("td",{parentName:"tr",align:null},"Login and password alert")))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"alertbuttonstyle"},"AlertButtonStyle"),(0,l.kt)("p",null,"An Alert button style"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\\$Enum")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u5e38\u91cf\uff1a")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Value"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"default"),(0,l.kt)("td",{parentName:"tr",align:null},"Default button style")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"cancel"),(0,l.kt)("td",{parentName:"tr",align:null},"Cancel button style")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"destructive"),(0,l.kt)("td",{parentName:"tr",align:null},"Destructive button style")))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"buttonsarray"},"ButtonsArray"),(0,l.kt)("p",null,"Array or buttons"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Array")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u5c5e\u6027\uff1a")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u540d\u79f0"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"[text]"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"Button label")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"[onPress]"),(0,l.kt)("td",{parentName:"tr",align:null},"function"),(0,l.kt)("td",{parentName:"tr",align:null},"Callback function when button pressed")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"[style]"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/0.63/alertios#alertbuttonstyle"},"AlertButtonStyle")),(0,l.kt)("td",{parentName:"tr",align:null},"Button style")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u5e38\u91cf\uff1a")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Value"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"text"),(0,l.kt)("td",{parentName:"tr",align:null},"Button label")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"onPress"),(0,l.kt)("td",{parentName:"tr",align:null},"Callback function when button pressed")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"style"),(0,l.kt)("td",{parentName:"tr",align:null},"Button style")))),(0,l.kt)("hr",null),(0,l.kt)("h5",{id:"\u672c\u6587\u6863\u8d21\u732e\u8005\uff1asunnylqm7684-sunnylqm2316"},"\u672c\u6587\u6863\u8d21\u732e\u8005\uff1a",(0,l.kt)("a",{parentName:"h5",href:"https://github.com/search?q=sunnylqm&type=Users"},"sunnylqm"),"(76.84%), ",(0,l.kt)("a",{parentName:"h5",href:"https://github.com/search?q=sunnylqm&type=Users"},"sunnylqm"),"(23.16%)"))}s.isMDXComponent=!0}}]);
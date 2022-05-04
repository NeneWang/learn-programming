"use strict";(self.webpackChunklearn_programming=self.webpackChunklearn_programming||[]).push([[9176],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=c(n),d=i,h=u["".concat(s,".").concat(d)]||u[d]||m[d]||r;return n?a.createElement(h,l(l({ref:t},p),{},{components:n})):a.createElement(h,l({ref:t},p))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var c=2;c<r;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1134:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return m}});var a=n(7462),i=n(3366),r=(n(7294),n(3905)),l=["components"],o={sidebar_position:4,title:"Chapter 2b - Typecasting"},s=void 0,c={unversionedId:"lesson-notes/lesson-2b",id:"lesson-notes/lesson-2b",title:"Chapter 2b - Typecasting",description:"Typecasting",source:"@site/java/lesson-notes/lesson-2b.md",sourceDirName:"lesson-notes",slug:"/lesson-notes/lesson-2b",permalink:"/java/lesson-notes/lesson-2b",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,title:"Chapter 2b - Typecasting"},sidebar:"tutorialSidebar",previous:{title:"Chapter 2a - Data Types in Java",permalink:"/java/lesson-notes/lesson-2a"},next:{title:"Chapter 2c - Built-in Functions and Math",permalink:"/java/lesson-notes/lesson-2c"}},p={},m=[{value:"Typecasting",id:"typecasting",level:2},{value:"Example Implicit Typecasting",id:"example-implicit-typecasting",level:3},{value:"Example Explicit Typecasting",id:"example-explicit-typecasting",level:3},{value:"Potential Errors When Typecasting",id:"potential-errors-when-typecasting",level:2},{value:"Avoiding Errors: This will throw you an error",id:"avoiding-errors-this-will-throw-you-an-error",level:3},{value:"Do this instead",id:"do-this-instead",level:3}],u={toc:m};function d(e){var t=e.components,o=(0,i.Z)(e,l);return(0,r.kt)("wrapper",(0,a.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"typecasting"},"Typecasting"),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Casting")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},(0,r.kt)("img",{src:n(4397).Z,width:"1451",height:"594"}),"\nWe can sort of do something similar in Java, but with Variable Types\n| Images extracted from ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Casting#/media/File:Cast_iron_melting.JPG"},"P Akthy")," and ",(0,r.kt)("a",{parentName:"p",href:"https://www.machinemfg.com/types-of-casting/"},"machinemfg")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"float myFloat = 1.5f;\nint myInt = (int) myDouble; // changes float to int \n")),(0,r.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"Typecasting might lead to loss of precision")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"In Implicit conversions, one data type is automatically converted into another if found compatible, but it should be in the right order else it may lead to loss of precision."),(0,r.kt)("pre",{parentName:"div"},(0,r.kt)("code",{parentName:"pre"},"char->short-> int->float->double->long\n")))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"\ud83d\udcda Explicit & Implicit?"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Explicit"),": stated clearly and in detail, leaving no room for confusion or doubt."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Implicit"),": implied though not plainly expressed."))),(0,r.kt)("h3",{id:"example-implicit-typecasting"},"Example Implicit Typecasting"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'public class Main {\n public static void main(String args[]) {\n   int x = 10; // integer x\n   // x is implicitly converted to float\n   float z =x + 1.0f;\n   System.out.println("x = " + x );\n   System.out.println("z = \'x+1.0f\'(x=10) = " + z );\n }\n}\n')),(0,r.kt)("p",null,"Output"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"x = 10\nz = 'x+1.0f'(x=10) = 11.0\n")),(0,r.kt)("details",null,(0,r.kt)("summary",null,"\ud83e\uddea Try the code out!"),(0,r.kt)("iframe",{src:"https://trinket.io/embed/java/67bc304013",width:"100%",height:"300",frameborder:"0",marginwidth:"0",marginheight:"0",allowfullscreen:!0})),(0,r.kt)("h3",{id:"example-explicit-typecasting"},"Example Explicit Typecasting"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'public class Main {\n\npublic static void main(String args[]) {\n  double d=1.6;\n  int val=(int)d; //casting from double to int\n  System.out.println("val = "+val );\n  }\n}\n')),(0,r.kt)("p",null,"Output"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"val = 1\n")),(0,r.kt)("details",null,(0,r.kt)("summary",null,"\ud83e\uddea Try the code out!"),(0,r.kt)("iframe",{src:"https://trinket.io/embed/java/22d570ec86",width:"100%",height:"300",frameborder:"0",marginwidth:"0",marginheight:"0",allowfullscreen:!0}),(0,r.kt)("p",null,"\ud83d\ude4b\u200d\u2642\ufe0f Analysis"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Why do you think that the code prints ",(0,r.kt)("inlineCode",{parentName:"li"},"1")," instead of ",(0,r.kt)("inlineCode",{parentName:"li"},"1.6"),"?"))),(0,r.kt)("h2",{id:"potential-errors-when-typecasting"},"Potential Errors When Typecasting"),(0,r.kt)("h3",{id:"avoiding-errors-this-will-throw-you-an-error"},"Avoiding Errors: This will throw you an error"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'public class Main {\n public static void main(String args[]) {\n int val=(int)2.4 - 2.1;\n System.out.println("val = " +val);\n }\n}\n')),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(4928).Z,width:"1592",height:"358"})),(0,r.kt)("details",null,(0,r.kt)("summary",null,"\ud83e\uddea Try the code out! - This will throw an error"),(0,r.kt)("iframe",{src:"https://trinket.io/embed/java/e9412a0e94",width:"100%",height:"300",frameborder:"0",marginwidth:"0",marginheight:"0",allowfullscreen:!0})),(0,r.kt)("h3",{id:"do-this-instead"},"Do this instead"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'public class Main {\n public static void main(String args[]) {\n int val=(int)(2.4 - 2.1);\n System.out.println("val = " +val);\n }\n}\n')),(0,r.kt)("details",null,(0,r.kt)("summary",null,"\ud83e\uddea Try the code out!"),(0,r.kt)("iframe",{src:"https://trinket.io/embed/java/2977c211c5",width:"100%",height:"300",frameborder:"0",marginwidth:"0",marginheight:"0",allowfullscreen:!0})))}d.isMDXComponent=!0},4928:function(e,t,n){t.Z=n.p+"assets/images/2022-05-04-13-58-33-cb150676a3703a56dcda89c5c3025579.png"},4397:function(e,t,n){t.Z=n.p+"assets/images/2022-05-04-04-15-52-84cff0c4a03051636313cffb0bf74253.png"}}]);
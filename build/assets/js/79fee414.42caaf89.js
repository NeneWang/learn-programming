"use strict";(self.webpackChunklearn_programming=self.webpackChunklearn_programming||[]).push([[1714],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return d}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(t),d=o,f=m["".concat(l,".").concat(d)]||m[d]||u[d]||a;return t?r.createElement(f,i(i({ref:n},p),{},{components:t})):r.createElement(f,i({ref:n},p))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=m;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},8955:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return u}});var r=t(3117),o=t(102),a=(t(7294),t(3905)),i=["components"],s={title:"Chapter 6b - For Loops"},l=void 0,c={unversionedId:"lesson-notes/lesson-6b",id:"lesson-notes/lesson-6b",title:"Chapter 6b - For Loops",description:"Introducing For Loops",source:"@site/java/lesson-notes/lesson-6b.md",sourceDirName:"lesson-notes",slug:"/lesson-notes/lesson-6b",permalink:"/java/lesson-notes/lesson-6b",tags:[],version:"current",frontMatter:{title:"Chapter 6b - For Loops"},sidebar:"tutorialSidebar",previous:{title:"Chapter 6a - While Loops",permalink:"/java/lesson-notes/lesson-6a"},next:{title:"Chapter 7a - Nested Loops",permalink:"/java/lesson-notes/lesson-7a"}},p={},u=[{value:"Introducing For Loops",id:"introducing-for-loops",level:2},{value:"Placing Tables",id:"placing-tables",level:2}],m={toc:u};function d(e){var n=e.components,t=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"introducing-for-loops"},"Introducing For Loops"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"\nimport java.util.*;\nclass Main {\n  public static void main(String[] args) {\n    for(int i = 1; i<3; i++){\n      System.out.println(i);\n    }\n    \n  }\n}\n\n")),(0,a.kt)("iframe",{src:"https://trinket.io/embed/java/4827fcc3f6",width:"100%",height:"600",frameborder:"0",marginwidth:"0",marginheight:"0",allowfullscreen:!0}),(0,a.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},(0,a.kt)("img",{parentName:"p",src:"https://qph.cf2.quoracdn.net/main-qimg-57de0b301da5ce4c0dd813bc26162c80",alt:null})),(0,a.kt)("p",{parentName:"div"},"Animation extracted from ",(0,a.kt)("a",{parentName:"p",href:"https://www.quora.com/How-do-I-use-a-for-loop-in-Java"},"Quora")))),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://learn2codelive.com/courses/107/pages/lesson-6-learning-activities-e1-introduce-for-loop-in-python?module_item_id=9181"},"\ud83d\udc40")),(0,a.kt)("h2",{id:"placing-tables"},"Placing Tables"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'import java.util.*;\n// https://www.geeksforgeeks.org/java-for-loop-with-examples/\nclass Main {\n  public static void main(String[] args) {\n    Scanner sc = new Scanner(System.in);\n    // a simulation of setting the table\n    System.out.println("Enter number of table placements to be set");\n    int n = sc.nextInt();\n    sc.close();\n    int i;\n    for(i = 1; i<=n; i++){\n      System.out.println("Plate placed");\n      System.out.println("Silverware placed");\n      System.out.println("Napkin placed");\n      System.out.println("Glass of water placed");\n      System.out.println("Table has been set for " + i);\n      System.out.println();\n    }\n    System.out.println("It\'s dinner time!");\n  }\n}\n')))}d.isMDXComponent=!0}}]);
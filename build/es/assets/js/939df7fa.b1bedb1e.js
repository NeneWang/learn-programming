"use strict";(self.webpackChunklearn_programming=self.webpackChunklearn_programming||[]).push([[8352],{3905:function(e,r,t){t.d(r,{Zo:function(){return p},kt:function(){return f}});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=n.createContext({}),c=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},p=function(e){var r=c(e.components);return n.createElement(l.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=c(t),f=o,g=m["".concat(l,".").concat(f)]||m[f]||u[f]||a;return t?n.createElement(g,s(s({ref:r},p),{},{components:t})):n.createElement(g,s({ref:r},p))}));function f(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,s=new Array(a);s[0]=m;var i={};for(var l in r)hasOwnProperty.call(r,l)&&(i[l]=r[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var c=2;c<a;c++)s[c]=t[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},8720:function(e,r,t){t.r(r),t.d(r,{assets:function(){return p},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return u}});var n=t(3117),o=t(102),a=(t(7294),t(3905)),s=["components"],i={title:"Chapter 3b - Errors"},l=void 0,c={unversionedId:"lesson-notes/lesson-3b",id:"lesson-notes/lesson-3b",title:"Chapter 3b - Errors",description:"Syntax error: Syntax errors are mistakes that a developer/user can do while writing the code.",source:"@site/java/lesson-notes/lesson-3b.md",sourceDirName:"lesson-notes",slug:"/lesson-notes/lesson-3b",permalink:"/es/java/lesson-notes/lesson-3b",tags:[],version:"current",frontMatter:{title:"Chapter 3b - Errors"},sidebar:"tutorialSidebar",previous:{title:"Chapter 3a - User Input",permalink:"/es/java/lesson-notes/lesson-3a"},next:{title:"Chapter 4a - Conditionals",permalink:"/es/java/lesson-notes/lesson-4a"}},p={},u=[{value:"Example Syntax Error",id:"example-syntax-error",level:3},{value:"Example Logical Error",id:"example-logical-error",level:3}],m={toc:u};function f(e){var r=e.components,t=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,n.Z)({},m,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Syntax error"),": Syntax errors are mistakes that a developer/user can do while writing the code.\nExamples of syntax errors are missing commas,  quotes or spelling errors."),(0,a.kt)("h3",{id:"example-syntax-error"},"Example Syntax Error"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'System.out.print(" I Love Java ");// This line is correct\nsystem.out.print(" I Love Java ");//Syntax Error as  \'s\' of "system" is in lowercase.\n')),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Logical Error"),": A logical error is a bug in a program that causes it to produce wrong or unintended result. However, the program compiles and runs without showing an error on the console. "),(0,a.kt)("h3",{id:"example-logical-error"},"Example Logical Error"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"class Main {\n   public static void main(String args[]){\n   int a = 20;\n   int b = 0;\n   int result=a/b;// it is logical error as program will compile and throw\n   }              // error at runtime i.e. java.lang.ArithmeticException: / by zero\n}\n\n")))}f.isMDXComponent=!0}}]);
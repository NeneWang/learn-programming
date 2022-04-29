"use strict";(self.webpackChunklearn_programming=self.webpackChunklearn_programming||[]).push([[549],{3905:function(t,e,n){n.d(e,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var s=r.createContext({}),p=function(t){var e=r.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},u=function(t){var e=p(t.components);return r.createElement(s.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,o=t.originalType,s=t.parentName,u=i(t,["components","mdxType","originalType","parentName"]),d=p(n),m=a,h=d["".concat(s,".").concat(m)]||d[m]||c[m]||o;return n?r.createElement(h,l(l({ref:e},u),{},{components:n})):r.createElement(h,l({ref:e},u))}));function m(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var s in e)hasOwnProperty.call(e,s)&&(i[s]=e[s]);i.originalType=t,i.mdxType="string"==typeof t?t:a,l[1]=i;for(var p=2;p<o;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5182:function(t,e,n){n.r(e),n.d(e,{assets:function(){return u},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return c}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),l=["components"],i={sidebar_position:2,title:"\ud83e\uddd0 Cheatsheet"},s=void 0,p={unversionedId:"cheatsheet",id:"cheatsheet",title:"\ud83e\uddd0 Cheatsheet",description:"Hello Everyone for this class, I will focus in teaching the concepts, so you don't need to memorize anything:",source:"@site/python/cheatsheet.md",sourceDirName:".",slug:"/cheatsheet",permalink:"/python/cheatsheet",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"\ud83e\uddd0 Cheatsheet"},sidebar:"tutorialSidebar",previous:{title:"Welcome to Python Lesson Notes!",permalink:"/python/intro"},next:{title:"Welcome to Python Lesson Notes!",permalink:"/python/lesson-notes/intro"}},u={},c=[{value:"Programming Terms",id:"programming-terms",level:2},{value:"Chapter 1",id:"chapter-1",level:3},{value:"Chapter 2",id:"chapter-2",level:3}],d={toc:c};function m(t){var e=t.components,n=(0,a.Z)(t,l);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Hello Everyone for this class, I will focus in teaching the concepts, so you don't need to memorize anything: "),(0,o.kt)("p",null,"I will be creating a cheatlist with the commands and comment what they do below while we go through the course:"),(0,o.kt)("h2",{id:"programming-terms"},"Programming Terms"),(0,o.kt)("h3",{id:"chapter-1"},"Chapter 1"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Term"),(0,o.kt)("th",{parentName:"tr",align:null},"Definition"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Syntax"),(0,o.kt)("td",{parentName:"tr",align:null},"The spelling and grammar of a programming language (similar to the rules for using words, phrases, clauses and punctuation used to form sentences in English). Computers are inflexible machines that understand what you type only if you follow the rules that specify the correct combined sequence of symbols to form a correctly structured program that the computer expects. This expected form is called the syntax.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Comments and Readability"),(0,o.kt)("td",{parentName:"tr",align:null},"Line(s) of text or code that are NOT read by the computer, and rather read by you and other programmers. This improves the readability of the code. that is, it makes it easy to understand the use of the code when we get back to it at a later time.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"String"),(0,o.kt)("td",{parentName:"tr",align:null},"Text type data that is represented using single quotes or double quotes.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Number"),(0,o.kt)("td",{parentName:"tr",align:null},"Number type of data that can be understood by Python includes integers, floating point numbers.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"IDE"),(0,o.kt)("td",{parentName:"tr",align:null},"Short for Integrated Development Environment. It is a software where all the required components needed to write and run code is available in one place.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Execute"),(0,o.kt)("td",{parentName:"tr",align:null},"To run a program such that the instructions given by us are carried out to display the output.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Test & Debug"),(0,o.kt)("td",{parentName:"tr",align:null},"Identify and remove errors from computer hardware or software.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Escape Character"),(0,o.kt)("td",{parentName:"tr",align:null},"Backslash \\ is a character which invokes an alternative interpretation of subsequent characters.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Escape Sequences"),(0,o.kt)("td",{parentName:"tr",align:null},"A sequence of characters that doesn't represent itself when used inside a string. It is composed of two or more characters starting with backslash \\ ")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Decompose"),(0,o.kt)("td",{parentName:"tr",align:null},"Break down a problem in sequence.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Embed"),(0,o.kt)("td",{parentName:"tr",align:null},"To place (a piece of software) inside a virtual space. Embedded code can run by themselves, without a need for an external program.")))),(0,o.kt)("h3",{id:"chapter-2"},"Chapter 2"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Term"),(0,o.kt)("th",{parentName:"tr",align:null},"Definition"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Variable"),(0,o.kt)("td",{parentName:"tr",align:null},"A label that points to a varying quantity. We can manipulate the data referenced by the label using Python code.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Statement"),(0,o.kt)("td",{parentName:"tr",align:null},"A line of code that can be executed by Python.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Operator"),(0,o.kt)("td",{parentName:"tr",align:null},"A operator is represented by a symbol or short text and performs a specific function and provides a result. An operator requires operands, which are the values that it acts upon. Ex: In the expression 5 + 4, 5 and 4 are the operands and + is the operator.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Builtin function"),(0,o.kt)("td",{parentName:"tr",align:null},"Pre defined blocks of code that perform a specific function. Example - print(), min(), max().")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Concatenation"),(0,o.kt)("td",{parentName:"tr",align:null},"Joining two strings together.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Reusability"),(0,o.kt)("td",{parentName:"tr",align:null},"Quality of the code that allows it to be reused.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Sequencing"),(0,o.kt)("td",{parentName:"tr",align:null},"Arranging instructions in a specific order so that the expected result is observed when the instructions are processed.")))))}m.isMDXComponent=!0}}]);
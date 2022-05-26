"use strict";(self.webpackChunklearn_programming=self.webpackChunklearn_programming||[]).push([[9091],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=c(n),h=r,m=d["".concat(s,".").concat(h)]||d[h]||p[h]||i;return n?a.createElement(m,l(l({ref:t},u),{},{components:n})):a.createElement(m,l({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var c=2;c<i;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5834:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return h},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return p}});var a=n(3117),r=n(102),i=(n(7294),n(3905)),l=["components"],o={title:"Chapter 2d - Char Data Type"},s=void 0,c={unversionedId:"lesson-notes/lesson-2d",id:"lesson-notes/lesson-2d",title:"Chapter 2d - Char Data Type",description:"The char data type is used to store a single character. The character must be surrounded by single quotes, like 'A' or 'c':",source:"@site/java/lesson-notes/lesson-2d.md",sourceDirName:"lesson-notes",slug:"/lesson-notes/lesson-2d",permalink:"/java/lesson-notes/lesson-2d",tags:[],version:"current",frontMatter:{title:"Chapter 2d - Char Data Type"},sidebar:"tutorialSidebar",previous:{title:"Chapter 2c - Built-in Functions and Math",permalink:"/java/lesson-notes/lesson-2c"},next:{title:"Chapter 3a - User Input",permalink:"/java/lesson-notes/lesson-3a"}},u={},p=[{value:"The ASCII code",id:"the-ascii-code",level:2},{value:"Upper and Lower Case",id:"upper-and-lower-case",level:2},{value:"Chars and ASCII In Practice",id:"chars-and-ascii-in-practice",level:2}],d={toc:p};function h(e){var t=e.components,o=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The char data type is used to store a single character. The character must be surrounded by single quotes, like 'A' or 'c':"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"char x = 'a';    \nSystem.out.print(x);\n")),(0,i.kt)("details",null,(0,i.kt)("summary",null,"\ud83e\uddea Try the code out!"),(0,i.kt)("iframe",{src:"https://trinket.io/embed/java/e7f24f3e3b",width:"100%",height:"300",frameborder:"0",marginwidth:"0",marginheight:"0",allowfullscreen:!0})),(0,i.kt)("h2",{id:"the-ascii-code"},"The ASCII code"),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(4090).Z,width:"1199",height:"669"})),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"char x = 97;\nSystem.out.println(x);    //Should print 'a'\n")),(0,i.kt)("details",null,(0,i.kt)("summary",null,"\ud83e\uddea Try the code out!"),(0,i.kt)("iframe",{src:"https://trinket.io/embed/java/94390bd149",width:"100%",height:"200",frameborder:"0",marginwidth:"0",marginheight:"0",allowfullscreen:!0})),(0,i.kt)("h2",{id:"upper-and-lower-case"},"Upper and Lower Case"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"public class Main\n{\n public static void main(String[] args) \n {\n   char ch1 = 'a';\n   char ch2 = 'B';\n   System.out.println(Character.toUpperCase(ch1));//converts lowercase to uppercase\n   System.out.println(Character.toLowerCase(ch2));//converts uppercase to lowercase\n }\n}\n")),(0,i.kt)("details",null,(0,i.kt)("summary",null,"\ud83e\uddea Try the code out!"),(0,i.kt)("iframe",{src:"https://trinket.io/embed/java/ccf08839d2",width:"100%",height:"600",frameborder:"0",marginwidth:"0",marginheight:"0",allowfullscreen:!0})),(0,i.kt)("h2",{id:"chars-and-ascii-in-practice"},"Chars and ASCII In Practice"),(0,i.kt)("details",null,(0,i.kt)("summary",null,"\u270d Try the following examples in this playground"),(0,i.kt)("iframe",{src:"https://trinket.io/embed/java/1052b8dca8",width:"100%",height:"600",frameborder:"0",marginwidth:"0",marginheight:"0",allowfullscreen:!0})),(0,i.kt)("p",null,"What happens when we try to store a char value in an integer?"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"public class Main {\n    public static void main(String args[]) {\n    int val='A';\n    System.out.println(\"val = \" +val);\n    }`\n} \n")),(0,i.kt)("p",null,"What happens when we typecast an int value to a char type?"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"public class Main {\n public static void main(String[] args) {\n   int x = 5;\n   char y = (char)x;  \n   System.out.println(x + y);  \n }\n}\n")),(0,i.kt)("p",null,"What happens we try to add a char to an integer?"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Java will take ASCII value of char and add it to the int, so the result will be unpredicted. Try this:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"\nint x = 5;\nchar y = '5';\nSystem.out.println (x + y);\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-SHELL"},"OUTPUT: 58 (because it will take ASCII value of '5' that is 53 and add it to 5)\n")),(0,i.kt)("p",null,"What is the output seen when combining int and String variables? "),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"if x = 5 and y = \u201c6\u201d, then output is 56 (string concatenation). Anything added to string is converted to string in java.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'public class Main {\n public static void main(String[] args)    \n   {   \n       int x = 5;\n       String y = "6";\n       System.out.println(x + y);\n   } \n}\n')))}h.isMDXComponent=!0},4090:function(e,t,n){t.Z=n.p+"assets/images/2022-05-04-05-31-24-ac14163f0213af9e7f22745edf8bdeb7.png"}}]);
"use strict";(self.webpackChunklearn_programming=self.webpackChunklearn_programming||[]).push([[55],{3905:function(t,e,n){n.d(e,{Zo:function(){return u},kt:function(){return k}});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var m=a.createContext({}),p=function(t){var e=a.useContext(m),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},u=function(t){var e=p(t.components);return a.createElement(m.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},d=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,m=t.parentName,u=o(t,["components","mdxType","originalType","parentName"]),d=p(n),k=r,g=d["".concat(m,".").concat(k)]||d[k]||s[k]||l;return n?a.createElement(g,i(i({ref:e},u),{},{components:n})):a.createElement(g,i({ref:e},u))}));function k(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=d;var o={};for(var m in e)hasOwnProperty.call(e,m)&&(o[m]=e[m]);o.originalType=t,o.mdxType="string"==typeof t?t:r,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7530:function(t,e,n){n.r(e),n.d(e,{assets:function(){return u},contentTitle:function(){return m},default:function(){return k},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return s}});var a=n(7462),r=n(3366),l=(n(7294),n(3905)),i=["components"],o={sidebar_position:3,title:"Lesson 2a - Data Types in Java"},m=void 0,p={unversionedId:"lesson-notes/lesson-2a",id:"lesson-notes/lesson-2a",title:"Lesson 2a - Data Types in Java",description:"Data Types",source:"@site/java/lesson-notes/lesson-2a.md",sourceDirName:"lesson-notes",slug:"/lesson-notes/lesson-2a",permalink:"/java/lesson-notes/lesson-2a",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"Lesson 2a - Data Types in Java"},sidebar:"tutorialSidebar",previous:{title:"Lesson 1b",permalink:"/java/lesson-notes/lesson-1b"},next:{title:"Solved Problems",permalink:"/java/solved"}},u={},s=[{value:"Data Types",id:"data-types",level:2},{value:"Working with Variables",id:"working-with-variables",level:2},{value:"Arithmetic Operators",id:"arithmetic-operators",level:2},{value:"Using Math Operators",id:"using-math-operators",level:3},{value:"Compound assignment operator",id:"compound-assignment-operator",level:2},{value:"Integrated Example",id:"integrated-example",level:3}],d={toc:s};function k(t){var e=t.components,n=(0,r.Z)(t,i);return(0,l.kt)("wrapper",(0,a.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"data-types"},"Data Types"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Data Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Size"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"1 bit"),(0,l.kt)("td",{parentName:"tr",align:null},"Stores true or false")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"char"),(0,l.kt)("td",{parentName:"tr",align:null},"2 bytes"),(0,l.kt)("td",{parentName:"tr",align:null},"Stores a single character i.e. 'a'. '1' etc.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"byte"),(0,l.kt)("td",{parentName:"tr",align:null},"1 byte"),(0,l.kt)("td",{parentName:"tr",align:null},"Stores whole numbers from -128 to 127")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"short"),(0,l.kt)("td",{parentName:"tr",align:null},"2 bytes"),(0,l.kt)("td",{parentName:"tr",align:null},"Stores whole numbers from -32,768 to 32,767")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},"4 bytes"),(0,l.kt)("td",{parentName:"tr",align:null},"Stores whole numbers from -2,147,483,648 to 2,147,483,647")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"long"),(0,l.kt)("td",{parentName:"tr",align:null},"8 bytes"),(0,l.kt)("td",{parentName:"tr",align:null},"Stores whole numbers from -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"float"),(0,l.kt)("td",{parentName:"tr",align:null},"4 bytes"),(0,l.kt)("td",{parentName:"tr",align:null},"Sufficient for storing 6 to 7 decimal digits")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"double"),(0,l.kt)("td",{parentName:"tr",align:null},"8 bytes"),(0,l.kt)("td",{parentName:"tr",align:null},"Stores decimal numbers. It can store up to 15 decimal digits.")))),(0,l.kt)("h2",{id:"working-with-variables"},"Working with Variables"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Data Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Size"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},"4 bytes"),(0,l.kt)("td",{parentName:"tr",align:null},"Stores whole numbers from -2,147,483,648 to 2,147,483,647")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"short"),(0,l.kt)("td",{parentName:"tr",align:null},"2 bytes"),(0,l.kt)("td",{parentName:"tr",align:null},"Stores whole numbers from -32,768 to 32,767")))),(0,l.kt)("details",null,(0,l.kt)("summary",null,"\ud83e\uddea Try the code out!"),(0,l.kt)("iframe",{src:"https://trinket.io/embed/java/e694e1d8b3",width:"100%",height:"300",frameborder:"0",marginwidth:"0",marginheight:"0",allowfullscreen:!0})),(0,l.kt)("h2",{id:"arithmetic-operators"},"Arithmetic Operators"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Operator"),(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Example"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"+"),(0,l.kt)("td",{parentName:"tr",align:null},"Addition"),(0,l.kt)("td",{parentName:"tr",align:null},"Adds together two values"),(0,l.kt)("td",{parentName:"tr",align:null},"x + y")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"-"),(0,l.kt)("td",{parentName:"tr",align:null},"Subtraction"),(0,l.kt)("td",{parentName:"tr",align:null},"Subtracts one value from another"),(0,l.kt)("td",{parentName:"tr",align:null},"x - y")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"*"),(0,l.kt)("td",{parentName:"tr",align:null},"Multiplication"),(0,l.kt)("td",{parentName:"tr",align:null},"Multiplies two values"),(0,l.kt)("td",{parentName:"tr",align:null},"x * y")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"/"),(0,l.kt)("td",{parentName:"tr",align:null},"Division"),(0,l.kt)("td",{parentName:"tr",align:null},"Divides one value by another"),(0,l.kt)("td",{parentName:"tr",align:null},"x / y")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"%"),(0,l.kt)("td",{parentName:"tr",align:null},"Modulus"),(0,l.kt)("td",{parentName:"tr",align:null},"Returns the division remainder"),(0,l.kt)("td",{parentName:"tr",align:null},"x % y")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"++"),(0,l.kt)("td",{parentName:"tr",align:null},"Increment"),(0,l.kt)("td",{parentName:"tr",align:null},"Increases the value of a variable by 1"),(0,l.kt)("td",{parentName:"tr",align:null},"x++")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--"),(0,l.kt)("td",{parentName:"tr",align:null},"Decrement"),(0,l.kt)("td",{parentName:"tr",align:null},"Decreases the value of a variable by 1"),(0,l.kt)("td",{parentName:"tr",align:null},"x--")))),(0,l.kt)("h3",{id:"using-math-operators"},"Using Math Operators"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"public class Main {\n public static void main(String[] args) {\n   int num=100;\n   //Add\n   int sum    = 20 + 10;\n   System.out.println(sum);\n\n   //Subtraction\n   int sub    = 20 - 10;\n   System.out.println(sub);\n\n   //multiply\n   int mul    = 20 * 10;\n   System.out.println(mul);\n\n   //divide\n   int div    = 20 - 10;\n   System.out.println(div);\n\n   //modulo\n   int modulo = 20 % 10;\n   System.out.println(modulo);\n\n   //increment\n   num++;\n   System.out.println(num);\n\n   //decrement\n   num--;\n   System.out.println(num);\n }\n}\n")),(0,l.kt)("details",null,(0,l.kt)("summary",null,"\ud83e\uddea Try the code out!"),(0,l.kt)("iframe",{src:"https://trinket.io/embed/java/4ae86c0fd1",width:"100%",height:"400",frameborder:"0",marginwidth:"0",marginheight:"0",allowfullscreen:!0})),(0,l.kt)("h2",{id:"compound-assignment-operator"},"Compound assignment operator"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"operator"),(0,l.kt)("th",{parentName:"tr",align:null},"Definition"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"+="),(0,l.kt)("td",{parentName:"tr",align:null},"Addition and assignment")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"-="),(0,l.kt)("td",{parentName:"tr",align:null},"Subtraction and assignment")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"*="),(0,l.kt)("td",{parentName:"tr",align:null},"Multiplication and assignment")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"/="),(0,l.kt)("td",{parentName:"tr",align:null},"Division and assignment")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"%="),(0,l.kt)("td",{parentName:"tr",align:null},"Remainder and assignment")))),(0,l.kt)("details",null,(0,l.kt)("summary",null,"\ud83e\uddea Try the code out!"),(0,l.kt)("iframe",{src:"https://trinket.io/embed/java/2bfb91b7e7",width:"100%",height:"600",frameborder:"0",marginwidth:"0",marginheight:"0",allowfullscreen:!0})),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://learn2codelive.com/courses/107/pages/lesson-2-learning-activities-r-practice-activity-1-prediction-with-integer-data-type-and-math-operations?module_item_id=9048"},"\ud83d\udc40 Practice Activity")),(0,l.kt)("h3",{id:"integrated-example"},"Integrated Example"),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Here an example showing everything together, please feel free to try it out!")),(0,l.kt)("details",null,(0,l.kt)("summary",null,"\ud83e\uddea Try the code out!"),(0,l.kt)("iframe",{src:"https://trinket.io/embed/java/28a729f904",width:"100%",height:"600",frameborder:"0",marginwidth:"0",marginheight:"0",allowfullscreen:!0})))}k.isMDXComponent=!0}}]);
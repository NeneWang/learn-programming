"use strict";(self.webpackChunklearn_programming=self.webpackChunklearn_programming||[]).push([[4867],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return p}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(t),p=a,f=d["".concat(l,".").concat(p)]||d[p]||m[p]||o;return t?r.createElement(f,i(i({ref:n},u),{},{components:t})):r.createElement(f,i({ref:n},u))}));function p(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=d;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},9655:function(e,n,t){t.r(n),t.d(n,{assets:function(){return m},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return d}});var r=t(3117),a=t(102),o=(t(7294),t(3905)),i=t(3607),s=["components"],l={title:"Lesson 5A"},c=void 0,u={unversionedId:"lesson-notes/lesson-5a",id:"lesson-notes/lesson-5a",title:"Lesson 5A",description:"\ud83d\udc40",source:"@site/java/lesson-notes/lesson-5a.mdx",sourceDirName:"lesson-notes",slug:"/lesson-notes/lesson-5a",permalink:"/java/lesson-notes/lesson-5a",tags:[],version:"current",frontMatter:{title:"Lesson 5A"},sidebar:"tutorialSidebar",previous:{title:"Chapter 4d - String Comparison",permalink:"/java/lesson-notes/lesson-4d"},next:{title:"2d Caesar Cipher (chars)",permalink:"/java/projects/project-2d"}},m={},d=[{value:"Introduce Random Numbers in a Java Program",id:"introduce-random-numbers-in-a-java-program",level:2},{value:"Introduce Random Module - Formatting",id:"introduce-random-module---formatting",level:2},{value:"Formatting Random",id:"formatting-random",level:2}],p={toc:d};function f(e){var n=e.components,t=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://learn2codelive.com/courses/107/pages/lesson-5-learning-activities-h-entry-ticket?module_item_id=9147"},"\ud83d\udc40")),(0,o.kt)("h2",{id:"introduce-random-numbers-in-a-java-program"},"Introduce Random Numbers in a Java Program"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'import java.util.Scanner;\nimport java.util.Random;\nclass Main {\n   public static void main(String args[]) {\n       Scanner scan = new Scanner(System.in);\n       Random rand = new Random(); //creates object of class Random which is used to generate random number\n       System.out.println("This is a simulation of a coin toss.");\n       System.out.println("Tossing coin now...\\n");\n       int randomNum = rand.nextInt(2); //generates random numbers 0 & 1\n       if (randomNum == 0) {\n           System.out.println("HEADS...\\n");\n       } else {\n           System.out.println("TAILS...\\n");\n       }\n   }\n}\n')),(0,o.kt)("p",null,"(i)  Does the user provide any input here?  "),(0,o.kt)(i.Z,{checkList:["Yes","No"],answer:2,mdxType:"RadioListAns"}),(0,o.kt)("p",null,"(ii)  What are the possible outputs? "),(0,o.kt)(i.Z,{checkList:["Heads or Tails","1 and 2's","Yes and No's"],answer:1,mdxType:"RadioListAns"}),(0,o.kt)("p",null,"(iii) Which line of code requires that the random module be imported? "),(0,o.kt)(i.Z,{checkList:["Scanner scan = new Scanner(System.in);","Random rand = new Random()"],answer:2,mdxType:"RadioListAns"}),(0,o.kt)("p",null,"(iv) What are the values stored by randomNum ? "),(0,o.kt)(i.Z,{checkList:["0 and 1 only","2 and 3"],answer:1,mdxType:"RadioListAns"}),(0,o.kt)("p",null,"(v) What module is required  to generate random numbers?"),(0,o.kt)(i.Z,{checkList:["import java.util.Scanner","import java.util.Random"],answer:2,mdxType:"RadioListAns"}),(0,o.kt)("h2",{id:"introduce-random-module---formatting"},"Introduce Random Module - Formatting"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"import java.math.RoundingMode; \nimport java.text.DecimalFormat;\nclass Main {\n public static void main(String[] args) {\n   for(int count = 0; count< 5; count++){\n     System.out.println(Math.random());\n   }\n  }\n}\n")),(0,o.kt)("details",null,(0,o.kt)("summary",null,"\ud83e\uddea Try the code out~!"),(0,o.kt)("iframe",{src:"https://trinket.io/embed/java/bc83753fab",width:"100%",height:"600",frameborder:"0",marginwidth:"0",marginheight:"0",allowfullscreen:!0})),(0,o.kt)("h2",{id:"formatting-random"},"Formatting Random"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'import java.math.RoundingMode;\nimport java.text.DecimalFormat;\nclass Main {\npublic static void main(String[] args) {\n    DecimalFormat df = new DecimalFormat("0.00");\n    for(int count = 0; count< 5; count++){\n    double d=Math.random();\n    System.out.println(df.format(d)); \n  }\n }\n}\n\n')),(0,o.kt)("details",null,(0,o.kt)("summary",null,"\ud83e\uddea Try the code out~!"),(0,o.kt)("iframe",{src:"https://trinket.io/embed/java/995aaa1f9c",width:"100%",height:"300",frameborder:"0",marginwidth:"0",marginheight:"0",allowfullscreen:!0})))}f.isMDXComponent=!0},3607:function(e,n,t){t.d(n,{Z:function(){return o}});var r=t(7294);function a(e){var n=e.radio,t=e.title,a=e.toggleAnswer,o=r.useState(!1),i=o[0],s=o[1];return r.createElement("div",null,r.createElement("label",null,r.createElement("input",{type:"radio",name:n,checked:i,onChange:function(){s(!i),a(t)}}),t))}function o(e){var n=e.checkList,t=e.answer,o=(0,r.useState)(""),i=o[0],s=o[1],l=(0,r.useState)(!1),c=l[0],u=l[1],m=(n[0],function(e){s(e),u(!1)}),d=n.map((function(e){return r.createElement(a,{radio:"uniqueIdentifier",title:e,toggleAnswer:m})}));return r.createElement("div",null,c?i==n[t-1]?"Correct \ud83c\udf89 - Answer is: "+i:" Incorrect answer":"",d,r.createElement("div",null,r.createElement("button",{onClick:function(){u(!0)}},"Check answer")),r.createElement("br",null))}}}]);
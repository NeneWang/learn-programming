"use strict";(self.webpackChunklearn_programming=self.webpackChunklearn_programming||[]).push([[4867],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return p}});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),m=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=m(e.components);return a.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=m(t),p=r,h=d["".concat(s,".").concat(p)]||d[p]||u[p]||i;return t?a.createElement(h,o(o({ref:n},c),{},{components:t})):a.createElement(h,o({ref:n},c))}));function p(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=d;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var m=2;m<i;m++)o[m]=t[m];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},9655:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return m},default:function(){return h},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return d}});var a=t(3117),r=t(102),i=(t(7294),t(3905)),o=t(3607),l=["components"],s={title:"Chapter 5a - Random"},m=void 0,c={unversionedId:"lesson-notes/lesson-5a",id:"lesson-notes/lesson-5a",title:"Chapter 5a - Random",description:"Random Introduction",source:"@site/java/lesson-notes/lesson-5a.mdx",sourceDirName:"lesson-notes",slug:"/lesson-notes/lesson-5a",permalink:"/es/java/lesson-notes/lesson-5a",tags:[],version:"current",frontMatter:{title:"Chapter 5a - Random"},sidebar:"tutorialSidebar",previous:{title:"Chapter 4d - String Comparison",permalink:"/es/java/lesson-notes/lesson-4d"},next:{title:"Chapter 5b - Randomness - Continued",permalink:"/es/java/lesson-notes/lesson-5b"}},u={},d=[{value:"Random Introduction",id:"random-introduction",level:2},{value:"Coin Simulation",id:"coin-simulation",level:2},{value:"Exercise: Team Selection",id:"exercise-team-selection",level:3},{value:"Introduce Random Module - Formatting",id:"introduce-random-module---formatting",level:2},{value:"Formatting Random",id:"formatting-random",level:2},{value:"Exercise",id:"exercise",level:2}],p={toc:d};function h(e){var n=e.components,t=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"random-introduction"},"Random Introduction"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"\nimport java.util.Random;\nclass Main {\n   public static void main(String args[]) {\n       \n       Random rand = new Random(); //creates object of class Random which is used to generate random number\n       int randomNum = rand.nextInt(4); //generates random numbers\n       System.out.println(randomNum);\n   }\n}\n\n")),(0,i.kt)("details",null,(0,i.kt)("summary",null,"\ud83e\uddea Try the code out~!"),(0,i.kt)("iframe",{src:"https://trinket.io/embed/java/0162f01b4c",width:"100%",height:"400",frameborder:"0",marginwidth:"0",marginheight:"0",allowfullscreen:!0})),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://learn2codelive.com/courses/107/pages/lesson-5-learning-activities-h-entry-ticket?module_item_id=9147"},"\ud83d\udc40")),(0,i.kt)("h2",{id:"coin-simulation"},"Coin Simulation"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'import java.util.Scanner;\nimport java.util.Random;\nclass Main {\n   public static void main(String args[]) {\n       Scanner scan = new Scanner(System.in);\n       Random rand = new Random(); //creates object of class Random which is used to generate random number\n       System.out.println("This is a simulation of a coin toss.");\n       System.out.println("Tossing coin now...\\n");\n       int randomNum = rand.nextInt(2); //generates random numbers 0 & 1\n       if (randomNum == 0) {\n           System.out.println("HEADS...\\n");\n       } else {\n           System.out.println("TAILS...\\n");\n       }\n   }\n}\n')),(0,i.kt)("details",null,(0,i.kt)("summary",null,"\ud83e\uddea Try the code out~!"),(0,i.kt)("iframe",{src:"https://trinket.io/embed/java/c6925ac909",width:"100%",height:"400",frameborder:"0",marginwidth:"0",marginheight:"0",allowfullscreen:!0})),(0,i.kt)("p",null,"(i)  Does the user provide any input here?  "),(0,i.kt)(o.Z,{checkList:["Yes","No"],answer:2,mdxType:"RadioListAns"}),(0,i.kt)("p",null,"(ii)  What are the possible outputs? "),(0,i.kt)(o.Z,{checkList:["Heads or Tails","1 and 2's","Yes and No's"],answer:1,mdxType:"RadioListAns"}),(0,i.kt)("p",null,"(iii) Which line of code requires that the random module be imported? "),(0,i.kt)(o.Z,{checkList:["Scanner scan = new Scanner(System.in);","Random rand = new Random()"],answer:2,mdxType:"RadioListAns"}),(0,i.kt)("p",null,"(iv) What are the values stored by randomNum ? "),(0,i.kt)(o.Z,{checkList:["0 and 1 only","2 and 3"],answer:1,mdxType:"RadioListAns"}),(0,i.kt)("p",null,"(v) What module is required  to generate random numbers?"),(0,i.kt)(o.Z,{checkList:["import java.util.Scanner","import java.util.Random"],answer:2,mdxType:"RadioListAns"}),(0,i.kt)("h3",{id:"exercise-team-selection"},"Exercise: Team Selection"),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},"Create a program to randomnly assign someone in either blue or red team")),(0,i.kt)("iframe",{src:"https://trinket.io/embed/java/fc49019365",width:"100%",height:"600",frameborder:"0",marginwidth:"0",marginheight:"0",allowfullscreen:!0}),(0,i.kt)("hr",{parentName:"div"}),(0,i.kt)("p",{parentName:"div"},"\ud83d\ude4b\u200d\u2640\ufe0f expected"),(0,i.kt)("iframe",{src:"https://trinket.io/embed/java/560b1586b8?outputOnly=true",width:"100%",height:"600",frameborder:"0",marginwidth:"0",marginheight:"0",allowfullscreen:!0}))),(0,i.kt)("h2",{id:"introduce-random-module---formatting"},"Introduce Random Module - Formatting"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"import java.math.RoundingMode; \nimport java.text.DecimalFormat;\nclass Main {\n public static void main(String[] args) {\n   for(int count = 0; count< 5; count++){\n     System.out.println(Math.random());\n   }\n  }\n}\n")),(0,i.kt)("details",null,(0,i.kt)("summary",null,"\ud83e\uddea Try the code out~!"),(0,i.kt)("iframe",{src:"https://trinket.io/embed/java/bc83753fab",width:"100%",height:"600",frameborder:"0",marginwidth:"0",marginheight:"0",allowfullscreen:!0})),(0,i.kt)("h2",{id:"formatting-random"},"Formatting Random"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'import java.math.RoundingMode;\nimport java.text.DecimalFormat;\nclass Main {\npublic static void main(String[] args) {\n    DecimalFormat df = new DecimalFormat("0.00");\n    for(int count = 0; count< 5; count++){\n    double d=Math.random();\n    System.out.println(df.format(d)); \n  }\n }\n}\n\n')),(0,i.kt)("details",null,(0,i.kt)("summary",null,"\ud83e\uddea Try the code out~!"),(0,i.kt)("iframe",{src:"https://trinket.io/embed/java/995aaa1f9c",width:"100%",height:"300",frameborder:"0",marginwidth:"0",marginheight:"0",allowfullscreen:!0})),(0,i.kt)("h2",{id:"exercise"},"Exercise"))}h.isMDXComponent=!0},3607:function(e,n,t){t.d(n,{Z:function(){return i}});var a=t(7294);function r(e){var n=e.radio,t=e.title,r=e.toggleAnswer,i=a.useState(!1),o=i[0],l=i[1];return a.createElement("div",null,a.createElement("label",null,a.createElement("input",{type:"radio",name:n,checked:o,onChange:function(){l(!o),r(t)}}),t))}function i(e){var n=e.checkList,t=e.answer,i=(0,a.useState)(""),o=i[0],l=i[1],s=(0,a.useState)(!1),m=s[0],c=s[1],u=(n[0],function(e){l(e),c(!1)}),d=n.map((function(e){return a.createElement(r,{radio:"uniqueIdentifier",title:e,toggleAnswer:u})}));return a.createElement("div",null,m?o==n[t-1]?"Correct \ud83c\udf89 - Answer is: "+o:" Incorrect answer":"",d,a.createElement("div",null,a.createElement("button",{onClick:function(){c(!0)}},"Check answer")),a.createElement("br",null))}}}]);
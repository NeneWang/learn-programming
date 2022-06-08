"use strict";(self.webpackChunklearn_programming=self.webpackChunklearn_programming||[]).push([[4383],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return p}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),m=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=m(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=m(n),p=r,h=u["".concat(l,".").concat(p)]||u[p]||c[p]||i;return n?a.createElement(h,o(o({ref:t},d),{},{components:n})):a.createElement(h,o({ref:t},d))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var m=2;m<i;m++)o[m]=n[m];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2125:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return m},default:function(){return h},frontMatter:function(){return l},metadata:function(){return d},toc:function(){return u}});var a=n(3117),r=n(102),i=(n(7294),n(3905)),o=n(3607),s=["components"],l={title:"Chapter 6a - While Loops"},m=void 0,d={unversionedId:"lesson-notes/lesson-6a",id:"lesson-notes/lesson-6a",title:"Chapter 6a - While Loops",description:"The BooleanExpression is tested, and if it is true, the Statement is executed. Then, the BooleanExpression is tested again. If it is true, the Statement is executed. This cycle repeats until the BooleanExpression is false.",source:"@site/java/lesson-notes/lesson-6a.mdx",sourceDirName:"lesson-notes",slug:"/lesson-notes/lesson-6a",permalink:"/java/lesson-notes/lesson-6a",tags:[],version:"current",frontMatter:{title:"Chapter 6a - While Loops"},sidebar:"tutorialSidebar",previous:{title:"Chapter 5b - Randomness - Continued",permalink:"/java/lesson-notes/lesson-5b"},next:{title:"Chapter 6b - For Loops",permalink:"/java/lesson-notes/lesson-6b"}},c={},u=[{value:"While Loop",id:"while-loop",level:2},{value:"Infinite Loops",id:"infinite-loops",level:2},{value:"Practice",id:"practice",level:3},{value:"Exercise: Throwing random numbers",id:"exercise-throwing-random-numbers",level:3},{value:"Using While Loops to Validate Inputs",id:"using-while-loops-to-validate-inputs",level:2},{value:"Exercise: Generate Random numbers until...",id:"exercise-generate-random-numbers-until",level:3}],p={toc:u};function h(e){var t=e.components,l=(0,r.Z)(e,s);return(0,i.kt)("wrapper",(0,a.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"While Loop")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},(0,i.kt)("img",{src:n(6803).Z,width:"337",height:"230"})),(0,i.kt)("p",{parentName:"div"},"The BooleanExpression is tested, and if it is true, the Statement is executed. Then, the BooleanExpression is tested again. If it is true, the Statement is executed. This cycle repeats until the BooleanExpression is false."))),(0,i.kt)("h2",{id:"while-loop"},"While Loop"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'import java.util.*;\nclass Main {\n  public static void main(String[] args) {\n    int number = 0;\n    while (number<5)\n    {\n        System.out.println("Hello");\n        number++;\n    }\n    \n  }\n}\n')),(0,i.kt)("details",null,(0,i.kt)("summary",null,"\ud83e\uddea Try the code out~!"),(0,i.kt)("iframe",{src:"https://trinket.io/embed/java/0aa8aff94e",width:"100%",height:"600",frameborder:"0",marginwidth:"0",marginheight:"0",allowfullscreen:!0})),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(8779).Z,width:"710",height:"308"})),(0,i.kt)("h2",{id:"infinite-loops"},"Infinite Loops"),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"Be careful and avoid creating an infinite loop")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},(0,i.kt)("img",{parentName:"p",src:"https://i.pinimg.com/originals/6c/11/e3/6c11e35213adf79ef32bc31f75897f58.gif",alt:null})),(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},"Infinite Loops")),(0,i.kt)("p",{parentName:"div"},"This code will be printing ",(0,i.kt)("inlineCode",{parentName:"p"},"Hello")," forever"),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-java"},'import java.util.*;\nclass Main {\n  public static void main(String[] args) {\n   int number = 1;\n    while (number <= 5)\n    {\n       System.out.println("Hello");\n    }\n    \n  }\n}\n')),(0,i.kt)("details",null,(0,i.kt)("summary",null,"\ud83e\uddea Try the code out~!"),(0,i.kt)("iframe",{src:"https://trinket.io/embed/java/df212d025f",width:"100%",height:"300",frameborder:"0",marginwidth:"0",marginheight:"0",allowfullscreen:!0})))),(0,i.kt)("h3",{id:"practice"},"Practice"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'int count = 10;\nwhile (count < 1)\n{\n    System.out.println("Hello World");\n    count++;\n}\n')),(0,i.kt)("p",null,"How many times will that code print ",(0,i.kt)("inlineCode",{parentName:"p"},"Hello World"),"?"),(0,i.kt)(o.Z,{checkList:["5 times","10 times"],answer:2,mdxType:"RadioListAns"}),(0,i.kt)("h3",{id:"exercise-throwing-random-numbers"},"Exercise: Throwing random numbers"),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Create a program that throws random numbers...")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("ol",{parentName:"div"},(0,i.kt)("li",{parentName:"ol"},"Create a program that generates random numbers from 0-9 (0 and 9 included) 5 times"),(0,i.kt)("li",{parentName:"ol"},"Modify it so that it now generates 100 random numbers")),(0,i.kt)("hr",{parentName:"div"}),(0,i.kt)("p",{parentName:"div"},"You can create your program using the following template."),(0,i.kt)("iframe",{src:"https://trinket.io/embed/java/eae3e912b1",width:"100%",height:"600",frameborder:"0",marginwidth:"0",marginheight:"0",allowfullscreen:!0}),(0,i.kt)("hr",{parentName:"div"}),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Hint"),(0,i.kt)("p",{parentName:"div"},"This is the code to print a random number from 0-100"),(0,i.kt)("iframe",{src:"https://trinket.io/embed/java/286df0d784",width:"100%",height:"600",frameborder:"0",marginwidth:"0",marginheight:"0",allowfullscreen:!0})),(0,i.kt)("p",{parentName:"div"},"\ud83d\ude4b\u200d\u2640\ufe0f Expected Program (1) 5 random numbers from 0-9"),(0,i.kt)("iframe",{src:"https://trinket.io/embed/java/55795bac9c?outputOnly=true",width:"100%",height:"300",frameborder:"0",marginwidth:"0",marginheight:"0",allowfullscreen:!0}),(0,i.kt)("p",{parentName:"div"},"\ud83d\ude4b\u200d\u2640\ufe0f Expected Program (2) - 100 random numbers"),(0,i.kt)("iframe",{src:"https://trinket.io/embed/java/9befbc2c17?outputOnly=true",width:"100%",height:"600",frameborder:"0",marginwidth:"0",marginheight:"0",allowfullscreen:!0}))),(0,i.kt)("h2",{id:"using-while-loops-to-validate-inputs"},"Using While Loops to Validate Inputs"),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(8331).Z,width:"769",height:"404"})),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'\nimport java.util.*;\nclass Main {\n  public static void main(String[] args) {\n  int number;\n\n  // Create a Scanner object for keyboard input.\n  Scanner keyboard = new Scanner(System.in);\n  \n  // Get a number from the user.\n  System.out.print("Enter a number in the range of 1 through 100: ");\n  number = keyboard.nextInt();\n  \n  // Validate the input.\n  while (number < 1 || number > 100)\n  {\n     System.out.print("Invalid input. Enter a number in the range " +\n                      "of 1 through 100: ");\n     number = keyboard.nextInt();\n  }\n    \n  }\n}\n\n')),(0,i.kt)("details",null,(0,i.kt)("summary",null,"\ud83e\uddea Try the code out~!"),(0,i.kt)("iframe",{src:"https://trinket.io/embed/java/ec17c20097",width:"100%",height:"400",frameborder:"0",marginwidth:"0",marginheight:"0",allowfullscreen:!0})),(0,i.kt)("h3",{id:"exercise-generate-random-numbers-until"},"Exercise: Generate Random numbers until..."),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Exercise")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},"Create a program that generates random numbers from 0-9 until it generates number 5"),(0,i.kt)("li",{parentName:"ul"},"You can use the following template to start your code:")),(0,i.kt)("iframe",{src:"https://trinket.io/embed/java/baa22568ba",width:"100%",height:"600",frameborder:"0",marginwidth:"0",marginheight:"0",allowfullscreen:!0}),(0,i.kt)("hr",{parentName:"div"}),(0,i.kt)("p",{parentName:"div"},"\ud83d\ude4b\u200d\u2640\ufe0f Expected Program"),(0,i.kt)("iframe",{src:"https://trinket.io/embed/java/cf21d88f13?outputOnly=true",width:"100%",height:"300",frameborder:"0",marginwidth:"0",marginheight:"0",allowfullscreen:!0}))))}h.isMDXComponent=!0},3607:function(e,t,n){n.d(t,{Z:function(){return i}});var a=n(7294);function r(e){var t=e.radio,n=e.title,r=e.toggleAnswer,i=a.useState(!1),o=i[0],s=i[1];return a.createElement("div",null,a.createElement("label",null,a.createElement("input",{type:"radio",name:t,checked:o,onChange:function(){s(!o),r(n)}}),n))}function i(e){var t=e.checkList,n=e.answer,i=(0,a.useState)(""),o=i[0],s=i[1],l=(0,a.useState)(!1),m=l[0],d=l[1],c=(t[0],function(e){s(e),d(!1)}),u=t.map((function(e){return a.createElement(r,{radio:"uniqueIdentifier",title:e,toggleAnswer:c})}));return a.createElement("div",null,m?o==t[n-1]?"Correct \ud83c\udf89 - Answer is: "+o:" Incorrect answer":"",u,a.createElement("div",null,a.createElement("button",{onClick:function(){d(!0)}},"Check answer")),a.createElement("br",null))}},6803:function(e,t){t.Z="data:image/png;base64,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"},8779:function(e,t,n){t.Z=n.p+"assets/images/2022-06-07-22-54-23-f53e6d168ac2eee1be5d9900c1c9aa4d.png"},8331:function(e,t,n){t.Z=n.p+"assets/images/2022-06-07-23-17-59-d30b9627078637b95f94dc177ae53da7.png"}}]);
"use strict";(self.webpackChunklearn_programming=self.webpackChunklearn_programming||[]).push([[1688],{3905:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return p}});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},d=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),h=c(a),p=i,u=h["".concat(l,".").concat(p)]||h[p]||m[p]||r;return a?n.createElement(u,s(s({ref:t},d),{},{components:a})):n.createElement(u,s({ref:t},d))}));function p(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,s=new Array(r);s[0]=h;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:i,s[1]=o;for(var c=2;c<r;c++)s[c]=a[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},7877:function(e,t,a){a.r(t),a.d(t,{assets:function(){return m},contentTitle:function(){return c},default:function(){return u},frontMatter:function(){return l},metadata:function(){return d},toc:function(){return h}});var n=a(3117),i=a(102),r=(a(7294),a(3905)),s=a(5054),o=["components"],l={sidebar_position:3,title:"Chapter 2a - Variables & Arithmetic"},c=void 0,d={unversionedId:"lesson-notes/lesson-2a",id:"lesson-notes/lesson-2a",title:"Chapter 2a - Variables & Arithmetic",description:"",source:"@site/python/lesson-notes/lesson-2a.mdx",sourceDirName:"lesson-notes",slug:"/lesson-notes/lesson-2a",permalink:"/python/lesson-notes/lesson-2a",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"Chapter 2a - Variables & Arithmetic"},sidebar:"tutorialSidebar",previous:{title:"Chapter 1b - Turtle",permalink:"/python/lesson-notes/lesson-1b"},next:{title:"Chapter 2b - Built-in Functions",permalink:"/python/lesson-notes/lesson-2b"}},m={},h=[{value:"Variables",id:"variables",level:2},{value:"Introduction",id:"introduction",level:3},{value:"Re-assigning values to variables",id:"re-assigning-values-to-variables",level:3},{value:"Operations using variables",id:"operations-using-variables",level:3},{value:"Usage Example",id:"usage-example",level:2},{value:"Using Examples and doing math with it.",id:"using-examples-and-doing-math-with-it",level:3},{value:"Arithmetic Operators",id:"arithmetic-operators",level:2},{value:"Assigment Operators",id:"assigment-operators",level:2},{value:"Practice Activities: Apples \ud83c\udf4e",id:"practice-activities-apples-",level:2},{value:"Arithmetic Operators Practice",id:"arithmetic-operators-practice",level:2},{value:"Hiking Problem",id:"hiking-problem",level:2},{value:"Activity",id:"activity",level:3},{value:"Turtle and Variables",id:"turtle-and-variables",level:2},{value:"Lesson 2 Learning Activities E1 : Turtle graphics and variables",id:"lesson-2-learning-activities-e1--turtle-graphics-and-variables",level:3},{value:"Lesson 2 Learning Activities R : Practice Activity 4 - Smiley Face",id:"lesson-2-learning-activities-r--practice-activity-4---smiley-face",level:3}],p={toc:h};function u(e){var t=e.components,l=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,n.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"variables"},"Variables"),(0,r.kt)("h3",{id:"introduction"},"Introduction"),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Variables are like boxes")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},(0,r.kt)("img",{src:a(8412).Z,width:"745",height:"220"})),(0,r.kt)("p",{parentName:"div"},"Image extracted from ",(0,r.kt)("a",{parentName:"p",href:"https://stevenpcurtis.medium.com/what-is-a-variable-3447ac1331b9"},"StevenCurtis Medium")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"myNum =  4\nprint(myNum)\n# print(myNum+1)\n")),(0,r.kt)("details",null,(0,r.kt)("summary",null,"\ud83e\uddea Try the code out!"),(0,r.kt)("iframe",{src:"https://trinket.io/embed/python/b2edae9fe5",width:"100%",height:"300",frameborder:"0",marginwidth:"0",marginheight:"0",allowfullscreen:!0})),(0,r.kt)("h3",{id:"re-assigning-values-to-variables"},"Re-assigning values to variables"),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Adding a different Object into the box")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},(0,r.kt)("img",{src:a(8393).Z,width:"1148",height:"482"})),(0,r.kt)("p",{parentName:"div"},"Image extracted from ",(0,r.kt)("a",{parentName:"p",href:"https://stevenpcurtis.medium.com/what-is-a-variable-3447ac1331b9"},"StevenCurtis Medium")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"myNum =  4\nprint(myNum)\nmyNum = 5\nprint(myNum)\n")),(0,r.kt)("details",null,(0,r.kt)("summary",null,"\ud83e\uddea Try the code out!"),(0,r.kt)("iframe",{src:"https://trinket.io/embed/python/81a661f2eb",width:"100%",height:"300",frameborder:"0",marginwidth:"0",marginheight:"0",allowfullscreen:!0})),(0,r.kt)("h3",{id:"operations-using-variables"},"Operations using variables"),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(7013).Z,width:"1260",height:"540"})),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"myNum =  4\nmySecondNum = 10\nprint(myNum + mySecondNum)\n")),(0,r.kt)("details",null,(0,r.kt)("summary",null,"\ud83e\uddea Try the code out!"),(0,r.kt)("iframe",{src:"https://trinket.io/embed/python/02335cd571",width:"100%",height:"300",frameborder:"0",marginwidth:"0",marginheight:"0",allowfullscreen:!0})),(0,r.kt)("h2",{id:"usage-example"},"Usage Example"),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(1879).Z,width:"288",height:"175"})),(0,r.kt)("h3",{id:"using-examples-and-doing-math-with-it"},"Using Examples and doing math with it."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'mom_age = 40 # Mmom_age represents mom\'s age # Line 3\n\nleah_age = mom_age - 25 # leah_age represents Leah\'s age # Line 4\n\nprint("Age of Leah\'s mom is " + str(mom_age)) # typecast all data into string type    # Line 5\nprint ("Age of Leah is " + str(leah_age)) # there is an additional whitespace in the text to improve readablity # Line 6\n')),(0,r.kt)("details",null,(0,r.kt)("summary",null,"\ud83e\uddea Try the code out!"),(0,r.kt)("iframe",{src:"https://trinket.io/embed/python3/7f0196f87d",width:"100%",height:"300",frameborder:"0",marginwidth:"0",marginheight:"0",allowfullscreen:!0})),(0,r.kt)("h2",{id:"arithmetic-operators"},"Arithmetic Operators"),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(5709).Z,width:"902",height:"747"})),(0,r.kt)("h2",{id:"assigment-operators"},"Assigment Operators"),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(3990).Z,width:"547",height:"924"})),(0,r.kt)("h2",{id:"practice-activities-apples-"},"Practice Activities: Apples \ud83c\udf4e"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://learn2codelive.com/courses/4/pages/lesson-2-learning-activities-r-practice-activity-3-apples?module_item_id=490"},"\ud83d\udc40 L2-a3")),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Count of Apples \ud83c\udf4e")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"write a program that tracks the mumber of apples the user ends up with after starting with a set number of apples. Students can set the initial number of apples to a number of their choice. The output should follow this script:"),(0,r.kt)("p",{parentName:"div"},(0,r.kt)("strong",{parentName:"p"},"Intended Output")),(0,r.kt)("pre",{parentName:"div"},(0,r.kt)("code",{parentName:"pre",className:"language-Output"},"You have 20 apples.\nYou plant one tree from a seed you found in your attic and harvest five apples from it. You now have 25 apples.\nYou extract seeds from every apple you have, discard the apples, and plant all the seeds. You harvest four times as many apples as you had. You now have 100 apples.\nYou look over your apples and realize some of the trees were diseased! You have to throw out half of your apples. You now have 50.0 apples.\nYou decide to bake an apple pie. This requires six apples. You now have 44.0 apples.\n")),(0,r.kt)("details",null,(0,r.kt)("summary",null,"\u270d  You can solve the problem ",(0,r.kt)("b",null,"by fixing the following code")," using Trinket You can see that the code prints 20 in each instance instead of ",(0,r.kt)("b",null,"25")," | ",(0,r.kt)("b",null,"100")," | ",(0,r.kt)("b",null,"50")," | ",(0,r.kt)("b",null,"44")),(0,r.kt)("iframe",{src:"https://trinket.io/embed/python/f596202714",width:"100%",height:"600",frameborder:"0",marginwidth:"0",marginheight:"0",allowfullscreen:!0})))),(0,r.kt)("h2",{id:"arithmetic-operators-practice"},"Arithmetic Operators Practice"),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(7275).Z,width:"522",height:"358"})),(0,r.kt)("details",null,(0,r.kt)("summary",null,"\ud83d\udcd2 Solution"),(0,r.kt)("iframe",{src:"https://trinket.io/embed/python3/85939a160b",width:"100%",height:"600",frameborder:"0",marginwidth:"0",marginheight:"0",allowfullscreen:!0})),(0,r.kt)("h2",{id:"hiking-problem"},"Hiking Problem"),(0,r.kt)("p",null,"Pete and Shannon are hiking. Shannon is always 2 miles ahead of Pete. What is the distance Shannon has covered if Pete has covered 10 miles? How would the program change if Shannon has covered twice as much distance as Pete?"),(0,r.kt)("details",null,(0,r.kt)("summary",null,"\ud83d\udcd2 Example"),(0,r.kt)("iframe",{src:"https://trinket.io/embed/python3/b65afedb60",width:"100%",height:"600",frameborder:"0",marginwidth:"0",marginheight:"0",allowfullscreen:!0})),(0,r.kt)("h3",{id:"activity"},"Activity"),(0,r.kt)("details",null,(0,r.kt)("summary",null,"\ud83d\udcdd Assigment: Shannon position changed. Can you complete the program so it prints the updated direction?"),(0,r.kt)("iframe",{src:"https://trinket.io/embed/python3/0eb7a60624",width:"100%",height:"600",frameborder:"0",marginwidth:"0",marginheight:"0",allowfullscreen:!0})),(0,r.kt)("h2",{id:"turtle-and-variables"},"Turtle and Variables"),(0,r.kt)("h3",{id:"lesson-2-learning-activities-e1--turtle-graphics-and-variables"},"Lesson 2 Learning Activities ","[E1]"," : Turtle graphics and variables"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://learn2codelive.com/courses/4/pages/lesson-2-learning-activities-e1-turtle-graphics-and-variables?module_item_id=492"},"\ud83d\udc40 Lesson 2 Graphics ")),(0,r.kt)(s.Z,{icon:"\ud83d\udd28",title:"Exercise: Play with the code",mdxType:"IconAdmonition"},(0,r.kt)("ul",{className:"contains-task-list"},(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Change the Length of the Square"),(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Change the Angle.")),(0,r.kt)("iframe",{src:"https://trinket.io/embed/python/a4b30cd75b",width:"100%",height:"600",frameborder:"0",marginwidth:"0",marginheight:"0",allowfullscreen:!0})),(0,r.kt)("h3",{id:"lesson-2-learning-activities-r--practice-activity-4---smiley-face"},"Lesson 2 Learning Activities ","[R]"," : Practice Activity 4 - Smiley Face"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://learn2codelive.com/courses/4/pages/lesson-2-learning-activities-r-practice-activity-4-smiley-face?module_item_id=493"},"\ud83d\udc40 l3 a4 - Smiley")),(0,r.kt)(s.Z,{icon:"\ud83d\udd28",title:"Exercise: Play with the code",mdxType:"IconAdmonition"},(0,r.kt)("ul",{className:"contains-task-list"},(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Change Contants (values that are repeated ont he code) to Variables such as the ",(0,r.kt)("inlineCode",{parentName:"li"},"200"))),(0,r.kt)("iframe",{src:"https://trinket.io/embed/python/1d7cd31485",width:"100%",height:"600",frameborder:"0",marginwidth:"0",marginheight:"0",allowfullscreen:!0})),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Instructor Notes")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("ul",{parentName:"div"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://learn2codelive.com/courses/4/pages/lesson-2-learning-activities-e2-python-challenge-2-spiral?module_item_id=497"},"Spiral Challange"))))))}u.isMDXComponent=!0},9876:function(e,t,a){a.d(t,{Z:function(){return o}});var n=a(7294),i=a(6010),r={note:n.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},n.createElement("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})),tip:n.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},n.createElement("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})),danger:n.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},n.createElement("path",{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})),info:n.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},n.createElement("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})),caution:n.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},n.createElement("path",{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))},s={note:"secondary",tip:"success",danger:"danger",info:"info",caution:"warning"};function o(e){var t=e.children,a=e.type,o=e.title,l=void 0===o?a:o,c=e.icon,d=void 0===c?r[a]:c;return n.createElement("div",{className:(0,i.Z)("admonition","admonition-"+a,"alert","alert--"+s[a])},n.createElement("div",{className:"admonition-heading"},n.createElement("h5",null,n.createElement("span",{className:"admonition-icon"},d),l)),n.createElement("div",{className:"admonition-content"},t))}},5054:function(e,t,a){a.d(t,{Z:function(){return r}});var n=a(7294),i=a(9876);function r(e){var t=e.icon,a=void 0===t?"\ud83d\udca1":t,r=e.title,s=void 0===r?" ":r,o=e.type,l=void 0===o?"tip":o,c=e.children;return n.createElement("div",null,n.createElement(i.Z,{type:l,icon:a,title:s},c))}},1879:function(e,t){t.Z="data:image/png;base64,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"},5709:function(e,t,a){t.Z=a.p+"assets/images/2022-04-26-20-29-18-d50fe02ec882671ca19e38088525937c.png"},3990:function(e,t,a){t.Z=a.p+"assets/images/2022-04-26-20-30-36-0c79795c1b62597958ddd647f9fabf89.png"},7275:function(e,t,a){t.Z=a.p+"assets/images/2022-04-26-20-35-32-b0073cb956ccbe3b123506660f13a972.png"},8393:function(e,t,a){t.Z=a.p+"assets/images/2022-05-04-03-21-09-e61e0d6654bd93ec7cff210f2c235b76.png"},8412:function(e,t,a){t.Z=a.p+"assets/images/2022-05-04-03-21-48-35299fbc6b6eedeff3bd5d98c2cb677f.png"},7013:function(e,t,a){t.Z=a.p+"assets/images/2022-05-04-03-26-20-ab7d6d96b8e071793d96b8f96ecd8922.png"}}]);
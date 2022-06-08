"use strict";(self.webpackChunklearn_programming=self.webpackChunklearn_programming||[]).push([[5198],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return h}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),m=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=m(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=m(n),h=a,u=d["".concat(l,".").concat(h)]||d[h]||p[h]||i;return n?r.createElement(u,o(o({ref:t},c),{},{components:n})):r.createElement(u,o({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var m=2;m<i;m++)o[m]=n[m];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5468:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return s},metadata:function(){return m},toc:function(){return p}});var r=n(3117),a=n(102),i=(n(7294),n(3905)),o=["components"],s={title:"Chapter 5a - Random"},l=void 0,m={unversionedId:"lesson-notes/lesson-5a",id:"lesson-notes/lesson-5a",title:"Chapter 5a - Random",description:"\x3c!--",source:"@site/python/lesson-notes/lesson-5a.md",sourceDirName:"lesson-notes",slug:"/lesson-notes/lesson-5a",permalink:"/python/lesson-notes/lesson-5a",tags:[],version:"current",frontMatter:{title:"Chapter 5a - Random"},sidebar:"tutorialSidebar",previous:{title:"Chapter 4b - Conditionals",permalink:"/python/lesson-notes/lesson-4b"},next:{title:"Chapter 5b - Randomness - Continued",permalink:"/python/lesson-notes/lesson-5b"}},c={},p=[{value:"Randrange",id:"randrange",level:2},{value:"Tossing a Coin",id:"tossing-a-coin",level:2},{value:"Exercise",id:"exercise",level:2},{value:"Uniform",id:"uniform",level:2},{value:"Dice",id:"dice",level:2},{value:"Exercise",id:"exercise-1",level:3}],d={toc:p};function h(e){var t=e.components,s=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"randrange"},"Randrange"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://learn2codelive.com/courses/4/pages/lesson-5-learning-activities-e1-introduce-random-module?module_item_id=2388"},"\ud83d\udc40")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"import random\n\nprint(random.randrange(10, 20))\n")),(0,i.kt)("iframe",{src:"https://trinket.io/embed/python/3759fa57b6",width:"100%",height:"600",frameborder:"0",marginwidth:"0",marginheight:"0",allowfullscreen:!0}),(0,i.kt)("p",null,"Possible random values in this range are: 10, 11, 12, 13, 14, 15, 16, 17, 18, 19"),(0,i.kt)("p",null,"20 is out of this range as it returns values less than that specified as the second argument."),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Practice")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},"Change the code above so it chooses a number from 30-39")))),(0,i.kt)("h2",{id:"tossing-a-coin"},"Tossing a Coin"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"\nimport random\nimport time\n\n\nprint('This is a simulation of a coin toss')\nprint('Tossing coin now...\\n')\n\ntime.sleep(1)\n\ntoss_result = random.randrange(0,2) \n#randrange generates a random number from the range of 0 to less than 2\n\n\n#check what the value of toss_result is\n\nif toss_result == 0: \n  print(\"Heads!\")\nelse:\n  print(\"Tails!\")\n")),(0,i.kt)("iframe",{src:"https://trinket.io/embed/python/e43ae15e77",width:"100%",height:"600",frameborder:"0",marginwidth:"0",marginheight:"0",allowfullscreen:!0}),(0,i.kt)("p",null,"(i)  Does the user provide any input here?  No"),(0,i.kt)("p",null,"(ii)  What are the possible outputs? Heads or Tails"),(0,i.kt)("p",null,"(iii) Which line of code requires that the random module be imported? Line 7"),(0,i.kt)("p",null,"(iv) What are the values stored by toss_result? "),(0,i.kt)("p",null,"0 and 1 only, comment line 8 helps in answering this question"),(0,i.kt)("h2",{id:"exercise"},"Exercise"),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Exercise")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},"Create a program to randomnly assign someone in either ",(0,i.kt)("inlineCode",{parentName:"li"},"blue")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"red")," team")),(0,i.kt)("iframe",{src:"https://trinket.io/embed/python3/6de60da64b",width:"100%",height:"600",frameborder:"0",marginwidth:"0",marginheight:"0",allowfullscreen:!0}),(0,i.kt)("hr",{parentName:"div"}),(0,i.kt)("p",{parentName:"div"},"\ud83d\ude4b\u200d\u2640\ufe0f Sample program"),(0,i.kt)("iframe",{src:"https://trinket.io/embed/python3/8d4d56f9c7?outputOnly=true",width:"100%",height:"300",frameborder:"0",marginwidth:"0",marginheight:"0",allowfullscreen:!0}))),(0,i.kt)("h2",{id:"uniform"},"Uniform"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://learn2codelive.com/courses/4/pages/lesson-5-learning-activities-e1-introduce-random-module?module_item_id=2388"},"\ud83d\udc40")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"import random\n\nprint(random.uniform(10, 20))\n")),(0,i.kt)("iframe",{src:"https://trinket.io/embed/python/c828ea9f12",width:"100%",height:"600",frameborder:"0",marginwidth:"0",marginheight:"0",allowfullscreen:!0}),(0,i.kt)("h2",{id:"dice"},"Dice"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"\nimport random\n\nimport time\n\nprint('This program simulates the throw of a dice')\n\nprint('Throwing the dice now...\\n')\n\ntime.sleep(1)\n\nface = random.randrange(1,7) # generate a random number in the range 1 to 6\n\nprint(\"You got a \" + str(face))\n")),(0,i.kt)("iframe",{src:"https://trinket.io/embed/python/33663c3611",width:"100%",height:"600",frameborder:"0",marginwidth:"0",marginheight:"0",allowfullscreen:!0}),(0,i.kt)("h3",{id:"exercise-1"},"Exercise"),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Practice: simulate a dice of 20 faces")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},(0,i.kt)("img",{src:n(7617).Z,width:"1500",height:"904"})),(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},"This is the program for a dice of only number 6 (not working)"),(0,i.kt)("li",{parentName:"ul"},"Fix it so it has 20 faces 1, 2, 3, 4... 20")),(0,i.kt)("iframe",{src:"https://trinket.io/embed/python/48ed675021",width:"100%",height:"600",frameborder:"0",marginwidth:"0",marginheight:"0",allowfullscreen:!0}))))}h.isMDXComponent=!0},7617:function(e,t,n){t.Z=n.p+"assets/images/2022-06-06-11-09-15-07f500861c295a90f7f3a2ba6c658254.png"}}]);
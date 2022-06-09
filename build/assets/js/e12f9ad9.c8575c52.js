"use strict";(self.webpackChunklearn_programming=self.webpackChunklearn_programming||[]).push([[9584],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return h}});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=i.createContext({}),d=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=d(e.components);return i.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},c=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),c=d(n),h=a,u=c["".concat(l,".").concat(h)]||c[h]||p[h]||r;return n?i.createElement(u,o(o({ref:t},m),{},{components:n})):i.createElement(u,o({ref:t},m))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var d=2;d<r;d++)o[d]=n[d];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}c.displayName="MDXCreateElement"},183:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return s},metadata:function(){return d},toc:function(){return p}});var i=n(3117),a=n(102),r=(n(7294),n(3905)),o=["components"],s={title:"Chapter 4b - Conditionals"},l=void 0,d={unversionedId:"lesson-notes/lesson-4b",id:"lesson-notes/lesson-4b",title:"Chapter 4b - Conditionals",description:"\ud83d\udc40",source:"@site/python/lesson-notes/lesson-4b.md",sourceDirName:"lesson-notes",slug:"/lesson-notes/lesson-4b",permalink:"/python/lesson-notes/lesson-4b",tags:[],version:"current",frontMatter:{title:"Chapter 4b - Conditionals"},sidebar:"tutorialSidebar",previous:{title:"Chapter 4a - Boolean",permalink:"/python/lesson-notes/lesson-4a"},next:{title:"Chapter 5a - Random",permalink:"/python/lesson-notes/lesson-5a"}},m={},p=[{value:"If Condition",id:"if-condition",level:2},{value:"Else Condition",id:"else-condition",level:2},{value:"Checking Even and Odd numbers:",id:"checking-even-and-odd-numbers",level:2},{value:"Dictionary Order",id:"dictionary-order",level:2},{value:"Guessing Game",id:"guessing-game",level:2},{value:"Quiz About Me",id:"quiz-about-me",level:2}],c={toc:p};function h(e){var t=e.components,s=(0,a.Z)(e,o);return(0,r.kt)("wrapper",(0,i.Z)({},c,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://learn2codelive.com/courses/4/pages/lesson-4-learning-activities-e1-introduce-conditionals?module_item_id=1666"},"\ud83d\udc40")),(0,r.kt)("h2",{id:"if-condition"},"If Condition"),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(8195).Z,width:"938",height:"586"})),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"isHot = int(input(\"Is it hot outside? Enter 1 if it is\"))\n\n#use if statement to check if user has entered 1\nif isHot == 1:\n  print('Outside is hot')      # Line 9\n\n")),(0,r.kt)("details",null,(0,r.kt)("summary",null,"\ud83e\uddea Try the code out~!"),(0,r.kt)("iframe",{src:"https://trinket.io/embed/python3/62b0ea9cd8",width:"100%",height:"600",frameborder:"0",marginwidth:"0",marginheight:"0",allowfullscreen:!0})),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(1923).Z,width:"1010",height:"570"})),(0,r.kt)("h2",{id:"else-condition"},"Else Condition"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'isHot = int(input("Is it hot outside? Enter 1 if it is"))\n\n#use if statement to check if user has entered 1\nif isHot == 1:\n  print(\'Outside is hot\')      # Line 9\nelse:\n  print("not hot")\n\n')),(0,r.kt)("details",null,(0,r.kt)("summary",null,"\ud83e\uddea Try the code out~!"),(0,r.kt)("iframe",{src:"https://trinket.io/embed/python3/29fc0151ed",width:"100%",height:"600",frameborder:"0",marginwidth:"0",marginheight:"0",allowfullscreen:!0})),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Exercise 1")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Fix the following program\nProblem:"),(0,r.kt)("ul",{parentName:"div"},(0,r.kt)("li",{parentName:"ul"},'No matter what you enter it prints "Outside is hot"'),(0,r.kt)("li",{parentName:"ul"},'Fix the program so that it prints "Outside is hot" if ',(0,r.kt)("inlineCode",{parentName:"li"},"isHot")," = ",(0,r.kt)("inlineCode",{parentName:"li"},"2"))),(0,r.kt)("iframe",{src:"https://trinket.io/embed/python3/ebdd69524a",width:"100%",height:"300",frameborder:"0",marginwidth:"0",marginheight:"0",allowfullscreen:!0}))),(0,r.kt)("div",{className:"admonition admonition-important alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Time to work on our project!")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Click here to go to ",(0,r.kt)("a",{parentName:"p",href:"/python/project/project-4b"},"Zodiac Sign Project")),(0,r.kt)("p",{parentName:"div"},"You only need to complete this for this class. But if you would like to, feel free to peek into the topics below! "))),(0,r.kt)("h2",{id:"checking-even-and-odd-numbers"},"Checking Even and Odd numbers:"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://learn2codelive.com/courses/4/pages/lesson-4-learning-activities-r-practice-activity-3-mathworks?module_item_id=1668"},"\ud83d\udc40 Lesson 4 Learning Activities [R] : Practice Activity 3 - Mathworks")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"If ",(0,r.kt)("inlineCode",{parentName:"li"},"number")," is odd the following program will print ",(0,r.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,r.kt)("li",{parentName:"ul"},"If ",(0,r.kt)("inlineCode",{parentName:"li"},"number")," is even, the program will print ",(0,r.kt)("inlineCode",{parentName:"li"},"true"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"\n\nnumber = 4\n\nprint( number % 2 == 0)\n\n")),(0,r.kt)("iframe",{src:"https://trinket.io/embed/python3/110923fc1f",width:"100%",height:"300",frameborder:"0",marginwidth:"0",marginheight:"0",allowfullscreen:!0}),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Exercise 2")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("ul",{parentName:"div"},(0,r.kt)("li",{parentName:"ul"},"Modify the following program so that if the number is odd, it prints: ",(0,r.kt)("inlineCode",{parentName:"li"},"is Odd")),(0,r.kt)("li",{parentName:"ul"},"And if it is even, it should print: ",(0,r.kt)("inlineCode",{parentName:"li"},"is Even"))),(0,r.kt)("iframe",{src:"https://trinket.io/embed/python/a4243efe5a",width:"100%",height:"300",frameborder:"0",marginwidth:"0",marginheight:"0",allowfullscreen:!0}),(0,r.kt)("hr",{parentName:"div"}),(0,r.kt)("p",{parentName:"div"},"\ud83d\ude46\u200d\u2640\ufe0f Expected Program:"),(0,r.kt)("iframe",{src:"https://trinket.io/embed/python/1da65ebffb?outputOnly=true&start=result",width:"100%",height:"200",frameborder:"0",marginwidth:"0",marginheight:"0",allowfullscreen:!0}))),(0,r.kt)("h2",{id:"dictionary-order"},"Dictionary Order"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://learn2codelive.com/courses/4/pages/lesson-4-learning-activities-r-practice-activity-5-dictionary-order?module_item_id=1679"},"\ud83d\udc40 Lesson 4 Learning Activities [R] : Practice Activity 5 - Dictionary Order")),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Exercise 3")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Write a program that asks user to enter 2 words and outputs them in the order they appear in the dictionary."),(0,r.kt)("ul",{parentName:"div"},(0,r.kt)("li",{parentName:"ul"},"hint: try running ",(0,r.kt)("inlineCode",{parentName:"li"},'"Bruce" < "Atom"'))),(0,r.kt)("iframe",{src:"https://trinket.io/embed/python/cb25c7fa3d",width:"100%",height:"600",frameborder:"0",marginwidth:"0",marginheight:"0",allowfullscreen:!0}),(0,r.kt)("hr",{parentName:"div"}),(0,r.kt)("p",{parentName:"div"},"\ud83d\ude46\u200d\u2640\ufe0f Expected Program:"),(0,r.kt)("iframe",{src:"https://trinket.io/embed/python/4e615aee57?outputOnly=true&start=result",width:"100%",height:"300",frameborder:"0",marginwidth:"0",marginheight:"0",allowfullscreen:!0}))),(0,r.kt)("h2",{id:"guessing-game"},"Guessing Game"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://learn2codelive.com/courses/4/pages/lesson-4-learning-activities-r-practice-activity-6-secret-word?module_item_id=1681"},"\ud83d\udc40 Lesson 4 Learning Activities [R] : Practice Activity 6 - Secret Word")),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Exercise 4")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"In this game, you define a secret word and have the user of the game guess the secret word. Give the user two hints to help guess the word. The hint could be description of the word or partial secret word. Display the appropriate description of the game, first hint and prompt for the user to guess the word. If the user guesses the word then display success message and exit the game. If not then display the second hint. If the user is unable to guess the secret word after all the hints then display the secret word at the end of the game."),(0,r.kt)("hr",{parentName:"div"}),(0,r.kt)("p",{parentName:"div"},"\ud83d\ude46\u200d\u2640\ufe0f Expected Program:"),(0,r.kt)("iframe",{src:"https://trinket.io/embed/python/27242b6b94?outputOnly=true&start=result",width:"100%",height:"300",frameborder:"0",marginwidth:"0",marginheight:"0",allowfullscreen:!0}),(0,r.kt)("hr",{parentName:"div"}),(0,r.kt)("p",{parentName:"div"},"\ud83d\udc68\u200d\ud83d\udd2c Feel free to use this template"),(0,r.kt)("iframe",{src:"https://trinket.io/embed/python/a1b3bbf24a",width:"100%",height:"600",frameborder:"0",marginwidth:"0",marginheight:"0",allowfullscreen:!0}))),(0,r.kt)("h2",{id:"quiz-about-me"},"Quiz About Me"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://learn2codelive.com/courses/4/pages/lesson-4-learning-activities-e2-python-challenge-4b-quiz-about-me?module_item_id=2371"},"\ud83d\udc40 Lesson 4 Learning Activities [E2] : Python Challenge 4b - Quiz About Me")),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Exercise 5")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Create the following quiz but for yourself"),(0,r.kt)("hr",{parentName:"div"}),(0,r.kt)("p",{parentName:"div"},"\ud83d\ude46\u200d\u2640\ufe0f Sample Program:"),(0,r.kt)("iframe",{src:"https://trinket.io/embed/python/e661236191?outputOnly=true&start=result",width:"100%",height:"300",frameborder:"0",marginwidth:"0",marginheight:"0",allowfullscreen:!0}),(0,r.kt)("hr",{parentName:"div"}),(0,r.kt)("p",{parentName:"div"},"\ud83d\udc68\u200d\ud83d\udd2c Feel free to use this template"),(0,r.kt)("iframe",{src:"https://trinket.io/embed/python/7687d7c5a4",width:"100%",height:"600",frameborder:"0",marginwidth:"0",marginheight:"0",allowfullscreen:!0}))))}h.isMDXComponent=!0},8195:function(e,t,n){t.Z=n.p+"assets/images/2022-05-25-08-31-57-94ba5a39fb7fffcc6d31500b5f337dbb.png"},1923:function(e,t,n){t.Z=n.p+"assets/images/2022-05-25-08-32-56-4549bbc397b27d2b4af764aefb00c253.png"}}]);
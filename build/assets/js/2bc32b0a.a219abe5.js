"use strict";(self.webpackChunklearn_programming=self.webpackChunklearn_programming||[]).push([[9091],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return p}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function A(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?A(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):A(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},A=Object.keys(e);for(r=0;r<A.length;r++)n=A[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var A=Object.getOwnPropertySymbols(e);for(r=0;r<A.length;r++)n=A[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,A=e.originalType,l=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),g=s(n),p=o,u=g["".concat(l,".").concat(p)]||g[p]||h[p]||A;return n?r.createElement(u,i(i({ref:t},c),{},{components:n})):r.createElement(u,i({ref:t},c))}));function p(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var A=n.length,i=new Array(A);i[0]=g;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:o,i[1]=a;for(var s=2;s<A;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},5895:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return p},frontMatter:function(){return a},metadata:function(){return s},toc:function(){return h}});var r=n(7462),o=n(3366),A=(n(7294),n(3905)),i=["components"],a={sidebar_position:1,title:"Lesson 1-a"},l=void 0,s={unversionedId:"lesson-notes/lesson1a",id:"lesson-notes/lesson1a",title:"Lesson 1-a",description:"Lesson 1 Printing",source:"@site/python/lesson-notes/lesson1a.md",sourceDirName:"lesson-notes",slug:"/lesson-notes/lesson1a",permalink:"/python/lesson-notes/lesson1a",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Lesson 1-a"},sidebar:"tutorialSidebar",previous:{title:"Cheatsheet",permalink:"/python/cheatsheet"},next:{title:"Chapter 1b - Turtle",permalink:"/python/lesson-notes/lesson1b"}},c={},h=[{value:"Lesson 1 Printing",id:"lesson-1-printing",level:2},{value:"Printing Messages",id:"printing-messages",level:3},{value:"Printing numbers",id:"printing-numbers",level:3},{value:"Details",id:"details",level:3},{value:"Problems 1",id:"problems-1",level:3}],g={toc:h};function p(e){var t=e.components,a=(0,o.Z)(e,i);return(0,A.kt)("wrapper",(0,r.Z)({},g,a,{components:t,mdxType:"MDXLayout"}),(0,A.kt)("h2",{id:"lesson-1-printing"},"Lesson 1 Printing"),(0,A.kt)("h3",{id:"printing-messages"},"Printing Messages"),(0,A.kt)("pre",null,(0,A.kt)("code",{parentName:"pre",className:"language-python"},"print (\"Hello World!\")  # Print a message using double quotes\nprint ('Hello World!')  # Print a message using single quotes\n")),(0,A.kt)("h3",{id:"printing-numbers"},"Printing numbers"),(0,A.kt)("pre",null,(0,A.kt)("code",{parentName:"pre",className:"language-python"},'# This program displays some stuff  # Line 3\nprint ("Welcome to Python Programming")    # Line 4\nprint ("Try coding, it\'s fun. Do you know what is 123456789*123456789?") # Line 5\nprint (123456789*123456789)    # Line 6\n')),(0,A.kt)("p",null,"Output"),(0,A.kt)("pre",null,(0,A.kt)("code",{parentName:"pre",className:"language-output"},'# This program displays some stuff  # Line 3\nprint ("Welcome to Python Programming")    # Line 4\nprint ("Try coding, it\'s fun. Do you know what is 123456789*123456789?") # Line 5\nprint (123456789*123456789)    # Line 6\n')),(0,A.kt)("h3",{id:"details"},"Details"),(0,A.kt)("p",null,(0,A.kt)("a",{parentName:"p",href:"https://trinket.io/python3/31d9da2a08"},"Try it out")),(0,A.kt)("pre",null,(0,A.kt)("code",{parentName:"pre",className:"language-python"},"print('Hello\\n World') # Move to the next line after Hello\nprint('') # Leave an empty line on console\nprint('Hello\\nWorld') # Move to the next line after Hello, white space before World has been removed here\n\nprint('\\nDemonstration of backslash')\n# print('\\') # uncommenting this line will cause an error\nprint('\\\\') # to print a backslash, you need to escape with another backslash\n")),(0,A.kt)("details",null,(0,A.kt)("summary",null,"Try the code out!"),(0,A.kt)("iframe",{src:"https://trinket.io/embed/python3/31d9da2a08",width:"100%",height:"356",frameborder:"0",marginwidth:"0",marginheight:"0",allowfullscreen:!0})),(0,A.kt)("p",null,(0,A.kt)("a",{parentName:"p",href:"https://learn2codelive.com/courses/4/pages/lesson-1-learning-activities-r-practice-activity-1-build-and-test-the-code?module_item_id=458"},"i")),(0,A.kt)("h3",{id:"problems-1"},"Problems 1"),(0,A.kt)("p",null,"Let's say you want to create the following arts:\n",(0,A.kt)("img",{src:n(8869).Z,width:"248",height:"178"})),(0,A.kt)("details",null,(0,A.kt)("summary",null,"Hints"),"- What are the different characters that have been used to create this shape? - How will you get the spacing right? What lines are the characters on? Hint: Use a table and add the different characters in the cells as they appear in the image. Or simply align the characters on your code editor first. - Write down the instructions needed to create this graphic in the Instructions window of your Trinket."),(0,A.kt)("p",null,(0,A.kt)("strong",{parentName:"p"},"Example"),"\nLet's say we want to create the following figure:\n",(0,A.kt)("img",{src:n(6194).Z,width:"132",height:"204"})),(0,A.kt)("details",null,(0,A.kt)("summary",null,"Solution:"),"Try out this solution",(0,A.kt)("iframe",{src:"https://trinket.io/embed/python3/979c707fa0",width:"100%",height:"356",frameborder:"0",marginwidth:"0",marginheight:"0",allowfullscreen:!0})),(0,A.kt)("p",null,(0,A.kt)("a",{parentName:"p",href:"https://learn2codelive.com/courses/4/pages/lesson-1-learning-activities-r-practice-activity-1-build-and-test-the-code?module_item_id=458"},"i")))}p.isMDXComponent=!0},8869:function(e,t,n){t.Z=n.p+"assets/images/2022-04-26-17-28-50-24cc88bee46aa4ee42a43c73571d70ec.png"},6194:function(e,t){t.Z="data:image/png;base64,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"}}]);
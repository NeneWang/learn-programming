"use strict";(self.webpackChunklearn_programming=self.webpackChunklearn_programming||[]).push([[4865],{3905:function(e,t,n){n.d(t,{Zo:function(){return h},kt:function(){return p}});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=i.createContext({}),A=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},h=function(e){var t=A(e.components);return i.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),m=A(n),p=a,d=m["".concat(l,".").concat(p)]||m[p]||c[p]||r;return n?i.createElement(d,o(o({ref:t},h),{},{components:n})):i.createElement(d,o({ref:t},h))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var A=2;A<r;A++)o[A]=n[A];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},403:function(e,t,n){n.r(t),n.d(t,{assets:function(){return h},contentTitle:function(){return l},default:function(){return p},frontMatter:function(){return s},metadata:function(){return A},toc:function(){return c}});var i=n(3117),a=n(102),r=(n(7294),n(3905)),o=["components"],s={sidebar_position:1,title:"Chapter 1a - Printing"},l=void 0,A={unversionedId:"lesson-notes/lesson-1a",id:"lesson-notes/lesson-1a",title:"Chapter 1a - Printing",description:"Printing Messages",source:"@site/python/lesson-notes/lesson-1a.md",sourceDirName:"lesson-notes",slug:"/lesson-notes/lesson-1a",permalink:"/python/lesson-notes/lesson-1a",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Chapter 1a - Printing"},sidebar:"tutorialSidebar",previous:{title:"Welcome to Python Lesson Notes!",permalink:"/python/lesson-notes/"},next:{title:"Chapter 1b - Turtle",permalink:"/python/lesson-notes/lesson-1b"}},h={},c=[{value:"Printing Messages",id:"printing-messages",level:2},{value:"Printing numbers",id:"printing-numbers",level:2},{value:"Special Characters when Printing",id:"special-characters-when-printing",level:2},{value:"Example",id:"example",level:2}],m={toc:c};function p(e){var t=e.components,s=(0,a.Z)(e,o);return(0,r.kt)("wrapper",(0,i.Z)({},m,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"printing-messages"},"Printing Messages"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"print (\"Hello World!\")  # Print a message using double quotes\nprint ('Hello World!')  # Print a message using single quotes\n")),(0,r.kt)("details",null,(0,r.kt)("summary",null,"\ud83e\uddea Try the code out!"),(0,r.kt)("iframe",{src:"https://trinket.io/embed/python3/42877e453f",width:"100%",height:"300",frameborder:"0",marginwidth:"0",marginheight:"0",allowfullscreen:!0})),(0,r.kt)("div",{className:"admonition admonition-important alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Time to work on our Japanese Emoticons!")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},(0,r.kt)("a",{parentName:"p",href:"../project/project-1a"},"Click here to go to our Japanese Emoticons project"),"\nYou only need to complete this for this class. But if you would like to, feel free to peek into the topics below! "))),(0,r.kt)("h2",{id:"printing-numbers"},"Printing numbers"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'# This program displays some stuff \nprint ("Welcome to Python Programming")  \nprint ("Try coding, it\'s fun. Do you know what is 4*3?") \nprint (4*3)    # This should print 12\n')),(0,r.kt)("details",null,(0,r.kt)("summary",null,"\ud83e\uddea Try the code out!"),(0,r.kt)("iframe",{src:"https://trinket.io/embed/python3/59c912d464",width:"100%",height:"600",frameborder:"0",marginwidth:"0",marginheight:"0",allowfullscreen:!0})),(0,r.kt)("h2",{id:"special-characters-when-printing"},"Special Characters when Printing"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://learn2codelive.com/courses/4/pages/lesson-1-learning-activities-r-practice-activity-1-build-and-test-the-code?module_item_id=458"},"\ud83d\udc40")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"print('Hello\\n World') # Move to the next line after Hello\nprint('') # Leave an empty line on console\nprint('Hello\\nWorld') # Move to the next line after Hello, white space before World has been removed here\n\nprint('\\nDemonstration of backslash')\n# print('\\') # uncommenting this line will cause an error\nprint('\\\\') # to print a backslash, you need to escape with another backslash\n")),(0,r.kt)("details",null,(0,r.kt)("summary",null,"\ud83e\uddea Try the code out!"),(0,r.kt)("iframe",{src:"https://trinket.io/embed/python3/31d9da2a08",width:"100%",height:"356",frameborder:"0",marginwidth:"0",marginheight:"0",allowfullscreen:!0})),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://learn2codelive.com/courses/4/pages/lesson-1-python-challenge-1a-code-art?module_item_id=447"},"\ud83d\udc40")),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)("div",{className:"admonition admonition-important alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Printing a Human Character")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Let's say we want to create the following figure:"),(0,r.kt)("p",{parentName:"div"},(0,r.kt)("img",{src:n(9608).Z,width:"178",height:"206"})),(0,r.kt)("details",null,(0,r.kt)("summary",null,"\ud83d\udd2c Solution"),"Try out this solution",(0,r.kt)("iframe",{src:"https://trinket.io/embed/python3/979c707fa0",width:"100%",height:"356",frameborder:"0",marginwidth:"0",marginheight:"0",allowfullscreen:!0})))),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Problem 1")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Let's say you want to create the following figure:"),(0,r.kt)("p",{parentName:"div"},(0,r.kt)("img",{src:n(9381).Z,width:"248",height:"178"})))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"\ud83d\udcdd Solve this problem in ",(0,r.kt)("a",{target:"_blank",href:"https://trinket.io/"},"Trinket")," or ",(0,r.kt)("b",null,"here")),(0,r.kt)("iframe",{src:"https://trinket.io/embed/python3/6c5d05a988",width:"100%",height:"600",frameborder:"0",marginwidth:"0",marginheight:"0",allowfullscreen:!0})),(0,r.kt)("details",null,(0,r.kt)("summary",null,"\ud83d\udca1 Hints"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"What are the different characters that have been used to create this shape?"),(0,r.kt)("li",{parentName:"ul"},"How will you get the spacing right? What lines are the characters on? Hint: Use a table and add the different characters in the cells as they appear in the image. Or simply align the characters on your code editor first."),(0,r.kt)("li",{parentName:"ul"},"Write down the instructions needed to create this graphic in the Instructions window of your Trinket."))),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://learn2codelive.com/courses/4/pages/lesson-1-learning-activities-r-practice-activity-1-build-and-test-the-code?module_item_id=458"},"\ud83d\udc40")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://learn2codelive.com/courses/4/pages/lesson-1-assessment-quiz?module_item_id=449"},"\ud83d\udc40Assessment Quiz")))}p.isMDXComponent=!0},9381:function(e,t,n){t.Z=n.p+"assets/images/2022-04-26-17-28-50-24cc88bee46aa4ee42a43c73571d70ec.png"},9608:function(e,t){t.Z="data:image/png;base64,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"}}]);
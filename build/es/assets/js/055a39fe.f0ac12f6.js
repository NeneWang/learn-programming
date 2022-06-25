"use strict";(self.webpackChunklearn_programming=self.webpackChunklearn_programming||[]).push([[588],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return h}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(n),h=i,f=m["".concat(s,".").concat(h)]||m[h]||u[h]||a;return n?r.createElement(f,o(o({ref:t},c),{},{components:n})):r.createElement(f,o({ref:t},c))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var p=2;p<a;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4309:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return h},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return u}});var r=n(3117),i=n(102),a=(n(7294),n(3905)),o=["components"],l={title:"Chapter 6b - Break"},s=void 0,p={unversionedId:"lesson-notes/lesson-6b",id:"lesson-notes/lesson-6b",title:"Chapter 6b - Break",description:"Break Statement",source:"@site/python/lesson-notes/lesson-6b.md",sourceDirName:"lesson-notes",slug:"/lesson-notes/lesson-6b",permalink:"/es/python/lesson-notes/lesson-6b",tags:[],version:"current",frontMatter:{title:"Chapter 6b - Break"},sidebar:"tutorialSidebar",previous:{title:"Chapter 6a - For Loops",permalink:"/es/python/lesson-notes/lesson-6a"},next:{title:"Chapter 7a - While Loop",permalink:"/es/python/lesson-notes/lesson-7a"}},c={},u=[{value:"Break Statement",id:"break-statement",level:2},{value:"Miner",id:"miner",level:2},{value:"Random Search",id:"random-search",level:2},{value:"Computational Thinking",id:"computational-thinking",level:2}],m={toc:u};function h(e){var t=e.components,l=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},m,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"break-statement"},"Break Statement"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"for i in range(100):\n  print(i)\n  if(i==8):\n    break\n")),(0,a.kt)("iframe",{src:"https://trinket.io/embed/python/42bb35f64b",width:"100%",height:"300",frameborder:"0",marginwidth:"0",marginheight:"0",allowfullscreen:!0}),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Note how it stops when i==8"),(0,a.kt)("li",{parentName:"ul"},"What happens if you delete the: ")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"if(i==8):\n    break\n")),(0,a.kt)("p",null,"?"),(0,a.kt)("h2",{id:"miner"},"Miner"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://learn2codelive.com/courses/4/pages/lesson-6-learning-activities-r-practice-activity-3-mining-for-diamonds?module_item_id=2589"},"\ud83d\udc40 Miners")),(0,a.kt)("p",null,"The following program "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"\nfor i in range(1,8):\n\n  print(\"\\nEntering tunnel \" + str(i))\n\n  response = input(\"Enter Yes if diamonds are in this tunnel and No otherwise \")\n  response = response.lower()\n  if response == 'yes':\n\n    print('Diamonds found after searching ' + str(i) + ' mines')\n\n    print('Search stops here')\n\n    break\n")),(0,a.kt)("details",null,(0,a.kt)("summary",null,"\ud83e\uddea Try the code out~!"),(0,a.kt)("iframe",{src:"https://trinket.io/embed/python/03601bf3a2",width:"100%",height:"600",frameborder:"0",marginwidth:"0",marginheight:"0",allowfullscreen:!0})),(0,a.kt)("h2",{id:"random-search"},"Random Search"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://learn2codelive.com/courses/4/pages/lesson-6-learning-activities-r-practice-activity-4-guessing-game-remix?module_item_id=2925"},"\ud83d\udc40 Random Search")),(0,a.kt)("iframe",{src:"https://trinket.io/embed/python/05d22a7e3e",width:"100%",height:"600",frameborder:"0",marginwidth:"0",marginheight:"0",allowfullscreen:!0}),(0,a.kt)("h2",{id:"computational-thinking"},"Computational Thinking"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://learn2codelive.com/courses/4/pages/lesson-6-learning-activities-e1-introduce-computational-thinking?module_item_id=2926"},"\ud83d\udc40 Computational Thinking")),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(859).Z,width:"542",height:"220"})))}h.isMDXComponent=!0},859:function(e,t,n){t.Z=n.p+"assets/images/2022-06-13-02-19-30-5eb65a138ae322fd6e5821b373bbbf35.png"}}]);
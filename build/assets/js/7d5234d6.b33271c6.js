"use strict";(self.webpackChunklearn_programming=self.webpackChunklearn_programming||[]).push([[9340],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return g}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=u(n),g=o,d=m["".concat(l,".").concat(g)]||m[g]||p[g]||a;return n?r.createElement(d,s(s({ref:t},c),{},{components:n})):r.createElement(d,s({ref:t},c))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var u=2;u<a;u++)s[u]=n[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2591:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return g},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return p}});var r=n(3117),o=n(102),a=(n(7294),n(3905)),s=["components"],i={title:"Chapter 4d - String Comparison"},l=void 0,u={unversionedId:"lesson-notes/lesson-4d",id:"lesson-notes/lesson-4d",title:"Chapter 4d - String Comparison",description:"using Equals() to compare Strings",source:"@site/java/lesson-notes/lesson-4d.md",sourceDirName:"lesson-notes",slug:"/lesson-notes/lesson-4d",permalink:"/java/lesson-notes/lesson-4d",tags:[],version:"current",frontMatter:{title:"Chapter 4d - String Comparison"},sidebar:"tutorialSidebar",previous:{title:"Chapter 4c - More Practice",permalink:"/java/lesson-notes/lesson-4c"},next:{title:"Lesson 5A",permalink:"/java/lesson-notes/lesson-5a"}},c={},p=[{value:"using Equals() to compare Strings",id:"using-equals-to-compare-strings",level:2},{value:"Using compareTo() to compare Strings:",id:"using-compareto-to-compare-strings",level:2}],m={toc:p};function g(e){var t=e.components,n=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"using-equals-to-compare-strings"},"using Equals() to compare Strings"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'String  hello1 = "Hello";\nString  hello2 = "Hello";\nSystem.out.print(hello1.equals(hello2));\n')),(0,a.kt)("details",null,(0,a.kt)("summary",null,"\ud83e\uddea Try the code out~!"),(0,a.kt)("iframe",{src:"https://trinket.io/embed/java/c88b414007",width:"100%",height:"300",frameborder:"0",marginwidth:"0",marginheight:"0",allowfullscreen:!0})),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'String  word1 = "test"\nString  word2 = "Test"\nSystem.out.print(word1.equals(word2)); \nSystem.out.println(word1.equalsIgnoreCase(word2));\n')),(0,a.kt)("details",null,(0,a.kt)("summary",null,"\ud83e\uddea Try the code out~!"),(0,a.kt)("iframe",{src:"https://trinket.io/embed/java/4019da27be",width:"100%",height:"600",frameborder:"0",marginwidth:"0",marginheight:"0",allowfullscreen:!0})),(0,a.kt)("h2",{id:"using-compareto-to-compare-strings"},"Using compareTo() to compare Strings:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'String s1 = "hello";\nString s2 = "hello";\nString s3 = "apple";\nString s4 = "nation";\nSystem.out.println(s1.compareTo(s2)); //0 because both are equal \nSystem.out.println(s1.compareTo(s3)); //7 because "h" is 7 times greater than "a" \nSystem.out.println(s1.compareTo(s4)); //-6 because "h" is 6 times lower than "n" \n')),(0,a.kt)("details",null,(0,a.kt)("summary",null,"\ud83e\uddea Try the code out~!"),(0,a.kt)("iframe",{src:"https://trinket.io/embed/java/64ae7116e1",width:"100%",height:"600",frameborder:"0",marginwidth:"0",marginheight:"0",allowfullscreen:!0})),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://learn2codelive.com/courses/107/pages/lesson-4-learning-activities-e2-assessment-quiz?module_item_id=9128"},"\ud83d\udc40 TODO: Trvia")))}g.isMDXComponent=!0}}]);
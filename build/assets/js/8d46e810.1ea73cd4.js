"use strict";(self.webpackChunklearn_programming=self.webpackChunklearn_programming||[]).push([[4572],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return h}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),u=p(n),h=r,d=u["".concat(l,".").concat(h)]||u[h]||c[h]||i;return n?a.createElement(d,o(o({ref:t},m),{},{components:n})):a.createElement(d,o({ref:t},m))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},4763:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return c}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),o=["components"],s={title:"Chapter 4a - Conditionals"},l=void 0,p={unversionedId:"lesson-notes/lesson-4a",id:"lesson-notes/lesson-4a",title:"Chapter 4a - Conditionals",description:"Boolean Expression",source:"@site/java/lesson-notes/lesson-4a.md",sourceDirName:"lesson-notes",slug:"/lesson-notes/lesson-4a",permalink:"/java/lesson-notes/lesson-4a",tags:[],version:"current",frontMatter:{title:"Chapter 4a - Conditionals"},sidebar:"tutorialSidebar",previous:{title:"Chapter 3b - Errors",permalink:"/java/lesson-notes/lesson-3b"},next:{title:"Chapter 4b - If Else",permalink:"/java/lesson-notes/lesson-4b"}},m={},c=[{value:"Boolean Expression",id:"boolean-expression",level:2},{value:"Simple Comparison to get Boolean expressions",id:"simple-comparison-to-get-boolean-expressions",level:3},{value:"Comparison Operator",id:"comparison-operator",level:3},{value:"Activity",id:"activity",level:2}],u={toc:c};function h(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"boolean-expression"},"Boolean Expression"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"public class Main {\n  public static void main(String[] args) {\n    boolean isJavaFun = true;\n    boolean isFishTasty = false;    \n    System.out.println(isJavaFun);\n    System.out.println(isFishTasty);\n  }\n}\n")),(0,i.kt)("details",null,(0,i.kt)("summary",null,"\ud83e\uddea Try the code out~!"),(0,i.kt)("iframe",{src:"https://trinket.io/embed/java/db4b075d67",width:"100%",height:"600",frameborder:"0",marginwidth:"0",marginheight:"0",allowfullscreen:!0})),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Practice")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},"Now you like fish: Change ",(0,i.kt)("inlineCode",{parentName:"li"},"isFishTasty")," to ",(0,i.kt)("inlineCode",{parentName:"li"},"true")," and see what happens.")))),(0,i.kt)("h3",{id:"simple-comparison-to-get-boolean-expressions"},"Simple Comparison to get Boolean expressions"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'class Main{\n public static void main (String args[]){\n    int my_age    = 21;\n    int age_marie  = 25;\n   \n   System.out.println("Am I older than Marie? " + (my_age < age_marie));\n   }\n}\n')),(0,i.kt)("details",null,(0,i.kt)("summary",null,"\ud83e\uddea Try the code out~!"),(0,i.kt)("iframe",{src:"https://trinket.io/embed/java/e8aaef8339",width:"100%",height:"600",frameborder:"0",marginwidth:"0",marginheight:"0",allowfullscreen:!0})),(0,i.kt)("h3",{id:"comparison-operator"},"Comparison Operator"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://learn2codelive.com/courses/107/pages/lesson-4-learning-activities-r-wrap-up-comparison-operators?module_item_id=9109"},"\ud83d\udc40")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"== (equal to; example: x == 5)\n\n!= (not equal to; example: x != 5)\n\n> (greater than; example: y > 3)\n\n< (less than; example: x <  5 )\n\n>= (greater than or equal to; example: x >= y) \n\n<= (less than or equal to; example: x <= y)\n")),(0,i.kt)("p",null,"Example Use"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"is_greater_than = 10 > 5  // True\n\nIn this case, 10 > 5 is a Boolean expression that evaluates to True because 10 is greater than 5\n\nis_less_than = 10 < 5 // False\n\nIn this case, 10 < 5 is a Boolean expression that evaluates to False because 10 is not less than 5\n")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://learn2codelive.com/courses/107/pages/lesson-4-learning-activities-e1-introduce-boolean-expression?module_item_id=9108"},"\ud83d\udc40")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'class Main{\n public static void main (String args[]){\n   //heights are in inches\n   //create variables for heights of the five friends\n    int ht_tom    = 61;\n    int ht_marie  = 63;\n    int ht_darell = 66;\n    int ht_alisha = 59;\n    int ht_joe    = 64;\n   //boolean expression evaluates to True or False\n   System.out.println("Tom is of the same height as Marie: " + (ht_tom == ht_marie));\n   System.out.println("Tom is as tall as Marie or taller: " + (ht_tom >= ht_marie));\n   System.out.println("Darell is shorter or the same height as Joe: "+ (ht_darell <= ht_joe));\n   System.out.println("Alisha is shorter than Tom: " + (ht_alisha < ht_tom));\n   }\n}\n')),(0,i.kt)("details",null,(0,i.kt)("summary",null,"\ud83e\uddea Try the code out!"),(0,i.kt)("iframe",{src:"https://trinket.io/embed/java/f4a2082f58",width:"100%",height:"600",frameborder:"0",marginwidth:"0",marginheight:"0",allowfullscreen:!0})),(0,i.kt)("h2",{id:"activity"},"Activity"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://learn2codelive.com/courses/107/pages/lesson-4-learning-activities-r-practice-activity-1-comparing-ages?module_item_id=9110"},"\ud83d\udc40")),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Age Comparison")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Write code that takes two values from the user, user\u2019s age and his/her friend\u2019s age. The code should compare the ages in this manner: "),(0,i.kt)("p",{parentName:"div"},"(i) if one is greater than the other."),(0,i.kt)("p",{parentName:"div"},"(ii) if one is less than or equal to the other age."),(0,i.kt)("p",{parentName:"div"},"(iii) if both the ages are equal. Ensure that the output shown is user friendly."),(0,i.kt)("details",null,(0,i.kt)("summary",null,"\ud83d\udcbb Sample Program"),(0,i.kt)("iframe",{src:"https://trinket.io/embed/java/7989b0de78?outputOnly=true",width:"100%",height:"400",frameborder:"0",marginwidth:"0",marginheight:"0",allowfullscreen:!0})),(0,i.kt)("h3",{parentName:"div",id:"solve-it-here"},"Solve it here:"),(0,i.kt)("details",null,(0,i.kt)("summary",null,"\u270d  You can solve the problem ",(0,i.kt)("b",null,"here")," using Trinket"),(0,i.kt)("iframe",{src:"https://trinket.io/embed/java/4b11cfc604",width:"100%",height:"600",frameborder:"0",marginwidth:"0",marginheight:"0",allowfullscreen:!0})))))}h.isMDXComponent=!0}}]);
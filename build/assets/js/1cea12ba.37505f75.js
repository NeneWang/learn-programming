"use strict";(self.webpackChunklearn_programming=self.webpackChunklearn_programming||[]).push([[1377],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return u}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),m=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=m(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=m(n),u=i,h=d["".concat(s,".").concat(u)]||d[u]||c[u]||r;return n?a.createElement(h,l(l({ref:t},p),{},{components:n})):a.createElement(h,l({ref:t},p))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var m=2;m<r;m++)l[m]=n[m];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},772:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return m},default:function(){return h},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return d}});var a=n(3117),i=n(102),r=(n(7294),n(3905)),l=n(3607),o=["components"],s={title:"Chapter 4b - If Else"},m=void 0,p={unversionedId:"lesson-notes/lesson-4b",id:"lesson-notes/lesson-4b",title:"Chapter 4b - If Else",description:"Conditional Structure",source:"@site/java/lesson-notes/lesson-4b.mdx",sourceDirName:"lesson-notes",slug:"/lesson-notes/lesson-4b",permalink:"/java/lesson-notes/lesson-4b",tags:[],version:"current",frontMatter:{title:"Chapter 4b - If Else"},sidebar:"tutorialSidebar",previous:{title:"Chapter 4a - Conditionals",permalink:"/java/lesson-notes/lesson-4a"},next:{title:"Chapter 4c - More Practice",permalink:"/java/lesson-notes/lesson-4c"}},c={},d=[{value:"Conditional Structure",id:"conditional-structure",level:2},{value:"If Else",id:"if-else",level:3},{value:"Using Comparisons to resolve If Else conditionals",id:"using-comparisons-to-resolve-if-else-conditionals",level:3},{value:"Else IF",id:"else-if",level:3},{value:"Nested Conditionals",id:"nested-conditionals",level:3}],u={toc:d};function h(e){var t=e.components,s=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},u,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"conditional-structure"},"Conditional Structure"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://learn2codelive.com/courses/107/pages/lesson-4-learning-activities-r-reading-material-for-conditionals?module_item_id=9115"},"\ud83d\udc40 Reading Notes")),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(8750).Z,width:"720",height:"488"})),(0,r.kt)("h3",{id:"if-else"},"If Else"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'public class Main {\n  public static void main(String[] args) {\n    if(false){\n      System.out.println("Is True");\n    }else {\n      System.out.println("Is False");\n    }\n  }\n}\n')),(0,r.kt)("details",null,(0,r.kt)("summary",null,"\ud83e\uddea Try the code out~!"),(0,r.kt)("iframe",{src:"https://trinket.io/embed/java/641a2a9c9e",width:"100%",height:"600",frameborder:"0",marginwidth:"0",marginheight:"0",allowfullscreen:!0})),(0,r.kt)("hr",null),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Practice")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("ul",{parentName:"div"},(0,r.kt)("li",{parentName:"ul"},"What do you think the program will be printing if we change ",(0,r.kt)("inlineCode",{parentName:"li"},"false")," to ",(0,r.kt)("inlineCode",{parentName:"li"},"true")," in ",(0,r.kt)("inlineCode",{parentName:"li"},"line 3"),"?")),(0,r.kt)(l.Z,{checkList:["it prints 'Is True'","it prints 'Is False'"],answer:1,mdxType:"RadioListAns"}))),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"using-comparisons-to-resolve-if-else-conditionals"},"Using Comparisons to resolve If Else conditionals"),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(8239).Z,width:"1465",height:"761"})),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'class Main{\n public static void main (String args[]){\n    int my_age    = 21;\n    int age_marie  = 25;\n   \n     if(my_age < age_marie){\n       System.out.println("I am Younger than Marie");\n     }else if(my_age > age_marie){\n       System.out.println("I am Older than Marie");\n     }\n   }\n}\n')),(0,r.kt)("details",null,(0,r.kt)("summary",null,"\ud83e\uddea Try the code out~!"),(0,r.kt)("iframe",{src:"https://trinket.io/embed/java/abcbd41ace",width:"100%",height:"600",frameborder:"0",marginwidth:"0",marginheight:"0",allowfullscreen:!0})),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Comparison Operators")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("table",{parentName:"div"},(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Comparison Operator"),(0,r.kt)("th",{parentName:"tr",align:null},"Definition"),(0,r.kt)("th",{parentName:"tr",align:null},"Example"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"==")),(0,r.kt)("td",{parentName:"tr",align:null},"Equals"),(0,r.kt)("td",{parentName:"tr",align:null},"2==2 -> True, 2==4 -> False")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"!=")),(0,r.kt)("td",{parentName:"tr",align:null},"Not Equal"),(0,r.kt)("td",{parentName:"tr",align:null},"2!=3 -> True, 2!=2 -> False")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},">")),(0,r.kt)("td",{parentName:"tr",align:null},"Larger"),(0,r.kt)("td",{parentName:"tr",align:null},"3>2 -> True")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"<")),(0,r.kt)("td",{parentName:"tr",align:null},"Smaller"),(0,r.kt)("td",{parentName:"tr",align:null},"4 < 5 -> True")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},">=")),(0,r.kt)("td",{parentName:"tr",align:null},"Larger or Equals"),(0,r.kt)("td",{parentName:"tr",align:null},"4 >= 2 -> True, 2>=2 -> Tru")))))),(0,r.kt)("h3",{id:"else-if"},"Else IF"),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},(0,r.kt)("img",{src:n(1401).Z,width:"743",height:"774"})),(0,r.kt)("ul",{parentName:"div"},(0,r.kt)("li",{parentName:"ul"},"I created this using ",(0,r.kt)("a",{parentName:"li",href:"https://draw.io/"},"draw.io"))))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'\npublic class Main {\n  public static void main(String[] args) {\n    \n    int age = 17;\n    if(age == 17){\n      System.out.println("Age is 17");\n    }else if(age>17) {\n      System.out.println("You are an adult now");\n    }else{\n      System.out.println("You are still a kid.");\n    }\n  }\n}\n')),(0,r.kt)("p",null,"Explaination:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"If (Boolean condition1) Then\n\n    (perform computation or action)\n\nElse if (Boolean condition2) Then\n\n    (perform another computation or action)\n\nElse\n    (perform a default computation or action)\n")),(0,r.kt)("details",null,(0,r.kt)("summary",null,"\ud83e\uddea Try the code out~!"),(0,r.kt)("iframe",{src:"https://trinket.io/embed/java/e7864d63c6",width:"100%",height:"600",frameborder:"0",marginwidth:"0",marginheight:"0",allowfullscreen:!0})),(0,r.kt)("hr",null),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Exercise")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},(0,r.kt)("a",{parentName:"p",href:"https://learn2codelive.com/courses/107/pages/lesson-4-learning-activities-r-practice-activity-3-math-works?module_item_id=9116"},"\ud83d\udc40 Exercise in the curriculum")),(0,r.kt)("p",{parentName:"div"},"Complete the following program so that it prints if  number is positive or not."),(0,r.kt)("ul",{parentName:"div"},(0,r.kt)("li",{parentName:"ul"},"If the input is positive it should print: ",(0,r.kt)("inlineCode",{parentName:"li"},"num is positive.")),(0,r.kt)("li",{parentName:"ul"},"else If the input is negative it should print: ",(0,r.kt)("inlineCode",{parentName:"li"},"num is negative")),(0,r.kt)("li",{parentName:"ul"},"else (the case where input is neither positive or negative) it should print: ",(0,r.kt)("inlineCode",{parentName:"li"},"num is ZERO (0)"))),(0,r.kt)("iframe",{src:"https://trinket.io/embed/java/a02cd37708",width:"100%",height:"600",frameborder:"0",marginwidth:"0",marginheight:"0",allowfullscreen:!0}),(0,r.kt)("hr",{parentName:"div"}),(0,r.kt)("p",{parentName:"div"},"\ud83d\ude4b\u200d\u2640\ufe0f Sample expected program:"),(0,r.kt)("ul",{parentName:"div"},(0,r.kt)("li",{parentName:"ul"},"Try entering ",(0,r.kt)("inlineCode",{parentName:"li"},"5")),(0,r.kt)("li",{parentName:"ul"},"Try entering ",(0,r.kt)("inlineCode",{parentName:"li"},"-5")),(0,r.kt)("li",{parentName:"ul"},"Try entering ",(0,r.kt)("inlineCode",{parentName:"li"},"0"))),(0,r.kt)("iframe",{src:"https://trinket.io/embed/java/8621801351?outputOnly=true",width:"100%",height:"300",frameborder:"0",marginwidth:"0",marginheight:"0",allowfullscreen:!0}))),(0,r.kt)("h3",{id:"nested-conditionals"},"Nested Conditionals"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://learn2codelive.com/courses/107/pages/lesson-4-learning-activities-r-reading-material-for-conditionals?module_item_id=9115"},"\ud83d\udc40 Curriculum - Nested Conditionals")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'public class Main{\n public static void main(String args[]){ \n int num = 25;\n \n \n if (num >5){\n   System.out.println("num is greater than 5");\n   if(num>10){\n      System.out.println("num is larger than 10");\n      if(num>20){\n        System.out.println("num is larger than 20");       \n      }\n   }\n  }else if(num<0){  \n    System.out.print ("num is negative");\n    \n  }else{\n    System.out.print ("num is ZERO (0)");\n  }\n }\n}\n')),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Answer the following:")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("ol",{parentName:"div"},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"What do you think it will print if num is 15"),(0,r.kt)(l.Z,{checkList:["num is greater than 5","num is greater than 5, num is larger than 10","num is greater than 5, num is larger than 10, num is larger than 20"],answer:2,mdxType:"RadioListAns"})),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"What do you think it will print if num is 20"),(0,r.kt)(l.Z,{checkList:["num is greater than 5","num is greater than 5, num is larger than 10","num is greater than 5, num is larger than 10, num is larger than 20"],answer:2,mdxType:"RadioListAns"})),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"What do you think it will print if num is 25"),(0,r.kt)(l.Z,{checkList:["num is greater than 5","num is greater than 5, num is larger than 10","num is greater than 5, num is larger than 10, num is larger than 20"],answer:3,mdxType:"RadioListAns"}))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"\ud83e\uddea Try the code out~!"),(0,r.kt)("iframe",{src:"https://trinket.io/embed/java/68c3d59f21",width:"100%",height:"600",frameborder:"0",marginwidth:"0",marginheight:"0",allowfullscreen:!0})))))}h.isMDXComponent=!0},3607:function(e,t,n){n.d(t,{Z:function(){return r}});var a=n(7294);function i(e){var t=e.radio,n=e.title,i=e.toggleAnswer,r=a.useState(!1),l=r[0],o=r[1];return a.createElement("div",null,a.createElement("label",null,a.createElement("input",{type:"radio",name:t,checked:l,onChange:function(){o(!l),i(n)}}),n))}function r(e){var t=e.checkList,n=e.answer,r=(0,a.useState)(""),l=r[0],o=r[1],s=(0,a.useState)(!1),m=s[0],p=s[1],c=(t[0],function(e){o(e),p(!1)}),d=t.map((function(e){return a.createElement(i,{radio:"uniqueIdentifier",title:e,toggleAnswer:c})}));return a.createElement("div",null,m?l==t[n-1]?"Correct \ud83c\udf89 - Answer is: "+l:" Incorrect answer":"",d,a.createElement("div",null,a.createElement("button",{onClick:function(){p(!0)}},"Check answer")),a.createElement("br",null))}},8750:function(e,t,n){t.Z=n.p+"assets/images/2022-05-25-05-50-24-2fcb11984301d983110292fa64570fdf.png"},8239:function(e,t,n){t.Z=n.p+"assets/images/2022-05-25-05-53-34-2587f3be4eaadab2b79aa0124022bbe2.png"},1401:function(e,t,n){t.Z=n.p+"assets/images/2022-05-25-06-06-06-c18fa7f9af2f9b8d528d08388d943ead.png"}}]);
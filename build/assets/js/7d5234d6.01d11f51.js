"use strict";(self.webpackChunklearn_programming=self.webpackChunklearn_programming||[]).push([[9340],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(n),d=a,g=m["".concat(l,".").concat(d)]||m[d]||u[d]||o;return n?r.createElement(g,i(i({ref:t},p),{},{components:n})):r.createElement(g,i({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2591:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return u}});var r=n(3117),a=n(102),o=(n(7294),n(3905)),i=["components"],s={title:"Chapter 4d - String Comparison"},l=void 0,c={unversionedId:"lesson-notes/lesson-4d",id:"lesson-notes/lesson-4d",title:"Chapter 4d - String Comparison",description:"using Equals() to compare Strings",source:"@site/java/lesson-notes/lesson-4d.md",sourceDirName:"lesson-notes",slug:"/lesson-notes/lesson-4d",permalink:"/java/lesson-notes/lesson-4d",tags:[],version:"current",frontMatter:{title:"Chapter 4d - String Comparison"},sidebar:"tutorialSidebar",previous:{title:"Chapter 4c - More Practice",permalink:"/java/lesson-notes/lesson-4c"},next:{title:"Chapter 5a - Random",permalink:"/java/lesson-notes/lesson-5a"}},p={},u=[{value:"using Equals() to compare Strings",id:"using-equals-to-compare-strings",level:2},{value:"Using compareTo() to compare Strings:",id:"using-compareto-to-compare-strings",level:2},{value:"Dictionary Exercise",id:"dictionary-exercise",level:2}],m={toc:u};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"using-equals-to-compare-strings"},"using Equals() to compare Strings"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'String  hello1 = "Hello";\nString  hello2 = "Hello";\nSystem.out.print(hello1.equals(hello2));\n')),(0,o.kt)("details",null,(0,o.kt)("summary",null,"\ud83e\uddea Try the code out~!"),(0,o.kt)("iframe",{src:"https://trinket.io/embed/java/c88b414007",width:"100%",height:"300",frameborder:"0",marginwidth:"0",marginheight:"0",allowfullscreen:!0})),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'String  word1 = "test"\nString  word2 = "Test"\nSystem.out.print(word1.equals(word2)); \nSystem.out.println(word1.equalsIgnoreCase(word2));\n')),(0,o.kt)("details",null,(0,o.kt)("summary",null,"\ud83e\uddea Try the code out~!"),(0,o.kt)("iframe",{src:"https://trinket.io/embed/java/4019da27be",width:"100%",height:"600",frameborder:"0",marginwidth:"0",marginheight:"0",allowfullscreen:!0})),(0,o.kt)("h2",{id:"using-compareto-to-compare-strings"},"Using compareTo() to compare Strings:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'String s1 = "hello";\nString s2 = "hello";\nString s3 = "apple";\nString s4 = "nation";\nSystem.out.println(s1.compareTo(s2)); //0 because both are equal \nSystem.out.println(s1.compareTo(s3)); //7 because "h" is 7 times greater than "a" \nSystem.out.println(s1.compareTo(s4)); //-6 because "h" is 6 times lower than "n" \n')),(0,o.kt)("details",null,(0,o.kt)("summary",null,"\ud83e\uddea Try the code out~!"),(0,o.kt)("iframe",{src:"https://trinket.io/embed/java/64ae7116e1",width:"100%",height:"600",frameborder:"0",marginwidth:"0",marginheight:"0",allowfullscreen:!0})),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://learn2codelive.com/courses/107/pages/lesson-4-learning-activities-e2-assessment-quiz?module_item_id=9128"},"\ud83d\udc40 TODO: Trvia")),(0,o.kt)("h2",{id:"dictionary-exercise"},"Dictionary Exercise"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://learn2codelive.com/courses/107/pages/lesson-4-learning-activities-r-practice-activity-6-dictionary-order?module_item_id=9124"},"\ud83d\udc40")),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Exercise")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("ul",{parentName:"div"},(0,o.kt)("li",{parentName:"ul"},"Modify this program so that it compares and orders two words lexicographically.")),(0,o.kt)("pre",{parentName:"div"},(0,o.kt)("code",{parentName:"pre",className:"language-java"},'import java.util.Scanner;\n\nclass Main{\npublic static void main (String args[]){\n   Scanner scan=new Scanner(System.in);\n   System.out.print("\\n Enter the first word : ");\n   String word1=scan.nextLine();\n   System.out.print("\\n Enter the second word : ");\n   String word2=scan.nextLine();\n   \n   if(true){\n      System.out.println(word1 + " and " + word2 + " are lexicographically same");\n   }else if(true){\n      System.out.println(word1 + " ," + word2);\n   }else{\n      System.out.println(word2 + ", " + word1);\n   }\n }\n}\n')),(0,o.kt)("hr",{parentName:"div"}),(0,o.kt)("p",{parentName:"div"},"\ud83d\ude4b\u200d\u2640\ufe0f Sample Program"),(0,o.kt)("iframe",{src:"https://trinket.io/embed/java/4faadfc62a?outputOnly=true",width:"100%",height:"300",frameborder:"0",marginwidth:"0",marginheight:"0",allowfullscreen:!0}))))}d.isMDXComponent=!0}}]);
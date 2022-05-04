"use strict";(self.webpackChunklearn_programming=self.webpackChunklearn_programming||[]).push([[530],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=c(n),d=r,h=m["".concat(l,".").concat(d)]||m[d]||p[d]||o;return n?a.createElement(h,i(i({ref:t},u),{},{components:n})):a.createElement(h,i({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2812:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return p}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),i=["components"],s={title:"Chapter 3a - User Input"},l=void 0,c={unversionedId:"lesson-notes/lesson-3a",id:"lesson-notes/lesson-3a",title:"Chapter 3a - User Input",description:"Scanner",source:"@site/java/lesson-notes/lesson-3a.md",sourceDirName:"lesson-notes",slug:"/lesson-notes/lesson-3a",permalink:"/java/lesson-notes/lesson-3a",tags:[],version:"current",frontMatter:{title:"Chapter 3a - User Input"},sidebar:"tutorialSidebar",previous:{title:"Chapter 2d - Char Data Type",permalink:"/java/lesson-notes/lesson-2d"},next:{title:"Chapter 3b - Logical vs Syntax Errors",permalink:"/java/lesson-notes/lesson-3b"}},u={},p=[{value:"Scanner",id:"scanner",level:2},{value:"Scanning for User Input",id:"scanning-for-user-input",level:3},{value:"Methods for accepting user Input",id:"methods-for-accepting-user-input",level:3},{value:"Number Inputs",id:"number-inputs",level:3}],m={toc:p};function d(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"scanner"},"Scanner"),(0,o.kt)("h3",{id:"scanning-for-user-input"},"Scanning for User Input"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'\nimport java.util.*;\nclass Main {\n    public static void main(String arg[]) {\n      System.out.print("Enter Your Name : ");  // user prompt\n      Scanner sc = new Scanner(System.in);     // take user input\n      String name = sc.nextLine();             // store the user input in the name variable\n      System.out.println("Name : "+ name);     // output the value stored in name\n    }\n}\n\n')),(0,o.kt)("details",null,(0,o.kt)("summary",null,"\ud83e\uddea Try the code out~!"),(0,o.kt)("iframe",{src:"https://trinket.io/embed/java/5b1603aee0",width:"100%",height:"600",frameborder:"0",marginwidth:"0",marginheight:"0",allowfullscreen:!0})),(0,o.kt)("h3",{id:"methods-for-accepting-user-input"},"Methods for accepting user Input"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Code"),(0,o.kt)("th",{parentName:"tr",align:null},"What is used for"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"nextInt()"),(0,o.kt)("td",{parentName:"tr",align:null},"It is used to take an integer as an input.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"nextFloat()"),(0,o.kt)("td",{parentName:"tr",align:null},"It is used to take float as an input.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"nextDouble()"),(0,o.kt)("td",{parentName:"tr",align:null},"It is used to take double as an input.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"next line()"),(0,o.kt)("td",{parentName:"tr",align:null},"It is used to take String as an input(It will accept a line).")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"nextBoolean()"),(0,o.kt)("td",{parentName:"tr",align:null},"It is used to take the boolean value as an input.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"nextLong()"),(0,o.kt)("td",{parentName:"tr",align:null},"It is used to take long as an input.")))),(0,o.kt)("h3",{id:"number-inputs"},"Number Inputs"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://learn2codelive.com/courses/107/pages/lesson-3-learning-activities-e1-prediction-with-user-inputs-in-java?module_item_id=9075"},"\ud83d\udc40 Lesson 3 Learning Activities [E1] : Prediction with User Inputs in Java")),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Example: Bake Store Program")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"In this example we create a Program for a Bake Bar that helps the store clerk\ninto calculating the total cost of the items the customer purchases."),(0,o.kt)("pre",{parentName:"div"},(0,o.kt)("code",{parentName:"pre",className:"language-java"},'import java.util.*;\nclass Main {\n    public static void main(String args[]) {\n        Scanner scan = new Scanner(System.in);\n        System.out.println("------------------------------------------------");\n        System.out.println("The following items are availabe at Bake Bar: ");\n        System.out.println("Shortcakes at $1.5 per cake");\n        System.out.println("Macaron at $1 per piece");\n        System.out.println("Chocochip cookies at $1 per cookie");\n        System.out.println("-------------------------------------------------");\n        System.out.print("Enter the number of shortcakes you want: ");\n        int shortcake = scan.nextInt();\n        System.out.print("Enter the number of macarons you want: ");\n        int macaron = scan.nextInt();\n        System.out.print("Enter the number of cookies you want: ");\n        int cookie = scan.nextInt();\n        double costCake = 1.5 * shortcake; //calculate the money spent on shortcake\n        double costMacaron = 1 * macaron; // calculate the money spent on macarons\n        double costCookie = 1 * cookie; // calculate the money spent on cookies\n        double totalCost = costCake + costMacaron + costCookie;\n        //calculate the total money spent on all 3 items\n        System.out.println("Bill amount for your shopping is $" + totalCost);\n    }\n}\n')),(0,o.kt)("details",null,(0,o.kt)("summary",null,"\ud83e\uddea Try the code out!"),(0,o.kt)("iframe",{src:"https://trinket.io/embed/java/7646d28f5c",width:"100%",height:"600",frameborder:"0",marginwidth:"0",marginheight:"0",allowfullscreen:!0})))),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"No need to store inputs")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"The following code works just fine too!"),(0,o.kt)("pre",{parentName:"div"},(0,o.kt)("code",{parentName:"pre",className:"language-java"},'System.out.println("Enter Your Name");\nScanner sc=new Scanner(System.in);\nSystem.out.println(sc.nextLine());\n')))),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Create the following Program")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("iframe",{src:"https://trinket.io/embed/java/81d66c8055?outputOnly=true&start=result",width:"100%",height:"400",frameborder:"0",marginwidth:"0",marginheight:"0",allowfullscreen:!0}),(0,o.kt)("details",null,(0,o.kt)("summary",null,"\u270d Solve the problem using Replit"),(0,o.kt)("a",{href:"https://replit.com/@NeneWang/EmptyJavaCanvas#Main.java"},"Feel free to use Repl, you can fork from this empty canvas in Repl.it")),(0,o.kt)("details",null,(0,o.kt)("summary",null,"\u270d  You can solve the problem ",(0,o.kt)("b",null,"here")," using Trinket"),(0,o.kt)("iframe",{src:"https://trinket.io/embed/java/e12496b61e",width:"100%",height:"600",frameborder:"0",marginwidth:"0",marginheight:"0",allowfullscreen:!0})))))}d.isMDXComponent=!0}}]);
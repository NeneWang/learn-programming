"use strict";(self.webpackChunklearn_programming=self.webpackChunklearn_programming||[]).push([[55],{3905:function(t,e,a){a.d(e,{Zo:function(){return p},kt:function(){return g}});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var s=n.createContext({}),m=function(t){var e=n.useContext(s),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},p=function(t){var e=m(t.components);return n.createElement(s.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},d=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,s=t.parentName,p=o(t,["components","mdxType","originalType","parentName"]),d=m(a),g=r,c=d["".concat(s,".").concat(g)]||d[g]||u[g]||l;return a?n.createElement(c,i(i({ref:e},p),{},{components:a})):n.createElement(c,i({ref:e},p))}));function g(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=d;var o={};for(var s in e)hasOwnProperty.call(e,s)&&(o[s]=e[s]);o.originalType=t,o.mdxType="string"==typeof t?t:r,i[1]=o;for(var m=2;m<l;m++)i[m]=a[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},7530:function(t,e,a){a.r(e),a.d(e,{assets:function(){return p},contentTitle:function(){return s},default:function(){return g},frontMatter:function(){return o},metadata:function(){return m},toc:function(){return u}});var n=a(7462),r=a(3366),l=(a(7294),a(3905)),i=["components"],o={sidebar_position:3,title:"Lesson 2a - Data Types in Java"},s=void 0,m={unversionedId:"lesson-notes/lesson-2a",id:"lesson-notes/lesson-2a",title:"Lesson 2a - Data Types in Java",description:"Data Types",source:"@site/java/lesson-notes/lesson-2a.md",sourceDirName:"lesson-notes",slug:"/lesson-notes/lesson-2a",permalink:"/java/lesson-notes/lesson-2a",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"Lesson 2a - Data Types in Java"},sidebar:"tutorialSidebar",previous:{title:"Lesson 1a Variables",permalink:"/java/lesson-notes/lesson-1a"},next:{title:"Lesson 2b -",permalink:"/java/lesson-notes/lesson-2b"}},p={},u=[{value:"Data Types",id:"data-types",level:2},{value:"Working with Variables",id:"working-with-variables",level:2},{value:"Variable Declarations",id:"variable-declarations",level:3},{value:"Arithmetic Operators",id:"arithmetic-operators",level:2},{value:"Using Math Operators",id:"using-math-operators",level:3},{value:"Compound Assigment Operator",id:"compound-assigment-operator",level:2},{value:"\ud83d\udc68\ud83c\udffb\u200d\ud83d\udcbb Compound assignment operator example",id:"-compound-assignment-operator-example",level:3},{value:"Integrated Example",id:"integrated-example",level:2},{value:"Class Excercise:",id:"class-excercise",level:2}],d={toc:u};function g(t){var e=t.components,o=(0,r.Z)(t,i);return(0,l.kt)("wrapper",(0,n.Z)({},d,o,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"data-types"},"Data Types"),(0,l.kt)("p",null,(0,l.kt)("img",{src:a(1377).Z,width:"3265",height:"2009"})),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Data Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Size"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"1 bit"),(0,l.kt)("td",{parentName:"tr",align:null},"Stores true or false")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"char"),(0,l.kt)("td",{parentName:"tr",align:null},"2 bytes"),(0,l.kt)("td",{parentName:"tr",align:null},"Stores a single character i.e. 'a'. '1' etc.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"byte"),(0,l.kt)("td",{parentName:"tr",align:null},"1 byte"),(0,l.kt)("td",{parentName:"tr",align:null},"Stores whole numbers from -128 to 127")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"short"),(0,l.kt)("td",{parentName:"tr",align:null},"2 bytes"),(0,l.kt)("td",{parentName:"tr",align:null},"Stores whole numbers from -32,768 to 32,767")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},"4 bytes"),(0,l.kt)("td",{parentName:"tr",align:null},"Stores whole numbers from -2,147,483,648 to 2,147,483,647")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"long"),(0,l.kt)("td",{parentName:"tr",align:null},"8 bytes"),(0,l.kt)("td",{parentName:"tr",align:null},"Stores whole numbers from -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"float"),(0,l.kt)("td",{parentName:"tr",align:null},"4 bytes"),(0,l.kt)("td",{parentName:"tr",align:null},"Sufficient for storing 6 to 7 decimal digits")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"double"),(0,l.kt)("td",{parentName:"tr",align:null},"8 bytes"),(0,l.kt)("td",{parentName:"tr",align:null},"Stores decimal numbers. It can store up to 15 decimal digits.")))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Don't worry about the size in this class yet!")),(0,l.kt)("h2",{id:"working-with-variables"},"Working with Variables"),(0,l.kt)("p",null,"Lets start by looking at some data types for variables"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Data Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Size"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},"4 bytes"),(0,l.kt)("td",{parentName:"tr",align:null},"Stores whole numbers from -2,147,483,648 to 2,147,483,647")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"short"),(0,l.kt)("td",{parentName:"tr",align:null},"2 bytes"),(0,l.kt)("td",{parentName:"tr",align:null},"Stores whole numbers from -32,768 to 32,767")))),(0,l.kt)("h3",{id:"variable-declarations"},"Variable Declarations"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"int myInteger = 23;\nshort myShort = 50;\n")),(0,l.kt)("p",null,"Checking datatype's size"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'System.out.println("Size of short: " + (Short.SIZE / 8) + " bytes.");\nSystem.out.println("Size of int: " + (Integer.SIZE / 8) + " bytes.");\n')),(0,l.kt)("details",null,(0,l.kt)("summary",null,"\ud83e\uddea Try the code out!"),(0,l.kt)("iframe",{src:"https://trinket.io/embed/java/e694e1d8b3",width:"100%",height:"600",frameborder:"0",marginwidth:"0",marginheight:"0",allowfullscreen:!0})),(0,l.kt)("h2",{id:"arithmetic-operators"},"Arithmetic Operators"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Operator"),(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Example"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"+"),(0,l.kt)("td",{parentName:"tr",align:null},"Addition"),(0,l.kt)("td",{parentName:"tr",align:null},"Adds together two values"),(0,l.kt)("td",{parentName:"tr",align:null},"x + y")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"-"),(0,l.kt)("td",{parentName:"tr",align:null},"Subtraction"),(0,l.kt)("td",{parentName:"tr",align:null},"Subtracts one value from another"),(0,l.kt)("td",{parentName:"tr",align:null},"x - y")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"*"),(0,l.kt)("td",{parentName:"tr",align:null},"Multiplication"),(0,l.kt)("td",{parentName:"tr",align:null},"Multiplies two values"),(0,l.kt)("td",{parentName:"tr",align:null},"x * y")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"/"),(0,l.kt)("td",{parentName:"tr",align:null},"Division"),(0,l.kt)("td",{parentName:"tr",align:null},"Divides one value by another"),(0,l.kt)("td",{parentName:"tr",align:null},"x / y")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"%"),(0,l.kt)("td",{parentName:"tr",align:null},"Modulus"),(0,l.kt)("td",{parentName:"tr",align:null},"Returns the division remainder"),(0,l.kt)("td",{parentName:"tr",align:null},"x % y")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"++"),(0,l.kt)("td",{parentName:"tr",align:null},"Increment"),(0,l.kt)("td",{parentName:"tr",align:null},"Increases the value of a variable by 1"),(0,l.kt)("td",{parentName:"tr",align:null},"x++")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--"),(0,l.kt)("td",{parentName:"tr",align:null},"Decrement"),(0,l.kt)("td",{parentName:"tr",align:null},"Decreases the value of a variable by 1"),(0,l.kt)("td",{parentName:"tr",align:null},"x--")))),(0,l.kt)("h3",{id:"using-math-operators"},"Using Math Operators"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"public class Main {\n public static void main(String[] args) {\n   int num=100;\n   //Add\n   int sum    = 20 + 10;\n   System.out.println(sum);\n\n   //Subtraction\n   int sub    = 20 - 10;\n   System.out.println(sub);\n\n   //multiply\n   int mul    = 20 * 10;\n   System.out.println(mul);\n\n   //divide\n   int div    = 20 - 10;\n   System.out.println(div);\n\n   //modulo\n   int modulo = 20 % 10;\n   System.out.println(modulo);\n\n   //increment\n   num++;\n   System.out.println(num);\n\n   //decrement\n   num--;\n   System.out.println(num);\n }\n}\n")),(0,l.kt)("details",null,(0,l.kt)("summary",null,"\ud83e\uddea Try the code out!"),(0,l.kt)("iframe",{src:"https://trinket.io/embed/java/4ae86c0fd1",width:"100%",height:"400",frameborder:"0",marginwidth:"0",marginheight:"0",allowfullscreen:!0})),(0,l.kt)("h2",{id:"compound-assigment-operator"},"Compound Assigment Operator"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"operator"),(0,l.kt)("th",{parentName:"tr",align:null},"Definition"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"+="),(0,l.kt)("td",{parentName:"tr",align:null},"Addition and assignment")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"-="),(0,l.kt)("td",{parentName:"tr",align:null},"Subtraction and assignment")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"*="),(0,l.kt)("td",{parentName:"tr",align:null},"Multiplication and assignment")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"/="),(0,l.kt)("td",{parentName:"tr",align:null},"Division and assignment")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"%="),(0,l.kt)("td",{parentName:"tr",align:null},"Remainder and assignment")))),(0,l.kt)("h3",{id:"-compound-assignment-operator-example"},"\ud83d\udc68\ud83c\udffb\u200d\ud83d\udcbb Compound assignment operator example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},' int a =20;\n   int b =20;\n   \n   System.out.println(a);\n   System.out.println(b);\n   \n   a += 15;\n   System.out.println("a is " + a);\n   \n   b = 15 + b;\n   System.out.println("b is " + b);\n   \n   a -= 3;\n   System.out.println("a is " + a);\n')),(0,l.kt)("details",null,(0,l.kt)("summary",null,"\ud83e\uddea Try the code out!"),(0,l.kt)("iframe",{src:"https://trinket.io/embed/java/2bfb91b7e7",width:"100%",height:"1200",frameborder:"0",marginwidth:"0",marginheight:"0",allowfullscreen:!0})),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://learn2codelive.com/courses/107/pages/lesson-2-learning-activities-r-practice-activity-1-prediction-with-integer-data-type-and-math-operations?module_item_id=9048"},"\ud83d\udc40 Practice Activity")),(0,l.kt)("h2",{id:"integrated-example"},"Integrated Example"),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Here an example showing everything together, please feel free to try it out!")),(0,l.kt)("p",null,"The following program prints makes operations with differents variables you can try the code out below!"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'  int a = 4;\n  int b = 3;\n  int num1 = 5;\n  int num2 = 4;\n  System.out.println("a+b = " + (a + b)); //a + b evaluates to  7\n  //println() - inserts newline character\n  //print() -will continue on printing in the same line\n  System.out.println("a-b = " + (a - b)); //a - b evaluates to  1\n  System.out.println("a*b = " + (a * b)); //a * b evaluates to  7\n  System.out.println("a%b = " + (a % b)); //a % b evaluates to  1 ,as it returns remainder\n  a++; //increments the value of a by 1, so a becomes 5\n  System.out.println("a = " + a);\n  a--; //decrements the value of a by 1, so a becomes 4\n  System.out.println("a = " + a);\n  // a+=b equivalent or short form of a=a+b;\n  // a-=b equivalent or short form of a=a-b;\n  System.out.println("num1 + num2 = " + (num1 + num2));\n  num1 += num2; //num1 will be added to num2 and stored in num1, so num1=9\n  System.out.println("num1 + num2 = " + num1);\n  //subtraction\n  System.out.println("num1 - num2 = " + (num1 - num2));\n  num1 -= num2; // num2 will be subtracted to num1 and stored in num1, so num1=5 (9-4=5)\n  System.out.println("num1 - num2 = " + num1);\n  //------increment operation----\n  // ++ (increment operator) is equivalent to a=a+1 (a++ is equivalent to a=a+1)\n  //prefix\n  System.out.println("prefixed a = " + (++a)); // a becomes 5\n  //postfix\n  System.out.println("postfixed a = " + (a++)); // a becomes 6 but after assignment. Here it will print original value(before postfix increment operation)\n  System.out.println("postfixed a =" + a); // postfix operation can be checked here\n  //----decrement operator----\n  // --(decrement operator)is equivalent to a=a-1 (a-- is equivalent to a=a-1)\n  //prefix\n  System.out.println("prefixed a = " + --a); // a becomes 5\n  //postfix\n  System.out.println("postfixed a = " + a--); // Ask students what they think this does?\n  // a becomes 4 but after assignment.Here it will print original value(before postfix decrement operation)\n  System.out.println("postfixed a = " + a); //a=4, postfix operation can be checked here\n\n')),(0,l.kt)("details",null,(0,l.kt)("summary",null,"\ud83e\uddea Try the code out!"),(0,l.kt)("iframe",{src:"https://trinket.io/embed/java/28a729f904",width:"100%",height:"600",frameborder:"0",marginwidth:"0",marginheight:"0",allowfullscreen:!0})),(0,l.kt)("h2",{id:"class-excercise"},"Class Excercise:"),(0,l.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Exercise 1: \ud83d\udd28 Fix the following code Piggy Bank \ud83d\udc16\ud83c\udfe6")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"This is the prompt\nRene has $29.80 in her piggy bank. Rene\u2019s dad has promised to give her $2.50 if she takes out trash. Her mom has promised to give her another $2.50 if she does her laundry. Her mom and dad have also promised to give her $2.75 if she walks the dog. Write a program that calculates the money that Rene will have if she does all the three chores. Use variables for each number and output the result in a complete sentence. Before you start, think about the data type(s) that you will use and why."),(0,l.kt)("p",{parentName:"div"},"The following code ",(0,l.kt)("strong",{parentName:"p"},"should print"),":"),(0,l.kt)("pre",{parentName:"div"},(0,l.kt)("code",{parentName:"pre",className:"language-output"},"Piggy bank bal : 29.8\nTotal amount after Trash Cleaning : 29.8 + 2.5 = 32.3\nTotal amount after doing Laundry : 32.3 + 2.5 = 34.8\nTotal amount after taking dog on walk : 34.8 + 2.75 = 37.55\n")),(0,l.kt)("p",{parentName:"div"},(0,l.kt)("strong",{parentName:"p"},"But instead")," it prints this:"),(0,l.kt)("pre",{parentName:"div"},(0,l.kt)("code",{parentName:"pre",className:"language-Output"},"Piggy bank bal : 29.8\nTotal amount after Trash Cleaning : 29.8 + 2.5 = 29.82.5\nTotal amount after doing Laundry : 32.3 + 2.5 = 32.32.5\nTotal amount after taking dog on walk : 34.8 + 2.75 = 34.82.75\n")),(0,l.kt)("p",{parentName:"div"},"Code with error:"),(0,l.kt)("pre",{parentName:"div"},(0,l.kt)("code",{parentName:"pre",className:"language-java"},'public class Main {\n  public static void main(String args[]) {\n      float piggy_bank_bal = 29.80f;// what will happen when we make it \'int\'\n      float earning_from_trash = 2.50f;\n      float earning_from_laundry = 2.50f;\n      float earning_from_petsitter = 2.75f;\n      float total = piggy_bank_bal;\n      System.out.println("Piggy bank bal : " + piggy_bank_bal);\n      System.out.println("Total amount after Trash Cleaning : " + total + " + " + earning_from_trash + " = " + total + earning_from_trash);\n      total = total + earning_from_trash; //total calculation after trash cleaning\n      System.out.println("Total amount after doing Laundry : " + total + " + " + earning_from_laundry + " = " + total + earning_from_laundry);\n      total = total + earning_from_laundry; //total calculation after laundry\n      System.out.println("Total amount after taking dog on walk : " + total + " + " + earning_from_petsitter + " = " + total + earning_from_petsitter);\n  }\n}\n')),(0,l.kt)("details",null,(0,l.kt)("summary",null,"\u270d Solve the problem using Replit"),(0,l.kt)("a",{href:"https://replit.com/@NeneWang/EmptyJavaCanvas#Main.java"},"Feel free to use Repl, you can fork from this empty canvas in Repl.it")),(0,l.kt)("details",null,(0,l.kt)("summary",null,"\u270d  You can solve the problem here using Trinket"),(0,l.kt)("iframe",{src:"https://trinket.io/embed/java/eebac3afea",width:"100%",height:"600",frameborder:"0",marginwidth:"0",marginheight:"0",allowfullscreen:!0})))),(0,l.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Exercise 1 \ud83d\udc16\ud83c\udfe6 Piggy Bank")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"Rene has $29.80 in her piggy bank. Rene\u2019s dad has promised to give her $2.50 if she takes out trash. Her mom has promised to give her another $2.50 if she does her laundry. Her mom and dad have also promised to give her $2.75 if she walks the dog. Write a program that calculates the money that Rene will have if she does all the three chores. Use variables for each number and output the result in a complete sentence. Before you start, think about the data type(s) that you will use and why."),(0,l.kt)("details",null,(0,l.kt)("summary",null,"\u270d Solve the problem using Replit"),(0,l.kt)("a",{href:"https://replit.com/@NeneWang/EmptyJavaCanvas#Main.java"},"Feel free to use Repl, you can fork from this empty canvas in Repl.it")),(0,l.kt)("details",null,(0,l.kt)("summary",null,"\u270d  You can solve the problem here using Trinket"),(0,l.kt)("iframe",{src:"https://trinket.io/embed/java/6e661a677c",width:"100%",height:"600",frameborder:"0",marginwidth:"0",marginheight:"0",allowfullscreen:!0})))))}g.isMDXComponent=!0},1377:function(t,e,a){e.Z=a.p+"assets/images/2022-04-28-16-20-50-be07094658e2493d97b51cec14a3674e.png"}}]);
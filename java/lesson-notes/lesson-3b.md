---
title: Chapter 3b - Logical vs Syntax Errors
---



**Syntax error**: Syntax errors are mistakes that a developer/user can do while writing the code.
Examples of syntax errors are missing commas,  quotes or spelling errors.

### Example Syntax Error
```java
System.out.print(" I Love Java ");// This line is correct
system.out.print(" I Love Java ");//Syntax Error as  's' of "system" is in lowercase.
```

**Logical Error**: A logical error is a bug in a program that causes it to produce wrong or unintended result. However, the program compiles and runs without showing an error on the console. 


### Example Logical Error

```java
class Main {
   public static void main(String args[]){
   int a = 20;
   int b = 0;
   int result=a/b;// it is logical error as program will compile and throw
   }              // error at runtime i.e. java.lang.ArithmeticException: / by zero
}

```
---
title: Chapter 2d - Char Data Type
---

The char data type is used to store a single character. The character must be surrounded by single quotes, like 'A' or 'c':


```java
char x = 'a';    
System.out.print(x);
```

<details>
<summary>
🧪 Try the code out! 
</summary>
<iframe src="https://trinket.io/embed/java/e7f24f3e3b" width="100%" height="300" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>

</details>


## The ASCII code

![](../../static/img/2022-05-04-05-31-24.png)

```java
char x = 97;
System.out.println(x);    //Should print 'a'
```
<details>
<summary>
🧪 Try the code out! 
</summary>
<iframe src="https://trinket.io/embed/java/94390bd149" width="100%" height="200" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>

</details>


## Upper and Lower Case
```java
public class Main
{
 public static void main(String[] args) 
 {
   char ch1 = 'a';
   char ch2 = 'B';
   System.out.println(Character.toUpperCase(ch1));//converts lowercase to uppercase
   System.out.println(Character.toLowerCase(ch2));//converts uppercase to lowercase
 }
}
```


<details>
<summary>
🧪 Try the code out! 
</summary>
<iframe src="https://trinket.io/embed/java/ccf08839d2" width="100%" height="600" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>

</details>

## Chars and ASCII In Practice

What happens when we try to store a char value in an integer?
```java
public class Main {
    public static void main(String args[]) {
    int val='A';// It will save its ASCII value which is an integer value
    System.out.println("val = " +val);
    }`
} 
```

What happens when we typecast an int value to a char type?
```java
public class Main {
 public static void main(String[] args) {
   int x = 5;
   char y = (char)x;  //Typecasting an int to a char
   System.out.println(x + y);  // prints 10
 }
}
```


---
title: Chapter 4b - If Else
---

## Conditional Structure


![](../../static/img/2022-05-25-05-50-24.png)
### If Else

```java
public class Main {
  public static void main(String[] args) {
    if(false){
      System.out.println("Is True");
    }else {
      System.out.println("Is False");
    }
  }
}
```
<details>
<summary>
🧪 Try the code out~!
</summary>
<iframe src="https://trinket.io/embed/java/641a2a9c9e" width="100%" height="600" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>

</details>

:::tip Practice
-  Change `true` to `false` and see what happens.
:::



### Using Comparisons to resolve If Else conditionals

![](../../static/img/2022-05-25-05-53-34.png)

```java
class Main{
 public static void main (String args[]){
    int my_age    = 21;
    int age_marie  = 25;
   
     if(my_age < age_marie){
       System.out.println("I am Younger than Marie");
     }else if(my_age > age_marie){
       System.out.println("I am Older than Marie");
     }
   }
}
```

<details>
<summary>
🧪 Try the code out~!
</summary>

<iframe src="https://trinket.io/embed/java/abcbd41ace" width="100%" height="600" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>

</details>

### Else IF

:::note
![](../../static/img/2022-05-25-06-06-06.png)

- I created this using [draw.io](https://draw.io/)
:::

```java

public class Main {
  public static void main(String[] args) {
    
    int age = 17;
    if(age == 17){
      System.out.println("Age is 17");
    }else if(age>17) {
      System.out.println("You are an adult now");
    }else{
      System.out.println("You are still a kid.");
    }
  }
}
```

Explaination:
```java
If (Boolean condition1) Then

    (perform computation or action)

Else if (Boolean condition2) Then

    (perform another computation or action)

Else
    (perform a default computation or action)
```

<details>
<summary>
🧪 Try the code out~!
</summary>
<iframe src="https://trinket.io/embed/java/e7864d63c6" width="100%" height="600" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>

</details>

## Lesson 4 Learning Activities [E1] : Introduce Logical Conditionals

[👀](https://learn2codelive.com/courses/107/pages/lesson-4-learning-activities-e1-introduce-conditionals?module_item_id=9114)









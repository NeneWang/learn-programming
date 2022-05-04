---
title: Chapter 4a - If Else
---

## If Else

```java
public class Main {
  public static void main(String[] args) {
    boolean isJavaFun = true;
    boolean isFishTasty = false;    
    System.out.println(isJavaFun);
    System.out.println(isFishTasty);
  }
}
```


### Conditional Structure
```
If (Boolean condition1) Then

    (perform computation or action)

Else if (Boolean condition2) Then

    (perform another computation or action)

Else

    (perform a default computation or action)
```


## Boolean Expression 

[👀](https://learn2codelive.com/courses/107/pages/lesson-4-learning-activities-e1-introduce-boolean-expression?module_item_id=9108)

```java
class Main{
 public static void main (String args[]){
   //heights are in inches
   //create variables for heights of the five friends
    int ht_tom    = 61;
    int ht_marie  = 63;
    int ht_darell = 66;
    int ht_alisha = 59;
    int ht_joe    = 64;
   //boolean expression evaluates to True or False
   System.out.println("Tom is of the same height as Marie: " + (ht_tom == ht_marie));
   System.out.println("Tom is as tall as Marie or taller: " + (ht_tom >= ht_marie));
   System.out.println("Darell is shorter or the same height as Joe: "+ (ht_darell <= ht_joe));
   System.out.println("Alisha is shorter than Tom: " + (ht_alisha < ht_tom));
   }
}
```


<details>
<summary>
🧪 Try the code out! 
</summary>
<iframe src="https://trinket.io/embed/java/f4a2082f58" width="100%" height="600" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>

</details>


### Comparison Operator
```
== (equal to; example: x == 5)

!= (not equal to; example: x != 5)

> (greater than; example: y > 3)

< (less than; example: x <  5 )

>= (greater than or equal to; example: x >= y) 

<= (less than or equal to; example: x <= y)
```


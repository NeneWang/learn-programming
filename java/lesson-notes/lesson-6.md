---
title: Chapter 6 - For Loops
---


## Introducing For Loops

```java

import java.util.*;
class Main {
  public static void main(String[] args) {
    for(int i = 1; i<=5; i++){
      System.out.println(i);
    }
    
  }
}

```



[👀](https://learn2codelive.com/courses/107/pages/lesson-6-learning-activities-e1-introduce-for-loop-in-python?module_item_id=9181)


## Placing Tables

```java
import java.util.*;
// https://www.geeksforgeeks.org/java-for-loop-with-examples/
class Main {
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    // a simulation of setting the table
    System.out.println("Enter number of table placements to be set");
    int n = sc.nextInt();
    sc.close();
    int i;
    for(i = 1; i<=n; i++){
      System.out.println("Plate placed");
      System.out.println("Silverware placed");
      System.out.println("Napkin placed");
      System.out.println("Glass of water placed");
      System.out.println("Table has been set for " + i);
      System.out.println();
    }
    System.out.println("It's dinner time!");
  }
}
```







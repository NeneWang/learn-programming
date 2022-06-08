---
title: Chapter 6b - For Loops
---


## Introducing For Loops

:::note
![](https://qph.cf2.quoracdn.net/main-qimg-57de0b301da5ce4c0dd813bc26162c80)

Animation extracted from [Quora](https://www.quora.com/How-do-I-use-a-for-loop-in-Java)
:::

```java

import java.util.*;
class Main {
  public static void main(String[] args) {
    for(int i = 1; i<3; i++){
      System.out.println(i);
    }
    
  }
}

```

<iframe src="https://trinket.io/embed/java/4827fcc3f6" width="100%" height="600" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>



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







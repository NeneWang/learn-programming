---
title: Chapter 6a - While Loops
---

:::note While Loop

![](../../static/img/2022-06-07-22-46-00.png)

The BooleanExpression is tested, and if it is true, the Statement is executed. Then, the BooleanExpression is tested again. If it is true, the Statement is executed. This cycle repeats until the BooleanExpression is false.

:::

## While Loop


```java
import java.util.*;
class Main {
  public static void main(String[] args) {
    int number = 0;
    while (number<5)
    {
        System.out.println("Hello");
        number++;
    }
    
  }
}
```




<details>
<summary>
🧪 Try the code out~!
</summary>
<iframe src="https://trinket.io/embed/java/0aa8aff94e" width="100%" height="600" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>

</details>

![](../../static/img/2022-06-07-22-54-23.png)


## Infinite Loops

:::caution Be careful with no creating an infinite loop
This code will be printing `Hello for ever`:

```java
import java.util.*;
class Main {
  public static void main(String[] args) {
   int number = 1;
    while (number <= 5)
    {
       System.out.println("Hello");
    }
    
  }
}
```

<details>
<summary>
🧪 Try the code out~!
</summary>
<iframe src="https://trinket.io/embed/java/df212d025f" width="100%" height="300" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>

</details>

:::






---
sidebar_position: 4
title: Lesson 3a 
---

## Scanner

### Scanning for User Input

```java

import java.util.*;
class Main {
    public static void main(String arg[]) {
      System.out.print("Enter Your Name : ");  // user prompt
      Scanner sc = new Scanner(System.in);     // take user input
      String name = sc.nextLine();             // store the user input in the name variable
      System.out.println("Name : "+ name);     // output the value stored in name
    }
}

```

<details>
<summary>
🧪 Try the code out~! 
</summary>
<iframe src="https://trinket.io/embed/java/5b1603aee0" width="100%" height="600" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>

</details>

### Methods for accepting user Input


| Code          | What is used for                                              |
| ------------- | ------------------------------------------------------------- |
| nextInt()     | It is used to take an integer as an input.                    |
| nextFloat()   | It is used to take float as an input.                         |
| nextDouble()  | It is used to take double as an input.                        |
| next line()   | It is used to take String as an input(It will accept a line). |
| nextBoolean() | It is used to take the boolean value as an input.             |
| nextLong()    | It is used to take long as an input.                          |

### Number Inputs

[👀 Lesson 3 Learning Activities [E1] : Prediction with User Inputs in Java](https://learn2codelive.com/courses/107/pages/lesson-3-learning-activities-e1-prediction-with-user-inputs-in-java?module_item_id=9075)

:::note Example: Bake Store Program
In this example we create a Program for a Bake Bar that helps the store clerk
into calculating the total cost of the items the customer purchases.
```java
import java.util.*;
class Main {
    public static void main(String args[]) {
        Scanner scan = new Scanner(System.in);
        System.out.println("------------------------------------------------");
        System.out.println("The following items are availabe at Bake Bar: ");
        System.out.println("Shortcakes at $1.5 per cake");
        System.out.println("Macaron at $1 per piece");
        System.out.println("Chocochip cookies at $1 per cookie");
        System.out.println("-------------------------------------------------");
        System.out.print("Enter the number of shortcakes you want: ");
        int shortcake = scan.nextInt();
        System.out.print("Enter the number of macarons you want: ");
        int macaron = scan.nextInt();
        System.out.print("Enter the number of cookies you want: ");
        int cookie = scan.nextInt();
        double costCake = 1.5 * shortcake; //calculate the money spent on shortcake
        double costMacaron = 1 * macaron; // calculate the money spent on macarons
        double costCookie = 1 * cookie; // calculate the money spent on cookies
        double totalCost = costCake + costMacaron + costCookie;
        //calculate the total money spent on all 3 items
        System.out.println("Bill amount for your shopping is $" + totalCost);
    }
}
```

<details>
<summary>
🧪 Try the code out! 
</summary>
<iframe src="https://trinket.io/embed/java/7646d28f5c" width="100%" height="600" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>

</details>

:::
---
title: Lesson 5A
---

[👀](https://learn2codelive.com/courses/107/pages/lesson-5-learning-activities-h-entry-ticket?module_item_id=9147)

## Introduce Random Numbers in a Java Program

```java
import java.util.Scanner;
import java.util.Random;
class Main {
   public static void main(String args[]) {
       Scanner scan = new Scanner(System.in);
       Random rand = new Random(); //creates object of class Random which is used to generate random number
       System.out.println("This is a simulation of a coin toss.");
       System.out.println("Tossing coin now...\n");
       int randomNum = rand.nextInt(2); //generates random numbers 0 & 1
       if (randomNum == 0) {
           System.out.println("HEADS...\n");
       } else {
           System.out.println("TAILS...\n");
       }
   }
}
```




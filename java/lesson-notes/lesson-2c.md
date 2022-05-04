---
title: Chapter 2c - Built-in Functions and Math
---

![](../../static/img/2022-05-04-05-12-31.png)


## Built In Functions

### Java Math Methods Table

| Function       | Explanation                                                                                                                                |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| Math. max(x,y) | This method is used to find the highest value of x and y.                                                                                   |
| Math. min(x,y) | This method is used to find the smallest value of x and y.                                                                                  |
| Math. round(x) | This method is used to round off the decimal numbers to the nearest value. (4.25 will be rounded off to 4 & 4.55 will be rounded off to 5). |
| Math. sqrt(x)  | This method is used to find the square root of a number.                                                                                    |
| Math. pow(x,y) | This method returns the value of the first argument raised to the power to the second argument.(i.e. xy).                                   |
| Math.abs(x)    | This method returns the absolute (positive) value of x.                                                                                     |
| Math. ceil(x)  | This method is used to find the smallest integer value that is greater than or equal to the given number.                                   |
| Math. floor()  | This method is used to find the largest integer value which is less than or equal to the given number.                                      |

### Example Usage
```java
public class Main {

public static void main(String[] args)   
  {  
      double num1 = 4;  
      double num2 = 2;  
      double num3 = 4.25;
      // return the Minimum of two numbers
      System.out.println("Minimum of " + num1 + " and " + num2 + "is: " + Math.min(num1, num2));
      // returns the Maximum of two numbers
      System.out.println("Maximum of " + num1 + " and " + num2 + "is: " + Math.max(num1, num2));
      //returns 16 i.e. 4*4 
      System.out.println("Power of " + num1 + " and " + num2 + "is: " + Math.pow(num1, num2)); 
      // returns the decimal number rounded to the nearest whole number value.
      System.out.println("Rounding off " + num3 + " yields: " + Math.round(num3));
      // returns the square root of num1 
      System.out.println("Square root of " + num1 + " is " + Math.sqrt(num1));
      // returns the absolute value of int type
      System.out.println("Absolute value " + num1 + " is " + Math.abs(num1));
      // returns the smallest integer value that is greater than or equal to the given numbe 
      System.out.println("Ceiling  of " + num3 + " is " + Math.ceil(num3));
      // returns the largest integer value which is less than or equal to the given number
      System.out.println("Floor  of " + num3 + " is " + Math.floor(num3));
  }
}

```

<details>
<summary>
🧪 Try the code out! 
</summary>
<iframe src="https://trinket.io/embed/java/ef0b0d44ad" width="100%" height="600" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>

</details>

[👀](https://learn2codelive.com/courses/107/pages/lesson-2-learning-activities-r-practice-activity-5-movies?module_item_id=9057)

### Practice Activity 
:::tip Movies Calculation Activity 🎥
You got $37.50 from your dad to go to the movies with your friends. You have $37 in bills and $0.50 in coins. Each ticket costs $7.50. Upon reaching the theatre you find out that the ticket kiosk is broken and can’t take coins. Write a program to calculate how many friends you can take to the movies with you, and how much money you are left with after buying the tickets. Use variables for each number used in your program. Once your program is ready, change the value of the variable that holds initial money from $37.50 to $42.40. Make no other changes to your program. Check if your program still works for initial money of $42.40.

**Expected Output**
```
I have $37.5
Since I can't use the coins, I can only use $37.0 to buy tickets.
Each ticket costs $7.5
I can take 3 friends to the movies along with me!
I am left with $7.5
```


<details>
<summary>
✍  <b>Modify the following code</b> so that it fulfills the assigment requirements.
</summary>
<iframe src="https://trinket.io/embed/java/72fd16661e" width="100%" height="1000" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>

</details>

:::









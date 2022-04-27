---
sidebar_position: 3
title: Lesson 2a - Data Types in Java
---

## Data Types

| Data Type | Size    | Description                                                                       |
| --------- | ------- | --------------------------------------------------------------------------------- |
| boolean   | 1 bit   | Stores true or false                                                              |
| char      | 2 bytes | Stores a single character i.e. 'a'. '1' etc.                                      |
| byte      | 1 byte  | Stores whole numbers from -128 to 127                                             |
| short     | 2 bytes | Stores whole numbers from -32,768 to 32,767                                       |
| int       | 4 bytes | Stores whole numbers from -2,147,483,648 to 2,147,483,647                         |
| long      | 8 bytes | Stores whole numbers from -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 |
| float     | 4 bytes | Sufficient for storing 6 to 7 decimal digits                                      |
| double    | 8 bytes | Stores decimal numbers. It can store up to 15 decimal digits.                     |


## Working with Variables

| Data Type | Size    | Description                                               |
| --------- | ------- | --------------------------------------------------------- |
| int       | 4 bytes | Stores whole numbers from -2,147,483,648 to 2,147,483,647 |
| short     | 2 bytes | Stores whole numbers from -32,768 to 32,767               |


<details>
<summary>
🧪 Try the code out! 
</summary>
<iframe src="https://trinket.io/embed/java/e694e1d8b3" width="100%" height="300" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>

</details>

## Arithmetic Operators

| Operator | Name           | Description                            | Example |
| -------- | -------------- | -------------------------------------- | ------- |
| +        | Addition       | Adds together two values               | x + y   |
| -        | Subtraction    | Subtracts one value from another       | x - y   |
| *        | Multiplication | Multiplies two values                  | x * y   |
| /        | Division       | Divides one value by another           | x / y   |
| %        | Modulus        | Returns the division remainder         | x % y   |
| ++       | Increment      | Increases the value of a variable by 1 | x++     |
| --       | Decrement      | Decreases the value of a variable by 1 | x--     |

### Using Math Operators
```java
public class Main {
 public static void main(String[] args) {
   int num=100;
   //Add
   int sum    = 20 + 10;
   System.out.println(sum);

   //Subtraction
   int sub    = 20 - 10;
   System.out.println(sub);

   //multiply
   int mul    = 20 * 10;
   System.out.println(mul);

   //divide
   int div    = 20 - 10;
   System.out.println(div);

   //modulo
   int modulo = 20 % 10;
   System.out.println(modulo);

   //increment
   num++;
   System.out.println(num);

   //decrement
   num--;
   System.out.println(num);
 }
}
```
<details>
<summary>
🧪 Try the code out! 
</summary>
<iframe src="https://trinket.io/embed/java/4ae86c0fd1" width="100%" height="400" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>

</details>

## Compound assignment operator

| operator | Definition                    |
| -------- | ----------------------------- |
| +=       | Addition and assignment       |
| -=       | Subtraction and assignment    |
| *=       | Multiplication and assignment |
| /=       | Division and assignment       |
| %=       | Remainder and assignment      |

<details>
<summary>
🧪 Try the code out! 
</summary>
<iframe src="https://trinket.io/embed/java/2bfb91b7e7" width="100%" height="600" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>

</details>

[👀 Practice Activity](https://learn2codelive.com/courses/107/pages/lesson-2-learning-activities-r-practice-activity-1-prediction-with-integer-data-type-and-math-operations?module_item_id=9048)

### Integrated Example
*Here an example showing everything together, please feel free to try it out!*
<details>
<summary>
🧪 Try the code out! 
</summary>
<iframe src="https://trinket.io/embed/java/28a729f904" width="100%" height="600" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>

</details>



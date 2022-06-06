---
title: Chapter 4d - String Comparison
---


## using Equals() to compare Strings

```java
String  hello1 = "Hello";
String  hello2 = "Hello";
System.out.print(hello1.equals(hello2));
```

<details>
<summary>
🧪 Try the code out~!
</summary>
<iframe src="https://trinket.io/embed/java/c88b414007" width="100%" height="300" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>

</details>




```java
String  word1 = "test"
String  word2 = "Test"
System.out.print(word1.equals(word2)); 
System.out.println(word1.equalsIgnoreCase(word2));
```
<details>
<summary>
🧪 Try the code out~!
</summary>
<iframe src="https://trinket.io/embed/java/4019da27be" width="100%" height="600" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>

</details>

## Using compareTo() to compare Strings:

```java
String s1 = "hello";
String s2 = "hello";
String s3 = "apple";
String s4 = "nation";
System.out.println(s1.compareTo(s2)); //0 because both are equal 
System.out.println(s1.compareTo(s3)); //7 because "h" is 7 times greater than "a" 
System.out.println(s1.compareTo(s4)); //-6 because "h" is 6 times lower than "n" 
```
<details>
<summary>
🧪 Try the code out~!
</summary>
<iframe src="https://trinket.io/embed/java/64ae7116e1" width="100%" height="600" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>

</details>



[👀 TODO: Trvia](https://learn2codelive.com/courses/107/pages/lesson-4-learning-activities-e2-assessment-quiz?module_item_id=9128)


## Dictionary Exercise

[👀](https://learn2codelive.com/courses/107/pages/lesson-4-learning-activities-r-practice-activity-6-dictionary-order?module_item_id=9124)

:::tip Exercise

- Modify this program so that it compares and orders two words lexicographically.

```java
import java.util.Scanner;

class Main{
public static void main (String args[]){
   Scanner scan=new Scanner(System.in);
   System.out.print("\n Enter the first word : ");
   String word1=scan.nextLine();
   System.out.print("\n Enter the second word : ");
   String word2=scan.nextLine();
   
   if(true){
      System.out.println(word1 + " and " + word2 + " are lexicographically same");
   }else if(true){
      System.out.println(word1 + " ," + word2);
   }else{
      System.out.println(word2 + ", " + word1);
   }
 }
}
```

***

🙋‍♀️ Sample Program

<iframe src="https://trinket.io/embed/java/4faadfc62a?outputOnly=true" width="100%" height="300" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>

:::


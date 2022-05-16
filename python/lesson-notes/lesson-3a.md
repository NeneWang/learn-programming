---
title:  Chapter 3a - Inputs
---


[👀](https://learn2codelive.com/courses/4/pages/lesson-3-learning-activities-h-introduce-the-idea-of-user-input?module_item_id=703)

## Input

[👀](https://learn2codelive.com/courses/4/pages/lesson-3-learning-activities-r-user-input-in-python-explanation?module_item_id=706)

```python
test = input()
print(test)
```

<details>
<summary>
🧪 Try the code out~!
</summary>
<iframe src="https://trinket.io/embed/python/4674a27595" width="100%" height="600" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>

</details>

### Prompting user input withouth print()
```python
inputEnteredByUser = input("write something")
print(inputEnteredByUser)
```

<details>
<summary>
🧪 Try the code out~!
</summary>
<iframe src="https://trinket.io/embed/python/7908cca77d" width="100%" height="600" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>

</details>

<br/>


:::tip Review

Play with this:
<iframe src="https://trinket.io/embed/python/29ef5d8362?outputOnly=true&start=result" width="100%" height="200" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>

***

🛠 Fix the following code so that you can replicate the behavior from the program above 👆
- Notice how the program below 👇 doesn't ask for the user to write anything on the terminal (the left box under **Result**)

<iframe src="https://trinket.io/embed/python/71426ccbb9" width="100%" height="600" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>
:::

:::important Time to work on our Class Project!
[Click here to go to our Amongus project 3a](../project/project-3a)
You only need to complete this for this class. But if you would like to, feel free to peek into the topics below! 
:::

## Implementation Example

### Prompting a triangle color.

```python
# 3-input-d
import turtle

# Ask user to enter the pen color
color = input("Enter a color for turtle's pen color")

# Set the turtle's pencolor
turtle.pencolor(color)

turtle.forward(100)
turtle.left(120)
turtle.forward(100)
turtle.left(120)
turtle.forward(100)
turtle.left(120)
```

<details>
<summary>
🧪 Try the code out~!
</summary>
<iframe src="https://trinket.io/embed/python/9cb31f09c8" width="100%" height="600" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>

</details>




## Robot Clerk: User Inputs and your bakery calculator
[👀](https://learn2codelive.com/courses/4/pages/lesson-3-learning-activities-e1-prediction-with-user-inputs-in-python?module_item_id=705)

```python
# this program generates a bill based on the items shopped
print("The following items are availabe at Bake Bar:")
print("Shortcakes at $1.5 per cake")
print("Macaron at $1 per piece")
print("Chocochip cookies at $1 per cookie")
print("") # leave a line before printing other info

shortcake = int(input("Enter the number of shortcakes you want "))
macaron = int(input("Enter the number of macarons you want "))

costCake = 1.5 * shortcake # calculate the money spent on shortcake
costMacaron = 1 * macaron # calculate the money spent on macarons
totalCost = costCake + costMacaron # calculate the total money spent on all 3 items

print("Bill amount for your shopping is " + str(totalCost))

```

<details>
<summary>
🧪 Try the code out~!
</summary>
<iframe src="https://trinket.io/embed/python/05b55d78d3" width="100%" height="600" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>

</details>


<br/>

## Exercise

### Madlib 

[👀](https://learn2codelive.com/courses/4/pages/lesson-3-learning-activities-r-practice-activity-2-madlib?module_item_id=709)

import IconAdmonition from "@site/src/components/IconAdmonition.js";

<IconAdmonition icon="📝" title="Exercise: Complete the following Program"  >

- Adverbs examples: Above, Away, Back, Behind, Fairly, always
- Adjective examples: Cruel, Charming, Fantastic
- Noun examples: Goat, Chicken, Lemon
- Verb examples: Run, Hide, Eat


Expected Result:
<iframe src="https://trinket.io/embed/python/75cc960754?outputOnly=true&runOption=run&start=result" width="100%" height="300" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>

<details>
<summary>
✍  You can solve the problem <b>here</b> using Trinket

</summary>
- You can see that the code here doesn't print the adjective, noun or verb, or is asking the prompt for it. Please complete the program so it does so.

<iframe src="https://trinket.io/embed/python/16a9ac36b2" width="100%" height="600" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>

</details>

</IconAdmonition>


:::note Instructor Notes
- [Debugging Challange](https://learn2codelive.com/courses/4/pages/lesson-3-debugging-challenge?module_item_id=695)
  - I don't think this exercise is working properly.
  - [Activity Page](https://learn2codelive.com/courses/4/pages/lesson-3-learning-activities-r-revisit-challenge-2?module_item_id=701)



:::
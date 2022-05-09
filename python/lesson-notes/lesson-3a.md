---
title:  Chapter 3a - Inputs
---


[👀](https://learn2codelive.com/courses/4/pages/lesson-3-learning-activities-h-introduce-the-idea-of-user-input?module_item_id=703)

## Input

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






## Robot Clerk: Prediction with User Inputs in Python
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



:::note Instructor Notes
- [Debugging Challange](https://learn2codelive.com/courses/4/pages/lesson-3-debugging-challenge?module_item_id=695)
  - I don't think this exercise is working properly.
  - [Activity Page](https://learn2codelive.com/courses/4/pages/lesson-3-learning-activities-r-revisit-challenge-2?module_item_id=701)



:::
---
title: Chapter 4b - Conditionals

---

[👀](https://learn2codelive.com/courses/4/pages/lesson-4-learning-activities-e1-introduce-conditionals?module_item_id=1666)



## If Condition


```python
isHot = int(input("Is it hot outside? Enter 1 if it is"))

#use if statement to check if user has entered 1
if isHot == 1:
  print('Outside is hot')      # Line 9

```


<details>
<summary>
🧪 Try the code out~!
</summary>
<iframe src="https://trinket.io/embed/python3/62b0ea9cd8" width="100%" height="600" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>

</details>

## Else Condition
```python
isHot = int(input("Is it hot outside? Enter 1 if it is"))

#use if statement to check if user has entered 1
if isHot == 1:
  print('Outside is hot')      # Line 9
else:
  print("not hot")

```

<details>
<summary>
🧪 Try the code out~!
</summary>
<iframe src="https://trinket.io/embed/python3/29fc0151ed" width="100%" height="600" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>

</details>

:::tip Exercise

Fix the following program
Problem:
- No matter what you enter it prints "Outside is hot"

<iframe src="https://trinket.io/embed/python3/ebdd69524a" width="100%" height="300" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>

:::

## Checking Even and Odd numbers:

```python

n = int(input('Enter a number '))

if n % 2 == 0: # if the remainder when a number is divided by 2 is 0
  print(str(n) + " is an even number")

else:
  print(str(n) + " is an odd number")

```



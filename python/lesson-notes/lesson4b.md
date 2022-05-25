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

![](2022-05-25-08-32-56.png)
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
- Fix the program so that it prints "Outside is hot" if `isHot` = `2`


<iframe src="https://trinket.io/embed/python3/ebdd69524a" width="100%" height="300" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>

:::

## Checking Even and Odd numbers:

![](2022-05-25-08-31-57.png)

- If `number` is odd the following program will print `false`.
- If `number` is even, the program will print `true`

```python


number = 4

print( number % 2 == 0)

```

<iframe src="https://trinket.io/embed/python3/110923fc1f" width="100%" height="600" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>



---
title: Chapter 4b - Conditionals

---

[👀](https://learn2codelive.com/courses/4/pages/lesson-4-learning-activities-e1-introduce-conditionals?module_item_id=1666)



## If Condition

![](2022-05-25-08-31-57.png)


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

:::important Time to work on our project!
Click here to go to [Zodiac Sign Project](/python/project/project-4b)

You only need to complete this for this class. But if you would like to, feel free to peek into the topics below! 
:::



## Checking Even and Odd numbers:

[👀 Lesson 4 Learning Activities [R] : Practice Activity 3 - Mathworks](https://learn2codelive.com/courses/4/pages/lesson-4-learning-activities-r-practice-activity-3-mathworks?module_item_id=1668)

- If `number` is odd the following program will print `false`.
- If `number` is even, the program will print `true`

```python


number = 4

print( number % 2 == 0)

```

<iframe src="https://trinket.io/embed/python3/110923fc1f" width="100%" height="300" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>

:::tip Exercise

- Modify the following program so that if the number is odd, it prints: `is Odd`
- And if it is even, it should print: `is Even`

<iframe src="https://trinket.io/embed/python/a4243efe5a" width="100%" height="300" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>

***
🙆‍♀️ Expected Program:
<iframe src="https://trinket.io/embed/python/1da65ebffb?outputOnly=true&start=result" width="100%" height="200" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>


:::



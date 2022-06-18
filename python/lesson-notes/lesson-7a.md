---
title: Chapter 7a - While Loop
---

## While Loops
:::note While Loop

![](../../static/img/2022-06-07-22-46-00.png)

The BooleanExpression is tested, and if it is true, the Statement is executed. Then, the BooleanExpression is tested again. If it is true, the Statement is executed. This cycle repeats until the BooleanExpression is false.

:::

## Print Program Untill I tell you to stop

```python
continueProgram="y"


while (continueProgram == "y"):
  print("Hello!")
  continueProgram = input("Continue program? y/n").lower()[0]
  
print("Program Terminated")
```


## Reusable Adder

The following program adds 2 numbers until the user tells it to stop

```python
programFinished="yes"


while (programFinished == "yes"):

    n1 = int(input("Enter number 1"))
    n2 = int(input("Enter number 2"))
    print(n1+n2)
    programFinished = input("Enter Yes if you want to continue using the calculator or No otherwise").lower()
```
<iframe src="https://trinket.io/embed/python/0e65658c48" width="100%" height="600" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>


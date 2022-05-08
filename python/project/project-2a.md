---
sidebar_position: 3
title: 💯 2a - Using python to calculate things
---



## Introductory Exercise: 

### Calculating Profits: Fix the following program

:::tip Calulating Profits
Profits are calulated as `Profit = Revenue - Cost`

The programmer who created the following code made a huge mistake and calculated profits as `Revenue + Cost` please fix this program!
<details>
<summary>
 🔨 Fix the program here:
</summary>
<iframe src="https://trinket.io/embed/python/a4f88da201" width="100%" height="600" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>

</details>
:::

### Calculating Profits: Solving a new formula

:::tip Calculating Profit Margin

[What is Profit Margin? - ClayTrader business](https://www.youtube.com/watch?v=pgmtxQNKe9Q&ab_channel=ClayTrader)

Profit margins are calculated as `Profit Margin = (Net Profit / Revenue) * 100`
Finish the following program so that the program prints your

<details>
<summary>
 🔨 Fix the program here:
</summary>
<iframe src="https://trinket.io/embed/python/d03bc0e07a" width="100%" height="600" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>

</details>
:::



## Optional Assigments

### The secret of building wealth: Compound Interest

[👀 Instructor Notes](https://docs.google.com/spreadsheets/d/1iH3owGRNLaSoqhlSNBmb-jZLjisvXfteBHbfO44xj34/edit#gid=1342840897)

This might be a concept harder to understand but here we have a program that approximates how rich you will be if you started an investing account (and you  don't add or remove money from your investing account)

:::note 
![](2022-05-06-09-21-19.png)
Image extracted from [Navicore](https://navicoresolutions.org/understanding-compound-interest/)
:::


```python
age_start_investing = 20
age_retirement = 22
initial_investment = 1000
yearly_interest_percent = 5

expected_yearly_interestgain = 1.00 + yearly_interest_percent*0.01

worth_end = initial_investment* expected_yearly_interestgain**(age_retirement - age_start_investing)
print("\nInvestment Calculator \n -----------------")
print("If you create an investment account at:\n age {age_start_investing} with an yearly interest rate of {yearly_interest_percent} percent ".format(age_start_investing=age_start_investing, yearly_interest_percent=yearly_interest_percent))
print('\nAt the age of {age_retirement} your ${initial_investment} will become: {worth_end}'.format(age_retirement=age_retirement, initial_investment = initial_investment, worth_end= worth_end))
```
<details>
<summary>
🧪 Try the code out! 
</summary>

<iframe src="https://trinket.io/embed/python/c8557f8656" width="100%" height="600" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>


</details>


:::tip Calculating your future wealth of a single investment
<details>
<summary>
🧪 Play with the following code!
</summary>


Play around with the next python code
- Try changing the age you start investing (e.g. from 18 to 20)
- Try changing your initial investment (e.g. from 1000 to 2000)
- Try Changing the interest_rate (e.g. from 8 % yearly to 12%)


<iframe src="https://trinket.io/embed/python/b66cc4b608" width="100%" height="600" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>
</details>

:::


### But what if I invest $1000 every year? 🙋‍♂️

:::tip Calculating your future wealth of multiple investments
<details>
<summary>
🧪 Play with the following code!
</summary>


Play around with the next python code
- Try changing the age you start investing (e.g. from 18 to 20)
- Try changing your initial investment (e.g. from 1000 to 2000)
- Try Changing the interest_rate (e.g. from 8 % yearly to 12%)


<iframe src="https://trinket.io/embed/python/e0fb1b318c" width="100%" height="600" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>
</details>

:::


### Cheating your Physics Exam
The following program calculates the position of something based on variables:
These are the linear motion formulas


:::caution Disclaimer
I don't condone cheating or anything related to actual academic dishonesty, this
is just a what if scenario... 	٩(｡•́‿•̀｡)۶
:::


<!-- ![](../../static/img/2022-05-04-02-16-59.png) -->
![](../../static/img/2022-05-04-02-48-50.png)

Image extracted from [real-world-physics](https://www.real-world-physics-problems.com/rectilinear-motion.html)


:::tip Fix the following speed printer
The following program doesn't follow the formula properly please fix it (it should print `32` when `v1 = 2`, `aceleration = 3` and `time = 10`)
```python
initial_velocity =  2
aceleration = 3
time_elapsed = 10

print("Velocity of the object at time: "+ str(time_elapsed))
print(initial_velocity + aceleration)
```
:::

<details>
<summary>
 🔨 Fix the program here:
</summary>
<iframe src="https://trinket.io/embed/python/0cf1c4e60d" width="100%" height="600" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>

</details>






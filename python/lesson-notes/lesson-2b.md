---
title: Chapter 2b - Built-in Functions
---


![](../../static/img/2022-05-04-02-56-44.png)


<details>

<summary>
Animation 
</summary>

[extracted from Runestone Academy](https://runestone.academy/ns/books/published/fopp/Functions/Returningavaluefromafunction.html)

![](https://runestone.academy/ns/books/published/fopp/_images/function_call.gif)
</details>




## Built in Functions
[👀](https://learn2codelive.com/courses/4/pages/lesson-2-learning-activities-e1-built-in-functions?module_item_id=487)

### Using + with strings.
we know that when we use `+` with numbers, the program will give us the mathematic operation of the sum of the numbers. But what happens when we have words?
```python
s1 = "Agent" # assign values to string 1 and string 2
s2 = "007"
print ("Using + with strings ")
print("String 1: " + s1) # print values of s1 and s2
print("String 2: " + s2)    
print ("String 1 + String 2: " + s1 + s2) # concatenation of strings - Line 18
print("")
```
<details>
<summary>
🧪 Try the code out! 
</summary>
<iframe src="https://trinket.io/embed/python/5b75bb1c60" width="100%" height="600" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>

</details>





### str(), min(), max()

```python
# Part 1
a = 12 # assign value to variable a
b = 3 # assign value to variable b
c = 4 # assign value to variable c
print ("a: " + str(a) + " b: " + str(b) + " c: " + str(c) ) # print values for a, b and c  
print ("Minimum of a, b and c is " + str(min(a,b,c) ) ) # print minimum value among a, b and c  # Line 8
print ("Maximum of a, b and c is "+ str(max(a, b, c) ) ) # print maximum value among a, b and c  # Line 9
print("") # print an empty line
print("")

```
<details>
<summary>
🧪 Try the code out! 
</summary>
<iframe src="https://trinket.io/embed/python/9586bbd5f7" width="100%" height="600" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>

</details>






### int() Converting Words into Integers

```python
# Part 3
a = 12 # assign value to variable a
s2 = "007"

print ("A string which holds a number can be changed to number data type like this:")
s2_as_a_num = int(s2) # typecasting a number into a string
print("sum of a and s2_as_a_num: " + str(s2_as_a_num + a)) # adding a typecasted number with another

```
<details>
<summary>
🧪 Try the code out! 
</summary>
<iframe src="https://trinket.io/embed/python/5a5326f60a" width="100%" height="600" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>

</details>

### pow() and abs()


## Summary

| Function | Explaination                       | Example                   |
| -------- | ---------------------------------- | ------------------------- |
| str()    | Converts numbers to string (words) | `print("number"+str(32))` |




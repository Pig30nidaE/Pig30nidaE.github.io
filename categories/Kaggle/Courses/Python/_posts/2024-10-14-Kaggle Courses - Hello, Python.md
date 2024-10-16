---
layout: post
title: Kaggle Courses - Hello, Python
excerpt: "Kaggle - Learn - Courses - Python - Hello, Python 정리"
tags: [Kaggle, Courses, Python]
date: 2024-10-14
---

# 시작하기 전에...
알고리즘 문제를 풀면서 Kaggle의 Learn탭에 있는 Courses를 병행하기로 했다.  
  
제일 처음에 있는 강의는 Intro to Programming 인데, 생략하기로 결정했다. Hello, Python도 생략하려다가 그래도 한 번 들어보자는 생각에 시작한다. 다만, Python같은 경우는 Exercise위주로 정리하려고 한다.

# Exercise
## 0.

  
This is a silly question intended as an introduction to the format we use for hands-on exercises throughout all Kaggle courses.

*What is your favorite color? *

To complete this question, create a variable called color in the cell below with an appropriate value. The function call q0.check() (which we've already provided in the cell below) will check your answer.
```python
# create a variable called color with an appropriate value on the line below
# (Remember, strings in Python must be enclosed in 'single' or "double" quotes)

# Check your answer
q0.check()
```

<details>
<summary> 정답 </summary>
<div markdown="1">
  
```python
# create a variable called color with an appropriate value on the line below
# (Remember, strings in Python must be enclosed in 'single' or "double" quotes)
from learntools.core import binder; binder.bind(globals())
from learntools.python.ex1 import *
color = 'blue'

# Check your answer
q0.check()
```
</div>
</details>

## 1.

Complete the code below. In case it's helpful, here is the table of available arithmetic operations:  

|Operator|Name|Description|
|:---|:---|:---|
|a + b|Addition|Sum of a and b|
|a - b|Subtraction|Difference of a and b|
|a * b|Multiplication|Product of a and b|
|a / b|True division|Quotient of a and b|
|a // b|Floor division|Quotient of a and b, removing fractional parts|
|a % b|Modulus	Integer|remainder after division of a by b|
|a ** b|Exponentiation|a raised to the power of b|
|-a|Negation|The negative of a|  
  
```python
pi = 3.14159 # approximate
diameter = 3

# Create a variable called 'radius' equal to half the diameter
____

# Create a variable called 'area', using the formula for the area of a circle: pi times the radius squared
____

# Check your answer
q1.check()
```
<details>
<summary> 정답 </summary>
<div markdown="1">

```python
pi = 3.14159 # approximate
diameter = 3

# Create a variable called 'radius' equal to half the diameter
radius = diameter / 2

# Create a variable called 'area', using the formula for the area of a circle: pi times the radius squared
area = (radius ** 2) * pi

# Check your answer
q1.check()
```
</div>
</details> 

## 2.

Add code to the following cell to swap variables a and b (so that a refers to the object previously referred to by b and vice versa).
```python
########### Setup code - don't touch this part ######################
# If you're curious, these are examples of lists. We'll talk about 
# them in depth a few lessons from now. For now, just know that they're
# yet another type of Python object, like int or float.
a = [1, 2, 3]
b = [3, 2, 1]
q2.store_original_ids()
######################################################################

# Your code goes here. Swap the values to which a and b refer.
# If you get stuck, you can always uncomment one or both of the lines in
# the next cell for a hint, or to peek at the solution.

######################################################################

# Check your answer
q2.check()
```
<details>
<summary> 정답 </summary>
<div markdown="1">

```python
########### Setup code - don't touch this part ######################
# If you're curious, these are examples of lists. We'll talk about 
# them in depth a few lessons from now. For now, just know that they're
# yet another type of Python object, like int or float.
a = [1, 2, 3]
b = [3, 2, 1]
q2.store_original_ids()
######################################################################

a, b = b, a

######################################################################

# Check your answer
q2.check()
```
</div>
</details>

## 3a.

Add parentheses to the following expression so that it evaluates to 1.
```python
5 - 3 // 2
```
  
<details>
<summary> 정답 </summary>
<div markdown="1">

```python
(5 - 3) // 2
```
</div>
</details>

## 3b.

Questions, like this one, marked a spicy pepper are a bit harder.

Add parentheses to the following expression so that it evaluates to 0.
  
```python
8 - 3 * 2 - 1 + 1
```
<details>
<summary> 정답 </summary>
<div markdown="1">

```python
8 - (3 * 2) - (1 + 1)
```
</div>
</details>

## 4.

Alice, Bob and Carol have agreed to pool their Halloween candy and split it evenly among themselves. For the sake of their friendship, any candies left over will be smashed. For example, if they collectively bring home 91 candies, they'll take 30 each and smash 1.  
  
Write an arithmetic expression below to calculate how many candies they must smash for a given haul.
```python
# Variables representing the number of candies collected by alice, bob, and carol
alice_candies = 121
bob_candies = 77
carol_candies = 109

# Your code goes here! Replace the right-hand side of this assignment with an expression
# involving alice_candies, bob_candies, and carol_candies
to_smash = -1

# Check your answer
q4.check()
```
  
<details>
<summary> 정답 </summary>
<div markdown="1">

```python
# Variables representing the number of candies collected by alice, bob, and carol
alice_candies = 121
bob_candies = 77
carol_candies = 109

# Your code goes here! Replace the right-hand side of this assignment with an expression
# involving alice_candies, bob_candies, and carol_candies
to_smash = (alice_candies + bob_candies + carol_candies) % 3

# Check your answer
q4.check()
```
</div>
</details>
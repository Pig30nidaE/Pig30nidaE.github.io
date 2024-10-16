---
layout: post
title: Kaggle Courses - Functions and Getting Help
excerpt: "Kaggle - Learn - Courses - Python - Functions and Getting Help 정리"
tags: [Kaggle, Courses, Python]
date: 2024-10-15
---
# 이전 글
[Kaggle Courses - Hello, Python](/categories/Kaggle/Courses/Python/Kaggle-Courses-Hello,-Python)

# Exercise
## 1.
Complete the body of the following function according to its docstring.  
  
HINT: Python has a built-in function round.  
```python
def round_to_two_places(num):
    """Return the given number rounded to two decimal places. 
    
    >>> round_to_two_places(3.14159)
    3.14
    """
    # Replace this body with your own code.
    # ("pass" is a keyword that does literally nothing. We used it as a placeholder
    # because after we begin a code block, Python requires at least one line of code)
    pass

# Check your answer
q1.check()
```

<details>
<summary> 정답 </summary>
<div markdown="1">
  
```python
def round_to_two_places(num):
    """Return the given number rounded to two decimal places. 
    
    >>> round_to_two_places(3.14159)
    3.14
    """
    return round(num, 2)
# Check your answer
q1.check()
```
</div>
</details>

## 2.
  문제  
The help for round says that ndigits (the second argument) may be negative. What do you think will happen when it is? Try some examples in the following cell.
```python
# Put your test code here
```
  
이 문제는 정답을 요구하기 보다는 어떤 경우에 유용한 지에 대해 말해보라는 것 같아, solution()을 남겨놓는다.
<details>
<summary> 정답 </summary>
<div markdown="1">
Solution:  
As you've seen, ndigits=-1 rounds to the nearest 10, ndigits=-2 rounds to the nearest 100 and so on. Where might this be useful? Suppose we're dealing with large numbers:  
```
The area of Finland is 338,424 km²
The area of Greenland is 2,166,086 km²
```
We probably don't care whether it's really 338,424, or 338,425, or 338,177. All those digits of accuracy are just distracting. We can chop them off by calling round() with ndigits=-3:
```
The area of Finland is 338,000 km²
The area of Greenland is 2,166,000 km²
```
(We'll talk about how we would get the commas later when we talk about string formatting :))
</div>
</details>

## 3.
  문제  
In the previous exercise, the candy-sharing friends Alice, Bob and Carol tried to split candies evenly. For the sake of their friendship, any candies left over would be smashed. For example, if they collectively bring home 91 candies, they'll take 30 each and smash 1.

Below is a simple function that will calculate the number of candies to smash for any number of total candies.

Modify it so that it optionally takes a second argument representing the number of friends the candies are being split between. If no second argument is provided, it should assume 3 friends, as before.

Update the docstring to reflect this new behaviour.
```python
def to_smash(total_candies):
    """Return the number of leftover candies that must be smashed after distributing
    the given number of candies evenly between 3 friends.
    
    >>> to_smash(91)
    1
    """
    return total_candies % 3

# Check your answer
q3.check()
```
<details>
<summary> 정답 </summary>
<div markdown="1">

```python
def to_smash(total_candies, friends=3):
    """Return the number of leftover candies that must be smashed after distributing
    the given number of candies evenly between 3 friends.
    
    >>> to_smash(91)
    1
    """
    return total_candies % friends

# Check your answer
q3.check()
```
</div>
</details>
  
## 4. (Optional)
It may not be fun, but reading and understanding error messages will be an important part of your Python career.

Each code cell below contains some commented buggy code. For each cell...

1. Read the code and predict what you think will happen when it's run.  
2. Then uncomment the code and run it to see what happens. (Tip: In the kernel editor, you can highlight several lines and press ctrl+/ to toggle commenting.)
3. Fix the code (so that it accomplishes its intended purpose without throwing an exception)

In [1]:
```python
rount_to_two_places(9.9999)
```
<details>
<summary> 정답 </summary>
<div markdown="1">
오타가 있다. rount -> round

```python
round_to_two_places(9.9999)
```
</div>
</details>

In [2]:
```python
x = -10
y = 5
# Which of the two variables above has the smallest absolute value?
smallest_abs = min(abs(x, y))
```
<details>
<summary> 정답 </summary>
<div markdown="1">
abs의 인자가 두 개이다.
```python
x = -10
y = 5
# Which of the two variables above has the smallest absolute value?
smallest_abs = min(abs(x), abs(y))
```
</div>
</details>

In [3]:
```python
def f(x):
    y = abs(x)
return y

print(f(5))
```
<details>
<summary> 정답 </summary>
<div markdown="1">
return의 위치가 잘못되었다.

```python
def f(x):
    y = abs(x)
    return y

print(f(5))
```
</div>
</details>

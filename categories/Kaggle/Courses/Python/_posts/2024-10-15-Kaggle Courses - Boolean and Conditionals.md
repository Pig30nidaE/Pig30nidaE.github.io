---
layout: post
title: Kaggle Courses - Boolean and Conditionals
excerpt: "Kaggle - Learn - Courses - Python - Functions and Getting Help 정리"
tags: [Kaggle, Courses, Python]
date: 2024-10-15-16:45:39
use_math: true
---
# 이전 글
[Kaggle Courses - Functions and Getting Help](./Kaggle-Courses-Functions-and-Getting-Help)


# Exercise
## 1.
  
Many programming languages have sign available as a built-in function. Python doesn't, but we can define our own!

In the cell below, define a function called sign which takes a numerical argument and returns -1 if it's negative, 1 if it's positive, and 0 if it's 0.
```python
# Your code goes here. Define a function called 'sign'

# Check your answer
q1.check()
```
<details>
<summary> 정답 </summary>
<div markdown="1">

```python
def sign(num):
    if num > 0:
        return 1
    elif num < 0:
        return -1
    else:
        return 0
q1.check()
```
</div>
</details>

## 2.
We've decided to add "logging" to our to_smash function from the previous exercise.
```python
def to_smash(total_candies):
    """Return the number of leftover candies that must be smashed after distributing
    the given number of candies evenly between 3 friends.
    
    >>> to_smash(91)
    1
    """
    print("Splitting", total_candies, "candies")
    return total_candies % 3

to_smash(91)
```
What happens if we call it with total_candies = 1?
```python
to_smash(1)
```
That isn't great grammar!

Modify the definition in the cell below to correct the grammar of our print statement. (If there's only one candy, we should use the singular "candy" instead of the plural "candies")
```python
def to_smash(total_candies):
    """Return the number of leftover candies that must be smashed after distributing
    the given number of candies evenly between 3 friends.
    
    >>> to_smash(91)
    1
    """
    print("Splitting", total_candies, "candies")
    return total_candies % 3

to_smash(91)
to_smash(1)
```
To get credit for completing this problem, and to see the official answer, run the code cell below.
<details>
<summary> 정답 </summary>
<div markdown="1">

```python
def to_smash(total_candies):
    """Return the number of leftover candies that must be smashed after distributing
    the given number of candies evenly between 3 friends.
    
    >>> to_smash(91)
    1
    """
    if tatal_candies == 1:
        print("Splitting", 1, "candies")
        return 1
    else:
        print("Splitting", total_candies % 3, "candies")
    return total_candies % 3
q2.check()
```
</div>
</details>

## 3.
In the tutorial, we talked about deciding whether we're prepared for the weather. I said that I'm safe from today's weather if...

- I have an umbrella...
- or if the rain isn't too heavy and I have a hood...
- otherwise, I'm still fine unless it's raining and it's a workday

The function below uses our first attempt at turning this logic into a Python expression. I claimed that there was a bug in that code. Can you find it?

To prove that **prepared_for_weather** is buggy, come up with a set of inputs where either:

- the function returns False (but should have returned True), or
- the function returned True (but should have returned False).

To get credit for completing this question, your code should return a Correct result.
```python
def prepared_for_weather(have_umbrella, rain_level, have_hood, is_workday):
    # Don't change this code. Our goal is just to find the bug, not fix it!
    return have_umbrella or rain_level < 5 and have_hood or not rain_level > 0 and is_workday

# Change the values of these inputs so they represent a case where prepared_for_weather
# returns the wrong answer.
have_umbrella = True
rain_level = 0.0
have_hood = True
is_workday = True

# Check what the function returns given the current values of the variables above
actual = prepared_for_weather(have_umbrella, rain_level, have_hood, is_workday)
print(actual)

# Check your answer
q3.check()
```
<details>
<summary> 정답 </summary>
<div markdown="1">
로직을 수정하지 않으면서, 변수의 값을 변경해 로직의 허점을 찾아내면 된다.

```python
def prepared_for_weather(have_umbrella, rain_level, have_hood, is_workday):
    # Don't change this code. Our goal is just to find the bug, not fix it!
    return have_umbrella or rain_level < 5 and have_hood or not rain_level > 0 and is_workday

# Change the values of these inputs so they represent a case where prepared_for_weather
# returns the wrong answer.
have_umbrella = False
rain_level = 0.0
have_hood = False
is_workday = False

# Check what the function returns given the current values of the variables above
actual = prepared_for_weather(have_umbrella, rain_level, have_hood, is_workday)
print(actual)

# Check your answer
q3.check()
```
모두 값을 False로 바꾸면, 일하는 날이 아니라 괜찮은 데도 불구하고 False를 반환한다.
</div>
</details>

## 4.
The function is_negative below is implemented correctly - it returns True if the given number is negative and False otherwise.

However, it's more verbose than it needs to be. We can actually reduce the number of lines of code in this function by 75% while keeping the same behaviour.

See if you can come up with an equivalent body that uses just one line of code, and put it in the function concise_is_negative. (HINT: you don't even need Python's ternary syntax)
```python
def is_negative(number):
    if number < 0:
        return True
    else:
        return False

def concise_is_negative(number):
    pass # Your code goes here (try to keep it to one line!)

# Check your answer
q4.check()
```
<details>
<summary> 정답 </summary>
<div markdown="1">
그냥 $number \lt 0$ 자체의 식을 반환시키면 된다.

```python
def is_negative(number):
    if number < 0:
        return True
    else:
        return False

def concise_is_negative(number):
    return number < 0

# Check your answer
q4.check()
```
</div>
</details>

## 5a.
The boolean variables `ketchup`, `mustard` and `onion` represent whether a customer wants a particular topping on their hot dog. We want to implement a number of boolean functions that correspond to some yes-or-no questions about the customer's order. For example:
```python
def onionless(ketchup, mustard, onion):
    """Return whether the customer doesn't want onions.
    """
    return not onion
```
```python
def wants_all_toppings(ketchup, mustard, onion):
    """Return whether the customer wants "the works" (all 3 toppings)
    """
    pass

# Check your answer
q5.a.check()
```

<details>
<summary> 정답 </summary>
<div markdown="1">

```python
def wants_all_toppings(ketchup, mustard, onion):
    """Return whether the customer wants "the works" (all 3 toppings)
    """
    return ketchup and mustard and onion

# Check your answer
q5.a.check()
```
</div>
</details>

## 5b.
For the next function, fill in the body to match the English description in the docstring.
```python
def wants_plain_hotdog(ketchup, mustard, onion):
    """Return whether the customer wants a plain hot dog with no toppings.
    """
    pass

# Check your answer
q5.b.check()
```
<details>
<summary> 정답 </summary>
<div markdown="1">

```python
def wants_plain_hotdog(ketchup, mustard, onion):
    """Return whether the customer wants a plain hot dog with no toppings.
    """
    return not (ketchup or mustard or onion)

# Check your answer
q5.b.check()
```
</div>
</details>

## 5c.
  
You know what to do: for the next function, fill in the body to match the English description in the docstring

```python
def exactly_one_sauce(ketchup, mustard, onion):
    """Return whether the customer wants either ketchup or mustard, but not both.
    (You may be familiar with this operation under the name "exclusive or")
    """
    pass

# Check your answer
q5.c.check()
```
<details>
<summary> 정답 </summary>
<div markdown="1">

```python
def exactly_one_sauce(ketchup, mustard, onion):
    """Return whether the customer wants either ketchup or mustard, but not both.
    (You may be familiar with this operation under the name "exclusive or")
    """
    return ketchup ^ mustard

# Check your answer
q5.c.check()
```
</div>
</details>

## 6.
We’ve seen that calling bool() on an integer returns False if it’s equal to 0 and True otherwise. What happens if we call int() on a bool? Try it out in the notebook cell below.

Can you take advantage of this to write a succinct function that corresponds to the English sentence "does the customer want exactly one topping?"?

```python
def exactly_one_topping(ketchup, mustard, onion):
    """Return whether the customer wants exactly one of the three available toppings
    on their hot dog.
    """
    pass

# Check your answer
q6.check()
```

<details>
<summary> 정답 </summary>
<div markdown="1">

```python
def exactly_one_topping(ketchup, mustard, onion):
    """Return whether the customer wants exactly one of the three available toppings
    on their hot dog.
    """
    return ketchup + mustard + onion == 1

# Check your answer
q6.check()
```
</div>
</details>

## 7.
In this problem we'll be working with a simplified version of blackjack (aka twenty-one). In this version there is one player (who you'll control) and a dealer. Play proceeds as follows:

- The player is dealt two face-up cards. The dealer is dealt one face-up card.

- The player may ask to be dealt another card ('hit') as many times as they wish. If the sum of their cards exceeds 21, they lose the round immediately.
- The dealer then deals additional cards to himself until either:
  
    - the sum of the dealer's cards exceeds 21, in which case the player wins the round

    - the sum of the dealer's cards is greater than or equal to 17. If the player's total is greater than the dealer's, the player wins. Otherwise, the dealer wins (even in case of a tie).
When calculating the sum of cards, Jack, Queen, and King count for 10. Aces can count as 1 or 11 (when referring to a player's "total" above, we mean the largest total that can be made without exceeding 21. So e.g. A+8 = 19, A+8+8 = 17)

For this problem, you'll write a function representing the player's decision-making strategy in this game. We've provided a very unintelligent implementation below:

```python
ef should_hit(dealer_total, player_total, player_low_aces, player_high_aces):
    """Return True if the player should hit (request another card) given the current game
    state, or False if the player should stay.
    When calculating a hand's total value, we count aces as "high" (with value 11) if doing so
    doesn't bring the total above 21, otherwise we count them as low (with value 1). 
    For example, if the player's hand is {A, A, A, 7}, we will count it as 11 + 1 + 1 + 7,
    and therefore set player_total=20, player_low_aces=2, player_high_aces=1.
    """
    return False
```

이번 문제는 정답이란 것이 없으나, 내가 만든 로직으로 딜러와 블랙잭 게임을 해본다. 게임의 횟수를 지정해서 승리 비율을 측정할 수 있다.

```python
def should_hit(dealer_total, player_total, player_low_aces, player_high_aces):
    """Return True if the player should hit (request another card) given the current game
    state, or False if the player should stay.
    When calculating a hand's total value, we count aces as "high" (with value 11) if doing so
    doesn't bring the total above 21, otherwise we count them as low (with value 1). 
    For example, if the player's hand is {A, A, A, 7}, we will count it as 11 + 1 + 1 + 7,
    and therefore set player_total=20, player_low_aces=2, player_high_aces=1.
    """
    if player_total == 21:
        return False
    if 21 - player_total + player_low_aces + player_high_aces > 7:
        return True
    else:
        if player_total < dealer_total:
            return True
    return False

q7.simulate(n_games=50000)
```
대충 짧게 짜봤다. 다만, 딜러와 내가 들어온 카드의 종류를 모르고 카드의 합만 알아서 계산하기가 난감했다. 대충 승률이 41% ~ 42% 정도로 측정된다.
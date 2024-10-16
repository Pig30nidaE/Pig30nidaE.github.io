---
layout: post
title: Kaggle Courses - Lists
excerpt: "Kaggle - Learn - Courses - Python - Lists 정리"
tags: [Kaggle, Courses, Python]
date: 2024-10-16-17:47:03
---

# 이전 글
[Kaggle Courses - Boolean and Conditionals](./Kaggle-Courses-Boolean-and-Conditionals)

# Exercise
## 1.
Complete the function below according to its docstring
```python
def select_second(L):
    """Return the second element of the given list. If the list has no second
    element, return None.
    """
    pass

# Check your answer
q1.check()
```
<details>
<summary> 정답 </summary>
<div markdown="1">

```python
def select_second(L):
    """Return the second element of the given list. If the list has no second
    element, return None.
    """
    try:
        return L[1]
    except IndexError:
        return None

# Check your answer
q1.check()
```
</div>
</details>

## 2.
You are analyzing sports teams. Members of each team are stored in a list. The Coach is the first name in the list, the captain is the second name in the list, and other players are listed after that. These lists are stored in another list, which starts with the best team and proceeds through the list to the worst team last. Complete the function below to select the **captain** of the worst team.

```python
def losing_team_captain(teams):
    """Given a list of teams, where each team is a list of names, return the 2nd player (captain)
    from the last listed team
    """
    pass

# Check your answer
q2.check()
```

<details>
<summary> 정답 </summary>
<div markdown="1">

```python
def losing_team_captain(teams):
    """Given a list of teams, where each team is a list of names, return the 2nd player (captain)
    from the last listed team
    """
    return teams[-1][1]

# Check your answer
q2.check()
```
</div>
</details>

## 3.
The next iteration of Mario Kart will feature an extra-infuriating new item, the Purple Shell. When used, it warps the last place racer into first place and the first place racer into last place. Complete the function below to implement the Purple Shell's effect.
```python
def purple_shell(racers):
    """Given a list of racers, set the first place racer (at the front of the list) to last
    place and vice versa.
    
    >>> r = ["Mario", "Bowser", "Luigi"]
    >>> purple_shell(r)
    >>> r
    ["Luigi", "Bowser", "Mario"]
    """
    pass

# Check your answer
q3.check()
```

<details>
<summary> 정답 </summary>
<div markdown="1">

```python
def purple_shell(racers):
    """Given a list of racers, set the first place racer (at the front of the list) to last
    place and vice versa.
    
    >>> r = ["Mario", "Bowser", "Luigi"]
    >>> purple_shell(r)
    >>> r
    ["Luigi", "Bowser", "Mario"]
    """
    racers[0], racers[-1] = racers[-1], racers[0]

# Check your answer
q3.check()
```
</div>
</details>

## 4.
What are the lengths of the following lists? Fill in the variable lengths with your predictions. (Try to make a prediction for each list without just calling len() on it.)
```python
a = [1, 2, 3]
b = [1, [2, 3]]
c = []
d = [1, 2, 3][1:]

# Put your predictions in the list below. Lengths should contain 4 numbers, the
# first being the length of a, the second being the length of b and so on.
lengths = []

# Check your answer
q4.check()
```

<details>
<summary> 정답 </summary>
<div markdown="1">

```python
a = [1, 2, 3]
b = [1, [2, 3]]
c = []
d = [1, 2, 3][1:]

# Put your predictions in the list below. Lengths should contain 4 numbers, the
# first being the length of a, the second being the length of b and so on.
lengths = [3, 2, 0, 2]

# Check your answer
q4.check()
```
</div>
</details>

## 5.
We're using lists to record people who attended our party and what order they arrived in. For example, the following list represents a party with 7 guests, in which Adela showed up first and Ford was the last to arrive:
```python
party_attendees = ['Adela', 'Fleda', 'Owen', 'May', 'Mona', 'Gilbert', 'Ford']
```
A guest is considered 'fashionably late' if they arrived after at least half of the party's guests. However, they must not be the very last guest (that's taking it too far). In the above example, Mona and Gilbert are the only guests who were fashionably late.

Complete the function below which takes a list of party attendees as well as a person, and tells us whether that person is fashionably late.
```python
def fashionably_late(arrivals, name):
    """Given an ordered list of arrivals to the party and a name, return whether the guest with that
    name was fashionably late.
    """
    pass

# Check your answer
q5.check()
```

<details>
<summary> 정답 </summary>
<div markdown="1">

```python
def fashionably_late(arrivals, name):
    """Given an ordered list of arrivals to the party and a name, return whether the guest with that
    name was fashionably late.
    """
    return arrivals.index(name) in range((len(arrivals)+1) // 2, len(arrivals) - 1)

# Check your answer
q5.check()
```
</div>
</details>
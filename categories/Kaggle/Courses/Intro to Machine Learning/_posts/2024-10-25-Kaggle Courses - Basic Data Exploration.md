---
layout: post
title: Kaggle Courses - Basic Data Exploration
excerpt: "Kaggle - Learn - Courses - Intro to Machine Learning - Basic Data Exploration 정리"
tags: [Kaggle, Courses, Intro to Machine Learning]
date: 2024-10-25-16:31:26
---

# 이전 글
[Kaggle Courses - How Models Work](./Kaggle-Courses-How-Models-Work)

# Using Pandas to Get Familiar With Your Data
먼저 데이터와 친숙해져보자. Pandas 라이브러리를 사용할 것이다.
```python
import pandas as pd
```
pandas 라이브러리의 가장 중요한 부분은 DataFrame이다. 엑셀의 sheet, SQL database의 table과 같은 타입을 의미한다.  
  
이제 데이터를 살펴보자. 오스트레일리아 멜버른의 집값에 관한 데이터이다.
([data about home prices in Melbourne, Australia.](https://www.kaggle.com/dansbecker/melbourne-housing-snapshot))
```python
# save filepath to variable for easier access
melbourne_file_path = '../input/melbourne-housing-snapshot/melb_data.csv'
# read the data and store data in DataFrame titled melbourne_data
melbourne_data = pd.read_csv(melbourne_file_path) 
# print a summary of the data in Melbourne data
melbourne_data.describe()
```
결과는 직접 실행하여 살펴보자.

# 데이터 분석
먼저 count는 누락되지 않은 행의 수를 알려준다. 누락값은 다양한 이유가 있다. 예를 들어, 침실이 하나인 주택을 조사할 때 두 번째 침실의 크기가 수집되지 않았을 때 등이다.
  
  
두 번째 값인 **mean** 은 평균을 의미한다. **std**는 수치적으로 얼마나 분포되어 있는지 측정하는 표준 편차이다. 그 다음의 퍼센트에이지에 따라 각 수치값이 오름차순이다. **max**가 가장 큰 값이다.

# Exercises

## Step 1: Loading Data
Read the Iowa data file into a Pandas DataFrame called `home_data`.

```python
import pandas as pd

# Path of the file to read
iowa_file_path = '../input/home-data-for-ml-course/train.csv'

# Fill in the line below to read the file into a variable home_data
home_data = ____

# Call line below with no argument to check that you've loaded the data correctly
step_1.check()
```
<details>
<summary> 정답 </summary>
<div markdown="1">

```python
import pandas as pd

# Path of the file to read
iowa_file_path = '../input/home-data-for-ml-course/train.csv'

# Fill in the line below to read the file into a variable home_data
home_data = pd.read_csv(iowa_file_path)

# Call line below with no argument to check that you've loaded the data correctly
step_1.check()
```
</div>
</details>

## Step 2: Review The Data
Use the command you learned to view summary statistics of the data. Then fill in variables to answer the following questions
```python
# Print summary statistics in next line
____
```
```python
# What is the average lot size (rounded to nearest integer)?
avg_lot_size = ____

# As of today, how old is the newest home (current year - the date in which it was built)
newest_home_age = ____

# Checks your answers
step_2.check()
```

<details>
<summary> 정답 </summary>
<div markdown="1">

```python
# Print summary statistics in next line
home_data.describe()
```
```python
# What is the average lot size (rounded to nearest integer)?
avg_lot_size = round(home_data['LotArea'].mean())

# As of today, how old is the newest home (current year - the date in which it was built)
newest_home_age = 2024 - home_data['YearBuilt'].max()

# Checks your answers
step_2.check()
```
</div>
</details>
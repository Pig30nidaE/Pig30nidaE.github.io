---
layout: post
title: Kaggle Courses - Machine Learning Competitions
excerpt: "Kaggle - Learn - Courses - Intro to Machine Learning - Machine Learning Competitions 정리"
tags: [Kaggle, Courses, Intro to Machine Learning]
date: 2025-01-04-19:02:28
---

# 이전 글
[Kaggle Courses - Random Forests](./Kaggle-Courses-Random-Forests)

# Exercises

# Train a model for the competition

The code cell above trains a Random Forest model on **`train_X`** and **`train_y`**.  

Use the code cell below to build a Random Forest model and train it on all of **`X`** and **`y`**.

```python
# To improve accuracy, create a new Random Forest model which you will train on all training data
rf_model_on_full_data = ____

# fit rf_model_on_full_data on all data from the training data
____
```
Now, read the file of "test" data, and apply your model to make predictions.
```python
# path to file you will use for predictions
test_data_path = '../input/test.csv'

# read test data file using pandas
test_data = ____

# create test_X which comes from test_data but includes only the columns you used for prediction.
# The list of columns is stored in a variable called features
test_X = ____

# make predictions which we will submit. 
test_preds = ____
```
Before submitting, run a check to make sure your test_preds have the right format.
<details>
<summary> 정답 </summary>
<div markdown="1">

```python
# To improve accuracy, create a new Random Forest model which you will train on all training data
rf_model_on_full_data = RandomForestRegressor(random_state=1)

# fit rf_model_on_full_data on all data from the training data
rf_model_on_full_data.fit(train_X, train_y)
```
```python
# path to file you will use for predictions
test_data_path = '../input/test.csv'

# read test data file using pandas
test_data = pd.read_csv(test_data_path)

# create test_X which comes from test_data but includes only the columns you used for prediction.
# The list of columns is stored in a variable called features
test_X = test_data[features]

# make predictions which we will submit. 
test_preds = rf_model_on_full_data.predict(test_X)
```
</div>
</details>

Exercise를 그대로 따라하면 21488정도의 score가 나온다. 더 낮은 score의 코드를 보면 여러 전처리를 거친 것을 알 수 있다.
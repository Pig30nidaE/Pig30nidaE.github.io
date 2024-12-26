---
layout: post
title: Kaggle Courses - Random Forests
excerpt: "Kaggle - Learn - Courses - Intro to Machine Learning - Random Forests 정리"
tags: [Kaggle, Courses, Intro to Machine Learning]
date: 2024-12-26-16:01:59
---

# 이전 글
[Kaggle Courses - Underfitting and Overfitting](./Kaggle-Courses-Underfitting-and-Overfitting)

# Introduction

이전 글에서 말했듯이, 의사 결정 트리의 깊이가 너무 깊거나 리프가 너무 많으면 과대적합이다. 또한 깊이가 너무 얕거나 리프가 너무 적으면 과소적합이다. 모델링은 이러한 과대적합과 과소적합 사이의 긴장을 가지고 있다.  
  
랜덤포레스트(Random Forests)는 각 구성 요소 트리의 예측을 평균화하여 예측한다. 일반적으로 단일 의사 결정 트리보다 나은 예측 정확도를 제공한다.

# Example
```python
import pandas as pd
    
# Load data
melbourne_file_path = '../input/melbourne-housing-snapshot/melb_data.csv'
melbourne_data = pd.read_csv(melbourne_file_path) 
# Filter rows with missing values
melbourne_data = melbourne_data.dropna(axis=0)
# Choose target and features
y = melbourne_data.Price
melbourne_features = ['Rooms', 'Bathroom', 'Landsize', 'BuildingArea', 
                        'YearBuilt', 'Lattitude', 'Longtitude']
X = melbourne_data[melbourne_features]

from sklearn.model_selection import train_test_split

# split data into training and validation data, for both features and target
# The split is based on a random number generator. Supplying a numeric value to
# the random_state argument guarantees we get the same split every time we
# run this script.
train_X, val_X, train_y, val_y = train_test_split(X, y,random_state = 0)
```
사이킷런에서 의사 결정 트리를 구축한 것과 유사하게 랜덤 포레스트 모델을 구축할 것이다. 이번에는 DecisionTreeRegressor 대신 RandomForestRegressor 클래스를 사용한다.

```python
from sklearn.ensemble import RandomForestRegressor
from sklearn.metrics import mean_absolute_error

forest_model = RandomForestRegressor(random_state=1)
forest_model.fit(train_X, train_y)
melb_preds = forest_model.predict(val_X)
print(mean_absolute_error(val_y, melb_preds))
```
```plaintext
191669.7536453626
```

# Conclusion

추가 개선의 여지가 있지만, 의사 결정 트리의 최대 오류인 25만 개보다 크게 개선된 것을 알 수 있다.

# Exercises
## Step 1: Use a Random Forest

```python
from sklearn.ensemble import RandomForestRegressor

# Define the model. Set random_state to 1
rf_model = ____

# fit your model
____

# Calculate the mean absolute error of your Random Forest model on the validation data
rf_val_mae = ____

print("Validation MAE for Random Forest Model: {}".format(rf_val_mae))

# Check your answer
step_1.check()
```

<details>
<summary> 정답 </summary>
<div markdown="1">

```python
from sklearn.ensemble import RandomForestRegressor

# Define the model. Set random_state to 1
rf_model = RandomForestRegressor(random_state=1)

# fit your model
rf_model.fit(train_X, train_y)

# Calculate the mean absolute error of your Random Forest model on the validation data
rf_val_mae = mean_absolute_error(val_y, rf_model.predict(val_X))

print("Validation MAE for Random Forest Model: {}".format(rf_val_mae))

# Check your answer
step_1.check()
```
</div>
</details>
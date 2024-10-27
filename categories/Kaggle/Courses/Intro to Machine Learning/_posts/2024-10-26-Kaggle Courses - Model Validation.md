---
layout: post
title: Kaggle Courses - Model Validation
excerpt: "Kaggle - Learn - Courses - Intro to Machine Learning - Model Validation 정리"
tags: [Kaggle, Courses, Intro to Machine Learning]
date: 2024-10-26-17:10:37
---

# 이전 글
[Kaggle Courses - Your First Machine Learning Model](./Kaggle-Courses-Your-First-Machine-Learning-Model)

# What is Model Validation
대부분의 애플리케이션에서 모델 품질에 관련된 척도는 예측의 정확도이다.
예측값과 실제값을 비교한다고 했을 때, 단순히 모든 예측값을 실제값과 비교해보는 것은
의미가 없다. 좋은 예측값과 나쁜 예측값이 섞여 있기 때문이다. 따라서 이를 하나의 지표로 요약해야 한다.  
  
먼저 **Mean Absolute Error**, 즉 **평균 절대 오차(MAE)**부터 살펴보자.  
  
각각의 예측 에러는 다음과 같다.
```plaintext
error=actual−predicted
```
예를 들어, 집의 가격이 $150,000이고 가격이 $100,000일 것이라고 예측한 경우 오차는 $50,000이다.

MAE 메트릭을 사용하면, 각 오차에 절대값을 취한 뒤, 절대 오차의 평균을 취한다. 이 것이 모델 품질의 척도이다.
일반적으로 다음과 같이 말할 수 있다.
```plaintext
평균적으로 우리의 예측은 약 X 정도 빗나갔습니다.
```
다음을 살펴보자.
```python
# Data Loading Code Hidden Here
import pandas as pd

# Load data
melbourne_file_path = '../input/melbourne-housing-snapshot/melb_data.csv'
melbourne_data = pd.read_csv(melbourne_file_path) 
# Filter rows with missing price values
filtered_melbourne_data = melbourne_data.dropna(axis=0)
# Choose target and features
y = filtered_melbourne_data.Price
melbourne_features = ['Rooms', 'Bathroom', 'Landsize', 'BuildingArea', 
                        'YearBuilt', 'Lattitude', 'Longtitude']
X = filtered_melbourne_data[melbourne_features]

from sklearn.tree import DecisionTreeRegressor
# Define model
melbourne_model = DecisionTreeRegressor()
# Fit model
melbourne_model.fit(X, y)
```
```python
from sklearn.metrics import mean_absolute_error

predicted_home_prices = melbourne_model.predict(X)
mean_absolute_error(y, predicted_home_prices)
```
`Out[2]: 434.71594577146544`

# The Problem with "In-Sample" Scores

방금 계산한 척도를 "In-Sample" Scores라고 한다. 우리는 모델을 구축하고 평가하기 
위해 단일 "표본" 주택을 사용했는데, 이 것이 나쁜 이유는 다음과 같다.  
  
예를 들어, 실제 부동산 시장에서 문 색깔은 주택 가격과 상관이 없다고 해보자. 
그러나 모델을 구축할 때 사용한 데이터 샘플에서 녹색 문이 있는 주택의 값이 비싸다고 하면, 
녹색 문이 있는 주택의 가격은 항상 높게 예측될 것이다.  
  
모델의 실용적 가치는 새로운 데이터에 대한 예측을 하는데서 비롯된다. 따라서, 모델 구축 시 
사용되지 않는 데이터로 성능을 측정해야한다. 즉, 모델 구축 시 일부 데이터는 제외한 다음, 
이를 사용하여 모델의 정확도를 검증해야한다. 이를 **validation data (검증 데이터)**라고 한다.

# Coding it

Scikit 라이브러리에는 데이터를 두 덩어리로 나누는 `train_test_split` 이라는 함수가 있다. 또한, 
`mean_absolute_error` 이라는 함수를 사용하여 절대 오차를 계산해낼 것이다.

```python
from sklearn.model_selection import train_test_split

# split data into training and validation data, for both features and target
# The split is based on a random number generator. Supplying a numeric value to
# the random_state argument guarantees we get the same split every time we
# run this script.
train_X, val_X, train_y, val_y = train_test_split(X, y, random_state = 0)
# Define model
melbourne_model = DecisionTreeRegressor()
# Fit model
melbourne_model.fit(train_X, train_y)

# get predicted prices on validation data
val_predictions = melbourne_model.predict(val_X)
print(mean_absolute_error(val_y, val_predictions))
```
`out: 265806.91478373145`

In-sample 데이터로 검증했을 때는 오차가 약 500달러였다. 비교하여 오차가 굉장히 크게 나는 것을 알 수 있다.

# Exercises

## Step 1: Split Your Data
Use the `train_test_split` function to split up your data.

Give it the argument `random_state=1` so the `check` functions know what to expect when verifying your code.

Recall, your features are loaded in the DataFrame **X** and your target is loaded in **y**.

```python
# Import the train_test_split function and uncomment
# from _ import _

# fill in and uncomment
# train_X, val_X, train_y, val_y = ____

# Check your answer
step_1.check()
```

<details>
<summary> 정답 </summary>
<div markdown="1">

```python
# Import the train_test_split function and uncomment
from sklearn.model_selection import train_test_split

# fill in and uncomment
train_X, val_X, train_y, val_y = train_test_split(X, y, random_state=1)

# Check your answer
step_1.check()
```
</div>
</details>

## Step 2: Specify and Fit the Model

Create a `DecisionTreeRegressor` model and fit it to the relevant data.
Set `random_state` to 1 again when creating the model.

```python
# You imported DecisionTreeRegressor in your last exercise
# and that code has been copied to the setup code above. So, no need to
# import it again

# Specify the model
iowa_model = ____

# Fit iowa_model with the training data.
____

# Check your answer
step_2.check()
```

<details>
<summary> 정답 </summary>
<div markdown="1">

```python
# You imported DecisionTreeRegressor in your last exercise
# and that code has been copied to the setup code above. So, no need to


# Specify the model
iowa_model = DecisionTreeRegressor(random_state=1)

# Fit iowa_model with the training data.
iowa_model.fit(train_X, train_y)

# Check your answer
step_2.check()
```
</div>
</details>

## Step 3: Make Predictions with Validation data

```python
# Predict with all validation observations
val_predictions = ____

# Check your answer
step_3.check()
```

<details>
<summary> 정답 </summary>
<div markdown="1">

```python
# Predict with all validation observations
val_predictions = iowa_model.predict(val_X)

# Check your answer
step_3.check()
```
</div>
</details>

## Step 4: Calculate the Mean Absolute Error in Validation Data

```python
from sklearn.metrics import mean_absolute_error
val_mae = ____

# uncomment following line to see the validation_mae
#print(val_mae)

# Check your answer
step_4.check()
```

<details>
<summary> 정답 </summary>
<div markdown="1">

```python
from sklearn.metrics import mean_absolute_error
val_mae = mean_absolute_error(val_y, val_predictions)

# uncomment following line to see the validation_mae
#print(val_mae)

# Check your answer
step_4.check()
```
</div>
</details>
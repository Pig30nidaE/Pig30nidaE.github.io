---
layout: post
title: Kaggle Courses - How Models Work
excerpt: "Kaggle - Learn - Courses - Intro to Machine Learning - How Models Work 정리"
tags: [Kaggle, Courses, Intro to Machine Learning]
date: 2024-10-23-18:25:09
---

# 시작하기 전에...
Kaggle Courses - Python을 끝내고 Intro to Machine Learning으로 들어왔다. 이전과 다르게, Exercise위주로 가는 것이 아닌 Tutorial도 정리를 해보려고 한다.

# 의사 결정 트리 (Decision Tree)

의사 결정 트리는 이해하기 쉬우며, 데이터 사이언스 분야에서 최고의 모델을 위한 기본 구성이다.

예를 들어, 어떠한 부동산의 결정 트리가 있다고 가정해보자.
<div style="background-color: white; display: inline-block; padding: 10px;">
  <img src="/assets/Kaggle/Courses/SampleDecisionTree.png" alt="sample decision tree" />
</div>
데이터를 사용하여 집을 두 그룹으로 나눈 후 각 그룹의 예측 가격을 정한다. 데이터에서 패턴을 캡처하는 이 단계를 모델을 **fitting** 혹은 **training**한다고 말한다. 또한 모델을 **fit**하는데 필요한 데이터를 **training data**라고 한다.

# 의사 결정 트리 개선 (Improving the Decision Tree)
다음 두 의사 결정 트리에서 어떤 것이 부동산 가격에 대한 training data로서 적합할 지 생각해보자.
<div style="background-color: white; display: inline-block; padding: 10px;">
  <img src="/assets/Kaggle/Courses/MoreSampleDecisionTree.png" alt="more sample decision tree" />
</div>
아마도 침실이 더 많은 것이 가격이 높은 왼쪽 의사 결정 트리가 더 납득이 갈 것이다. 위 의사 결정 트리에서의 가장 큰 단점은 부동산 가격에 영향을 줄 수 있는 더 많은 요인들(침실, 크기, 위치 등)을 고려하지 않았단 것이다.  
  
더 많은 분기가 있는 트리를 사용하여 더 많은 요소를 캡처할 수 있다. 이러한 요소를 **deeper** trees라고 한다. 각 집의 사이즈를 고려한 의사 결정 트리는 다음과 같다.
<div style="background-color: white; display: inline-block; padding: 10px;">
  <img src="/assets/Kaggle/Courses/deeperDecisionTrees.png" alt="deeper decision trees" />
</div>

의사 결정 트리를 추적하여 부동산의 가격을 예측할 수 있다. 예측이 되는 트리의 맨 밑 지점을 **leaf** 라고 한다.
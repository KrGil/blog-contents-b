# 인공신경망

## 인공신경망의 시작

- 뉴런 > 뇌 > 지능 == 퍼셉트론 > 인공신경망 > 인공지능

### 퍼셉트론
> 목적: 가장 이상적인 직선을 찾는것
> y = ax + b
모든 신호가 뇌로 올라가지 않음.(역치가 존재)
가중치를 이용해서 역치를 구현, 활성함수를 사용하여 뉴런에게 전달

- 최초는 step function을 사용
- 
![image-20230325141404553](/Users/eisen/Documents/Github/blog-contents-b/computer-science/artificial-intelligence/introduction-to-deep-learning/week4.assets/image-20230325141404553.png)

#### 첫번째 한계

![image-20230325141517371](/Users/eisen/Documents/Github/blog-contents-b/computer-science/artificial-intelligence/introduction-to-deep-learning/week4.assets/image-20230325141517371.png)



## XOR 해결

### 다층 신경망

2차원에서 벗어나 3차원, 4차원으로 생각하면 가능함.

여러개의 퍼셉트론을 운영: hidden layer(은닉층)을 운영. 

출력층 > 은닉층 > 입력층 구현.

![image-20230325142243696](/Users/eisen/Documents/Github/blog-contents-b/computer-science/artificial-intelligence/introduction-to-deep-learning/week4.assets/image-20230325142243696.png)



### 역전파 알고리즘(backpropagation)

데이터가 전파되는 방향과 반대 방향으로 오차를 전파하면서 가중치를 업데이트.

미분으로 해결.

chain rule.



#### 두번째 한계

기울기 소실(vanishing gradient) 문제

- 기울기가 작아져 0에 수렴하는 경우 학습이 되지 않음.

원인: 활성함수(sigmoid)로 인한 문제.

![image-20230325142921355](/Users/eisen/Documents/Github/blog-contents-b/computer-science/artificial-intelligence/introduction-to-deep-learning/week4.assets/image-20230325142921355.png)



chane rule:

![image-20230325143018149](/Users/eisen/Documents/Github/blog-contents-b/computer-science/artificial-intelligence/introduction-to-deep-learning/week4.assets/image-20230325143018149.png)

layer가 깊어질수록 활성함수(sigmoid)가 많아지는데 미분을 많이해야함. 0에 수렴함.



## 해결

### ReLU 활성함수

sigmoid가 0에 가까워지기때문에 문제라면 결과가 0보다 큰 것으로 교체

![image-20230325143615215](/Users/eisen/Documents/Github/blog-contents-b/computer-science/artificial-intelligence/introduction-to-deep-learning/week4.assets/image-20230325143615215.png)

현재까지 활성함수로 가장 많이 사용되고 있음.(보편적으로 가장 잘 적용됨)

문제: 값이 0보다 작거나 같으면 전파가 되지 않음.

### 모델들을 제시

![image-20230325144009271](/Users/eisen/Documents/Github/blog-contents-b/computer-science/artificial-intelligence/introduction-to-deep-learning/week4.assets/image-20230325144009271.png)



### Fully Connected layer

오늘날에는 잘 사용되지 않음

이유: 가중치가 너무 많이 필요함. 또한 matrix 계산이기에 학습 시 nxn이 필요함.

인풋 값들끼리의 관계까지 학습하려고 함.

은닉층(hidden layer)로는 사용되지 않고 출력 층으로 사용이 많이 됨.



# MNIST

spots한 데이터: 한개만 1 나머지 값들인 0인 값.



## softmax

출력용 활성 함수 - 다중 클래스 분류 모델을 만들 때 사용.

분류해야하는 클래스가 여러개일 때 적합하지 않음.

이럴 경우 그냥 sigmoid 활성 함수를 사용함.

nn.CrossEntropyLoss 에서 softmax가 포함되어 있다.

하지만 모든 CrossEntropyLoss에 softmax가 포함되어있지는 않다.




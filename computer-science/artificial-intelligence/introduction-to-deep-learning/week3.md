# 선형회귀와 로지스틱 회귀



## 선형회귀

종속변수와 독립변수 사이의 선형적인 관계성을 찾는 것

성적에 영향을 주는 요소[‘정보’]를 𝑋(독립 변수)라고 하고, 이 𝑋값에 따라 변하는 ‘성적’을 𝑦(종속 변수).

### 단순 선형회귀

![image-20230318141138346](/Users/eisen/Documents/Github/blog-contents-b/computer-science/artificial-intelligence/introduction-to-deep-learning/week3.assets/image-20230318141138346.png)

- 독립변수와 종속변수가 한개씩 있을 경우
- y = ax + b (x는 독립변수, y는 종속변수)

- 최소 제곱법으로 값을 구할 수 있습니다.

![image-20230318140957341](/Users/eisen/Documents/Github/blog-contents-b/computer-science/artificial-intelligence/introduction-to-deep-learning/week3.assets/image-20230318140957341.png)

![image-20230318141150402](/Users/eisen/Documents/Github/blog-contents-b/computer-science/artificial-intelligence/introduction-to-deep-learning/week3.assets/image-20230318141150402.png)



### 다중 선형회귀

- 2개 이상의 독립변수와 종속 변수 상이의 선형 회귀

![image-20230318141238256](/Users/eisen/Documents/Github/blog-contents-b/computer-science/artificial-intelligence/introduction-to-deep-learning/week3.assets/image-20230318141238256.png)





## 학습을 통한 선형회귀

### 경사하강법

평균제곱오차(Mean Square Error)

- 음수로 인해
- 불연속적인 값의 경우 미분이 되지 않는다.
- 평균을 쓰는 이유는 오차의 크기가 크게되면 학습이 충분해서 나온 수치가 큰것인지 등을 판단하기 어렵다.





## 로지스틱 회귀(Logistic Regression)

불연속적인 값(이산적인 값)을 구할 때 사용. - binary.

### Binary Classification



연속적인 분류를 하기 위해서

- OneHot encoding:  0 1 2 3

```
0 1 2 3
0 0 1 0
```



### sigmoid function(시그모이드 함수)

- 대표적인 활성 함수(activation function)

### 손실함수

- y 가 0일 때 y~가 1일 때 가장 큰 손실함수
- y가 1일 때 y~가 0일 때 가장 큰 손실함수를 가지게 수정을 해줘야합니다.

==> cross entropy loss 함수를 사용.

#### Cross 









### words

y: target

y~ or y^: predict

쓰레드 홀드

Onehot encoding: https://wikidocs.net/22647




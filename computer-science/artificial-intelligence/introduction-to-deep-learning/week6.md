# week6 

## 과적합-2

### ensemble learning

- 여러 모델을 생성, 그 예측을 결합함으로써 보다 정확한 예측을 도축하는 기법.
- 대부분의 추천 시스템에 사용되고 있음.

#### voting

> 여러 개의 분류기가 투표를 통해 최종 예측 결과를 결정

1. Hard Voting

   다수의 모델이 예측한 결과

2. Soft Voting

   확률의 평균을 구하고 가장 확률이 높은 모델 선택

![image-20230408140821816](/Users/eisen/Documents/Github/blog-contents-b/computer-science/artificial-intelligence/introduction-to-deep-learning/week6.assets/image-20230408140821816.png)



#### bagging

> 데이터 샘플링을 통해 모델을 학습.

![image-20230408141155756](/Users/eisen/Documents/Github/blog-contents-b/computer-science/artificial-intelligence/introduction-to-deep-learning/week6.assets/image-20230408141155756.png)

#### boosting

> 여러 개의 모델을 순차적으로 학습을 수행

`voting`과 `bagging`과 달리 직렬적으로 학습을 진행하기 때문에 시간이 오래 걸리는 단점이 존재.



### Dropout

> 노드의 연결을 일정 확률로 끊어 학습에 참여하지 않도록 하는 방법.
>
> 일반적으로 모델 capacity 대비 학습 데이터 양이 부족할 경우 과적합 발생.
>
> - 모델의 capacity를 낮춰 overfitting(과적합)을 방지

- 앙상블 효과를 기대할 수 있음

  매 배치마다 비활성화 되는 노드가 달라지기 때문에 서로 다른 구조의 모델이 학습되는 효과를 가질 수 있음.

![image-20230408141717947](/Users/eisen/Documents/Github/blog-contents-b/computer-science/artificial-intelligence/introduction-to-deep-learning/week6.assets/image-20230408141717947.png)

- 학습단계에서만 적용되어야 함. 





### Regularization(규제)

> 모델의 weight(trainable parameter)에 제약을 주어 과적합을 방지하는 방법
>
> - weight가 큰 값을 갖지 못하도록 함.

- 오캄의 면도날(Ockham's Razor)

  현상을 설명할 수 있는 다양한 가설 중 가장 간단한 것이 가장 옳은 것이다.

- 일반적으로 모델은 크고 데이터가 많을 수록 성능이 좋다.

#### 종류

1. `L1`: weight의 절대값의 평균을 사용

   weight의 값이 작아질수록 0에 수렴.

   

2. `L2`

   weight의 제곱평균을 사용

   보통 L2를 자주 사용한다.

![image-20230408142906641](/Users/eisen/Documents/Github/blog-contents-b/computer-science/artificial-intelligence/introduction-to-deep-learning/week6.assets/image-20230408142906641.png)











### References

https://swgs.kookmin.ac.kr/swgs/major/ai-application.do
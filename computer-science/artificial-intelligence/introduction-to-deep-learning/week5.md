# 과적합

## 일반화 성능(generalization)

- 목적: 이전에 본 적 없는 새로운 데이터에 대한 모델의 수행 능력

  즉, 학습 데이터 외 데이터에 대한 성능

- 일반화 성능을 확인하기 위해 학습에 사용하지 않은 데이터로 모델을 평가

  평가 데이터(test set): 학습 과정중에 모델이 절대 들여다 보면 안됨.

- 일반화 성능이 좋은 모델은 이상치 데이터(변형된 데이터)에 일관된 결과를 보임.

  강건(robust)한 모델

### Capacity

- 일반적으로 모델의 크기를 뜻함: 학습 파리미터(weight)의 수
- low capacity: 과소적합(underfitting)
- high capacity: 과적합



### 과소적합

데이터의 내재된 구조 및 특성을 학습하지 못한 것. -> 모델 학습이 잘 안되었다고 말함.

원인: low capacity

해결: 모델의 크기를 늘이거나 학습량(epoch)를 늘림.



### 과적합

학습 데이터에 대해서 fitting이 되버림.

원인: high capacity - 모델이 너무 크다.

eg. 학생들이 시험 문제에 대해 안배웠다고 말했을 때 학생들은 시험 공부를 overffiting 했다고 할 수 있다.



### Occam's razor

현상을 설명할 수 있는 다양한 가설 중 가장 간단한 것이 가장 옳은것 => 모델이 큰게 정답이 아니다.



### 검증 데이터 (validation set)

학습 중간 모델의 성능을 평가하기 위한 데이터

평가 데이터(test set) 와 달리 중간중간 검증을 위한 데이터

검증 데이터를 사용하여 일반화 성능이 떨어지는 지점을 찾을 수 있음

• 일반화 성능이 떨어지는 지점에 모델 학습을 **조기 종료(early stopping)**하여 일반화 성능 을 높일 수 있음

![image-20230401142437354](/Users/eisen/Documents/Github/blog-contents-b/computer-science/artificial-intelligence/introduction-to-deep-learning/week5.assets/image-20230401142437354.png)

검증 데이터 vs 평가 데이터

• 공통점
 – 모델의 학습에 사용되지 않음
 – 모델의 성능을 확인하는 용도로만 사용됨

• 차이점
 – 검증데이터는학습과정중모델을평가하기위해사용

» 과적합 방지를 위해 사용
 – 평가 데이터는 학습이 완료된 모델의 성능을 평가하기 위해 사용

» 일반화 성능을 평가하기 위해 사용

validation set이 큰 경우 train set이 적어져서 모델의 성능에 영향을 줌.

![image-20230401142823750](/Users/eisen/Documents/Github/blog-contents-b/computer-science/artificial-intelligence/introduction-to-deep-learning/week5.assets/image-20230401142823750.png)



![image-20230401143034004](/Users/eisen/Documents/Github/blog-contents-b/computer-science/artificial-intelligence/introduction-to-deep-learning/week5.assets/image-20230401143034004.png)

위와 같은방법으로 과적합을 방지하기 위해 노력하지만 결국 한계는 존재

그래서 학습 데이터를 뻥튀기 한다.



### data augmentation(데이터 증강)

이미지에서 많이 사용됨.(이미지는 변경이 쉬우니까)

- geometric based transformation

  이미지의 좌표를 이동. 

- color based transormation

  RGB를 조정하여 색에 변화

- mixing images: 준지도학습에서 많이 사용되는 방법

- random erasing: 자연어쪽에서도 많이 사용함

  고양이 꼬리 삭제 후 고양이인지 맞추는지



## Data augmentation

- scikit learn

학습량이 많아야함. 



### Words

이상치 데이터: 데이터 분류에 의한 선 주변에 모여있는 데이터

과소적합:

과적합: 학습한 데이터에 최적화 되어있음.



![image-20230405183930768](/Users/eisen/Documents/Github/blog-contents-b/computer-science/artificial-intelligence/introduction-to-deep-learning/week5.assets/image-20230405183930768.png)

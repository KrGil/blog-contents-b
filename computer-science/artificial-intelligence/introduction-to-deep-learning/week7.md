# CNN(Convolutional Neural Network)

> 시각 피질 신겨의 동작 방식을 모방해 만든 신경망
>
> - 허블(Huble)-비셀(Wiesel): 물체의 형태의 방향에 따라 활성화 되는 신경 세포가 다르다는 것을 발견
>   - 모든 세포를 사용할 필요가 없는 것을 적용
> - 합성곱 신경망이라고도 함.
> - 이미지 처리에 탁월.



weight 구하는 방법

Kernel 크기 (3) x 3 x 채널수(흑백) x 커널개수 =. 2

![image-20230415141852705](/Users/eisen/Documents/Github/blog-contents-b/computer-science/artificial-intelligence/introduction-to-deep-learning/week7.assets/image-20230415141852705.png)



## padding

1. 가장자리를 학습시키기 위해
2. 학습할수록 가로 세로(feature)가 줄어듦을 방지

맵 크기 계산 방법 I - K + 2P / S + 1: 기말고사 계산용

![image-20230415143412624](/Users/eisen/Documents/Github/blog-contents-b/computer-science/artificial-intelligence/introduction-to-deep-learning/week7.assets/image-20230415143412624.png)



## pooling

특성(feature)의 크기를 줄이고 특정 특성을 강조하기 위해 사용.

단점: 정보의 손실이 많아서 요즘에는 자주 사용되진 않는다.



### 종류

`Max / Average / Min pooling`

커널 안의 최대 / 평균 / 최소 값을 계산.

![image-20230415145105591](/Users/eisen/Documents/Github/blog-contents-b/computer-science/artificial-intelligence/introduction-to-deep-learning/week7.assets/image-20230415145105591.png)



`CNN - Activation - Pooling`의 반복 구조

분류(classification)은 

CNN - Activation - Pooling(Average)를 사용.





![image-20230415151217630](/Users/eisen/Documents/Github/blog-contents-b/computer-science/artificial-intelligence/introduction-to-deep-learning/week7.assets/image-20230415151217630.png)




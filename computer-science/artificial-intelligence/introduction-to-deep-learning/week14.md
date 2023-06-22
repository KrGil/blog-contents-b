# week14_gan



## VAE

- MNIST의 데이터로는 만족스러움

- 데이터 분포가 정규분포를 따른다고 가정했음
- 아래의 경우 학습이 잘 이루어지지 않을 가능성이 높음(분포가 정규분포가 아닐 경우)
- ![image-20230603141301333](/Users/eisen/Documents/Github/blog-contents-b/computer-science/artificial-intelligence/introduction-to-deep-learning/week14.assets/image-20230603141301333.png)



## GAN

> 생성자와 판별자를 동시에 학습하고 서로를 이기기 위해 학습

### 판별자(경찰)

입력된 데이터가 실제 데이터인지

목표: 생성자가 만들어낸 가짜 데이터를 잘 분류하는것

### 생성자(위조지폐범)

가짜 데이터를 생성

목표: 판별자를 속임



### minimax game

![image-20230603143030797](/Users/eisen/Documents/Github/blog-contents-b/computer-science/artificial-intelligence/introduction-to-deep-learning/week14.assets/image-20230603143030797.png)

*log(1)=0, log(0) = -무한대*



#### 판별자(max: discriminator)

목표: 전체 값이 0에 가깝게 가깝게 결과를 내어야 한다.(최대값: 0)

실제 데이터: 1에 가까운 값을 가지게 하는게 좋다.

가상 데이터(판별자): 0에 가까운 값을 내뱉게 만들어야 한다.



#### 생성자(min: generator)

가상 데이터(판별자): 1에 가까운 값을 가지게 만드는게 좋다.



#### 이상적인 학습 형태

50:50으로 유불 처리를 일으켜 서로 학습할 수 있게 만듬.



## conditional GAN

- vanilla GAN도 vanilla VAE 처럼 생성할 데이터를 한정 불가.

- 따라서 생성할 정보(y)를 함께 입력.

  conditional vae와 동일(encoder와 decoders 둘 모두에게 생성할 데이터 정보(y)를 넘겨줌)

![image-20230603151945466](/Users/eisen/Documents/Github/blog-contents-b/computer-science/artificial-intelligence/introduction-to-deep-learning/week14.assets/image-20230603151945466.png)



## cycle GAN

> 생성자 2개 판별자 1개로 총 3개의 모델이 들어감.

G(X): 원본이미지를 특정한 이미지로

F(Y): 변환된 이미지를 원본 이미지로



아래 이미지처럼 원본 이미지와(G(x)) 변환 이미지(F(G(x)))를 비교하여 loss를 줄이는 구조를 갖게 한다.

이렇게 함으로써 모드 붕괴를 방지함.

![image-20230603153218956](/Users/eisen/Documents/Github/blog-contents-b/computer-science/artificial-intelligence/introduction-to-deep-learning/week14.assets/image-20230603153218956.png)



- ### Advertsarial loss

  GAN의 손실 함수

  ![image-20230603153558798](/Users/eisen/Documents/Github/blog-contents-b/computer-science/artificial-intelligence/introduction-to-deep-learning/week14.assets/image-20230603153558798.png)

- ### Cycle consistency loss

  ![image-20230603153805935](/Users/eisen/Documents/Github/blog-contents-b/computer-science/artificial-intelligence/introduction-to-deep-learning/week14.assets/image-20230603153805935.png)





## 참고

합성곱(convolution) - 지역적으로만 보기 때문에 channel이 중요함

FC(Fully Connected layer) - 하나당 모든 것들을 보기 때문에 channel이 굳이 중요하지 않음.



추가 정보(y)를 추가해 줄때 `channel` 단위로  `concat`을 시켜서 넘겨야 한다.

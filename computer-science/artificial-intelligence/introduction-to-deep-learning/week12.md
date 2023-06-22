# 오토인코더

### 차원의 저주(curse of dimensionality)

1차원일때는 하나의 선 안에서 옹기종기 모여있음

2차원으로 변경 시 x와 y축이 생기면서 거리가 벌어지게됨.



### 생성 모델

오토인코더는 Encoder와 Decoder를 분리해서 학습시킬 수 없음.

오토인코더 중 생성은 decoder의 역할.

![image-20230520142809142](/Users/eisen/Documents/Github/blog-contents-b/computer-science/artificial-intelligence/introduction-to-deep-learning/week12.assets/image-20230520142809142.png)



예전에는 Encoder의 기능에 집중되었음.

- 데이터의 feature 학습
- 모델의 초기 weight 세팅

Self supervised learning 

임의로 task를 생성 및 학습 후 본 목적으로 사용.



fine tuning

Self supervised learning  > 하고자 하는 데이터를 학습?



### variational autoencoder

학습할 분포 영역을 학습

기본적인 autoencder의 개량.

특정 분포 형태로 학습을 유도.(원점을 기준으로)

이산적인 값이 아니라 분포를 학습



#### reparameterization trick

함께 반영한다 == 채널 단위로. ==> 컨볼루젼 레이어(CNN) 시



![image-20230520153220693](/Users/eisen/Documents/Github/blog-contents-b/computer-science/artificial-intelligence/introduction-to-deep-learning/week12.assets/image-20230520153220693.png)

z. 

![image-20230520153248533](/Users/eisen/Documents/Github/blog-contents-b/computer-science/artificial-intelligence/introduction-to-deep-learning/week12.assets/image-20230520153248533.png)

### VQ-VAE

이상탐지에서 많이 사용됨.

variational autoencoder는 분포를 학습하기 때문에 이상이 있는 이미지를 넣어도 decoder에서 복원을 잘 시킴.

그렇지만 VQ-VAE는 대표값 외의 자잘한 값들을 없애기 때문에 decoder에서 복원을 못시키기 때문에 이상탐지에서 ㅋ많이 사용됨.

encoding으로 나온 값을 그대로 decoder로 넣지 않음.



conditional vae - layer를 확인해 보기 ->
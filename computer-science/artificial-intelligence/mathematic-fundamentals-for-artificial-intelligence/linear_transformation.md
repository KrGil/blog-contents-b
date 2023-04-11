# 선형변환(linear_transformation)

## 함수(function)

### 중등 교과과정

> 정의역(domain): 입력이 정의되는 집합 D
>
> 공역(codomain): 출력이 정의되는 집합 C
>
> 치역(range): 실제 함수의 출력이 나오는 부분집합 R

- 함수는 두 집합 간의 매핑룰(mapping rule)입니다.

![image-20230411085029947](https://raw.githubusercontent.com/KrGil/blog-contents-b/203ffe7e9ae11667c881d1feaf9f7cb8e25ca87c/computer-science/artificial-intelligence/mathematic-fundamentals-for-artificial-intelligence/linear_transformation.assets/image-20230411085029947.png)

- 함수의 정의

![image-20230411085503137](https://raw.githubusercontent.com/KrGil/blog-contents-b/203ffe7e9ae11667c881d1feaf9f7cb8e25ca87c/computer-science/artificial-intelligence/mathematic-fundamentals-for-artificial-intelligence/linear_transformation.assets/image-20230411085503137.png)



### 고등 교과과정

$$
f(x) = x^2 + 2x + 3
$$

위의 식을 아래와 같이 프로그래밍 언어로 표현할 수 있습니다.

```
float f (float x)
{
	return x * x
		+ 2 * x
		+ 3
}
```
## 선형 함수(linear function)

> 함수 f가 아래의 두가지 조건을 만족하면 함수 f를 선형함수라고 합니다.
> $$
> f(x + y) = f(x) + f(y)\\
> f(cx) = cf(s)
> $$
> (단, c는 임의의 스칼라일 경우)

![image-20230411090646020](https://raw.githubusercontent.com/KrGil/blog-contents-b/203ffe7e9ae11667c881d1feaf9f7cb8e25ca87c/computer-science/artificial-intelligence/mathematic-fundamentals-for-artificial-intelligence/linear_transformation.assets/image-20230411090646020.png)



## 변환(transformation)

> `함수(fucntion)` 중 입출력이 모두 vector인 경우 `변환(transformation)`이라 부릅니다. 
>
> 또한 `변환(transformation)`의 입출력이 동일할 경우(n = m) `연산자(operator)`라고 부릅니다.

###  MNIST 손글씨 인식

$$
T: R^{28*28} -> R^{10}
$$

28 x 28 해상도의 손글시 숫자 영상을 0 ~ 9 까지의 어떤 숫자가 적혀져 있는지 알아내는 문제 역시 (비선형)`변환(transformation)` 입니다. 

### matrix transformation(행렬변환)

m x n 행렬 A에 대해 Ax는 n-벡터를 입력 받아 m-벡터를 출력으로 내는 아래의 변환은 
$$
T_A(x) = Ax
$$
행렬이 정의하기 때문에 `행렬변환(matrix transformation)`이라고 합니다.
$$
T_{A}: R^n -> R^m
$$



또한 행렬변환은 `선형함수` 성질을 모두 만족하기 때문에 `선형변환(linear transforamtion)` 이기도 합니다.
$$
T_A(x + y) = T_A(x) + T_A(y),\\
T_A(cx) = cT_A(x)
$$


즉, 행렬변환이 있거나 행렬을 곱한다는 것은 모두 선형변환입니다.

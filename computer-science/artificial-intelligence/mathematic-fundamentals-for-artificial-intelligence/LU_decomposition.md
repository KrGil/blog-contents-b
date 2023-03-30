# [AI] LU 분해(scipy.linalg.lu())

> 행렬분해(matrix decomposition) 중 한가지인 LU 분해에 대해 알아보겠습니다.

## LU분해

> 주어진 행렬을 L: lower triangular matrix(하삼각행렬)과 U: upper triangular matrix(상삼각행렬) 두 행렬의 곱으로 나누는 행렬분해입니다.
>
> 가우스 소거법의 forward elimination(전방소거법)을 행렬로 코드화 한 것입니다.

```
A				L			U
[*, *, *]		[*, 0, 0]	[*, *, *]
[*, *, *]	=	[*, *, 0]	[0, *, *]
[*, *, *]		[*, *, *]	[0, 0, *]
```

- U: forward elimination의 결과물입니다.
- L: forward elimination의 과정 및 절차입니다.

### 장점

> LU 분해를 이용하면 Ax = b 식을 아래와 같이 나타낼 수 있습니다.

```
Ax = b -> (LU)x = b -> L(Ux) = b
		-> Ly = b(단, Ux = y)
```

주어진 선형시스템을 아래와 같은 두가지 단계로 `x`의 값을 구할 수 있습니다.

` Ly = b` ==>  y 값 구하기

```
// Forward-substitution(정방대치법)
L			y		=	b
[*, 0, 0]	[y1]		[*]
[*, *, 0]	[y2]	=	[*]
[*, *, *]	[y3]		[*]
```

`Ux = y` ==> x 값 구하기

```
// Back-substitution(후방대치법)
U			x		=	y
[*, *, *]	[x1]		[y1]
[0, *, *]	[x2]	=	[y2]
[0, 0, *]	[x3]		[y3]
```



### 코드

LU 분해는 가우스 소거법의 `forward elimination(전방소거법)을 행렬로 코드화 한 것입니다.

> L: 행렬 A를 전방소거하는데 쓰인 replacement와 scaling에 대한 EROs를 기록해 둔 행렬(하삼각행렬)
>
> U: 행렬 A를 전방소거한 후 남은 upper triangular matrix(상삼각행렬)
>
> P: 행렬 A를 전방소거하는데 쓰인 interchange에 대한 EROs를 기록해 둔 행렬 (옵션)

*EROs: [[AI] 가우스 소거법 기본](https://jjam89.tistory.com/275) 아티클에서 살펴보실 수 있습니다.*

파이썬의 numpy, scipy 패키지를 이용해서 구할 수 있습니다.

```python
A = np.array([[3, 1, 1], [1, -2, -1], [1, 1, 1]])
b = np.array([4,1,2])
```

위와 같이 행렬 `A와 b` 가 있을 때 `LU분해`를 구해 봅니다.

```python
# PLU 분해
P, L, U = scipy.linalg.lu(A)

```

`scipy`패키지의 `linalg.lu`를 사용하게 되면 위에서 언급한 `L, P, U` 값을 구할 수 있습니다. 하지만 이건 말 그대로 `L, P, U` 값이므로 원하는 x의 값을 구하기 위해선 아래와 같이 `lu_factor()` 를 사용하여야 합니다.

```python
# LU 분해
## factorize
lu, piv = scipy.linalg.lu_factor(A)
x = scipy.linalg.lu_solve((lu, piv), b)
```

이렇게 구한 `x`의 값을 아래와 같이 검증할 수 있습니다.

```python
# 결과 검증
bb = A @ x
```



이렇게 LU분해에 대해 알아보았습니다. 수업을 듣긴 듣는데 여러모로 부족한 부분이 많아서 이렇게 글을 작성하면서 반복을 해야 조금 이해가 가더군요 ㅠ 아직 갈길이 많이 먼 듯 합니다.

오늘도 즐거운 코딩 되시길 바랍니다.

감사합니다.


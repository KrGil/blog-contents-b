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




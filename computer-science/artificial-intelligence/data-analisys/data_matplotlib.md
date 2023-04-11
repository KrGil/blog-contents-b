# 맷플롯립

- 데이터 시각화: 데이터 분석 결과를 쉽게 이해할 수 있도록 시각적으로 표현하고 전달.



## pyplot

> pyplot 위에 그림(figure) 객체를 올리고 그 위에 그래프에 해당하는 축(axes)를 올립니다.
>
> 그림 위에 축을 여러장 올리면 여러 개의 그래프를 작성할 수 있습니다.

기본적인 간단한 하나의 그래프를 그려봅니다.

```python
import matplotlib.pyplot as plt # matplotlib 모듈 호출

X = range(100)
Y = range(100)
plt.plot(X, Y)
```

![image-20230405105311412](C:\Users\admin\Documents\GitHub\blog-contents-b\computer-science\artificial-intelligence\data-analisys\data_matplotlib.assets\image-20230405105311412.png)

이제 `pyplot`을 활용하여 하나의 좌표평면에 에 두개의 그래프를 그려봅니다.

```python
import numpy as np # numpy 모듈 호출

X_1 = range(100)
Y_1 = [np.cos(value) for value in X]

X_2 = range(100)
Y_2 = [np.sin(value) for value in X]

plt.plot(X_1, Y_1)
plt.plot(X_2, Y_2)
plt.show()
```

`plot()` 함수를 사용하여 각각 다른 값들을 배정한 후 `show()` 함수로 출력해 줍니다.

![image-20230405105541209](C:\Users\admin\Documents\GitHub\blog-contents-b\computer-science\artificial-intelligence\data-analisys\data_matplotlib.assets\image-20230405105541209.png)

## 그림과 축

> 그림(figure()은 그래프를 작성하는 밑바탕이 됩니다.
>
> 축(axes)은 실제로 그래프를 작성하는 공간입니다.

```python
fig, ax = plt.subplots() # (1) figure와 axes 객체 할당

X_1 = range(100)
Y_1 = [np.cos(value) for value in X]

ax.plot(X_1, Y_1) # (2) plot 함수를 사용해서 그래프 생성
ax.set(title = 'cos graph', xlabel='X', ylabel='Y')
plt.show()
```

![image-20230405105824903](C:\Users\admin\Documents\GitHub\blog-contents-b\computer-science\artificial-intelligence\data-analisys\data_matplotlib.assets\image-20230405105824903.png)

위의 이미지와 같이 하나의 ax(축)에 하나의 그래프를 할당해서 그려봅니다.

다음은 column이 2개인 그래프를 생성해 봅니다.

```python
fig = plt.figure() # (1) figure 반환
fig.set_size_inches(10, 10) # (2) figure의 크기 지정

# 생성
## parameter (1,2,1) 은 1행 2열의 1번째 공간을 뜻합니다.
ax_1 = fig.add_subplot(1,2,1) # (3) 첫 번째 그래프 생성
ax_2 = fig.add_subplot(1,2,2) # (4) 두 번째 그래프 생성

# 설정
## c는 color
ax_1.plot(X_1, Y_1, c='b') # (5) 첫 번째 그래프 설정
ax_2.plot(X_2, Y_2, c='g') # (6) 두 번째 그래프 설정
```

![image-20230405110059295](C:\Users\admin\Documents\GitHub\blog-contents-b\computer-science\artificial-intelligence\data-analisys\data_matplotlib.assets\image-20230405110059295.png)

## 서브플롯

> 축을 여러 개 만들 때 서브플롯으로 축 객체 공간 확보할 수 있습니다.
>
> 그림(`fiture`)객체에서 `add_subplot()` 혹은 `plot` 객체에서 `subplots()` 함수를 사용해서 할당해 줄 수 있습니다.
>
> axes의 type은 `numpy.ndarray` 입니다.

### axes(축)

```python
fig, ax = plt.subplots(nrows=1, ncols=2)
print(ax) # axes(축) 출력해보기

print(type(ax))
```

![image-20230405104743837](C:\Users\admin\Documents\GitHub\blog-contents-b\computer-science\artificial-intelligence\data-analisys\data_matplotlib.assets\image-20230405104743837.png)

type이 `numpy.ndarray` 임을 알 수 있습니다.

축이 여러개(2행 2열)인 그래프를 그려봅니다.

```python
import numpy as np
import matplotlib.pyplot as plt

x = np.linspace(-1, 1, 100) # (1) x 값과 y_n 값 생성
y_1 = np.sin(x)
y_2 = np.cos(x)
y_3 = np.tan(x)
y_4 = np.exp(x)

fig, ax = plt.subplots(2,2) # (2) 2x2 figure 객체 생성
ax[0,0].plot(x, y_1) # (3)  그래프 생성
ax[0,0].set(title = 'sin graph')
ax[0,1].plot(x, y_2) # (4)  그래프 생성
ax[0,1].set(title = 'cos graph')
ax[1,0].plot(x, y_3) # (5)  그래프 생성
ax[1,0].set(title = 'tan graph')
ax[1,1].plot(x, y_4) # (6)  그래프 생성
ax[1,1].set(title = 'exp graph')

# fig, ax = plt.subplots() # (2) 2x2 figure 객체 생성
# ax.plot(x, y_2) 
plt.show()
```

![`](C:\Users\admin\Documents\GitHub\blog-contents-b\computer-science\artificial-intelligence\data-analisys\data_matplotlib.assets\image-20230405113308076.png)

위와 같이 배열이 아닌 다양한 형태로 그래프를 생성할 수 있습니다.

```python
# parameter 321의 경우 3행 2열의 그래프 중 1번째 라는 것을 뜻합니다.
## (321) 대신 (3,2,1)을 사용해도 됩니다.
ax1 = plt.subplot(3,2,1) # (1) 3행 2열의 첫 번째 공간에 axes 생성
plt.plot(x, y_1)
ex2 = plt.subplot(322) # (2) 두 번째 공간에 axes 생성
plt.plot(x, y_1)
# 3행 1열의 그래프 
ex3 = plt.subplot(312) # (3) 3행 1열의 2번째 공간에 axes 생성
plt.plot(x, y_1)

ex4 = plt.subplot(325) # (4) 넷 번째 공간에 axes 생성
plt.plot(x, y_1)
ex5 = plt.subplot(326) # (5) 다섯 번째 공간에 axes 생성
plt.plot(x, y_1)
```

![image-20230405113329959](C:\Users\admin\Documents\GitHub\blog-contents-b\computer-science\artificial-intelligence\data-analisys\data_matplotlib.assets\image-20230405113329959.png)
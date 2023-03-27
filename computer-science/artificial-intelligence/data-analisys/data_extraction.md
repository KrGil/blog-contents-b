# [pandas]  데이터 추출(pandas)기본 기능

> 4주차 강의 중 알려준 pandas의 기능들을 작성해 보았습니다. (좀 더 빨리 익숙해지기 위해 글로 정리해 보았습니다.)
>
> 익숙하지 않아서 그런지 따로 공부를 하지 않으면 많이 헷갈리더군요.



## haed

```
df.head(5)
```

|      | account |                       name |             street |          city |         state | postal-code |   Jan |   Feb | Mar   |
| ---: | ------: | -------------------------: | -----------------: | ------------: | ------------: | ----------: | ----: | ----: | ----- |
|    0 |  211829 | Kerluke, Koepp and Hilpert | 34456 Sean Highway |    New Jaycob |         Texas |       28752 | 10000 | 62000 | 35000 |
|    1 |  320563 |             Walter-Trantow |  1311 Alvis Tunnel | Port Khadijah | NorthCarolina |       38365 | 95000 | 45000 | 35000 |

...

### Tranverse

```
// 행과 열을 바꿔서 출력
df.head(3).T
```

|         |                          0 |                 1 | 2                                    |
| ------: | -------------------------: | ----------------: | ------------------------------------ |
| account |                     211829 |            320563 | 648336                               |
|    name | Kerluke, Koepp and Hilpert |    Walter-Trantow | Bashirian, Kunde and Price           |
|  street |         34456 Sean Highway | 1311 Alvis Tunnel | 62184 Schamberger Underpass Apt. 231 |

...

## slicing

```
// row를 0,1,2 총 3개를 잘라서 출력해 줍니다.
// df.head(3) 과 동일한 기능을 합니다.
df[:3]
```

|         |                          0 |                 1 | 2                                    |
| ------: | -------------------------: | ----------------: | ------------------------------------ |
| account |                     211829 |            320563 | 648336                               |
|    name | Kerluke, Koepp and Hilpert |    Walter-Trantow | Bashirian, Kunde and Price           |
|  street |         34456 Sean Highway | 1311 Alvis Tunnel | 62184 Schamberger Underpass Apt. 231 |

```
df[["name","street"]][:2]
```

| 0    | Kerluke, Koepp and Hilpert | 34456 Sean Highway |
| ---- | -------------------------- | ------------------ |
| 1    | Walter-Trantow             | 1311 Alvis Tunnel  |

## index

```
df.index = df["account"]
df
```

|         | account |                       name |             street |          city |         state | postal-code |   Jan |   Feb |   Mar |
| ------: | ------: | -------------------------: | -----------------: | ------------: | ------------: | ----------: | ----: | ----: | ----: |
| account |         |                            |                    |               |               |             |       |       |       |
|  211829 |  211829 | Kerluke, Koepp and Hilpert | 34456 Sean Highway |    New Jaycob |         Texas |       28752 | 10000 | 62000 | 35000 |
|  320563 |  320563 |             Walter-Trantow |  1311 Alvis Tunnel | Port Khadijah | NorthCarolina |       38365 | 95000 | 45000 | 35000 |



## delete

```
del df["account"]
df.head()
```

|    name |                     street |               city |         state |   postal-code |   Jan |   Feb |   Mar |       |
| ------: | -------------------------: | -----------------: | ------------: | ------------: | ----: | ----: | ----: | ----: |
| account |                            |                    |               |               |       |       |       |       |
|  211829 | Kerluke, Koepp and Hilpert | 34456 Sean Highway |    New Jaycob |         Texas | 28752 | 10000 | 62000 | 35000 |
|  320563 |             Walter-Trantow |  1311 Alvis Tunnel | Port Khadijah | NorthCarolina | 38365 | 95000 | 45000 | 35000 |



## location

```
df.loc[[211829,320563],["name","street"]]
```

| 211829 | Kerluke, Koepp and Hilpert | 34456 Sean Highway |
| ------ | -------------------------- | ------------------ |
| 320563 | Walter-Trantow             | 1311 Alvis Tunnel  |



```
df.loc[205217:,["name","street"]]
```

|         |             name |                       street |
| ------: | ---------------: | ---------------------------: |
| account |                  |                              |
|  205217 | Kovacek-Johnston | 91971 Cronin Vista Suite 601 |
|  209744 |   Champlin-Morar |             26739 Grant Lock |

...

### iloc

```python
// index location
// [row, col]
df.iloc[:10, :3]
```



|         |                       name |                               street |           city |
| ------: | -------------------------: | -----------------------------------: | -------------: |
| account |                            |                                      |                |
|  211829 | Kerluke, Koepp and Hilpert |                   34456 Sean Highway |     New Jaycob |
|  320563 |             Walter-Trantow |                    1311 Alvis Tunnel |  Port Khadijah |
|  648336 | Bashirian, Kunde and Price | 62184 Schamberger Underpass Apt. 231 | New Lilianland |





## reset

```
df_new = df.reset_index()
df_new
```

|      | account |                       name |             street |          city |         state | postal-code |   Jan |   Feb | Mar   |
| ---: | ------: | -------------------------: | -----------------: | ------------: | ------------: | ----------: | ----: | ----: | ----- |
|    0 |  211829 | Kerluke, Koepp and Hilpert | 34456 Sean Highway |    New Jaycob |         Texas |       28752 | 10000 | 62000 | 35000 |
|    1 |  320563 |             Walter-Trantow |  1311 Alvis Tunnel | Port Khadijah | NorthCarolina |       38365 | 95000 | 45000 | 35000 |





## drop

```python
// 원본 객체에 영향을 주지 않는다.
df_new.drop(1).head()
```

|      | account |                       name |                               street |           city | state | postal-code |   Jan |    Feb |   Mar |
| ---: | ------: | -------------------------: | -----------------------------------: | -------------: | ----: | ----------: | ----: | -----: | ----: |
|    0 |  211829 | Kerluke, Koepp and Hilpert |                   34456 Sean Highway |     New Jaycob | Texas |       28752 | 10000 |  62000 | 35000 |
|    2 |  648336 | Bashirian, Kunde and Price | 62184 Schamberger Underpass Apt. 231 | New Lilianland |  Iowa |       76517 | 91000 | 120000 | 35000 |

### inplace

```python
// drop 결과를 계속 반영하고 싶을 경우

// 1. 변수 저장 
df_drop = df_new.drop(1)
df_drop

// 2. inplace 사용
df_new.drop(1, inplace=True)
df_new
```

|      | account |                       name |                               street |           city | state | postal-code |   Jan |    Feb | Mar   |
| ---: | ------: | -------------------------: | -----------------------------------: | -------------: | ----: | ----------: | ----: | -----: | ----- |
|    0 |  211829 | Kerluke, Koepp and Hilpert |                   34456 Sean Highway |     New Jaycob | Texas |       28752 | 10000 |  62000 | 35000 |
|    2 |  648336 | Bashirian, Kunde and Price | 62184 Schamberger Underpass Apt. 231 | New Lilianland |  Iowa |       76517 | 91000 | 120000 | 35000 |



### axis

```python
// axis=0: row
// axis=1: col

// "account" col drop
df_new.drop("account", inplace=True, axis=1)
df_new
```

|      |                       name |                               street |           city | state | postal-code |   Jan |    Feb |   Mar |
| ---: | -------------------------: | -----------------------------------: | -------------: | ----: | ----------: | ----: | -----: | ----: |
|    0 | Kerluke, Koepp and Hilpert |                   34456 Sean Highway |     New Jaycob | Texas |       28752 | 10000 |  62000 | 35000 |
|    2 | Bashirian, Kunde and Price | 62184 Schamberger Underpass Apt. 231 | New Lilianland |  Iowa |       76517 | 91000 | 120000 | 35000 |



```python
// index 0, 2 row drop
df_new.drop([0, 2], axis=0)
```

|      | account |                        name |                      street |            city |      state | postal-code |    Jan |    Feb | Mar   |
| ---: | ------: | --------------------------: | --------------------------: | --------------: | ---------: | ----------: | -----: | -----: | ----- |
|    3 |  109996 | D'Amore, Gleichner and Bode | 155 Fadel Crescent Apt. 144 |      Hyattburgh |      Maine |       46021 |  45000 | 120000 | 10000 |
|    4 |  121213 |               Bauch-Goldner |         7274 Marissa Common | Shanahanchester | California |       49681 | 162000 | 120000 | 35000 |





### References

https://hogni.tistory.com/49
# [DB] procedure에서 if문 사용하기

> 오랜만에 procedure를 건들일 일이 생겼습니다. 예전부터 짜여져 있는 것을 분석하기만 했었지 직접 수정하거나 짜본 적이 없어 if문 하나 짜는데도 머뭇거리게 되네요. 간략하게 procedure에서 if문 사용하는 방법을 기록해보려 합니다.

> 오랜만에 procedure를 건들일 일이 생겼습니다. 예전부터 짜여져 있는 것을 분석하기만 했었지 직접 수정하거나 짜본 적이 없어 if문 하나 짜는데도 머뭇거리게 되네요. 간략하게 procedure에서 if문 사용하는 방법을 기록해보려 합니다.

## if문

사실 일반적인 if문과 크게 다르지 않습니다.

```sql
IF a.emp_stt = '3' THEN
    v_user_stt := '3'
ELSE
    v_user_stt := '1'
```

​	위의 구문을 java에서는 아래와 같이 사용할 수 있습니다.

```java
if(a.emp_stt == '3') 
    v_user_stt = '3';
else
    v_user_stt = '1';
```

차이점은 `THEN`과 `:=` 두가지가 있겠네요. 실수하지 않고 조심해서 사용해야할 듯 합니다.

## else-if문

위에서 조건 elseif를 추가해 보도록 하겠습니다.

```sql
IF a.emp_stt = '3' THEN
    v_user_stt := '3'
ELSIF a.emp_stt = '2' THEN
    v_user_stt := '2'
ELSE
    v_user_stt := '1'
```

위의 구문을 java에선 아래와 같이 구현할 수 있습니다.

```java
if(a.emp_stt == '3') 
    v_user_stt = '3';
else if(a.emp_stt == '2')
    v_user_stt = '2';
else
    v_user_stt = '1';
```

차이점은 위의 `if-else`와 마찬가지로 `THEN`과 `:=`의 기호차이가 있으며 `elsif`에서 띄워쓰기 존재와 `e`가 없다는점, 그리고 `THEN` 을 작성하는 것 정도의 차이가 존재합니다. 잘 기억해 두었다가 작성 시 실수하지 않도록 주의해서 사용해야 할 듯 합니다.

감사합니다.

### References

[https://prinha.tistory.com/entry/MySQL-Stored-Procedure%EC%9D%98-%EC%A1%B0%EA%B1%B4%EB%AC%B8-IF-ELSEIF-CASE](https://prinha.tistory.com/entry/MySQL-Stored-Procedure%EC%9D%98-%EC%A1%B0%EA%B1%B4%EB%AC%B8-IF-ELSEIF-CASE)

[https://chat.openai.com/](https://chat.openai.com/)


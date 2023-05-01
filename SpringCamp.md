# Spring camp

##  session 1

어느 월급쟁이의 스프링?

Build-Code-Deploy

gradle(groovy DSL) vs maven(XML)

- application

  .yaml vs properties

### spring news

1. Spring.io / release
2. Spring.io / newsletter
3. github / Spring-project 

KSUG Facebook. - springkorea

### Spring boot 3.0

20221124

- java 10

  local variable type interface - var

- java 14

  switch()

- java 15

  Text block

- java 16

  record, instanse of

- java 17

- javax -> jakarta (namespace 변경)

### Sprint framework 6.0

- uuid -> tsid

- observability

- upgrade

  java upgrade -> jakarta ee 

## spring boot

2.7.x -> 최소 버전





### 대규모 엔터프라이즈 시스템 개선 경험기

#### 1부

API의 행위에 집중.

Strangler Fig

interface  != event



1. legacy 두번 쓰기

2. 마이그레이션 두번 하기

3. 레거시 시스템에 read

   write 는 가장 나중에(동시성)



요구사항 반영은 fig에서 해야함.

#### 2부

- Port & Adapter Architecture

  -> hexagonal

- Event Driven Architecture

  서로 직접적으로 의존하지 않음.

- Domain Driven Architecture

  빈약 vs 풍부(자체적으로 상태를 가짐)

Schema.org



## session 4

실무에서 적용하는 테스트 코드작성 방법과 노하우

mockServer test

@mockbean -> 통합 테스트 시 application context가 초기화 -> 시간이 오래됨.

- mock bean -> bean 변경.

  @MockBean -> @TestConfiguration

- Multi modules 사용 시 import 불가

  Java-test-fixtures plug in 사용



테스트할 수 없는 영역에 대한 대처

- black box 영역을 격리, 그 외의 곳에서는 test.

테스트 코드가 짜기 어렵다면 해당 테스트 코드가 feedback



## session 5

구현에서 테스트까지 - 대용량 트래픽 처리 시스템 - 이경일

> Cache
>
> Concurrency
>
> Spring Cloud Config, Bus
>
> K8S
>
> ...
>
> Pinpoint



nBilly - no-code Development Platform

1. cache

   저장소를 어디에 둘까.

   Read 연산이 80% -> 70% 이하는 사용하지 않는게 좋다.

application cache(local cache)

- 동시성 문제

  - 메모리간 문제

    syncronized

    volatile - 동시성을 활용하려면 core를 read only or write only를 활용하여야 한다.

    concurrentHashMap - 동시성 발생 시 origin 값이 다르면 다시 조회.

    - ConcurrentHashMap 사용.

  - 서버간 동시성 문제

    Eventual consistency - near real Time Sync

    

Performence tool - locust

통합 infra - cell platform





## session 6

Journey to Modern Spring( 클라우드 시대를 맞이하는 스프링의 자세)

native Executables

cloud native - cloud기반으로 실행, 운영되는 환경.

virtual thread

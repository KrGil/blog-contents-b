# [IDE] intellij에서 javascript 사용하기

> 이번에 leetcode에서 javascript를 사용하여 문제를 풀어보려고 했습니다. 그런데 생각해보니 제가 local에서 javascript 실행을 해본적이 없더군요. 그래서 이번에 local에서 test를 위한 환경을 설정해 볼까 합니다. intellij에서 nodejs를 사용하기 위한 기본적인 설치법과 간단한 사용 방법에 대해서 작성해 보겠습니다.


# 설치

## 1. nodejs 설치

https://nodejs.org/ko/download

![image-20230414133244419](https://raw.githubusercontent.com/KrGil/blog-contents-b/8db0799233448be0dc57a69eeddff95ff1c3d89f/software/web-development/integrated-development-environment/intellij/javascript.assets/image-20230414133244419.png)

LTS(Long Term Support) 버전을 설치해 줍니다. 어떤 버전이든 상관없지만 이왕 안정적이면서 오래동안 지원해 주는 LTS 버전을 설치했습니다.



### 설치 확인

1. node를 실행해 봅니다.

![image-20230414134013623](https://raw.githubusercontent.com/KrGil/blog-contents-b/8db0799233448be0dc57a69eeddff95ff1c3d89f/software/web-development/integrated-development-environment/intellij/javascript.assets/image-20230414134013623.png)

저는 예전에 설치해서 버전이 한단계 낮네요.



2. `npm`(node package modules)를 실행해 봅니다.

![image-20230414133509991](https://raw.githubusercontent.com/KrGil/blog-contents-b/8db0799233448be0dc57a69eeddff95ff1c3d89f/software/web-development/integrated-development-environment/intellij/javascript.assets/image-20230414133509991.png)

*(위와 같이 나오지 않는다면 재설치를 해보시길 바랍니다.)*



사실 여기까지 해도 `cli`에서 `node` command로 javascript 파일을 실행시킬 수 있습니다. 

![image-20230414134414747](https://raw.githubusercontent.com/KrGil/blog-contents-b/8db0799233448be0dc57a69eeddff95ff1c3d89f/software/web-development/integrated-development-environment/intellij/javascript.assets/image-20230414134414747.png)

그래도 매번 cli에서 실행하기 번거로우니 IDE(intellij)에서 javascript를 사용해 보도록 하겠습니다.



## 2. (plugin) Node.js  설치

![image-20230414133334835](https://raw.githubusercontent.com/KrGil/blog-contents-b/8db0799233448be0dc57a69eeddff95ff1c3d89f/software/web-development/integrated-development-environment/intellij/javascript.assets/image-20230414133334835.png)

`intellij > settings > Plugins > Node.js` 를 install 후 apply 해 줍니다. 

이렇게 설치 및 세팅이 끝났습니다. 쉽죠?? ㅎㅎ 매우 간단하네요 그럼 간단한 사용법을 확인해 봅니다.

# 사용

## 프로젝트

intellij 재시작 후 javascript 프로젝트를 생성합니다.

![image-20230414134951176](https://raw.githubusercontent.com/KrGil/blog-contents-b/8db0799233448be0dc57a69eeddff95ff1c3d89f/software/web-development/integrated-development-environment/intellij/javascript.assets/image-20230414134951176.png)

`intellij > settings > Node.js`를 보시면 아래와 같이 설치한 `node` 경로가 잡혀있는 것을 확인할 수 있습니다.

![image-20230414134911347](https://raw.githubusercontent.com/KrGil/blog-contents-b/8db0799233448be0dc57a69eeddff95ff1c3d89f/software/web-development/integrated-development-environment/intellij/javascript.assets/image-20230414134911347.png)



## 파일

javascript 파일을 생성(typescript file도 생성 가능) 해 봅니다.

![image-20230414134811440](https://raw.githubusercontent.com/KrGil/blog-contents-b/8db0799233448be0dc57a69eeddff95ff1c3d89f/software/web-development/integrated-development-environment/intellij/javascript.assets/image-20230414134811440.png)

파일에 간단하게 코딩 후 

![image-20230414135542673](https://raw.githubusercontent.com/KrGil/blog-contents-b/8db0799233448be0dc57a69eeddff95ff1c3d89f/software/web-development/integrated-development-environment/intellij/javascript.assets/image-20230414135542673.png)

run을 시켜보면

![image-20230414135640758](https://raw.githubusercontent.com/KrGil/blog-contents-b/8db0799233448be0dc57a69eeddff95ff1c3d89f/software/web-development/integrated-development-environment/intellij/javascript.assets/image-20230414135640758.png)

아래와 같이 나오는 것을 확인할 수 있습니다.

![image-20230414135627664](https://raw.githubusercontent.com/KrGil/blog-contents-b/8db0799233448be0dc57a69eeddff95ff1c3d89f/software/web-development/integrated-development-environment/intellij/javascript.assets/image-20230414135627664.png)



이렇게 intellij에서 javascript를 실행하는 방법을 알아보았습니다.

감사합니다.



### References

https://hoonjo.tistory.com/15

https://kdydesign.github.io/2017/07/15/nodejs-npm-tutorial/
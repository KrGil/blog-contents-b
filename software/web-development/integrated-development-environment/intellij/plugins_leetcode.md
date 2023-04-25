# [IDE] intellij에서 leetCode plugin 사용하기

> 자주는 아니지만 한번씩 leetCode를 푸는데 매번 브라우저에서 leetCode 사이트에 들어가 문제를 확인한 후 intellij에서 test code를 작성한 후 다시 브라우저로 옮기는 작업을 해 왔습니다. 
>
> 그런데 이번에 leetCode plugin을 접하게 되었습니다. 이 플러그인을 활용하면 번거롭게 위의 과정을 거칠 필요가 없습니다.
>
> 그래서 설치한 겸 플러그인 소개 및 설치법을 작성해 보도록 하겠습니다.

# leetCode plugin

jetbrains 사이트에 아래와 같이 소개되어 있습니다. 짧은 소개 영상 보고 반해서 설치했으니 궁금하신 분들은 확인해 보셔도 됩니다 ㅎㅎ 그런데 예전 버전인지 ui가 지금과 조금 다른 부분이 있네요.

https://plugins.jetbrains.com/plugin/12132-leetcode-editor

![image-20230414141714777](https://raw.githubusercontent.com/KrGil/blog-contents-b/3dda3c995bb92c6cc475599a6bedebfbe09b7381/software/web-development/integrated-development-environment/intellij/plugins_leetcode.assets/image-20230414141714777.png)



또한 github에도 소스와 docs가 올려져 있으니 확인해 보시면 좋을 듯 합니다.(중국인이 개발했는지 중국어가 많네요... 그래도 기능은 깔끔하니까...ㅎㅎ) 

https://github.com/shuzijun/leetcode-editor

## 적용

아래는 실제 플러그인 적용 후 사용하는 중인 모습입니다. ㅎㅎ 개인적으로 ui가 직관적이고 깔끔하다고 생각드네요. 

![image-20230414141310517](https://raw.githubusercontent.com/KrGil/blog-contents-b/3dda3c995bb92c6cc475599a6bedebfbe09b7381/software/web-development/integrated-development-environment/intellij/plugins_leetcode.assets/image-20230414141310517.png)

## 설치

`intellij > settings > plugins > LeetCode Editor`를 install 한 후 intellij를 **재시작** 합니다.

![image-20230414142224743](https://raw.githubusercontent.com/KrGil/blog-contents-b/3dda3c995bb92c6cc475599a6bedebfbe09b7381/software/web-development/integrated-development-environment/intellij/plugins_leetcode.assets/image-20230414142224743.png)

`intellij > settings > LeetCode Plugin` 설정창에 들어가시게 되면 아래와 같은 설정들을 해주어야 합니다.

`URL`: `leetcode.com`으로 설정합니다.

`CodeType`: 사용할 언어를 설정합니다. (제대로된 언어를 설정하지 않으면 실행이 안됩니다.)

`LoginName`, `Password`: leetCode 사이트에 로그인할 아이디, 비밀번호를 입력합니다.

`TempFilePath`: 파일이 저장될 경로를 설정해 줍니다.



![image-20230414142915292](https://raw.githubusercontent.com/KrGil/blog-contents-b/3dda3c995bb92c6cc475599a6bedebfbe09b7381/software/web-development/integrated-development-environment/intellij/plugins_leetcode.assets/image-20230414142915292.png)



그 후 아래와 같이 `Leetcode` 탭 뷰를 확인해 봅니다.

![image-20230414142528269](https://raw.githubusercontent.com/KrGil/blog-contents-b/3dda3c995bb92c6cc475599a6bedebfbe09b7381/software/web-development/integrated-development-environment/intellij/plugins_leetcode.assets/image-20230414142528269.png)



login을 합니다.(login을 하지 않으면 `run` 기능을 사용할 수 없습니다. 물론 `submit` 기능도요)

저는 자동으로 로그인이 되질 않더라구요. 그래서 아래와 같이 `Sign in` 을 해 주었습니다.

![image-20230414142630270](https://raw.githubusercontent.com/KrGil/blog-contents-b/3dda3c995bb92c6cc475599a6bedebfbe09b7381/software/web-development/integrated-development-environment/intellij/plugins_leetcode.assets/image-20230414142630270.png)

클릭하면 intellij에서 browser를 띄울탠데 로그인하면 됩니다.



## 사용

제가 leetCode 사이트에서 사용하는 대부분의 기능을 여기서 제공해 주어서 놀랐습니다... 개발하신분 참 대단하네요.

상단의 `Find question` 아이콘을 토글시키면 바로 밑에 `Category, List, Difficult`와 같은 탭들로 정렬시킬 수 있습니다.

![image-20230414144520902](https://raw.githubusercontent.com/KrGil/blog-contents-b/3dda3c995bb92c6cc475599a6bedebfbe09b7381/software/web-development/integrated-development-environment/intellij/plugins_leetcode.assets/image-20230414144520902.png)

`[2635]Apply Transform...`을 예제로 선택해 봅니다.

코드 작성 후 아래와 같이 Run Code를 선택하면 하단의 `Leetcode Console`에서 `Output, Expected`로 결과를 띄워줍니다.

![image-20230414145118507](https://raw.githubusercontent.com/KrGil/blog-contents-b/3dda3c995bb92c6cc475599a6bedebfbe09b7381/software/web-development/integrated-development-environment/intellij/plugins_leetcode.assets/image-20230414145118507.png)

또한 아래와 같이 `testcase` 아이콘을 클릭하면 원하는 testcase를 한개 혹은 여러개 추가할 수 있습니다. 

![image-20230414150336626](https://raw.githubusercontent.com/KrGil/blog-contents-b/3dda3c995bb92c6cc475599a6bedebfbe09b7381/software/web-development/integrated-development-environment/intellij/plugins_leetcode.assets/image-20230414150336626.png)

또한 `Submit` 버튼으로 `submit`과 submit 한 내역들을 불러올 수 있습니다.

![image-20230414150708139](https://raw.githubusercontent.com/KrGil/blog-contents-b/3dda3c995bb92c6cc475599a6bedebfbe09b7381/software/web-development/integrated-development-environment/intellij/plugins_leetcode.assets/image-20230414150708139.png)

*submit 할 경우 위와 같이 `runtime`과 `memory usage`, 그리고 퍼센테이지를 함께 출력해 줍니다.* 

![image-20230414150617709](https://raw.githubusercontent.com/KrGil/blog-contents-b/3dda3c995bb92c6cc475599a6bedebfbe09b7381/software/web-development/integrated-development-environment/intellij/plugins_leetcode.assets/image-20230414150617709.png)

*화면을 띄우거나, 좌측에 두고 볼 수 있습니다.*



이 외에도 많은 기능들이 있지만 사실 leetCode 사이트에서도 이정도 기능만 사용하는 중이라...ㅎㅎ 

웹에서 코딩할때 local 세팅과 다른점이 많아 불편한데 세팅되어있는 lcoal로 가져와서 코딩할 수 있는것도 좋은 것 같습니다.



이상으로 leetCode plugin 소개를 마치도록 하겠습니다.

다들 즐거운 코딩 되시길 바랍니다.

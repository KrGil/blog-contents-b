# [IDE] intellij로 jeus 연동하기

> 현재 운영중인 프로젝트가 예전부터(약 12년...?) eclipse만으로 개발되어 왔습니다.
>
> 저는 개인적으로 더이상 eclipse를 사용하지 않아 intellij를 사용하고 있습니다. 지금 프로젝트도 intellij를 사용하는 중입니다만 몇가지 불편한 점들이 있어 앞으로도 한번씩 관련 글을 작성할 듯 합니다.



# 연동하기

## eclipse

eclipse에서는 아래와 같이 외부 연결 tool을 설정할 수 있는 `External Tools configurations` 이 존재합니다.

따라서 아래 이미지와 같이 설정하게 되면 eclipse 내에서 jeus를 켰다 껐다 할 수 있었습니다. 

![image-20230323145637459](https://raw.githubusercontent.com/KrGil/blog-contents-b/8793860127b4cef193a11ab04a87b12970edb49e/software/web-development/integrated-development-environment/intellij/jeus.assets/image-20230323145637459.png)

## intellij

### 설정

반면 intellij에서 어디에 있는지 바로 찾기가 어렵더군요. 상단 탭에서 찾는게 아니라 `settings`에 가셔서 직접 등록을 해 주어야 합니다.

`Settings > Tools > External Tools` 로 들어가신 후 `+` 로 아래의 이미지와 같이 Program, Working directory를 설정합니다.

![image-20230323150352838](https://raw.githubusercontent.com/KrGil/blog-contents-b/8793860127b4cef193a11ab04a87b12970edb49e/software/web-development/integrated-development-environment/intellij/jeus.assets/image-20230323150352838.png)

### 실행

실행을 하기위해선 상단의 `Tools > External Tools` 에서 위에서 설정한 것들을 볼 수 있습니다.

![image-20230323151548669](https://raw.githubusercontent.com/KrGil/blog-contents-b/8793860127b4cef193a11ab04a87b12970edb49e/software/web-development/integrated-development-environment/intellij/jeus.assets/image-20230323151548669.png)

클릭 해 보시면 아래와 같이 잘 실행되는것을 확인할 수 있습니다.

![image-20230323151827898](https://raw.githubusercontent.com/KrGil/blog-contents-b/8793860127b4cef193a11ab04a87b12970edb49e/software/web-development/integrated-development-environment/intellij/jeus.assets/image-20230323151827898.png)



레거시 프로젝트...는 불편한 구석이 많은 듯 합니다 ㅠ

긴 글 읽어 주셔서 감사합니다.



오늘도 즐거운 코딩 되시길 바랍니다.



### References

https://okky.kr/questions/937217

https://stackoverflow.com/questions/19471909/how-to-execute-external-tool-in-intellij